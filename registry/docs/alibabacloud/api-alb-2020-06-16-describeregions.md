Queries available regions.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Alb/2020-06-16/DescribeRegions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Alb/2020-06-16/DescribeRegions)

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

The supported language. Valid values:

-   **zh-CN** (default): Chinese
-   **en-US**: English
-   **ja**: Japanese

zh-CN

## Response parameters

Parameter

Type

Description

Example

object

Regions

array<object>

The regions.

Region

object

LocalName

string

The name of the region.

China (Hangzhou)

RegionEndpoint

string

The endpoint of region service.

alb.cn-hangzhou.aliyuncs.com

RegionId

string

The ID of the region.

cn-hangzhou

RequestId

string

The ID of the request.

593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3

## Examples

Sample success responses

`JSON`format

```
{
  "Regions": [
    {
      "LocalName": "China (Hangzhou)",
      "RegionEndpoint": "alb.cn-hangzhou.aliyuncs.com",
      "RegionId": "cn-hangzhou"
    }
  ],
  "RequestId": "593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Alb/2020-06-16/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
