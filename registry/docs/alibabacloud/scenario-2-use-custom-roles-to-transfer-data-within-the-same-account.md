When you use a Resource Access Management (RAM) user to create a data transformation job, you can specify custom roles to transfer data within the same Alibaba Cloud account.

## Prerequisites

-   A project is created. A source Logstore and a destination Logstore are created in the project. The names of the source and destination Logstores and the name of the project are obtained. For more information, see [Manage a logstore](/help/en/sls/manage-a-logstore#concept-xkb-zh5-vdb) and [Manage projects](/help/en/sls/manage-a-project/#concept-mxk-414-vdb).
-   A RAM user is created, and the RAM user is granted the required permissions to perform data transformation operations. For more information, see [Grant a RAM user the permissions to manage a data transformation job](/help/en/sls/authorized-ram-user-operation-data-processing#task-2005445).

## Background information

In a scenario that involves only one Alibaba Cloud account, a RAM user is used to create a data transformation job. Role A must have the read permissions on the source Logstore, and Role B must have the write permissions on the destination Logstores. The following figure shows the requirements for authorization.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0819623671/CAEQTxiBgMDSxpCs1BkiIDRiNzFjNjlhY2UyMTRlMDdiMTFkNzczZmRmY2I3ZDZj4239466_20240229200736.289.svg)

## Step 1: Use your Alibaba Cloud account to create Role A

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using your Alibaba Cloud account.
    
2.  Create Role A.
    
    For more information, see [Create a RAM role for a trusted Alibaba Cloud service](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service#task-2448632). The following table describes the key parameters.
    
    **Parameter**
    
    **Description**
    
    **Select Trusted Entity**
    
    Select **Alibaba Cloud Service**.
    
    **Role Type**
    
    Select **Normal Service Role**.
    
    **RAM Role Name**
    
    Enter a name for the role. In this example, enter role-A.
    
    **Select Trusted Service**
    
    Select **Log Service**.
    

## Step 2: Use your Alibaba Cloud account to grant the read permissions to Role A

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using your Alibaba Cloud account.
    
2.  Create a custom policy on the JSON tab. The policy grants the permissions to read data from the source Logstore. In this example, create a policy named **ori\_read**.
    
    For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy#task-2149286). The following table describes the key parameters.
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    Enter a name for the custom policy. In this example, enter **ori\_read**.
    
    **Policy document**
    
    Replace the content in the code editor with the following script.
    
    In this example, the source project is named log-project-prod, and the source Logstore is named access\_log. Replace the project and Logstore names based on your business requirements.
    
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
    
3.  Grant the read permissions on the source Logstore to Role A.
    
    For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801). The following table describes the key parameters.
    
    **Parameter**
    
    **Description**
    
    **Authorized Scope**
    
    Select **Alibaba Cloud Account**. The authorization takes effect within the current Alibaba Cloud account.
    
    **Principal**
    
    Select **role-A**. role-A is the name of Role A that is created in [Step 1: Use your Alibaba Cloud account to create Role A](#section-l8g-pgl-8rq).
    
    **Custom Policy**
    
    Select **ori\_read**.
    
4.  Obtain the Alibaba Cloud Resource Name (ARN) of Role A.
    
    In the **Basic Information** section on the details page of Role A, obtain the ARN of the role. Example: `acs:ram::1379******44:role/role-a`.
    

## Step 3: Use your Alibaba Cloud account to create Role B

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using your Alibaba Cloud account.
    
2.  Create Role B.
    
    For more information, see [Create a RAM role for a trusted Alibaba Cloud service](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service#task-2448632). The following table describes the key parameters.
    
    **Parameter**
    
    **Description**
    
    **Select Trusted Entity**
    
    Select **Alibaba Cloud Service**.
    
    **Role Type**
    
    Select **Normal Service Role**.
    
    **RAM Role Name**
    
    Enter a name for the role. In this example, enter role-B.
    
    **Select Trusted Service**
    
    Select **Log Service**.
    

## Step 4: Use your Alibaba Cloud account to grant the write permissions to Role B

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using your Alibaba Cloud account.
    
2.  Create a custom policy on the JSON tab. The policy grants the permissions to write data to the destination Logstores. In this example, create a policy named **write**.
    
    For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy#task-2149286). The following table describes the key parameters.
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    Enter a name for the custom policy. In this example, enter **write**.
    
    **Policy document**
    
    Replace the content in the code editor with the following script.
    
    In this example, the destination project is named log-project-prod, and the destination Logstore is named access\_log\_output. Replace the project and Logstore names based on your business requirements.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Action": [
            "log:Post*",
            "log:BatchPost*"
          ],
           "Resource": "acs:log:*:*:project/log-project-prod/logstore/access_log_output",
          "Effect": "Allow"
        }
      ]
    }
    ```
    
3.  Grant the write permissions on the destination Logstore to Role B.
    
    For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801). The following table describes the key parameters.
    
    **Parameter**
    
    **Description**
    
    **Authorized Scope**
    
    Select **Alibaba Cloud Account**. The authorization takes effect within the current Alibaba Cloud account.
    
    **Principal**
    
    Select **role-B**. role-B is the name of Role B that is created in [Step 3: Use your Alibaba Cloud account to create Role B](#section-jp3-5x0-7bc).
    
    **Custom Policy**
    
    Select **write**.
    
4.  Obtain the ARN of Role B.
    
    In the **Basic Information** section on the details page of Role B, obtain the ARN of the role. Example: `acs:ram::1379******44:role/role-b`.
    

## Step 5: Use the RAM user to create a data transformation job

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com) by using the RAM user.
    
2.  Go to the data transformation page.
    1.  In the Projects section, click the project you want.
        
    2.  On the **Log Storage** > **Logstores** tab, click the logstore you want.
        
    3.  On the query and analysis page, click **Data Transformation**.
3.  In the upper-right corner of the page, specify a time range for the log data that you want to transform.
    
    Make sure that log data exists on the **Raw Logs** tab.
    
4.  In the code editor, enter a data transformation statement.
    
    For more information, see [Data transformation syntax](/help/en/sls/language-introduction#concept-1130584).
    
5.  Preview transformation results.
    1.  Click **Quick**.
        
        You can select Quick or Advanced. For more information, see [Preview mode](/help/en/sls/preview-mode-overview/#task-2565077).
        
    2.  Click **Preview Data**.
        
        View the preview results.
        
        -   If data fails to be transformed because the specified statement is invalid or the permissions that are granted are invalid, follow the on-screen instructions to troubleshoot the failure.
        -   If the transformed data is returned as expected, go to the next step.
        
6.  Create a data transformation job.
    
    1.  Click **Save as Transformation Job**.
        
    2.  In the **Create Data Transformation Job** panel, configure the parameters and click **OK**.
        
        For more information about the parameters, see [Get started with data transformation](/help/en/sls/quick-start#task-2316153). The following table describes the key parameters.
        
        **Parameter**
        
        **Description**
        
        **Authorization Method**
        
        Click **Custom Role**.
        
        **Role ARN**
        
        Enter the ARN of Role A. Example: `acs:ram::1379******44:role/role-a`.
        
        Authorization Method in **Storage Destination**
        
        Click **Custom Role**.
        
        **Role ARN**
        
        Enter the ARN of Role B. Example: `acs:ram::1379******44:role/role-b`.
        
    
    After the data transformation job is created and run, data can be transferred within the same Alibaba Cloud account. For more information, see [Manage a data transformation job](/help/en/sls/manage-a-data-transformation-job#task-1580295).
