Elastic Compute Service (ECS) is an Infrastructure as a Service (IaaS) cloud computing service from Alibaba Cloud that delivers exceptional performance, stability, reliability, and elasticity. ECS eliminates for upfront IT hardware investment, letting you use servers as easily and efficiently as public resources, such as water and electricity. You can launch and scale your computing resources on demand. Alibaba Cloud continuously provides innovative servers to meet diverse business needs and support your growth.

## Why choose ECS

-   **Diverse computing capabilities**: Alibaba Cloud ECS supports mainstream x86 and Arm processor architectures. This includes server types such as CPU, GPU, ECS Bare Metal, and Super Computing Cluster (SCC). ECS provides hundreds of instance families to meet various user requirements.
    
-   **Ease of use**: You can get started without building your own data center, with resources delivered in minutes. ECS provides industry-standard APIs, a performance monitoring framework, and a proactive O&M system. It supports various O&M tools, including Terraform, CloudOps Orchestration Service (OOS), and Resource Orchestration Service (ROS), to improve usability.
    
-   **Cost optimization**: ECS offers multiple billing methods, such as pay-as-you-go, subscription, and spot instances, to suit different application needs. To optimize resource costs while ensuring stable computing power, you can combine these with discount strategies like savings plans and reserved instances, along with Auto Scaling and elastic provisioning.
    
-   **Flexibility and elasticity**: You can upgrade or downgrade compute, storage, and network bandwidth configurations based on business growth. You can also use Auto Scaling to automatically scale resources up or down at scheduled times or in response to business workloads.
    
-   **Stability and reliability**: A single instance reaches an availability of 99.975%, and multiple instances across zones reach an availability of 99.995%. Storage attached to ECS instances makes use of a multi-replica mechanism to provide a data durability of 99.9999999% (nine 9's). ECS provides various availability and reliability features such as snapshots and automatic alerting.
    
-   **Security**: High-standard data centers and physical infrastructure protection ensure platform security. To comprehensively secure your operating systems, access, network, and applications in the cloud, ECS provides multiple layers of protection, including hardware encryption, virtual firewalls, Resource Access Management (RAM), Anti-DDoS, vulnerability scanning, and data encryption.
    

For more information, see [Benefits](/help/en/ecs/benefits) and [Common scenarios](/help/en/ecs/common-scenarios#topic-9547).

## Service architecture

ECS consists of several functional components, including instances, images, Block Storage, snapshots, security groups, and networks. For definitions of the components shown in the diagram, see [Terms](/help/en/ecs/terms/#concept-2087383).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4846406671/CAEQUBiBgIC87LzA2RkiIGRkMDJkNzkzZDVjZjQ1NDU5NjVhN2VhZDUyYzFhNjYx3974248_20230905103052.317.svg)

## Billing

The following ECS resources are billable: compute resources (vCPUs and memory), images, Block Storage, public bandwidth, and snapshots.

Common billing methods include the following:

-   Subscription: You purchase resources for a specific period and pay upfront.
    
-   Pay-as-you-go: You create and release resources on demand and pay after use.
    
-   Spot instances: You can bid for spare computing capacity at a lower price than Pay-as-you-go Instances. However, the system may reclaim these instances.
    
-   Reserved instances: Reserved instances are capacity reservations that are offered at a discounted rate. The discounted rate is applied when the attributes of the ECS instance (including instance type, region, zone) match those of your reserved instances.
    
-   Savings plans: A discount plan for pay-as-you-go instances. You commit to a consistent amount of resource usage (measured in USD/hour) in exchange for a lower price on resources like compute and system disks.
    
-   Storage Capacity Units (SCUs): A resource plan for pay-as-you-go storage products. You commit to a specific amount of storage capacity in exchange for a discount on resources such as Block Storage, NAS, and OSS.
    

For more information about ECS billing, see [Billing overview](/help/en/ecs/billing-overview#concept-isb-scd-5db) and the pricing tab on the [Elastic Compute Service product page](https://www.alibabacloud.com/product/ecs).

## How to use ECS

After you register an Alibaba Cloud account, you can create, use, or release ECS instances in the following ways:

-   ECS console: A web-based service page for interactive operations. For information about console operations, see [Quick reference](/help/en/ecs/quick-reference).
    
-   ECS API: A Remote Procedure Call (RPC) API that supports GET and POST requests. For more information, see [API Reference](/help/en/ecs/developer-reference/introduction#EcsApiWelcome). You can use the following developer tools or services to call ECS API operations:
    
    -   [Command-line interface (CLI)](/help/en/ecs/developer-reference/create-and-manage-an-ecs-instance-by-using-cli-commands/)
        
    -   [OpenAPI Explorer](https://api.alibabacloud.com/#/?product=Ecs): Allows you to quickly search for APIs, call APIs online, and dynamically generate SDK sample code.
        
    -   [Alibaba Cloud SDKs](https://open.alibabacloud.com/sdk): Provides SDKs for multiple programming languages, such as Java, Python, and PHP.
        
-   [Resource Orchestration Service (ROS)](/help/en/ros/product-overview/what-is-ros#concept-28852-zh): Allows you to create a template that describes all the Alibaba Cloud resources you need. ROS then automatically creates and configures the resources based on the template.
    
-   [CloudOps Orchestration Service (OOS)](/help/en/ecs/user-guide/overview-3#concept-1181174): Automates O&M tasks. You can define execution tasks, execution order, inputs, and outputs in an execution template. You can then use the template to automate O&M tasks.
    
-   [Terraform](/help/en/ecs/developer-reference/terraform/): An open source tool that lets you use configuration files to provision compute resources on Alibaba Cloud and other cloud platforms that support Terraform. It also lets you perform version control on the resources.
    
-   [Alibaba Cloud Client](/help/en/ecs/user-guide/overview-of-alibaba-cloud-client#concept-2230009): An official client tool from Alibaba Cloud. It provides features such as resource browsing, search, and remote connections for ECS, Elastic Container Instance (ECI), Simple Application Server (SAS), and managed instances.
    

## Deployment recommendations

Consider the following aspects when you launch and use ECS instances:

-   **Region and zone**
    
    A region is a geographical area where an Alibaba Cloud data center is located. The region and zone determine the physical location of an ECS instance. After an instance is created, its metadata is set and its region cannot be changed. You can retrieve metadata only for ECS instances that are in a virtual private cloud (VPC). You can select a region and zone based on factors such as the geographical location of your users, Alibaba Cloud product availability, application availability, and whether internal network communication is required. For example, to use ApsaraDB RDS over the Alibaba Cloud internal network, the RDS instance and the ECS instance must be in the same region. For more information, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-2459516).
    
-   **High availability**
    
    To ensure proper business operations and uninterrupted service, you can use snapshots for data backup. You can also use multi-zone deployment, deployment sets, and Server Load Balancer (SLB) to implement application disaster recovery.
    
-   **Network planning**
    
    Alibaba Cloud recommends using a VPC, which allows you to plan your own private IP addresses and supports all new features and instance types. VPCs also suit scenarios that require isolation of multiple business systems or deployment across multiple Regions. For more information, see [What is VPC?](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb)
    
-   **Security solutions**
    
    -   You can use Security Groups for free to control the inbound and outbound access policies and port monitoring status of your ECS instances. For more information, see [Security group overview](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb).
        
    -   Alibaba Cloud provides free Anti-DDoS Origin Basic and basic security services for applications deployed on ECS instances. For more information, see [Anti-DDoS Origin Basic](/help/en/ecs/user-guide/anti-ddos-origin-basic#concept-j1h-3rw-ydb) and [Basic security services](/help/en/ecs/user-guide/basic-security-services#concept-610245).
        
        -   Anti-DDoS Origin Basic is enabled by default and is free of charge. It provides up to 5 Gbps of basic DDoS mitigation capabilities. If you need higher mitigation capabilities to secure your business on ECS, you can purchase Anti-DDoS Pro or Anti-DDoS Premium. For more information, see the [What is Anti-DDoS Proxy?](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/what-are-anti-ddos-pro-and-anti-ddos-premium#concept-2417452)
            
        -   Basic security services are free of charge. They provide basic security hardening capabilities, including unusual logon detection, vulnerability scans, and security baseline assessment. To upgrade to the Anti-virus, Premium, or Enterprise Edition of Security Center to secure your business on ECS, you can purchase the service. For more information, see the [What is Security Center](/help/en/security-center/product-overview/what-is-security-center#concept-bjv-y5w-ydb).
