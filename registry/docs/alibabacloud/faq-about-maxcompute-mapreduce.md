This topic provides answers to some frequently asked questions about MaxCompute MapReduce.

Category

FAQ

Features

-   [Can I use views as the input sources of MapReduce jobs in MaxCompute?](#section-o5e-sdu-3g9)
-   [In which mode are the results of MapReduce jobs written to a table or partition?](#section-tmi-qe9-9mp)
-   [Can I run a MapReduce job by calling shell files?](#section-g78-k9c-kq5)
-   [Can I call the setup method of a reducer to read data from input tables?](#section-sun-10k-s5i)
-   [Does a mapper support data from multiple partitions of a table as input?](#section-1d9-na8-nej)
-   [Can a mapper read partition fields from data records?](#section-tj6-01b-oir)
-   [What is the relationship between labels and partitions?](#section-eeo-7os-d3b)
-   [Does MaxCompute MapReduce support map-only jobs?](#section-91a-rc2-mtm)
-   [Can I use a mapper to read each record from an input table by column name?](#section-dzo-px9-eyr)
-   [What are the differences between write(Record key, Record value) and write(Record record)?](#section-dxw-pmr-b90)
-   [Why do I need to use both of the -libjars and -classpath parameters to specify the JAR package of a MapReduce program in MaxCompute MapReduce?](#section-9c1-sxj-9bk)
-   [Can I directly use the source code of Hadoop MapReduce in MaxCompute MapReduce?](#section-zbt-ioy-97t)
-   [How do I use MaxCompute MapReduce to sort data?](#section-sj4-5er-5y6)
-   [What is the purpose of backups for MapReduce jobs?](#section-120-3jg-18y)

MapReduce program development

-   [How do I pass multiple resources on the MaxCompute client when I develop a MapReduce program?](#section-kvv-ugf-ddk)
-   [How do I use the main method to determine whether a table is an empty table?](#section-2ii-a53-65t)
-   [How do I generate logs of MapReduce jobs in MaxCompute?](#section-1kb-358-sqf)
-   [Does a result table contain the duplicate data of two MapReduce jobs?](#section-7i8-q66-n7x)
-   [In Hadoop MapReduce, I can select multiple nodes for distributed data processing. One node represents one machine. How do I configure nodes when I perform distributed data processing in MaxCompute MapReduce?](#section-962-pql-k2d)
-   [If I do not use a combiner, the data output is normal. After I use a combiner, no input data is provided for reducers. Why?](#section-juh-vgz-zvo)
-   [I cannot specify the schema of an output table when I run map-only jobs in MaxCompute. Why?](#section-c5w-9df-ttv)
-   [How do I call the local MaxCompute server to run a MapReduce job?](#section-1uq-qnj-u0b)

Common errors

-   [What do I do if the error message "BufferOverflowException" appears when I run a MapReduce job in MaxCompute?](#section-jmv-qyq-5la)
-   [What do I do if the error message "Resource not found" appears when I run a MapReduce job in MaxCompute?](#section-4l1-oed-3sw)
-   [What do I do if the error message "Class Not Found" appears when I run a MapReduce job in MaxCompute?](#section-kry-i48-3z0)
-   [What do I do if the error ODPS-0010000 is returned when I run a MapReduce job in MaxCompute?](#section-wem-5sx-w6k)
-   [What do I do if the error message "Table not found" appears when I run a MapReduce job in MaxCompute?](#section-t92-vh3-gmj)
-   [What do I do if the error ODPS-0123144 is returned when I run a MapReduce job in MaxCompute?](#section-5cs-9k8-j5j)
-   [What do I do if the error message "java.security.AccessControlException" appears when I run a MapReduce job in MaxCompute?](#section-g6n-cmq-z8u)
-   [What do I do if the error message "java.io.IOException" appears when I run a MapReduce job in MaxCompute?](#section-7au-l5h-qo5)
-   [What do I do if the error message "Exceed maximum read times per resource" appears when I run a MapReduce job in MaxCompute?](#section-7za-r9c-11c)
-   [What do I do if an OOM error occurs before the Reduce stage when I run a MapReduce job in MaxCompute?](#section-azs-pv8-2pz)
-   [What do I do if an OOM error occurs when I run a MapReduce job in MaxCompute?](#section-r2c-k7i-ul4)
-   [What do I do if the error message "java.lang.OutOfMemoryError" appears when I use 600 reducers to load a small configuration file for a MapReduce job in MaxCompute?](#section-gci-18x-uyx)
-   [What do I do if the error ODPS-0420095 is returned when I run a MapReduce job in MaxCompute?](#section-w05-m3y-j1g)
-   [What do I do if a large number of errors occur when MaxCompute resources are referenced by a MapReduce job?](#section-udv-v93-vyj)
-   [I create a JAR package of the MapReduce program that contains third-party classes by using Maven Assembly. When I run a MapReduce job, an error message, indicating that the third-party classes are not found, appears. What do I do?](#section-t03-sj7-pho)
-   [When I run a Hadoop MapReduce job in MaxCompute, an error of subscript out of bounds occurs. What do I do?](#section-bfz-ptq-8wz)

## Can I use views as the input sources of MapReduce jobs in MaxCompute?

No, you can use only tables as the input sources of MapReduce jobs in MaxCompute.

## In which mode are the results of MapReduce jobs written to a table or partition?

The results of MapReduce jobs are written to a table or partition in overwrite mode.

## Can I run a MapReduce job by calling shell files?

No, you cannot run a MapReduce job by calling shell files due to the limits of Java sandboxes. For more information about the limits of Java sandboxes, see [Java sandbox](/help/en/maxcompute/user-guide/java-sandbox#concept-aln-lrf-vdb).

## Can I call the setup method of a reducer to read data from input tables?

No, you cannot call the setup method of a reducer to read data from input tables. However, you can call the setup method of a reducer to read data from cached tables.

## Does a mapper support data from multiple partitions of a table as input?

A mapper supports data from multiple partitions of a table as input. The partitions of the same table are considered separate tables.

## Can a mapper read partition fields from data records?

A mapper cannot read partition fields from data records. You can use the following code to obtain partition fields. In the code, PartitionSpec specifies the partition information.

```
PartitionSpec ps = context.getInputTableInfo().getPartitionSpec();
String area = ps.get("area");        
```

## What is the relationship between labels and partitions?

Labels are used to identify the partitions to which output data is written.

## Does MaxCompute MapReduce support map-only jobs?

Yes, MaxCompute MapReduce supports map-only jobs. If you want to run map-only jobs in MaxCompute MapReduce, you must set the number of reducers to 0 by using `job.setNumReduceTasks(0)`.

## Can I use a mapper to read each record from an input table by column name?

Yes, you can use a mapper to read each record from an input table by column name. Each record in an input table can be read by sequence number, such as `record.get(i)`, or read by column name, such as `record.get("size")`.

## What are the differences between `write(Record key, Record value)` and `write(Record record)`?

-   `write(Record key, Record value)` is used to generate intermediate results, such as `key.set("id", v1), value.set("size", v2)`. The intermediate results that are generated by a mapper must be transmitted to a reducer by using network connections. No associated tables are provided to infer the data types of fields. Therefore, the data types of fields must be declared for serialization. The data types of fields must be the data types that are supported by MaxCompute.
    
    ```
    job.setMapOutputKeySchema(SchemaUtils.fromString("id:string"));  
    job.setMapOutputValueSchema(SchemaUtils.fromString("size:bigint"));               
    ```
    
-   `write(Record record)` is used to write final results to an output table. Associated tables are provided to infer the data types of fields. Therefore, the data types of fields do not need to be declared.

## Why do I need to use both of the -libjars and -classpath parameters to specify the JAR package of a MapReduce program in MaxCompute MapReduce?

The local client performs operations that involve remote execution, such as job configurations. Therefore, two executors are used: a local executor and a remote executor.

The remote executor loads the package that is specified by the -libjars parameter, such as `-libjars mapreduce-examples.jar`. The local executor loads the package that is specified by the -classpath parameter, such as `-classpath lib/mapreduce-examples.jar`.

## Can I directly use the source code of Hadoop MapReduce in MaxCompute MapReduce?

No, you cannot directly use the source code of Hadoop MapReduce in MaxCompute MapReduce. The APIs provided by MaxCompute MapReduce are different from the APIs provided by Hadoop MapReduce, but the overall style is similar. If you want to run the source code of Hadoop MapReduce in MaxCompute MapReduce, you must modify the source code of Hadoop MapReduce and compile the code by using MaxCompute MapReduce SDK.

## How do I use MaxCompute MapReduce to sort data?

The following sample code shows how to sort data by using MaxCompute MapReduce.

```
// Specify the fields whose values you want to sort. In this example, the fields are i1 and i2. 
job.setOutputKeySortColumns(new String[] { "i1", "i2" });
// Specify how to sort the values of the two fields. In this example, the values of the i1 field are sorted in ascending order, and the values of the i2 field are sorted in descending order. 
job.setOutputKeySortOrder(new SortOrder[] { SortOrder.ASC, SortOrder.DESC });        
```

The following sample code shows how to use the setOutputKeySortOrder method.

```
public void setOutputKeySortOrder(JobConf.SortOrder[] order)
Description: The setOutputKeySortOrder method is used to specify the order in which the values of the key column are sorted. 
Parameter: The order parameter specifies the order in which the values of the key column are sorted. Valid values: ASC and DESC. ASC indicates the ascending order, and DESC indicates the descending order.        
```

## What is the purpose of backups for MapReduce jobs?

Backups are used to accelerate data processing for MapReduce jobs. MaxCompute detects the status of your MapReduce jobs. If a MapReduce job needs to process a large amount of data, MaxCompute creates a backup job for the job. The two jobs are run in parallel to process the same data. The result of the job that is first complete is used. If a job needs to process excessively large amounts of data, backups cannot work as expected because the original job and its backup job may not be complete in a specified period of time.

## How do I pass multiple resources on the MaxCompute client when I develop a MapReduce program?

You can separate multiple resources with commas (,), such as `jar -resource resource1,resource2,..`.

## How do I use the main method to determine whether a table is an empty table?

You can use the following code to determine whether a table is an empty table.

```
Odps odps=SessionState.get().getOdps();
Table table=odps.tables().get('tableName');
RecordReader recordReader=table.read(1);
if(recordReader.read()==null){
//TO DO      
```

## How do I generate logs of MapReduce jobs in MaxCompute?

We recommend that you use one of the following methods to generate logs of MapReduce jobs in MaxCompute:

-   Use `System.out.println` in the code to generate logs of MapReduce jobs in MaxCompute. The logs are exported to stdout of Logview.
-   If an error occurs when you run a MapReduce job, the MaxCompute client returns the error information. You can view the error information without the need to generate logs.
-   If you use common logging, logs are exported to stderr of Logview. You can view the logs in stderr.

## Does a result table contain the duplicate data of two MapReduce jobs?

Yes, the result table contains the duplicate data of two MapReduce jobs. When you query data from the result table, two duplicate records are obtained.

## In Hadoop MapReduce, I can select multiple nodes for distributed data processing. One node represents one machine. How do I configure nodes when I perform distributed data processing in MaxCompute MapReduce?

Compared with Hadoop MapReduce, you do not need to configure nodes in MaxCompute MapReduce.

When you run MapReduce jobs in MaxCompute, the underlying MaxCompute component determines which shards are used based on the algorithm.

## If I do not use a combiner, the data output is normal. After I use a combiner, no input data is provided for reducers. Why?

This issue occurs because each record generated by a reducer cannot be mapped to the key-value pairs generated by a mapper.

## I cannot specify the schema of an output table when I run map-only jobs in MaxCompute. Why?

You must specify the schema of an output table in the `CREATE TABLE` statement when you create the table. Therefore, when you run map-only jobs in MaxCompute, data is directly written to the output table without requiring you to specify the table schema.

## How do I call the local MaxCompute server to run a MapReduce job?

In most cases, you must run the `jar` command on the MaxCompute client to run a MapReduce job. For more information about the syntax of the jar command, see [Submit a MapReduce job](/help/en/maxcompute/user-guide/submit-a-mapreduce-job#concept-m3w-kyf-vdb).

You can perform the following steps to run a MapReduce job of a simulated MapReduce program by calling the local MaxCompute server.

1.  Configure package dependencies.
    
    Dependency packages are required in addition to the SDK package. You can find the dependency packages in the lib folder on the MaxCompute client. The lib folder also contains the SDK JAR package. When you import JAR packages, we recommend that you import all JAR packages in the lib folder of the MaxCompute client that is of the latest version.
    
2.  Upload the JAR package of the MapReduce program.
    
    Package the MapReduce program that passes local testing into a JAR file and upload the package. In this example, the JAR package is named mr.jar. For more information about how to upload resources, see [Resource operations](/help/en/maxcompute/user-guide/resource-operations#concept-pps-h1f-vdb).
    
3.  Specify the running mode.
    
    Configure JobConf. The following sample code shows how to configure JobConf.
    
    ```
    //Configure the connection information of MaxCompute. 
    Account account = new AliyunAccount(accessid, accesskey);
    Odps odps = new Odps(account);
    odps.setEndpoint(endpoint);
    odps.setDefaultProject(project);
    //Obtain the session. 
    SessionState ss = SessionState.get();
    ss.setOdps(odps);
    ss.setLocalRun(false);  //Set LocalRun to false. This value indicates that the MapReduce job runs on the server. If local debugging is required, set LocalRun to true. 
    //Code that includes JobConf configurations 
    Job job = new Job();
    String resource = "mr.jar";
    job.setResources(resource); **This step is similar to jar -resources mr.jar. 
    //Common MapReduce code 
    job.setMapperClass(XXXMapper.class);
    job.setReducerClass(XXXReducer.class);                            
    ```
    
    After you configure JobConf, you can run the MapReduce job.
    

## What do I do if the error message "BufferOverflowException" appears when I run a MapReduce job in MaxCompute?

-   Problem description
    
    When a MapReduce job is run in MaxCompute, the following error message appears:
    
    ```
    FAILED: ODPS-0123131:User defined function exception - Traceback:
         java.nio.BufferOverflowException
         at java.nio.DirectByteBuffer.put(Unknown Source)
         at com.aliyun.odps.udf.impl.batch.TextBinary.put(TextBinary.java:35)   
    ```
    
-   Cause
    
    A large amount of data is written at a time. As a result, a buffer overflow occurs.
    
-   Solution
    
    Make sure that the data that is written in MaxCompute meets the following limits on the data type of a single field:
    
    ```
    String      8MB
    Bigint      -9223372036854775807 ~ 9223372036854775807
    Boolean     True/False
    Double      -1.0 10308 ~ 1.0 10308
    Date        0001-01-01 00:00:00 ~ 9999-12-31 23:59:59                  
    ```
    

## What do I do if the error message "Resource not found" appears when I run a MapReduce job in MaxCompute?

When you submit a MapReduce job, you must configure the `-resources` parameter to specify the required resources. Separate multiple resources with commas (,).

## What do I do if the error message "Class Not Found" appears when I run a MapReduce job in MaxCompute?

When MaxCompute MapReduce is run, the error message "Class Not Found" appears due to one of the following causes:

-   The value of the `-classpath` parameter is invalid. A complete package name must be specified in the -classpath parameter.
-   Incomplete source code in the src folder is packaged into the JAR file.

## What do I do if the error ODPS-0010000 is returned when I run a MapReduce job in MaxCompute?

-   Problem description
    
    When a MapReduce job is run in MaxCompute, the following error message appears:
    
    ```
    ODPS-0010000: System internal error - get input pangu dir meta fail.
    ```
    
-   Cause
    
    A partition is not created or no data is inserted into the partition.
    
-   Solution
    
    Create a partition before you run a MapReduce job.
    

## What do I do if the error message "Table not found" appears when I run a MapReduce job in MaxCompute?

-   Problem description
    
    When a MapReduce job is run in MaxCompute, the following error message appears:
    
    ```
    Exception in thread "main" com.aliyun.odps.OdpsException: Table not found: project_name.table_name.
    ```
    
-   Cause
    
    The name of the project in which the output table is stored is invalid or the output table does not exist.
    
-   Solution
    
    TableInfo.Builder of MaxCompute MapReduce provides two parameters: ProjectName and TableName. You can configure the two parameters to specify the name of the project in which the output table is stored and the name of the output table.
    

## What do I do if the error ODPS-0123144 is returned when I run a MapReduce job in MaxCompute?

-   Problem description
    
    When a MapReduce job is run in MaxCompute, the following error message appears:
    
    ```
    FAILED: ODPS-0123144: Fuxi job failed - WorkerRestar
    ```
    
-   Cause
    
    Data computing on the secondary node of the cluster times out. As a result, the primary node considers that the secondary node is faulty. The timeout period is fixed to 10 minutes and cannot be changed.
    
-   Solution
    
    In most cases, this issue is caused by a large loop in the Reduce stage. For example, if long-tail data or Cartesian products are generated, a large loop exists. To address this issue, you must prevent large loops.
    

## What do I do if the error message "java.security.AccessControlException" appears when I run a MapReduce job in MaxCompute?

-   Problem description
    
    When a MapReduce job is run in MaxCompute, the following error message appears:
    
    ```
    FAILED: ODPS-0123131:User defined function exception - Traceback:
    java.lang.ExceptionInInitializerError
     ...
    Caused by: java.security.AccessControlException: access denied ("java.lang.RuntimePermission" "getProtectionDomain")
      at java.security.AccessControlContext.checkPermission(AccessControlContext.java:472)       
    ```
    
-   Cause
    
    Your code violates sandbox limits. For more information about sandbox limits, see [Java sandbox](/help/en/maxcompute/user-guide/java-sandbox#concept-aln-lrf-vdb).
    
-   Solution
    
    You must access external resources to address this issue. However, MaxCompute does not allow you to access external resources. To access external resources, you must store the processing logic and data of the external resources in MaxCompute. In this case, you must read specific configuration files. For more information, see [Resource usage example](/help/en/maxcompute/user-guide/resource-usage-example#concept-fw4-ygg-vdb).
    

## What do I do if the error message "java.io.IOException" appears when I run a MapReduce job in MaxCompute?

-   Problem description
    
    When a MapReduce job is run in MaxCompute, the following error message appears:
    
    ```
    Exception in thread "main" java.io.IOException: ODPS-0740001: Too many local-run maps: 101, must be <= 100(specified by local-run parameter 'odps.mapred.local.map.max.tasks')     
    ```
    
-   Cause
    
    The default value of local-run maps is 100 and needs to be adjusted.
    
-   Solution
    
    You can add the `-Dodps.mapred.local.map.max.tasks=200` configuration.
    

## What do I do if the error message "Exceed maximum read times per resource" appears when I run a MapReduce job in MaxCompute?

-   Problem description
    
    When a MapReduce job is run in MaxCompute, the following error message appears:
    
    ```
    ODPS-0730001: Exceed maximum read times per resource       
    ```
    
-   Cause
    
    The number of times resource files are read is excessively large.
    
-   Solution
    
    Check the code logic that shows how resources are read. In most cases, resources are read only once when the setup method is called. Modify the code to ensure that resources are not read several times in the Map or Reduce stage.
    

## What do I do if an OOM error occurs before the Reduce stage when I run a MapReduce job in MaxCompute?

-   Cause
    
    A large amount of data is downloaded to memory.
    
-   Solution
    
    Do not use a combiner or set `odps.mapred.map.min.split.size` to 512 for the combiner that you use.
    

## What do I do if an OOM error occurs when I run a MapReduce job in MaxCompute?

This issue occurs due to insufficient memory. To address this issue, you can adjust the values of the following Java Virtual Machine (JVM) parameters: `odps.stage.mapper.jvm.mem and odps.stage.reducer.jvm.mem`. For example, you can set `odps.stage.mapper.jvm.mem` to 2048, which indicates 2 GB.

## What do I do if the error message "java.lang.OutOfMemoryError" appears when I use 600 reducers to load a small configuration file for a MapReduce job in MaxCompute?

-   Problem description
    
    When a MapReduce job is run in MaxCompute, the following error message appears:
    
    ```
    java.lang.OutOfMemoryError: Java heap space
    ```
    
-   Cause
    
    This issue occurs due to the limits of MaxCompute MapReduce. For more information, see [Limits](/help/en/maxcompute/user-guide/limits-3#concept-m4c-4lg-vdb).
    
-   Solution
    
    Configure memory-related parameters. For more information, see [Overview](/help/en/maxcompute/user-guide/overview-21#concept-dhw-rhl-vdb).
    

## What do I do if the error ODPS-0420095 is returned when I run a MapReduce job in MaxCompute?

-   Problem description
    
    When a MapReduce job is run in MaxCompute, the following error message appears:
    
    ```
    Exception in thread "main" java.io.IOException: com.aliyun.odps.OdpsException: ODPS-0420095: Access Denied - The task is not in release range: LOT
    ```
    
-   Cause
    
    Only PyODPS jobs and MaxCompute SQL jobs in which user-defined functions (UDFs) can be called are supported for projects of the MaxCompute developer edition. Other jobs, such as MapReduce jobs and Spark jobs, are not supported.
    
-   Solution
    
    Upgrade project specifications. For more information, see [Switch billing methods](/help/en/maxcompute/product-overview/switch-billing-methods#task-2456382).
    

## What do I do if a large number of errors occur when MaxCompute resources are referenced by a MapReduce job?

-   Problem description
    
    When MaxCompute resources are referenced by a MapReduce job, the following error message appears:
    
    ```
     Caused by: com.aliyun.odps.OdpsException: java.io.FileNotFoundException: temp/mr_XXXXXX/resource/meta.user.group.config (Too many open files)
    ```
    
-   Cause
    
    The number of resources that are referenced by a single job cannot exceed 256. Otherwise, an error is returned. Each table or archive file is considered one resource. For more information about the limits on the number of resources that are referenced by a single job, see [Limits](/help/en/maxcompute/user-guide/limits-3#concept-m4c-4lg-vdb).
    
-   Solution
    
    Adjust the number of resources that are referenced by a single job.
    

## I create a JAR package of the MapReduce program that contains third-party classes by using Maven Assembly. When I run a MapReduce job, an error message, indicating that the third-party classes are not found, appears. What do I do?

MaxCompute MapReduce that runs in a distributed environment is subject to the limits of Java sandboxes. The main program of MapReduce jobs is not subject to the limits. For more information about the limits of Java sandboxes, see [Java sandbox](/help/en/maxcompute/user-guide/java-sandbox#concept-aln-lrf-vdb).

If you want to process only JSON data, we recommend that you use Gson. This way, you do not need to include Gson classes in the JAR package. Open source Java components provide multiple classes that are used to convert strings into date values, such as SimpleDateFormat.

## When I run a Hadoop MapReduce job in MaxCompute, an error of subscript out of bounds occurs. What do I do?

We recommend that you use MaxCompute MapReduce to write the job code. We also recommend that you use Spark on MaxCompute instead of MaxCompute MapReduce to write the job code.
