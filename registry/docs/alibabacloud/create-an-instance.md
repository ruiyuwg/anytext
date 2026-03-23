Create a StarRocks instance to use a managed, high-performance environment for large-scale data analytics and queries without having to build or maintain infrastructure.

## Procedure

1.  Go to the EMR Serverless StarRocks instance list page.
    
    1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the navigation pane on the left, choose **EMR Serverless** > **StarRocks**.
        
    3.  In the top menu bar, select a region.
        
2.  On the **Instance List** page, click **Create Instance**.
    
3.  On the **E-MapReduce Serverless StarRocks** page, configure the instance.
    
    **Note**
    
    The available configuration parameters vary based on the selected instance type. BE is used for compute-storage integrated instances, and CN is used for compute-storage separated instances.
    
    **Configuration item**
    
    **Description**
    
    **Product Type**
    
    The following billing methods are supported:
    
    -   **Subscription**: A prepaid billing method. A subscription lets you reserve resources in advance and enjoy greater price discounts to maximize your savings.
        
    -   **Pay-as-you-go**: A postpaid billing method. You are billed for the resources that you use. A bill is generated for each billing cycle, and the fees are deducted from your account.
        
    
    **Region**
    
    The physical location of the instance.
    
    **Important**
    
    You cannot change the region after the instance is created. Choose the region with care.
    
    **Network and zone**
    
    Select a virtual private cloud (VPC), a zone, and the corresponding vSwitch.
    
    -   **VPC**: A VPC is an isolated network environment that you define on Alibaba Cloud. You have full control over your VPC.
        
        Select an existing VPC, or click **Create VPC** to go to the VPC console and create one. For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575).
        
        **Note**
        
        -   When you create a VPC, the IPv4 CIDR block must be from one of the following private network segments defined in RFC 1918:
            
            -   `10.0.0.0/8` (10.0.0.0 to 10.255.255.255)
                
            -   `172.16.0.0/12` (172.16.0.0 to 172.31.255.255)
                
            -   `192.168.0.0/16` (192.168.0.0 to 192.168.255.255)
                
        -   If your Serverless StarRocks instance needs to access the Internet, for example, to import data or query foreign tables, make sure that its VPC has Internet access. You can deploy an Internet NAT gateway in the VPC and enable the SNAT feature. This allows the Serverless StarRocks instance to access Internet resources through the gateway. For more information, see [Use the SNAT feature of an Internet NAT gateway to access the Internet](/help/en/vpc/user-guide/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet).
            
        
    -   **Zone**: The zone where the instance is located.
        
    -   **vSwitch**: A vSwitch is a basic network module of a VPC that connects different cloud resources.
        
        Select an existing vSwitch, or click **. Create vSwitch** to go to the VPC console and create one. For more information, see [Create and manage a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
        
    
    **Instance Type**
    
    Select an instance type based on your scenario:
    
    -   **Shared-nothing**: Suitable for scenarios that require extremely high query performance, such as OLAP multidimensional analysis, high-concurrency queries, and real-time data analytics. This instance type stores data on cloud disks or local disks to ensure high data read and write efficiency.
        
        If you select this edition, you must configure **Instance Specification** with **FE Specifications** and **BE Specifications**.
        
    -   **Shared-data**: Suitable for business scenarios that are sensitive to storage costs and have slightly lower requirements for query efficiency, such as OLAP multidimensional analysis, real-time data analytics, and data warehouse scenarios. This instance type uses a compute-storage separated architecture.
        
        If you select this edition, you must configure **Instance Specification** with **FE Specifications** and **CN specifications**.
        
    
    **Multi-zone Disaster Recovery**
    
    > This parameter applies only to compute-storage separated instances.
    
    This feature is disabled by default. If you enable it, the system supports real-time backup and disaster recovery across zones. This significantly improves data reliability and system high availability.
    
    **Important**
    
    Enabling this feature incurs additional resource and cost overhead:
    
    -   The system requires extra FE nodes to coordinate and manage cross-zone backup jobs.
        
    -   If you enable multi-zone backup, the underlying storage uses zone-redundant storage, which incurs additional data storage fees.
        
    
    The system supports two configuration modes: two zones or three zones. You can select a configuration plan as needed.
    
    Enable this feature if you have high requirements for data security and disaster recovery. Otherwise, the default disabled state can meet general needs.
    
    For more information, see [Disaster recovery management](/help/en/emr/emr-serverless-starrocks/disaster-recovery-management-beta) and [Data storage (multi-zone) fees](/help/en/emr/emr-serverless-starrocks/product-overview/billable-items#6da243ad3f5wh).
    
    **Instance Edition**
    
    Supports **Basic Edition** and **Standard Edition**. For more information, see [Instance edition description](#section-u13-zhw-olf).
    
    **Note**
    
    The Basic Edition is available only in the China (Beijing), China (Shanghai), China (Shenzhen), and China (Hangzhou) regions.
    
    **Kernel Version**
    
    The community version number of StarRocks.
    
    The latest minor version used is displayed below, for example, 3.3.13-1.1.1-1.7.13.
    
    **FE Specifications**
    
    -   Specification type: Different StarRocks **Instance Edition** have different specification types for FE nodes.
        
        -   **Basic Edition**: Supports **Standard Specifications**.
            
        -   **Standard Edition**: Supports **Standard Specifications** and **Memory-optimized Specifications** specifications.
            
    -   **Compute CUs**: Select a compute unit (CU).
        
        Select CU specifications as needed. For more information about CU fees, see [Billable items](/help/en/emr/emr-serverless-starrocks/product-overview/billable-items).
        
    -   **Data Disk**: Supports only PL1 ESSDs. The size of the data disk ranges from 100 GB to 65,000 GB in increments of 100.
        
        For more information about cloud disks, see [ESSDs](/help/en/ecs/user-guide/essds).
        
    -   **HA**: Enabled by default. For the Standard Edition, if you enable high availability, the number of StarRocks FE nodes increases from 1 to 3 to reduce the risk of failures.
        
        **Important**
        
        High availability is strongly recommended for production environments.
        
    -   **Number of Nodes**: The number of FE nodes. The value must be an odd number from 1 to 11.
        
    -   **Load balancing**: The following methods are supported.
        
        -   **Built-in PrivateZone**: Automatically distributes traffic using PrivateZone domain name resolution. This option incurs no additional costs and is suitable for lightweight scenarios or cost-sensitive environments.
            
            Suitable for non-production environments or services with low requirements for load balancing performance.
            
        -   **Server Load Balancer (SLB)**: Provides high-performance load balancing by activating the SLB service. Recommended for production environments, especially for workloads that require high system performance and reliability.
            
            The feature that removes the FE leader from handling query traffic is available only after SLB is enabled.
            
            You must enable the SLB service, which incurs additional fees. For more information, see [CLB Billing overview](/help/en/slb/classic-load-balancer/product-overview/billing-overview/#concept-2240735).
            
    
    **BE Specifications**
    
    > This parameter applies only to compute-storage integrated instances.
    
    -   Specification type: The specification type of BE nodes varies depending on the StarRocks **Instance Edition**.
        
        -   **Basic Edition**: Supports **Standard Specifications**.
            
        -   **Standard Edition**: Supports the following specifications.
            
            -   **Standard Specifications**: The default specifications. One CU is equal to 1 CPU core and 4 GiB of memory. Enterprise SSDs (ESSDs) are used for data storage.
                
            -   **Memory-optimized Specifications**: One CU is equal to 1 CPU core and 8 GiB of memory. This option is suitable for scenarios in which a large amount of memory resources are required, such as scenarios where complex queries are made or scenarios where high concurrency is required. ESSDs are used for data storage.
                
            -   **Network-enhanced Specifications**: One CU is equal to 1 CPU core and 4 GiB of memory. The network bandwidth is two or more times that of the standard specifications. This option is suitable for analysis of external tables that contain a large amount of data. ESSDs are used for data storage.
                
            -   **High-performance storage**: If you select this option, you must select the desired specifications based on your business requirements. This option is suitable for scenarios in which high storage I/O performance is required. Local SSDs are used for data storage.
                
            -   **High-specification Storage**: If you select this option, you must select the desired specifications based on your business requirements. Local HDDs are used for data storage. This option is suitable for scenarios in which a large volume of data needs to be stored and cost-effective storage is required, but high storage I/O performance is not required.
                
    -   **Compute CUs**: Select a compute unit (CU).
        
        Select CU specifications as needed. For more information about CU fees, see [Billable items](/help/en/emr/emr-serverless-starrocks/product-overview/billable-items).
        
    -   **Data Disk**: Supports PL0 ESSD, PL1 ESSD (recommended), PL2 ESSD, and PL3 ESSD. For more information, see [ESSDs](/help/en/ecs/user-guide/essds).
        
        The cache disk size ranges from 100 GB to 65,000 GB. The default number of cache disks is 1. The value ranges from 1 to 8, with a step size of 1.
        
        **Note**
        
        You can enter the required storage capacity, and the system automatically provides a default recommended configuration. If the disk capacity you select exceeds the recommended threshold, the system displays a prompt to help you make appropriate adjustments for optimal performance.
        
    -   **Number of Nodes**: The number of BE nodes. Valid range: 3 to 50.
        
    
    **CN specifications**
    
    > This parameter applies only to compute-storage separated instances.
    
    -   Specification type: The specification types for CN nodes vary depending on the StarRocks **Instance Edition**.
        
        -   **Basic Edition**: Supports **Standard Specifications**.
            
        -   **Standard Edition**: Supports the following specifications.
            
            -   **Standard Specifications**: The default specifications. One CU is equal to 1 CPU core and 4 GiB of memory. Enterprise SSDs (ESSDs) are used for data storage.
                
            -   **Memory-optimized Specifications**: One CU is equal to 1 CPU core and 8 GiB of memory. This option is suitable for scenarios in which a large amount of memory resources are required, such as scenarios where complex queries are made or scenarios where high concurrency is required. ESSDs are used for data storage.
                
            -   **Network-enhanced Specifications**: One CU is equal to 1 CPU core and 4 GiB of memory. The network bandwidth is two or more times that of the standard specifications. This option is suitable for analysis of external tables that contain a large amount of data. ESSDs are used for data storage.
                
            -   **High-performance storage**: If you select this option, you must select the desired specifications based on your business requirements. This option is suitable for scenarios in which high storage I/O performance is required. Local SSDs are used for data storage.
                
            -   **High-specification Storage**: If you select this option, you must select the desired specifications based on your business requirements. Local HDDs are used for data storage. This option is suitable for scenarios in which a large volume of data needs to be stored and cost-effective storage is required, but high storage I/O performance is not required.
                
    -   **Compute CUs**: Select a compute unit (CU).
        
        Select CU specifications as needed. For more information about CU fees, see [Billable items](/help/en/emr/emr-serverless-starrocks/product-overview/billable-items).
        
    -   **Data Disk**: Supports **ESSD PL0**, **ESSD PL1 Cloud Disk (Recommended)**, **ESSD PL2**, **ESSD PL3**, **Elastic Ephemeral Disk (Standard Edition)**, and **Elastic Ephemeral Disk (Premium Edition)**. For more information about cloud disk and elastic ephemeral disk fees, see [Billable items](/help/en/emr/emr-serverless-spark/product-overview/billing-item).
        
        For more information, see [ESSDs](/help/en/ecs/user-guide/essds) and [elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks).
        
        **Note**
        
        -   You can enter the required storage capacity, and the system automatically provides a default recommended configuration. If the disk capacity you select exceeds the recommended threshold, the system displays a prompt to help you make appropriate adjustments for optimal performance.
            
        -   Only **Standard Specifications**, **Memory-optimized Specifications**, and **Compute-enhanced** support elastic ephemeral disks. Elastic ephemeral disks are subject to region and zone limitations.
            
        
    -   **Number of Nodes**: The number of CN nodes. Value range: 1 to 100.
        
    
    **Data Storage**
    
    > This parameter applies only to compute-storage separated instances.
    
    Data storage is billed per GB per hour based on actual usage. For more information about billing, see [Billable items](/help/en/emr/emr-serverless-starrocks/product-overview/billable-items).
    
    **Instance Name**
    
    The instance name must be 1 to 64 characters long and can contain only Chinese characters, letters, digits, hyphens (-), and underscores (\_).
    
    **Administrator**
    
    The administrator for StarRocks. The default is admin. This value cannot be changed.
    
    **Password** and **Confirm Password**
    
    The password for the built-in administrator user of the StarRocks instance. Record this password. You need this password to manage and use the StarRocks instance. If you forget the password, you can reset it. For more information, see [How do I reset the instance password?](/help/en/emr/emr-serverless-starrocks/support/faq#04f836cb8ebn7)
    
    The password must be 8 to 30 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character: `@#$%^*_+-`.
    
    **RAM Role**
    
    This role grants the StarRocks instance permission to access data in Object Storage Service (OSS).
    
    **Data Lake Service**
    
    In the **Data Lake Service** section, enable this feature to bind a Data Lake Formation (DLF) catalog when you create the instance.
    
    -   **Bind DLF Data Catalog**: Select a created DLF data catalog from the drop-down list.
        
    -   **Select DLF Data Type**:
        
        -   **Paimon**: Suitable for high-performance data lake scenarios.
            
        -   **Iceberg**: Suitable for large-scale data analytics scenarios.
            
    -   **Associate RAM User/Role**: Select a RAM user or role that is authorized to access the DLF data catalog and associate it with the default admin user.
        
    
    (Optional) **Advanced Settings**
    
    -   **Data Disk Encryption**: You can enable this feature only when you create a **Shared-nothing** instance. When enabled, this feature encrypts both data in transit and static data on the data disk.
        
        **Note**
        
        -   To use this feature, activate Key Management Service (KMS) and create a key. For more information, see [Activate Key Management Service](/help/en/kms/key-management-service/support/purchase-a-dedicated-kms-instance#task-1962255) and [Create a key](/help/en/kms/key-management-service/support/create-a-cmk#task-1939967).
            
        -   This feature supports only cloud disks. Elastic ephemeral disks and local disks are not supported.
            
        
    -   **Activate Manager Agent**: Manager Agent is the agent service that connects StarRocks Manager to instances. It is deployed in the FE by default. If the FE has a high payload or you require higher stability for StarRocks Manager, enable dedicated Manager Agent resources. For more information, see [Manage Manager Agent](/help/en/emr/emr-serverless-starrocks/manager-agent).
        
        **Important**
        
        Manager Agent resources are billed based on CUs. For more information about billing, see [Billable items](/help/en/emr/emr-serverless-starrocks/product-overview/billable-items).
        
    -   **Resource Group**: Use the default resource group or select an existing one. You can also click **Create Resource Group.** to go to the Resource Management console and create a new resource group. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group).
        
        **Note**
        
        A resource group is a mechanism for managing resources in groups under an Alibaba Cloud account. Resource groups help you manage resource grouping and authorization for a single Alibaba Cloud account. For more information about resource groups, see [What is Resource Group?](/help/en/resource-management/resource-group/product-overview/resource-group-overview).
        
    -   **Tags**: You can attach tags when you create a cluster or add them after the cluster is created. Tags help you identify and manage your cluster resources.
        
    
4.  In the **Instance Overview** area on the right, accept the service agreement, click **Create Instance**, and then follow the prompts to complete the payment.
    
    If you purchase a subscription instance, you can select the **Purchase Duration**. You can also use a coupon if you have one.
    
    After you complete the payment, return to the instance list page to view the new instance. The instance is successfully created when its **Status** changes to **Running**.
    

## Instance edition description

**Important**

You cannot change the edition of an instance after it is created. Select the instance edition carefully during creation.

**Comparison item**

**Basic Edition**

**Standard Edition**

Scenarios

This edition is for StarRocks feature trials and functional testing only. It is not recommended for production environments.

Suitable for all StarRocks scenarios, including testing and production environments.

Resource limits

This edition has the following resource limits:

-   FE configuration: 1 instance, 4 CU, 50 GB data disk.
    
-   BE configuration: 1 instance, 8 CU, 50 GB data disk, PL1 ESSD.
    

No specific resource limits apply.

Stability

This edition does not support high availability (HA), provide a Service-Level Agreement (SLA), or offer stability guarantees.

If you enable high availability (HA), a Service-Level Agreement (SLA) is provided to ensure stability.

Instance management operations

-   Supports renewal, auto-renewal, release, configuration changes, and alert settings.
    
-   Does not support scale-out, scale-in, upgrades, downgrades, automatic minor version upgrades, or major version upgrades.
    

Supports all operations.

## **References**

-   For guidance on selecting an instance type, see [Instance type planning and recommendations](/help/en/emr/emr-serverless-starrocks/instance-specification-planning-and-suggestions).
    
-   To quickly create an instance, see the following documents:
    
    -   [Quickly use a compute-storage integrated instance](/help/en/emr/emr-serverless-starrocks/getting-started/use-compute-storage-integrated-instances)
        
    -   [Quickly use a compute-storage separated instance](/help/en/emr/emr-serverless-starrocks/getting-started/use-compute-storage-separation-instances)
        
-   You can connect to an instance using various methods, such as Manager SQL Editor, Quick BI, and DMS. For more information, see [Connect to an instance](/help/en/emr/emr-serverless-starrocks/instance-connection/).
    
    We recommend that you use the built-in StarRocks Manager. For more information, see [Connect to a StarRocks instance using EMR StarRocks Manager](/help/en/emr/emr-serverless-starrocks/use-sql-editor-to-operate-a-starrocks-instance).
