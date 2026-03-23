Queries the regions and zones supported by Elastic Container Instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Eci/2018-08-08/DescribeRegions)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Eci/2018-08-08/DescribeRegions)

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

cn-hangzhou

RegionId

string

No

The region ID.

cn-hangzhou

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned information.

RequestId

string

The unique ID of the request.

89945DD3-9072-47D0-A318-353284CFC7B3

Regions

array<object>

The collection of region information.

object

The collection of region information.

Zones

array

The zones.

string

A zone.

cn-hangzhou-g

RecommendZones

array

The list of recommended zones.

string

A recommended zone. This is a zone in the current region with sufficient resources.

cn-hangzhou-j

RegionEndpoint

string

The endpoint of the region.

eci.aliyuncs.com

RegionId

string

The ID of the region.

cn-hangzhou

UnavailableZones

array

The list of unavailable zones.

string

An unavailable zone. The zone may be faulty. Use other available zones.

cn-hangzhou-e

## Examples

Success response

`JSON` format

```
{
  "RequestId": "89945DD3-9072-47D0-A318-353284CFC7B3",
  "Regions": [
    {
      "Zones": [
        "cn-hangzhou-g"
      ],
      "RecommendZones": [
        "cn-hangzhou-j"
      ],
      "RegionEndpoint": "eci.aliyuncs.com",
      "RegionId": "cn-hangzhou",
      "UnavailableZones": [
        "cn-hangzhou-e"
      ]
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Eci/2018-08-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Eci/2018-08-08/DescribeRegions#workbench-doc-change-demo) for a complete list.
