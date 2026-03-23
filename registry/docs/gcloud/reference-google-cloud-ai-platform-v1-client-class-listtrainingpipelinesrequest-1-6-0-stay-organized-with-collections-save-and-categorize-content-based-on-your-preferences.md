-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class ListTrainingPipelinesRequest (1.6.0) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class ListTrainingPipelinesRequest.

Request message for [PipelineService.ListTrainingPipelines](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PipelineServiceClient#_Google_Cloud_AIPlatform_V1_Client_PipelineServiceClient__listTrainingPipelines__).

Generated from protobuf message `google.cloud.aiplatform.v1.ListTrainingPipelinesRequest`

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

`↳ parent`

`string`  

Required. The resource name of the Location to list the TrainingPipelines from. Format: `projects/{project}/locations/{location}`

`↳ filter`

`string`  

The standard list filter. Supported fields: \* `display_name` supports `=`, `!=` comparisons, and `:` wildcard. \* `state` supports `=`, `!=` comparisons. \* `training_task_definition` `=`, `!=` comparisons, and `:` wildcard. \* `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format. \* `labels` supports general map functions that is: `labels.key=value` - key:value equality `labels.key:* - key existence Some examples of using the filter are: *`state="PIPELINE\_STATE\_SUCCEEDED" AND display\_name:"my\_pipeline\__"`*`state!="PIPELINE\_STATE\_FAILED" OR display\_name="my\_pipeline"`*`NOT display\_name="my\_pipeline"`*`create\_time>"2021-05-18T00:00:00Z"`*`training\_task\_definition:"_automl\_text\_classification\*"\`

`↳ page_size`

`int`  

The standard list page size.

`↳ page_token`

`string`  

The standard list page token. Typically obtained via [ListTrainingPipelinesResponse.next\_page\_token](/php/docs/reference/cloud-ai-platform/1.6.0/V1.ListTrainingPipelinesResponse#_Google_Cloud_AIPlatform_V1_ListTrainingPipelinesResponse__getNextPageToken__) of the previous [PipelineService.ListTrainingPipelines](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PipelineServiceClient#_Google_Cloud_AIPlatform_V1_Client_PipelineServiceClient__listTrainingPipelines__) call.

`↳ read_mask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Mask specifying which fields to read.

### getParent

Required. The resource name of the Location to list the TrainingPipelines from. Format: `projects/{project}/locations/{location}`

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The resource name of the Location to list the TrainingPipelines from. Format: `projects/{project}/locations/{location}`

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

The standard list filter.

Supported fields:

-   `display_name` supports `=`, `!=` comparisons, and `:` wildcard.
-   `state` supports `=`, `!=` comparisons.
-   `training_task_definition` `=`, `!=` comparisons, and `:` wildcard.
-   `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format.
-   `labels` supports general map functions that is: `labels.key=value` - key:value equality \`labels.key:\* - key existence Some examples of using the filter are:
-   `state="PIPELINE_STATE_SUCCEEDED" AND display_name:"my_pipeline_*"`
-   `state!="PIPELINE_STATE_FAILED" OR display_name="my_pipeline"`
-   `NOT display_name="my_pipeline"`
-   `create_time>"2021-05-18T00:00:00Z"`
-   `training_task_definition:"*automl_text_classification*"`

**Returns**

**Type**

**Description**

`string`

### setFilter

The standard list filter.

Supported fields:

-   `display_name` supports `=`, `!=` comparisons, and `:` wildcard.
-   `state` supports `=`, `!=` comparisons.
-   `training_task_definition` `=`, `!=` comparisons, and `:` wildcard.
-   `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons. `create_time` must be in RFC 3339 format.
-   `labels` supports general map functions that is: `labels.key=value` - key:value equality \`labels.key:\* - key existence Some examples of using the filter are:
-   `state="PIPELINE_STATE_SUCCEEDED" AND display_name:"my_pipeline_*"`
-   `state!="PIPELINE_STATE_FAILED" OR display_name="my_pipeline"`
-   `NOT display_name="my_pipeline"`
-   `create_time>"2021-05-18T00:00:00Z"`
-   `training_task_definition:"*automl_text_classification*"`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPageSize

The standard list page size.

**Returns**

**Type**

**Description**

`int`

### setPageSize

The standard list page size.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getPageToken

The standard list page token.

Typically obtained via [ListTrainingPipelinesResponse.next\_page\_token](/php/docs/reference/cloud-ai-platform/1.6.0/V1.ListTrainingPipelinesResponse#_Google_Cloud_AIPlatform_V1_ListTrainingPipelinesResponse__getNextPageToken__) of the previous [PipelineService.ListTrainingPipelines](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PipelineServiceClient#_Google_Cloud_AIPlatform_V1_Client_PipelineServiceClient__listTrainingPipelines__) call.

**Returns**

**Type**

**Description**

`string`

### setPageToken

The standard list page token.

Typically obtained via [ListTrainingPipelinesResponse.next\_page\_token](/php/docs/reference/cloud-ai-platform/1.6.0/V1.ListTrainingPipelinesResponse#_Google_Cloud_AIPlatform_V1_ListTrainingPipelinesResponse__getNextPageToken__) of the previous [PipelineService.ListTrainingPipelines](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PipelineServiceClient#_Google_Cloud_AIPlatform_V1_Client_PipelineServiceClient__listTrainingPipelines__) call.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getReadMask

Mask specifying which fields to read.

**Returns**

**Type**

**Description**

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)|null`

### hasReadMask

### clearReadMask

### setReadMask

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

### static::build

**Parameter**

**Name**

**Description**

`parent`

`string`  

Required. The resource name of the Location to list the TrainingPipelines from. Format: `projects/{project}/locations/{location}` Please see Google\\Cloud\\AIPlatform\\V1\\PipelineServiceClient::locationName() for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\ListTrainingPipelinesRequest](/php/docs/reference/cloud-ai-platform/1.6.0/V1.ListTrainingPipelinesRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
