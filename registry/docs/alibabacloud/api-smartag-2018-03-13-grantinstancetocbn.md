Authorizes a Cloud Enterprise Network (CEN) instance to communicate with a Cloud Connect Network (CCN) instance that belongs to another Alibaba Cloud account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Smartag/2018-03-13/GrantInstanceToCbn)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Smartag/2018-03-13/GrantInstanceToCbn)

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

smartag:GrantInstanceToCbn

\*CloudConnectNetwork

`acs:smartag:{#regionId}:{#accountId}:ccn/{#CcnInstanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

CenUid

long

Yes

The ID of the Alibaba Cloud account to which the CEN instance belongs.

1250123456123456

CcnInstanceId

string

Yes

The ID of the CCN instance.

ccn-n2935s1mnwv8i\*\*\*\*\*

CenInstanceId

string

Yes

The ID of the CEN instance.

cen-7qthudw0ll6jm\*\*\*\*\*

RegionId

string

Yes

The ID of the region where the CCN instance is deployed.

You can call the [DescribeRegions](~~69813~~l) operation to query the most recent region list.

cn-shanghai

GrantTrafficService

boolean

No

Specifies whether to grant the CEN instance permissions to manage network traffic from the CCN instance. Valid values:

-   **true**: grants permissions.
-   **false**: does not grant permissions. This is the default value.

**Note** If you set the value to true and the SAG instance connected to the CCN instance has the secure rerouting feature enabled, you cannot revoke the permissions.

true

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

22840034-ADE9-41D8-A5DC-A7CF435CEE75

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "22840034-ADE9-41D8-A5DC-A7CF435CEE75"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

DuplicatedGrantRule

The specified privilege granting rule already exists.

The permission rule already exists.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Smartag/2018-03-13/errorCode).
