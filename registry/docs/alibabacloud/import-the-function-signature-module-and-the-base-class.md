Python Software Foundation announced the End of Life (EOL) for Python 2. Due to this reason, MaxCompute supports Python 3 and uses CPython 3.7.3. This topic describes how to write user-defined table-valued function (UDTF) code in Python 3.

## UDTF code structure

You can use [MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db "MaxCompute Studio is a big data integrated development environment (IDE) tool that is provided by Alibaba Cloud MaxCompute. MaxCompute Studio is a development plug-in that is based on IntelliJ IDEA. MaxCompute Studio helps you develop data in a fast and convenient manner. This topic describes the basic user interfaces and common application scenarios of MaxCompute Studio.") to write UDTF code in Python 3. The code can contain the following information:

-   Module import: required.
    
    UDTF code must include `from odps.udf import annotate` and `from odps.udf import BaseUDTF`. `from odps.udf import annotate` is used to import the function signature module. This way, MaxCompute can identify the function signature that is defined in the code. `from odps.udf import BaseUDTF` is the base class for Python UDTFs. You must use this class to implement methods such as `process` and `close` in derived classes.
    
    If you want to reference files or tables in UDTF code, UDTF code must include `from odps.distcache import get_cache_file` or `from odps.distcache import get_cache_table`.
    
-   Function signature: optional.
    
    The function signature is in the `@annotate(<signature>)` format. The `signature` parameter is used to define the data types of the input parameters and return values of the UDTF. If you do not specify a function signature, input parameters of any data type can be matched when you call a UDTF in SQL statements. As a result, the data types of the return values cannot be inferred and all output parameters are of the STRING type. For more information about function signatures, see [Function signatures and data types](#section-mma-c2t-z9m).
    
-   Custom Python class (derived class): required.
    
    A custom Python class is the organizational unit of UDTF code. This class defines the variables and methods that are used to meet your business requirements. In UDTF code, you can reference third-party libraries that are built in MaxCompute or reference files or tables. For more information, see [Third-party libraries](#section-4rs-i6m-jyn) or [Reference resources](#section-u8e-fox-q8m).
    
-   Methods to implement Python classes: required.
    
    Four methods can be used to implement Python classes. The following table describes these methods.
    
     
    
    Method
    
    Description
    
    `BaseUDTF.init()`
    
    The initialization method. To implement this method for a derived class, you must call the `super(BaseUDTF, self).init()` initialization method of the base class when you start to run code. The `INIT` method is called only once throughout the lifecycle of a UDTF. This method is called only before the first record is processed. If a UDTF needs to save internal states, all states can be initialized by using this method.
    
    `BaseUDTF.process([args, ...])`
    
    The `process` function is called once for each SQL record. The parameters of the `process` function are the input parameters of the UDTF that is specified in SQL statements.
    
    `BaseUDTF.forward([args, ...])`
    
    The output method of a UDTF. This method is called by user code. One output record is generated each time the `forward` method is called. The parameters in the `forward` method are the UDTF output parameters that are specified in SQL statements.
    
    If no function signature is specified in the Python code, all output values must be converted into the STRING type when the `forward` method is called.
    
    `BaseUDTF.close()`
    
    The method to terminate a UDTF. This method is called only once. It is called only before the last record is processed.
    

The following example shows the UDTF code.

```
# Import the function signature module and the base class. 
from odps.udf import annotate
from odps.udf import BaseUDTF
# The function signature. 
@annotate('string -> string')
# The custom Python class. 
class Explode(BaseUDTF):
# Methods used to implement the custom Python class. 
   def process(self, arg):
       props = arg.split(',')
       for p in props:
           self.forward(p)
```

**Note** The underlying Python versions of Python 2 UDTFs and Python 3 UDTFs are different. You must write a UDTF based on the capabilities of the Python version that you use.

## Limits

Python 3 is incompatible with Python 2. Due to this reason, you cannot use Python 2 code and Python 3 code in a single SQL statement at the same time.

## Port Python 2 UDTFs

Python Software Foundation announced the EOL for Python 2. Therefore, we recommend that you port Python 2 UDTFs. The method used to port Python 2 UDTFs varies based on the types of MaxCompute projects.

-   New project: If your project is a new MaxCompute project or you use Python to write a UDTF in the project for the first time, we recommend that you use Python 3 to write all Python UDTFs.
-   Existing project: If your project is an existing project in which a large number of Python 2 UDTFs are created, exercise caution when you enable Python 3. If you plan to gradually replace Python 2 UDTFs with Python 3 UDTFs, use one of the following methods:
    -   Use Python 3 to write new UDTFs and enable Python 3 for new jobs at the session level. For more information about how to enable Python 3, see [Enable Python 3](#section-iq8-7m0-ygs).
    -   Rewrite Python 2 UDTFs to make them compatible with both Python 2 and Python 3. For more information about how to rewrite UDTFs, see [Porting Python 2 Code to Python 3](https://docs.python.org/3/howto/pyporting.html).
        
        **Note** If you need to write a public UDTF and grant multiple MaxCompute projects the permissions on the UDTF, we recommend that you make sure that the UDTF is compatible with both Python 2 and Python 3.
        

## Enable Python 3

By default, Python 2 is used to write UDFs in a MaxCompute project. If you want to write UDFs in Python 3, add the following command before the SQL statement that you want to execute. Then, commit and execute the statement.

```
set odps.sql.python.version=cp37;
```

## Third-party libraries

NumPy is not installed in the Python 3 runtime environment in MaxCompute. To use a NumPy UDTF, you must manually upload a NumPy wheel package. If you obtain a NumPy wheel package from Python Package Index (PyPI) or obtain this package from an image, the file name is numpy-<Version>-cp37-cp37m-manylinux1\_x86\_64.whl. For more information about how to upload a file, see [Resource operations](/help/en/maxcompute/user-guide/resource-operations#concept-pps-h1f-vdb "Resource is a concept specific to MaxCompute. To accomplish jobs by using user-defined functions (UDFs) or MapReduce, you must upload files as MaxCompute resources. This topic describes common operations on resources, such as adding, viewing, downloading, and deleting resources.") or [Reference third-party packages in Python UDFs](/help/en/maxcompute/user-guide/reference-third-party-packages-in-python-udfs#task-1994991 "MaxCompute allows you to reference third-party packages in Python user-defined functions (UDFs), such as NumPy packages, third-party packages that need to be compiled, and third-party packages that are dependent on dynamic-link libraries (DLLs). This topic describes how to reference third-party packages in Python UDFs.").

## Function signatures and data types

Format of function signatures:

```
@annotate(<signature>)
```

`signature` is a function signature string. This parameter is used to identify the data types of the input parameters and return values. When a UDTF is run, the input parameters and return values of the UDTF must be of the same data type as those specified in the function signature. The system checks whether the UDTF complies with the definition of the function signature during semantics parsing. If the data types of the UDTF are inconsistent with the data types specified in the function signature, an error is returned. The signature is in the following format:

```
'arg_type_list -> type_list'
```

Parameter description:

-   `type_list`: indicates the data types of return values. A UDTF can return multiple columns. The following data types are supported: BIGINT, STRING, DOUBLE, BOOLEAN, DATETIME, DECIMAL, FLOAT, BINARY, DATE, DECIMAL(precision,scale), complex data types (ARRAY, MAP, and STRUCT), and nested complex data types.
-   `arg_type_list`: indicates the data types of input parameters. If multiple input parameters are used, specify multiple data types and separate them with commas (,). The following data types are supported: BIGINT, STRING, DOUBLE, BOOLEAN, DATETIME, DECIMAL, FLOAT, BINARY, DATE, DECIMAL(precision,scale), CHAR, VARCHAR, complex data types (ARRAY, MAP, and STRUCT), and nested complex data types.
    
    `arg_type_list` can also be set to an asterisk (\*) or left empty.
    
    -   If `arg_type_list` is set to an asterisk (\*), a random number of input parameters are used.
    -   If `arg_type_list` is left empty, no input parameters are used.
    

**Note** When you write UDTF code, you can select a data type based on the data type edition of your MaxCompute project. For more information about data type editions and the data types supported by each edition, see [Data type editions](/help/en/maxcompute/user-guide/data-type-editions#concept-jhp-4bb-5db "MaxCompute V2.0 supports two data type editions: MaxCompute V2.0 data type edition and Hive-compatible data type edition. These editions are compatible with mainstream open source products. In addition to these editions, MaxCompute still supports the MaxCompute V1.0 data type edition.").

The following table provides examples of valid function signatures.

 

Function signature

Description

`@annotate('bigint,boolean->string,datetime')`

The data types of the input parameters are BIGINT and BOOLEAN. The data types of the return values are STRING and DATETIME.

`` `@annotate('*->string, datetime')` ``

A random number of input parameters are used and the data types of the return values are STRING and DATETIME.

`` `@annotate('->double, bigint, string')` ``

No input parameters are used, and the data types of the return values are DOUBLE, BIGINT, and STRING.

`` `@annotate("array<string>,struct<a1:bigint,b1:string>,string->map<string,bigint>,struct<b1:bigint>")` ``

The data types of the input parameters are ARRAY, STRUCT, and MAP. The data types of the return values are MAP and STRUCT.

The following table describes the mappings between the data types that are supported by MaxCompute projects and the Python data types. You must write Python UDTFs based on the mappings to ensure data type consistency. The following table describes the data type mappings.

 

MaxCompute SQL data type

Python 3 data type

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

You can reference files and tables in Python UDTFs by using the `odps.distcache` module.

-   `odps.distcache.get_cache_file(resource_name)`: returns the content of a specific file.
    -   `resource_name` is a string that specifies the name of an existing file in your MaxCompute project. If the file name is invalid or the file does not exist, an error is returned.
        
        **Note** To reference a file in a UDTF, you must declare the file resource when you create the UDTF. Otherwise, an error is returned when the UDTF is called.
        
    -   The return value is a file-like object. If this object is no longer used, you must call the `close` method to release the open file.
-   `odps.distcache.get_cache_table(resource_name)`: returns the content of a specified table.
    -   `resource_name` is a string that specifies the name of an existing table in your MaxCompute project. If the table name is invalid or the table does not exist, an error is returned.
    -   The return value is of the generator type. The caller traverses the table to obtain the content. Each time the caller traverses the table, a record of the ARRAY type is generated.

The following sample code shows how to reference files and tables.

```
from odps.udf import annotate
from odps.udf import BaseUDTF
from odps.distcache import get_cache_file
from odps.distcache import get_cache_table
@annotate('string -> string, bigint')
class UDTFExample(BaseUDTF):
    """Read pageid and adid_list from the file and table to generate dict.
    """
    def __init__(self):
        import json
        cache_file = get_cache_file('test_json.txt')
        self.my_dict = json.load(cache_file)
        cache_file.close()
        records = list(get_cache_table('table_resource1'))
        for record in records:
            self.my_dict[record[0]] = record[1]
    """Enter pageid and generate pageid and all adid values.
    """
    def process(self, pageid):
        for adid in self.my_dict[pageid]:
            self.forward(pageid, adid)
```

## Instructions

After you develop a Python 3 UDTF by following the instructions in [Development process](/help/en/doc-detail/317759.html#section-c6c-8u0-ggh), you can use MaxCompute SQL to call the Python 3 UDTF. You can use one of the following methods to call the Python 3 UDTF:

-   Use a UDF in a MaxCompute project: The method is similar to that of using [built-in functions](/help/en/maxcompute/user-guide/mathematical-functions/#concept-ubn-3kb-5db "MaxCompute SQL provides common mathematical functions that you can use for development. You can select mathematical functions based on your business requirements for data computing and data type conversions. This topic describes the syntax, parameters, and examples of mathematical functions supported by MaxCompute SQL.").
-   Use a UDF across projects: Use a UDF of Project B in Project A. The following statement shows an example: `select B:udf_in_other_project(arg0, arg1) as res from table_t;`. For more information about resource sharing across projects, see [Package-based resource sharing across projects](/help/en/maxcompute/user-guide/cross-project-resource-access-based-on-packages#concept-oq1-qk1-wdb "This topic describes how to implement resource sharing across projects.").

For more information about how to use MaxCompute Studio to develop and call a Python 3 UDTF, see [Develop a Python UDF](/help/en/maxcompute/user-guide/develop-a-python-udf#task-2457034 "MaxCompute Studio allows you to develop Python user defined functions (UDFs). This topic describes how to develop, test, and publish a Python UDF.").
