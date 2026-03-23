# Build a User Management App with Angular

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](/docs/guides/database) - a Postgres database for storing your user data and [Row Level Security](/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](/docs/guides/auth) - allow users to sign up and log in.
- [Supabase Storage](/docs/guides/storage) - allow users to upload a profile photo.

![Supabase User Management example](/docs/img/user-management-demo.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/supabase/supabase/tree/master/examples/user-management/angular-user-management).

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

Start with building the Angular app from scratch.

### Initialize an Angular app

You can use the [Angular CLI](https://angular.io/cli) to initialize an app called `supabase-angular`.
The command sets some defaults, that you change to suit your needs:

```bash
npx ng new supabase-angular --routing false --style css --standalone false --ssr false
cd supabase-angular
```

Then, install the only additional dependency: [supabase-js](https://github.com/supabase/supabase-js)

```bash
npm install @supabase/supabase-js
```

Finally, save the environment variables in a new `src/environments/environment.ts` file.
You need to create the `src/environments` directory first.
All you need are the API URL and the key that you copied [earlier](#get-api-details).
The application exposes these variables in the browser, and that's fine as you have [Row Level Security](/docs/guides/auth#row-level-security) enabled on the Database.

````
```typescript name=src/environments/environment.ts
export const environment = {
  production: false,
  supabaseUrl: 'YOUR_SUPABASE_URL',
  supabaseKey: 'YOUR_SUPABASE_KEY',
}
```
````

With the API credentials in place, create a `SupabaseService` with `ng g s supabase` and add the following code to initialize the Supabase client and implement functions to communicate with the Supabase API.

This uses the [`getUser`](/docs/reference/javascript/auth-getuser) method to get the current user details if there is an existing session. This method performs a network request to the Supabase Auth server.

````
```typescript name=src/app/supabase.service.ts
import { Injectable } from '@angular/core'
import { AuthChangeEvent, createClient, Session, SupabaseClient, User } from '@supabase/supabase-js'
import { environment } from '../environments/environment'

export interface Profile {
  id?: string
  username: string
  website: string
  avatar_url: string
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  async getUser(): Promise {
    const { data, error } = await this.supabase.auth.getUser()
    if (error) {
      return null
    }
    return data.user
  }

  profile(user: User) {
    return this.supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single()
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

  updateProfile(profile: Profile) {
    const update = {
      ...profile,
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
}
```
````

Optionally, update `src/styles.css` to style the app. You can find the full contents of this file [in the example repository](https://github.com/supabase/supabase/tree/master/examples/user-management/angular-user-management/src/styles.css).

### Set up a login component

Next, set up an Angular component to manage logins and sign ups. The component uses [Magic Links](/docs/guides/auth/auth-email-passwordless#with-magic-link), so users can sign in with their email without using passwords.

Create an `AuthComponent` with the `ng g c auth` Angular CLI command and add the following code.

````
  ```typescript name=src/app/auth/auth.component.ts
  import { Component } from '@angular/core'
  import { FormBuilder, FormGroup } from '@angular/forms'
  import { SupabaseService } from '../supabase.service'

  @Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
    standalone: false,
  })
  export class AuthComponent {
    signInForm!: FormGroup
    constructor(
      private readonly supabase: SupabaseService,
      private readonly formBuilder: FormBuilder
    ) {}

    loading = false
    ngOnInit() {
      this.signInForm = this.formBuilder.group({
        email: '',
      })
    }

    async onSubmit(): Promise {
      try {
        this.loading = true
        const email = this.signInForm.value.email as string
        const { error } = await this.supabase.signIn(email)
        if (error) throw error
        alert('Check your email for the login link!')
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        this.signInForm.reset()
        this.loading = false
      }
    }
  }
  ```





  ```
  
    
      Supabase + Angular
      Sign in via magic link with your email below
      
        
          Email
          <input
            id="email"
            formControlName="email"
            class="inputField"
            type="email"
            placeholder="Your email"
          />
        
        
          
            {{ loading ? "Loading" : "Send magic link" }}
          
        
      
    
  
  ```
````

### Account page

Users also need a way to edit their profile details and manage their accounts after signing in.
Create an `AccountComponent` with the `ng g c account` Angular CLI command and add the following code.

````
  ```typescript name=src/app/account/account.component.ts
  import { Component, Input, OnInit } from '@angular/core'
  import { FormBuilder, FormGroup } from '@angular/forms'
  import { User } from '@supabase/supabase-js'
  import { Profile, SupabaseService } from '../supabase.service'

  @Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
    standalone: false,
  })
  export class AccountComponent implements OnInit {
    loading = false
    profile!: Profile
    updateProfileForm!: FormGroup

    get avatarUrl() {
      return this.updateProfileForm.value.avatar_url as string
    }

    async updateAvatar(event: string): Promise {
      this.updateProfileForm.patchValue({
        avatar_url: event,
      })
      await this.updateProfile()
    }

    @Input()
    user!: User

    constructor(
      private readonly supabase: SupabaseService,
      private formBuilder: FormBuilder
    ) {
      this.updateProfileForm = this.formBuilder.group({
        username: '',
        website: '',
        avatar_url: '',
      })
    }

    async ngOnInit(): Promise {
      await this.getProfile()

      const { username, website, avatar_url } = this.profile
      this.updateProfileForm.patchValue({
        username,
        website,
        avatar_url,
      })
    }

    async getProfile() {
      try {
        this.loading = true
        const { data: profile, error, status } = await this.supabase.profile(this.user)

        if (error && status !== 406) {
          throw error
        }

        if (profile) {
          this.profile = profile
        }
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        this.loading = false
      }
    }

    async updateProfile(): Promise {
      try {
        this.loading = true

        const username = this.updateProfileForm.value.username as string
        const website = this.updateProfileForm.value.website as string
        const avatar_url = this.updateProfileForm.value.avatar_url as string

        const { error } = await this.supabase.updateProfile({
          id: this.user.id,
          username,
          website,
          avatar_url,
        })
        if (error) throw error
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        this.loading = false
      }
    }

    async signOut() {
      await this.supabase.signOut()
    }
  }
  ```





  ```
  
    <app-avatar [avatarUrl]="this.avatarUrl" (upload)="updateAvatar($event)"></app-avatar>
    
      Email
      
    
    
      Name
      
    
    
      Website
      
    

    
      
        {{ loading ? "Loading ..." : "Update" }}
      
    

    
      Sign Out
    
  
  ```
````

## Profile photos

Every Supabase project is configured with [Storage](/docs/guides/storage) for managing large files like photos and videos.

### Create an upload widget

Create an avatar for the user so that they can upload a profile photo.
Create an `AvatarComponent` with `ng g c avatar` Angular CLI command and add the following code.

````
  ```typescript name=src/app/avatar/avatar.component.ts
  import { Component, EventEmitter, Input, Output } from '@angular/core'
  import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser'
  import { SupabaseService } from '../supabase.service'

  @Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.css'],
    standalone: false,
  })
  export class AvatarComponent {
    _avatarUrl: SafeResourceUrl | undefined
    uploading = false

    @Input()
    set avatarUrl(url: string | null) {
      if (url) {
        this.downloadImage(url)
      }
    }

    @Output() upload = new EventEmitter()

    constructor(
      private readonly supabase: SupabaseService,
      private readonly dom: DomSanitizer
    ) {}

    async downloadImage(path: string) {
      try {
        const { data } = await this.supabase.downLoadImage(path)
        if (data instanceof Blob) {
          this._avatarUrl = this.dom.bypassSecurityTrustResourceUrl(URL.createObjectURL(data))
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error downloading image: ', error.message)
        }
      }
    }

    async uploadAvatar(event: any) {
      try {
        this.uploading = true
        if (!event.target.files || event.target.files.length === 0) {
          throw new Error('You must select an image to upload.')
        }

        const file = event.target.files[0]
        const fileExt = file.name.split('.').pop()
        const filePath = `${Math.random()}.${fileExt}`

        await this.supabase.uploadAvatar(filePath, file)
        this.upload.emit(filePath)
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        this.uploading = false
      }
    }
  }
  ```





  ```
  
    <img
      *ngIf="_avatarUrl"
      [src]="_avatarUrl"
      alt="Avatar"
      class="avatar image"
      style="height: 150px; width: 150px"
    />
  
  
  
    
      {{ uploading ? "Uploading ..." : "Upload" }}
    
    <input
      style="visibility: hidden; position: absolute"
      type="file"
      id="single"
      accept="image/*"
      (change)="uploadAvatar($event)"
      [disabled]="uploading"
    />
  
  ```
````

### Launch!

Now you have all the components in place, update `AppComponent`:

````
  ```typescript name=src/app/app.component.ts
  import { Component, OnInit } from '@angular/core'
  import { User } from '@supabase/supabase-js'
  import { SupabaseService } from './supabase.service'

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
  })
  export class AppComponent implements OnInit {
    constructor(private readonly supabase: SupabaseService) {}

    title = 'angular-user-management'
    user: User | null = null

    async ngOnInit() {
      this.user = await this.supabase.getUser()
      this.supabase.authChanges(async () => {
        this.user = await this.supabase.getUser()
      })
    }
  }
  ```





  ```
  
    <app-account *ngIf="user" [user]="user"></app-account>
    <app-auth *ngIf="!user"></app-auth>
  
  ```
````

You also need to change `app.module.ts` to include the `ReactiveFormsModule` from the `@angular/forms` package.

````
```typescript name=src/app/app.module.ts
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { AuthComponent } from './auth/auth.component'
import { AccountComponent } from './account/account.component'
import { AvatarComponent } from './avatar/avatar.component'

@NgModule({
  declarations: [AppComponent, AuthComponent, AccountComponent, AvatarComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
````

Once that's done, run the application in a terminal:

```bash
npm run start
```

Open the browser to [localhost:4200](http://localhost:4200) and you should see the completed app.

![Screenshot of the Supabase Angular application running in a browser](/docs/img/supabase-angular-demo.png)

At this stage you have a fully functional application!
