Queries bandwidth data by protocol.

## Operation description

-   You can call this operation up to 20 times per second per account.
    
-   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
    

**Time granularity**

The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.

Time granularity

Maximum time range per query

Historical data available

Data delay

5 minutes

3 days

93 days

15 minutes

1 hour

31 days

186 days

4 hours

1 day

366 days

366 days

04:00 on the next day

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeDomainBpsDataByLayer)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeDomainBpsDataByLayer)

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

cdn:DescribeDomainBpsDataByLayer

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

The accelerated domain name. You can specify up to 500 domain names in each request. Separate multiple domain names with commas (,).

**Note**

If you do not specify this parameter, the bandwidth data about all accelerated domain names that belong to your Alibaba Cloud account is queried.

example.com

StartTime

string

No

The beginning of the time range to query.

Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2020-05-06T07:10:00Z

EndTime

string

No

The end of the time range to query.

Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

**Note**

The end time must be later than the start time.

2020-05-06T07:20:00Z

Interval

string

No

The time granularity of the data entries. Unit: seconds.

The time granularity varies with the maximum time range per query. Valid values: 300 (5 minutes), 3600 (1 hour), and 86400 (1 day). For more information, see **Usage notes**.

300

IspNameEn

string

No

The name of the Internet service provider (ISP). You can call the [DescribeCdnRegionAndIsp](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnregionandisp) operation to query ISPs. If you do not specify an ISP, data of all ISPs is queried.

unicom

LocationNameEn

string

No

The name of the region. You can call the [DescribeCdnRegionAndIsp](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnregionandisp) operation to query regions. If you do not specify a region, data in all regions is queried.

beijing

Layer

string

No

The layer at which you want to query the bandwidth data. Valid values:

-   Network layer: **IPv4** and **IPv6**.
    
-   Application layer: **http**, **https**, and **quic**.
    
-   **all**: specifies that both the network and application layers are included.
    

Default value: **all**.

IPv4

## Response elements

**Element**

**Type**

**Description**

**Example**

object

DataInterval

string

The time interval between the data entries. Unit: seconds.

300

RequestId

string

The ID of the request.

C565B910-BC3B-467B-9046-2A48566EA967

BpsDataInterval

object

DataModule

array<object>

The data returned at each time interval.

object

Value

string

The peak bandwidth value. Unit: bit/s.

75.68

TrafficValue

string

The total amount of network traffic. Unit: bytes.

2838

TimeStamp

string

The timestamp of the returned data.

2020-05-06T07:10:00Z

## Examples

Success response

`JSON` format

```
{
  "DataInterval": "300",
  "RequestId": "C565B910-BC3B-467B-9046-2A48566EA967",
  "BpsDataInterval": {
    "DataModule": [
      {
        "Value": "75.68",
        "TrafficValue": "2838",
        "TimeStamp": "2020-05-06T07:10:00Z"
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

The specified value of parameter StartTime is malformed.

400

InvalidEndTime.Malformed

The specified value of parameter EndTime is malformed.

400

InvalidEndTime.Mismatch

Specified EndTime does not match the specified StartTime.

StartTime must be earlier than EndTime.

400

InvalidStartTime.ValueNotSupported

The specified value of parameter StartTime is not supported.

403

InvaildParameter

The parameter you provided is invalid.

The format of the domain name is invalid. Correct the format and try again.

See [Error Codes](https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeDomainBpsDataByLayer#workbench-doc-change-demo) for a complete list.
