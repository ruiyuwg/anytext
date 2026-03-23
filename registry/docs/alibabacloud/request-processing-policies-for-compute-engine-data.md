You can customize request processing procedures for MaxCompute tables, resources, and functions.

## Background information

You can specify the data range to which a request processing procedure applies based on a **MaxCompute project** or the **category and sensitivity level of data in Data Security Guard**. For more information, see the [Specify the data range](#section-qfj-rqj-0mp) section in this topic.

## Limits

-   Only workspace administrators and the RAM users to which the AliyunDataWorksFullAccess policy is attached can create and manage request processing policies.
    
-   Only DataWorks Enterprise Edition allows you to configure request processing policies for compute engine data.
    

## Create a request processing policy

1.  Go to the DataStudio page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
    
2.  Click the ![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7693841371/p94809.png) icon in the upper-left corner and choose **All Products** > **More** > **Approval Center**.
    
3.  In the left-side navigation pane of the Approval Center page, choose **Policies** > **Compute Engine**.
    
    On the page that appears, you can view a list of created request processing policies and edit and delete the request processing policies.
    
4.  Click **Create Policy** in the upper-right corner and configure the parameters in the Create Policy wizard.
    

## Enter the basic information

![基本信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2267940361/p294995.png)Configure the **Policy Name** and **Purpose** parameters based on your business scenario to which the request processing policy applies.

## Specify the data range

You must specify the data range to which the request processing policy applies based on your business scenario. After the request processing policy is created, the requests for the permissions on the data in this data range must be processed based on this request processing policy.

If a MaxCompute compute engine is used, you can specify the data range of a request processing policy in a workspace based on a MaxCompute project or the category and sensitivity level of data in Data Security Guard.

![选择配置范围](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2267940361/p295001.png)When you specify the data range, take note of the following items:

-   Specify the data range based on a MaxCompute project
    
    -   You must select an appropriate MaxCompute project from the **MaxCompute Project** drop-down list. This way, when requests for the permissions on the tables in this MaxCompute project are submitted, this request processing policy is used to process the requests.
        
    -   A MaxCompute project can be associated with only one MaxCompute project-based request processing policy. Otherwise, a policy conflict error is reported.
        
    -   You can select a MaxCompute project in which the current account assumes the administrator or super administrator role. If no MaxCompute project is displayed in the drop-down list, the current account may not have the required permissions. In this case, you must use an account that is assigned the Admin or Super\_Administrator role.
        
        **Note**
        
        A DataWorks administrator is assigned the role\_project\_admin role in a DataWorks workspace, but not the Admin or Super\_Administrator role in the MaxCompute project that you associate with the DataWorks workspace.
        
        To check the role of the current account, run the `whoami` command on the DataStudio page in DataWorks to obtain the account information. Then, run the `show grants for Your current account` command to check whether the current account is assigned the Admin or Super\_Administrator role in the MaxCompute project.
        
-   Specify the data range based on the category and sensitivity level of data in Data Security Guard
    
    -   You must select the category and sensitivity level of data from the **Select Data Security Level** drop-down list. This way, when requests for the permissions on the tables of the selected data category and sensitivity level are submitted, this request processing policy is used to process the requests.
        
    -   A data sensitivity level can be associated with only one request processing policy that is based on the data category and sensitivity level. Otherwise, a policy conflict error is reported.
        
    -   You can specify the data range by using an Alibaba Cloud account or as a RAM user. If you specify the data range as a RAM user, the following conditions must be met:
        
        -   The AdministratorAccess policy is attached to the RAM user.
            
        -   The AliyunDataWorksFullAccess policy is attached to the RAM user, and the Project Owner or Super\_Administrator role of all MaxCompute projects is assigned to the RAM user.
            

## Configure the notification methods

Supported notification methods: text messages, emails, DingTalk chatbots, and Webhook URLs. ![通知机制](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2267940361/p295016.png)After you configure the notification methods, notifications are sent to approvers based on the configured notification methods when a permission request is submitted for processing.

**Note**

You need to only configure notification methods in this section. You can configure approvers when you configure request processing nodes in the next step.

-   To ensure that the approvers can receive notifications by using text messages or emails, you must add the approvers as alert contacts of DataWorks. For more information, see [Configure and view alert contacts](/help/en/dataworks/user-guide/configure-and-view-alert-contacts#task-2520742).
    
-   To ensure that the approvers can receive notifications by using a DingTalk chatbot, select **Custom Keywords** when you configure the **Security Settings** parameter in the Add Robot dialog box. Then, enter **DataWorks** in the Custom Keywords field. Make sure that the other check boxes are **cleared** when you configure the Security Settings parameter.
    
    If you do not add DataWorks as a custom keyword or you select other check boxes when you configure the Security Settings parameter, the approvers cannot receive notifications by using the DingTalk chatbot.
    

## Configure the request processing nodes

You can specify an approver and a role for the approver on each request processing node in the **Configure Processing Links** step. ![审批节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3267940361/p295018.png)When you configure the request processing nodes, take note of the following items:

-   Request processing procedure: After a request processing procedure is configured, a request is forwarded to the approvers that you specified on the request processing nodes in sequence. The next approver can receive a request processing notification and process the request only after the current approver approves the request.
    
-   Approver: You can specify the following types of entities as approvers on the request processing nodes: **DataWorks workspace-level roles**, **DataWorks workspace member**, **table owner**, **Alibaba Cloud account**, and **MaxCompute roles**.
    
    **Note**
    
    -   DataWorks sends notifications to each approver based on the configured notification methods when a permission request is submitted for processing. To ensure that the approvers can receive notifications by using text messages or emails, you must add the approvers as alert contacts of DataWorks. For more information, see [Configure and view alert contacts](/help/en/dataworks/user-guide/configure-and-view-alert-contacts#task-2520742).
        
    -   If multiple users that assume the same role are specified as approvers on a request processing node, notifications are sent to all the approvers. In this case, if one of the approvers on the request processing node approves the request, the request is forwarded to the next request processing node.
        
    

## Set priorities for request processing policies

If both a MaxCompute project-based request processing policy and a request processing policy that is based on the category and sensitivity level of data in Data Security Guard are configured, a specific data range may hit both types of request processing policies. In this case, you can set priorities for the two types of request processing policies.![优先级](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3267940361/p295027.png)
