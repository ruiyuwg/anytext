Queries Alibaba Cloud regions. When you call this operation, you can specify parameters, such as InstanceChargeType and ResourceType, in the request.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeRegions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeRegions)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

InstanceChargeType

string

No

The billing method of the instance. For more information, see [Billing overview](/help/en/ecs/billing-overview). Valid values:

-   PrePaid: subscription. If you set this parameter to PrePaid, make sure that you have sufficient balance or credits in your account. Otherwise, the InvalidPayMethod error code is returned.
-   PostPaid: pay-as-you-go. SpotWithPriceLimit: spot instance for which a maximum hourly price is specified.
-   SpotAsPriceGo: spot instance for which the market price at the time of purchase is automatically used as the bid price. The market price can be up to the pay-as-you-go price.

Default value: PostPaid.

PrePaid

ResourceType

string

No

The type of resource. Valid values:

-   instance: Elastic Compute Service (ECS) instance
-   disk: disk
-   reservedinstance: reserved instance
-   scu: storage capacity unit (SCU)

Default value: instance.

instance

AcceptLanguage

string

No

The natural language that is used to filter responses. For more information, see [RFC 7231](https://tools.ietf.org/html/rfc7231). Valid values:

-   zh-CN: Simplified Chinese
-   zh\_TW: Traditional Chinese
-   en-US: English
-   ja: Japanese
-   fr: French
-   de: German
-   ko: Korean

Default value: zh-CN.

zh-CN

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

Regions

array<object>

The information of the regions.

Region

object

Status

string

Indicates whether clusters are sold out. Valid values:

-   available
-   soldOut

available

RegionEndpoint

string

The endpoint of the region.

ecs.cn-qingdao.aliyuncs.com

LocalName

string

The name of the region.

China (Qingdao)

RegionId

string

The ID of the region.

cn-qingdao

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Regions": {
    "Region": [
      {
        "Status": "available",
        "RegionEndpoint": "ecs.cn-qingdao.aliyuncs.com",
        "LocalName": "China (Qingdao)",
        "RegionId": "cn-qingdao"
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

403

Unauthorized.EmptyRegion

The specified account has no access authority to any region.

You do not have permissions to access any regions. Apply for the permissions and try again.

403

Invalid.InstanceChargeType

The specified instanceChargeType is not valid.

The specified InstanceChargeType parameter is invalid.

404

InvalidAcceptLanguage.NotFound

Only Chinese (zh-CN), English (en-US), and Japanese (ja) are allowed.

Your selected language is invalid. Only Chinese, English, and Japanese are supported.

404

InvalidResourceType.NotFound

The ResourceType provided does not exist in our records.

The specified resource type does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-28

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeRegions?updateTime=2025-02-28#workbench-doc-change-demo)
