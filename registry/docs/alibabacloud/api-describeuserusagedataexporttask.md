Queries usage export tasks that were created in the last three months.

## Operation description

**Note**

You can call this operation up to 100 times per second per account.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeUserUsageDataExportTask)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeUserUsageDataExportTask)

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

cdn:DescribeUserUsageDataExportTask

get

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

PageSize

string

No

The number of entries to return on each page. Default value: **20**. Maximum value: **50**.

Valid values: an integer from **1** to **50**.

20

PageNumber

string

No

The number of the page to return. Valid values: **1** to **100000**.

1

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

A91BE91F-0B34-4CBF-8E0F-A2977E15AA52

UsageDataPerPage

object

The usage details returned per page.

PageSize

integer

The number of entries returned per page.

10

PageNumber

integer

The page number of the returned page.

1

TotalCount

integer

The total number of entries returned.

10

Data

object

DataItem

array<object>

The information about the tasks.

array<object>

Status

string

The state of the task.

-   created: The task is being created.
    
-   success: The task is successful.
    
-   failed: The task failed.
    

success

UpdateTime

string

The time when the task was last modified.

2019-12-31T08:45:02Z

DownloadUrl

string

The download URL.

https://cdn-polaris.xxxx

CreateTime

string

The time when the task was created.

2019-12-31T08:43:21Z

TaskName

string

The name of the task.

刷新

TaskId

string

The ID of the task.

A91BE91F-0B34-4CBF-8E0F-A2977

TaskConfig

object

The configurations of the task.

EndTime

string

The end of the time range that was queried.

2019-12-30T15:59:59Z

StartTime

string

The start of the time range during which data was queried.

2019-12-29T16:00:00Z

## Examples

Success response

`JSON` format

```
{
  "RequestId": "A91BE91F-0B34-4CBF-8E0F-A2977E15AA52",
  "UsageDataPerPage": {
    "PageSize": 10,
    "PageNumber": 1,
    "TotalCount": 10,
    "Data": {
      "DataItem": [
        {
          "Status": "success",
          "UpdateTime": "2019-12-31T08:45:02Z",
          "DownloadUrl": "https://cdn-polaris.xxxx",
          "CreateTime": "2019-12-31T08:43:21Z",
          "TaskName": "刷新",
          "TaskId": "A91BE91F-0B34-4CBF-8E0F-A2977",
          "TaskConfig": {
            "EndTime": "2019-12-30T15:59:59Z",
            "StartTime": "2019-12-29T16:00:00Z"
          }
        }
      ]
    }
  }
}
```

Error response

`JSON` format

```
{
  "RequestId": "A91BE91F-0B34-4CBF-8E0F-A2977E15AA52",
  "UsageDataPerPage": {
    "PageSize": 10,
    "TotalCount": 1,
    "PageNumber": 1,
    "Data": {
      "DataItem": [
        {
          "TaskId": 11,
          "UpdateTime": "2018-10-09T06:35:01Z",
          "DownloadUrl": "example.com",
          "UpdateTime": "2018-10-09T06:35:46Z",
          "CreateTime": "2018-10-09T06:33:38Z",
          "Status": "success"
          "TaskConfig": {
            "StartTime": "2018-07-31T16:00:00Z",
            "EndTime": "2018-08-31T15:59:59Z"
          },
        }
      ]
    }
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameterProduct

Invalid Parameter Product.

The Product parameter is set to an invalid value.

400

InvalidParameterOperator

Invalid Parameter Operator.

The Operator parameter is set to an invalid value.

See [Error Codes](https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeUserUsageDataExportTask#workbench-doc-change-demo) for a complete list.
