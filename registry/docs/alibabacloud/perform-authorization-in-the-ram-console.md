If you want to use a Resource Access Management (RAM) user to ship logs from a Simple Log Service Logstore to an Object Storage Service (OSS) bucket within the same Alibaba Cloud account or across Alibaba Cloud accounts, you must grant the required permissions to the RAM user in the RAM console. This topic describes how to perform authorization in the RAM console.

**Important**

The old version of shipping logs to OSS is discontinued. Refer to the [new version](/help/en/sls/shipping-logs-to-oss-new-version/).

## Use a RAM user to create an OSS data shipping job (recommended)

**Important**

When you create an OSS data shipping job, you can specify only one OSS bucket. If you want to ship logs to OSS buckets in two Alibaba Cloud accounts, you must create two data shipping jobs.

## Ship data within the same Alibaba Cloud account

The Logstore and the OSS bucket belong to the same Alibaba Cloud account.

### Procedure

1.  Create a RAM user named `ram-user`. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).
    
2.  Grant `ram-user` the permissions to read data from the Logstore and ship the data to OSS.
    
    1.  Create a custom policy named `ShipLogsToOSS`. The following code shows the policy document. For more information, see [Create custom policies](/help/en/ram/create-a-custom-policy).
        
        **Note**
        
        You can replace _Project name_ and _Logstore name_ in the policy document based on your business scenario.
        
        ```
        {
          "Version": "1",
          "Statement": [{
            "Effect": "Allow",
            "Action": [
              "log:GetLogStore",
              "log:GetIndex",
              "log:GetLogStoreHistogram",
              "log:GetLogStoreLogs"
            ],
            "Resource": [
              "acs:log:*:*:project/Project name/logstore/Logstore name",
              "acs:log:*:*:project/Project name/logstore/internal-diagnostic_log"
            ]
          },
            {
              "Effect": "Allow",
              "Action": [
                "log:CreateJob",
                "log:UpdateJob",
                "log:DeleteJob",
                "log:ListJobs",
                "log:GetJob"
              ],
              "Resource": "acs:log:*:*:project/Project name/job/*"
            },
            {
              "Effect": "Allow",
              "Action": [
                "log:ListLogStores",
                "log:ListDashboard",
                "log:ListSavedSearch"
              ],
              "Resource": "acs:log:*:*:project/Project name/*"
            },
            {
              "Effect": "Allow",
              "Action": [
                "ram:PassRole",
                "ram:GetRole",
                "ram:ListRoles"
              ],
              "Resource": "*"
            }
          ]
        }
        ```
        

### What to do next

Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com) as the RAM user and create an OSS data shipping job. For more information, see [Ship log data from Simple Log Service to OSS](/help/en/sls/ship-log-data-from-log-service-to-oss).

## Ship data across Alibaba Cloud accounts

The Logstore and the OSS bucket belong to different Alibaba Cloud accounts. The Logstore belongs to Alibaba Cloud Account A, and the OSS bucket belongs to Alibaba Cloud Account B.

### **Procedure**

1.  Modify the trust policy of the AliyunLogDefaultRole role within Alibaba Cloud Account B to allow Alibaba Cloud Account A to write data to the OSS bucket of Alibaba Cloud Account B. For more information, see [Modify the trust policy of the AliyunLogDefaultRole role](#3caca1be33h8x).
    
2.  Create a RAM user named `ram-user-a` for Alibaba Cloud Account A. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).
    
3.  Grant `ram-user` the permissions to read data from the Logstore and ship the data to OSS.
    
    1.  Create a custom policy named `ShipLogsToOSS`. The following code shows the policy document. Replace `{ID of Alibaba Cloud Account B}` based on your business scenario. For more information, see [Create custom policies](/help/en/ram/create-a-custom-policy).
        
        ```
        {
          "Version": "1",
          "Statement": [{
            "Effect": "Allow",
            "Action": [
              "log:GetLogStore",
              "log:GetIndex",
              "log:GetLogStoreHistogram",
              "log:GetLogStoreLogs"
            ],
            "Resource": [
              "acs:log:*:*:project/Project name/logstore/Logstore name",
              "acs:log:*:*:project/Project name/logstore/internal-diagnostic_log"
            ]
          },
            {
              "Effect": "Allow",
              "Action": [
                "log:CreateJob",
                "log:UpdateJob",
                "log:DeleteJob",
                "log:ListJobs",
                "log:GetJob"
              ],
              "Resource": "acs:log:*:*:project/Project name/job/*"
            },
            {
              "Effect": "Allow",
              "Action": [
                "log:ListLogStores",
                "log:ListDashboard",
                "log:ListSavedSearch"
              ],
              "Resource": "acs:log:*:*:project/Project name/*"
            },
            {
              "Effect": "Allow",
              "Action": [
                "ram:PassRole",
                "ram:GetRole",
                "ram:ListRoles"
              ],
              "Resource": "acs:ram::{ID of Alibaba Cloud Account B}:role/aliyunlogdefaultrole"
            }
          ]
        }
        ```
        
    2.  Attach the `ShipLogsToOSS` policy to `ram-user-a`. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
        

### What to do next

Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com) as the RAM user and create an OSS data shipping job. For more information, see [Ship log data from Simple Log Service to OSS](/help/en/sls/ship-log-data-from-log-service-to-oss).

## Use an Alibaba Cloud account to create an OSS data shipping job

**Important**

-   Your Alibaba Cloud account has the permissions to manage all cloud resources. To reduce security risks, we recommend that you use RAM users.
    
-   When you create an OSS data shipping job, you can specify only one OSS bucket. If you want to ship logs to OSS buckets in two Alibaba Cloud accounts, you must create two data shipping jobs.
    

## Ship data within the same Alibaba Cloud account

The Logstore and the OSS bucket belong to the same Alibaba Cloud account.

### **Procedure**

Create a RAM role named [AliyunLogDefaultRole](https://ram.console.alibabacloud.com/roles/detail?roleName=AliyunLogDefaultRole). For more information, see [Cloud Resource Access Authorization](https://ram.console.alibabacloud.com/#/role/authorize?request=%7B%22Requests%22%3A%20%7B%22request1%22%3A%20%7B%22RoleName%22%3A%20%22AliyunLogDefaultRole%22%2C%20%22TemplateId%22%3A%20%22DefaultRole%22%7D%7D%2C%20%22ReturnUrl%22%3A%20%22https%3A//sls.console.alibabacloud.com/%22%2C%20%22Service%22%3A%20%22Log%22%7D).

### **What to do next**

Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com) by using an Alibaba Cloud account and create an OSS data shipping job. For more information, see [Ship log data from Simple Log Service to OSS](/help/en/sls/ship-log-data-from-log-service-to-oss).

## Ship data across Alibaba Cloud accounts

The Logstore and the OSS bucket belong to different Alibaba Cloud accounts. The Logstore belongs to Alibaba Cloud Account A, and the OSS bucket belongs to Alibaba Cloud Account B.

### **Procedure**

1.  Create a RAM user named [AliyunLogDefaultRole](https://ram.console.alibabacloud.com/roles/detail?roleName=AliyunLogDefaultRole) for Alibaba Cloud Account B. For more information, see [Cloud Resource Access Authorization](https://ram.console.alibabacloud.com/#/role/authorize?request=%7B%22Requests%22%3A%20%7B%22request1%22%3A%20%7B%22RoleName%22%3A%20%22AliyunLogDefaultRole%22%2C%20%22TemplateId%22%3A%20%22DefaultRole%22%7D%7D%2C%20%22ReturnUrl%22%3A%20%22https%3A//sls.console.alibabacloud.com/%22%2C%20%22Service%22%3A%20%22Log%22%7D).
    
2.  Modify the trust policy of the AliyunLogDefaultRole role within Alibaba Cloud Account B to allow Alibaba Cloud Account A to write data to the OSS bucket of Alibaba Cloud Account B. For more information, see [Modify the trust policy of the AliyunLogDefaultRole role](#3caca1be33h8x).
    

#### **What to do next**

Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com) by using an Alibaba Cloud account and create an OSS data shipping job. For more information, see [Ship log data from Simple Log Service to OSS](/help/en/sls/ship-log-data-from-log-service-to-oss).

## Modify the trust policy of the AliyunLogDefaultRole role

To ship logs from a Simple Log Service Logstore of Alibaba Cloud Account A to an OSS bucket of Alibaba Cloud Account B, you must modify the trust policy of the AliyunLogDefaultRole role. For more information, see [AliyunLogDefaultRole](https://ram.console.alibabacloud.com/roles/detail?roleName=AliyunLogDefaultRole). Procedure:

1.  Go to the [Cloud Resource Access Authorization](https://ram.console.alibabacloud.com/#/role/authorize?request=%7B%22Requests%22%3A%20%7B%22request1%22%3A%20%7B%22RoleName%22%3A%20%22AliyunLogDefaultRole%22%2C%20%22TemplateId%22%3A%20%22DefaultRole%22%7D%7D%2C%20%22ReturnUrl%22%3A%20%22https%3A//sls.console.alibabacloud.com/%22%2C%20%22Service%22%3A%20%22Log%22%7D) page by using Alibaba Cloud Account B to create the AliyunLogDefaultRole role.
    
2.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using Alibaba Cloud Account B.
    
3.  In the left-side navigation pane, choose **Identities** **\> Roles**.
    
4.  On the Roles page, find the `AliyunLogDefaultRole` role and click the name.
    
5.  On the **Trust Policy** tab, click **Edit Trust Policy**.
    
    **Note**
    
    In the code editor, add `{ID of Alibaba Cloud Account A}@log.aliyuncs.com` to the `Service` element. Replace `{ID of Alibaba Cloud Account A}` with the ID of your Alibaba Cloud account. You can view the ID of your Alibaba Cloud account in the [Account Center](https://account-console.alibabacloud.com/?spm=5176.12818093.top-nav.9.197212d25EguWm#/secure) console.
    
    ```
    {
    "Statement": [
     {
       "Action": "sts:AssumeRole",
       "Effect": "Allow",
       "Principal": {
         "Service": [
           "{ID of Alibaba Cloud Account A}@log.aliyuncs.com",
           "log.aliyuncs.com"
         ]
       }
     }
    ],
    "Version": "1"
    }
    ```
