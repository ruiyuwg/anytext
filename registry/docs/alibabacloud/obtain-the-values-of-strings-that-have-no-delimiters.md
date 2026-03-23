This topic describes how to use a Java user-defined function (UDF) or a Python UDF to obtain the value of a specific key in a key-value pair string that does not have delimiters.

## Description

In this example, a UDF named **UDF\_EXTRACT\_KEY\_VALUE** is created.

-   Syntax:
    
    ```
    STRING UDF_EXTRACT_KEY_VALUE(STRING <s>, STRING <split1>, STRING <split2>, STRING <keyname>) 
    ```
    

-   Description:
    
    Uses **split1** to split the string **s** into key-value pairs, uses **split2** to split the key-value pairs into keys and values, and then obtains the value of the key that is specified by **keyname**.
    
    **Note**
    
    This UDF is not suitable for a string that has delimiters. For more information about how to obtain the value of a specific key in a string that has delimiters, see [Example: Obtain the values of strings that have delimiters](/help/en/maxcompute/user-guide/obtain-the-values-of-strings-that-have-delimiters).
    

-   Parameters:
    
    -   s: the source string. The value of this parameter is of the STRING data type. This parameter is required.
        
    -   split1: the string delimiter that you use to obtain key-value pairs. The value of this parameter is of the STRING data type. This parameter is required.
        
    -   split2: the key-value delimiter that you use to obtain keys and values. The value of this parameter is of the STRING data type. This parameter is required.
        
    -   keyname: the key whose value you want to obtain. The value of this parameter is of the STRING data type. This parameter is required.
        

## **Procedure**

### **1\. Write a UDF**

## Sample code of a Java UDF

```
package com.aliyun.rewrite; // Specify a package name. 
import com.aliyun.odps.udf.UDF;

import java.util.HashMap;
import java.util.Map;

public class ExtractKeyValue extends UDF{
    private static final int KEY_VALUE_LENGTH = 2;

    /**
     * Use split1 to split the string into key-value pairs. Then, use split2 to split the key-value pairs into keys and values.
     * @param str    The source string.
     * @param split1  The delimiter that is used to split a string into key-value pairs.
     * @param split2  The delimiter that is used to split key-value pairs into keys and values.
     * @param keyname The name of the key whose value you want to obtain.
     * @return The return value.
     */
    public String evaluate(String str, String split1, String split2, String keyname) {
        try {
            // Use split1 to split a string into key-value pairs.
            if (str == null || "".equals(str)) {
                return null;
            }
            Map<String, String> keyValueCache = new HashMap<>(8);
            String[] extractedKeyValues = str.split(split1);

            // Use split2 to split the obtained key-value pairs into keys and values.
            for (String keyValue : extractedKeyValues) {
                storeKeyValue(keyValueCache, keyValue, split2);
            }

            // Obtain the value of the specified key.
            return keyValueCache.get(keyname);
        } catch (Exception e) {
            return null;
        }
    }

    /**
     * Use the split parameter to split key-value pairs. Then, cache the obtained results in keyValueCache.
     *
     * @param keyValueCache The cached key-value pairs that are obtained after splitting.
     * @param keyValue      The key-value pairs that you want to split.
     * @param split         The delimiter.
     */
    private void storeKeyValue(Map<String, String> keyValueCache, String keyValue, String split) {
        if (keyValue == null || "".equals(keyValue)) {
            return;
        }
        String[] keyValueArr = keyValue.split(split);
        if (keyValueArr.length == KEY_VALUE_LENGTH) {
            keyValueCache.put(keyValueArr[0], keyValueArr[1]);
        }
    }
}
```

If you write a UDF in Java, you must inherit the UDF class. In this example, the **evaluate** method defines four input parameters of the **STRING** data type and the return value of the **STRING** data type. The data types of the input parameters and return value are used as the signature of the UDF in SQL statements. For information about other code specifications and requirements, see [Java UDFs](/help/en/maxcompute/user-guide/java-udfs).

## Sample code of a Python 3 UDF

```
from odps.udf import annotate


@annotate("string,string,string,string->string")
class ExtractKeyValue(object):
    def evaluate(self, s, split1, split2, keyname):
        if not s:
            return None
        # Use split1 to split a string into key-value pairs, and use split2 to split the key-value pairs into keys and values.
        key_value_cache = dict(kv.split(split2) for kv in s.split(split1) if kv)
        # Obtain the value of the specified key.
        return key_value_cache.get(keyname)
```

By default, Python 2 is used to run UDFs in MaxCompute projects. If you want to run UDFs in Python 3, run the following command at the session level: `set odps.sql.python.version=cp37`. For more information about Python 3 UDF specifications, see [Python 3 UDFs](/help/en/maxcompute/user-guide/python-3-udfs).

## Sample code of a Python 2 UDF

```
#coding:utf-8
from odps.udf import annotate


@annotate("string,string,string,string->string")
class ExtractKeyValue(object):
    def evaluate(self, s, split1, split2, keyname):
        if not s:
            return None
        # Use split1 to split a string into key-value pairs, and use split2 to split the key-value pairs into keys and values.
        key_value_cache = dict(kv.split(split2) for kv in s.split(split1) if kv)
        # Obtain the value of the specified key.
        return key_value_cache.get(keyname)
```

If Chinese characters appear in UDF code that is written in Python 2, an error is returned when you run the UDF. To address this issue, you must add an encoding declaration to the header of the code. The declaration format is `#coding:utf-8` or `# -*- coding: utf-8 -*-`. The two formats are equivalent. For more information about Python 2 UDF specifications, see [Python 2 UDFs](/help/en/maxcompute/user-guide/python-2-udfs).

### **2\. Upload resources and create a UDF**

After you develop and debug UDF code, upload resources to MaxCompute and create a UDF. In this example, a UDF named **UDF\_EXTRACT\_KEY\_VALUE** is created. For more information about how to upload resources and create a Java UDF, see [Package a Java program, upload the package, and create a MaxCompute UDF](/help/en/maxcompute/user-guide/package-a-java-program-upload-the-package-and-create-a-maxcompute-udf). For more information about how to upload resources and create a Python UDF, see [Upload a Python program and create a MaxCompute UDF](/help/en/maxcompute/user-guide/upload-a-python-program-and-create-a-maxcompute-udf).

### **3.** Use the UDF

After the UDF is created, run the following commands to obtain the value of the **name** key from a key-value pair string:

```
set odps.sql.python.version=cp37; -- To use a UDF in Python 3, run this command.
SELECT UDF_EXTRACT_KEY_VALUE('name:zhangsan;age:21;',';',':','name');
```

The following result is returned:

```
+----------+
| _c0      |
+----------+
| zhangsan |
+----------+
```
