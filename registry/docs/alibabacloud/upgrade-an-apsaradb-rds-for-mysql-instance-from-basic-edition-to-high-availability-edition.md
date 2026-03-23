If your ApsaraDB RDS for MySQL instance runs on Basic Edition (single-node), you can upgrade it to High-availability Edition to add a secondary node with automatic failover. This upgrade supports MySQL 5.7 and MySQL 8.0.

This upgrade is irreversible. After the upgrade, the instance cannot be downgraded back to Basic Edition.

For fee details, see [Change instance specifications](/help/en/rds/product-overview/specification-changes#concept-syv-qk2-vdb).

## Basic Edition vs. High-availability Edition

**Feature**

**Basic Edition**

**High-availability Edition**

**Architecture**

Single node

Primary + secondary node

**Failover**

No automatic failover

Automatic instance switchover

**Applicable scenarios**

Personal learning, small websites, development and testing

Production workloads (80%+ of business scenarios)

## Prerequisites

Before you begin, make sure that:

-   The instance uses the subscription or pay-as-you-go billing method.
    
    **Note**
    
    For instances that use the serverless billing method, follow the instructions in [Configure a serverless ApsaraDB RDS for MySQL instance](/help/en/doc-detail/421557.html#section-7uf-kuc-xwf).
    
-   The instance runs MySQL 8.0 or MySQL 5.7 on RDS Basic Edition. Check this on the **Basic Information** page of the instance.
    
-   The minor engine version is 20211231 or later. To update the minor engine version, see [Upgrade the minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb11).
    
    **Note**
    
    This prerequisite does not apply to MySQL 5.7 Basic Edition instances with standard SSDs that are upgrading to High-availability Edition with Premium Local SSDs.
    
-   The instance is not a read-only instance. Read-only instances cannot be upgraded from Basic Edition to High-availability Edition.
    

## Impact of the upgrade

-   The upgrade can trigger a data migration, which may take a few minutes. After the migration is complete, an instance switchover is triggered at the switching time that you specify. Make sure that your application is configured to automatically reconnect to the instance. For more information, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
    
    **Note**
    
    The endpoint of the instance remains unchanged after the upgrade. No changes to application configurations are required.
    
-   After the upgrade completes, the instance cannot be downgraded back to Basic Edition.
    

## Upgrade to High-availability Edition

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the **Configuration Information** section, click **Change Specifications**.
    
3.  (Subscription instances only) Select **Upgrade** and click **Next**.
    
4.  Configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Edition**
    
    Select **High-availability Edition**.
    
    **Storage Type**
    
    Optional. Change the storage type from standard SSD to Premium Local SSD. This parameter is available only for MySQL 5.7 Basic Edition instances.
    
    **Switching Time**
    
    Select when the workload switchover occurs: **Switch Immediately After Data Migration** or **Switch Within Maintenance Window**.
    
5.  Read and select **Terms of Service**, click **Confirm Order**, and complete the payment.
    

## API reference

**Operation**

**Description**

[ModifyDBInstanceSpec](/help/en/rds/api-change-instance-configuration#doc-api-Rds-ModifyDBInstanceSpec)

Changes the specifications of an instance.
