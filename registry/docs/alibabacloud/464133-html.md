This topic describes how to view and manage the endpoints and ports of an ApsaraDB RDS for MySQL instance in the ApsaraDB RDS console.

## **Basic Edition and High-availability Edition instances**

Different types of endpoints are provided for RDS instances that run RDS Basic Edition and RDS High-availability Edition. You can view and change the endpoints based on your connection requirements. The following table describes the types of the endpoints.

**Address type**

**Description**

**View and modify method**

Instance endpoint

The internal and public endpoints of the instance are provided.

-   **Internal endpoint:** offers stable connection to the instance with low latency over an internal network, such as a VPC. The internal endpoint is automatically generated. For example, an ECS instance can access an RDS instance within the same VPC by using the internal endpoint of the RDS instance.
    
-   **Public endpoint:** used to connect to an RDS instance over the Internet. You must [manually apply for a public endpoint](/help/en/rds/apsaradb-rds-for-mysql/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mysql-instance).
    

You can view and modify internal and public IP addresses and ports below.

Database proxy endpoint

If the [database proxy](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies) feature is enabled for your RDS instance (supported for RDS High-availability Edition but not for RDS Basic Edition), we recommend that you use the database proxy endpoint to connect to your RDS instance. This maximizes the read/write splitting performance and reduces the load on the primary instance.

-   [Configure a database proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/manage-the-dedicated-proxy-endpoints-of-an-apsaradb-rds-for-mysql-instance)
    
-   [Configure access policies for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-access-policies-for-a-database-proxy-endpoint)
    

## View the internal and public endpoints and port numbers of an RDS instance

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  On the **Basic Information** page, click **View Details** in the **Basic Information** section.
    
    **Note**
    
    The public endpoint is displayed only after you [apply for a public endpoint](/help/en/rds/apsaradb-rds-for-mysql/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mysql-instance#concept-nsl-hff-vdb).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7158694071/p736235.png)
    

## Change the internal and public endpoints and port numbers

**Note**

If you have enabled Secure Sockets Layer (SSL) encryption for the internal or public endpoint of your RDS instance, you must [disable SSL encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-custom-certificate#6c6e03263eraq) before you can change the internal or public endpoint. When you disable SSL encryption, your RDS instance is restarted. We recommend that you perform this operation during off-peak hours.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Connection**.
    
3.  Click **Modify Connection Address**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7488357371/p903230.png)
    
4.  In the dialog box that appears, set the prefix and port number for the internal or public endpoint, and then click **OK**.
    
    **Note**
    
    The prefix is globally unique and cannot be configured or modified to the prefix of an existing endpoint.
    

## **Cluster Edition instances**

ApsaraDB RDS for MySQL instances that run RDS Cluster Edition provide **read/write endpoints**, **read-only endpoints**, **direct node connection endpoints**, and **database proxy endpoints**. You can view or modify these endpoints based on your connection requirements:

**Address type**

**Description**

**View and modify method**

Read/write endpoint

**Each RDS cluster has only one read/write endpoint that connects to the primary node of the RDS cluster. The read/write endpoint supports read and write operations.** Each read/write endpoint contains an internal endpoint that is automatically generated and a public endpoint that you must manually apply for.

-   Internal endpoint: offers stable connection to the instance with low latency over an internal network, such as a VPC. For example, an ECS instance can access an RDS instance within the same VPC by using the internal endpoint of the RDS instance.
    
-   Public endpoint: used to connect to an RDS instance over the Internet.
    

[Read/write endpoint](#4e168930726bl)

Read-only endpoint

**You can configure up to one read-only endpoint for an RDS cluster. The read-only endpoint connects to the secondary nodes of the RDS cluster and supports load balancing.** Each read-only endpoint contains an internal endpoint that is automatically generated during the creation of a read-only endpoint and a public endpoint that you must manually apply for.

The number of secondary nodes that are added to the read-only endpoint is always the same as the user-defined number of secondary nodes to ensure availability:

-   If a secondary node fails, the secondary node is automatically rebuilt.
    
-   If a secondary node is promoted to serve as the primary node, a new secondary node is automatically added to the read-only endpoint.
    

[Read-only endpoint](#e1c4a09072nn1)

Direct node connection endpoint

You can use the direct node connection endpoint to connect to a node in an RDS cluster. If you connect to a primary node, read and write operations are supported. If you connect to a secondary node, only read operations are supported.

Each direct node connection endpoint contains an internal endpoint that is automatically generated during the creation of a direct node connection endpoint and a public endpoint that you must manually apply for.

[Direct node connection endpoint](#e5804900728d7)

Database proxy endpoint

RDS Cluster Edition instances have the [general-purpose database proxy](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#1590f5d6db5at) feature enabled by default. You can configure a proxy endpoint as read/write or read-only:

-   **Read/write**: supports [read/write splitting](/help/en/rds/apsaradb-rds-for-mysql/what-is-read-or-write-splitting#concept-2021010) for linear business scaling, and supports database proxy features such as [transaction splitting](/help/en/rds/apsaradb-rds-for-mysql/use-the-transaction-splitting-feature-on-an-apsaradb-rds-for-mysql-instance#task-2357904) and [connection pool management](/help/en/rds/apsaradb-rds-for-mysql/set-the-connection-pool-type-of-an-apsaradb-rds-for-mysql-instance#task-2357903).
    
-   **Read-only**: supports read-only business operations, such as reports.
    

-   [Configure a database proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/manage-the-dedicated-proxy-endpoints-of-an-apsaradb-rds-for-mysql-instance)
    
-   [Configure access policies for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-access-policies-for-a-database-proxy-endpoint)
    

### **Read/write endpoint**

The read/write endpoint consists of the internal and public endpoints. After an RDS cluster is created, an internal endpoint is automatically generated. You can apply for a public endpoint based on your business requirements.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  On the **Basic Information** page, in the **Instance Topology Management** > **Database Connection** section, view and modify the read/write endpoint, and apply for a public endpoint.
    
    -   **View the read/write endpoint**: Hover your mouse over the read/write connection box to view the read/write endpoint in the dialog box that appears.
        
    -   **Modify the read/write endpoint and apply for a public endpoint**: Click **Edit**. In the dialog box that appears, you can **Change Endpoint**, **Change VPC**, and **Apply for** a public endpoint.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6769881471/p928129.png)
    

### Read-only endpoint

## Create, view, and delete the read-only endpoint

**Note**

-   When you create or delete the read-only endpoint of an RDS cluster, the read/write endpoint of the RDS cluster is not affected.
    
-   After you delete the read-only endpoint of an RDS cluster, the internal and public endpoints of the read-only endpoint are released, and the connections that are established by using the read-only endpoint are interrupted.
    
-   You can configure up to one read-only endpoint for an RDS cluster. You can use the read-only endpoint for multiple secondary nodes in the RDS cluster to implement load balancing.
    

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  On the **Basic Information** page, in the **Instance Topology Management** > **Database Connection** section, select:
    
    -   **Add an endpoint**
        
        Click **Add Endpoint**. In the dialog box that appears, enter or select the internal endpoint prefix, internal endpoint port, internal endpoint VPC, and internal endpoint VSwitch. Add the secondary nodes that you want to access, and then click **OK**.
        
    -   **Delete address**
        
        In the target read-only connection box, click **Delete**. In the dialog box that appears, click **OK**.
        
3.  **View the read-only endpoint:** On the **Basic Information** page, in the **Instance Topology Management** > **Database Connection** section, hover your mouse over the read-only connection box to view the read-only endpoint in the dialog box that appears.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6769881471/p928130.png)
    

## Adjust the settings of the nodes added to the read-only endpoint

**Note**

-   **Add secondary nodes or adjust node weights:** Existing database connections are not affected. New connections that are established by using the read-only endpoint are load balanced based on the new node settings.
    
-   **Remove secondary nodes:** At least one secondary node must be retained. The database connections on the removed node are interrupted for 30 to 120 seconds. Other nodes are not affected.
    
-   When you adjust the weights of secondary nodes in an RDS cluster, make sure that the weight of at least one secondary node is greater than 0.
    
-   The node settings of the read-only endpoint of an RDS cluster take effect on both the internal and public endpoints of the read-only endpoint.
    

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  On the **Basic Information** page, in the **Instance Topology Management** > **Database Connection** section, click **Edit** in the read-only connection box:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6769881471/p928166.png)
    
    -   **Add nodes and adjust weights**: Select the secondary nodes that you want to add to the endpoint, and click the ![加入](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0931071861/p521327.png) icon. Adjust the node weights, and then click **OK**.
        
    -   **Remove nodes**: Select the nodes that you want to remove, click the ![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5041071861/p521385.png) icon, and then click **OK**.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6769881471/p928167.png)
    

### **Direct node connection endpoint**

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  On the **Basic Information** page, in the **Instance Topology Management** > **Database Nodes** section, create, view, and modify the direct connection endpoints of cluster nodes, and apply for public endpoints.
    
    -   **Create a cluster node endpoint**: In the target node section, click **Create Node Endpoint**. Configure the internal information, and then click **OK**.
        
    -   **View and modify the direct connection endpoint of a cluster node, and apply for a public endpoint**: Click **Manage**. In the dialog box that appears, you can **Change Endpoint**, **Change VPC**, and **Apply for** a public endpoint.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6769881471/p928066.png)
    

## **FAQ**

Q: After I change a specific endpoint or port number of my RDS instance, do I need to update the endpoint or port number information on my application?

A: Yes, you must modify the endpoint or port number in the application after you have modified them. Otherwise, the application cannot connect to the RDS instance.

Q: After I change a specific endpoint or port number of my RDS instance, is the change immediately applied? Do I need to restart my RDS instance?

A: No, you do not need to restart your RDS instance. The modification takes effect immediately.

Q: After I change or release an endpoint of my RDS instance, can I use the endpoint for another RDS instance?

A: Yes, you can.

Q: Does a primary/secondary switchover trigger changes to the endpoints of my RDS instance?

A: No, a primary/secondary switchover does not trigger changes to the endpoints of your RDS instance. After the primary/secondary switchover is complete, the original secondary RDS instance becomes the primary RDS instance, and your application is automatically connected to the new primary RDS instance.

Q: How do I resolve the "Invalid connection string format" error with error code `InvalidConnectionString.Malformed` when modifying a connection address?

A: This error can occur for the following reasons:

-   **Reason 1**: SSL is enabled for the instance, causing the connection address modification to fail.
    
    **Solution**: [Disable SSL encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#081ab8506df7u) before modifying the connection address.
    
-   **Reason 2**: The modified connection string does not meet the requirements, such as having fewer than 8 characters in the prefix or exceeding 63 characters in total length.
    
    **Solution**: Optimize the modified connection address to meet the following requirements: The connection address prefix must start with a lowercase letter, end with a lowercase letter or digit, and can contain lowercase letters, digits, and hyphens (-). The prefix must contain at least 8 characters. The total length of the connection address (prefix + suffix) must not exceed 63 characters.
    

Q: Why do CPU or memory usage rates differ among nodes in an RDS cluster even when node weights are the same?

A: Server Load Balancer (SLB) balances the connections on nodes. However, the CPU and memory resources that are consumed by the connections may be different from each other.

Q: Does adjusting node weights in an RDS cluster affect existing connections? Will my database system become unavailable?

A: No, existing connections are not affected, and your database system does not become unavailable. When you adjust the weights of nodes, only new connections to the nodes are affected.

Q: Can I set the weights of all nodes in an RDS cluster to 0?

A: No, you cannot set the weights of all nodes to 0. You must set the weight of at least one node to a value that is greater than 0.

Q: Can I remove all nodes from the read-only endpoint of an RDS cluster?

A: No, you cannot remove all nodes from the read-only endpoint. At least one node must be added to the read-only endpoint of the RDS cluster.

## **Related API operations**

**API operation**

**Description**

[CreateDBInstanceEndpoint - Create an endpoint for an instance](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-createdbinstanceendpoint-mysql)

Creates an endpoint for an ApsaraDB RDS for MySQL instance that runs RDS Cluster Edition.

[DeleteDBInstanceEndpoint - Delete an endpoint of an instance](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-deletedbinstanceendpoint-mysql)

Deletes an endpoint of an ApsaraDB RDS for MySQL instance that runs RDS Cluster Edition.

[ModifyDBInstanceEndpointAddress - Modify information about the endpoint of an instance](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-modifydbinstanceendpointaddress-mysql)

Modifies the information about the endpoint of an ApsaraDB RDS for MySQL instance that runs RDS Cluster Edition.
