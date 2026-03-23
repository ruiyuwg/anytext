When you activate Container Service for Kubernetes (ACK), you must assign RAM roles to ACK. ACK assumes these roles to access other Alibaba Cloud services such as Elastic Compute Service (ECS), Object Storage Service (OSS), File Storage NAS (NAS), and Server Load Balancer (SLB) on your behalf. These roles enable ACK to create clusters, manage infrastructure, and store log files.

ACK uses two categories of roles:

-   **Quick authorization roles**: 12 roles assigned through RAM Quick Authorization when you first activate ACK. These roles cover cluster management, networking, storage, monitoring, and logging.
    
-   **Optional roles**: 9 roles that you assign manually for specific features such as auto scaling, backup, or edge computing.
    

## Quick authorization roles

The following roles are assigned to ACK through [RAM Quick Authorization](https://ram.console.alibabacloud.com/role/authorize?request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Fcs.console.alibabacloud.com%2F%22%2C%22Services%22%3A%5B%7B%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunCSManagedLogRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedLogRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedCmsRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedCmsRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedCsiRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedCsiRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedCsiProvisionerRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedCsiProvisionerRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedCsiPluginRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedCsiPluginRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSServerlessKubernetesRole%22%2C%22TemplateId%22%3A%22ServerlessKubernetes%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSKubernetesAuditRole%22%2C%22TemplateId%22%3A%22KubernetesAudit%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedNetworkRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedNetworkRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSDefaultRole%22%2C%22TemplateId%22%3A%22Default%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedKubernetesRole%22%2C%22TemplateId%22%3A%22ManagedKubernetes%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedArmsRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedArmsRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCISDefaultRole%22%2C%22TemplateId%22%3A%22AliyunCISDefaultRole%22%7D%5D%2C%22Service%22%3A%22CS%22%7D%5D%7D) when you use ACK for the first time.

### Cluster management roles

**Role**

**Description**

**Policy details**

AliyunCSDefaultRole

ACK assumes this role to access your resources in other cloud services when ACK manages clusters. These cloud services include ECS, Virtual Private Cloud (VPC), SLB, Resource Orchestration Service (ROS), and Auto Scaling.

[AliyunCSDefaultRolePolicy](/help/en/ram/developer-reference/aliyuncsdefaultrolepolicy)

AliyunCSManagedKubernetesRole

An ACK managed cluster or ACK Edge cluster assumes this role to access other cloud services such as ECS, VPC, SLB, and Container Registry.

[AliyunCSManagedKubernetesRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagedkubernetesrolepolicy)

AliyunCSServerlessKubernetesRole

An ACK Edge cluster or ACK Serverless cluster assumes this role to access your resources in other cloud services such as ECS, VPC, SLB, and Private Zone.

[AliyunCSServerlessKubernetesRolePolicy](/help/en/ram/developer-reference/aliyuncsserverlesskubernetesrolepolicy)

### Networking role

**Role**

**Description**

**Policy details**

AliyunCSManagedNetworkRole

The network component of an ACK managed cluster, ACK Edge cluster, or ACK Serverless cluster assumes this role to access your resources in other cloud services such as ECS and VPC.

[AliyunCSManagedNetworkRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagednetworkrolepolicy)

### Storage roles

**Role**

**Description**

**Policy details**

AliyunCSManagedCsiRole

The storage component of an ACK managed cluster, ACK Edge cluster, or ACK Serverless cluster assumes this role to access your resources in other cloud services such as ECS, NAS, and OSS.

[AliyunCSManagedCsiRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagedcsirolepolicy)

AliyunCSManagedCsiProvisionerRole

The storage component (csi-provisioner) of an ACK managed cluster, ACK Edge cluster, or ACK Serverless cluster assumes this role to access your resources in ECS, NAS, and OSS.

[AliyunCSManagedCsiProvisionerRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagedcsiprovisionerrolepolicy)

AliyunCSManagedCsiPluginRole

The CSI storage component of an ACK managed cluster, ACK Edge cluster, or ACK Serverless cluster assumes this role to access your resources in ECS.

[AliyunCSManagedCsiPluginRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagedcsipluginrolepolicy)

### Monitoring and logging roles

**Role**

**Description**

**Policy details**

AliyunCSKubernetesAuditRole

The audit feature of an ACK managed cluster, ACK Edge cluster, or ACK Serverless cluster assumes this role to access your resources in Simple Log Service (SLS).

[AliyunCSKubernetesAuditRolePolicy](/help/en/ram/developer-reference/aliyuncskubernetesauditrolepolicy)

AliyunCSManagedCmsRole

The monitoring component of an ACK managed cluster, ACK Edge cluster, or ACK Serverless cluster assumes this role to access your resources in other cloud services such as CloudMonitor and SLS.

[AliyunCSManagedCmsRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagedcmsrolepolicy)

AliyunCSManagedLogRole

The log component of an ACK managed cluster, ACK Edge cluster, or ACK Serverless cluster assumes this role to access your resources in SLS.

[AliyunCSManagedLogRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagedlogrolepolicy)

AliyunCSManagedArmsRole

The Application Real-Time Monitoring Service (ARMS) component of an ACK managed cluster, ACK Edge cluster, or ACK Serverless cluster assumes this role to access your resources in ARMS.

[AliyunCSManagedArmsRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagedarmsrolepolicy)

### Diagnostics role

**Role**

**Description**

**Policy details**

AliyunCISDefaultRole

ACK Container Intelligence Service assumes this role to access your resources in other cloud services such as ECS, VPC, and SLB to provide diagnostic and inspection services.

[AliyunCISDefaultRolePolicy](/help/en/ram/developer-reference/aliyuncisdefaultrolepolicy)

## Optional roles

**Important**

To assign optional roles, you must use an Alibaba Cloud account or a RAM user with administrator permissions.

**Role**

**Description**

**Policy details**

AliyunCSManagedAcrRole

The password-free image pulling plug-in of an ACK managed cluster, ACK Edge cluster, or ACK Serverless cluster assumes this role to access your resources in Container Registry.

[AliyunCSManagedAcrRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagedacrrolepolicy)

AliyunCSManagedNlcRole

The managed node pool controller of an ACK managed cluster or ACK Edge cluster assumes this role to access your node pool resources in ECS and ACK.

[AliyunCSManagedNlcRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagednlcrolepolicy)

AliyunCSManagedAutoScalerRole

The auto scaling component of an ACK managed cluster, ACK Edge cluster, or ACK Serverless cluster assumes this role to access your resources in Auto Scaling and ECS.

[AliyunCSManagedAutoScalerRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagedautoscalerrolepolicy)

AliyunCSManagedSecurityRole

The disk encryption component and the credential management component of an ACK managed cluster, ACK Edge cluster, or ACK Serverless cluster assume this role to access your resources in Key Management Service (KMS).

[AliyunCSManagedSecurityRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagedsecurityrolepolicy)

AliyunCSManagedCostRole

The cost analysis component of an ACK managed cluster, ACK Edge cluster, or ACK Serverless cluster assumes this role to access your resources in API, ECS, and Elastic Container Instance.

[AliyunCSManagedCostRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagedcostrolepolicy)

AliyunCSManagedNimitzRole

The network component of an ACK Lingjun cluster assumes this role to access your resources in Lingjun AI Computing Service.

[AliyunCSManagedNimitzRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagednimitzrolepolicy)

AliyunCSManagedBackupRestoreRole

The backup center component of an ACK managed cluster, ACK Edge cluster, or ACK Serverless cluster assumes this role to access your resources in Cloud Backup service and OSS.

[AliyunCSManagedBackupRestoreRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagedbackuprestorerolepolicy)

AliyunCSManagedEdgeRole

The control component of an ACK Edge cluster assumes this role to access your resources in Smart Access Gateway (SAG), VPC, and Cloud Enterprise Network (CEN).

[AliyunCSManagedEdgeRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagededgerolepolicy)

AliyunOOSLifecycleHook4CSRole

CloudOps Orchestration Service (OOS) assumes this role to access your resources in ACK, ECS, and PolarDB.

See the following inline policy.

**AliyunOOSLifecycleHook4CSRole inline policy**

```
{
    "Version": "1",
    "Statement": [
        {
            "Action": [
                "cs:DeleteClusterNodes",
                "cs:DescribeClusterNodes",
                "cs:DescribeTaskInfo"
            ],
            "Resource": [
                "*"
            ],
            "Effect": "Allow"
        },
        {
            "Action": [
                "ess:CompleteLifecycleAction"
            ],
            "Resource": [
                "*"
            ],
            "Effect": "Allow"
        },
        {
            "Action": [
                "polardb:DescribeDBClusterAccessWhitelist",
                "polardb:ModifyDBClusterAccessWhitelist"
            ],
            "Resource": [
                "*"
            ],
            "Effect": "Allow"
        },
        {
            "Action": [
                "ecs:DescribeInstances"
            ],
            "Resource": [
                "*"
            ],
            "Effect": "Allow"
        }
    ]
}
```
