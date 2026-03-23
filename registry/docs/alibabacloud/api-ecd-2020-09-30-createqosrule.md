Create a rate-limiting rule

## Operation description

Cloud computer templates include system templates and custom templates. A system template is the default template provided by Alibaba Cloud. You can call this operation to create a custom template.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/CreateQosRule)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/CreateQosRule)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

NetworkPackageId

string

Yes

The ID of the premium bandwidth plan.

np-cfedn7r2pe48g\*\*\*\*

QosRuleName

string

Yes

The name of the Quality of Service (QoS) rule.

测试

Upload

integer

Yes

The maximum upstream bandwidth. Unit: Mbps.

5

Download

integer

Yes

The maximum downstream bandwidth. Unit: Mbps.

5

AuthDesktopId

array

No

The IDs of the cloud computers to which the rule applies.

string

No

The ID of a cloud computer.

ecd-sfasdfsddsat\*\*\*\*\*

AuthAndroidId

array

No

The IDs of the cloud phones to which the rule applies.

string

No

The ID of a cloud phone.

cpn-asdsdfsdffsd\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

51592A88-0F2C-55E6-AD2C-2AD9C10D\*\*\*\*

QosRuleId

string

The ID of the Quality of Service (QoS) rule.

qos-5605u0gelk200\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "51592A88-0F2C-55E6-AD2C-2AD9C10D****",
  "QosRuleId": "qos-5605u0gelk200****"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/CreateQosRule#workbench-doc-change-demo) for a complete list.
