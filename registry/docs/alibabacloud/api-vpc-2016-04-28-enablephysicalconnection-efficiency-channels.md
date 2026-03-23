Enables an Express Connect circuit that is in the Confirmed state. After you perform this operation, the Express Connect circuit enters the Enabled state.

## Operation description

When you call this operation, take note of the following limits:

-   You can enable only an Express Connect circuit that is in the **Confirmed** state.
-   After you enable an Express Connect circuit, it enters the **Enabled** state.
-   **EnablePhysicalConnection** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribePhysicalConnections](/help/en/vpc/api-describephysicalconnections) operation to query the status of the task.
-   You cannot repeatedly call **EnablePhysicalConnection** for an Express Connect circuit in the **Confirmed** state within a specific time period.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/EnablePhysicalConnection)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/EnablePhysicalConnection)

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

vpc:EnablePhysicalConnection

update

\*PhysicalConnection

`acs:vpc:{#regionId}:{#accountId}:physicalconnection/{#PhysicalConnectionId}`

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

The region where the Express Connect circuit is deployed.

You can call the DescribeRegions operation to query the most recent region list.

cn-shanghai

PhysicalConnectionId

string

Yes

The ID of the Express Connect circuit.

pc-119mfjz\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

02fb3da4-130e-11e9-8e44-0016e04115b

ByPassSp

boolean

No

Specifies whether to skip the order lifecycle. Valid values:

-   **true**
-   **false** (default)

**Note** To use this feature, you must contact your account manager.

false

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

0ED8D006-F706-4D23-88ED-E11ED28DCAC0

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0ED8D006-F706-4D23-88ED-E11ED28DCAC0"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Forbidden.NotAllowedInState

The request does not allow in this state.

The operation cannot be performed when the Express Connect circuit in the current state.

400

INSTANCE.STATUS.NOT.ALLOW

Instance status not allow

The instance in the current state does not support the operation.

400

ALIUID.NOT.ALLOW.WITHOUT.SP

AliUid not allow direct enable physical connection

You are not allowed to use a physical port when you use an Alibaba Cloud UID.

400

ACCESS.DEVICE.NOT.ALLOW.WITHOUT.SP

Access device not allow direct enable physical connection

The access device is not allowed to use a physical port.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId parameter is set to an invalid value. Specify a valid value and try again.

404

InvalidPhysicalConnectionId.NotFound

The PhysicalConnectionId provided does not exist in our records.

The Express Connect circuit does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-08-08

API Description Update. The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/EnablePhysicalConnection?updateTime=2023-08-08#workbench-doc-change-demo)
