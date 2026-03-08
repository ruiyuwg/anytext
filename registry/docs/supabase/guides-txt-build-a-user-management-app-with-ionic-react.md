# Build a User Management App with Ionic React

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](/docs/guides/database) - a Postgres database for storing your user data and [Row Level Security](/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](/docs/guides/auth) - allow users to sign up and log in.
- [Supabase Storage](/docs/guides/storage) - allow users to upload a profile photo.

![Supabase User Management example](/docs/img/ionic-demos/ionic-angular-account.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/mhartington/supabase-ionic-react).

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

To do this, you need to get the Project URL and key from [the project **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=mobiles\&framework=ionicreact).

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=mobiles\&framework=ionicreact), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

[Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.

## Building the app

Let's start building the React app from scratch.

### Initialize an Ionic React app

We can use the [Ionic CLI](https://ionicframework.com/docs/cli) to initialize
an app called `supabase-ionic-react`:

```bash
npm install -g @ionic/cli
ionic start supabase-ionic-react blank --type react
cd supabase-ionic-react
```

Then let's install the only additional dependency: [supabase-js](https://github.com/supabase/supabase-js)

```bash
npm install @supabase/supabase-js
```

And finally we want to save the environment variables in a `.env`.
All we need are the API URL and the key that you copied [earlier](#get-api-details).

````
```bash name=.env
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```
````

Now that we have the API credentials in place, let's create a helper file to initialize the Supabase client. These variables will be exposed
on the browser, and that's completely fine since we have [Row Level Security](/docs/guides/auth#row-level-security) enabled on our Database.

````
```js name=src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || ''

export const supabase = createClient(supabaseUrl, supabasePublishableKey)
```
````

### Set up a login route

Let's set up a React component to manage logins and sign ups. We'll use Magic Links, so users can sign in with their email without using passwords.

````
```jsx name=/src/pages/Login.tsx
import { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonToast,
  useIonLoading,
} from '@ionic/react';

import {supabase} from '../supabaseClient'

export function LoginPage() {
  const [email, setEmail] = useState('');

  const [showLoading, hideLoading] = useIonLoading();
  const [showToast ] = useIonToast();
  const handleLogin = async (e: React.FormEvent) => {
    console.log()
    e.preventDefault();
    await showLoading();
    try {
      await supabase.auth.signInWithOtp({
        "email": email
      });
      await showToast({ message: 'Check your email for the login link!' });
    } catch (e: any) {
      await showToast({ message: e.error_description || e.message , duration: 5000});
    } finally {
      await hideLoading();
    }
  };
  return (
    
      
        
          Login
        
      

      
        
          Supabase + Ionic React
          Sign in via magic link with your email below
        
        
          
            
              Email
              <IonInput
                value={email}
                name="email"
                onIonChange={(e) => setEmail(e.detail.value ?? '')}
                type="email"
              >
            
            
              
                Login
              
            
          
        
      
    
  );
}
```
````

### Account page

After a user is signed in we can allow them to edit their profile details and manage their account.

Let's create a new component for that called `Account.tsx`.

````
```jsx name=src/pages/Account.tsx
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonLoading,
  useIonToast,
  useIonRouter
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Session } from '@supabase/supabase-js';

export function AccountPage() {
  const [showLoading, hideLoading] = useIonLoading();
  const [showToast] = useIonToast();
  const [session, setSession] = useState(null)
  const router = useIonRouter();
  const [profile, setProfile] = useState({
    username: '',
    website: '',
    avatar_url: '',
  });

  useEffect(() => {
    const getSession = async () => {
      setSession(await supabase.auth.getSession().then((res) => res.data.session))
    }
    getSession()
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  useEffect(() => {
    getProfile();
  }, [session]);
  const getProfile = async () => {
    console.log('get');
    await showLoading();
    try {
      const user = await supabase.auth.getUser();
      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user!.data.user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setProfile({
          username: data.username,
          website: data.website,
          avatar_url: data.avatar_url,
        });
      }
    } catch (error: any) {
      showToast({ message: error.message, duration: 5000 });
    } finally {
      await hideLoading();
    }
  };
  const signOut = async () => {
    await supabase.auth.signOut();
    router.push('/', 'forward', 'replace');
  }
  const updateProfile = async (e?: any, avatar_url: string = '') => {
    e?.preventDefault();

    console.log('update ');
    await showLoading();

    try {
      const user = await supabase.auth.getUser();

      const updates = {
        id: user!.data.user?.id,
        ...profile,
        avatar_url: avatar_url,
        updated_at: new Date(),
      };

      const { error } = await supabase.from('profiles').upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error: any) {
      showToast({ message: error.message, duration: 5000 });
    } finally {
      await hideLoading();
    }
  };
  return (
    
      
        
          Account
        
      

      
        
          
            
              Email
              {session?.user?.email}
            
          

          
            Name
            <IonInput
              type="text"
              name="username"
              value={profile.username}
              onIonChange={(e) =>
                setProfile({ ...profile, username: e.detail.value ?? '' })
              }
            >
          

          
            Website
            <IonInput
              type="url"
              name="website"
              value={profile.website}
              onIonChange={(e) =>
                setProfile({ ...profile, website: e.detail.value ?? '' })
              }
            >
          
          
            
              Update Profile
            
          
        

        
          
            Log Out
          
        
      
    
  );
}
```
````

### Launch!

Now that we have all the components in place, let's update `App.tsx`:

````
```jsx name=src/App.tsx
import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { supabase } from './supabaseClient'

import '@ionic/react/css/ionic.bundle.css'

/* Theme variables */
import './theme/variables.css'
import { LoginPage } from './pages/Login'
import { AccountPage } from './pages/Account'
import { useEffect, useState } from 'react'
import { Session } from '@supabase/supabase-js'

setupIonicReact()

const App: React.FC = () => {
  const [session, setSession] = useState(null)
  useEffect(() => {
    const getSession = async () => {
      setSession(await supabase.auth.getSession().then((res) => res.data.session))
    }
    getSession()
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    
      
        
          <Route
            exact
            path="/"
            render={() => {
              return session ?  : 
            }}
          />
          
            
          
        
      
    
  )
}

export default App
```
````

Once that's done, run this in a terminal window:

```bash
ionic serve
```

And then open the browser to [localhost:3000](http://localhost:3000) and you should see the completed app.

![Supabase Ionic React](/docs/img/ionic-demos/ionic-react.png)

## Bonus: Profile photos

Every Supabase project is configured with [Storage](/docs/guides/storage) for managing large files like photos and videos.

### Create an upload widget

First install two packages in order to interact with the user's camera.

```bash
npm install @ionic/pwa-elements @capacitor/camera
```

[Capacitor](https://capacitorjs.com) is a cross platform native runtime from Ionic that enables web apps to be deployed through the app store and provides access to native device API.

Ionic PWA elements is a companion package that will polyfill certain browser APIs that provide no user interface with custom Ionic UI.

With those packages installed we can update our `index.tsx` to include an additional bootstrapping call for the Ionic PWA Elements.

````
```ts name=src/index.tsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

import { defineCustomElements } from '@ionic/pwa-elements/loader'
defineCustomElements(window)

ReactDOM.render(
  <React.StrictMode>
    
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegistration.unregister()
reportWebVitals()
```
````

Then create an `AvatarComponent`.

````
```jsx name=src/components/Avatar.tsx
import { IonIcon } from '@ionic/react';
import { person } from 'ionicons/icons';
import { Camera, CameraResultType } from '@capacitor/camera';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import './Avatar.css'
export function Avatar({
  url,
  onUpload,
}: {
  url: string;
  onUpload: (e: any, file: string) => Promise;
}) {
  const [avatarUrl, setAvatarUrl] = useState();

  useEffect(() => {
    if (url) {
      downloadImage(url);
    }
  }, [url]);
  const uploadAvatar = async () => {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
      });

      const file = await fetch(photo.dataUrl!)
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
      onUpload(null, fileName);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadImage = async (path: string) => {
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data!);
      setAvatarUrl(url);
    } catch (error: any) {
      console.log('Error downloading image: ', error.message);
    }
  };

  return (
    
    
      {avatarUrl ? (
        
      ) : (
        
      )}
    

    
  );
}
```
````

### Add the new widget

And then we can add the widget to the Account page:

````
```jsx name=src/pages/Account.tsx
// Import the new component

import { Avatar } from '../components/Avatar';

// ...
return (
  
    
      
        Account
      
    

    
      
```
````

At this stage you have a fully functional application!
