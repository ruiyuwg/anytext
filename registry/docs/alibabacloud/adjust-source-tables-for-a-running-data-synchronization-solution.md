For a solution used to synchronize data to Hologres, you can add or remove source tables when the solution is running. This topic describes how to add or remove source tables to or from a synchronization solution that is running.

## Prerequisites

A synchronization solution used to synchronize data to Hologres is created and running. For more information, see [Create a real-time synchronization solution to synchronize data to Hologres](/help/en/dataworks/user-guide/create-a-real-time-synchronization-solution-to-synchronize-data-to-hologres#task-2541849).

## Add source tables to a synchronization solution

1.  On the Tasks page, find the desired solution and choose More > Modify Configuration to go to the solution configuration page.
2.  Add source tables to the synchronization solution and update the mappings between the source tables and destination tables.
    1.  In the Source Table section of the Set Synchronization Sources and Rules step, select the source tables that you want to add to the synchronization solution from the Source Table list and click the ![Icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8924430161/p202947.png) icon to move the tables to the Selected Source Table list. ![Add source tables to Selected Source Table](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3551017261/p241499.png) 
    2.  Click Next Step.
    3.  Click Refresh source table and Hologres Table mapping in the Set Destination Table step to update the mappings between the source tables and destination Hologres tables.
    4.  View the mapping progress, source tables, and mapped destination tables.
        
        ![Progress of mapping the source tables to destination tables](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3551017261/p241518.png)
        
        No.
        
        Description
        
        1
        
        The progress of mapping the source tables to destination tables.
        
        **Note** The mapping may require a long period of time if you want to synchronize data from a large number of tables.
        
3.  Click Next Step.
4.  Configure rules to process data definition language (DDL) messages.
    
    Sources, such as MySQL, may contain DDL messages. You can modify the configured processing rules for different DDL messages based on your business requirements in the Set Processing Policy for DDL Messages step.
    
    1.  Configure parameters in the Processing Policy for DDL Messages in Real-time Sync section. ![Processing rules for DDL messages](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7407980261/p229408.png) 
        
        The following table describes the processing rules for different DDL messages.
        
        DDL message
        
        Rule
        
        CreateTable
        
        DataWorks processes a DDL message of the related type based on the following rules after it receives the message:
        
        -   Normal: sends the message to the destination. Then, the destination processes the message. Each destination may process DDL messages based on its own business logic. If you select Normal for CreateTable, DataWorks only forwards the messages.
        -   Ignore: ignores the message and does not send it to the destination.
        -   Alert: ignores the message and records the alert in real-time synchronization logs. In addition, the alert contains information about the reason indicating that a message is ignored because of a running error.
        -   Error: returns an error when the real-time sync solution is running and terminates the real-time sync solution.
        
        DropTable
        
        AddColumn
        
        DropColumn
        
        RenameTable
        
        RenameColumn
        
        ChangeColumn
        
        TruncateTable
        
    2.  Click Next Step.
5.  Configure the resources required by the sync solution.
    
    In the Set Resources for Solution Running step, set the parameters as required. ![Set Resources for Solution Running](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7407980261/p229409.png)
    
    -   Offline Sync
        
        Parameter
        
        Description
        
        Offline task name rules
        
        The name of the batch sync node that is used to synchronize the full data of the source. After a sync solution is created, DataWorks first generates a batch sync node to synchronize full data, and then generates real-time sync nodes to synchronize incremental data.
        
        Resource Groups for Full Batch Sync Nodes
        
        The exclusive resource group for Data Integration that is used to run the batch sync node.
        
    -   Scheduling Settings
        
        Parameter
        
        Description
        
        Select scheduling Resource Group
        
        The resource group for scheduling that is used to run the nodes.
        
        Only exclusive resource groups for Data Integration can be used to run sync solutions. You can set this parameter to the name of the exclusive resource group for Data Integration that you purchased. For more information, see [Plan and configure resources](/help/en/doc-detail/198909.html#task-2010759).
        
        **Note** If you do not have an exclusive resource group, click Create a new exclusive Resource Group to create one.
        
    -   Incremental Sync
        
        Parameter
        
        Description
        
        Resource Groups for Incremental Batch Sync Nodes
        
        The exclusive resource group that is used to run the real-time sync nodes.
        
    -   Channel Settings
        
        Parameter
        
        Description
        
        Maximum number of connections supported by source read
        
        The maximum number of Java Database Connectivity (JDBC) connections that are allowed for the source. Specify an appropriate number based on the resources of the source. Default value: 20.
        
    
6.  Click Complete Configuration to return to the Tasks page.
7.  Find the solution to which you added source tables and choose More > Submit and Run in the Operation column. In the Submit and Run message, click OK to run the solution.
    
    After you submit and run the solution to which you added source tables, the system compares the source tables in the original solution with the source tables in the new solution. If new source tables are detected, the system performs the process of adding the source tables.
    
    **Note** After you add source tables to the synchronization solution at a specific point in time, the system starts to load data to these newly added source tables at this point in time. After the data loading ends, the system starts to synchronize the data in these source tables to the destination. For example, your synchronization solution starts to run at 08:00 and is still running at 09:00. You add a source table to the solution at 09:00. Then, the system starts to load data to the table from 09:00, and the loading is ended at 10:00. In this case, the system stops the real-time synchronization nodes that are running and starts to synchronize the data that is generated from 09:00 to 10:00 in the newly added source table to the destination Hologres table. The addition of source tables to a synchronization solution that is running can ensure only the consistency between data before and after the synchronization.
    
8.  View the addition details of the source tables.
    1.  On the Tasks page, find the synchronization solution to which you added source tables and click Execution details in the Operation column to go to the details page of the synchronization solution.
    2.  In the Steps section, find the Show Added or Removed Source Tables node and click Execution details in the Status column.
        
        If the state of the Show Added or Removed Tables node is Succeeded, the new source tables are added for the synchronization solution.
        
    3.  View the new source tables that are added to the synchronization solution.

## Remove source tables from the synchronization solution

1.  On the Tasks page, find the desired solution and choose More > Modify Configuration to go to the solution configuration page.
2.  Remove source tables from the synchronization solution and update the mappings between the remaining source tables and destination tables.
    1.  In the Source Table section of the Set Synchronization Sources and Rules step, select the source tables that you want to remove from the synchronization solution in the Selected Source Table list and click the ![Icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3551017261/p242204.png) icon to move the tables back to the Source Table list. ![Remove the selected source tables](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3551017261/p242203.png) 
    2.  Click Next Step.
    3.  Click Refresh source table and Hologres Table mapping in the Set Destination Table step to update the mappings between the source tables and destination Hologres tables.
    4.  View the mapping progress, source tables, and mapped destination tables.
        
        ![Progress of mapping the source tables to destination tables](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3551017261/p241518.png)
        
        No.
        
        Description
        
        1
        
        The progress of mapping the source tables to destination tables.
        
        **Note** The mapping may require a long period of time if you want to synchronize data from a large number of tables.
        
3.  Click Next Step.
4.  Configure rules to process data definition language (DDL) messages.
    
    Sources, such as MySQL, may contain DDL messages. You can modify the configured processing rules for different DDL messages based on your business requirements in the Set Processing Policy for DDL Messages step.
    
    1.  Configure parameters in the Processing Policy for DDL Messages in Real-time Sync section. ![Processing rules for DDL messages](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7407980261/p229408.png) 
        
        The following table describes the processing rules for different DDL messages.
        
        DDL message
        
        Rule
        
        CreateTable
        
        DataWorks processes a DDL message of the related type based on the following rules after it receives the message:
        
        -   Normal: sends the message to the destination. Then, the destination processes the message. Each destination may process DDL messages based on its own business logic. If you select Normal for CreateTable, DataWorks only forwards the messages.
        -   Ignore: ignores the message and does not send it to the destination.
        -   Alert: ignores the message and records the alert in real-time synchronization logs. In addition, the alert contains information about the reason indicating that a message is ignored because of a running error.
        -   Error: returns an error when the real-time sync solution is running and terminates the real-time sync solution.
        
        DropTable
        
        AddColumn
        
        DropColumn
        
        RenameTable
        
        RenameColumn
        
        ChangeColumn
        
        TruncateTable
        
5.  Configure the resources required by the sync solution.
    
    In the Set Resources for Solution Running step, set the parameters as required. ![Set Resources for Solution Running](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7407980261/p229409.png)
    
    -   Offline Sync
        
        Parameter
        
        Description
        
        Offline task name rules
        
        The name of the batch sync node that is used to synchronize the full data of the source. After a sync solution is created, DataWorks first generates a batch sync node to synchronize full data, and then generates real-time sync nodes to synchronize incremental data.
        
        Resource Groups for Full Batch Sync Nodes
        
        The exclusive resource group for Data Integration that is used to run the batch sync node.
        
    -   Scheduling Settings
        
        Parameter
        
        Description
        
        Select scheduling Resource Group
        
        The resource group for scheduling that is used to run the nodes.
        
        Only exclusive resource groups for Data Integration can be used to run sync solutions. You can set this parameter to the name of the exclusive resource group for Data Integration that you purchased. For more information, see [Plan and configure resources](/help/en/doc-detail/198909.html#task-2010759).
        
        **Note** If you do not have an exclusive resource group, click Create a new exclusive Resource Group to create one.
        
    -   Incremental Sync
        
        Parameter
        
        Description
        
        Resource Groups for Incremental Batch Sync Nodes
        
        The exclusive resource group that is used to run the real-time sync nodes.
        
    -   Channel Settings
        
        Parameter
        
        Description
        
        Maximum number of connections supported by source read
        
        The maximum number of Java Database Connectivity (JDBC) connections that are allowed for the source. Specify an appropriate number based on the resources of the source. Default value: 20.
        
    
6.  Click Complete Configuration to return to the Tasks page.
7.  Find the solution from which you removed source tables and choose More > Submit and Run in the Operation column. In the Submit and Run message, click OK to run the solution.
    
    If you remove source tables from a synchronization solution that is running, the source tables are also removed from real-time synchronization nodes generated by the synchronization solution. After you submit and run the synchronization solution from which you removed source tables, the system continues to synchronize data at the time when the synchronization solution starts to be rerun.
    
8.  View the removal details of the source tables.
    1.  In the Steps section, find the Show Added or Removed Source Tables node and click Execution details in the Status column.
        
        If the state of the Show Added or Removed Source Tables node is Succeeded, the source tables are removed from the synchronization solution.
        
    2.  View the source tables that are removed from the synchronization solution.
