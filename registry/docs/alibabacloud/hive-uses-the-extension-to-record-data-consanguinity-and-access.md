By default, EMR-HOOK is integrated with Hive that is deployed in an E-MapReduce (EMR) cluster. EMR-HOOK can collect the SQL information of jobs, such as data lineage and access frequency. You can use EMR-HOOK to collect the frequency of access to tables or partitions based on metadata managed in Data Lake Formation (DLF). You can also use DataWorks to manage data lineage. This topic describes how to configure EMR-HOOK for Hive.

## Prerequisites

A DataLake or custom cluster is created and the Hive service is selected when you create the cluster. For more information, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page).

## **Limits**

-   You cannot use EMR-HOOK to collect the SQL information of jobs in a gateway that is deployed by using EMR-CLI.
    
-   In a minor version earlier than EMR V5.16.0 or EMR V3.50.0, the settings of the **hive.exec.post.hooks** parameter that is configured for Hive and the **park.sql.queryExecutionListeners** parameter that is configured for Spark cannot be synchronized to a gateway. In EMR V5.16.0, EMR V3.50.0, or a minor version later than EMR V5.16.0 or EMR V3.50.0, the settings of the preceding parameters can be synchronized to a gateway, and the **hive\_aux\_jars\_path\_gateway\_only** parameter is introduced. You can configure the hive\_aux\_jars\_path\_gateway\_only parameter to independently use a JAR file with a custom extension on the gateway to enhance functionality.
    

## **Precautions**

-   EMR-HOOK is enabled by default in a minor version earlier than EMR V5.14.0 or EMR V3.48.0.
    
    If EMR-HOOK is disabled by default in a custom cluster of EMR V3.44, you can manually enable EMR-HOOK by referring to [FAQ](#cdcd523adf9nb).
    
-   EMR-HOOK is disabled by default in EMR V5.14.0, EMR V3.48.0, or a minor version later than EMR V5.14.0 or EMR V3.48.0. If you want to use EMR-HOOK, you must manually enable EMR-HOOK.
    

## Procedure

1.  Go to the Services tab.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
        
    2.  In the top navigation bar, select a region and a resource group based on your business requirements.
        
    3.  On the EMR on ECS page, find the desired cluster and click **Services** in the Actions column.
        
2.  Configure EMR-HOOK.
    
    1.  On the **Services** tab, find the Hive service and click **Configure**.
        
    2.  On the **Configure** tab, modify or add the following EMR-HOOK-related configuration items on specific subtabs.
        
        **Subtab**
        
        **Parameter**
        
        **Description**
        
        **hive-site.xml**
        
        **hive.exec.post.hooks**
        
        Listens to the SQL information of Hive, including the data lineage and access frequency.
        
        -   If EMR-HOOK is enabled, set this parameter to `com.aliyun.emr.meta.hive.hook.LineageLoggerHook`.
            
        -   If EMR-HOOK is disabled, leave this parameter empty.
            
        
        **dlf.emrhook.webtracking**
        
        Specifies whether to enable access frequency reporting. Valid values:
        
        -   true: enable
            
        -   false: disable
            
        
        **hivemetastore-site.xml**
        
        **hive.metastore.event.listeners**
        
        Listens to the event information about metadata changes in Hive, including data lineage.
        
        -   If EMR-HOOK is enabled, set this parameter to `com.aliyun.emr.meta.hive.listener.MetaStoreListener`.
            
        -   If EMR-HOOK is disabled, leave this parameter empty.
            
        
        **hive.metastore.pre.event.listeners**
        
        Listens to the event information before a metadata change in Hive, including data lineage.
        
        -   If EMR-HOOK is enabled, set this parameter to `com.aliyun.emr.meta.hive.listener.MetaStorePreAuditListener`.
            
        -   If EMR-HOOK is disabled, leave this parameter empty.
            
        
        **Note**
        
        If EMR-HOOK is disabled, the **Data Overview** tab of a specific table in the DLF console no longer displays the data in the following columns: **File Visits within Last Day**, **File Visits within Last Seven Days**, and **File Visits within Last 30 Days**.
        
    3.  Save the configurations.
        
        1.  On the **Configure** tab, click **Save**.
            
        2.  In the dialog box that appears, configure the **Execution Reason** parameter and click **Save**.
            
3.  Restart Hive.
    
    1.  In the upper-right corner of the **Configure** tab, choose **More** > **Restart**.
        
    2.  In the dialog box that appears, configure the **Execution Reason** parameter and click **OK**.
        
    3.  In the **Confirm** message, click **OK**.
        
4.  View data overview and data lineage.
    
    -   You can view data overview in the DLF console. For more information, see [Data overview of data tables](/help/en/dlf/dlf-1-0/user-guide/data-table-data-overview).
        
    -   You can view data lineage in the DataWorks console. For more information, see [View lineages](/help/en/dataworks/user-guide/view-lineages).
        

## **FAQ**

How do I enable EMR-HOOK for a custom cluster of EMR V3.44?

On the **Configure** tab of the Hive service page, modify the following configuration items and make the configurations take effect as prompted.

**Subtab**

**Configuration item**

**Modification**

**hive-site.xml**

**hive\_aux\_jars\_path**

Append `,/opt/apps/EMRHOOK/emrhook-1.1.5/hive-hook-1.1.5-hive23.jar` to the values of the configuration items.

**hive-env.sh**

**hive\_aux\_jars\_path**

## **References**

For information about how to configure EMR-HOOK for Spark, see [Use the Spark SQL extension feature to record data lineage and historical access information](/help/en/emr/emr-on-ecs/user-guide/sparksql-uses-the-extension-to-record-data-kinship-and-access).
