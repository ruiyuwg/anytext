# Use Supabase with React

Learn how to create a Supabase project, add some sample data to your database, and query the data from a React app.

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
\<StepHikeCompact.Details title="Create a React app">
\*   Create a React app using a [Vite](https://vitejs.dev/guide/) template.

````
              UI components built on shadcn/ui that connect to Supabase via a single command.

              
                Explore Components
              
            
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```bash name=Terminal
    npm create vite@latest my-app -- --template react
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={3}>
\<StepHikeCompact.Details title="Install the Supabase client library">
The fastest way to get started is to use the `supabase-js` client library which provides a convenient interface for working with Supabase from a React app.

````
  Navigate to the React app and install `supabase-js`.
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```bash name=Terminal
    cd my-app && npm install @supabase/supabase-js
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={4}>
\<StepHikeCompact.Details title="Declare Supabase Environment Variables">
Create a `.env.local` file and populate with your Supabase connection variables:

````
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    
      ```text name=.env.local
      VITE_SUPABASE_URL=<SUBSTITUTE_SUPABASE_URL>
      VITE_SUPABASE_PUBLISHABLE_KEY=<SUBSTITUTE_SUPABASE_PUBLISHABLE_KEY>
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
\<StepHikeCompact.Details title="Query data from the app">
Replace the contents of `App.jsx` to add a `getInstruments` function to fetch the data and display the query result to the page using a Supabase client.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    ```js name=src/App.jsx
    import { useEffect, useState } from "react";
    import { createClient } from "@supabase/supabase-js";

    const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

    function App() {
      const [instruments, setInstruments] = useState([]);

      useEffect(() => {
        getInstruments();
      }, []);

      async function getInstruments() {
        const { data } = await supabase.from("instruments").select();
        setInstruments(data);
      }

      return (
        
          {instruments.map((instrument) => (
            {instrument.name}
          ))}
        
      );
    }

    export default App;
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={6}>
\<StepHikeCompact.Details title="Start the app">
Run the development server, go to <http://localhost:5173> in a browser and you should see the list of instruments.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    ```bash name=Terminal
    npm run dev
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

## Next steps

- Set up [Auth](/docs/guides/auth) for your app
- [Insert more data](/docs/guides/database/import-data) into your database
- Upload and serve static files using [Storage](/docs/guides/storage)
