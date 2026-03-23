Disables the Transfer Associated Resources feature.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=ResourceManager&api=DisableAssociatedTransfer&type=RPC&version=2020-03-31)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

DisableAssociatedTransfer

The operation that you want to perform. Set the value to **DisableAssociatedTransfer**.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

RequestId

String

7CE0AE54-6F27-5522-A429-4C5EE8FD40C8

The request ID.

## Examples

Sample requests

```
https://resourcemanager.aliyuncs.com/?Action=DisableAssociatedTransfer
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<DisableAssociatedTransferResponse>
    <RequestId>7CE0AE54-6F27-5522-A429-4C5EE8FD40C8</RequestId>
</DisableAssociatedTransferResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "RequestId" : "7CE0AE54-6F27-5522-A429-4C5EE8FD40C8"
}
```

## Error codes

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/ResourceManager).
