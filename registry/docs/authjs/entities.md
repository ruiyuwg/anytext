[API reference](/reference/overview "API reference")[@auth/typeorm-adapter](/reference/typeorm-adapter "@auth/typeorm-adapter")entities

# entities

## AccountEntity[](#accountentity)

### Constructors[](#constructors)

#### new AccountEntity()[](#new-accountentity)

```
new AccountEntity(): AccountEntity
```

##### Returns[](#returns)

[`AccountEntity`](entities#accountentity)

### Properties[](#properties)

#### access\_token[](#access_token)

```
access_token: null | string;
```

#### expires\_at[](#expires_at)

```
expires_at: null | number;
```

#### id[](#id)

```
id: string;
```

#### id\_token[](#id_token)

```
id_token: null | string;
```

#### provider[](#provider)

```
provider: string;
```

#### providerAccountId[](#provideraccountid)

```
providerAccountId: string;
```

#### refresh\_token[](#refresh_token)

```
refresh_token: null | string;
```

#### scope[](#scope)

```
scope: null | string;
```

#### session\_state[](#session_state)

```
session_state: null | string;
```

#### token\_type[](#token_type)

```
token_type: null | string;
```

#### type[](#type)

```
type: string;
```

#### user[](#user)

```
user: UserEntity;
```

#### userId[](#userid)

```
userId: string;
```

* * *

## SessionEntity[](#sessionentity)

### Constructors[](#constructors-1)

#### new SessionEntity()[](#new-sessionentity)

```
new SessionEntity(): SessionEntity
```

##### Returns[](#returns-1)

[`SessionEntity`](entities#sessionentity)

### Properties[](#properties-1)

#### expires[](#expires)

```
expires: string;
```

#### id[](#id-1)

```
id: string;
```

#### sessionToken[](#sessiontoken)

```
sessionToken: string;
```

#### user[](#user-1)

```
user: UserEntity;
```

#### userId[](#userid-1)

```
userId: string;
```

* * *

## UserEntity[](#userentity)

### Constructors[](#constructors-2)

#### new UserEntity()[](#new-userentity)

```
new UserEntity(): UserEntity
```

##### Returns[](#returns-2)

[`UserEntity`](entities#userentity)

### Properties[](#properties-2)

#### accounts[](#accounts)

```
accounts: AccountEntity[];
```

#### email[](#email)

```
email: null | string;
```

#### emailVerified[](#emailverified)

```
emailVerified: null | string;
```

#### id[](#id-2)

```
id: string;
```

#### image[](#image)

```
image: null | string;
```

#### name[](#name)

```
name: null | string;
```

#### sessions[](#sessions)

```
sessions: SessionEntity[];
```

* * *

## VerificationTokenEntity[](#verificationtokenentity)

### Constructors[](#constructors-3)

#### new VerificationTokenEntity()[](#new-verificationtokenentity)

```
new VerificationTokenEntity(): VerificationTokenEntity
```

##### Returns[](#returns-3)

[`VerificationTokenEntity`](entities#verificationtokenentity)

### Properties[](#properties-3)

#### expires[](#expires-1)

```
expires: string;
```

#### id[](#id-3)

```
id: string;
```

#### identifier[](#identifier)

```
identifier: string;
```

#### token[](#token)

```
token: string;
```

[@auth/typeorm-adapter](/reference/typeorm-adapter "@auth/typeorm-adapter")[utils](/reference/typeorm-adapter/utils "utils")
