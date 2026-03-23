Location hosting allows you to manage and analyze the stored data in the data lake Object Storage Service (OSS) by hosting it to Data Lake Formation (DLF). After hosting the location, it will provide you with [Storage overview](/help/en/dlf/dlf-1-0/user-guide/storage-overview), [Lifecycle management](/help/en/dlf/dlf-1-0/user-guide/overview-of-lifecycle-management), and [Data overview of data tables](/help/en/dlf/dlf-1-0/user-guide/data-table-data-overview) (such as data access frequency, last data update time), and data lake management capabilities such as storage permissions.

## **Procedure**

### **Register a location**

1.  Log on to the [DLF console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc).
    
2.  In the left-side navigation pane, click **Lake Management** > **Location Hosting**.
    
3.  Click **Register Location**.
    
4.  On the **Register Location** page, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Select OSS Path**
    
    Select the OSS bucket to store and manage your data (multiple selections allowed). Format: `oss://<your_BucketName>`.
    
    `your_BucketName`: the name of the OSS bucket that you created. You can view the OSS bucket name in the [OSS console](https://oss.console.alibabacloud.com/).
    
    **RAM Role**
    
    Select the RAM role. Default value: AliyunDLFWorkFlowDefaultRole.
    
    **Enable OSS Bucket Inventory**
    
    Enabled by default. This feature allows you to view storage information and manage lifecycle after the feature is enabled. By default, data is cleaned every 7 days to reduce your storage costs.
    
    **Note**
    
    If you have already enabled this feature in the OSS console, you cannot enable it again.
    
    **Enable OSS Logging**
    
    Enabled by default. This feature allows you to update metrics such as data access frequency after the feature is enabled. By Default, data is cleaned every 7 days to reduce your storage costs.
    
    **Important**
    
    [Bucket inventory](/help/en/oss/user-guide/bucket-inventory) and [Logging](/help/en/oss/user-guide/logging) will incur additional [Storage fees](/help/en/oss/storage-fees). The following are example fees for actual tests for your reference:
    
    -   Example of bucket inventory fees: 100 million files (7-day automatic cleanup), approximately 0.37 RMB/month.
        
    -   Example of log storage fees: Assuming 400 million API calls per month (7-day automatic cleanup), approximately 5 RMB/month.
        
    
5.  In the pop-up confirmation box, click **OK**.
    
    After registration is complete, you can see the registered location in the list.
    

### **Edit a location**

1.  In the left-side navigation pane, click **Lake Management** > **Location Hosting**.
    
2.  Select the location you want to edit and click **Edit** in the **Actions** column.
    
3.  You can choose to enable or disable the OSS bucket inventory and OSS logging features. Click **OK**.
    

**Note**

The OSS bucket inventory and OSS logging features not automatically enabled by DLF cannot be disabled in **Update Location** page.

### **Delete a location**

1.  In the left-side navigation pane, click **Lake Management** > **Location Hosting**.
    
2.  Select the location you want to delete and click **Delete** in the **Actions** column.
    

**Important**

-   After the location is deleted, the OSS bucket inventory and OSS logging features enabled by DLF will be automatically deleted. If they were not automatically enabled by DLF, they will not be automatically disabled.
    
-   After the location is deleted, DLF will no longer have permissions to manage storage data. You will not be able to use all or part of the features in [Storage overview](/help/en/dlf/dlf-1-0/user-guide/storage-overview), [Lifecycle management](/help/en/dlf/dlf-1-0/user-guide/overview-of-lifecycle-management), and [Data overview of data tables](/help/en/dlf/dlf-1-0/user-guide/data-table-data-overview).
