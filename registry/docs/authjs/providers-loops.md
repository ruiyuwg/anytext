[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")loops

# providers/loops

Built-in **Loops** integration.[![](https://authjs.dev/img/providers/loops.svg)](https://loops.so)

## LoopsConfig[](#loopsconfig)

### Extends[](#extends)

-   [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)<[`EmailConfig`](email#emailconfig), `"sendVerificationRequest"` | `"options"`\>

### Properties[](#properties)

#### apiKey[](#apikey)

```
apiKey: string;
```

Used with HTTP-based email providers.

##### Overrides[](#overrides)

`Omit.apiKey`

#### from?[](#from)

```
optional from: string;
```

##### Inherited from[](#inherited-from)

`Omit.from`

#### generateVerificationToken()?[](#generateverificationtoken)

```
optional generateVerificationToken: () => Awaitable<string>;
```

##### Returns[](#returns)

[`Awaitable`](../types#awaitablet)<`string`\>

##### Inherited from[](#inherited-from-1)

`Omit.generateVerificationToken`

#### id[](#id)

```
id: string;
```

##### Overrides[](#overrides-1)

`Omit.id`

#### maxAge?[](#maxage)

```
optional maxAge: number;
```

##### Inherited from[](#inherited-from-2)

`Omit.maxAge`

#### name[](#name)

```
name: string;
```

The provider name used on the default sign-in page’s sign-in button. For example if it’s “Google”, the corresponding button will say: “Sign in with Google”

##### Inherited from[](#inherited-from-3)

`Omit.name`

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

##### Inherited from[](#inherited-from-4)

`Omit.normalizeIdentifier`

#### options[](#options)

```
options: LoopsUserConfig;
```

#### secret?[](#secret)

```
optional secret: string;
```

Used to hash the verification token.

##### Inherited from[](#inherited-from-5)

`Omit.secret`

#### sendVerificationRequest()[](#sendverificationrequest)

```
sendVerificationRequest: (params) => Promise<void>;
```

##### Parameters[](#parameters-1)

Parameter

Type

`params`

`Params`

##### Returns[](#returns-2)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`\>

#### server?[](#server)

```
optional server: AllTransportOptions;
```

Used with SMTP-based email providers.

##### Inherited from[](#inherited-from-6)

`Omit.server`

#### transactionalId[](#transactionalid)

```
transactionalId: string;
```

#### type[](#type)

```
type: "email";
```

See [ProviderType](../providers#providertype)

##### Inherited from[](#inherited-from-7)

`Omit.type`

* * *

## LoopsUserConfig[](#loopsuserconfig)

```
type LoopsUserConfig = Omit<Partial<LoopsConfig>, "options" | "type">;
```

* * *

## default()[](#default)

```
function default(config): LoopsConfig
```

### Parameters[](#parameters-2)

Parameter

Type

`config`

[`LoopsUserConfig`](loops#loopsuserconfig)

### Returns[](#returns-3)

[`LoopsConfig`](loops#loopsconfig)

LoopsConfig

### Requires[](#requires)

LoopsUserConfig

### Example[](#example)

```
Loops({
  apiKey: process.env.AUTH_LOOPS_KEY,
  transactionalId: process.env.AUTH_LOOPS_TRANSACTIONAL_ID,
})
```

[logto](/reference/core/providers/logto "logto")[mailchimp](/reference/core/providers/mailchimp "mailchimp")
