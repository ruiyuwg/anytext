# Use Supabase with Android Kotlin

Learn how to create a Supabase project, add some sample data to your database, and query the data from an Android Kotlin app.

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
\<StepHikeCompact.Details title="Create an Android app with Android Studio">
Open Android Studio > New > New Android Project.
\</StepHikeCompact.Details>
\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={3}>
\<StepHikeCompact.Details title="Install the Dependencies">
Open `build.gradle.kts` (app) file and add the serialization plug, Ktor client, and Supabase client.

````
  Replace the version placeholders `$kotlin_version` with the Kotlin version of the project, and  `$supabase_version` and `$ktor_version` with the respective latest versions.

  The latest supabase-kt version can be found [here](https://github.com/supabase-community/supabase-kt/releases) and Ktor version can be found [here](https://ktor.io/docs/welcome.html).
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  ```kotlin
  plugins {
    ...
    kotlin("plugin.serialization") version "$kotlin_version"
  }
  ...
  dependencies {
    ...
    implementation(platform("io.github.jan-tennert.supabase:bom:$supabase_version"))
    implementation("io.github.jan-tennert.supabase:postgrest-kt")
    implementation("io.ktor:ktor-client-android:$ktor_version")
  }
  ```
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={4}>
\<StepHikeCompact.Details title="Add internet access permission">
Add the following line to the `AndroidManifest.xml` file under the `manifest` tag and outside the `application` tag.
\</StepHikeCompact.Details>

````
<StepHikeCompact.Code>
  ```xml
  ...
  
  ...
  ```
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={5}>
\<StepHikeCompact.Details title="Initialize the Supabase client">
You can create a Supabase client whenever you need to perform an API call.

````
  For the sake of simplicity, we will create a client in the `MainActivity.kt` file at the top just below the imports.

  Replace the `supabaseUrl` and `supabaseKey` with your own:

  

  

  
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  ```kotlin
  import ...

  val supabase = createSupabaseClient(
      supabaseUrl = "https://xyzcompany.supabase.co",
      supabaseKey = "your_public_anon_key"
    ) {
      install(Postgrest)
  }
  ...
  ```

  {/* TODO: How to completely consolidate partials? */}

  You can also get the Project URL and key from [the project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=mobiles\&framework=androidkotlin).

  
    Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

    In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=mobiles\&framework=androidkotlin), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

    *   **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
    *   **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.
  

  [Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={6}>
\<StepHikeCompact.Details title="Create a data model for instruments">
Create a serializable data class to represent the data from the database.

````
  Add the following below the `createSupabaseClient` function in the `MainActivity.kt` file.
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  ```kotlin
  @Serializable
  data class Instrument(
      val id: Int,
      val name: String,
  )
  ```
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={7}>
\<StepHikeCompact.Details title="Query data from the app">
Use `LaunchedEffect` to fetch data from the database and display it in a `LazyColumn`.

````
  Replace the default `MainActivity` class with the following code.

  Note that we are making a network request from our UI code. In production, you should probably use a `ViewModel` to separate the UI and data fetching logic.
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  ```kotlin
  class MainActivity : ComponentActivity() {
      override fun onCreate(savedInstanceState: Bundle?) {
          super.onCreate(savedInstanceState)
          setContent {
              SupabaseTutorialTheme {
                  // A surface container using the 'background' color from the theme
                  Surface(
                      modifier = Modifier.fillMaxSize(),
                      color = MaterialTheme.colorScheme.background
                  ) {
                      InstrumentsList()
                  }
              }
          }
      }
  }

  @Composable
  fun InstrumentsList() {
      var instruments by remember { mutableStateOf<List>(listOf()) }
      LaunchedEffect(Unit) {
          withContext(Dispatchers.IO) {
              instruments = supabase.from("instruments")
                                .select().decodeList()
          }
      }
      LazyColumn {
          items(
              instruments,
              key = { instrument -> instrument.id },
          ) { instrument ->
              Text(
                  instrument.name,
                  modifier = Modifier.padding(8.dp),
              )
          }
      }
  }
  ```
</StepHikeCompact.Code>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={8}>
\<StepHikeCompact.Details title="Start the app">
Run the app on an emulator or a physical device by clicking the `Run app` button in Android Studio.
\</StepHikeCompact.Details>
\</StepHikeCompact.Step>
