Secure Access Service Edge (SASE) provides a security client that redirects Internet traffic from corporate devices to the nearest Alibaba Cloud SASE service node. Devices that do not have the security client installed cannot be managed by zero-trust policies. This topic describes how to configure account information, whitelists, and message push notifications. It also explains how to install and customize the SASE security client.

## Background information

After corporate employees install the SASE security client on their devices, an administrator can view the total number of devices with the client installed and the details of each device in the terminal list. The administrator can also use the terminal list to quickly identify users and devices that do not have the security client installed. For more information, see [View the terminal list](/help/en/sase/user-guide/view-terminals#task-2040009).

After a corporate employee successfully logs on to the SASE security client, the Internet traffic from the device is forwarded through SASE. SASE then detects and manages the device's Internet access behavior.

## Configure account information

The **Account Settings** tab has three sections for configuring the enterprise authentication identifier, account expiration time, and account expiration policy.

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, click **Settings**.
    
3.  On the **Account Settings** tab, configure the following information.
    
    -   Set **Enterprise Authentication Identifier**
        
        The enterprise authentication identifier is an important credential that your corporate employees need to successfully log on to the SASE security client. We recommend that you use information that is easy for end users to remember, such as the enterprise name. End users must manually enter this identifier the first time they log on to the SASE security client.
        
    -   Set account expiration information
        
        -   **Account Authentication Frequency**
            
            This setting specifies the duration after a user's last logon during which the SASE security client can automatically log on after the device starts. If this time is exceeded, the logon page is displayed, and the user must re-enter their username and password to log on to the SASE security client.
            
        -   **Account Authentication Policy**
            
            -   **Immediate authentication**
                
                When the account expires, the SASE security client is immediately logged off. The corporate employee must re-enter their username and password for authentication. This configuration prioritizes security and may interrupt the user's work.
                
            -   **Authentication During Network Change**
                
                When the account expires, the SASE security client is not immediately logged off. The corporate employee must re-enter their username and password for authentication the next time the device wakes from sleep or the network connection changes. This configuration prioritizes user experience and does not interrupt the user's work.
                
    

## Configure whitelists

If you confirm that access to certain internal applications and public websites, along with outbound files, connected peripherals, and watermark information, is secure, you can add them to a whitelist. This prevents SASE from managing or auditing these activities. The following steps describe how to configure whitelists.

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, click **Settings**.
    
3.  On the **Whitelist** tab, configure a private access whitelist or a data protection whitelist.
    
    -   Configure a private access whitelist
        
        1.  On the **Private Access** tab, add a website to the whitelist.
            
            SASE provides two ways to add a website to the whitelist:
            
            -   **IP Address Whitelist**: Add the IP address or IP address range of the website. You can add multiple IP addresses or address ranges.
                
            -   **Domain Name Whitelist**: Add the domain name or wildcard domain name of the website. You can add multiple domain names or wildcard domain names.
                
        2.  Click **Submit**.
            
            After the whitelist is added, corporate users can directly access the internal applications in the whitelist.
            
    -   Configure a data protection whitelist
        
        1.  On the **Data Protection** tab, add a whitelist for specified files, data storage buckets, peripherals, or watermarks.
            
            SASE supports the following types of whitelists. Separate multiple entries with a comma (,).
            
            -   **Outbound File Transfer Whitelist**
                
            -   **Screen Watermark Whitelist**
                
            -   **Application Watermark Whitelist**
                
            -   **Print Watermark Whitelist**
                
            
        2.  Click **Submit**.
            
            After the whitelist is added, SASE no longer manages or blocks the activities of whitelisted users. If an outbound detection policy is triggered for a user on a storage bucket whitelist, the corresponding files are not stored.
            
    -   Configure an Internet behavior management whitelist
        
        1.  On the **Internet Behavior Management** tab, add users, user groups, and domain names to a whitelist.
            
            -   **User Whitelist**
                
            -   **User Group Whitelist**
                
            -   **Exception Domain Name**
                
        2.  Click **Submit**.
            
            After the whitelist is added, SASE no longer manages or blocks the Internet behavior of the whitelisted users and user groups, or access to the whitelisted domain names.
            
    

## Configure message push

To receive timely notifications for end-user logon logs, device registration information, client uninstallation requests, and requests to use disabled software, you can configure the message push feature. After a successful configuration, messages about the end users you follow are automatically pushed to your corporate group through DingTalk, WeCom, or Lark robots. This helps you track these events in real time.

Before you configure message push in SASE, you must create a custom robot for DingTalk, WeCom, or Lark.

-   For more information about how to create a custom DingTalk robot and obtain its webhook and webhook key, see [Custom DingTalk robots](https://open.dingtalk.com/document/robots/custom-robot-access?spm=0.2020520154.0.0.2e6fORTyORTysM).
    
-   For more information about how to create a custom WeCom robot and obtain its webhook, see [Custom robots for WeCom groups](https://open.work.weixin.qq.com/help2/pc/14931?spm=0.2020520154.0.0.2e6fORTyORTysM).
    
-   For more information about how to create a custom Lark robot and obtain its webhook and webhook key, see [Custom Lark robots](https://open.feishu.cn/document/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN?spm=0.2020520154.0.0.2e6fORTyORTysM#7a28964d).
    

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, click **Settings**.
    
3.  On the **Message Push** tab, click **Create Template**.
    
4.  In the **Create Template** panel, configure message push based on your data source.
    
    **Configuration Item**
    
    **Description**
    
    **Notification Source**
    
    -   **DingTalk Chatbot**
        
    -   **WeCom Chatbot**
        
    -   **Lark Chatbot**
        
    
    **Chatbot Configuration**
    
    -   **Ding Talk Webhook URL**
        
        Example: https://oapi.dingtalk.com/robot/send?access\_token=\*\*\*\*
        
    -   **Webhook Key**
        
        Example: 123456
        
    
    **WeCom Webhook URL**
    
    Example: https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=90e25f1d-99b5-4496-890d-4d1c6efe3\*\*\*\*
    
    -   **Lark Webhook URL**
        
        Example: https://open.feishu.cn/open-apis/bot/v2/hook/4c83950f-2335-42ae-a5bd-11a96d6d\*\*\*\*
        
    -   **Webhook Key**
        
        Example: 123456
        
    
    **Message Type**
    
    The following message types are supported. You can select multiple types.
    
    -   **Notification of Client Log Report**
        
    -   **Notification of Exceeded Registration Quota on Client**
        
    -   **Notification of Application for Client Uninstallation**
        
    -   **Application for Using Unauthorized Software**
        
    -   **Notification of Abnormal Connector**
        
    -   **Terminal Alert**
        
    
5.  Click **Connectivity Test**. When a success message is displayed, click **OK**.
    
    To modify or delete the template later, you can click **Edit** or **Delete** on the **Message Push** tab.
    
    **Important**
    
    After you delete a message push template, SASE will no longer automatically push messages to your corporate group. Proceed with caution.
    

## Configure client corporate elements

SASE supports custom branding elements. You can customize corporate elements for the Chinese and English versions of the client, download page, browser authentication page, and help guide. The following steps use the Chinese version as an example to demonstrate how to customize these elements.

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, click **Settings**.
    
3.  On the **Enterprise Elements** tab, configure the related settings.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9947628571/p1008982.png)
    
    ### **Custom Client Elements**
    
    1.  Click **Custom Client Elements**.
        
    2.  On the **中文版设置** and **English Client Settings** tabs, configure the **LOGO**, **Background Image**, **Title**, and **Promotion Text** for the Chinese and English versions of the client. You can preview your changes on the right side of the page.
        
    3.  After the configuration is complete, click **OK**.
        
    
    ### **Custom Elements on Client Download Page**
    
    1.  Click **Custom Elements on Client Download Page**.
        
    2.  On the **中文版设置** and **English Client Settings** tabs, configure the **LOGO**, **Logo Name**, **Title**, **Description** for the Chinese and English versions of the client download page. You can preview your changes on the right side of the page.
        
    3.  After the configuration is complete, click **OK**.
        
    
    ### **Customize Browser Authentication Page Elements**
    
    1.  Click **Customize Browser Authentication Page Elements**.
        
    2.  On the **中文版设置** and **English Client Settings** tabs, configure the **LOGO**, **Background Image**, and **Title** for the Chinese and English versions of the browser authentication page. You can preview your changes on the right side of the page.
        
    3.  After the configuration is complete, click **OK**.
        
    
    ### **Guide**
    
    The help guide feature improves user experience by helping users quickly understand and efficiently use product features. These guides can take various forms, such as new user guides, operational tips, or Frequently Asked Questions (FAQs). Users can access these guides from the client at any time to learn how to use the product.
    
    1.  Click **Guide**.
        
    2.  On the **中文版设置** and **English Client Settings** tabs, configure the **Title**, **Description**, and **URL** for the Chinese and English versions of the help guide, and then click **OK**.
        
    3.  Log on to the SASE client.
        
    4.  In the **Settings** > **Toolbox** menu, you can view the configured help guide.
        
        **Important**
        
        Make sure that your SASE App version is v4.8.5 or later.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9947628571/p1008855.png)
        
    

## **Configure custom storage**

During the outbound detection process, trace data is stored in the cloud by default. To enhance data security and control, the Data Protection edition of SASE Internet Access Security supports custom storage configurations. This feature lets you store trace data in your own Object Storage Service (OSS) bucket or in a local MinIO storage system.

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, click **Settings**.
    
3.  On the ****Custom Storage Settings**** tab, view the built-in storage usage, click the switch icon, and then click **OK**.
    
4.  In the **Data Storage Settings** dialog box, configure your purchased Alibaba Cloud OSS bucket or local MinIO storage system. For configuration details, see the following table.
    
    **Configuration Item**
    
    **Description**
    
    **Custom Storage Type**
    
    -   **Alibaba Cloud OSS**: Configure your purchased Alibaba Cloud OSS bucket.
        
    -   **On-premises MinIO Storage System**: Transfers data to your local storage space. Only MinIO storage systems are currently supported.
        
        **Note**
        
        1\. If you store data in a local MinIO system, you must encrypt the data in MinIO to reduce the security risks associated with storing data in plaintext.
        
        2\. If files are stored in a local MinIO system and the system cannot connect to the Alibaba Cloud SASE platform, you cannot download the original files from the trace logs in the console. In this case, you must find the file storage address in the logs and download the original files from your local MinIO system.
        
        3\. The Optical Character Recognition (OCR) detection engine of SASE currently runs in the cloud. Image files are uploaded to the cloud for detection. However, SASE does not store your enterprise's outbound image data.
        
    
    **Bucket**
    
    Set the bucket for the storage space.
    
    **Endpoint**
    
    Set the endpoint for the storage space. Both HTTP and HTTPS protocols are supported.
    
    **Important**
    
    We recommend that you configure the HTTPS protocol. Otherwise, you may need to configure your browser settings to view screenshot evidence or download source files.
    
    **AccessKeyid**
    
    Set the AccessKey ID for the storage space. Enter an AccessKey ID that has data download permissions. This avoids being unable to download original files from the Sensitive File Detection page of Log Audit.
    
    **AccessKey Secret**
    
    Set the AccessKey secret for the storage space.
    
    **Maximum Size**
    
    Set the storage size for a single file. The maximum size is 60 MB.
    
5.  Click **Test Network Connectivity** to verify the connection to the storage space.
    
6.  Click **Confirm**.
    
    After the configuration is complete, custom data storage is automatically enabled. Data files that trigger an outbound detection policy are stored in your specified data storage space.
    
    To disable custom data storage, toggle the switch to the off position. After it is disabled, data files that trigger an outbound detection policy are stored in the built-in storage space of SASE. Ensure that the built-in storage capacity is sufficient to prevent data loss.
    

### **Other operations**

If your built-in storage space is insufficient, you can **Activate** or Clear the storage space.

-   **Activate**: Click **Activate**. On the SASE purchase page, purchase file storage capacity.
    
-   **Clear**: Click **Clear**. In the **Clear Logs** dialog box, you can set **Clear by Time Range** or ****Clear** All**. Then, click **OK**.
    

## Download the SASE security client (SASE App)

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, click **Settings**.
    
3.  On the ****Download Client**** tab, download the client installation package as prompted.
    
    Downloads are available for **PC**, **Mobile**, and **Enterprise-specific Version**.
    
4.  Decompress the downloaded client installation package and double-click the setup.exe installer to start installing the security client.![安装程序](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6664020371/p241225.png)
    
    After the installation is complete, the SASE security client icon appears on the user's desktop.
    

## Upgrade the SASE security client (SASE App)

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, click **Settings**.
    
3.  On the **Client Update** tab, select the client's operating system.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0094033371/p836841.png)
    
4.  Under the tab for your operating system, select the SASE App version to download. In the **Actions** column, click **Download** and download the installation package.
    
5.  To push an upgrade task to corporate employees, click **Push Upgrade**, configure an upgrade task, and then click **OK**.
    
    You can set a custom upgrade percentage. The upgrade is randomly rolled out to a percentage of the total devices that belong to the users in the specified user group.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0094033371/p836844.png)
    

## **Traffic redirection settings**

The default back-to-origin IP addresses that SASE assigns to each VPC may overlap with the IP address range of your corporate intranet applications. This can cause route conflicts or access failures. To avoid this issue, you can configure custom proxy IP addresses.

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, click **Settings**.
    
3.  On the **Traffic Redirection Settings** tab, configure the proxy IP addresses for different operating systems. Then, click **Submit**.
    
    **Important**
    
    -   Only internal IP addresses can be configured as proxy IP addresses.
        
    -   If your corporate intranet applications have firewalls or security control policies deployed, make sure that the SASE back-to-origin IP addresses are added to the allowlists of these policies to prevent traffic from being blocked.
