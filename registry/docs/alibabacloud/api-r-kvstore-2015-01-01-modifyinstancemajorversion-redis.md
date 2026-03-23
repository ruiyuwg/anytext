Upgrades the major version of a Tair (Redis OSS-compatible) instance.

## Operation description

For more information about the precautions and impacts of the upgrade, see [Upgrade the major version](/help/en/redis/user-guide/upgrade-the-major-version-1).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ModifyInstanceMajorVersion)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ModifyInstanceMajorVersion)

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

kvstore:ModifyInstanceMajorVersion

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

InstanceId

string

Yes

The ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

MajorVersion

string

Yes

The major version to which you want to upgrade the instance. Valid values: **4.0** and **5.0**.

5.0

EffectiveTime

string

No

The time when you want to upgrade the major version. Valid values:

-   **Immediately** (default): immediately upgrades the major version.
-   **MaintainTime**: upgrades the major version within the maintenance window.

**Note** You can call the [ModifyInstanceMaintainTime](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstancemaintaintime-redis) operation to modify the maintenance window of an instance.

Enumeration Value:

-   0
-   1
-   Immediately
-   MaintainTime

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

AA587FB2-2593-4DFE-BE13-2494C2DF\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "AA587FB2-2593-4DFE-BE13-2494C2DF****"
}
```

## Error codes

HTTP status code

Error code

Error message

403

NoQuota

Request zone has no quota to sell.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/ModifyInstanceMajorVersion?updateTime=2025-03-25#workbench-doc-change-demo)
