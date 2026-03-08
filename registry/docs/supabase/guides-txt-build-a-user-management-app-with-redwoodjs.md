# Build a User Management App with RedwoodJS

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](/docs/guides/database) - a Postgres database for storing your user data and [Row Level Security](/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](/docs/guides/auth) - allow users to sign up and log in.
- [Supabase Storage](/docs/guides/storage) - allow users to upload a profile photo.

![Supabase User Management example](/docs/img/user-management-demo.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/redwoodjs/redwoodjs-supabase-quickstart).

## About RedwoodJS

A Redwood application is split into two parts: a frontend and a backend. This is represented as two node projects within a single monorepo.

The frontend project is called **`web`** and the backend project is called **`api`**. For clarity, we will refer to these in prose as **"sides,"** that is, the `web side` and the `api side`.
They are separate projects because code on the `web side` will end up running in the user's browser while code on the `api side` will run on a server somewhere.

Important: When this guide refers to "API," that means the Supabase API and when it refers to `api side`, that means the RedwoodJS `api side`.

The **`api side`** is an implementation of a GraphQL API. The business logic is organized into "services" that represent their own internal API and can be called both from external GraphQL requests and other internal services.

The **`web side`** is built with React. Redwood's router makes it simple to map URL paths to React "Page" components (and automatically code-split your app on each route).
Pages may contain a "Layout" component to wrap content. They also contain "Cells" and regular React components.
Cells allow you to declaratively manage the lifecycle of a component that fetches and displays data.

For the sake of consistency with the other framework tutorials, we'll build this app a little differently than normal.
We ***won't use*** Prisma to connect to the Supabase Postgres database or [Prisma migrations](https://redwoodjs.com/docs/cli-commands#prisma-migrate) as one typically might in a Redwood app.
Instead, we'll rely on the Supabase client to do some of the work on the **`web`** side and use the client again on the **`api`** side to do data fetching as well.

That means you will want to refrain from running any `yarn rw prisma migrate` commands and also double check your build commands on deployment to ensure Prisma won't reset your database. Prisma currently doesn't support cross-schema foreign keys, so introspecting the schema fails due
to how your Supabase `public` schema references the `auth.users`.

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

To do this, you need to get the Project URL and key from [the project **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=).

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

[Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.

## Building the app

Let's start building the RedwoodJS app from scratch.

RedwoodJS requires Node.js `>= 14.x <= 16.x` and Yarn `>= 1.15`.

Make sure you have installed yarn since RedwoodJS relies on it to [manage its packages in workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) for its `web` and `api` "sides."

### Initialize a RedwoodJS app

We can use [Create Redwood App](https://redwoodjs.com/docs/quick-start) command to initialize
an app called `supabase-redwoodjs`:

```bash
yarn create redwood-app supabase-redwoodjs
cd supabase-redwoodjs
```

While the app is installing, you should see:

```bash
✔ Creating Redwood app
  ✔ Checking node and yarn compatibility
  ✔ Creating directory 'supabase-redwoodjs'
✔ Installing packages
  ✔ Running 'yarn install'... (This could take a while)
✔ Convert TypeScript files to JavaScript
✔ Generating types

Thanks for trying out Redwood!
```

Then let's install the only additional dependency [supabase-js](https://github.com/supabase/supabase-js) by running the `setup auth` command:

```bash
yarn redwood setup auth supabase
```

When prompted:

> Overwrite existing /api/src/lib/auth.\[jt]s?

Say, **yes** and it will setup the Supabase client in your app and also provide hooks used with Supabase authentication.

```bash
✔ Generating auth lib...
  ✔ Successfully wrote file `./api/src/lib/auth.js`
  ✔ Adding auth config to web...
  ✔ Adding auth config to GraphQL API...
  ✔ Adding required web packages...
  ✔ Installing packages...
  ✔ One more thing...

  You will need to add your Supabase URL (SUPABASE_URL), public API KEY,
  and JWT SECRET (SUPABASE_KEY, and SUPABASE_JWT_SECRET) to your .env file.
```

Next, we want to save the environment variables in a `.env`.
We need the `API URL` as well as the key and `jwt_secret` that you copied [earlier](#get-api-details).

````
```bash name=.env
SUPABASE_URL=YOUR_SUPABASE_URL
SUPABASE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
SUPABASE_JWT_SECRET=YOUR_SUPABASE_JWT_SECRET
```
````

And finally, you will also need to save **just** the `web side` environment variables to the `redwood.toml`.

````
```bash name=redwood.toml
[web]
  title = "Supabase Redwood Tutorial"
  port = 8910
  apiProxyPath = "/.redwood/functions"
  includeEnvironmentVariables = ["SUPABASE_URL", "SUPABASE_KEY"]
[api]
  port = 8911
[browser]
  open = true
```
````

These variables will be exposed on the browser, and that's completely fine.
They allow your web app to initialize the Supabase client with your public anon key
since we have [Row Level Security](/docs/guides/auth#row-level-security) enabled on our Database.

You'll see these being used to configure your Supabase client in `web/src/App.js`:

````
```js name=web/src/App.js
// ... Redwood imports
import { AuthProvider } from '@redwoodjs/auth'
import { createClient } from '@supabase/supabase-js'

// ...

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

const App = () => (
  
    
      
        
          
        
      
    
  
)

export default App
```
````

### App styling (optional)

An optional step is to update the CSS file `web/src/index.css` to make the app look nice.
You can find the full contents of this file [here](https://raw.githubusercontent.com/supabase/supabase/master/examples/user-management/react-user-management/src/index.css).

### Start RedwoodJS and your first page

Let's test our setup at the moment by starting up the app:

```bash
yarn rw dev
```

`rw` is an alias for `redwood`, as in `yarn rw` to run Redwood CLI commands.

You should see a "Welcome to RedwoodJS" page and a message about not having any pages yet.

So, let's create a "home" page:

```bash
yarn rw generate page home /

✔ Generating page files...
  ✔ Successfully wrote file `./web/src/pages/HomePage/HomePage.stories.js`
  ✔ Successfully wrote file `./web/src/pages/HomePage/HomePage.test.js`
  ✔ Successfully wrote file `./web/src/pages/HomePage/HomePage.js`
✔ Updating routes file...
✔ Generating types ...
```

The `/` is important here as it creates a root level route.

You can stop the `dev` server if you want; to see your changes, just be sure to run `yarn rw dev` again.

You should see the `Home` page route in `web/src/Routes.js`:

````
```bash name=web/src/Routes.js
import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    
      
      
    
  )
}

export default Routes
```
````

### Set up a login component

Let's set up a Redwood component to manage logins and sign ups. We'll use Magic Links, so users can sign in with their email without using passwords.

```bash
yarn rw g component auth

  ✔ Generating component files...
    ✔ Successfully wrote file `./web/src/components/Auth/Auth.test.js`
    ✔ Successfully wrote file `./web/src/components/Auth/Auth.stories.js`
    ✔ Successfully wrote file `./web/src/components/Auth/Auth.js`

```

Now, update the `Auth.js` component to contain:

````
```jsx name=/web/src/components/Auth/Auth.js
import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'

const Auth = () => {
  const { logIn } = useAuth()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email) => {
    try {
      setLoading(true)
      const { error } = await logIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    
      
        Supabase + RedwoodJS
        Sign in via magic link with your email below
        
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        
        
          <button
            onClick={(e) => {
              e.preventDefault()
              handleLogin(email)
            }}
            className={'button block'}
            disabled={loading}
          >
            {loading ? Loading : Send magic link}
          
        
      
    
  )
}

export default Auth
```
````

### Set up an account component

After a user is signed in we can allow them to edit their profile details and manage their account.

Let's create a new component for that called `Account.js`.

```bash
yarn rw g component account

  ✔ Generating component files...
    ✔ Successfully wrote file `./web/src/components/Account/Account.test.js`
    ✔ Successfully wrote file `./web/src/components/Account/Account.stories.js`
    ✔ Successfully wrote file `./web/src/components/Account/Account.js`
```

And then update the file to contain:

````
```jsx name=web/src/components/Account/Account.js
import { useState, useEffect } from 'react'
import { useAuth } from '@redwoodjs/auth'

const Account = () => {
  const { client: supabase, currentUser, logOut } = useAuth()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [supabase.auth.session])

  async function getProfile() {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      const { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }

      alert('Updated profile!')
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    
      
        Supabase + RedwoodJS
        Your profile
        
          
            Email
            
          
          
            Name
            <input
              id="username"
              type="text"
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}
            />
          
          
            Website
            <input
              id="website"
              type="url"
              value={website || ''}
              onChange={(e) => setWebsite(e.target.value)}
            />
          

          
            <button
              className="button primary block"
              onClick={() => updateProfile({ username, website, avatar_url })}
              disabled={loading}
            >
              {loading ? 'Loading ...' : 'Update'}
            
          

          
             logOut()}>
              Sign Out
            
          
        
      
    
  )
}

export default Account
```
````

You'll see the use of `useAuth()` several times. Redwood's `useAuth` hook provides convenient ways to access
`logIn`, `logOut`, `currentUser`, and access the `supabase` authenticate client. We'll use it to get an instance
of the Supabase client to interact with your API.

### Update home page

Now that we have all the components in place, let's update your `HomePage` page to use them:

````
```jsx name=web/src/pages/HomePage/HomePage.js
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import Account from 'src/components/Account'
import Auth from 'src/components/Auth'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      
      {!isAuthenticated ?  : }
    </>
  )
}

export default HomePage
```
````

What we're doing here is showing the sign in form if you aren't logged in and your account profile if you are.

### Launch!

Once that's done, run this in a terminal window to launch the `dev` server:

```bash
yarn rw dev
```

And then open the browser to [localhost:8910](http://localhost:8910) and you should see the completed app.

![Supabase RedwoodJS](/docs/img/supabase-redwoodjs-demo.png)

## Bonus: Profile photos

Every Supabase project is configured with [Storage](/docs/guides/storage) for managing large files like photos and videos.

### Create an upload widget

Let's create an avatar for the user so that they can upload a profile photo. We can start by creating a new component:

```bash
yarn rw g component avatar
  ✔ Generating component files...
    ✔ Successfully wrote file `./web/src/components/Avatar/Avatar.test.js`
    ✔ Successfully wrote file `./web/src/components/Avatar/Avatar.stories.js`
    ✔ Successfully wrote file `./web/src/components/Avatar/Avatar.js`
```

Now, update your Avatar component to contain the following widget:

````
```jsx name=web/src/components/Avatar/Avatar.js
import { useEffect, useState } from 'react'
import { useAuth } from '@redwoodjs/auth'

const Avatar = ({ url, size, onUpload }) => {
  const { client: supabase } = useAuth()

  const [avatarUrl, setAvatarUrl] = useState(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (url) downloadImage(url)
  }, [url])

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path)
      if (error) {
        throw error
      }
      const url = URL.createObjectURL(data)
      setAvatarUrl(url)
    } catch (error) {
      console.log('Error downloading image: ', error.message)
    }
  }

  async function uploadAvatar(event) {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      onUpload(filePath)
    } catch (error) {
      alert(error.message)
    } finally {
      setUploading(false)
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
        
      )}
      
        
          {uploading ? 'Uploading ...' : 'Upload'}
        
        <input
          style={{
            visibility: 'hidden',
            position: 'absolute',
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      
    
  )
}

export default Avatar
```
````

### Add the new widget

And then we can add the widget to the Account component:

````
```jsx name=web/src/components/Account/Account.js
// Import the new component
import Avatar from 'src/components/Avatar'

// ...

return (
  
    {/* Add to the body */}
    <Avatar
      url={avatar_url}
      size={150}
      onUpload={(url) => {
        setAvatarUrl(url)
        updateProfile({ username, website, avatar_url: url })
      }}
    />
    {/* ... */}
  
)
```
````

At this stage you have a fully functional application!

## See also

- Learn more about [RedwoodJS](https://redwoodjs.com)
- Visit the [RedwoodJS Discourse Community](https://community.redwoodjs.com)
