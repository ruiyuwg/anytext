Call DescribeDcdnDomainHttpCodeData to query the total number and proportions of HTTP return codes for accelerated domain names.

## Operation description

-   If you do not specify **StartTime** and **EndTime**, the operation returns data from the last 24 hours. If you specify **StartTime** and **EndTime**, the operation returns data for the specified time range.
    
-   The call frequency for a single user is 100 calls/second.
    

**Supported time granularities**

The Interval parameter supports different time granularities. The supported granularity depends on the maximum time span of a single query. The following table lists the supported time granularities, queryable historical data ranges, and data latencies.

Time granularity

Maximum time span per query

Queryable historical data range

Data latency

5 minutes

3 days

93 days

15 minutes

1 hour

31 days

186 days

Typically 3 to 4 hours

1 day

366 days

366 days

Typically 4 hours, up to 24 hours

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/dcdn/2018-01-15/DescribeDcdnDomainHttpCodeData)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/dcdn/2018-01-15/DescribeDcdnDomainHttpCodeData)

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

dcdn:DescribeDcdnDomainHttpCodeData

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

The beginning of the time range to query.

Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2019-03-01T00:00:00Z

EndTime

string

No

The end of the time range to query.

Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

**Note**

The end time must be later than the start time.

2019-03-02T00:00:00Z

Interval

string

No

The time granularity of the data to query, in seconds.

Valid values are 300 (5 minutes), 3600 (1 hour), and 86400 (1 day). For more information, see the "Supported time granularities" table in the **Usage notes** section.

300

IspNameEn

string

No

The English name of the Internet Service Provider (ISP).

You can call the [DescribeDcdnRegionAndIsp](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-describedcdnregionandisp) operation to query ISP names. If you do not set this parameter, data for all ISPs is queried.

unicom

LocationNameEn

string

No

The English name of the region.

You can call the [DescribeDcdnRegionAndIsp](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-describedcdnregionandisp) operation to query region names. If you do not set this parameter, data for all regions is queried.

beijing

## Response elements

**Element**

**Type**

**Description**

**Example**

object

EndTime

string

The end of the time range.

2018-03-01T13:00:00Z

StartTime

string

The beginning of the time range.

2019-03-01T00:00:00Z

RequestId

string

The request ID.

91FC2D9D-B042-4634-8A5C-7B8E7482C22D

DomainName

string

The accelerated domain name.

example.com

DataInterval

string

The time interval between data records, in seconds.

300

DataPerInterval

object

DataModule

array<object>

The proportions of HTTP return codes for each time interval.

array<object>

TimeStamp

string

The beginning of the time slice.

2019-03-01T13:00:00Z

HttpCodeDataPerInterval

object

HttpCodeDataModule

array<object>

A list of data about the proportions of HTTP return codes.

object

Code

integer

The HTTP return code.

404

Proportion

number

The proportion.

33.333333

Count

number

The total number.

1

## Examples

Success response

`JSON` format

```
{
  "EndTime": "2018-03-01T13:00:00Z",
  "StartTime": "2019-03-01T00:00:00Z",
  "RequestId": "91FC2D9D-B042-4634-8A5C-7B8E7482C22D",
  "DomainName": "example.com",
  "DataInterval": "300",
  "DataPerInterval": {
    "DataModule": [
      {
        "TimeStamp": "2019-03-01T13:00:00Z",
        "HttpCodeDataPerInterval": {
          "HttpCodeDataModule": [
            {
              "Code": 404,
              "Proportion": 33.333333,
              "Count": 1
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

See [Release Notes](https://api.alibabacloud.com/document/dcdn/2018-01-15/DescribeDcdnDomainHttpCodeData#workbench-doc-change-demo) for a complete list.
