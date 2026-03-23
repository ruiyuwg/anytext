In a Kubernetes cluster, APIG Ingress manages externally accessible API objects for services. It provides Layer 7 load balancing. This topic describes advanced APIG Ingress features for managing ingress traffic in your cluster.

## Canary Releases

APIG Ingress supports sophisticated routing, including canary releases based on request headers, query parameters, cookies, and weights. Configure canary releases using annotations. To enable canary releases, set the annotation `nginx.ingress.kubernetes.io/canary: "true"`. Different annotations activate different canary release capabilities.

**Note**

When multiple canary methods are configured, the priority order is header-based or query parameter-based, then cookie-based, then weight-based.

### Header-Based Canary Releases

-   Configure only `nginx.ingress.kubernetes.io/canary-by-header`: Traffic splits based on the request header. When the configured `header` value is `always`, traffic routes to the canary service endpoint. Otherwise, traffic routes to the stable service.
    
-   Configure both `nginx.ingress.kubernetes.io/canary-by-header-value` and `nginx.ingress.kubernetes.io/canary-by-header`: Traffic routes to the canary service only when the request header and its value match the configured values. Otherwise, traffic routes to the stable service.
    

**Note**

Unlike NGINX Ingress and ALB Ingress, which support up to two service versions for canary releases, APIG Ingress supports an unlimited number of service versions.

For example:

-   If the request header is `apig: always`, the request accesses the \`demo-service-canary\` canary service. Otherwise, it accesses the \`demo-service\` stable service. Configure as follows:
    
    ## Clusters with version 1.19 and later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/canary: "true"
        nginx.ingress.kubernetes.io/canary-by-header: "apig"
      name: demo-canary
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - backend:
                  service:
                    name: demo-service-canary
                    port: 
                      number: 80
                path: /hello
                pathType: Exact
    ---
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /hello
                pathType: Exact          
    ```
    
    ## Clusters with version earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/canary: "true"
        nginx.ingress.kubernetes.io/canary-by-header: "apig"
      name: demo-canary
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - path: /hello
                backend:
                  serviceName: demo-service-canary
                  servicePort: 80
    ---
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - path: /hello
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    
-   If the request header is `apig: v1`, the request accesses the \`demo-service-canary-v1\` canary service. If the request header is `apig: v2`, it accesses the \`demo-service-canary-v2\` canary service. Otherwise, it accesses the \`demo-service\` stable service. Configure as follows:
    
    ## Clusters with version 1.19 and later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/canary: "true"
        nginx.ingress.kubernetes.io/canary-by-header: "apig"
        nginx.ingress.kubernetes.io/canary-by-header-value: "v1"
      name: demo-canary-v1
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - backend:
                  service:
                    name: demo-service-canary-v1
                    port: 
                      number: 80
                path: /hello
                pathType: Exact
    ---
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/canary: "true"
        nginx.ingress.kubernetes.io/canary-by-header: "apig"
        nginx.ingress.kubernetes.io/canary-by-header-value: "v2"
      name: demo-canary-v2
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - backend:
                  service:
                    name: demo-service-canary-v2
                    port: 
                      number: 80
                path: /hello
                pathType: Exact
    ---
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /hello
                pathType: Exact
    ```
    
    ## Clusters with version earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/canary: "true"
        nginx.ingress.kubernetes.io/canary-by-header: "apig"
        nginx.ingress.kubernetes.io/canary-by-header-value: "v1"
      name: demo-canary-v1
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - path: /hello
                backend:
                  serviceName: demo-service-canary-v1
                  servicePort: 80
    ---
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/canary: "true"
        nginx.ingress.kubernetes.io/canary-by-header: "apig"
        nginx.ingress.kubernetes.io/canary-by-header-value: "v2"
      name: demo-canary-v2
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - path: /hello
                backend:
                  serviceName: demo-service-canary-v2
                  servicePort: 80
    ---
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - path: /hello
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    

### Query Parameter-Based Canary Releases

-   **Configure only higress.ingress.kubernetes.io/canary-by-query**
    
    Traffic splits based on the URL query parameter. If the request URL contains the configured query parameter key and its value is always, traffic routes to the canary service endpoint. Otherwise, traffic routes to the stable service.
    
-   **Configure both higress.ingress.kubernetes.io/canary-by-query-value and higress.ingress.kubernetes.io/canary-by-query**
    
    Traffic routes to the canary service only when the request’s `query parameter key` and `query parameter value` match the configured values. Otherwise, traffic routes to the stable service.
    
    **Note**
    
    Use header-based and query parameter-based canary releases together. Traffic routes to the canary service only when both conditions are satisfied.
    

**Example:**

-   If the request URL includes the query parameter `canary: gray`, the request accesses the \`demo-service-canary\` canary service. Otherwise, it accesses the \`demo-service\` stable service. Configure as follows:
    
    ## Clusters with version 1.19 and later
    
    ```
    apiVersion:networking.k8s.io/v1 
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/canary: "true"
        higress.ingress.kubernetes.io/canary-by-query: "canary"
        higress.ingress.kubernetes.io/canary-by-query-value: "gray"
      name: demo-canary
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - backend:
                  service:
                    name: demo-service-canary
                    port: 
                      number: 80
                path: /hello
                pathType: Exact
    ---
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /hello
                pathType: Exact 
    ```
    
    ## Clusters with version earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/canary: "true"
        higress.ingress.kubernetes.io/canary-by-query: "canary"
        higress.ingress.kubernetes.io/canary-by-query-value: "gray"
      name: demo-canary
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - path: /hello
                backend:
                  serviceName: demo-service-canary
                  servicePort: 80
    ---
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - path: /hello
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    
-   If the request URL includes the query parameter `canary: gray` and the request header includes `x-user-id: test`, the request accesses the \`demo-service-canary\` canary service. Otherwise, it accesses the \`demo-service\` stable service. Configure as follows:
    
    ## Clusters with version 1.19 and later
    
    ```
    apiVersion:networking.k8s.io/v1 
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/canary: "true"
        higress.ingress.kubernetes.io/canary-by-query: "canary"
        higress.ingress.kubernetes.io/canary-by-query-value: "gray"
        nginx.ingress.kubernetes.io/canary-by-header: "x-user-id"
        nginx.ingress.kubernetes.io/canary-by-header-value: "test"
      name: demo-canary
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - backend:
                  service:
                    name: demo-service-canary
                    port: 
                      number: 80
                path: /hello
                pathType: Exact
    ---
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /hello
                pathType: Exact 
    ```
    
    ## Clusters with version earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/canary: "true"
        higress.ingress.kubernetes.io/canary-by-query: "canary"
        higress.ingress.kubernetes.io/canary-by-query-value: "gray"
        nginx.ingress.kubernetes.io/canary-by-header: "x-user-id"
        nginx.ingress.kubernetes.io/canary-by-header-value: "test"
      name: demo-canary
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - path: /hello
                backend:
                  serviceName: demo-service-canary
                  servicePort: 80
    ---
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - path: /hello
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    

### Cookie-Based Canary Releases

nginx.ingress.kubernetes.io/canary-by-cookie: Traffic splits based on the cookie. When the configured `cookie` value is `always`, traffic routes to the canary service. Otherwise, traffic routes to the stable service.

**Note**

Cookie-based canary releases do not support custom values. The configured `cookie` value must be `always`.

For example, if the request cookie is `demo=always`, the request accesses the \`demo-service-canary\` canary service. Otherwise, it accesses the \`demo-service\` stable service. Configure as follows:

## Clusters with version 1.19 and later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/canary: "true"
    nginx.ingress.kubernetes.io/canary-by-cookie: "demo"
  name: demo-canary
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: demo
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
```

## Clusters with version earlier than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/canary: "true"
    nginx.ingress.kubernetes.io/canary-by-cookie: "demo"
  name: demo-canary
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - path: /hello
            backend:
              serviceName: demo-service-canary
              servicePort: 80
---
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: demo
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - path: /hello
            backend:
              serviceName: demo-service
              servicePort: 80
```

### Weight-Based Canary Releases

**Annotation**

**Description**

nginx.ingress.kubernetes.io/canary-weight

Set the percentage of requests routed to the specified service (an integer from 0 to 100).

nginx.ingress.kubernetes.io/canary-weight-total

Set the total weight. Default is 100.

For example, assign a 30% weight to the \`demo-service-canary-v1\` canary service, a 20% weight to the \`demo-service-canary-v2\` canary service, and a 50% weight to the \`demo-service\` stable service. Configure as follows:

## Clusters with version 1.19 and later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/canary: "true"
    nginx.ingress.kubernetes.io/canary-weight: "30"
  name: demo-canary-v1
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary-v1
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/canary: "true"
    nginx.ingress.kubernetes.io/canary-weight: "20"
  name: demo-canary-v2
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary-v2
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: demo
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
```

## Clusters with version earlier than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/canary: "true"
    nginx.ingress.kubernetes.io/canary-weight: "30"
  name: demo-canary-v1
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - path: /hello
            backend:
              serviceName: demo-service-canary-v1
              servicePort: 80
---
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/canary: "true"
    nginx.ingress.kubernetes.io/canary-weight: "20"
  name: demo-canary-v2
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - path: /hello
            backend:
              serviceName: demo-service-canary-v2
              servicePort: 80
---
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: demo
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - path: /hello
            backend:
              serviceName: demo-service
              servicePort: 80
```

## Service Subsets

Service subsets apply when a Service associates with multiple deployments. Ingress forwards requests to a subset of pods under that Service. Typically, this means forwarding requests to pods within a Service that have a specific label. You can configure this in two ways:

### Use APIG Ingress-Defined Pod Labels

You can set the Service version using the annotation `higress.ingress.kubernetes.io/service-subset`. By default, APIG Ingress associates the configured service version with Pod labels prefixed with \`opensergo.io/canary\`. This annotation specifies the following:

-   When configured as `""` or `base`, requests forward to pods with the label `opensergo.io/canary: ""` or to pods without any label key prefixed with `opensergo.io/canary`. This includes pods with an empty label or no label.
    
-   When configured with other values, requests forward to pods with the label opensergo.io/canary-{other value}: {other value}. For example, if configured as `gray`, requests forward to pods with the label `opensergo.io/canary-gray: gray`.
    

For example, a Kubernetes Service named \`go-httpbin\` associates with two deployments. One deployment manages pods without any label key prefixed with opensergo.io/canary. The other deployment manages pods with the canary label opensergo.io/canary-gray: gray. Configure as follows:

```
# go-httpbin k8s service
apiVersion: v1
kind: Service
metadata:
  name: go-httpbin
  namespace: default
spec:
  ports:
    - port: 8080
      protocol: TCP
  selector:
    app: go-httpbin
---
# go-httpbin base deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: go-httpbin-base
  namespace: default
spec:
  replicas: 1
  selector:
    matchLabels:
      app: go-httpbin
  template:
    metadata:
      labels:
        app: go-httpbin
    spec:
      containers:
        - image: registry.cn-hangzhou.aliyuncs.com/apig/go-httpbin
          args:
            - "--version=base"
          imagePullPolicy: Always
          name: go-httpbin
---
# go-httpbin gray deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: go-httpbin-gray
  namespace: default
spec:
  replicas: 1
  selector:
    matchLabels:
      app: go-httpbin
  template:
    metadata:
      labels:
        app: go-httpbin
        opensergo.io/canary-gray: gray
    spec:
      containers:
        - image: registry.cn-hangzhou.aliyuncs.com/apig/go-httpbin
          args:
            - "--version=gray"
          imagePullPolicy: Always
          name: go-httpbin
```

To forward requests for example.com/test to go-httpbin-gray if the request header includes x-user-id: test, and to go-httpbin-base otherwise, configure as follows:

### Clusters with version 1.19 and later

```
apiVersion:networking.k8s.io/v1 
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/canary: "true"
    nginx.ingress.kubernetes.io/canary-by-header: "x-user-id"
    nginx.ingress.kubernetes.io/canary-by-header-value: "test"
    # Forward requests to pods with the canary label opensergo.io/canary-gray: gray
    higress.ingress.kubernetes.io/service-subset: gray
  name: demo-canary
  namespace: default
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - backend:
              service:
                name: go-httpbin
                port: 
                  number: 8080
            path: /test
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    # Forward requests to pods without a label prefixed with opensergo.io/canary
    higress.ingress.kubernetes.io/service-subset: ""
  name: demo
  namespace: default
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - backend:
              service:
                name: go-httpbin
                port: 
                  number: 8080
            path: /test
            pathType: Exact 
```

### Clusters with version earlier than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/canary: "true"
    nginx.ingress.kubernetes.io/canary-by-header: "x-user-id"
    nginx.ingress.kubernetes.io/canary-by-header-value: "test"
    # Forward requests to pods with the canary label opensergo.io/canary-gray: gray
    higress.ingress.kubernetes.io/service-subset: gray
  name: demo-canary
  namespace: default
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - path: /test
            backend:
              # Configure the service as go-httpbin, but specify the version in the annotation.
              serviceName: go-httpbin
              servicePort: 8080
---
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    # Forward requests to pods without a label prefixed with opensergo.io/canary
    higress.ingress.kubernetes.io/service-subset: ""
  name: demo
  namespace: default
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - path: /test
            backend:
              # Configure the service as go-httpbin, but specify the version in the annotation.
              serviceName: go-httpbin
              servicePort: 8080
```

### Use Custom Labels

Configure both the `higress.ingress.kubernetes.io/service-subset` and `higress.ingress.kubernetes.io/subset-labels` annotations to define the subset’s pods using custom labels.

**Note**

This subset does not associate with labels prefixed with opensergo.io/canary.

For example, a Kubernetes Service named go-httpbin associates with two deployments. One deployment manages pods without any label key prefixed with opensergo.io/canary. The other deployment manages pods with the canary label version: gray. Configure as follows:

```
# go-httpbin k8s service
apiVersion: v1
kind: Service
metadata:
  name: go-httpbin
  namespace: default
spec:
  ports:
    - port: 8080
      protocol: TCP
  selector:
    app: go-httpbin
---
# go-httpbin base deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: go-httpbin-base
  namespace: default
spec:
  replicas: 1
  selector:
    matchLabels:
      app: go-httpbin
  template:
    metadata:
      labels:
        app: go-httpbin
    spec:
      containers:
        - image: registry.cn-hangzhou.aliyuncs.com/apig/go-httpbin
          args:
            - "--version=base"
          imagePullPolicy: Always
          name: go-httpbin
---
# go-httpbin base gray
apiVersion: apps/v1
kind: Deployment
metadata:
  name: go-httpbin-gray
  namespace: default
spec:
  replicas: 1
  selector:
    matchLabels:
      app: go-httpbin
  template:
    metadata:
      labels:
        app: go-httpbin
        version: gray
    spec:
      containers:
        - image: registry.cn-hangzhou.aliyuncs.com/apig/go-httpbin
          args:
            - "--version=gray"
          imagePullPolicy: Always
          name: go-httpbin
```

To forward requests for example.com/test to go-httpbin-gray if the request header includes x-user-id: test, and to go-httpbin-base otherwise.

### Clusters with version 1.19 and later

```
apiVersion:networking.k8s.io/v1 
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/canary: "true"
    nginx.ingress.kubernetes.io/canary-by-header: "x-user-id"
    nginx.ingress.kubernetes.io/canary-by-header-value: "test"
    # Forward requests to pods with the canary label version: gray
    higress.ingress.kubernetes.io/service-subset: gray
    higress.ingress.kubernetes.io/subset-labels: version gray
  name: demo-canary
  namespace: default
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - backend:
              service:
                name: go-httpbin
                port: 
                  number: 8080
            path: /test
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    # Forward requests to pods without a label prefixed with opensergo.io/canary
    higress.ingress.kubernetes.io/service-subset: ""
  name: demo
  namespace: default
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - backend:
              service:
                name: go-httpbin
                port: 
                  number: 8080
            path: /test
            pathType: Exact 
```

### Clusters with version earlier than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/canary: "true"
    nginx.ingress.kubernetes.io/canary-by-header: "x-user-id"
    nginx.ingress.kubernetes.io/canary-by-header-value: "test"
    # Forward requests to pods with the canary label version: gray
    higress.ingress.kubernetes.io/service-subset: gray
    higress.ingress.kubernetes.io/subset-labels: version gray
  name: demo-canary
  namespace: default
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - path: /test
            backend:
              # Configure the service as go-httpbin, but specify the version in the annotation.
              serviceName: go-httpbin
              servicePort: 8080
---
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    # Forward requests to pods without a label prefixed with opensergo.io/canary
    higress.ingress.kubernetes.io/service-subset: ""
  name: demo
  namespace: default
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - path: /test
            backend:
              # Configure the service as go-httpbin, but specify the version in the annotation.
              serviceName: go-httpbin
              servicePort: 8080
```

## Cross-domain

Cross-Origin Resource Sharing (CORS) lets web application servers control cross-domain access to ensure secure data transfer across domains. For more information, see [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS).

**Annotation**

**Description**

nginx.ingress.kubernetes.io/enable-cors

Enables or disables CORS.

nginx.ingress.kubernetes.io/cors-allow-origin

The origins that are allowed to access the resource. Separate multiple origins with commas. The wildcard character (\*) is supported. The default value is \*, which allows all origins.

nginx.ingress.kubernetes.io/cors-allow-methods

The allowed request methods, such as GET, POST, and PUT. Separate multiple methods with commas. The wildcard character (\*) is supported. The default value is GET, PUT, POST, DELETE, PATCH, and OPTIONS.

nginx.ingress.kubernetes.io/cors-allow-headers

The allowed request headers. Separate multiple headers with commas. The wildcard character (\*) is supported. The default value is DNT, X-CustomHeader, Keep-Alive, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type, and Authorization.

nginx.ingress.kubernetes.io/cors-expose-headers

The response headers that can be exposed to browsers. Separate multiple headers with commas.

nginx.ingress.kubernetes.io/cors-allow-credentials

Specifies whether the browser can send credentials with the request. The default value is true.

nginx.ingress.kubernetes.io/cors-max-age

The maximum time in seconds that the results of a preflight request can be cached. The default value is 1728000.

For example, to restrict cross-domain requests to the example.com domain, allow only GET and POST methods, allow the X-Foo-Bar request header, and disallow credentials, use the following configuration:

## Clusters of version 1.19 and later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/enable-cors: "true"
    nginx.ingress.kubernetes.io/cors-allow-origin: "example.com"
    nginx.ingress.kubernetes.io/cors-allow-methods: "GET,POST"
    nginx.ingress.kubernetes.io/cors-allow-headers: "X-Foo-Bar"
    nginx.ingress.kubernetes.io/cors-allow-credentials: "false"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
```

## Clusters earlier than version 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/enable-cors: "true"
    nginx.ingress.kubernetes.io/cors-allow-origin: "example.com"
    nginx.ingress.kubernetes.io/cors-allow-methods: "GET,POST"
    nginx.ingress.kubernetes.io/cors-allow-headers: "X-Foo-Bar"
    nginx.ingress.kubernetes.io/cors-allow-credentials: "false"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - path: /hello
            backend:
              serviceName: demo-service
              servicePort: 80
```

## **Regex Match**

Standard Kubernetes Ingress supports only exact match and prefix match. APIG Ingress adds support for regex matching. To enable regex matching for the path defined in your Ingress spec, add the annotation `nginx.ingress.kubernetes.io/use-regex: true`.

For example, to forward requests with the domain name example.com and a path that starts with /app or /test to the demo service, use the following configuration:

## Clusters running Kubernetes 1.19 or later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/use-regex: 'true'
  name: regex-match
  namespace: default
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo
                port: 
                  number: 8080
            path: /(app|test)/(.*)
            pathType: Prefix
```

## Clusters running Kubernetes earlier than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/use-regex: 'true'
  name: regex-match
  namespace: default
spec:
  ingressClassName: apig
  rules:
    - http:
        paths:
          - path: /(app|test)/(.*)
            backend:
              serviceName: demo
              servicePort: 8080
```

## Rewrite Path and Host

Before forwarding requests to the target backend service, rewrite modifies the original request’s path and host domain.

**Annotation**

**Description**

nginx.ingress.kubernetes.io/rewrite-target

Rewrite Path. Supports capturing groups.

nginx.ingress.kubernetes.io/upstream-vhost

Rewrite Host.

### Rewrite Path

1.  Before forwarding the request example.com/test to the backend service, rewrite it to example.com/dev. Configure as follows:
    
    ## Clusters on Kubernetes 1.19 and Later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/rewrite-target: "/dev"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /test
                pathType: Exact
    ```
    
    ## Clusters Before Kubernetes 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/rewrite-target: "/dev"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - path: /test
                pathType: Exact
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    
2.  Before forwarding any request such as example.com/v1/xxx, which has the prefix /v1/, to the backend service, remove the path prefix /v1 and rewrite it to example.com/xxx. Configure as follows:
    
    ## Clusters on Kubernetes 1.19 and Later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/rewrite-target: "/$1"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /v1/(.*)
                pathType: Prefix
    ```
    
    ## Clusters Before Kubernetes 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/rewrite-target: "/$1"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - path: /v1/(.*) 
              	pathType: Prefix
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    
3.  Before forwarding any request such as example.com/v1/xxx, which has the prefix /v1/, to the backend service, change the path prefix /v1 to /v2 and rewrite it to example.com/v2/xxx. Configure as follows:
    
    ## Clusters on Kubernetes 1.19 and Later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/rewrite-target: "/v2/$1"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /v1/(.*)
                pathType: Prefix
    ```
    
    ## Clusters Before Kubernetes 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/rewrite-target: "/v2/$1"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - path: /v1/(.*)
                pathType: Prefix
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    

### Rewrite Host

For example, before forwarding the request example.com/test to the backend service, rewrite it to test.com/test. Configure as follows:

## Clusters on Kubernetes 1.19 and Later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/upstream-vhost: "test.com"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Clusters Before Kubernetes 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/upstream-vhost: "test.com"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com 
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

## Redirection

Redirection changes an original client request to a target request.

### Configure HTTP to HTTPS Redirection

**Annotation**

**Description**

nginx.ingress.kubernetes.io/ssl-redirect

Redirects HTTP to HTTPS

nginx.ingress.kubernetes.io/force-ssl-redirect

Redirects HTTP to HTTPS

**Note**

APIG Ingress treats both annotations the same and forces HTTP redirection to HTTPS.

For example, redirect http://example.com/test to https://example.com/test. Configure as follows:

## Clusters on Version 1.19 and Later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Clusters Before Version 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com 
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

### Permanent Redirection

**Annotation**

**Description**

nginx.ingress.kubernetes.io/permanent-redirect

The target URL for permanent redirection. It must include the scheme (HTTP or HTTPS).

nginx.ingress.kubernetes.io/permanent-redirect-code

The HTTP status code for permanent redirection. The default value is 301.

For example, permanently redirect http://example.com/test to http://example.com/app. Configure as follows:

## Clusters on Version 1.19 and Later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/permanent-redirect: "http://example.com/app"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Clusters Before Version 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/permanent-redirect: "http://example.com/app"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com 
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

### Temporary Redirection

nginx.ingress.kubernetes.io/temporal-redirect: The target URL for temporary redirection. It must include the scheme (HTTP or HTTPS).

For example, temporarily redirect http://example.com/test to http://example.com/app. Configure as follows:

## Clusters on Version 1.19 and Later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/temporal-redirect: "http://example.com/app"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Clusters Before Version 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/temporal-redirect: "http://example.com/app"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com 
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

## Header control

Use header control to add, remove, or modify request headers before forwarding requests to backend services. You can also add, remove, or modify response headers before forwarding responses to clients.

### Request header control

**Annotation**

**Description**

higress.ingress.kubernetes.io/request-header-control-add

Add specified headers to requests before forwarding them to backend services. If a header already exists, append the new value to the existing value. Syntax:

-   Single header: Key Value.
    
-   Multiple headers: Use the YAML literal block indicator `|`. Put each Key Value pair on its own line.
    

higress.ingress.kubernetes.io/request-header-control-update

Update specified headers in requests before forwarding them to backend services. If a header already exists, overwrite its value. Syntax:

-   Single header: Key Value.
    
-   Multiple headers: Use the YAML literal block indicator `|`. Put each Key Value pair on its own line.
    

higress.ingress.kubernetes.io/request-header-control-remove

Remove specified headers from requests before forwarding them to backend services. Syntax:

-   Single header: Key.
    
-   Multiple headers: Separate keys with commas.
    

Examples:

-   Add two headers—foo: bar and test: true—to requests for example.com/test. Configure as follows:
    
    ## Clusters running Kubernetes 1.19 or later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        higress.ingress.kubernetes.io/request-header-control-add: |
          foo bar
          test true
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /test
                pathType: Exact
    ```
    
    ## Clusters running Kubernetes earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        higress.ingress.kubernetes.io/request-header-control-add: |
          foo bar
          test true
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com 
          http:
            paths:
              - path: /test
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    
-   Combine header control with canary releases to tag canary traffic. When the request header apig: v1 is present, route traffic to the canary service demo-service-canary-v1 and add the header stage: gray. For all other requests, route traffic to the production service demo-service and add the header stage: production. Configure as follows:
    
    ## Clusters running Kubernetes 1.19 or later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/canary: "true"
        nginx.ingress.kubernetes.io/canary-by-header: "apig"
        nginx.ingress.kubernetes.io/canary-by-header-value: "v1"
        higress.ingress.kubernetes.io/request-header-control-add: "stage gray"
      name: demo-canary-v1
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - backend:
                  service:
                    name: demo-service-canary-v1
                    port: 
                      number: 80
                path: /hello
                pathType: Exact
    ---
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        higress.ingress.kubernetes.io/request-header-control-add: "stage production"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /hello
                pathType: Exact
    ```
    
    ## Clusters running Kubernetes earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/canary: "true"
        nginx.ingress.kubernetes.io/canary-by-header: "apig"
        nginx.ingress.kubernetes.io/canary-by-header-value: "v1"
        higress.ingress.kubernetes.io/request-header-control-add: "stage gray"
      name: demo-canary-v1
    spec:
      ingressClassName: apig
      rules:
        - http:
            paths:
              - path: /hello
                backend:
                  serviceName: demo-service-canary-v1
                  servicePort: 80
    ---
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        higress.ingress.kubernetes.io/request-header-control-add: |
          foo bar
          test true
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com 
          http:
            paths:
              - path: /hello
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    

### Response header control

**Annotation**

**Description**

higress.ingress.kubernetes.io/response-header-control-add

Add specified headers to responses before forwarding them to clients. If a header already exists, append the new value to the existing value. Syntax:

-   Single header: Key Value.
    
-   Multiple headers: Use the YAML literal block indicator `|`. Put each Key Value pair on its own line.
    

higress.ingress.kubernetes.io/response-header-control-update

Update specified headers in responses before forwarding them to clients. If a header already exists, overwrite its value. Syntax:

-   Single header: Key Value.
    
-   Multiple headers: Use the YAML literal block indicator `|`. Put each Key Value pair on its own line.
    

higress.ingress.kubernetes.io/response-header-control-remove

Remove specified headers from responses before forwarding them to clients. Syntax:

-   Single header: Key.
    
-   Multiple headers: Separate keys with commas.
    

For example, remove the req-cost-time header from responses to requests for example.com/test. Configure as follows:

## Clusters running Kubernetes 1.19 or later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/response-header-control-remove: "req-cost-time"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Clusters running Kubernetes earlier than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/response-header-control-remove: "req-cost-time"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com 
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

## Retry

APIG Ingress provides routing-level retry settings and automatically retries failed requests. Set retry conditions as needed—for example, for failed connection attempts, unavailable backend services, or responses with specific HTTP status codes.

**Annotation**

**Description**

nginx.ingress.kubernetes.io/proxy-next-upstream-tries

Maximum number of request retries. Default is 3.

nginx.ingress.kubernetes.io/proxy-next-upstream-timeout

Request retry timeout in seconds. No timeout is configured by default.

nginx.ingress.kubernetes.io/proxy-next-upstream

Request retry conditions, separated by commas. Default value is `error,timeout`. Valid values are:

-   error: Connection establishment failed, or request resulted in a 5xx error.
    
-   timeout: Connection establishment timed out, or request resulted in a 5xx error.
    
-   invalid\_header: Request resulted in a 5xx error.
    
-   http\_xxx: Retry for specific HTTP status codes. For example, http\_502, http\_403.
    
-   non\_idempotent: Retry for failed non-idempotent requests. By default, APIG Ingress does not retry failed non-idempotent POST or PATCH requests. If you configure non\_idempotent, enable retries.
    
-   off: Disable retries.
    

For example, set the maximum retry count for example/test requests to 2, the retry timeout to 5 seconds, retry only for HTTP status code 502, and enable non-idempotent retries. Configure as follows:

## Clusters for Kubernetes 1.19 and Later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/proxy-next-upstream-tries: "2"
    nginx.ingress.kubernetes.io/proxy-next-upstream-timeout: "5"
    nginx.ingress.kubernetes.io/proxy-next-upstream: "http_502,non_idempotent"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Clusters for Kubernetes Earlier Than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/proxy-next-upstream-tries: "2"
    nginx.ingress.kubernetes.io/proxy-next-upstream-timeout: "5"
    nginx.ingress.kubernetes.io/proxy-next-upstream: "http_502,non_idempotent"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com 
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

## IP blacklist and whitelist access control

APIG Ingress supports IP blacklist and whitelist access control at the domain and route levels. Route-level access control takes precedence over domain-level access control.

### Route-level IP access control

**Annotation**

**Description**

nginx.ingress.kubernetes.io/whitelist-source-range

Specifies the IP whitelist for a route. Supports IP addresses or Classless Inter-Domain Routing (CIDR) blocks. Separate multiple entries with commas.

higress.ingress.kubernetes.io/blacklist-source-range

Specifies the IP blacklist for a route. Supports IP addresses or CIDR blocks. Separate multiple entries with commas.

For example:

-   To allow access to example.com/test only from the client IP address 1.1.X.X, use the following configuration:
    
    ## Clusters of version 1.19 and later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/whitelist-source-range: 1.1.X.X
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /test
                pathType: Exact
    ```
    
    ## Clusters earlier than version 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/whitelist-source-range: 1.1.X.X
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com 
          http:
            paths:
              - path: /test
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    
-   To deny access to example.com/test from the client IP address 2.2.2.2, use the following configuration:
    
    ## Clusters of version 1.19 and later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        higress.ingress.kubernetes.io/blacklist-source-range: 2.2.2.2
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /test
                pathType: Exact
    ```
    
    ## Clusters earlier than version 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        higress.ingress.kubernetes.io/blacklist-source-range: 2.2.2.2
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - path: /test
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    

### Domain-level IP access control

**Annotation**

**Description**

higress.ingress.kubernetes.io/domain-whitelist-source-range

Specifies the IP whitelist for a domain name. Domain-level settings have a lower priority than route-level settings. Supports IP addresses or CIDR blocks. Separate IP addresses with commas.

higress.ingress.kubernetes.io/domain-blacklist-source-range

Specifies the IP blacklist for a domain name. Domain-level settings have a lower priority than route-level settings. Supports IP addresses or CIDR blocks. Separate IP addresses with commas.

For example:

-   To allow access to all routes under the example.com domain name only from the client IP addresses 1.1.X.X and 2.2.2.2, use the following configuration:
    
    ## Clusters of version 1.19 and later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        higress.ingress.kubernetes.io/domain-whitelist-source-range: 1.1.X.X,2.2.2.2
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /test
                pathType: Exact
             - backend:
                  service:
                    name: app-service
                    port: 
                      number: 80
                path: /app
                pathType: Exact
    ```
    
    ## Clusters earlier than version 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        higress.ingress.kubernetes.io/domain-whitelist-source-range: 1.1.X.X,2.2.2.2
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - path: /test
                backend:
                  serviceName: demo-service
                  servicePort: 80
              - path: /app
                backend:
                  serviceName: app-service
                  servicePort: 80
    ```
    
-   Combine domain-level and route-level IP access control. For example, to allow requests from client IP addresses 1.1.X.X and 2.2.2.2 to access all routes under the example.com domain, but only allow requests from the client IP address 3.3.X.X to access the example.com/order route, use the following configuration:
    
    ## Clusters of version 1.19 and later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        higress.ingress.kubernetes.io/domain-whitelist-source-range: 1.1.X.X,2.2.2.2
      name: demo-domain
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /test
                pathType: Exact
             - backend:
                  service:
                    name: app-service
                    port: 
                      number: 80
                path: /app
                pathType: Exact
    ---
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/whitelist-source-range: 3.3.X.X
      name: demo-route
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /order
                pathType: Exact
    ```
    
    ## Clusters earlier than version 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        higress.ingress.kubernetes.io/domain-whitelist-source-range: 1.1.X.X,2.2.2.2
      name: demo-domain
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - path: /test
                backend:
                  serviceName: demo-service
                  servicePort: 80
              - path: /app
                backend:
                  serviceName: app-service
                  servicePort: 80
    ---
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/whitelist-source-range: 3.3.X.X
      name: demo-route
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - path: /order
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    

## Per-Instance Rate Limiting

APIG Ingress supports per-instance rate limiting at the routing level. During a specified period, it limits the number of requests that match a given route on each gateway replica to no more than the configured threshold.

**Note**

This rate limiting applies per instance. The configured threshold is enforced separately on each gateway instance. To limit traffic for a route across the entire gateway cluster, use global rate limiting.

**Annotation**

**Description**

higress.ingress.kubernetes.io/route-limit-rpm

The maximum number of requests per minute for this route on each gateway instance. The maximum burst request count equals this value multiplied by limit-burst-multiplier.

When rate limiting triggers, the response body contains `local_rate_limited`. The response status code depends on the gateway version:

-   Gateway version earlier than 1.2.23: status code 503.
    
-   Gateway version 1.2.23 or later: status code 429.
    

higress.ingress.kubernetes.io/route-limit-rps

The maximum number of requests per second for this route on each gateway instance. The maximum burst request count equals this value multiplied by limit-burst-multiplier.

When rate limiting is triggered, the response body contains `local_rate_limited`, and the response status code is as follows:

-   Gateway version earlier than 1.2.23: status code 503.
    
-   Gateway version 1.2.23 or later: status code 429.
    

higress.ingress.kubernetes.io/route-limit-burst-multiplier

The burst multiplier for maximum burst request count. Default is 5.

Examples:

-   Limit requests to example.com/test to 100 per minute, with a burst capacity of 200. Configure as follows:
    
    ## Clusters running Kubernetes 1.19 or later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        higress.ingress.kubernetes.io/route-limit-rpm: "100"
        higress.ingress.kubernetes.io/route-limit-burst-multiplier: "2"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /test
                pathType: Exact
    ```
    
    ## Clusters running Kubernetes earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        higress.ingress.kubernetes.io/route-limit-rpm: "100"
        higress.ingress.kubernetes.io/route-limit-burst-multiplier: "2"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - path: /test
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    
-   Limit requests to example.com/test to 10 per second, with a burst capacity of 50. Configure as follows:
    
    ## Clusters running Kubernetes 1.19 or later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        higress.ingress.kubernetes.io/route-limit-rps: "10"
        # Default is 5
        # higress.ingress.kubernetes.io/route-limit-burst-multiplier: "5"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /test
                pathType: Exact
    ```
    
    ## Clusters running Kubernetes earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        higress.ingress.kubernetes.io/route-limit-rps: "10"
        # Default is 5
        # higress.ingress.kubernetes.io/route-limit-burst-multiplier: "5"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - path: /test
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    

## Global rate limiting control

APIG Ingress integrates with Sentinel to provide global, route-level rate limiting for the gateway cluster. This feature limits the maximum number of requests per second for a route across the entire cluster.

**Note**

This feature requires APIG Ingress gateway version 1.2.25 or later.

You can use the `higress.ingress.kubernetes.io/rate-limit` annotation to set the maximum number of requests per second for a route across the gateway cluster. When rate limiting is triggered, the default behavior is to return a response with a 429 status code and the response body 'sentinel rate limited'. APIG Ingress offers two ways to customize this behavior: custom responses and redirection. You can use only one of these options.

### **Custom response**

-   `higress.ingress.kubernetes.io/rate-limit-fallback-custom-response-code`: The response status code when rate limiting is triggered. The default is 429.
    
-   `higress.ingress.kubernetes.io/rate-limit-fallback-custom-response-body-type`: The format of the response body when rate limiting is triggered. The default is `text`.
    
    -   When configured as `text`, the Content-Type value of the response is `text/plain; charset=UTF-8`.
        
    -   When configured as `json`, the value of the response Content-Type header is `application/json; charset=UTF-8`.
        
-   `higress.ingress.kubernetes.io/rate-limit-fallback-custom-response-body`: The response body when rate limiting is triggered. The default is `sentinel rate limited`.
    

Example 1: The following configuration limits requests for example.com/test to 100 per second across the gateway cluster and uses the default rate limiting behavior.

### **Clusters of version 1.19 and later**

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/rate-limit: "100"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

### **Clusters earlier than version 1.19**

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/rate-limit: "100"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

Example 2: The following configuration limits requests for example.com/test to 100 per second across the gateway cluster. When rate limiting is triggered, the gateway returns a 503 status code and a server is overloaded response body.

### **Clusters of version 1.19 and later**

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/rate-limit: "100"
    higress.ingress.kubernetes.io/rate-limit-fallback-custom-response-code: 503
    higress.ingress.kubernetes.io/rate-limit-fallback-custom-response-body: "server is overload"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

### **Clusters earlier than version 1.19**

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/rate-limit: "100"
    higress.ingress.kubernetes.io/rate-limit-fallback-custom-response-code: 503
    higress.ingress.kubernetes.io/rate-limit-fallback-custom-response-body: "server is overload"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

### **Redirection**

-   `higress.ingress.kubernetes.io/rate-limit-fallback-redirect-url`: The redirection URL when rate limiting is triggered.
    

Example 1: The following configuration limits requests for example.com/test to 100 per second across the gateway cluster. When rate limiting is triggered, the request is redirected to example.com/fallback.

### **Clusters of version 1.19 and later**

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/rate-limit: "100"
    higress.ingress.kubernetes.io/rate-limit-fallback-redirect-url: "example.com/fallback"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

### **Clusters earlier than version 1.19**

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/rate-limit: "100"
    higress.ingress.kubernetes.io/rate-limit-fallback-redirect-url: "example.com/fallback"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

## Global concurrency control

APIG Ingress integrates with Sentinel to provide global concurrency control at the routing level for gateway clusters. This limits the maximum number of concurrent requests that a route can process across the entire gateway cluster.

**Note**

This feature requires APIG Ingress gateway version 1.2.25 or later.

Set the maximum number of concurrent requests for a route across the gateway cluster using the annotation `higress.ingress.kubernetes.io/concurrency-limit`. When global concurrency control triggers, the response status code is `429` and the response body is `sentinel rate limited`. APIG Ingress supports two ways to customize the concurrency control behavior: custom responses and redirection. You can use only one of these options.

### **Custom response**

-   `higress.ingress.kubernetes.io/concurrency-limit-fallback-custom-response-code`: The HTTP status code returned when concurrency control triggers. Default is 429.
    
-   `higress.ingress.kubernetes.io/concurrency-limit-fallback-custom-response-body-type`: The format of the response body when concurrency control triggers. Default is `text`.
    
    -   When set to `text`, the response Content-Type is `text/plain; charset=UTF-8`.
        
    -   When set to `json`, the response Content-Type is `application/json; charset=UTF-8`.
        
-   `higress.ingress.kubernetes.io/concurrency-limit-fallback-custom-response-body`: The response body when concurrency control triggers. Default is `sentinel rate limited`.
    

Example 1: Limit the maximum number of concurrent requests for example.com/test to 1000 across the gateway cluster. Use the default concurrency control behavior.

## Clusters running Kubernetes 1.19 or later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/concurrency-limit: "1000"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Clusters running Kubernetes earlier than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/concurrency-limit: "1000"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

Example 2: Limit the maximum number of concurrent requests for example.com/test to 1000 across the gateway cluster. When concurrency control triggers, return status code `503` and response body `server is overloaded`.

## Clusters running Kubernetes 1.19 or later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/concurrency-limit: "1000"
    higress.ingress.kubernetes.io/concurrency-limit-fallback-custom-response-code: 503
    higress.ingress.kubernetes.io/concurrency-limit-fallback-custom-response-body: "server is overload"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Clusters running Kubernetes earlier than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/concurrency-limit: "1000"
    higress.ingress.kubernetes.io/concurrency-limit-fallback-custom-response-code: 503
    higress.ingress.kubernetes.io/concurrency-limit-fallback-custom-response-body: "server is overload"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

### **Redirection**

-   `higress.ingress.kubernetes.io/concurrency-limit-fallback-redirect-url`: The URL to redirect to when concurrency control triggers.
    

Limit the maximum number of concurrent requests for example.com/test to 1000 across the gateway cluster. When concurrency control triggers, redirect to example.com/fallback.

## Clusters running Kubernetes 1.19 or later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/concurrency-limit: "1000"
    higress.ingress.kubernetes.io/concurrency-limit-fallback-redirect-url: "example.com/fallback"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Clusters running Kubernetes earlier than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/concurrency-limit: "1000"
    higress.ingress.kubernetes.io/concurrency-limit-fallback-redirect-url: "example.com/fallback"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

## **Traffic Mirroring**

Configure traffic mirroring to copy traffic to a specified service. This is commonly used for operation audit and traffic testing scenarios.

-   higress.ingress.kubernetes.io/mirror-target-service: Copies traffic to a specified mirror service. The service format is namespace/name:port.
    
    -   namespace: The namespace where the Kubernetes Service resides. Optional. The default is the namespace where the Ingress resides.
        
    -   name: The name of the Kubernetes Service. Required.
        
    -   port: The port to which traffic is forwarded on the Kubernetes Service. Optional. The default is the first port.
        
    
-   higress.ingress.kubernetes.io/mirror-percentage: The percentage of traffic to copy. The configurable range is 0 to 100. The default is 100.
    

**Note**

When copied traffic is forwarded to the target service, the Host in the original request automatically appends the -shadow suffix.

For example, copy and forward traffic from example.com/test to the target service where the namespace is test, the service name is app, and the port is 8080.

**Note**

In this example, when copied traffic is forwarded to the target service, the Host is automatically rewritten to example.com-shadow.

## Clusters Running Version 1.19 and Later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/mirror-target-service: test/app:8080
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Clusters Running Versions Earlier Than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/mirror-target-service: test/app:8080
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

For example, copy and forward traffic from example.com/test to the target service where the namespace is test, the service name is app, the port is 8080, and the copy percentage is 10%.

**Note**

In this example, when copied traffic is forwarded to the target service, the Host is automatically rewritten to example.com-shadow.

## Clusters Running Version 1.19 and Later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/mirror-target-service: test/app:8080
    higress.ingress.kubernetes.io/mirror-percentage: 10
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Clusters Running Versions Earlier Than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/mirror-target-service: test/app:8080
    higress.ingress.kubernetes.io/mirror-percentage: 10
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

## Configure the backend service protocol: HTTPS or gRPC

By default, APIG Ingress forwards requests to backend application containers using the HTTP protocol. If your application container uses the HTTPS protocol, add the annotation `nginx.ingress.kubernetes.io/backend-protocol: "HTTPS"` to forward requests to the backend application container. If your application container provides a gRPC service, add the annotation `nginx.ingress.kubernetes.io/backend-protocol: "GRPC"` to forward requests to the backend application container.

**Note**

Unlike NGINX Ingress, APIG Ingress automatically uses gRPC or HTTP/2 if the Port Name in the Kubernetes Service resource for your backend service is defined as grpc or http2. In this case, you do not need to configure the annotation `nginx.ingress.kubernetes.io/backend-protocol: "GRPC"`.

For example:

-   Forward the request example/test to the backend service using the HTTPS protocol. Use the following configuration:
    
    ## Clusters running Kubernetes 1.19 or later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/backend-protocol: "HTTPS"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /
                pathType: Exact
    ```
    
    ## Clusters running Kubernetes versions earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/backend-protocol: "HTTPS"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - path: /test
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    
-   Forward the request example/test to the backend service using the gRPC protocol. You can use either of the following methods:
    
    -   Method 1: Use an annotation. Configure as follows:
        
        ## Clusters running Kubernetes 1.19 or later
        
        ```
        apiVersion: networking.k8s.io/v1
        kind: Ingress
        metadata:
          annotations:
            nginx.ingress.kubernetes.io/backend-protocol: "GRPC"
          name: demo
        spec:
          ingressClassName: apig
          rules:
            - host: example.com
              http:
                paths:
                  - backend:
                      service:
                        name: demo-service
                        port: 
                          number: 80
                    path: /test
                    pathType: Exact
        ```
        
        ## Clusters running Kubernetes versions earlier than 1.19
        
        ```
        apiVersion: networking.k8s.io/v1beta1
        kind: Ingress
        metadata:
          annotations:
            nginx.ingress.kubernetes.io/backend-protocol: "GRPC"
          name: demo
        spec:
          ingressClassName: apig
          rules:
            - host: example.com
              http:
                paths:
                  - path: /test
                    backend:
                      serviceName: demo-service
                      servicePort: 80
        ```
        
    -   Method 2: Use the Service Port Name. Configure as follows:
        
        ## Clusters running Kubernetes 1.19 or later
        
        ```
        apiVersion: networking.k8s.io/v1
        kind: Ingress
        metadata:
          name: demo
        spec:
          ingressClassName: apig
          rules:
            - host: example.com
              http:
                paths:
                  - backend:
                      service:
                        name: demo-service
                        port: 
                          number: 80
                    path: /order
                    pathType: Exact
        ---
        apiVersion: v1
        kind: Service
        metadata:
          name: demo-service
        spec:
          ports:
            - name: grpc
              port: 80
              protocol: TCP
          selector:
            app: demo-service
        ```
        
        ## Clusters running Kubernetes versions earlier than 1.19
        
        ```
        apiVersion: networking.k8s.io/v1beta1
        kind: Ingress
        metadata:
          name: demo
        spec:
          ingressClassName: apig
          rules:
            - host: example.com
              http:
                paths:
                  - path: /test
                    backend:
                      serviceName: demo-service
                      servicePort: 80
        ---
        apiVersion: v1
        kind: Service
        metadata:
          name: demo-service
        spec:
          ports:
            - name: grpc
              port: 80
              protocol: TCP
          selector:
            app: demo-service
        ```
        

## Configure the load balancing algorithm for backend services

Load balancing determines how the gateway selects a node when forwarding requests to backend services.

### Standard load balancing algorithms

nginx.ingress.kubernetes.io/load-balance: The standard load balancing algorithm for backend services. The default is round\_robin. Valid values are:

-   round\_robin: Round-robin load balancing.
    
-   least\_conn: Least-connections load balancing.
    
-   random: Random load balancing.
    

**Important**

The cloud-native gateway does not support the EWMA algorithm. If you configure EWMA, the gateway falls back to round-robin.

For example, set the load balancing algorithm for the backend service demo-service to least\_conn. Configure as follows:

## Clusters running Kubernetes 1.19 or later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/load-balance: "least_conn"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /order
            pathType: Exact
```

## Clusters running Kubernetes earlier than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/load-balance: "least_conn"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

### Consistent-hash load balancing algorithms

Consistent-hash load balancing ensures request affinity. Requests with the same hash key always go to the same node. APIG Ingress supports using selected NGINX variables, request headers, and request path parameters as hash keys.

nginx.ingress.kubernetes.io/upstream-hash-by: The consistent-hash load balancing algorithm. The cloud-native gateway supports the following hash key types:

-   The cloud-native gateway supports selected NGINX variables:
    
    -   $request\_uri: The requested path, including path parameters, serves as the hash key.
        
    -   $host: Use the request host header as the hash key.
        
    -   $remote\_addr: Use the client IP address as the hash key.
        
-   Consistent-hash based on request headers. Set the annotation to $http\_headerName.
    
-   Consistent-hash based on request path parameters. Set the annotation to $arg\_varName.
    

Examples:

-   Use the client IP address as the hash key. Requests from the same client IP always go to the same node. Configure as follows:
    
    ## Clusters running Kubernetes 1.19 or later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/upstream-hash-by: "$remote_addr"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /test
                pathType: Exact
    ```
    
    ## Clusters running Kubernetes earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/upstream-hash-by: "$remote_addr"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - path: /test
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    
-   Use the x-stage request header as the hash key. Requests with the same x-stage header value always go to the same node. Configure as follows:
    
    ## Clusters running Kubernetes 1.19 or later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/upstream-hash-by: "$http_x-stage"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /test
                pathType: Exact
    ```
    
    ## Clusters running Kubernetes earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/upstream-hash-by: "$http_x-stage"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - path: /test
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    
-   Use the x-stage path parameter as the hash key. Requests with the same x-stage path parameter value always go to the same node. Configure as follows:
    
    ## Clusters running Kubernetes 1.19 or later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/upstream-hash-by: "$arg_x-stage"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /test
                pathType: Exact
    ```
    
    ## Clusters running Kubernetes earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/upstream-hash-by: "$arg_x-stage"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - path: /test
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    

## Service Warm-up (Graceful Start)

Service warm-up ensures that when new nodes come online, traffic gradually increases within a specified ramp-up period. This guarantees that new nodes complete their warm-up.

higress.ingress.kubernetes.io/warmup: The service ramp-up period, in seconds. It is disabled by default.

**Note**

Service warm-up depends on the selected load balancing algorithm. Currently, it supports only Round Robin and least\_conn.

For example, to enable warm-up for the backend service demo-service with a ramp-up period of 30 seconds, configure as follows:

## Clusters running Kubernetes 1.19 and later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/warmup: "30"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Clusters running Kubernetes earlier than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/warmup: "30"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

## Cookie affinity (session persistence)

Requests with the same cookie are always routed to the same node by the gateway. If the first request includes a cookie, the APIG Ingress generates a cookie in the first response. This cookie ensures that subsequent requests are always routed to the same node.

**Annotation**

**Description**

nginx.ingress.kubernetes.io/affinity

The affinity type. Only cookie affinity is supported. The default value is cookie.

nginx.ingress.kubernetes.io/affinity-mode

The affinity mode. The cloud-native gateway supports only the Balanced mode. The default value is Balanced.

nginx.ingress.kubernetes.io/session-cookie-name

Sets the value of a specified cookie as the hash key, which defaults to INGRESSCOOKIE.

nginx.ingress.kubernetes.io/session-cookie-path

The path value for the cookie generated when the specified cookie does not exist. The default value is /.

nginx.ingress.kubernetes.io/session-cookie-max-age

The maximum age, in seconds, of the cookie generated when the specified cookie does not exist. The default value is session level.

nginx.ingress.kubernetes.io/session-cookie-expires

The expiration time, in seconds, of the cookie generated when the specified cookie does not exist. The default value is session level.

Examples:

-   Enable cookie affinity using the default APIG Ingress configuration. The cookie name is INGRESSCOOKIE. The cookie path is /. The cookie lifecycle is session level. Configure as follows:
    
    ## Clusters running Kubernetes 1.19 or later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/affinity: "cookie"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /test
                pathType: Exact
    ```
    
    ## Clusters running Kubernetes earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/affinity: "cookie"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - path: /test
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    
-   Enable cookie affinity with the cookie name test, the cookie path /, and a cookie expiration time of 10 seconds. Configure as follows:
    
    ## Clusters running Kubernetes 1.19 or later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/affinity: "cookie"
        nginx.ingress.kubernetes.io/session-cookie-name: "test"
        nginx.ingress.kubernetes.io/session-cookie-max-age: "10"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - backend:
                  service:
                    name: demo-service
                    port: 
                      number: 80
                path: /test
                pathType: Exact
    ```
    
    ## Clusters running Kubernetes earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/affinity: "cookie"
        nginx.ingress.kubernetes.io/session-cookie-name: "test"
        nginx.ingress.kubernetes.io/session-cookie-max-age: "10"
      name: demo
    spec:
      ingressClassName: apig
      rules:
        - host: example.com
          http:
            paths:
              - path: /test
                backend:
                  serviceName: demo-service
                  servicePort: 80
    ```
    

## **Connection Pool Configuration Between the Gateway and Backend Services**

Configure the connection pool for a specific service on the gateway. This controls the number of connections between the gateway and the backend service. It prevents backend service overload and improves backend service stability and high availability.

-   higress.ingress.kubernetes.io/connection-policy-tcp-max-connection: The maximum number of connections that can be established between the gateway and the backend service.
    
-   higress.ingress.kubernetes.io/connection-policy-tcp-max-connection-per-endpoint: The maximum number of connections that can be established between the gateway and a single node of the backend service.
    
-   higress.ingress.kubernetes.io/connection-policy-http-max-request-per-connection: The maximum number of requests on a single connection between the gateway and the backend service.
    

For example, for the demo-service backend service configuration, the maximum number of connections that can be established between the gateway and the backend service is 10, and the maximum number of connections that can be established between the gateway and a single node of the backend service is 2.

## Clusters of Version 1.19 and Later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/connection-policy-tcp-max-connection: 10
  	higress.ingress.kubernetes.io/connection-policy-tcp-max-connection-per-endpoint: 2
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port:
                  number: 80
            path: /test
            pathType: Exact
```

## Clusters Before Version 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/connection-policy-tcp-max-connection: 10
  	higress.ingress.kubernetes.io/connection-policy-tcp-max-connection-per-endpoint: 2
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

## Configure the TLS version and cipher suites between the client and the gateway

By default, APIG Ingress sets the minimum Transport Layer Security (TLS) version to TLSv1.0 and the maximum to TLSv1.3. The default cipher suites are:

-   ECDHE-ECDSA-AES128-GCM-SHA256
    
-   ECDHE-RSA-AES128-GCM-SHA256
    
-   ECDHE-ECDSA-AES128-SHA
    
-   ECDHE-RSA-AES128-SHA
    
-   AES128-GCM-SHA256
    
-   AES128-SHA
    
-   ECDHE-ECDSA-AES256-GCM-SHA384
    
-   ECDHE-RSA-AES256-GCM-SHA384
    
-   ECDHE-ECDSA-AES256-SHA
    
-   ECDHE-RSA-AES256-SHA
    
-   AES256-GCM-SHA384
    
-   AES256-SHA
    

Use the following annotations to set the minimum or maximum TLS version and cipher suites for a specific domain name.

**Annotation**

**Description**

higress.ingress.kubernetes.io/tls-min-protocol-version

Specifies the minimum TLS version. The default value is TLSv1.0. Valid values are:

-   TLSv1.0
    
-   TLSv1.1
    
-   TLSv1.2
    
-   TLSv1.3
    

higress.ingress.kubernetes.io/tls-max-protocol-version

Specifies the maximum TLS version. The default value is TLSv1.3.

nginx.ingress.kubernetes.io/ssl-cipher

Specifies the TLS cipher suites. To specify multiple suites, separate them with colons (:). This setting applies only to TLS handshakes that use TLS versions 1.0 through 1.2.

For example, for the domain name example.com, set the minimum and maximum TLS versions to TLSv1.2. The configuration is as follows:

## Clusters of version 1.19 and later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/tls-min-protocol-version: "TLSv1.2"
    higress.ingress.kubernetes.io/tls-max-protocol-version: "TLSv1.2"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Clusters earlier than version 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    higress.ingress.kubernetes.io/tls-min-protocol-version: "TLSv1.2"
    higress.ingress.kubernetes.io/tls-max-protocol-version: "TLSv1.2"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```

## Gateway and Backend Service Mutual TLS (mTLS)

By default, APIG Ingress uses the HTTP protocol to forward requests to backend application containers. You can use the annotation `nginx.ingress.kubernetes.io/backend-protocol: "HTTPS"` to configure APIG Ingress to use the HTTPS protocol to access backend services. However, this is one-way TLS, meaning that APIG Ingress only verifies the certificate provided by the backend service. The backend service's certificate must typically be issued by a trusted Certificate Authority (CA). A more secure pattern is zero trust, where the gateway verifies the backend service's certificate and the backend service verifies the gateway's certificate. This is known as mutual TLS (mTLS), where the gateway and the backend service perform mutual authentication.

**Annotation**

**Description**

nginx.ingress.kubernetes.io/proxy-ssl-secret

The client certificate used by the gateway for identity authentication by the backend service. Format: secretNamespace/secretName.

nginx.ingress.kubernetes.io/proxy-ssl-name

The Server Name Indication (SNI) used during the TLS handshake.

nginx.ingress.kubernetes.io/proxy-ssl-server-name

Enables or disables SNI during the TLS handshake.

For example, to enable mTLS between the gateway and the backend service, use a secret named gateway-cert in the default namespace. Configure as follows:

## Clusters running Kubernetes 1.19 or later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/proxy-ssl-secret: "default/ateway-cert"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Clusters running Kubernetes earlier than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/proxy-ssl-secret: "default/gateway-cert"
  name: demo
spec:
  ingressClassName: apig
  rules:
    - host: example.com
      http:
        paths:
          - path: /test
            backend:
              serviceName: demo-service
              servicePort: 80
```
