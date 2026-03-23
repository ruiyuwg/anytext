You can perform a hot migration to migrate an ACK dedicated cluster to an ACK managed Pro cluster. Hot migration does not interrupt services and does not affect the normal operation of the cluster.

The creation of ACK dedicated clusters is stopped in Container Service for Kubernetes since August 21, 2024. We recommend that you use ACK managed Pro clusters in the production environment for higher reliability, security, and scheduling efficiency. This allows you to take advantage of features and capabilities of the ACK managed Pro clusters, such as managed control planes and high availability.

## Prerequisites

-   An ACK dedicated cluster (to be migrated) that runs Kubernetes 1.18 or later is created. For more information about how to upgrade a cluster, see [Manually upgrade ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#task-1664343).
    
    > The cluster's Kubernetes version remains unchanged after migration. For migration with an upgrade, migrate the cluster before you [upgrade it](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
-   Before migration, you must configure the time zone on the cluster's **Basic Information** page. This ensures that the control plane time zone of the ACK managed Pro cluster remains consistent after migration, thereby avoiding exceptions such as CronJob execution time changes caused by time zone discrepancies.
    
-   An Object Storage Service (OSS) bucket is created in the region of the ACK cluster to be migrated and hotlink protection is disabled for the bucket because hotlink protection can cause migration failures. For more information, see [Create buckets](/help/en/oss/manage-buckets-create-buckets#task-bcz-sbz-5db) and [Hotlink protection](/help/en/oss/user-guide/hotlink-protection#concept-s5b-gjd-5db).
    

## Usage notes

**Item**

**Description**

Billing

-   After you migrate a cluster, the billing of the cluster changes. You are no longer charged for the removed master nodes. You are charged for [cluster management fees](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee). The billing of other cloud resources remains unchanged.
    
-   You are not charged for creating a bucket. You are charged only for the storage of objects in the bucket and the traffic generated when the objects are accessed. For more information, see [Billing overview](/help/en/oss/billing-overview#concept-n4t-mwg-tdb).
    

Internet access

-   For the cluster that exposes the API server by using elastic IP addresses (EIPs) for public access, the access address of the cluster does not change after the cluster is migrated.
    
-   Some ACK dedicated clusters access the API server by using an Internet-facing Server Load Balancer (SLB) instance. When you migrate an ACK dedicated cluster to an ACK managed Pro cluster, you must manually switch to EIP mode, which means binding an EIP to the internal-facing Classic Load Balancer (CLB) instance of the API server. For more information about the detailed operations, see [Control public access to the API server of a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/control-public-access-to-the-api-server-of-a-cluster#task-2494620).
    

Custom pod configurations

If your ACK dedicated cluster has custom pod configurations enabled, you cannot migrate the cluster to an ACK managed Pro cluster. You must stop terway-controlplane before the migration starts and then enable terway-controlplane after the migration is complete. For more information, see [Stop terway-controlplane before cluster migration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-static-ip-address-a-separate-vswitch-and-a-separate-security-group-for-each-pod#section-ez8-68h-9dp). For more information about how to customize pod configurations, see [Configure a static IP address, a separate vSwitch, and a separate security group for each pod](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-static-ip-address-a-separate-vswitch-and-a-separate-security-group-for-each-pod#task-2236831).

Master nodes

Cloud Assistant Agent is not installed on some old master nodes. You must manually install it. For more information, see [Install the Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent#concept-wtg-32x-ydb). After the cluster migration is complete, the status of the master node changes to Not Ready.

Release of ECS instances

When you remove master nodes, ACK releases all pay-as-you-go ECS instances and their data disks. You must manually release subscription instances. You must manually release subscription ECS instances. For more information, see [Release or unsubscribe from an ApsaraDB RDS for MySQL instance](/help/en/ecs/user-guide/release-an-instance).

## Step 1: Perform a hot migration to migrate an ACK dedicated cluster to an ACK managed Pro cluster

Before you start, make sure that all prerequisites are met and you have read and understand the considerations. After you migrate to an ACK managed Pro cluster, you cannot roll back to the ACK dedicated cluster.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, choose **More****\>****Migrate to Pro** in the **Actions** column of the ACK cluster to be migrated.
    
3.  In the **Migrate to Pro** dialog box, complete the precheck and Resource Access Management (RAM) authorization, select the OSS bucket that you created for hot migration, and then click **OK**.
    
    **View how to complete the precheck**
    
    Click **precheck** to log on to the Container Intelligence Service console. Click Start on the Migration Check page. Then, confirm the check items in the panel that appears, select **I know and agree**, and then click **Start**.
    
    If the cluster fails to pass the precheck, follow the instructions on the page to fix the issues.
    
    ![前置检查.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3214341461/p363623.png)
    
    **View how to complete the RAM authorization**
    
    1.  Click **RAM console** and complete the RAM authorization. Obtain the name of the OSS bucket, which will be used in the following steps. ![migrate](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0880649361/p269274.png)
        
    2.  Click a policy whose name starts with **k8sMasterRolePolicy**. On the **Policy Document** tab of the policy details page, click **Modify Policy Document**. Then, add the following content to the **Statement** field in the **JSON** editor and click **OK**.
        
        Replace `<YOUR_BUCKET_NAME>` with the name of the OSS bucket that is specified in the **Migrate to Pro** dialog box. You need to delete the angle brackets (`<>`).
        
        ```
        ,
                {
                    "Action": [
                        "oss:PutObject",
                        "oss:GetObject"
                    ],
                    "Effect": "Allow",
                    "Resource": [
                        "acs:oss:*:*:<YOUR_BUCKET_NAME>/*"  
                    ]
                }
        ```
        
    
    After the migration is complete, the **Migrate to Pro** dialog box displays a message. You can check the type of the ACK cluster and the status of the master nodes.
    
    -   Cluster type: Go back to the **Clusters** page. The cluster type in the **Type** column changes from **ACK Dedicated Cluster** to **ACK Managed**. **Professional** displayed in the **Cluster Specification** column.
        
    -   Master node status: On the **Clusters** page, click **Details** in the **Actions** column of the cluster. In the left-side navigation pane, choose **Nodes** **>** **Nodes**. If the **Role/Status** column of the master nodes displays **Unknown**, the master nodes are disconnected from the cluster. You can refer to [Step 2: Remove master nodes from the ACK dedicated cluster after the hot migration is complete](#section-k01-5ah-aql) to remove master nodes after the hot migration is complete.
        

## Step 2: Remove master nodes from the ACK dedicated cluster after the hot migration is complete

After the hot migration is complete, you can use the console or run kubectl commands to remove master nodes from the ACK dedicated cluster.

## Use the ACK console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left-side navigation pane, choose **Nodes** > **Nodes**.
    
3.  On the **Nodes** page, choose **More** **\>** **Remove** in the **Actions** column of a master node or select one or more master nodes and click **Batch Remove** at the bottom. In the dialog box that appears, configure parameters and click **OK**.
    

## Use kubectl

Before you run the command, make sure that you have connected to the cluster by using kubectl. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-2076136).

1.  Query and record the names of the master nodes that you want to remove.
    
    ```
    kubectl get node | grep control-plane
    ```
    
2.  Remove a master node. Replace `<MASTER_NAME>` with the name of the master node.
    
    ```
    kubectl delete node <MASTER_NAME>
    ```
    
    To remove multiple master nodes at a time, replace `<MASTER_NAME>` with the names of the master nodes. For example, to remove master nodes `cn-hangzhou.192.xx.xx.65` and `cn-hangzhou.192.xx.xx.66` at the same time, run the following command:
    
    ```
    kubectl delete node cn-hangzhou.192.xx.xx.65 cn-hangzhou.192.xx.xx.66
    ```
    

## **(Optional) Step 3:** Handle components

Check whether the Application Load Balancer (ALB) Ingress controller or ack-virtual-node is installed in the ACK dedicated cluster. If yes, you must reinstall or migrate the component.

1.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Operations** > **Add-ons**.
    
2.  On the **Add-ons** page, check whether the ALB Ingress controller or ack-virtual-node is installed in the ACK dedicated cluster.
    
    ### **Reinstall the ALB Ingress controller**
    
    If your ACK dedicated cluster has the [ALB Ingress controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-and-use-alb-ingress-to-expose-services-to-the-public) installed, you must reinstall it after the migration is complete. For more information about how to install the ALB Ingress controller, see [Manage components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).
    
    After the installation is complete, run the following command to delete the original application and make sure that the application is connected to the cluster by using kubectl. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
    
    ```
    kubectl delete deployment alb-ingress-controller -n kube-system
    ```
    
    ### **Reinstall the ACK Virtual Node component**
    
    If your ACK dedicated cluster has the [ACK Virtual Node](/help/en/ack/product-overview/ack-virtual-node) component installed, to migrate without business interruptions, you must manually reinstall the ACK Virtual Node component in the ACK managed Pro cluster after the migration is complete.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the one you want to manage and click its name. In the left-side navigation pane, choose **Operations** > **Add-ons**.
        
    3.  On the **Add-ons** page, find and install the ACK Virtual Node component.
        
    4.  After the ACK Virtual Node component is installed, run the following commands in sequence to delete the original components and configurations.
        
        ```
        # Delete the original vk-webhook Service, ack-virtual-node-controller Deployment, ClusterRoleBindings related to virtual nodes, and virtual node ServiceAccounts in sequence. 
        kubectl -n kube-system delete service vk-webhook
        kubectl -n kube-system delete deployment ack-virtual-node-controller
        kubectl -n kube-system delete clusterrolebinding virtual-kubelet
        kubectl -n kube-system delete serviceaccount virtual-kubelet
        ```
        
    5.  After the migration is complete, create pods to check whether the cluster runs as normal.
        
    

## What to do next

-   After you migrate to an ACK managed Pro cluster, you must manually limit the permissions of the worker RAM role assumed by nodes in the cluster in order to enhance node security. For more information, see [Manually limit the permissions of the worker RAM role of an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manually-converges-the-worker-ram-role-permissions-of-the-ack-managed-version-cluster).
    
-   If your ACK dedicated cluster has cGPU Basic Edition installed, after you migrate to an ACK managed Pro cluster, you must upgrade cGPU Basic Edition to cGPU Professional Edition. For more information, see [Upgrade cGPU Basic Edition to cGPU Professional Edition in an ACK Pro cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-cgpu-basic-edition-to-professional-edition-in-an-ack-pro-cluster#task-2107208).
    

## FAQ

### **Are the services in the** ACK managed Basic cluster **affected during the migration?**

During the migration, the control plane components of the ACK dedicated cluster are dormant. The running services are not affected.

### **How long does the migration process take?**

The cluster migration includes three stages: the control plane enters sleep mode, etcd data is backed up, and managed components are started. The overall process is expected to take 10 to 15 minutes. During this time, the API server is expected to be unavailable for 5 to 10 minutes.

### **Does the access link change after the cluster migration?**

After the migration, the IP address of the SLB instance of the API server does not change. When you use the kubeconfig file to access the cluster, the IP address of the cluster does not change.

### How do I handle failures in environment variable configurations for ACK Virtual Node during the precheck?

If the [ACK Virtual Node](/help/en/ack/product-overview/ack-virtual-node) component is installed in the ACK dedicated cluster, you must manually configure an internal endpoint for kube-apiserver before the migration starts. To do this, perform the following steps:

1.  On the **Cluster Information** page, obtain the internal endpoint of kube-apiserver.
    
2.  On the **Deployments** page, select the **kube-system** namespace, find the Deployment named ack-virtual-node-controller, and then add the following environment variables to the `spec.template.spec.containers[0].env` field of the Deployment:
    
    -   `KUBERNETES_APISERVER_HOST`: The private IP address of kube-apiserver.
        
    -   `KUBERNETES_APISERVER_PORT`: the private port of kube-apiserver, which is set to 6443 in most cases.
