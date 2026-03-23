You can use built-in functions or user-defined functions (UDFs) of MaxCompute for data computing. Built-in functions can be called directly. UDFs can be called only after being customized. This topic describes common operations on functions, such as creating, deleting, and viewing functions.

The following table describes common operations on functions.

**Operation**

**Description**

**Performed by**

**Operation platform**

[Create a UDF](#section-6r8-ozn-xjb)

Creates a UDF in a MaxCompute project.

Users who have the Write permission on functions

You can execute the statements described in this topic on the following platforms:

-   [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db)
    
-   [DataWorks console](/help/en/maxcompute/user-guide/query-editor-in-the-maxcompute-console)
    
-   [MaxCompute Studio](/help/en/maxcompute/user-guide/develop-and-submit-an-sql-script#task-2460353)
    

[Delete a UDF](#section-t00-lw4-91c)

Deletes an existing UDF from a MaxCompute project.

Users who have the Delete permission on functions

[View a UDF](#section-7hm-bjs-ppa)

Views the information of a specified UDF in a MaxCompute project.

Users who have the Read permission on functions

[View the UDF list](#section-sjm-4v7-lft)

Views all UDFs in a MaxCompute project.

Users who have the List permission on objects in a project

[View all built-in functions](#section-wdz-oy8-frg)

Views the information of all built-in functions in a MaxCompute project.

Users who have the List permission on objects in a project

## Create a UDF

Creates a UDF in a MaxCompute project.

-   Limits
    
    -   Function names must be unique in a project. You cannot create a function that has the same name as an existing function in the project.
        
    -   UDFs cannot overwrite built-in functions of MaxCompute. Only the project owner can use UDFs to overwrite built-in functions. If you use a UDF that overwrites a built-in function, warning information is displayed in Summary of the Logview of your job after the SQL statement is executed.
        
-   Syntax
    
    ```
    create function <function_name> as <'package_to_class'> using <'resource_list'>;
    ```
    
-   Parameters
    
    -   function\_name: required. The name of the UDF that you want to create.
        
    -   package\_to\_class: required. The class of the UDF. This parameter is case-sensitive and must be enclosed in single quotation marks (').
        
        -   For a Java UDF, specify this name as a fully qualified class name from the top-level package name to the UDF class name.
            
        -   For a Python UDF, specify this name in the Python script name.Class name format.
            
            **Note**
            
            The Python script name refers to the underlying resource name that uniquely identifies a resource. The resource name of MaxCompute is not case-sensitive. For example, the resource name is pyudf\_test.py the first time you upload a resource. If you rename the resource to PYUDF\_TEST.py in DataStudio or use PYUDF\_TEST.py to overwrite pyudf\_test.py on the MaxCompute client, the underlying resource name that uniquely identifies the resource is still pyudf\_test.py. In this case, when you create a UDF based on the resource, the class name must be pyudf\_test.SampleUDF. You can run the `list resources;` command to view the underlying resource names that uniquely identify all resources.
            
    -   resource\_list: required. The list of resources used by the UDF.
        
        -   The resource list must include the resource that contains UDF code. Make sure that the resource is uploaded to MaxCompute.
            
        -   If the code calls the Distributed Cache API to read resource files, this resource list must also contain the list of resource files that are read by the UDF.
            
        -   The resource list consists of multiple resource names and must be enclosed in single quotation marks ('). The resource names are separated by commas (,).
            
        -   To specify the project that contains the resource, write the parameter in the `<project_name>/resources/<resource_name>` format.
            
-   Examples
    
    -   Example 1: Create the `my_lower` function. In this example, the Java UDF class `org.alidata.odps.udf.examples.Lower` is in my\_lower.jar.
        
        ```
        create function my_lower as 'org.alidata.odps.udf.examples.Lower' using 'my_lower.jar';
        ```
        
    -   Example 2: Create the `my_lower` function. In this example, the Python UDF class MyLower is in the pyudf\_test.py script of the `test_project` project.
        
        ```
        create function my_lower as 'pyudf_test.MyLower' using 'test_project/resources/pyudf_test.py';
        ```
        
    -   Example 3: Create the `test_udtf` function. In this example, the Java UDF class `com.aliyun.odps.examples.udf.UDTFResource` is in udtfexample1.jar. The function depends on the file resource file\_resource.txt, the table resource table\_resource1, and the archive resource test\_archive.zip.
        
        ```
        create function test_udtf as 'com.aliyun.odps.examples.udf.UDTFResource' using 'udtfexample1.jar, file_resource.txt, table_resource1, test_archive.zip';
        ```
        

## Delete a UDF

Deletes an existing UDF from a MaxCompute project.

-   Syntax
    
    ```
    drop function <function_name>;
    ```
    
-   Parameters
    
    function\_name: required. The name of an existing UDF.
    
-   Example
    
    ```
    -- Delete the my_lower function. 
    drop function my_lower;
    ```
    

## View a UDF

Views the information of a specified UDF in a MaxCompute project. The information includes the name, owner, creation time, class name, and resource list of the UDF.

-   Syntax
    
    ```
    desc function <function_name>;
    ```
    
-   Parameters
    
    function\_name: required. The name of an existing function.
    
-   Return value
    
    -   Name: the name of the UDF.
        
    -   Owner: the account that owns the UDF.
        
    -   Created Time: the time when the UDF is created.
        
    -   Class: the class of the UDF, which is case-sensitive.
        
    -   Resources: the list of resources that are used by the UDF.
        
-   Example
    
    ```
    -- View the information of the my_lower function. 
    desc function my_lower;
    ```
    
    The following result is returned:
    
    ```
    Name                                    my_lower
    Owner                                   ALIYUN$****
    Created Time                            2020-06-18 15:50:19
    Class                                   org.alidata.odps.udf.examples.Lower
    Resources                               project_name/my_lower.jar
    ```
    

## View the UDF list

Views all UDFs in a MaxCompute project.

-   Syntax You can use one of the following syntaxes to view all UDFs in a MaxCompute project:
    
    -   ```
        list functions [-p <project_name>];
        ```
        
    -   ```
        show functions;
        ```
        
-   Parameters
    
    project\_name: optional. The name of a MaxCompute project.
    
-   Example
    
    ```
    list functions;
    ```
    
    The following result is returned:
    
    ```
    Name              Owner                                        Create Time           Class                             Resources
    ipv4_ipv6_aton    ALIYUN$****@aliyun.com 2021-11-15 13:42:14   com.aliyun.odps.udf.udfFunction.IpLocation ipv4.txt,ipv6.txt,udf-1.0-SNAPSHOT.jar
    Lower_test        ALIYUN$****@aliyun.com 2021-08-25 15:51:22   com.aliyun.odps.udf.example.Lower udf-1.0-SNAPSHOT.jar
    my_add            ALIYUN$****@aliyun.com 2021-05-08 11:26:02
    my_index          ALIYUN$****@aliyun.com 2021-08-25 12:01:05   com.aliyun.odps.examples.udf.UdfArray udf-1.0-SNAPSHOT.jar
    my_sum            ALIYUN$****@aliyun.com 2021-05-08 10:24:58
    my_udtf           ALIYUN$****@aliyun.com 2021-02-23 11:37:30   com.aliyun.odps.examples.udf.UDTFResource udf-1.0-SNAPSHOT.jar
    numpy             ALIYUN$****@aliyun.com 2020-11-11 14:12:50   numpy.TryImport                   numpy.py,numpy-1.19.4-cp37-cp37m-manylinux1_x86_64.zip
    ST_Aggr_ConvexHull ALIYUN$****@aliyun.com 2021-03-18 17:06:29   com.esri.hadoop.hive.ST_Aggr_ConvexHull esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_Aggr_Intersection ALIYUN$****@aliyun.com 2021-03-18 17:06:29   com.esri.hadoop.hive.ST_Aggr_Intersection esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_Aggr_Union     ALIYUN$****@aliyun.com 2021-03-18 17:06:30   com.esri.hadoop.hive.ST_Aggr_Union esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_Area           ALIYUN$****@aliyun.com 2021-03-18 17:06:30   com.esri.hadoop.hive.ST_Area      esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_AsBinary       ALIYUN$****@aliyun.com 2021-03-18 17:06:30   com.esri.hadoop.hive.ST_AsBinary  esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_AsGeoJson      ALIYUN$****@aliyun.com 2021-03-18 17:06:49   com.esri.hadoop.hive.ST_AsGeoJson esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_AsJson         ALIYUN$****@aliyun.com 2021-03-18 17:06:50   com.esri.hadoop.hive.ST_AsJson    esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_AsShape        ALIYUN$****@aliyun.com 2021-03-18 17:06:50   com.esri.hadoop.hive.ST_AsShape   esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_AsText         ALIYUN$****@aliyun.com 2021-03-18 17:06:50   com.esri.hadoop.hive.ST_AsText    esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_Bin            ALIYUN$****@aliyun.com 2021-03-18 17:06:50   com.esri.hadoop.hive.ST_Bin       esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_BinEnvelope    ALIYUN$****@aliyun.com 2021-03-18 17:07:01   com.esri.hadoop.hive.ST_BinEnvelope esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_Boundary       ALIYUN$****@aliyun.com 2021-03-18 17:07:01   com.esri.hadoop.hive.ST_Boundary  esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_Buffer         ALIYUN$****@aliyun.com 2021-03-18 17:07:01   com.esri.hadoop.hive.ST_Buffer    esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_Centroid       ALIYUN$****@aliyun.com 2021-03-18 17:07:01   com.esri.hadoop.hive.ST_Centroid  esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_Contains       ALIYUN$****@aliyun.com 2021-03-18 17:07:01   com.esri.hadoop.hive.ST_Contains  esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_ConvexHull     ALIYUN$****@aliyun.com 2021-03-18 17:07:13   com.esri.hadoop.hive.ST_ConvexHull esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_CoordDim       ALIYUN$****@aliyun.com 2021-03-18 17:07:14   com.esri.hadoop.hive.ST_CoordDim  esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_Crosses        ALIYUN$****@aliyun.com 2021-03-18 17:07:14   com.esri.hadoop.hive.ST_Crosses   esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_Difference     ALIYUN$****@aliyun.com 2021-03-18 17:07:14   com.esri.hadoop.hive.ST_Difference esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_Dimension      ALIYUN$****@aliyun.com 2021-03-18 17:07:14   com.esri.hadoop.hive.ST_Dimension esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_Disjoint       ALIYUN$****@aliyun.com 2021-03-18 17:07:31   com.esri.hadoop.hive.ST_Disjoint  esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_Distance       ALIYUN$****@aliyun.com 2021-03-18 17:07:31   com.esri.hadoop.hive.ST_Distance  esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_EndPoint       ALIYUN$****@aliyun.com 2021-03-18 17:07:31   com.esri.hadoop.hive.ST_EndPoint  esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_Envelope       ALIYUN$****@aliyun.com 2021-03-18 17:07:32   com.esri.hadoop.hive.ST_Envelope  esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_EnvIntersects  ALIYUN$****@aliyun.com 2021-03-18 17:07:32   com.esri.hadoop.hive.ST_EnvIntersects esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_Equals         ALIYUN$****@aliyun.com 2021-03-18 17:07:44   com.esri.hadoop.hive.ST_Equals    esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_ExteriorRing   ALIYUN$****@aliyun.com 2021-03-18 17:07:44   com.esri.hadoop.hive.ST_ExteriorRing esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_GeodesicLengthWGS84 ALIYUN$****@aliyun.com 2021-03-18 17:07:44   com.esri.hadoop.hive.ST_GeodesicLengthWGS84 esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_GeomCollection ALIYUN$****@aliyun.com 2021-03-18 17:07:44   com.esri.hadoop.hive.ST_GeomCollection esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_Geometry       ALIYUN$****@aliyun.com 2021-03-18 17:07:44   com.esri.hadoop.hive.ST_Geometry  esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_GeometryN      ALIYUN$****@aliyun.com 2021-03-18 17:07:55   com.esri.hadoop.hive.ST_GeometryN esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_GeometryType   ALIYUN$****@aliyun.com 2021-03-18 17:07:55   com.esri.hadoop.hive.ST_GeometryType esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_GeomFromGeoJson ALIYUN$****@aliyun.com 2021-03-18 17:07:55   com.esri.hadoop.hive.ST_GeomFromGeoJson esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_GeomFromJson   ALIYUN$****@aliyun.com 2021-03-18 17:07:55   com.esri.hadoop.hive.ST_GeomFromJson esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_GeomFromShape  ALIYUN$****@aliyun.com 2021-03-18 17:07:56   com.esri.hadoop.hive.ST_GeomFromShape esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_GeomFromText   ALIYUN$****@aliyun.com 2021-03-18 17:08:10   com.esri.hadoop.hive.ST_GeomFromText esri-geometry-api.jar,spatial-sdk-hive.jar
    ST_GeomFromWKB    ALIYUN$****@aliyun.com 2021-03-18 17:08:10   com.esri.hadoop.hive.ST_GeomFromWKB esri-geometry-api.jar,spatial-sdk-hive.jar
    ```
    

## View all built-in functions

Views the information of all built-in functions in a MaxCompute project.

-   Syntax
    
    ```
    show builtin functions [<function_name>];
    ```
    
-   Parameters
    
    function\_name: optional. The name of the specified built-in function in the MaxCompute project.
    
-   Example
    
    ```
    show builtin functions;
    ```
    
    The following result is returned:
    
    ```
    ID = 20230307081023424gef2hwowr1
    ::ABS   SCALAR  DECIMAL(?,?) ABS(DECIMAL(?,?) arg0),DOUBLE ABS(DOUBLE arg0),BIGINT ABS(BIGINT arg0),INT ABS(INT arg0)
    ::ACOS  SCALAR  DOUBLE ACOS(DOUBLE arg0),DOUBLE ACOS(DECIMAL(?,?) arg0)
    ::ADD_MONTHS    SCALAR  STRING ADD_MONTHS(DATE arg0, BIGINT arg1),STRING ADD_MONTHS(TIMESTAMP arg0, BIGINT arg1),STRING ADD_MONTHS(STRING arg0, BIGINT arg1)
    ::ALL_MATCH     SCALAR  BOOLEAN ALL_MATCH(ARRAY<T> arg0, java.util.function.Function<T, java.lang.Boolean> arg1)
    ::ANY_MATCH     SCALAR  BOOLEAN ANY_MATCH(ARRAY<T> arg0, java.util.function.Function<T, java.lang.Boolean> arg1)
    ::ANY_VALUE     AGGREGATOR      T ANY_VALUE([DISTINCT] T arg1)
    ::APPROX_DISTINCT       AGGREGATOR      BIGINT APPROX_DISTINCT([DISTINCT] P arg1, DOUBLE arg2),BIGINT APPROX_DISTINCT([DISTINCT] P arg1)
    ::ARG_MAX       AGGREGATOR      R ARG_MAX([DISTINCT] T arg1, R arg2)
    ::ARG_MIN       AGGREGATOR      R ARG_MIN([DISTINCT] T arg1, R arg2)
    ::ARRAY SCALAR  ARRAY<STRING> ARRAY(),ARRAY<T> ARRAY(T arg0...)
    ::ARRAYS_OVERLAP        SCALAR  BOOLEAN ARRAYS_OVERLAP(ARRAY<T> arg0, ARRAY<T> arg1)
    ::ARRAYS_ZIP    SCALAR  null
    ::ARRAY_CONTAINS        SCALAR  BOOLEAN ARRAY_CONTAINS(ARRAY<T> arg0, T arg1)
    ::ARRAY_DISTINCT        SCALAR  ARRAY<T> ARRAY_DISTINCT(ARRAY<T> arg0)
    ::ARRAY_EXCEPT  SCALAR  ARRAY<T> ARRAY_EXCEPT(ARRAY<T> arg0, ARRAY<T> arg1)
    ::ARRAY_INTERSECT       SCALAR  null
    ::ARRAY_JOIN    SCALAR  STRING ARRAY_JOIN(ARRAY<STRING> arg0, STRING arg1, STRING arg2),STRING ARRAY_JOIN(ARRAY<STRING> arg0, STRING arg1)
    ::ARRAY_MAX     SCALAR  T ARRAY_MAX(ARRAY<T> arg0)
    ::ARRAY_MIN     SCALAR  T ARRAY_MIN(ARRAY<T> arg0)
    ::ARRAY_NORMALIZE       SCALAR  ARRAY<FLOAT> ARRAY_NORMALIZE(ARRAY<FLOAT> arg0, FLOAT arg1),ARRAY<DOUBLE> ARRAY_NORMALIZE(ARRAY<DOUBLE> arg0, DOUBLE arg1)
    ::ARRAY_POSITION        SCALAR  BIGINT ARRAY_POSITION(ARRAY<T> arg0, T arg1, BIGINT arg2),BIGINT ARRAY_POSITION(ARRAY<T> arg0, T arg1)
    ::ARRAY_REDUCE  SCALAR  OUT ARRAY_REDUCE(ARRAY<IN> arg0, BUF arg1, java.util.function.BiFunction<BUF, IN, BUF> arg2, java.util.function.Function<BUF, OUT> arg3)
    ::ARRAY_REMOVE  SCALAR  ARRAY<T> ARRAY_REMOVE(ARRAY<T> arg0, T arg1)
    ::ARRAY_REPEAT  SCALAR  ARRAY<T> ARRAY_REPEAT(T arg0, BIGINT arg1)
    ::ARRAY_SORT    SCALAR  ARRAY<T> ARRAY_SORT(ARRAY<T> arg0, java.util.function.BiFunction<T, T, java.lang.Long> arg1)
    ::ARRAY_UNION   SCALAR  ARRAY<T> ARRAY_UNION(ARRAY<T> arg0, ARRAY<T> arg1)
    ::ASCII SCALAR  BIGINT ASCII(STRING arg0)
    ::ASIN  SCALAR  DOUBLE ASIN(DOUBLE arg0),DOUBLE ASIN(DECIMAL(?,?) arg0)
    ::ATAN  SCALAR  DOUBLE ATAN(DECIMAL(?,?) arg0),DOUBLE ATAN(DOUBLE arg0)
    ::ATAN2 SCALAR  DOUBLE ATAN2(DECIMAL(?,?) arg0, DECIMAL(?,?) arg1),DOUBLE ATAN2(DOUBLE arg0, DOUBLE arg1)
    ::AVG   AGGREGATOR      DECIMAL(?,?) AVG([DISTINCT] DECIMAL(?,?) arg1),DOUBLE AVG([DISTINCT] DOUBLE arg1)
    ::AVG   WINDOW  DOUBLE AVG([DISTINCT] DOUBLE arg0),DECIMAL(?,?) AVG([DISTINCT] DECIMAL(?,?) arg0)
    ::BASE64        SCALAR  STRING BASE64(BINARY arg0)
    ::BIN   SCALAR  STRING BIN(BIGINT arg0)
    ::BITAND        SCALAR  BIGINT BITAND(BIGINT arg0, BIGINT arg1)
    ::BITNOT        SCALAR  BIGINT BITNOT(BIGINT arg0)
    ::BITOR SCALAR  BIGINT BITOR(BIGINT arg0, BIGINT arg1)
    ::BITWISE_AND_AGG       AGGREGATOR      BIGINT BITWISE_AND_AGG([DISTINCT] BIGINT arg1)
    ::BITWISE_OR_AGG        AGGREGATOR      BIGINT BITWISE_OR_AGG([DISTINCT] BIGINT arg1)
    ::BITXOR        SCALAR  BIGINT BITXOR(BIGINT arg0, BIGINT arg1)
    ::BROUND        SCALAR  DOUBLE BROUND(DOUBLE arg0, BIGINT arg1),DOUBLE BROUND(DOUBLE arg0)
    ......
    ```
    

**Note**

You can run the `show builtin functions;` command in the MaxCompute client only of V0.43.0 or later.
