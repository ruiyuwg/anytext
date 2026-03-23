Queries the information about a private zone.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=pvtz&api=DescribeZoneInfo&type=RPC&version=2018-01-01)

## Request parameters

Parameter

Type

Required

Example

Description

Action

String

Yes

DescribeZoneInfo

The operation that you want to perform. Set the value to **DescribeZoneInfo**.

Lang

String

No

en

The language.

ZoneId

String

Yes

AgIDE1MA\_149

The ID of the private zone.

## Response parameters

Parameter

Type

Example

Description

RequestId

String

F73F41A3-B6DD-42CA-A793-FFF93277835D

The ID of the request.

SlaveDns

Boolean

true

Indicates whether Secondary DNS is enabled. Valid values:

-   **true**: Secondary DNS is enabled.
-   **false**: Secondary DNS is disabled.

ResourceGroupId

String

rg-xxxxxxxx

The ID of the resource group.

ZoneId

String

AgIDE0OQ\_149<

The ID of the private zone.

ProxyPattern

String

ZONE

-   **ZONE**: The recursive resolution proxy feature is disabled for the private zone.
-   **RECORD**: The recursive resolution proxy feature is enabled for the private zone.

CreateTime

String

2018-01-23T03:15Z

The time when the private zone was created.

ZoneType

String

CLOUD\_PRODUCT\_ZONE

The type of the private zone. Valid values:

-   AUTH\_ZONE: authoritative zone
-   CLOUD\_PRODUCT\_ZONE: cloud service-hosted zone

Remark

String

specialZone

The description of the private zone.

ZoneName

String

test.com

The name of the private zone.

ZoneTag

String

pvtz

-   If the value of the ZoneType parameter is AUTH\_ZONE, the value of this parameter is null.
-   If the value of the ZoneType parameter is CLOUD\_PRODUCT\_ZONE, the value of this parameter indicates the corresponding Alibaba Cloud service.

UpdateTime

String

2018-01-24T06:35Z

The time when the private zone was last modified.

UpdateTimestamp

Long

1516775741000

The time when the private zone was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.

RecordCount

Integer

2

The total number of DNS records.

CreateTimestamp

Long

1516775741000

The time when the private zone was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.

BindVpcs

Array of Vpc

The virtual private clouds (VPCs) with which the private zone is associated.

Vpc

VpcName

String

daily-vpc-name

The name of the VPC.

VpcId

String

daily-vpc-id

The ID of the VPC.

RegionName

String

1304

The name of the region.

VpcUserId

Long

vpc-bp1aevy8sofi8mh1q\*\*\*\*

The ID of the user to which the VPC belongs. A value of null indicates that the VPC belongs to the current user.

RegionId

String

cn-hangzhou

The ID of the region.

IsPtr

Boolean

false

-   true: indicates that the private zone is a reverse lookup zone.
-   false: indicates that the private zone is not a reverse lookup zone.

## Examples

Sample requests

```
http(s)://pvtz.aliyuncs.com/?Action=DescribeZoneInfo
&Lang=en
&ZoneId=AgIDE1MA_149
&UserClientIp=192.0.2.0
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<DescribeZoneInfoResponse>
    <RequestId>F73F41A3-B6DD-42CA-A793-FFF93277835D</RequestId>
    <SlaveDns>true</SlaveDns>
    <ResourceGroupId>rg-xxxxxxxx</ResourceGroupId>
    <ZoneId>AgIDE0OQ_149&lt;</ZoneId>
    <ProxyPattern>ZONE</ProxyPattern>
    <CreateTime>2018-01-23T03:15Z</CreateTime>
    <ZoneType>CLOUD_PRODUCT_ZONE</ZoneType>
    <Remark>specialZone</Remark>
    <ZoneName>test.com</ZoneName>
    <ZoneTag>pvtz</ZoneTag>
    <UpdateTime>2018-01-24T06:35Z</UpdateTime>
    <UpdateTimestamp>1516775741000</UpdateTimestamp>
    <RecordCount>2</RecordCount>
    <CreateTimestamp>1516775741000</CreateTimestamp>
    <BindVpcs>
        <VpcName>daily-vpc-name</VpcName>
        <VpcId>daily-vpc-id</VpcId>
        <RegionName>1304</RegionName>
        <RegionId>cn-hangzhou</RegionId>
    </BindVpcs>
    <IsPtr>false</IsPtr>
</DescribeZoneInfoResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "RequestId" : "F73F41A3-B6DD-42CA-A793-FFF93277835D",
  "SlaveDns" : true,
  "ResourceGroupId" : "rg-xxxxxxxx",
  "ZoneId" : "AgIDE0OQ_149<",
  "ProxyPattern" : "ZONE",
  "CreateTime" : "2018-01-23T03:15Z",
  "ZoneType" : "CLOUD_PRODUCT_ZONE",
  "Remark" : "specialZone",
  "ZoneName" : "test.com",
  "ZoneTag" : "pvtz",
  "UpdateTime" : "2018-01-24T06:35Z",
  "UpdateTimestamp" : 1516775741000,
  "RecordCount" : 2,
  "CreateTimestamp" : 1516775741000,
  "BindVpcs" : [ {
    "VpcName" : "daily-vpc-name",
    "VpcId" : "daily-vpc-id",
    "RegionName" : "1304",
    "RegionId" : "cn-hangzhou"
  } ],
  "IsPtr" : false
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Zone.Invalid.Id

Zone id is invalid.

The error message returned because the ID of the private zone is invalid.

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/pvtz).
