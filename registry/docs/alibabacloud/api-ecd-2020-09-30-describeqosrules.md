Queries rate limiting rules.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeQosRules)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeQosRules)

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

np-cxj99qb8d34vo\*\*\*\*

QosRuleName

string

No

The name of the QoS rule.

test

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

QosRules

array<object>

A list of QoS rules.

object

The details of the QoS rule.

QosRuleId

string

The ID of the QoS rule.

qos-chvkz5ekzgcb6bo0f

QosRuleName

string

The name of the QoS rule.

test

NetworkPackageId

string

The ID of the premium bandwidth plan.

np-5cjh3sqs1ty3s02xq

Upload

string

The upstream bandwidth.

10

Download

string

The downstream bandwidth.

10

DesktopCount

string

The number of cloud computers in the group.

0

## Examples

Success response

`JSON` format

```
{
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "QosRules": [
    {
      "QosRuleId": "qos-chvkz5ekzgcb6bo0f",
      "QosRuleName": "test",
      "NetworkPackageId": "np-5cjh3sqs1ty3s02xq",
      "Upload": "10",
      "Download": "10",
      "DesktopCount": "0"
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeQosRules#workbench-doc-change-demo) for a complete list.
