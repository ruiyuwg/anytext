This topic describes how to use a Java user-defined function (UDF) or Python UDF to obtain the value that corresponds to a specific key in a key-value pair string. The key or value has delimiters.

## Description

In this example, a UDF named **UDF\_EXTRACT\_KEY\_VALUE\_WITH\_SPLIT** is registered. The following section describes the function syntax and input parameters.

```
string UDF_EXTRACT_KEY_VALUE_WITH_SPLIT(string <s>, string <split1>, string <split2>, string <keyname>)
```

-   Function description: This function uses the delimiter specified by **split1** to obtain key-value pairs from the string specified by **s** and uses the delimiter specified by **split2** to obtain the keys and values. Then, the value that corresponds to the key specified by **keyname** is returned. Unlike the [UDF that is used to obtain the values of strings that have no delimiters](/help/en/maxcompute/user-guide/obtain-the-values-of-strings-that-have-no-delimiters), this UDF applies to strings that have delimiters in keys or values.
    
-   Parameters:
    
    -   s: the string that you want to split, which is of the STRING type. This parameter is required.
        
    -   split1: the string delimiter that you use to obtain key-value pairs, which is of the STRING type. This parameter is required.
        
    -   split2: the key/value delimiter that you use to obtain the keys and values, which is of the STRING type. This parameter is required.
        
    -   keyname: the key whose value you want to obtain, which is of the STRING type. This parameter is required.
        

## **Development and usage procedure**

### **1\. Write a UDF**

## Sample code of a Java UDF

```
package com.aliyun.rewrite; // The package name, which is user-defined. 
import com.aliyun.odps.udf.UDF;

public class ExtractKeyValueWithSplit extends UDF{
    /**
     * Use split1 to split the string and obtain key-value pairs. Then, use split2 to split the key-value pairs and obtain the keys and values.
     * @param str    The source string.
     * @param split1  The delimiter that is used to split a string and obtain key-value pairs.
     * @param split2  The delimiter that is used to split key-value pairs and obtain the keys and values.
     * @param keyname The name of the key whose value you want to obtain.
     * @return The returned value.
     */
    public String evaluate(String str, String split1, String split2, String keyname) {
        if(str==null || split1==null || split2==null || keyname==null){
            return null;
        }
        try {
            // Combine keyname and split2.
            String keySplit = keyname + split2;

            // Traverse the string. Use split1 to split the string and obtain key-value pairs. 
            for(String subStr: str.split(split1)){
                // Use split2 to split the key-value pairs and obtain the keys and values. Then, obtain the value that corresponds to a specific key.
                if (subStr.startsWith(keySplit)){
                    return subStr.substring(keySplit.length());
                }
            }
        } catch (Exception e) {
            return null;
        }
        return null;
    }
}
```

If you write a Java UDF, you must inherit the UDF class. In this example, the **evaluate** method defines four input parameters of the **STRING** type and a return value of the STRING type. The data types of the input parameters and return value are used as the function signature of the UDF in SQL statements. For information about other code specifications and requirements, see [Java UDFs](/help/en/maxcompute/user-guide/java-udfs).

## Sample code of a Python 3 UDF

```
from odps.udf import annotate


@annotate("string,string,string,string->string")
class ExtractKeyValueWithSplit(object):
    def evaluate(self, s, split1, split2, keyname):
        if not s:
            return None
        key_split = keyname + split2
        # Traverse the string. Use split1 to split the string and obtain key-value pairs. 
        for subStr in s.split(split1):
            # Use split2 to split the key-value pairs and obtain the keys and values. Then, obtain the value that corresponds to a specific key.
            if subStr.startswith(key_split):
                return subStr[len(key_split):]
```

By default, Python 2 is used to run UDFs in MaxCompute projects. If you want to run UDFs in Python 3, run the following command at the session level: `set odps.sql.python.version=cp37`. For more information about Python 3 UDF specifications, see [Python 3 UDFs](/help/en/maxcompute/user-guide/python-3-udfs).

## Sample code of a Python 2 UDF

```
#coding:utf-8
from odps.udf import annotate


@annotate("string,string,string,string->string")
class ExtractKeyValueWithSplit(object):
    def evaluate(self, s, split1, split2, keyname):
        if not s:
            return None
        key_split = keyname + split2
        # Traverse the string. Use split1 to split the string and obtain key-value pairs. 
        for subStr in s.split(split1):
            # Use split2 to split the key-value pairs and obtain the keys and values. Then, obtain the value that corresponds to a specific key.
            if subStr.startswith(key_split):
                return subStr[len(key_split):]
```

If Chinese characters appear in UDF code that is written in Python 2, an error is returned when you run the UDF. To address this issue, you must add an encoding declaration to the header of the code. The declaration format is `#coding:utf-8` or `# -*- coding: utf-8 -*-`. The two formats are equivalent. For more information about Python 2 UDF specifications, see [Python 2 UDFs](/help/en/maxcompute/user-guide/python-2-udfs).

### **2\. Upload resources and register the UDF**

After you write and debug a UDF, you must upload the UDF code to MaxCompute and register the UDF. In this example, the UDF named **UDF\_EXTRACT\_KEY\_VALUE\_WITH\_SPLIT** is registered. For more information about how to upload and register a Java UDF, see [Package a Java program, upload the package, and create a MaxCompute UDF](/help/en/maxcompute/user-guide/package-a-java-program-upload-the-package-and-create-a-maxcompute-udf). For more information about how to upload and register a Python UDF, see [Upload a Python program and create a MaxCompute UDF](/help/en/maxcompute/user-guide/upload-a-python-program-and-create-a-maxcompute-udf).

### **3.** Use the UDF

After you register the UDF, run the following commands to obtain the value that corresponds to the key **name** from a key-value pair string. The value that corresponds to the key **name** contains delimiters.

```
set odps.sql.python.version=cp37; -- If you want to use a Python 3 UDF, run this command.
SELECT UDF_EXTRACT_KEY_VALUE_WITH_SPLIT('name:zhangsang:man;age:2;', ';', ':', 'name');
```

The following result is returned:

```
+--------------+
| _c0          |
+--------------+
| zhangsan:man |
+--------------+
```
