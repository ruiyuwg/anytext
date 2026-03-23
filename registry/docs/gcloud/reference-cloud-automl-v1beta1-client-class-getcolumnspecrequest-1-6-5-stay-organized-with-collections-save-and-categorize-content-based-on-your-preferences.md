-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud AutoML V1beta1 Client - Class GetColumnSpecRequest (1.6.5) Stay organized with collections Save and categorize content based on your preferences.

2.1.3 (latest) 2.1.2 2.0.5 1.6.5 1.5.4 1.4.17

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Cloud AutoML V1beta1 Client class GetColumnSpecRequest.

Request message for [AutoMl.GetColumnSpec](/php/docs/reference/cloud-automl/1.6.5/V1beta1.AutoMlClient#_Google_Cloud_AutoMl_V1beta1_AutoMlClient__getColumnSpec__).

Generated from protobuf message `google.cloud.automl.v1beta1.GetColumnSpecRequest`

## Namespace

Google \\ Cloud \\ AutoMl \\ V1beta1

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

Required. The resource name of the column spec to retrieve.

`↳ field_mask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Mask specifying which fields to read.

### getName

Required. The resource name of the column spec to retrieve.

**Returns**

**Type**

**Description**

`string`

### setName

Required. The resource name of the column spec to retrieve.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getFieldMask

Mask specifying which fields to read.

**Returns**

**Type**

**Description**

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)|null`

### hasFieldMask

### clearFieldMask

### setFieldMask

Mask specifying which fields to read.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
