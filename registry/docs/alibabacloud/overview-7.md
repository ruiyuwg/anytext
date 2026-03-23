MaxCompute allows you to write user-defined table-valued functions (UDTFs) in Java or Python to extend the capabilities of MaxCompute functions and accommodate your business requirements. This topic describes the types, limits, usage notes, and development process of UDTFs. This topic also describes how to use UDTFs.

## Background information

You can use UDTFs to return multiple values for a single data input. The input and output data of a UDTF have a one-to-many relationship. Each time a UDTF reads a row of data, the UDTF returns multiple values. The returned values are considered a table. MaxCompute allows you to write UDTFs in Java or Python.

 

UDTF type

Description

Java UDTF

MaxCompute allows you to write UDTFs in Java. For more information, see [Java UDTFs](/help/en/maxcompute/user-guide/java-udtfs#concept-2105833 "This topic describes how to write a user-defined table-valued function (UDTF) in Java.").

Python UDTF

MaxCompute allows you to write UDTFs in Python 2 and Python 3.

-   Python 2 UDTFs: The Python version is 2.7. For more information, see [Python 2 UDTF](/help/en/maxcompute/user-guide/python-2-udtf#concept-2113384 "The Python 2 version that is used by MaxCompute is Python 2.7. This topic describes how to write a user-defined table-valued function (UDTF) in Python 2.").
-   Python 3 UDTFs: The Python version is CPython-3.7.3. For more information, see [Python 3 UDTFs](/help/en/maxcompute/user-guide/python-3-udtfs#concept-2113690 "Python Software Foundation announced the End of Life (EOL) for Python 2. Due to this reason, MaxCompute supports Python 3 and uses CPython 3.7.3. This topic describes how to write user-defined table-valued function (UDTF) code in Python 3.").

The built-in functions of MaxCompute include some UDTFs, such as EXPLODE. For more information about built-in UDTFs, see [Other functions](/help/en/maxcompute/user-guide/other-functions/#concept-wzd-xhm-vdb "MaxCompute SQL provides other functions that are commonly used in the development process. You can use these functions based on your business requirements. This topic describes the command syntax and parameters of these functions, such as CAST, DECODE, LEAST, and SPLIT. This topic also provides examples on how to use these functions.") or [Complex type functions](/help/en/maxcompute/user-guide/complex-type-functions#concept-2098826 "You can use complex type functions in MaxCompute SQL to process data of complex data types, such as ARRAY, MAP, STRUCT, and JSON. This topic describes the syntax and parameters of complex type functions that are supported by MaxCompute SQL, and provides examples on how to use complex type functions. This topic guides you through data development by using complex type functions.").

## Limits

-   You cannot access the Internet by using user-defined functions (UDFs). If you want to access the Internet by using UDFs, fill in the [network connection application form](https://page.aliyun.com/form/act711954107/index.htm) based on your business requirements and submit the application. After the application is approved, the MaxCompute technical support team will contact you and help you establish network connections. For more information about how to fill in the network connection application form, see [Network connection process](/help/en/maxcompute/user-guide/network-connection-process/#concept-1964315 "By default, MaxCompute cannot access a service over the Internet or over a virtual private cloud (VPC). To allow the access, you must establish a network connection between MaxCompute and the specified object, such as an IP address, an endpoint, an ApsaraDB RDS instance, ApsaraDB for HBase, or Hadoop cluster. This topic describes the network architecture between MaxCompute and the object that you want to access and the supported network connection schemes.").
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
    

## Usage notes

Before you use UDFs, take note of the following items:

-   UDFs cannot compete with built-in functions in performance. We recommend that you preferentially use built-in functions to implement your business logic.
-   If you use a UDF in SQL statements, the memory usage of a computing job may exceed the default allocated memory size if a large amount of data is computed and data skew occurs. In this case, you can run the `set odps.sql.udf.joiner.jvm.memory=xxxx;` command at the session level to resolve the issue. For more information about the MaxCompute UDF FAQ, see [FAQ about MaxCompute UDFs](/help/en/maxcompute/user-guide/faq-about-maxcompute-udfs/#concept-2113685).
-   If the name of a UDF is the same as that of a built-in function, the UDF is preferentially called. For example, if UDF CONCAT and built-in function CONCAT both exist in MaxCompute, the system automatically calls UDF CONCAT instead of the built-in function CONCAT. If you want to call the built-in function, you must add the symbol `::` before the built-in function, for example, `select ::concat('ab', 'c');`.

## Development process

The following figure shows how to write a MaxCompute UDTF in Java and Python.

-   The following figure demonstrates how to write a MaxCompute UDF in Java. ![Write a UDF in Java](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7824246361/p332012.png)
    
        
    
    No.
    
    Required
    
    Description
    
    Platform
    
    References
    
    1
    
    No
    
    Before you can use Maven to write code, you must add the related SDK dependencies to the POM file. This ensures that the code can be compiled. The following SDK dependency shows an example:
    
    ```
    <dependency>
        <groupId>com.aliyun.odps</groupId>
        <artifactId>odps-sdk-udf</artifactId>
       <version>0.29.10-public</version>
    </dependency>
    ```
    
    You can search for `odps-sdk-udf` from [Maven repositories](https://search.maven.org/) to obtain the version of the SDK dependency.
    
    IntelliJ IDEA (Maven)
    
    None
    
    2
    
    Yes
    
    Write a UDF based on your business requirements.
    
    IntelliJ IDEA (Maven) and [MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db "MaxCompute Studio is a big data integrated development environment (IDE) tool that is provided by Alibaba Cloud MaxCompute. MaxCompute Studio is a development plug-in that is based on IntelliJ IDEA. MaxCompute Studio helps you develop data in a fast and convenient manner. This topic describes the basic user interfaces and common application scenarios of MaxCompute Studio.")
    
    [Develop a UDF in Java](/help/en/maxcompute/user-guide/develop-a-udf#task-2457023 "This topic describes how to develop a user-defined functions (UDF) in MaxCompute Studio. This includes how to write and debug a UDF.")
    
    3
    
    Yes
    
    Debug the UDF by running it on your on-premises machine or by performing unit testing to check whether the result meets expectations.
    
    4
    
    Yes
    
    Debug the UDF code to ensure that the code is packaged into a JAR file after it is successfully run on your on-premises machine.
    
    5
    
    Yes
    
    Upload the JAR file as a resource to your MaxCompute project.
    
    [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db "You can use the MaxCompute client to access MaxCompute projects and run commands. This topic describes how to install, configure, and run the MaxCompute client and provides related instructions."), [MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db "MaxCompute Studio is a big data integrated development environment (IDE) tool that is provided by Alibaba Cloud MaxCompute. MaxCompute Studio is a development plug-in that is based on IntelliJ IDEA. MaxCompute Studio helps you develop data in a fast and convenient manner. This topic describes the basic user interfaces and common application scenarios of MaxCompute Studio."), and [DataWorks](/help/en/dataworks/user-guide/create-and-use-maxcompute-resources#task-2509662 "This topic describes how to create, reference, and download a JAR or Python resource.")
    
    -   MaxCompute client
        -   [Add resources](/help/en/maxcompute/user-guide/resource-operations#section-533-s8q-d9w)
        -   [Create a function](/help/en/maxcompute/user-guide/function-operations#section-6r8-ozn-xjb)
    -   MaxCompute Studio
        
        [Package a Java program, upload the package, and create a MaxCompute UDF](/help/en/maxcompute/user-guide/package-a-java-program-upload-the-package-and-create-a-maxcompute-udf#task-2457652 "After you develop and debug a Java program, you must package the Java program into a JAR file and upload the JAR file to your MaxCompute project as a resource. Then, you can create a MaxCompute user-defined function (UDF). This topic describes how to package a Java program into a JAR file, upload the JAR file as a MaxCompute resource, and create a MaxCompute UDF.")
        
    
    6
    
    Yes
    
    Create a UDF based on the JAR file that you uploaded.
    
    7
    
    No
    
    Call the UDF in the query data code.
    
    None
    
-   The following figure demonstrates how to write a MaxCompute UDF in Python. ![Write a UDF in Python](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7824246361/p332001.png)
    
        
    
    No.
    
    Required
    
    Description
    
    Platform
    
    References
    
    1
    
    Yes
    
    Write a UDF based on your business requirements.
    
    [MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db "MaxCompute Studio is a big data integrated development environment (IDE) tool that is provided by Alibaba Cloud MaxCompute. MaxCompute Studio is a development plug-in that is based on IntelliJ IDEA. MaxCompute Studio helps you develop data in a fast and convenient manner. This topic describes the basic user interfaces and common application scenarios of MaxCompute Studio.")
    
    [Develop a Python UDF](/help/en/maxcompute/user-guide/develop-a-python-udf#task-2457034 "MaxCompute Studio allows you to develop Python user defined functions (UDFs). This topic describes how to develop, test, and publish a Python UDF.")
    
    2
    
    Yes
    
    Debug the UDF by running it on your on-premises machine or by performing unit testing to check whether the result meets expectations.
    
    3
    
    Yes
    
    Upload Python files or required resources, such as file resources, table resources, and third-party packages, to a MaxCompute project.
    
    [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db "You can use the MaxCompute client to access MaxCompute projects and run commands. This topic describes how to install, configure, and run the MaxCompute client and provides related instructions."), [MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db "MaxCompute Studio is a big data integrated development environment (IDE) tool that is provided by Alibaba Cloud MaxCompute. MaxCompute Studio is a development plug-in that is based on IntelliJ IDEA. MaxCompute Studio helps you develop data in a fast and convenient manner. This topic describes the basic user interfaces and common application scenarios of MaxCompute Studio."), and [DataWorks](/help/en/dataworks/user-guide/create-and-use-maxcompute-resources#task-2509662 "This topic describes how to create, reference, and download a JAR or Python resource.")
    
    -   MaxCompute client
        -   [Add resources](/help/en/maxcompute/user-guide/resource-operations#section-533-s8q-d9w)
        -   [Create a function](/help/en/maxcompute/user-guide/function-operations#section-6r8-ozn-xjb)
    -   MaxCompute Studio
        
        [Upload a Python program and create a MaxCompute UDF](/help/en/maxcompute/user-guide/upload-a-python-program-and-create-a-maxcompute-udf#task-2130253 "After you develop and debug a Python program, you must upload the Python program to your MaxCompute project as a resource. Then, you can create a MaxCompute user-defined function (UDF). This topic describes how to upload a Python program as a MaxCompute resource and create a MaxCompute UDF.")
        
    
    4
    
    Yes
    
    Create a UDF based on the uploaded Python files or required resources.
    
    5
    
    No
    
    Call the UDF in the query data code.
    
    None
    

## Instructions

Use the following methods to call UDFs:

-   Use a UDF in a MaxCompute project: The method is similar to that of using [built-in functions](/help/en/maxcompute/user-guide/mathematical-functions/#concept-ubn-3kb-5db "本版本取消翻译").
-   Use a UDF across projects: Use a UDF of Project B in Project A. The following statement shows an example: `select B:udf_in_other_project(arg0, arg1) as res from table_t;`. For more information about resource sharing across projects, see [Package-based resource sharing across projects](/help/en/maxcompute/user-guide/cross-project-resource-access-based-on-packages#concept-oq1-qk1-wdb "This topic describes how to implement resource sharing across projects.").
