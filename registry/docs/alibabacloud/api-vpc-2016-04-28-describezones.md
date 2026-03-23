Queries zones in a region.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeZones)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeZones)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID of the zone. You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

ZoneType

string

No

The zone type. Default value: **AvailabilityZone**.

AvailabilityZone

AcceptLanguage

string

No

The language used in the **LocalName** parameter. Valid values:

-   **zh-cn**: Chinese
-   **en-us**: English
-   **ja**: Japanese

zh-cn

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

6FEA0CF3-D3B9-43E5-A304-D217037876A8

Zones

array<object>

The zone list.

Zone

object

ZoneId

string

The zone ID.

cn-hangzhou-b

LocalName

string

The zone name.

Hangzhou Zone B

ZoneType

string

The zone type. Default value: **AvailabilityZone**.

AvailabilityZone

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "6FEA0CF3-D3B9-43E5-A304-D217037876A8",
  "Zones": {
    "Zone": [
      {
        "ZoneId": "cn-hangzhou-b",
        "LocalName": "Hangzhou Zone B",
        "ZoneType": "AvailabilityZone"
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId parameter is set to an invalid value. Specify a valid value and try again.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeZones?updateTime=2025-12-12#workbench-doc-change-demo)

2024-03-12

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeZones?updateTime=2024-03-12#workbench-doc-change-demo)
