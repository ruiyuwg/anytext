Queries the files sent by Cloud Assistant and their status.

## Operation description

## [](#usage-notes)[](#)Usage notes

-   When you send a file, the file may fail to be sent to specific Elastic Compute Service (ECS) instances. You can call this operation to check the file sending results.
-   You can call this operation to query the file sending records within the last six weeks.
-   During a paged query, when you call the DescribeSendFileResults operation to retrieve the first page of results, set `MaxResults` to specify the maximum number of entries to return in the call. The return value of `NextToken` is a pagination token that can be used in the next call to retrieve a new page of results. When you call the DescribeSendFileResults operation to retrieve a new page of results, set `NextToken` to the `NextToken` value returned in the previous call and set `MaxResults` to specify the maximum number of entries to return in this call.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSendFileResults)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSendFileResults)

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

ecs:DescribeSendFileResults

get

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

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

The region ID of the ECS instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ResourceGroupId

string

No

The ID of the resource group. After you set this parameter, file sending results in the specified resource group are queried.

rg-bp67acfmxazb4p\*\*\*\*

InvokeId

string

No

The ID of the file sending task.

f-hz0jdfwd9f\*\*\*\*

Name

string

No

The name of the file whose sending records you want to query.

test.txt

InstanceId

string

No

The ID of the instance for which you want to query file sending records.

i-hz0jdfwd9f\*\*\*\*

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

The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken.

AAAAAdDWBF2

InvocationStatus

string

No

The overall sending status of the file. The overall sending status of the file varies based on the sending status of the file on all destination instances. Valid values:

-   Pending: The file is being verified or sent. If the sending state of the file on at least one instance is Pending, the overall sending state of the file is Pending.
-   Running: The file is being sent to the instances. If the sending state of the file on at least one instance is Running, the overall sending state of the file is Running.
-   Success: The file is sent. If the sending state of the file on all instances is Success, the overall sending state of the file is Success.
-   Failed: The file fails to be sent. If the sending state of the file on all instances is Failed, the overall sending state of the file is Failed.
-   PartialFailed: The file sending task succeeds on some instances and fails on other instances. If the sending state of the file is Success on some instances and is Failed on other instances, the overall sending state of the file is PartialFailed.

Success

Tag

array<object>

No

The tags of the file sending task.

object

No

The tags list.

Key

string

No

The key of tag N of the file sending task. Valid values of N: 1 to 20. The tag key cannot be an empty string.

If a single tag is specified to query resources, up to 1,000 resources that have this tag added can be displayed in the response. If multiple tags are specified to query resources, up to 1,000 resources that have all the tags added can be displayed in the response. To query more than 1,000 resources that have specified tags, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.

TestKey

Value

string

No

The value of tag N of the file sending task. Valid values of N: 1 to 20. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.

TestValue

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

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

PageNumber

long

The page number.

1

TotalCount

long

The total number of file sending tasks queried.

2

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

AAAAAdDWBF2

Invocations

array<object>

The file sending records.

Invocation

object

CreationTime

string

The time when the file sending task was created.

2019-12-20T06:15:54Z

InvocationStatus

string

The overall sending status of the file. The overall sending status of the file varies based on the sending status of the file on all destination instances. Valid values:

-   Pending: The file is being verified or sent. If the sending state of the file on at least one instance is Pending, the overall sending state of the file is Pending.
    
-   Running: The file is being sent to the instances. If the sending state of the file on at least one instance is Running, the overall sending state of the file is Running.
    
-   Success: If the sending state of the file on all instances is Success, the overall sending state of the file is Success.
    
-   If the sending state of the file on all instances is Failed, the overall sending state of the file is Failed. If the sending state of the file on one or more instances is one of the following values, the overall sending state of the file is Failed:
    
    -   Invalid: The file is invalid.
    -   Aborted: The file failed to be sent to the instances.
    -   Failed: The file failed to be created on the instances.
    -   Timeout: The file sending task timed out.
    -   Error: An error occurred and interrupted the file sending task.
-   PartialFailed: The file sending task was completed on some instances but failed on other instances. If the sending state of the file is Success on some instances and is Failed on other instances, the overall sending state of the file is PartialFailed.
    

Success

ContentType

string

The type of the file content. Valid values:

-   PlainText: The file content is not encoded.
-   Base64: The file content is encoded in Base64.

PlainText

TargetDir

string

The destination directory.

/home/user

FileOwner

string

The owner of the file.

test

Description

string

The description of the file.

This is a test file.

VmCount

integer

The number of the destination instances.

1

FileMode

string

The permissions on the file.

777

FileGroup

string

The group of the file.

test

InvokeId

string

The ID of the file sending task.

f-hz0jdfwd9f\*\*\*\*

Name

string

The name of the file.

test.txt

Content

string

The content of the file.

#!/bin/bash echo "Current User is :" echo $(ps | grep "$$" | awk '{print $2}')

Overwrite

string

Indicates whether a file in the destination directory is overwritten if the file has the same name as the sent file.

false

InvokeInstances

array<object>

The destination instances.

InvokeInstance

object

CreationTime

string

The creation time of the file sending task.

2019-12-20T06:15:54Z

StartTime

string

The time when the file sending task started to be executed on the instance.

2019-12-20T06:15:54Z

InvocationStatus

string

The status of the file sending task. Valid values:

-   Pending: The file is being verified or sent.
-   Invalid: The file is invalid.
-   Running: The file is being sent to the instance.
-   Aborted: The file failed to be sent to the instance.
-   Success: The file is sent.
-   Failed: The file failed to be created on the instance.
-   Error: An error occurred and interrupted the file sending task.
-   Timeout: The file sending task timed out.

Success

FinishTime

string

The time when the file sending task was completed.

2019-12-20T06:15:54Z

UpdateTime

string

The time when the task status was last updated.

2019-12-20T06:15:54Z

ErrorInfo

string

The error message returned when the file failed to be sent or the file sending task failed to be executed. Valid values:

-   Null: The file is sent to the instance.
-   the specified instance does not exists
-   the specified instance has been released
-   the instance is not running when create task
-   the specified account does not exists
-   the aliyun service is not running on the instance
-   the aliyun service in the instance does not response
-   the aliyun service in the instance is upgrading now
-   the aliyun service in the instance need upgrade
-   the command delivery has been timeout
-   the file creation is failed due to unknown error
-   the authority of file is invalid
-   File content is empty
-   the content of file is invalid
-   File already exists
-   File name is invalid
-   File path is invalid
-   Owner not exists
-   Group not exists
-   Mode is invalid

the instance is not running when create task

ErrorCode

string

The error code returned when the file failed to be sent to the instance. Valid values:

-   Null: The file is sent to the instance.
-   InstanceNotExists: The instance does not exist or has been released.
-   InstanceReleased: The instance is released while the file is being sent.
-   InstanceNotRunning: The instance is not running when the file sending task is being created.
-   AccountNotExists: The specified account does not exist.
-   ClientNotRunning: Cloud Assistant Agent is not running.
-   ClientNotResponse: Cloud Assistant Agent does not respond.
-   ClientIsUpgrading: Cloud Assistant Agent is being upgraded.
-   ClientNeedUpgrade: Cloud Assistant Agent needs to be upgraded.
-   DeliveryTimeout: The file sending task timed out.
-   FileCreateFail: The file failed to be created.
-   FileAlreadyExists: A file with the same name exists in the specified directory.
-   FileContentInvalid: The file content is invalid.
-   FileNameInvalid: The file name is invalid.
-   FilePathInvalid: The specified directory is invalid.
-   FileAuthorityInvalid: The specified permissions on the file are invalid.
-   UserGroupNotExists: The specified user group does not exist.

InstanceNotExists

InstanceId

string

The ID of the instance.

i-uf614fhehhz\*\*\*\*

Tags

array<object>

The tags of the file sending task.

Tag

object

The tags of the file sending task.

TagKey

string

The tag key of the file sending task.

owner

TagValue

string

The tag value of the file sending task.

zhangsan

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PageNumber": 1,
  "TotalCount": 2,
  "NextToken": "AAAAAdDWBF2",
  "Invocations": {
    "Invocation": [
      {
        "CreationTime": "2019-12-20T06:15:54Z",
        "InvocationStatus": "Success",
        "ContentType": "PlainText",
        "TargetDir": "/home/user",
        "FileOwner": "test",
        "Description": "This is a test file.",
        "VmCount": 1,
        "FileMode": 777,
        "FileGroup": "test",
        "InvokeId": "f-hz0jdfwd9f****",
        "Name": "test.txt",
        "Content": "#!/bin/bash  echo \"Current User is :\"  echo $(ps | grep \"$$\" | awk '{print $2}')",
        "Overwrite": false,
        "InvokeInstances": {
          "InvokeInstance": [
            {
              "CreationTime": "2019-12-20T06:15:54Z",
              "StartTime": "2019-12-20T06:15:54Z",
              "InvocationStatus": "Success",
              "FinishTime": "2019-12-20T06:15:54Z",
              "UpdateTime": "2019-12-20T06:15:54Z",
              "ErrorInfo": "the instance is not running when create task",
              "ErrorCode": "InstanceNotExists",
              "InstanceId": "i-uf614fhehhz****"
            }
          ]
        },
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

MissingParameter.TagKey

You must specify Tag.N.Key.

The tag key is not specified.

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

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

500

InternalError.Dispatch

An error occurred when you dispatched the request.

An error occurred while the request is being sent. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSendFileResults?updateTime=2024-12-05#workbench-doc-change-demo)

2023-12-21

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSendFileResults?updateTime=2023-12-21#workbench-doc-change-demo)

2023-09-19

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSendFileResults?updateTime=2023-09-19#workbench-doc-change-demo)

2023-05-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSendFileResults?updateTime=2023-05-12#workbench-doc-change-demo)

2022-02-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSendFileResults?updateTime=2022-02-25#workbench-doc-change-demo)
