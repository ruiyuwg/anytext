The Container Protection Settings tab in the Security Center console displays container-related features such as threat detection on Kubernetes containers and container escape prevention. You can enable the features to ensure the runtime security of your containers. This topic describes the features that you can enable on the Container Protection Settings tab. This topic also describes how to enable the features.

## Threat detection on Kubernetes containers

The feature of threat detection on Kubernetes containers checks the security status of running container clusters in real time to detect security threats and attacks at the earliest opportunity. After you enable the feature of threat detection on Kubernetes containers, Security Center automatically detects threats that trigger alerts of the **K8s Abnormal Behavior** type. For more information about the threats that can be detected by Security Center, see [Threats that can be detected](#p-mai-c12-4z3).

### Limits

-   **Subscription service**: Available for the **Enterprise** or **Ultimate** edition. If your current edition is not supported, please [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center#2c9cad6e39bbz).
    
    **Note**
    
    You must configure your servers for the **Enterprise** or **Ultimate** protection edition. For detailed instructions, see [Manage host and container security quotas](/help/en/security-center/user-guide/authorization-number-management).
    
-   **Pay-as-you-go service**: You must enable the **Host and Container Security** service. If it is not enabled, proceed to [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center#5d3a3aef78bqy).
    
    **Note**
    
    Your servers must be set to the **Host Protection** or **Host and Container Protection** level. For detailed instructions, see [Pay-as-you-go instances](/help/en/security-center/user-guide/authorization-number-management#53d46981942l6).
    

### Enable threat detection on Kubernetes containers

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **System Settings** > **Feature Settings**.
    
3.  On the **Container Protection Settings** tab of the **Settings** tab, turn on Threat Detection in the **Threat Detection on Kubernetes Containers** section.
    
    If Security Center detects threats in your Kubernetes clusters after you turn on the switch, alerts are generated and displayed on the **Detection and Response** > ****Alert**** page. We recommend that you view and handle the alerts at the earliest opportunity. For more information, see [Evaluate and handle security alerts](/help/en/security-center/user-guide/view-and-handle-alert-events#concept-rlc-rts-sfb).
    
    **Note**
    
    If the Agentic SOC feature is enabled, the entry point to ****Alert**** changes. For more information, see [Agentic SOC overview](/help/en/security-center/user-guide/overview-of-threat-analysis#section-18c-oqq-w9w).
    

### Threats that can be detected

**Type**

**Item**

K8s abnormal behavior

Suspicious instruction run on a Kubernetes API server

Mounting of suspicious directories to a pod

Lateral movement among Kubernetes service accounts

Startup of a pod that contains a malicious image

Unusual network connection

Outbound connection of reverse shells

Suspicious outbound network connection

Suspicious lateral movement in internal networks

Malware

DDoS trojan

Suspicious connection from mining machines

Suspicious program

Suspicious tool initiating brute-force attacks on ports

Suspicious attack program

Backdoor program

Malicious vulnerability detection tool

Malicious program

Mining program

Trojan

Self-mutating trojan

Worm

Webshell

WebShell

Suspicious process

Suspicious command run by Apache CouchDB

Suspicious command run by FTP applications

Suspicious command run by Hadoop

Suspicious command run by Java applications

Suspicious command run by Jenkins

Suspicious account creation in Linux

Suspicious command run by scheduled tasks in Linux

Suspicious command run by MySQL

Suspicious command run by Oracle

Suspicious command run by PostgreSQL applications

Suspicious command run by Python applications

Suspicious execution of non-interactive SSH commands that contain only one line targeting remote machines

Webshell running suspicious probe commands

Modification of Windows RDP configurations for port 3389

Suspicious execution of download commands in Windows

Suspicious account creation in Windows

Malicious code injection in crontab jobs

Suspicious command sequence in Linux

Execution of suspicious commands in Linux

Dynamic injection of suspicious scripts

Reverse shell

Reverse shell command

Potential data breach by using HTTP tunnels

Suspicious SSH tunneling

Suspicious webshell injection

Suspicious starting of a privileged container

Suspicious port listening

Malicious container startup

Remote API debugging in Docker that may pose security risks

Suspicious command

Privilege escalation in containers or container escapes

Malicious container startup

## Container escape prevention

The feature of container escape prevention detects high-risk behavior in processes, files, and system calls. The feature establishes a protective barrier between containers and hosts and effectively intercepts escapes to ensure the security of the container runtime. The feature also defends against known and unknown attack modes, and intercepts attacks that are initiated on hosts after attackers exploit container vulnerabilities.

### Prerequisites

The switch for **Malicious Host Behavior Prevention** or **Webshell Prevention** is turned on. For more information, see [Proactive Defense](/help/en/security-center/user-guide/enable-features-on-the-host-protection-settings-tab#section-8ad-fnl-sb4).

### Enable container escape prevention

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **System Settings** > **Feature Settings**.
    
3.  On the **Container Protection Settings** tab of the **Settings** tab, turn on Threat Detection in the **Container Escape Prevention** section.
    

### What to do next

1.  After you turn on the switch in the Container Escape Prevention section, you must create a defense rule against container escapes to allow the feature of container escape prevention to take effect. For more information, see [Use container escape prevention](/help/en/doc-detail/471391.html#task-2276700).
    
2.  If Security Center detects security risks in Kubernetes container clusters after the feature takes effect, alerts are generated for the risks, and the alerts are displayed on the **Detection and Response** > ****Alert**** page. We recommend that you view and handle the alerts at the earliest opportunity. For more information, see [Evaluate and handle security alerts](/help/en/security-center/user-guide/view-and-handle-alert-events#concept-rlc-rts-sfb).
    
    **Note**
    
    If the Agentic SOC feature is enabled, the entry point to ****Alert**** changes. For more information, see [Agentic SOC overview](/help/en/security-center/user-guide/overview-of-threat-analysis#section-18c-oqq-w9w).
