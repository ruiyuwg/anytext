Security Center provides security features such as malicious host behavior prevention, anti-ransomware, and web shell connection prevention. You can configure these features to protect your servers. This topic describes the available host protection features and how to configure them.

## Proactive defense

### Feature introduction

The proactive defense feature of Security Center automatically intercepts common viruses, malicious network connections, and web shell connections. It also uses bait to capture ransomware. The following table describes the capabilities of proactive defense.

**Feature**

**Supported editions**

**Description**

**Malicious Host Behavior Prevention**

**Anti-virus**, **Advanced**, **Enterprise**, and **Ultimate**

The **Malicious Host Behavior Prevention** feature automatically intercepts and removes common network viruses. These include mainstream ransomware, DDoS Trojans, mining programs, trojans, malicious programs, backdoors, and worms.

After you purchase the **Anti-virus** or a higher edition of Security Center, the **Malicious Host Behavior Prevention** feature is enabled by default. All your servers are added to the detection scope of this feature.

**Feature differences among Security Center editions**

-   The **Anti-virus** automatically blocks common viruses, such as trojans and mining programs.
    
-   The **Advanced**, **Enterprise**, and **Ultimate** provide more comprehensive defense capabilities. They effectively intercept popular attack scenarios in the ATT&CK framework, block large-scale intrusions on common services and applications, and stop the encryption behavior of popular ransomware. These editions also support custom rules to protect hosts. For more information about custom defense rules, see [Manage host-specific rules](/help/en/security-center/user-guide/use-the-host-specific-rule-management-feature/#section-f3z-2r0-9hg).
    

**Note**

Infection-type viruses are advanced malicious programs. The virus body writes malicious code into normal program files for execution. This causes many normal programs to be infected and detected as hosts. Infection-type viruses can harm system processes. Terminating system processes can cause system stability risks. For this reason, Security Center does not automatically quarantine infection-type viruses. You must handle these viruses manually.

**Anti-ransomware (Bait Capture)**

**Anti-virus**, **Advanced**, **Enterprise**, and **Ultimate**

This feature provides bait to capture new types of ransomware. It uses virus behavior analysis to automatically start the defense against new ransomware.

The bait files that are configured on your servers by Security Center are used only to capture new types of ransomware. The files do not interrupt your services. You can go to the **Detection and Response** > **Alert** page, click the **CWPP** tab, and set Alert Type to **Precision Defense** to view the removed ransomware.

**Webshell Prevention**

**Enterprise** and **Ultimate**

After you enable this feature, Security Center automatically intercepts suspicious connections initiated by known webshells and quarantines related files. You can view the related alerts and quarantined files on the **Detection and Response** > **Alert** page, on the **Cloud Workload Protection Platform (CWPP)** tab. For more information, see [Evaluate and handle security alerts](/help/en/security-center/user-guide/view-and-handle-alert-events#concept-rlc-rts-sfb) and [Evaluate and handle security alerts](/help/en/security-center/user-guide/view-and-handle-alert-events#section-pu1-ksy-qen).

**Note**

After you purchase the **Enterprise** or **Ultimate**, Security Center enables the **Webshell Prevention** feature by default and adds all your servers to its detection scope.

**Malicious Network Behavior Prevention**

**Advanced**, **Enterprise**, and **Ultimate**

After you enable this feature, Security Center intercepts network behavior between your servers and disclosed malicious sources to enhance server security.

**User Experience Optimization in Proactive Defense**

**Enterprise** and **Ultimate**

After you enable this feature, Security Center collects server Kdump data for security analysis if a server unexpectedly shuts down or its defense capabilities are missing. This helps continuously improve the security protection capabilities of Security Center.

**Note**

If all features in the **Proactive Defense** section are disabled, Security Center only sends security alerts when viruses are detected. You must then handle virus-related alerts manually in the console. Enable all features in the **Proactive Defense** section to strengthen your server security. For more information about how to handle security alerts, see [Evaluate and handle security alerts](/help/en/security-center/user-guide/view-and-handle-alert-events#concept-rlc-rts-sfb).

### Enable defense capabilities

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, select **System Settings** > **Feature Settings**. In the upper-left corner of the console, select the region for the assets that you want to protect: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  On the **Settings** > **Host Protection Settings** tab, turn on **Malicious Host Behavior Prevention**, **Anti-ransomware (Bait Capture)**, **Webshell Prevention**, and **Malicious Network Behavior Prevention** in the **Proactive Defense** section.
    
    After you turn on all switches in the **Proactive Defense** section, Security Center protects your servers from multiple threats, including malicious host behaviors, ransomware, abnormal web shell connections, and access from malicious sources.
    
4.  Click **Manage** to the right of a proactive defense type. Select the servers for which you want virus or malicious behavior interception to take effect, and then click **OK**.
    
    After you enable the **Malicious Host Behavior Prevention**, **Anti-ransomware (Bait Capture)**, **Webshell Prevention**, and **Malicious Network Behavior Prevention** services, Security Center automatically intercepts programs and processes related to virus execution and blocks abnormal connections.
    
5.  (Optional) Select the **User Experience Optimization in Proactive Defense** check box.
    
    Selecting **User Experience Optimization in Proactive Defense** helps Security Center obtain security data when server exceptions occur, which improves your security protection. We recommend that you select this option.
    

### What to do next

On the **Detection and Response** > **Alert** page, go to the **CWPP** tab to view the viruses that are automatically intercepted by the proactive defense feature in the list of **Proactive Defense for Containers** alerts. You need to set the search condition to **Handled** and select **Precision Defense** for **Alert Type**.![Precision Defense](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5146422161/p67469.png)

**Note**

After you enable the **Malicious Host Behavior Prevention**, **Anti-ransomware (Bait Capture)**, and **Webshell Prevention** features, some programs may be incorrectly reported as threats or may not be successfully quarantined.

-   If a file is quarantined due to a false positive, you can restore it from the file quarantine box. For more information, see [Evaluate and handle security alerts](/help/en/security-center/user-guide/view-and-handle-alert-events#section-pu1-ksy-qen).
    
-   You can manually isolate events that failed to be isolated on the **Detection and Response** > **Alert** page in the **Cloud Workload Protection Platform (CWPP)** tab. For more information, see [Evaluate and handle security alerts](/help/en/security-center/user-guide/view-and-handle-alert-events#concept-rlc-rts-sfb).
    

## Web shell detection

The web shell detection feature uses a proprietary detection engine to scan web servers and web directories for web shells and trojan programs. It combines periodic static and dynamic detection mechanisms and provides a one-click manual quarantine feature. The Security Center client performs web shell detection only after you enable the feature for the server. The following describes the detection and handling capabilities:

-   Performs static detection by scanning the entire web directory every day at midnight. Dynamic detection is triggered when changes occur in web directory files.
    
-   Supports configuration of the asset scope for web shell detection.
    
-   Supports isolation, recovery, and ignoring of detected webshell files.
    

**Note**

The Free edition supports only some types of WebShell detection. Other paid editions of Security Center support all types of WebShell detection. For more comprehensive WebShell detection, upgrade to the ****Anti-virus****, ****Advanced****, ****Enterprise****, or ****Ultimate**** edition. For more information about how to upgrade, see [Upgrade and downgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center#task-o55-wgb-b2b).

### Configure the web shell detection switch

By default, Security Center enables web shell detection for all servers that have the Security Center client installed. We recommend that you enable web shell detection for all servers that provide public-facing web services. If your server is on a completely isolated internal network, follow these steps to disable web shell detection for that server.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, select **System Settings** > **Feature Settings**. In the upper-left corner of the console, select the region where your asset is located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  Select the **Settings** > **Host Protection Settings** tab, and in the **Webshell Detection and Removal** section, click **Manage**.
    
4.  In the **Configure Servers for Webshell Detection and Removal** panel, clear the check boxes of the servers for which you want to disable web shell detection, and then click **OK**.
    

### Handle web shell detection alerts

After you enable webshell detection for your servers, Security Center displays alerts for security threats such as webshell files on the **Agentless Detection** tab of the **Detection and Response** > **Alert** page. You can go to the **CWPP** tab to view and handle alerts whose type is **Webshell**. If you do not handle webshell alerts, they may pose a serious threat to your assets. We recommend that you handle these alerts at the earliest opportunity.

**Note**

The one-click handling of web shell alerts is not supported in the Free Edition of Security Center. If you use the Anti-virus Edition or a higher edition, you can quarantine the detected web shell files with a single click in the console. For more information, see [Evaluate and handle security alerts](/help/en/security-center/user-guide/view-and-handle-alert-events#concept-rlc-rts-sfb).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9940516571/p840931.png)

## Adaptive threat detection

The adaptive threat detection feature is disabled by default. You must enable it manually. After you enable this feature, if Security Center detects a high-risk threat (a high-risk alert) on your server, it automatically enables strict alert mode on your server client for seven days. Strict alert mode enables all security rules and engines to alert on any suspicious intrusions and potential threats. This allows for more comprehensive detection of hacker activities.

**Note**

Security Center automatically enables strict alert mode for your server for seven days. If you manually set a protection mode for the server during this period, Security Center will not automatically disable strict alert mode after seven days. The server will continue to use the protection mode that you manually set.

### Version restrictions

#### Version limits

-   **Required subscription**: **Enterprise** or **Ultimate**. If you are using a different edition, you must [upgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center).
    
    **Note**
    
    Set the server protection edition to match your purchased edition. For more information, see [Attach a protection edition to a server](/help/en/security-center/user-guide/authorization-number-management#42fe49affaj3r).
    
-   **Pay-as-you-go service:** This billing method is required for **Host and Container Security**. To enable the service, see [Purchase](/help/en/security-center/user-guide/purchase-security-center#5d3a3aef78bqy).
    
    **Note**
    
    The server protection level must be set to **Host Protection** or **Host and Container Protection**. For more information, see [Attach a protection level to a server](/help/en/security-center/user-guide/authorization-number-management#53d46981942l6).
    

### Enable adaptive threat detection

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, select **System Settings** > **Feature Settings**. In the upper-left corner of the console, select the region where the asset that you want to protect is located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  Select the **Settings** > **Host Protection Settings** tab, and turn on the **Proactive Defense for Containers** switch in the **Adaptive Threat Detection Capability** section.
    
    **Note**
    
    If you have not authorized Security Center to access your cloud resources, first complete the authorization as prompted on the page. This operation authorizes Security Center to access your cloud resources. After the authorization is successful, the Resource Access Management service automatically creates a service-linked role for the **Authorization for Security Center Service-linked Role** service. Security Center uses this role to access your cloud resources in other products and provide security protection. For more information, see [Service-linked roles for Security Center](/help/en/security-center/security-and-compliance/service-linked-roles-for-security-center#task-2259909).
    

## **Alert settings**

Security Center provides different alert modes for server alerts to meet your security needs in different scenarios. By default, Security Center enables **Balanced Mode** for all connected servers. In this mode, which is based on comprehensive testing by Alibaba Cloud experts, more suspicious risks are detected while maintaining a low false positive rate.

### **Change the alert mode**

If you need stricter detection for your servers, you can change the server alert mode to **Strict Mode**.

**Important**

In **Strict Mode**, Alibaba Cloud detects more suspicious behaviors and generates more alerts. However, this mode has a higher risk of false positives. Use this mode with caution during major event support periods.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, select **System Settings** > **Feature Settings**. In the upper-left corner of the console, select the region where the asset you want to protect is located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  Select **Settings** > **Host Protection Settings**, and in the **Alert Settings** section, click **Manage** to the right of **Strict Mode**.
    
4.  Select the servers for which you want to enable **Strict Mode**, and then click **OK**.
    

## **References**

-   To create different malicious host behavior defense rules for different servers, you can use the [malicious behavior defense](/help/en/security-center/user-guide/malicious-behavior-defense) feature of Security Center.
    
-   [Evaluate and handle security alerts](/help/en/security-center/user-guide/view-and-handle-alert-events)
