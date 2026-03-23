This topic describes how to run a Java UDF or Python UDF to replace a string by using a regular expression.

## Description

In this example, a UDF named **UDF\_REPLACE\_BY\_REGEXP** is created.

-   Syntax:
    
    ```
    string UDF_REPLACE_BY_REGEXP(string <s>, string <regex>, string <replacement>) 
    ```
    

-   Description:
    
    Replaces the string **s** with the string **replacement** by using the regular expression **regex**. Compared with the built-in function [REGEXP\_REPLACE](/help/en/maxcompute/user-guide/string-functions/#section-k2w-2d1-wdb) of MaxCompute, the UDF allows you to use variables in a regular expression.
    

-   Parameters:
    
    -   s: the source string. The value of this parameter is of the STRING data type. This parameter is required.
        
    -   regex: the regular expression. The value of this parameter is of the STRING data type. This parameter is required.
        
    -   replacement: the string that replaces the source string by using a regular expression. The value of this parameter is of the STRING data type. This parameter is required.
        

## **Development and usage procedure**

### **1\. Write a UDF**

## Sample code of a Java UDF

```
package com.aliyun.rewrite; // Specify a package name. 
import com.aliyun.odps.udf.UDF;
import com.aliyun.odps.udf.annotation.UdfProperty;

import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@UdfProperty(isDeterministic=true)
public class ReplaceByRegExp extends UDF {
    /**
     * The regular expression in the most recent query, which is cached to avoid multiple compilations.
     */
    private String lastRegex = "";
    private Pattern pattern = null;

    /**
     * @param s The source string.
     * @param regex The regular expression.
     * @param replacement The string that replaces the source string.
     */
    public String evaluate(String s, String regex, String replacement) {
        Objects.requireNonNull(s, "The source string cannot be null");
        Objects.requireNonNull(regex, "The regular expression cannot be null");
        Objects.requireNonNull(replacement, "The string that replaces the source string cannot be null");

        // If the regular expression is changed, recompile the regular expression. 
        if (!regex.equals(lastRegex)) {
            lastRegex = regex;
            pattern = Pattern.compile(regex);
        }
        Matcher m = pattern.matcher(s);
        StringBuffer sb = new StringBuffer();

        // Perform text replacement.
        while (m.find()) {
            m.appendReplacement(sb, replacement);
        }
        m.appendTail(sb);
        return sb.toString();
    }
}
```

If you write a UDF in Java, you must inherit the UDF class. In this example, the **evaluate** method defines three input parameters of the **STRING** data type and the return value of the **STRING** data type. The data types of the input parameters and return value are used as the signature of the UDF in SQL statements. For more information about other code specifications and requirements, see [Java UDFs](/help/en/maxcompute/user-guide/java-udfs).

## Sample code of a Python 3 UDF

```
from odps.udf import annotate
import re

@annotate("string,string,string->string")
class ReplaceByRegExp(object):
    def __init__(self):
        self.lastRegex = ""
        self.pattern = None

    def evaluate(self, s, regex, replacement):
        if not s or not regex or not replacement:
            raise ValueError("Arguments with None")
        # If the regular expression is changed, recompile the regular expression. 
        if regex != self.lastRegex:
            self.lastRegex = regex
            self.pattern = re.compile(regex)
        result = self.pattern.sub(replacement, s)
        return result
```

By default, Python 2 is used to run UDFs in MaxCompute projects. If you want to run UDFs in Python 3, run the following command at the session level: `set odps.sql.python.version=cp37`. For more information about Python 3 UDF specifications, see [Python 3 UDFs](/help/en/maxcompute/user-guide/python-3-udfs).

## Sample code of a Python 2 UDF

```
#coding:utf-8
from odps.udf import annotate
import re

@annotate("string,string,string->string")
class ReplaceByRegExp(object):
    def __init__(self):
        self.lastRegex = ""
        self.pattern = None

    def evaluate(self, s, regex, replacement):
        if not s or not regex or not replacement:
            raise ValueError("Arguments with None")
        # If the regular expression is changed, recompile the regular expression. 
        if regex != self.lastRegex:
            self.lastRegex = regex
            self.pattern = re.compile(regex)
        result = self.pattern.sub(replacement, s)
        return result
```

If Chinese characters appear in UDF code that is written in Python 2, an error is returned when you run the UDF. To address this issue, you must add an encoding declaration to the header of the code. The declaration format is `#coding:utf-8` or `# -*- coding: utf-8 -*-`. The two formats are equivalent. For more information about Python 2 UDF specifications, see [Python 2 UDFs](/help/en/maxcompute/user-guide/python-2-udfs).

### **2\. Upload resources and create a UDF**

After you develop and debug UDF code, upload resources to MaxCompute and create a UDF. In this example, a UDF named **UDF\_REPLACE\_BY\_REGEXP** is created. For more information about how to upload resources and create a Java UDF, see [Package a Java program, upload the package, and create a MaxCompute UDF](/help/en/maxcompute/user-guide/package-a-java-program-upload-the-package-and-create-a-maxcompute-udf). For more information about how to upload resources and create a Python UDF, see [Upload a Python program and create a MaxCompute UDF](/help/en/maxcompute/user-guide/upload-a-python-program-and-create-a-maxcompute-udf).

### **3.** Use the UDF

After the UDF is created, run the following commands to replace all digits in the string with number signs (#):

```
set odps.sql.python.version=cp37; -- To use a UDF in Python 3, run this command.
SELECT UDF_REPLACE_BY_REGEXP('abc 123 def 456', '\\d+', '#');
```

The following result is returned:

```
+--------------+
| _c0          |
+--------------+
| abc # def #  |
+--------------+
```
