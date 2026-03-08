# Use Supabase with iOS and SwiftUI

Learn how to create a Supabase project, add some sample data to your database, and query the data from an iOS app.

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
\<StepHikeCompact.Details title="Create an iOS SwiftUI app with Xcode">
Open Xcode > New Project > iOS > App. You can skip this step if you already have a working app.
\</StepHikeCompact.Details>
\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={3}>
\<StepHikeCompact.Details title="Install the Supabase client library">
Add the [supabase-swift](https://github.com/supabase/supabase-swift) package to your app using the Swift Package Manager.

```
  In Xcode, navigate to **File > Add Package Dependencies...** and enter the repository URL `https://github.com/supabase/supabase-swift` in the search bar. For detailed instructions, see Apple's [tutorial on adding package dependencies](https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app).

  Make sure to add `Supabase` product package as a dependency to your application target.
</StepHikeCompact.Details>
```

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={4}>
\<StepHikeCompact.Details title="Initialize the Supabase client">
Create a new `Supabase.swift` file add a new Supabase instance using your project URL and public API (anon) key:

````
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```swift name=Supabase.swift
    import Supabase

    let supabase = SupabaseClient(
      supabaseURL: URL(string: "YOUR_SUPABASE_URL")!,
      supabaseKey: "YOUR_SUPABASE_PUBLISHABLE_KEY"
    )
    ```
  

  {/* TODO: How to completely consolidate partials? */}

  You can also get the Project URL and key from [the project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=mobiles\&framework=swift).

  
    Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

    In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=mobiles\&framework=swift), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

    *   **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
    *   **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.
  

  [Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={5}>
\<StepHikeCompact.Details title="Create a data model for instruments">
Create a decodable struct to deserialize the data from the database.

````
  Add the following code to a new file named `Instrument.swift`.
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```swift name=Instrument.swift
    struct Instrument: Decodable, Identifiable {
      let id: Int
      let name: String
    }
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={6}>
\<StepHikeCompact.Details title="Query data from the app">
Use a `task` to fetch the data from the database and display it using a `List`.

````
  Replace the default `ContentView` with the following code.
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  
    ```swift name=ContentView.swift
    import SwiftUI

    struct ContentView: View {

      @State var instruments: [Instrument] = []

      var body: some View {
        List(instruments) { instrument in
          Text(instrument.name)
        }
        .overlay {
          if instruments.isEmpty {
            ProgressView()
          }
        }
        .task {
          do {
            instruments = try await supabase.from("instruments").select().execute().value
          } catch {
            dump(error)
          }
        }
      }
    }
    ```
  
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={7}>
\<StepHikeCompact.Details title="Start the app">
Run the app on a simulator or a physical device by hitting `Cmd + R` on Xcode.
\</StepHikeCompact.Details>
\</StepHikeCompact.Step>

## Setting up deep links

If you want to implement authentication features like magic links or OAuth, you need to set up deep links to redirect users back to your app. For instructions on configuring custom URL schemes for your iOS app, see the [deep linking guide](/docs/guides/auth/native-mobile-deep-linking?platform=swift).

## Next steps

- Learn how to build a complete user management app with authentication in the [Swift tutorial](/docs/guides/getting-started/tutorials/with-swift)
- Explore the [supabase-swift](https://github.com/supabase/supabase-swift) library on GitHub
