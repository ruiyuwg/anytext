The data catalog is the top-level entity of metadata in Data Lake Formation (DLF). It can contain multiple databases. This topic describes the basic operations of the data catalog.

## Scenarios

The data catalog is used in the scenarios of metadata isolation. For example, multiple E-MapReduce (EMR) clusters, each cluster is attached to a different catalog. Metadata between each EMR cluster is invisible to each other.

## Basic operations

### Create a data catalog

1.  Log on to the [Data Lake Formation console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc).
    
2.  In the left-side navigation pane, choose **Metadata** > **Metadata**.
    
3.  Click the **Catalog List** tab, and click **New Catalog**.
    
4.  Enter the following information in the input box, and click **OK**.
    
    -   **Catalog ID**: Required. It is a unique identifier and cannot be duplicated.
        
    -   **Description**: Optional. Enter description information.
        
    -   **Location**: Optional. Enter the default storage path. Only Object Storage Service (OSS) paths are supported.
        

### View a data catalog

1.  In the left-side navigation pane, choose **Metadata** > **Metadata**.
    
2.  Click the **Catalog List** tab to view the catalog list information.
    

### Modify a data catalog

1.  In the left-side navigation pane, choose **Metadata** > **Metadata**.
    
2.  Click the **Catalog List** tab.
    
3.  On the data catalog list page, click **Edit** in the **Actions** column.
    
4.  Modify the following information in the input box, and click **OK**.
    
    -   **Description**: Optional. Enter description information.
        
    -   **Location**: Optional. Enter the default storage path. Only OSS paths are supported.
        

### Delete a data catalog

**Warning**

Once deleted, the data cannot be recovered.

1.  In the left-side navigation pane, choose **Metadata** > **Metadata**.
    
2.  Click the **Catalog List** tab.
    
3.  On the data catalog list page, click **Delete** in the **Actions** column.
    
4.  In the confirmation dialog box that pops up, click **Delete** to complete the catalog deletion.
    

## Adaptation operations with compute engines

### How to modify the data catalog of an E-MapReduce cluster

**Important**

After modifying the DLF **Catalog ID** bound to the E-MapReduce cluster, the cluster points to the new **Catalog ID**. This change causes operations on databases, tables, and running jobs in the original catalog to become invalid. Please fully consider the impact before switching.

#### **Hive engine adaptation**

1.  In the **core-site.xml** file of the **Hive** service, add the following configuration item. For more information, see [Manage configuration items](/help/en/emr/emr-on-ecs/user-guide/manage-configuration-items#section-st3-dhw-qnx).
    
    **Key**
    
    **Value**
    
    dlf.catalog.id
    
    The Catalog ID of the DLF.
    
2.  Make the configuration take effect.
    
    1.  Click **Save**. After saving, click **Deploy Client Configuration**.
        
    2.  In the dialog box that pops up, enter **Execution Reason**, and click **OK**.
        
3.  Restart the Hive service.
    
    1.  On the Hive service configuration page, click **More** > **Restart**.
        
    2.  In the dialog box that pops up, enter **Execution Reason**, and click **OK**.
        
        After a successful restart, the Hive status becomes **Healthy**, and the Catalog ID modification is complete.
        

#### **Spark engine adaptation**

Modify the **hive-site.xml** file of the **Spark** service. For more information, see [Hive engine adaptation](#e5b0f9a276m65).

**Note**

For EMR 5.6.0, 3.40.0, and earlier versions, you do not need to modify this configuration for Spark separately. It uses the Hive configuration, and only Hive configuration needs to be modified.

#### **Presto engine adaptation**

Modify the **hive.properties** file of the **Presto** service. For more information, see [Hive engine adaptation](#e5b0f9a276m65).

**Note**

This feature is supported only in EMR 5.8.0, 3.42.0, and later versions.

#### **Impala engine adaptation**

**Note**

You do not need to modify Impala configuration separately. It uses Hive configuration, and only Hive configuration needs to be modified.
