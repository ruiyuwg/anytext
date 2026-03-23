This topic describes how to reference a file resource by using Python user-defined functions (UDFs) on the MaxCompute client.

## Prerequisites

Make sure that the following requirements are met:

-   The MaxCompute client is installed and configured.
    
    For more information about how to install and configure the MaxCompute client, see [Install and configure the MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#section-vd2-4me-7uu).
    
-   The file that you want to reference is added to your MaxCompute project as a resource.
    
    In this example, the test\_distcache.txt file is added to a MaxCompute project as a resource. The file contains the following data:
    
    ```
    1 a
    2 b
    3 c
    4 d
    ```
    
    For more information about how to add resources, see [Add resources](/help/en/maxcompute/user-guide/resource-operations#section-533-s8q-d9w).
    

## Development and usage procedure

### **1\. Write a UDF**

The following sample code shows how to use a Python UDF to obtain the data that meets the specific requirements from the test\_distcache.txt file.

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

Save the preceding sample code as a Python script and store the Python script in the **bin** directory of the MaxCompute client. In this example, the Python script is named file.py.

### **2\. Upload resources and create the UDF**

After you develop and debug UDF code, upload resources to MaxCompute on the MaxCompute client and create a UDF.

1.  Run the following command to add the Python script file as a resource to MaxCompute:
    
    ```
    add py file.py;
    ```
    
    The following result is returned:
    
    ```
    OK: Resource 'file.py' have been created.
    ```
    
    For more information about commands that can be used to add resources to MaxCompute, see [Add resources](/help/en/maxcompute/user-guide/resource-operations#section-533-s8q-d9w).
    
2.  Run the following command to create a Python UDF:
    
    ```
    create function file_udf as 'file.DistCacheExample' using 'file.py, test_distcache.txt';
    ```
    
    Parameter description:
    
    -   `file_udf`: the name of the Python UDF that you want to create. The function is subsequently called in an SQL statement.
        
    -   `file.DistCacheExample`: `file` is the name of the file.py script. `DistCacheExample` is the class defined in the file.py script.
        
    
    The following result is returned:
    
    ```
    Success: Function 'file_udf' have been created.
    ```
    
    For more information about how to create UDFs, see [Create a UDF](/help/en/maxcompute/user-guide/function-operations#section-6r8-ozn-xjb).
    

### **3\. Use the UDF**

After the UDF is created, run the following commands to construct test data and call the UDF:

```
-- Create a test table. 
create table file_table (arg bigint);
-- Insert data into the table. 
insert into file_table values (1), (4), (15), (123), (7995);
-- Call the created function in the SQL statement to obtain the data that meets the specific requirements from the file resource. 
select file_udf(arg) from file_table;
```

The following result is returned:

```
+-----+
| _c0 |
+-----+
| a   |
| d   |
| NULL |
| NULL |
| NULL |
+-----+
```
