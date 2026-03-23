The Read CSV File component allows you to read CSV files from Object Storage Service (OSS), HTTP, and Hadoop Distributed File System (HDFS) data sources. This topic describes how to configure the Read CSV File component.

## Limits

-   If you configure the Read CSV File component in the Machine Learning Platform for AI (PAI) console, only the computing resources of MaxCompute, Realtime Compute for Apache Flink, or Deep Learning Containers (DLC) are supported.
    
-   If you configure the Read CSV File component by using the PyAlink Script component, you must use the PyAlink Script component to call code. For more information, see [PyAlink Script](/help/en/pai/user-guide/pyalink-script#task-2203973).
    

## Prerequisites

-   (Optional) PAI is authorized to access OSS. For more information, see [Grant the permissions that are required to use Machine Learning Designer](/help/en/pai/user-guide/grant-the-permissions-that-are-required-to-use-machine-learning-designer#task799).
    
    **Note**
    
    You must perform the authorization if you select **OSS** for **fileSource**.
    
-   The **Default Resource Preferred by Alink or FlinkML** parameter on the **Pipeline Attributes** tab is configured. When you run components subsequently, the system automatically uses the resource type that you configured for this parameter.
    

## Configure the Read CSV File component

You can configure the Read CSV File component by using one of the following methods:

### Method 1: PAI console

The following table describes the parameters that you must configure on the Visualized Modeling (Designer) page.

**Tab**

**Parameter**

**Description**

**Parameter Setting**

**fileSource**

The source of the CSV file. Valid values: OSS and OTHERS.

**ossFilePath** or filePath

The path of the CSV file.

-   If you select **OSS** for **fileSource**, you can enter or select an OSS path. If you want to read a single file with a size of less than 1 GB, you can directly upload the CSV file to the specified OSS path on the Select OSS directory or file page.
    
-   If you select **OTHERS** for **fileSource**, you can enter a file path on an HTTP server or in an HDFS file system.
    

**Schema**

The data type for each column. Specify this parameter in the `colname0 coltype0, colname1 coltype1,colname2 coltype2...` format. Example: `f0 string,f1 bigint,f2 double`.

**Important**

-   The configured data type for each column must be the same as that of the CSV file that you want to read. Otherwise, the system fails to read data in the specific column of the CSV file.
    
-   Do not use periods (.) in fields. Otherwise, the component will fail.
    

**fieldDelimiter**

The field delimiter. By default, commas (,) are used.

**handleInvalidMethod**

The method that is used to handle invalid data of the Tensor, Vector, or MTable type if data of these types fails to be parsed. These data types are defined by the Alink algorithm framework and have a fixed parsing format. Valid values:

-   **ERROR**: The system stops reading the CSV file.
    
-   **SKIP**: The system skips the invalid data.
    

**ignoreFirstLine**

Specifies whether to skip data in the first row. You must turn on this switch if the first row of the CSV file that you want to read is table headers.

**lenient**

The method that is used to handle inconsistency when the schema of an input data record is inconsistent with the information specified by the **Schema** parameter. The inconsistency issue may lie in data types or the number of columns.

-   If **lenient** is turned on and data in a row fails to be parsed, the data in the row is discarded.
    
-   If **lenient** is turned off and data in a row fails to be parsed, the system stops reading the CSV file and displays the error row.
    

**quoteString**

The quote character. By default, double quotation marks (") are used.

**rowDelimiter**

The row delimiter. By default, line feeds (\\n) are used.

**skipBlankLine**

Specifies whether to skip blank rows.

**Execution Tuning**

**Number of Workers**

The number of nodes. The value must be a positive integer. This parameter must be used with the **Memory per worker** parameter. Valid values: 1 to 9999.

**Memory per worker**

The memory size of each node. Unit: MB. The value must be a positive integer. Valid values: 1024 to 65536.

### Method 2: PyAlink Script component

The following table describes the parameters that you must configure when you use the PyAlink Script component to configure the Read CSV File component. For more information about the PyAlink Script component, see [PyAlink Script](/help/en/pai/user-guide/pyalink-script#task-2203973).

**Parameter**

**Required**

**Description**

**Default value**

schemaStr

Yes

The data type of the CSV file. Specify this parameter in the colname0 coltype0\[, colname1 coltype1\[, ...\]\] format. Example: f0 string,f1 bigint,f2 double.

None

filePath

No

The path of the CSV file.

None

fieldDelimiter

No

The field delimiter.

Comma (,)

handleInvalidMethod

No

The method that is used to handle invalid data of the Tensor, Vector, or MTable type. Data of these types fails to be parsed. These data types are defined by the Alink algorithm framework and have a fixed parsing format. Valid values:

-   **ERROR**: The system stops reading the CSV file.
    
-   **SKIP**: The system skips the invalid data.
    

ERROR

ignoreFirstLine

No

Specifies whether to skip data in the first row. You must set this parameter to True if the first row of the CSV file that you want to read is table headers.

False

lenient

No

The method that is used to handle inconsistency when the schema of an input data record is inconsistent with the information specified by the **Schema** parameter. The inconsistency issue may lie in data types or the number of columns.

-   true: The data in the row is discarded.
    
-   false: An error message is returned.
    

False

quoteString

No

The quote character.

Double quotation mark (")

rowDelimiter

No

The row delimiter.

Line feed (\\n)

skipBlankLine

No

Specifies whether to skip blank rows.

True

Sample PyAlink script:

```
filePath = 'https://alink-test-data.oss-cn-hangzhou.aliyuncs.com/iris.csv'
schema = 'sepal_length double, sepal_width double, petal_length double, petal_width double, category string'
csvSource = CsvSourceBatchOp()\
    .setFilePath(filePath)\
    .setSchemaStr(schema)\
    .setFieldDelimiter(",")
BatchOperator.collectToDataframe(csvSource)
```
