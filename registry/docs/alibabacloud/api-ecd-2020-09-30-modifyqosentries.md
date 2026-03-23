Modifies the resources associated with a Quality of Service (QoS) rule.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/ModifyQosEntries)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/ModifyQosEntries)

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

The ID of the public network QoS rule.

qos-5605u0gelk200\*\*\*\*

AuthDesktopId

array

No

A list of cloud computer IDs to attach.

string

No

The ID of the cloud computer.

ecd-j45qtb0eh91yg\*\*\*\*

RevokeDesktopId

array

No

A list of cloud computer IDs to detach.

string

No

The ID of the cloud computer.

ecd-j45qtb0eh91yg\*\*\*\*

AuthAndroidId

array

No

A list of cloud phone IDs to attach.

string

No

The ID of the cloud phone.

cpn-asdsdfsdffsd\*\*\*\*\*

RevokeAndroidId

array

No

A list of cloud phone IDs to detach.

string

No

The ID of the cloud phone.

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

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/ModifyQosEntries#workbench-doc-change-demo) for a complete list.
