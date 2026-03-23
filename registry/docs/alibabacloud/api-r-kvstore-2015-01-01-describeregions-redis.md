Queries all regions and zones supported for a Tair (Redis OSS-compatible) instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeRegions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeRegions)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

AcceptLanguage

string

No

The display language of the **LocalName** parameter value. Valid values:

-   **zh-CN**: Chinese
-   **en-US**: English

**Note** The default value is **zh-CN**.

zh-CN

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

AD425AD3-CC7B-4EE2-A5CB-2F61BA73\*\*\*\*

RegionIds

array<object>

The **region IDs**.

KVStoreRegion

object

RegionEndpoint

string

The endpoint of the region.

r-kvstore.aliyuncs.com

LocalName

string

The name of the region.

China (Hangzhou)

RegionId

string

The ID of the region.

cn-hangzhou

ZoneIds

string

The IDs of the zones in the region.

cn-hangzhou-h

ZoneIdList

array

The zone IDs.

ZoneId

string

The ID of the zone.

cn-hangzhou-h

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "AD425AD3-CC7B-4EE2-A5CB-2F61BA73****",
  "RegionIds": {
    "KVStoreRegion": [
      {
        "RegionEndpoint": "r-kvstore.aliyuncs.com",
        "LocalName": "China (Hangzhou)\n",
        "RegionId": "cn-hangzhou",
        "ZoneIds": "cn-hangzhou-h",
        "ZoneIdList": {
          "ZoneId": [
            "cn-hangzhou-h"
          ]
        }
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeRegions?updateTime=2025-03-25#workbench-doc-change-demo)
