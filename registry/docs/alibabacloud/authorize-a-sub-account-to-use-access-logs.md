This topic describes how to authorize a Resource Access Management (RAM) user to use the access log feature of Classic Load Balancer (CLB). You need to use your Alibaba Cloud account to perform the authorization.

## Prerequisites

The access log feature is enabled for your Alibaba Cloud account. For more information, see [Enable the access log management feature](/help/en/sls/enable-the-access-log-management-feature#task-2552088).

## Create a policy

This section describes how to create a custom policy on the JSON tab. You can also create a policy on the Visual editor tab. For more information, see the [Create a custom policy on the Visual editor tab](/help/en/ram/create-a-custom-policy#section-v5a-gji-s5k) section of the "Create a custom policy" topic.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM user who has administrative rights.
    
2.  In the left-side navigation pane, choose **Permissions** > **Policies**.
    
3.  On the **Policies** page, click **Create Policy**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0059564371/p886177.png)
    
4.  On the **Create Policy** page, click the **JSON** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8669475471/p886214.png)
    
5.  On the JSON tab, enter the following code and click **OK**.
    
    ```
    {
      "Statement": [
       {
         "Action": [
           "slb:Create*",
           "slb:List*"
         ],
         "Effect": "Allow",
         "Resource": "acs:log:*:*:project/*"
       },
       {
         "Action": [
           "log:Create*",
           "log:List*"
         ],
         "Effect": "Allow",
         "Resource": "acs:log:*:*:project/*"
       },
       {
         "Action": [
           "log:Create*",
           "log:List*",
           "log:Get*",
           "log:Update*"
         ],
         "Effect": "Allow",
         "Resource": "acs:log:*:*:project/*/logstore/*"
       },
       {
         "Action": [
           "log:Create*",
           "log:List*",
           "log:Get*",
           "log:Update*"
         ],
         "Effect": "Allow",
         "Resource": "acs:log:*:*:project/*/dashboard/*"
       },
       {
         "Action": "cms:QueryMetric*",
         "Resource": "*",
         "Effect": "Allow"
       },
       {
         "Action": [
           "slb:Describe*",
           "slb:DeleteAccessLogsDownloadAttribute",
           "slb:SetAccessLogsDownloadAttribute",
           "slb:DescribeAccessLogsDownloadAttribute"
         ],
         "Resource": "*",
         "Effect": "Allow"
       },
       {
         "Action": [
           "ram:Get*",
           "ram:ListRoles"
         ],
         "Effect": "Allow",
         "Resource": "*"
       }
      ],
      "Version": "1"
    }
    ```
    
6.  In the **Create Policy** dialog box, configure the **Policy Name** and **Description** parameters and click **OK**.
    

## Attach the policy to a RAM user

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM user who has administrative rights.
    
2.  In the left-side navigation pane, choose **Permissions** > **Grants**.
    
3.  On the **Permission** page, click **Grant Permission**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1411615171/p794640.png)
    
4.  1.  Configure the Resource Scope parameter.
        
        -   **Account**: The authorization takes effect on the current Alibaba Cloud account.
            
        -   **Resource Group**: The authorization takes effect on a specific resource group.
            
            **Note**
            
            If you select Resource Group for the Resource Scope parameter, make sure that the required cloud service supports resource groups. For more information, see [Services that work with Resource Group](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group#concept-flc-p3m-4fb).
            
    2.  Configure the Principal parameter.
        
        The principal is the RAM role to which you want to grant permissions. You can select multiple RAM roles at a time.
        
    3.  Configure the Policy parameter.
        
        A policy is a set of access permissions. You can select multiple policies at a time.
        
        -   System policies: policies that are created by Alibaba Cloud. You can use but cannot modify these policies. Version updates of the policies are maintained by Alibaba Cloud. For more information, see [Services that work with RAM](/help/en/ram/product-overview/services-that-work-with-ram).
            
            **Note**
            
            The system automatically identifies high-risk system policies, such as AdministratorAccess and AliyunRAMFullAccess. We recommend that you do not grant unnecessary permissions by attaching high-risk policies.
            
        -   Custom policies: You can manage and update custom policies based on your business requirements. You can create, update, and delete custom policies. For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy).
            
    4.  Click **Grant permissions**.
        
    
5.  Click **Close**. Return to the **Grants** page and check whether the policy is attached to the RAM user. If the policy is attached to the RAM user, the RAM user can use the access log feature of CLB.
