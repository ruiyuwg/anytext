# Use Supabase with Refine

Learn how to create a Supabase project, add some sample data to your database, and query the data from a Refine app.

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
\<StepHikeCompact.Details title="Create a Refine app">
Create a [Refine](https://github.com/refinedev/refine) app using the [create refine-app](https://refine.dev/docs/getting-started/quickstart/).

````
  The `refine-supabase` preset adds `@refinedev/supabase` supplementary package that supports Supabase in a Refine app. `@refinedev/supabase` out-of-the-box includes the Supabase dependency: [supabase-js](https://github.com/supabase/supabase-js).
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```bash name=Terminal
    npm create refine-app@latest -- --preset refine-supabase my-app
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={3}>
\<StepHikeCompact.Details title="Open your Refine app in VS Code">
You will develop your app, connect to the Supabase backend and run the Refine app in VS Code.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    ```bash name=Terminal
    cd my-app
    code .
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={4}>
\<StepHikeCompact.Details title="Start the app">
Start the app, go to <http://localhost:5173> in a browser, and you should be greeted with the Refine Welcome page.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  
    ```bash name=Terminal
    npm run dev
    ```
  

  <StepHikeCompact.Code>
    ![Refine welcome page](/docs/img/refine-qs-welcome-page.png)
  </StepHikeCompact.Code>
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={5}>
\<StepHikeCompact.Details title="Update `supabaseClient`">
You now have to update the `supabaseClient` with the `SUPABASE_URL` and `SUPABASE_KEY` of your Supabase API. The `supabaseClient` is used in auth provider and data provider methods that allow the Refine app to connect to your Supabase backend.

````
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```ts name=src/utility/supabaseClient.ts
    import { createClient } from "@refinedev/supabase";

    const SUPABASE_URL = YOUR_SUPABASE_URL;
    const SUPABASE_KEY = YOUR_SUPABASE_KEY

    export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
      db: {
        schema: "public",
      },
      auth: {
        persistSession: true,
      },
    });
    ```
  

  {/* TODO: How to completely consolidate partials? */}

  You can also get the Project URL and key from [the project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=refine).

  
    Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

    In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=refine), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

    *   **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
    *   **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.
  

  [Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={6}>
\<StepHikeCompact.Details title="Add instruments resource and pages">
You have to then configure resources and define pages for `instruments` resource.

````
  Use the following command to automatically add resources and generate code for pages for `instruments` using Refine Inferencer.

  This defines pages for `list`, `create`, `show` and `edit` actions inside the `src/pages/instruments/` directory with `<HeadlessInferencer />` component.

  The `<HeadlessInferencer />` component depends on `@refinedev/react-table` and `@refinedev/react-hook-form` packages. In order to avoid errors, you should install them as dependencies with `npm install @refinedev/react-table @refinedev/react-hook-form`.

  
    The `<HeadlessInferencer />` is a Refine Inferencer component that automatically generates necessary code for the `list`, `create`, `show` and `edit` pages.

    More on [how the Inferencer works is available in the docs here](https://refine.dev/docs/packages/documentation/inferencer/).
  
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```bash name=Terminal
    npm run refine create-resource instruments
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={7}>
\<StepHikeCompact.Details title="Add routes for instruments pages">
Add routes for the `list`, `create`, `show`, and `edit` pages.

````
    You should remove the `index` route for the Welcome page presented with the `<Welcome />` component.
  
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```tsx name=src/App.tsx
    import { Refine } from "@refinedev/core";
    import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
    import routerProvider, {
      DocumentTitleHandler,
      NavigateToResource,
      UnsavedChangesNotifier,
    } from "@refinedev/react-router";
    import { dataProvider, liveProvider } from "@refinedev/supabase";
    import { BrowserRouter, Route, Routes } from "react-router-dom";

    import "./App.css";
    import authProvider from "./authProvider";
    import { supabaseClient } from "./utility";
    import { InstrumentsCreate, InstrumentsEdit, InstrumentsList, InstrumentsShow } from "./pages/instruments";

    function App() {
      return (
        
          
            <Refine
              dataProvider={dataProvider(supabaseClient)}
              liveProvider={liveProvider(supabaseClient)}
              authProvider={authProvider}
              routerProvider={routerProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
              }}
              resources={[{
                name: "instruments",
                list: "/instruments",
                create: "/instruments/create",
                edit: "/instruments/edit/:id",
                show: "/instruments/show/:id"
              }]}>
              
                <Route index
                  element={}
                />
                
                  } />
                  } />
                  } />
                  } />
                
              
              
              
              
            
          
        
      );
    }

    export default App;
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={8}>
\<StepHikeCompact.Details title="View instruments pages">
Now you should be able to see the instruments pages along the `/instruments` routes. You may now edit and add new instruments using the Inferencer generated UI.

```
  The Inferencer auto-generated code gives you a good starting point on which to keep building your `list`, `create`, `show` and `edit` pages. They can be obtained by clicking the `Show the auto-generated code` buttons in their respective pages.
</StepHikeCompact.Details>
```

\</StepHikeCompact.Step>
