# Build a User Management App with SolidJS

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](/docs/guides/database) - a Postgres database for storing your user data and [Row Level Security](/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](/docs/guides/auth) - allow users to sign up and log in.
- [Supabase Storage](/docs/guides/storage) - allow users to upload a profile photo.

![Supabase User Management example](/docs/img/user-management-demo.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/supabase/supabase/tree/master/examples/user-management/solid-user-management).

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

To do this, you need to get the Project URL and key from [the project **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=solidjs).

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=solidjs), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

[Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.

## Building the app

Start building the SolidJS app from scratch.

### Initialize a SolidJS app

You can use [degit](https://github.com/Rich-Harris/degit) to initialize an app called `supabase-solid`:

```bash
npx degit solidjs/templates/ts supabase-solid
cd supabase-solid
```

Then install the only additional dependency: [supabase-js](https://github.com/supabase/supabase-js)

```bash
npm install @supabase/supabase-js
```

And finally save the environment variables in a `.env` with the API URL and the key that you copied [earlier](#get-api-details).

````
  ```
  VITE_SUPABASE_URL=https://your-project-ref.supabase.co
  VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
  ```
````

Now that you have the API credentials in place, create a helper file to initialize the Supabase client. These variables will be exposed
on the browser, and that's completely fine since you have [Row Level Security](/docs/guides/auth#row-level-security) enabled on the Database.

````
  ```tsx name=src/supabaseClient.tsx
  import { createClient } from '@supabase/supabase-js'
  import { Database } from './schema'

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

  export const supabase = createClient(supabaseUrl, supabasePublishableKey)
  ```
````

### App styling (optional)

An optional step is to update the CSS file `src/index.css` to make the app look better.
You can find the full contents of this file [here](https://raw.githubusercontent.com/supabase/supabase/master/examples/user-management/solid-user-management/src/index.css).

### Set up a login component

Set up a SolidJS component to manage logins and sign ups using Magic Links, so users can sign in with their email without using passwords.

````
  ```tsx name=src/Auth.tsx
  import { Component, createSignal } from 'solid-js'
  import { supabase } from './supabaseClient'

  const Auth: Component = () => {
  	const [loading, setLoading] = createSignal(false)
  	const [email, setEmail] = createSignal('')

  	const handleLogin = async (e: SubmitEvent) => {
  		e.preventDefault()

  		try {
  			setLoading(true)
  			const { error } = await supabase.auth.signInWithOtp({ email: email() })
  			if (error) throw error
  			alert('Check your email for the login link!')
  		} catch (error) {
  			if (error instanceof Error) {
  				alert(error.message)
  			}
  		} finally {
  			setLoading(false)
  		}
  	}

  	return (
  		
  			
  				Supabase + SolidJS
  				Sign in via magic link with your email below
  				
  					
  						Email
  						<input
  							id="email"
  							class="inputField"
  							type="email"
  							placeholder="Your email"
  							value={email()}
  							onChange={(e) => setEmail(e.currentTarget.value)}
  						/>
  					
  					
  						
  							{loading() ? Loading : Send magic link}
  						
  					
  				
  			
  		
  	)
  }

  export default Auth
  ```
````

### Account page

After a user is signed in allow them to edit their profile details and manage their account.

Create a new component for that called `Account.tsx`.

````
  ```tsx name=src/Account.tsx
  import { Component, createEffect, createSignal } from 'solid-js'

  // ...

  import { supabase } from './supabaseClient'

  interface Props {
  	userId: string
  	userEmail: string | null
  }

  const Account: Component = ({ userId, userEmail }) => {
  	const [loading, setLoading] = createSignal(true)
  	const [username, setUsername] = createSignal(null)
  	const [website, setWebsite] = createSignal(null)
  	const [avatarUrl, setAvatarUrl] = createSignal(null)

  	createEffect(() => {
  		getProfile()
  	})

  	const getProfile = async () => {
  		try {
  			setLoading(true)

  			let { data, error, status } = await supabase
  				.from('profiles')
  				.select(`username, website, avatar_url`)
  				.eq('id', userId)
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
  			if (error instanceof Error) {
  				alert(error.message)
  			}
  		} finally {
  			setLoading(false)
  		}
  	}

  	const updateProfile = async (e: Event) => {
  		e.preventDefault()

  		try {
  			setLoading(true)

  			const updates = {
  				id: userId,
  				username: username(),
  				website: website(),
  				avatar_url: avatarUrl(),
  				updated_at: new Date().toISOString(),
  			}

  			let { error } = await supabase.from('profiles').upsert(updates)

  			if (error) {
  				throw error
  			}
  		} catch (error) {
  			if (error instanceof Error) {
  				alert(error.message)
  			}
  		} finally {
  			setLoading(false)
  		}
  	}

  	return (
  		
  			

  				{/* ... */}

  				Email: {userEmail}
  				
  					Name
  					<input
  						id="username"
  						type="text"
  						value={username() || ''}
  						onChange={(e) => setUsername(e.currentTarget.value)}
  					/>
  				
  				
  					Website
  					<input
  						id="website"
  						type="text"
  						value={website() || ''}
  						onChange={(e) => setWebsite(e.currentTarget.value)}
  					/>
  				
  				
  					
  						{loading() ? 'Saving ...' : 'Update profile'}
  					
  				
  				 supabase.auth.signOut()}>
  					Sign Out
  				
  			
  		
  	)
  }

  export default Account
  ```
````

### Launch!

Now that you have all the components in place, update `App.tsx`:

````
  ```tsx name=src/App.tsx
  import { Component, createEffect, createSignal } from 'solid-js'
  import { supabase } from './supabaseClient'
  import Account from './Account'
  import Auth from './Auth'

  const App: Component = () => {
  	const [userId, setUserId] = createSignal(null)
  	const [userEmail, setUserEmail] = createSignal(null)

  	const syncClaims = async () => {
  		const { data } = await supabase.auth.getClaims()
  		setUserId((data?.claims.sub as string) ?? null)
  		setUserEmail((data?.claims.email as string) ?? null)
  	}

  	createEffect(() => {
  		syncClaims()

  		supabase.auth.onAuthStateChange(() => {
  			syncClaims()
  		})
  	})

  	return (
  		
  			{!userId() ?  : }
  		
  	)
  }

  export default App
  ```
````

Once that's done, run this in a terminal window:

```bash
npm start
```

And then open the browser to [localhost:3000](http://localhost:3000) and you should see the completed app.

![Supabase SolidJS](/docs/img/supabase-solidjs-demo.png)

## Bonus: Profile photos

Every Supabase project is configured with [Storage](/docs/guides/storage) for managing large files like photos and videos.

### Create an upload widget

Create an avatar for the user so that they can upload a profile photo. Start by creating a new component:

````
  ```tsx name=src/Avatar.tsx
  import { Component, createEffect, createSignal, JSX } from 'solid-js'
  import { supabase } from './supabaseClient'

  interface Props {
  	size: number
  	url: string | null
  	onUpload: (event: Event, filePath: string) => void
  }

  const Avatar: Component = (props) => {
  	const [avatarUrl, setAvatarUrl] = createSignal(null)
  	const [uploading, setUploading] = createSignal(false)

  	createEffect(() => {
  		if (props.url) downloadImage(props.url)
  	})

  	const downloadImage = async (path: string) => {
  		try {
  			const { data, error } = await supabase.storage.from('avatars').download(path)
  			if (error) {
  				throw error
  			}
  			const url = URL.createObjectURL(data)
  			setAvatarUrl(url)
  		} catch (error) {
  			if (error instanceof Error) {
  				console.log('Error downloading image: ', error.message)
  			}
  		}
  	}

  	const uploadAvatar: JSX.EventHandler<HTMLInputElement, Event> = async (event) => {
  		try {
  			setUploading(true)

  			const target = event.currentTarget
  			if (!target?.files || target.files.length === 0) {
  				throw new Error('You must select an image to upload.')
  			}

  			const file = target.files[0]
  			const fileExt = file.name.split('.').pop()
  			const fileName = `${Math.random()}.${fileExt}`
  			const filePath = `${fileName}`

  			let { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

  			if (uploadError) {
  				throw uploadError
  			}

  			props.onUpload(event, filePath)
  		} catch (error) {
  			if (error instanceof Error) {
  				alert(error.message)
  			}
  		} finally {
  			setUploading(false)
  		}
  	}

  	return (
  		
  			{avatarUrl() ? (
  				<img
  					src={avatarUrl()!}
  					alt={avatarUrl() ? 'Avatar' : 'No image'}
  					class="avatar image"
  					style={{ height: `${props.size}px`, width: `${props.size}px` }}
  				/>
  			) : (
  				<div
  					class="avatar no-image"
  					style={{ height: `${props.size}px`, width: `${props.size}px` }}
  				/>
  			)}
  			
  				
  					{uploading() ? 'Uploading ...' : 'Upload avatar'}
  				
  				
  					<input
  						type="file"
  						id="single"
  						accept="image/*"
  						onChange={uploadAvatar}
  						disabled={uploading()}
  					/>
  				
  			
  		
  	)
  }

  export default Avatar
  ```
````

### Add the new widget

And then add the widget to the Account page:

````
  ```tsx name=src/Account.tsx
  import { Component, createEffect, createSignal } from 'solid-js'
  import Avatar from './Avatar'
  import { supabase } from './supabaseClient'

  	// ...

  	return (
  		
  			
  				<Avatar
  					url={avatarUrl()}
  					size={150}
  					onUpload={(e: Event, url: string) => {
  						setAvatarUrl(url)
  						updateProfile(e)
  					}}
  				/>
  				Email: {userEmail}
  				

  	// ...
  ```
````

At this stage you have a fully functional application!
