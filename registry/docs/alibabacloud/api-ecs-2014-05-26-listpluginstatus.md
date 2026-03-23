Queries the states of Cloud Assistant plug-ins on Elastic Compute Service (ECS) instances.

## Operation description

-   Before you call this operation to query the status of Cloud Assistant plug-ins on ECS instances, make sure that the versions of Cloud Assistant Agent on the instances are not earlier than the following ones:
    
    -   2.2.3.344 for Linux instances
    -   2.1.3.344 for Windows instances
-   During a paged query, when you call the ListPluginStatus operation to retrieve the first page of results, set `MaxResults` to specify the maximum number of entries to return in the call. The return value of `NextToken` is a pagination token that can be used in the next call to retrieve a new page of results. When you call the ListPluginStatus operation to retrieve a new page of results, set `NextToken` to the `NextToken` value returned in the previous call and set `MaxResults` to specify the maximum number of entries to return in this call.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ListPluginStatus)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ListPluginStatus)

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

ecs:ListPluginStatus

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#InstanceId}`

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

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceId

array

No

The ID of the instance.

string

No

The ID of instance N. You can specify up to 50 instance IDs in each request. Valid values of N: 1 to 50.

i-bp1iudwa5b1tqa\*\*\*\*

Name

string

No

The name of the Cloud Assistant plug-in. The name supports all character sets and must be 1 to 255 characters in length.

-   If this parameter is not specified, the status of all Cloud Assistant plug-ins that are installed on the specified instances are queried.
    
    \*\*
    
    **Note** If this parameter is not specified, only a single instance ID can be specified.
    
-   If this parameter is specified, the status of the specified Cloud Assistant plug-in is queried.
    

testPluginName

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

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

PageNumber

long

The page number.

1

TotalCount

long

The total number of entries returned.

1

NextToken

string

The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.

AAAAAdDWBF2

InstancePluginStatusSet

array<object>

The states of Cloud Assistant plug-ins on the instances.

InstancePluginStatus

object

InstanceId

string

The ID of the instance.

i-xxxxx

PluginStatusSet

array<object>

The queried Cloud Assistant plug-ins.

PluginStatus

object

PluginStatus

string

The state of the Cloud Assistant plug-in. Valid values:

-   NotInstalled: The plug-in is not installed.
-   Installed: The one-time plug-in is installed.
-   Running: The long-running plug-in is running.
-   Stopped: The long-running plug-in is not running.
-   Crashed: The plug-in is abnormal.
-   Removed: The plug-in is uninstalled.
-   Unknown: The state of the plug-in is unknown.

Running

PluginVersion

string

The version of the plug-in.

1.1

PluginName

string

The name of the plug-in.

testName

FirstHeartbeatTime

string

The first time when Cloud Assistant reported the state of the plug-in.

2020-01-19T09:15:46Z

LastHeartbeatTime

string

The last time when Cloud Assistant reported the state of the plug-in.

2020-01-19T09:15:46Z

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "PageNumber": 1,
  "TotalCount": 1,
  "NextToken": "AAAAAdDWBF2",
  "InstancePluginStatusSet": {
    "InstancePluginStatus": [
      {
        "InstanceId": "i-xxxxx",
        "PluginStatusSet": {
          "PluginStatus": [
            {
              "PluginStatus": "Running",
              "PluginVersion": 1.1,
              "PluginName": "testName",
              "FirstHeartbeatTime": "2020-01-19T09:15:46Z",
              "LastHeartbeatTime": "2020-01-19T09:15:46Z"
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

InvalidParam.PageNumber

The specified parameter PageNumber is invalid.

The specified PageNumber parameter is invalid.

400

InvalidParam.PageSize

The specified parameter PageSize is invalid.

The specified PageSize parameter is invalid.

400

PluginName.MissingValue

The plugin name must be specified when the number of InstanceIds is not 1.

The plug-in name must be specified when no or multiple instance IDs are specified.

400

InstanceIds.ExceedLimit

The number of instance IDs exceeds the upper limit.

The number of specified instance IDs exceeds the upper limit.

400

InvalidParameter.NextToken

The specified parameter NextToken is not valid.

The specified parameter NextToken is illegal.

400

InvalidParameter.MaxResults

The specified parameter MaxResults is not valid.

The specified parameter MaxResults is illegal.

404

InvalidInstance.NotFound

The specified instance does not exist.

\-

404

InvalidPluginName.NotFound

The specified plugin name does not exist.

The specified plug-in name does not exist.

500

InternalError.Dispatch

An error occurred when you dispatched the request.

An error occurred while the request is being sent. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).
