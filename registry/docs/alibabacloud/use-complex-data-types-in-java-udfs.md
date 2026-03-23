This topic describes how to use complex data types in Java user-defined functions (UDFs) and Python UDFs.

## Description

In this example, a UDF named **UDF\_COMPLEX\_DATA** is created.

**Note**

This example shows how to use the ARRAY, MAP, and STRUCT complex data types in the UDF. For Java UDFs, the same UDF name can be used for the preceding data types based on the overloading method. For Python UDFs, you must create UDFs named **UDF\_COMPLEX\_DATA\_ARRAY, UDF\_COMPLEX\_DATA\_MAP**, and **UDF\_COMPLEX\_DATA\_STRUCT** to use the preceding data types.

-   Syntax:
    
    ```
    array<string> UDF_COMPLEX_DATA(array<bigint> <as>) 
    map<string, string> UDF_COMPLEX_DATA(map<string,bigint> <ms>) 
    struct<output_name:string,output_time:string> UDF_COMPLEX_DATA(<input_name:string,input_timestamp:bigint> <st>) 
    ```
    

-   Description:
    
    Converts an input timestamp into a time string in the **yyyy-MM-dd HH:mm:ss** format. The input parameters are of the **ARRAY**, **MAP**, and **STRUCT** complex data types.
    

-   Parameters:
    
    -   as: This parameter is of the ARRAY<BIGINT> data type. A list of timestamps is specified. This parameter is required.
        
    -   ms: This parameter is of the MAP<STRING, BIGINT> data type. The value of each map element is a timestamp. This parameter is required.
        
    -   st: This parameter is of the STRUCT data type. The value of the input\_timestamp field is a timestamp.
        

## **Development and usage procedure**

### **1\. Write a UDF**

## Sample code of a Java UDF

```
package com.aliyun; // Specify a package name.

import com.aliyun.odps.data.Struct;
import com.aliyun.odps.udf.UDF;
import com.aliyun.odps.udf.annotation.Resolve;

import java.text.SimpleDateFormat;
import java.util.*;

@Resolve("struct<input_name:string, input_timestamp:bigint>->map<string,string>")
public class ComplexDataTypeExample extends UDF{
    private static final String PATTERN = "yyyy-MM-dd HH:mm:ss";

    /**
     * Convert a list of timestamps into a list of time strings.
     * @param timestamps Enter a list of timestamps.
     * @return Obtain a list of time strings.
     */
    public List<String> evaluate(List<Long> timestamps) {
        if (timestamps == null) {
            return null;
        }
        List<String> result = new ArrayList<>();
        SimpleDateFormat formatter = new SimpleDateFormat(PATTERN);
        for (Long timestamp : timestamps) {
            Date date = new Date(timestamp < 9999999999L ? timestamp * 1000 : timestamp);
            String dateString = formatter.format(date);
            result.add(dateString);
        }
        return result;
    }

    /**
     * Convert timestamps of the MAP data type into time strings of the MAP data type.
     * @param timestamps Enter data of the MAP data type in which values are timestamps.
     * @return Obtain a list of time strings of the MAP data type.
     */
    public Map<String, String> evaluate(Map<String, Long> timestamps) {
        if (timestamps == null) {
            return null;
        }
        Map<String, String> result = new HashMap<>(timestamps.size());
        SimpleDateFormat formatter = new SimpleDateFormat(PATTERN);
        for (String key : timestamps.keySet()) {
            Long timestamp = timestamps.get(key);
            Date date = new Date(timestamp < 9999999999L ? timestamp * 1000 : timestamp);
            String dateString = formatter.format(date);
            result.put(key, dateString);
        }
        return result;
    }

    /**
     * Convert a timestamp into a time string.
     * @param input Enter a timestamp of the STRUCT data type.
     * @return Obtain a time string of the STRUCT data type.
     */
    public Map<String, String> evaluate(Struct input) {
        if (input == null) {
            return null;
        }
        SimpleDateFormat formatter = new SimpleDateFormat(PATTERN);
        String nameValue = (String) input.getFieldValue("input_name");
        Long timestampValue = (Long) input.getFieldValue("input_timestamp");
        Date date = new Date(timestampValue < 9999999999L ? timestampValue * 1000 : timestampValue);
        String dateString = formatter.format(date);
        Map<String, String> result = new HashMap<>(8);
        result.put("output_name", nameValue);
        result.put("output_time", dateString);
        return result;
    }
}
```

The following dependency needs to be introduced to pom.xml:

```
<dependency>
  <groupId>com.aliyun.odps</groupId>
  <artifactId>odps-sdk-udf</artifactId>
  <version>0.29.10-public</version>
</dependency>
```

In the sample code, three evaluate methods are defined for the overloading of the UDF.

-   Method 1: Use ARRAY as a parameter that corresponds to the java.util.List class.
    
-   Method 2: Use MAP as a parameter that corresponds to the java.util.Map class.
    
-   Method 3: Use STRUCT as a parameter that corresponds to the com.aliyun.odps.data.Struct class.
    
    **Note**
    
    You cannot use the reflection feature for the com.aliyun.odps.data.Struct class to obtain the names and data types of fields. If you want to use the STRUCT data type for a UDF, you must add the `@Resolve annotation` to the com.aliyun.odps.data.Struct class. This annotation affects only the overloading of a UDF whose input parameters or return value contains the com.aliyun.odps.data.Struct class.
    

If you write a UDF in Java, you must inherit the UDF class. In this example, the **evaluate** method defines three input parameters of the LIST, MAP, and STRUCT types, which return values of the LIST, MAP, and MAP types separately. The data types of the input parameters and return values are used as the signature of the UDF in SQL statements. For more information about other code specifications and requirements, see [Java UDFs](/help/en/maxcompute/user-guide/java-udfs#title-60t-xyc-3xh).

## Sample code of a Python 3 UDF

-   In the following example, the input parameters are of the **MAP<STRING, BIGINT>** data type. The sample code creates a UDF named **UDF\_COMPLEX\_DATA\_MAP**.
    
    ```
    from odps.udf import annotate
    import datetime
    @annotate('map<string,bigint>->map<string,datetime>')
    class MapExample:
        def evaluate(self, input_dict):
            output_dict = dict()
            for key in input_dict:
                value = input_dict[key]
                t = datetime.datetime.fromtimestamp(value)
                output_dict[key] = t
            return output_dict
    ```
    
-   In the following example, the input parameter is of the **ARRAY<BIGINT>** data type. The sample code creates a UDF named **UDF\_COMPLEX\_DATA\_ARRAY**.
    
    ```
    from odps.udf import annotate
    import datetime
    @annotate('array<bigint>->array<datetime>')
    class ArrayExample:
        def evaluate(self, input_list):
            output_list = list()
            for item in input_list:
                t = datetime.datetime.fromtimestamp(item)
                output_list.append(t)
            return output_list
    ```
    
-   In the following example, the input parameters are of the **STRUCT<input\_name:string,input\_timestamp:bigint>** data type. The sample code creates a UDF named **UDF\_COMPLEX\_DATA\_STRUCT**.
    
    ```
    from odps.udf import annotate
    import datetime, collections
    @annotate('struct<input_name:string,input_timestamp:bigint>->struct<output_name:string,output_time:datetime>')
    class StructExample:
        def evaluate(self, input_namedtuple):
            OutputNamedTuple = collections.namedtuple('output_namedtuple', ['output_name', 'output_time'])
            name_val = input_namedtuple.input_name
            time_val = datetime.datetime.fromtimestamp(input_namedtuple.input_timestamp)
            output_namedtuple = OutputNamedTuple(name_val, time_val)
            return output_namedtuple
    ```
    

By default, Python 2 is used to run UDFs in MaxCompute projects. If you want to run UDFs in Python 3, run the following command at the session level: `set odps.sql.python.version=cp37`. For more information about Python 3 UDF specifications, see [Python 3 UDFs](/help/en/maxcompute/user-guide/python-3-udfs).

### **2\. Upload resources and create a UDF**

After you develop and debug UDF code, upload resources to MaxCompute and create a UDF. In this example, a Java UDF named **UDF\_COMPLEX\_DATA** is created. For Python UDFs, you must create the following UDFs: **UDF\_COMPLEX\_DATA\_ARRAY, UDF\_COMPLEX\_DATA\_MAP**, and **UDF\_COMPLEX\_DATA\_STRUCT**. For more information about how to upload resources and create a Java UDF, see [Package a Java program, upload the package, and create a MaxCompute UDF](/help/en/maxcompute/user-guide/package-a-java-program-upload-the-package-and-create-a-maxcompute-udf). For more information about how to upload resources and create a Python UDF, see [Upload a Python program and create a MaxCompute UDF](/help/en/maxcompute/user-guide/upload-a-python-program-and-create-a-maxcompute-udf).

### **3.** Use the UDF

-   Run the following commands to convert the timestamps of the ARRAY data type into time strings:
    
    ```
    -- Call a Java UDF.
    SELECT UDF_COMPLEX_DATA(array(1554047999, 1554047989)); 
    
    -- Call a Python UDF.
    set odps.sql.python.version=cp37; -- To use a Python3 UDF, run this command to enable Python3.
    SELECT UDF_COMPLEX_DATA_ARRAY(array(1554047999, 1554047989)); 
    ```
    
    The following result is returned:
    
    ```
    +---------------------------------------------+
    | _c0                                         |
    +---------------------------------------------+
    | [2019-03-31 23:59:59, 2019-03-31 23:59:49]  |
    +---------------------------------------------+
    ```
    
-   Run the following commands to convert timestamps of the MAP data type into time strings:
    
    ```
    -- Call a Java UDF.
    SELECT UDF_COMPLEX_DATA(map('date1', 1554047989, 'date2', 1554047999));
    
    -- Call a Python UDF.
    set odps.sql.python.version=cp37; -- To use a Python3 UDF, run this command to enable Python3.
    SELECT UDF_COMPLEX_DATA_MAP(map('date1', 1554047989, 'date2', 1554047999)); 
    ```
    
    The following result is returned:
    
    ```
    +----------------------------------------------------------------+
    | _c0                                                            |
    +----------------------------------------------------------------+
    | {"date1":"2019-03-31 23:59:49","date2":"2019-03-31 23:59:59"}  |
    +----------------------------------------------------------------+
    ```
    
-   Run the following commands to convert a timestamp of the STRUCT data type into a time string:
    
    ```
    -- Call a Java UDF.
    SELECT UDF_COMPLEX_DATA(struct('date', 1554047989)); 
    
    -- Call a Python UDF.
    set odps.sql.python.version=cp37; -- To use a Python3 UDF, run this command to enable Python3.
    SELECT UDF_COMPLEX_DATA_STRUCT(struct('date', 1554047989)); 
    ```
    
    The following result is returned:
    
    ```
    +-------------------------------------------------------------+
    | _c0                                                         |
    +-------------------------------------------------------------+
    | {"output_name":"date","output_time":"2019-03-31 23:59:49"}  |
    +-------------------------------------------------------------+
    ```
