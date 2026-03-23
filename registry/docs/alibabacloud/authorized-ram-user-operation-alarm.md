This topic describes how to grant a Resource Access Management (RAM) user the permissions to manage alerts. After you grant the permissions to the RAM user, you can create an alert rule to monitor data across projects, regions, or Alibaba Cloud accounts.

## Prerequisites

A RAM user is created. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).

## Grant the RAM user the read-only permissions on alerts

### **Method 1:** Attach a system policy to the RAM user

Attach the AliyunLogReadOnlyAccess policy to the RAM user. This policy grants the read-only permissions on alerts. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).

### **Method 2: Create a custom policy and attach the custom policy to the RAM user**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using your Alibaba Cloud account or a RAM user who has administrative rights.
    
2.  Create a custom policy. On the **JSON** tab of the Create Policy page, replace the existing script in the code editor with the following policy document. For more information, see [Create a custom policy on the JSON tab](/help/en/ram/create-a-custom-policy#title-7x0-6hc-6p2).
    
    **Important**
    
    -   **_Project name_** specifies the project whose alerts you want to grant the read-only permissions on. Replace the variable with an actual project name.
        
    -   **_sls-alert-\*_** specifies all projects to which the global alert center belongs within your Alibaba Cloud account. The projects store the data of alerts within your Alibaba Cloud account. The data includes the evaluation data for each alert rule, stored logs, and global reports that are related to alerts. If you do not need to view the global reports, you can delete `acs:log:*:*:project/sls-alert-*/*` from the resource list.
        
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "log:GetLogStore"
          ],
          "Resource": [
            "acs:log:*:*:project/Project name/logstore/internal-alert-history",
            "acs:log:*:*:project/sls-alert-*/logstore/internal-alert-center-log"
          ]
        },
        {
          "Effect": "Allow",
          "Action": [
            "log:GetJob",
            "log:ListJobs"
          ],
          "Resource": "acs:log:*:*:project/Project name/job/*"
        },
        {
          "Effect": "Allow",
          "Action": [
            "log:GetProject"
          ],
          "Resource": [
            "acs:log:*:*:project/sls-alert-*"
          ]
        },
        {
          "Effect": "Allow",
          "Action": [
            "log:GetLogStoreLogs",
            "log:ListLogStores",
            "log:GetIndex",
            "log:GetDashboard",
            "log:ListDashboard"
          ],
          "Resource": [
            "acs:log:*:*:project/Project name/*",
            "acs:log:*:*:project/sls-alert-*/*"
          ]
        },
        {
          "Effect": "Allow",
          "Action": [
            "log:GetResource",
            "log:ListResources",
            "log:GetResourceRecord",
            "log:ListResourceRecords"
          ],
          "Resource": [
            "acs:log:*:*:resource/*"
          ]
        }
      ]
    }
    ```
    
3.  Attach the created custom policy to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    

## Grant the RAM user the permissions to manage alerts

### Method 1: Attach a system policy to the RAM user

Attach the AliyunLogFullAccess policy to the RAM user. The policy grants the management permissions on Simple Log Service. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).

### Method 2: Create a custom policy and attach the custom policy to the RAM user

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using your Alibaba Cloud account or a RAM user who has administrative rights.
    
2.  Create a custom policy. On the **JSON** tab of the Create Policy page, replace the existing script in the code editor with the following policy document. For more information, see [Create a custom policy on the JSON tab](/help/en/ram/create-a-custom-policy#title-7x0-6hc-6p2).
    
    **Important**
    
    -   **_Project name_** specifies the project whose alerts you want to grant the management permissions on. Replace the variable with an actual project name.
        
    -   **_sls-alert-\*_** specifies all projects to which the global alert center belongs within your Alibaba Cloud account. The projects store the data of alerts within your Alibaba Cloud account. The data includes the evaluation data for each alert rule, stored logs, and global reports that are related to alerts. If you want to grant a RAM user the permissions to manage only one project to which the global alert center belongs, you must set **_sls-alert-\*_** to the name of the project in the `sls-alert-${uid}-${region}` format. Example: `sls-alert-148****6461-cn-hangzhou`.
        
    -   If you want to use a RAM user to manage alert-related system Logstores, such as Logstores that store historical alerts and Logstores to which the global alert center belongs, you must grant the RAM user the permissions to create Logstores, create indexes, and update indexes. Then, you can use the RAM user to view alert-related reports such as Alert History.
        
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "log:GetLogStore",
            "log:UpdateLogStore",
            "log:CreateLogStore",
            "log:CreateIndex",
            "log:UpdateIndex"
          ],
          "Resource": [
            "acs:log:*:*:project/Project name/logstore/internal-alert-history",
            "acs:log:*:*:project/sls-alert-*/logstore/internal-alert-center-log"
          ]
        },
        {
          "Effect": "Allow",
          "Action": [
            "log:*"
          ],
          "Resource": "acs:log:*:*:project/Project name/job/*"
        },
        {
          "Effect": "Allow",
          "Action": [
            "log:GetProject",
            "log:CreateProject"
          ],
          "Resource": [
            "acs:log:*:*:project/sls-alert-*"
          ]
        },
        {
          "Effect": "Allow",
          "Action": [
            "log:GetLogStoreLogs",
            "log:ListLogStores",
            "log:GetIndex",
            "log:GetDashboard",
            "log:CreateDashboard",
            "log:UpdateDashboard",
            "log:ListDashboard"
          ],
          "Resource": [
            "acs:log:*:*:project/Project name/*",
            "acs:log:*:*:project/sls-alert-*/*"
          ]
        },
        {
          "Effect": "Allow",
          "Action": [
            "log:*"
          ],
          "Resource": [
            "acs:log:*:*:resource/*"
          ]
        }
      ]
    }
    ```
    
3.  Attach the created custom policy to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
