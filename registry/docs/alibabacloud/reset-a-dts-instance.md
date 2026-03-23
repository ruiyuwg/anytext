Data Transmission Service (DTS) allows you to rest a data synchronization instance or change tracking instance whose configurations are no longer needed. After a DTS instance is reset, the instance enters the Not Configured state and can be reconfigured.

## Prerequisites

The configurations in the **Advanced Settings** step are complete for a data synchronization instance or change tracking instance. The data synchronization instance or change tracking instance is displayed on the **Data Synchronization Tasks** or **Change Tracking Tasks** page. For more information about instance configurations, see the references in [Overview of data synchronization scenarios](/help/en/dts/user-guide/data-synchronization-scenarios) and [Overview of change tracking scenarios](/help/en/dts/user-guide/overview-of-change-tracking-scenarios).

## Usage notes

-   After a data synchronization instance or change tracking instance is reset, the configurations of the instance are cleared.
    
-   You are still charged for a pay-as-you-go DTS instance after the instance is reset.
    
-   You cannot reset a DTS instance that is in the **Prechecking**, **Locking**, or **Starting** state.
    

## Procedure

**Note**

In this example, a data synchronization instance is used to show how to reset an instance.

1.  Go to the Data Synchronization Tasks page.
    
    1.  Log on to the [Data Management (DMS) console](https://dms.alibabacloud.com).
        
    2.  In the top navigation bar, click **Data + AI**.
        
    3.  In the left-side navigation pane, choose **DTS (DTS)** > **Data Synchronization**.
        
    
    **Note**
    
    -   Operations may vary based on the mode and layout of the DMS console. For more information, see [Simple mode](/help/en/dms/simple-mode#concept-2103267) and [Customize the layout and style of the DMS console](/help/en/dms/configure-the-dms-console-based-on-your-business-requirements#task-2134256).
        
    -   You can also go to the [Data Synchronization Tasks page of the new DTS console](https://dts.alibabacloud.com/sync/cn-hangzhou?resourceGroupId=).
        
    
2.  On the right side of **Data Synchronization Tasks**, select the region in which the data synchronization instance resides.
    
    **Note**
    
    If you use the new DTS console, you must select the region in which the data synchronization instance resides in the top navigation bar.
    
3.  Reset the instance.
    
    1.  On the Data Synchronization page, find the instance that you want to manage. Click the **![更多设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1401182361/p300771.png)** icon in the Actions column and select **Reconfigure Task**.
        
    2.  In the **Note** message, read the usage notes.
        
    3.  Click **OK**.
        
    

## FAQ

-   Is data deleted from the source database or destination database of a DTS instance after the instance is reset?
    
    No, the data in the source database or destination database of the instance is not deleted. If a DTS instance is reset, the configurations of the instance are cleared. The data in the source database or destination database of the instance is not affected. The data includes the accounts and passwords of the source and destination databases, selected objects to be synchronized, and alert information.
    
-   Am I able to reset a data migration instance?
    
    No, you cannot reset a data migration instance.
    
-   Am I able to reset multiple DTS instances at a time?
    
    No, you can reset only one DTS instance at a time.
    

## References

-   What to do next: After a DTS instance is reset, you can reconfigure the instance. For more information, see the references in [Overview of data synchronization scenarios](/help/en/dts/user-guide/data-synchronization-scenarios) and [Overview of change tracking scenarios](/help/en/dts/user-guide/overview-of-change-tracking-scenarios).
    
-   Related API operation: [ResetDtsJob](/help/en/dts/developer-reference/api-resetdtsjob).
