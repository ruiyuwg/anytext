Security Center provides a comprehensive view of security alerts and helps you enable protection features to quickly identify and handle security risks. You can view and manage ongoing security alerts, and also archive and export historical alert data for later analysis.

## View security alert statistics

Security Center displays statistics about your security alerts and protection features. This helps you quickly understand the status of your security alerts and identify which protection features are enabled or disabled.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where your assets are deployed: **Chinese Mainland** or **Outside **Chinese Mainland****.
    
2.  In the navigation pane on the left, choose **Detection and Response** > **Alert**.
    
    **Note**
    
    If you have enabled Agentic SOC, the navigation path changes to **Agentic SOC** > **Alert**.
    
3.  On the **Alert** page, above the **CWPP** tab, view the alert statistics.
    
    **Statistic**
    
    **Description**
    
    **Related operations**
    
    **Alerting Servers**
    
    The number of servers that have security alerts.
    
    Click the number to go to the **Host Assets** page for details.
    
    **Urgent Alerts**
    
    The number of pending alerts with a risk level of **Urgent**.
    
    **Note**
    
    Handle these alerts first.
    
    Click the number to filter for all **Urgent** alerts.
    
    **Total Unhandled Alerts**
    
    The total number of pending alerts.
    
    These alerts are displayed by default in the alert list on the **Cloud Workload Protection Platform (CWPP)** tab. For more information, see [Evaluate and handle security alerts](/help/en/security-center/user-guide/view-and-handle-alert-events).
    
    **Precise Defense**
    
    The number of virus alerts automatically blocked by the **Malicious Host Behavior Defense** feature.
    
    **Note**
    
    An automatically blocked virus indicates a successful defense by Security Center. No manual action is required.
    
    Click the number to view all automatically blocked virus alerts.
    
    **Enabled IP Address Blocking Policies/All Policies**
    
    -   **Active IP blocking policies**: The number of enabled brute-force attacks protection policies.
        
    -   **Total policies**: The total number of brute-force attacks protection policies, including disabled ones.
        
    
    Click the number to open the **IP Rule Policy Library** panel and view details about the IP blocking policies. For more information, see [Brute-force attacks protection](/help/en/security-center/user-guide/anti-brute-force-cracking).
    
    **Quarantined Files**
    
    The number of malicious files quarantined while handling alerts. After a malicious file is quarantined, it no longer poses a risk to your services.
    
    Click the number to open the **File Quarantine** panel and view details about the quarantined files. For more information, see [View and recover quarantined files](#7bb6d5e026luw).
    
    **Network Defense Alert**
    
    By default, this shows attack analysis statistics for the last 7 days: the number of basic attacks that were detected and automatically blocked.
    
    Click the number to view the number of attacks, Attack Type Distribution, Top 5 Attack Source IP Addresses, Top 5 Attacked Assets, and the attack details list. For more information, see [Network defense alerts (formerly Attack Analysis)](#d4e8a03724j21).
    

## View archived alert data

When the number of handled alerts exceeds **100**, Security Center automatically archives alert data that is older than **30 days**. Unhandled alerts are not archived. You cannot view archived alerts directly in the console, but you can download them for local analysis.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where your assets are deployed: **Chinese Mainland** or **Outside **Chinese Mainland****.
    
2.  In the navigation pane on the left, choose **Detection and Response** > **Alert**.
    
    **Note**
    
    If you have enabled Agentic SOC, the navigation path changes to **Agentic SOC** > **Alert**.
    
3.  In the upper-right corner of the **Alert** page, click **Cloud Workload Alert Management** > ****Archive data****.
    
4.  In the **Archive data** dialog box, view the archived data.
    
5.  In the **Download Link** column for the archived data, click **Download** to save the data to your computer.
    
    The archived data is in XLSX format. The download time depends on your network bandwidth and the file size, and usually takes 2 to 5 minutes.
    
    After the download is complete, you can open the file to view historical alert information, including Alert ID, Alert Name, Alert Details, Alert Level, Status, Affected Asset, Affected Asset Remarks, Impact Overview, and Alert Time.
    
    **Note**
    
    An alert with the **Expired** status was not handled within 30 days of its generation. Handle security alert events detected by Security Center promptly.
    

## **Export alert data**

Security Center lets you filter and export security alert data based on criteria such as urgency, processing status, time of occurrence, asset group, and alert name.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where your assets are deployed: **Chinese Mainland** or **Outside **Chinese Mainland****.
    
2.  In the navigation pane on the left, choose **Detection and Response** > **Alert**.
    
    **Note**
    
    If you have enabled Agentic SOC, the navigation path changes to **Agentic SOC** > **Alert**.
    
3.  On the **Alert** page, on the **CWPP** tab, filter the alert data that you want to export.
    
    Security Center exports the filtered alert data.
    
4.  In the upper-right corner of the alert list, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8581413471/p930332.png) icon.
    
5.  After the data is exported, in the **Exported** dialog box that appears in the upper-right corner of the page, click **Download** to save the alert data to your computer.
    

## **View and recover quarantined files**

Security Center can quarantine detected malicious files. Quarantined files are added to the File Quarantine panel and are automatically purged after **30 days**. If you determine that a quarantined file is not a security risk, you can recover it during this period.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where your assets are deployed: Chinese Mainland or Outside Chinese Mainland.
    
2.  In the navigation pane on the left, choose **Detection and Response** > **Alert**.
    
    **Note**
    
    If you have enabled Agentic SOC, the navigation path changes to **Agentic SOC** > **Alert**
    
3.  In the upper-right corner of the **Agentic SOC** > **Alert** page, click **Quarantined Files** or **Cloud Workload Alert Management** > **Quarantined Files**.
    
4.  In the **Quarantined Files** panel, perform the following operations:
    
    -   **View quarantined files**: The list shows the host, path, status, and quarantine time for each quarantined file.
        
    -   **Recover a file**: In the **Operation** column for the target file, click **Recover**. The file is removed from quarantine and may reappear in the list of pending alerts.
        

## **Network Defense Alert** **(formerly Attack Analysis)**

### **Background information**

If you enable **Network Threat Prevention** rules in the [Host Rules - Malicious Behavior Defense](/help/en/security-center/user-guide/malicious-behavior-defense) and [Host Rules - Brute-force Attacks Protection](/help/en/security-center/user-guide/anti-brute-force-cracking) policies, Security Center automatically blocks detected attacks and displays the related data on the **Network Defense Alert** page.

**Important**

-   For newly purchased cloud products, you must wait for Security Center to automatically synchronize network attack data. Data synchronization takes about 3 hours. After the synchronization is complete, you can view the attack analysis information.
    
-   Defense alerts are the result of automatic blocking by Security Center. **No action is required.**
    

### **Notes**

This feature provides **basic protection**. For assets that host core services or experience high-risk attack events, consider the following suggestions to build a more fine-grained, in-depth defense system.

-   Use **Web Application Firewall (WAF)** to protect against more complex application-layer attacks.
    
-   Configure **Cloud Firewall** to implement fine-grained network access control and border protection.
    
-   For high-risk attack source IP addresses, you can create policies in Cloud Firewall or security groups to block them for more thorough isolation.
    

### **Attack data details**

**Data category**

**Details**

**Core purpose**

**Number of attacks**

The total count of basic network attacks on all assets under your account within a specified time range.

Quickly understand the overall attack intensity and assess the security risk to your assets.

**Attack Type Distribution**

Displays the number and proportion of different attack types in a chart, such as a pie chart or column chart. Common types include brute-force attacks, web attacks, vulnerability exploits, and DDoS attacks.

Identify the most common attack methods and the main threat vectors. This provides a basis for targeted security hardening. For example, if brute-force attacks are prevalent, prioritize strengthening account password policies.

**Top 5 attack sources**

Aggregates and displays the top 5 source IP addresses with the most attacks. In some scenarios, basic information such as the region and carrier of the IP address is included.

Quickly identify major threat sources. For persistent, high-frequency attacks, you can analyze these IP addresses further (for example, to trace the attack organization) or add them directly to a blocklist.

**Top 5 attacked assets**

Displays the top 5 cloud assets with the most attacks, clearly indicating the asset type (such as ECS instances, SLB instances, and RDS instances) and asset ID.

Identify "hot spot" assets in network attacks. This helps you prioritize high-risk service nodes and focus resources on security hardening for key assets, such as upgrading mitigation policies or patching vulnerabilities.

**Attack details list**

Records complete logs for all network defense events. It also provides information about **Attack-associated Vulnerabilities (CVE)** and the **Attack Payload**.

Provides raw, detailed attack data to support in-depth analysis of security events, compliance audits (to meet industry requirements for log retention), and attack event tracing (for example, to track the full path of a specific attack).

## Number of attacks

In the **Attacks** area, you can view a curve chart showing the total number of attacks on your assets within a specified time range, including peak and trough values. Hover your mouse over the curve chart to display the date, time, and number of attacks.![攻击次数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1036186461/p389840.png)

## Attack Type Distribution

In the **Attack Type Distribution** area, you can view the names of attack types and the total number of occurrences for each type.![攻击类型分布](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2036186461/p389839.png)

## Top 5 attack sources

In the **Top 5 Attack Sources** area, you can view the top five attack source IP addresses and their corresponding number of attacks.![攻击来源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9695005861/p389841.png)

Tab body

## Top 5 attacked assets

In the **Top 5 Attacked Assets** area, you can view the top five public IP addresses of your attacked assets and their corresponding number of attacks.![被攻击资产](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9695005861/p389842.png)

## Attack details list

In the attack details list, you can view detailed information about attacks on your assets, including the attack time, source IP address, attacked asset information, attack type, attack method, and attack status.![攻击详情列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2036186461/p389898.png)

**Note**

The attack details list can display a maximum of 10,000 attack data entries. To view more data, change the Time Range to view all attack data for a specific period.

### **Attack details parameter table**

**Parameter**

**Description**

**Attacked At**

The time when the attack occurred.

**Attack Source**

The source IP address and region from which the attack was initiated.

**Attacked Asset**

The name and the public and private IP addresses of the attacked asset.

**Attack Method**

The HTTP request method used to initiate the attack, which can be POST or GET.

**Port**

The attacked port number. This is displayed only when the attack type is SSH brute-force attack.

**Attack Type**

The type of the attack event, such as SSH brute-force attack or code execution.

**Attack Status**

The current status of the attack event. Security Center defends against common attacks when it detects them. The status of a defended attack event is **Defended**. Abnormal intrusion events are displayed on the **Cloud Workload Protection Platform (CWPP)** tab of the **Security Alert** page.

### **Supported operations**

#### **View attack source details**

Click **Details** in the Actions column to view the detailed analysis of the specified network defense alert.

-   **Attack Source Intelligence**:
    
    Analyzes various properties of the attack source, including the following:
    
    -   **Basic Information**: Discovery Time, Attack Source IP, Last Active Time, Country/Region, Threat Tag.
        
    -   **IP Report Details**: Click **Details** to the right of the attack source IP address to go to the [Threat Intelligence console](https://yundun.console.alibabacloud.com/?spm=a2c4g.11186623.2.4.5d3c7eb9Ohlbzc&p=sasti#/overview) and view the complete profile report and all associated threat data for the IP address.
        
-   **Attack-associated Vulnerabilities (CVE)**: Displays vulnerability information directly related to this alert behavior. If there are associated vulnerabilities, see [View and handle vulnerabilities](/help/en/security-center/user-guide/view-and-handle-vulnerabilities) to handle them promptly and resolve the security risk.
    
-   **Attack Payload**: The most malicious part of the attack traffic, which usually contains malicious instructions or data. For example, in an HTTP request, the attack payload might be the JSON or XML data carried in a POST request, used to trigger a vulnerability or execute malicious behavior.
    

#### **View attacked asset information**

You can view information about the attacked asset in the attack event list.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7458394571/p993731.png)

#### **Export the attack event list**

Click the ![导出](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1344588951/p71550.png) icon in the upper-left corner of the attack event list to export all attack events detected by Security Center and save them to your computer. The exported file is in Excel format.

#### **Disable blocking rules**

-   In the attack event list, an ![Icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3136690561/p424787.png) icon appears in the **Attack Type** column for events of certain attack types, such as SQL Server brute-force attacks and SSH brute-force attacks. When you hover your mouse over the icon, a Close Block Rule tooltip appears. You can close system block rules for the following attack types:
    
    -   SQL Server brute-force attack
        
    -   SSH brute-force attack
        
    -   RDP brute-force attack
        
    -   AntSword WebShell communication
        
    -   China Chopper WebShell communication
        
    -   XISE WebShell communication
        
    -   WebShell upload
        
    -   PHP WebShell upload
        
    -   JSP WebShell upload
        
    -   ASP WebShell upload
        
    -   WebShell upload with special suffix
        
    -   Intelligent defense for WebShell upload
        
    -   Adaptive web attack defense
        
    -   Java generic RCE vulnerability blocking
        
-   If you do not want Security Center to automatically block this type of attack, you can click **Go to the Malicious behavior Defense page.** to open the Malicious Behavior Defense page and disable the corresponding system defense rule.
