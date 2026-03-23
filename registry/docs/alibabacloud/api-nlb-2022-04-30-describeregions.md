Queries regions that support Network Load Balancer (NLB) instances.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Nlb/2022-04-30/DescribeRegions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Nlb/2022-04-30/DescribeRegions)

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

AcceptLanguage

string

No

The supported natural language. Valid values:

-   **zh-CN**: Chinese
-   **en-US** (default): English
-   **ja**: Japanese

en-US

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

RpcResponse

RequestId

string

The ID of the request.

CEF72CEB-54B6-4AE8-B225-F876FF7BA984

Regions

array<object>

A list of regions.

Region

object

The list of regions.

LocalName

string

The name of the region.

us-east-1

RegionEndpoint

string

The endpoint of the region service.

nlb.cn-hangzhou.aliyuncs.com

RegionId

string

The ID of the region.

cn-hangzhou

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "CEF72CEB-54B6-4AE8-B225-F876FF7BA984",
  "Regions": [
    {
      "LocalName": "us-east-1",
      "RegionEndpoint": "nlb.cn-hangzhou.aliyuncs.com",
      "RegionId": "cn-hangzhou"
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

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

2024-01-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/DescribeRegions?updateTime=2024-01-22#workbench-doc-change-demo)

2023-09-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/DescribeRegions?updateTime=2023-09-26#workbench-doc-change-demo)
