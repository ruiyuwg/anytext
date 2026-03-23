Deletes a deployment set.

## Operation description

Before you delete a deployment set, make sure that no instances exist in the deployment set. If instances exist in the deployment set, move the instances to a different deployment set or release the instances before you delete the deployment set. For more information, see [Change the deployment set of an instance](/help/en/doc-detail/108407.html) and [Release an ECS instance](/help/en/ecs/user-guide/release-an-instance).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteDeploymentSet)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteDeploymentSet)

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

ecs:DeleteDeploymentSet

delete

\*DeploymentSet

`acs:ecs:{#regionid}:{#accountId}:deploymentset/{#deploymentSetId}`

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

The region ID of the deployment set. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

DeploymentSetId

string

Yes

The ID of the deployment set that you want to delete.

ds-bp1g5ahlkal88d7x\*\*\*\*

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

MissingParameter

The input parameter "DeploymentSetId" that is mandatory for processing this request is not supplied.

\-

403

DependencyViolation.NotEmpty

There are still instance(s) in the specified DeploymentSetId.

Instances still exist in the specified DeploymentSetId.

403

DependencyViolation.ReferByHPC

The specified deployment set is still referred by an HPC cluster.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
