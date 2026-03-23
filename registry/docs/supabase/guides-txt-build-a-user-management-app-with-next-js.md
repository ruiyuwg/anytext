# Build a User Management App with Next.js

UI components built on shadcn/ui that connect to Supabase via a single command.

```
Explore Components
```

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](/docs/guides/database) - a Postgres database for storing your user data and [Row Level Security](/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](/docs/guides/auth) - allow users to sign up and log in.
- [Supabase Storage](/docs/guides/storage) - allow users to upload a profile photo.

![Supabase User Management example](/docs/img/user-management-demo.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/supabase/supabase/tree/master/examples/user-management/nextjs-user-management).

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

To do this, you need to get the Project URL and key from [the project **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=nextjs).

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=nextjs), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

[Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.

## Building the app

Start building the Next.js app from scratch.

### Initialize a Next.js app

Use [`create-next-app`](https://nextjs.org/docs/getting-started) to initialize an app called `supabase-nextjs`:

```bash
npx create-next-app@latest --ts --use-npm supabase-nextjs
cd supabase-nextjs
```

Then install the Supabase client library: [supabase-js](https://github.com/supabase/supabase-js)

```bash
npm install @supabase/supabase-js
```

Save the environment variables in a `.env.local` file at the root of the project, and paste the API URL and the key that you copied [earlier](#get-api-details).

```bash .env.local
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

### App styling (optional)

An optional step is to update the CSS file `app/globals.css` to make the app look nice.
You can find the full contents of this file [in the example repository](https://raw.githubusercontent.com/supabase/supabase/master/examples/user-management/nextjs-user-management/app/globals.css).

### Supabase Server-Side Auth

Next.js is a highly versatile framework offering pre-rendering at build time (SSG), server-side rendering at request time (SSR), API routes, and proxy edge-functions.

To better integrate with the framework, we've created the `@supabase/ssr` package for Server-Side Auth. It has all the functionalities to quickly configure your Supabase project to use cookies for storing user sessions. Read the [Next.js Server-Side Auth guide](/docs/guides/auth/server-side/nextjs) for more information.

Install the package for Next.js.

```bash
npm install @supabase/ssr
```

### Supabase utilities

There are two different types of clients in Supabase:

1. **Client Component client** - To access Supabase from Client Components, which run in the browser.
2. **Server Component client** - To access Supabase from Server Components, Server Actions, and Route Handlers, which run only on the server.

It is recommended to create the following essential utilities files for creating clients, and organize them within `lib/supabase` at the root of the project.

Create a `client.ts` and a `server.ts` with the following functionalities for client-side Supabase and server-side Supabase, respectively.

````
  ```typescript name=lib/supabase/client.ts
  import { createBrowserClient } from '@supabase/ssr'

  export function createClient() {
    // Create a supabase client on the browser with project's credentials
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    )
  }
  ```





  ```typescript name=lib/supabase/server.ts
  import { createServerClient } from '@supabase/ssr'
  import { cookies } from 'next/headers'

  export async function createClient() {
    const cookieStore = await cookies()

    // Create a server's supabase client with newly configured cookie,
    // which could be used to maintain user's session
    return createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              )
            } catch {
              // The `setAll` method was called from a Server Component.
              // This can be ignored if you have proxy refreshing
              // user sessions.
            }
          },
        },
      }
    )
  }
  ```
````

### Next.js proxy

Since Server Components can't write cookies, you need [Proxy](https://nextjs.org/docs/app/getting-started/proxy) to refresh expired Auth tokens and store them. This is accomplished by:

- Refreshing the Auth token with the call to `supabase.auth.getUser`.
- Passing the refreshed Auth token to Server Components through `request.cookies.set`, so they don't attempt to refresh the same token themselves.
- Passing the refreshed Auth token to the browser, so it replaces the old token. This is done with `response.cookies.set`.

You could also add a matcher, so that the Proxy only runs on routes that access Supabase. For more information, read [the Next.js matcher documentation](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher).

Be careful when protecting pages. The server gets the user session from the cookies, which anyone can spoof.

Always use `supabase.auth.getUser()` to protect pages and user data.

*Never* trust `supabase.auth.getSession()` inside server code such as proxy. It isn't guaranteed to revalidate the Auth token.

It's safe to trust `getUser()` because it sends a request to the Supabase Auth server every time to revalidate the Auth token.

Create a `proxy.ts` file at the project root and another one within the `lib/supabase` folder. The `lib/supabase` file contains the logic for updating the session. This is used by the `proxy.ts` file, which is a Next.js convention.

````
  ```typescript name=proxy.ts
  import { type NextRequest } from 'next/server'
  import { updateSession } from '@/lib/supabase/proxy'

  export async function proxy(request: NextRequest) {
    // update user's auth session
    return await updateSession(request)
  }

  export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       * Feel free to modify this pattern to include more paths.
       */
      '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
  }
  ```





  ```typescript name=lib/supabase/proxy.ts
  import { createServerClient } from '@supabase/ssr'
  import { NextResponse, type NextRequest } from 'next/server'

  export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
      request,
    })

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
            supabaseResponse = NextResponse.next({
              request,
            })
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options)
            )
          },
        },
      }
    )

    // refreshing the auth token
    await supabase.auth.getUser()

    return supabaseResponse
  }
  ```
````

## Set up a login page

### Login and signup form

In order to add login/signup page for your application:

Create a new folder named `login`, containing a `page.tsx` file with a login/signup form.

````
  ```tsx name=app/login/page.tsx
  import { login, signup } from './actions'

  export default function LoginPage() {
    return (
      
        Email:
        
        Password:
        
        Log in
        Sign up
      
    )
  }
  ```
````

Next, you need to create the login/signup actions to hook up the form to the function. Which does the following:

- Retrieve the user's information.
- Send that information to Supabase as a signup request, which in turns sends a confirmation email.
- Handle any error that arises.

The `cookies` method is called before any calls to Supabase, which takes fetch calls out of Next.js's caching. This is important for authenticated data fetches, to ensure that users get access only to their own data.

Read the Next.js docs to learn more about [opting out of data caching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#opting-out-of-data-caching).

Create the `action.ts` file in the `app/login` folder, which contains the login and signup functions and the `error/page.tsx` file, which displays an error message if the login or signup fails.

````
  ```typescript name=app/login/actions.ts
  'use server'

  import { revalidatePath } from 'next/cache'
  import { redirect } from 'next/navigation'

  import { createClient } from '@/lib/supabase/server'

  export async function login(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
      redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/account')
  }

  export async function signup(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
      redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/account')
  }
  ```





  ```tsx name=app/error/page.tsx
  export default function ErrorPage() {
    return Sorry, something went wrong
  }
  ```
````

### Email template

Before proceeding, change the email template to support support a server-side authentication flow that sends a token hash:

- Go to the [Auth templates](/dashboard/project/_/auth/templates) page in your dashboard.
- Select the **Confirm signup** template.
- Change `{{ .ConfirmationURL }}` to `{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email`.

**Did you know?** You can also customize other emails sent out to new users, including the email's looks, content, and query parameters. Check out the [settings of your project](/dashboard/project/_/auth/templates).

### Confirmation endpoint

As you are working in a server-side rendering (SSR) environment, you need to create a server endpoint responsible for exchanging the `token_hash` for a session.

The code performs the following steps:

- Retrieves the code sent back from the Supabase Auth server using the `token_hash` query parameter.
- Exchanges this code for a session, which you store in your chosen storage mechanism (in this case, cookies).
- Finally, redirects the user to the `account` page.

  ```typescript name=app/auth/confirm/route.ts
  import { type EmailOtpType } from '@supabase/supabase-js'
  import { type NextRequest, NextResponse } from 'next/server'
  import { createClient } from '@/lib/supabase/server'

  // Creating a handler to a GET request to route /auth/confirm
  export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type') as EmailOtpType | null
    const next = '/account'

    // Create redirect link without the secret token
    const redirectTo = request.nextUrl.clone()
    redirectTo.pathname = next
    redirectTo.searchParams.delete('token_hash')
    redirectTo.searchParams.delete('type')

    if (token_hash && type) {
      const supabase = await createClient()

      const { error } = await supabase.auth.verifyOtp({
        type,
        token_hash,
      })
      if (!error) {
        redirectTo.searchParams.delete('next')
        return NextResponse.redirect(redirectTo)
      }
    }

    // return the user to an error page with some instructions
    redirectTo.pathname = '/error'
    return NextResponse.redirect(redirectTo)
  }
  ```

### Account page

After a user signs in, allow them to edit their profile details and manage their account.

Create a new component for that called `AccountForm` within the `app/account` folder.

````
```tsx name=app/account/account-form.tsx
'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { type User } from '@supabase/supabase-js'

// ...

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState(null)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website, avatar_url`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        console.log(error)
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string | null
    fullname: string | null
    website: string | null
    avatar_url: string | null
  }) {
    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  return (
    

      {/* ... */}

      
        Email
        
      
      
        Full Name
        <input
          id="fullName"
          type="text"
          value={fullname || ''}
          onChange={(e) => setFullname(e.target.value)}
        />
      
      
        Username
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
          onClick={() => updateProfile({ fullname, username, website, avatar_url })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        
      

      
        
          
            Sign out
          
        
      
    
  )
}
```
````

Create an account page for the `AccountForm` component you just created

````
```tsx name=app/account/page.tsx
import AccountForm from './account-form'
import { createClient } from '@/lib/supabase/server'

export default async function Account() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return 
}
```
````

### Sign out

Create a route handler to handle the sign out from the server side, making sure to check if the user is logged in first.

````
```typescript name=app/auth/signout/route.ts
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const supabase = await createClient()

  // Check if a user's logged in
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    await supabase.auth.signOut()
  }

  revalidatePath('/', 'layout')
  return NextResponse.redirect(new URL('/login', req.url), {
    status: 302,
  })
}
```
````

### Launch

Now you have all the pages, route handlers, and components in place, run the following in a terminal window:

```bash
npm run dev
```

And then open the browser to [localhost:3000/login](http://localhost:3000/login) and you should see the completed app.

When you enter your email and password, you will receive an email with the title **Confirm Your Signup**. Congrats 🎉!!!

## Bonus: Profile photos

Every Supabase project is configured with [Storage](/docs/guides/storage) for managing large files like
photos and videos.

### Create an upload widget

Create an avatar widget for the user so that they can upload a profile photo. Start by creating a new component:

````
```tsx name=app/account/avatar.tsx
'use client'
import React, { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Image from 'next/image'

export default function Avatar({
  uid,
  url,
  size,
  onUpload,
}: {
  uid: string | null
  url: string | null
  size: number
  onUpload: (url: string) => void
}) {
  const supabase = createClient()
  const [avatarUrl, setAvatarUrl] = useState(url)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    async function downloadImage(path: string) {
      try {
        const { data, error } = await supabase.storage.from('avatars').download(path)
        if (error) {
          throw error
        }

        const url = URL.createObjectURL(data)
        setAvatarUrl(url)
      } catch (error) {
        console.log('Error downloading image: ', error)
      }
    }

    if (url) downloadImage(url)
  }, [url, supabase])

  const uploadAvatar: React.ChangeEventHandler = async (event) => {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const filePath = `${uid}-${Math.random()}.${fileExt}`

      const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      onUpload(filePath)
    } catch (error) {
      alert('Error uploading avatar!')
    } finally {
      setUploading(false)
    }
  }

  return (
    
      {avatarUrl ? (
        <Image
          width={size}
          height={size}
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
```
````

### Add the new widget

Then add the widget to the `AccountForm` component:

````
```tsx name=app/account/account-form.tsx
// ...

import Avatar from './avatar'

  // ...

  return (
    
      <Avatar
        uid={user?.id ?? null}
        url={avatar_url}
        size={150}
        onUpload={(url) => {
          setAvatarUrl(url)
          updateProfile({ fullname, username, website, avatar_url: url })
        }}
      />

    {/* ... */}

    
  )
}
```
````

At this stage you have a fully functional application!

## See also

- See the complete [example on GitHub](https://github.com/supabase/supabase/tree/master/examples/user-management/nextjs-user-management) and deploy it to Vercel
- [Build a Twitter Clone with the Next.js App Router and Supabase - free egghead course](https://egghead.io/courses/build-a-twitter-clone-with-the-next-js-app-router-and-supabase-19bebadb)
- Explore the [pre-built Auth components](/ui/docs/nextjs/password-based-auth)
- Explore the [Supabase Cache Helpers](https://github.com/psteinroe/supabase-cache-helpers)
- See the [Next.js Subscription Payments Starter](https://github.com/vercel/nextjs-subscription-payments) template on GitHub
