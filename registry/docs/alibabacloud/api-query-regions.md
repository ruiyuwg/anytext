You can call the DescribeRegions operation to query the details about the regions that are available to ApsaraDB RDS.

Before you call the [CreateDBInstance](/help/en/rds/api-create-an-instance) operation to create an RDS instance, you can call the DescribeRegions operation to query the available regions and zones.

**Note** If a zone supports the multi-zone deployment method, the value of the ZoneId parameter for the zone contains an MAZ part. Examples: cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f).

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=DescribeRegions&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

DescribeRegions

The operation that you want to perform. Set the value to **DescribeRegions**.

AcceptLanguage

String

No

en-US

The language that is used for the return value of the **LocalName** parameter. Valid values:

-   **zh-CN**: Chinese
-   **en-US**: English

Default value: **en-US**.

## Response parameters

   

Parameter

Type

Example

Description

Regions

Array of RDSRegion

An array that consists of the available regions and zones.

RDSRegion

RegionId

String

cn-hangzhou

The ID of the region.

ZoneId

String

cn-hangzhou-h

The ID of the zone.

LocalName

String

China (Hangzhou)

The name of the region. The return value of the LocalName parameter is in the language that is specified by the **AcceptLanguage** parameter. For example, if the value of the RegionId parameter in the response is cn-hangzhou, the following values are returned for the LocalName parameter:

-   If the value of the **AcceptLanguage** parameter is **zh-CN**, the value 华东1（杭州） is returned for the LocalName parameter.
-   If the value of the **AcceptLanguage** parameter is **en-US**, the value China (Hangzhou) is returned for the LocalName parameter.

RegionEndpoint

String

rds.aliyuncs.com

The endpoint that is used to connect to Alibaba Cloud services in the region. For more information, see [Request structure](/help/en/rds/request-structure).

ZoneName

String

Hangzhou Zone H

The name of the zone. The return value of the ZoneName parameter is in the language that is specified by the **AcceptLanguage** parameter. For example, if the value of the RegionId parameter in the response is cn-hangzhou-h, the following values are returned for the LocalName parameter:

-   If the value of the **AcceptLanguage** parameter is **zh-CN**, the value 杭州 可用区H is returned for the LocalName parameter.
-   If the value of the **AcceptLanguage** parameter is **en-US**, the value Hangzhou Zone H is returned for the LocalName parameter.

RequestId

String

1AD222E9-E606-4A42-BF6D-8A4442913CEF

The ID of the request.

## Examples

Sample requests

```
https://rds.aliyuncs.com/?Action=DescribeRegions
&<Common request parameters>
```

Sample success response

`XML` format

```
<DescribeRegionsResponse>
  <RequestId>1CE1DC20-7EFC-464F-9583-0AB8915C5697</RequestId>
  <Regions>
        <RDSRegion>
              <ZoneName>Hangzhou Zone H</ZoneName>
              <ZoneId>cn-hangzhou-h</ZoneId>
              <RegionId>cn-hangzhou</RegionId>
              <LocalName>China (Hangzhou)</LocalName>
              <RegionEndpoint>rds.aliyuncs.com</RegionEndpoint>
        </RDSRegion>
        <RDSRegion>
              <ZoneName>East China 1 MZone10 H+I</ZoneName>
              <ZoneId>cn-hangzhou-MAZ10(h,i)</ZoneId>
              <RegionId>cn-hangzhou</RegionId>
              <LocalName>China (Hangzhou)</LocalName>
              <RegionEndpoint>rds.aliyuncs.com</RegionEndpoint>
        </RDSRegion>
        <RDSRegion>
              <ZoneName>East China 1 MZone8 F+G</ZoneName>
              <ZoneId>cn-hangzhou-MAZ8(f,g)</ZoneId>
              <RegionId>cn-hangzhou</RegionId>
              <LocalName>China (Hangzhou)</LocalName>
              <RegionEndpoint>rds.aliyuncs.com</RegionEndpoint>
        </RDSRegion>
  </Regions>
</DescribeRegionsResponse>
```

`JSON` format

```
{
  "RequestId": "1CE1DC20-7EFC-464F-9583-0AB8915C5697",
  "Regions": {
    "RDSRegion": [
      {
        "ZoneName": "Hangzhou Zone H",        
        "ZoneId": "cn-hangzhou-h",
        "RegionId": "cn-hangzhou",
        "LocalName": "China (Hangzhou)",
        "RegionEndpoint": "rds.aliyuncs.com"
      },
      {
        "ZoneName": "East China 1 MZone10 H+I",
        "ZoneId": "cn-hangzhou-MAZ10(h,i)",
        "RegionId": "cn-hangzhou",
        "LocalName": "China (Hangzhou)",
        "RegionEndpoint": "rds.aliyuncs.com"
      },
      {
        "ZoneName": "East China 1 MZone8 F+G",        
        "ZoneId": "cn-hangzhou-MAZ8(f,g)",
        "RegionId": "cn-hangzhou",
        "LocalName": "China (Hangzhou)",
        "RegionEndpoint": "rds.aliyuncs.com"
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).
