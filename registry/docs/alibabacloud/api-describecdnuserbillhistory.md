Queries the billing history under your Alibaba Cloud account.

## Operation description

-   You can query billing history up to the last one month.
    
-   You can call this operation up to 100 times per second per account.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnUserBillHistory)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnUserBillHistory)

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

cdn:DescribeCdnUserBillHistory

none

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

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

The minimum data granularity is 5 minutes.

2018-09-30T16:00:00Z

EndTime

string

Yes

The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

The end time must be later than the start time.

2018-10-31T16:00:00Z

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

ED61C6C3-8241-4187-AAA7-5157AE175CEC

BillHistoryData

object

BillHistoryDataItem

array<object>

The billing history returned.

array<object>

Dimension

string

The dimension.

flow

BillType

string

The metering method.

month\_4th\_day\_bandwidth

BillTime

string

The beginning of the time range that was queried.

2018-09-30T16:00:00Z

BillingData

object

BillingDataItem

array<object>

The billable items.

object

Flow

number

The amount of network traffic. Unit: bytes.

24567

Bandwidth

number

The bandwidth. Unit: bit/s.

4041

Count

number

The number of requests.

203601

CdnRegion

string

The billable region. Valid values:

-   **CN**: Chinese mainland
    
-   **OverSeas**: outside the Chinese mainland
    
-   **AP1**: Asia Pacific 1
    
-   **AP2**: Asia Pacific 2
    
-   **AP3**: Asia Pacific 3
    
-   **NA**: North America
    
-   **SA**: South America
    
-   **EU**: Europe
    
-   **MEAA**: Middle East and Africa
    

AP1

ChargeType

string

The billing method. Valid values:

-   **StaticHttp**: static HTTP requests
    
-   **DynamicHttp**: dynamic HTTP requests
    
-   **DynamicHttps**: dynamic HTTPS requests
    

DynamicHttp

## Examples

Success response

`JSON` format

```
{
  "RequestId": "ED61C6C3-8241-4187-AAA7-5157AE175CEC",
  "BillHistoryData": {
    "BillHistoryDataItem": [
      {
        "Dimension": "flow",
        "BillType": "month_4th_day_bandwidth",
        "BillTime": "2018-09-30T16:00:00Z",
        "BillingData": {
          "BillingDataItem": [
            {
              "Flow": 24567,
              "Bandwidth": 4041,
              "Count": 203601,
              "CdnRegion": "AP1",
              "ChargeType": "DynamicHttp"
            }
          ]
        }
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

InvalidStartTime.Malformed

The specified value of parameter StartTime is malformed.

400

InvalidEndTime.Malformed

The specified value of parameter EndTime is malformed.

400

InvalidTime.Malformed

Specified StartTime or EndTime is malformed.

The specified start or end time is invalid.

400

InvalidEndTime.Mismatch

Specified EndTime does not match the specified StartTime.

StartTime must be earlier than EndTime.

400

InvalidTimeSpan

The time span exceeds the limit.

The time span exceeds the limit. Configure a valid time span as described in API documentation.

See [Error Codes](https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeCdnUserBillHistory#workbench-doc-change-demo) for a complete list.
