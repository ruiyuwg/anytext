This topic describes how to configure the parameters and policies for SQL execution, and the runtime parameters for lock-free schema changes in the configuration of security rules.

## Prerequisites

-   You are a Data Management (DMS) administrator or database administrator (DBA). For more information about how to view the system roles of a DMS user, see [View system roles](/help/en/dms/product-overview/view-system-roles#task-2121689).
    
-   Your database instance is managed in Secure Collaboration mode and supports the control over SQL execution. For more information about how to view the control mode, see [View the control mode of an instance](/help/en/dms/view-the-control-mode-of-an-instance#multiTask315).
    

## Procedure

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
2.  Move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner and choose **All functions** > **Security and Specifications** > **Security Rules**.
    
    **Note**
    
    If you use the DMS console in normal mode, choose **Security and Specifications** > **Security Rules** in the top navigation bar.
    
3.  Find the security rule set that you want to modify and click **Edit** in the **Actions** column.
    
4.  In the left-side pane of the **Details** page, click the **SQL Execute Control** tab.
    
5.  **Optional:**Set the **Checkpoints** parameter to **Basic Configuration Item**.
    
6.  Find the configuration item that you want to modify, and click **Edit** in the **Actions** column.
    
    **Applicable scope**
    
    **Configuration item**
    
    **Description**
    
    SQL execution
    
    Database lock timeout mechanism before SQL execution
    
    By default, Enable Protection Mechanism If Lock Wait Times Out is turned on. This prevents SQL execution from being blocked.
    
    Target resource concurrency control before SQL execution
    
    By default, Autonomous System Adaptation is turned on. This limits the number of SQL statements executed in DMS at a time.
    
    Database load check before SQL execution
    
    By default, Enable Thread Protection Mechanism is turned on. Then, if the load on the database is too high, DMS suspends SQL execution. You can set the Maximum Running Threads, Retry Interval (Seconds), Maximum Retries parameters.
    
    sleep policy after SQL execution
    
    By default, Autonomous System Adaptation is turned on. This prevents latency in synchronization between primary and secondary databases and in the synchronization channels of Data Transmission Service (DTS). The latency can be caused by frequent SQL execution.
    
    Lock-free schema changes
    
    Parameters to Control Lock-free Schema Change
    
    You can turn on the switch of a runtime parameter and modify the value to control lock-free schema change.
    
    You can modify the following runtime parameters:
    
    -   Table Lock Timeout Period During Table Switchover (Seconds)
        
    -   Retries
        
    -   Full Copy Policy and Size
        
    -   Time Window for Table Switchover
        
    -   Cleanup Policy After Table Switchover
        
    
    **Note**
    
    -   In most cases, you do not need to manually modify the runtime parameters. DMS automatically executes lock-free schema changes in the optimal and safest way. Before you modify the runtime parameters, make sure that you understand the descriptions of the parameters.
        
    -   Move your pointer over the ![Question mark icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7977094461/p384461.png) icons next to the parameters to view the descriptions.
