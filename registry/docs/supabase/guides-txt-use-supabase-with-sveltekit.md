# Use Supabase with SvelteKit

Learn how to create a Supabase project, add some sample data to your database, and query the data from a SvelteKit app.

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
\<StepHikeCompact.Details title="Create a SvelteKit app">
Create a SvelteKit app using the `npm create` command.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    ```bash name=Terminal
    npx sv create my-app
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={3}>
\<StepHikeCompact.Details title="Install the Supabase client library">
The fastest way to get started is to use the `supabase-js` client library which provides a convenient interface for working with Supabase from a SvelteKit app.

````
  Navigate to the SvelteKit app and install `supabase-js`.
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
Create a `.env` file at the root of your project and populate with your Supabase connection variables:

````
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    
      ```text name=.env
      PUBLIC_SUPABASE_URL=<SUBSTITUTE_SUPABASE_URL>
      PUBLIC_SUPABASE_PUBLISHABLE_KEY=<SUBSTITUTE_SUPABASE_PUBLISHABLE_KEY>
      ```
    
  

  {/* TODO: How to completely consolidate partials? */}

  You can also get the Project URL and key from [the project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=sveltekit).

  
    Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

    In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=sveltekit), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

    *   **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
    *   **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.
  

  [Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={5}>
\<StepHikeCompact.Details title="Create the Supabase client">
Create a `src/lib` directory in your SvelteKit app, create a file called `supabaseClient.js` and add the following code to initialize the Supabase client:
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    
      ```js name=src/lib/supabaseClient.js
      import { createClient } from '@supabase/supabase-js';
      import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from '$env/static/public';

      export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY)
      ```
    

    
      ```ts name=src/lib/supabaseClient.ts
      import { createClient } from '@supabase/supabase-js';
      import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from '$env/static/public';

      export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY)
      ```
    
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={6}>
\<StepHikeCompact.Details title="Query data from the app">
Use `load` method to fetch the data server-side and display the query results as a simple list.

````
  Create `+page.server.js` file in the `src/routes` directory with the following code.
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    
      ```js name=src/routes/+page.server.js
        import { supabase } from "$lib/supabaseClient";

        export async function load() {
          const { data } = await supabase.from("instruments").select();
          return {
            instruments: data ?? [],
          };
        }
      ```
    

    
      ```ts name=src/routes/+page.server.ts
      import type { PageServerLoad } from './$types';
      import { supabase } from '$lib/supabaseClient';

      type Instrument = {
        id: number;
        name: string;
      };

      export const load: PageServerLoad = async () => {
        const { data, error } = await supabase.from('instruments').select<'instruments', Instrument>();

        if (error) {
          console.error('Error loading instruments:', error.message);
          return { instruments: [] };
        }

        return {
          instruments: data ?? [],
        };
      };
      ```
    
  
</StepHikeCompact.Code>

<StepHikeCompact.Details title="">
  Replace the existing content in your `+page.svelte` file in the `src/routes` directory with the following code.
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```svelte name=src/routes/+page.svelte
    
      let { data } = $props();
    

    

        {instrument.name}
      {/each}
    
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={7}>
\<StepHikeCompact.Details title="Start the app">
Start the app and go to <http://localhost:5173> in a browser and you should see the list of instruments.
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
