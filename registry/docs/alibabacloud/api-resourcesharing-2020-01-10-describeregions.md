Queries the regions where the Resource Sharing service is available.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/DescribeRegions)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/DescribeRegions)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

AcceptLanguage

string

No

The supported natural language. Valid values:

-   zh-CN: Chinese
    
-   en-US: English
    

zh-CN

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

0D64A198-5842-4570-8E26-5E540CDC84CD

Regions

array<object>

The information of the regions.

object

The information of the regions.

RegionEndpoint

string

The endpoint of the Resource Sharing service in the region.

resourcesharing.cn-hangzhou.aliyuncs.com

LocalName

string

The name of the region.

华东1（杭州）

RegionId

string

The ID of the region.

cn-hangzhou

## Examples

Success response

`JSON` format

```
{
  "RequestId": "0D64A198-5842-4570-8E26-5E540CDC84CD",
  "Regions": [
    {
      "RegionEndpoint": "resourcesharing.cn-hangzhou.aliyuncs.com",
      "LocalName": "华东1（杭州）",
      "RegionId": "cn-hangzhou"
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/DescribeRegions#workbench-doc-change-demo) for a complete list.
