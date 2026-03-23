This topic describes how to use the TSDB for InfluxDB® connector.

## Background information

TSDB for InfluxDB® is a time series database that handles write and query loads. You can use it to store and analyze large-scale time series data in real time, such as data from DevOps monitoring, application metrics, and Internet of Things (IoT) sensors. For more information about TSDB for InfluxDB®, see [What is TSDB for InfluxDB®?](/help/en/time-series-database/latest/introduction-to-tsdb-for-influxdb#topic-2003419).

The InfluxDB connector supports the following features.

**Category**

**Details**

Supported type

Sink table

Running mode

Streaming mode

Data format

Point

Specific monitoring metrics

-   numRecordsOut
    
-   numRecordsOutPerSecond
    
-   currentSendTime
    

**Note**

For more information about the metrics, see [Metric descriptions](/help/en/flink/realtime-flink/user-guide/metrics).

API type

SQL

Supports data updates or deletions in sink tables

No

## Prerequisites

An InfluxDB database is created. For more information, see [Manage user accounts and databases](/help/en/time-series-database/latest/manage-user-accounts-and-databases).

## Limits

The TSDB for InfluxDB® connector is supported only in Flink compute engines that use Ververica Runtime (VVR) 2.1.5 or later.

## Syntax

```
CREATE TABLE stream_test_influxdb(
 `metric` VARCHAR,
 `timestamp` BIGINT,
 `tag_value1` VARCHAR,
 `field_fieldValue1` DOUBLE
) WITH (
  'connector' = 'influxdb',
  'url' = 'http://service.cn.influxdb.aliyuncs.com:****',
  'database' = '<yourDatabaseName>',
  'username' = '<yourDatabaseUserName>',
  'password' = '<yourDatabasePassword>',
  'batchSize' ='300',
  'retentionPolicy' = 'autogen',
  'ignoreErrorData' = 'false'
);
```

Default format for table creation:

-   Column 0: \`metric\` (VARCHAR). Required.
    
-   Column 1: \`timestamp\` (BIGINT). Required. The unit is milliseconds.
    
-   Column 2: \`tag\_value1\` (VARCHAR). Required. You must specify at least one tag.
    
-   Column 3: \`field\_fieldValue1\` (DOUBLE). Required. You must specify at least one field.
    
    To write multiple \`field\_fieldValue\` values, use the following format.
    
    ```
    field_fieldValue1 type,
    field_fieldValue2 type,
    ...  
    field_fieldValueN type
    ```
    
    Example:
    
    ```
    field_fieldValue1 DOUBLE,
    field_fieldValue2 INTEGER,
    ...   
    field_fieldValueNINTEGER
    ```
    

**Note**

The sink table supports only the metric, timestamp, tag\_\*, and field\_\* fields. Other fields are not allowed.

## WITH parameters

**Parameter**

**Description**

**Required**

**Remarks**

connector

The type of the sink table.

Yes

The value must be \`influxdb\`.

url

The service endpoint of the InfluxDB database.

Yes

The endpoint of the InfluxDB database in a Virtual Private Cloud (VPC). Examples: https://localhost:8086 or http://localhost:3242.

HTTP and HTTPS are supported.

database

The name of the InfluxDB database.

Yes

Example: db-flink.

username

The username for the database.

Yes

The user must have write permissions on the destination database. For more information, see [Manage user accounts and databases](/help/en/time-series-database/latest/manage-user-accounts-and-databases).

password

The password for the database.

Yes

For more information about the password, see [Manage user accounts and databases](/help/en/time-series-database/latest/manage-user-accounts-and-databases).

batchSize

The number of records to commit in a batch.

No

By default, 300 records are submitted per batch.

retentionPolicy

The data retention policy.

No

If you do not specify this parameter, the default retention policy \`autogen\` of the database is used. For more information about retention policies, see [Manage user accounts and databases](/help/en/time-series-database/latest/manage-user-accounts-and-databases).

ignoreErrorData

Specifies whether to ignore abnormal data.

No

Valid values:

-   true: Ignores abnormal data.
    
-   false (default): Does not ignore abnormal data.
    

## Type mapping

**InfluxDB field type**

**Flink field type**

BOOLEAN

BOOLEAN

INT

INT

BIGINT

BIGINT

FLOAT

FLOAT

DECIMAL

DECIMAL

DOUBLE

DOUBLE

DATE

DATE

TIME

TIME

TIMESTAMP

TIMESTAMP

VARCHAR

VARCHAR

## Example

```
CREATE TEMPORARY TABLE datahub_source(
 `metric` VARCHAR,
 `timestamp` BIGINT,
 `filedvalue` DOUBLE,
 `tagvalue` VARCHAR
) WITH (
  'connector' = 'datagen',
  'fields.metric.length' = '3',
  'fields.tagvalue.length' = '3',
  'fields.timestamp.min' = '1587539547000',
  'fields.timestamp.max' = '1619075547000',
  'fields.filedvalue.min' = '1',
  'fields.filedvalue.max' = '100000',
  'rows-per-second' = '50'
);

CREATE TEMPORARY TABLE influxdb_sink(
  `metric` VARCHAR,
  `timestamp` BIGINT,
  `field_fieldValue1` DOUBLE,
  `tag_value1` VARCHAR
) WITH (
  'connector' = 'influxdb',
  'url' = 'https://***********.influxdata.tsdb.aliyuncs.com:****',
  'database' = '<yourDatabaseName>',
  'username' = '<yourDatabaseUserName>',
  'password' = '<yourDatabasePassword>',
  'batchSize' ='100',
  'retentionPolicy' = 'autogen',
  'ignoreErrorData' = 'false'
);

INSERT INTO influxdb_sink
SELECT 
  `metric`,
  `timestamp`,
  `filedvalue`,
  `tagvalue`
FROM datahub_source;
```
