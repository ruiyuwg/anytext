-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class SearchDataItemsRequest (1.4.0) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class SearchDataItemsRequest.

Request message for [DatasetService.SearchDataItems](/php/docs/reference/cloud-ai-platform/1.4.0/V1.Client.DatasetServiceClient#_Google_Cloud_AIPlatform_V1_Client_DatasetServiceClient__searchDataItems__).

Generated from protobuf message `google.cloud.aiplatform.v1.SearchDataItemsRequest`

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

`↳ order_by_data_item`

`string`  

A comma-separated list of data item fields to order by, sorted in ascending order. Use "desc" after a field name for descending.

`↳ order_by_annotation`

`[Google\Cloud\AIPlatform\V1\SearchDataItemsRequest\OrderByAnnotation](/php/docs/reference/cloud-ai-platform/1.4.0/V1.SearchDataItemsRequest.OrderByAnnotation)`  

Expression that allows ranking results based on annotation's property.

`↳ dataset`

`string`  

Required. The resource name of the Dataset from which to search DataItems. Format: `projects/{project}/locations/{location}/datasets/{dataset}`

`↳ saved_query`

`string`  

The resource name of a SavedQuery(annotation set in UI). Format: `projects/{project}/locations/{location}/datasets/{dataset}/savedQueries/{saved_query}` All of the search will be done in the context of this SavedQuery.

`↳ data_labeling_job`

`string`  

The resource name of a DataLabelingJob. Format: `projects/{project}/locations/{location}/dataLabelingJobs/{data_labeling_job}` If this field is set, all of the search will be done in the context of this DataLabelingJob.

`↳ data_item_filter`

`string`  

An expression for filtering the DataItem that will be returned. \* `data_item_id` - for = or !=. \* `labeled` - for = or !=. \* `has_annotation(ANNOTATION_SPEC_ID)` - true only for DataItem that have at least one annotation with annotation\_spec\_id = `ANNOTATION_SPEC_ID` in the context of SavedQuery or DataLabelingJob. For example: \* `data_item=1` \* `has_annotation(5)`

`↳ annotations_filter`

`string`  

An expression for filtering the Annotations that will be returned per DataItem. \* `annotation_spec_id` - for = or !=.

`↳ annotation_filters`

`array`  

An expression that specifies what Annotations will be returned per DataItem. Annotations satisfied either of the conditions will be returned. \* `annotation_spec_id` - for = or !=. Must specify `saved_query_id=` - saved query id that annotations should belong to.

`↳ field_mask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Mask specifying which fields of [DataItemView](/php/docs/reference/cloud-ai-platform/1.4.0/V1.DataItemView) to read.

`↳ annotations_limit`

`int`  

If set, only up to this many of Annotations will be returned per DataItemView. The maximum value is 1000. If not set, the maximum value will be used.

`↳ page_size`

`int`  

Requested page size. Server may return fewer results than requested. Default and maximum page size is 100.

`↳ order_by`

`string`  

A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending.

`↳ page_token`

`string`  

A token identifying a page of results for the server to return Typically obtained via [SearchDataItemsResponse.next\_page\_token](/php/docs/reference/cloud-ai-platform/1.4.0/V1.SearchDataItemsResponse#_Google_Cloud_AIPlatform_V1_SearchDataItemsResponse__getNextPageToken__) of the previous [DatasetService.SearchDataItems](/php/docs/reference/cloud-ai-platform/1.4.0/V1.Client.DatasetServiceClient#_Google_Cloud_AIPlatform_V1_Client_DatasetServiceClient__searchDataItems__) call.

### getOrderByDataItem

A comma-separated list of data item fields to order by, sorted in ascending order. Use "desc" after a field name for descending.

**Returns**

**Type**

**Description**

`string`

### hasOrderByDataItem

### setOrderByDataItem

A comma-separated list of data item fields to order by, sorted in ascending order. Use "desc" after a field name for descending.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getOrderByAnnotation

Expression that allows ranking results based on annotation's property.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\SearchDataItemsRequest\OrderByAnnotation](/php/docs/reference/cloud-ai-platform/1.4.0/V1.SearchDataItemsRequest.OrderByAnnotation)|null`

### hasOrderByAnnotation

### setOrderByAnnotation

Expression that allows ranking results based on annotation's property.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\SearchDataItemsRequest\OrderByAnnotation](/php/docs/reference/cloud-ai-platform/1.4.0/V1.SearchDataItemsRequest.OrderByAnnotation)`  

**Returns**

**Type**

**Description**

`$this`

### getDataset

Required. The resource name of the Dataset from which to search DataItems.

Format: `projects/{project}/locations/{location}/datasets/{dataset}`

**Returns**

**Type**

**Description**

`string`

### setDataset

Required. The resource name of the Dataset from which to search DataItems.

Format: `projects/{project}/locations/{location}/datasets/{dataset}`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSavedQuery

The resource name of a SavedQuery(annotation set in UI).

Format: `projects/{project}/locations/{location}/datasets/{dataset}/savedQueries/{saved_query}` All of the search will be done in the context of this SavedQuery.

**Returns**

**Type**

**Description**

`string`

### setSavedQuery

The resource name of a SavedQuery(annotation set in UI).

Format: `projects/{project}/locations/{location}/datasets/{dataset}/savedQueries/{saved_query}` All of the search will be done in the context of this SavedQuery.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDataLabelingJob

The resource name of a DataLabelingJob.

Format: `projects/{project}/locations/{location}/dataLabelingJobs/{data_labeling_job}` If this field is set, all of the search will be done in the context of this DataLabelingJob.

**Returns**

**Type**

**Description**

`string`

### setDataLabelingJob

The resource name of a DataLabelingJob.

Format: `projects/{project}/locations/{location}/dataLabelingJobs/{data_labeling_job}` If this field is set, all of the search will be done in the context of this DataLabelingJob.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDataItemFilter

An expression for filtering the DataItem that will be returned.

-   `data_item_id` - for = or !=.
    -   `labeled` - for = or !=.
    -   `has_annotation(ANNOTATION_SPEC_ID)` - true only for DataItem that have at least one annotation with annotation\_spec\_id = `ANNOTATION_SPEC_ID` in the context of SavedQuery or DataLabelingJob. For example:
-   `data_item=1`
-   `has_annotation(5)`

**Returns**

**Type**

**Description**

`string`

### setDataItemFilter

An expression for filtering the DataItem that will be returned.

-   `data_item_id` - for = or !=.
    -   `labeled` - for = or !=.
    -   `has_annotation(ANNOTATION_SPEC_ID)` - true only for DataItem that have at least one annotation with annotation\_spec\_id = `ANNOTATION_SPEC_ID` in the context of SavedQuery or DataLabelingJob. For example:
-   `data_item=1`
-   `has_annotation(5)`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAnnotationsFilter

An expression for filtering the Annotations that will be returned per DataItem.

-   `annotation_spec_id` - for = or !=.

**Returns**

**Type**

**Description**

`string`

### setAnnotationsFilter

An expression for filtering the Annotations that will be returned per DataItem.

-   `annotation_spec_id` - for = or !=.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAnnotationFilters

An expression that specifies what Annotations will be returned per DataItem. Annotations satisfied either of the conditions will be returned.

-   `annotation_spec_id` - for = or !=. Must specify `saved_query_id=` - saved query id that annotations should belong to.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setAnnotationFilters

An expression that specifies what Annotations will be returned per DataItem. Annotations satisfied either of the conditions will be returned.

-   `annotation_spec_id` - for = or !=. Must specify `saved_query_id=` - saved query id that annotations should belong to.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getFieldMask

Mask specifying which fields of [DataItemView](/php/docs/reference/cloud-ai-platform/1.4.0/V1.DataItemView) to read.

**Returns**

**Type**

**Description**

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)|null`

### hasFieldMask

### clearFieldMask

### setFieldMask

Mask specifying which fields of [DataItemView](/php/docs/reference/cloud-ai-platform/1.4.0/V1.DataItemView) to read.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

**Returns**

**Type**

**Description**

`$this`

### getAnnotationsLimit

If set, only up to this many of Annotations will be returned per DataItemView. The maximum value is 1000. If not set, the maximum value will be used.

**Returns**

**Type**

**Description**

`int`

### setAnnotationsLimit

If set, only up to this many of Annotations will be returned per DataItemView. The maximum value is 1000. If not set, the maximum value will be used.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getPageSize

Requested page size. Server may return fewer results than requested.

Default and maximum page size is 100.

**Returns**

**Type**

**Description**

`int`

### setPageSize

Requested page size. Server may return fewer results than requested.

Default and maximum page size is 100.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getOrderBy

A comma-separated list of fields to order by, sorted in ascending order.

Use "desc" after a field name for descending.

**Returns**

**Type**

**Description**

`string`

### setOrderBy

A comma-separated list of fields to order by, sorted in ascending order.

Use "desc" after a field name for descending.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPageToken

A token identifying a page of results for the server to return Typically obtained via [SearchDataItemsResponse.next\_page\_token](/php/docs/reference/cloud-ai-platform/1.4.0/V1.SearchDataItemsResponse#_Google_Cloud_AIPlatform_V1_SearchDataItemsResponse__getNextPageToken__) of the previous [DatasetService.SearchDataItems](/php/docs/reference/cloud-ai-platform/1.4.0/V1.Client.DatasetServiceClient#_Google_Cloud_AIPlatform_V1_Client_DatasetServiceClient__searchDataItems__) call.

**Returns**

**Type**

**Description**

`string`

### setPageToken

A token identifying a page of results for the server to return Typically obtained via [SearchDataItemsResponse.next\_page\_token](/php/docs/reference/cloud-ai-platform/1.4.0/V1.SearchDataItemsResponse#_Google_Cloud_AIPlatform_V1_SearchDataItemsResponse__getNextPageToken__) of the previous [DatasetService.SearchDataItems](/php/docs/reference/cloud-ai-platform/1.4.0/V1.Client.DatasetServiceClient#_Google_Cloud_AIPlatform_V1_Client_DatasetServiceClient__searchDataItems__) call.

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

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
