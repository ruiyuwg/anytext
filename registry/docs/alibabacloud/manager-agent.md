Manager Agent is an agent that is used by E-MapReduce (EMR) StarRocks Manager to connect to a StarRocks instance. By default, Manager Agent is deployed in frontend nodes (FEs). If the loads on your FEs are high or you have high requirements on the stability of StarRocks Manager, you can activate Manager Agent separately.

## **Precautions**

-   The activation operation is irreversible.
    
-   You are charged for Manager Agent resources based on compute units (CUs). For more information, see [Billable items](/help/en/emr/emr-serverless-starrocks/product-overview/billable-items).
    
-   When you activate Manager Agent, StarRocks Manager is temporarily unavailable. StarRocks Manager can work as expected after the activation.
    

## Activate Manager Agent

## Enable when creating an instance

1.  Go to the EMR Serverless StarRocks instance list page.
    
    1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the navigation pane on the left, choose **EMR Serverless** > **StarRocks**.
        
    3.  In the top menu bar, select the required region.
        
2.  On the **Instance List** page, click **Create Instance**.
    
3.  On the **E-MapReduce Serverless StarRocks** page, in the **Advanced Settings** section, turn on the **Activate Manager Agent** switch.
    
    Select the compute unit (CU) specifications. For more information, see [Create an instance](/help/en/emr/emr-serverless-starrocks/create-an-instance).
    

## Enable for an existing instance

1.  Go to the details page of the EMR Serverless StarRocks instance.
    
    1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the navigation pane on the left, choose **EMR Serverless** > **StarRocks**.
        
    3.  In the top menu bar, select the desired region.
        
    4.  Click the name of the target instance.
        
2.  On the **Instance Details** page, in the **Manager Agent** section, click **Activate**.
    
3.  In the **Activate Manager Agent** dialog box, set the **Specifications**, select the **Terms of Service** check box, and then click **OK**.
    
4.  In the confirmation dialog box that appears, click **OK**.
    
    **Important**
    
    This operation is irreversible. Proceed with caution.
    

## Upgrade the configurations of Manager Agent

1.  In the **Manager Agent** section of the **Instance Details** tab, click **Upgrade**.
    
2.  In the Upgrade Configuration panel, configure the **Specifications** parameter, read the **terms of service**, and then click **OK**.
