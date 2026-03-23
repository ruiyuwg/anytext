Queries created trails.

## Operation description

This topic shows you how to query the information about the single-account trails within an Alibaba Cloud account. In this example, the information about a trail named `test-4` is returned.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Actiontrail/2020-07-06/DescribeTrails)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Actiontrail/2020-07-06/DescribeTrails)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   The required resource types are displayed in bold characters.
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

actiontrail:DescribeTrails

get

-   All Resources
    
    \*
    

none

none

## Request parameters

Parameter

Type

Required

Description

Example

IncludeShadowTrails

boolean

No

Specifies whether to return the information about shadow trails. Valid values:

-   false: Do not return the information about shadow trails. It is the default value.
-   true: Return the information about shadow trails.

false

NameList

string

No

The names of the trails whose information you want to query. Separate multiple trail names with commas (,).

abc,def

IncludeOrganizationTrail

boolean

No

Specifies whether to query the information about multi-account trails. Valid values:

-   true
-   false (default)

false

For more information about common request parameters, see [Common parameters](/help/en/doc-detail/185885.html).

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

ED8BC689-69DA-42AC-855E-3B06C1271194

TrailList

array<object>

The trails.

Trail

object

TrailRegion

string

The region of the trail.

All

Status

string

The status of the trail. Valid values:

-   Disable: disabled.
-   Enable: enabled.
-   Fresh: The trail is created but is not enabled.

Enable

UpdateTime

string

The time when the configurations of the trail were last updated.

2021-04-06T02:16:24Z

HomeRegion

string

The home region of the trail.

cn-hangzhou

CreateTime

string

The time when the trail was created.

2021-03-01T06:27:28Z

OssKeyPrefix

string

The prefix of the files that are stored in the Object Storage Service (OSS) bucket.

trail1

EventRW

string

The read/write type of the events that are delivered. Valid values:

-   Write: write events. This is the default value.
-   Read: read events.
-   All: read and write events.

All

StartLoggingTime

string

The time when the trail was last enabled.

2021-04-06T02:08:38Z

OssWriteRoleArn

string

The Alibaba Cloud Resource Name (ARN) of the RAM role that is assumed by ActionTrail to deliver events to the OSS bucket.

acs:ram::\*\*\*:role/aliyunserviceroleforactiontrail

SlsProjectArn

string

The ARN of the Log Service project to which events are delivered.

acs:log:cn-qingdao:159498693826\*\*\*\*:project/zhengze-audit-log

IsOrganizationTrail

boolean

Indicates whether the trail is a multi-account trail. Valid values:

-   false (default)
-   true

false

SlsWriteRoleArn

string

The ARN of the RAM role that is assumed by ActionTrail to deliver events to the Log Service project.

acs:ram::159498693826\*\*\*\*:role/aliyunserviceroleforactiontrail

StopLoggingTime

string

The time when the trail was last disabled.

2021-04-06T02:09:04Z

Name

string

The name of the trail.

test-4

OssBucketName

string

The name of the OSS bucket to which events are delivered.

secloud

Region

string

The region where the trail resides.

cn-hangzhou

OrganizationId

string

The ID of the resource directory.

**Note** This parameter is returned only when the trail is a multi-account trail.

rd-EV\*\*\*\*

OssBucketLocation

string

The region where the OSS bucket resides.

oss-cn-hangzhou

TrailArn

string

The ARN of the trail.

acs:actiontrail:cn-hangzhou:159498693826\*\*\*\*:trail/test-delivery-other

MaxComputeWriteRoleArn

string

The ARN of the role that is assumed by ActionTrail to deliver events to the MaxCompute project.

acs:ram::141266687691\*\*\*\*:role/aliyunserviceroleforactiontrail

MaxComputeProjectArn

string

The ARN of the MaxCompute project.

acs:odps:cn-hangzhou:141266687691\*\*\*\*:project/actiontrail\_\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "ED8BC689-69DA-42AC-855E-3B06C1271194",
  "TrailList": [
    {
      "TrailRegion": "All",
      "Status": "Enable",
      "UpdateTime": "2021-04-06T02:16:24Z",
      "HomeRegion": "cn-hangzhou",
      "CreateTime": "2021-03-01T06:27:28Z",
      "OssKeyPrefix": "trail1",
      "EventRW": "All",
      "StartLoggingTime": "2021-04-06T02:08:38Z",
      "OssWriteRoleArn": "acs:ram::***:role/aliyunserviceroleforactiontrail",
      "SlsProjectArn": "acs:log:cn-qingdao:159498693826****:project/zhengze-audit-log",
      "IsOrganizationTrail": false,
      "SlsWriteRoleArn": "acs:ram::159498693826****:role/aliyunserviceroleforactiontrail",
      "StopLoggingTime": "2021-04-06T02:09:04Z",
      "Name": "test-4",
      "OssBucketName": "secloud",
      "Region": "cn-hangzhou",
      "OrganizationId": "rd-EV****",
      "OssBucketLocation": "oss-cn-hangzhou",
      "TrailArn": "acs:actiontrail:cn-hangzhou:159498693826****:trail/test-delivery-other",
      "MaxComputeWriteRoleArn": "acs:ram::141266687691****:role/aliyunserviceroleforactiontrail",
      "MaxComputeProjectArn": "acs:odps:cn-hangzhou:141266687691****:project/actiontrail_****"
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidTrailNameException

The specified Trail name is invalid.

The specified Trail name is not valid.

400

InvalidQueryParameter

The specified query parameter is invalid.

The specified query parameter is not valid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Actiontrail/2020-07-06/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-01-09

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Actiontrail/2020-07-06/DescribeTrails?updateTime=2024-01-09#workbench-doc-change-demo)

2021-08-18

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Actiontrail/2020-07-06/DescribeTrails?updateTime=2021-08-18#workbench-doc-change-demo)
