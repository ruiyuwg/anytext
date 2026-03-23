Compliance packages help you dynamically and continuously check your resources for compliance. They promptly notify you to fix non-compliant resources. This topic describes the main features of 24 compliance packages.

## [Best practices for network and data security](/help/en/cloud-config/latest/ciscompliancecheck)

The BestPracticesForNetworkAndDataSecurity compliance package performs a full-scale check from multiple aspects, such as the network architecture and data security. This ensures that the system and data are properly configured and protected and reduces network and data leak risks. If your resources are compliant with the requirements, network security risks can be reduced.

The following table describes the check items of the BestPracticesForNetworkAndDataSecurity compliance package.

**Features**

**Description**

Account

The compliance package checks the passwords set for and permission policies attached to Alibaba Cloud accounts and Resource Access Management (RAM) users.

Check network connectivity

The compliance package checks the network ownership, security group configurations, traffic monitoring configurations, and whether ports are open for instances.

Check the virtual machine.

The compliance package checks the details of disk encryption, system updates, and endpoint protection, and whether ports are open for instances.

Checking Object Storage Service (OSS)

The compliance package checks the configurations of read and write permissions, secure transmission, and content encryption for OSS buckets.

Check the database.

The compliance package checks the connection types, data encryption configurations, and audit configurations of databases.

## [ClassifiedProtectionPreCheck](/help/en/cloud-config/latest/classifiedprotectionprecheck)

Based on the MLPS 2.0 Level 3 standard, this pre-check compliance package dynamically and continuously monitors your Alibaba Cloud resources for compliance. This helps you avoid repeated corrections during formal inspections and pass the MLPS check more quickly.

The following table describes the check items of the ClassifiedProtectionPreCheck compliance package.

**Feature**

**Description**

Network type

The compliance package checks whether the network types of Elastic Compute Service (ECS) instances and database instances are virtual private clouds (VPCs). If an instance resides in a VPC, and the VPC is included in the expected value of the relevant rule parameter, the instance configuration is considered compliant.

Protection configurations

The compliance package checks whether the IP address whitelists of ECS instances and database instances are set to 0.0.0.0/0 and whether encryption is enabled for each ECS data disk.

Checking Object Storage Service (OSS)

The compliance package checks whether OSS buckets are accessed in read-only mode and whether zone-redundant storage and server-side encryption using OSS-managed keys are enabled.

Bandwidth

The compliance package checks whether the bandwidths of Server Load Balancer (SLB) instances and elastic IP addresses reach the specified lower limits.

## [OSS compliance management best practices](/help/en/cloud-config/latest/bestpracticesfoross)

Various customers store important business data in OSS buckets. If bucket configurations do not meet security protection requirements, business risks such as data leaks or loss may be brought about. The BestPracticesForOSS compliance package dynamically and continuously monitors the compliance of your OSS buckets and notifies you of non-compliance at the earliest opportunity.

The following table describes the check items of the BestPracticesForOSS compliance package.

**Features**

**Description**

Read and write permissions

The compliance package globally checks whether the access control lists (ACLs) of OSS buckets are set to public-read or public-read-write.

Protection configurations

To further enhance data security, file encryption and hotlink protection must be enabled on buckets.

Verify zone-redundant storage

The compliance package checks whether zone-redundant storage is enabled for OSS buckets.

## [BestPracticesForLoadBalancer](/help/en/cloud-config/latest/bestpracticesfornetwork)

This package checks for risks in public network and whitelist settings, multi-zone disaster recovery capabilities, instance renewal and expiration status, and change management for Classic Load Balancer and Application Load Balancer (ALB) instances. This helps ensure that load balancing instances are used correctly.

The following table describes the features of the best practices check for Server Load Balancer applications.

**Feature**

**Description**

Prevent service disruptions

If your network capacity cannot handle peak traffic, your services may be disrupted.

Isolate from the public network

Incorrect network settings can expose your systems to the Internet. This exposure can lead to attacks and data breaches.

Detect network issues promptly

If real-time network monitoring is disabled, you cannot detect network issues promptly. This delay can introduce potential threats to your business.

## [Resource protection best practices](/help/en/cloud-config/latest/bestpracticesforaccountgovernance)

The ResourceProtectionOnBestPractices compliance package checks whether protection features are enabled for Alibaba Cloud services such as ECS and ApsaraDB RDS.

The following table describes the check items of the ResourceProtectionOnBestPractices compliance package.

**Features**

**Description**

Logon of Alibaba Cloud accounts or RAM users

The compliance package checks the validity periods of the passwords set for Alibaba Cloud accounts and RAM users and whether multi-factor authentication (MFA) is enabled for them.

Security configurations

The compliance package checks whether invalid RAM users, user groups, or permission policies exist, and whether key pairs are created for Alibaba Cloud accounts.

Authorization

The compliance package checks whether policies are attached to RAM users and whether full permissions on Alibaba Cloud services are granted.

## [BestPracticesForIdentityAndPermissions](/help/en/cloud-config/latest/best-practices-for-accesskey-and-permission-governance)

The BestPracticesForIdentityAndPermissions compliance package checks the settings and usage of AccessKey pairs, Alibaba Cloud accounts, and RAM users.

## [Best practices for database compliance management](/help/en/cloud-config/latest/bestpracticesfordatabase)

The BestPracticesForDataBase compliance package continuously checks the compliance of ApsaraDB RDS, ApsaraDB for Redis, ApsaraDB for MongoDB, and PolarDB instances in terms of encryption and access control. This helps prevent data leaks.

The following table describes the check items of the BestPracticesForDataBase compliance package.

**Features**

**Description**

Validity period

The compliance package checks the validity periods of database instances.

Protection configurations

The compliance package checks whether release protection is enabled and IP address whitelists are set to 0.0.0.0/0 for database instances.

Network type

The compliance package checks whether the network types of database instances are VPCs and whether the specified VPCs are included in the expected value of the relevant rule parameter.

## [BestPracticesForECS](/help/en/cloud-config/latest/bestpracticesforecs)

The BestPracticesForECS compliance package continuously checks the compliance of ECS instances in terms of status, security configurations, protection configurations, and snapshot configurations. This prevents the risks of business interruption and out-of-control costs.

The following table describes the check items of the BestPracticesForECS compliance package.

**Features**

**Description**

Status

The compliance package checks the status of ECS instances.

Verify Security Settings

The compliance package checks the validity periods and security groups of ECS instances.

Protection configurations

The compliance package checks whether release protection and disk encryption are enabled for ECS instances.

Snapshot configurations

The compliance package checks whether automatic snapshot policies are configured, whether automatic locking is enabled, and whether the retention periods of automatic snapshots meet the requirements for the disks of ECS instances.

## [RMiTComplianceCheck](/help/en/cloud-config/latest/rmitcompliancecheck)

The RMiTComplianceCheck compliance package checks the compliance of cloud IT systems based on the Risk Management in Technology (RMiT) framework for financial institutions in Malaysia.

The following table describes the check items of the RMiTComplianceCheck compliance package.

**Features**

**Description**

Account

The compliance package checks the passwords, permission policies, and logons of RAM users, and whether MFA is enabled for the RAM users.

Check the Server Load Balancer (SLB)

The compliance package checks whether release protection and HTTPS listeners are enabled for SLB instances, and whether the certificates issued by Alibaba Cloud are valid.

Checking the ECS instance

The compliance package checks whether the network types of ECS instances are VPCs, whether disk encryption is enabled for the ECS instances, and whether the ECS instances are bound to public IPv4 addresses.

OSS bucket

The compliance package checks whether server-side encryption using Key Management Service (KMS), default server-side encryption, and log storage are enabled for OSS buckets.

Checking ApsaraDB RDS

The compliance package checks whether historical event logging and transparent data encryption (TDE) are enabled for ApsaraDB RDS instances and whether the instances support multi-zone deployment.

Check ActionTrail.

The compliance package checks whether an enabled ActionTrail trail exists and whether the trail records all types of event logs.

## [GovernanceCenterCompliancePractices](/help/en/cloud-config/latest/governancecentercompliancepractices)

Using the GovernanceCenterCompliancePractices compliance package, you can configure and enable rules for all member accounts of your resource directory in a centralized manner in the Cloud Governance Center console. This prevents the basic configurations of Cloud Governance Center and the resource structure that is created in Cloud Governance Center from being modified. This also ensures the security of the multi-account environment.

## [BestPracticesForSecurityGroups](/help/en/cloud-config/latest/bestpracticesforsecuritygroups)

The BestPracticesForSecurityGroups compliance package continuously monitors the compliance of your security groups based on security group rules. This reduces security risks.

## [BestPracticesForOceanBase](/help/en/cloud-config/latest/bestpracticesforoceanbase)

The BestPracticesForOceanBase compliance package continuously monitors the compliance of your OceanBase resources based on the BestPracticesForSecurityGroups compliance package.

## [BestPracticesForResourceStability](/help/en/cloud-config/latest/bestpracticesforresourcestability)

The BestPracticesForResourceStability compliance package monitors the stability of cloud resources from the following six dimensions: high-availability infrastructure, capacity protection, change management, monitoring management, backup management, and fault isolation. This helps you detect risks at the earliest opportunity and improve the stability and O&M efficiency of your cloud resources.

## [PCIDSSDataSecurityStandard](/help/en/cloud-config/latest/pcidssdatasecuritystandard)

Compliance packages that are created from the PCIDSSDataSecurityStandard template are based on the Payment Card Industry Data Security Standard (PCI DSS) V4.0 baseline to protect account data and provide suggestions and compliance checks based on cloud resource usage and management.

## [GxPComplianceCheckForEU11](/help/en/cloud-config/latest/gxp-eu-appendix-11-standard-compliance-package)

GxP EU Annex 11 guidelines apply to computerized systems used in the European Union (EU), especially to computerized systems used by enterprises and organizations in pharmacy, biotechnology, and medical device industries. Based on the Annex 11 baseline standards for account data protection, the GxPComplianceCheckForEU11 compliance package provides optional compliance evaluation in terms of resource usage and control in the cloud.

## [BestPracticesForHighAvailabilityArchitecture](/help/en/cloud-config/latest/bestpracticeformultizonearchitecture)

A workload that uses the multi-zone architecture provides high data reliability. If the primary zone fails, the system can immediately restore your business.

## [BestPracticesForInternetAccess](/help/en/cloud-config/latest/bestpracticeforinternetaccessresourcedetection)

To meet the requirements for Internet security, costs, permissions, and monitoring, the IT management team of an enterprise always deploys secure Internet egress in a centralized manner. This prevents Internet access from being enabled for Alibaba Cloud resources on which no limits are set. This reduces the security risks that may be caused by cyber attacks and data leaks.

## [BestPracticeForIdleResourceDetection](/help/en/cloud-config/latest/bestpracticeforidleresourcedetection)

You can use a compliance package that is created from the BestPracticeForIdleResourceDetection template to check whether the purchased resources of Alibaba Cloud services are idle. The Alibaba Cloud services include Elastic IP Address (EIP), Internet Shared Bandwidth, VPC, and VPN Gateway. If resources are not used after the resources are purchased, this may result in resource waste. We recommend that you identify idle resources and use the resources at the earliest opportunity.

## [China GMP annex compliance package](/help/en/cloud-config/latest/china-gmp-appendix-computerized-system-compliance-package)

Enterprises and organizations that use computerized systems in the pharmaceutical manufacturing industry must comply with the guidelines on computerized systems in the Good Manufacturing Practice (GMP) for Drugs standard when cloud services are used.

## [Alibaba Cloud Well-Architected Framework Security Pillar best practices](/help/en/cloud-config/latest/alibaba-cloud-cloud-excellence-architecture-security-pillar-best-practices)

The security pillars of Alibaba Cloud Well-Architectured Framework help you regulate and implement security from all aspects, such as network, identity, host, and data, and continuously detect and respond to threats.

## [BestPracticesForChangeManagement](/help/en/cloud-config/latest/change-management-best-practices)

The best practices for change management help you check the stability of cloud resources from the perspective of change management. This helps identify potential risks in advance and improve stability and O&M efficiency.

## [BestPracticesForResourceExpirationReminders](/help/en/cloud-config/latest/resource-expiration-reminder-best-practices)

The best practices for sending resource expiration reminders help you check the stability of cloud resources from the perspective of resource expiration risks. This helps identify potential risks in advance and improve stability and O&M efficiency.

## [BestPracticesForEnablingResourceBackup](/help/en/cloud-config/latest/best-practices-for-enabling-resource-backup)

This compliance package checks whether resource backup is enabled for cloud products, such as Tair (Redis OSS-compatible), PolarDB, and RDS. This lets you promptly discover and manage resources that are not backed up.

## [BestPracticesForRedis](/help/en/cloud-config/latest/reids-application-best-practices)

This package checks whether the instance type of Tair (Redis OSS-compatible) meets requirements. It also checks for risks related to audit log enablement, public network and whitelist settings, multi-zone disaster recovery capabilities, instance renewal and expiration, and change management. This ensures the correct use of Tair (Redis OSS-compatible) and guarantees system stability and security.

## [Best practices for PolarDB applications](/help/en/cloud-config/latest/best-practices-for-polardb-applications)

This package checks whether PolarDB clusters use a stable version and have a reasonable configuration. It also checks for risks related to backup settings, public network and whitelist settings, instance renewal and expiration, and change management of PolarDB clusters. This ensures that you use PolarDB clusters correctly and guarantees their system stability and security.

## [Best practices for CDN compliance management](/help/en/cloud-config/latest/cdn-compliance-management-best-practices)

This package performs compliance checks based on product best practices for access control, cache configuration, performance, and cost.

## [SOC 2 audit standard practice compliance package](/help/en/cloud-config/latest/soc2-audit-standard-practice-compliance-package)

The SOC 2 audit standard practice compliance package is based on SOC 2 report requirements. It provides suggested compliance checks for data security, availability, integrity, and confidentiality.

## [ISO 27001 security management standard compliance package](/help/en/cloud-config/latest/iso-27001-security-management-standards-compliance-package)

The ISO 27001 security management standard compliance package is based on the security management standards in Annex A of ISO/IEC 27001:2013. It provides suggested compliance checks for cloud resource risk detection and governance to help your organization implement, maintain, and continuously improve its information security management system.

## [NIST 800-53 compliance package](/help/en/cloud-config/latest/nist800-53-compliance-package)

This package checks Alibaba Cloud resources for compliance based on select requirements of NIST 800-53 Rev. 5.

## [MLPS 2.0 Level 2 pre-check compliance package](/help/en/cloud-config/latest/class-ii-pre-inspection-compliance-package)

This package checks Alibaba Cloud resources for compliance based on select requirements of MLPS 2.0 Level 2. The compliance package template provides a general compliance framework. By specifying rule parameters and correction settings, you can quickly create a compliance package that fits your target scenario. A 'Compliant' status for a rule refers only to the compliance description defined by the rule itself. It does not guarantee that you meet all requirements of a specific regulation or industry standard.

## [Best practices for cost optimization](/help/en/cloud-config/latest/cost-optimization-best-practices)

This package checks the usage of CPU, GPU, GPU memory, memory, and disks for instances of products such as ECS, RDS, MongoDB, and Redis. Tracking and managing instances with low usage over a specific period helps enterprises manage costs more effectively. Some rules in this compliance package depend on CloudMonitor data APIs and consume the free quota of basic CloudMonitor. To ensure detection quality, you should enable Hybrid Cloud Monitoring. For more information about the billing of Hybrid Cloud Monitoring, see CloudMonitor billing.

## [Best practices for AI model training architecture detection](/help/en/cloud-config/latest/best-practices-for-ai-model-training-architecture-detection)

This package checks the architecture design for scenarios where AI models are trained on GPUs. This check includes ensuring that core resources, such as ECS, NAS, and OSS, are matched with training requirements to meet task demands.

## [Best practices for Alibaba Cloud platform security](/help/en/cloud-config/latest/alibaba-cloud-platform-security-best-practices)

Based on Alibaba Cloud's platform security governance experience, this package covers key security configuration checks for the cloud platform foundation. It covers dimensions such as account security, cloud resource security, network security, data security, backup and recovery, and log auditing to continuously detect configuration risks.

## [Quick experience compliance package](/help/en/cloud-config/latest/quick-experience-compliance-pack)

This package provides a quick way to experience compliance checks when the service is enabled. It provides basic best practice checks for your cloud resource management and governance.

## [Best practices for generative AI compliance](/help/en/cloud-config/latest/generated-ai-compliance-best-practices)

This compliance package helps you comprehensively detect and manage potential security and stability compliance risks for Model Studio, Platform for AI (PAI), and their dependent core services, such as ACS, ACR, OSS, NAS, KMS, SLS, and MaxCompute.
