Simple Log Service (SLS) lets you use a default role or custom role to create a data transformation job. When you create a data transformation job, you can set the Authorization Method parameter to Custom Role. This topic describes how to grant a custom role the permissions to access data in a logstore.

## Prerequisites

A Resource Access Management (RAM) role is created. For more information, see [Create a RAM role for a trusted Alibaba Cloud service](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service).

**Important**

-   When creating a RAM role, set **Principal Type** to **Cloud Service**, and **Principal Name** to **Simple Log Service**.
    
-   Check the trust policy of the RAM role. Make sure that the `Service` element contains at least `"log.aliyuncs.com"`.
    
    ```
    {
      "Statement": [
        {
          "Action": "sts:AssumeRole",
          "Effect": "Allow",
          "Principal": {
            "Service": [
              "log.aliyuncs.com"
            ]
          }
        }
      ],
      "Version": "1"
    }
    ```
    

## Grant the RAM role the read-only permissions on a source logstore

After you use an Alibaba Cloud account to grant the RAM role the read-only permissions on a source logstore, the RAM role can read data from the source logstore. When you create a data transformation job, you can use the RAM role. For more information, see [Create a data transformation job](/help/en/sls/create-a-data-transformation-job#task-1181217).

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using your Alibaba Cloud account or a RAM user who has administrative rights.
    
2.  Create a custom policy. In this example, the `log-etl-source-reader-policy` policy is created. The policy grants the read-only permissions on a source logstore. For more information, see [Create a custom policy on the JSON tab](/help/en/ram/create-a-custom-policy#title-7x0-6hc-6p2).
    
    On the **JSON** tab of the Create Policy page, you can use the policy document that uses **exact match** or **fuzzy match** for authorization to replace the existing script in the code editor.
    
    ### Exact match for authorization
    
    In this example, the source project name is log-project-prod, and the source logstore name is access\_log. Replace the project and logstore names based on your business requirements.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Action": [
            "log:ListShards",
            "log:GetCursorOrData",
            "log:GetConsumerGroupCheckPoint",
            "log:UpdateConsumerGroup",
            "log:ConsumerGroupHeartBeat",
            "log:ConsumerGroupUpdateCheckPoint",
            "log:ListConsumerGroup",
            "log:CreateConsumerGroup"
          ],
          "Resource": [
            "acs:log:*:*:project/log-project-prod/logstore/access_log",
            "acs:log:*:*:project/log-project-prod/logstore/access_log/*"
          ],
          "Effect": "Allow"
        }
      ]
    }
    ```
    
    ### Fuzzy match for authorization
    
    In this example, the source project names are log-project-dev-a, log-project-dev-b, and log-project-dev-c, and the source logstore names are app\_a\_log, app\_b\_log, and app\_c\_log. Replace the project and logstore names based on your business requirements.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Action": [
            "log:ListShards",
            "log:GetCursorOrData",
            "log:GetConsumerGroupCheckPoint",
            "log:UpdateConsumerGroup",
            "log:ConsumerGroupHeartBeat",
            "log:ConsumerGroupUpdateCheckPoint",
            "log:ListConsumerGroup",
            "log:CreateConsumerGroup"
          ],
          "Resource": [
            "acs:log:*:*:project/log-project-dev-*/logstore/app_*_log",
        "acs:log:*:*:project/log-project-dev-*/logstore/app_*_log/*"
          ],
          "Effect": "Allow"
        }
      ]
    }
    ```
    
3.  Attach the created custom policy to the RAM role. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
    

## Grant the RAM role the write permissions on a destination logstore within the same Alibaba Cloud account

If the source and destination logstores belong to the same Alibaba Cloud account, use the Alibaba Cloud account to grant the write permissions to the RAM role. Then, the RAM role can write transformed data to the destination logstore. When you create a data transformation job, you can use the RAM role. For more information, see [Create a data transformation job](/help/en/sls/create-a-data-transformation-job#task-1181217).

1.  Create a custom policy. In this example, the `log-etl-target-writer-policy` policy is created. The policy grants the permissions to write transformation results to a destination logstore. For more information, see [Create a custom policy on the JSON tab](/help/en/ram/create-a-custom-policy#title-7x0-6hc-6p2).
    
    On the **JSON** tab of the Create Policy page, you can use the policy document that uses **exact match** or **fuzzy match** for authorization to replace the existing script in the code editor.
    
    ### Exact match for authorization
    
    In this example, the destination project name is log-project-prod, and the destination logstore name is access\_log\_output. Replace the project and logstore names based on your business requirements.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Action": [
            "log:Post*"
          ],
          "Resource": "acs:log:*:*:project/log-project-prod/logstore/access_log_output",
          "Effect": "Allow"
        }
      ]
    }
    ```
    
    ### Fuzzy match for authorization
    
    In this example, the destination project names are log-project-dev-a, log-project-dev-b, and log-project-dev-c, and the destination logstore names are app\_a\_log\_output, app\_b\_log\_output, and app\_c\_log\_output. Replace the project and logstore names based on your business requirements.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Action": [
            "log:Post*",
            "log:BatchPost*"
          ],
           "Resource": "acs:log:*:*:project/log-project-dev-*/logstore/app_*_log_output",
          "Effect": "Allow"
        }
      ]
    }
    ```
    
2.  Attach the created custom policy to the RAM role. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
    

## Grant the RAM role the write permissions on a destination logstore across Alibaba Cloud accounts

If the source and destination logstores belong to different Alibaba Cloud accounts, perform the following steps to grant permissions to the RAM role. For example, a data transformation job is created to read data from a source logstore that belongs to Alibaba Cloud Account A and write transformed data to a destination logstore that belongs to Alibaba Cloud Account B.

**Important**

Before you perform the following steps, make sure that you granted the RAM role the write permissions on a destination logstore within Alibaba Cloud Account B. For more information, see [Grant a RAM role the write permissions on a destination logstore within the same Alibaba Cloud account](#section-v6z-5m4-cyt).

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using your Alibaba Cloud account or a RAM user who has administrative rights.
    
2.  In the left-side navigation pane, choose **Identities** > **Roles**.
    
3.  On the Roles page, find the RAM role that you want to manage and click the role name.
    
4.  On the **Trust Policy** tab, click **Edit Trust Policy**.
    
    Add the `ID of Alibaba Cloud Account A to which the source logstore belongs` to the `Service` element. Replace the `ID of Alibaba Cloud Account A to which the source logstore belongs` with the ID of your Alibaba Cloud account. View the ID of your Alibaba Cloud account in the [Account Management](https://account-console.alibabacloud.com/v2/#/basic-info/index) console. The following policy allows Alibaba Cloud Account A to manage the cloud resources of Alibaba Cloud Account B by using a temporary token.
    
    ```
    {
        "Statement": [
            {
                "Action": "sts:AssumeRole",
                "Effect": "Allow",
                "Principal": {
                    "Service": [
                        "ID of Alibaba Cloud Account A to which the source logstore belongs@log.aliyuncs.com"
                    ]
                }
            }
        ],
        "Version": "1"
    }
    ```
    
5.  Obtain the Alibaba Cloud Resource Name (ARN) of the RAM role. For more information, see [View the information about a RAM role](/help/en/ram/user-guide/view-the-information-about-a-ram-role).
    

## What to do next

Specify the Alibaba Cloud Resource Name (ARN) of the RAM role for a data transformation job. For more information, see [Create a data transformation job](/help/en/sls/create-a-data-transformation-job#task-1181217).
