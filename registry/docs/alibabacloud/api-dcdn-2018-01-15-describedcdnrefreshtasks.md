Call the DescribeDcdnRefreshTasks operation to query the status of refresh and prefetch tasks. You can query data generated within the last three days.

## Operation description

-   You can query tasks by task ID or URL.
    
-   You can specify both **TaskId** and **ObjectPath**. If you do not specify **TaskId** or **ObjectPath**, the system queries the first page of data (20 entries) generated within the last three days by default.
    
-   You can query data generated within the last three days.
    
-   If you specify **DomainName** or **Status**, you must also specify **ObjectType**.
    
-   The maximum number of calls that a single user can make per second is 5.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/dcdn/2018-01-15/DescribeDcdnRefreshTasks)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/dcdn/2018-01-15/DescribeDcdnRefreshTasks)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

dcdn:DescribeDcdnRefreshTasks

get

domain

`acs:dcdn:*:{#accountId}:domain/{#domainName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

TaskId

string

No

The ID of the task. A task ID is returned after you create a refresh or prefetch task.

704225667

ObjectPath

string

No

The path of the object that you want to query. The path must be an exact match.

http://example.com/examplefile.txt

PageNumber

integer

No

The number of the page to return. Valid values: **1** to **100000**.

2

ObjectType

string

No

The type of the task. Valid values:

-   **file**: refreshes a URL.
    
-   **directory**: refreshes a directory.
    
-   **regex**: refreshes content based on a regular expression.
    
-   **preload**: prefetches a URL.
    

This parameter is required if you specify **DomainName** or **Status**.

file

DomainName

string

No

The accelerated domain name. You can specify only one domain name. If you do not specify this parameter, all accelerated domain names are queried.

example.com

Status

string

No

The status of the task. Valid values:

-   **Complete**: The task is complete.
    
-   **Refreshing**: The task is in progress.
    
-   **Failed**: The task failed.
    

Complete

PageSize

integer

No

The number of entries to return on each page. Default value: **20**. Maximum value: **50**. Valid values: **1** to **50**.

20

StartTime

string

No

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in Coordinated Universal Time (UTC).

2017-01-01T12:12:20Z

EndTime

string

No

The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

**Note**

The end time must be later than the start time.

2017-01-01T12:13:20Z

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

174F6032-AA26-470D-B90E-36F0EB205BEE

PageNumber

integer

The page number.

2

PageSize

integer

The number of entries per page.

2

TotalCount

integer

The total number of tasks.

20

Tasks

object

Task

array<object>

The list of tasks.

object

Status

string

The status of the task. Valid values:

-   **Complete**: The task is complete.
    
-   **Refreshing**: The task is in progress.
    
-   **Failed**: The task failed.
    

Complete

CreationTime

string

The time when the task was created. The time is in UTC.

2014-11-27T08:23:22Z

ObjectType

string

The type of the task. Valid values:

-   **file**: refreshes a URL.
    
-   **path**: refreshes a directory.
    
-   **regex**: refreshes content based on a regular expression.
    
-   **preload**: prefetches a URL.
    

file

Process

string

The progress of the task in percentage.

10

Description

string

The error message returned if the refresh or prefetch task failed.

-   **InternalError**: An internal error occurred.
    
-   **OriginTimeout**: The origin server timed out.
    
-   **OriginReturn StatusCode 5XX**: The origin server returned a 5xx error code.
    

InternalError

ObjectPath

string

The path of the refreshed object.

http://example.com/examplefile.txt

TaskId

string

The ID of the task.

123

## Examples

Success response

`JSON` format

```
{
  "RequestId": "174F6032-AA26-470D-B90E-36F0EB205BEE",
  "PageNumber": 2,
  "PageSize": 2,
  "TotalCount": 20,
  "Tasks": {
    "Task": [
      {
        "Status": "Complete",
        "CreationTime": "2014-11-27T08:23:22Z",
        "ObjectType": "file",
        "Process": "10",
        "Description": "InternalError",
        "ObjectPath": "http://example.com/examplefile.txt",
        "TaskId": "123"
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidTaskId.Malformed

The specified TaskId is invalid.

The value specified for the TaskId parameter is invalid.

400

MissingParameter.ObjectType

The ObjectType parameter is required if DomainName or ObjectType is specified.

Specify the ObjectType parameter.

400

MissingTimeParameter

The StartTime and EndTime must be both specified.

You must set both the start time and the end time.

400

InvalidEndTime.Mismatch

The specified EndTime is earlier than the StartTime.

The end time is earlier than the start time.

400

DomainNameOverLimit

A maximum of 500 domains are supported for each request.

The number of domain names cannot exceed 500.

400

InvalidTime

The query time cannot exceed the last 3 days.

You can query data up to the last three days.

400

InvalidStartTime.Malformed

The specified StartTime parameter is invalid.

The format of the specified start time is invalid. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

400

InvalidEndTime.Malformed

The specified EndTime is invalid.

The format of the specified end time is invalid. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

400

InvalidStartTime.ValueNotSupported

The specified StartTime is invalid.

The specified start time is invalid.

400

InvalidObjectType.ValueNotSupported

The specified ObjectType is not supported.

The specified ObjectType parameter is invalid.

400

InvalidStatus.ValueNotSupported

The specified Status is not supported.

The specified Status parameter is invalid.

429

TooManyRequests

The server is busy. Please try again later.

The server is unavailable. Try again later.

See [Error Codes](https://api.alibabacloud.com/document/dcdn/2018-01-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/dcdn/2018-01-15/DescribeDcdnRefreshTasks#workbench-doc-change-demo) for a complete list.
