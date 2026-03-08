[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")auth0

# providers/auth0

Built-in sign in with **Auth0** integration.

[![](https://authjs.dev/img/providers/auth0.svg)](https://auth0.com)

## Auth0Profile[](#auth0profile)

The returned user profile from Auth0 when using the profile callback. [Reference](https://auth0.com/docs/manage-users/user-accounts/user-profiles/user-profile-structure).

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### app\_metadata[](#app_metadata)

```
app_metadata: object;
```

Custom fields that store info about a user that influences the user’s access, such as support plan, security roles (if not using the Authorization Core feature set), or access control groups. To learn more, read Metadata Overview.

#### blocked[](#blocked)

```
blocked: boolean;
```

Indicates whether the user has been blocked. Importing enables subscribers to ensure that users remain blocked when migrating to Auth0.

#### created\_at[](#created_at)

```
created_at: Date;
```

Timestamp indicating when the user profile was first created.

#### email[](#email)

```
email: string;
```

(unique) The user’s email address.

#### email\_verified[](#email_verified)

```
email_verified: boolean;
```

Indicates whether the user has verified their email address.

#### family\_name[](#family_name)

```
family_name: string;
```

The user’s family name.

#### given\_name[](#given_name)

```
given_name: string;
```

The user’s given name.

#### identities[](#identities)

```
identities: {
[key: string]: any;   connection: string;
  isSocial: boolean;
  profileData: object;
  provider: string;
  user_id: string;
 }[];
```

Contains info retrieved from the identity provider with which the user originally authenticates. Users may also link their profile to multiple identity providers; those identities will then also appear in this array. The contents of an individual identity provider object varies by provider. In some cases, it will also include an API Access Token to be used with the provider.

##### Index Signature[](#index-signature)

\[`key`: `string`\]: `any`

##### connection[](#connection)

```
connection: string;
```

Name of the Auth0 connection used to authenticate the user.

##### isSocial[](#issocial)

```
isSocial: boolean;
```

Indicates whether the connection is a social one.

##### profileData[](#profiledata)

```
profileData: object;
```

User info associated with the connection. When profiles are linked, it is populated with the associated user info for secondary accounts.

##### provider[](#provider)

```
provider: string;
```

Name of the entity that is authenticating the user, such as Facebook, Google, SAML, or your own provider.

##### user\_id[](#user_id)

```
user_id: string;
```

User’s unique identifier for this connection/provider.

#### last\_ip[](#last_ip)

```
last_ip: string;
```

IP address associated with the user’s last login.

#### last\_login[](#last_login)

```
last_login: Date;
```

Timestamp indicating when the user last logged in. If a user is blocked and logs in, the blocked session updates last\_login. If you are using this property from inside a Rule using the user< object, its value will be associated with the login that triggered the rule; this is because rules execute after login.

#### last\_password\_reset[](#last_password_reset)

```
last_password_reset: Date;
```

Timestamp indicating the last time the user’s password was reset/changed. At user creation, this field does not exist. This property is only available for Database connections.

#### logins\_count[](#logins_count)

```
logins_count: number;
```

Number of times the user has logged in. If a user is blocked and logs in, the blocked session is counted in logins\_count.

#### multifactor[](#multifactor)

```
multifactor: string;
```

List of multi-factor providers with which the user is enrolled.

#### name[](#name)

```
name: string;
```

The user’s full name.

#### nickname[](#nickname)

```
nickname: string;
```

The user’s nickname.

#### phone\_number[](#phone_number)

```
phone_number: string;
```

The user’s phone number. Only valid for users with SMS connections.

#### phone\_verified[](#phone_verified)

```
phone_verified: boolean;
```

Indicates whether the user has been verified their phone number. Only valid for users with SMS connections.

#### picture[](#picture)

```
picture: string;
```

URL pointing to the user’s profile picture.

#### sub[](#sub)

```
sub: string;
```

The user’s unique identifier.

#### updated\_at[](#updated_at)

```
updated_at: Date;
```

Timestamp indicating when the user’s profile was last updated/modified. Changes to last\_login are considered updates, so most of the time, updated\_at will match last\_login.

#### user\_id[](#user_id-1)

```
user_id: string;
```

(unique) The user’s identifier. Importing allows user records to be synchronized across multiple systems without using mapping tables.

#### user\_metadata[](#user_metadata)

```
user_metadata: object;
```

Custom fields that store info about a user that does not impact what they can or cannot access, such as work address, home address, or user preferences. To learn more, read Metadata Overview.

#### username[](#username)

```
username: string;
```

(unique) The user’s username.

* * *

## default()[](#default)

```
function default(config): OIDCConfig<Auth0Profile>
```

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/auth0
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Auth0 from "@auth/core/providers/auth0"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Auth0({
      clientId: AUTH0_ID,
      clientSecret: AUTH0_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Auth0 docs](https://auth0.com/docs/authenticate)

### Notes[](#notes)

The Auth0 provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/auth0.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

## Help[](#help)

If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<[`Auth0Profile`](auth0#auth0profile)\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<[`Auth0Profile`](auth0#auth0profile)\>

[atlassian](/reference/core/providers/atlassian "atlassian")[authentik](/reference/core/providers/authentik "authentik")
