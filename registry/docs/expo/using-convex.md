# Using Convex

Add a database to your app with Convex.

[Convex](https://www.convex.dev/) is a TypeScript-based database that requires no cluster management, SQL, or ORMs. Convex provides real-time updates over a WebSocket, making it perfect for reactive apps.

## Install Convex

After you have created your [Expo project](/get-started/create-a-project), install `convex` using the following command:

```sh
npx expo install convex
```

## Set up a Convex dev deployment

Run the following command to set up your Convex project:

```sh
npx convex dev
```

This command:

- Creates a Convex account or allows you to log in.
- Creates a project on Convex.
- Saves your production and deployment URLs.

It also creates a **convex/** folder where you can write backend API functions that Convex will host.

Leave this command running in one terminal window so that it can sync your functions with your dev deployment in Convex's cloud.

## Save the Convex URL as an EAS environment variable

Running `npx convex dev` saves your deployment URL to a **.env.local** file as `EXPO_PUBLIC_CONVEX_URL`. To make it available in your app builds, add it as an [EAS environment variable](/eas/environment-variables) in a new terminal session:

```sh
eas env:create --name EXPO_PUBLIC_CONVEX_URL --value https://YOUR_DEPLOYMENT_URL.convex.cloud --visibility plaintext --environment production --environment preview --environment development
```

Replace `https://YOUR_DEPLOYMENT_URL.convex.cloud` with the `EXPO_PUBLIC_CONVEX_URL` value from your **.env.local** file. To learn more, see [Environment variables](/guides/environment-variables).

## Seed your database

Next, create a **sampleData.jsonl** file with the following sample data:

```json
{"text": "Buy groceries", "isCompleted": true}
{"text": "Go for a swim", "isCompleted": true}
{"text": "Integrate Convex", "isCompleted": false}
```

To send this data to Convex, run:

```sh
npx convex import --table tasks sampleData.jsonl
```

## Query the database

All queries in Convex are TypeScript code. Create a **convex/tasks.ts** file with the following contents:

```ts
import { query } from './_generated/server';

export const get = query({
  args: {},
  handler: async ctx => {
    return await ctx.db.query('tasks').collect();
  },
});
```

## Connect your app

In the top-level **src/app/\_layout.tsx** file in your app, create a `ConvexReactClient` and pass it to a `ConvexProvider` wrapping your component tree:

```tsx
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { Stack } from 'expo-router';

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </ConvexProvider>
  );
}
```

## Display the data in your app

In your app, use the `useQuery` hook to fetch data from your `api.tasks.get` API:

```tsx
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { Text, View } from 'react-native';

export default function Index() {
  const tasks = useQuery(api.tasks.get);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {tasks?.map(({ _id, text }) => (
        <Text key={_id}>{text}</Text>
      ))}
    </View>
  );
}
```

## Next steps

[Learn how to use Convex](https://docs.convex.dev/tutorial/) — Learn how Convex works while building a chat app.

***

# Using Firebase
