Queries whether Cloud Assistant Agent is installed on instances. If Cloud Assistant Agent is installed, the system queries the total number of Cloud Assistant commands that have been run, the number of Cloud Assistant commands that are being run, and the time when Cloud Assistant commands were last run.

## Operation description

## [](#usage-notes)[](#)Usage notes

-   Before you run commands on or send files to instances, especially new instances, we recommend that you query the status of Cloud Assistant on the instances by calling this operation and checking the return value of CloudAssistantStatus. Run commands on or send files to the instances only when the return value is true.
-   During a paged query, when you call the DescribeCloudAssistantStatus operation to retrieve the first page of results, set `MaxResults` to specify the maximum number of entries to return in the call. The return value of `NextToken` is a pagination token that can be used in the next call to retrieve a new page of results. When you call the DescribeCloudAssistantStatus operation to retrieve a new page of results, set `NextToken` to the `NextToken` value returned in the previous call and set `MaxResults` to specify the maximum number of entries to return in this call.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeCloudAssistantStatus)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeCloudAssistantStatus)

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

ecs:DescribeCloudAssistantStatus

get

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

The region ID of the instance. You can call [DescribeRegions](/help/en/ecs/api-regions-describeregions) to query the most recent region list.

cn-hangzhou

OSType

string

No

The operating system type of the instance. Valid values:

-   Windows
-   Linux
-   FreeBSD

Windows

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

The maximum number of entries per page. If you specify **InstanceId**, this parameter does not take effect.

Valid values: 1 to 50.

Default value: 10.

10

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken.

AAAAAdDWBF2

InstanceId

array

No

The instance ID.

string

No

The ID of instance N. The instance can be an Elastic Compute Service (ECS) instance or a managed instance. You can specify up to 100 instance IDs in a single request.

i-bp1iudwa5b1tqa\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

PageSize

long

The number of entries per page.

1

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

The total number of instances.

1

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

AAAAAdDWBF2

InstanceCloudAssistantStatusSet

array<object>

Details about the installation status of Cloud Assistant on the instances.

InstanceCloudAssistantStatus

object

CloudAssistantStatus

string

Indicates whether Cloud Assistant is running on the instance. Valid values:

-   true: Heartbeats are detected in the last 2 minutes.
-   false: No heartbeats are detected in the last 2 minutes.

true

LastInvokedTime

string

The time when commands were last run.

2021-03-15T08:00:00Z

CloudAssistantVersion

string

The version number of Cloud Assistant Agent. This parameter is empty if Cloud Assistant Agent is not installed or is not running on the instance.

2.2.0.106

ActiveTaskCount

long

The number of tasks that Cloud Assistant was running on the instance.

0

InvocationCount

long

The number of tasks that Cloud Assistant completed on the instance.

2

InstanceId

string

The ID of the instance.

i-bp1iudwa5b1tqa\*\*\*\*

LastHeartbeatTime

string

The last heartbeat time of Cloud Assistant. The value is updated every minute on average. The interval can be 55, 60, or 65 seconds.

2021-03-15T09:00:00Z

OSType

string

The operating system type of the instance. Valid values:

-   Windows
-   Linux
-   FreeBSD

Linux

SupportSessionManager

boolean

Indicates whether Cloud Assistant supports Session Manager on the instance. If Session Manager is not supported, the version of Cloud Assistant Agent is outdated. Update Cloud Assistant Agent to the latest version.

To support Session Manager, the version of Cloud Assistant Agent cannot be earlier than the following versions:

-   Linux: 2.2.3.189
-   Windows: 2.1.3.189

true

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 1,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PageNumber": 1,
  "TotalCount": 1,
  "NextToken": "AAAAAdDWBF2",
  "InstanceCloudAssistantStatusSet": {
    "InstanceCloudAssistantStatus": [
      {
        "CloudAssistantStatus": true,
        "LastInvokedTime": "2021-03-15T08:00:00Z",
        "CloudAssistantVersion": "2.2.0.106",
        "ActiveTaskCount": 0,
        "InvocationCount": 2,
        "InstanceId": "i-bp1iudwa5b1tqa****",
        "LastHeartbeatTime": "2021-03-15T09:00:00Z",
        "OSType": "Linux",
        "SupportSessionManager": true
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

MissingParam.InstanceId

The parameter instanceId is missing or empty.

\-

400

InvalidParam.PageSize

The specified parameter is invalid.

The specified PageSize parameter is invalid.

400

InvalidParam.PageNumber

The specified parameter is invalid.

The specified PageNumber parameter is invalid.

400

InvalidParameter.NextToken

The specified parameter NextToken is not valid.

The specified parameter NextToken is illegal.

400

InvalidParameter.MaxResults

The specified parameter MaxResults is not valid.

The specified parameter MaxResults is illegal.

403

InstanceIds.ExceedLimit

The number of instance IDs exceeds the upper limit.

The number of specified instance IDs exceeds the upper limit.

403

Operation.Forbidden

The operation is not permitted.

The operation is not supported.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidInstance.NotFound

The specified instance does not exist.

\-

500

InternalError.Dispatch

An error occurred when you dispatched the request.

An error occurred while the request is being sent. Try again later.

500

ServiceUnavailable

The request has failed due to a temporary failure of the server.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeCloudAssistantStatus?updateTime=2024-12-05#workbench-doc-change-demo)

2023-12-21

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeCloudAssistantStatus?updateTime=2023-12-21#workbench-doc-change-demo)

2023-05-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeCloudAssistantStatus?updateTime=2023-05-12#workbench-doc-change-demo)

2021-08-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeCloudAssistantStatus?updateTime=2021-08-13#workbench-doc-change-demo)

2021-08-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeCloudAssistantStatus?updateTime=2021-08-13#workbench-doc-change-demo)
