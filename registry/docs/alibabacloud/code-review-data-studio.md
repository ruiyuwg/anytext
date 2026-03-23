Code Review improves code quality for production tasks through a manual review process, ensuring that code published to the Production Environment meets quality standards. You can enable Mandatory Code Review to require that tasks pass a review before being published.

## **How it works**

In DataWorks, you can enable Mandatory Code Review to prevent task failures caused by non-compliant code and to avoid wasting computing resources. When this feature is enabled, reviewers must review and approve the code before it can be published.

-   **If Mandatory Code Review is disabled**: You can still manually submit a node for review. The node can be published regardless of the review outcome.
    
-   **If Mandatory Code Review is enabled**: When you submit a node, you must select a qualified reviewer to review the code.
    
    -   If the review is approved, you can publish the node.
        
    -   If the review is rejected, you must modify the code based on the feedback and resubmit it for review. You can publish the node only after it is approved.
        

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7040683771/CAEQThiBgIDMj6.azxkiIGNkMTQ1ODBjM2Y2MjQyNDFhYTFiZjVmNjAxM2IzNDQz4911759_20250212152817.250.svg)

## **Limitations**

-   To use Code Review, you must have [activated DataWorks](/help/en/dataworks/purchase-guide#concept-1215588) Professional Edition or a higher edition. For more information about editions, see [DataWorks editions](/help/en/dataworks/user-guide/differences-among-dataworks-editions#concept-265336).
    
-   Only an **Alibaba Cloud Account**, a **Workspace Administrator**, or a RAM User with the **AliyunDataWorksFullAccess** permission can enable or disable Code Review for a workspace. For more information, see [Overview of users, roles, and permissions](/help/en/dataworks/overview-permission-management-on-service-modules#concept-2103065).
    
-   Code Review is not supported for certain node types, such as composite nodes like Loop and Traverse, or for non-Python resource files.
    

## **(Optional) Enable mandatory code review**

A Workspace Administrator can enable Mandatory Code Review for a workspace on the Data Studio settings page.

**Note**

-   If Mandatory Code Review is disabled, you can still submit tasks for review, but the outcome does not block the publishing process.
    
-   The **delete node** operation does not trigger a Code Review.
    

### **Navigate to Security Settings and Others**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3190250671/p912504.png) icon in the lower-left corner and select **Data Studio Settings** to open the Data Studio settings page.
        
    2.  On the Data Studio settings page, click the **Security Settings and Others** tab.
        

### **Enable code review**

On the **Security Settings and Others** tab, enable **Code Review** > **Force to review code**.

**Important**

If you cannot find the **Force to review code** switch on the **Security Settings and Others** tab, check your DataWorks edition. Code Review is available only in DataWorks Professional Edition and higher.

**Parameter**

**Description**

**Force to review code**

Specifies whether a code review is required before tasks in the workspace can be published to the Production Environment.

**Code reviewers**

Specifies the users who can review code.

-   **Any Developer Role**: After a code review is submitted for a node, any user with a developer role in the workspace can be selected to review the code. The user who publishes the node selects the reviewer during submission.
    
-   **Specify development role users**: After a code review is submitted for a node, it must be approved by a user with a specified developer role before it can be published.
    

**Note**

-   You can select only users who have a developer role in the current workspace as reviewers.
    
-   DataWorks allows you to configure one or more code reviewers. If multiple reviewers are configured, approval from any single reviewer is sufficient.
    

**Baseline scopes for code review**

Configures which nodes require a code review upon submission.

You can determine which nodes require Mandatory Code Review based on the priority of the [baseline](/help/en/dataworks/user-guide/intelligent-baseline/) to which they belong. The logic is as follows:

-   If you set the review scope to non-baseline tasks, newly created nodes in the current workspace require approval.
    
-   If you set the review scope to a specific baseline level, nodes on baselines of that level in the current workspace require approval upon submission.
    
-   The higher the number of a baseline, the higher its priority. Baseline tasks have a higher priority than non-baseline tasks.
    

**Note**

Selecting non-baseline tasks means that all new nodes in the workspace require approval.

**Code review notification methods**

After you enable Mandatory Code Review, you can configure notifications to automatically alert relevant personnel:

-   For reviewers: When a new review task is assigned, the system automatically sends a notification to remind them to process it promptly.
    
-   For submitters: When the review status of the code changes, such as being approved or rejected, the submitter receives a real-time status update.
    

The following notification methods are supported: **SMS**, **DingTalk group robot webhook**, **email**, **WeCom group webhook**, **Lark webhook**, and **generic webhook**.

SMS and phone alerts generated by Code Review are counted towards your alert resource usage. You can view the alert resource usage for the Code Review module on the **Alert Resources** page in the management console. For more information, see [View and set alert resources](/help/en/dataworks/user-guide/view-and-configure-alert-resources#task-2520742).

**Note**

-   The **generic webhook** method is available only in DataWorks Enterprise Edition.
    
-   For the security settings of a DingTalk group robot, you can only configure keywords, and the keywords must include `DataWorks`.
    

## **For initiators: Submit for code review**

Submitting a node triggers a Code Review. After you select one or more reviewers, a review request is generated. If Mandatory Code Review is enabled, publishing is blocked until the review is approved.

**Note**

-   If a code review is already in progress for a node, submitting a new review automatically cancels the previous one.
    
-   The delete node operation does not trigger a Code Review.
    

1.  Publish the task.
    
    1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3190250671/p912666.png) icon to save the Data Studio node that you want to publish, and then click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3190250671/p912667.png) icon to go to the **Publish** page.
        
    2.  Click **Start Deployment to Production Environment** to publish. Because Mandatory Code Review is enabled, publishing is blocked until the code review is approved.
        
2.  Submit for code review.
    
    Click **Submit for Code Review**. On the **Code Review** configuration page, configure the **Code Reviewer** and **Change Description**.
    
    **Parameter**
    
    **Description**
    
    **Code Reviewer**
    
    Select one or more reviewers from the list of users configured as **Code reviewers**.
    
    **Change Description**
    
    Describe the code changes.
    
    After configuring the review, click **Confirm** to submit it.
    

## **For reviewers: Process a review request**

Reviewers can view and process pending review requests on the **Code Review List** > **Reviewed by Me** tab.

1.  Go to the Code Review page.
    
    In the left-side navigation pane of the Data Studio page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3190250671/p912564.png) icon to open the **Code Review List** page. Review requests assigned to you appear under **Reviewed by Me**.
    
2.  Process the review request.
    
    On the **Code Review List** > **Reviewed by Me** page, you can view the details of a code review and perform actions on the review request.
    
    -   **On the Code Review list page**: You can quickly take action on a review request, such as **Approve**, **Reject**, **Discard**, **Reopen**, and **Share**.
        
    -   **On the Code Review details page**:
        
        1.  On the **Code Review List** page, click a review request to go to the **Code Review details** page. On the details page, you can compare the code and scheduling configuration changes against the production version. Use this comparison to decide whether to approve the review.
            
        2.  In the Review Operations section, a reviewer can perform the following **Review Operations** on a Review Request:
            
            -   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3190250671/p989630.png): Approve.
                
            -   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3190250671/p989632.png): Reject.
                
            -   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3190250671/p989634.png): Discard.
                
            -   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3190250671/p989641.png): Reopen.
                
            -   **Comment**.
                
        
        **Note**
        
        -   **Discard**: Cancels the current review process. After a review is discarded, the publishing process remains blocked until the initiator submits a new review or reopens this one.
            
        -   **Reopen**: If you need to review a discarded review process again, click **Reopen**.
            
        
        After the code review is complete, the initiator can view the review details and manage the review request on the **Code Review List** page.
        

## **For initiators: View review results**

Initiators can view review results and manage review requests on the **Code Review List** > **Created by Me** tab.

1.  Go to the Code Review page.
    
    In the left-side navigation pane of the Data Studio page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3190250671/p912564.png) icon to go to the Code Review page. You can then view the review requests under **Created by Me**.
    
2.  Confirm the review result.
    
    On the **Code Review List** > **Created by Me** page, you can view the details of a code review and manage the request.
    
    -   **On the Code Review list page**: The initiator can quickly view the result of a review request and perform actions such as **Discard**, **Reopen**, or **Share**.
        
        **Note**
        
        If you discard the review, you must submit a new request or reopen the discarded one to continue the publishing process.
        
    -   **On the Code Review details page**: On the **Code Review List** page, click a review request to go to the **Code Review details** page. You can then decide whether to **Reopen** or **Discard** the code review.
        
3.  If a review is rejected, you cannot publish the node. You must modify the code according to the review feedback and submit it for review again. You can publish the node only after the review is approved.
    

## **Next steps**

After the code review is approved, you can continue the publishing process. If it is rejected, modify the code based on the review comments and resubmit it for code review.
