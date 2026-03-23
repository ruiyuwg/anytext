DataWorks provides a data access control feature to manage permissions for data in the MaxCompute compute engine. You can use this feature to request, approve, and audit permissions, and to view permission request and approval records. This topic describes how to manage access permissions for MaxCompute data.

## Background

To access table data, resources, and functions from a MaxCompute data source in the production environment of a DataWorks standard mode workspace, you must request the corresponding permissions. This ensures the secure management and control of production assets.

This topic applies to scenarios where you need to access table data, resources, and functions from a MaxCompute data source in the production environment.

**Note**

-   In a standard mode workspace, for a project in the development environment, DataWorks adds members to the MaxCompute project role by default. This grants members read permissions on all data. For more information, see [MaxCompute engine resource access and permissions in different workspace modes](/help/en/dataworks/user-guide/data-access-behaviors-in-and-access-permissions-on-maxcompute-compute-engine-instances-of-workspaces-in-different-modes).
    
-   In a standard mode workspace, for a project in the production environment, DataWorks does not add members to the MaxCompute project role by default.
    
-   After a user requests permissions on MaxCompute table data, resources, or functions, the permissions can be used only after an approver grants the request.
    

## Prerequisites

-   You have [bound a MaxCompute computing resource](/help/en/dataworks/user-guide/create-a-maxcompute-data-source).
    
-   You are familiar with the [details of MaxCompute data permission control](/help/en/dataworks/user-guide/manage-permissions-on-data-in-a-maxcompute-compute-engine-instance#task-2256464).
    
-   You understand the [differences between basic mode and standard mode](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode#concept-z2j-nwp-r2b) for DataWorks workspaces.
    

## Data access permission control flow

### **Use cases**

A user in the development environment of a workspace needs to access tables, resources, or functions in the production environment of the same workspace.

![Scenario 1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9464518661/p373552.png)

If a RAM user has not been granted access to the compute engine in the production environment, the user cannot, by default, directly operate on production tables in the Data Development interface. If the RAM user needs permission to access production tables, you can request it in [Security Center](/help/en/dataworks/user-guide/security-center-1/). After the request is approved, the user can perform the relevant operations on the tables in the Data Development interface.

A user in the development or production environment of a workspace needs to access tables, resources, or functions in the development or production environment of another workspace.

![场景2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8464518661/p373551.png)

By default, a RAM user who is not a member of a workspace cannot access development or production tables across projects from the Data Development interface. To perform operations on development or production tables across projects, the RAM user must request the required permissions in [Security Center](/help/en/dataworks/user-guide/security-center-1/). After the request is approved, the user can perform the required operations on the tables in the Data Development interface.

### **Permission request flow**

The **Data Access Control** feature enables you to perform operations such as permission requests, approvals, and audits, as well as view records of these requests and approvals.

During the development process, if a RAM user lacks the necessary table permissions, they can apply for them via the **Permission Application** interface. Once the approver (such as a workspace administrator or table owner) approves the request on the **Permission Application Processing** page, the permissions will be granted.

**Note**

DataWorks **Security Center** provides a default approval flow for permission requests. You can also customize the approval flow in [Approval Center](/help/en/dataworks/approval-center-overview#concept-2095438). When you request permissions for fields in a MaxCompute table, DataWorks determines the required approval flow based on the requested fields.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5163545671/CAEQTxiBgMDo7PKd2BkiIGY3ZDhkMjYyYzIzZTRhNDhiNjMwYmRjMGI4ZTAzZjc04535850_20240718131728.165.svg)

**Note**

Custom approval and permission audit management are not supported for resource and function permission requests.

-   **Requester**: A requester can request permissions on MaxCompute tables on the [Security Center](/help/en/dataworks/user-guide/security-center-1/) page. After the request is approved, the user can view the approval result on the [Permission Request Records](#6a7d3b4ac5cw2) page and confirm that the permissions are effective.
    
-   **Approver**: After a request is submitted, an approver must view the request details on the [Permission Approval](#section-qnn-lpk-0bf) page and decide whether to approve or deny the request based on its content. For processed requests, the approver can view the approval results for tables, resources, and functions for the current Alibaba Cloud account on the [Permission Approval Records](#section-eaj-dq0-fv2) page.
    
-   **Permission Audit**: A workspace administrator or an Alibaba Cloud account owner can manage the table permissions of workspace members on the [Permission Audit](#8b6341c5487eo) page. This includes revoking permissions from a member.
    

## Request permissions

On the Data Access Control page, configure the parameters in the **Application Content** and **Application Information** sections to request permissions.

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). Switch to the destination region. In the navigation pane on the left, choose **Data Governance** > **Security Center**. On the page that appears, click **Go to Security Center**.
    
2.  In the navigation pane on the left, choose **Data Platform Security** > **Data Access Control**.
    
3.  Click the **Permission Application** tab to request permissions for a MaxCompute table, resource, or function.
    
    ### Request permissions on tables
    
    After you add a destination table, you can request **Table-level Permissions** or **Column-level Permissions**.
    
    **Configuration item**
    
    **Description**
    
    **Application Content**
    
    **Data Source Type**
    
    Select MaxCompute.
    
    **Application Type**
    
    `Table`
    
    **Workspace**
    
    Select the workspace where the `table` is located.
    
    **MaxCompute Project**
    
    The MaxCompute project bound to the workspace where the `table` is located.
    
    **Schema**
    
    The schema where the table is located.
    
    **Tables to Be Added**
    
    **Request table-level permissions**
    
    You can request the following table-level permissions: `Select`, `Update`**,** `Download`**,** `Describe`**,** `Alter`**, and** `Drop`.
    
    **Request column-level permissions**
    
    You can request the following column-level permissions: `Select`, `Update`**, and** `Download`.
    
    **Note**
    
    -   If `labelsecurity` is not enabled for a MaxCompute project and you have been granted table-level `Select` and `Update` permissions, new columns added to the table will automatically inherit the `Select` and `Update` permissions.
        
    -   If `labelsecurity` is enabled for the MaxCompute project, you must request field permissions. This is because new fields do not automatically inherit table-level permissions.
        
    
    ### **Request permissions on resources**
    
    **Configuration item**
    
    **Description**
    
    **Application Content**
    
    **Data Source Type**
    
    Select MaxCompute.
    
    **Application Type**
    
    `Resource`
    
    **Workspace**
    
    Select the workspace where the resource is located.
    
    **MaxCompute Project**
    
    The MaxCompute project bound to the workspace where the resource is located.
    
    **Resource Name**
    
    The resource for which you want to request permissions.
    
    ### **Request permissions on functions**
    
    **Configuration item**
    
    **Description**
    
    **Application Content**
    
    **Data Source Type**
    
    Select MaxCompute.
    
    **Application Type**
    
    `Function`
    
    **Workspace**
    
    Select the workspace where the function is located.
    
    **MaxCompute Project**
    
    The MaxCompute project bound to the workspace where the function is located.
    
    **Function Name**
    
    The name of the function for which you want to request permissions.
    
4.  You can configure the **Application Information**.
    
    **Configuration item**
    
    **Description**
    
    **Application Information**
    
    **User**
    
    Select the user for whom you want to request permissions on the destination resource.
    
    -   **Current login account**: Request permissions on the destination table for the Alibaba Cloud account that is used to log on to the DataWorks workspace.
        
    -   **Account Used for Scheduling**: Request permissions on the destination table for the RAM user that is set as the scheduling access identity.
        
    -   **Apply on Behalf of Others**: Request permissions on the destination table for another Alibaba Cloud account. If you select this option, you must configure the **Username** parameter.
        
    
    **Application duration**
    
    Specify a validity period for the permissions. After the validity period ends, the permissions are automatically revoked.
    
    **Note**
    
    Before you use this feature, you must enable policy authorization for the MaxCompute project where the table is located. For more information, see [Details of MaxCompute data permission control](/help/en/dataworks/user-guide/manage-permissions-on-data-in-a-maxcompute-compute-engine-instance). For more information about MaxCompute policies, see [Policy-based access control](/help/en/maxcompute/user-guide/policy-based-access-control-1#concept-2478724).
    
    **Reason for application**
    
    Briefly describe the reason for the request to help the approver understand.
    
5.  Click **Apply for permission** to submit a request.
    
    You can go to the **Permission Application Records** tab to view the record of the current request and its approval details.
    

## Approve permissions

After a **requester** submits a permission request, an **approver** can process it on the **Permission Approval** tab.

1.  On the **Permission Application Processing** page, you can filter requests that require your approval by criteria such as **Application account number**, **Application time**, **Workspace**, **Project name**, and **Object name**.![审批申请](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0014347471/p261226.png)
    
    **Note**
    
    If a permission request is submitted for multiple tables that belong to different owners, the system splits the request into multiple sub-requests based on the table owners.
    
2.  Click **Approval** in the **Operation** column of the target request. In the dialog box, you can view details such as the **Request Details** and **Approval Record**, and perform the following operations:
    
    -   Based on the request details and your requirements, approve or deny the request by entering your **Comments** and selecting **Approve** or **Deny**.
        
    -   You can modify the **Application Content** and **Expiration Time** of the request.
        
    
    **Note**
    
    -   **Unprocessed Steps**: Displays all approvers who have permission to approve the request.
        
    -   **Processed Steps**: Displays only the approver who processed the request.
        
    
    In addition to approving requests individually in the details dialog box, you can also select multiple requests on the **Permission Application Processing** page, click **Batch Approve** or **Batch Deny**, and enter your **Comments**.
    

## **View permission request records**

On the **Permission Application Records** page, you can filter the request records for your Alibaba Cloud account by criteria such as **Approval status**, **Application Time**, and **Workspace**.

You can also click **View details** in the **Operation** column to view the details of a request. For requests with an **Approval status** of **In approval**, you can continue the approval process.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5163545671/p955928.png)

## **View permission approval records**

On the **Permission Application Processing Records** page, you can filter the approval records for the current Alibaba Cloud account by **Application account number**, **Approval Results**, and **Workspace**.

To view the details of a request, you can also click **View details** in the **Operation** column.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5163545671/p955936.png)

## **Permission audit**

After a permission request is approved, you can go to the Permission Audit tab. On this tab, you can use filters to find and audit a target resource, view its **authorization information**, and click **Revoke permissions** or **View permissions** in the Actions column.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5163545671/p956021.png)
