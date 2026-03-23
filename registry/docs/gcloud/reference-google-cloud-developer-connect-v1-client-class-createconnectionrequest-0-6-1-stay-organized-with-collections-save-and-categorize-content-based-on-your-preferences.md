-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Developer Connect V1 Client - Class CreateConnectionRequest (0.6.1) Stay organized with collections Save and categorize content based on your preferences.

0.6.1 (latest) 0.6.0 0.5.3 0.4.1 0.3.0 0.2.2 0.1.2

Reference documentation and code samples for the Google Cloud Developer Connect V1 Client class CreateConnectionRequest.

Message for creating a Connection

Generated from protobuf message `google.cloud.developerconnect.v1.CreateConnectionRequest`

## Namespace

Google \\ Cloud \\ DeveloperConnect \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ parent`

`string`  

Required. Value for parent.

`↳ connection_id`

`string`  

Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection\_id from the method\_signature of Create RPC

`↳ connection`

`[Connection](/php/docs/reference/cloud-developerconnect/latest/V1.Connection)`  

Required. The resource being created

`↳ request_id`

`string`  

Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

`↳ validate_only`

`bool`  

Optional. If set, validate the request, but do not actually post it.

### getParent

Required. Value for parent.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. Value for parent.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getConnectionId

Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection\_id from the method\_signature of Create RPC

**Returns**

**Type**

**Description**

`string`

### setConnectionId

Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection\_id from the method\_signature of Create RPC

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getConnection

Required. The resource being created

**Returns**

**Type**

**Description**

`[Connection](/php/docs/reference/cloud-developerconnect/latest/V1.Connection)|null`

### hasConnection

### clearConnection

### setConnection

Required. The resource being created

**Parameter**

**Name**

**Description**

`var`

`[Connection](/php/docs/reference/cloud-developerconnect/latest/V1.Connection)`  

**Returns**

**Type**

**Description**

`$this`

### getRequestId

Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

**Returns**

**Type**

**Description**

`string`

### setRequestId

Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getValidateOnly

Optional. If set, validate the request, but do not actually post it.

**Returns**

**Type**

**Description**

`bool`

### setValidateOnly

Optional. If set, validate the request, but do not actually post it.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameters**

**Name**

**Description**

`parent`

`string`  

Required. Value for parent. Please see DeveloperConnectClient::locationName() for help formatting this field.

`connection`

`[Connection](/php/docs/reference/cloud-developerconnect/latest/V1.Connection)`  

Required. The resource being created

`connectionId`

`string`  

Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection\_id from the method\_signature of Create RPC

**Returns**

**Type**

**Description**

`[CreateConnectionRequest](/php/docs/reference/cloud-developerconnect/latest/V1.CreateConnectionRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
