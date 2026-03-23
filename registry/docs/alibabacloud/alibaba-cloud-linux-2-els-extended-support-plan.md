Released in March 2019, Alibaba Cloud Linux 2 was the first version of our operating system, committed to providing a stable, high-performance, and secure operating system for a large number of Alibaba Cloud users. Alibaba Cloud Linux 2 reached the end of life (EOL) on March 31, 2024. Alibaba Cloud Linux 2 reached its end of life (EOL) on March 31, 2024, at which point all regular support ceased. To prevent system stability and security risks, we strongly recommend that you upgrade to the latest version, Alibaba Cloud Linux 3, as soon as possible.

However, many applications still run on Alibaba Cloud Linux 2, and we have received feedback from many users that they are unable to complete their migration before the EOL date for business reasons. We understand that migrating IT systems is a complex process that requires significant planning and testing to ensure a smooth transition to an upgraded operating system. Therefore, Alibaba Cloud has decided to provide **two years of Extended Life Support (ELS) free of charge**, starting from the official EOL date of March 31, 2024. During the ELS period, Alibaba Cloud will provide fixes for critical and high-severity CVEs and bugs, or offer corresponding solutions. For CVEs and bugs that have manageable impacts, support will be provided on-demand. For the specific scope of ELS, see the [Scope of the ELS for Alibaba Cloud Linux 2](#d2095253b6mqa) section of this topic. We recommend that you schedule your upgrade soon to take advantage of the latest operating system features. If you have questions, fill in and submit the [questionnaire](https://survey.aliyun.com/apps/zhiliao/aMws-A6qD).

## Period of the ELS for Alibaba Cloud Linux 2

Starting from the EOL date of March 31, 2024, Alibaba Cloud provides **two years of ELS free of charge**. At the end of the ELS period, Alibaba Cloud will stop providing technical support for Alibaba Cloud Linux 2.

## **Scope of the ELS for Alibaba Cloud Linux 2**

The ELS for Alibaba Cloud Linux 2 focuses on addressing critical security vulnerabilities and significant bugs. The following section describes the scope of the ELS:

-   Supported architecture: x86 64-bit.
    
-   Security support: Fixes for CVEs rated as Critical and Important, with a focus on high-impact vulnerabilities. To view the most recent list of CVEs of Alibaba Cloud Linux 2, see [Alibaba Cloud Linux 2.1903 Security Advisories](http://mirrors.aliyun.com/alinux/cve/alinux2.xml?spm=a2c4g.11186623.0.0.5ef17e7c9sp9tX&file=alinux2.xml).
    
-   Bug fixes:
    
    -   Fixes for urgent issues in the following key packages will be provided: bind, bash, chrony, glibc, gnutls, httpd, kernel, libgcrypt, libvirt, nss, OpenSSH, OpenSSL, Python 2.7, qemu-kvm, RPM, sudo, systemd, wget, and YUM. Support for packages not on this list will be provided on a case-by-case basis.
        
    -   For bugs that cannot be immediately fixed, Alibaba Cloud will provide workarounds or mitigations where possible.
        

## **Upgrade Alibaba Cloud Linux 2 to Alibaba Cloud Linux 3**

Alibaba Cloud provides the following methods to help you upgrade Alibaba Cloud Linux 2 to Alibaba Cloud Linux 3:

-   Use Server Migration Center (SMC). For more information, see [Migrate a Linux operating system](/help/en/smc/user-guide/migrate-an-operating-system).
    
-   Replace the operating system. For more information, see [Replace the operating system (system disk) of an instance](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance).
    
    **Important**
    
    After the operating system of an ECS instance is replaced, the original system disk is released and all data stored on the disk is deleted. Before you replace the operating system of an ECS instance, create snapshots for the system disk to back up data. For more information, see [Create a snapshot](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb).
    
-   Join the Alibaba Cloud Linux DingTalk group (group ID: 23149462) to obtain technical support.
    
-   You can [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to obtain additional support free of charge.
