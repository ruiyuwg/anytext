To allow external clients to access gRPC applications deployed in a Container Service for Kubernetes (ACK) cluster, you can configure an NGINX Ingress and add the `nginx.ingress.kubernetes.io/backend-protocol: "GRPC"` annotation to route gRPC traffic.

## **Core** configuration **example**

The following example shows the core configuration for securely exposing a [gRPC](https://grpc.io/) service using NGINX Ingress.

-   **gRPC protocol proxy**: The `backend-protocol: "GRPC"` annotation instructs the Ingress controller to proxy traffic using the gRPC protocol, which is based on HTTP/2, instead of the default HTTP protocol.
    
-   **TLS encryption**: Transport Layer Security (TLS) is enabled for the sample domain `grpc.example.com`. The traffic is encrypted using the certificate stored in the Secret.
    

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: grpc-ingress
  annotations:
    nginx.ingress.kubernetes.io/backend-protocol: "GRPC" # Key configuration: Specify that the backend service is gRPC
spec:
  tls:
  - hosts:
    - grpc.example.com                                   # Replace with your gRPC service domain
    secretName: nginx-ingress-tls                        # The Secret containing your TLS certificate.
  rules:
  - host: grpc.example.com                               # Replace with your gRPC service domain
  #...
```

## **Step 1: Deploy a sample gRPC application**

1.  [Get a cluster kubeconfig and connect to the cluster using kubectl](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#title-9vk-zea-c9x).
    
2.  Create a file named `grpc.yaml` with the following content to define a sample gRPC service.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: grpc-service
    spec:
      replicas: 1
      selector:
        matchLabels:
          run: grpc-service
      template:
        metadata:
          labels:
            run: grpc-service
        spec:
          containers:
          - image: registry.cn-hangzhou.aliyuncs.com/acs-sample/grpc-server:latest
            imagePullPolicy: Always
            name: grpc-service
            ports:
            - containerPort: 50051
              protocol: TCP
          restartPolicy: Always
    ---
    apiVersion: v1
    kind: Service
    metadata:
      name: grpc-service
    spec:
      ports:
      - port: 50051
        protocol: TCP
        targetPort: 50051
      selector:
        run: grpc-service
      sessionAffinity: None
      type: NodePort
    ```
    
    The service is defined in the following `.proto` file. The service is named `Greeter` and provides the `SayHello` method.
    
    **gRPC sample application interface definition**
    
    ```
    option java_multiple_files = true;
    option java_package = "io.grpc.examples.helloworld";
    option java_outer_classname = "HelloWorldProto";
    
    package helloworld;
    
    // The greeting service definition
    service Greeter {
      // Sends a greeting
      rpc SayHello (HelloRequest) returns (HelloReply) {}
    }
    
    // The request message containing the user's name
    message HelloRequest {
      string name = 1;
    }
    
    // The response message containing the greetings
    message HelloReply {
      string message = 1;
    }
    ```
    
    For more information, see [gRPC service examples](https://github.com/grpc).
    
3.  Deploy the gRPC application.
    
    ```
    kubectl apply -f grpc.yaml
    ```
    

## **Step 2: Store the SSL certificate as a Secret**

Enabling HTTP/2, which gRPC relies on, requires that you first enable TLS encryption for your Ingress. Store the SSL certificate and private key in a Secret for secure management. Then, reference this Secret to configure TLS encryption.

1.  Obtain an SSL certificate.
    
    -   **Production**: Purchase a [commercial certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate#task-q3j-zfp-ydb) from a trusted Certificate Authority (CA) or Alibaba Cloud.
        
    -   **Testing**: [Generate a self-signed certificate](#1556a550265tx).
        
2.  (Optional) If you purchased a certificate from Alibaba Cloud, [download the SSL certificate](/help/en/ssl-certificate/download-an-ssl-certificate) files.
    
3.  Create a Kubernetes Secret to store your certificate and private key.
    
    ## Console
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, click the name of the one you want to change. In the left navigation pane, choose **Configurations** > **Secrets**.
        
    3.  On the **Secrets** page, select the `default` namespace, click **Create**, and configure a new Secret in the panel that appears. Then, click **OK**.
        
        -   **Key**: `nginx-ingress-tls`
            
        -   **Type**: **TLS Certificate**
            
        -   Click **\+ Add**
            
            -   **Key**: The full content of the certificate file (`.crt` or `.pem`)
                
            -   **Value**: The full content of the private key file (`.key`).
                
    
    ## kubectl
    
    Replace `<PUBLIC_CERT>` and `<PRIVATE_KEY>` with the paths to your certificate file (`.crt` or `.pem`) and private key file (`.key`). Then, run the command to store the certificate and private key as a Secret.
    
    ```
    # The --key parameter specifies the private key file, and the --cert parameter specifies the certificate file.
    kubectl create secret tls nginx-ingress-tls --cert <PUBLIC_CERT> --key <PRIVATE_KEY>
    ```
    

## **Step 3: Configure the Ingress to expose the Service**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com) and click the name of the target cluster. In the left navigation pane, choose **Add-ons**.
    
2.  Enter **Nginx Ingress Controller** in the search box. On the add-on card, click **Install** or **Upgrade**.
    
3.  Configure the Ingress. Use `annotations` to specify that the backend protocol is gRPC and reference the Secret you created.
    
    ## Console
    
    1.  In the left navigation pane, choose **Network** > **Ingresses**. Select the `default` namespace and click **Create Ingress**.
        
    2.  Configure the Ingress with the following parameters, then click **OK**.
        
        -   **Gateway Type**: Select `Nginx Ingress`.
            
        -   **Name**: `grpc-ingress`.
            
        -   **Domain Name**: `grpc.example.com`.
            
        -   **Mappings**
            
            -   **Path**: `/`
                
            -   **Matching Rule**: `Prefix (Prefix-based Match)`
                
            -   **Service**: `grpc-service`
                
            -   **Port**: `50051`
                
        -   **TLS Settings**: Enable this option.
            
            -   **Domain Name**: `grpc.example.com`
                
            -   **Secret**: `nginx-ingress-tls`
                
        -   **Annotations**
            
            -   **Name**: `nginx.ingress.kubernetes.io/backend-protocol`
                
            -   **Value**: `GRPC`
                
    3.  On the **Ingresses** page, view the new Ingress to obtain its access **Endpoint**.
        
        > It takes about 10 seconds for the NGINX Ingress to take effect. Then, click the refresh button to view the endpoint information. If the endpoint information does not update, click the Ingress name and go to the **Events** tab to [troubleshoot issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-alb-ingress-exceptions).
        
    
    ## kubectl
    
    1.  Create a file named `grpc-ingress.yaml` with the following content.
        
        ```
        apiVersion: networking.k8s.io/v1
        kind: Ingress
        metadata:
          name: grpc-ingress
          annotations:
            # Key configuration: Specify that the backend protocol is gRPC
            nginx.ingress.kubernetes.io/backend-protocol: "GRPC"
        spec:
          ingressClassName: nginx
          # Configure TLS by referencing the Secret
          tls:
          - hosts:
            - grpc.example.com             # Replace with your gRPC service domain
            secretName: nginx-ingress-tls  # The name specified for the Secret created in the previous step
          rules:
          - host: grpc.example.com         # Replace with your gRPC service domain
            http:
              paths:
              - path: /
                pathType: Prefix
                backend:
                  service:
                    name: grpc-service
                    port:
                      number: 50051
        ```
        
    2.  Deploy the Ingress resource.
        
        ```
        kubectl apply -f grpc-ingress.yaml
        ```
        
    3.  Get the external IP address of the Ingress controller. It may take a few moments for the IP to be assigned. If no address is returned, wait 10 seconds and retry.
        
        ```
        ADDRESS=$(kubectl get ingress grpc-ingress -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
        echo $ADDRESS
        ```
        
    

## **Step 4: Access the gRPC service**

1.  For testing purposes, add an entry to your local `hosts` file to map the domain to the Ingress IP address.
    
    -   **macOS/Linux**: `sudo vi /etc/hosts`
        
    -   **Windows**: Open Notepad as an administrator, then open the file at `C:\Windows\System32\drivers\etc\hosts`.
        
    
    Replace `<ADDRESS>` with the actual **Endpoint**. Add the following domain name mapping to the end of the file and save it:
    
    ```
    <ADDRESS> grpc.example.com
    ```
    
2.  [Install grpcurl](https://github.com/fullstorydev/grpcurl/). Then, call the gRPC service interface.
    
    ```
    grpcurl -d '{"name": "gRPC"}' grpc.example.com:443 helloworld.Greeter/SayHello
    ```
    
    ```
    {
      "message": "Hello gRPC"
    }
    ```
    

## **Limitations**

Due to the nature of gRPC's long-lived connections, NGINX Ingress does not currently support routing based on service weights (`service-weight`) for gRPC backends.

## **FAQ**

#### **How can I generate a self-signed certificate for testing?**

Use openssl to generate a self-signed certificate (`grpc.crt`) and a private key (`grpc.key`) that are valid for 365 days for the domain name `grpc.example.com`.

```
openssl req -x509 -newkey rsa:2048 -keyout grpc.key -out grpc.crt -days 365 -nodes \
  -subj "/CN=grpc.example.com" \
  -addext "subjectAltName=DNS:grpc.example.com"
```

**Important**

Self-signed certificates are not trusted by browsers or clients by default. Accessing a service that uses a self-signed certificate triggers a security warning. Do not use self-signed certificates in production environments.

#### **What is the difference between an SSL certificate and a TLS certificate?**

Secure Sockets Layer (SSL) is an older, deprecated protocol that has been replaced by the more secure TLS protocol.

In modern terminology, "SSL certificate" is often used colloquially to refer to what is technically a "TLS certificate".

## References

-   [Use the NGINX Ingress controller to implement canary releases and blue-green deployments](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/implement-gray-scale-and-blue-green-publishing-through-nginx-ingress#task-2035658).
    
-   [Enable tracing for the NGINX Ingress controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/implement-link-tracing-of-the-nginx-ingress-controller-component).
