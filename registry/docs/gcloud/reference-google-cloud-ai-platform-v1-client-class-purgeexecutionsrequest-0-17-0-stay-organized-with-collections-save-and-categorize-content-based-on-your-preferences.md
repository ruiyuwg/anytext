-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class PurgeExecutionsRequest (0.17.0) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class PurgeExecutionsRequest.

Request message for [MetadataService.PurgeExecutions](/php/docs/reference/cloud-ai-platform/0.17.0/V1.MetadataServiceClient#_Google_Cloud_AIPlatform_V1_MetadataServiceClient__purgeExecutions__).

Generated from protobuf message `google.cloud.aiplatform.v1.PurgeExecutionsRequest`

## Methods

### build

**Parameter**

**Name**

**Description**

`parent`

`string`  

Required. The metadata store to purge Executions from. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}` Please see {@see \\Google\\Cloud\\AIPlatform\\V1\\MetadataServiceClient::metadataStoreName()} for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\PurgeExecutionsRequest](/php/docs/reference/cloud-ai-platform/0.17.0/V1.PurgeExecutionsRequest)`

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

Required. The metadata store to purge Executions from. Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}`

`↳ filter`

`string`  

Required. A required filter matching the Executions to be purged. E.g., `update_time <= 2020-11-19T11:30:00-04:00`.

`↳ force`

`bool`  

Optional. Flag to indicate to actually perform the purge. If `force` is set to false, the method will return a sample of Execution names that would be deleted.

### getParent

Required. The metadata store to purge Executions from.

Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}`

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The metadata store to purge Executions from.

Format: `projects/{project}/locations/{location}/metadataStores/{metadatastore}`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getFilter

Required. A required filter matching the Executions to be purged.

E.g., `update_time <= 2020-11-19T11:30:00-04:00`.

**Returns**

**Type**

**Description**

`string`

### setFilter

Required. A required filter matching the Executions to be purged.

E.g., `update_time <= 2020-11-19T11:30:00-04:00`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getForce

Optional. Flag to indicate to actually perform the purge.

If `force` is set to false, the method will return a sample of Execution names that would be deleted.

**Returns**

**Type**

**Description**

`bool`

### setForce

Optional. Flag to indicate to actually perform the purge.

If `force` is set to false, the method will return a sample of Execution names that would be deleted.

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
