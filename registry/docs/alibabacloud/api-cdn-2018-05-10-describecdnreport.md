Calls the DescribeCdnReport operation to query data from customized reports.

## Operation description

**Note**

The call frequency is limited to 3 calls per second for each user.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnReport)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnReport)

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

cdn:DescribeCdnReport

get

\*Domain

`acs:cdn:*:{#accountId}:domain/{#DomainName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DomainName

string

No

The domain names that you want to query. Separate multiple domain names with commas (,).

www.example1.com,example2.com

ReportId

integer

Yes

The ID of the report that you want to query. You can specify only one report ID in each call. You can call the [DescribeCdnSubList](/help/en/cdn/api-describecdnsublist) operation to query report IDs.

1

Area

string

No

The English name of the region. You can call the [DescribeCdnRegionAndIsp](/help/en/cdn/api-describecdnregionandisp) operation to obtain the English names of regions.

-   If you do not set this parameter, data in all regions is queried.
    
-   If you specify one or more regions, data in the specified regions is returned. Separate multiple regions with commas (,).
    

shanghai

IsOverseas

string

No

Specifies whether the region is outside the Chinese mainland. Valid values:

-   **1**: regions outside the Chinese mainland.
    
-   **0**: the Chinese mainland.
    

0

HttpCode

string

No

The HTTP status code. Valid values:

-   **2xx**: 2xx status codes.
    
-   **3xx**: 3xx status codes.
    
-   **4xx**: 4xx status codes.
    
-   **5xx**: 5xx status codes.
    

If you do not set this parameter, data for all the preceding HTTP status codes is queried.

2xx

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2020-09-17T00:00:00Z

EndTime

string

Yes

The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2020-09-17T01:00:00Z

**Required request parameters for each report**

Report name

Required parameters

Description

Page views (PV) and unique visitors (UV)

Action, ReportId, DomainName, StartTime, and EndTime.

Other parameters are not supported.

Top client IPs (sorted by traffic)

Action, ReportId, DomainName, Area, StartTime, and EndTime.

Other parameters are not supported.

Top client IPs (sorted by number of requests)

Action, ReportId, DomainName, Area, StartTime, and EndTime.

Other parameters are not supported.

Access region distribution

Action, ReportId, DomainName, IsOverseas, StartTime, and EndTime.

Other parameters are not supported.

Carrier distribution

Action, ReportId, DomainName, IsOverseas, StartTime, and EndTime.

Other parameters are not supported.

Popular Referers (sorted by traffic)

Action, ReportId, DomainName, StartTime, and EndTime.

Other parameters are not supported.

Popular Referers (sorted by number of requests)

Action, ReportId, DomainName, StartTime, and EndTime.

Other parameters are not supported.

Popular URLs (sorted by traffic)

Action, ReportId, DomainName, HttpCode, StartTime, and EndTime.

Other parameters are not supported.

Popular URLs (sorted by number of requests)

Action, ReportId, DomainName, HttpCode, StartTime, and EndTime.

Other parameters are not supported.

Popular origin fetch URLs (sorted by traffic)

Action, ReportId, DomainName, HttpCode, StartTime, and EndTime.

Other parameters are not supported.

Popular origin fetch URLs (sorted by number of requests)

Action, ReportId, DomainName, HttpCode, StartTime, and EndTime.

Other parameters are not supported.

Domain name ranking (sorted by traffic)

Action, ReportId, StartTime, and EndTime.

Other parameters are not supported.

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Content

object

The data of the queried report.

{ "data": \[ { "deliver": { "report": { "title": "TopUrlByAcc", "format": "table", "shape": "", "header": \[ "url", "traf", "traf\_rate", "acc", "acc\_rate" \] } }, "data": \[ { "acc": 440, "acc\_rate": "0.200%", "traf": 22, "url": "http://demo.com", "traf\_rate": "0.100%" }, { "acc": 440, "acc\_rate": "0.200%", "traf": 22, "url": "http://demo.com", "traf\_rate": "0.100%" } \] } \] }

data

array<object>

array<object>

data

array<object>

object

string

deliver

object

report

object

format

string

table

header

array

string

acc

outLine

integer

0

outSize

integer

0

shape

string

line

title

string

test

RequestId

string

The ID of the request.

04F0F334-1335-436C-A1D7-6C044FE73368

**Description of data**

Parameter

Type

Description

deliver

report

The style of the report.

data

String\[\]

The data in the report. Example: \[{"Table header field 1":"value1","Table header field 2":"value2"}, {"Table header field 1":"value3","Table header field 2":"value4"}\]

**Description of report data**

Parameter

Type

Description

title

String

The title of the report.

format

String

The type of the report. Valid values:  
chart: The report is a chart.  
table: The report is a table.  
  
  
  
  

shape

String

The type of the chart. This field is ignored when format is set to table. Valid values:  
line: line chart.  
pie: pie chart.  
bar: bar chart.  
  
  
  
  
  
  
  

header

String\[\]

The header fields of the report table.

legend

String

The legend field of the chart.

xAxis

String

The x-axis of the chart. This field is empty if the chart does not have an x-axis.

yAxis

String

The y-axis of the chart. This field is empty if the chart does not have a y-axis.

## Examples

Success response

`JSON` format

```
{
  "Content": {
    "data": [
      {
        "data": [
          {
            "key": ""
          }
        ],
        "deliver": {
          "report": {
            "format": "table",
            "header": [
              "acc"
            ],
            "outLine": 0,
            "outSize": 0,
            "shape": "line",
            "title": "test"
          }
        }
      }
    ]
  },
  "RequestId": "04F0F334-1335-436C-A1D7-6C044FE73368"
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

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeCdnReport#workbench-doc-change-demo) for a complete list.
