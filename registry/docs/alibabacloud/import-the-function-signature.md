The Python 2 version that is used by MaxCompute is Python 2.7. This topic describes how to write a user-defined function (UDF) in Python 2.

## UDF code structure

You can use [MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db) to write UDF code in Python 2. The UDF code can contain the following information:

-   Encoding declaration: optional.
    
    The declaration format is `#coding:utf-8` or `# -*- coding: utf-8 -*-`. The two formats are equivalent. If Chinese characters appear in UDF code that is written in Python 2, an error is returned when you run the UDF. To address this issue, you must add an encoding declaration to the header of the code.
    
-   Module import: required.
    
    UDF code must include `from odps.udf import annotate`, which is used to import the function signature. This way, MaxCompute can identify the function signature that is defined in the code. If you want to reference files or tables in UDF code, the UDF code must include `from odps.distcache import get_cache_file` or `from odps.distcache import get_cache_table`.
    
-   Function signature: required.
    
    The function signature is in the `@annotate(<signature>)` format. The `signature` parameter is used to define the data types of the input parameters and return value of the UDF. For more information about function signatures, see [Function signatures and data types](#section-mrj-cgf-xdb).
    
-   Custom Python class: required.
    
    A custom Python class is the organizational unit of UDF code. This class defines the variables and methods that are used to meet your business requirements. In UDF code, you can also reference third-party libraries that are installed in MaxCompute or reference files or tables. For more information, see [Third-party libraries](#section-lrw-zff-xdb) or [Reference resources](#section-bj3-h3f-xdb).
    
-   `evaluate` method: required.
    
    The evaluate method is contained in the custom Python class. The `evaluate` method defines the input parameters and return value of the UDF. Each Python class can contain only one `evaluate` method.
    

Sample code:

```
#coding:utf-8
# Import the function signature. 
from odps.udf import annotate
# The function signature. 
@annotate("bigint,bigint->bigint")
# The custom Python class. 
class MyPlus(object):
# The evaluate method. 
   def evaluate(self, arg0, arg1):
       if None in (arg0, arg1):
           return None
       return arg0 + arg1
```

## Limits

MaxCompute allows you to write Python 2 UDFs in Python 2.7 and run the UDF code in a sandbox environment. In this environment, the following operations are prohibited:

-   Read data from and write data to local files.
    
-   Start subprocesses.
    
-   Start threads.
    
-   Enable socket communication.
    
-   Use other systems to call Python 2 UDFs.
    

Due to these limits, the code that you upload must be written by using Python standard libraries. If modules or C extension modules in Python standard libraries are involved in the preceding operations, these modules cannot be used. Take note of the following points about modules in Python standard libraries:

-   All the modules that are implemented based on Python standard libraries and do not depend on extension modules are available.
    
-   The following C extension modules are available:
    
    -   array and audioop
        
    -   binascii and bisect
        
    -   cmath, \_codecs\_cn, \_codecs\_hk, \_codecs\_iso2022, \_codecs\_jp, \_codecs\_kr, \_codecs\_tw, \_collections, and cStringIO
        
    -   datetime
        
    -   \_functools and future\_builtins
        
    -   \_heapq and \_hashlib
        
    -   itertools
        
    -   \_json
        
    -   \_locale and \_lsprof
        
    -   math, \_md5, and \_multibytecodec
        
    -   operator
        
    -   \_random
        
    -   \_sha256, \_sha512, \_sha, \_struct, and strop
        
    -   time
        
    -   unicodedata
        
    -   \_weakref
        
    -   cPickle
        
-   When you run UDF code in a sandbox environment, the maximum size of data that can be written to the standard output (sys.stdout) or standard error output (`sys.stderr`) is 20 KB. If the size exceeds 20 KB, extra characters are ignored.
    

## Third-party libraries

Third-party libraries, such as NumPy, are installed in the Python 2 environment of MaxCompute as supplements to standard libraries.

**Note**

The use of third-party libraries is subject to some limits. For example, when you use a third-party library, you are not allowed to access local data and you can use only limited network I/O resources. The related APIs in the third-party libraries are disabled.

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

**MaxCompute SQL data type**

**Python 2 data type**

BIGINT

INT

STRING

STR

DOUBLE

FLOAT

BOOLEAN

BOOL

DATETIME

INT

FLOAT

FLOAT

CHAR

STR

VARCHAR

STR

BINARY

BYTEARRAY

DATE

INT

DECIMAL

DECIMAL.DECIMAL

ARRAY

LIST

MAP

DICT

STRUCT

COLLECTIONS.NAMEDTUPLE

**Note**

-   The DATETIME type supported in MaxCompute SQL is mapped to the Python data type INT. A value of the INT type follows the UNIX format, which is the number of milliseconds that have elapsed since 00:00:00 Thursday, January 1, 1970. You can process data of the DATETIME type by using the DATETIME module in Python standard libraries.
    
-   The `silent` parameter is added to `odps.udf.int(value)`. If the `silent` parameter is set to True and the data type of `value` cannot be converted into the INT type, None is returned, and no error is returned.
    
-   NULL in MaxCompute SQL is mapped to None in Python 2.
    

## Reference resources

You can reference files or tables in Python 2 UDF code by using the `odps.distcache` module.

-   `odps.distcache.get_cache_file(resource_name)`: returns the content of a specified file.
    
    -   `resource_name` is a string that specifies the name of an existing file in your MaxCompute project. If the file name is invalid or the file does not exist, an error is returned.
        
        **Note**
        
        To reference a file in UDF code, you must declare the file when you create the UDF. Otherwise, an error is returned when you call the UDF.
        
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
    
-   `odps.distcache.get_cache_table(resource_name)`: returns the content of a specified table.
    
    -   `resource_name` is a string that specifies the name of an existing table in your MaxCompute project. If the table name is invalid or the table does not exist, an error is returned.
        
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
    

## Development process

When you develop a UDF, you must make preparations, write UDF code, upload the Python program, create the UDF, debug the UDF, and call the UDF. MaxCompute allows you to use multiple tools to develop a UDF, such as MaxCompute Studio, DataWorks, and the MaxCompute client (odpscmd).

-   The process of using various tools to develop UDFs in Python 2 is the same as the process of developing UDFs in Python 3. For more information about the development process and examples on how to develop a UDF in Python, see [Development process](/help/en/maxcompute/user-guide/python-3-udfs#2631e65019nam).
    
-   For more information about how to use MaxCompute Studio to develop and call a UDF in Python 2, see [Develop a Python UDF](/help/en/maxcompute/user-guide/develop-a-python-udf#task-2457034).
    

## Usage notes

After you develop a Python 2 UDF, you can use MaxCompute SQL to call this UDF. You can call a Python 2 UDF by using one of the following methods:

-   Use a UDF in a MaxCompute project: The method is similar to that of using [built-in functions](/help/en/maxcompute/user-guide/mathematical-functions/#concept-ubn-3kb-5db).
    
-   Use a UDF across projects: Use a UDF of Project B in Project A. The following statement shows an example: `select B:udf_in_other_project(arg0, arg1) as res from table_t;`. For more information about cross-project sharing, see [Cross-project resource access based on packages](/help/en/maxcompute/user-guide/cross-project-resource-access-based-on-packages#concept-oq1-qk1-wdb).
