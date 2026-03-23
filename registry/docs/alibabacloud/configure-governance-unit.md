A governance unit in DataWorks consists of one or more workspaces. You can view the health scores, governance items, and check events of all workspaces that belong to a governance unit. Members of the workspaces can view the management reports and governance reports of the governance unit to which the workspaces belong, and identify and handle governance issues in the governance unit at the earliest opportunity. This topic describes how to create and view a governance unit.

## Prerequisites

-   Check items are configured. For more information, see [Configure check items](/help/en/dataworks/user-guide/configuration-check-items).
    
-   Governance items are configured. For more information, see [Configure governance items](/help/en/dataworks/user-guide/view-governance-notifications).
    

## Background information

In most cases, workspaces of the same business type are included in one governance unit. A workspace can belong to multiple governance units. Members of a workspace can view the management reports and governance reports of the governance unit to which the workspace belongs, and identify and handle governance issues in the governance unit at the earliest opportunity.

## Permissions

-   To create, modify, or delete governance units, you must meet one of the following requirements:
    
    -   You have an Alibaba Cloud account.
        
    -   You have created a Resource Access Management (RAM) user and the `AliyunDataWorksFullAccess` policy is attached to the RAM user.
        
-   Regular users can view only the information about governance units.
    

## **Create a governance unit**

1.  Go to the Data Asset Governance page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Governance** > **Data Asset Governance**. On the page that appears, click **Go to Data Asset Governance**.
    
2.  In the left-side navigation pane, choose **System Settings** > **Governance Settings** > **Unit** to go to the **Governance Unit** page.
    
3.  Click **Create** and configure parameters to create a governance unit.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7718625371/p867507.png)
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    The name of the governance unit.
    
    **Description**
    
    The description of the governance unit.
    
    **Workspace**
    
    The workspaces that belong to the governance unit. You can select one or more DataWorks workspaces for which you want to collect statistics on health scores, governance issues, and check events. You can add workspaces of the same business type to the same governance unit to identify and troubleshoot similar issues.
    
    **Note**
    
    Only the workspaces in which you are assigned the Workspace Administrator role are displayed.
    
    **Contact**
    
    The owner of the governance unit. The owner manages their governance units in a centralized manner.
    
4.  After you configure the parameters, click **OK** to create the governance unit.
    

## **Manage governance units**

On the **Governance unit** page, you can search for a governance unit by specifying the **Name** and **Workspace** filter conditions. In the search result, you can view the **name**, **description**, **workspaces**, **owner**, **creator**, and **creation time** of the governance unit. You can also modify or delete a governance unit by clicking Modify or Delete in the **Actions** column of the governance unit.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7718625371/p867512.png)

**Note**

-   You can enter a keyword in the **Name** field to search governance units in fuzzy match mode. All governance units whose names contain the keyword are displayed in the search result.
    
-   For more information about the permissions required for creating, modifying, and deleting governance units, see [Permissions](#d31776a0f2gt7).
