This topic describes the process from purchase to use of Secure Access Service Edge (SASE) to help you get started with SASE.

## **Intended users**

First-time users of SASE

## SASE **introduction**

#### SASE **description**

SASE delivers security capabilities to the edge based on the nation-wide edge nodes of Alibaba Cloud, leased lines, and the zero trust security model. For enterprises that run multiple branches or stores and enterprises whose employees need to work remotely or from different locations, SASE provides zero trust-based remote access, audit of behaviors in internal networks, data loss prevention (DLP), network access control, and application acceleration. For more information, see [What is SASE?](/help/en/sase/product-overview/what-is-sase)

#### Capabilities of different SASE editions

SASE supports only the subscription billing method. The following table describes the capabilities of each SASE edition. You can select a SASE edition based on your business requirements. For more information about the billing methods and billable items of SASE, see [Billing overview of Secure Access Service Edge](/help/en/sase/product-overview/billing-overview).

**Edition**

**Description**

Private Access

(**Basic**)

SASE Private Access (**Basic**) provides a zero trust VPN for employees to remotely access enterprise applications on the cloud or on-premises. This edition is suitable for enterprises with more than 100 employees. You must purchase office bandwidth as needed.

Private Access

(**Advanced**)

SASE Private Access (**Advanced**) provides a zero trust VPN for employees to remotely access enterprise applications on the cloud or on-premises. It also supports office network access control and global office access.

Internet Access

(**DLP**)

Internet Access (**DLP**) is built on the Cloud Data Loss Prevention (DLP) service architecture. It helps enterprises instantly detect, monitor, and protect office data.

Endpoint Protection

(**Antivirus**)

Endpoint Protection (**Antivirus**) integrates with the Alibaba Cloud malicious file detection platform. It provides real-time defense against file viruses and real-time detection of endpoint security alert events.

## **Configuration of each** SASE **feature**

### **Prerequisites**

The identity providers (IdPs) and user groups of an enterprise are configured before the enterprise uses the features of SASE. For more information, see [Connect an LDAP IdP to SASE](/help/en/sase/user-guide/connect-an-ldap-identity-source) and [Configure an IdP combination](/help/en/sase/user-guide/manage-user-groups).

SASE supports third-party and self-managed identity authentication systems. Users can use the assigned usernames and passwords to log on to the SASE client and authenticate identities. SASE supports the following third-party IdPs: Lightweight Directory Access Protocol (LDAP), DingTalk, WeCom, Lark, and Identity as a Service (IDaaS). You can also use custom SASE IdPs to manage the organizational structures of enterprises.

### **Private access configuration**

The private access feature supports SaaS-based zero trust access by adopting the software-defined perimeter (SDP) approach. SaaS is short for Software as a Service. The feature allows you to manage access permissions of employees without the need to expose public IP addresses or reconstruct your existing network architecture.

#### Step 1: Create an office application

Office applications of an enterprise refer to IT resources such as internal-facing applications, servers, or databases that are used by users at work. Users do not need to configure public IP addresses for office applications. If a user wants to access applications or resources in a LAN from a terminal, the user needs to only install the SASE client on the terminal and pass the required identity and security verification. For more information, see [Configure office applications](/help/en/sase/user-guide/application-management).

#### Step 2: Enable network connections

Enable network connections based on your business deployment.

**Service deployment environment**

**Solution**

**Environment requirements**

Enterprise services and resources are deployed on Alibaba Cloud

Use the network configuration feature to establish network connections between specified Alibaba Cloud VPC resources and SASE end users.

On the **Network Configuration** > **Alibaba Cloud Services** page, enable the network connection for the VPC where the target service server is located.

Requirements for office computers:

-   Windows (64-bit, 32-bit, .msi 64-bit, .msi 32-bit): Windows 7 or later
    
-   macOS: macOS 10.10 or later
    
-   Linux: Ubuntu 18.04 or later, UOS
    

Enterprise services and resources are deployed in a non-Alibaba Cloud environment, such as AWS or Tencent Cloud, and an Alibaba Cloud Virtual Border Router (VBR), Cloud Connect Network (CCN), or VPN Gateway is already used for network connectivity.

Use Alibaba Cloud network channels, such as **Leased Lines, SAG, or IPsec-VPN**, to allow SASE clients to access service resources in non-Alibaba Cloud environments.

On the **Network Configuration** > **Non-Alibaba Cloud Services** > **Cloud Network Instance** tab, configure the origin fetch VPC and enable the network connection.

Requirements for office computers:

-   Windows (64-bit, 32-bit, .msi 64-bit, .msi 32-bit): Windows 7 or later
    
-   macOS: macOS 10.10 or later
    
-   Linux: Ubuntu 18.04 or later, UOS
    

Enterprise services and resources are deployed in a non-Alibaba Cloud environment

SASE provides a connector feature that you can use to connect to your non-Alibaba Cloud network. This lets you use the SASE app to access services in the non-Alibaba Cloud environment.

This method does not depend on other network products for network access.

On the **Network Configuration** > **Non-Alibaba Cloud Services** > **Connector List** tab, manually add an SASE connector. Then, run commands to deploy the connector and ensure that the connector instance is enabled.

Requirements for office computers:

-   Windows (64-bit, 32-bit, .msi 64-bit, .msi 32-bit): Windows 7 or later
    
-   macOS: macOS 10.10 or later
    
-   Linux: Ubuntu 18.04 or later, UOS
    

Server requirements for deploying the connector:

-   Virtual machine or server configuration:
    
    -   CPU: 4 cores
        
    -   Memory: 8 GB
        
    -   Disk: 40 GB
        
    -   Operating system: CentOS 7 or later
        
-   Network configuration: The server must be able to access the Internet. If a firewall is configured, you must allow outbound traffic on ports 443 and 8000 for the server or virtual machine on which the connector is deployed.
    
-   Specification limit: 200 MB of traffic forwarding.
    
-   Port requirements: Ensure that ports 9000 to 9010 are not occupied.
    

#### Step 3: Create a zero trust policy

Zero trust policies help manage access to applications and resources for users and enterprise partners. The process of creating a zero trust policy is to distinguish the resource permissions of enterprise user groups from office applications. The system has a built-in policy that prohibits all access. You must configure an allow policy to allocate different resources to different user groups. For more information, see [Configure zero trust policies](/help/en/sase/user-guide/configure-a-zero-trust-policy).

#### Step 4: Log on to the SASE client

Users use the username and password assigned by the system to log on to the SASE client and connect to an internal network. The configured policy is used to manage the private access from users. For more information, see [Install and log on to the SASE client](/help/en/sase/user-guide/install-and-log-on-to-sase-client) and [Enable or disable network protection for private access](/help/en/sase/user-guide/enable-or-disable-network-security-protection).

### Network access control

The network access control feature allows you to use the Extensible Authentication Protocol-Transport Layer Security (EAP-TLS) standard to access an office network. This way, you do not need to enter the username or the password. When you use SASE to connect to an office network, the access permissions of the SASE client users are determined based on the configured IP address whitelist.

#### Step 1: Create a wireless network instance

Create a wireless network instance in SASE and use EAP-TLS to connect to the office network.

#### Step 2: Obtain information about the SASE network access server

Before you connect to the office network, you must configure the region, IP address, UDP port, and key of the SASE RADIUS server on the network access controller of your enterprise to establish the network connection between the SASE RADIUS server and the network access controller. The RADIUS server is the network access server.

-   If you want to isolate and manage the users, you can configure network access permissions and use VLAN IDs to divide the network access permissions of users and terminals in a more fine-grained manner.
    
-   If the automatically issued certificate is not applicable to your business scenarios, you can modify the installation scope and validity period of the certificate or replace the certificate with a custom certificate of your enterprise.
    

### **DLP configuration**

DLP provides the following methods to ensure data security: sensitive file detection, peripheral management, and watermark management. You can select a method based on your business requirements. If you require extremely strict data management, we recommend that you enable all methods.

#### **Detect files transferred outbound to ensure data security**

If you want to check whether users transfer files that contain sensitive data by using multiple channels, such as instant messaging and emails, you can use sensitive file detection to specify a sensitive data dictionary, build a data template, and create a detection policy. This way, you can obtain statistics on outbound file transfers. For more information, see [Detect files transferred outbound to ensure data security](/help/en/sase/user-guide/detect-sensitive-files-to-ensure-data-security).

#### **Step 1: Configure a policy to detect files transferred outbound**

Sensitive file detection of SASE uses custom keywords as characteristics to automatically identify sensitive content in files, builds a sensitive data template based on the characteristics, data types, and sensitivity levels, and then creates a detection policy based on the handling action. This way, you can determine whether the files transferred outbound are sensitive files.

To configure a detection policy, perform the following steps:

1.  Create a sensitive data dictionary to define the characteristics of sensitive content.
    
2.  Build a data template based on the sensitive data dictionary.
    
3.  Create a detection policy and associate the policy with a data template. You must specify applicable objects, detection channels, and handling actions in the policy.
    

#### **Step 2: View the sensitive file detection results**

After the policy is configured, DLP automatically detects files that are transferred by users. Then, DLP analyzes the outbound transferring events and abnormal events that are triggered in the last 30 days, 7 days, and 24 hours based on the detection results.

-   Sensitive file detection helps you detect sensitive files that are up to 30 MB in size, and collect statistics on the top 5 sensitive file types and their proportion.
    
-   Abnormal events record the outbound transfers of files that are larger than 30 MB in size, copying of files by peripherals, and outbound transfers of files whose total size is larger than 1 GB from the same user. However, the content of the files are not checked. Take note of abnormal events and manually check whether the files contain sensitive data.
    

#### **Manage peripherals to ensure data security**

If you want to check the peripherals of users, such as USB flash drives, printers, and optical drives, to determine whether the users transfer sensitive data, you can use peripheral management to create a policy to disable specific peripherals. For more information, see [Manage peripherals to ensure data security](/help/en/sase/user-guide/manage-external-devices-to-ensure-data-security).

#### **Step 1: Configure a policy to manage peripherals**

You can specify the applicable user group. You can also configure policies to manage peripherals for Windows and macOS.

#### **Step 2: View the sensitive file detection results**

If you set **USB Flash Drive and USB Storage** to **Read/Write**, sensitive behavior detection is triggered when a user uses a USB flash drive or USB storage to transfer internal files. Then, DLP analyzes the data in the last 30 days, 7 days, or 24 hours based on the detection results.

#### **Manage watermarks to ensure data security**

If you want to configure watermarks for screens and printers to ensure data security, you can use watermark management to configure watermarks for the screens and printers of specific users. For more information, see [Manage watermarks to ensure data security](/help/en/sase/user-guide/manage-watermarks-to-ensure-data-security).

#### **Step 1: Configure a watermark management policy**

You can specify the applicable user group and configure a watermark. You can create custom screen watermarks and printer watermarks.

#### **Step 2: View the sensitive file detection results**

If a user prints data, sensitive behavior detection is triggered. DLP automatically detects files printed by the user and analyzes the data in the last 30 days, 7 days, and 24 hours based on the detection results.

## **Feedback and suggestions**

If you have questions or suggestions about SASE, you can use the following methods to provide feedback and obtain technical support:

-   Online help: You can obtain online technical support.
    
-   Submit a ticket: You can submit a ticket to contact technical support.
    
-   Feedback on documentation: If you find errors in the documentation, including link errors, content errors, and API operation errors, you can select the error content or click **Feedback** in the lower part of the documentation page and submit your feedback.
