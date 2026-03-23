The Log Audit Service lets you quickly enable log collection. This topic describes how to enable the feature and perform related operations.

## Prerequisites

-   You have an Alibaba Cloud account.
    
    You must use a Resource Access Management (RAM) user. The RAM user must have read permissions for RAM, such as the AliyunRAMReadOnlyAccess policy. The user must also have read and write permissions for Simple Log Service (SLS), such as the AliyunLogFullAccess policy.
    
-   The services for the cloud products whose logs you want to collect must be enabled. For more information, see [Cloud product coverage and related resources](/help/en/sls/overview-of-log-audit-service#section-bvc-cgj-enp).
    

## Initial configuration

**Important**

You must use an Alibaba Cloud account or a RAM user with the AliyunRAMFullAccess permission to enable log collection.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  Go to the Log Audit Service page.
    
    **Note**
    
    Starting January 21, 2025, the console entry for the **Log Audit Service** will be removed. However, existing users who activated the service before this date can still see the entry. New users who need to use the old version can access the **Log Audit Service (New Version)** and use its **Back to Old Version** feature.
    
    1.  In the **Log Application** section, on the **Audit & Security** tab, click **Log Audit Service (New Version)**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7632422271/p820564.png)
        
    2.  In the upper-right corner of the **Log Audit Service (New Version)** page, click **Back to Old Version**. Then continue to use the old version of Log Audit Service.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9628537371/p906721.png)
        
    
3.  Follow the on-screen instructions to complete the authorization.
    
    After authorization, the Log Audit Service uses the service-linked role AliyunServiceRoleForSLSAudit to collect logs from cloud products. For more information, see [Manage the AliyunServiceRoleForSLSAudit service-linked role](/help/en/sls/manage-the-aliyunserviceroleforslsaudit-service-linked-role#concept-2089820).
    

## Enable log collection

1.  In the navigation pane on the left of the Log Audit Service console, choose **Access to Cloud Services** > **Global Configurations**.
    
2.  From the **Region of Central Project** drop-down list, select the destination region for centralized log storage.
    
    -   China: China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), and China (Hong Kong)
        
    -   Outside China: Singapore, Japan (Tokyo), Germany (Frankfurt), Indonesia (Jakarta), and Malaysia (Kuala Lumpur)
        
    
3.  In the cloud product list, select the cloud products for which you want to enable log collection, and then configure the storage duration.
    
    For Layer 7 access logs of SLB, Layer 7 access logs of ALB, access logs of OSS, audit logs of PolarDB-X 1.0, flow logs of VPC, and internal DNS logs, you can also select **Synchronization to Central Project**. After this feature is enable, the regional project is used for transit and does not require a long storage duration. The console automatically adjusts the storage duration to the recommended value.
    
4.  Click **Modify**.
    
    After the configuration is complete, wait about 2 minutes. Then view the log collection status on the **Access to Cloud Services** > **Access Status** page. If an error occurs, adjust the settings based on the on-screen messages. For more information, see [Enable and manage log collection](/help/en/sls/enable-log-collection-1#section-7az-6wh-x2p).
    

## More operations

### Enable encryption

The Log Audit Service lets you use the built-in service key of Simple Log Service to encrypt the dedicated Logstores for cloud products that have log collection enabled.

**Important**

Only central projects in the China (Hohhot) and China (Hong Kong) regions support encryption.

1.  In the navigation pane on the left of the Log Audit Service console, choose **Access to Cloud Services** > **Global Configurations**.
    
2.  On the **Global Configurations** page, click **Modify** in the upper-right corner.
    
3.  Turn on the **Enable Encryption** switch and select the corresponding encryption algorithm.
    
    **Important**
    
    After you select an encryption algorithm, you cannot change it. Choose the algorithm with care.
    
4.  Click **OK**.
    

### Stop log collection

Follow these steps to stop collecting new logs while retaining previously collected data. The existing logs will be deleted automatically when their retention period expires.

**Important**

Stopping collection only prevents new logs from being collected. To change the log storage duration, you must make the change while log collection is enabled. Otherwise, the change does not take effect.

1.  In the navigation pane on the left of the Log Audit Service console, choose **Access to Cloud Services** > **Global Configurations**.
    
2.  On the **Global Configurations** page, click **Modify** in the upper-right corner.
    
3.  Turn off the target log option and click **OK**.
    

### Delete audit resources

To permanently delete all resources created by the Log Audit Service (including projects, logstores, dashboards, and alerts), perform the following steps.

1.  In the navigation pane on the left of the Log Audit Service console, choose **Access to Cloud Services** > **Global Configurations**.
    
2.  On the **Global Configurations** page, click **Delete Audit Resource** in the upper-right corner.
    
3.  In the **Delete All Resources of Log Audit Service** dialog box, click **Disable Log Collection for Cloud Services**.
    
4.  In the **Confirm** dialog box, click **Confirm**.
    
5.  In the **Delete All Resources of Log Audit Service** dialog box, copy the command.
    
    If you want to delete all resources, copy all commands. If you want to delete only some resources, copy the required commands. The command format is described as follows:
    
    **Important**
    
    -   Execute the delete commands in order. First, delete the regional projects, and then delete the central project.
        
    -   Before you delete the projects, wait 1 to 2 minutes to ensure that log collection for all cloud products has stopped.
        
    
    -   Example of a command to delete a regional project:
        
        ```
        aliyunlog log delete_project --project_name=slsaudit-region-12****34-cn-huhehaote --region-endpoint=cn-huhehaote.log.aliyuncs.com
        ```
        
    -   Example of a command to delete the central project:
        
        ```
        aliyunlog log delete_project --project_name=slsaudit-center-12****34-cn-huhehaote --region-endpoint=cn-huhehaote.log.aliyuncs.com
        ```
        
    
    In the commands, `_12****34_` is the Alibaba Cloud account ID, and `_cn-huhehaote_` is the region where the project resides. `region-endpoint` is the endpoint of the Simple Log Service project. For more information, see [Endpoints](/help/en/sls/developer-reference/service-entrance).
    
6.  In the top navigation bar, click the ![云命令行](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3765081561/p413293.png) icon.
    
7.  In the **cloudshell** dialog box, run the commands that you copied.
    
    The system runs the commands one by one to delete the audit resources.
