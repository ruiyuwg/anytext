You can call the CheckInstanceExist operation to query whether an ApsaraDB RDS instance exists.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=CheckInstanceExist&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

CheckInstanceExist

The operation that you want to perform. Set the value to **CheckInstanceExist**.

DBInstanceId

String

Yes

rm-uf6wjk5xxxxxxx

The ID of the instance.

## Response parameters

   

Parameter

Type

Example

Description

IsExistInstance

Boolean

true

Indicates whether the instance exists. Valid values:

-   **true**: The instance exists.
-   **false**: The instance does not exist.

RequestId

String

11439B36-F703-49EB-8656-D3C87BE28B57

The ID of the request.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/?Action=CheckInstanceExist
&DBInstanceId=rm-uf6wjk5xxxxxxx	
&<Common request parameters>
```

Sample success responses

`XML` format

```
<CheckInstanceExistResponse>
      <RequestId>11439B36-F703-49EB-8656-D3C87BE28B57</RequestId>
      <IsExistInstance>true</IsExistInstance>
</CheckInstanceExistResponse>
```

`JSON` format

```
{
    "RequestId":"11439B36-F703-49EB-8656-D3C87BE28B57",
    "IsExistInstance":"true"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).
