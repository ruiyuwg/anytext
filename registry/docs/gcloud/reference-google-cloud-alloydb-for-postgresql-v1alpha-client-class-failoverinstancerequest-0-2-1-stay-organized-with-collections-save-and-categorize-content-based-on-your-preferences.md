-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud AlloyDB for PostgreSQL V1alpha Client - Class FailoverInstanceRequest (0.2.1) Stay organized with collections Save and categorize content based on your preferences.

1.7.1 (latest) 1.7.0 1.6.3 1.5.0 1.4.1 1.3.0 1.2.0 1.1.3 1.0.0 0.10.3 0.9.0 0.8.0 0.7.1 0.6.0 0.5.0 0.4.0 0.3.0 0.2.1 0.1.3

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud AlloyDB for PostgreSQL V1alpha Client class FailoverInstanceRequest.

Message for triggering failover on an Instance

Generated from protobuf message `google.cloud.alloydb.v1alpha.FailoverInstanceRequest`

## Namespace

Google \\ Cloud \\ AlloyDb \\ V1alpha

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

Required. The name of the resource. For the required format, see the comment on the Instance.name field.

`↳ request_id`

`string`  

Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

`↳ validate_only`

`bool`  

Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the failover.

### getName

Required. The name of the resource. For the required format, see the comment on the Instance.name field.

**Returns**

**Type**

**Description**

`string`

### setName

Required. The name of the resource. For the required format, see the comment on the Instance.name field.

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

Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

**Returns**

**Type**

**Description**

`string`

### setRequestId

Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request.

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

Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the failover.

**Returns**

**Type**

**Description**

`bool`

### setValidateOnly

Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the failover.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
