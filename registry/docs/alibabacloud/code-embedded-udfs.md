This topic describes how to use code-embedded user-defined functions (UDFs) to embed Java or Python code into SQL scripts.

## Background information

Code-embedded UDFs of MaxCompute resolve the following issues in code implementation and maintenance:

-   Complicated code implementation: After you create UDFs and develop code, you must compile the code in Java and create resources and functions.
    
-   Inconvenient code maintenance: You cannot directly view the implementation logic of the UDFs that are referenced in SQL scripts or obtain the source code of JAR packages.
    
-   Poor code readability: To implement Java library functions by using user-defined types (UDTs), you need to convert Java code into expressions in long code lines. In addition, you may fail to write some Java code as expressions. Example:
    
    ```
    Foo f = new Foo();
    f.execute();
    f.getResult();
    ```
    

## Description

Code-embedded UDFs allow you to embed Java or Python code into SQL scripts. When you compile a script, Janino-compiler identifies and extracts the embedded code, compiles the code in Java, and then dynamically generates resources and creates temporary functions.

You can place SQL scripts and third-party code lines in the same source code file. This simplifies the usage of UDTs or UDFs and facilitates daily development and maintenance.

## Limits

You can use only Janino-compiler to compile embedded Java code. The syntax of the embedded Java code must be a subset of the standard JDK syntax. Embedded Java code has the following limits:

-   Lambda expressions are not supported.
    
-   You cannot specify multiple types of exceptions in a single catch block. For example, `catch(Exception1 | Exception2 e)` is not allowed.
    
-   It cannot automatically infer generic arguments. For example, `Map map = new HashMap<>();` is not supported.
    
-   Expressions for type argument inference are ignored. You must use cast expressions to specify the argument type, such as `(String) myMap.get(key)`.
    
-   Assertions are forcefully enabled, even if the \-ea option of the Java virtual machine (JVM) is used.
    
-   Code that is programmed in versions later than Java 8 is not supported.
    

## Reference embedded code in a UDT

The following code provides an example. You need to submit the SQL statements in script mode. For more information, see [SQL in script mode](/help/en/maxcompute/user-guide/sql-in-script-mode#concept-f4h-hnc-bfb).

```
SELECT 
  s, 
  com.mypackage.Foo.extractNumber(s) 
FROM VALUES ('abc123def'),('apple') AS t(s);

#CODE ('lang'='JAVA')
package com.mypackage;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
public class Foo {
  final static Pattern compile = Pattern.compile(".*?([0-9]+).*");
  public static String extractNumber(String input) {
    final Matcher m = compile.matcher(input);
    if (m.find()) {
      return m.group(1);
    }
    return null;
  }
}
#END CODE;
```

-   `#CODE` indicates the beginning of the embedded code block. `#END CODE` indicates the end of the embedded code block. In this example, the embedded code block is placed at the end of the script and applies to the whole script.
    
-   `'lang'='JAVA'` indicates that the embedded code is in Java. JAVA can be replaced with `PYTHON` if you compile code in Python.
    
-   You can use UDT syntax in the SQL script to call `Foo.extractNumber`.
    

## Define and call a Java code-embedded UDF

The following code provides an example. You need to submit the SQL statements in script mode. For more information, see [SQL in script mode](/help/en/maxcompute/user-guide/sql-in-script-mode#concept-f4h-hnc-bfb).

```
CREATE TEMPORARY FUNCTION foo AS 'com.mypackage.Reverse' USING
#CODE ('lang'='JAVA')
package com.mypackage;
import com.aliyun.odps.udf.UDF;
public class Reverse extends UDF {
  public String evaluate(String input) {
    if (input == null) return null;
    StringBuilder ret = new StringBuilder();
    for (int i = input.toCharArray().length - 1; i >= 0; i--) {
      ret.append(input.toCharArray()[i]);
    }
    return ret.toString();
  }
}
#END CODE;

SELECT foo('abdc');
```

-   The embedded code block can be placed after `USING` or at the end of a script. The code block placed after `USING` applies only to the `CREATE TEMPORARY FUNCTION` statement.
    
-   The function created by `CREATE TEMPORARY FUNCTION` is a temporary function. This temporary function takes effect only during the current execution process and is not stored in the MaxCompute metadata system. For more information about how to create a permanent function and store it in the MaxCompute metadata system, see [CREATE SQL FUNCTION](/help/en/maxcompute/user-guide/create-sql-function#reference-2240107).
    

## Define and call a Java code-embedded UDTF

The following code provides an example. You need to submit the SQL statements in script mode. For more information, see [SQL in script mode](/help/en/maxcompute/user-guide/sql-in-script-mode#concept-f4h-hnc-bfb).

```
CREATE TEMPORARY FUNCTION foo AS 'com.mypackage.Reverse' USING 
#CODE ('lang'='JAVA', 'filename'='embedded.jar')
package com.mypackage;

import com.aliyun.odps.udf.UDTF;
import com.aliyun.odps.udf.UDFException;
import com.aliyun.odps.udf.annotation.Resolve;

@Resolve({"string->string,string"})
public class Reverse extends UDTF {
  @Override
  public void process(Object[] objects) throws UDFException {
    String str = (String) objects[0];
    String[] split = str.split(",");
    forward(split[0], split[1]);
  }
}

#END CODE;

SELECT foo('ab,dc') AS (a,b);
```

The return value of `@Resolve` must be of the `string[]` type. However, Janino-compiler cannot identify `"string->string,string"` as `string[]`. To address this issue, parameters commented by `@Resolve` must be enclosed in braces `{}`. When you create a Java UDTF by using a common method, braces `{}` are not required.

## Define and call a Python code-embedded UDF

The following code provides an example. You need to submit the SQL statements in script mode. For more information, see [SQL in script mode](/help/en/maxcompute/user-guide/sql-in-script-mode#concept-f4h-hnc-bfb).

```
CREATE TEMPORARY FUNCTION foo AS 'embedded.UDFTest' USING
#CODE ('lang'='PYTHON', 'filename'='embedded')
from odps.udf import annotate
@annotate("bigint->bigint")
class UDFTest(object):
  def evaluate(self, a):
    return a * a
#END CODE;

SELECT foo(4);
```

-   The indentation of Python code must comply with the specifications of the Python language.
    
-   When you create a Python UDF, the class name that follows the `AS` clause must contain the file name of the Python source code. You can use `'filename'='embedded'` to specify a virtual file name.
    
-   For more information about the development and use of different versions of Python, see the following topics:
    
    -   Python 2: [Develop a UDF in Python 2](/help/en/maxcompute/user-guide/python-2-udfs)
        
    -   Python 3: [Develop a UDF in Python 3](/help/en/maxcompute/user-guide/python-3-udfs)
