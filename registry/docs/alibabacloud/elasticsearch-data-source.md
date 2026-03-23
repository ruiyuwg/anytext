The Elasticsearch data source provides a bidirectional channel to read data from and write data to Elasticsearch. This topic describes the data synchronization capabilities that DataWorks supports for Elasticsearch.

## Usage notes

Elasticsearch 5.x is supported on public resource groups. Elasticsearch 5.x, 6.x, 7.x, and 8.x are supported on [serverless resource groups (recommended)](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) and exclusive resource groups for Data Integration.

**Note**

-   For more information about serverless resource groups, see [Use a serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).
    
-   For more information about exclusive resource groups for Data Integration, see [Use exclusive resource groups for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration#task-2353828).
    

Elasticsearch is a distributed search and data analysis engine based on Lucene. As a mainstream, enterprise-level search engine, it is an open source product that complies with the Apache open source license. The following table maps the core concepts of Elasticsearch to those of a relational database.

**Elasticsearch**

**Relational database**

Elasticsearch (instance)

Relational DB (instance)

Index

Databases

Types

Tables

Documents

Rows

Fields

Columns

An Elasticsearch instance can contain multiple indexes (databases). Each index can contain multiple types (tables). Each type can contain multiple documents (rows). Each document can contain multiple fields (columns). The Elasticsearch writer plug-in uses the REST API of Elasticsearch to write data read from a reader to Elasticsearch in batches.

## Supported versions

DataWorks supports only Alibaba Cloud Elasticsearch 5.x, 6.x, 7.x, and 8.x data sources. You cannot add self-managed Elasticsearch data sources.

## Limitations

The following limits apply when you perform offline read and write operations on an Elasticsearch data source:

-   Elasticsearch Reader fetches shard information from the server for data synchronization. You must ensure that the shards on the server are active during data synchronization. Otherwise, data inconsistency may occur.
    
-   If you use Elasticsearch 6.x or later, you must use [serverless resource groups (recommended)](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) or [exclusive resource groups for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration#task-2353828).
    
-   Fields of the scaled\_float type cannot be synchronized.
    
-   Indexes that contain the keyword `$ref` in fields cannot be synchronized.
    

## Supported field types

**Type**

**Offline read (Elasticsearch Reader)**

**Offline write (Elasticsearch Writer)**

**Real-time write**

binary

Supported

Supported

Supported

boolean

Supported

Support

Supported

keyword

Supported

Supported

Supported

constant\_keyword

Not supported

Not supported

Not supported

wildcard

Not supported

Not supported

Not supported

long

Supported

Supported

Supported

integer

Supported

Supported

Supported

short

Supported

Supported

Supported

byte

Supported

Supported

Supported

double

Supported

Supported

Supported

float

Support

Supported

Supported

half\_float

Not supported

Not supported

Not supported

scaled\_float

Not supported

Not supported

Not supported

unsigned\_long

Not supported

Not supported

Not supported

date

Supported

Supported

Supported

date\_nanos

Not supported

Not supported

Not supported

alias

Not supported

Not supported

Not supported

object

Support

Supported

Supported

flattened

Not supported

Not supported

Not supported

nested

Supported

Support

Supported

join

Not supported

Not supported

Not supported

integer\_range

Supported

Support

Supported

float\_range

Supported

Supported

Supported

long\_range

Supported

Supported

Supported

double\_range

Supported

Supported

Supported

date\_range

Supported

Supported

Supported

ip\_range

Not supported

Supported

Supported

ip

Support

Supported

Supported

version

Support

Supported

Supported

murmur3

Not supported

Not supported

Not supported

aggregate\_metric\_double

Not supported

Not supported

Not supported

histogram

Not supported

Not supported

Not supported

text

Supported

Supported

Supported

annotated-text

Not supported

Not supported

Not supported

completion

Supported

Not supported

Not supported

search\_as\_you\_type

Not supported

Not supported

Not supported

token\_count

Supported

Not supported

Not supported

dense\_vector

Not supported

Not supported

Not supported

rank\_feature

Not supported

Not supported

Not supported

rank\_features

Not supported

Not supported

Not supported

geo\_point

Supported

Supported

Supported

geo\_shape

Supported

Supported

Supported

point

Not supported

Not supported

Not supported

shape

Not supported

Not supported

Not supported

percolator

Not supported

Not supported

Not supported

string

Support

Support

Supported

## How it works

Elasticsearch Reader works as follows:

-   It uses the \_search scroll slice method of Elasticsearch. The slice feature works in conjunction with the multi-threaded sharding mechanism of Data Integration tasks.
    
-   It transforms data types based on the mapping configuration in Elasticsearch.
    

For more information, see the [official Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-scroll.html).

**Note**

Elasticsearch Reader fetches shard information from the server for data synchronization. You must ensure that the shards on the server are active during data synchronization. Otherwise, data inconsistency may occur.

## Basic configuration

**Important**

You must remove the comments before you run the code.

```
{
 "order":{
  "hops":[
   {
    "from":"Reader",
    "to":"Writer"
   }
  ]
 },
 "setting":{
  "errorLimit":{
   "record":"0" // The number of error records.
  },
  "jvmOption":"",
  "speed":{
   "concurrent":3,// The number of concurrent threads.
   "throttle":true,//
                     "mbps":"12",// Throttling. 1 Mbps = 1 MB/s.
  }
 },
 "steps":[
  {
   "category":"reader",
   "name":"Reader",
   "parameter":{
    "column":[ // The columns to read.
     "id",
     "name"
    ],
    "endpoint":"", // The endpoint.
    "index":"",  // The index.
    "password":"",  // The password.
    "scroll":"",  // The scroll flag.
    "search":"",  // The query parameter. This is the same as the query content of Elasticsearch. The _search API is used and renamed to search.
    "type":"default",
    "username":""  // The username.
   },
   "stepType":"elasticsearch"
  },
  {
   "stepType": "elasticsearch",
            "parameter": {
                "column": [ // The columns to write.
                    {
                        "name": "id",
                        "type": "integer"
                    },
                    {
                        "name": "name",
                        "type": "text"
                    }
                ],
                "index": "test",   // The destination index.
                 "indexType": "",   // The type of the destination index. Leave this empty for Elasticsearch 7.x.
                "actionType": "index",  // The write mode.
                "cleanup": false,         // Specifies whether to reindex.
                "datasource": "test",   // The name of the data source.
                "primaryKeyInfo": {     // The method to obtain the primary key value.
                    "fieldDelimiterOrigin": ",",
                    "column": [
                        "id"
                    ],
                    "type": "specific",
                    "fieldDelimiter": ","
                },
                "dynamic": false,  // Dynamic mapping.
                "batchSize": 1024   // The number of documents to write in a batch.
            },
            "name": "Writer",
            "category": "writer"
  }
 ],
 "type":"job",
 "version":"2.0" // The version number.
}
```

## Advanced features

-   Full data pull
    
    You can pull all content of a document in Elasticsearch as a single field. For more information about the configuration, see [Scenario 1: Full data pull](#83173f44bb1la).
    
-   Extraction of semi-structured data to structured data
    
    **Category**
    
    **Description**
    
    **References**
    
    Background
    
    Data in Elasticsearch often has unfixed fields, Chinese field names, and deep nesting. To meet downstream business requirements for data computing and storage, DataWorks provides a solution to transform this semi-structured data into structured data.
    
    \-
    
    How it works
    
    The path retrieval feature of JSON tools flattens nested JSON data from Elasticsearch into a one-dimensional structure. This data is then mapped to structured data tables. The composite data structure from Elasticsearch is split into multiple structured data tables.
    
    \-
    
    Solution
    
    If the JSON data is nested, you can use a path to resolve it.
    
    -   property
        
    -   property.sub-property
        
    -   property\[0\].sub-property
        
    
    [Scenario 2: Synchronize properties of nested or object fields](#2002d5d437caf)
    
    If a one-to-many relationship exists, you can traverse the data and split it into different tables and rows.
    
    property\[\*\].sub-property
    
    [Scenario 3: Split array properties into multiple rows](#5f46ff3768m3g)
    
    You can merge the content of a string array into a single property and remove duplicates.
    
    property\[\]
    
    [Scenario 4: Deduplicate and merge array properties](#94a0ef1fbahvk)
    
    You can merge multiple properties into a single property.
    
    property1,property2
    
    [Scenario 5: Merge and synchronize multiple properties](#b68a9c9119tur)
    
    You can selectively process multiple properties.
    
    property1|property2
    
    [Scenario 6: Selectively synchronize multiple properties](#9b353dd49dsan)
    

## **Add a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

## Develop a data synchronization task

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### Configure an offline synchronization task for a single table

-   For more information about the procedure, see [Configure a task in the codeless UI](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For all parameters and a script demo for the code editor, see [Appendix 1: Script demos and parameter descriptions](#575ef2d5d0x16).
    

### Configure a real-time write task for a single table

For more information about the procedure, see [Configure a real-time synchronization task in DataStudio](/help/en/dataworks/user-guide/configure-a-real-time-synchronization-node-in-datastudio/#task-2231840).

### Configure an offline write task for an entire database or a full/incremental real-time write task for a single table or an entire database

For more information about the procedure, see [Configure a real-time full-database synchronization task](/help/en/dataworks/user-guide/configure-a-data-synchronization-solution-in-data-integration#task-2234369).

## Appendix 1: Script demos and parameter descriptions

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Reader script demo

```
{
    "order":{
        "hops":[
            {
                "from":"Reader",
                "to":"Writer"
            }
        ]
    },
    "setting":{
        "errorLimit":{
            "record":"0" // The number of error records.
        },
        "jvmOption":"",
        "speed":{
            "concurrent":3,
            "throttle":false
        }
    },
    "steps":[
        {
            "category":"reader",
            "name":"Reader",
            "parameter":{
                "column":[ // The columns to read.
                    "id",
                    "name"
                ],
                "endpoint":"http://es-cn-xxx.elasticsearch.aliyuncs.com:9200", // The endpoint.
                "index":"aliyun_es_xx",  // The index.
                "password":"*******",  // The password.
                "multiThread":true,
                "scroll":"5m",  // The scroll flag.
                "pageSize":5000,
                "connTimeOut":600000,
                "readTimeOut":600000,
                "retryCount":30,
                "retrySleepTime":"10000",
                "search":{
                            "range":{
                                "gmt_modified":{
                                    "gte":0
                                }
                            }
                        },  // The query parameter. This is the same as the query content of Elasticsearch. The _search API is used and renamed to search.
                "type":"doc",
                "username":"aliyun_di"  // The username.
            },
            "stepType":"elasticsearch"
        },
        {
            "category":"writer",
            "name":"Writer",
            "parameter":{ },
            "stepType":"stream"
        }
    ],
    "type":"job",
    "version":"2.0" // The version number.
}
```

### Reader script parameters

**Parameter**

**Description**

**Required**

**Default value**

datasource

The name of the data source. You can add a data source in the code editor. The value of this parameter must be the same as the name of the added data source.

Yes

None

index

The name of the index in Elasticsearch.

Yes

None

type

The index type in Elasticsearch.

No

Index name

search

The query parameter of Elasticsearch.

Yes

None

pageSize

The number of data entries to read at a time.

No

100

scroll

The paging parameter of Elasticsearch. It specifies the duration for which a scroll is kept alive.

-   If you set this parameter to a small value, the scroll may expire if the idle time between reading two pages of data is too long. This can cause data loss.
    
-   If you set this parameter to a large value, a data query error may occur if the number of concurrent queries exceeds the value of the `max_open_scroll_context` parameter on the server.
    

Yes

None

strictMode

Specifies whether to read data from Elasticsearch in strict mode. If a shard.failed error occurs in Elasticsearch, the read operation stops to prevent a small amount of data from being read.

No

true

sort

The field by which to sort the results.

No

None

retryCount

The number of retries after a failure.

No

300

connTimeOut

The connection timeout period for the client.

No

600,000

readTimeOut

The read timeout period for the client.

No

600,000

multiThread

Specifies whether to use multiple threads for HTTP requests.

No

true

preemptiveAuth

Specifies whether to use preemptive authentication for HTTP requests.

No

false

retrySleepTime

The interval between retries after a failure.

No

1000

discovery

Specifies whether to enable node discovery.

-   true: Connect to a random node in the cluster. If you enable node discovery, the system polls and periodically updates the server list in the client and sends query requests to the discovered nodes.
    
-   false: Send query requests to the configured endpoint.
    

No

false

compression

Specifies whether to use GZIP to compress the request body. If you use this feature, you must enable the http.compression setting on the Elasticsearch node.

No

false

dateFormat

If a field to be synchronized is of the date type and the mapping of this field does not have a format configuration, you must configure the dateFormat parameter. The configuration is in the following format: `"dateFormat" : "yyyy-MM-dd||yyyy-MM-dd HH:mm:ss"`. This configuration must include all formats of the date type fields to be synchronized.

No

None

full

Specifies whether to synchronize the full content of a document as a single field to the destination. The queried data from Elasticsearch is treated as a single field. For more information about the configuration, see [Scenario 1: Full data pull](#83173f44bb1la).

No

None

multi

This is an advanced feature with five usage scenarios. It has two sub-properties: `multi.key` and `multi.mult`. For more information about the configuration, see the table in [Advanced features](#title-0ld-ap6-t0x).

No

None

### Writer script demo

```
{
    "order": {
        "hops": [
            {
                "from": "Reader",
                "to": "Writer"
            }
        ]
    },
    "setting": {
        "errorLimit": {
            "record": "0"
        },
        "speed": {
            "throttle":true,// If throttle is set to false, the mbps parameter does not take effect, which means no throttling. If throttle is set to true, throttling is enabled.
            "concurrent":1, // The number of concurrent jobs.
            "mbps":"12"// Throttling. 1 Mbps = 1 MB/s.
        }
    },
    "steps": [
        {
            "category": "reader",
            "name": "Reader",
            "parameter": {

            },
            "stepType": "stream"
        },
        {
            "category": "writer",
            "name": "Writer",
            "parameter": {
                "datasource":"xxx",
                "index": "test-1",
                "type": "default",
                "cleanup": true,
                "settings": {
                        "number_of_shards": 1,
                        "number_of_replicas": 0
                },
                "discovery": false,
                "primaryKeyInfo":{
                    "type":"pk",    
                     "fieldDelimiter":",",
                     "column":[]
                    },
                "batchSize": 1000,
                "dynamic":false,
                "esPartitionColumn":[
                    {
                        "name":"col1",  
                        "comment":"xx", 
                        "type":"STRING" 
                        }
                     ],
                "column": [
                    {
                        "name": "pk",
                        "type": "id"
                    },
                    {
                        "name": "col_ip",
                        "type": "ip"
                    },
                    {
                        "name": "col_array",
                        "type": "long",
                        "array": true
                    },
                    {
                        "name": "col_double",
                        "type": "double"
                    },
                    {
                        "name": "col_long",
                        "type": "long"
                    },
                    {
                        "name": "col_integer",
                        "type": "integer"
                    },
                    {
                        "name": "col_keyword",
                        "type": "keyword"
                    },
                    {
                        "name": "col_text",
                        "type": "text",
                        "analyzer": "ik_max_word",
                        "other_params":
                            {
                                "doc_values": false
                            }
                    },
                    {
                        "name": "col_geo_point",
                        "type": "geo_point"
                    },
                    {
                        "name": "col_date",
                        "type": "date",
                        "format": "yyyy-MM-dd HH:mm:ss"
                    },
                    {
                        "name": "col_nested1",
                        "type": "nested"
                    },
                    {
                        "name": "col_nested2",
                        "type": "nested"
                    },
                    {
                        "name": "col_object1",
                        "type": "object"
                    },
                    {
                        "name": "col_object2",
                        "type": "object"
                    },
                    {
                        "name": "col_integer_array",
                        "type": "integer",
                        "array": true
                    },
                    {
                        "name": "col_geo_shape",
                        "type": "geo_shape",
                        "tree": "quadtree",
                        "precision": "10m"
                    }
                ]
            },
            "stepType": "elasticsearch"
        }
    ],
    "type": "job",
    "version": "2.0"
}
```

**Note**

An Elasticsearch instance in a VPC cannot be accessed from a default resource group due to network isolation. You must use a [serverless resource group (recommended)](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) or an exclusive resource group for Data Integration to access the VPC for data synchronization. For more information about how to add a resource group, see [Serverless resource groups](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).

### Writer script parameters

**Parameter**

**Description**

**Required**

**Default value**

datasource

The Elasticsearch data source to which you want to synchronize data. If you have not created the data source in DataWorks, create one. For more information, see [Configure an Elasticsearch data source](/help/en/dataworks/add-an-elasticsearch-data-source#task-2483370).

Yes

None

index

The name of the index in Elasticsearch.

Yes

None

indexType

The type of the index in Elasticsearch.

No

Elasticsearch

cleanup

Specifies whether to delete data from an existing index.

-   true: Before data is imported, the original index is deleted and an index with the same name is re-created. This operation deletes the data in the index.
    
-   false: Before data is imported, the existing data in the index is retained.
    

No

false

batchSize

The number of documents to insert into Elasticsearch at a time for a synchronization task.

No

1,000

trySize

The number of retries after a failed attempt to write data to Elasticsearch.

No

30

timeout

The timeout period for the client.

No

600,000

discovery

Specifies whether to enable the node discovery feature for the task.

-   true: Connect to a random node in the cluster. If you enable node discovery, the system polls and periodically updates the server list in the client.
    
-   false: Connect to the Elasticsearch cluster.
    

No

false

compression

Enables compression for HTTP requests.

No

true

multiThread

Specifies whether to use multiple threads for HTTP requests.

No

true

ignoreWriteError

Ignores write errors, does not retry, and continues to write.

No

false

ignoreParseError

Ignores data format parsing errors and continues to write.

No

true

alias

An alias in Elasticsearch is similar to a view in a database. For example, if you create an alias named my\_index\_alias for an index named my\_index, operations on my\_index\_alias are the same as operations on my\_index.

If you configure an alias, an alias is created for the specified index after data is imported.

No

None

aliasMode

The mode in which an alias is added after data is imported. Valid values: append and exclusive.

-   If you set aliasMode to append, the current index is appended to the alias mapping. One alias can correspond to multiple indexes.
    
-   If you set aliasMode to exclusive, the alias is first deleted, and then the current index is added to the alias mapping. One alias corresponds to one index.
    

The alias is then converted to the actual index name. Aliases can be used for index migration and unified queries of multiple indexes. They can also be used to implement the functionality of views.

No

append

settings

The settings for creating an index. This is consistent with the official Elasticsearch settings.

No

None

column

The column parameter is used to configure the field information for multiple documents. For each field, you can configure basic settings such as name and type, and extension settings such as Analyzer, Format, and Array.

The following field types are supported by Elasticsearch.

```
- id  // The id type corresponds to _id in Elasticsearch, which can be understood as a unique primary key. When writing data, data with the same ID is overwritten and not indexed.
- string
- text
- keyword
- long
- integer
- short
- byte
- double
- float
- date
- boolean
- binary
- integer_range
- float_range
- long_range
- double_range
- date_range
- geo_point
- geo_shape
- ip
- token_count
- array
- object
- nested
```

The following section describes the column types:

-   If the column type is text, you can configure parameters such as analyzer, norms, and index\_options. The following example shows the configuration.
    
    ```
    {
        "name": "col_text",
        "type": "text",
        "analyzer": "ik_max_word"
        }
    ```
    
-   If the column type is Date, you can configure one of the following two methods to parse the source data. Make sure the configuration method is consistent.
    
    -   Method 1: Directly write the content of the field read by the reader to the es data field:
        
        -   Set origin:true. This is required. This allows the content of the read field to be directly written to es data.
            
        -   Configure "format". This indicates that when the es writer creates a mapping, the format property must be set for this field. The following example shows the configuration:
            
            ```
              {
                 "parameter":{
                   "column":[{
                       "name": "col_date",
                       "type": "date",
                       "format": "yyyy-MM-dd HH:mm:ss",
                       "origin": true
                    }]
               }
            }
            ```
            
    -   Method 2: (Time zone conversion) If you need Data Integration to perform time zone conversion, add the Timezone parameter. The following example shows the configuration:
        
        The configured "format" indicates the time format that Data Integration parses during time zone conversion:
        
        ```
          {
             "parameter" :{
               "column": [{
                  "name": "col_date",
                  "type": "date",
                  "format": "yyyy-MM-dd HH:mm:ss",
                 "Timezone": "UTC"
               }]
           }
        }
        ```
        
-   If the column type is geo\_shape, you can configure properties such as tree (geohash or quadtree) and precision. The following example shows the configuration.
    
    ```
    {
        "name": "col_geo_shape",
        "type": "geo_shape",
        "tree": "quadtree",
        "precision": "10m"
        }
    ```
    

To configure properties other than type in the column, you can use the **other\_params** parameter. This parameter is configured in the **column** and is used to describe Elasticsearch properties other than type in the column when updating mappings.

```
 {
   "name": "guid",
   "other_params":
    {
       "doc_values": false
      },
    "type": "text"
  }
```

If you want to write source data to Elasticsearch as an array, you can parse the source data in JSON format or by specifying a separator. For more information about the configuration, see [Appendix 2: Write data to Elasticsearch in an array format](#section-kix-q4u-3wr).

Yes

None

dynamic

Specifies whether the synchronization task adds a mapping for a non-existent field found in a document using the dynamic mapping mechanism of Elasticsearch.

-   true: Retain the automatic mappings of Elasticsearch.
    
-   false: This is the default value. If you do not specify this parameter, the value is false. The mappings of Elasticsearch are generated and updated based on the column configuration of the synchronization task.
    

The default type for Elasticsearch 7.x is \_doc. When using automatic mappings in Elasticsearch, set \_doc and esVersion to 7.

You need to switch to the code editor and add a version parameter: `"esVersion": "7"`.

**Important**

If a field mapping error occurs, you can enable this parameter to try to resolve the issue. However, this method may cause field types to be inconsistent with expectations or cause data exceptions. Evaluate the risks based on your data structure before deciding whether to enable it.

No

false

actionType

The action type for writing data to Elasticsearch. Data Integration supports index and update. The default value of actionType is index.

-   index: The Index.Builder of the Elasticsearch SDK is used at the underlying layer to construct batch requests. When inserting data with the Elasticsearch index action, you must first determine whether an ID is specified in the document data to be inserted:
    
    -   If no ID is specified, Elasticsearch generates a unique ID by default. In this case, the document is directly added to Elasticsearch.
        
    -   If an ID is specified, the entire document is updated (replaced). Modifying specific fields is not supported.
        
        **Note**
        
        The update here is not the same as the update in Elasticsearch, which replaces some specified columns.
        
-   update: Updates a document based on the user-specified ID. If the ID does not exist in the index, the document is inserted. If the ID exists, the content of the specified column field is updated. The content of other document fields remains unchanged. Each update operation retrieves the entire document information to modify specific fields. The update action does not support conditional filtering and only updates based on the specified ID. Because each update requires retrieving the original document, performance may be significantly affected.
    
    **Note**
    
    If you set the action type to update, you must set the **primaryKeyInfo** parameter.
    

No

index

**primaryKeyInfo**

Defines the method to obtain the primary key value when writing to Elasticsearch.

-   **Business Primary Key (pk)**: The value of \_id is set to a specific field.
    
    ```
    "parameter":{
    "primaryKeyInfo":{
    "type":"pk",
    "column":["id"]}
    }
    ```
    
-   **Composite Primary Key (specific)**: The value of \_id is a concatenation of the values of several fields. The separator is the value you set for **Primary Key Delimiter** (**fieldDelimiter**).
    
    **Note**
    
    The field name is the destination field for the Elasticsearch writer. In the codeless UI, the **Primary Key Column Configuration** only includes fields that already exist in the Elasticsearch index.
    
    ```
    "parameter":{
    "primaryKeyInfo":{
    "type":"specific",
    "fieldDelimiter":",",
    "column":["col1","col2"]}
    }
    ```
    
-   **No Primary Key (nopk)**: The \_id is automatically generated by the system when writing to Elasticsearch.
    
    ```
    "primaryKeyInfo":{
    "type":"nopk"
    }
    ```
    

Yes

specific

**esPartitionColumn**

Specifies whether to enable partitioning when writing to Elasticsearch. This is used to modify the routing parameter in Elasticsearch.

-   Enable partitioning: The values of the specified columns are concatenated with an empty string as a separator and set as the routing value. When writing data, this inserts or updates the document in the specified shard. If you enable partitioning, you must specify the partition key columns.
    
    ```
    {    "esPartitionColumn": [
            {
                "name":"col1",
                "comment":"xx",
                "type":"STRING"
                }
            ],
        }
    ```
    
-   Disable partitioning: Do not specify this parameter. By default, \_id is used as the routing key to evenly distribute documents across multiple shards to prevent data skew.
    

No

false

**enableWriteNull**

Specifies whether to synchronize null value fields from the source to Elasticsearch. Valid values:

-   true: Yes. After synchronization, the value of the corresponding field in Elasticsearch is null.
    
-   false: No. Null value fields from the source are not synchronized to Elasticsearch. The field is not displayed in Elasticsearch.
    

No

true

## Appendix 2: Write data to Elasticsearch in an array format

You can use the following two methods to write source data to Elasticsearch as an array.

-   Parse source data in JSON format
    
    For example, if the source data is `"[1,2,3,4,5]"`, set json\_array=true to parse the data. The data is then written to Elasticsearch in an array format.
    
    ```
    "parameter" : {
      {
        "name":"docs_1",
        "type":"keyword",
        "json_array":true
      }
    }
    ```
    
-   Parse source data using a separator
    
    For example, if the source data is `"1,2,3,4,5"`, set the separator splitter="," to parse the data. The data is then written to Elasticsearch in an array format.
    
    **Note**
    
    A task supports only one type of separator. The splitter parameter is globally unique. You cannot configure different separators for multiple array fields. For example, if the source fields are `col1="1,2,3,4,5"` and `col2="6-7-8-9-10"`, you cannot configure a separate splitter for each field.
    
    ```
    "parameter" : {
          "column": [
            {
              "name": "docs_2",
              "array": true,
              "type": "long"
            }
          ],
          "splitter":","// Note: The splitter configuration is at the same level as the column configuration.
    }
    ```
    

## **Appendix 3: Scenarios**

### **Scenario 1: Full data pull**

-   Background: You can pull the query results of a document in Elasticsearch as a single field.
    
-   Example:
    
    ```
    
    ## Reader: Raw data in Elasticsearch
    "hits": [
        {
            "_index": "mutiltest_1",
            "_type": "_doc",
            "_id": "IXgdO4MB4GR_1DmrjTXP",
            "_score": 1.0,
            "_source": {
                "feature1": "value1",
                "feature2": "value2",
                "feature3": "value3"
            }
        }]
    
    ## Data Integration Elasticsearch Reader plug-in configuration
    "parameter": {
      "column": [
          "content"
      ],
      "full":true
    }
    
    ## Writer result: One row and one column are synchronized to the destination.
    {"_index":"mutiltest_1","_type":"_doc","_id":"IXgdO4MB4GR_1DmrjTXP","_source":{"feature1":"value1","feature2":"value2","feature3":"value3"},"sort":["IXgdO4MB4GR_1DmrjTXP"]}
    ```
    

### **Scenario 2: Synchronize properties of nested or object fields**

-   Background: When you synchronize properties of Object or nested fields, you can use a path to resolve them.
    
-   Configuration:
    
    -   property
        
    -   property.sub-property
        
    -   property\[0\].sub-property
        
-   Script configuration:
    
    ```
    "multi":{
        "multi":true
    }
    ```
    
    **Note**
    
    Configuration is not currently available in the codeless UI.
    
-   Example:
    
    ```
    ## Reader: Raw data in Elasticsearch
    "hits": [
        {
            "_index": "mutiltest_1",
            "_type": "_doc",
            "_id": "7XAOOoMB4GR_1Dmrrust",
            "_score": 1.0,
            "_source": {
                "level1": {
                    "level2": [
                        {
                            "level3": "testlevel3_1"
                        },
                        {
                            "level3": "testlevel3_2"
                        }
                    ]
                }
            }
        }
    ]
    ## Data Integration Elasticsearch reader plug-in configuration
    "parameter": {
      "column": [
          "level1",
          "level1.level2",
          "level1.level2[0]",
          "level1.level2.level3"
      ],
      "multi":{
            "multi":true
        }
    }
    
    ## Writer result: One row of data with four columns
    column1(level1):            {"level2":[{"level3":"testlevel3_1"},{"level3":"testlevel3_2"}]}
    column2(level1.level2):     [{"level3":"testlevel3_1"},{"level3":"testlevel3_2"}]
    column3(level1.level2[0]):  {"level3":"testlevel3_1"}
    column4(level1.level2.level3):  null
    ```
    
    **Note**
    
    -   If a parent node of the retrieved node contains an array, the result is null. For example, retrieving \`level1.level2.level3\` does not report an error, but the synchronization result is null. You must configure the path as \`level1.level2\[0\].level3\` or \`level1.level2\[1\].level3\`. The \`level1.level2\[\*\].level3\` format is not currently supported.
        
    -   Data that contains a period (.) in the key is not supported, such as \`{"level1.level2":{"level3":"testlevel3\_1"}}\`. In this case, the retrieval result for this data entry is null.
        
    

### **Scenario 3: Split array properties into multiple rows**

-   Background: If a one-to-many relationship exists, you can split the array column into multiple rows.
    
-   Configuration: property\[\*\].sub-property
    
-   Effect: Source data such as \`{ "splitKey" :\[1,2,3,4,5\]}\` is split and written to the destination as five separate rows.
    
-   Script configuration:
    
    ```
    "multi":{   
           "multi":true,    
            "key": "headers"
    }
    ```
    
    **Note**
    
    -   In the codeless UI, configuring **Split Multi-row Array Column Name** automatically generates an equivalent script configuration.
        
    -   The value must be a list. Otherwise, an error occurs.
        
    
-   Example:
    
    ```
    ## Reader: Raw data in Elasticsearch
    [
        {
            "_index": "lmtestjson",
            "_type": "_doc",
            "_id": "nhxmIYMBKDL4VkVLyXRN",
            "_score": 1.0,
            "_source": {
                "headers": [
                    {
                        "remoteip": "192.0.2.1"
                    },
                    {
                        "remoteip": "192.0.2.2"
                    }
                ]
            }
        },
        {
            "_index": "lmtestjson",
            "_type": "_doc",
            "_id": "wRxsIYMBKDL4VkVLcXqf",
            "_score": 1.0,
            "_source": {
                "headers": [
                    {
                        "remoteip": "192.0.2.3"
                    },
                    {
                        "remoteip": "192.0.2.4"
                    }
                ]
            }
        }
    ]
    ## Data Integration Elasticsearch reader plug-in configuration
    {
       "column":[
          "headers[*].remoteip"
      ]
      "multi":{
          "multi":true,
          "key": "headers"
      }
    }
    
    ## Writer result: 4 rows
    192.0.2.1
    192.0.2.2
    192.0.2.3
    192.0.2.4
    ```
    

### **Scenario 4: Deduplicate and merge array properties**

-   Background: You can deduplicate and merge an array property, and then write the result as a string property. The array property can be a sub-property, such as \`name1.name2\`. The \`toString\` result is used as the standard for deduplication.
    
-   Configuration: \`property\[\]\`.
    
    If the column name contains \`\[\]\`, deduplication and merging are performed on this property.
    
-   Script configuration:
    
    ```
    "multi":{
        "multi":true
    }
    ```
    
    **Note**
    
    This parameter cannot be configured in the codeless UI.
    
-   Example:
    
    ```
    ## Reader: Raw data in Elasticsearch
    "hits": [
    {
        "_index": "mutiltest_1",
        "_type": "_doc",
        "_id": "4nbUOoMB4GR_1Dmryj8O",
        "_score": 1.0,
        "_source": {
            "feature1": [
                "value1",
                "value1",
                "value2",
                "value2",
                "value3"
            ]
        }
    }
    ]
    ## Data Integration Elasticsearch reader plug-in configuration
    "parameter": {
      "column":[
            "feature1[]"
      ],
      "multi":{
            "multi":true
        }
    }
    
    ## Writer result: One row and one column of data
    "value1,value2,value3"
    ```
    

### **Scenario 5: Merge and synchronize multiple properties**

-   Background: You can selectively process multiple properties. The first property that has a value is returned. If none of the specified properties exist, null is written.
    
-   Configuration: \`property1|property2|...\`
    
    If the column name contains the \`|\` separator, multiple properties are selected for this item.
    
-   Script configuration:
    
    ```
    "multi":{    
        "multi":true
    }
    ```
    
    **Note**
    
    This parameter cannot be configured in the codeless UI.
    
-   Example:
    
    ```
    ## Reader: Raw data in Elasticsearch
    "hits": [
        {
            "_index": "mutiltest_1",
            "_type": "_doc",
            "_id": "v3ShOoMB4GR_1DmrZN22",
            "_score": 1.0,
            "_source": {
                "feature1": "feature1",
                "feature2": [
                    1,
                    2,
                    3
                ],
                "feature3": {
                    "child": "feature3"
                }
            }
        }]
    
    ## Data Integration Elasticsearch reader plug-in configuration
    "parameter": {
      "column":[
            "feature1|feature2|feature3"
      ],
      "multi":{
            "multi":true
        }
    }
    
    ## Writer result: One row and one column of data
    "feature1"
    ```
    

### **Scenario 6: Selectively synchronize multiple properties**

-   Background: You can selectively process multiple properties. The first property that has a value is returned. If none of the specified properties exist, null is written.
    
-   Configuration: \`property1|property2|...\`
    
    If the column name contains the \`|\` separator, multiple properties are selected for this item.
    
-   Script configuration:
    
    ```
    "multi":{
        "multi":true
    }
    ```
    
    **Note**
    
    This parameter cannot be configured in the codeless UI.
    
-   Example:
    
    ```
    ## Reader: Raw data in Elasticsearch
    "hits": [
        {
            "_index": "mutiltest_1",
            "_type": "_doc",
            "_id": "v3ShOoMB4GR_1DmrZN22",
            "_score": 1.0,
            "_source": {
                "feature1": "feature1",
                "feature2": [
                    1,
                    2,
                    3
                ],
                "feature3": {
                    "child": "feature3"
                }
            }
        }]
    ## Data Integration Elasticsearch reader plug-in configuration
    "parameter": {
      "column":[
            "feature1,feature2,feature3"
      ],
      "multi":{
            "multi":true
        }
    }
    
    ## Writer result: One row and one column of data
    "feature1,[1,2,3],{"child":"feature3"}"
    ```
    

## **References**

Data Integration supports additional data sources. For more information, see [Data sources and synchronization](/help/en/dataworks/user-guide/supported-data-source-types-and-read-and-write-operations).
