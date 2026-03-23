By default, Resource Access Management (RAM) users do not have permissions to purge or prefetch resources. You can attach system or custom policies to a RAM user to allow them to purge and prefetch resources.

## Prerequisites

A RAM user is created. For more information, see [Create a RAM user](/help/en/ram/create-a-ram-user-1#task-187540).

## Background information

By default, RAM users do not have permissions to purge or prefetch resources. If you log on to the Dynamic Content Delivery Network (DCDN) console and attempt to purge or prefetch resources as a RAM user, the following error message appears: **The account does not have access to the page interface, or the interface does not support RAM access control**. In this case, you must grant the required purge and prefetch permissions to the RAM user.

RAM supports two types of policies: system policies and custom policies. You can attach a system or custom policy to the RAM to allow the RAM user to purge and prefetch resources.

-   System policies
    
    System policies are configured and provided by Alibaba Cloud. You cannot modify the system policies. A system policy grants RAM users full permissions (including service activation and configuration modification) on DCDN. Only a few steps are required to grant permissions to RAM users by using system policies. For more information, see [Method 1: Attach a system policy to a RAM user](#section-0s8-x2m-nx2).
    
-   Custom policies
    
    You can create, update, and manage custom policies based on business requirements. Custom policies grant RAM users only specified permissions. For example, you can use a custom policy to allow a RAM user only to purge and prefetch resources, or use the log storage feature. In this case, the RAM user does not have permissions to perform operations other than the authorized ones. For more information, see [Method 2: Attach a custom policy to a RAM user](#section-1ur-ity-264).
    

## Method 1: Attach a system policy to a RAM user

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Identities** > **Users**.
    
3.  On the **Users** page, find the RAM user to whom you want to grant permissions and click **Add Permissions** in the **Actions** column.
    
    ![Add Permissions](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0225611661/p283901.png)
    
4.  In the **Grant Permission** panel, specify the required parameters.
    
    ![Add Permissions](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7769093371/p505464.png)
    
    1.  In the **Resource Scope** section, select **Account**.
        
    2.  In the **Policy** section, enter DCDN in the search box. The system automatically displays all policies that are related to DCDN.
        
    3.  Click **AliyunDCDNFullAccess** to add the policy to the **Selected Policy** list.
        
        **Note**
        
        The **AliyunDCDNFullAcces** policy grants the RAM user full permissions on DCDN. The RAM user has permissions to call DCDN API operations and manage all accelerated domain names.
        
5.  Click **Grant permissions**.
    
6.  Click **Close**.
    

## Method 2: Attach a custom policy to a RAM user

1.  Create a custom policy.
    
    1.  Log on to the [RAM console](https://ram.console.alibabacloud.com).
        
    2.  In the left-side navigation pane, choose **Permissions** > **Policies**.
        
    3.  On the **Policies** page, click **Create Policy**.
        
    4.  On the **Create Policy** page, click the **JSON** tab.
        
        ![JSON](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7769093371/p505460.png)In the code editor, enter the following policy content. This policy grants the RAM user permissions on the prefetch and purge API operations.
        
        ```
        {
          "Version": "1",
          "Statement": [
            {
              "Action": [
                "dcdn:PreloadDcdnObjectCaches",
                "dcdn:RefreshDcdnObjectCaches",
                "dcdn:DescribeDcdnRefreshTaskById",
                "dcdn:DescribeDcdnRefreshQuota",
                "dcdn:DescribeDcdnRefreshTasks"
              ],
              "Resource": "acs:dcdn:*:*:*",
              "Effect": "Allow"
            }
          ]
        }
        ```
        
        **Note**
        
        The policy content must be expressed in a specific syntax structure to describe the authorized resource sets, operation sets, and authorization conditions. For more information, see [Policy elements](/help/en/ram/policy-elements#concept-xg5-51g-xdb) and [Policy structure and syntax](/help/en/ram/policy-structure-and-syntax#concept-srq-fbk-xdb).
        
    5.  Click **OK**. In the dialog box that appears, enter the basic policy information.
        
        **Parameter**
        
        **Description**
        
        **Name**
        
        Enter a name that is descriptive and easy to identify. AliyunDcdnRefresh is used in this example.
        
        **Description**
        
        Optional. Enter a description for the custom policy.
        
    6.  Click **OK**.
        
2.  Attach the custom policy to the RAM user.
    
    1.  Log on to the [RAM console](https://ram.console.alibabacloud.com).
        
    2.  In the left-side navigation pane, choose **Identities** > **Users**
        
    3.  On the **Users** page, find the RAM user to whom you want to grant permissions and click **Add Permissions** in the **Actions** column.
        
        ![Add Permissions](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0225611661/p283901.png)
        
    4.  In the **Grant Permission** panel, specify the required parameters.
        
        ![Custom Policy](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7769093371/p474164.png)
        
        **Parameter**
        
        **Description**
        
        **Authorized Scope**
        
        Select **Alibaba Cloud Account**, which specifies that the authorized scope is all resources that belong to the current Alibaba Cloud account. Do not select **Specific Resource Group**.
        
        **Principal**
        
        The current RAM user is automatically selected.
        
        **Policy**
        
        Select **Custom Policy** from the drop-down list. Enter the name of the custom policy created in [Step 1](#step-o2t-t9f-rzc). The name of the custom policy in this example is AliyunDcdnRefresh. Click the policy name to add it to the **Selected Policy** list.
        
    5.  Click **Grant permissions**.
        
    6.  Click **Close**.
        

## What to do next

You can log on as a RAM user. For more information, see [Log on to the Alibaba Cloud Management Console as a RAM user](/help/en/ram/user-guide/log-on-to-the-alibaba-cloud-management-console-as-a-ram-user#task-188189).
