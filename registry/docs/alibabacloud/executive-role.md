When a task in an EMR Serverless Spark workspace calls other Alibaba Cloud services, such as Object Storage Service (OSS) and Data Lake Formation (DLF), an execution role is used for permission authentication. When you create a workspace, you can use either the default execution role or a custom role.

## **Use cases**

During task execution, the execution role assumes a specified identity to call different resources or services. This identity is used for authentication and ActionTrail audits. The following scenarios are supported:

-   Access OSS files
    
    During task execution, the execution role accesses and manages files stored in Alibaba Cloud OSS.
    
-   Read and write DLF metadata
    
    If access control is enabled for DLF, the execution role assumes different identities based on the task type:
    
    -   Data development: The execution role assumes the identity of the Alibaba Cloud account or RAM user that submits the task.
        
    -   Livy Gateway: The execution role assumes the identity of the token creator.
        
-   Read and write MaxCompute data
    
    To read and write MaxCompute data, the execution role assumes the identity of the Alibaba Cloud account or RAM user that submitted the task. This identity is used for authentication and ActionTrail audits.
    

## **Precautions**

After a workspace is created, the execution role cannot be changed.

## **Use the default execution role**

When you create a workspace, the system uses the default execution role **AliyunEMRSparkJobRunDefaultRole** if you do not modify the **Execution Role** configuration item.

The default execution role has the following properties:

-   Role name: **AliyunEMRSparkJobRunDefaultRole**.
    
-   Associated policy: This role is attached to the system policy [AliyunEMRSparkJobRunDefaultRolePolicy](/help/en/ram/developer-reference/aliyunemrsparkjobrundefaultrolepolicy), which grants access permissions to OSS, DLF, and MaxCompute.
    
-   Maintenance: This policy is created and maintained by Alibaba Cloud and is automatically updated to meet service requirements.
    

**Important**

Do not edit or delete the default execution role **AliyunEMRSparkJobRunDefaultRole**. Otherwise, workspace creation or task execution may fail.

## **Use a custom execution role**

To control the permissions for an execution role, you can select a custom role for the **Execution Role** parameter when you create a workspace. Follow the steps below to configure a custom execution role for password-free access to other resources, such as OSS and DLF, within the same account.

**Note**

The following access policy is an example for configuring a custom role. Note that the access policy for a custom execution role is static and is not automatically updated by Alibaba Cloud. To ensure your tasks run correctly, we recommend that you periodically check and update the access policy. You can refer to the `AliyunEMRSparkJobRunDefaultRolePolicy` access policy of the default `AliyunEMRSparkJobRunDefaultRole` execution role to retrieve the latest required permissions.

### Procedure

1.  Create an access policy.
    
    1.  Go to the Create Custom Policy page.
        
        1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
            
        2.  In the left-side navigation pane, choose **Permissions** > **Policies**.
            
        3.  On the **Policies** page, click **Create Policy**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0059564371/p886177.png)
            
    2.  On the **Create Policy** page, click the **Json** tab.
        
    3.  Enter the policy document and click **OK**.
        
        ```
        {
          "Version": "1",
          "Statement": [
            {
              "Action": [
                "oss:ListBuckets",
                "oss:PutObject",
                "oss:ListObjectsV2",
                "oss:ListObjects",
                "oss:GetObject",
                "oss:CopyObject",
                "oss:DeleteObject",
                "oss:DeleteObjects",
                "oss:RestoreObject",
                "oss:CompleteMultipartUpload",
                "oss:ListMultipartUploads",
                "oss:AbortMultipartUpload",
                "oss:UploadPartCopy",
                "oss:UploadPart",
                "oss:GetBucketInfo",
                "oss:PostDataLakeStorageFileOperation",
                "oss:PostDataLakeStorageAdminOperation",
                "oss:GetBucketVersions",
                "oss:ListObjectVersions",
                "oss:DeleteObjectVersion"
              ],
              "Resource": [
                "acs:oss:*:*:serverless-spark-test-resources/*",
                "acs:oss:*:*:serverless-spark-test-resources"
              ],
              "Effect": "Allow"
            },
            {
              "Action": [
                "dlf:AlterDatabase",
                "dlf:AlterTable",
                "dlf:ListCatalogs",
                "dlf:ListDatabases",
                "dlf:ListFunctions",
                "dlf:ListFunctionNames",
                "dlf:ListTables",
                "dlf:ListTableNames",
                "dlf:ListIcebergNamespaceDetails",
                "dlf:ListIcebergTableDetails",
                "dlf:ListIcebergSnapshots",
                "dlf:CreateDatabase",
                "dlf:Get*",
                "dlf:DeleteDatabase",
                "dlf:DropDatabase",
                "dlf:DropTable",
                "dlf:CreateTable",
                "dlf:CommitTable",
                "dlf:UpdateTable",
                "dlf:DeleteTable",
                "dlf:ListPartitions",
                "dlf:ListPartitionNames",
                "dlf:CreatePartition",
                "dlf:BatchCreatePartitions",
                "dlf:UpdateTableColumnStatistics",
                "dlf:DeleteTableColumnStatistics",
                "dlf:UpdatePartitionColumnStatistics",
                "dlf:DeletePartitionColumnStatistics",
                "dlf:UpdateDatabase",
                "dlf:BatchCreateTables",
                "dlf:BatchDeleteTables",
                "dlf:BatchUpdateTables",
                "dlf:BatchGetTables",
                "dlf:BatchUpdatePartitions",
                "dlf:BatchDeletePartitions",
                "dlf:BatchGetPartitions",
                "dlf:DeletePartition",
                "dlf:CreateFunction",
                "dlf:DeleteFunction",
                "dlf:UpdateFunction",
                "dlf:ListPartitionsByFilter",
                "dlf:DeltaGetPermissions",
                "dlf:UpdateCatalogSettings",
                "dlf:CreateLock",
                "dlf:UnLock",
                "dlf:AbortLock",
                "dlf:RefreshLock",
                "dlf:ListTableVersions",
                "dlf:CheckPermissions",
                "dlf:RenameTable",
                "dlf:RollbackTable"
              ],
              "Resource": "*",
              "Effect": "Allow"
            },
            {
              "Action": [
                "dlf-dss:CreateDatabase",
                "dlf-dss:CreateFunction",
                "dlf-dss:CreateTable",
                "dlf-dss:DropDatabase",
                "dlf-dss:DropFunction",
                "dlf-dss:DropTable",
                "dlf-dss:DescribeCatalog",
                "dlf-dss:DescribeDatabase",
                "dlf-dss:DescribeFunction",
                "dlf-dss:DescribeTable",
                "dlf-dss:AlterDatabase",
                "dlf-dss:AlterFunction",
                "dlf-dss:AlterTable",
                "dlf-dss:ListCatalogs",
                "dlf-dss:ListDatabases",
                "dlf-dss:ListTables",
                "dlf-dss:ListFunctions",
                "dlf-dss:CheckPermissions"
              ],
              "Resource": "*",
              "Effect": "Allow"
            },
            {
              "Effect": "Allow",
              "Action": "dlf-auth:ActOnBehalfOfAnotherUser",
              "Resource": "*"
            }
          ]
        }
        ```
        
    4.  Enter a **Policy Name** (for example, test-serverless-spark) and **Description** for the access policy, and then click **OK**.
        
        The following elements are included in the policy:
        
        -   `Action`: The operation that can be performed on a resource. In this example, permissions to read data from and query directories in OSS and DLF are granted.
            
        -   `Resource`: The object on which the authorization is performed. In this example, permissions are granted to access all objects in DLF and all content in the OSS bucket named serverless-spark-test-resources. You must replace `serverless-spark-test-resources` with the name of your OSS bucket.
            
        
        For more information about the basic elements of an access policy, see [Basic elements of an access policy](/help/en/ram/policy-elements#concept-xg5-51g-xdb).
        
2.  Create a RAM role.
    
    1.  In the navigation pane, choose **Identitys** > **Roles**.
        
    2.  On the **Roles** page, click **Create Role**.
        
    3.  Create a RAM role.
        
        1.  In the **Create Role** panel, configure the following parameters and click **OK**.
            
            **Parameter**
            
            **Description**
            
            **Principal Type**
            
            Select **Cloud Service**.
            
            **Principal Name**
            
            spark.emr-serverless.aliyuncs.com
            
        2.  Enter a **Role Name** (for example, test-serverless-spark-jobrun) and click **OK**.
            
3.  Grant permissions to the RAM role.
    
    1.  On the **Roles** page, find the role that you created and click **Grant Permission** in the **Actions** column.
        
    2.  In the **Grant Permissions** panel, select **Custom Policy** and add the access policy that you created.
        
    3.  Click **OK**.
        
    4.  Click **Close**.
        
4.  Create a workspace and access external resources.
    
    1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the navigation pane, choose **EMR Serverless** > **Spark**.
        
    3.  Click **Create Workspace** and configure the following parameters. For more information about the parameters, see [Create a workspace](/help/en/emr/emr-serverless-spark/getting-started/create-a-workspace).
        
        -   **Workspace Directory**: Select an OSS path to which the RAM role that you created has read and write permissions.
            
        -   **Execution Role**: Select the name of the RAM role that you created (for example, test-serverless-spark-jobrun).
            
    4.  After the workspace is created, run a batch job to verify the permissions. For more information, see [Quick start for JAR development](/help/en/emr/emr-serverless-spark/getting-started/getting-started-with-jar-task-development).
        
        -   If you upload a file to an authorized OSS bucket, the task runs as expected.
            
        -   If you upload a file to an unauthorized OSS bucket, the task fails and an error message indicates that you do not have permission to access the OSS path.
            

### **Other policy examples**

#### **Access MaxCompute data**

Add the following access policy to the execution role.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "odps:ActOnBehalfOfAnotherUser",
      "Resource": [
        "acs:odps:*:*:users/default/aliyun/*",
        "acs:odps:*:*:users/default/ramuser/*",
        "acs:odps:*:*:users/default/ramrole/*"
      ]
    }
  ]
}
```

#### **Access OSS buckets for which KMS is enabled**

Add the following access policy to the execution role.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "kms:List*",
        "kms:DescribeKey",
        "kms:GenerateDataKey",
        "kms:Decrypt"
      ],
      "Resource": "*"
    }
  ]
}
```

## **References**

-   To access OSS resources that belong to different Alibaba Cloud accounts, see [How do I access OSS resources across Alibaba Cloud accounts?](/help/en/emr/emr-serverless-spark/support/faq#393f8920abar9).
    
-   For common examples of RAM policies, see [Common examples of RAM policies](/help/en/oss/user-guide/common-examples-of-ram-policies).
