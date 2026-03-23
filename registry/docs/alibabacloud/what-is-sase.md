Secure Access Service Edge (SASE) is an integrated workspace security management platform offered by Alibaba Cloud.

SASE is built on Alibaba Cloud's vast network of edge nodes and leased line access. Based on the zero trust model, SASE extends security capabilities to the edge. It provides ready-to-use remote zero trust access, internal network access behavior auditing, workspace data protection, and workspace network access for enterprises with multiple branches, outlets, or remote and mobile work scenarios.

When SASE accesses cloud computing services, such as Elastic Compute Service, ApsaraDB, and cloud storage, it uses a combination of the Transport Layer Security (TLS) protocol and a proprietary protocol to ensure data transmission security. In data storage and processing scenarios, it uses envelope encryption to provide comprehensive data protection.

After an enterprise starts using SASE, an administrator configures the required features and control policies in the SASE console. The SASE console then delivers these policies to employees through the SASE App. After employees install the SASE App and enable network security protection, their access behavior is managed accordingly.

## **Function Overview**

The following sections describe the core features of SASE to help you gain an overview of SASE.

#### **Private access security**

The internal network access security feature provides Software as a Service (SaaS)-based zero trust network access using software-defined perimeter (SDP) technology. It manages employee access permissions without exposing public IP addresses or changing the enterprise's existing network architecture. It provides internal network access security for the following three scenarios:

-   Workspace network access
    
    This feature supports 802.1x network access based on certificates. You do not need to manually enter a username and password or import a certificate file. Simply install the SASE App to securely access the network. The SASE App provides enhanced security and convenience for workspace network access. It also supports access for dumb terminals and whitelisted accounts with password authentication. This meets the network access needs of devices such as printers and IoT devices and simplifies network access.
    
-   Zero trust internal network access control
    
    This feature uses a combination of the TLS protocol and a proprietary protocol. Based on dynamic identity authentication, it supports least privilege access control from endpoint to endpoint (TCP) and from endpoint to application (HTTP and HTTPS). Compared with traditional VPN access, this method provides faster access, more efficient O&M, easier deployment, and higher system security.
    
-   Global workspace scenario
    
    This scenario is for global workspaces where employees outside China need to access services both outside and within the Chinese mainland.
    

#### **Internet access security**

An efficient cloud-based file analysis engine audits, retains, and sends alerts for sensitive workspace data sent from workspace terminals. The engine does not consume terminal computing resources. Outbound channels include portable storage, instant messaging tools, email, HTTP, FTP, printing, burning, and cloud drives. The engine can detect over 100 file types and includes more than 60 preset sensitive information dictionaries, simplifying workspace data protection.

-   [Ensure data security by detecting outbound files](/help/en/sase/user-guide/detect-sensitive-files-to-ensure-data-security)
    
    Based on the Cloud Data Loss Prevention (DLP) service architecture, this provides a lightweight workspace data detection solution for enterprise users. It helps enterprises monitor outbound sensitive data in real time and detect data breach threats.
    
-   [Ensure data security by managing external devices](/help/en/sase/user-guide/manage-external-devices-to-ensure-data-security)
    
    This feature manages data access permissions for external devices used by enterprise employees. This helps enterprises detect any outbound transfer of sensitive files.
    
-   [Ensure data security by managing watermarks](/help/en/sase/user-guide/manage-watermarks-to-ensure-data-security)
    
    You can enable screen and print watermarks for enterprise employees to prevent significant business loss and ensure workspace data security.
    

#### **Log analysis**

-   [Log audit](/help/en/sase/user-guide/log-audit#task-2105863)
    
    The log audit feature audits your network traffic in real time and provides a basis for you to handle suspicious traffic.
    
-   [Log analysis](/help/en/sase/user-guide/log-analysis-feature#task-98586-zh)
    
    The SLS log feature helps you collect and store web access logs and mitigation logs from SASE. Based on Alibaba Cloud Simple Log Service, it supports features such as query analysis, statistical charts, and an alerting feature. This lets you focus on analysis and avoid tedious query and organization tasks.
    

## **Editions**

Currently, SASE only supports the subscription (prepaid) billing method. Use the following table to select a suitable SASE edition. For more detailed billing information, such as billing methods and billable items, see [Billing overview of Secure Access Service Edge](/help/en/sase/product-overview/billing-overview).

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

## **Free trial**

If you are using SASE for the first time, you can apply for a trial on the [7-day trial application page](https://page.aliyun.com/form/act1768780934/index.htm). The free trial lasts for 7 days. Each Alibaba Cloud account supports up to 100 client authorizations.

## **Contact us**

If you have pre-sales questions about purchasing SASE, such as questions about product features, pricing, or edition selection, you can submit a [ticket](https://smartservice.console.alibabacloud.com/service/create-ticket) to consult our product technical experts.
