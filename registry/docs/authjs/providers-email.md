[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")email

# providers/email

## EmailConfig[](#emailconfig)

Shared across all [ProviderType](../providers#providertype)

### Extends[](#extends)

-   [`CommonProviderOptions`](../providers#commonprovideroptions)

### Extended by[](#extended-by)

-   [`NodemailerConfig`](nodemailer#nodemailerconfig)

### Properties[](#properties)

#### apiKey?[](#apikey)

```
optional apiKey: string;
```

Used with HTTP-based email providers.

#### from?[](#from)

```
optional from: string;
```

#### generateVerificationToken()?[](#generateverificationtoken)

```
optional generateVerificationToken: () => Awaitable<string>;
```

##### Returns[](#returns)

[`Awaitable`](../types#awaitablet)<`string`\>

#### id[](#id)

```
id: string;
```

Uniquely identifies the provider in AuthConfig.providers It’s also part of the URL

##### Overrides[](#overrides)

[`CommonProviderOptions`](../providers#commonprovideroptions).[`id`](../providers#id-1)

#### maxAge?[](#maxage)

```
optional maxAge: number;
```

#### name[](#name)

```
name: string;
```

The provider name used on the default sign-in page’s sign-in button. For example if it’s “Google”, the corresponding button will say: “Sign in with Google”

##### Overrides[](#overrides-1)

[`CommonProviderOptions`](../providers#commonprovideroptions).[`name`](../providers#name-1)

#### normalizeIdentifier()?[](#normalizeidentifier)

```
optional normalizeIdentifier: (identifier) => string;
```

##### Parameters[](#parameters)

Parameter

Type

`identifier`

`string`

##### Returns[](#returns-1)

`string`

#### options?[](#options)

```
optional options: EmailUserConfig;
```

#### secret?[](#secret)

```
optional secret: string;
```

Used to hash the verification token.

#### sendVerificationRequest()[](#sendverificationrequest)

```
sendVerificationRequest: (params) => Awaitable<void>;
```

##### Parameters[](#parameters-1)

Parameter

Type

`params`

[`EmailProviderSendVerificationRequestParams`](email#emailprovidersendverificationrequestparams)

##### Returns[](#returns-2)

[`Awaitable`](../types#awaitablet)<`void`\>

#### server?[](#server)

```
optional server: AllTransportOptions;
```

Used with SMTP-based email providers.

#### type[](#type)

```
type: "email";
```

See [ProviderType](../providers#providertype)

##### Overrides[](#overrides-2)

[`CommonProviderOptions`](../providers#commonprovideroptions).[`type`](../providers#type-1)

* * *

## EmailProviderSendVerificationRequestParams[](#emailprovidersendverificationrequestparams)

```
type EmailProviderSendVerificationRequestParams = {
  expires: Date;
  identifier: string;
  provider: EmailConfig;
  request: Request;
  theme: Theme;
  token: string;
  url: string;
};
```

### Type declaration[](#type-declaration)

#### expires[](#expires)

```
expires: Date;
```

#### identifier[](#identifier)

```
identifier: string;
```

#### provider[](#provider)

```
provider: EmailConfig;
```

#### request[](#request)

```
request: Request;
```

#### theme[](#theme)

```
theme: Theme;
```

#### token[](#token)

```
token: string;
```

#### url[](#url)

```
url: string;
```

* * *

## EmailProviderType[](#emailprovidertype)

```
type EmailProviderType = "email";
```

* * *

## EmailUserConfig[](#emailuserconfig)

```
type EmailUserConfig = Omit<Partial<EmailConfig>, "options" | "type">;
```

* * *

## default()[](#default)

```
function default(config): NodemailerConfig
```

### Parameters[](#parameters-2)

Parameter

Type

`config`

[`NodemailerUserConfig`](nodemailer#nodemaileruserconfig)

### Returns[](#returns-3)

[`NodemailerConfig`](nodemailer#nodemailerconfig)

### Deprecated[](#deprecated)

Import this provider from the `providers/nodemailer` submodule instead of `providers/email`.

To log in with nodemailer, change `signIn("email")` to `signIn("nodemailer")`

* * *

## EmailProviderId[](#emailproviderid)

Re-exports [EmailProviderId](provider-types#emailproviderid)

[duende-identity-server6](/reference/core/providers/duende-identity-server6 "duende-identity-server6")[eventbrite](/reference/core/providers/eventbrite "eventbrite")
