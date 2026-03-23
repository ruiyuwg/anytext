Security Center simplifies the process of enabling pay-as-you-go services. These services include Host and Container Security, Agentic SOC, Cloud Security Posture Management, agentless detection, Serverless Security, Vulnerability Fixing, Application Protection, and Malicious File Detection SDK. You can enable these features and apply their recommended protection policies with a single click in the console. This topic describes the default one-click onboarding policies and billing details for these features.

**Important**

When you select **Enable One-click Onboarding Policy** and click **Activate and Authorize**, several default policies are executed. All servers are assigned either the **Comprehensive Host Protection** or **Comprehensive Host And Container Protection** protection level. All serverless assets are automatically authorized and protected. Recommended policies are also enabled for Agentic SOC log ingestion, periodic scanning for Cloud Security Posture Management and agentless detection, Application Protection onboarding, and periodic detection for the Malicious File Detection SDK.

Security Center uses these one-click onboarding policies to enable protection, apply authorizations, ingest logs, and run scans and detections.

Security Center generates daily bills based on the billing rules for each feature. **To avoid unexpected charges, carefully read and understand the one-click onboarding policies before you enable this feature**.

## **One-click onboarding policy details**

### **Host and Container Security**

After you complete the enablement and authorization, the Host and Container Security feature automatically assigns a protection level to all servers under your Alibaba Cloud account: **Comprehensive Host Protection** or **Comprehensive Host And Container Protection**.

**Important**

Server assets that run container environments, such as Alibaba Cloud ACK cluster nodes, Intelligent Computing LINGJUN, and servers added to self-managed Kubernetes (K8s) clusters, are automatically bound to **Host and Container Protection**. All other assets are automatically bound to **Host Protection**.

Later, on the **Overview** page of the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas), you can change the protection level assigned to a server using the **Authorization Management** feature. For more information, see [Manage the number of security authorizations for hosts and containers](/help/en/security-center/user-guide/authorization-number-management).

New hosts are assigned the **Unprotected** level by default. You can use the **Authorization Management** feature to set a default protection level for new hosts.

### **Serverless Security**

After you complete the enablement and authorization, the Serverless Security feature automatically protects and authorizes all serverless assets under your Alibaba Cloud account.

**Important**

For ECI assets created from managed or dedicated ACK clusters, ACK serverless clusters, or ACS clusters, you must install and start the Security Center client. This is required to enable the Serverless Security protection capabilities. For more information, see [1\. Install and start the Security Center client for the ECI pods to be protected](/help/en/security-center/user-guide/serverless-assets#0394be1d42ux4).

Afterward, on the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas) **Assets** > **Serverless Asset** page, you can manage the authorization status of assets in the authorization management section. For more information, see [3.2. Bind or unbind authorized assets](/help/en/security-center/user-guide/serverless-assets#89b04eefad65o).

### **Application Protection**

After you complete the enablement and authorization, the Application Protection feature automatically enables full protection for all Java processes. The onboarding is performed in slow mode.

**Note**

Later, you can adjust the servers and processes that are onboarded on the **Application Protection** > **Application Configuration** tab. For more information about automatic full onboarding, see [Automatic full onboarding (Java processes only)](/help/en/security-center/user-guide/automatic-access-rule-management#0220546a5ciz7).

### **Malicious File Detection SDK**

After you enable and authorize the Malicious File Detection SDK feature of Security Center, the system automatically creates and enables a default detection policy named `Auto_Create_Config`. To modify the policy, go to the **SDK for Malicious File Detection** > **OSS File Check** tab. Then, in the **Policy Management** area, click **Policy Configuration** to view and modify the policy. The policy details are as follows:

-   **Detection scope**: All OSS buckets under your Alibaba Cloud account.
    
-   **Detection objects**: All new or updated files after the feature is enabled.
    
-   **Execution cycle**: Once a day.
    
-   **Detection method**: By default, files are not decompressed or decrypted.
    

**Important**

A detection task based on this policy runs on the day you enable the service.

### **Cloud Security Posture Management**

-   **For users who have never enabled a periodic scan policy for Cloud Security Posture Management**:
    
    -   Scan frequency: Once a day. The system randomly generates the specific scan time.
        
    -   Scan scope:
        
        Checks for common high-risk configurations in security practices. These include improper security settings, exposed vulnerable ports, whitelists that are open to the public network, public read/write data access, and identity authentication and privileged permission risks. These checks improve the security of your cloud products and the platform.
        
        You can view the default scan check items on the **Policy Management** panel of the **Risk Governance** > **CSPM** page in the Security Center console. The selected check items define the scan scope of the recommended policy.
        
-   **For users who have enabled a periodic scan policy for Cloud Security Posture Management**:
    
    -   Scan frequency: Same as the previous configuration.
        
    -   Scan scope: The union of check items from the previous configuration and the recommended scan scope described above.
        

### **Vulnerability Fixing**

-   After you complete the enablement and authorization, the pay-as-you-go feature for Vulnerability Fixing is enabled.
    
-   Security Center configures an automatic vulnerability fixing policy. From 00:00 to 06:00 every day, Security Center automatically fixes high-risk vulnerabilities on all affected assets, including newly added hosts. A snapshot is created before the fix and is stored for one day. For more information, see [View and manage vulnerabilities](/help/en/security-center/user-guide/view-and-handle-vulnerabilities).
    

### **Agentless Detection**

-   Scan frequency: Once every 5 days.
    
-   Scan scope: All machines. The **Default Scan for New Assets** option is selected by default.
    

**Important**

A detection task based on this policy runs on the day you enable the service.

### Agentic SOC

After you complete the enablement and authorization, the Agentic SOC feature of Security Center automatically ingests logs from the Alibaba Cloud products and data sources listed in the following table.

**Important**

If you use the Free Edition of Security Center or purchase only value-added services, Agentic SOC does not ingest ActionTrail event logs.

**No.**

**Alibaba Cloud product**

**Data source name**

**Standardization rule name**

**Standardization method**

**Standardization category/structure**

**Supported security capabilities**

1

Security Center

DNS request log

Host DNS request log standardization rule

Scan query

Host log - Process DNS request log

-   Predefined analysis rule
    
-   Predefined playbook
    

2

Baseline log

Baseline log standardization rule

Scan query

Security log - Host baseline log

-   Event investigation and tracing
    
-   Predefined playbook
    

3

Logon stream log

Logon stream log standardization rule

Scan query

Logon log - Host logon log

-   Custom analysis rule
    
-   Event investigation and tracing
    
-   Predefined playbook
    

4

Network connection log

Network connection log standardization rule

Scan query

Host log - Process outbound network connection log

-   Predefined analysis rule
    
-   Predefined playbook
    

5

Process startup log

Process startup log standardization rule

Scan query

Host log - Process startup log

-   Predefined analysis rule
    
-   Custom analysis rule
    
-   Event investigation and tracing
    
-   Predefined playbook
    

6

Security alert log

Security alert log standardization rule

Real-time consumption

Security log - Other alert logs

Predefined playbook

7

Vulnerability log

Vulnerability log standardization rule

Scan query

Security log - Vulnerability log

-   Event investigation and tracing
    
-   Predefined playbook
    

8

Web Application Firewall

WAF alert log

WAF alert log standardization rule

Real-time consumption

Security log - Web Application Firewall alert log

-   Predefined analysis rule
    
-   Custom analysis rule
    
-   Predefined playbook
    

9

WAF all/blocked/blocked and observed logs

WAF all/blocked/blocked and observed log standardization rule

Real-time consumption

Network log - HTTP log

-   Predefined analysis rule
    
-   Custom analysis rule
    
-   Event investigation and tracing
    
-   Predefined playbook
    

10

Cloud Firewall

Cloud Firewall alert log

Cloud Firewall alert log standardization rule

Real-time consumption

Security log - Firewall alert log

-   Predefined analysis rule
    
-   Custom analysis rule
    
-   Predefined playbook
    

11

ActionTrail

ActionTrail event log

ActionTrail event log standardization rule

Real-time consumption

Audit log - Cloud platform operation audit log

-   Custom analysis rule
    
-   Event investigation and tracing
    

### **Anti-ransomware**

Important file paths on your servers are backed up periodically. If a ransomware attack occurs, you can use the backup files to restore your servers. You can adjust the protection scope by configuring the anti-ransomware policy.

### **Log Management**

Security Center logs are delivered to a Logstore. By default, logs are delivered to China (Shanghai) for regions in the Chinese mainland and to Singapore for regions outside the Chinese mainland.

## Billing details

### **Host and Container Security**

After you enable pay-as-you-go for Host and Container Security, you are billed based on the number of servers assigned to each protection level and the actual protection duration. The duration is measured in seconds and is calculated only when the client is online. Bills are settled daily.

**Protection level**

**Price**

**Monthly fee (30-day reference)**

**Antivirus**

0.000000578 USD per core per second

USD 1.5 per core per month

**Advanced**

USD 0.000005497 per instance per second

USD 14.25 per instance per month

**Host Protection**

0.000013599 USD per instance per second

35.25 USD per instance per month

**Hosts and Container Protection**

USD 0.000013599/instance/second + USD 0.000000578/core/second

USD 35.25/instance/month + USD 1.5/core/month

### **Serverless Security**

After you enable and authorize serverless assets, the serverless protection feature is billed using a pay-as-you-go, tiered pricing model based on monthly cumulative usage.

**Cumulative monthly usage**

**Price**

**Fee calculation formula (U is the daily usage in core-seconds)**

Tier 1: 0 to 200,000,000 core-seconds

0.000003 USD per core-second

0.000003 × U (USD)

Tier 2: 200,000,001 to 1,000,000,000 core-seconds

0.000002 USD per core per second

-   **On the first day you enter this tier**:
    
    0.000003 × 200,000,000 + 0.000002 × (U - 200,000,000) (USD)
    
-   **Each subsequent day**: 0.000002 × U (USD)
    

Tier 3: 1,000,000,001 to 9,999,999,999,999 core-seconds

0.0000015 USD per core per second

-   **On the first day you enter this tier**:
    
    0.000003 × 200,000,000 + 0.000002 × 800,000,000
    
    \+ 0.0000015 × (U - 1,000,000,000) (USD)
    
-   **Subsequent daily fee**: 0.0000015 × U (USD).
    

### **Application Protection**

After you enable the pay-as-you-go feature for Application Protection, the system counts all online instances every minute (from 0 to 60 seconds) and bills you daily at a rate of USD 0.0002 per instance per minute.

### **Malicious File Detection SDK**

When you use the Malicious File Detection SDK feature, you are charged based on the **number of files detected**, which is equivalent to the **number of file detections**. After you enable the pay-as-you-go billing method, you are billed daily at a rate of USD 0.0002 per detection.

### **Cloud Security Posture Management**

-   **Quota**: **Quota** is the unit of measurement for the paid features of **CSPM**. Successfully performing a billable operation (scan, verify, or fix) on an asset Instance consumes one Quota unit.
    
    For example, if you have 10 products, each with 15 Instances, and you choose to scan all Instances with 5 check items, the task consumes `10 × 15 × 5 = 750` Quota units.
    
-   **Instance**: An **Instance** refers to a specific cloud resource, such as an OSS Bucket or an ECS security group.
    
-   **Check item**: Check items fall into two categories: free check items and paid check items.
    
    -   **Free check items**: **Cloud service configuration check** provides a set of free check items for basic risk awareness. There is no limit on the number of scans and verifications. Only successful remediation consumes Quota.
        
        **Important**
        
        For users who authorized CSPM (formerly Cloud service configuration check) before July 7, 2023, you retain access to the number of free check items corresponding to your original Security Center edition (80+ for Anti-virus Edition, 90+ for Advanced Edition, 250+ for Enterprise/Ultimate Edition), both before your subscription expires and upon renewal.
        
    -   **Paid check items**: These require purchasing a corresponding service edition or activating the **CSPM** service separately. The cost is either included in the edition's fee or consumes Quota.
        

Security Center provides 80+ free check items by default. Scans that use only free check items do not consume authorizations. For a list of check items in the recommended scan policy, see [Recommended periodic scan policy](#7853c317e20ha) for Cloud Security Posture Management.

Cloud Security Posture Management supports two billing methods: subscription and pay-as-you-go. The fees are as follows:

-   Subscription: Price × Number of authorizations (quantity purchased for Cloud Security Posture Management) × Subscription duration (calculated based on the subscription duration of the Security Center instance).
    
    **Number of Authorizations**
    
    **Price (****USD****/use)**
    
    0–100,000
    
    0.0009 USD/request
    
    100,001–500,000
    
    USD 0.00069 per request
    
    Greater than 500,000
    
    USD 0.000625/call.
    
-   Pay-as-you-go: Tiered billing based on the number of authorizations. Bills are settled daily.
    
    **Quotas**
    
    **Price**
    
    **Fee calculation formula (Z is the number of quotas used per day)**
    
    0 to 100,000
    
    0.0009 USD per request
    
    0.0009 × Z (USD)
    
    100,001 to 500,000
    
    USD 0.0007/request
    
    0.0009 × 100,000 + 0.0007 × (Z - 100,000) (USD)
    
    More than 500,000
    
    USD 0.00045 per call
    
    0.0009 × 100,000 + 0.0007 × 400,000 + 0.00045 × (Z - 500,000) (USD)
    

### **Vulnerability Fixing**

After you enable pay-as-you-go for vulnerability fixing, you are charged USD 0.30 per fix on a daily basis. For more information, see [Vulnerability fix calculation rules](/help/en/security-center/user-guide/overview-4#e756ca46dbq0a).

### **Agentless Detection**

-   **Agentless detection scan fee**
    
    -   **Billing method**: Pay-as-you-go.
        
    -   **Billing cycle**: Daily.
        
    -   **Unit price**: USD 0.03/GB.
        
    -   **Billable amount**: The billable amount is calculated based on the **actual data size** of the scanned image, not the total disk capacity.
        
-   **ECS resource usage fee**
    
    **Important**
    
    When you configure a host detection task, we recommend that you select **Retain Only At-risk Image**. The system automatically deletes risk-free images after the scan to **save storage costs**. For more information, see [Retention period configuration](/help/en/security-center/user-guide/use-the-agentless-detection-feature#a13f481110ciz).
    
    -   **Image fees**: The detection task creates an image for the server. Fees are charged based on the image usage and duration. These fees are charged by ECS. For more information, see [Images](/help/en/ecs/images).
        

### Agentic SOC

Agentic SOC charges you based on the volume of logs ingested from your products and the data capacity stored in Log Management.

-   Subscription billing:
    
    -   **Log Ingestion Traffic**: This service uses a tiered pricing model with a minimum purchase of 100 GB/day and a purchase step size of 100 GB/day. The specific prices are as follows (where X is the ingested traffic per day):
        
        -   X=100 GB: USD 0.45/GB/day
            
        -   200 GB =< X < 9,999,999,999 GB: USD 0.42/GB/day
            
        
    -   **Log Storage Capacity**: USD 100/1,000 GB/month (Starts at 1,000 GB, with a purchase step size of 1,000 GB)
        
-   Pay-as-you-go: Tiered billing is based on the daily log traffic ingested from your products. The final daily bill is the sum of the fees from each usage tier.
    
    **Note**
    
    The minimum billing unit is 1 GB. If the data volume is less than 1 GB, it is billed as 1 GB.
    
    **Log ingestion traffic tier**
    
    **Price**
    
    **Fee calculation formula (Y is the traffic ingested per day in GB)**
    
    1 to 10 (GB/day)
    
    USD 2.20/GB
    
    2.2×Y (USD)
    
    11 to 50 (GB/day)
    
    1.6 USD/GB
    
    2.2 × 10 + 1.6 × (Y - 10) (USD)
    
    51 to 100 (GB/day)
    
    USD 1.4/GB
    
    2.2 × 10 + 1.6 × 40 + 1.4 × (Y - 50) (USD)
    
    \>100 (GB/day)
    
    USD 1.2/GB
    
    2.2 × 10 + 1.6 × 40 + 1.4 × 50 + 1.2 × (Y - 100) (USD)
    

### **Anti-ransomware**

You are charged based on the size of backup files and their storage duration. The price is USD 0.00013/GB/hour.

### **Log Management**

Billing is based on the total daily storage usage (GB) for each calendar day. The price is USD 7.2/1000 GB.

## **FAQ**

### **Can I modify the recommended policies after they are enabled?**

Yes, you can.

-   To modify the protection level assigned to your servers, see [Manage authorizations for Host and Container Security](/help/en/security-center/user-guide/authorization-number-management).
    
-   To modify the authorization status for serverless assets, see [3.2. Bind or unbind authorized assets](/help/en/security-center/user-guide/serverless-assets#89b04eefad65o).
    
-   To modify the default detection policy for OSS files in Malicious File Detection SDK, see [Malicious File Detection SDK](/help/en/security-center/user-guide/sdk-for-malicious-file-detection/).
    
-   To modify the periodic scan policy for Cloud Security Posture Management, see [Set and run a check policy](/help/en/security-center/user-guide/use-cloud-platform-configuration-check#section-uan-i0s-bhm).
    
-   To modify the scan policy for agentless detection, see [Agentless detection](/help/en/security-center/user-guide/use-the-agentless-detection-feature).
    
-   To modify the log types ingested for Agentic SOC products, see [Product onboarding](/help/en/security-center/user-guide/add-product-to-agentic-soc-2-0).
    
-   To modify the onboarding configuration for the Application Protection policy, see [Mitigation Policy Management](/help/en/security-center/user-guide/protection-policy-management).
