## Building the app

Start by building the React Native app from scratch.

### Initialize a React Native app

Use [Expo](https://docs.expo.dev/get-started/create-a-project/) to initialize an app called `expo-social-auth` with the [standard template](https://docs.expo.dev/more/create-expo/#--template):

```bash
npx create-expo-app@latest

cd expo-social-auth
```

Install the additional dependencies:

- [supabase-js](https://github.com/supabase/supabase-js)
- [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage) - A key-value store for React Native.
- [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/) - Provides a way to securely store key-value pairs locally on the device.
- [expo-splash-screen](https://docs.expo.dev/versions/latest/sdk/splash-screen/) - Provides a way to programmatically manage the splash screen.

```bash
npx expo install @supabase/supabase-js @react-native-async-storage/async-storage expo-secure-store expo-splash-screen
```

Now, create a helper file to initialize the Supabase client for both web and React Native platforms using platform-specific [storage adapters](https://docs.expo.dev/develop/user-interface/store-data/): [Expo SecureStore](https://docs.expo.dev/develop/user-interface/store-data/#secure-storage) for mobile and [AsyncStorage](https://docs.expo.dev/develop/user-interface/store-data/#async-storage) for web.

````
    ```typescript name=lib/supabase.web.ts
    import AsyncStorage from '@react-native-async-storage/async-storage';
    import { createClient } from '@supabase/supabase-js';
    import 'react-native-url-polyfill/auto';

    const isSSR = typeof window === 'undefined';

    const ExpoWebSecureStoreAdapter = {
      getItem: (key: string) => {
        if (isSSR) return null;
        console.debug("getItem", { key })
        return AsyncStorage.getItem(key)
      },
      setItem: (key: string, value: string) => {
        if (isSSR) return;
        return AsyncStorage.setItem(key, value)
      },
      removeItem: (key: string) => {
        if (isSSR) return;
        return AsyncStorage.removeItem(key)
      },
    };

    export const supabase = createClient(
      process.env.EXPO_PUBLIC_SUPABASE_URL ?? '',
      process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '',
      {
        auth: {
          storage: ExpoWebSecureStoreAdapter,
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: false,
        },
      },
    );
    ```
  




If you want to encrypt the user's session information, use `aes-js` and store the encryption key in [Expo SecureStore](https://docs.expo.dev/versions/latest/sdk/securestore). The [`aes-js` library](https://github.com/ricmoo/aes-js) is a reputable JavaScript-only implementation of the AES encryption algorithm in CTR mode. A new 256-bit encryption key is generated using the `react-native-get-random-values` library. This key is stored inside Expo's SecureStore, while the value is encrypted and placed inside AsyncStorage.

Make sure that:

*   You keep the `expo-secure-storage`, `aes-js` and `react-native-get-random-values` libraries up-to-date.
*   Choose the correct [`SecureStoreOptions`](https://docs.expo.dev/versions/latest/sdk/securestore/#securestoreoptions) for your app's needs. E.g. [`SecureStore.WHEN_UNLOCKED`](https://docs.expo.dev/versions/latest/sdk/securestore/#securestorewhen_unlocked) regulates when the data can be accessed.
*   Carefully consider optimizations or other modifications to the above example, as those can lead to introducing subtle security vulnerabilities.

Implement a `ExpoSecureStoreAdapter` to pass in as Auth storage adapter for the `supabase-js` client:


  
    ```typescript name=lib/supabase.ts
    import { createClient } from '@supabase/supabase-js';
    import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store';

    const ExpoSecureStoreAdapter = {
      getItem: (key: string) => {
        console.debug("getItem", { key, getItemAsync })
        return getItemAsync(key)
      },
      setItem: (key: string, value: string) => {
        if (value.length > 2048) {
          console.warn('Value being stored in SecureStore is larger than 2048 bytes and it may not be stored successfully. In a future SDK version, this call may throw an error.')
        }
        return setItemAsync(key, value)
      },
      removeItem: (key: string) => {
        return deleteItemAsync(key)
      },
    };

    export const supabase = createClient(
      process.env.EXPO_PUBLIC_SUPABASE_URL ?? '',
      process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '',
      {
        auth: {
          storage: ExpoSecureStoreAdapter as any,
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: false,
        },
      },
    );
    ```
  
````

### Set up environment variables

You need the API URL and the `anon` key copied [earlier](#get-the-api-keys).
These variables are safe to expose in your Expo app since Supabase has [Row Level Security](/docs/guides/database/postgres/row-level-security) enabled on your database.

Create a `.env` file containing these variables:

````
```
EXPO_PUBLIC_SUPABASE_URL=""
EXPO_PUBLIC_SUPABASE_ANON_KEY=""
EXPO_PUBLIC_APPLE_AUTH_SERVICE_ID=""
EXPO_PUBLIC_APPLE_AUTH_REDIRECT_URI=""
EXPO_PUBLIC_GOOGLE_AUTH_WEB_CLIENT_ID=""
```
````

### Set up protected navigation

Next, you need to protect app navigation to prevent unauthenticated users from accessing protected routes. Use the [Expo `SplashScreen`](https://docs.expo.dev/versions/latest/sdk/splash-screen/) to display a loading screen while fetching the user profile and verifying authentication status.

#### Create the `AuthContext`

Create [a React context](https://react.dev/learn/passing-data-deeply-with-context) to manage the authentication session, making it accessible from any component:

````
```tsx name=hooks/use-auth-context.tsx
import { createContext, useContext } from 'react'

export type AuthData = {
  claims?: Record<string, any> | null
  profile?: any | null
  isLoading: boolean
  isLoggedIn: boolean
}

export const AuthContext = createContext({
  claims: undefined,
  profile: undefined,
  isLoading: true,
  isLoggedIn: false,
})

export const useAuthContext = () => useContext(AuthContext)
```
````

#### Create the `AuthProvider`

Next, create a provider component to manage the authentication session throughout the app:

````
```tsx name=providers/auth-provider.tsx
import { AuthContext } from '@/hooks/use-auth-context'
import { supabase } from '@/lib/supabase'
import { PropsWithChildren, useEffect, useState } from 'react'

export default function AuthProvider({ children }: PropsWithChildren) {
  const [claims, setClaims] = useState<Record<string, any> | undefined | null>()
  const [profile, setProfile] = useState()
  const [isLoading, setIsLoading] = useState(true)

  // Fetch the claims once, and subscribe to auth state changes
  useEffect(() => {
    const fetchClaims = async () => {
      setIsLoading(true)

      const { data, error } = await supabase.auth.getClaims()

      if (error) {
        console.error('Error fetching claims:', error)
      }

      setClaims(data?.claims ?? null)
      setIsLoading(false)
    }

    fetchClaims()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, _session) => {
      console.log('Auth state changed:', { event: _event })
      const { data } = await supabase.auth.getClaims()
      setClaims(data?.claims ?? null)
    })

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  // Fetch the profile when the claims change
  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true)

      if (claims) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', claims.sub)
          .single()

        setProfile(data)
      } else {
        setProfile(null)
      }

      setIsLoading(false)
    }

    fetchProfile()
  }, [claims])

  return (
    <AuthContext.Provider
      value={{
        claims,
        isLoading,
        profile,
        isLoggedIn: claims != undefined,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
```
````

#### Create the `SplashScreenController`

Create a `SplashScreenController` component to display the [Expo `SplashScreen`](https://docs.expo.dev/versions/latest/sdk/splash-screen/) while the authentication session is loading:

````
```tsx name=components/splash-screen-controller.tsx
import { useAuthContext } from '@/hooks/use-auth-context'
import { SplashScreen } from 'expo-router'

SplashScreen.preventAutoHideAsync()

export function SplashScreenController() {
  const { isLoading } = useAuthContext()

  if (!isLoading) {
    SplashScreen.hideAsync()
  }

  return null
}
```
````

### Create a logout component

Create a logout button component to handle user sign-out:

````
```tsx name=components/social-auth-buttons/sign-out-button.tsx
import { supabase } from '@/lib/supabase'
import React from 'react'
import { Button } from 'react-native'

async function onSignOutButtonPress() {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error('Error signing out:', error)
  }
}

export default function SignOutButton() {
  return 
}
```
````

And add it to the `app/(tabs)/index.tsx` file used to display the user profile data and the logout button:

````
```tsx name=app/(tabs)/index.tsx
import { Image } from 'expo-image'
import { StyleSheet } from 'react-native'

import { HelloWave } from '@/components/hello-wave'
import ParallaxScrollView from '@/components/parallax-scroll-view'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import SignOutButton from '@/components/social-auth-buttons/sign-out-button'
import { useAuthContext } from '@/hooks/use-auth-context'

export default function HomeScreen() {
  const { profile } = useAuthContext()

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      
        Welcome!
        
      
      
        Username
        {profile?.username}
        Full name
        {profile?.full_name}
      
      
    
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
})
```
````

### Create a login screen

Next, create a basic login screen component:

````
```tsx name=app/login.tsx
import { Link, Stack } from 'expo-router'
import { StyleSheet } from 'react-native'

import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'

export default function LoginScreen() {
  return (
    <>
      
      
        Login
        
          Try to navigate to home screen!
        
      
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})
```
````

#### Implement protected routes

Wrap the navigation with the `AuthProvider` and `SplashScreenController`.

Using [Expo Router's protected routes](https://docs.expo.dev/router/advanced/authentication/#using-protected-routes), you can secure navigation:

{/\* prettier-ignore \*/}

````
```tsx name=app/\\_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

import { SplashScreenController } from '@/components/splash-screen-controller'

import { useAuthContext } from '@/hooks/use-auth-context'
import { useColorScheme } from '@/hooks/use-color-scheme'
import AuthProvider from '@/providers/auth-provider'

// Separate RootNavigator so we can access the AuthContext
function RootNavigator() {
  const { isLoggedIn } = useAuthContext()

  return (
    
      <Stack.Protected guard={isLoggedIn}>
        
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        
      </Stack.Protected>
      
    
  )
}

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    
      
        
        
        
      
    
  )
}
```
````

You can now test the app by running:

```bash
npx expo prebuild
npx expo start --clear
```

Verify that the app works as expected. The splash screen displays while fetching the user profile, and the login page appears even when attempting to navigate to the home screen using the `Link` button.

By default Supabase Auth requires email verification before a session is created for the user. To support email verification you need to [implement deep link handling](/docs/guides/auth/native-mobile-deep-linking?platform=react-native)!

While testing, you can disable email confirmation in your [project's email auth provider settings](/dashboard/project/_/auth/providers).
