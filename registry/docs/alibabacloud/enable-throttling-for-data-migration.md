You can enable throttling for data synchronization and migration tasks based on the read and write performance of the source and destination databases to prevent the databases from being overloaded. This topic describes how to enable throttling for data migration in Data Transmission Service (DTS).

## Usage notes

If you modify the objects to be synchronized, the subtasks that is generated after you modify the objects to be synchronized do not inherit the throttling configuration of the task in the full synchronization stage.

## Procedure

**Note**

In this example, a data migration task is used. You can also follow the procedure to configure enable throttling for data synchronization tasks.

1.  Use one of the following methods to go to the Data Migration page and select the region in which the data migration instance resides.
    
    ### DTS console
    
    1.  Log on to the [DTS console](https://dts.alibabacloud.com/).
        
    2.  In the left-side navigation pane, click **Data Migration**.
        
    3.  In the upper-left corner of the page, select the region in which the data migration instance resides.
        
    
    ### DMS console
    
    **Note**
    
    The actual operation may vary based on the mode and layout of the DMS console. For more information, see [Simple mode](/help/en/dms/simple-mode) and [Customize the layout and style of the DMS console](/help/en/dms/configure-the-dms-console-based-on-your-business-requirements).
    
    1.  Log on to the [DMS console](https://dms.alibabacloud.com).
        
    2.  In the top navigation bar, move the pointer over **Data + AI** > **DTS (DTS)** > **Data Migration** .
        
    3.  From the drop-down list to the right of **Data Migration Tasks**, select the region in which the data synchronization instance resides.
        
    
2.  Go to the **Performance Monitoring** tab of the data migration task.
    
    1.  On the **Data Migration** page, find the data migration task that you want to manage and click the task ID.
        
    2.  **Optional.** In the left-side bar, click **Task Management**. On the **Subtask Details** tab of the Task Management tab, click the ID of a subtask.
        
        **Note**
        
        You can perform this operation only if the data migration task is a distributed task.
        
    3.  In the left-side bar, click **Performance Monitoring**.
        
    
3.  Enable throttling for data migration.
    
    -   Enable throttling for full data migration
        
        1.  On the **Performance of Full Data Migration** tab, click **Enable Throttling for Full Data Migration**.
            
        2.  In the **Modify the Write Rate of Full Data Migration** dialog box, set the **Enable Throttling for Full Data Migration** parameter to **Yes**.
            
        3.  View the description of each metric in the dialog box and configure the parameters based on your business requirements.
            
        
    -   Enable throttling for incremental data migration
        
        1.  On the **Performance of Full Data Migration** tab, click **Enable Throttling for Incremental Data Migration**.
            
        2.  In the **Modify the Write Rate of Full Data Migration** dialog box, set the **Enable Throttling for Incremental Data Migration** parameter to **Yes**.
            
        3.  View the description of each metric in the dialog box and configure the parameters based on your business requirements.
            
        
    
4.  Click **OK**.
    

## FAQ

-   Q: Can I enable throttling for change tracking tasks?
    
    A: No, you cannot enable throttling for change tracking tasks. The speed of data consumption is determined by the change tracking client.
    
-   Q: Why does DTS not consume fewer source and destination database resources after I enable throttling for a data synchronization or migration task?
    
    A: A possible reason is that other services are running in the source database or the amount of data to be synchronized or migrated is large.
    
-   Q: How do I disable throttling?
    
    A: Set the **Enable Throttling for Full Data Migration** parameter to **No**. For more information, see the [Procedure](#section-2mg-rkk-yx1) section of this topic.
