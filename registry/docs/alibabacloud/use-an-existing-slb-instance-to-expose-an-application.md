You can access a Service exposed by an Alibaba Cloud Server Load Balancer (SLB) instance from outside the cluster using the domain name of the SLB instance or its `<IP:service port>` endpoint. To access the Service from within the cluster, you can use the `<Service name:service port>` endpoint. This topic uses an Nginx application as an example to describe how to expose an application using a LoadBalancer Service that is associated with an existing SLB instance.

## Prerequisites

-   You have created an ACK cluster or an ACK Serverless cluster. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/), [Create an ACK dedicated cluster (Creation suspended)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/), and [Create an ACK Serverless cluster](/help/en/ack/serverless-kubernetes/user-guide/create-an-ask-cluster-2).
    
    **Important**
    
    When you create a cluster, you can select the type and specifications only for a new SLB instance. You cannot select an existing SLB instance. To use an existing SLB instance, do not install the Ingress plugin when you create the cluster. After the cluster is created, you must manually configure the existing SLB instance. For more information, see [Use an existing CLB instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#c047e220f533g) and [Use an existing NLB instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nlb-instances-by-using-annotations#p-j9j-g56-o1s).
    
-   You have created a Classic Load Balancer (CLB) or Network Load Balancer (NLB) instance in the [SLB console](https://slb.console.alibabacloud.com). The instance must be in the same region as the ACK cluster. If you have not created an instance, see [Create and manage CLB instances](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-clb-instances#task-ctx-xsm-vdb) and [Create and manage NLB instances](/help/en/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance).
    
-   If the version of [Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager) is 2.5.0 or later, creating a new CLB instance or using an existing one when you create a Service in the console is a whitelisted feature. Only the pay-as-you-go billing method is supported. To create a CLB-type Service in the console, you must submit a request in [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas).
    

## Usage notes

When you specify an existing SLB instance, the configuration of the listeners for the SLB instance depends on the version of the cloud-controller-manager component:

-   If the version of the cloud-controller-manager component is 1.9.3.59-ge3bc999-aliyun or later: When you specify an existing SLB instance, cloud-controller-manager does not process listeners for the instance by default. You can add the annotation `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-force-override-listeners: "true"` to enable listener configuration or manually configure the listener rules for the SLB instance.
    
-   If the version of the cloud-controller-manager component is earlier than 1.9.3.59-ge3bc999-aliyun: When you specify an existing SLB instance, cloud-controller-manager automatically creates and manages the backend server groups for the instance. It also ensures that the listeners point to these Kubernetes-managed backend resources, even if you have manually configured these listeners.
    

Expand to view the method for checking the version of cloud-controller-manager:

## Use the console

On the **Add-ons** page of the cluster, you can view the version of the cloud-controller-manager component.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  On the **Add-ons** page, on the **Core Components** tab, you can view the version of the **Cloud Controller Manager** component.
    

## Use kubectl (for ACK dedicated clusters only)

```
kubectl get pod -n kube-system -o yaml|grep image:|grep cloud-con|uniq
```

## Precautions

Before you use an existing SLB instance to expose an application, take note of the following items. For more information, see the following topics:

-   [Which SLB instances can be reused?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#81ded00225vhp)
    
-   [SLB instance quotas](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#e0cf5b8c71k23)
    

## Step 1: Deploy a sample application

This topic uses a stateless Nginx application as an example to show you how to expose an application in ACK using a LoadBalancer Service.

## Use the console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want to manage and click its name. In the left navigation pane, choose **Workloads** > **Deployments**.
    
3.  On the **Deployments** page, click **Create from Image**, and configure the basic information, container, and advanced settings for the application.
    
    1.  On the **Basic Information** tab, set **Application Name** to my-nginx, retain the default values for the other parameters, and then click **Next**.
        
    2.  On the **Container Configuration** tab, set the container image name and port, retain the default values for the other parameters, and then click **Next**.
        
        **Configuration item**
        
        **Value**
        
        **Image Name**
        
        Click **Select Image**. In the Select Image and Version dialog box, click the **Artifact Center** tab, search for `nginx`, select the image repository named **openanolis/nginx**, click **Select Image Version**, set the image version, and then click **OK**.
        
        **Port**
        
        -   **Name**: nginx.
            
        -   **Container Port**: 80.
            
        
    3.  On the **Advanced Configuration** tab, retain the default settings and click **Create** to create the Nginx application.
        
    

## Use kubectl

1.  Create a file named my-nginx.yaml that contains the following YAML content for the sample application.
    
    ```
    apiVersion: apps/v1 # for versions before 1.8.0 use apps/v1beta1
    kind: Deployment
    metadata:
      name: my-nginx    # The name of the sample application.
      labels:
        app: nginx
    spec:
      replicas: 2       # The number of replicas.
      selector:
        matchLabels:
          app: nginx     # The value of Selector in the corresponding Service must be the same to expose this application through the Service.
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
            - containerPort: 80                                # This port needs to be exposed in the Service.
    ```
    
2.  Run the following command to deploy the my-nginx sample application.
    
    ```
    kubectl apply -f my-nginx.yaml
    ```
    
3.  You can run the following command to confirm that the sample application is in the Normal state.
    
    ```
    kubectl get deployment my-nginx
    ```
    
    Expected output:
    
    ```
    NAME       READY   UP-TO-DATE   AVAILABLE   AGE
    my-nginx   2/2     2            2           50s
    ```
    

## Step 2: Expose the application using a Service that uses an existing SLB instance

You can create a LoadBalancer Service to expose the application in the console or using kubectl.

## Use the console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Network** > **Services**.
    
3.  On the **Services** page, click **Create**. In the **Create Service** dialog box that appears, set the parameters for the Service.
    
    **Configuration item**
    
    **Description**
    
    **Example**
    
    **Service Name**
    
    The name of the Service.
    
    my-nginx-svc
    
    **Service Type**
    
    Select a [Service type](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-management/#b833672794xt5). The Service network supports the following modes to handle access from clients of different sources and types:
    
    **ClusterIP**
    
    A ClusterIP Service is used for communication within the cluster. Service discovery is supported only when the service type is set to ClusterIP. You can use a [Headless Service](https://kubernetes.io/docs/concepts/services-networking/service/#headless-services) to interact with other service discovery mechanisms without having to rely on the default ClusterIP-based service discovery and load balancing provided by Kubernetes.
    
    **LoadBalancer**
    
    A [LoadBalancer](/help/en/slb/product-overview/slb-overview) Service exposes applications to the internet by integrating with Alibaba Cloud Classic Load Balancer (CLB) and Network Load Balancer (NLB). Compared with a NodePort Service, a LoadBalancer Service significantly improves application availability and performance. The following types are supported:
    
    -   CLB: For configuration information, see [Classic Load Balancer (CLB)](#f8b3ccd04fpz1).
        
    -   NLB: For configuration information, see [Network Load Balancer (NLB)](#2dd44b89005op).
        
    
    **NodePort**
    
    A NodePort Service provides a convenient way for external users to access services in a cluster through the IP address and a specified port of a node. Users can connect to a NodePort Service by accessing `<NodeIP>:<NodePort>`. However, you must manually configure load balancing.
    
    1.  Select **LoadBalancer** as the service type.
        
    2.  Set Load Balancer Type to **Classic Load Balancer (CLB)** and select **Use Existing Resource**.
        
        > If Cloud Controller Manager (CCM) is v2.5.0 or later, the CLB option is a whitelisted feature. To use this feature, submit a request in [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas).
        
    3.  Then, select the created CLB instance from the drop-down list. In this example, the CLB instance is newly created and requires a listener. Therefore, select **Force Overwrite Existing Listeners**.
        
    
    **External Traffic Policy**
    
    The **External Traffic Policy** parameter is available only if you set the Service Type parameter to **Node Port** or **Server Load Balancer**. For more information about external traffic policies, see the [Differences between external traffic policies](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-management/#section-qr2-2yu-zk9) section of the "Getting started" topic. Valid values:
    
    -   **Local**: routs traffic only to the pods of the current node.
        
    -   **Cluster**: routes traffic to pods on other nodes in the cluster.
        
    
    Local
    
    **Service Association**
    
    The backend application that you want to associate with the Service. If you do not select a backend application, no Endpoint objects are created. For more information, see [Services-without-selectors](https://kubernetes.io/docs/concepts/services-networking/service/#services-without-selectors).
    
    Name: app
    
    Value: nginx
    
    **Port Mapping**
    
    The Service port and container port. The Service port corresponds to the `port` field in the YAML file and the container port corresponds to the `targetPort` field in the YAML file. The container port must be the same as the port that is exposed in the backend pod.
    
    Service Port: 80
    
    Container Port: 80
    
    Protocol: TCP
    
    **Annotations**
    
    The annotations to be added to the Service to configure the SLB instance. For more information, see [Use annotations to configure CLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948) and [Configure an NLB instance using annotations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nlb-instances-by-using-annotations).
    
    **Important**
    
    Do not reuse the SLB instance of the cluster's API Server. Otherwise, cluster access becomes abnormal.
    
    None
    
    After you configure the parameters, click **OK**.
    
4.  After the Service is created, click its name to go to the details page. In the **Basic Information** section, click the **External IP** address of the Service, such as **39.106.XX.XX:80**, to access the sample application.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7085413471/p928590.png)
    

## Use kubectl

1.  Create a Service.
    
    Create a file named my-nginx-svc.yaml that contains the following YAML content for the sample Service.
    
    -   Modify the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id` annotation. Replace _${YOUR\_LB\_ID}_ with the ID of the SLB instance that you created in the [SLB console](https://slb.console.alibabacloud.com/slb).
        
    -   When you use an existing SLB instance, a listener is not created for the SLB instance and existing listeners are not overwritten by default. To overwrite the listeners, you can set the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-force-override-listeners` annotation to `"true"`. In this example, the SLB instance is newly created and requires a listener. Therefore, the value is set to `true`. For more information about annotations, see [Use annotations to configure Classic Load Balancer (CLB) instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948) and [Use annotations to configure Network Load Balancer (NLB) instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nlb-instances-by-using-annotations).
        
    -   Change the value of **selector** to the value of **matchLabels** in the my-nginx.yaml file of the sample application. The value is `app: nginx`. This associates the Service with the backend application.
        
    
    ```
    apiVersion: v1
    kind: Service # Defines the resource object as a Service.
    metadata:
      annotations:
        service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id: ${YOUR_LB_ID}
        service.beta.kubernetes.io/alibaba-cloud-loadbalancer-force-override-listeners: 'true'
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
    
    **Field**
    
    **Description**
    
    `kind`
    
    Defines the resource object as a Service.
    
    `metadata`
    
    Defines the basic information about the Service, such as the name, label, and namespace.
    
    `metadata.annotations`
    
    A rich set of SLB-related annotations are supported. For example, in the preceding YAML sample, service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id specifies an existing CLB instance. For more information about annotations, see [Use annotations to configure Classic Load Balancer (CLB) instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948).
    
    `spec.selector`
    
    Defines the selector for the Service. The Service determines the backend pods to associate and expose based on the matching relationship between the selector and pod labels.
    
    `spec.ports.port`
    
    Defines the port exposed by the Service to the ClusterIP. This is the entry point for clients within the cluster to access the Service, which is `clusterIP:port`.
    
    `spec.ports.targetPort`
    
    Defines the port of the backend pod. Traffic coming in through the `port` flows through kube-proxy to the `targetPort` of the backend pod and finally enters the container.
    
2.  Run the following command to create a Service named my-nginx-svc and use it to expose the application.
    
    ```
    kubectl apply -f my-nginx-svc.yaml
    ```
    
3.  Run the following command to confirm that the LoadBalancer Service is created.
    
    ```
    kubectl get svc my-nginx-svc
    ```
    
    Expected output:
    
    ```
    NAME           TYPE           CLUSTER-IP    EXTERNAL-IP      PORT(S)        AGE
    my-nginx-svc   LoadBalancer   172.21.5.82   39.106.XX.XX     80:30471/TCP   5m
    ```
    
4.  Run the following command to access the sample application.
    
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
    
    <p>Thank you for using nginx.
    ```
    

## **Classic Load Balancer (CLB)**

**Create a new CLB resource**

When you create a CLB instance, you can configure it based on the following information. For more information, see [Create and manage CLB instances](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-clb-instances).

**Name**

**Description**

**Name**

The custom name of the CLB instance.

**Access Mode**

You can select **Public Network Access** or **Internal-facing Access** as needed.

**Billing Method**

You can select **PayBySpec** or **PayByCLCU** as needed. For more information, see [CLB Billing Overview](/help/en/slb/classic-load-balancer/product-overview/billing-overview/).

**IP Version**

You can select **IPv4** or **IPv6** as needed.

**Important**

To use IPv6, make sure the region of your ACK cluster is within the supported regions for IPv6 CLB. For information about the regions that support IPv6 CLB instances, see [Regions that support CLB](/help/en/slb/classic-load-balancer/product-overview/regions-that-support-clb#section-ml2-ykb-wdb).

**Scheduling Algorithm**

Two policies are supported: round-robin (RR) and weighted round-robin (WRR). RR (default): External requests are sequentially distributed to backend servers in order of access. WRR: Backend servers with higher weights are polled more frequently (have a higher probability).

**Access Control**

Provides listener-level access control. For more information, see [Access control](/help/en/slb/classic-load-balancer/user-guide/overview-3).

**Health Check**

Supports TCP and HTTP protocols. After you enable health checks, you can use them to determine the business availability of backend servers. For information about how health checks work, see [CLB health checks](/help/en/slb/classic-load-balancer/user-guide/health-check-overview/).

**Others**

You can also configure a CLB instance using annotations. For more information, see [Use annotations to configure Classic Load Balancer (CLB) instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances).

**Use an existing resource**

You can select an existing CLB instance from the drop-down list to reuse it. You can also select whether to forcibly overwrite existing listeners. For more information, see [Use an existing SLB instance and forcibly overwrite existing listeners](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#c047e227f53jc).

**Important**

There are limits and notes for reusing CLB instances. For more information, see [Which SLB instances can be reused?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#81ded00225vhp).

**Configure related resources**

**Name**

**Description**

**Scheduling Algorithm**

Two policies are supported: round-robin (RR) and weighted round-robin (WRR). RR (default): External requests are sequentially distributed to backend servers in order of access. WRR: Backend servers with higher weights are polled more frequently (have a higher probability).

**Access Control**

Provides listener-level access control. For more information, see [Access control](/help/en/slb/classic-load-balancer/user-guide/overview-3).

**Health Check**

Supports TCP and HTTP protocols. After you enable health checks, you can use them to determine the business availability of backend servers. For information about how health checks work, see [How health checks work](/help/en/slb/classic-load-balancer/user-guide/health-check-overview/).

**Others**

You can also configure a CLB instance using annotations. For more information, see [Use annotations to configure Classic Load Balancer (CLB) instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances).

## **Network Load Balancer (NLB)**

**Create a new NLB resource**

When you create an NLB instance, you can configure it based on the following information. For more information, see [Create and manage NLB instances](/help/en/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance).

**Name**

**Description**

**Name**

The custom name of the NLB instance. This is required only when you create a new NLB instance.

**Access Mode**

You can select **Public Network Access** or **Internal-facing Access** as needed.

**Billing Method**

**Pay-as-you-go**. For more information, see [NLB Product Billing](/help/en/slb/network-load-balancer/product-overview/nlb-billing).

**IP Version**

You can select **IPv4** or **Dual-stack** as needed.

**Scheduling Algorithm**

Select a scheduling algorithm.

-   **Round-Robin**: Requests are forwarded to backend servers in sequence.
    
-   **Weighted Round-Robin** (default): Backend servers that have higher weights receive more requests than backend servers that have lower weights.
    
-   **Source IP Hashing**: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
    
-   **Four-Element Hashing**: specifies consistent hashing that is based on the following factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the preceding factors are forwarded to the same backend server.
    
-   **QUIC ID Hashing**: specifies consistent hashing based on QUIC IDs. Requests with the same QUIC ID are forwarded to the same backend server.
    
    **Important**
    
    QUIC is implemented based on [draft-ietf-quic-transport-10](https://datatracker.ietf.org/doc/draft-ietf-quic-transport/10/) and iterates rapidly. Therefore, compatibility is not guaranteed for all QUIC versions. We recommend that you perform tests before you apply the protocol to a production environment.
    
-   **Weighted Least Connections**: In addition to polling based on the weight set for each backend server, this algorithm also considers the actual load (number of connections) of the backend servers. When the weights are the same, backend servers with fewer current connections are polled more frequently (have a higher probability).
    

**Health Check**

Enable or disable health checks.

-   **TCP** (default): Detects if the server port is alive by sending SYN handshake messages.
    
    -   **Response Timeout Period**: Enter the time to wait for a response from a health check. If a backend server does not respond correctly within the specified time, the health check is considered to have failed.
        
    -   **Health Check Interval**: Enter the time interval for health checks.
        
    -   **Healthy Threshold**: The number of consecutive successful health checks required to change the health check status of a backend server from failed to successful.
        
    -   **Unhealthy Threshold**: The number of consecutive failed health checks required to change the health check status of a backend server from successful to failed.
        
-   **HTTP**: Checks if the server application is healthy by sending HEAD or GET requests to simulate browser access.
    
    -   **Domain Name**: Enter the domain name for the health check.
        
        -   **Use Backend Server Private IP** (default): Use the private IP address of the backend server as the domain name for the health check.
            
        -   **Specify A Specific Domain Name**: Enter a domain name.
            
        
    -   **Path**: Enter the URL of the health check page.
        
    -   **Health Status Return Code**: You can select **http\_2xx** (default), **http\_3xx**, **http\_4xx**, or **http\_5xx**.
        

**Others**

You can also configure an NLB instance using annotations. For more information, see [Use annotations to configure Network Load Balancer (NLB) instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nlb-instances-by-using-annotations).

**VPC**

The region and VPC ID of the cluster's default VPC.

**Virtual Switch**

You can select a virtual switch corresponding to a supported zone under the cluster's default VPC, or click **Create Virtual Switch** to create a new one.

**Use an existing resource**

You can select an existing NLB instance from the drop-down list to reuse it. You can also select whether to forcibly overwrite existing listeners as needed. For more information, see [Use an existing SLB instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nlb-instances-by-using-annotations#p-j9j-g56-o1s).

**Important**

There are limits and notes for reusing NLB instances. For more information, see [Which SLB instances can be reused?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#81ded00225vhp)

**Configure related resources**

**Name**

**Description**

**Scheduling Algorithm**

Select a scheduling algorithm.

-   **Round-Robin**: Requests are forwarded to backend servers in sequence.
    
-   **Weighted Round-Robin** (default): Backend servers that have higher weights receive more requests than backend servers that have lower weights.
    
-   **Source IP Hashing**: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
    
-   **Four-Element Hashing**: specifies consistent hashing that is based on the following factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the preceding factors are forwarded to the same backend server.
    
-   **QUIC ID Hashing**: specifies consistent hashing based on QUIC IDs. Requests with the same QUIC ID are forwarded to the same backend server.
    
    **Important**
    
    QUIC is implemented based on [draft-ietf-quic-transport-10](https://datatracker.ietf.org/doc/draft-ietf-quic-transport/10/) and iterates rapidly. Therefore, compatibility is not guaranteed for all QUIC versions. We recommend that you perform tests before you apply the protocol to a production environment.
    
-   **Weighted Least Connections**: In addition to polling based on the weight set for each backend server, this algorithm also considers the actual load (number of connections) of the backend servers. When the weights are the same, backend servers with fewer current connections are polled more frequently (have a higher probability).
    

**Health Check**

Enable or disable health checks.

-   **TCP** (default): Detects if the server port is alive by sending SYN handshake messages.
    
    -   **Response Timeout Period**: Enter the time to wait for a response from a health check. If a backend server does not respond correctly within the specified time, the health check is considered to have failed.
        
    -   **Health Check Interval**: Enter the time interval for health checks.
        
    -   **Healthy Threshold**: The number of consecutive successful health checks required to change the health check status of a backend server from failed to successful.
        
    -   **Unhealthy Threshold**: The number of consecutive failed health checks required to change the health check status of a backend server from successful to failed.
        
-   **HTTP**: Checks if the server application is healthy by sending HEAD or GET requests to simulate browser access.
    
    -   **Domain Name**: Enter the domain name for the health check.
        
        -   **Use Backend Server Private IP** (default): Use the private IP address of the backend server as the domain name for the health check.
            
        -   **Specify A Specific Domain Name**: Enter a domain name.
            
        
    -   **Path**: Enter the URL of the health check page.
        
    -   **Health Status Return Code**: You can select **http\_2xx** (default), **http\_3xx**, **http\_4xx**, or **http\_5xx**.
        

**Others**

You can also configure an NLB instance using annotations. For more information, see [Use annotations to configure Network Load Balancer (NLB) instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nlb-instances-by-using-annotations).

**VPC**

The region and VPC ID of the cluster's default VPC.

**Virtual Switch**

You can select a virtual switch corresponding to a supported zone under the cluster's default VPC, or click **Create Virtual Switch** to create a new one.

## **What to do next**

To view, update, or delete a Service, for example, to modify the public-facing SLB instance that is associated with the Service, you can perform the following operations.

## Use the console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Network** > **Services**.
    
3.  On the **Services** page, click **Update** or **Delete** in the **Actions** column of the target Service to update or delete the Service.
    

## Use kubectl

### Update a Service

-   Method 1: Run the following command to update the Service.
    
    ```
    kubectl edit service my-nginx-svc
    ```
    
-   Method 2: Manually delete the old Service, modify the YAML file, and then re-create the Service.
    
    ```
    kubectl apply -f my-nginx-svc.yaml
    ```
    

### View a Service

Run the following command to view the Service:

```
kubectl get service my-nginx-svc
```

Expected output:

```
NAME           TYPE           CLUSTER-IP    EXTERNAL-IP      PORT(S)        AGE
my-nginx-svc   LoadBalancer   172.21.XX.XX   192.168.XX.XX     80:31599/TCP   5m
```

### Delete a Service

Run the following command to delete the Service.

```
kubectl delete service my-nginx-svc
```

## References

-   The cloud-controller-manager component supports the automatic creation of `Type=LoadBalancer` Services for load balancing. For more information, see [Use an automatically created SLB instance to expose an application](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-an-automatically-created-slb-instance-to-expose-an-application).
    
-   If you encounter issues when you use ACK Services, such as Service annotations not taking effect or the inability to associate a Service with an SLB instance, see [Service FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#task-2039653) and [Troubleshoot Service issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-troubleshooting-2) for solutions.
