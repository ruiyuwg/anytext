Platform for AI (PAI) allows you to associate fully managed Flink resources with PAI workspaces and use the resources for the large-scale distributed training of models. This topic describes how to purchase fully managed Flink resources and use the resources to train models.

## **Fully-managed Flink resources**

Alibaba Cloud Realtime Compute for Apache Flink is an end-to-end real-time big data analytics platform that is built on Apache Flink, and can process data with sub-second response times. For more information, see [What is Alibaba Cloud Realtime Compute for Apache Flink?](/help/en/flink/realtime-flink/product-overview/what-is-alibaba-cloud-realtime-compute-for-apache-flink)

## Prerequisites

Before you perform the operations described in this topic, make sure that the following requirements are met:

-   You have an Alibaba Cloud account. If you do not have an Alibaba Cloud account, create one first.
    

## **Account and permission requirements**

-   Alibaba Cloud account (recommended): You can use an Alibaba Cloud account to complete all operations without additional authorization.
    
-   RAM user:
    
    -   If you want to use a RAM user to purchase fully managed Flink resources, you must grant the `**AliyunStreamFullAccess**` permissions to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/flink/realtime-flink/user-guide/ram-based-authorization).
        
    -   If you want to submit a task to Flink, you must assign the owner role to the RAM user in the namespace in the Flink console. For more information, see [Authorize an account to perform operations in a namespace](/help/en/flink/realtime-flink/user-guide/grant-permissions-for-the-development-console).
        
    -   If you want to use a RAM user to associate fully managed Flink resources with a workspace, you must assign the administrator role to the RAM user in the workspace. If you want to use a RAM user to perform model training by using fully managed Flink resources in Machine Learning Designer, you must assign the algorithm developer role to the RAM user in the workspace. For more information, see [Manage members of a workspace](/help/en/pai/manage-the-members-of-a-workspace#task-2121366).
        

## Purchase fully managed Flink resources

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **AI Computing Resources** > **Resource Quota**. On the **Resource Quota** page, click **Fully Managed Flink Resources**.
    
3.  **(Optional)** On the **Fully Managed Flink Resources** tab, click **Activate**.
    
    **Note**
    
    The first time you use fully managed Flink resources, you need to perform this operation and purchase fully managed Flink resources. For more information, see [Activate fully managed Flink](/help/en/flink/realtime-flink/getting-started/activate-fully-managed-flink#task-2506778).
    
    If you have activated Realtime Compute for Apache Flink and want to purchase more fully managed Flink resources, go to the next step.
    
4.  On the Fully Managed Flink tab, click **Resources**.
    
5.  In the **Realtime Compute for Apache Flink console**, click **Purchase**. For more information about how to purchase fully managed Flink resources, see [Activate fully managed Flink](/help/en/flink/realtime-flink/getting-started/activate-fully-managed-flink#task-2506778).
    
    After you purchase fully managed Flink resources, you can view the resources and other information on the Fully Managed Flink Resources tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8407062571/p985399.png)
    

## Associate fully managed Flink resources with a workspace

If you want to use fully managed Flink resources for computing in a workspace, you need to associate the resources with the workspace by using one of the following methods:

-   Add a resource group to a workspace when you create the workspace. For more information, see [Create and manage a workspace](/help/en/pai/user-guide/create-and-manage-workspaces#task-2121913).
    
-   Associate fully managed Flink resources with an existing workspace by performing the following steps:
    
    1.  Log on to the [PAI](https://pai.console.alibabacloud.com/) console.
        
    2.  In the left-side navigation pane, click **Workspaces**. On the Workspace list page, find the workspace with which you want to associate fully managed Flink resources and click the workspace name.
        
    3.  On the right side of the workspace details page, select **Configure Workspace** > **Configure Computing Resource**, and on the **Fully Managed Flink Resources** tab, associate a fully managed Flink resource. For more information, see [Manage the computing resources of a workspace](/help/en/pai/manage-workspaces#title-i1p-a57-azh).
        

## Train models in Machine Learning Designer by using fully managed Flink resources

1.  Go to the workspace that is associated with fully managed Flink resources. Create a blank pipeline on the Visualized Modeling (Designer) page. For more information, see [Create a custom pipeline](/help/en/pai/user-guide/create-a-custom-pipeline#task722).
    
2.  You can drag the following components that can run on fully managed Flink resources to the canvas.
    
    -   All components of the Alink framework, except those in the Beta Algorithm folder. Each Alink component is marked by a purple dot. ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8795365071/p737103.png)
        
    -   Custom algorithm components. For more information, see [PyAlink Script](/help/en/pai/user-guide/pyalink-script#task-2203973).
        
    
3.  On the **Pipeline properties** tab in the right-side pane, set the **Default Resource Preferred by Alink or FlinkML** parameter to **Flink**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8795365071/p737107.png)
    
    **Important**
    
    If you want to run Alink components in a group, you must set the Default Resource Type Preferred by Alink parameter to Flink. Otherwise, resources of the default type for the Alink group are used. For more information about how to set the execution resource type for Alink groups, see [Alink components](/help/en/pai/user-guide/alink-components#concept-2104532).
    
4.  Run components by using one of the following methods:
    
    -   Run a single component that depends on fully managed Flink resources. For example, you can run a PyAlink Script component. For more information, see [PyAlink Script](/help/en/pai/user-guide/pyalink-script#task-2203973).
        
    -   Concatenate and run components that depend on fully managed Flink resources and components that depend on resources of other types. For example, you can create a Factorization Machine (FM) recommendation model that includes the FM Train, FM Prediction, and Binary Classification Evaluation components. The FM Train and FM Prediction components depend on fully managed Flink resources. The Binary Classification Evaluation component depends on MaxCompute resources. For more information, see [Create an FM recommendation model based on the Alink framework](/help/en/pai/use-cases/create-an-fm-recommendation-model-based-on-the-alink-framework#task1519).
        
    -   Run multiple components that depend on fully managed Flink resources at a time. For more information, see [Alink components](/help/en/pai/user-guide/alink-components#concept-2104532).
        
    
5.  After you run a component, right-click the component on the canvas and select **View Log** to view the logs of the component.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8795365071/p737108.png)On the Log tab, you can also click a Ververica Platform (VVP) link in the log content to view the computing details of the component.
