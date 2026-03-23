-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Bigtable V2 Client - Class Field (2.6.3) Stay organized with collections Save and categorize content based on your preferences.

2.21.1 (latest) 2.21.0 2.20.2 2.19.2 2.18.0 2.17.1 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.9.1 2.8.0 2.7.0 2.6.3 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.1 1.32.1 1.31.1 1.30.0 1.29.2 1.28.3 1.27.0 1.26.2 1.25.0 1.24.1 1.23.0 1.22.2 1.21.1 1.20.3

Reference documentation and code samples for the Cloud Bigtable V2 Client class Field.

A struct field and its type.

Generated from protobuf message `google.bigtable.admin.v2.Type.Struct.Field`

## Namespace

Google \\ Cloud \\ Bigtable \\ Admin \\ V2 \\ Type \\ Struct

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ field_name`

`string`  

The field name (optional). Fields without a `field_name` are considered anonymous and cannot be referenced by name.

`↳ type`

`[Google\Cloud\Bigtable\Admin\V2\Type](/php/docs/reference/cloud-bigtable/2.6.3/Admin.V2.Type)`  

The type of values in this field.

### getFieldName

The field name (optional). Fields without a `field_name` are considered anonymous and cannot be referenced by name.

**Returns**

**Type**

**Description**

`string`

### setFieldName

The field name (optional). Fields without a `field_name` are considered anonymous and cannot be referenced by name.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getType

The type of values in this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\Bigtable\Admin\V2\Type](/php/docs/reference/cloud-bigtable/2.6.3/Admin.V2.Type)|null`

### hasType

### clearType

### setType

The type of values in this field.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Bigtable\Admin\V2\Type](/php/docs/reference/cloud-bigtable/2.6.3/Admin.V2.Type)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
