Web Application Firewall (WAF) provides a self-service upgrade tool in the console that you can use to upgrade a WAF 2.0 instance to WAF 3.0. This topic describes the prerequisites, changes after the upgrade, and the upgrade procedure.

**Important**

The self-service upgrade tool is in canary release.

-   If the **WAF3.0 Upgrade Portal** button appears at the bottom of the navigation pane on the left in the [Web Application Firewall console](https://yundun.console.alibabacloud.com/?p=wafnext), you can perform a self-service upgrade.
    
-   If you want to upgrade your instance to WAF 3.0 and the **WAF3.0 Upgrade Portal** button is not displayed, contact your account manager to submit an upgrade application. After the application is approved, you can perform a self-service upgrade.
    

## **Prerequisites**

-   Instances that use the **transparent proxy mode** for an Application Load Balancer (ALB) instance cannot be upgraded directly. To upgrade such an instance, you must disable traffic redirection, delete the website configuration, and then perform a self-service upgrade. For more information, see [FAQ](#e89f6d11d46f2).
    
-   Alibaba Cloud synchronizes cloud service assets from 00:00 to 03:00 every day. Do not upgrade an instance that uses the transparent proxy mode during this period.
    
-   The instance is a subscription Pro, Business, or Enterprise edition, a Hybrid Cloud WAF Exclusive edition.
    
-   The instance does not use the data visualization service or have custom features enabled.
    
-   The instance does not expire within 15 days.
    
-   The upgrade operation requires the AliyunYundunWAFFullAccess permission.
    
-   The account has no overdue payments.
    

## **Before you upgrade**

### Impacts on your services

-   **Business continuity**: The upgrade is a smooth process that does not cause transient connections or affect your services. After the upgrade, the canonical name (CNAME) provided by WAF 2.0 and the configured origin URLs remain unchanged. You can view the related information on the [CNAME Record list](https://yundun.console.aliyun.com/?p=wafnew#/waf/ap-southeast-1/access/cname) page.
    
-   **Upgrade duration:** The upgrade takes about 15 minutes. The one-click full upgrade method typically takes longer than the manual batch upgrade method because it includes a comprehensive system precheck.
    

### Changes after the upgrade

**Changes in editions and features**

After the upgrade, the billing method and edition of your subscription Pro, Business, or Enterprise instance remain unchanged. WAF 3.0 integrates and optimizes the features of WAF 2.0. The main changes are as follows:

-   In WAF 3.0, subscription **Pro** Edition instances do not support the **intelligent rule hosting** feature of the Protection Rules Engine or the **slider verification** feature of custom rules. If you need these features after the upgrade, you must upgrade your instance to the **Enterprise** or **Ultimate** Edition. For more information, see [Upgrade](/help/en/waf/web-application-firewall-3-0/upgrade-or-downgrade-a-waf-instance#section-3n8-ved-gly).
    
-   WAF 3.0 provides the following new features: protection templates, custom response rules, critical event protection, and the advanced asset center. After the upgrade is complete, you can enable these features as needed. For more information, see [Configure protection rules for the custom response module to configure custom block pages](/help/en/waf/web-application-firewall-3-0/user-guide/configure-custom-response-rules-to-configure-custom-block-pages), [Critical event protection](/help/en/waf/web-application-firewall-3-0/user-guide/major-event-protection-1), and [Asset Center](/help/en/waf/web-application-firewall-3-0/user-guide/asset-center).
    
-   WAF 3.0 does not support the Hybrid Cloud WAF Exclusive edition. Therefore, Hybrid Cloud WAF Exclusive is upgraded to the subscription Ultimate Edition.
    
    The upgraded specifications are as follows:
    
    **Scenario**
    
    **Before upgrade**
    
    **After upgrade**
    
    Scenario 1
    
    WAF 2.0 Hybrid Cloud Version (includes 2 nodes + 200 domain names)
    
    WAF 3.0 Ultimate Edition (1 default node) + 1 extra node + 200 domain names
    
    Scenario 2
    
    WAF 2.0 Hybrid Cloud Version (includes 2 nodes + 200 domain names) + X paid extra nodes
    
    WAF 3.0 Ultimate Edition (1 default node) + 1 extra node + X extra nodes + 200 domain names
    
    Scenario 3
    
    WAF 2.0 Enterprise Edition + X paid extra nodes
    
    WAF 3.0 Ultimate Edition (1 default node) + X hybrid cloud extra nodes + 200 domain names
    
    Scenario 4
    
    WAF 2.0 Business Edition + X paid extra nodes
    
    WAF 3.0 Enterprise Edition (1 default node) + X hybrid cloud extra nodes + 200 domain names
    

**Fee changes**

**Important**

The upgrade operation is free of charge.

The total fees for your instance may change because of the differences between the editions and the features supported by WAF 2.0 and WAF 3.0, even if you do not use any other features. The changes take effect when you renew your instance for the first time after the upgrade. For more information about WAF 3.0 pricing, see the [WAF 3.0 purchase page](https://common-buy-intl.alibabacloud.com/?commodityCode=waf_v3prepay_public_intl).

**Important**

-   After your WAF instance is upgraded to WAF 3.0, if you unsubscribe from or downgrade your instance before the first renewal, WAF does not refund the corresponding amount.
    
-   If you downgrade the instance, WAF charges you based on the downgraded specifications at the next renewal.
    

**New features: sandbox, burstable pay-as-you-go QPS, and traffic billing protection**

Sandbox is a special mechanism in WAF 3.0. If an instance is sent to the sandbox, WAF no longer guarantees the Service-Level Agreement (SLA) for the product. This may cause service access exceptions for the instance's protected objects. These exceptions include but are not limited to packet loss, rate limiting, connection throttling, protection failures, abnormal log or report data, access timeouts, and traffic scrubbing or blackhole filtering for DDoS protection. For more information, see [Sandbox overview](/help/en/waf/web-application-firewall-3-0/sandbox-feature).

**Note**

The instance is not sent to the sandbox during the upgrade window.

-   **Subscription instances**
    
    If the actual traffic of an instance exceeds the purchased QPS specification (the sum of the default specification of the edition and the QPS extension), the instance may be sent to the sandbox. For more information, see [Burstable QPS (pay-as-you-go)](/help/en/waf/web-application-firewall-3-0/burstable-qps).
    
    After the upgrade, the actual traffic of the instance may exceed the default QPS specification of the current edition, which may cause the instance to enter the sandbox state.
    
    You can upgrade the edition, purchase a **Extended QPS**, or enable **Threshold of Burstable QPS (Pay-as-you-go)** to prevent your instance from being sandboxed for excessive QPS usage and avoid disruptions to your services.
    
    -   For more information about how to upgrade the edition, see [Upgrade](/help/en/waf/web-application-firewall-3-0/upgrade-or-downgrade-a-waf-instance#section-3n8-ved-gly).
        
    -   For more information about purchasing a **Extended QPS**, see [QPS Extension](/help/en/waf/web-application-firewall-3-0/purchase-a-subscription-waf-3-0-instance#2f77d501c3ik6).
        
    -   For more information about how to enable burstable pay-as-you-go QPS, see [Enable burstable QPS (pay-as-you-go)](/help/en/waf/web-application-firewall-3-0/burstable-qps#section-029-06l-vxq).
        
-   **Pay-as-you-go instances**
    
    If the peak QPS of an instance in an hour exceeds the set QPS threshold, the instance is sent to the sandbox. No bill is generated for that hour. This prevents high bills caused by unexpected QPS spikes. For more information, see [Traffic billing protection](/help/en/waf/web-application-firewall-3-0/traffic-billing-protection).
    
    After the upgrade, **Traffic Billing Protection** is enabled by default for the instance and cannot be disabled. The **Traffic Billing Protection Threshold** is set to the maximum queries per second (QPS) that the instance supports:
    
    -   Chinese mainland: 30,000.
        
    -   Outside the Chinese mainland: 3,000.
        
    -   If the maximum QPS cannot meet your needs, contact your account manager.
        
    
    An instance is automatically removed from sandbox mode if its peak queries per second (QPS) over the next hour is less than or equal to the **Traffic Billing Protection Threshold**. If the instance remains in sandbox mode for an extended period, you can adjust the **Traffic Billing Protection Threshold** based on your actual QPS traffic.
    

**Changes in Simple Log Service**

-   After a one-click upgrade, the system automatically creates a Logstore for WAF 3.0 and retains the Logstore for WAF 2.0.
    
    **Important**
    
    -   After the migration is complete, the Simple Log Service for WAF 3.0 records only required fields. If you selected optional fields in WAF 2.0, you must reselect them in the WAF 3.0 console.
        
    -   During the upgrade window, you can still view the Logstore in the WAF 2.0 console. After the upgrade is complete, you must log on to the [Simple Log Service (SLS) console](https://sls.console.alibabacloud.com/) to view the WAF 2.0 Logstore. For more information, see [Quick start for log query and analysis](/help/en/sls/quick-guide-to-query-and-analysis#task-tqc-ddm-gfb).
        
    
-   Logs in the WAF 2.0 Logstore that exceed the retention period are cleared in chronological order. To retain these logs, you must back them up promptly. For more information, see [Download logs](/help/en/sls/download-logs).
    
-   The default storage duration of logs in the WAF 3.0 Logstore is 180 days. You can modify this duration in the SLS console.
    

## **Upgrade process overview**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8936809671/CAEQTBiBgMC6toGiyRkiIDZlYzEyNDYyZDZjYzQ2YTNhYmM1NWIyNWFhMTE2NWFl3961578_20230829210146.367.svg)

**Notes on upgrading connected objects:**

-   When you upgrade a domain name that uses the transparent proxy mode, WAF upgrades the traffic from the traffic redirection ports of the bound cloud services (**Layer 7 SLB**, **Layer 4 SLB**, or **ECS**) to the corresponding cloud native mode. WAF also adds the service instance as a protected object and the domain name as a custom protected object.
    
-   When you upgrade traffic for a hybrid cloud connection, WAF upgrades the traffic to the hybrid cloud reverse proxy mode by default and generates a protected object.
    

**Introduction to the canary release feature:**

-   When you select manual batch upgrade, you can enable the canary release feature for domain names. This feature lets you first direct a portion of traffic to WAF 3.0. You can then gradually increase the traffic proportion until all traffic is migrated to WAF 3.0 as needed.
    
-   The supported traffic proportions for canary release are 1%, 5%, 10%, 20%, 30%, 50%, 70%, 90%, and 100%. Custom proportions are not supported. You can only increase the proportion, for example, from 10% to 20%. You cannot decrease the proportion.
    

**Note**

The data leakage prevention (DLP) feature does not support canary release. When the migration task starts, hits for data leakage prevention are recorded in WAF 3.0.

## **Procedure**

Log on to the [Web Application Firewall console](https://yundun.console.aliyun.com/?p=waf). In the top menu bar, select the resource group and region (**Chinese Mainland** or **Outside Chinese Mainland**) for the WAF instance. At the bottom of the navigation pane on the left, click **WAF3.0 Upgrade Portal**.

-   If your instance meets the upgrade requirements, in the **Upgrade Instructions** panel, read and acknowledge the notes, and then click **I understand the upgrade instructions and agree to proceed with the upgrade.** to open the **Upgrade Tool** page and begin the upgrade.
    
-   If your WAF instance does not meet the upgrade requirements, an **Error** message is displayed. You can resolve the error by following the instructions in the message.
    

### **Step 1: Bind traffic (for transparent proxy mode only)**

If your domain name is in transparent proxy mode, the **Bind Traffic to Cloud Service** page is displayed. You need to bind the domain name to the corresponding cloud product, such as ECS, Cloud Load Balancer (CLB) for TCP, or CLB for HTTP/HTTPS. If you are unsure which cloud product the domain name uses, you can follow the steps below to confirm:

1.  In [Network Diagnostic Analysis](https://boce.aliyun.com/home), select **Website Diagnostic Analysis** and enter a domain name to view and copy the public IP address from the ****DNS service provider analysis results**** section.
    
2.  Go to the [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region) and the [Classic Load Balancer (CLB) console](https://slb.console.alibabacloud.com/slb). Select the region and resource group, and find the instance corresponding to the IP address you copied in the previous step.
    
    -   For an ECS instance, select **ECS**.
        
    -   For a CLB instance that uses the TCP listener protocol, select **CLB(TCP)**.
        
    -   For a CLB instance that uses the HTTP or HTTPS listener protocol, select **CLB(HTTP/HTTPS)**.
        
3.  After making your selection, click **Continue Upgrade**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9935910371/p739641.png)
    

### Step 2: Perform an upgrade precheck

The upgrade precheck tool checks if the current instance meets the upgrade conditions. After the first check is complete, you can view the latest check time and result on the upgrade tool page. If the check fails, fix the issue based on the provided reason and then return to this page to run the check again.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1059326571/p816688.png)

### **Step 3: Select an upgrade method**

The upgrade tool provides three upgrade methods. Select one based on your needs:

**Migration method**

**One-click full upgrade**

**Manual batch upgrade: Migrate rules**

**Manual batch upgrade: Do not migrate rules**

Scenarios

-   For few domain names and simple rules. You can complete the upgrade with one click.
    
-   Uses the system's default configurations for the protection template after the upgrade.
    

-   For upgrading in batches and observing traffic.
    
-   The system automatically upgrades the protection rules.
    

-   For many domain names or complex rules. You need to upgrade in batches and observe traffic.
    
-   You must configure the protection template yourself after the upgrade.
    

Upgrade mode

The system prechecks if a full upgrade is supported. If the check passes, it automatically creates a WAF 3.0 instance and upgrades the forwarding configurations and protection rules to WAF 3.0.

The system prechecks if the protection modules you selected can be upgraded. If the check passes, it automatically creates a WAF 3.0 instance and upgrades the protection rules to WAF 3.0. You must manually upgrade the forwarding configurations.

The system automatically creates a WAF 3.0 instance without performing any upgrade actions. You must manually upgrade the forwarding configurations. Non-default protection rules must be reconfigured in the WAF 3.0 console.

1.  On the **Upgrade Tool** page, select **One-click Upgrade**, **Manual Batch Migration - Migrate Rules**, or **Manual Batch Migration - Do Not Migrate Rules**, and then click **Start Migration**.
    
    **Important**
    
    If you select **Manual Batch Migration - Migrate Rules**, you must select one or more protection rules to upgrade. Before you start the migration, carefully evaluate your business requirements.
    
2.  In the dialog box that appears, click **OK**. The instance will automatically start the upgrade, which takes approximately 15 minutes. Do not close or refresh the page until the upgrade is complete.
    
    **Note**
    
    If the upgrade fails, the instance is automatically rolled back to WAF 2.0. The **Rollback Complete** dialog box displays the reason for the failure.
    
    ![截屏2024-07-02 21](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5511237571/p816941.png)
    
3.  When the WAF automatic upgrade is complete, click **Confirm** in the **The WAF 3.0 instance is created.** dialog box to enter the upgrade window.
    

### **Step 4: Complete the migration within the upgrade window**

The upgrade window is a 15-day period for performing upgrade operations. You can view the time remaining in the upgrade window on the **Upgrade Tools** page.

**Notes about the upgrade window**

-   **Allowed operations**
    
    -   View service traffic.
        
    -   Upgrade domain names in batches.
        
    -   Switch between the WAF 2.0 and WAF 3.0 consoles.
        
    -   Add protection configurations in the WAF 3.0 console to check if the protection for the upgraded instance is effective.
        
    -   Roll back to WAF 2.0.
        
    -   Confirm that the upgrade is complete or abandon the upgrade.
        
-   **Disallowed operations**
    
    -   Do not perform operations such as **renewal**, **upgrade**, **downgrade**, or **unsubscribe** in the WAF console or the Expenses and Costs console. Otherwise, the instance may be released or fee refunds may fail.
        
    -   Do not enable or disable the protection switches for web tamper proofing or sensitive information leakage.
        
    -   You cannot create, modify, or delete forwarding configurations for WAF 2.0 in **Website Access** or for WAF 3.0 in **Onboarding**.
        
-   **Operations that require attention**
    
    -   During the upgrade window, if you add a new alert in WAF 3.0 and the alert is triggered, you will only receive the alert notification in WAF 2.0.
        
    -   During the upgrade window, if you add a new protection rule in WAF 2.0, the rule will not be synchronized to WAF 3.0.
        
    -   If you do not confirm that the upgrade is complete before the upgrade window expires, the instance and its configurations automatically roll back to WAF 2.0. The upgraded WAF 3.0 instance is released, and the protection configurations made during the window are deleted.
        
    -   Once the upgrade is complete, you can access your WAF instance only in the WAF 3.0 console. Before you click **Confirm Upgrade Completion**, ensure that no further upgrade operations are required.
        

**Perform operations based on the selected upgrade method:**

#### **One-click full upgrade**

1.  If you selected **One-click Upgrade** in the previous step, the **Upgrade Status** for all domain names and servers on the **Upgrade Tools** page is **Upgraded**, which indicates that the configurations for all domain names and cloud product instances in WAF have been automatically upgraded to WAF 3.0.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5511237571/p1001389.png)
    
2.  Check if the service-side traffic for each connected object is normal. This includes checking for significant fluctuations in the proportion of status code 200 in the logs, or sudden increases or decreases in QPS. If you have enabled the WAF 3.0 log service, you can see [Log query](/help/en/waf/web-application-firewall-2-0/user-guide/query-logs) for instructions.
    
3.  Click **Switch to WAF 3.0** in the bottom-left corner of the page and perform the following checks:
    
    1.  In the navigation pane on the left, click **Onboarding** to check the asset provisioning status.
        
    2.  In the navigation pane on the left, select **Protection Config** > **Core Web Protection**, and verify that the protection template and its associated objects meet your business requirements.
        
4.  If all services are running correctly, navigate to the **Upgrade Tools** and click **Confirm Upgrade Completion**. This releases the WAF 2.0 instance, and you must then use the WAF 3.0 console for security protection.
    
    **Note**
    
    -   If your services are not working correctly, go to the **Upgrade Tools** and, in the Actions column for the connected object, click **Roll Back to WAF 2.0** to roll back the corresponding domain name or server.
        
    -   After you roll back to version 2.0, you can also return to the Upgrade Tool page and click **Upgrade to WAF 3.0** in the **Actions** column for the target object. This action upgrades only the forwarding configuration for the object. You must then manually associate a corresponding scenario-specific template with the object.
        
    -   In a worst-case scenario, if the service is still abnormal after the rollback, click **Abandon Upgrade** in the upper-right corner of the page to revert all configurations to their pre-migration state.
        
    

#### **Manual batch upgrade: Migrate rules**

1.  If you selected **Manual Batched Migration - Migration Rules** in the previous step, on the **Upgrade Tools** page, the **Upgrade Status** for all domain names and servers is **Not Upgraded**, and you must proceed with the manual upgrade.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5511237571/p1001390.png)
    
2.  You can select one or more domain names or cloud product instances and manually upgrade them until their status is **Upgraded**. The following two upgrade methods are supported:
    
    -   **Direct upgrade**: In the Actions column, click **Upgrade to WAF 3.0**. In the dialog box, click **OK**.
        
    -   **Grayscale upgrade**: In the Actions column, click **Grayscale Upgrade** and select the percentage of traffic to be gradually routed to WAF 3.0. When the grayscale upgrade progress reaches 100%, the upgrade status is **Upgraded**.
        
3.  Check if the service-side traffic for each connected object is normal. This includes checking for significant fluctuations in the proportion of status code 200 in the logs, or sudden increases or decreases in QPS. If you have enabled the WAF 3.0 log service, you can see [Log query](/help/en/waf/web-application-firewall-2-0/user-guide/query-logs) for instructions.
    
    **Note**
    
    -   If your services are not working correctly, go to the **Upgrade Tools** and click **Roll Back to WAF 2.0** in the Actions column for the domain name or server that you want to roll back.
        
    -   After rolling back to version 2.0, you can return to the Upgrade Tool page and click **Upgrade to WAF 3.0** in the **Actions** column for the target object. This action upgrades only the forwarding configuration of the object. You then need to manually associate a corresponding scenario-specific template with the object.
        
    -   As a last resort, if your service is still abnormal after the rollback, click **Abandon Upgrade** in the upper-right corner of the page to revert all configurations to their pre-migration state.
        
    
4.  Once you have confirmed that all your domain names and cloud product instances are upgraded and that your service traffic and mitigation settings are correct, go to the **Upgrade Tools** and click **Confirm Upgrade Completion**. This action releases the WAF 2.0 instance, after which you must manage security protection in the WAF 3.0 console.
    

#### **Manual batch upgrade: Do not migrate rules**

1.  If you selected **Manual Batched Migration - Do Not Migrate Rules** in the previous step, the **Upgrade Status** of all domain names and servers on the **Upgrade Tools** page is **Not Upgraded**, and you must perform the upgrade manually.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5511237571/p1001390.png)
    
2.  You can manually upgrade one or more domain names or cloud product instances until their status is **Upgraded**. Two upgrade methods are available:
    
    -   **Direct upgrade**: In the **Actions** column, click **Upgrade to WAF 3.0**. In the dialog box that appears, click **OK**.
        
    -   **Grayscale upgrade**: In the Actions column, click **Grayscale Upgrade** and select the percentage of traffic to gradually migrate to the new version, WAF 3.0. When the grayscale upgrade progress reaches 100%, the upgrade status changes to **Upgraded**.
        
3.  Check if the service-side traffic for each connected object is normal. This includes checking for significant fluctuations in the proportion of status code 200 in the logs, or sudden increases or decreases in QPS. If you have enabled the WAF 3.0 log service, you can see [Log query](/help/en/waf/web-application-firewall-2-0/user-guide/query-logs) for instructions.
    
    **Note**
    
    -   If your services are not working correctly, go to the **Upgrade Tools** and click **Roll Back to WAF 2.0** in the Actions column for the domain name or server that you want to roll back.
        
    -   After rolling back to 2.0, you can also click **Upgrade to WAF 3.0** in the **Actions** column for the target object on the Upgrade Tool page. This action upgrades only the forwarding configuration for the object. You must then manually associate the corresponding scenario-specific template with the object.
        
    -   In an extreme case, if the service remains abnormal after the rollback, click **Abandon Upgrade** in the upper-right corner of the page to revert all configurations to their pre-migration state.
        
    
4.  Click **Switch to WAF 3.0** in the lower-left corner of the page and use the mitigation settings of the WAF 2.0 instance to create protection templates and rules for WAF 3.0 and configure the corresponding protected objects. For more information, see [Mitigation Settings Overview](/help/en/waf/web-application-firewall-3-0/user-guide/protection-configuration-overview).
    
5.  Once you have upgraded all domain names and cloud product instances and confirmed that the service traffic and Mitigation Settings are as expected, go to the **Upgrade Tools** and click **Confirm Upgrade Completion**. The WAF 2.0 instance is then released, and you must configure security protection in the WAF 3.0 console.
    

**Important**

You must click **Confirm Upgrade Completion** within the 15-day upgrade window. If you do not confirm the upgrade within this window, the instance and its configurations are rolled back to WAF 2.0. The automatically created WAF 3.0 instance is released, and the mitigation settings configured during the upgrade window are deleted. If you upgrade your WAF 2.0 instance to WAF 3.0 again, the upgrade process restarts.

## **What to do next (including configure logs, and alerts)**

After the upgrade is complete, if you had configured the following services in WAF 2.0, you need to perform additional operations in WAF 3.0:

-   **Configure Simple Log Service**
    
    You must reconfigure the following information for the log service:
    
    -   Configure log fields, storage type, collection status of protected objects, log storage duration, and log capacity. For more information, see [Overview of log management](/help/en/waf/web-application-firewall-3-0/user-guide/log-management-overview).
        
    -   Enable or disable the log service. For more information, see [Enable or disable the log service](/help/en/waf/web-application-firewall-3-0/user-guide/enable-or-disable-the-log-service-for-waf-feature).
        
-   **Configure Cloud Monitor and alerts**
    
    WAF 3.0 uses new events and metrics for monitoring. You must reconfigure them. For more information, see [Configure CloudMonitor notifications](/help/en/waf/web-application-firewall-3-0/user-guide/configure-cloudmonitor-notifications).
    
-   **Configure RAM permissions**
    
    You must reconfigure permission management for OpenAPI operations. For more information, see [Authorization](/help/en/waf/web-application-firewall-3-0/developer-reference/api-waf-openapi-2021-10-01-ram).
    
-   **Configure Terraform**
    
    You must reconfigure Terraform. For more information, see [Terraform Registry (domain name)](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/wafv3_domain?spm=a2c4g.11186623.0.0.55c88550AZLRE2) and [Terraform Registry (instance)](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/wafv3_instance?spm=a2c4g.11186623.0.0.55c88550AZLRE2).
    
-   **Configure OpenAPI**
    
    WAF 3.0 uses new OpenAPI operations. For more information, see [API overview](/help/en/waf/web-application-firewall-3-0/developer-reference/api-waf-openapi-2021-10-01-overview).
    
-   **Configure resource groups**
    
    Resource groups are not upgraded. You must reconfigure them. For more information, see [Enable WAF protection for a website using CNAME](/help/en/waf/web-application-firewall-3-0/user-guide/add-a-domain-name-to-waf-in-cname-record-mode#uicontrol-fwg-o03-jeb).
    
-   **Operations triggered by product code changes**
    
    After the upgrade is complete, the product code for WAF changes. If your instance requires business changes because of this change, contact your account manager.
    

## **FAQ**

### Can I upgrade an instance that has traffic redirected in transparent proxy mode?

Yes. WAF supports self-service upgrades for traffic in **transparent proxy mode** (**Layer 7 SLB**, **Layer 4 SLB**, **ECS**) to WAF 3.0. However, self-service upgrades for traffic in **transparent proxy mode** (**ALB**) are not currently supported. You must first disable traffic redirection for the ALB, delete the domain name configuration, and then perform the upgrade. Follow these steps:

1.  On the [Website Access page](https://yundun.console.aliyun.com/?p=waf#/waf/cn-hongkong/manage/domain/serverlist), click the **Servers** tab. Find the port that you want to manage and click **Disable Traffic Redirection** in the **Actions** column.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9181669861/p622540.png)
    
2.  On the **Domain Names** tab, find the domain name that you want to delete and click **Delete** in the **Actions** column.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0474973961/p623076.png)
    
3.  Upgrade the WAF instance. For more information, see the [Procedure](#af332e51c89d8) section.
    
4.  Reconnect the ALB traffic to WAF 3.0. For more information, see [Cloud native mode](/help/en/waf/web-application-firewall-3-0/user-guide/cloud-native-mode/).
    

### **Can I upgrade an Exclusive edition instance?**

Yes, you can. For details, contact your account manager or submit a [ticket](https://smartservice.console.alibabacloud.com/?#/ticket/add/?productId=80) for consultation.

### **Are there any fees during the upgrade process?**

No, there are not. After the upgrade is complete, fees for subscription instances are incurred at the next renewal.

### Can I upgrade a WAF 2.0 Business Edition to WAF 3.0 Pro Edition, or a WAF 2.0 **Pro Edition** to WAF 3.0 **Business Edition?**

No, you cannot. Subscription instances only support same-edition upgrades. A WAF 2.0 Pro Edition can only be upgraded to a WAF 3.0 Pro Edition. If you want to use the Business Edition, you can upgrade the Pro Edition to the Business Edition after the upgrade is complete. For more information, see [Upgrade](/help/en/waf/web-application-firewall-3-0/upgrade-or-downgrade-a-waf-instance#section-3n8-ved-gly).

### **During the upgrade window, can I add a new domain name to WAF 2.0 and then continue the upgrade?**

No, you cannot add a domain name to your WAF 2.0 instance during the upgrade window and then resume the upgrade. During the upgrade window, the **Website Access** page is grayed out. You cannot add, delete, or modify domain names or their forwarding configurations. To add a domain name to the WAF 2.0 instance, you must first cancel the upgrade and add the domain name. You can then restart the upgrade for the WAF 2.0 instance.

**Note**

After you abandon the upgrade, the system deletes the WAF 3.0 instance and its configurations, and the upgrade process is exited.

## **References**

-   For more information about WAF 2.0 versions and billing, see [Version guide](/help/en/waf/web-application-firewall-2-0/product-overview/waf-deployment-plans-and-editions), [Subscription billing](/help/en/waf/web-application-firewall-2-0/product-overview/billing-rules), and .
    
-   For more information about WAF 3.0 versions and billing, see [Editions](/help/en/waf/web-application-firewall-3-0/product-overview/editions), [Subscription billing](/help/en/waf/web-application-firewall-3-0/billing-description), [Pay-as-you-go billing](/help/en/waf/web-application-firewall-3-0/billing-description-v3), [Upgrade and downgrade](/help/en/waf/web-application-firewall-3-0/upgrade-or-downgrade-a-waf-instance), [Renewal policy](/help/en/waf/web-application-firewall-3-0/renewal-policy), and [Unsubscription policy](/help/en/waf/web-application-firewall-3-0/unsubscription-policy).
    
-   For a comparison of billing, connection methods, and feature differences between WAF 2.0 and WAF 3.0, see [Comparison of WAF 3.0 and WAF 2.0](/help/en/waf/web-application-firewall-2-0/product-overview/compare-waf-3-0-with-waf-2).
