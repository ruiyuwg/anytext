This topic describes common issues and solutions for deploying workloads in ACK clusters.

## How do I deploy a containerized application in an ACK cluster?

You can deploy application code on-premises or in the cloud. You can containerize code written in any language for deployment, delivery, and operation. The process of running containerized applications involves four main phases.

1.  Write the business code.
    
2.  Use a Dockerfile to build a container image.
    
    **Expand to view related concepts**
    
    -   Dockerfile: A text file that contains the instructions required to package code into an image. For more information, see [Build, Package, and Run Images Using a Dockerfile](/help/en/acr/use-cases/build-an-image-for-a-java-application-by-using-a-dockerfile-with-multi-stage-builds#task-2556836).
        
    -   Image: A software delivery package. Compared to traditional packages such as JAR, WAR, and RPM files, an image includes the application's dependencies (all files required for the container runtime) in addition to the code. You can use an image to quickly create a container, which is the running application.
        
    -   Container: A group of isolated processes with view isolation, resource limits, and an independent file system. ACK efficiently manages the full lifecycle of all containerized applications. For example, you can schedule specific pods to designated nodes or scale out operations when the business load increases.
        
    
3.  Upload the image to an image repository. You can use Container Registry (ACR) to store, manage, distribute, and pull images.
    
    ACR offers the Personal Edition for individual developers and the Enterprise Edition for enterprise customers. For more information, see [What is Container Registry ACR](/help/en/acr/product-overview/what-is-container-registry).
    
4.  Deploy workloads in an ACK cluster to run containerized applications and use the various application management capabilities that ACK provides. For more information, see [Workloads](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/workloads/).
    

## Why do image pulls take too long or fail?

**Symptoms**

Containers take an excessive amount of time to pull images or fail to pull them.

**Causes**

These issues may be caused by the following reasons:

-   When you pull images over the public network, the cluster may lack public network access, or the public IP bandwidth is set too low.
    
-   When you pull images from ACR, the image secret may be incorrect, or the passwordless component may be misconfigured.
    

**Solutions**

-   To pull images over the public network, both your cluster and the image repository must have public network access. For more information, see [Enable public network access for a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-an-existing-ack-cluster-to-access-the-internet). For an ACR example, see [Configure public network access control for ACR](/help/en/acr/user-guide/configure-access-over-the-internet).
    
-   For information about how to configure the passwordless component, see [Pull Images from the Same Account](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/non-secret-pulling-container-image) and [Pull Images Across Accounts](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-secret-free-components-to-pull-images-across-accounts).
    
-   For more information about how to use an image pull secret, see [How do I use imagePullSecrets?](#6bdf367348kxl).
    

## **How do I troubleshoot application issues in ACK?**

Application failures in ACK are primarily caused by issues with pods, controllers (such as Deployment, StatefulSet, or DaemonSet), and Services. You can check for the following types of issues.

### **Check pods**

For more information about how to troubleshoot pod anomalies, see [Troubleshoot pod anomalies](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/pod-troubleshooting-1).

### **Check Deployments**

-   Pod issues may arise when you create controllers such as Deployments, DaemonSets, StatefulSets, and Jobs. For more information, see [Troubleshoot pod anomalies](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/pod-troubleshooting-1).
    
-   You can locate issues by checking Deployment-related events and logs:
    
    This topic uses a Deployment as an example. The process for viewing events and logs in DaemonSets, StatefulSets, or Jobs is similar.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the navigation pane on the left, choose **Workloads** > **Deployments**.
        
    3.  On the **Deployments** page, click the name of the target Deployment. Then, click **Events** or **Logs** to identify the issue based on the exception information.
        

### **Check Services**

A Service provides load balancing for a group of pods. The following section describes how to identify common issues related to Services:

1.  Check the Service Endpoints.
    
2.  [Obtain the kubeconfig file of the cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
    
3.  Run the following command to view the Service Endpoints.
    
    In the following command, replace `<service_name>` with the name of the target Service.
    
    ```
    kubectl get endpoints <service_name>
    ```
    
    Ensure that the number of addresses in the ENDPOINTS value matches the expected number of pods for the Service. For example, if a Deployment has three replicas, the ENDPOINTS value must contain three addresses.
    

#### Missing Service Endpoints

If a Service does not have Endpoint addresses, you can query the Service selector to check whether the Service is associated with a pod. To do so, perform the following steps:

1.  Assume that the Service YAML file contains the following information: ![123..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8217791271/p670401.png)
    
2.  Replace `<app>` and `<namespace>` in the following command and verify that the command output contains the pods that are associated with the Service.
    
    ```
    kubectl get pods -l app=<app> -n <namespace>
    ```
    
    **Note**
    
    -   `<app>` is the value of the pod's `app` label.
        
    -   `<namespace>` is the namespace where the Service resides. If the Service belongs to the default namespace, you do not need to specify it.
        
    
3.  If the command output contains the associated pod but the pod does not have an Endpoint address, the Service may have an incorrect port. If the pod does not listen on the port specified in the Service, the pod is not added to the ENDPOINTS list. Therefore, you must ensure that the container port specified by the Service is accessible in the pod. To do so, perform the following steps:
    
    ```
    curl <ip>:<port>
    ```
    
    **Note**
    
    -   `<ip>` is the clusterIP specified in the YAML file in Step 1.
        
    -   `<port>` is the port value in the YAML file in Step 1.
        
    -   The specific test method depends on your environment.
        
    

#### **Network forwarding issues**

If the client can connect to the Service and the Endpoint addresses are correct, but the connection is immediately dropped, traffic may not be forwarded to the pod. In this case, perform the following checks:

-   Is the pod working correctly?
    
    You can identify pod issues. For more information, see [Troubleshoot pod anomalies](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/pod-troubleshooting-1).
    
-   Is the pod address accessible?
    
    1.  Run the following command to obtain the IP address of the pod.
        
        ```
        kubectl get pods -o wide
        ```
        
    2.  Log on to any node and run the ping command to test the IP address of the pod and confirm network connectivity.
        
-   Is the application listening on the port correctly?
    
    If your application listens on port 80, you must specify the container port as 80 in the Service. On any node, run the `curl <ip>:<Port>` command to check whether the container port in the pod is working as expected.
    

## How do I manually update Helm?

The Helm v2 Tiller server-side component has known security issues that allow attackers to use Tiller to install unauthorized applications in clusters. We recommend that you upgrade to Helm v3. For more information, see [Upgrading from Helm v2 to Helm v3](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-helm-v2-to-helm-v3).

## How do I pull images from a Container Registry Enterprise Edition instance that is deployed in a region inside the Chinese mainland to an ACK cluster that is deployed in a region outside the Chinese mainland?

In this scenario, you must purchase a Container Registry Enterprise Edition Standard or Premium instance in a region in the Chinese mainland and a Container Registry Enterprise Edition Basic instance in a region outside the Chinese mainland.

After you complete the purchase, you can use a sync instance to synchronize images from the region in the Chinese mainland to the region outside the Chinese mainland. For more information, see [Same-account sync instance](/help/en/acr/user-guide/replicate-images-between-instances-in-the-same-account). Then, obtain the registry address from the Container Registry Enterprise Edition instance in the region outside the Chinese mainland and use this address to create an application in the ACK cluster.

**Note**

ACR Personal Edition provides slower synchronization. For self-managed repositories, you must purchase GA to accelerate image pulls. Both self-managed repositories and GA are more expensive. Therefore, we recommend that you use Container Registry Enterprise Edition. For more information about billing, see [Billing Information](/help/en/acr/product-overview/billing-description).

## How do I perform rolling updates for applications without service interruptions?

When an old application is deleted and a new one is created, temporary `5XX` access errors may occur. This is because a delay of a few seconds occurs when pod changes are synchronized to the CLB instance. You can resolve this issue and achieve zero-downtime rolling updates for Kubernetes by configuring a graceful shutdown. For more information, see [How to implement zero-downtime rolling updates for K8s](https://developer.aliyun.com/article/767535).

## **How to obtain container images?**

For information about the preparations and precautions for pulling a container image for a workload, see [Pull image](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-images/).

## **How do I restart a container?**

You cannot directly restart individual containers. However, you can achieve the same effect using the following methods:

1.  Run the following command to view the status of the containers and identify the container that you want to restart.
    
    ```
    kubectl get pods
    ```
    
2.  Delete the pod: Deleting a pod triggers controllers, such as Deployment or DaemonSet, to create a new pod. This effectively restarts the container. To delete a single pod, run the following command:
    
    ```
    kubectl delete pod <pod-name>
    ```
    
3.  After you delete the pod, Kubernetes automatically creates a new pod to replace it based on the corresponding controller.
    
    **Note**
    
    In a production environment, we recommend that you do not manually manipulate pods. Instead, you can manage and update containers using objects such as ReplicaSets and Deployments to ensure cluster state consistency.
    
4.  Run the following command to verify the status of the container. Make sure that the container is in the Running state after it is restarted.
    
    ```
    kubectl get pods
    ```
    

## **How do I change the namespace of a Deployment?**

If you want to move a Service from one namespace to another, you must modify its assigned namespace. When you change the namespace, you must also manually modify the namespaces of dependent resources, such as persistent volume claims (PVCs), ConfigMaps, and secrets, to ensure that the Service can function as expected.

1.  Run the `kubectl get` command to export the resource configuration in the YAML format.
    
    ```
    kubectl get deploy <deployment-name> -n <old-namespace> -o yaml > deployment.yaml
    ```
    
2.  Edit the deployment.yaml file by replacing the value of the `namespace` parameter with the new namespace. Then, save the changes and exit the file.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      annotations:
      generation: 1
      labels:
        app: nginx
      name: nginx-deployment
      namespace: new-namespace # Specify the new namespace.
      ... ...
    ```
    
3.  Run the `kubectl apply` command to update the Service to the new namespace.
    
    ```
    kubectl apply -f deployment.yaml 
    ```
    
4.  Run the `kubectl get` command to list services in the new namespace.
    
    ```
    kubectl get deploy -n new-namespace
    ```
    

## **How do I expose pod information to running containers?**

ACK is consistent with native Kubernetes and follows community specifications. You can expose pod information to containers in the following two ways:

-   [Environment variables](https://kubernetes.io/docs/tasks/inject-data-application/environment-variable-expose-pod-information/): You can pass pod information to containers by setting environment variables.
    
-   [Files](https://kubernetes.io/docs/tasks/inject-data-application/downward-api-volume-expose-pod-information/): You can make pod information available to a container as files by mounting the files.
    

## **How to use imagePullSecrets?**

ACR Personal Edition instances created on or after September 9, 2024 do not support aliyun-acr-credential-helper. When you use a newly created ACR Personal Edition instance, we recommend that you store your username and logon password in a Secret and reference the Secret in the `imagePullSecrets` field.

**Important**

-   The passwordless component does not support manually specifying the `imagePullSecrets` field.
    
-   The Secret must be in the same namespace as the workload.
    

1.  Run the following command and replace the parameters as prompted to create a Secret that contains a username and password.
    
    ```
    kubectl create secret docker-registry image-secret \
      --docker-server=<ACR-registry> \
      --docker-username=<username> \
      --docker-password=<password> \
      --docker-email=<email@example.com>
    ```
    
    -   `docker-server`: Enter the ACR instance endpoint, which must match the network type of the Registry Address (internal or public network address).
        
    -   `docker-username`: the username of the ACR access credential.
        
    -   `docker-password`: the password of the ACR access credential.
        
    -   `docker-email`: Optional.
        
2.  After you create a Secret, you can configure the `imagePullSecrets` field in a ServiceAccount or workload to use the username and password.
    
    ## Use a Service Account
    
    Add the `imagePullSecrets` field to the ServiceAccount. For example, you can use the default ServiceAccount named `default` in the `default` namespace:
    
    ```
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: default
      namespace: default
    imagePullSecrets:
    - name: image-secret # Enter the ACR Secret
    ```
    
    If a workload uses this ServiceAccount, the workload can pull images.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx-test
      namespace: default
      labels:
        app: nginx
    spec:
      serviceAccountName: default # If using the default Service Account for the namespace, you do not need to specify it.
      replicas: 2
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: <acrID>.cr.aliyuncs.com/<repo>/nginx:latest  # Replace with the ACR instance link
    ```
    
    ## Use Directly in a Workload
    
    Specify the `imagePullSecrets` field in the workload to use the key.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx-test
      namespace: default
      labels:
        app: nginx
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
        spec:
          imagePullSecrets:
          - name: image-secret  # Use the Secret created in the previous step
          containers:
          - name: nginx
            image: <acrID>.cr.aliyuncs.com/<repo>/nginx:latest  # Replace with the Registry Address of the ACR repository
    ```
    

## Why do pulls still fail after configuring the passwordless component?

A possible reason is that the passwordless component is incorrectly configured. For example:

-   The instance information in the passwordless component does not match the ACR instance.
    
-   The image address that is used to pull the image does not match the domain name in the instance information of the passwordless component.
    

Follow the steps in [Pull Images Within the Same Account](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/non-secret-pulling-container-image) to troubleshoot the issue.

If the image pull still fails after the component is correctly configured, the `imagePullSecrets` field that you manually specified in the workload YAML file may conflict with the passwordless component. To resolve this issue, manually delete the `imagePullSecrets` field, and then delete and recreate the pod.

## Why do containers fail to start on new nodes after enabling node pool image acceleration?

After you enable **Container Image Acceleration** for a node pool, containers fail to start and the following error message is returned:

```
failed to create containerd container: failed to attach and mount for snapshot 46: failed to enable target for /sys/kernel/config/target/core/user_99999/dev_46, failed:failed to open remote file as tar file xxxx
```

This issue occurs because after you enable **Container Image Acceleration**, you must install the **aliyun-acr-acceleration-suite** component and configure pull credentials to pull private images. For more information, see [Configure Container Image Pull Credentials](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/accelerate-container-startup-using-on-demand-container-image-loading#MzixN).

**Important**

If the issue persists after you install the component, we recommend that you first disable [container image acceleration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/accelerate-container-startup-using-on-demand-container-image-loading#01205e9217f5y) to restore your services and then try to configure it again.
