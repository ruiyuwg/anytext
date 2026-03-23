The [Android SDK integration flow](/help/en/httpdns/latest/sdk-forandroid) document describes the complete flow for importing and configuring the Android SDK, parsing IP addresses, applying the SDK to a network library, and authenticating the integration. This topic describes a specific solution for integrating HTTPDNS in an Android WebView scenario.

## 1\. Background

Alibaba Cloud HTTPDNS is an effective way to avoid DNS hijacking. When initiating network requests, you can bypass the default DNS resolution of the system by calling the API provided by HTTPDNS, thereby reducing or eliminating the risk of DNS hijacking.

In web pages loaded by WebView, when the web page initiates a network request, we can intercept the request within WebView and let the native layer (App) execute the actual network request. During this process, you can use the resolution results provided by HTTPDNS to replace system DNS resolution to prevent DNS hijacking.

Currently, the mainstream network request library on Android is **OkHttp**, so this document primarily focuses on OkHttp implementation.

**Important**

-   This document is a reference solution for accessing HTTPDNS in the Android WebView scenario. The related code provided is reference code, not the code that can be directly used in the online production environment. We recommend that you carefully read this document and make a reasonable assessment before implementation.
    
-   Android systems vary with service providers. Therefore, we recommend that you first implement the solution described in this topic in a test environment and check whether exceptions occur. If you have any questions, provide feedback to us through [Technical support](/help/en/httpdns/latest/technical-support#title-2xq-ads-6bh), so that we can optimize in time.
    
-   This document only explains how to use the IP resolved by HTTPDNS to make requests in the WebView scenario. To understand the resolution service of HTTPDNS itself, please first check [Android SDK integration](/help/en/httpdns/latest/sdk-forandroid#title-i46-3lz-9x9).
    

## **2\.** Limitations and impacts of WebView only intercepting GET requests

In Android's WebView, through the `WebViewClient.shouldInterceptRequest()` method, we can only obtain detailed information about **GET** requests. For other request methods such as **POST**, the `body` is not provided to developers, so it is not possible to fully intercept and replace with HTTPDNS resolution.

However, this does not mean that accessing HTTPDNS is meaningless, mainly for the following reasons:

1.  **Most web static resources use GET requests** Generally, static resources required by web pages (such as images, scripts, style sheets, etc.) are almost all obtained through GET requests. By intercepting these GET requests and using HTTPDNS, the main resource loading process can be covered, greatly reducing the risk of being hijacked.
    
2.  **A considerable proportion of API calls also use GET** Many interfaces (especially query-type or cacheable interfaces) use GET requests. Therefore, intercepting these requests can also avoid DNS hijacking through HTTPDNS.
    
3.  **Resources are mostly hosted on CDN, HTTPDNS improves nearby scheduling** Most static resources are usually distributed on CDN nodes, and the ability of CDN to access nearby depends on the accuracy of domain name resolution. Through HTTPDNS, you can bypass system DNS hijacking to ensure that domain name resolution points to the optimal CDN node, allowing users to obtain better access speed and experience.
    
4.  **Intercepting only GET requests can also avoid most hijacking scenarios** DNS hijacking often targets popular domain names or massive static resource domain names, and access to these domain names is almost all GET requests. Even if HTTPDNS can currently only be used on GET requests, it can cover the vast majority of traffic, achieving 80% or even higher protection.
    

In summary, although at the WebView level, only GET requests can currently be intercepted and rewritten, in actual business, this method usually covers the main traffic and achieves more accurate nearby scheduling in CDN scenarios, thus playing a significant role in improving both security and performance.

## 3\. Demo code

`HTTPDNS+WebView+OkHttp` best practices complete code can be found in [WebView+HTTPDNS+OkHttp Android Demo](https://github.com/aliyun/alicloud-android-demo/blob/master/httpdns_android_demo/src/main/java/com/alibaba/httpdns/android/demo/practice/webview/WebViewOkHttpCaseFragment.kt).

## **4\. Implementation description**

The following steps show how to access HTTPDNS based on **OkHttp** and **WebView**, and intercept and process requests initiated by web pages in the native layer.

### **4.1** OkHttp **configuration**

#### **4.1.1 Custom DNS resolution**

OkHttp provides the interface `Dns`, which allows callers to customize DNS resolution. You can integrate HTTPDNS into this API to implement custom DNS resolution. Use the following sample code:

Kotlin

```
OkHttpClient.Builder()
        // Customize the DNS resolution logic.
        .dns(object : Dns {
            override fun lookup(hostname: String): List<InetAddress> {
                val inetAddresses = mutableListOf<InetAddress>()
                HttpDns.getService(accountId)
                    .getHttpDnsResultForHostSyncNonBlocking(hostname, RequestIpType.auto)?.apply {
                    if (!ipv6s.isNullOrEmpty()) {
                        for (i in ipv6s.indices) {
                            inetAddresses.addAll(
                                InetAddress.getAllByName(ipv6s[i]).toList()
                            )
                        }
                    } else if (!ips.isNullOrEmpty()) {
                        for (i in ips.indices) {
                            inetAddresses.addAll(
                                InetAddress.getAllByName(ips[i]).toList()
                            )
                        }
                    }
                }

                if (inetAddresses.isEmpty()) {
                    inetAddresses.addAll(Dns.SYSTEM.lookup(hostname))
                }
                return inetAddresses
            }
        })
        .build()
```

Java

```
new OkHttpClient.Builder()
        // Customize DNS resolution logic.
        .dns(new Dns() {
            @NonNull
            @Override
            public List<InetAddress> lookup(@NonNull String hostname) throws UnknownHostException {
                ArrayList<InetAddress> inetAddresses = new ArrayList<>();
                HTTPDNSResult result = HttpDns.getService(accountiD)
                        .getHttpDnsResultForHostSync(hostname, RequestIpType.auto);
                if (result != null) {
                    if (result.getIpv6s() != null && result.getIpv6s().length > 0) {
                        for (int i = 0; i < result.getIpv6s().length; i++) {
                            InetAddress[] ipV6InetAddresses = InetAddress.getAllByName(result.getIpv6s()[i]);
                            inetAddresses.addAll(Arrays.asList(ipV6InetAddresses));
                        }

                    } else if (result.getIps() != null && result.getIps().length > 0) {
                        for (int i = 0; i < result.getIps().length; i++) {
                            InetAddress[] ipV4InetAddresses = InetAddress.getAllByName(result.getIps()[i]);
                            inetAddresses.addAll(Arrays.asList(ipV4InetAddresses));
                        }
                    }
                }
                if (inetAddresses.isEmpty()) {
                    inetAddresses.addAll(Dns.SYSTEM.lookup(hostname));
                }
                return inetAddresses;
            }
        })
        .build();
```

**Note**

We recommend that you use local DNS as the underlying logic for domain name resolution when the HTTPDNS domain name resolution fails.

#### **4.1.2 Disable redirection**

In this solution, redirection is not handled at the network layer. Instead, WebView handles redirection based on its default behavior. This approach prevents exceptions, such as cookie and resource loading errors, in redirection scenarios. The following sample code shows the implementation:

Kotlin

```
OkHttpClient.Builder()
    .followRedirects(false)      // Disable HTTP redirection.
    .followSslRedirects(false)   // Disable HTTPS redirection.
    .build()
```

Java

```
new OkHttpClient.Builder()
    .followRedirects(false)      // Disable HTTP redirection.
    .followSslRedirects(false)   // Disable HTTPS redirection.
    .build();
```

**Note**

In untrusted network environments, redirection requests can still be tampered with. You must implement security protection on the client side.

### **4.2 WebView intercepts network requests**

#### **4.2.1 Implement WebViewClient**

`WebView` provides the `WebViewClient` interface. By overriding the `shouldInterceptRequest()` method, you can intercept resource loading requests from web pages. Through this method, you can change the requests initiated by web pages to use the **native layer (OkHttp)** to request data, and then return the results to WebView. Sample code:

Kotlin

```
webview.webViewClient = object : WebViewClient() {
    override fun shouldInterceptRequest(
        view: WebView?,
        request: WebResourceRequest?
    ): WebResourceResponse? {
        if (shouldIntercept(request)) {
            return getResponseByOkHttp(request)
        }
        return super.shouldInterceptRequest(view, request)
    }
}
```

Java

```
webview.setWebViewClient(new WebViewClient(){
    @Nullable
    @Override
    public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
        if (shouldIntercept(request)) {
            return getResponseByOkHttp(request);
        }
        return super.shouldInterceptRequest(view, request);
    }
});
```

#### **4.2.2 Determine whether to intercept requests**

In the `shouldIntercept()` method, interception is only done in the following cases:

-   Only intercept requests with `http` or `https` protocols. Other protocols are not intercepted and are still handled by `WebView` itself.
    
-   Only intercept `GET` requests (for reasons, see above: "Limitations and impacts of WebView only intercepting GET requests").
    

Sample code:

Kotlin

```
private fun shouldIntercept(webResourceRequest: WebResourceRequest?): Boolean {
    if (webResourceRequest == null) {
        return false
    }
    val url = webResourceRequest.url ?: return false
    // Non-HTTP requests are not intercepted.
    if ("https" != url.scheme && "http" != url.scheme) {
        return false
    }
    // Only GET requests are intercepted.
    if ("GET".equals(webResourceRequest.method, true)) {
        return true
    }
    return false
}
```

Java

```
private boolean shouldIntercept(WebResourceRequest request) {
    if (request == null || request.getUrl() == null) {
        return false;
    }
    // Non-HTTP requests are not intercepted.
    if (!"http".equals(request.getUrl().getScheme()) && !"https".equals(request.getUrl().getScheme())) {
        return false;
    }
    // Only GET requests are intercepted.
    if ("GET".equalsIgnoreCase(request.getMethod())) {
        return true;
    }

    return false;
}
```

#### **4.2.3 Use** OkHttp **for network requests**

-   Use OkHttp to initiate network requests based on request URL, Header, and other information.
    
-   Return the response results to WebView after encapsulating them through `WebResourceResponse`.
    

Sample code:

Kotlin

```
private fun getResponseByOkHttp(webResourceRequest: WebResourceRequest?): WebResourceResponse? {
    if (webResourceRequest == null) {return null}
    try {
        val url = webResourceRequest.url.toString()
        val requestBuilder =
            Request.Builder().url(url).method(webResourceRequest.method, null)
        val requestHeaders = webResourceRequest.requestHeaders
        if (!requestHeaders.isNullOrEmpty()) {
            requestHeaders.forEach {
                requestBuilder.addHeader(it.key, it.value)
            }
        }
        val response = okHttpClient.newCall(requestBuilder.build()).execute()
        val code = response.code
        if (code != 200) {
            return null
        }
        val body = response.body
        if (body != null) {
            val contentType = body.contentType()
            val encoding = contentType?.charset()
            val mediaType = contentType?.toString()
            var mimeType = "text/plain"
            if (!TextUtils.isEmpty(mediaType)) {
                val mediaTypeElements = mediaType?.split(";")
                if (!mediaTypeElements.isNullOrEmpty()) {
                    mimeType = mediaTypeElements[0]
                }
            }
            val responseHeaders = mutableMapOf<String, String>()
            for (header in response.headers) {
                responseHeaders[header.first] = header.second
            }
            var message = response.message
            if (message.isBlank()) {
                message = "OK"
            }
            val resourceResponse =
                WebResourceResponse(mimeType, encoding?.name(), body.byteStream())
            resourceResponse.responseHeaders = responseHeaders
            resourceResponse.setStatusCodeAndReasonPhrase(code, message)
            return resourceResponse
        }
    } catch (e: Throwable) {
        e.printStackTrace()
    }
    return null
}
```

Java

```
private WebResourceResponse getResponseByOkHttp(WebResourceRequest request) {
    try {
        String url = request.getUrl().toString();
        Request.Builder requestBuilder = new Request.Builder()
                .url(url)
                .method(request.getMethod(), null);
        Map<String, String> requestHeaders = request.getRequestHeaders();
        if (requestHeaders != null) {
            for (Map.Entry<String, String> entry : requestHeaders.entrySet()) {
                requestBuilder.addHeader(entry.getKey(), entry.getValue());
            }
        }
        Response response = okHttpClient.newCall(requestBuilder.build()).execute();
        if (200 != response.code()) {
            return null;
        }
        ResponseBody body = response.body();
        if (body != null) {
            MediaType contentType = body.contentType();
            if (contentType != null) {
                Charset encoding = contentType.charset();
                String mediaType = contentType.toString();
                String mimeType = "text/plain";
                if (!TextUtils.isEmpty(mediaType)) {
                    String[] mediaTypeElements = mediaType.split(";");
                    if (mediaTypeElements.length > 0) {
                       mimeType = mediaTypeElements[0];
                    }
                }
                Map<String, String> responseHeaders = new HashMap<>();
                for (String key : response.headers().names()) {
                    responseHeaders.put(key, response.header(key));
                }
                String message = response.message();
                if (TextUtils.isEmpty(message)) {
                    message = "OK";
                }
                WebResourceResponse resourceResponse = new WebResourceResponse(mimeType, encoding.name(), body.byteStream());
                resourceResponse.setResponseHeaders(responseHeaders);
                resourceResponse.setStatusCodeAndReasonPhrase(response.code(), message);
                return resourceResponse;
            }

        }
    } catch (Exception e) {
        e.printStackTrace();
    }
    return null;
}
```

## 5\. Verification

After the integration is complete, see the [Verify a successful network library integration](/help/en/httpdns/latest/sdk-forandroid#ce54349ee3mo2) document and use methods such as hijack impersonation or fault injection testing to verify that the integration is successful.

## 5\. Summary

-   **HTTPDNS can effectively reduce the risk of DNS hijacking**. In WebView, by intercepting requests and using native network libraries (OkHttp) combined with HTTPDNS, the security of domain name resolution can be significantly improved.
    
-   **Due to WebView mechanism limitations**, interception can only be implemented on GET requests. But in actual business, this has already covered most scenarios such as loading static resources and common GET interfaces.
    
-   **We strongly recommend** that developers implement the solution described in this topic in a test environment, pay attention to online exceptions and adaptation situations, and make further optimization or customized processing according to business needs.
    

If you have more questions or need technical support, provide feedback to us through [Technical support](/help/en/httpdns/latest/technical-support#title-2xq-ads-6bh). We will optimize the experience and compatibility of HTTPDNS.
