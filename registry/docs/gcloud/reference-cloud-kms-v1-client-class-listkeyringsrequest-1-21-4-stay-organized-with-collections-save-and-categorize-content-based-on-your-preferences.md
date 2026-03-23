-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud KMS V1 Client - Class ListKeyRingsRequest (1.21.4) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.2 2.4.0 2.3.1 2.2.0 2.1.6 2.0.0 1.23.0 1.22.1 1.21.4 1.20.3 1.19.0 1.18.1 1.17.0 1.16.4 1.15.3

Reference documentation and code samples for the Cloud KMS V1 Client class ListKeyRingsRequest.

Request message for KeyManagementService.ListKeyRings.

Generated from protobuf message `google.cloud.kms.v1.ListKeyRingsRequest`

## Namespace

Google \\ Cloud \\ Kms \\ V1

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

Required. The resource name of the location associated with the [KeyRings](/php/docs/reference/cloud-kms/1.21.4/V1.KeyRing), in the format `projects/*/locations/*`.

`↳ page_size`

`int`  

Optional. Optional limit on the number of [KeyRings](/php/docs/reference/cloud-kms/1.21.4/V1.KeyRing) to include in the response. Further [KeyRings](/php/docs/reference/cloud-kms/1.21.4/V1.KeyRing) can subsequently be obtained by including the [ListKeyRingsResponse.next\_page\_token](/php/docs/reference/cloud-kms/1.21.4/V1.ListKeyRingsResponse#_Google_Cloud_Kms_V1_ListKeyRingsResponse__getNextPageToken__) in a subsequent request. If unspecified, the server will pick an appropriate default.

`↳ page_token`

`string`  

Optional. Optional pagination token, returned earlier via [ListKeyRingsResponse.next\_page\_token](/php/docs/reference/cloud-kms/1.21.4/V1.ListKeyRingsResponse#_Google_Cloud_Kms_V1_ListKeyRingsResponse__getNextPageToken__).

`↳ filter`

`string`  

Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).

`↳ order_by`

`string`  

Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).

### getParent

Required. The resource name of the location associated with the [KeyRings](/php/docs/reference/cloud-kms/1.21.4/V1.KeyRing), in the format `projects/*/locations/*`.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The resource name of the location associated with the [KeyRings](/php/docs/reference/cloud-kms/1.21.4/V1.KeyRing), in the format `projects/*/locations/*`.

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

Optional. Optional limit on the number of [KeyRings](/php/docs/reference/cloud-kms/1.21.4/V1.KeyRing) to include in the response. Further [KeyRings](/php/docs/reference/cloud-kms/1.21.4/V1.KeyRing) can subsequently be obtained by including the [ListKeyRingsResponse.next\_page\_token](/php/docs/reference/cloud-kms/1.21.4/V1.ListKeyRingsResponse#_Google_Cloud_Kms_V1_ListKeyRingsResponse__getNextPageToken__) in a subsequent request. If unspecified, the server will pick an appropriate default.

**Returns**

**Type**

**Description**

`int`

### setPageSize

Optional. Optional limit on the number of [KeyRings](/php/docs/reference/cloud-kms/1.21.4/V1.KeyRing) to include in the response. Further [KeyRings](/php/docs/reference/cloud-kms/1.21.4/V1.KeyRing) can subsequently be obtained by including the [ListKeyRingsResponse.next\_page\_token](/php/docs/reference/cloud-kms/1.21.4/V1.ListKeyRingsResponse#_Google_Cloud_Kms_V1_ListKeyRingsResponse__getNextPageToken__) in a subsequent request. If unspecified, the server will pick an appropriate default.

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

Optional. Optional pagination token, returned earlier via [ListKeyRingsResponse.next\_page\_token](/php/docs/reference/cloud-kms/1.21.4/V1.ListKeyRingsResponse#_Google_Cloud_Kms_V1_ListKeyRingsResponse__getNextPageToken__).

**Returns**

**Type**

**Description**

`string`

### setPageToken

Optional. Optional pagination token, returned earlier via [ListKeyRingsResponse.next\_page\_token](/php/docs/reference/cloud-kms/1.21.4/V1.ListKeyRingsResponse#_Google_Cloud_Kms_V1_ListKeyRingsResponse__getNextPageToken__).

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

Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).

**Returns**

**Type**

**Description**

`string`

### setFilter

Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getOrderBy

Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).

**Returns**

**Type**

**Description**

`string`

### setOrderBy

Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).

**Parameter**

**Name**

**Description**

`var`

`string`  

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

Required. The resource name of the location associated with the [KeyRings](/php/docs/reference/cloud-kms/1.21.4/V1.KeyRing), in the format `projects/*/locations/*`. Please see Google\\Cloud\\Kms\\V1\\KeyManagementServiceClient::locationName() for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\Kms\V1\ListKeyRingsRequest](/php/docs/reference/cloud-kms/1.21.4/V1.ListKeyRingsRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
