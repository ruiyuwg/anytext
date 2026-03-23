As business runs, large amounts of data is accumulated in data lakes. Different from the strictly managed data in data warehouses, this portion of data may be metadata that is stored in data lakes without being managed or regulated. Metadata discovery can analyze data in a data lake in a specific format and automatically generate metadata information. Metadata discovery can be executed periodically or manually to achieve schema-on-read for data lake analysis and computing.

## Limits

1.  The extracted data can be stored only in an Object Storage Service (OSS) bucket of standard storage.
    
2.  Currently, metadata discovery supports only JSON, CSV, Parquet, ORC, Hudi, Delta, and Avro formats.
    
3.  The metadata extraction process consumes computing power but does not incur fees.
    

## Procedure

1.  Log on to the [Data Lake Formation console](https://dlf.console.alibabacloud.com/).
    
2.  In the left navigation bar, click **Metadata** **>** **Metadata Discovery**.
    
3.  On the **Metadata Discovery** page, click **Create Extraction Task****.**
    
4.  Enter the configuration parameters of the metadata extraction task. The following table describes the parameters:
    
    **Parameter**
    
    **Description**
    
    **Extraction Task Name**
    
    The name of the metadata extraction task.
    
    **Select OSS Path**
    
    The OSS bucket path from which you want to extract data. The path follows the format of `oss://<bucket>/<directory path>/<table (optional)>/<partition (optional)>/<file>`. DLF will automatically create a table and partitions based on the names specified in the path.
    
    For example, if you specify the path `oss://my-bucket/my-path/my-table/dt=1/data.csv`, DLF will create a table named `my-table` with a partition `dt=1` and extract data from the **data.csv** file. The content of the **data.csv** file will be used to infer the schema of the created table.
    
    **Note**
    
    To prevent parsing errors, remove **.DS\_Store** files from the directory.
    
    **Exclusion Mode**
    
    The file paths that you want to exclude from the specified OSS path. You can use regular expressions to match the file paths to be excluded.
    
    **Parse Format**
    
    Supports extraction in one of the following formats: JSON, CSV, Parquet, ORC, Hudi, Delta, Avro, or automatic detection mode to automatically parse data files.
    
    **Destination Database**
    
    The database in which you want to store the extracted metadata.
    
    **Destination Table Prefix**
    
    The prefix that is used to generate a name for the destination metadata table. The name of the destination metadata table consists of this prefix and the name of the source file.
    
    **Method of Handle Table Field Update**
    
    The method that is used to process the updated fields if the source table from which data is extracted contains different fields from those in the destination metadata table. The following methods are available:
    
    -   Add Columns and Retain Existing Columns.
        
    -   Update Table Schema and Generate Table Results Based on the last detected table schema.
        
    -   Ignore Updates and Not Modify Table.
        
    
    **Note**
    
    ORC files do not support the detection of new columns.
    
    **Method to Process Deleted OSS objects**
    
    The method that is used to process the data deleted from the source table in the OSS bucket in the process of metadata extraction. The following methods are available:
    
    -   Deletes Metadata.
        
    -   Ignore Updates and Not Delete Tables.
        
    
    **RAM Role**
    
    The role that is used to execute the metadata extraction task. The default value is `AliyunDLFWorkFlowDefaultRole`, which is granted the permission to execute DLF extraction tasks.
    
    **Execution Policy**
    
    -   **Manual** execution: manually runs metadata extraction tasks.
        
    -   **Scheduling** execution: periodically runs metadata extraction tasks at the specified time.
        
    
    **Extraction Policy**
    
    -   **Partial Data Extraction**: When DLF extracts metadata, it scans only partial metadata in each file. This extraction method takes a short period of time. The result accuracy of partial data extraction is lower than that of extract all. You can adjust metadata information on the metadata editing page.
        
    -   **Extract All**: When DLF extracts metadata, it scans all metadata in each file. If the amount of data is large, this extraction method is time-consuming. The results of extract all are more accurate.
        
    

5\. Confirm the relevant parameters for task execution, and click **Save and Execute****.**
