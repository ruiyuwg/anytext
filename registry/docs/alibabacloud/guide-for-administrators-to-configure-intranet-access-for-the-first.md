This topic describes how the private access feature of Secure Access Service Edge (SASE) works and walks you through the configuration process. This helps administrators get started with the feature after they purchase SASE.

## **Introduction to the private access feature**

The private access feature supports Software as a Service (SaaS)-based zero trust access by adopting the software-defined perimeter (SDP) approach. The feature allows you to manage the access permissions of users without the need to expose public IP addresses or reconstruct your existing network architecture. This way, you can use SASE to control access of the users.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4179604371/CAEQMRiBgMDB5LrpnRkiIDIzMWRmMjY0YjNmYTRmYTRhYzhiZjQyYWRlNzNjZDVj4164976_20240112102611.740.svg)

## **Procedure**

### **Step 1: Create an IdP and add users**

An identity provider (IdP) is used for identity authentication of users within an enterprise. You can configure third-party and self-managed IdPs in SASE. You can configure the following types of IdPs: Lightweight Directory Access Protocol (LDAP), DingTalk, WeCom, Lark, Identity as a Service (IDaaS), and custom. If multiple IdPs are used in your services, you can configure multiple IdPs at a time in SASE. Then, you can manage users of the IdPs.

In this topic, a custom IdP is used as an example.

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas). In the left-side navigation pane, choose **Identity Authentication and Management** > **Identity Access**.
    
2.  Click the **IdP Management** tab, find a custom IdP, and then click **Edit** in the Actions column. In the **Edit** panel, configure the parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **PC Logon Method**
    
    Valid values: **Logon with Account and Password** and **Password-free Logon**.
    
    -   If you select **Logon with Account and Password**, you can turn on **Two-factor Authentication**. Valid values:
        
        -   **OTP-based Authentication**: If you select **OTP-based Authentication**, you must select at least one one-time password (OTP) mode. The following modes are supported:
            
            -   Allow Tokens on SASE Mobile Client: The built-in OTPs of SASE are used. Users must install the SASE mobile client.
                
            -   Allow Tokens on Third-party Applications: Make sure that clock synchronization on your OTP app works as expected. Common OTP apps, such as Alibaba Cloud App, are supported.
                
            -   Allow Enterprise-owned Tokens: If you want to use the self-managed OTPs of your enterprise, contact technical support to perform the required configuration.
                
        -   **Verification Code-based Authentication**: If you select **Verification Code-based Authentication**, you must select at least one authentication method. The following methods are supported:
            
            -   **Text Message Verification:** Make sure that each user in the IdP has a mobile phone number.
                
            -   **Email Verification:** Make sure that each user in the IdP has an email address.
                
    -   If you select **Password-free Logon**, users must download and log on to the SASE mobile client and scan the quick response (QR) code for authentication.
        
    
    Logon with Account and Password
    
    **Mobile Device Logon Method**
    
    Valid values: **Logon with Account and Password** and **Fingerprint or Face Recognition**.
    
    If you select **Fingerprint or Face Recognition**, users must enter the usernames and passwords when they log on to the SASE mobile client for the first time.
    
    Logon with Account and Password
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5695520371/p865335.png)
    
3.  Go to the **User Group Management** tab and click **Create User Group**. In the **Create User Group** panel, configure the parameters to add users to the user group and click **OK**.
    
    User information includes the username, department, email address, and mobile phone number of a user.
    

### **Step 2: Create an office application**

Office applications of an enterprise refer to IT resources such as internal-facing applications, servers, or databases that are used by users at work. Users do not need to configure public IP addresses for office applications. If a user wants to access applications or resources in a LAN from an office device, the user needs to only install the SASE client on the device and pass the required identity and security verification.

1.  In the left-side navigation pane, choose **Private Access** > **Application Management**.
    
2.  In the **Custom Tags** section of the **Office Application** page, click **Add**. Then, enter a tag name and click **OK**.
    
    You can create up to 100 custom tags.
    
3.  Click **Add Application** and configure the parameters based on the following descriptions and steps:
    
    If Domain Name System (DNS) servers that use internal CIDR blocks are deployed for your services, you can perform the following operations to configure DNS services: Click **Internal DNS Configuration**. In the **DNS Address** dialog box, configure the parameters in the **Default DNS Service** and **Other DNS Services** sections. The DNS service that you configure in the Default DNS Service section is used as the primary DNS service for your enterprise and is delivered to the SASE client. In this section, you can specify up to two DNS servers. You can also configure custom DNS services in the Other DNS Services section. Users can select the primary DNS service or a custom DNS service in the SASE client based on their business requirements.
    
    If you do not configure a DNS service, SASE automatically uses Alibaba Cloud DNS for resolution based on internal CIDR blocks. If Alibaba Cloud DNS PrivateZone is deployed for your services, Alibaba Cloud DNS PrivateZone is preferentially used for resolution.
    
    1.  On the **Manual Configuration** tab, configure the parameters in the **Basic Configurations** step. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **Application Name**
        
        The name of the office application.
        
        The name must be 1 to 128 characters in length and can contain letters, digits, hyphens (-), underscores (\_), and periods (.).
        
        Attendance\_management\_application
        
        **Description**
        
        The description of the office application.
        
        Attendance management address of users
        
        **Tag**
        
        The custom tag of the office application. You can group, query, and manage applications by tag.
        
        OA System
        
        **Status**
        
        The status of the office application. Valid values:
        
        -   **Enable**: The office application is available.
            
        -   **Disable**: The office application is unavailable.
            
        
        Enable
        
    2.  Click **Next** and configure the parameters in the Application Address step. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **Application Address**
        
        The internal address of the office application. You can enter IP addresses, CIDR blocks, exact domain names, and wildcard domain names for the office application. You can enter multiple internal addresses for the office application based on your business requirements.
        
        10.10.XX.XX
        
        **Port**
        
        The port number or port range of the office application.
        
        80-200
        
        **Protocol**
        
        The protocol type of the office application. Valid values: **All Protocols**, **TCP**, and **UDP**.
        
        All Protocols
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1468820371/p866085.png)
    

### **Step 3: Enable network connections**

Before you enable network connections, make sure that you are familiar with your service deployment to select the optimal connection plan.

**Business resource deployment**

**Solution**

**Environment requirement**

Business resources are deployed on Alibaba Cloud.

You can use the network settings feature to enable network connections between business resources in Alibaba Cloud VPCs and the SASE client.

You can access the **Network Settings** \> **Services on Alibaba Cloud** page of the SASE console and turn on Network Connection for the VPC in which your server is deployed.

Computer requirements:

-   Windows 7 or later (Both 64-bit Windows and 32-bit Windows are supported.)
    
-   macOS 10.10 or later
    
-   Ubuntu 18.04 or later and UnionTech OS (UOS)
    

Business resource are deployed outside Alibaba Cloud and Alibaba Cloud virtual border routers (VBRs), Cloud Connect Network (CCN) instances, and VPN gateways are used for the business resources. For example, business resources are deployed on Amazon Web Services (AWS) or Tencent Cloud.

You can use Alibaba Cloud **Express Connect, Smart Access Gateway (SAG), and IPsec-VPN** to allow access from the SASE client to business resources outside Alibaba Cloud.

You can access the **Network Settings** \> **Services Outside Alibaba Cloud** > **Cloud Network Instance** tab of the SASE console, configure a back-to-origin VPC, and turn on Network Connection for your connector.

Computer requirements:

-   Windows 7 or later (Both 64-bit Windows and 32-bit Windows are supported.)
    
-   macOS 10.10 or later
    
-   Ubuntu 18.04 or later and UOS
    

Business resource are deployed outside Alibaba Cloud.

SASE provides the connector feature. You can deploy a connector to allow access from the SASE client to the business resources that are deployed outside Alibaba Cloud.

This solution allows users to access the business resources without the need to use other network services.

You can access the **Network Settings** \> **Services Outside Alibaba Cloud** tab of the SASE console, create a connector, and then run commands to deploy the connector. Make sure that the connector is enabled.

Computer requirements:

-   Windows 7 or later (Both 64-bit Windows and 32-bit Windows are supported.)
    
-   macOS 10.10 or later
    
-   Ubuntu 18.04 or later and UOS
    

Requirements on the servers on which you can deploy connectors:

-   Virtual machine (VM) or server configurations:
    
    -   CPU cores: 4
        
    -   Memory: 8 GB
        
    -   Disk size: 40 GB
        
    -   Operating system: CentOS 7 or later
        
-   Network configurations: Access to the Internet is available. If a firewall is configured, you must allow outbound traffic over ports 443 and 8000 on the VM or server
    
-   Bandwidth limit: The VM or server can forward traffic of 200 MB.
    
-   Port configurations: Ports 9000 to 9010 are unused.
    

This topic describes how to enable network connections for services outside Alibaba Cloud.

1.  In the left-side navigation pane, choose **Private Access** > **Network Settings**.
    
2.  On the **Network Settings** page, click the **Services Outside Alibaba Cloud** tab.
    
3.  Create a connector and associate it with an application.
    
    1.  On the **Connectors** tab, click **Add Connector**.
        
        You can add up to five connectors.
        
    2.  In the **Add Connector** panel, configure the parameters based on your business requirements. Then, click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **Region**
        
        The region of the connector. To ensure access performance, we recommend that you select a region that is the closest to your server.
        
        Singapore
        
        **Instance Name**
        
        The name of the connector.
        
        Private access connector of a company
        
        **Instance Switch**
        
        Specifies whether to enable the connector. You can use a connector to access associated applications from the SASE client only if Instance Switch is set to **Enabled**.
        
        **Important**
        
        If Instance Switch is set to **Disabled**, you cannot use the connector to access your office applications from the SASE client. Proceed with caution.
        
        Enabled
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881430371/p866163.png)
        
4.  Install and deploy the connector.
    
    Before you deploy the connector, you can obtain the command that is used to deploy the connector in the **Deploy** panel. To open the panel, click **Deploy** in the **Actions** column.
    
    1.  Log on to the server or virtual machine on which you want to deploy the connector as the **root** user and run the following command to download the connector:
        
        ```
        wget 'https://sase-app.oss-cn-hangzhou.aliyuncs.com/connector/install_connector.latest.sh' -O /tmp/install_connector.sh
        ```
        
    2.  Run the following command to modify the permissions:
        
        ```
        chmod a+x /tmp/install_connector.sh
        ```
        
    3.  Run the following command to install the connector:
        
        ```
        sudo /tmp/install_connector.sh 163710033944**** 1404F395-6456D8CE-B02D4B20-0DFB**** connector-97861d0d3b91****
        ```
        
        **Note**
        
        In the command, 163710033944\*\*\*\* is the ID of your Alibaba Cloud account, 1404F395-6456D8CE-B02D4B20-0DFB\*\*\*\* is the license generated by SASE, and connector-97861d0d3b91\*\*\*\* is the ID of the connector.
        
    4.  Run the following command to start the connector:
        
        ```
        sudo systemctl start aliyun_sase_connector
        ```
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8738520371/p865487.png)
        

### **Step 4: Create a zero trust policy**

Zero trust policies help you manage access to applications and resources from users and enterprise partners. The process of creating a zero trust policy is to distinguish the resource permissions of enterprise user groups from those of office applications. SASE provides a built-in policy that prohibits all access. You must configure an allow policy to allocate different resources to different user groups.

1.  In the left-side navigation pane, choose **Private Access** > **Zero Trust Policies**.
    
2.  On the **Zero Trust Policies** page, click **Create Policy**.
    
3.  In the **Create Policy** panel, configure the parameters and click **OK**. The following table describes the parameters.
    
    You can create multiple zero trust policies based on your business requirements. The number of policies is unlimited.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Policy Name**
    
    The name of the zero trust policy.
    
    The name must be 2 to 100 characters in length and can contain letters, digits, hyphens (-), and underscores (\_).
    
    Allow policy for the attendance management application
    
    **Description**
    
    The description of the zero trust policy.
    
    All users can access the attendance management application
    
    **Priority**
    
    The priority of the zero trust policy. The value 1 indicates the highest priority. When you create a policy, the maximum value for the priority of the new policy is determined by the following calculation result: Number of zero trust policies within the account + 1. For example, you have 17 zero trust policies within your account. When you create a policy, the priority of the new policy ranges from 1 to 18. The number 18 is obtained by using the following formula: 17 + 1 = 18.
    
    If a policy conflict exists, the policy that has a higher priority takes effect.
    
    1
    
    **Action**
    
    The access permissions of the policy. Valid values:
    
    -   **Allow Access**: The policy allows access to the specified application from users or terminals.
        
    -   **Access Denied**: The policy denies access to the specified application from users or terminals.
        
    
    Allow Access
    
    **Applicable User**
    
    The user group to which the policy applies. The zero trust policy takes effect for the terminals of the specified user group. If an access request hits the policy, SASE determines whether to allow or deny the request.
    
    To add a user group, click **Add**. On the **User Group** tab, select the user group that you want to add. If the existing user groups cannot meet your requirements, you can create a user group on the **Custom User Group** tab. For more information, see [Configure user groups](/help/en/sase/user-guide/manage-user-groups).
    
    All users of a company
    
    **Selected Applications**
    
    The applications to which the policy applies.
    
    To add applications, click **Add**. On the **Tag** tab, select a tag to add the applications that have the tag. You can also select applications on the **Application** tab.
    
    Attendance management application
    
    **Security Baseline**
    
    The security baseline template that meets your security requirements.
    
    \-
    
    **Policy Status**
    
    The status of the policy. You can enable or disable the policy.
    
    Enabled
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4881430371/p866164.png)
    

### **Step 5: Verify configuration results**

1.  Open the SASE client, enter your enterprise authentication identifier and click **OK**.
    
    On the **Settings** page of the SASE console, you can configure an **Enterprise Authentication Identifier**.
    
2.  Log on to the SASE client by using the initial username and password that are sent to your phone number or email.
    
3.  Click **Connect**.
    
4.  Access the attendance management application.
    
    If you can access the application, the configuration is successful.
