After creating an instance, you can scale out by increasing the number of Frontend (FE) nodes to improve system performance or handle higher business traffic. You can also scale in by reducing the number of FE nodes to optimize resource utilization and lower operating costs. You can flexibly adjust the number of nodes based on your business needs to ensure efficient system operation.

## Prerequisites

-   The instance is in the **Running** state.
    
-   Your Alibaba Cloud account does not have unpaid scale-out, scale-in, or renewal orders.
    
    If such an unpaid order exists, you must pay for the order or cancel it first.
    

## **Precautions**

-   Services may be interrupted during scale-in or scale-out. Make sure that you have a retry mechanism.
    
-   During scale-in or scale-out, you cannot perform operations such as configuration upgrade or downgrade, configuration modification, and version upgrade.
    

## Add FEs to a StarRocks instance

**Note**

-   You can add up to 11 FE nodes (FEs).
    
-   If the scale-out precheck fails, resources are insufficient in the current region or zone. In this case, you can reduce the number of FEs that you want to add to the instance or contact the EMR Serverless StarRocks team to provide sufficient resources.
    

1.  Go to the details page of an EMR Serverless StarRocks instance.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the left-side navigation pane, choose **EMR Serverless** > **StarRocks**.
        
    3.  In the top navigation bar, select a region based on your business requirements.
        
    4.  In the Instances section, find the desired StarRocks instance and click the name of the instance.
        
2.  In the **FE Details** section of the **Instance Details** tab, click **Scale Out** to the right of the Number of Nodes parameter.
    
3.  In the **Scale Out** panel, configure the **FE Number of Nodes** parameter. If the **Scale-out Precheck** shows **Check Passed**, click **OK**.
    
    ![截屏2025-06-11 11](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2238079471/p966454.png)
    
    If the status of the instance changes from **Scaling Out** to **Running**, FEs are added to the instance.
    

## Remove FEs from a StarRocks instance

**Note**

-   You can scale in only when the number of FE nodes is greater than 3.
    
-   If the scale-in precheck fails, it means that the current total data volume exceeds 70% of the storage space available after scaling in. In this case, scaling in is not allowed. Back up or migrate data before attempting scale-in again.
    

1.  In the **FE Details** section of the **Instance Details** tab, click **Scale In**.
    
2.  In the **Scale In** panel, configure the **FE Number of Nodes** parameter. If the **Scale-in Precheck** shows **Check Passed**, click **OK**.
    
    If the instance status changes from **Scaling In** to **Running**, the FE nodes have been successfully removed.
    

## **References**

-   If you want to modify the configurations of FEs in a StarRocks instance, you can perform the configuration upgrade or downgrade operation on the instance. For more information, see [Upgrade or downgrade the configurations of an instance](/help/en/emr/emr-serverless-starrocks/upgrade-or-downgrade-node-configurations).
    
-   If you want to increase or decrease the number of backend nodes (BEs) or compute nodes (CNs), you can scale out or scale in a warehouse. For more information, see [Scale out or in a warehouse](/help/en/emr/emr-serverless-starrocks/scale-a-compute-group#6705c25fc5fpx).
    
-   For more information about the billing methods and billing examples of a StarRocks instance, see the topics in the [Billing methods](/help/en/emr/emr-serverless-starrocks/product-overview/billing-methods/) directory.
    
-   If you have questions about the billing of your StarRocks instance, you can view your bills and billing details in the Expenses and Costs console. For more information, see [View bills](/help/en/emr/emr-serverless-starrocks/product-overview/view-bills).
