The diagnostics feature provided by PolarDB for MySQL integrates some features of Database Autonomy Service (DAS), including storage analysis. You can use the storage analysis feature to view information about storage usage in a cluster. For example, you can view the number of available storage days, the storage usage and fragmentation percentage of a table, and the exception statistics.

## Precautions

-   The storage analysis feature can analyze up to 20,000 tables.
    
-   Statistics such as the fragmentation percentage on the Data Space tab, except for the physical file size, are generated based on the `information_schema.tables` table. Therefore, some information may not be up to date.
    
-   After you execute the `OPTIMIZE TABLE` statement, the fragmentation percentage of the table is not immediately updated on the Data Space tab.
    
    The `information_schema_stats_expiry` parameter specifies the expiration time of cached statistics. The default value is 86,400 seconds, which is 24 hours.
    
    You can modify this parameter or execute the `ANALYZE TABLE` statement to view the latest fragmentation percentage.
    

## Procedure

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region where the cluster is deployed.
    
3.  On the **Clusters** page, click the ID of the cluster.
    
4.  In the left-side navigation pane, choose **Diagnostics and Optimization** > **Quick Diagnostics**.
    
5.  Click the **Storage Analysis** tab.
    
    ![实时性能](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9232729951/p104776.png)
    
6.  On the **Storage Analysis** tab, you can view the following information.
    
    -   By default, you are placed on the **Space Overview** tab. On this tab, you can view information about storage usage and trends.![空间概况](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9232729951/p104836.png)
        
    -   Click the **Data Space** tab. On this tab, you can view the storage usage of individual databases and tables. To view the fields and indexes of a table, click the name of the table.![数据空间](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9232729951/p104837.png)
