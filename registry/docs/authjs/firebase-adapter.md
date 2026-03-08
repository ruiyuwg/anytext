[Getting Started](/getting-started "Getting Started")[Adapters](/getting-started/adapters/azure-tables "Adapters")Firebase Firestore

![](/img/adapters/firebase.svg)

# Firebase Adapter

> Using the [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup) and [Firestore](https://firebase.google.com/docs/firestore).

## Resources[](#resources)

-   [Firebase Admin documentation](https://firebase.google.com/docs/admin/setup)

## Setup[](#setup)

### Installation[](#installation)

npmpnpmyarnbun

```
npm install @auth/firebase-adapter firebase-admin
```

```
pnpm add @auth/firebase-adapter firebase-admin
```

```
yarn add @auth/firebase-adapter firebase-admin
```

```
bun add @auth/firebase-adapter firebase-admin
```

### Environment variables[](#environment-variables)

```
// Auth via Service Account File
GOOGLE_APPLICATION_CREDENTIALS
 
// Auth via key values
AUTH_FIREBASE_PROJECT_ID
AUTH_FIREBASE_CLIENT_EMAIL
AUTH_FIREBASE_PRIVATE_KEY
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

auth.ts

```
import NextAuth from "next-auth"
import { FirestoreAdapter } from "@auth/firebase-adapter"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [],
  adapter: FirestoreAdapter(),
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import { FirestoreAdapter } from "@auth/firebase-adapter"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [],
    adapter: FirestoreAdapter(),
  })
)
```

src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import { FirestoreAdapter } from "@auth/firebase-adapter"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [],
  adapter: FirestoreAdapter(),
})
```

./src/routes/auth.route.ts

```
import { ExpressAuth } from "@auth/express"
import { FirestoreAdapter } from "@auth/firebase-adapter"
 
const app = express()
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [],
    adapter: FirestoreAdapter(),
  })
)
```

### Authentication[](#authentication)

#### Service Account File[](#service-account-file)

First, create a Firebase project and generate a service account key. Visit: `https://console.firebase.google.com/u/0/project/{project-id}/settings/serviceaccounts/adminsdk` (replace `{project-id}` with your project’s id)

1.  Download the service account key and save it in your project. (Make sure to add the file to your `.gitignore`!)
2.  Add [`GOOGLE_APPLICATION_CREDENTIALS`](https://cloud.google.com/docs/authentication/application-default-credentials#GAC) to your environment variables and point it to the service account key file.
3.  The adapter will automatically pick up the environment variable and use it to authenticate with the Firebase Admin SDK. You do not need to pass any additional authentication options to the adapter.

### Service Account Values[](#service-account-values)

1.  Download the service account key to a temporary location (Don’t commit this file!).
2.  Add the following environment variables to your project  
    a. `AUTH_FIREBASE_PROJECT_ID`  
    b. `AUTH_FIREBASE_CLIENT_EMAIL`  
    c. `AUTH_FIREBASE_PRIVATE_KEY`

./auth.ts

```
import NextAuth from "next-auth"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
      clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY,
    }),
  }),
})
```

### Using an existing Firestore instance[](#using-an-existing-firestore-instance)

If you already have a Firestore instance, you can pass that to the adapter directly instead.

💡

When passing an instance and in a serverless environment, remember to handle duplicate app initialization.

You can use the `initFirestore` utility to initialize the app and get an instance safely.

./auth.ts

```
import NextAuth from "next-auth"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { firestore } from "lib/firestore"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: FirestoreAdapter(firestore),
})
```

Utility function that helps making sure that there is no duplicate app initialization issues in serverless environments. If no parameter is passed, it will use the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to initialize a Firestore instance.

lib/firestore.ts

```
import { initFirestore } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app"
 
export const firestore = initFirestore({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
})
```

[FaunaDB](/getting-started/adapters/fauna "FaunaDB")[Hasura](/getting-started/adapters/hasura "Hasura")
