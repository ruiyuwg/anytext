Queries the monitoring data of an accelerated domain name. Data is collected every day. You can query data collected within the last 90 days.

## Operation description

-   You can call this operation up to 10 times per second per account.
    
-   If you do not set StartTime or EndTime, data within the last 24 hours is queried. If you set both StartTime and EndTime, data within the specified time range is queried.
    
-   You can query the monitoring data of a specific accelerated domain name or all accelerated domain names that belong to your Alibaba Cloud account.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeDomainsUsageByDay)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeDomainsUsageByDay)

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

cdn:DescribeDomainsUsageByDay

none

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

The accelerated domain name. You can specify only one domain name.

If you do not specify an accelerated domain name, the data of all accelerated domain names that belong to your account is queried.

example.com

StartTime

string

No

The beginning of the time range to query.

Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2019-12-22T08:00:00Z

EndTime

string

No

The end of the time range to query.

Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

**Note**

The end time must be later than the start time.

2019-12-23T09:00:00Z

## Response elements

**Element**

**Type**

**Description**

**Example**

object

EndTime

string

The end of the time range during which data was queried.

2019-12-23T09:00:00Z

StartTime

string

The start of the time range during which data was queried.

2019-12-22T08:00:00Z

RequestId

string

The ID of the request.

C88EF8ED-72F0-45EA-9E86-95114E224FC5

DomainName

string

The accelerated domain name.

example.com

DataInterval

string

The time interval between the data entries returned. Unit: seconds.

86400

UsageTotal

object

The summarized monitoring data.

MaxSrcBpsTime

string

The time when the bandwidth during back-to-origin routing reached the peak value.

2019-12-23 11:45:00

RequestHitRate

string

The cache hit ratio that is calculated based on requests. The cache hit ratio is measured in percentage.

69.92610837438424

MaxBps

string

The peak bandwidth value. Unit: bit/s.

1.0747912780000001E8

TotalAccess

string

The total amount of requests.

1319500

BytesHitRate

string

The byte hit ratio. The byte hit ratio is measured in percentage.

97.03110726801242

TotalTraffic

string

The total amount of network traffic. Unit: bytes.

1117711832100

MaxBpsTime

string

The time when the bandwidth reached the peak value.

2019-12-23 10:55:00

MaxSrcBps

string

The peak bandwidth value during back-to-origin routing. Unit: bit/s.

72584.072

UsageByDays

object

UsageByDay

array<object>

The monitoring data collected at each time interval.

object

MaxSrcBpsTime

string

The time when the bandwidth during back-to-origin routing reached the peak value.

2019-12-23 11:45:00

Qps

string

The number of queries per second (QPS).

7.466354166666667

RequestHitRate

string

The cache hit ratio that is calculated based on requests. The cache hit ratio is measured in percentage.

70.24770071912111

MaxBps

string

The peak bandwidth value. Unit: bit/s.

306747.76

TotalAccess

string

The total amount of requests.

645093

TimeStamp

string

The timestamp of the data returned.

2019-12-22

BytesHitRate

string

The byte hit ratio. The byte hit ratio is measured in percentage.

97.46250599529726

TotalTraffic

string

The total amount of network traffic. Unit: bytes.

564300099309

MaxSrcBps

string

The peak bandwidth value during back-to-origin routing. Unit: bit/s.

72584.072

MaxBpsTime

string

The time when the bandwidth reached the peak value.

2019-12-23 10:55:00

## Examples

Success response

`JSON` format

```
{
  "EndTime": "2019-12-23T09:00:00Z",
  "StartTime": "2019-12-22T08:00:00Z",
  "RequestId": "C88EF8ED-72F0-45EA-9E86-95114E224FC5",
  "DomainName": "example.com",
  "DataInterval": "86400",
  "UsageTotal": {
    "MaxSrcBpsTime": "2019-12-23 11:45:00",
    "RequestHitRate": "69.92610837438424",
    "MaxBps": "1.0747912780000001E8",
    "TotalAccess": "1319500",
    "BytesHitRate": "97.03110726801242",
    "TotalTraffic": "1117711832100",
    "MaxBpsTime": "2019-12-23 10:55:00",
    "MaxSrcBps": "72584.072"
  },
  "UsageByDays": {
    "UsageByDay": [
      {
        "MaxSrcBpsTime": "2019-12-23 11:45:00",
        "Qps": "7.466354166666667",
        "RequestHitRate": "70.24770071912111",
        "MaxBps": "306747.76",
        "TotalAccess": "645093",
        "TimeStamp": "2019-12-22",
        "BytesHitRate": "97.46250599529726",
        "TotalTraffic": "564300099309",
        "MaxSrcBps": "72584.072",
        "MaxBpsTime": "2019-12-23 10:55:00"
      }
    ]
  }
}
```

Error response

`JSON` format

```
{"RequestId":"16A96B9A-F203-4EC5-8E43-CB92E68F4CD8","HostId":"cdn.aliyuncs.com","Code":"InternalError","Message":"The request processing has failed due to some unknown error."}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidStartTime.Malformed

The specified value of parameter StartTime is malformed.

400

InvalidEndTime.Malformed

The specified value of parameter EndTime is malformed.

400

InvalidStartTime.ValueNotSupported

The specified value of parameter StartTime is not supported.

400

InvalidEndTime.Mismatch

Specified EndTime does not match the specified StartTime.

StartTime must be earlier than EndTime.

404

InvalidDomain.NotFound

The domain provided does not exist in our records.

See [Error Codes](https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeDomainsUsageByDay#workbench-doc-change-demo) for a complete list.
