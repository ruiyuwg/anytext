Agentic SOC is a cloud-native platform for Security Information and Event Management (SIEM) and Security Orchestration, Automation, and Response (SOAR). Agentic SOC centrally collects and analyzes security logs and alerts from multicloud and multi-account environments, uses built-in detection rules and AI models to automatically discover threats, and orchestrates rapid responses with automated playbooks. This addresses the common challenges in traditional security operations, such as data silos, slow threat discovery, and inefficient incident response.

## Common use cases

### **Unified multi-cloud log management**

-   **Challenge:** In multi-cloud and hybrid environments, security logs are scattered across different platforms in inconsistent formats, creating data silos. Security teams lack a unified, global perspective, making it difficult to trace cross-cloud attacks and perform centralized audits, significantly increasing operational complexity.
    
-   **Solution:**
    
    -   **Centralized log ingestion:** Efficiently ingests heterogeneous logs from multi-cloud, third-party, and on-premises environments into a unified data lake. Supports various ingestion methods, including connectors for services like Amazon S3 and Apache Kafka.
        
    -   **Intelligent parsing and normalization:** Uses a flexible parsing engine with field mapping to transform massive volumes of unstructured raw logs into a unified, standard data model in real time.
        
    -   **Global analysis and tracing:** Enables unified threat detection, cross-cloud attack tracing, and compliance auditing based on the normalized data.
        

### **Web intrusion investigation**

-   **Challenge:** After a web application is compromised, attackers often perform lateral movement and privilege escalation by exploiting multiple vulnerabilities. The traditional method requires security personnel to manually correlate logs from various sources like WAF, host security, and network traffic, a time-consuming process prone to missing critical clues.
    
-   **Solution:**
    
    1.  **Automated detection and correlation:** Agentic SOC automatically collects and analyzes **Web Application Firewall (WAF)** logs and host security logs. When it detects activities like WebShell uploads and abnormal process executions, Agentic SOC automatically correlates these individual alerts into a single, comprehensive "Web Intrusion" **incident**.
        
    2.  **Attack path reconstruction:** The incident details page displays the complete attack path as a timeline, from initial web access and vulnerability exploitation to WebShell writes, reverse shell execution, and malicious command execution, giving security personnel a full picture of the attack.
        
    3.  **Automated response:** Use built-in playbooks, such as **Block Source IP via Cloud Firewall**, to automatically instruct **Cloud Firewall** to block the attacker's IP address at the network edge.
        

### **Cryptomining malware remediation**

-   **Challenge:** Cryptomining malware consumes significant computing resources, leading to increased cloud resource costs and degraded performance for legitimate business services. The manual response process—which includes locating the process, terminating the file, blocking connections to mining pools, and patching the entry point—is cumbersome and prevents a rapid response.
    
-   **Solution:**
    
    1.  **Precise detection:** Agentic SOC combines host security logs, VPC flow logs, and built-in threat intelligence to identify cryptomining processes (such as `xmrig`) and anomalous network connections to mining pools, generating a "Cryptomining Activity" **incident**.
        
    2.  **Intelligent analysis:** The **AI Assistant** analyzes and summarizes the incident, recommending response strategies based on historical cases and best practices, such as "terminate the malicious process and block the mining pool IP."
        
    3.  **Automated response:** **Use Recommended Response Policy** to run a playbook that terminates the malicious process and quarantines the cryptomining file.
        

## How it works

Agentic SOC integrates logs from multi-cloud, multi-account, multi-product, and third-party vendor sources through a standardized workflow. It analyzes these logs using threat detection rules to generate security incidents. Using its automated response orchestration capabilities, Agentic SOC coordinates with relevant cloud products to execute security measures like blocking or isolating malicious entities, enabling rapid and effective incident response. The core stages are as follows:

1.  **Log collection and parsing:** Collects raw logs from various data sources, including cloud products, third-party devices, and business applications.
    
2.  **Alert generation:** Identifies potential threats within massive log volumes by using built-in detection rules or by directly ingesting native alerts from third-party products.
    
3.  **Incident aggregation and handling:** Aggregates multiple alerts describing the same attack into a single incident using configurable correlation rules and graph computing models.
    
4.  **Response orchestration:** Incidents trigger playbooks, either automatically based on predefined conditions or manually. These playbooks invoke component actions to generate and dispatch response tasks for automated remediation.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2323098671/CAEQUxiBgMD61enq3hkiIDYyOTA2NmZhNzlmZDRkYzM4NDVmNjgxYjRhOWQ2ODE44831021_20250117113518.154.svg)

## Core concepts

-   **Entity:** A core object involved in an alert or incident, such as an IP address, domain name, file hash, process, host, container, cloud resource ID (e.g., ECS instance ID), or user account. Entities serve as the nodes for correlating different alerts and reconstructing the attack path.
    
-   **Incident:** A high-fidelity security incident created by correlating multiple related alerts from various data sources. Agentic SOC automatically aggregates these alerts into a single incident and reconstructs the attack timeline.
    
-   **Response policy:** A specific remediation action defined for an entity within a given scenario. For example, a policy could be "Block IP Address" or "Terminate Process". Each policy defines _what_ action should be taken on a specific type of entity.
    
-   **Response task:** An individual, executable job generated from a response policy and targeted at a specific scope. For example, the "Block IP Address" policy might generate two separate tasks: one to block the IP on _Cloud Firewall Instance A_ and another on _Cloud Firewall Instance B_. A task is the concrete execution of a policy on a specific resource.
    
-   **Security Orchestration, Automation and Response (SOAR):** The process of organizing and managing security response actions through automated workflows, known as playbooks. SOAR automatically executes a series of operations based on predefined logic for automated incident handling.
    
    -   **Playbook:** A predefined, automated security workflow that consists of triggers, conditions, actions, and endpoints. Playbooks support drag-and-drop graphical editing, allowing you to customize response logic for specific security incidents like cryptomining or ransomware.
        
    -   **Component:** An interface used to connect to and operate external systems or services. Components are the building blocks that execute specific actions within a playbook.
        
    -   **Resource instance:** The specific service instance that an action targets, such as a Cloud Firewall instance.
        
    -   **Action:** A specific capability executed by a component. A single component may contain multiple actions. For example, an endpoint management component might include actions like "disable account," "isolate network," or "send notification."
        

## Product advantages

Agentic SOC is a security operations platform deeply integrated with a core AI Agent engine. Agentic SOC enables a "smart auto-pilot" mode for security operations, allowing you to seamlessly transition from human-machine collaboration to fully automated response as needed.

-   **High-fidelity detections with a 99.94% alert reduction rate**
    
    By combining global threat intelligence, graph computing, and cloud-native log analysis, Agentic SOC accurately identifies new, unknown, and highly evasive threats from vast numbers of alerts. This reduces the average detection time for security incidents to minutes.
    
-   **Automated response in seconds with 95% remediation coverage**
    
    Powered by its core AI Agent engine, Agentic SOC provides one-click response policies and out-of-the-box automated playbooks (which are also customizable) that require no manual configuration. It coordinates with various security products and infrastructure to perform fully automated analysis and response to incidents and alerts.
    
-   **Automatic reconstruction of the full attack picture**
    
    Using graph computing and a security-focused large language model, Agentic SOC automatically traces and reconstructs the complete attack path and timeline.
    
-   **Unified global view with 90% cross-asset incident discovery rate**
    
    Agentic SOC unifies the collection and processing of log data from across clouds, accounts, and products, significantly reducing the complexity of hybrid cloud security operations. Through centralized management and auditing, it provides global security insights, effectively simplifying data analysis and compliance efforts.
    

## Agentic SOC security operations efficiency

Mean Time To Detect (MTTD), Mean Time To Acknowledge (MTTA), and Mean Time To Respond (MTTR) are key metrics for measuring security operations efficiency. The following data, based on statistics from real users, shows how Agentic SOC improves security operations efficiency.

### **Efficiency overview**

**Metric**

**Traditional methods**

**Agentic SOC efficiency**

**Efficiency gain**

**MTTD (Detection)**

Hours

**5 minutes**

From hours to minutes

**MTTA (Acknowledgment)**

Days

**35 minutes**

From days to minutes

**MTTR (Response)**

Days / Weeks

**90 minutes**

From weeks/days to under two hours

### **Metric details**

-   **MTTD**
    
    -   **Definition:** The average time from when an attack occurs to when it is first detected by the system.
        
    -   **Agentic SOC efficiency:** **5 minutes**
        
    -   **Traditional methods:** Hours
        
    -   **Core advantage:** Agentic SOC reduces threat detection time from hours to minutes, significantly shortening the dwell time of threats within the system and creating a critical window for rapid response.
        
-   **MTTA**
    
    -   **Definition:** The average time from when an incident is detected to when it is confirmed as a true threat by the security team.
        
    -   **Agentic SOC efficiency:** **35 minutes**
        
    -   **Traditional methods:** Days
        
    -   **Core advantage:** After an incident occurs, Agentic SOC automatically performs investigation and threat tracing, reducing manual analysis time from days to under 35 minutes, enabling rapid validation of true threats.
        
-   **MTTR**
    
    -   **Definition:** The average time from when a threat is confirmed to when the system is fully remediated and restored.
        
    -   **Agentic SOC efficiency:** **90 minutes**
        
    -   **Traditional methods:** Days or weeks
        
    -   **Core advantage:** Through automated, predefined playbooks, Agentic SOC executes critical actions from confirmation to response in seconds. This reduces the overall response time from days to 90 minutes, freeing security teams from tedious, repetitive tasks to focus on deeper threat analysis and strengthening the defense architecture.
        

## Supported products and logs

Agentic SOC supports logs from vendors such as Alibaba Cloud, Huawei Cloud, Tencent Cloud, Fortinet, Chaitin, and Sangfor by default, and allows for custom product integration.

For details on the default ingestion policies, data sources, and normalization rules provided by Agentic SOC, refer to the console.

**Cloud service provider**

**Cloud service**

**Log type**

Alibaba Cloud

Security Center

-   Network defense alerts, cloud platform configuration check logs, baseline logs, security alerts, vulnerability logs, Application Protection (RASP) alerts, Cloud Security Posture Management (CSPM) logs
    
-   Account snapshots, network snapshots, process snapshots
    
-   Host logon failure logs, DNS request logs, logon activity logs, process start logs, network connection logs, brute-force attack logs
    

Web Application Firewall (WAF)

WAF all/blocked/blocked and observed logs, anti-bot all logs, API security incident alert logs, API risk logs, WAF alert logs

Cloud Firewall

Cloud Firewall alert logs, Cloud Firewall traffic logs, NDR-HTTP logs, NDR-DNS logs, NDR-incident alert logs

Anti-DDoS

Anti-DDoS full logs

Bastionhost

Bastionhost logs

CDN

CDN flow logs

Edge Security Acceleration (ESA)

DCDN user access logs, DCDN WAF blocked logs

API Gateway

API Gateway logs

Container Service for Kubernetes (ACK)

K8s audit logs

PolarDB

PolarDB-X 1.0 SQL audit logs, PolarDB-X 2.0 SQL audit logs

ApsaraDB for MongoDB

MongoDB audit logs

ApsaraDB RDS (Relational Database Service)

RDS SQL audit logs

Virtual Private Cloud (VPC)

VPC flow logs

Elastic IP Address (EIP)

Elastic IP logs

Server Load Balancer (SLB)

ALB access logs, CLB access logs

Object Storage Service (OSS)

OSS access logs

ActionTrail

ActionTrail event logs

Config

Config audit logs

Apsara File Storage NAS

NAS NFS operational logs

Tencent Cloud

Web Application Firewall

Tencent Cloud Web Application Firewall alert logs

Cloud Firewall

Tencent Cloud Firewall alert logs

Huawei Cloud

Web Application Firewall

Huawei Cloud Web Application Firewall alert logs

Cloud Firewall

Huawei Cloud Firewall alert logs

Azure

Microsoft Defender for Endpoint

Endpoint alert logs

Microsoft Entra ID

Audit logs, sign-in logs

Activity Log

Audit logs

SQL Database

SQL Server audit logs

AWS

CloudTrail

CloudTrail logs

Redshift

Redshift audit logs

GuardDuty

GuardDuty finding alert logs

PostgreSQL on Amazon RDS

PostgreSQL event logs

Volcengine

Security Center

HIDS alert logs

Fortinet

Fortinet Firewall

Fortinet Firewall alert logs, Fortinet Firewall flow logs, Fortinet audit logs

Chaitin

Chaitin WAF

Chaitin WAF alert logs, Chaitin WAF flow logs

Microsoft

Endpoint event Logs

Windows Security event logs

Sangfor

aES Unified Endpoint Security Management System (EDR)

Endpoint Detection and Response alert logs

Hillstone Networks

Hillstone Networks Firewall

Hillstone Networks Firewall alert logs

Das-Security

Das-Security Full-Traffic Security Computing and Analysis Platform

Das-Security Full-Traffic Security Computing and Analysis Platform product alert logs

SkyGuard

DLP

DLP alert logs

Microsoft Cloud

Microsoft Entra ID

Microsoft Entra ID audit logs, Microsoft Entra ID sign-in audit logs

ThreatBook

OneSec

OneSec alert logs

Cisco

Cisco Firepower Firewall

Firewall alert logs

Palo Alto Networks

Next-Generation Firewall

Firewall alert logs

Cortex XDR

Palo Alto Cortex alert logs, endpoint-related alert logs

Panorama

Panorama product logs

EG Cloud

Polaris

Internal Layer-4 network access logs, data audit logs

Custom Vendor

Custom Product

Firewall alert logs, firewall traffic logs, WAF alert logs, WAF traffic logs

## Version upgrade information

-   Accounts that activate Agentic SOC on or after April 3, 2025, will be provisioned on the latest architecture.
    
-   The Agentic SOC 2.0 architecture is built on Simple Log Service (SLS), which simplifies data ingestion. This architecture uses a standardized log format to quickly integrate data from third-party clouds and on-premises security products.
    
-   For a detailed comparison of the main differences between Agentic SOC 2.0 and Agentic SOC 1.0, see [Differences between Agentic SOC 2.0 and 1.0](/help/en/security-center/differences-between-agentic-soc-1-0-and-2-0).
    

## FAQ

**How does Agentic SOC differ from a traditional SIEM?**

While traditional SIEMs were designed for on-premises environments, Agentic SOC is a cloud-native platform that offers several key advantages:

-   **Cloud-native integration:** Agentic SOC integrates with a wide range of products from Alibaba Cloud and other major cloud providers. It understands cloud assets, configurations, and network topology, enabling context-aware analysis.
    
-   **Built-in SOAR capabilities:** It includes an integrated Security Orchestration, Automation, and Response (SOAR) engine. Agentic SOC not only detects and analyzes threats but also automates remediation by using playbooks to orchestrate actions across your cloud infrastructure, closing the loop from detection to response.
    
-   **Built-in scenarios:** It provides a large number of out-of-the-box detection rules and response playbooks for common cloud attack scenarios, such as cryptomining, ransomware, and web intrusions, ready for immediate use.
