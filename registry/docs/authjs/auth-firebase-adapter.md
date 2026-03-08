[API reference](/reference/overview "API reference")@auth/firebase-adapter

# @auth/firebase-adapter

Official **Firestore** adapter for Auth.js / NextAuth.js, using the [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)

[![](/img/adapters/firebase.svg)](https://firebase.google.com/docs/firestore/)

## Installation[](#installation)

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

## FirebaseAdapterConfig[](#firebaseadapterconfig)

Configure the Firebase Adapter.

### Extends[](#extends)

-   `AppOptions`

### Properties[](#properties)

#### collections?[](#collections)

```
optional collections: {
  accounts: string;
  sessions: string;
  users: string;
  verificationTokens: string;
};
```

Use this option if you already have one of the default collections in your Firestore database.

##### accounts?[](#accounts)

```
optional accounts: string;
```

##### sessions?[](#sessions)

```
optional sessions: string;
```

##### users?[](#users)

```
optional users: string;
```

##### verificationTokens?[](#verificationtokens)

```
optional verificationTokens: string;
```

##### Example[](#example)

```
 // This will use the collection name "authjs_users" instead of the default "users"
 adapter: FirestoreAdapter({ collections: { users: "authjs_users" } })
 // ...
```

#### credential?[](#credential)

```
optional credential: Credential;
```

A firebase-admin.app#Credential object used to authenticate the Admin SDK.

See [Initialize the SDK](https://firebase.google.com/docs/admin/setup#initialize_the_sdk) for detailed documentation and code samples.

##### Inherited from[](#inherited-from)

`AppOptions.credential`

#### databaseAuthVariableOverride?[](#databaseauthvariableoverride)

```
optional databaseAuthVariableOverride: null | object;
```

The object to use as the [auth](https://firebase.google.com/docs/reference/security/database/#auth) variable in your Realtime Database Rules when the Admin SDK reads from or writes to the Realtime Database. This allows you to downscope the Admin SDK from its default full read and write privileges.

You can pass `null` to act as an unauthenticated client.

See [Authenticate with limited privileges](https://firebase.google.com/docs/database/admin/start#authenticate-with-limited-privileges) for detailed documentation and code samples.

##### Inherited from[](#inherited-from-1)

`AppOptions.databaseAuthVariableOverride`

#### databaseURL?[](#databaseurl)

```
optional databaseURL: string;
```

The URL of the Realtime Database from which to read and write data.

##### Inherited from[](#inherited-from-2)

`AppOptions.databaseURL`

#### firestore?[](#firestore)

```
optional firestore: Firestore;
```

#### httpAgent?[](#httpagent)

```
optional httpAgent: Agent;
```

An [HTTP Agent](https://nodejs.org/api/http.html#http_class_http_agent) to be used when making outgoing HTTP calls. This Agent instance is used by all services that make REST calls (e.g. `auth`, `messaging`, `projectManagement`).

Realtime Database and Firestore use other means of communicating with the backend servers, so they do not use this HTTP Agent. `Credential` instances also do not use this HTTP Agent, but instead support specifying an HTTP Agent in the corresponding factory methods.

##### Inherited from[](#inherited-from-3)

`AppOptions.httpAgent`

#### name?[](#name)

```
optional name: string;
```

The name of the app passed to [\`initializeApp()\`](https://firebase.google.com/docs/reference/admin/node/firebase-admin.md#initializeapp).

#### namingStrategy?[](#namingstrategy)

```
optional namingStrategy: "snake_case" | "default";
```

Use this option if mixed `snake_case` and `camelCase` field names in the database is an issue for you. Passing `snake_case` will convert all field and collection names to `snake_case`. E.g. the collection `verificationTokens` will be `verification_tokens`, and fields like `emailVerified` will be `email_verified` instead.

##### Example[](#example-1)

```
 // This will convert all field and collection names to snake_case
 adapter: FirestoreAdapter({ namingStrategy: "snake_case" })
 // ...
})
```

#### projectId?[](#projectid)

```
optional projectId: string;
```

The ID of the Google Cloud project associated with the App.

##### Inherited from[](#inherited-from-4)

`AppOptions.projectId`

#### serviceAccountId?[](#serviceaccountid)

```
optional serviceAccountId: string;
```

The ID of the service account to be used for signing custom tokens. This can be found in the `client_email` field of a service account JSON file.

##### Inherited from[](#inherited-from-5)

`AppOptions.serviceAccountId`

#### storageBucket?[](#storagebucket)

```
optional storageBucket: string;
```

The name of the Google Cloud Storage bucket used for storing application data. Use only the bucket name without any prefixes or additions (do _not_ prefix the name with “gs://”).

##### Inherited from[](#inherited-from-6)

`AppOptions.storageBucket`

* * *

## FirestoreAdapter()[](#firestoreadapter)

```
function FirestoreAdapter(config?): Adapter
```

### Parameters[](#parameters)

Parameter

Type

`config`?

| [`FirebaseAdapterConfig`](firebase-adapter#firebaseadapterconfig) | `Firestore`

### Returns[](#returns)

[`Adapter`](core/adapters#adapter)

* * *

## initFirestore()[](#initfirestore)

```
function initFirestore(options): Firestore
```

Utility function that helps making sure that there is no duplicate app initialization issues in serverless environments. If no parameter is passed, it will use the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to initialize a Firestore instance.

### Parameters[](#parameters-1)

Parameter

Type

`options`

`AppOptions` & { `name`: `string`; }

### Returns[](#returns-1)

`Firestore`

### Example[](#example-2)

lib/firestore.ts

```
import { initFirestore } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app"
 
export const firestore = initFirestore({
 credential: cert({
   projectId: process.env.FIREBASE_PROJECT_ID,
   clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
   privateKey: process.env.FIREBASE_PRIVATE_KEY,
 })
})
```

[@auth/fauna-adapter](/reference/fauna-adapter "@auth/fauna-adapter")[@auth/hasura-adapter](/reference/hasura-adapter "@auth/hasura-adapter")
