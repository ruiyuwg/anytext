[API reference](/reference/overview "API reference")[@auth/sveltekit](/reference/sveltekit "@auth/sveltekit")actions

# actions

## auth()[](#auth)

```
function auth(event, config): Promise<null | Session>
```

### Parameters[](#parameters)

Parameter

Type

`event`

`RequestEvent`

`config`

[`SvelteKitAuthConfig`](types#sveltekitauthconfig)

### Returns[](#returns)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`null` | [`Session`](../sveltekit#session)\>

* * *

## signIn()[](#signin)

```
function signIn(
   provider, 
   options, 
   authorizationParams, 
   config, 
event): Promise<any>
```

### Parameters[](#parameters-1)

Parameter

Type

`provider`

`undefined` | [`ProviderId`](../core/providers#providerid)

`options`

| `undefined` | [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) | { `redirect`: `boolean`; `redirectTo`: `string`; } & [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

`authorizationParams`

| `undefined` | `string` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `string`\> | [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) | `string`\[\]\[\]

`config`

[`SvelteKitAuthConfig`](types#sveltekitauthconfig)

`event`

`RequestEvent`

### Returns[](#returns-1)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`any`\>

* * *

## signOut()[](#signout)

```
function signOut(
   options, 
   config, 
event): Promise<any>
```

### Parameters[](#parameters-2)

Parameter

Type

`options`

| `undefined` | { `redirect`: `boolean`; `redirectTo`: `string`; }

`config`

[`SvelteKitAuthConfig`](types#sveltekitauthconfig)

`event`

`RequestEvent`

### Returns[](#returns-2)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`any`\>

[@auth/sveltekit](/reference/sveltekit "@auth/sveltekit")[client](/reference/sveltekit/client "client")
