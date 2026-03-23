Queries all regions and zones supported for an ApsaraDB for MongoDB instance.

## Operation description

**Note**

To query available regions and zones in which an ApsaraDB for MongoDB instance can be created, call the [DescribeAvailableResource](/help/en/mongodb/api-describeavailableresource) operation.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/DescribeRegions)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/DescribeRegions)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

No

The region ID.

**Note**

If you do not specify this parameter, all supported regions are queried.

cn-hangzhou

AcceptLanguage

string

No

The language of the values of the returned **RegionName** and **ZoneName** parameters. Valid values:

-   **zh** (default)
    
-   **en**
    

zh

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The regions and zones.

RequestId

string

The request ID.

4E46C22C-D3B7-4DB8-9C76-63851BE68E20

Regions

object

DdsRegion

array<object>

The regions.

array<object>

The region.

Zones

object

Zone

array<object>

The zones.

object

The zone.

ZoneId

string

The zone ID.

cn-hangzhou-h

VpcEnabled

boolean

Indicates whether a virtual private cloud (VPC) is supported. Valid values:

-   **true**: VPC is supported.
    
-   **false**: VPC is not supported.
    

true

ZoneName

string

The name of the zone.

The value of the ZoneName parameter is in the language that is specified by the **AcceptLanguage** parameter. For example, if the value of the ZoneId parameter in the response is **cn-hangzhou-h**, the following values are returned for the ZoneName parameter:

-   If the value of the **AcceptLanguage** parameter is **zh**, the value **H** is returned for the ZoneName parameter.
    
-   If the value of the **AcceptLanguage** parameter is **en**, the value **Hangzhou Zone H** is returned for the ZoneName parameter.
    

杭州 可用区H

RegionId

string

The region ID.

cn-hangzhou

RegionName

string

The name of the region.

The value of the LocalName parameter is in the language that is specified by the **AcceptLanguage** parameter. For example, if the value of the RegionId parameter in the response is **cn-hangzhou**, the following values are returned for the LocalName parameter:

-   If the value of the **AcceptLanguage** parameter is **zh**, the value **华东 1（杭州）** is returned for the LocalName parameter.
    
-   If the value of the **AcceptLanguage** parameter is **en**, the value **China (Hangzhou)** is returned for the LocalName parameter.
    

华东1（杭州）

EndPoint

string

The public endpoint of the region.

For example, if the value of the RegionId parameter in the response is cn-hangzhou, the following value is returned for the EndPoint parameter:

-   mongodb.aliyuncs.com
    

mongodb.aliyuncs.com

## Examples

Success response

`JSON` format

```
{
  "RequestId": "4E46C22C-D3B7-4DB8-9C76-63851BE68E20",
  "Regions": {
    "DdsRegion": [
      {
        "Zones": {
          "Zone": [
            {
              "ZoneId": "cn-hangzhou-h",
              "VpcEnabled": true,
              "ZoneName": "杭州 可用区H"
            }
          ]
        },
        "RegionId": "cn-hangzhou",
        "RegionName": "华东1（杭州）",
        "EndPoint": "mongodb.aliyuncs.com"
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/DescribeRegions#workbench-doc-change-demo) for a complete list.
