Modifies the name and description of a deployment set.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDeploymentSetAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDeploymentSetAttribute)

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

ecs:ModifyDeploymentSetAttribute

update

\*DeploymentSet

`acs:ecs:{#regionId}:{#accountId}:deploymentset/{#DeploymentSetId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DeploymentSetId

string

Yes

The ID of the deployment set.

ds-bp1frxuzdg87zh4p\*\*\*\*

Description

string

No

The new description of the deployment set. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

TestDescription

DeploymentSetName

string

No

The new name of the deployment set. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

DeploymentSetTestName

RegionId

string

Yes

The region ID of the deployment set. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

## Response parameters

Parameter

Type

Description

Example

object

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

MissingParameter

The input parameter RegionId that is mandatory for processing this request is not supplied.

\-

400

InvalidDeploymentSetName.Malformed

Specified deployment set name is not valid.

The specified DeploymentSetName parameter is invalid.

400

InvalidDescription.Malformed

The specified parameter Description is not valid.

The resource description is invalid. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

400

InvalidDeploymentSetId.NotFound

The specified DeploymentSetId does not exist.

The specified DeploymentSetId parameter does not exist. Check whether the deployment set ID is correct.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-11-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDeploymentSetAttribute?updateTime=2023-11-23#workbench-doc-change-demo)
