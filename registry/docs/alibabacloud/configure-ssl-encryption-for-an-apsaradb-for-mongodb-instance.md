Secure Sockets Layer (SSL) encryption protects data at the transport layer during transmission between your application and ApsaraDB for MongoDB. Enable SSL when clients connect over the public network to prevent eavesdropping and tampering.

## Prerequisites

The instance must be one of the following types:

-   Replica set instance
    
-   Sharded cluster instance that uses cloud disks
    

## Usage notes

**Item**

**Details**

Certificate download

SSL CA certificates can only be downloaded from the ApsaraDB for MongoDB console

Performance impact

Enabling SSL increases CPU utilization. Internal network connections are relatively secure and generally do not require encryption

Connection modes

After SSL is enabled, both SSL and non-SSL connections are supported. To reject non-SSL connections, enable **Forced SSL**

Endpoint changes

If you modify an endpoint or apply for a new endpoint (such as a node endpoint or public endpoint) after enabling SSL, the new endpoint does not support SSL-encrypted connections until you update the server certificate

## Impacts

Enabling SSL, disabling SSL, and updating an SSL certificate all cause the instance to restart. During the restart, nodes restart in a rolling manner, with a transient disconnection of about 30 seconds per node. If the instance has many collections (for example, more than 10,000), the disconnection lasts longer.

Make sure your application has a reconnection mechanism, and schedule these operations during off-peak hours.

## Enable SSL encryption

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) or [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the top navigation bar, select a resource group and a region. Then, click the ID of the target instance.
    
2.  In the left-side navigation pane, click **Data Security** > **SSL**.
    
3.  Turn on the switch next to **SSL Status**.
    
4.  In the **Enable SSL** dialog box, select whether to enable **Forced SSL**, and select an option for **Effective At**.
    
    > If you enable **Forced SSL**, non-SSL connections are rejected. For **Effective At**, you can select **Effective Immediately** or **Effective Within Maintenance Window**.
    
5.  Click **OK**.
    

The instance state changes to **Updating SSL**. SSL encryption is enabled when the SSL status changes to **Enabled** and the instance state changes to **Running**.

## Download an SSL CA certificate

After you enable SSL, download the CA certificate and install it on your application to establish encrypted connections.

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) or [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the top navigation bar, select a resource group and a region. Then, click the ID of the target instance.
    
2.  In the left-side navigation pane, click **Data Security** > **SSL**.
    
3.  Click **Download Certificate** to download the SSL CA certificate to your computer.
    

For details about using the certificate to connect, see [Use the mongo shell to connect to a database over an SSL-encrypted connection](/help/en/mongodb/user-guide/use-the-mongo-shell-to-connect-to-an-apsaradb-for-mongodb-database-in-ssl-encryption-mode).

## Update the server certificate

The server certificate is valid for one year. If the certificate expires and is not updated, client programs that use encrypted connections cannot connect to the instance.

Before the certificate expires, Alibaba Cloud sends notifications by text message, email, and internal message in the Event Center. The certificate is also automatically updated within a specific time period. To customize the update time, configure **Schedule Event**. For more information, see [Scheduled events](/help/en/mongodb/user-guide/view-and-manage-scheduled-events).

After the server certificate is automatically updated, client programs that use encrypted connections can connect to the database without having to download and reconfigure the CA certificate.

To manually update the server certificate:

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) page. In the top navigation bar, select a resource group and a region. Then, click the ID of the target instance.
    
2.  In the left-side navigation pane, click **Data Security** > **SSL**.
    
3.  Click **Update Certificate**.
    
4.  In the **Update SSL** dialog box, click **OK**.
    

The instance state changes to **Updating SSL**. The certificate is updated when the instance state changes to **Running**.

## Disable SSL encryption

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) page. In the top navigation bar, select a resource group and a region. Then, click the ID of the target instance.
    
2.  In the left-side navigation pane, click **Data Security** > **SSL**.
    
3.  Turn off the switch next to **SSL Status**.
    
4.  In the **Disable SSL** dialog box, select an option for **Effective At**, and then click **OK**.
    
    > You can select **Effective Immediately** or **Effective Within Maintenance Window**.
    

The instance state changes to **Updating SSL**. SSL encryption is disabled when the instance state changes to **Running**.

## API reference

**API**

**Description**

[DescribeDBInstanceSSL](/help/en/mongodb/api-describedbinstancessl)

Query the SSL settings of an instance

[ModifyDBInstanceSSL](/help/en/mongodb/api-modifydbinstancessl)

Modify the SSL settings of an instance
