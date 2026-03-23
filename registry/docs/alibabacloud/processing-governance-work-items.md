After you configure governance items, the system detects governance issues based on the configured governance items for the specified tenant. You can go to Data Asset Governance and choose **Overview** > **To-Do List** in the left-side navigation pane to view the number of issues pending for governance, the number of assets pending for governance, the governance dimensions, and the details of tasks or tables pending for governance. This helps you identify and handle governance issues at the earliest opportunity. This topic describes how to view and handle governance issues.

## Prerequisites

Governance items are configured. For more information, see [Configure governance items](/help/en/dataworks/user-guide/view-governance-notifications).

## Background information

-   Governance issues are detected based on the governance items that you configure for checking data within the current account.
    
-   The health score is calculated based on the governance items and the built-in health assessment model. A rating grade is provided based on your health score. For more information about health scores, see [Quantitative assessment: health scores](/help/en/dataworks/user-guide/data-asset-governance/#0e82faf43bd96).
    

Data Asset Governance allows you to view the governance issues for the specified tenant from the **Global**, **Workspace**, and **Individual** perspectives. The health score decreases when the number of governance issues increases. If the health score is low, a low rating grade is given. To achieve your data governance goals, you must handle issues at the earliest opportunity.

## **Permissions**

-   To view governance issues from the **Global** perspective, you must meet one of the following requirements:
    
    -   You have an Alibaba Cloud account.
        
    -   You have created a Resource Access Management (RAM) user and the `AliyunDataWorksfullAccess` policy is attached to the RAM user.
        
    -   You are a tenant administrator.
        
    -   You are a tenant-level data governance administrator.
        
-   To view governance issues from the **Workspace** perspective, you must meet one of the following requirements:
    
    -   You have an Alibaba Cloud account.
        
    -   You have created a RAM user and the `AliyunDataWorksfullAccess` policy is attached to the RAM user.
        
    -   You are a workspace administrator.
        
    -   You are a tenant administrator.
        
    -   You are a tenant-level data governance administrator.
        
    -   You are a workspace-level data governance administrator.
        
-   Regular users can view governance issues only from the **Individual** perspective.
    

## Usage notes

Data Asset Governance allows you to handle governance issues of only the MaxCompute, E-MapReduce (EMR), and Hologres data sources. For information about the types of data sources to which each governance item can apply, check the **Range** column on each tab of the [Knowledge](/help/en/dataworks/user-guide/system-settings) page.

**Note**

-   Before you can use a Hologres data source in Data Asset Governance, you must first collect metadata of Hologres in Data Map. For more information, see [Metadata collection](/help/en/dataworks/user-guide/metadata-collection/).
    
-   Hologres data sources are supported by Data Asset Governance only in the following regions: China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen).
    

## View and handle governance issues

1.  Go to the Data Asset Governance page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Governance** > **Data Asset Governance**. On the page that appears, click **Go to Data Asset Governance**.
    
2.  In the left-side navigation pane, choose **Overview > Workbench** to go to the **Workbench** page. In the top navigation bar, click **Global**, **Workspace**, or **Individual**. In the **To-Do List** section, you can view **To-Be-Governed Issues** and **Assets to Be Governed** within the current account or workspace.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6561725371/p867612.png)
    
3.  You can click **View More** to go to the **To-Do List** page.
    
    **Note**
    
    You can also choose **Overview** > **To-Do List** in the left-side navigation pane to go to the **To-Do List** page.
    
4.  View and handle governance issues.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6561725371/p867618.png)
    
    **Area**
    
    **Description**
    
    1
    
    You can select a perspective to view the governance issues in this area.
    
    -   **Global**: displays the governance issues of all DataWorks workspaces that belong to the specified tenant.
        
    -   **Workspace**: displays the governance issues of the workspace that belongs to the current account that is specified as a workspace administrator.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6561725371/p867619.png)
        
    -   **Individual**: displays the governance issues that belong to the current account. This means that the account is the owner of these governance issues.
        
    
    **Note**
    
    For more information about permissions that are required for selecting different perspectives, see [Permissions](#2f1b1c7074xtg).
    
    2
    
    This area displays the ranking list of workspaces and the number of governance issues that need to be handled from the **R&D**, **Storage**, **Computing**, **Quality**, and **Security** dimensions. After you select a governance dimension in the **Governance Dimension** area, the **Optimization Object** area (3) displays the objects that can be optimized.
    
    3
    
    This area displays the ranking list and number of objects that can be optimized based on the governance dimension that you select in the **Governance Dimension** area, such as **tasks**, **tables**, and **Data Service API**. After you select an object in the **Optimization Object** area, the **Issues** area (4) displays the issues of the object.
    
    4
    
    This area displays the ranking list and number of **issues** based on the optimization object that you select in the **Optimization Object** area. You can view and handle issues in the issue list (5).
    
    5
    
    You can filter issues by **workspace**, **data source type**, **table owner**, **operation status**, or **tag**. You can also enter an **asset name** or **ID** into the search box to search for issues.
    
    In addition, you can perform the following operations for data governance based on your business requirements:
    
    1.  View a table in a panoramic view.
        
        Find the table that you want to manage and click **Table 360** in the Actions column to view the information about the table, such as the basic information, governance issues, and task execution information, on the table details page.
        
    2.  Handle governance issues.
        
        Perform operations by clicking actions in the **Actions** column of a governance issue. You can select one of the following governance actions based on the issue details and the scenario that you specify:
        
        -   If a governance issue does not need to be handled, find the governance issue and choose **More > Add to Whitelist** in the **Actions** column to add the governance issue to a whitelist. This way, Data Asset Governance no longer detects this governance issue within the validity period of the whitelist. You can also select multiple governance issues and add them to the whitelist at a time. After you add governance issues to a whitelist, you can manage the whitelist on the Whitelist page. For more information, see [Add invalid governance issues to a whitelist](/help/en/dataworks/user-guide/invalid-question-whitelist).
            
        -   Find the governance issue that you want to manage and click **Create Plan** in the **Actions** column to undeploy tables or tasks that are no longer required. For more information, see [Graceful undeployment](/help/en/dataworks/user-guide/elegant-offline).
            
        -   Find the governance issue that you want to manage and click **Change Lifecycle** in the **Actions** column to change the lifecycle of the current node. After you change the lifecycle of the node, the node is executed based on the specified lifecycle.
            
    
    **Note**
    
    -   You can change the lifecycle of only governance issues in the Storage dimension.
        
    -   After you change the lifecycle of a node, the system deletes the data that does not fall within the specified lifecycle every day. For more information, see [Lifecycle](/help/en/maxcompute/product-overview/lifecycle#concept-zbq-yfb-5db).
        
    -   If a non-partitioned table does not fall within the specified lifecycle, the entire table is deleted.
        
    -   The lifecycle of a table starts from the time when the data in the table is last modified.
        
    -   To handle governance issues related to tables, you may need to modify the lifecycles of the tables. The operations supported by different governance dimensions vary. You can perform the related operations based on the instructions in the DataWorks console.
        
    -   The tags that are added to governance issues shown in this area are offline snapshots and cannot be modified. After you modify or add a new tag on the Tag Management page, snapshots are not updated in real time. Tag data takes effect on the next day. For more information, see [Manage tags](/help/en/dataworks/user-guide/label-management).
        
    -   Data Asset Governance allows you to handle governance issues of only the MaxCompute, E-MapReduce (EMR), and Hologres data sources. For information about the types of data sources to which each governance item can apply, check the **Range** column on each tab of the [Knowledge](/help/en/dataworks/user-guide/system-settings) page.
        
    

## What to do next

After you handle governance issues, you can choose **Overview** > **Workbench** in the left-side navigation pane to view the governance result.
