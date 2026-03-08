# Use Supabase with Hono

Learn how to create a Supabase project, add some sample data to your database, secure it with auth, and query the data from a Hono app.

\<StepHikeCompact.Step step={1}>
\<StepHikeCompact.Details title="Create a Hono app">
Bootstrap the Hono example app from the Supabase Samples using the CLI.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    ```bash name=Terminal
    npx supabase@latest bootstrap hono
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={2}>
\<StepHikeCompact.Details title="Install the Supabase client library">
The `package.json` file in the project includes the necessary dependencies, including `@supabase/supabase-js` and `@supabase/ssr` to help with server-side auth.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    ```bash name=Terminal
    npm install
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={3}>
\<StepHikeCompact.Details title="Set up the required environment variables">
Copy the `.env.example` file to `.env` and update the values with your Supabase project URL and anon key.

````
  Lastly, [enable anonymous sign-ins](/dashboard/project/_/auth/providers) in the Auth settings.

  

  

  
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```bash name=Terminal
    cp .env.example .env
    ```
  

  {/* TODO: Not ideal for frameworks that have no entry in Connect */}

  {/* TODO: How to completely consolidate partials? */}

  You can also get the Project URL and key from [the project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=).

  
    Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

    In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

    *   **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
    *   **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.
  

  [Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={4}>
\<StepHikeCompact.Details title="Start the app">
Start the app, go to <http://localhost:5173>.

````
  Learn how [server side auth](/docs/guides/auth/server-side/creating-a-client?queryGroups=framework\&framework=hono) works with Hono.
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```bash name=Terminal
    npm run dev
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

## Next steps

- Learn how [server side auth](/docs/guides/auth/server-side/creating-a-client?queryGroups=framework\&framework=hono) works with Hono.
- [Insert more data](/docs/guides/database/import-data) into your database
- Upload and serve static files using [Storage](/docs/guides/storage)
