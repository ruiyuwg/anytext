Queries managed instances.

## Operation description

During a paged query, when you call the DescribeManagedInstances operation to retrieve the first page of results, set `MaxResults` to specify the maximum number of entries to return in the call. The return value of `NextToken` is a pagination token that can be used in the next call to retrieve a new page of results. When you call the DescribeManagedInstances operation to retrieve a new page of results, set `NextToken` to the `NextToken` value returned in the previous call and set `MaxResults` to specify the maximum number of entries to return in this call.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeManagedInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeManagedInstances)

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

ecs:DescribeManagedInstances

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

The region ID. Supported regions: China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, Japan (Tokyo), US (Silicon Valley), and US (Virginia).

You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

OsType

string

No

The operating system type of the managed instance. Valid values:

-   windows
-   linux
-   FreeBSD

windows

InstanceIp

string

No

The internal or public IP address of the managed instance.

192.168.\*\*.\*\*

ActivationId

string

No

The ID of the activation code.

4ECEEE12-56F1-4FBC-9AB1-890F7494\*\*\*\*

MachineId

string

No

The value of the MachineId parameter that you specify when you register a managed instance. A maximum of 36 characters are allowed. Sample registration script:

```
aliyun-service --register \
  --RegionId=cn-hangznou \
  --ActivationId=xxxxxxxxxxx \
  --ActivationCode=xxxxxxxxx \
--MachineId=xxxxxx \ # Optional. The unique identifier of the machine.
  --ForceResue                 
```

-   If the MachineId and ForceResult parameters are specified during registration, the Cloud Assistant generates a fixed managed instance ID for this MachineId.
-   If the MachineId parameter is not explicitly specified, the Cloud Assistant will automatically generate a MachineId value based on the hardware information of the machine.
-   We recommend that you explicitly specify the MachineId and ForceResult parameters to mark the mapping between a managed instance and an on-premises machine.

GOG4X8312A0188

InstanceName

string

No

The name of the managed instance.

my-webapp-server

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

InstanceId

array

No

The ID of managed instance N. Valid values of N: 1 to 50.

string

No

The ID of managed instance N. Valid values of N: 1 to 50.

mi-hz018jrc1o0\*\*\*\*

Tag

array<object>

No

The tags of the managed instance.

object

No

The tag of the managed instance.

Key

string

No

The key of tag N of the managed instance. Valid values of N: 1 to 20. The tag key cannot be an empty string.

If a single tag is specified to query resources, up to 1,000 resources that have this tag added can be displayed in the response. If multiple tags are specified to query resources, up to 1,000 resources that have all these tags added can be displayed in the response. To query more than 1,000 resources that have specified tags added, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

The tag key can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

TestKey

Value

string

No

The value of tag N of the managed instance. Valid values of N: 1 to 20. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.

TestValue

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

AAAAAdDWBF2\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group to which the managed instance belongs.

rg-123\*\*\*\*\*\*

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

77115469-F2C5-4ECA-94F7-FA04F2FD\*\*\*\*

PageNumber

long

The page number.

1

TotalCount

long

The total number of queried managed instances.

1

Instances

array<object>

The queried managed instances.

Instance

object

LastInvokedTime

string

The time when the last Cloud Assistant task was executed.

2021-01-20T09:00:40Z

Connected

boolean

Indicates whether the managed instance is connected. Valid values:

-   true: The managed instance is connected. You can manage the instance by using Cloud Assistant.
-   false: The managed instance is not connected. The managed instance may be down or Cloud Assistant Agent may be incorrectly installed.

true

InternetIp

string

The public IP address of the managed instance.

40.65.\*\*.\*\*

Hostname

string

The hostname of the managed instance.

demo

InstanceId

string

The ID of the managed instance.

mi-hz018jrc1o0\*\*\*\*

ActivationId

string

The ID of the activation code.

3704F543-F768-43FA-9864-897F75B3\*\*\*\*

IntranetIp

string

The internal IP address of the managed instance.

10.0.\*\*.\*\*

AgentVersion

string

The version number of Cloud Assistant Agent.

2.2.0.102

RegistrationTime

string

The time when the managed instance was registered.

2021-01-20T08:57:56Z

InstanceName

string

The name of the managed instance.

webAPP-linux-01

OsType

string

The operating system type of the managed instance.

Linux

OsVersion

string

The version information of the operating system.

Linux\_#38~18.04.1-Ubuntu SMP Wed Jan 6 18:26:30 UTC 2021\_x86\_64

InvocationCount

long

The number of times that Cloud Assistant tasks were executed on the managed instance.

1

MachineId

string

The machine code of the managed instance.

e03231b37ab14e53b5795ad625fc\*\*\*\*

Tags

array<object>

The tags of the managed instance.

Tag

object

The tag of the managed instance.

TagKey

string

The key of tag N of the managed instance. Valid values of N: 1 to 20. The tag key cannot be an empty string.

If a single tag is specified to query resources, up to 1,000 resources that have this tag added are returned. If multiple tags are specified to query resources, up to 1,000 resources that have all these tags added are returned. To query more than 1,000 resources that have the specified tags, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.

TestKey

TagValue

string

The value of tag N of the managed instance. Valid values of N: 1 to 20. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.

TestValue

ResourceGroupId

string

The ID of the resource group to which the managed instance belongs.

rg-123\*\*\*\*\*\*

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

AAAAAdDWBF2

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "77115469-F2C5-4ECA-94F7-FA04F2FD****",
  "PageNumber": 1,
  "TotalCount": 1,
  "Instances": [
    {
      "LastInvokedTime": "2021-01-20T09:00:40Z",
      "Connected": true,
      "InternetIp": "40.65.**.**",
      "Hostname": "demo",
      "InstanceId": "mi-hz018jrc1o0****",
      "ActivationId": "3704F543-F768-43FA-9864-897F75B3****",
      "IntranetIp": "10.0.**.**",
      "AgentVersion": "2.2.0.102",
      "RegistrationTime": "2021-01-20T08:57:56Z",
      "InstanceName": "webAPP-linux-01",
      "OsType": "Linux",
      "OsVersion": "Linux_#38~18.04.1-Ubuntu SMP Wed Jan 6 18:26:30 UTC 2021_x86_64",
      "InvocationCount": 1,
      "MachineId": "e03231b37ab14e53b5795ad625fc****",
      "Tags": [
        {
          "TagKey": "TestKey",
          "TagValue": "TestValue"
        }
      ],
      "ResourceGroupId": "rg-123******"
    }
  ],
  "NextToken": "AAAAAdDWBF2"
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

InvalidParam.PageNumber

The specified parameter is invalid.

The specified PageNumber parameter is invalid.

400

InvalidParam.PageSize

The specified parameter is invalid.

The specified PageSize parameter is invalid.

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

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

2025-12-19

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeManagedInstances?updateTime=2025-12-19#workbench-doc-change-demo)

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeManagedInstances?updateTime=2024-12-05#workbench-doc-change-demo)

2023-12-21

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeManagedInstances?updateTime=2023-12-21#workbench-doc-change-demo)

2023-11-23

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeManagedInstances?updateTime=2023-11-23#workbench-doc-change-demo)

2022-02-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeManagedInstances?updateTime=2022-02-25#workbench-doc-change-demo)
