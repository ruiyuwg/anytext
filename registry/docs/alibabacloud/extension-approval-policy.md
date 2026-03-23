If you set Risk Response to Approval when you configure a risk identification rule and the check result of the event that triggers the related extension is Warning, you can decide whether to configure a request processing policy based on your business requirements. This topic describes how to configure a request processing policy for an extension.

## Limits

-   Only DataWorks Enterprise Edition allows you to configure request processing policies for extensions. For more information, see [Upgrade the DataWorks service](/help/en/dataworks/user-guide/differences-among-dataworks-editions#section-4hc-hn0-rbg).
    
-   Only Alibaba Cloud accounts and RAM users to which the **AliyunDataWorksFullAccess** policy is attached can select all workspaces as managed workspaces for a request processing policy. In this case, the defined request processing policy can take effect in all managed workspaces. For more information, see [View the permissions of a RAM user](/help/en/ram/user-guide/view-the-permissions-of-a-ram-user) and [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
    
-   A workspace member that is assigned the Workspace Administrator role can select only the workspace to which the member belongs as a managed workspace for a request processing policy. In this case, the defined request processing policy can take effect only in the workspace to which the member belongs.
    

## Go to the Processing Policy for Extension page

1.  Go to the DataStudio page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
    
2.  Click the ![图标.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4216641371/p747230.png) icon in the upper-left corner and choose **All Products** > **More** > **Approval Center**.
    
3.  In the left-side navigation pane of the page that appears, choose **Policies** > **Extension**.
    

## Create a request processing policy

1.  In the upper-right corner of the Processing Policy for Extension page, click **Create Policy**. The Create Policy page appears.
    
2.  Configure basic information about the request processing policy.
    
    When you configure the basic information about the request processing policy, take note of the following items:
    
    -   Only Alibaba Cloud accounts and RAM users to which the **AliyunDataWorksFullAccess** policy is attached can select global workspaces as managed workspaces. In this case, the defined request processing policy can take effect in all managed workspaces.
        
    -   A workspace member that is assigned the Workspace Administrator role can select only the workspace to which the member belongs as a managed workspace for a request processing policy. In this case, the defined request processing policy can take effect only in the workspace to which the member belongs.
        
    -   A global extension takes effect in all workspaces after the extension is enabled. If no [response policy is configured for a global extension](/help/en/dataworks/user-guide/risk-identification-rules#c9ef512a92ub9) in a specified workspace, the related event directly passes the check by default and the related process is not blocked. The extension that is used to check for the operation related to the pre-event for data download is used as an example. If the extension is enabled, the data download operation in all workspaces is blocked until the extension returns a result. Follow-up procedure if the extension returns a warning state:
        
        -   If a request processing policy is configured for the workspace in which a data download operation is identified, the request processing procedure is automatically triggered.
            
        -   If no request processing policy is configured for the workspace in which a data download operation is identified, the data can be downloaded as expected.
            
3.  Configure request processing nodes.
    
    You can specify an approver and a role for the approver on each request processing node in the **Configure Processing Links** step. When you configure the request processing nodes, take note of the following items:
    
    -   Request processing procedure: After a request processing procedure is configured, a permission request is forwarded to the approvers that you specified on the request processing nodes in sequence. The next approver can receive a request processing notification and process the permission request only after the current approver approves the permission request.
        
    -   Approver: You can specify the following types of entities as approvers on the request processing nodes: DataWorks workspace-level roles, DataWorks workspace members, and Alibaba Cloud accounts.
        
4.  Click **Submit** in the lower-right corner.
    

## **View the associated extension of the request processing policy**

Find the created request processing policy and click **Associate Extension** in the **Actions** column. The Risk identification rules page appears. You can view or configure the created request processing policy when you [configure a risk response](/help/en/dataworks/user-guide/risk-identification-rules#c9ef512a92ub9) for the extension with which the created request processing policy is associated.

## **References**

-   For information about risk identification rules, see [Risk identification rules](/help/en/dataworks/user-guide/risk-identification-rules).
    
-   For information about how to obtain the check result of an extension for extension point events, see [CallbackExtension](/help/en/dataworks/api-callbackextension).
