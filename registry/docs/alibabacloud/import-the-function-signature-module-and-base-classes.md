The Python 2 version that is used by MaxCompute is Python 2.7. This topic describes how to write a user-defined aggregate function (UDAF) in Python 2.

## UDAF code structure

You can use [MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db) to write UDAF code in Python 2. The UDAF code can contain the following information:

-   Encoding declaration: optional.
    
    The declaration format is `#coding:utf-8` or `# -*- coding: utf-8 -*-`. The two formats are equivalent. If Chinese characters appear in UDAF code that is written in Python 2, an error is returned when you run the UDAF. To address this issue, you must add an encoding declaration to the header of the code.
    
-   Module import: required.
    
    UDAF code must include at least `from odps.udf import annotate` and `from odps.udf import BaseUDAF`. `from odps.udf import annotate` is used to import the function signature module. This way, MaxCompute can identify the function signature that is defined in the code. `from odps.udf import BaseUDAF` is a base class for Python UDAFs. You must use this class to implement methods such as `iterate`, `merge`, or `terminate` in derived classes.
    
    If you want to reference file or table resources in UDAF code, UDAF code must include `from odps.distcache import get_cache_file` or `from odps.distcache import get_cache_table`.
    
-   Function signature: required.
    
    The function signature is in the `@annotate(<signature>)` format. The `signature` parameter is used to define the data types of the input parameters and return value of the UDAF. For more information about function signatures, see [Function signatures and data types](#section-4ku-gmu-r0e).
    
-   Custom Python class (derived class): required.
    
    A custom Python class is the organizational unit of UDAF code. This class defines the variables and methods that are used to meet your business requirements. In UDAF code, you can also reference third-party libraries that are installed in MaxCompute or reference files or tables. For more information, see [Third-party libraries](#section-qyh-9l7-lrh) or [Reference resources](#section-8ug-qj3-w3d).
    
-   Methods to implement Python classes: required.
    
    The following table describes the four methods that can be used to implement Python classes. You can select a method based on your business requirements.
    
    Method
    
    Description
    
    `BaseUDAF.new_buffer()`
    
    Returns the intermediate value buffer of a UDAF. `buffer` must be a [marshallable](https://docs.python.org/3.3/library/marshal.html?spm=a2c4g.11186623.0.0.1f193bb8NAEjyk#module-marshal) object, such as LIST or DICT, and the `buffer` size cannot increase with the amount of data. In extreme cases, the `buffer` size cannot exceed 2 MB after the marshaling operation.
    
    `BaseUDAF.iterate(buffer[, args, ...])`
    
    Aggregates `args` into the intermediate value `buffer`.
    
    `BaseUDAF.merge(buffer, pbuffer)`
    
    Stores the merged results of `pbuffer` and the intermediate value `buffer` in the `buffer`.
    
    `BaseUDAF.terminate(buffer)`
    
    Converts `buffer` into a value of a basic data type in MaxCompute SQL.
    

Sample code:

```
#coding:utf-8
# Import the function signature module and base classes. 
from odps.udf import annotate
from odps.udf import BaseUDAF
# The function signature. 
@annotate('double->double')
# The custom Python class. 
class Average(BaseUDAF):
# Methods to implement Python classes. 
    def new_buffer(self):
        return [0, 0]
    def iterate(self, buffer, number):
        if number is not None:
            buffer[0] += number
            buffer[1] += 1
    def merge(self, buffer, pbuffer):
        buffer[0] += pbuffer[0]
        buffer[1] += pbuffer[1]
    def terminate(self, buffer):
        if buffer[1] == 0:
            return 0.0
        return buffer[0] / buffer[1]
```

## Limits

MaxCompute allows you to write Python 2 UDAFs in Python 2.7 and run the UDAF code in a sandbox environment. In this environment, the following operations are prohibited:

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

**Note** The use of third-party libraries is subject to some limits. For example, when you use a third-party library, you are not allowed to access local data and you can use only limited network I/O resources. The related APIs in the third-party libraries are disabled.

## Function signatures and data types

Format of function signatures:

```
@annotate(<signature>)
```

The `signature` parameter is a string that specifies the data types of the input parameters and return value. When you run a UDAF, the data types of input parameters and the return value of the UDAF must be consistent with the data types specified in the function signature. Data type consistency is checked during semantic parsing. If the data types are inconsistent, an error is returned. Format of function signature:

```
'arg_type_list -> type'
```

-   `arg_type_list`: indicates the data types of input parameters. If multiple input parameters are used, specify multiple data types and separate them with commas (,). The following data types are supported: BIGINT, STRING, DOUBLE, BOOLEAN, DATETIME, DECIMAL, FLOAT, BINARY, DATE, DECIMAL(precision,scale), CHAR, VARCHAR, complex data types (ARRAY, MAP, and STRUCT), and nested complex data types.
    
    `arg_type_list` can also be set to an asterisk (\*) or left empty.
    
    -   If `arg_type_list` is set to an asterisk (\*), a random number of input parameters are used.
    -   If `arg_type_list` is left empty, no input parameters are used.
    
-   `type`: specifies the data type of return values. For a UDAF, only one column of values is returned. The following data types are supported: BIGINT, STRING, DOUBLE, BOOLEAN, DATETIME, DECIMAL, FLOAT, BINARY, DATE, and DECIMAL(precision, scale). Complex data types, such as ARRAY, MAP, and STRUCT, and nested complex data types are also supported.

**Note** When you write UDAF code, you can select a data type based on the data type edition used by your MaxCompute project. For more information about data type editions and data types supported by each edition, see [Data type editions](/help/en/maxcompute/user-guide/data-type-editions#concept-jhp-4bb-5db).

The following table provides examples of valid function signatures.

Function signature

Description

`@annotate('bigint,double->string')`

The data types of input parameters are BIGINT and DOUBLE and the data type of the return values is STRING.

`@annotate('*->string')`

A random number of input parameters are used and the data type of the return values is STRING.

`@annotate('->double')`

No input parameters are used and the data type of the return values is DOUBLE.

`@annotate('array<bigint>->struct<x:string, y:int>')`

The data type of input parameters is ARRAY<BIGINT> and the data type of the return value is STRUCT<x:STRING, y:INT>.

The following table describes the mappings between the data types that are supported in MaxCompute SQL and the Python 2 data types. You must write Python UDAFs based on the mappings to ensure data type consistency. The following table describes the data type mappings.

MaxCompute SQL data type

Python 2 data type

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

You can reference files and tables in Python 2 UDAF code by using the `odps.distcache` module.

-   `odps.distcache.get_cache_file(resource_name)`: returns the content of a specific file.
    -   `resource_name` is a string that specifies the name of an existing file in your MaxCompute project. If the file name is invalid or the file does not exist, an error is returned.
        
        **Note** To reference a file in the UDAF code, you must declare the file when you create the UDAF. Otherwise, an error is returned when you call the UDAF.
        
    -   The return value is a file-like object. If this object is no longer used, you must call the `close` method to release the file.
-   `odps.distcache.get_cache_table(resource_name)`: returns the content of a specific table.
    -   `resource_name` is a string that specifies the name of an existing table in your MaxCompute project. If the table name is invalid or the table does not exist, an error is returned.
    -   The return value is of the GENERATOR type. The caller traverses the table to obtain the table content. A record of the ARRAY type is obtained each time the caller traverses the table.

For more information, see [Reference resources (Python 2 UDFs)](/help/en/maxcompute/user-guide/python-2-udfs#section-bj3-h3f-xdb) and [Reference resources (Python 2 UDTFs)](/help/en/maxcompute/user-guide/python-2-udtf#section-090-uc2-vo1).

## Usage notes

After you develop a Python 2 UDAF by following the instructions in [Development process](/help/en/doc-detail/317759.html#section-c6c-8u0-ggh), you can use MaxCompute SQL to call this UDAF. The following steps describe how to call a Python 2 UDAF:

-   Use a UDF in a MaxCompute project: The method is similar to that of using [built-in functions](/help/en/maxcompute/user-guide/mathematical-functions/#concept-ubn-3kb-5db).
-   Use a UDF across projects: Use a UDF of Project B in Project A. The following statement shows an example: `select B:udf_in_other_project(arg0, arg1) as res from table_t;`. For more information about resource sharing across projects, see [Cross-project resource access based on packages](/help/en/maxcompute/user-guide/cross-project-resource-access-based-on-packages#concept-oq1-qk1-wdb).

For more information about how to use MaxCompute Studio to develop and call a Python 2 UDAF, see [Develop a Python UDF](/help/en/maxcompute/user-guide/develop-a-python-udf#task-2457034).
