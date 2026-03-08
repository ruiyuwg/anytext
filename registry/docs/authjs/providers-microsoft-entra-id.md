[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")microsoft-entra-id

# providers/microsoft-entra-id

Built-in **Microsoft Entra ID** integration.[![](https://authjs.dev/img/providers/microsoft-entra-id.svg)](https://learn.microsoft.com/en-us/entra/identity)

## MicrosoftEntraIDProfile[](#microsoftentraidprofile)

### See[](#see)

-   [Microsoft Identity Platform - ID token claims reference](https://learn.microsoft.com/en-us/entra/identity-platform/id-token-claims-reference)
-   [Microsoft Identity Platform - Optional claims reference](https://learn.microsoft.com/en-us/entra/identity-platform/optional-claims-reference)

### Properties[](#properties)

#### acct[](#acct)

```
acct: 0 | 1;
```

Users account status in tenant. If the user is a member of the tenant, the value is `0`. If they’re a guest, the value is `1`.

#### acrs[](#acrs)

```
acrs: string;
```

Auth Context IDs. Indicates the Auth Context IDs of the operations that the bearer is eligible to perform. Auth Context IDs can be used to trigger a demand for step-up authentication from within your application and services. Often used along with the `xms_cc` claim.

#### aio[](#aio)

```
aio: string;
```

An internal claim that’s used to record data for token reuse. Should be ignored.

#### at\_hash[](#at_hash)

```
at_hash: string;
```

The access token hash is included in ID tokens only when the ID token is issued from the `/authorize` endpoint with an OAuth 2.0 access token. It can be used to validate the authenticity of an access token. To understand how to do this validation, see the [OpenID Connect specification](https://openid.net/specs/openid-connect-core-1_0.html#HybridIDToken). This claim isn’t returned on ID tokens from the `/token` endpoint.

#### aud[](#aud)

```
aud: string;
```

Identifies the intended recipient of the token. In `id_tokens`, the audience is your app’s Application ID, assigned to your app in the Azure portal. This value should be validated. The token should be rejected if it fails to match your app’s Application ID.

#### auth\_time[](#auth_time)

```
auth_time: Date;
```

Time when the user last authenticated.

#### c\_hash[](#c_hash)

```
c_hash: string;
```

The code hash is included in ID tokens only when the ID token is issued with an OAuth 2.0 authorization code. It can be used to validate the authenticity of an authorization code. To understand how to do this validation, see the [OpenID Connect specification](https://openid.net/specs/openid-connect-core-1_0.html#HybridIDToken). This claim isn’t returned on ID tokens from the /token endpoint.

#### ctry[](#ctry)

```
ctry: string;
```

User’s country/region. This claim is returned if it’s present and the value of the field is a standard two-letter country/region code, such as FR, JP, SZ, and so on.

#### email[](#email)

```
email: string;
```

Present by default for guest accounts that have an email address. Your app can request the email claim for managed users (from the same tenant as the resource) using the `email` [optional claim](https://learn.microsoft.com/en-us/entra/identity-platform/optional-claims). This value isn’t guaranteed to be correct and is mutable over time. Never use it for authorization or to save data for a user. If you require an addressable email address in your app, request this data from the user directly by using this claim as a suggestion or prefill in your UX. On the v2.0 endpoint, your app can also request the `email` OpenID Connect scope - you don’t need to request both the optional claim and the scope to get the claim.

#### exp[](#exp)

```
exp: Date;
```

Identifies the expiration time on or after which the JWT can’t be accepted for processing. In certain circumstances, a resource may reject the token before this time. For example, if a change in authentication is required or a token revocation has been detected.

#### family\_name[](#family_name)

```
family_name: string;
```

Last Name. Provides the last name, surname, or family name of the user as defined in the user object. For example, `"family_name":"Miller"`. Supported in MSA and Microsoft Entra ID. Requires the `profile` scope.

#### fwd[](#fwd)

```
fwd: string;
```

IP address. Adds the original address of the requesting client (when inside a VNET).

#### given\_name[](#given_name)

```
given_name: string;
```

First name. Provides the first or “given” name of the user, as set on the user object. For example, `"given_name": "Frank"`. Supported in MSA and Microsoft Entra ID. Requires the `profile` scope.

#### groups[](#groups)

```
groups: string;
```

Optional formatting for group claims. The `groups` claim is used with the GroupMembershipClaims setting in the [application manifest](https://learn.microsoft.com/en-us/entra/identity-platform/reference-app-manifest), which must be set as well.

#### hasgroups[](#hasgroups)

```
hasgroups: boolean;
```

If present, always true, denoting the user is in at least one group. Indicates that the client should use the Microsoft Graph API to determine the user’s groups (`https://graph.microsoft.com/v1.0/users/{userID}/getMemberObjects`).

#### iat[](#iat)

```
iat: Date;
```

Indicates when the authentication for the token occurred.

#### idp[](#idp)

```
idp: string;
```

Records the identity provider that authenticated the subject of the token. This value is identical to the value of the issuer claim unless the user account isn’t in the same tenant as the issuer - guests, for instance. If the claim isn’t present, it means that the value of `iss` can be used instead. For personal accounts being used in an organizational context (for instance, a personal account invited to a tenant), the `idp` claim may be ‘live.com’ or an STS URI containing the Microsoft account tenant `9188040d-6c67-4c5b-b112-36a304b66dad`.

#### in\_corp[](#in_corp)

```
in_corp: string;
```

Inside Corporate Network. Signals if the client is logging in from the corporate network. If they’re not, the claim isn’t included. Based off of the [trusted IPs](https://learn.microsoft.com/en-us/entra/identity/authentication/howto-mfa-mfasettings#trusted-ips) settings in MFA.

#### ipaddr[](#ipaddr)

```
ipaddr: string;
```

IP Address. The IP address the client logged in from.

#### iss[](#iss)

```
iss: string;
```

Identifies the issuer, or “authorization server” that constructs and returns the token. It also identifies the tenant for which the user was authenticated. If the token was issued by the v2.0 endpoint, the URI ends in `/v2.0`. The GUID that indicates that the user is a consumer user from a Microsoft account is `9188040d-6c67-4c5b-b112-36a304b66dad`. Your app should use the GUID portion of the claim to restrict the set of tenants that can sign in to the app, if applicable.

#### login\_hint[](#login_hint)

```
login_hint: string;
```

Login hint. An opaque, reliable login hint claim that’s base 64 encoded. Don’t modify this value. This claim is the best value to use for the `login_hint` OAuth parameter in all flows to get SSO. It can be passed between applications to help them silently SSO as well - application A can sign in a user, read the `login_hint` claim, and then send the claim and the current tenant context to application B in the query string or fragment when the user selects on a link that takes them to application B. To avoid race conditions and reliability issues, the `login_hint` claim doesn’t include the current tenant for the user, and defaults to the user’s home tenant when used. In a guest scenario where the user is from another tenant, a tenant identifier must be provided in the sign-in request. and pass the same to apps you partner with. This claim is intended for use with your SDK’s existing `login_hint` functionality, however that it exposed.

#### name[](#name)

```
name: string;
```

The `name` claim provides a human-readable value that identifies the subject of the token. The value isn’t guaranteed to be unique, it can be changed, and should be used only for display purposes. The `profile` scope is required to receive this claim.

#### nbf[](#nbf)

```
nbf: Date;
```

Identifies the time before which the JWT can’t be accepted for processing.

#### nonce[](#nonce)

```
nonce: string;
```

The nonce matches the parameter included in the original authorize request to the IDP. If it doesn’t match, your application should reject the token.

#### oid[](#oid)

```
oid: string;
```

The immutable identifier for an object, in this case, a user account. This ID uniquely identifies the user across applications - two different applications signing in the same user receives the same value in the `oid` claim. Microsoft Graph returns this ID as the `id` property for a user account. Because the `oid` allows multiple apps to correlate users, the `profile` scope is required to receive this claim. If a single user exists in multiple tenants, the user contains a different object ID in each tenant - they’re considered different accounts, even though the user logs into each account with the same credentials. The `oid` claim is a GUID and can’t be reused.

#### onprem\_sid[](#onprem_sid)

```
onprem_sid: string;
```

On-premises Security Identifier

#### preferred\_username[](#preferred_username)

```
preferred_username: string;
```

The primary username that represents the user. It could be an email address, phone number, or a generic username without a specified format. Its value is mutable and might change over time. Since it’s mutable, this value can’t be used to make authorization decisions. It can be used for username hints and in human-readable UI as a username. The `profile` scope is required to receive this claim. Present only in v2.0 tokens.

#### pwd\_exp[](#pwd_exp)

```
pwd_exp: number;
```

Password Expiration Time. The number of seconds after the time in the `iat` claim at which the password expires. This claim is only included when the password is expiring soon (as defined by “notification days” in the password policy).

#### pwd\_url[](#pwd_url)

```
pwd_url: string;
```

Change Password URL. A URL that the user can visit to change their password. This claim is only included when the password is expiring soon (as defined by “notification days” in the password policy).

#### rh[](#rh)

```
rh: string;
```

An internal claim used to revalidate tokens. Should be ignored.

#### roles[](#roles)

```
roles: string[];
```

The set of roles that were assigned to the user who is logging in.

#### sid[](#sid)

```
sid: string;
```

Represents an unique identifier for a session and will be generated when a new session is established.

#### sub[](#sub)

```
sub: string;
```

The subject of the information in the token. For example, the user of an app. This value is immutable and can’t be reassigned or reused. The subject is a pairwise identifier and is unique to an application ID. If a single user signs into two different apps using two different client IDs, those apps receive two different values for the subject claim. You may or may not want two values depending on your architecture and privacy requirements.

#### tenant\_ctry[](#tenant_ctry)

```
tenant_ctry: string;
```

Resource tenant’s country/region. Same as `ctry` except set at a tenant level by an admin. Must also be a standard two-letter value.

#### tenant\_region\_scope[](#tenant_region_scope)

```
tenant_region_scope: string;
```

Region of the resource tenant

#### tid[](#tid)

```
tid: string;
```

Represents the tenant that the user is signing in to. For work and school accounts, the GUID is the immutable tenant ID of the organization that the user is signing in to. For sign-ins to the personal Microsoft account tenant (services like Xbox, Teams for Life, or Outlook), the value is `9188040d-6c67-4c5b-b112-36a304b66dad`.

#### upn[](#upn)

```
upn: string;
```

UserPrincipalName. An identifier for the user that can be used with the `username_hint` parameter. Not a durable identifier for the user and shouldn’t be used for authorization or to uniquely identity user information (for example, as a database key). Instead, use the user object ID (`oid`) as a database key. For more information, see [Secure applications and APIs by validating claims](https://learn.microsoft.com/en-us/entra/identity-platform/claims-validation). Users signing in with an [alternate login ID](https://learn.microsoft.com/en-us/entra/identity/authentication/howto-authentication-use-email-signin) shouldn’t be shown their User Principal Name (UPN). Instead, use the following ID token claims for displaying sign-in state to the user: `preferred_username` or `unique_name` for v1 tokens and `preferred_username` for v2 tokens. Although this claim is automatically included, you can specify it as an optional claim to attach other properties to modify its behavior in the guest user case. You should use the `login_hint` claim for `login_hint` use - human-readable identifiers like UPN are unreliable.

#### uti[](#uti)

```
uti: string;
```

Token identifier claim, equivalent to jti in the JWT specification. Unique, per-token identifier that is case-sensitive.

#### ver[](#ver)

```
ver: "2.0";
```

Indicates the version of the ID token.

#### verified\_primary\_email[](#verified_primary_email)

```
verified_primary_email: string[];
```

Sourced from the user’s PrimaryAuthoritativeEmail

#### verified\_secondary\_email[](#verified_secondary_email)

```
verified_secondary_email: string[];
```

Sourced from the user’s SecondaryAuthoritativeEmail

#### vnet[](#vnet)

```
vnet: string;
```

VNET specifier information.

#### xms\_cc[](#xms_cc)

```
xms_cc: string;
```

Client Capabilities. Indicates whether the client application that acquired the token is capable of handling claims challenges. It’s often used along with claim `acrs`. This claim is commonly used in Conditional Access and Continuous Access Evaluation scenarios. The resource server or service application that the token is issued for controls the presence of this claim in a token. A value of `cp1` in the access token is the authoritative way to identify that a client application is capable of handling a claims challenge. For more information, see [Claims challenges, claims requests and client capabilities](https://learn.microsoft.com/en-us/entra/identity-platform/claims-challenge?tabs=dotnet).

#### xms\_edov[](#xms_edov)

```
xms_edov: boolean;
```

Boolean value indicating whether the user’s email domain owner has been verified. An email is considered to be domain verified if it belongs to the tenant where the user account resides and the tenant admin has done verification of the domain. Also, the email must be from a Microsoft account (MSA), a Google account, or used for authentication using the one-time passcode (OTP) flow. Facebook and SAML/WS-Fed accounts do not have verified domains. For this claim to be returned in the token, the presence of the `email` claim is required.

#### xms\_pdl[](#xms_pdl)

```
xms_pdl: string;
```

Preferred data location. For Multi-Geo tenants, the preferred data location is the three-letter code showing the geographic region the user is in. For more information, see the [Microsoft Entra Connect documentation about preferred data location](https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/how-to-connect-sync-feature-preferreddatalocation).

#### xms\_pl[](#xms_pl)

```
xms_pl: string;
```

User preferred language. The user’s preferred language, if set. Sourced from their home tenant, in guest access scenarios. Formatted LL-CC (“en-us”).

#### xms\_tpl[](#xms_tpl)

```
xms_tpl: string;
```

Tenant preferred language. The resource tenant’s preferred language, if set. Formatted LL (“en”).

#### ztdid[](#ztdid)

```
ztdid: string;
```

Zero-touch Deployment ID. The device identity used for `Windows AutoPilot`.

* * *

## default()[](#default)

```
function default(config): OIDCConfig<MicrosoftEntraIDProfile>
```

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/microsoft-entra-id
```

#### Environment Variables[](#environment-variables)

```
AUTH_MICROSOFT_ENTRA_ID_ID="<Application (client) ID>"
AUTH_MICROSOFT_ENTRA_ID_SECRET="<Client secret value>"
AUTH_MICROSOFT_ENTRA_ID_ISSUER="https://login.microsoftonline.com/<Directory (tenant) ID>/v2.0/"
```

#### Configuration[](#configuration)

When the `issuer` parameter is omitted it will default to `"https://login.microsoftonline.com/common/v2.0/"`. This allows any Microsoft account (Personal, School or Work) to log in.

```
import MicrosoftEntraID from "@auth/core/providers/microsoft-entra-id"
...
providers: [
  MicrosoftEntraID({
    clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
    clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
  }),
]
...
```

To only allow your organization’s users to log in you will need to configure the `issuer` parameter with your Directory (tenant) ID.

```
AUTH_MICROSOFT_ENTRA_ID_ISSUER="https://login.microsoftonline.com/<Directory (tenant) ID>/v2.0/"
```

```
import MicrosoftEntraID from "@auth/core/providers/microsoft-entra-id"
...
providers: [
  MicrosoftEntraID({
    clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
    clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
    issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
  }),
]
...
```

### Resources[](#resources)

-   [Microsoft Entra OAuth documentation](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow)
-   [Microsoft Entra OAuth apps](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app)

### Notes[](#notes)

Microsoft Entra ID returns the profile picture in an ArrayBuffer, instead of just a URL to the image, so our provider converts it to a base64 encoded image string and returns that instead. See: [https://learn.microsoft.com/en-us/graph/api/profilephoto-get?view=graph-rest-1.0&tabs=http#examples](https://learn.microsoft.com/en-us/graph/api/profilephoto-get?view=graph-rest-1.0&tabs=http#examples). The default image size is 48x48 to avoid [running out of space](https://next-auth.js.org/faq#json-web-tokens) in case the session is saved as a JWT.

By default, Auth.js assumes that the Microsoft Entra ID provider is based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.

💡

The Microsoft Entra ID provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/microsoft-entra-id.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<[`MicrosoftEntraIDProfile`](microsoft-entra-id#microsoftentraidprofile)\> & { `profilePhotoSize`: `64` | `48` | `96` | `120` | `240` | `360` | `432` | `504` | `648`; }

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<[`MicrosoftEntraIDProfile`](microsoft-entra-id#microsoftentraidprofile)\>

[medium](/reference/core/providers/medium "medium")[naver](/reference/core/providers/naver "naver")
