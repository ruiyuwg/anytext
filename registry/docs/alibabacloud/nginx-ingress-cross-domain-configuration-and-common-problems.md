When a web page served from one origin tries to access a service in an Container Service for Kubernetes (ACK) cluster, the browser's same-origin policy can block the request and show a `blocked by CORS policy` error. The rule kicks in when domain, protocol, or port differ — for example, a script on `https://example.com` attempting to call `https://api.example.com.` Fix the error by adding CORS-related annotations to your NGINX Ingress so the browser will accept the cross-origin responses, and explicitly configure allowed origins, methods, and headers instead of using overly permissive settings.

## **How it works**

CORS defines two types of requests: simple and preflighted. Simple requests are sent directly to the server. In contrast, preflighted requests require the browser to first send a preliminary `OPTIONS` request. This preflight serves as a check to ensure the server will accept the actual request before it is sent.

**A request is preflighted if any of the following conditions are met:**

-   It uses a method other than `GET`, `HEAD`, or `POST`.
    
-   It is a `POST` request with a `Content-Type` other than `text/plain`, `application/x-www-form-urlencoded`, or `multipart/form-data`.
    
-   It includes custom headers.
    

**When a browser sends a simple request to NGINX Ingress:**

1.  The browser adds an `Origin` header to the request, indicating its source (for example, `Origin: https://example.com`).
    
2.  The NGINX Ingress controller compares the request's HTTP method and `Origin` header value with the CORS configuration. If they match, the controller includes the `Access-Control-Allow-Origin` header in the response. This header's value mirrors the `Origin` header from the request.
    
3.  The browser receives the response and checks if the `Access-Control-Allow-Origin` header's value matches the page's origin. If they match, the request succeeds. If they do not match or the header is missing, the browser blocks the request.
    

**A preflighted request follows these steps before the actual request is sent:**

1.  The browser sends an `OPTIONS` request that includes the method (`Access-Control-Request-Method`) and headers (`Access-Control-Request-Headers`) of the intended main request.
    
2.  NGINX Ingress checks if the CORS configuration permits the method and headers in the `OPTIONS` request. If the requested method or any of the headers are not in the list of allowed values, the preflight request fails, and the browser does not send the main request.
    

## **Procedure**

### **Step 1: Configure CORS**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, choose **Clusters**.
    
2.  On the **Clusters** page, click the cluster name. In the navigation pane on the left, choose **Network** > **Ingresses**.
    
3.  On the **Ingresses** page, find the Ingress and click **Edit YAML** in the **Actions** column.
    
4.  Configure the NGINX Ingress based on your use case. For more information, see [Common CORS annotations in NGINX Ingress Controller](#f931c31af7yvl).
    

### **Cross-origin requests with credentials**

This applies to common frontend-backend separation use cases. The frontend application (`https://example.com` or `https://app.example.com`) needs to access the backend API (`https://api.example.com`) with credentials, such as cookies or an `Authorization` header.

Add the following `annotations` to your Ingress YAML file. This example enables cross-origin access for `GET`, `POST`, and other methods from the `https://example.com` and `https://app.example.com` origins.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-ingress-secure
  annotations:
    # Enable CORS.
    nginx.ingress.kubernetes.io/enable-cors: "true"
    # Allow requests with credentials, such as cookies and Authorization headers.
    nginx.ingress.kubernetes.io/cors-allow-credentials: "true"
    # Specify the allowed origin domains for cross-origin requests. Do not use "*" in credentialed mode.
    nginx.ingress.kubernetes.io/cors-allow-origin: "https://example.com, https://app.example.com"
    # Allowed HTTP methods.
    nginx.ingress.kubernetes.io/cors-allow-methods: "GET, POST, PUT, DELETE, OPTIONS"
    # Allowed request headers. This must include custom headers required by your service, such as Authorization.
    nginx.ingress.kubernetes.io/cors-allow-headers: "Content-Type, Authorization"
    # Specify which custom response headers are exposed to the frontend.
    nginx.ingress.kubernetes.io/cors-expose-headers: "X-Request-ID, Content-Length, Content-Range" 
    # Set the maximum age (in seconds) for the preflight request cache (e.g., 86400 for 24 hours).	
    nginx.ingress.kubernetes.io/cors-max-age: "86400"
...
```

### **Cross-origin requests without credentials**

This applies to public, read-only requests that do not require authentication.

Add the following `annotations` configuration to your YAML file.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-ingress-secure
  annotations:
    nginx.ingress.kubernetes.io/enable-cors: "true"
    nginx.ingress.kubernetes.io/cors-allow-origin: "*"
    # If origin is "*", credentials must be "false".
    nginx.ingress.kubernetes.io/cors-allow-credentials: "false"
    nginx.ingress.kubernetes.io/cors-allow-methods: "GET, POST, HEAD"
...
```

### **Step 2: Verify the CORS configuration**

Use `curl` to simulate a browser sending an `OPTIONS` preflight request.

```
curl -i -X OPTIONS 'https://api.example.com/your/path' \
  -H 'Origin: https://app.example.com' \
  -H 'Access-Control-Request-Method: POST' \
  -H 'Access-Control-Request-Headers: Content-Type, Authorization'
```

Expected output: A successful request returns a `2xx` status code, usually `204 No Content` or `200 OK`.

```
HTTP/2 204
date: Fri, 12 Sep 2025 03:51:12 GMT
access-control-allow-origin: https://example.com, https://app.example.com
access-control-allow-credentials: true
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS
access-control-allow-headers: Content-Type, Authorization
```

Verify that the `access-control-allow-*` headers in the response match the `nginx.ingress.kubernetes.io/cors-*` annotations in your Ingress resource.

## **Common CORS** annotations **in NGINX Ingress Controller**

**Annotation**

**Description**

**Corresponding HTTP header**

**Example**

`nginx.ingress.kubernetes.io/enable-cors`

Specifies whether to enable the CORS policy.

`nginx.ingress.kubernetes.io/enable-cors: "true"`

`nginx.ingress.kubernetes.io/cors-allow-origin`

Specifies the origins that can access the resource. You can list multiple comma-separated domains.

Access-Control-Allow-Origin

`nginx.ingress.kubernetes.io/cors-allow-origin: "https://example.com"`

`nginx.ingress.kubernetes.io/cors-allow-methods`

Specifies the allowed HTTP methods, such as `GET`, `POST`, and `PUT`.

Access-Control-Allow-Methods

`nginx.ingress.kubernetes.io/cors-allow-methods: "GET, PUT, POST, DELETE, PATCH, OPTIONS"`

`nginx.ingress.kubernetes.io/cors-allow-headers`

Specifies the allowed custom request headers.

Access-Control-Allow-Headers

`nginx.ingress.kubernetes.io/cors-allow-headers: "DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range"`

`nginx.ingress.kubernetes.io/cors-allow-credentials`

Specifies whether requests can be sent with credentials, such as cookies or HTTP authentication.

Access-Control-Allow-Credentials

`nginx.ingress.kubernetes.io/cors-allow-credentials: "true"`

`nginx.ingress.kubernetes.io/cors-expose-headers`

Specifies which response headers the browser can access.

> This annotation requires NGINX Ingress Controller v0.44 or later.

Access-Control-Expose-Headers

`nginx.ingress.kubernetes.io/cors-expose-headers: "Content-Length,Content-Range"`

`nginx.ingress.kubernetes.io/cors-max-age`

The maximum time in seconds that a browser can cache the preflight response. A longer duration reduces preflight requests. For high-security requirements, consider a lower value.

Access-Control-Max-Age

`nginx.ingress.kubernetes.io/cors-max-age: "86400"`

## **FAQ**

#### After configuring CORS, why do I still get cross-origin errors**?**

Check the network requests in your browser's developer tools or the logs of the NGINX Ingress Controller. Verify that the request's origin, method, and headers are all allowed by your Ingress CORS configuration.

Here are typical CORS error messages. In this case, the request used the `POST` method, but `POST` was not included in the `Access-Control-Allow-Methods` header of the preflight response.

-   `Method POST is not allowed by Access-Control-Allow-Methods in preflight response`
    
-   `Access to fetch at 'https://api.example.com/data' from origin 'https://app.example.com' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: xxxx.`
    

#### **After setting** `**nginx.ingress.kubernetes.io/cors-allow-credentials: "true"**`**, can I set** `**nginx.ingress.kubernetes.io/cors-allow-origin**` **to** `**"*"**`**?**

No. This is a security restriction enforced by browsers. When a request includes credentials (such as cookies), the server must explicitly specify a trusted origin and cannot use a wildcard (`*`). This policy prevents a malicious website from using a user's credentials to make unauthorized requests to your server.

#### How can I set different CORS policies for different paths under the same domain, such as `/api/public/*` and `/api/private/*`?

CORS annotations on an Ingress resource apply to all paths defined within it. To set different policies for different paths, you must create separate Ingress resources for each path group and apply the desired CORS annotations to each one. For example, create an `api-public-ingress.yaml` and an `api-private-ingress.yaml`, and set different CORS annotations for each.

#### How can my client-side application access custom response headers?

By default, when processing a cross-origin request, a browser can only access a limited set of standard response headers: `Cache-Control`, `Content-Language`, `Content-Type`, `Expires`, `Last-Modified`, and `Pragma`. Any custom headers sent by the server, such as `X-Request-ID`, are not accessible by client-side JavaScript by default.

To access a custom header, use the `nginx.ingress.kubernetes.io/cors-expose-headers` annotation to set the `Access-Control-Expose-Headers` HTTP response header. This header tells the browser which non-standard response headers client-side code can access. For more information, see [Cross-origin requests with credentials](#be07cd21cb99u).

## **References**

-   This topic provides examples of only common CORS annotations for the NGINX Ingress Controller. For a complete list, see [Enable CORS](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#enable-cors).
    
-   [Troubleshoot NGINX Ingress issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions).
