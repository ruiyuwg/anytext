Sends a file to one or more Elastic Compute Service (ECS) instances.

## Operation description

## [](#usage-notes)[](#)Usage notes

-   The instances to which you want to send a file must be in the Running (`Running`) state.
    
-   [Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent) must be installed on the instances.
    
-   Only Cloud Assistant Agent versions that are later than the following ones support file sending. If the `ClientNeedUpgrade` error code is returned, update Cloud Assistant Agent to the latest version.
    
    -   For Linux instances, the version of Cloud Assistant Agent must be later than 1.0.2.569.
    -   For Windows instances, the version of Cloud Assistant Agent must be later than 1.0.0.149.
-   The file to be sent must not exceed 32 KB in size after it is encoded in Base64.
    
-   The file may fail to be sent due to instance exceptions, network exceptions, or exceptions on Cloud Assistant Agent. If the file fails to be sent, call the [DescribeSendFileResults](/help/en/ecs/api-describesendfileresults) operation or see [Check execution results and troubleshoot common issues](/help/en/ecs/user-guide/check-execution-results-and-troubleshoot-common-issues) for troubleshooting.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/SendFile)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/SendFile)

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

ecs:SendFile

update

\*Instance

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

The region ID of the instance to which to send the file. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ResourceGroupId

string

No

The ID of the resource group. When you specify this parameter, take note of the following items:

-   The instance specified by the InstanceId parameter must belong to the specified resource group.
-   If you specify this parameter, you can call the [DescribeSendFileResults](/help/en/ecs/api-describesendfileresults) operation to query file sending results in the specified resource group.

rg-bp67acfmxazb4p\*\*\*\*

Name

string

Yes

The name of the file. The name can be up to 255 characters in length and can contain any characters.

file.txt

Description

string

No

The description of the file. The description can be up to 512 characters in length and can contain any characters.

This is a test file.

Timeout

long

No

The timeout period for the file sending task. Unit: seconds.

-   A timeout error occurs when a file cannot be sent because the process slows down or because a specific module or Cloud Assistant Agent does not exist.
-   If the specified timeout period is less than 10 seconds, the system sets the timeout period to 10 seconds to ensure that the file can be sent to the instances.

Default value: 60.

60

TargetDir

string

Yes

The destination directory on the instance to which to send the file. If the specified directory does not exist, the system creates the directory on the instance. The value cannot exceed 255 characters in length.

/home

ContentType

string

No

The content type of the file. Valid values:

-   PlainText: The file content is not encoded.
-   Base64: The file content is encoded in Base64.

Default value: PlainText.

PlainText

Content

string

Yes

The content of the file. The file must not exceed 32 KB in size after it is encoded in Base64.

-   If `ContentType` is set to `PlainText`, the value of Content is in plaintext.
-   If `ContentType` is set to `Base64`, the value of Content is Base64-encoded.

#!/bin/bash echo "Current User is :" echo $(ps | grep "$$" | awk '{print $2}') -------- oss://bucketName/objectName

FileOwner

string

No

The owner of the file. This parameter takes effect only on Linux instances. Default value: root. The value can be up to 64 characters in length.

**Note** If you want to use a non-root user, make sure that the user exists in the instances.

test

FileGroup

string

No

The group of the file. This parameter takes effect only on Linux instances. Default value: root. The value can be up to 64 characters in length.

**Note** If you want to use a non-root user group, make sure that the user group exists in the instances.

test

FileMode

string

No

The permissions on the file. This parameter takes effect only on Linux instances. You can configure this parameter in the same way as you configure the chmod command.

Default value: 0644, which indicates that the owner of the file has the read and write permissions on the file and that the user group of the file and other users have the read-only permissions on the file.

0644

Overwrite

boolean

No

Specifies whether to overwrite a file in the destination directory if the file has the same name as the sent file.

-   true
-   false

Default value: false.

true

InstanceId

array

Yes

The IDs of instances to which to send the file. You can specify up to 50 instance IDs in each request. Valid values of N: 1 to 50.

string

Yes

The ID of instance N to which to send the file. You can specify up to 50 instance IDs in each request. Valid values of N: 1 to 50.

i-bp185dy2o3o6n\*\*\*\*

Tag

array<object>

No

The tags to add to the file sending task.

object

No

The list of tags.

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

The value of tag N to add to the file sending task. Valid values of N: 1 to 20. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.

TestValue

## Response parameters

Parameter

Type

Description

Example

object

InvokeId

string

The ID of the command task.

f-7d2a745b412b46\*\*\*\*

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "InvokeId": "f-7d2a745b412b46****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
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

MissingParam.InstanceId

The parameter instanceId is missing or empty.

\-

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

FileTargetDir.Invalid

The target directory of file is invalid.

The specified TargetDir parameter is invalid.

400

FileMode.Invalid

The mode of file is invalid.

The specified FileMode parameter is invalid.

400

FileContent.DecodeError

The Content can not be base64 decoded.

An error occurred when the file is decoded in Base64.

400

FileContentType.Invalid

The ContentType of file is invalid.

The specified ContentType parameter is invalid.

400

InvalidParameter.FileOwner

The specified parameter FileOwner is not valid.

\-

400

InvalidParameter.FileGroup

The specified parameter FileGroup is not valid.

\-

403

FileSize.ExceedLimit

The length of file content exceeds limit.

The length of the file content exceeds the upper limit.

403

FileName.ExceedLimit

The length of file name exceeds limit.

The length of the file name exceeds the upper limit.

403

FileDesc.ExceedLimit

The length of file description exceeds limit.

The length of the file description exceeds the upper limit.

403

InstanceIds.ExceedLimit

The number of instance IDs exceeds the upper limit.

The number of specified instance IDs exceeds the upper limit.

403

Operation.Forbidden

The operation is not permitted.

The operation is not supported.

403

InvalidTimeout.ExceedLimit

The specified parameter Timeout exceeds the upper limit.

\-

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidInstance.NotFound

The specified instances not found.

The specified instance ID does not exist.

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

500

InternalError.Dispatch

An error occurred when you dispatched the request.

An error occurred while the request is being sent. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/SendFile?updateTime=2025-12-09#workbench-doc-change-demo)

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/SendFile?updateTime=2024-12-05#workbench-doc-change-demo)

2023-05-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/SendFile?updateTime=2023-05-12#workbench-doc-change-demo)

2022-02-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/SendFile?updateTime=2022-02-25#workbench-doc-change-demo)
