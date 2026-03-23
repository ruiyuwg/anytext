Deletes a launch template. You can use the LaunchTemplateId or LaunchTemplateName parameter to specify the launch template that you want to delete from the specified region.

## Operation description

Take note of the following items:

-   After you delete a launch template, Elastic Compute Service (ECS) instances created based on the launch template are not affected.
-   After you delete a launch template, all versions of the launch template are deleted and cannot be restored. If you want to delete only a specific version of the launch template, call the [DeleteLaunchTemplateVersion](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletelaunchtemplateversion) operation.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteLaunchTemplate)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteLaunchTemplate)

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

ecs:DeleteLaunchTemplate

delete

LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/{#launchtemplateId}`

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

The region ID of the launch template. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

LaunchTemplateId

string

No

The ID of the launch template. For more information, see [DescribeLaunchTemplates](/help/en/ecs/api-describelaunchtemplates) .

You must specify `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template.

lt-bp1apo0bbbkuy0rj\*\*\*\*

LaunchTemplateName

string

No

The name of the launch template.

You must specify `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template.

testLaunchTemplateName

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

LaunchTemplateId

string

The ID of the launch template. For more information, see [DescribeLaunchTemplates](/help/en/ecs/api-describelaunchtemplates) .

You must specify `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template.

lt-bp1apo0bbbkuy0rj\*\*\*\*

LaunchTemplateVersionNumbers

array

The versions of the deleted launch template.

versionNumbers

long

The versions of the deleted launch template.

\[1,2,3\]

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "LaunchTemplateId": "lt-bp1apo0bbbkuy0rj****",
  "LaunchTemplateVersionNumbers": {
    "versionNumbers": [
      0
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

InvalidRegion.NotExist

%s

The specified region does not exist.

400

MissingParameter

%s

A parameter is not specified.

400

InvalidParameter

%s

The specified parameter is invalid.

403

InnerServiceFailed

%s

An internal service cannot be called.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-24

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteLaunchTemplate?updateTime=2025-03-24#workbench-doc-change-demo)

2023-11-06

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteLaunchTemplate?updateTime=2023-11-06#workbench-doc-change-demo)

2023-03-10

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteLaunchTemplate?updateTime=2023-03-10#workbench-doc-change-demo)
