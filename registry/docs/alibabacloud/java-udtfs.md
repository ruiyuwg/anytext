MaxCompute allows you to write user-defined table-valued functions (UDTFs) in Java. This helps process complex data processing tasks in an efficient manner. Java UDTFs can better meet specific data processing requirements and improve development efficiency and processing performance based on the characteristics of Java. This topic describes the code structure, precautions, and examples of UDTFs.

## UDTF code structure

You can use Maven in IntelliJ IDEA or [MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db) to write UDTF code in Java. The UDTF code can contain the following information:

-   Java package: optional.
    
    You can package Java classes that are defined into a JAR file for future use.
    
-   Base UDTF classes: required.
    
    The following base UDTF classes must be included: `com.aliyun.odps.udf.UDTF`, `com.aliyun.odps.udf.annotation.Resolve`, and `com.aliyun.odps.udf.UDFException`. com.aliyun.odps.udf.annotation.Resolve specifies a `@Resolve` annotation, and com.aliyun.odps.udf.UDFException specifies the method that is used to implement Java classes. If you need to use other UDTF classes or complex data types, add the required classes by following the instructions provided in [Overview](/help/en/maxcompute/user-guide/overview-22#section-oq4-vts-wjh).
    
-   Custom Java class: required.
    
    A custom class is the organizational unit of UDTF code. This class defines the variables and methods that are used to meet your business requirements.
    
-   `@Resolve` annotation: required.
    
    The annotation is in the `@Resolve(<signature>)` format. The `signature` is a function signature that defines the data types of input parameters and the return values of a UDTF. You cannot obtain function signatures for UDTFs by using the reflection feature. You can obtain a function signature only by using a `@Resolve` annotation, such as `@Resolve("smallint->varchar(10)")`. For more information about the `@Resolve` annotation, see [@Resolve annotations](#section-bki-rav-vjd) in this topic.
    
-   Methods to implement the custom Java class: required.
    
    The following table describes the methods that can be used to implement Java classes. You can select one of the methods based on your business requirements.
    
    **Method**
    
    **Description**
    
    `public void setup(ExecutionContext ctx) throws UDFException`
    
    The initialization method. Before a UDTF processes the input data, MaxCompute calls the code for user-defined initialization behavior. `setup` is called once for each worker.
    
    `public void process(Object[] args) throws UDFException`
    
    `process` is called once for each SQL record. The parameters of `process` are the input parameters of the UDTF that is specified in SQL statements. The input parameters are passed in the process function as `Object[]`, and the results are returned by using the `forward` function. You must call the `forward` function in the `process` function to determine the output data.
    
    **Note**
    
    Data loss may occur if you do not use the `process` or close method to call the `forward` function. Proceed with caution. For example, a backend thread is used to execute the `forward` call. You must ensure that the `process` method does not complete until the `forward` call is finished, otherwise it may lead to data loss.
    
    `public void close() throws UDFException`
    
    The method to terminate a UDTF. This method is called only once. It is called only after the last record is processed.
    
    You can call the `forward` function to return data. One record is generated each time the `forward` function is called. When you call a UDTF in an SQL query statement, you can use the `AS` clause to rename the output of the `forward` function.
    
    You can use Java data types or Java writable types to write a Java UDTF. For more information about the mappings among the data types that are supported by MaxCompute projects, Java data types, and Java writable types, see [Data types](#section-tjv-jzu-n0f).
    

The following example shows the UDTF code.

```
// Package Java classes into a JAR file named org.alidata.odps.udtf.examples. 
package org.alidata.odps.udtf.examples;
// The base UDTF classes. 
import com.aliyun.odps.udf.UDTF;
import com.aliyun.odps.udf.UDTFCollector;
import com.aliyun.odps.udf.annotation.Resolve;
import com.aliyun.odps.udf.UDFException;
// The custom Java class.   
// The @Resolve annotation. 
@Resolve("string,bigint->string,bigint")
public class MyUDTF extends UDTF {     
     // The methods that are used to implement the custom Java class. 
     @Override
     public void process(Object[] args) throws UDFException {
         String a = (String) args[0];
         Long b = (Long) args[1];
         for (String t: a.split("\\s+")) {
         forward(t, b);
       }
     }
   }
```

## Limits

-   You cannot access the Internet by using user-defined functions (UDFs). If you want to access the Internet by using UDFs, fill in the [network connection application form](https://page.aliyun.com/form/act711954107/index.htm) based on your business requirements and submit the application. After the application is approved, the MaxCompute technical support team will contact you and help you establish network connections. For more information about how to fill in the network connection application form, see [Network connection process](/help/en/maxcompute/user-guide/network-connection-process/#concept-1964315).
-   If you use a UDTF in a `SELECT` statement, you cannot specify other columns or use other expressions in this statement. The following **sample code** shows an incorrect SQL statement.
    
    ```
    -- The statement contains a UDTF and another column. 
    select value, user_udtf(key) as mycol ...
    ```
    
-   UDTFs cannot be nested. The following **sample code** shows an incorrect SQL statement.
    
    ```
    -- A UDTF named user_udtf2 is nested in a UDTF named user_udtf1. 
    select user_udtf1(user_udtf2(key)) as mycol...;
    ```
    
-   A UDTF cannot be used with a `GROUP BY`, `DISTRIBUTE BY`, or `SORT BY` clause in the same `SELECT` statement. The following **sample code** shows an incorrect SQL statement.
    
    ```
    -- A UDTF is used together with a GROUP BY clause. 
    select user_udtf(key) as mycol ... group by mycol;
    ```
    

## Precautions

When you write a Java UDTF, take note of the following points:

-   We recommend that you do not package classes that have the same name but different logic into the JAR files of different UDTFs. For example, the JAR file of UDTF 1 is named udtf1.jar and the JAR file of UDTF 2 is named udtf2.jar. Both files contain a class named `com.aliyun.UserFunction.class`, but the class has different logic. If UDTF 1 and UDTF 2 are called in the same SQL statement, MaxCompute loads the com.aliyun.UserFunction.class from one of the two files. As a result, the UDTFs cannot run as expected and a compilation error may occur.
    
-   The data type of an input parameter or a return value in a Java UDTF is an object. The first letter of the data types that you specify in the Java UDTF code must be in uppercase, such as String.
    
-   NULL values in MaxCompute SQL are represented by NULL in Java. Primitive data types in Java cannot represent NULL values in MaxCompute SQL. Therefore, these data types cannot be used.
    

## @Resolve annotations

`@Resolve` annotation format:

```
@Resolve(<signature>)
```

`signature` is a function signature string. This parameter is used to identify the data types of the input parameters and return values. When a UDTF is run, the input parameters and return values of the UDTF must be of the same data type as those specified in the function signature. The data type consistency is checked during semantic parsing. If the data types are inconsistent, an error is returned. The signature is in the following format:

```
'arg_type_list -> type_list'
```

Parameter description:

-   `type_list`: indicates the data types of return values. A UDTF can return multiple columns. The following data types are supported: BIGINT, STRING, DOUBLE, BOOLEAN, DATETIME, DECIMAL, FLOAT, BINARY, DATE, and DECIMAL(precision, scale). Complex data types, such as ARRAY, MAP, and STRUCT, and nested complex data types are also supported.
    
-   `arg_type_list`: specifies the data types of input parameters. If multiple input parameters are used, specify multiple data types and separate them with commas (,). The following data types are supported: BIGINT, STRING, DOUBLE, BOOLEAN, DATETIME, DECIMAL, FLOAT, BINARY, DATE, DECIMAL(precision,scale), CHAR, VARCHAR, complex data types (ARRAY, MAP, and STRUCT), and nested complex data types.
    
    `arg_type_list` can be represented by an asterisk (\*) or left empty ('').
    
    -   If `arg_type_list` is represented by an asterisk (\*), a random number of input parameters are allowed.
        
    -   If `arg_type_list` is left empty (''), no input parameters are used.
        
    
    For more information about the syntax extension of the @Resolve annotation, see [Dynamic parameters of UDAFs and UDTFs](/help/en/maxcompute/user-guide/dynamic-parameters-of-udafs-and-udtfs).
    

The following table provides examples of `@Resolve` annotations.

**@Resolve annotation**

**Description**

`@Resolve('bigint,boolean->string,datetime')`

The data types of the input parameters are BIGINT and BOOLEAN. The data types of the return values are STRING and DATETIME.

`@Resolve('*->string, datetime')`

A random number of input parameters are used and the data types of the return values are STRING and DATETIME.

`@Resolve('->double, bigint, string')`

No input parameters are used, and the data types of the return values are DOUBLE, BIGINT, and STRING.

`@Resolve("array<string>,struct<a1:bigint,b1:string>,string->map<string,bigint>,struct<b1:bigint>")`

The data types of the input parameters are ARRAY, STRUCT, and MAP. The data types of the return values are MAP and STRUCT.

## Data types

In MaxCompute, different data type editions support different data types. In MaxCompute V2.0 and later, more data types and complex data types, such as ARRAY, MAP, and STRUCT, are supported. For more information about MaxCompute data type editions, see [Data type editions](/help/en/maxcompute/user-guide/data-type-editions#concept-jhp-4bb-5db).

The following table describes the mappings among the data types that are supported by MaxCompute projects, Java data types, and Java writable types. You must write Java UDTFs based on the mappings to ensure data type consistency. The following table describes the data type mappings.

**MaxCompute Type**

**Java Type**

**Java Writable Type**

TINYINT

java.lang.Byte

ByteWritable

SMALLINT

java.lang.Short

ShortWritable

INT

java.lang.Integer

IntWritable

BIGINT

java.lang.Long

LongWritable

FLOAT

java.lang.Float

FloatWritable

DOUBLE

java.lang.Double

DoubleWritable

DECIMAL

java.math.BigDecimal

BigDecimalWritable

BOOLEAN

java.lang.Boolean

BooleanWritable

STRING

java.lang.String

Text

VARCHAR

com.aliyun.odps.data.Varchar

VarcharWritable

BINARY

com.aliyun.odps.data.Binary

BytesWritable

DATE

java.sql.Date

DateWritable

DATETIME

java.util.Date

DatetimeWritable

TIMESTAMP

java.sql.Timestamp

TimestampWritable

INTERVAL\_YEAR\_MONTH

N/A

IntervalYearMonthWritable

INTERVAL\_DAY\_TIME

N/A

IntervalDayTimeWritable

ARRAY

java.util.List

N/A

MAP

java.util.Map

N/A

STRUCT

com.aliyun.odps.data.Struct

N/A

**Note**

You can use Java writable types for the input parameters or return values of UDTFs only when your MaxCompute project uses the MaxCompute V2.0 data type edition.

## Instructions

After you develop a Java UDTF by following the instructions in [Development process](/help/en/maxcompute/user-guide/overview-22#section-e4l-uyg-wen), you can use MaxCompute SQL to call the Java UDTF. You can use one of the following methods to call the Java UDTF:

-   Use a UDF in a MaxCompute project: The method is similar to that of using [built-in functions](/help/en/maxcompute/user-guide/mathematical-functions/#concept-ubn-3kb-5db).
    
-   Use a UDF across projects: Use a UDF of Project B in Project A. The following statement shows an example: `select B:udf_in_other_project(arg0, arg1) as res from table_t;`. For more information about cross-project sharing, see [Cross-project resource access based on packages](/help/en/maxcompute/user-guide/cross-project-resource-access-based-on-packages#concept-oq1-qk1-wdb).
    

For more information about how to use MaxCompute Studio to develop and call a Java UDTF, see [Example](#section-cyg-v99-zx5).

## Example

This example describes how to use MaxCompute Studio to develop and call a Java UDTF.

1.  Make preparations.
    
    Before you use MaxCompute Studio to develop and debug a UDF, you must install MaxCompute Studio and connect MaxCompute Studio to a MaxCompute project. For more information about how to install MaxCompute Studio and connect MaxCompute Studio to a MaxCompute project, see the following topics:
    
    1.  [Install MaxCompute Studio](/help/en/maxcompute/user-guide/install-intellij-idea#task-hbh-3gy-5db)
        
    2.  [Connect to a MaxCompute project](/help/en/maxcompute/user-guide/manage-project-connections#task-2456405)
        
    3.  [Create a MaxCompute Java module](/help/en/maxcompute/user-guide/create-a-maxcompute-java-module#task-2456992)
        
    
2.  Write UDTF code.
    
    1.  In the left-side navigation pane of the **Project** tab, choose **src** > **main** > **java**, right-click java, and then choose **New** > **MaxCompute Java**.![新建Java Class](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7374992361/p89042.png)
        
    2.  In the **Create new MaxCompute java class** dialog box, click **UDTF**, enter a name in the **Name** field, and then press Enter. In this example, the Java class is named MyUDTF.![选择类型并填写名称](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2798500461/p328562.png)
        
        **Name**: the name of the MaxCompute Java class. If you have not created a package, specify this parameter in the packagename.classname format. The system automatically generates a package.
        
    3.  Write code in the code editor. ![编写UDTF代码](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2798500461/p328563.png)The following example shows the UDTF code.
        
        ```
        package org.alidata.odps.udtf.examples;
        import com.aliyun.odps.udf.UDTF;
        import com.aliyun.odps.udf.UDTFCollector;
        import com.aliyun.odps.udf.annotation.Resolve;
        import com.aliyun.odps.udf.UDFException;
        // TODO define input and output types, e.g., "string,string->string,bigint".
           @Resolve("string,bigint->string,bigint")
           public class MyUDTF extends UDTF {
             @Override
             public void process(Object[] args) throws UDFException {
               String a = (String) args[0];
               Long b = (Long) args[1];
               for (String t: a.split("\\s+")) {
                 forward(t, b);
               }
             }
           }
        ```
        
3.  Debug the UDTF on your on-premises machine to ensure that the code can run successfully.
    
    For more information about debugging operations, see [Perform a local run to debug the UDF](/help/en/maxcompute/user-guide/develop-a-udf#section-l18-ahr-5ea).
    
    ![本地调试UDTF](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3798500461/p328722.png)
    
    **Note**
    
    The parameter settings in the preceding figure are for reference.
    
4.  Package the created UDTF into a JAR file, upload the file to your MaxCompute project, and then register the UDTF. In this example, the function name is `user_udtf`.
    
    For more information about how to package a UDTF, see [Procedure](/help/en/maxcompute/user-guide/package-a-java-program-upload-the-package-and-create-a-maxcompute-udf#section-b4e-wkf-lsp).
    
    ![注册函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3798500461/p328738.png)
    
5.  In the left-side navigation pane of MaxCompute Studio, click **Project Explorer**. Right-click your MaxCompute project, select Open in Console from the drop-down list to start the MaxCompute client, and then execute the SQL statement to call the new UDTF.
    
    The following example shows the data structure of the my\_table table that you want to query.
    
    ```
    +------------+------------+
    | col0       | col1       |
    +------------+------------+
    | A B        | 1          |
    | C D        | 2          |
    +------------+------------+
    ```
    
    Execute the following SQL statement to call the UDTF:
    
    ```
    select user_udtf(col0, col1) as (c0, c1) from my_table;
    ```
    
    The following result is returned:
    
    ```
    +----+------------+
    | c0 | c1         |
    +----+------------+
    | A  | 1          |
    | B  | 1          |
    | C  | 2          |
    | D  | 2          |
    +----+------------+
    ```
    

## **References**

For more information about how to use a Java UDTF, see [Examples of Java UDTFs](/help/en/maxcompute/user-guide/examples-of-java-udtfs/).
