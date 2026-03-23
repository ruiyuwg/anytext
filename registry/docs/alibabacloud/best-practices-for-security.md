This topic describes measures that Alibaba Cloud takes to handle threats in cybersecurity and challenges and improve security when users use accounts, instances, operating systems (OSs), and Elastic Compute Service (ECS) resources.

## Background

Security covers a broad spectrum. Alibaba Cloud provides secure services and is responsible for protecting the underlying infrastructure of Alibaba Cloud services, such as data centers and virtualization platforms. When you use Alibaba Cloud services, it is also important that you follow best security practices such as protecting your Alibaba Cloud accounts, keeping information confidential, and controlling permissions.

## Security trends of cloud services

### Cybersecurity threats

In recent years, we have seen a rapid increase in cybersecurity threats. [**State of Security 2022**](https://www.splunk.com/zh_cn/newsroom/press-releases/2022/state-of-security-2022-report-reveals-increase-in-cyberattacks-while-security-talent-remains-scarce.html), an annual global research report released by Splunk Inc., reveals the following data:

-   49% of organizations say that they have suffered data breaches over the last two years, compared to 39% a year ago.
    
-   79% of respondents say that they have faced ransomware attacks. 35% admit that one or more of those attacks caused them to lose access to data and systems.
    
-   59% of security teams say that they have devoted significant time and resources to taking remedial actions, compared to 42% a year ago.
    
-   On average, it takes 14 hours to recover from unplanned downtime. Respondents estimate that the average cost of this downtime amounted to USD 200,000 per hour.
    

The shift from traditional IT infrastructure to cloud-based architectures brings new challenges to security. A single accidental operation may expose your application to the Internet or disclose your key and result in a cybersecurity incident. Security and compliance are essential to digital transformation and are job one in your journey to the cloud.

### Prerequisites for protecting information assets in the cloud

Security is extremely important and you must make it a priority. The security of systems and applications is an ongoing journey of incremental progress and maturity.

-   Make a holistic security strategy and integrated protection policies, complete with security tools and controls.
    
-   Build security into DevOps.
    
-   Build an automated security defense system to protect your systems.
    
-   Dig into cloud security compliance standards.
    

In addition, you must take note of the following items:

-   Identify, define, and categorize all your information assets.
    
-   Define what asset data to protect.
    
-   Define who can access the asset data in protection and for what purposes the asset data can be accessed.
    

## Protect information assets in the cloud

Cloud computing security, or cloud security, usually refers to the practice of using a set of policies, controls, and technologies to protect data, infrastructure, and applications within a cloud computing environment from both external and internal cybersecurity threats and vulnerabilities. An ever-growing number of enterprises attach greater importance to cloud security compliance. Security compliance in the cloud depends on a top-down top-level design. To ensure security compliance in the cloud, you must develop cloud-based applications with security in mind.

In light of current security trends, we recommend that you use the best security practices described in the following table to protect your information assets in the cloud.

**Item**

**Best practice**

**Description**

Account security

[Protect Alibaba Cloud accounts](#section-86s-yg4-mfm)

-   Enable multi-factor authentication (MFA) for accounts.
    
-   Use Resource Access Management (RAM) users instead of Alibaba Cloud accounts and attach appropriate permissions policies to the users.
    
-   Use instance RAM roles instead of AccessKey pairs to call API operations.
    
-   Prevent AccessKey pair leaks.
    
-   Follow the security suggestions for managing accounts and passwords.
    

Management of application resources

[Manage information assets in bulk](#section-ue4-go7-ils)

-   Use tags to manage resources in bulk
    
-   Use Cloud Assistant to automate O&M on resource channels.
    
-   Use Cloud Config to conduct compliance audits on resources.
    

Information and data security

[Enable security compliance when you create instances](#section-xna-4yz-k6y)

-   Host business that requires high security on security-enhanced instances.
    
-   Use secure images.
    
-   Encrypt data on disks.
    
-   Use snapshots for disaster recovery purposes.
    
-   Access instance metadata in security hardening mode.
    

Network environment security

[Properly separate permissions on network resources](#section-790-6t8-ptf)

-   Follow the security suggestions for isolating network resources.
    
-   Build a secure network environment.
    

Application security

[Use security services to build a security defense system](#section-djr-q4t-azk)

-   Use Anti-DDoS Origin Basic (free-of-charge), Anti-DDoS Pro, and Anti-DDoS Premium to mitigate DDoS attacks.
    
-   Use Security Center Basic for free to protect against exploitation of system vulnerabilities.
    
-   Use Web Application Firewall (WAF) to protect against exploitation of system vulnerabilities.
    

Security of applications in the guest operating systems of instances

[Protect applications in instance guest operating systems](#section-dxe-m78-90z)

-   Configure security settings to ensure secure logons to ECS instances.
    
-   Encrypt data in transit.
    
-   Monitor and audit log exceptions.
    

## Protect Alibaba Cloud accounts

### Enable MFA for accounts

We recommend that you enable MFA for your Alibaba Cloud account. MFA enhances security because it requires you to provide MFA security codes in addition to usernames and passwords when you access Alibaba Cloud services. MFA security codes are dynamically generated by MFA devices.

### Use RAM users instead of Alibaba Cloud accounts and attach appropriate permissions policies to the users

Make sure that access permissions on ECS resources are granted to RAM users based on the principle of least privilege. Do not share account information to third parties or grant unnecessary permissions to RAM users. We recommend that you use your Alibaba Cloud account to create RAM users (or user groups) and attach specific permissions policies for fine-grained access control over accounts on ECS resources. For more information, see [RAM users](/help/en/ecs/user-guide/control-access-to-resources-by-using-ram-users#concept-stg-4pd-zdb).

-   RAM user
    
    If you purchase multiple ECS instances that need to be accessed by different entities in your organization, such as employees, systems, and applications, you can create RAM users and attach permissions policies to the RAM users to grant only required permissions to prevent security risks.
    
-   RAM user group
    
    -   You can create multiple user groups and attach different permissions policies to the user groups. This way, you can manage user permissions by user group. For example, to enhance network security, you can configure a permission policy that denies access to specific ECS resources from IP addresses outside your corporate network and assign the policy to a specific user group.
        
    -   You can create multiple user groups and attach different policies to manage permissions of personnel with different job responsibilities. For example, if a developer becomes a system administrator, you can move the developer account from the Developers group to the SysAdmins group.
        
-   Policy for a user group
    
    -   SysAdmins: This user group needs permissions to create and manage ECS instances. You can attach a permissions policy to allow members in the SysAdmins group to perform all operations on ECS resources such as instances, images, snapshots, and security groups.
        
    -   Developers: This user group needs only permissions to use ECS instances. You can attach a permissions policy to allow members in the Developers group to call the [DescribeInstances](/help/en/ecs/api-describeinstances#doc-api-Ecs-DescribeInstances), [StartInstances](/help/en/ecs/api-startinstances), [StopInstances](/help/en/ecs/api-stopinstances), [RunInstances](/help/en/ecs/api-runinstances#doc-api-Ecs-RunInstances), and [DeleteInstance](/help/en/ecs/api-deleteinstance#doc-api-Ecs-DeleteInstance) operations.
        

### Use instance RAM roles instead of AccessKey pairs to call API operations

Typically, applications that are deployed on ECS instances access the APIs of other Alibaba Cloud services by using the AccessKey pair of an Alibaba Cloud account or RAM user. Before the AccessKey pair can be used on an instance to call API operations, the AccessKey pair must be configured in the instance. For example, you can write the AccessKey pair to a configuration file of the instance. However, this method carries security risks such as information leaks and difficult maintenance. To address these risks, Alibaba Cloud provides instance RAM roles. By using instance RAM role, you can ensure the security of your AccessKey pairs and make use of RAM for fine-grained control and management of permissions.

You can attach an instance RAM role to an ECS instance and use a Security Token Service (STS) temporary credential to access the APIs of other Alibaba Cloud services. After you attach the role to the instance, we recommend that you access instance metadata in security hardening mode. The STS temporary credential is updated periodically. For more information, see [Overview](/help/en/doc-detail/54235.html#concept-kbp-r1t-xdb).

### Prevent AccessKey pair leaks

AccessKey pairs are credentials for Alibaba Cloud accounts to access APIs and must be kept secure. Do not expose your AccessKey pairs to external channels such as GitHub to prevent security threats caused by malicious uses. If the AccessKey pair of your Alibaba Cloud account is disclosed, your resources are exposed to risks.

Security suggestions on how to use AccessKey pairs:

-   Do not embed AccessKey pairs in code.
    
-   Change AccessKey pairs on a regular basis.
    
-   Revoke unnecessary AccessKey pairs on a regular basis.
    
-   Use RAM users based on the principle of least privilege.
    
-   Enable log audit and deliver the logs to Object Storage Service (OSS) and Log Service for storage and audits.
    
-   Set `acs:SourceIp` to control access from specific public IP addresses to Alibaba Cloud APIs.
    
-   Set `acs:SecureTransport` to true, which indicates that the features and resources are accessed over HTTPS.
    

### Security suggestions for managing accounts and passwords

**Category**

**Policy description**

Alibaba Cloud accounts

-   MFA must be enabled for administrative accounts.
    
-   Configure permissions at different levels for accounts and abide by the principle of least privilege to grant permissions.
    
-   Disable root access to APIs or common request methods.
    

Keys and credentials

-   Do not use expired certificates or credentials.
    
-   Delete the access keys for root accounts.
    
-   Remove the keys and credentials on a regular basis that have not been used for more than 30 days.
    
-   Monitor the latest usage of keys and credentials.
    
-   Automatically scan your Git repository and historical records for potential key leaks on a regular basis.
    

Password

-   Change passwords on a regular basis and make sure that passwords meet strength requirements.
    
-   Enforce password complexity policies.
    
-   Set complex account passwords that differ from those on other platforms to prevent security threats caused by password leaks to resources on multiple platforms.
    
-   Host AccessKey pairs and other account password information in Key Management Service (KMS) securely. Do not store AccessKey pairs or password information in plaintext on disks.
    
-   Do not use the same password or key pair for different accounts on a host.
    

Confidential data securely hosted in KMS

Storing confidential data in plaintext on disks poses leakage risks. We recommend that you activate KMS in advance. KMS allows you to enable data encryption in cloud services without the need to develop and maintain cryptographic infrastructure yourself. For example, you can enable disk encryption and trusted boot on ECS instances.

## Manage information assets in bulk

Automatically manage and audit cloud resources in bulk to prevent individual assets being left unprotected due to incorrect configurations. We recommend that you use uniform deployment and naming conventions for instances and security groups and periodically check for, be warned of, and delete security groups or instances that do not comply with the naming conventions. Use tags to manage resources in bulk, use Cloud Assistant to automate O&M on resource channels, and use Cloud Config to conduct compliance audits on resources.

### Use tags to manage resources in bulk

-   Use tags to identify, categorize, and find cloud resources in bulk. In the event of a security incident, you can use tags to quickly identify the scope and impact severity of the incident.
    
-   You can configure security policies with specific tags for resources, such as security groups, at a time.
    

For more information, see [Tags](/help/en/ecs/user-guide/label-overview#concept-jzp-qtd-zdb).

### Use Cloud Assistant to automate O&M on resource channels

Traditional O&M channels depend on SSH to obtain keys and open relevant network ports. Cloud resources are exposed to risks in case of improper management of keys and exposure of network ports. Cloud Assistant is a native automated O&M tool developed for ECS. Cloud Assistant allows you to batch maintain ECS instances and batch execute scripts on and send files to ECS instances in a password-free, logon-free manner without the use of jump servers. Typically, you can use Cloud Assistant to install and uninstall software, start and stop services, distribute configuration files, and run common commands (or scripts), to help manage cloud resources in a secure and efficient manner. You can use Cloud Assistant to batch manage, run commands on, and send files to multiple ECS instances at a time. Cloud Assistant provides the session management feature that allows you to perform interactive O&M on ECS instances. You can perform all of the preceding operations without using passwords, logons, jump servers, or the public IP addresses of ECS instances. Cloud Assistant uses the following security mechanisms to ensure the security of O&M channels:

-   Access control: Cloud Assistant uses RAM policies to control user access to ECS instances based on multiple dimensions, such as instances, resource groups, tags, or source IP addresses. Only users that have the required permissions can use Cloud Assistant to manage ECS instances.
    
-   End-to-end reliability: All resources involved in the use of Cloud Assistant interact over HTTPS, and data is encrypted in transit. ECS instances use an internal security mechanism to control inbound access without the need to open ports to users, and minimize intrusion risks. ECS instances communicate outbound over the internal network and become reachable without the need to expose their public IP addresses.
    
-   Secure content: Commands transmitted by Cloud Assistant are encrypted and verified based on signatures to ensure that the commands are secure and not tampered with during transmission.
    
-   Log audit: You can call API operations to audit commands and files that are transmitted by Cloud Assistant. You can query the execution times and results of command tasks or file sending tasks, command or file content, and usernames that are used to run commands or send files. You can also deliver the logs about tasks executed by Cloud Assistant to OSS or Simple Log Service for archiving or analysis purposes.
    

For more information, see [Overview](/help/en/ecs/user-guide/overview-10#concept-qg3-5dx-ydb).

### Use Cloud Config to conduct compliance audits on resources

Cloud Config is a service that allows you to evaluate cloud resources. Cloud Config aggregates resources in different regions to accelerate the query of resources. Cloud Config takes snapshots to record configuration changes of each monitored resource and displays the configuration changes over time in a configuration timeline. Resource configuration changes can trigger compliance evaluation. Cloud Config generates alerts for non-compliant configurations. Cloud Config allows you to monitor the compliance of large amounts of cloud resources against internal and external compliance requirements. For more information, see [What is Cloud Config?](/help/en/cloud-config/latest/what-is-cloud-config#concept-2426279)

## Enable security compliance when you create instances

### Host business that requires high security on security-enhanced instances

If your business requires high security and enhanced trust, you can run the business on security-enhanced instances that can ensure trusted boot and the security of private data.

-   This instance family supports encrypted memory and confidential computing based on Intel®Software Guard Extensions (SGX) to protect the confidentiality and integrity of essential code and data from malware attacks.
    
-   This instance family implements trusted boot based on Trusted Cryptography Module (TCM) or Trusted Platform Module (TPM) chips. During a trusted boot, all modules in the boot chain from the underlying server to the ECS instance are measured and verified.
    

Example: c6t instances. For more information about security-enhanced instances, see [Overview](/help/en/ecs/user-guide/overview-of-security-capability#concept-2057524).

![instance-type](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0630747261/p280229.png)

### Use secure images

-   Use public images and enable security hardening for the images.
    
    -   Use public images provided by Alibaba Cloud.
        
    -   Enable security hardening that is free of charge for public images to obtain various security features, such as webshell detection, security configuration check, and alerting for unusual logons to servers.
        
    
    ![image-security-enhanced](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0630747261/p280237.png)
    
-   Use encrypted custom images.
    
    Use the AES-256 algorithm to encrypt custom images to prevent data leaks in case of image disclosure. You can create encrypted system and encrypted data disks and then create encrypted custom images based on these disks. You can also use the Copy and Encrypt feature when you copy an unencrypted custom image to encrypt the image copy. If you want to share encrypted custom images, we recommend that you create separate BYOK keys (custom keys imported by using Bring Your Own Key feature) for the images to prevent key leaks. For more information, see [Copy a custom image](/help/en/ecs/user-guide/copy-an-image#concept-a3m-5dm-xdb).
    

### Encrypt data on disks by using KMS

You can encrypt disks to provide maximum protection for data stored on the disks without additional modifications to business or applications. Snapshots that are created from encrypted disks and disks that are created from these snapshots are encrypted. In scenarios that require data security and regulatory compliance, you can use the disk encryption feature to encrypt your data stored in Alibaba Cloud ECS. This way, you can protect the privacy, autonomy, and security of your data without the need to establish or maintain key management infrastructure. Both system disks and data disks can be encrypted. For more information, see [Encrypt cloud disks](/help/en/ecs/user-guide/encryption-overview#concept-2383230).![disk-encryption](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0630747261/p280273.png)

### Use snapshots for disaster recovery purposes

-   Use snapshots to back up data
    
    Data backup is the foundation of disaster recovery and helps reduce the risk of data loss caused by system failures, accidental operations, and security issues. ECS provides the snapshot feature to meet the data backup requirements of most users. You can select a method of creating snapshots based on your needs. For more information, see [Create a snapshot](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb).
    
    We recommend that you create automatic snapshots on a daily basis and retain the snapshots for at least seven days. This significantly improves disaster tolerance and minimizes potential data loss.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0888207071/p749447.png)
    
-   Use encrypted snapshots
    
    ECS uses the industry-standard AES-256 algorithm and keys to encrypt snapshots and prevent data leaks in case of snapshot disclosure. You can create encrypted disks and then create encrypted snapshots from the disks.
    

### Access instance metadata in security hardening mode

ECS instance metadata includes the information of ECS instances in Alibaba Cloud. You can view the metadata of running instances and configure or manage the instances based on their metadata. For more information, see [Overview of ECS instance metadata](/help/en/doc-detail/49122.html#concept-j5w-pj4-xdb).

We recommend that you access instance metadata in security hardening mode. In security hardening mode, a session can be established between an ECS instance and the instance metadata server. When you attempt to access the metadata of the instance, the instance metadata server authenticates your identity based on a token. When the token expires, the instance metadata server closes the session and deletes the token. The following limits apply to tokens:

-   Each token can be used only for a single ECS instance. If you attempt to use the token of one instance to access a different instance, your access is denied.
    
-   Each token must have a validity period that ranges from 1 second to 21,600 seconds (6 hours). Tokens can be reused until they expire to maintain an optimal balance between security and user experience.
    
-   Proxy access is not supported. If a request for creating a token contains the X-Forwarded-For header, the instance metadata server refuses to issue the token.
    
-   An unlimited number of tokens can be issued for each instance.
    

## Properly separate permissions on network resources

Cloud computing leverages Virtual Private Cloud (VPC) to abstract physical networks into isolated secure virtual networks and pool network resources to provide isolation at the data link layer. VPCs are completely isolated from each other and can be connected only by using elastic IP addresses or NAT IP addresses. You can configure IP address ranges or CIDR blocks, route tables, gateways within each VPC. You can connect on-premises data centers to VPCs or connect networks around the world to build a customized network environment so that you can smoothly migrate applications to the cloud or scale the data centers. To connect on-premises data centers to VPCs, you can use VPN Gateway, Express Connect, or Smart Access Gateway (SAG). To connect networks worldwide, you can use Cloud Enterprise Network (CEN).

Networks are the basis of cloud services. Networks are vulnerable to various severe cyberattacks and difficult to protect. Cloud computing platforms provide a mature cybersecurity architecture to defend against threats from the Internet. In Alibaba Cloud, you can use security groups, network access control lists (ACLs), routing policies, or Express Connect circuits to control access to VPCs. In addition, you must configure security protections such as Cloud Firewall, WAF, and Anti-DDoS to protect against external cyberthreats.

### Follow the security suggestions for isolating network resources

Consider the following security suggestions for isolating network resources:

-   Create a network administrator account to manage security groups, network ACLs, and traffic logs in a centralized manner.
    
-   Use network ACLs to restrict access to private data.
    
-   Isolate network resources and preconfigure large subnets to prevent overlapping of subnets.
    
-   Configure security groups based on access points instead of resources.
    

### Build a secure network environment

-   Properly configure security groups to isolate networks and reduce attack surface
    
    Security groups are an important component of network security isolation and are used to control network access to or from ECS instances. The rules of a security group control inbound traffic to and outbound traffic from the instances that are associated with the security group. You can configure security group rules to filter traffic based on port numbers and IP addresses so that you can reduce the attack surface and protect your instances.
    
    For example, port 22 is used as the remote connection port on Linux instances by default. Security risks arise if this port is open to external access. You can configure security group rules to allow only specific local IP addresses access to the instances over port 22. If you have higher security requirements, you can use third-party virtual private network (VPN) products to encrypt logon data. Consider the security suggestions described in the following table.
    
    **Suggestion**
    
    **Description**
    
    **References**
    
    Principle of least privilege
    
    Security groups are expected to work like whitelists. Therefore, open and expose as few ports as you need and allocate as few public IP addresses as you need. To query task logs or perform troubleshooting on an instance, log on to the instance by using a VPN or bastion host. Incorrect configurations may leave service ports or IP addresses exposed to the Internet and result in cybersecurity threats.
    
    -   You can create security groups to prevent unauthorized access. You need to open only the ports required by business in security groups that govern Internet traffic and those that govern internal network traffic.
        
    -   For high-risk service ports on ECS instances, you must allow access only from your computer or configure security group rules to allow access only from specific IP addresses.
        
    -   For the management backend of HTTP services, you must configure security group rules to allow access only from specific IP addresses. Enable WAF features for the domain name of the HTTP service.
        
    
    [Security groups for different use cases](/help/en/ecs/user-guide/security-groups-for-different-use-cases#concept-ngr-vht-xdb)
    
    Do not set 0.0.0.0/0 as an authorization object in your security group rules.
    
    Allowing all inbound access is a common mistake. `0.0.0.0/0` indicates all IP addresses. If a security group rule includes 0.0.0.0/0 as an authorization object to allow inbound access, the rule opens all ports to external access. This poses high security risks. To improve security posture, we recommend that you deny external access over all ports and then configure security group rules to open ports based on your needs. For example, if you need to expose web services, you can open common TCP ports such as ports 80, 8080, and 443 and keep other ports closed.
    
    [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb)
    
    Disable inbound security group rules that are no longer needed.
    
    If an inbound security group rule includes `0.0.0.0/0`, review the ports and services that your applications must expose. If you do not want specific ports to directly provide external services, you can add a Deny (Forbid) rule for the ports. For example, if you deploy MySQL database services on your instance, port 3306 cannot be exposed to the Internet. In this case, you can add a Deny rule and set the priority of the rule to 100, which indicates the lowest priority.
    
    [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb)
    
    Reference security groups as authorization objects in security group rules.
    
    Rules must be added to security groups to allow access based on the principle of lease privilege. Different application layers must use different security groups with appropriate inbound and outbound rules.
    
    -   For example, you can create different security groups for distributed applications. These security groups may not be accessible to each other. In this case, you can add security group rules that reference security groups (instead of IP addresses or CIDR blocks) as authorization objects to allow mutual access between the security groups so that resources in these security groups can access each other.
        
    -   For example, assume that you create the sg-web security group for the web layer and the sg-database security group for the database layer of your applications. In sg-database, you can add a rule that references the sg-web security group to allow all resources in the sg-web security group access over port 3306.
        
    
    [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb)
    
    For security groups of the classic network type, do not set CIDR blocks or IP addresses as authorization objects in rules that govern internal network traffic.
    
    By default, no inbound rules for internal network traffic are enabled for ECS instances that reside in the classic network. Exercise caution when you configure security group rules that govern internal network traffic.
    
    [Security group rule](/help/en/ecs/user-guide/security-group-rules#concept-2092336)
    
    Configure appropriate names and tags for security groups.
    
    Appropriate names and descriptions help you identify security groups. You can modify the names and descriptions of security groups.
    
    You can add tags to security groups by using the ECS console or by calling API operations for easy search and management.
    
    -   [Modify a security group](/help/en/ecs/user-guide/modify-the-name-description-and-tags-of-a-security-group#task-hcr-ptm-1gb)
        
    -   [Create or add a tag](/help/en/doc-detail/25478.html#task-728113)
        
    
    Add ECS instances that require mutual access to the same security group.
    
    Each ECS instance can belong to up to five security groups. ECS instances within the same security group can communicate with each other over the internal network. If you have multiple security groups but do not want to configure multiple security group rules, you can create another security group and add the instances that require internal network communication to the new security group.
    
    We recommend that you do not add all of your ECS instances to the same security group. For a large or medium-sized application that is distributed across multiple ECS instances, each of these instances plays a different role. You cannot add all the instances to the same security group and must properly configure inbound and outbound security group rules for each instance.
    
    [Manage ECS instances in security groups](/help/en/ecs/user-guide/manage-ecs-instances-in-security-groups#concept-jhw-31n-xdb)
    
    Isolate instances within a security group.
    
    Security groups act as virtual firewalls that provide Stateful Packet Inspection (SPI), also known as dynamic packet filtering. A security group contains instances that reside in the same region. These instances have the same security requirements and trust each other. Alibaba Cloud fine-tunes the internal access control policies (or internal network communication policies) of security groups to isolate instances within a security group.
    
    [Network isolation within a basic security group](/help/en/doc-detail/96468.html#concept-nkc-vfy-sfb)
    
    Use security group quintuple rules.
    
    Security groups are used to control network access to or from one or more ECS instances. Security groups are an important component of security isolation and are used to logically isolate security domains in the cloud. Security group quintuple rules allow you to implement precise access control based on the following five elements: source IP address, source port, destination IP address, destination port, and transport layer protocol.
    
    [Security group quintuple rules](/help/en/ecs/use-cases/security-group-quintuple-rules#concept-krx-4c5-vfb)
    
    Add ECS instances that provide Internet-facing services and those that provide internal network-facing services to different security groups.
    
    Applications hosted on an ECS instance may be accessible to the Internet in scenarios in which the instance provides Internet-facing services. These scenarios include those in which the instance proactively exposes specific ports (such as ports 80 and 443) for external access and in which the instance passively provides port forwarding rules (such as NAT port forwarding rules and forwarding rules that are based on the system-assigned public IP address or elastic IP address of the instance).
    
    -   In the preceding scenarios, use the strictest security group rules for the instance. Add a rule to deny access over all protocols and all ports and then add rules to allow access only to ports required by external services, such as ports 80 and 443. If a security group contains only Internet-facing ECS instances, the rules in the security group are easy to adjust.
        
    -   Internet-facing ECS instances within the same security group must have clear and simple responsibilities to ensure that the instances provide no services other than their primary services. For example, for MySQL and Redis applications, we recommend that you deploy them on ECS instances that do not provide Internet access, and then configure security group rules to allow access from specific security groups to the instances.
        
    
    [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb)
    
-   Configure security domains to isolate services of different security levels within your organization
    
    You can build private networks by using VPCs to separately host servers of different security levels in your organization and ensure that the servers do not interfere with each other over an interconnected network. We recommend that you create a VPC, assign a private IP address range in CIDR notation to the VPC, and configure route tables and gateways for the VPC. Then, you can store important data in this VPC, which is logically isolated from the Internet, and use an elastic IP address (EIP) or a jump server to manage data for daily O&M purposes. For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575).
    
-   Use jump servers or bastion hosts to protect against internal and external intrusions
    
    Jump servers have a large set of permissions. If you use a jump server, you must use tools to thoroughly record and audit operations on it. We recommend that you use bastion hosts instead to prevent your networks and data from being hacked or disrupted by attackers. Use various technical methods to monitor and record the operations that your O&M personnel perform on servers, network devices, security devices, and databases in your networks, so that your troubleshooting or O&M personnel can be alerted in a centralized manner, handle the alerts in a timely manner, audit the operations, and determine who is responsible for accidental operations or faults.
    
    We recommend that you assign the jump server to a dedicated vSwitch in a VPC and then associate the corresponding EIP or NAT port forwarding table with the jump server. Create a dedicated security group named SG\_BRIDGE and open required ports. For example, open TCP port 22 for Linux operating systems and RDP port 3389 for Windows operating systems. To restrict inbound access, you can add security group rules to allow only specific public IP addresses of your organization to access the security group. This way, the probability that resources are scanned or accessed is reduced. Add the ECS instance that functions as a jump server to the security group. If you want the jump server to access ECS instances within another security group, you can configure a rule that allows the jump server access to that security group. For example, in a security group named SG\_CURRENT, you can add a rule to allow access from the SG\_BRIDGE security group over specific protocols and ports. When you use the jump server for SSH communication, we recommend that you use key pairs instead of passwords to log on to ECS instances. For information about key pairs, see [SSH key pair overview](/help/en/ecs/user-guide/overview-ssh#concept-j33-vqw-ydb).
    
-   Properly assign public IP addresses to reduce Internet-exposed attack surface
    
    Proper allocation of public IP addresses facilitates Internet access management and reduces attack surface regardless of whether ECS instances reside in the classic network or VPCs. For ECS instances that reside in a VPC, we recommend that you connect the instances that require Internet access to several specified vSwitches. This makes the instances easy to audit and distinguish and helps prevent accidental exposure of ECS instances to the Internet.
    
    -   Most distributed applications have different layers and groups. For ECS instances that do not provide Internet access, we recommend that you do not assign public IP addresses. For multiple instances that provide Internet access, we recommend that you configure Server Load Balancer (SLB) instances to distribute Internet traffic to improve system availability. For more information, see [SLB overview](/help/en/slb/product-overview/slb-overview#concept-whs-lp4-tdb).
        
    -   If your ECS instances require Internet access but do not have public IP addresses, we recommend that you use NAT gateways to provide Internet proxy services for the instances. You need only to configure SNAT entries to provide Internet access for specific CIDR blocks or subnets. This way, you can prevent services from being exposed to the Internet after public IP addresses are assigned, when only outbound Internet access is required. For more information, see [What is VPN Gateway?](/help/en/vpn/product-overview/what-is-vpn-gateway#concept-r5s-gzv-wdb)
        
    

## Use security services to build a security defense system

### Use Anti-DDoS Origin Basic (free-of-charge), Anti-DDoS Pro, and Anti-DDoS Premium to mitigate DDoS attacks

In a DDoS attack, multiple compromised computer systems flood one or more targets with fraudulent traffic to deny service to legitimate users of the targets. Alibaba Cloud Security Center can defend against Layer 3 to Layer 7 DDoS attacks, including SYN flood, UDP flood, ACK flood, ICMP flood, DNS flood, and HTTP flood attacks. Anti-DDoS Origin Basic provides a DDoS mitigation capacity of up to 5 Gbit/s free of charge.

By default, Anti-DDoS Origin Basic is enabled on ECS instances. Anti-DDoS Origin Basic allows you to maintain normal access speeds in case of DDoS attacks without the need to purchase expensive traffic scrubbing devices. Anti-DDoS Origin Basic ensures the expected bandwidth, availability, and stability of your business. In this case, your business is not affected by other users. After an ECS instance is created, you can set scrubbing thresholds for it. For more information, see [Configure a traffic scrubbing threshold](/help/en/anti-ddos/configure-a-traffic-scrubbing-threshold#task584).

### Use Security Center Basic for free to protect against exploitation of system vulnerabilities

Security Center is a centralized security management system that identifies, analyzes, and warns of security threats in real time. Security Center provides multiple features to ensure the security of cloud resources and servers in data centers. The features include anti-ransomware, antivirus, web tamper proofing, and compliance check. You can use Security Center to automate security operations, responses, and threat tracing, and meet regulatory compliance requirements.

Security Center Basic is available to you by default. Security Center Basic scans only for the following threats: unusual logons to servers, vulnerabilities, and configuration risks in cloud services. To use advanced features such as threat detection, vulnerability fixing, and virus detection and removal, go to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas) to purchase a paid Security Center edition. For more information, see [Introduction to Security Center Basic](/help/en/security-center/product-overview/introduction-to-security-center-basic#concept-2072002).

### Use WAF to protect against exploitation of system vulnerabilities

Web Application Firewall (WAF) depends on the big data capabilities of Alibaba Cloud Security Center to protect web applications against common attacks reported by the Open Web Application Security Project (OWASP) and HTTP flood attacks. The attacks include SQL injections, cross-site scripting (XSS) attacks, webshells, trojans, and unauthorized access. WAF blocks malicious visits to prevent data leaks and ensure the security and availability of your websites. For more information, see [Getting started](/help/en/waf/web-application-firewall-3-0/product-overview/what-is-waf#concept-tzp-g2m-42b).

WAF has the following benefits:

-   WAF can handle various web application attacks to ensure the web security and availability of a website without the need to install software or hardware or modify website configurations and code. On top of powerful web protection capabilities, WAF can provide dedicated protection for specific websites and is a great fit for web application protection in fields such as finance, e-commerce, Online To Offline (O2O), Internet Plus, gaming, public services, and insurance.
    
-   Without WAF, you may be vulnerable to web intrusions in face of attacks such as data leak attacks, HTTP flood attacks, and trojans.
    

For more information about how to use WAF, see [Getting started](/help/en/waf/web-application-firewall-2-0/getting-started/getting-started-1#task-1961225).

## Protect applications in instance guest operating systems

### Configure security settings to ensure secure logons to ECS instances

By default, a non-root account can be used to log on to an ECS instance. Before you can use a non-root account to log on to an ECS instance, you must run the su or sudo command on the instance to grant administrative permissions to the account. By default, you cannot use the root account with a key file in the PEM format to log on to the instance. We recommend that you use a secure access control protocol to access ECS instances and select different logon credentials based on image types. For Linux instances, we recommend that you configure the instances to support only RSA-encrypted key pairs as logon credentials and not to support passwords as logon credentials. For Windows instances, we recommend that you use complex passwords that are more than eight characters in length and contain special characters as logon credentials.

Linux instance:

-   By default, non-root accounts are used to log on to Linux instances.
    
    If you log on to a Linux instance with the root account, you have the highest permissions on the instance. This facilitates O&M operations. However, serious data security risks may arise if the instance is attacked. We recommend that you use the Anolis OS 8.4 or Ubuntu 20.04 public image, which supports logons that use the regular ecs-user account.![非root登录](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0447923661/p471353.png)
    
-   Use temporary SSH key pairs to log on to Linux instances.
    
    You can use the config\_ecs\_instance\_connect plug-in to send an SSH public key to a specific instance for a specific user to use. The SSH public key is stored on the instance for 60 seconds. During these 60 seconds, you can use the SSH public key to connect to the instance as the specified user without a password. For more information, see [Connect to a Linux instance by using the config\_ecs\_instance\_connect plug-in with a public key instead of a password](/help/en/doc-detail/425281.html#task-2206825).
    
    An SSH key pair consists of a public key and a private key that are generated based on an encryption algorithm. By default, the keys are encrypted by using the RSA-2048 algorithm. Key pair-based authentication has the following advantages over username- and password-based authentication:
    
    -   SSH key pairs provide higher security and reliability for logons.
        
    -   The security strength of the key pair is much higher than that of the regular user password, which can prevent the threat of brute-force cracking.
        
    -   Private keys cannot be deduced even if the public keys are maliciously acquired.
        
    -   SSH key pairs are easy to use.
        
        -   If you configure a public key on a Linux instance, you can use the corresponding private key to run SSH commands or other tools to log on to the instance without a password.
            
        -   You can log on to a large number of Linux instances by using a key pair at the same time. If you want to batch manage multiple Linux instances, we recommend that you use an SSH key pair to log on to the instances. You can use an SSH key pair that is bound to a Linux instance to log on to the instance. You can specify an SSH key pair when you create an instance, or bind an SSH key pair to an instance after the instance is created. Then, you can use the private key to connect to the instance.
            
    
    We recommend that you modify the sshd\_config file to disable password-based logon and support only RSA key pair-based logon. You can modify the parameters related to password logon in the SSH configuration file.
    

Windows instance:

-   Set complex passwords and change passwords on a regular basis. Weak passwords are one of the leading vulnerabilities that lead to data breaches. To prevent security risks that arise from weak passwords, we recommend that you use complex passwords for servers. Server passwords must be at least eight characters in length and contain multiple character types such as uppercase letters, lowercase letters, digits, and special characters. We also recommend that you change the passwords on a regular basis.
    
-   Set strong passwords for ECS instances. The passwords must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters, including ( ) \` ~ ! @ # $ % ^ & \* \_ - + = | { } \[ \] : ; ' < > , . ? /. For Windows instances, passwords cannot start with a forward slash (/).
    

### Encrypt data in transit

Configure security groups or firewalls to allow communication only between ports used by network services that encrypt data. You can use encryption protocols such as Transport Layer Security (TLS) 1.2 and later to encrypt sensitive data in transit between clients and ECS instances.

### Monitor and audit log exceptions

The M-Trends 2018 report published by FireEye stated that most enterprises, especially enterprises in Asia Pacific, are vulnerable to cybersecurity attacks. The global median dwell time was 101 days. In Asia Pacific, the median dwell time was 498 days. The dwell time indicates a period from when an attack occurs to when the attack is detected. To shorten the dwell time, enterprises need reliable log data and audit services.

We recommend that you use CloudMonitor, ActionTrail, Log Audit Service, VPC flow log, and application logs to build a monitoring and alerting system for abnormal resource and permission access. This system is essential for timely detection of problems, stop loss, and optimization of the security defense system.

-   Use CloudMonitor to configure resource usage thresholds for triggering alerts and prevent DDoS attacks. For more information, see [What is CloudMonitor?](/help/en/cms/cloudmonitor-1-0/product-overview/what-is-cloudmonitor#concept-2452587)
    
-   Use ActionTrail to detect unauthorized access and identify incorrect security configurations and high-risk or accidental operations. You can also use ActionTrail to perform quality monitoring and compliance auditing, and detect and respond to threats. Use MFA to control access to ActionTrail. For more information, see [What is ActionTrail?](/help/en/actiontrail/product-overview/what-is-actiontrail#concept-28804-zh)
    
-   Enable the [flow log](/help/en/vpc/vpc-flow-logs#concept-1357832) feature provided by VPC and create flow logs to record information about inbound and outbound traffic of elastic network interfaces (ENIs) that reside in a VPC. This helps analyze the flow logs.
    
-   Use Log Audit Service to collect, scrub, analyze, and virtualize data and generate alerts. You can use Log Audit Service in scenarios related to Simple Log Service, such as DevOps, operations, security, and audit scenarios. For more information, see [Overview of Log Audit Service](/help/en/sls/overview-of-log-audit-service#concept-2485064).
    
-   Trace application event logs and API call logs.
    
-   Synchronize all logs to Simple Log Service or OSS on a regular basis for storage and configure access permissions on the logs.
    
-   Add information such as instance IDs, regions, zones, and environments (test or production environments) to stored logs to facilitate troubleshooting.
