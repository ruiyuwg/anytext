-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google BigQuery Connection V1 Client - Class SparkProperties (1.3.1) Stay organized with collections Save and categorize content based on your preferences.

2.1.3 (latest) 2.1.2 2.0.5 1.5.5 1.4.1 1.3.1 1.2.2 1.1.0 1.0.3

Reference documentation and code samples for the Google BigQuery Connection V1 Client class SparkProperties.

Container for connection properties to execute stored procedures for Apache Spark.

Generated from protobuf message `google.cloud.bigquery.connection.v1.SparkProperties`

## Namespace

Google \\ Cloud \\ BigQuery \\ Connection \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ service_account_id`

`string`  

Output only. The account ID of the service created for the purpose of this connection. The service account does not have any permissions associated with it when it is created. After creation, customers delegate permissions to the service account. When the connection is used in the context of a stored procedure for Apache Spark in BigQuery, the service account will be used to connect to the desired resources in Google Cloud. The account ID is in the form of: bqcx-

`↳ metastore_service_config`

`[Google\Cloud\BigQuery\Connection\V1\MetastoreServiceConfig](/php/docs/reference/cloud-bigquery-connection/1.3.1/V1.MetastoreServiceConfig)`  

Optional. Dataproc Metastore Service configuration for the connection.

`↳ spark_history_server_config`

`[Google\Cloud\BigQuery\Connection\V1\SparkHistoryServerConfig](/php/docs/reference/cloud-bigquery-connection/1.3.1/V1.SparkHistoryServerConfig)`  

Optional. Spark History Server configuration for the connection.

### getServiceAccountId

Output only. The account ID of the service created for the purpose of this connection.

The service account does not have any permissions associated with it when it is created. After creation, customers delegate permissions to the service account. When the connection is used in the context of a stored procedure for Apache Spark in BigQuery, the service account will be used to connect to the desired resources in Google Cloud. The account ID is in the form of: bqcx-

**Returns**

**Type**

**Description**

`string`

### setServiceAccountId

Output only. The account ID of the service created for the purpose of this connection.

The service account does not have any permissions associated with it when it is created. After creation, customers delegate permissions to the service account. When the connection is used in the context of a stored procedure for Apache Spark in BigQuery, the service account will be used to connect to the desired resources in Google Cloud. The account ID is in the form of: bqcx-

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getMetastoreServiceConfig

Optional. Dataproc Metastore Service configuration for the connection.

**Returns**

**Type**

**Description**

`[Google\Cloud\BigQuery\Connection\V1\MetastoreServiceConfig](/php/docs/reference/cloud-bigquery-connection/1.3.1/V1.MetastoreServiceConfig)|null`

### hasMetastoreServiceConfig

### clearMetastoreServiceConfig

### setMetastoreServiceConfig

Optional. Dataproc Metastore Service configuration for the connection.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\BigQuery\Connection\V1\MetastoreServiceConfig](/php/docs/reference/cloud-bigquery-connection/1.3.1/V1.MetastoreServiceConfig)`  

**Returns**

**Type**

**Description**

`$this`

### getSparkHistoryServerConfig

Optional. Spark History Server configuration for the connection.

**Returns**

**Type**

**Description**

`[Google\Cloud\BigQuery\Connection\V1\SparkHistoryServerConfig](/php/docs/reference/cloud-bigquery-connection/1.3.1/V1.SparkHistoryServerConfig)|null`

### hasSparkHistoryServerConfig

### clearSparkHistoryServerConfig

### setSparkHistoryServerConfig

Optional. Spark History Server configuration for the connection.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\BigQuery\Connection\V1\SparkHistoryServerConfig](/php/docs/reference/cloud-bigquery-connection/1.3.1/V1.SparkHistoryServerConfig)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
