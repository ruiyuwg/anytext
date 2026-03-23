MaxCompute provides various built-in functions to meet your business requirements. If the built-in functions of MaxCompute do not meet your business requirements, you can write code to create user-defined functions (UDFs) based on the development process and examples that are described in this topic.

## Background information

In the broad sense, UDFs include **user-defined scalar functions**, user-defined aggregate functions (**UDAFs**), and user-defined table-valued functions (**UDTFs**). In the narrow sense, UDFs refer only to user-defined scalar functions. The following table describes the types of MaxCompute UDFs.

**UDF type**

**Scenario**

[UDF](/help/en/doc-detail/317759.html#concept-2102672)

This type of UDFs is applicable to scenarios in which the input data and output data are in a one-to-one mapping relationship. A one-to-one mapping is established between the input and output data of a UDF. Each time a UDF reads a row of data, it returns an output value.

[UDTF](/help/en/maxcompute/user-guide/overview-7#concept-2102681)

This type of UDFs is applicable to scenarios in which the input data and output data are in a one-to-many mapping relationship. A one-to-many mapping is established between the input and output data of a UDTF. Each time a UDTF reads a row of data, it returns multiple values, which are considered a table.

[UDAF](/help/en/maxcompute/user-guide/overview-8#concept-2102684)

A many-to-one mapping is established between the input and output data of a UDAF. Multiple input records are aggregated to generate one output value.

In addition to the preceding UDFs, MaxCompute offers the following UDFs for special scenarios.

**UDF type**

**Scenario**

[Code-embedded UDFs](/help/en/maxcompute/user-guide/code-embedded-udfs#concept-2567648)

If you want to simplify the development process of MaxCompute UDFs and view the code logic, you can embed Java or Python code into SQL scripts.

[SQL UDFs](/help/en/maxcompute/user-guide/sql-udfs#concept-2567935)

If your code contains duplicate code, you can use SQL UDFs to improve the code reuse rate and simplify the development process.

[Geospatial UDFs](/help/en/maxcompute/user-guide/geospatial-udfs#task-2059010)

You can use Hive geospatial functions to analyze spatial data in MaxCompute.

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

Before you use UDFs, take note of the following items:

-   UDFs cannot compete with built-in functions in performance. We recommend that you preferentially use built-in functions to implement your business logic.
    
-   When you use a UDF in SQL statements, **the memory usage of a computing job may exceed the default allocated memory size** if a large amount of data is computed and data skew occurs. In this case, you can run the `set odps.sql.udf.joiner.jvm.memory=xxxx;` command at the session level to resolve the issue. For more information about UDFs, see [FAQ about MaxCompute UDFs](/help/en/maxcompute/user-guide/faq-about-maxcompute-udfs/#concept-2113685).
    
-   If the name of a UDF is the same as that of a built-in function, the UDF is preferentially called. For example, if UDF CONCAT and built-in function CONCAT both exist in MaxCompute, the system automatically calls UDF CONCAT instead of the built-in function CONCAT. If you want to call the built-in function, you must add the symbol `::` before the built-in function. For example, you can use `select ::concat('ab', 'c');`.
    

## Development platforms and development process

This section describes how to develop a UDF, UDTF, or UDAF.

**Note**

The development process of [Code-embedded UDFs](/help/en/maxcompute/user-guide/code-embedded-udfs#concept-2567648), [SQL UDFs](/help/en/maxcompute/user-guide/sql-udfs#concept-2567935), and [Geospatial UDFs](/help/en/maxcompute/user-guide/geospatial-udfs#task-2059010) is different. For more information, see the related documentation.

### **Use Java to develop UDFs**

The following figure shows how to develop a MaxCompute UDF in Java.

![Java开发流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7824246361/p332012.png)

**Procedure**

**Description**

**Platform**

**Precautions or references**

1

Optional

Before you can use Maven to write code, you must add the related SDK dependencies to the POM file. This ensures that the code can be compiled. The following SDK dependency shows an example:

```
<dependency>
    <groupId>com.aliyun.odps</groupId>
    <artifactId>odps-sdk-udf</artifactId>
   <version>0.29.10-public</version>
</dependency>
```

You can search for `odps-sdk-udf` from [Maven repositories](https://search.maven.org/) to obtain the version of the SDK dependency.

-   IntelliJ IDEA (Maven)
    

None.

2

Required

Write UDF code based on your business requirements.

-   IntelliJ IDEA (Maven)
    
-   [MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db)
    

When you use Java to develop UDFs, make sure that the requirements of Java UDF development specifications are met. For more information, see [UDF development specifications and general process (Java)](/help/en/maxcompute/user-guide/java-udfs).

3

Required

Debug the UDF by running it on your on-premises machine or by performing unit testing to check whether the result meets expectations.

4

Required

Debug UDF code to ensure that the code is packaged into a JAR file after it is successfully run on your on-premises machine.

5

Required

Upload the JAR file as a resource to your MaxCompute project.

-   [DataWorks console](/help/en/dataworks/user-guide/create-and-use-maxcompute-resources#task-2509662)
    
-   [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db)
    
-   [MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db)
    

You can use the following three methods to upload resources and register functions:

-   DataWorks console (performing visualized operations):
    
    1.  [Create and use MaxCompute resources](/help/en/dataworks/user-guide/create-and-use-maxcompute-resources#section-jxa-fc5-6iq)
        
    2.  [Create and use a MaxCompute UDF](/help/en/dataworks/user-guide/create-and-use-custom-functions#task-1930135)
        
-   MaxCompute client (using SQL statements)
    
    1.  [Add resources](/help/en/maxcompute/user-guide/resource-operations#section-533-s8q-d9w)
        
    2.  [Create a UDF](/help/en/maxcompute/user-guide/function-operations#section-6r8-ozn-xjb)
        
-   MaxCompute Studio (using code):
    
    [Package a Java program, upload the package, and create a MaxCompute UDF](/help/en/maxcompute/user-guide/package-a-java-program-upload-the-package-and-create-a-maxcompute-udf#task-2457652)
    

6

Required

Create a UDF based on the JAR file that you uploaded.

7

Optional

Call the UDF in the query data code.

None.

### **Use Python to develop UDFs**

The following figure shows how to develop a MaxCompute UDF in Python.![Python开发流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7824246361/p332001.png)

**Procedure**

**Description**

**Platform**

**Precautions or references**

1

Required

Write a UDF based on your business requirements.

[MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db)

When you use Python to develop UDFs, make sure that the requirements of Python UDF development specifications are met. For more information, see [UDF development specifications and general process (Python 3)](/help/en/maxcompute/user-guide/python-3-udfs) or [UDF development specifications and general process (Python 2)](/help/en/maxcompute/user-guide/python-2-udfs).

2

Required

Debug the UDF by running it on your on-premises machine or by performing unit testing to check whether the result meets expectations.

3

Required

Upload Python files or required resources, such as file resources, table resources, and third-party packages, to a MaxCompute project.

-   [DataWorks console](/help/en/dataworks/user-guide/create-and-use-maxcompute-resources#task-2509662)
    
-   [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db)
    
-   [MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db)
    

You can use the following three methods to upload resources and register functions:

-   DataWorks console (performing visualized operations):
    
    1.  [Create and use MaxCompute resources](/help/en/dataworks/user-guide/create-and-use-maxcompute-resources#section-jxa-fc5-6iq)
        
    2.  [Create and use a MaxCompute UDF](/help/en/dataworks/user-guide/create-and-use-custom-functions#task-1930135)
        
-   MaxCompute client (using SQL statements)
    
    1.  [Add resources](/help/en/maxcompute/user-guide/resource-operations#section-533-s8q-d9w)
        
    2.  [Create a UDF](/help/en/maxcompute/user-guide/function-operations#section-6r8-ozn-xjb)
        
-   MaxCompute Studio (using code):
    
    [Upload a Python program and create a MaxCompute UDF](/help/en/maxcompute/user-guide/upload-a-python-program-and-create-a-maxcompute-udf#task-2130253)
    

4

Required

Create a UDF based on the uploaded Python files or required resources.

5

Optional

Call the UDF in the query data code.

None.

### **Development reference: MaxCompute SDK**

The following table describes the SDKs provided by MaxCompute. For more information about the packages included in each SDK and the classes in the packages, see [MaxCompute SDK](https://www.javadoc.io/doc/com.aliyun.odps/odps-sdk-core/latest/index.html).

**SDK name**

**Description**

odps-sdk-core

Provides classes for managing basic resources of MaxCompute.

odps-sdk-commons

Provides common Utils for Java.

odps-sdk-udf

Provides UDFs.

odps-sdk-mapred

Provides the MapReduce API.

odps-sdk-graph

Provides the Graph API.

## Call a UDF

After you develop a UDF and register the UDF in MaxCompute, you can use the UDF in the subsequent job development process. Use the following methods to call a UDF:

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
