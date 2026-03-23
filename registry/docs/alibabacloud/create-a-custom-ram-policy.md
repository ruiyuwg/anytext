By default, Resource Access Management (RAM) users and RAM roles do not have permissions to call the OpenAPI of Alibaba Cloud services. Grant system policies or custom policies to RAM users or RAM roles before they can call Container Service for Kubernetes (ACK) OpenAPI operations. This topic describes how to grant cluster-level and cloud resource-level permissions to RAM users and RAM roles.

## **Grant permissions using system policies**

System policies are predefined permission policies that grant read or write access to global resources. Use system policies for quick authorization when a RAM user or RAM role requires operations management permissions on all clusters under your Alibaba Cloud account.

**Important**

Full-access permissions in system policies pose high security risks. Grant them with caution.

**Common system policies**

**System policy name**

**Description**

AliyunCSFullAccess

Grants a RAM user or RAM role access to all OpenAPI operations of ACK.

**Note**

This system policy covers only RAM authorization for ACK. To perform O&M on applications in an ACK cluster, you must also configure RBAC authorization. For more information, see [RBAC authorization](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/authorization-overview/#section-j5k-rqk-6va).

AliyunVPCReadOnlyAccess

Lets a RAM user or RAM role select a specific VPC when creating a cluster.

AliyunECSReadOnlyAccess

Lets a RAM user or RAM role add existing nodes to a cluster or view node details.

AliyunContainerRegistryFullAccess

Lets a RAM user or RAM role globally manage business images within an Alibaba Cloud account.

AliyunLogReadOnlyAccess

Lets a RAM user or RAM role select an existing Log Service project to store audit logs when creating a cluster, or view configuration checks for a specific cluster.

AliyunAHASReadOnlyAccess

Lets a RAM user or RAM role use the cluster topology feature.

AliyunRAMFullAccess

Lets a RAM user or RAM role manage global authorization within an Alibaba Cloud account.

AliyunYundunSASReadOnlyAccess

Lets a RAM user or RAM role view runtime security monitoring for a specific cluster.

AliyunARMSReadOnlyAccess

Lets a RAM user or RAM role view the monitoring status of the Prometheus plug-in for a cluster.

AliyunKMSReadOnlyAccess

Lets a RAM user or RAM role enable encryption at rest for secrets when creating a Pro cluster.

AliyunESSReadOnlyAccess

Lets a RAM user or RAM role perform node pool operations, such as viewing, editing, and scaling.

**Note**

An Alibaba Cloud account has full administrative permissions over all resources in the account. Alternatively, you can create a RAM user and grant the `AdministratorAccess` permission to designate it as an account administrator. This administrator can manage all cloud resources within the account. For more information, see [Create a RAM user as an account administrator](/help/en/ram/create-admin-user).

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Identities** > **Users**.
    
3.  On the **Users** page, find the required RAM user, and click **Add Permissions** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6555724171/p794639.png)
    
    You can also select multiple RAM users and click **Add Permissions** in the lower part of the page to grant permissions to the RAM users at a time.
    
4.  In the **Grant Permissions** panel, grant permissions to the RAM user.
    
    1.  Configure the **Resource Scope** parameter.
        
        -   **Account**: The authorization takes effect on the current Alibaba Cloud account.
            
        -   **Resource Group**: The authorization takes effect on a specific resource group.
            
            **Important**
            
            If you select Resource Group for the Resource Scope parameter, make sure that the required cloud service supports resource groups. For more information, see [Services that work with Resource Group](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group#concept-flc-p3m-4fb). For more information about how to grant permissions on a resource group, see [Use a resource group to restrict a RAM user to managing only specific ECS instances](/help/en/ram/use-cases/use-a-resource-group-to-manage-an-ecs-instance).
            
    2.  Configure the Principal parameter.
        
        The principal is the RAM user to which you want to grant permissions. The current RAM user is automatically selected.
        
    3.  Select the system policies to grant.
        
    4.  Click **Grant Permissions**.
        
    
5.  Click **Close**.
    

## Grant permissions using custom policies

Custom policies provide fine-grained access control over cloud resources. Use custom policies when you need to:

-   Restrict permissions to specific clusters
    
-   Implement [API-level permission control](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-ram) for SDK-based development
    
-   Control access based on specific cluster IDs
    

> Before you create a custom policy, familiarize yourself with policy language structure and syntax. For more information, see [Policy elements](/help/en/ram/policy-elements).

### **Step 1: Create a custom policy**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM user who has administrative rights.
    
2.  In the left-side navigation pane, choose **Permissions** > **Policies**.
    
3.  On the **Policies** page, click **Create Policy**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0059564371/p886177.png)
    
4.  On the **Create Access Policy** page, click the **Script Editor** tab and enter the policy document.
    
    > Replace `YOUR_CLUSTER_ID` with the ID of the target cluster.
    
    ```json
    {
        "Statement": [
            {
                "Action": [
                    "cs:Get*",
                    "cs:List*",
                    "cs:Describe*",
                    "cs:ScaleCluster",
                    "cs:DeleteCluster"
                ],
                "Effect": "Allow",
                "Resource": [
                    "acs:cs:*:*:cluster/YOUR_CLUSTER_ID"
                ]
            }
        ],
        "Version": "1"
    }
    ```
    
    **Parameter**
    
    **Description**
    
    Action
    
    The permissions to grant. All actions support the wildcard character (\*).
    
    Resource
    
    -   **Grant permissions to a single** **cluster**
        
        ```json
        "Resource": [
             "acs:cs:*:*:cluster/YOUR_CLUSTER_ID"
         ]
        ```
        
    -   **Grant permissions to multiple clusters**
        
        ```json
        "Resource": [
             "acs:cs:*:*:cluster/YOUR_CLUSTER_ID_1",
             "acs:cs:*:*:cluster/YOUR_CLUSTER_ID_2"
         ]
        ```
        
    -   **Grant permissions to all clusters**
        
        ```
        "Resource": [
             "*"
         ]
        ```
        
    
5.  On the **Create Policy** page, click **OK**.
    
6.  In the **Create Policy** dialog box, enter a **Policy Name** and **Description**, and then click **OK**.
    

### **Step 2: Grant the custom policy to a RAM user or RAM role**

The procedure for granting a custom policy is the same as for granting a system policy. When you select a policy, choose the custom policy that you created. For more information, see [Grant permissions using system policies](#f46e3f717cu8d).

## Custom policy authorization examples

### **Example 1: Grant read-only permissions to a specific cluster**

```json
{
    "Statement": [
        {
            "Action": [
                "cs:Get*",
                "cs:List*",
                "cs:Describe*"
            ],
            "Effect": "Allow",
            "Resource": [
                "acs:cs:*:*:cluster/YOUR_CLUSTER_ID"
            ]
        }
    ],
    "Version": "1"
}
```

### Example 2: Grant read permissions to a specific OSS bucket

> Replace `YOUR_OSS_BUCKET_NAME` with the name of the target OSS bucket.

```json
{
    "Version": "1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                      "oss:ListBuckets",
                      "oss:GetBucketStat",
                      "oss:GetBucketInfo",
                      "oss:GetBucketTagging",
                      "oss:GetBucketAcl" 
                      ],    
            "Resource": "acs:oss:*:*:*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "oss:ListObjects",
                "oss:GetBucketAcl"
            ],
            "Resource": "acs:oss:*:*:YOUR_OSS_BUCKET_NAME"
        },
        {
            "Effect": "Allow",
            "Action": [
                "oss:GetObject",
                "oss:GetObjectAcl"
            ],
            "Resource": "acs:oss:*:*:YOUR_OSS_BUCKET_NAME/*"
        }
    ]
}
```

### **Example 3: Grant permissions for OpenAPI operations that do not support cluster-level restrictions**

Some OpenAPI operations, such as `DescribeEvents`, do not support cluster-level authorization. Do not specify a cluster ID in the `Resource` element for these operations.

**RAM access policy before modification**

**RAM access policy after modification**

```json
{
    "Statement": [
        {
            "Action": [
                "cs:Get*",
                "cs:List*",
                "cs:Describe*"
            ],
            "Effect": "Allow",
            "Resource": [
                "acs:cs:*:*:cluster/YOUR_CLUSTER_ID"
            ]
        }
    ],
    "Version": "1"
}
```

```json
{
    "Statement": [
        {
            "Action": [
                "cs:DescribeEvents"
            ],
            "Effect": "Allow",
            "Resource": [
              "*"
            ]
        },
        {
            "Action": [
                "cs:Get*",
                "cs:List*",
                "cs:Describe*"
            ],
            "Effect": "Allow",
            "Resource": [
                "acs:cs:*:*:cluster/YOUR_CLUSTER_ID"
            ]
        }
    ],
    "Version": "1"
}
```

## **What to do next**

-   After you grant RAM authorization, configure RBAC authorization to access Kubernetes resources within the cluster. For more information, see [Use RBAC to authorize operations on resources in a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343).
    
-   To improve the security of applications in an ACK cluster that access other Alibaba Cloud services, configure RAM permissions for a ServiceAccount to isolate pod permissions using RRSA. For more information, see [Use RRSA to configure RAM permissions for a ServiceAccount and isolate pod permissions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services).
    
-   For more information about fine-grained RAM authorization, see [Implement fine-grained permission management using tags](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-labels-to-enforce-fine-grained-access-control) and [Manually converge the permissions of the Worker RAM role for an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manually-converges-the-worker-ram-role-permissions-of-the-ack-managed-version-cluster).
    
-   For help with authorization issues, see [Authorization management FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-authorization-management#task-1546248).
