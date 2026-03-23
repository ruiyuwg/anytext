You can modify a rate limiting rule.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/ModifyQosRule)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/ModifyQosRule)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

QosRuleId

string

Yes

The ID of the QoS rule.

qos-5605u0gelk200\*\*\*\*

QosRuleName

string

No

The name of the QoS rule.

test

Upload

integer

No

The maximum upstream bandwidth. The unit is Mbps.

10

Download

integer

No

The maximum downstream bandwidth. The unit is Mbps.

10

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/ModifyQosRule#workbench-doc-change-demo) for a complete list.
