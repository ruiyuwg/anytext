Call the DescribeDcdnDomainRealTimeBpsData operation to query the real-time network bandwidth of a domain name.

## Operation description

-   The maximum number of calls that a single user can make to this operation is 10 per second.
    
-   If you do not specify the **StartTime** and **EndTime** parameters, the operation returns the data of the last hour. If you specify the **StartTime** and **EndTime** parameters, the operation returns the data within the specified time range.
    

**Time granularity of the returned data**

The time granularity of the data returned varies based on the time range specified by the StartTime and EndTime parameters. The following table describes the time period of historical data that you can query and the data latency.

Time granularity

Maximum time range per query

Queryable historical data period

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

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/dcdn/2018-01-15/DescribeDcdnDomainRealTimeBpsData)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/dcdn/2018-01-15/DescribeDcdnDomainRealTimeBpsData)

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

dcdn:DescribeDcdnDomainRealTimeBpsData

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

The accelerated domain name. You can specify multiple domain names and separate them with commas (,).

example.com

IspNameEn

string

No

The name of the carrier.

You can call the [DescribeDcdnRegionAndIsp](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-describedcdnregionandisp) operation to query the carrier name. If you do not set this parameter, data of all carriers is queried.

telecom

LocationNameEn

string

No

The name of the region.

You can call the [DescribeDcdnRegionAndIsp](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-describedcdnregionandisp) operation to query the region name. If you do not set this parameter, data of all regions is queried.

beijing

StartTime

string

No

The beginning of the time range to query.

Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2018-01-02T11:00:00Z

EndTime

string

No

The end of the time range to query.

Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

**Note**

The end time must be later than the start time.

2018-01-02T11:00:00Z

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

B49E6DDA-F413-422B-B58E-2FA23F286726

Data

object

BpsModel

array<object>

The list of data.

object

Bps

number

The bandwidth. Unit: bit/s.

16710625.733333332

TimeStamp

string

The timestamp of the data. The time is in the ISO 8601 standard in UTC.

2018-01-02T11:05:00Z

## Examples

Success response

`JSON` format

```
{
  "RequestId": "B49E6DDA-F413-422B-B58E-2FA23F286726",
  "Data": {
    "BpsModel": [
      {
        "Bps": 16710625.733333332,
        "TimeStamp": "2018-01-02T11:05:00Z"
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

See [Release Notes](https://api.alibabacloud.com/document/dcdn/2018-01-15/DescribeDcdnDomainRealTimeBpsData#workbench-doc-change-demo) for a complete list.
