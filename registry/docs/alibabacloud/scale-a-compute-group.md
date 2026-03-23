If the number of nodes in a warehouse cannot meet your business requirements, you can increase or decrease the number of compute nodes (CNs) or backend nodes (BEs) to meet your business requirements.

## Prerequisites

-   The instance is in the **Running** state.
    
-   Your Alibaba Cloud account does not have unpaid scale-out, scale-in, or renewal orders.
    
    If such an unpaid order exists, you must pay for the order or cancel it first.
    

## **Precautions**

-   Services may be interrupted during scale-in or scale-out. Make sure that you have a retry mechanism.
    
-   During scale-in or scale-out, you cannot perform operations such as configuration upgrade or downgrade, configuration modification, and version upgrade.
    

## **Limits**

The number of nodes in the default warehouse cannot be reduced to zero. We recommend that you keep at least three nodes running in the default warehouse. The number of nodes in other warehouses can be reduced to zero.

## Scale out a warehouse

**Note**

If **Precheck Failed** is displayed for the **Scale-out Precheck** parameter, the inventory in the current region or zone is insufficient. In this case, reduce the number of nodes or contact the EMR Serverless StarRocks team to replenish the inventory.

1.  Go to the details page of an EMR Serverless StarRocks instance.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the left-side navigation pane, choose **EMR Serverless** > **StarRocks**.
        
    3.  In the top navigation bar, select a region based on your business requirements.
        
    4.  In the Instances section, find the desired StarRocks instance and click the name of the instance.
        
2.  On the **Warehouse** tab, click the name of a warehouse.
    
3.  On the **Warehouse** page, click **Scale Out** to the right of **Nodes**.
    
4.  In the **Scale Out** panel, specify the **number of nodes**. If the value of **Scale-out Precheck** is **Check Passed**, read the terms of service and click **OK**.
    
    If the warehouse status changes from **Scaling Out** to **Running**, the operation is successful.
    

## Scale in a warehouse

**Note**

If **Precheck Failed** is displayed for the **Scale-in Precheck** parameter, the total amount of data in the instance exceeds 70% of the storage space of the instance after scale-in. The storage usage of the instance after scale-in will be excessively high. In this case, you are allowed to scale in the warehouse only after you back up or migrate data.

1.  On the **Manage Warehouse** page, click **Scale In** to the right of **Permanent Nodes**.
    
2.  In the **Scale In** panel, specify the **number of nodes**. If the value of **Scale-in Precheck** is **Check Passed**, read the terms of service and click **OK**.
    
    If the warehouse status changes from **Scaling In** to **Running**, the operation is successful.
