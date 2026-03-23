-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class DatasetVersion (1.18.0) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class DatasetVersion.

Describes the dataset version.

Generated from protobuf message `google.cloud.aiplatform.v1.DatasetVersion`

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

`↳ name`

`string`  

Output only. Identifier. The resource name of the DatasetVersion.

`↳ create_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. Timestamp when this DatasetVersion was created.

`↳ update_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. Timestamp when this DatasetVersion was last updated.

`↳ etag`

`string`  

Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.

`↳ big_query_dataset_name`

`string`  

Output only. Name of the associated BigQuery dataset.

`↳ display_name`

`string`  

The user-defined name of the DatasetVersion. The name can be up to 128 characters long and can consist of any UTF-8 characters.

`↳ metadata`

`[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)`  

Required. Output only. Additional information about the DatasetVersion.

`↳ model_reference`

`string`  

Output only. Reference to the public base model last used by the dataset version. Only set for prompt dataset versions.

`↳ satisfies_pzs`

`bool`  

Output only. Reserved for future use.

`↳ satisfies_pzi`

`bool`  

Output only. Reserved for future use.

### getName

Output only. Identifier. The resource name of the DatasetVersion.

**Returns**

**Type**

**Description**

`string`

### setName

Output only. Identifier. The resource name of the DatasetVersion.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCreateTime

Output only. Timestamp when this DatasetVersion was created.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasCreateTime

### clearCreateTime

### setCreateTime

Output only. Timestamp when this DatasetVersion was created.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getUpdateTime

Output only. Timestamp when this DatasetVersion was last updated.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasUpdateTime

### clearUpdateTime

### setUpdateTime

Output only. Timestamp when this DatasetVersion was last updated.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getEtag

Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.

**Returns**

**Type**

**Description**

`string`

### setEtag

Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getBigQueryDatasetName

Output only. Name of the associated BigQuery dataset.

**Returns**

**Type**

**Description**

`string`

### setBigQueryDatasetName

Output only. Name of the associated BigQuery dataset.

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

The user-defined name of the DatasetVersion.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

**Returns**

**Type**

**Description**

`string`

### setDisplayName

The user-defined name of the DatasetVersion.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getMetadata

Required. Output only. Additional information about the DatasetVersion.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)|null`

### hasMetadata

### clearMetadata

### setMetadata

Required. Output only. Additional information about the DatasetVersion.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)`  

**Returns**

**Type**

**Description**

`$this`

### getModelReference

Output only. Reference to the public base model last used by the dataset version. Only set for prompt dataset versions.

**Returns**

**Type**

**Description**

`string`

### setModelReference

Output only. Reference to the public base model last used by the dataset version. Only set for prompt dataset versions.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSatisfiesPzs

Output only. Reserved for future use.

**Returns**

**Type**

**Description**

`bool`

### setSatisfiesPzs

Output only. Reserved for future use.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getSatisfiesPzi

Output only. Reserved for future use.

**Returns**

**Type**

**Description**

`bool`

### setSatisfiesPzi

Output only. Reserved for future use.

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
