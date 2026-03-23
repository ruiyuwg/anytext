In Alibaba Cloud Container Service for Kubernetes (ACK) managed clusters, the NGINX Ingress Controller acts as the primary L7 entry point, precisely routing external traffic to internal services based on flexible rules. It supports HTTPS encryption, canary releases, and custom configurations via annotations to meet high-availability and security requirements.

**Important**

Due to the discontinuation of specification-based billing for Classic Load Balancers (CLB), starting **August 28, 2025**, new installations of the NGINX Ingress Controller via the ACK console will default to **Network Load Balancer (NLB)** instances.

-   CLB instances are restricted to whitelist only.
    
-   If a CLB is still required, it will default to a **pay-as-you-go (usage-based)** billing model. See the [Product change announcement](/help/en/ack/product-overview/product-change-announcement-on-new-service-and-nginx-ingress-controller).
    

## **Usage notes**

-   **Do not delete default services**: Upon installation, a service named `nginx-ingress-lb` is created in the `kube-system` namespace. Deleting this service will destabilize the controller and may cause system crashes.
    
-   **Use standard configuration methods**: Always use the [Add-ons](#afb4975b9drqe) page in the console or [OpenAPI](https://api.alibabacloud.com/api/CS/2015-12-15/ModifyClusterAddon?RegionId=us-west-1) to configure custom parameters. Manual modifications via other channels may cause upgrade failures or functional errors.
    
-   **Prioritize ConfigMaps**: Use the [NGINX Ingress ConfigMap](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-configuration-guide) for custom requirements. Technical support is not provided for issues arising from custom snippets or Lua code.
    
-   **Keep the add-on updated**: Regularly [upgrade NGINX Ingress Controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-nginx-ingress-controller) to patch upstream community bugs and security vulnerabilities.
    

## **Prerequisites**

-   NGINX Ingress Controller is installed.
    
    **Note**
    
    After installation, the controller is associated with a CLB instance that serves as the traffic entry point for the NGINX Ingress.
    
    **During cluster creation**
    
    **1\. Select the add-on**
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com) and click **Create Kubernetes Cluster**.
        
    2.  In the **Component Configurations** step, find the **Ingress** section and select **Nginx Ingress**.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9228825571/p992651.png)
    
    **2\. Select a Server Load Balancer (SLB) source**
    
    -   **Create**: Automatically creates a multi-zone public or private CLB instance in the cluster's VPC with [pay-by-specification](/help/en/slb/classic-load-balancer/product-overview/pay-as-you-go#db28ae75e2i4g) billing and [specified instance specification](/help/en/slb/classic-load-balancer/user-guide/clb-instance/#section-ybx-3cz-l4z).
        
    -   **Use Existing**: Select an existing public CLB instance in the same region as the cluster or a private CLB instance in the same VPC as the cluster. The CLB instance cannot be associated with other clusters.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8362010771/p993084.png)
    
    **After cluster creation**
    
    Installing the controller via the **Add-ons** page will automatically create a public-facing, [pay-by-specification](/help/en/slb/classic-load-balancer/product-overview/pay-as-you-go#db28ae75e2i4g), [small I (slb.s1.small)](/help/en/slb/classic-load-balancer/user-guide/clb-instance/#section-ybx-3cz-l4z) CLB instance to serve as the entry point for NGINX Ingress traffic.
    
    **1\. Select and configure the controller**
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
        
    3.  Find **Nginx Ingress Controller** using the search bar or under the **Networking** tab, and click **Install**.
        
    4.  In the **Install Nginx Ingress Controller** dialog box, configure the parameters and click **OK** to complete the installation.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9228825571/p993235.png)
    
-   You have [obtained the kubeconfig file of the cluster and used kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
    
-   You have [registered a domain name](/help/en/dws/user-guide/how-to-register-a-domain-name).
    
-   You have [purchased a commercial certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate) and [submit an application to a CA](/help/en/ssl-certificate/apply-for-a-certificate). The certificate is in the **Issued** state.
    

## **Create a sample application**

This example deploys two stateless workloads (deployments) named `coffee` and `tea`, and their corresponding `ClusterIP` services.

## Console

**1\. Create resources**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want to manage and click its name. In the left navigation pane, choose **Workloads** > **Deployments**.
    
3.  Click **Create from YAML**. Select **Custom** from the **Sample Templates** drop-down list. Then, copy the following content to the template editor and click **Create**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9228825571/p993495.png)

**Sample application YAML template**

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: coffee
  namespace: default
spec:
  replicas: 2
  selector:
    matchLabels:
      app: coffee
  template:
    metadata:
      labels:
        app: coffee
    spec:
      containers:
      - name: coffee
        image: registry.cn-hangzhou.aliyuncs.com/acs-sample/nginxdemos:latest
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: coffee-svc
  namespace: default
spec:
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
  selector:
    app: coffee
  type: ClusterIP
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: tea
  namespace: default
spec:
  replicas: 2
  selector:
    matchLabels:
      app: tea
  template:
    metadata:
      labels:
        app: tea
    spec:
      containers:
      - name: tea
        image: registry.cn-hangzhou.aliyuncs.com/acs-sample/nginxdemos:latest
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: tea-svc
  namespace: default
spec:
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
  selector:
    app: tea
  type: ClusterIP
```

**2\. View the creation result**

In the **YAML Resource Creation Result** dialog box, click **View** in the **Actions** column for a resource to confirm the creation result. 

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9228825571/p993501.png)

## kubectl

1.  Create a file named test-deployment-service.yaml with the following content:
    
    **Sample application YAML template**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: coffee
      namespace: default
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: coffee
      template:
        metadata:
          labels:
            app: coffee
        spec:
          containers:
          - name: coffee
            image: registry.cn-hangzhou.aliyuncs.com/acs-sample/nginxdemos:latest
            ports:
            - containerPort: 80
    ---
    apiVersion: v1
    kind: Service
    metadata:
      name: coffee-svc
      namespace: default
    spec:
      ports:
      - port: 80
        targetPort: 80
        protocol: TCP
      selector:
        app: coffee
      type: ClusterIP
    ---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: tea
      namespace: default
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: tea
      template:
        metadata:
          labels:
            app: tea
        spec:
          containers:
          - name: tea
            image: registry.cn-hangzhou.aliyuncs.com/acs-sample/nginxdemos:latest
            ports:
            - containerPort: 80
    ---
    apiVersion: v1
    kind: Service
    metadata:
      name: tea-svc
      namespace: default
    spec:
      ports:
      - port: 80
        targetPort: 80
        protocol: TCP
      selector:
        app: tea
      type: ClusterIP
    ```
    
2.  Apply the configuration.
    
    ```
    kubectl apply -f test-deployment-service.yaml
    ```
    
3.  Verify the status of the `coffee` and `tea` deployments.
    
    ```
    kubectl get deployment coffee tea
    ```
    
    Expected output:
    
    ```
    NAME     READY   UP-TO-DATE   AVAILABLE   AGE
    coffee   2/2     2            2           14m
    tea      2/2     2            2           14m
    ```
    
4.  View the `coffee-svc` and `tea-svc` services.
    
    ```
    kubectl get service coffee-svc tea-svc
    ```
    
    Expected output:
    
    ```
    NAME         TYPE        CLUSTER-IP        EXTERNAL-IP   PORT(S)   AGE
    coffee-svc   ClusterIP   192.168.xxx.xxx   <none>        80/TCP    15m
    tea-svc      ClusterIP   192.168.xxx.xxx   <none>        80/TCP    15m
    ```
    

## **Create an NGINX Ingress**

In the following example, the domain name (`host` field) in the `rules` uses `test-nginx-ingress.com` as a placeholder. Replace it with your actual registered domain name. Similarly, the path mappings (`paths` field) in the `rules` use the [sample application created earlier](#2a2dd43aa505j). Update it to match your specific application configuration.

## Console

**1\. Create resources**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the target cluster. In the left navigation pane, choose **Network** > **Ingresses**. Select the `default` namespace and click **Create Ingress**. Configure the Ingress based on the following example.
    
    -   **Gateway Type**: **Nginx Ingress**
        
    -   **Name**: `test-nginx-ingress`
        
    -   **Domain Name**: `test-nginx-ingress.com` (Replace this with your registered domain name)
        
    -   **Mappings**:
        
        -   **Path**: `/coffee`
            
        -   **Rule**: **ImplementationSpecific (Default Value)**
            
        -   **Service**: `coffee-svc`
            
        -   **Port**: `80`
            
3.  Click **Add** to configure the route for the `tea-svc` service.
    
    -   **Mappings**:
        
        -   **Path**: `/tea`
            
        -   **Rule**: **ImplementationSpecific (Default Value)**
            
        -   **Service**: `tea-svc`
            
        -   **Port**: `80`
            
4.  Click **Add Rule** and repeat the preceding steps to add the domain name `www.test-nginx-ingress.com` (replace this with your registered domain name) and its corresponding path mappings. Then, click **OK**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9228825571/p995528.png)

**2\. Obtain the endpoint**

Wait for about a minute after creation, then click the refresh button in the upper-right corner. If the **Endpoint** column shows an Elastic IP (EIP) as the service address for the associated public CLB instance, the NGINX Ingress was created successfully.

> If the endpoint information is not updated after a long time, click the Ingress name and check the **Events** tab for errors.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9228825571/p996218.png)

## kubectl

1.  Create a file named test-ingress.yaml with the following content:
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: test-nginx-ingress
      namespace: default
    spec:
      ingressClassName: nginx
      rules:
      - host: test-nginx-ingress.com # Replace with your actual registered domain name
        http:
          paths:
          - path: /coffee
            backend:
              service: 
                name: coffee-svc
                port:
                  number: 80
            pathType: ImplementationSpecific
          - path: /tea
            backend:
              service: 
                name: tea-svc
                port:
                  number: 80
            pathType: ImplementationSpecific
      - host: www.test-nginx-ingress.com # Replace with your actual registered domain name
        http:
          paths:
          - path: /coffee
            backend:
              service: 
                name: coffee-svc
                port:
                  number: 80
            pathType: ImplementationSpecific
          - path: /tea
            backend:
              service: 
                name: tea-svc
                port:
                  number: 80
            pathType: ImplementationSpecific
    ```
    
    Key parameter descriptions:
    
    -   `name`: The name of the Ingress. In this example, the name is `test-nginx-ingress`.
        
    -   `host`: The domain name used to access the service. In this example, the domain name is `test-nginx-ingress.com`. Replace this with your actual registered domain.
        
    -   `path`: The URL path for the rule. All inbound requests must match the `host` and `path` before the CLB forwards traffic to the `backend`. In this example, the paths are `/coffee` and `/tea`.
        
    -   `backend`: Defines the destination where traffic should be sent, consisting of a service name and port.
        
        -   Service name: The name of the backend service to which the Ingress forwards traffic. In this example, the service names are `coffee-svc` and `tea-svc`.
            
        -   Service port: The port exposed by the service. In this example, the port is `80`.
            
    
2.  Create the Ingress.
    
    ```
    kubectl apply -f test-ingress.yaml
    ```
    
3.  View the Ingress details and obtain its public IP address, such as `8.xxx.xxx.117`.
    
    ```
    kubectl get ingress
    ```
    
    Expected output:
    
    ```
    NAME                 CLASS   HOSTS                                               ADDRESS         PORTS   AGE
    test-nginx-ingress   nginx   test-nginx-ingress.com,www.test-nginx-ingress.com   8.xxx.xxx.117   80      2m39s
    ```
    
4.  Replace the placeholder IP with your actual public IP address and run the following command to verify that the NGINX Ingress is functioning correctly:
    
    ```
    curl http://8.xxx.xxx.117/coffee -H "Host: test-nginx-ingress.com"
    ```
    
    Expected output:
    
    ```
    ...
    <title>Hello World</title>
    ...
    <p>Server&nbsp;address:10.xxx.xxx.19:80Server&nbsp;name:coffee-96d4bc87-l29dhDate:08/Aug/2025:02:21:02 +0000URI:/coffee
    ```
    

## **Configure DNS resolution**

Adding a domain name is only required for domains registered with third-party providers (non-Alibaba Cloud domains). Domains purchased through Alibaba Cloud are automatically synchronized to the DNS console, allowing you to add resolution records directly.

**1\. Add a domain name**

1.  Go to [Alibaba Cloud DNS - Public Zone](https://dnsnext.console.alibabacloud.com/authoritative).
    
    On the **Public Zone** tab, click **Add Zone**.
    
2.  Enter the zone name you want to manage and select the public authoritative zone instance you purchased. For detailed parameter descriptions, see [Purchase and bind domain names](/help/en/dns/pubz-instance-purchase-and-domain-name-binding).
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9228825571/p995413.png)

**2\. Add a DNS record**

1.  Locate the target domain and click **Settings** in the **Actions** column. Click **Add Record**. Add a DNS record with the record type set to `A` and the host record set to `@`. Set the **Record Value** to the [endpoint of the NGINX Ingress](#bf87fad9172hq).
    
2.  Repeat the preceding steps to add another DNS record with the host record set to `www`.
    

> For more information, see [Add a website resolution record](/help/en/dns/pubz-add-website-parsing).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4942761671/p994782.png)

**3\. Verify DNS and path resolution**

In your browser, access `http://test-nginx-ingress.com/coffee` (replace with your actual registered domain name). Verify that you can access the service via the domain and that the path mapping is functioning.

> You can also refer to [Methods for testing DNS resolution](/help/en/dns/pubz-parsing-effectiveness-test-methods) to confirm the result. If the resolution fails, see [Quickly troubleshoot DNS resolution failures](/help/en/dns/pubz-quick-troubleshooting-of-problems-not-effective).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9228825571/p996375.png)

## **Configure HTTPS/TLS encryption**

Before proceeding, ensure you have purchased and applied for a certificate as described in the [Prerequisites](#d492720f1d529) section. Follow these steps to download the certificate and add the TLS configuration to enable encrypted HTTPS communication.

## Console

**1\. Download the certificate**

1.  Log on to the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas). In the left navigation pane, choose **Certificate Management** > **SSL Certificate Management**.
    
2.  On the **Commercial Certificates** tab, select the certificate you want to download, and click **Download** in the lower-left corner of the certificate list.
    
3.  In the dialog box that appears, select **Nginx** as the server type, then download and decompress the certificate package.
    

> For more information, see [Download an SSL certificate](/help/en/ssl-certificate/download-an-ssl-certificate).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9228825571/p996276.png)

**2\. Create a secret**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left navigation pane, choose **Configurations** > **Secrets**.
    
3.  On the **Secrets** page, select the `default` namespace and click **Create** in the upper-left corner. In the panel that appears, configure a new Secret. After the configuration is complete, click **OK**.
    
    -   **Name**: `nginx-ingress-tls`
        
    -   **Type**: **TLS Certificate**
        
    -   **Certificates**: The full content of the downloaded and decompressed certificate file (`.pem`).
        
    -   **Key**: The full content of the downloaded and decompressed private key file (`.key`).
        

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9228825571/p995900.png)

**3\. Add a TLS configuration**

1.  In the left navigation pane, choose **Network** > ****Ingresses****. In the **Actions** column of the target Ingress, click **Update**.
    
2.  On the **Modify Ingress** page, add the following TLS configuration and click **OK**.
    
    -   **TLS Settings**: Enabled
        
    -   **Domain Name**: `test-nginx-ingress.com` (Replace this with your registered domain name)
        
    -   **Secret**: `nginx-ingress-tls`
        

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9228825571/p995902.png)

**4\. Verify HTTPS access**

In your browser, access `https://test-nginx-ingress.com/coffee` (replace with your actual registered domain name). Verify that you can access the service via the domain and that the path mapping is functioning over an encrypted HTTPS connection.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9228825571/p996269.png)

## kubectl

1.  Log on to the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas). In the left navigation pane, choose **Certificate Management** > **SSL Certificates**.
    
2.  On the **Commercial Certificates** tab, select the certificate that you want to download, and click **Download** in the lower-left corner of the certificate list.
    
3.  In the dialog box that appears, select **Nginx** as the server type, then download and decompress the certificate package.
    
4.  Run the following command to create a Secret using the downloaded certificate file (`.pem`) and private key file (`.key`).
    
    ```
    kubectl create secret tls nginx-ingress-tls --cert test-nginx-ingress.com.pem --key test-nginx-ingress.com.key -n default
    ```
    
5.  Run the following command to add a TLS configuration to the `test-nginx-ingress` Ingress. Replace `test-nginx-ingress.com` with your actual registered domain name.
    
    ```
    kubectl patch ingress test-nginx-ingress -p '{"spec":{"tls":[{"hosts":["test-nginx-ingress.com"],"secretName":"nginx-ingress-tls"}]}}'
    ```
    
6.  Run the following command using your actual public IP address to verify that the domain name and service path are accessible over HTTPS.
    
    ```
    curl -v -k https://8.xxx.xxx.117/coffee -H "Host: test-nginx-ingress.com"
    ```
    
    -   Parameter description:
        
        -   `-v`: Displays detailed communication process, including TLS handshake information.
            
        -   `-k` (or `--insecure`): Skips certificate verification. Use this option if you are using a self-signed certificate.
            
    -   Expected output:
        
        ```
        ...
        *   Trying 8.xxx.xxx.117:443...
        * Connected to 8.xxx.xxx.117 (8.xxx.xxx.117) port 443
        * ALPN: curl offers h2,http/1.1
        * (304) (OUT), TLS handshake, Client hello (1):
        * (304) (IN), TLS handshake, Server hello (2):
        * (304) (IN), TLS handshake, Unknown (8):
        * (304) (IN), TLS handshake, Certificate (11):
        * (304) (IN), TLS handshake, CERT verify (15):
        * (304) (IN), TLS handshake, Finished (20):
        * (304) (OUT), TLS handshake, Finished (20):
        ...
        <title>Hello World</title>
        ...
        <p>Server&nbsp;address:10.xxx.xxx.159:80Server&nbsp;name:coffee-96d4bc87-6cstvDate:14/Aug/2025:09:27:42 +0000URI:/coffee
        ```
        

## **Advanced configurations**

### **Canary release**

When upgrading services, you can use various deployment strategies such as rolling updates, phased releases (batch pause), blue-green deployments, and canary releases. For detailed instructions, see [Implement phased releases and blue-green deployments using NGINX Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/implement-gray-scale-and-blue-green-publishing-through-nginx-ingress).

### **Backend service protocols**

Specify the protocol used by your backend services by adding the `nginx.ingress.kubernetes.io/backend-protocol` annotation. Supported protocols include HTTP, HTTPS, gRPC, and gRPCS. For configuration examples, see [Configure a gRPC service for NGINX Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expose-the-grpc-service-through-the-nginx-ingress-controller#task-2116482).

### **URL path rewriting**

By default, the NGINX Ingress Controller forwards the full request path to the backend. For example, a request to /service1/api is sent directly to the backend pod as /service1/api. If your backend service listens on a different path, such as /api, a path mismatch occurs, which results in a 404 error. In this case, use the `nginx.ingress.kubernetes.io/rewrite-target` annotation to rewrite the request path to the required directory.

For more information, see [Configure a routing service for URL redirection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/advanced-nginx-ingress-configurations#section-xsg-g5g-1uy).

### **Add annotations**

NGINX Ingress supports an extensive range of features via Kubernetes annotations. To explore more capabilities, see [NGINX Ingress configuration dictionary](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-configuration-guide) and [Advanced NGINX Ingress configurations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/advanced-nginx-ingress-configurations).

### **Observability**

Enable Simple Log Service (SLS) during cluster creation to access comprehensive NGINX Ingress access log analysis reports and real-time dashboards. For setup details, see [Analyze and monitor NGINX Ingress access logs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/analyze-and-monitor-the-access-log-of-nginx-ingress).

### **High-load scenario optimization**

To enhance the performance and stability of the NGINX Ingress Controller under heavy traffic, see [Configure an NGINX Ingress Controller for high-payload scenarios](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-the-nginx-ingress-controller-in-high-load-scenarios) and [Suggestions for using an NGINX Ingress Controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-the-nginx-ingress-controller).

## **FAQ**

### **Why** is the LoadBalancer IP unreachable from within the cluster**?**

**Symptom**

Some pods within the cluster cannot access the backend service via the NGINX Ingress Controller's external LoadBalancer IP address, while access from other nodes works normally.

**Cause**

This is typically caused by the `externalTrafficPolicy` setting of the NGINX Ingress Service.

-   `**local**`: Only the Ingress Controller pods running on the same node as the request can receive traffic. This is intended to preserve the client's source IP and reduce hops, but it can lead to routing failures for internal traffic targeting the external IP.
    
-   `**cluster**`: Traffic can be routed to any Ingress Controller pod in the cluster, regardless of which node the request originates from.
    

When an internal resource uses the LoadBalancer’s external IP, the traffic is treated as external, and the `local` policy may drop the packets if an Ingress pod is not present on the source node.

**Solution**

-   (**Recommended**) Access the the service internally using the NGINX Ingress **ClusterIP** or the internal service name: `nginx-ingress-lb.kube-system`.
    
-   Change the `externalTrafficPolicy` in the service configuration to `Cluster`.
    
    **Note**
    
    If using the Flannel network plugin, this will cause the loss of the original client IP. If using Terway, the source IP can still be preserved.
    
    To modify the policy, run `kubectl edit svc nginx-ingress-lb -n kube-system`.
    
    Example:
    
    ```
    apiVersion: v1
    kind: Service
    metadata:
      annotations:
        service.beta.kubernetes.io/backend-type: eni   # Pass through to ENI.
      labels:
        app: nginx-ingress-lb
      name: nginx-ingress-lb
      namespace: kube-system
    spec:
      externalTrafficPolicy: Cluster
    ```
    

For more service annotations, see [Configure a Classic Load Balancer (CLB) instance using annotations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948).

### **How do I** handle **requests with large headers or cookies?**

**Problem**  
If a client request contains excessively large headers or cookies, NGINX Ingress may return a `400 Request Header Or Cookie Too Large or Bad Request` error.

**Solution**  
You must increase the buffer sizes in the NGINX configuration. Adjust the following parameters:

-   [client-header-buffer-size](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/#client-header-buffer-size): The buffer size for the client request header. Default is `1k`.
    
-   [large-client-header-buffers](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/#large-client-header-buffers): The maximum number and size of buffers for large client request headers. Default is `4 8k`.
    

**Steps**

1.  Edit the Ingress Controller ConfigMap:
    
    ```
    kubectl edit cm -n kube-system nginx-configuration
    ```
    
2.  Add or update the following settings:
    
    ```
    client-header-buffer-size: "16k"
    large-client-header-buffers: "4 32k" 
    ```
    
3.  Verify the data plane: To ensure the changes are applied to the NGINX process, check the generated `nginx.conf` inside the pod:
    
    ```
    kubectl exec <nginx-ingress-pod> -n kube-system -- cat /etc/nginx/nginx.conf | vim -
    ```
    

### **How do I configure** CORS **in NGINX Ingress?**

Enable Cross-Origin Resource Sharing (CORS) by adding specific annotations to the `metadata.annotations` section of your Ingress resource. See [Configure CORS for NGINX Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-cross-domain-configuration-and-common-problems).

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
  namespace: default
  annotations:
    nginx.ingress.kubernetes.io/enable-cors: "true"     # Enable CORS.
    nginx.ingress.kubernetes.io/cors-allow-origin: "*"  # Allow access from all domains.
    nginx.ingress.kubernetes.io/cors-allow-methods: "GET, PUT, POST, DELETE, PATCH, OPTIONS"  # Allowed HTTP methods.
     # Allowed custom request headers.
    nginx.ingress.kubernetes.io/cors-allow-headers: "DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range" 
    nginx.ingress.kubernetes.io/cors-expose-headers: "Content-Length,Content-Range"  # Exposed response headers.
    nginx.ingress.kubernetes.io/cors-max-age: "86400"  # Preflight request cache duration.
spec:
  ingressClassName: nginx
  rules:
  - host: example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: example-service
            port:
              number: 80
```

### **How do I configure client IP address pass-through?**

**Problem**

By default, NGINX Ingress forwards the client IP address uses `X-Forwarded-For` and `X-Real-IP` headers. However, if a client manually specifies these headers in a request, the backend may receive incorrect IP information.

**Solution**

Modify the `nginx-configuration` ConfigMap to implement reliable L7 IP passthrough.

1.  Run the `kubectl edit cm -n kube-system nginx-configuration` command.
    
2.  Apply these settings to trust upstream headers:
    
    ```
    compute-full-forwarded-for: "true"
    forwarded-for-header: "X-Forwarded-For"
    use-forwarded-headers: "true"
    ```
    

**Handling multi-layer proxies (WAF/CDN)**

If your cluster is behind multiple proxies (such as a WAF or Global Accelerator), you must define the IP ranges of those upstream proxies to [proxy-real-ip-cidr](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/#proxy-real-ip-cidr) in CIDR format so NGINX knows which sources to trust. Separate multiple CIDR blocks with commas. For more information, see [Use WAF](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-the-nginx-ingress-controller#9).

```
proxy-real-ip-cidr:  "0.0.0.0/0,::/0"  
```

**IPv6 and proxy protocol**

In IPv6 environments, if the `X-Forwarded-For` header received by the NGINX Ingress is empty and there is an upstream CLB instance, you can enable Proxy Protocol on the CLB instance to obtain the client IP address. For more information about Proxy Protocol, see [Obtain real client IP addresses through a Layer 4 listener of a CLB instance](/help/en/slb/classic-load-balancer/use-cases/enable-proxy-protocol-for-a-layer-4-listener-to-retrieve-client-ip-addresses).

## **References**

-   For information about the versions and release notes, see [NGINX Ingress Controller](/help/en/ack/product-overview/nginx-ingress-controller).
    
-   For common issues and troubleshooting methods, see [NGINX Ingress FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq) and [Troubleshoot NGINX Ingress issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions).
