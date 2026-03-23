Queries the instance Resource Access Management (RAM) roles that are attached to Elastic Compute Service (ECS) instances based on the instance IDs, or queries the ECS instances to which a specific instance RAM role is attached based on the name of the instance RAM role.

## Operation description

## [](#usage-notes)[](#)Usage notes

When you call the API operation by using Alibaba Cloud CLI, you must specify request parameter values of different data types in the required formats. For more information, see [Parameter formats](/help/en/cli/parameter-format-overview).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceRamRole)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceRamRole)

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

ecs:DescribeInstanceRamRole

get

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

Role

`acs:ram:{#regionId}:{#accountId}:role/{#roleName}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

PageNumber

integer

No

The page number.

Pages start from page 1.

Default value: 1.

1

PageSize

integer

No

The number of entries per page.

Valid values: 1 to 50.

Default value: 10.

10

RegionId

string

Yes

The region ID of the instance RAM role. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent list of regions.

cn-hangzhou

InstanceIds

string

No

The IDs of ECS instances. You can specify up to 50 instance IDs in a single request.

**Note** You must specify at least one parameter from `InstanceIds` and `RamRoleName`.

\["i-bp67acfmxazb1p\*\*\*\*", "i-bp67acfmxazb2p\*\*\*\*", "bp67acfmxazb3p\*\*\*\*"…\]

RamRoleName

string

No

The name of the instance RAM role. If you specify this parameter, all ECS instances to which the instance RAM role is attached are returned in the response. You can call the [ListRoles](/help/en/ram/api-listroles) operation of RAM to query the names of available instance RAM roles.

**Note** You must specify at least one parameter from `InstanceIds` and `RamRoleName`.

EcsServiceRole-EcsDocGuideTest

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

TotalCount

integer

The number of ECS instances returned.

1

RegionId

string

The region ID of the ECS instances.

cn-hangzhou

InstanceRamRoleSets

array<object>

The IDs of the ECS instances and the names of the corresponding instance RAM roles.

InstanceRamRoleSet

object

RamRoleName

string

The name of the instance RAM role.

EcsServiceRole-EcsDocGuideTest

InstanceId

string

The ID of the instance

i-bp67acfmxazb4p\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "TotalCount": 1,
  "RegionId": "cn-hangzhou",
  "InstanceRamRoleSets": {
    "InstanceRamRoleSet": [
      {
        "RamRoleName": "EcsServiceRole-EcsDocGuideTest",
        "InstanceId": "i-bp67acfmxazb4p****"
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidInstanceIds.Malformed

The specified instanceIds are not valid.

Multiple specified instance IDs are invalid.

403

InvalidNetworkType.MismatchRamRole

Ram role cannot be applied to instances of Classic network type.

Instance RAM roles can be used only for instances of the VPC type, not for instances of the classic network type.

403

InvalidParameter.AllEmpty

%s

The required parameters are not specified.

404

InvalidInstanceId.NotFound

The specified instanceId does not exist

The specified instance does not exist. Check whether the instance ID is correct.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceRamRole?updateTime=2024-12-17#workbench-doc-change-demo)
