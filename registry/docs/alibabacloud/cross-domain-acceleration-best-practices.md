This topic describes how to configure an Alibaba Cloud Secure Access Service Edge (SASE) connector to integrate with Global Accelerator (GA). This setup provides a fast, stable, and secure accelerated experience for your employees across different locations.

## **Prerequisites**

Before you begin, make sure that you meet the following requirements:

-   **SASE** is activated.
    
-   An Alibaba Cloud account with permissions to manage SASE, GA, VPC, and ECS is available.
    
-   The SASE client is installed on your employees' devices.
    

## **Acceleration traffic w****orkflow**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8225682671/CAEQTxiBgID3ztbL0xkiIDIyOTU4MWRmZGNlYzQ1ZjFiZGE0Mzg3ZGRkNjRhZjcw5849960_20251102100353.336.svg)

## **Costs**

When you enable GA, a pay-as-you-go GA instance is automatically created in [Global Accelerator (GA)](https://www.aliyun.com/product/ga). This action incurs additional costs.

## **Configure SASE identities and users**

### **Step 1: Create an identity source**

1.  Go to the [Identity Access](https://yundun.console.alibabacloud.com/?p=csas#/identityAccess) page and click the **Identity synchronization** tab.
    
2.  Click **Create IdP**. This topic uses a **Custom IdP** as an example.
    
    **Note**
    
    In a production environment, integrate SASE with your enterprise Identity Provider (IdP), such as Active Directory (AD), LDAP, DingTalk, or WeCom.
    
    1.  In the **Basic Configurations** section, enter an **IdP Name** and **Description**. Set **IdP Status** to **Enabled**. Click **Next**.
        
    2.  In the **Logon Settings** section, set **PC Logon Method** and **Mobile Device Logon Method**. This example uses the default configurations. As needed, you can enable **Two-factor Authentication**.
        
    3.  After you confirm the configurations, click **Confirm** to create the identity source.
        

### **Step 2: Create users and user groups**

1.  Go to the [Identity Access](https://yundun.console.alibabacloud.com/?p=csas#/identityAccess) page and click the **Employee Center** tab. From the drop-down list on the left, select the identity source that you created in the previous step. Click **Add User**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022562.png)
    
2.  In the Add User panel, enter the username, password, and other information. Assign the user to the target identity source in the **Department** field.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022561.png)
    
3.  Click the **User Group Management** tab. Click **Create User Group**, enter a name such as `dev-group`, and select a **Group Scope** as needed.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022564.png)
    
4.  After you confirm the information, click **OK**.
    

## **Configure a connector to establish network connectivity**

Use an SASE connector to establish network connectivity. Deploy the connector on a server at your cross-domain egress point. Then, enable the connector instance, and configure and enable the GA instance.

### **Step 1: Add an** SASE **connector**

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas). In the navigation pane on the left, choose **Private Access** > **Network Settings**.
    
2.  On the **Non-Alibaba Cloud Services** tab, add a connector.
    
    1.  On the **Connector List** tab, click **Add Connector**.
        
    2.  In the **Add Connector** dialog box, specify the parameters as needed. Then, click **OK**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022597.png)
        
        **Parameter**
        
        **Description**
        
        **Region**
        
        The region of the connector. To ensure access quality, select the region that is closest to your server.
        
        **Instance Name**
        
        The name of the connector.
        
        **Instance Switch**
        
        SASE end users can access applications associated with the connector only when the instance switch is set to **On**.
        
        You can also turn on the instance switch in the connector list or on the **Details** panel of the connector.
        
        **Important**
        
        If you turn off the instance switch, end users cannot use the SASE app to access internal applications. Proceed with caution.
        
        After the connector is added, you can view its details in the connector list.
        
3.  Enable Global Accelerator.
    
    1.  Find the connector instance that you created and click **Details** in the **Actions** column.
        
    2.  On the instance details page of the connector, find the **Global Acceleration** section and enable it.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022946.png)
        
    3.  In the **Enable GA** dialog box, enter the following information:
        
        **Important**
        
        When you enable Global Accelerator for the first time, you are prompted to authorize the automatic creation of the service-linked roles **AliyunServiceRoleForGaCdt** and **AliyunServiceRoleForGaVpcEndpoint**. GA uses these roles to access your resources in SASE.
        
        **Parameter**
        
        **Description**
        
        **GA Instance Name**
        
        Required. The name of the Global Accelerator instance.
        
        **Important**
        
        The fees for Global Accelerator include instance fees, performance capacity unit (CU) fees, and data transfer fees.
        
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
        
        The bandwidth can be from 2 to 10,000. The following bandwidth allocation methods are supported:
        
        -   **Allocate Bandwidth by Region**: Specify a peak bandwidth for each acceleration region.
            
        -   **Batch Set**: Specify a uniform peak bandwidth for all regions.
            
        
        After you complete the configuration, click **OK**. The acceleration instance takes some time to be created.
        
    5.  After the acceleration instance is created, you can view its information on the details page.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022964.png)
        

### **Step 2: Deploy the connector on the cross-domain Internet egress point**

1.  Click **Deploy** in the **Actions** column for the connector that you added. On the **Deploy** panel, obtain the command to deploy the connector.
    
2.  Log on to the server or virtual machine where you want to deploy the connector as the **root** user and run the deployment command. On the **Deploy** panel, you can also find commands to upgrade the connector, uninstall the connector, and export logs.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022595.png)
    
3.  After the deployment is complete, you can view information, such as the instance ID, on the instance details page. The instance status is **Connected**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022599.png)
    

### **Step 3: Configure an enterprise acceleration policy**

1.  On the [Resource Access Management](https://yundun.console.alibabacloud.com/?p=csas#/accessControl/) page, click the **Enterprise Acceleration** tab, and then click **Create Policy**.
    
2.  In the **Create Policy** panel, specify the parameters as needed. Then, click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Policy Name**
    
    The name of the enterprise acceleration policy.
    
    **Description**
    
    The description of the policy.
    
    **Priority**
    
    The policy priority. Valid values: 1 to 100. A smaller value indicates a higher priority.
    
    **Acceleration Instance**
    
    The following instance types are supported:
    
    -   **CEN**: Enter the **Instance IP Address** and **Instance Port**.
        
    -   **Connector**: Select a connector instance.
        
        **Note**
        
        Select the connector instance that you created in the [Add an SASE connector](#75c50d0dd7sk3) step.
        
    
    **Acceleration Mode**
    
    The following modes are supported:
    
    -   **Global Acceleration**: All Internet traffic is forwarded to the accelerated connection. The acceleration stops after an employee clicks the 'Stop Acceleration' button in the app.
        
    -   **Custom Acceleration**: After you add the policy, configure custom acceleration addresses. Only traffic to the specified address range is forwarded through the accelerated connection.
        
    
    **Accelerated User Group**
    
    Select the user groups to which the acceleration applies. You can select multiple user groups.
    
    **Display on Client**
    
    If you select this option, employees can select different acceleration policies on the client.
    
3.  If you set **Acceleration Mode** to **Custom Acceleration**, you must configure acceleration addresses. To do so, perform the following steps:
    
    1.  In the policy list, find the policy that you created and click **Accelerated URL** in the **Actions** column.
        
    2.  In the **Accelerated URL** panel, click **Add Accelerated URL**. Configure the acceleration addresses as described in the following table:
        
        **Parameter**
        
        **Description**
        
        **Acceleration Address**
        
        Manually enter acceleration addresses. You can add up to 500 addresses.
        
        **Batch Upload**
        
        You can use a template file to upload acceleration addresses in batches. The file must be in the .xlsx format and cannot exceed 100 MB in size.
        
    3.  After you confirm the information, click **OK**.
        

### **Step 4 (Optional): Configure managed objects in the GA console**

If you have higher requirements for network transmission quality, you can follow these steps to change the **Transmission Network Type**.

1.  Go to the [Instances](https://ga.console.alibabacloud.com/list) page in the Global Accelerator console to view the managed objects and their statuses.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022600.png)
    
2.  If your account supports **Cross-border Express Connect**, the automatically created managed GA instance defaults to the Cross-border Express Connect mode. Otherwise, it defaults to the **BGP (Multi-ISP) Pro**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6604682671/p1022601.png)
    

## **Add an enterprise acceleration whitelist**

If you do not want to audit enterprise acceleration for access to specific domain names or by specific users, you can add these domain names or users to an enterprise acceleration whitelist.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8225682671/p1023056.png)

1.  Go to the [Whitelist](https://yundun.console.aliyun.com/?spm=5176.12818093_47.overview_recent.3.57ea2cc9U17fbg&p=csas#/setting/tab_whitelist) page and click the **Enterprise Acceleration** tab.
    
2.  In the **Domain Name Whitelist** section, add the domain names that you want to whitelist as needed. You can add multiple domain names.
    
3.  In the **User Whitelist** section, add the usernames that you want to whitelist as needed. You can add multiple users.
    
    **Important**
    
    For users on the enterprise acceleration whitelist, the **Network Acceleration** page is not displayed in the **Network** section of the SASE client.
    
4.  After you add the items, click **Submit**.
    

## **Log audit**

Go to the [Acceleration Logs](https://yundun.console.alibabacloud.com/?p=csas#/logAudit/pa_access_audit/acceleration_log) page. After a client accesses an application, you can search the internal network logs to view the corresponding acceleration log.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8225682671/p1024021.png)
