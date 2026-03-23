Queries the details of a distributed Tair (Redis OSS-compatible) instance.

## Operation description

## [](#debugging)Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=R-kvstore&api=DescribeGlobalDistributeCache&type=RPC&version=2015-01-01)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeGlobalDistributeCache)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeGlobalDistributeCache)

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

kvstore:DescribeGlobalDistributeCache

get

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/{#instanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

GlobalInstanceId

string

No

The ID of the distributed instance.

gr-bp14rkqrhac\*\*\*\*

PageNumber

string

No

The number of the page to return. The value must be an integer that is greater than **0**. Default value: **1**.

1

PageSize

string

No

The number of entries to return each page.

20

SubInstanceId

string

No

The ID of the child instance that is attached to the distributed instance.

gr-bp1zcjlobkyrq\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries returned per page.

20

RequestId

string

The ID of the request.

F3F44BE3-5419-4B61-9BAC-E66E295A\*\*\*\*

PageNumber

integer

The page number of the returned page.

1

TotalRecordCount

integer

The total number of entries returned.

1

GlobalDistributeCaches

array<object>

Details of the distributed instance.

GlobalDistributeCache

object

Status

string

The state of the distributed instance. Valid values:

-   **Normal**: The instance is normal.
-   **Changing**: The configurations of the instance are being changed.
-   **Creating**: The instance is being created.

Normal

GlobalInstanceId

string

The ID of the distributed instance.

gr-bp14rkqrhac\*\*\*\*

SubInstances

array<object>

Details of the child instances.

SubInstance

object

InstanceStatus

string

The state of the child instance. Valid values:

-   **Normal**: The instance is normal.
-   **Creating**: The instance is being created.
-   **Changing**: The configurations of the instance are being changed.
-   **Inactive**: The instance is disabled.
-   **Flushing**: The instance is being released.
-   **Released**: The instance is released.
-   **Transforming**: The billing method of the instance is changing.
-   **Unavailable**: The instance is suspended.
-   **Error**: The instance failed to be created.
-   **Migrating**: The instance is being migrated.
-   **BackupRecovering**: The instance is being restored from a backup.
-   **MinorVersionUpgrading**: The minor version of the instance is being updated.
-   **NetworkModifying**: The network type of the instance is being changed.
-   **SSLModifying**: The SSL certificate of the instance is being changed.
-   **MajorVersionUpgrading**: The major version of the instance is being upgraded. The instance remains available during the upgrade.

**Note** For more information about instance states, see [Instance states and impacts](/help/en/redis/user-guide/instance-states-and-impacts).

Normal

InstanceID

string

The ID of the child instance.

r-bp1zxszhcgatnx\*\*\*\*

InstanceClass

string

The instance type of the child instance. For more information, see the following topics:

-   [Standard DRAM-based instances](/help/en/redis/product-overview/dram-standard-instances)
-   [Cluster DRAM-based instances](/help/en/redis/product-overview/cluster-dram-based-instances)
-   [Read/write splitting DRAM-based instances](/help/en/redis/product-overview/read-or-write-splitting-dram-based-instances)

redis.amber.logic.sharding.2g.2db.0rodb.6proxy.multithread

GlobalInstanceId

string

The ID of the distributed instance.

gr-bp14rkqrhac\*\*\*\*

RegionId

string

The ID of the region.

cn-hangzhou

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 20,
  "RequestId": "F3F44BE3-5419-4B61-9BAC-E66E295A****",
  "PageNumber": 1,
  "TotalRecordCount": 1,
  "GlobalDistributeCaches": [
    {
      "Status": "Normal",
      "GlobalInstanceId": "gr-bp14rkqrhac****",
      "SubInstances": [
        {
          "InstanceStatus": "Normal",
          "InstanceID": "r-bp1zxszhcgatnx****",
          "InstanceClass": "redis.amber.logic.sharding.2g.2db.0rodb.6proxy.multithread",
          "GlobalInstanceId": "gr-bp14rkqrhac****",
          "RegionId": "cn-hangzhou"
        }
      ]
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeGlobalDistributeCache?updateTime=2025-03-25#workbench-doc-change-demo)
