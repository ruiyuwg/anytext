Cloud security posture management (CSPM) offers a cloud service configuration check feature that detects configuration issues and security risks based on check rules from AI security posture management (AI-SPM), Kubernetes Security Posture Management (KSPM), Cloud Infrastructure Entitlements Management (CIEM), best security practices from cloud providers, and compliance standards. It assesses risks and displays statistics by risk level to provide an overview of configuration risks for cloud services.

## **Limit**

This feature is available for both free and paid editions of Security Center.

## **Billing**

Security Center offers some check items for free. For paid check items, charges are based on the quota usage for each instance, which includes the **number of scans, verifications, and fixes**. For more information, see [CSPM billing](/help/en/security-center/user-guide/cspm#63fcb67e67acr).

## **Procedure**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4725781571/CAEQORiBgMDkspTmrxkiIDExZjgxYmE3OTcyZDQwZDc5ZGUyNmIxNWIwZWQzMzFi4982127_20250321133309.206.svg)

1.  [Authorize Security Center to access your resources and activate CSPM](/help/en/security-center/user-guide/authorize-and-activate-cspm) for full check item usage in configuration check.
    
    **Note**
    
    To use only the free check items from Security Center, complete the authorization.
    
2.  [Add multi-cloud assets](/help/en/security-center/user-guide/initialize-configuration) requiring configuration checks to Security Center.
    
    Security Center automatically synchronizes cloud services under the same Alibaba Cloud account. No manual operation is needed.
    
3.  [Configure check policies](/help/en/security-center/user-guide/use-cloud-platform-configuration-check#85b6ebd1afv8m) to assess configuration risks in specific cloud services, perform periodic checks, or whitelist certain check items for an instance to skip.
    
4.  Manually [perform a full scan or a policy-based scan](/help/en/security-center/user-guide/use-cloud-platform-configuration-check#title-qfc-tl8-3yh). Security Center also conducts automatic scans based on the check cycle and time specified in the scan policies.
    
5.  [View details of failed check items](/help/en/security-center/user-guide/view-and-handle-failed-check-items#title-njt-bcc-bwe), including descriptions, at-risk assets, and recommended solutions.
    
6.  [Fix the configuration of at-risk assets](/help/en/security-center/user-guide/view-and-handle-failed-check-items#title-wwo-yc9-1ck) based on the solutions and verify that the failed check item has passed after the fix.
    

## **Function descriptions**

#### **Check rules**

Configuration check supports check rules for AI-SPM, KSPM, CIEM, security risks, and compliance risks. See the table below for specific **predefined check items** provided by Security Center. You can also [add custom check items](/help/en/security-center/user-guide/use-cloud-platform-configuration-check#a76959b6c97me) in these scenarios.

**Important**

For specific **predefined check items** supported, see the **Risk Governance** > **CSPM** page in the Security Center console.

**Scenario**

**Check item category**

**Description**

**AI-SPM**

Alibaba Cloud AI security practices: Platform for AI (PAI)

-   Alibaba Cloud enforces strict AI security standards covering data protection, access control, and LLM security checks to ensure the safety and compliance of AI applications throughout their lifecycle. This effectively mitigates potential risks and protects user data privacy.
    
-   The Security Center supports configuration risk checks for AI assets like PAI and Function Compute, including checks for least privilege, operational protection, and public whitelisting, helping you effectively manage and reduce configuration risks while ensuring data security and service stability.
    

Azure AI security practices: AI services and machine learning

AWS-AI security practices: Machine learning

**KSPM**

K8s best security practices: container security, security policies, RBAC, and storage policies.

-   KSPM ensures Kubernetes (K8s) cluster configurations comply with best security practices to identify potential risks.
    
-   Security Center checks container shared namespaces, privileged startup permissions, and sensitive field configurations based on K8s best practices, helping to identify and resolve deployment and configuration issues promptly to ensure the security and compliance of K8s deployments.
    

**CIEM**

AWS Identity and Access Management (IAM): IAM identity authentication and IAM permission management.

-   CIEM combines cloud security check technologies and authorization management to manage access permissions on cloud platforms.
    
-   Security Center uses CIEM to manage identities and permissions, checking for issues like excessive permissions and password expiration. This helps identify and resolve permission management issues promptly, enhancing the security and reliability of cloud platforms.
    

Tencent Cloud Access Management (CAM): CAM identity authentication and CAM permission management.

Alibaba Cloud identity and permission management: RAM identity authentication, IDAAS, and RAM permission management.

**Security risks**

Alibaba Cloud best security practices: security, NoSQL database, storage, elastic computing, relational database, data warehouse, container and middleware, network, big data, DevOps and maintenance, and database management tools.

-   Best security practices are measures developed by cloud service providers to enhance data and business security.
    
-   Security Center checks security configurations, code vulnerabilities, and logging settings of business systems, identifying potential configuration errors based on these practices. This ensures optimal protection for your data and business.
    

AWS best security practices: computing, database, analytics, storage, networking and content delivery, and container.

Azure best security practices: network, computing, container, storage, database, security, and monitor.

Tencent Cloud best security practices: network, relational database, NoSQL database, storage, container and middleware, big data, security, and computing.

Huawei Cloud: management and monitoring.

**Compliance risks**

Internationally agreed best practices for security: Alibaba Cloud platform baseline and AWS platform baseline.

-   The internationally recognized best practice for security, set by the Center for Internet Security, outlines standards for defending IT systems and data against cyberattacks.
    
-   Security Center comprehensively checks and manages compliance risks on cloud platforms, identifying configurations that fail to meet these security standards. This allows for timely remediation of vulnerabilities, maximizing the security of your data and business.
    

PCI Data Security Standard: Alibaba Cloud PCI DSS.

-   The Payment Card Industry Data Security Standard (PCI DSS) consists of security measures aimed at enhancing cardholder information security and promoting the global adoption of data security practices. It addresses various aspects, including information security management systems, network security, physical security, and data encryption, establishing comprehensive security baseline requirements.
    
-   Security Center offers a range of security detection services based on PCI DSS to assess and manage network security configurations, potential vulnerabilities, access controls, log audits, encrypted transmissions, and malware protection on cloud platforms. This supports enterprises in meeting PCI DSS requirements and safeguarding their payment card information.
    

Classified Protection 2.0 Standard: Alibaba Cloud Multi-Level Protection Scheme (MLPS) Level 3.

-   Since December 1, 2019, the "Information Security Technology-Baseline for Classified Protection of Cybersecurity" (GB/T 22239-2019) has been officially implemented. Adopting the Classified Protection of Cybersecurity system is a fundamental obligation for all enterprises and organizations.
    
-   Security Center offers an MLPS compliance check feature to ensure the cloud platform meets basic requirements. This feature supports comprehensive security checks, including network security configurations, host vulnerability management, and data security management. It facilitates the efficient and continuous implementation of the Classified Protection of Cybersecurity system, enhancing the security capabilities of cloud-based businesses.
    

ISO international standard: Alibaba Cloud ISO 27001.

-   ISO 27001 is an international standard for managing information security. Certification indicates that an enterprise can provide safe and reliable information services, recognized by the International Organization for Standardization (ISO).
    
-   The ISO 27001 compliance check of Security Center evaluates whether enterprise asset systems meet certification requirements, including asset management, access control, cryptography, and operational security. This facilitates comprehensive risk checks, identifies potential threats and vulnerabilities, and offers risk mitigation suggestions to assist enterprises in achieving ISO 27001 certification.
    

#### **Risk levels**

CSPM assesses risks mainly based on the severity and application scenarios.

**Risk level**

**Description**

**Fix suggestion**

High

Items that significantly increase intrusion or exposure risk, such as management port exposure, origin server bypass, credential leakage, unauthorized access, authentication bypass, and undisabled privileged accounts.

Fix immediately.

Medium

Important items that, if addressed, can reduce configuration vulnerabilities and enhance data security.

Address in a timely manner based on your situation.

Low

Non-critical items, such as log audit reminders and security governance notifications.

Ignore or fix as needed for compliance.

#### **Fix risks**

Security Center offers optimization suggestions and solutions for each risk item to help you manage cloud resources and ensure business security.

-   Individual fix: You need to assess the risk impact on the cloud services based on the check results, and perform fixes.
    
-   Batch fix: Security Center provides a one-click fix feature for more than 100 check items, enabling you to correct configurations of instances in the Security Center console.
    
    You can view the risk items eligible for **one-click fix** in the console.
    
    Each successful fix of a risk item consumes one **quota** of CSPM.
    

#### **Supported cloud services**

Security Center supports adding Alibaba Cloud services, third-party cloud services (Tencent Cloud, Huawei Cloud, Azure, and AWS), and self-managed K8s clusters, and checking cloud service configurations based on **_check rules_**. You can [view the supported cloud services](/help/en/security-center/user-guide/initialize-configuration#00799ec17bhpp) in the Security Center console.
