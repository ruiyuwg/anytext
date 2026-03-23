You can reserve resources to accelerate important tasks by purchasing subscription accelerators. This topic describes how to create and manage accelerators in Platform for AI (PAI).

## Prerequisites

The first time you use Dataset Accelerator, make sure that you have the required permissions to use the service. For more information, see [Grant the permissions that are required to use Dataset Accelerator](/help/en/pai/user-guide/grant-the-permissions-that-are-required-to-use-dataset-accelerator#main-2304492).

## Create an accelerator

**Important**

You are charged for creating an accelerator. For more information, see [Billing of Dataset Accelerator](/help/en/pai/billing-of-dataset-accelerator#concept-2261909).

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **AI Acceleration** > **Dataset Accelerator**.
    
3.  On the **Accelerators** tab, click **Create Accelerator**.
    
4.  On the **AI Dataset Accelerator (Subscription)** page, configure the parameters.
    
    **Parameter**
    
    **Description**
    
    **Region**
    
    The region in which the accelerator resides based on on-screen instructions.
    
    **Resource Type**
    
    The types of data sources that you want to accelerate.
    
    **Capacity**
    
    The capacity of the accelerator. Valid values: 500 to 102400. Unit: GB.
    
    **Order-Time**
    
    Select a duration based on on-screen instructions.
    
5.  Click **Buy Now**.
    
    After you complete the payment, you can view the created accelerator on the Accelerators tab. You can also view information about accelerators on this tab, such as Total Accelerator Capacity, Number of Accelerators, and Number of Slots. ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5440467171/p737746.png)
    

## Manage accelerators

You can manage accelerators as described in the following sections. ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5440467171/p737749.png)

-   View basic information about an accelerator
    
    Click the name of the accelerator to go to the details page of the accelerator. On the details page, you can view the **Basic Information** and **Slots** of the accelerator.
    
-   Modify the configurations of an accelerator
    
    Click **Manage** in the **Actions** column of the accelerator to modify the configurations, such as the **Accelerator Name**, **Description**, and **Maximum Slots** parameters.
    
-   Expand the capacity of an accelerator
    
    If the capacity of the accelerator cannot meet your business requirements, click **Upgrade** in the **Actions** column.
    
    **Important**
    
    You are charged for the capacity expansion. For more information, see [Billing of Dataset Accelerator](/help/en/pai/billing-of-dataset-accelerator#concept-2261909).
    
-   Renew an accelerator
    
    If you want to continue using the accelerator after the subscription period expires, click **Renew** in the **Actions** column to renew the accelerator.
