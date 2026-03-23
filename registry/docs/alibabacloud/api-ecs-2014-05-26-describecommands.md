Queries the Cloud Assistant commands that you created or the common Cloud Assistant commands that Alibaba Cloud provides.

## Operation description

## [](#usage-notes)[](#)Usage notes

-   If you specify only `Action` and `RegionId`, all available commands (`CommandId`) that you created in the specified region are queried by default.
-   During a paged query, when you call the DescribeCommands operation to retrieve the first page of results, set `MaxResults` to specify the maximum number of entries to return in the call. The return value of `NextToken` is a pagination token that can be used in the next call to retrieve a new page of results. When you call the DescribeCommands operation to retrieve a new page of results, set `NextToken` to the `NextToken` value returned in the previous call and set `MaxResults` to specify the maximum number of entries to return in this call.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeCommands)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeCommands)

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

ecs:DescribeCommands

get

Command

`acs:ecs:{#regionId}:{#accountId}:command/*`

Command

`acs:ecs:{#regionId}:{#accountId}:command/{#commandId}`

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

The region ID of the command. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

Provider

string

No

The provider of the common command. Take note of the following items:

-   If you do not specify this parameter, all the commands that you created are queried.
    
-   If you set this parameter to `AlibabaCloud`, all the common commands provided by Alibaba Cloud are queried.
    
-   If you set this parameter to a specific provider, all the common commands provided by the provider are queried. Examples:
    
    -   If you set `Provider` to AlibabaCloud.ECS.GuestOS, all the common commands provided by `AlibabaCloud.ECS.GuestOS` are queried.
    -   If you set `Provider` to AlibabaCloud.ECS.GuestOSDiagnose, all the common commands provided by `AlibabaCloud.ECS.GuestOSDiagnose` are queried.

AlibabaCloud

CommandId

string

No

The ID of the command.

c-hz01272yr52\*\*\*\*

Name

string

No

The name of the command.

If you specify `Provider`, fuzzy search is supported by default.

If you do not specify `Provider`, prefix-based fuzzy search is supported. For example, if you specify `command*`, all commands whose names start with `command` are queried.

testName

Description

string

No

The description of the command.

If you specify `Provider`, fuzzy search is supported by default.

If you do not specify `Provider`, prefix-based fuzzy search is supported. For example, if you specify `test*`, all commands whose descriptions start with `test` are queried.

testDescription

Type

string

No

The type of the command. Valid values:

-   RunBatScript: batch command, applicable to Windows instances
-   RunPowerShellScript: PowerShell command, applicable to Windows instances
-   RunShellScript: shell command, applicable to Linux instances

RunShellScript

ContentEncoding

string

No

The encoding mode of the `CommandContent` and `Output` values in the response. Valid values:

-   PlainText: returns the original command content and command output.
-   Base64: returns the Base64-encoded command content and command output.

Default value: Base64.

PlainText

PageNumber

long

No

**Note** This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.

1

PageSize

long

No

**Note** This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.

10

MaxResults

integer

No

The maximum number of entries per page.

Valid values: 1 to 50.

Default value: 10.

10

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.

AAAAAdDWBF2

Latest

boolean

No

Specifies whether to query only the latest version of common commands when common commands are queried. This parameter does not affect the query for private commands.

-   true: queries only the latest version of common commands.
-   false: queries all versions of common commands.

Default value: false.

true

ResourceGroupId

string

No

The ID of the resource group to which the command belongs.

rg-123\*\*\*\*\*\*

Tag

array<object>

No

The list of tags.

object

No

The list of tags.

Value

string

No

The value of tag N of the command. Valid values of N: 1 to 20. The tag value can be an empty string.

It can be up to 128 characters in length and cannot contain `http://` or `https://`.

TestValue

Key

string

No

The key of tag N of the command. Valid values of N: 1 to 20. The tag key cannot be an empty string.

If a single tag is specified to query resources, up to 1,000 resources that have this tag added can be displayed in the response. If multiple tags are specified to query resources, up to 1,000 resources that have all these tags added can be displayed in the response. To query more than 1,000 resources that have specified tags, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

The tag key can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

TestKey

## Response parameters

Parameter

Type

Description

Example

object

PageSize

long

The number of entries per page.

10

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

PageNumber

long

The page number.

1

TotalCount

long

The total number of commands.

5

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

AAAAAdDWBF2

Commands

array<object>

The queried commands.

Command

object

The time when the command was created.

ParameterDefinitions

array<object>

The custom parameters of the command.

ParameterDefinition

object

The information of the custom parameter.

DefaultValue

string

The default value of the custom parameter.

https://aliyun-client-assist.oss-accelerate.aliyuncs.com/linux/aliyun\_assist\_latest.rpm

Description

string

The description of the custom parameter.

Download path of the Cloud Assistant Agent installation package.

Required

boolean

Indicates whether the custom parameter is required. Valid values:

-   true
-   false

Default value: false.

true

ParameterName

string

The name of the custom parameter.

DownloadUrl

PossibleValues

array

The valid values of the custom parameter of the enumeration type.

PossibleValue

string

The valid values of the custom parameter of the enumeration type.

"Linux","Windows"

PatternRegex

string

The regular expression of the custom parameter.

^\[a-zA-Z0-9\_-\]{4,32}$

Description

string

The description of the command.

testDescription

Category

string

The category of the common command.

“”

ResourceGroupId

string

The ID of the resource group to which the command belongs.

rg-123\*\*\*\*\*\*

ParameterNames

array

The custom parameter names that are parsed from the command content specified when the command was created. If the custom parameter feature is disabled, an empty list is returned.

ParameterName

string

The list of custom parameter names that are parsed from the command content specified when the command was created. If the custom parameter feature is disabled, an empty list is returned.

\['parameter1','parameter2'\]

Timeout

long

The timeout period. Unit: seconds.

3600

Provider

string

The provider of the common command.

AlibabaCloud.ECS.GuestOS

Name

string

The name of the command.

testName

WorkingDir

string

The execution path of the command.

/home/

CommandContent

string

The content of the command, which is Base64-encoded.

-   If ContentEncoding is set to PlainText in the request, the original command content is returned.
-   If ContentEncoding is set to Base64 in the request, the Base64-encoded command content is returned.

Y2QgL3Jvb3Q=

Type

string

The type of the command.

RunShellScript

Version

integer

The version of the common command. If multiple common commands from the same provider (`Provider`) belong to the same category and have the same name, these commands are different versions of the same command. This parameter is not returned for the Cloud Assistant commands that you created.

1

InvokeTimes

integer

The number of tasks created by using the command.

2

CreationTime

string

The time when the command was created.

2020-11-17T06:52Z

Launcher

string

The launcher for script execution. The value cannot exceed 1 KB in length.

python3 -u {{ACS::ScriptFileName|Ext(".py")}}

Latest

boolean

Indicates whether the common command is of the latest version. If multiple common commands from the same provider (`Provider`) belong to the same category and have the same name, these commands are different versions of the same command. This parameter is not returned for the Cloud Assistant commands that you created.

true

EnableParameter

boolean

Indicates whether the custom parameter feature is enabled for the command.

true

CommandId

string

The command ID.

c-hz01272yr52\*\*\*\*

Tags

array<object>

The tags of the command.

Tag

object

The tags of the command.

TagKey

string

The tag key of the command.

owner

TagValue

string

The tag value of the command.

zhangsan

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "PageNumber": 1,
  "TotalCount": 5,
  "NextToken": "AAAAAdDWBF2",
  "Commands": {
    "Command": [
      {
        "ParameterDefinitions": {
          "ParameterDefinition": [
            {
              "DefaultValue": "https://aliyun-client-assist.oss-accelerate.aliyuncs.com/linux/aliyun_assist_latest.rpm",
              "Description": "Download path of the Cloud Assistant Agent installation package.",
              "Required": true,
              "ParameterName": "DownloadUrl",
              "PossibleValues": {
                "PossibleValue": [
                  "\"Linux\",\"Windows\""
                ]
              },
              "PatternRegex": "^[a-zA-Z0-9_-]{4,32}$"
            }
          ]
        },
        "Description": "testDescription",
        "Category": "“”",
        "ResourceGroupId": "rg-123******",
        "ParameterNames": {
          "ParameterName": [
            "['parameter1','parameter2']"
          ]
        },
        "Timeout": 3600,
        "Provider": "AlibabaCloud.ECS.GuestOS",
        "Name": "testName",
        "WorkingDir": "/home/",
        "CommandContent": "Y2QgL3Jvb3Q=",
        "Type": "RunShellScript",
        "Version": 1,
        "InvokeTimes": 2,
        "CreationTime": "2020-11-17T06:52Z",
        "Launcher": "python3 -u {{ACS::ScriptFileName|Ext(\".py\")}}\n",
        "Latest": true,
        "EnableParameter": true,
        "CommandId": "c-hz01272yr52****",
        "Tags": {
          "Tag": [
            {
              "TagKey": "owner",
              "TagValue": "zhangsan"
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

RegionId.ApiNotSupported

The api is not supported in this region.

The API operation cannot be called in the specified region. Check whether the specified RegionId parameter is valid.

400

NumberExceed.Tags

The Tags parameter number is exceed.

The number of tags exceeds the maximum limit.

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

The specified tag key already exists. Tag keys must be unique.

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

400

MissingParameter.TagKey

You must specify Tag.N.Key.

The tag key is not specified.

400

InvalidParam.PageNumber

The specified parameter is invalid.

The specified PageNumber parameter is invalid.

400

InvalidParam.PageSize

The specified parameter is invalid.

The specified PageSize parameter is invalid.

400

InvalidParameter.NextToken

The specified parameter NextToken is not valid.

The specified parameter NextToken is illegal.

400

InvalidParameter.MaxResults

The specified parameter MaxResults is not valid.

The specified parameter MaxResults is illegal.

403

Operation.Forbidden

The operation is not permitted.

The operation is not supported.

403

InvalidName.LengthLimitExceeded

The length of the parameter Name exceeds the upper limit.

\-

403

InvalidDescription.LengthLimitExceeded

The length of the parameter Description exceeds the upper limit.

\-

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidCommandType.NotFound

The specified parameter Type does not exist.

\-

500

InternalError.Dispatch

An error occurred when you dispatched the request.

An error occurred while the request is being sent. Try again later.

500

ServiceUnavailable

The request has failed due to a temporary failure of the server.

\-

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-12

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeCommands?updateTime=2025-03-12#workbench-doc-change-demo)

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeCommands?updateTime=2024-12-05#workbench-doc-change-demo)

2024-10-21

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeCommands?updateTime=2024-10-21#workbench-doc-change-demo)

2023-12-21

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeCommands?updateTime=2023-12-21#workbench-doc-change-demo)

2023-10-24

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeCommands?updateTime=2023-10-24#workbench-doc-change-demo)

2023-05-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeCommands?updateTime=2023-05-12#workbench-doc-change-demo)

2022-02-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeCommands?updateTime=2022-02-25#workbench-doc-change-demo)
