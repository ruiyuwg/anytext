Security Center is a centralized security solution that defends your cloud assets against threats such as viruses, cyberattacks, and ransomware. It offers multiple editions and billing models so you can build a security system that fits your scenarios and budget.

## **Get started**

**New to Security Center?** Start with the 7-day free trial of Enterprise Edition to evaluate comprehensive host security capabilities, including vulnerability management and intrusion prevention.

**Ready to purchase?** Review [Plans and add-ons](#jgw9e9toqjwf) for options, or follow the [Purchase procedure](#q6v7kx0aksxs).

## **Overview**

-   **Billing**: **Subscription** (plan + add-ons) or **Pay-as-you-go** (per-feature activation). You cannot use both for the same plan; the same account can use subscription for some modules and pay-as-you-go for others.
    
-   **Basic Edition**: Automatically available after Alibaba Cloud account verification; permanently free.
    
-   **Enterprise Edition free trial**: 7-day trial of the full Enterprise Edition for accounts that have never used the trial or a paid plan; one per account. After the trial expires, configurations and data are retained for 7 days and then automatically deleted.
    

## **Quick selection guide**

**Use case**

**Recommended solution**

**Core value**

First-time use or evaluation

[Activate a 7-day free trial of the Enterprise Edition](/help/en/security-center/user-guide/apply-for-a-7-day-free-trial-of-security-center) (see Overview)

Full host security at no cost, including vulnerability management and intrusion prevention.

Hybrid cloud host security

**Plan**: Enterprise Edition.

**Add-ons**: Anti-ransomware, Log analysis, CSPM, Agentic SOC.

Unified policies and controls for cloud and on-premises hosts; centralized governance.

Container security

**Plan**: Ultimate Edition.

**Add-ons**: Anti-ransomware, Log analysis, CSPM, Agentic SOC, Image scan.

Full-stack from host to container; image scanning for shift-left security.

Major event support

**Plan**: Enterprise Edition or Ultimate Edition.

**Add-ons**: RASP, Tamper-proofing, Cloud Honeypot.

RASP and tamper-proofing for advanced threats and business stability.

Security incident response

**Pay-as-you-go**: see [One-click access policy and billing details for pay-as-you-go services](/help/en/security-center/pay-as-you-go-recommended-policies-and-billing-rules).

For mining malware, viruses, Trojans, website defacement, or ransomware.

## **Prerequisites**

-   An Alibaba Cloud account with identity verification completed.
    
-   **Billing**: Enable billing alerts before purchase to avoid unexpected charges.
    
-   **Region**: Security Center and some add-ons (e.g., Anti-ransomware) are available only in select regions; check the console or product overview for your region.
    

## **Plans and add-ons**

### **Subscription**

-   **Editions:** You can select from editions such as **Anti-virus**, **Advanced**, **Enterprise**, and **Ultimate**. Each edition provides different integrated protection and detection capabilities.
    
-   **Add-ons**: You can purchase additional add-ons as needed, such as **Anti-ransomware** and **Application Protection** (RASP).
    

### **Editions**

**Edition**

**Description**

**Fee**

**Basic**

Provides only basic security detection capabilities, such as detecting abnormal server logons, DDoS, common server vulnerabilities, and configuration security issues for some cloud products. This edition does not provide active protection features.

Free

**Anti-virus**

Provides capabilities such as detection and removal of common host viruses.

USD 1 per core per month

**Advanced**

Provides capabilities such as host virus detection, anti-virus scanning, vulnerability detection and fixing, and security reports.

USD 9.5 per server per month

**Enterprise**

Meets the requirements for host security intrusion prevention, identity authentication, and security audits.

USD 23.5 per server per month

**Ultimate**

Provides full-stack security protection for hosts, containers, and Intelligent Computing LINGJUN servers. This includes security capabilities such as K8s threat detection, Container Asset Overview, security alerts, anti-virus scanning, vulnerability detection, Asset Fingerprints, and attack chain analysis.

USD 23.5 per server per month + USD 1 per core per month

The following table compares the main mitigation capabilities of each edition.

**Mitigation capabilities**

**Basic**

**Anti-virus**

**Advanced**

**Enterprise**

**Ultimate**

Detection for some malware and cloud product threats

Supported

Supported

Supported

Supported

Supported

Anti-virus scanning and host intrusion detection

Not supported

Supported

Supported

Supported

Supported

Anti-brute force

Not supported

Not supported

Supported

Supported

Supported

Host behavior prevention

Not supported

Supported

**Note**

Only blocking processes based on malicious MD5 hashes is supported.

Supported

Supported

Supported

System vulnerability scanning and fixing

Not supported

Not supported

Supported

Supported

Supported

Malicious network behavior prevention

Not supported

Not supported

Not supported

Supported

Supported

Attack attribution

Not supported

Not supported

Not supported

Supported

Supported

Application vulnerability detection

Not supported

Not supported

Not supported

Supported

Supported

Baseline check and fixing

Not supported

Not supported

Supported

**Note**

Only weak password checks are supported.

Supported

Supported

Container security

Not supported

Not supported

Not supported

Not supported

Supported

### **Add-ons**

#### **Anti-ransomware**

-   Feature description: Provides anti-ransomware backup and restore capabilities. You can use backup files to recover servers and databases after a ransomware attack.
    
-   Purchase instructions:
    
    -   The quantity you purchase corresponds to the anti-ransomware capacity. This capacity is determined by the size of the files you need to back up and the backup retention period, not the number of servers.
        
    -   This service is available only in specific regions. You can set the protection data volume as needed. For information about the supported regions, see [Anti-ransomware service overview](/help/en/security-center/user-guide/overview-2#title-qjb-640-m6r).
        
    -   If you check **Set Recommended Policy**, the system automatically backs up important file paths on your existing servers regularly. To adjust the policy, go to the anti-ransomware page. For more information, see [Manage an anti-ransomware policy](/help/en/security-center/user-guide/manage-an-anti-ransomware-policy-1).
        

#### **CSPM**

-   Feature description: Provides identity and permission management, automated compliance checks, and cloud product configuration baseline detection. This lets you centrally manage configuration risks across multicloud products.
    
-   Purchase instructions: Billing is based on the number of quotas. Number of quotas = Number of scans (Number of cloud products × Number of asset instances × Number of check items) + Number of authentications + Number of successful fixes.
    
    **Warning**
    
    The unused quota is cleared at the end of each month. For more information about billing, see [Billing details](/help/en/security-center/product-overview/billing-overview#1ed4191316ojq).
    

#### **Agentic SOC**

-   Feature description:
    
    -   **Agentic SOC**: Supports unified log collection from multicloud environments, multiple accounts, and various products such as Web Application Firewall (WAF), Cloud Firewall, and virtual private cloud (VPC). It provides a closed-loop process for detecting, responding to, and handling security alerts and events. This improves security operations efficiency and helps meet the log audit requirements of MLPS 2.0.
        
    -   **Security Operations Agent**: An advanced intelligent value-added service based on Agentic SOC. It uses Agentic AI as its core engine and deeply integrates with Alibaba Cloud's native security data and infrastructure. The service uses the autonomous perception, inference, and execution capabilities of agents to independently analyze security events to help you achieve rapid security event response.
        
-   Purchase instructions:
    
    -   This service uses a modular billing method. The billable items vary based on the options you purchase. For more information about billing, see [Detailed billing information](/help/en/security-center/product-overview/billing-overview#03398de4ffa4h).
        
        -   **Agentic SOC**: Billed separately for **Log Ingestion Traffic** and **Log Storage Capacity**. You can purchase them separately as needed.
            
            ## **Log Ingestion Traffic (GB/day)**
            
            -   Purpose: Used for core security operations such as real-time threat detection, attack attribution, and alert analysis. After purchasing, you can use most of the core features of Agentic SOC, such as threat detection, investigation, and response.
                
            -   Capacity estimation**:**
                
                -   Estimate based on existing logs
                    
                    Daily traffic (GB) = Total log storage capacity (GB) / Log retention period (TTL) in days.
                    
                    For example, if you have 10,000 GB of logs with a retention period of 90 days, the daily traffic is approximately 10,000 / 90 ≈ 111 GB. We recommend that you purchase 200 GB/day.
                    
                -   Estimate based on log generation rate (EPS)
                    
                    Daily traffic (GB) = EPS (log entries per second) × 86,400 × Average size per log entry (KB) / 1,024
                    
                    -   `EPS`: The number of log entries generated per second.
                        
                    -   `Average size per log entry`: Typically ranges from 3 KB to 7 KB.
                        
            
            ## **Log Storage Capacity (GB)**
            
            -   Purpose: Used for long-term storage of logs for queries and audits. This meets the compliance requirement of China's Cybersecurity Law and MLPS 2.0 that **logs must be retained for at least 180 days**. It also supports historical event analysis.
                
            -   Capacity estimation**:**
                
                -   Estimate based on the number of servers: We recommend that you configure **120 GB** of log storage capacity for each server.
                    
                -   Estimate based on existing log analysis capacity: We recommend that you configure a capacity that is **three times** the purchased capacity of the **Security Center - Log Analysis** feature.
                    
            
        -   **Security Operations Agent**: In addition to purchasing Agentic SOC, you must also purchase **Intelligent Usage Analysis** and **Number of Managed Instances**.
            
            -   **Intelligent Usage Analysis**: The analysis usage consumed by **Security Operations Agent** to analyze alerts for risk events, investigate events, perform traceability and attribution, and generate security reports. The purchase quantity is not automatically populated and must be the same as the quantity for **Log Ingestion Traffic**.
                
                **Note**
                
                The quota for **Intelligent Usage Analysis** is cleared daily. If the quota is exceeded, the system automatically applies rate limiting.
                
            -   **Number of Managed Instances**: **Security Operations Agent** supports security operations and automated handling across instances. Billing is based on the number of managed instances, and each invoked instance is billed. Instances can include ECS, WAF, ALB, multicloud products, and third-party security vendor products.
                
                **Note**
                
                The quota is cleared monthly. Each instance is counted only once, and duplicates are automatically removed.
                
    -   If you check **Access Policy**, some log sources from **Security Center, Web Application Firewall, Cloud Firewall**, and **ActionTrail** under the current Alibaba Cloud account are automatically connected.
        

#### **Vulnerability Fixing**

-   Feature description: Allows you to fix **Linux Software Vulnerability** and **Windows System Vulnerability** on your servers with a single click in the console.
    
-   Purchase instructions: Enter the number of vulnerability fixes you want to purchase based on the number of vulnerabilities you need to fix each month.
    
    **Note**
    
    The number of vulnerability fixes is the sum of all vulnerabilities fixed on all your servers. For example, if the same vulnerability exists on 10 servers, fixing it with a single click in Security Center consumes 10 fixes.
    

#### **Container Image Scan**

-   Feature description: Scans images for system vulnerabilities, application vulnerabilities, viruses, and malicious samples with a single click, and provides repair suggestions.
    
-   Purchase instructions:
    
    -   Enter the quantity you want to purchase based on the number of **scan quotas** you need per month.
        
        **Note**
        
        **Scan quota**: One quota is consumed when an image digest is scanned for the first time. Subsequent scans of the same digest do not consume quotas. If the image digest changes, a new quota is required.
        
    -   You can purchase this feature only when you select the **Advanced**, **Enterprise**, Ultimate, or **Value-added Plan** edition.
        

#### **Web Tamper Proofing**

-   Feature description: Monitors website directories in real time and restores tampered files or directories from backups. This ensures that the website information of important systems is not maliciously tampered with.
    
-   Purchase instructions**:** Select the quantity based on the number of servers you need to protect.
    

#### **Malicious File Detection**

-   Feature description: Detects hidden malware, webshells, viruses, and other potential risk files in the server file system through deep scanning.
    
-   Purchase instructions: Set the quantity to the number of files you need to detect each month.
    

#### **Application Protection** **(RASP)**

-   Feature description: The application protection feature is based on runtime application self-protection (RASP) technology. It provides applications with self-protection capabilities to detect and block attacks in real time.
    
-   Purchase instructions: We recommend that you set the purchase quantity to the total number of Java processes you plan to protect.
    
    **Note**
    
    For example, if you have two servers, each running three Java applications that require protection, you should purchase six quotas.
    

#### **Cloud Honeypot**

-   Feature description: Provides timely and efficient threat trapping based on attacker behavior. This enhances the detection and protection of core assets in attack and defense scenarios.
    
-   Purchase instructions: Cloud Honeypot is billed based on the number of probes. You must purchase at least 20 probes and can purchase up to 500 probes.
    
    **Note**
    
    If you need more than 500 probes, contact technical support to scale out.
    

#### **Log Analysis**

-   Feature description: Aggregates security logs from cloud assets, including hosts and security events. It provides powerful SQL search and visualization reports to help you perform event retrospection, attack attribution, and compliance audits.
    
    **Important**
    
    If you have also purchased the **Log Management** pay-as-you-go service, Security Center logs will be stored in two separate locations_._ To avoid duplicate charges, we recommend that you evaluate your needs and then go to the Security Center console to disable the relevant log delivery switch in the **Log Analysis** module.
    
-   Purchase instructions: According to China's Cybersecurity Law, logs must be stored for at least 180 days. We recommend that you configure at least 50 GB of storage capacity for each server.
    

### **Pay-as-you-go**

-   **Default features:** When you enable any pay-as-you-go feature of Security Center, the system charges a basic service fee and enables the **DingTalk Chatbot**, **Security Report**, and **Playbook** features by default.
    
-   **Billable features:** You can purchase specific protection features separately. All features are billed independently and can be enabled as needed.
    

### **Default features**

-   **DingTalk Chatbot**: After you configure a DingTalk robot for notifications, you can receive real-time threat alert messages from Security Center in your DingTalk group.
    
-   **Security Report**: You can customize the security data you want to monitor and have it sent to the mailboxes of relevant security personnel regularly. This lets you more effectively monitor your asset security status in real time.
    
-   **Playbook**: Provides automated response orchestration capabilities. It orchestrates repetitive tasks in the security event response process into automated handling policies to help you efficiently perform system security hardening.
    
    **Note**
    
    You must first enable or purchase the vulnerability fixing feature.
    

### **Billable features**

#### **Host and Container Security**

**Important**

If you have subscribed to the **Anti-virus**, **Advanced**, **Enterprise**, or **Ultimate** edition, you cannot enable the **Host and Container Security** pay-as-you-go service.

-   Feature description: Provides comprehensive detection and protection services for host and container assets. After purchasing, you need to attach a **protection level** to your assets. The protection levels are described as follows:
    
    **Protection level**
    
    **Description**
    
    **Monthly fee (30-day reference price)**
    
    **Unprotected**
    
    Provides only basic security detection capabilities, such as detecting abnormal server logons, DDoS, common server vulnerabilities, and configuration security issues for some cloud products. This edition does not provide active protection features.
    
    Free
    
    **Antivirus**
    
    Provides capabilities such as detection and removal of common host viruses.
    
    USD 1.5 per core per month
    
    **Advanced**
    
    New purchases and changes are no longer supported**.**
    
    USD 14.25 per server per month
    
    **Host Protection**
    
    Meets the requirements for host security intrusion prevention, identity authentication, and security audits.
    
    USD 35.25 per server per month
    
    **Hosts and Container Protection**
    
    Provides full-stack security protection for hosts, containers, and Intelligent Computing LINGJUN servers. This includes security capabilities such as K8s threat detection, Container Asset Overview, security alerts, anti-virus scanning, vulnerability detection, Asset Fingerprints, and attack chain analysis.
    
    USD 35.25 per server per month+USD 1.5 per core per month
    
    The following table describes the main mitigation capabilities of each protection level.
    
    **Mitigation capabilities**
    
    **Unprotected**
    
    **Antivirus**
    
    **Host Protection**
    
    **Hosts and Container Protection**
    
    Detection for some malware and cloud product threats
    
    Supported
    
    Supported
    
    Supported
    
    Supported
    
    Anti-virus scanning and host intrusion detection
    
    Unsupported
    
    Supported
    
    Supported
    
    Supported
    
    Anti-brute force
    
    Unsupported
    
    Unsupported
    
    Supported
    
    Supported
    
    Host behavior prevention
    
    Unsupported
    
    Supported
    
    **Note**
    
    Only blocking processes based on malicious MD5 hashes is supported.
    
    Supported
    
    Supported
    
    Malicious network behavior prevention
    
    Unsupported
    
    Unsupported
    
    Supported
    
    Supported
    
    Attack attribution
    
    Unsupported
    
    Unsupported
    
    Supported
    
    Supported
    
    Application vulnerability detection
    
    Unsupported
    
    Unsupported
    
    Supported
    
    Supported
    
    Container security
    
    Unsupported
    
    Unsupported
    
    Unsupported
    
-   Purchase instructions: After the feature is enabled, you must authorize specific assets for the feature to take effect. You can **customize asset attachments** during purchase**.**
    
    **Important**
    
    Default attachment rules:
    
    -   For server assets running container environments (including Alibaba Cloud ACK cluster nodes, Intelligent Computing LINGJUN, and servers connected to self-managed K8s clusters): **Host and Container Protection**.
        
    -   For other assets: **Host Protection**.
        
    -   For newly added servers: **Host Protection**.
        
    

#### **CSPM**

-   Feature description: Provides identity and permission management, automated compliance checks, and cloud product configuration baseline detection. This lets you centrally manage configuration risks across multicloud products.
    
-   Purchase instructions: Billing is based on the number of quotas. Number of quotas = Number of scans (Number of cloud products × Number of asset instances × Number of check items) + Number of authentications + Number of successful fixes.
    

#### **Vulnerability Fixing**

-   Feature description: Allows you to fix **Linux Software Vulnerability** and **Windows System Vulnerability** on your servers with a single click in the console.
    
-   Purchase instructions: Enter the number of vulnerability fixes you want to purchase based on the number of vulnerabilities you need to fix each month.
    
    **Note**
    
    The number of vulnerability fixes is the sum of all vulnerabilities fixed on all your servers. For example, if the same vulnerability exists on 10 servers, fixing it with a single click in Security Center consumes 10 fixes.
    

#### **Agentic SOC**

-   Feature description:
    
    -   **Agentic SOC**: Supports unified log collection from multicloud environments, multiple accounts, and various products such as Web Application Firewall (WAF), Cloud Firewall, and virtual private cloud (VPC). It provides a closed-loop process for detecting, responding to, and handling security alerts and events. This improves security operations efficiency and helps meet the log audit requirements of MLPS 2.0.
        
    -   **Security Operations Agent**: An advanced intelligent value-added service based on Agentic SOC. It uses Agentic AI as its core engine and deeply integrates with Alibaba Cloud's native security data and infrastructure. The service uses the autonomous perception, inference, and execution capabilities of agents to independently analyze security events to help you achieve rapid security event response.
        
-   Purchase instructions:
    
    -   The billable items vary based on the options you purchase. For more information about billing, see [Detailed billing information](/help/en/security-center/product-overview/billing-overview#03398de4ffa4h).
        
        -   **Agentic SOC**: Billed on a tiered basis for **Log Ingestion Traffic**. The higher the usage, the lower the unit price.
            
            **Important**
            
            In pay-as-you-go mode, you cannot purchase **Log Storage Capacity**. Therefore, you cannot store logs for queries and audits.
            
        -   **Security Operations Agent**: In addition to the basic charge for **Log Ingestion Traffic** from **Agentic SOC**, you are also charged for **Intelligent Usage Analysis** and **Number of Managed Instances**.
            
            -   **Intelligent Usage Analysis**: The analysis usage consumed by **Security Operations Agent** to analyze alerts for risk events, investigate events, perform traceability and attribution, and generate security reports.
                
            -   **Number of Managed Instances**: **Security Operations Agent** supports security operations and automated handling across instances. Billing is based on the number of managed instances, and each invoked instance is billed. Instances can include ECS, WAF, ALB, multicloud products, and third-party security vendor products.
                
                **Note**
                
                Each instance is counted only once, and duplicates are automatically removed.
                
    -   If you check **Access Policy**, some log sources from **Security Center, Web Application Firewall, Cloud Firewall**, and **ActionTrail** under the current Alibaba Cloud account are automatically connected.
        

#### **Anti-ransomware**

-   Feature description: Provides anti-ransomware backup and restore capabilities. You can use backup files to recover servers and databases after a ransomware attack.
    
-   Purchase instructions:
    
    -   Billed based on the size of backup files and the data storage duration. For more information about billing, see [Anti-ransomware: Billing method: This feature is billed based on the size of backup files in GB and the storage duration in hours. Billing cycle: Usage is accumulated hourly and billed daily. Price: USD 0.00013 per GB per hour.](/help/en/security-center/product-overview/billing-overview#91077f6728rfw).
        
    -   This service is available only in specific regions. You can set the protection data volume as needed. For information about the supported regions, see [Anti-ransomware service overview](/help/en/security-center/user-guide/overview-2#title-qjb-640-m6r).
        
    -   If you check **Set Recommended Policy**, the system automatically backs up important file paths on your existing servers regularly. To adjust the policy, go to the anti-ransomware page. For more information, see [Manage an anti-ransomware policy](/help/en/security-center/user-guide/manage-an-anti-ransomware-policy-1).
        

#### **Application Protection**

-   Feature description: The application protection feature is based on runtime application self-protection (RASP) technology. It provides applications with self-protection capabilities to detect and block attacks in real time.
    
-   Purchase instructions: After the feature is enabled, you must authorize specific assets for the feature to take effect. You can **customize asset connections** during purchase**.**
    
    **Important**
    
    By default, all assets are protected and connected using the slow access method.
    

#### **Agentless Detection**

-   Feature description: Performs lightweight vulnerability scanning and comprehensive risk investigation without installing a client (agent) on the server.
    
-   Purchase instructions: Billed based on the volume of scanned data.
    

#### **Serverless Asset Protection**

-   Feature description: Provides intrusion detection and vulnerability scanning for Serverless assets such as Elastic Container Instance (ECI). For more information, see [Serverless security](/help/en/security-center/user-guide/serverless-assets).
    
-   Purchase instructions: After the feature is enabled, you must authorize specific assets for the feature to take effect. You can **customize asset attachments** during purchase**.**
    
    **Important**
    
    By default, **Serverless Asset Protection** protection is enabled for all Serverless assets.
    

#### **Malicious File Detection**

-   Feature description: Detects hidden malware, webshells, viruses, and other potential risk files in the server file system through deep scanning.
    
-   Purchase instructions: Billed based on the number of scanned files. For more information about billing, see [Billing details](/help/en/security-center/product-overview/billing-overview#744af68b7c444).
    

#### **Log Management**

-   Feature description: Log Management is a log audit and analysis feature based on Alibaba Cloud Simple Log Service (SLS). It relies on the rich detection and protection capabilities of Security Center and the product integration capabilities of the Agentic SOC module to provide you with unified log auditing, built-in security reports, SQL-based analysis and traceability, and flexible storage policies.
    
    **Important**
    
    If you have also purchased the **Log Analysis** subscription service, Security Center logs will be stored in two separate locations_._ To avoid duplicate charges, we recommend that you evaluate your needs and then go to the Security Center console to disable the relevant log delivery switch in the **Log Analysis** module.
    
-   Purchase instructions: You need to configure a log storage region.
    

## **Purchase procedure**

## Subscription

1.  **Log on and go to the purchase page**
    
    Log on to your Alibaba Cloud account and go to the [Security Center purchase page](https://yundun.console.alibabacloud.com/?p=sas_buy#/buy).
    
2.  **Select an edition**
    
    **Important**
    
    If you have already enabled the **Host and Container Security** pay-as-you-go service, you can only select **Value-added Plan**.
    
    -   **Billing Method**: Select **Subscription**.
        
    -   **Protection Scenario**: The system automatically recommends an edition and add-ons based on the selected scenario.
        
    -   **Edition**: For details on the basic protection capabilities of each edition, see .
        
    -   **Protected Servers**: Specify the total number of servers to protect. By default, this displays the Alibaba Cloud Elastic Compute Service (ECS) instances and connected third-party servers under your account.
        
        **Note**
        
        This parameter is not required if you select the **Anti-virus** or **Value-added Plan**.
        
    -   **Cores**: The number of vCPUs on your servers. By default, this displays the total number of cores for ECS instances and connected third-party servers under your account.
        
        **Note**
        
        This parameter is required only if you select the Anti-virus Edition or Ultimate Edition.
        
3.  **Configure** **Protection Quota**
    
    To activate protection, you must assign the purchased quotas to specific servers.
    
    -   Automatic binding (default):
        
        The system automatically assigns quotas to unprotected servers under your account based on the default policy. You can unbind or rebind them later. For more information, see [Manage quotas for Host and Container Security](/help/en/security-center/user-guide/authorization-number-management).
        
    -   Custom binding:
        
        1.  Click **Custom Quota Binding** and select the region where your servers are located.
            
        2.  In the server list, select the servers you want to bind and choose the corresponding version in the **Edition** column.
            
            If you select multiple servers, click the **Update Version** button at the bottom of the list to bind the same protection version to all selected servers.
            
        3.  (Optional) Select **Automatically Add New Servers to Security Center**. New servers added later will be automatically bound to **the version you are purchasing** to enable protection.
            
            **Warning**
            
            If you do not select this option, you must manually bind new servers to protect them. For instructions, see [Manage quotas for Host and Container Security](/help/en/security-center/user-guide/authorization-number-management).
            
4.  **Select add-ons**
    
    Based on your business needs, find the corresponding add-on module, set **Purchase or Not** to **Yes**, and complete the configuration.
    
5.  **Confirm and pay**
    
    Read and agree to the **Security Center Terms of Service**, then click **Order Now** and complete the payment.
    
6.  **View your purchased service**
    
    After the purchase is complete, log on to the console. You can view your current service in the **Overview** page **Subscription** section.
    

## Pay-as-you-go

1.  **Log on and go to the purchase page**
    
    Log on to your Alibaba Cloud account and go to the [Security Center purchase page](https://yundun.console.alibabacloud.com/?p=sas_buy#/buy).
    
2.  **Select services**
    
    Based on your business needs, find the corresponding add-on module, set **Purchase or Not** to **Yes**, and complete the configuration.
    
3.  **Quota and binding logic**
    
    For some services to take effect, you must assign their quota to specific assets after you enable them. The configuration steps are as follows:
    
    -   **Host and Container Security**: Supports custom binding of host assets. Follow these steps:
        
        **Important**
        
        If you do not configure this, the system binds host assets according to the default rules:
        
        -   Server assets that run container environments, including Alibaba Cloud ACK cluster nodes, Intelligent Computing LINGJUN, and servers connected to self-managed K8s clusters: **Host and Container Protection**.
            
        -   All other assets: **Host Protection**.
            
        -   New servers added later: **Host Protection**.
            
        
        1.  On the purchase page, click **Custom Quota Binding** and select the region where your servers are located.
            
        2.  In the server list, select the servers you want to bind and choose the corresponding protection level in the **Protection Level** column.
            
            After you select multiple servers, click **Change Protection Level** to modify the protection level for all of them at once.
            
        3.  In the **Automatically Add New Servers to Security Center** section, set the protection level that will be automatically bound to new servers.
            
    -   **Serverless Asset Protection**: Supports custom binding of assets. Follow these steps:
        
        **Important**
        
        If you do not configure this, the system enables **Serverless Asset Protection** protection for all serverless assets by default.
        
        1.  Click **Custom Quota Binding**, select the region where your servers are located, and select the corresponding assets.
            
        2.  Select **Automatically Add New Assets** to automatically enable **Serverless Asset Protection** protection for new serverless assets added later.
            
            **Warning**
            
            If you do not select this option, you must manually bind new serverless assets. Otherwise, they will not be protected by Security Center. For instructions, see [Bind or unbind authorized assets](/help/en/security-center/user-guide/serverless-assets#5fe0185cf3lvt).
            
    -   **Application Protection**: Supports custom binding of assets. Follow these steps:
        
        **Important**
        
        -   If you do not configure this, the system protects all assets by default and uses the slow onboarding method.
            
        -   You can also configure this after purchase by logging on to the console and going to **Application Protection** > **Application Configurations** and then **Access Management** as needed.
            
        
        1.  Click **Custom Quota Binding** and select the region where your servers are located.
            
        2.  Select the corresponding assets and click **OK**.
            
4.  **Confirm and pay**
    
    Read and agree to the **Security Center Terms of Service**, then click **Order Now** and complete the payment.
    
5.  **View your purchased service**
    
    After the purchase is complete, log on to the console. You can view your current service in the **Overview** page **Pay-as-you-go** section.
    

## **Purchase rules and limits**

-   **Subscription**: One plan per Alibaba Cloud account; you can upgrade at any time.
    
-   **Pay-as-you-go**: Different protection levels per asset; multiple add-ons can be used together.
    
-   **Switching billing**: To change billing model for a feature, unsubscribe or disable the current service first, then activate the other model.
    
-   **Container protection**: To protect ACK nodes, self-managed K8s, or LINGJUN assets, you must purchase **Enterprise Edition** or **Ultimate Edition** (subscription) or the corresponding pay-as-you-go level; bind those assets to that plan or level.
    

## **Unsubscribe**

-   **Subscription service**
    
    -   **Unsubscribe from add-ons**
        
        On the **Overview** page, in the **Subscription** section, click **Change** > **Downgrade**. On the order upgrade/downgrade page, on the **Order Downgrade** tab, set **Purchase or Not** to **No** for the relevant service. For more information, see [Downgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center#section-9aq-kgp-fzl).
        
        **Important**
        
        The specific refund amount is subject to the amount displayed on the downgrade page. For information on where your refund will be sent, see [Refund destinations](/help/en/user-center/refund-flow#topic-2059665).
        
    -   **Unsubscribe from all services**
        
        You can also contact technical support to unsubscribe from the Security Center instance.
        
-   **Pay-as-you-go**
    
    On the **Overview** page of the Security Center console, in the **Pay-as-you-go** section, turn off the switch for the relevant service. Once disabled, the service will no longer incur charges.
    

## **FAQ**

**Do subscription and pay-as-you-go result in duplicate charges?**

No. An add-on supports only one billing model at a time. If your subscription plan includes an add-on that overlaps with an existing pay-as-you-go service, the system can automatically disable the pay-as-you-go counterpart and use the subscription.

**Can I convert pay-as-you-go to subscription?**

No. Disable the pay-as-you-go services first, then purchase subscription following the steps above.

**Can I use subscription and pay-as-you-go together?**

Yes. The same account can use both models for different modules (e.g., subscription for Vulnerability remediation, pay-as-you-go for Agentic SOC).

**Why is the order amount higher than the listed price?**

The total depends on the number of protected servers/vCPUs and any pre-selected add-ons. Set unneeded add-on capacities to 0 before placing the order.

**How do I get free services?**

**Basic Edition**: Automatically available after Alibaba Cloud account verification; permanently free. **Enterprise Edition free trial**: 7-day trial of the full Enterprise Edition, one per account (for accounts that have never used the trial or a paid plan); activate from the Overview page.

**What happens after the Enterprise Edition trial expires?**

Configurations and data are retained for 7 days and then automatically deleted.

**Can I cancel the Enterprise Edition free trial?**

Yes. On the **Overview** page you can cancel the trial. Each account is eligible for only one trial; after you cancel, you cannot start another trial.

**Why don't I see the free trial option?**

Your account has already used the 7-day trial, or has already purchased a paid plan.
