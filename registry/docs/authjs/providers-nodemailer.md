[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")nodemailer

# providers/nodemailer

## NodemailerConfig[](#nodemailerconfig)

Shared across all [ProviderType](../providers#providertype)

### Extends[](#extends)

-   [`EmailConfig`](email#emailconfig)

### Properties[](#properties)

#### apiKey?[](#apikey)

```
optional apiKey: string;
```

Used with HTTP-based email providers.

##### Inherited from[](#inherited-from)

[`EmailConfig`](email#emailconfig).[`apiKey`](email#apikey)

#### from?[](#from)

```
optional from: string;
```

##### Inherited from[](#inherited-from-1)

[`EmailConfig`](email#emailconfig).[`from`](email#from)

#### generateVerificationToken()?[](#generateverificationtoken)

```
optional generateVerificationToken: () => Awaitable<string>;
```

##### Returns[](#returns)

[`Awaitable`](../types#awaitablet)<`string`\>

##### Inherited from[](#inherited-from-2)

[`EmailConfig`](email#emailconfig).[`generateVerificationToken`](email#generateverificationtoken)

#### id[](#id)

```
id: string;
```

Uniquely identifies the provider in AuthConfig.providers It’s also part of the URL

##### Inherited from[](#inherited-from-3)

[`EmailConfig`](email#emailconfig).[`id`](email#id)

#### maxAge?[](#maxage)

```
optional maxAge: number;
```

##### Inherited from[](#inherited-from-4)

[`EmailConfig`](email#emailconfig).[`maxAge`](email#maxage)

#### name[](#name)

```
name: string;
```

The provider name used on the default sign-in page’s sign-in button. For example if it’s “Google”, the corresponding button will say: “Sign in with Google”

##### Inherited from[](#inherited-from-5)

[`EmailConfig`](email#emailconfig).[`name`](email#name)

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

##### Inherited from[](#inherited-from-6)

[`EmailConfig`](email#emailconfig).[`normalizeIdentifier`](email#normalizeidentifier)

#### options?[](#options)

```
optional options: NodemailerUserConfig;
```

##### Overrides[](#overrides)

[`EmailConfig`](email#emailconfig).[`options`](email#options)

#### secret?[](#secret)

```
optional secret: string;
```

Used to hash the verification token.

##### Inherited from[](#inherited-from-7)

[`EmailConfig`](email#emailconfig).[`secret`](email#secret)

#### sendVerificationRequest()[](#sendverificationrequest)

```
sendVerificationRequest: (params) => Awaitable<void>;
```

##### Parameters[](#parameters-1)

Parameter

Type

`params`

{ `expires`: [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date); `identifier`: `string`; `provider`: [`NodemailerConfig`](nodemailer#nodemailerconfig); `request`: [`Request`](https://developer.mozilla.org/docs/Web/API/Request); `theme`: [`Theme`](../types#theme); `token`: `string`; `url`: `string`; }

`params.expires`

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

`params.identifier`

`string`

`params.provider`

[`NodemailerConfig`](nodemailer#nodemailerconfig)

`params.request`

[`Request`](https://developer.mozilla.org/docs/Web/API/Request)

`params.theme`

[`Theme`](../types#theme)

`params.token`

`string`

`params.url`

`string`

##### Returns[](#returns-2)

[`Awaitable`](../types#awaitablet)<`void`\>

##### Overrides[](#overrides-1)

[`EmailConfig`](email#emailconfig).[`sendVerificationRequest`](email#sendverificationrequest)

#### server?[](#server)

```
optional server: AllTransportOptions;
```

Used with SMTP-based email providers.

##### Overrides[](#overrides-2)

[`EmailConfig`](email#emailconfig).[`server`](email#server)

#### type[](#type)

```
type: "email";
```

See [ProviderType](../providers#providertype)

##### Inherited from[](#inherited-from-8)

[`EmailConfig`](email#emailconfig).[`type`](email#type)

* * *

## NodemailerUserConfig[](#nodemaileruserconfig)

```
type NodemailerUserConfig = Omit<Partial<NodemailerConfig>, "options" | "type">;
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

[nextcloud](/reference/core/providers/nextcloud "nextcloud")[notion](/reference/core/providers/notion "notion")
