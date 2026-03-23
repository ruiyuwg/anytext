Alibaba Cloud provides Workbench and CloudShell. They are browser-based command-line tools that you can use to connect to and manage cluster resources without requiring software installation. After you log on to the Alibaba Cloud Management Console, you can use Workbench or CloudShell in any browser. When a tool starts, Container Service for Kubernetes (ACK) automatically loads the cluster's KubeConfig file for the current user.

-   [Workbench](/help/en/ecs/user-guide/workbench-overview/): A remote connection tool for Elastic Compute Service (ECS) instances. No additional software is required. You can use Workbench to connect to a cluster over the public network or an internal network.
    
-   [CloudShell](/help/en/cloud-shell/what-is-the-cloud-command-line): A shell tool provided by Alibaba Cloud. It creates a Linux virtual machine (VM) that is pre-installed with various programming languages and command-line tools. You can use CloudShell to connect to a cluster only over the public network.
    
    To connect over the public network, you must associate an elastic IP address (EIP) with the cluster's API Server to enable public network access. For more information, see [Control public access to the API server of an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/control-public-access-to-the-api-server-of-a-cluster#task-2494620).
    
    > The VM created by CloudShell is valid for one hour and is immediately terminated upon expiration. If you do not perform any interactive operations for 30 minutes or you close all session windows, the VM is terminated after 15 minutes. When you start CloudShell again, the system creates a new VM.
    

## Preparations

-   Before a Resource Access Management (RAM) user can connect to a cluster, you must grant the user the required permissions to manage the cluster. This is in addition to the system permissions required for Container Service. For more information, see [Authorization](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/authorization-overview/#concept-268689).
    
-   Before a RAM user can use CloudShell, the user must be granted the AliyunCloudShellFullAccess permission. To create and attach NAS file systems, the user must also be granted the AliyunNASFullAccess permission. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    

## **Procedure**

Depending on whether the cluster is accessible over the public network, options to connect to the cluster using Workbench or CloudShell appear in the upper-right corner of the **Cluster Information** page. Select an option as prompted.

## Workbench

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the target cluster and click its name. In the navigation pane on the left, click **Cluster Information**.
    
3.  On the **Cluster Information** page, click **Manage Clusters Using Workbench** in the upper-right corner.
    
4.  In the terminal interface, run a kubectl command to verify the connection to the cluster.
    
    For example, the following command queries the namespaces.
    
    ```
    kubectl get namespace
    ```
    
    Expected output:
    
    ```
    NAME              STATUS   AGE
    default           Active   3h14m
    kube-node-lease   Active   3h14m
    kube-public       Active   3h14m
    kube-system       Active   3h14m
    ```
    

## CloudShell

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the target cluster and click its name. In the navigation pane on the left, click **Cluster Information**.
    
3.  On the **Cluster Information** page, click **Open Cloud Shell** in the upper-right corner.
    
4.  **Optional:** Click ![cloudshell.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9074183061/p141958.png) and then click **Mount File Storage**. Follow the on-screen instructions to create and attach a NAS file system.
    
    > Associating and mounting a NAS file system lets you persistently store frequently used scripts and files and prevents data loss when the instance is released.
    
5.  Run a kubectl command to verify the connection to the cluster.
    
    For example, the following command queries the namespaces.
    
    ```
    kubectl get namespaces
    ```
    
    Expected output:
    
    ```
    NAME              STATUS   AGE
    default           Active   3h14m
    kube-node-lease   Active   3h14m
    kube-public       Active   3h14m
    kube-system       Active   3h14m
    ```
    

## References

-   Revoke or purge KubeConfig files as needed to prevent security risks, such as data breaches caused by credential leaks. For more information, see [Manage KubeConfig files](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubeconfig-operation-guide/).
    
-   For more information about how to transfer files using CloudShell, see [Upload and download files](/help/en/cloud-shell/user-guide/upload-and-download-files).
    
-   For more information about basic operations in Workbench, such as uploading, viewing, and deleting files, see [Basic operations in Workbench](/help/en/ecs/user-guide/basic-operations-in-workbench/).
