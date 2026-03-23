Alibaba Cloud E-MapReduce (EMR) helps you build and run open source big data frameworks, such as Hadoop, Spark, Hive, and Presto, for large-scale data processing and analysis. This topic describes how to create an EMR on ECS cluster and explains the required configurations to help you quickly set up and manage your big data cluster.

**Note**

If you create an EMR cluster for the first time after 17:00 (UTC+8) on December 19, 2022, you cannot select the Hadoop, Data Science, Presto, or Zookeeper cluster types.

## Prerequisites

The RAM authorization is complete. For more information, see [Alibaba Cloud account role authorization](/help/en/emr/emr-on-ecs/user-guide/assign-a-role-to-an-alibaba-cloud-account#concept-ykn-bd3-y2b).

## Precautions

For DataLake, DataFlow, DataServing, and Custom clusters of EMR 5.12.1 and later or EMR 3.46.1 and later, if the selected services do not depend on core nodes, you can click **Remove Node Group** in the **Node Group** section.

## Procedure

1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list).
    
2.  In the top navigation bar, select a region and a resource group as needed.
    
    -   Region: The cluster is created in the selected region. The region cannot be changed after the cluster is created.
        
    -   Resource Group: By default, all resources in your account are displayed.
        
3.  Click **Create Cluster**.
    
4.  Configure the cluster as prompted.
    
    When you create a cluster, you must configure software, hardware, and basic settings, and then confirm the order.
    
    **Note**
    
    After a cluster is created, you cannot change its configurations, except for the cluster name. Carefully confirm all configurations before you create the cluster.
    
5.  After you confirm that all information is correct, click **Confirm**.
    
    **Important**
    
    -   Pay-as-you-go clusters: The cluster creation process starts immediately. After the cluster is created, its status changes to **Running**.
        
    -   Subscription clusters: An order is generated. The cluster is created after you complete the payment.
        
    

## **Configuration details**

### **Software configuration**

**Configuration**

**Description**

**Region**

A region is a geographic area where a data center is located. Select a region close to you to reduce network latency. The region cannot be changed after the instance is created.

From the Region drop-down list, select the physical location for the EMR instance.

**Business Scenario**

Select a scenario based on your actual needs:

-   **Data Lake**: Provides a flexible, reliable, and efficient cluster to run big data compute engines and deliver excellent data analytics capabilities.
    
    -   Supports building a data lake architecture and uses JindoFS for data lake acceleration.
        
    -   Supports Hadoop Distributed File System (HDFS) on OSS (a fully managed HDFS) for storage. This reduces your O&M costs and is billed based on usage.
        
    
    For more information, see [DataLake cluster](/help/en/emr/emr-on-ecs/user-guide/datalake-cluster#task-2213143).
    
-   **Data Analytics** (OLAP): Import or use external tables to load massive amounts of data into an online analytical processing (OLAP) engine, such as ClickHouse or StarRocks. This provides efficient, real-time, and flexible data analytics for scenarios such as user personas, audience segmentation, BI reports, and business analytics.
    
-   **Real-time Data Streaming** (DataFlow): A one-stop, real-time computing solution on the EMR platform. It includes two major components: Kafka, a distributed, high-throughput, and scalable messaging system, and a commercial Flink kernel from Ververica, which is based on the official Apache Flink product. It focuses on solving various end-to-end real-time computing problems and is widely used in scenarios such as real-time extract, transform, and load (ETL) and log collection and analysis. You can also use either component individually.
    
-   **Data Service** (DataServing):
    
    -   Provides a flexible, reliable, and efficient data service cluster.
        
    -   Provides a semi-managed HBase cluster and can decouple the compute cluster from data storage based on the OSS-HDFS (JindoFS) service.
        
    -   Supports JindoData local cache to further improve the read and write performance of the data service cluster.
        
    
    For more information, see [DataServing cluster](/help/en/emr/emr-on-ecs/user-guide/dataserving-cluster).
    
-   **Custom Cluster**: A custom cluster provides a rich combination of services. Select services as needed.
    
    **Note**
    
    In a production environment, avoid deploying multiple storage services on the same node group.
    

**Product Version**

The release version of the EMR product. For more information, see [Release versions](/help/en/emr/emr-on-ecs/product-overview/emr-on-ecs-release-version/).

**High Service Availability**

This feature is disabled by default. If you enable high availability, EMR creates multiple master nodes to support high availability for ResourceManager and NameNode. EMR distributes these nodes across different underlying hardware to reduce the risk of failure.

**Optional Services (Select One At Least)**

Select other services as needed. The related service processes for the selected services will start by default.

**Important**

-   The more services you select, the higher the machine configuration requirements. In the following steps, select an instance type based on the number of services. Otherwise, the cluster may not have enough resources to run the services.
    
-   Installed services cannot be uninstalled.
    
-   The parameters to set vary with the product version and selected services.
    

**Collect Service Operational Logs**

You can enable or disable log collection for all services with one click. This feature is enabled by default to collect your service operational logs. These logs are used only for cluster diagnostics.

After the cluster is created, change the **Collection Status of Service Operational Logs** on the **Basic Information** page.

**Important**

If you disable log collection, EMR health checks and technical support are limited, but other features can still be used normally. For more information about how to disable this feature and its effects, see [How do I stop collecting service logs?](/help/en/emr/emr-on-ecs/user-guide/faq-about-cluster-management#a33f96804dkef).

**Metadata**

The following methods are supported for storing and managing metadata:

-   **DLF Unified Metadata** (Recommended): Metadata is stored in Data Lake Formation (DLF).
    
    After you activate DLF, the system selects a default **DLF Catalog** for you. The default catalog is your UID. If you want to use different data catalogs for different clusters, create a new catalog as follows:
    
    1.  Click **Create Catalog**. In the dialog box that appears, enter a catalog ID and click **OK**.
        
    2.  From the **DLF Catalog** drop-down list, select the data catalog that you created.
        
-   **Self-managed RDS**: Select your own or an Alibaba Cloud RDS instance as the metastore.
    
    If you select this option, configure the RDS-related parameters. For more information, see [Configure a self-managed RDS database](/help/en/emr/emr-on-ecs/user-guide/configure-a-self-managed-apsaradb-rds-for-mysql-database#task-2444872).
    
-   **Built-in MySQL** (Not recommended): Metadata is stored in the MySQL database in the cluster's local environment.
    
    **Note**
    
    -   Test scenarios: Use **DLF Unified Metadata**.
        
    -   Production scenarios: Use **DLF Unified Metadata** or **Self-managed RDS**.
        
    

**Root Storage Directory of Cluster**

Configure this parameter when you select the OSS-HDFS service in the optional services section. This parameter is not required if you select the HDFS service.

**Important**

Buckets created by clicking **Create OSS-HDFS Bucket** in the EMR console can be read from and written to only through EMR. Operations in the console or through an API are not supported.

The first time you use the OSS-HDFS service, the Alibaba Cloud account must click **here** and follow the prompts to complete the authorization. For a Resource Access Management (RAM) user, the Alibaba Cloud account must grant authorization to activate the service and grant the AliyunEMRDlsFullAccess permission, and the AliyunOSSDlsDefaultRole and AliyunEMRDlsDefaultRole roles. For more information, see [Grant permissions to a RAM user](/help/en/emr/emr-on-ecs/user-guide/grant-permissions-to-ram-users-1). Select a bucket for which the OSS-HDFS service is activated in the same region, or click **Create OSS-HDFS Bucket** and follow the prompts to create an OSS-HDFS instance as the cluster's root storage path.

**Note**

-   Before you use the OSS-HDFS service, make sure that the service is supported in your selected region. Otherwise, you can try changing the region or using the HDFS service instead of the OSS-HDFS service. For information about the regions that support the OSS-HDFS service, see [Activate and authorize access to the OSS-HDFS service](/help/en/oss/user-guide/enable-oss-hdfs-service#section-ztd-rfm-vvz).
    
-   For DataLake, DataFlow, DataServing, and Custom clusters of EMR 5.12.1 and later or EMR 3.46.1 and later, you can select the OSS-HDFS service.
    

#### **Configurations related to services and versions**

The following configurations depend on the product version and services that you select.

-   The following parameters are required only for EMR 5.12.0 and earlier or EMR 3.46.0 and earlier when the Hive service is selected.
    
    **Parameter**
    
    **Description**
    
    **Hive Storage Mode**
    
    Use OSS-HDFS or OSS as the storage directory for the data warehouse. If you clear the check box, the cluster HDFS is used as the storage directory.
    
    If the check box is selected by default, you must also configure **Hive Data Warehouse Path**. We recommend that you select a bucket for which the HDFS service is enabled.
    
    **Note**
    
    Make sure that you have permissions to access the OSS or OSS-HDFS bucket.
    
-   The following parameters are required only for EMR 5.12.0 and earlier or EMR 3.46.0 and earlier when the HBase service is selected.
    
    **Parameter**
    
    **Description**
    
    **HBase Storage Mode**
    
    Used to store HBase data files. The following modes are supported: **OSS-HDFS** and **OSS**.
    
    If you select the **OSS-HDFS** mode, you must also configure **HBase Storage Path**. We recommend that you select a bucket for which the HDFS service is enabled.
    
-   For EMR 5.12.1 and later or EMR 3.46.1 and later, if you select the OSS-HDFS and HBase services, you must configure the following parameter. After the cluster is created, an HBase-HDFS service is generated. For more information, see [HBASE-HDFS](/help/en/emr/emr-on-ecs/user-guide/hbase-hdfs).
    
    **Parameter**
    
    **Description**
    
    **HBase Log Storage**
    
    This check box is selected by default, which indicates that HBase stores HLog files in HDFS.
    

#### **More scenarios**

**Important**

If you create an EMR cluster for the first time after 17:00 (UTC+8) on December 19, 2022, you cannot select the following cluster types.

-   **Machine Learning** (Data Science): This cluster type is designed for big data and AI scenarios.
    
    -   Provides a distributed deep learning framework.
        
    -   Provides more than 200 classic machine learning algorithm packages.
        
    -   Provides AutoML capabilities and more than 10 deep learning algorithms, covering scenarios such as recommendation and advertising.
        
-   **Old Data Lake**: This cluster type builds large-scale data processing frameworks and pipelines. It is suitable for big data analytics and supports open source frameworks such as Apache Hive, Spark, and Presto. The following cluster types are supported:
    
    -   **Hadoop**:
        
        -   Provides a comprehensive list of open source components and is fully compatible with the Hadoop ecosystem.
            
        -   Can be used in various scenarios such as big data offline processing, real-time processing, and interactive search.
            
        -   Supports building a data lake architecture and uses JindoFS for data lake acceleration.
            
    -   **Zookeeper**: Provides an independent distributed consistent lock service, suitable for large-scale Hadoop, HBase, and Kafka clusters.
        
    -   **Presto**: A memory-based, distributed SQL interactive search engine. It supports multiple data sources and is suitable for complex analysis of petabyte-scale data and cross-data source queries.
        

#### (Optional) Advanced settings

**Configuration**

**Description**

**Kerberos Authentication**

This feature is disabled by default. Kerberos is an identity authentication protocol based on symmetric key technology. It can provide identity authentication for other services. For more information, see [Kerberos](/help/en/emr/emr-on-ecs/user-guide/overview-13/).

**Important**

-   Knox: Kerberos authentication is not supported.
    
-   Kudu: Even if Kerberos authentication is enabled, the Kudu service still requires extra configuration to support and enable the Kerberos authentication mechanism. For more information, see [Authentication](https://kudu.apache.org/docs/security.html#_authentication) in the Apache Kudu documentation.
    

**Custom Software Configuration**

You can specify a JSON file to configure the basic software in the cluster, such as Hadoop, Spark, and Hive. For more information, see [Configure custom software](/help/en/emr/emr-on-ecs/user-guide/configure-custom-software). This feature is disabled by default.

**Note**

For information about how to set the concurrency of Hive jobs, see [How do I estimate the upper limit for the concurrency of Hive jobs?](/help/en/emr/emr-on-ecs/user-guide/faq-17#section-v4q-zgq-7d7).

### **Hardware configuration**

**Configuration**

**Description**

**Billing Method**

The default billing method is subscription. The following billing methods are supported:

-   **Pay-as-you-go**: A post-paid mode where you pay after use. With pay-as-you-go, you pay for the actual hours of use. Billing occurs hourly. This method is suitable for short-term test tasks or flexible, dynamic tasks.
    
-   **Subscription**: A pre-paid mode where you pay before use.
    
    **Note**
    
    -   For test scenarios, use **Pay-as-you-go**. After testing is successful, create a new **Subscription** cluster for production use.
        
    -   For subscription instances, also select a **Subscription Duration** and whether to enable **Auto-renewal**. The default renewal duration is six months, and auto-renewal is enabled. If auto-renewal is enabled, the auto-renewal operation is performed seven days before the instance expires. For more information, see [Renewal policy](/help/en/emr/emr-on-ecs/product-overview/renewal-description#concept-mwr-3sn-y2b).
        
    

**Zone**

A zone is a distinct physical area within the same region. Zones within the same region can communicate with each other over the internal network. You can usually use the default zone.

**VPC**

A virtual private cloud (VPC) is an isolated network environment that you define in Alibaba Cloud. You have full control over your VPC.

Select an existing VPC, or click **Create VPC** to go to the VPC console and create a VPC. For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575).

**Note**

You cannot change the private IP address after the cluster is created because the cluster's private IP is bound to the VPC.

**vSwitch**

A vSwitch is a basic network module of a VPC that connects different cloud resources.

Select an existing vSwitch, or click **. Create vSwitch** to go to the VPC console and create a vSwitch. For more information, see [Create and manage a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).

**Default Security Group**

A security group is a virtual firewall that controls the inbound and outbound traffic of instances within the security group. For more information, see [Security group overview](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb).

Select an existing security group, or click **create a new security group.** to go to the ECS console and create a new security group. For more information, see [Create a security group](/help/en/ecs/user-guide/create-a-security-group-1#concept-ocl-bvz-xdb).

**Important**

Do not use advanced security groups created on ECS.

**Node Group**

Select an instance type as needed. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).

-   **Master**: Mainly responsible for deploying control processes such as ResourceManager and NameNode.
    
-   **Core**: Mainly responsible for storing all data of the cluster. You can also scale out core nodes as needed after the cluster is created.
    
-   **Task**: Does not store data. It is used to adjust the computing capacity of the cluster. This is disabled by default but can be configured as needed.
    
    **Important**
    
    The supported billing methods for task node groups are pay-as-you-go, spot instance, and subscription.
    
-   **Add to Deployment Set**: After high availability is enabled, the master node is added to a deployment set by default. A deployment set is a policy that controls the distribution of instances. For more information, see [Deployment sets](/help/en/ecs/user-guide/overview-43#concept-1846521).
    
-   **System Disk**: Select a standard SSD, enterprise SSD (ESSD), or ultra disk as needed. Adjust the system disk size as needed.
    
-   **Data Disk**: Select a standard SSD, ESSD, or ultra disk as needed. Adjust the data disk size as needed.
    
    **Note**
    
    When you select an ESSD, you can set different performance levels (PLs) based on the capacity of the selected disk to meet different cluster performance requirements. The default performance level is PL1. Based on the disk capacity range, the system disk supports PL0, PL1, and PL2 ESSD specifications, and the data disk supports PL0, PL1, PL2, and PL3 ESSD specifications. For more information about cloud disks, see [Cloud disk overview](/help/en/ecs/user-guide/disks-2#section-d9f-cog-644).
    
-   **Instances**: The master node group has one instance by default. If high availability is enabled, you can have multiple Master instances.
    
    The core node group has two instances by default. You can adjust this number as needed.
    
-   **Additional Security Group**: An additional security group lets you flexibly customize access between different external resources or applications. You can associate up to two additional security groups with this node group.
    
-   **Assign Public Network IP**: Specifies whether to assign an Elastic IP Address (EIP) to the cluster. This is disabled by default. Only DataLake clusters support assigning public IPs at the node group level.
    
    **Note**
    
    If you do not enable this feature but want to access the cluster using a public IP address after creation, apply for a public IP address on ECS. For more information, see [Apply for an EIP](/help/en/eip/apply-for-new-eips).
    

**Cluster Scaling**

Select a scaling rule as needed:

-   **Do Not Use Auto Scaling Rules** (Default).
    
-   **Custom Auto Scaling Rule**: Create a custom scaling rule to enable automatic scaling based on time or load. For more information, see [Create a custom auto scaling rule](/help/en/emr/emr-on-ecs/user-guide/creating-a-custom-auto-scaling-policy#9ebb6c713b0cf).
    
-   **Managed Auto Scaling Rule**: When you start the cluster, EMR pre-allocates the number of task nodes based on the managed scaling rule. For more information, see [Create a managed auto scaling rule](/help/en/emr/emr-on-ecs/user-guide/create-a-managed-as-policy#532e473401kby).
    

**Note**

-   You can configure scaling rules only when the billing method for the task node group is pay-as-you-go or spot instance.
    
-   If the cluster contains Trino, Presto, Starrocks, Impala, or Clickhouse components, you cannot switch to a managed scaling rule.
    

### **Basic configuration**

**Configuration Item**

**Description**

**Cluster Name**

The name of the cluster. The name must be 1 to 64 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (\_).

**Identity Credentials**

The **Identity Credentials** are used to securely log on to the cluster's master node. For logon operations, see [Log on to a cluster](/help/en/emr/emr-on-ecs/user-guide/log-on-to-an-emr-cluster). The following identities are supported:

-   **Key Pair** (Default): Select an existing key pair, or click **Create Key Pair** to create one immediately.
    
    A key pair is a secure and convenient logon authentication method that consists of a public key and a private key. It is supported only for Linux instances. For more information about using key pairs, see [SSH key pairs](/help/en/ecs/user-guide/overview-ssh#concept-j33-vqw-ydb).
    
-   **Password**: Set the logon password for the master node and confirm the password. The default username is root.
    
    -   Password rules: 8 to 30 characters in length, and must contain uppercase letters, lowercase letters, digits, and special characters.
        
    -   Special characters include the following: exclamation point (!), at sign (@), pound sign (#), dollar sign ($), percent sign (%), caret (^), ampersand (&), and asterisk (\*).
        

**(Optional) Advanced settings**

**Configuration**

**Description**

**ECS Application Role**

When your programs run on EMR compute nodes, you can access other Alibaba Cloud services, such as OSS, without entering an Alibaba Cloud AccessKey. EMR automatically requests a temporary AccessKey to authorize the access. The **ECS Application Role** controls the permissions of this AccessKey.

**Bootstrap Actions**

Scripts that are executed before the cluster starts. You can use them to install third-party software or modify the cluster's runtime environment. For more information, see [Execute a script using a bootstrap action](/help/en/emr/emr-on-ecs/user-guide/bootstrap-action-execution-script#concept-q52-vln-y2b).

**Release Protection**

You can enable release protection when you create a pay-as-you-go cluster or after the cluster is created to prevent the cluster from being accidentally released. After you enable release protection, you cannot directly release the cluster. To release the cluster, you must first disable release protection. For more information, see [Enable and disable release protection](/help/en/emr/emr-on-ecs/user-guide/enable-and-disable-release-protection).

**Tags**

You can attach tags when you create a cluster or add them after the cluster is created. This helps you identify and manage your cluster resources. For more information, see [Set tags](/help/en/emr/emr-on-ecs/user-guide/manage-and-use-tags-19#task-2425562).

**Resource Group**

Resource groups allow you to group your cloud resources by purpose, permission, and ownership. For more information, see [Use resource groups](/help/en/emr/emr-on-ecs/user-guide/use-resource-groups-19#task-2485054).

**Data Disk Encryption**

You can enable this feature only when you create a cluster. If you enable this feature, both data in transit and data at rest on the data disk are encrypted. For more information, see [Enable data disk encryption](/help/en/emr/emr-on-ecs/user-guide/enable-data-disk-encryption#task-2247905).

**System Disk Encryption**

You can enable this feature only when you create a cluster. If you enable this feature, the operating system, program files, and other system-related data on the system disk are encrypted. For more information, see [Enable system disk encryption](/help/en/emr/emr-on-ecs/user-guide/enable-system-disk-encryption).

**Remarks**

Used to record important information about the cluster. After the cluster is created, modify the remarks on the **Basic Information** page. If you do not set remarks when creating the cluster, edit this parameter after creation.

### **Confirm order**

(Optional) **Save as Cluster Template**: If you select **Key Pair** for identity authentication, you can click **Save as Cluster Template** to save the current cluster configuration as a template.

1.  In the **Save as Cluster Template** dialog box, enter a **Cluster Template Name** and select a **Cluster Template Resource Group**.
    
    **Parameter**
    
    **Description**
    
    **Cluster Template Name**
    
    Enter a name for the cluster template to facilitate later management. The name must be 1 to 64 characters in length and can contain only Chinese characters, letters, digits, hyphens (-), and underscores (\_).
    
    **Cluster Template Resource Group**
    
    Select an existing resource group as needed to manage templates by group.
    
    To create a new resource group, click **Create Resource Group.**. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    
2.  Click **OK**.
    
    A new cluster template is added to the **Manage Cluster Templates** panel. For more information about cluster templates, see [Create a cluster template](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-template-on-the-emr-on-ecs-page).
    

## **FAQ**

### **What do I do if the "EntityNotExist.Role" error is reported when I create a cluster?**

-   Cause: The current account does not have the required permissions to create a cluster.
    
-   Solution:
    
    The solution differs depending on whether you are using an Alibaba Cloud account or a RAM user.
    
    -   Alibaba Cloud account: To create a cluster, your account needs permissions to access other Alibaba Cloud resources and perform related operations. You can click [Cloud Resource Access Authorization](https://ram.console.alibabacloud.com/role/authorize?request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Femr.console.alibabacloud.com%2F%23%2Fregion%2Fcn-hangzhou%2Fresource%2Fall%2Foverview%22%2C%22Services%22%3A%5B%7B%22Service%22%3A%22EMR%22%2C%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunEmrEcsDefaultRole%22%2C%22TemplateId%22%3A%22ECSRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunEMRDefaultRole%22%2C%22TemplateId%22%3A%22DefaultRole%22%7D%5D%7D%2C%7B%22Service%22%3A%22ECS%22%2C%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunECSInstanceForEMRRole%22%2C%22TemplateId%22%3A%22AliyunECSInstanceForEMRRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunECSInstanceForEMRStudioRole%22%2C%22TemplateId%22%3A%22AliyunECSInstanceForEMRStudioRole%22%7D%5D%7D%5D%7D) to grant the required permissions. After the authorization is successful, you can create a cluster. For more information about role authorization, see [Authorize an Alibaba Cloud account](/help/en/emr/emr-on-ecs/user-guide/assign-a-role-to-an-alibaba-cloud-account).
        
    -   RAM user: This error occurs because the RAM user does not have the required permissions to create an EMR cluster. Use an Alibaba Cloud account to grant the AliyunEMRFullAccess policy to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/emr/emr-on-ecs/user-guide/grant-permissions-to-ram-users-1).
        

## **Related documents**

-   For FAQs about creating clusters, see [FAQ about cluster management](/help/en/emr/emr-on-ecs/user-guide/faq-about-cluster-management).
    
-   To add services after a cluster is created, see [Add a service](/help/en/emr/emr-on-ecs/user-guide/add-services).
    
-   For information about how to log on to a cluster, see [Log on to a cluster](/help/en/emr/emr-on-ecs/user-guide/log-on-to-an-emr-cluster).
    
-   For information about how to select an instance type, see [ECS instance types](/help/en/emr/emr-on-ecs/user-guide/ecs-instances-19).
    
-   For FAQs about using various components, see [FAQ](/help/en/emr/emr-on-ecs/support/faq).
    
-   For information about using the API, see [CreateCluster](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-createcluster).
