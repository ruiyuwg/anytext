Disables Elastic Network Interface (ENI) QoS speed setting.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DisableNetworkInterfaceQoS)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DisableNetworkInterfaceQoS)

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

ecs:DisableNetworkInterfaceQoS

update

\*NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

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

The region ID of the ENI. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

NetworkInterfaceId

string

Yes

The ID of the ENI.

eni-bp1iqejowblx6h8j\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The request ID.

745CEC9F-0DD7-4451-9FE7-8B752F39\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "745CEC9F-0DD7-4451-9FE7-8B752F39****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParameter

%s

A parameter is not specified.

400

UnsupportedParameter

%s

The parameter is not supported.

400

InvalidParameter

%s

The specified parameter is invalid.

400

InvalidInstanceID.Malformed

%s

The specified InstanceId parameter is invalid.

400

InvalidParams.EniId

%s

The specified EniId parameter is invalid.

400

Forbidden.RegionId

%s

The service is unavailable in the current region.

400

InvalidParameter.Conflict

%s

The specified parameter is invalid. Check whether parameter conflicts exist. %s is a variable. An error message is dynamically returned based on call conditions.

403

InvalidUserType.NotSupported

%s

Your account does not support this operation.

403

Abs.InvalidAccount.NotFound

%s

Your Alibaba Cloud account does not exist or your AccessKey pair has expired.

403

Forbidden.NotSupportRAM

%s

RAM users are not authorized to perform this operation.

403

Forbidden.SubUser

%s

You are not authorized to manage this resource. Contact the owner of the Alibaba Cloud account for authorization.

403

InvalidOperation.AvailabilityZoneMismatch

%s

The operation is invalid.

403

InvalidOperation.VpcMismatch

%s

The operation is invalid. Check whether the VPC in the operation corresponds to other parameters.

403

InvalidOperation.EniServiceManaged

%s

The operation is invalid.

403

InvalidOperation.ResourceManagedByCloudProduct

%s

You cannot modify security groups managed by cloud services.

404

InvalidEniId.NotFound

%s

The specified ENI ID does not exist.

404

InvalidVSwitchId.NotFound

%s

The specified vSwitch does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-03

Add Operation

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DisableNetworkInterfaceQoS?updateTime=2025-12-03#workbench-doc-change-demo)
