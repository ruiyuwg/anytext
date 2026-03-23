The DESCRIBE statement displays the details of a Flink job.

## **Engine and version**

The DESCRIBE statement applies only to the stream engine and requires version 3.1.8 or later.

**Note**

You can use the console to view the engine version and perform a [minor version update](/help/en/lindorm/user-guide/upgrade-the-minor-engine-version-of-an-apsaradb-for-lindorm-instance).

## **Syntax**

```
describe_statement ::= { DESCRIBE | DESC } name
```

## **Usage notes**

**name** is the name of the Flink job. You can use the [SHOW JOBS](/help/en/lindorm/user-guide/show-jobs) statement to view the Flink jobs in the current resource group.

## **Examples**

Display the details of the `datagen_job` job.

```
DESC datagen_job \G;
```

**Note**

You can add `\G` to display the results in a vertical format for better readability.

Output:

```
*************************** 1. row ***************************
       Query ID: datagen_job
         Job ID: 0021dcbf7633ed1b4c5a64a59591****
         Status: RUNNING
   Is Stoppable: false
     Start time: 1753952195254
       End time: -1
       Duration: 61348039
Max Parallelism: -1
        DelayMs: -1.0
            Sql: 
  SET 'parallelism.default' = '6';
  CREATE TABLE datagen (
    f_sequence INT,
    f_random INT,
    f_random_str STRING,
    ts AS localtimestamp,
    WATERMARK FOR ts AS ts
  ) WITH (
    'connector' = 'datagen',
    
    'rows-per-second'='5',
    'fields.f_sequence.kind'='sequence',
    'fields.f_sequence.start'='1',
    'fields.f_sequence.end'='50000000',
    'fields.f_random.min'='1',
    'fields.f_random.max'='500',
    'fields.f_random_str.length'='10'
  );

  CREATE TABLE print_table (
    f_sequence INT,
    f_random INT,
    f_random_str STRING
    ) WITH (
    'connector' = 'print'
  );

  INSERT INTO print_table select f_sequence,f_random,f_random_str from datagen;
```
