-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class ImportDataConfig (0.21.0) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class ImportDataConfig.

Describes the location from where we import data into a Dataset, together with the labels that will be applied to the DataItems and the Annotations.

Generated from protobuf message `google.cloud.aiplatform.v1.ImportDataConfig`

## Namespace

Google \\ Cloud \\ AIPlatform \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ gcs_source`

`[Google\Cloud\AIPlatform\V1\GcsSource](/php/docs/reference/cloud-ai-platform/0.21.0/V1.GcsSource)`  

The Google Cloud Storage location for the input content.

`↳ data_item_labels`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

Labels that will be applied to newly imported DataItems. If an identical DataItem as one being imported already exists in the Dataset, then these labels will be appended to these of the already existing one, and if labels with identical key is imported before, the old label value will be overwritten. If two DataItems are identical in the same import data operation, the labels will be combined and if key collision happens in this case, one of the values will be picked randomly. Two DataItems are considered identical if their content bytes are identical (e.g. image bytes or pdf bytes). These labels will be overridden by Annotation labels specified inside index file referenced by [import\_schema\_uri](/php/docs/reference/cloud-ai-platform/0.21.0/V1.ImportDataConfig#_Google_Cloud_AIPlatform_V1_ImportDataConfig__getImportSchemaUri__), e.g. jsonl file.

`↳ annotation_labels`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

Labels that will be applied to newly imported Annotations. If two Annotations are identical, one of them will be deduped. Two Annotations are considered identical if their [payload](/php/docs/reference/cloud-ai-platform/0.21.0/V1.Annotation#_Google_Cloud_AIPlatform_V1_Annotation__getPayload__), [payload\_schema\_uri](/php/docs/reference/cloud-ai-platform/0.21.0/V1.Annotation#_Google_Cloud_AIPlatform_V1_Annotation__getPayloadSchemaUri__) and all of their [labels](/php/docs/reference/cloud-ai-platform/0.21.0/V1.Annotation#_Google_Cloud_AIPlatform_V1_Annotation__getLabels__) are the same. These labels will be overridden by Annotation labels specified inside index file referenced by [import\_schema\_uri](/php/docs/reference/cloud-ai-platform/0.21.0/V1.ImportDataConfig#_Google_Cloud_AIPlatform_V1_ImportDataConfig__getImportSchemaUri__), e.g. jsonl file.

`↳ import_schema_uri`

`string`  

Required. Points to a YAML file stored on Google Cloud Storage describing the import format. Validation will be done against the schema. The schema is defined as an [OpenAPI 3.0.2 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject).

### getGcsSource

The Google Cloud Storage location for the input content.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\GcsSource](/php/docs/reference/cloud-ai-platform/0.21.0/V1.GcsSource)|null`

### hasGcsSource

### setGcsSource

The Google Cloud Storage location for the input content.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\GcsSource](/php/docs/reference/cloud-ai-platform/0.21.0/V1.GcsSource)`  

**Returns**

**Type**

**Description**

`$this`

### getDataItemLabels

Labels that will be applied to newly imported DataItems. If an identical DataItem as one being imported already exists in the Dataset, then these labels will be appended to these of the already existing one, and if labels with identical key is imported before, the old label value will be overwritten. If two DataItems are identical in the same import data operation, the labels will be combined and if key collision happens in this case, one of the values will be picked randomly. Two DataItems are considered identical if their content bytes are identical (e.g. image bytes or pdf bytes).

These labels will be overridden by Annotation labels specified inside index file referenced by [import\_schema\_uri](/php/docs/reference/cloud-ai-platform/0.21.0/V1.ImportDataConfig#_Google_Cloud_AIPlatform_V1_ImportDataConfig__getImportSchemaUri__), e.g. jsonl file.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setDataItemLabels

Labels that will be applied to newly imported DataItems. If an identical DataItem as one being imported already exists in the Dataset, then these labels will be appended to these of the already existing one, and if labels with identical key is imported before, the old label value will be overwritten. If two DataItems are identical in the same import data operation, the labels will be combined and if key collision happens in this case, one of the values will be picked randomly. Two DataItems are considered identical if their content bytes are identical (e.g. image bytes or pdf bytes).

These labels will be overridden by Annotation labels specified inside index file referenced by [import\_schema\_uri](/php/docs/reference/cloud-ai-platform/0.21.0/V1.ImportDataConfig#_Google_Cloud_AIPlatform_V1_ImportDataConfig__getImportSchemaUri__), e.g. jsonl file.

**Parameter**

**Name**

**Description**

`var`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

**Returns**

**Type**

**Description**

`$this`

### getAnnotationLabels

Labels that will be applied to newly imported Annotations. If two Annotations are identical, one of them will be deduped. Two Annotations are considered identical if their [payload](/php/docs/reference/cloud-ai-platform/0.21.0/V1.Annotation#_Google_Cloud_AIPlatform_V1_Annotation__getPayload__), [payload\_schema\_uri](/php/docs/reference/cloud-ai-platform/0.21.0/V1.Annotation#_Google_Cloud_AIPlatform_V1_Annotation__getPayloadSchemaUri__) and all of their [labels](/php/docs/reference/cloud-ai-platform/0.21.0/V1.Annotation#_Google_Cloud_AIPlatform_V1_Annotation__getLabels__) are the same. These labels will be overridden by Annotation labels specified inside index file referenced by [import\_schema\_uri](/php/docs/reference/cloud-ai-platform/0.21.0/V1.ImportDataConfig#_Google_Cloud_AIPlatform_V1_ImportDataConfig__getImportSchemaUri__), e.g. jsonl file.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setAnnotationLabels

Labels that will be applied to newly imported Annotations. If two Annotations are identical, one of them will be deduped. Two Annotations are considered identical if their [payload](/php/docs/reference/cloud-ai-platform/0.21.0/V1.Annotation#_Google_Cloud_AIPlatform_V1_Annotation__getPayload__), [payload\_schema\_uri](/php/docs/reference/cloud-ai-platform/0.21.0/V1.Annotation#_Google_Cloud_AIPlatform_V1_Annotation__getPayloadSchemaUri__) and all of their [labels](/php/docs/reference/cloud-ai-platform/0.21.0/V1.Annotation#_Google_Cloud_AIPlatform_V1_Annotation__getLabels__) are the same. These labels will be overridden by Annotation labels specified inside index file referenced by [import\_schema\_uri](/php/docs/reference/cloud-ai-platform/0.21.0/V1.ImportDataConfig#_Google_Cloud_AIPlatform_V1_ImportDataConfig__getImportSchemaUri__), e.g. jsonl file.

**Parameter**

**Name**

**Description**

`var`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

**Returns**

**Type**

**Description**

`$this`

### getImportSchemaUri

Required. Points to a YAML file stored on Google Cloud Storage describing the import format. Validation will be done against the schema. The schema is defined as an [OpenAPI 3.0.2 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject).

**Returns**

**Type**

**Description**

`string`

### setImportSchemaUri

Required. Points to a YAML file stored on Google Cloud Storage describing the import format. Validation will be done against the schema. The schema is defined as an [OpenAPI 3.0.2 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSource

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
