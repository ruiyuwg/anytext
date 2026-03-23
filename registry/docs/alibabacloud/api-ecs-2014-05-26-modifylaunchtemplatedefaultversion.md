Changes the default version of a launch template. When you call this operation, you can specify DefaultVersionNumber in the request. If you do not specify a version when you create Elastic Compute Service (ECS) instances based on a launch template, the default version of the launch template is used.

## Operation description

## [](#debugging)Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Ecs&api=ModifyLaunchTemplateDefaultVersion&type=RPC&version=2014-05-26)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyLaunchTemplateDefaultVersion)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyLaunchTemplateDefaultVersion)

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

ecs:ModifyLaunchTemplateDefaultVersion

update

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

The ID of the launch template. You must specify the LaunchTemplateId or LaunchTemplateName parameter to determine an instance launch template.

lt-s-bp177juajht6\*\*\*\*

LaunchTemplateName

string

No

The name of the instance launch template. You must specify the LaunchTemplateId or LaunchTemplateName parameter to determine an instance launch template.

testLaunchTemplateName

DefaultVersionNumber

long

Yes

The default version number of the instance launch template.

2

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

LaunchTemplateId

string

The ID of the launch template. For more information, see [DescribeLaunchTemplates](/help/en/ecs/api-describelaunchtemplates) .

lt-bp1apo0bbbkuy0rj\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "LaunchTemplateId": "lt-bp1apo0bbbkuy0rj****"
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

404

InvalidLaunchTemplate.NotFound

%s

The specified launch template does not exist. Check whether the parameter value is correct.

404

InvalidLaunchTemplateVersion.NotFound

%s

The specified version of the launch template does not exist. Check whether the parameter values are correct.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-24

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyLaunchTemplateDefaultVersion?updateTime=2025-03-24#workbench-doc-change-demo)

2023-03-10

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyLaunchTemplateDefaultVersion?updateTime=2023-03-10#workbench-doc-change-demo)
