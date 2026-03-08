On this page

[Response](/docs/api/class-response "Response") class represents responses which are received by page.

* * *

## Methods[​](#methods "Direct link to Methods")

### allHeaders[​](#response-all-headers "Direct link to allHeaders")

Added in: v1.15 response.allHeaders

An object with all the response HTTP headers associated with this response.

**Usage**

```
await response.allHeaders();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>>[#](#response-all-headers-return)

* * *

### body[​](#response-body "Direct link to body")

Added before v1.9 response.body

Returns the buffer with response body.

**Usage**

```
await response.body();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer")\>[#](#response-body-return)

* * *

### finished[​](#response-finished "Direct link to finished")

Added before v1.9 response.finished

Waits for this response to finish, returns always `null`.

**Usage**

```
await response.finished();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Error](https://nodejs.org/api/errors.html#errors_class_error "Error")\>[#](#response-finished-return)

* * *

### frame[​](#response-frame "Direct link to frame")

Added before v1.9 response.frame

Returns the [Frame](/docs/api/class-frame "Frame") that initiated this response.

**Usage**

```
response.frame();
```

**Returns**

-   [Frame](/docs/api/class-frame "Frame")[#](#response-frame-return)

* * *

### fromServiceWorker[​](#response-from-service-worker "Direct link to fromServiceWorker")

Added in: v1.23 response.fromServiceWorker

Indicates whether this Response was fulfilled by a Service Worker's Fetch Handler (i.e. via [FetchEvent.respondWith](https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith)).

**Usage**

```
response.fromServiceWorker();
```

**Returns**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#response-from-service-worker-return)

* * *

### headerValue[​](#response-header-value "Direct link to headerValue")

Added in: v1.15 response.headerValue

Returns the value of the header matching the name. The name is case-insensitive. If multiple headers have the same name (except `set-cookie`), they are returned as a list separated by `,` . For `set-cookie`, the `\n` separator is used. If no headers are found, `null` is returned.

**Usage**

```
await response.headerValue(name);
```

**Arguments**

-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#response-header-value-option-name)
    
    Name of the header.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#response-header-value-return)

* * *

### headerValues[​](#response-header-values "Direct link to headerValues")

Added in: v1.15 response.headerValues

Returns all values of the headers matching the name, for example `set-cookie`. The name is case-insensitive.

**Usage**

```
await response.headerValues(name);
```

**Arguments**

-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#response-header-values-option-name)
    
    Name of the header.
    

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>>[#](#response-header-values-return)

* * *

### headers[​](#response-headers "Direct link to headers")

Added before v1.9 response.headers

An object with the response HTTP headers. The header names are lower-cased. Note that this method does not return security-related headers, including cookie-related ones. You can use [response.allHeaders()](/docs/api/class-response#response-all-headers) for complete list of headers that include `cookie` information.

**Usage**

```
response.headers();
```

**Returns**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#response-headers-return)

* * *

### headersArray[​](#response-headers-array "Direct link to headersArray")

Added in: v1.15 response.headersArray

An array with all the request HTTP headers associated with this response. Unlike [response.allHeaders()](/docs/api/class-response#response-all-headers), header names are NOT lower-cased. Headers with multiple entries, such as `Set-Cookie`, appear in the array multiple times.

**Usage**

```
await response.headersArray();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>>[#](#response-headers-array-return)
    -   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        Name of the header.
        
    -   `value` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        Value of the header.
        

* * *

### json[​](#response-json "Direct link to json")

Added before v1.9 response.json

Returns the JSON representation of response body.

This method will throw if the response body is not parsable via `JSON.parse`.

**Usage**

```
await response.json();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Serializable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable")\>[#](#response-json-return)

* * *

### ok[​](#response-ok "Direct link to ok")

Added before v1.9 response.ok

Contains a boolean stating whether the response was successful (status in the range 200-299) or not.

**Usage**

```
response.ok();
```

**Returns**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#response-ok-return)

* * *

### request[​](#response-request "Direct link to request")

Added before v1.9 response.request

Returns the matching [Request](/docs/api/class-request "Request") object.

**Usage**

```
response.request();
```

**Returns**

-   [Request](/docs/api/class-request "Request")[#](#response-request-return)

* * *

### securityDetails[​](#response-security-details "Direct link to securityDetails")

Added in: v1.13 response.securityDetails

Returns SSL and other security information.

**Usage**

```
await response.securityDetails();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#response-security-details-return)
    -   `issuer` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Common Name component of the Issuer field. from the certificate. This should only be used for informational purposes. Optional.
        
    -   `protocol` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        The specific TLS protocol used. (e.g. `TLS 1.3`). Optional.
        
    -   `subjectName` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Common Name component of the Subject field from the certificate. This should only be used for informational purposes. Optional.
        
    -   `validFrom` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
        
        Unix timestamp (in seconds) specifying when this cert becomes valid. Optional.
        
    -   `validTo` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
        
        Unix timestamp (in seconds) specifying when this cert becomes invalid. Optional.
        

* * *

### serverAddr[​](#response-server-addr "Direct link to serverAddr")

Added in: v1.13 response.serverAddr

Returns the IP address and port of the server.

**Usage**

```
await response.serverAddr();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "null") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#response-server-addr-return)
    -   `ipAddress` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
        IPv4 or IPV6 address of the server.
        
    -   `port` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        

* * *

### status[​](#response-status "Direct link to status")

Added before v1.9 response.status

Contains the status code of the response (e.g., 200 for a success).

**Usage**

```
response.status();
```

**Returns**

-   [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")[#](#response-status-return)

* * *

### statusText[​](#response-status-text "Direct link to statusText")

Added before v1.9 response.statusText

Contains the status text of the response (e.g. usually an "OK" for a success).

**Usage**

```
response.statusText();
```

**Returns**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#response-status-text-return)

* * *

### text[​](#response-text "Direct link to text")

Added before v1.9 response.text

Returns the text representation of response body.

**Usage**

```
await response.text();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\>[#](#response-text-return)

* * *

### url[​](#response-url "Direct link to url")

Added before v1.9 response.url

Contains the URL of the response.

**Usage**

```
response.url();
```

**Returns**

-   [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#response-url-return)
