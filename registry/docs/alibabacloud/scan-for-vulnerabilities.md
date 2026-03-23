Security vulnerabilities are a primary vector for cyberattacks and can lead to data breaches or business disruptions. Security Center provides vulnerability scanning to discover **Linux Software Vulnerability**, **Windows System Vulnerability**, **Web-CMS Vulnerability**, ****Application Vulnerability****, and **Urgent Vulnerability** in your assets. This helps you identify and fix risks before an attack occurs, improving your security posture.

## Vulnerability scanning mechanisms

Security Center uses two detection methods:

-   **Software composition analysis (passive detection)**: The Security Center agent collects information about software versions and dependency libraries from your servers and compares it against a vulnerability database. This process only analyzes software metadata and does not affect the performance of your business systems.
    
-   **Web scanner (active validation)**: The web scanner sends specific proof-of-concept (POC) requests to your application services from the internet, simulating attack behavior to confirm a vulnerability. This method can detect high-risk vulnerabilities such as remote command execution and SQL injection. All requests are harmless probes and do not cause any actual damage to your systems.
    
    **Note**
    
    The web scanner is not currently supported for assets in the **Outside Chinese Mainland** region that are hosted in the Singapore data center.
    

## Usage notes

-   **Subscription**
    
    **Edition**
    
    **Manual scan**
    
    **Automatic (periodic) scan**
    
    **Enterprise** and **Ultimate**
    
    All
    
    **Advanced**
    
    All vulnerabilities except **Application Vulnerability**.
    
    **Basic**, **Value-added Plan**, and **Anti-virus**
    
    Only **Urgent Vulnerability**.
    
    **Linux Software Vulnerability**, **Windows System Vulnerability**, and **Web-CMS Vulnerability**
    
-   **Pay-as-you-go**
    
    **Protection Level**
    
    **Manual scan**
    
    **Automatic (periodic) scan**
    
    **Host Protection** and **Hosts and Container Protection**
    
    All
    
    **Unprotected** and **Antivirus**
    
    Only **Urgent Vulnerability**.
    
    **Linux Software Vulnerability**, **Windows System Vulnerability**, and **Web-CMS Vulnerability**
    

## **Configure network whitelist**

To ensure the web scanner can access your servers and perform active validation (POC), you must add the Security Center scanning IP address range 47.110.180.32/27 (which is 47.110.180.32 to 47.110.180.63) to the whitelists of your security groups and network firewalls.

**Important**

-   If you do not add the Security Center scanning IP addresses to your whitelist, the web scanner's active validation requests may be blocked. This can prevent the detection of application vulnerability and urgent vulnerability or cause requests to be misreported as attacks.
    
-   POC validation requests may contain the auxiliary domain s0x.cn, which is used for application and urgent vulnerability detection. If this generates an alert, you can either ignore the alert or create an alert whitelist rule.
    

### Configure a security group

If your server is an ECS instance, refer to [Manage security groups](/help/en/ecs/user-guide/manage-security-groups) for detailed steps. Use the following parameters:

-   **Direction**: Inbound
    
-   **Action**: Allow
    
-   **Protocol Type**: TCP
    
-   **Port Range**: 1-65535
    
-   **Source**: 47.110.180.32/27
    

### Configure a firewall whitelist

If your server uses Web Application Firewall (WAF), refer to [Configure whitelist rules to allow specific requests](/help/en/waf/web-application-firewall-3-0/user-guide/configure-whitelist-rules-to-allow-specific-requests) for detailed steps. Use the following parameters:

-   **Match Field**: IP
    
-   **Logic**: Belongs to
    
-   **Match Content**: 47.110.180.32/27
    
-   **Detection Modules to Skip**: All
    

## Run a vulnerability scan

Security Center offers two scanning methods:

-   **Manual scan**: Use this to immediately assess the vulnerability status of your servers.
    
-   **Automatic (periodic) scan**: Set up recurring tasks for automated and continuous vulnerability monitoring.
    

**Note**

After a scan is initiated, the system generates a scan task and runs it in the background. You can view the scan progress and results in [Task Management](#44c08ef4d3qm3).

### Manual scan

1.  **Log on to the console**
    
    Log on to [the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the left-side navigation pane, choose **Risk Governance** > **Vulnerabilities**. In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
2.  **Run a scan**
    
    On the **Vulnerabilities** page, click **Quick Scan** to scan all servers. In the **Vulnerability Scan** dialog box that appears, select the types of vulnerabilities to scan for, and then click **OK**.
    
    **Note**
    
    To scan specific servers, go to the **Host** page and select the desired servers. In the panel at the bottom of the page, click **Security Check**, and then select **Vulnerabilities** in the dialog box.
    

### **Automatic (periodic) scan**

Automatic scanning uses two different scheduling methods:

-   **Default cycle (non-configurable)**
    
    -   Applicable vulnerabilities: **Linux Software Vulnerability**, **Windows System Vulnerability**, and **Web-CMS Vulnerability**.
        
    -   Default scan cycle:
        
        -   **Subscription**
            
            -   **Advanced**, **Enterprise**, and **Ultimate**: Once per day.
                
            -   **Basic**, **Value-added Plan**, and **Anti-virus**: Once every two days.
                
        -   **Pay-as-you-go**
            
            -   **Host Protection** and **Hosts and Container Protection**: Once per day.
                
            -   **Unprotected** and **Antivirus**: Once every two days.
                
-   **User-defined cycle**
    
    -   Applicable vulnerabilities: **Application Vulnerability** and **Urgent Vulnerability**.
        
    -   Applicable editions:
        
        -   **Subscription**: **Advanced**, **Enterprise**, and **Ultimate**.
            
        -   **Pay-as-you-go**: **Host Protection** and **Hosts and Container Protection**.
            

Follow these steps to configure a scan:

1.  **Log on to the console**
    
    Log on to [the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the left-side navigation pane, choose **Risk Governance** > ****Vulnerabilities****. In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
2.  On the **Vulnerabilities** page, click **Vulnerability Settings** in the upper-right corner. Configure the settings as needed:
    
    **Setting**
    
    **Description**
    
    **Vulnerability scan switch**
    
    Enables or disables scanning for different vulnerability types (**Linux Software Vulnerability**, **Windows System Vulnerability**, **Web-CMS Vulnerability**, **Application Vulnerability**, and **Urgent Vulnerability**). After enabling a switch, you can click **Manage** to specify the scan scope (effective servers) for that vulnerability type.
    
    **YUM/APT Source Configuration**
    
    When enabled, Alibaba Cloud official YUM/APT sources are prioritized for fixing Linux vulnerabilities, significantly improving remediation success.
    
    **Urgent Vulnerability Scan Cycle**
    
    Sets the execution frequency for urgent vulnerability scan tasks.
    
    -   Default scan window:
        
        -   **Chinese Mainland**: `00:00:00 (UTC+8)` to `07:00:00 (UTC+8)`.
            
        -   **Outside Chinese Mainland**: `00:00:00 (UTC+7)` to `07:00:00 (UTC+7)`.
            
    -   Applicable editions/protection levels:
        
        -   Subscription: **Advanced**, **Enterprise**, and **Ultimate**.
            
        -   Pay-as-you-go: **Host Protection** and **Hosts and Container Protection**.
            
    
    **Application Vulnerability Scan Cycle**
    
    Sets the execution frequency for application vulnerability scan tasks.
    
    -   Default scan window:
        
        -   **Chinese Mainland**: `00:00:00 (UTC+8)` to `07:00:00 (UTC+8)`.
            
        -   **Outside Chinese Mainland**: Uses a staggered scheduling mechanism to run scans at different times within a 24-hour period.
            
    -   Applicable editions/protection levels:
        
        -   Subscription: **Enterprise** and **Ultimate**.
            
        -   Pay-as-you-go: **Host Protection** and **Hosts and Container Protection**.
            
    
    **Retain Invalid Vulnerabilities For**
    
    Sets the data cleanup period for stale vulnerabilities.
    
    The system marks vulnerabilities that have not recurred and have not been handled for a long time as "stale" and automatically archives them to the "Handled" list. After the configured cleanup period, the system permanently deletes them to reduce informational noise.
    
    **Note**
    
    If Security Center detects the same type of vulnerability in the future, a new alert will still be generated.
    
    **Vulnerability Scan Level**
    
    Sets the risk levels of vulnerabilities to be scanned. The system will only scan for and report on vulnerabilities that match the selected levels.
    
    ****Vulnerability Whitelist Settings****
    
    Add specific vulnerabilities that you have confirmed do not need to be handled (for example, due to special business needs or acceptable risk) to an whitelist. These vulnerabilities will be automatically ignored in subsequent scans.
    
    **Note**
    
    After adding a vulnerability whitelist rule, you can manage it (edit or delete) under **Vulnerability Whitelist Settings** in the **Vulnerability Settings** panel.
    

## View scan tasks

1.  On the **Vulnerabilities** page, click **Task Management** in the upper-right corner.
    
2.  In the **Actions** column of a task, click **Details** to view the scan task's impact data, including **Affected Servers**, **Successful Servers**, and **Failed Servers**.
    
3.  For successfully scanned servers, you can view the scope of the scanned vulnerabilities in the **Status** column. If a scan failed, you can view the failure reason in the **Status** column.
    

## **View and handle vulnerabilities**

On the **Vulnerabilities** page, navigate to the tab for the desired vulnerability type, open the details page for a specific vulnerability, and follow the instructions to fix it. For remediation steps, see [View and handle vulnerabilities](/help/en/security-center/user-guide/view-and-handle-vulnerabilities).

**Warning**

**Application Vulnerability** and **Urgent Vulnerability** do not support one-click remediation from the console. You must log on to the server and fix them manually by following the suggestions in the vulnerability details.

**Service Model**

**Service Edition / Protection Level**

**Description**

**Subscription**

**Enterprise** and **Ultimate**

Supports fixing **Linux Software Vulnerability**, **Windows System Vulnerability**, and **Web-CMS Vulnerability**.

**Advanced**

Supports fixing **Linux Software Vulnerability** and **Windows System Vulnerability**.

**Basic**, **Value-added Plan**, and **Anti-virus**

**Important**

To enable the one-click remediation feature, you must purchase the **Vulnerability Fix** value-added service. For instructions, see [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center).

Supports fixing **Linux Software Vulnerability** and **Windows System Vulnerability**.

**Pay-as-you-go**

**All protection levels**

## **Limits**

-   **Task management**: After creating a manual scan task, you must wait 15 minutes before you can stop the scan from the **Task Management** page.
    
-   **Scan duration**: The time required to complete a scan depends on the number of assets and the complexity of the vulnerabilities. Scans are typically completed within 30 minutes.
    

## **FAQ**

### **Scan behavior and results**

-   **Why does the same server report multiple instances of the same vulnerability?**
    
    Application vulnerability detection targets specific running process instances. If a server runs multiple instances of a process with the same vulnerability (for example, two identical Tomcat services started on different ports), the system reports a separate vulnerability for each process instance. If the vulnerable software is installed but not running, Security Center will not detect the vulnerability.
    
-   **Why do scan results for vulnerabilities like Fastjson sometimes vary?**
    
    The detection of such vulnerabilities depends on whether their components (like JAR packages) are loaded into a "runtime" state during the scan. In a dynamic loading model, Security Center can detect the vulnerability only when the business logic calls the vulnerable component. Therefore, scan results may differ at different times.
    
    **Note**
    
    To improve the detection accuracy for these types of vulnerabilities, we recommend running periodic or multiple scans.
    
-   **After the agent goes offline, why does the console still show vulnerability records for that host?**
    
    After the agent goes offline, Security Center retains the detected vulnerability records in the console. However, these records automatically become stale and you cannot perform any actions on them, such as fixing, verifying, or clearing them. The automatic staleness periods for vulnerabilities are as follows:
    
    **Important**
    
    Security Center permanently deletes all data only if the Security Center service expires and is not renewed within 7 days.
    
    -   **Linux Software Vulnerability** and **Windows System Vulnerability**: Become stale after 3 days.
        
    -   **Web-CMS Vulnerability**: Becomes stale after 7 days.
        
    -   **Application Vulnerability**: Becomes stale after 30 days.
        
    -   **Urgent Vulnerability**: Becomes stale after 90 days.
        

### **Performance impact and security**

-   **Does vulnerability scanning or active validation (POC) for urgent vulnerabilities affect business systems?**
    
    Typically, there is no impact. Security Center's active validation (POC) sends only a very small number (1-2) of harmless probe requests and does not perform any form of attack or destructive action. In rare cases, a minimal risk exists if the target application is exceptionally fragile when handling unexpected input.
    
-   **Why does a vulnerability scan sometimes trigger an out-of-memory (OOM) error?**
    
    The Security Center agent has a configured memory limit (200 MB by default). If a scan exceeds this limit, the system's OOM mechanism proactively terminates the detection process (ALiSecCheck) to conserve resources.
    
    **Note**
    
    -   This limit is typically managed by a control group (cgroup) named `aegisRtap0`. Related OOM information can be found in the dmesg logs.
        
    -   This behavior is normal and is not related to a system-wide memory shortage. No user intervention is required.
        
    -   This OOM error is caused by the cgroup's memory limit and does not indicate that the entire system is out of memory.
        
    

### **Scan scope and capabilities**

1.  **What is the scope of a vulnerability scan?**
    
    Scanning covers both the system and application layers:
    
    -   **System level**: Linux software vulnerability and Windows system vulnerability.
        
        **Important**
        
        The Windows system vulnerability scan is limited to monthly security update patches.
        
    -   **Application level**: Web-CMS vulnerability, Application vulnerability, and Urgent vulnerability.
        
2.  **How can I view the list of vulnerabilities that Security Center can detect?**
    
    1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
        
    2.  In the left-side navigation pane, click **Vulnerabilities** to go to the vulnerability scanning page. In the overview section, find the **Disclosed Vulnerabilities** statistics card.
        
    3.  Click the **total number of vulnerabilities** on the card to open the list page, where you can view all supported vulnerabilities and their details.
        
3.  **Does Security Center support detection for specific vulnerabilities like Elasticsearch?**
    
    Yes. You can view detection results for vulnerabilities in services like Elasticsearch on the ****Application Vulnerability**** page in the console.
    
    **Note**
    
    This feature is only available for the **Subscription** service (**Enterprise** and **Ultimate** editions) and the **Pay-as-you-go** service (**Host Protection** and **Hosts and Container Protection**). If your current edition does not support this feature, please [upgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center) first.
