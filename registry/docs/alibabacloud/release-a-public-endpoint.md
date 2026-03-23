This topic describes how to manage public endpoints for ApsaraDB for MongoDB instances, which includes applying for and releasing the endpoints.

## **Background information**

By default, an ApsaraDB for MongoDB instance provides a private endpoint. To connect to the instance over the Internet, you must manually apply for a public endpoint.

**Endpoint type**

**Description**

Private endpoint (VPC)

-   A virtual private cloud (VPC) is an isolated network that provides higher security and performance than the classic network.
    
-   By default, ApsaraDB for MongoDB provides VPC endpoints for instances to ensure high security and connectivity.
    

Public endpoint (connection string)

-   Connecting to instances over the Internet poses security risks. To ensure access security, ApsaraDB for MongoDB provides only VPC endpoints by default.
    
-   To connect to an instance from a device outside Alibaba Cloud, such as an on-premises device, you must manually apply for a public endpoint.
    

## **Apply for a public endpoint**

### **Usage notes**

-   When you apply for a public endpoint for an instance that uses cloud disks, existing connections may experience a **transient disruption**. Ensure your application has a reconnection mechanism. Perform this operation during off-peak hours.
    
-   Before you connect to an instance using a public endpoint, [add the public IP address of the client to the instance's whitelist](/help/en/mongodb/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-3#task774).
    
-   For sharded cluster instances that use cloud disks, apply for public endpoints only for Mongos nodes.
    

### **Procedure**

1.  Go to the [MongoDB replica set instances](https://mongodb.console.alibabacloud.com/replicate/instances) page or the [MongoDB sharded cluster instances](https://mongodb.console.alibabacloud.com/sharding/instances) page, select a resource group and region, and then click the target instance ID.
    
2.  In the navigation pane on the left, click **Database Connections**.
    
3.  Follow the steps that correspond to your instance type.
    
    ## Replica set/standalone instance
    
    1.  In the **Public Connections** section, click **Apply for Public Connection String**.
        
    2.  In the **Apply for Public Connection String** dialog box, click **OK**.
        
    
    ## Sharded cluster instance
    
    1.  In the **Public Connections** section, click **Apply for Public Connection String**.
        
    2.  In the **Apply for Public Connection String** panel, set the following parameters.
        
        **Parameter**
        
        **Option**
        
        **Description**
        
        **Node Type**
        
        **Shard**
        
        The shard component.
        
        **Note**
        
        -   In some scenarios, such as data synchronization between clusters, you must read the oplog data of a shard component over the Internet. To meet this requirement, apply for a public endpoint for the component.
            
        -   To apply for a public endpoint for a shard component, you must first [apply for a shard endpoint](/help/en/mongodb/user-guide/apply-for-an-endpoint-for-a-shard#task-1941822).
            
        
        **CS**
        
        The ConfigServer component.
        
        **Note**
        
        You can apply for a public endpoint for a ConfigServer component only for an existing instance that already has a private endpoint for the component. ApsaraDB for MongoDB no longer supports applying for private endpoints for ConfigServer components.
        
        **Mongos**
        
        The Mongos component.
        
        In most cases, you only need to connect to a Mongos node to read and write data.
        
        **Node ID**
        
        The ID of the node in the current instance.
        
        Select the ID of the node for which you want to apply for a public endpoint.
        
    3.  Click **OK**.
        
    
    To apply for public endpoints for multiple nodes in a sharded cluster instance, repeat these steps.
    

## **Release a public endpoint**

### **Usage notes**

-   After you release the public endpoint of an instance or a node, you cannot connect to the instance or node using the original public endpoint.
    
-   After you release a public endpoint, delete the corresponding public IP address from the whitelist to ensure data security.
    

### **Procedure**

1.  Go to the [MongoDB replica set instances](https://mongodb.console.alibabacloud.com/replicate/instances) page or the [MongoDB sharded cluster instances](https://mongodb.console.alibabacloud.com/sharding/instances) page, select a resource group and region, and then click the target instance ID.
    
2.  In the navigation pane on the left, click **Database Connections**.
    
3.  Follow the steps that correspond to your instance type.
    
    ## Replica set/standalone instance
    
    **Note**
    
    After you release the public endpoint of a replica set instance, the public endpoints of both the primary and secondary nodes are released.
    
    1.  In the **Public Connections** section, click **Release Public Connection String**.
        
    2.  In the **Release Public Connection String** dialog box, click **OK**.
        
    
    ## Sharded cluster instance
    
    **Note**
    
    -   For a sharded cluster instance, you can release the public endpoint of one or more Mongos, shard, or ConfigServer components. Nodes whose public endpoints are not released remain accessible. For more information about the components of a sharded cluster instance, see [Sharded cluster architecture](/help/en/mongodb/product-overview/sharded-cluster-instances#concept-rcj-dc4-tdb).
        
    -   After you release the endpoint of a shard or ConfigServer component, the public endpoints of both the primary and secondary nodes in the component are released.
        
    
    1.  In the **Public Connections** section, find the endpoint that you want to release and click **Release** in the **Actions** column.
        
    2.  In the **Release Public Endpoint** dialog box, click **OK**.
        
    
    To release the public endpoints of multiple nodes in a sharded cluster instance, repeat these steps.
    

## **References**

-   For more information about the endpoints of an ApsaraDB for MongoDB instance, see [Instance endpoints](/help/en/mongodb/user-guide/overview-of-instance-connections/).
    
-   To connect to an instance using a public endpoint, see [Connect to a MongoDB instance from a local client over the Internet](/help/en/mongodb/user-guide/connect-to-an-apsaradb-for-mongodb-instance-over-the-internet#concept-183456).
    
-   We recommend that you use Secure Sockets Layer (SSL) encryption when you connect to a database using a public endpoint. For more information, see [Use the mongo shell to connect to a database with SSL encryption](/help/en/mongodb/user-guide/use-the-mongo-shell-to-connect-to-an-apsaradb-for-mongodb-database-in-ssl-encryption-mode#concept-ls5-jks-ngb).
