If a resource group is overutilized or needs to run many concurrent tasks, its current specifications may be insufficient. You can upgrade the resource group. If the specifications of a resource group exceed your business needs, you can downgrade it to save on resource fees. This topic describes how to change the specifications of a resource group.

## Introduction to specification changes

A specification change involves upgrading or downgrading your current product. The following table describes these changes.

**Change type**

**Change details**

**Scope of changes**

**Billing**

**Effective time**

**Upgrade**

Upgrades the resource specifications of your purchased order. The number of resource groups does not increase.

Changes the specifications of the current resource group. The specifications of all machines in the resource group are changed.

You must pay the price difference for the new resources from the time the upgrade takes effect until the original order expires.The actual fees are subject to your bill. For more information about how to view your bill, see [View bill details (Deprecated)](/help/en/dataworks/view-spending-details#concept-1813894).

The new configuration takes effect about 20 minutes after you pay for the specification change order.

**Downgrade**

Downgrades the resource specifications of your purchased order. The number of resource groups does not decrease.

DataWorks refunds the price difference from the time the downgrade takes effect until the original order expires.The actual fees are subject to your bill. For more information about how to view your bill, see [View bill details (Deprecated)](/help/en/dataworks/view-spending-details#concept-1813894).

## Limits

-   Resource group limits
    
    You can only change the specifications of exclusive resource groups for Data Integration and exclusive resource groups for scheduling that are in the **Running** state.
    
-   Permission limits
    
    Only Alibaba Cloud accounts and Resource Access Management (RAM) users who have the **AliyunDataWorksFullAccess** and **AliyunBSSOrderAccess** policies can change specifications.
    
-   Product limits
    
    You cannot change the specifications of pay-as-you-go products.
    
-   Order operation limits
    
    If an exclusive resource group for scheduling or an exclusive resource group for Data Integration has a pending order for scaling or a specification change, a dialog box appears when you attempt to scale the resource group or change its specifications again. The dialog box prompts you to go to the Order Center to process the order. You must complete the pending order before you can proceed.
    

## Specification change support for subscription products

The following table describes the supported specification changes for subscription products. A check mark (√) indicates that a change is supported, and a cross (×) indicates that it is not supported.

**Resource type**

**Upgrade**

**Downgrade**

**Description**

**Exclusive resource group for Data Integration**

√

√

The specifications of each machine in the resource group can affect the maximum concurrency that you can configure for a single task.

If your sync task processes a large data volume and has a long runtime, you can shorten the runtime in the following ways:

1.  Increase the machine specifications in the resource group and adjust the number of concurrent tasks that a single machine can run.
    
2.  Increase the concurrency for a single sync task.
    

**Exclusive resource group for scheduling**

√

√

Not applicable.

**Exclusive resource group for DataService Studio**

√

×

Not applicable.

## Specification change procedure

The procedure for changing the specifications of an exclusive resource group for scheduling is similar to the procedure for an exclusive resource group for Data Integration. This topic uses an exclusive resource group for scheduling as an example.

1.  Go to the **Resource Group** page.
    
    1.  Log on to the [DataWorks console](https://workbench.data.aliyun.com/console).
        
    2.  In the navigation pane on the left, click **Resource Group** and select the destination region.
        
2.  **Change Specifications**.
    
    1.  On the **Exclusive Resource Group** tab, find the resource group for which the **Purpose** is **Data Scheduling**, hover over the ![More](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9131128561/p435674.png) icon in the **Actions** column, and click **Change Specifications**.
        
    2.  Make preparations.
        
        The Change Specifications page appears.
        
        1.  Confirm the impact of the operation.
            
            **Note**
            
            This operation affects your running tasks. Carefully review the potential impact and confirm that you understand it before you proceed.
            
            The change operation has the following effects.
            
            **Impact**
            
            **Description**
            
            Task termination
            
            The change operation needs to stop running tasks. DataWorks collects statistics on the number and types of tasks that are running on the resource group. You can view the tasks and confirm whether stopping them affects your business. You can also filter the tasks by owner or workspace.
            
            Alert triggering
            
            If an alert rule is configured for a terminated task, this operation may trigger an alert.
            
            Some tasks cannot be automatically rerun
            
            Task termination caused by the change operation may prevent some tasks from being automatically rerun. For example, a real-time sync task may not be able to resume from its offset. In this case, you must manually start or rerun the task and specify the sync offset. For more information, see [Configure real-time synchronization of incremental data from a single table](/help/en/dataworks/synchronize-data-in-a-single-table-configure-and-manage-a-real-time-data-sync-node#task-2473945).
            
            Task delay caused by downgrade
            
            If you perform a downgrade, tasks may be delayed.
            
        2.  Select whether to automatically rerun terminated tasks, and then select **I am aware of the impacts of the operations**.
            
            If you select Yes, DataWorks automatically reruns the terminated production tasks after the specification change is complete. If you select No, DataWorks does not automatically rerun these tasks.
            
            **Note**
            
            -   Production tasks include real-time sync tasks, real-time computing tasks, recurring schedule tasks, and data backfill tasks in the Operation Center for the production environment. They do not include temporary test tasks that run in DataStudio.
                
            -   The recurring schedule tasks that are stopped by the platform and the recurring schedule tasks that are automatically rerun after the change generate separate operation records on the Instance Operation Record page.
                
            
        3.  Click **Next**.
            
        
    3.  Set specifications.
        
        From the **New Specifications** drop-down list, select the new specifications. Select the **Terms of Service** checkbox and click **Pay Now**.
        
        **Note**
        
        You can upgrade or downgrade the specifications of a resource group. Different specifications support different numbers of tasks. For more information, see [Number of tasks supported by exclusive resource groups for scheduling with different specifications](/help/en/dataworks/exclusive-resource-groups-for-scheduling#concept-2036168) and [Number of tasks supported by exclusive resource groups for Data Integration with different specifications](/help/en/dataworks/exclusive-resource-groups-for-data-integration#concept-2036167).
        
        ![设置规格](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7696934271/p433148.png)
        
    4.  Pay for the order.
        
        Click **Go to Payment Page**. On the payment page, confirm the order summary and details. Select a payment method and click **Pay Now**. Complete the payment as prompted.![支付](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7696934271/p432667.png)
        
        **Note**
        
        If you cancel the payment, the specification change is also canceled and does not affect your tasks or the resource group. If the payment fails, go to the Order Center to cancel the order. This prevents issues with subsequent scaling or specification change operations for the resource group.
        
    5.  Apply the change.
        
        After the payment is complete, DataWorks terminates all tasks that are running on the resource group. Then, DataWorks changes the specifications of the resource group. After the change is complete, the terminated tasks in the production environment are rerun.![Perform upgrade/downgrade](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7696934271/p435696.png) The specification change takes some time to complete. If you accidentally close the current page, you can go to the **Resource Groups** page, hover over the ![More](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9131128561/p450421.png) icon in the **Actions** column for the resource group, and click **Change Specifications** to view the progress.
