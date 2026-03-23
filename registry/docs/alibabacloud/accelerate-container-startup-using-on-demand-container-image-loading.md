Container images are compressed data stored in layers. When a container starts, the container runtime typically downloads and decompresses the image data layer by layer. In most business scenarios, the container runtime needs to read only a portion of the data from the container image. Downloading and decompressing the unneeded data consumes system resources and increases the container startup time. Alibaba Cloud Container Service for Kubernetes (ACK) supports on-demand loading of container images based on the Data Accelerator for Disaggregated Infrastructure (DADI) technology. This feature lets you avoid full image downloads and decompress image data on the fly, which significantly shortens application startup times.

The acceleration effect depends on factors such as the image size and the network conditions of the image repository. Tests show that for a 1.34 GB [NodeBB](https://github.com/NodeBB/NodeBB) image from Docker Hub, the image pull phase takes 36 seconds, and the total application startup time is 38 seconds. With an accelerated image, the image pull phase takes only 4 seconds, and the total application startup time is only 9 seconds.

**Important**

The image pull times provided in this topic are for reference only. The actual data depends on your operating environment.

## Limits

-   Only ACK managed clusters that meet the following requirements are supported.
    
    -   The cluster version is 1.26 or later. To upgrade a cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
        
    -   The node runtime is containerd, and the containerd version is 1.6.34 or later. To upgrade the runtime, see [Update a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates).
        
-   Only the full mode of [DADI](https://github.com/containerd/accelerated-container-image/blob/main/docs/IMAGE_CONVERTOR.md) is supported. The index-only mode is not supported.
    

## Step 1: Obtain an accelerated image

You can convert an existing container image to the DADI accelerated image format using an [open source tool](https://github.com/containerd/accelerated-container-image/blob/main/docs/IMAGE_CONVERTOR.md) or the [on-demand loading of container images](/help/en/acr/user-guide/load-resources-of-a-container-image-on-demand) feature provided by ACR Enterprise Edition.

### Use an open source tool

You can use [DADI](https://github.com/containerd/accelerated-container-image/blob/main/docs/IMAGE_CONVERTOR.md) to convert an existing container image to the DADI image format.

1.  Run the following command to install the snapshotter dependency.
    
    ```
    # Download the installation package for the instance architecture.
    wget https://github.com/containerd/accelerated-container-image/releases/download/v1.2.3/overlaybd-snapshotter-1.2.3-20241016090917.0c2f057.x86_64.rpm
    rpm -ivh overlaybd-snapshotter-1.2.3-20241016090917.0c2f057.x86_64.rpm 
    ```
    
2.  Run the following command to install the overlaybd dependency.
    
    ```
    # Download the installation package for the instance architecture.
    wget https://github.com/containerd/overlaybd/releases/download/v1.0.13/overlaybd-1.0.13-20240821.a117098.el8.x86_64.rpm
    rpm -ivh overlaybd-1.0.13-20240821.a117098.el8.x86_64.rpm
    ```
    
3.  Run the following command to convert the image.
    
    This example uses an ACR image repository. If you use a self-managed image repository, you must modify the image address and account credentials in the command.
    
    ```
    /opt/overlaybd/snapshotter/convertor -u user:password -r xxxxx-registry.cn-hangzhou.cr.aliyuncs.com/default/redis -i latest -o latest_obd_new
    ```
    

### **Use ACR Enterprise Edition**

ACR Enterprise Edition (Standard or Premium) lets you configure on-demand loading of container images at the repository level. This feature automatically converts original images that you push into accelerated images. The conversion time varies based on the image size, and the original image is not affected. For more information and limits, see [On-demand loading of container images](/help/en/acr/user-guide/load-resources-of-a-container-image-on-demand).

**Note**

The namespace and repository name of the accelerated image are the same as those of the original image. The tag of the accelerated image is the original image `tag` with an `_accelerated` suffix.

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com). In the top menu bar, select a region.
    
2.  In the navigation pane on the left, click **Instances**. On the **Instances** page, click the name of the **Enterprise Edition** instance that you want to manage.
    
3.  In the navigation pane on the left, select **Repository** > **Repositories**.
    
4.  Click the name of the repository that you want to manage. On the **Details** page, click **Edit** in the upper-left corner.
    
5.  In the **Modify Settings** dialog box, enable **Accelerated Image**, select **Full Mode**, and then click **Confirm**.
    
    **Note**
    
    After you configure image acceleration, images that are pushed afterward automatically trigger a conversion task. To be notified when the image conversion is complete, you can configure event notifications. For example, set the expression to `_accelerated$`. For more information, see [Event Notifications](/help/en/acr/user-guide/event-notification/).
    

## **Step 2:** Enable the container image acceleration feature for a node pool

To support DADI-accelerated images, you can enable **Container Image Acceleration** in the ACK console for new or existing node pools.

### **Enable for a new node pool**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left navigation pane, choose **Nodes** > **Node Pools**.
    
3.  On the **Node Pools** page, enable **Container Image Acceleration** in the **Advanced Options** section when [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).
    

### **Enable for an existing node pool**

When you enable or disable **Container Image Acceleration**, the change takes effect only on new nodes. To apply the change to existing nodes, you must remove the nodes from the node pool and then add them back to the node pool. For more information, see [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11) and [Add existing nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster).

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left navigation pane, choose **Nodes** > **Node Pools**.
    
3.  On the **Node Pools** page, find the target node pool and click **Edit** in the **Actions** column. In the **Advanced Options** section, enable **Container Image Acceleration**, and follow the on-screen instructions to update the ConfigMap of the node pool.
    
    On the **Node Pools** page, if the **Status** column of the node pool displays **Updating**, the node pool is being updated. If it displays **Active**, the update is complete.
    

## **Step 3: Use an accelerated image to create an application**

### 1\. Configure container image pull credentials

#### **Install the** aliyun-acr-acceleration-suite component

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  On the **Add-ons** page, find the **aliyun-acr-acceleration-suite** component in the **Others** tab and click **Install**.
    

#### **Configure pull credentials**

**Note**

If your application does not need to use a secret to pull a private image, you can skip this step and proceed to [create an application that uses an accelerated image](#zaRN6).

You can configure image pull credentials in one of the following ways.

-   Configure the password-free plugin for an ACR Enterprise Edition instance
    
    Install and configure the password-free plugin. After you correctly install the password-free plugin in an ACK cluster, the system automatically injects the access credentials for the ACR repository into the eligible workloads. You do not need to manually manage the lifecycle of the access credentials or their association with workloads. For more information, see [Pull ACR images without a secret](/help/en/cs/user-guide/exempting-the-miracular-acr-image).
    
-   Manually create a Secret for a self-managed image repository
    
    Run the following command to create a Secret of the `kubernetes.io/dockerconfigjson` type to configure the access credentials for the container image repository.
    
    ```
    kubectl create secret docker-registry <SecretName> --docker-server=<RegistryVpcDomain> --docker-username=<UserName> --docker-password=<Password>
    ```
    
    Run the following command to add the label `images.alibabacloud.com/accelerated: true` to the Secret.
    
    ```
    kubectl label secrets <SecretName>  images.alibabacloud.com/accelerated="true"
    ```
    

### **2\. Create an application that uses an accelerated image**

Use the following sample YAML content to create a Pod. The Pod is then scheduled to a node that has image acceleration enabled.

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      nodeSelector:
        alibabacloud.com/image-accelerate-enabled: "true" # Add the node selector label here.
      containers:
        - name: test
          image: xxxxx-registry.cn-hangzhou.cr.aliyuncs.com/default/redis:latest_obd_new # Enter the accelerated image address here.
          command: ["sleep", "3600"]
```

## **Related documents**

To use data disk snapshots to accelerate the initialization of workloads and nodes, see [Use data disk snapshots to accelerate the startup of large model applications](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/accelerate-ack-node-scaling-with-data-disk-snapshots).
