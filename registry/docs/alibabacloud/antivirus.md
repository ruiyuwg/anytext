Elastic Desktop Service (EDS) Enterprise is a Desktop as a Service (DaaS) product from Alibaba Cloud. Using the proprietary Adaptive Streaming Protocol (ASP), it provides standardized desktop environments for enterprises and addresses the challenges of centralized management, data security, and resource scalability common to traditional PCs and on-premises Virtual Desktop Infrastructure (VDI). EDS provides secure and efficient cloud computers, abstracting away the management of underlying virtual machines, networking, and storage infrastructure.

## Use cases

By centralizing computing and data storage in the cloud, EDS provides targeted solutions for different business use cases.

-   **Remote work and secure access**
    
    All computing and data read/write occur in the cloud, with no business data stored on local devices. This design fundamentally prevents data leakage. Unified access policies allow granular access control, which helps build a remote work system that is more secure and easier to manage than a traditional VPN.
    
-   **Multiple branch offices**
    
    Administrators can centrally create, distribute, and maintain standardized desktop environments and enterprise applications from the console. This enables unified operations across regions, reducing on-site support costs and management complexity.
    
-   **Temporary or flexible staffing**
    
    For short-term staffing needs, such as projects or internships, you can provision resources on demand–creating or releasing cloud computers in minutes. The pay-as-you-go model eliminates the long-term investments and resource waste associated with traditional PCs.
    
-   **High-performance graphics processing**
    
    EDS provides professional GPU instances for use cases like architectural design, film post-production, and industrial simulation. Designers can access cloud-based workstations from standard terminals to perform intensive tasks like 3D modeling and video rendering, eliminating dependence on expensive local hardware.
    

## Core capabilities

-   **Security and compliance**
    
    -   **Data stays in the cloud**: All computing and data storage remain in the cloud. Local devices are only used for display and input.
        
    -   **Granular policies**: Supports features such as visible and invisible watermarks, screenshot prevention, screen recording prevention, clipboard read/write controls, and peripheral device controls.
        
    -   **Network isolation**: Supports domain-based access rules and security group rules for granular control over network access.
        
    -   **Auditing and traceability**: Operation logs are traceable and auditable to meet enterprise compliance requirements.
        
-   **Performance and experience**
    
    -   **Proprietary ASP**: The proprietary ASP is a high-performance, high-reliability, and secure protocol. It works on both TCP and UDP and adapts to network conditions to ensure a smooth experience even in weak network environments.
        
    -   **Network bandwidth**: Each cloud computer can use 5 Mbit/s of internet bandwidth free of charge, and premium bandwidth plans are also available to enhance network connection quality.
        
    -   **High data reliability**: Data is stored on highly reliable cloud storage, with snapshot mechanisms providing data backup and recovery capabilities.
        
-   **Management and O&M**
    
    -   **Centralized management**: The EDS console and OpenAPI enable centralized management of resources such as cloud computers, images, cloud computer templates, and enterprise applications.
        
    -   **Rapid delivery**: Supports one-click deployment and rapid creation, assignment, and release of cloud computers, provisioning resources in minutes.
        
-   **Scalability and cost**
    
    -   **Flexible billing**: Supports both pay-as-you-go and subscription billing methods to accommodate business needs for both variable and predictable usage.
        
    -   **Automatic scaling**: Automatically creates or releases cloud computers based on preset policies to address business traffic fluctuations and optimize costs.
        

## **Comparison with other products**

#### **Comparison with VDI and traditional PCs**

**Deployment mode**

**Data security**

**Cost**

**O&M**

**EDS**

A fully managed cloud service that is ready to use.

Data is stored in the cloud on highly reliable storage.

No hardware infrastructure investment is required. Resources are provisioned on demand with automatic scaling.

Centralized and standardized management in the cloud for simple and efficient O&M.

**VDI**

Requires building, deploying, and maintaining an on-premises data center.

Data is stored on the server side, with security dependent on the enterprise's own IT capabilities.

High upfront investment due to large one-time hardware costs.

Can be centrally maintained, but operational complexity increases dramatically with scale.

**Traditional PC**

Independent, distributed, and locally installed.

Data is stored locally, making it prone to loss, leakage, and uncontrollable user behavior.

High hardware procurement costs and potential for idle resources.

Long resource delivery cycles. Upgrades and troubleshooting are difficult, leading to high maintenance costs.

#### **Comparison with Elastic Compute Service (ECS)**

Although both EDS and ECS provide cloud computing resources, they differ fundamentally in their product positioning, use cases, and management models.

**Item**

**EDS**

**ECS**

**Product concept**

A DaaS solution that provides a complete cloud-based desktop environment for end users.

An Infrastructure as a Service (IaaS) solution that provides a general-purpose compute server with full administrative control.

**Core purpose**

Designed specifically for desktop application use cases such as remote work, secure office access, and graphics design.

Used to host websites, run databases, perform big data analysis, train AI models, and operate other server-side applications.

**Management model**

Oriented towards end users and cloud computer administrators. Users connect via a client, while administrators use the console for centralized management of cloud computer pools, users, and policies.

Oriented towards system administrators and developers. Administrators use SSH, RDP, or APIs for deep, server-level configuration and management.

**Network access**

Optimized for remote cloud computer connections. Inbound access is strictly controlled to ensure cloud computer security.

Provides fully customizable security group rules. Administrators can open ports and services as needed to serve external traffic.

**Website hosting**

Cannot be used as a web server to host external websites.

Supported. This is one of its core use cases.

## Cloud computer specifications

**Category**

**Description**

**Instance family**

Provides a variety of instance families to meet different workload requirements, including:

-   **General Office**
    
    Ideal for everyday development and multitasking office work, this instance offers balanced performance for basic programming and productivity needs.
    
-   **Cloud RPA General Office**
    
    Specifically optimized for Robotic Process Automation (RPA) scenarios, this type provides high stability for long-running, automated workflows, making it perfect for rules-driven business processes in finance, HR, and more.
    
-   **Graphics Cloud Computer**
    
    Aimed at software development, data warehousing, and BI applications, this instance provides foundational graphics acceleration capabilities.
    
-   **Graphics Workstation**
    
    An upgrade from the Graphics Cloud Computer instance, this tier offers enhanced CPU, memory, and GPU memory, making it suitable for more demanding development and data analysis tasks.
    
-   **Graphics Workstation - Basic**
    
    Perfect for graphic design, 3D modeling, and light rendering, this workstation is equipped with a professional GPU to ensure a smooth, interactive experience.
    
-   **Graphics Workstation - Ultimate**
    
    Featuring an NVIDIA RTX 5880, this tier provides a significant boost in CPU, memory, and GPU memory over the Basic model. It excels at high-load rendering and complex simulations.
    
-   **Workstation Pro**
    
    The ultimate tier for the most demanding graphics workloads. Powered by an NVIDIA RTX 5880 with 48 GiB or more of GPU memory, it's designed for cinematic-grade rendering, AI-assisted design, and other extreme graphics computing scenarios.
    

**Operating system**

Supports Windows 11 Pro, Windows 10 Pro, Windows Server 2019, Windows Server 2022, Ubuntu 22.04, Rocky Linux, and Kylin V10.

> **Limitation**: Creating cloud computers with the Kylin V10 operating system is not supported in regions outside the Chinese mainland.

**Network access**

As a cloud-based office desktop service, EDS has no restrictions on outbound network traffic by default, while strictly limiting inbound traffic.

-   **Outbound**: All outbound access is allowed by default.
    
-   **Inbound**:  
    \- **Internet**: Cloud computers do not support any inbound access from the Internet.  
    \- **Intranet**: By default, cloud computers deny all inbound access. Configure inbound rules in security groups to allow access from specific IP address ranges.
    

**Account system**

Supports convenience accounts, enterprise Active Directory (AD) accounts, and integration with other identity providers via the SAML 2.0 protocol to enable single sign-on (SSO).

## Billing

The billable items for EDS consist of basic resources and value-added services. For more billing details, see [Billing overview](/help/en/wuying-workspace/product-overview/billing-overview).

-   **Basic resources**
    
    -   **Compute resources**: vCPUs, memory, and GPUs.
        
    -   **Storage resources**: system disks and data disks.
        
-   **Value-added services**
    
    -   **Internet bandwidth**: Includes basic bandwidth (free), premium bandwidth, and data transfer plans to offset traffic fees.
        
    -   **Enterprise storage**: Includes File Storage NAS file systems for file sharing between multiple cloud computers.
        
    -   **Network interconnection**: Enables connection to an on-premises data center (IDC) or Virtual Private Cloud (VPC) through Cloud Enterprise Network (CEN).
        
    -   **Identity federation**: Enables integration with your existing AD by using AD Connector.
        
    -   **Auditing and collaboration**: Includes Simple Log Service, screen recording audit, and stream collaboration.
        
    -   **Others**: Paid applications from the marketplace, snapshots and backups, cloud browsers, and more.
        

## FAQ

-   Does EDS support nested virtualization?
    
    -   EDS does not support nested virtualization technologies, such as Microsoft Hyper-V, VMware ESXi, or Citrix Xen.
        

## **Next steps**

-   Learn about the [basic concepts](/help/en/wuying-workspace/product-overview/terms-2) of EDS.
    
-   Familiarize yourself with the [product architecture](/help/en/wuying-workspace/product-overview/product-architecture) of EDS to understand the service workflow and network structure.
    
-   When you are ready to try EDS, refer to the [Get started as an administrator](/help/en/wuying-workspace/getting-started/getting-started-for-admins) guide to create a cloud computer.
