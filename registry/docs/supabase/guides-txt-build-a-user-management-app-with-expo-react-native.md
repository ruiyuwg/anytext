# Build a User Management App with Expo React Native

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](/docs/guides/database) - a Postgres database for storing your user data and [Row Level Security](/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](/docs/guides/auth) - allow users to sign up and log in.
- [Supabase Storage](/docs/guides/storage) - allow users to upload a profile photo.

![Supabase User Management example](/docs/img/supabase-flutter-demo.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/supabase/supabase/tree/master/examples/user-management/expo-user-management).

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

To do this, you need to get the Project URL and key from [the project **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=mobiles\&framework=exporeactnative).

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=mobiles\&framework=exporeactnative), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

[Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.

## Building the app

Start by building the React Native app from scratch.

### Initialize a React Native app

Use [`expo`](https://docs.expo.dev/get-started/create-a-new-app/) to initialize
an app called `expo-user-management`:

```bash
npx create-expo-app -t expo-template-blank-typescript expo-user-management

cd expo-user-management
```

Then install the additional dependencies:

```bash
npx expo install @supabase/supabase-js @rneui/themed expo-sqlite
```

Now create a helper file to initialize the Supabase client using the API URL and the key that you copied [earlier](#get-api-details).

These variables are safe to expose in your Expo app since Supabase has
[Row Level Security](/docs/guides/database/postgres/row-level-security) enabled on your Database.

````
    ```typescript name=lib/supabase.ts
    import { createClient } from '@supabase/supabase-js'
    import AsyncStorage from '@react-native-async-storage/async-storage'

    const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!
    const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY!

    export const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        storage: AsyncStorage as any,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
      },
    })
    ```
  




If you wish to encrypt the user's session information, you can use `aes-js` and store the encryption key in [Expo SecureStore](https://docs.expo.dev/versions/latest/sdk/securestore). The [`aes-js` library](https://github.com/ricmoo/aes-js) is a reputable JavaScript-only implementation of the AES encryption algorithm in CTR mode. A new 256-bit encryption key is generated using the `react-native-get-random-values` library. This key is stored inside Expo's SecureStore, while the value is encrypted and placed inside AsyncStorage.

Make sure that:

*   You keep the `expo-secure-storage`, `aes-js` and `react-native-get-random-values` libraries up-to-date.
*   Choose the correct [`SecureStoreOptions`](https://docs.expo.dev/versions/latest/sdk/securestore/#securestoreoptions) for your app's needs. E.g. [`SecureStore.WHEN_UNLOCKED`](https://docs.expo.dev/versions/latest/sdk/securestore/#securestorewhen_unlocked) regulates when the data can be accessed.
*   Carefully consider optimizations or other modifications to the above example, as those can lead to introducing subtle security vulnerabilities.

Install the necessary dependencies in the root of your Expo project:

```bash
npm install @supabase/supabase-js
npm install @rneui/themed @react-native-async-storage/async-storage
npm install aes-js react-native-get-random-values
npm install --save-dev @types/aes-js
npx expo install expo-secure-store
```

Implement a `LargeSecureStore` class to pass in as Auth storage for the `supabase-js` client:


  
    ```ts name=lib/supabase.ts
    import { createClient } from "@supabase/supabase-js";
    import AsyncStorage from "@react-native-async-storage/async-storage";
    import * as SecureStore from 'expo-secure-store';
    import * as aesjs from 'aes-js';
    import 'react-native-get-random-values';

    // As Expo's SecureStore does not support values larger than 2048
    // bytes, an AES-256 key is generated and stored in SecureStore, while
    // it is used to encrypt/decrypt values stored in AsyncStorage.
    class LargeSecureStore {
      private async _encrypt(key: string, value: string) {
        const encryptionKey = crypto.getRandomValues(new Uint8Array(256 / 8));

        const cipher = new aesjs.ModeOfOperation.ctr(encryptionKey, new aesjs.Counter(1));
        const encryptedBytes = cipher.encrypt(aesjs.utils.utf8.toBytes(value));

        await SecureStore.setItemAsync(key, aesjs.utils.hex.fromBytes(encryptionKey));

        return aesjs.utils.hex.fromBytes(encryptedBytes);
      }

      private async _decrypt(key: string, value: string) {
        const encryptionKeyHex = await SecureStore.getItemAsync(key);
        if (!encryptionKeyHex) {
          return encryptionKeyHex;
        }

        const cipher = new aesjs.ModeOfOperation.ctr(aesjs.utils.hex.toBytes(encryptionKeyHex), new aesjs.Counter(1));
        const decryptedBytes = cipher.decrypt(aesjs.utils.hex.toBytes(value));

        return aesjs.utils.utf8.fromBytes(decryptedBytes);
      }

      async getItem(key: string) {
        const encrypted = await AsyncStorage.getItem(key);
        if (!encrypted) { return encrypted; }

        return await this._decrypt(key, encrypted);
      }

      async removeItem(key: string) {
        await AsyncStorage.removeItem(key);
        await SecureStore.deleteItemAsync(key);
      }

      async setItem(key: string, value: string) {
        const encrypted = await this._encrypt(key, value);

        await AsyncStorage.setItem(key, encrypted);
      }
    }

    const supabaseUrl = YOUR_REACT_NATIVE_SUPABASE_URL
    const supabasePublishableKey = YOUR_REACT_NATIVE_SUPABASE_PUBLISHABLE_KEY

    const supabase = createClient(supabaseUrl, supabasePublishableKey, {
      auth: {
        storage: new LargeSecureStore(),
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
      },
    });
    ```
  
````

### Set up a login component

Set up a React Native component to manage logins and sign ups.
Users should be able to sign in with their email and password.

````
```tsx name=components/Auth.tsx
import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { supabase } from '../lib/supabase'
import { Button, Input } from '@rneui/themed'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    console.log({ email, password })
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    
      
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      
      
        <Input
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      
      
         signInWithEmail()} />
      
      
         signUpWithEmail()} />
      
    
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})
```
````

By default Supabase Auth requires email verification before a session is created for the users. To support email verification you need to [implement deep link handling](/docs/guides/auth/native-mobile-deep-linking?platform=react-native)!

While testing, you can disable email confirmation in your [project's email auth provider settings](/dashboard/project/_/auth/providers).

### Account page

After a user signs in, you can let them to edit their profile details and manage their account.

Create a new component for that called `Account.tsx`.

````
```tsx name=components/Account.tsx
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { StyleSheet, View, Alert } from 'react-native'
import { Button, Input } from '@rneui/themed'
import Avatar from './Avatar'

export default function Account({ userId, email }: { userId: string; email?: string }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [website, setWebsite] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')

  useEffect(() => {
    if (userId) getProfile()
  }, [userId])

  async function getProfile() {
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
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string
    website: string
    avatar_url: string
  }) {
    try {
      setLoading(true)

      const updates = {
        id: userId,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)

      if (error) {
        throw error
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    
      
        <Avatar
          size={200}
          url={avatarUrl}
          onUpload={(url: string) => {
            setAvatarUrl(url)
            updateProfile({ username, website, avatar_url: url })
          }}
        />
      
      
        
      
      
         setUsername(text)} />
      
      
         setWebsite(text)} />
      

      
        <Button
          title={loading ? 'Loading ...' : 'Update'}
          onPress={() => updateProfile({ username, website, avatar_url: avatarUrl })}
          disabled={loading}
        />
      

      
         supabase.auth.signOut()} />
      
    
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})
```
````

### Launch!

Now that you have all the components in place, update `App.tsx`:

````
```tsx name=App.tsx
import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Auth from './components/Auth'
import Account from './components/Account'
import { View } from 'react-native'

export default function App() {
  const [userId, setUserId] = useState(null)
  const [email, setEmail] = useState(undefined)

  useEffect(() => {
    supabase.auth.getClaims().then(({ data: { claims } }) => {
      if (claims) {
        setUserId(claims.sub)
        setEmail(claims.email)
      }
    })

    supabase.auth.onAuthStateChange(async (_event, _session) => {
      const {
        data: { claims },
      } = await supabase.auth.getClaims()
      if (claims) {
        setUserId(claims.sub)
        setEmail(claims.email)
      } else {
        setUserId(null)
        setEmail(undefined)
      }
    })
  }, [])

  return {userId ?  : }
}
```
````

Once that's done, run this in a terminal window:

```bash
npm start
```

And then press the appropriate key for the environment you want to test the app in and you should see the completed app.

## Bonus: Profile photos

Every Supabase project is configured with [Storage](/docs/guides/storage) for managing large files like
photos and videos.

### Additional dependency installation

You need an image picker that works on the environment you are building the project for, this example uses `expo-image-picker`.

```bash
npx expo install expo-image-picker
```

### Create an upload widget

Create an avatar for the user so that they can upload a profile photo.
Start by creating a new component:

````
```tsx name=components/Avatar.tsx
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { StyleSheet, View, Alert, Image, Button } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

interface Props {
  size: number
  url: string | null
  onUpload: (filePath: string) => void
}

export default function Avatar({ url, size = 150, onUpload }: Props) {
  const [uploading, setUploading] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState(null)
  const avatarSize = { height: size, width: size }

  useEffect(() => {
    if (url) downloadImage(url)
  }, [url])

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path)

      if (error) {
        throw error
      }

      const fr = new FileReader()
      fr.readAsDataURL(data)
      fr.onload = () => {
        setAvatarUrl(fr.result as string)
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error downloading image: ', error.message)
      }
    }
  }

  async function uploadAvatar() {
    try {
      setUploading(true)

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        quality: 1,
      })

      if (result.canceled || !result.assets || result.assets.length === 0) {
        return
      }

      const image = result.assets[0]
      if (!image.uri) {
        throw new Error('No image uri!')
      }

      const arraybuffer = await fetch(image.uri).then((res) => res.arrayBuffer())
      const fileExt = image.uri.split('.').pop()?.toLowerCase() ?? 'jpeg'
      const filePath = `${Math.random()}.${fileExt}`

      const { error } = await supabase.storage.from('avatars').upload(filePath, arraybuffer, {
        contentType: image.mimeType ?? 'image/jpeg',
      })

      if (error) {
        throw error
      }

      onUpload(filePath)
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setUploading(false)
    }
  }

  return (
    
      {avatarUrl ? (
        <Image
          source={{ uri: avatarUrl }}
          accessibilityLabel="Avatar"
          style={[avatarSize, styles.avatar, styles.image]}
        />
      ) : (
        
      )}
      
        <Button
          title={uploading ? 'Uploading ...' : 'Upload'}
          onPress={uploadAvatar}
          disabled={uploading}
        />
      
    
  )
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 5,
    overflow: 'hidden',
    maxWidth: '100%',
  },
  image: {
    objectFit: 'cover',
    paddingTop: 0,
  },
  noImage: {
    backgroundColor: '#333',
    borderRadius: 5,
  },
})
```
````

### Add the new widget

And then add the widget to the Account page. The `Account.tsx` component [shown earlier](#account-page) already includes the `Avatar` component when using the full example code.

Now run the prebuild command to get the application working on your chosen platform.

```bash
npx expo prebuild
```

At this stage you have a fully functional application!
