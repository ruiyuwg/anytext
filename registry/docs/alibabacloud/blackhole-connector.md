This topic describes how to use the Blackhole connector.

## Background information

The Blackhole connector is used for deployment debugging and can receive all input data records. If an error is returned when you create a sink table that uses another connector type, but you cannot determine whether the error is caused by a system error or an invalid configuration of a parameter in the WITH clause of the sink table, you can change the value of the connector parameter to blackhole and click **Validate** in the upper-right corner of the Drafts tab. If no error is returned, the system is normal. You must check the configuration of parameters in the WITH clause.

The Blackhole connector can be used in the following debugging scenarios:

-   Check whether performance consumption occurs when a deployment is in the RUNNING state. This helps reduce the impact on performance consumption when you insert data into a table.
    
-   Check whether the output data of user-defined functions (UDFs) is valid. You can view the output data of UDFs by using the Blackhole connector. If you use the Blackhole connector, you do not need to use a physical table to check whether the output data of UDFs is valid.
    

The following table describes the capabilities supported by the Blackhole connector.

**Item**

**Description**

Table type

Sink table

Running mode

Batch mode and streaming mode

Data format

N/A

Metric

N/A

API type

SQL API

Data update or deletion in a sink table

Supported

## Limits

Only Realtime Compute for Apache Flink that uses Ververica Runtime (VVR) 2.0.0 or later supports the Blackhole connector.

## Syntax

```
CREATE TABLE blackhole_sink(
  name VARCHAR,
  score BIGINT
) WITH (
  'connector' = 'blackhole'
);
```

You can also create a Blackhole sink table by using the `LIKE` clause based on the definition of an existing table. Sample statement:

```
CREATE TABLE blackhole_sink WITH ('connector' = 'blackhole')
LIKE table_source (EXCLUDING ALL);
```

## Parameters in the WITH clause

**Parameter**

**Description**

**Data type**

**Required**

**Default value**

**Remarks**

connector

The type of the sink table.

STRING

Yes

No default value

Set the value to `blackhole`.

## Sample code

```
CREATE TEMPORARY TABLE table_source(
  name VARCHAR,
  score BIGINT
) WITH (
  ...
);

CREATE TEMPORARY TABLE blackhole_sink(
  name VARCHAR,
  score BIGINT
) WITH (
  'connector' = 'blackhole'
);

INSERT INTO blackhole_sink SELECT * from table_source;
```
