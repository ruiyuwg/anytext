[API reference](/reference/overview "API reference")[@auth/express](/reference/express "@auth/express")[lib](/reference/express/lib "lib")http-api-adapters

# lib/http-api-adapters

## encodeUrlEncoded()[](#encodeurlencoded)

```
function encodeUrlEncoded(object): string
```

Encodes an object as url-encoded string.

### Parameters[](#parameters)

Parameter

Type

`object`

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Returns[](#returns)

`string`

* * *

## toExpressResponse()[](#toexpressresponse)

```
function toExpressResponse(response, res): Promise<void>
```

Adapts a Web Response to an Express Response, invoking appropriate Express response methods to handle the response.

### Parameters[](#parameters-1)

Parameter

Type

`response`

[`Response`](https://developer.mozilla.org/docs/Web/API/Response)

`res`

`Response`

### Returns[](#returns-1)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`\>

* * *

## toWebRequest()[](#towebrequest)

```
function toWebRequest(req): Request
```

Adapts an Express Request to a Web Request, returning the Web Request.

### Parameters[](#parameters-2)

Parameter

Type

`req`

`Request`

### Returns[](#returns-2)

[`Request`](https://developer.mozilla.org/docs/Web/API/Request)

[lib](/reference/express/lib "lib")[@auth/qwik](/reference/qwik "@auth/qwik")
