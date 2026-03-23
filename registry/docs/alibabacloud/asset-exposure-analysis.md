The asset exposure analysis feature scans and analyzes Alibaba Cloud resources, including ECS instances, gateway assets, system components, ports, and AI application components. It identifies security risks and vulnerabilities exposed on the Internet, helping you detect and resolve issues promptly to enhance the security of your cloud resources. This topic explains how to use the asset exposure analysis feature in Security Center.

## **Limits on editions**

-   **Subscription:** You must [purchase a subscription instance](/help/en/security-center/user-guide/purchase-security-center#2c9cad6e39bbz) and select the **Edition** as **Ultimate** or **Enterprise**.
    
-   **Pay-as-you-go:** You must [purchase a feature (pay-as-you-go)](/help/en/security-center/user-guide/purchase-security-center#5d3a3aef78bqy) and set **Host and Container Security** as **Yes.** [Bind the Ultimate or Enterprise edition quota](/help/en/security-center/user-guide/authorization-number-management#53d46981942l6) to at least one server.
    

**Note**

This feature is available only for servers [bound to the Ultimate or Enterprise edition](/help/en/security-center/user-guide/authorization-number-management).

## Supported asset types

The asset exposure analysis feature supports Alibaba Cloud ECS instances, Tair (Redis OSS-compatible), ApsaraDB RDS, and ApsaraDB for MongoDB. It does not support assets not deployed on Alibaba Cloud.

## Statistics

The asset exposure analysis results are automatically refreshed daily. The **Asset Exposure Analysis** shows statistics for assets exposed on the Internet along with exposure details. The following table summarizes the exposure statistics.

**Item**

**Description**

**Weak Password**

The total number of weak passwords detected on ECS instances and database systems exposed on the Internet. Click the corresponding number to view the list of assets with weak passwords.

**Exploitable Vulnerabilities**

The total number of vulnerabilities that can be exploited by attackers, along with the counts of high-risk, medium-risk, and low-risk vulnerabilities. Click the total number to access the Vulnerabilities page. Vulnerabilities are color-coded by severity:

-   High-risk (red): Major threats to your assets. Fix these as soon as possible.
    
-   Medium-risk (orange): Can cause damage to your assets. Address these promptly.
    
-   Low-risk (gray): Less harmful. You can fix these at your convenience.
    

**Exposed Assets/Public IP Addresses**

The total numbers of ECS instances, Tair (Redis OSS-compatible), ApsaraDB RDS, ApsaraDB for MongoDB, and public IP addresses that are exposed on the Internet.

**Gateways**

The total number of gateway assets that are exposed on the Internet. The gateway assets include NAT gateways and Server Load Balancer (SLB) instances. You can click the number below Gateways to go to the **Gateways** panel. In the panel, you can view the gateway assets that are exposed on the Internet. You can also click the name of an exposed gateway asset to go to the details page of the asset.

**Exposed Port**

The total number of ports that are exposed on the Internet. You can click the number below Exposed Port to go to the **Exposed Port** panel. In the panel, you can view the ports that are exposed on the Internet. You can also click the number of an exposed port to view the assets that use the port.

**Exposed Component**

The total number of system components that run on your ECS instances and are exposed on the Internet. The components include OpenSSL and OpenSSH. You can click the number below Exposed Component to go to the **Exposed Component** panel. In the panel, you can view the components that are exposed on the Internet. You can also click the name of an **Exposed Component** to view the assets that use the component.

**AI Application Component**

The total number of AI application components exposed on the Internet. Click the corresponding number to open the **AI Application Component** panel and view the list of exposed components. In the panel, click the name of an AI component to see the list of assets associated with that component.

## **Scan asset exposures**

### **Prerequisites**

The [Security Center agent is installed](/help/en/security-center/user-guide/install-the-security-center-agent) and online on your ECS instance. This means on the **Host** page, the **Agent** column for this instance should display the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8637574961/p704998.png) icon.

### **Automatic daily scanning**

Security Center automatically scans exposed assets daily by default, without manual configuration. You can view detailed information about the automatic scan on the Task Management page.

### Manual one-click scanning

To view the latest asset exposure information immediately, you can perform a manual one-click scan:

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where your assets are located: **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Risk Governance** > **Asset Exposure Analysis**.
    
3.  On the **Asset Exposure Analysis** page, click **Quick Scan** under **Asset Exposure Scan**.
    

### **View scan tasks**

The **Task Management** records automatic and manual scan tasks initiated within the last seven days by default.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where your assets are located: **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Risk Governance** > **Asset Exposure Analysis**.
    
3.  On the **Asset Exposure Analysis** page, click **Task Management** in the upper-right corner.
    
4.  On the **Task Management** page, you can view the task ID, task type, task time, status, and progress. Filter by **Task Type**, **Task Status** (Not Started, Running, Waiting for Data Collection, Data Collection in Progress, Complete, Timeout, Stopped, or Failed), or **Task Started At**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3549163471/p844182.png)
    
5.  Click **Details** in the Actions column of a task to view exposure details, including the number of exposed instances, successfully scanned instances, failed scans, and the list of asset instances. You can filter results based on status and asset instance ID.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3549163471/p844184.png)
    

## View asset exposure details

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where your assets are located: **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Risk Governance** > **Asset Exposure Analysis**.
    
3.  On the **Asset Exposure Analysis** page, view exposure details.
    
    -   **View overview data**
        
        In the upper part of the **Asset Exposure Analysis** page, view the overall data of asset exposures. The data includes **Weak Password** and **Exploitable Vulnerabilities**. You can click the number in the lower part of each item to view the related details.
        
    -   **View the list of exposed assets**
        
        Specify search conditions on the Exposure Analysis page to find asset exposures across different dimensions. For example, you can indicate whether vulnerabilities exist, select an asset group, or enter a port.
        
        If your exposed asset has an AI application tag, it means the asset has AI components exposed to the Internet.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3549163471/p935312.png)
        
    -   **View the exposure details of an asset**
        
        Find the asset whose exposure details you want to view and click **Exposure Details** in the Actions column. In the panel that appears, view the communication link topology of the asset, the details of the links, and the information about the detected weak passwords and vulnerabilities.
        
        -   Click the asset dropdown list at the top of the **Exposure Details** panel to view the exposure details of the target asset.
            
        -   View risk details:
            
            -   Click the **Weak Password** tab to view the details of detected weak passwords. You can click the name of a weak password item to go to the details page of the asset. On the Baseline Risks tab, you can view all baseline risks that are detected on the asset. Attackers may exploit the weak passwords of your assets to log on to your assets and steal data or compromise your assets. We recommend that you change the weak passwords at the earliest opportunity.
                
            -   On the **Exploitable Vulnerabilities** or **All Vulnerabilities** tab, you can click the URL of a vulnerability to go to the details page of the vulnerability. On the details page, you can view the information about the vulnerability and manually fix the vulnerability based on the fixing suggestions that are provided. We recommend that you fix high-risk vulnerabilities at the earliest opportunity.
                
            -   On the **Risk-related Configurations** tab, click the risk items detected in the configuration assessment to go to the **Cloud Service** page, where you can view the risk details and fix it.
                
        -   View exposure links:
            
            If your ECS instance or database accesses the Internet by using multiple methods, the communication link topology shows multiple paths to access the Internet. For example, if your ECS instance accesses the Internet by using a NAT gateway and an SLB instance, the communication link topology shows two paths to access the Internet. You can click the asset on each access path to switch to the path and view the details of the path.
            
            **Note**
            
            Different colors in a communication link topology indicate different severities of vulnerabilities that are detected on each asset.
            
            -   Red: High-risk vulnerabilities are detected on your asset. These vulnerabilities can be exploited over the Internet by attackers.
                
            -   Orange: Medium-risk vulnerabilities are detected on your asset. These vulnerabilities can be exploited over the Internet by attackers.
                
            -   Gray: Low-risk vulnerabilities are detected on your asset. These vulnerabilities can be exploited over the Internet by attackers.
                
            -   Green: No weak passwords or vulnerabilities that can be exploited over the Internet by attackers are detected on your asset.
                
            
            The mappings between the colors and the severities of vulnerabilities apply only to your assets. The mappings do not apply to other components in the communication link topology, such as the Internet. By default, the icon that indicates the Internet is gray.
            
    -   **Export asset exposure data**
        
        In the upper-right corner above the exposed asset list, click the ![导出](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0004649951/p68647.png) image to export and save the details of the asset exposures to your computer. The exported file is in the Excel format.
        

## **References**

-   If you want to reduce the exposures of ECS instances on the Internet, see:
    
    -   [Best practices of the security group (part 1)](/help/en/ecs/use-cases/best-practices-of-the-security-group)
        
    -   [Use Cloud Firewall to control access between ECS instances](/help/en/ecs/use-cases/use-cloud-firewall-to-control-access-between-ecs-instances)
        
    -   [Enable or disable the system firewall on a Linux ECS instance](/help/en/ecs/user-guide/enable-or-disable-the-system-firewall-in-a-linux-instance)
        
    -   [Configure firewall rules for a Windows ECS instance](/help/en/ecs/user-guide/windows-system-firewall-policy-configuration-guide)
        
-   If you want to handle vulnerabilities that are detected in assets, see:
    
    -   [View and handle vulnerabilities](/help/en/security-center/user-guide/view-and-handle-vulnerabilities)
        
    -   [Best practices for vulnerability fixes](/help/en/security-center/use-cases/fix-vulnerabilities)
        
-   If you need to fix weak passwords in your system, see:
    
    -   [Best practices for weak password security](/help/en/security-center/use-cases/reinforce-password-security)
