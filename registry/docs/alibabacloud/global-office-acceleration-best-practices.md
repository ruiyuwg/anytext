This topic describes how to configure an Secure Access Service Edge (SASE) connector to connect to your corporate intranet. You can also integrate Global Accelerator (GA) to provide your globally distributed employees with fast, stable, and secure access to internal corporate applications.

## Prerequisites

Before you begin, make sure that the following prerequisites are met:

-   You have activated **Secure Access Service Edge (SASE)**.
    
-   You have an Alibaba Cloud account and the required permissions to manage SASE, GA, VPC, and ECS.
    
-   The SASE client is installed on employee devices in the acceleration region.
    

## **Acceleration traffic workflow**

**Note**

The following figure shows an example of a user in Shanghai, China, accessing a service in Silicon Valley, USA.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/CAEQTxiBgMDO1vbF0xkiIDlmYjM3ODA5MjViYjQ3M2E4NjNiZmVjMGU3M2ZiNTM25849960_20251102100353.336.svg)

## **Costs**

When you enable GA, a pay-as-you-go GA instance is automatically created in [Global Accelerator (GA)](https://www.aliyun.com/product/ga). Be aware that this feature incurs additional fees.

## **Configure SASE identities and users**

### **Step 1: Create an identity source**

1.  Go to the [Identity Access](https://yundun.console.alibabacloud.com/?p=csas#/identityAccess) page and click the **Identity synchronization** tab.
    
2.  Click **Create IdP**. This topic uses a **Custom IdP** as an example.
    
    **Note**
    
    In a production environment, integrate SASE with your corporate Identity Provider (IdP), such as Active Directory (AD), LDAP, DingTalk, or WeCom.
    
    1.  In the **Basic Configurations** section, enter an **IdP Name** and a **Description**. Set **IdP Status** to **Enabled**. Click **Next**.
        
    2.  In the **Logon Settings** section, set **PC Logon Method** and **Mobile Device Logon Method**. This example uses the default configurations. You can enable **Two-factor Authentication** if needed.
        
    3.  After you confirm the settings, click **Confirm**.
        

### **Step 2: Create users and user groups**

1.  Go to the [Identity Access](https://yundun.console.alibabacloud.com/?p=csas#/identityAccess) page and click the **Employee Center** tab. From the drop-down list on the left, select the identity source that you created in the previous step. Click **Add User**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022562.png)
    
2.  In the Add User panel, enter the username, password, and other information. In the **Department** field, assign the user to a department.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022561.png)
    
3.  Click the **User Group Management** tab. Click **Create User Group**, enter a name such as `dev-group`, and select a **Group Scope** as needed.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022564.png)
    
4.  After you confirm the information, click **OK**.
    

## **Configure a connector to establish network connectivity**

To establish network connectivity with a SASE connector, deploy the connector in your on-premises data center or on a server or virtual machine from another cloud provider that hosts your business resources. Then, enable the connector instance.

### **Step 1: Add a** SASE **connector**

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas). In the navigation pane on the left, choose **Private Access** > **Network Settings**.
    
2.  On the **Non-Alibaba Cloud Services** tab, add a connector.
    
    1.  On the **Connectors** tab, click **Add Connector**.
        
    2.  In the **Add Connector** dialog box, configure the parameters as needed. Then, click **OK**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022597.png)
        
        **Parameter**
        
        **Description**
        
        **Region**
        
        The region of the connector. To ensure access quality, select the region closest to your server.
        
        **Instance Name**
        
        The name of the connector.
        
        **Instance Switch**
        
        SASE end users can access the applications associated with the connector only when the instance switch is set to **On**.
        
        You can also enable the instance in the connector list or on the connector **Details** panel.
        
        **Important**
        
        If you disable the connector instance, end users cannot access internal network applications using the SASE app. Proceed with caution.
        
        After the connector is added, it appears in the connector list.
        
3.  Enable GA.
    
    1.  Find the connector instance that you created. In the **Actions** column, click **Details**.
        
    2.  On the instance details page of the connector, find the **Global Acceleration** section and enable the feature.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022946.png)
        
    3.  In the **Enable GA** dialog box, enter the following information:
        
        **Important**
        
        When you enable GA for the first time, you are prompted to authorize the automatic creation of the service-linked roles **AliyunServiceRoleForGaCdt** and **AliyunServiceRoleForGaVpcEndpoint**. GA uses these roles to access your resources in SASE.
        
        **Parameter**
        
        **Description**
        
        **GA Instance Name**
        
        Required. Enter a name for the GA instance.
        
        **Important**
        
        GA fees include instance fees, capacity unit (CU) fees for performance capacity, and data transfer fees.
        
        **Resource Group**
        
        Select a resource group.
        
        **Terms of service**
        
        By clicking Submit, you agree to the relevant service agreements.
        
        After you confirm the information, click **Next**.
        
    4.  Configure the **Acceleration Region** and **Allocate Bandwidth**.
        
        **Parameter**
        
        **Description**
        
        **Acceleration Region**
        
        Configure the acceleration region. Select a region that is close to your users.
        
        **Note**
        
        The Dubai region is not supported as an acceleration region.
        
        **Allocate Bandwidth**
        
        The bandwidth can be set to a value from 2 to 10000. The following bandwidth allocation methods are supported:
        
        -   **Allocate Bandwidth by Region**: Customize the peak bandwidth for each acceleration region.
            
        -   **Batch Set**: Set a uniform peak bandwidth for all regions.
            
        
        After the configuration is complete, click **OK**. The acceleration instance takes some time to create.
        
    5.  After the acceleration instance is created, you can view its details on the details page.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022964.png)
        

### **Step 2: Deploy the connector on the business resource server**

1.  In the **Actions** column of the added connector, click **Deploy**. In the **Deploy** panel, obtain the deployment command.
    
2.  Log on to the server or virtual machine where you want to deploy the connector as the **root** user and run the deployment command. The **Deploy** panel also provides commands to upgrade or uninstall the connector and to export logs.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022595.png)
    
3.  After the deployment is complete, you can view information such as the instance ID in the instance information section of the details page. The instance status changes to **Connected**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022599.png)
    

### **Step 3 (Optional): Configure a managed object in the GA console**

If you require higher network transmission quality, you can follow these steps to change the **Transmission Network Type**.

1.  Go to the [Instances](https://ga.console.alibabacloud.com/list) page in the GA console and view the managed object and its status.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022600.png)
    
2.  If your account supports Cross-border Express Connect, the automatically created managed GA instance defaults to the **Cross-border Express Connect** mode. Otherwise, it defaults to the **BGP (Multi-ISP) Pro** mode.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022601.png)
    

### **Step 4: Add an endpoint in the application**

1.  Go to the [Application Management](https://yundun.console.alibabacloud.com/?p=csas#/application) page and click **Add Application**.
    
2.  In the **Basic Configuration** section, configure the following parameters:
    
    -   **Application Name**: Enter a name for the application.
        
    -   **Description**: Enter a description for the application.
        
    -   **Tags**: Select tags for the application.
        
    -   **Status**: Set the application status to **Enabled** or **Disabled**.
        
    -   **Access Mode**:
        
        -   **APP Access**: Users must install the SASE app to access office applications. This mode supports access to Layer 4 and Layer 7 applications, is suitable for employee office and O&M scenarios, and supports various endpoint security detection and control policies.
            
        -   **Browser-based Access**: Users can access corporate web apps using a browser without installing the SASE app. This mode does not support endpoint security detection and control policies.
            
3.  After you confirm the settings, click **Next**. On the **Application Address** page, enter the following information:
    
    -   **Application Address**: Enter the domain name or IP address of the application server.
        
    -   **Port**: Enter the port range for the application.
        
    -   **Description**: Enter a description for the application.
        
    -   **Protocol**: Select **TCP** or **UDP**.
        
    -   **Web Application Access Reinforcement** (Advanced Settings): Optional. Configure access hardening as needed.
        
4.  After you confirm the application address information, click **OK**.
    
5.  The configuration is complete, as shown in the following figure:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022602.png)
    
6.  Use the configured access mode, such as APP Access, to access the corresponding accelerated address and verify the connection.
    

### **Step 5: Configure a connector forwarding rule**

1.  On the **Connectors** tab, click **Forwarding Rules**.
    
2.  On the **Forwarding Rules** page, click **Create Policy**.
    
3.  In the **Create Policy** panel, configure the parameters as needed. Then, click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022598.png)
    
    **Parameter**
    
    **Description**
    
    **Policy Name**
    
    The name of the connector forwarding rule.
    
    **Description**
    
    The description of the policy.
    
    **Priority**
    
    The policy priority. The value can be from 1 to 100. A smaller value indicates a higher priority.
    
    **Policy Details**
    
    Add the users to which the policy applies and the associated applications.
    
    **Associated Connector**
    
    Select the connector to associate with the policy.
    
    **Policy Status**
    
    The policy takes effect only when its status is **Enabled**.
    

### **Step 6: Configure a zero trust policy**

1.  On the [Zero Trust Policy](https://yundun.console.aliyun.com/?spm=5176.12818093_47.overview_recent.2.57ea2cc9ukDRn7&p=csas#/accessControl/zeroTrustStrategy) page, click **Create Policy**.
    
2.  In the **Create Policy** panel, configure the parameters as needed. Then, click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Policy Name**
    
    The name of the zero trust policy.
    
    **Description**
    
    The description of the policy.
    
    **Priority**
    
    The policy priority. The priority can be a value from 1 to 45. The value cannot start with 0.
    
    **Action**
    
    You can set this to **Allow** (default) or **Prohibit**.
    
    **Policy Details**
    
    Add the users to which the policy applies and the associated applications.
    
    **Trusted Process**
    
    Disabled by default.
    
    **Note**
    
    If you enable this feature, the zero trust gateway checks whether the process that initiates the access is a trusted process. Access from untrusted processes is blocked.
    
    **Security Baselines**
    
    Select a security baseline. This parameter is optional.
    
    **Trigger Templates**
    
    Select a trigger template. This parameter is optional.
    
    **Policy Status**
    
    Enabled by default. The policy takes effect only when its status is **Enabled**.
    

## **Add a private access whitelist**

If you do not want to audit traffic for specific IP addresses or domain names, you can add them to a private access whitelist.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1023183.png)

Perform the following steps:

1.  Go to the [Whitelist](https://yundun.console.aliyun.com/?spm=5176.12818093_47.overview_recent.3.57ea2cc9U17fbg&p=csas#/setting/tab_whitelist) page and click the **Private Access** tab.
    
2.  In the **IP Address Whitelist** section, add the IP addresses that you want to whitelist. You can add multiple IP addresses.
    
3.  In the **Domain Name Whitelist** section, add the domain names that you want to whitelist. You can add multiple domain names.
    
4.  After you add the entries, click **Submit**.
    

## **Private access audit**

Go to the [General Logs](https://yundun.console.aliyun.com/?spm=5176.12818093_47.overview_recent.1.57ea2cc9Lhovuq&p=csas#/logAudit/pa_access_audit/pa_normal_log) page under **Private Access Audit**. On this page, you can search for and view logs after a client accesses an application.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022603.png)

## **Network diagnostics**

### **Create a diagnostic task**

1.  Go to the [Network Diagnostics](https://yundun.console.alibabacloud.com/?p=csas#/networkDiagnostics) page and click **Create Task**.
    
2.  In the panel that appears, configure the following parameters:
    
    -   **Task Type**: Select **End-to-end Diagnostics** or **Application Diagnostics**. For an office acceleration diagnostic task, select Full-link Diagnostics.
        
    -   **Task Object**: Specify the objects for this diagnostic task. You can add multiple objects.
        
        -   **Username**: Select a user.
            
        -   **Application Protocol**: You can select TCP or UDP.
            
        -   **Application Address**: Enter the domain name or IP address and the port number of the application.
            
    -   **Access Point**: The default value is **Automatic Selection**. You can also manually specify an access point.
        
3.  After you confirm the information, click **OK**.
    

### **View diagnostic results**

1.  Go to the [Network Diagnostics](https://yundun.console.alibabacloud.com/?p=csas#/networkDiagnostics) page and find the diagnostic task that you created in the task list.
    
2.  Click **View** in the Actions column to view the detailed diagnostic results.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022604.png)
