Policies in Elastic Desktop Service (EDS) are used to control user experience, security, audit, peripherals, remote collaboration, and AI. This topic describes the policies used to control peripherals.

## Scenarios

You can use peripheral policies to limit cloud computers from accessing the disks or peripherals of local devices.

-   Cloud computers access disks of local devices: After you enable local disk mapping, you can access the disks of local devices from a cloud computer.
    
-   Cloud computers access peripherals of local devices: You can configure redirection policies to limit the peripherals of local devices that cloud computers can access and specify the redirection method. In addition to redirection policies for peripherals, you can configure a peripheral whitelist or blacklist to control peripheral access in a fine-grained manner.
    

## Configurations

**Configuration item**

**Description**

**Requirement or limit**

**Peripheral connection guide**

Peripheral Connection Guide

By default, this feature is enabled. When this feature is disabled, the terminal does not show the connection guide pop-up of connected peripherals.

Only Windows cloud computers are supported.

**Peripherals and printers**

Peripherals and Printers Shortcut

The Peripherals and Printers shortcut is shown by default on cloud computers. Select **Hide Shortcut** to remove it from view. Valid values:

-   Show Shortcut
    
-   Hide Shortcut
    

Only Windows cloud computers are supported.

**Local disk redirection**

Local Disk Mapping

Maps the disks of local devices to the disks of cloud computers. This enables cloud computers to access the disks of local devices. Valid values:

-   Read-only: You can view and copy data stored in the disks of local devices from cloud computers. However, you do not have permissions to write data to the disks.
    
-   Close: You are not allowed to access data stored in the disks of local devices from cloud computers.
    
-   Read/Write: You can view, copy, and modify data stored in the disks of local devices from cloud computers.
    

None.

**Peripheral redirection**

USB Redirection

After you enable this feature, you can use a cloud computer to access USB devices connected to a client. In addition, you can configure a USB device whitelist or blacklist or configure USB redirection for different types of devices. After you disable this feature, the corresponding peripheral is automatically switched from USB Redirection to Deny.

Web clients do not support USB redirection because they do not support USB devices.

Webcam

Redirection policies for different types of peripherals. Valid values:

-   USB Redirection: redirects local USB devices to cloud computers. To use these USB devices, you must first install the corresponding drivers on cloud computers.
    
    **Note**
    
    To select a USB redirection method, you must first enable USB redirection.
    
-   Device Redirection: redirects local USB devices to cloud computers. You need only to install the corresponding drivers on clients.
    
-   Deny: disables peripheral redirection. If you select this option for a peripheral, cloud computers cannot use the peripheral.
    

Only ASP-based Windows cloud computers are supported. Only device redirection is supported.

Scanner

Only USB redirection is supported.

ADB

No limit.

Printer

To enable print redirection to allow a cloud computer to use the printers of local devices, make sure that the end user connects to the cloud computer through a Windows client or macOS client.

Serial Device

Only Windows cloud computers are supported.

Cloud Hub

By default, this feature is disabled. Once enabled, it offers cloud-based peripheral services.

This feature requires local management software to operate.

**Peripheral blacklist and whitelist**

Peripheral Blacklist/Whitelist

After you configure USB redirection policies for different types of peripherals, you can configure a peripheral whitelist or blacklist. The peripheral blacklist and whitelist take precedence over USB redirection policies configured for different types of peripherals.

-   After you add a USB device to the blacklist, even if you have disabled USB redirection for this type of peripheral, cloud computers are still allowed to access the USB device.
    
-   After you add a USB device to the whitelist, even if you have enabled USB redirection for this type of peripheral, cloud computers are not allowed to access the USB device.
    

-   You can add up to 100 blacklist or whitelist rules. The priorities of peripherals in the whitelist or blacklist are in descending order. You can adjust the order of the peripherals in the list.
    
-   Vendor Identifiers (VIDs) and Product Identifiers (PIDs) are 4-bit hexadecimal strings, such as a12c.
    
-   After you configure a whitelist or blacklist, the configuration takes effect the next time a client connects to the corresponding cloud computer.
    

**Peripheral management policies**

Custom Rules

You can configure custom redirection policies to manage peripherals based on VIDs and PIDs.

-   You can add up to 100 custom policies.
    
-   VIDs and PIDs are 4-bit hexadecimal strings, such as a12c.
    
-   Only Alibaba Cloud Workspace terminals of V6.4.0 or later are supported.
    

Recommended Rule for Best Practice

Policies recommended by EDS for best practices.

-   You cannot modify the recommended policies. Custom policies take precedence over the recommended policies.
    
-   Only Alibaba Cloud Workspace terminals of V6.4.0 or later are supported.
    

## References

-   [Policy overview](/help/en/wuying-workspace/user-guide/cloud-computer-policy-overview)
    
-   [Create and manage cloud computer policies](/help/en/wuying-workspace/user-guide/create-and-manage-cloud-computer-policies)
    
-   [FAQ about policies](/help/en/wuying-workspace/user-guide/policy-faq)
