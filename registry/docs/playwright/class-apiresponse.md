On this page

[APIResponse](/docs/api/class-apiresponse "APIResponse") class represents responses returned by [apiRequestContext.get()](/docs/api/class-apirequestcontext#api-request-context-get) and similar methods.

* * *

## Methods[​](#methods "Direct link to Methods")

### body[​](#api-response-body "Direct link to body")

Added in: v1.16 apiResponse.body

Returns the buffer with response body.

**Usage**

```
await apiResponse.body();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer")\>[#](#api-response-body-return)

* * *

### dispose[​](#api-response-dispose "Direct link to dispose")

Added in: v1.16 apiResponse.dispose

Disposes the body of this response. If not called then the body will stay in memory until the context closes.

**Usage**

```
await apiResponse.dispose();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#api-response-dispose-return)

* * *

### headers[​](#api-response-headers "Direct link to headers")

Added in: v1.16 apiResponse.headers

An object with all the response HTTP headers associated with this response.

**Usage**

```
apiResponse.headers();
```

**Returns**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#api-response-headers-return)

* * *

### headersArray[​](#api-response-headers-array "Direct link to headersArray")

Added in: v1.16 apiResponse.headersArray

An array with all the response HTTP headers associated with this response. Header names are not lower-cased. Headers with multiple entries, such as `Set-Cookie`, appear in the array multiple times.

**Usage**

```
apiResponse.headersArray();
```

**Returns**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#api-response-headers-array-return)
    -   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        Name of the header.
        
    -   `value` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        Value of the header.
        

* * *

### json[​](#api-response-json "Direct link to json")

Added in: v1.16 apiResponse.json

Returns the JSON representation of response body.

This method will throw if the response body is not parsable via `JSON.parse`.

**Usage**

```
await apiResponse.json();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Serializable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable")\>[#](#api-response-json-return)

* * *

### ok[​](#api-response-ok "Direct link to ok")

Added in: v1.16 apiResponse.ok

Contains a boolean stating whether the response was successful (status in the range 200-299) or not.

**Usage**

```
apiResponse.ok();
```

**Returns**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#api-response-ok-return)

* * *

### status[​](#api-response-status "Direct link to status")

Added in: v1.16 apiResponse.status

Contains the status code of the response (e.g., 200 for a success).

**Usage**

```
apiResponse.status();
```

**Returns**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")[#](#api-response-status-return)

* * *

### statusText[​](#api-response-status-text "Direct link to statusText")

Added in: v1.16 apiResponse.statusText

Contains the status text of the response (e.g. usually an "OK" for a success).

**Usage**

```
apiResponse.statusText();
```

**Returns**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#api-response-status-text-return)

* * *

### text[​](#api-response-text "Direct link to text")

Added in: v1.16 apiResponse.text

Returns the text representation of response body.

**Usage**

```
await apiResponse.text();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#api-response-text-return)

* * *

### url[​](#api-response-url "Direct link to url")

Added in: v1.16 apiResponse.url

Contains the URL of the response.

**Usage**

```
apiResponse.url();
```

**Returns**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#api-response-url-return)
