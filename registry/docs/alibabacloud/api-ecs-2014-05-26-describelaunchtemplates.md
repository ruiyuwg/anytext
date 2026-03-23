Queries the information of one or more launch templates, such as the total number of launch templates, the creation time of each launch template, and the latest version number of each launch template. When you can this operation, you can specify parameters, such as TemplateTag, TemplateResourceGroupId, and LaunchTemplateId, in the request.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeLaunchTemplates)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeLaunchTemplates)

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

ecs:DescribeLaunchTemplates

get

LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/*`

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

TemplateTag

array<object>

No

The tags of the launch template.

**Note** You can only call API operations to add tags to and query the tags of a launch template. You cannot add tags to or view the tags of a launch template in the ECS console.

object

No

Tag N of the launch template.

Key

string

No

The key of tag N of the launch template. Valid values of N: 1 to 20.

If you specify a single tag to query resources, up to 1,000 resources to which the tag is added are returned. If you specify multiple tags to query resources, up to 1,000 resources to which all specified tags are added are returned. To query more than 1,000 resources that have specified tags added, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

TestKey

Value

string

No

The value of tag N of the launch template. Valid values of N: 1 to 20.

TestValue

PageNumber

integer

No

The page number. Page starts from page 1.

Default value: 1.

1

PageSize

integer

No

The number of entries per page.

Default value: 10.

10

TemplateResourceGroupId

string

No

The ID of the resource group to which the launch template belongs. If you specify this parameter to query resources, up to 1,000 resources that belong to the specified resource group can be returned.

**Note** The default resource group is not supported.

rg-acfmxazb4p\*\*\*\*

LaunchTemplateId

array

No

The IDs of launch templates.

-   You can query up to 100 launch templates.
-   You must specify LaunchTemplateId or LaunchTemplateName to specify a launch template.

string

No

The ID of the launch template.

-   You can query up to 100 launch templates.
-   You must specify LaunchTemplateId or LaunchTemplateName to specify a launch template.

lt-m5e3ofjr1zn1aw7q\*\*\*\*

LaunchTemplateName

array

No

The names of launch templates.

-   You can query up to 100 launch templates.
-   You must specify LaunchTemplateId or LaunchTemplateName to specify a launch template.

string

No

The name of the launch template.

-   You can query up to 100 launch templates.
-   You must specify LaunchTemplateId or LaunchTemplateName to specify a launch template.

wd-152630748\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries per page.

10

RequestId

string

The request ID.

04F0F334-1335-436C-A1D7-6C044FE12CBA

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of launch templates.

1

LaunchTemplateSets

array<object>

The queried launch templates.

LaunchTemplateSet

object

The information about the launch template.

LaunchTemplateName

string

The name of the launch template.

wd-152630748\*\*\*\*

DefaultVersionNumber

long

The default version number of the launch template.

1

ModifiedTime

string

The time when a version was added to or deleted from the launch template.

The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2018-05-14T14:18:00Z

LaunchTemplateId

string

The ID of the launch template.

lt-m5e3ofjr1zn1aw7q\*\*\*\*

CreateTime

string

The time when the launch template was created.

The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2018-05-14T14:18:00Z

ResourceGroupId

string

The ID of the resource group to which the launch template belongs.

rg-acfmxazb4p\*\*\*\*

CreatedBy

string

The ID of the Alibaba Cloud account that created the launch template.

1234567890

LatestVersionNumber

long

The latest version number of the launch template.

1

Tags

array<object>

The tags of the launch template.

**Note** You can only call API operations to add tags to and query the tags of a launch template. You cannot add tags to or view the tags of a launch template in the ECS console.

Tag

object

The tag of the launch template.

TagValue

string

The tag key of the launch template.

TestValue

TagKey

string

The tag value of the launch template.

TestKey

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "04F0F334-1335-436C-A1D7-6C044FE12CBA",
  "PageNumber": 1,
  "TotalCount": 1,
  "LaunchTemplateSets": {
    "LaunchTemplateSet": [
      {
        "LaunchTemplateName": "wd-152630748****",
        "DefaultVersionNumber": 1,
        "ModifiedTime": "2018-05-14T14:18:00Z",
        "LaunchTemplateId": "lt-m5e3ofjr1zn1aw7q****",
        "CreateTime": "2018-05-14T14:18:00Z",
        "ResourceGroupId": "rg-acfmxazb4p****",
        "CreatedBy": 1234567890,
        "LatestVersionNumber": 1,
        "Tags": {
          "Tag": [
            {
              "TagValue": "TestValue",
              "TagKey": "TestKey"
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

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-03-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeLaunchTemplates?updateTime=2023-03-28#workbench-doc-change-demo)
