If the configurations of a warehouse cannot meet your business requirements, you can increase or decrease the number of compute units (CUs) in each compute node (CN) or backend node (BE) to meet your business requirements.

## Prerequisites

-   The instance is in the **Running** state.
    
-   Your Alibaba Cloud account does not have unpaid orders.
    
    If such an unpaid order exists, you must pay for the order or cancel the order first.
    

## **Upgrade a warehouse**

1.  Go to the details page of an EMR Serverless StarRocks instance.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the left-side navigation pane, choose **EMR Serverless** > **StarRocks**.
        
    3.  In the top navigation bar, select a region based on your business requirements.
        
    4.  In the Instances section, find the desired StarRocks instance and click the name of the instance.
        
2.  Click the **Warehouse** tab.
    
3.  On the **Warehouse** tab, click the name of a warehouse.
    
4.  On the **Warehouse** tab, click **Upgrade** to the right of **BE Specifications** or **CN Specifications**.
    
5.  In the **Upgrade Configuration** panel, configure the parameters that are described in the following table.
    
    **Parameter**
    
    **Description**
    
    **BE CU Quantity or CN CU Quantity**
    
    Only higher CU specifications can be selected. If the current specifications are the highest specifications, you can scale out the warehouse by adding BEs or CNs to meet your business growth requirements.
    
    **Restart Mode**
    
    > This parameter is available only for StarRocks shared-data instances.
    
    The restart mode. Valid values:
    
    -   **Rolling Restart**: All compute nodes (CNs) in a StarRocks instance are restarted in sequence. This ensures that specific nodes are running to maintain service availability. This is the default value. This mode applies to scenarios in which high service continuity is required. This mode can effectively reduce the impact on your business.
        
    -   **Quick Restart**: All CNs are restarted at a time, and the restart speed is fast. This mode applies to scenarios in which a restart operation needs to be completed as soon as possible. If you select this mode, your service may be interrupted. We recommend that you change the warehouse specifications during off-peak hours.
        
        **Note**
        
        Quick restart is supported only if the minor version of a StarRocks shared-data instance is 1.6.10 or later.
        
    
6.  If the value of **Scale-up Precheck** is **Check Passed**, read the terms of service, select Terms of Service, and then click **OK**.
    
    If the warehouse status changes from **Upgrading Configuration** to **Running**, the operation is successful.
    

## **Downgrade a warehouse**

1.  On the **Warehouse** tab, click **Downgrade** to the right of **BE Specifications** or **CN Specifications**.
    
2.  In the **Downgrade Configuration** panel, configure the parameters that are described in the following table.
    
    **Parameter**
    
    **Description**
    
    **BE CU Quantity or CN CU Quantity**
    
    Only lower CU specifications can be selected.
    
    **Restart Mode**
    
    > This parameter is available only for StarRocks shared-data instances.
    
    The restart mode. Valid values:
    
    -   **Rolling Restart**: All compute nodes (CNs) in a StarRocks instance are restarted in sequence. This ensures that specific nodes are running to maintain service availability. This is the default value. This mode applies to scenarios in which high service continuity is required. This mode can effectively reduce the impact on your business.
        
    -   **Quick Restart**: All CNs are restarted at a time, and the restart speed is fast. This mode applies to scenarios in which a restart operation needs to be completed as soon as possible. If you select this mode, your service may be interrupted. We recommend that you change the warehouse specifications during off-peak hours.
        
        **Note**
        
        Quick restart is supported only if the minor version of a StarRocks shared-data instance is 1.6.10 or later.
        
    
3.  If the value of **Scale-down Precheck** is **Check Passed**, read the terms of service, select **Terms of Service**, and then click **OK**.
    
    If the warehouse status changes from **Downgrading Configuration** to **Running**, the operation is successful.
