This topic describes the features, background information, scenarios, and benefits of Log Audit Service. This topic also describes the Alibaba Cloud services that are supported by Log Audit Service.

**Important**

The entry to the old version of the Log Audit Service console is removed on January 21, 2025. However, existing users (those who started using the service before this date) still have access to the entry. New users who want to use the old version can visit the new version of the Log Audit Service and click **Back to Old Version** to return to the old version.

## Features

Log Audit Service supports all features of Simple Log Service. Log Audit Service also supports automated and centralized log collection from cloud services across Alibaba Cloud accounts in real time. This allows you to audit the collected logs. Log Audit Service also stores data that is required for auditing and allows you to query and aggregate the data. You can use Log Audit Service to audit the logs that are collected from the following Alibaba Cloud services: ActionTrail, Container Service for Kubernetes (ACK), Object Storage Service (OSS), Apsara File Storage NAS (NAS), Server Load Balancer (SLB), Application Load Balancer (ALB), API Gateway, Virtual Private Cloud (VPC), ApsaraDB RDS, PolarDB-X 1.0, PolarDB, Web Application Firewall (WAF), Anti-DDoS, Cloud Firewall, and Security Center. You can also use Log Audit Service to audit the logs that are collected from third-party cloud services and self-managed security operations centers (SOCs).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3428862771/CAEQMRiBgMC5utLsnBkiIDJmMzBlOWVlNzMyZTQ2ODg5ODRjYTMzYmZhZWVlYWFi3963382_20230830144006.372.svg)

## Background information

-   Log audit is required by law.
    
    Log audit is required by enterprises around the world to meet regulatory requirements. The Cybersecurity Law of the People's Republic of China came into effect in the Chinese mainland in 2017. In addition, the Multi-Level Protection Scheme (MLPS) 2.0 came into effect in December 2019.
    
-   Log audit is the foundation for the data security compliance of enterprises.
    
    A large number of enterprises have compliance and audit teams that are capable of auditing device operations, network behavior, and logs. You can use Log Audit Service to consume raw logs, audit logs, and generate compliance audit reports. You can use your self-managed SOC or Alibaba Cloud Security Center to consume logs in Log Audit Service.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3428862771/CAEQMRiBgMClotjsnBkiIGZjNzliYmQzY2E3ODQ0YzE4M2I3NjIzZGRmZmM0NmUz3963382_20230830144006.372.svg)
    
-   Log audit is crucial for data security and protection.
    
    The M-Trends 2018 report published by FireEye stated that most enterprises, especially enterprises in Asia Pacific, are vulnerable to cybersecurity attacks. The global median dwell time was 101 days. In Asia Pacific, the median dwell time was 498 days. The dwell time indicates a period from when an attack occurs to when the attack is detected. To shorten the dwell time, enterprises require reliable log data, durable storage, and audit services.
    

## Scenarios

-   Simple Log Service-based audit
    
    Simple Log Service allows you to collect, cleanse, analyze, and visualize logs from end to end. You can also configure alerts for logs. You can use Simple Log Service in DevOps, operations, security, and audit scenarios.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3428862771/CAEQMRiBgIC5q9rsnBkiIDMzMTk3ZTdhMDg1ZTQyYWI5YzlmOTczNmU0NDY3ZDUx3963382_20230830144006.372.svg)
    
-   Typical log audit
    
    The following requirements for log audit are classified into four levels.![日志审计-004](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6506498951/p101350.png)
    
    -   Basic requirements: Most small and medium enterprises require automatic log collection and storage. These enterprises need to meet the basic requirements that are specified in MLPS 2.0 and implement automatic maintenance.
        
    -   Intermediate requirements: Multinational enterprises, large enterprises, and some medium enterprises have multiple departments that use different Alibaba Cloud accounts and pay separate bills. However, logs required for audit must be automatically collected in a centralized manner. In addition to basic requirements, these enterprises need to collect logs and manage accounts in a centralized manner. In most cases, these enterprises have audit systems and need to synchronize their audit systems with Log Audit Service in real time.
        
    -   Advanced requirements: Large enterprises that have dedicated compliance and audit teams need to monitor logs, analyze logs, and configure alerts for logs. Specific enterprises collect logs and send the logs to their audit systems for further processing. Other enterprises that want to build an audit system on the cloud can use the audit-related features provided by Simple Log Service. The features include query, analysis, alerting, and visualization.
        
    -   Top requirements: Most large enterprises that have professional compliance and audit teams have self-managed SOCs or audit systems. These enterprises need to synchronize their SOCs or audit systems with Log Audit Service and manage data in a centralized manner.
        
    
    Log Audit Service of Simple Log Service meets all the four levels of requirements.
    

## Benefits

-   Centralized log collection
    
    -   Log collection across accounts: You can collect logs from multiple Alibaba Cloud accounts to a project within one Alibaba Cloud account. You can configure multi-account collection in custom authentication mode or resource directory mode. We recommend that you use the resource directory mode. For more information, see [Configure multi-account collection](/help/en/sls/configure-multi-account-collection#task-2114792).
        
    -   Ease of use: You need to only configure collection policies once. Then, Log Audit Service collects logs in real time from Alibaba Cloud resources that belong to different accounts when new resources are detected. The new resources include newly created ApsaraDB RDS instances, SLB instances, and OSS buckets.
        
    -   Centralized storage: Logs are collected and stored in the central project of a region. This way, you can query, analyze, and visualize the collected logs in a more efficient manner. You can also configure alerts for the logs and perform secondary development.
        
-   Comprehensive audit
    
    -   Log Audit Service supports all features of Simple Log Service. For example, you can query, analyze, transform, visualize, and export logs, and configure alerts for logs. Log Audit Service also allows you to audit logs in a centralized manner.
        
    -   You can use Log Audit Service together with Alibaba Cloud services, open source software, and third-party SOCs to create more value from data.
        

## Supported Alibaba Cloud services

You can use Log Audit Service to audit the logs that are collected from the following Alibaba Cloud services: ActionTrail, ACK, OSS, NAS, SLB, ALB, API Gateway, VPC, ApsaraDB RDS, PolarDB-X 1.0, PolarDB, WAF, Cloud Firewall, Security Center, and Anti-DDoS. Logs that are collected from Alibaba Cloud services are automatically stored in Logstores and Metricstores. Dashboards are automatically generated for the Logstores and Metricstores. The following table describes the details.

**Cloud service**

**Audited log**

**Supported region for collection**

**Prerequisite**

**Simple Log Service resource**

ActionTrail

-   Resource Access Management (RAM) logon logs
    
-   Resource operation logs of Alibaba Cloud services
    
-   Logs of API operations
    

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Japan (Tokyo), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), and UAE (Dubai)

None

-   Logstore
    
    actiontrail\_log
    
-   Dashboard
    
    -   ActionTrail Audit Center
        
    -   ActionTrail Core Configuration Center
        
    -   ActionTrail Login Center
        

Cloud Config

-   Configuration change logs
    
-   Resource non-compliance events
    

All regions supported by Cloud Config

If you want to collect, store, or query logs of Cloud Config in Log Audit Service, you must authorize Simple Log Service to extract the logs that are recorded in Cloud Config. After you complete the authorization, the logs of Cloud Config are automatically pushed to Simple Log Service.

-   Logstore
    
    cloudconfig\_log
    
-   Dashboard
    
    None
    

SLB

Layer 7 network logs of HTTP or HTTPS listeners

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, Japan (Tokyo), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), UK (London), UAE (Dubai), US (Silicon Valley), US (Virginia), and Germany (Frankfurt)

None

-   Logstore
    
    slb\_log
    
-   Dashboard
    
    -   SLB Audit Center
        
    -   SLB Access Center
        
    -   SLB Overall Data View
        

ALB

Layer 7 network logs of HTTP or HTTPS listeners

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), China (Guangzhou), China (Chengdu), China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Germany (Frankfurt), US (Silicon Valley), and US (Virginia)

None

-   Logstore
    
    alb\_log
    
-   Dashboard
    
    -   ALB Operation Center
        
    -   ALB Access Center
        

API Gateway

Access logs

All supported regions

None

-   Logstore
    
    apigateway\_log
    
-   Dashboard
    
    API Gateway Audit Center
    

VPC

Flow logs

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Japan (Tokyo), US (Silicon Valley), US (Virginia), UAE (Dubai), Germany (Frankfurt), and UK (London)

-   After the flow log feature is enabled for a VPC or a vSwitch, the feature cannot capture information about ECS instances that belong to the following instance families in the VPC or vSwitch. The feature can capture information about only other ECS instances that meet the requirements.
    
-   The feature cannot be enabled for elastic network interfaces (ENIs) that are bound to ECS instances if the ECS instances belong to the following instance families.
    

ecs.c1, ecs.c2, ecs.c4, ecs.ce4, ecs.cm4, ecs.d1, ecs.e3, ecs.e4, ecs.ga1, ecs.gn4, ecs.gn5, ecs.i1, ecs.m1, ecs.m2, ecs.mn4, ecs.n1, ecs.n2, ecs.n4, ecs.s1, ecs.s2, ecs.s3, ecs.se1, ecs.sn1, ecs.sn2, ecs.t1, and ecs.xn4

-   Logstore
    
    vpc\_log
    
-   Dashboard
    
    -   VPC Flow Log Overview
        
    -   VPC Flow Log Rejection Center
        
    -   VPC Flow Log Traffic Center
        

DNS

Intranet DNS logs

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Shenzhen), China (Guangzhou), China (Hong Kong), China (Chengdu), Singapore, and US (Silicon Valley)

Go to the [Alibaba Cloud DNS console of the new version](https://dnsnext.console.alibabacloud.com/privateDNS) to activate Alibaba Cloud DNS PrivateZone.

-   Logstore
    
    dns\_log
    
-   Dashboard
    
    None
    

Public DNS resolution logs

N/A

-   Go to the [Authoritative DNS Resolution page of the Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/?spm=5176.28197678_-433446379.0.0.5d235b8eLd9jun#/dns/domainList) to enable the DNS traffic analysis feature and enable the feature for the required domain names.
    
-   Chinese domain name-related logs cannot be stored.
    

-   Logstore
    
    dns\_log
    
-   Dashboard
    
    None
    

Global Traffic Manager logs

N/A

-   Go to the [Global Traffic Manager 3.0 page of the Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/gtm) to activate Global Traffic Manager (GTM) and purchase a GTM instance.
    
-   Chinese domain name-related logs cannot be stored.
    
-   Global Traffic Manager is available only for users in the required whitelist. To add a user to the whitelist, you must [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to Alibaba Cloud DNS engineers.
    

-   Logstore
    
    dns\_log
    
-   Dashboard
    
    None
    

WAF

-   Access Logs
    
-   Attack logs
    

All supported regions

-   Your WAF instance must be of the Enterprise or Business edition.
    
-   The **Simple Log Service for WAF** feature must be enabled in the WAF console. For more information, see [Get started with the Simple Log Service for WAF feature](/help/en/sls/enable-the-log-analysis-feature-2#task-1797381).
    

-   Logstore
    
    waf\_log
    
-   Dashboard
    
    -   WAF Audit Center
        
    -   WAF Security Center
        
    -   WAF Access Center
        

Security Center

-   Nine types of host logs
    
-   Seven types of security logs
    
-   Four types of network logs
    

**Important**

Starting March 27, 2025, network log delivery is no longer supported, but previously delivered data will be preserved and available for queries. For more information, see [\[Notice\] Updates on log analysis and CTDR features](/help/en/security-center/product-overview/notification-log-analysis-and-threat-analysis-and-response-function-update).

China (Hangzhou) and Singapore

-   Your Security Center must be of the Enterprise edition.
    
-   The **log analysis** feature must be enabled in the Security Center console. For more information, see [Enable log analysis](/help/en/sls/enable-the-log-analysis-feature#task-2532693).
    

-   Logstore
    
    sas\_log
    
-   Dashboard
    
    -   SAS Alarm Center
        
    -   SAS Connection Center
        
    -   SAS DNS Access Center
        
    -   SAS Baseline Center
        
    -   SAS Login Center
        
    -   SAS Process Center
        
    -   SAS Network Session Center
        
    -   SAS Vulnerability Center
        
    -   SAS Web Access Center
        

Cloud Firewall

Traffic logs of the Internet firewall and VPC firewalls

N/A

-   Your Cloud Firewall must be of the Premium Edition or higher.
    
-   The **log analysis** feature must be enabled in the Cloud Firewall console. For more information, see [Enable the log analysis feature](/help/en/sls/enable-the-log-analysis-feature-3#concept-pzr-rxj-hhb).
    

-   Logstore
    
    cloudfirewall\_log
    
-   Dashboard
    
    Cloud Firewall Audit Center
    

Bastionhost

Operation logs

All supported regions

Your Bastionhost must be of V3.2 or later.

-   Logstore
    
    bastion\_log
    
-   Dashboard
    
    None
    

OSS

-   Resource operation logs
    
-   Data operation logs
    
-   Data access logs and metering logs
    
-   Deletion logs of expired files
    
-   CDN back-to-origin traffic logs
    

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Japan (Tokyo), South Korea (Seoul), Thailand (Bangkok), Germany (Frankfurt), UAE (Dubai), UK (London), US (Virginia), and US (Silicon Valley)

None

-   Logstore
    
    oss\_log
    
-   Dashboard
    
    -   OSS Audit Center
        
    -   OSS Access Center
        
    -   OSS Operation Center
        
    -   OSS Performance Center
        
    -   OSS Overall Data View
        

ApsaraDB RDS

-   Audit logs of ApsaraDB RDS for MySQL instances
    
-   Slow query logs of ApsaraDB RDS for MySQL instances
    
-   Performance logs of ApsaraDB RDS for MySQL instances
    
-   Error logs of ApsaraDB RDS for MySQL instances
    
-   Audit logs of ApsaraDB RDS for PostgreSQL instances
    
-   Slow query logs of ApsaraDB RDS for PostgreSQL instances
    
-   Error logs of ApsaraDB RDS for PostgreSQL instances
    

-   Audit logs of ApsaraDB RDS for MySQL instances: all supported regions except China (Heyuan), and Philippines (Manila)
    
-   Slow query logs, performance logs, and error logs of ApsaraDB RDS for MySQL instances: all supported regions except Philippines (Manila)
    
-   Audit logs of ApsaraDB RDS for PostgreSQL instances: China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Germany (Frankfurt), and US (Virginia)
    
-   Slow query logs and error logs of ApsaraDB RDS for PostgreSQL instances: China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Germany (Frankfurt), UK (London), and US (Virginia)
    

-   Audit logs
    
    -   ApsaraDB RDS for MySQL instances are supported, except those running the RDS Basic Edition.
        
    -   ApsaraDB RDS for PostgreSQL instances that run the RDS High-availability Edition are supported.
        
    -   The SQL Explorer or SQL Audit feature must be enabled. The features are automatically enabled by Log Audit Service.
        
-   Slow query logs and error logs
    
    -   ApsaraDB RDS for MySQL instances are supported, except those running the RDS Basic Edition.
        
    -   ApsaraDB RDS for PostgreSQL instances that run the RDS High-availability Edition are supported.
        
-   Performance logs
    
    ApsaraDB RDS for MySQL instances are supported, except those running the RDS Basic Edition.
    

-   Audit logs
    
    -   Logstore
        
        rds\_log
        
    -   Dashboard
        
        -   RDS Audit Center
            
        -   RDS Security Center
            
        -   RDS Performance Center
            
        -   RDS Overall Data View
            
-   Slow query logs and error logs
    
    -   Logstore
        
        rds\_log
        
    -   Dashboard
        
        None
        
-   Performance logs
    
    -   Metricstore
        
        rds\_metrics
        
    -   Dashboard
        
        RDS Performance Monitoring
        

PolarDB for MySQL

-   Audit logs of PolarDB for MySQL clusters
    
-   Slow query logs of PolarDB for MySQL clusters
    
-   Performance logs of PolarDB for MySQL clusters
    
-   Error logs of PolarDB for MySQL clusters
    

All supported regions

-   Audit logs
    
    -   PolarDB for MySQL clusters are supported.
        
    -   The SQL Explorer or SQL Audit feature must be enabled. The features are automatically enabled by Log Audit Service.
        
-   Slow query logs, performance logs, and error logs
    
    Only PolarDB for MySQL clusters are supported.
    

-   Slow query logs, audit logs, and error logs
    
    -   Logstore
        
        polardb\_log
        
    -   Dashboard
        
        None
        
-   Performance logs
    
    -   Metricstore
        
        polardb\_metrics
        
    -   Dashboard
        
        PolarDB Performance Monitor
        

PolarDB-X 1.0

PolarDB-X 1.0 audit logs

China (Qingdao), China (Shenzhen), China (Shanghai), China (Beijing), China (Hangzhou), China (Zhangjiakou), China (Chengdu), and China (Hong Kong)

None

-   Logstore
    
    drds\_log
    
-   Dashboard
    
    -   DRDS Operation Center
        
    -   DRDS Security Center
        
    -   DRDS Performance Center
        

NAS

Access logs

All supported regions

None

-   Logstore
    
    nas\_log
    
-   Dashboard
    
    -   NAS Summary
        
    -   NAS Audit Center
        
    -   NAS Operation Center
        

ACK

-   Kubernetes audit logs
    
-   Kubernetes event centers
    
-   Ingress access logs
    

China (Shanghai), China (Beijing), China (Hangzhou), China (Shenzhen), China (Hohhot), China (Zhangjiakou), China (Chengdu), and China (Hong Kong)

You must manually enable the log collection feature for Kubernetes logs.

**Note**

-   You must use projects that are automatically created and are named in the k8s-log-{ClusterID} format. Projects that are manually created are not supported.
    
-   The collection of Kubernetes logs is based on the data transformation feature. When you collect Kubernetes logs, you are charged for the data transformation feature. For more information, see [Billable items of the pay-by-feature billing model](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    
-   You cannot collect Kubernetes logs across accounts.
    

-   For more information about the prerequisites before you use Kubernetes audit logs, see [Collect container logs from ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-text-logs-from-ack-clusters-using-daemonset-deployed-logtail-agents#task-1797722).
    
-   For more information about the prerequisites before you use Kubernetes event centers, see [Create and use an event center](/help/en/sls/create-and-use-an-event-center#task-2389213).
    
-   For more information about the prerequisites before you use Ingress access logs, see [Analyze and monitor the access logs of nginx-ingress-controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/analyze-and-monitor-the-access-log-of-nginx-ingress#task-1796525).
    

-   Logstore
    
    -   k8s\_log
        
    -   k8s\_ingress\_log
        
-   Dashboard
    
    -   Kubernetes Audit Center Overview
        
    -   Kubernetes Event Center
        
    -   Kubernetes Resource Operation Overview
        
    -   Ingress Overview
        
    -   Ingress Access Center
        

Anti-DDoS

-   Anti-DDoS Proxy (Chinese Mainland) access logs
    
-   Anti-DDoS Proxy (Outside Chinese Mainland) access logs
    
-   Anti-DDoS Origin access logs
    

N/A

-   Anti-DDoS Proxy (Chinese Mainland): The log analysis feature must be enabled in the Anti-DDoS Proxy (Chinese Mainland) console. For more information, see [Use the log analysis feature](/help/en/sls/use-the-log-analysis-feature).
    
-   Anti-DDoS Proxy (Outside Chinese Mainland): The log analysis feature must be enabled in the Anti-DDoS Proxy (Outside Chinese Mainland) console. For more information, see [Use the log analysis feature](/help/en/sls/use-the-log-analysis-feature).
    
-   Anti-DDoS Origin: The log analysis feature must be enabled in the Anti-DDoS Origin console. For more information, see [Enable the log analysis feature](/help/en/sls/enable-the-mitigation-analysis-feature-of-anti-ddos-origin#task-2038617).
    

-   Logstore
    
    ddos\_log
    
-   Dashboard
    
    -   Anti-DDoS Proxy (Outside Chinese Mainland) Access Center
        
    -   Anti-DDoS Proxy (Outside Chinese Mainland) Operation Center
        
    -   Anti-DDoS Proxy (Chinese Mainland) Access Center
        
    -   Anti-DDoS Proxy (Chinese Mainland) Operation Center
        
    -   Anti-DDoS Origin Events Report
        
    -   Anti-DDoS Origin Scrubbing Analysis Report
        

**Note**

If an ApsaraDB RDS instance or a PolarDB for MySQL cluster is restarted, Log Audit Service may fail to collect some logs that are generated within 5 minutes after the restart.
