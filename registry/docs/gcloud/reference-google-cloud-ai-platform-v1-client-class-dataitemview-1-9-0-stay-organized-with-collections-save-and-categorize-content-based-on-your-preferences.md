-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class DataItemView (1.9.0) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class DataItemView.

A container for a single DataItem and Annotations on it.

Generated from protobuf message `google.cloud.aiplatform.v1.DataItemView`

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

`↳ data_item`

`[Google\Cloud\AIPlatform\V1\DataItem](/php/docs/reference/cloud-ai-platform/1.9.0/V1.DataItem)`  

The DataItem.

`↳ annotations`

`array<[Google\Cloud\AIPlatform\V1\Annotation](/php/docs/reference/cloud-ai-platform/1.9.0/V1.Annotation)>`  

The Annotations on the DataItem. If too many Annotations should be returned for the DataItem, this field will be truncated per annotations\_limit in request. If it was, then the has\_truncated\_annotations will be set to true.

`↳ has_truncated_annotations`

`bool`  

True if and only if the Annotations field has been truncated. It happens if more Annotations for this DataItem met the request's annotation\_filter than are allowed to be returned by annotations\_limit. Note that if Annotations field is not being returned due to field mask, then this field will not be set to true no matter how many Annotations are there.

### getDataItem

The DataItem.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\DataItem](/php/docs/reference/cloud-ai-platform/1.9.0/V1.DataItem)|null`

### hasDataItem

### clearDataItem

### setDataItem

The DataItem.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\DataItem](/php/docs/reference/cloud-ai-platform/1.9.0/V1.DataItem)`  

**Returns**

**Type**

**Description**

`$this`

### getAnnotations

The Annotations on the DataItem. If too many Annotations should be returned for the DataItem, this field will be truncated per annotations\_limit in request. If it was, then the has\_truncated\_annotations will be set to true.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setAnnotations

The Annotations on the DataItem. If too many Annotations should be returned for the DataItem, this field will be truncated per annotations\_limit in request. If it was, then the has\_truncated\_annotations will be set to true.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\AIPlatform\V1\Annotation](/php/docs/reference/cloud-ai-platform/1.9.0/V1.Annotation)>`  

**Returns**

**Type**

**Description**

`$this`

### getHasTruncatedAnnotations

True if and only if the Annotations field has been truncated. It happens if more Annotations for this DataItem met the request's annotation\_filter than are allowed to be returned by annotations\_limit.

Note that if Annotations field is not being returned due to field mask, then this field will not be set to true no matter how many Annotations are there.

**Returns**

**Type**

**Description**

`bool`

### setHasTruncatedAnnotations

True if and only if the Annotations field has been truncated. It happens if more Annotations for this DataItem met the request's annotation\_filter than are allowed to be returned by annotations\_limit.

Note that if Annotations field is not being returned due to field mask, then this field will not be set to true no matter how many Annotations are there.

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
