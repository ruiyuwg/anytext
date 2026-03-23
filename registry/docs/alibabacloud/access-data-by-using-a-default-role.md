The AliyunLogETLRole default role has permissions to read data from a source Logstore and write transformed data to one or more destination Logstores. You can authorize a data transformation job to assume AliyunLogETLRole role. This way, the job can read data from the source Logstore and write transformed data to the destination Logstores within the same account.

## Procedure

In the **Create Data Transformation Job** panel, click **Default Role** and view the AliyunLogETLRole role.

**Important**

-   If you use a Resource Access Management (RAM) user, make sure that the RAM user is granted the permissions to manage a data transformation job. You must use the Alibaba Cloud account to which the RAM user belongs to complete the authorization. For more information, see [Grant a RAM user the permissions to manage a data transformation job](/help/en/sls/authorized-ram-user-operation-data-processing).
    
-   If the authorization is complete within your Alibaba Cloud account, skip the authorization.
