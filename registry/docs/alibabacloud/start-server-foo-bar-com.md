In a Kubernetes cluster, an NGINX Ingress manages external access to services and provides Layer 7 load balancing. You can use an NGINX Ingress to configure externally accessible URLs, rewrite rules, HTTPS services, and phased release features. This topic describes how to configure secure routing, set up HTTPS mutual authentication, use regular expressions and wildcard domain names, and request free HTTPS certificates.

## Prerequisites

-   You have [installed the Nginx Ingress controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-the-nginx-ingress-controller#section-pt1-78k-orj).
    
-   A kubectl client is connected to the cluster. For more information, see [Obtain the cluster KubeConfig and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
    
-   A service is exposed by an NGINX Ingress. For more information, see [Create and use an NGINX Ingress to expose a service](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-nginx-ingress-1#2a2dd43aa505j).
    

## Configuration instructions

The configuration methods for the NGINX Ingress controller in Container Service for Kubernetes (ACK) are fully compatible with the open source community. For more information about the configurations, see [NGINX Configuration](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/).

The following three configuration methods are supported:

-   Annotation-based: You can configure annotations in the YAML file of each NGINX Ingress. The configuration takes effect only on that Ingress. For more information, see [Annotations](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/).
    
-   ConfigMap-based: You can configure the kube-system/nginx-configuration ConfigMap. This is a global configuration that takes effect on all NGINX Ingresses. For more information, see [ConfigMaps](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/).
    
-   Custom NGINX template: You can use this method if you have special configuration requirements for the internal NGINX template of the NGINX Ingress controller and the annotation-based and ConfigMap-based methods cannot meet your needs. For more information, see [Custom NGINX template](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/custom-template/).
    

## Configure a routing service for URL redirection

When you use an NGINX Ingress controller, NGINX forwards requests based on the full request paths. For example, the NGINX Ingress controller forwards requests for the /service1/api path directly to the /service1/api path of the backend pod. If the path of your backend service is /api, a 404 status code is returned because the path is incorrect. In this case, you can configure the `nginx.ingress.kubernetes.io/rewrite-target` annotation to rewrite the request path to the correct directory.

Create an NGINX Ingress based on the cluster version.

## Clusters that run Kubernetes 1.19 or later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: foo.bar.com
  namespace: default
  annotations:
    # URL redirection.
    nginx.ingress.kubernetes.io/rewrite-target: /$2
spec:
  rules:
  - host: foo.bar.com
    http:
      paths:
    # If the Ingress controller version is 0.22.0 or later, you must use a regular expression to define the path in the path field and use it with a capturing group in the rewrite-target annotation.
      - path: /svc(/|$)(.*)
        backend:
          service: 
            name: web1-service
            port: 
              number: 80
        pathType: ImplementationSpecific
```

## Clusters that run Kubernetes versions earlier than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: foo.bar.com
  namespace: default
  annotations:
    # URL redirection.
    nginx.ingress.kubernetes.io/rewrite-target: /$2
spec:
  rules:
  - host: foo.bar.com
    http:
      paths:
      # If the Ingress controller version is 0.22.0 or later, you must use a regular expression to define the path in the path field and use it with a capturing group in the rewrite-target annotation.
      - path: /svc(/|$)(.*)
        backend:
          serviceName: web1-service
          servicePort: 80
```

1.  Access the NGINX service.
    
    1.  Run the following command to obtain the `ADDRESS`.
        
        ```
        kubectl  get  ingress
        ```
        
        Expected output:
        
        ```
        NAME           CLASS   HOSTS                ADDRESS          PORTS   AGE
        foo.bar.com    nginx   foo.bar.com        172.16.XX.XX       80      46m
        ```
        
    2.  Run the following command. Replace `ADDRESS` with the IP address of the Ingress.
        
        ```
        curl -k -H "Host: foo.bar.com"  http://<ADDRESS>/svc/foo
        ```
        
        Expected output:
        
        ```
        web1: /foo
        ```
        

## **Rewrite configuration**

You can use the `nginx.ingress.kubernetes.io/rewrite-target` annotation to configure basic rewrite rules. For more information, see [Configure a routing service for URL redirection](#title-nqi-qkq-dsu).

For complex and advanced rewrite requirements, you can use the following annotations:

-   `nginx.ingress.kubernetes.io/server-snippet`: Adds a configuration snippet to the Server section.
    
-   `nginx.ingress.kubernetes.io/configuration-snippet`: Adds configuration to the Location section.
    

These two annotations add custom code snippets to the NGINX server block of the Ingress component. This provides the flexibility to extend and customize NGINX configurations for different scenarios.

Configuration example:

```
annotations:
     nginx.ingress.kubernetes.io/server-snippet: |
         rewrite ^/v4/(.*)/card/query http://foo.bar.com/v5/#!/card/query permanent;
     nginx.ingress.kubernetes.io/configuration-snippet: |
         rewrite ^/v6/(.*)/card/query http://foo.bar.com/v7/#!/card/query permanent;
```

Run the following command to view the NGINX configuration file in the NGINX Ingress controller component.

```
kubectl exec nginx-ingress-controller-xxxxx --namespace kube-system -- cat /etc/nginx/nginx.conf   /#Modify the pod name based on your environment.
```

The example configuration generates the following nginx.conf file.

```
# start server foo.bar.com
    server {
        server_name foo.bar.com ;
        listen 80;
        listen [::]:80;
        set $proxy_upstream_name "-";
    # server-snippet configuration.
        rewrite ^/v4/(.*)/card/query http://foo.bar.com/v5/#!/card/query permanent;
        ...
    # configuration-snippet configuration.
      rewrite ^/v6/(.*)/card/query http://foo.bar.com/v7/#!/card/query permanent;
      ...
    }
    # end server foo.bar.com
```

The `snippet` annotations also support global configurations. For more information, see [server-snippet](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/#main-snippet).

For more information about how to use the `rewrite` instruction, see the [official NGINX documentation](http://nginx.org/en/docs/http/ngx_http_rewrite_module.html#rewrite).

## Configure an HTTPS certificate for a routing rule

You can use the native semantics of an Ingress to configure an HTTPS certificate for a website.

1.  Prepare your service certificate.
    
    **Note**
    
    The domain name must match the host that you configure. Otherwise, the NGINX Ingress controller cannot load the certificate correctly.
    
    1.  Run the following command to generate a certificate file named tls.crt and a private key file named tls.key.
        
        ```
        openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout tls.key -out tls.crt -subj "/CN=foo.bar.com/O=foo.bar.com"
        ```
        
    2.  Run the following command to create a secret.
        
        Create a Kubernetes secret named tls-test-ingress from the certificate and private key. You must reference this secret when you create an Ingress.
        
        ```
        kubectl create secret tls tls-test-ingress --key tls.key --cert tls.crt
        ```
        
2.  Run the following command to create an Ingress resource and use the tls field to reference the secret that you created in the previous step.
    
    ## Clusters that run Kubernetes 1.19 or later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: test-test-ingress
    spec:
      # Reference the TLS certificate.
      tls:
      - hosts:
        - foo.bar.com # The domain name that corresponds to the certificate. 
        secretName: tls-test-ingress
      rules:
      - host: tls-test-ingress.com
        http:
          paths:
          - path: /foo
            backend:
              service:
                name: web1-svc
                port:
                  number: 80
            pathType: ImplementationSpecific
    ```
    
    ## Clusters that run Kubernetes versions earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      name: test-test-ingress
    spec:
      # Reference the TLS certificate.
      tls:
      - hosts:
        - foo.bar.com # The domain name that corresponds to the certificate.
        secretName: tls-test-ingress
      rules:
      - host: tls-test-ingress.com
        http:
          paths:
          - path: /foo
            backend:
              serviceName: web1-svc
              servicePort: 80
    ```
    
3.  Configure the `hosts` file or use a real domain name to access the TLS service.
    
    You can access the `web1-svc` service at `https://tls-test-ingress.com/foo`.
    

## Configure HTTPS mutual authentication

In some cases, you may need to configure HTTPS mutual authentication between the server and the client to ensure connection security. The NGINX Ingress controller supports this feature through annotations.

1.  Run the following command to create a self-signed CA certificate.
    
    ```
    openssl req -x509 -sha256 -newkey rsa:4096 -keyout ca.key -out ca.crt -days 356 -nodes -subj '/CN=Fern Cert Authority'
    ```
    
    Expected output:
    
    ```
    Generating a 4096 bit RSA private key
    .............................................................................................................++
    .....................................................................................++
    writing new private key to 'ca.key'
    ```
    
2.  Run the following command to create a server-side certificate.
    
    1.  Run the following command to generate a request file for the server-side certificate.
        
        ```
        openssl req -new -newkey rsa:4096 -keyout server.key -out server.csr -nodes -subj '/CN=foo.bar.com'
        ```
        
        Expected output:
        
        ```
        Generating a 4096 bit RSA private key
        ................................................................................................................................++
        .................................................................++
        writing new private key to 'server.key'
        ```
        
    2.  Run the following command to use the root certificate to sign the server-side request file and generate the server-side certificate.
        
        ```
        openssl x509 -req -sha256 -days 365 -in server.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out server.crt
        ```
        
        Expected output:
        
        ```
        Signature ok
        subject=/CN=foo.bar.com
        Getting CA Private Key
        ```
        
3.  Run the following command to create a client-side certificate.
    
    1.  Generate a request file for the client-side certificate.
        
        ```
        openssl req -new -newkey rsa:4096 -keyout client.key -out client.csr -nodes -subj '/CN=Fern'
        ```
        
        Expected output:
        
        ```
        Generating a 4096 bit RSA private key
        .......................................................................................................................................................................................++
        ..............................................++
        writing new private key to 'client.key'
        -----
        ```
        
    2.  Run the following command to use the root certificate to sign the client-side request file and generate the client certificate.
        
        ```
        openssl x509 -req -sha256 -days 365 -in client.csr -CA ca.crt -CAkey ca.key -set_serial 02 -out client.crt
        ```
        
        Expected output:
        
        ```
        Signature ok
        subject=/CN=Fern
        Getting CA Private Key
        ```
        
4.  Run the following command to check the created certificates.
    
    ```
    ls
    ```
    
    Expected output:
    
    ```
    ca.crt  ca.key  client.crt  client.csr  client.key  server.crt  server.csr  server.key
    ```
    
5.  Run the following command to create a secret for the CA certificate.
    
    ```
    kubectl create secret generic ca-secret --from-file=ca.crt=ca.crt
    ```
    
    Expected output:
    
    ```
    secret/ca-secret created
    ```
    
6.  You can run the following command to create a secret for the server certificate.
    
    ```
    kubectl create secret generic tls-secret --from-file=tls.crt=server.crt --from-file=tls.key=server.key
    ```
    
    Expected output:
    
    ```
    secret/tls-secret created
    ```
    
7.  Deploy the following template to create a test NGINX Ingress use case.
    
    ## Clusters that run Kubernetes 1.19 or later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/auth-tls-verify-client: "on"
        nginx.ingress.kubernetes.io/auth-tls-secret: "default/ca-secret"
        nginx.ingress.kubernetes.io/auth-tls-verify-depth: "1"
        nginx.ingress.kubernetes.io/auth-tls-pass-certificate-to-upstream: "true"
      name: nginx-test
      namespace: default
    spec:
      rules:
      - host: foo.bar.com
        http:
          paths:
          - backend:
              service:
                name: http-svc
                port: 
                  number: 80
            path: /
            pathType: ImplementationSpecific
      tls:
      - hosts:
        - foo.bar.com
        secretName: tls-secret
    ```
    
    ## Clusters that run Kubernetes versions earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      annotations:
        nginx.ingress.kubernetes.io/auth-tls-verify-client: "on"
        nginx.ingress.kubernetes.io/auth-tls-secret: "default/ca-secret"
        nginx.ingress.kubernetes.io/auth-tls-verify-depth: "1"
        nginx.ingress.kubernetes.io/auth-tls-pass-certificate-to-upstream: "true"
      name: nginx-test
      namespace: default
    spec:
      rules:
      - host: foo.bar.com
        http:
          paths:
          - backend:
              serviceName: http-svc
              servicePort: 80
            path: /
      tls:
      - hosts:
        - foo.bar.com
        secretName: tls-secret
    ```
    
    Expected output:
    
    ```
    ingress.networking.k8s.io/nginx-test configured
    ```
    
8.  Run the following command to view the IP address of the Ingress.
    
    ```
    kubectl get ing
    ```
    
    The IP address in the ADDRESS field is the IP address of the Ingress, as shown in the following output.
    
    ```
    NAME         HOSTS                    ADDRESS         PORTS     AGE
    nginx-test   foo.bar.com              39.102.XX.XX    80, 443   4h42m
    ```
    
9.  Run the following command to update the hosts file. Replace the placeholder IP address with the actual IP address of the Ingress.
    
    ```
    echo "39.102.XX.XX  foo.bar.com" | sudo tee -a /etc/hosts
    ```
    
    **Verification**:
    
    -   Access without a client certificate
        
        ```
        curl --cacert ./ca.crt  https://foo.bar.com
        ```
        
        Expected output:
        
        ```
        <html>
        <head><title>400 No required SSL certificate was sent</title></head>
        <body>
        <center><h1>400 Bad Request</h1></center>
        <center>No required SSL certificate was sent</center>
        <hr><center>nginx/1.19.0</center>
        </body>
        </html>
        ```
        
    -   Access using a client certificate
        
        ```
        curl --cacert ./ca.crt --cert ./client.crt --key ./client.key https://foo.bar.com
        ```
        
        Expected output:
        
        ```
        <!DOCTYPE html>
        <html>
        <head>
        <title>Welcome to nginx!</title>
        <style>
            body {
                width: 35em;
                margin: 0 auto;
                font-family: Tahoma, Verdana, Arial, sans-serif;
            }
        </style>
        </head>
        <body>
        <h1>Welcome to nginx!</h1>
        <p>If you see this page, the nginx web server is successfully installed and
        working. Further configuration is required.</p>
        
        <p>For online documentation and support please refer to
        <a href="http://nginx.org/">nginx.org</a>.<br/>
        Commercial support is available at
        <a href="http://nginx.com/">nginx.com</a>.</p>
        
        <p>Thank you for using nginx.</p>
        </body>
        </html>
        ```
        
    

## Configure HTTPS service to forward requests to a backend container over HTTPS

By default, the NGINX Ingress controller forwards requests to backend application containers over HTTP. If your application container uses the HTTPS protocol, you can use the `nginx.ingress.kubernetes.io/backend-protocol: "HTTPS"` annotation to forward requests to the backend application container over HTTPS.

The following is an example of an NGINX Ingress configuration:

## Clusters that run Kubernetes 1.19 or later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: backend-https
  annotations:
    # Note: You must specify that the backend service is an HTTPS service.
    nginx.ingress.kubernetes.io/backend-protocol: "HTTPS"
spec:
  tls:
  - hosts:
    - <YOUR-HOST-NAME>
    secretName: <YOUR-SECRET-CERT-NAME>
  rules:
  - host: <YOUR-HOST-NAME>
    http:
      paths:
      - path: /
        backend:
          service:
            name: <YOUR-SERVICE-NAME>
            port: 
              number: <YOUR-SERVICE-PORT>
        pathType: ImplementationSpecific
```

## Clusters that run Kubernetes versions earlier than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: backend-https
  annotations:
    # Note: You must specify that the backend service is an HTTPS service.
    nginx.ingress.kubernetes.io/backend-protocol: "HTTPS"
spec:
  tls:
  - hosts:
    - <YOUR-HOST-NAME>
    secretName: <YOUR-SECRET-CERT-NAME>
  rules:
  - host: <YOUR-HOST-NAME>
    http:
      paths:
      - path: /
        backend:
          serviceName: <YOUR-SERVICE-NAME>
          servicePort: <YOUR-SERVICE-PORT>
```

## Configure domain names to support regular expressions

In a Kubernetes cluster, Ingress resources do not support regular expressions for domain name configuration. However, you can use the `nginx.ingress.kubernetes.io/server-alias` annotation to enable this feature.

1.  Deploy the following template. This example uses the regular expression `~^www\.\d+\.example\.com`.
    
    ## Clusters that run Kubernetes 1.19 or later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: ingress-regex
      namespace: default
      annotations:
        nginx.ingress.kubernetes.io/server-alias: '~^www\.\d+\.example\.com$, abc.example.com'
    spec:
      rules:
      - host: foo.bar.com
        http:
          paths:
          - path: /foo
            backend:
              service:
                name: http-svc1
                port:
                  number: 80
            pathType: ImplementationSpecific
    ```
    
    ## Clusters that run Kubernetes versions earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      name: ingress-regex
      namespace: default
      annotations:
        nginx.ingress.kubernetes.io/server-alias: '~^www\.\d+\.example\.com$, abc.example.com'
    spec:
      rules:
      - host: foo.bar.com
        http:
          paths:
          - path: /foo
            backend:
              serviceName: http-svc1
              servicePort: 80
    ```
    
2.  View the configuration of the NGINX Ingress controller.
    
    1.  Run the following command to view the NGINX Ingress controller pods.
        
        ```
        kubectl get pods -n kube-system | grep nginx-ingress-controller
        ```
        
        Expected output:
        
        ```
        nginx-ingress-controller-77cd987c4c-c****         1/1     Running   0          1h
        nginx-ingress-controller-77cd987c4c-x****         1/1     Running   0          1h
        ```
        
    2.  Run the following command to view the configuration of the NGINX Ingress controller. The Server\_Name field in the output shows the effective configuration.
        
        ```
        kubectl exec -n kube-system nginx-ingress-controller-77cd987c4c-c**** cat /etc/nginx/nginx.conf | grep -C3 "foo.bar.com"
        ```
        
        Expected output:
        
        ```
          # start server foo.bar.com
          server {
        --
          server {
            server_name foo.bar.com abc.example.com ~^www\.\d+\.example\.com$ ;
            listen 80  ;
            listen 443  ssl http2 ;
        --
        --
            }
          }
          # end server foo.bar.com
        ```
        
3.  Run the following command to obtain the IP address of the Ingress.
    
    ```
    kubectl get ing
    ```
    
    Expected output:
    
    ```
    NAME            HOSTS         ADDRESS          PORTS     AGE
    ingress-regex   foo.bar.com   101.37.XX.XX     80        11s
    ```
    
4.  Run the following commands to test service access with different rules.
    
    Replace `IP_ADDRESS` with the IP address that you obtained in the previous step.
    
    -   Run the following command to access the service using `Host: foo.bar.com`.
        
        ```
        curl -H "Host: foo.bar.com" <IP_ADDRESS>/foo
        ```
        
        Expected output:
        
        ```
        /foo
        ```
        
    -   Run the following command to access the service using `Host: www.123.example.com`.
        
        ```
        curl -H "Host: www.123.example.com" <IP_ADDRESS>/foo
        ```
        
        Expected output:
        
        ```
        /foo
        ```
        
    -   Run the following command to access the service using `Host: www.321.example.com`.
        
        ```
        curl -H "Host: www.321.example.com" <IP_ADDRESS>/foo
        ```
        
        Expected output:
        
        ```
        /foo
        ```
        
    

## Configure domain names to support generalization

In a Kubernetes cluster, NGINX Ingress resources support wildcard domain names. For example, you can configure the `*.ingress-regex.com` wildcard domain name.

1.  Deploy the following template to create an NGINX Ingress.
    
    ## Clusters that run Kubernetes 1.19 or later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: ingress-regex
      namespace: default
    spec:
      rules:
      - host: *.ingress-regex.com
        http:
          paths:
          - path: /foo
            backend:
              service:
                name: http-svc1
                port:
                  number: 80
            pathType: ImplementationSpecific
    ```
    
    ## Clusters that run Kubernetes versions earlier than 1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      name: ingress-regex
      namespace: default
    spec:
      rules:
      - host: *.ingress-regex.com
        http:
          paths:
          - path: /foo
            backend:
              serviceName: http-svc1
              servicePort: 80
    ```
    
2.  Run the following command to view the configuration of the corresponding NGINX Ingress controller. You can locate the effective configuration in the server\_name field.
    
    ```
    kubectl exec -n kube-system <nginx-ingress-pod-name> cat /etc/nginx/nginx.conf | grep -C3 "*.ingress-regex.com"
    ```
    
    **Note**
    
    Replace _nginx-ingress-pod-name_ with the NGINX Ingress pod in your environment.
    
    Expected output:
    
    ```
    # start server *.ingress-regex.com
      server {
        server_name *.ingress-regex.com ;
        listen 80;
        listen [::]:80;
    ...
      }
      # end server *.ingress-regex.com
    ```
    
    In newer versions of the NGINX Ingress controller, the expected output is:
    
    ```
    ## start server *.ingress-regex.com
      server {
        server_name ~^(?<subdomain>[\w-]+)\.ingress-regex\.com$ ;
        listen 80;
        listen [::]:80;
    ...
      }
      ## end server *.ingress-regex.com
    ```
    
3.  Run the following command to retrieve the IP address of the Ingress.
    
    ```
    kubectl get ing
    ```
    
    Expected output:
    
    ```
    NAME            HOSTS                 ADDRESS           PORTS     AGE
    ingress-regex   *.ingress-regex.com   101.37.XX.XX      80        11s
    ```
    
4.  Run the following commands to test service access under different rules.
    
    Replace `IP_ADDRESS` with the IP address that you retrieved in the previous step.
    
    -   Run the following command to access the service using `Host: abc.ingress-regex.com`.
        
        ```
        curl -H "Host: abc.ingress-regex.com" <IP_ADDRESS>/foo
        ```
        
        Expected output:
        
        ```
        /foo
        ```
        
    -   Run the following command to access the service using `Host: 123.ingress-regex.com`.
        
        ```
        curl -H "Host: 123.ingress-regex.com" <IP_ADDRESS>/foo
        ```
        
        Expected output:
        
        ```
        /foo
        ```
        
    -   Run the following command to access the service using `Host: a1b1.ingress-regex.com`.
        
        ```
        curl -H "Host: a1b1.ingress-regex.com" <IP_ADDRESS>/foo
        ```
        
        Expected output:
        
        ```
        /foo
        ```
        
    

## Implement a phased release using annotations

You can implement phased releases by configuring annotations. To enable the phased release feature, set the `nginx.ingress.kubernetes.io/canary: "true"` annotation. Use the following annotations to implement different phased release strategies:

-   `nginx.ingress.kubernetes.io/canary-weight`: Specifies the percentage of requests routed to the target service. The value is an integer from 0 to 100.
    
-   `nginx.ingress.kubernetes.io/canary-by-header`: Routes traffic based on the request header. When the configured `header` value is `always`, all traffic is routed to the phased release service endpoint. When the `header` value is `never`, no traffic is routed to the phased release service. Other `header` values are ignored, and traffic is routed to other phased release services according to rule priority.
    
-   `nginx.ingress.kubernetes.io/canary-by-header-value` and `nginx.ingress.kubernetes.io/canary-by-header`: Routes traffic to the phased release service endpoint when both the request `header` and `header-value` match the configured values. Other `header` values are ignored, and traffic is routed to other phased release services according to rule priority.
    
-   `nginx.ingress.kubernetes.io/canary-by-cookie`: Routes traffic based on the cookie. When the configured `cookie` value is `always`, all traffic is routed to the phased release service endpoint. When the configured `cookie` value is `never`, no traffic is routed to the phased release service endpoint.
    

The following examples show common annotation configurations. For more information, see [Use an NGINX Ingress to implement phased releases and blue-green deployments](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/implement-gray-scale-and-blue-green-publishing-through-nginx-ingress#task-2035658).

-   Weight-based phased release: Set the weight of the phased release service to 20%.
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        kubernetes.io/ingress.class: nginx
        nginx.ingress.kubernetes.io/canary: "true"
        nginx.ingress.kubernetes.io/canary-weight: "20"
    ```
    
-   Header-based phased release: When the request header is `ack:always`, route requests to the phased release service. When the request header is `ack:never`, do not route requests to the phased release service. For other headers, allocate traffic to the phased release service based on weight.
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        kubernetes.io/ingress.class: nginx
        nginx.ingress.kubernetes.io/canary: "true"
        nginx.ingress.kubernetes.io/canary-weight: "50"
        nginx.ingress.kubernetes.io/canary-by-header: "ack"
    ```
    
-   Header-based phased release with a custom header value: When the request header is `ack:alibaba`, route requests to the phased release service. For other headers, allocate traffic to the phased release service based on weight.
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        kubernetes.io/ingress.class: nginx
        nginx.ingress.kubernetes.io/canary: "true"
        nginx.ingress.kubernetes.io/canary-weight: "20"
        nginx.ingress.kubernetes.io/canary-by-header: "ack"
        nginx.ingress.kubernetes.io/canary-by-header-value: "alibaba"
    ```
    
-   Cookie-based phased release: If the request header does not match any rule, and the request cookie is `hangzhou_region=always`, route requests to the phased release service.
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      annotations:
        kubernetes.io/ingress.class: nginx
        nginx.ingress.kubernetes.io/canary: "true"
        nginx.ingress.kubernetes.io/canary-weight: "20"
        nginx.ingress.kubernetes.io/canary-by-header: "ack"
        nginx.ingress.kubernetes.io/canary-by-header-value: "alibaba"
        nginx.ingress.kubernetes.io/canary-by-cookie: "hangzhou_region"
    ```
    

**Note**

-   Cookie-based phased release supports only the `always` and `never` values.
    
-   Phased release rule priority, from highest to lowest: header-based, cookie-based, weight-based.
    

## Use cert-manager to apply for a free HTTPS certificate

cert-manager is an open source certificate management tool that provisions and automatically renews HTTPS certificates in a cluster. The following example shows how to use cert-manager to request a free certificate and enable automatic renewal.

**Important**

cert-manager is an open source component. ACK does not maintain this component. Use it with caution in production environments. To upgrade the version, see [Upgrading cert-manager](https://cert-manager.io/docs/installation/upgrade/#upgrading-using-static-manifests).

1.  Run the following command to deploy cert-manager.
    
    ```
    kubectl apply -f https://github.com/cert-manager/cert-manager/releases/latest/download/cert-manager.yaml
    ```
    
2.  Run the following command to view the pod status.
    
    ```
    kubectl get pods -n cert-manager
    ```
    
    Expected output:
    
    ```
    NAME                     READY   STATUS    RESTARTS   AGE
    cert-manager-1           1/1     Running   0          2m11s
    cert-manager-cainjector  1/1     Running   0          2m11s
    cert-manager-webhook     1/1     Running   0          2m10s
    ```
    
3.  Use the following template to create a ClusterIssuer.
    
    ```
    apiVersion: cert-manager.io/v1
    kind: ClusterIssuer
    metadata:
      name: letsencrypt-prod-http01
    spec:
      acme:
        server: https://acme-v02.api.letsencrypt.org/directory
        email: <your_email@example.com>  # Replace this with your email address.
        privateKeySecretRef:
          name: letsencrypt-http01
        solvers:
        - http01: 
            ingress:
              class: nginx
    ```
    
4.  Run the following command to view the ClusterIssuer.
    
    ```
    kubectl get clusterissuer
    ```
    
    Expected output:
    
    ```
    NAME                         READY   AGE
    letsencrypt-prod-http01      True    17s
    ```
    
5.  Create an NGINX Ingress resource object.
    
    ## Clusters that run Kubernetes 1.19 or later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: ingress-tls
      annotations:
        kubernetes.io/ingress.class: "nginx"
        cert-manager.io/cluster-issuer: "letsencrypt-prod-http01"
    spec:
      tls:
      - hosts:
        - <YOUR_DOMAIN_NAME>        # Replace this with your domain name.
        secretName: ingress-tls   
      rules:
      - host: <YOUR_DOMAIN_NAME>    # Replace this with your domain name.
        http:
          paths:
          - path: /
            backend:
              service:
                name: <YOUR_SERVICE_NAME>  # Replace this with your backend service name.
                port: 
                  number: <YOUR_SERVICE_PORT>  # Replace this with your service port.
            pathType: ImplementationSpecific
    ```
    
    ## Clusters that run Kubernetes versions earlier than 1.19
    
    ```
    apiVersion: extensions/v1beta1
    kind: Ingress
    metadata:
      name: ingress-tls
      annotations:
        kubernetes.io/ingress.class: "nginx"
        cert-manager.io/cluster-issuer: "letsencrypt-prod-http01"
    spec:
      tls:
      - hosts:
        - <YOUR_DOMAIN_NAME>        # Replace this with your domain name.
        secretName: ingress-tls   
      rules:
      - host: <YOUR_DOMAIN_NAME>    # Replace this with your domain name.
        http:
          paths:
          - path: /
            backend:
              serviceName: <YOUR_SERVICE_NAME>  # Replace this with your backend service name.
              servicePort: <YOUR_SERVICE_PORT>  # Replace this with your service port.
    ```
    
    **Note**
    
    The domain name that you use to replace your\_domain\_name must meet the following conditions:
    
    -   The domain name cannot exceed 64 characters.
        
    -   Wildcard domain names are not supported.
        
    -   It can be accessed over the public network using the HTTP protocol.
        
    
6.  Run the following command to view the certificate.
    
    ```
    kubectl get cert
    ```
    
    Expected output:
    
    ```
    NAME          READY   SECRET        AGE
    ingress-tls   True    ingress-tls   52m
    ```
    
    **Note**
    
    If the `READY` status is not `True`, you can run `kubectl describe cert ingress-tls` to view the certificate processing procedure.
    
7.  Run the following command to view the secret.
    
    ```
    kubectl get secret  ingress-tls
    ```
    
    Expected output:
    
    ```
    NAME          TYPE                DATA   AGE
    ingress-tls   kubernetes.io/tls   2      2m
    ```
    
8.  In a web browser, enter `https://[your_website_domain]` to access the configured domain name.
    

## Configure HTTP to HTTPS redirection

The `nginx.ingress.kubernetes.io/ssl-redirect` annotation in an NGINX Ingress can force HTTP traffic to redirect to HTTPS. The following example demonstrates this configuration:

## Clusters that run Kubernetes 1.19 or later

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/ssl-redirect: "true" # Force the redirection of HTTP traffic to HTTPS.
```

## Clusters that run Kubernetes versions earlier than 1.19

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/ssl-redirect: "true" # Force the redirection of HTTP traffic to HTTPS.
```
