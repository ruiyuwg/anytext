This topic provides answers to some frequently asked questions (FAQ) about Alibaba Cloud Linux images.

## **FAQ about features**

-   **Am I charged for using Alibaba Cloud Linux images in Alibaba Cloud Elastic Compute Service (ECS)?**
    
    No, Alibaba Cloud Linux images are provided free of charge. You are charged for the other resources of the ECS instances that use the images.
    
-   **Which ECS instance types do Alibaba Cloud Linux images support?**
    
    Alibaba Cloud Linux images support most ECS instance types, including ECS Bare Metal Instance types.
    
    **Note**
    
    Alibaba Cloud Linux images do not support instances that run on the Xen virtual machine monitor.
    
-   **Do Alibaba Cloud Linux images support 32-bit applications or libraries?**
    
    No, Alibaba Cloud Linux images do not support 32-bit applications or libraries.
    
-   **Does Alibaba Cloud Linux provide a graphical user interface (GUI)?**
    
    We do not promise to provide a GUI in Alibaba Cloud Linux. You can install a CentOS GUI. For more information, see [Install a GUI desktop on a Linux instance](/help/en/ecs/user-guide/installing-a-graphical-desktop-environment-for-a-linux-instance).
    
-   **Can I view the source code of Alibaba Cloud Linux 2 components?**
    
    Yes, Alibaba Cloud Linux 2 is open source. You can use the yumdownloader tool or visit the official Alibaba Cloud download pages to download the source code package. You can also download the source code tree of the Alibaba Cloud Linux 2 kernel from GitHub. For more information, visit [Github](https://github.com/alibaba/cloud-kernel).
    
-   **Is Alibaba Cloud Linux 2 backward compatible with historical Aliyun Linux versions?**
    
    Yes, Alibaba Cloud Linux 2 is compatible with Aliyun Linux 17.01.
    
    **Note**
    
    However, you may need to re-compile a compiled kernel module on Alibaba Cloud Linux 2 before you can use the module.
    
-   **Which third-party applications can run on Alibaba Cloud Linux 2?**
    
    Alibaba Cloud Linux 2 is binary compatible with CentOS 7.6.1810 and provides differentiated operating system features.
    
    Compared with CentOS and Red Hat Enterprise Linux (RHEL), Alibaba Cloud Linux 2 has the following advantages:
    
    -   Frequent updates and updated Linux kernels, user-mode software, and toolkits are provided.
        
    -   Alibaba Cloud Linux 2 works out of the box and requires minimal configurations.
        
    -   Alibaba Cloud Linux 2 is optimized to work with the Alibaba Cloud infrastructure and maximizes performance for users.
        
    -   Unlike RHEL, Alibaba Cloud Linux 2 does not have runtime charges. Different from CentOS, Alibaba Cloud provides commercial support for Alibaba Cloud Linux 2.
        
    
-   **How does Alibaba Cloud Linux 2 protect data?**
    
    Alibaba Cloud Linux 2 is binary compatible with CentOS 7.6.1810 and RHEL 7.6 and complies with the RHEL security specifications. Alibaba Cloud Linux 2 uses the following methods to protect data:
    
    -   Uses industry-standard vulnerability scan and security test tools to perform periodical security scanning.
        
    -   Periodically assesses the Common Vulnerabilities and Exposures (CVE) patch updates of CentOS 7 and fixes operating system security vulnerabilities.
        
    -   Supports existing solutions of Alibaba Cloud for operating system security hardening.
        
    -   Uses the same mechanism as CentOS 7 to release user security alerts and patch updates.
        
    
-   **Does Alibaba Cloud Linux 2 support data encryption?**
    
    Yes, Alibaba Cloud Linux 2 provides the CentOS 7 data encryption toolkit and supports the data encryption solution implemented by Key Management Service (KMS) together with CentOS 7.
    
-   **How do I grant permissions on Alibaba Cloud Linux 2?**
    
    The methods for granting permissions on Alibaba Cloud Linux 2 are similar to the methods for granting permissions on CentOS 7. You can use the same commands to grant permissions on Alibaba Cloud Linux 2 as you would on CentOS 7. The default permission configurations in images of these two operating systems are the same.
    

## **FAQ about known issues**

-   [What do I do if performance degrades after I enable the CONFIG\_PARAVIRT\_SPINLOCK kernel option?](/help/en/alinux/support/turning-on-the-kernel-option-config-paravirt-spinlock-may-cause-performance-issues)
    
-   [How do I resolve the known issues in NFSv4.x releases?](/help/en/alinux/support/potential-known-issues-in-nfs-v4-x)
    
-   [How do I optimize Transparent Huge Pages (THP) related performance on an Alibaba Cloud Linux instance?](/help/en/alinux/support/performance-tuning-method-related-to-transparent-large-page-thp-in)
    
-   [How do I disable mitigations for CPU vulnerabilities in an Alibaba Cloud Linux 3 operating system?](/help/en/alinux/support/disable-mitigations-for-cpu-vulnerabilities-in-alibaba-cloud-linux-3)
    
-   [What do I do if the sch\_netem module is missing from Alibaba Cloud Linux 3?](/help/en/alinux/support/modules-such-as-sch-netem-are-missing-from-alibaba-cloud-linux-3)
    
-   [What do I do if a downtime issue occurs in Alibaba Cloud Linux due to a printk deadlock?](/help/en/alinux/support/alibaba-cloud-linux-system-has-a-printk-deadlock-that-causes-system-downtime)
    

## **FAQ about usage**

### Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3

-   [What do I do if a segmentation fault occurs due to System Analyse Kit (SysAK) 2.2.0 when I run a Dandified YUM (DNF) command?](/help/en/alinux/support/sysak-version-2-2-0-causes-a-segment-error-when-running-a-dnf-command)
    
-   [How do I prevent cgroup-induced jitters in applications?](/help/en/alinux/support/prevent-application-performance-jitter-caused-by-cgroups)
    
-   [What do I do if an operation fails due to insufficient read permissions on files or directories in the OverlayFS file system on an Alibaba Cloud Linux instance?](/help/en/alinux/support/what-should-i-do-if-the-overlayfs-file-system-of)
    
-   [What do I do if Out of Memory Killer (OOM Killer) is triggered?](/help/en/alinux/support/causes-of-and-solutions-to-the-issue-of-oom-killer-being-triggered)
    
-   [What do I do if an instance has a high percentage of slab\_unreclaimable memory?](/help/en/alinux/support/identify-the-causes-of-high-percentage-of-the-slab-unreclaimable-memory)
    
-   [How do I fix Linux memory fragmentation?](/help/en/alinux/support/solutions-to-memory-fragmentation-in-linux-operating-systems)
    
-   [How do I use the /etc/resolv.conf file to specify custom Domain Name System (DNS) settings on an Alibaba Cloud Linux instance?](/help/en/ecs/user-guide/how-do-i-use-the-or-etc-or-resolv-conf-file-to-customize-dns-settings-on-an-alibaba-cloud-linux-instance)
    
-   [What do I do if applications on an ECS instance occasionally drop packets and the "kernel: nf\_conntrack: table full, dropping packet" error message appears in the kernel logs?](/help/en/ecs/user-guide/the-application-on-the-ecs-instance-occasionally-suffers-packet-loss-and-the-kernel-log-contains-the-error-message-kernel-nf-conntrack-table-full-dropping-packet)
    

### **Alibaba Cloud Linux 3**

-   [How do I configure Transmit Packet Steering (XPS) in an Alibaba Cloud Linux 3 operating system and what are the impacts of the configuration?](/help/en/alinux/support/method-for-configuring-xps-on-alibaba-cloud-linux-3-and-impacts-of-the-configuration)
    
-   [What do I do if an error occurs when I upgrade the kernel of an Alibaba Cloud Linux 3.8 image?](/help/en/alinux/support/fix-the-error-that-occurred-during-a-kernel-upgrade-of-the-alibaba-cloud-linux-3-8-image)
    
-   [How do I disable mitigations for CPU vulnerabilities in an Alibaba Cloud Linux 3 operating system?](/help/en/alinux/support/disable-mitigations-for-cpu-vulnerabilities-in-alibaba-cloud-linux-3)
    
-   [What do I do if the value of load is greater than 1 when Alibaba Cloud Linux 3 does not have load?](/help/en/alinux/support/solution-to-the-issue-that-the-value-of-load-is-greater-than-1-when-the-alibaba-cloud-linux-3-operating-system-has-no-load#trouble-2142877)
    
-   [What do I do if NFS file systems on an Alibaba Cloud Linux 3 instance experience poor file read performance?](/help/en/alinux/support/modify-read-ahead-parameters-in-the-nfs-file-system-on-alibaba-cloud-linux-3)
    

### **Alibaba Cloud Linux 2**

-   [How do I resolve a memory leak in polkit in Alibaba Cloud Linux 2?](/help/en/alinux/support/solution-to-polkit-memory-leaks-in-alibaba-cloud-linux-2)
    
-   [How do I fix the systemd service error in Alibaba Cloud Linux 2?](/help/en/alinux/support/systemd-service-error-in-alibaba-cloud-linux-2)
    
-   [How do I enable or disable IPv6?](/help/en/alinux/support/enable-or-disable-ipv6)
    
-   [How do I install and enable a later version of curl?](/help/en/alinux/support/install-and-enable-curl-of-a-later-version)
    
-   [What do I do if I cannot query or configure the routing information of an Alibaba Cloud Linux 2 instance?](/help/en/alinux/support/alibaba-cloud-linux-2-ecs-instances-cannot-query-and-configure)
    
-   [What do I do if a large number of processes cannot be created on an Alibaba Cloud Linux 2 ECS instance?](/help/en/alinux/support/alibaba-cloud-linux-2-ecs-instances-fail-to-create-a)
    
-   [What do I do if the TCP congestion control algorithm BBR affects network performance in Alibaba Cloud Linux 2?](/help/en/alinux/support/how-does-the-tcp-congestion-control-algorithm-bbr-affect-network)
    
-   [What do I do if the Buffer I/O write performance of an Ext4 file system on an Alibaba Cloud Linux 2 instance is not as expected?](/help/en/alinux/support/the-buffer-i-o-write-performance-of-the-ext4-file-system)
    
-   [What do I do if the return value of the Send-Q parameter is 0 after the ss command is run on an Alibaba Cloud Linux 2 ECS instance?](/help/en/alinux/support/alibaba-cloud-linux-2-ecs-instances-return-a-send-q-field)
    
-   [How do I optimize the THP-related performance in Alibaba Cloud Linux?](/help/en/alinux/support/performance-tuning-method-related-to-transparent-large-page-thp-in)
    
-   [What do I do if the OverlayFS file system fails to be mounted to an Alibaba Cloud Linux 2 instance when another file system is already mounted to the specified directory?](/help/en/ecs/support/failed-alibaba-cloud-linux-2-mount-because-overlayfs-is-mounted-to-ecs-instances)
    
-   [What do I do if the "integrity: Unable to open file" error messages appear in the kernel logs of an Alibaba Cloud Linux 2 instance?](/help/en/alinux/support/what-should-i-do-if-the-integrity-unable-to-open)
