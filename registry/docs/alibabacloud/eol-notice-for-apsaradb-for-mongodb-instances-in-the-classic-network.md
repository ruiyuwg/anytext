Since 2011, Alibaba Cloud has used the classic network to host cloud services. In 2014, Virtual Private Cloud (VPC) was introduced, offering stronger security, greater stability, and more flexibility. ApsaraDB for MongoDB is ending support for instances on the classic network. Migrate your instances to VPC before the end-of-life (EOL) date using the tools, guides, and support that Alibaba Cloud provides.

## Timeline

**Date**

**Milestone**

**Impact**

February 21, 2022

New purchases stopped

You can no longer create ApsaraDB for MongoDB instances on the classic network.

October 30, 2024

Renewals, configuration changes, and billing method changes disabled

You can no longer renew classic network instances, change their specifications, or change their billing methods.

00:00 on February 28, 2025

Classic network endpoints deleted

The system deletes classic network endpoints. Business connections that use these endpoints are disconnected and cannot be automatically restored.

**Note**

All ApsaraDB for MongoDB instances on the classic network are affected, including instances in hybrid access mode (classic network + VPC), even if the instances are not connected through their classic network endpoints.

**Note**

The forced disabling of classic networks is implemented in batches. Alibaba Cloud notifies you of the specific timing by SMS, email, and internal message. Before the forced disabling, instances remain in the stage where renewals and configuration changes are restricted.

## Additional impacts after February 28, 2025

-   If an instance has only classic network endpoints and your account has VPCs, the system may switch the network connection to a random VPC when the classic network endpoints are deleted.
    
-   After February 28, 2025, or after the forced disabling of classic network endpoints, billing continues normally. Release affected instances if you no longer need them.
    
-   ApsaraDB for MongoDB instances deployed solely in VPCs are **not** affected.
    
-   If you switch the network type and release the classic network endpoints before these dates, your instances are **not** affected.
    

## Identify affected instances

### Console

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Replica Set Instances** or **Sharded Cluster Instances**.
    
3.  In the upper-left corner of the page, select the resource group and region of the target instances.
    
4.  In the instance list, filter by **Network Type**, select **Classic Network**, and then click **OK**.
    

### API

Call the [DescribeInstances](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeinstances-redis) operation and set the `NetworkType` parameter to `CLASSIC` to query all ApsaraDB for MongoDB instances on the classic network in a region.

### Hybrid access instances

For instances in hybrid access mode, check your internal messages and emails for details of the affected instances. After you receive the notification, switch the network type in the console to prevent impacts on your instances. The **Network Type** value for these instances is displayed as **VPC**.

## Switch the network type from classic network to VPC

**Important**

The following methods apply only to **ApsaraDB for MongoDB instances that use local disks**. If your instances use cloud disks, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to contact technical support for migration assistance.

To avoid business disruption, switch the network type before the EOL date. Choose from two methods:

### Direct switch

Use this method if you do not need to retain the original classic network endpoint during the switch. The VPC uses the original classic network endpoint, so you do not need to modify the connection string on your client.

**Important**

The instance experiences a transient disconnection during the switch.

For details, see [Switch the network type of an instance from classic network to VPC](/help/en/mongodb/user-guide/switch-the-network-type-of-an-apsaradb-for-mongodb-instance-from-classic-network-to-vpc#concept-f3s-fys-2fb).

### Hybrid access migration

Use this method to migrate an instance from the classic network to a VPC without transient disconnections or access interruptions.

**Important**

Although the instance does not experience transient disconnections, you must modify the connection string on your client to use the VPC endpoint.

For details, see [Configure a hybrid access solution to switch the network type of an instance from classic network to VPC](/help/en/mongodb/user-guide/configure-a-hybrid-access-solution-to-switch-the-network-type-of-an-apsaradb-for-mongodb-instance-from-classic-network-to-vpc#concept-ysg-ngz-lgb).

### Choosing a method

**Criterion**

**Direct switch**

**Hybrid access migration**

Transient disconnection

Yes

No

Connection string change required

No

Yes

Best for

Quick migration during a maintenance window

Gradual migration without disconnections

### Release classic network endpoints after hybrid access migration

After hybrid access migration, release the classic network endpoint once the service switchover is complete:

-   **Console:** See [Change the retention period of internal endpoints on the classic network of an instance](/help/en/mongodb/user-guide/change-the-retention-period-of-internal-endpoints-on-the-classic-network-of-an-apsaradb-for-mongodb-instance).
    
-   **API:** Call the [ModifyDBInstanceNetExpireTime](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancenetexpiretime) operation and set the `ClassicExpendExpiredDays` parameter to `0`.
    

## FAQ

### Why do I receive a notification that the classic network expired but was not released after I switched to a VPC?

The system does not automatically release the classic network after it expires. Go to the ApsaraDB for MongoDB console and manually release it. For details, see [Change the retention period of internal endpoints on the classic network of an instance](/help/en/mongodb/user-guide/change-the-retention-period-of-internal-endpoints-on-the-classic-network-of-an-apsaradb-for-mongodb-instance).

### Why can't I renew my instance after I switched to a VPC?

An instance that still has classic network endpoints cannot be renewed. Release the classic network endpoints first, and then renew the instance. For details, see [Change the retention period of internal endpoints on the classic network of an instance](/help/en/mongodb/user-guide/change-the-retention-period-of-internal-endpoints-on-the-classic-network-of-an-apsaradb-for-mongodb-instance).
