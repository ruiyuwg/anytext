A job lets you use open-source Flink SQL syntax to implement stream computing logic, such as filtering, transforms, enhancements, and aggregations. The job then writes the results to Lindorm.

## **Engine and version**

The CREATE JOB statement applies only to the stream engine. Version 3.1.8 or later is required.

**Note**

You can check the engine version and perform a [minor version update](/help/en/lindorm/user-guide/upgrade-the-minor-engine-version-of-an-apsaradb-for-lindorm-instance) in the console.

## **Syntax**

```
delimiter $$
create_job_statement ::= CREATE JOB job_name
                          '('
                              flink_sqls
                          ')'
$$
delimiter ;
```

## **Usage notes**

### **Flink job name (**job\_name**)**

**Required**. The Flink job name must meet the following requirements:

-   It can contain letters, numbers, periods (.), hyphens (-), and underscores (\_).
    
-   It cannot start with a period (.) or a hyphen (-).
    
-   The length must be from 1 to 255 characters.
    

### **Flink SQL statements (****flink\_sqls****)**

**Required**. These statements define the computation logic. For more information about the syntax, see the [Flink community documentation](https://nightlies.apache.org/flink/flink-docs-release-1.16/zh/docs/dev/table/overview/).

## **Example**

This example prints randomly generated data.

```
delimiter $$
CREATE JOB datagen_job (
  SET 'parallelism.default' = '6';
  CREATE TABLE datagen (
    f_sequence INT,
    f_random INT,
    f_random_str STRING,
    ts AS localtimestamp,
    WATERMARK FOR ts AS ts
  ) WITH (
    'connector' = 'datagen',
    -- optional options --
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
)
$$
delimiter ;
```

**Verify the results**

You can execute the `SHOW JOBS;` statement to verify that the job was created.
