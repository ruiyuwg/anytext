This topic describes how to use the INSERT INTO statement to write to one or more sinks in a job.

## **Background information**

The INSERT statement supports SQL hints with the OPTIONS keyword to pass parameters to a sink table. For more information, see [SQL Hints](https://nightlies.apache.org/flink/flink-docs-master/docs/dev/table/sql/queries/hints/).

## Example of writing to a single sink

```
-- Create a source table.
CREATE TEMPORARY TABLE datagen_source (
  name VARCHAR,
  score BIGINT
) WITH (
  'connector' = 'datagen' 
);

-- Create a sink table.
CREATE TEMPORARY TABLE blackhole_sink(
  name VARCHAR,
  score BIGINT
) WITH (
  'connector' = 'blackhole' 
);

-- DML statement
INSERT INTO blackhole_sink SELECT UPPER(name), score FROM datagen_source;
```

## Example of writing to multiple sinks

**Important**

A statement that writes to multiple sinks must start with `BEGIN STATEMENT SET;` and end with `END;`.

This example writes data to two sinks.

```
-- Create a source table.
CREATE TEMPORARY TABLE datagen_source (
  name VARCHAR,
  score BIGINT
) WITH (
  'connector' = 'datagen'
);

-- Create sink table A.
CREATE TEMPORARY TABLE blackhole_sinkA(
  name VARCHAR,
  score BIGINT
) WITH (
  'connector' = 'blackhole' 
);

-- Create sink table B.
CREATE TEMPORARY TABLE blackhole_sinkB(
  name VARCHAR,
  score BIGINT
) WITH (
  'connector' = 'blackhole' 
);

-- DML statement
BEGIN STATEMENT SET;      -- Required for writing to multiple sinks.
INSERT INTO blackhole_sinkA 
  SELECT UPPER(name), sum(score) 
  FROM datagen_source 
  GROUP BY UPPER(name);
INSERT INTO blackhole_sinkB 
  SELECT LOWER(name), max(score) 
  FROM datagen_source 
  GROUP BY LOWER(name);
END;      -- Required for writing to multiple sinks.
```
