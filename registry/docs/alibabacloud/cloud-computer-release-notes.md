This topic describes the release notes of images used by cloud computers in Elastic Desktop Service (EDS) Enterprise.

**Note**

This topic describes the release notes for cloud computer images. If you want to view the latest release notes for Alibaba Cloud Workspace clients, see [Release notes](/help/en/wtc/product-overview/publishing-records/).

## Windows images

### V3.2.0 (March, 2026)

**Note**

This version is in invitational preview. To use this version, submit a [ticket](https://smartservice.console.alibabacloud.com/service/create-ticket?product=gws).

-   New features
    
    -   Adaptive DPI scaling: On the initial connection to a cloud computer, the system now automatically suggests an optimal DPI setting based on the client's local screen resolution. User-defined DPI settings are now saved and automatically applied to subsequent sessions.
        
    -   Faster boot times: The startup sequence for cloud computers has been streamlined, resulting in improved boot efficiency and a faster connection experience.
        
-   Optimized feature
    
    -   Image management operations: Optimized the reboot mechanism required during image lifecycle operations (e.g., create, reset, and upgrade) to improve speed and reliability.
        
-   Fixed issues:
    
    -   Resolved several known issues to improve overall system stability.
        

### V3.0.0 (December 2025)

-   New features
    
    -   Full support has been added for Windows Server 2019-2025, as well as Windows 10 and Windows 11 Professional & Enterprise editions.
        
    -   Users can now adjust the mouse pointer speed directly from within the cloud computer session.
        
    -   In the disk cleanup feature of Cloud Computer Manager, the recycle bin is now a separate, independent option for more granular control.
        
-   Optimized features
    
    -   Addressed an issue that occasionally caused the enterprise drive to fail to open.
        
    -   Resolved several other known issues.
        

### V2.12.0 (September 2025)

-   New features
    
    -   Added support for upgrading to Windows 11 Version 23H2.
        
    -   Enabled TPM 2.0 support for Windows 11 instances.
        
    -   Updated base images with the latest Windows monthly updates and security patches, including for Windows Server 2022.
        
    -   Introduced automatic detection of GPU driver issues with an alert and a one-click fix option.
        
    -   Administrators can now grant local administrator privileges on individual shared cloud computers.
        
-   Optimized feature
    
    -   Fixed a bug that prevented input from the local keyboard on mobile clients from being correctly transmitted to the cloud computer.
        

### V2.11.0（2025年07月）

-   New features
    
    -   Added support for select AI mouse models, enabling the full use of their AI features.
        
    -   The image builder tool now supports creating custom images based on the Windows 11 operating system.
        
    -   Component disks now support GPU drivers, enabling dynamic allocation based on the instance type and specifications.
        
    -   Enhanced performance and user experience for select video editing applications.
        
-   Optimized features
    
    -   Optimized the creation process for GPU-accelerated cloud computers, reducing startup time by 40 to 60 seconds.
        
    -   The Windows Explorer process will now be automatically restarted if it closes or crashes unexpectedly, improving system stability.
        
    -   Streamlined the display quality settings into three simple presets: balanced, high quality, and smooth.
        
    -   Improved the reliability of Windows modifier keys (e.g., Ctrl, Alt, Shift) with a new refresh mechanism to prevent "stuck key" issues.
        
    -   The client upgrade process now dynamically adjusts download speeds to balance network usage and ensure a smoother overall experience.
        
    -   Enhanced resource allocation for the connection process to ensure a stable and responsive session, even when the cloud computer's CPU is under high load.
        
    -   Addressed a known issue that caused occasional stuttering or lag when using the Microsoft Input Method Editor (IME).
        

### V2.10.1 (May 2025)

-   New features
    
    -   Support for configuring a Windows update server has been added.
        
    -   Support for optimized GPU driver mode has been added to cloud computers.
        
    -   Support for a shortcut to "Peripherals and Printers" has been added to cloud computers.
        
    -   Support for updating cloud computer wallpapers has been added to the Enterprise and Business editions.
        
    -   Support for operating system restart and shutdown has been added to images.
        
    -   Support for modifying the resolution, screen rotation, and projection mode of the hardware-side image system has been added (with default synchronization to the hardware side).
        
    -   Support for syncing the image volume with the hardware system volume has been added.
        
    -   Support for inheriting application blacklists and whitelists by child processes has been added.
        
-   Optimized features
    
    -   The shared printer peripheral experience in Cloud Computer Manager has been improved.
        
    -   The stability of the network redirection feature has been optimized.
        
    -   The stability of the Alibaba Cloud Workspace image component has been optimized.
        

### V2.9.0 (April 2025)

-   New features
    
    -   Support for the enterprise networking capability—process whitelist—has been added.
        
    -   Support for keeping processes alive based on configuration files has been added.
        
    -   Support for OpenCL on CPU-accelerated cloud computers has been added.
        
    -   Support for automatic connection of specific peripherals has been added.
        
-   Optimized features
    
    -   Scheduled task execution during inactivity has been optimized for a better user experience.
        
    -   ASP protocol-based connections have been optimized for stability.
        

### V2.8.0 (March 2025)

-   New features
    
    -   Support for setting and canceling fixed resolutions on cloud computers has been added.
        
    -   Support for the client version of Enterprise Drive Service has been updated to 1.5.0.
        
    -   Support for shut-down-and-update has been added for Windows patches.
        
-   Optimized features
    
    -   Cloud computer restart has been optimized.
        
    -   Multi-session connection has been optimized.
        
    -   Display management has been optimized.
        

### V2.7.0 (February 2025)

-   New features
    
    -   Support for watermark policies has been implemented in cloud applications.
        
    -   Support for folder selection in file transfer has been added.
        
    -   Support for migrating printer drivers from on-premises devices to Cloud Computer Manager has been added.
        
-   Optimized features
    
    -   The conflicts between hibernation and Object Storage Service (OSS) upload tasks have been resolved.
        
    -   Scheduled tasks for inactivity have implemented smart identification of cloud computer screens and have enabled the blocking of hibernation tasks.
        
    -   Some of the patches released by Windows in December have been updated.
        

### V2.6.0 (January 2025)

-   New features
    
    -   Support for peripheral USB devices, disk mapping, and file transfer auditing has been added.
        
    -   Support for non-sleeping processes has been added.
        
    -   Support for whitelist configuration in application control has been added.
        
-   Optimized features
    
    -   Chinese has been added as a selectable language during WeChat installation.
        
    -   The mobile client input experience has been optimized for improved user interaction.
        

### V2.5.1 (December 2024)

-   New features
    
    -   Support for sending cloud computer wallpaper messages has been added.
        
    -   Support for dual-screen DPI settings has been added.
        
    -   Support for a reminder bubble has been added to notify users when no operation is performed.
        
-   Optimized features
    
    -   The time required to create cloud computers has been reduced.
        
    -   The DNS update mechanism has been optimized for greater efficiency.
        
    -   The message push reminder mechanism has been enhanced.
        
    -   The input method has been enhanced to improve user experience.
        

### **V2.4.0 (November 2024)**

-   New features
    
    -   Scheduled tasks can be run when cloud servers are idle.
        
    -   Support for the Grid16 driver has been added.
        
    -   Support for fine-grained control over the clipboard has been added.
        
-   Optimized features
    
    -   Support for the GPU delivery group in cloud applications has been added.
        
    -   Support for enhanced dual-screen display resolution has been added to cloud computers.
        
    -   The stability for cloud computer clipboards has been optimized.
        
    -   The stability of cloud computer connections has been optimized.
        

### **V2.3.0 (September 2024)**

-   New features
    
    -   Support for User Profile Management (UPM) has been added in cloud application mode.
        
    -   Support for keyboard inputs has been added for the Runtime API in cloud application mode.
        
    -   Support for webcams has been added for cloud applications.
        
-   Optimized features
    
    -   Support for dual-screen mode has been optimized to improve user experience.
        
    -   The audio collection from the mics on cloud computers has been optimized.
        
    -   The power options on cloud computers have been optimized.
        
    -   The Cloud Computer Manager capabilities on cloud computers have optimized.
        
    -   Support for optimized peripheral compatibility and COM port redirection capabilities has been added.
        

### **V2.2.0 (August 2024)**

-   New features
    
    -   Support for restart or stop actions has been added in the operating systems of cloud computers.
        
-   Optimized features
    
    -   The stability of cloud computer connections has been optimized.
        
    -   The resource consumption rate of high-proportion processes on cloud computers has been optimized.
        
    -   Cloud Computer Manager permissions have been optimized.
        

### **V2.1.0 (August 2024)**

-   New features
    
    -   The Secure Access Service Edge (SASE) component has been pre-installed in the images.
        
    -   Alibaba Cloud Workspace Manager has added features for memory optimization, disk cleanup, and unified peripheral O&M.
        
    -   Intelligent Frame Interpolation (IFI) has been added to the Adaptive Streaming Protocol (ASP).
        
-   Optimized features
    
    -   The clipboard and file transfer features have been optimized to support simultaneous transfer of multiple files, improving file transfer efficiency.
        

## Linux images

### **V2.4.0 (June 2025)**

-   New features
    
    -   Support for NVIDIA RTX 5880 GPU specifications has been added (Ubuntu 20.04/22.04).
        
    -   Support for native LDAP authentication has been added (Ubuntu 20.04/22.04/24.04).
        
-   Optimized features
    
    -   The occasional paste failure issue with the clipboard has been fixed.
        
    -   Issues related to resolution/scaling ratio settings and dual-screen exit failures under high load conditions on cloud computers have been fixed.
        
    -   Driver installation on GPU instances has been optimized, and dual-screen display has been optimized.
        
    -   GeForce GPU display has been optimized.
        
    -   Support for NVMe block devices has been optimized in component disks.
        

### **V2.3.0** (February 2025)

-   New features
    
    -   Support for GeForce GPU specifications has been added.
        
    -   Support for clipboard-based file transfer between on-premises and cloud environments has been added.
        
    -   Dual-screen display has been supported by GPU-accelerated cloud computers.
        
    -   Support for managing scheduled tasks on cloud computers has been added.
        
    -   Support for Ubuntu 24.04 and Rocky 8.6 images has been added.
        
-   Optimized features
    
    -   Stability enhancement has been implemented.
        

### **V2.0.0 (August 2024)**

-   New features
    
    -   The hibernation capability has been supported for Linux cloud computers.
        
    -   Rich text copy has been supported for clipboards on Linux cloud computers.
        
    -   Support for configuring scheduled tasks upon inactivity has been added for administrators.
        
-   Optimized features
    
    -   Stability has been enhanced.
