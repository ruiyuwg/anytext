An Elastic Compute Service (ECS) instance is a virtual server that includes basic components such as vCPUs, memory, an operating system (OS), network configurations, and disks. You can use management tools provided by Alibaba Cloud, such as the ECS console, ECS API, and ECS SDKs, to create, manage, and release ECS instances and deploy or maintain applications on the instances in the same manner as with on-premises servers. ECS instances provide more flexible and consistent computing and storage capabilities than on-premises servers.

## **Basic instance configurations**

The following basic configurations of each ECS instance determine the basic resources that the instance requires:

### **Instance type**

Instance types offer varying combinations of compute, memory, and storage capacities to fit different use cases. Instance types must be used together with images, block storage devices, and network resources to create ECS instances that serve different purposes.

ECS provides a variety of instance families for common use scenarios. Each instance family consists of multiple instance types that each may have the following hardware specifications: vCPUs, memory, virtual GPUs (vGPUs), local storage (available for instance types with local SSDs and big data instance types), network cards, network performance (network bandwidth and packet forwarding rate), and cloud disk performance (cloud disk bandwidth and IOPS). Select appropriate instance types based on your performance, price, and workload requirements. For more information, see [Classification and naming of instance types](/help/en/ecs/user-guide/instance-specification-naming-and-classification#section-e9r-xkf-z15) and [Instance type selection](/help/en/ecs/user-guide/best-practices-for-instance-type-selection).

### **Image**

Images contain information that is required to run ECS instances, such as OSs and initialization data of applications. Alibaba Cloud provides ready-to-use OS images for Windows Server and mainstream Linux distributions. You can also create or import custom images to eliminate the need for repetitive configuration work during instance creation. In Alibaba Cloud Marketplace, image providers provide images that are pre-installed with various runtime environments and software applications to suit different scenarios, such as website building, application development, and visualized management. You can select Alibaba Cloud Marketplace images based on your business requirements. For more information, see [Overview of images](/help/en/ecs/user-guide/image-overview).

### **Storage**

System disks and data disks are attached to instances to provide storage capacity. System disks store images that are used to boot instances. Each instance must have a system disk. The first time an ECS instance starts, the OS is installed and initial configurations are performed based on the image that is stored on the system disk.

Cloud disks can be used as system disks or data disks. Local disks can be used only as data disks and are available only for specific instance types, such as big data instance types and instance types with local SSDs. If you want more storage space for your instance, you can extend the cloud disks on the instance or attach additional cloud disks to the instance after the instance is created. For more information, see [Overview](/help/en/ecs/user-guide/overview-19#concept-e1g-44g-ydb) and [Attach a data disk](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb).

Business data is an important asset. Cloud disks adopt a triplicate mechanism to ensure data durability. To ensure data availability, we recommend that you back up data on a regular basis. You can create snapshots of cloud disks to back up disk data. If you use local disks, implement data redundancy at the application layer to ensure data availability.

### **Network**

Elastic network interfaces (ENIs) are virtual network interfaces that provide network connectivity and IP addresses for ECS instances deployed in virtual private clouds (VPCs). Each ECS instance in a VPC has a default ENI. You can bind ENIs to or unbind ENIs from ECS instances to allow the instances to access the Internet or communicate with other cloud resources over the internal network or the Internet. For more information, see [Overview of ENIs](/help/en/ecs/user-guide/eni-overview).

During communication over the Internet, addressing can be performed by using private IP addresses and domain names. For more information, see [Internal network access within a VPC](/help/en/ecs/user-guide/internal-network-access-within-a-vpc).

To allow an ECS instance to access or communicate over the Internet, enable public bandwidth for the instance. For more information, see [Enable public bandwidth](/help/en/ecs/user-guide/best-practices-for-configuring-public-bandwidth).

In addition to the preceding basic configurations, you can specify custom network configurations, security groups, OS configurations, and grouping configurations for instances. For more information, see [Custom launch](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).

## **Instance lifecycle**

The lifecycle of an ECS instance starts from the time when the instance is created and ends when the instance is released. During the lifecycle, an instance transitions through different states.

### **Instance states**

Instance states are classified into console-based and API-based states based on how the states can be queried. Console-based states are instance states that can be queried in the ECS console. For more information, see [View instance information](/help/en/ecs/user-guide/view-instance-information). API-based states are instance states that can be queried by calling the [DescribeInstanceStatus](/help/en/ecs/api-describeinstancestatus#DescribeInstanceStatus) or [DescribeInstances](/help/en/ecs/api-describeinstances#DescribeInstances) operation in the ECS OpenAPI Portal. An API-based state, such as the `Stopped` state, may correspond to multiple console-based states based on the specific scenario, such as whether a subscription instance expires or whether a payment is overdue for an instance in your Alibaba Cloud account.

The following table describes the different lifecycle states of an instance.

**Note**

-   Transitory states are the states that an instance temporarily enters when the instance transitions between states. Example: Starting (Starting).
    
-   Stable states are the states in which an instance operates in a definite mode. Examples: Running (Running) and Stopped (Stopped).
    

**Console-based state**

**API-based state**

**State attribute**

**Status description**

Pending

Pending

Transitory

After an instance is created, the instance is in this state before the instance enters the Starting (Starting) state.

Starting

Starting

Transitory

After an instance is created, started, or restarted, the instance is in this state before the instance enters the Running (Running) state.

Running

Running

Stable

An instance is in this state when the instance is running.

**Important**

The Running state indicates that an instance is running. However, this state does not always indicate that the OS of the instance is running. If the OS of the instance is running, network services work as expected and you can connect to the instance by using various methods, such as SSH or Remote Desktop Protocol (RDP). You can check the health status of the instance to determine whether the OS of the instance is running. For more information, see [View the health status of ECS instances](/help/en/ecs/user-guide/view-the-health-status-of-an-instance).

Expiring

Running

Stable

When a subscription instance is about to expire, the instance enters this state but continues to run as expected. We recommend that you renew the instance at the earliest opportunity. For more information, see [How to renew a subscription ECS instance](/help/en/ecs/manually-renew-an-instance-1).

Stopping

Stopping

Transitory

After you stop or hibernate an instance, the instance enters this state before the instance enters the Stopped (Stopped) state.

Stopped

Stopped

Stable

When an instance is created but not started or after an instance is stopped or hibernated, the instance remains in this state.

**Note**

After you create an instance in the ECS console or by calling the RunInstances operation, the instance is automatically started.

Expired

Stopped

Stable

When a subscription instance expires or when a pay-as-you-go instance is stopped due to an overdue payment, the instance enters this state and is awaiting release. For information about whether instance resources are retained, see [Subscription](/help/en/ecs/subscription#section-u49-w17-fbd) and [Pay-as-you-go](/help/en/ecs/pay-as-you-go-1#section-rpb-4x2-zdb).

Locked

Stopped

Stable

When an instance is locked due to security reasons, the instance enters this state. You can go to the [Network security control events](https://yundun.console.aliyun.com/?spm=5176.ecscore_overview.top-nav.dsc.787c4df5pQZd7U&p=sc#/sc/punishList) page in the Security Control console to request to unlock the instance.

To Be Released

Stopped

Stable

When you apply for a refund for an unexpired subscription instance, the instance enters this state.

### **Transitions between instance states**

The following figure shows the transitions between instance states. For information about each instance state, see the [Instance states](#82500ee589iso) section of this topic.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3268501771/CAEQMhiBgMCzitO0pBkiIDljYzBiY2E2Y2QzMTQ1MmVhOTkzYTEyMDQ2NjBhNWUw3963382_20230830144006.372.svg)

To manage the status of ECS instances, you can perform the following operations:

-   [Create an instance](/help/en/ecs/user-guide/create-instances/#concept-nx2-nzv-wgb)
    
    After an ECS instance is created, the instance enters the Pending (Pending) state, the Starting (Starting) state, and then the Running (Running) state. You can connect to the instance to perform O&M operations. You can use different connection tools, such as SSH, RDP, and Session Manager, based on the OS of the instance. For more information, see [Connect to an instance](/help/en/ecs/user-guide/connect-to-an-instance-overview/).
    
-   [Stop an instance](/help/en/ecs/user-guide/stop-an-instance#task-1909833)
    
    To perform specific operations on an ECS instance, such as replacing the OS, changing the private IP address, and changing the instance type of a pay-as-you-go instance, you must first stop the instance. After you stop an ECS instance, the instance enters the Stopping (Stopping) state and then the Stopped (Stopped) state.
    
    If a pay-as-you-go ECS instance is stopped in economical mode, the computing resources (vCPUs and memory) and static public IP address (also known as system-assigned or auto-assigned public IP address) of the instance are released. You are no longer charged for these resources. Other resources of the instance, including the disks and the associated elastic IP address (EIP), are retained, and you are still charged for these resources.
    
-   [Start an instance](/help/en/ecs/user-guide/start-an-instance#concept-mnp-lsl-xdb)
    
    If an ECS instance is in a state (such as Stopped) in which the instance cannot provide services, you must start the instance before you can use the instance. After you start an ECS instance, the instance enters the Starting (Starting) state and then the Running (Running) state.
    
-   [Restart an instance](/help/en/ecs/user-guide/restart-instances#concept-yxw-dwm-xdb)
    
    In most cases, you may need to restart ECS instances for maintenance purposes, such as to apply system updates or to save and apply configurations. After you restart an ECS instance, the instance enters the Stopping (Stopping) state, the Starting (Starting) state, and then the Running (Running) state.
    
    When an ECS instance is restarted, the instance may be moved to a new host. If you want your instance to remain on the same host, you can purchase a dedicated host and associate the instance with the host.
    
-   [Release an instance](/help/en/ecs/user-guide/release-an-instance#concept-jfp-wbf-5db)
    
    If you no longer require an ECS instance, you can release the instance to prevent unnecessary costs.
    
    After an ECS instance is released, the instance ID, static public IP address, system disk, and data disks for which the Release Disk with Instance attribute is enabled are released and cannot be restored. If the instance is associated with an EIP, the EIP is automatically disassociated from the instance and retained. The data disks for which the Release Disk with Instance attribute is disabled are automatically detached from the instance and retained. Proceed with caution when you release instances. To prevent accidental release of instances, we recommend that you enable release protection for the instances.
    

## Usage instructions

1.  Select an instance type and an instance billing method.
    
    Before you create an ECS instance, be familiar with the following information:
    
    -   Instance families available for purchase and the inventory of instance families in the region in which you want to create an ECS instance. For more information, see [Instance family overview](/help/en/ecs/user-guide/overview-of-instance-families) or visit the [Instance Types Available for Each Region](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion) page.
        
    -   Instance billing methods. The following instance billing methods are supported: [subscription](/help/en/ecs/user-guide/subscription-1), [pay-as-you-go](/help/en/ecs/user-guide/pay-as-you-go), and [Spot Instance](/help/en/ecs/user-guide/preemptible-instances/). Select an instance billing method based on your business requirements and determine whether to use resource plans, such as [savings plans](/help/en/ecs/savings-plans-1/), to reduce costs.
        
2.  Create an ECS instance.
    
    -   [Create a subscription instance on the Quick Launch tab](/help/en/ecs/user-guide/create-a-subscription-instance-on-the-quick-launch-tab). You can create a subscription ECS instance on the Quick Launch tab of the instance buy page in the ECS console within minutes. On the Quick Launch tab, only specific instance types and images are available and most configurations cannot be customized.
        
    -   [Custom launch](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard). You can customize configurations, such as the image type, instance type, storage, bandwidth, and security groups, based on your business requirements, and create an instance on the Custom Launch tab of the instance buy page in the ECS console.
        
3.  Connect to an ECS instance.
    
    -   You can connect to an ECS instance by using [Choose a connection method](/help/en/ecs/user-guide/connect-to-instance#c883a4be3egsg), [Choose a connection method](/help/en/ecs/user-guide/connect-to-instance#68ff20289069m), or [Virtual Network Computing (VNC)](/help/en/ecs/user-guide/connect-to-instance#df096dd0062si). For more information, see [Choose a connection method](/help/en/ecs/user-guide/connect-to-instance).
        
    -   If you did not set a logon password when you created an ECS instance, or if you forget the password, you must reset it to log on. For more information, see [Reset the logon password of an instance](/help/en/ecs/user-guide/reset-the-logon-password-of-an-instance).
        
4.  Manage an ECS instance.
    
    You can perform configuration and management operations on an ECS instance. For more information, see [Manage instances](/help/en/ecs/user-guide/management-and-operation-and-maintenance/).
    
5.  Deploy services on an ECS instance.
    
    -   You can deploy basic environments on an ECS instance. For more information, see [Build a software development environment](/help/en/ecs/user-guide/build-a-software-development-environment/).
        
    -   You can deploy websites on an ECS instance. For more information, see [Build a website](/help/en/ecs/user-guide/build-a-website/).
        
    -   You can deploy applications, such as databases and code hosting platforms, on an ECS instance. For more information, see [Build an application](/help/en/ecs/user-guide/build-an-application/).
        
6.  Maintain and monitor an ECS instance.
    
    -   If an ECS instance encounters unexpected issues, such as instance downtime, startup failures, or instance connection failures, you can use self-diagnostic tools for online troubleshooting. For more information, see [Troubleshooting](/help/en/ecs/user-guide/troubleshooting/).
        
    -   You can also use CloudOps Orchestration Service (OOS) to run scheduled or batch O&M tasks on ECS instances. For more information, see [CloudOps Orchestration Service (OOS)](/help/en/ecs/user-guide/overview-3).
        
7.  Change the configurations of an ECS instance.
    
    If the configurations of an ECS instance do not meet your business requirements, you can change the configurations, including the instance type (vCPUs and memory), public bandwidth configurations, and billing methods of data disks. For more information, see [Overview of instance configuration changes](/help/en/ecs/user-guide/overview-of-instance-configuration-changes).
    
8.  Release an ECS instance.
    
    If you no longer require an ECS instance, you can release the instance to prevent unnecessary costs.
    
    After an ECS instance is released, the instance ID, static public IP address, system disk, and data disks for which the Release Disk with Instance attribute is enabled are released and cannot be restored. If the instance is associated with an EIP, the EIP is automatically disassociated from the instance and retained. The data disks for which the Release Disk with Instance attribute is disabled are automatically detached from the instance and retained. Proceed with caution when you release instances. To prevent accidental release of instances, we recommend that you enable release protection for the instances. For more information, see [Release an instance](/help/en/ecs/user-guide/release-an-instance).
    

## Security suggestions

When you use cloud services, we recommend that you follow security suggestions to improve the security of cloud resources. Examples:

-   **Suggestions for permission control**: Use Resource Access Management (RAM) features to control which users can manage resources, such as ECS instances, and what permissions to grant to the users. For more information, see [Identities](/help/en/ecs/user-guide/identity-management/).
    
-   **Suggestions for network security**: Use VPCs to isolate services of different security levels. Use security groups to control inbound and outbound traffic for ECS instances and allow ECS instances to access the Internet only when necessary to minimize the attack surface area for resources.
    
-   **Suggestions for data security**:
    
    -   To ensure the integrity of data that is transferred or stored, ECS instances use the triplicate storage technology to achieve data reliability, the secure data erasure mechanism to achieve complete data erasure, and the Cyclic Redundancy Check (CRC) feature to provide end-to-end protection for data. For more information, see [Ensure data integrity](/help/en/ecs/user-guide/data-security/#fd82a80d24sgf).
        
    -   ECS provides a range of security capabilities and solutions to ensure data confidentiality for data at rest, in transit, and in use. These capabilities cover aspects such as **confidentiality of data storage**, **confidentiality of network data transmission**, and **confidentiality of the computing environment for data runtime**. For more information, see [Ensure data confidentiality during data storage, transmission, and computing](/help/en/ecs/user-guide/data-security/#ba523e8191jl5).
        
-   **Use of monitoring and logging**: Monitoring and logging help ensure the availability of your ECS resources and the smooth and healthy operation of your business. You can use monitoring services to collect metric data. Alibaba Cloud provides a variety of monitoring and log auditing services, such as CloudMonitor and Cloud Config. These services can monitor resource usage and service performance in real time, and generate alerts to help you handle exceptions at the earliest opportunity.
    

For more information about how to improve the security of ECS instances, see [ECS instance security](/help/en/ecs/user-guide/best-security-practices#task-2084924).
