Data Management (DMS) offers command-line options and the GUI to facilitate the management of Tair and Redis Open-Source Edition instances. In addition to basic data manipulation, DMS supports extended features.

## Background information

DMS is an all-in-one data management service that supports a variety of relational and NoSQL databases. The service offers features such as data management, schema management, user authorization, security audit, data trend analysis, and data tracking. For more information about DMS, see [Overview](/help/en/dms/product-overview/what-is-dms#task-1919582). You can use DMS to manage databases with ease. This enhances data security, improves management efficiency, and maximizes data value.

## Procedure

1.  [Use DMS to connect to an instance](/help/en/redis/user-guide/log-on-to-an-apsaradb-for-redis-instance-by-using-dms#concept-jvw-c24-tdb).
    
2.  Perform section-specific operations based on your business requirements.
    
    Figure 1. DMS user interface ![DMS界面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0851103461/p242009.png)
    
    **No.**
    
    **Section**
    
    **Description**
    
    ①
    
    Database selection section
    
    Double-click database names to switch between databases.
    
    ②
    
    Visual operation section
    
    Manage keys in databases:
    
    -   Add keys: Click **New**. On the right-side tab, specify the key name, data type, time to live (TTL) or timeout period, and key value, and then click **Submit**.
        
    -   Delete keys: In the key list, select the keys that you want to delete, and then click **Delete**. You can select multiple keys at a time while holding the Shift key.
        
    -   Search for keys: Enter the key name in the search box and click the ![搜索按钮](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0558996161/p242024.png) icon.
        
    -   Modify keys: In the key list, double-click the key that you want to modify, enter a key value and TTL on the right-side tab, click **Submit**, and then click **Execute**.
        
        **Note**
        
        You cannot modify key names or data types.
        
    
    ③
    
    Extended feature section
    
    In this section, shortcuts to extended features are provided. You can use these features by clicking the following icons:
    
    -   ![DAS入口图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5571039461/p242167.png) (DAS shortcut): allows you to view real-time performance data and manage instance sessions. For more information, see [Real-time performance monitoring](/help/en/das/user-guide/view-real-time-performance-metrics-1#multiTask214) and [Session management](/help/en/das/user-guide/session-management-8/#multiTask282).
        
    -   ![操作审计入口图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0558996161/p242168.png) (Operation audit): stores all data queries and change records. The feature allows you to query information about a performed operation, such as the user that performed the operation and the time when the operation was performed. For more information, see [Audit operations](/help/en/dms/getting-started/audit-operations#task-1987736).
        
    -   ![分享功能图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5571039461/p242169.png) (Sharing): allows you to share the database console and commands with relevant personnel. For more information, see [Share the SQLConsole tab or a ticket](/help/en/dms/share-the-sqlconsole-tab-or-a-ticket#task-1937558).
        
        **Note**
        
        The supported features are displayed in the console.
        
    
    ④
    
    CLI section
    
    Enter the command that you want to run, such as DBSIZE, and then click **Execute** to view the output and history information about the execution.
    
    **Important**
    
    DMS has limits on Redis commands. For more information, see [SQL Console for Redis](/help/en/dms/sql-console-for-redis).
    

## **FAQ**

-   Why does DMS report the "No database available in this instance" error?
    
    In the DMS **database list**, right-click the desired instance and select **Refresh / Sync Dictionary**. Then, try again.
