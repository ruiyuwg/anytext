[API reference](/reference/overview "API reference")[next-auth](/reference/nextjs "next-auth")jwt

# jwt

⚠️

**Not recommended** In NextAuth.js v5 or newer, we recommend other authentication methods server-side. Read more at: [https://authjs.dev/getting-started/migrating-to-v5#authenticating-server-side](https://authjs.dev/getting-started/migrating-to-v5#authenticating-server-side)

## DefaultJWT[](#defaultjwt)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`\>

### Extended by[](#extended-by)

-   [`JWT`](jwt#jwt)

### Indexable[](#indexable)

\[`key`: `string`\]: `unknown`

### Properties[](#properties)

#### email?[](#email)

```
optional email: null | string;
```

#### exp?[](#exp)

```
optional exp: number;
```

#### iat?[](#iat)

```
optional iat: number;
```

#### jti?[](#jti)

```
optional jti: string;
```

#### name?[](#name)

```
optional name: null | string;
```

#### picture?[](#picture)

```
optional picture: null | string;
```

#### sub?[](#sub)

```
optional sub: string;
```

* * *

## GetTokenParams<R>[](#gettokenparamsr)

### Extends[](#extends-1)

-   `GetTokenParamsBase`

### Type Parameters[](#type-parameters)

Type Parameter

Default type

`R` _extends_ `boolean`

`false`

### Properties[](#properties-1)

#### cookieName?[](#cookiename)

```
optional cookieName: string;
```

If the JWT is in the cookie, what name `getToken()` should look for.

#### decode()?[](#decode)

```
optional decode: (params) => Awaitable<null | JWT>;
```

##### Parameters[](#parameters)

Parameter

Type

`params`

[`JWTDecodeParams`](jwt#jwtdecodeparams)

##### Returns[](#returns)

[`Awaitable`](../core/types#awaitablet)<`null` | [`JWT`](jwt#jwt)\>

#### logger?[](#logger)

```
optional logger: LoggerInstance | Console;
```

#### raw?[](#raw)

```
optional raw: R;
```

`getToken()` will return the raw JWT if this is set to `true`

##### Default[](#default)

```
false
```

#### req[](#req)

```
req: 
  | Request
  | {
  headers:   | Headers
     | Record<string, string>;
};
```

The request containing the JWT either in the cookies or in the `Authorization` header.

#### salt?[](#salt)

```
optional salt: string;
```

##### Inherited from[](#inherited-from)

`GetTokenParamsBase.salt`

#### secret?[](#secret)

```
optional secret: string | string[];
```

##### Inherited from[](#inherited-from-1)

`GetTokenParamsBase.secret`

#### secureCookie?[](#securecookie)

```
optional secureCookie: boolean;
```

Use secure prefix for cookie name, unless URL in `NEXTAUTH_URL` is http:// or not set (e.g. development or test instance) case use unprefixed name

* * *

## JWT[](#jwt)

Returned by the `jwt` callback when using JWT sessions

[`jwt` callback](https://authjs.dev/reference/core/types#jwt)

### Extends[](#extends-2)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`\>.[`DefaultJWT`](jwt#defaultjwt)

### Indexable[](#indexable-1)

\[`key`: `string`\]: `unknown`

### Properties[](#properties-2)

#### email?[](#email-1)

```
optional email: null | string;
```

##### Inherited from[](#inherited-from-2)

[`DefaultJWT`](jwt#defaultjwt).[`email`](jwt#email)

#### exp?[](#exp-1)

```
optional exp: number;
```

##### Inherited from[](#inherited-from-3)

[`DefaultJWT`](jwt#defaultjwt).[`exp`](jwt#exp)

#### iat?[](#iat-1)

```
optional iat: number;
```

##### Inherited from[](#inherited-from-4)

[`DefaultJWT`](jwt#defaultjwt).[`iat`](jwt#iat)

#### jti?[](#jti-1)

```
optional jti: string;
```

##### Inherited from[](#inherited-from-5)

[`DefaultJWT`](jwt#defaultjwt).[`jti`](jwt#jti)

#### name?[](#name-1)

```
optional name: null | string;
```

##### Inherited from[](#inherited-from-6)

[`DefaultJWT`](jwt#defaultjwt).[`name`](jwt#name)

#### picture?[](#picture-1)

```
optional picture: null | string;
```

##### Inherited from[](#inherited-from-7)

[`DefaultJWT`](jwt#defaultjwt).[`picture`](jwt#picture)

#### sub?[](#sub-1)

```
optional sub: string;
```

##### Inherited from[](#inherited-from-8)

[`DefaultJWT`](jwt#defaultjwt).[`sub`](jwt#sub)

* * *

## JWTDecodeParams[](#jwtdecodeparams)

### Properties[](#properties-3)

#### salt[](#salt-1)

```
salt: string;
```

Used in combination with `secret`, to derive the encryption secret for JWTs.

#### secret[](#secret-1)

```
secret: string | string[];
```

Used in combination with `salt`, to derive the encryption secret for JWTs.

##### Note[](#note)

You can also pass an array of secrets, in which case the first secret that successfully decrypts the JWT will be used. This is useful for rotating secrets without invalidating existing sessions. The newer secret should be added to the start of the array, which will be used for all new sessions.

#### token?[](#token)

```
optional token: string;
```

The Auth.js issued JWT to be decoded

* * *

## JWTEncodeParams<Payload>[](#jwtencodeparamspayload)

### Type Parameters[](#type-parameters-1)

Type Parameter

Default type

`Payload`

[`JWT`](jwt#jwt)

### Properties[](#properties-4)

#### maxAge?[](#maxage)

```
optional maxAge: number;
```

The maximum age of the Auth.js issued JWT in seconds.

##### Default[](#default-1)

```
30 * 24 * 60 * 60 // 30 days
```

#### salt[](#salt-2)

```
salt: string;
```

Used in combination with `secret`, to derive the encryption secret for JWTs.

#### secret[](#secret-2)

```
secret: string | string[];
```

Used in combination with `salt`, to derive the encryption secret for JWTs.

#### token?[](#token-1)

```
optional token: Payload;
```

The JWT payload.

* * *

## JWTOptions[](#jwtoptions)

### Properties[](#properties-5)

#### decode()[](#decode-1)

```
decode: (params) => Awaitable<null | JWT>;
```

Override this method to control the Auth.js issued JWT decoding.

##### Parameters[](#parameters-1)

Parameter

Type

`params`

[`JWTDecodeParams`](jwt#jwtdecodeparams)

##### Returns[](#returns-1)

[`Awaitable`](../core/types#awaitablet)<`null` | [`JWT`](jwt#jwt)\>

#### encode()[](#encode)

```
encode: (params) => Awaitable<string>;
```

Override this method to control the Auth.js issued JWT encoding.

##### Parameters[](#parameters-2)

Parameter

Type

`params`

[`JWTEncodeParams`](jwt#jwtencodeparamspayload)

##### Returns[](#returns-2)

[`Awaitable`](../core/types#awaitablet)<`string`\>

#### maxAge[](#maxage-1)

```
maxAge: number;
```

The maximum age of the Auth.js issued JWT in seconds.

##### Default[](#default-2)

```
30 * 24 * 60 * 60 // 30 days
```

* * *

## decode()[](#decode-2)

```
function decode<Payload>(params): Promise<null | Payload>
```

Decodes an Auth.js issued JWT.

### Type Parameters[](#type-parameters-2)

Type Parameter

Default type

`Payload`

[`JWT`](jwt#jwt)

### Parameters[](#parameters-3)

Parameter

Type

`params`

[`JWTDecodeParams`](jwt#jwtdecodeparams)

### Returns[](#returns-3)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`null` | `Payload`\>

* * *

## encode()[](#encode-1)

```
function encode<Payload>(params): Promise<string>
```

Issues a JWT. By default, the JWT is encrypted using “A256CBC-HS512”.

### Type Parameters[](#type-parameters-3)

Type Parameter

Default type

`Payload`

[`JWT`](jwt#jwt)

### Parameters[](#parameters-4)

Parameter

Type

`params`

[`JWTEncodeParams`](jwt#jwtencodeparamspayload)<`Payload`\>

### Returns[](#returns-4)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`string`\>

* * *

## getToken()[](#gettoken)

```
function getToken<R>(params): Promise<R extends true ? string : null | JWT>
```

Takes an Auth.js request (`req`) and returns either the Auth.js issued JWT’s payload, or the raw JWT string. We look for the JWT in the either the cookies, or the `Authorization` header.

### Type Parameters[](#type-parameters-4)

Type Parameter

Default type

`R` _extends_ `boolean`

`false`

### Parameters[](#parameters-5)

Parameter

Type

`params`

[`GetTokenParams`](jwt#gettokenparamsr)<`R`\>

### Returns[](#returns-5)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`R` _extends_ `true` ? `string` : `null` | [`JWT`](jwt#jwt)\>

[adapters](/reference/nextjs/adapters "adapters")[middleware](/reference/nextjs/middleware "middleware")
