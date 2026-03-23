You can call the DescribeCdnReportList operation to query a list of all custom reports.

## Operation description

-   This operation returns the metadata of all custom reports but does not return the statistical data.
    
-   The call frequency for this operation is limited to 3 calls per second per user.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnReportList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnReportList)

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

cdn:DescribeCdnReportList

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

ReportId

integer

No

The ID of the report that you want to query. If you do not specify this parameter, all reports are queried by default.

1

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response body.

RequestId

string

The request ID.

04F0F334-1335-436C-A1D7-6C044FE73368

Content

object

The list of reports.

"data":\[{"reportId":1,"deliver":{"report":{"title":"DomainPvUv","format":"chart","shape":"line","xAxis":"ds","yAxis":"cnt","legend":"cnt\_type","header":\["ds","cnt\_type","cnt"\]}}}

data

array<object>

The report data.

array<object>

The report data.

deliver

object

The display format of the report.

report

object

The report information.

format

string

The display format.

table

header

array

The list of table headers.

string

The table header.

url

outLine

integer

The number of output rows.

0

outSize

integer

The output size.

0

shape

string

The chart type of the report.

line

title

string

The title of the report.

TopUrlByAcc

reportId

integer

The report ID.

1

**Description of the data parameter**

Parameter

Type

Description

reportId

Long

The report ID.

deliver

report

The report style.

**Description of the report parameter**

Parameter

Type

Description

title

String

The title of the report.

format

String

The report type. Valid values:  
chart: The report is a chart.  
table: The report is a table.  
  
  
  
  

shape

String

The chart type. If the format parameter is set to table, ignore this parameter. Valid values:  
line: line chart.  
pie: pie chart.  
bar: column chart.  
  
  
  
  
  
  
  

header

String\[\]

The table header fields of the report.

legend

String

The legend field of the chart.

xAxis

String

The x-axis of the chart. This parameter is empty if the chart does not have an x-axis.

yAxis

String

The y-axis of the chart. This parameter is empty if the chart does not have a y-axis.

## Examples

Success response

`JSON` format

```
{
  "RequestId": "04F0F334-1335-436C-A1D7-6C044FE73368",
  "Content": {
    "data": [
      {
        "deliver": {
          "report": {
            "format": "table",
            "header": [
              "url"
            ],
            "outLine": 0,
            "outSize": 0,
            "shape": "line",
            "title": "TopUrlByAcc"
          }
        },
        "reportId": 1
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

InvalidParameter

The specified parameter is invalid.

400

TimeParseFailed

Failed to parse the time parameter.

Failed to parse the time parameter.

400

SubscriptionAlreadyExists

The subscription already exists.

The subscription already exists.

400

SubscriptionNotFound

The subscription is not found.

The subscription is not found.

400

NameAlreadyExists

The name already exists.

The specified name already exists.

400

DeliverExceedLimit

The maximum number of subscribed tasks is exceeded.

The number of tracking tasks has reached the upper limit.

See [Error Codes](https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeCdnReportList#workbench-doc-change-demo) for a complete list.
