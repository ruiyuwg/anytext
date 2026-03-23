-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Run V2 Client - Class ListTasksRequest (0.8.0) Stay organized with collections Save and categorize content based on your preferences.

1.12.1 (latest) 1.12.0 1.11.0 1.10.1 1.9.0 1.8.0 1.7.0 1.6.0 1.5.2 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.9.3 0.8.0 0.7.2 0.6.0 0.5.2 0.4.0 0.3.4

Reference documentation and code samples for the Google Cloud Run V2 Client class ListTasksRequest.

Request message for retrieving a list of Tasks.

Generated from protobuf message `google.cloud.run.v2.ListTasksRequest`

## Namespace

Google \\ Cloud \\ Run \\ V2

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

Required. The Execution from which the Tasks should be listed. To list all Tasks across Executions of a Job, use "-" instead of Execution name. To list all Tasks across Jobs, use "-" instead of Job name. Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution}

`↳ page_size`

`int`  

Maximum number of Tasks to return in this call.

`↳ page_token`

`string`  

A page token received from a previous call to ListTasks. All other parameters must match.

`↳ show_deleted`

`bool`  

If true, returns deleted (but unexpired) resources along with active ones.

### getParent

Required. The Execution from which the Tasks should be listed.

To list all Tasks across Executions of a Job, use "-" instead of Execution name. To list all Tasks across Jobs, use "-" instead of Job name. Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution}

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The Execution from which the Tasks should be listed.

To list all Tasks across Executions of a Job, use "-" instead of Execution name. To list all Tasks across Jobs, use "-" instead of Job name. Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution}

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

Maximum number of Tasks to return in this call.

**Returns**

**Type**

**Description**

`int`

### setPageSize

Maximum number of Tasks to return in this call.

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

A page token received from a previous call to ListTasks.

All other parameters must match.

**Returns**

**Type**

**Description**

`string`

### setPageToken

A page token received from a previous call to ListTasks.

All other parameters must match.

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

If true, returns deleted (but unexpired) resources along with active ones.

**Returns**

**Type**

**Description**

`bool`

### setShowDeleted

If true, returns deleted (but unexpired) resources along with active ones.

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

Required. The Execution from which the Tasks should be listed. To list all Tasks across Executions of a Job, use "-" instead of Execution name. To list all Tasks across Jobs, use "-" instead of Job name. Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution} Please see Google\\Cloud\\Run\\V2\\TasksClient::executionName() for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\Run\V2\ListTasksRequest](/php/docs/reference/cloud-run/0.8.0/V2.ListTasksRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
