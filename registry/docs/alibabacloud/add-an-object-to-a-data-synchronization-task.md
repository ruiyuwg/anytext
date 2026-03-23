When a data synchronization task is running, you can add objects to the task or remove objects from the task. You do not need to configure the task again. This topic describes how to add an object to a data synchronization task.

**Important**

This topic describes how to add an object to a data synchronization task by using the old version of the Data Transmission Service (DTS) console. You can also use the new version of the DTS console to perform this operation. For more information, see [Modify the objects to be synchronized](/help/en/dts/user-guide/modify-the-objects-to-be-synchronized#concept-628273).

## Prerequisites

-   The data synchronization task is in the **Synchronizing** or **Synchronization Failed** state.
    
-   The source and destination databases are not in the process of upgrade, configuration change, network switchover, or cross-zone migration. This ensures that DTS can connect to the source and destination databases. This also ensures that DTS can read database and table information from the source database.
    

## Usage notes

The time when DTS synchronizes data of a new object depends on whether **initial data synchronization** is configured for the data synchronization task.

-   If initial data synchronization is not configured, DTS synchronizes data from the point in time when incremental data is generated in the source database.
    
-   If initial data synchronization is configured, DTS synchronizes schemas and full data, and then synchronizes incremental data.
    

## Procedure

1.  Log on to the [DTS console](https://dts.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Data Synchronization**.
    
3.  In the upper part of the **Synchronization Tasks** page, select the region in which the data synchronization instance resides.
    
4.  Find the data synchronization task that you want to manage and choose **More** > **Modify Objects to Synchronize** in the **Actions** column. ![Reselect the objects to be synchronized](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0264738161/p49162.png)
    
5.  **Optional:**Select the synchronization type of the new object to be synchronized. Supported synchronization types are schema synchronization and full data synchronization.
    
    **Important**
    
    This operation takes effect only for new objects to be synchronized.
    
6.  In the **Available** section, click the object that you want to add, and click the ![Rightwards arrow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p40698.png) icon to move the object to the **Selected** section.
    
    **Important**
    
    If you want to use only the object name mapping feature, you must move the object to be synchronized from the **Selected Objects** section to the **Available** section, add it to the **Selected** section, and then use the object name mapping feature. Otherwise, the feature does not take effect.
    
    ![Add an object to a data synchronization task](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6208539951/p49163.png)
7.  Click **Precheck**.
    
    **Note**
    
    -   After you change the objects to be synchronized, DTS performs a precheck on the data synchronization task. You can start the data synchronization task only after the task passes the precheck.
        
    -   If the task fails to pass the precheck, click the ![Info icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p47468.png) icon next to each failed item to view details. Troubleshoot the issues based on the causes and run the precheck again.
        
    
8.  Start the data synchronization task.
