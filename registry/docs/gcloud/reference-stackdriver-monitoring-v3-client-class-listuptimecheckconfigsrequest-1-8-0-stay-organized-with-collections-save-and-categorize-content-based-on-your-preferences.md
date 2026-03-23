-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Stackdriver Monitoring V3 Client - Class ListUptimeCheckConfigsRequest (1.8.0) Stay organized with collections Save and categorize content based on your preferences.

2.2.2 (latest) 2.2.1 2.1.2 2.0.1 1.12.1 1.11.1 1.10.3 1.9.0 1.8.0 1.7.1 1.6.0 1.5.1 1.4.0 1.3.2 1.2.2

Reference documentation and code samples for the Stackdriver Monitoring V3 Client class ListUptimeCheckConfigsRequest.

The protocol for the `ListUptimeCheckConfigs` request.

Generated from protobuf message `google.monitoring.v3.ListUptimeCheckConfigsRequest`

## Namespace

Google \\ Cloud \\ Monitoring \\ V3

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

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose Uptime check configurations are listed. The format is: projects/\[PROJECT\_ID\_OR\_NUMBER\]

`↳ filter`

`string`  

If provided, this field specifies the criteria that must be met by uptime checks to be included in the response. For more details, see [Filtering syntax](https://cloud.google.com/monitoring/api/v3/sorting-and-filtering#filter_syntax).

`↳ page_size`

`int`  

The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page\_size is <=0, the server will decide the number of results to be returned.

`↳ page_token`

`string`  

If this field is not empty then it must contain the `nextPageToken` value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call.

### getParent

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose Uptime check configurations are listed. The format is: projects/\[PROJECT\_ID\_OR\_NUMBER\]

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose Uptime check configurations are listed. The format is: projects/\[PROJECT\_ID\_OR\_NUMBER\]

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

If provided, this field specifies the criteria that must be met by uptime checks to be included in the response.

For more details, see [Filtering syntax](https://cloud.google.com/monitoring/api/v3/sorting-and-filtering#filter_syntax).

**Returns**

**Type**

**Description**

`string`

### setFilter

If provided, this field specifies the criteria that must be met by uptime checks to be included in the response.

For more details, see [Filtering syntax](https://cloud.google.com/monitoring/api/v3/sorting-and-filtering#filter_syntax).

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

The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page\_size is <=0, the server will decide the number of results to be returned.

**Returns**

**Type**

**Description**

`int`

### setPageSize

The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page\_size is <=0, the server will decide the number of results to be returned.

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

If this field is not empty then it must contain the `nextPageToken` value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call.

**Returns**

**Type**

**Description**

`string`

### setPageToken

If this field is not empty then it must contain the `nextPageToken` value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call.

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

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose Uptime check configurations are listed. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

**Returns**

**Type**

**Description**

`[Google\Cloud\Monitoring\V3\ListUptimeCheckConfigsRequest](/php/docs/reference/cloud-monitoring/1.8.0/V3.ListUptimeCheckConfigsRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
