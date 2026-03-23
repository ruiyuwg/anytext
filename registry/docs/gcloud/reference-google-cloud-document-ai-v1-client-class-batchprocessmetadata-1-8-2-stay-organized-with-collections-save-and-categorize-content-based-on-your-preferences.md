-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Document Ai V1 Client - Class BatchProcessMetadata (1.8.2) Stay organized with collections Save and categorize content based on your preferences.

2.6.1 (latest) 2.6.0 2.5.1 2.4.1 2.3.0 2.2.2 2.1.3 2.0.0 1.14.0 1.13.1 1.12.2 1.9.0 1.8.2 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.2 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Document Ai V1 Client class BatchProcessMetadata.

The long-running operation metadata for [BatchProcessDocuments](/php/docs/reference/cloud-document-ai/1.8.2/V1.DocumentProcessorServiceClient#_Google_Cloud_DocumentAI_V1_DocumentProcessorServiceClient__batchProcessDocuments__).

Generated from protobuf message `google.cloud.documentai.v1.BatchProcessMetadata`

## Namespace

Google \\ Cloud \\ DocumentAI \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ state`

`int`  

The state of the current batch processing.

`↳ state_message`

`string`  

A message providing more details about the current state of processing. For example, the error message if the operation is failed.

`↳ create_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

The creation time of the operation.

`↳ update_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

The last update time of the operation.

`↳ individual_process_statuses`

`array<[Google\Cloud\DocumentAI\V1\BatchProcessMetadata\IndividualProcessStatus](/php/docs/reference/cloud-document-ai/1.8.2/V1.BatchProcessMetadata.IndividualProcessStatus)>`  

The list of response details of each document.

### getState

The state of the current batch processing.

**Returns**

**Type**

**Description**

`int`

### setState

The state of the current batch processing.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getStateMessage

A message providing more details about the current state of processing.

For example, the error message if the operation is failed.

**Returns**

**Type**

**Description**

`string`

### setStateMessage

A message providing more details about the current state of processing.

For example, the error message if the operation is failed.

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

The creation time of the operation.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasCreateTime

### clearCreateTime

### setCreateTime

The creation time of the operation.

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

The last update time of the operation.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasUpdateTime

### clearUpdateTime

### setUpdateTime

The last update time of the operation.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getIndividualProcessStatuses

The list of response details of each document.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setIndividualProcessStatuses

The list of response details of each document.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\DocumentAI\V1\BatchProcessMetadata\IndividualProcessStatus](/php/docs/reference/cloud-document-ai/1.8.2/V1.BatchProcessMetadata.IndividualProcessStatus)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
