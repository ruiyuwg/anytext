-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google BigQuery Connection V1 Client - Class Connection (1.2.2) Stay organized with collections Save and categorize content based on your preferences.

2.1.3 (latest) 2.1.2 2.0.5 1.5.5 1.4.1 1.3.1 1.2.2 1.1.0 1.0.3

Reference documentation and code samples for the Google BigQuery Connection V1 Client class Connection.

Configuration parameters to establish connection with an external data source, except the credential attributes.

Generated from protobuf message `google.cloud.bigquery.connection.v1.Connection`

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

The resource name of the connection in the form of: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

`↳ friendly_name`

`string`  

User provided display name for the connection.

`↳ description`

`string`  

User provided description.

`↳ cloud_sql`

`[Google\Cloud\BigQuery\Connection\V1\CloudSqlProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.CloudSqlProperties)`  

Cloud SQL properties.

`↳ aws`

`[Google\Cloud\BigQuery\Connection\V1\AwsProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.AwsProperties)`  

Amazon Web Services (AWS) properties.

`↳ azure`

`[Google\Cloud\BigQuery\Connection\V1\AzureProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.AzureProperties)`  

Azure properties.

`↳ cloud_spanner`

`[Google\Cloud\BigQuery\Connection\V1\CloudSpannerProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.CloudSpannerProperties)`  

Cloud Spanner properties.

`↳ cloud_resource`

`[Google\Cloud\BigQuery\Connection\V1\CloudResourceProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.CloudResourceProperties)`  

Cloud Resource properties.

`↳ spark`

`[Google\Cloud\BigQuery\Connection\V1\SparkProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.SparkProperties)`  

Spark properties.

`↳ creation_time`

`int|string`  

Output only. The creation timestamp of the connection.

`↳ last_modified_time`

`int|string`  

Output only. The last update timestamp of the connection.

`↳ has_credential`

`bool`  

Output only. True, if credential is configured for this connection.

### getName

The resource name of the connection in the form of: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

**Returns**

**Type**

**Description**

`string`

### setName

The resource name of the connection in the form of: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getFriendlyName

User provided display name for the connection.

**Returns**

**Type**

**Description**

`string`

### setFriendlyName

User provided display name for the connection.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDescription

User provided description.

**Returns**

**Type**

**Description**

`string`

### setDescription

User provided description.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCloudSql

Cloud SQL properties.

**Returns**

**Type**

**Description**

`[Google\Cloud\BigQuery\Connection\V1\CloudSqlProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.CloudSqlProperties)|null`

### hasCloudSql

### setCloudSql

Cloud SQL properties.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\BigQuery\Connection\V1\CloudSqlProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.CloudSqlProperties)`  

**Returns**

**Type**

**Description**

`$this`

### getAws

Amazon Web Services (AWS) properties.

**Returns**

**Type**

**Description**

`[Google\Cloud\BigQuery\Connection\V1\AwsProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.AwsProperties)|null`

### hasAws

### setAws

Amazon Web Services (AWS) properties.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\BigQuery\Connection\V1\AwsProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.AwsProperties)`  

**Returns**

**Type**

**Description**

`$this`

### getAzure

Azure properties.

**Returns**

**Type**

**Description**

`[Google\Cloud\BigQuery\Connection\V1\AzureProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.AzureProperties)|null`

### hasAzure

### setAzure

Azure properties.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\BigQuery\Connection\V1\AzureProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.AzureProperties)`  

**Returns**

**Type**

**Description**

`$this`

### getCloudSpanner

Cloud Spanner properties.

**Returns**

**Type**

**Description**

`[Google\Cloud\BigQuery\Connection\V1\CloudSpannerProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.CloudSpannerProperties)|null`

### hasCloudSpanner

### setCloudSpanner

Cloud Spanner properties.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\BigQuery\Connection\V1\CloudSpannerProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.CloudSpannerProperties)`  

**Returns**

**Type**

**Description**

`$this`

### getCloudResource

Cloud Resource properties.

**Returns**

**Type**

**Description**

`[Google\Cloud\BigQuery\Connection\V1\CloudResourceProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.CloudResourceProperties)|null`

### hasCloudResource

### setCloudResource

Cloud Resource properties.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\BigQuery\Connection\V1\CloudResourceProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.CloudResourceProperties)`  

**Returns**

**Type**

**Description**

`$this`

### getSpark

Spark properties.

**Returns**

**Type**

**Description**

`[Google\Cloud\BigQuery\Connection\V1\SparkProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.SparkProperties)|null`

### hasSpark

### setSpark

Spark properties.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\BigQuery\Connection\V1\SparkProperties](/php/docs/reference/cloud-bigquery-connection/1.2.2/V1.SparkProperties)`  

**Returns**

**Type**

**Description**

`$this`

### getCreationTime

Output only. The creation timestamp of the connection.

**Returns**

**Type**

**Description**

`int|string`

### setCreationTime

Output only. The creation timestamp of the connection.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getLastModifiedTime

Output only. The last update timestamp of the connection.

**Returns**

**Type**

**Description**

`int|string`

### setLastModifiedTime

Output only. The last update timestamp of the connection.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getHasCredential

Output only. True, if credential is configured for this connection.

**Returns**

**Type**

**Description**

`bool`

### setHasCredential

Output only. True, if credential is configured for this connection.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getProperties

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
