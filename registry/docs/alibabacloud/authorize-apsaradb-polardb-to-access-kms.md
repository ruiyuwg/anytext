To use the Transparent Data Encryption (TDE) feature for a PolarDB cluster, you must authorize the cluster to access Key Management Service (KMS). This topic describes how to authorize your PolarDB cluster to access KMS by using the RAM console.

## Prerequisites

You are logged on to the RAM console with your Alibaba Cloud account.

## Create a permission policy named AliyunRDSInstanceEncryptionRolePolicy

1.  Go to the [Policies](https://ram.console.alibabacloud.com/policies) page.
    
2.  Click **Create Policy**.
    
    **Note**
    
    A policy is a set of permissions that are described by using a specific syntax. You can use policies to describe the authorized resource sets, authorized operation sets, and authorization conditions. For more information, see [Terms](/help/en/ram/terms#concept-ant-mt2-xdb).
    
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
    
4.  Click **Next to edit policy information** and configure the following parameters:
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    The name of the policy. Enter **AliyunRDSInstanceEncryptionRolePolicy**.
    
    **Description**
    
    The information that is used to identify the policy. Example: Allows PolarDB to access to KMS.
    
5.  Click **OK**.
    

## Create and authorize a RAM role named AliyunRDSInstanceEncryptionDefaultRole

After you create the AliyunRDSInstanceEncryptionRolePolicy permission policy, you must create a RAM role and attach the permission policy to the RAM role. Then, PolarDB can access KMS.

1.  Go to the [RAM Roles](https://ram.console.alibabacloud.com/roles) page.
    
2.  Click **Create Role**.
    
3.  On the Create Role page, select **Alibaba Cloud Service** and click **Next**.
    
4.  Configure the following parameters and click **OK**:
    
    **Parameter**
    
    **Description**
    
    **Role Type**
    
    Select **Normal Service Role**.
    
    **Role Name**
    
    The name of the RAM role. Enter **AliyunRDSInstanceEncryptionDefaultRole**.
    
    **Remarks**
    
    The information that is used to identify the RAM role.
    
    **Select Trusted Service**
    
    The trusted service of the RAM role. Select **RDS**.
    
5.  After the **The Role has been created** message appears, click **Add Permissions to RAM Role**.
    
    **Note**
    
    If you have closed the panel in which the message **The Role has been created** appears, you can go to the [Roles](https://ram.console.alibabacloud.com/roles) page, find the **AliyunRDSInstanceEncryptionDefaultRole** role, and click **Grant Permissions** in the Actions column.
    
6.  In the **Grant Permissions** panel, click the **AliyunRDSInstanceEncryptionRolePolicy** policy to add the policy to the **Selected** section.
    
7.  Click **Grant Permissions**.
