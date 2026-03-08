[API reference](/reference/overview "API reference")[@auth/sequelize-adapter](/reference/sequelize-adapter "@auth/sequelize-adapter")models

# models

## Account[](#account)

```
const Account: {
  access_token: {
     type: StringDataTypeConstructor;
    };
  expires_at: {
     type: IntegerDataTypeConstructor;
    };
  id: {
     defaultValue: AbstractDataTypeConstructor;
     primaryKey: boolean;
     type: AbstractDataTypeConstructor;
    };
  id_token: {
     type: TextDataTypeConstructor;
    };
  provider: {
     allowNull: boolean;
     type: StringDataTypeConstructor;
    };
  providerAccountId: {
     allowNull: boolean;
     type: StringDataTypeConstructor;
    };
  refresh_token: {
     type: StringDataTypeConstructor;
    };
  scope: {
     type: StringDataTypeConstructor;
    };
  session_state: {
     type: StringDataTypeConstructor;
    };
  token_type: {
     type: StringDataTypeConstructor;
    };
  type: {
     allowNull: boolean;
     type: StringDataTypeConstructor;
    };
  userId: {
     type: AbstractDataTypeConstructor;
    };
};
```

### Type declaration[](#type-declaration)

#### access\_token[](#access_token)

```
access_token: {
  type: StringDataTypeConstructor;
};
```

##### access\_token.type[](#access_tokentype)

```
access_token.type: StringDataTypeConstructor = DataTypes.STRING;
```

#### expires\_at[](#expires_at)

```
expires_at: {
  type: IntegerDataTypeConstructor;
};
```

##### expires\_at.type[](#expires_attype)

```
expires_at.type: IntegerDataTypeConstructor = DataTypes.INTEGER;
```

#### id[](#id)

```
id: {
  defaultValue: AbstractDataTypeConstructor;
  primaryKey: boolean;
  type: AbstractDataTypeConstructor;
};
```

##### id.defaultValue[](#iddefaultvalue)

```
id.defaultValue: AbstractDataTypeConstructor = DataTypes.UUIDV4;
```

##### id.primaryKey[](#idprimarykey)

```
id.primaryKey: boolean = true;
```

##### id.type[](#idtype)

```
id.type: AbstractDataTypeConstructor = DataTypes.UUID;
```

#### id\_token[](#id_token)

```
id_token: {
  type: TextDataTypeConstructor;
};
```

##### id\_token.type[](#id_tokentype)

```
id_token.type: TextDataTypeConstructor = DataTypes.TEXT;
```

#### provider[](#provider)

```
provider: {
  allowNull: boolean;
  type: StringDataTypeConstructor;
};
```

##### provider.allowNull[](#providerallownull)

```
provider.allowNull: boolean = false;
```

##### provider.type[](#providertype)

```
provider.type: StringDataTypeConstructor = DataTypes.STRING;
```

#### providerAccountId[](#provideraccountid)

```
providerAccountId: {
  allowNull: boolean;
  type: StringDataTypeConstructor;
};
```

##### providerAccountId.allowNull[](#provideraccountidallownull)

```
providerAccountId.allowNull: boolean = false;
```

##### providerAccountId.type[](#provideraccountidtype)

```
providerAccountId.type: StringDataTypeConstructor = DataTypes.STRING;
```

#### refresh\_token[](#refresh_token)

```
refresh_token: {
  type: StringDataTypeConstructor;
};
```

##### refresh\_token.type[](#refresh_tokentype)

```
refresh_token.type: StringDataTypeConstructor = DataTypes.STRING;
```

#### scope[](#scope)

```
scope: {
  type: StringDataTypeConstructor;
};
```

##### scope.type[](#scopetype)

```
scope.type: StringDataTypeConstructor = DataTypes.STRING;
```

#### session\_state[](#session_state)

```
session_state: {
  type: StringDataTypeConstructor;
};
```

##### session\_state.type[](#session_statetype)

```
session_state.type: StringDataTypeConstructor = DataTypes.STRING;
```

#### token\_type[](#token_type)

```
token_type: {
  type: StringDataTypeConstructor;
};
```

##### token\_type.type[](#token_typetype)

```
token_type.type: StringDataTypeConstructor = DataTypes.STRING;
```

#### type[](#type)

```
type: {
  allowNull: boolean;
  type: StringDataTypeConstructor;
};
```

##### type.allowNull[](#typeallownull)

```
type.allowNull: boolean = false;
```

##### type.type[](#typetype)

```
type.type: StringDataTypeConstructor = DataTypes.STRING;
```

#### userId[](#userid)

```
userId: {
  type: AbstractDataTypeConstructor;
};
```

##### userId.type[](#useridtype)

```
userId.type: AbstractDataTypeConstructor = DataTypes.UUID;
```

* * *

## Session[](#session)

```
const Session: {
  expires: {
     allowNull: boolean;
     type: DateDataTypeConstructor;
    };
  id: {
     defaultValue: AbstractDataTypeConstructor;
     primaryKey: boolean;
     type: AbstractDataTypeConstructor;
    };
  sessionToken: {
     allowNull: boolean;
     type: StringDataTypeConstructor;
     unique: string;
    };
  userId: {
     type: AbstractDataTypeConstructor;
    };
};
```

### Type declaration[](#type-declaration-1)

#### expires[](#expires)

```
expires: {
  allowNull: boolean;
  type: DateDataTypeConstructor;
};
```

##### expires.allowNull[](#expiresallownull)

```
expires.allowNull: boolean = false;
```

##### expires.type[](#expirestype)

```
expires.type: DateDataTypeConstructor = DataTypes.DATE;
```

#### id[](#id-1)

```
id: {
  defaultValue: AbstractDataTypeConstructor;
  primaryKey: boolean;
  type: AbstractDataTypeConstructor;
};
```

##### id.defaultValue[](#iddefaultvalue-1)

```
id.defaultValue: AbstractDataTypeConstructor = DataTypes.UUIDV4;
```

##### id.primaryKey[](#idprimarykey-1)

```
id.primaryKey: boolean = true;
```

##### id.type[](#idtype-1)

```
id.type: AbstractDataTypeConstructor = DataTypes.UUID;
```

#### sessionToken[](#sessiontoken)

```
sessionToken: {
  allowNull: boolean;
  type: StringDataTypeConstructor;
  unique: string;
};
```

##### sessionToken.allowNull[](#sessiontokenallownull)

```
sessionToken.allowNull: boolean = false;
```

##### sessionToken.type[](#sessiontokentype)

```
sessionToken.type: StringDataTypeConstructor = DataTypes.STRING;
```

##### sessionToken.unique[](#sessiontokenunique)

```
sessionToken.unique: string = "sessionToken";
```

#### userId[](#userid-1)

```
userId: {
  type: AbstractDataTypeConstructor;
};
```

##### userId.type[](#useridtype-1)

```
userId.type: AbstractDataTypeConstructor = DataTypes.UUID;
```

* * *

## User[](#user)

```
const User: {
  email: {
     type: StringDataTypeConstructor;
     unique: string;
    };
  emailVerified: {
     type: DateDataTypeConstructor;
    };
  id: {
     defaultValue: AbstractDataTypeConstructor;
     primaryKey: boolean;
     type: AbstractDataTypeConstructor;
    };
  image: {
     type: StringDataTypeConstructor;
    };
  name: {
     type: StringDataTypeConstructor;
    };
};
```

### Type declaration[](#type-declaration-2)

#### email[](#email)

```
email: {
  type: StringDataTypeConstructor;
  unique: string;
};
```

##### email.type[](#emailtype)

```
email.type: StringDataTypeConstructor = DataTypes.STRING;
```

##### email.unique[](#emailunique)

```
email.unique: string = "email";
```

#### emailVerified[](#emailverified)

```
emailVerified: {
  type: DateDataTypeConstructor;
};
```

##### emailVerified.type[](#emailverifiedtype)

```
emailVerified.type: DateDataTypeConstructor = DataTypes.DATE;
```

#### id[](#id-2)

```
id: {
  defaultValue: AbstractDataTypeConstructor;
  primaryKey: boolean;
  type: AbstractDataTypeConstructor;
};
```

##### id.defaultValue[](#iddefaultvalue-2)

```
id.defaultValue: AbstractDataTypeConstructor = DataTypes.UUIDV4;
```

##### id.primaryKey[](#idprimarykey-2)

```
id.primaryKey: boolean = true;
```

##### id.type[](#idtype-2)

```
id.type: AbstractDataTypeConstructor = DataTypes.UUID;
```

#### image[](#image)

```
image: {
  type: StringDataTypeConstructor;
};
```

##### image.type[](#imagetype)

```
image.type: StringDataTypeConstructor = DataTypes.STRING;
```

#### name[](#name)

```
name: {
  type: StringDataTypeConstructor;
};
```

##### name.type[](#nametype)

```
name.type: StringDataTypeConstructor = DataTypes.STRING;
```

* * *

## VerificationToken[](#verificationtoken)

```
const VerificationToken: {
  expires: {
     allowNull: boolean;
     type: DateDataTypeConstructor;
    };
  identifier: {
     allowNull: boolean;
     type: StringDataTypeConstructor;
    };
  token: {
     primaryKey: boolean;
     type: StringDataTypeConstructor;
    };
};
```

### Type declaration[](#type-declaration-3)

#### expires[](#expires-1)

```
expires: {
  allowNull: boolean;
  type: DateDataTypeConstructor;
};
```

##### expires.allowNull[](#expiresallownull-1)

```
expires.allowNull: boolean = false;
```

##### expires.type[](#expirestype-1)

```
expires.type: DateDataTypeConstructor = DataTypes.DATE;
```

#### identifier[](#identifier)

```
identifier: {
  allowNull: boolean;
  type: StringDataTypeConstructor;
};
```

##### identifier.allowNull[](#identifierallownull)

```
identifier.allowNull: boolean = false;
```

##### identifier.type[](#identifiertype)

```
identifier.type: StringDataTypeConstructor = DataTypes.STRING;
```

#### token[](#token)

```
token: {
  primaryKey: boolean;
  type: StringDataTypeConstructor;
};
```

##### token.primaryKey[](#tokenprimarykey)

```
token.primaryKey: boolean = true;
```

##### token.type[](#tokentype)

```
token.type: StringDataTypeConstructor = DataTypes.STRING;
```

[@auth/sequelize-adapter](/reference/sequelize-adapter "@auth/sequelize-adapter")[@auth/supabase-adapter](/reference/supabase-adapter "@auth/supabase-adapter")
