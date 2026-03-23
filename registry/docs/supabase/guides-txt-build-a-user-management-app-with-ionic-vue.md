# Build a User Management App with Ionic Vue

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](/docs/guides/database) - a Postgres database for storing your user data and [Row Level Security](/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](/docs/guides/auth) - allow users to sign up and log in.
- [Supabase Storage](/docs/guides/storage) - allow users to upload a profile photo.

![Supabase User Management example](/docs/img/ionic-demos/ionic-angular-account.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/supabase/supabase/tree/master/examples/user-management/ionic-vue-user-management).

## Project setup

Before you start building you need to set up the Database and API. You can do this by starting a new Project in Supabase and then creating a "schema" inside the database.

### Create a project

1. [Create a new project](/dashboard) in the Supabase Dashboard.
2. Enter your project details.
3. Wait for the new database to launch.

### Set up the database schema

Now set up the database schema. You can use the "User Management Starter" quickstart in the SQL Editor, or you can copy/paste the SQL from below and run it.

````
1.  Go to the [SQL Editor](/dashboard/project/_/sql) page in the Dashboard.
2.  Click **User Management Starter** under the **Community > Quickstarts** tab.
3.  Click **Run**.


  You can pull the database schema down to your local project by running the `db pull` command. Read the [local development docs](/docs/guides/cli/local-development#link-your-project) for detailed instructions.

  ```bash
  supabase link --project-ref <project-id>
  # You can get <project-id> from your project's dashboard URL: https://supabase.com/dashboard/project/<project-id>
  supabase db pull
  ```





  When working locally you can run the following command to create a new migration file:


```bash
supabase migration new user_management_starter
```

```sql
-- Create a table for public profiles
create table profiles (
  id uuid references auth.users not null primary key,
  updated_at timestamp with time zone,
  username text unique,
  full_name text,
  avatar_url text,
  website text,

  constraint username_length check (char_length(username) >= 3)
);
-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/database/postgres/row-level-security for more details.
alter table profiles
  enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check ((select auth.uid()) = id);

create policy "Users can update own profile." on profiles
  for update using ((select auth.uid()) = id);

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create function public.handle_new_user()
returns trigger
set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Set up Storage!
insert into storage.buckets (id, name)
  values ('avatars', 'avatars');

-- Set up access controls for storage.
-- See https://supabase.com/docs/guides/storage/security/access-control#policy-examples for more details.
create policy "Avatar images are publicly accessible." on storage.objects
  for select using (bucket_id = 'avatars');

create policy "Anyone can upload an avatar." on storage.objects
  for insert with check (bucket_id = 'avatars');

create policy "Anyone can update their own avatar." on storage.objects
  for update using ((select auth.uid()) = owner) with check (bucket_id = 'avatars');
```
````

### Get API details

Now that you've created some database tables, you are ready to insert data using the auto-generated API.

To do this, you need to get the Project URL and key from [the project **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=vuejs).

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=vuejs), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

[Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.

## Building the app

Start by building the Vue app from scratch.

### Initialize an Ionic Vue app

Use the [Ionic CLI](https://ionicframework.com/docs/cli) to initialize an app called `supabase-ionic-vue`:

```bash
npm install -g @ionic/cli
ionic start supabase-ionic-vue blank --type vue
cd supabase-ionic-vue
```

Install the only additional dependency: [supabase-js](https://github.com/supabase/supabase-js)

```bash
npm install @supabase/supabase-js
```

Save the environment variables in a `.env` file, including the API URL and key that you copied [earlier](#get-api-details).

````
```bash name=.env
VUE_APP_SUPABASE_URL=YOUR_SUPABASE_URL
VUE_APP_SUPABASE_KEY=YOUR_SUPABASE_KEY
```
````

With the API credentials in place, create a helper file to initialize the Supabase client. These variables will be exposed on the browser, and that's fine since Supabase enables [Row Level Security](/docs/guides/auth#row-level-security) on Databases by default.

````
```typescript name=src/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VUE_APP_SUPABASE_URL
const supabaseKey = process.env.VUE_APP_SUPABASE_KEY

if (!supabaseUrl) {
  throw new Error(
    'Environment variable VUE_APP_SUPABASE_URL is not set. Please define it before starting the application.'
  )
}

if (!supabaseKey) {
  throw new Error(
    'Environment variable VUE_APP_SUPABASE_KEY is not set. Please define it before starting the application.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseKey)
```
````

### Set up a login route

Create a Vue component to manage logins and sign ups that uses Magic Links, so users can sign in with their email without using passwords.

````
```

  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      
        Supabase + Ionic Vue
        Sign in via magic link with your email below
      
      <ion-list inset="true">
        
          <ion-item>
            <ion-input
              v-model="email"
              label="Email"
              label-placement="stacked"
              name="email"
              autocomplete="email"
              type="email"
            ></ion-input>
          </ion-item>
          
            <ion-button type="submit" fill="clear">Login</ion-button>
          
        
      </ion-list>
      {{ email }}
    </ion-content>
  </ion-page>



import { supabase } from '../supabase';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  toastController,
  loadingController,
} from '@ionic/vue';
import { ref } from 'vue';

const email = ref('');

const handleLogin = async () => {
  const loader = await loadingController.create({});
  const toast = await toastController.create({ duration: 5000 });

  try {
    await loader.present();
    const { error } = await supabase.auth.signInWithOtp({ email: email.value });

    if (error) throw error;

    toast.message = 'Check your email for the login link!';
    await toast.present();
  } catch (error: any) {
    toast.message = error.error_description || error.message;
    await toast.present();
  } finally {
    await loader.dismiss();
  }
};

```
````

### Account page

After a user has signed in, let them edit their profile details and manage their account with a new component called `Account.vue`.

````
```

  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Account</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      
      
        <ion-item>
          <ion-label>
            Email
            {{ store.user?.email }}
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-input
            type="text"
            name="username"
            label="Name"
            label-placement="stacked"
            v-model="profile.username"
          ></ion-input>
        </ion-item>

        <ion-item>
          <ion-input
            type="url"
            name="website"
            label="Website"
            label-placement="stacked"
            v-model="profile.website"
          ></ion-input>
        </ion-item>
        
          <ion-button fill="clear" type="submit">Update Profile</ion-button>
        
      

      
        <ion-button fill="clear" @click="signOut">Log Out</ion-button>
      
    </ion-content>
  </ion-page>



import { store } from '@/store';
import { supabase } from '@/supabase';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  toastController,
  loadingController,
  IonInput,
  IonItem,
  IonButton,
  IonLabel,
} from '@ionic/vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Avatar from '../components/Avatar.vue';

const router = useRouter();

const profile = ref({
  username: '',
  website: '',
  avatar_url: '',
});

async function getProfile() {
  const loader = await loadingController.create({});
  const toast = await toastController.create({ duration: 5000 });
  await loader.present();
  try {
    const { data: { claims } } = await supabase.auth.getClaims();
    if (!claims) throw new Error('No user logged in');

    const { data, error, status } = await supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', claims.sub)
      .single();

    if (error && status !== 406) throw error;

    if (data) {
      profile.value = {
        username: data.username,
        website: data.website,
        avatar_url: data.avatar_url,
      };
    }
  } catch (error: any) {
    toast.message = error.message;
    await toast.present();
  } finally {
    await loader.dismiss();
  }
}

const updateProfile = async () => {
  const loader = await loadingController.create({});
  const toast = await toastController.create({ duration: 5000 });
  try {
    await loader.present();
    const { data: { claims } } = await supabase.auth.getClaims();
    if (!claims) throw new Error('No user logged in');

    const updates = {
      id: claims.sub,
      ...profile.value,
      updated_at: new Date(),
    };

    const { error } = await supabase.from('profiles').upsert(updates);

    if (error) throw error;
  } catch (error: any) {
    toast.message = error.message;
    await toast.present();
  } finally {
    await loader.dismiss();
  }
};

async function signOut() {
  const loader = await loadingController.create({});
  const toast = await toastController.create({ duration: 5000 });
  await loader.present();
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    await router.push('/');
  } catch (error: any) {
    toast.message = error.message;
    await toast.present();
  } finally {
    await loader.dismiss();
  }
}

onMounted(() => {
  getProfile();
});

```
````

### Launch!

With all the components in place, update `App.vue` and the app routes:

````
```typescript name=src/router/index.ts
import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import LoginPage from '../views/Login.vue'
import AccountPage from '../views/Account.vue'
const routes: Array = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/account',
    name: 'Account',
    component: AccountPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
```





```

  <ion-app>
    
  </ion-app>



import { IonApp, IonRouterOutlet, useIonRouter } from '@ionic/vue';
import { onUnmounted } from 'vue';
import { store } from './store';
import { supabase } from './supabase';

const router = useIonRouter();

supabase.auth.getClaims().then(({ data: { claims } }) => {
  store.user = claims;
});

const {
  data: { subscription },
} = supabase.auth.onAuthStateChange((_event, session) => {
  store.user = session?.user ?? null;
  if (session?.user) {
    router.replace('/account');
  } else {
    router.replace('/');
  }
});

onUnmounted(() => {
  subscription.unsubscribe();
});

```
````

Once that's done, run this in a terminal window:

```bash
ionic serve
```

And then open the browser to [localhost:8100](http://localhost:8100) and you should see the completed app.

![Supabase Ionic Vue](/docs/img/ionic-demos/ionic-vue.png)

## Bonus: Profile photos

Every Supabase project is configured with [Storage](/docs/guides/storage) for managing large files like photos and videos.

### Create an upload widget

First install two packages to interact with the user's camera.

```bash
npm install @ionic/pwa-elements @capacitor/camera
```

[Capacitor](https://capacitorjs.com) is a cross-platform native runtime from Ionic that enables you to deploy web apps to app stores and provides access to native device API.

Ionic PWA elements is a companion package that polyfills certain browser APIs that provide no user interface with custom Ionic UI.

With those packages installed, update `main.ts` to include an additional bootstrapping call for the Ionic PWA Elements.

````
```typescript name=src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { IonicVue } from '@ionic/vue'
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/ionic.bundle.css'

/* Theme variables */
import './theme/variables.css'

import { defineCustomElements } from '@ionic/pwa-elements/loader'
defineCustomElements(window)
const app = createApp(App).use(IonicVue).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
```
````

Then create an `AvatarComponent`.

````
```

  
    
      
      <ion-icon v-else :icon="person" class="no-avatar"></ion-icon>
    
  



import { ref, toRef, watch } from 'vue';
import { supabase } from '../supabase';
import { Camera, CameraResultType } from '@capacitor/camera';
import { IonIcon } from '@ionic/vue';
import { person } from 'ionicons/icons';

const props = defineProps<{ path?: string }>();
const emit = defineEmits<{
  upload: [];
  'update:path': [value: string];
}>();

const path = toRef(props, 'path');
const avatarUrl = ref('');

const downloadImage = async () => {
  try {
    const { data, error } = await supabase.storage
      .from('avatars')
      .download(path.value!);
    if (error) throw error;
    avatarUrl.value = URL.createObjectURL(data!);
  } catch (error: any) {
    console.error('Error downloading image: ', error.message);
  }
};

const uploadAvatar = async () => {
  try {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
    });

    if (photo.dataUrl) {
      const file = await fetch(photo.dataUrl)
        .then((res) => res.blob())
        .then(
          (blob) =>
            new File([blob], 'my-file', { type: `image/${photo.format}` })
        );

      const fileName = `${Math.random()}-${new Date().getTime()}.${
        photo.format
      }`;
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(fileName, file);
      if (uploadError) {
        throw uploadError;
      }
      emit('update:path', fileName);
      emit('upload');
    }
  } catch (error) {
    console.log(error);
  }
};

watch(path, () => {
  if (path.value) downloadImage();
});



.avatar {
  display: block;
  margin: auto;
  min-height: 150px;
}
.avatar .avatar_wrapper {
  margin: 16px auto 16px;
  border-radius: 50%;
  overflow: hidden;
  height: 150px;
  aspect-ratio: 1;
  background: var(--ion-color-step-50);
  border: thick solid var(--ion-color-step-200);
}
.avatar .avatar_wrapper:hover {
  cursor: pointer;
}
.avatar .avatar_wrapper ion-icon.no-avatar {
  width: 100%;
  height: 115%;
}
.avatar img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

```
````

### Add the new widget

Add the widget to the Account page (already included in the Account.vue code above since the example includes the Avatar component by default).

At this stage you have a fully functional application!

# Build a Product Management Android App with Jetpack Compose

This tutorial demonstrates how to build a basic product management app. The app demonstrates management operations, photo upload, account creation and authentication using:

- [Supabase Database](/docs/guides/database) - a Postgres database for storing your user data and [Row Level Security](/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](/docs/guides/auth) - users log in through magic links sent to their email (without having to set up a password).
- [Supabase Storage](/docs/guides/storage) - users can upload a profile photo.

![manage-product-cover](/docs/img/guides/kotlin/manage-product-cover.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/hieuwu/product-sample-supabase-kt).
