Before you use E-MapReduce (EMR) Serverless Spark, you must assign the following default roles to your Alibaba Cloud account: **AliyunServiceRoleForEMRServerlessSpark** and **AliyunEMRSparkJobRunDefaultRole**. This topic describes how to assign roles to an Alibaba Cloud account.

## Procedure

In most cases, you must enable automatic authorization when you **purchase** EMR Serverless Spark services for the first time.

1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
    
2.  In the left-side navigation pane, choose **EMR Serverless** > **Spark**.
    
3.  On the **Dependency Check** page, find the **AliyunServiceRoleForEMRServerlessSpark** role and click **Approve**.
    
4.  On the **Dependency Check** page, find the **AliyunEMRSparkJobRunDefaultRole** role and click **Authorize**.
    
    **Note**
    
    You can assign this role to an Alibaba Cloud account or a Resource Access Management (RAM) user that has the **AliyunRAMFullAccess** permission.
    
5.  In the lower part of the **Cloud Resource Access Authorization** page, click **Agree to Authorization**.
    

## **References**

If you want to use a RAM user to perform operations in EMR Serverless Spark, you must grant permissions to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/emr/emr-serverless-spark/user-guide/ram-user-authorization).
