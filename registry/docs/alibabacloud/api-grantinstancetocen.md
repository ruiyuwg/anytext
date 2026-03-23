Grants permissions to a CEN instance.

## Operation description

-   Before you can attach a network instance that belongs to another Alibaba Cloud account to your CEN instance, you must grant permissions to your CEN instance.

**Note** **GrantInstanceToCen** is a Virtual Private Cloud (VPC) operation. Therefore, you must use the `vpc.aliyuncs.com` domain name to call this operation. The API version is `2016-04-28`.

-   You cannot repeatedly call the **GrantInstanceToCen** operation to grant the permissions on a network instance to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/GrantInstanceToCen)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/GrantInstanceToCen)

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

vpc:GrantInstanceToCen

update

\*VirtualBorderRouter

`acs:vpc:{#regionId}:{#accountId}:virtualborderrouter/{#VirtualBorderRouterId}`

\*VPC

`acs:vpc:{#regionId}:{#accountId}:vpc/{#VpcId}`

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

The ID of the region where the network instance is deployed.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceId

string

Yes

The ID of the network instance.

vpc-uf6o8d1dj8sjwxi6o\*\*\*\*

InstanceType

string

Yes

The type of the network instance. Valid values:

-   **VPC**
-   **VBR**

VPC

CenId

string

Yes

The ID of the CEN instance to which you want to grant permissions.

cen-7qthudw0ll6jmc\*\*\*\*

CenOwnerId

long

Yes

The user ID (UID) of the Apsara Stack tenant account to which the CEN instance belongs.

123456789

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

0c593ea1-3bea-11e9-b96b-88e9fe637760

## Response parameters

Parameter

Type

Description

Example

object

The request ID.

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IncorrectStatus

Current Instance status does not support this operation.

\-

400

TaskConflict

The operation is too frequent, TaskConflict.

The system is unavailable. Try again later.

400

MissingParam.CenInstanceId

%s

\-

400

IllegalParam.CenInstanceId

%s

\-

400

Invalid.Grant

Can not grant to other owner cen.

You cannot attach the VBR to a CEN instance that belongs to another Alibaba Cloud account.

404

InvalidInstanceId.NotFound

Specified Instance does not exist.

The instance does not exist. Check the instance ID.

404

InstanceType.Invalid

Specified type is not valid.

\-

404

QuotaExceeded.CbnGrantRules

cbn grantRules per instance quota exceed

\-

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId parameter is set to an invalid value. Specify a valid value and try again.

404

InvalidVbr.NotFound

Specified vbr does not exist.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/GrantInstanceToCen?updateTime=2025-12-17#workbench-doc-change-demo)
