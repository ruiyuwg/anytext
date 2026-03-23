MaxCompute lets you write a user-defined function (UDF) in Python 3 to meet your business logic requirements. This topic describes how to write a UDF in Python 3.

## UDF code structure

You can use [MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db) to write UDF code in Python 3. The UDF code must contain the following components:

-   Module import: required.
    
    UDF code must include `from odps.udf import annotate`, which is used to import the function signature. This way, MaxCompute can identify the function signature that is defined in the code. If you want to reference files or tables in UDF code, the UDF code must include `from odps.distcache import get_cache_file` or `from odps.distcache import get_cache_table`.
    
-   Function signature: required.
    
    The function signature uses the `@annotate(<signature>)` format. The `signature` parameter defines the data types of the input parameters and the return value. For more information, see [Function signatures and data types](#section-ys0-064-qyv).
    
-   Custom Python class: required.
    
    A custom Python class is the organizational unit of UDF code. This class defines the variables and methods that are used to meet your business requirements. In UDF code, you can also reference third-party libraries that are installed in MaxCompute or reference files or tables. For more information, see [Third-party libraries](#section-znp-c3k-k51) or [Reference resources](#section-800-lwi-ba6).
    
-   `evaluate` method: required.
    
    The evaluate method is contained in the custom Python class. The `evaluate` method defines the input parameters and return value of the UDF. Each Python class can contain only one `evaluate` method.
    

Sample code:

```
# Import the function signature module.
from odps.udf import annotate
# Define the function signature.
@annotate("bigint,bigint->bigint")
# Define the custom Python class.
class MyPlus(object):
# Define the evaluate method.
    def evaluate(self, arg0, arg1):
        if None in (arg0, arg1):
            return None
        return arg0 + arg1
```

## Limitations

-   ### **Accessing the internet**
    
    By default, UDFs cannot access the internet. To access the internet from a UDF, fill out and submit the Network Connection Request Form. The MaxCompute technical support team will contact you to enable network access. For instructions on how to fill out the form, see [Network Access Process](/help/en/maxcompute/user-guide/network-connection-process/#concept-1964315).
    
-   ### **Accessing a VPC**
    
    By default, UDFs cannot access VPCs. If your UDF needs to access resources in a VPC, you must first create a network connection between your MaxCompute project and the target VPC. You can then access the VPC resources from the UDF. For more information, see [Access resources in a VPC using a UDF](/help/en/maxcompute/user-guide/use-udfs-to-access-resources-in-vpcs).
    
-   ### **Reading table data**
    
    The current version does not support using UDFs, UDAFs, or UDTFs to read data from the following types of tables:
    
    -   Tables whose schemas have been modified (Schema Evolution).
        
    -   Tables that contain complex data types.
        
    -   Tables that contain the JSON data type.
        
    -   Transactional table data.
        

## Precautions

Python 3 is not compatible with Python 2. You cannot use both Python 2 and Python 3 code in the same SQL statement.

**Note**

The Python Software Foundation announced the end of life (EOL) for Python 2 in early 2020. We recommend that you migrate your UDFs based on your project requirements.

## **Development process**

When you develop a UDF, you must make preparations, write UDF code, upload the Python program, create the UDF, debug the UDF, and call the UDF. MaxCompute lets you use multiple tools to develop a UDF, such as MaxCompute Studio, DataWorks, and the MaxCompute client (odpscmd). This section provides examples on how to develop a UDF using MaxCompute Studio, DataWorks, and the MaxCompute client (odpscmd).

## Use MaxCompute Studio

1.  Make preparations.
    
    Before you use MaxCompute Studio to develop and debug a UDF, you must install MaxCompute Studio and connect it to a MaxCompute project. For more information, see the following topics:
    
    1.  [Install MaxCompute Studio](/help/en/maxcompute/user-guide/install-intellij-idea#task-hbh-3gy-5db)
        
    2.  [Connect to a MaxCompute project](/help/en/maxcompute/user-guide/manage-project-connections#task-2456405)
        
    3.  [Configure a Python development environment](/help/en/maxcompute/user-guide/configure-a-python-development-environment)
        
    
2.  Write UDF code.
    
    1.  In the **Project** section, right-click **scripts** under the **MaxCompute script module** and choose **New** > **MaxCompute Python**.
        
    2.  In the **Create new MaxCompute python class** dialog box, enter a class name in the **Name** field, select **python UDF** from the Kind drop-down list, and then click **OK**.
        
    3.  Write UDF code in the code editor.
        
        ```
        from odps.udf import annotate
        
        @annotate("string,bigint->string")
        class GetUrlChar(object):
        
            def evaluate(self, url, n):
                if n == 0:
                    return ""
                try:
                    index = url.find(".htm")
                    if index < 0:
                        return ""
                    a = url[:index]
                    index = a.rfind("/")
                    b = a[index + 1:]
                    c = b.split("-")
                    if len(c) < n:
                        return ""
                    return c[-n]
                except Exception:
                    return "Internal error"
        ```
        
        **Note**
        
        For information about debugging Java User-Defined Functions (UDFs) locally, see [Test UDFs](/help/en/maxcompute/user-guide/develop-a-python-udf#section-5m7-5hd-ei4).
        
    
3.  Upload the Python program and create the UDF.
    
    Right-click the desired Python program in the scripts folder and select **Deploy to server…**. In the Submit resource and register function dialog box, configure the name of the function and click **OK**. For more information, see [Upload a Python program and create a MaxCompute UDF](/help/en/maxcompute/user-guide/upload-a-python-program-and-create-a-maxcompute-udf).
    
    In this example, the function name is **UDF\_GET\_URL\_CHAR**.
    
4.  Call the UDF.
    
    In the navigation pane on the left, click the **Project Explore** tab. Right-click the MaxCompute project to which the UDF belongs, select **Open Console**, enter the SQL statement that is used to call the UDF, and then press Enter to execute the SQL statement. Sample statement:
    
    ```
    SET odps.sql.python.version=cp37; -- This command is required to enable Python 3 for the UDF.
    SELECT UDF_GET_URL_CHAR("http://www.taobao.com/a.htm", 1);
    ```
    
    The following result is returned:
    
    ```
    +-----+
    | _c0 |
    +-----+
    |  a  |
    +-----+
    ```
    

## Use DataWorks

1.  Make preparations.
    
    Before you use DataWorks to develop and debug a UDF, you must activate DataWorks and associate a DataWorks workspace with a MaxCompute project. For more information, see [DataWorks](/help/en/maxcompute/user-guide/query-editor-in-the-maxcompute-console).
    
2.  Write the UDF code.
    
    You can develop the UDF code in any Python development tool and package it. The following is sample code.
    
    ```
    from odps.udf import annotate
    
    @annotate("string,bigint->string")
    class GetUrlChar(object):
    
        def evaluate(self, url, n):
            if n == 0:
                return ""
            try:
                index = url.find(".htm")
                if index < 0:
                    return ""
                a = url[:index]
                index = a.rfind("/")
                b = a[index + 1:]
                c = b.split("-")
                if len(c) < n:
                    return ""
                return c[-n]
            except Exception:
                return "Internal error"
    ```
    
3.  Upload the Python program and create the UDF.
    
    You can upload the code package that you package in the DataWorks console and create the UDF. For more information, see the following topics:
    
    1.  [Create and use MaxCompute resources](/help/en/dataworks/user-guide/create-and-use-maxcompute-resources)
        
    2.  [Creating and using user-defined functions](/help/en/dataworks/user-guide/create-and-use-custom-functions)
        
4.  Call the UDF.
    
    After you create a UDF, you can create an ODPS SQL node in the DataWorks console. You can write and create SQL statements in the ODPS SQL node to call and debug the UDF. For more information about how to create an ODPS SQL node, see [Develop a MaxCompute SQL task](/help/en/dataworks/user-guide/create-an-odps-sql-node). Sample statement:
    
    ```
    SET odps.sql.python.version=cp37; -- This command is required to enable Python 3 for the UDF.
    SELECT UDF_GET_URL_CHAR("http://www.taobao.com/a.htm", 1);
    ```
    

## **Use the MaxCompute client (odpscmd)**

1.  Make preparations.
    
    Before you use the MaxCompute client to develop and debug a UDF, you must download the MaxCompute client installation package (GitHub), install the MaxCompute client, and then configure the config file to connect to the MaxCompute project. For more information, see [MaxCompute client (odpscmd)](/help/en/maxcompute/user-guide/maxcompute-client).
    
2.  Write the UDF code.
    
    You can develop the UDF code in any Python development tool and package it. The following is sample code.
    
    ```
    from odps.udf import annotate
    
    @annotate("string,bigint->string")
    class GetUrlChar(object):
    
        def evaluate(self, url, n):
            if n == 0:
                return ""
            try:
                index = url.find(".htm")
                if index < 0:
                    return ""
                a = url[:index]
                index = a.rfind("/")
                b = a[index + 1:]
                c = b.split("-")
                if len(c) < n:
                    return ""
                return c[-n]
            except Exception:
                return "Internal error"
    ```
    
3.  Upload the Python program and create the UDF.
    
    You can upload the JAR file that you package on the MaxCompute client and create the UDF. For more information, see the following topics:
    
    1.  [ADD PY](/help/en/maxcompute/user-guide/add-py)
        
    2.  [CREATE FUNCTION](/help/en/maxcompute/user-guide/create-function)
        
4.  Call the UDF.
    
    After you create a UDF, you can write and create SQL statements to call and debug the UDF. Example:
    
    ```
    SET odps.sql.python.version=cp37; -- This command is required to enable Python 3 for the UDF.
    SELECT UDF_GET_URL_CHAR("http://www.taobao.com/a.htm", 1);
    ```
    

## UDF development: installing the third-party library Numpy

The NumPy third-party library is not installed in the built-in Python 3 runtime environment of MaxCompute. To use NumPy in a UDF, you must manually upload the NumPy WHEEL package. When you download the NumPy package from PyPI or a mirror, the package file is named numpy-<version number>-cp37-cp37m-manylinux1\_x86\_64.whl. For more information about how to upload the package, see [Resource operations](/help/en/maxcompute/user-guide/resource-operations#concept-pps-h1f-vdb) or [Use third-party packages in Python UDFs](/help/en/maxcompute/user-guide/reference-third-party-packages-in-python-udfs#task-1994991).

For more information about standard libraries that are supported by Python 3, see [The Python Standard Library](https://docs.python.org/3.7/library/index.html).

## Function signatures and data types

Format of function signatures:

```
@annotate(<signature>)
```

The `signature` parameter is a string that specifies the data types of input parameters and return value. When you run a UDF, the data types of the input parameters and return value of the UDF must be consistent with the data types specified in the function signature. The data type consistency is checked during semantic parsing. If the data types are inconsistent, an error is returned. Format of a signature:

```
'arg_type_list -> type'
```

Parameter description:

-   `arg_type_list`: specifies the data types of input parameters. If multiple input parameters are used, their data types are separated by commas (,). The following data types are supported: BIGINT, STRING, DOUBLE, BOOLEAN, DATETIME, DECIMAL, FLOAT, BINARY, DATE, DECIMAL(precision,scale), CHAR, and VARCHAR. Complex data types, such as ARRAY, MAP, and STRUCT, and nested complex data types are also supported.
    
    `arg_type_list` can be represented by an asterisk (\*) or left empty ('').
    
    -   If `arg_type_list` is represented by an asterisk (\*), a random number of input parameters are allowed.
        
    -   If `arg_type_list` is left empty (''), no input parameters are used.
        
    
-   `type`: specifies the data type of the return value. For a UDF, only one column of values is returned. The following data types are supported: BIGINT, STRING, DOUBLE, BOOLEAN, DATETIME, DECIMAL, FLOAT, BINARY, DATE, and DECIMAL(precision,scale). Complex data types, such as ARRAY, MAP, and STRUCT, and nested complex data types are also supported.
    

**Note**

When you write UDF code, you can select a data type based on the MaxCompute data type edition that is used by your MaxCompute project. For more information about MaxCompute data type editions and the data types supported in each edition, see [Data type editions](/help/en/maxcompute/user-guide/data-type-editions#concept-jhp-4bb-5db).

The following table provides examples of valid function signatures.

**Function signature**

**Description**

`'bigint,double->string'`

The data types of the input parameters are BIGINT and DOUBLE and the data type of the return value is STRING.

`'*->string'`

A random number of input parameters are used and the data type of the return value is STRING.

`'->double'`

No input parameters are used and the data type of the return value is DOUBLE.

`'array<bigint>->struct<x:string, y:int>'`

The data type of the input parameters is ARRAY<BIGINT> and the data type of the return value is STRUCT<x:STRING, y:INT>.

`'->map<bigint, string>'`

No input parameters are used and the data type of the return value is MAP<BIGINT, STRING>.

The following table describes the mappings between the data types that are supported in MaxCompute SQL and the Python 2 data types. You must write Python UDFs based on the mappings to ensure the consistency of data types.

**MaxCompute SQL Type**

**Python 3 Type**

BIGINT

INT

STRING

UNICODE

DOUBLE

FLOAT

BOOLEAN

BOOL

DATETIME

DATETIME.DATETIME

FLOAT

FLOAT

CHAR

UNICODE

VARCHAR

UNICODE

BINARY

BYTES

DATE

DATETIME.DATE

DECIMAL

DECIMAL.DECIMAL

ARRAY

LIST

MAP

DICT

STRUCT

COLLECTIONS.NAMEDTUPLE

## Reference resources

You can reference files or tables in Python 2 UDF code by using the `odps.distcache` module.

-   `odps.distcache.get_cache_file(resource_name, mode)`: Returns the content of a specified file resource in the specified `mode`.
    
    -   `resource_name` is a string that specifies the name of an existing table in your MaxCompute project. If the table name is invalid or the table does not exist, an error is returned.
        
    -   `mode`: A STRING that specifies the open mode. The default value is `'t'`. If `mode` is `'t'`, the file is opened in text format. If `mode` is `'b'`, the file is opened in binary format.
        
    -   The return value is a file-like object. If this object is no longer used, you must call the `close` method to release the open file.
        
    
    The following code shows how to reference a file.
    
    ```
    from odps.udf import annotate
    from odps.distcache import get_cache_file
    @annotate('bigint->string')
    class DistCacheExample(object):
    def __init__(self):
        cache_file = get_cache_file('test_distcache.txt')
        kv = {}
        for line in cache_file:
            line = line.strip()
            if not line:
                continue
            k, v = line.split()
            kv[int(k)] = v
        cache_file.close()
        self.kv = kv
    def evaluate(self, arg):
        return self.kv.get(arg)
    ```
    
-   `odps.distcache.get_cache_table(resource_name)`: Returns the content of a specified table resource.
    
    -   `resource_name`: The name of an existing table resource in the current MaxCompute project. If the resource name is invalid or the resource does not exist, an exception is returned. You can read data of the BIGINT, STRING, DOUBLE, BOOLEAN, DATETIME, FLOAT, CHAR, VARCHAR, BINARY, DATE, DECIMAL, ARRAY, MAP, and STRUCT types from the table.
        
    -   The return value is of the GENERATOR data type. The caller traverses the table to obtain the table content. A record of the ARRAY type is obtained each time the caller traverses the table.
        

The following code shows how to reference a table.

```
from odps.udf import annotate
from odps.distcache import get_cache_table
@annotate('->string')
class DistCacheTableExample(object):
    def __init__(self):
        self.records = list(get_cache_table('udf_test'))
        self.counter = 0
        self.ln = len(self.records)
    def evaluate(self):
        if self.counter > self.ln - 1:
            return None
        ret = self.records[self.counter]
        self.counter += 1
        return str(ret)
```

## Usage notes

After you develop a Python 3 UDF, you can use MaxCompute SQL to call the UDF. For more information about how to call a Python 3 UDF, see [Development process](/help/en/doc-detail/317759.html#section-c6c-8u0-ggh). You can call a UDF in Python 3 using one of the following methods:

### **Enable Python 3**

By default, Python 2 is used to write UDFs in a MaxCompute project. If you want to write UDFs in Python 3, add the following command before the SQL statement that you want to execute. Then, commit and execute the statement.

```
set odps.sql.python.version=cp37;
```

### **Call a UDF**

-   To use a UDF within its own MaxCompute project, you can call it in the same way as a [built-in function](/help/en/maxcompute/user-guide/mathematical-functions/#concept-ubn-3kb-5db).
    
-   To use a UDF from another project, for example, to use a UDF from Project B in Project A, you must prefix the function call with the project name. The following statement is an example: `select B:udf_in_other_project(arg0, arg1) as res from table_t;`. For more information, see [Access resources across projects using packages](/help/en/maxcompute/user-guide/cross-project-resource-access-based-on-packages#concept-oq1-qk1-wdb).
    

## Port Python 2 UDFs

The Python Software Foundation announced the EOL for Python 2 in early 2020. Therefore, we recommend that you port Python 2 UDFs.

-   In a new project or an existing project for which you write UDFs in Python for the first time, we recommend that you use Python 3 to write all Python UDFs.
    
-   In an existing project where many Python 2 UDFs exist, proceed with caution when you enable Python 3. If you want to replace Python 2 UDFs with Python 3 UDFs, use the following methods:
    
    -   Use Python 3 to write new UDFs and enable Python 3 for new jobs at the session level. For more information about how to enable Python 3, see [Enable Python 3](#0eb1eda0191wx).
        
    -   Rewrite Python 2 UDFs in a manner in which the UDFs are compatible with Python 2 and Python 3. For more information about how to rewrite UDFs, see [Porting Python 2 Code to Python 3](https://docs.python.org/3/howto/pyporting.html).
        
        **Note**
        
        If you want to write a public UDF that is shared among multiple projects, we recommend that you use a UDF that is compatible with Python 2 and Python 3.
        

## **UDF development example**

-   [Write a Hive UDF in Java](/help/en/maxcompute/user-guide/write-a-hive-udf-in-java)
    
-   [Use complex data types in Java UDFs](/help/en/maxcompute/user-guide/use-complex-data-types-in-java-udfs)
    
-   [Replace strings by using regular expressions](/help/en/maxcompute/user-guide/replace-strings-by-using-regular-expressions)
    
-   [Obtain the values of strings that have no delimiters](/help/en/maxcompute/user-guide/obtain-the-values-of-strings-that-have-no-delimiters)
    
-   [Obtain the values of strings that have delimiters](/help/en/maxcompute/user-guide/obtain-the-values-of-strings-that-have-delimiters)
    
-   [Reference a file resource](/help/en/maxcompute/user-guide/reference-a-file-resource)
    
-   [Reference a table resource](/help/en/maxcompute/user-guide/reference-a-table-resource)
    
-   [Reference third-party packages in Python UDFs](/help/en/maxcompute/user-guide/reference-third-party-packages-in-python-udfs)
