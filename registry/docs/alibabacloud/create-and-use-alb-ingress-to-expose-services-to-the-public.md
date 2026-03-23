By default, services in a Container Service for Kubernetes (ACK) cluster are isolated from external networks. To expose these services to users, you can use an **ALB Ingress**, which leverages an Application Load Balancer (ALB) as the entry point to manage inbound traffic. ALB offers domain-based routing, security protection, and high availability.

## **How it works**

1.  **Resource association**
    
    An AlbConfig object defines the configuration of a specific ALB instance, such as its edition and listeners. A one-to-one mapping exists between an AlbConfig object and an ALB instance. The path mappings and associated services defined in an Ingress are automatically translated into the ALB instance's routing rules and server groups.
    
2.  **Dynamic synchronization**
    
    ALB Ingress Controller continuously watches for changes to Ingress and AlbConfig resources via the Kubernetes API server and dynamically updates the associated ALB instance.
    
3.  **Traffic forwarding**
    
    Unlike the NGINX Ingress controller, ALB Ingress Controller is a managed component that acts as the control plane for the ALB instance. It does not handle the data plane traffic directly. The ALB instance processes and forwards user traffic to the backend pods that are proxied by the Service.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3504585671/CAEQThiBgMCMkd6W0BkiIGI5OWI1YjI4Y2FjYzQ2MTc5ZDk2ODIwODIxOWM3ODlk4054380_20231026180318.932.svg)

## **Service type limits**

When using the Flannel network plugin, the backend service of an ALB Ingress supports only the `NodePort` and `LoadBalancer` types.

## **Step 1: Install the ALB Ingress Controller**

#### **When creating a cluster**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com) and click **Create Kubernetes Cluster**.
    
2.  In the **Component Configurations** step, find the **Ingress** section and select **ALB Ingress**.
    
3.  Select the option to create a new ALB instance and follow the on-screen instructions to create the cluster.
    
    **ALB Instance**
    
    **Description**
    
    **New**
    
    Automatically creates an ALB instance, `AlbConfig`, and `IngressClass`.
    
    -   ALB instance: A pay-as-you-go, standard ALB instance (either public or private) will be created within the cluster's virtual private cloud (VPC), with a default listener on port 80 (HTTP).
        
    -   AlbConfig and IngressClass: The corresponding `AlbConfig` and `IngressClass` resources will be automatically created in the cluster and associated with the new ALB instance.
        
    
    **Existing**
    
    > This option is available only when you select an existing VPC for the cluster network.
    
    Uses an existing ALB instance and automatically creates the associated `AlbConfig` and `IngressClass`. The selected ALB instance must meet the following criteria:
    
    -   Edition: Must be standard or WAF-enabled.
        
    -   Network: Must be in the same VPC as the cluster.
        
    -   Association: Must not already be associated with another cluster.
        
    
    **None**
    
    Installs only the ALB Ingress Controller. You must [manually create the AlbConfig and IngressClass resources](#b088211960gcn) later. This option is suitable for customizing ALB instance configurations.
    

#### **For an existing cluster**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  On the **Add-ons** page, click the **Networking** tab. Find **ALB Ingress Controller** and click **Install**.
    
4.  Select the option to create a new ALB instance and click **OK**.
    
    **ALB Instance**
    
    **Description**
    
    **New**
    
    Automatically creates an ALB instance, `AlbConfig`, and `IngressClass`.
    
    -   ALB instance: A pay-as-you-go, standard ALB instance (either public or private) will be created within the cluster's virtual private cloud (VPC), with a default listener on port 80 (HTTP).
        
    -   AlbConfig and IngressClass: The corresponding `AlbConfig` and `IngressClass` resources will be automatically created in the cluster and associated with the new ALB instance.
        
    
    **Existing**
    
    Uses an existing ALB instance and automatically creates the associated `AlbConfig` and `IngressClass`. The selected ALB instance must meet the following criteria:
    
    -   Edition: Must be standard or WAF-enabled.
        
    -   Network: Must be in the same VPC as the cluster.
        
    -   Association: Must not already be associated with another cluster.
        
    
    **None**
    
    Installs only the ALB Ingress Controller. You must [manually create the AlbConfig and IngressClass resources](#b088211960gcn) later. This option is suitable for customizing ALB instance configurations.
    

## **Step 2: Deploy a sample application**

This example deploys a sample Nginx application named `coffee` as a Deployment and exposes it internally with a Service named `coffee-svc`.

### **Console**

1.  On the **Clusters** page, find the cluster you want to manage and click its name. In the left navigation pane, choose **Workloads** > **Deployments**.
    
2.  Click **Create from YAML**. Set **Sample Template** to **Custom**, copy the following content into the template editor, and click **Create**.
    
    **YAML template**
    
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
    ```
    
3.  In the dialog box that appears, click **View** and confirm that the pod status is `Running`. 
    

### **kubectl**

1.  [Get a cluster kubeconfig and connect to the cluster using kubectl](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
    
2.  Create a file named `coffee-deployment-service.yaml` with the following content:
    
    **YAML template**
    
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
    ```
    
3.  Deploy the application.
    
    ```
    kubectl apply -f coffee-deployment-service.yaml
    ```
    
4.  Confirm the pod is running.
    
    ```
     kubectl get pod -l app=coffee
    ```
    
    Expected output:
    
    ```
    NAME                      READY   STATUS    RESTARTS   AGE
    coffee-84bd6*****-*****   1/1     Running   0          4m22s
    coffee-84bd6*****-*****   1/1     Running   0          4m22s
    ```
    

## **Step 3: Create an ALB Ingress**

By configuring the domain name and path mapping for the ALB Ingress, you can route requests for `ingress-demo.com/coffee` to the internal `coffee-svc` service in the cluster.

> To use an ALB Ingress in an ACK dedicated cluster, [grant access permissions to the ALB Ingress Controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-permissions-to-the-alb-ingress-controller#task-2118820) first.

### **Console**

1.  In the left navigation pane, choose **Network** > **Ingresses**. Select the `default` namespace and click **Create Ingress**.
    
2.  Configure the following and click **OK**.
    
    -   **Name**: `coffee-ingress`
        
    -   **Domain Name**: `ingress-demo.com`
        
    -   **Mappings**
        
        -   **Path**: `/coffee`
            
        -   **Rule**: `Prefix`
            
        -   **Service**: `coffee-svc`
            
        -   **Port**: `80`
            
            **Matching rule (pathType)**
            
            **Description**
            
            Prefix
            
            Matches based on a URL path prefix. For example, a rule with the path `/coffee` will match requests for `/coffee/1` and `/coffee/buy/1`, but it will **not** match `/cof` or `/coffeebuy/1`.
            
            Exact
            
            Matches the URL path exactly. For a rule with the path `/coffee`, only requests for the exact path `/coffee` will be matched.
            
            ImplementationSpecific
            
            The matching behavior depends on the Ingress controller. For ALB Ingress Controller, this type is equivalent to an `Exact` match.
            
3.  Obtain the **Endpoint**.
    
    > The ALB Ingress takes about 10 seconds to take effect. Click the refresh button to obtain the endpoint information. If the endpoint information is not updated after a long time, click the Ingress name and go to the **Events** tab to [troubleshoot](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-alb-ingress-exceptions).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8608211671/p1012808.png)
    
4.  Test the domain name and endpoint. If the HTTP status code is `200`, the ALB Ingress is created.
    
    ```
    curl -H "Host:ingress-demo.com" http://<Endpoint address>/coffee -s -o /dev/null -w "%{http_code}\n"
    ```
    

### **kubectl**

1.  Create a file named `coffee-ingress.yaml`.
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: coffee-ingress
      namespace: default
    spec:
      ingressClassName: alb
      rules:
      - host: ingress-demo.com
        http:
          paths:
          - path: /coffee
            backend:
              service: 
                name: coffee-svc
                port:
                  number: 80
            pathType: Prefix
    ```
    
    **Matching rule (pathType)**
    
    **Description**
    
    Prefix
    
    Matches based on a URL path prefix. For example, a rule with the path `/coffee` will match requests for `/coffee/1` and `/coffee/buy/1`, but it will **not** match `/cof` or `/coffeebuy/1`.
    
    Exact
    
    Matches the URL path exactly. For a rule with the path `/coffee`, only requests for the exact path `/coffee` will be matched.
    
    ImplementationSpecific
    
    The matching behavior depends on the Ingress controller. For ALB Ingress Controller, this type is equivalent to an `Exact` match.
    
2.  Deploy the Ingress.
    
    ```
    kubectl apply -f coffee-ingress.yaml
    ```
    
3.  Get the public endpoint of the Ingress from the `ADDRESS` field. It may take a moment for the address to be assigned.
    
    ```
    kubectl get ingress coffee-ingress -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'
    ```
    
    Expected output:
    
    ```
    alb-******************.cn-wulanchabu.alb.aliyuncsslb.com
    ```
    
4.  Test the domain name and endpoint. If the HTTP status code is `200`, the ALB Ingress is created.
    
    ```
    curl -H "Host:ingress-demo.com" http://<Endpoint address>/coffee -s -o /dev/null -w "%{http_code}\n"
    ```
    

## **Billing**

-   ALB Ingress Controller: This is a managed ACK component and does not incur charges.
    
-   ALB instance: Each `AlbConfig` resource object creates a corresponding ALB instance. ALB instances are billed on a [pay-as-you-go](/help/en/slb/application-load-balancer/product-overview/alb-billing-rules) basis.
    

## **Apply in** production

-   [Configure DNS](#c68ba52ef3dhi): Create a CNAME record in your DNS provider to point your business domain to the public endpoint of the ALB instance. This decouples the domain name from the instance endpoint and ensures high availability and flexible configuration for the service endpoint.
    
-   [Enable HTTPS](#122ca3373dhkc): Use Certificate Service to manage your certificates and reference them in your Ingress resource's `tls` section to secure your services with HTTPS.
    

## **Quotas and limits**

-   The names of AlbConfig, Ingress, Service, and namespace resources cannot start with `aliyun`.
    
-   For ALB Ingress quota limits, see [Methods to calculate ALB quotas](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-quota-calculation-method).
    
-   For ALB availability, see [Regions and zones in which ALB is available](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/regions-and-zones-supported-by-alb).
    

## **FAQ**

#### Why **am I getting a 503, 502, or 404 error when accessing my Ingress**?

**Causes**

-   **503 (Service Temporarily Unavailable) error**
    
    -   No matching routing rule: The request path does not match the routing rule configured in the Ingress.
        
    -   No healthy backend pods: All pods associated with the service are not ready or do not exist. This results in an empty endpoint object.
        
-   **502 (Bad Gateway) error**
    
    An HTTP or HTTPS listener receives a client connection request. If the ALB instance cannot forward the request to a pod or receive a response from a pod, the instance sends an HTTP 502 Bad Gateway status code to the client.
    
-   **404 (Not Found) error**
    
    This usually means the request matched a routing rule defined in the Ingress, but does not match the actual service URL provided by the application in the pod.
    

> For more HTTP error codes, see [ALB Status Codes](/help/en/slb/application-load-balancer/support/alb-exception-status-code-description).

**Solutions**

-   **Check the Ingress status**
    
    Run the command `kubectl describe ingress <ingress-name> -n <namespace>` and inspect the `Events` section for error messages. For example, if you see an event similar to `listener is not exist in alb`, it means you need to [create the listener required for the Ingress resource](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-the-alb-listener-through-the-albconfig#8f22f7807fem3) in the `AlbConfig`.
    
    ```
    ...
    Events:
      Type     Reason                  Age     From     Message
      ----     ------                  ----    ----     -------
      Warning  FailedBuildModel        ****    ingress  listener is not exist in alb, port: 443, protocol: HTTPS
      Warning  FailedBuildModel        ****    ingress  listener not found for (443/HTTPS), with ingresses 1
    ...
    ```
    
-   **Check the backend endpoints**
    
    Run the command `kubectl get endpoints <service-name> -n <namespace>` to confirm that the `ENDPOINTS` field contains at least one healthy pod IP address and port. If the field is empty, verify that the Service's `selector` matches the `labels` on your pods, and ensure the pods are in the `Running` state.
    
-   **Check the pod status and logs**
    
    First, run the command `kubectl get pod -l <app=your-app> -n <namespace>` to check the status of your application pods. Then, run `kubectl logs <pod-name> -n <namespace>` to inspect the logs of a specific pod for any startup failures or request processing errors.
    
-   **Test network connectivity**
    
    From within another pod or directly from a node, use `curl` to access the backend Service's ClusterIP or a direct pod IP. This will verify that the service is reachable from within the cluster.
    

#### **Why is HTTPS not working after I configured** TLS for an Ingress?

**Causes**

-   **Missing HTTPS listener**
    
    You have configured TLS in the Ingress, but the underlying ALB instance is not configured to listen on `HTTPS:443`.
    
-   **Incorrect Secret configuration**
    
    The Secret referenced in your Ingress is not of type `kubernetes.io/tls` or `IngressTLS`, or the `data` field in `tls.crt` and `tls.key` are invalid or mismatched.
    
-   **Certificate update not synced**
    
    You updated a certificate in the Certificate Management Service, but the change has not propagated to the ALB instance. This can happen if the certificate ID in the `AlbConfig` was not updated or if the automatic discovery and reconciliation process has not completed. The ALB instance still references the old certificate.
    

**Solutions**

1.  **Verify the ALB listener configuration**
    
    Inspect your `AlbConfig` resource to ensure an HTTPS listener on port 443 is defined.
    
    ```
    kubectl describe albconfig <alb-name> -n <namespace>
    ```
    
    Look for a listener entry with `spec.listeners.port: 443` and `spec.listeners.protocol: HTTPS`.
    
2.  **Check the Ingress annotations**
    
    Ensure your Ingress resource includes the following annotation to associate it with both the HTTP and HTTPS listeners:
    
    ```
    alb.ingress.kubernetes.io/listen-ports: [{"HTTP": 80}, {"HTTPS": 443}]
    ```
    
3.  **Validate the Secret configuration**
    
    1.  Check the `spec.tls` section of your Ingress manifest to confirm that the `secretName` field is referencing the correct Secret.
        
    2.  Inspect the Secret itself to verify its type and data integrity:
        
        ```
        kubectl get secret <secret-name> -n <namespace> -o yaml
        ```
        
    
    Confirm that the type is `kubernetes.io/tls` and that the `tls.crt` and `tls.key` fields contain valid, base64-encoded data.
    

#### **How do I configure DNS for my Ingress?**

1.  [Register a domain name](/help/en/dws/user-guide/how-to-register-a-domain-name).
    
2.  [Add a CNAME record](/help/en/slb/application-load-balancer/user-guide/configure-cname-resolution-for-alb#step-vw2-a60-5a0).
    
    > In your DNS provider's management console, add a CNAME record that points your desired hostname to the Ingress endpoint address.
    
    **Example configuration:**
    
    -   Record type: `CNAME`
        
    -   Host: `@` (This typically represents the root domain, such as `ingress-demo.com`)
        
    -   Value: The endpoint address of your Ingress, such as the address of your ALB instance.
        
3.  Verify the configuration.
    
    After the DNS record has had time to propagate, open a web browser and navigate to your domain `http://ingress-demo.com/coffee`. If the page loads successfully, the DNS resolution is working.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9228825571/p996375.png)
    
    > Use your actual registered domain name for verification. If the domain name resolution fails, see [Quick troubleshooting for domain name resolution failures](/help/en/dns/pubz-quick-troubleshooting-of-problems-not-effective).
    

#### **How do I configure HTTPS for an Ingress?**

1.  [Submit an application to a certification authority (CA)](/help/en/ssl-certificate/apply-for-a-certificate), [purchase an official certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate), and confirm that your certificate is in the **issued** status.
    
2.  [Download the SSL certificate](/help/en/ssl-certificate/download-an-ssl-certificate).
    
    > This example shows how to download the PEM-formatted certificate file for the `ingress-demo.com` domain name. The server type is set to **other**.
    
3.  Create a Kubernetes Secret for the certificate. You must store your certificate and private key in a Kubernetes Secret so the Ingress controller can access them.
    
    1.  On the **Clusters** page, click the name of the one you want to change. In the left navigation pane, choose **Configurations** > **Secrets**.
        
    2.  On the **Secrets** page, select the `default` namespace and click **Create** in the upper-left corner. Add the following configuration and click **OK**.
        
        -   **Name**: `ingress-tls`
            
        -   **Type**: **TLS Certificate**
            
        -   **Certificates**: Paste the full content of your certificate file (`.pem`).
            
        -   **Key**: Paste the full content of your private key file (`.key`).
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8608211671/p1012619.png)
        
4.  Add an HTTPS listener to your `AlbConfig`.
    
    1.  In the left navigation pane, choose **Workloads** > **Custom Resources**. On the **Resource Objects** tab, search for and click `AlbConfig`.
        
    2.  Locate your target `AlbConfig` resource (such as `alb`). In the **Actions** column, click **Edit YAML**.
        
    3.  Add a new listener for HTTPS on port 443 to the `spec.listeners` section:
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8608211671/p1012836.png)
        
    4.  Click **OK** to apply the changes.
        
5.  Update the Ingress to enable TLS.
    
    1.  In the left navigation pane, choose **Network** > **Ingresses**. In the **Actions** column of the target Ingress, click **Update**.
        
    2.  Add the following configuration and click **OK**.
        
        -   Turn on **TLS Settings**
            
            -   **Domain Name**: `ingress-demo.com`
                
            -   **Secret**: `ingress-tls`
                
        -   **Annotations**: `alb.ingress.kubernetes.io/listen-ports: [{"HTTP": 80}, {"HTTPS": 443}]`
            
6.  Open a web browser and navigate to `https://ingress-demo.com/coffee`. The connection should now be secure and use HTTPS.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9228825571/p996269.png)
    
    > Use your own registered domain for verification.
    

For more information, see [Configure HTTPS certificates for encrypted communication](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-an-alb-ingress-to-configure-certificates-for-an-https-listener).

#### **How do I manually create an** `**AlbConfig**` **and** `**IngressClass**`**?**

**Create an** `**AlbConfig**`

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc). Identify and record the IDs of at least two vSwitches that are in different availability zones within your cluster's VPC.
    
    > The Availability Zones of the selected vSwitches must be [Regions and zones](/help/en/slb/application-load-balancer/product-overview/supported-regions-and-zones).
    
2.  Create a file named `albconfig.yaml` with the following content. Replace the placeholder `zoneMappings.vSwitchId` values with the actual IDs you recorded in the previous step.
    
    ```
    apiVersion: alibabacloud.com/v1
    kind: AlbConfig
    metadata:
      name: alb # Do not create multiple AlbConfig resources with the same name (alb)
    spec:
      config:
        name: alb-test
        addressType: Internet
        zoneMappings:
        - vSwitchId: vsw-****cg2a9g71hx8go**** # Replace with your actual vSwitch ID
        - vSwitchId: vsw-****un9tql5t8nh15**** # Replace with your actual vSwitch ID
      listeners:
        - port: 80
          protocol: HTTP
    ```
    
3.  Run the following command to create the `AlbConfig` resource in your cluster:
    
    ```
    kubectl apply -f albconfig.yaml
    ```
    

> For more detailed instructions, see [Create an AlbConfig](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-albconfigs-to-configure-alb-instances#section-6su-pov-aml).

**Create an** `**IngressClass**`

The `IngressClass` resource associates an `AlbConfig` with your `Ingress` resources. By setting `ingressClassName: alb` in an `Ingress` manifest, you instruct the controller to use the configuration defined by the `IngressClass` named `alb`.

1.  Create a file named `ingressclass.yaml` with the following content.
    
    > The `spec.parameters.name` field must match the `metadata.name` of your `AlbConfig` resource (in this case, `alb`).
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: IngressClass
    metadata:
      name: alb
    spec:
      controller: ingress.k8s.alibabacloud/alb
      parameters:
        apiGroup: alibabacloud.com
        kind: AlbConfig
        name: alb # This must match the name of the AlbConfig resource
    ```
    
2.  Run the following command to create the `IngressClass`:
    
    ```
    kubectl apply -f ingressclass.yaml
    ```
    

> For detailed guidance, see [Use an IngressClass to associate an AlbConfig with an Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-albconfigs-to-configure-alb-instances#section-ca6-6ol-iqb).

## **References**

[Advanced ALB Ingress configurations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/advanced-alb-ingress-configurations)

[Customize forwarding rules for an ALB Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-routing-rules-of-an-alb-ingress-1)

[Use ALB Ingresses to perform canary releases](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-alb-ingresses-to-perform-canary-releases-1)
