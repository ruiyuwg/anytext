[API reference](/reference/overview "API reference")[@auth/dgraph-adapter](/reference/dgraph-adapter "@auth/dgraph-adapter")[lib](/reference/dgraph-adapter/lib/client "lib")graphqlFragments

# lib/graphql/fragments

## Account[](#account)

```
const Account: "\n  fragment AccountFragment on Account {\n    id\n    type\n    provider\n    providerAccountId\n    expires_at\n    token_type\n    scope\n    access_token\n    refresh_token\n    id_token\n    session_state\n  }\n";
```

* * *

## Session[](#session)

```
const Session: "\n  fragment SessionFragment on Session {\n    expires\n    id\n    sessionToken\n  }\n";
```

* * *

## User[](#user)

```
const User: "\n  fragment UserFragment on User {\n    email\n    id\n    image\n    name\n    emailVerified\n  }\n";
```

* * *

## VerificationToken[](#verificationtoken)

```
const VerificationToken: "\n  fragment VerificationTokenFragment on VerificationToken {\n    identifier\n    token\n    expires\n  }\n";
```

[Client](/reference/dgraph-adapter/lib/client "Client")[@auth/dynamodb-adapter](/reference/dynamodb-adapter "@auth/dynamodb-adapter")
