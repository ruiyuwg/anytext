Queries ApsaraDB for RDS instances on which cross-region backup is enabled in a region and the cross-region backup settings of these instances.

Before you call this operation, make sure that the instance runs one of the following database engine versions and RDS editions:

-   MySQL 8.0 in the High-availability Edition (with local SSDs)
-   MySQL 5.7 in the High-availability Edition (with local SSDs)
-   MySQL 5.6

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=DescribeCrossRegionBackupDBInstance&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

DescribeCrossRegionBackupDBInstance

The operation that you want to perform. Set the value to **DescribeCrossRegionBackupDBInstance**.

RegionId

String

Yes

cn-hangzhou

The ID of the region.

DBInstanceId

String

No

rm-uf6wjk5xxxxxxxxxx

The ID of the instance. Up to 30 instance IDs are allowed in a single request. If you enter more than one instance ID, separate them with commas (,).

PageSize

Integer

No

30

The number of entries to return on each page. Default value: 30

PageNumber

Integer

No

1

The number of the page to return. Valid values: a non-zero positive integer.

Default value: **1**.

## Response parameters

   

Parameter

Type

Example

Description

RegionId

String

cn-hangzhou

The ID of the region.

TotalRecords

Integer

100

The total number of entries returned.

ItemsNumbers

Integer

1

The total number of items returned for cross-region backup settings.

PageNumber

Integer

1

The page number of the returned page. Valid values: a non-zero positive integer.

Default value: **1**.

PageSize

Integer

30

The number of entries returned per page. Default value: 30.

RequestId

String

33517002-182D-40BE-93EC-610BD3381045

The ID of the request.

Items

Array

An array that consists of instances and their cross-region backup settings.

Item

BackupEnabled

String

Enable

The status of the overall cross-region backup switch on the instance. Valid values:

-   **Disable**
-   **Enable**

BackupEnabledTime

String

2019-06-12T05:44:21Z

The time when cross-region data backup was enabled on the instance. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

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

The status of the instance. For more information, see [Instance status table](/help/en/rds/developer-reference/instance-state-table).

Engine

String

MySQL

The database engine.

EngineVersion

String

5.6

The version of the database engine.

LockMode

String

Unlock

The lock status of the instance. Valid values:

-   **Unlock:** The instance is not locked.
-   **ManualLock:** The instance is manually locked.
-   **LockByExpiration:** The instance is automatically locked upon expiration.
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

RetentType

Integer

1

The policy that is used to retain cross-region backups of the instance. Cross-region backups can be retained only based on the specified retention period. Default value: **1**.

Retention

Integer

15

The number of days for which cross-region backups of the instance are retained. Valid values: **7 to 1825**.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/? Action=DescribeCrossRegionBackupDBInstance
&RegionId=cn-hangzhou
&<Common request parameters>
```

Sample success responses

`XML` format

```
<DescribeCrossRegionBackupDBInstanceResponse>
  <Items>
		    <Item>
			      <LockMode>Unlock</LockMode>
			      <CrossBackupType>1</CrossBackupType>
			      <LogBackupEnabled>Enable</LogBackupEnabled>
			      <BackupEnabledTime>2019-06-12T05:44:21Z</BackupEnabledTime>
			      <BackupEnabled>Enable</BackupEnabled>
			      <RetentType>1</RetentType>
			      <DBInstanceId>rm-bpxxxxx</DBInstanceId>
			      <Retention>15</Retention>
			      <DBInstanceDescription>Test database</DBInstanceDescription>
			      <Engine>MySQL</Engine>
			      <LogBackupEnabledTime>2019-06-12T05:44:21Z</LogBackupEnabledTime>
			      <CrossBackupRegion>cn-shanghai</CrossBackupRegion>
			      <EngineVersion>5.6</EngineVersion>
			      <DBInstanceStatus>Running</DBInstanceStatus>
		    </Item>
	  </Items>
	  <PageNumber>1</PageNumber>
	  <RegionId>cn-hangzhou</RegionId>
	  <RequestId>33517002-182D-40BE-93EC-610BD3381045</RequestId>
	  <ItemsNumbers>1</ItemsNumbers>
	  <TotalRecords>1</TotalRecords>
</DescribeCrossRegionBackupDBInstanceResponse>
```

`JSON` format

```
{
    "Items": {
        "Item": [
            {
                "LockMode": "Unlock",
                "CrossBackupType": "1",
                "LogBackupEnabled": "Enable",
                "BackupEnabledTime": "2019-06-12T05:44:21Z",
                "BackupEnabled": "Enable",
                "RetentType": 1,
                "DBInstanceId": "rm-bpxxxxx",
                "Retention": 15,
                "DBInstanceDescription": "Test database",
                "Engine": "MySQL",
                "LogBackupEnabledTime": "2019-06-12T05:44:21Z",
                "CrossBackupRegion": "cn-shanghai",
                "EngineVersion": "5.6",
                "DBInstanceStatus": "Running"
            }
        ]
    },
    "PageNumber": 1,
    "RegionId": "cn-hangzhou",
    "RequestId": "33517002-182D-40BE-93EC-610BD3381045",
    "ItemsNumbers": 1,
    "TotalRecords": 1
}
```

## Error codes

   

HttpCode

Error code

Error message

Description

403

IncorrectDBInstanceEngine

Current DB Instance engine does not support this operation.

The error message returned because the database engine of the instance does not support this operation.

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).
