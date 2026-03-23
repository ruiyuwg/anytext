# Use Supabase Auth with React

Learn how to use Supabase Auth with React.js.

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
Create a React app using a [Vite](https://vitejs.dev/guide/) template.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    ```bash name=Terminal
    npm create vite@latest my-app -- --template react
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={3}>
\<StepHikeCompact.Details title="Install the Supabase client library">
Navigate to the React app and install the Supabase libraries.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    ```bash name=Terminal
    cd my-app && npm install @supabase/supabase-js
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={4}>
\<StepHikeCompact.Details title="Declare Supabase Environment Variables">
Rename `.env.example` to `.env.local` and populate with your Supabase connection variables:

````
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    
      ```
      VITE_SUPABASE_URL=your-project-url
      VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your-publishable-key-or-anon-key
      ```
    
  

  {/* TODO: How to completely consolidate partials? */}

  You can also get the Project URL and key from [the project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=react).

  
    Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

    In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=react), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

    *   **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
    *   **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.
  

  [Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={5}>
\<StepHikeCompact.Details title="Set up your login component">

````
    UI components built on shadcn/ui that connect to Supabase via a single command.

    
      Explore Components
    
  

  In `App.jsx`, create a Supabase client using your Project URL and key.

  The code uses the [`getClaims`](/docs/reference/javascript/auth-getclaims) method in `App.jsx` to validate the local JWT before showing the signed-in user.
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    
      ```jsx name=src/App.jsx
      import './index.css'
      import { useState, useEffect } from 'react'
      import { createClient } from '@supabase/supabase-js'

      const supabase = createClient(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY
      )

      export default function App() {
        const [loading, setLoading] = useState(false)
        const [email, setEmail] = useState('')
        const [claims, setClaims] = useState(null)

        // Check URL params on initial render
        const params = new URLSearchParams(window.location.search)
        const hasTokenHash = params.get('token_hash')

        const [verifying, setVerifying] = useState(!!hasTokenHash)
        const [authError, setAuthError] = useState(null)
        const [authSuccess, setAuthSuccess] = useState(false)

        useEffect(() => {
          // Check if we have token_hash in URL (magic link callback)
          const params = new URLSearchParams(window.location.search)
          const token_hash = params.get('token_hash')
          const type = params.get('type')

          if (token_hash) {
            // Verify the OTP token
            supabase.auth
              .verifyOtp({
                token_hash,
                type: type || 'email',
              })
              .then(({ error }) => {
                if (error) {
                  setAuthError(error.message)
                } else {
                  setAuthSuccess(true)
                  // Clear URL params
                  window.history.replaceState({}, document.title, '/')
                }
                setVerifying(false)
              })
          }

          // Check for existing session using getClaims
          supabase.auth.getClaims().then(({ data: { claims } }) => {
            setClaims(claims)
          })

          // Listen for auth changes
          const {
            data: { subscription },
          } = supabase.auth.onAuthStateChange(() => {
            supabase.auth.getClaims().then(({ data: { claims } }) => {
              setClaims(claims)
            })
          })

          return () => subscription.unsubscribe()
        }, [])

        const handleLogin = async (event) => {
          event.preventDefault()
          setLoading(true)
          const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
              emailRedirectTo: window.location.origin,
            },
          })
          if (error) {
            alert(error.error_description || error.message)
          } else {
            alert('Check your email for the login link!')
          }
          setLoading(false)
        }

        const handleLogout = async () => {
          await supabase.auth.signOut()
          setClaims(null)
        }

        // Show verification state
        if (verifying) {
          return (
            
              Authentication
              Confirming your magic link...
              Loading...
            
          )
        }

        // Show auth error
        if (authError) {
          return (
            
              Authentication
              ✗ Authentication failed
              {authError}
              <button
                onClick={() => {
                  setAuthError(null)
                  window.history.replaceState({}, document.title, '/')
                }}
              >
                Return to login
              
            
          )
        }

        // Show auth success (briefly before claims load)
        if (authSuccess && !claims) {
          return (
            
              Authentication
              ✓ Authentication successful!
              Loading your account...
            
          )
        }

        // If user is logged in, show welcome screen
        if (claims) {
          return (
            
              Welcome!
              You are logged in as: {claims.email}
              Sign Out
            
          )
        }

        // Show login form
        return (
          
            Supabase + React
            Sign in via magic link with your email below
            
              <input
                type="email"
                placeholder="Your email"
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />
              
                {loading ? Loading : Send magic link}
              
            
          
        )
      }
      ```
    
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={6}>
\<StepHikeCompact.Details title="Customize email template">
Before proceeding, change the email template to support support a server-side authentication flow that sends a token hash:

```
  *   Go to the [Auth templates](/dashboard/project/_/auth/templates) page in your dashboard.
  *   Select the Confirm sign up template.
  *   Change `{{ .ConfirmationURL }}` to `{{ .SiteURL }}?token_hash={{ .TokenHash }}&type=email`.
  *   Change your [Site URL](/dashboard/project/_/auth/url-configuration) to `https://localhost:5173`
</StepHikeCompact.Details>
```

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={7}>
\<StepHikeCompact.Details title="Start the app">
Start the app, go to <http://localhost:5173> in a browser, and open the browser console and you should be able to register and log in.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    ```bash name=Terminal
    npm run dev
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

# Build a Social Auth App with Expo React Native

This tutorial demonstrates how to build a React Native app with [Expo](https://expo.dev) that implements social authentication. The app showcases a complete authentication flow with protected navigation using:

- [Supabase Database](/docs/guides/database) - a Postgres database for storing your user data with [Row Level Security](/docs/guides/auth#row-level-security) to ensure data is protected and users can only access their own information.
- [Supabase Auth](/docs/guides/auth) - enables users to log in through social authentication providers (Apple and Google).

![Supabase Social Auth example](/docs/img/supabase-expo-social-auth-login.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/supabase/supabase/tree/master/examples/auth/expo-social-auth).
