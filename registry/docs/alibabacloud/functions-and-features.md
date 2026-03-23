Security Center is a cloud-native security platform that unifies asset management, mitigates security risks, and delivers threat detection, response, and source tracing across multicloud environments. By leveraging both lightweight agents and agentless detection, Security Center protects your servers, containers, and cloud products while helping you meet classified protection compliance requirements. This document describes the core features and billing models of Security Center.

### **Core concepts**

**Concept**

**Explanation**

**Edition**

In the **subscription** billing model, an edition represents the protection capabilities for a server. Higher editions include more features.

**Protection level**

After you enable the pay-as-you-go feature for **Host and Container Security**, the protection level represents the mitigation capabilities configured for a server. Higher protection levels include more comprehensive features.

**Value-added service**

In the **subscription** model, these are features that you must purchase separately. Examples include **Vulnerability Fix**, **Agentic SOC**, and **Container Image Scan**.

## Feature overview

### **Billing items**

**Criteria**

**Subscription (upfront)**

**Pay-as-you-go**

**Billing characteristics**

Pay a fixed cost monthly or yearly. This makes budget management easier.

Pay for what you use. This method is flexible and requires no upfront investment.

**Billable items**

**Fee = Edition fee + Value-added service fee (optional).**

-   **Edition fee**: Security Center provides the **Anti-virus**, **Advanced**, **Enterprise**, **Ultimate**, and **Value-added Plan**. Higher-tier editions include more comprehensive features.
    
-   **Value-added service fee**: The fee for extra services, such as anti-ransomware or Agentic SOC.
    

**Fee = Basic service fee + Feature usage fee.**

-   **Basic service fee**: A fixed monthly fee that is charged when you enable any pay-as-you-go feature. By default, this includes DingTalk Robot, security reports, and Task Hub (requires you to first enable or purchase the vulnerability fixing feature).
    
-   **Feature usage fee**: You are charged for the specific features you enable, such as host and container security or Simple Log Service. You can enable and be billed for each feature separately.
    

### **Feature menu**

**Feature module**

**Feature overview**

[Overview](#section-vdk-1xk-e2c)

Calculates an overall security score to quantify your asset security posture and identify weaknesses. Provides a dashboard for visualizing your network security status.

[Asset Center](#section-fvb-ywd-eyc)

Provides a unified inventory and panoramic view of your cloud assets, containers, and servers. Collects asset fingerprints, such as accounts, ports, and processes, for fine-grained inventory and visual management.

[Risk Governance](#section-xhb-ybs-4ee)

Scans and analyzes the Internet exposure risks of your assets. Provides vulnerability detection and management for systems, applications, and Web-CMS. Performs baseline compliance checks and sends risk alerts based on classified protection standards and best practices.

[Detection and Response](#section-m4p-iou-j2k)

Monitors and alerts you to various security threats in real time. These threats include process anomalies, web shells, malware, unusual logons, and abnormal network connections. Supports attack tracing, threat analysis, and event handling to improve response efficiency.

[Agentic SOC](#af5273217cba7)

Collects and analyzes security logs and alerts from multicloud and multi-account environments. Uses built-in detection rules and AI models to automatically discover threats. Uses automated response playbooks for quick handling.

[Host Protection](#section-1r9-gov-xja)

Integrates an anti-virus engine and malicious behavior defense rules to harden hosts. Features include brute-force attack protection and core file monitoring. Provides advanced protection such as anti-ransomware and web tamper proofing.

[Container Protection](#section-cj5-hjh-1q5)

Provides active defense for container runtimes. This includes blocking risky images, preventing container escapes, and protecting against file tampering. Secures container clusters with policies such as network microsegmentation and image signing.

[Application Protection](#title-y9e-7mq-9tl)

Uses runtime application self-protection (RASP) technology to detect and block attacks from within your applications. This provides built-in, active security for your business applications.

[System Settings](#section-1kp-gnj-kby)

Provides configuration options for Task Hub, Security Report, client management, access control, alert notifications, and multi-account management. Supports global custom settings for security policies and O&M.

## **Detailed features**

### **Overview**

-   #### [Security Score](/help/en/security-center/user-guide/security-overview#f7709b9b1bkgo)
    
    -   **Feature description**: This feature provides a comprehensive security assessment using data from dual global data centers (China and Global). It generates a health score on a 0–100 point scale by dynamically deducting points based on the real-time security status of your cloud assets, such as alerting events and configuration bugs. A higher score indicates a stronger security posture for your assets and directly reflects existing security risks and the degree of remediation required.
        
    -   **Supported editions**: Supported by default. No edition limits apply.
        

### **Assets**

-   #### [Asset Overview](/help/en/security-center/user-guide/view-information-on-the-cloud-asset-overview-tab#task-2515262)
    
    -   **Feature description**: Provides a panoramic view of your cloud assets, network topology, security score, and asset security risks, offering a unified entry point for managing the security of your cloud assets.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        **Enterprise**, **Ultimate**
        
        Pay-as-you-go
        
        Enable the pay-as-you-go feature for **Host and Container Security** and set the server protection level to **Host Protection** or **Hosts and Container Protection**.
        
-   #### [Container Asset Overview](/help/en/security-center/user-guide/use-the-feature-of-container-network-topology#task-1963548)
    
    -   **Feature description**: The Container Asset Overview feature provides visualized security management and a network topology of your cloud container assets, covering clusters, containers, images, and applications to help you manage container asset security more efficiently.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        Only **Ultimate** is supported.
        
        Pay-as-you-go
        
        Enable the pay-as-you-go feature for **Host and Container Security** and set the protection level for your server to **Hosts and Container Protection**.
        
-   #### [**Server List**](/help/en/security-center/user-guide/manage-servers#task-2228799)
    
    -   **Feature description**: Provides security status information for all your servers, including protection status, group, region, and virtual private cloud (VPC) statistics.
        
    -   **Supported editions**: Supported by default. No edition limits apply.
        
-   #### [Asset Fingerprint Investigation](/help/en/security-center/user-guide/use-the-asset-fingerprints-feature#task-2338513)
    
    -   **Feature description**: Collects the following fingerprint data:
        
        -   **Account**: Collects server account and permission information, enabling you to inventory privileged accounts and detect privilege escalation.
            
        -   **Port**: Collects and displays port listener information, helping you inventory open ports.
            
        -   **Process**: Collects and displays process snapshots, helping you inventory legitimate processes and detect abnormal ones.
            
        -   **Middleware**: Collects middleware information to help you understand the middleware that exists on your assets.
            
        -   **Database**: Collects database information, helping you understand the databases present on your assets.
            
        -   **Web Service**: Collects web service information, helping you understand the web services present on your assets.
            
        -   **Software**: Inventories installed software, enabling you to quickly locate affected assets when a high-risk vulnerability is discovered.
            
        -   **Scheduled Task**: Collects scheduled task information, helping you promptly inventory task paths on your assets.
            
        -   **Startup Item**: Collects startup item information, enabling you to quickly locate corresponding startup items when handling vulnerabilities.
            
        -   **Kernel Module**: Collects kernel module information, enabling you to quickly locate the corresponding kernel modules when handling vulnerabilities.
            
        -   **Website**: Collects website information from your servers to help you understand the details of the websites on your assets.
            
        -   **IDC Probe Finding**: If you configure an IDC probe on an IDC server, this feature displays information about other IDC servers detected within the IDC data center, helping you understand basic information about the servers in your IDC.
            
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        Only **Enterprise** and **Ultimate** are supported.
        
        Pay-as-you-go
        
        Enable the pay-as-you-go feature for **Host and Container Security** and set the server's protection level to **Host Protection** or **Hosts and Container Protection**.
        
-   #### [Security Check](/help/en/security-center/user-guide/use-the-security-check-feature#task-2231068)
    
    -   **Feature description**: After you perform a one-click check, Security Center runs checks such as vulnerability detection and baseline checks on the specified servers based on your configurations.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        Only **Advanced**, **Enterprise**, and **Ultimate** are supported.
        
        Pay-as-you-go
        
        Enable the pay-as-you-go feature for **Host and Container Security** and set the protection level assigned to your server to **Host Protection** or **Hosts and Container Protection**.
        
-   #### [**Container Assets**](/help/en/security-center/user-guide/view-security-information-about-containers#task-2424021)
    
    -   **Feature description**: Provides security status statistics and risk information for all clusters, pods, containers, and images.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        Only **Ultimate** is supported.
        
        Pay-as-you-go
        
        Enable the pay-as-you-go feature for **Host and Container Security** and set the protection level for your server to **Hosts and Container Protection**.
        
-   #### [**Cloud Products**](/help/en/security-center/user-guide/view-information-about-cloud-services#task-1813905)
    
    -   **Feature description**: Provides security status information for your cloud products, including information about at-risk cloud products and statistics by category, such as Server Load Balancer and ApsaraDB RDS.
        
    -   **Supported editions**: Supported by default. No edition limits apply.
        
-   #### [**Website**](/help/en/security-center/user-guide/view-website-information#task-1813737)
    
    -   **Feature description**: Provides security status information for all your websites, including statistics on root domain names, subdomains, and their asset risk status and alert counts.
        
    -   **Supported editions**: Supported by default. No edition limits apply.
        
-   #### [**Serverless Assets**](/help/en/security-center/user-guide/serverless-assets)
    
    -   **Description**: Detects runtime security risks for instances of cloud products that use a serverless architecture on Alibaba Cloud, including assets such as Serverless App Engine (SAE) and serverless instances of Container Compute Service (ACS). It provides malicious file detection, vulnerability scanning, and compliance baseline checks.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        Not supported
        
        Pay-as-you-go
        
        You can enable the **Serverless Asset Protection** pay-as-you-go feature.
        

### **Risk Governance**

-   #### [Asset Exposure Analysis](/help/en/security-center/user-guide/asset-exposure-analysis#task-2011667)
    
    -   **Feature description**: Scans and analyzes your cloud resources on Alibaba Cloud, such as ECS instances, gateway assets, system components, and ports, identifying security risks and vulnerabilities that may be exposed to the Internet. This helps you promptly find and resolve issues to improve the security of your cloud resources.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        Only **Enterprise** and **Ultimate** are supported.
        
        Pay-as-you-go
        
        Enable the pay-as-you-go feature for **Host and Container Security** and set the protection level for your server to **Host Protection** or **Hosts and Container Protection**.
        
-   #### [**Vulnerability Management**](/help/en/security-center/user-guide/overview-4)
    
    -   **Feature description**: Automatically discovers, assesses, and fixes security vulnerabilities on your servers, providing automated vulnerability scanning and remediation solutions to replace traditional manual patching for large-scale server cluster security operations.
        
        ## Scan methods
        
        Vulnerability scanning supports two methods: **manual scan** and **automatic scan (periodic)**.
        
        -   **Manual scan:** Immediately assesses the vulnerability status of your servers.
            
        -   **Automatic scan** (periodic): Sets up periodic tasks for automated and continuous vulnerability monitoring.
            
        
        ## **Vulnerability fix**
        
        Vulnerability scanning supports the following three fix methods:
        
        -   **One-click fix:** Security Center provides a one-click fix feature in the console. This feature helps you automate vulnerability fixing without needing to log on to servers and perform manual operations.
            
            **Important**
            
            The one-click fix feature is not supported for **Application Vulnerability** and **Urgent Vulnerability**.
            
        -   **Automatic fix:** You can turn on the **Automatic Vulnerability Remediation** switch and configure automatic fixing tasks to periodically fix newly discovered vulnerabilities within a specified period.
            
            **Important**
            
            -   Automatic fixing tasks depend on the **one-click fix** feature. If the current edition or vulnerability type does not support **one-click fix**, automatic fixing is also not supported.
                
            -   **Automatic fixing** is supported only for non-kernel Linux system vulnerabilities.
                
            
        -   **Manual fix:** If the current edition or vulnerability type does not support one-click fix, or if the **Vulnerability Fix** feature is not enabled, you must log on to the server and follow the fixing suggestions in the vulnerability details to manually fix the vulnerability.
            
        
        ## Vulnerability types and solutions
        
        -   **Linux Software Vulnerability**:
            
            -   Detection method: Compares software versions against the official CVE vulnerability database using the OVAL matching engine, generating alerts for vulnerabilities in the software versions you are using.
                
            -   Fix solution: Supports one-click fixes and uses automated snapshots to enable one-click rollbacks for safer vulnerability remediation.
                
        -   **Windows System Vulnerability**:
            
            -   Detection method: Syncs with the official Microsoft patch source to detect and alert you to high-risk and impactful vulnerabilities.
                
            -   Fix solution: Supports one-click fixes, automatically identifies prerequisite patch packages required for a fix to resolve issues where servers cannot be patched due to missing prerequisites, and reminds you if a system restart is needed to complete the fix, improving the efficiency of Windows system vulnerability remediation.
                
        -   **Web-CMS Vulnerability**:
            
            -   Detection method: Monitors website directories, identifies common website building software, and detects vulnerabilities in the software by comparing vulnerability files.
                
            -   Fix solution: Uses self-developed vulnerability patches and supports one-click fixes, remediating vulnerabilities at the source code level by replacing or modifying files.
                
        -   **Urgent Vulnerability**:
            
            -   Detection method: Provides detection for emergency vulnerabilities that suddenly appear on the network.
                
            -   Fix solution: Does not support one-click fixes. You can log on to the server and fix them manually based on the provided suggestions.
                
        -   **Application Vulnerability**:
            
            -   Detection method: Provides detection for weak passwords in system services, system service vulnerabilities, and application service vulnerabilities.
                
            -   Fix solution: Does not support one-click fixes. You can log on to the server and fix them manually based on the provided suggestions.
                
        
    -   **Supported editions**:
        
        **Service model**
        
        **Service edition/Protection level**
        
        **Manual scan scope**
        
        **Automatic scan scope (periodic)**
        
        **Vulnerability fixing (one-click and automatic)**
        
        **Subscription**
        
        **Enterprise Edition, Ultimate Edition**
        
        All
        
        All
        
        Supports fixing of Linux, Windows, and Web-CMS vulnerabilities.
        
        **Premium Edition**
        
        All vulnerabilities except for **Application Vulnerability**.
        
        All vulnerabilities except for **Application Vulnerability**.
        
        Supports fixing of Linux and Windows vulnerabilities.
        
        **Free Edition, Value-added Service Edition**, **Anti-virus Edition**
        
        Only **Urgent Vulnerability**.
        
        **Linux Software Vulnerability**, **Windows System Vulnerability**, and **Web-CMS Vulnerability**.
        
        **Important**
        
        To enable the one-click fix feature, you must purchase the **Vulnerability Fix** value-added service. For more information, see [Purchase Vulnerability Fixing (Subscription)](/help/en/security-center/user-guide/purchase-security-center#7d877c311aaop) and [Purchase Vulnerability Fixing (Pay-as-you-go)](/help/en/security-center/user-guide/purchase-security-center#66ccf503255j1).
        
        After you make a purchase, you can fix Linux and Windows vulnerabilities.
        
        **Pay-as-you-go**
        
        **Host Protection and Host and Container Protection**
        
        All
        
        All
        
        **Unprotected and Anti-virus**
        
        Only **Urgent Vulnerability**.
        
        **Linux Software Vulnerability**, **Windows System Vulnerability**, and **Web-CMS Vulnerability**.
        
-   #### [**Cloud Security Posture Management**](/help/en/security-center/user-guide/cspm)
    
    -   **Feature description**: Cloud Security Posture Management (CSPM) uses automated risk checks, baseline scans, and attack path analysis to discover and manage security risks in cloud assets. This feature identifies security risks, such as cloud product configuration errors and server configuration defects, and provides remediation suggestions to resolve these configuration-based risks.
        
        -   [Cloud Product Configuration Risk Check](/help/en/security-center/user-guide/cloud-service-configuration-assessment/): Scans the configurations of your cloud assets to identify configuration risks in multicloud environments, covering three scenarios: identity and permission management, cloud product security best practices, and compliance checks.
            
        -   [Baseline Risk Check](/help/en/security-center/user-guide/baseline-check/): Dives deep into the host (server) operating system level, discovering and remediating issues such as weak passwords, insecure configurations, or missing important patches based on industry standards and security specifications to meet compliance requirements.
            
            ## Server Baseline Check
            
            -   **Check description**:
                
                -   Scans server security configurations through a task-based model and generates alerts for items that do not meet standards.
                    
                -   Supports custom detection policies. You can set check items, detection cycles, and the server groups to which they apply. Custom detection scripts are not currently supported.
                    
                -   Supports custom weak password rules. It periodically checks your cloud product baselines for these weak passwords based on your configured baseline policies and generates an alert if a match is found.
                    
            -   **Detection scope**:
                
                -   **High-risk exploit**
                    
                    Detects risks such as unauthorized access vulnerabilities in CouchDB and Docker.
                    
                -   **Container security**
                    
                    Detects risks in Docker, Kubernetes master nodes, and Kubernetes nodes.
                    
                -   **Classified protection compliance**
                    
                    Checks for compliance with the security baseline requirements of MLPS Level 3, MLPS Level 2, and international general security best practices.
                    
                -   **Best Security Practices**
                    
                    Checks for compliance with the security baseline requirements for Linux, Windows, Redis, and more.
                    
                -   **Weak password**
                    
                    Detects weak passwords used for logging on to MongoDB, FTP, Linux, and more.
                    
            
            ## Container Baseline Check
            
            -   **Check description**: Provides security detection and alerts for container configurations, performing risk checks for container baseline configurations on Kubernetes master and node nodes based on Alibaba Cloud container security best practices.
                
            -   **Detection scope:**
                
                -   **Alibaba Cloud Standard - Docker Security Baseline Check**
                    
                    Performs risk investigation and provides timely warnings for Docker security audits, service configurations, and file permissions based on the Docker baseline standard from Alibaba Cloud best practices.
                    
                -   **Alibaba Cloud Standard - Kubernetes Master Security Baseline Check**
                    
                    Performs baseline checks for Kubernetes master nodes based on Alibaba Cloud container security best practices.
                    
                -   **Alibaba Cloud Standard - Kubernetes Node Security Baseline Check**
                    
                    Performs baseline checks for Kubernetes node nodes based on Alibaba Cloud container security best practices.
                    
            
        -   [Attack Path Analysis](/help/en/security-center/user-guide/attack-path-analysis): Analyzes attack paths and potential risks in the cloud by correlating risks such as vulnerabilities, exposed assets, and misconfigurations. It also supports posture analysis and management of cloud product configurations and potential attack paths in a unified console.
            
    -   **Supported editions**:
        
        ## Subscription
        
        -   Purchase the **Advanced, Enterprise, or Ultimate Edition**
            
            **Important**
            
            If your current edition is **Anti-virus** or the **value-added plan** and you have not purchased the **CSPM** value-added service, you can detect and verify the free check items of **Cloud service configuration check**. However, **risk remediation**, **baseline check**, and **attack path analysis** are not supported.
            
            **Feature**
            
            **Feature details**
            
            **Quota consumption**
            
            **Cloud service configuration check**
            
            **Check items**: Free check items.
            
            **Note**
            
            The Ultimate Edition additionally supports KSMP check items.
            
            **Operations**: Detection and verification are supported. Remediation is not supported.
            
            Does not consume Quota.
            
            **Baseline check**
            
            **Check items**:
            
            -   Advanced Edition: Supports only weak password check items.
                
            -   Enterprise Edition: Supports all check items except those for container security.
                
            -   Ultimate Edition: Supports all check items.
                
            
            **Operations**: Scanning, verification, and remediation are supported.
            
            Included in the edition fee; does not consume Quota.
            
            **Attack path analysis**
            
            Not supported
            
            N/A
            
        -   Purchase the **CSPM** value-added service
            
            **Important**
            
            If you purchase a service edition at the same time, feature support is as follows:
            
            -   **For Advanced, Enterprise, or Ultimate Edition**: Your current edition determines the supported check items and operations for **Baseline check** (see the [description of Advanced, Enterprise, or Ultimate Editions](#36b162c993jbb)). **Cloud service configuration check** and **Attack path analysis** are not affected by the edition and are detailed in the table below.
                
            -   **For Anti-virus Edition and value-added plan**: **Baseline check**, **Cloud service configuration check**, and **Attack path analysis** are not affected by the edition and are detailed in the table below.
                
            
            **Feature**
            
            **Feature details**
            
            **Quota consumption**
            
            **Cloud service configuration check**
            
            **Check items**: All check items (free + paid).
            
            **Operations**: Detection, verification, and remediation are supported.
            
            **Free check items**: Successful remediation consumes Quota.
            
            **Paid check items**: Scanning, verification, or successful remediation consumes Quota.
            
            **Baseline check**
            
            **Check items**: All check items.
            
            **Operations**: Detection, verification, and remediation are supported.
            
            Scanning, verification, or successful remediation consumes Quota.
            
            **Attack path analysis**
            
            Supported
            
            This feature is included with the paid CSPM service and does not consume Quota.
            
        
        ## Pay-as-you-go
        
        You must enable the pay-as-you-go feature for **CSPM**.
        
        **Important**
        
        If you purchase only the pay-as-you-go **Host and Container Security** feature, it supports the detection and validation of free check items for **Cloud Service Configuration Risk**, but does not support the **threat remediation**, **System Baseline Risks**, or **Attack Path** features.
        
        **Feature**
        
        **Feature details**
        
        **Quota consumption**
        
        **Cloud service configuration check**
        
        **Check items**: All check items (free + paid).
        
        **Operations**: Detection, verification, and remediation are supported.
        
        -   **Free check items**: Successful remediation consumes Quota.
            
        -   **Paid check items**: Scanning, verification, or successful remediation consumes Quota.
            
        
        **Baseline check**
        
        **Check items**: All check items.
        
        **Operations**: Detection, verification, and remediation are supported.
        
        Scanning, verification, or successful remediation consumes Quota.
        
        **Attack path analysis**
        
        Supported
        
        This feature is included with the paid CSPM service and does not consume Quota.
        
-   #### [AccessKey Leak Detection](/help/en/security-center/user-guide/detection-of-accesskey-pair-leaks#concept-vb5-3jw-f2b)
    
    -   **Feature description**: Monitors the code hosting site GitHub in real time to capture and determine whether any publicly available source code contains AccessKey information for your Alibaba Cloud account.
        
    -   **Supported editions**: Supported by default. No edition limits apply.
        
-   #### [**Cloud Honeypot**](/help/en/security-center/user-guide/overview-10)
    
    -   **Feature description**: Provides an out-of-the-box solution to build active defense capabilities on and off the cloud. Deploy honeypots on key attack paths to lure attackers and divert their targets. Attackers interact with realistically simulated applications and receive fake data, prolonging the attack time, recording complete attack behavior for source tracing, capturing advanced unknown attacks, and even enabling countermeasures. This gives security operators and defenders a proactive defense advantage.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        Purchase the **Cloud Honeypot** value-added service
        
        Pay-as-you-go
        
        Not supported.
        
-   #### [Malicious File Detection](/help/en/security-center/user-guide/detect-malicious-files)
    
    -   **Feature description**:
        
        -   File Detection SDK: Leverages the Security Center multi-engine detection platform to provide a simple and easy-to-use malicious file detection service. You only need to write a small amount of code to identify malicious files using the SDK.
            
        -   OSS File Detection: Leverages cloud-native advantages to support the detection of files in Alibaba Cloud Object Storage Service (OSS) buckets and accurately identify malicious files.
            
        -   Malicious File Handling: When a risk file, such as a web shell, mining program, or Trojan virus, is detected in an ECS instance or OSS bucket, an alert is generated. The Malicious File Detection SDK provides methods such as Add to Whitelist, Ignore, and **Block Access** to handle detected malicious files.
            
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        Purchase the **Malicious File Detection** value-added service.
        
        Pay-as-you-go
        
        You must enable the pay-as-you-go feature for **Malicious File Detection**.
        
-   #### [**Log Analysis**](/help/en/security-center/user-guide/enable-log-analysis)
    
    -   **Feature description**: Provides a unified query and analysis entry point by centrally storing and managing security-related logs, helping you quickly locate issues and meet compliance audit requirements.
        
        -   Host logs: Records logs such as logon activity, process startups, account snapshots, and DNS requests, helping you monitor user activity, system events, and application operations on your hosts to discover potential threats and optimize performance.
            
        -   Security logs: Records security logs for vulnerabilities, baselines, security alerts, and cloud security posture management, helping you observe security trends, improve security policies and defense mechanisms, and identify system weaknesses.
            
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        **Anti-virus**, **Advanced**, **Enterprise**, and **Ultimate**: You must also purchase the **Log Analysis** value-added service.
        
        **Note**
        
        For information about the specific log types supported by different editions, see [Log types and field descriptions](/help/en/security-center/user-guide/log-category-and-field-description-v2-0).
        
        Pay-as-you-go
        
        Enable the pay-as-you-go service for **Log Management**.
        
        **Note**
        
        **Log Analysis** feature has been integrated into **Log Management**. For more information, see [Migration guide from Log Analysis to Log Management](/help/en/security-center/use-cases/log-analysis-migrating-to-log-management-guide) and [Log Management](/help/en/security-center/user-guide/log-management-2-0).
        

### **Detection and Response**

**Note**

When you enable the **Agentic SOC** service, the Detection and Response feature menu is moved under Agentic SOC.

-   #### [**Security Alerts**](/help/en/security-center/user-guide/overview-6)
    
    -   **Feature description**:
        
        -   **CWPP (Cloud Workload) Security Alerts:**
            
            -   Detects security alerts for hosts, containers, and cloud products in real time. The detection scope covers activities related to processes, files, and networks on hosts and containers. Using threat detection models, it provides detection capabilities for issues including, but not limited to, abnormal process behavior, web shells, malware, vulnerability exploits, and container escapes, helping you promptly discover security threats in your assets and understand your security posture in real time.
                
            -   In addition to various detection models, the precise defense model also provides defense and interception capabilities for high-risk attacks such as ransomware, reverse shells, malicious command execution, loading of high-risk drivers, and planting of malicious files.
                
            -   It also provides methods for threat removal **(**such as **Virus Detection and Removal**, **Deep Cleanup**, and **Quarantine****)** and alert suppression **(**such as **Add to Whitelist** and **Ignore****)** to promptly handle security threats.
                
        -   **Network Defense Alert** (formerly Attack Analysis): If you enable the **Network Threat Prevention** rules in [Host Rules - Malicious Behavior Defense](/help/en/security-center/user-guide/malicious-behavior-defense) and the [Host Rules - Brute-force Attacks Protection](/help/en/security-center/user-guide/anti-brute-force-cracking) policy, Security Center provides defense and interception for high-risk network attacks such as malicious DNS requests, web shell uploads, adaptive web attack defense, and brute-force attacks. The **Network Defense Alert** page displays more information about the intercepted network attacks**.**
            
    -   **Supported editions**:
        
        ## Subscription
        
        **Service Edition**
        
        **Detection scope**
        
        **Alert handling capabilities**
        
        **Basic** **and** **Value-added Plan**
        
        Common simple attacks in the cloud, including traditional one-line web shells, logons from unusual locations, self-mutating Trojans, DDoS Trojans, and mining programs (does not include container assets).
        
        Alert suppression: **Add to Whitelist**, **Ignore**, etc.
        
        **Anti-virus**
        
        **Basic** capabilities + detection and precise defense models for suspicious and malicious files (including binaries) (does not include container assets)
        
        -   Threat removal: **Virus Detection and Removal**, **Deep Cleanup**, **Quarantine**, etc.
            
        -   Alert suppression: **Add to Whitelist**, **Ignore**, etc.
            
        
        **Advanced**
        
        Capabilities of **Anti-virus** + detection and precise defense models for suspicious and malicious process activities and file operations (does not include container assets).
        
        **Enterprise**
        
        **Advanced** capabilities + over 380 detection and precise defense models for all malicious behaviors such as process activities, file operations, and network connections (does not include container assets).
        
        **Ultimate**
        
        **Enterprise** capabilities (covering container assets) + detection and active defense models for container-specific attack behaviors such as container escapes, running of risky images, and startup of non-image programs.
        
        ## Pay-as-you-go
        
        **Protection level**
        
        **Detection scope**
        
        **Alert handling capabilities**
        
        **Unprotected**
        
        Common simple attacks in the cloud, including traditional one-line web shells, logons from unusual locations, self-mutating Trojans, DDoS Trojans, and mining programs (does not include container assets).
        
        Alert suppression: **Add to Whitelist**, **Ignore**, etc.
        
        **Antivirus**
        
        Capabilities of the **Unprotected** level + detection and precise defense models for suspicious and malicious files (including binaries) (does not include container assets)
        
        -   Threat removal: **Virus Detection and Removal**, **Deep Cleanup**, **Quarantine**, etc.
            
        -   Alert suppression: **Add to Whitelist**, **Ignore**, etc.
            
        
        **Host Protection**
        
        **Antivirus** level capabilities + over 380 detection and precise defense models for all malicious behaviors such as process activities, file operations, and network connectivity (does not include container assets).
        
        **Hosts and Container Protection**
        
        **Host Protection** (covering container assets) capabilities + detection and active defense models for container-specific attack behaviors such as container escapes, running of risky images, and startup of non-image programs.
        
-   #### [**Security Event Handling**](/help/en/security-center/user-guide/security-event-overview-cwpp)
    
    -   **Feature description**:
        
        -   Security Center uses graph computing technology to aggregate related CWPP alerts (such as those with the same MD5 hash or parent process ID) into events. You can assess the impact of an event, perform handling actions to contain the threat, and harden the system to prevent similar events from recurring.
            
        -   Handling methods: **Use Recommended Handling Policy**, **Add to Whitelist**, **Update Incident Status**, **Run Playbook**.
            
    -   **Supported editions**: Supported by default. No edition limits apply. However, different editions support different types of alert data that can be aggregated into events.
        
-   #### [Log Management](/help/en/security-center/user-guide/log-management-2-0)
    
    -   **Feature description**: Lets you store and view Security Center logs, such as vulnerability logs, security alert logs, and client event logs, helping you accurately locate alerts, trace attack sources, and improve response speed.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        Purchase **Threat Analysis** value-added service's **Log Storage Capacity**.
        
        **Important**
        
        If you only purchase log ingestion traffic, you cannot store and query Security Center logs.
        
        Pay-as-you-go
        
        Enable the pay-as-you-go service for **Log Management**.
        

### **Agentic SOC**

When you enable the **Agentic SOC** service, services that are related to **Detection and Response** are moved to the Agentic SOC service. You can also ingest logs from **third-party cloud products** (such as Tencent Cloud and Huawei Cloud) and on-premises data centers.

-   **Feature description**:
    
    -   [Product Integration](/help/en/security-center/user-guide/add-product-to-agentic-soc-2-0): Provides a unified log ingestion center to help you centrally collect, standardize, and analyze log data from third-party clouds (such as Fortinet, Chaitin, Microsoft, Sangfor, Tencent Cloud, Huawei Cloud, Hillstone, and Dosin) and on-premises data centers.
        
    -   [Rule Management](/help/en/security-center/user-guide/detection-rules): Performs in-depth detection and analysis of ingested alerts and logs to reconstruct threat attack chains and timelines, generating fused alerts and detailed security events. It also supports custom detection rules to build a threat detection system tailored to your business.
        
    -   [Security Alerts](/help/en/security-center/user-guide/security-alert)
        
        -   Analyzes and processes logs ingested into Agentic SOC to generate alerts and events.
            
        -   The CWPP Security Alerts feature is moved into the Agentic SOC Security Alerts feature.
            
    -   [Security Event Handling](/help/en/security-center/user-guide/security-incident-overview-agentic-soc)
        
        -   Uses predefined or custom Agentic SOC detection rules to analyze the context of multiple security alerts and aggregate them into complete events, reconstructing the attack chain and extracting malicious entities to help you quickly respond to and handle security risks in the cloud.
            
        -   The feature for aggregating CWPP alerts (such as those with the same MD5 hash or parent process ID) into security events is moved into Agentic SOC Security Event Handling.
            
        -   Handling methods include **Use Recommended Handling Policy**, **Update Incident Status**, **Run Playbook**, **Add to Whitelist**, and **automatic handling of security incidents (**Response Orchestration**).**
            
    -   [Response Orchestration](/help/en/security-center/user-guide/use-soar/): Security Orchestration, Automation, and Response (SOAR) is a comprehensive security solution that orchestrates and connects different systems or services according to a defined logic to achieve automated operations for security alerts and events, strengthening enterprise security defense and improving the efficiency of security event response.
        
    -   [Log Management](/help/en/security-center/user-guide/log-management-2-0):
        
        -   Standardized logs: Store standardized alert logs generated by custom rules and standardized logs generated during **Real-time Consumption** through the standardized ingestion policy.
            
        -   Security Center logs: The Log Management feature from Detection and Response is moved into the Agentic SOC Log Management feature.
            
    -   **Security Operations Agent**: An advanced intelligent value-added service provided by Agentic SOC, powered by Agentic AI as its core engine, which deeply integrates Alibaba Cloud-native security data and infrastructure and leverages the Agent's autonomous perception-inference-execution capabilities to autonomously triage security events, enabling rapid response to security events.
        
-   **Supported editions**:
    
    **Billing model**
    
    **Support details**
    
    Subscription
    
    Purchase the **Threat Analysis** value-added service.
    
    **Important**
    
    To support Security Center logs, you must purchase **Threat Analysis** **Log Storage Capacity**.
    
    Pay-as-you-go
    
    Enable the pay-as-you-go service for **Threat Analysis**.
    

### **Host Protection**

-   #### [Virus Scan](/help/en/security-center/user-guide/use-the-virus-detection-and-removal-feature#task-2500942)
    
    -   **Feature description**: The Security Center security expert team has launched the Alibaba Cloud machine learning virus scan engine through automated analysis of massive virus samples, persistence methods, and attack techniques, enabling one-click virus scanning.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        **Anti-virus**, **Advanced**, **Enterprise**, and **Ultimate**
        
        Pay-as-you-go
        
        You must have enabled the pay-as-you-go service for **Host and Container Security**, and the server's protection level must be **Antivirus**, **Host Protection**, or **Host and Container Protection**.
        
-   #### [Host Rule Management](/help/en/security-center/user-guide/use-the-host-specific-rule-management-feature/#task-2298939)
    
    -   **Feature description**:
        
        -   **Malicious Behavior Defense**: Supports built-in and custom malicious behavior defense rules to harden server system security.
            
        -   **Defense Against Brute-force Attacks**: Set a brute-force attack protection policy to prevent brute-force cracking of host resource account passwords.
            
        -   **Common Logon Management**: Set common logon locations, common logon IP addresses, common logon times, and common logon accounts to generate alerts for logons from outside the specified scope.
            
    -   **Supported editions**:
        
        **Service model**
        
        **Feature support details**
        
        **Subscription**
        
        -   **Anti-virus**
            
            -   Only supports adding process hashes to the whitelist using custom rules in **Malicious Behavior Defense**.
                
            -   Only supports **Common Logon Management** in **Common Logon Location** management.
                
        -   **Advanced**
            
            -   Only supports **Malicious Behavior Defense** in **System Defense Rule** **Process Protection**. Network defense is not supported.
                
            -   Supports all features of **Defense Against Brute-force Attacks** and **Common Logon Management**.
                
        -   **Enterprise** **and** **Ultimate**
            
            Supports all features of **Malicious Behavior Defense**, **Defense Against Brute-force Attacks**, and **Common Logon Management**.
            
        
        **Pay-as-you-go**
        
        You have enabled the pay-as-you-go service for **Host and Container Security** and bound a protection level to the server.
        
        -   **Antivirus**
            
            -   Supports adding process hashes to the whitelist using custom rules in **Malicious Behavior Defense**.
                
            -   You can use **Common Logon Management** to manage your **Common Logon Location**.
                
        -   **Host Protection** and **Host and Container Protection**: All features
            
            Supports all features of **Malicious Behavior Defense**, **Defense Against Brute-force Attacks**, and **Common Logon Management**.
            
        
-   #### [Core File Monitoring](/help/en/security-center/user-guide/core-file-monitoring)
    
    -   **Feature description**: Provides real-time monitoring and alerting for operations such as accessing, modifying, deleting, and renaming files, reducing the risk of core files being stolen or tampered with.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        **Enterprise** and **Ultimate**
        
        Pay-as-you-go
        
        You must have enabled the pay-as-you-go service for **Host and Container Security**, and the server's protection level must be **Host Protection** or **Host and Container Protection**.
        
-   #### [Agentless Detection](/help/en/security-center/user-guide/use-the-agentless-detection-feature#task-2272639)
    
    -   **Feature description**: Uses agentless technology to scan and discover security risks such as ECS vulnerabilities, malicious files, and baseline configuration issues without installing a client.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        Not supported
        
        Pay-as-you-go
        
        Enable the pay-as-you-go feature for **Agentless Detection** in **Host Protection**.
        
-   #### [**Anti-ransomware**](/help/en/security-center/user-guide/overview-2#concept-1944277)
    
    -   **Feature description**: Supports backup and recovery of server and database files to mitigate the impact of ransomware attacks on servers and databases.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        Purchase the **Anti-ransomware** value-added service.
        
        Pay-as-you-go
        
        Enable the **Host Protection** **Anti-ransomware** pay-as-you-go feature.
        
-   #### [Web Tamper Proofing](/help/en/security-center/user-guide/use-the-feature-of-web-tamper-proofing#task-2233603)
    
    -   **Feature description**: Provides real-time monitoring of website directories and restores tampered files or directories from backups, ensuring that important system website information is not maliciously altered and preventing the injection of Trojans, black links, or illegal content such as terrorist threats or pornography.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        Purchase the **Web Tamper Proofing** value-added service.
        
        Pay-as-you-go
        
        Enable the pay-as-you-go feature for **Web Tamper Proofing**.
        

### **Container Protection**

-   #### [Active Container Defense](/help/en/security-center/user-guide/use-the-feature-of-proactive-defense-for-containers#task-2203984)
    
    -   **Feature description**:
        
        -   **Risk Image Blocking**
            
            This feature checks images for security risks and performs actions such as intercept, alert, or allow on images that match active container defense rules, ensuring that images started in the cluster meet your security requirements.
            
        -   **Non-image Program Defense**
            
            This feature detects and intercepts the startup of programs that are not part of the image while the container is running, actively defending against malware intrusion.
            
        -   **Container Escape Prevention**
            
            This feature detects high-risk behaviors from multiple dimensions such as processes, files, and system calls, establishing a protective barrier between the container and the host to effectively block escape behaviors and ensure container runtime security.
            
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        **Ultimate**
        
        Pay-as-you-go
        
        Enable the pay-as-you-go service for **Host and Container Security**, and set the server's protection level to **Host and Container Protection**.
        
-   #### [Container File Protection](/help/en/security-center/user-guide/use-the-container-file-protection-feature#main-2320952)
    
    -   **Feature description**: The Container File Protection feature monitors directories or files within a container in real time, generating alerts or intercepting tampering behavior when a directory or file is maliciously altered to prevent the injection of illegal information or malicious code files into the application.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        **Ultimate**
        
        Pay-as-you-go
        
        Enable the pay-as-you-go service for **Host and Container Security**, and set the server's protection level to **Host and Container Protection**.
        
-   #### [Container Firewall](/help/en/security-center/user-guide/container-firewall-feature/)
    
    -   **Feature description**: Container Firewall is a firewall service provided by Security Center for container environments. When a hacker exploits a vulnerability or a malicious image to intrude into a container cluster, Container Firewall generates an alert or intercepts the abnormal behavior.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        **Ultimate**
        
        Pay-as-you-go
        
        You have activated the pay-as-you-go service for **Host and Container Security**, and the server's protection level is set to **Host and Container Protection**.
        
-   #### [Container Image Signing](/help/en/security-center/user-guide/use-the-container-signature-feature#task-2448505)
    
    -   **Feature description**: Supports trusted signing of container images to ensure that only approved container images are deployed, preventing the startup of unauthorized, unsigned images and helping improve asset security.
        
        **Note**
        
        Currently, only Kubernetes clusters deployed in the China (Hong Kong) region support container image signing.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        **Ultimate**
        
        Pay-as-you-go
        
        Enable the pay-as-you-go service for **Host and Container Security**, and set the server's protection level to **Host and Container Protection**.
        
-   #### [**Image Security Scan**](/help/en/security-center/user-guide/overview-8#concept-1986094)
    
    -   **Feature description**: This feature provides trusted signing for container images. This ensures that only approved container images are deployed, prevents unsigned or unauthorized images from starting, and improves the security of your assets.
        
        **Note**
        
        Container image signing is currently available only for Kubernetes clusters in the China (Hong Kong) region.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        Purchase the **Container Image Scan** value-added service.
        
        **Important**
        
        When purchasing, you can only buy the **Advanced**, **Enterprise**, **Ultimate**, or **Value-added Plan**, to purchase the **Container Image Scan** value-added service.
        
        Pay-as-you-go
        
        Not supported.
        
-   #### [**CI/CD Integration Settings**](/help/en/security-center/user-guide/overview-11#task-2187237)
    
    -   **Feature description**: Supports detecting and identifying high-risk system vulnerabilities, application vulnerabilities, malicious viruses, web shells, malicious execution scripts, configuration risks, and sensitive data in images during the project build phase in Jenkins or GitHub, and provides vulnerability fix suggestions.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        Purchase the **Container Image Scan** value-added service.
        
        **Important**
        
        When purchasing, you can only purchase the **Container Image Scan** value-added service if you select the **Advanced**, **Enterprise**, **Ultimate**, or **Value-added Plan** edition.
        
        Pay-as-you-go
        
        Not supported.
        

### **Application Protection**

-   **Feature description:** Based on Runtime Application Self-Protection (RASP) technology, it provides security defense for applications by detecting attacks at runtime and generating alerts or blocking them. For more information, see [What is Application Protection?](/help/en/security-center/user-guide/learn-about-application-protection).
    
-   **Supported editions**:
    
    **Billing model**
    
    **Support details**
    
    Subscription
    
    Purchase the **Application Protection** value-added service.
    
    Pay-as-you-go
    
    Enable the pay-as-you-go service for **Application Protection**.
    

### **System Settings**

-   #### [Task Hub](/help/en/security-center/user-guide/use-the-playbook-feature#concept-2376068)
    
    -   **Feature description:** Provides task management features. By executing tasks, you can automatically and batch-fix vulnerabilities on multiple servers.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        **Enterprise**, **Ultimate**
        
        Pay-as-you-go
        
        Enable pay-as-you-go for **Vulnerability Fixing**.
        
-   #### [Security Report](/help/en/security-center/user-guide/create-a-security-report#task-2549247)
    
    -   **Feature description:** Customize the security data you want to follow and have it sent periodically to the mailboxes of relevant security support personnel, enabling more effective real-time monitoring of your assets' security status.
        
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        **Advanced**, **Enterprise**, and **Ultimate**
        
        Pay-as-you-go
        
        Enable any pay-as-you-go service.
        
-   #### [**Feature Settings - Settings - Host Protection Settings**](/help/en/security-center/user-guide/enable-features-on-the-host-protection-settings-tab#task-2019695)
    
    -   **Feature description:**
        
        -   **Proactive Defense**
            
            **Feature name**
            
            **Feature overview**
            
            **Malicious Host Behavior Prevention**
            
            Helps you automatically intercept and kill common network viruses, including mainstream ransomware, DDoS Trojans, mining programs, Trojans, malicious programs, backdoors, and worms.
            
            **Anti-ransomware (Bait Capture)**
            
            Provides a honeypot to capture new types of ransomware and automatically initiates defense against them through virus behavior analysis.
            
            **Webshell Prevention**
            
            Helps you automatically intercept abnormal connection behaviors from hackers through known web shells. You can also view alerts and quarantine samples in Security Alerts, and view quarantined samples in the quarantine box.
            
            **User Experience Optimization in Proactive Defense**
            
            If a server shuts down abnormally or its security defense capabilities are missing, Security Center will collect the server's Kdump data for security protection analysis to continuously improve the security defense experience of Security Center.
            
        -   **Webshell Detection and Removal**: Periodically detects web shells and Trojan programs in website servers and web page directories.
            
        -   **Adaptive Threat Detection Capability**: After you enable adaptive threat detection, if a high-risk intrusion event occurs on a server, Security Center automatically enables strict alert mode for the server's client to detect hacker intrusions more quickly.
            
        -   **Alert Settings**: Provides different alert modes for server alerts to meet your security needs in different application scenarios.
            
            -   **Balanced Mode**: Alibaba Cloud aims to minimize false positives while detecting more potential risks.
                
                **Note**
                
                Security Center enables **Balanced Mode** by default for all connected servers.
                
            -   **Strict Mode**: Provides a wider range of suspicious behavior alerts but comes with a higher risk of false positives. It is suitable for use during major events. Enable with caution.
                
    -   **Supported editions**:
        
        **Service model**
        
        **Feature support details**
        
        **Subscription**
        
        -   **Anti-virus**:
            
            -   **Proactive Defense**: **Malicious Host Behavior Prevention**, **Anti-ransomware (Bait Capture)**
                
            -   **Webshell Detection and Removal**
                
            -   **Alert Settings**
                
        -   **Advanced**:
            
            -   **Proactive Defense**: **Malicious Host Behavior Prevention**, **Anti-ransomware (Bait Capture)**, **Webshell Prevention**
                
            -   **Webshell Detection and Removal**
                
            -   **Alert Settings**
                
        -   **Enterprise** **and** **Ultimate**: All features.
            
        
        **Pay-as-you-go**
        
        You have enabled the pay-as-you-go service for **Host and Container Security** and bound a protection level to the server.
        
        -   **Antivirus**:
            
            -   **Proactive Defense**: **Malicious Host Behavior Prevention**, **Anti-ransomware (Bait Capture)**
                
            -   **Webshell Detection and Removal**
                
            -   **Alert Settings**
                
        -   **Host Protection** and **Host and Container Protection**: All features.
            
        
-   #### [**Feature Settings - Settings - Container Protection Settings**](/help/en/security-center/user-guide/enable-features-on-the-container-protection-settings-tab#task-2019696)
    
    -   **Feature description:**
        
        -   **Threat Detection on Kubernetes Containers**: Detects the security status of running container clusters in real time to help you promptly discover security risks and hacker intrusions in your container clusters. The following check items are supported:
            
            -   Abnormal command execution in K8s API Server
                
            -   Abnormal directory mounting in pods
                
            -   Lateral movement using K8s Service Account
                
            -   Startup of pods with malicious images
                
        -   **Container Escape Prevention**: Detects high-risk behaviors from multiple dimensions such as processes, files, and system calls, establishing a protective barrier between the container and the host to effectively block escape behaviors and ensure container runtime security.
            
    -   **Supported editions**:
        
        **Service model**
        
        **Feature support details**
        
        **Subscription**
        
        **Ultimate**
        
        **Pay-as-you-go**
        
        You have enabled the pay-as-you-go service for **Host and Container Security**, and the protection level of the server is **Host and Container Protection**.
        
-   #### [**Feature Settings - Settings - Client Capability Configuration**](/help/en/security-center/user-guide/enable-features-on-the-agent-settings-tab#task-2261209)
    
    -   **Feature description**:
        
        -   **Agent Protection**: After you enable agent protection, Security Center actively intercepts attempts to uninstall the agent without using the Security Center console, preventing attackers from directly intruding into the server to maliciously uninstall the agent or other programs from mistakenly closing the agent process.
            
        -   **Client Resource Management**: Supports manually adjusting the client's running mode to limit its resource consumption, meeting server protection requirements in multiple business scenarios and achieving better security protection effectiveness. It includes **Low Consumption Mode**, **Smooth Mode**, and **Custom Mode**.
            
        -   **Local File Detection Engine**: The local file detection engine performs security checks on newly created script files and binary files on servers, reporting alerts when security threats are detected.
            
        -   **In-depth Detection Engine**: The deep detection engine helps you discover more in-depth security risks, such as rootkit detection, tunneling, and backdoor detection.
            
    -   **Supported editions**:
        
        **Service model**
        
        **Feature support details**
        
        **Subscription**
        
        -   **Anti-virus**, **Advanced**: support only **Agent Protection** and **Client Resource Management** (**Low Consumption Mode**, **Smooth Mode**).
            
        -   **Enterprise** and **Ultimate**: All features.
            
        
        **Pay-as-you-go**
        
        You have enabled the pay-as-you-go service for **Host and Container Security** and bound a protection level to the server.
        
        -   **Antivirus**: Only supports **Agent Protection** and **Client Resource Management** (**Low Consumption Mode**, **Smooth Mode**).
            
        -   **Host Protection**, **Host and Container Protection**: All features.
            
        
-   #### [**Feature Settings - Settings - Other Configurations**](/help/en/security-center/user-guide/enable-features-on-the-other-settings-tab#task-2019697)
    
    -   **Feature description**:
        
        -   **Data Delivery of ActionTrail**: Uses the service-linked role of Security Center to ship ActionTrail data to the logStore of Security Center. You can use this data for threat detection and alert analysis, such as abnormal AccessKey calls, unusual RAM account logons, and execution of high-risk commands.
            
        -   **Global Log Filter**: To reduce your log storage costs while maintaining security effectiveness, client logs are deduplicated and filtered before being reported, improving the efficiency of log-based security operations.
            
    -   **Supported editions**:
        
        **Billing model**
        
        **Support details**
        
        Subscription
        
        **Anti-virus**, **Advanced**, **Enterprise**, and **Ultimate**: You must also purchase the **Log Analysis** value-added service.
        
        -   All editions support **Data Delivery of ActionTrail** by default.
            
        -   After purchasing the **Log Analysis** value-added service, you can use the **Global Log Filter**.
            
        
        **Note**
        
        For information about the specific log types supported by different editions, see [Log types and field descriptions](/help/en/security-center/user-guide/log-category-and-field-description-v2-0).
        
        Pay-as-you-go
        
        Enabling any feature supports **Data Delivery of ActionTrail**.
        
        **Service model**
        
        **Feature support details**
        
        **Subscription**
        
        **Pay-as-you-go**
        
        Enable the pay-as-you-go service for **Host and Container Security** and bind a protection level to the server.
        
        -   **Antivirus**: Only supports **Agent Protection**, **Client Resource Management**.
            
        -   **Host Protection** and **Host and Container Protection**: All features.
            
        
-   #### [**Feature Settings - Client**](/help/en/security-center/user-guide/install-the-security-center-agent)
    
    -   **Feature description**: Lets you centrally view servers with unprotected clients and obtain security commands and client uninstallation options. It also provides support for [proxy access](/help/en/security-center/user-guide/use-the-proxy-access-feature#task-2251027) client solutions.
        
    -   **Supported editions**: Supported by default. No edition limits apply.
        
-   #### [**Feature Settings - Multicloud Configuration Management**](/help/en/security-center/user-guide/use-multi-cloud-configuration-management/#task-2092350)
    
    -   **Feature description**:
        
        -   [Multicloud Asset Integration](/help/en/security-center/user-guide/use-multi-cloud-configuration-management/#task-2092350): Supports integrating non-Alibaba Cloud servers (including third-party cloud servers and IDC servers) into Security Center for protection and management.
            
        -   [Integrate IDC Assets](/help/en/security-center/user-guide/add-a-server-in-a-data-center-to-security-center): By creating an IDC probe, you can detect and discover IDC server assets and synchronize the discovered IDC servers to the Asset Center module of Security Center for unified management.
            
        -   [Asset Management Rules](/help/en/security-center/user-guide/use-the-feature-of-asset-management-rules#task-2113161): By setting conditions for different asset management rules, you can group or tag servers that meet the same conditions, helping you improve asset management efficiency.
            
    -   **Supported editions**: Supported by default. No edition limits apply.
        
-   #### [Notification Settings](/help/en/security-center/user-guide/use-the-notification-feature#task-vlx-khr-dhb)
    
    -   **Feature description**: Configure alert policies for various security events such as security alerts, vulnerability intelligence, and baseline risks. Receive notifications through the following methods.
        
        -   **Email/Internal Message**
            
        -   **DingTalk Chatbot**
            
        -   **Cloud Monitor Push**
            
    -   **Supported editions**:
        
        **Service model**
        
        **Feature support details**
        
        **Subscription**
        
        -   **Anti-virus**: **Email/Internal Message**, **Cloud Monitor Push**
            
        -   **Advanced**, **Enterprise**, and **Ultimate**: All features.
            
        
        **Pay-as-you-go**
        
        Enable any pay-as-you-go service.
        
-   #### [Multi-account Security Management](/help/en/security-center/user-guide/use-the-multi-account-management-feature#task-2476647)
    
    -   **Feature description**: Supports unified management of asset security across multiple member accounts within your enterprise, helping you promptly obtain security risk information for all member accounts in your enterprise.
        
    -   **Supported editions**: Supported by default. No edition limits apply.
        
-   #### [Compliance Check](/help/en/security-center/user-guide/compliance-check#task-2367116)
    
    -   **Feature description**:
        
        -   **Security Compliance Check**: Provides classified protection compliance checks covering communication networks, regional boundaries, computing environments, and Management Hub, and provides Classified Protection Compliance Check reports.
            
        -   **ISO 27001 Compliance Check**: Checks whether your system meets the requirements of ISO 27001 certification, such as asset management, access control, cryptography, and operational security, helping you pass ISO 27001 certification.
            
    -   **Supported editions**: Supported by default. No edition limits apply.
