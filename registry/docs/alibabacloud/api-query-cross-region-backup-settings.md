Queries cross-region backup settings of an ApsaraDB for RDS instance.

Before you call this operation, make sure that the instance runs one of the following database engine versions and RDS editions:

-   MySQL 8.0 in the High-availability Edition (with local SSDs)
-   MySQL 5.7 in the High-availability Edition (with local SSDs)
-   MySQL 5.6

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=DescribeInstanceCrossBackupPolicy&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

DescribeInstanceCrossBackupPolicy

The operation that you want to perform. Set the value to **DescribeInstanceCrossBackupPolicy**.

DBInstanceId

String

Yes

rm-uf6wjk5xxxxxxxxxx

The ID of the instance.

RegionId

String

Yes

cn-hangzhou

The ID of the region. You can call the [DescribeRegions](/help/en/rds/api-query-regions) operation to query the most recent region list.

## Response parameters

   

Parameter

Type

Example

Description

BackupEnabled

String

Enable

The status of the overall cross-region backup switch on the instance. Valid values:

-   **Disable**
-   **Enable**

BackupEnabledTime

String

2019-06-12T05:44:21Z

The time when cross-region backup was enabled on the instance. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

CrossBackupRegion

String

cn-shanghai

The ID of the destination region where cross-region backups of the instance are stored.

CrossBackupType

String

1

The policy that is used to save cross-region backups of the instance. Default value: **1**. The default value 1 indicates that all cross-region backups are saved.

DBInstanceDescription

String

Test database

The name of the instance. The name is 2 to 256 characters in length. It can contain letters, digits, underscores (\_), and hyphens (-) and must start with a letter.

**Note** The name of the instance cannot start with http:// or https://.

DBInstanceId

String

rm-uf6wjk5xxxxxxxxxx

The ID of the instance.

DBInstanceStatus

String

Running

The state of the instance. For more information, see [Instance status](/help/en/rds/developer-reference/instance-state-table).

Engine

String

mysql

The type of the database engine.

EngineVersion

String

5.6

The version of the database engine.

LockMode

String

Unlock

The lock status of the instance. Valid values:

-   **Unlock**: The instance is not locked.
-   **ManualLock**: The instance is manually locked.
-   **LockByExpiration**: The instance is locked upon expiration.
-   **LockByRestoration:** The instance is automatically locked before a rollback.
-   **LockByDiskQuota:** The instance is automatically locked because its storage space is exhausted. In this situation, the instance is inaccessible.

LogBackupEnabled

String

Enable

The status of the cross-region log backup switch on the instance. Valid values:

-   **Disable**
-   **Enable**

LogBackupEnabledTime

String

2019-06-12T05:44:21Z

The time when cross-region log backup was enabled on the instance. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

RegionId

String

cn-hangzhou

The region ID of the instance.

RequestId

String

CB7667B2-72C8-497B-9BD8-3B343CEF51AB

The ID of the request.

RetentType

Integer

1

The policy that is used to retain cross-region backups of the instance. Default value: **1**. The default value 1 indicate that cross-region backups are retained based on the specified retention period.

Retention

Integer

15

The number of days for which cross-region backups of the instance are retained. Valid values: **7 to 1825**.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/? Action=DescribeInstanceCrossBackupPolicy
&DBInstanceId=rm-uf6wjk5xxxxxxxxxx
&RegionId=cn-hangzhou
&<Common request parameters>
```

Sample success responses

`XML` format

```
<DescribeInstanceCrossBackupPolicyResponse>
  <DBInstanceStatusDesc>ACTIVATION</DBInstanceStatusDesc>
	  <LockMode>Unlock</LockMode>
	  <BackupEnabledTime>2019-06-12T05:44:21Z</BackupEnabledTime>
	  <CrossBackupType>1</CrossBackupType>
	  <LogBackupEnabled>Enable</LogBackupEnabled>
	  <BackupEnabled>Enable</BackupEnabled>
	  <RetentType>1</RetentType>
	  <DBInstanceId>rm-bpxxxxx</DBInstanceId>
	  <DBInstanceDescription></DBInstanceDescription>
	  <Retention>15</Retention>
	  <Engine>mysql</Engine>
	  <LogBackupEnabledTime>2019-06-12T05:44:21Z</LogBackupEnabledTime>
	  <CrossBackupRegion>cn-shanghai</CrossBackupRegion>
	  <StorageOwner>rds</StorageOwner>
	  <RegionId>cn-hangzhou</RegionId>
	  <RequestId>CB7667B2-72C8-497B-9BD8-3B343CEF51AB</RequestId>
	  <EngineVersion>5.6</EngineVersion>
	  <StorageType>oss</StorageType>
	  <Endpoint></Endpoint>
	  <DBInstanceStatus>1</DBInstanceStatus>
</DescribeInstanceCrossBackupPolicyResponse>
```

`JSON` format

```
{
	"DBInstanceStatusDesc": "ACTIVATION",
	"LockMode": "Unlock",
	"BackupEnabledTime": "2019-06-12T05:44:21Z",
	"CrossBackupType": "1",
	"LogBackupEnabled": "Enable",
	"BackupEnabled": "Enable",
	"RetentType": 1,
	"DBInstanceId": "rm-bpxxxxx",
	"DBInstanceDescription": "",
	"Retention": 15,
	"Engine": "mysql",
	"LogBackupEnabledTime": "2019-06-12T05:44:21Z",
	"CrossBackupRegion": "cn-shanghai",
	"StorageOwner": "rds",
	"RegionId": "cn-hangzhou",
	"RequestId": "CB7667B2-72C8-497B-9BD8-3B343CEF51AB",
	"EngineVersion": "5.6",
	"StorageType": "oss",
	"Endpoint": "",
	"DBInstanceStatus": "1"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).
