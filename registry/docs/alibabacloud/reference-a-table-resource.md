This topic describes how to reference a table resource by using user-defined functions (UDFs) in Python on the MaxCompute client.

## Prerequisites

Make sure that the following requirements are met:

-   The MaxCompute client is installed and configured.
    
    For more information about how to install and configure the MaxCompute client, see [Install and configure the MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#section-vd2-4me-7uu).
    
-   The table that you want to reference is added to your MaxCompute project as a resource.
    
    In the following example, the udf\_test table is added to a MaxCompute project as a resource. The table contains the following data:
    
    ```
    +------------+------+
    | col1       | col2 |
    +------------+------+
    | 1          | a    |
    | 2          | b    |
    | 4          | c    |
    | 5          | d    |
    +------------+------+
    ```
    
    For more information about how to add resources, see [Add resources](/help/en/maxcompute/user-guide/resource-operations#section-533-s8q-d9w).
    

## Development and usage procedure

### **1\. Write a UDF**

The following sample code shows how to use a Python UDF to traverse data in the udf\_test table to obtain an array.

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

Save the preceding sample code as a Python script and store the Python script in the **bin** directory of the MaxCompute client. In this example, the Python script is named table.py.

### **2\. Upload resources and create the UDF**

After you develop and debug UDF code, upload resources to MaxCompute on the MaxCompute client and create a UDF.

1.  Run the following command to add the Python script file as a resource to MaxCompute:
    
    ```
    add py table.py;
    ```
    
    The following result is returned:
    
    ```
    OK: Resource 'table.py' have been created.
    ```
    
    For more information about the commands that can be used to add resources to MaxCompute, see [Add resources](/help/en/maxcompute/user-guide/resource-operations#section-533-s8q-d9w).
    
2.  Run the following command to create a Python UDF:
    
    ```
    create function table_udf as 'table.DistCacheTableExample' using 'table.py,udf_test';
    ```
    
    Parameter description:
    
    -   `table_udf`: the name of the Python UDF that you want to create. The function is subsequently called in an SQL statement.
        
    -   `table.DistCacheTableExample`: `table` is the name of the table.py script. `DistCacheTableExample` is the class defined in the table.py script.
        
    
    The following result is returned:
    
    ```
    Success: Function 'table_udf' have been created.
    ```
    
    For more information about how to create UDFs, see [Create a UDF](/help/en/maxcompute/user-guide/function-operations#section-6r8-ozn-xjb).
    

### **3\. Use the UDF**

After the UDF is created, run the following commands to construct test data and call the UDF:

```
-- Create a test table. 
create table table_test (arg bigint);
-- Insert data into the table. 
insert into table_test values (1), (4), (15), (123), (7995);
-- Call the created function in the SQL statement. 
select table_udf() from table_test;
```

The following result is returned:

```
+-----+
| _c0 |
+-----+
| (4, 'c') |
| (5, 'd') |
| (1, 'a') |
| (2, 'b') |
| NULL |
+-----+
```

## **References**

For more information about the example on how to read MaxCompute table resources by using a Java user-defined table-valued function (UDTF), see [Use a Java UDTF to read resources from MaxCompute](/help/en/maxcompute/user-guide/use-a-java-udtf-to-read-resources-from-maxcompute).
