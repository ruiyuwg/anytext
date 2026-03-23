Check items are used for governance before you deploy files. They check for compliance issues and violations of data development constraints. If the system finds a violation, it generates a problem event that blocks the deployment process. You can resolve the exposed issue based on the event to ensure that the process can run as expected. This topic describes how to view and configure check items.

## **Prerequisites**

Optional: Create an extension. If the default check items provided by data governance do not meet your requirements, you can register a custom extension as a new check item. This adds the custom extension to the check scope. For more information, see [Develop and deploy an extension: Function Compute](/help/en/dataworks/user-guide/develop-and-deploy-a-custom-extension).

## **Background information**

Data governance automatically generates a list of initial check items. You can enable or disable each check item as needed. If the default check items do not meet your requirements, you can register a custom extension as a new check item.

Data governance uses check items and governance items to detect issues that require administration during the data development process. The check timing and content differ between check items and governance items.

-   Check items: Used for governance and control before a task is deployed. They primarily check for compliance before deployment, block deployments that have issues, and prevent the introduction of new governance issues.
    
-   Governance items: Used for analysis after a task is deployed. They detect existing issues in the system that need to be optimized to improve the overall health of the data.
    

**Note**

DataWorks workspaces come in standard mode and basic mode. The task development process differs between the two modes. For more information, see [Workspace mode differences](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6086206671/CAEQUBiBgICLiOqY2RkiIDI1NzdkYjcwNzliZjRjMmJiMzIyNWYwYWVhNjI0ZjZk4742201_20241101170415.493.svg)

This topic describes how to use check items:

-   [Register a check item (Optional)](#defc0c24e6tg4)
    
-   [Enable a check item](#1502f01543l0q)
    
-   [Configure a check item](#608ae8e79e973)
    
-   [Perform batch operations on check items](#c55ecfe41d1hm)
    
-   [Example of a check item trigger](#9bc45f3156cji)
    

## **Permission management**

-   To register, enable, or disable check items, you must have one of the following permissions:
    
    -   Alibaba Cloud account
        
    -   Workspace member with `AliyunDataWorksFullAccess` permissions
        
    -   Workspace administrator
        
    -   Workspace member with tenant-level data governance administrator permissions
        
    -   Workspace-level data governance administrator
        
-   Regular users can only view the list of check items in their DataWorks workspace.
    

## **Go to the check item configuration page**

1.  Go to the Data Asset Governance page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Governance** > **Data Asset Governance**. On the page that appears, click **Go to Data Asset Governance**.
    
2.  In the navigation pane on the left, click **System Settings** > **Governance Settings** > **Check Item** to go to the **Configure Check Item** page.
    

## **Register a check item (Optional)**

If the initial check items do not meet your needs, you can click **Register Check Item** to register a check item using a custom extension. This adds the check item to the detection scope. After registration, you must enable the check item in the check item list for it to take effect.

**Note**

The initial check items related to code logic currently apply only to MaxCompute SQL nodes. This means that when you enable this type of check item, only MaxCompute SQL nodes trigger the check. To check more content, you can register check items as needed.

## **Enable a check item**

After a check item is enabled, data governance checks procedures such as task execution and deployment. A failed check can block the deployment process, intercept existing problems, and prevent the introduction of new governance issues. You can enable specific check items for a workspace as needed.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1265807471/p867444.png)

**Note**

Check items are workspace-specific. When you disable a check item, it becomes inactive only for the currently selected workspace.

## **Configure a check item**

On the **Check Item Settings** page, you can view information about the check items for a specified workspace under the current account. The information is organized by dimensions such as development, storage, computing, quality, and security. You can also configure the status and parameters for each check item.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1265807471/p867449.png)

The main configurations are described as follows:

-   Set effective check procedures: Configure whether to check files before procedures such as code execution and deployment. A failed check blocks the subsequent process.
    
-   Set check item parameters: Configure parameters such as access restrictions and maximum running costs. The available parameters vary by check item.
    

## **Perform batch operations on check items**

To enable or disable multiple check items at a time, you can perform batch operations as shown in the following figure.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1265807471/p867453.png)

## **Example of a check item trigger effect**

If a check item is enabled, a check is triggered in DataStudio when you click **Run** or **Deploy**. The system performs the check based on the defined logic of the check item. You can go to the **Operation Check** interface to view the file check status and click the status to view the validation details. If the check fails, a blocking problem event is generated, which stops the process.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1265807471/p867464.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6084754371/p867468.png)

**Note**

-   The interface shown in this example is the new version of DataStudio. To use this version, select **Use Data Studio (New Version)** when you create a workspace. For more information, see [Resource management](/help/en/dataworks/user-guide/create-and-manage-compute-resources/).
    
-   The operations in the old version of DataStudio are similar to those in this example.
