Container Service for Kubernetes (ACK) uses the Cloud Controller Manager (CCM) to add routes to the route table of the virtual private cloud (VPC) where your cluster is deployed. These routes enable network connectivity between pods in the cluster. By updating the cloud-config ConfigMap, you can configure multiple route tables for the VPC. This topic describes how to do this for both ACK managed clusters and ACK dedicated clusters.

## Prerequisites

-   An ACK cluster that uses Flannel as its network plugin has been created, and the cloud-controller-manager component meets the following version requirements:
    
    -   ACK managed clusters:
        
        -   Kubernetes ≥ 1.18
            
        -   cloud-controller-manager ≥ v2.4.0
            
    -   ACK dedicated clusters:
        
        -   cloud-controller-manager ≥ v1.9.3.105-gfd4e547-aliyun
            
    
    [Manually upgrade the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster) as needed. To check or update the component version, see [Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager).
    
-   The VPC where the cluster resides has multiple route tables.
    
    **Note**
    
    If the VPC has only one route table, you do not need to configure multiple route tables.
    

## Background information

When a VPC has multiple route tables, you can associate Elastic Compute Service (ECS) instances with different route tables. Earlier versions of the CCM support only one route table per VPC. To use multiple route tables, update the CCM to the latest version in the ACK console. For more information, see [Manage components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).

## Obtain route table IDs

Before configuring multiple route tables, obtain the route table IDs from the VPC console.

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc). In the left-side navigation pane, click **Route Tables**.
    
2.  On the **Route Tables** page, set the search condition to **VPC ID**, enter the ID of the VPC where your cluster resides, and then click the search icon.
    
    ![Route Tables](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8043665761/p541841.png)
    

## Configure multiple route tables for an ACK managed cluster

You can configure multiple route tables for an ACK managed cluster through the ACK console.

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Add-ons**.
    
3.  On the **Add-ons** page, find the CCM and click **Configuration**.
    
    ![Configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3246213071/p378176.png)
    
4.  In the **routeTableIDs** field, enter the route table IDs you obtained and click **OK**.
    
    You must include the ID of the **system route table** of the VPC. Separate multiple route table IDs with commas (,). Example: vtb-t4n788888\*\*\*\*,vtb-t4n7k6u3m0n840799\*\*\*.![routeTableIDs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9082213071/p378182.png)
    

## Configure multiple route tables for an ACK dedicated cluster

You can configure multiple route tables for an ACK dedicated cluster through the ACK console or by using kubectl.

### Method 1: Use kubectl

Before you begin, make sure that your kubectl client is connected to the ACK dedicated cluster. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-ubf-lhg-vdb).

1.  Run the following command to open the cloud-config ConfigMap for editing:
    
    ```
    kubectl edit cm -n kube-system cloud-config
    ```
    
2.  Replace `${ROUTE_TABLES_IDS}` with the IDs of the route tables in your VPC. Make sure you include the ID of the system route table. Separate multiple route table IDs with commas (,). Example: `vtb-t4n788888****,vtb-t4n7k6u3m0n840799****`.
    
    **Important**
    
    Modify only the `${ROUTE_TABLES_IDS}` value in the cloud-config ConfigMap.
    
    ```
    "routeTableIDs": "${ROUTE_TABLES_IDS}"
    ```
    
3.  Restart the pod that runs the CCM by running the following command:
    
    ```
    kubectl -n kube-system delete po -lapp=cloud-controller-manager
    ```
    
    After the pod restarts, the routes of the cluster nodes appear in the specified route tables.
    

### Method 2: Use the ACK console

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Configurations** > **ConfigMaps**.
    
3.  Select the kube-system namespace. Find the cloud-config ConfigMap and click **Edit YAML** in the Actions column.
    
4.  In the **View in YAML** panel, set routeTableIDs to the IDs of the route tables in your VPC. Make sure you include the ID of the system route table. Separate multiple route table IDs with commas (,). Example: vtb-t4n788888\*\*\*\*,vtb-t4n7k6u3m0n840799\*\*\*\*. Then, click **OK**.
    
    ![cloud-config](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3391790261/p248985.png)
    
5.  In the left navigation pane of the cluster management page, choose **Workload** > **DaemonSets**.
    
6.  Select the kube-system namespace. Find the cloud-controller-manager DaemonSet and click **Batch Redeploy** in the lower part of the page.
    
    After the redeployment completes, the routes of the cluster nodes appear in the specified route tables.
