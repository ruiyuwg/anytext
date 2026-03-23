This topic describes how to use the Elasticsearch connector.

## Background information

[Alibaba Cloud Elasticsearch](/help/en/es/product-overview/what-is-alibaba-cloud-elasticsearch#test) is compatible with open source Elasticsearch features, such as Security, Machine Learning, Graph, and application performance management (APM). It is suitable for data analytics, data search, and other scenarios, and provides enterprise-level services such as access control, security monitoring and alerting, and automatic report generation.

The Elasticsearch connector supports the following:

**Category**

**Description**

Supported types

Source table, dimension table, and sink table

Running mode

Batch and streaming modes

Data format

JSON

Specific monitoring metrics

-   Source table
    
    -   pendingRecords
        
    -   numRecordsIn
        
    -   numRecordsInPerSecond
        
    -   numBytesIn
        
    -   numBytesInPerSecond
        
-   Dimension table
    
    None
    
-   Sink table (for Ververica Runtime (VVR) 6.0.6 or later)
    
    -   numRecordsOut
        
    -   numRecordsOutPerSecond
        

**Note**

For more information about the metrics, see [Metrics](/help/en/flink/realtime-flink/user-guide/metrics).

API type

DataStream and SQL

Data update or deletion in a sink table

Yes

## Prerequisites

-   An Elasticsearch index is created. For more information, see [Create an index](/help/en/es/user-guide/getting-started#section-paz-wd6-qlv).
    
-   A public or internal-facing access whitelist is configured for the Elasticsearch instance. For more information, see [Configure a public or internal-facing access whitelist for an instance](/help/en/es/user-guide/configure-a-public-or-private-ip-address-whitelist-for-an-elasticsearch-cluster#task-2458385).
    

## Limits

-   Source and dimension tables support Elasticsearch 6.8.x or later, but not 8.x or later.
    
-   Sink tables support only Elasticsearch 6.x, 7.x, and 8.x.
    
-   Only full Elasticsearch source tables are supported. Incremental source tables are not supported.
    

## Syntax

-   Source table
    
    ```
    CREATE TABLE elasticsearch_source(
      name STRING,
      location STRING,
      value FLOAT
    ) WITH (
      'connector' ='elasticsearch',
      'endPoint' = '<yourEndPoint>',
      'indexName' = '<yourIndexName>'
    );
    ```
    
-   Dimension table
    
    ```
    CREATE TABLE es_dim(
      field1 STRING, -- This field is used as a key for a JOIN operation and must be of the STRING type.
      field2 FLOAT,
      field3 BIGINT,
      PRIMARY KEY (field1) NOT ENFORCED
    ) WITH (
      'connector' ='elasticsearch',
      'endPoint' = '<yourEndPoint>',
      'indexName' = '<yourIndexName>'
    );
    ```
    
    **Note**
    
    -   If you specify a primary key, you can use only one key field for the JOIN operation on the dimension table. This key must be the document ID in the corresponding Elasticsearch index.
        
    -   If you do not specify a primary key, you can use one or more key fields for the JOIN operation on the dimension table. These keys must be fields in the document of the corresponding Elasticsearch index.
        
    -   For the String type, the .keyword suffix is added to field names by default to ensure compatibility. If this prevents matching with Text fields in Elasticsearch, you can set the ignoreKeywordSuffix parameter to true.
        
    
-   Sink table
    
    ```
    CREATE TABLE es_sink(
      user_id   STRING,
      user_name   STRING,
      uv BIGINT,
      pv BIGINT,
      PRIMARY KEY (user_id) NOT ENFORCED
    ) WITH (
      'connector' = 'elasticsearch-7', -- If you use Elasticsearch 6.x, set this parameter to elasticsearch-6.
      'hosts' = '<yourHosts>',
      'index' = '<yourIndex>'
    );
    ```
    
    **Note**
    
    -   An Elasticsearch sink table works in either upsert or append mode, depending on whether a primary key is defined.
        
        -   If a primary key is defined, it must be the document ID. The Elasticsearch sink table works in upsert mode, which can process UPDATE and DELETE messages.
            
        -   If no primary key is defined, Elasticsearch automatically generates a random document ID. The Elasticsearch sink table works in append mode, which can only consume INSERT messages.
            
    -   Some data types, such as BYTES, ROW, ARRAY, and MAP, do not have a corresponding string representation. Therefore, fields of these types cannot be used as primary key fields.
        
    -   The fields in the DDL statement correspond to the fields in the Elasticsearch document. You cannot write metadata, such as document IDs, to the Elasticsearch sink table because this metadata is maintained by the Elasticsearch instance.
        
    

## WITH parameters

### **Source table**

**Parameter**

**Description**

**Data type**

**Required**

**Default value**

**Notes**

connector

The type of the source table.

String

Yes

None

The static field is Elasticsearch.

endPoint

The server address.

String

Yes

None

Example: `http://127.0.0.1:XXXX`.

indexName

The index name.

String

Yes

None

None.

accessId

The username for the Elasticsearch instance.

String

No

None

The default value is empty, which means that authentication is not performed. If you specify accessId, you must also specify a non-empty accessKey.

**Important**

To prevent your username and password from being leaked, use variables. For more information, see [Project variables](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb).

accessKey

The password for the Elasticsearch instance.

String

No

None

typeNames

The type name.

String

No

\_doc

Do not set this parameter for Elasticsearch 7.0 or later.

batchSize

The maximum number of documents to get from the Elasticsearch cluster for each scroll request.

Int

No

2000

None.

keepScrollAliveSecs

The maximum time to keep the scroll context alive.

Int

No

3600

The unit is seconds.

### **Sink table**

**Parameter**

**Description**

**Data type**

**Required**

**Default value**

**Notes**

connector

The type of the sink table.

String

Yes

None

Valid values are `elasticsearch-6`, `elasticsearch-7`, and `elasticsearch-8`.

**Note**

You can set this parameter to `elasticsearch-8` only in VVR 8.0.5 or later.

hosts

The server address.

String

Yes

None

Example: `127.0.0.1:XXXX`.

index

The index name.

String

Yes

None

The Elasticsearch sink table supports both static and dynamic indexes. Note the following points when you use static and dynamic indexes:

-   If you use a static index, the value of the index parameter must be a plain string, such as `myusers`. All records are written to the `myusers` index.
    
-   If you use a dynamic index, you can use `{field_name}` to reference a field value in a record to dynamically generate the destination index. You can also use `{field_name|date_format_string}` to convert field values of the TIMESTAMP, DATE, and TIME types to the format specified by `date_format_string`. The `date_format_string` is compatible with Java's DateTimeFormatter. For example, if you set the parameter to `myusers-{log_ts|yyyy-MM-dd}`, a record with a log\_ts field value of `2020-03-27 12:25:55` is written to the `myusers-2020-03-27` index.
    

document-type

The document type.

String

-   elasticsearch-6: Required
    
-   elasticsearch-7: Not supported
    

None

If the connector parameter is set to `elasticsearch-6`, the value of this parameter must be the same as the value of the type parameter on the Elasticsearch side.

username

The username.

String

No

Empty

The default value is empty, which means that authentication is not performed. If you specify username, you must also specify a non-empty password.

**Important**

To prevent your username and password from being leaked, use variables. For more information, see [Project variables](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb).

password

The password.

String

No

Empty

document-id.key-delimiter

The separator for the document ID.

String

No

\_

In an Elasticsearch sink table, the primary key is used to calculate the Elasticsearch document ID. The Elasticsearch sink table generates a document ID string for each row by connecting all primary key fields in the order defined in the DDL, using the key separator specified by **document-id.key-delimiter**.

**Note**

A document ID is a string of up to 512 bytes that does not contain spaces.

failure-handler

The fault handling policy for failed Elasticsearch requests.

String

No

fail

The following policies are available:

-   fail (default): The job fails if a request fails.
    
-   ignore: Ignores the failure and deletes the request.
    
-   retry-rejected: Re-adds requests that failed because the queue capacity was full.
    
-   custom class name: Use a subclass of ActionRequestFailureHandler for fault handling.
    

sink.flush-on-checkpoint

Specifies whether to perform a flush operation at checkpoint.

Boolean

No

true

-   true: Default value.
    
-   false: If you disable this feature, the connector does not wait to confirm that all pending requests are complete during a checkpoint. Therefore, the connector does not provide at-least-once guarantees for requests.
    

sink.bulk-flush.backoff.strategy

If a flush operation fails due to a temporary request error, set sink.bulk-flush.backoff.strategy to specify a retry policy.

Enum

No

DISABLED

-   DISABLED (default): Does not perform a retry. The operation fails after the first request error.
    
-   CONSTANT: Constant backoff. The wait time between retries is the same.
    
-   EXPONENTIAL: Exponential backoff. The wait time between retries increases exponentially.
    

sink.bulk-flush.backoff.max-retries

The maximum number of backoff retries.

Int

No

None

None.

sink.bulk-flush.backoff.delay

The delay between each backoff attempt.

Duration

No

None

-   For the CONSTANT backoff policy, this value is the delay between each retry.
    
-   For the EXPONENTIAL backoff policy, this value is the initial baseline delay.
    

sink.bulk-flush.max-actions

The maximum number of buffered operations for each batch request.

Int

No

1000

A value of 0 disables this feature.

sink.bulk-flush.max-size

The maximum memory size of the buffer for requests.

String

No

2 MB

The unit is MB. The default value is 2 MB. A value of 0 MB disables this feature.

sink.bulk-flush.interval

The flush interval.

Duration

No

1s

The unit is seconds. The default value is 1s. A value of 0s disables this feature.

connection.path-prefix

The prefix string to add to each REST communication.

String

No

Empty

None.

retry-on-conflict

The maximum number of retries allowed for an update operation due to a version conflict exception. If the number of retries exceeds this value, an exception is thrown and the job fails.

Int

No

0

**Note**

-   This parameter is supported only by VVR 4.0.13 or later.
    
-   This parameter takes effect only when a primary key is defined.
    

routing-fields

Specifies one or more ES field names to route documents to specific shards in Elasticsearch.

String

No

None

Separate multiple field names with a semicolon (;). If a field is empty, it is set to null.

**Note**

This parameter is supported only by VVR 8.0.6 or later for elasticsearch-7 and elasticsearch-8.

sink.delete-strategy

Configures the behavior when a retraction message (-D/-U) is received.

Enum

No

DELETE\_ROW\_ON\_PK

The following behaviors are available:

-   DELETE\_ROW\_ON\_PK (default): Ignores -U messages but deletes the row (document) corresponding to the primary key when a -D message is received.
    
-   IGNORE\_DELETE: Ignores -U and -D messages. The Elasticsearch sink does not perform retractions.
    
-   NON\_PK\_FIELD\_TO\_NULL: Ignores -U messages but modifies the row (document) corresponding to the primary key when a -D message is received. The primary key value remains unchanged, and all other non-primary key values in the table schema are set to NULL. This is mainly used for partial updates when multiple sinks write to the same Elasticsearch table.
    
-   CHANGELOG\_STANDARD: Similar to DELETE\_ROW\_ON\_PK, but it also deletes the row (document) corresponding to the primary key when a -U message is received.
    
    **Note**
    
    This parameter is supported only by VVR 8.0.8 or later.
    

sink.ignore-null-when-update

When updating data, specifies whether to update the corresponding field to null or not update the field if the incoming data field value is null.

BOOLEAN

No

false

Valid values:

-   true: Does not update the field. You can set this parameter to true only when a primary key is set for the Flink table and the Elasticsearch data format is JSON.
    
-   false: Updates the field to null.
    

**Note**

This parameter is supported only by VVR 11.1 or later.

connection.request-timeout

The timeout for requesting a connection from the connection manager.

Duration

No

None

**Note**

This parameter is supported only by VVR 11.5 or later.

connect.timeout

The timeout for establishing a connection.

Duration

No

None

**Note**

This parameter is supported only by VVR 11.5 or later.

socket.timeout

The timeout for waiting for data. This is the maximum idle time between two consecutive data packets.

Duration

No

None

**Note**

This parameter is supported only by VVR 11.5 or later.

sink.bulk-flush.update.doc\_as\_upsert

Specifies whether to use the document as an update field.

BOOLEAN

No

false

Valid values:

-   true: Sets the doc\_as\_upsert field of the Update Request to true.
    
-   false: Fills the upsert field of the Update Request with the document.
    

According to https://github.com/elastic/elasticsearch/issues/105804, the preset data pipelines of Elasticsearch do not support partial updates for bulk updates. If you want to use a data pipeline, set this parameter to true.

**Note**

This parameter is supported only by VVR 11.5 or later.

### **Dimension table**

**Parameter**

**Description**

**Data type**

**Required**

**Default value**

**Notes**

connector

The type of the dimension table.

String

Yes

None

The value is fixed to Elasticsearch.

endPoint

The server address.

String

Yes

None

Example: `http://127.0.0.1:XXXX`.

indexName

The index name.

String

Yes

None

None.

accessId

The username for the Elasticsearch instance.

String

No

None

The default value is empty, which means that authentication is not performed. If you specify accessId, you must also specify a non-empty accessKey.

**Important**

To prevent your username and password from being leaked, use variables. For more information, see [Project variables](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb).

accessKey

The password for the Elasticsearch instance.

String

No

None

typeNames

The type name.

String

No

\_doc

Do not set this parameter for Elasticsearch 7.0 or later.

maxJoinRows

The maximum number of rows to join for a single row of data.

Integer

No

1024

None.

cache

The cache policy.

String

No

None

The following three cache policies are supported:

-   ALL: Caches all data in the dimension table. Before the job runs, the system loads all data from the dimension table into the cache. All subsequent lookups are performed against the cache. If data is not found in the cache, the key does not exist. The full cache is reloaded after it expires.
    
-   LRU: Caches a portion of the data in the dimension table. For each record from the source table, the system first looks up data in the cache. If the data is not found, the system looks it up in the physical dimension table.
    
-   None: No cache.
    

cacheSize

The cache size, which is the number of data rows to cache.

Long

No

100000

The cacheSize parameter takes effect only when the cache parameter is set to LRU.

cacheTTLMs

The timeout period for the cache to expire.

Long

No

Long.MAX\_VALUE

The unit is milliseconds. The configuration of cacheTTLMs depends on the configuration of cache:

-   If cache is set to LRU, cacheTTLMs is the cache timeout period. By default, the cache does not expire.
    
-   If cache is set to ALL, cacheTTLMs is the interval for reloading the cache. By default, the cache is not reloaded.
    

ignoreKeywordSuffix

Specifies whether to ignore the .keyword suffix that is automatically added to String fields.

Boolean

No

false

To ensure compatibility, Flink converts the Text type in Elasticsearch to the String type and adds the .keyword suffix to String type field names by default.

Valid values:

-   true: The setting is ignored.
    
    If this prevents matching with Text type fields in Elasticsearch, set this parameter to true.
    
-   false: The item is not ignored.
    

cacheEmpty

Specifies whether to cache empty results from lookups in the physical dimension table.

Boolean

No

true

The cacheEmpty parameter takes effect only when the cache parameter is set to LRU.

queryMaxDocs

The maximum number of documents returned when querying the Elasticsearch server for each incoming data record from the input of a non-primary key dimension table.

Integer

No

10000

The default value of 10000 is the maximum limit of documents that the Elasticsearch server can return. The value of this parameter cannot exceed this limit.

**Note**

-   This parameter is supported only by VVR 8.0.8 or later.
    
-   This parameter takes effect only for non-primary key dimension tables because data in primary key tables is unique.
    
-   To ensure query correctness, the default value is large. However, a large value increases memory usage when you query Elasticsearch. If you encounter memory issues, you can lower this value to optimize memory usage.
    

## Type mappings

Flink parses Elasticsearch data in the JSON format. For more information, see [Data Type Mapping](https://ci.apache.org/projects/flink/flink-docs-master/zh/dev/table/connectors/formats/json.html).

## Examples

-   Example source table
    
    ```
    CREATE TEMPORARY TABLE elasticsearch_source (
      name STRING,
      location STRING,
      `value` FLOAT
    ) WITH (
      'connector' ='elasticsearch',
      'endPoint' = '<yourEndPoint>',
      'accessId' = '${secret_values.ak_id}',
      'accessKey' = '${secret_values.ak_secret}',
      'indexName' = '<yourIndexName>',
      'typeNames' = '<yourTypeName>'
    );
    
    CREATE TEMPORARY TABLE blackhole_sink (
      name STRING,
      location STRING,
      `value` FLOAT
    ) WITH (
      'connector' ='blackhole'
    );
    
    INSERT INTO blackhole_sink
    SELECT name, location, `value`
    FROM elasticsearch_source;
    ```
    
-   Dimension table example
    
    ```
    CREATE TEMPORARY TABLE datagen_source (
      id STRING, 
      data STRING,
      proctime as PROCTIME()
    ) WITH (
      'connector' = 'datagen' 
    );
    
    CREATE TEMPORARY TABLE es_dim (
      id STRING,
      `value` FLOAT,
      PRIMARY KEY (id) NOT ENFORCED
    ) WITH (
      'connector' ='elasticsearch',
      'endPoint' = '<yourEndPoint>',
      'accessId' = '${secret_values.ak_id}',
      'accessKey' = '${secret_values.ak_secret}',
      'indexName' = '<yourIndexName>',
      'typeNames' = '<yourTypeName>'
    );
    
    CREATE TEMPORARY TABLE blackhole_sink (
      id STRING,
      data STRING,
      `value` FLOAT
    ) WITH (
      'connector' = 'blackhole' 
    );
    
    INSERT INTO blackhole_sink
    SELECT e.*, w.*
    FROM datagen_source AS e
    JOIN es_dim FOR SYSTEM_TIME AS OF e.proctime AS w
    ON e.id = w.id;
    ```
    
-   Sink table example 1
    
    ```
    CREATE TEMPORARY TABLE datagen_source (
      id STRING, 
      name STRING,
      uv BIGINT
    ) WITH (
      'connector' = 'datagen'
    );
    
    CREATE TEMPORARY TABLE es_sink (
      user_id STRING,
      user_name STRING,
      uv BIGINT,
      PRIMARY KEY (user_id) NOT ENFORCED -- The primary key is optional. If a primary key is defined, it is used as the document ID. Otherwise, a random value is used as the document ID.
    ) WITH (
      'connector' = 'elasticsearch-6',
      'hosts' = '<yourHosts>',
      'index' = '<yourIndex>',
      'document-type' = '<yourElasticsearch.types>',
      'username' ='${secret_values.ak_id}',
      'password' ='${secret_values.ak_secret}'
    );
    
    INSERT INTO es_sink
    SELECT id, name, uv
    FROM datagen_source;
    ```
    
-   Sink table example 2
    
    ```
    CREATE TEMPORARY TABLE datagen_source(  
      id STRING,
        details ROW<  
            name STRING,  
            ages ARRAY<INT>,  
            attributes MAP<STRING, STRING>  
        >
    ) WITH (  
        'connector' = 'datagen'
    );
    
    CREATE TEMPORARY TABLE es_sink (
      id STRING,
        details ROW<  
            name STRING,  
            ages ARRAY<INT>,  
            attributes MAP<STRING, STRING>  
        >, 
      PRIMARY KEY (id) NOT ENFORCED  -- The primary key is optional. If a primary key is defined, it is used as the document ID. Otherwise, a random value is used as the document ID.
    ) WITH (
      'connector' = 'elasticsearch-6',
      'hosts' = '<yourHosts>',
      'index' = '<yourIndex>',
      'document-type' = '<yourElasticsearch.types>',
      'username' ='${secret_values.ak_id}',
      'password' ='${secret_values.ak_secret}'
    );
    
    INSERT INTO es_sink
    SELECT id, details
    FROM datagen_source;
    ```
