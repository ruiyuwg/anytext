In a digital office environment, network admission control is a key component of enterprise network security. Enterprises have growing demands for network security and convenience. Secure Access Service Edge (SASE) integrates the RADIUS (Remote Authentication Dial-In User Service) component to support 802.1X protocol and Portal access methods, delivering secure, flexible, and efficient network admission control, ensuring compliant access for devices and users, and improving overall management efficiency and user experience.

## **Scenario 1: Employee wireless network access**

SASE ensures network access security through 802.1X authentication and improves employee efficiency with a one-click network access. Employees can quickly and securely access the enterprise network in any office network coverage area through the SASE client. You need to complete relevant configurations in both the SASE console and your local wireless controller device.

**Note**

The wireless controllers and switches mentioned in this document use H3C devices as examples.

### **Step 1: Configure the authentication server (RADIUS)**

RADIUS is a network protocol used to provide centralized authentication, authorization, and accounting (AAA) services. SASE provides you with a **Cloud Authentication Server** while also supporting flexible configuration of your own authentication server.

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Network Access Control** > **Basic Configurations**.
    
3.  On the **Authentication Server** tab, view the **Cloud Authentication Server** information or **Add Authentication Server**.
    
    -   **View cloud authentication server**
        
        1.  In the upper-right corner of the page, click **Cloud Authentication Server**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984763.png)
            
        2.  In the **Cloud Authentication Server** panel, view the information about the cloud authentication server provided by SASE.
            
    -   **Add authentication server**
        
        1.  Click **Add Authentication Server**.
            
        2.  In the **Add Authentication Server** panel, configure the **Authentication Server Name** and the **IP Address** of the server, and click **Save**.
            
            **Note**
            
            The **User Wi-Fi Authentication Interface** is 1812 by default, and the **User Wi-Fi Billing Interface** is 1813 by default.
            
        3.  On the **Deployment and Installation** tab, view the **Recommended Server Specifications** and **Server Deployment Commands** needed to deploy RADIUS.
            
        4.  Copy the **Server Deployment Commands** and deploy RADIUS on your own server.
            
        5.  After deployment is complete, view the deployment status in the list.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984766.png)
            

### **Step 2: Configure network device information**

A wireless controller is a network device used for centralized management and control of wireless access points (APs), with the ability to uniformly configure, monitor, and optimize wireless networks. You need to configure the relevant information for your wireless controller.

1.  On the **Network Device** tab, click **Add Network Device**.
    
2.  In the **Add Network Device** dialog box, configure the following information and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Device Name**
    
    Enter the name of the device.
    
    **Device Brand**
    
    Select the brand of your wireless controller.
    
    **Device Type**
    
    Select Wireless Controller.
    
    **IP Address**
    
    Configure the IP or IP range of the wireless controller.
    
    **MAC Address**
    
    Configure the MAC address of the wireless controller.
    
    **CoA Port**
    
    Configure the CoA port of the wireless controller.
    

### **Step 3: Configure Wi-Fi management**

1.  On the **Wi-Fi Management** tab, click **Create Network Instance**.
    
2.  In the **Enterprise Wireless Network Configuration** dialog box, configure the **Network SSID** and **Authentication Mode** (currently only EAP-TLS is supported) for employee network access, and click **OK**.
    

### **Step 4: Configure certificate management**

After accessing the enterprise office network through SASE, the system will automatically issue SASE's CA certificate and network access certificate to the SASE App. Only devices with installed certificates can use and access enterprise internal applications through the enterprise wireless network. If the automatically issued certificates do not suit your business scenario, you can modify the certificate installation scope, validity period, or customize the certificate organization name.

1.  Click **Certificate Management**.
    
2.  On the **Certificate Management** tab, configure **Network Access Certificate Configuration**, **CA Certificate Configuration**, and **Global Settings**.
    

### **Step 5: Configure the local wireless controller (using H3C as an example)**

You need to configure the RADIUS scheme, ISP domain, and wireless 802.1X authentication in the local console.

#### **Configure RADIUS**

1.  Log on to the H3C wireless controller device console.
    
2.  At the bottom of the page, select **Network,** and in the navigation pane on the left, select **Network Security** > **Authentication**.
    
3.  On the **RADIUS** tab, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984992.png) to add a new RADIUS scheme.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984996.png)
    
4.  On the **Add RADIUS Scheme** page, configure the RADIUS information and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Scheme Name**
    
    Customize the RADIUS scheme name.
    
    sase-r1
    
    **Authentication Server**
    
    Configure the authentication server information. If you have multiple authentication servers, you can add them to the backup servers.
    
    For information about the authentication server, you can view the **Cloud Authentication Server** information or **Add Authentication Server** information in the SASE console under **Network Access Control** > **Basic Configurations** > **Authentication Server** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985031.png)
    
    -   **VRF**: Default Public Network
        
    -   **Type**: Default IP Address
        
    -   **IP Address**: 121.40.\*.\*
        
    -   **Port**: 1812
        
    -   **Shared Key**: Fill in the key
        
    -   **Status**: Active
        
    
    **Accounting Server**
    
    -   Configure the authentication server information. If you have multiple accounting servers, you can add them to the backup servers.
        
    -   The IP address and shared key of the accounting server are the same as those of the authentication server, with a port of 1813.
        
    
    -   **VRF**: Default Public Network
        
    -   **Type**: Default IP Address
        
    -   **IP Address**: 121.40.\*.\* (same as the authentication server)
        
    -   **Port**: 1813
        
    -   **Shared Key**: Fill in the key (same as the authentication server)
        
    -   **Status**: Active
        
    
    **Advanced Settings**
    
    Click **Show Advanced Settings** and set the Real-time Accounting Interval to 60 seconds in the parameters.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985071.png)
    
    60
    

#### **Configure ISP domain**

1.  In the navigation pane on the left, select **Network Security** > **Authentication**. On the **ISP Domains** tab, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984992.png) to add a new ISP domain configuration.
    
2.  On the **Add ISP Domains** page, configure the ISP domain as shown in the following figure and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9926585671/p985154.png)
    

#### **Configure wireless network (802.1X authentication)**

1.  In the navigation pane on the left, select **Wireless Configuration** > **Wireless Network**.
    
2.  On the **Wireless Network** tab, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984992.png) to add a new wireless network.
    
3.  On the Add Wireless Service page, configure **Wireless Service Name**, **SSID**, **Default VLAN**, and enable **Wireless Service**. After configuration is complete, click **Apply and Configure Advanced Settings**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985197.png)
    
    **Note**
    
    For SSID-related information, you can obtain the SSID of your configured network instance in the SASE console under **Network Access Control** > **Basic Configurations** > **Wi-Fi Management** tab.
    
4.  On the **Link Layer Authentication** tab, select **Authentication Mode** as **802.1X**, and select **Domain Name** as the ISP domain you configured. Keep other configurations as default. Then click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985211.png)
    
5.  On the **Binding** tab, click the AP that needs to be bound and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985619.png)
    
6.  In the navigation pane on the left, select **Network Security** > **Access Control**.
    
7.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985697.png) in the upper-right corner of the page. On the 802.1X page, click the parameter to the right of **Authentication Method**, then select **EAP** from the drop-down list, and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985701.png)
    

### **Step 6: Enable dynamic authorization (CoA)**

CoA is typically implemented based on the RADIUS protocol by sending RADIUS CoA-Request messages to trigger authorization changes. When the wireless controller receives such requests, it updates the user's session parameters according to the request content and returns a CoA-ACK (acknowledgment) or CoA-NAK (rejection) message to the RADIUS server.

1.  Connect to the wireless controller (AC) using a Console line.
    
2.  Enable CoA using the following commands.
    
    ```
    [AC] radius dynamic-author server
    [ac-radius-da-server] client ip <Radius Server IP> key simple <Sharesecret>
    ```
    
    Where `{Radius_ip}` needs to be configured as the Radius Server IP address, and `{secret}` needs to be configured as the shared key for the corresponding device.
    
    **Note**
    
    You can view the **Radius Server IP address** and **SharedSecret (shared key)** in the SASE console under **Network Access Control** > **Basic Configurations** > **Authentication Server** tab.
    

### **Step 7: Configure network access permission policy**

When accessing the enterprise office network through SASE, configuring network access permission policies can implement fine-grained isolation and control of employee or device network access permissions, enhancing network security and management efficiency.

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Network Access Control** > **Office Network**.
    
3.  On the **Network Access Permissions** tab, click **Create Policy**.
    
4.  In the **Create Policy** panel, configure the following settings and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Policy Name**
    
    Configure the policy name.
    
    **Effective Scope**
    
    For **Effective Scope**, select **Applicable User**.
    
    Based on actual business needs, click **Select** and refine the effective range according to **All Users**, **Specific User Group**, **Specific Device**, or **Specific Device Tag**.
    
    **VLAN ID**
    
    Set the VLAN ID divided on your wireless controller. Supported input range: 1-4094.
    
    **ACL ID**
    
    Set the ACL ID divided on your wireless controller. The value range needs to be determined based on the brand and model of the network device used.
    
    **Terminal Type**
    
    Select the effective terminal type.
    
    **Network Permissions**
    
    Select wireless network.
    
    **Wi-Fi Network Scope**
    
    Select **All Wi-Fi Networks** or select **Specific Wi-Fi Networks** based on actual conditions.
    
    **Priority**
    
    Set the policy effective priority. The smaller the number, the higher the priority.
    
    **Policy Status**
    
    Enable the policy status.
    
    **Advanced Settings**
    
    Set the **Authentication Server** and **Network Device for Access Control** for the policy to take effect.
    

### **Step 8: Install and log on to the SASE client**

You need to install and log on to the SASE App on a terminal device connected to the Internet. For specific operations after logging on to the client, see [Install and Log on to the SASE App](/help/en/sase/user-guide/install-and-log-on-to-sase-client).

### **Step 9: View authentication and network access records**

After completing the above steps, you can view network access records or employee authentication logs in the SASE console.

-   **View employee authentication logs**
    
    1.  In the navigation pane on the left, choose **Log Analysis** > **Log Audit**.
        
    2.  On the **Access Logs** > **User Authentication Logs** tab, view the employee network authentication status.
        
-   **View network access records**
    
    1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
        
    2.  In the navigation pane on the left, choose **Network Access Control** > **Office Network**.
        
    3.  On the **Network Access History** tab, view the employee's network access status, and you can perform **Disable** and **Enable** operations.
        

## **Scenario 2: Employee wired network access**

This scenario describes the configuration of wired network access using 802.1X authentication. You need to configure both the SASE Management Console and the local switch.

### **Step 1: Configure the authentication server (RADIUS)**

RADIUS is a network protocol used to provide centralized authentication, authorization, and accounting (AAA) services. SASE provides you with a **Cloud Authentication Server** while also supporting flexible configuration of your own authentication server.

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Network Access Control** > **Basic Configurations**.
    
3.  On the **Authentication Server** tab, view the **Cloud Authentication Server** information or **Add Authentication Server**.
    
    -   **View cloud authentication server**
        
        1.  In the upper-right corner of the page, click **Cloud Authentication Server**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984763.png)
            
        2.  In the **Cloud Authentication Server** panel, view the information about the cloud authentication server provided by SASE.
            
    -   **Add authentication server**
        
        1.  Click **Add Authentication Server**.
            
        2.  In the **Add Authentication Server** panel, configure the **Authentication Server Name** and the **IP Address** of the server, and click **Save**.
            
            **Note**
            
            The **User Wi-Fi Authentication Interface** is 1812 by default, and the **User Wi-Fi Billing Interface** is 1813 by default.
            
        3.  On the **Deployment and Installation** tab, view the **Recommended Server Specifications** and **Server Deployment Commands** needed to deploy RADIUS.
            
        4.  Copy the **Server Deployment Commands** and deploy RADIUS on your own server.
            
        5.  After deployment is complete, view the deployment status in the list.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984766.png)
            

### **Step 2: Configure network device information**

Switches are used to connect different types of network devices, such as computers, servers, printers, and routers, enabling communication and data exchange between these devices. You need to configure the relevant information for your local switch.

1.  On the **Network Device** tab, click **Add Network Device**.
    
2.  In the **Add Network Device** dialog box, configure the following information, and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Device Name**
    
    Configure the device name.
    
    **Device Brand**
    
    Select the brand of your vSwitch.
    
    **Device Type**
    
    Select wired vSwitch.
    
    **IP Address**
    
    Configure the IP address or IP segment of the vSwitch.
    
    **MAC Address**
    
    Configure the MAC address of the vSwitch.
    
    **CoA Port**
    
    Configure the coa port of the vSwitch.
    

### **Step 3: Configure certificate management**

After accessing the enterprise office network through SASE, the system will automatically issue SASE's CA certificate and network access certificate to the SASE App. Only devices with installed certificates can use and access enterprise internal applications through the enterprise wired network. If the automatically issued certificates do not suit your business scenario, you can modify the certificate installation scope, validity period, or customize the certificate organization name.

1.  Click **Certificate Management**.
    
2.  On the **Certificate Management** tab, configure **Network Access Certificate Configuration**, **CA Certificate Configuration**, and **Global Settings**.
    

### **Step 4: Configure the local switch (using H3C as an example)**

You need to configure the RADIUS scheme, ISP domain, and wired 802.1X authentication in the local console.

#### **Configure RADIUS**

1.  Log on to the H3C wireless controller device console.
    
2.  At the bottom of the page, select **Network,** and in the navigation pane on the left, select **Network Security** > **Authentication**.
    
3.  On the **RADIUS** tab, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984992.png) to add a new RADIUS scheme.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984996.png)
    
4.  On the **Add RADIUS Scheme** page, configure the RADIUS information and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Scheme Name**
    
    Customize the RADIUS scheme name.
    
    sase-r1
    
    **Authentication Server**
    
    Configure the authentication server information. If you have multiple authentication servers, you can add them to the backup servers.
    
    For information about the authentication server, you can view the **Cloud Authentication Server** information or **Add Authentication Server** information in the SASE console under **Network Access Control** > **Basic Configurations** > **Authentication Server** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985031.png)
    
    -   **VRF**: Default Public Network
        
    -   **Type**: Default IP Address
        
    -   **IP Address**: 121.40.\*.\*
        
    -   **Port**: 1812
        
    -   **Shared Key**: Fill in the key
        
    -   **Status**: Active
        
    
    **Accounting Server**
    
    -   Configure the authentication server information. If you have multiple accounting servers, you can add them to the backup servers.
        
    -   The IP address and shared key of the accounting server are the same as those of the authentication server, with a port of 1813.
        
    
    -   **VRF**: Default Public Network
        
    -   **Type**: Default IP Address
        
    -   **IP Address**: 121.40.\*.\* (same as the authentication server)
        
    -   **Port**: 1813
        
    -   **Shared Key**: Fill in the key (same as the authentication server)
        
    -   **Status**: Active
        
    
    **Advanced Settings**
    
    Click **Show Advanced Settings** and set the Real-time Accounting Interval to 60 seconds.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985071.png)
    
    60
    

#### **Configure ISP domain**

1.  In the navigation pane on the left, select **Network Security** > **Authentication**. On the **ISP Domains** tab, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984992.png) to add a new ISP domain configuration.
    
2.  On the **Add ISP Domain** page, configure the ISP domain as shown in the following figure and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9926585671/p985154.png)
    

#### **Configure switch ports (802.1X authentication)**

1.  In the navigation pane on the left, select **Network Security** > **Access Control**.
    
2.  On the **802.1X** page, select **GE1/0/3** (port-based authentication). Then click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985695.png)
    
3.  Click **Advanced Settings**. On the **Advanced Settings** page, configure the **Mandatory ISP Domain of the Port**, and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985706.png)
    
4.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985697.png) in the upper-right corner of the page. On the 802.1X page, click the parameter to the right of **Authentication Method**, then select **EAP** from the drop-down list, and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985701.png)
    

### **Step 5: Enable dynamic authorization (CoA)**

CoA is typically implemented based on the RADIUS protocol by sending RADIUS CoA-Request messages to trigger authorization changes. When the wireless controller receives such requests, it updates the user's session parameters according to the request content and returns a CoA-ACK (acknowledgment) or CoA-NAK (rejection) message to the RADIUS server.

1.  Connect to the wireless controller (AC) using a Console line.
    
2.  Enable CoA using the following commands.
    
    ```
    [AC] radius dynamic-author server
    [ac-radius-da-server] client ip <Radius Server IP> key simple <Sharesecret>
    ```
    
    Where `{Radius_ip}` needs to be configured as the Radius Server IP address, and `{secret}` needs to be configured as the shared key for the corresponding device.
    
    **Note**
    
    You can view the **Radius Server IP address** and **SharedSecret (shared key)** in the SASE console under **Network Access Control** > **Basic Configurations** > **Authentication Server** tab.
    

### **Step 6: Configure network access permission policy**

When accessing the enterprise office network through SASE, configuring network access permission policies can implement fine-grained isolation and control of employee or device network access permissions, enhancing network security and management efficiency.

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Network Access Control** > **Office Network**.
    
3.  On the **Network Access Permissions** tab, click **Create Policy**.
    
4.  In the **Create Policy** panel, configure the following settings and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Policy Name**
    
    Configure the policy name.
    
    **Effective Scope**
    
    For **Effective Scope**, select **Applicable User**.
    
    Based on actual business needs, click **Select** and refine the effective range according to **All Users**, **Specific User Group**, **Specific Device**, or **Specific Device Tag**.
    
    **VLAN ID**
    
    Set the VLAN ID divided on your switch. Supported input range: 1-4094.
    
    **ACL ID**
    
    Set the ACL ID divided on your switch. The value range needs to be determined based on the brand and model of the network device used.
    
    **Terminal Type**
    
    Select the effective terminal type.
    
    **Network Permissions**
    
    Select wired network.
    
    **Priority**
    
    Set the policy effective priority. The smaller the number, the higher the priority.
    
    **Policy Status**
    
    Enable the policy status.
    
    **Advanced Settings**
    
    Set the **Authentication Server** and **Network Device for Access Control** for the policy to take effect.
    

### **Step 7: Install and log on to the SASE client**

You need to install and log on to the SASE App on a terminal device connected to the Internet. For specific operations after logging on to the client, see [Install and Log on to the SASE App](/help/en/sase/user-guide/install-and-log-on-to-sase-client).

### **Step 8: View authentication and network access records**

After completing the above steps, you can view network access records or employee authentication logs in the SASE console.

-   **View employee authentication logs**
    
    1.  In the navigation pane on the left, choose **Log Analysis** > **Log Audit**.
        
    2.  On the **Access Logs** > **User Authentication Logs** tab, view the employee network authentication status.
        
-   **View network access records**
    
    1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
        
    2.  In the navigation pane on the left, choose **Network Access Control** > **Office Network**.
        
    3.  On the **Network Access History** tab, view the employee's network access status, and you can perform **Disable** and **Enable** operations.
        

## **Scenario 3: Visitor wireless network access**

SASE provides enterprises with a secure and convenient visitor network access solution, ensuring network security by distinguishing between employee and visitor SSIDs while optimizing the visitor internet experience. It supports simultaneous configuration of employee and visitor network access, requiring only different SSID settings and backend integration strategies. Currently, visitor access to SASE visitor Wi-Fi only supports Portal page text message verification code authentication.

### **Step 1: Portal authentication configuration**

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Network Access Control** > **Guest Network**.
    
3.  In the upper-right corner of the page, click **Authentication Configuration**.
    
4.  On the **Authentication Configuration** page, configure **Authentication Portal Settings** and **Custom Settings on Authentication Page**.
    

### **Step 2: Configure the authentication server (RADIUS)**

RADIUS (Remote Authentication Dial-In User Service) is a network protocol used to provide centralized authentication, authorization, and accounting (AAA) services. SASE supports flexible configuration of your own authentication server.

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Network Access Control** > **Basic Configurations**.
    
3.  On the **Authentication Server** tab, click **Add Authentication Server**.
    
4.  In the **Add Authentication Server** panel, configure the **Authentication Server Name** and the **IP Address** of the server, and click **Save**.
    
    **Note**
    
    The **User Wi-Fi Authentication Interface** is 1812 by default, and the **User Wi-Fi Billing Interface** is 1813 by default.
    
5.  On the **Deployment and Installation** tab, view the **Recommended Server Specifications** and **Server Deployment Commands**.
    
6.  Copy the **Server Deployment Commands** and deploy RADIUS on your own server.
    
7.  After deployment is complete, view the deployment status in the list.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984766.png)
    

### **Step 3: Configure Wi-Fi management**

1.  On the **Wi-Fi Management** tab, click **Create Network Instance**.
    
2.  In the **Enterprise Wireless Network Configuration** dialog box, configure the **Network SSID** and **Authentication Mode** for guest access (only EAP-TLS is supported), and click **OK**.
    

### **Step 4: Configure the local wireless controller (using H3C as an example)**

#### **Configure RADIUS**

1.  Log on to the H3C wireless controller device console.
    
2.  At the bottom of the page, select **Network,** and in the navigation pane on the left, select **Network Security** > **Authentication**.
    
3.  On the **RADIUS** tab, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984992.png) to add a new RADIUS scheme.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984996.png)
    
4.  On the **Add RADIUS Scheme** page, configure the RADIUS information and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Scheme Name**
    
    Customize the RADIUS scheme name.
    
    sase-r1
    
    **Authentication Server**
    
    Configure the authentication server information. If you have multiple authentication servers, you can add them to the backup servers.
    
    For information about the authentication server, you can view the **Add Authentication Server** information in the SASE console under **Network Access Control** > **Basic Configurations** > **Authentication Server** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985031.png)
    
    -   **VRF**: Default Public Network
        
    -   **Type**: Default IP Address
        
    -   **IP Address**: 121.40.\*.\* (same as the authentication server)
        
    -   **Port**: 2000
        
    -   **Shared Key**: Fill in the key (same as the authentication server)
        
    -   **Status**: Active
        
    
    **Advanced Settings**
    
    Click **Show Advanced Settings** and refer to the following configuration, keeping other settings as default.
    
    -   **Source IPv4 Address for Sending RADIUS Messages**: Configure the IPv4 address of the access device specified on the RADIUS server (generally the management interface IP of the AC).
        
    -   **Username Format Sent to RADIUS Server**: Without domain name.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985427.png)
    
    -   **Source IPv4 Address for Sending RADIUS Messages**: 121.40.\*.\*
        
    -   **Username Format Sent to RADIUS Server**: Without domain name.
        
    

#### **Configure ISP domain**

1.  In the navigation pane on the left, select **Network Security** > **Authentication**. On the **ISP Domains** tab, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984992.png) to add a new ISP domain configuration.
    
2.  On the **Add ISP Domain** page, configure the ISP domain as shown in the following figure and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9926585671/p985154.png)
    

#### **Configure Portal authentication server**

1.  In the navigation pane on the left, select **Network Security** > **Provisioning**.
    
2.  On the **Portal** tab, click **Portal Authentication Server**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985437.png)
    
3.  On the **Portal** page, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984992.png) to add a new Portal authentication server.
    
4.  On the **Create Portal Authentication Server** page, refer to the following configuration, keep other settings as default, and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Server Name**
    
    Set the Portal authentication server name.
    
    sase-newptv4
    
    **IP Address**
    
    Set the RADIUS server IP address.
    
    121.40.\*.\*
    
    **Server Reachability Detection**
    
    Enable the detection function and set **Detection Duration** and **Action**.
    
    -   **Detection Duration**: 60 seconds
        
    -   **Action**: Select **Log**
        
    

#### **Configure Portal Web server**

1.  In the navigation pane on the left, select **Network Security** > **Provisioning**.
    
2.  On the **Portal** tab, click **Local Portal Web Server**.
    
3.  On the **Portal** page, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984992.png) to add a new Portal Web server.
    
4.  On the **Create Local Portal Web Server** page, refer to the following configuration and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Server Name**
    
    Configure the server name.
    
    sase-newptv4
    
    **URL**
    
    Configure the server address.
    
    121.40.\*.\*
    
    **URL Parameters**
    
    1.  Select **User's IP Address****,** configure the parameter name in **URL Parameter Name**, and click **Add**.
        
    2.  Select **User's MAC Address**, configure the parameter name in **URL Parameter Name**, and click **Add**.
        
    
    -   User's IP Address: userip
        
    -   User's MAC Address: usermac
        
    

#### **Configure wireless service**

1.  In the navigation pane on the left, select **Wireless Configuration** > **Wireless Network**.
    
2.  On the **Wireless Network** tab, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p984992.png) to add a new wireless network.
    
3.  On the Add Wireless Service page, configure **Wireless Service Name**, **SSID**, **Default VLAN**, and enable **Wireless Service**. After configuration is complete, click **Apply and Configure Advanced Settings**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985197.png)
    
    **Note**
    
    For SSID-related information, you can obtain the SSID of your configured network instance in the SASE console under **Network Access Control** > **Basic Configurations** > **Wi-Fi Management** tab.
    
4.  On the **Link Layer Authentication** tab, select **Authentication Mode** as **IPv4 Portal Authentication**, and select **Domain Name** as the ISP domain name you configured, select **Web Server Name**, configure **BAS-IP**, and keep other configurations as default. Then click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985612.png)
    
5.  On the **Binding** tab, click the AP that needs to be bound and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985619.png)
    

#### **Additional configuration**

Connect to the AC using a Console line for configuration.

```
# Enable wireless Portal roaming function.
[AC] portal roaming enable
# Disable wireless Portal client ARP entry solidification function.
[AC] undo portal refresh arp enable
# Enable wireless Portal client legitimacy check function.
[AC] portal host-check enable
# Configure Portal authentication server type as CMCC
[AC] portal server sase-newptv4
[AC-portal-server-newpt] server-type cmcc
[AC-portal-server-newpt] quit
# Configure Portal Web server
[AC] portal web-server sase-newptv4
[AC-portal-websvr-newpt] url http://192.168.XX.XX:8080/portal
# Configure the device to include ssid and wlan parameters in the URL redirected to users' Portal Web server, with values being the AP's SSID and vlan respectively
[AC-portal-websvr-newpt] url-parameter ssid ssid
[AC-portal-websvr-newpt] url-parameter vlan vlan
[AC-portal-websvr-newpt]  url-parameter acip value  <AC's originating IP> 
# Configure Portal Web server type as CMCC.
[AC-portal-websvr-newpt] server-type cmcc
# Configure ios captive-bypass adaptation
[AC-portal-websvr-newpt] captive-bypass ios optimize enable
[AC-portal-websvr-newpt] quit
# Enable RADIUS session control function.
[AC] radius session-control enable
# Configure Radius CoA function
[AC] radius dynamic-author server
[AC-radius-da-server] client ip <Radius Server IP> key simple <SharedSecret> 
```

**Note**

You can view the **Radius Server IP address** and **SharedSecret (shared key)** in the SASE console under **Network Access Control** > **Basic Configurations** > **Authentication Server** tab.

### **Step 5: Visitor login**

After connecting to the visitor Wi-Fi on a terminal device, you will be automatically redirected to the Portal authentication page. You need to enter your phone number, obtain and enter the verification code from the text message, and then log on. Only after verification is successful can you access enterprise internal applications.

### **Step 6: View visitor logs**

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Log Analysis** > **Log Audit**.
    
3.  On the **Access Logs** > **Guest Authentication Logs** tab, view the visitor network authentication status.
    

## **Scenario 4: Dumb terminal network access**

Dumb terminals can access the enterprise office environment through either wired or wireless networks. You need to first add the dumb terminal in the SASE console, and then configure network access in the local switch.

### **Step 1: Add dumb terminals**

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Terminal Management** > **Terminals**.
    
3.  In the list on the left, select **Dumb Terminal**. Based on your business needs, you can choose **Add Terminal** or **Import Devices**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983803571/p985627.png)
    
    -   **Add Terminal**: In the **Add Terminal** panel, enter the terminal's **MAC Address**, **MAC Address Mask**, **Device Vendor**, **Device Name**, **Device Type**, and other information, and click **OK**.
        
    -   **Import Devices**: In the **Import Devices** dialog box, click **Download Import Template**, fill in the device information, click **Upload Local File**, and after the upload is complete, click **OK**.
        

### **Step 2: Access configuration**

Depending on the type of dumb terminal device, the network access configuration methods for dumb terminal devices supporting wireless networks and wired networks are different.

-   **Supporting wireless networks**: You can refer to the configuration process in [Scenario 1: Employee wireless network access](#f790848abbirf).
    
-   **Supporting wired networks**: You can refer to the configuration process in [Scenario 2: Employee wired network access](#1f99b22db2e1l).
    

**Note**

Dumb terminal devices do not require certificate management and SASE client installation, so these steps can be skipped.

### **Step 3: View dumb terminal authentication logs**

1.  In the navigation pane on the left, choose **Log Analysis** > **Log Audit**.
    
2.  On the **Access Logs** > **Dumb Terminal Authentication Logs** tab, view the network authentication status of dumb terminal devices.
