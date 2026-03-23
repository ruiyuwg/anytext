A deployment, also known as a stateless workload, is one of the most common workload types in Kubernetes. A deployment ensures that a specified number of pods run in the cluster in the state that you define. This topic describes how to create a stateless application in a Container Service for Kubernetes (ACK) cluster using the console and kubectl.

## Before you begin

Before you create a workload, read [Workloads](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/workloads/) to understand the basics of workloads and important considerations. This topic contains the following sections:

-   [Create a deployment](#2ac1a0fcf0drw): Provides quick-start guides about how to create a deployment using the console and kubectl.
    
-   [Configuration items](#section-w3d-1d6-aim): Provides links to the documentation about console configuration items and a sample YAML file for use with kubectl.
    

**Important**

The examples in this topic use a public image. To pull a public image, your cluster or nodes must have Internet access:

-   [Enable Internet access for the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-an-existing-ack-cluster-to-access-the-internet) (Recommended): Create an Internet NAT gateway for the VPC where the cluster resides. This provides Internet access to all resources in the cluster.
    
-   Assign a [static public IP address](/help/en/ecs/user-guide/public-ip-address) to a node: A node with a public IP address can pull public images. However, you must assign a public IP address to every node where you deploy the workload.
    

## **Create a deployment**

## Create a deployment using the console

**Important**

The following steps describe a simplified workflow for creating a workload. You can follow these steps to quickly deploy and verify the workload. After you are familiar with the basic operations, see [Configuration items](#section-w3d-1d6-aim) to customize your workload.

1.  **Configure basic information for the application**
    
    1.  Log on to the [Container Service for Kubernetes console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.On the **Clusters** page, click the name of the target cluster. In the navigation pane on the left, choose **Workloads** > **Deployments**. On the **Deployments** page, click **Create from Image**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8945029371/p911902.png)
        
    2.  On the **Basic Information** page, set the basic information for the application, and then click Next to proceed to the **Container** page.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8865700471/p919202.png)
        
2.  **Configure the container**
    
    In the **Container** section, set the **Image Name** and **Port**. The other settings are optional. Keep the default values. Then, click **Next** to go to the **Advanced** page. The image address is shown below.
    
    **Important**
    
    Before you can pull this image, you must enable Internet access for the cluster. If you kept the default selection for **Configure SNAT for VPC** when you created the cluster, the cluster already has Internet access. Otherwise, see [Enable Internet access for the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-an-existing-ack-cluster-to-access-the-internet).
    
    ```
    anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8945029371/p910135.png)
    
3.  **Complete the advanced configuration**
    
    On the **Advanced** page, click **Create** on the right side of **Services** to create a **SLB** type Service. Then, configure **Scaling**, **Scheduling**, **Labels and Annotations**, and click **Create** at the bottom of the page.
    
    **Important**
    
    This step creates a LoadBalancer service to expose the workload. The SLB instance that is used by this service incurs fees. For more information about billing, see [Pay-as-you-go](/help/en/slb/classic-load-balancer/product-overview/pay-as-you-go). If you do not plan to use this SLB instance later, release it promptly.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8945029371/p910137.png)
    
4.  **View the application**
    
    The **Complete** page displays the application task. In the **Creation Task Submitted** panel, click **View Details**. Click the **Access Method** tab. Find the newly created service (nginx-test-svc) and click the link in the **External Endpoint** column to access the service.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8945029371/p910141.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3748042471/p929093.png)
    
    You can **View**, **Edit**, and **Redeploy** the created workload in the console.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8945029371/p901968.png)
    

## Create a deployment using kubectl

**Important**

Before you create a workload, make sure that you have connected to the cluster using kubectl. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).

1.  Copy the following YAML content and save it to a file named deployment.yaml. The YAML file defines a deployment and a `LoadBalancer` service to expose it.
    
    ```
    apiVersion: apps/v1
    kind: Deployment    # Workload type
    metadata:
      name: nginx-test
      namespace: default  # Change the namespace as needed
      labels:
        app: nginx
    spec:
      replicas: 2  # Specify the number of pods
      selector:
        matchLabels:
          app: nginx
      template: # Pod configuration
        metadata:
          labels: # Pod labels
            app: nginx 
        spec:
          containers:
          - name: nginx  # Container name
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6  # Use a specific version of the Nginx image
            ports:
            - containerPort: 80  # Port exposed by the container
              protocol: TCP  # Specify the protocol as TCP or UDP. The default is TCP.
    ---
    # service
    apiVersion: v1
    kind: Service
    metadata:
      name: nginx-test-svc
      namespace: default  # Change the namespace as needed
      labels:
        app: nginx
    spec:
      selector:
        app: nginx  # Match labels to ensure the service points to the correct pods
      ports:
        - port: 80           # Port provided by the service within the cluster
          targetPort: 80     # Points to the port listened to by the application inside the container (containerPort)
          protocol: TCP      # Protocol. The default is TCP.
      type: LoadBalancer      # Service type. The default is ClusterIP for internal access.
    ```
    
2.  Run the following command to create the deployment and service:
    
    ```
    kubectl apply -f deployment.yaml
    ```
    
    Expected output:
    
    ```
    deployment.apps/nginx-test created
    service/nginx-test-svc created
    ```
    
3.  Run the following command to view the public IP address of the service:
    
    ```
    kubectl get svc
    ```
    
    Expected output:
    
    ```
    NAME            TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)        AGE
    kubernetes      ClusterIP      172.16.**.***    <none>          443/TCP        4h47m
    nginx-test-svc  LoadBalancer   172.16.**.***    106.14.**.***   80:31130/TCP   1h10m
    ```
    
4.  In a browser, enter the public IP address of Nginx (`106.14.**.***`) to access the Nginx container of the workload.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3748042471/p929093.png)
    

## Configuration items

### **Console configuration items**

#### **Basic information**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8865700471/p919196.png)

**Configuration Item**

**Description**

**Name**

The name of the workload. The names of the pods belonging to the workload are generated based on this name.

**Namespace**

The namespace to which the workload belongs.

**Replicas**

The number of pods in the workload. The default is 2.

**Type**

The type of the workload. To choose a workload type, see [Create a workload](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploying-workloads/).

**Label**

The labels of the workload.

**Annotations**

The annotations of the workload.

**Synchronize Timezone**

Specifies whether the container uses the same time zone as the node where it resides.

#### **Container**

**General**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8945029371/p905236.png)

**Configuration Item**

**Description**

**Image Name**

-   **Select images**
    
    You can click **Select images** to choose an image. You can select from the following three types of images.
    
    -   **Container Registry Enterprise Edition**: You can select an Enterprise Edition image hosted in Container Registry (ACR). You need to select the region where the image is located and the ACR instance. For more information about ACR, see [What is Container Registry?](/help/en/acr/product-overview/what-is-container-registry#concept-2058233).
        
    -   **Container Registry Personal Edition**: You can select a Personal Edition image hosted in ACR. You need to select the region where the image is located and the ACR instance.
        
    -   **Artifact Center**: Common images provided by Alibaba Cloud and the OpenAnolis community. To use Artifacts, you need to [enable Internet access for the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-an-existing-ack-cluster-to-access-the-internet). For more information about Artifacts, see [Artifacts](/help/en/acr/user-guide/artifact-center).
        
    
    To use an image from another source, you can directly enter the image address in the format `domainname/namespace/imagename:tag`. If you do not specify a `domainname`, such as by entering `nginx:1.7.9`, the image is pulled from Docker Hub.
    
-   **Select Image Pull Policy**
    
    ACK supports the following three image pull policies (imagePullPolicy):
    
    -   **IfNotPresent** (Default): If a local image exists on the worker node, it is used. If not, the image is pulled.
        
    -   **Always**: The image is always pulled from Container Registry for each deployment or scale-out, never from the local node.
        
    -   **Never**: Only the local image is used. If no local image exists, the pull fails.
        
-   **Set Image Pull Secret**
    
    When using ACR or a third-party repository, you may need to configure a secret to pull images.
    
    **Note**
    
    For ACR Enterprise instances, you can use the password-free component to pull images. For more information, see [Install and use the password-free component for unmanaged clusters](/help/en/ack/use-the-aliyun-acr-credential-helper-component-to-pull-images-without-using-secrets#task-2456294).
    

**Resource Limit**

The `**resources.**limits` for the container. For more information, see [Requests and Limits](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/).

**Required Resources**

The `**resources.**requests` for the container. For more information, see [Requests and Limits](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/).

**Container Start Parameter**

-   `stdin`: Enables standard input for the container.
    
-   `tty`: Allocates a virtual terminal for the container to send signals.
    

These two options are usually used together to bind the terminal (`tty`) to the container's standard input (`stdin`). For example, an interactive program gets standard input from the user and displays it in the terminal.

**Privileged Container**

-   Select this checkbox to set privileged=true and enable privileged mode.
    
-   Deselect this checkbox to set privileged=false and disable privileged mode.
    

Privileged mode gives a container permissions similar to the operating system of its host worker node, such as accessing hardware devices and mounting file systems.

**Init Containers**

Select this option to create an init container.

Init containers provide a mechanism to block or delay the startup of application containers. After the init containers run successfully, other containers in the pod start in parallel. For example, you can check the availability of dependent services. Init containers can include utility tools and installation scripts that are not in the application image to initialize the application container's runtime environment, such as setting kernel parameters or generating configuration files. For more information, see [Init Containers](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/?spm=a2c4g.11186623.2.13.3fdd30dfnyevPx).

**Ports**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8945029371/p905242.png)

**Configuration Item**

**Description**

**Name**

The name of the container port. It is only used to distinguish ports and has no functional effect.

**Container Port**

The port exposed by the container. The value must be between 1 and 65535. A container must expose a port to be accessible from outside the pod and to allow communication between containers within the pod.

All containers in a pod share the pod's network protocol stack, so ports cannot be duplicated when configuring multiple containers in a pod.

**Protocol**

The Layer 4 (transport-layer) protocol used by the container port. TCP and UDP are supported.

**Environments**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8945029371/p905243.png)

**Configuration Item**

**Description**

**Type**

The type of environment variable. The following types are supported:

-   **Custom**
    
    Use `env` to hard code environment variables directly in the workload.
    
-   **ConfigMaps**
    
    Use `envFrom` to get non-sensitive configuration data stored in a ConfigMap.
    
-   **Secrets**
    
    Use `envFrom` to get sensitive information stored in a ConfigMap, such as passwords and API keys.
    
-   **Value/ValueFrom**
    
    Use `value/valueFrom` to get other environment variables or predefined values.
    
-   **ResourceFieldRef**
    
    Use `resourceFieldRef` to get resource information of the node where the pod is located.
    

Configuration items and secrets support referencing all files. Take a secret as an example. If you select the **Secret** type and only select the target secret, all files are referenced by default.![环境变量](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9007846161/p130410.png)

The corresponding YAML file also references the entire secret.![yaml](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9007846161/p130413.jpg)

If you select Resource Reference, the `resourceFieldRef` parameter is mainly used to reference resource values declared by the container from the pod specification. These values are then passed to the container as environment variables. The corresponding YAML is as follows:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4977240271/p791430.png)

**Variable Key**

The name of the environment variable in the pod.

**Value/ValueFrom**

The value of the environment variable or a value obtained from another source.

**Health Check**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8945029371/p905245.png)

**Configuration Item**

**Description**

**Liveness**: Used to determine whether a container is running as normal. If a specified number of checks fail, the kubelet restarts the container. Liveness probes can detect issues that cause a container to remain in a running state but fail to respond, such as a deadlock.

**Request type: HTTP request**

Sends an HTTP request to the container to periodically check whether it is normal.

-   **Protocol**: **HTTP**/**HTTPS**.
    
-   **Path**: The path used to access the HTTP server.
    
-   **Port**: The access port or port name exposed by the container. The port number must be between 1 and 65535.
    
-   **HTTP Header**: Custom request headers in the HTTP request. HTTP allows duplicate headers. You can specify headers as key-value pairs.
    
-   **Initial Delay** (seconds): The initialDelaySeconds. The number of seconds to wait before the first probe is executed after the container starts. The default value is 3 seconds.
    
-   **Period** (seconds): The periodSeconds. The interval at which the probe is performed. The default value is 10 seconds, and the minimum value is 1 second.
    
-   **Timeout** (seconds): The timeoutSeconds for the probe. The default value is 1 second, and the minimum value is 1 second.
    
-   **Healthy Threshold**: The minimum number of consecutive successful probes required for the probe to be considered successful after a failure. The default value is 1, and the minimum value is 1. For liveness probes, this value must be 1.
    
-   **Unhealthy Threshold**: The minimum number of consecutive failed probes required for the probe to be considered failed after a success. The default value is 3, and the minimum value is 1.
    

**Request type: TCP connection**

Sends a TCP socket to the container. The kubelet attempts to open a socket on the specified port. If a connection can be established, the container is considered healthy. Otherwise, it is considered failed.

-   **Port**: The access port or port name exposed by the container. The port number must be between 1 and 65535.
    
-   **Initial Delay** (seconds): The initialDelaySeconds. The number of seconds to wait before the first probe is executed after the container starts. The default value is 15 seconds.
    
-   **Period** (seconds): The periodSeconds. The interval at which the probe is performed. The default value is 10 seconds, and the minimum value is 1 second.
    
-   **Timeout** (seconds): The timeoutSeconds for the probe. The default value is 1 second, and the minimum value is 1 second.
    
-   **Healthy Threshold**: The minimum number of consecutive successful probes required for the probe to be considered successful after a failure. The default value is 1, and the minimum value is 1. For liveness probes, this value must be 1.
    
-   **Unhealthy Threshold**: The minimum number of consecutive failed probes required for the probe to be considered failed after a success. The default value is 3, and the minimum value is 1.
    

**Request type: Command line**

Executes a probe command in the container to check its health.

-   **Command**: The probe command that is used to check the health of the container.
    
-   **Initial Delay** (seconds): The initialDelaySeconds. The number of seconds to wait before the first probe is executed after the container starts. The default value is 5 seconds.
    
-   **Period** (seconds): The periodSeconds. The interval at which the probe is performed. The default value is 10 seconds, and the minimum value is 1 second.
    
-   **Timeout** (seconds): The timeoutSeconds for the probe. The default value is 1 second, and the minimum value is 1 second.
    
-   **Healthy Threshold**: The minimum number of consecutive successful probes required for the probe to be considered successful after a failure. The default value is 1, and the minimum value is 1. For liveness probes, this value must be 1.
    
-   **Unhealthy Threshold**: The minimum number of consecutive failed probes required for the probe to be considered failed after a success. The default value is 3, and the minimum value is 1.
    

**Readiness**: Used to determine whether a container is ready to accept traffic. A pod is attached to a service backend only after its readiness probe succeeds.

**Startup**: Executed only when the container starts to check whether it has started successfully. The **Liveness Probe** and **Readiness Probe** are executed only after the startup probe succeeds.

**Note**

Startup probes are supported only in Kubernetes clusters that run version 1.18 or later.

**Lifecycle**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8945029371/p905246.png)

**Configuration Item**

**Description**

**Start**

Set pre-start commands and parameters for the container. The start command and parameters define the actions to be performed when the container starts, used to initialize the application service. This is suitable for application deployments that require specific environment variables, mount targets, or port mappings.

**Post Start**

Set commands to be executed after the container starts. Post-start commands are used to perform specific tasks after the container starts, such as initializing configurations or running scripts. This is suitable for scenarios where preparation work needs to be completed before the main process starts.

**Pre Stop**

Set pre-stop commands for the container. Pre-stop commands are used to shut down the application process inside the container, ensuring data consistency and normal service termination. This is suitable for scenarios that require a safe shutdown to avoid data loss or service anomalies.

You can configure start command, post-start, and pre-stop handlers for the container's lifecycle. For more information, see [Configure Lifecycle](https://kubernetes.io/docs/tasks/configure-pod-container/attach-handler-lifecycle-event/).

**Volume**

**Configuration Item**

**Description**

**Add Local Storage**

Mounts a local storage volume from the node to the pod. Data in a local storage volume is stored on the node and is unavailable if the node shuts down. Local storage also supports Secret, ConfigMap, and other ephemeral volume types. Storage features are complex. Before using storage volumes, read [Storage](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/csi-overview-1/) to understand the basics of storage in ACK.

**Add PVC**

Mounts a cloud storage volume to the pod for persistent storage of important data within the container. A cloud storage volume is a remote storage service outside the cluster, completely independent of worker nodes and unaffected by node changes. In ACK, cloud storage volumes are typically storage services provided by Alibaba Cloud, such as disks, NAS, or OSS. Storage features are complex. Before using storage volumes, read [Storage](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/csi-overview-1/) to understand the basics of storage in ACK.

**Log**

**Collection configuration**

-   Logstore: A corresponding Logstore is created in the Simple Log Service project associated with the cluster to store collected logs. Before using logs, read [Logging management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/log-management-2/) to understand the basics of logging in ACK.
    
-   Log Path in Container: The path of the logs to be collected within the container. If set to `Stdout`, it collects the standard output logs of the container.
    

**Custom Tag**

After setting a custom tag, the tag is collected along with the container's log output, which facilitates analysis operations such as log statistics and filtering.

#### **Advanced configuration**

**Configuration Card**

**Configuration Item**

**Description**

**Access Control**

**Services**

A service provides a fixed, unified Layer 4 (transport-layer) entry point for a group of pods. It is a required resource for exposing a workload. Services support multiple types, including **Cluster IP**, **Node Port**, and **SLB**. Before configuring a service, see [Service management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-management/) to understand the basics of services.

**Ingresses**

An Ingress provides a Layer 7 (application layer) entry point for multiple services in a cluster and forwards requests to different services based on domain name matching. Before using an Ingress, you need to install an Ingress controller. ACK provides several options for different scenarios. See [Comparison of Nginx Ingress, ALB Ingress, and MSE Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-among-nginx-ingresses-alb-ingresses-and-mse-ingresses-1) to make a selection.

**Scaling**

**HPA**

Triggers autoscaling by monitoring the performance metrics of containers. Metrics-based scaling helps you automatically adjust the total resources used by a workload when the business load fluctuates, scaling out to handle high loads and scaling in to save resources during low loads. For more information, see [Use Horizontal Pod Autoscaling (HPA)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/horizontal-pod-autoscaling).

**CronHPA**

Triggers workload scaling at scheduled times. This is suitable for scenarios with periodic changes in business load, such as the cyclical traffic peaks on social media after lunch and dinner. For more information, see [Use CronHPA for scheduled horizontal pod autoscaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cronhpa).

**Scheduling**

**Upgrade Method**

The mechanism by which a workload replaces old pods with new ones when the pod configuration changes.

-   Rolling upgrade (rollingupdate): Replaces a portion of pods at a time, proceeding to the next replacement only after the new pods are running successfully. This method ensures no service interruption, but users may access different versions of pods simultaneously.
    
-   Recreate: Replaces all pods at once. This may cause a service interruption but ensures that all pods are of the same version.
    

-   **Node Affinity**
    
-   **Pod Affinity**
    
-   **Pod Anti-affinity**
    
-   **Toleration**
    

Affinity, anti-affinity, and toleration configurations are used for scheduling to ensure pods run on specific nodes. Scheduling operations are complex and require advance planning based on your needs. For detailed operations, see [Scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/scheduling-overview/).

**Labels and Annotations**

**Pod Labels**

Adds a label to each pod belonging to this workload. Various resources in the cluster, including workloads and services, match with pods through labels. ACK adds a default label to pods in the format `app:(application name)`.

**Pod Annotations**

Adds an annotation to each pod belonging to this workload. Some features in ACK use annotations. You can edit them when using these features.

### **Sample workload YAML file**

```
apiVersion: apps/v1
kind: Deployment    # Workload type
metadata:
  name: nginx-test
  namespace: default  # Change the namespace as needed
  labels:
    app: nginx
spec:
  replicas: 2  # Specify the number of pods
  selector:
    matchLabels:
      app: nginx
  template: # Pod configuration
    metadata:
      labels: # Pod labels
        app: nginx 
      annotations: # Pod annotations
        description: "This is an application deployment"
    spec:
      containers:
      - name: nginx  # Image name
        image: nginx:1.7.9  # Use a specific version of the Nginx image
        ports:
        - name: nginx  # name
          containerPort: 80  # Port exposed by the container
          protocol: TCP  # Specify the protocol as TCP or UDP. The default is TCP.
        command: ["/bin/sh"]  # Container start command
        args: [ "-c", "echo $(SPECIAL_LEVEL_KEY) $(SPECIAL_TYPE_KEY) && exec nginx -g 'daemon off;'"] # Output variables, add command to start nginx
        stdin: true  # Enable standard input
        tty: true    # Allocate a virtual terminal
        env:
          - name: SPECIAL_LEVEL_KEY
            valueFrom:
              configMapKeyRef:
                name: special-config  # Name of the configuration item
                key: SPECIAL_LEVEL    # Key name of the configuration item
        securityContext:
          privileged: true  # true enables privileged mode, false disables it. The default is false.
        resources:
          limits:
            cpu: "500m"               # Maximum CPU usage, 500 millicores
            memory: "256Mi"           # Maximum memory usage, 256 MiB
            ephemeral-storage: "1Gi"  # Maximum ephemeral storage usage, 1 GiB
          requests:
            cpu: "200m"               # Minimum requested CPU usage, 200 millicores
            memory: "128Mi"           # Minimum requested memory usage, 128 MiB
            ephemeral-storage: "500Mi" # Minimum requested ephemeral storage usage, 500 MiB
        livenessProbe:  # Liveness probe configuration
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:  # Readiness probe configuration
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 5
          periodSeconds: 10
        volumeMounts:
        - name: tz-config
          mountPath: /etc/localtime
          readOnly: true
      volumes:
      - name: tz-config
        hostPath:
          path: /etc/localtime  # Mount the host's /etc/localtime file to the same path in the container using volumeMounts and volumes fields.
---
# service
apiVersion: v1
kind: Service
metadata:
  name: nginx-test-svc
  namespace: default  # Change the namespace as needed
  labels:
    app: nginx
spec:
  selector:
    app: nginx  # Match labels to ensure the service points to the correct pods
  ports:
    - port: 80           # Port provided by the service within the cluster
      targetPort: 80     # Points to the port listened to by the application inside the container (containerPort)
      protocol: TCP      # Protocol. The default is TCP.
  type: ClusterIP        # Service type. The default is ClusterIP for internal access.
---
# ingress
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx-ingress
  namespace: default  # Change the namespace as needed
  annotations:
    kubernetes.io/ingress.class: "nginx"  # Specify the Ingress controller type
    # If using Alibaba Cloud SLB Ingress controller, you can specify the following:
    # service.beta.kubernetes.io/alibaba-cloud-loadbalancer-id: "lb-xxxxxxxxxx"
    # service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec: "slb.spec.s1.small"
spec:
  rules:
    - host: foo.bar.com  # Replace with your domain name
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: nginx-service  # Backend service name
                port:
                  number: 80         # Backend service port
  tls:  # Optional, for enabling HTTPS
    - hosts:
        - foo.bar.com  # Replace with your domain name
      secretName: tls-secret  # TLS certificate Secret name
```

## References

-   For applications that require stable persistent storage, such as databases, you can use a StatefulSet. For more information, see [Create a stateful workload (StatefulSet)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-a-statefulset-to-create-a-stateful-application-1#task-1918426).
    
-   If you encounter issues when you create a workload, see [Workload FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-applications).
    
-   If a pod is abnormal, see [Troubleshoot pod exceptions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/pod-troubleshooting-1).
