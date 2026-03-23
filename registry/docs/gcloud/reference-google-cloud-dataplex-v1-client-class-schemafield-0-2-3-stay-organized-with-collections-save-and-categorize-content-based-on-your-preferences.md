-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataplex V1 Client - Class SchemaField (0.2.3) Stay organized with collections Save and categorize content based on your preferences.

1.12.0 (latest) 1.11.0 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.4.0 1.3.0 1.2.1 1.1.1 1.0.1 0.16.1 0.15.1 0.14.0 0.13.0 0.12.0 0.11.1 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.1 0.4.0 0.3.0 0.2.3 0.1.6

Reference documentation and code samples for the Google Cloud Dataplex V1 Client class SchemaField.

Represents a column field within a table schema.

Generated from protobuf message `google.cloud.dataplex.v1.Schema.SchemaField`

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

Required. The name of the field. Must contain only letters, numbers and underscores, with a maximum length of 767 characters, and must begin with a letter or underscore.

`↳ description`

`string`  

Optional. User friendly field description. Must be less than or equal to 1024 characters.

`↳ type`

`int`  

Required. The type of field.

`↳ mode`

`int`  

Required. Additional field semantics.

`↳ fields`

`array<[Google\Cloud\Dataplex\V1\Schema\SchemaField](/php/docs/reference/cloud-dataplex/0.2.3/V1.Schema.SchemaField)>`  

Optional. Any nested field for complex types.

### getName

Required. The name of the field. Must contain only letters, numbers and underscores, with a maximum length of 767 characters, and must begin with a letter or underscore.

**Returns**

**Type**

**Description**

`string`

### setName

Required. The name of the field. Must contain only letters, numbers and underscores, with a maximum length of 767 characters, and must begin with a letter or underscore.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDescription

Optional. User friendly field description. Must be less than or equal to 1024 characters.

**Returns**

**Type**

**Description**

`string`

### setDescription

Optional. User friendly field description. Must be less than or equal to 1024 characters.

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

Required. The type of field.

**Returns**

**Type**

**Description**

`int`

### setType

Required. The type of field.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getMode

Required. Additional field semantics.

**Returns**

**Type**

**Description**

`int`

### setMode

Required. Additional field semantics.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getFields

Optional. Any nested field for complex types.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setFields

Optional. Any nested field for complex types.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Dataplex\V1\Schema\SchemaField](/php/docs/reference/cloud-dataplex/0.2.3/V1.Schema.SchemaField)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
