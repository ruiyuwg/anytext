After you create an E-MapReduce (EMR) Serverless StarRocks instance, you can change the number of compute units (CUs) for each frontend node (FE) in the instance if the current configurations of the instance cannot meet your business requirements.

## Prerequisites

-   The instance is in the **Running** state.
    
-   Your Alibaba Cloud account does not have unpaid orders.
    
    If such an unpaid order exists, you must pay for the order or cancel the order first.
    

## Upgrade the configurations of FEs

1.  Go to the details page of an EMR Serverless StarRocks instance.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the left-side navigation pane, choose **EMR Serverless** > **StarRocks**.
        
    3.  In the top navigation bar, select a region based on your business requirements.
        
    4.  On the Instances tab, find the EMR Serverless StarRocks instance that you want to manage and click its name.
        
2.  In the **FE Details** section of the **Instance Details** tab, click **Upgrade** to the right of the Specifications parameter.
    
3.  In the **Scale Up Instance** panel, configure the parameters that are described in the following table. If the value of the **Scale-up Precheck** parameter is **Check Passed**, read the terms of service and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Current FE Configuration**
    
    The configuration information of the FEs before the upgrade.
    
    **FE CU Quantity**
    
    You can select only a model whose specifications are higher than the current specifications. If the specifications are already the highest, you can choose to scale out the backend nodes (BEs).
    
    If the status of the instance changes from **Upgrading Configuration** to **Running** after the order is created, the configurations of the FEs are upgraded.
    

## **Downgrade the configurations of FEs**

1.  Go to the details page of an EMR Serverless StarRocks instance.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the left-side navigation pane, choose **EMR Serverless** > **StarRocks**.
        
    3.  In the top navigation bar, select a region based on your business requirements.
        
    4.  On the Instances tab, find the EMR Serverless StarRocks instance that you want to manage and click its name.
        
2.  In the **FE Details** section of the **Instance Details** tab, click **Downgrade** to the right of the Specifications parameter.
    
3.  In the **Scale Down Instance** panel, select the CU specifications that are lower than the current specifications. If the value of the **Scale-down Precheck** parameter is **Check Passed**, read the terms of service and click **OK**.
    
    If the status of the instance changes from **Downgrading Configuration** to **Running**, the configurations of the FEs are downgraded.
    

## **References**

-   If you want to increase or decrease the number of FEs in an instance, you can scale out or in the instance. For more information, see [Scale out or scale in a StarRocks instance](/help/en/emr/emr-serverless-starrocks/add-or-remove-be-nodes).
    
-   If you want to increase or decrease the number of BEs or compute nodes (CNs), you can scale out or scale in a warehouse. For more information, see [Scale out or in a warehouse](/help/en/emr/emr-serverless-starrocks/lift-and-allocation-calculation-group#d465de1151kco).
    
-   For more information about Enhanced SSDs (ESSDs), see [ESSDs](/help/en/ecs/user-guide/essds).
    
-   For more information about the billing methods and billing examples of a StarRocks instance, see the topics in the [Billing methods](/help/en/emr/emr-serverless-starrocks/product-overview/billing-methods/) directory.
    
-   If you have questions about the billing of your StarRocks instance, you can view your bills and billing details in the Expenses and Costs console. For more information, see [View bills](/help/en/emr/emr-serverless-starrocks/product-overview/view-bills).
