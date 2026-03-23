Performs a master-replica switchover to switch node roles. This operation is applicable to disaster recovery drills and nearby access to applications that are deployed across zones.

## Operation description

**Note** For more information about nearby access to applications that are deployed across zones, see [Switch node roles](/help/en/redis/user-guide/manually-switch-workloads-from-a-master-node-to-a-replica-node).

The instance must be a Redis Open-Source Edition instance or Tair (Enterprise Edition) [DRAM-based](/help/en/redis/product-overview/dram-based-instances) instance that uses local disks.

A call to this operation has the following impacts on your instance:

-   The data shards in the instance may change to the read-only state and experience transient connections within seconds. Make sure that your application is configured to automatically reconnect to the instance.
-   If the instance enters the switching state, you cannot manage this instance. For example, you cannot modify the instance configurations or migrate the instance to another zone.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/SwitchInstanceHA)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/SwitchInstanceHA)

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

kvstore:SwitchInstanceHA

update

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

InstanceId

string

Yes

The ID of the instance. You can call the [DescribeInstances](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeinstances-redis) operation to query the ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

NodeId

string

No

The ID of the data shard. You can call the [DescribeRoleZoneInfo](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describerolezoneinfo-redis) operation to obtain the value of the CustinsId parameter. Separate multiple data shard IDs with commas (,). `all` indicates that all data shards are specified.

**Note** This parameter is available and required only for read/write splitting and cluster instances.

56\*\*\*\*19,56\*\*\*\*20

SwitchMode

integer

No

The time when to perform the switchover. Default value: 0. Valid values:

-   **0**: immediately performs the switchover.
-   **1**: performs the switchover during the maintenance window.

**Note** You can call the [ModifyInstanceMaintainTime](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstancemaintaintime-redis) operation to modify the maintenance window of a Tair (Redis OSS-compatible) instance.

0

SwitchType

string

Yes

The switching mode. Valid values:

-   **AvailablePriority**: immediately performs a switchover by prioritizing availability. No latency of data synchronization between the master and replica nodes is considered. This may cause data loss.
-   **ReliabilityPriority**: performs a switchover by prioritizing reliability. Make sure that no latency of data synchronization between the master and replica nodes exists. This ensures data integrity. This mode may cause switchover failures in scenarios where a large volume of data is written and data synchronization latency consistently exists.

**Note** You must evaluate the requirements for data and services based on your business scenarios and then select a switching mode.

AvailablePriority

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

5D622714-AEDD-4609-9167-F5DDD3D1\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "5D622714-AEDD-4609-9167-F5DDD3D1****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-07-20

API Description Update

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/SwitchInstanceHA?updateTime=2023-07-20#workbench-doc-change-demo)
