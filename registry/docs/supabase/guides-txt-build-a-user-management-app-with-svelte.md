# Build a User Management App with Svelte

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](/docs/guides/database) - a Postgres database for storing your user data and [Row Level Security](/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](/docs/guides/auth) - allow users to sign up and log in.
- [Supabase Storage](/docs/guides/storage) - allow users to upload a profile photo.

![Supabase User Management example](/docs/img/user-management-demo.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/supabase/supabase/tree/master/examples/user-management/svelte-user-management).

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

To do this, you need to get the Project URL and key from [the project **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=sveltekit).

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=sveltekit), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

[Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.

## Building the app

Start building the Svelte app from scratch.

### Initialize a Svelte app

You can use the Vite Svelte TypeScript Template to initialize an app called `supabase-svelte`:

```bash
npm create vite@latest supabase-svelte -- --template svelte-ts
cd supabase-svelte
npm install
```

Install the only additional dependency: [supabase-js](https://github.com/supabase/supabase-js)

```bash
npm install @supabase/supabase-js
```

Finally, save the environment variables in a `.env`.
All you need are the API URL and the key that you copied [earlier](#get-api-details).

````
```bash name=.env
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```
````

Now you have the API credentials in place, create a helper file to initialize the Supabase client. These variables will be exposed on the browser, and that's fine since you have [Row Level Security](/docs/guides/auth#row-level-security) enabled on the Database.

````
```typescript name=src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const supabase = createClient(supabaseUrl, supabasePublishableKey)
```
````

### App styling (optional)

Optionally, update the CSS file `src/app.css` to make the app look nice.
You can find the full contents of this file [on GitHub](https://raw.githubusercontent.com/supabase/supabase/master/examples/user-management/svelte-user-management/src/app.css).

### Set up a login component

Set up a Svelte component to manage logins and sign ups. It uses Magic Links, so users can sign in with their email without using passwords.

````
```svelte name=src/lib/Auth.svelte

  import { supabase } from "../supabaseClient";

  let loading = $state(false);
  let email = $state("");

  const handleLogin = async () => {
    try {
      loading = true;
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert("Check your email for login link!");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading = false;
    }
  };



  
    Supabase + Svelte
    Sign in via magic link with your email below
     { e.preventDefault(); handleLogin(); }}>
      
        Email
        <input
          id="email"
          class="inputField"
          type="email"
          placeholder="Your email"
          bind:value={email}
        />
      
      
        <button
          type="submit"
          class="button block"
          aria-live="polite"
          disabled={loading}
        >
          {loading ? "Loading" : "Send magic link"}
        
      
    
  

```
````

### Account page

After a user is signed in, allow them to edit their profile details and manage their account.
Create a new component for that called `Account.svelte`.

```svelte src/lib/Account.svelte

  import { onMount } from "svelte";
  import type { AuthSession } from "@supabase/supabase-js";
  import { supabase } from "../supabaseClient";

  // ...

  interface Props {
    session: AuthSession;
  }

  let { session }: Props = $props();

  // ...

  let username = $state(null);
  let website = $state(null);
  let avatarUrl = $state(null);

  onMount(() => {
    getProfile();
  });

  const getProfile = async () => {
    try {
      loading = true;
      const { user } = session;

      const { data, error, status } = await supabase
        .from("profiles")
        .select("username, website, avatar_url")
        .eq("id", user.id)
        .single();

      if (error && status !== 406) throw error;

// ...


      if (data) {
        username = data.username;
        website = data.website;
        avatarUrl = data.avatar_url;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading = false;
    }
  };

  const updateProfile = async () => {
    try {
      loading = true;
      const { user } = session;


        // ...

        id: user.id,
        username,
        website,
        avatar_url: avatarUrl,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading = false;
    }

// ...



 { e.preventDefault(); updateProfile(); }} class="form-widget">
  Email: {session.user.email}
  
    
    Name
    
  
  
    Website
    
  
  
    
      {loading ? "Saving ..." : "Update profile"}
    
  
  <button
    type="button"
    class="button block"
    onclick={() => supabase.auth.signOut()}
  >
    Sign Out
  

```

### Launch!

Now that you have all the components in place, update `App.svelte`:

````
```svelte name=src/App.svelte

  import { onMount } from 'svelte'
  import { supabase } from './supabaseClient'
  import type { AuthSession } from '@supabase/supabase-js'
  import Account from './lib/Account.svelte'
  import Auth from './lib/Auth.svelte'

  let session = $state(null)

  onMount(() => {
    supabase.auth.getSession().then(({ data }) => {
      session = data.session
    })

    supabase.auth.onAuthStateChange((_event, _session) => {
      session = _session
    })
  })




  
  {:else}
  
  {/if}

```
````

Once that's done, run this in a terminal window:

```bash
npm run dev
```

And then open the browser to [localhost:5173](http://localhost:5173) and you should see the completed app.

Svelte uses Vite and the default port is `5173`, Supabase uses `port 3000`. To change the redirection port for Supabase go to: **Authentication > URL Configuration** and change the **Site URL** to `http://localhost:5173/`

![Supabase Svelte](/docs/img/supabase-svelte-demo.png)

## Bonus: Profile photos

Every Supabase project is configured with [Storage](/docs/guides/storage) for managing large files like photos and videos.

### Create an upload widget

Create an avatar for the user so that they can upload a profile photo. Start by creating a new component:

````
```svelte name=src/lib/Avatar.svelte

  import { supabase } from "../supabaseClient";

  interface Props {
    size: number;
    url?: string | null;
    onupload?: () => void;
  }

  let { size, url = $bindable(null), onupload }: Props = $props();

  let avatarUrl = $state(null);
  let uploading = $state(false);
  let files = $state();

  const downloadImage = async (path: string) => {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);

      if (error) {
        throw error;
      }

      const url = URL.createObjectURL(data);
      avatarUrl = url;
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error downloading image: ", error.message);
      }
    }
  };

  const uploadAvatar = async () => {
    try {
      uploading = true;

      if (!files || files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${Math.random()}.${fileExt}`;

      const { error } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (error) {
        throw error;
      }

      url = filePath;
      onupload?.();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      uploading = false;
    }
  };

  $effect(() => {
    if (url) downloadImage(url);
  });




    <img
      src={avatarUrl}
      alt={avatarUrl ? "Avatar" : "No image"}
      class="avatar image"
      style="height: {size}px, width: {size}px"
    />
  {:else}
    
  {/if}
  
    
      {uploading ? "Uploading ..." : "Upload avatar"}
    
    
      <input
        type="file"
        id="single"
        accept="image/*"
        bind:files
        onchange={uploadAvatar}
        disabled={uploading}
      />
    
  

```
````

### Add the new widget

And then you can add the widget to the Account page:

```svelte src/lib/Account.svelte


  // ...

  import Avatar from "./Avatar.svelte";

    // ...

    } finally {
      loading = false;
    }

  // ...

  };

  // ...

  
  <button
    type="button"
    class="button block"
    onclick={() => supabase.auth.signOut()}
  >
    Sign Out
  

```

At this stage you have a fully functional application!
