In DataWorks, you can specify a YARN queue for each module at the workspace level. By default, each module uses this queue to execute E-MapReduce (EMR) tasks. You can also define whether the global YARN resource queue priority overrides the priority of a YARN resource queue that is configured in a specific module. This topic describes how to configure a global YARN resource queue.

## Background information

Yet Another Resource Negotiator (YARN) is a distributed resource management system. It is a core component of Hadoop and is responsible for managing resources, scheduling and running jobs, and monitoring jobs in Hadoop clusters. For more information about EMR YARN, see [YARN schedulers](/help/en/emr/emr-on-ecs/user-guide/yarn-schedulers#section-4sc-0ej-keo).

In DataWorks, you can configure YARN resource queues for running scheduling nodes in one of the following ways:

-   Method 1: Configure a global YARN resource queue
    
    Set the YARN resource queue that a DataWorks feature module uses to run EMR tasks at the workspace level, and define whether the YARN resource queue priority configured at the global level is higher than the priority of a YARN resource queue configured in a specific module. For more information, see [Configure a global YARN resource queue](#3aad560051btb).
    
-   Method 2: Configure a YARN queue in a product module
    
    -   **Data Development (Data Studio)**: For Hive and Spark nodes, you can go to the **Scheduling Configuration** section on the right side of the node editing page and set the `**queue**` parameter in the **DataWorks** parameters to specify the YARN resource queue for a single node task.
        
    -   **Data Quality**: You can configure the **YARN Resource Queue** for a single partitioning rule by setting the **Running Queue** parameter for the partitioning rule of an EMR table. For more information, see [Configure rules for a non-partitioned table](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table).
        
    -   **Other product modules**: You cannot set a separate **YARN Resource Queue** within these modules.
        

## Limits

-   Only the following roles can configure a YARN resource queue:
    
    -   An Alibaba Cloud account.
        
    -   A RAM user or RAM role that has the AliyunDataWorksFullAccess permission.
        
    -   A RAM user that has the **Workspace Administrator** role.
        
-   **Modifying the global maximum YARN priority**
    
    If you modify the YARN priority of an EMR task in DataWorks, you must also add the `yarn.cluster.max-application-priority` configuration item to the `yarn-site.xml` file in your EMR cluster and set a priority value that is larger than the default value of `0`. Otherwise, the EMR task priority that you configured in DataWorks will not take effect.
    
    **Note**
    
    After you modify the configuration, you must restart the YARN service for the configuration to take effect.
    
-   Currently, you can set global YARN resource queues only for Data Development (Data Studio), Data Quality, DataAnalysis, and Operation Center.
    

## **Prerequisites**

An EMR cluster is registered with DataWorks. For more information, see Data Development (new version): Attach an EMR computing resource.

## Configure a global YARN resource queue

1.  Go to the global YARN resource queue configuration page.
    
    1.  Go to the SettingCenter page.
        
        Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **More** > **Management Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Management Center**.
        
    2.  In the navigation pane on the left, click **Computing Resource** to go to the computing resource page.
        
    3.  Find the destination EMR cluster, click **YARN Resource Queues**, to go to the global YARN resource queue configuration page.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6416433371/p718734.png)
        
2.  Set the global YARN resource queue.
    
    Click **Edit YARN Resource Queues** in the upper-right corner of the **YARN Resource Queues** page to configure the global YARN resource queues and queue priorities for each module.
    
    **Note**
    
    This is a global configuration for the workspace. Before you proceed, confirm that you are in the correct workspace.
    
    **Parameter**
    
    **Description**
    
    **Resource Queue**
    
    The YARN resource queue that is used when each module runs EMR tasks. You can go to the [EMR on ECS console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list) to obtain the YARN resource queues that are created in EMR.
    
    **Global Settings Take Precedence**
    
    After you select this option, the global configuration takes precedence over the configuration in the product module. In this case, tasks are run in a unified manner based on the globally configured YARN resource queue.
    
    -   Global configuration: The YARN resource queues that are configured in **Management Center** > **Computing Resources** on an EMR cluster's **YARN Resource Queues** page.
        
        **Note**
        
        Currently, you can set global YARN resource queues only for Data Development (Data Studio), Data Quality, DataAnalysis, and Operation Center.
        
    -   Configuration in a product module:
        
        -   **Data Development (Data Studio)**: For Hive and Spark nodes, you can go to the **Scheduling Configuration** section on the right side of the node editing page and set the `**queue**` parameter in the **DataWorks** parameters to specify the YARN resource queue for a single node task.
            
        -   **Data Quality**: You can configure the **YARN Resource Queue** for a single partitioning rule by setting the **Running Queue** parameter for the partitioning rule of an EMR table. For more information, see [Configure rules for a non-partitioned table](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table).
            
        -   **Other product modules**: You cannot set a separate **YARN Resource Queue** within these modules.
            
    

## **References**

[Set the mapping between baseline priorities and YARN queue priorities](/help/en/dataworks/user-guide/setting-baseline-priority-and-yarn-queue-mapping)
