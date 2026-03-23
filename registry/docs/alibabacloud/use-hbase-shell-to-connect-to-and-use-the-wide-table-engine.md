Lindorm Shell is an HBase client tool provided by Lindorm. It uses the HBase API for Java to connect to LindormTable and perform operations, such as creating tables, inserting data, and querying data. This topic describes how to download Lindorm Shell and use it to connect to LindormTable.

## Prerequisites

-   A Java environment is installed. Java Development Kit (JDK) 1.8 or a later version is required.
    
-   The IP address of the client is added to the whitelist of the Lindorm instance. For more information, see [Configure a whitelist](/help/en/lindorm/getting-started/configure-a-whitelist#task-2045184).
    

## Usage notes

-   When you connect to LindormTable using Lindorm Shell, you can perform only simple data definition language (DDL) and data read and write operations. For more information about unsupported operations, see [Limits on HBase API](/help/en/lindorm/user-guide/use-the-hbase-api-to-connect-to-and-use-the-wide-table-engine-limits#concept-2557609).
    
-   Do not use the HBase API to access wide tables created using SQL. This may cause garbled characters.
    
-   You can use Lindorm Shell on a **Linux** or **macOS** operating system.
    
    **Important**
    
    If you use Lindorm Shell on a Windows operating system, you may encounter **errors or missing libraries**. If this occurs, you must **add the required libraries to your system** based on the error messages.
    

## Procedure

1.  Download the Lindorm Shell tool.
    
    1.  In the upper-left corner of the [Lindorm console](https://lindorm.console.alibabacloud.com/cn-hangzhou/clusterhou/cluster), select the region where the instance is located. On the **Instances** page, click the target instance ID.
        
    2.  In the navigation pane on the left, click **Database Connections** and then click the **Wide Table Engine** tab.
        
    3.  Click **Lindorm Shell**Download****.
        
2.  Run the command to decompress the Lindorm Shell package to a target folder. The following example shows how to decompress the package to the `alihbase-2.0.18` folder.
    
    ```
    tar zxvf hbaseue-shell.tar.gz
    ```
    
3.  Configure connection parameters.
    
    1.  Go to the `alihbase-2.0.18/conf` directory and open the `hbase-site.xml` file.
        
        ```
        vi hbase-site.xml
        ```
        
    2.  Configure the endpoint, username, and password to connect to LindormTable.
        
        ```
        <configuration>
            <property>
                <name>hbase.zookeeper.quorum</name>
                <value>ld-bp17j28j2y7pm****-proxy-lindorm-pub.lindorm.rds.aliyuncs.com:30020</value>
            </property>
            <property>
                <name>hbase.client.username</name>
                <value>testuser</value>
            </property>
            <property>
                <name>hbase.client.password</name>
                <value>password</value>
            </property>
        </configuration>
        ```
        
        Parameter descriptions:
        
        -   **hbase.zookeeper.quorum**: The **Access By Using HBase Java API** endpoint for the Lindorm Wide Table Engine.
            
            -   VPC endpoint: Use this endpoint if Lindorm Shell is installed on an ECS instance that is in the same VPC as the Lindorm instance.
                
            -   Public endpoint: Use this endpoint if Lindorm Shell is installed on your local machine, or on an ECS instance that is not in the same VPC as the Lindorm instance.
                
        -   **hbase.client.username** and **hbase.client.password**: The username and password that are used to access LindormTable. If you forget your password, you can change it in the LindormTable **Cluster Management System**. For more information, see [Change a user password](/help/en/doc-detail/174671.html#section-n3z-64v-v73).
            
        
4.  Access LindormTable using Lindorm Shell.
    
    Go to the `alihbase-2.0.18/bin` directory and run the following command.
    
    ```
    ./hbase shell
    ```
    
    The following information indicates a successful connection.
    
    ```
    Version 2.0.18, r08b8d58a9d6ce89765d5ebe2ddff425aed644c16, Mon Feb  1 12:46:39 CST 2021
    Took 0.0034 seconds
    ```
    
    **Note**
    
    For more information about how to use the shell, see [Lindorm Shell reference](#d619e6a04b8v5).
    

## **Lindorm Shell reference**

### **Command reference**

For more information about shell commands, see [Apache HBase Shell](https://hbase.apache.org/book.html#shell).

## **Data definition language**

-   **create**: Creates a table.
    
-   **list**: Lists all tables.
    
-   **disable**: Disables a table.
    
-   **is\_disabled**: Verifies whether a table is disabled.
    
-   **enable**: Enables a table.
    
-   **is\_enabled**: Verifies whether a table is enabled.
    
-   **describe**: Displays the details of a specified table, including table properties and the table schema.
    
-   **alter**: Modifies a table.
    
-   **exists**: Verifies whether a table exists.
    
-   **drop**: Deletes a specified table.
    

## **Data manipulation language**

-   **put**: Updates the value in a specific cell.
    
-   **get**: Retrieves the content of a specified row or cell.
    
-   **delete**: Deletes the value of a cell in a table.
    
-   **deleteall**: Deletes all cells in a specified row.
    
-   **scan**: Scans and returns table data.
    
-   **count**: Counts and returns the number of rows in a table.
    
-   **truncate\_preserve**: Deletes all data in a table. This operation disables and deletes the specified table, and then re-creates it with the same region partitions as the original table.
    

## **Enter and exit the Shell environment**

-   Enter the Shell environment.
    
    ```
    bin/hbase shell
    ```
    
-   Exit the Shell environment.
    
    ```
    quit
    ```
    

### **Operation reference**

## Create a table and insert data

1.  Create a table. You must specify the names of the table and the column family.
    
    ```
    create 'table_name', 'column_family_name'
    ```
    
    Example:
    
    ```
    // Create a table named test with a column family named cf.
    create 'test', 'cf'
    ```
    
2.  Insert data.
    
    ```
    put 'table_name', 'rowkey', 'column_family_name:column_name', 'value'
    ```
    
    Example:
    
    ```
    put 'test', 'row1', 'cf:a', 'value1'
    put 'test', 'row2', 'cf:b', 'value2'
    put 'test', 'row3', 'cf:c', 'value3'
    ```
    
    **Note**
    
    `row1` is the rowkey of the `test` table, `cf:a` specifies the column family name and column name, and `value1` is the value.
    

## Query

-   Query information about all tables. You can use a regular expression to filter tables.
    
    ```
    list
    list 'abc.*'
    list 'test'
    ```
    
-   Query data in a specified table.
    
    The `scan` command provides a flexible way to access HBase data. You can use the `scan` operation to scan an entire table or query data within a specific range. The query speed is slightly slower than that of querying a single piece of data using the `get` command. Run the following statement to query the test table.
    
    ```
    scan 'table_name'
    ```
    
    Example:
    
    ```
    scan 'test'
    ```
    
    Result:
    
    ```
    ROW                                      COLUMN+CELL
     row1                                    column=cf:a, timestamp=1421762485768, value=value1
     row2                                    column=cf:b, timestamp=1421762491785, value=value2
     row3                                    column=cf:c, timestamp=1421762496210, value=value3
    3 row(s) in 0.0230 seconds
    ```
    
-   Query a single row of data from a table.
    
    ```
    get 'table_name', 'Rowkey' 
    ```
    
    Example:
    
    ```
    get 'test', 'row1' 
    ```
    
    Result:
    
    ```
    COLUMN CELL
     cf:a timestamp=1421762485768, value=value1
    1 row(s) in 0.0350 seconds
    ```
    

## **Disable and enable a table**

You can disable or enable a specified table. Before you delete a table, modify its settings, or perform other operations, you must first use the **disable** command to disable the table. After you complete the deletion or configuration changes, use the **enable** command to re-enable the table.

```
disable 'table_name'
enable 'table_name'
```

## **Delete a table**

Delete a specified table.

```
drop 'table_name'
```

### **Common configuration reference**

**Common configurations**

-   Set the major compaction epoch for a specified table. Do not set this parameter unless necessary. The unit is milliseconds (ms).
    
    The following example sets the major compaction epoch to 7 days.
    
    ```
    alter 'table_name', {NAME => 'column_family_name', CONFIGURATION => {'hbase.hregion.majorcompaction' => 16800000}}
    ```
    
    **Note**
    
    Default value: Math.Min(TTL, 1,728,000,000 ms). If you do not set a TTL, the system uses the default value of 20 days (20 × 24 × 60 × 60 × 1000 ms = 1,728,000,000 ms).
    
-   Set the data compression algorithm for the column family of a specified table.
    
    ```
    alter 'table_name', NAME => 'column_family_name', COMPRESSION => 'ZSTD'
    ```
    
-   Set the block encoding type for the column family of a specified table.
    
    Set the block encoding type for the column family of the test table to DATA\_BLOCK\_ENCODING.
    
    ```
    alter 'table_name', NAME => 'column_family_name', DATA_BLOCK_ENCODING => 'DIFF'
    ```
    
-   Set the time to live (TTL) for the column family of a specified table. The unit of TTL is seconds (s). For example, 2,592,000 s is 30 days.
    
    ```
    alter 'table_name', NAME => 'column_family_name', TTL => 2592000
    ```
    
    To cancel the data validity period and retain data permanently, you can set the TTL value to FOREVER. The following is an example:
    
    ```
    alter 'table_name' , {NAME => 'column_family_name', TTL => 'FOREVER'}
    ```
    
-   Set pre-sharding for a specified table.
    
    ```
    create 'table_name',{NAME => 'column_family_name',COMPRESSION => 'snappy' }, { NUMREGIONS => 50, SPLITALGO => 'HexStringSplit' }
    ```
    
    **Parameter descriptions**
    
    **Field**
    
    **Description**
    
    NAME
    
    The column family name of the HBase table.
    
    COMPRESSION
    
    The data compression algorithm for the HBase table. No default compression algorithm is used. The following compression algorithms are available:
    
    -   ZSTD (**Recommended**)
        
    -   SNAPPY
        
    -   LZ4
        
    
    NUMREGIONS
    
    The number of shards. Typically, calculate the number of shards based on a storage usage of 6 GB to 8 GB per shard. If the instance is large, you can set a larger number of shards as needed.
    
    SPLITALGO
    
    The algorithm used to initialize partitions. HBase tables support the following three splitting algorithms. The scenarios for each algorithm are described below:
    
    -   HexStringSplit: Suitable for rowkeys that are prefixed with a hexadecimal string.
        
    -   DecimalStringSplit: Suitable for rowkeys that are prefixed with a decimal string.
        
    -   UniformSplit: Suitable for rowkeys that have a completely random prefix.
        
    

After you modify the configuration, run the following statement to verify that the changes have taken effect:

```
describe 'table_name'
```
