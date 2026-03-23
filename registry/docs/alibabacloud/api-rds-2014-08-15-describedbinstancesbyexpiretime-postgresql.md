Queries the information about an ApsaraDB RDS instance based on the remaining subscription duration of an instance.

## Operation description

### [](#supported-database-engines)Supported database engines

-   RDS MySQL
-   RDS PostgreSQL
-   RDS SQL Server
-   RDS MariaDB

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstancesByExpireTime)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstancesByExpireTime)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

rds:DescribeDBInstancesByExpireTime

get

\*All Resources

`*`

-   rds:ResourceTag

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

No

The region ID. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

proxyId

string

No

A deprecated parameter. You do not need to configure this parameter.

None

ExpirePeriod

integer

No

The number of remaining days for which the instances are available. Valid values: **0 to 180**.

180

Expired

boolean

No

Specifies whether to query instances that have expired. Valid values:

-   **True**: queries instances that have expired.
-   **False**: does not query instances that have expired.

True

PageSize

integer

No

The number of entries to return on each page. Valid values: **1 to 100**.

Default value: **30**.

30

PageNumber

integer

No

The number of the page to return. Valid values: any **non-zero** positive integer.

Default value: **1**.

1

Tags

string

No

The tag that is added to the instance. Each tag is a key-value pair that consists of two parts: TagKey and TagValue. You can specify a maximum of five tags in the following format for each request: `{"key1":"value1","key2":"value2"...}`.

{"key1":"value1"}

ResourceGroupId

string

No

The resource group ID. You can call the DescribeDBInstanceAttribute operation to obtain the resource group ID.

rg-acfmy\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The ID of the request.

1AD222E9-E606-4A42-BF6D-8A4442913CEF

PageNumber

integer

The page number of the returned page. Valid values: any **non-zero** positive integer.

Default value: **1**.

1

PageRecordCount

integer

The number of instances returned on the current page.

2

TotalRecordCount

integer

The total number of returned entries.

200

Items

array<object>

The details of the instances.

DBInstanceExpireTime

object

ExpireTime

string

The expiration time of the instance. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

**Note** : Pay-as-you-go instances never expire.

2019-03-27T16:00:00Z

PayType

string

The billing method of the instance. Valid values:

-   **Postpaid**: pay-as-you-go.
-   **Prepaid**: subscription.

Prepaid

DBInstanceId

string

The instance ID.

rm-uf6wjk5xxxxxxx

DBInstanceStatus

string

The status of the instance. For more information, see [Instance state table](/help/en/rds/developer-reference/instance-state-table).

Running

DBInstanceDescription

string

The description of the instance.

Test database

LockMode

string

The lock mode of the instance. Valid values:

-   **Unlock**: The instance is not locked.
-   **ManualLock**: The instance is manually locked.
-   **LockByExpiration**: The instance is automatically locked after it expires.
-   **LockByRestoration**: The instance is automatically locked before it is rolled back.
-   **LockByDiskQuota**: The instance is automatically locked after its storage capacity is exhausted.
-   **LockReadInstanceByDiskQuota**: The instance is a read-only instance and is automatically locked after its storage capacity is exhausted.

Unlock

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1AD222E9-E606-4A42-BF6D-8A4442913CEF",
  "PageNumber": 1,
  "PageRecordCount": 2,
  "TotalRecordCount": 200,
  "Items": {
    "DBInstanceExpireTime": [
      {
        "ExpireTime": "2019-03-27T16:00:00Z",
        "PayType": "Prepaid",
        "DBInstanceId": "rm-uf6wjk5xxxxxxx",
        "DBInstanceStatus": "Running",
        "DBInstanceDescription": "Test database\n",
        "LockMode": "Unlock"
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstancesByExpireTime?updateTime=2024-11-20#workbench-doc-change-demo)

2023-07-25

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstancesByExpireTime?updateTime=2023-07-25#workbench-doc-change-demo)
