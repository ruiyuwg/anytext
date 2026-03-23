Deployments do not save any data or state, such as NGINX Services. A stateless application can be created by using an image, an orchestration template, or kubectl commands. When you create an application from a private image, you can set a Secret for the private image in the Container Service for Kubernetes (ACK) console to ensure image security. This topic describes how to create a stateless application by using an image in the ACK console.

## Prerequisites

An ACK Serverless cluster is created. For more information, see [Create an ACK Serverless cluster](/help/en/ack/serverless-kubernetes/user-guide/create-an-ask-cluster-2#task-e3c-311-ydb).

## Step 1: Configure basic settings

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want to manage and click its name. In the left-side pane, choose **Workloads** > **Deployments**.
    
3.  In the upper-right corner of the **Deployments** page, click **Create from Image**.
    
4.  On the **Basic Information** wizard page, configure the basic settings.
    
    Before you configure the Deployment, select a namespace in the upper part of the page. In this example, the **default** namespace is selected, and the type of application is set to **Deployments**.
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    Enter a name for the application.
    
    **Replicas**
    
    Specify the number of pods that are provisioned for the application.
    
    **Type**
    
    The type of resource object that you want to create. Valid values: **Deployment**, **StatefulSet**, **Job**, and **CronJob**.
    
    **Label**
    
    Add labels to the application to identify the application.
    
    **Annotations**
    
    Add annotations to the application.
    
5.  Click **Next**. Proceed to the **Container** step.
    

## Step 2: Configure the containers

In the **Container** step, complete the configurations of the containers for the application. The configurations include the container image, computing resources, container ports, environment variables, health checks, lifecycle, and volumes.

**Note**

In the upper part of the **Container** step, click **Add Container** to add more containers for the application.

1.  In the **General** section, complete the basic configurations of the container.
    
    **Parameter**
    
    **Description**
    
    **Image Name**
    
    -   **Select images**
        
        You can click **Select images** to select an image. The following types of images are supported:
        
        -   **Container Registry Enterprise Edition**: Select an image stored in a Container Registry Enterprise Edition instance. You must select the region and the Container Registry instance to which the image belongs. For more information about Container Registry, see [What is Container Registry?](/help/en/acr/product-overview/what-is-container-registry#concept-2058233)
            
        -   **Container Registry Personal Edition**: Select an image stored in a Container Registry Personal Edition instance. You must select the region and the Container Registry instance to which the image belongs.
            
        -   **Artifact Center**: The artifact center contains base operating system images, base language images, and AI- and big data-related images for application containerization. In this example, an NGINX image is selected. For more information, see [Overview of the artifact center](/help/en/acr/user-guide/artifact-center).
            
            **Note**
            
            The artifact center of Container Registry provides base images that are updated and patched by Alibaba Cloud or OpenAnolis. If you have other requirements or questions, join the DingTalk group (ID 33605007047) to request technical support.
            
        
        You can also enter the address of an image that is stored in a private registry. The image address must be specified in the following format: `domainname/namespace/imagename:tag`.
        
    -   **Image Pull Policy**
        
        The policy for pulling images. Valid values:
        
        -   **IfNotPresent**: If the image that you want to pull is found on your on-premises machine, the image on your on-premises machine is used. Otherwise, ACK pulls the image from the image registry.
            
        -   **Always**: ACK pulls the image from Container Registry each time the application is deployed or expanded.
            
        -   **Never**: ACK uses only images on your on-premises machine.
            
        
        **Note**
        
        If you select **Image Pull Policy**, no image pulling policy is applied by default.
        
    -   **Set Image Pull Secret**
        
        You can click **Set Image Pull Secret** to set a Secret for pulling images from a private registry.
        
        -   You can use Secrets to pull images from Container Registry Personal Edition instances. For more information about how to set a Secret, see [Manage Secrets](/help/en/ack/serverless-kubernetes/user-guide/manage-secrets-1693820925388).
            
        -   You can pull images without using Secrets from Container Registry Enterprise Edition instances.
            
    
    **Required Resources**
    
    The amount of **CPU** and **memory** resources that are reserved for the application. The resources are exclusive to the containers of the application. This prevents the application from becoming unavailable when other services or processes compete for computing resources.
    
    **Container Start Parameter**
    
    -   stdin: passes input in the ACK console to the container.
        
    -   tty: passes start parameters that are defined in a virtual terminal to the ACK console.
        
    
    **Init Containers**
    
    If you select Init Containers, an init container is created. An init container provides tools for pod management. For more information, see [Init Containers](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/?spm=a2c4g.11186623.2.13.3fdd30dfnyevPx).
    
2.  In the **Ports** section, click **Add** to add a container port.
    
    -   **Name**: Enter a name for the container port.
        
    -   **Container Port**: Enter the port number that you want to open. Valid values: 1 to 65535.
        
    -   **Protocol**: TCP and UDP are supported.
        
    
3.  In the **Environments** section, click **Add** to configure environment variables.
    
    **Note**
    
    To configure environment variables, make sure that the corresponding ConfigMaps or Secrets are created. For more information, see [Manage ConfigMaps](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-configmaps) and [Manage Secrets](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-secrets).
    
    You can configure environment variables in key-value pairs for pods. Environment variables are used to apply pod configurations to containers. For more information, see [Pod variables](https://kubernetes.io/docs/tasks/inject-data-application/environment-variable-expose-pod-information/?spm=0.0.0.0.8VJbrE).
    
    -   **Type**: Specify the type of the environment variable. Valid values: **Custom**, **ConfigMaps**, **Secrets**, **Value/ValueFrom**, and **ResourceFieldRef**. If you select ConfigMaps or Secrets, you can pass all data in the selected ConfigMap or Secret to the container environment variables. In this example, Secrets is selected.
        
        Select **Secrets** from the Type drop-down list and select a Secret from the **Value/ValueFrom** drop-down list. By default, all data in the selected Secret is passed to the environment variable.
        
        In this case, the YAML file that is used to deploy the application contains the settings that reference all data in the specified Secret.![yaml](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9007846161/p130413.jpg)
        
    -   **Variable Key**: Specify the name of the environment variable.
        
    -   **Value/ValueFrom**: Select the Secret from which the environment variable references data.
        
    
4.  In the **Health Check** section, enable **liveness** and **readiness** probes as needed.
    
    **Parameter**
    
    **Description**
    
    **Liveness**: Check whether the container is running as expected. If not, restart the container.
    
    **Request type: HTTP**
    
    Sends an HTTP request to the container to periodically check whether the container is running as expected.
    
    -   **Protocol**: **HTTP** or **HTTPS**.
        
    -   **Path**: the requested HTTP path on the server.
        
    -   **Port**: the number or name of the port exposed by the container. The port number must be from 1 to 65535.
        
    -   **HTTP Header**: the custom headers in the HTTP request. Duplicate headers are allowed. You can specify HTTP headers in key-value pairs.
        
    -   **Initial Delay (s)**: the initialDelaySeconds field in the YAML file. This field specifies the wait time before the first probe is performed after the container is started. Default value: 3. Unit: seconds.
        
    -   **Period (s)**: the periodSeconds field in the YAML file. This field specifies the interval at which probes are performed. Default value: 10. Minimum value: 1. Unit: seconds.
        
    -   **Timeout (s)**: the timeoutSeconds field in the YAML file. This field specifies the time after which a probe times out. Default value: 1. Minimum value: 1.
        
    -   **Healthy Threshold**: the minimum number of consecutive successes that must occur before a container is considered healthy after a failed probe. Default value: 1. Minimum value: 1. For liveness probes, this parameter must be set to 1.
        
    -   **Unhealthy Threshold**: the minimum number of consecutive failures that must occur before a container is considered unhealthy after a success. Default value: 3. Minimum value: 1.
        
    
    **Request type: TCP**
    
    Sends a TCP socket to the container. kubelet attempts to open the socket on the specified port. If the connection can be established, the container is considered healthy. Otherwise, the container is considered unhealthy.
    
    -   **Port**: the number or name of the port exposed by the container. The port number must be from 1 to 65535.
        
    -   **Initial Delay (s)**: the initialDelaySeconds field in the YAML file. This field specifies the wait time before the first probe is performed after the container is started. Default value: 15. Unit: seconds.
        
    -   **Period (s)**: the periodSeconds field in the YAML file. This field specifies the interval at which probes are performed. Default value: 10. Minimum value: 1. Unit: seconds.
        
    -   **Timeout (s)**: the timeoutSeconds field in the YAML file. This field specifies the time after which a probe times out. Default value: 1. Minimum value: 1.
        
    -   **Healthy Threshold**: the minimum number of consecutive successes that must occur before a container is considered healthy after a failed probe. Default value: 1. Minimum value: 1. For liveness probes, this parameter must be set to 1.
        
    -   **Unhealthy Threshold**: the minimum number of consecutive failures that must occur before a container is considered unhealthy after a success. Default value: 3. Minimum value: 1.
        
    
    **Request type: command**
    
    Runs a probe command in the container to check the health status of the container.
    
    -   **Command**: the probe command that is run to check the health status of the container.
        
    -   **Initial Delay (s)**: the initialDelaySeconds field in the YAML file. This field specifies the wait time before the first probe is performed after the container is started. Default value: 5. Unit: seconds.
        
    -   **Period (s)**: the periodSeconds field in the YAML file. This field specifies the interval at which probes are performed. Default value: 10. Minimum value: 1. Unit: seconds.
        
    -   **Timeout (s)**: the timeoutSeconds field in the YAML file. This field specifies the time after which a probe times out. Default value: 1. Minimum value: 1.
        
    -   **Healthy Threshold**: the minimum number of consecutive successes that must occur before a container is considered healthy after a failed probe. Default value: 1. Minimum value: 1. For liveness probes, this parameter must be set to 1.
        
    -   **Unhealthy Threshold**: the minimum number of consecutive failures that must occur before a container is considered unhealthy after a success. Default value: 3. Minimum value: 1.
        
    
    **Readiness**: Readiness probes are used to determine whether a container is ready to receive traffic.
    
    **Startup**: Startup probes are used to check whether applications in a container are started.
    
    **Note**
    
    Startup probes are supported only in Kubernetes 1.18 and later.
    
5.  In the Lifecycle section, configure the lifecycle of the container.
    
    You can specify the following parameters to configure the lifecycle of the container: Start, Post Start, and Pre Stop. For more information, see [Configure the lifecycle of a container](https://kubernetes.io/docs/tasks/configure-pod-container/attach-handler-lifecycle-event/).
    
    -   **Start**: Specify the command and parameter that take effect before the container starts.
        
    -   **Post Start**: Specify the command that takes effect after the container starts.
        
    -   **Pre Stop**: Specify the command that takes effect before the container stops.
        
    
6.  In the **Volume** section, add on-premises storage volumes, persistent volume claims (PVCs), or File Storage NAS (NAS) volumes.
    
    The following types of storage volumes are supported:
    
    -   On-premises storage volume
        
    -   PVC
        
    -   NAS
        
    -   Disk
        
    
    For more information, see [Use a statically provisioned disk volume](/help/en/ack/serverless-kubernetes/user-guide/use-a-statically-provisioned-disk-volume), [Use a dynamically provisioned disk volume](/help/en/ack/serverless-kubernetes/user-guide/use-a-dynamically-provisioned-disk-volume), and [Mount a statically provisioned NAS volume](/help/en/ack/serverless-kubernetes/user-guide/mount-a-statically-provisioned-nas-volume).
    
7.  In the Log section, configure the log-related parameters. For more information, see [Method 1: Create an application from an image and configure Simple Log Service to collect application logs](/help/en/ack/serverless-kubernetes/user-guide/use-log-service-to-collect-application-logs#p-ku3-ck8-5za).
    
8.  Click **Next** to configure advanced settings.
    

## Step 3: Configure advanced settings

In the **Advanced** step, configure access control, scaling configurations, labels, and annotations.

1.  In the **Access Control** section, configure how to expose backend pods.
    
    **Note**
    
    You can configure the following access control settings based on your business requirements:
    
    -   Internal applications: For applications that run inside the cluster, you can create a Service of the **ClusterIP** or **NodePort** type to enable internal communication.
        
    -   External applications: For applications that are exposed to the Internet, you can configure access control by using one of the following methods:
        
        -   Create a LoadBalancer Service. When you create a Service, set Type to **Server Load Balancer**. You can select or create a Server Load Balancer (SLB) instance for the Service and use the Service to expose your application to the Internet.
            
        -   Create an Ingress and use it to expose your application to the Internet. For more information, see [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/?spm=a2c4g.11186623.2.23.3fdd30dfnyevPx).
            
    
    You can specify how the backend pods are exposed to the Internet. In this example, a ClusterIP Service and an Ingress are created to expose an NGINX application to the Internet.
    
    -   Click **Create** to the right side of **Services**. In the Create Service dialog box, configure the following parameters.
        
        **Parameter**
        
        **Description**
        
        Name
        
        Enter a name for the Service. In this example, nginx-svc is used.
        
        Type
        
        The type of Service. This parameter determines how the Service is accessed. In this example, select **Server Load Balancer**.
        
        -   **Cluster IP**: The ClusterIP type Service. This type of Service exposes the Service by using an internal IP address of the cluster. If you select this type, the Service is accessible only within the cluster. This is the default type.
            
            **Note**
            
            The **Headless Service** check box is displayed only when you set Type to **Cluster IP**.
            
        -   **Server Load Balancer**: The LoadBalancer type Service. This type of Service exposes the Service by using an Server Load Balancer (SLB) instance. If you select this type, you can enable internal or external access to the Service. SLB instances can be used to route requests to NodePort and ClusterIP Services.
            
            -   Create SLB Instance: You can click **Modify** to change the specification of the SLB instance.
                
            -   Use Existing SLB Instance: You can select an existing SLB instance.
                
            
            **Note**
            
            You can create an SLB instance or use an existing SLB instance. You can also associate an SLB instance with multiple Services. However, you must take note of the following limits:
            
            -   If you use an existing SLB instance, the listeners of the SLB instance overwrite the listeners of the Service.
                
            -   If an SLB instance is created along with a Service, you cannot reuse this SLB instance when you create other Services. Otherwise, the SLB instance may be deleted. Only SLB instances that are manually created in the SLB console or by calling the API can be used to expose multiple Services.
                
            -   Services that share the same SLB instance must use different frontend ports. Otherwise, port conflicts may occur.
                
            -   If multiple Services share the same SLB instance, you must use the listener names and the vServer group names as unique identifiers in Kubernetes. Do not modify the names of listeners or vServer groups.
                
            -   You cannot share SLB instances across clusters.
                
            
        
        Port Mapping
        
        Specify a Service port and a container port. The container port must be the same as the one that is exposed in the backend pod. Examples:
        
        **Service Port**: 80
        
        **Container Port**: 80
        
        External Traffic Policy
        
        -   Local: Traffic is routed only to the node where the Service is deployed.
            
        -   Cluster: Traffic can be routed to pods on other nodes.
            
        
        **Note**
        
        The **External Traffic Policy** parameter is available only if you set Type to **Node Port** or **Server Load Balancer**.
        
        Annotations
        
        Add an annotation to the Service to modify the configurations of the SLB instance. For example, `service.beta.kubernetes.io/alicloud-loadbalancer-bandwidth:20` specifies that the maximum bandwidth of the Service is 20 Mbit/s. This limits the amount of traffic that flows through the Service. For more information, see [Use annotations to configure CLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948).
        
        Label
        
        Add labels to the Service to identify the Service.
        
    -   To create an Ingress, click **Create** to the right side of **Ingresses**. In the Create dialog box, set the parameters.
        
        For more information, see [Create an Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-nginx-ingress-1#section-g4f-wex-ruo).
        
        **Important**
        
        When you create an application from an image, you can create an Ingress only for one Service. In this example, the name of a virtual host is used as the test domain name. You must add a mapping in the following format to the hosts file: _Ingress external endpoint_ + _Ingress domain name_. In actual scenarios, use a domain name that has an Internet Content Provider (ICP) number.
        
        ```
        101.37.xx.xx   foo.bar.com    # The IP address of the Ingress.
        ```
        
        To obtain the IP address of the Ingress, go to the application details page and click the **Access Method** tab. The IP address displayed in the **External Endpoint** column is the IP address of the Ingress.
        
        **Parameter**
        
        **Description**
        
        **Name**
        
        Enter a name for the Ingress. In this example, **nginx-ingress** is used.
        
        **Rule**
        
        Ingress rules are used to enable access to specific Services in a cluster. For more information, see [Create an Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-nginx-ingress-1#section-g4f-wex-ruo).
        
        -   **Domain**: Enter the domain name of the Ingress. In this example, the test domain name `foo.bar.com` is used.
            
        -   **Path**: Enter the Service URL. The default path is the root path /. The default path is used in this example. Each path is associated with a backend Service. SLB forwards traffic to a backend Service only when inbound requests match the domain name and the path.
            
        -   **Services**: Select a Service and a Service port. In this example, **nginx-svc** is used.
            
        -   **EnableTLS**: Select this check box to enable TLS. For more information, see [Advanced NGINX Ingress configurations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/advanced-nginx-ingress-configurations#task-1796525).
            
        
        **Weight**
        
        Set the weight for each Service in the path. Each weight is calculated as a percentage value. Default value: 100.
        
        **Canary Release**
        
        Enable or disable the canary release feature. We recommend that you select Open Source Solution.
        
        **Ingress Class**
        
        Specify the class of the Ingress.
        
        **Annotations**
        
        Click **Add** and enter a key and a value. For more information about Ingress annotations, see [Annotations](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/).
        
        **Labels**
        
        Add labels to describe the characteristics of the Ingress.
        
    
    You can find the created Service and Ingress in the **Access Control** section. You can click **Update** or **Delete** to change the configurations.
    
2.  In the **Scaling** section, select **HPA** and **CronHPA** based on your business requirements.
    
    ACK supports the auto scaling of pods. This allows you to automatically adjust the number of pods based on the CPU and memory usage.
    
    **Note**
    
    To enable HPA, you must configure the resources required by the container. Otherwise, HPA does not take effect.
    
    **Parameter**
    
    **Description**
    
    **Metric**
    
    Select CPU Usage or Memory Usage. The selected resource type must be the same as that specified in the Required Resources field.
    
    **Condition**
    
    Specify the resource usage threshold. HPA triggers scale-out events when the threshold is exceeded.
    
    **Max. Replicas**
    
    Specify the maximum number of replicated pods to which the application can be scaled.
    
    **Min. Replicas**
    
    Specify the minimum number of replicated pods that must run.
    
3.  In the **Labels,Annotations** section, click **Add** to add labels and annotations to the pod.
    
    -   Pod Labels: Add a label to the pod. The label is used to identify the application.
        
    -   Pod Annotations: Add an annotation to the pod.
        
    
4.  Click **Create**.
    

## Step 4: Check the application

In the **Complete** step, you can view the created application.

1.  In the **Complete** step, click **View Details**. On the Deployments page, you can find the newly created application named **serverless-app-svc**.
    
    ![部署列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3950488261/p10257.png)
    
2.  In the left-side navigation pane of the details page of the cluster, choose **Network** > **Services**. On the Services page, you can find the newly created Service named **serverless-app-svc**.
    
    ![服务列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0025685471/p10258.png)
    
3.  To visit the NGINX welcome page, you can use your browser to access the external endpoint or domain name of the Service.
    
    **Important**
    
    -   When you use a browser to access the Service, make sure that the Service type is **Server Load Balancer**.
        
    -   If you use a domain name to access the Service, you must configure the hosts file. For more information, see the [Important](#note-wa7-g16-fwh) section of this topic.
        
    
    ![nginx](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9399397161/p146837.png)
