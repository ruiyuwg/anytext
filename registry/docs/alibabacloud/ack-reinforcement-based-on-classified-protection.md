ACK provides MLPS 2.0 Level 3 compliance based on Alibaba Cloud Linux. You can enable MLPS 2.0 security hardening for a node pool and configure a baseline check policy. ACK automatically configures security hardening items for the cluster and performs a classified protection compliance baseline check to ensure that the operating system meets classified protection requirements.

## Classified protection compliance requirements

ACK provides MLPS 2.0 Level 3 compliance for Alibaba Cloud Linux to meet China's classified protection requirements. You can use the following MLPS security hardening configurations to ensure that your ACK clusters comply with the required baselines:

The GB/T 22239-2019 Information Security Technology - Baseline for Classified Protection of Cybersecurity standard specifies the classified protection requirements for operating systems. To meet these requirements, ACK provides the MLPS 2.0 Level 3 edition for [Alibaba Cloud Linux](/help/en/alinux/product-overview/alibaba-cloud-linux-overview). You can enable the MLPS 2.0 security hardening feature to meet the following classified protection compliance requirements.

-   Identity authentication
    
-   Access control
    
-   Security audit
    
-   Intrusion prevention
    
-   Malware prevention
    

## Check rules for Alibaba Cloud Linux MLPS 2.0 Level 3 images

Alibaba Cloud Linux MLPS 2.0 Level 3 images are hardened for classified protection according to the GB/T 22239-2019 Information Security Technology - Baseline for Classified Protection of Cybersecurity standard. The images meet the check items detailed in the following table.

**Check item type**

**Check item name**

**Check content**

Identity authentication

The identity of logon users must be authenticated and unique. Authentication information must meet complexity requirements and be changed periodically.

-   Check for accounts with empty passwords.
    
-   Ensure that user IDs (UIDs) are unique.
    
-   Set password complexity requirements.
    
-   Change passwords periodically.
    
-   Set a minimum time interval for password changes to prevent unauthorized users from changing passwords multiple times in a short period.
    
-   Restrict password reuse.
    
-   Ensure that root is the only account with a UID of 0.
    

Necessary measures must be taken to prevent authentication information from being intercepted during network transmission when a server is managed remotely.

-   Check whether SSHD is configured to use only the SSHv2 protocol.
    
-   Disable insecure remote connection services such as Telnet.
    

A logon failure handling feature must be implemented. Measures such as session termination, limits on failed logon attempts, and automatic logout on connection timeout must be configured and enabled.

Check whether a logon failure lockout policy is configured, an idle session timeout is set, and the client is configured to disconnect after a logon timeout.

Access control

Assign accounts and permissions to logon users.

-   In addition to system administrators, accounts must be assigned for regular users, auditors, and security administrators.
    
-   Ensure that the user umask is 027 or stricter.
    
-   Ensure that the permissions for each user's home directory are set to 750 or stricter.
    

Rename or delete default accounts and change their default security tokens.

-   The root account in Linux cannot be deleted. Instead, check whether direct logon as the root user over the Secure Shell (SSH) protocol is disabled.
    
-   Disable logon for default system accounts and database accounts other than root.
    
-   Ensure that no weak passwords exist and that the weak password baseline check passes.
    

The granularity of access control must be at the user or process level for entities and at the file or database table level for objects.

Check whether the permissions of important files, such as access control and user permission configuration files, have user-level granularity.

Promptly delete or disable redundant or expired accounts. Avoid using shared accounts.

-   Disable logon for default system accounts and database accounts other than root.
    
-   Lock or delete the shutdown and halt accounts.
    

Grant administrative users the least privilege required and use permission separation.

-   Ensure that access to the \`su\` command is restricted.
    
-   Check the /etc/sudoers file for users with \`sudo\` permissions. If required, configure \`sudo\` permissions for users other than root. Do not grant \`ALL\` permissions to any user except the administrator.
    

An authorized entity must configure the access control policy, which specifies the rules for entity access to objects.

-   Ensure that the permissions for each user's home directory are set to 750 or stricter.
    
-   If required, reset the ownership of ownerless files or folders to an active user on the system.
    
-   Set the permissions and ownership of the SSH host public key file.
    
-   Set the permissions and ownership of the SSH host private key file.
    

Security audit

Audit records must be protected. They must be backed up periodically to prevent unexpected deletion, modification, or overwriting.

Check the \`auditd\` file size, log splitting configuration, or backup to a log server. If automatic repair fails, you must first fix the check item for enabling the security audit feature.

Audit records must include the date and time of the event, the user, the event type, the event outcome (success or failure), and other audit-related information.

This item is met if the check item for enabling the security audit feature is met.

The security audit feature must be enabled. The audit must cover every user and record important user behaviors and security events.

-   Enable the auditd service.
    
-   Enable the rsyslog or syslog-ng service.
    
-   Ensure that file deletion events by users are collected.
    
-   Ensure that changes to the system administration scope (sudoers) are collected.
    
-   Ensure that events related to modifying user or group information are collected. If you use a third-party log collection service, you can provide evidence and ignore this item.
    

Audit processes must be protected from unexpected interruptions.

\`auditd\` is the daemon process for the \`audit\` process, and \`syslogd\` is the daemon process for the \`syslog\` process. Check whether these system processes are running.

Intrusion prevention

Known vulnerabilities must be detected. After thorough testing and evaluation, the vulnerabilities must be patched promptly.

The vulnerability detection and fixing features of Security Center can meet this requirement. If you use other methods, you can provide evidence and ignore this item.

Follow the principle of minimal installation by installing only necessary components and applications.

-   Alibaba Cloud Linux 3: Uninstall software such as avahi-daemon, Bluetooth, firstboot, Kdump, wdaemon, wpa\_supplicant, and ypbind.
    
-   Alibaba Cloud Linux 2: Uninstall software such as NetworkManager, avahi-daemon, Bluetooth, firstboot, Kdump, wdaemon, wpa\_supplicant, and ypbind.
    

Shut down unnecessary system services, default shares, and vulnerable ports.

-   Shut down unnecessary system services and file sharing services.
    
-   Close vulnerable ports such as 21, 23, 25, 111, 427, and 631.
    
-   If you have special requirements that necessitate a strict access control policy, you can provide evidence and ignore this item.
    

Intrusions on important nodes must be detected, and alerts must be provided for critical intrusion events.

The intrusion detection and alerting features of Security Center can meet this requirement. If you have other detection and alerting methods, you can provide evidence and ignore this item.

Restrict management terminals that are managed over the network by setting the connection type or address range.

-   Alibaba Cloud Linux 3:
    
    1.  Edit the /etc/ssh/sshd\_config file based on the configuration of the terminal used to log on to the server.
        
    2.  Set the `AllowUsers <user>@<host>` parameter as required.
        
        **Note**
        
        `<user>` specifies the username for logging on to the server. `<host>` specifies the IP address of the server. Replace them as required.
        
    3.  After you finish editing, press the Esc key, enter `:wq`, and then press the Enter key to save the file and exit.
        
    4.  Run the `sudo systemctl restart sshd` command to restart the sshd service.
        
-   Alibaba Cloud Linux 2:
    
    -   The /etc/hosts.allow file specifies the IP addresses that are allowed to connect to the host. It must not be set to `ALL:ALL`.
        
    -   The /etc/hosts.deny file specifies the IP addresses that are prohibited from connecting to the host. It must be set to `ALL:ALL` to deny all connections by default.
        
    
    The two files must be used together, and the `/etc/hosts.allow` rule must be configured first. If you implemented this restriction using other methods, such as security groups or firewalls, you can provide evidence and ignore this item.
    

Malware protection

-   Alibaba Cloud Linux 3: Use technical measures to protect against malware attacks, or use an active immune-based trusted verification mechanism to promptly detect and block intrusions and virus behaviors.
    
-   Alibaba Cloud Linux 2: Install anti-malware software and promptly update the software version and malware signature database.
    

Check whether Security Center is installed and used. If you have installed other anti-malware software, you can provide evidence and ignore this item.

## Use Alibaba Cloud Linux MLPS 2.0 Level 3

When you [create an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/), you can enable **MLPS Security Hardening**. ACK automatically configures security hardening items for the cluster to meet the classified protection requirements for operating systems specified in the GB/T 22239-2019 Information Security Technology - Baseline for Classified Protection of Cybersecurity.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5891482471/p931773.png)

**Important**

-   To meet the standard requirements of MLPS 2.0 Level 3, ACK creates three regular users by default in the hardened Alibaba Cloud Linux: \`ack\_admin\`, \`ack\_audit\`, and \`ack\_security\`.
    
-   To comply with the standard requirements of MLPS 2.0 Level 3, MLPS 2.0 security-hardened Alibaba Cloud Linux prohibits logging on as the root user over SSH. You can use the [ECS console](https://ecs.console.alibabacloud.com/?) to [connect to an instance using VNC](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc#concept-sdk-1jx-wdb) and create a regular user that can log on over SSH.
    

## Configure a baseline check policy for Alibaba Cloud Linux MLPS 2.0 Level 3 images

Alibaba Cloud provides classified protection compliance baseline check standards and scanners for Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3 MLPS 2.0 Level 3 images. This topic uses Alibaba Cloud Linux 3 as an example and describes how to configure a classified protection compliance baseline check policy to perform classified protection compliance baseline checks on ECS instances.

### **Prerequisites**

You must have purchased a Security Center edition that supports baseline checks. For more information, see [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center#task-lxj-3bc-zdb). Different editions of Security Center provide different levels of support for baseline checks. For more information, see [Features](/help/en/security-center/product-overview/functions-and-features#section-2ou-l3x-fir).

### **Procedure**

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  On the **Risk Governance** > **CSPM** page, click **Policy Management**.
    
3.  On the **Policy Management** panel, click the **Baseline Check Policy** tab to configure a baseline check policy for classified protection compliance as needed.
    
    -   Set the baseline scan coverage level.
        
        You can select one or more levels: **High**, **Medium**, and **Low**. This configuration applies to all scan policies.
        
    -   Click **Create Standard Policy**. On the **Baseline Check Policy** panel, complete the configuration and click **OK**. The following list describes only the main configuration items. For more information, see [Baseline risk check](/help/en/security-center/user-guide/baseline-check/#section-5li-98f-3hs).
        
        -   **Policy Name**: Enter a name for the policy, such as `Alibaba Cloud Linux 3 Classified Protection Compliance Check`. Select a **Detection Cycle** and a **Check Start Time**.
            
        -   **Baseline Name**: Search for and select `MLPS Level 3 - Alibaba Cloud Linux 3 Compliance Baseline`.
            
        -   **Scan Method**: Select a scan mode for the servers. The options are:
            
            -   **Group**: Scans servers by asset group. You can only select all servers in one or more groups.
                
            -   **ECS**: Scans servers by ECS instance. You can select some or all servers from different groups.
                
        -   **Effective Server**: Select the asset groups to which you want to apply the policy. Newly purchased servers are added to the Default group by default. To apply this policy to new assets, select **Default**.
            
    
    After you configure the scan policy, you can also click **Edit** or **Delete** in the **Actions** column of the policy to modify or delete it as required.
    
    **Note**
    
    A deleted policy cannot be recovered. You cannot delete default policies or modify their baseline check items. You can only modify the start time and the servers to which a default policy applies.
    
4.  Execute the baseline check policy.
    
    On the **Risk Governance** > **CSPM** page, click the **System Baseline Risks** tab. On the **Baseline Check Policy** tab, click the ![三角](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8024550661/p469979.png) icon to expand the policy list. Select the configured classified protection compliance baseline check policy, and then click **Check Now** in the **Check Item Scan** section on the right.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7764002571/p979838.png)
    
    After you execute the scan policy, the **Check Now** button is unavailable until the scan is complete. After the baseline check is complete, go to the **System Baseline Risks** > **Risk Details** tab to view the check items that failed and their details. Fix the risk items promptly. For more information, see [View and handle baseline risk items](/help/en/security-center/user-guide/view-and-handle-baseline-risks).
