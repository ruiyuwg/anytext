You can configure advanced features for the Security Center agent to improve security and resource efficiency. For example, you can enable **Agent Protection** to prevent malicious uninstallation or configure resource usage limits to control the CPU and memory consumption of operations such as local file detection. This topic describes the features that are available for agent capability configuration and how to configure them.

## **Agent Protection**

### **Function overview**

Agent self-protection is a built-in protection mechanism that ensures the stable operation of the Security Center agent. It actively intercepts unauthorized actions such as uninstallation and process termination. This prevents the agent from being disabled by attackers or abnormal processes, which ensures that Security Center provides continuous and effective server protection.

**Important**

This feature protects only the agent itself and does not directly provide server security protection.

-   **Core value**
    
    -   **Prevent malicious uninstallation:** Blocks attackers from removing the security agent after compromising a server.
        
    -   **Ensure process stability:** Protects core agent processes from being terminated accidentally or maliciously.
        
    -   **Ensure protection continuity:** Avoids security protection interruptions caused by agent failure.
        
-   **Compatibility:** This feature depends on [specific operating systems and kernel versions](#p-91d-ktl-rk0). If the server environment is not compatible, the feature status shows 'Protection failed: Incompatible kernel version' and the feature will not take effect.
    

### Scope

-   Edition limits: This feature is available to both free and paid users of Security Center.
    
-   Operating system and kernel version limits: For more information, see [Appendix: Supported operating systems and kernel versions for agent self-protection](#p-91d-ktl-rk0).
    

### Enable agent self-protection for a server

After you enable the defense mode for agent self-protection, the feature is automatically enabled for all servers that are within the protection scope and have the agent installed.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **System Settings** > **Feature Settings**. In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  Click the **Settings** > **Agent Settings** tab. In the **Agent Protection** section, turn on the **Defense Mode** switch.
    
4.  To the right of **Protection Scope:**, click **Manage**.
    
5.  In the **Agent Protection** panel, select the servers for which you want to enable agent self-protection, and then click **OK**.
    
    **Note**
    
    After you enable **Agent Protection** for a server, the protection mechanism takes effect immediately. If you disable **Agent Protection**, the mechanism is disabled after 5 minutes.
    

### View the agent self-protection status

Follow these steps to check the agent self-protection status for a server.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Assets** > **Host**. In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  In the host asset list, find the target server and click the server name or click **View** in the **Actions** column.
    
4.  On the server details page, click the **Basic Information** > **Details** tab. In the **Defense Status** section, view the **Agent Protection** status.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4948540961/p692786.png)
    

### **Uninstallation instructions**

After you enable self-protection, agent uninstallation is restricted. You can uninstall the agent only using one of the following authorized methods:

1.  **Uninstall from the console:** Uninstall the agent directly from the Security Center console.
    
2.  **Uninstall locally**: First, disable the **agent self-protection** feature for the server in the console. Then, uninstall the agent locally on the server.
    

## **Local File Detection Engine**

### **Function overview**

-   The local file detection engine is a proprietary threat detection engine developed by Alibaba Cloud Security Center for local files. This engine reduces performance overhead from data uploads and cloud-based scanning, which improves detection efficiency.
    
-   After you enable this feature, files are scanned using a dual-engine mode that combines local and cloud-based scanning. The system first uses the local engine to scan files. If no threats are found, the files are then uploaded to the cloud for a secondary scan to ensure comprehensive detection.
    

### Scope

-   **Required subscription**: **Enterprise** or **Ultimate**. If you are using a different edition, you must [upgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center).
    
    **Note**
    
    The protection edition for the server must be set to the edition that you purchased. For more information, see [Attach a protection edition to a server](/help/en/security-center/user-guide/authorization-number-management#42fe49affaj3r).
    
-   **Pay-as-you-go**: This billing method is required for **Host and Container Security**. To enable it, see [Purchase](/help/en/security-center/user-guide/purchase-security-center#5d3a3aef78bqy).
    
    **Note**
    
    The server protection level must be set to **Host Protection** or **Host and Container Protection**. For more information, see [Attach a protection level to a server](/help/en/security-center/user-guide/authorization-number-management#53d46981942l6).
    

### Enable local file detection

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **System Settings** > **Feature Settings**. In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  Click the **Settings** > **Agent Settings** tab. In the **Local File Detection Engine** section, turn on the **File Test** switch.
    
4.  To the right of **Installation Scope**, click **Manage**.
    
5.  In the **Local File Detection Engine** panel, select the servers for which you want to enable local file detection, and then click **OK**.
    

## **In-depth Detection Engine**

The deep detection engine helps you discover advanced security risks, such as rootkits, tunneling, and backdoors.

### **Scope**

-   **Required subscription**: **Enterprise** or **Ultimate**. If you are using a different edition, you must [upgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center).
    
    **Note**
    
    The protection edition for the server must be set to the edition that you purchased. For more information, see [Attach a protection edition to a server](/help/en/security-center/user-guide/authorization-number-management#42fe49affaj3r).
    
-   **Pay-as-you-go**: This billing method is required for **Host and Container Security**. To enable it, see [Purchase](/help/en/security-center/user-guide/purchase-security-center#5d3a3aef78bqy).
    
    **Note**
    
    The server protection level must be set to **Host Protection** or **Host and Container Protection**. For more information, see [Attach a protection level to a server](/help/en/security-center/user-guide/authorization-number-management#53d46981942l6).
    

### Enable deep detection

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **System Settings** > **Feature Settings**. In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  Click the **Settings** > **Agent Settings** tab. In the **In-depth Detection Engine** section, turn on the **Depth Test** switch.
    
4.  To the right of **Installation Scope**, click **Manage**.
    
5.  In the **In-depth Detection Engine** panel, select the servers for which you want to enable deep detection, and then click **OK**.
    

## **Client Resource Management**

When the Security Center agent runs on a server, it consumes a small amount of server resources. Security Center provides three resource management modes that you can use to manage the agent's resource consumption. Select a suitable protection mode for your server to achieve optimal security protection.

### Resource management modes

**Important**

When you select any resource management mode, if the agent exceeds the maximum configured limits for memory or CPU usage, the agent pauses. The agent automatically restarts after resource usage drops to an acceptable level.

**Protection mode**

**Maximum memory or CPU usage**

**Supported editions**

**Scenarios**

**Low Consumption Mode**

-   Memory usage: Up to 200 MB
    
-   CPU usage: Up to 10%
    

All editions

This mode is suitable for business scenarios with low security requirements.

In this mode, the agent automatically downgrades features that consume large amounts of resources. This may cause delays in threat detection. We recommend that you enable Smooth mode.

**Note**

The low-consumption mode is enabled by default for newly added assets in Security Center.

**Smooth Mode**

-   Memory usage: Up to 300 MB
    
-   CPU usage: Up to 30%
    

**Anti-virus**, **Advanced**, **Enterprise**, and **Ultimate**

This mode is suitable for protecting critical business.

In this mode, the agent consumes more resources to collect data and ensure timely risk detection.

**Custom Mode**

-   Memory usage: You can select up to 200 MB, 300 MB, 400 MB, or 500 MB.
    
-   CPU usage:
    
    -   Single-core: You can select up to 5%, 10%, 20%, or 30%.
        
        **Important**
        
        Threshold enforcement rules:
        
        -   Linux: The limit is applied based on single-core CPU usage.
            
        -   Windows: The limit is applied based on overall CPU usage.
            
        
    -   Overall: You can select up to 5%, 10%, 20%, 30%, 40%, 50%, or 60%.
        

**Enterprise** and **Ultimate**

This mode is suitable for ensuring security during major events.

In this mode, you can flexibly control memory and CPU usage.

**Important**

If the agent resource limit threshold is too low, some detection capabilities may fail. Configure this setting with caution.

### Set a protection mode

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **System Settings** > **Feature Settings**. In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  Click the **Feature Settings** > ****Agent Settings**** tab. In the **Client Resource Management** section, click **Manage** to the right of **Smooth Mode** or **Custom Mode**.
    
4.  In the **Smooth Mode** or **Custom Mode** panel, select the servers for which you want to set the resource management mode, and then click **OK**.
    
    You can select only one resource management mode, either **Smooth Mode** or **Custom Mode**, for each server. For example, if a server is in **Smooth Mode** and you set it to **Custom Mode**, its protection mode changes to **Custom Mode**.
    
    **Note**
    
    In **Custom Mode**, more types of alerts are detected and the detection engine is more sensitive. This may increase the false positive rate. We recommend that you monitor and handle alerts promptly.
    
5.  (Optional) If you set a server to Custom mode, you can modify the memory and CPU usage thresholds.
    
    Higher thresholds for memory and CPU usage allow for more precise protection. We recommend that you configure appropriate thresholds.
    

## **Appendix: Supported operating systems and kernel versions for agent self-protection**

**Operating system**

**Supported operating system versions**

**Supported kernel versions**

Windows (64-bit)

-   Windows Server 2008 R2
    
-   Windows Server 2012 R2
    
-   Windows Server 2016
    
-   Windows Server 2019
    
-   Windows Server 2022
    
-   Windows Server 2025
    

All versions

CentOS (64-bit)

-   CentOS 6.3 to 6.10
    
-   CentOS 7.0 to 7.9
    
-   CentOS 8.0 to 8.5
    

**5.X.X series**

-   5.6.5-1.el7.elrepo.x86\_64
    
-   5.5.7-1.el7.elrepo.x86\_64
    
-   5.5.5-1.el7.elrepo.x86\_64
    
-   5.5.1-1.el7.elrepo.x86\_64
    
-   5.4.208-1.el7.elrepo.x86\_64
    
-   5.4.201-1.el7.elrepo.x86\_64
    
-   5.4.195-1.el7.elrepo.x86\_64
    
-   5.4.188-1.el7.elrepo.x86\_64
    
-   5.4.181-1.el7.elrepo.x86\_64
    
-   5.4.173-1.el7.elrepo.x86\_64
    
-   5.4.168-1.el7.elrepo.x86\_64
    
-   5.4.157-1.el7.elrepo.x86\_64
    
-   5.4.155-1.el7.elrepo.x86\_64
    
-   5.4.148-1.el7.elrepo.x86\_64
    
-   5.4.144-1.el7.elrepo.x86\_64
    
-   5.4.143-1.el7.elrepo.x86\_64
    
-   5.4.132-1.el7.elrepo.x86\_64
    
-   5.4.129-1.el7.elrepo.x86\_64
    
-   5.4.109-1.el7.elrepo.x86\_64
    
-   5.4.91-1.el7.elrepo.x86\_64
    
-   5.4.86-1.el7.elrepo.x86\_64
    
-   5.4.42-200.el7.x86\_64
    
-   5.4.8-1.el7.elrepo.x86\_64
    
-   5.3.8-1.el7.elrepo.x86\_64
    
-   5.3.7-1.el7.elrepo.x86\_64
    
-   5.3.0-1.el7.elrepo.x86\_64
    

**4.X.X series**

-   4.20.13-1.el7.elrepo.x86\_64
    

-   4.19.113-300.el7.x86\_64
    
-   4.19.104-300.el7.x86\_64
    
-   4.19.110-300.el7.x86\_64
    
-   4.19.94-300.el7.x86\_64
    
-   4.19.12-1.el7.elrepo.x86\_64
    
-   4.18.10-1.el7.elrepo.x86\_64
    
-   4.18.8-1.el7.elrepo.x86\_64
    
-   4.18.0-408.el8.x86\_64
    
-   4.18.0-394.el8.x86\_64
    
-   4.18.0-383.el8.x86\_64
    
-   4.18.0-373.el8.x86\_64
    
-   4.18.0-372.19.1.el8\_6.x86\_64
    
-   4.18.0-372.9.1.el8.x86\_64
    
-   4.18.0-365.el8.x86\_64
    
-   4.18.0-358.el8.x86\_64
    
-   4.18.0-348.20.1.el8\_5.x86\_64
    
-   4.18.0-348.12.2.el8\_5.x86\_64
    
-   4.18.0-348.7.1.el8\_5.x86\_64
    
-   4.18.0-348.2.1.el8\_5.x86\_64
    
-   4.18.0-348.el8.x86\_64
    
-   4.18.0-305.25.1.el8\_4.x86\_64
    
-   4.18.0-305.19.1.el8\_4.x86\_64
    
-   4.18.0-305.17.1.el8\_4.x86\_64
    
-   4.18.0-305.12.1.el8\_4.x86\_64
    
-   4.18.0-305.10.2.el8\_4.x86\_64
    
-   4.18.0-305.7.1.el8\_4.x86\_64
    
-   4.18.0-305.3.1.el8.x86\_64
    
-   4.18.0-240.22.1.el8\_3.x86\_64
    
-   4.18.0-240.15.1.el8\_3.x86\_64
    
-   4.18.0-240.10.1.el8\_3.x86\_64
    
-   4.18.0-240.1.1.el8\_3.x86\_64
    
-   4.18.0-193.28.1.el8\_2.x86\_64
    
-   4.18.0-193.19.1.el8\_2.x86\_64
    
-   4.18.0-193.14.2.el8\_2.x86\_64
    
-   4.18.0-193.6.3.el8\_2.x86\_64
    
-   4.18.0-193.1.2.el8\_2.x86\_64
    
-   4.18.0-193.el8.x86\_64
    
-   4.18.0-147.8.1.el8\_1.x86\_64
    
-   4.18.0-147.5.1.el8\_1.x86\_64
    
-   4.18.0-147.3.1.el8\_1.x86\_64
    
-   4.18.0-80.11.2.el8\_0.x86\_64
    
-   4.14.1-1.el7.elrepo.x86\_64
    
-   4.13.3-1.el7.elrepo.x86\_64
    
-   4.13.2-1.el7.elrepo.x86\_64
    
-   4.11.8-1.el7.elrepo.x86\_64
    
-   4.9.220-37.el7.x86\_64
    
-   4.9.215-36.el7.x86\_64
    
-   4.4.248-1.el7.elrepo.x86\_64
    
-   4.4.169-1.el7.elrepo.x86\_64
    
-   4.4.196-1.el7.elrepo.x86\_64
    
-   4.4.216-1.el7.elrepo.x86\_64
    
-   4.4.219-1.el7.elrepo.x86\_64
    
-   4.4.223-1.el7.elrepo.x86\_64
    
-   4.4.225-1.el7.elrepo.x86\_64
    
-   4.4.228-2.el7.elrepo.x86\_64
    
-   4.4.231-1.el7.elrepo.x86\_64
    
-   4.4.240-1.el7.elrepo.x86\_64
    
-   4.4.71-1.el7.elrepo.x86\_64
    

**3.10.0 series**

-   3.10.0-1160.90.1.el7.x86\_64
    

-   3.10.0-1160.88.1.el7.x86\_64
    
-   3.10.0-1160.83.1.el7.x86\_64
    
-   3.10.0-1160.81.1.el7.x86\_64
    
-   3.10.0-1160.80.1.el7.x86\_64
    
-   3.10.0-1160.76.1.el7.x86\_64
    
-   3.10.0-1160.71.1.el7.x86\_64
    
-   3.10.0-1160.66.1.el7.x86\_64
    
-   3.10.0-1160.62.1.el7.x86\_64
    
-   3.10.0-1160.59.1.el7.x86\_64
    
-   3.10.0-1160.53.1.el7.x86\_64
    
-   3.10.0-1160.49.1.el7.x86\_64
    
-   3.10.0-1160.45.1.el7.x86\_64
    
-   3.10.0-1160.42.2.el7.x86\_64
    
-   3.10.0-1160.41.1.el7.x86\_64
    
-   3.10.0-1160.36.2.el7.x86\_64
    
-   3.10.0-1160.31.1.el7.x86\_64
    
-   3.10.0-1160.25.1.el7.x86\_64
    
-   3.10.0-1160.24.1.el7.x86\_64
    
-   3.10.0-1160.21.1.el7.x86\_64
    
-   3.10.0-1160.15.2.el7.x86\_64
    
-   3.10.0-1160.11.1.el7.x86\_64
    
-   3.10.0-1160.6.1.el7.x86\_64
    
-   3.10.0-1160.2.2.el7.x86\_64
    
-   3.10.0-1160.2.1.el7.x86\_64
    
-   3.10.0-1160.el7.x86\_64
    
-   3.10.0-1127.19.1.el7.x86\_64
    
-   3.10.0-1127.18.2.el7.x86\_64
    
-   3.10.0-1127.13.1.el7.x86\_64
    
-   3.10.0-1127.10.1.el7.x86\_64
    
-   3.10.0-1127.8.2.el7.x86\_64
    
-   3.10.0-1127.el7.x86\_64
    
-   3.10.0-1062.18.1.el7.x86\_64
    
-   3.10.0-1062.12.1.el7.x86\_64
    
-   3.10.0-1062.9.1.el7.x86\_64
    
-   3.10.0-1062.7.1.el7.x86\_64
    
-   3.10.0-1062.4.3.el7.x86\_64
    
-   3.10.0-1062.4.2.el7.x86\_64
    
-   3.10.0-1062.4.1.el7.x86\_64
    
-   3.10.0-1062.1.2.el7.x86\_64
    
-   3.10.0-1062.1.1.el7.x86\_64
    
-   3.10.0-1062.el7.x86\_64
    
-   3.10.0-957.27.2.el7.x86\_64
    
-   3.10.0-957.21.3.el7.x86\_64
    
-   3.10.0-957.21.2.el7.x86\_64
    
-   3.10.0-957.12.2.el7.x86\_64
    
-   3.10.0-957.12.1.el7.x86\_64
    
-   3.10.0-957.10.1.el7.x86\_64
    
-   3.10.0-957.5.1.el7.x86\_64
    
-   3.10.0-957.1.3.el7.x86\_64
    
-   3.10.0-957.el7.x86\_64
    
-   3.10.0-862.14.4.el7.x86\_64
    
-   3.10.0-862.11.6.el7.x86\_64
    
-   3.10.0-862.9.1.el7.x86\_64
    
-   3.10.0-862.6.3.el7.x86\_64
    
-   3.10.0-862.3.3.el7.x86\_64
    
-   3.10.0-862.3.2.el7.x86\_64
    
-   3.10.0-862.2.3.el7.x86\_64
    
-   3.10.0-862.el7.x86\_64
    
-   3.10.0-693.21.1.el7.x86\_64
    
-   3.10.0-693.17.1.el7.x86\_64
    
-   3.10.0-693.11.6.el7.x86\_64
    
-   3.10.0-693.11.1.el7.x86\_64
    
-   3.10.0-693.5.2.el7.x86\_64
    
-   3.10.0-693.2.2.el7.x86\_64
    
-   3.10.0-693.el7.x86\_64
    
-   3.10.0-514.26.2.el7.x86\_64
    
-   3.10.0-514.26.1.el7.x86\_64
    
-   3.10.0-514.21.2.el7.x86\_64
    
-   3.10.0-514.21.1.el7.x86\_64
    
-   3.10.0-514.16.1.el7.x86\_64
    
-   3.10.0-514.10.2.el7.x86\_64
    
-   3.10.0-514.6.2.el7.x86\_64
    
-   3.10.0-514.6.1.el7.x86\_64
    
-   3.10.0-514.2.2.el7.x86\_64
    
-   3.10.0-514.el7.x86\_64
    
-   3.10.0-327.36.3.el7.x86\_64
    
-   3.10.0-327.28.3.el7.x86\_64
    
-   3.10.0-327.28.2.el7.x86\_64
    
-   3.10.0-327.22.2.el7.x86\_64
    
-   3.10.0-327.18.2.el7.x86\_64
    
-   3.10.0-327.13.1.el7.x86\_64
    
-   3.10.0-327.10.1.el7.x86\_64
    
-   3.10.0-327.el7.x86\_64
    
-   3.10.0-229.el7.x86\_64
    

**2.6.32 series**

-   2.6.32-754.35.1.el6.x86\_64
    
-   2.6.32-754.33.1.el6.x86\_64
    
-   2.6.32-754.31.1.el6.x86\_64
    
-   2.6.32-754.30.2.el6.x86\_64
    
-   2.6.32-754.29.2.el6.x86\_64
    
-   2.6.32-754.29.1.el6.x86\_64
    
-   2.6.32-754.28.1.el6.x86\_64
    
-   2.6.32-754.27.1.el6.x86\_64
    
-   2.6.32-754.25.1.el6.x86\_64
    
-   2.6.32-754.24.3.el6.x86\_64
    
-   2.6.32-754.23.1.el6.x86\_64
    
-   2.6.32-754.22.1.el6.x86\_64
    
-   2.6.32-754.18.2.el6.x86\_64
    
-   2.6.32-754.17.1.el6.x86\_64
    
-   2.6.32-754.15.3.el6.x86\_64
    
-   2.6.32-754.14.2.el6.x86\_64
    
-   2.6.32-754.12.1.el6.x86\_64
    
-   2.6.32-754.11.1.el6.x86\_64
    
-   2.6.32-754.10.1.el6.x86\_64
    
-   2.6.32-754.9.1.el6.x86\_64
    
-   2.6.32-754.6.3.el6.x86\_64
    
-   2.6.32-754.3.5.el6.x86\_64
    
-   2.6.32-754.2.1.el6.x86\_64
    
-   2.6.32-754.el6.x86\_64
    
-   2.6.32-696.30.1.el6.x86\_64
    
-   2.6.32-696.28.1.el6.x86\_64
    
-   2.6.32-696.23.1.el6.x86\_64
    
-   2.6.32-696.20.1.el6.x86\_64
    
-   2.6.32-696.18.7.el6.x86\_64
    
-   2.6.32-696.16.1.el6.x86\_64
    
-   2.6.32-696.13.2.el6.x86\_64
    
-   2.6.32-696.10.2.el6.x86\_64
    
-   2.6.32-696.10.1.el6.x86\_64
    
-   2.6.32-696.6.3.el6.x86\_64
    
-   2.6.32-696.3.2.el6.x86\_64
    
-   2.6.32-696.3.1.el6.x86\_64
    
-   2.6.32-696.1.1.el6.x86\_64
    
-   2.6.32-696.el6.x86\_64
    
-   2.6.32-642.15.1.el6.x86\_64
    
-   2.6.32-642.13.1.el6.x86\_64
    
-   2.6.32-642.11.1.el6.x86\_64
    
-   2.6.32-642.6.2.el6.centos.plus.x86\_64
    
-   2.6.32-642.6.2.el6.x86\_64
    
-   2.6.32-642.6.1.el6.x86\_64
    
-   2.6.32-642.4.2.el6.x86\_64
    
-   2.6.32-642.3.1.el6.x86\_64
    
-   2.6.32-642.1.1.el6.x86\_64
    
-   2.6.32-642.el6.x86\_64
    
-   2.6.32-573.22.1.el6.x86\_64
    
-   2.6.32-573.18.1.el6.x86\_64
    
-   2.6.32-573.12.1.el6.x86\_64
    
-   2.6.32-573.26.1.el6.x86\_64
    
-   2.6.32-573.3.1.el6.x86\_64
    
-   2.6.32-573.7.1.el6.x86\_64
    
-   2.6.32-573.8.1.el6.x86\_64
    
-   2.6.32-573.el6.x86\_64
    
-   2.6.32-504.30.3.el6.x86\_64
    
-   2.6.32-504.16.2.el6.x86\_64
    
-   2.6.32-504.12.2.el6.x86\_64
    
-   2.6.32-504.8.1.el6.x86\_64
    
-   2.6.32-504.el6.x86\_64
    
-   2.6.32-431.29.2.el6.x86\_64
    
-   2.6.32-431.23.3.el6.x86\_64
    
-   2.6.32-431.20.3.el6.x86\_64
    
-   2.6.32-431.17.1.el6.x86\_64
    
-   2.6.32-431.el6.x86\_64
    
-   2.6.32-358.6.2.el6.x86\_64
    
-   2.6.32-358.el6.x86\_64
    
-   2.6.32-279.el6.x86\_64
    
-   2.6.32-220.el6.x86\_64
    

Ubuntu (64-bit)

-   Ubuntu 14.04
    
-   Ubuntu 16.04
    
-   Ubuntu 18.04
    
-   Ubuntu 20.04
    

**5.X.X series**

-   5.4.0-139-generic
    
-   5.4.0-137-generic
    
-   5.4.0-136-generic
    
-   5.4.0-135-generic
    
-   5.4.0-132-generic
    
-   5.4.0-131-generic
    
-   5.4.0-126-generic
    
-   5.4.0-125-generic
    
-   5.4.0-124-generic
    
-   5.4.0-123-generic
    
-   5.4.0-122-generic
    
-   5.4.0-121-generic
    
-   5.4.0-120-generic
    
-   5.4.0-117-generic
    
-   5.4.0-113-generic
    
-   5.4.0-110-generic
    
-   5.4.0-109-generic
    
-   5.4.0-108-generic
    
-   5.4.0-107-generic
    
-   5.4.0-106-generic
    
-   5.4.0-105-generic
    
-   5.4.0-104-generic
    
-   5.4.0-102-generic
    
-   5.4.0-100-generic
    
-   5.4.0-99-generic
    
-   5.4.0-97-generic
    
-   5.4.0-96-generic
    
-   5.4.0-94-generic
    
-   5.4.0-92-generic
    
-   5.4.0-91-generic
    
-   5.4.0-90-generic
    
-   5.4.0-89-generic
    
-   5.4.0-88-generic
    
-   5.4.0-86-generic
    
-   5.4.0-84-generic
    
-   5.4.0-83-generic
    
-   5.4.0-81-generic
    
-   5.4.0-80-generic
    
-   5.4.0-77-generic
    
-   5.4.0-75-generic
    
-   5.4.0-74-generic
    
-   5.4.0-73-generic
    
-   5.4.0-72-generic
    
-   5.4.0-70-generic
    
-   5.4.0-67-generic
    
-   5.4.0-66-generic
    
-   5.4.0-65-generic
    
-   5.4.0-62-generic
    
-   5.4.0-60-generic
    
-   5.4.0-59-generic
    
-   5.4.0-58-generic
    
-   5.4.0-54-generic
    
-   5.4.0-52-generic
    
-   5.4.0-48-generic
    
-   5.4.0-47-generic
    
-   5.4.0-45-generic
    
-   5.4.0-42-generic
    
-   5.4.0-31-generic
    
-   5.3.0-40-generic
    

**4.X.X series**

-   4.18.0-21-generic
    
-   4.18.0-15-generic
    
-   4.15.0-202-generic
    
-   4.15.0-200-generic
    
-   4.15.0-197-generic
    
-   4.15.0-196-generic
    
-   4.15.0-192-generic
    
-   4.15.0-191-generic
    
-   4.15.0-190-generic
    
-   4.15.0-189-generic
    
-   4.15.0-188-generic
    
-   4.15.0-187-generic
    
-   4.15.0-184-generic
    
-   4.15.0-181-generic
    
-   4.15.0-180-generic
    
-   4.15.0-177-generic
    
-   4.15.0-176-generic
    
-   4.15.0-175-generic
    
-   4.15.0-173-generic
    
-   4.15.0-171-generic
    
-   4.15.0-170-generic
    
-   4.15.0-169-generic
    
-   4.15.0-167-generic
    
-   4.15.0-166-generic
    
-   4.15.0-161-generic
    
-   4.15.0-163-generic
    
-   4.15.0-162-generic
    
-   4.15.0-159-generic
    
-   4.15.0-158-generic
    
-   4.15.0-156-generic
    
-   4.15.0-154-generic
    
-   4.15.0-153-generic
    
-   4.15.0-151-generic
    
-   4.15.0-147-generic
    
-   4.15.0-145-generic
    
-   4.15.0-144-generic
    
-   4.15.0-143-generic
    
-   4.15.0-141-generic
    
-   4.15.0-142-generic
    
-   4.15.0-140-generic
    
-   4.15.0-139-generic
    
-   4.15.0-137-generic
    
-   4.15.0-136-generic
    
-   4.15.0-135-generic
    
-   4.15.0-134-generic
    
-   4.15.0-132-generic
    
-   4.15.0-130-generic
    
-   4.15.0-129-generic
    
-   4.15.0-128-generic
    
-   4.15.0-124-generic
    
-   4.15.0-122-generic
    
-   4.15.0-121-generic
    
-   4.15.0-117-generic
    
-   4.15.0-118-generic
    
-   4.15.0-112-generic
    
-   4.15.0-111-generic
    
-   4.15.0-109-generic
    
-   4.15.0-108-generic
    
-   4.15.0-106-generic
    
-   4.15.0-101-generic
    
-   4.15.0-99-generic
    
-   4.15.0-96-generic
    
-   4.15.0-91-generic
    
-   4.15.0-88-generic
    
-   4.15.0-76-generic
    
-   4.15.0-74-generic
    
-   4.15.0-72-generic
    
-   4.15.0-70-generic
    
-   4.15.0-66-generic
    
-   4.15.0-65-generic
    
-   4.15.0-64-generic
    
-   4.15.0-58-generic
    
-   4.15.0-54-generic
    
-   4.15.0-55-generic
    
-   4.15.0-52-generic
    
-   4.15.0-48-generic
    
-   4.15.0-46-generic
    
-   4.15.0-45-generic
    
-   4.15.0-43-generic
    
-   4.15.0-42-generic
    
-   4.15.0-23-generic
    
-   4.15.0-13-generic
    
-   4.11.0-14-generic
    
-   4.4.0-210-generic
    
-   4.4.0-206-generic
    
-   4.4.0-203-generic
    
-   4.4.0-201-generic
    
-   4.4.0-198-generic
    
-   4.4.0-197-generic
    
-   4.4.0-194-generic
    
-   4.4.0-193-generic
    
-   4.4.0-190-generic
    
-   4.4.0-189-generic
    
-   4.4.0-187-generic
    
-   4.4.0-186-generic
    
-   4.4.0-185-generic
    
-   4.4.0-184-generic
    
-   4.4.0-179-generic
    
-   4.4.0-178-generic
    
-   4.4.0-177-generic
    
-   4.4.0-176-generic
    
-   4.4.0-174-generic
    
-   4.4.0-173-generic
    
-   4.4.0-171-generic
    
-   4.4.0-170-generic
    
-   4.4.0-169-generic
    
-   4.4.0-165-generic
    
-   4.4.0-164-generic
    
-   4.4.0-161-generic
    
-   4.4.0-159-generic
    
-   4.4.0-157-generic
    
-   4.4.0-154-generic
    
-   4.4.0-151-generic
    
-   4.4.0-150-generic
    
-   4.4.0-148-generic
    
-   4.4.0-146-generic
    
-   4.4.0-145-generic
    
-   4.4.0-143-generic
    
-   4.4.0-142-generic
    
-   4.4.0-141-generic
    
-   4.4.0-140-generic
    
-   4.4.0-139-generic
    
-   4.4.0-138-generic
    
-   4.4.0-135-generic
    
-   4.4.0-131-generic
    
-   4.4.0-130-generic
    
-   4.4.0-128-generic
    
-   4.4.0-127-generic
    
-   4.4.0-124-generic
    
-   4.4.0-119-generic
    
-   4.4.0-117-generic
    
-   4.4.0-116-generic
    
-   4.4.0-105-generic
    
-   4.4.0-104-generic
    
-   4.4.0-101-generic
    
-   4.4.0-97-generic
    
-   4.4.0-96-generic
    
-   4.4.0-93-generic
    
-   4.4.0-87-generic
    
-   4.4.0-85-generic
    
-   4.4.0-81-generic
    
-   4.4.0-79-generic
    
-   4.4.0-63-generic
    
-   4.4.0-62-generic
    
-   4.4.0-57-generic
    
-   4.4.0-53-generic
    

**3.X.X series**

-   3.19.0-80-generic
    

Alibaba Cloud Linux (Alinux) (64-bit)

Alinux 2.1903

**5.X.X series**

-   5.10.134-14.1.al8.x86\_64
    
-   5.10.134-13.1.al8.x86\_64
    
-   5.10.134-13.al8.x86\_64
    
-   5.10.134-12.2.al8.x86\_64
    
-   5.10.134-12.al8.x86\_64
    
-   5.10.112-11.2.al8.x86\_64
    
-   5.10.112-11.1.al8.x86\_64
    
-   5.10.112-11.al8.x86\_64
    
-   5.10.84-10.4.al8.x86\_64
    
-   5.10.84-10.3.al8.x86\_64
    
-   5.10.84-10.2.al8.x86\_64
    
-   5.10.60-9.al8.x86\_64
    
-   5.10.23-6.al8.x86\_64
    
-   5.10.23-6.1.al8.x86\_64
    
-   5.10.23-5.al8.x86\_64
    

**4.X.X series**

-   4.19.91-27.al7.x86\_64
    
-   4.19.91-26.6.al7.x86\_64
    
-   4.19.91-26.5.al7.x86\_64
    
-   4.19.91-26.4.al7.x86\_64
    
-   4.19.91-26.2.al7.x86\_64
    
-   4.19.91-26.1.al7.x86\_64
    
-   4.19.91-26.al7.x86\_64
    
-   4.19.91-25.8.al7.x86\_64
    
-   4.19.91-25.7.al7.x86\_64
    
-   4.19.91-25.6.al7.x86\_64
    
-   4.19.91-25.3.al7.x86\_64
    
-   4.19.91-25.1.al7.x86\_64
    
-   4.19.91-25.al7.x86\_64
    
-   4.19.91-24.1.al7.x86\_64
    
-   4.19.91-24.al7.x86\_64
    
-   4.19.91-23.1.al7.x86\_64
    
-   4.19.91-23.al7.x86\_64
    
-   4.19.91-22.2.al7.x86\_64
    
-   4.19.91-22.1.al7.x86\_64
    
-   4.19.91-22.fc.1.al7.x86\_64
    
-   4.19.91-22.al7.x86\_64
    
-   4.19.91-21.2.al7.x86\_64
    
-   4.19.91-21.al7.x86\_64
    
-   4.19.91-19.2.al7.x86\_64
    
-   4.19.91-19.1.al7.x86\_64
    
-   4.19.91-18.al7.x86\_64
    
-   4.19.81-17.2.al7.x86\_64
    
-   4.19.81-17.1.al7.x86\_64
    
-   4.19.81-17.al7.x86\_64
    
-   4.19.57-15.1.al7.x86\_64
    
-   4.19.43-13.2.al7.x86\_64
    
-   4.19.36-12.al7.x86\_64
    
-   4.19.34-11.al7.x86\_64
    
-   4.19.24-9.al7.x86\_64
    
-   4.19.24-7.14.al7.x86\_64
    
-   4.4.95-3.al7.x86\_64
    
-   4.4.95-2.al7.x86\_64
    
-   4.4.95-1.al7.x86\_64
    
-   4.4.24-2.al7.x86\_64
    
-   4.19.91-009.ali4000.alios7.x86\_64
    

**3.10.0 series**

-   3.10.0-1160.al7.1.x86\_64
    
-   3.10.0-1127.19.1.al7.1.x86\_64
    
-   3.10.0-1127.al7.1.x86\_64
    
-   3.10.0-1062.12.1.al7.1.x86\_64
    
-   3.10.0-1062.4.1.al7.1.x86\_64
    
-   3.10.0-514.2.3.al7.x86\_64
    

Anolis (64-bit)

All versions

**4.X.X series**

-   4.19.91-27.an7.x86\_64
    
-   4.19.91-26.6.an8.x86\_64
    
-   4.19.91-26.6.an7.x86\_64
    
-   4.19.91-26.5.an8.x86\_64
    
-   4.19.91-26.5.an7.x86\_64
    
-   4.19.91-26.4.an7.x86\_64
    
-   4.19.91-26.1.an8.x86\_64
    
-   4.19.91-26.an8.x86\_64
    
-   4.19.91-26.an7.x86\_64
    
-   4.19.91-25.8.an8.x86\_64
    
-   4.19.91-25.7.an8.x86\_64
    
-   4.19.91-25.2.an7.x86\_64
    
-   4.18.0-372.32.1.an8\_6.x86\_64
    
-   4.18.0-372.26.1.an8\_6.x86\_64
    
-   4.18.0-372.19.1.an8\_6.x86\_64
    
-   4.18.0-372.16.1.an8\_6.x86\_64
    
-   4.18.0-372.9.1.an8.x86\_64
    
-   4.18.0-348.23.1.an8\_5.x86\_64
    
-   4.18.0-348.20.1.an8\_5.x86\_64
    
-   4.18.0-348.12.2.an8.x86\_64
    
-   4.18.0-348.2.1.an8\_4.x86\_64
    
-   4.18.0-305.an8.x86\_64
    

**3.10.0 series**

-   3.10.0-1160.81.1.0.1.an7.x86\_64
    
-   3.10.0-1160.76.1.0.1.an7.x86\_64
    
-   3.10.0-1160.71.1.0.1.an7.x86\_64
    
-   3.10.0-1160.66.1.0.1.an7.x86\_64
    
-   3.10.0-1160.62.1.0.1.an7.x86\_64
    
-   3.10.0-1062.an7.x86\_64
    
-   3.10.0-1160.an7.x86\_64
    

RHEL

RHEL 6, 7, and 8

-   3.10.0-1160.42.2.el7.x86\_64
    
-   3.10.0-1160.76.1.el7.x86\_64
    
-   2.6.32-754.el6.x86\_64
