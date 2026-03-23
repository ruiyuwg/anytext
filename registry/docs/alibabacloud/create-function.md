Creates a user-defined function (UDF) in a MaxCompute project.

## **Prerequisites**

Before you register a UDF, you must run the `ADD JAR <localfile> [COMMENT '<comment>'][-f];` command to add the required resources to a MaxCompute project. For more information, see [ADD JAR](/help/en/maxcompute/user-guide/add-jar).

## Limits

-   Function names must be unique in a project. You cannot create a function that has the same name as an existing function in the project.
    
-   UDFs cannot overwrite built-in functions of MaxCompute. Only the project owner can use UDFs to overwrite built-in functions. If you use a UDF that overwrites a built-in function, warning information is displayed in Summary of the Logview of your job after the SQL statement is executed.
    

## Syntax

```
CREATE FUNCTION <function_name> AS <'package_to_class'> USING <'resource_list'>;
```

## Parameters

-   function\_name: required. The name of the UDF that you want to create.
    
-   package\_to\_class: required. The class of the UDF that you want to create. This parameter is case-sensitive and must be enclosed in single quotation marks (').
    
    -   For a Java UDF, specify this name as a fully qualified class name from the top-level package name to the UDF class name.
        
    -   For a Python UDF, specify this name in the Python script name.Class name format.
        
        **Note**
        
        The Python script name refers to the underlying resource name that uniquely identifies the resource. For example, if you upload a resource as `pyudf_test.py` and then rename it to `PYUDF_TEST.py` in DataStudio or use the MaxCompute client to overwrite it, the underlying resource name remains `pyudf_test.py`. Therefore, when you register the user-defined function, the class name must be `pyudf_test.SampleUDF`. You can run the `LIST RESOURCES;` command to view the underlying names of all resources.
        
-   resource\_list: required. The list of resources used by the UDF.
    
    -   The resource list must include the resources that contain the UDF code. Make sure that the resources are uploaded to MaxCompute.
        
    -   If the code calls the Distributed Cache API to read resource files, this resource list must also contain the list of resource files that are read by the UDF.
        
    -   The resource list consists of multiple resource names and must be enclosed in single quotation marks ('). The resource names must be separated by commas (,).
        
    -   To specify a resource from a different project, use the `<project_name>/resources/<resource_name>` format.
        
    
    **Note**
    
    If schema is enabled and you need to use resources from other projects, see [Work with objects in a schema](/help/en/maxcompute/user-guide/schema-related-operations#li-xla-e2a-ir8).
    

## Examples

-   Example 1: Create the `my_lower` function. The Java UDF class `org.alidata.odps.udf.examples.Lower` is in my\_lower.jar.
    
    ```
    CREATE FUNCTION my_lower AS 'org.alidata.odps.udf.examples.Lower' USING 'my_lower.jar';
    ```
    
-   Example 2: Create the `my_lower` function. The Python UDF class MyLower is in the pyudf\_test.py script within the `test_project` project.
    
    ```
    CREATE FUNCTION my_lower as 'pyudf_test.MyLower' using 'test_project/resources/pyudf_test.py';
    ```
    
-   Example 3: Create the `test_udtf` function. The Java UDF class `com.aliyun.odps.examples.udf.UDTFResource` is in udtfexample1.jar, and the function also depends on the FILE resource file\_resource.txt, the Table resource table\_resource1, and the Archive resource test\_archive.zip.
    
    ```
    CREATE FUNCTION test_udtf AS 'com.aliyun.odps.examples.udf.UDTFResource' USING 'udtfexample1.jar, file_resource.txt, table_resource1, test_archive.zip';
    ```
    

## Related statements

-   [FUNCTION](/help/en/maxcompute/user-guide/function#reference-2239988): If you do not need to store SQL functions in the metadata system of MaxCompute, you can create temporary SQL functions. These functions apply only to the current SQL script.
    
-   [DELETE FUNCTION](/help/en/maxcompute/user-guide/delete-function#reference-2240102): Deletes a function. You can write a UDF and call the delete\_function() method of a MaxCompute entry object to delete the UDF.
    
-   [DROP FUNCTION](/help/en/maxcompute/user-guide/drop-function#reference-2239965): Deletes an existing UDF from a MaxCompute project.
    
-   [DESC FUNCTION](/help/en/maxcompute/user-guide/desc-function#reference-2239954): Views the information of a specified UDF in a MaxCompute project. The information includes the name, owner, creation time, class name, and resource list of the UDF.
    
-   [LIST FUNCTIONS](/help/en/maxcompute/user-guide/list-functions#reference-2239999): Views the information of all UDFs in a MaxCompute project.
    
-   [UPDATE FUNCTION](/help/en/maxcompute/user-guide/update-function#reference-2240012): Updates a function. You can write a UDF and call the update method of MaxCompute to update the UDF.
