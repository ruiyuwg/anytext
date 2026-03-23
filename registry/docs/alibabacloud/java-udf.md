This topic describes how to write and use a user-defined function (UDF).

## **Background information**

StarRocks 2.2.0 and later support UDFs written in Java.

StarRocks 3.0 and later support global UDFs. Simply add the `GLOBAL` keyword to SQL statements, such as CREATE, SHOW, and DROP, to make the SQL statements globally take effect. You do not need to execute the SQL statements for each database one by one. You can configure UDFs based on your business scenarios to extend the function capabilities of StarRocks.

StarRocks supports the following types of UDFs:

-   User-defined scalar functions (scalar UDFs)
    
-   User-defined aggregate functions (UDAFs)
    
-   User-defined window functions (UDWFs)
    
-   User-defined table-valued functions (UDTFs)
    

## Prerequisites

You must make sure that the following requirements are met before you use the Java UDF feature of StarRocks:

-   Install Apache Maven for creating and writing related Java projects.
    
-   Install Java Development Kit (JDK) 1.8 on the server.
    
-   Enable the UDF feature. In the FE section on the **Instance Configuration** tab of the details page of your EMR Serverless StarRocks instance, set the `enable_udf` parameter to `TRUE` and then restart the instance for the configuration to take effect.
    

## Mappings of data types

**SQL type**

**Java type**

BOOLEAN

java.lang.Boolean

TINYINT

java.lang.Byte

SMALLINT

java.lang.Short

INT

java.lang.Integer

BIGINT

java.lang.Long

FLOAT

java.lang.Float

DOUBLE

java.lang.Double

STRING/VARCHAR

java.lang.String

## Develop and use a UDF

You must create a Maven project and write the corresponding features in Java.

### Step 1: Create a Maven project

Create a Maven project with the following basic directory structure:

```
project
|--pom.xml
|--src
|  |--main
|  |  |--java
|  |  |--resources
|  |--test
|--target
```

### Step 2: Add dependencies

Add the following dependencies to the pom.xml file:

```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.example</groupId>
    <artifactId>udf</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
    </properties>

    <dependencies>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
            <version>1.2.76</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-dependency-plugin</artifactId>
                <version>2.10</version>
                <executions>
                    <execution>
                        <id>copy-dependencies</id>
                        <phase>package</phase>
                        <goals>
                            <goal>copy-dependencies</goal>
                        </goals>
                        <configuration>
                            <outputDirectory>${project.build.directory}/lib</outputDirectory>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-assembly-plugin</artifactId>
                <version>3.3.0</version>
                <executions>
                    <execution>
                        <id>make-assembly</id>
                        <phase>package</phase>
                        <goals>
                            <goal>single</goal>
                        </goals>
                    </execution>
                </executions>
                <configuration>
                    <descriptorRefs>
                        <descriptorRef>jar-with-dependencies</descriptorRef>
                    </descriptorRefs>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

### Step 3: Develop a UDF

You must develop a UDF in Java.

#### Develop a scalar UDF

You can use scalar UDFs to perform operations on a single row of data and generate a single row of results. When you use scalar UDFs to query data, each row of data will eventually appear in the result set by row. Typical scalar UDFs include `UPPER`, `LOWER`, `ROUND`, and `ABS`.

The following example shows how to extract JSON data. For example, the value of a field in JSON data may be a JSON string instead of a JSON object. In this case, if you want to extract the JSON string, nested calling of the function `GET_JSON_STRING` in the SQL statement is required, which is `GET_JSON_STRING(GET_JSON_STRING('{"key":"{\\"k0\\":\\"v0\\"}"}', "$.key"), "$.k0")`.

To simplify the SQL statement, you can develop a UDF to directly extract the JSON string, such as `MY_UDF_JSON_GET('{"key":"{\\"k0\\":\\"v0\\"}"}', "$.key.k0")`.

```
package com.starrocks.udf.sample;
import com.alibaba.fastjson.JSONPath;

public class UDFJsonGet {
    public final String evaluate(String jsonObj, String key) {
        if (obj == null || key == null) return null;
        try {
            // The JSONPath library can be fully expanded, even if the value of a field is a JSON string.
            return JSONPath.read(jsonObj, key).toString();
        } catch (Exception e) {
            return null;
        }
    }
}
```

User-defined classes must implement the following method.

**Note**

The data types of the request parameters and response parameters in the method must be the same as those declared in the `CREATE FUNCTION` statement in Step 6, and the data type mappings between parameters in the method and parameters declared in the CREATE FUNCTION statement must conform to [Mappings of data types](#8d87bd3839te8).

**Method**

**Description**

TYPE1 evaluate(TYPE2, ...)

The `evaluate` method is the invocation entry point of a UDF and must be a public member method.

#### Develop a UDAF

You can use UDAFs to perform operations on multiple rows of data and generate a single row of results. Typical UDAFs include `SUM`, `COUNT`, `MAX`, and `MIN`. These functions can be used to aggregate multiple rows of data in each GROUP BY group and generate a single row of results.

In the following example, the function `MY_SUM_INT` is used. Different from the built-in function `SUM` whose return value is of the BIGINT data type, the data types of the input parameters and response parameters of the function `MY_SUM_INT` are INT.

```
package com.starrocks.udf.sample;

public class SumInt {
    public static class State {
        int counter = 0;
        public int serializeLength() { return 4; }
    }

    public State create() {
        return new State();
    }

    public void destroy(State state) {
    }

    public final void update(State state, Integer val) {
        if (val != null) {
            state.counter+= val;
        }
    }

    public void serialize(State state, java.nio.ByteBuffer buff) {
        buff.putInt(state.counter);
    }

    public void merge(State state, java.nio.ByteBuffer buffer) {
        int val = buffer.getInt();
        state.counter += val;
    }

    public Integer finalize(State state) {
        return state.counter;
    }
}
```

User-defined classes must implement the following methods.

**Note**

The data types of the input parameters and response parameters in the methods must be the same as those declared in the `CREATE FUNCTION` statement in Step 6, and the data type mappings between parameters in the methods and parameters declared in the CREATE FUNCTION statement must conform to [Mappings of data types](#8d87bd3839te8).

**Method**

**Description**

State create()

Create a State.

void destroy(State)

Destroy a State.

void update(State, ...)

Update a State. The first parameter is State, and the remaining ones are the input parameters declared by the function. You can specify either a single input parameter or multiple ones.

void serialize(State, ByteBuffer)

Serialize a State.

void merge(State, ByteBuffer)

Merge and deserialize a State.

TYPE finalize(State)

Use a State to obtain the final result of the function.

When you develop a UDAF, you must use the buffer class `java.nio.ByteBuffer` to save and represent intermediate results and use the local variable `serializeLength` to specify the serialized length of the intermediate results.

**Class and local variable**

**Description**

java.nio.ByteBuffer()

A buffer class used to save intermediate results. Due to the fact that intermediate results are serialized and deserialized when they are transmitted between different execution nodes, you must use serializeLength to specify the serialized length of the intermediate results.

serializeLength()

The length of the intermediate results after serialization. Unit: bytes. The data type of serializeLength is fixed to INT. In the example, `State { int counter = 0; public int serializeLength() { return 4; }}` contains the description of the intermediate results after serialization. The data type of the intermediate results is INT, and the serialized length of the intermediate results is 4 bytes. You can adjust the data type and length based on your business requirements. For example, if you want the data type of the intermediate results after serialization to be LONG and the serialized length of the intermediate results to be 8 bytes, use `State { long counter = 0; public int serializeLength() { return 8; }}`.

**Note**

Take note of the following items related to `java.nio.ByteBuffer` when serialization is performed:

-   You cannot use the remaining() method of ByteBuffer to deserialize a State.
    
-   You cannot call the clear() method in ByteBuffer.
    
-   The value of `serializeLength` must be consistent with the length of the data that is actually written. Otherwise, incorrect results may be obtained during serialization and deserialization.
    

#### Develop a UDWF

UDWF is the abbreviation for user-defined window function. Different from a common UDAF, a UDWF can be used to perform calculation for a set of rows (a window) and return a result for each row. In most cases, a UDWF contains an `OVER` clause that can be used to split data rows into multiple groups. The UDWF performs calculation based on the group (a window) in which each row of data resides and returns a result for each row.

In the following example, the function `MY_WINDOW_SUM_INT` is used. Different from the built-in function `SUM` whose return value is of the BIGINT data type, the data types of the input parameters and response parameters of the function `MY_WINDOW_SUM_INT` can be INT.

```
package com.starrocks.udf.sample;

public class WindowSumInt {    
    public static class State {
        int counter = 0;
        public int serializeLength() { return 4; }
        @Override
        public String toString() {
            return "State{" +
                    "counter=" + counter +
                    '}';
        }
    }

    public State create() {
        return new State();
    }

    public void destroy(State state) {

    }

    public void update(State state, Integer val) {
        if (val != null) {
            state.counter+=val;
        }
    }

    public void serialize(State state, java.nio.ByteBuffer buff) {
        buff.putInt(state.counter);
    }

    public void merge(State state, java.nio.ByteBuffer buffer) {
        int val = buffer.getInt();
        state.counter += val;
    }

    public Integer finalize(State state) {
        return state.counter;
    }

    public void reset(State state) {
        state.counter = 0;
    }

    public void windowUpdate(State state,
                            int peer_group_start, int peer_group_end,
                            int frame_start, int frame_end,
                            Integer[] inputs) {
        for (int i = (int)frame_start; i < (int)frame_end; ++i) {
            state.counter += inputs[i];
        }
    }
}
```

User-defined classes must implement the methods required by UDAFs and the windowUpdate() method. UDWFs are special UDAFs.

**Note**

The data types of the request parameters and response parameters in the method must be the same as those declared in the `CREATE FUNCTION` statement in Step 6, and the data type mappings between parameters in the method and parameters declared in the CREATE FUNCTION statement must conform to [Mappings of data types](#8d87bd3839te8).

##### **Other methods that need to be implemented**

**Method**

**Description**

`void windowUpdate(State state, int, int, int , int, ...)`

Update the window data. For more information about UDWFs, see [Window\_function](https://docs.starrocks.io/docs/sql-reference/sql-functions/Window_function/). When you enter a row of data, the corresponding window information is obtained to update the intermediate result.

-   `peer_group_start`: Specifies the start of the current partition.
    
    Partition: You can use PARTITION BY in an OVER clause to specify the partition key column. Rows with the same partition key column value are considered to be in the same partition.
    
-   `peer_group_end`: Specifies the end of the current partition.
    
-   `frame_start`: Specifies the start of the current window frame.
    
    Window frame: The window frame clause specifies the range of rows on which a window function operates. The current row is used as a reference and a certain number of rows before and after the current row are the objects on which a window function operates. For example, ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING indicates that the operation range is the current row, the row before the current row, and the row after the current row.
    
-   `frame_end`: Specifies the end of the current window frame.
    
-   `inputs`: Specifies the input data in a window. The input data is a wrapper class array. The wrapper class must correspond to the data type of the input data. In this example, the data type of the input data is INT. Therefore, the wrapper class array is Integer\[\].
    

#### Develop a UDTF

A UDTF can be used to read a row of data and generate multiple values that can be considered as a table. UDTFs are commonly used to implement row-to-column conversion.

**Note**

UDTFs support only returning of multiple rows in a single column.

In the following example, the function `MY_UDF_SPLIT` is used. The function `MY_UDF_SPLIT` supports splitting strings by using a space as the delimiter. The data types of the input parameters and response parameters are STRING.

```
package com.starrocks.udf.sample;

public class UDFSplit{
    public String[] process(String in) {
        if (in == null) return null;
        return in.split(" ");
    }
}
```

User-defined classes must implement the following method.

**Note**

The data types of the request parameters and response parameters in the method must be the same as those declared in the `CREATE FUNCTION` statement in Step 6, and the data type mappings between parameters in the method and parameters declared in the CREATE FUNCTION statement must conform to [Mappings of data types](#8d87bd3839te8).

**Method**

**Description**

TYPE\[\] process()

The `process()` method is the invocation entry point of a UDTF and requires to return an array.

### Step 4: Package the Java project

Run the following command to package the Java project:

```
mvn package
```

Two files are generated in the target directory: `udf-1.0-SNAPSHOT.jar` and `udf-1.0-SNAPSHOT-jar-with-dependencies.jar`.

### Step 5: Upload the project

Upload the file `udf-1.0-SNAPSHOT-jar-with-dependencies.jar` to Object Storage Service (OSS) and grant the public read permissions on the JAR package. For more information, see [Simple upload](/help/en/oss/user-guide/simple-upload) and [Bucket ACLs](/help/en/oss/user-guide/oss-bucket-acl).

**Note**

In Step 6, the frontend (FE) node verifies the JAR package of the UDF and calculates the verification value. The backend (BE) node downloads the JAR package of the UDF and executes the package.

### Step 6: Create a UDF in StarRocks

StarRocks provides UDFs for both database- and global-level namespaces.

-   If you do not have special requirements on the visibility of UDFs, you can create a global UDF. When you reference a global UDF, you can directly call the function name without the need to use a catalog and a database as a prefix, which is more convenient for access.
    
-   If you have special requirements on the visibility of UDFs or you want to create UDFs with the same name in different databases, you can create a UDF in a database. In this case, if your session is in the database to which the UDF belongs, you can directly call the function name. If your session is in another catalog or database, you must include the catalog and database as a prefix, such as `catalog.database.function`.
    

**Note**

To create a global UDF, you must have the permissions to execute the system-level CREATE GLOBAL FUNCTION statement. To create a database-level UDF, you must have the permissions to execute the database-level CREATE FUNCTION statement. To use a UDF, you must have the USAGE permission on the UDF. For information about how to grant the required permissions, see [GRANT](https://docs.starrocks.io/docs/sql-reference/sql-statements/account-management/GRANT/).

After you upload the JAR package, you must create the corresponding UDF in StarRocks based on your business requirements. To create a global UDF, you need to only include the `GLOBAL` keyword in the SQL statement.

#### Syntax

```
CREATE [GLOBAL][AGGREGATE | TABLE] FUNCTION function_name(arg_type [, ...])
RETURNS return_type
[PROPERTIES ("key" = "value" [, ...]) ]
```

#### Parameters

**Parameter**

**Required**

**Description**

GLOBAL

No

If you want to create a global UDF, you must specify this keyword. This parameter is supported in StarRocks 3.0 and later.

AGGREGATE

No

If you want to create UDAFs or UDWFs, you must specify this keyword.

TABLE

No

If you want to create UDTFs, you must specify this keyword.

function\_name

Yes

The function name, which can contain a database name, such as `db1.my_func`. If a `function name` contains a database name, the UDF is created in the corresponding database. Otherwise, the UDF is created in the current database. You cannot name both the new function and its parameters the same as an existing function in the destination database. Attempting to do so will result in the function failing to be created. However, the creation will succeed if the function names are the same but the parameters are different.

arg\_type

Yes

The data type of the parameters in the function. For information about the supported data types, see [Mappings of data types](#8d87bd3839te8).

return\_type

Yes

The data type of the return value in the function. For information about the supported data types, see [Mappings of data types](#8d87bd3839te8).

properties

Yes

The properties of the function. You must configure the properties of the various types of UDFs that you create. For more information and examples, see the following sections.

#### Create a scalar UDF

Run the following commands to create a scalar UDF in StarRocks:

```
CREATE [GLOBAL] FUNCTION MY_UDF_JSON_GET(string, string) 
RETURNS string
PROPERTIES (
    "symbol" = "com.starrocks.udf.sample.UDFJsonGet", 
    "type" = "StarrocksJar",
    "file" = "http://<YourBucketName>.oss-cn-xxxx-internal.aliyuncs.com/<YourPath>/udf-1.0-SNAPSHOT-jar-with-dependencies.jar"
);
```

**Parameter**

**Description**

symbol

The class name of the project to which the UDF belongs. The class is named in the `<package_name>.<class_name>` format.

type

The UDF type. Set the value to `StarrocksJar`, which indicates a Java-based UDF.

file

The HTTP path of the JAR package to which the UDF belongs. Set the value to the HTTP URL corresponding to the internal endpoint in OSS. The format is `http://<YourBucketName>.oss-cn-xxxx-internal.aliyuncs.com/<YourPath>/<jar_package_name>`.

#### Create a UDAF

Run the following commands to create a UDAF in StarRocks:

```
CREATE [GLOBAL] AGGREGATE FUNCTION MY_SUM_INT(INT) 
RETURNS INT
PROPERTIES 
( 
    "symbol" = "com.starrocks.udf.sample.SumInt", 
    "type" = "StarrocksJar",
    "file" = "http://<YourBucketName>.oss-cn-xxxx-internal.aliyuncs.com/<YourPath>/udf-1.0-SNAPSHOT-jar-with-dependencies.jar"
);
```

The descriptions of the parameters in `PROPERTIES` are the same as those in properties in [Create a scalar UDF](#b824d2e645rur).

#### Create a UDWF

Run the following commands to create the UDWF that is used in Step 3 in StarRocks:

```
CREATE [GLOBAL] AGGREGATE FUNCTION MY_WINDOW_SUM_INT(Int)
RETURNS Int
PROPERTIES 
(
    "analytic" = "true",
    "symbol" = "com.starrocks.udf.sample.WindowSumInt", 
    "type" = "StarrocksJar", 
    "file" = "http://<YourBucketName>.oss-cn-xxxx-internal.aliyuncs.com/<YourPath>/udf-1.0-SNAPSHOT-jar-with-dependencies.jar"
);
```

`analytic`: Specifies whether the created function is a window function. Set the value to `true`. The descriptions of the remaining parameters are the same as those described in [Create a scalar UDF](#b824d2e645rur).

#### Create a UDTF

Run the following commands to create the UDTF that is used in Step 3 in StarRocks:

```
CREATE [GLOBAL] TABLE FUNCTION MY_UDF_SPLIT(string)
RETURNS string
PROPERTIES 
(
    "symbol" = "com.starrocks.udf.sample.UDFSplit", 
    "type" = "StarrocksJar", 
    "file" = "http://<YourBucketName>.oss-cn-xxxx-internal.aliyuncs.com/<YourPath>/udf-1.0-SNAPSHOT-jar-with-dependencies.jar"
);
```

The descriptions of the parameters in `PROPERTIES` are the same as those in properties in [Create a scalar UDF](#b824d2e645rur).

### Step 7: Use the UDF

After you create the UDF, you can test and use the UDF that you developed.

#### Use the scalar UDF

Run the following command to use the scalar UDF created in Step 6:

```
SELECT MY_UDF_JSON_GET('{"key":"{\\"in\\":2}"}', '$.key.in');
```

#### Use the UDAF

Run the following command to use the UDAF created in Step 6:

```
SELECT MY_SUM_INT(col1);
```

#### Use the UDWF

Run the following command to use the UDWF created in Step 6:

```
SELECT MY_WINDOW_SUM_INT(intcol) 
            OVER (PARTITION BY intcol2
                  ORDER BY intcol3
                  ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING)
FROM test_basic;
```

#### Use the UDTF

Run the following commands to use the UDTF created in Step 6:

```
-- Assume that table t1 that contains columns a, b, and c1 exists. 
SELECT t1.a,t1.b,t1.c1 FROM t1;
> output:
1,2.1,"hello world"
2,2.2,"hello UDTF."

-- Use the MY_UDF_SPLIT() function. 
SELECT t1.a,t1.b, MY_UDF_SPLIT FROM t1, MY_UDF_SPLIT(t1.c1); 
> output:
1,2.1,"hello"
1,2.1,"world"
2,2.2,"hello"
2,2.2,"UDTF."
```

**Note**

-   The first `MY_UDF_SPLIT` is the column alias generated after the function `MY_UDF_SPLIT` is called.
    
-   You cannot use the `AS t2(f1)` method to specify the table alias and column alias for a table that is returned by a UDTF.
    

## View the UDF information

Run the following command to view the UDF information:

```
SHOW [GLOBAL] FUNCTIONS;
```

## Delete a UDF

Run the following command to delete the specified UDF:

```
DROP [GLOBAL] FUNCTION <function_name>(arg_type [, ...]);
```

## FAQ

Q: Can I use static variables when I develop a UDF? Do static variables of different UDFs affect each other?

A: You can use static variables when you develop a UDF. Static variables of different UDFs are isolated from each other and do not affect each other even if the UDFs have the same class name.
