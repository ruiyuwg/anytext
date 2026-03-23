Misconfigured cloud assets, such as storage buckets with public-read access or unpatched security vulnerabilities, can lead to serious security incidents such as data breaches and service interruptions. Cloud Security Posture Management (CSPM) provides automated security checks to continuously discover and configuration risks in Alibaba Cloud, multicloud environments, and self-managed Kubernetes (K8s) clusters. CSPM also provides remediation suggestions to improve the overall security and compliance of your assets. This topic describes how to add cloud assets to Security Center to use the configuration risk check feature.

## **Prerequisites**

Before you begin, ensure that you have:

-   A Security Center account with appropriate permissions
    
-   (For third-party clouds) Access credentials for the target cloud platform
    
-   (For K8s clusters) `kubectl` access to the cluster
    

## **Supported asset types**

Security Center CSPM supports adding cloud assets from multiple sources:

**Asset Type**

**Sync Method**

**Supported Platforms**

Alibaba Cloud services

Automatic

All services within your account

Third-party cloud platforms

Manual

AWS, Azure, Huawei Cloud, Tencent Cloud, Volcano Engine

Container environments

Manual

Self-managed Kubernetes clusters

## **Service tiers**

Security Center provides two tiers of configuration checks:

**Feature**

**Free Basic Checks**

**CSPM**

Detection

Yes

Yes

Validation

Yes

Yes

Remediation

No

Yes

All configuration risk checks

No

Yes

Advanced CSPM features

No

Yes

**Note**

Detection and validation are free. Remediation requires the paid CSPM service, which is available by subscription or on a pay-as-you-go basis.

## **View supported cloud services**

View the supported Alibaba Cloud services, third-party cloud platforms, and their respective cloud services in the Security Center console:

1.  Log on to the [Security Center console](https://yundun.console.aliyun.com/).
    
2.  On the **Cloud Service Configuration Risk** tab, select **Cloud Product** above the list of check items.
    
3.  Click **Alibaba Cloud** or a third-party cloud platform, such as **Tencent Cloud** or **AWS**, to view the list of cloud services that you can add to Security Center.
    

## **Alibaba Cloud**

Security Center automatically synchronizes the cloud services within your Alibaba Cloud account. No manual action is required.

## **Add assets from third-party cloud platforms**

Add third-party cloud services from platforms such as AWS, Azure, Huawei Cloud, Tencent Cloud, and Volcano Engine to Security Center for unified configuration scanning and risk management.

### **Step 1: Create access credentials**

Create access credentials on your third-party cloud platform with read-only permissions. The following table summarizes the required credentials for each platform:

**Platform**

**Credential Type**

**Required Information**

AWS

AccessKey pair

Access Key ID, Secret Access Key

Huawei Cloud

AccessKey pair

Access Key ID, Secret Access Key

Tencent Cloud

API key

SecretId, SecretKey

Azure

Application registration

Application (client) ID, Directory (tenant) ID, Client secret Value

Volcano Engine

AccessKey pair

Access Key ID, Secret Access Key

#### **AWS**

1.  **Create an IAM user and grant permissions**:
    
    1.  Log on to the [AWS IAM console](https://console.aws.amazon.com/iam/).
        
    2.  Create a new IAM user.
        
    3.  Attach the `ReadOnlyAccess` and `IAMReadOnlyAccess` system policies.
        
2.  **Create and record an AccessKey pair**:
    
    1.  Generate an AccessKey pair for the new user.
        
    2.  Record the **Access Key ID** and **Secret Access Key**.
        

#### **Huawei Cloud**

1.  **User Group**:
    
    1.  Log on to the [Huawei Cloud console](https://console.huaweicloud.com/).
        
    2.  Navigate to the **User Group** page.
        
    3.  Create a new user group.
        
    4.  Attach the `Tenant Guest` and `IAM ReadOnlyAccess` system policies.
        
2.  **Create a user and record the AccessKey pair**:
    
    1.  Create a new IAM user.
        
    2.  Add the user to the user group created in the previous step.
        
    3.  Create an AccessKey pair for the user.
        
    4.  Record the **Access Key ID** and **Secret Access Key**.
        

#### **Tencent Cloud**

1.  **Create a sub-account and grant permissions**:
    
    1.  Log on to the [Tencent Cloud console](https://console.cloud.tencent.com/).
        
    2.  Navigate to the **User List** page.
        
    3.  Create a new sub-account.
        
    4.  Grant the `CloudResourceReadOnlyAccess` and `QcloudCamReadOnlyAccess` system policies.
        
2.  **Create and record an API key**:
    
    1.  On the **API Key** management page for the sub-account, create a new API key.
        
    2.  Record the **SecretId** and **SecretKey**.
        

#### **Azure**

1.  **Register an application**:
    
    1.  Log on to the [Azure portal](https://portal.azure.com/).
        
    2.  Go to the **App registrations** service.
        
    3.  Register a new application.
        
    4.  Record its **Application (client) ID** and **Directory (tenant) ID**.
        
2.  **Create a client secret**:
    
    1.  In the new application, go to the **Certificates & secrets** page.
        
    2.  Create a new client secret.
        
    3.  Record its **Value**.
        
3.  **Assign a role**:
    
    1.  Go to the **Subscriptions** service.
        
    2.  Select your subscription.
        
    3.  On the **Access control (IAM)** page, assign the **Reader** role to the new application.
        

#### **Volcano Engine**

1.  **Create a sub-account and grant permissions**:
    
    1.  Log on to the [Volcano Engine console](https://console.volcengine.com/).
        
    2.  Navigate to the **Users** page.
        
    3.  Create a new sub-account.
        
    4.  Attach the `IAMReadOnlyAccess` and `ECSReadOnlyAccess` system policies.
        
2.  **Create and record an AccessKey pair**:
    
    1.  When you create the user, enable **Programmatic access**.
        
    2.  After the user is created, record the **Access Key ID** and **Secret Access Key**.
        

### **Step 2: Complete the integration in Security Center**

1.  Log on to the [Security Center console](https://yundun.console.aliyun.com/).
    
2.  On the **Multi-cloud Configuration Management** > **Multi-cloud Assets** tab, click **Grant Permission**.
    
3.  In the **Multi-cloud Assets** panel:
    
    1.  Select a configuration plan.
        
    2.  Enter the access credentials obtained in the previous step into the corresponding fields.
        
4.  **(Optional) Configure audit logs**:
    
    1.  To use the log auditing feature of CSPM, configure the required settings.
        
    2.  **Note**
        
        A Kafka service is required on the third-party platform. Currently, audit log configuration is supported only for **Tencent Cloud** and **AWS**.
        

## **Add a self-managed K8s cluster**

Add a self-managed Kubernetes cluster to Security Center for configuration checks.

### **Step 1: Add the cluster**

Create the necessary authentication and service accounts in the cluster so that the Security Center agent can communicate securely with the cluster.

1.  On the **Risk Governance** > **CSPM** page, click **Policy Management** in the upper-right corner.
    
2.  In the **Policy Management** panel, click the **Configure Container Cluster** tab, and then click **Self-built cluster access**.
    
    **Note**
    
    If you use the Ultimate edition, you can also go to **Assets** > **Container** > **Cluster** and click **Self-built cluster access**.
    
3.  In the **Access Self-built K8s cluster** panel, configure K8s access and click **Generate Command**.
    
4.  Log on to the cluster server, create a `text-001.yaml` file, and copy the generated command into it.
    
5.  Run the following command:
    

```
# Apply the access configuration.
kubectl apply -f text-001.yaml
```

### **Step 2: Install the check component**

Deploy the check component agent in the cluster to perform configuration scan tasks.

1.  Return to the cluster list on the **Configure Container Cluster** tab.
    
2.  Find the cluster that you just added. The **Component Status** for this cluster is **Not Installed**.
    
3.  In the Actions column, click **Component Access**.
    
4.  In the **Scan Component Access** panel, copy the generated command.
    
5.  Log on to the server that hosts the cluster and paste the command into a `deploy.yaml` file.
    
6.  Run the following command:
    
    ```
    # Deploy the check component.
    kubectl apply -f deploy.yaml
    ```
    
7.  **(Optional) Enable webhooks for incremental checks**: To automatically trigger incremental checks when cluster resources such as pods change, enable the webhook feature.
    
    **Warning**
    
    The webhook feature currently supports only incremental checks for pods. If the webhook feature is not configured correctly or an exception occurs, the creation of cluster resources may be affected.
    
    To enable webhooks:
    
    1.  In the **Scan Component Access** panel, copy the webhook command.
        
    2.  Log on to the server where the cluster is located and paste the command into a `webhook.yaml` file.
        
    3.  Run the following command:
        
        ```
        # Deploy the check component.
        kubectl apply -f webhook.yaml
        ```
        

### **Step 3: Verify the installation**

1.  On the cluster server, run the following command to check whether the agent pod is running:
    
    ```
    # Replace <agent-namespace> with the actual namespace where the agent is deployed.
    kubectl get pods -n <agent-namespace>
    ```
    
    Replace `<agent-namespace>` with the actual namespace where the agent is deployed.
    
    **Note**
    
    The expected status of the agent-related pod is `Running`.
    
2.  In the Security Center console, go to the **Configure Container Cluster** list.
    
3.  In the list of clusters, verify that the **Component Status** is **Online**. This indicates that the component is installed.
    

## **Synchronize assets**

Synchronize assets to get the latest cloud services or configuration updates.

### **Automatic synchronization**

Enable automatic synchronization when adding assets (for example, by setting the **Cloud Service Synchronization Frequency** option for multicloud configurations). The system automatically syncs new cloud services or configuration updates.

### **Manual synchronization**

Manually sync assets in the Security Center console by clicking **Synchronize Assets** on the **Cloud Product** or **Configure Container Cluster** tab.

## **Billing**

### **Asset access**

Adding cloud assets to Security Center is free of charge.

### **Cloud Service Configuration Risk**

The paid CSPM feature is billed based on the consumption of quotas. One quota is consumed for each successful operation, such as a scan, validation, or remediation, on an asset instance.

**Billing details**:

**Service Type**

**Resource Types**

**Exclusions**

Compute

ECS instances, Container instances

Stopped instances

Storage

OSS buckets, NAS file systems

Empty buckets

Databases

RDS instances, Redis instances

–

Network

VPCs, SLB instances

–

**Note**

For more information, see [CSPM pricing](https://www.alibabacloud.com/pricing).

## **Quotas and limits**

### **Feature limits**

**Feature**

**Limit**

Log auditing

Available only for Tencent Cloud and AWS

### **K8s access limits**

#### **Edition limits**

**Service Type**

**Required Edition**

Subscription service

Ultimate edition or CSPM value-added service

Pay-as-you-go service

Ultimate or CSPM

#### **Region limits**

K8s access is available in specific regions. For the latest region availability, see [Supported regions](https://www.alibabacloud.com/help/en/security-center/latest/supported-regions).

### **Service limits**

The following limits apply to CSPM:

**Limit Type**

**Maximum**

Third-party cloud accounts per Security Center instance

50

K8s clusters per Security Center instance

100

Assets per cloud account

10,000

## **Related topics**

-   [Add Huawei Cloud assets using an AccessKey pair](/help/en/security-center/user-guide/add-huawei-assets-through-access-key#t2888579.html)
    
-   [Add AWS assets using an AccessKey pair](/help/en/security-center/user-guide/onboard-amazon-cloud-assets-through-ak#t2888578.html)
    
-   [Add Volcano Engine assets using an AccessKey pair](/help/en/security-center/user-guide/access-to-volcano-engine-assets-via-ak#t2888576.html)
