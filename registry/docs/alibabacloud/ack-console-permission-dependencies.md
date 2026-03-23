Container Service for Kubernetes (ACK) depends on other Alibaba Cloud services. If you use a Resource Access Management (RAM) user to access the ACK console, you must configure the required cloud service permissions before you can use the RAM role as expected. This topic describes the cloud services and permissions required for RAM users to use different features in the ACK console.

**Important**

-   The following section includes only the permissions to manage other cloud services on which ACK depends. You must also grant the AliyunCSFullAccess permission or the required custom permissions to the RAM user to manage the ACK console. For more information about how to grant permissions, see [Use RAM to authorize access to clusters and cloud resources](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-custom-ram-policy).
    
-   For the cloud services required for the ACK cluster, you need to only grant the read-only permissions. If it is not required, you do not need to grant the creation permissions. For example, if you want to **use an existing** Virtual private cloud (VPC) when you create a cluster, you need to only grant the read-only permissions on the VPC.
    
-   After you configure the permissions for the cloud services on which the RAM user depends, you must continue to [use RBAC to manage the operation permissions on the resources in a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles). This way, the RAM user can manage the resources of the cluster.
    

**Feature**

**Dependency**

**System permission**

**Custom permission**

**Action**

**Resource**

**Permissions managed in the console**

**Apply for more quotas**

Quota Center

AliyunQuotasFullAccess

quotas:ListProductQuotas

\*

Queries the quotas of a specific Alibaba Cloud service.

quotas:ListProductQuotaDimensions

\*

Queries the quota dimensions that are supported by an Alibaba Cloud service.

quotas:ListProductDimensionGroups

\*

Queries the dimension groups of a specific Alibaba Cloud service.

quotas:ListDependentQuotas

\*

Queries the quotas on which a quota depends.

quotas:CreateQuotaApplication

\*

Submits an application to increase a quota.

**Create a cluster**

Expenses and costs

AliyunBSSFullAccess / AliyunBSSReadOnlyAccess

bssapi:GetPayAsYouGoPrice

\*

Queries the product pricing.

VPC

AliyunVPCFullAccess / AliyunVPCReadOnlyAccess

vpc:DescribeVSwitches

\*

**Cluster Configurations** > **Network Settings** > **VPC** > **Select Existing VPC**

vpc:DescribeVpcs

\*

**Cluster Configurations** > **Network Settings** > **vSwitch** > **Select Existing vSwitch**

AliyunVPCFullAccess

vpc:CreateVpc

\*

**Cluster Configurations** > **Network Settings** > **VPC** > **Create VPC**

vpc:CreateVSwitch

\*

**Cluster Configurations** > **Network Settings** > **vSwitch** > **Create vSwitch**

Server Load Balancer (SLB)

AliyunSLBFullAccess / AliyunSLBReadOnlyAccess

slb:DescribeLoadBalancers

\*

**Cluster Configurations** > **Network Settings** > **Access to API Server** > **SLB Source** > **Select Existing VPC**

slb:DescribeLoadBalancerListeners

\*

AliyunSLBFullAccess

slb:CreateLoadBalancer

\*

**Cluster Configurations** > **Network Settings** > **Access to API Server** > **SLB Source** > **Create**

ECS

AliyunECSFullAccess / AliyunECSReadOnlyAccess

ecs:DescribeSecurityGroups

\*

**Cluster Configurations** > **Network Settings** > **Security Group** > **Select Existing Security Group**

ecs:DescribePrice

\*

Navigate to **Node Pool Configurations** > **Instance and Image** > **Instance Type**. Then, select an instance to check the instance pricing.

ecs:DescribeImages

\*

Navigate to **Node Pool Configurations** > **Instance and Image** > **Operating System**. Then, select Custom Image or Marketplace Image.

ecs:DescribeKeyPairs

\*

**Node Pool Configurations** > **Instance and Image** > **Logon Type** > **Key Pair**

ecs:DescribeDeploymentSets

\*

**Master Configurations** > **Deployment Set** > **Select a deployment set**

AliyunECSFullAccess

ecs:CreateSecurityGroup

\*

Navigate to **Cluster Configurations** > **Network Settings** > **Security Group**. Then, select Create Basic Security Group or Create Advanced Security Group.

Key Management Service (KMS)

AliyunKMSFullAccess / AliyunKMSReadOnlyAccess

kms:ListKeys

\*

**Cluster Configurations** > **Advanced Options****(Optional)** > **Secret Encryption** > **Select Key**

Auto scaling

AliyunESSFullAccess / AliyunESSReadOnlyAccess

ess:DescribePatternTypes

\*

**Node Pool Configurations** > **Instance Configuration Mode** > **Specify Instance Attributes**

ApsaraDB RDS

AliyunRDSFullAccess / AliyunRDSReadOnlyAccess

rds:DescribeDBInstances

\*

**Node Pool Configurations** > **Advanced Options (Optional)** > **RDS Whitelist** > **Select RDS Instance**

Application Load Balancer

AliyunALBFullAccess / AliyunALBReadOnlyAccess

alb:ListLoadBalancers

\*

**Component Configurations** > **ALB Ingress** > **ALB Ingress** > **Existing**

AliyunALBFullAccess

alb:CreateLoadBalancer

\*

**Component Configurations** > **ALB Ingress** > **ALB Ingress** > **New**

Microservices Engine (MSE)

AliyunMSEFullAccess / AliyunMSEReadOnlyAccess

mse:ListGateway

\*

**Component Configurations** > **ALB Ingress** > **MSE Ingress** > **Existing**

AliyunMSEFullAccess

mse:AddGateway

\*

**Component Configurations** > **ALB Ingress** > **MSE Ingress** > **New**

Simple Log Service (SLS)

AliyunLogFullAccess

/ AliyunLogReadOnlyAccess

log:ListProject

\*

-   **Component Configurations** > **Log Service** > **Select Project**
    
-   **Component Configurations** > **Control Plane Component Logs** > **Select Project**
    

AliyunLogFullAccess

log:CreateProject

\*

-   **Component Configurations** > **Log Service** > **Create Project**
    
-   **Component Configurations** > **Control Plane Component Logs** > **Create Project**
    

**Cluster Information** > **Basic Information**

VPC

AliyunVPCFullAccess / AliyunVPCReadOnlyAccess

vpc:DescribeVSwitches

\*

Queries vSwitches for replacing control plane switches.

vpc:DescribeEipAddresses

\*

Queries elastic IP addresses (EIPs) for replacing

the public endpoint of the API Server.

KMS

AliyunKMSFullAccess / AliyunKMSReadOnlyAccess

kms:ListKeys

\*

Enable Secret encryption.

**Cluster Information** > **Cluster Monitoring**

Application Real-Time Monitoring Service (ARMS)

AliyunARMSFullAccess / AliyunARMSReadOnlyAccess

arms:ListDashboards

\*

Queries the Grafana dashboards of a cluster.

**Manage Cluster in Cloud Shell**

Cloud Shell

AliyunCloudShellFullAccess

cloudshell:CreateEnvironment

\*

Creates a CloudShell instance environment.

cloudshell:AttachStorage

\*

cloudshell:DetachStorage

\*

cloudshell:CreateSession

\*

cloudshell:DownloadFile

\*

Upload and download files.

cloudshell:UploadFile

\*

File Storage NAS (NAS)

AliyunNASFullAccess

nas:DescribeFileSystems

\*

Create and bind a NAS file system.

nas:CreateFileSystem

\*

nas:DescribeAccessRules

\*

**Node Pools** > **Create Node Pool**

ECS

AliyunECSFullAccess / AliyunECSReadOnlyAccess

ecs:DescribeImages

\*

When you select an operating system image, you can obtain the permissions of the custom image and Marketplace image.

ecs:DescribePrice

\*

Queries the most recent prices of ECS resources.

**Node Pools** > **Create Node Pool** or **Edit**

VPC

AliyunVPCFullAccess / AliyunVPCReadOnlyAccess

vpc:DescribeVpcs

\*

Queries VPCs.

**Node Pools** > **Logon Mode**

ECS

AliyunECSFullAccess / AliyunECSReadOnlyAccess

ecs:DescribeKeyPairs

\*

Queries keys.

**Node Pools** > **Add Existing Node**

ecs:DescribeInstances

\*

Queries the instances that can be added.

ecs:DescribeSecurityGroups

\*

Queries security groups.

**Node Pools** > **Details** > **Scaling Activities**

Auto Scaling

AliyunESSFullAccess / AliyunESSReadOnlyAccess

ess:DescribeScalingActivities

\*

Queries scaling activities.

ess:DescribeScalingActivityDetail

\*

Queries the details of a scaling activity.

ess:DescribeLifecycleActions

\*

Queries the lifecycle actions of scaling activities.

CloudOps Orchestration Service (OOS)

AliyunOSSFullAccess / AliyunOSSReadOnlyAccess

oos:ListExecutions

\*

Queries the execution information.

**Workloads** > **Create from Image**

Container Registry

AliyunContainerRegistryFullAccess / AliyunContainerRegistryReadOnlyAccess

cr:ListInstance

\*

Queries the Container Registry instances.

cr:ListInstanceDomain

\*

Queries information about a Container Registry instance.

cr:ListRepository

\*

Queries the image repositories of a Container Registry instance.

cr:ListArtifactTag

\*

Queries the image tags of a Container Registry instance.

**Applications** > **Knative** > **Monitoring Dashboards**

ARMS

AliyunARMSFullAccess / AliyunARMSReadOnlyAccess

arms:InstallAddon

\*

Installs an add-on.

**Inspections and Diagnostics** > **Cluster Inspections** and **Diagnosis**

RAM

AliyunRAMFullAccess / AliyunRAMReadOnlyAccess

ram:GetRole

acs:ram:\*:\*:role/aliyuncisdefaultrole

AliyunCISDefaultRole is used to perform fault diagnosis and cluster inspection.

**Inspections and Diagnostics** > **Cluster Check** > **Log**

SLS

AliyunLogFullAccess

log:GetDashboard

\*

Queries logs.

log:ListDashboard

\*

log:ListLogStores

\*

log:ListSavedSearch

\*

log:GetLogStoreLogs

\*

log:GetSavedSearch

\*

Queries information about a log event.

log:GetIndex

\*

The query statement.

log:UpdateIndex

\*

log:GetLogStore

\*

log:CreateDashboardSharing

\*

Create password-free shares.

**Operations** > **Log Center** > **Control Plane Component Logs**

AliyunLogFullAccess

/ AliyunLogReadOnlyAccess

log:ListProject

\*

Queries a Logstore.

**Operations** > **Log Center** > **Network Component Logs**

AliyunLogFullAccess

log:GetProjectLogs

\*

The permissions required to manage ALB Ingress logs.

log:GetResourceRecord

\*

log:CreateResourceRecord

\*

log:UpdateResourceRecord

\*

**Security** > **Inspections**

Security Center

AliyunYundunSASFullAccess

yundun-sas:DescribeVersionConfig

\*

Queries the details of the purchased Security Center edition.

yundun-sas:GetClusterSuspEventStatistics

\*

Queries security alert statistics.

yundun-sas:DescribeClusterVulStatistics

\*

Queries the statistics on vulnerabilities.

yundun-sas:GetClusterCheckItemWarningStatistics

\*

Queries the statistics on risk events.

yundun-sas:GetInterceptionSummary

\*

Queries the statistics on the number of container firewall alerts.

yundun-sas:ListGroups

\*

Queries server group lists.

yundun-sas:ListAccountsInResourceDirectory

\*

The permissions related to security alerts.

yundun-sas:DescribeMonitorAccounts

\*

yundun-sas:DescribeSuspEvents

\*

yundun-sas:DescribeGroupedVul

\*

The permissions related to vulnerability risks.

yundun-sas:DescribeVulExportInfo

\*

yundun-sas:ExportVul

\*

yundun-aegis:DescribeVulNumStatistics

\*

yundun-sas:DescribeGroupedInstances

\*

yundun-sas:DescribeFixUsedCount

\*

yundun-sas:DescribeServiceLinkedRoleStatus

\*

yundun-sas:DescribeVulConfig

\*

yundun-sas:DescribeVulList

\*

yundun-sas:DescribeRiskType

\*

The permissions related to baseline risks.

yundun-sas:ListCheckItemWarningSummary

\*

yundun-sas:ListInterceptionHistory

\*

yundun-sas:ListClusterInterceptionConfig

\*

yundun-sas:GetAssetDetailByUuid

\*

yundun-sas:ListPluginForUuid

\*

yundun-sas:ValidateHcWarnings

\*

yundun-sas:DescribeCheckWarningMachines

\*

yundun-sas:IgnoreCheckItems

\*

yundun-sas:ListCheckItemWarningMachine

\*

The permissions related to container firewall alerts.

**Storage** > **Create CNFS File System**

Object Storage Service (OSS)

AliyunOSSFullAccess / AliyunOSSReadOnlyAccess

oss:ListBucketsByRegion

\*

If you set File System Type to OSS, select the required permissions for the OSS bucket.

**Application backup**

oss:ListBucketsByRegion

\*

Creates a backup vault > Select an OSS bucket

**Authorizations** > **RAM Users**

Access control

AliyunRAMFullAccess / AliyunRAMReadOnlyAccess

ram:ListUserBasicInfos

\*

Queries the basic information about all RAM users.

**Authorizations** > **RAM Roles**

ram:ListRoles

\*

Queries all RAM roles.
