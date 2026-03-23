The web tamper-proofing feature monitors website directories and files on your server in real time. If a website is maliciously tampered with, the feature restores the affected files or directories from backup data. This helps prevent illegal content from being injected into your website and ensures the normal operation of your website. This topic describes how to use the web tamper-proofing feature.

## Prerequisites

The Security Center agent must be installed on the server that you want to protect. For more information, see [Install the client](/help/en/security-center/user-guide/install-the-security-center-agent#concept-dl4-ykc-zdb).

## Background information

Attackers often exploit vulnerabilities in websites to tamper with webpage content, such as by inserting hidden links, to generate illegal profits or launch malicious attacks against your business. Malicious tampering can disrupt normal access to your website and can cause severe financial loss, damage to your brand, or even political risks.

The Security Center agent automatically collects the process lists for files in protected directories on your servers. It identifies abnormal processes and file changes in real time, and then blocks the processes that cause these changes or generates alerts about them.

## Billing rules

Web tamper-proofing is a value-added feature of Security Center. You must purchase this feature before you can use it. For more information about billing, see [Security Center billing](/help/en/security-center/product-overview/billing-overview#concept-z2v-2bc-zdb).

## Limits

-   One web tamper-proofing quota protects one server.
    
-   You can enable protection for a server only once. Each server supports up to 10 protected directories.
    
-   If your server’s operating system and kernel version are **within the supported range** ([Supported operating systems and kernel versions for the whitelist feature](#table-az3-614-752)):
    
    -   You can use the whitelist feature. If you confirm that an intercepted file change or an alert is caused by a legitimate business process, you can add the process path to the whitelist. After you add the process path to the whitelist, Security Center no longer blocks the process or generates alerts for the process.
        
    -   When you add protected directories, take note of the following limits:
        
        -   The full path of each protected file or directory cannot exceed 1,000 English characters or 500 Chinese characters.
            
        -   If the protected directory is set as the process path of a Network File System (NFS) server, Security Center cannot defend against attacks that modify files in this path from an NFS client.
            
-   If your server’s operating system and kernel version are **outside the supported range** ([Supported operating systems and kernel versions for the whitelist feature](#table-az3-614-752)):
    
    -   The whitelist feature is not supported. Even if you add a process to the whitelist, the rule does not take effect.
        
    
    -   When you add protected directories, take note of the following limits:
        
        -   Each protected directory must be no larger than 20 GB.
            
        -   Each protected directory can contain no more than 20,000 folders.
            
        -   Each protected directory can have no more than 20 folder levels.
            
        -   Each protected file must be no larger than 20 GB.
            
        -   Alert Mode is unavailable.
            
        -   Paths on Network File System (NFS) cannot be protected.
            
        -   Alerts might not be generated. If alerts are generated, they will not include process path information.
            

Table 1. Supported operating systems and kernel versions for the whitelist feature

**Operating system**

**Operating system version**

**Kernel version**

Windows (32-bit or 64-bit)

Windows Server 2008, 2012, 2016, 2019, 2025

All versions.

CentOS (64-bit)

Unlimited. However, only limited kernel versions are supported.

**2.6.32 series**

-   2.6.32-220.el6.x86\_64
    
-   2.6.32-220.13.1.el6.x86\_64
    
-   2.6.32-279.el6.x86\_64
    
-   2.6.32-358.6.2.el6.x86\_64
    
-   2.6.32-358.el6.x86\_64
    
-   2.6.32-358.18.1.el6.x86\_64
    
-   2.6.32-431.17.1.el6.x86\_64
    
-   2.6.32-431.23.3.el6.x86\_64
    
-   2.6.32-431.el6.x86\_64
    
-   2.6.32-431.29.2.el6.x86\_64
    
-   2.6.32-431.20.3.el6.x86\_64
    
-   2.6.32-504.30.3.el6.x86\_64
    
-   2.6.32-504.23.4.el6.x86\_64
    
-   2.6.32-504.16.2.el6.x86\_64
    
-   2.6.32-504.12.2.el6.x86\_64
    
-   2.6.32-504.8.1.el6.x86\_64
    
-   2.6.32-504.3.3.el6.x86\_64
    
-   2.6.32-504.1.3.el6.x86\_64
    
-   2.6.32-504.el6.x86\_64
    
-   2.6.32-573.12.1.el6.x86\_64
    
-   2.6.32-573.18.1.el6.x86\_64
    
-   2.6.32-573.22.1.el6.x86\_64
    
-   2.6.32-573.26.1.el6.x86\_64
    
-   2.6.32-573.8.1.el6.x86\_64
    
-   2.6.32-573.7.1.el6.x86\_64
    
-   2.6.32-573.3.1.el6.x86\_64
    
-   2.6.32-573.el6.x86\_64
    
-   2.6.32-642.1.1.el6.x86\_64
    
-   2.6.32-642.11.1.el6.centos.plus.x86\_64
    
-   2.6.32-642.13.1.el6.centos.plus.x86\_64
    
-   2.6.32-642.11.1.el6.x86\_64
    
-   2.6.32-642.13.1.el6.x86\_64
    
-   2.6.32-642.15.1.el6.x86\_64
    
-   2.6.32-642.3.1.el6.x86\_64
    
-   2.6.32-642.4.2.el6.x86\_64
    
-   2.6.32-642.6.2.el6.centos.plus.x86\_64
    
-   2.6.32-642.6.2.el6.x86\_64
    
-   2.6.32-642.6.1.el6.x86\_64
    
-   2.6.32-642.el6.x86\_64
    
-   2.6.32-696.1.1.el6.x86\_64
    
-   2.6.32-696.10.1.el6.x86\_64
    
-   2.6.32-696.10.2.el6.x86\_64
    
-   2.6.32-696.13.2.el6.x86\_64
    
-   2.6.32-696.16.1.el6.x86\_64
    
-   2.6.32-696.18.7.el6.x86\_64
    
-   2.6.32-696.20.1.el6.x86\_64
    
-   2.6.32-696.23.1.el6.x86\_64
    
-   2.6.32-696.28.1.el6.x86\_64
    
-   2.6.32-696.3.1.el6.x86\_64
    
-   2.6.32-696.3.2.el6.x86\_64
    
-   2.6.32-696.30.1.el6.x86\_64
    
-   2.6.32-696.6.3.el6.x86\_64
    
-   2.6.32-696.el6.x86\_64
    
-   2.6.32-754.11.1.el6.x86\_64
    
-   2.6.32-754.12.1.el6.x86\_64
    
-   2.6.32-754.14.2.el6.x86\_64
    
-   2.6.32-754.15.3.el6.x86\_64
    
-   2.6.32-754.17.1.el6.x86\_64
    
-   2.6.32-754.18.2.el6.x86\_64
    
-   2.6.32-754.2.1.el6.x86\_64
    
-   2.6.32-754.22.1.el6.x86\_64
    
-   2.6.32-754.23.1.el6.x86\_64
    
-   2.6.32-754.24.3.el6.x86\_64
    
-   2.6.32-754.25.1.el6.x86\_64
    
-   2.6.32-754.27.1.el6.x86\_64
    
-   2.6.32-754.28.1.el6.x86\_64
    
-   2.6.32-754.29.1.el6.x86\_64
    
-   2.6.32-754.29.2.el6.x86\_64
    
-   2.6.32-754.3.5.el6.x86\_64
    
-   2.6.32-754.30.2.el6.x86\_64
    
-   2.6.32-754.31.1.el6.x86\_64
    
-   2.6.32-754.33.1.el6.x86\_64
    
-   2.6.32-754.35.1.el6.x86\_64
    
-   2.6.32-754.6.3.el6.x86\_64
    
-   2.6.32-754.9.1.el6.x86\_64
    
-   2.6.32-754.el6.x86\_64
    
-   2.6.32-754.10.1.el6.x86\_64
    

**3.10.x series**

-   3.10.0-123.9.3.el7.x86\_64
    
-   3.10.0-229.el7.x86\_64
    
-   3.10.0-327.10.1.el7.x86\_64
    
-   3.10.0-327.13.1.el7.x86\_64
    
-   3.10.0-327.18.2.el7.x86\_64
    
-   3.10.0-327.22.2.el7.x86\_64
    
-   3.10.0-327.36.3.el7.x86\_64
    
-   3.10.0-327.36.2.el7.x86\_64
    
-   3.10.0-327.36.1.el7.x86\_64
    
-   3.10.0-327.28.3.el7.x86\_64
    
-   3.10.0-327.28.2.el7.x86\_64
    
-   3.10.0-327.el7.x86\_64
    
-   3.10.0-514.10.2.el7.x86\_64
    
-   3.10.0-514.16.1.el7.x86\_64
    
-   3.10.0-514.21.2.el7.x86\_64
    
-   3.10.0-514.21.1.el7.x86\_64
    
-   3.10.0-514.26.2.el7.x86\_64
    
-   3.10.0-514.26.1.el7.x86\_64
    
-   3.10.0-514.6.2.el7.x86\_64
    
-   3.10.0-514.6.1.el7.x86\_64
    
-   3.10.0-514.el7.x86\_64
    
-   3.10.0-514.2.2.el7.x86\_64
    
-   3.10.0-693.11.1.el7.x86\_64
    
-   3.10.0-693.11.6.el7.x86\_64
    
-   3.10.0-693.17.1.el7.x86\_64
    
-   3.10.0-693.2.2.el7.x86\_64
    
-   3.10.0-693.21.1.el7.x86\_64
    
-   3.10.0-693.5.2.el7.x86\_64
    
-   3.10.0-693.el7.x86\_64
    
-   3.10.0-862.11.6.el7.x86\_64
    
-   3.10.0-862.14.4.el7.x86\_64
    
-   3.10.0-862.2.3.el7.x86\_64
    
-   3.10.0-862.3.2.el7.x86\_64
    
-   3.10.0-862.3.3.el7.x86\_64
    
-   3.10.0-862.6.3.el7.x86\_64
    
-   3.10.0-862.9.1.el7.x86\_64
    
-   3.10.0-862.el7.x86\_64
    
-   3.10.0-957.1.3.el7.x86\_64
    
-   3.10.0-957.10.1.el7.x86\_64
    
-   3.10.0-957.12.1.el7.x86\_64
    
-   3.10.0-957.12.2.el7.x86\_64
    
-   3.10.0-957.21.2.el7.x86\_64
    
-   3.10.0-957.21.3.el7.x86\_64
    
-   3.10.0-957.27.2.el7.x86\_64
    
-   3.10.0-957.5.1.el7.x86\_64
    
-   3.10.0-957.el7.x86\_64
    
-   3.10.0-1062.1.1.el7.x86\_64
    
-   3.10.0-1062.1.2.el7.x86\_64
    
-   3.10.0-1062.12.1.el7.x86\_64
    
-   3.10.0-1062.18.1.el7.x86\_64
    
-   3.10.0-1062.4.1.el7.x86\_64
    
-   3.10.0-1062.4.2.el7.x86\_64
    
-   3.10.0-1062.4.3.el7.x86\_64
    
-   3.10.0-1062.7.1.el7.x86\_64
    
-   3.10.0-1062.9.1.el7.x86\_64
    
-   3.10.0-1062.el7.x86\_64
    
-   3.10.0-1127.10.1.el7.x86\_64
    
-   3.10.0-1127.13.1.el7.x86\_64
    
-   3.10.0-1127.18.2.el7.x86\_64
    
-   3.10.0-1127.19.1.el7.x86\_64
    
-   3.10.0-1127.8.2.el7.x86\_64
    
-   3.10.0-1127.el7.x86\_64
    
-   3.10.0-1160.11.1.el7.x86\_64
    
-   3.10.0-1160.15.2.el7.x86\_64
    
-   3.10.0-1160.2.2.el7.x86\_64
    
-   3.10.0-1160.21.1.el7.x86\_64
    
-   3.10.0-1160.24.1.el7.x86\_64
    
-   3.10.0-1160.25.1.el7.x86\_64
    
-   3.10.0-1160.31.1.el7.x86\_64
    
-   3.10.0-1160.36.2.el7.x86\_64
    
-   3.10.0-1160.41.1.el7.x86\_64
    
-   3.10.0-1160.42.2.el7.x86\_64
    
-   3.10.0-1160.45.1.el7.x86\_64
    
-   3.10.0-1160.49.1.el7.x86\_64
    
-   3.10.0-1160.53.1.el7.x86\_64
    
-   3.10.0-1160.59.1.el7.x86\_64
    
-   3.10.0-1160.6.1.el7.x86\_64
    
-   3.10.0-1160.62.1.el7.x86\_64
    
-   3.10.0-1160.66.1.el7.x86\_64
    
-   3.10.0-1160.el7.x86\_64
    
-   3.10.0-1160.71.1.el7.x86\_64
    
-   3.10.0-1160.76.1.el7.x86\_64
    
-   3.10.0-1160.80.1.el7.x86\_64
    
-   3.10.0-1160.83.1.el7.x86\_64
    
-   3.10.0-1160.108.1.el7.x86\_64
    
-   3.10.0-1160.105.1.el7.x86\_64
    
-   3.10.0-1160.102.1.el7.x86\_64
    
-   3.10.0-1160.99.1.el7.x86\_64
    
-   3.10.0-1160.95.1.el7.x86\_64
    
-   3.10.0-1160.92.1.el7.x86\_64
    
-   3.10.0-1160.90.1.el7.x86\_64
    
-   3.10.0-1160.88.1.el7.x86\_64
    
-   3.10.0-1160.81.1.el7.x86\_64
    
-   3.10.0-1160.2.1.el7.x86\_64
    
-   3.10.107-1.el6.elrepo.x86\_64
    

**4.4.x series**

-   4.4.248-1.el7.elrepo.x86\_64
    
-   4.4.240-1.el7.elrepo.x86\_64
    
-   4.4.231-1.el7.elrepo.x86\_64
    
-   4.4.228-2.el7.elrepo.x86\_64
    
-   4.4.225-1.el7.elrepo.x86\_64
    
-   4.4.223-1.el7.elrepo.x86\_64
    
-   4.4.219-1.el7.elrepo.x86\_64
    
-   4.4.217-1.el7.elrepo.x86\_64
    
-   4.4.216-1.el7.elrepo.x86\_64
    
-   4.4.202-1.el7.elrepo.x86\_64
    
-   4.4.196-1.el7.elrepo.x86\_64
    
-   4.4.175-1.el7.elrepo.x86\_64
    
-   4.4.169-1.el7.elrepo.x86\_64
    
-   4.4.71-1.el7.elrepo.x86\_64
    

**4.9.x–4.14.x series**

-   4.14.35-2047.505.4.3.el7uek.x86\_64
    
-   4.14.1-1.el7.elrepo.x86\_64
    
-   4.13.3-1.el7.elrepo.x86\_64
    
-   4.13.2-1.el7.elrepo.x86\_64
    
-   4.11.8-1.el7.elrepo.x86\_64
    
-   4.9.220-37.el7.x86\_64
    
-   4.9.215-36.el7.x86\_64
    

**4.18.x series**

-   4.18.10-1.el7.elrepo.x86\_64
    
-   4.18.8-1.el7.elrepo.x86\_64
    
-   4.18.0-529.el8.x86\_64
    
-   4.18.0-521.el8.x86\_64
    
-   4.18.0-513.el8.x86\_64
    
-   4.18.0-512.el8.x86\_64
    
-   4.18.0-500.el8.x86\_64
    
-   4.18.0-497.el8.x86\_64
    
-   4.18.0-496.el8.x86\_64
    
-   4.18.0-490.el8.x86\_64
    
-   4.18.0-485.el8.x86\_64
    
-   4.18.0-448.el8.x86\_64
    
-   4.18.0-408.el8.x86\_64
    
-   4.18.0-394.el8.x86\_64
    
-   4.18.0-383.el8.x86\_64
    
-   4.18.0-373.el8.x86\_64
    
-   4.18.0-372.19.1.el8\_6.x86\_64
    
-   4.18.0-80.11.2.el8\_0.x86\_64
    
-   4.18.0-147.3.1.el8\_1.x86\_64
    
-   4.18.0-147.5.1.el8\_1.x86\_64
    
-   4.18.0-147.8.1.el8\_1.x86\_64
    
-   4.18.0-193.el8.x86\_64
    
-   4.18.0-193.1.2.el8\_2.x86\_64
    
-   4.18.0-193.6.3.el8\_2.x86\_64
    
-   4.18.0-193.14.2.el8\_2.x86\_64
    
-   4.18.0-193.19.1.el8\_2.x86\_64
    
-   4.18.0-193.28.1.el8\_2.x86\_64
    
-   4.18.0-240.1.1.el8\_3.x86\_64
    
-   4.18.0-240.10.1.el8\_3.x86\_64
    
-   4.18.0-240.15.1.el8\_3.x86\_64
    
-   4.18.0-240.22.1.el8\_3.x86\_64
    
-   4.18.0-305.3.1.el8.x86\_64
    
-   4.18.0-305.7.1.el8\_4.x86\_64
    
-   4.18.0-305.10.2.el8\_4.x86\_64
    
-   4.18.0-305.12.1.el8\_4.x86\_64
    
-   4.18.0-305.17.1.el8\_4.x86\_64
    
-   4.18.0-305.19.1.el8\_4.x86\_64
    
-   4.18.0-305.25.1.el8\_4.x86\_64
    
-   4.18.0-348.el8.x86\_64
    
-   4.18.0-348.2.1.el8\_5.x86\_64
    
-   4.18.0-348.7.1.el8\_5.x86\_64
    
-   4.18.0-348.12.2.el8\_5.x86\_64
    
-   4.18.0-348.20.1.el8\_5.x86\_64
    
-   4.18.0-358.el8.x86\_64
    
-   4.18.0-365.el8.x86\_64
    
-   4.18.0-372.9.1.el8.x86\_64
    
-   4.18.0-372.26.1.el8\_6.x86\_64
    
-   4.18.0-372.16.1.el8\_6.0.1.x86\_64
    
-   4.18.0-372.32.1.el8\_6.x86\_64
    
-   4.18.0-425.3.1.el8.x86\_64
    
-   4.18.0-425.10.1.el8\_7.x86\_64
    
-   4.18.0-425.13.1.el8\_7.x86\_64
    
-   4.18.0-425.19.2.el8\_7.x86\_64
    
-   4.18.0-477.10.1.el8\_8.x86\_64
    
-   4.18.0-477.13.1.el8\_8.x86\_64
    
-   4.18.0-477.15.1.el8\_8.x86\_64
    
-   4.18.0-477.21.1.el8\_8.x86\_64
    
-   4.18.0-477.27.1.el8\_8.x86\_64
    
-   4.18.0-477.27.2.el8\_8.x86\_64
    
-   4.18.0-513.9.1.el8\_9.x86\_64
    
-   4.18.0-513.11.1.el8\_9.x86\_64
    

**4.19.x–4.20.x series**

-   4.20.13-1.el7.elrepo.x86\_64
    
-   4.19.118-2.el7.centos.x86\_64
    
-   4.19.113-300.el7.x86\_64
    
-   4.19.104-300.el7.x86\_64
    
-   4.19.110-300.el7.x86\_64
    
-   4.19.94-300.el7.x86\_64
    
-   4.19.12-1.el7.elrepo.x86\_64
    
-   4.19.1-1.el7.elrepo.x86\_64
    

**5.3.x–5.8.x series**

-   5.8.8-1.el7.elrepo.x86\_64
    
-   5.6.5-1.el7.elrepo.x86\_64
    
-   5.5.7-1.el7.elrepo.x86\_64
    
-   5.5.5-1.el7.elrepo.x86\_64
    
-   5.5.1-1.el7.elrepo.x86\_64
    
-   5.4.268-1.el8.elrepo.x86\_64
    
-   5.4.268-1.el7.elrepo.x86\_64
    
-   5.4.265-1.el7.elrepo.x86\_64
    
-   5.4.264-1.el7.elrepo.x86\_64
    
-   5.4.262-1.el8.elrepo.x86\_64
    
-   5.4.260-1.el8.elrepo.x86\_64
    
-   5.4.259-1.el7.elrepo.x86\_64
    
-   5.4.258-1.el7.elrepo.x86\_64
    
-   5.4.257-1.el8.elrepo.x86\_64
    
-   5.4.257-1.el7.elrepo.x86\_64
    
-   5.4.256-1.el7.elrepo.x86\_64
    
-   5.4.255-1.el7.elrepo.x86\_64
    
-   5.4.254-1.el7.elrepo.x86\_64
    
-   5.4.253-1.el8.elrepo.x86\_64
    
-   5.4.249-1.el7.elrepo.x86\_64
    
-   5.4.247-1.el7.elrepo.x86\_64
    
-   5.4.246-1.el7.elrepo.x86\_64
    
-   5.4.245-1.el7.elrepo.x86\_64
    
-   5.4.243-1.el7.elrepo.x86\_64
    
-   5.4.242-1.el7.elrepo.x86\_64
    
-   5.4.240-1.el7.elrepo.x86\_64
    
-   5.4.231-1.el7.elrepo.x86\_64
    
-   5.4.230-1.el7.elrepo.x86\_64
    
-   5.4.228-1.el7.elrepo.x86\_64
    
-   5.4.225-200.el7.x86\_64
    
-   5.4.225-1.el7.elrepo.x86\_64
    
-   5.4.223-1.el7.elrepo.x86\_64
    
-   5.4.221-1.el7.elrepo.x86\_64
    
-   5.4.210-1.el7.elrepo.x86\_64
    
-   5.4.209-1.el7.elrepo.x86\_64
    
-   5.4.208-1.el7.elrepo.x86\_64
    
-   5.4.207-1.el7.elrepo.x86\_64
    
-   5.4.204-1.el7.elrepo.x86\_64
    
-   5.4.201-1.el7.elrepo.x86\_64
    
-   5.4.195-1.el7.elrepo.x86\_64
    
-   5.4.194-1.el7.elrepo.x86\_64
    
-   5.4.188-1.el7.elrepo.x86\_64
    
-   5.4.181-1.el7.elrepo.x86\_64
    
-   5.4.179-1.el7.elrepo.x86\_64
    
-   5.4.173-1.el7.elrepo.x86\_64
    
-   5.4.172-1.el7.elrepo.x86\_64
    
-   5.4.170-1.el7.elrepo.x86\_64
    
-   5.4.168-1.el7.elrepo.x86\_64
    
-   5.4.165-1.el7.elrepo.x86\_64
    
-   5.4.157-1.el7.elrepo.x86\_64
    
-   5.4.155-200.el7.x86\_64
    
-   5.4.155-1.el7.elrepo.x86\_64
    
-   5.4.150-1.el7.elrepo.x86\_64
    
-   5.4.148-1.el7.elrepo.x86\_64
    
-   5.4.144-1.el7.elrepo.x86\_64
    
-   5.4.143-1.el7.elrepo.x86\_64
    
-   5.4.132-1.el7.elrepo.x86\_64
    
-   5.4.131-1.el7.elrepo.x86\_64
    
-   5.4.129-1.el7.elrepo.x86\_64
    
-   5.4.119-19.0009.28
    
-   5.4.119-19-0009.11
    
-   5.4.119-19-0009.1
    
-   5.4.109-1.el7.elrepo.x86\_64
    
-   5.4.91-1.el7.elrepo.x86\_64
    
-   5.4.86-1.el7.elrepo.x86\_64
    
-   5.4.42-200.el7.x86\_64
    
-   5.4.8-1.el7.elrepo.x86\_64
    
-   5.3.8-1.el7.elrepo.x86\_64
    
-   5.3.7-1.el7.elrepo.x86\_64
    
-   5.3.6-1.el7.elrepo.x86\_64
    
-   5.3.0-1.el7.elrepo.x86\_64
    

**5.10.x–5.13.x series**

-   5.13.2-1.el7.elrepo.x86\_64
    
-   5.12.12-1.el7.elrepo.x86\_64
    
-   5.12.3-1.el7.elrepo.x86\_64
    
-   5.11.8-1.el7.elrepo.x86\_64
    
-   5.11.6-1.el7.elrepo.x86\_64
    
-   5.11.1-1.el7.elrepo.x86\_64
    
-   5.10.9-1.el7.elrepo.x86\_64
    

**5.14.0 series**

-   5.14.0-412.el9.x86\_64
    
-   5.14.0-407.el9.x86\_64
    
-   5.14.0-391.el9.x86\_64
    
-   5.14.0-386.el9.x86\_64
    
-   5.14.0-383.el9.x86\_64
    
-   5.14.0-366.el9.x86\_64
    
-   5.14.0-361.el9.x86\_64
    
-   5.14.0-350.el9.x86\_64
    
-   5.14.0-333.el9.x86\_64
    
-   5.14.0-325.el9.x86\_64
    
-   5.14.0-312.el9.x86\_64
    
-   5.14.0-307.el9.x86\_64
    
-   5.14.0-299.el9.x86\_64
    
-   5.14.0-289.el9.x86\_64
    
-   5.14.0-285.el9.x86\_64
    
-   5.14.0-267.el9.x86\_64
    
-   5.14.0-252.el9.x86\_64
    
-   5.14.0-229.el9.x86\_64
    
-   5.14.0-226.el9.x86\_64
    
-   5.14.0-210.el9.x86\_64
    
-   5.14.0-205.el9.x86\_64
    
-   5.14.0-197.el9.x86\_64
    
-   5.14.0-191.el9.x86\_64
    
-   5.14.0-177.el9.x86\_64
    
-   5.14.0-160.el9.x86\_64
    
-   5.14.0-148.el9.x86\_64
    
-   5.14.0-134.el9.x86\_64
    
-   5.14.0-119.el9.x86\_64
    
-   5.14.0-362.18.1.el9\_3.x86\_64
    
-   5.14.0-362.13.1.el9\_3.x86\_64
    
-   5.14.0-362.8.1.el9\_3.x86\_64
    
-   5.14.0-284.30.1.el9\_2.x86\_64
    
-   5.14.0-284.25.1.el9\_2.x86\_64
    
-   5.14.0-284.18.1.el9\_2.x86\_64
    
-   5.14.0-284.11.1.el9\_2.x86\_64
    
-   5.14.0-162.12.1.el9\_1.x86\_64
    
-   5.14.0-162.18.1.el9\_1.x86\_64
    
-   5.14.0-162.23.1.el9\_1.x86\_64
    
-   5.14.0-162.6.1.el9\_1.0.1.x86\_64
    
-   5.14.0-162.6.1.el9\_1.x86\_64
    
-   5.14.0-70.17.1.el9\_0.x86\_64
    
-   5.14.0-70.30.1.el9\_0.x86\_64
    

**5.15.x–5.19.x series**

-   5.19.12-1.el7.elrepo.x86\_64
    
-   5.19.1-1.el7.elrepo.x86\_64
    
-   5.19.0-1.el7.elrepo.x86\_64
    
-   5.18.7-1.el7.elrepo.x86\_64
    
-   5.18.6-1.el7.elrepo.x86\_64
    
-   5.18.4-1.el7.elrepo.x86\_64
    
-   5.18.0-1.el7.elrepo.x86\_64
    
-   5.17.6-1.el7.elrepo.x86\_64
    
-   5.17.1-1.el7.elrepo.x86\_64
    
-   5.17.0-1.el7.elrepo.x86\_64
    
-   5.16.12-1.el7.elrepo.x86\_64
    
-   5.15.102-1.el7.x86\_64
    
-   5.15.11-1.el7.elrepo.x86\_64
    
-   5.15.6-1.el7.elrepo.x86\_64
    
-   5.15.5-1.el7.elrepo.x86\_64
    
-   5.15.2-1.el7.elrepo.x86\_64
    

**6.x.x series**

-   6.6.4-1.el8.elrepo.x86\_64
    
-   6.6.1-1.el7.elrepo.x86\_64
    
-   6.4.12-1.el7.elrepo.x86\_64
    
-   6.4.11-1.el7.elrepo.x86\_64
    
-   6.4.10-1.el7.elrepo.x86\_64
    
-   6.4.8-1.el7.elrepo.x86\_64
    
-   6.4.7-1.el7.elrepo.x86\_64
    
-   6.4.3-1.el7.elrepo.x86\_64
    
-   6.4.2-1.el7.elrepo.x86\_64
    
-   6.4.1-1.el7.elrepo.x86\_64
    
-   6.4.0-1.el7.elrepo.x86\_64
    
-   6.3.9-1.el7.elrepo.x86\_64
    
-   6.3.8-1.el7.elrepo.x86\_64
    
-   6.3.7-1.el7.elrepo.x86\_64
    
-   6.3.6-1.el7.elrepo.x86\_64
    
-   6.3.5-1.el7.elrepo.x86\_64
    
-   6.3.4-1.el7.elrepo.x86\_64
    
-   6.3.3-1.el7.elrepo.x86\_64
    
-   6.3.2-1.el7.elrepo.x86\_64
    
-   6.3.1-1.el7.elrepo.x86\_64
    
-   6.3.0-1.el7.elrepo.x86\_64
    
-   6.2.12-1.el8.elrepo.x86\_64
    
-   6.2.12-1.el7.elrepo.x86\_64
    
-   6.2.11-1.el7.elrepo.x86\_64
    
-   6.2.10-1.el7.elrepo.x86\_64
    
-   6.2.9-1.el7.elrepo.x86\_64
    
-   6.2.8-1.el7.elrepo.x86\_64
    
-   6.2.7-1.el7.elrepo.x86\_64
    
-   6.2.6-1.el7.elrepo.x86\_64
    
-   6.2.2-1.el7.elrepo.x86\_64
    
-   6.2.1-1.el7.elrepo.x86\_64
    
-   6.1.0-1.el7.elrepo.x86\_64
    
-   6.0.10-1.el7.elrepo.x86\_64
    
-   6.0.6-1.el9.elrepo.x86\_64
    
-   6.0.1-1.el7.elrepo.x86\_64
    

Ubuntu (64-bit)

Unlimited. However, only limited kernel versions are supported.

**3.x.x series**

-   3.2.0-67-generic
    
-   3.2.0-126-generic
    
-   3.13.0-30-generic
    
-   3.13.0-32-generic
    
-   3.13.0-65-generic
    
-   3.13.0-86-generic
    
-   3.13.0-92-generic
    
-   3.13.0-135-generic
    
-   3.13.0-144-generic
    
-   3.13.0-145-generic
    
-   3.13.0-153-generi
    
-   3.13.0-164-generic
    
-   3.13.0-169-generic
    
-   3.13.0-170-generic
    
-   3.19.0-25-generic
    
-   3.19.0-80-generic
    

**4.4.0 series**

-   4.4.0-53-generic
    
-   4.4.0-57-generic
    
-   4.4.0-62-generic
    
-   4.4.0-63-generic
    
-   4.4.0-79-generic
    
-   4.4.0-81-generic
    
-   4.4.0-85-generic
    
-   4.4.0-87-generic
    
-   4.4.0-93-generic
    
-   4.4.0-96-generic
    
-   4.4.0-97-generic
    
-   4.4.0-98-generic
    
-   4.4.0-101-generic
    
-   4.4.0-104-generic
    
-   4.4.0-105-generic
    
-   4.4.0-109-generic
    
-   4.4.0-112-generic
    
-   4.4.0-116-generic
    
-   4.4.0-117-generic
    
-   4.4.0-119-generic
    
-   4.4.0-122-generic
    
-   4.4.0-124-generic
    
-   4.4.0-127-generic
    
-   4.4.0-128-generic
    
-   4.4.0-130-generic
    
-   4.4.0-131-generic
    
-   4.4.0-135-generic
    
-   4.4.0-137-generic
    
-   4.4.0-138-generic
    
-   4.4.0-139-generic
    
-   4.4.0-140-generic
    
-   4.4.0-141-generi
    
-   4.4.0-142-generic
    
-   4.4.0-143-generic
    
-   4.4.0-145-generic
    
-   4.4.0-146-generic
    
-   4.4.0-148-generic
    
-   4.4.0-150-generic
    
-   4.4.0-151-generic
    
-   4.4.0-154-generic
    
-   4.4.0-157-generic
    
-   4.4.0-159-generic
    
-   4.4.0-161-generic
    
-   4.4.0-164-generic
    
-   4.4.0-165-generic
    
-   4.4.0-166-generic
    
-   4.4.0-169-generic
    
-   4.4.0-170-generic
    
-   4.4.0-171-generic
    
-   4.4.0-173-generic
    
-   4.4.0-174-generic
    
-   4.4.0-176-generic
    
-   4.4.0-177-generic
    
-   4.4.0-178-generic
    
-   4.4.0-179-generic
    
-   4.4.0-184-generic
    
-   4.4.0-185-generic
    
-   4.4.0-186-generic
    
-   4.4.0-187-generic
    
-   4.4.0-189-generic
    
-   4.4.0-190-generic
    
-   4.4.0-193-generic
    
-   4.4.0-194-generic
    
-   4.4.0-197-generic
    
-   4.4.0-198-generic
    
-   4.4.0-200-generic
    
-   4.4.0-201-generic
    
-   4.4.0-203-generic
    
-   4.4.0-206-generic
    
-   4.4.0-208-generic
    
-   4.4.0-210-generic
    

**4.15.0 series**

-   4.15.0-13-generic
    
-   4.15.0-15-generic
    
-   4.15.0-23-generic
    
-   4.15.0-29-generic
    
-   4.15.0-42-generic
    
-   4.15.0-43-generic
    
-   4.15.0-45-generic
    
-   4.15.0-46-generic
    
-   4.15.0-47-generic
    
-   4.15.0-48-generic
    
-   4.15.0-51-generic
    
-   4.15.0-52-generic
    
-   4.15.0-54-generic
    
-   4.15.0-55-generic
    
-   4.15.0-58-generic
    
-   4.15.0-62-generic
    
-   4.15.0-64-generic
    
-   4.15.0-65-generic
    
-   4.15.0-66-generic
    
-   4.15.0-70-generic
    
-   4.15.0-72-generic
    
-   4.15.0-74-generic
    
-   4.15.0-76-generic
    
-   4.15.0-88-generic
    
-   4.15.0-91-generic
    
-   4.15.0-96-generic
    
-   4.15.0-99-generic
    
-   4.15.0-101-generic
    
-   4.15.0-106-generic
    
-   4.15.0-108-generic
    
-   4.15.0-109-generic
    
-   4.15.0-111-generic
    
-   4.15.0-112-generic
    
-   4.15.0-117-generic
    
-   4.15.0-118-generic
    
-   4.15.0-121-generic
    
-   4.15.0-122-generic
    
-   4.15.0-124-generic
    
-   4.15.0-128-generic
    
-   4.15.0-129-generic
    
-   4.15.0-130-generic
    
-   4.15.0-132-generic
    
-   4.15.0-134-generic
    
-   4.15.0-135-generic
    
-   4.15.0-136-generic
    
-   4.15.0-137-generic
    
-   4.15.0-139-generic
    
-   4.15.0-140-generic
    
-   4.15.0-141-generic
    
-   4.15.0-142-generic
    
-   4.15.0-144-generic
    
-   4.15.0-145-generic
    
-   4.15.0-147-generic
    
-   4.15.0-143-generic
    
-   4.15.0-151-generic
    
-   4.15.0-153-generic
    
-   4.15.0-154-generic
    
-   4.15.0-156-generic
    
-   4.15.0-158-generic
    
-   4.15.0-159-generic
    
-   4.15.0-161-generic
    
-   4.15.0-162-generic
    
-   4.15.0-163-generic
    
-   4.15.0-166-generic
    
-   4.15.0-167-generic
    
-   4.15.0-169-generic
    
-   4.15.0-170-generic
    
-   4.15.0-171-generic
    
-   4.15.0-173-generic
    
-   4.15.0-175-generic
    
-   4.15.0-176-generic
    
-   4.15.0-177-generic
    
-   4.15.0-180-generic
    
-   4.15.0-181-generic
    
-   4.15.0-184-generic
    
-   4.15.0-187-generic
    
-   4.15.0-188-generic
    
-   4.15.0-189-generic
    
-   4.15.0-190-generic
    
-   4.15.0-191-generic
    
-   4.15.0-192-generic
    
-   4.15.0-193-generic
    
-   4.15.0-194-generic
    
-   4.15.0-196-generic
    
-   4.15.0-197-generic
    
-   4.15.0-200-generic
    
-   4.15.0-201-generic
    
-   4.15.0-202-generic
    
-   4.15.0-204-generic
    
-   4.15.0-206-generic
    
-   4.15.0-208-generic
    
-   4.15.0-209-generic
    
-   4.15.0-210-generic
    
-   4.15.0-211-generic
    
-   4.15.0-212-generic
    
-   4.15.0-213-generic
    
-   4.15.0-1047-gcp
    
-   4.15.0-1098-gcp
    

**4.18.0 series**

-   4.18.0-15-generic
    
-   4.18.0-21-generic
    

**5.3.0 series**

-   5.3.0-40-generic
    

**5.4.0 series**

-   5.4.0-31-generic
    
-   5.4.0-40-generic
    
-   5.4.0-42-generic
    
-   5.4.0-45-generic
    
-   5.4.0-47-generic
    
-   5.4.0-48-generic
    
-   5.4.0-52-generic
    
-   5.4.0-53-generic
    
-   5.4.0-54-generic
    
-   5.4.0-58-generic
    
-   5.4.0-59-generic
    
-   5.4.0-60-generic
    
-   5.4.0-62-generic
    
-   5.4.0-65-generic
    
-   5.4.0-66-generic
    
-   5.4.0-67-generic
    
-   5.4.0-70-generic
    
-   5.4.0-72-generic
    
-   5.4.0-73-generic
    
-   5.4.0-74-generic
    
-   5.4.0-75-generic
    
-   5.4.0-77-generic
    
-   5.4.0-80-generic
    
-   5.4.0-81-generic
    
-   5.4.0-83-generic
    
-   5.4.0-84-generic
    
-   5.4.0-86-generic
    
-   5.4.0-88-generic
    
-   5.4.0-89-generic
    
-   5.4.0-90-generic
    
-   5.4.0-91-generic
    
-   5.4.0-92-generic
    
-   5.4.0-94-generic
    
-   5.4.0-96-generic
    
-   5.4.0-97-generic
    
-   5.4.0-99-generic
    
-   5.4.0-100-generic
    
-   5.4.0-102-generic
    
-   5.4.0-104-generic
    
-   5.4.0-105-generic
    
-   5.4.0-106-generic
    
-   5.4.0-107-generic
    
-   5.4.0-108-generic
    
-   5.4.0-109-generic
    
-   5.4.0-110-generic
    
-   5.4.0-113-generic
    
-   5.4.0-117-generic
    
-   5.4.0-120-generic
    
-   5.4.0-121-generic
    
-   5.4.0-122-generic
    
-   5.4.0-123-generic
    
-   5.4.0-124-generic
    
-   5.4.0-125-generic
    
-   5.4.0-126-generic
    
-   5.4.0-128-generic
    
-   5.4.0-131-generic
    
-   5.4.0-132-generic
    
-   5.4.0-135-generic
    
-   5.4.0-136-generic
    
-   5.4.0-137-generic
    
-   5.4.0-139-generic
    
-   5.4.0-144-generic
    
-   5.4.0-146-generic
    
-   5.4.0-147-generic
    
-   5.4.0-148-generic
    
-   5.4.0-149-generic
    
-   5.4.0-150-generic
    
-   5.4.0-151-generic
    
-   5.4.0-152-generic
    
-   5.4.0-153-generic
    
-   5.4.0-154-generic
    
-   5.4.0-155-generic
    
-   5.4.0-156-generic
    
-   5.4.0-159-generic
    
-   5.4.0-162-generic
    
-   5.4.0-163-generic
    
-   5.4.0-164-generic
    
-   5.4.0-165-generic
    
-   5.4.0-166-generic
    
-   5.4.0-167-generic
    
-   5.4.0-169-generic
    
-   5.4.0-170-generic
    
-   5.4.0-171-generic
    
-   5.4.0-172-generic
    
-   5.4.0-173-generic
    

**5.15.0 series**

-   5.15.0-94-generic
    
-   5.15.0-92-generic
    
-   5.15.0-91-generic
    
-   5.15.0-89-generic
    
-   5.15.0-88-generic
    
-   5.15.0-87-generic
    
-   5.15.0-86-generic
    
-   5.15.0-84-generic
    
-   5.15.0-83-generic
    
-   5.15.0-82-generic
    
-   5.15.0-79-generic
    
-   5.15.0-78-generic
    
-   5.15.0-76-generic
    
-   5.15.0-75-generic
    
-   5.15.0-73-generic
    
-   5.15.0-72-generic
    
-   5.15.0-71-generic
    
-   5.15.0-70-generic
    
-   5.15.0-69-generic
    
-   5.15.0-67-generic
    
-   5.15.0-60-generic
    
-   5.15.0-58-generic
    
-   5.15.0-56-generic
    
-   5.15.0-53-generic
    
-   5.15.0-52-generic
    
-   5.15.0-46-generic
    
-   5.15.0-43-generic
    
-   5.15.0-41-generic
    
-   5.15.0-40-generic
    

**6.2.0 series**

-   6.2.0-1018-gcp
    

Debian

Unlimited. However, only limited kernel versions are supported.

**4.9.0 series**

-   4.9.0-19-amd64
    
-   4.9.0-18-amd64
    
-   4.9.0-17-amd64
    
-   4.9.0-16-amd64
    
-   4.9.0-15-amd64
    
-   4.9.0-14-amd64
    
-   4.9.0-13-amd64
    
-   4.9.0-12-amd64
    
-   4.9.0-11-amd64
    
-   4.9.0-9-amd64
    
-   4.9.0-8-amd64
    
-   4.9.0-4-amd64
    

**4.19.0 series**

-   4.19.0-25-amd64
    
-   4.19.0-24-amd64
    
-   4.19.0-23-amd64
    
-   4.19.0-22-amd64
    
-   4.19.0-21-amd64
    
-   4.19.0-20-amd64
    
-   4.19.0-18-amd64
    
-   4.19.0-17-amd64
    
-   4.19.0-16-amd64
    
-   4.19.0-13-amd64
    
-   4.19.0-12-amd64
    
-   4.19.0-10-amd64
    
-   4.19.0-9-amd64
    
-   4.19.0-8-amd64
    
-   4.19.0-6-amd64
    

**5.10.0 series**

-   5.10.0-27-amd64
    
-   5.10.0-26-amd64
    
-   5.10.0-25-amd64
    
-   5.10.0-24-amd64
    
-   5.10.0-23-amd64
    
-   5.10.0-22-amd64
    
-   5.10.0-21-amd64
    
-   5.10.0-20-amd64
    
-   5.10.0-19-amd64
    
-   5.10.0-18-amd64
    
-   5.10.0-17-amd64
    
-   5.10.0-16-amd64
    
-   5.10.0-15-amd64
    
-   5.10.0-14-amd64
    
-   5.10.0-11-amd64
    
-   5.10.0-10-amd64
    
-   5.10.0-9-amd64
    
-   5.10.0-8-amd64
    

**6.1.0 series**

-   6.1.0-18-amd64
    
-   6.1.0-17-amd64
    
-   6.1.0-16-amd64
    
-   6.1.0-13-amd64
    
-   6.1.0-12-amd64
    
-   6.1.0-11-amd64
    
-   6.1.0-10-amd64
    

Anolis OS (64-bit)

Unlimited. However, only limited kernel versions are supported.

**3.10.0 series**

-   3.10.0-1062.an7.x86\_64
    
-   3.10.0-1160.an7.x86\_64
    
-   3.10.0-1160.59.1.0.1.an7.x86\_64
    
-   3.10.0-1160.62.1.0.1.an7.x86\_64
    
-   3.10.0-1160.66.1.0.1.an7.x86\_64
    
-   3.10.0-1160.71.1.0.1.an7.x86\_64
    
-   3.10.0-1160.76.1.0.1.an7.x86\_64
    
-   3.10.0-1160.80.1.0.1.an7.x86\_64
    
-   3.10.0-1160.81.1.0.1.an7.x86\_64
    
-   3.10.0-1160.83.1.0.1.an7.x86\_64
    
-   3.10.0-1160.88.1.0.1.an7.x86\_64
    

**4.18.0 series**

-   4.18.0-305.an8.x86\_64
    
-   4.18.0-348.2.1.an8\_4.x86\_64
    
-   4.18.0-348.12.2.an8.x86\_64
    
-   4.18.0-348.20.1.an8\_5.x86\_64
    
-   4.18.0-348.23.1.an8\_5.x86\_64
    
-   4.18.0-372.9.1.an8.x86\_64
    
-   4.18.0-372.16.1.an8\_6.x86\_64
    
-   4.18.0-372.19.1.an8\_6.x86\_64
    
-   4.18.0-372.26.1.an8\_6.x86\_64
    
-   4.18.0-372.32.1.an8\_6.x86\_64
    
-   4.18.0-425.13.1.0.1.an8.x86\_64
    
-   4.18.0-425.19.2.0.1.an8.x86\_64
    
-   4.18.0-477.13.1.0.1.an8.x86\_64
    
-   4.18.0-477.21.1.0.1.an8.x86\_64
    
-   4.18.0-477.27.1.0.1.an8.x86\_64
    
-   4.18.0-477.36.1.0.1.an8.x86\_64
    

**4.19.91 series**

-   4.19.91-24.8.an8.x86\_64
    
-   4.19.91-25.2.an7.x86\_64
    
-   4.19.91-25.7.an7.x86\_64
    
-   4.19.91-26.an7.x86\_64
    
-   4.19.91-26.4.an7.x86\_64
    
-   4.19.91-26.5.an7.x86\_64
    
-   4.19.91-26.6.an7.x86\_64
    
-   4.19.91-25.7.an8.x86\_64
    
-   4.19.91-25.8.an8.x86\_64
    
-   4.19.91-26.an8.x86\_64
    
-   4.19.91-26.1.an8.x86\_64
    
-   4.19.91-26.4.an8.x86\_64
    
-   4.19.91-26.5.an8.x86\_64
    
-   4.19.91-26.6.an8.x86\_64
    
-   4.19.91-27.an7.x86\_64
    
-   4.19.91-27.1.an7.x86\_64
    
-   4.19.91-27.4.an8.x86\_64
    
-   4.19.91-27.7.an7.x86\_64
    

**5.4.x series**

-   5.4.262-1.el8.elrepo.x86\_64
    

**5.10.134 series**

-   5.10.134-16.1.an8.x86\_64
    
-   5.10.134-15.2.an8.x86\_64
    
-   5.10.134-15.an8.x86\_64
    
-   5.10.134-14.1.an8.x86\_64
    
-   5.10.134-14.an8.x86\_64
    
-   5.10.134-13.1.an8.x86\_64
    
-   5.10.134-13.an8.x86\_64
    

RHEL

Unlimited. However, only limited kernel versions are supported.

**2.6.32 series**

-   2.6.32-220.el6.x86\_64
    
-   2.6.32-279.el6.x86\_64
    
-   2.6.32-358.el6.x86\_64
    
-   2.6.32-431.el6.x86\_64
    
-   2.6.32-573.el6.x86\_64
    
-   2.6.32-696.el6.x86\_64
    
-   2.6.32-754.el6.x86\_64
    
-   2.6.32-754.9.1.el6.x86\_64
    
-   2.6.32-754.17.1.el6.x86\_64
    
-   2.6.32-754.35.1.el6.x86\_64
    

**3.10.0 series**

-   3.10.0-693.2.2.el7.x86\_64
    
-   3.10.0-862.el7.x86\_64
    
-   3.10.0-957.el7.x86\_64
    
-   3.10.0-1062.el7.x86\_64
    
-   3.10.0-1127.el7.x86\_64
    
-   3.10.0-1160.el7.x86\_64
    
-   3.10.0-1160.2.1.el7.x86\_64
    
-   3.10.0-1160.11.1.el7.x86\_64
    
-   3.10.0-1160.21.1.el7.x86\_64
    
-   3.10.0-1160.42.2.el7.x86\_64
    
-   3.10.0-1160.45.1.el7.x86\_64
    
-   3.10.0-1160.59.1.el7.x86\_64
    
-   3.10.0-1160.71.1.el7.x86\_64
    
-   3.10.0-1160.76.1.el7.x86\_64
    
-   3.10.0-1160.80.1.el7.x86\_64
    
-   3.10.0-1160.81.1.el7.x86\_64
    
-   3.10.0-1160.83.1.el7.x86\_64
    
-   3.10.0-1160.88.1.el7.x86\_64
    
-   3.10.0-1160.90.1.el7.x86\_64
    
-   3.10.0-1160.92.1.el7.x86\_64
    
-   3.10.0-1160.95.1.el7.x86\_64
    
-   3.10.0-1160.99.1.el7.x86\_64
    
-   3.10.0-1160.102.1.el7.x86\_64
    
-   3.10.0-1160.108.1.el7.x86\_64
    

**4.18.0 series**

-   4.18.0-80.el8.x86\_64
    
-   4.18.0-305.3.1.el8\_4.x86\_64
    
-   4.18.0-348.2.1.el8\_5.x86\_64
    
-   4.18.0-348.12.2.el8\_5.x86\_64
    
-   4.18.0-372.9.1.el8.x86\_64
    
-   4.18.0-372.19.1.el8\_6.x86\_64
    
-   4.18.0-425.19.2.el8\_7.x86\_64
    
-   4.18.0-477.10.1.el8\_8.x86\_64
    
-   4.18.0-477.13.1.el8\_8.x86\_64
    
-   4.18.0-477.15.1.el8\_8.x86\_64
    
-   4.18.0-477.21.1.el8\_8.x86\_64
    
-   4.18.0-513.11.1.el8\_9.x86\_64
    

**5.14.0 series**

-   5.14.0-284.11.1.el9\_2.x86\_64
    

Alibaba Cloud Linux (64-bit)

Unlimited. However, only limited kernel versions are supported.

**3.10.0 series**

-   3.10.0-1160.al7.1.x86\_64
    
-   3.10.0-1127.19.1.al7.1.x86\_64
    
-   3.10.0-1127.al7.1.x86\_64
    
-   3.10.0-1062.12.1.al7.1.x86\_64
    
-   3.10.0-1062.4.1.al7.1.x86\_64
    
-   3.10.0-514.2.3.al7.x86\_64
    

**4.4.95 series**

-   4.4.24-2.al7.x86\_64
    
-   4.4.95-1.al7.x86\_64
    
-   4.4.95-2.al7.x86\_64
    
-   4.4.95-3.al7.x86\_64
    

**4.19.x series**

-   4.19.24-7.al7.x86\_64
    
-   4.19.24-7.14.al7.x86\_64
    
-   4.19.24-9.al7.x86\_64
    
-   4.19.34-11.al7.x86\_64
    
-   4.19.36-12.al7.x86\_64
    
-   4.19.43-13.2.al7.x86\_64
    
-   4.19.57-15.1.al7.x86\_64
    
-   4.19.81-17.al7.x86\_64
    
-   4.19.81-17.1.al7.x86\_64
    
-   4.19.81-17.2.al7.x86\_64
    
-   4.19.91-18.al7.x86\_64
    
-   4.19.91-19.1.al7.x86\_64
    
-   4.19.91-19.2.al7.x86\_64
    
-   4.19.91-21.al7.x86\_64
    
-   4.19.91-21.2.al7.x86\_64
    
-   4.19.91-22.1.al7.x86\_64
    
-   4.19.91-22.2.al7.x86\_64
    
-   4.19.91-22.al7.x86\_64
    
-   4.19.91-22.fc.1.al7.x86\_64
    
-   4.19.91-23.al7.x86\_64
    
-   4.19.91-23.1.al7.x86\_64
    
-   4.19.91-24.al7.x86\_64
    
-   4.19.91-24.1.al7.x86\_64
    
-   4.19.91-25.al7.x86\_64
    
-   4.19.91-25.1.al7.x86\_64
    
-   4.19.91-25.3.al7.x86\_64
    
-   4.19.91-25.6.al7.x86\_64
    
-   4.19.91-25.7.al7.x86\_64
    
-   4.19.91-25.8.al7.x86\_64
    
-   4.19.91-26.al7.x86\_64
    
-   4.19.91-26.1.al7.x86\_64
    
-   4.19.91-26.2.al7.x86\_64
    
-   4.19.91-26.3.al7.x86\_64
    
-   4.19.91-26.4.al7.x86\_64
    
-   4.19.91-26.6.al7.x86\_64
    
-   4.19.91-26.5.al7.x86\_64
    
-   4.19.91-27.al7.x86\_64
    
-   4.19.91-27.1.al7.x86\_64
    
-   4.19.91-27.2.al7.x86\_64
    
-   4.19.91-27.3.al7.x86\_64
    
-   4.19.91-27.4.al7.x86\_64
    
-   4.19.91-27.5.al7.x86\_64
    
-   4.19.91-27.6.al7.x86\_64
    
-   4.19.91-27.7.al7.x86\_64
    

**5.10.x series**

-   5.10.23-5.al8.x86\_64
    
-   5.10.23-6.al8.x86\_64
    
-   5.10.23-6.1.al8.x86\_64
    
-   5.10.60-9.al8.x86\_64
    
-   5.10.84-10.2.al8.x86\_64
    
-   5.10.84-10.3.al8.x86\_64
    
-   5.10.84-10.4.al8.x86\_64
    
-   5.10.112-11.al8.x86\_64
    
-   5.10.112-11.1.al8.x86\_64
    
-   5.10.112-11.2.al8.x86\_64
    
-   5.10.134-12.al8.x86\_64
    
-   5.10.134-12.1.al8.x86\_64
    
-   5.10.134-12.2.al8.x86\_64
    
-   5.10.134-13.al8.x86\_64
    
-   5.10.134-13.1.al8.x86\_64
    
-   5.10.134-14.al8.x86\_64
    
-   5.10.134-14.1.al8.x86\_64
    
-   5.10.134-15.al8.x86\_64
    
-   5.10.134-15.1.al8.x86\_64
    
-   5.10.134-15.2.al8.x86\_64
    
-   5.10.134-16.al8.x86\_64
    
-   5.10.134-16.1.al8.x86\_64
    

Oracle Linux

Unlimited. However, only limited kernel versions are supported.

**4.14.35 series**

-   4.14.35-2047.505.4.3.el7uek.x86\_64
    

**5.4.17 series**

-   5.4.17-2136.311.6.1.el8uek.x86\_64
    
-   5.4.17-2136.302.7.2.2.el8uek.x86\_64
    
-   5.4.17-2136.310.7.1.el8uek.x86\_64
    

## Step 1: Purchase web tamper-proofing quotas

Before you use the web tamper-proofing feature, make sure that your Alibaba Cloud account has a sufficient number of web tamper-proofing quotas.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Protection Configuration** > **Host Protection** > **Web Tamper Proofing**. In the upper-left corner of the console, select the region where your assets reside: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  Perform the following operations based on whether you have purchased web tamper-proofing quotas.
    
    #### **No web tamper-proofing quotas purchased**
    
    1.  On the **Web Tamper-Proofing** page, click **Upgrade Now**.
        
    2.  Follow these steps based on your Security Center edition.
        
        -   Free Edition:
            
            In the **Select a suitable product edition** panel, select any edition. In the **Buy Now** panel, configure parameters such as Edition and Number of Protected Servers. Set **Web Tamper-Proofing** to **Yes**, and select the **Tamper-Proofing Quota** based on the number of servers that you want to protect.
            
            You can purchase the web tamper-proofing feature separately by setting the edition to **Value-Added Plan Only**. For more information about Security Center editions and other purchase configurations, see [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center#task-lxj-3bc-zdb).
            
        -   Paid editions:
            
            In the **Select a suitable product edition** panel, click **Upgrade**. In the **Upgrade Now** panel, set **Web Tamper-Proofing** to **Yes** and select the **Tamper-Proofing Quota** based on the number of servers that require protection.
            
    3.  Click **Buy Now** and complete the payment.
        
    
    #### **Web tamper-proofing quotas already purchased**
    
    If your web tamper-proofing quota is insufficient, click **Purchase Quota** in the upper-right corner of the **Web Tamper-Proofing** page to purchase sufficient **tamper-proofing quotas**.
    

## Step 2: Add protection for servers

Add protection for servers on which the Security Center agent is installed. You can add multiple protected directories for each server.

1.  On the **Web Tamper-Proofing** page, if this is your first time using the feature, click **Create Web Tamper-Proofing**.
    
    If you have used this feature before, go to the **Protection Management** tab on the **Web Tamper-Proofing** page and click **Add Protection for Server**.
    
2.  On the **Create Web Tamper-Proofing** panel, select the server to protect from the list and click **Next**.
    
3.  You can configure the web tamper-proofing rules and click **Enable Protection**.
    
    By default, **Whitelist Mode** is used. In this mode, you specify the directories and file types to protect. You can also click **Blacklist Mode** to specify subdirectories, file types, and specific files in the protected directory that do not require protection.
    
    -   **Whitelist Mode**
        
        If a protected file in the protected directory is modified, Security Center blocks the modification or generates an alert.
        
        **Configuration item**
        
        **Description**
        
        **Protected Directory**
        
        Enter the directory on your server to protect. After specifying the directory, Security Center decides whether to block modifications to file names, content, or attributes in this directory based on the process whitelist and protection mode.
        
        Use the format: /directory\_name/. Example: `/tmp/`.
        
        **Protected File Types**
        
        Select or enter the file types to protect.
        
        You can select file types from the drop-down list or manually enter types not listed.
        
        **Note**
        
        All file types are supported for web tamper-proofing protection.
        
        **Protection Mode**
        
        -   **Block Mode**: Security Center actively blocks abnormal processes and file changes to ensure the security of your server's websites and files.
            
        -   **Alert Mode**: Security Center alerts on detected abnormal processes and file changes.
            
            **Important**
            
            If your server’s operating system and kernel version are not in the [supported range for the whitelist feature](#table-az3-614-752), Alert Mode does not take effect. Even if you select **Alert Mode**, Security Center still blocks abnormal processes.
            
        
        **Local Backup Directory**
        
        Set the backup storage path for the protected directory.
        
        Security Center uses `/usr/local/aegis/bak` (for Linux servers) and `C:\Program Files (x86)\Alibaba\Aegis\bak` (for Windows servers) as the default backup directories. You can manually change these paths.
        
        **Important**
        
        If your server’s operating system and kernel version are in the [supported range for the whitelist feature](#table-az3-614-752), the **Local Backup Directory** setting is ignored.
        
        **Configuration Example**
        
        For example, if you set **Protected Directory** to `/tmp/`, **Protected File Types** to XML, and **Protection Mode** to **Block Mode**, Security Center blocks any changes to XML files in the tmp directory.
        
    -   **Blacklist Mode**
        
        Modifications to specified subdirectories, file types, or files in the protected directory are not blocked and do not trigger alerts. Modifications to other items in the protected directory are blocked or trigger alerts.
        
        For information about how to configure **Protected Directory**, **Protection Mode**, and **Local Backup Directory**, see **Whitelist Mode**.
        
        **Configuration item**
        
        **Description**
        
        **Excluded Subdirectories**
        
        Enter the paths of subdirectories that do not require protection.
        
        Use the format: **subdirectory\_name/**. Example: `dir1/dir0/`.
        
        **Excluded File Types**
        
        Select or enter file types that do not require protection.
        
        **Exclude Specified Files**
        
        Enter the files that do not require protection.
        
        Use the format: **subdirectory\_name/file**. Example: `dir2/file3`.
        
        **Important**
        
        The **Excluded Subdirectories**, **Excluded File Types**, and **Excluded Files** settings are evaluated using a logical **OR**.
        
        **Example configuration**
        
        For example, if you set **Protected Directory** to `/tmp/`, **Excluded Subdirectories** to `dir1/dir0/`, **Excluded File Types** to txt, **Excluded Files** to `dir2/file3`, and **Protection Mode** to **Block Mode**, then only the following items within the \`/tmp\` directory can be modified: files in the `dir1` subdirectory within the `dir0` directory, files with the .txt extension, or the `file3` file in the `dir2` subdirectory. Security Center blocks modifications to all other files and directories in the \`/tmp\` directory.
        
4.  (Optional) On the **Web Tamper-Proofing** page, click the **Protection Management** tab. Find a server that is already protected and click **Add Protected Directory** in the **Actions** column to add more protected directories.
    
    Click the expand ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3313842171/p770917.png) icon next to a server to view its protected directories. You can then click **Edit** next to a directory to modify its rules.
    
5.  On the **Management** tab of the **Web Tamper Proofing** page, find the server that you configured in the server list and click the ![Switch](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3313842171/p467608.png) icon in the **Protection Status** column to enable web tamper proofing.
    
    When you enable protection for the first time, the **Service Status** column displays **Starting** and a progress bar. Wait until the status changes to **Running**.
    
    The following table describes the service statuses.
    
    **Service status**
    
    **Description**
    
    **Suggestion**
    
    Starting
    
    The web tamper-proofing feature is starting.
    
    When you enable protection for the first time, the service status changes to **Starting**. Please wait for the process to complete.
    
    Running
    
    Protection is enabled and the service is running as expected.
    
    None.
    
    Abnormal
    
    The protection feature failed to start.
    
    Hover over the service status to view the cause of the error and click **Retry**.
    
    Not started
    
    Protection is disabled.
    
    Set the protection status to **Enabled**.
    

## Step 3: View protection status

On the **Web Tamper-Proofing** page, view protection details on the **Protection Status** tab.

-   View overview statistics for web tamper-proofing, including the top 5 protected files and top 5 blocked processes in the last 15 days.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3313842171/p775770.png)
    
-   View web tamper-proofing alert details
    
    This list displays all alerts for abnormal file changes that are detected by Security Center in **Block Mode** and **Alert Mode**. The alerts include details such as the severity (currently only **Medium**), alert name, affected asset, file path of the abnormal change, abnormal process name, and defense status.
    
    -   In the **Handled** list:
        
        By default, alerts for Block Mode are displayed. The **Status** is **Defended**, which indicates that Security Center intercepted the process that caused the abnormal file change.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3313842171/p775765.png)
        
    -   In the **Unhandled** list:
        
        The alerts are from **Alert Mode**. A **Status** of **Unhandled** indicates that Security Center generated an alert for an abnormal process and a file change.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3313842171/p775769.png)
        
    
    If you confirm that an intercepted action or an alert is part of a normal business operation, you can use the whitelist feature to allow the process to run normally. After you add a process to the whitelist, the corresponding alert appears in the **Handled** list with the status **Added to Whitelist**. For more information, see [Optional: Add to whitelist](#section-38u-dz0-2ej).
    
    **Important**
    
    If an alert is triggered more than 100 times, which indicates that a process has written to a file more than 100 times, you must handle the alert at your earliest convenience.
    

## Optional: Add to whitelist

If you confirm that the file changes made by a specific process are required for normal business operations and you need to modify files that are protected by tamper-proofing, you can add the process to the process whitelist. This allows the files to be modified as expected.

**Important**

-   The server must run an operating system and kernel version that are supported by the whitelist feature. For more information about the supported versions, see [Supported operating systems and kernel versions for the whitelist feature](#table-az3-614-752).
    
-   Attackers may exploit whitelisted processes to compromise your host. Add only trusted processes to the whitelist based on your business scenario.
    

On the **Web Tamper-Proofing** page, click the **Protection Status** tab to add normal business processes to the whitelist.

#### **Add a single alert event to the whitelist**

1.  In the **Unhandled** alert list, find the abnormal process that you want to whitelist and click **Handle** in the **Actions** column.
    
2.  In the dialog box, set **Handling Method** to **Add to Whitelist** and click **Process Now**.
    
    To whitelist the same process on multiple servers or in different file paths on a single server, select **Process servers with the same process simultaneously**.
    

You can also view the process paths for **Defended** alerts in the **Handled** alert list and add the corresponding processes to the whitelist.

#### **Batch-add multiple alert events to the whitelist**

1.  In the alert list on the Protection Status tab, select the abnormal processes that you want to add to the whitelist.
    
2.  Click **Add to Whitelist** at the bottom of the list. Then, click **OK** in the dialog box.
    

#### **Directly add target protection processes to the whitelist**

1.  Click the number below **Blocked Processes** or **Process Whitelist** to open the **Process Management** panel. ![查看白名单](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5198892361/p313973.png)
    
2.  Click **Add to Whitelist** in the upper-right corner. Enter the **Process Path** and **Server Name/IP** to add multiple abnormal processes to the whitelist in a batch.
    

#### **View or remove whitelist entries**

1.  Click the number under **Process Whitelist** to open the **Process Management** panel. In this panel, you can view all whitelisted abnormal processes, including their server, process path, and the number of file write attempts.
    
2.  To remove a process from the whitelist, click **Remove from Whitelist** in the **Actions** column. To remove multiple entries at once, select the entries and click **Remove from Whitelist** at the bottom of the list.
    

## FAQ

-   [Security Center has nearly three years of validity remaining. Can I purchase web tamper-proofing for only one year?](/help/en/security-center/user-guide/faq-about-host-protection#section-ypr-fe9-nfq)
    
-   [When I start web tamper-proofing, I receive the message "Protection module initialization failed. Check whether other software is blocking service creation." Why does this happen?](/help/en/security-center/user-guide/faq-about-host-protection#section-5lx-z29-yws)
    
-   [What are the requirements for the local backup directory in web tamper-proofing?](/help/en/security-center/user-guide/faq-about-host-protection#section-jnv-qr3-qf6)
    
-   [After I configure tamper-proofing, I cannot modify my website's content or images. What should I do?](/help/en/security-center/user-guide/faq-about-host-protection#section-ysv-ggq-8vq)
