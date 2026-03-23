-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataplex V1 Client - Class DeleteEntryTypeRequest (1.2.1) Stay organized with collections Save and categorize content based on your preferences.

1.12.0 (latest) 1.11.0 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.4.0 1.3.0 1.2.1 1.1.1 1.0.1 0.16.1 0.15.1 0.14.0 0.13.0 0.12.0 0.11.1 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.1 0.4.0 0.3.0 0.2.3 0.1.6

Reference documentation and code samples for the Google Cloud Dataplex V1 Client class DeleteEntryTypeRequest.

Delele EntryType Request.

Generated from protobuf message `google.cloud.dataplex.v1.DeleteEntryTypeRequest`

## Namespace

Google \\ Cloud \\ Dataplex \\ V1

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

Required. The resource name of the EntryType: `projects/{project_number}/locations/{location_id}/entryTypes/{entry_type_id}`.

`↳ etag`

`string`  

Optional. If the client provided etag value does not match the current etag value, the DeleteEntryTypeRequest method returns an ABORTED error response.

### getName

Required. The resource name of the EntryType: `projects/{project_number}/locations/{location_id}/entryTypes/{entry_type_id}`.

**Returns**

**Type**

**Description**

`string`

### setName

Required. The resource name of the EntryType: `projects/{project_number}/locations/{location_id}/entryTypes/{entry_type_id}`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getEtag

Optional. If the client provided etag value does not match the current etag value, the DeleteEntryTypeRequest method returns an ABORTED error response.

**Returns**

**Type**

**Description**

`string`

### setEtag

Optional. If the client provided etag value does not match the current etag value, the DeleteEntryTypeRequest method returns an ABORTED error response.

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

`name`

`string`  

Required. The resource name of the EntryType: `projects/{project_number}/locations/{location_id}/entryTypes/{entry_type_id}`. Please see CatalogServiceClient::entryTypeName() for help formatting this field.

**Returns**

**Type**

**Description**

`[DeleteEntryTypeRequest](/php/docs/reference/cloud-dataplex/1.2.1/V1.DeleteEntryTypeRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
