Enables the Transfer Associated Resources feature.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=ResourceManager&api=EnableAssociatedTransfer&type=RPC&version=2020-03-31)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

EnableAssociatedTransfer

The operation that you want to perform. Set the value to **EnableAssociatedTransfer**.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

RequestId

String

2D69A58F-345C-4FDE-88E4-BF5189484114

The request ID.

## Examples

Sample requests

```
https://resourcemanager.aliyuncs.com/?Action=EnableAssociatedTransfer
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<EnableAssociatedTransferResponse>
    <RequestId>2D69A58F-345C-4FDE-88E4-BF5189484114</RequestId>
</EnableAssociatedTransferResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "RequestId" : "2D69A58F-345C-4FDE-88E4-BF5189484114"
}
```

## Error codes

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/ResourceManager).
