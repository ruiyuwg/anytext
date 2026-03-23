-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Data Catalog V1 Client - Class TagTemplateField (2.0.2) Stay organized with collections Save and categorize content based on your preferences.

2.4.2 (latest) 2.4.1 2.3.2 2.2.4 2.1.0 2.0.2 1.10.3 1.9.1 1.8.2 1.7.1 1.6.0 1.5.1 1.4.2 1.3.9

Reference documentation and code samples for the Google Cloud Data Catalog V1 Client class TagTemplateField.

The template for an individual field within a tag template.

Generated from protobuf message `google.cloud.datacatalog.v1.TagTemplateField`

## Namespace

Google \\ Cloud \\ DataCatalog \\ V1

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

Output only. The resource name of the tag template field in URL format. Example: `projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE}/fields/{FIELD}` Note: The tag template field itself might not be stored in the location specified in its name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (\_), and must start with a letter or underscore. The maximum length is 64 characters.

`↳ display_name`

`string`  

The display name for this field. Defaults to an empty string. The name must contain only Unicode letters, numbers (0-9), underscores (\_), dashes (-), spaces ( ), and can't start or end with spaces. The maximum length is 200 characters.

`↳ type`

`[Google\Cloud\DataCatalog\V1\FieldType](/php/docs/reference/cloud-data-catalog/2.0.2/V1.FieldType)`  

Required. The type of value this tag field can contain.

`↳ is_required`

`bool`  

If true, this field is required. Defaults to false.

`↳ description`

`string`  

The description for this field. Defaults to an empty string.

`↳ order`

`int`  

The order of this field with respect to other fields in this tag template. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order and field orders within a tag don't have to be sequential.

### getName

Output only. The resource name of the tag template field in URL format.

Example: `projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE}/fields/{FIELD}` Note: The tag template field itself might not be stored in the location specified in its name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (\_), and must start with a letter or underscore. The maximum length is 64 characters.

**Returns**

**Type**

**Description**

`string`

### setName

Output only. The resource name of the tag template field in URL format.

Example: `projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE}/fields/{FIELD}` Note: The tag template field itself might not be stored in the location specified in its name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (\_), and must start with a letter or underscore. The maximum length is 64 characters.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDisplayName

The display name for this field. Defaults to an empty string.

The name must contain only Unicode letters, numbers (0-9), underscores (\_), dashes (-), spaces ( ), and can't start or end with spaces. The maximum length is 200 characters.

**Returns**

**Type**

**Description**

`string`

### setDisplayName

The display name for this field. Defaults to an empty string.

The name must contain only Unicode letters, numbers (0-9), underscores (\_), dashes (-), spaces ( ), and can't start or end with spaces. The maximum length is 200 characters.

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

Required. The type of value this tag field can contain.

**Returns**

**Type**

**Description**

`[Google\Cloud\DataCatalog\V1\FieldType](/php/docs/reference/cloud-data-catalog/2.0.2/V1.FieldType)|null`

### hasType

### clearType

### setType

Required. The type of value this tag field can contain.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\DataCatalog\V1\FieldType](/php/docs/reference/cloud-data-catalog/2.0.2/V1.FieldType)`  

**Returns**

**Type**

**Description**

`$this`

### getIsRequired

If true, this field is required. Defaults to false.

**Returns**

**Type**

**Description**

`bool`

### setIsRequired

If true, this field is required. Defaults to false.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getDescription

The description for this field. Defaults to an empty string.

**Returns**

**Type**

**Description**

`string`

### setDescription

The description for this field. Defaults to an empty string.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getOrder

The order of this field with respect to other fields in this tag template.

For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order and field orders within a tag don't have to be sequential.

**Returns**

**Type**

**Description**

`int`

### setOrder

The order of this field with respect to other fields in this tag template.

For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order and field orders within a tag don't have to be sequential.

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

Last updated 2026-03-18 UTC.
