The infrastructure security of Elastic Desktop Service (EDS) Enterprise covers both application and system security. Additionally, EDS Enterprise can integrate with the Secure Access Service Edge (SASE) platform to offer complimentary basic security services (free), such as antivirus scanning for cloud computers, as well as premium features (paid) like integrated office security protection and audit capabilities.

## 01 Application security

### 1.1 Application sandbox mode

EDS Enterprise of Alibaba Cloud Workspace provides secure software distribution through the **Apps** page and the built-in Application Center. The Application Center comes preloaded with over 200 verified office applications, which administrators can enforce or allow end users to install independently. This eliminates risks like malware or pirated software from untrusted sources. Additionally, enterprises can upload their own applications.

Sandbox mode: Some applications in the Application Center run in a sandboxed environment. Instead of being fully installed on the cloud computer, they are dynamically mounted, enabling instant installation and removal, minimizing system impacts, and ensuring a clean and lightweight system.

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: Only cloud computers whose images are of V2.1.0 or later support automatic uninstallation of sandbox applications.
    
-   References: [Enable automatic installation and automatic uninstallation](/help/en/wuying-workspace/user-guide/manage-self-managed-applications#sc-configure-auto-install-uninstall)
    

**Configuration or usage**

#### **Upload an application**

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Apps & Drivers** > **Apps**. Click the **Applications** tab.
    
3.  On the **Apps** page, click **Add**.
    
4.  In the **Upload App** panel, configure the parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    Application Type
    
    The type of the application that you want to upload. Valid values: **Cloud Computer Apps** and **Web Apps**.
    
    Name
    
    The name of the application.
    
    Version
    
    The version of the application.
    
    Developer
    
    The developer of the application.
    
    Description
    
    The purpose and features of the application.
    
    Details
    
    The detailed information about the application.
    
    Icon
    
    The icon of the application. Click **Upload** and select an image from your on-premises computer as the application icon.
    
    **Note**
    
    You can upload a PNG, SVG, JPG, or JPEG image. The image size cannot exceed 1 MB.
    
    Category
    
    The category into which the application falls. Select a value from the drop-down list.
    
    Application Tag
    
    The tags that you want to add to the application. You can quickly search for an application by tag. You can add up to five tags.
    
    Upload Method
    
    The installation method of the application. This parameter is required if you set the Application Type parameter to Cloud Computer Apps.
    
    You can select **Upload File** or **Use OSS Object URL** based on your business requirements.
    
    -   Upload a file
        
        Select **Upload File**, click **View Local File**, and then select a desired file.
        
        **Note**
        
        You can upload only an EXE, MIS, or ZIP file. The file size cannot exceed 5 GB. If the size of the file that you want to upload exceeds 5 GB, we recommend that you select Use OSS Object URL.
        
    -   Use an OSS object URL
        
        1.  Select **Use OSS Object URL**.
            
        2.  Obtain an Object Storage Service (OSS) object URL. You can move the pointer over the question mark (?) next to **Use OSS Object URL** and click **the help documentation** in the tooltip that appears to learn how to obtain an OSS object URL.
            
            ![bt_get_oss_link.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5565576271/p820706.png)
            
        3.  In the **Use OSS Object URL** field, enter the OSS object URL that you obtained in the previous step.
            
    
    Application URL
    
    The URL of the application. This parameter is required if you set the Application Type parameter to Web Apps.
    
    You need to enter the URL of the web application.
    
    Privilege Escalation for Application Installation
    
    After you turn on Privilege Escalation for Application Installation, you can install the application even if you do not have local administrator permissions.
    
    **Note**
    
    Only cloud computers whose images are of V2.0.0 or later support this feature.
    
    Registration Terms
    
    Select **I have read and agree to Non-Infringement Commitment and Disclaimer**.
    

#### **Set application visibility**

You can use the Application Visibility and Select User parameters to specify whether an application is visible and specify the users to which the application is visible.

1.  In the left-side navigation pane, choose **Apps & Drivers** > **Apps**. Click the **Applications** tab.
    
2.  On the **Apps** page, find one or more applications and perform the following operations based on your business requirements:
    
    -   Single application: Find the desired application and click **Configure Visibility** in the **Actions** column.
        
    -   Multiple applications: Select multiple applications and click **Batch Configure Visibility** in the lower part of the page.
        
3.  In the **Configure Visibility** panel or the **Batch Configure Visibility** panel, perform the following operations based on your business requirements:
    
    -   If you want to make the applications invisible to all users, turn off **Configure Visibility**.
        
    -   If you want to make the applications visible to all users, turn on **Configure Visibility** and select **All User** for the Select User parameter.
        
    -   If you want to make the applications visible to specified users, turn on **Configure Visibility** and select **Specific User** for the Select User parameter.
        
4.  Click **OK**.
    

#### **Enable automatic installation and uninstallation**

Sandbox applications provided by EDS support automatic installation and automatic uninstallation.

1.  In the left-side navigation pane, choose **Apps & Drivers** > **Apps**. Click the **Applications** tab.
    
2.  Perform the following operations based on your business requirements:
    
    ##### **Automatic installation**
    
    1.  On the **Apps** page, find one or more applications and perform the following operations based on your business requirements:
        
        -   Single application: Find the desired application and click **Auto Installation** in the **Actions** column.
            
        -   Multiple applications: Select multiple applications and click **Batch Auto Installation** in the lower part of the page.
            
    2.  In the **Auto Installation** panel or the **Batch Auto Installation** panel, perform the following operations based on your business requirements:
        
        -   If you want to enable automatic installation for all users, select **All User**.
            
        -   If you want to enable automatic installation for specified users, select **Specific User**, and select an account type and specific users.
            
    
    ##### **Automatic uninstallation**
    
    **Note**
    
    Only cloud computers whose images are of V2.1.0 or later support automatic uninstallation of sandbox applications.
    
    1.  On the **Apps** page, find one or more applications and perform the following operations based on your business requirements:
        
        -   Single operation: Click **Automatically Uninstall** in the **Actions** column of an application.
            
        -   Batch operation: Select multiple applications and click **Batch Automatically Uninstall** in the lower part of the page.
            
    2.  In the **Automatically Uninstall** panel, perform the following operations based on your business requirements:
        
        -   If you want to enable automatic uninstallation for all users, select **All User**.
            
        -   If you want to enable automatic uninstallation for specified users, select **Specific User**, and select an account type and specified users.
            
    
3.  Click **OK**.
    

## 02 System security

### 2.1 OTA update

EDS Enterprise enables secure and efficient system software updates via Over-The-Air (OTA). Before implementing an update, the system updater verifies the integrity and signature validity of the update package (whether downloaded OTA or copied offline) to prevent unauthorized modifications.

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
    

### 2.2 SASE integration

Integrating the SASE platform into Alibaba Cloud Workspace's cloud computer images boosts security and office behavior audit.

-   **Integrated office security protection**
    
    Provides unified security management for enterprise mobile and branch offices. Key features include:
    
    -   Zero trust private network access: This feature employs an Alibaba Cloud-developed HTTPS-based protocol to enable dynamic identity authentication. It enforces least-privilege access control for device-to-device communication over TCP and device-to-application communication over HTTP and HTTPS. Unlike traditional VPNs, private access offers faster connectivity, more efficient O&M, easier deployment, and stronger security.
        
    -   Office network access: This feature enables secure 802.1x-based network access by using certificates. No manual username, password, or certificate import is required. Simply install the SASE client for automatic and secure connectivity. The SASE client enhances office network security and convenience while supporting account-password authentication for dumb terminals and whitelisted devices. This enables printers, IoT devices, and other equipment to securely access office networks, simplifying access control management.
        
    -   Office data protection: This feature employs a cloud-based file analysis engine, ensuring efficient operation without consuming terminal resources. It audits and stores sensitive data transferred outbound from terminals, generating alerts for such transfers. Supported outbound methods include portable storage devices, instant messaging (IM) tools, emails, HTTP/FTP transfers, printing and burning, and cloud storage services. This feature also recognizes over 100 file types and includes 60+ built-in sensitive information dictionaries, enhancing office data security.
        
-   **Integrated office behavior audit**
    
    Supports full-scene office behavior audits, making employee activities visible, trackable, and manageable. Key features include:
    
    -   Real-time access logs: This feature monitors and displays access logs across multiple dimensions to track and manage employee activities in real time.
        
    -   Internet access behavior audit: This feature enables real-time, multi-dimensional monitoring of employees' online activities, ensuring compliance with the Cybersecurity Law and other data protection regulations. It supports real-name auditing to enhance accountability and security.
        
    -   Internal network access audit: This feature enables real-name tracking of employee internal network activities. All access logs are retained for six months to comply with internal audit requirements.
        

For more information about SASE, see [What is SASE?](/help/en/sase/product-overview/what-is-sase)

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: partially free + partially paid For more information, see [Billing overview of Secure Access Service Edge](/help/en/sase/product-overview/billing-overview).
    
-   Dependent services: SASE
    
-   Conditions: The feature is in invitational preview. If you want to use this feature, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373).
    
-   References: [Enable security protection](/help/en/wuying-workspace/user-guide/antivirus) and [Data protection](/help/en/sase/user-guide/data-protection/).
    

**Configuration or usage**

#### **Enable anti-virus**

1.  Log on to the [EDS Enterprise](https://home.console.alibabacloud.com/?spm=a3c0i.7911826.6791778070.30.204e2129G9M9nD) console.
    
2.  In the left-side navigation pane, choose **Security & Audits** > **Antivirus**.
    
3.  The first time you enable anti-virus, click **Enable Now** and then click **Add More**.
    
4.  In the **Select an office network** dialog box, select the region and office network for which you want to enable anti-virus and click **OK**.
    
5.  In the **Virus Defense** section, click **Scan Now**.
    

**Note**

The first time you enable anti-virus, click **OK** in the **Note** message.

6.  In the **Specify a scan scope** panel, specify the account type and scan scope and click **OK**.
    

#### **Scan for viruses**

1.  Log on to the [EDS Enterprise](https://home.console.alibabacloud.com/?spm=a3c0i.7911826.6791778070.30.204e2129G9M9nD) console.
    
2.  In the left-side navigation pane, choose **Security & Audits** > **Antivirus**.
    
3.  Perform one of the following operations as needed:
    

#### **Scan now**

1.  In the Virus Defense section, click **Scan Now**.
    
    The first time you scan for viruses, click **OK** in the **Note** message.
    
2.  In the **Specify a scan scope** panel, specify the account type and scan scope and click **OK**.
    

#### **Scan as scheduled**

1.  In the **Virus Defense** section, click **Scheduled Scan**.
    
2.  On the **Scheduled Scan** page, click **Create** **Scheduled Scan**.
    

**Note**

The first time you scan for viruses, click **OK** in the **Note** message.

3.  In the **Create Scheduled Scan** panel, configure the following parameters as needed and click **OK**.
    

**Parameter**

**Description**

Task Name

The name of the custom scheduled scan task. It must be no longer than 128 characters and can only include letters, numbers, underscores (\_), and hyphens (-).

Execution Frequency

Specifies how often the scheduled scan task runs (such as every 3 days) and the time range for each execution (such as 00:00:00 to 06:00:00).

Account Type

The type of end user account, including **Convenience Account** and **AD Account**. If **AD Account** is selected, you must also specify the **AD Domain**.

Scope

The organization to which the end user belongs.

Created scheduled scan tasks will appear in the table on the **Scheduled Scan** page. Here, you can enable, disable, edit, copy, or delete these tasks.

#### **Process virus scan results**

If viruses are detected, promptly address them to protect your cloud computer environment and data security.

Click **Handle Now** in the **Virus Defense** section to redirect to the SASE console for resolution.

For detailed steps, see [View virus statistics](/help/en/sase/user-guide/configure-endpoint-antivirus-capabilities#bef5a722bde41).

### 2.3 Component disk mechanism

EDS Enterprise employs an original component disk mechanism to physically isolate and protect its runtime components. This safeguards cloud computers from disruptions caused by misoperations, software conflicts, or malware. If issues arise, a simple restart restores normal operation.

-   Default state: on (cannot be modified)
    
-   Configuration responsibility: Alibaba Cloud
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
