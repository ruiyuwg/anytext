Security for Elastic Desktop Service (EDS) Enterprise is a shared responsibility between Alibaba Cloud and customers. This topic describes the specific security obligations for each party.

## **Cloud security**

With the rapid development of the Internet, China has perfected and introduced more than two hundred laws and regulations that are related to cybersecurity and data security in the past few decades, including the [Cybersecurity Law of the People's Republic of China](http://www.cac.gov.cn/2016-11/07/c_1119867116.htm) (recognized as the basic law on cybersecurity of China) and the [Data Security Law of the People's Republic of China](http://www.npc.gov.cn/npc/c30834/202106/7c9af12f51334a73b56d7938f99a788a.shtml) (recognized as the basic law on data security of China), to impose strict requirements and standards on the business security and data security of enterprises. As customers embrace cloud computing applications, they shift their focus from **how to migrate to the cloud** to **how to continuously and securely operate business in the cloud** to protect the security of both their business and user information. In this context, cloud security and compliance are receiving more attention from enterprises.

To maintain good cloud security posture, a set of policies, control means, and technical means are collectively used to safeguard cloud infrastructure, data storage, data access, and applications and protect cloud-based business from security threats. Cloud security and compliance are shared responsibilities between Alibaba Cloud and customers. As an Alibaba Cloud customer, you must familiarize yourself with the risks that are associated with your cloud-based business. You must also engineer and put in place comprehensive safeguards to relieve operational burdens and prevent asset loss that is caused by security events.

## **Shared security responsibilities**

EDS Enterprise is Alibaba Cloud's integrated end-to-cloud solution that employs a shared security responsibility model. Under this framework:

-   **Alibaba Cloud secures the foundational infrastructure**, including physical hardware, software services, network communications, and management systems that support EDS Enterprise operations.
    
-   **Customers maintain secure cloud use** by implementing least-privilege access for sub-administrators and end users, configuring appropriate cloud computer policies for file transfer and web access controls, and maintaining regular data backups of cloud computers. Customers are responsible for managing and configuring EDS Enterprise security settings to meet their security obligations.
    

EDS Enterprise adheres to Alibaba Cloud's shared security responsibility model. The following figure describes each party's specific obligations for your reference.

![EDS安全责任共担模型](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4553143471/p922381.png)

## **Alibaba Cloud's responsibility: delivering a secure cloud platform**

Alibaba Cloud implements multi-layered security protections to safeguard your cloud environment:

-   **Physical security**
    
    -   Personnel management: Alibaba Cloud's personnel management system implements comprehensive security controls across sensitive areas including data centers, electricity measurement zones, and warehouses. Alibaba Cloud enforces two-factor authentication through access control systems combined with biometric verification. Physical security is maintained through caged isolation in designated zones. The system adheres to strict operational protocols encompassing account management, identity verification, role-based authorization, duty segregation, and controlled access permissions.
        
    -   Disaster-resilient data centers: Alibaba Cloud data centers employ comprehensive protection measures including fire/smoke detection systems, redundant power supplies with backup systems, and precision HVAC units operating in hot-standby mode to maintain optimal temperature and humidity levels at all times.
        
    -   O&M and auditing: Alibaba Cloud data centers implement comprehensive security monitoring across all facilities. All production system access requires bastion hosts for secure operations and maintenance, with full activity logging to a centralized audit platform.
        
    -   Storage asset management: Alibaba Cloud manages storage assets at the component level, assigning unique hardware identifiers to each storage device for precise tracking. Storage media must remain within secured data center areas unless properly sanitized (through secure erasure) or physically destroyed according to established standards.
        
    -   Data destruction: Alibaba Cloud implements a secure data erasure process compliant with NIST SP 800-88 standards. This ensures complete data destruction through multiple sanitization passes when customer services are terminated, permanently removing all data assets from storage media at the earliest opportunity.
        
    -   Network isolation: Alibaba Cloud enforces strict network segregation between production and non-production environments by using network ACLs to prevent cloud-to-physical network access. To access production environments for O&M tasks, operations personnel must authenticate using valid domain credentials and a dynamic verification code.
        
-   **Hardware security**
    
    -   Firmware security: Alibaba Cloud Workspace hardware terminals support secure boot and encrypted system image updates. All image packages are transmitted via TLS and undergo signature verification on the terminals to ensure end-to-end protection of critical hardware components.
        
        -   Secure boot
            
            Alibaba Cloud Workspace terminals support secure boot on both ARM and x86 platforms. This security feature verifies firmware and operating system integrity during startup, ensuring only trusted software loads when devices power on. The system implements a hardware-to-OS verified boot sequence, protecting against malware injection or unauthorized modifications during startup.
            
        -   System integrity verification
            
            Alibaba Cloud Workspace enhances secure boot by extending the trusted scope beyond firmware and OS kernel-level verification. Through Integrity Measurement Architecture (IMA) and DM-Verity, it protects system integrity across vendor partitions and read-only system components, providing comprehensive defense against malicious tampering.
            
        -   Kernel hardening
            
            -   Kernel address space layout randomization (KASLR): KASLR enhances security by randomizing the kernel's address space layout, preventing code reuse attacks from relying on fixed addresses. This significantly reduces the risk of complex exploits.
                
            -   Stack protection: Stack protection is a security mechanism that guards against buffer overflow attacks. These attacks typically exploit stack-based buffer vulnerabilities caused by insufficient size validation in programs. Stack protection improves program security by adding runtime safety checks to stack frames.
                
            -   Data execution prevention (DEP): DEP is a security feature that protects against memory-based attacks by preventing malicious code execution in data regions. By strictly separating executable code from data, DEP blocks malicious attempts to exploit buffer overflows, effectively neutralizing this common attack vector.
                
    -   Encrypted computing: Alibaba Cloud Workspace hardware terminals integrate Secure Element (SE) technology, a dedicated security microcontroller designed for secure data storage and processing. This financial-grade protection meets the stringent security requirements of payment and banking applications. SE provides robust hardware-based security through tamper-resistant protection against physical attacks including tampering, probing, and side-channel analysis. It integrates a high-performance cryptographic engine supporting industry-standard algorithms (such as AES, RSA, and ECC) for secure data encryption and decryption, delivering comprehensive physical and logical security.
        
    -   Trusted computing:
        
        -   Trusted platform module (TPM): TPM is a specialized security microcontroller that provides hardware-level protection for computer systems. Developed as an international standard (ISO/IEC 11889) by ISO and IEC, TPM establishes and maintains a root of trust for computing devices. In Alibaba Cloud Workspace, the TPM enhances security by participating in system startup, generating and verifying platform configuration registers (PCRs), recording system software and hardware status, and detecting unauthorized changes during boot. It also validates bootloader and OS image integrity to block malware injection during system startup.
            
        -   Trusted execution environment (TEE/TrustZone): A TEE is a hardware-based security architecture that establishes an isolated zone, separate from the main computing environment (typically the CPU), to securely run protected applications and services. The opposite is the untrusted execution environment (commonly called REE, or Rich Execution Environment), which includes the OSs and user applications.
            
        -   Device control: Each device has a tamper-proof, unforgeable, and globally unique trusted identity. Using this identifier, Alibaba Cloud Workspace enables online registration and control, security audits to block unauthorized access, and blacklist enforcement and remote data wipe for lost or stolen devices.
            
        -   System integrity verification: For secure boot, the trusted scope includes firmware up to the OS kernel. Alibaba Cloud Workspace extends integrity protection to read-only partitions (such as system and vendor) by using IMA and DM-Verity, preventing malicious tampering and ensuring system integrity.
            
-   **Virtualization security**
    
    -   Tenant isolation: Hardware virtualization ensures system-level isolation between virtual machines on different compute nodes, preventing unauthorized access to other tenants' resources.
        
        -   Compute isolation: Your virtual machines are securely separated from both the management system and other customers' virtual machines.
            
        -   Network isolation: Virtual networks are isolated from each other.
            
        -   Storage isolation: Compute and storage are decoupled, restricting virtual machines to their assigned disk space.
            
    -   Security hardening: The hypervisor and host OS/kernel are hardened, and the virtualization software must be compiled and run in a trusted execution environment to ensure end-to-end security.
        
    -   Evading detection: Advanced virtual machine layout algorithms prevent malicious users from running virtual machines on specific physical machines. These measures ensure virtual machines cannot detect their host environment, monitor for abnormal virtual machine behavior, and apply hotfixes upon detecting vulnerabilities.
        
    -   Hotfix: The virtualization platform supports hotfix technology, enabling updates without system restarts or disruption to user operations.
        
    -   Data clearing: Upon server release, storage media is securely wiped to protect user data.
        
    -   Secure virtualized system: Virtualization technology, the core of cloud computing, enables multi-tenant resource isolation through computing, storage, and network virtualization.
        
-   **Platfotm security compliance**
    
    -   Compliance qualification: Alibaba Cloud meets strict domestic and international compliance standards, serving industries with high regulatory requirements. For more information about Alibaba Cloud’s security compliance, visit [Alibaba Cloud Trust Center](https://www.alibabacloud.com/trust-center).
        
    -   Compliance capability: Leveraging its comprehensive platform, product management system, and governance expertise, Alibaba Cloud ensures that its cloud platform and services meet both domestic and international compliance standards. This covers infrastructure, network, identity, host, and data security, as well as personal information protection and cloud service security.
        
    -   Compliance certification: Alibaba Cloud, a global leader in cloud security and compliance, has established a robust compliance system to support its worldwide operations. Verified by independent third-party organizations, Alibaba Cloud holds over 140 international security compliance certifications, showcasing its ability to meet diverse regulatory standards. By continuously enhancing its cloud platform’s security compliance, Alibaba Cloud helps customers and organizations efficiently fulfill regional and industry-specific requirements.
        
-   **Cloud service security**
    
    -   Multi-layered protection: Alibaba Cloud ensures comprehensive service security through a multi-layered approach. Guided by defense-in-depth and zero-trust principles, Alibaba Cloud implements automated, digitized security measures at every stage of the service lifecycle to enforce security compliance. Finally, the cloud platform and its services offer high-level security.
        
    -   Enhanced security through red-blue confrontation: Alibaba Cloud employs a comprehensive red-blue confrontation strategy to continuously enhance its security posture. Internally, the Blue Team conducts APT-level penetration tests to proactively identify and remediate vulnerabilities. Externally, the platform leverages a robust white-hat ecosystem, including bug bounty programs and third-party security assessments, to validate its defenses from an outside perspective. This approach ensures the platform maintains a high standard of security against evolving threats.
        
    -   Enhanced hardware terminal security: Alibaba Cloud Workspace enhances security for hardware terminals across devices, firmware, and systems.
        
        -   First, hardware terminals ensure authenticity and uniqueness by leveraging built-in, uncopiable, and unforgeable hardware information. User privacy data is securely encrypted and stored using a "one machine, one secret" approach to prevent theft. Additionally, the debugging or diagnosis interface can only be accessed with proper authorization, enabling controlled handling of after-sales issues. Part of the hardware terminals, such as Alibaba Cloud Workspace Terminal Pro AS06 and Alibaba Cloud Workspace Notebook Pro NS01, further enhance security with biometric authentication, including fingerprint and facial recognition, to ensure reliable and secure user logons.
            
        -   Secondly, hardware terminals support Secure Boot and system image updates. The image packages are encrypted during TLS transmission and undergo signature verification on hardware terminals, ensuring firmware security for critical hardware devices.
            
        -   Finally, the terminal system also supports a cloud security scanner for high-risk vulnerabilities, addressing both kernel-level flaws and business code weaknesses. At the same time, the core system files and services feature tamper-proof protections and strict permission management mechanisms.
            

## **Customer responsibility: compliant cloud usage**

Customers shall use cloud services securely and in compliance with regulations. Alibaba Cloud offers a range of security management and configuration tools. These tools simplify security configurations, enabling customers to choose the right solutions based on their business needs and ensure the safety of their operations on EDS Enterprise. References:

-   [Identity and access management](/help/en/wuying-workspace/security-and-compliance/identity-and-access-control)
    
-   [Data security](/help/en/wuying-workspace/security-and-compliance/data-security)
    
-   [Network security](/help/en/wuying-workspace/security-and-compliance/network-security)
    
-   [Infrastructure security](/help/en/wuying-workspace/security-and-compliance/infrastructure-security)
    
-   [Log audit](/help/en/wuying-workspace/security-and-compliance/logs-and-audit)
