# Build a User Management App with Ionic Angular

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](/docs/guides/database) - a Postgres database for storing your user data and [Row Level Security](/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](/docs/guides/auth) - allow users to sign up and log in.
- [Supabase Storage](/docs/guides/storage) - allow users to upload a profile photo.

![Supabase User Management example](/docs/img/ionic-demos/ionic-angular-account.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/mhartington/supabase-ionic-angular).

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

To do this, you need to get the Project URL and key from [the project **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=mobiles\&framework=ionicangular).

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=mobiles\&framework=ionicangular), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

[Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.

## Building the app

Let's start building the Angular app from scratch.

### Initialize an Ionic Angular app

We can use the [Ionic CLI](https://ionicframework.com/docs/cli) to initialize
an app called `supabase-ionic-angular`:

```bash
npm install -g @ionic/cli
ionic start supabase-ionic-angular blank --type angular
cd supabase-ionic-angular
```

Then let's install the only additional dependency: [supabase-js](https://github.com/supabase/supabase-js)

```bash
npm install @supabase/supabase-js
```

And finally, we want to save the environment variables in the `src/environments/environment.ts` file.
All we need are the API URL and the key that you copied [earlier](#get-api-details).
These variables will be exposed on the browser, and that's completely fine since we have [Row Level Security](/docs/guides/auth#row-level-security) enabled on our Database.

````
```ts name=environment.ts
export const environment = {
  production: false,
  supabaseUrl: 'YOUR_SUPABASE_URL',
  supabaseKey: 'YOUR_SUPABASE_KEY',
}
```
````

Now that we have the API credentials in place, let's create a `SupabaseService` with `ionic g s supabase` to initialize the Supabase client and implement functions to communicate with the Supabase API.

````
```ts name=src/app/supabase.service.ts
import { Injectable } from '@angular/core'
import { LoadingController, ToastController } from '@ionic/angular'
import { AuthChangeEvent, createClient, Session, SupabaseClient } from '@supabase/supabase-js'
import { environment } from '../environments/environment'

export interface Profile {
  username: string
  website: string
  avatar_url: string
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  get user() {
    return this.supabase.auth.getUser().then(({ data }) => data?.user)
  }

  get session() {
    return this.supabase.auth.getSession().then(({ data }) => data?.session)
  }

  get profile() {
    return this.user
      .then((user) => user?.id)
      .then((id) =>
        this.supabase.from('profiles').select(`username, website, avatar_url`).eq('id', id).single()
      )
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback)
  }

  signIn(email: string) {
    return this.supabase.auth.signInWithOtp({ email })
  }

  signOut() {
    return this.supabase.auth.signOut()
  }

  async updateProfile(profile: Profile) {
    const user = await this.user
    const update = {
      ...profile,
      id: user?.id,
      updated_at: new Date(),
    }

    return this.supabase.from('profiles').upsert(update)
  }

  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path)
  }

  uploadAvatar(filePath: string, file: File) {
    return this.supabase.storage.from('avatars').upload(filePath, file)
  }

  async createNotice(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 5000 })
    await toast.present()
  }

  createLoader() {
    return this.loadingCtrl.create()
  }
}
```
````

### Set up a login route

Let's set up a route to manage logins and signups. We'll use Magic Links so users can sign in with their email without using passwords.
Create a `LoginPage` with the `ionic g page login` Ionic CLI command.

This guide will show the template inline, but the example app will have `templateUrl`s

````
```ts name=src/app/login/login.page.ts
import { Component, OnInit } from '@angular/core'
import { SupabaseService } from '../supabase.service'

@Component({
  selector: 'app-login',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      
        Supabase + Ionic Angular
        Sign in via magic link with your email below
      
      <ion-list inset="true">
        
          <ion-item>
            <ion-label position="stacked">Email</ion-label>
            <ion-input [(ngModel)]="email" name="email" autocomplete type="email"></ion-input>
          </ion-item>
          
            <ion-button type="submit" fill="clear">Login</ion-button>
          
        
      </ion-list>
    </ion-content>
  `,
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email = ''

  constructor(private readonly supabase: SupabaseService) {}

  async handleLogin(event: any) {
    event.preventDefault()
    const loader = await this.supabase.createLoader()
    await loader.present()
    try {
      const { error } = await this.supabase.signIn(this.email)
      if (error) {
        throw error
      }
      await loader.dismiss()
      await this.supabase.createNotice('Check your email for the login link!')
    } catch (error: any) {
      await loader.dismiss()
      await this.supabase.createNotice(error.error_description || error.message)
    }
  }
}
```
````

### Account page

After a user is signed in, we can allow them to edit their profile details and manage their account.
Create an `AccountComponent` with `ionic g page account` Ionic CLI command.

````
```ts name=src/app/account.page.ts
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Profile, SupabaseService } from '../supabase.service'

@Component({
  selector: 'app-account',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Account</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      
        <ion-item>
          <ion-label position="stacked">Email</ion-label>
          <ion-input type="email" name="email" [(ngModel)]="email" readonly></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Name</ion-label>
          <ion-input type="text" name="username" [(ngModel)]="profile.username"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Website</ion-label>
          <ion-input type="url" name="website" [(ngModel)]="profile.website"></ion-input>
        </ion-item>
        
          <ion-button fill="clear" (click)="updateProfile()">Update Profile</ion-button>
        
      

      
        <ion-button fill="clear" (click)="signOut()">Log Out</ion-button>
      
    </ion-content>
  `,
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  profile: Profile = {
    username: '',
    avatar_url: '',
    website: '',
  }

  email = ''

  constructor(
    private readonly supabase: SupabaseService,
    private router: Router
  ) {}
  ngOnInit() {
    this.getEmail()
    this.getProfile()
  }

  async getEmail() {
    this.email = await this.supabase.user.then((user) => user?.email || '')
  }

  async getProfile() {
    try {
      const { data: profile, error, status } = await this.supabase.profile
      if (error && status !== 406) {
        throw error
      }
      if (profile) {
        this.profile = profile
      }
    } catch (error: any) {
      alert(error.message)
    }
  }

  async updateProfile(avatar_url: string = '') {
    const loader = await this.supabase.createLoader()
    await loader.present()
    try {
      const { error } = await this.supabase.updateProfile({ ...this.profile, avatar_url })
      if (error) {
        throw error
      }
      await loader.dismiss()
      await this.supabase.createNotice('Profile updated!')
    } catch (error: any) {
      await loader.dismiss()
      await this.supabase.createNotice(error.message)
    }
  }

  async signOut() {
    console.log('testing?')
    await this.supabase.signOut()
    this.router.navigate(['/'], { replaceUrl: true })
  }
}
```
````

### Launch!

Now that we have all the components in place, let's update `AppComponent`:

````
```ts name=src/app/app.component.ts
import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { SupabaseService } from './supabase.service'

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private supabase: SupabaseService,
    private router: Router
  ) {
    this.supabase.authChanges((_, session) => {
      console.log(session)
      if (session?.user) {
        this.router.navigate(['/account'])
      }
    })
  }
}
```
````

Then update the `AppRoutingModule`

````
```ts name=src/app/app-routing.module.ts"
import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then((m) => m.AccountPageModule),
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```
````

Once that's done, run this in a terminal window:

```bash
ionic serve
```

And the browser will automatically open to show the app.

![Supabase Angular](/docs/img/ionic-demos/ionic-angular.png)

## Bonus: Profile photos

Every Supabase project is configured with [Storage](/docs/guides/storage) for managing large files like photos and videos.

### Create an upload widget

Let's create an avatar for the user so that they can upload a profile photo.

First, install two packages in order to interact with the user's camera.

```bash
npm install @ionic/pwa-elements @capacitor/camera
```

[Capacitor](https://capacitorjs.com) is a cross-platform native runtime from Ionic that enables web apps to be deployed through the app store and provides access to native device API.

Ionic PWA elements is a companion package that will polyfill certain browser APIs that provide no user interface with custom Ionic UI.

With those packages installed, we can update our `main.ts` to include an additional bootstrapping call for the Ionic PWA Elements.

````
```ts name=src/main.ts
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

import { defineCustomElements } from '@ionic/pwa-elements/loader'
defineCustomElements(window)

if (environment.production) {
  enableProdMode()
}
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err))
```
````

Then create an `AvatarComponent` with this Ionic CLI command:

```bash
 ionic g component avatar --module=/src/app/account/account.module.ts --create-module
```

````
```ts name=src/app/avatar.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { SupabaseService } from '../supabase.service'
import { Camera, CameraResultType } from '@capacitor/camera'
import { addIcons } from 'ionicons'
import { person } from 'ionicons/icons'
@Component({
  selector: 'app-avatar',
  template: `
    
      
      <ng-template #noAvatar>
        <ion-icon name="person" class="no-avatar"></ion-icon>
      </ng-template>
    
  `,
  style: [
    `
    :host {
       display: block;
       margin: auto;
       min-height: 150px;
    }
     :host .avatar_wrapper {
       margin: 16px auto 16px;
       border-radius: 50%;
       overflow: hidden;
       height: 150px;
       aspect-ratio: 1;
       background: var(--ion-color-step-50);
       border: thick solid var(--ion-color-step-200);
    }
     :host .avatar_wrapper:hover {
       cursor: pointer;
    }
     :host .avatar_wrapper ion-icon.no-avatar {
       width: 100%;
       height: 115%;
    }
     :host img {
       display: block;
       object-fit: cover;
       width: 100%;
       height: 100%;
    }
  `,
  ],
})
export class AvatarComponent {
  _avatarUrl: SafeResourceUrl | undefined
  uploading = false

  @Input()
  set avatarUrl(url: string | undefined) {
    if (url) {
      this.downloadImage(url)
    }
  }

  @Output() upload = new EventEmitter()

  constructor(
    private readonly supabase: SupabaseService,
    private readonly dom: DomSanitizer
  ) {
    addIcons({ person })
  }

  async downloadImage(path: string) {
    try {
      const { data, error } = await this.supabase.downLoadImage(path)
      if (error) {
        throw error
      }
      this._avatarUrl = this.dom.bypassSecurityTrustResourceUrl(URL.createObjectURL(data!))
    } catch (error: any) {
      console.error('Error downloading image: ', error.message)
    }
  }

  async uploadAvatar() {
    const loader = await this.supabase.createLoader()
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
      })

      const file = await fetch(photo.dataUrl!)
        .then((res) => res.blob())
        .then((blob) => new File([blob], 'my-file', { type: `image/${photo.format}` }))

      const fileName = `${Math.random()}-${new Date().getTime()}.${photo.format}`

      await loader.present()
      const { error } = await this.supabase.uploadAvatar(fileName, file)

      if (error) {
        throw error
      }

      this.upload.emit(fileName)
    } catch (error: any) {
      this.supabase.createNotice(error.message)
    } finally {
      loader.dismiss()
    }
  }
}
```
````

### Add the new widget

And then, we can add the widget on top of the `AccountComponent` HTML template:

````
```ts name=src/app/account.component.ts
template: `
<ion-header>
  <ion-toolbar>
    <ion-title>Account</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <app-avatar
    [avatarUrl]="this.profile?.avatar_url"
    (upload)="updateProfile($event)"
  ></app-avatar>


`
```
````

At this stage, you have a fully functional application!

## See also

- [Authentication in Ionic Angular with Supabase](/blog/authentication-in-ionic-angular)
