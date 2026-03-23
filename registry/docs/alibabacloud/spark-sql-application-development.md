AnalyticDB for MySQL allows you to submit Spark SQL applications in the console to perform data analysis, without the need to write JAR packages or Python code. This topic describes the sample code and statement types for compiling Spark SQL applications in AnalyticDB for MySQL.

## Development tool

You can use the SQL editor to create and run Spark SQL applications. For more information, see [SQL editor](/help/en/analyticdb/analyticdb-for-mysql/user-guide/sql-editor/#concept-2280431).

## Sample code

In this example, a Spark SQL application is compiled to read data from Object Storage Service (OSS).

```
-- Here is the spark conf.

conf spark.driver.resourceSpec=medium;
conf spark.executor.resourceSpec=medium;
conf spark.app.name=Spark SQL Test;
conf spark.adb.connectors=oss;

-- Add jars.
add jar oss://example/jars/hive-hcatalog-core-2.3.9.jar;
 
-- Here are your sql statements.
CREATE DATABASE IF NOT EXISTS testdb LOCATION 'oss://<bucket_name>/test';

CREATE EXTERNAL TABLE if not EXISTS `testdb`.`catalog_json_test` (
  `a` string COMMENT 'from deserializer',  
  `b` string COMMENT 'from deserializer')
ROW format serde 
'org.apache.hive.hcatalog.data.JsonSerDe'
LOCATION 
'oss://<bucket_name>/test/catalog_json_test/';

INSERT INTO `testdb`.`catalog_json_test` values('key','value');

SELECT * FROM `testdb`.`catalog_json_test`;
```

## Statement types

### CONF statements

-   CONF statements are used to configure the Spark engine. In most cases, CONF statements are placed before a set of SQL statements.
    
-   Each `CONF` statement specifies the value of a Spark parameter. Each individual CONF statement must be separated by a semicolon (;).
    
-   Keys and values in `CONF` statements cannot be enclosed in single quotation marks (') or double quotation marks (").
    
-   For information about the parameters that are supported by `CONF` statements, see [Conf configuration parameters](/help/en/analyticdb/analyticdb-for-mysql/user-guide/spark-application-configuration-parameters#concept-2280831).
    

### ADD JAR statements

-   ADD JAR statements are used to load JAR packages that are required for running Spark SQL applications, such as the JAR packages of user-defined functions (UDFs) and JAR packages of various data source connectors. JAR packages must be stored in OSS. In most cases, ADD JAR statements are placed before a set of SQL statements.
    
-   Each `ADD JAR` statement specifies the OSS path of a JAR package. Strings in the path cannot be enclosed in single quotation marks (') or double quotation marks ("). Each individual `ADD JAR` statement must be separated by a semicolon (;).
    

### SQL statements

Spark SQL supports DDL, DML, and DQL statements. For more information, see [Use Spark SQL to create a C-Store table](/help/en/analyticdb/analyticdb-for-mysql/user-guide/spark-sql-syntax-for-creating-tables#concept-2282990).

Examples: SELECT, INSERT, and SHOW DATABASE.
