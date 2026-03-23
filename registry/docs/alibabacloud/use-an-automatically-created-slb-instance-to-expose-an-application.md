When no Server Load Balancer (SLB) instance is available, the cloud-controller-manager component automatically creates and manages a Classic Load Balancer (CLB) or Network Load Balancer (NLB) instance for a LoadBalancer Service. This topic describes how to use an automatically created SLB instance to expose an NGINX application.

## **Notes**

### **Load balancing management by** **the CCM**

-   The CCM creates and configures SLB resources for only Services with the `Type=LoadBalancer` setting.
    

**Important**

If you change the setting for a Service from `Type=LoadBalancer` to `Type!=LoadBalancer`, the CCM deletes the configurations of the SLB instance created for the Service. As a result, the Service cannot be accessed by using the SLB instance.

-   The CCM uses a declarative API and automatically updates the configurations of an SLB instance to match the configurations of the exposed Service when specific conditions are met. If you set `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-force-override-listeners:` to `true`, the SLB configurations that you modify in the SLB console may be overwritten by the CCM.
    

**Important**

For an SLB instance created and managed by the CCM, we recommend that you do not modify the configurations of the instance in the SLB console. Otherwise, the CCM may overwrite the configurations and the relevant Service may become inaccessible.

### **SLB**

-   The CCM creates SLB instances for Services with the `Type=LoadBalancer` setting. By default, you can have a maximum of 60 SLB instances within your Alibaba Cloud account. To create more SLB instances, apply for a quota increase in the [log on to the Quota Center console and submit an application](https://quotas.console.alibabacloud.com/products/csk/quotas).
    
-   The CCM automatically adds Elastic Compute Service (ECS) instances to the backend server groups of an SLB instance based on the Service configurations.
    
    -   By default, an ECS instance can be added to at most 50 backend server groups. To add the ECS instance to more backend server groups, apply for a quota increase in the [log on to the Quota Center console and submit an application](https://quotas.console.alibabacloud.com/products/csk/quotas).
        
    -   By default, you can add at most 200 backend servers to an SLB instance. To add more backend servers to an SLB instance, apply for a quota increase in the [log on to the Quota Center console and submit an application](https://quotas.console.alibabacloud.com/products/csk/quotas).
        
-   The CCM automatically creates listeners that use Service ports for SLB instances. By default, each SLB instance supports at most 50 listeners. To increase the number of listeners supported by each SLB instance, apply for a quota increase in the [log on to the Quota Center console and submit an application](https://quotas.console.alibabacloud.com/products/csk/quotas).
    
-   For more information about the limits on SLB, see [Limits](/help/en/slb/classic-load-balancer/product-overview/limits-1#concept-mfm-mp4-tdb) on CLB and [Limits](/help/en/slb/network-load-balancer/product-overview/restrictions-on-use) on NLB.
    
    To query the SLB resource quotas, go to the [Quota Center page in the SLB console](https://slb.console.alibabacloud.com/slb/quota).
    

## Step 1: Deploy an application

This topic uses an NGINX stateless application as an example to demonstrate how to use a LoadBalancer Service to expose an application.

### Use the ACK console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want to manage and click its name. In the left-side pane, choose **Workloads** > **Deployments**.
    
3.  On the **Deployments** page, click **Create from Image** and configure the basic information, container settings, and advanced settings of the Deployment.
    
    1.  On the **Basic Information** wizard page, specify **Name**, keep the default settings for other parameters, and click **Next**. In this example, the name is set to my-nginx.
        
    2.  On the **Container** wizard page, specify the image name and container ports, keep the default settings for other parameters, and click **Next**.
        
        **Parameter**
        
        **Valid value**
        
        **Image Name**
        
        Click **Select images**. In the Select images and image tags dialog box, click the **Artifact Center** tab, search for `nginx`, and select the image repository named **openanolis/nginx**. Then, click **Select Image Tag**, set an image tag, and click **OK**.
        
        **Port**
        
        -   **Name**: nginx.
            
        -   **Container Port**: 80.
            
        
    3.  On the **Advanced** wizard page, keep the default settings and click **Create** to create an NGINX application.
        
    

### Use kubectl

1.  Create a file named my-nginx.yaml file and add the following YAML content to the file:
    
    ```
    apiVersion: apps/v1 # for versions before 1.8.0 use apps/v1beta1
    kind: Deployment
    metadata:
      name: my-nginx    # The name of the sample application. 
      labels:
        app: nginx
    spec:
      replicas: 2       # The number of replicated pods. 
      selector:
        matchLabels:
          app: nginx     # You must specify the same value in the selector of the Service that is used to expose the application. 
      template:
        metadata:
          labels:
            app: nginx
        spec:
        #  nodeSelector:
        #    env: test-team
          containers:
          - name: nginx
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            ports:
            - containerPort: 80                                # The port that you want to expose in the Service.
    ```
    
2.  Run the following command to deploy the my-nginx application:
    
    ```
    kubectl apply -f my-nginx.yaml
    ```
    
3.  Run the following command to query the status of the application:
    
    ```
    kubectl get deployment my-nginx
    ```
    
    Expected output:
    
    ```
    NAME       READY   UP-TO-DATE   AVAILABLE   AGE
    my-nginx   2/2     2            2           50s
    ```
    

## Step 2: Use an automatically created SLB instance to expose an application

You can use the Container Service for Kubernetes (ACK) console or kubectl to create a LoadBalancer Service. After the Service is created, you use the Service to expose the application.

## Use the ACK console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Network** > **Services**.
    
3.  On the **Services** page, click **Create**, and set the parameters in the **Create Service** dialog box.
    
    **Configuration item**
    
    **Description**
    
    **Example**
    
    **Name**
    
    The name of the Service.
    
    my-nginx-svc
    
    **Service** **Type**
    
    Specify [Service Type](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-management/#b833672794xt5). You can create the following types of Services to handle access from different types of sources:
    
    **Cluster IP**
    
    This type of Service is used for communication within the cluster. Only ClusterIP Services can discover and communicate with each other. If you select [Headless Service](https://kubernetes.io/docs/concepts/services-networking/service/#headless-services), you can interact with other service discovery mechanisms without the need to rely on the ClusterIP-based service discovery and load balancing features provided by Kubernetes by default.
    
    **SLB**.
    
    This type of Service allows you to use [CLB](#7605970a37fss) and [NLB](#a4ac92e3073cb) instances to expose applications in a cluster. Compared with NodePort Services, the availability and performance of applications exposed by using Services of this type.
    
    **Node Port**
    
    External users can access this type of Services by using the IP address and specified port of a node. You can connect to a NodePort Service through `<NodeIP>:<NodePort>`. However, you must manually configure load balancing.
    
    1.  Select **SLB**.
        
    2.  Select **CLB** as the **SLB Type**. Beside **Select Resource**, select **Create Resource**.
        
    3.  Modify the configurations in the **Create CLB Instance** dropdown menu as needed. Set the **Billing Method** to **Pay-as-you-go (Pay-by-CU)**.
        
    
    **External Traffic Policy**
    
    The **External Traffic Policy** parameter is available only if you set the Service Type parameter to **Node Port** or **Server Load Balancer**. For more information about external traffic policies, see the [Differences between external traffic policies](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-management/#section-qr2-2yu-zk9) section of the "Getting started" topic. Valid values:
    
    -   **Local**: routs traffic only to the pods of the current node.
        
    -   **Cluster**: routes traffic to pods on other nodes in the cluster.
        
    
    Local
    
    **Backend**
    
    The backend application that you want to associate with the Service. If you do not select a backend application, no Endpoint objects are created. For more information, see [Services-without-selectors](https://kubernetes.io/docs/concepts/services-networking/service/#services-without-selectors).
    
    Name: app
    
    Value: nginx
    
    **Port Mapping**
    
    The Service port and container port. The Service port corresponds to the `port` field in the YAML file and the container port corresponds to the `targetPort` field in the YAML file. The container port must be the same as the port that is exposed in the backend pod.
    
    Service port: 80
    
    Container port: 80
    
    Protocol: TCP
    
    **Annotations**
    
    Add an annotation to the Service to modify the configuration of the SLB instance. For more information, see [Use annotations to configure CLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948) and [Use annotations to configure NLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nlb-instances-by-using-annotations).
    
    **Important**
    
    Do not reuse the SLB instance of the API server in the cluster. Otherwise, cluster access failures may occur.
    
    In this example, the Service's public bandwidth billing is set to pay-by-bandwidth with a maximum bandwidth of 2 Mbit/s, to limit the traffic volume through the Service. Example:
    
    -   `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-charge-type:paybybandwidth`
        
    -   `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-bandwidth:2`
        
    
    **Label**
    
    The label to be added to the Service, which identifies the Service.
    
    N/A
    
    **Service Deletion Protection**
    
    Enable deletion protection for Services involving critical business or sensitive data to avoid maintenance costs associated with accidental deletions. After you enable this feature, you must manually disable it before deleting any resources.
    
    **Note**
    
    You must first install [policy-template-controller](/help/en/ack/product-overview/policy-template-controller) and [gatekeeper](/help/en/ack/product-overview/gatekeeper) for management of container security policies. On your cluster details page, choose **Operations** > ****Add-ons****. You will find these components. Click **Install** to deploy these components.
    
    Disabled
    
    After you configure the parameters, click **OK**.
    
4.  After creation, click the target Service to go to the details page. In the **Basic Information** section, click IP address on the right side of **External IP**, such as **39.106.XX.XX:80**, to access the application.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7085413471/p928590.png)
    

## Use **kubectl**

1.  Use the following YAML content of the sample service to create a file named my-nginx-svc.yaml.
    
    Modify the selector to match the value of matchLabels in the sample application file my-nginx.yaml (in this example, `app: nginx`), to associate the service with the backend application.
    
    ```
    apiVersion: v1
    kind: Service
    metadata:
      labels:
        app: nginx
      name: my-nginx-svc
      namespace: default
    spec:
      ports:
      - port: 80
        protocol: TCP
        targetPort: 80
      selector:
        app: nginx
      type: LoadBalancer
    ```
    
2.  Run the following command to create a Service named my-nginx-svc and use the Service to expose the application:
    
    ```
    kubectl apply -f my-nginx-svc.yaml
    ```
    
3.  Run the following command to confirm that the LoadBalancer Service is created:
    
    ```
    kubectl get svc my-nginx-svc
    ```
    
    Expected output:
    
    ```
    NAME           TYPE           CLUSTER-IP    EXTERNAL-IP      PORT(S)        AGE
    my-nginx-svc   LoadBalancer   172.21.5.82   39.106.XX.XX     80:30471/TCP   5m
    ```
    
4.  Run the following command to access the application:
    
    ```
    curl <YOUR-External-IP> # Replace <YOUR-External-IP> with the EXTERNAL-IP address obtained above.
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
    
    <p><em>Thank you for using nginx.</em></p>
    </body>
    </html>
    ```
    

### **CLB**

**Create CLB Instance**

If you select Create CLB Instance, you can set the access mode of the CLB instance to public access or internal access and the billing method of the CLB instance to pay-by-specification or pay-as-you-go. For more information, see [Create and manage a CLB instance](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-clb-instances).

**Parameter**

**Description**

**Name**

Name of the CLB instance. This parameter is required only if you create a CLB instance.

**Access Method**

Valid values: **Public Access** and **Internal Access**.

**IP Version**

Version of the IP address. Valid values: **IPv4** and **IPv6**.

**Scheduling Algorithm**

Valid values: Round Robin (RR) and Weighted Round Robin (WRR). Default value: Round Robin (RR). Round Robin (RR): Requests are distributed to backend servers in sequence. Weighted Round Robin (WRR): Backend servers with higher weights receive more requests than those with lower weights.

**Access Control**

Specify whether to enable the access control feature for the listener. For more information, see [Access control](/help/en/slb/classic-load-balancer/user-guide/overview-3).

**Health Check**

Specify whether to enable the health check feature. You can set the Health Check Protocol parameter to TCP or HTTP. After the health check feature is enabled, you can determine the service availability of backend servers by using the health check feature. For more information about how health checks work, see [CLB health checks](/help/en/slb/classic-load-balancer/user-guide/health-check-overview/).

**Others**

You can also use annotations to configure CLB instances. For more information, see [Use annotations to configure CLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances).

**Use Existing CLB Instance**

You can select an existing CLB instance from the drop-down list below Use Existing CLB Instance. You can also choose whether to enable Overwrite Existing Listeners. For more information, see [Use an existing CLB instance and forcefully overwrite the listeners of the CLB instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#f2028ce06cy5j).

**Important**

You must take note of some limits and usage notes when you use an existing CLB instance. For more information, see the [Usage notes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#81ded00225vhp) section of the "Considerations for configuring a LoadBalancer Service" topic.

**Advanced Settings**

**Parameter**

**Description**

**Scheduling Algorithm**

Valid values: Round Robin (RR) and Weighted Round Robin (WRR). Default value: Round Robin (RR). Round Robin (RR): Requests are distributed to backend servers in sequence. Weighted Round Robin (WRR): Backend servers with higher weights receive more requests than those with lower weights.

**Access Control**

Specify whether to enable the access control feature for the listener. For more information, see [Access control](/help/en/slb/classic-load-balancer/user-guide/overview-3).

**Health Check**

Specify whether to enable the health check feature. You can set the Health Check Protocol parameter to TCP or HTTP. After the health check feature is enabled, you can determine the service availability of backend servers by using the health check feature. For more information about how health checks work, see [CLB health checks](/help/en/slb/classic-load-balancer/user-guide/health-check-overview/).

**Others**

You can also use annotations to configure CLB instances. For more information, see [Use annotations to configure CLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances).

### **NLB**

**Create NLB Instance**

If you select Create NLB Instance, you can set the access mode of the NLB instance to public access or internal access. For more information, see [Create and manage an NLB instance](/help/en/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance).

**Parameter**

**Description**

**Name**

Name of the NLB instance. This parameter is required only if you create an NLB instance.

**Access Method**

Valid values: **Public Access** and **Internal Access**.

**IP Version**

Version of the IP address. Valid values: **IPv4** and **Dual-stack**.

**Scheduling Algorithm**

Valid values:

-   **Round-Robin**: Requests are forwarded to backend servers in sequence.
    
-   **Weighted Round-Robin** (default): Backend servers that have higher weights receive more requests than backend servers that have lower weights.
    
-   **Source IP Hashing**: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
    
-   **Four-Element Hashing**: specifies consistent hashing that is based on the following factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the preceding factors are forwarded to the same backend server.
    
-   **QUIC ID Hashing**: specifies consistent hashing based on QUIC IDs. Requests with the same QUIC ID are forwarded to the same backend server.
    
    **Important**
    
    QUIC is implemented based on [draft-ietf-quic-transport-10](https://datatracker.ietf.org/doc/draft-ietf-quic-transport/10/) and iterates rapidly. Therefore, compatibility is not guaranteed for all QUIC versions. We recommend that you perform tests before you apply the protocol to a production environment.
    
-   **Weighted Least Connections**: Requests are forwarded based on the weights and number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
    

**Health Check**

Specify whether to enable the health check feature.

-   **TCP** (default): To perform TCP health checks, NLB sends SYN packets to a backend server to check whether the port of the backend server can receive requests.
    
    -   **Health Check Response Timeout**: the amount of time to wait before you receive a response from a health check. If a backend server does not respond within the specified timeout period, the backend server is considered unhealthy.
        
    -   **Health Check Interval**: the interval at which health checks are performed.
        
    -   **Healthy Threshold**: the minimum number of times that a backend server must consecutively pass health checks before the backend server is considered healthy.
        
    -   **Unhealthy Threshold**: the minimum number of times that a backend server must consecutively fail to pass health checks before the backend server is considered unhealthy.
        
-   **HTTP**: To perform HTTP health checks, NLB sends HEAD or GET requests to a backend server to check whether the backend server is healthy.
    
    -   **Domain Name**: the domain name that is used for the health check.
        
        -   **Backend Server Internal IP** (default): uses the private IP addresses of backend servers for health checks.
            
        -   **Custom Domain Name**: Enter a domain name.
            
        
    -   **Path**: the URL of the health check page.
        
    -   **Health Check Status Codes**: the status code that is returned for a health check. Valid values: **http\_2xx**, **http\_3xx**, **http\_4xx**, and **http\_5xx**. Default value: http\_2xx.
        

**Others**

You can also use annotations to configure NLB instances. For more information, see [Use annotations to configure NLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nlb-instances-by-using-annotations).

**VPC**

Default cluster VPC region and VPC ID.

**Vswitch**

You can choose the vSwitches in the zones supported by the instance in the VPC, or create a new one.

**Use Existing NLB Instance**

If you select Use Existing NLB Instance, you can select an existing NLB instance from the drop-down list below Use Existing NLB Instance. You can also choose whether to enable Overwrite Existing Listeners. For more information, see [Use an existing NLB instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nlb-instances-by-using-annotations#bf66e5b06csv0).

**Important**

You must take note of some limits and usage notes when you use an existing NLB instance. For more information, see [Usage notes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#81ded00225vhp) section of the "Considerations for configuring a LoadBalancer Service" topic.

**Advanced Settings**

**Parameter**

**Description**

**Scheduling Algorithm**

Valid values:

-   **Round-Robin**: Requests are forwarded to backend servers in sequence.
    
-   **Weighted Round-Robin** (default): Backend servers that have higher weights receive more requests than backend servers that have lower weights.
    
-   **Source IP Hashing**: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
    
-   **Four-Element Hashing**: specifies consistent hashing that is based on the following factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the preceding factors are forwarded to the same backend server.
    
-   **QUIC ID Hashing**: specifies consistent hashing based on QUIC IDs. Requests with the same QUIC ID are forwarded to the same backend server.
    
    **Important**
    
    QUIC is implemented based on [draft-ietf-quic-transport-10](https://datatracker.ietf.org/doc/draft-ietf-quic-transport/10/) and iterates rapidly. Therefore, compatibility is not guaranteed for all QUIC versions. We recommend that you perform tests before you apply the protocol to a production environment.
    
-   **Weighted Least Connections**: Requests are forwarded based on the weights and number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
    

**Health Check**

Specify whether to enable the health check feature.

-   **TCP** (default): To perform TCP health checks, NLB sends SYN packets to a backend server to check whether the port of the backend server can receive requests.
    
    -   **Health Check Response Timeout**: the amount of time to wait before you receive a response from a health check. If a backend server does not respond within the specified timeout period, the backend server is considered unhealthy.
        
    -   **Health Check Interval**: the interval at which health checks are performed.
        
    -   **Healthy Threshold**: the minimum number of times that a backend server must consecutively pass health checks before the backend server is considered healthy.
        
    -   **Unhealthy Threshold**: the minimum number of times that a backend server must consecutively fail to pass health checks before the backend server is considered unhealthy.
        
-   **HTTP**: To perform HTTP health checks, NLB sends HEAD or GET requests to a backend server to check whether the backend server is healthy.
    
    -   **Domain Name**: the domain name that is used for the health check.
        
        -   **Backend Server Internal IP**: uses the private IP addresses of backend servers for health checks. This is the default value.
            
        -   **Custom Domain Name**: Enter a domain name.
            
        
    -   the URL of the health check page.
        
    -   **Health Check Status Codes**: the status code that is returned for a health check. Valid values: **http\_2xx**, **http\_3xx**, **http\_4xx**, and **http\_5xx**. Default value: http\_2xx.
        

**Others**

You can also use annotations to configure NLB instances. For more information, see [Use annotations to configure NLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nlb-instances-by-using-annotations).

**VPC**

Default cluster VPC region and VPC ID.

**Vswitch**

You can choose the vSwitches in the zones supported by the instance in the VPC, or create a new one.

## **What to do next**

You can manage Service operations such as viewing, updating, deleting, or enabling deletion protection. For example, you can modify the Internet-facing SLB instance linked to a Service.

**Important**

When you delete a Service or change its type from `LoadBalancer`, the auto-provisioned SLB instance will be released automatically. To retain it, add the annotation `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-preserve-lb-on-delete`. For detailed instructions, see [Retain automatically created SLB instances when you delete a Service](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#fec00c6acejzp). This solution applies to both CLB and NLB instances.

## Use the ACK console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Network** > **Services**.
    
3.  On the **Services** page, find the Service that you want to manage and click **Update** in the **Actions** column to update the Service. You can also choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5433874471/p867409.png) > **Delete** to delete the Service or choose > **Enable Deletion Protection** to enable deletion protection for the Service.
    

## Use kubectl

### Update a Service

-   Method 1: Run the following command to update a Service:
    
    ```
    kubectl edit service my-nginx-svc
    ```
    
-   Method 2: Manually delete a Service, modify the YAML file, and then recreate the Service.
    
    ```
    kubectl apply -f my-nginx-svc.yaml
    ```
    

### View a Service

Run the following command to view a Service:

```
kubectl get service my-nginx-svc
```

Expected output:

```
NAME           TYPE           CLUSTER-IP    EXTERNAL-IP      PORT(S)        AGE
my-nginx-svc   LoadBalancer   172.21.XX.XX   192.168.XX.XX     80:31599/TCP   5m
```

### Delete a Service

Run the following command to delete a Service:

```
kubectl delete service my-nginx-svc
```

## References

-   [Use annotations to configure CLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948)
    
-   [Use annotations to configure NLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nlb-instances-by-using-annotations)
    
-   [Use an existing SLB instance to expose an application](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-an-existing-slb-instance-to-expose-an-application#task-1942045)
