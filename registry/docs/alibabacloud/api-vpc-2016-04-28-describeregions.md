Queries the most recent region list.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeRegions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeRegions)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

ProductType

string

No

The service type. Default value: **VPC**.

VPC

AcceptLanguage

string

No

The language of the response. Valid values:

-   **zh-CN** (default): Chinese
-   **en-US**: English

zh-CN

## Response parameters

Parameter

Type

Description

Example

object

The request ID.

RequestId

string

The request ID.

611CB80C-B6A9-43DB-9E38-0B0AC3D9B58F

Regions

array<object>

The list of regions.

Region

object

RegionEndpoint

string

The endpoint of the region service.

vpc.aliyuncs.com

LocalName

string

The name of the region.

China (Qingdao)

RegionId

string

The region ID.

cn-qingdao

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "611CB80C-B6A9-43DB-9E38-0B0AC3D9B58F",
  "Regions": {
    "Region": [
      {
        "RegionEndpoint": "vpc.aliyuncs.com",
        "LocalName": "China (Qingdao)",
        "RegionId": "cn-qingdao"
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-07-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRegions?updateTime=2024-07-31#workbench-doc-change-demo)

2024-03-12

API Description Update

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRegions?updateTime=2024-03-12#workbench-doc-change-demo)
