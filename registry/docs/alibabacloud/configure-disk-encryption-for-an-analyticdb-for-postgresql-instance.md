This topic describes how to enable disk encryption for an AnalyticDB for PostgreSQL instance in elastic storage mode. The disk encryption feature encrypts the data on each data disk of an AnalyticDB for PostgreSQL instance by using Elastic Block Storage (EBS) to ensure data security. This way, backup data cannot be decrypted even if data leaks occur.

## Overview

After you enable disk encryption for an AnalyticDB for PostgreSQL instance, the system encrypts the following data:

-   Static data that is stored on disks.
    
-   Data transmitted between disks and the instance. Data on the system disk is not encrypted.
    
-   All snapshots that are created from the encrypted disks. These snapshots are called encrypted snapshots.
    

## Usage notes

-   You can enable disk encryption only when you create an AnalyticDB for PostgreSQL instance. You cannot enable disk encryption after you create the instance.
    
-   You cannot disable disk encryption after you enable the feature.
    
-   After you enable disk encryption for an instance, the snapshots that are created for the instance and the new instances that are created from the snapshots are automatically encrypted.
    
-   Disk encryption does not interrupt your business, and you do not need to modify your applications.
    
-   If your Key Management Service (KMS) instance is overdue, the disk data of your AnalyticDB for PostgreSQL instance cannot be decrypted and your AnalyticDB for PostgreSQL instance becomes unavailable. Make sure that your KMS instance runs as expected. For more information, see [What is Key Management Service?](/help/en/kms/key-management-service/support/what-is-key-management-service#concept-28935-zh)
    
-   If you disable or delete the KMS key that is used for disk encryption of an instance, the disk data is lost and your AnalyticDB for PostgreSQL instance becomes unavailable. Do not disable or delete a KMS key that is in use.
    

## Billing rules

The disk encryption feature of AnalyticDB for PostgreSQL is free of charge. You are not charged for the read and write operations that you perform on the encrypted disks.

For information about the charges for KMS, including the fees for hosting keys and calling API operations, see [Billing of KMS](/help/en/kms/key-management-service/support/billing-of-kms#concept-52608-zh).

## Enable disk encryption for an instance

To enable disk encryption when you create an AnalyticDB for PostgreSQL instance, perform the following operations. For more information, see [Create an instance](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/create-an-instance-instance-management#concept-r32-mgr-52b).

1.  Set **Instance Resource Type** to **Elastic Storage Mode**.
    
2.  Select an ESSD storage disk type for the **Storage Disk Type** parameter.
    
3.  Set **Encryption Type** to **Disk Encryption**.
    
4.  Select a key that you want to use to encrypt disks. If no key is available, activate KMS and create a key.
    
    **Note**
    
    -   The disk encryption feature of AnalyticDB for PostgreSQL supports only keys that are manually created. When you create a key in the KMS console, you must disable **Automatic Rotation**. For information about how to create a customer master key (CMK), see [Create a CMK](/help/en/kms/key-management-service/support/create-a-cmk#task-1939967).
        
    -   If you call an API operation to activate KMS, an event log is generated. For more information, see [Use ActionTrail to query KMS event logs](/help/en/kms/key-management-service/support/use-actiontrail-to-query-kms-event-logs#task-2007277).
        
    
5.  Click **Buy Now**. When the instance is created, disk encryption is enabled.
    

## Check whether disk encryption is enabled for an instance

1.  Log on to the [Instances](https://gpdb.console.alibabacloud.com/gpdb/cn-hangzhou/list) page in the AnalyticDB for PostgreSQL console. In the top navigation bar, select a region. Then, find the instance that you want to manage and click the instance ID.
    
2.  In the **Basic Information** section, check whether the **Encryption Key** parameter is displayed. If the parameter is displayed, disk encryption is enabled for the instance.
    

## **Related operations**

Operation

Description

[CreateDBInstance](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-createdbinstance)

Creates an AnalyticDB for PostgreSQL instance.
