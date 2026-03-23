The Read Table component reads data from MaxCompute tables. By default, the component reads the table data of the current project. To read data from tables in other projects, you must prefix the table names with the related project names.

**Note**

Although the Read Table component supports all data types, the algorithm components in Designer support only the DOUBLE, BIGINT, STRING, BOOLEAN, and DATETIME data types. To prevent errors in downstream algorithm components, connect a data conversion component to the Read Table component.

In Designer, you can configure the parameters for the Read Table component only in the user interface (UI). The following table describes the parameters.

Tab

Parameter

Description

**Select Table**

**Table Name**

The name of the MaxCompute table from which you want to read data. If you want to read data from a MaxCompute table in another project, set this parameter in the **Project name.Table name** format. Example: **tianchi\_project.weibo\_data**.

**Important**

If the fields in the MaxCompute table are modified, Designer cannot automatically synchronize the changes. Manually reconfigure the MaxCompute source.

**Partition**

If the input table is a partitioned table, select the **Partition** check box and configure the **Parameter** to query data by partition.

**Note**

If a SQL script component is connected downstream, this partition filter condition does not take effect. Configure the filter condition in the [SQL script](/help/en/pai/user-guide/sql-script) component.

**Parameter**

The partition that you want to filter. This parameter is used to filter data of the partitioned table. Separate multiple partitions with commas (,). If you do not specify this parameter, the full table is used. Examples:

-   For a dynamic partitioned table, enter a value in the **dt=${yyyyMMdd}** format. **${yyyyMMdd}** is a system parameter that represents the current date and **${yyyyMMdd-1d}** represents the day before the current date.
    
-   For a standard partitioned table, enter partition conditions. Example: **ds=1,ds=2**.
    
-   For a multi-level partitioned table, use a forward slash (/) to separate the partitions. For example: **ds=1/name=cat,ds=2/name=dog**.
    
-   Use global variables. Example: **ds=${a}/name=${b}/tag=${c}**. You can configure a, b, and c on the Global Variables tab of the pipeline.
    

**Field Information**

**Source Table Columns**

After you enter the **Table Name**, the system automatically reads the table schema.
