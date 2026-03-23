-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Firestore V1beta1 Client - Class QueryTarget (1.40.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.40.0keyboard\_arrow\_down

-   [2.2.0-RC1](/php/docs/reference/cloud-firestore/2.2.0-RC1/V1beta1.Target.QueryTarget)
-   [2.1.0-RC1](/php/docs/reference/cloud-firestore/2.1.0-RC1/V1beta1.Target.QueryTarget)
-   [2.0.2-RC1](/php/docs/reference/cloud-firestore/2.0.2-RC1/V1beta1.Target.QueryTarget)
-   [1.55.0 (latest)](/php/docs/reference/cloud-firestore/latest/V1beta1.Target.QueryTarget)
-   [1.54.4](/php/docs/reference/cloud-firestore/1.54.4/V1beta1.Target.QueryTarget)
-   [1.53.1](/php/docs/reference/cloud-firestore/1.53.1/V1beta1.Target.QueryTarget)
-   [1.52.0](/php/docs/reference/cloud-firestore/1.52.0/V1beta1.Target.QueryTarget)
-   [1.51.0](/php/docs/reference/cloud-firestore/1.51.0/V1beta1.Target.QueryTarget)
-   [1.50.0](/php/docs/reference/cloud-firestore/1.50.0/V1beta1.Target.QueryTarget)
-   [1.48.1](/php/docs/reference/cloud-firestore/1.48.1/V1beta1.Target.QueryTarget)
-   [1.47.3](/php/docs/reference/cloud-firestore/1.47.3/V1beta1.Target.QueryTarget)
-   [1.46.0](/php/docs/reference/cloud-firestore/1.46.0/V1beta1.Target.QueryTarget)
-   [1.45.2](/php/docs/reference/cloud-firestore/1.45.2/V1beta1.Target.QueryTarget)
-   [1.44.1](/php/docs/reference/cloud-firestore/1.44.1/V1beta1.Target.QueryTarget)
-   [1.43.3](/php/docs/reference/cloud-firestore/1.43.3/V1beta1.Target.QueryTarget)
-   [1.40.0](/php/docs/reference/cloud-firestore/1.40.0/V1beta1.Target.QueryTarget)
-   [1.39.0](/php/docs/reference/cloud-firestore/1.39.0/V1beta1.Target.QueryTarget)
-   [1.38.0](/php/docs/reference/cloud-firestore/1.38.0/V1beta1.Target.QueryTarget)
-   [1.37.7](/php/docs/reference/cloud-firestore/1.37.7/V1beta1.Target.QueryTarget)
-   [1.36.1](/php/docs/reference/cloud-firestore/1.36.1/V1beta1.Target.QueryTarget)
-   [1.35.0](/php/docs/reference/cloud-firestore/1.35.0/V1beta1.Target.QueryTarget)
-   [1.34.0](/php/docs/reference/cloud-firestore/1.34.0/V1beta1.Target.QueryTarget)
-   [1.33.0](/php/docs/reference/cloud-firestore/1.33.0/V1beta1.Target.QueryTarget)
-   [1.32.0](/php/docs/reference/cloud-firestore/1.32.0/V1beta1.Target.QueryTarget)
-   [1.31.0](/php/docs/reference/cloud-firestore/1.31.0/V1beta1.Target.QueryTarget)
-   [1.30.0](/php/docs/reference/cloud-firestore/1.30.0/V1beta1.Target.QueryTarget)
-   [1.28.0](/php/docs/reference/cloud-firestore/1.28.0/V1beta1.Target.QueryTarget)
-   [1.27.3](/php/docs/reference/cloud-firestore/1.27.3/V1beta1.Target.QueryTarget)

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Cloud Firestore V1beta1 Client class QueryTarget.

A target specified by a query.

Generated from protobuf message `google.firestore.v1beta1.Target.QueryTarget`

## Namespace

Google \\ Cloud \\ Firestore \\ V1beta1 \\ Target

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

The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`

`↳ structured_query`

`[Google\Cloud\Firestore\V1beta1\StructuredQuery](/php/docs/reference/cloud-firestore/1.40.0/V1beta1.StructuredQuery)`  

A structured query.

### getParent

The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`.

For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`

**Returns**

**Type**

**Description**

`string`

### setParent

The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`.

For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getStructuredQuery

A structured query.

**Returns**

**Type**

**Description**

`[Google\Cloud\Firestore\V1beta1\StructuredQuery](/php/docs/reference/cloud-firestore/1.40.0/V1beta1.StructuredQuery)`

### setStructuredQuery

A structured query.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Firestore\V1beta1\StructuredQuery](/php/docs/reference/cloud-firestore/1.40.0/V1beta1.StructuredQuery)`  

**Returns**

**Type**

**Description**

`$this`

### getQueryType

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
