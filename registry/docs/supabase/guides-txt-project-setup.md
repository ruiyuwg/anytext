## Project setup

Before we start building we're going to set up our Database and API. This is as simple as starting a new Project in Supabase and then creating a "schema" inside the database.

### Create a project

1. [Create a new project](https://app.supabase.com) in the Supabase Dashboard.
2. Enter your project details.
3. Wait for the new database to launch.

### Set up the database schema

Now we are going to set up the database schema. You can just copy/paste the SQL from below and run it yourself.

{/\*

````
1. Go to the [SQL Editor](https://app.supabase.com/project/_/sql) page in the Dashboard.
2. Click **Product Management**.
3. Click **Run**.

 */}


```sql
-- Create a table for public profiles

create table
  public.products (
    id uuid not null default gen_random_uuid (),
    name text not null,
    price real not null,
    image text null,
    constraint products_pkey primary key (id)
  ) tablespace pg_default;

-- Set up Storage!
insert into storage.buckets (id, name)
  values ('Product Image', 'Product Image');

-- Set up access controls for storage.
-- See https://supabase.com/docs/guides/storage/security/access-control#policy-examples for more details.
CREATE POLICY "Enable read access for all users" ON "storage"."objects"
AS PERMISSIVE FOR SELECT
TO public
USING (true)

CREATE POLICY "Enable insert for all users" ON "storage"."objects"
AS PERMISSIVE FOR INSERT
TO authenticated, anon
WITH CHECK (true)

CREATE POLICY "Enable update for all users" ON "storage"."objects"
AS PERMISSIVE FOR UPDATE
TO public
USING (true)
WITH CHECK (true)

```
````

### Get API details

Now that you've created some database tables, you are ready to insert data using the auto-generated API.

To do this, you need to get the Project URL and key from [the project **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=mobiles\&framework=androidkotlin).

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=mobiles\&framework=androidkotlin), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

[Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.

### Set up Google authentication

From the [Google Console](https://console.developers.google.com/apis/library), create a new project and add OAuth2 credentials.

![Create Google OAuth credentials](/docs/img/guides/kotlin/google-cloud-oauth-credentials-create.png)

In your [Supabase Auth settings](https://app.supabase.com/project/_/auth/providers) enable Google as a provider and set the required credentials as outlined in the [auth docs](/docs/guides/auth/social-login/auth-google).

## Building the app

### Create new Android project

Open Android Studio > New Project > Base Activity (Jetpack Compose).

![Android Studio new project](/docs/img/guides/kotlin/android-studio-new-project.png)

### Set up API key and secret securely

#### Create local environment secret

Create or edit the `local.properties` file at the root (same level as `build.gradle`) of your project.

> **Note**: Do not commit this file to your source control, for example, by adding it to your `.gitignore` file!

```kotlin
SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
SUPABASE_URL=YOUR_SUPABASE_URL
```

#### Read and set value to `BuildConfig`

In your `build.gradle` (app) file, create a `Properties` object and read the values from your `local.properties` file by calling the `buildConfigField` method:

```kotlin
defaultConfig {
   applicationId "com.example.manageproducts"
   minSdkVersion 22
   targetSdkVersion 33
   versionCode 5
   versionName "1.0"
   testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"

   // Set value part
   Properties properties = new Properties()
   properties.load(project.rootProject.file("local.properties").newDataInputStream())
   buildConfigField("String", "SUPABASE_PUBLISHABLE_KEY", "\"${properties.getProperty("SUPABASE_PUBLISHABLE_KEY")}\"")
   buildConfigField("String", "SECRET", "\"${properties.getProperty("SECRET")}\"")
   buildConfigField("String", "SUPABASE_URL", "\"${properties.getProperty("SUPABASE_URL")}\"")
}
```

#### Use value from `BuildConfig`

Read the value from `BuildConfig`:

```kotlin
val url = BuildConfig.SUPABASE_URL
val apiKey = BuildConfig.SUPABASE_PUBLISHABLE_KEY
```

### Set up Supabase dependencies

![Gradle dependencies](/docs/img/guides/kotlin/gradle-dependencies.png)

In the `build.gradle` (app) file, add these dependencies then press "Sync now." Replace the dependency version placeholders `$supabase_version` and `$ktor_version` with their respective latest versions.

```kotlin
implementation "io.github.jan-tennert.supabase:postgrest-kt:$supabase_version"
implementation "io.github.jan-tennert.supabase:storage-kt:$supabase_version"
implementation "io.github.jan-tennert.supabase:auth-kt:$supabase_version"
implementation "io.ktor:ktor-client-android:$ktor_version"
implementation "io.ktor:ktor-client-core:$ktor_version"
implementation "io.ktor:ktor-utils:$ktor_version"
```

Also in the `build.gradle` (app) file, add the plugin for serialization. The version of this plugin should be the same as your Kotlin version.

```kotlin
plugins {
    ...
    id 'org.jetbrains.kotlin.plugin.serialization' version '$kotlin_version'
    ...
}
```

{/\* supa-mdx-lint-disable-next-line Rule001HeadingCase \*/}

### Set up Hilt for dependency injection

In the `build.gradle` (app) file, add the following:

```kotlin
implementation "com.google.dagger:hilt-android:$hilt_version"
annotationProcessor "com.google.dagger:hilt-compiler:$hilt_version"
implementation("androidx.hilt:hilt-navigation-compose:1.0.0")
```

Create a new `ManageProductApplication.kt` class extending Application with `@HiltAndroidApp` annotation:

```kotlin
// ManageProductApplication.kt
@HiltAndroidApp
class ManageProductApplication: Application()
```

Open the `AndroidManifest.xml` file, update name property of Application tag:

```xml
<application
...
    android:name=".ManageProductApplication"
...
</application>

```

Create the `MainActivity`:

```kotlin
@AndroidEntryPoint
class MainActivity : ComponentActivity() {
    //This will come later
}
```

{/\* supa-mdx-lint-disable-next-line Rule001HeadingCase \*/}

### Provide Supabase instances with Hilt

To make the app easier to test, create a `SupabaseModule.kt` file as follows:

```kotlin
@InstallIn(SingletonComponent::class)
@Module
object SupabaseModule {

    @Provides
    @Singleton
    fun provideSupabaseClient(): SupabaseClient {
        return createSupabaseClient(
            supabaseUrl = BuildConfig.SUPABASE_URL,
            supabaseKey = BuildConfig.SUPABASE_PUBLISHABLE_KEY
        ) {
            install(Postgrest)
            install(Auth) {
                flowType = FlowType.PKCE
                scheme = "app"
                host = "supabase.com"
            }
            install(Storage)
        }
    }

    @Provides
    @Singleton
    fun provideSupabaseDatabase(client: SupabaseClient): Postgrest {
        return client.postgrest
    }

    @Provides
    @Singleton
    fun provideSupabaseAuth(client: SupabaseClient): Auth {
        return client.auth
    }


    @Provides
    @Singleton
    fun provideSupabaseStorage(client: SupabaseClient): Storage {
        return client.storage
    }

}
```

### Create a data transfer object

Create a `ProductDto.kt` class and use annotations to parse data from Supabase:

```kotlin
@Serializable
data class ProductDto(

    @SerialName("name")
    val name: String,

    @SerialName("price")
    val price: Double,

    @SerialName("image")
    val image: String?,

    @SerialName("id")
    val id: String,
)
```

Create a Domain object in `Product.kt` expose the data in your view:

```kotlin
data class Product(
    val id: String,
    val name: String,
    val price: Double,
    val image: String?
)
```
