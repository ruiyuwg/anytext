This topic answers frequently asked questions (FAQs) about managing and using Realtime Compute for Apache Flink workspaces, projects, and jobs. These questions cover topics such as resource scaling, viewing workspace IDs, checking job engine versions, and configuring job parameters.

-   Workspace and namespace management
    
    -   [Can I change the name of a workspace?](#52024726a7fnc)
        
    -   [Can I change the VPC and virtual switch?](#96cba8e742xdx)
        
    -   [How do I view information such as the workspace ID?](#section-lpq-5h8-0l9)
        
    -   [Resource allocation fails during a project scale-in](#b62b494e4705j)
        
    -   [A Flink compute resource upgrade has no effect](#d0dd82f76e67n)
        
    -   [How do I view the AccessKey ID and AccessKey secret?](#24cde8802a8qe)
        
    -   [How do I upload a file to OSS for a Flink job to use?](#5f421ddb045om)
        
    -   [What do I do if an activated Flink workspace is not displayed in the Realtime Compute for Apache Flink console?](#4a3ce90601sd2)
        
    -   [Error: "Has not enough ip address: abnormal event detected from kubernetes"](#title-zc0-9rk-406)
        
    -   [Error: "Unknown Error: Http failure response for xxxxx"](#5bbfe3d6f8gg2)
        
-   Job management
    
    -   [How do I view the Flink version of the current job?](#8f920fc96b402)
        
    -   [How do I change the engine version for a Realtime Compute for Apache Flink job?](#f3761c7329tv4)
        
    -   [How do I configure custom running parameters for a job?](#124381f0300jp)
        
    -   [How do I persist common Flink configurations to improve efficiency?](#2ab952b87f9mx)
        
    -   [How do I prevent sensitive information such as AccessKey secrets or passwords from being leaked?](#a83e636e7c44e)
        
    -   [How can Flink jobs use compute resources more efficiently?](#ce20536865qj4)
        
    -   [Cron expression syntax](#076a464ce5772)
        

## **Can I change the name of a workspace?**

1.  In the Realtime Compute for Apache Flink console, click **Details** in the **Actions** column of the target workspace.
    
2.  Click the workspace name to modify it.
    

## **Can I change the VPC and virtual switch?**

You cannot change the VPC, but you can [change the virtual switch](/help/en/flink/realtime-flink/user-guide/modify-a-vswitch).

## How do I view information such as the workspace ID?

In the Realtime Compute for Apache Flink console, click **Details** in the **Actions** column of the target workspace to view information such as the workspace ID.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8853431471/p839229.png)

## **Resource allocation failed during project scale-in**

-   Problem description
    
    The "Resource allocation failed" message is displayed during a project scale-in.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8853431471/p831307.png)
    
-   Cause
    
    All resources are allocated or in use.
    
-   Solution
    
    First, reduce the resources allocated to the resource queue. For more information, see [Modify the resource amount](/help/en/flink/realtime-flink/user-guide/manage-resource-queues#6cb57b50824sy). Then, you can scale in the project.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8853431471/p831355.png)
    

## **Flink compute resource upgrade has no effect**

-   Subscription
    
    Flink resources must be scaled from the top down. Resources are allocated from the workspace to projects, and then from projects to resource queues. For more information, see [Resource adjustment](/help/en/flink/realtime-flink/user-guide/reconfigure-resources).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0559403771/CAEQTxiBgMDqu.eb2BkiIGFmNjliZmNjMTIxZjQzNWRiYmJlODA3YjhiY2Y0NjYy4578069_20240925101129.397.svg)
-   pay-as-you-go
    
    Pay-as-you-go is a postpaid billing method. The system settles your bill based on the actual resource usage of your workspace, so resource scaling is not required. In the Actions column of the target workspace, click **More** > **Quota Limit**. You can then configure resource queues for the project to meet the resource isolation and management needs of batch job scenarios. For more information, see [Manage resource queues](/help/en/flink/realtime-flink/user-guide/manage-resource-queues).
    

## How do I view the AccessKey ID and AccessKey secret?

-   AccessKey ID
    
    -   For an Alibaba Cloud account: Log on to the Alibaba Cloud Management Console, move the pointer over your profile picture in the upper-right corner, and click **AccessKey Management**.
        
    -   For a RAM user: For more information, see [View the AccessKey information of a RAM user](/help/en/ram/user-guide/view-the-accesskey-pairs-of-a-ram-user).
        
-   AccessKey secret
    
    To prevent security risks, the AccessKey secret for an Alibaba Cloud account or a RAM user is displayed only when you create it and cannot be retrieved later. You must store the AccessKey secret in a secure location.
    

If you do not have your AccessKey information or have forgotten it, see [Create an AccessKey](/help/en/ram/user-guide/create-an-accesskey-pair).

## How do I upload a file to OSS for a Flink job to use?

If you select OSS Bucket as the storage class when you create a Flink workspace, you can upload a file to the OSS Bucket that is attached to the workspace for a Flink job to use. You can also upload files for Flink jobs on the **File Management** page of the Realtime Compute for Apache Flink development console. For more information, see [Manage files](/help/en/flink/realtime-flink/user-guide/resource-management).

1.  In the Realtime Compute for Apache Flink console, find the target workspace and choose **More** > **Workspace Details** in the **Actions** column to view information about the OSS Bucket that is attached to the workspace.
    
    ![Bucket详情](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3969741661/p230660.png)
    
2.  Upload the resource file to the target OSS Bucket.
    
    -   Log in to the [OSS console](https://oss.console.alibabacloud.com/overview?spm=a3c0i.15008052.8992693010.3.550b3aecj4zP7o) and upload the resource file to the /artifacts/namespaces directory in the target Bucket.
        
        ![OSS](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8561171861/p618303.jpg)
        
    -   You can also upload the resource file by calling an API operation. For more information, see [PutObject](/help/en/oss/developer-reference/putobject).
        
3.  In the navigation pane of the Realtime Compute for Apache Flink development console, click **File Management** to view the resource file that you uploaded in the OSS console.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7512894271/p700446.png)
    

## **What do I do if an activated Flink workspace is not displayed in the Realtime Compute for Apache Flink console?**

You can troubleshoot the issue by checking the following items. If the issue persists, [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//smartservice.console.alibabacloud.com/%23).

-   Confirm that the Flink workspace has been initialized. This process usually takes 5 to 10 minutes.
    
-   Make sure that you have selected the correct region at the top of the Realtime Compute for Apache Flink console page. The workspace is displayed only in the region that you selected when you created it.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0086471471/p921203.png)
    
-   If you are logged on as a RAM user, make sure that the user has the required permissions for the Realtime Compute for Apache Flink console. For more information about how to configure permissions, see [Permission management](/help/en/flink/realtime-flink/user-guide/permission-management/).
    

## Error: Has not enough ip address: abnormal event detected from kubernetes

-   **Error details**
    
    ```
    Has not enough ip address:abnormal event detected from kubernetes (type:[Warning], reason:[CniError_CodeUnKnownErr], message:[CniAllocateError: allocateIP failed: ipamCreate failed: failed to create ENI: all vSwitches ([*****]) cannot be used: CreateNetworkInterface: RequestId: 67959AE5-EA20-5CB4-8560-5BD6752472FD, ErrorCode: InvalidVSwitchId.IpNotEnough, Message: The specified VSwitch "*****" has not enough IpAddress., elapsedTime: 245.03232ms])
    ```
    
-   **Cause**
    
    The virtual switch has no available IP addresses.
    
-   **Solution**
    
    Add available IP addresses. For more information, see [Modify a virtual switch](/help/en/flink/realtime-flink/user-guide/modify-a-vswitch#task-2507532).
    

## **Error: Unknown Error: Http failure response for xxxxx**

-   **Error details**
    
    File upload fails, and the following error message is displayed.
    
    ![fafc02e11c4c935d2bb2c0d973ff861a](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0559403771/p962477.png)
    
-   **Cause**
    
    After the Alibaba Cloud International site domain name is updated, file upload requests to the new alibabacloud.com domain fail because of cross-domain restrictions. This issue occurs if you have not configured a cross-domain rule (CORS) in Object Storage Service (OSS).
    
-   **Solution**
    
    On the OSS console, configure a CORS rule for the OSS Bucket that is attached to the Flink workspace. For more information about how to set the rule, see [Manage files](/help/en/flink/realtime-flink/user-guide/resource-management).
    

## How do I view the Flink version of the current job?

You can view the version in the following ways:

-   On the right side of the **ETL** or **Data Ingestion** page, click **More Configurations** and find the version information in the **Engine Version** field.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8853431471/p839526.png)
    
-   On the **Operation Center** > **Job O&M** page, click the name of the target job and view the version information in the **Basic Configuration** area on the **Deployment Details** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4065461471/p839528.png)
    

## **How do I change the engine version for a Realtime Compute for Apache Flink job?**

-   SQL or YAML jobs
    
    On the right side of the **ETL** or **Data Ingestion** page, click **More Configurations** and select the target version from the **Engine Version** field. For a deployed job, you must redeploy and start the job for the version change to take effect.
    
-   JAR or Python jobs
    
    On the **Job O&M** page, click the target job name. On the **Deployment Details** tab, click **Edit** in the upper-right corner of the **Basic Configuration** section. In the **Engine Version** field, select the target version, click **Save**, and then click **Start**.
    

## **How do I configure custom running parameters for a job?**

1.  Log on to [the Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/console/cell?spm=a2c4g.11186623.2.16.1a8023a9J8TiPV).
    
2.  Find the workspace that you want to manage and click **Console** in the **Actions** column.
    
3.  On the **Job O&M** page, click the name of the target job.
    
4.  On the **Deployment Details** tab, click **Edit** to the right of the **Running Parameter Settings** section.
    
5.  In the **Other Configuration** field, configure the parameters.
    
    Make sure that a space follows the colon (:) between the key and the value. The following code provides an example.
    
    ```
    task.cancellation.timeout: 180s
    ```
    
6.  Click **Save**.
    

## **How do I persist common Flink configurations to improve efficiency?**

Realtime Compute for Apache Flink provides the **Job Template** feature. You can save common parameters as a template so that you do not need to manually configure them for each new job.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8853431471/p912204.png)

## **How do I prevent sensitive information such as AccessKeys or passwords from being leaked?**

To prevent security risks from exposing sensitive information such as AccessKey secrets and passwords in plaintext, you can use variables. Using variables also helps you avoid writing the same code or values repeatedly and simplifies configuration management. You can use variables in various scenarios, such as SQL jobs, JAR or Python jobs, log configurations, and UI settings. For more information, see [Manage variables](/help/en/flink/realtime-flink/user-guide/manage-keys).

## **How can Flink jobs use compute resources more efficiently?**

You can make adjustments in the following ways:

-   **Manual adjustment:** On the **Smart Diagnosis** tab, click **Start Diagnosis**, view the resource analysis results, and manually make adjustments as prompted.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8853431471/p912339.png)
    
-   **Automatic adjustment:** You can enable the automatic tuning feature, which includes intelligent tuning and scheduled tuning modes, to allow the Flink system to automatically adjust resources. For more information about the scenarios and configuration procedures, see [Configure automatic tuning](/help/en/flink/realtime-flink/user-guide/configure-autopilot-and-scheduled-tuning).
    

## Cron expression writing rules

[Job state set management](/help/en/flink/realtime-flink/user-guide/manage-a-state-set) uses **Unix-style** rules, while [task orchestration](/help/en/flink/realtime-flink/user-guide/workflow/) uses Java-style rules. Use the correct cron expression for your scenario.

**Unix-style rules**

1.  **Field definition:** `minute hour day_of_month month day_of_week`. There are five fields.
    
2.  **Union of "day of month" and "day of week":** If you define both the third field (day of month) and the fifth field (day of week), they have an **OR** relationship.
    
    > `0 12 1 * 5` means the job runs at 12:00 on the first of each month **OR** on every Friday. It does not mean the job runs only when the first of the month is also a Friday.
    
3.  **The question mark (**`**?**`**) is not supported:** Do not use the `?` character. Using it will cause the system to report an error or fail to recognize the expression. To ignore a field, use the asterisk (`*`) instead.
    

**Java-style rules (Quartz)**

1.  **Field definition:** `second minute hour day_of_month month day_of_week`. Six fields are commonly used.
    
2.  **Conflict between "day of month" and "day of week":**
    
    -   **The "day of month" and "day of week" fields cannot both be set to specific values or both be set to an asterisk (**`*****`**).**
        
    -   To prevent logical conflicts, you must use a question mark (`**?**`) in one of the two fields. For example, specifying both "the 1st" and "Friday" creates a conflict if the 1st of the month is not a Friday.
        
    -   **Rule**: If you specify a value for "day of month", set "day of week" to `?`. If you specify a value for "day of week", set "day of month" to `?`.
        
3.  **Numeric day-of-the-week values**: 1 represents Sunday, 2 represents Monday, and so on. To avoid ambiguity, use English abbreviations, such as `SUN`, `MON`, and `TUE`.
