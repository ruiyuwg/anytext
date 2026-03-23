-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Api Keys V2 Client - Class ListKeysRequest (1.1.2) Stay organized with collections Save and categorize content based on your preferences.

1.1.2 (latest) 1.1.1 1.0.5 0.4.5 0.3.3 0.2.2 0.1.7

Reference documentation and code samples for the Google Cloud Api Keys V2 Client class ListKeysRequest.

Request message for `ListKeys` method.

Generated from protobuf message `google.api.apikeys.v2.ListKeysRequest`

## Namespace

Google \\ Cloud \\ ApiKeys \\ V2

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

Required. Lists all API keys associated with this project.

`↳ page_size`

`int`  

Optional. Specifies the maximum number of results to be returned at a time.

`↳ page_token`

`string`  

Optional. Requests a specific page of results.

`↳ show_deleted`

`bool`  

Optional. Indicate that keys deleted in the past 30 days should also be returned.

### getParent

Required. Lists all API keys associated with this project.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. Lists all API keys associated with this project.

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

Optional. Specifies the maximum number of results to be returned at a time.

**Returns**

**Type**

**Description**

`int`

### setPageSize

Optional. Specifies the maximum number of results to be returned at a time.

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

Optional. Requests a specific page of results.

**Returns**

**Type**

**Description**

`string`

### setPageToken

Optional. Requests a specific page of results.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getShowDeleted

Optional. Indicate that keys deleted in the past 30 days should also be returned.

**Returns**

**Type**

**Description**

`bool`

### setShowDeleted

Optional. Indicate that keys deleted in the past 30 days should also be returned.

**Parameter**

**Name**

**Description**

`var`

`bool`  

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

Required. Lists all API keys associated with this project. Please see ApiKeysClient::locationName() for help formatting this field.

**Returns**

**Type**

**Description**

`[ListKeysRequest](/php/docs/reference/cloud-api-keys/latest/V2.ListKeysRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
