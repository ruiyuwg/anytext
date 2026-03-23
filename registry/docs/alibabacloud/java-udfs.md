If the built-in functions of MaxCompute cannot meet your business requirements, you can use a development tool such as IntelliJ IDEA (Maven) or [MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db) to write user-defined functions (UDFs) by following the procedure provided in this topic and call the UDFs in MaxCompute. This topic describes how to write a UDF in Java.

## Limits

-   ### **Access the Internet by using UDFs**
    
    By default, MaxCompute does not allow you to access the Internet by using UDFs. If you want to access the Internet by using UDFs, fill in the network connection application form based on your business requirements and submit the application. After the application is approved, the MaxCompute technical support team will contact you and help you establish network connections. For more information about how to fill in the network connection application form, see [Network connection process](/help/en/maxcompute/user-guide/network-connection-process/#concept-1964315).
    
-   ### **Access a VPC by using UDFs**
    
    By default, MaxCompute does not allow you to access resources in VPCs by using UDFs. To use UDFs to access resources in a VPC, you must establish a network connection between MaxCompute and the VPC. For more information about related operations, see [Use UDFs to access resources in VPCs](/help/en/maxcompute/user-guide/use-udfs-to-access-resources-in-vpcs).
    
-   ### **Read table data by using UDFs, UDAFs, or UDTFs**
    
    You cannot use UDFs, UDAFs, or UDTFs to read data from the following types of tables:
    
    -   Table on which schema evolution is performed
        
    -   Table that contains complex data types
        
    -   Table that contains JSON data types
        
    -   Transactional table
        

## Precautions

Before you write a Java UDF, you must understand the [UDF code structure](#251b8f99fdxyb) and the mappings between the data types used by Java UDFs and the data types supported by MaxCompute. For more information about the data type mappings, see [Appendix: Data types](#bbd9a88719ixq).

Before you write a Java UDF, take note of the following points:

-   We recommend that the JAR files of different UDFs do not contain the classes that have the same name but different logic. For example, the JAR file of UDF 1 is named udf1.jar and the JAR file of UDF 2 is named udf2.jar. Both files contain a class named `com.aliyun.UserFunction.class`, but the class has different logic in the files. If UDF 1 and UDF 2 are called in the same SQL statement, MaxCompute loads the com.aliyun.UserFunction.class from one of the two files. As result, the UDFs cannot run as expected and a compilation error may occur.
    
-   The data types of the input parameters or return value of a Java UDF are objects. The first letters of these data types must be capitalized, such as String.
    
-   NULL values in MaxCompute SQL are represented by NULL in Java. Primitive data types in Java cannot represent NULL values in MaxCompute SQL. Therefore, these data types cannot be used.
    

## UDF development process

When you develop a UDF, you must make preparations, write UDF code, upload the Python program, create the UDF, and debug the UDF. MaxCompute allows you to use multiple tools to develop a UDF, such as MaxCompute Studio, DataWorks, and the MaxCompute client (odpscmd). This section provides examples on how to develop a UDF by using MaxCompute Studio, DataWorks, and the MaxCompute client (odpscmd).

## Use MaxCompute Studio

This example shows how to use MaxCompute Studio to develop and call a Java UDF that is used to convert all letters to lowercase letters.

1.  Make preparations.
    
    Before you use MaxCompute Studio to develop and debug a UDF, you must install MaxCompute Studio and connect MaxCompute Studio to a MaxCompute project. For more information about how to install MaxCompute Studio and connect MaxCompute Studio to a MaxCompute project, see the following topics:
    
    1.  [Install MaxCompute Studio](/help/en/maxcompute/user-guide/install-intellij-idea#task-hbh-3gy-5db)
        
    2.  [Connect to a MaxCompute project](/help/en/maxcompute/user-guide/manage-project-connections#task-2456405)
        
    3.  [Create a MaxCompute Java module](/help/en/maxcompute/user-guide/create-a-maxcompute-java-module#task-2456992)
        
    
2.  Write UDF code.
    
    1.  In the left-side navigation pane of the **Project** tab, choose **src** > **main** > **java**, right-click java, and then choose **New** > **MaxCompute Java**.![新建Java Class](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7374992361/p89042.png)
        
    2.  In the **Create new MaxCompute java class** dialog box, click **UDF**, enter a class name in the **Name** field, and then press Enter.
        
        ![选择类型填写名称](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2716721061/p1947.png)
        
        **Name**: the name of the MaxCompute Java class. If no package is created, enter a name in the Package name.Class name format. The system automatically creates a package that is named in this format. In this example, the class is named **Lower**.
        
    3.  Write UDF code in the code editor. ![代码编辑区域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1373636361/p312325.png)Sample code:
        
        ```
        package com.aliyun.odps.udf.example;
        import com.aliyun.odps.udf.UDF;
        public final class Lower extends UDF {
            public String evaluate(String s) {
                if (s == null) { 
                   return null; 
                }
                   return s.toLowerCase();
            }
        }
        ```
        
        **Note**
        
        You can debug the Java UDF on your on-premises machine if necessary. For more information, see [Develop and debug UDFs](/help/en/maxcompute/user-guide/develop-a-udf#task-2457023).
        
    
3.  Upload the JAR file and create the UDF.
    
    Right-click the JAR file of the UDF and select **Deploy to server...**. In the **Package a jar, submit resource and register function** dialog box, configure the parameters and click **OK**.![注册UDF](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1373636361/p312341.png)
    
    -   **MaxCompute project**: the name of the MaxCompute project to which the UDF belongs. Retain the default value, which indicates that the connection to the MaxCompute project is established when you write the UDF.
        
    -   **Resource file**: the path of the resource file on which the UDF depends. Retain the default value.
        
    -   **Resource name**: the name of the resource on which the UDF depends. Retain the default value.
        
    -   **Function name**: the name of the UDF that you want to create. This name is used in the SQL statements that are used to call the UDF. Example: **Lower\_test**.
        
    
4.  Debug the UDF.
    
    In the left-side navigation pane, click the **Project Explore** tab. Right-click the MaxCompute project to which the UDF belongs, select **Open Console**, enter the SQL statement that is used to call the UDF, and then press Enter to execute the SQL statement. ![调用UDF](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1373636361/p312374.png)Sample statement:
    
    ```
    select lower_test('ABC');
    ```
    
    The following result is returned:
    
    ```
    +-----+
    | _c0 |
    +-----+
    | abc |
    +-----+
    ```
    

## Use DataWorks

1.  Make preparations.
    
    Before you use DataWorks to develop and debug a UDF, you must activate DataWorks and associate a DataWorks workspace with a MaxCompute project. For more information, see [DataWorks](/help/en/maxcompute/user-guide/query-editor-in-the-maxcompute-console).
    
2.  Write UDF code.
    
    You can write UDF code by using a Java development tool and package the code as a JAR file. Sample UDF code:
    
    ```
    package com.aliyun.odps.udf.example;
    import com.aliyun.odps.udf.UDF;
    public final class Lower extends UDF {
        public String evaluate(String s) {
            if (s == null) { 
               return null; 
            }
               return s.toLowerCase();
        }
    }
    ```
    
3.  Upload the JAR file and create the UDF.
    
    You can upload the code package that you package in the DataWorks console and create the UDF. For more information, see the following topics:
    
    1.  [Create and use MaxCompute resources](/help/en/dataworks/user-guide/create-and-use-maxcompute-resources)
        
    2.  [Create and use a MaxCompute function](/help/en/dataworks/user-guide/create-and-use-custom-functions)
        
4.  Debug the UDF.
    
    After you create a UDF, you can create an ODPS SQL node in the DataWorks console. You can write and create SQL statements in the ODPS SQL node to call and debug the UDF. For more information about how to create an ODPS SQL node, see [Create an ODPS SQL node](/help/en/dataworks/user-guide/create-an-odps-sql-node). Sample statement:
    
    ```
    select lower_test('ABC');
    ```
    

## **Use the MaxCompute client (odpscmd)**

1.  Make preparations.
    
    Before you use the MaxCompute client to develop and debug a UDF, you must download the MaxCompute client installation package (GitHub), install the MaxCompute client, and then configure the config file to connect to the MaxCompute project. For more information, see [MaxCompute client (odpscmd)](/help/en/maxcompute/user-guide/maxcompute-client).
    
2.  Write UDF code.
    
    You can write UDF code by using a Java development tool and package the code as a JAR file. Sample UDF code:
    
    ```
    package com.aliyun.odps.udf.example;
    import com.aliyun.odps.udf.UDF;
    public final class Lower extends UDF {
        public String evaluate(String s) {
            if (s == null) { 
               return null; 
            }
               return s.toLowerCase();
        }
    }
    ```
    
3.  Upload the JAR file and create the UDF.
    
    You can upload the JAR file that you package on the MaxCompute client and create the UDF. For more information, see the following topics:
    
    1.  [ADD JAR](/help/en/maxcompute/user-guide/add-jar)
        
    2.  [CREATE FUNCTION](/help/en/maxcompute/user-guide/create-function)
        
4.  Debug the UDF.
    
    After you create a UDF, you can write and create SQL statements to debug the UDF. Sample statement:
    
    ```
    select lower_test('ABC');
    ```
    

## Usage notes

After you develop a Java UDF, you can use MaxCompute SQL to call the UDF. For more information about how to develop a Java UDF, see [Development process](/help/en/doc-detail/317759.html#section-c6c-8u0-ggh). You can call a Java UDF by using one of the following methods:

-   Use a UDF in a MaxCompute project: The method is similar to that of using [built-in functions](/help/en/maxcompute/user-guide/mathematical-functions/#concept-ubn-3kb-5db).
    
-   Use a UDF across projects: Use a UDF of Project B in Project A. The following statement shows an example: `select B:udf_in_other_project(arg0, arg1) as res from table_t;`. For more information about cross-project sharing, see [Cross-project resource access based on packages](/help/en/maxcompute/user-guide/cross-project-resource-access-based-on-packages#concept-oq1-qk1-wdb).
    

## **UDF development example**

-   [Write a Hive UDF in Java](/help/en/maxcompute/user-guide/write-a-hive-udf-in-java)
    
-   [Use complex data types in Java UDFs](/help/en/maxcompute/user-guide/use-complex-data-types-in-java-udfs)
    
-   [Replace strings by using regular expressions](/help/en/maxcompute/user-guide/replace-strings-by-using-regular-expressions)
    
-   [Obtain the values of strings that have no delimiters](/help/en/maxcompute/user-guide/obtain-the-values-of-strings-that-have-no-delimiters)
    
-   [Obtain the values of strings that have delimiters](/help/en/maxcompute/user-guide/obtain-the-values-of-strings-that-have-delimiters)
    
-   [Reference a file resource](/help/en/maxcompute/user-guide/reference-a-file-resource)
    
-   [Reference a table resource](/help/en/maxcompute/user-guide/reference-a-table-resource)
    
-   [Reference third-party packages in Python UDFs](/help/en/maxcompute/user-guide/reference-third-party-packages-in-python-udfs)
    

## **Appendix: UDF code structure**

You can write UDF code in Java. The code must contain the following information:

-   Java package: optional.
    
    You can package Java classes that are defined into a JAR file for future use.
    
-   Base UDF class: required.
    
    The required UDF class is `com.aliyun.odps.udf.UDF`. If you want to use other UDF classes or complex data types, follow the instructions provided in [Overview](/help/en/maxcompute/user-guide/overview-22#section-oq4-vts-wjh) to add the required classes. For example, the UDF class that corresponds to the STRUCT data type is `com.aliyun.odps.data.Struct`.
    
-   `@Resolve` annotation: optional.
    
    The annotation is in the `@Resolve(<signature>)` format. The `signature` parameter is used to define the data types of the input parameters and return value of a UDF. If you want to use data of the STRUCT data type in a UDF, you cannot use the reflection feature for the `com.aliyun.odps.data.Struct` class to obtain the names and types of fields. In this case, you must add the `@Resolve` annotation to the com.aliyun.odps.data.Struct class. This `annotation` affects only the overloading of the UDF whose input parameters or return value contain the com.aliyun.odps.data.Struct class. Example: `@Resolve("struct<a:string>,string->string")`. For more information about how to use complex data types in Java UDFs, see [Use complex data types in Java UDFs](/help/en/maxcompute/user-guide/use-complex-data-types-in-java-udfs#task-2107459).
    
-   Custom Java class: required.
    
    A custom Java class is the organizational unit of UDF code. This class defines the variables and methods that are used to meet your business requirements.
    
-   `evaluate` method: required.
    
    The evaluate method is a non-static public method and is contained in a custom Java class. The data types of the input parameters and return value of the `evaluate` method are used as the function signature of a UDF in SQL statements. The function signature defines the data types of the input parameters and return value of the UDF.
    
    You can implement multiple `evaluate` methods in a UDF. When you call a UDF, MaxCompute matches an `evaluate` method based on the data types of the input parameters in the UDF.
    
    When you write a Java UDF, you can use Java data types or Java writable data types. For more information about the mappings between the data types supported in MaxCompute projects, Java data types, and Java writable data types, see [Appendix: Data types](#bbd9a88719ixq).
    
-   UDF initialization or termination code: optional. You can use the `void setup(ExecutionContext ctx)` method to initialize a UDF and use the `void close()` method to terminate a UDF. The `void setup(ExecutionContext ctx)` method is called before the `evaluate` method. The void setup(ExecutionContext ctx) method is called only once and is used to initialize the resources that are required for data computing or initialize the members of a class. The `void close()` method is called after the `evaluate` method. The void close() method is used to clean up data, such as closing files.
    

Sample code:

-   Use Java data types
    
    ```
    // Package the defined Java classes into a file named org.alidata.odps.udf.examples. 
    package org.alidata.odps.udf.examples;  
    // Inherit the UDF class. 
    import com.aliyun.odps.udf.UDF;         
    // The custom Java class. 
    public final class Lower extends UDF { 
    // The evaluate method. String indicates the data types of the input parameters and return indicates the return value. 
        public String evaluate(String s) { 
            if (s == null) { 
            return null; 
        } 
            return s.toLowerCase(); 
      } 
    }
    ```
    
-   Use Java writable data types
    
    ```
    // Package the defined Java classes into a file named com.aliyun.odps.udf.example. 
    package com.aliyun.odps.udf.example;
    // Add the class that corresponds to a Java writable data type. 
    import com.aliyun.odps.io.Text;
    // Inherit the UDF class. 
    import com.aliyun.odps.udf.UDF;
    // The custom Java class. 
    public class MyConcat extends UDF {
      private Text ret = new Text();
    // The evaluate method. Text indicates the data types of the input parameters and return indicates the return value. 
      public Text evaluate(Text a, Text b) {
          if (a == null || b == null) {
          return null;
        }
          ret.clear();
          ret.append(a.getBytes(), 0, a.getLength());
          ret.append(b.getBytes(), 0, b.getLength());
          return ret;
      }
    }
    ```
    

MaxCompute also allows you to use Hive UDFs whose Hive version is compatible with MaxCompute. For more information, see [Hive UDFs](#dc4c27e019vjs).

## **Appendix: Data types**

### **Data type mappings**

The following table describes the mappings between the data types supported in MaxCompute projects, Java data types, and Java writable data types. You must write Java UDFs based on the mappings to ensure the consistency of the data types. The following table describes the data type mappings.

**Note**

In MaxCompute, different data type editions support different data types. In MaxCompute V2.0 and later, more data types and complex data types, such as ARRAY, MAP, and STRUCT, are supported. For more information about MaxCompute data type editions, see [Data type editions](/help/en/maxcompute/user-guide/data-type-editions#concept-jhp-4bb-5db).

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

### **Hive UDFs**

If your MaxCompute project uses the MaxCompute V2.0 data type edition and supports Hive UDFs, you can directly use Hive UDFs whose Hive version is compatible with MaxCompute.

The Hive version that is compatible with MaxCompute is 2.1.0, which corresponds to Hadoop 2.7.2. If a UDF is developed on another Hive or Hadoop version, you must use Hive 2.1.0 or Hadoop 2.7.2 to recompile the JAR file of the UDF.

For more information about how to use Hive UDFs in MaxCompute, see [Write a Hive UDF in Java](/help/en/maxcompute/user-guide/write-a-hive-udf-in-java#task-2105893).
