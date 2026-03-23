-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud BigQuery Migration V2 Client - Class ResourceErrorDetail (0.4.5) Stay organized with collections Save and categorize content based on your preferences.

1.2.3 (latest) 1.2.2 1.1.5 1.0.0 0.4.5 0.3.3 0.2.2 0.1.4

Reference documentation and code samples for the Google Cloud BigQuery Migration V2 Client class ResourceErrorDetail.

Provides details for errors and the corresponding resources.

Generated from protobuf message `google.cloud.bigquery.migration.v2.ResourceErrorDetail`

## Namespace

Google \\ Cloud \\ BigQuery \\ Migration \\ V2

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ resource_info`

`[Google\Rpc\ResourceInfo](https://googleapis.github.io/common-protos-php#Google/Rpc/ResourceInfo)`  

Required. Information about the resource where the error is located.

`↳ error_details`

`array<[Google\Cloud\BigQuery\Migration\V2\ErrorDetail](/php/docs/reference/cloud-bigquery-migration/0.4.5/V2.ErrorDetail)>`  

Required. The error details for the resource.

`↳ error_count`

`int`  

Required. How many errors there are in total for the resource. Truncation can be indicated by having an `error_count` that is higher than the size of `error_details`.

### getResourceInfo

Required. Information about the resource where the error is located.

**Returns**

**Type**

**Description**

`[Google\Rpc\ResourceInfo](https://googleapis.github.io/common-protos-php#Google/Rpc/ResourceInfo)|null`

### hasResourceInfo

### clearResourceInfo

### setResourceInfo

Required. Information about the resource where the error is located.

**Parameter**

**Name**

**Description**

`var`

`[Google\Rpc\ResourceInfo](https://googleapis.github.io/common-protos-php#Google/Rpc/ResourceInfo)`  

**Returns**

**Type**

**Description**

`$this`

### getErrorDetails

Required. The error details for the resource.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setErrorDetails

Required. The error details for the resource.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\BigQuery\Migration\V2\ErrorDetail](/php/docs/reference/cloud-bigquery-migration/0.4.5/V2.ErrorDetail)>`  

**Returns**

**Type**

**Description**

`$this`

### getErrorCount

Required. How many errors there are in total for the resource. Truncation can be indicated by having an `error_count` that is higher than the size of `error_details`.

**Returns**

**Type**

**Description**

`int`

### setErrorCount

Required. How many errors there are in total for the resource. Truncation can be indicated by having an `error_count` that is higher than the size of `error_details`.

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

Last updated 2026-03-19 UTC.
