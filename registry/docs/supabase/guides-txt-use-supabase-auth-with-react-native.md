# Use Supabase Auth with React Native

Learn how to use Supabase Auth with React Native

\<StepHikeCompact.Step step={1}>
\<StepHikeCompact.Details title="Create a new Supabase project">
[Launch a new project](/dashboard) in the Supabase Dashboard.

````
  Your new database has a table for storing your users. You can see that this table is currently empty by running some SQL in the [SQL Editor](/dashboard/project/_/sql).
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```sql name=SQL_EDITOR
     select * from auth.users;
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={2}>
\<StepHikeCompact.Details title="Create a React app">
Create a React app using the `create-expo-app` command.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    ```bash name=Terminal
    npx create-expo-app -t expo-template-blank-typescript my-app
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={3}>
\<StepHikeCompact.Details title="Install the Supabase client library">
Install `supabase-js` and the required dependencies.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    ```bash name=Terminal
    cd my-app && npx expo install @supabase/supabase-js @react-native-async-storage/async-storage @rneui/themed react-native-url-polyfill
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={4}>
\<StepHikeCompact.Details title="Set up your login component">
Create a helper file `lib/supabase.ts` that exports a Supabase client using your Project URL and key.

````
  Rename `.env.example` to `.env` and populate with your Supabase connection variables:

  

  

  
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    
      ```typescript name=lib/supabase.ts
      import { AppState, Platform } from 'react-native'
      import 'react-native-url-polyfill/auto'
      import AsyncStorage from '@react-native-async-storage/async-storage'
      import { createClient, processLock } from '@supabase/supabase-js'

      const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!
      const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!

      export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          ...(Platform.OS !== 'web' ? { storage: AsyncStorage } : {}),
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: false,
          lock: processLock,
        },
      })

      // Tells Supabase Auth to continuously refresh the session automatically
      // if the app is in the foreground. When this is added, you will continue
      // to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
      // `SIGNED_OUT` event if the user's session is terminated. This should
      // only be registered once.
      if (Platform.OS !== 'web') {
        AppState.addEventListener('change', (state) => {
          if (state === 'active') {
            supabase.auth.startAutoRefresh()
          } else {
            supabase.auth.stopAutoRefresh()
          }
        })
      }
      ```
    
  

  {/* TODO: How to completely consolidate partials? */}

  You can also get the Project URL and key from [the project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=mobiles\&framework=exporeactnative).

  
    Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

    In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=mobiles\&framework=exporeactnative), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

    *   **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
    *   **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.
  

  [Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={5}>
\<StepHikeCompact.Details title="Create a login component">
Create a React Native component to manage logins and sign ups. The app later uses the [`getClaims`](/docs/reference/javascript/auth-getclaims) method in `App.tsx` to validate the local JWT before showing the signed-in user.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    
      ```tsx name=components/Auth.tsx
      import React, { useState } from 'react'
      import { Alert, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
      import { supabase } from '../lib/supabase'

      export default function Auth() {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [loading, setLoading] = useState(false)

        async function signInWithEmail() {
          setLoading(true)
          const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          })

          if (error) Alert.alert(error.message)
          setLoading(false)
        }

        async function signUpWithEmail() {
          setLoading(true)
          const {
            data: { session },
            error,
          } = await supabase.auth.signUp({
            email: email,
            password: password,
          })

          if (error) Alert.alert(error.message)
          if (!session) Alert.alert('Please check your inbox for email verification!')
          setLoading(false)
        }

        return (
          
            
              Email
              <TextInput
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="email@address.com"
                autoCapitalize="none"
                style={styles.input}
              />
            
            
              Password
              <TextInput
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
                placeholder="Password"
                autoCapitalize="none"
                style={styles.input}
              />
            
            
              <TouchableOpacity
                style={[styles.button, loading && styles.buttonDisabled]}
                onPress={() => signInWithEmail()}
                disabled={loading}
              >
                Sign in
              
            
            
              <TouchableOpacity
                style={[styles.button, loading && styles.buttonDisabled]}
                onPress={() => signUpWithEmail()}
                disabled={loading}
              >
                Sign up
              
            
          
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
        label: {
          fontSize: 16,
          fontWeight: '600',
          color: '#86939e',
          marginBottom: 6,
        },
        input: {
          borderWidth: 1,
          borderColor: '#86939e',
          borderRadius: 4,
          padding: 12,
          fontSize: 16,
        },
        button: {
          backgroundColor: '#2089dc',
          borderRadius: 4,
          padding: 12,
          alignItems: 'center',
        },
        buttonDisabled: {
          opacity: 0.5,
        },
        buttonText: {
          color: '#fff',
          fontSize: 16,
          fontWeight: '600',
        },
      })
      ```
    
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={6}>
\<StepHikeCompact.Details title="Add the Auth component to your app">
Add the `Auth` component to your `App.tsx` file. If the user is logged in, print the user id to the screen.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    
      ```tsx name=App.tsx
      import 'react-native-url-polyfill/auto'
      import { useState, useEffect } from 'react'
      import { supabase } from './lib/supabase'
      import Auth from './components/Auth'
      import { View, Text } from 'react-native'
      import { JwtPayload } from '@supabase/supabase-js'

      export default function App() {
        const [claims, setClaims] = useState(null)

        useEffect(() => {
          supabase.auth.getClaims().then(({ data: { claims } }) => {
            setClaims(claims)
          })

          supabase.auth.onAuthStateChange(() => {
            supabase.auth.getClaims().then(({ data: { claims } }) => {
              setClaims(claims)
            })
          })
        }, [])

        return (
          
            
            {claims && {claims.sub}}
          
        )
      }
      ```
    
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={7}>
\<StepHikeCompact.Details title="Start the app">
Start the app, and follow the instructions in the terminal.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    ```bash name=Terminal
    npm start
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>
