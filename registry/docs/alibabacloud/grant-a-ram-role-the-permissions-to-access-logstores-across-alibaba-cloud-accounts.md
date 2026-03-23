Simple Log Service allows you to use the default role AliyunLogETLRole or a custom Resource Access Management (RAM) role to create Scheduled SQL jobs. This topic describes how to grant a custom RAM role the permissions to analyze logs in a source Logstore and the permissions to write data to a destination Logstore.

## Grant a custom RAM role the permissions to analyze logs in a source Logstore

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using your Alibaba Cloud account or as a RAM user that has administrative permissions.
    
2.  Create a RAM role named `QueryLogstoreRole`. For more information, see [Step 1: Create a RAM role](/help/en/sls/create-a-ram-role-whose-trusted-entity-is-an-alibaba-cloud-service-and-authorize-the-ram-role-to-access-log-service#section-7v8-tju-zjv).
    
    **Important**
    
    -   When you create a RAM role, you must set the **Select Trusted Entity** parameter to **Alibaba Cloud Service** and the **Select Trusted Service** parameter to **Log Service**.
        
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
        
    
3.  Create a custom policy named `QueryLogstorePolicy`. The policy grants the permissions to analyze logs in a source Logstore. For more information, see [Create a custom policy on the JSON tab](/help/en/ram/create-a-custom-policy#title-7x0-6hc-6p2).
    
    On the **JSON** tab of the Create Policy page, you can use the policy document that uses exact match or fuzzy match for authorization to replace the existing script in the code editor.
    
    ### **Exact match for authorization**
    
    Replace `{project-name}` and `{logstore-name}` in the script based on your business requirements.
    
    **Important**
    
    When you create a policy, you can specify either a Logstore or Metricstore after the Logstore keyword. If you want to manage Metricstores, you can also refer to the following policy document to create a policy.
    
    ```
    {
        "Version":"1",
        "Statement":[
            {
                "Action":[
                    "log:PostProjectQuery"
                ],
                "Resource":[
                    "acs:log:*:*:project/{project-name}/logstore/{logstore-name}"
                ],
                "Effect":"Allow"
            },
            {
                "Action":[
                    "log:GetProjectQuery",
                    "log:PutProjectQuery",
                    "log:DeleteProjectQuery"
                ],
                "Resource":[
                    "acs:log:*:*:project/{project-name}"
                ],
                "Effect":"Allow"
            }
        ]
    }
    ```
    
    ### **Fuzzy match for authorization**
    
    If you want to grant the permissions on multiple projects and Logstores, you can use fuzzy match for authorization. In this example, the names of the source projects are log-project-dev-a, log-project-dev-b, and log-project-dev-c. The names of the source Logstores are website\_a\_log, website\_b\_log, and website\_c\_log. You can replace the project and Logstore names based on your business requirements.
    
    ```
    {
        "Version":"1",
        "Statement":[
            {
                "Action":[
                    "log:PostProjectQuery"
                ],
                "Resource":[
                    "acs:log:*:*:project/log-project-dev-*/logstore/website_*_log"
                ],
                "Effect":"Allow"
            },
            {
                "Action":[
                    "log:GetProjectQuery",
                    "log:PutProjectQuery",
                    "log:DeleteProjectQuery"
                ],
                "Resource":[
                    "acs:log:*:*:project/log-project-dev-*"
                ],
                "Effect":"Allow"
            }
        ]
    }
    ```
    
4.  Attach the `QueryLogstorePolicy` policy to the `QueryLogstoreRole` role. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
    

### **What to do next**

1.  Obtain the Alibaba Cloud Resource Name (ARN) of the RAM role. For more information, see [View the information about a RAM role](/help/en/ram/user-guide/view-the-information-about-a-ram-role).
    
2.  When you create a Scheduled SQL job, set the **SQL Execution Authorization** parameter to **Custom Role** and enter the Alibaba Cloud Resource Name (ARN) of the `QueryLogstoreRole` RAM role. For more information, see [Create a scheduled SQL job](/help/en/sls/create-a-scheduled-sql-task/). ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6416187371/p899276.png)
    

## Grant the RAM role the permissions to write data to a destination Logstore

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using your Alibaba Cloud account or as a RAM user that has administrative permissions.
    
2.  Create a RAM role named `WriteLogstoreRole`. For more information, see [Step 1: Create a RAM role](/help/en/sls/create-a-ram-role-whose-trusted-entity-is-an-alibaba-cloud-service-and-authorize-the-ram-role-to-access-log-service#section-7v8-tju-zjv).
    
    **Important**
    
    -   When you create a RAM role, you must set the **Select Trusted Entity** parameter to **Alibaba Cloud Service** and the **Select Trusted Service** parameter to **Log Service**.
        
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
        
    
3.  Create a custom policy named `WriteLogstorePolicy`. The policy grants the permissions to write logs to a destination Logstore. For more information, see [Create a custom policy on the JSON tab](/help/en/ram/create-a-custom-policy#title-7x0-6hc-6p2).
    
    On the **JSON** tab of the Create Policy page, you can use the policy document that uses exact match or fuzzy match for authorization to replace the existing script in the code editor.
    
    ## Exact match for authorization
    
    Replace `{project-name}` and `{logstore-name}` in the script based on your business requirements.
    
    **Important**
    
    When you create a policy, you can specify either a Logstore or Metricstore after the Logstore keyword. If you want to manage Metricstores, you can also refer to the following policy document to create a policy.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Action": [
            "log:PostLogStoreLogs",
            "log:PostProjectQuery",
            "log:BatchPostLogStoreLogs"
          ],
           "Resource": "acs:log:*:*:project/{project-name}/logstore/{logstore-name}",
          "Effect": "Allow"
        }
      ]
    }
    ```
    
    ## Fuzzy match for authorization
    
    If you want to grant the permissions on multiple projects and Logstores, you can use fuzzy match for authorization. In this example, the names of the destination projects are log-project-dev-a, log-project-dev-b, and log-project-dev-c. The names of the destination Logstores are website\_a\_log\_output, website\_b\_log\_output, and website\_c\_log\_output. You can replace the project and Logstore names based on your business requirements.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Action": [
            "log:Post*",
            "log:BatchPost*"
          ],
           "Resource": "acs:log:*:*:project/log-project-dev-*/logstore/website_*_log_output",
          "Effect": "Allow"
        }
      ]
    }
    ```
    
4.  Attach the `WriteLogstorePolicy` policy to the `WriteLogstoreRole` RAM role. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
    
5.  **Optional**. If the source and destination Logstores are not within the same Alibaba Cloud account, you must modify the trust policy of the `WriteLogstoreRole` RAM role.
    
    1.  On the Roles page, click the `WriteLogstoreRole` RAM role.
        
    2.  On the **Trust Policy** tab, click **Edit Trust Policy** and replace the existing script in the code editor with the following policy document.
        
        **Important**
        
        Replace `ID of Alibaba Cloud Account A to which the source Logstore belongs` with the ID of your Alibaba Cloud account. You can view the ID of your Alibaba Cloud account in the [Account Center](https://account-console.alibabacloud.com/v2/#/basic-info/index) console.
        
        ```
        {
          "Statement": [
            {
              "Action": "sts:AssumeRole",
              "Effect": "Allow",
              "Principal": {
                "Service": [
                  "log.aliyuncs.com",
                  "ID of Alibaba Cloud Account A to which the source Logstore belongs@log.aliyuncs.com"
                ]
              }
            }
          ],
          "Version": "1"
        }
        ```
        

### **What to do next**

1.  Obtain the Alibaba Cloud Resource Name (ARN) of the RAM role. For more information, see [View the information about a RAM role](/help/en/ram/user-guide/view-the-information-about-a-ram-role).
    
2.  When you create a scheduled SQL job, set the **Write Authorization** parameter to **Custom Role** and enter the ARN of the `WriteLogstoreRole` RAM role. For more information, see [Create a scheduled SQL job](/help/en/sls/create-a-scheduled-sql-task/). ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6416187371/p899278.png)
