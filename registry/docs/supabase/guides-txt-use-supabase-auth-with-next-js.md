# Use Supabase Auth with Next.js

Learn how to configure Supabase Auth for the Next.js App Router.

\<StepHikeCompact.Step step={1}>
\<StepHikeCompact.Details title="Create a new Supabase project">
Head over to [database.new](https://database.new) and create a new Supabase project.

````
  Your new database has a table for storing your users. You can see that this table is currently empty by running some SQL in the [SQL Editor](/dashboard/project/_/sql/new).
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```sql name=SQL_EDITOR
     select * from auth.users;
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={2}>
\<StepHikeCompact.Details title="Create a Next.js app">
Use the `create-next-app` command and the `with-supabase` template, to create a Next.js app pre-configured with:

````
  *   [Cookie-based Auth](/docs/guides/auth/server-side/creating-a-client?queryGroups=package-manager\&package-manager=npm\&queryGroups=framework\&framework=nextjs\&queryGroups=environment\&environment=server)
  *   [TypeScript](https://www.typescriptlang.org/)
  *   [Tailwind CSS](https://tailwindcss.com/)

            
              UI components built on shadcn/ui that connect to Supabase via a single command.

              
                Explore Components
              
            
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```bash name=Terminal
    npx create-next-app -e with-supabase
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={3}>
\<StepHikeCompact.Details title="Declare Supabase Environment Variables">
Rename `.env.example` to `.env.local` and populate with your Supabase connection variables:

````
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```text name=.env.local
    NEXT_PUBLIC_SUPABASE_URL=your-project-url
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_... or anon key
    ```
  

  {/* TODO: How to completely consolidate partials? */}

  You can also get the Project URL and key from [the project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=nextjs).

  
    Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

    In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=nextjs), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

    *   **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
    *   **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.
  

  [Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={4}>
\<StepHikeCompact.Details title="Start the app">
Start the development server, go to <http://localhost:3000> in a browser, and you should see the contents of `app/page.tsx`.

````
  To sign up a new user, navigate to [http://localhost:3000/auth/sign-up](http://localhost:3000/auth/sign-up), and click `Sign up`.
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```bash name=Terminal
    npm run dev
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

## Learn more

- [Setting up Server-Side Auth for Next.js](/docs/guides/auth/server-side/nextjs) for a Next.js deep dive
- [Supabase Auth docs](/docs/guides/auth#authentication) for more Supabase authentication methods
