This topic describes how to use the Faker connector to generate simulated data.

## Background information

The Faker connector is a built-in connector that generates test data based on Java Faker expressions for each field in a table. You can use the Faker connector to obtain test data for verifying business logic during development and testing.

The Simulated Data Generator connector supports the following.

**Category**

**Details**

Supported types

Source tables and dimension tables

Running modes

Batch and stream modes

Data format

Not applicable

Specific monitoring metrics

None

API type

SQL

Supports data updates or deletions in sink tables

Not applicable

## Prerequisites

None

## Limits

-   The Faker connector is supported only in Flink compute engine versions VVR 4.0.12 and later.
    
-   Only the following data types are supported: CHAR(n), VARCHAR(n), STRING, TINYINT, SMALLINT, INT, BIGINT, FLOAT, DOUBLE, DECIMAL, BOOLEAN, TIMESTAMP, ARRAY, MAP, MULTISET, and ROW.
    
-   When you use a Faker table as a dimension table in a JOIN operation, the connector does not perform an actual lookup. Instead, it generates the result directly based on the lookup key from the source table.
    

## Syntax

```
CREATE TABLE faker_source (
  `name` STRING,
  `age` INT
) WITH (
  'connector' = 'faker',
  'fields.name.expression' = '#{superhero.name}',
  'fields.age.expression' = '#{number.numberBetween ''0'',''1000''}'
);
```

## WITH parameters

**Category**

**Parameter**

**Description**

**Data type**

**Required**

**Default value**

**Notes**

General

connector

Table type.

String

Yes

None

The value must be \`faker\`.

fields.<field>.expression

The Java Faker expression that generates the value for the field.

String

Yes

None

For more information, see [Field expressions](#section-p2f-odf-ccf).

fields.<field>.null-rate

The probability that the field is null.

Float

No

0.0

None

fields.<field>.length

The size of the collection for ARRAY, MAP, or MULTISET types.

Integer

No

1

None

Source table specific

number-of-rows

The number of data rows to generate.

Integer

No

\-1

If this parameter is set, the source table is bounded. Otherwise, the source table is unbounded.

rows-per-second

The rate at which data is generated.

Integer

No

10000

The default value is 10,000 rows/second.

## Examples

Dimension table example

```
CREATE TEMPORARY TABLE datagen_source (
  `character_id` INT,
  `location` STRING,
  `datagen_name` STRING,
  `user_fullname` ROW<first_name STRING, last_name STRING>,
  `user_data` ARRAY<STRING>,
  `user_score` Map<STRING, INT>,
  `user_books` MULTISET<STRING>,
  `proctime` AS PROCTIME()
) WITH (
  'connector' = 'faker',
  'fields.character_id.expression' = '#{number.numberBetween ''0'',''10000''}',
  'fields.location.expression' = '#{harry_potter.location}',
  'fields.datagen_name.expression' = '#{superhero.name}',
  'fields.user_fullname.first_name.expression' = '#{superhero.prefix}',
  'fields.user_fullname.last_name.expression' = '#{superhero.suffix}',
  'fields.user_data.expression' = '#{harry_potter.character}',
  'fields.user_data.length' = '2',
  'fields.user_score.key.expression' = '#{harry_potter.character}',
  'fields.user_score.value.expression' = '#{number.numberBetween ''10'',''100''}',
  'fields.user_score.length' = '2',
  'fields.user_books.expression' = '#{book.title}',
  'fields.user_books.length' = '2',
  'number-of-rows' = '5'
);

CREATE TEMPORARY TABLE faker_dim (
  `character_id` INT,
  `faker_name` STRING
) WITH (
  'connector' = 'faker',
  'fields.character_id.expression' = '#{number.numberBetween ''0'',''100''}',
  'fields.faker_name.expression' = '#{harry_potter.characters}'
);
    
SELECT
  l.character_id,
  l.location,
  l.datagen_name,
  l.user_fullname,
  l.user_data,
  l.user_score,
  l.user_books,
  c.faker_name
FROM datagen_source AS l
JOIN faker_dim FOR SYSTEM_TIME AS OF proctime AS c
ON l.character_id = c.character_id;
```

## Field expressions

-   How it works
    
    When you use the Faker connector, you must provide a specific expression in the WITH clause for each field defined in the Data Definition Language (DDL) statement. The expression must be in the format 'fields.<field>.expression' = '#{className.methodName ''parameter'', ...}'. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    field
    
    The name of a field in the DDL statement.
    
    className
    
    The name of a Faker class.
    
    Java Faker provides about [80](https://github.com/DiUS/java-faker/#fakers) Faker classes to generate the field expressions that you need. You can select a class as needed.
    
    **Note**
    
    Faker class names are not case-sensitive.
    
    methodName
    
    The name of a method.
    
    **Note**
    
    Method names are not case-sensitive.
    
    parameter
    
    The input parameters of a method.
    
    **Note**
    
    -   Each input parameter must be enclosed in two single quotation marks ('').
        
    -   Separate multiple parameters with commas (,).
        
    
-   Example
    
    This section uses the expression for the \`age\` field from the [Syntax](#section-gg5-xi6-rkm) section as an example: 'fields.age.expression' = '#{number.numberBetween ''0'',''1000''}'. The following steps describe how to create a valid SQL expression for a DDL field using the Java Faker API documentation.
    
    1.  In the [Java Faker API documentation](http://dius.github.io/java-faker/apidocs/index.html), find the Number class.![Number类](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4613039461/p406960.png)
        
    2.  In the Number class, find the numberBetween method and view its description.![numberBetween](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4613039461/p406962.png)
        
        The numberBetween method returns a value within a specified number range.
        
    3.  Based on the class name \`Number\`, the method name \`numberBetween\`, and the input parameters \`0\` and \`1000\`, the SQL expression for the \`age\` field is created as follows: 'fields.age.expression' = '#{number.numberBetween ''0'',''1000''}'.
        
        This expression generates values for the \`age\` field that are between 0 and 1000.
