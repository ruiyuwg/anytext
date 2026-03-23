-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Firestore V1beta1 Client - Class RunQueryResponse (1.27.3) Stay organized with collections Save and categorize content based on your preferences.

Version 1.27.3keyboard\_arrow\_down

-   [2.2.0-RC1](/php/docs/reference/cloud-firestore/2.2.0-RC1/V1beta1.RunQueryResponse)
-   [2.1.0-RC1](/php/docs/reference/cloud-firestore/2.1.0-RC1/V1beta1.RunQueryResponse)
-   [2.0.2-RC1](/php/docs/reference/cloud-firestore/2.0.2-RC1/V1beta1.RunQueryResponse)
-   [1.55.0 (latest)](/php/docs/reference/cloud-firestore/latest/V1beta1.RunQueryResponse)
-   [1.54.4](/php/docs/reference/cloud-firestore/1.54.4/V1beta1.RunQueryResponse)
-   [1.53.1](/php/docs/reference/cloud-firestore/1.53.1/V1beta1.RunQueryResponse)
-   [1.52.0](/php/docs/reference/cloud-firestore/1.52.0/V1beta1.RunQueryResponse)
-   [1.51.0](/php/docs/reference/cloud-firestore/1.51.0/V1beta1.RunQueryResponse)
-   [1.50.0](/php/docs/reference/cloud-firestore/1.50.0/V1beta1.RunQueryResponse)
-   [1.48.1](/php/docs/reference/cloud-firestore/1.48.1/V1beta1.RunQueryResponse)
-   [1.47.3](/php/docs/reference/cloud-firestore/1.47.3/V1beta1.RunQueryResponse)
-   [1.46.0](/php/docs/reference/cloud-firestore/1.46.0/V1beta1.RunQueryResponse)
-   [1.45.2](/php/docs/reference/cloud-firestore/1.45.2/V1beta1.RunQueryResponse)
-   [1.44.1](/php/docs/reference/cloud-firestore/1.44.1/V1beta1.RunQueryResponse)
-   [1.43.3](/php/docs/reference/cloud-firestore/1.43.3/V1beta1.RunQueryResponse)
-   [1.40.0](/php/docs/reference/cloud-firestore/1.40.0/V1beta1.RunQueryResponse)
-   [1.39.0](/php/docs/reference/cloud-firestore/1.39.0/V1beta1.RunQueryResponse)
-   [1.38.0](/php/docs/reference/cloud-firestore/1.38.0/V1beta1.RunQueryResponse)
-   [1.37.7](/php/docs/reference/cloud-firestore/1.37.7/V1beta1.RunQueryResponse)
-   [1.36.1](/php/docs/reference/cloud-firestore/1.36.1/V1beta1.RunQueryResponse)
-   [1.35.0](/php/docs/reference/cloud-firestore/1.35.0/V1beta1.RunQueryResponse)
-   [1.34.0](/php/docs/reference/cloud-firestore/1.34.0/V1beta1.RunQueryResponse)
-   [1.33.0](/php/docs/reference/cloud-firestore/1.33.0/V1beta1.RunQueryResponse)
-   [1.32.0](/php/docs/reference/cloud-firestore/1.32.0/V1beta1.RunQueryResponse)
-   [1.31.0](/php/docs/reference/cloud-firestore/1.31.0/V1beta1.RunQueryResponse)
-   [1.30.0](/php/docs/reference/cloud-firestore/1.30.0/V1beta1.RunQueryResponse)
-   [1.28.0](/php/docs/reference/cloud-firestore/1.28.0/V1beta1.RunQueryResponse)
-   [1.27.3](/php/docs/reference/cloud-firestore/1.27.3/V1beta1.RunQueryResponse)

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Cloud Firestore V1beta1 Client class RunQueryResponse.

The response for Firestore.RunQuery.

Generated from protobuf message `google.firestore.v1beta1.RunQueryResponse`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ transaction`

`string`  

The transaction that was started as part of this request. Can only be set in the first response, and only if RunQueryRequest.new\_transaction was set in the request. If set, no other fields will be set in this response.

`↳ document`

`[Google\Cloud\Firestore\V1beta1\Document](/php/docs/reference/cloud-firestore/1.27.3/V1beta1.Document)`  

A query result. Not set when reporting partial progress.

`↳ read_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

The time at which the document was read. This may be monotonically increasing; in this case, the previous documents in the result stream are guaranteed not to have changed between their `read_time` and this one. If the query returns no results, a response with `read_time` and no `document` will be sent, and this represents the time at which the query was run.

`↳ skipped_results`

`int`  

The number of results that have been skipped due to an offset between the last response and the current response.

### getTransaction

The transaction that was started as part of this request.

Can only be set in the first response, and only if RunQueryRequest.new\_transaction was set in the request. If set, no other fields will be set in this response.

**Returns**

**Type**

**Description**

`string`

### setTransaction

The transaction that was started as part of this request.

Can only be set in the first response, and only if RunQueryRequest.new\_transaction was set in the request. If set, no other fields will be set in this response.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDocument

A query result.

Not set when reporting partial progress.

**Returns**

**Type**

**Description**

`[Google\Cloud\Firestore\V1beta1\Document](/php/docs/reference/cloud-firestore/1.27.3/V1beta1.Document)`

### setDocument

A query result.

Not set when reporting partial progress.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Firestore\V1beta1\Document](/php/docs/reference/cloud-firestore/1.27.3/V1beta1.Document)`  

**Returns**

**Type**

**Description**

`$this`

### getReadTime

The time at which the document was read. This may be monotonically increasing; in this case, the previous documents in the result stream are guaranteed not to have changed between their `read_time` and this one.

If the query returns no results, a response with `read_time` and no `document` will be sent, and this represents the time at which the query was run.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`

### setReadTime

The time at which the document was read. This may be monotonically increasing; in this case, the previous documents in the result stream are guaranteed not to have changed between their `read_time` and this one.

If the query returns no results, a response with `read_time` and no `document` will be sent, and this represents the time at which the query was run.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getSkippedResults

The number of results that have been skipped due to an offset between the last response and the current response.

**Returns**

**Type**

**Description**

`int`

### setSkippedResults

The number of results that have been skipped due to an offset between the last response and the current response.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
