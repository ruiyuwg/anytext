This topic describes how to use the Tair (Enterprise Edition) connector.

## Background information

[Tair (Redis OSS-compatible)](/help/en/redis/product-overview/what-is-apsaradb-for-redis#concept-m3j-s5z-sdb) is a database service that is compatible with the protocols of the open source Redis system. Tair (Redis OSS-compatible) supports a hybrid of memory and hard disks for storage. Tair (Redis OSS-compatible) provides a hot standby architecture to ensure high availability, and uses the scalable cluster architecture to meet business requirements for high throughputs, low-latency operations, and flexible configuration modifications.

The Tair connector supports the following:

**Category**

**Description**

Supported types

Sink table

Running mode

Stream mode is the only supported mode.

Data format

STRING

Unique metrics

-   numBytesSend
    
-   numBytesSendPerSecond
    
-   numRecordsSend
    
-   numRecordsSendPerSecond
    
-   numRecordSendErrors
    
-   currentSendTime
    

**Note**

For more information about the metrics, see [Metrics](/help/en/flink/realtime-flink/user-guide/metrics).

API type

SQL

Data update or deletion in a sink table

Yes.

## Prerequisites

-   A Tair (Enterprise Edition) instance is created. For more information, see [Step 1: Create an instance](/help/en/redis/getting-started/step-1-create-an-apsaradb-for-redis-instance#concept-kqh-vv5-tdb).
    
-   An IP address whitelist is configured for the Tair (Enterprise Edition) instance. For more information, see [Step 2: Configure whitelists](/help/en/redis/getting-started/step-2-configure-whitelists).
    

## Limits

-   Only Realtime Compute for Apache Flink that uses Ververica Runtime (VVR) 6.0.6 or later supports the Tair (Enterprise Edition) connector.
    
-   The Tair (Enterprise Edition) connector does not allow you to configure multiple hosts.
    

## Syntax

Tair (Enterprise Edition) supports all self-developed Tair data structures based on the compatibility with the following Redis data structures: STRING, LIST, SET, HASHMAP, and SORTEDSET.

The following is an example DDL statement.

```
CREATE TABLE tair_table (
  a STRING,
  b STRING,
  PRIMARY KEY (a) NOT ENFORCED -- Required. 
) WITH (
  'connector'= 'tair',
  'host' = '<yourHost>'
);
```

**Note**

Tair is compatible with Redis data structures. For more information about the syntax examples of Redis data structures, see [Tair (Redis OSS-compatible) connector](/help/en/flink/realtime-flink/developer-reference/tair-redis-oss-compatible-connector#concept-2303553).

## Parameters in the WITH clause

**Parameter**

**Description**

**Data type**

**Required**

**Default value**

**Remarks**

connector

The type of the table.

String

Yes

None

The static field value is tair.

host

The endpoint of the Tair server.

String

Yes

None

We recommend that you use an internal endpoint.

**Note**

Public network connections may be unstable due to factors such as network latency and bandwidth limitations.

mode

The data structure of Tair.

STRING

Yes

None

Valid values:

-   string
    
-   list
    
-   set
    
-   hashmap
    
-   sortedset
    
-   tairstring
    
-   tairhash
    
-   tairzset
    
-   tairbloom
    
-   tairdoc
    
-   tairsearch
    
-   tairts
    
-   taircpc
    
-   tairroaring
    
-   tairgis
    
-   tairvector
    

Tair supports Redis data structures and self-developed Tair data structures. For more information about the valid values, see [Data structures supported by an ApsaraDB for Redis sink table](/help/en/flink/realtime-flink/developer-reference/tair-redis-oss-compatible-connector#816dd79034qp4) and [Formats of Tair data structures](#section-ceb-qp3-n9e).

**Note**

-   Only Realtime Compute for Apache Flink that uses VVR 8.0.1 or later supports TairTs, TairCpc, TairRoaring, TairVector, and TairGis.
    
-   Tair sink tables support self-developed Tair data structures. The DDL statement that is used to create a Tair sink table must define the table based on the specified format and a primary key must be specified for the table.
    

port

The port number of the Tair server.

INT

No

6379

N/A.

password

The password that is used to access the Tair database.

String

No

An empty string

An empty string indicates that no verification is performed.

dbNum

The ID of the destination database.

INT

No

0

N/A.

clusterMode

Specifies whether to use the cluster architecture.

BOOLEAN

No

false

Valid values:

-   true: uses the cluster architecture.
    
-   false: The service runs in standalone mode.
    

ignoreDelete

Specifies whether to ignore retraction messages.

BOOLEAN

No

false

Valid values:

-   false: When a retraction message is received, the inserted data and the key of the data are deleted. This is the default value.
    
-   true: When a retraction message is received, the inserted data and the key of the data are retained.
    

expiration

The time-to-live (TTL) that is specified for the keys of the inserted data.

LONG

No

0

The value 0 indicates that the TTL is not configured. If the value of this parameter is greater than 0, the TTL is configured for the key of the inserted data. Unit: milliseconds.

expirationAt

The absolute expiration time that is specified for the keys of the inserted data.

LONG

No

0

Unit: milliseconds. Default value: 0. The default value indicates that no expiration time is specified.

If the value of this parameter is greater than 0 and the expiration parameter is set to 0, an absolute expiration time is specified for the keys of the inserted data.

incrMode

The sink mode of the Tair database.

STRING

No

None

Valid values:

-   None: indicates the insert operation. This is the default value.
    
-   int: indicates the INCRBY operation. The value of INCR is fixed to the value of the incrValue parameter.
    
-   float: indicates the INCRBYFLOAT operation. The value of INCR is fixed to the value of the incrValue parameter.
    
-   dynamic\_int: Represents an incrby operation. The increment value is obtained from the column specified by incrValue.
    
-   dynamic\_float: Represents the incrbyfloat operation, where the increment value is specified in the incrValue column.
    

incrValue

The value of INCR that is determined based on the value of the incrMode parameter.

STRING

No

None

The parameter accepts the following values:

-   If \`incrMode\` is \`None\`, the parameter is not specified.
    
-   If the incrMode parameter is set to int or float, the value of the incrValue parameter is the value of INCR.
    
-   If the incrMode parameter is set to dynamic\_int or dynamic\_float, the value of the incrValue parameter is the name of the column to which the value of INCR belongs in a DDL statement.
    

fieldExpireMode

The expiration mode of the fields in TairHash or skeys in TairTS.

String

No

None

Valid values:

-   None: No expiration time is specified.
    
-   millisecond: A relative expiration time is specified. The expiration time is fixed to the value of the fieldExpireValue parameter.
    
    **Note**
    
    The expiration mode of the skeys in TairTS must be millisecond.
    
-   unixtime: An absolute expiration time is specified. The expiration time is fixed to the value of the fieldExpireValue parameter.
    
-   dynamic\_millisecond: A relative expiration time specified by the column that corresponds to fieldExpireValue.
    
-   dynamic\_unixtime: An absolute expiration time provided by the column specified by fieldExpireValue.
    

fieldExpireValue

The expiration time of the fields in TairHash or skeys in TairTS.

String

No

None

Valid values:

-   If the fieldExpireMode parameter is set to None, no expiration time is specified.
    
-   If the fieldExpireMode parameter is set to millisecond or unixtime, the value of the fieldExpireValue parameter is the expiration time.
    
-   If \`fieldExpireMode\` is \`dynamic\_millisecond\` or \`dynamic\_unixtime\`, \`fieldExpireValue\` is the DDL column name for the time-to-live (TTL).
    

## Data type mappings

**Flink field types**

**Data type of Tair**

VARCHAR

STRING

DOUBLE

DOUBLE

### **Formats of Tair data structures**

**Type**

**Format**

**Commands**

[TairString](/help/en/redis/tairstring-commands#concept-2353550)

If the incrMode parameter is set to None, a DDL statement has two columns.

-   The first column lists keys of the STRING type.
    
-   The second column lists values of the STRING type.
    

```
exset key value
```

If the incrMode parameter is set to int or float, a DDL statement has only one column and the column lists keys of the STRING type.

```
exincrby/exincrbyfloat key incrValue
```

If the incrMode parameter is set to dynamic\_int or dynamic\_float, a DDL statement has two columns.

-   The first column lists keys of the STRING type.
    
-   The second column lists incrValue values of the STRING type.
    

```
exincrby/exincrbyfloat key incrValue
```

[TairHash](/help/en/redis/tairhash-commands#concept-2353551)

If the incrMode parameter is set to None, a DDL statement has three columns.

-   The first column lists keys of the STRING type.
    
-   The second column lists fields of the STRING type.
    
-   The third column lists field values of the STRING type.
    

```
exhset key field value
```

If the incrMode parameter is set to int or float, a DDL statement has two columns.

-   The first column lists keys of the STRING type.
    
-   The second column lists fields of the STRING type.
    

```
 exhincrby/exincrbyfloat key field incrValue
```

If the incrMode parameter is set to dynamic\_int or dynamic\_float, a DDL statement has three columns.

-   The first column lists keys of the STRING type.
    
-   The second column lists fields of the STRING type.
    
-   The third column lists incrValue values of the STRING type that correspond to fields.
    

```
exhincrby/exincrbyfloat key field incrValue
```

[TairZset](/help/en/redis/tairzset-commands#concept-2097605)

If the incrMode parameter is set to None, TairZset supports multi-dimensional data sorting. TairZset lets you sort data of the DOUBLE type from a maximum of 256 dimensions. Therefore, a DDL statement has 3 to 258 columns.

-   The first column lists keys of the STRING type.
    
-   The second column is member and has a data type of STRING.
    
-   The remaining columns list scores of the DOUBLE type.
    

```
exzadd key score member
```

**Note**

If you want to sort data from multiple dimensions, make sure that the score formats of all dimensions are the same.

If the incrMode parameter is set to int or float, a DDL statement has two columns.

-   The first column lists keys of the STRING type.
    
-   The second column lists members of the STRING type.
    

```
exzincyby key member incrValue
```

If the incrMode parameter is set to dynamic\_int or dynamic\_float, a DDL statement has three columns.

-   The first column lists keys of the STRING type.
    
-   The second column lists members of the STRING type.
    
-   The third column lists incrValue values of the STRING type.
    

```
exzincyby key member incrValue
```

[TairBloom](/help/en/redis/tairbloom-commands#concept-2353553)

The incrMode parameter must be set to None.

When data is inserted into a Tair sink table for the first time, a TairBloom key that has a default capacity of 100 elements and an error rate of 0.01 is created. A DDL statement has two columns.

-   The first column lists keys of the STRING type.
    
-   The second column lists items of the STRING type.
    

```
BF.ADD key item
```

[TairDoc](/help/en/redis/tairdoc-commands#concept-2353554)

The incrMode parameter must be set to None. A DDL statement has three columns.

-   The first column lists keys of the STRING type.
    
-   The second column lists paths of the STRING type.
    
-   The third column is of the STRING type and stores JSON data.
    

```
JSON.SET key path json
```

[TairSearch](/help/en/redis/tairsearch-command#task-2193710)

If the incrMode parameter is set to None, a DDL statement has four columns.

-   The first column is the index and has a data type of STRING.
    
-   The second column lists document IDs of the STRING type.
    
-   The third column lists documents of the STRING type. The documents must be in the JSON format.
    
-   The fourth column lists mappings of the STRING type.
    

```
TFT.ADDDOC index document docid
```

**Note**

Before you insert data into a Tair sink table, you must create an index and add a mapping. Sample command:

```
TFT.CREATEINDEX index mappings
```

If the incrMode parameter is set to int or float, a DDL statement has four columns.

-   The first column lists indexes of the STRING type.
    
-   The second column lists document IDs of the STRING type.
    
-   The third column lists fields of the STRING type.
    
-   The fourth column lists mappings of the STRING type.
    

Sample command for document operations:

```
TFT.INCRLONGDOCFIELD/TFT.INCRFLOATDOCFIELD index doc_id field increment
```

**Note**

Before you insert data into a Tair sink table, you must create an index and add a mapping. Sample command:

```
TFT.CREATEINDEX index mappings
```

If the incrMode parameter is set to dynamic\_int or dynamic\_float, a DDL statement has five columns.

-   The first column lists indexes of the STRING type.
    
-   The second column lists document IDs of the STRING type.
    
-   The third column lists fields of the STRING type.
    
-   The fourth column lists mappings of the STRING type.
    
-   The fifth column lists incrValue values of the STRING type.
    

The following commands are used for document operations.

```
TFT.INCRLONGDOCFIELD/TFT.INCRFLOATDOCFIELD index doc_id field increment
```

**Note**

Before you insert data into a Tair sink table, you must create an index and add a mapping. Sample command:

```
TFT.CREATEINDEX index mappings
```

[TairCpc](/help/en/tair/developer-reference/taircpc)

The incrMode parameter must be set to None. A DDL statement has two columns.

-   The first column lists keys of the STRING type.
    
-   The second column lists items of the STRING type.
    

```
CPC.UPDATE key item
```

[TairGis](/help/en/tair/developer-reference/gis#t2219822.html)

The incrMode parameter must be set to None. A DDL statement has three columns.

-   The first column lists keys of the STRING type.
    
-   The second column lists polygon names of the STRING type.
    
-   The third column lists Well-known Text (WKT) values of polygons. The values are of the STRING type.
    

```
GIS.ADD area polygonName polygonWkt
```

[TairRoaring](/help/en/tair/developer-reference/roaring)

The incrMode parameter must be set to None. A DDL statement has three columns.

-   The first column lists keys of the STRING type.
    
-   The second column lists the specified offsets of the BIGINT type.
    
-   The third column lists values of the BIGINT type. Valid values: 0 and 1.
    

```
TR.SETBIT key offset value
```

[Vector](/help/en/redis/developer-reference/tairvector/)

The incrMode parameter must be set to None. A DDL statement has six columns.

-   The first column lists index names of the STRING type.
    
-   The second column lists the primary keys of records. The values are of the STRING type.
    
-   The third column lists vector data of the STRING type.
    
-   The fourth column lists vector dimensions of the INT type.
    
-   The fifth column lists algorithms that are used to build and query indexes. The values are of the STRING type.
    
-   The sixth column lists distance methods that are used to calculate the vector distance. The values are of the STRING type.
    

```
TVS.HSET index_name key VECTOR vector_data
```

**Note**

Before you insert data into a Tair sink table, you must create an index and add a mapping. Sample command:

```
TVS.CREATEINDEX index_name dims algorithm distance_method
```

[TairTs](/help/en/tair/developer-reference/ts)

If the incrMode parameter is set to None, a DDL statement has four columns.

-   The first column lists pkeys of the STRING type. A pkey indicates a group of timelines.
    
-   The second column lists skeys of the STRING type. An skey indicates a timeline.
    
-   The third column lists timestamps of the STRING type.
    
-   The fourth column lists values of the STRING type.
    

```
EXTS.S.RAW_MODIFY Pkey Skey timestamp value
```

If the incrMode parameter is set to float, a DDL statement has three columns.

-   The first column lists pkeys of the STRING type.
    
-   The second column lists skeys of the STRING type.
    
-   The third column lists timestamps of the STRING type.
    

```
EXTS.S.RAW_INCRBY Pkey Skey timestamp incrValue
```

If the incrMode parameter is set to dynamic\_float, a DDL statement has four columns.

-   The first column lists pkeys of the STRING type.
    
-   The second column lists skeys of the STRING type.
    
-   The third column lists timestamps of the STRING type.
    
-   The fourth column lists incrValue values of the STRING type. The incrValue values correspond to the timestamps that are listed in the third column.
    

```
EXTS.S.RAW_INCRBY Pkey Skey timestamp incrValue
```

## Sample code

-   Sample code for inserting data into a Tair sink table in common mode
    
    ```
    CREATE TEMPORARY TABLE datagen_stream (
      v STRING,
      p STRING
    ) WITH (
      'connector' = 'datagen'
    );
    
    CREATE TEMPORARY TABLE tair_output (
      index_name STRING,
      doc_id STRING,
      doc STRING,
      mapping STRING,
      PRIMARY KEY(index_name) NOT ENFORCED
    ) WITH (
      'connector' = 'tair',
      'mode' = 'tairsearch',
      'host' = '${tairHost}',
      'port' = '${tairPort}',
      'password' = '${password}'
    );
    
    INSERT INTO tair_output
    SELECT 'index' as index,v,p,'{"mappings":{"_source":{"enabled":true},"properties":{"product_id":{"type":"keyword","ignore_above":128},"product_name":{"type":"text"}}}}' as mapping
    FROM datagen_stream;
    ```
    
-   Example of inserted data for the incr pattern
    
    ```
    CREATE TEMPORARY TABLE datagen_stream (
      v STRING,
      p STRING
    ) WITH (
      'connector' = 'datagen'
    );
    
    CREATE TEMPORARY TABLE tair_output (
      key STRING,
      step STRING,
      PRIMARY KEY (key) NOT ENFORCED
    ) WITH (
      'connector' = 'tair',
      'mode' = 'tairstring',
      'host' = '${tairHost}',
      'port' = '${tairPort}',
      'password' = '${password}',
      'incrMode' = 'dynamic_float',
      'incrValue' = 'step'
    );
    
    INSERT INTO tair_output
    SELECT *
    FROM datagen_stream;           
    ```
    
    ```
    CREATE TEMPORARY TABLE datagen_stream (
      v STRING,
      p STRING
    ) WITH (
      'connector' = 'datagen'
    );
    
    CREATE TEMPORARY TABLE tair_output (
      key STRING,
      PRIMARY KEY (key) NOT ENFORCED
    ) WITH (
      'connector' = 'tair',
      'mode' = 'tairstring',
      'host' = '${tairHost}',
      'port' = '${tairPort}',
      'password' = '${password}',
      'incrMode' = 'float',
      'incrValue' = '11.11'
    );
    
    INSERT INTO tair_output
    SELECT v
    FROM datagen_stream;
    ```
    
-   Example: Data written to a sink table using the fieldExpire pattern
    
    ```
    CREATE TEMPORARY TABLE datagen_stream (
      v STRING,
      p STRING,
      s STRING
    ) WITH (
      'connector' = 'datagen'
    );
    
    CREATE TEMPORARY TABLE tair_ouput (
    	key STRING,
    	field STRING,
    	value STRING,
    	PRIMARY KEY (key) NOT ENFORCED
    ) WITH (
      'connector' = 'tair',
      'mode' = 'tairhash',
      'host' = '${tairHost}',
      'port' = '${tairPort}',
      'password' = '${password}',
      'fieldExpireMode' = 'millisecond',
      'fieldExpireValue' = '1000'
    );
    
    INSERT INTO tair_output
    SELECT v, p, s
    FROM datagen_stream;
    ```
