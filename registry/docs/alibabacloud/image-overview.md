An Elastic Compute Service (ECS) image is a basic template used to create ECS instances and contains the operating system and pre-configuration data that are required to start and run an instance. When you create an ECS instance, you must select an image. The image can contain only system disk data or both system and data disk data, and must be compatible with your instance type. You can use images provided by Alibaba Cloud or other developers, or use custom images or images shared with you. This topic describes how to select an image when you create an ECS instance, image classification, and usage guidelines.

## **Select an image**

When you select an image to create an ECS instance, consider the following factors:

-   **Region for business deployment**
    
    Images are region-specific resources. Select the region for your business deployment to determine the scope of available images.
    
    -   Alibaba Cloud releases public images to all regions.
        
    -   Alibaba Cloud Marketplace images and community images are available only in the regions in which the images are released.
        
    -   Custom images are available in the regions in which you create or import the images, and can be copied to other regions.
        
-   **Operating system**
    
    Select an operating system based on your technology stack, team capabilities, and compliance requirements. For more information, see [Overview](/help/en/ecs/user-guide/public-mirroring-overview/).
    
    -   **Windows Server:** provides a user-friendly interface, good usability, and extensive software support. Windows Server is suitable for running Windows applications, enterprise web services, databases such as SQL Server, and file and print services.
        
    -   **Linux or Unix**
        
        -   **Alibaba Cloud Linux**: developed by Alibaba Cloud and compatible with the CentOS ecosystem.
            
        -   **Anolis OS**: an open source operating system.
            
        -   **CentOS**: an open source distribution of Red Hat Enterprise Linux (RHEL) that is no longer maintained and not recommended.
            
        -   **RHEL**: an operating system developed by Red Hat for enterprise applications with comprehensive features. You are charged if you use RHEL.
            

-   **Instance type compatibility**
    
    Images explicitly provide system architecture information, such as 32-bit or 64-bit, memory size requirements, and boot program. This helps you check whether an instance type meets the requirements.
    
    **System architecture**
    
    **Suitable memory size**
    
    **Instance type requirement**
    
    32-bit
    
    Less than 4 GiB of memory
    
    -   Memory: less than or equal to 4 GiB.
        
    -   CPU cores: up to 4 cores for Windows.
        
    
    64-bit
    
    At least 4 GiB of memory
    
    Memory: more than 4 GiB.
    
    For information about boot modes that are suitable for images and instance types, see [Instance boot modes](/help/en/ecs/user-guide/instance-startup-mode).
    
-   **Specific image requirements**
    
    If you want a clean system image, select a public image provided by Alibaba Cloud. If your business requires a custom image or you want to package the entire business into an image, select an Alibaba Cloud Marketplace image or create a custom image.
    
-   **Fees for operating system** **licenses** **used in** **images**
    
    When you use a paid commercial image or create an ECS instance from an image based on a paid commercial image, you are charged for operating system license fees. Proceed with caution. For information about image billing, see [Images](/help/en/ecs/images#concept-1937441).
    

## Image types

When you use images to create instances, Alibaba Cloud technical support varies based on the image type. The following table describes the types of images and related technical support.

**Image** **type**

**Description**

**Technical support**

[Public images](/help/en/ecs/user-guide/public-mirroring-overview/#concept-x4k-22r-wgb)

Operating system images officially provided by Alibaba Cloud, all of which are licensed and have passed Alibaba Cloud security and stability tests.

Public images, including Windows Server images and major Linux images, are provided. The images help you quickly build basic environments.

-   For [Alibaba Cloud Linux images](/help/en/alinux/product-overview/alibaba-cloud-linux-overview#concept-rgv-rvd-2hb), Alibaba Cloud provides technical support for issues you encounter when you use the Alibaba Cloud Linux operating system.
    
-   For [commercial and open source third-party images](/help/en/ecs/user-guide/public-mirroring-overview/#section-vcx-txj-dhb):
    
    -   For open source public images, contact the corresponding open source communities for technical support. Alibaba Cloud helps with troubleshooting.
        
    -   For commercial public images, Alibaba Cloud provides licenses and teams up with operating system vendors to provide technical support.
        

[Custom images](/help/en/ecs/user-guide/overview-36#concept-2553000)

Images that you create from ECS instances or snapshots.

Custom images are suitable for deploying specific configurations or environments.

For the custom images that are derived from public images, Alibaba Cloud provides the same technical support that is provided for public images.

For imported images:

-   For the open source images that are imported, Alibaba Cloud does not provide technical support.
    
-   For the commercial images that are imported and use a license provided by Alibaba Cloud, Alibaba Cloud teams up with the operating system vendors to provide technical support.
    

[Shared images](/help/en/ecs/user-guide/share-a-custom-image/#concept-e1j-jgm-xdb)

Images shared with you by other Alibaba Cloud accounts. Shared images are suitable for team collaboration scenarios.

Alibaba Cloud does not provide technical support. Contact the Alibaba Cloud accounts who shared the images for technical support.

[Alibaba Cloud Marketplace images](/help/en/ecs/user-guide/alibaba-cloud-market-mirror-images#concept-spg-mct-xdb)

Alibaba Cloud Marketplace images contain operating systems and pre-installed software and are thoroughly tested by the providers to ensure security and stability. Alibaba Cloud Marketplace images are classified into the following types based on the provider:

-   Images provided by Alibaba Cloud
    
-   Images provided by independent software vendors (ISVs) that are licensed by Alibaba Cloud Marketplace
    

Alibaba Cloud Marketplace images are suitable for deploying specific applications.

-   For Alibaba Cloud Marketplace images provided by Alibaba Cloud, Alibaba Cloud provides the same technical support that is provided for public images.
    
-   For Alibaba Cloud Marketplace images provided by ISVs, the ISVs provide technical support.
    

[Community images](/help/en/ecs/user-guide/overview-12#concept-2056865)

Community images are published by Alibaba Cloud users for public use.

Alibaba Cloud does not provide technical support.

**Note**

-   The information in the Technical support column is valid only before the end of life (EOL) of images. For information about how to obtain technical support after the EOL of an image, see [Operating system lifecycle](/help/en/ecs/user-guide/eol-overview#concept-2442176).
    
-   Alibaba Cloud regularly updates public image versions to provide new features and security patches updates. When you select a public image on the ECS instance buy page, the latest version of the image is provided. To create an earlier version of an image, call the [RunInstances](/help/en/ecs/api-runinstances) operation and specify the image ID in a request.
    
-   Alibaba Cloud regularly synchronizes images from official open source communities or operating system vendors to [Alibaba Cloud image site](https://developer.aliyun.com/mirror/). You can update new features and security patches as needed.
    
-   Security is a shared responsibility between Alibaba Cloud and customers. Alibaba Cloud implements cloud platform security, involving hardware, software, and networks. Customers implement ECS instance security, involving managing the operating systems (installing updates and security patches), installing application software packages or tools on the instances, and configuring security groups that Alibaba Cloud provides. For more information, see [ECS instance security](/help/en/ecs/user-guide/best-security-practices#task-2084924).
    

## **Relationships between custom images, instances, and snapshots**

An image serves as a template that is used to create and start ECS instances. An ECS instance is a virtual machine created by using an image and other parameters. Snapshots are point-in-time backups of ECS instance data.

Understanding the relationship between custom images, instances, and snapshots helps you better use custom images. The following figure shows that a snapshot is a data backup of an instance at a specific point in time. Both the ECS 1 instance and Snapshot can be used to create a custom image, and you can use the custom image to create the ECS 2 instance.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8291174471/CAEQORiBgMCF0smQsRkiIGI1ZTQ5YjExNTk2ZjQ1ZWQ4NjllNGYxMzMyMGJjMDI54955593_20250331101046.335.svg)

Both custom images and snapshots can be used for data backup, and differ in scenarios and features.

#### **Main differences**

**Difference**

**Image**

**Snapshot**

Definition

An image can create a full backup of an ECS instance, including configurations, the operating system, installed software, and data. For more information, see [Use an image to back up and restore data](/help/en/ecs/user-guide/disaster-recovery-solutions#262a15cf79fez).

Snapshots can create a point-in-time data backup for a single cloud disk or a set of cloud disks (snapshot-consistent group). For more information, see [Use a snapshot to back up and restore data](/help/en/ecs/user-guide/disaster-recovery-solutions#title-qiz-cek-hl8).

Scenarios

-   Back up systems that do not change in a short term, such as the application systems that are released or updated. When you create a custom image from an instance on which applications are installed and configured, you can use the custom image to create ECS instances in various scenarios, such as when you want to batch deploy applications on an ECS instance.
    
-   Migrate instances and data. For example, you can migrate ECS instances from the classic network to virtual private clouds (VPCs).
    
    Restore instances across regions or zones. For example, you can use a custom image to create an ECS instance in a different zone, or copy a custom image to a different region and then use the image copy to create an ECS instance in that region.
    

-   Back up disk data on a regular basis.
    
    You can use automatic snapshot policies to automatically create snapshots to back up data on a daily, weekly, or monthly basis.
    
-   Temporarily back up disk data. For example:
    
    -   Manually create a snapshot to back up system data before a temporary system change, such as system update or application release.
        
    -   Create a snapshot to back up data before you resize a system disk.
        
    -   Create a snapshot for a cloud disk and then create a cloud disk from the snapshot to migrate the disk data.
        

Features

-   Images can be directly used to create ECS instances.
    
-   Images include backup data of system disks. Whether the images include data disk backups varies based on whether the ECS instances have data disks or whether you add data disks when creating an image from a snapshot.
    
-   Images can be used to replace the system disk of the source instance or other instances, or to create ECS instances.
    

-   Snapshots cannot be directly used to create ECS instances.
    
-   Snapshots can back up data on system disks and data disks of instances.
    
-   Snapshots can be used to restore data on disks of the source instances.
    

#### **Other** correlations

-   When you create a custom image, take note of the following items:
    
    -   You can create a custom image from a system disk snapshot. For more information, see [Create a custom image from a snapshot](/help/en/ecs/user-guide/create-a-custom-image-from-a-snapshot-1#concept-gpg-t5l-xdb).
        
    -   When you create a custom image from an ECS instance, a snapshot is created for the system disk and each data disk on the instance. Then, all created snapshots constitute a custom image. For more information, see [Create a custom image from an instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance#concept-ech-5bm-xdb).
        
-   When you delete custom images and snapshots, take note of the following items:
    
    -   You can delete or retain the associated snapshots. For more information, see [Delete a custom image](/help/en/ecs/user-guide/delete-a-custom-image#concept-azs-5bt-xdb).
        
    -   The system checks whether a snapshot is associated with an image. If an association exists, you must delete the image before you can delete the snapshot. For more information, see [Delete a snapshot](/help/en/ecs/user-guide/delete-a-snapshot-1#task-1478465).
        

## Limits

**Item**

**Limit**

**Method to raise limits**

The maximum number of custom images that an Alibaba Cloud account can retain per region

You can view the quota based on the quota ID `q_user-image-count`. For more information, see the [View or increase the general quotas of ECS resources](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l) section of the "Manage ECS quotas" topic.

[View or increase the general quotas of ECS resources](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l)

The maximum number of accounts with which you can share a custom image

You can view the quota based on the quota ID `q_user-per-image-shared-user-count`. For more information, see the [View or increase the general quotas of ECS resources](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l) section of the "Manage ECS quotas" topic.

[View or increase the general quotas of ECS resources](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l)

Images supported by instance types

Instance types with 4 GiB of memory or more do not support 32-bit images.

N/A

## **Usage**

-   ### **Search for images**
    
    To quickly find an image among public images, Alibaba Cloud Marketplace images, custom images, and shared images to create ECS instances, follow the procedure described in [Find an image](/help/en/ecs/user-guide/find-an-image).
    
-   ### **Use custom images**
    
    Alibaba Cloud provides custom images to help you create custom images. For more information about custom images, see [Overview](/help/en/ecs/user-guide/overview-36). The following table describes the basic operations on custom images.
    
    **Operation**
    
    **Description**
    
    **References**
    
    Create an image
    
    You can create a custom image from an instance or a snapshot to copy the system environment. This eliminates the need for repeated configurations.
    
    -   [Create a custom image from an instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance#concept-ech-5bm-xdb)
        
    -   [Create a custom image from a snapshot](/help/en/ecs/user-guide/create-a-custom-image-from-a-snapshot-1#concept-gpg-t5l-xdb)
        
    
    Import an image
    
    You can import images from your on-premises device or from other cloud service providers to Alibaba Cloud to generate custom images.
    
    [Import an image](/help/en/ecs/user-guide/import-images/)
    
    Update an image
    
    You can use CloudOps Orchestration Service (OOS) to update a custom image to update the software and configurations of an ECS instance that uses the custom image.
    
    [Update a custom image](/help/en/ecs/user-guide/update-a-custom-image#task-2320984)
    
    Copy an image
    
    You can copy images to deploy ECS instances across regions or change the encryption status of encrypted and unencrypted images in the same region or across regions.
    
    [Copy a custom image](/help/en/ecs/user-guide/copy-an-image#concept-a3m-5dm-xdb)
    
    Share an image
    
    You can share a custom image that you created to other Alibaba Cloud accounts. The Alibaba Cloud accounts can create instances from the image that you shared.
    
    [Share a custom image](/help/en/ecs/user-guide/shared-images)
    
    Export an image
    
    You can export a custom image that you created to an OSS bucket and then download the image to your on-premises device.
    
    [Export a custom image](/help/en/ecs/user-guide/export-a-custom-image#concept-wfq-vdt-xdb)
    
    Modify image information
    
    To facilitate custom image management, you can change the name, description, Non-Volatile Memory Express (NVMe) drive settings, and boot mode of a custom image based on your business requirements.
    
    [Modify the attributes and tags of an image](/help/en/ecs/user-guide/modify-the-attributes-of-a-custom-image)
    
    Delete an image
    
    You can delete a custom image that you no longer need.
    
    [Delete a custom image](/help/en/ecs/user-guide/delete-a-custom-image#concept-azs-5bt-xdb).
    
-   ### **Use Image Builder**
    
    [Image Builder](/help/en/ecs/user-guide/overview-33/) provides a one-stop solution to allow you to configure custom image content, repair and test images, distribute images across regions, and share images across accounts. Image Builder defines a series of tasks during the image building process in an image template and executes the image building task. In the image template, you can specify the source image and image components and determine whether to repair an image, enable cross-region distribution, and share images cross accounts.
