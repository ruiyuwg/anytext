In Security Center, host and container security quotas refer to the number of servers and compute cores protected by your subscription instance or the number of servers bound to a paid protection level after enabling the pay-as-you-go feature for host and container security. Bind a protection edition (or protection level) to a server to enable the corresponding security capabilities. This topic describes how to manage authorization editions and protection levels for subscription and pay-as-you-go instances in Security Center.

## **Subscription billing model**

### **Available protection editions**

To meet host and container security needs in different scenarios, Security Center offers the following editions:

**Edition**

**Description**

**Fee**

**Basic**

Provides only basic security detection, such as identifying unusual server logons, DDoS, common server vulnerabilities, and some cloud product configuration risks. It lacks active protection features.

Free

**Anti-virus**

Detects and removes common viruses on your hosts.

USD 1 per core per month

**Advanced**

Provides host virus detection and removal, vulnerability detection and fixing, and security reports.

USD 9.5 per server per month

**Enterprise**

Meets host security requirements for intrusion prevention, identity authentication, and security audit.

USD 23.5 per server per month

**Ultimate**

Provides full-stack security protection for hosts, containers, and Intelligent Computing LINGJUN servers. Capabilities include K8s threat detection, Container Asset Overview, security alerts, virus removal, vulnerability detection, Asset Fingerprints, and attack chain analysis.

USD 23.5 per server per month + USD 1 per core per month

For details about features and billing rules supported by each edition, see [Features](/help/en/security-center/product-overview/functions-and-features) and [Billing details](/help/en/security-center/product-overview/billing-overview).

### **Prerequisites**

-   You have purchased a subscription to the Anti-virus, Advanced, Enterprise, or Ultimate edition of Security Center. For more information, see [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center#section-np4-w11-zfl).
    
-   You have onboarded a server to Security Center. For more information, see [Install the client](/help/en/security-center/user-guide/install-the-security-center-agent).
    

### **Usage notes**

**Edition limits**

A subscription instance supports only one edition at a time. After purchasing a subscription, you can bind only that edition to all your servers.

**Default binding rules**

-   **Automatic binding**_:_ If you subscribe to the Anti-virus, Premium, Enterprise, or Ultimate Edition but do not perform [custom on-demand binding](/help/en/security-center/user-guide/purchase-security-center#eb8971147bv8n), the system automatically and randomly binds the edition to available servers to avoid idle resources. You can remove these bindings in batches at any time.
    
-   **LINGJUN, ACK, and connected self-managed cluster assets**:
    
    -   If your Security Center edition is Ultimate Edition, it is bound by default and **cannot be changed**.
        
    -   If your Security Center edition is Anti-virus, Premium, or Enterprise, the Free Edition is bound by default and **cannot be changed**.
        
-   **Security Center trial edition**: The trial edition provides full protection and is bound to all servers by default. This setting cannot be modified.
    

**Container binding limits**

Assets running container workloads can be bound only to the **Ultimate Edition** quota. Binding to Anti-virus, Premium, or Enterprise Edition quotas is not supported. The following asset types support only Ultimate Edition binding:

-   Intelligent Computing LINGJUN assets
    
    On the **Assets** > **Host** page, on the **Servers** tab, set the **Server Type** filter to **LINGJUN GPU-accelerated Bare Metal Instance** to view the list of LINGJUN assets under your account.
    
-   Container Service for Kubernetes (ACK) assets
    
-   [Self-managed Kubernetes cluster assets connected to Security Center](/help/en/security-center/user-guide/connect-a-self-managed-kubernetes-cluster-to-security-center)
    

**Note**

If your container asset is not listed above but is connected to Security Center and bound to the Enterprise Edition, it can use only the security capabilities provided by the Enterprise Edition. Container runtime security detection and protection are not supported.

**Edition change limits**

In the following two cases, you must use the paid edition for at least 30 days before changing to the Free Edition.

**Note**

Quotas automatically bound under the [default binding rules](#cf5e26676e9xd) are not subject to this time limit when first changed to the Free Edition.

-   Servers manually bound to a paid edition.
    
-   Paid editions bound via automatic binding for newly added servers.
    

**Automatic quota revocation**

Security Center automatically revokes quotas in the following scenarios:

-   An Elastic Compute Service (ECS) instance is released.
    
-   A third-party server is unbound in the Security Center console.
    
-   An off-cloud server is automatically removed by scheduled cleanup rules.
    

**Note**

If you manually uninstall the Security Center client from a server, the asset status on the **Host** page shows as Client Offline. In this case, Security Center does not automatically revoke the corresponding quota.

**Accessing quota management**

-   If a **Manage** entry appears next to **Protected Servers** in the **Subscription** section of the **Overview** page, your Alibaba Cloud account has switched to on-demand protection mode and you can manage quotas.
    
-   If no quota management entry appears in the Security Center console, your account is in full protection mode.
    
    **Note**
    
    -   In full protection mode, all servers onboarded to Security Center are bound to quotas by default.
        
    -   Security Center will discontinue support for full protection mode. We recommend that you manually switch from full protection mode to on-demand protection mode. For more information, see [How do I manually switch from full protection mode to on-demand protection mode?](/help/en/security-center/product-overview/notice-change-full-protection-to-partial-protection#e27c536e43qum).
        
    

### **Manage protection editions for servers**

You can bind a protection edition to any server onboarded to Security Center (view server details on the **Host** page) to enable security protection. If you have remaining quotas, you can bind a purchased edition to a server using the Free Edition. You can change the edition to Free Edition only after the server has been bound to a paid edition for more than 30 days.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, click **Overview**.
    
3.  In the **Subscription** section, click **Quota Management** next to **Protected Servers**.
    
    You can also go to the **Assets** > **Host** page and click **Manage** in the **Remaining Quota** section.
    
4.  In the **Quota Management** dialog box, select the region where the server is located, choose an edition for the server, and then click **View Change Details**. After confirming the edition is correct, click **OK**.
    
    To automatically bind a protection edition to new servers, select **Automatically Add New Servers to Security Center**.
    
    **Note**
    
    After selecting **Automatically Add New Servers to Security Center**, if your assets include LINGJUN, ACK, or connected self-managed cluster assets, new assets of these types are automatically bound to the Ultimate Edition if you purchased it. If you purchased any other edition, these new assets are automatically bound to the Free Edition.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9085826171/p795231.png)
    

## **Pay-as-you-go billing model**

### **Protection levels**

**Protection level**

**Description**

**Monthly fee (30-day reference price)**

**Unprotected**

Provides only basic security detection, such as identifying unusual server logons, DDoS, common server vulnerabilities, and some cloud product configuration risks. It does not include active protection features.

Free

**Antivirus**

Detects and removes common viruses on your hosts.

USD 1.5 per core per month

**Advanced**

New purchases and changes are no longer supported.

USD 14.25 per instance per month

**Host Protection**

Meets host security requirements for intrusion prevention, identity authentication, and security audit.

35.25 USD per instance per month

**Hosts and Container Protection**

Provides full-stack security for hosts, containers, and Intelligent Computing LINGJUN servers. Capabilities include K8s threat detection, Container Asset Overview, security alerts, virus removal, vulnerability detection, Asset Fingerprints, and attack chain analysis.

USD 35.25/instance/month + USD 1.5/core/month

### **Prerequisites**

-   You have enabled the pay-as-you-go feature for host and container security in Security Center. For more information, see [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center#section-np4-w11-zfl).
    
-   You have onboarded a server to Security Center. For more information, see [Install the client](/help/en/security-center/user-guide/install-the-security-center-agent).
    

### **Usage notes**

-   After enabling pay-as-you-go for host and container security, you can bind any protection level to your servers at any time. Security Center calculates fees based on the number of servers bound to each level and the actual protection duration (measured in seconds, counted only when the client is in **Online** status). Billing occurs daily. For more information, see [Billing details](/help/en/security-center/product-overview/billing-overview).
    
-   If you do not configure **Custom Quota Binding** when enabling pay-as-you-go, Security Center automatically binds one of the following protection levels to all servers under your Alibaba Cloud account: **Host Protection** or **Host and Container Protection**.
    
    **Important**
    
    Server assets running container environments—including Alibaba Cloud ACK cluster nodes, Intelligent Computing LINGJUN, and servers from self-managed Kubernetes clusters—are automatically bound to **Host and Container Protection**. All other assets are automatically bound to **Host Protection**.
    
-   To ensure comprehensive risk monitoring for assets onboarded to Security Center, assets running container workloads support only the **Host and Container Protection** level. Other protection levels are not supported. This requirement applies to the following container assets:
    
    -   Intelligent Computing LINGJUN assets
        
        **Note**
        
        On the **Assets** > **Host** page, on the **Servers** tab, set the **Server Type** filter to **LINGJUN GPU-accelerated Bare Metal Instance** to view the list of LINGJUN assets under your account.
        
    -   Container Service for Kubernetes (ACK) assets
        
    -   [Self-managed Kubernetes cluster assets connected to Security Center](/help/en/security-center/user-guide/connect-a-self-managed-kubernetes-cluster-to-security-center)
        
    
    If your container asset is not listed above but is connected to Security Center and bound to a protection level, it can use only the security capabilities provided by **Host Protection**. Container runtime security detection and protection are not supported.
    

### **Manage protection levels for servers**

You can bind a protection level to any server onboarded to Security Center (view server details on the **Host** page) to enable security protection.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, click **Overview**.
    
3.  In the **Pay-as-you-go** area, under **Host and Container Security**, click **Quota Management**.
    
    You can also go to the **Assets** > **Host** page and click **Quota Management**.
    
4.  In the **Quota Management** dialog box, select a region and protection level for the server.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1566731471/p923926.png)
    
5.  In the **Automatically Add New Servers to Security Center** section, select the protection level to automatically bind to new servers.
    
    **Note**
    
    For LINGJUN, ACK, and connected self-managed cluster assets, the **Host and Container Protection** level is bound only if you select **Host and Container Protection** in the **Automatically Add New Servers to Security Center** section. If you select any level other than **Host and Container Protection**, the **Unprotected** level is bound to those assets.
    
6.  Click **View Change Details**, confirm the updated protection level is correct, and then click **OK**.
    

## **View server protection editions**

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Assets** > **Host**. In the upper-left corner of the console, select the region where your assets are deployed: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  On the **Host** page, on the **Server** tab, view the edition displayed in the **Binding Status** or **Protection Level** column for the target server.
    
    -   Subscription instances:
        
        -   Anti-virus, Premium, Enterprise, or Ultimate Edition: The server is bound to a paid protection edition and benefits from the security capabilities of that edition.
            
        -   Free Edition: The server is not bound to a paid protection edition. It uses the security detection capabilities of the Free Edition and is unprotected. For more information, see [Security Center Free Edition overview](/help/en/security-center/product-overview/introduction-to-security-center-basic).
            
    -   Pay-as-you-go instances:
        
        -   Virus Protection, Host Full Protection, Host and Container Full Protection, or Premium Edition: The server is bound to a paid protection level and benefits from the security capabilities of that level.
            
        -   Unprotected: The server is not bound to a paid protection level. It uses the free detection capabilities provided by Security Center and is unprotected. For more information, see [Security Center Free Edition overview](/help/en/security-center/product-overview/introduction-to-security-center-basic).
            
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6241801471/p795236.png)
    

## **What to do next**

After binding a protection edition, you can configure host and container protection settings. For more information, see [Host protection settings](/help/en/security-center/user-guide/enable-features-on-the-host-protection-settings-tab).

## **References**

-   If you have too few or too many quotas, upgrade or downgrade your Security Center instance to adjust the number of quotas. For more information, see [Upgrade and downgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center).
    
-   To reduce or increase quotas for the next billing cycle, change specifications during renewal. For more information, see [Renewal policy (subscription)](/help/en/security-center/product-overview/renew-the-subscription-to-security-center#p-zfu-okt-6ux).
    
-   To view bills for pay-as-you-go services, see [View bill details](/help/en/user-center/billing-details-1).
