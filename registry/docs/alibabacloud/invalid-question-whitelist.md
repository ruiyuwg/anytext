Data Asset Governance of DataWorks allows you to add governance issues that do not need to be handled to whitelists. You can manage all whitelists on the Whitelist page. If a governance issue is added to a whitelist, the governance issue is not detected by DataWorks within the effective period of the whitelist. This topic describes how to view and manage whitelists.

## Prerequisites

-   Governance items are configured. For more information, see [Configure governance items](/help/en/dataworks/user-guide/view-governance-notifications).
    
-   A governance issue is added to a whitelist. For more information, see [Handle governance issues](/help/en/dataworks/user-guide/processing-governance-work-items).
    

## View and manage whitelists

1.  Go to the Data Asset Governance page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Governance** > **Data Asset Governance**. On the page that appears, click **Go to Data Asset Governance**.
    
2.  In the left-side navigation pane, choose **Governance** > **Whitelist**. The **Whitelist** page appears.
    
3.  View and manage whitelists.
    
    On the Whitelist page, you can view whitelists of all workspaces or the whitelist of a specific workspace. You can also view the details about a whitelist or disable a whitelist.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2605146371/p867646.png)
    
    **Section**
    
    **Description**
    
    ①
    
    In this section, you can filter whitelists by configuring the **Workspace**, **Environment**, and **Applicant** conditions.
    
    You can also enter a **resource name** or a **workspace name** as a keyword in the Search field to search for a whitelist.
    
    **Note**
    
    -   Only Alibaba Cloud accounts or Resource Access Management (RAM) users who have the `AliyunDataWorksfullAccess` policy can view whitelists of all workspaces.
        
    -   **Workspace**: displays only the workspaces to which your account is added as a member.
        
    -   Fuzzy match is supported. You can enter a **resource name** or a **workspace name** as a keyword to search for whitelists whose names contain the keyword.
        
    
    ②
    
    In this section, you can view the basic information about a whitelist, including the **Whitelist ID**, **Resource Name**, **Workspace**, **Resource Type**, **Optimization Item**, and **Status**.
    
    You can also perform the following operations on a whitelist:
    
    -   View details about a whitelist: Find the whitelist that you want to manage and click **Details** in the **Actions** column.
        
    -   Disable a whitelist. Find the whitelist that you want to manage and click **Disable** in the **Actions** column. If you want the governance issues in the whitelist to be re-detected by DataWorks, you can disable the whitelist. After you disable the whitelist, the governance issues are detected in subsequent checks.
        
    
    **Note**
    
    A whitelist no longer takes effect after the whitelist expires. If you want to continue to use the current whitelist, you must go to the **Governance Issue** tab and configure the whitelist again. For more information, see [Handle governance issues](/help/en/dataworks/user-guide/processing-governance-work-items).
