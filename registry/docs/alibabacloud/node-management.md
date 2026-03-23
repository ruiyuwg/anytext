PolarDB allows you to individually manage nodes. This topic describes the node management operations.

-   [Specify a custom node name](#cf2bd42700xsx)
    
-   [Restart a node](#1e8cd74053icj)
    

## **Specify a custom node name**

If your cluster has multiple nodes used across various business scenarios, you can manually rename the nodes in the PolarDB console for easier identification and management based on the specific business scenarios they serve.

### **Usage notes**

Each node has a name and a role. During a primary/secondary node switchover, the roles of the nodes may change but the names of the nodes remain unchanged. For more information, see [Automatic failover and manual failover](/help/en/polardb/polardb-for-mysql/user-guide/automatic-failover-and-manual-failover).

-   Pre-switchover ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0747633371/p871098.png)
    
-   Post-switchover
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0747633371/p871102.png)
    

### **Procedure**

Go to the **[PolarDB console](https://polardb.console.alibabacloud.com/)**. Find the cluster that you want to manage on the **Clusters** page. On the **Basic Information** page of the cluster, find the node that you want to manage in the **Database Nodes** section. In the information box of the node, find the node name and click **Modify**. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0747633371/p871093.png)

## **Restart a node**

You can restart a node in the PolarDB console based on your business requirements. PolarDB provides the [serverless](/help/en/polardb/polardb-for-mysql/user-guide/enable-the-serverless-function-for-fixed-specification-clusters) feature, which enables second-level scaling of nodes in your cluster based on your business loads.

### **Usage notes**

-   If a read-write splitting connection is established after a read-only node is restarted, PolarProxy forwards requests on the connection to the read-only node. If a read-write splitting connection is established before a read-only node is restarted, PolarProxy does not forward requests on the connection to the read-only node. If you want PolarProxy to forward requests on the connection to the read-only node, you can restart your application to close and re-establish the connection.
    
-   When you restart a node, services may be interrupted for up to 1 minute. We recommend that you perform this operation during off-peak hours and make sure that your applications can automatically reconnect to the cluster.
    
-   The amount of time required to restart a node depends on the amount of data of your business. Several hours may be required to restart a node. Proceed with caution.
    

### **Procedure**

Go to the **[PolarDB console](https://polardb.console.alibabacloud.com/)**. Find the cluster that you want to manage on the **Clusters** page. On the **Basic Information** page of the cluster, find the node that you want to manage in the **Database Nodes** section. In the information box of the node, click **Restart**. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0747633371/p870950.png)

### **Related API operations**

**Operations**

**Description**

[RestartDBNode](/help/en/polardb/polardb-for-mysql/api-restartdbnode#doc-api-polardb-RestartDBNode)

Restarts a node of a PolarDB cluster.
