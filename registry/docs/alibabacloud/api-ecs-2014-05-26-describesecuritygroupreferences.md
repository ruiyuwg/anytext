Queries the security groups whose rules reference security groups as authorization objects.

## Operation description

-   If you cannot delete a security group by calling the [DeleteSecurityGroup](/help/en/ecs/api-deletesecuritygroup) operation, call the DescribeSecurityGroupReferences operation to check whether the security group is referenced by the rules of other security groups. If the security group is referenced by the rules of other security groups, you must call the [RevokeSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-revokesecuritygroup) and [RevokeSecurityGroupEgress](/help/en/ecs/developer-reference/api-ecs-2014-05-26-revokesecuritygroupegress) operations to remove the references before you can delete the security group.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSecurityGroupReferences)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSecurityGroupReferences)

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

ecs:DescribeSecurityGroupReferences

get

\*SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

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

The ID of the region. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

SecurityGroupId

array

Yes

The IDs of security groups. You can specify up to 10 IDs of security groups.

string

Yes

The ID of security group N.

sg-bp14vtedjtobkvi\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

SecurityGroupReferences

array<object>

Details about the references to the specified security groups.

SecurityGroupReference

object

Details about the references to the specified security group.

SecurityGroupId

string

The ID of the specified security group.

sg-bp67acfmxazb4p\*\*\*\*

ReferencingSecurityGroups

array<object>

Details about the security groups whose rules reference the specified security group.

ReferencingSecurityGroup

object

Details about the security group whose rules reference the specified security group.

SecurityGroupId

string

The ID of the security group whose rules reference the specified security group.

sg-bp67acfmxazb4j\*\*\*\*

AliUid

string

The ID of the Alibaba Cloud account to which the security group whose rules reference the specified security group belongs.

123456\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "SecurityGroupReferences": {
    "SecurityGroupReference": [
      {
        "SecurityGroupId": "sg-bp67acfmxazb4p****",
        "ReferencingSecurityGroups": {
          "ReferencingSecurityGroup": [
            {
              "SecurityGroupId": "sg-bp67acfmxazb4j****",
              "AliUid": "123456****"
            }
          ]
        }
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

InvalidSecurityGroupId.Malformed

The specified parameter SecurityGroupId is essential and size should less than 10

The SecurityGroupId.N parameter is required and the value of N cannot exceed 10.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidSecurityGroupId.NotFound

The SecurityGroupId provided does not exist in our records.

The specified security group does not exist in this account. Check whether the security group ID is correct.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-12

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSecurityGroupReferences?updateTime=2025-03-12#workbench-doc-change-demo)
