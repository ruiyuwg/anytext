AliyunEMRSparkJobRunDefaultRolePolicy is the authorization policy dedicated to a service role. In most cases, when a service role is created, the policy is attached to the service role. Then, the service role is authorized to access other cloud services. This policy is updated by the relevant Alibaba Cloud service. Do not attach this policy to a RAM identity other than a service role.

## **Policy details**

-   Type: service system policy
    
-   Creation time: 10:34:50 on September 14, 2024
    
-   Update time: 08:59:00 on January 13, 2026
    
-   Current version: v15
    

## **Policy content**

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
      "Resource": "*",
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
        "dlf:RollbackTable",
        "dlf:AlterView",
        "dlf:ListViews",
        "dlf:CreateView",
        "dlf:GetView",
        "dlf:DropView",
        "dlf:RenameView",
        "dlf:ListFunctions",
        "dlf:CreateFunction",
        "dlf:GetFunction",
        "dlf:AlterFunction",
        "dlf:DropFunction",
        "dlf:GetIcebergNamespace",
        "dlf:GetIcebergTable",
        "dlf:ListBranches",
        "dlf:CreateBranch",
        "dlf:DropBranch",
        "dlf:ForwardBranch"
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
      "Action": [
        "nas:DescribeAccessPoints",
        "nas:DescribeFileSystems"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Effect": "Allow",
      "Action": "odps:ActOnBehalfOfAnotherUser",
      "Resource": [
        "acs:odps:*:*:users/default/aliyun/*",
        "acs:odps:*:*:users/default/ramuser/*",
        "acs:odps:*:*:users/default/ramrole/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "kms:List*",
        "kms:DescribeKey",
        "kms:GenerateDataKey",
        "kms:Decrypt"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "dlf-auth:ActOnBehalfOfAnotherUser",
      "Resource": "*"
    }
  ]
}
```

## **References**

-   [Policy elements](/help/en/ram/policy-elements)
    
-   [Normal service roles](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service)
