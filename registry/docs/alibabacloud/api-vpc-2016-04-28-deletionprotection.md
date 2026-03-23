Set the deletion protection feature for an instance.

## Operation description

After you enable deletion protection for an instance, you cannot delete the instance. You must disable deletion protection before you can delete the instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeletionProtection)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeletionProtection)

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

vpc:DeletionProtection

delete

\*Address

`acs:vpc:{#regionId}:{#accountId}:eip/{#AllocationId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The ID of the region where the instance for which you want to enable deletion protection is deployed. You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

ProtectionEnable

boolean

Yes

Specifies whether to enable deletion protection. Valid values:

-   **true**: yes
-   **false**: no

true

Type

string

Yes

The type of instance. Valid values:

-   **EIP**: Elastic IP Address (EIP)
-   **CBWP**: EIP bandwidth plan
-   **NATGW**: NAT gateway

EIP

InstanceId

string

Yes

The ID of the instance for which you want to enable deletion protection.

eip-uf6id7gvguruxe41v\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the value, but you must make sure that it is unique among all requests. ClientToken can contain only ASCII characters.

**Note** If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** may be different for each API request.

123e4567-e89b-12d3-a456-426655440000

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

BAAEF103-96C4-4454-9210-066F2405F511

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "BAAEF103-96C4-4454-9210-066F2405F511"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

DeletionProtection.ResourceNotExist

The resource is not exist.

The resource does not exist.

400

DeletionProtection.PrePaidNotSupport

The prepaid resource is not support.

Subscription resources are not supported.

400

DeletionProtection.TypeNotSupport

The resource is not support.

This type of resource is not supported.

400

DeletionProtection.AlreadyEnabled

The resource deletion protection is already enabled.

Deletion protection is enabled.

400

DeletionProtection.OwnerError

The resource owner error.

The operation is not allowed because the resource does not belong to you.

404

InvalidAllocationId.NotFound

Specified allocation ID is not found

The specified EIP does not exist. Check whether the specified value is valid.

404

DeletionProtection.NotExist

The resource deletion protection is not found

Deletion protection is disabled.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeletionProtection?updateTime=2025-02-08#workbench-doc-change-demo)

2023-05-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeletionProtection?updateTime=2023-05-23#workbench-doc-change-demo)
