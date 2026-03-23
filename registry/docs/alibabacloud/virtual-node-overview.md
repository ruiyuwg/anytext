When you need to create many pods quickly, the scaling speed of ECS nodes may be insufficient. Reserving extra ECS nodes also leads to resource waste. Virtual nodes solve this by allowing you to schedule pods to run as Elastic Container Instance (ECI) instances without reserving or maintaining a fixed resource pool. This provides elasticity and reduces resource costs.

## **Why use virtual nodes**

### **What are virtual nodes**

In ACK clusters, nodes are the basic units that provide computing and storage resources for running workloads. Most ACK clusters have at least one ECS node pool. When a pod is created, the kubelet schedules it to an ECS node in the node pool. This scheduling mode is ideal for applications with stable traffic. However, this mode struggles with traffic spikes because creating and starting ECS instances is time-consuming. Virtual nodes allow you to schedule pods directly on [Alibaba Cloud Elastic Container Instance (ECI)](https://www.alibabacloud.com/zh/products/elastic-container-instance), which reduces the operational burden of node management and lowers costs by avoiding idle node resources.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9424652771/CAEQVBiBgMDR7Z_U5RkiIDJjZTA2MzE5ZjQ3OTRiZjhhYTgwZWQ3YjFiNjc3NmI24075777_20231113142006.912.svg)

**Important**

Compared with ECS nodes, virtual nodes do not support custom labels, annotations, or taints.

A virtual node uses the [ack-virtual-node component](/help/en/ack/product-overview/ack-virtual-node) to encapsulate computing resources, which lets you deploy workloads without managing the underlying infrastructure. The component automatically schedules application pods to run on ECI. ECI is a serverless container service where each ECI instance is equivalent to a pod. When you use ECI to deploy containerized applications, you provide a container image and pay only for the resources that your containers consume.

### **Benefits**

Virtual nodes provide the following benefits.

-   **Fully managed**: You do not need to create underlying resource pools, which reduces the O&M workload. Virtual nodes are managed resources and do not require routine O&M operations for Kubernetes nodes, such as system upgrades or security patch installations.
    
-   **Large capacity**: You can scale out to a maximum of 50,000 pods without capacity planning.
    
    **Important**
    
    If many pods are associated with services, we recommend that you keep the number of pods within 20,000.
    
-   **Elasticity in seconds**: You can create thousands of pods in a short time. This prevents pod creation latency from affecting services during traffic spikes.
    
-   **Secure isolation**: Pods are created based on ECI. Each container instance is strongly isolated from others using lightweight sandboxed container technology.
    
-   **Cost-effective**: Applications are created on demand and billed on a pay-as-you-go basis. You are not charged for idle resources. The serverless architecture also reduces O&M costs.
    

### **Scenarios**

Virtual nodes are suitable for the following scenarios.

-   **Online services**
    
    For online services that experience frequent traffic spikes, such as online education and e-commerce, virtual nodes support scaling in seconds. This prevents system failures caused by slow scale-outs during traffic surges and avoids resource waste from idle resources.
    
-   **Data processing**
    
    For processing many concurrent online data tasks, such as Spark and Presto tasks, the concurrency is no longer limited by the cost of underlying resources. You can quickly scale out to thousands of pods to meet the requirements of big data processing.
    
-   **AI tasks**
    
    For AI tasks such as model training and model inference, which do not run continuously but require significant computing resources, you do not need to reserve resources. Instead, use resources on demand and pay by the second to reduce AI inference costs. Additionally, second-level elasticity lets you quickly respond to burst workloads.
    
-   **CI/CD staging environments**
    
    For batch testing tasks in the CI/CD process, such as CI packaging, stress testing, and simulation testing, you can use virtual nodes to create and release container instances at any time. You can use resources on demand and are charged on a per-second basis. This approach provides large-scale resources at a low cost.
    
-   **Jobs and CronJobs**
    
    Jobs and CronJobs do not need to run continuously. After a job is complete, it stops, and the corresponding pod is deleted. With virtual nodes, billing stops and computing resources are released automatically when the job is complete. This avoids resource waste from idle resources.
    

## **Limits**

Before you use virtual nodes, note the following limits.

-   DaemonSets are not supported. You can replace DaemonSets with sidecar containers.
    
-   You cannot specify `HostPath` or `HostNetwork` in pod `manifests`.
    
-   Privileged containers are not supported. You can use a security context to add capabilities to a pod.
    
    **Note**
    
    The privileged container feature is in internal preview. To use this feature, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    
-   NodePort Services and the Session Affinity feature are not supported.
    
-   The China South Finance and Alibaba Gov Cloud regions are not supported.
    

## **Billing**

Virtual nodes are free of charge. ECI pods that run on virtual nodes are billed based on the billing rules of ECI. For more information, see [ECI billing overview](/help/en/eci/product-overview/billing-overview).

**Note**

ECI pods use the pay-as-you-go billing method. Billing starts when an ECI pod enters the Pending state and stops when the pod enters the Succeeded or Failed state. For more information, see [ECI pod lifecycle](/help/en/eci/user-guide/lifecycle-of-an-elastic-container-instance-2).

## **How to use virtual nodes**

### **Quick start**

For information about how to use virtual nodes, see [Schedule pods to run on ECI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-the-virtual-node-controller-and-use-it-to-create-elastic-container-instance-based-pods).

### **Deploy the ack-virtual-node component**

After you deploy the ack-virtual-node component in an ACK cluster, you can enable the virtual node feature.

## ACK managed clusters

In an ACK managed cluster, you must deploy the ack-virtual-node component from the **Component Management** page. The component is managed by default and does not consume worker node resources.

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Add-ons**.
    
3.  On the **Add-ons** page, click the **Core Components** tab, find **ACK Virtual Node**, and then click **Install**. Follow the on-screen instructions to complete the installation.
    
    During the installation, the default vSwitch and security group of the cluster are used as the initial ECI configuration parameters. To modify the parameters, you can update them by [configuring an eci-profile](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-an-eci-profile).
    

## ACK dedicated clusters

In an ACK dedicated cluster, you must deploy the ack-virtual-node component from the **Marketplace** page. After the installation is complete, a deployment named `ack-virtual-node-controller` is created in the `kube-system` namespace. The deployment runs on a worker node.

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Marketplace** > **Marketplace**.
    
2.  On the **Marketplace** page, click the **App Catalog** tab. Search for and select **ack-virtual-node**. On the **ack-virtual-node** page, click **Deploy**.
    
3.  In the **Create** panel, you can select a cluster and a namespace, and then click **Next**.
    
    The **Namespace** is set to kube-system, and the **Release Name** is set to ack-virtual-node.
    
4.  On the **Parameters** page, select the latest **Chart Version**. In the **Parameters** section, configure the virtual node parameters and click **OK**.
    
    **Parameter**
    
    **Optional Properties**
    
    **Description**
    
    **How to obtain**
    
    ALIYUN\_CLUSTERID
    
    Required
    
    The cluster ID.
    
    On the **Basic Information** tab of the **Cluster Information** page, obtain the cluster ID.
    
    ALIYUN\_RESOURCEGROUP\_ID
    
    Optional
    
    The resource group ID.
    
    If you do not configure this parameter, the default resource group is used. To configure this parameter, log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/) to obtain the ID of the destination resource group.
    
    ECI\_REGION
    
    Required
    
    The region ID.
    
    On the **Basic Information** tab of the **Cluster Information** page, obtain the **Region** information.
    
    **Note**
    
    For more information about the relationship between region names and region IDs, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-nwo-3ho-q3v).
    
    ECI\_VPC
    
    Optional
    
    The VPC ID.
    
    On the **Basic Information** tab of the **Cluster Information** page, obtain the cluster VPC ID.
    
    ECI\_VSWITCH
    
    Required
    
    The vSwitch ID.
    
    A list of vSwitch IDs that are used to assign IP addresses to application pods. Separate multiple vSwitch IDs with commas (,), for example, `vsw-xxx1, vsw-xxx2`. We recommend that you use the same list of vSwitches as the node pool.
    
    On the **Node Pools** page, click a node pool. On the **Details** tab, obtain the node vSwitch ID in the **Node Configurations** section.
    
    **Note**
    
    Make sure that the vSwitches are in the zones supported by ECI.
    
    ECI\_SECURITY\_GROUP
    
    Required
    
    The security group ID.
    
    On the **Basic Information** tab of the **Cluster Information** page, obtain the security group ID.
    
    ECI\_ACCESS\_KEY
    
    Required
    
    Your AccessKey ID.
    
    For more information, see [Obtain an AccessKey pair](/help/en/doc-detail/159975.html).
    
    Grant the **AliyunECIFullAccess** policy to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/eci/user-guide/grant-permissions-to-ram-users#topic524).
    
    ECI\_SECRET\_KEY
    
    Required
    
    Your AccessKey secret.
    
    For more information, see [Obtain an AccessKey pair](/help/en/doc-detail/159975.html).
    
    Grant the **AliyunECIFullAccess** policy to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/eci/user-guide/grant-permissions-to-ram-users#topic524).
    
    KUBERNETES\_APISERVER\_HOST
    
    Required
    
    The IP address of the API server.
    
    The IP address and port of the internal endpoint of the API server. You can query the information on the **Basic Information** tab of the **Cluster Information** page.
    
    KUBERNETES\_APISERVER\_PORT
    
    Required
    
    The port of the API server.
    
5.  Check the deployment status of the ack-virtual-node component.
    
    ```
    kubectl -n kube-system get deploy ack-virtual-node-controller
    ```
    
    Expected output:
    
    ```
    NAME                          READY   UP-TO-DATE   AVAILABLE   AGE
    ack-virtual-node-controller   1/1     1            1           2m31s
    ```
    

### **Schedule pods to run on ECI**

ACK provides multiple scheduling solutions to meet various scheduling requirements in hybrid deployment scenarios of ECS and ECI. For more information, see [Schedule pods to a virtual node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-and-introduction-of-virtual-node-scheduling-scheme-ack/).

**Note**

The default CPU architecture of ECI pods is x86 and the default operating system is Linux. To create an ECI pod that uses the Arm architecture or the Windows operating system, see [Schedule pods to an Arm-based virtual node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/schedule-workloads-to-arm-based-virtual-nodes) or [(Invitational Preview) Schedule pods to a Windows virtual node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-windows-based-pod).

### **Flexibly configure ECI pods**

You can use pod annotations to configure ECI features, such as specifying the specifications of an ECI pod, enabling an image cache to accelerate pod creation, assigning an IPv6 address to an ECI pod, and increasing the size of temporary storage space. For more information, see [ECI pod annotations](/help/en/eci/user-guide/pod-annotations-1#topic-1860148).

**Note**

You can use the ECI Effect feature of an [eci-profile](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-an-eci-profile) to dynamically append required annotations to ECI pods that meet specific conditions. This allows for the batch orchestration of pods.

## **Manage virtual nodes**

### **Upgrade the ack-virtual-node component**

You may need to upgrade the ack-virtual-node component to use some advanced features of virtual nodes.

**Important**

The upgrade takes about 1 minute. During the upgrade, you cannot create pods, but existing pods are not affected.

## ACK managed clusters

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Add-ons**.
    
3.  On the **Add-ons** page, click the **Core Components** tab, find **ACK Virtual Node**, and then click **Upgrade**. Follow the on-screen instructions to complete the upgrade.
    

## ACK dedicated clusters

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Applications** > **Helm**.
    
3.  In the Helm list, find **ack-virtual-node** and click **Update** in the **Actions** column. In the **Version** section, select the latest Chart version.
    
4.  In the parameter configuration section, update the parameters and click **OK**.
    
    You can also specify `virtualNode.image.tag` to upgrade the image to a specific version.
    

### **Modify the virtual node configuration**

The [eci-profile](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-an-eci-profile) contains configurations such as the VPC and vSwitches to which ACS and ECI pods belong, and whether to enable Arm virtual nodes. You can update the fixed configuration items in the `data` field as needed.

### **Delete virtual nodes**

When you uninstall the ack-virtual-node component, the virtual node is automatically deleted, and the ACS and ECI pods in the cluster are automatically cleared.

1.  Check the ACS and ECI pods in the cluster to ensure that your services are not affected after the pods are deleted.
    
2.  Uninstall the ack-virtual-node component.
    
    -   ACK managed clusters: On the **Add-ons** page, uninstall the ack-virtual-node component.
        
    -   ACK dedicated clusters: On the **Helm** page, delete the ack-virtual-node component.
        

## **FAQ**

-   [How do I use virtual nodes to achieve high availability for services across zones?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/virtual-node-faq#c0beff1d8feny)
    
-   [Do virtual nodes support GPU resources?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/virtual-node-faq#111529edb2y4b)
    
-   [How do I prioritize scheduling pods to ECS nodes, use virtual nodes for ECI pods when ECS resources are insufficient, and scale in reverse order?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/virtual-node-faq#202dce6bc27rp)
    
-   [What do I do if an HTTPS authentication error occurs when I use a virtual node to pull an image from a self-managed image repository?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/virtual-node-faq#333568ffcabdw)
    
-   [When I create an ECI pod by specifying vCPUs and memory, is the pod billed based on the specified specifications or the actual resource usage?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/virtual-node-faq#2560bf2633hti)
