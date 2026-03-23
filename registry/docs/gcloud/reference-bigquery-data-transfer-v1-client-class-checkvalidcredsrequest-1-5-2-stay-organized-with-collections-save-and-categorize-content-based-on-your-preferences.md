-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# BigQuery Data Transfer V1 Client - Class CheckValidCredsRequest (1.5.2) Stay organized with collections Save and categorize content based on your preferences.

2.2.4 (latest) 2.2.3 2.1.5 2.0.0 1.8.6 1.7.0 1.6.2 1.5.2 1.4.5 1.3.8

Reference documentation and code samples for the BigQuery Data Transfer V1 Client class CheckValidCredsRequest.

A request to determine whether the user has valid credentials. This method is used to limit the number of OAuth popups in the user interface. The user id is inferred from the API call context.

If the data source has the Google+ authorization type, this method returns false, as it cannot be determined whether the credentials are already valid merely based on the user id.

Generated from protobuf message `google.cloud.bigquery.datatransfer.v1.CheckValidCredsRequest`

## Namespace

Google \\ Cloud \\ BigQuery \\ DataTransfer \\ V1

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

Required. The data source in the form: `projects/{project_id}/dataSources/{data_source_id}` or `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`.

### getName

Required. The data source in the form: `projects/{project_id}/dataSources/{data_source_id}` or `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`.

**Returns**

**Type**

**Description**

`string`

### setName

Required. The data source in the form: `projects/{project_id}/dataSources/{data_source_id}` or `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`.

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

Required. The data source in the form: `projects/{project_id}/dataSources/{data_source_id}` or `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`. Please see [Google\\Cloud\\BigQuery\\DataTransfer\\V1\\DataTransferServiceClient::dataSourceName()](/php/docs/reference/cloud-bigquerydatatransfer/1.5.2/V1.DataTransferServiceClient#_Google_Cloud_BigQuery_DataTransfer_V1_DataTransferServiceClient__dataSourceName__) for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\BigQuery\DataTransfer\V1\CheckValidCredsRequest](/php/docs/reference/cloud-bigquerydatatransfer/1.5.2/V1.CheckValidCredsRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
