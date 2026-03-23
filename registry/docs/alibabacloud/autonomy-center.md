The diagnostics feature of PolarDB for MySQL integrates with some features of Database Autonomy Service (DAS). You can use the autonomy center of DAS to enable the autonomy service. After the autonomy service is enabled, if an exception occurs in a database, DAS automatically performs root cause analysis, gives suggestions, and then performs optimizations and fixes issues. Optimizations are allowed based on your authorization.

## Prerequisites

Your cluster is a PolarDB for MySQL cluster of Cluster Edition, Multi-master Cluster (Database/Table) Edition, or X-Engine Edition. This feature is not supported on the cluster of Single Node Edition. For more information about the editions of PolarDB, see [Editions](/help/en/polardb/polardb-for-mysql/enterprise-edition-product-series#concept-1948721).

## Usage notes

Only the PolarDB for MySQL clusters whose **product type** is **pay-as-you-go** support automatic scale-out and automatic scale-in. **Subscription** clusters do not support automatic scale-out or automatic scale-in. For more information, see [Purchase a pay-as-you-go cluster](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-pay-as-you-go-cluster#task-1580301).

## Procedure

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region in which the cluster is deployed.
    
3.  On the **Clusters** page, click the ID of the cluster.
    
4.  In the left-side navigation pane, choose **Diagnostics and Optimization** > **Quick Diagnostics**.
    
5.  On the page that appears, click the **Autonomy Center** tab.
    
    ![页签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4687449951/p132562.png)
    
6.  In the upper-right corner, click **Autonomy Service Settings**.
    
    ![自治功能开关](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4256099761/p241134.png)
    
7.  In the **Autonomous Function Management** dialog box, click the **Autonomous Function Settings** tab.
    
    **Note**
    
    After you enable the autonomy service, capacity evaluation, session analytics, throttling SQL analytics, and snapshot saving upon exceptions are automatically performed. These operations do not cause extra loads to the database.
    
    ![开启自治服务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2304511661/p241144.png)
    
8.  Specify the following parameters: **Automatic Index Creation and Deletion**, **Automatic Throttling**, **Automatic Scale-up/out**, and **Automatic Scale-down/in**.
    
    -   **Automatic Index Creation and Deletion**: After you turn on **Enable Autonomy**, the **SQL Diagnostics Only** feature is automatically enabled.
        
        -   **SQL Diagnosis Only**: DAS performs daily diagnostics on SQL statements and provides index optimization suggestions. However, DAS does not create indexes on your cluster.
            
        -   **SQL Diagnosis and Automatic Index Creation**: DAS performs daily diagnostics on SQL statements, provides index optimization suggestions, and then creates indexes on your cluster based on these suggestions.
            
            **Note**
            
            Automatic SQL optimization creates indexes only during the O&M window of the cluster.
            
    -   **Automatic Throttling**: You can specify conditions to trigger automatic SQL throttling. If the specified conditions are met, automatic SQL throttling is triggered.
        
        **Note**
        
        For example, automatic throttling is triggered if the following conditions are met during the period of time specified by the Current limiting period parameter (default value: 00:00 to 23:59): The CPU utilization is greater than 70%, the number of active sessions is greater than 16, and the duration is at least 2 minutes. In this case, the system automatically starts to check whether the conditions are met again when the automatic throttling is triggered. If the issue is not fixed, the system automatically rolls back the throttling operation. After automatic throttling is triggered, the duration of the throttling operation does not exceed the time specified by the Maximum Throttling Duration parameter. For more information, see [Automatic SQL throttling](/help/en/das/user-guide/configure-automatic-sql-throttling#task-1915564).
        
    -   **Automatic Scale-up/out** and **Automatic Scale-down/in**: You can enable these features and customize conditions. Scale-in and scale-out are automatically triggered when the specified conditions are met.
        
        **Parameter**
        
        **Description**
        
        **Auto Scaling-out**
        
        Specifies whether to enable the auto scaling feature.
        
        **Observation Period**
        
        If the CPU utilization reaches the specified threshold during the observation period, PolarDB automatically adds nodes or upgrades the specifications of your cluster when the observation period ends. The system determines the scaling method based on the inbound read and write requests. The minimum observation period is 5 minutes, and the time required to complete a scaling activity is 10 minutes. Therefore, auto scaling requires at least 15 minutes to take effect. For example, if the observation period is 5 minutes and the time required to complete a scaling activity is 10 minutes, you must wait 15 minutes before you can check the scaling result.
        
        **Note**
        
        The scale-in observation window is equal to the observation window plus 10 minutes. For example, if the **observation window** is set to 30 minutes, the scale-in observation window is 40 minutes.
        
        **CPU Usage**
        
        The threshold that is used to trigger automatic scale-up. If the **CPU Usage** is greater than or equal to the specified threshold, automatic scale-up is triggered.
        
        **Maximum Specification**
        
        The maximum specifications to which the system can upgrade the cluster. After an automatic scale-up is triggered, the system scales up your PolarDB cluster to the maximum specifications in small increments. For example, the CPU specification can be upgraded from 4 cores to 8 cores, and then to 16 cores until the upper limit is reached.
        
        **Maximum Number of Read-only Nodes**
        
        The maximum number of read-only nodes that can be automatically added to the cluster. After an auto scaling is triggered, the system adds one or two read-only nodes each time until the specified upper limit is reached.
        
        **Note**
        
        -   The nodes that are automatically added are associated with the default endpoint of your cluster. If you use a custom endpoint, specify whether these nodes are automatically associated with the endpoint by using the **Automatically Associate New Nodes** parameter. For more information about how to configure the **Automatically Associate New Nodes** parameter, see [Configure PolarProxy](/help/en/polardb/polardb-for-mysql/user-guide/configure-polarproxy#task-1580301).
            
        -   If you want the system to perform only scale-up and no scale-out, set this parameter to the current number of read-only nodes of the cluster.
            
        -   During a scale-up, transient disconnections occur on all nodes of the cluster. This does not occur during a scale-out.
            
        
        **Auto Scaling-in**
        
        Specifies whether to enable automatic scale-back.
        
        **Note**
        
        After automatic scale-back is enabled, if the cluster is not in the quiescent period and the average CPU utilization of automatically scaled nodes remains at less than 30% for more than 99% of the scale-in observation window (the observation window plus 10 minutes), the cluster is scaled back tier-by-tier to the original specifications.
        
        **Quiescent Period**
        
        The minimum interval between two scaling activities. During a quiescent period, PolarDB monitors the resource usage of a cluster but does not trigger scaling activities. If a quiescent period and an observation period end at the same time and the CPU utilization reaches the threshold within the observation period, PolarDB automatically triggers auto scaling.
        
    
9.  Click **OK**.
