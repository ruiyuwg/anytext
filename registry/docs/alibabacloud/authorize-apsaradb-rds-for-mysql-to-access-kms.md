To use the Transparent Data Encryption (TDE) feature of ApsaraDB RDS, you must authorize RDS to access Key Management Service (KMS). This topic describes how to authorize RDS to access KMS in the Resource Access Management (RAM) console.

## Prerequisites

You are logged on to the RAM console with your Alibaba Cloud account.

## **Background information**

You can use the cloud encryption feature to ensure data security without the need to modify your business and applications. For more information about the cloud encryption feature for RDS instances that run different database engines, see the following documentation:

-   [Use the cloud disk encryption feature for RDS for MySQL](/help/en/rds/apsaradb-rds-for-mysql/configure-the-disk-encryption-feature-for-an-apsaradb-rds-for-mysql-instance)
    
-   [Use the cloud disk encryption feature for RDS for PostgreSQL](/help/en/rds/apsaradb-rds-for-postgresql/configure-disk-encryption-for-an-apsaradb-rds-for-postgresql-instance#section-ffo-jzy-q7z)
    
-   [Configure the cloud disk encryption feature for RDS for SQL Server](/help/en/rds/apsaradb-rds-for-sql-server/configure-disk-encryption-for-an-apsaradb-rds-for-sql-server-instance#concept-2054813)
    
-   [Use the cloud disk encryption feature for RDS for MariaDB](/help/en/rds/apsaradb-rds-for-mariadb/configure-the-cloud-disk-encryption-feature-for-an-apsaradb-rds-for-mariadb-instance)
    

## Create the AliyunRDSInstanceEncryptionRolePolicy

1.  Go to the [Policies](https://ram.console.alibabacloud.com/policies) page.
    
2.  On the Policies page, click **Create Policy**.
    
    **Note**
    
    A policy is a set of permissions that are defined by using a specific syntax. You can use policies to describe the authorized resource sets, authorized operation sets, and authorization conditions. For more information, see [Terms](/help/en/ram/terms#concept-ant-mt2-xdb).
    
3.  On the **JSON** tab, copy and paste the following code to the code editor:
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Action": [
                    "kms:List*",
                    "kms:DescribeKey",
                    "kms:TagResource",
                    "kms:UntagResource"
                ],
                "Resource": [
                    "acs:kms:*:*:*"
                ],
                "Effect": "Allow"
            },
            {
                "Action": [
                    "kms:Encrypt",
                    "kms:Decrypt",
                    "kms:GenerateDataKey"
                ],
                "Resource": [
                    "acs:kms:*:*:*"
                ],
                "Effect": "Allow",
                "Condition": {
                    "StringEqualsIgnoreCase": {
                        "kms:tag/acs:rds:instance-encryption": "true"
                    }
                }
            }
        ]
    }
    ```
    
4.  Click **OK**. On the dialog box that appears, configure the parameters described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Policy Name**
    
    The name of the policy. Enter **AliyunRDSInstanceEncryptionRolePolicy**.
    
    **Description**
    
    The description of the policy. Example: Authorize RDS to access KMS.
    
    **Tag**
    
    Add a tag for the new policy.
    

## Create and authorize a RAM role named AliyunRDSInstanceEncryptionDefaultRole

After you create the AliyunRDSInstanceEncryptionRolePolicy policy, you must create a RAM role and attach the policy to the RAM role. Then, RDS can access KMS.

1.  Go to the [Roles](https://ram.console.alibabacloud.com/roles) page.
    
2.  On the Roles page, click **Create Role**.
    
3.  On the page that appears, select **Cloud Service**. Then, select **ApsaraDB RDS** with the suffix of `rds.aliyuncs.com` from the **Principal Name** drop-down list and click **OK**.
    
4.  In the **Create Role** dialog box, set the **Role Name** parameter to AliyunRDSInstanceEncryptionDefaultRole and click **OK**.
    
5.  After the The Role has been created message appears, click Add Permissions to RAM Role.
    
    **Note**
    
    If you have closed the page on which the **The Role has been created** message appears, you can go to the [Roles](https://ram.console.alibabacloud.com/roles) page, find the **AliyunRDSInstanceEncryptionDefaultRole** role, and then click **Grant Permission** in the Actions column.
    
6.  In the **Grant Permission** panel, select the **AliyunRDSInstanceEncryptionRolePolicy** policy that you created to add the policy to the **Selected Policy** section.
    
7.  Click **Grant permissions**.
    

## (Optional) View a role ARN

Alibaba Cloud Resource Name (ARN) is the global resource descriptor of a RAM role. The ARN of a RAM role describes the resources that the RAM role can access. When you call an API operation to enable the cloud disk encryption feature, you must specify the ARN of a RAM role that has the permissions to access KMS. For more information, see [CreateDBInstance](/help/en/rds/api-create-an-instance#doc-api-Rds-CreateDBInstance).

1.  Go to the [Roles](https://ram.console.alibabacloud.com/roles) page.
    
2.  Find the required role and click the role name.
    
3.  In the upper-right corner of the page the appears, view the role ARN.
