This topic describes how to grant the operation permissions on CloudLens for SLS to a Resource Access Management (RAM) user.

## Prerequisites

A RAM user is created. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).

## **Background information**

You can grant the operation permissions on CloudLens for SLS to a RAM user in one of the following methods:

-   Simple mode: You can grant all permissions on Simple Log Service to the RAM user. You cannot modify the policy document. You do not need to configure parameters.
    
-   Custom mode: You can create custom policies and attach the policies to the RAM user. This mode allows you to perform fine-grained access control. However, this mode requires complex configurations.
    

## System policy

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using your Alibaba Cloud account or as a RAM administrator.
    
2.  Grant the RAM user read-only permissions `AliyunLogReadOnlyAccess` or management permissions `AliyunLogFullAccess` on Simple Log Service. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#section-sjg-7hb-xph).
    

## Custom policy

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using you Alibaba Cloud account or a RAM user who has administrative rights.
    
2.  Create a custom policy.
    
    You can grant the read-only permissions or the read and write permissions on CloudLens for SLS to a RAM user.
    
    ## Read-only permissions
    
    The RAM user can only view the pages of CloudLens for SLS.
    
    On the **Create Policy** page, click the **JSON** tab. Replace the existing contents in the editor with the following script. For more information, see [Create a custom policy on the JSON tab](/help/en/ram/create-a-custom-policy#title-7x0-6hc-6p2).
    
    ```
    {
        "Statement": [
            {
                "Action": [
                    "log:GetLogStore",
                    "log:ListLogStores",
                    "log:GetIndex",
                    "log:GetLogStoreHistogram",
                    "log:GetLogStoreLogs",
                    "log:GetDashboard",
                    "log:ListDashboard",
                    "log:ListSavedSearch",
                    "log:GetProjectLogs"
                ],
                "Resource": [
                    "acs:log:*:*:project/*/logstore/*",
                    "acs:log:*:*:project/*/dashboard/*",
                    "acs:log:*:*:project/*/savedsearch/*"
                ],
                "Effect": "Allow"
            },
            {
                "Action": "log:GetProductDataCollection",
                "Resource": "acs:log:*:*:project/*",
                "Effect": "Allow"
            },
            {
                "Action": [
                    "log:ListCollectionPolicies"
                ],
                "Resource": "acs:log::*:collectionpolicy/*",
                "Effect": "Allow"
            },
            {
                "Action": "log:ListProject",
                "Resource": "acs:log:*:*:project/*",
                "Effect": "Allow"
            }
          
        ],
        "Version": "1"
    }
    ```
    
    ## Read and write permissions
    
    The RAM user can perform all operations that are supported by CloudLens for SLS.
    
    On the **Create Policy** page, click the **JSON** tab. Replace the existing contents in the editor with the following script. For more information, see [Create a custom policy on the JSON tab](/help/en/ram/create-a-custom-policy#title-7x0-6hc-6p2).
    
    ```
    {
        "Statement": [
            {
                "Action": [
                    "log:GetLogStore",
                    "log:ListLogStores",
                    "log:GetIndex",
                    "log:GetLogStoreHistogram",
                    "log:GetLogStoreLogs",
                    "log:GetDashboard",
                    "log:ListDashboard",
                    "log:ListSavedSearch",
                    "log:CreateProject",
                    "log:CreateLogStore",
                    "log:CreateIndex",
                    "log:UpdateIndex",
                    "log:ListLogStores",
                    "log:GetLogStore",
                    "log:GetLogStoreLogs",
                    "log:CreateDashboard",
                    "log:CreateChart",
                    "log:UpdateDashboard",
                    "log:UpdateLogStore",
                    "log:GetProjectLogs"
                ],
                "Resource": [
                    "acs:log:*:*:project/*/logstore/*",
                    "acs:log:*:*:project/*/dashboard/*",
                    "acs:log:*:*:project/*/savedsearch/*"
                ],
                "Effect": "Allow"
            },        
            {
                "Action": [
                    "log:GetProductDataCollection",
                    "log:OpenProductDataCollection",
                    "log:CloseProductDataCollection"
                ],
                "Resource": "acs:log:*:*:project/*",
                "Effect": "Allow"
            },
            {
                "Action": "log:SetGeneralDataAccessConfig",
                "Resource": "acs:log:*:*:resource/sls.general_data_access.sls.global_conf.standard_channel/record",
                "Effect": "Allow"
            },
            {
                "Action": "ram:CreateServiceLinkedRole",
                "Resource": "*",
                "Effect": "Allow",
                "Condition": {
                    "StringEquals": {
                        "ram:ServiceName": "audit.log.aliyuncs.com"              }
                }
            },
            {
                "Action": [
                    "log:ListCollectionPolicies",
                    "log:UpsertCollectionPolicy",
                    "log:DeleteCollectionPolicy"
                ],
                "Resource": "acs:log::*:collectionpolicy/*",
                "Effect": "Allow"
            },
            {
                "Action": "log:ListProject",
                "Resource": "acs:log:*:*:project/*",
                "Effect": "Allow"
            }
        ],
        "Version": "1"
    }
    ```
    
3.  Add the created custom policy to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
