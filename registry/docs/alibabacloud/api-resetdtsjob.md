Resets a data synchronization or change tracking task.

**Note** If you clear the configurations of a data synchronization or change tracking task, DTS deletes the task. Then, DTS creates another task. The task is in the Not Configured state. You must call the [ConfigureDtsJob](/help/en/dts/developer-reference/api-configuredtsjob) operation reconfigure the task.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Dts&api=ResetDtsJob&type=RPC&version=2020-01-01)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

ResetDtsJob

The operation that you want to perform. Set the value to **ResetDtsJob**.

DtsJobId

String

Yes

l3m1213ye7l\*\*\*\*

The ID of the data synchronization or change tracking task.

DtsInstanceId

String

No

dtsl3m1213ye7l\*\*\*\*

The ID of the data synchronization or change tracking instance.

SynchronizationDirection

String

No

Forward

The synchronization direction. Valid values:

-   **Forward**
-   **Reverse**

**Note**

-   Default value: **Forward**.
-   You can set this parameter to **Reverse** to reconfigure the reverse synchronization task only when the topology is two-way synchronization.

RegionId

String

No

cn-hangzhou

The ID of the region in which the DTS instance resides. For more information, see [Supported regions](/help/en/dts/developer-reference/supported-regions).

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

HttpStatusCode

Integer

200

The HTTP status code.

RequestId

String

01B6F25-21E7-4484-99D5-3EF2625C\*\*\*\*

The request ID.

ErrCode

String

InternalError

The error code returned if the request failed.

Success

Boolean

true

Indicates whether the call was successful.

ErrMessage

String

The Value of Input Parameter %s is not valid.

The error message returned if the call failed.

DynamicMessage

String

DtsJobId

The dynamic part in the error message. This parameter is used to replace the **%s** variable in the **ErrMessage** parameter.

**Note** For example, if the return value of **ErrMessage** is **The Value of Input Parameter %s is not valid** and the return value of **DynamicMessage** is **DtsJobId**, the specified value of **DtsJobId** is invalid.

DynamicCode

String

403

The dynamic error code. This parameter will be removed in the future.

## Examples

Sample requests

```
http(s)://dts.aliyuncs.com/?Action=ResetDtsJob
&DtsJobId=l3m1213ye7l****
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<ResetDtsJobResponse>
    <RequestId>01B6F25-21E7-4484-99D5-3EF2625C****</RequestId>
    <HttpStatusCode>200</HttpStatusCode>
    <Success>true</Success>
</ResetDtsJobResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "RequestId" : "01B6F25-21E7-4484-99D5-3EF2625C****",
  "HttpStatusCode" : 200,
  "Success" : true
}
```

## Error codes

**HttpCode**

**Error code**

**Error message**

**Description**

400

Throttling.User

Request was denied due to user flow control.

The number of requests exceeds the limit, and the request is rejected. Try again later.

403

InvalidSecurityToken.Expired

Specified SecurityToken is expired.

The signature expired. Use a new signature.

500

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The response of the server timed out or the server was unavailable. Try again. If the error persists, contact technical support.

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/Dts).
