If Alibaba Cloud detects that an AccessKey pair has been publicly exposed, we automatically apply a restrictive protection policy. This policy limits the AccessKey pair's permissions by blocking high-risk API operations to mitigate the risk of account takeover, data breaches, and unauthorized charges.

## **Identify restrictive protection**

If you receive the following error message when making an API call, it means the AccessKey pair you are using is under restrictive protection.

```
Forbidden : There is a risk of leakage of this AccessKey.
```

## **Scope of restrictive protection**

This protection blocks a specific set of high-risk API operations for the compromised AccessKey pair. The restriction applies to all calls made with the AccessKey pair, regardless of the source IP address. The list of blocked API operations is subject to change. For more information, see the "[Blocked high-risk API operations](#fe8b473080r3d)" section in this topic.

## **Remove restrictive protection**

Restrictive protection cannot be disabled directly. Because a compromised AccessKey pair poses an ongoing security risk, the only way to remove this protection is to delete or rotate the AccessKey pair.

This protection is only a temporary safeguard. Attackers may still be able to use the compromised AccessKey pair to call API operations that are not on the high-risk list. To fully secure your account, you must delete or rotate the compromised AccessKey pair immediately. For more information, see [Remediate a compromised AccessKey pair](/help/en/ram/user-guide/solution-to-accesskey-leakage).

If you need assistance, or if you believe this protection was applied in error, go to the [emergency response wizard page](https://yundun.console.aliyun.com/?p=sc_eg#/ak/overview) and click **Contact Support**.

## **Blocked high-risk API operations**

**Cloud service**

**API version**

**API operation**

**Description**

Resource Access Management (RAM)

2015-05-01

All

N/A

Identity Management Service (IMS)

2019-08-15

All

N/A

Elastic Compute Service (ECS)

2014-05-26

RunInstances

Creates one or more pay-as-you-go or subscription ECS instances.

CreateInstance

Creates a subscription or pay-as-you-go ECS instance.

CreateAutoProvisioningGroup

Creates an auto provisioning group.

StartInstance

Starts an ECS instance.

StartInstances

Starts multiple ECS instances at a time.

RunCommand

Runs commands on ECS instances.

DeleteInstance

Deletes an ECS instance.

DeleteInstances

Deletes multiple ECS instances at a time.

DeleteSnapshotGroup

Deletes a snapshot-consistent group.

DeleteSnapshot

Deletes a snapshot.

DeleteImage

Deletes a custom image.

CreateCommand

Creates a Cloud Assistant command.

InvokeCommand

Runs a Cloud Assistant command on one or more ECS instances.

Elastic Container Instance

2018-08-08

CreateContainerGroup

Creates a container group.

CreateContainerGroupFromTemplate

Creates a container group by using a template.

BatchCreateContainerGroups

Creates multiple container groups at a time.

DeleteContainerGroup

Deletes a container group.

DeleteContainerGroups

Deletes multiple container groups at a time.

Short Message Service (SMS)

2017-05-25

AddSmsTemplate

Creates a message template.

SendSms

Sends a message.

SendBatchSms

Sends multiple messages at a time.

CreateSmsTemplate

Creates a message template.

Elastic Desktop Service

2020-09-30

StartDesktops

Starts cloud computers.

CreateDesktops

Creates cloud computers.

CreateDesktopGroup

Creates a cloud computer pool.

ModifyDesktopGroup

Modifies the configurations of a cloud computer pool.

RebootDesktops

Restarts cloud computers.

RebuildDesktops

Recreates cloud computers.

GetConnectionTicket

Obtains a connection credential for a cloud computer.

ModifyDesktopSpec

Changes the instance type or scales up the disks of a cloud computer.

RunCommand

Runs a command on cloud computers.

Performance Testing Service

2019-08-10

StartJMeterTesting

Starts an Apache JMeter test.

SaveJMeterScene

Saves a test scenario in Apache JMeter.

CreateJMeterScene

Creates an Apache JMeter test scenario.

CreateCronJob

Creates a scheduled stress testing task.

StartSceneTesting

Starts a stress testing task.

StartDebugging

Starts a debugging task.

CreateScene

Creates a test scenario.

SaveScene

Saves a test scenario.

Performance Testing Service

2020-10-20

SaveOpenJMeterScene

Saves a test scenario.

StartDebuggingJMeterScene

Debugs a test scenario.

StartTestingJMeterScene

Starts a stress test in a JMeter scenario.

SavePtsScene

Saves or modifies a test scenario.

CreatePtsScene

Creates a test scenario.

StartDebugPtsScene

Starts test scenario debugging.

StartPtsScene

Starts a test scenario.

ApsaraDB RDS for MySQL

2014-08-15

ModifyBackupPolicy

Modifies the backup policy settings of an ApsaraDB RDS for MySQL instance.

DeleteBackup

Deletes the data backup files of an ApsaraDB RDS for MySQL instance.

DescribeBackups

Queries the data backup files of an ApsaraDB RDS for MySQL instance.

DeleteDBInstance

Releases an ApsaraDB RDS for MySQL instance.

DestroyDBInstance

Permanently deletes an ApsaraDB RDS for MySQL instance.

DeleteDatabase

Deletes a database from an ApsaraDB RDS for MySQL instance.

CreateAccount

Creates a database account.

ResetAccountPassword

Resets the password of a database account.

ResetAccount

Resets the permissions of a privileged account.

GrantAccountPrivilege

Grants an account access to databases in an ApsaraDB RDS instance.

Data Disaster Recovery

2021-01-01

ModifyBackupStrategy

Modifies a backup schedule.

CreateDownload

Creates a download task.

DescribeDownloadBackupSetStorageInfo

Queries the storage information for a downloaded backup set.

Alibaba Cloud DNS (DNS)

2015-01-09

DeleteDomain

Deletes a domain name.

AddDomainRecord

Adds a DNS record.

DeleteDomainRecord

Deletes a DNS record.

UpdateDomainRecord

Modifies a DNS record.

SetDomainRecordStatus

Changes the status of a DNS record.

Alibaba Cloud Billing

2017-12-14

RefundInstance

Unsubscribes from an instance.

Elastic High Performance Computing (E-HPC) Instant Computing Service

2023-07-01

CreateJob

Create an E-HPC Instant job.

CreatePool

Create a resource pool.

E-HPC

2024-07-30

CreateCluster

Creates an E-HPC cluster.

CreateNodes

Creates multiple compute nodes at a time.

Data Management (DMS)

2018-11-01

CreateOrder

Create a ticket.

CreateDataExportOrder

Creates a ticket to export an SQL result set.

CreateDatabaseExportOrder

Creates a ticket to export a database.

CreateDataCorrectOrder

Creates a standard data modification ticket.

CreateDataCronClearOrder

Creates a ticket to clear historical data.

CreateDataImportOrder

Creates a ticket to import data.

CreateFreeLockCorrectOrder

Creates a lock-free change ticket.

GetDataExportDownloadURL

Retrieves the download URL for a data export file.

GetDbExportDownloadURL

Retrieves the download URL for a database export file.

CreateProcCorrectOrder

Creates a ticket to modify programmable objects.
