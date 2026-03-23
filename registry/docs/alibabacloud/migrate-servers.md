Alibaba Cloud provides various methods to migrate servers to Alibaba Cloud and in Alibaba Cloud. For example, you can migrate on-premises physical servers or Tencent Cloud servers to Alibaba Cloud, and migrate Elastic Compute Service (ECS) instances across Alibaba Cloud accounts in Alibaba Cloud by using a migration method based on your business requirements.

**Note**

Service Migration Center (SMC) can be used for migration. SMC is a migration platform provided by Alibaba Cloud. SMC provides migration services with universal capabilities, consistent user experience, and high efficiency. This meets your migration requirements when you use Alibaba Cloud services. For more information, see [What is SMC?](/help/en/smc/product-overview/what-is-smc#concept-592998)

## **Migrate servers to Alibaba Cloud**

### **Migrate on-premises servers to Alibaba Cloud**

You can migrate on-premises physical machines and virtual machines (VMs) to Alibaba Cloud to meet business requirements in various scenarios.

#### **Migration scenarios**

-   **Migrate an on-premises physical machine to Alibaba Cloud**
    
    You can migrate an on-premises physical machine, such as a server in a self-managed Internet Data Center (IDC), to Alibaba Cloud.
    
-   **Migrate on-premises VMs to Alibaba Cloud**
    
    Migrate on-premises VMs, such as VMware, VirtualBox, Xen, Kernel-based Virtual Machine (KVM), and Hyper-V, to Alibaba Cloud.
    

#### **Procedure**

Select a migration method based on your business requirements.

## Import custom images

You can import a server image file from an on-premises machine to Alibaba Cloud to create a custom image. Then, use the custom image to create ECS instances. Perform the following steps:

**1\. Prepare an image environment.**

Custom images must meet specific requirements before they can be imported to ECS. For more information, see [Instructions for importing images](/help/en/ecs/user-guide/instructions-for-importing-images/).

-   Linux
    
    1.  Install cloud-init on an on-premises server. For more information, see [Install cloud-init](/help/en/ecs/user-guide/install-cloud-init#concept-e3k-vnm-xdb).
        
        **Note**
        
        If the operating system contained in the image is not supported by Alibaba Cloud and cloud-init cannot be installed, select **Customized Linux** when you import the image. For more information, see [Customize Linux images](/help/en/ecs/user-guide/customize-linux-images#concept-nt5-4km-xdb).
        
    2.  Install the virtio driver on the on-premises server. For more information, see [Install the virtio driver](/help/en/ecs/user-guide/install-the-virtio-driver).
        
    3.  Use the image check tool on the on-premises server to check whether the image meets the import conditions and fix exceptions. For more information, see [Check and repair an image](/help/en/ecs/user-guide/check-whether-an-image-meets-the-import-requirements#StandardImageFacilitator).
        
-   Windows
    
    1.  Install Vminit on an on-premises server to allow ECS instances that run the image to complete the initialization configurations. For more information, see [Install Vminit](/help/en/ecs/user-guide/install-vminit).
        
    2.  Install the virtio driver on the on-premises server. For more information, see [Install the virtio driver](/help/en/ecs/user-guide/install-the-virtio-driver).
        

**2\. Create an image file.**

You can use the built-in tools of the on-premises server or third-party tools to create an image file. For example, you can use the built-in Windows backup and restoration feature or the Linux command line tool.

**Note**

ECS allows you to import images only in the RAW, Virtual Hard Disk (VHD), QEMU Copy-On-Write version 2 (QCOW2), or Virtual Machine Disk (VMDK) format. If your image is in another format, you must convert the image to a supported format before you import the image to Alibaba Cloud. For more information, see [Convert the format of an image](/help/en/ecs/user-guide/convert-the-format-of-an-image).

**3\. Import the on-premises image file to Alibaba Cloud.**

1.  You must upload the image file to an Object Storage Service (OSS) bucket.
    
    1.  Create an OSS bucket. For more information, see [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4).
        
    2.  Upload the image file to the OSS bucket.
        
        -   If the size of the image file exceeds 5 GB, use the multipart upload feature to upload the file. For more information, see [Multipart upload](/help/en/oss/user-guide/multipart-upload).
            
        -   If the size of the image file does not exceed 5 GB, use the simple upload feature to upload the file. For more information, see [Simple upload](/help/en/oss/user-guide/simple-upload).
            
2.  Import the custom image in the ECS console. For more information, see [Import a custom image](/help/en/ecs/user-guide/import-a-custom-image).
    
    If the image that you want to import contains a Red Hat Enterprise Linux (RHEL) or SUSE Linux Enterprise Server (SLES) operating system, you cannot select **Alibaba Cloud License** when you import the image. Alibaba Cloud provides the software license feature that allows you to purchase software licenses for RHEL and SLES on specific ECS instances. To use the feature, submit a ticket. For more information about the software license feature, see [Purchase a software license for an ECS instance (invitational preview)](/help/en/ecs/user-guide/purchase-software-licenses-for-ecs-instances).
    

**4\. Create ECS instances from the custom image.**

You can use the custom image that you imported to create ECS instances that have the same operating system, applications, and data. For more information, see [Use a custom image to create one or more instances](/help/en/ecs/user-guide/use-a-custom-image-to-create-one-or-more-instances).

**Note**

You can use the custom image to replace the operating system (system disk) of an ECS instance. For more information, see [Replace the operating system (system disk) of an instance](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance).

## Use SMC

You can use SMC to migrate business from on-premises physical machines to Alibaba Cloud. SMC improves migration efficiency.

For more information, see [Migrate a server to an ECS instance](/help/en/smc/user-guide/migrate-the-source-server-to-the-ecs-instance).

**Important**

If you migrate a VMware VM, you can use the agent-free migration mode. This mode allows you to migrate VMware VMs without agents. This way, you do not need to modify the settings of the operating system of the migration source or consume computing resources of the operating system in the migration source. This helps ensure server security and performance. For more information, see [Migrate VMware VMs without agents](/help/en/smc/user-guide/migrate-vmware-vms-without-agents).

### **Migrate third-party cloud servers to Alibaba Cloud**

You can migrate cloud servers from other cloud service providers to Alibaba Cloud to meet business requirements in various scenarios.

#### **Migration scenario**

**Migrate servers of third-party cloud service providers to Alibaba Cloud**

You can migrate servers from third-party cloud platforms, such as Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), Tencent Cloud, UCloud, China Telecom e-Cloud, and QingCloud, to Alibaba Cloud.

#### **Procedure**

Select a migration method based on your business requirements.

## Import custom images

You can import a server image file from a third-party cloud service provider to Alibaba Cloud to create a custom image. Then, use the custom image to create ECS instances. In this example, a Linux Tencent Cloud server is migrated to Alibaba Cloud. Perform the following steps:

**1\. Prepare an image environment.**

Custom images must meet specific requirements before they can be imported to Alibaba Cloud. For more information, see [Instructions for importing images](/help/en/ecs/user-guide/instructions-for-importing-images/).

1.  Install cloud-init on the Tencent Cloud server that you want to migrate to ECS. For more information, see [Install cloud-init](/help/en/ecs/user-guide/install-cloud-init#concept-e3k-vnm-xdb).
    
    **Note**
    
    If the operating system contained in the image is not supported by Alibaba Cloud and cloud-init cannot be installed, select **Customized Linux** when you import the image. For more information, see [Customize Linux images](/help/en/ecs/user-guide/customize-linux-images#concept-nt5-4km-xdb).
    
2.  Install the virtio driver on the Tencent Cloud server. For more information, see [Install the virtio driver](/help/en/ecs/user-guide/install-the-virtio-driver).
    
3.  Use the image check tool on the Tencent Cloud server to check whether the image meets the import conditions and fix exceptions. For more information, see [Check and repair an image](/help/en/ecs/user-guide/check-whether-an-image-meets-the-import-requirements#StandardImageFacilitator).
    

**2\. Export the image file from the Tencent Cloud server.**

1.  Create an image from the Tencent Cloud server that you want to migrate.
    
2.  Export the image file from the Tencent Cloud server to an OSS bucket.
    
    **Note**
    
    ECS allows you to import images only in the RAW, VHD, QCOW2, or VMDK format. Make sure that you select a supported format when you export the image file.
    
3.  Download the image file from the OSS bucket to your on-premises computer.
    

**3\. Import the image file that you downloaded to Alibaba Cloud.**

1.  You must upload the image file to an OSS bucket.
    
    1.  Create an OSS bucket. For more information, see [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4).
        
    2.  Upload the image file to the OSS bucket.
        
        -   If the size of the image file exceeds 5 GB, use the multipart upload feature to upload the file. For more information, see [Multipart upload](/help/en/oss/user-guide/multipart-upload).
            
        -   If the size of the image file does not exceed 5 GB, use the simple upload feature to upload the file. For more information, see [Simple upload](/help/en/oss/user-guide/simple-upload).
            
2.  Import the custom image in the ECS console. For more information, see [Import a custom image](/help/en/ecs/user-guide/import-a-custom-image).
    
    If the image that you want to import contains a Red Hat Enterprise Linux (RHEL) or SUSE Linux Enterprise Server (SLES) operating system, you cannot select **Alibaba Cloud License** when you import the image. Alibaba Cloud provides the software license feature that allows you to purchase software licenses for RHEL and SLES on specific ECS instances. To use the feature, submit a ticket. For more information about the software license feature, see [Purchase a software license for an ECS instance (invitational preview)](/help/en/ecs/user-guide/purchase-software-licenses-for-ecs-instances).
    

**4\. Create ECS instances from the custom image.**

You can use the custom image that you imported to create ECS instances that have the same operating system, applications, and data. For more information, see [Use a custom image to create one or more instances](/help/en/ecs/user-guide/use-a-custom-image-to-create-one-or-more-instances).

**Note**

You can use the custom image to replace the operating system (system disk) of an ECS instance. For more information, see [Replace the operating system (system disk) of an instance](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance).

## Use SMC

You can import a migration source and create a migration job for the migration source. If the status of the migration job is Completed, the migration is successful. For more information, see [Migrate a server to an ECS instance](/help/en/smc/user-guide/migrate-the-source-server-to-the-ecs-instance).

## **Migrate ECS instances in Alibaba Cloud**

### **Migrate ECS instances within or across Alibaba Cloud accounts or regions**

If you want to migrate data between ECS instances within or across Alibaba Cloud accounts or regions due to insufficient resource inventory, cost optimization, disaster recovery, or disk capacity scale-down, you can select a migration method based on the migration scenario.

**Migration scenario**

**Description**

**Procedure**

**Migrate an ECS instance within the same account and region**

Migrate an ECS instance within the same Alibaba Cloud account and region. The destination ECS instance can be in the same zone as or a different zone from the source ECS instance.

**Note**

In this migration scenario, the source and destination instances belong to the same Alibaba Cloud account.

Select a migration method based on your business requirements.

## Use the ECS replication feature

After you copy the image of a source ECS instance to the same region, use the image to create an ECS instance. Perform the following steps:

1.  Create a **custom image** from the source ECS instance. For more information, see [Create a custom image from an instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance).
    
2.  Create an ECS instance from the custom image. For more information, see [Create an instance by using a custom image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image#task-w5v-sgv-xdb).
    
    **Note**
    
    You can also use the custom image to replace the operating system (system disk) of another existing ECS instance in the destination region. For more information, see [Replace the operating system (system disk) of an instance](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance).
    

## Use SMC

During migration, select the region of the source ECS instance as the destination region. For more information, see [Migrate data between ECS instances that belong to the same Alibaba Cloud account or different Alibaba Cloud accounts](/help/en/smc/user-guide/migrate-servers-between-ecs-instances).

**Migrate data between ECS instances in the same Alibaba Cloud account and across zones**

-   Migrate an ECS instance within the same Alibaba Cloud account and region. The destination ECS instance and the source ECS instance must be in different zones.
    
-   You can change the instance type (number of vCPUs and memory size) within the same instance family when you migrate an instance across zones.
    

**Note**

In this migration scenario, the source and destination instances are the same and no new instances are created.

When you migrate an ECS instance, select the **destination zone** and the instance type that you want to use to replace the original instance type based on your business requirements. For more information, see [Change instance types across zones](/help/en/ecs/user-guide/change-instance-types-across-zones).

**Migrate an ECS instance within the same Alibaba Cloud account and across regions**

Migrate an ECS instance within the same Alibaba Cloud account and across regions.

**Note**

In this migration scenario, the source and destination instances belong to the same Alibaba Cloud account.

Select a migration method based on your business requirements.

## Use the ECS replication feature

After you copy the image of a source ECS instance to a destination region, you can obtain the image copy that has a different ID in the region. When you copy the source image, you can specify the configurations of the image copy, such as the tags, resource group, and encryption attributes. Then, you can use the image copy to create ECS instances. Perform the following steps:

1.  Create a custom image from the source ECS instance. For more information, see [Create a custom image from an instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance).
    
2.  Copy the custom image to the destination region. For more information, see [Copy a custom image](/help/en/ecs/user-guide/copy-an-image#concept-a3m-5dm-xdb).
    
3.  Create an ECS instance from the image copy. For more information, see [Create an instance by using a custom image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image#task-w5v-sgv-xdb).
    
    **Note**
    
    You can also use the custom image to replace the operating system (system disk) of another existing ECS instance in the destination region. For more information, see [Replace the operating system (system disk) of an instance](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance).
    

## Use SMC

During migration, select a destination region. For more information, see [Migrate data between ECS instances that belong to the same Alibaba Cloud account or different Alibaba Cloud accounts](/help/en/smc/user-guide/migrate-servers-between-ecs-instances).

**Migrate an ECS instance across Alibaba Cloud accounts and in the same region**

Migrate an ECS instance across Alibaba Cloud accounts and within the same region.

**Note**

In this migration scenario, the source and destination instances belong to different Alibaba Cloud accounts.

Select a migration method based on your business requirements.

## Use the ECS replication feature and the image sharing feature

You can share an image with other Alibaba Cloud accounts. Then, the accounts can use the image to create ECS instances. Perform the following steps:

1.  Create a custom image from the source ECS instance. For more information, see [Create a custom image from an instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance).
    
2.  Share the image with another Alibaba Cloud account. For more information, see [Share a custom image](/help/en/ecs/user-guide/share-a-custom-image/#concept-e1j-jgm-xdb).
    
3.  Create an ECS instance from the shared image. For more information, see [Create an instance by using a custom image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image#task-w5v-sgv-xdb).
    
    **Note**
    
    You can also use the custom image to replace the operating system (system disk) of another existing ECS instance in the destination region. For more information, see [Replace the operating system (system disk) of an instance](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance).
    

## Use SMC

When you migrate data, make sure that you can distinguish the source Alibaba Cloud account and the destination Alibaba Cloud account to prevent reverse migration. Select the region of the source ECS instance as the destination region. For more information, see [Migrate data between ECS instances that belong to the same Alibaba Cloud account or different Alibaba Cloud accounts](/help/en/smc/user-guide/migrate-servers-between-ecs-instances).

**Migrate an ECS instance across Alibaba Cloud accounts and regions**

Migrate an ECS instance across Alibaba Cloud accounts and regions.

**Note**

In this migration scenario, the source and destination instances are two instances under different Alibaba Cloud accounts.

Select a migration method based on your business requirements.

## Use the ECS replication feature and the image sharing feature

After you copy an image of a source ECS instance to a destination region, you can share the image copy with other Alibaba Cloud accounts. Then, the accounts can use the image copy to create ECS instances. Perform the following steps:

1.  Create a custom image from the source ECS instance. For more information, see [Create a custom image from an instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance).
    
2.  Copy the custom image to the destination region. For more information, see [Copy a custom image](/help/en/ecs/user-guide/copy-an-image#concept-a3m-5dm-xdb).
    
3.  Share the image copy with another Alibaba Cloud account. For more information, see [Share a custom image](/help/en/ecs/user-guide/share-a-custom-image/#concept-e1j-jgm-xdb).
    
4.  Create an ECS instance from the shared image. For more information, see [Create an instance by using a custom image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image#task-w5v-sgv-xdb).
    
    **Note**
    
    You can also use the custom image to replace the operating system (system disk) of another existing ECS instance in the destination region. For more information, see [Replace the operating system (system disk) of an instance](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance).
    

## Use SMC

When you migrate data, make sure that you can distinguish the source Alibaba Cloud account and the destination Alibaba Cloud account to prevent reverse migration. Select the region to which you want to migrate data as the destination region. For more information, see [Migrate data between ECS instances that belong to the same Alibaba Cloud account or different Alibaba Cloud accounts](/help/en/smc/user-guide/migrate-servers-between-ecs-instances).

### **ECS instance-related migration**

#### **Migrate the operating system of an ECS instance**

**Migration scenario**

**Description**

**References**

**Migrate an operating system**

If you require maintenance and technical support after technical support for your operating system is suspended due to reasons such as end of life (EOL), third-party support changes, and open source project evolution, you can migrate or upgrade the operating system.

[Migrate and upgrade the operating system of an ECS instance](/help/en/ecs/user-guide/migrate-the-operating-system-of-an-ecs-instance-1)

#### **Migrate data from a simple application server to an ECS instance**

**Migration scenario**

**Description**

**References**

**Migrate data from a simple application server to an ECS instance**

If the network configurations or performance of the current simple application server cannot meet your business requirements, you can smoothly migrate data from the simple application server to an ECS instance for flexible resource configuration. The source simple application server and the destination ECS instance must belong to the same Alibaba Cloud account but can reside in different regions.

[Migrate data from a simple application server to an ECS instance](/help/en/simple-application-server/use-cases/migrate-data-from-lightweight-application-servers-to-ecs-instances-through)

#### **Migrate an ECS instance between dedicated hosts or between a dedicated host and a shared host**

**Migration scenario**

**Description**

**References**

**Migrate an ECS instance between dedicated hosts**

As your business grows and changes, resource allocation on your dedicated hosts may become imbalanced. To resolve this issue, you can migrate an ECS instance between dedicated hosts to balance resource allocation. This enhances resource utilization and ensures the high availability of your workloads.

[Migrate an ECS instance between dedicated hosts](/help/en/dedicated-host/user-guide/migrate-ecs-instances-between-different-dedicated-hosts-in-the-console)

**Migrate an ECS instance from a shared host to a dedicated host**

You can migrate an ECS instance from a shared host to a specific dedicated host based on your business requirements. This allows for flexible business migration and allows the ECS instance to exclusively use all physical resources of the dedicated host.

[Mgrate an ECS instance from a shared host to a dedicated host](/help/en/dedicated-host/user-guide/migrate-an-ecs-instance-from-a-shared-host-to-a-dedicated-host)

**Migrate an ECS instance from a dedicated host to a shared host**

If your business no longer requires exclusive resources, you can migrate an ECS instance from a dedicated host to a shared host to reduce deployment costs.

[Migrate an ECS instance from a dedicated host to a shared host](/help/en/dedicated-host/user-guide/migrate-an-ecs-instance-from-a-dedicated-host-to-a-shared-host)

#### **Migrate an ECS instance from the classic network to a virtual private cloud (VPC)**

**Migration scenario**

**Description**

**References**

**Migrate an ECS instance from the classic network to a VPC**

Compared with an ECS instance in the classic network, an ECS instance in a VPC is more secure and provides more features, such as the capability to associate elastic IP addresses (EIPs).

[Migrate ECS instances from the classic network to a VPC](/help/en/ecs/user-guide/migrate-ecs-instances-from-the-classic-network-to-a-vpc)

#### Migrate x86 applications to a YiTian instance

**Migration scenario**

**Description**

**References**

**Migrate x86 applications to a YiTian instance**

YiTian-based ECS instances (**YiTian ECS instances**) perform fast path acceleration on chips to greatly improve storage performance, network performance, and computing stability. YiTian ECS instances are suitable for various scenarios, such as cloud native applications, video encoding and decoding, high-performance computing, CPU-based machine learning, and gaming services.

[Migrate x86 applications to a YiTian instance](/help/en/ecs/user-guide/the-application-of-x86-migrated-to-handheld-device-maker-e-ten-cloud-server/)

## **What to do next**

-   After you migrate a server, take note of the **ICP Filing** information. If the service domain name changes, you may need to **re-apply for an ICP filing**. For more information, see [ICP filing process](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview).
    
-   After you migrate a server, the auto-assigned public IP address of the server changes. Take note of **domain name resolution**.
    
    -   If a domain name is bound to the source server, the public IP address of the server is changed after the migration. In this case, resolve the domain name to the new public IP address of the server. For more information, see [Add an A record for a website domain name](/help/en/dns/add-an-a-record-to-a-website-domain).
        
    -   If you want the private IP address to remain unchanged, you can modify the private IP address after the migration is complete. For more information, see [Primary private IP address](/help/en/ecs/user-guide/modify-a-private-ip-address#task-bng-thn-xdb).
        
-   After you migrate a server, the underlying hardware of the server may change, and the application licenses that are associated with the underlying hardware may become invalid. Check the licenses based on your business requirements.
    

## **Reference**

If you want to migrate data from a self-managed database, you can use Data Transmission Service (DTS). For more information, see [Migrate a self-managed database](/help/en/ecs/user-guide/migrate-a-self-managed-database/).
