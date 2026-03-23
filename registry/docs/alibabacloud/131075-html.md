Call DescribeDcdnDomainRealTimeSrcBpsData to query the real-time back-to-origin bandwidth data for an accelerated domain name.

## Operation description

-   A single user can call this operation up to 10 times per second.
    
-   If you do not specify StartTime and EndTime, the operation returns data for the last hour by default. If you specify StartTime and EndTime, the operation returns data for the specified time range.
    

**Data granularity**

The time granularity of the returned data varies with the time range specified by StartTime and EndTime. The following table describes the time granularity, maximum query time range, queryable historical data range, and data latency.

Time granularity

Maximum time range per query

Queryable historical data range

Data latency

1 minute

1 hour

7 days

5 minutes

5 minutes

3 days

93 days

15 minutes

1 hour

31 days

186 days

Typically 3 to 4 hours

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/dcdn/2018-01-15/DescribeDcdnDomainRealTimeSrcBpsData)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/dcdn/2018-01-15/DescribeDcdnDomainRealTimeSrcBpsData)

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

dcdn:DescribeDcdnDomainRealTimeSrcBpsData

get

\*Domain

`acs:dcdn:*:{#accountId}:domain/{#domainName}`

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

Yes

The accelerated domain name. Separate multiple domain names with commas (,).

example.com

StartTime

string

No

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2015-12-10T20:00:00Z

EndTime

string

No

The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

The end time must be later than the start time.

2015-12-10T20:01:00Z

## Response elements

**Element**

**Type**

**Description**

**Example**

object

EndTime

string

The end of the time range.

2015-12-10T20:01:00Z

StartTime

string

The beginning of the time range.

2015-12-10T20:00:00Z

RequestId

string

The request ID.

7CBCD6AD-B016-42E5-AE0B-B3731DE8F755

DomainName

string

The accelerated domain name.

example.com

DataInterval

string

The time interval between data points, in seconds.

The value of this parameter is fixed. It can be 60 (1 minute), 300 (5 minutes), or 3600 (1 hour), depending on the maximum time range of a single query. For more information, see the data granularity details in the Usage notes.

60

RealTimeSrcBpsDataPerInterval

object

DataModule

array<object>

The back-to-origin bandwidth data for each time interval. Unit: bit/s.

object

Value

string

The usage data.

0

TimeStamp

string

The start time of the time slice.

2015-12-10T20:01:00Z

## Examples

Success response

`JSON` format

```
{
  "EndTime": "2015-12-10T20:01:00Z",
  "StartTime": "2015-12-10T20:00:00Z",
  "RequestId": "7CBCD6AD-B016-42E5-AE0B-B3731DE8F755",
  "DomainName": "example.com",
  "DataInterval": "60",
  "RealTimeSrcBpsDataPerInterval": {
    "DataModule": [
      {
        "Value": "0",
        "TimeStamp": "2015-12-10T20:01:00Z"
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

MissingTimeParameter

The StartTime and EndTime must be both specified.

You must set both the start time and the end time.

400

InvalidStartTime.Malformed

The specified StartTime parameter is invalid.

The format of the specified start time is invalid. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

400

InvalidEndTime.Malformed

The specified EndTime is invalid.

The format of the specified end time is invalid. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

400

InvalidEndTime.Mismatch

The specified EndTime is earlier than the StartTime.

The end time is earlier than the start time.

400

InvalidStartTime.ValueNotSupported

The specified StartTime is invalid.

The specified start time is invalid.

See [Error Codes](https://api.alibabacloud.com/document/dcdn/2018-01-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/dcdn/2018-01-15/DescribeDcdnDomainRealTimeSrcBpsData#workbench-doc-change-demo) for a complete list.
