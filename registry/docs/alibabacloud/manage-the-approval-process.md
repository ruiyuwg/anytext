SASE lets you create approval flows for SASE services and third-party applications, and configure settings such as approvers and approval permissions. This topic describes how to create an approval flow.

## Create an approval flow

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Terminal Protection** > **Security Alerts**.
    
3.  On the **Workflow Management** page, click **Create Workflow**.
    
4.  In the **Create Approval Workflow** panel, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Workflow Name**
    
    Enter a name for the approval flow.
    
    The name must be 1 to 128 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (\_).
    
    **Approval Process Type**
    
    Select an approval flow type. Three types are supported.
    
    -   **Built-in Approval Process**: Applies to approval flows for SASE services.
        
    -   **DingTalk Approval Process**: This type applies to approval flows integrated with DingTalk.
        
    -   **WeCom Approval Process**: This type applies to approval flows integrated with WeCom.
        
    
    The subsequent Parameters vary depending on the **Approval Process Type** that you select. Configure the parameters for the selected type.
    
    ### **Built-in approval flow**
    
    **Parameter**
    
    **Description**
    
    **Approval Workflow**
    
    Set the approver flow. Add at least one level of approvers. You can add up to five levels of approvers.
    
    For the first level, you can add up to five approvers. If any of the first-level approvers approves the request, the flow is approved. If any approver rejects the request, the flow is rejected.
    
    **Application Review**
    
    Select one or more flow templates. If you do not select a flow template, the corresponding policy cannot be associated with the current flow.
    
    The flow templates include the following types:
    
    -   **Domain Name Whitelist Template**
        
        This template is used for whitelist policies in **Internet Access** > **Behavior Management**.
        
    -   **Domain Name Blacklist Template**
        
        This template is used for blacklist policies in **Internet Access** > **Behavior Management**.
        
    -   **Software Disabling Template**
        
        This template is used for disabling policies in **Software Management** > **Software Blacklist**.
        
    -   **File Exfiltration Template**
        
        This template is used for detection policies in **Data Loss Prevention** > **Detection Policies**, which are detection policies for file exfiltration.
        
    -   **App Uninstall Policy Template**
        
        This template is used for registration policies in **Terminal Management** > **Uninstall Approval**.
        
    -   **Peripheral Control Template**
        
        This template is used for detection policies in ****Data Loss Prevention**** > **Peripheral Management**.
        
    
    ### **DingTalk approval flow**
    
    **Parameter**
    
    **Description**
    
    **Client ID**
    
    The ID of the DingTalk application.
    
    **How to obtain the Client ID and Client Secret**
    
    1.  Log on to the [DingTalk Open Platform](https://open-dev.dingtalk.com/fe/app?hash=%23%2Fcorp%2Fapp#/corp/app). In the top menu bar, choose **Application Development**.
        
    2.  In the navigation pane on the left, choose **DingTalk Apps**. Click the name of the application that you created to go to the application details page.
        
    3.  In the navigation pane on the left, choose **Credentials And Basic Information**. On the App Credentials page, view the **Client ID** and **Client Secret**.
        
    
    **Client Secret**
    
    The secret of the DingTalk application.
    
    **aes\_key**
    
    The encryption credential for DingTalk event subscriptions.
    
    **How to obtain the aes\_key and token**
    
    1.  Log on to the [DingTalk Open Platform](https://open-dev.dingtalk.com/fe/app?hash=%23%2Fcorp%2Fapp#/corp/app). In the top menu bar, choose **Application Development**.
        
    2.  In the navigation pane on the left, choose **DingTalk Apps**. Click the name of the application that you created to go to the application details page.
        
    3.  In the navigation pane on the left, choose **Event Subscriptions**.
        
    4.  On the **Event Subscriptions** page, set **Push Method** to **HTTP Push** and click the reset button to obtain the **Encryption Aes\_key** and **Signature Token**.
        
        **Warning**
        
        After you obtain the **Encryption Aes\_key** and **Signature Token**, do not reset them again. Do not close or refresh the current page. You still need to configure the **Request URL**.
        
    
    **token**
    
    The signature for DingTalk event subscriptions.
    
    **Request URL**
    
    The public URL for DingTalk to receive event subscriptions.
    
    **Important**
    
    Copy this URL to the **Request URL** field on the **DingTalk Open Platform** > **Application Development** > **Internal Corporate Apps** > **DingTalk Apps** > **Development Configuration** > **Event Subscriptions** page.
    
    **Approval Process Configuration**
    
    Configure the association and field mapping between the SASE approval template and the DingTalk approval flow.
    
    -   **Workflow Template**: The built-in flow template in SASE.
        
    -   **Associate DingTalk Process ID**: Enter the form ID of the DingTalk approval flow.
        
        **How to view the DingTalk approval flow form ID**
        
        1.  Log on to the [DingTalk admin console](https://oa.dingtalk.com/index.htm#/welcome).
            
        2.  In the **Common Applications** section in the lower-right corner of the page, choose **Approval**.
            
            You can also choose **Workbench** > **Application Management** in the navigation pane on the left. In the application list, find **OA Approval**, and click **Enter** in the **Actions** column to go to the **OA Approval Back-end Management** page.
            
        3.  In the navigation pane on the left, choose **Form Management**.
            
        4.  In the **Form Management** list, view the form ID of the created approval flow.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4451865571/p998671.png)
            
        
    -   **System Fields**: The built-in system fields in the flow template. These fields cannot be edited.
        
    -   **Template Fields**: The fields configured in the associated DingTalk flow.
        
    
    **Note**
    
    A SASE approval flow can be attached to multiple approval forms created under the same DingTalk application. You can click **Add** to configure different approval flows.
    
    ### **WeCom approval flow**
    
    After you select the WeCom approval flow, the administrator must use the WeCom client to scan a QR code for authorization. Then, contact Alibaba Cloud customer service to complete the backend configuration of the flow application. After the backend configuration is complete, you can configure the approval flow.
    
    **Parameter**
    
    **Description**
    
    **Approval Template Mapping**
    
    Configure the built-in SASE flow template and enter the flow ID that corresponds to the WeCom approval template.
    
    **Field ID Mapping**
    
    Configure the mapping between the system fields of the SASE flow template and the fields of the WeCom approval template.
    
5.  Click **OK**.
    

## Other operations

-   **Copy flow**: To clone an existing approval flow, click **Copy** in the **Actions** column.
    
    **Note**
    
    Currently, this operation is supported only for built-in approval flows.
    
-   **Edit flow**: To modify an approval flow, click **Edit** in the **Actions** column.
    
-   **Delete flow**: You can delete an approval flow only if it is not associated with any policies. To delete a flow, click **Delete** in the **Actions** column.
    

## **References**

-   To view statistics for all flows in your enterprise, see [View flow instance statistics](/help/en/sase/user-guide/view-process-instance-statistics).
    
-   You can apply a built-in flow template to peripheral devices to ensure data security. For more information, see [Ensure data security by managing peripheral devices](/help/en/sase/user-guide/manage-external-devices-to-ensure-data-security).
    
-   To learn how to integrate a DingTalk approval flow, see [Best practices for integrating a DingTalk approval flow](/help/en/sase/use-cases/approval-process-interfacing-dingtalk-best-practices).
