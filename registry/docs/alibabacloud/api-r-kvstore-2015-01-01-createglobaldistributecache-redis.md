Converts an existing Tair DRAM-based classic instance to the first child instance of a distributed instance.

## Operation description

You can call this operation to convert an existing instance to the first child instance of a distributed instance. After the instance is converted, the distributed instance is created. Before you call this operation, make sure that the following requirements are met:

-   The instance that you want to convert must be a Tair [DRAM-based](/help/en/redis/product-overview/dram-based-instances) instance that uses the classic deployment mode.
-   If the existing instance is a cluster instance, the direct connection mode must be disabled for the instance. For more information, see [Release a private endpoint](/help/en/redis/user-guide/release-a-private-endpoint-from-an-apsaradb-for-redis-instance).

**Note** You can also call the [CreateInstance](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-createinstance-redis) operation to create an instance that is specified as the first child instance of a distributed instance. After the child instance is created, the distributed instance to which the child instance belongs is created.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/CreateGlobalDistributeCache)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/CreateGlobalDistributeCache)

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

kvstore:CreateGlobalDistributeCache

update

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

SeedSubInstanceId

string

Yes

The ID of the existing instance.

r-bp1zxszhcgatnx\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group.

**Note** You do not need to specify system parameters.

rg-acfmyiu4ekp\*\*\*\*

EffectiveTime

string

No

The time when you want to perform the conversion. Valid values:

-   **Immediately**: immediately performs the conversion.
-   **MaintainTime** (default): performs the conversion during the maintenance window.

**Note** You can call the [ModifyInstanceMaintainTime](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstancemaintaintime-redis) operation to modify the maintenance window of an instance.

Immediately

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

E681E498-5A0D-44F2-B1A7-912DC3\*\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "E681E498-5A0D-44F2-B1A7-912DC3******"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-05-30

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/CreateGlobalDistributeCache?updateTime=2025-05-30#workbench-doc-change-demo)

2025-03-25

API Description Update

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/CreateGlobalDistributeCache?updateTime=2025-03-25#workbench-doc-change-demo)

2024-04-22

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/CreateGlobalDistributeCache?updateTime=2024-04-22#workbench-doc-change-demo)

2023-07-25

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/CreateGlobalDistributeCache?updateTime=2023-07-25#workbench-doc-change-demo)

2023-03-02

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/CreateGlobalDistributeCache?updateTime=2023-03-02#workbench-doc-change-demo)
