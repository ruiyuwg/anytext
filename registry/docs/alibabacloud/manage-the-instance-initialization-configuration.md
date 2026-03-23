By default, an Elastic Compute Service (ECS) instance uses an initialization tool to automatically perform predefined configuration tasks, such as network configuration, hostname assignment, and custom script execution, when the instance is created or started. Different types of operating systems use different initialization tools. A Linux instance uses the cloud-init tool for automatic initialization, and a Windows instance uses the Vminit tool for automatic initialization. This topic describes the initialization tools that are used in Linux instances and Windows instances.

### **Cloud-init**

A Linux instance uses the open source cloud-init tool to complete automatic initialization. For more information, see [Cloud-init documentation](http://cloudinit.readthedocs.io/).

-   Cloud-init defines a series of modules to execute tasks and configurations. Each module has the following elements: name, running frequency, and configuration parameters. The running frequency indicates the frequency at which a module is run. In most cases, the once-per-instance and always running frequencies are used. The `once-per-instance` running frequency indicates that a module is run only once the first time an ECS instance is started. The `always` running frequency indicates that a module is run each time an ECS instance is started. For more information, see [Module reference](https://cloudinit.readthedocs.io/en/latest/reference/modules.html).
    
-   Cloud-init uses the `/etc/cloud/cloud.cfg` configuration file to control the initialization behavior of an ECS instance, such as determining which modules to run. When modules are run, cloud-init can obtain metadata, such as the instance ID and hostname of an ECS instance, from the metadata service. For example, when an ECS instance is started, cloud-init runs the [Set Hostname](https://cloudinit.readthedocs.io/en/latest/reference/modules.html#set-hostname) module to obtain the hostname of the instance from the metadata service and set the hostname of the instance to the obtained hostname.
    

**Note**

Cloud-init is installed in all Alibaba Cloud public images and in custom images that are created based on the public images. If you create ECS instances from the images, cloud-init is automatically installed on the instances. If you use custom images that are created based on on-premises devices to create ECS instances and cloud-init is not installed in the images, you must manually install cloud-init on the instances. For information about how to install cloud-init, see [Install cloud-init](/help/en/ecs/user-guide/install-cloud-init#765ef8d81au02).

### **Vminit**

A Windows instance uses the Vminit initialization tool to complete automatic initialization. Vminit executes a series of plug-ins in sequence to complete system initialization configurations. Several plug-ins are executed only once the first time an ECS instance is started. Other plug-ins are executed each time the instance is started. By default, all Vminit plug-ins are automatically executed to initialize an ECS instance when the instance is created from a Windows image.

**Note**

Vminit is installed in Windows public images released in September 2023 and later and in custom images created based on the Windows public images. If you create ECS instances from the images, Vminit is automatically installed on the instances. If you use custom images that are created based on on-premises devices to create ECS instances and Vminit is not installed in the images, you must manually install Vminit on the instances. This ensures that the ECS instances can complete initialization configurations. For more information, see [Install Vminit](/help/en/ecs/user-guide/install-vminit).

The following table describes 10 Vminit plug-ins.

**Note**

The plug-in list displayed below applies to Windows public images released in September 2023 and later, and to instances running on custom images created based on Windows public images. If your image does not meet above conditions, the Vminit plug-ins in that image may differ from the ones listed below.

**Vminit plug-ins**

**Plug-in name**

**Execution frequency**

**Feature**

**Description**

Plugin\_Main\_StartDepend

Executed only once the first time an ECS instance is started.

Starts the IP Helper service, Dynamic Host Configuration Protocol (DHCP) client, and Windows Time service (W32Time) of a Windows operating system.

By default, the preceding system services are enabled for Windows images. If the services are disabled in custom images, the plug-in enables the services to prevent network and Network Time Protocol (NTP) setting exceptions.

Plugin\_Main\_OpenRDP

Allows you to connect to an ECS instance by using Remote Desktop Protocol (RDP).

By default, RDP is enabled in Windows. The plug-in can enable RDP for images whose RDP is disabled.

Plugin\_Main\_NetworkClean

Initializes network configurations. The system uses DHCP to automatically obtain the IP addresses and DNS server settings of all network interface controllers on an ECS instance.

If the IP Helper and DHCP services are improperly enabled for an ECS instance, the plug-in may fail to run. As a result, you cannot access the instance metadata over the internal network.

Plugin\_Main\_ConfigDisk

Initializes a data disk created together with an ECS instance, including creating partitions and assigning drive letters. By default, the GUID partition table (GPT) partition format is used.

-   If a new data disk is attached to an ECS instance during instance creation, the data disk is not initialized. To improve operational efficiency, the plug-in automatically initializes the data disk and brings the disk online.
    
-   If a data disk on which data is stored is attached to an ECS instance during instance creation, Vminit does not initialize the data disk.
    

Plugin\_Main\_ExtendVolume

Automatically detects the available space on the system disk of a Windows instance and runs the `diskpart` command to extend the system disk.

None.

Plugin\_Main\_CloudinitUserData

Obtains the instance user data that you configured from the Alibaba Cloud metadata service and uses the system account to automatically execute the user data script.

-   The plug-in requires access to the internal network.
    
-   For information about how to configure instance user data, see [Customize initialization configurations for an instance](/help/en/ecs/user-guide/customize-the-initialization-configuration-for-an-instance#61d02a06b2cma).
    

Plugin\_Main\_ConfigHostname

Executed each time an ECS instance is started.

Assigns a hostname to an ECS instance. During instance creation, Alibaba Cloud assigns a hostname to each ECS instance. If you specify a hostname when you create an ECS instance, the system assigns the hostname that you specified to the instance. Otherwise, Alibaba Cloud assigns a random hostname to the instance.

-   The operating system is forcefully restarted immediately after the plug-in is executed.
    
-   If the auto-assigned hostname is the same as the hostname that you specified, the hostname is not repeatedly specified.
    

-   If you do not want Alibaba Cloud to modify the hostname of an ECS instance, you can disable the plug-in. For example, if you add a configuration logic for changing the hostname on instance startup to a custom image, the configuration logic may conflict with the configuration logic of the Vminit plug-in. In this case, we recommend that you disable the plug-in in the custom image.
    

Plugin\_Main\_ConfigWsus

Obtains the Windows Server Update Services (WSUS) address from the Alibaba Cloud metadata service and adds the WSUS address to an ECS instance. If the WSUS address of Alibaba Cloud is already configured for the instance, the plug-in does not repeat the configuration.

The plug-in requires access to the internal network.

Plugin\_Main\_ConfigKms

Obtains the Key Management Service (KMS) endpoint from the Alibaba Cloud metadata service. After you configure the endpoint for an ECS instance, the plug-in activates KMS. If KMS is activated and the KMS endpoint of the instance is the same as the obtained KMS endpoint, the plug-in does not reactivate KMS.

The plug-in requires access to the internal network.

Plugin\_Main\_ConfigNtp

Configures an NTP clock source for time synchronization. The plug-in obtains the NTP server address from the Alibaba Cloud metadata service and configures the NTP server address for an ECS instance. If the NTP server address of the instance is the same as the obtained NTP server address, the plug-in does not reconfigure the NTP server address for the instance.

-   The plug-in requires access to the internal network.
    
-   The plug-in requires the W32Time service.
    

### **Release notes**

Vminit is updated from time to time. The following table describes the release information of Vminit versions.

**Vminit version**

**Release content**

**Release date**

2.0.1.8

-   Resolved several issues to improve the stability and reliability of Vminit.
    
-   Added support for Windows desktop operating systems: Windows 7, Windows 8, Windows 10, and Windows 11.
    

July 2025

2.0.1.6

-   The number of restarts was reduced during the instance creation from an image provided by Alibaba Cloud.
    
-   This issue has been resolved: Instances could continuously reboot if a startup script modifying the hostname was included in a custom image.
    

September 2024

2.0.1.2

-   Error alerts were cleared in Windows Event Manager.
    
-   Delay variables were supported in the batch scripts of user data.
    

January 2024

2.0.1.0

The first release. Configurable plug-ins were supported.

September 2023

## References

You can use instance user data to initialize an ECS instance when you create the instance. For more information, see [Customize initialization configurations for an instance](/help/en/ecs/user-guide/customize-the-initialization-configuration-for-an-instance).

For information about how to install and use initialization tools when you create images, see [Install cloud-init](/help/en/ecs/user-guide/install-cloud-init) and [Install Vminit](/help/en/ecs/user-guide/install-vminit).
