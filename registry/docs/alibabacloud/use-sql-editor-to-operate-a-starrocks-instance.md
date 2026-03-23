E-MapReduce (EMR) StarRocks Manager is a data management console provided by the Alibaba Cloud EMR team for EMR Serverless StarRocks instances. EMR StarRocks Manager provides various features such as comprehensive data management, diagnostics and analytics, and security permission configuration for instances.

## Background information

SQL editor is an interactive query editor provided by EMR StarRocks Manager. You can write, run, and manage SQL query statements in the SQL editor of EMR StarRocks Manager without the need to download or install any on-premises client software. This helps data analysts and developers query and analyze data in real time, and improves work efficiency. For more information, see [SQL editor](/help/en/emr/emr-serverless-starrocks/manage-connections-in-starrocks-manager).

## Procedure

1.  Go to the Instances tab.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the left-side navigation pane, choose **EMR Serverless** > **StarRocks**.
        
    3.  In the top navigation bar, select a region based on your business requirements.
        
2.  On the **Instances** tab, find the EMR Serverless StarRocks instance that you created and click **Connect** in the Actions column.
    
3.  Connect to the EMR Serverless StarRocks instance.
    
    #### **Create a connection**
    
    1.  On the **New Connection** tab, configure the parameters that are described in the following table.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5180993371/p751411.png)
        
        **Parameter**
        
        **Example**
        
        **Description**
        
        **Region**
        
        China (Hangzhou)
        
        The region in which the EMR Serverless StarRocks instance resides.
        
        **Instance**
        
        StarRocks\_Serverlesss
        
        The name of the EMR Serverless StarRocks instance.
        
        **Connection Name**
        
        Connection\_Serverlesss
        
        The custom name of the connection.
        
        The name must be 1 to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (\_).
        
        **Username**
        
        The username used to log on to the EMR Serverless StarRocks instance.
        
        The default initial username is admin. You can use this username to connect to the EMR Serverless StarRocks instance or create another user based on your business requirements.
        
        **Password**
        
        The password used to log on to the EMR Serverless StarRocks instance.
        
        The password is specified when you create the EMR Serverless StarRocks instance.
        
    2.  Click **Test Network Connectivity**.
        
    3.  After the connectivity test is passed, click **OK**.
        
    
    #### **Use an existing connection**
    
    **Important**
    
    If you use an existing connection, make sure that the connected EMR Serverless StarRocks instance exists. If the EMR Serverless StarRocks instance is deleted, create a connection.
    
    On the **Existing Connections** tab, find the connection that you want to use and click **Connect** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1196085371/p898423.png)
    
4.  Optional. Perform operations on the EMR Serverless StarRocks instance.
    
    1.  In the left-side navigation pane, click **SQL Editor**. On the **Queries** tab, click **File** or the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1196085371/p892355.png) icon to create a file. In the **Create File** dialog box, configure the parameters and click **Confirm**.
        
    2.  In the code editor, enter the following SQL statements and click **Run**:
        

```
/* Create a database. */create database test_sql_editor_db;/* Use the database. */use test_sql_editor_db;/* Create a table. */CREATE TABLE    `emr_query_logs` (        `conn_id` varchar(10) NULL COMMENT "",        `database` varchar(100) NULL COMMENT "",        `start_time` bigint (20) NULL COMMENT "",        `end_time` bigint (20) NULL COMMENT "",        `event_time` bigint (20) NULL COMMENT "",        `is_query` boolean NULL COMMENT "",        `latency` int (11) NULL COMMENT "",        `query_id` varchar(40) NULL COMMENT "",        `remote_ip` varchar(15) NULL COMMENT "",        `state` varchar(20) NULL COMMENT "",        `user` varchar(20) NULL COMMENT ""    ) ENGINE = OLAP DUPLICATE KEY (`conn_id`) COMMENT "OLAP" DISTRIBUTED BY HASH (`user`) BUCKETS 10 PROPERTIES (        "replication_num" = "2",        "in_memory" = "false",        "storage_format" = "DEFAULT",        "enable_persistent_index" = "false",        "compression" = "LZ4"    );/* Insert data into the table. */insert into    test_sql_editor_db.emr_query_logs (        `conn_id`,        `database`,        `start_time`,        `end_time`,        `event_time`,        `is_query`,        `latency`,        `query_id`,        `remote_ip`,        `state`,        `user`    )values    (        '54656',        'tpc_h_sf1',        1691635106990,        1691635107405,        1691635107405000000,        1,        415,        'fbec0dd7-3726-11ee-a3ef-720338511ec3',        '10.0.**.**',        'FINISHED',        'admin'    ),    (        '54658',        'tpc_h_sf1',        1691635107632,        1691635107860,        1691635107860000000,        1,        228,        'fc4e0301-3726-11ee-a3ef-720338511ec3',        '10.0.**.**',        'FINISHED',        'admin'    ),    (        '54659',        'tpc_h_sf1',        1691635108757,        1691635108930,        1691635108930000000,        1,        173,        'fcf9ac5s8-3726-11ee-a3ef-720338511ec3',        '10.0.**.**',        'FINISHED',        'admin'    ),    (        '54661',        'tpc_h_sf1',        1691635108994,        1691635109137,        1691635109137000000,        1,        143,        'fd1dd62e-3726-11ee-a3ef-720338511ec3',        '10.0.**.**',        'FINISHED',        'admin'    ),    (        '54663',        'tpc_h_sf1',        1691635109445,        1691635109533,        1691635109533000000,        1,        88,        'fd62a765-3726-11ee-a3ef-720338511ec3',        '10.0.**.**',        'FINISHED',        'admin'    ),    (        '54664',        'tpc_h_sf1',        1691635109724,        1691635109907,        1691635109907000000,        1,        183,        'fd8d39d9-3726-11ee-a3ef-720338511ec3',        '10.0.**.**',        'FINISHED',        'admin'    );/* View table information. */select * from test_sql_editor_db.emr_query_logs;
```

The query results are displayed on the Output result tab. The following figure shows an example.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5369894371/p704754.png)
