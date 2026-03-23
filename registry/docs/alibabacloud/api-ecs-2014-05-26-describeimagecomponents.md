Queries the details of one or more image components.

## Operation description

You can use `NextToken` to configure the query token. Set the value to the `NextToken` value that is returned in the previous call to the DescribeImageComponents operation. Then, use `MaxResults` to specify the maximum number of entries to return on each page.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeImageComponents)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeImageComponents)

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

ecs:DescribeImageComponents

get

\*ImageComponent

`acs:ecs:{#regionId}:{#accountId}:imagecomponent/*`

\*ImageComponent

`acs:ecs:{#regionId}:{#accountId}:imagecomponent/{#imagecomponentId}`

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

The region ID of the image component. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ResourceGroupId

string

No

The ID of the resource group. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.

**Note** Resources in the default resource group are displayed in the response regardless of how this parameter is set.

rg-bp67acfmxazb4p\*\*\*\*

Tag

array<object>

No

The tags of the image component.

object

No

Key

string

No

The key of tag N. Valid values of N: 1 to 20.

TestKey

Value

string

No

The value of tag N. Valid values of N: 1 to 20.

TestValue

Name

string

No

The name of the image component. You must specify an exact name to search for the image component.

testComponent

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.

AAAAAdDWBF2\*\*\*\*

MaxResults

integer

No

The maximum number of entries per page. Valid values: 1 to 500.

Default value: 50.

50

Owner

string

No

The type of the image component. Valid values:

-   SELF: the custom component that you created.
-   ALIYUN: the system component provided by Alibaba Cloud.

SELF

ImageComponentId

array

No

The IDs of image components. Valid values of N: 1 to 20.

string

No

The ID of image component N. Valid values of N: 1 to 20.

ic-bp67acfmxazb4p\*\*\*\*

ComponentType

string

No

The type of the image component.

Valid values:

-   Build
-   Test

null

SystemType

string

No

The type of the operating system supported by the image component.

Valid values:

-   Linux
-   Windows

null

ComponentVersion

string

No

The version number of the image component in the <major>.<minor>.<patch> format. You can set <major>, <minor>, and <patch> to non-negative integers, or set one of <major>, <minor>, and <patch> to the wildcard (\*) and the other two to non-negative integers.

**Note** This parameter takes effect only if you specify Name.

null

## Response parameters

Parameter

Type

Description

Example

object

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results. For information about how to use the returned value, see the "Usage notes" section of this topic.

AAAAAdDWBF2\*\*\*\*

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

TotalCount

integer

The total number of image components returned.

1

MaxResults

integer

The number of entries per page.

50

ImageComponent

array<object>

The information about the image components.

ImageComponentSet

object

CreationTime

string

The time when the image component was created.

2020-11-24T06:00:00Z

Description

string

The description of the image component.

This is description.

SystemType

string

The type of the operating system supported by the image component.

Linux

ImageComponentId

string

The ID of the image component.

ic-bp67acfmxazb4p\*\*\*\*

ComponentType

string

The type of the image component.

Build

ResourceGroupId

string

The ID of the resource group to which the image component belongs.

rg-bp67acfmxazb4p\*\*\*\*

Name

string

The name of the image component.

testComponent

Content

string

The content of the image component.

RESTART

Owner

string

The type of the image component. Valid values:

-   SELF: the custom component that you created.
-   ALIYUN: the system component provided by Alibaba Cloud.

SELF

Tags

array<object>

The tags of the image component.

Tag

object

TagValue

string

The value of the tag.

TestValue

TagKey

string

The key of the tag.

TestKey

ComponentVersion

string

The version number of the image component.

null

Parameters

array<object>

The parameters contained in the image component.

Parameter

object

Name

string

The name of the parameter.

null

Type

string

The type of the parameter.

Valid values:

-   String
-   Number
-   Boolean

null

DefaultValue

string

The default value of the parameter.

null

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "AAAAAdDWBF2****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "TotalCount": 1,
  "MaxResults": 50,
  "ImageComponent": {
    "ImageComponentSet": [
      {
        "CreationTime": "2020-11-24T06:00:00Z",
        "Description": "This is description.",
        "SystemType": "Linux",
        "ImageComponentId": "ic-bp67acfmxazb4p****",
        "ComponentType": "Build",
        "ResourceGroupId": "rg-bp67acfmxazb4p****",
        "Name": "testComponent",
        "Content": "RESTART",
        "Owner": "SELF",
        "Tags": {
          "Tag": [
            {
              "TagValue": "TestValue",
              "TagKey": "TestKey"
            }
          ]
        },
        "ComponentVersion": null,
        "Parameters": {
          "Parameter": [
            {
              "Name": null,
              "Type": null,
              "DefaultValue": null
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

InvalidParameter.Owner

The specified parameter \\"Owner\\" is not valid.

\-

400

InvalidImageComponentIdSize.ExceededMaxNumber

%s

\-

400

InvalidSystemType.NotSupportedValue

%s.

The specified SystemType is invalid.

400

InvalidComponentType.NotSupportedValue

%s.

The specified ComponentType is invalid.

400

InvalidParameter.ComponentVersion

The specified ComponentVersion is invalid.

The specified ComponentVersion is invalid.

403

Invalid.NextToken

The specified NextToken is not valid.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImageComponents?updateTime=2024-12-17#workbench-doc-change-demo)

2024-10-10

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImageComponents?updateTime=2024-10-10#workbench-doc-change-demo)

2024-08-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImageComponents?updateTime=2024-08-08#workbench-doc-change-demo)
