Yellowdog Updater Modified (YUM) is a powerful package management tool that can be used to install, update, and delete software packages and manage package repositories. To ensure system security, Alibaba Cloud Linux distributions stay up-to-date on common vulnerabilities and exposures (CVE) that are found through community-based, industry-supported efforts. Alibaba Cloud Linux distributions update software packages including kernel packages, fix software defects, patch security vulnerabilities, and enhance security features in a timely manner. This topic describes how to use YUM to query, check for, and install security updates for Alibaba Cloud Linux.

## Prerequisites

An Elastic Compute Service (ECS) instance that runs Alibaba Cloud Linux is created. For more information, see [Creation methods](/help/en/ecs/user-guide/create-instances/#concept-nx2-nzv-wgb).

## Background information

For information about Alibaba Cloud Linux security updates, see [Alibaba Cloud Linux 3 Security Advisories](http://mirrors.aliyun.com/alinux/3/cve/alinux3.xml) and [Alibaba Cloud Linux 2.1903 Security Advisories](http://mirrors.aliyun.com/alinux/cve/alinux2.xml).

Alibaba Cloud Linux security updates are classified into the following severity levels based on the Common Vulnerability Scoring System 3 (CVSS3) for CVEs:

-   Critical: High-risk vulnerabilities exist and the security update is required.
    
-   Important: Relatively high-risk vulnerabilities exist and the security update is strongly recommended.
    
-   Moderate: Medium-risk vulnerabilities exist and the security update is recommended.
    
-   Low: Low-risk vulnerabilities exist and the security update is optional.
    

## Query security updates

You can run the following command to query security updates:

```
yum updateinfo <command> [option]
```

The `yum updateinfo` command is used to display information about package updates, including security updates, bug fixes, and enhancement updates. This command is typically used to obtain detailed information about available updates, including the update type descriptions, associated CVE identifications, and packages that may be affected.

The following table describes the variables of the command.

**Variable**

**Valid value**

_<command>_

-   `list`: queries the list of available security updates.
    
-   `info <update_id>`: queries the details of a specific security update. Set _<update\_id>_ to an advisory ID in Alibaba Cloud Linux security advisories.
    

_\[option\]_

-   `--sec-severity=<SEVS>`: specifies the security update severity levels. Set _<SEVS>_ to one or more security update severity levels.
    
    **Important**
    
    If you specify multiple security update severity levels, separate the levels with commas (,). Security update severity levels are case-sensitive.
    
    Format description:
    
    -   Specify a single security update severity level in the --sec-severity=<Severity level> format. Example: `--sec-severity=Moderate`.
        
    -   Specify multiple security update severity levels in the --sec-severity={<Severity level>,<Severity level>} format. Example: `--sec-severity={Moderate,Important}`.
        
    
-   `--cve=<CVE ID>`: specifies the CVE IDs. Set <CVE ID> to one or more CVE IDs. You can obtain CVE IDs from Alibaba Cloud Linux security advisories.
    

The following examples demonstrate how to use `yum updateinfo` commands.

-   Run the following command to obtain help information about the command:
    
    ```
    yum updateinfo --help
    ```
    
-   Run the following command to obtain an overview of all available security updates:
    
    ```
    yum updateinfo
    ```
    
    Sample command outputs:
    
    #### **Alibaba Cloud Linux 3**
    
    ```
    Last metadata expiration check: 0:06:42 ago on Wed 02 Jun 2021 03:05:30 AM EDT.
    Updates Information Summary: available
        3 Security notice(s)
            2 Important Security notice(s)
            1 Moderate Security notice(s)
    ```
    
    #### **Alibaba Cloud Linux 2**
    
    ```
    Loaded plugins: fastestmirror
    Determining fastest mirrors
    base                                                                                                                                                  | 3.1 kB  00:00:00
    extras                                                                                                                                                | 2.5 kB  00:00:00
    plus                                                                                                                                                  | 2.5 kB  00:00:00
    updates                                                                                                                                               | 2.9 kB  00:00:00
    (1/6): extras/2.1903/x86_64/primary_db                                                                                                                | 149 kB  00:00:00
    (2/6): base/2.1903/x86_64/group_gz                                                                                                                    | 101 kB  00:00:00
    (3/6): updates/2.1903/x86_64/updateinfo                                                                                                               |  81 kB  00:00:00
    (4/6): plus/2.1903/x86_64/primary_db                                                                                                                  | 1.5 MB  00:00:00
    (5/6): base/2.1903/x86_64/primary_db                                                                                                                  | 4.9 MB  00:00:00
    (6/6): updates/2.1903/x86_64/primary_db                                                                                                               | 6.1 MB  00:00:00
    Updates Information Summary: updates
        17 Security notice(s)
             7 Important Security notice(s)
             6 Moderate Security notice(s)
             4 Low Security notice(s)
    updateinfo summary done
    ```
    
-   Run the following command to query the list of available security updates:
    
    ```
    yum updateinfo list
    ```
    
    Sample command outputs:
    
    #### **Alibaba Cloud Linux 3**
    
    ```
    Last metadata expiration check: 0:09:05 ago on Wed 02 Jun 2021 03:05:30 AM EDT.
    ALINUX3-SA-2021:0008 Moderate/Sec.  gnutls-3.6.14-7.1.al8.x86_64
    ALINUX3-SA-2021:0029 Important/Sec. gnutls-3.6.14-8.1.al8.x86_64
    ALINUX3-SA-2021:0028 Important/Sec. libldb-2.1.3-3.1.al8.x86_64
    ALINUX3-SA-2021:0029 Important/Sec. nettle-3.4.1-4.1.al8.x86_64
    ```
    
    #### **Alibaba Cloud Linux 2**
    
    ```
    Loaded plugins: fastestmirror
    Loading mirror speeds from cached hostfile
    ALINUX2-SA-2019:0055 Moderate/Sec.  binutils-2.27-41.base.1.al7.x86_64
    ALINUX2-SA-2019:0058 Low/Sec.       curl-7.29.0-54.1.al7.x86_64
    ALINUX2-SA-2019:0059 Low/Sec.       elfutils-default-yama-scope-0.176-2.1.al7.n
    ...
    ```
    
-   Run the following command to query the content of a specified security update:
    
    ```
    yum updateinfo info <update_id>
    ```
    
    Sample command outputs:
    
    #### Alibaba Cloud Linux 3
    
    Sample command with _<update\_id>_ set to `ALINUX3-SA-2021:0008`:
    
    ```
    yum updateinfo info ALINUX3-SA-2021:0008
    ```
    
    Sample command output:
    
    ```
    Last metadata expiration check: 0:11:58 ago on Wed 02 Jun 2021 03:05:30 AM EDT.
    ===============================================================================
      ALINUX3-SA-2021:0008: gnutls security and bug fix update (Moderate)
    ===============================================================================
      Update ID: ALINUX3-SA-2021:0008
           Type: security
        Updated: 1969-12-31 19:00:00
           CVEs: CVE-2020-24659
    Description: Package updates are available for Alibaba Cloud Linux 3 that fix the following vulnerabilities:
               :
               : CVE-2020-24659:
               : An issue was discovered in GnuTLS before 3.6.15. A server can trigger a NULL pointer dereference in a TLS 1.3 client if a no_renegotiation alert is sent with unexpected timing, and then an invalid second handshake occurs. The crash happens in the application's error handling path, where the gnutls_deinit function is called after detecting a handshake failure.
               :
       Severity: Moderate
    ```
    
    #### **Alibaba Cloud Linux 2**
    
    Sample command with _<update\_id>_ set to `ALINUX2-SA-2020:0005`:
    
    ```
    yum updateinfo info ALINUX2-SA-2020:0005
    ```
    
    Sample command output:
    
    ```
    Loaded plugins: fastestmirror
    Loading mirror speeds from cached hostfile
    
    ===============================================================================
      ALINUX2-SA-2020:0005: nss, nss-softokn, nss-util security update (Important)
    ===============================================================================
      Update ID : ALINUX2-SA-2020:0005
        Release : Alibaba Cloud Linux 2.1903
           Type : security
         Status : stable
         Issued : 2020-01-03
           CVEs : CVE-2019-11729
                : CVE-2019-11745
    Description : Package updates are available for Alibaba Cloud Linux 2.1903 that fix
                : the following vulnerabilities:
                :
                : CVE-2019-11729:
                : Empty or malformed p256-ECDH public keys may
                : trigger a segmentation fault due values being
                : improperly sanitized before being copied into
                : memory and used. This vulnerability affects
                : Firefox ESR < 60.8, Firefox < 68, and Thunderbird
                : < 60.8.
                :
                : CVE-2019-11745:
                : When encrypting with a block cipher, if a call to
                : NSC_EncryptUpdate was made with data smaller than
                : the block size, a small out of bounds write could
                : occur. This could have caused heap corruption and
                : a potentially exploitable crash. This
                : vulnerability affects Thunderbird < 68.3, Firefox
                : ESR < 68.3, and Firefox < 71.
                :
       Severity : Important
    updateinfo info done
    ```
    
-   Run the following command to query the security updates of a specific severity level:
    
    ```
    yum updateinfo list --sec-severity=Moderate
    ```
    
    Sample command output:
    
    ```
    Last metadata expiration check: 0:05:25 ago on Mon 07 Jun 2021 09:08:25 AM EDT.
    ALINUX3-SA-2021:0008 Moderate/Sec. gnutls-3.6.14-7.1.al8.x86_64
    ```
    

## Check for security updates

By default, the `update-motd` service is installed and enabled in Alibaba Cloud Linux. When the system detects an available security update, you are prompted about the security update when you log on to the ECS instance. For information about how to manage the `update-motd` service, see the "[Manage the update-motd service](#83a67ddf24vyg)" section in this topic.

You can also run the `yum check-update --security` command to check information about the security update available in the system. You can append `--sec-severity=<SEVS>` to the command and set _<SEVS>_ to one or more severity levels to check for security groups of the specified severity levels.

**Note**

If you specify multiple severity levels, separate the severity levels with commas (,). Security update severity levels are case-sensitive.

The following examples demonstrate how to check for security updates:

#### **Alibaba Cloud Linux 3**

-   Example 1: Run the following command to check for all security updates:
    
    ```
    yum check-update --security
    ```
    
    Sample command output:
    
    ```
    Last metadata expiration check: 0:08:41 ago on Wed 02 Jun 2021 05:24:55 PM CST.
    
    nss.x86_64                        3.53.1-17.1.al8                 alinux3-updates
    nss-softokn.x86_64                3.53.1-17.1.al8                 alinux3-updates
    nss-softokn-freebl.x86_64         3.53.1-17.1.al8                 alinux3-updates
    nss-sysinit.x86_64                3.53.1-17.1.al8                 alinux3-updates
    nss-util.x86_64                   3.53.1-17.1.al8                 alinux3-updates
    perl-Errno.x86_64                 1.28-417.2.al8                  alinux3-updates
    perl-IO.x86_64                    1.38-417.2.al8                  alinux3-updates
    ```
    
-   Example 2: Run the following command to check for security updates of the Critical and Important security levels:
    
    ```
    yum check-update --security  --sec-severity={Critical,Important}
    ```
    
    Sample command output:
    
    ```
    Last metadata expiration check: 0:10:23 ago on Wed 02 Jun 2021 05:24:55 PM CST.
    
    gnutls.x86_64                      3.6.14-8.2.al8              alinux3-updates
    nss.x86_64                         3.53.1-17.1.al8             alinux3-updates
    nss-softokn.x86_64                 3.53.1-17.1.al8             alinux3-updates
    nss-softokn-freebl.x86_64          3.53.1-17.1.al8             alinux3-updates
    nss-sysinit.x86_64                 3.53.1-17.1.al8             alinux3-updates
    nss-util.x86_64                    3.53.1-17.1.al8             alinux3-updates
    perl-Errno.x86_64                  1.28-417.2.al8              alinux3-updates
    perl-IO.x86_64                     1.38-417.2.al8              alinux3-updates
    ```
    

#### **Alibaba Cloud Linux 2**

-   Example 1: Run the following command to check for all security updates in the `available` state:
    
    ```
    yum check-update --security |grep available
    ```
    
    Sample command output:
    
    ```
    49 package(s) needed for security, out of 183 available
    ```
    
-   Example 2: Run the following command to check for Critical and Important security updates that are in the `available` state.
    
    ```
    yum check-update --security --secseverity=Critical,Important |grep available
    ```
    
    Sample command output:
    
    ```
    30 package(s) needed for security, out of 183 available
    ```
    

## Install security updates

After you check for security updates in the system, you can run the `yum upgrade` command to specify the security update level or CVE ID to install the security update.

**Warning**

If you run the `yum upgrade` command to install security updates, outdated software packages except kernel packages are forcefully deleted. This may cause your instance to be stopped and services that are running on the instance to be interrupted. We recommend that you run the command to install security updates during off-peak hours.

-   You can run the `yum upgrade --security` command to install security updates. You can append `--sec-severity=<SEVS>` to the command and set _<SEVS>_ to one or more severity levels to install security updates of the specified severity levels.
    
    **Note**
    
    If you specify multiple severity levels, separate the severity levels with commas (,). Security update severity levels are case-sensitive.
    
    The following code provides an example on how to start the plug-in:
    
    Run the following command to install security updates of the Critical and Important security levels:
    
    ```
    sudo yum upgrade --security --sec-severity={Critical,Important}
    ```
    
    Sample command output:
    
    #### **Alibaba Cloud Linux 3**
    
    ```
    Last metadata expiration check: 0:06:43 ago on Wed 02 Jun 2021 03:51:48 AM EDT.
    Dependencies resolved.
    ================================================================================
     Package              Arch       Version              Repository           Size
    ================================================================================
    Upgrading:
    ...
    Transaction Summary
    ================================================================================
    Upgrade  12 Packages
    
    Total download size: 3.9 M
    Is this ok [y/N]:
    ```
    
    #### **Alibaba Cloud Linux 2**
    
    ```
    Loaded plugins: fastestmirror
    Loading mirror speeds from cached hostfile
    ...
    [snipped]
    ...
    Transaction Summary
    =============================================================================================================================================================================
    Upgrade  30 Packages (+1 Dependent package)
    
    Total download size: 91 M
    Is this ok [y/d/N]:
    ```
    
-   You can run the `yum upgrade -cve=<CVE ID>` command to install the security updates for specific CVEs. You can set `-cve=<CVE ID>` to one or more CVE IDs.
    
    **Note**
    
    If you specify multiple CVE IDs, separate the IDs with commas (,). CVE IDs are case-sensitive.
    
    The following code provides an example on how to start the plug-in:
    
    #### **Alibaba Cloud Linux 3**
    
    Run the following command to install the security updates for `CVE-2020-24659`:
    
    ```
    sudo yum upgrade --cve=CVE-2020-24659
    ```
    
    Sample command output:
    
    ```
    Last metadata expiration check: 0:02:44 ago on Wed 02 Jun 2021 04:17:27 AM EDT.
    Dependencies resolved.
    =====================================================================================
     Package        Architecture   Version                 Repository               Size
    =====================================================================================
    Upgrading:
    ...
    Transaction Summary
    =====================================================================================
    Upgrade  1 Package
    
    Total download size: 1.0 M
    Is this ok [y/N]
    ```
    
    #### **Alibaba Cloud Linux 2**
    
    Run the following command to install the security updates for `CVE-2019-11729` and `CVE-2019-11745`:
    
    ```
    sudo yum upgrade --cve=CVE-2019-11729,CVE-2019-11745
    ```
    
    Sample command output:
    
    ```
    Loaded plugins: fastestmirror
    Loading mirror speeds from cached hostfile
    ...
    [snipped]
    ...
    Dependencies Resolved
    
    =============================================================================================================================================================================
     Package                                         Arch                                Version                                      Repository                            Size
    =============================================================================================================================================================================
    Updating:
     nss                                             x86_64                              3.44.0-7.1.al7                               updates                              854 k
     nss-softokn                                     x86_64                              3.44.0-8.1.al7                               updates                              330 k
     nss-softokn-freebl                              x86_64                              3.44.0-8.1.al7                               updates                              225 k
     nss-sysinit                                     x86_64                              3.44.0-7.1.al7                               updates                               65 k
     nss-tools                                       x86_64                              3.44.0-7.1.al7                               updates                              528 k
     nss-util                                        x86_64                              3.44.0-4.1.al7                               updates                               79 k
    Updating for dependencies:
     nspr                                            x86_64                              4.21.0-1.1.al7                               updates                              127 k
    
    Transaction Summary
    =============================================================================================================================================================================
    Upgrade  6 Packages (+1 Dependent package)
    
    Total download size: 2.2 M
    Is this ok [y/d/N]:
    ```
    
    **Note**
    
    According to the `man yum` command outputs, the `sudo yum upgrade` command is equivalent to the `sudo yum update --obsoletes` command. The `sudo yum upgrade` command is also equivalent to the `sudo yum update` command because `obsoletes` is enabled by default in the /etc/yum.conf configuration file.
    

## **Manage** the `**update-motd**` **service**

You can run the `systemctl` command to manage the `update-motd` service. Take note of the following items:

-   Start the `update-motd` service.
    
    ```
    sudo systemctl start update-motd
    ```
    
-   Stop the `update-motd` service.
    
    ```
    sudo systemctl stop update-motd
    ```
    
-   Restart the `update-motd` service.
    
    ```
    sudo systemctl restart update-motd
    ```
    
-   Check the status of the `update-motd` service.
    
    ```
    systemctl status update-motd
    ```
