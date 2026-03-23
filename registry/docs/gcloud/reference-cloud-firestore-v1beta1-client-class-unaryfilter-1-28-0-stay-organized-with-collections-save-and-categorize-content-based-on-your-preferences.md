-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Firestore V1beta1 Client - Class UnaryFilter (1.28.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.28.0keyboard\_arrow\_down

-   [2.2.0-RC1](/php/docs/reference/cloud-firestore/2.2.0-RC1/V1beta1.StructuredQuery.UnaryFilter)
-   [2.1.0-RC1](/php/docs/reference/cloud-firestore/2.1.0-RC1/V1beta1.StructuredQuery.UnaryFilter)
-   [2.0.2-RC1](/php/docs/reference/cloud-firestore/2.0.2-RC1/V1beta1.StructuredQuery.UnaryFilter)
-   [1.55.0 (latest)](/php/docs/reference/cloud-firestore/latest/V1beta1.StructuredQuery.UnaryFilter)
-   [1.54.4](/php/docs/reference/cloud-firestore/1.54.4/V1beta1.StructuredQuery.UnaryFilter)
-   [1.53.1](/php/docs/reference/cloud-firestore/1.53.1/V1beta1.StructuredQuery.UnaryFilter)
-   [1.52.0](/php/docs/reference/cloud-firestore/1.52.0/V1beta1.StructuredQuery.UnaryFilter)
-   [1.51.0](/php/docs/reference/cloud-firestore/1.51.0/V1beta1.StructuredQuery.UnaryFilter)
-   [1.50.0](/php/docs/reference/cloud-firestore/1.50.0/V1beta1.StructuredQuery.UnaryFilter)
-   [1.48.1](/php/docs/reference/cloud-firestore/1.48.1/V1beta1.StructuredQuery.UnaryFilter)
-   [1.47.3](/php/docs/reference/cloud-firestore/1.47.3/V1beta1.StructuredQuery.UnaryFilter)
-   [1.46.0](/php/docs/reference/cloud-firestore/1.46.0/V1beta1.StructuredQuery.UnaryFilter)
-   [1.45.2](/php/docs/reference/cloud-firestore/1.45.2/V1beta1.StructuredQuery.UnaryFilter)
-   [1.44.1](/php/docs/reference/cloud-firestore/1.44.1/V1beta1.StructuredQuery.UnaryFilter)
-   [1.43.3](/php/docs/reference/cloud-firestore/1.43.3/V1beta1.StructuredQuery.UnaryFilter)
-   [1.40.0](/php/docs/reference/cloud-firestore/1.40.0/V1beta1.StructuredQuery.UnaryFilter)
-   [1.39.0](/php/docs/reference/cloud-firestore/1.39.0/V1beta1.StructuredQuery.UnaryFilter)
-   [1.38.0](/php/docs/reference/cloud-firestore/1.38.0/V1beta1.StructuredQuery.UnaryFilter)
-   [1.37.7](/php/docs/reference/cloud-firestore/1.37.7/V1beta1.StructuredQuery.UnaryFilter)
-   [1.36.1](/php/docs/reference/cloud-firestore/1.36.1/V1beta1.StructuredQuery.UnaryFilter)
-   [1.35.0](/php/docs/reference/cloud-firestore/1.35.0/V1beta1.StructuredQuery.UnaryFilter)
-   [1.34.0](/php/docs/reference/cloud-firestore/1.34.0/V1beta1.StructuredQuery.UnaryFilter)
-   [1.33.0](/php/docs/reference/cloud-firestore/1.33.0/V1beta1.StructuredQuery.UnaryFilter)
-   [1.32.0](/php/docs/reference/cloud-firestore/1.32.0/V1beta1.StructuredQuery.UnaryFilter)
-   [1.31.0](/php/docs/reference/cloud-firestore/1.31.0/V1beta1.StructuredQuery.UnaryFilter)
-   [1.30.0](/php/docs/reference/cloud-firestore/1.30.0/V1beta1.StructuredQuery.UnaryFilter)
-   [1.28.0](/php/docs/reference/cloud-firestore/1.28.0/V1beta1.StructuredQuery.UnaryFilter)
-   [1.27.3](/php/docs/reference/cloud-firestore/1.27.3/V1beta1.StructuredQuery.UnaryFilter)

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Cloud Firestore V1beta1 Client class UnaryFilter.

A filter with a single operand.

Generated from protobuf message `google.firestore.v1beta1.StructuredQuery.UnaryFilter`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ op`

`int`  

The unary operator to apply.

`↳ field`

`[Google\Cloud\Firestore\V1beta1\StructuredQuery\FieldReference](/php/docs/reference/cloud-firestore/1.28.0/V1beta1.StructuredQuery.FieldReference)`  

The field to which to apply the operator.

### getOp

The unary operator to apply.

**Returns**

**Type**

**Description**

`int`

### setOp

The unary operator to apply.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getField

The field to which to apply the operator.

**Returns**

**Type**

**Description**

`[Google\Cloud\Firestore\V1beta1\StructuredQuery\FieldReference](/php/docs/reference/cloud-firestore/1.28.0/V1beta1.StructuredQuery.FieldReference)`

### setField

The field to which to apply the operator.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Firestore\V1beta1\StructuredQuery\FieldReference](/php/docs/reference/cloud-firestore/1.28.0/V1beta1.StructuredQuery.FieldReference)`  

**Returns**

**Type**

**Description**

`$this`

### getOperandType

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
