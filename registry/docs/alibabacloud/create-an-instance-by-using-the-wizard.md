Compared with the Quick Launch tab on the Elastic Compute Service (ECS) instance buy page, the Custom Launch tab allows you to create ECS instances by specifying custom configurations, such as the image types, instance types, storage, bandwidth, and security groups. This topic describes how to create an ECS instance on the Custom Launch tab.

**Important**

If you are new to ECS and want to quickly purchase and use ECS instances, we have prepared a simple example for you. Refer to [Customize the purchase and use of an ECS instance from the console](/help/en/ecs/user-guide/use-the-ecs-instance-in-the-console), which can help you intuitively understand the whole process. Once you have a basic understanding, you can explore more about detailed configuration instructions in this topic to customize your instance purchase.

## Preparations

-   [Create an account](/help/en/account/sign-up-with-alibaba-cloud) on the Alibaba Cloud international site (alibabacloud.com).
    
-   Bind your credit card or PayPal account to your Alibaba Cloud account. For more information, see [Introduction to Alibaba Cloud Payment](/help/en/alibaba-cloud-payment-guide/latest/introduction-to-alibaba-cloud-payment).
    
-   (Optional) If you want to purchase an ECS instance within the Chinese mainland, you must [complete account verification](/help/en/account/support/which-users-are-required-to-undergo-account-authentication#h2--3).
    

## **Procedure**

1.  Go to the [ECS instance buy page](https://ecs-buy.alibabacloud.com/wizard/#/).
    
2.  Click the **Custom Launch** tab.
    
3.  Configure parameters, such as Billing Method, Region, Instance Type, and Image.
    
    For information about each parameter on the Custom Launch tab, see [Parameters](#a76e4b20ea11c).
    
4.  Before you click Create Order, check the instance configurations in the Configuration Summary section and configure parameters such as Duration on the right side of the ECS instance buy page based on your business requirements.
    
5.  Follow the on-screen instructions to read and select service agreements, such as the **ECS Terms of Service**. If you already signed a service agreement, you do not need to re-sign the agreement. Then, click **Create Order**.
    
    In most cases, the system requires 3 to 5 minutes to create an ECS instance. On the Instance page in the ECS console, you can view the status of the ECS instance. If the instance is in the **Running** state, the instance is created.
    

## **Parameters**

### **Billing Method**

Billing methods affect the billing and charging rules of instances. The resource status change rules of instances vary based on the instance billing method.

**Billing method**

**Description**

**References**

**Subscription**

A billing method that requires you to pay for resources before you use them. The billing method is suitable for long-term, sustained workloads, such as web services and databases that run 24/7.

[Subscription](/help/en/ecs/subscription#subs-china)

**Pay-as-you-go**

A billing method that allows you to pay for resources after you use them. The billing cycles of pay-as-you-go instances are accurate to the second. You can purchase and release instances on demand. The billing method is suitable for short-term, highly variable, or unpredictable workloads, such as temporary scaling, testing, and flash sales.

**Note**

To reduce costs, we recommend that you use the pay-as-you-go billing method together with savings plans and reserved instances.

-   [Pay-as-you-go](/help/en/ecs/pay-as-you-go-1#Pay-As-You-Go)
    
-   [What is a savings plan?](/help/en/ecs/savings-plans#concept-1950739)
    
-   [What is a reserved instance?](/help/en/ecs/reserved-instances#concept-t2m-n4q-dgb)
    

**Spot Instance**

A billing method that allows you to pay for resources after you use them. Compared with pay-as-you-go instances that do not have discounts, you can bid for the unused ECS capacity to create spot instances at discounts, which can help you save up to 90% of costs. Spot Instances may be automatically released due to fluctuations in market price or insufficient resources for specific instance types. The billing method is suitable for business that runs in a stateless manner and is highly tolerant to faults and interruptions, such as testing and real-time analysis.

[Spot Instances](/help/en/ecs/spot-instance#concept-1936192)

### **Region**

Regions are geographical locations where Alibaba Cloud data centers are deployed. Select a region that is close to your geographical location to reduce latency. **After an instance is created, the region of the instance cannot be changed**. For more information, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-2459516).

### **Network and Zone**

We recommend that you specify a virtual private cloud (VPC). VPCs are logically isolated from one another, ensure enhanced security, and support features such as Elastic IP Address (EIP), IPv6, and Elastic Network Interface (ENI).

A region consists of multiple isolated locations known as zones. A zone is a physical area that has an independent network and power supply. Resources that are deployed in the same zone share the network and have minimal latency between each other. Services deployed in the same zone provide faster communication speeds, which allows for more efficient business operations.

**Network type**

**Description**

**References**

**VPC**

A VPC is a dedicated and isolated network that you can use for your business. You have full control over your VPC. For example, you can specify a private CIDR block and configure route tables and gateways for the VPC.

If you did not create a VPC in the selected region, skip this step. The system automatically creates a default VPC and vSwitch in the region.

Select an existing VPC and an existing vSwitch. Alternatively, click **Create VPC** and **Create vSwitch** to create a VPC and a vSwitch in the VPC console. After the VPC and the vSwitch are created, go back to the ECS instance buy page and click the ![refresh](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0572966261/p278001.png) icon to obtain the most recent lists of VPCs and vSwitches.

**Note**

If you want to assign an IPv6 address to the instance, select a VPC and a vSwitch for which an IPv6 CIDR block is enabled.

-   [What is VPC?](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb)
    
-   [Create a VPC and a vSwitch](/help/en/vpc/user-guide/create-and-manage-a-vpc#section-znz-rbv-vrx)
    
-   [Create a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#section-ts9-t3s-8vw)
    
-   [Enable IPv6 for a VPC](/help/en/ipv6-gateway/user-guide/enable-ipv6-for-a-vpc#section-ucc-t6j-xv6)
    
-   [Enable IPv6 for an existing vSwitch](/help/en/ipv6-gateway/user-guide/enable-ipv6-for-a-vswitch-1#section-xz0-9p6-jlk)
    

### **Instances & Images**

Instance types and images define the basic attributes of an instance, including basic resources such as vCPUs, memory, and operating systems.

#### **Instance Type**

Available instance types vary based on the selected region. You can go to the [Instance Types Available for Each Region](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion) page to view the available instance types in each region.

You may have specific configuration requirements for the instance. For example, you may want the instance to have multiple ENIs bound, use Enterprise SSDs (ESSDs), or use local disks. In this case, make sure that the selected instance type meets your business requirements. For information about the features, supported scenarios, and specifications of instance types, see [Instance family overview](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).

If you set the **Billing Method** parameter to **Spot Instance**, you must also configure the Instance Usage Duration and Highest Price per Instance parameters.

-   The **Instance Usage Duration** parameter specifies the protection period of a spot instance. After the protection period ends, the instance may be released due to insufficient resources or a lower bid than the market price.
    
    **Option**
    
    **Description**
    
    **1 Hour**
    
    After a spot instance is created, a 1-hour protection period starts. During the protection period, the instance cannot be automatically released.
    
    **None**
    
    A spot instance without a protection period is created. Spot instances without a protection period are more cost-effective than spot instances with a protection period.
    
-   **Highest Price per Instance**
    
    **Option**
    
    **Description**
    
    **Use Automatic Bid**
    
    The real-time market price of an instance type is automatically used. The price may vary but cannot exceed the pay-as-you-go price of the instance type. Automatic bidding can prevent the spot instance from being released due to lower bids than the market price, but cannot prevent the instance from being released due to insufficient resources.
    
    **Set Maximum Price**
    
    Specify a maximum price. If the real-time market price exceeds the maximum price or if resources are insufficient, the spot instance is released.
    

#### **Image**

Images contain information required to run instances. Alibaba Cloud provides a variety of image sources for easy access to images. The following table describes the image sources.

**Image source**

**Description**

**References**

**Public Images**

Public images are fully licensed base images provided by Alibaba Cloud. The images include Windows Server operating system images and mainstream Linux operating system images.

**Note**

If you select a g8y, c8y, or r8y YiTian instance type and an Alibaba Cloud Linux image, you can use the application acceleration feature to improve the performance of your instance. For more information, see [Application performance acceleration](/help/en/ecs/user-guide/booster-extensions).

[Overview of public images](/help/en/ecs/user-guide/public-mirroring-overview/#concept-x4k-22r-wgb)

**Custom Images**

You can create a custom image or import an image as a custom image. Custom images contain initial system environments, application environments, and software configurations. This eliminates the need for repetitive manual configurations.

[Overview of custom images](/help/en/ecs/user-guide/overview-36#concept-2553000)

**Shared Images**

Shared images are custom images shared by other Alibaba Cloud accounts. You can use the shared images to create instances.

[Share a custom image](/help/en/ecs/user-guide/share-a-custom-image/#concept-e1j-jgm-xdb)

**Marketplace Images**

Alibaba Cloud Marketplace images are strictly reviewed and classified into various types. You can deploy ECS instances with a few clicks in scenarios such as website building and application development.

[Alibaba Cloud Marketplace images](/help/en/ecs/user-guide/alibaba-cloud-market-mirror-images#concept-spg-mct-xdb)

**Community Images**

Community images are publicly available. Custom images can be published as community images and used by other users in the Alibaba Cloud community.

[Community images](/help/en/ecs/user-guide/overview-12#concept-2056865)

**Note**

When you create ECS instances, you may be unable to find specific images, including custom images. This issue may occur due to the following reasons: The features in the images are incompatible with the features supported by the instance types, or the operating systems of the images are incompatible with the processors of the instance types. For information about how to resolve the issue, see [Why am I unable to find specific images when I create ECS instances?](/help/en/ecs/why-am-i-unable-to-see-my-custom-images-when-i-create-ecs-instances)

### **Storage**

Instances provide storage capabilities based on the system disks, data disks, elastic ephemeral disks, and Apsara File Storage NAS (NAS) file systems that are attached to the instances. ECS provides cloud disks and local disks to meet the storage requirements in different scenarios.

-   Cloud disks include ESSDs, standard SSDs, and ultra disks and can be used as system disks or data disks. For more information, see [Disks](/help/en/ecs/user-guide/disks-2#concept-n1s-rzb-wdb).
    
    **Note**
    
    The billing method of a cloud disk that is created along with an instance is the same as that of the instance.
    
-   Local disks can be used only as data disks. If an instance type, such as an instance type of an instance family with local SSDs or a big data instance family, is equipped with local disks, information about the local disks is displayed. For more information, see [Local disks](/help/en/ecs/user-guide/local-disks#concept-g3w-qzv-tdb).
    
    **Note**
    
    You cannot manually attach local disks to instances.
    

#### **System Disk**

System disks are used to install operating systems. The default capacity of a system disk is 40 GiB. However, the actual minimum capacity varies based on the image type. The following table describes the capacity ranges of system disks for different types of images.

**Image**

**System disk capacity (GiB)**

Linux (excluding FreeBSD and Red Hat)

\[max{20, Image size}, 2,048\]

FreeBSD

\[max{30, Image size}, 2,048\]

Red Hat

\[max{40, Image size}, 2,048\]

Windows

\[max{40, Image size}, 2,048\]

#### **(Optional) Data Disk**

Data disks are used to store application data. When you add a data disk, you can encrypt the disk to meet data security and regulatory compliance requirements. For information about data encryption, see [Encrypted Cloud Disks](/help/en/ecs/user-guide/encryption-overview#concept-2383230).

**Note**

The number of data disks that can be attached to a single instance is limited. For more information, see the [Block storage](/help/en/ecs/user-guide/limitations#BlockStorageQuota) section in the "Limits" topic.

#### **(Optional) Snapshot**

A snapshot is a point-in-time backup of a disk. You can quickly import data by creating a disk from a snapshot. You can use automatic snapshot policies to periodically back up disks to prevent risks such as accidental data deletion.

Select an existing snapshot policy or click **Create Automatic Snapshot Policy** to create an automatic snapshot policy on the Snapshots page. For more information, see [Create an automatic snapshot policy](/help/en/ecs/user-guide/create-an-automatic-snapshot-policy-1#task-1443510). After the automatic snapshot policy is created, go back to the ECS instance buy page and click the ![refresh](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0572966261/p278001.png) icon to obtain the most recent list of automatic snapshot policies.

**Important**

You are charged for snapshots. For information about the billing of snapshots, see [Snapshots](/help/en/ecs/snapshots-1).

#### **(Optional) Elastic Ephemeral Disk**

An elastic ephemeral disk is a block storage device that can be created either alongside an ECS instance or separately created, with user-defined capacity for temporary data storage. It features high performance and cost-effectiveness. For more information, see [Elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks).

#### **(Optional) NAS File System**

If you have a large amount of data to share among multiple instances, we recommend that you use NAS file systems to reduce costs in data copying and synchronization.

Select an existing NAS file system or click **Create File System** to create a NAS file system in the File Storage NAS console. For more information, see the [Create a General-purpose NAS file system in the console](/help/en/nas/user-guide/create-a-file-system#section-5jo-0kj-jn5) section in the "Create a file system" topic. After the NAS file system is created, go back to the ECS instance buy page and click the ![refresh](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0572966261/p278001.png) icon to obtain the most recent list of NAS file systems. For information about how to mount a NAS file system to an instance, see [Mount a Alibaba Cloud NAS file system when you create an ECS instance](/help/en/nas/use-cases/mount-nas-file-systems-when-you-purchase-an-ecs-instance#task-2480876).

### **Bandwidths & Security Groups**

You can configure bandwidth and security group settings to allow the instance to access the Internet and communicate with other Alibaba Cloud resources, and ensure security of the instance during network communications.

#### **(Optional) Public IP Address**

To allow the instance to access the Internet, you must assign a public IP address to the instance. You can select Assign Public IPv4 Address in the Bandwidths & Security Groups section when you create an instance to have a public IP address automatically assigned to the instance. Alternatively, you can configure an EIP or a Network Address Translation (NAT) gateway after you create an instance to allow the instance to access the Internet. You must separately purchase an EIP and a NAT gateway. For more information, see [What is an EIP?](/help/en/eip/product-overview/what-is-eip#concept-zmv-hd3-vdb) and [What is NAT Gateway](/help/en/nat-gateway/product-overview/what-is-nat-gateway#concept-wpm-kfy-ydb)

Select **Assign Public IPv4 Address** and configure the **Bandwidth Billing Method** and **Bandwidth** or **Maximum Bandwidth** parameters.

For information about the billing of the public bandwidth, see [Public bandwidth billing](/help/en/ecs/public-bandwidth#publicIP-china).

**Bandwidth billing method**

**Description**

**Pay-by-bandwidth**

**You are charged based on the specified bandwidth value**. The actual outbound public bandwidth is capped at the specified bandwidth value.

-   Pay-by-bandwidth is suitable for scenarios that require stable bandwidth.
    
-   If your instance frequently communicates with external networks and requires long-term use of bandwidth or if the public bandwidth utilization of your instance exceeds 10%, we recommend that you select pay-by-bandwidth as the billing method for network usage.
    

**Pay-by-traffic**

**You are charged based on the actual traffic volume**. To prevent excessive fees that are caused by traffic bursts, you can specify a maximum bandwidth for outbound traffic.

-   Pay-by-traffic is suitable for scenarios in which bandwidth demands fluctuate.
    
-   If your instance has a public bandwidth utilization that does not exceed 10% and experiences occasional traffic spikes, we recommend that you select pay-by-traffic as the billing method for network usage.
    

**(Optional)** Select **Upgrade to CDT for Data Transfer Billing**. Cloud Data Transfer (CDT) provides an efficient and cost-effective method for managing public bandwidth expenses. CDT supports flexible billing, free data transfer quota, tiered pricing, and unified billing for multiple Alibaba Cloud services. Compared with the pay-by-traffic billing method, the CDT billing method provides specific discounts. For more information, see [What is CDT?](/help/en/cdt/product-overview/what-is-cdt)

**Important**

-   Beginning 00:00:00 on December 12, 2024, you can use CDT without the need to activate CDT.
    
-   After you enable CDT for cloud services, all existing and new pay-by-data-transfer instances are billed by CDT. Pay-by-bandwidth instances continue to be billed by the original Alibaba Cloud services. You can query your CDT bills on the Bill Details page in the Expenses and Costs console.
    
-   After you activate CDT, CDT allocates you a quota on free Internet data transfers of 220 GB per month. Among the 220 GB of free Internet data transfers, 20 GB can be used in **regions in the Chinese mainland**, and the other 200 GB can be used only in **regions outside the Chinese mainland**.
    

#### **Security Group**

A security group is a virtual firewall that is used to control the inbound and outbound traffic of instances in the security group. For more information, see [Overview of security groups](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb).

If the selected VPC does not have a security group, the system automatically creates a default security group. The default security group allows inbound traffic over SSH port 22, Remote Desktop Protocol (RDP) port 3389, and Internet Control Message Protocol (ICMP). You can add rules to allow inbound traffic over other ports based on your needs, such as port 80 and port 443. You can modify the security group configurations after the security group is created.

You can also select **an existing security group** or click the **New Security Group** tab and create a security group based on your business requirements. When you create a security group, configure the **Security Group Name**, **Security Group Type**, and **Open IPv4 Ports/Protocols** parameters.

**Note**

For information about how to configure a security group, see [Create a security group](/help/en/ecs/user-guide/create-a-security-group-1#concept-ocl-bvz-xdb).

#### **(Optional) ENI**

ENIs include primary ENIs and secondary ENIs. You cannot unbind primary ENIs from instances. You can only create and release the ENIs along with the instances. You can bind or unbind secondary ENIs to or from instances to allow traffic to be switched between instances. To create a secondary ENI when you create an instance, click the ![add-nic](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0572966261/p278943.png) icon and select a vSwitch to which the secondary ENI belongs.

**Note**

You can bind only one secondary ENI when you create an instance. You can also create secondary ENIs and bind them to an instance after the instance is created. For information about the number of ENIs that can be bound to an instance of each instance type, see [Instance family overview](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).

#### **(Optional) IPv6**

After you enable IPv6, the public IPv4 address depletion issue is resolved and a variety of devices can access the Internet.

Select **Assign IPv6 Address Free of Charge**. After you assign an IPv6 address, you must log on to the instance and configure an IPv6 address in the operating system to use the IPv6 address. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).

### **Management**

Management settings include the Logon Credential and Tag parameters for remote connection to instances and for easy retrieval and management of resources.

#### **Logon Credential**

**Logon Credential** is used to ensure secure logon to an ECS instance. For information about how to connect to an ECS instance, see [Choose an ECS remote connection method](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).

**Logon credential**

**Description**

**Key Pair**

**Note**

You can use key pairs to log on only to Linux instances.

Select a username to use to log on to the instance. Then, select an existing key pair or click **Create Key Pair** to create a key pair. After the key pair is created, go back to the ECS instance buy page and click the ![refresh](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0572966261/p278001.png) icon to obtain the most recent list of key pairs. For more information, see [Create an SSH key pair](/help/en/ecs/user-guide/create-an-ssh-key-pair#concept-wy4-th1-ydb).

You can set the Logon Username parameter to **root** or **ecs-user**.

**Warning**

If you log on to an ECS instance as the root user, you have the highest permissions on the instance. However, security risks may arise. We recommend that you log on to the ECS instance as the ecs-user user.

**Image Preset Password**

**Note**

Only **Custom Images** and **Shared Images** support this authentication method.

To use the password preset in the selected image to log on to the instance, select this authentication method. If you want to select this option, make sure that your selected image has a password preset.

**Custom Password**

Enter and confirm a password. Then, configure the Logon Username parameter.

-   For Linux instances, set the Logon Username parameter to **root** or **ecs-user**.
    
    **Warning**
    
    If you log on to an ECS instance as the root user, you have the highest permissions on the instance. However, security risks may arise. We recommend that you log on to the ECS instance as the ecs-user user.
    
-   For Windows instances, the default value is **administrator** for the Logon Username parameter.
    

**Set Later**

After the instance is created, bind a key pair or reset the instance password. For more information, see [Bind an SSH key pair](/help/en/ecs/user-guide/bind-an-ssh-key-pair-to-an-instance#concept-zzt-nl1-ydb) and [Reset the logon password of an instance](/help/en/ecs/user-guide/reset-the-logon-password-of-an-instance#concept-qct-gfl-xdb).

#### **(Optional) Tag**

Each **Tag** consists of a tag key and a tag value. You can add tags to identify created instances, cloud disks, and primary ENIs to facilitate resource retrieval and management. You can select existing tags or specify a tag key and a tag value to create new tags. For more information about tags, see [Tags](/help/en/ecs/user-guide/label-overview#concept-jzp-qtd-zdb).

### **(Optional) Advanced Settings**

Advanced Settings include the Hostname, Metadata Access Mode, and User Data parameters. You can use advanced settings to customize the displayed information or usage of the instance in the related console and operating system.

**Parameter**

**Description**

**Instance Name**, **Description**, **Hostname**, and **Sequential Suffix**

If you want to create multiple instances, you can configure sequential instance names and hostnames to facilitate management. For information about how to configure sequential instance names and hostnames, see [Batch configure sequential names or hostnames for multiple instances](/help/en/ecs/user-guide/batch-configure-sequential-names-or-hostnames-for-multiple-instances#concept-2004153).

**Instance RAM role**

An ECS instance can assume an instance Resource Access Management (RAM) role to obtain the permissions of the role. Then, the instance can securely make API requests to specific Alibaba Cloud services and manage specific Alibaba Cloud resources based on the temporary credentials provided by Security Token Service (STS) for the role.

Select an existing instance RAM role or click **Create Instance RAM Role** to create an instance RAM role in the RAM console. After the instance RAM role is created, go back to the ECS instance buy page and click the ![refresh](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0572966261/p278001.png) icon to obtain the most recent list of instance RAM roles. For more information, see [Instance RAM roles](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance#concept-v3v-zct-xdb).

**Metadata Access Mode**

ECS instance metadata contains information about instances in Alibaba Cloud. You can view the metadata of running instances and configure or manage the instances based on their metadata. For information about how to view instance metadata, see [Instance metadata](/help/en/ecs/user-guide/view-instance-metadata/#concept-dwj-y1x-wgb).

**User Data**

User data can be run as scripts on ECS instance startup to automate instance configurations or be passed to ECS instances as regular data. For more information, see [Customize initialization configurations for an instance](/help/en/ecs/user-guide/customize-the-initialization-configuration-for-an-instance).

In the User Data field, enter the user data that you prepared. If the user data is encoded in Base64, select **Enter Base64 Encoded Information**.

**Resource Group**

Resource groups allow you to manage resources across regions or services based on your business requirements and manage the permissions of resource groups. For more information, see [Resource groups](/help/en/ecs/user-guide/resource-groups#concept-fdn-wtm-cgb).

Select an existing resource group or click **Create Resource Group** to create a resource group in the Resource Management console. After the resource group is created, go back to the ECS instance buy page and click the ![refresh](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0572966261/p278001.png) icon to obtain the most recent list of resource groups. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).

**Deployment Set**

Deployment sets support the high availability strategy. After you apply the high availability strategy to a deployment set, all instances in the deployment set are distributed across different physical servers to ensure business availability and implement underlying disaster recovery.

Select an existing deployment set or click **Manage Deployment Sets** to create a deployment set. After the deployment set is created, go back to the ECS instance buy page and click the ![refresh](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0572966261/p278001.png) icon to obtain the most recent list of deployment sets. For more information, see [Deployment set](/help/en/ecs/user-guide/overview-43).

**Dedicated Host**

A dedicated host is a cloud host whose physical resources are exclusively reserved for a single tenant. Dedicated hosts meet strict security compliance requirements and support bring your own license (BYOL) when you migrate services to Alibaba Cloud.

Select an existing dedicated host or click **Create Dedicated Host** to create a dedicated host. After the dedicated host is created, go back to the ECS instance buy page and click the ![refresh](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0572966261/p278001.png) icon to obtain the most recent list of dedicated hosts. For more information, see [Create a DDH](/help/en/dedicated-host/getting-started/create-a-dedicated-host#task-fbz-5mn-tdb).

**Private Pool Type**

After an elasticity assurance or a capacity reservation is created, the system generates a private pool to reserve resources for a specific number of instances that have specific attributes. During the validity period of the elasticity assurance or capacity reservation, you always have access to the resources reserved in the private pool when you want to create instances. For more information, see [Overview of Resource Advisor](/help/en/ecs/user-guide/overview-29#concept-1997477).

**Note**

Only pay-as-you-go instances can be created from the resources reserved by elasticity assurances or capacity reservations.

-   **Open**: The capacity in open private pools is prioritized over public pool resources. If no capacity is available in private pools, the system uses public pool resources.
    
-   **None**: The capacity in private pools is not used.
    
-   **Targeted**: The system uses the capacity of the specified private pool or an open private pool to create instances. If no resource in the specified private pool is available, instances cannot be created.
    

## What to do next

-   **Connect to the instance**
    
    You can choose from a variety of tools, such as Workbench, Virtual Network Computing (VNC), and third-party client tools, to connect to the ECS instance. For more information, see [Choose an ECS remote connection method](/help/en/ecs/user-guide/connect-to-instance).
    
-   **Initialize data disks**
    
    If you add data disks when you create the instance, you must partition and format the data disks before you can use the disks. For more information, see [Initialize a data disk (Linux)](/help/en/ecs/user-guide/initialize-a-data-disk-whose-size-does-not-exceed-2-tib-on-a-linux-instance#concept-jl1-qzd-wdb) or [Initialize a data disk on a Windows instance](/help/en/ecs/user-guide/initialize-a-data-disk-up-to-2-tib-in-size-on-a-windows-instance).
    
-   **Deploy environments, build websites, and build applications**
    
    After you create the instance, you can use the instance to deploy environments, build websites, and build applications. For more information, see [Build a software development environment](/help/en/ecs/user-guide/build-a-software-development-environment/), [Build a website](/help/en/ecs/user-guide/build-a-website/), or [Build an application](/help/en/ecs/user-guide/build-an-application/).
    

## References

-   You can call the [RunInstances](/help/en/ecs/api-runinstances#doc-api-Ecs-RunInstances) operation to create one or more pay-as-you-go or subscription ECS instances.
    
-   You can query frequently asked questions about instances. For more information, see [FAQ about ECS instances](/help/en/ecs/user-guide/instance-faq/#concept-gqy-fyx-wgb).
    
-   You can use one of the following methods to obtain price and discount information:
    
    -   Call the [DescribePrice](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeprice) operation to obtain the most recent price information of ECS resources, including promotion rules, prices, and discounts.
        
    -   Run the following command. For example, you want to obtain the most recent price of an `ecs.c6.xlarge` instance in the China (Hangzhou) region.
        
    
    ```
    aliyun ecs DescribePrice --region cn-hangzhou --RegionId 'cn-hangzhou' --ResourceType instance --InstanceType 'ecs.c6.xlarge'
    ```
