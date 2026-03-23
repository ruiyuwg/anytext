You can create dynamic ApsaraDB RDS secrets and automatically rotate them on a schedule. This reduces the security risk of secret leakage. This topic describes how to create, delete, and restore dynamic ApsaraDB RDS secrets in the Key Management Service (KMS) console.

## Prerequisites

-   You have created an Alibaba Cloud ApsaraDB RDS instance. For more information, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb).
-   If a Resource Access Management (RAM) user or RAM role is used to manage secrets, grant the [AliyunKMSSecretAdminAccess](https://ram.console.alibabacloud.com/policies/AliyunKMSSecretAdminAccess/System/content) system policy to the RAM user or RAM role. This grants the following permissions:
    -   Use Secrets Manager features.
    -   Query ApsaraDB RDS instances and manage accounts.
    -   Create the service-linked role for managed ApsaraDB RDS secrets.

## Create a dynamic ApsaraDB RDS secret

1.  Log on to the [Key Management Service console](https://yundun.console.alibabacloud.com/?p=kms).
2.  In the Region drop-down list in the top-left corner of the page, select the region where your credentials are stored.
3.  In the navigation pane on the left, click **Secrets**.
4.  Click **Create Secret**.
5.  In the **Create Secret** dialog box, configure the following parameters and click **Next**.
    
    -   **Secret Type**: Select **Managed RDS Secret**.
    -   **Secret Name**: Enter a name for the secret.
    -   **Select RDS Instance**: Select an existing ApsaraDB RDS instance in your Alibaba Cloud account.
    -   **Set Secret Value**: Select a management method and set the secret value.
        -   **Dual-account management** (Recommended): This method is suitable for programmatic database access. It manages two accounts with the same permissions to ensure that program access is not interrupted during a password reset.
            -   Click the **One-click Creation and Authorization** tab. Configure the account name, select a database, and specify permissions.
                
                **Note** The one-click creation and authorization feature does not configure the new account immediately. The account is configured after you review and confirm the secret information.
                
            -   Click the **Import Existing Account** tab. Select a username and configure the password.
                
                **Note** Set the password to the one that corresponds to the user account of the ApsaraDB RDS instance. If the imported account and password do not match, you can obtain the correct account and password after the secret is first rotated.
                
        -   **Single-account management**: This method is suitable for managing privileged accounts or operations accounts. When the password is reset, the current version of the secret may be temporarily unavailable.
            -   Click the **One-click Creation and Authorization** tab. Configure the account name and select an account type.
                
                You can select **Standard Account** or **Privileged Account**. If you select **Standard Account**, you must also select a database and specify permissions.
                
            -   Click the **Import Existing Account** tab. Select a username and configure the password.
    -   **Description**: Enter a description for the secret.
    
6.  In the **Create Secret** dialog box, select **Enable Automatic Rotation**, configure the **Rotation Interval**, and then click **Next**.
    
    **Note** If you do not need to automatically rotate the ApsaraDB RDS secret, select **Disable Automatic Rotation**.
    
7.  In the **Create Secret** dialog box, review the secret configuration and click **OK**.
8.  In the **Creation Successful** dialog box, click **Close**.

## Delete a dynamic ApsaraDB RDS secret

Before you delete an ApsaraDB RDS secret, make sure that it is no longer in use.

You can schedule the deletion of a dynamic ApsaraDB RDS secret or delete it immediately.

1.  In the **Actions** column of the target ApsaraDB RDS secret, choose .
2.  In the **Delete Secret** dialog box, select a deletion method and click **OK**.
    -   Select **Schedule Deletion** and set the **Retention Period (7-30 days)**. The system deletes the secret after the retention period ends.
        
        During the retention period, you can restore the secret to cancel the deletion. For more information, see [Restore a dynamic ApsaraDB RDS secret](#section-orf-p66-q3p).
        
    -   Select **Delete Immediately**. The system deletes the secret immediately.

## Restore a dynamic ApsaraDB RDS secret

If you chose to schedule the deletion of a dynamic ApsaraDB RDS secret, you can restore it during the retention period to cancel the deletion. After the secret is restored, you can use it normally.

1.  In the **Actions** column of the target ApsaraDB RDS secret, choose .
2.  In the **Restore Secret** dialog box, click **OK**.
