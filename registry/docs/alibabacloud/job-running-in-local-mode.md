This topic describes the differences between the local mode and distributed mode in which MapReduce jobs run. It also provides examples of MapReduce jobs in local mode.

## Introduction to the local mode

Before you run a job in local mode, you can specify the \-local option in the JAR command to simulate the running of the job. This way, you can perform local debugging on the job.

During job running, the client downloads the metadata and data of the input table, metadata of the output table, and resources that are required for local debugging from MaxCompute. The downloaded data is saved to a local directory named `warehouse`.

After the job is completed, the computing results are saved to a file in the `warehouse` directory. If the input table and required resources are downloaded to the `warehouse` directory, MapReduce directly references the data and files in the directory next time, instead of downloading the data again.

## Differences between the local mode and distributed mode

A MapReduce job that runs in local mode starts multiple map and reduce tasks to process data. These tasks run in sequence.

The simulated running process is different from an actual distributed running process in the following aspects:

-   Rows in the input table: A maximum of 100 rows of data can be downloaded in local mode.
-   Resource usage: In distributed mode, MaxCompute limits the size of resources that can be referenced. For more information, see [MapReduce limits](/help/en/maxcompute/user-guide/limits-3#t12042.html "This topic describes the limits of MaxCompute MapReduce. Your business may be affected if these limits are violated."). However, no limits are imposed on the size of resources in local mode.
-   Security: MaxCompute MapReduce and user-defined functions (UDFs) are limited by a [Java sandbox](/help/en/maxcompute/user-guide/java-sandbox#t12022.html) in distributed mode. However, no limits are imposed in local mode.

## Examples

The following code shows an example of a MapReduce job in local mode:

```
    odps:my_project> jar -l com.aliyun.odps.mapred.example.WordCount wc_in wc_out
    Summary:
    counters: 10
        map-reduce framework
                combine_input_groups=2
                combine_output_records=2
                map_input_bytes=4
                map_input_records=1
                map_output_records=2
                map_output_[wc_out]_bytes=0
                map_output_[wc_out]_records=0
                reduce_input_groups=2
                reduce_output_[wc_out]_bytes=8
                reduce_output_[wc_out]_records=2
    OK
```

For more information about the sample code of WordCount, see [WordCount](/help/en/maxcompute/user-guide/wordcount-example#t12024.html "This topic describes an example of running WordCount in MapReduce.").

If this is the first time you run a local debugging command, a directory named warehouse is created in the current path after the command is executed. The following code shows the directory structure of `warehouse`.

```
<warehouse>
   |____my_project (project directory)
          |____ <__tables__>
          |       |__wc_in (table data directory)
          |       |      |____ data (file)
          |       |      |
          |       |      |____ <__schema__> (file)
          |       |__wc_out (table data directory)
          |               |____ data (file)
          |               |
          |               |____ <__schema__> (file)
          |
          |____ <__resources__>
                  |
                  |___table_resource_name (table resource)
                  |         |____<__ref__>
                  |
                  |___ file_resource_name (file resource)
```

-   Directories at the same level as `my_project` indicate projects. Directories at the same level as `wc_in` and `wc_out` indicate data tables. The table data that you read or write by using the JAR command is downloaded to directories at this level.
-   The <\_\_schema\_\_> file stores the metadata of a table. The following code defines the file format:
    
    ```
      project=local_project_name
      table=local_table_name
      columns=col1_name:col1_type,col2_name:col2_type
      partitions=p1:STRING,p2:BIGINT    -- In this example, you do not need to specify this field.
    ```
    
    Separate the name and data type of a column with a colon (:). Separate columns with commas (,). The project and table names, `project_name.table_name`, must be declared at the beginning of the <\_\_schema\_\_> file. Separate the declaration and column definition with a comma (,). Example: `project_name.table_name,col1_name:col1_type,col2_name:col2_type,……`
    
-   The data file in the `tables` directory stores the table data. The number of columns and column data must match the definition in the \_schema\_ file. Separate columns with commas (,).
    
    The \_schema\_ file in the `wc_in` directory contains the following data:
    
    ```
    my_project.wc_in,key:STRING,value:STRING
    ```
    
    The data file contains the following data:
    
    ```
    0,2
    ```
    
    The client downloads the metadata and part of the data of a table from MaxCompute, and saves the data to the preceding files. The next time you run this example program, the client directly uses the data in the `wc_in` directory, instead of downloading it again.
    
    **Note** Data can be downloaded from MaxCompute only for MapReduce jobs that run in local mode.
    
    The \_schema\_ file in the `wc_out` directory contains the following data:
    
    ```
    my_project.wc_out,key:STRING,cnt:BIGINT
    ```
    
    The data file contains the following data:
    
    ```
      0,1
      2,1
    ```
    
    The client downloads the metadata of the `wc_out` table from MaxCompute, and saves the data to the \_schema\_ file. After a job is completed, the results are saved to the data file.
    
    **Note**
    
    -   You can also edit the \_schema\_ and data files, and save the files in table directories.
    -   If you run a job in local mode and the client detects that the table directory exists, the client does not download the information of this table from MaxCompute. The local table directory can include a table that does not exist in MaxCompute.
