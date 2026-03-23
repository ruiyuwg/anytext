Call the DescribeDcdnDomainRealTimeSrcTrafficData operation to query real-time back-to-origin traffic data for accelerated domain names.

## Operation description

**Note**

If you do not specify the StartTime and EndTime parameters, data from the last hour is returned. If you specify both parameters, data in the specified time range is returned.

**Data time granularity**

The time granularity of the returned data varies with the time range that you specify using the StartTime and EndTime parameters. The following table describes the time granularity, maximum time span for a single query, queryable time range for historical data, and data latency.

Time granularity

Maximum time span for a single query

Queryable time range for historical data

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

3 to 4 hours

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/dcdn/2018-01-15/DescribeDcdnDomainRealTimeSrcTrafficData)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/dcdn/2018-01-15/DescribeDcdnDomainRealTimeSrcTrafficData)

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

dcdn:DescribeDcdnDomainRealTimeSrcTrafficData

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

DomainName

string

Yes

The accelerated domain name. To specify multiple domain names, separate them with commas (,).

example.com

StartTime

string

No

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in Coordinated Universal Time (UTC).

2015-12-10T20:00:00Z

EndTime

string

No

The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

**Note**

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

The ID of the request.

A666D44F-19D6-490E-97CF-1A64AB962C57

DomainName

string

The accelerated domain name.

example.com

DataInterval

string

The time interval between data points, in seconds.

The value is fixed at 60 (1 minute), 300 (5 minutes), or 3600 (1 hour), and varies with the time span of the query. For more information, see the data time granularity table in the **Usage notes** section.

60

RealTimeSrcTrafficDataPerInterval

object

DataModule

array<object>

The back-to-origin traffic data at each time interval. Unit: byte.

object

Value

string

The usage data.

0

TimeStamp

string

The timestamp of the data point.

2015-12-10T20:00:00Z

## Examples

Success response

`JSON` format

```
{
  "EndTime": "2015-12-10T20:01:00Z",
  "StartTime": "2015-12-10T20:00:00Z",
  "RequestId": "A666D44F-19D6-490E-97CF-1A64AB962C57",
  "DomainName": "example.com",
  "DataInterval": "60",
  "RealTimeSrcTrafficDataPerInterval": {
    "DataModule": [
      {
        "Value": "0",
        "TimeStamp": "2015-12-10T20:00:00Z"
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

See [Release Notes](https://api.alibabacloud.com/document/dcdn/2018-01-15/DescribeDcdnDomainRealTimeSrcTrafficData#workbench-doc-change-demo) for a complete list.
