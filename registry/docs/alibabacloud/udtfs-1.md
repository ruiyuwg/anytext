This topic describes how to create, register, and use a Python user-defined table-valued function (UDTF) in Realtime Compute for Apache Flink.

## Description

A UDTF takes zero, one, or more scalar values as input parameters. These parameters can be variable-length parameters. UDTFs can return any number of rows instead of a single value. The returned rows can include one or more columns. Multiple rows or columns are returned each time a UDTF is called. UDTFs are similar to user-defined scalar functions (UDFs) but differ in the results they return.

## Limits

Services provided by Realtime Compute for Apache Flink are subject to deployment environments and network environments. Therefore, when you develop Python UDFs in Realtime Compute for Apache Flink, take note of the following limits:

-   Only Apache Flink 1.12 and later are supported.
    
-   Python is pre-installed on a Realtime Compute for Apache Flink workspace. Therefore, you must develop code in Python of the required version.
    
    **Note**
    
    Python 3.7.9 is pre-installed in Realtime Compute for Apache Flink that uses a Ververica Runtime (VVR) version earlier than 8.0.11. Python 3.9.21 is pre-installed in Realtime Compute for Apache Flink that uses VVR 8.0.11 or later. After you upgrade the VVR version to 8.0.11 or later, you must test, deploy, and run the PyFlink drafts of the earlier VVR version again.
    
-   JDK 8 and JDK 11 are supported in the runtime environment of Realtime Compute for Apache Flink. If your Python deployment depends on a third-party JAR package, make sure that the JAR package is compatible with JDK 8 or JDK 11.
    
-   Only open source Scala 2.11 is supported. If your Python deployment depends on a third-party JAR package, make sure that the JAR package is compatible with Scala 2.11.
    

## Create a UDTF

**Note**

Flink provides sample code of Python user-defined extensions (UDXs) for you to develop UDXs. The sample code includes the implementation of Python UDFs, Python user-defined aggregate functions (UDAFs), and Python UDTFs. This section describes how to create a UDTF in the Windows operating system.

1.  Download and decompress the [python\_demo-master](https://github.com/RealtimeCompute/python_demo) package to your on-premises machine.
    
2.  In the main menu bar of PyCharm, choose **File** > **Open** to open the decompressed python\_demo-master package.
    
3.  Double-click the udtfs.py file in the \\python\_demo-master\\udx directory. Then, modify the content of the file based on your business requirements.
    
    In this example, split defines the code that can separate a row of string into multiple columns of strings with vertical bars (|).
    
    ```
    from pyflink.table import DataTypes
    from pyflink.table.udf import udtf
    
    @udtf(result_types=[DataTypes.STRING(), DataTypes.STRING()])
    def split(s: str):
        splits = s.split("|")
        yield splits[0], splits[1]
    ```
    
4.  Go to the \\python\_demo directory to which the udx folder belongs and run the following command to package the files in the directory:
    
    ```
    zip -r python_demo.zip udx
    ```
    
    If the python\_demo.zip package appears in the \\python\_demo\\ directory, the UDTF is developed.
    

## Register a UDTF

For more information about how to register a UDTF, see [Manage user-defined functions (UDFs)](/help/en/flink/realtime-flink/user-guide/manage-udfs#section-i7a-1jx-mgw).

## Use a UDTF

After you register a UDTF, you can perform the following steps to use the UDTF:

1.  Use Flink SQL to create a draft. For more information, see [Job development overview](/help/en/flink/realtime-flink/user-guide/develop-an-sql-draft#task-2046613).
    
    After the aa string and the message field in each row of string in the ASI\_UDTF\_Source table are concatenated with vertical bars (|), the concatenated strings are separated into multiple columns of strings by vertical bars (|). The following code shows an example:
    
    ```
    CREATE TEMPORARY TABLE ASI_UDTF_Source (
      `message`  VARCHAR
    ) WITH (
      'connector'='datagen'
    );
    
    CREATE TEMPORARY TABLE ASI_UDTF_Sink (
      name  VARCHAR,
      place  VARCHAR
    ) WITH (
      'connector' = 'blackhole'
    );
    
    INSERT INTO ASI_UDTF_Sink
    SELECT name,place
    FROM ASI_UDTF_Source,lateral table(split(concat_ws('|', `message`, 'aa'))) as T(name,place);
    ```
    
2.  In the left-side navigation pane of the development console of Realtime Compute for Apache Flink, choose **O&M** > **Deployments**. On the Deployments page, find the desired deployment and click **Start** in the **Actions** column.
    
    After the deployment is started, two columns of data are inserted into the ASI\_UDTF\_Sink table. The two columns of data contain the concatenated strings that are separated by vertical bars (|)
