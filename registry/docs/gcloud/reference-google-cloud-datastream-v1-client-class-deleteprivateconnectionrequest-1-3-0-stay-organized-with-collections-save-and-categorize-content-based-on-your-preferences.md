-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Datastream V1 Client - Class DeletePrivateConnectionRequest (1.3.0) Stay organized with collections Save and categorize content based on your preferences.

2.5.3 (latest) 2.5.2 2.4.0 2.3.1 2.2.0 2.1.1 2.0.1 1.5.5 1.4.2 1.3.0 1.2.1 1.1.0 1.0.5

Reference documentation and code samples for the Google Cloud Datastream V1 Client class DeletePrivateConnectionRequest.

Request to delete a private connection.

Generated from protobuf message `google.cloud.datastream.v1.DeletePrivateConnectionRequest`

## Namespace

Google \\ Cloud \\ Datastream \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ name`

`string`  

Required. The name of the private connectivity configuration to delete.

`↳ request_id`

`string`  

Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

`↳ force`

`bool`  

Optional. If set to true, any child routes that belong to this PrivateConnection will also be deleted.

### getName

Required. The name of the private connectivity configuration to delete.

**Returns**

**Type**

**Description**

`string`

### setName

Required. The name of the private connectivity configuration to delete.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getRequestId

Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

**Returns**

**Type**

**Description**

`string`

### setRequestId

Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request.

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

### getForce

Optional. If set to true, any child routes that belong to this PrivateConnection will also be deleted.

**Returns**

**Type**

**Description**

`bool`

### setForce

Optional. If set to true, any child routes that belong to this PrivateConnection will also be deleted.

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

**Parameter**

**Name**

**Description**

`name`

`string`  

Required. The name of the private connectivity configuration to delete. Please see [Google\\Cloud\\Datastream\\V1\\DatastreamClient::privateConnectionName()](/php/docs/reference/cloud-datastream/1.3.0/V1.DatastreamClient#_Google_Cloud_Datastream_V1_DatastreamClient__privateConnectionName__) for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\Datastream\V1\DeletePrivateConnectionRequest](/php/docs/reference/cloud-datastream/1.3.0/V1.DeletePrivateConnectionRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
