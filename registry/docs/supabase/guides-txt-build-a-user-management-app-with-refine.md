# Build a User Management App with Refine

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](/docs/guides/database) - a Postgres database for storing your user data and [Row Level Security](/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](/docs/guides/auth) - allow users to sign up and log in.
- [Supabase Storage](/docs/guides/storage) - allow users to upload a profile photo.

![Supabase User Management example](/docs/img/user-management-demo.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/supabase/supabase/tree/master/examples/user-management/refine-user-management).

## About Refine

[Refine](https://github.com/refinedev/refine) is a React-based framework used to rapidly build data-heavy applications like admin panels, dashboards, storefronts and any type of CRUD apps. It separates app concerns into individual layers, each backed by a React context and respective provider object. For example, the auth layer represents a context served by a specific set of [`authProvider`](https://refine.dev/docs/tutorial/understanding-authprovider/index/) methods that carry out authentication and authorization actions such as logging in, logging out, getting roles data, etc. Similarly, the data layer offers another level of abstraction equipped with [`dataProvider`](https://refine.dev/docs/tutorial/understanding-dataprovider/index/) methods to handle CRUD operations at appropriate backend API endpoints.

Refine provides hassle-free integration with a Supabase backend with its supplementary [`@refinedev/supabase`](https://github.com/refinedev/refine/tree/main/packages/supabase) package. It generates `authProvider` and `dataProvider` methods at project initialization, so you don't need to spend much effort defining them yourself, choose Supabase as the backend service while creating the app with `create refine-app`.

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

To do this, you need to get the Project URL and key from [the project **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=refine).

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=refine), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

[Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.

## Building the app

Start building the Refine app from scratch.

### Initialize a Refine app

Use [create refine-app](https://refine.dev/docs/tutorial/getting-started/headless/create-project/#launch-the-refine-cli-setup) command to initialize
an app. Run the following in the terminal:

```bash
npm create refine-app@latest -- --preset refine-supabase
```

The command above uses the `refine-supabase` preset which chooses the Supabase supplementary package for the app. There's no UI framework, so the app has a headless UI with plain React and CSS styling.

The `refine-supabase` preset installs the `@refinedev/supabase` package which out-of-the-box includes the Supabase dependency: [supabase-js](https://github.com/supabase/supabase-js).

Install the `@refinedev/react-hook-form` and `react-hook-form` packages that to use [React Hook Form](https://react-hook-form.com) inside Refine apps. Run:

```bash
npm install @refinedev/react-hook-form react-hook-form
```

### Refine `supabaseClient`

The `create refine-app` generated a Supabase client in the `src/utility/supabaseClient.ts` file. It has two constants: `SUPABASE_URL` and `SUPABASE_KEY`. Replace them as `supabaseUrl` and `supabasePublishableKey` respectively and assign them your Supabase server's values.

Update it with environment variables managed by Vite:

````
```typescript name=src/utility/supabaseClient.ts
import { createClient } from "@refinedev/supabase";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabaseClient = createClient(supabaseUrl, supabaseKey, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
```
````

Save the environment variables in a `.env.local` file. All you need are the API URL and the key that you copied [earlier](#get-api-details).

```bash .env.local
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

The `supabaseClient` fetches calls to Supabase endpoints from the app. The client is instrumental in implementing authentication using Refine's auth provider methods and CRUD actions with appropriate data provider methods.

One optional step is to update the CSS file `src/App.css` to make the app look nice.
You can find the full contents of this file [here](https://raw.githubusercontent.com/supabase/supabase/master/examples/user-management/refine-user-management/src/App.css).

In order to add login and user profile pages in this App, tweak the `<Refine />` component inside `App.tsx`.

### The `<Refine />` component

The `App.tsx` file initially looks like this:

````
```tsx name=src/App.tsx
import { Refine, WelcomePage } from '@refinedev/core'
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar'
import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from '@refinedev/react-router'
import { dataProvider, liveProvider } from '@refinedev/supabase'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import authProvider from './authProvider'
import { supabaseClient } from './utility'

function App() {
  return (
    
      
        <Refine
          dataProvider={dataProvider(supabaseClient)}
          liveProvider={liveProvider(supabaseClient)}
          authProvider={authProvider}
          routerProvider={routerProvider}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          
            } />
          
          
          
          
        
      
    
  )
}

export default App
```
````

Focus on the [`<Refine />`](https://refine.dev/docs/api-reference/core/components/refine-config/) component, which comes with props passed to it. Notice the `dataProvider` prop. It uses a `dataProvider()` function with `supabaseClient` passed as argument to generate the data provider object. The `authProvider` object also uses `supabaseClient` in implementing its methods. You can look it up in `src/authProvider.ts` file.

## Customize `authProvider`

If you examine the `authProvider` object you can notice that it has a `login` method that implements an OAuth and Email / Password strategy for authentication. This tutorial instead removes them and use Magic Links to allow users sign in with their email without using passwords.

Use `supabaseClient` auth's `signInWithOtp` method inside `authProvider.login` method:

```ts name=src/authProvider.ts
login: async ({ email }) => {
  try {
    const { error } = await supabaseClient.auth.signInWithOtp({ email });

    if (!error) {
      alert("Check your email for the login link!");
      return {
        success: true,
      };
    };

    throw error;
  } catch (e: any) {
    alert(e.message);
    return {
      success: false,
      e,
    };
  }
},
```

Remove `register`, `updatePassword`, `forgotPassword` and `getPermissions` properties, which are optional type members and also not necessary for the app. The final `authProvider` object looks like this:

````
```typescript name=src/authProvider.ts
import { AuthProvider } from "@refinedev/core";

import { supabaseClient } from "./utility";

const authProvider: AuthProvider = {
  login: async ({ email }) => {
    try {
      const { error } = await supabaseClient.auth.signInWithOtp({ email });

      if (!error) {
        alert("Check your email for the login link!");
        return {
          success: true,
        };
      }

      throw error;
    } catch (e: any) {
      alert(e.message);
      return {
        success: false,
        e,
      };
    }
  },
  logout: async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      return {
        success: false,
        error,
      };
    }

    return {
      success: true,
      redirectTo: "/",
    };
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
  check: async () => {
    try {
      const { data, error } = await supabaseClient.auth.getClaims();

      if (error || !data) {
        return {
          authenticated: false,
          error: {
            message: "Check failed",
            name: "Session not found",
          },
          logout: true,
          redirectTo: "/login",
        };
      }
    } catch (error: any) {
      return {
        authenticated: false,
        error: error || {
          message: "Check failed",
          name: "Not authenticated",
        },
        logout: true,
        redirectTo: "/login",
      };
    }

    return {
      authenticated: true,
    };
  },
  getIdentity: async () => {
    const { data } = await supabaseClient.auth.getUser();

    if (data?.user) {
      return {
        ...data.user,
        name: data.user.email,
      };
    }

    return null;
  },
};

export default authProvider;
```
````

### Set up a login component

As the app uses the headless Refine core package that comes with no supported UI framework set up a plain React component to manage logins and sign ups.

Create and edit `src/components/auth.tsx`:

````
```tsx name=src/components/auth.tsx
import { useState } from "react";

import { useLogin } from "@refinedev/core";

export default function Auth() {
  const [email, setEmail] = useState("");
  const { isPending, mutate: login } = useLogin();

  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    login({ email });
  };

  return (
    
      
        Supabase + Refine
        
          Sign in via magic link with your email below
        
        
          
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          
          
            
              {isPending ? Loading : Send magic link}
            
          
        
      
    
  );
}
```
````

The [`useLogin()`](https://refine.dev/docs/api-reference/core/hooks/authentication/useLogin/) Refine auth hook to grab the `mutate: login` method to use inside `handleLogin()` function and `isLoading` state for the form submission. The `useLogin()` hook conveniently offers access to `authProvider.login` method for authenticating the user with OTP.

### Account page

After a user is signed in, allow them to edit their profile details and manage their account.

Create a new component for that in `src/components/account.tsx`.

````
```tsx name=src/components/account.tsx
import { BaseKey, useGetIdentity, useLogout } from "@refinedev/core";

import { useForm } from "@refinedev/react-hook-form";

// ...

interface IUserIdentity {
  id?: BaseKey;
  username: string;
  name: string;
}

export interface IProfile {
  id?: string;
  username?: string;
  website?: string;
  avatar_url?: string;
}

export default function Account() {
  const { data: userIdentity } = useGetIdentity();

  const { mutate: logOut } = useLogout();

  const {
    refineCore: { formLoading, query, onFinish },
    register,
    control,
    handleSubmit,
  } = useForm({
    refineCoreProps: {
      resource: "profiles",
      action: "edit",
      id: userIdentity?.id,
      redirect: false,
      onMutationError: (data) => alert(data?.message),
    },
  });

  return (
    
      

        {/* ... */}

        
          Email
          <input
            id="email"
            name="email"
            type="text"
            value={userIdentity?.name}
            disabled
          />
        
        
          Name
          
        
        
          Website
          
        

        
          <button
            className="button block primary"
            type="submit"
            disabled={formLoading}
          >
            {formLoading ? "Loading ..." : "Update"}
          
        

        
          <button
            className="button block"
            type="button"
            onClick={() => logOut()}
          >
            Sign Out
          
        
      
    
  );
}
```
````

This uses three Refine hooks, namely the [`useGetIdentity()`](https://refine.dev/docs/api-reference/core/hooks/authentication/useGetIdentity/), [`useLogOut()`](https://refine.dev/docs/api-reference/core/hooks/authentication/useLogout/) and [`useForm()`](https://refine.dev/docs/packages/documentation/react-hook-form/useForm/) hooks.

`useGetIdentity()` is a auth hook that gets the identity of the authenticated user. It grabs the current user by invoking the `authProvider.getIdentity` method under the hood.

`useLogOut()` is also an auth hook. It calls the `authProvider.logout` method to end the session.

`useForm()`, in contrast, is a data hook that exposes a series of useful objects that serve the edit form. For example, grabbing the `onFinish` function to submit the form with the `handleSubmit` event handler. It also uses `formLoading` property to present state changes of the submitted form.

The `useForm()` hook is a higher-level hook built on top of Refine's `useForm()` core hook. It fully supports form state management, field validation and submission using React Hook Form. Behind the scenes, it invokes the `dataProvider.getOne` method to get the user profile data from the Supabase `/profiles` endpoint and also invokes `dataProvider.update` method when `onFinish()` is called.

### Launch!

Now that you have all the components in place, define the routes for the pages in which they should be rendered.

Add the routes for `/login` with the `<Auth />` component and the routes for `index` path with the `<Account />` component. So, the final `App.tsx`:

````
```tsx name=src/App.tsx
import { Authenticated, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

import { dataProvider, liveProvider } from "@refinedev/supabase";
import authProvider from "./authProvider";
import { supabaseClient } from "./utility";

import Account from "./components/account";
import Auth from "./components/auth";

import "./App.css";

function App() {
  return (
    
      
        <Refine
          dataProvider={dataProvider(supabaseClient)}
          liveProvider={liveProvider(supabaseClient)}
          authProvider={authProvider}
          routerProvider={routerProvider}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          
            <Route
              element={
                <Authenticated
                  key="authenticated-routes"
                  fallback={}
                >
                  
                
              }
            >
              } />
            
            <Route
              element={} />}
            >
              } />
            
          
          
          
          
        
      
    
  );
}

export default App;
```
````

Test the App by running the server again:

```bash
npm run dev
```

And then open the browser to [localhost:5173](http://localhost:5173) and you should see the completed app.

![Supabase Refine](/docs/img/supabase-refine-demo.png)

## Bonus: Profile photos

Every Supabase project is configured with [Storage](/docs/guides/storage) for managing large files like photos and videos.

### Create an upload widget

Create an avatar for the user so that they can upload a profile photo. Add a new component:

Create and edit `src/components/avatar.tsx`:

````
```tsx name=src/components/avatar.tsx
import { useEffect, useState } from "react";

import { supabaseClient } from "../utility/supabaseClient";

type TAvatarProps = {
  url?: string;
  size: number;
  onUpload: (filePath: string) => void;
};

export default function Avatar({ url, size, onUpload }: TAvatarProps) {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabaseClient.storage
        .from("avatars")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error: any) {
      console.log("Error downloading image: ", error?.message);
    }
  }

  async function uploadAvatar(event: React.ChangeEvent) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabaseClient.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }
      onUpload(filePath);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt="Avatar"
          className="avatar image"
          style={{ height: size, width: size }}
        />
      ) : (
        <div
          className="avatar no-image"
          style={{ height: size, width: size }}
        />
      )}
      
        
          {uploading ? "Uploading ..." : "Upload"}
        
        <input
          style={{
            visibility: "hidden",
            position: "absolute",
          }}
          type="file"
          id="single"
          name="avatar_url"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      
    
  );
}
```
````

### Add the new widget

And then add the widget to the Account page at `src/components/account.tsx`:

````
```tsx name=src/components/account.tsx
import { BaseKey, useGetIdentity, useLogout } from "@refinedev/core";

import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

import Avatar from "./avatar";

interface IUserIdentity {
  id?: BaseKey;
  username: string;
  name: string;
}

export interface IProfile {
  id?: string;
  username?: string;
  website?: string;
  avatar_url?: string;
}

export default function Account() {
  const { data: userIdentity } = useGetIdentity();

  const { mutate: logOut } = useLogout();

  const {
    refineCore: { formLoading, query, onFinish },
    register,
    control,
    handleSubmit,
  } = useForm({
    refineCoreProps: {
      resource: "profiles",
      action: "edit",
      id: userIdentity?.id,
      redirect: false,
      onMutationError: (data) => alert(data?.message),
    },
  });

  return (
    
      
        <Controller
          control={control}
          name="avatar_url"
          render={({ field }) => {
            return (
              <Avatar
                url={field.value}
                size={150}
                onUpload={(filePath) => {
                  onFinish({
                    ...query?.data?.data,
                    avatar_url: filePath,
                    onMutationError: (data: { message: string }) =>
                      alert(data?.message),
                  });
                  field.onChange({
                    target: {
                      value: filePath,
                    },
                  });
                }}
              />
            );
          }}
        />
        
          Email
          <input
            id="email"
            name="email"
            type="text"
            value={userIdentity?.name}
            disabled
          />
        
        
          Name
          
        
        
          Website
          
        

        
          <button
            className="button block primary"
            type="submit"
            disabled={formLoading}
          >
            {formLoading ? "Loading ..." : "Update"}
          
        

        
          <button
            className="button block"
            type="button"
            onClick={() => logOut()}
          >
            Sign Out
          
        
      
    
  );
}
```
````

At this stage, you have a fully functional application!
