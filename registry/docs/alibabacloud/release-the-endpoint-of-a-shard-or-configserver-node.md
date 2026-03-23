This topic describes how to release the internal endpoint of a shard or the ConfigServer component in a sharded cluster instance.

## Prerequisites

The sharded cluster instance uses the MongoDB protocol.

## Usage notes

-   The endpoint of a mongos node cannot be released.
    
-   Before you release the endpoint of a shard or the ConfigServer component in your sharded cluster instance, keep the **account** and **password** of the component. If you forget the password, manually [reset a password](/help/en/mongodb/user-guide/reset-the-password-of-an-account-for-an-apsaradb-for-mongodb-instance).
    
-   When the endpoint of a shard or the ConfigServer component in a sharded cluster instance is released, the endpoints and IP addresses of all nodes in the component is released. Additionally, you can no longer connect to a node by using its endpoint. Proceed with caution.
    
-   The procedure in this topic releases only the internal endpoint of a shard or the ConfigServer component in a sharded cluster instance. To release the public endpoint of a shard or the ConfigServer component in a sharded cluster instance, see [Release a public endpoint](/help/en/mongodb/user-guide/release-a-public-endpoint#concept-ln2-gyr-gfb).
    
-   ApsaraDB for MongoDB does not allow you to apply for an endpoint for the ConfigServer component in a sharded cluster instance. This change does not affect existing ConfigServer endpoints. However, released ConfigServer endpoints cannot be re-applied.
    

## Procedure

1.  Go to the [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the top navigation bar, select the resource group and region to which the desired instance belongs. Then, find the instance and click the instance ID.
    
2.  In the left-side navigation pane of the instance details page, click **Database Connections**.
    
3.  In the **Internal Connections - VPC** section, find the node whose endpoint you want to release and click **Release** in the **Actions** column.
    
4.  In the **Confirm Release** message, click **OK**.
    
    When the instance state changes from **Releasing Connection** to **Running**, the endpoint is released.
