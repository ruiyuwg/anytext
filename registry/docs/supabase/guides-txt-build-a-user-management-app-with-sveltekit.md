# Build a User Management App with SvelteKit

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](/docs/guides/database) - a Postgres database for storing your user data and [Row Level Security](/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](/docs/guides/auth) - allow users to sign up and log in.
- [Supabase Storage](/docs/guides/storage) - allow users to upload a profile photo.

![Supabase User Management example](/docs/img/user-management-demo.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/supabase/supabase/tree/master/examples/user-management/sveltekit-user-management).

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

Use the [SvelteKit Skeleton Project](https://svelte.dev/docs/kit) to initialize an app called `supabase-sveltekit` (for this tutorial, select "SvelteKit minimal" and use TypeScript):

```bash
npx sv create supabase-sveltekit
cd supabase-sveltekit
npm install
```

Then install the Supabase client library: [supabase-js](https://github.com/supabase/supabase-js)

```bash
npm install @supabase/supabase-js
```

And finally, save the environment variables in a `.env` file.
All you need are the `PUBLIC_SUPABASE_URL` and the key that you copied [earlier](#get-api-details).

````
```bash name=.env
PUBLIC_SUPABASE_URL="YOUR_SUPABASE_URL"
PUBLIC_SUPABASE_PUBLISHABLE_KEY="YOUR_SUPABASE_PUBLISHABLE_KEY"
```
````

### App styling (optional)

An optional step is to update the CSS file `src/styles.css` to make the app look nice.
You can find the full contents of this file [in the example repository](https://raw.githubusercontent.com/supabase/supabase/master/examples/user-management/sveltekit-user-management/src/styles.css).

### Creating a Supabase client for SSR

The `ssr` package configures Supabase to use Cookies, which are required for server-side languages and frameworks.

Install the SSR package:

```bash
npm install @supabase/ssr
```

Creating a Supabase client with the `ssr` package automatically configures it to use Cookies. This means the user's session is available throughout the entire SvelteKit stack - page, layout, server, and hooks.

Add the code below to a `src/hooks.server.ts` file to initialize the client on the server:

````
  ```typescript name=src/hooks.server.ts
  // src/hooks.server.ts
  import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from '$env/static/public'
  import { createServerClient } from '@supabase/ssr'
  import type { Handle } from '@sveltejs/kit'

  export const handle: Handle = async ({ event, resolve }) => {
    event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
      cookies: {
        getAll: () => event.cookies.getAll(),
        /**
         * Note: You have to add the `path` variable to the
         * set and remove method due to sveltekit's cookie API
         * requiring this to be set, setting the path to `/`
         * will replicate previous/standard behaviour (https://kit.svelte.dev/docs/types#public-types-cookies)
         */
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            event.cookies.set(name, value, { ...options, path: '/' })
          })
        },
      },
    })

    /**
     * Unlike `supabase.auth.getSession`, which is unsafe on the server because it
     * doesn't validate the JWT, this function validates the JWT by first calling
     * `getUser` and aborts early if the JWT signature is invalid.
     */
    event.locals.safeGetSession = async () => {
      const {
        data: { user },
        error,
      } = await event.locals.supabase.auth.getUser()
      if (error) {
        return { session: null, user: null }
      }

      const {
        data: { session },
      } = await event.locals.supabase.auth.getSession()
      return { session, user }
    }

    return resolve(event, {
      filterSerializedResponseHeaders(name: string) {
        return name === 'content-range' || name === 'x-supabase-api-version'
      },
    })
  }
  ```
````

Note that `auth.getSession` reads the auth token and the unencoded session data from the local storage medium. It *doesn't* send a request back to the Supabase Auth server unless the local session is expired.

You should **never** trust the unencoded session data if you're writing server code, since it could be tampered with by the sender. If you need verified, trustworthy user data, call `auth.getUser` instead, which always makes a request to the Auth server to fetch trusted data.

{/\* TODO: Change when adding JS autoconversion \*/}

As this tutorial uses TypeScript the compiler complains about `event.locals.supabase` and `event.locals.safeGetSession`, you can fix this by updating the `src/app.d.ts` with the content below:

````
  ```typescript name=src/app.d.ts
  import { SupabaseClient, Session } from '@supabase/supabase-js'
  // See https://kit.svelte.dev/docs/types#app
  // for information about these interfaces
  declare global {
    namespace App {
      // interface Error {}
      interface Locals {
        supabase: SupabaseClient
        safeGetSession(): Promise<{ session: Session | null; user?: Session['user'] | null }>
      }
      interface PageData {
        session: Session | null
        user?: Session['user'] | null
      }
      // interface PageState {}
      // interface Platform {}
    }
  }

  export {}
  ```
````

Create a new `src/routes/+layout.server.ts` file to handle the session on the server-side.

````
  ```typescript name=src/routes/+layout.server.ts
  // src/routes/+layout.server.ts
  import type { LayoutServerLoad } from './$types'

  export const load: LayoutServerLoad = async ({ locals: { safeGetSession }, cookies }) => {
    const { session, user } = await safeGetSession()

    return {
      session,
      user,
      cookies: cookies.getAll(),
    }
  }
  ```
````

Start the dev server (`npm run dev`) to generate the `./$types` files we are referencing in our project.

Create a new `src/routes/+layout.ts` file to handle the session and the `supabase` object on the client-side.

````
  ```typescript name=src/routes/+layout.ts
  // src/routes/+layout.ts
  import { PUBLIC_SUPABASE_PUBLISHABLE_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
  import type { LayoutLoad } from './$types'
  import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr'

  export const load: LayoutLoad = async ({ fetch, data, depends }) => {
    depends('supabase:auth')

    const supabase = isBrowser()
      ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
          global: {
            fetch,
          },
        })
      : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
          global: {
            fetch,
          },
          cookies: {
            getAll() {
              return data.cookies
            },
          },
        })

    /**
     * It's fine to use `getSession` here, because on the client, `getSession` is
     * safe, and on the server, it reads `session` from the `LayoutData`, which
     * safely checked the session using `safeGetSession`.
     */
    const {
      data: { session },
    } = await supabase.auth.getSession()

    return { supabase, session }
  }
  ```
````

Create `src/routes/+layout.svelte`:

````
  ```svelte name=src/routes/+layout.svelte
  
  
  	import '../styles.css'
  	import { invalidate } from '$app/navigation'
  	import { onMount } from 'svelte'

  	let { data, children } = $props()
  	let { supabase, session } = $derived(data)

  	onMount(() => {
  		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
  			if (_session?.expires_at !== session?.expires_at) {
  				invalidate('supabase:auth')
  			}
  		})

  		return () => data.subscription.unsubscribe()
  	})
  

  <svelte:head>
  	User Management
  </svelte:head>

  
  	{@render children()}
  
  ```
````

## Set up a login page

Create a magic link login/signup page for your application by updating the `routes/+page.svelte` file:

````
  ```svelte name=src/routes/+page.svelte
  
  
  	import { enhance } from '$app/forms'
  	import type { ActionData, SubmitFunction } from './$types.js'

  	interface Props {
  		form: ActionData
  	}
  	let { form }: Props = $props()

  	let loading = $state(false)

  	const handleSubmit: SubmitFunction = () => {
  		loading = true
  		return async ({ update }) => {
  			update()
  			loading = false
  		}
  	}
  

  <svelte:head>
  	User Management
  </svelte:head>

  
  	
  		Supabase + SvelteKit
  		Sign in via magic link with your email below

  		
  			{form?.message}
  		
  		{/if}
  		
  			Email address
  			<input 
  				id="email" 
  				name="email" 
  				class="inputField" 
  				type="email" 
  				placeholder="Your email" 
  				value={form?.email ?? ''} 
  			/>
  		

  		
  			{form?.errors?.email}
  		
  		{/if}
  		
  			
  				{ loading ? 'Loading' : 'Send magic link' }
  			
  		
  	
  
  ```
````

Create a `src/routes/+page.server.ts` file that handles the magic link form when submitted.

````
  ```typescript name=src/routes/+page.server.ts
  // src/routes/+page.server.ts
  import { fail, redirect } from '@sveltejs/kit'
  import type { Actions, PageServerLoad } from './$types'

  export const load: PageServerLoad = async ({ url, locals: { safeGetSession } }) => {
    const { session } = await safeGetSession()

    // if the user is already logged in return them to the account page
    if (session) {
      redirect(303, '/account')
    }

    return { url: url.origin }
  }

  export const actions: Actions = {
    default: async (event) => {
      const {
        url,
        request,
        locals: { supabase },
      } = event
      const formData = await request.formData()
      const email = formData.get('email') as string
      const validEmail = /^[\w-\.+]+@([\w-]+\.)+[\w-]{2,8}$/.test(email)

      if (!validEmail) {
        return fail(400, { errors: { email: 'Please enter a valid email address' }, email })
      }

      const { error } = await supabase.auth.signInWithOtp({ email })

      if (error) {
        return fail(400, {
          success: false,
          email,
          message: `There was an issue, Please contact support.`,
        })
      }

      return {
        success: true,
        message: 'Please check your email for a magic link to log into the website.',
      }
    },
  }
  ```
````

### Email template

Change the email template to support a server-side authentication flow.

Before we proceed, let's change the email template to support sending a token hash:

- Go to the [**Auth** > **Emails**](/dashboard/project/_/auth/templates) page in the project dashboard.
- Select the **Confirm signup** template.
- Change `{{ .ConfirmationURL }}` to `{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email`.
- Repeat the previous step for **Magic link** template.

**Did you know?** You can also customize emails sent out to new users, including the email's looks, content, and query parameters. Check out the [settings of your project](/dashboard/project/_/auth/templates).

### Confirmation endpoint

As this is a server-side rendering (SSR) environment, you need to create a server endpoint responsible for exchanging the `token_hash` for a session.

The following code snippet performs the following steps:

- Retrieves the `token_hash` sent back from the Supabase Auth server using the `token_hash` query parameter.
- Exchanges this `token_hash` for a session, which you store in storage (in this case, cookies).
- Finally, redirect the user to the `account` page or the `error` page.

  ```typescript name=src/routes/auth/confirm/+server.ts
  // src/routes/auth/confirm/+server.js
  import type { EmailOtpType } from '@supabase/supabase-js'
  import { redirect } from '@sveltejs/kit'

  import type { RequestHandler } from './$types'

  export const GET: RequestHandler = async ({ url, locals: { supabase } }) => {
    const token_hash = url.searchParams.get('token_hash')
    const type = url.searchParams.get('type') as EmailOtpType | null
    const next = url.searchParams.get('next') ?? '/account'

    /**
     * Clean up the redirect URL by deleting the Auth flow parameters.
     *
     * `next` is preserved for now, because it's needed in the error case.
     */
    const redirectTo = new URL(url)
    redirectTo.pathname = next
    redirectTo.searchParams.delete('token_hash')
    redirectTo.searchParams.delete('type')

    if (token_hash && type) {
      const { error } = await supabase.auth.verifyOtp({ type, token_hash })
      if (!error) {
        redirectTo.searchParams.delete('next')
        redirect(303, redirectTo)
      }
    }

    redirectTo.pathname = '/auth/error'
    redirect(303, redirectTo)
  }
  ```

### Authentication error page

If there is an error with confirming the token, redirect the user to an error page.

````
  ```svelte name=src/routes/auth/error/+page.svelte
  Login error
  ```
````

### Account page

After a user signs in, they need to be able to edit their profile details page.
Create a new `src/routes/account/+page.svelte` file with the content below.

````
  ```svelte name=src/routes/account/+page.svelte
  
  	import { enhance } from '$app/forms';
  	import type { SubmitFunction } from '@sveltejs/kit';

  	// ...

  	let { data, form } = $props()
  	let { session, supabase, profile } = $derived(data)
  	let profileForm: HTMLFormElement
  	let loading = $state(false)
  	let fullName: string = profile?.full_name ?? ''
  	let username: string = profile?.username ?? ''
  	let website: string = profile?.website ?? ''

  	// ...

  	const handleSubmit: SubmitFunction = () => {
  		loading = true
  		return async () => {
  			loading = false
  		}
  	}

  	const handleSignOut: SubmitFunction = () => {
  		loading = true
  		return async ({ update }) => {
  			loading = false
  			update()
  		}
  	}
  

  
  	<form
  		class="form-widget"
  		method="post"
  		action="?/update"
  		use:enhance={handleSubmit}
  		bind:this={profileForm}
  	>

  		// ...

  		
  			Email
  			
  		

  		
  			Full Name
  			
  		

  		
  			Username
  			
  		

  		
  			Website
  			
  		

  		
  			<input
  				type="submit"
  				class="button block primary"
  				value={loading ? 'Loading...' : 'Update'}
  				disabled={loading}
  			/>
  		
  	

  	
  		
  			Sign Out
  		
  	
  
  ```
````

Now, create the associated `src/routes/account/+page.server.ts` file that handles loading data from the server through the `load` function
and handle all form actions through the `actions` object.

````
```typescript name=src/routes/account/+page.server.ts
import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: { supabase, safeGetSession } }) => {
  const { session } = await safeGetSession()

  if (!session) {
    redirect(303, '/')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select(`username, full_name, website, avatar_url`)
    .eq('id', session.user.id)
    .single()

  return { session, profile }
}

export const actions: Actions = {
  update: async ({ request, locals: { supabase, safeGetSession } }) => {
    const formData = await request.formData()
    const fullName = formData.get('fullName') as string
    const username = formData.get('username') as string
    const website = formData.get('website') as string
    const avatarUrl = formData.get('avatarUrl') as string

    const { session } = await safeGetSession()

    const { error } = await supabase.from('profiles').upsert({
      id: session?.user.id,
      full_name: fullName,
      username,
      website,
      avatar_url: avatarUrl,
      updated_at: new Date(),
    })

    if (error) {
      return fail(500, {
        fullName,
        username,
        website,
        avatarUrl,
      })
    }

    return {
      fullName,
      username,
      website,
      avatarUrl,
    }
  },
  signout: async ({ locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()
    if (session) {
      await supabase.auth.signOut()
      redirect(303, '/')
    }
  },
}
```
````

### Launch!

With all the pages in place, run this command in a terminal:

```bash
npm run dev
```

And then open the browser to [localhost:5173](http://localhost:5173) and you should see the completed app.

![Supabase Svelte](/docs/img/supabase-svelte-demo.png)

## Bonus: Profile photos

Every Supabase project is configured with [Storage](/docs/guides/storage) for managing large files like photos and videos.

### Create an upload widget

Create an avatar for the user so that they can upload a profile photo. Start by creating a new component called `Avatar.svelte` in the `src/routes/account` directory:

````
  ```svelte name=src/routes/account/Avatar.svelte
  
  
  	import type { SupabaseClient } from '@supabase/supabase-js'

  	interface Props {
  		size?: number
  		url?: string
  		supabase: SupabaseClient
  		onupload?: () => void
  	}
  	let { size = 10, url = $bindable(), supabase, onupload }: Props = $props()

  	let avatarUrl: string | null = $state(null)
  	let uploading = $state(false)
  	let files: FileList = $state()

  	const downloadImage = async (path: string) => {
  		try {
  			const { data, error } = await supabase.storage.from('avatars').download(path)

  			if (error) {
  				throw error
  			}

  			const url = URL.createObjectURL(data)
  			avatarUrl = url
  		} catch (error) {
  			if (error instanceof Error) {
  				console.log('Error downloading image: ', error.message)
  			}
  		}
  	}

  	const uploadAvatar = async () => {
  		try {
  			uploading = true

  			if (!files || files.length === 0) {
  				throw new Error('You must select an image to upload.')
  			}

  			const file = files[0]
  			const fileExt = file.name.split('.').pop()
  			const filePath = `${Math.random()}.${fileExt}`

  			const { error } = await supabase.storage.from('avatars').upload(filePath, file)

  			if (error) {
  				throw error
  			}

  			url = filePath
  			setTimeout(() => {
  				onupload?.()
  			}, 100)
  		} catch (error) {
  			if (error instanceof Error) {
  				alert(error.message)
  			}
  		} finally {
  			uploading = false
  		}
  	}

  	$effect(() => {
  		if (url) downloadImage(url)
  	})
  

  

  		<img
  			src={avatarUrl}
  			alt={avatarUrl ? 'Avatar' : 'No image'}
  			class="avatar image"
  			style="height: {size}em; width: {size}em;"
  		/>
  	{:else}
  		
  	{/if}
  	

  	
  		
  			{uploading ? 'Uploading ...' : 'Upload'}
  		
  		<input
  			style="visibility: hidden; position:absolute;"
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

Add the widget to the Account page:

````
  ```svelte name=src/routes/account/+page.svelte
  

      // ...

      import Avatar from './Avatar.svelte'

  // ...

  

          // ...

          <Avatar
              {supabase}
              bind:url={avatarUrl}
              size={10}
              onupload={() => {
                  profileForm.requestSubmit();
              }}
          />

  // ...

  
  ```
````

At this stage you have a fully functional application!
