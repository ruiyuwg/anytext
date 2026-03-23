If a server no longer requires protection from Security Center due to business adjustments, resource releases, or troubleshooting, you can uninstall the Security Center agent. You can uninstall the agent from the console or using the command line.

## Uninstallation notes

-   **Agent uninstallation impacts**
    
    Uninstalling the agent is an irreversible operation that has the following consequences:
    
    -   **Loss of security protection**: The server loses all security features provided by Security Center. These features include vulnerability detection, baseline checks, web tamper proofing, anti-ransomware, virus scanning, intrusion prevention, and container security protection.
        
    -   **Interruption of data collection**: Security log collection on the server stops, and related log delivery tasks fail.
        
    -   **Loss of historical data**: The historical alerts, quarantined files, and related configurations of the server in Security Center are permanently disassociated. This data cannot be recovered even if you reinstall the agent.
        
-   **Asset record handling**
    
    After the agent is uninstalled, the asset record of the server is retained in the console. For offline servers that are not hosted on Alibaba Cloud, you can unbind a server to delete its record and release the corresponding quota. For more information, see [Change the protection status of a server](/help/en/security-center/user-guide/manage-servers#section-rge-30e-dur).
    

## **Select a solution**

**Item**

**Console uninstallation**

**Command-line uninstallation**

**Use cases**

The agent is online. This method is suitable for quick, one-time manual uninstallation.

The agent is offline, or you need to perform batch or automated uninstallation using scripts.

**Prerequisites**

The agent on the server must be online to receive and execute the uninstallation command.

-   You must have administrator (root or Administrator) permissions on the server.
    
-   First, in the console, disable **Malicious Host Behavior Prevention** and **Agent Protection** for the server.
    

**Platform**

All operations are performed in the Security Center console.

Requires operations in the Security Center console and on the target server.

**Features**

This method is simple and fast. You do not need to log on to the server.

This method is highly flexible and supports offline and automated scenarios.

## **Execute uninstallation**

### **Uninstall the agent in the console**

Sending a command from the console is the most convenient way to uninstall the agent. This method requires the agent to be **Online** to receive and execute the uninstallation command.

1.  **Log on to the Security Center console.**
    
    Access the [Security Center console - System Settings - Feature Settings](https://yundun.console.alibabacloud.com/?p=sas#/setting/overview/ap-southeast-1). In the upper-left corner of the page, select the region where the assets to be protected are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
2.  On the **Agent** tab, click the **Uninstall** tab.
    
3.  In the server list, find the server where you want to uninstall the agent, and click **Uninstall** in the **Actions** column.
    
4.  In the prompt dialog box, click **OK**.
    
    **Important**
    
    The system sends an uninstallation command to the agent. After the command is executed, the agent status changes to **Offline**. This process typically takes a few minutes but can take up to 3 hours.
    

### **Uninstall the agent using a command**

If the agent is offline because the server cannot access the public network, or if you want to use an automated script for uninstallation, you must log on to the server and run the uninstallation command.

1.  **Disable protection and self-protection**: To prevent the agent's self-protection mechanism from blocking the uninstallation, you must disable the **Malicious Host Behavior Prevention** and **Agent Protection** features for the server in the Security Center console before you run the uninstallation command on it. The steps are as follows:
    
    1.  Access the [Security Center console - Asset Center - Host Assets](https://yundun.console.alibabacloud.com/?p=sas#/assetHost/ap-southeast-1). In the upper-left corner of the page, select the region where the assets to be protected are located: **Chinese Mainland** or **Outside Chinese Mainland**.
        
    2.  On the **Server** tab, click the name of the target server to view its details page.
        
    3.  On the **Basic Information** tab of the details page, in the **Defense Status** section, turn off **Agent Protection** and **Malicious Host Behavior Prevention**.
        
2.  **Run the uninstallation command**
    
    ## Linux
    
    1.  Log in to the Linux server as the `root` user.
        
    2.  Run the command that corresponds to your server type.
        
        **Note**
        
        The `uninstall.sh` script automatically stops the aegis agent service, removes related files from the default `/usr/local/aegis` directory, and deletes system startup items.
        
        -   Alibaba Cloud ECS instances
            
            ```
            wget "http://update2.aegis.aliyun.com/download/uninstall.sh" && chmod +x uninstall.sh && ./uninstall.sh
            ```
            
        -   Servers not on Alibaba Cloud (including servers in data centers or from other cloud providers)
            
            ```
            wget "http://update.aegis.aliyun.com/download/uninstall.sh" && chmod +x uninstall.sh && ./uninstall.sh
            ```
            
    
    ## Windows
    
    1.  Download the `uninstall.bat` script using a browser.
        
        Download URL: [https://update.aegis.aliyun.com/download/uninstall.bat](https://update.aegis.aliyun.com/download/uninstall.bat).
        
    2.  Copy the downloaded `uninstall.bat` to the target Windows server.
        
    3.  On the server, right-click the `uninstall.bat` file and select **Run as administrator**.
        
        **Note**
        
        The script runs automatically and the window closes after the uninstallation is complete.
        
    

## Verify the uninstallation

After the uninstallation is complete, log on to the server to verify that the agent is completely removed.

-   **Linux**
    
    Verify that the Agent process exists. No output should be returned.
    
    ```
    # Check for core processes (AliYunDun, AliYunDunMonitor, AliYunDunUpdate)
    ps -ef | grep -E 'AliYunDun|YunDunMonitor|YunDunUpdate'
    ```
    
-   **Windows**
    
    Open the Services Manager by running `services.msc`. Confirm that the `AliYunDun` and `AliYunDunUpdate` services are no longer in the service list.
    

## **Troubleshooting**

1.  **Insufficient permissions**: Ensure that you run the uninstallation script with `root` (Linux) or administrator (Windows) permissions.
    
2.  **Self-protection not disabled**: Check whether the **Malicious Host Behavior Prevention** and **Agent Protection** switches for the server are turned off in the **Security Center console**.
    
3.  **Network issues**: If downloading the script using `wget` fails, check the network connection or DNS settings of the server. Alternatively, you can download the script to another machine, and then upload it to the target server for execution.
    

## Reinstall the agent

To reinstall the Security Center agent after uninstallation, see [Install the agent](/help/en/security-center/user-guide/install-the-security-center-agent#section-qxq-hkv-ghb).

**Important**

-   To prevent frequent installation and uninstallation of the agent from affecting the stability of backend services, a 24-hour cool-down period is enforced after uninstallation. If you run the installation command during this period, the cloud policy identifies the newly installed agent and automatically uninstalls it.
    
-   To reinstall the agent within the 24-hour cool-down period, you must run the installation command on the server at least three times. You can ignore any errors that may occur during the first two attempts.
    

## FAQ

-   **Does uninstalling the agent stop Security Center billing?**
    
    No, it does not. Uninstalling the agent only removes the agent program from the server. This stops the agent from running and collecting data. This operation does not affect the billing for Security Center.
    
-   **After uninstalling the agent, why is the asset record still in the asset list in the console?**
    
    The uninstallation operation only removes the agent program from the server. The server's asset record is retained for future auditing and traceability.
    
    -   For **Alibaba Cloud ECS instances**, the asset record is tied to the lifecycle of the ECS instance. The asset record is retained as long as the ECS instance exists.
        
    -   For **servers that are not on Alibaba Cloud**, their status changes to **Offline** after uninstallation. If you confirm that this asset record is no longer needed, you can manually **unbind** the asset. After you unbind the asset, its record is removed from the list and the quota is released. For more information, see [Change the protection status of a server](/help/en/security-center/user-guide/manage-servers#section-rge-30e-dur).
        
-   **Do I need to restart the server after uninstalling the agent?**
    
    No, you do not. The uninstallation script automatically stops the related services and removes the related files. The changes take effect immediately after the operation is complete. A server restart is not required.
