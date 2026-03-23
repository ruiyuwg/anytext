Secure Access Service Edge (SASE) integrates seamlessly with DingTalk approval workflows. When you create an approval workflow in SASE, you can associate it with a configured DingTalk approval workflow to enable efficient cross-platform collaboration and unified management. This topic uses a SASE App uninstall approval workflow as an example to show how to achieve integrated process control by associating it with a DingTalk approval workflow.

## **Background**

As enterprises continue their digital transformation, efficient collaboration and unified management across platforms are key to improving operational security and efficiency. DingTalk is a widely used enterprise collaboration platform, and many businesses use its approval workflow feature for daily management. However, more complex office security scenarios, such as app uninstall approvals within a SASE architecture, require seamless integration with DingTalk approval workflows to ensure operational compliance and data security.

To address this, SASE integrates with DingTalk approval workflows. This integration lets you reference configured DingTalk approval workflows from within SASE, enabling efficient, cross-platform approval collaboration and centralized control. This topic uses the creation of a SASE App uninstall approval workflow as an example. It explains how to use DingTalk approval workflows to achieve integrated process control and help enterprises build a more intelligent and secure office environment.

## **Prerequisites**

-   You have activated Secure Access Service Edge. If you have not activated Secure Access Service Edge, you must purchase and activate the service. For more information, see [Purchase service](/help/en/sase/product-overview/billing-overview#d22bd56026h62). You can also apply for a 7-day free trial. For more information, see [Apply for a free trial](/help/en/sase/product-overview/apply-for-free-trial).
    
-   You have [downloaded and installed the SASE App installation package](/help/en/sase/user-guide/install-and-log-on-to-sase-client#title-0s8-r4c-ao1).
    
-   You have [configured a DingTalk identity source](/help/en/sase/user-guide/connect-a-dingtalk-identity-source) and [enabled the authentication status](/help/en/sase/user-guide/docking-oidc-extended-authentication-source#6d1ad4c8cbogm).
    
-   You have created a [user group](/help/en/sase/user-guide/manage-user-groups) and selected the DingTalk organizational structure.
    

## **Procedure**

### **Step 1: Create a DingTalk application and enable approval permissions**

To seamlessly integrate SASE with DingTalk approval workflows, you must first create a custom application on the DingTalk platform. Then, you can configure approval permissions to link to the approval workflow configuration in the SASE system.

1.  Log on to the [DingTalk Open Platform](https://open-dev.dingtalk.com/fe/app?hash=%23%2Fcorp%2Fapp#/corp/app) and select **Application Development** from the top menu bar.
    
2.  In the left navigation pane, select **DingTalk Application**, and then click **Create Application**.
    
3.  In the **Create Application** panel, you can configure **Application Name**, **Application Description**, and **Application Icon**.
    
    **Configuration item**
    
    **Description**
    
    **Example value**
    
    **Application Name**
    
    (Required)
    
    The name of the DingTalk application.
    
    SASE-DingTalk Approval Application.
    
    **Application Description**
    
    (Required)
    
    The description of the application.
    
    Used to create DingTalk approval workflows and sync with SASE.
    
    **Application Icon**
    
    The icon for the application. The system provides a default icon. If you want to use a custom icon, make sure it meets the design specifications.
    
    Upload an icon in JPG or PNG format. The icon must be 240 × 240 px or larger, have a 1:1 aspect ratio, be within 2 MB in size, and have no border radius. For more information, see [DingTalk Application Icon Design Specifications](https://ding.design/?spm=ding_open_doc.document.0.0.5311c36eJmCMCX#/cate/1/page/802).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4451865571/p998440.png)
    
4.  After you complete the configuration, click **Save** to open the application details page.
    
5.  On the application details page, in the navigation pane on the left, choose **Development Configuration** > **Permission Management**.
    
6.  On the **Permission Management** page, you can configure permissions for **OA Approval**.
    
    The required OA approval workflow permissions include Approval Flow Data Management, Workflow Instance Write, Workflow Template Write, Workflow Template Read, and Workflow Instance Read. You can request these permissions in a batch.
    
    1.  Select an appropriate **Permission Scope**.
        
    2.  On the left, in the permission classification list, select **OA Approval**. Then, select the check box above the list.
        
    3.  In the upper-right corner of the list, click **Batch Request**.
        

### **Step 2: Create a DingTalk approval workflow**

1.  Log on to the [DingTalk admin console](https://oa.dingtalk.com/index.htm#/welcome).
    
2.  In the lower-right corner of the page, in the **Common Applications** section, select **Approval**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4451865571/p998479.png)
    
    Alternatively, in the left navigation pane, choose **Workbench** > **Application Management**. In the application list, find **OA Approval** and click **Enter** in the **Actions** column to open the **OA Approval Management Backend** page.
    
3.  Click **Create Approval Form**. In the **Create Approval Form** dialog box, select **Process Form**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4451865571/p998489.png)
    
4.  In the approval form, you can use the configuration wizard to configure the **Basic Settings**, **Form Design**, and **Process Design**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4451865571/p998548.png)
    
    1.  **Basic Settings**: You can configure **Form Name**, **Group**, **Who Can Initiate**, and **Form Administrator**.
        
        The system includes built-in form groups. You can also click **New Group**, enter a group name, and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4451865571/p998500.png) icon.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4451865571/p998497.png)
        
    2.  **Form Design**: Configure the fields for the approval form. These fields can be associated in SASE.
        
        1.  In the configuration wizard, click **Form Design**.
            
        2.  In the controls area on the left, you can click a form control to configure its properties, such as **Title** and **Placeholder Text**.
            
    3.  **Process Design**: Set the **Initiator**, **Approver**, and **Carbon Copy Recipient** for the approval workflow.
        
        1.  In the configuration wizard, click **Process Design**.
            
        2.  Click the **Approver** box.
            
        3.  In the **Approver** panel, set the **Approval Type**, **Approver**, and **Approval Method**, and then click **Save**.
            
5.  After you complete the configuration, click **Publish** in the upper-right corner of the page.
    

### **Step 3: Create a SASE approval workflow**

When you create a SASE approval workflow, you must configure the DingTalk application information, event subscription information, and approval field mappings to seamlessly integrate SASE with the DingTalk approval workflow.

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane, choose **Approval Center** > **Workflow Management**, and click **Create Workflow**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4451865571/p998610.png)
    
3.  In the **Create Approval Workflow** panel, configure the parameters.
    
    **Configuration item**
    
    **Description**
    
    **Example value**
    
    **Workflow Name**
    
    The name of the approval workflow.
    
    SASE App uninstall approval workflow
    
    **Approval Process Type**
    
    The type of approval workflow. Built-in Approval Workflow and DingTalk Approval Workflow are supported.
    
    DingTalk Approval Workflow
    
    **Client ID**
    
    The ID of the DingTalk application.
    
    **How to obtain the Client ID and Client Secret**
    
    1.  Log on to the [DingTalk Open Platform](https://open-dev.dingtalk.com/fe/app?hash=%23%2Fcorp%2Fapp#/corp/app). In the top menu bar, select **Application Development**.
        
    2.  In the navigation pane on the left, select **DingTalk Application** and click the name of the application that you created to go to the application details page.
        
    3.  In the navigation pane on the left, select **Credentials And Basic Information**. On the Application Credentials page, view the **Client ID** and **Client Secret.**
        
    
    ding\*\*\*\*\*\*\*\*\*\*zrvwc
    
    **Client Secret**
    
    The secret of the DingTalk application.
    
    wRQD7BHcK\*\*\*\*\*\*\*\*\*\*\*\*AyL1bAJDA
    
    **aes\_key**
    
    The encryption key for DingTalk event subscriptions.
    
    **How to obtain the aes\_key and token**
    
    1.  Log on to the [DingTalk Open Platform](https://open-dev.dingtalk.com/fe/app?hash=%23%2Fcorp%2Fapp#/corp/app). In the top menu bar, select **Application Development**.
        
    2.  In the navigation pane on the left, select **DingTalk Application** and click the name of the application that you created to go to the application details page.
        
    3.  In the navigation pane on the left, select **Event Subscription**.
        
    4.  On the **Event Subscription** page, set **Push Method** to **HTTP Push**, and click the reset button to obtain the **Encryption Aes\_key** and **Signature Token**.
        
        **Warning**
        
        After you obtain the **Encryption Aes\_key** and **Signature Token**, do not reset them again. Do not close or refresh the current page because you must configure the **Request URL** later.
        
    
    CzSr3F8\*\*\*\*\*\*\*\*\*\*\*\*Tc3Zz2
    
    **token**
    
    The signature for DingTalk event subscriptions.
    
    3hszVY\*\*\*\*\*\*\*\*\*\*\*aY4K3p9tB4
    
    **Request URL**
    
    The public URL that DingTalk uses to receive event subscriptions.
    
    **Important**
    
    Copy this URL to the **Request URL** field on the **DingTalk Open Platform** > **Application Development** > **Internal Enterprise Applications** > **DingTalk Application** > **Development Configuration** > **Event Subscription** page.
    
    https://default-pre-auth-server.cloudsecsase.com/\*/\*
    
    **Approval Process Configuration**
    
    Configure the association and field mapping between the SASE approval template and the DingTalk approval workflow.
    
    -   **Workflow Template**: A built-in workflow template in SASE.
        
    -   **Associate DingTalk Process ID**: The ID of the DingTalk approval workflow form.
        
        **How to view the DingTalk approval workflow form ID**
        
        1.  Log on to the [DingTalk admin console](https://oa.dingtalk.com/index.htm#/welcome).
            
        2.  In the **Common Applications** section in the lower-right corner of the page, select **Approval**.
            
            Alternatively, in the navigation pane on the left, choose **Workbench** > **Application Management**. In the application list, find **OA Approval** and click **Enter** in the **Actions** column to go to the **OA Approval Management Backend** page.
            
        3.  In the navigation pane on the left, select **Form Management**.
            
        4.  In the **Form Management** list, view the form ID of the created approval workflow.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4451865571/p998671.png)
            
        
    -   **System Fields**: A built-in, non-editable system field in the workflow template.
        
    -   **Template Fields**: A field configured in the associated DingTalk workflow.
        
    
    **Note**
    
    A SASE approval workflow can be bound to multiple approval forms created under the same DingTalk application. You can click **Add** to configure different approval workflows.
    
    -   Workflow template: app uninstall policy
        
    -   Associated DingTalk workflow ID: PROC-EB35CAE7-\*\*\*\*\*\*-\*\*\*\*\*19C5833D0C17
        
    -   System field: Reason for filing
        
    -   Template field: DingTalk approval reason for filing
        
    
4.  After you complete the configuration, click **OK**.
    

### **Step 4: Configure DingTalk event subscriptions**

When a subscribed event occurs, DingTalk pushes a message to the application.

1.  Open the event subscription page for the DingTalk application.
    
    **Note**
    
    This is the page that you opened to obtain the aes\_key and token in Step 3.
    
2.  Configure the **Request URL** and click **Save**.
    
    You can log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas). In the navigation pane on the left, choose **Approval Center** > **Workflow Management**. Click **Edit** in the **Actions** column of the target approval workflow. In the **Edit Approval Workflow** panel, you can view the request URL.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5361047571/p1005259.png)
    
3.  After the configuration is saved, go to the **Approval Events** section at the bottom of the page. Turn on the **Approval Instance Started, Ended** switch.
    
4.  Under **Approval Instance Started, Ended**, click **Subscription Settings**.
    
5.  In the **Subscription Content** dialog box, you can configure the event subscription address to apply fine-grained control over subscription events and reduce resource usage.
    
    **Note**
    
    A monthly quota applies to processing subscription events. You can view the usage of **Webhook and Stream** on the DingTalk Open Platform homepage.
    
    1.  Click **Add** and enter the event address in the **Subscription Address** field.
        
        Format example: /v1.0/event/bpms\_instance\_change/processCode/{processCode}/type/{type}. For example: /v1.0/event/bpms\_instance\_change/processCode/PROC-XXXXX/type/\*.
        
    2.  Click **OK**.
        

### **Step 5: Configure the anti-uninstall policy**

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane, choose **Terminal Management** > **Terminal Registration**.
    
3.  On the **Uninstallation Approval** tab, click **Anti-uninstallation Policy**.
    
4.  In the **Client Anti-uninstallation Policy** panel, configure the parameters and click **OK**.
    
    **Configuration item**
    
    **Description**
    
    **Example value**
    
    **Client Configuration Switch**
    
    Configure **Client Anti-uninstallation** and **Client Auto-start and Anti-logoff**.
    
    Enable **Client Anti-uninstallation**.
    
    **Effective Scope**
    
    The user group to which the anti-uninstall policy applies.
    
    DingTalk user group
    
    **Whitelist**
    
    Users on the whitelist can uninstall the SASE client without being restricted by the anti-uninstall policy.
    
    Manager Liu
    
    **Approval Process Configuration**
    
    Specify whether to allow employees to file for approval and the approval workflow to use.
    
    -   Filing workflow: Allow employees to file for approval
        
    -   Select approval workflow: Select an approval workflow that you have created.
        
        **Warning**
        
        Select an approval workflow created in Workflow Management that is associated with the DingTalk system.
        
    
    **Prompt Display Configuration**
    
    When the system detects that a user in the effective scope is uninstalling the SASE App, a pop-up notification appears. Configure the title, content, and button text for this pop-up. Notification messages can be set in both Chinese and English.
    
    Title: Your SASE App is about to be uninstalled
    
    Content: After uninstallation, this device cannot be used for work and will lose access to the internal network.
    
    Primary button: File for Approval
    
    Secondary button: Got It
    

### **Step 6: Verification**

1.  Log on to the SASE App using a DingTalk identity source.
    
2.  Uninstall the SASE App.
    
3.  In the uninstall dialog box, click **File For Approval**.
    
4.  On the **Security Software Uninstall Prohibited** page, enter a reason and click **Initiate Filing**.
    
5.  The approver can view and process the OA approval request in the DingTalk application.
    
    The administrator can also view the approval details and process the request on the **Approval Center** > **Workflow Instance** page of the SASE console.
    
    **Note**
    
    -   The approval status is synchronized to the DingTalk client, regardless of whether the request is approved or rejected.
        
    -   If the request is approved, you can uninstall the SASE App.
