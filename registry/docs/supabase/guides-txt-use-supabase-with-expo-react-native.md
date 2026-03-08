# Use Supabase with Expo React Native

Learn how to create a Supabase project, add some sample data to your database, and query the data from an Expo app.

\<StepHikeCompact.Step step={1}>
\<StepHikeCompact.Details title="Create a Supabase project">
Go to [database.new](https://database.new) and create a new Supabase project.

````
  Alternatively, you can create a project using the Management API:
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  ```bash
  # First, get your access token from https://supabase.com/dashboard/account/tokens
  export SUPABASE_ACCESS_TOKEN="your-access-token"

  # List your organizations to get the organization ID
  curl -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
    https://api.supabase.com/v1/organizations

  # Create a new project (replace <org-id> with your organization ID)
  curl -X POST https://api.supabase.com/v1/projects \
    -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
    -H "Content-Type: application/json" \
    -d '{
      "organization_id": "<org-id>",
      "name": "My Project",
      "region": "us-east-1",
      "db_pass": "<your-secure-password>"
    }'
  ```
</StepHikeCompact.Code>

<StepHikeCompact.Details>
  When your project is up and running, go to the [Table Editor](/dashboard/project/_/editor), create a new table and insert some data.

  Alternatively, you can run the following snippet in your project's [SQL Editor](/dashboard/project/_/sql/new). This will create an `instruments` table with some sample data.
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  ```sql SQL_EDITOR
  -- Create the table
  create table instruments (
    id bigint primary key generated always as identity,
    name text not null
  );
  -- Insert some sample data into the table
  insert into instruments (name)
  values
    ('violin'),
    ('viola'),
    ('cello');

  alter table instruments enable row level security;
  ```
</StepHikeCompact.Code>

<StepHikeCompact.Details>
  Make the data in your table publicly readable by adding an RLS policy:
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  ```sql SQL_EDITOR
  create policy "public can read instruments"
  on public.instruments
  for select to anon
  using (true);
  ```
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={2}>
\<StepHikeCompact.Details title="Create an Expo app">
Create a minimal Expo app using the `create-expo-app` command with the blank TypeScript template.

````
    UI components built on shadcn/ui that connect to Supabase via a single command.

    
      Explore Components
    
  
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```bash name=Terminal
    npx create-expo-app my-app --template blank-typescript
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={3}>
\<StepHikeCompact.Details title="Install the Supabase client library">
The fastest way to get started is to use the `@supabase/supabase-js` client library which provides a convenient interface for working with Supabase from a React Native app.

````
  Navigate to the Expo app and install `supabase-js` along with the required dependencies for secure storage and URL handling.
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```bash name=Terminal
    cd my-app && npx expo install @supabase/supabase-js react-native-url-polyfill expo-sqlite
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={4}>
\<StepHikeCompact.Details title="Declare Supabase Environment Variables">
Create a `.env` file in the root of your project and populate it with your Supabase connection variables.

````
  Expo requires environment variables to be prefixed with `EXPO_PUBLIC_` to be accessible in your app code.

  

  

  
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```text name=.env
    EXPO_PUBLIC_SUPABASE_URL=<SUBSTITUTE_SUPABASE_URL>
    EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<SUBSTITUTE_SUPABASE_PUBLISHABLE_KEY>
    ```
  

  {/* TODO: How to completely consolidate partials? */}

  You can also get the Project URL and key from [the project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=\&framework=).

  
    Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

    In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=\&framework=), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

    *   **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
    *   **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.
  

  [Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={5}>
\<StepHikeCompact.Details title="Initialize the Supabase client">
Create a helper file at `lib/supabase.ts` to initialize the Supabase client using the environment variables.

````
  The code below uses Expo's localStorage polyfill to persist authentication sessions.
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```ts name=lib/supabase.ts
    import 'react-native-url-polyfill/auto'
    import { createClient } from '@supabase/supabase-js'
    import 'expo-sqlite/localStorage/install';

    const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY

    export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        storage: localStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
      },
    })
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={6}>
\<StepHikeCompact.Details title="Query data from the app">
Replace the contents of `App.tsx` with the following code to fetch and display the instruments from your database.

````
  Use `useEffect` to fetch the data when the component mounts and display the query result using React Native components.
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```tsx name=App.tsx
    import { useEffect, useState } from 'react'
    import { StyleSheet, View, FlatList, Text } from 'react-native'
    import { supabase } from './lib/supabase'

    export default function App() {
      const [instruments, setInstruments] = useState([])

      useEffect(() => {
        getInstruments()
      }, [])

      async function getInstruments() {
        const { data } = await supabase.from('instruments').select()
        setInstruments(data)
      }

      return (
        
          <FlatList
            data={instruments}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              {item.name}
            )}
          />
        
      )
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 16,
      },
      item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
    })
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={7}>
\<StepHikeCompact.Details title="Start the app">
Run the development server and scan the QR code with the Expo Go app on your phone, or press `i` for iOS simulator or `a` for Android emulator.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    ```bash name=Terminal
    npx expo start
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

## Next steps

- Set up [Auth](/docs/guides/auth) for your app
- [Insert more data](/docs/guides/database/import-data) into your database
- Upload and serve static files using [Storage](/docs/guides/storage)
