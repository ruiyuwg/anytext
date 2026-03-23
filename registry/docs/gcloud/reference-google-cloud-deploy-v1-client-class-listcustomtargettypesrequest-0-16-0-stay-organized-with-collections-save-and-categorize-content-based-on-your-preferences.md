-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Deploy V1 Client - Class ListCustomTargetTypesRequest (0.16.0) Stay organized with collections Save and categorize content based on your preferences.

2.0.0 (latest) 1.6.3 1.5.7 1.4.0 1.3.0 1.2.0 1.1.1 1.0.0 0.19.1 0.18.1 0.17.0 0.16.0 0.15.0 0.14.0 0.13.1 0.12.1 0.11.1 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.4

Reference documentation and code samples for the Google Cloud Deploy V1 Client class ListCustomTargetTypesRequest.

The request object for `ListCustomTargetTypes`.

Generated from protobuf message `google.cloud.deploy.v1.ListCustomTargetTypesRequest`

## Namespace

Google \\ Cloud \\ Deploy \\ V1

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

Required. The parent that owns this collection of custom target types. Format must be `projects/{project_id}/locations/{location_name}`.

`↳ page_size`

`int`  

Optional. The maximum number of `CustomTargetType` objects to return. The service may return fewer than this value. If unspecified, at most 50 `CustomTargetType` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.

`↳ page_token`

`string`  

Optional. A page token, received from a previous `ListCustomTargetTypes` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.

`↳ filter`

`string`  

Optional. Filter custom target types to be returned. See [https://google.aip.dev/160](https://google.aip.dev/160) for more details.

`↳ order_by`

`string`  

Optional. Field to sort by. See [https://google.aip.dev/132#ordering](https://google.aip.dev/132#ordering) for more details.

### getParent

Required. The parent that owns this collection of custom target types.

Format must be `projects/{project_id}/locations/{location_name}`.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The parent that owns this collection of custom target types.

Format must be `projects/{project_id}/locations/{location_name}`.

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

Optional. The maximum number of `CustomTargetType` objects to return. The service may return fewer than this value. If unspecified, at most 50 `CustomTargetType` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.

**Returns**

**Type**

**Description**

`int`

### setPageSize

Optional. The maximum number of `CustomTargetType` objects to return. The service may return fewer than this value. If unspecified, at most 50 `CustomTargetType` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.

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

Optional. A page token, received from a previous `ListCustomTargetTypes` call. Provide this to retrieve the subsequent page.

When paginating, all other provided parameters match the call that provided the page token.

**Returns**

**Type**

**Description**

`string`

### setPageToken

Optional. A page token, received from a previous `ListCustomTargetTypes` call. Provide this to retrieve the subsequent page.

When paginating, all other provided parameters match the call that provided the page token.

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

Optional. Filter custom target types to be returned. See [https://google.aip.dev/160](https://google.aip.dev/160) for more details.

**Returns**

**Type**

**Description**

`string`

### setFilter

Optional. Filter custom target types to be returned. See [https://google.aip.dev/160](https://google.aip.dev/160) for more details.

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

Optional. Field to sort by. See [https://google.aip.dev/132#ordering](https://google.aip.dev/132#ordering) for more details.

**Returns**

**Type**

**Description**

`string`

### setOrderBy

Optional. Field to sort by. See [https://google.aip.dev/132#ordering](https://google.aip.dev/132#ordering) for more details.

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

Required. The parent that owns this collection of custom target types. Format must be `projects/{project_id}/locations/{location_name}`. Please see Google\\Cloud\\Deploy\\V1\\CloudDeployClient::locationName() for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\Deploy\V1\ListCustomTargetTypesRequest](/php/docs/reference/cloud-deploy/0.16.0/V1.ListCustomTargetTypesRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
