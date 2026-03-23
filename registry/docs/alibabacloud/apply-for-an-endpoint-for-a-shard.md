Typically, connecting to a Mongos node in an ApsaraDB for MongoDB sharded cluster instance is sufficient for reading and writing data. To read the Oplog of a shard node, you must apply for an endpoint for that shard.

## Prerequisites

-   A sharded cluster instance is created.
    
-   The protocol is MongoDB.
    

## Background information

An ApsaraDB for MongoDB sharded cluster instance consists of three components: Mongos, Shard, and Configserver. You can select the number and configuration of shard components to create sharded cluster instances with different performance levels. For more information, see [Cluster architecture](/help/en/mongodb/product-overview/sharded-cluster-instances#concept-rcj-dc4-tdb).

## Usage notes

-   After you apply for a shard endpoint, the system creates an endpoint for the primary, secondary, and read-only nodes in the shard. Each endpoint requires one IP address. Ensure that you have a sufficient number of IP addresses available.
    
-   The network type of the endpoint that you apply for must be the same as the network type of the Mongos node.
    
-   After a shard endpoint is created, it cannot be modified.
    
-   The procedure in this topic describes how to apply for a private endpoint for a shard. To access the shard over the Internet, you must first apply for a private endpoint, set an account and password, and then apply for a public endpoint. See [Apply for a public endpoint for an instance](/help/en/mongodb/apply-for-a-public-endpoint-for-an-apsaradb-for-mongodb-instance-optional-2#concept-ibc-qvp-kgb).
    
-   If your instance uses local disks, you can apply for a direct connection account when you apply for the shard endpoint. If your instance uses cloud disks, you must first create a direct connection account on the Account Management page before you apply for the shard endpoint.
    
-   You can apply for an endpoint only for a shard in an ApsaraDB for MongoDB sharded cluster instance.
    

## Procedure

## Instances that use cloud disks

**Important**

When you apply for a shard endpoint for an instance that uses cloud disks, existing connections may experience **transient connections**. Ensure that your application has an automatic reconnection mechanism. We recommend that you perform this operation during off-peak hours.

1.  Go to the [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the upper-left corner of the page, select a resource group and a region. Then, click the ID of the target instance.
    
2.  Create a shard account.
    
    **Note**
    
    You only need to create a shard account the first time you apply for a shard endpoint for the instance. You do not need to create the account for subsequent applications.
    
    1.  In the navigation pane on the left, click **Accounts**.
        
    2.  Click the **Create Account** button.
        
    3.  In the **Create Account(Only shards are supported.)** panel, enter an account name and a password.
        
        **Note**
        
        The shard account has read-only permissions.
        
        **Parameter**
        
        **Description**
        
        **Account Name**
        
        Create an account that meets the following requirements:
        
        -   Starts with a lowercase letter.
            
        -   Consists of lowercase letters, digits, or underscores (\_).
            
        -   Is 4 to 16 characters in length.
            
        
        **Note**
        
        -   Keywords cannot be used as account names in ApsaraDB for MongoDB.
            
        -   The account has read-only permissions.
            
        
        **Account Password**
        
        Set a password that meets the following requirements:
        
        -   Consists of at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
            
            The special characters are !@#$%^&\*()\_+-=.
            
        -   Is 8 to 32 characters in length.
            
        
        **Note**
        
        ApsaraDB for MongoDB lets you reset the passwords of accounts for Configserver and shard nodes. For more information, see [Reset a password](/help/en/mongodb/user-guide/reset-the-password-of-an-account-for-an-apsaradb-for-mongodb-instance#concept-lps-vqr-33b).
        
        **Confirm Password**
        
        Enter the password again.
        
    4.  Click **OK**.
        
3.  Create a shard endpoint.
    
    1.  In the navigation pane on the left, click **Database Connections**.
        
    2.  In the **Internal Connections** section, click **Create-Shard-Cs-Connections**.
        
    3.  Set the following parameters in the **Create-Shard-Cs-Connections** panel.
        
        **Parameter**
        
        **Description**
        
        **Node Type**
        
        Fixed to **Shard**.
        
        **Select Node ID**
        
        Select the ID of the node for which you want to create an endpoint.
        
    4.  Click **OK**.
        
4.  On the **Database Connections** page, you can view the endpoint.
    
    1.  Wait for the instance status to change from **Creating Network Connection** to **Running**.
        
    2.  In the **Internal Connections** section, you can view the endpoint of the node.
        

## Instances that use local disks

**Note**

Alternatively, on the **Basic Information** page of the instance, in the **Shard List** section, click **Add Shard**. Then, enable a direct connection to the shard and apply for an endpoint for the shard node in the **Apply For Shard Direct Connection Endpoint** section.

1.  Go to the [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the upper-left corner of the page, select a resource group and a region. Then, click the ID of the target instance.
    
2.  In the navigation pane on the left, click **Database Connections**.
    
3.  In the **Internal Connections** section, click **Create-Shard-Cs-Connections**.
    
4.  In the **Create-Shard-Cs-Connections** panel, you can set the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Node Type**
    
    Fixed to **Shard**.
    
    **Select Node ID**
    
    Select the ID of the node for which you want to create an endpoint.
    
    **Account Name**
    
    Create an account that meets the following requirements:
    
    -   Starts with a lowercase letter.
        
    -   Consists of lowercase letters, digits, or underscores (\_).
        
    -   Is 4 to 16 characters in length.
        
    
    **Note**
    
    -   Keywords cannot be used as account names in ApsaraDB for MongoDB.
        
    -   The account has read-only permissions.
        
    -   When you apply for an endpoint for a shard or Configserver node for the first time, you must set an account and password. You do not need to set them again for subsequent applications.
        
    
    **Account Password**
    
    Set a password that meets the following requirements:
    
    -   Consists of at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
        
        The special characters are !@#$%^&\*()\_+-=.
        
    -   Is 8 to 32 characters in length.
        
    
    **Note**
    
    ApsaraDB for MongoDB lets you reset the passwords of accounts for Configserver and shard nodes. For more information, see [Reset a password](/help/en/mongodb/user-guide/reset-the-password-of-an-account-for-an-apsaradb-for-mongodb-instance#concept-lps-vqr-33b).
    
    **Confirm Password**
    
    Enter the password again.
    
5.  Click **OK**.
    
6.  On the **Database Connections** page, you can view the endpoint.
    
    1.  Wait for the instance status to update from **Creating Network Connection** to **Running**.
        
    2.  In the **Internal Connections** section, you can view the endpoint of the node.
        

## References

If you no longer need the shard endpoint, you can release it. For more information, see [Release the endpoint of a shard or Configserver node](/help/en/mongodb/user-guide/release-the-endpoint-of-a-shard-or-configserver-node#task-1941931).
