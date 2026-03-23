Multi-account management lets you buy Security Center products centrally, set protection, and handle risks for many Alibaba Cloud accounts. You can also monitor each member account’s security status in real time.

## Before you start

-   [A resource directory is enabled](/help/en/resource-management/resource-directory/user-guide/enable-a-resource-directory#task-2152699).
    
-   You have [created a new member](/help/en/resource-management/resource-directory/user-guide/create-a-member#task-tzh-bs1-dhb) in the resource directory or [invited an existing Alibaba Cloud user](/help/en/resource-management/resource-directory/user-guide/invite-an-alibaba-cloud-account-to-join-a-resource-directory#task-2039327) to join.
    

## What multi-account management does

-   **Centralized security configuration and risk** – Member accounts keep their own data and config. Use a Security Center [delegated administrator account](/help/en/resource-management/resource-directory/user-guide/manage-a-delegated-administrator-account#section-g2u-sqs-uw3) to manage security settings, handle risks, and harden multiple member accounts from one place.
    
-   **Cross-account logs and threat analysis** – With Agentic SOC, send member account data into the delegated administrator account for central storage and analysis, so you can see cross-account risks and a single view of events.
    
-   **Unified payment and shared authorization** – The delegated administrator buys authorization quotas for multiple Security Center features and assigns them to member accounts without extra purchases, so the organization can buy once and settle internally.
    

Use the finance trusteeship feature to pay for all cloud products across member accounts in one place. For details, see [Trusteeship Overview](/help/en/user-center/trusteeship).

**Important**

You cannot assign a quota to a member account that already has a Security Center instance. That member must cancel its subscription and turn off pay-as-you-go before you can assign a quota. Use a Security Center delegated administrator (not the management account) to buy quotas.

## Example: multi-account setup

A security team can use one account (the Security Center delegated administrator) to manage Alibaba Cloud accounts used for production and test. You get one place for risk detection, handling, and hardening. For complex setups, open a ticket for support.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5408770771/CAEQSxiBgMCv2dK4yBkiIDllMjllYjEzYjlkNjQ0MTg5YTJhZGM5YzI0NWRjMTA55234898_20250609103501.817.svg)

## Step 1: Add a delegated administrator account

The resource directory management account can name a member as delegated administrator for a trusted service. That member then gets permission from the management account to see the resource directory’s organization and members in the trusted service and to run operations there.

1.  Sign in to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/) with the management account.
    
2.  On the **Trusted Services** page, find **Security Center** and click **Manage** in the **Actions** column.
    
3.  In the **Delegated Administrator Accounts** section of the page that appears, click **Add**.
    
4.  In the **Add Delegated Administrator Account** panel, choose the member to make the delegated administrator, then click **OK**.
    

After that, use this delegated administrator account to open multi-account management and run tasks in the organization. You can add at most 10 Security Center delegated administrator accounts.

## Step 2: Set account management scope

Choose which member accounts this delegated administrator can manage.

**Important**

-   A delegated administrator can only see and manage member accounts in its scope. It cannot see accounts managed by other delegated administrators. If the management account sets the scope, only the management account can see and manage those members.
    
-   A member account can belong to only one delegated administrator at a time.
    

1.  Sign in to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas) with the delegated administrator account.
    
2.  In the left navigation pane, choose **System Settings** > **Multi-account Management**. In the upper-left corner of the console, select the region where the assets to be protected are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  (First time only) On the **Multi-account Management** page, click **Enable Management in Security Center**.
    
4.  On the **Configure** tab, under **Total Monitored Accounts**, click **Account Management**.
    
5.  In the **Multi-account Management Settings** panel, select the member accounts for this delegated administrator to manage.
    
6.  (Optional) Turn on **Automatic Management of New Accounts**, then click **Configure Policy**, pick the resource directory node, and click **OK**. New accounts under that node are added automatically.
    
7.  Click **OK**. You can see the member accounts in scope on the **Configure** tab.
    

## Step 3: Allocate quotas (optional)

A delegated administrator can buy quotas for specific features (subscription) and assign them to member accounts.

### Limits

Only a delegated administrator can assign Security Center subscription quotas to the member accounts it manages. Those members must not already have a Security Center subscription or any pay-as-you-go features turned on, except agentless detection and Serverless security. Pay-as-you-go Security Center instances do not support unified settlement or quota allocation. The table below lists features that support allocation and their minimum and increment.

**Feature**

**Minimum**

**Increment**

**Notes**

Host and container security (Ultimate/Enterprise/Advanced/Anti-virus server quota)

1 server or 1 core

1 server or 1 core

Quota allocation is not supported for: Vulnerability fixing, Agentless detection (pay-as-you-go only), Serverless asset protection (pay-as-you-go only). For vulnerability fixing, assign Advanced, Enterprise, or Ultimate quotas; Anti-virus does not support it.

Anti-ransomware capacity

10 GB

10 GB

After you buy managed anti-ransomware, allocated capacity uses managed capabilities by default.

Managed anti-ransomware

–

–

–

Log analysis capacity

10 GB

10 GB

–

Container image scan

20 scans

20 scans

–

Application protection

1 master process

1 master process

–

Cloud honeypot

20 probe

20 probe

–

Web tamper proofing

1 server

1 server

–

CSPM

15,000 times

55,000 times

–

Malicious file detection

100,000 times

100,000 times

–

Agentic SOC - Log ingestion traffic

100 GB

100 GB

–

Agentic SOC - Log storage capacity

1,000 GB

1,000 GB

–

### View and purchase quotas

1.  Sign in to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas) with the delegated administrator account and select the region.
    
2.  On the **Overview** page, under **Subscription**, view quotas for your instance. For example, Anti-ransomware (GB) might show 132.9/150 (150 = purchased quota, 132.9 = used, including China and Outside China).
    
3.  To buy more, click **Buy Now** or **Upgrade Now**. See [Purchase a subscription-based instance](/help/en/security-center/user-guide/purchase-security-center#2c9cad6e39bbz) and [Upgrade and downgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center#section-3s4-ehb-3ij).
    

### Allocate quotas to member accounts

1.  Sign in to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas) with the delegated administrator account and select the region.
    
2.  On the **Overview** page, under **Subscription**, click **Multi-account Management**. Or go to **System Settings** > **Multi-account Management** > ****Configure**** tab and click **Quota Management** under **Total Monitored Accounts**.
    
3.  On the **Multi-account Quota Management** page, click **Edit**.
    
4.  In the **Add Account** dialog, select the member accounts to assign quotas to and click **OK**. You can only grant quotas to member accounts this delegated administrator manages (not unmanaged or other delegated admins’ accounts). Members must not have a subscription or pay-as-you-go value-added features on, except Agentless detection and Serverless security.
    
5.  In the **Quota Management** section, assign quotas. The first row shows remaining quotas for this account (read-only); unallocated quotas count toward this account. Do not allocate more per feature than the first row. After you allocate, the first row updates. For min and increment, see [the Limits table](#e434a1a4daahp).
    
6.  Click **Save**. After you assign server quotas to a member, the system binds them to that member’s servers at random. Later quotas are not auto-bound; switch to the member account and bind them. See [Manage host and container security](/help/en/security-center/user-guide/authorization-number-management) quotas.
    

Delegated administrators cannot use a member’s log analysis by switching accounts; members must sign in to use log analysis.

## Step 4: Manage configurations and risks for member accounts

### Risk overview

-   On **System Settings** > **Multi-account Management** > ****Overview**** tab: view security scores, at-risk assets, alerts, vulnerabilities, and baseline issues for members in scope. On the **Configure** tab you see risk stats per member.
    
-   In the top-left of the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas), switch to a member account to see that account’s operations on the overview page. For more information, see [the overview topic](/help/en/security-center/user-guide/security-overview).
    

### Manage configurations and risks

1.  Sign in to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas) with the delegated administrator account and select the region.
    
2.  In the left navigation pane, choose **System Settings** > **Multi-account Management**. In the upper-left corner of the console, select the region where the assets to be protected are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  On the **System Settings** > **Multi-account Management** > ****Configure**** tab, click **Settings** for a member account.
    
4.  In the **Settings** panel, set agent, vulnerability, and baseline scan options, then click **OK**.
    
    -   **Agent Management**: defense and alerts ([Enable features on the Host Protection Settings tab](/help/en/security-center/user-guide/enable-features-on-the-host-protection-settings-tab), [Agent capability configuration](/help/en/security-center/user-guide/enable-features-on-the-agent-settings-tab), [Other configurations](/help/en/security-center/user-guide/enable-features-on-the-other-settings-tab)).
        
    -   **Vulnerabilities**: scan settings (see [vulnerability topic](/help/en/security-center/user-guide/scan-for-vulnerabilities#section-aos-ny2-htw)).
        
    -   **Baseline Check**: policies (see [Configure and execute baseline check policies](/help/en/security-center/user-guide/set-and-apply-baseline-check-policies#title-5l6-lv7-gzt)).
        
5.  In the top-left, switch to that member account to open its console. From there the delegated administrator can do asset inventory, risk detection, hardening, real-time protection, and detection and response. See [Security Center features](/help/en/security-center/product-overview/functions-and-features).
    

## Additional operations

### Using allocated quotas

After a delegated administrator assigns quotas, members use those quotas. If they need more, they ask the management account. Members cannot buy, renew, or upgrade Security Center instances. To use quotas well:

-   [Manage host and container security quotas](/help/en/security-center/user-guide/authorization-number-management): On **Overview** or **Host**, view and manage server protection quotas (Ultimate, Enterprise, Advanced, Anti-virus).
    
-   **Anti-ransomware**: Create policies to back up core data on servers or databases. See [Anti-ransomware for servers](/help/en/security-center/user-guide/create-an-anti-ransomware-policy-1) and [Anti-ransomware for databases](/help/en/security-center/user-guide/create-an-anti-ransomware-policy).
    
-   **Log analysis**: Logs are delivered by default; no action needed. Delegated administrators cannot use a member’s log analysis by switching; members must sign in.
    
-   [Container image scan](/help/en/security-center/user-guide/scan-images#8eb742a4e7nog): Run an image scan; the quota is used to find risks in the image.
    
-   [Application protection](/help/en/security-center/user-guide/use-application-protection/): Add applications in the application protection feature.
    
-   [Cloud honeypot](/help/en/security-center/user-guide/configure-a-honeypot): Deploy honeypots on servers to capture attacks.
    
-   [Web tamper proofing](/help/en/security-center/user-guide/use-the-feature-of-web-tamper-proofing): Add protection to servers to block illegal injection and keep sites working.
    
-   [CSPM](/help/en/security-center/user-guide/cspm): Set cloud service config risk checks, baseline risk checks, and attack path scan rules.
    
-   [Malicious file detection](/help/en/security-center/user-guide/sdk-for-malicious-file-detection/#section-p1i-cpn-wm2): Call the SDK on servers to check offline files or files in OSS in the Security Center console.
    
-   **Agentic SOC log storage capacity**: Turn on delivery of Security Center logs and standardized logs. See [Log Management](/help/en/security-center/user-guide/log-management-2-0).
    
-   **Agentic SOC - log ingestion traffic**: Add cloud service logs to Agentic SOC. See [Product integration](/help/en/security-center/user-guide/add-product-to-agentic-soc-2-0).
    

### Delete member accounts

Sign in with the delegated administrator account, go to **System Settings** > **Multi-account Management** > ****Configure**** tab, and click **Delete** for the member account.

**Important**

Removing a member account and its quotas releases those quotas. All assets under that member lose protection, quotas are released, and logs are cleared. Proceed with care.

### Delete quotas for member accounts

Sign in with the delegated administrator account. On **Overview** > **Subscription**, click **Multi-account Management**. Under **Quota Management**, hover the account name, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3966480571/p967867.png) icon, and click **OK** in the dialog.

## References

-   If you use Agentic SOC 1.0 and manage multiple accounts through the Security Center - Agentic SOC delegated administrator, see [the related operation topic](/help/en/security-center/multi-account-unified-management-guide).
    
-   If an authorized member account needs to purchase Security Center independently, see [the related topic](/help/en/security-center/user-guide/faq-about-the-system-configuration-module-of-security-center#dbe5a2ac319ch).
