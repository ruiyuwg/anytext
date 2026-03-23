This topic describes how to view and change the endpoints and port numbers of an ApsaraDB RDS for PostgreSQL instance.

## RDS Basic Edition and RDS High-availability Edition

## **Feature description**

You can use an endpoint and the port number of an RDS instance to connect to the RDS instance. The parameters that you must configure to connect to the RDS instance vary based on the connection method. For more information, see [Connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance#concept-stt-3hg-wdb).

An RDS instance provides different types of endpoints for various scenarios. The following table describes the types of endpoints and the methods that you can use to view and change the endpoints.

**Endpoint type**

**Description**

**Method to view and change an endpoint**

Instance endpoint

This type of endpoint is suitable for all connection scenarios.

-   Internal endpoint: offers stable connection to the instance with low latency over the internal network. For example, an ECS instance can access an RDS instance within the same VPC by using the internal endpoint of the RDS instance.
    
-   Public endpoint: used to connect to an RDS instance over the Internet.
    

[View and change the endpoints and port numbers of an RDS instance](#section-6ul-k8z-d57)

Database proxy endpoint

If the database proxy feature is enabled for an RDS instance, we recommend that you use the database proxy endpoint to connect to the RDS instance. This helps improve the read/write splitting performance and reduces the load on the primary RDS instance.

For more information, see [What are database proxies?](/help/en/rds/apsaradb-rds-for-postgresql/what-are-database-proxies#concept-2191078)

[Change the database proxy endpoint and port number of an RDS instance](#section-xlv-alc-314)

Babelfish endpoint

If Babelfish is enabled for an RDS instance when you create the instance, you can use the instance endpoint and the TDS port number to connect to the RDS instance from an SQL Server client.

For more information about Babelfish, see [Introduction to Babelfish](/help/en/doc-detail/428613.html#concept-2212689).

[Change the endpoints and port numbers of an RDS instance for which Babelfish is enabled](#section-oxn-m6e-uf9)

## Change the endpoint and port number of an RDS instance

### Prerequisites

-   An IP address whitelist is configured. For more information, see [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance-1#concept-rpj-hs4-ydb).
    
-   A public endpoint for the RDS instance is available. You can apply for a public endpoint based on your business requirements. For more information, see [Apply for or release a public endpoint](/help/en/rds/apsaradb-rds-for-postgresql/apply-for-or-release-a-public-endpoint-on-an-apsaradb-rds-for-postgresql-instance#concept-nsl-hff-vdb).
    

### Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Connection** to view the internal and public endpoints and port numbers of the RDS instance.
    
3.  In the Database Connection section, click **Modify Endpoint**.
    
4.  Set the **Connection Type** parameter to **Internal Endpoint** or **Public Endpoint**. Then, configure the **Endpoint** and **Port** parameters and click **OK**. The value of the Endpoint parameter that you can configure is the prefix of the endpoint.
    
    **Note**
    
    -   The prefix of an endpoint must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-). The prefix must start with a lowercase letter.
        
    -   The port number must be within the range of 1000 to 5999.
        
    -   If your RDS instance uses Premium Local SSDs, you cannot change the port numbers of the RDS instance.
        
    

## Change the database proxy endpoint and port number of an RDS instance

### Prerequisites

The database proxy feature is enabled for your RDS instance. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-postgresql/enable-and-configure-the-database-proxy-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2199127).

### Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Connection Information** section, find the required database proxy endpoint and click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9161864071/p739439.png) icon to the right of the database proxy endpoint.
    
4.  In the dialog box that appears, modify the values of **Endpoint** and **Port**. Then, click **OK**. The value of Endpoint that you can modify refers to the prefix of the database proxy endpoint.
    
    **Note**
    
    -   The prefix of a database proxy endpoint must be 1 to 40 characters in length and can contain letters, digits, and hyphens (-). The prefix must start with a lowercase letter.
        
    -   The port number that is associated with a database proxy endpoint must be within the range of 1000 to 5999.
        
    -   The value of **Endpoint Type** cannot be modified.
        
    

## Change the endpoints and port numbers of an RDS instance for which Babelfish is enabled

### Prerequisites

-   Babelfish is enabled for an RDS instance when you create the RDS instance. For more information, see [Create an ApsaraDB RDS for PostgreSQL instance for which Babelfish is enabled](/help/en/rds/apsaradb-rds-for-postgresql/enable-babelfish-for-an-apsaradb-rds-for-postgresql-instance#task-2212682).
    
-   An IP address whitelist is configured. For more information, see [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance-1#concept-rpj-hs4-ydb).
    
-   A public endpoint for the RDS instance is available. You can apply for a public endpoint based on your business requirements. For more information, see [Apply for or release a public endpoint](/help/en/rds/apsaradb-rds-for-postgresql/apply-for-or-release-a-public-endpoint-on-an-apsaradb-rds-for-postgresql-instance#concept-nsl-hff-vdb).
    

### Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Connection** to view the internal and public endpoints and the Babelfish port numbers.
    
3.  In the Database Connection section, click **Modify Endpoint**.
    
4.  Set the **Connection Type** parameter to **Internal Endpoint** or **Public Endpoint**. Then, configure the **Endpoint** and **Babelfish TDS Port** parameters and click **OK**. The value of the Endpoint parameter that you can configure is the prefix of the endpoint. ![修改Babelfish端口号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5671269661/p445432.png) 
    
    **Note**
    
    -   The prefix of an endpoint must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-). The prefix must start with a lowercase letter.
        
    -   The port number must be within the range of 1000 to 5999.
        
    

## **FAQ**

-   After I change an endpoint or a port number of my RDS instance, do I need to update the information about the endpoint or port number on my application?
    
    Yes, after you change an endpoint or a port number of your RDS instance, you must update the information about the endpoint or port number on your application. Otherwise, your application cannot connect to your RDS instance.
    
-   After I change an endpoint or a port number of my RDS instance, does the change immediately take effect? Do I need to restart my RDS instance?
    
    After you change an endpoint or a port number of your RDS instance, the change immediately takes effect. You do not need to restart your RDS instance.
    
-   After I change or release an endpoint of my RDS instance, can I use the endpoint for another RDS instance?
    
    Yes, you can use the endpoint for another RDS instance.
    
-   Does a primary/secondary switchover trigger changes to the endpoints of my RDS instance?
    
    No, a primary/secondary switchover does not trigger changes to the endpoints of your RDS instance. However, the IP addresses that are associated with the endpoints change. Your application can still connect to your RDS instance by using the endpoints.
    

## RDS Cluster Edition

## **Feature description**

An RDS cluster provides different types of endpoints for various scenarios. The following table describes the types of endpoints and the methods that you can use to view and change the endpoints. An RDS instance that runs RDS Cluster Edition is referred to as an RDS cluster.

**Endpoint type**

**Description**

**Method to view and change an endpoint**

Read/write endpoint

Each RDS cluster has only one read/write endpoint. The read/write endpoint can be used to connect only to the primary node in the RDS cluster. When workloads are switched over between the primary and secondary nodes, the endpoint is used to automatically connect to the new primary node. You can use the endpoint to perform read and write operations.

**Note**

The read/write endpoint consists of the internal and public endpoints. After an RDS cluster is created, an internal endpoint is automatically generated. You can apply for a public endpoint based on your business requirements.

-   Internal endpoint: offers stable connection to the instance with low latency over the internal network. For example, an ECS instance can access an RDS instance within the same VPC by using the internal endpoint of the RDS instance.
    
-   Public endpoint: used to connect to an RDS instance over the Internet.
    

[View and manage the read/write endpoint](#4e168930726bl)

Read-only endpoint

You can create only one read-only endpoint for each RDS cluster. The read-only endpoint is used to access one or more secondary nodes in the cluster. You can add nodes to or remove nodes from a read-only endpoint and adjust the weights of the nodes that are added to the read-only endpoint.

The number of secondary nodes that are added to the read-only endpoint is always the same as the user-defined number of secondary nodes to ensure availability.

-   If a secondary node fails, the secondary node is automatically rebuilt.
    
-   If a secondary node is promoted to serve as the primary node, a new secondary node is automatically added to the read-only endpoint.
    

[View and manage the read-only endpoint](#e1c4a09072nn1)

### **View and manage the read/write endpoint**

The read/write endpoint consists of the internal and public endpoints. After an RDS cluster is created, an internal endpoint is automatically generated. You can apply for a public endpoint based on your business requirements.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the **Database Connection** section of the **Instance Topology Management** section on the **Basic Information** page, view and change the read/write endpoint and apply for a public endpoint.
    
    -   **View the read/write endpoint.**
        
        Move the pointer over the Read/Write Mode card and view the read/write endpoint in the tooltip that appears.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0538374271/p795270.png)
        
    -   **Change the read/write endpoint and apply for a public endpoint.**
        
        Click **Edit**. In the dialog box that appears, perform the following operations based on your business requirements:
        
        -   Click **Change Connection** to change the internal endpoint and port number.
            
        -   Click **Change VPC** to switch the VPC and vSwitch.
            
        -   Click **Apply for** to apply for a public endpoint.
            
            **Note**
            
            You can also click **Apply for Public Endpoint** to apply for a public endpoint.
            

### View and manage the read-only endpoint

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the **Database Connection** section of the **Instance Topology Management** section on the **Basic Information** page, perform the following operations based on your business requirements.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0538374271/p795316.png)
    
    **Required operation**
    
    **Description**
    
    **Procedure**
    
    Create and delete a read-only endpoint
    
    -   If you want to create or delete a read-only endpoint for an RDS cluster, make sure that the RDS cluster is in the Running state.
        
    -   When you configure a read-only endpoint for an RDS cluster, the read and write requests of the RDS cluster are not affected.
        
    -   You can configure only one read-only endpoint for an RDS cluster.
        
    -   The read-only endpoint of an RDS cluster can be used for multiple secondary nodes in the RDS cluster to implement load balancing. An internal endpoint is automatically generated for the read-only endpoint.
        
    -   When you delete the read-only endpoint of an RDS cluster, the read and write requests of the RDS cluster are not affected.
        
    -   After you delete the read-only endpoint of an RDS cluster, the internal and public endpoints of the read-only endpoint are released, and the established connections are interrupted.
        
    
    -   **Create an endpoint**
        
    -   Click **Add Endpoint**. In the dialog box that appears, configure the Internal Endpoint Prefix, Port, VPC, and vSwitch parameters, add the secondary node that you want to access, and then click **OK**.
        
    
    **Note**
    
    When you create a read-only endpoint, you can adjust the weights of the nodes that are added to the read-only endpoint.
    
    -   **Delete an endpoint**
        
    -   In the Read-only Mode card, click **Delete**. In the message that appears, click **OK**.
        
    
    View the read-only endpoint
    
    None.
    
    Move the pointer over the Read-only Mode card to view the read-only endpoint.
    
    Add nodes to and remove nodes from the read-only endpoint
    
    -   If you want to create or delete nodes from the read-only endpoint, make sure that the RDS cluster is in the Running state.
        
    -   When you add nodes to the read-only endpoint of an RDS cluster, the existing persistent connections are not affected. New connections are established based on the weights of the nodes to implement load balancing.
        
    -   The node configuration of the read-only endpoint of an RDS cluster takes effect on both the internal and public endpoints of the read-only endpoint.
        
    -   When you remove a node from the read-only endpoint of an RDS cluster, your database system becomes unavailable for approximately 30 to 120 seconds. Connections to other nodes are not affected.
        
    -   The node configuration of the read-only endpoint of an RDS cluster takes effect on both the internal and public endpoints of the read-only endpoint.
        
    -   Make sure that at least one node is added to the read-only endpoint of an RDS cluster.
        
    
    -   **Add nodes.**
        
        1.  In the Read-only Mode card, click **Edit**, select the node that you want to add, and then click the ![加入](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0931071861/p521327.png) icon.
            
        2.  Specify weights for the nodes based on your business requirements and click **OK**.
            
    -   **Remove nodes.**
        
    -   In the Read-only Mode card, click **Edit**, select the node that you want to remove, click the ![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5041071861/p521385.png) icon, and then click **OK**.
        
    
    Adjust the weights of the nodes configured for the read-only endpoint
    
    -   The RDS cluster is in the Running state.
        
    -   The weight of at least one node is greater than 0.
        
    -   When you adjust the weights of the nodes that are added to the read-only endpoint of an RDS cluster, the existing persistent connections are not affected. New connections are established based on the weights of the nodes to implement load balancing.
        
    -   The node configuration of the read-only endpoint of an RDS cluster takes effect on both the internal and public endpoints of the read-only endpoint.
        
    
    1.  In the Read-only Mode card, click **Edit**.
        
    2.  In the dialog box that appears, adjust the weights of the nodes and click **OK**.
        
    

**Related operations**

**Operation**

**Description**

[CreateDBInstanceEndpoint](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createdbinstanceendpoint-postgresql)

Creates an endpoint for an ApsaraDB RDS for PostgreSQL instance that runs RDS Cluster Edition.

[DescribeDBInstanceEndpoints](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstanceendpoints-postgresql)

Queries the endpoints of an ApsaraDB RDS for PostgreSQL instance that runs RDS Cluster Edition.

[ModifyDBInstanceEndpointAddress](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstanceendpointaddress-postgresql)

Modifies the endpoint of an ApsaraDB RDS for PostgreSQL instance that runs RDS Cluster Edition.

[CreateDBInstanceEndpointAddress](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createdbinstanceendpointaddress-postgresql)

Creates a public endpoint for an ApsaraDB RDS for PostgreSQL instance that runs RDS Cluster Edition.

[DeleteDBInstanceEndpointAddress](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deletedbinstanceendpointaddress-postgresql)

Releases the public endpoint of an ApsaraDB RDS for PostgreSQL instance that runs RDS Cluster Edition.

[DeleteDBInstanceEndpoint](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deletedbinstanceendpoint-postgresql)

Deletes the endpoint of an ApsaraDB RDS for PostgreSQL instance that runs RDS Cluster Edition.

[ModifyDBInstanceEndpoint](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstanceendpoint-postgresql)

Modifies the weight of an endpoint for an ApsaraDB RDS for PostgreSQL instance that runs RDS Cluster Edition.

**FAQ**

-   Why are the CPU utilization and memory usage different on nodes that have the same weight?
    
    Server Load Balancer (SLB) balances the connections on nodes. However, the CPU and memory resources that are consumed by the connections may be different from each other. Therefore, the CPU utilization and memory usage may be different even on nodes that have the same weight.
    
-   Are existing connections affected when I adjust the weights of nodes? Will my database system become unavailable?
    
    No, existing connections are not affected, and your database system will not become unavailable. When you adjust the weights of nodes, only new connections to the nodes are affected.
    
-   Can I set the weights of all nodes to 0?
    
    No, you cannot set the weights of all nodes to 0. You must set the weight of at least one node to a value that is greater than 0.
    
-   Why are the CPU utilization and memory usage different on nodes that have the same weight?
    
    SLB balances the connections on nodes. However, the CPU and memory resources that are consumed by the connections may be different from each other. Therefore, the CPU utilization and memory usage may be different even on nodes that have the same weight.
    
-   Can I remove all nodes from the read-only endpoint of an RDS cluster?
    
    No, you cannot remove all nodes from the read-only endpoint of an RDS cluster. At least one node must be added to the read-only endpoint of the RDS cluster.
