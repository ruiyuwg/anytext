When updating a service, you can use release methods such as rolling upgrades, blue-green deployments, and phased releases. This topic describes how to use the Nginx Ingress Controller in a Container Service for Kubernetes (ACK) cluster to implement a phased release for an application.

## Background information

Phased releases and blue-green deployments involve creating a new production environment that is identical to the existing one. Based on specific rules, traffic is gradually directed to the new version without affecting the old version. After the new version is stable, all traffic is switched to it.

A blue-green deployment is a type of phased release. Some users continue to use the old version of the service, while traffic from other users is switched to the new version. If the new version is stable, all users are gradually switched to it.

The phased release feature in the ACK console supports two methods.

-   The canary-\* annotation method: You can use the `canary-*` annotation to configure blue-green deployments and phased releases. The `canary-*` annotation is the official community method for implementing phased releases.
    
-   The service-\* annotation method (deprecated): The `service-*` annotation was an earlier method used by the ACK Nginx Ingress Controller to implement phased releases.
    

**Important**

The `service-*` annotation is no longer available in [Nginx Ingress Controller](/help/en/ack/product-overview/nginx-ingress-controller) v1.12 and later. Do not use it.

## Scenarios

### Traffic splitting based on client requests

Suppose you have a service, Service A, that provides a Layer 7 service in your online environment. You want to release a new version, Service A', with new features. Instead of replacing Service A directly, you can forward requests to Service A' only if the request header contains `foo=bar` or the cookie contains `foo=bar`. Once Service A' is running stably, you can switch all traffic from Service A to Service A' and then take Service A offline.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0024091771/CAEQUxiBgIDgoO3r3hkiIGMxMGI5ZDRiNTlmOTQwMmY5MDkyZmM0ODUxMGFmMjQ44106618_20231206180833.165.svg)

### Traffic splitting based on service weights

Suppose you have a service, Service B, that provides a Layer 7 service in your online environment. You have fixed some issues and need to release a new version, Service B'. Instead of switching all client traffic to the new version at once, you want to switch 20% of the traffic to Service B'. After Service B' is stable, you can switch all traffic from Service B to Service B' and then take Service B offline.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0024091771/CAEQUxiBgMCotfDr3hkiIDdjNjVkNGE2N2VjMTQyZjM5ZGQ3MDY4MmZkNjUwYzA24106618_20231206180903.413.svg)

To meet these application release requirements, the Alibaba Cloud Container Service Ingress Controller supports the following traffic splitting methods:

-   Traffic splitting based on the request header, suitable for phased releases and A/B testing scenarios.
    
-   Traffic splitting based on the cookie, suitable for phased releases and A/B testing scenarios.
    
-   Traffic splitting based on the query parameter, suitable for phased releases and A/B testing scenarios.
    
-   Traffic splitting based on service weight, suitable for blue-green deployment scenarios.
    

## The canary-\* annotation method

### Annotation description

The Nginx Ingress Controller uses the following `canary-*` annotations to support phased releases for applications.

**Annotation**

**Description**

**Applicable ACK Nginx Ingress Controller version**

nginx.ingress.kubernetes.io/canary

-   Set this annotation to `true`. Otherwise, other rules do not take effect.
    
-   Valid values:
    
    -   `true`: Enables the `canary` feature.
        
    -   `false`: Disables the `canary` feature.
        

≥v0.22.0

nginx.ingress.kubernetes.io/canary-by-header

-   Specifies a phased release based on a request header.
    
-   Special values for the request header:
    
    -   `always`: Traffic is always routed to the canary service.
        
    -   `never`: Traffic is never routed to the canary service.
        
-   If you do not specify a value for the request header, traffic is forwarded as long as the header exists.
    

≥v0.22.0

nginx.ingress.kubernetes.io/canary-by-header-value

-   Specifies a phased release based on the value of a request header.
    
-   This must be used with the `canary-by-header` annotation.
    

≥v0.30.0

nginx.ingress.kubernetes.io/canary-by-header-pattern

-   Specifies a phased release based on the value of a request header, using a regular expression for matching.
    
-   This must be used with the `canary-by-header` annotation.
    
-   The value is the regular expression used to match the request header's value.
    

≥v0.44.0

nginx.ingress.kubernetes.io/canary-by-cookie

-   Specifies a phased release based on a cookie. For example, `nginx.ingress.kubernetes.io/canary-by-cookie: foo`.
    
-   Cookie value:
    
    -   `always`: When `foo=always`, traffic is routed to the canary service.
        
    -   `never`: When `foo=never`, traffic is not routed to the canary service.
        
-   Traffic is forwarded only if the cookie exists and its value is `always`.
    

≥v0.22.0

nginx.ingress.kubernetes.io/canary-weight

-   Specifies a phased release based on weight.
    
-   The value ranges from 0 to the total weight.
    
-   If no total weight is set, the default is 100.
    

≥v0.22.0

nginx.ingress.kubernetes.io/canary-weight-total

-   Specifies the total weight value.
    
-   If no total value is set, the default is 100.
    

≥v1.1.2

The priorities of the different grayscale methods are ranked in descending order:

`canary-by-header` > `canary-by-cookie` > `canary-weight`

**Note**

Each Ingress rule supports only one Canary Ingress at a time. Additional Canary Ingresses are ignored.

### **Step 1: Deploy the service**

Deploy an Nginx service and provide Layer 7 domain name access through the Nginx Ingress Controller.

1.  Create a Deployment and a Service.
    
    1.  Create an nginx.yaml file.
        
        **View YAML file**
        
        ```
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: old-nginx
        spec:
          replicas: 2
          selector:
            matchLabels:
              run: old-nginx
          template:
            metadata:
              labels:
                run: old-nginx
            spec:
              containers:
              - image: registry.cn-hangzhou.aliyuncs.com/acs-sample/old-nginx
                imagePullPolicy: Always
                name: old-nginx
                ports:
                - containerPort: 80
                  protocol: TCP
              restartPolicy: Always
        ---
        apiVersion: v1
        kind: Service
        metadata:
          name: old-nginx
        spec:
          ports:
          - port: 80
            protocol: TCP
            targetPort: 80
          selector:
            run: old-nginx
          sessionAffinity: None
          type: NodePort
        ```
        
    2.  Run the following command to create the Deployment and Service.
        
        ```
        kubectl apply -f nginx.yaml
        ```
        
2.  Deploy the Ingress.
    
    1.  Create an ingress.yaml file.
        
        #### **For clusters of v1.19 and later**
        
        ```
        apiVersion: networking.k8s.io/v1
        kind: Ingress
        metadata:
          name: gray-release
        spec:
          ingressClassName: nginx
          rules:
          - host: www.example.com
            http:
              paths:
              # Old version of the service.
              - path: /
                backend:
                  service: 
                    name: old-nginx
                    port:
                      number: 80
                pathType: ImplementationSpecific
        ```
        
        #### **For clusters earlier than v1.19**
        
        ```
        apiVersion: networking.k8s.io/v1beta1
        kind: Ingress
        metadata:
          name: gray-release
        spec:
          rules:
          - host: www.example.com
            http:
              paths:
              # Old version of the service.
              - path: /
                backend:
                  serviceName: old-nginx
                  servicePort: 80
        ```
        
    2.  Run the following command to deploy the Ingress.
        
        ```
        kubectl apply -f ingress.yaml
        ```
        
    
3.  Test the access.
    
    1.  Run the following command to retrieve the external IP address.
        
        ```
        kubectl get ingress
        ```
        
    2.  Run the following command to check the routing access.
        
        ```
        curl -H "Host: www.example.com"  http://<EXTERNAL_IP>
        ```
        
        Expected output:
        
        ```
        old
        ```
        

### **Step 2: Perform a phased release of the new service version**

Publish a new version of the Nginx service and configure the routing rules.

1.  Deploy the new version of the Deployment and Service.
    
    1.  Create an nginx1.yaml file.
        
        **View YAML file**
        
        ```
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: new-nginx
        spec:
          replicas: 1
          selector:
            matchLabels:
              run: new-nginx
          template:
            metadata:
              labels:
                run: new-nginx
            spec:
              containers:
              - image: registry.cn-hangzhou.aliyuncs.com/acs-sample/new-nginx
                imagePullPolicy: Always
                name: new-nginx
                ports:
                - containerPort: 80
                  protocol: TCP
              restartPolicy: Always
        ---
        apiVersion: v1
        kind: Service
        metadata:
          name: new-nginx
        spec:
          ports:
          - port: 80
            protocol: TCP
            targetPort: 80
          selector:
            run: new-nginx
          sessionAffinity: None
          type: NodePort
        ```
        
    2.  You can run the following command to deploy the updated Deployment and Service.
        
        ```
        kubectl apply -f nginx1.yaml
        ```
        
2.  Set the routing rules to access the new service version.
    
    ACK supports the following three types of routing rules. You can select the one that meets your requirements.
    
    -   Allow access to the new service version only for clients that meet specific rules. The following example routes requests to the new service version only if the request header contains `foo=bar`.
        
        1.  Based on the preceding condition, create a new Ingress resource named `gray-release-canary` in the ingress1.yaml file.
            
            #### **For clusters of v1.19 and later**
            
            ```
            apiVersion: networking.k8s.io/v1
            kind: Ingress
            metadata:
              name: gray-release-canary
              annotations:
                # Enable Canary.
                nginx.ingress.kubernetes.io/canary: "true"
                # The request header is foo.
                nginx.ingress.kubernetes.io/canary-by-header: "foo"
                # Requests are routed to the new service version new-nginx only when the value of the foo header is bar.
                nginx.ingress.kubernetes.io/canary-by-header-value: "bar"
                
            spec:
              ingressClassName: nginx
              rules:
              - host: www.example.com
                http:
                  paths:
                  # New version of the service.
                  - path: /
                    backend:
                      service: 
                        name: new-nginx
                        port:
                          number: 80
                    pathType: ImplementationSpecific
            ```
            
            #### **For clusters earlier than v1.19**
            
            ```
            apiVersion: networking.k8s.io/v1beta1
            kind: Ingress
            metadata:
              name: gray-release-canary
              annotations:
                # Enable Canary.
                nginx.ingress.kubernetes.io/canary: "true"
                # The request header is foo.
                nginx.ingress.kubernetes.io/canary-by-header: "foo"
                # Requests are routed to the new service version new-nginx only when the value of the foo header is bar.
                nginx.ingress.kubernetes.io/canary-by-header-value: "bar"
            spec:
              rules:
              - host: www.example.com
                http:
                  paths:
                  # New version of the service.
                  - path: /
                    backend:
                      serviceName: new-nginx
                      servicePort: 80
            ```
            
        2.  Run the following command to deploy the Ingress.
            
            ```
            kubectl apply -f ingress1.yaml
            ```
            
        3.  Run the following command to obtain the external IP address.
            
            ```
            kubectl get ingress
            ```
            
        4.  Verify the routing access.
            
            1.  Run the following command to access the service.
                
                ```
                curl -H "Host: www.example.com"  http://<EXTERNAL_IP>
                ```
                
                Expected output:
                
                ```
                old
                ```
                
            2.  Run the following command to access the service with a client request whose header contains `foo=bar`.
                
                ```
                curl -H "Host: www.example.com" -H "foo: bar" http://<EXTERNAL_IP>
                ```
                
                Expected output:
                
                ```
                new
                ```
                
            
            Run the commands again. The output shows that only client requests with the header `foo=bar` are routed to the new service version.
            
        
    -   Route a percentage of traffic to a new application version for requests that do not match a specific rule. For example, if a request does not contain the required `foo=bar` header, you can route 50% of the traffic to the new application version.
        
        1.  Modify the Ingress created in step [2](#step-iir-xfu-d0i) with the following content.
            
            #### **For clusters of v1.19 and later**
            
            ```
            apiVersion: networking.k8s.io/v1
            kind: Ingress
            metadata:
              name: gray-release-canary
              annotations:
                # Enable Canary.
                nginx.ingress.kubernetes.io/canary: "true"
                # The request header is foo.
                nginx.ingress.kubernetes.io/canary-by-header: "foo"
                # Requests are routed to the new service version new-nginx only when the value of the foo header is bar.
                nginx.ingress.kubernetes.io/canary-by-header-value: "bar"
                # If the preceding rule is not met, 50% of the traffic is routed to the new service version new-nginx.
                nginx.ingress.kubernetes.io/canary-weight: "50"
            spec:
              ingressClassName: nginx
              rules:
              - host: www.example.com
                http:
                  paths:
                  # New version of the service.
                  - path: /
                    backend:
                      service: 
                        name: new-nginx
                        port:
                          number: 80
                    pathType: ImplementationSpecific
            ```
            
            #### **For clusters earlier than v1.19**
            
            ```
            apiVersion: networking.k8s.io/v1beta1
            kind: Ingress
            metadata:
              name: gray-release-canary
              annotations:
                # Enable Canary.
                nginx.ingress.kubernetes.io/canary: "true"
                # The request header is foo.
                nginx.ingress.kubernetes.io/canary-by-header: "foo"
                # Requests are routed to the new service version new-nginx only when the value of the foo header is bar.
                nginx.ingress.kubernetes.io/canary-by-header-value: "bar"
                # If the preceding rule is not met, 50% of the traffic is routed to the new service version new-nginx.
                nginx.ingress.kubernetes.io/canary-weight: "50"
            spec:
              rules:
              - host: www.example.com
                http:
                  paths:
                  # New version of the service.
                  - path: /
                    backend:
                      serviceName: new-nginx
                      servicePort: 80
            ```
            
        2.  Run the following command to deploy the Ingress.
            
            ```
            kubectl apply -f ingress.yaml
            ```
            
        3.  Run the following command to obtain the external IP address.
            
            ```
            kubectl get ingress
            ```
            
        4.  Verify the routing access.
            
            1.  Run the following command to access the service.
                
                ```
                curl -H "Host: www.example.com"  http://<EXTERNAL_IP>
                ```
                
                Expected output:
                
                ```
                old
                ```
                
            2.  Run the following command to access the service with a client request whose header contains `foo=bar`.
                
                ```
                curl -H "Host: www.example.com" -H "foo: bar" http://<EXTERNAL_IP>
                ```
                
                Expected output:
                
                ```
                new
                ```
                
            
            -   With the **foo=bar** request header:
                
                100% of the traffic is routed to the new `new-nginx` service. This is controlled by `canary-by-header` and `canary-by-header-value`.
                
            -   Without the **foo=bar** request header:
                
                50% of the traffic is routed to the new `new-nginx` service. This is controlled by `canary-weight`.
                
            
        
    -   Route a specific percentage of requests to the new service version. In the following example, 50% of the traffic is routed to the new service version.
        
        1.  Modify the Ingress created in step [2](#step-iir-xfu-d0i) with the following content.
            
            #### **For clusters of v1.19 and later**
            
            ```
            apiVersion: networking.k8s.io/v1
            kind: Ingress
            metadata:
              name: gray-release-canary
              annotations:
                # Enable Canary.
                nginx.ingress.kubernetes.io/canary: "true"
                # Route 50% of the traffic to the new service version new-nginx.
                # The default total value is 100.
                nginx.ingress.kubernetes.io/canary-weight: "50"
            spec:
              ingressClassName: nginx
              rules:
              - host: www.example.com
                http:
                  paths:
                  # New version of the service.
                  - path: /
                    backend:
                      service: 
                        name: new-nginx
                        port:
                          number: 80
                    pathType: ImplementationSpecific
            ```
            
            #### **For clusters earlier than v1.19**
            
            ```
            apiVersion: networking.k8s.io/v1beta1
            kind: Ingress
            metadata:
              name: gray-release-canary
              annotations:
                # Enable Canary.
                nginx.ingress.kubernetes.io/canary: "true"
                # Route 50% of the traffic to the new service version new-nginx.
                # The default total value is 100.
                nginx.ingress.kubernetes.io/canary-weight: "50"
            spec:
              rules:
              - host: www.example.com
                http:
                  paths:
                  # New version of the service.
                  - path: /
                    backend:
                      serviceName: new-nginx
                      servicePort: 80
            ```
            
        2.  Run the following command to deploy the Ingress.
            
            ```
            kubectl apply -f ingress.yaml
            ```
            
        3.  Run the following command to obtain the external IP address.
            
            ```
            kubectl get ingress
            ```
            
        4.  Run the following command to verify the routing access.
            
            ```
            curl -H "Host: www.example.com" http://<EXTERNAL_IP>
            ```
            
        
        Run the command again. The output shows that 50% of the traffic is routed to the new service version.
        
    

### **Step 3: Delete the old service version**

Once you verify that the new service version is stable and meets expectations, you can take the old service version offline, leaving only the new version running. To do this, point the old Service to the new version's Deployment, and then delete the old Deployment and the new Service.

1.  Modify the old Service file, nginx.yaml, to point to the new service.
    
    **View YAML file**
    
    ```
    apiVersion: v1
    kind: Service
    metadata:
      name: old-nginx
    spec:
      ports:
      - port: 80
        protocol: TCP
        targetPort: 80
      selector:
        # Point to the new service version.
        run: new-nginx
      sessionAffinity: None
      type: NodePort
    ```
    
2.  Run the following command to deploy the old version of the service.
    
    ```
    kubectl apply -f nginx.yaml
    ```
    
3.  Run the following command to obtain the external IP address.
    
    ```
    kubectl get ingress
    ```
    
4.  Run the following command to check the routing.
    
    ```
    curl -H "Host: www.example.com" http://<EXTERNAL_IP>
    ```
    
    Expected output:
    
    ```
    new
    ```
    
    Run the command again. You can see that all requests are routed to the new service version.
    
5.  Run the following command to delete the Canary Ingress resource `gray-release-canary`.
    
    ```
    kubectl delete ingress gray-release-canary
    ```
    
6.  Delete the old Deployment and the new Service.
    
    1.  Run the following command to delete the old Deployment.
        
        ```
        kubectl delete deploy old-nginx
        ```
        
    2.  Run the following command to delete the new Service.
        
        ```
        kubectl delete svc new-nginx
        ```
        

## The service-\* annotation method

**Important**

The `service-*` annotation is no longer available in [Nginx Ingress Controller](/help/en/ack/product-overview/nginx-ingress-controller) v1.12 and later. Do not use it.

### Annotation description

The Nginx Ingress Controller uses the following annotations to support phased releases for application services.

-   nginx.ingress.kubernetes.io/service-match
    
    This annotation configures the routing rules for the new service version.
    
    ```
    nginx.ingress.kubernetes.io/service-match: | 
        <service-name>: <match-rule>
    # Metric description:
    # service-name: The service name. Requests that match the match-rule are routed to this service.
    # match-rule: The routing rule.
    #
    # Routing rules:
    # 1. Supported match types
    # - header: Based on the request header. Supports Regex Match and exact match.
    # - cookie: Based on the cookie. Supports Regex Match and exact match.
    # - query: Based on the request parameter. Supports Regex Match and exact match.
    #
    # 2. Match methods
    # - Regex Match format: /{regular expression}/. Backslashes (//) indicate a Regex Match.
    # - Exact match format: "{exact expression}". Quotation marks ("") indicate an exact match.
    ```
    
    Example of routing rule configurations:
    
    ```
    # Requests whose foo header matches the regular expression ^bar$ are forwarded to the new service version new-nginx.
    new-nginx: header("foo", /^bar$/)
    # Requests whose foo header is an exact match for bar are forwarded to the new service version new-nginx.
    new-nginx: header("foo", "bar")
    # Requests whose foo cookie matches the regular expression ^sticky-.+$ are forwarded to the new service version new-nginx.
    new-nginx: cookie("foo", /^sticky-.+$/)
    # Requests whose foo query parameter is an exact match for bar are forwarded to the new service version new-nginx.
    new-nginx: query("foo", "bar")
    ```
    
-   nginx.ingress.kubernetes.io/service-weight
    
    This annotation configures the traffic weights for the old and new service versions.
    
    ```
    nginx.ingress.kubernetes.io/service-weight: | 
        <new-svc-name>:<new-svc-weight>, <old-svc-name>:<old-svc-weight>
    Metric description:
    new-svc-name: The name of the new service version.
    new-svc-weight: The weight of the new service version.
    old-svc-name: The name of the old service version.
    old-svc-weight: The weight of the old service version.
    ```
    
    Example of a service weight configuration:
    
    ```
    nginx.ingress.kubernetes.io/service-weight: | 
        new-nginx: 20, old-nginx: 60
    ```
    

### **Step 1: Deploy the service**

Deploy an Nginx service and provide Layer 7 domain name access using the Nginx Ingress Controller.

1.  Create a Deployment and a Service.
    
    1.  Create an nginx.yaml file.
        
        **View YAML file**
        
        ```
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: old-nginx
        spec:
          replicas: 2
          selector:
            matchLabels:
              run: old-nginx
          template:
            metadata:
              labels:
                run: old-nginx
            spec:
              containers:
              - image: registry.cn-hangzhou.aliyuncs.com/acs-sample/old-nginx
                imagePullPolicy: Always
                name: old-nginx
                ports:
                - containerPort: 80
                  protocol: TCP
              restartPolicy: Always
        ---
        apiVersion: v1
        kind: Service
        metadata:
          name: old-nginx
        spec:
          ports:
          - port: 80
            protocol: TCP
            targetPort: 80
          selector:
            run: old-nginx
          sessionAffinity: None
          type: NodePort
        ```
        
    2.  Run the following command to create the Deployment and Service.
        
        ```
        kubectl apply -f nginx.yaml
        ```
        
2.  Deploy the Ingress.
    
    1.  Create an ingress.yaml file.
        
        #### **For clusters of v1.19 and later**
        
        ```
        apiVersion: networking.k8s.io/v1
        kind: Ingress
        metadata:
          name: gray-release
        spec:
          ingressClassName: nginx
          rules:
          - host: www.example.com
            http:
              paths:
              # Old version of the service.
              - path: /
                backend:
                  service: 
                    name: old-nginx
                    port:
                      number: 80
                pathType: ImplementationSpecific
        ```
        
        #### **For clusters earlier than v1.19**
        
        ```
        apiVersion: networking.k8s.io/v1beta1
        kind: Ingress
        metadata:
          name: gray-release
        spec:
          rules:
          - host: www.example.com
            http:
              paths:
              # Old version of the service.
              - path: /
                backend:
                  serviceName: old-nginx
                  servicePort: 80
        ```
        
    2.  Run the following command to deploy the Ingress.
        
        ```
        kubectl apply -f ingress.yaml
        ```
        
3.  Test the access.
    
    1.  Run the following command to retrieve the external IP address.
        
        ```
        kubectl get ingress
        ```
        
    2.  Run the following command to check the routing access.
        
        ```
        curl -H "Host: www.example.com"  http://<EXTERNAL_IP>
        ```
        
        Expected output:
        
        ```
        old
        ```
        

### **Step 2: Perform a phased release of the new service version**

Deploy a new version of the Nginx service and configure the routing rules.

1.  Deploy the new version of the Deployment and Service.
    
    1.  Create an nginx1.yaml file.
        
        **View a YAML file**
        
        ```
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: new-nginx
        spec:
          replicas: 1
          selector:
            matchLabels:
              run: new-nginx
          template:
            metadata:
              labels:
                run: new-nginx
            spec:
              containers:
              - image: registry.cn-hangzhou.aliyuncs.com/acs-sample/new-nginx
                imagePullPolicy: Always
                name: new-nginx
                ports:
                - containerPort: 80
                  protocol: TCP
              restartPolicy: Always
        ---
        apiVersion: v1
        kind: Service
        metadata:
          name: new-nginx
        spec:
          ports:
          - port: 80
            protocol: TCP
            targetPort: 80
          selector:
            run: new-nginx
          sessionAffinity: None
          type: NodePort
        ```
        
    2.  Deploy the new version of the Deployment and Service.
        
        ```
        kubectl apply -f nginx1.yaml
        ```
        
2.  Set the routing rules to access the new service version.
    
    ACK supports the following three types of routing rules. You can choose one based on your requirements.
    
    -   Route requests to the new service version only from clients that meet specific rules. The following example routes requests to the new service version only if the request header contains `foo=bar`.
        
        1.  Modify the Ingress that you created in step [2](#step-r7w-zr8-ks5) to use the following content.
            
        
        #### **For clusters of v1.19 and later**
        
        ```
        apiVersion: networking.k8s.io/v1
        kind: Ingress
        metadata:
          name: gray-release
          annotations:
            # Requests whose foo header matches the regular expression foo=bar are routed to the new service version new-nginx.
            nginx.ingress.kubernetes.io/service-match: | 
              new-nginx: header("foo", /^bar$/)
        spec:
          ingressClassName: nginx
          rules:
          - host: www.example.com
            http:
              paths:
              # Old version of the service.
              - path: /
                backend:
                  service: 
                    name: old-nginx
                    port:
                      number: 80
                pathType: ImplementationSpecific
              # New version of the service.
              - path: /
                backend:
                  service: 
                    name: new-nginx
                    port:
                      number: 80
                pathType: ImplementationSpecific
        ```
        
        #### **For clusters earlier than v1.19**
        
        ```
        apiVersion: networking.k8s.io/v1beta1
        kind: Ingress
        metadata:
          name: gray-release
          annotations:
            # Requests whose foo header matches the regular expression foo=bar are routed to the new service version new-nginx.
            nginx.ingress.kubernetes.io/service-match: | 
              new-nginx: header("foo", /^bar$/)
        spec:
          rules:
          - host: www.example.com
            http:
              paths:
              # Old version of the service.
              - path: /
                backend:
                  serviceName: old-nginx
                  servicePort: 80
              # New version of the service.
              - path: /
                backend:
                  serviceName: new-nginx
                  servicePort: 80
        ```
        
        1.  Run the following command to deploy the Ingress.
            
            ```
            kubectl apply -f ingress.yaml
            ```
            
        2.  Run the following command to retrieve the external IP address.
            
            ```
            kubectl get ingress
            ```
            
        3.  Check the routing access.
            
            1.  Run the following command to access the service.
                
                ```
                curl -H "Host: www.example.com"  http://<EXTERNAL_IP>
                ```
                
                Expected output:
                
                ```
                old
                ```
                
            2.  Run the following command to access the service using a client request whose header contains `foo=bar`.
                
                ```
                curl -H "Host: www.example.com" -H "foo: bar" http://<EXTERNAL_IP>
                ```
                
                Expected output:
                
                ```
                new
                ```
                
            
        
        Run the commands again. The output shows that only client requests with the header `foo=bar` are routed to the new service version.
        
    -   Route a percentage of requests that meet a specific rule to the new service version. The following example routes 50% of the traffic to the new service version for client requests whose headers contain `foo=bar`.
        
        1.  Modify the Ingress that you created in step [2](#step-r7w-zr8-ks5) to use the following content.
            
            #### **For clusters of v1.19 and later**
            
            ```
            apiVersion: networking.k8s.io/v1
            kind: Ingress
            metadata:
              name: gray-release
              annotations:
                # Requests whose foo header matches the regular expression foo=bar are routed to the new service version new-nginx.
                nginx.ingress.kubernetes.io/service-match: |
                    new-nginx: header("foo", /^bar$/)
                # Based on the preceding rule, only 50% of the traffic is routed to the new service version new-nginx.
                nginx.ingress.kubernetes.io/service-weight: |
                    new-nginx: 50, old-nginx: 50
            spec:
              ingressClassName: nginx
              rules:
              - host: www.example.com
                http:
                  paths:
                  # Old version of the service.
                  - path: /
                    backend:
                      service: 
                        name: old-nginx
                        port:
                          number: 80
                    pathType: ImplementationSpecific
                  # New version of the service.
                  - path: /
                    backend:
                      service: 
                        name: new-nginx
                        port:
                          number: 80
                    pathType: ImplementationSpecific
            ```
            
            #### **For clusters earlier than v1.19**
            
            ```
            apiVersion: networking.k8s.io/v1beta1
            kind: Ingress
            metadata:
              name: gray-release
              annotations:
                # Requests whose foo header matches the regular expression foo=bar are routed to the new service version new-nginx.
                nginx.ingress.kubernetes.io/service-match: |
                    new-nginx: header("foo", /^bar$/)
                # Based on the preceding rule, only 50% of the traffic is routed to the new service version new-nginx.
                nginx.ingress.kubernetes.io/service-weight: |
                    new-nginx: 50, old-nginx: 50
            spec:
              rules:
              - host: www.example.com
                http:
                  paths:
                  # Old version of the service.
                  - path: /
                    backend:
                      serviceName: old-nginx
                      servicePort: 80
                  # New version of the service.
                  - path: /
                    backend:
                      serviceName: new-nginx
                      servicePort: 80
            ```
            
        2.  Run the following command to deploy the Ingress.
            
            ```
            kubectl apply -f ingress.yaml
            ```
            
        3.  Run the following command to retrieve the external IP address.
            
            ```
            kubectl get ingress
            ```
            
        4.  Check the routing access.
            
            1.  Run the following command to access the service.
                
                ```
                curl -H "Host: www.example.com"  http://<EXTERNAL_IP>
                ```
                
                Expected output:
                
                ```
                old
                ```
                
            2.  Run the following command to access the service using a client request whose header contains `foo=bar`.
                
                ```
                curl -H "Host: www.example.com" -H "foo: bar" http://<EXTERNAL_IP>
                ```
                
                Expected output:
                
                ```
                new
                ```
                
            
            Run the commands again. The output shows that only 50% of the traffic from client requests with the header `foo=bar` is routed to the new service version.
            
        
    -   Route a percentage of requests to the new service version. In the following example, 50% of the traffic is routed to the new service version.
        
        1.  Modify the Ingress that you created in step [2](#step-r7w-zr8-ks5) to use the following content.
            
            #### **For clusters of v1.19 and later**
            
            ```
            apiVersion: networking.k8s.io/v1
            kind: Ingress
            metadata:
              name: gray-release
              annotations:
                  # Route 50% of the traffic to the new service version new-nginx.
                  nginx.ingress.kubernetes.io/service-weight: |
                      new-nginx: 50, old-nginx: 50
            spec:
              ingressClassName: nginx
              rules:
              - host: www.example.com
                http:
                  paths:
                  # Old version of the service.
                  - path: /
                    backend:
                      service: 
                        name: old-nginx
                        port:
                          number: 80
                    pathType: ImplementationSpecific
                  # New version of the service.
                  - path: /
                    backend:
                      service: 
                        name: new-nginx
                        port:
                          number: 80
                    pathType: ImplementationSpecific
            ```
            
            #### **For clusters earlier than v1.19**
            
            ```
            apiVersion: networking.k8s.io/v1beta1
            kind: Ingress
            metadata:
              name: gray-release
              annotations:
                  # Route 50% of the traffic to the new service version new-nginx.
                  nginx.ingress.kubernetes.io/service-weight: |
                      new-nginx: 50, old-nginx: 50
            spec:
              rules:
              - host: www.example.com
                http:
                  paths:
                  # Old version of the service.
                  - path: /
                    backend:
                      serviceName: old-nginx
                      servicePort: 80
                  # New version of the service.
                  - path: /
                    backend:
                      serviceName: new-nginx
                      servicePort: 80
            ```
            
        2.  Run the following command to deploy the Ingress.
            
            ```
            kubectl apply -f ingress.yaml
            ```
            
        3.  Run the following command to retrieve the external IP address.
            
            ```
            kubectl get ingress
            ```
            
        4.  Run the following command to check the routing access.
            
            ```
            curl -H "Host: www.example.com" http://<EXTERNAL_IP>
            ```
            
            Run the command again. The output shows that 50% of the traffic is routed to the new service version.
            
        
    

### **Step 3: Delete the old service version**

After the new service version runs stably for a period of time and meets your expectations, you can take the old service version offline so that only the new version is running.

1.  Modify the Ingress that you created in step [2](#step-r7w-zr8-ks5) to use the following content.
    
    #### **For clusters of v1.19 and later**
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: gray-release
    spec:
      ingressClassName: nginx
      rules:
      - host: www.example.com
        http:
          paths:
          # New version of the service.
          - path: /
            backend:
              service: 
                name: new-nginx
                port:
                  number: 80
            pathType: ImplementationSpecific
    ```
    
    #### **For clusters earlier than v1.19**
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      name: gray-release
    spec:
      rules:
      - host: www.example.com
        http:
          paths:
          # New version of the service.
          - path: /
            backend:
              serviceName: new-nginx
              servicePort: 80
    ```
    
2.  Run the following command to deploy the Ingress.
    
    ```
    kubectl apply -f ingress.yaml
    ```
    
3.  Run the following command to retrieve the external IP address.
    
    ```
    kubectl get ingress
    ```
    
4.  Run the following command to check the routing access.
    
    ```
    curl -H "Host: www.example.com" http://<EXTERNAL_IP>
    ```
    
    Expected output:
    
    ```
    new
    ```
    
    Run the command again. The output shows that all requests are routed to the new service version.
    
5.  Delete the old Deployment and Service.
    
    1.  Run the following command to delete the old Deployment.
        
        ```
        kubectl delete deploy <Deployment_name>
        ```
        
    2.  Run the following command to delete the old Service.
        
        ```
        kubectl delete svc <Service_name>
        ```
