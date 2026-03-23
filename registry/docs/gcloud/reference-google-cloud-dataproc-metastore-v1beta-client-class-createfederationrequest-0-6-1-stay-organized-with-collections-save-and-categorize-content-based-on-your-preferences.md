-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataproc Metastore V1beta Client - Class CreateFederationRequest (0.6.1) Stay organized with collections Save and categorize content based on your preferences.

1.2.3 (latest) 1.2.2 1.1.1 1.0.4 0.11.5 0.10.2 0.9.0 0.8.1 0.7.0 0.6.1 0.5.1 0.4.1

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Dataproc Metastore V1beta Client class CreateFederationRequest.

Request message for CreateFederation.

Generated from protobuf message `google.cloud.metastore.v1beta.CreateFederationRequest`

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

Required. The relative resource name of the location in which to create a federation service, in the following form: `projects/{project_number}/locations/{location_id}`.

`↳ federation_id`

`string`  

Required. The ID of the metastore federation, which is used as the final component of the metastore federation's name. This value must be between 2 and 63 characters long inclusive, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.

`↳ federation`

`[Google\Cloud\Metastore\V1beta\Federation](/php/docs/reference/cloud-dataproc-metastore/0.6.1/V1beta.Federation)`  

Required. The Metastore Federation to create. The `name` field is ignored. The ID of the created metastore federation must be provided in the request's `federation_id` field.

`↳ request_id`

`string`  

Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request. For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments. The request ID must be a valid [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.

### getParent

Required. The relative resource name of the location in which to create a federation service, in the following form: `projects/{project_number}/locations/{location_id}`.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The relative resource name of the location in which to create a federation service, in the following form: `projects/{project_number}/locations/{location_id}`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getFederationId

Required. The ID of the metastore federation, which is used as the final component of the metastore federation's name.

This value must be between 2 and 63 characters long inclusive, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.

**Returns**

**Type**

**Description**

`string`

### setFederationId

Required. The ID of the metastore federation, which is used as the final component of the metastore federation's name.

This value must be between 2 and 63 characters long inclusive, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getFederation

Required. The Metastore Federation to create. The `name` field is ignored. The ID of the created metastore federation must be provided in the request's `federation_id` field.

**Returns**

**Type**

**Description**

`[Google\Cloud\Metastore\V1beta\Federation](/php/docs/reference/cloud-dataproc-metastore/0.6.1/V1beta.Federation)|null`

### hasFederation

### clearFederation

### setFederation

Required. The Metastore Federation to create. The `name` field is ignored. The ID of the created metastore federation must be provided in the request's `federation_id` field.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Metastore\V1beta\Federation](/php/docs/reference/cloud-dataproc-metastore/0.6.1/V1beta.Federation)`  

**Returns**

**Type**

**Description**

`$this`

### getRequestId

Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.

For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments. The request ID must be a valid [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.

**Returns**

**Type**

**Description**

`string`

### setRequestId

Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.

For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments. The request ID must be a valid [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
