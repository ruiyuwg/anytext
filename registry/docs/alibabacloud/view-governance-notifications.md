Governance items are used to manage and govern data after a file is deployed. Data governance engineers can view the governance items of a project from the **global**, **individual**, or **workspace** dimensions. This way, the engineers can quickly identify and resolve issues and help achieve the data governance objective of the team. This topic describes how to view and configure governance items.

## Background information

By default, data asset governance generates initial governance items. You can enable or disable governance items for different workspaces. If you disable a governance item for a workspace, Data Asset Governance no longer detects governance issues related to the item in the workspace.

## Limits

-   Governance items in Data Asset Governance are included in the calculation of health scores.
    
-   Custom governance items are not supported.
    

## **Required permissions**

-   To enable or disable governance items, you must have one of the following permissions:
    
    -   An Alibaba Cloud account
        
    -   A Resource Access Management (RAM) user who has the `AliyunDataWorksFullAccess` policy
        
    -   A tenant-level data governance administrator
        
    -   A workspace-level data governance administrator
        
-   Other users can only view the governance items of the DataWorks workspace to which the users belong.
    

## View and configure governance items

1.  Go to the Data Asset Governance page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Governance** > **Data Asset Governance**. On the page that appears, click **Go to Data Asset Governance**.
    
2.  In the left-side navigation pane, choose **System Settings** > **Governance Settings** > **Issues**. The **Configure Governance Item** page appears.
    
3.  On the **Configure Governance Item** page, you can view the information about governance items, enable governance items, and disable governance items on the **R&D**, **Storage**, **Computing**, **Quality**, and **Security** tabs.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9897625371/p867482.png)
    
    **Note**
    
    -   Data Asset Governance supports fuzzy match. You can enter keywords in the **Name** field to search for governance items whose names contain the keywords.
        
    -   To learn more about the troubleshooting solutions, click the solution in the **Associated Handling Guide** column.
        
    
4.  Select a workspace from the **Workspace** drop-down list above the governance item list, click Edit, and then enable or disable a governance item, as shown in Section ①. You can also enable or disable multiple governance items at the same time, as shown in Sections ② and ③.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9897625371/p867486.png)
    
    **Note**
    
    In the upper part of the **Configure Governance Item** page, you can select a workspace from the **Workspace** drop-down list and enable or disable governance items for the workspace. After you disable a governance item, the system no longer detects governance issues that are related to the governance item for the workspace. In addition, governance issues related to the disabled governance item are not displayed on the **Governance Issue** tab. You can choose **Overview** > **To-Do List** in the left-side navigation pane to go to the tab.
