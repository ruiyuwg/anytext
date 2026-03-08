# Using Supabase

Add a Postgres Database and user authentication to your React Native app with Supabase.

[Supabase](https://supabase.com/?utm_source=expo\&utm_medium=referral\&utm_term=expo-react-native) is a Backend-as-a-Service (BaaS) app development platform that provides hosted backend services such as a Postgres database, user authentication, file storage, edge functions, realtime syncing, and a vector and AI toolkit. It's an open-source alternative to Google's Firebase.

Supabase automatically [generates a REST API](https://supabase.com/docs/guides/api?utm_source=expo\&utm_medium=referral\&utm_term=expo-react-native) from your database and employs a concept called [row level security (RLS)](https://supabase.com/docs/guides/auth/row-level-security?utm_source=expo\&utm_medium=referral\&utm_term=expo-react-native) to secure your data, making it possible to directly interact with your database from your React Native application without needing to go through a server!

Supabase provides a TypeScript client library called [`supabase-js`](https://supabase.com/docs/reference/javascript/introduction?utm_source=expo\&utm_medium=referral\&utm_term=expo-react-native) to interact with the REST API. Alternatively, Supabase also exposes a [GraphQL API](https://supabase.com/docs/guides/database/extensions/pg_graphql?utm_source=expo\&utm_medium=referral\&utm_term=expo-react-native) allowing you to use your favorite GraphQL client (for example, [Apollo Client](https://supabase.github.io/pg_graphql/usage_with_apollo/)) should you wish to.

## Prerequisites

Head over to [database.new](https://database.new?utm_source=expo\&utm_medium=referral\&utm_term=expo-react-native) to create a new Supabase project.

### Get the API Keys

Get the **Project URL** from the API settings and **Publishable key** from the API Keys:

1. Go to the [API Settings](https://supabase.com/dashboard/project/_/settings/api) page in the Dashboard.
2. Find your Project `URL` and `service_role` keys on this page.
3. Then go to the [API Keys](https://supabase.com/dashboard/project/_/settings/api-keys)
4. Find your Project **Publishable key** on this page under the API Keys tab.

## Using the Supabase TypeScript SDK

Using [`supabase-js`](https://supabase.com/docs/reference/javascript/introduction?utm_source=expo\&utm_medium=referral\&utm_term=expo-react-native) is the most convenient way of leveraging the full power of the Supabase stack as it conveniently combines all the different services (database, auth, realtime, storage, edge functions) together.

### Install and initialize the Supabase TypeScript SDK

After you have created your [Expo project](/get-started/create-a-project), install `@supabase/supabase-js` and the required dependencies using the following command:

```sh
npx expo install @supabase/supabase-js expo-sqlite
```

Create a helper file to initialize the Supabase client (`@supabase/supabase-js`). You need the API URL and the `Publishable` key copied [earlier](/guides/using-supabase#get-the-api-keys). These variables are safe to expose in your Expo app since Supabase has [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security?utm_source=expo\&utm_medium=referral\&utm_term=expo-react-native) enabled in the Database.

```ts
import 'expo-sqlite/localStorage/install';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = YOUR_REACT_NATIVE_SUPABASE_URL;
const supabasePublishableKey = YOUR_REACT_NATIVE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: localStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
```

Now you can `import { supabase } from '/utils/supabase'` throughout your application to leverage the full power of Supabase!

## Next steps

[Build a User Management App](https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native?utm_source=expo\&utm_medium=referral\&utm_term=expo-react-native) — Learn how to combine Supabase Auth and Database in this quickstart guide.

[Sign in with Apple](https://supabase.com/docs/guides/auth/social-login/auth-apple?platform=react-native\&utm_source=expo\&utm_medium=referral\&utm_term=expo-react-native) — Supabase Auth supports using Sign in with Apple on the web and in native apps for iOS, macOS, watchOS or tvOS.

[Sign in with Google](https://supabase.com/docs/guides/auth/social-login/auth-google?platform=react-native\&utm_source=expo\&utm_medium=referral\&utm_term=expo-react-native) — Supabase Auth supports Sign in with Google on the web, native Android applications, and Chrome extensions.

[Deep Linking for OAuth and Magic Links](https://supabase.com/docs/guides/auth/native-mobile-deep-linking?utm_source=expo\&utm_medium=referral\&utm_term=expo-react-native) — When performing OAuth or sending magic link emails from native mobile applications, learn how to configure deep linking for Android and iOS applications.

[Offline-first React Native Apps with WatermelonDB](https://supabase.com/blog/react-native-offline-first-watermelon-db?utm_source=expo\&utm_medium=referral\&utm_term=expo-react-native) — Learn how to store your data locally and sync it with Postgres using WatermelonDB.

[React Native file upload with Supabase Storage](https://supabase.com/blog/react-native-storage?utm_source=expo\&utm_medium=referral\&utm_term=expo-react-native) — Learn how to implement authentication and file upload in a React Native app.

***

# Using Resend
