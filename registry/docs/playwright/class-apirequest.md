On this page

Exposes API that can be used for the Web API testing. This class is used for creating [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") instance which in turn can be used for sending web requests. An instance of this class can be obtained via [playwright.request](/docs/api/class-playwright#playwright-request). For more information see [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext").

* * *

## Methods[​](#methods "Direct link to Methods")

### newContext[​](#api-request-new-context "Direct link to newContext")

Added in: v1.16 apiRequest.newContext

Creates new instances of [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext").

**Usage**

```
await apiRequest.newContext();await apiRequest.newContext(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `baseURL` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#api-request-new-context-option-base-url)
        
        Methods like [apiRequestContext.get()](/docs/api/class-apirequestcontext#api-request-context-get) take the base URL into consideration by using the [`URL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) constructor for building the corresponding URL. Examples:
        
        -   baseURL: `http://localhost:3000` and sending request to `/bar.html` results in `http://localhost:3000/bar.html`
        -   baseURL: `http://localhost:3000/foo/` and sending request to `./bar.html` results in `http://localhost:3000/foo/bar.html`
        -   baseURL: `http://localhost:3000/foo` (without trailing slash) and navigating to `./bar.html` results in `http://localhost:3000/bar.html`
    -   `clientCertificates` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\> _(optional)_ Added in: 1.46[#](#api-request-new-context-option-client-certificates)
        
        -   `origin` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
            Exact origin that the certificate is valid for. Origin includes `https` protocol, a hostname and optionally a port.
            
        -   `certPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Path to the file with the certificate in PEM format.
            
        -   `cert` [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer") _(optional)_
            
            Direct value of the certificate in PEM format.
            
        -   `keyPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Path to the file with the private key in PEM format.
            
        -   `key` [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer") _(optional)_
            
            Direct value of the private key in PEM format.
            
        -   `pfxPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Path to the PFX or PKCS12 encoded private key and certificate chain.
            
        -   `pfx` [Buffer](https://nodejs.org/api/buffer.html#buffer_class_buffer "Buffer") _(optional)_
            
            Direct value of the PFX or PKCS12 encoded private key and certificate chain.
            
        -   `passphrase` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Passphrase for the private key (PEM or PFX).
            
        
        TLS Client Authentication allows the server to request a client certificate and verify it.
        
        **Details**
        
        An array of client certificates to be used. Each certificate object must have either both `certPath` and `keyPath`, a single `pfxPath`, or their corresponding direct value equivalents (`cert` and `key`, or `pfx`). Optionally, `passphrase` property should be provided if the certificate is encrypted. The `origin` property should be provided with an exact match to the request origin that the certificate is valid for.
        
        Client certificate authentication is only active when at least one client certificate is provided. If you want to reject all client certificates sent by the server, you need to provide a client certificate with an `origin` that does not match any of the domains you plan to visit.
        
        note
        
        When using WebKit on macOS, accessing `localhost` will not pick up client certificates. You can make it work by replacing `localhost` with `local.playwright`.
        
    -   `extraHTTPHeaders` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#api-request-new-context-option-extra-http-headers)
        
        An object containing additional HTTP headers to be sent with every request. Defaults to none.
        
    -   `failOnStatusCode` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.51[#](#api-request-new-context-option-fail-on-status-code)
        
        Whether to throw on response codes other than 2xx and 3xx. By default response object is returned for all status codes.
        
    -   `httpCredentials` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#api-request-new-context-option-http-credentials)
        
        -   `username` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `password` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `origin` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Restrain sending http credentials on specific origin (scheme://host:port).
            
        -   `send` "unauthorized" | "always" _(optional)_
            
            This option only applies to the requests sent from corresponding [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") and does not affect requests sent from the browser. `'always'` - `Authorization` header with basic authentication credentials will be sent with the each API request. `'unauthorized` - the credentials are only sent when 401 (Unauthorized) response with `WWW-Authenticate` header is received. Defaults to `'unauthorized'`.
            
        
        Credentials for [HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication). If no origin is specified, the username and password are sent to any servers upon unauthorized responses.
        
    -   `ignoreHTTPSErrors` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#api-request-new-context-option-ignore-https-errors)
        
        Whether to ignore HTTPS errors when sending network requests. Defaults to `false`.
        
    -   `maxRedirects` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.52[#](#api-request-new-context-option-max-redirects)
        
        Maximum number of request redirects that will be followed automatically. An error will be thrown if the number is exceeded. Defaults to `20`. Pass `0` to not follow redirects. This can be overwritten for each request individually.
        
    -   `proxy` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#api-request-new-context-option-proxy)
        
        -   `server` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
            Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example `http://myproxy.com:3128` or `socks5://myproxy.com:3128`. Short form `myproxy.com:3128` is considered an HTTP proxy.
            
        -   `bypass` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional comma-separated domains to bypass proxy, for example `".com, chromium.org, .domain.com"`.
            
        -   `username` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional username to use if HTTP proxy requires authentication.
            
        -   `password` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
            
            Optional password to use if HTTP proxy requires authentication.
            
        
        Network proxy settings.
        
    -   `storageState` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#api-request-new-context-option-storage-state)
        
        -   `cookies` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>
            
            -   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                
            -   `value` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                
            -   `domain` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                
            -   `path` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                
            -   `expires` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
                
                Unix time in seconds.
                
            -   `httpOnly` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")
                
            -   `secure` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")
                
            -   `sameSite` "Strict" | "Lax" | "None"
                
        -   `origins` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>
            
            -   `origin` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                
            -   `localStorage` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>
                
                -   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                    
                -   `value` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
                    
        
        Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via [browserContext.storageState()](/docs/api/class-browsercontext#browser-context-storage-state) or [apiRequestContext.storageState()](/docs/api/class-apirequestcontext#api-request-context-storage-state). Either a path to the file with saved storage, or the value returned by one of [browserContext.storageState()](/docs/api/class-browsercontext#browser-context-storage-state) or [apiRequestContext.storageState()](/docs/api/class-apirequestcontext#api-request-context-storage-state) methods.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#api-request-new-context-option-timeout)
        
        Maximum time in milliseconds to wait for the response. Defaults to `30000` (30 seconds). Pass `0` to disable timeout.
        
    -   `userAgent` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#api-request-new-context-option-user-agent)
        
        Specific user agent to use in this context.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext")\>[#](#api-request-new-context-return)
