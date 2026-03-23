This topic describes how to use a Hive user-defined function (UDF) whose Hive version is compatible with MaxCompute on the MaxCompute client.

## Prerequisites

The MaxCompute client is installed. For more information, see [Install and configure the MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#section-vd2-4me-7uu).

## Precautions

Before you use a Hive UDF, take note of the following points:

-   When you run the `ADD JAR` command to add resource packages for a Hive UDF on the MaxCompute client, you must specify all JAR files that you want to add. This is because MaxCompute cannot automatically add all JAR files to the classpath.
    
-   To call a Hive UDF, you must add the `set odps.sql.hive.compatible=true;` command before the SQL statement that you want to execute. Then, commit and execute the command and SQL statement together.
    
-   If a Java UDF runs in a distributed environment, the UDF is limited by the Java sandbox for MaxCompute. For more information, see [Java sandbox](/help/en/maxcompute/user-guide/java-sandbox#concept-aln-lrf-vdb).
    
-   The UDF starts a new process for calculation. If cluster resources are insufficient, there is a small probability that the UDF fails to run due to the timeout of the startup of the new process.
    

## Sample code

Sample code:

```
package com.aliyun.odps.compiler.hive;
import org.apache.hadoop.hive.ql.exec.UDFArgumentException;
import org.apache.hadoop.hive.ql.metadata.HiveException;
import org.apache.hadoop.hive.ql.udf.generic.GenericUDF;
import org.apache.hadoop.hive.serde2.objectinspector.ObjectInspector;
import org.apache.hadoop.hive.serde2.objectinspector.ObjectInspectorFactory;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
public class Collect extends GenericUDF {
  @Override
  public ObjectInspector initialize(ObjectInspector[] objectInspectors) throws UDFArgumentException {
    if (objectInspectors.length == 0) {
      throw new UDFArgumentException("Collect: input args should >= 1");
    }
    for (int i = 1; i < objectInspectors.length; i++) {
      if (objectInspectors[i] != objectInspectors[0]) {
        throw new UDFArgumentException("Collect: input oi should be the same for all args");
      }
    }
    return ObjectInspectorFactory.getStandardListObjectInspector(objectInspectors[0]);
  }
  @Override
  public Object evaluate(DeferredObject[] deferredObjects) throws HiveException {
    List<Object> objectList = new ArrayList<>(deferredObjects.length);
    for (DeferredObject deferredObject : deferredObjects) {
      objectList.add(deferredObject.get());
    }
    return objectList;
  }
  @Override
  public String getDisplayString(String[] strings) {
    return "Collect";
  }
}
```

The preceding code packages a random number of parameters that are of any data type into an array. In this example, the JAR file of the Hive UDF is named test.jar.

## Procedure

1.  [Install and start the MaxCompute client.](/help/en/maxcompute/getting-started/start-the-maxcompute-client#task-2079377)
    
2.  Package the [sample code](#section-01f-rhn-q75) into a JAR file by using Hive. Then, run the following command to add the JAR file as a MaxCompute resource.
    
    ```
    -- Add the JAR file as a MaxCompute resource. 
    add jar test.jar;
    ```
    
    For more information about how to add resources, see [Add resources](/help/en/maxcompute/user-guide/resource-operations#section-533-s8q-d9w).
    
3.  Run the following command to create a UDF:
    
    ```
    -- Create a UDF. 
    create function hive_collect as 'com.aliyun.odps.compiler.hive.Collect' using 'test.jar';
    ```
    
    For more information about how to create a UDF, see [Create a UDF](/help/en/maxcompute/user-guide/function-operations#section-6r8-ozn-xjb).
    
4.  Run the following commands to call the UDF:
    
    ```
    -- Enable the Hive-compatible data type edition for the MaxCompute project. 
    set odps.sql.hive.compatible=true;
    -- Call the UDF. 
    select hive_collect(4y, 5y, 6y);
    ```
    
    The following result is returned:
    
    ```
    +------+
    | _c0  |
    +------+
    | [4, 5, 6] |
    +------+
    ```
