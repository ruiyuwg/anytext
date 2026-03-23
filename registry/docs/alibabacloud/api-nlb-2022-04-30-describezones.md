Queries the zones of a region in which a Network Load Balancer (NLB) instance is deployed.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Nlb/2022-04-30/DescribeZones)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Nlb/2022-04-30/DescribeZones)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

ServiceCode

string

No

The service code. Set the value to **nlb**.

nlb

RegionId

string

No

The ID of the region to which the zone belongs. You can call the [DescribeRegions](/help/en/slb/api-describeregions) operation to query the most recent region list.

cn-hangzhou

AcceptLanguage

string

No

The supported natural language. Valid values:

-   **zh-CN**: Chinese
-   **en-US** (default): English
-   **ja**: Japanese

zh-CN

ClientToken

string

No

The client token used to ensure the idempotence of the request.

You can use the client to generate this value. Ensure that the value is unique among all requests. Only ASCII characters are allowed.

**Note** If you do not specify this parameter, the value of **RequestId** is used.\*\*\*\* **RequestId** of each request is different.

123e4567-e89b-12d3-a456-426655440000

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The ID of the request.

CEF72CEB-54B6-4AE8-B225-F876FF7BA984

Zones

array<object>

A list of zones.

Zone

object

The zone.

LocalName

string

The zone name.

ap\_southeast\_2

ZoneId

string

The zone ID.

cn-hangzhou-g

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "CEF72CEB-54B6-4AE8-B225-F876FF7BA984",
  "Zones": [
    {
      "LocalName": "ap_southeast_2",
      "ZoneId": "cn-hangzhou-g"
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

400

IllegalParam.AcceptLanguage

The param of AcceptLanguage\[%s\] is illegal from bundle %s

400

SystemBusy

System is busy, please try again later.

400

IllegalParam

The param of %s is illegal.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Nlb/2022-04-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-10-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/DescribeZones?updateTime=2023-10-09#workbench-doc-change-demo)

2023-09-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/DescribeZones?updateTime=2023-09-26#workbench-doc-change-demo)

2023-09-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/DescribeZones?updateTime=2023-09-05#workbench-doc-change-demo)

2023-08-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/DescribeZones?updateTime=2023-08-22#workbench-doc-change-demo)
