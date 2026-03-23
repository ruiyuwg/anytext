Queries tasks that were used to export resource usage details of one or more accelerated domain names that belong to your Alibaba Cloud account. Resource usage information is collected every five minutes.

## Operation description

-   This operation has been available since July 20, 2018. You can query information about resource usage collected within the last three months.
    
-   You can call this operation up to 100 times per second per account.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeUserUsageDetailDataExportTask)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeUserUsageDetailDataExportTask)

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

cdn:DescribeUserUsageDetailDataExportTask

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

10

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

1

Data

object

DataItem

array<object>

The information about the task.

array<object>

Status

string

The status of the task.

success

UpdateTime

string

The time when the task was last modified.

2018-10-09T06:35:46Z

DownloadUrl

string

The download URL.

https://test.oss-cn-beijing.aliyuncs.com/billing\_data/xxx

CreateTime

string

The time when the task was created.

2018-10-09T06:33:38Z

TaskName

string

The name of the task.

刷新

TaskId

string

The ID of the task.

11

TaskConfig

object

The configurations of the task.

EndTime

string

The end of the time range during which data was queried.

2018-08-31T15:59:59Z

StartTime

string

The start of the time range during which data was queried.

2018-07-31T16:00:00Z

## Examples

Success response

`JSON` format

```
{
  "RequestId": "A91BE91F-0B34-4CBF-8E0F-A2977E15AA52",
  "UsageDataPerPage": {
    "PageSize": 10,
    "PageNumber": 1,
    "TotalCount": 1,
    "Data": {
      "DataItem": [
        {
          "Status": "success",
          "UpdateTime": "2018-10-09T06:35:46Z",
          "DownloadUrl": "https://test.oss-cn-beijing.aliyuncs.com/billing_data/xxx",
          "CreateTime": "2018-10-09T06:33:38Z",
          "TaskName": "刷新",
          "TaskId": "11",
          "TaskConfig": {
            "EndTime": "2018-08-31T15:59:59Z",
            "StartTime": "2018-07-31T16:00:00Z"
          }
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

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeUserUsageDetailDataExportTask#workbench-doc-change-demo) for a complete list.
