The ALTER ETL statement modifies ETL tasks with a `**RUNNING**` status.

## **Engine and version**

ALTER ETL applies only to the stream engine. Version 3.1.8 or later is required.

**Note**

You can view and [update the minor version](/help/en/lindorm/user-guide/upgrade-the-minor-engine-version-of-an-apsaradb-for-lindorm-instance) in the console.

## **Syntax**

```
alter_etl_statement ::= ALTER ETL etl_name
                        [WITH etl_properties]
                        AS INSERT INTO [[catalog_name.]db_name.]table_name column_list 
                        select_statement

etl_properties       ::= '(' property_definition (',' property_definition)* ')'
property_definition  ::= property_name '=' property_value  
column_list          ::= '(' column_name (',' column_name)* ')'
```

## **Usage notes**

### **ETL name (etl\_name)**

**Required**. Specifies the ETL task to modify.

### **ETL properties (etl\_properties)**

Use the `WITH` keyword to add the following ETL properties:

**Important**

Enclose property names in backticks (\`) and property values in single quotation marks ('). For example, `` `parallelism` = '2' ``.

**Property**

**Data type**

**Description**

**Default value**

parallelism

INTEGER

The degree of parallelism for the task.

1

sink.ignore-update-before

BOOLEAN

Specifies whether to ignore **\-U** during the sink operation.

false

sink.ignore-delete

BOOLEAN

Specifies whether to ignore **\-D** during the sink operation.

false

sink.null-mode

STRING

Specifies whether to write null values during the sink operation. Valid values:

-   NO\_OP: Retains and writes the null values from the source data.
    
-   SKIP: Skips and does not write null values.
    

NO\_OP

udf.xxxx

STRING

Configures a user-defined function (UDF). You must upload the UDF JAR file before you use this property. The parameter uses the format `udf.<udfFunction> = <jarName>#<className>`, where \`udfFunction\` is the function name, \`jarName\` is the JAR package name, and \`className\` is the class name.

None

stream.xxx

ANY

A parameter for the stream engine job. For example, `execution.checkpointing.interval`.

None

### **Specify the sink table**

**Parameter**

**Required**

**Description**

catalog\_name

No

The catalog of the sink table.

db\_name

No

The database where the sink table is located.

table\_name

Yes

The name of the sink table.

column\_name

Yes

The column name in the sink table.

### **SQL search statement (select\_statement)**

Specifies the new SQL search statement.

## **Examples**

Assume that the source table `source` and the sink table `sink` in LindormTable have the following structures:

```
-- Source table: source
CREATE TABLE source(p1 INT, c1 DOUBLE, PRIMARY KEY(p1));

-- Sink table: sink
CREATE TABLE sink(p1 INT, c1 DOUBLE, PRIMARY KEY(p1));
```

The following statement creates an ETL task named filter2 and adds properties.

```
CREATE ETL IF NOT EXISTS filter2
WITH (
`parallelism` = '2',
`stream.execution.checkpointing.interval` = '30000'
)
AS
  INSERT INTO `lindorm_table`.`default`.`sink` (p1, c1)
  SELECT p1, c1 FROM `lindorm_table`.`default`.`source` WHERE c1 > 10;
```

### **Modify ETL task properties**

The following statement changes the `parallelism` property to `4`.

```
ALTER ETL filter2
WITH (`parallelism` = '4')
AS
  INSERT INTO `lindorm_table`.`default`.`sink` (p1, c1)
  SELECT p1, c1 FROM `lindorm_table`.`default`.`source`;
```

**Verify the result**

Run the `DESC ETL filter2;` statement to view the `ATTRIBUTES` of `filter2` and confirm that the modification was successful.
