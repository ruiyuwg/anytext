Data security safeguards digital information against unauthorized access, alteration, or loss across its entire lifecycle. In cloud environments, data security forms the critical foundation for business operations and serves as the core measure of a cloud provider's security capabilities. Amid evolving global cyber threats, Alibaba Cloud prioritizes robust data protection. This topic describes how Elastic Desktop Service (EDS) Enterprise delivers comprehensive security through three key pillars: data protection, availability, and confidentiality.

## 01 Data protection

### 1.1 Data transfer security

EDS Enterprise enhances file transfer security between cloud computers and on-premises devices through cloud computer policies. This feature implements controlled file transfers to mitigate potential security risks during data exchange.

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions:
    
    -   Clipboard Control
        
        -   Text and image transfer is unrestricted.
            
        -   For file transfer, the Windows client of Alibaba Cloud Workspace V7.3.0 or later is required.
            
        -   This feature takes effect only for cloud computers whose image version is V2.4 or later. Otherwise, all copy operations are prohibited.
            
    -   Web Client File Transfer: Even if you set this parameter to **Allow Upload/Download**, this setting does not take effect for high-definition experience (HDX)-based Linux cloud computers. If you want to use the file transfer feature on these cloud computers, use the default policy called **All enabled policy**.
        
-   References: [Data transfer control](/help/en/wuying-workspace/user-guide/security-related-rules#sc-file-transfer)
    

**Configuration or usage**

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Policies**.
    
3.  On the **Policies** page, click **Create Policy**.
    
4.  On the **Create Policy** page, configure the **Policy Name** parameter as prompted, modify the policy configurations based on your business requirements, and then click **OK**.
    
    After you create the custom policy, you can view the policy on the **Policies** page.
    

**Parameter**

**Description**

**Local Disk Mapping**

Local Disk Mapping

Maps the disks of local devices to the disks of cloud computers. This enables cloud computers to access the disks of local devices. Valid values:

-   Read-only: You can view and copy data stored in the disks of local devices from cloud computers. However, you do not have permissions to modify data.
    
-   Close: You are not allowed to access data stored in the disks of local devices from cloud computers.
    
-   Read/Write: You can view, copy, and modify data stored in the disks of local devices from cloud computers.
    

**Clipboard Control**

Management Granularity

The effective scope of clipboard permission settings. Valid values:

-   Global: configures the permissions for text, rich text/images, and files/folders in a unified manner.
    
-   Fine-grained: separately configures the permissions on text, rich text/images, and files/folders.
    
    **Note**
    
    The Fine-grained option takes effect only for cloud computers whose image version is V2.4 or later. Otherwise, all copy operations are prohibited.
    

Text Copy

Specifies the permissions on the clipboard, which are determined by data types. Valid values:

-   Allow Two-way Copy: supports cut, copy, and paste operations seamlessly between cloud computers and on-premises devices.
    
-   Deny Two-way Copy: restricts cut, copy, and paste operations between cloud computers and on-premises devices.
    
-   Allow Copy from Local Device to Cloud Computer
    
-   Allow Copy from Cloud Computer to Local Device
    

Rich Text/Image Copy

File/Folder Copy

Max. Text Copy Size

Specifies the maximum size of the text you can copy. If the size of the text you want to copy exceeds the upper limit, the excess part is cut off.

**Data Security**

Web Client File Transfer

Specifies whether files can be transferred between cloud computers and on-premises devices by using the web client.

### 1.2 Display security

EDS Enterprise enhances cloud computer content protection through cloud computer policies. The anti-screen capture and dynamic watermarking features prevent unauthorized content duplication and enable traceability, ensuring sensitive information remains secure during viewing sessions.

-   You can configure the **Anti-screenshot** parameter to prevent data leaks due to screenshot capturing or screen recording of cloud computers.
    
    Example: To prevent design data leaks, the administrator of a construction company enables anti-screenshot feature for cloud computers in the company. This restricts employees from using snipping tools on local terminals to capture or record cloud computer screens.
    
-   You can configure the **Watermark** parameter to prevent data leaks, and facilitate audits if a data leak does occur.
    
    Example: The administrator of an advertising company enables the watermarking feature. When employees take screenshots of internal files stored on cloud computers, watermarks are tiled across the images, effectively preventing data leaks. In the event of a data leak, watermarks serve as critical audit trail markers for investigation and accountability.
    

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions:
    
    **Parameter**
    
    **Minimum image version**
    
    **Minimum client version**
    
    Anti-screenshot
    
    N/A
    
    Windows client or macOS client of Alibaba Cloud Workspace V5.2
    
    Enhancement
    
    1.8.0
    
    N/A
    
    Anti-Screen Photo
    
    1.8.0
    
    Any client of Alibaba Cloud Workspace V6.7
    
-   References: [Display control](/help/en/wuying-workspace/user-guide/security-related-rules#sc-display)
    

**Configuration or usage**

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Policies**.
    
3.  On the **Policies** page, click **Create Policy**.
    
4.  On the **Create Policy** page, configure the **Policy Name** parameter as prompted, modify the policy configurations based on your business requirements, and then click **OK**.
    
    After you create the custom policy, you can view the policy on the **Policies** page.
    

**Parameter**

**Description**

Anti-screenshot

Specifies whether to enable the anti-screenshot feature. This feature is designed to prevent data leaks. When this feature is enabled, end users are restricted from using local snipping tools to capture or record cloud computer screens.

**Note**

-   The parameter takes effect only for the Windows client and macOS client of Alibaba Cloud Workspace V5.2.0 and later.
    
-   Support for the anti-screen feature depends on the Alibaba Cloud Workspace terminal type. To use this feature, make sure that the selected terminals are permitted in your logon control policy.
    

Watermark

Specifies whether to enable the watermarking feature. This feature is used to prevent data leaks and facilitate auditing after a data leak occurs.

#### **Visible watermark**

Visible watermarks are easily identifiable, allowing you to customize both the content and display styles as needed.

-   Content (choose up to 3 items to display)
    
    -   Username. Example: `testuser01`.
        
    -   Cloud Computer ID. Example: `ecd-66twv7ri4nmgh****`.
        
    -   Cloud Computer IP. Example: `192.0.2.0`.
        
    -   Client IP. Example: `192.0.2.254`.
        
    -   Current Time. Example: `20230101`.
        
    -   Custom Text. Example: `Internal Data`.
        
        **Note**
        
        You can enter 1 to 20 characters as the custom text, which can contain letters, digits, and the following special characters: `~!@#$%^&*()-_=+|{};:',<.?`. Using line breaks or special characters may prevent the custom text from displaying correctly.
        
-   Display style
    
    -   Font Size: the watermark font size. Valid values: 10 to 20. Default value:`12`. Unit: pixels (px).
        
    -   Font Color: the watermark color. Default value: `#FFFFFF`, which indicates white.
        
    -   Opacity: the watermark opacity. Valid values: 10 to 100. Setting this parameter to 0 makes watermarks opaque, while setting it to 100 makes them fully transparent. Default value: `25`.
        
    -   Rotation: the watermark rotation. Valid values: -30 to -10. Default value: `-25`.
        
    -   Watermark Density: the number of watermark columns and rows. Valid values: 3 to 10. Default value: `3`.
        

During the configuration, you can preview the display style of a watermark in real time within the preview area.

#### **Invisible watermark**

Invisible watermarks are embedded discreetly within content. EDS Enterprise provides a default algorithm for invisible watermarking, enabling encryption tailored to different Alibaba Cloud accounts to safeguard against tampering. To enable this feature, you can configure the following parameters:

-   Security Priority: Since invisible watermarks rely on specific Alibaba Cloud Workspace clients and images of specific versions, we recommend that you enable this feature.
    
    -   When this feature is enabled, this feature only works when end users connect to cloud computers running the specified image versions and access them from the designated versions of Alibaba Cloud Workspace clients.
        
    -   When this feature is disabled, end users can connect to cloud computers running non-specified image versions from any Alibaba Cloud Workspace clients. However, the invisible watermark configurations will not be applied.
        
-   Enhancement: A higher watermark enhancement results in a grainier desktop on a cloud computer, improving the success rate of parsing invisible watermarks. Adjust the watermark enhancement based on your business requirements. This feature takes effect for images of V1.8.0 or later.
    
-   Content (choose up to 2 items to display):
    
    -   Cloud Computer ID. Example: `ecd-66twv7ri4nmgh****`.
        
    -   Cloud Computer IP. Example: `192.0.2.0`.
        
    -   Client IP. Example: `192.0.2.254`.
        
    -   Current Time. Example: `20230101`.
        
-   Anti-Screen Photo: This feature takes effect for images of V1.8.0 or later and clients of Alibaba Cloud Workspace V6.7.0 or later.
    

### 1.3 Peripheral security

EDS Enterprise enables administrators to enhance security by controlling peripheral device redirection for cloud computers. Through granular policy configuration, administrators can restrict specific peripheral access to cloud computers, which prevents potential security threats. Administrators can restrict access from the following peripheral devices to cloud computers:

-   Printer: To enhance security and prevent potential data leaks, disable printer redirection. This measure blocks printing to external devices and prevents unauthorized printers from compromising cloud system security.
    
-   Webcam: To mitigate security and privacy risks, disable webcam redirection. This prevents potential malware from accessing client profiles and reduces the chance of accidental data leaks through unauthorized camera access.
    
-   USB device: EDS Enterprise provides granular USB device control, allowing administrators to enable or disable client USB devices globally or target specific devices by Vendor ID (VID) and Product ID (PID). This precise identification capability enables selective restriction of any USB device type while permitting authorized peripherals.
    

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
    
-   References: [Policies for peripherals](/help/en/wuying-workspace/user-guide/peripheral-related-rules)
    

**Configuration or usage**

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Policies**.
    
3.  On the **Policies** page, click **Create Policy**.
    
4.  On the **Create Policy** page, configure the **Policy Name** parameter as prompted, modify the policy configurations based on your business requirements, and then click **OK**.
    
    After you create the custom policy, you can view the policy on the **Policies** page.
    

**Configuration item**

**Description**

**Requirement or limit**

**Local disk redirection**

Local Disk Mapping

Maps the disks of local devices to the disks of cloud computers. This enables cloud computers to access the disks of local devices. Valid values:

-   Read-only: You can view and copy data stored in the disks of local devices from cloud computers. However, you do not have permissions to modify data.
    
-   Close: You are not allowed to access data stored in the disks of local devices from cloud computers.
    
-   Read/Write: You can view, copy, and modify data stored in the disks of local devices from cloud computers.
    

-   Only Windows cloud computers are supported.
    
-   Only Windows clients and macOS clients are supported.
    
-   Local disk mapping is suitable for accessing files. This feature is not suitable for running programs. Even if you have enabled local disk mapping, you cannot run applications installed on local devices from cloud computers. However, you can run applications that do not require installation on cloud computers. The application will occupy bandwidth resources and compromise the performance of the cloud computer that runs the application. Proceed with caution.
    

**Peripheral redirection**

USB Redirection

After you enable this feature, you can use a cloud computer to access USB devices connected to a client. In addition, you can configure a USB device whitelist or blacklist or configure USB redirection for different types of devices. After you disable this feature, the corresponding peripheral is automatically switched from USB Redirection to Deny.

-   Web clients do not support USB redirection because they do not support USB devices.
    
-   Linux cloud computers for Adaptive Streaming Protocol (ASP) do not support USB redirection.
    

Webcam

Redirection policies for different types of peripherals. Valid values:

-   USB Redirection: redirects local USB devices to cloud computers. To use these USB devices, you must first install the corresponding drivers on cloud computers.
    
    **Note**
    
    To select a USB redirection method, you must first enable USB redirection.
    
-   Device Redirection: redirects local USB devices to cloud computers. You need only to install the corresponding drivers on clients.
    
-   Deny: disables peripheral redirection. If you select this option for a peripheral, cloud computers cannot use the peripheral.
    

Only Windows cloud computers for ASP are supported. Only device redirection is supported.

Scanner

Only USB redirection is supported.

ADB

No limit.

Printer

-   Linux cloud computers for ASP do not support printer redirection.
    
-   To enable print redirection to allow a cloud computer to use the printers of local devices, make sure that the end user connects to the cloud computer through a Windows client, macOS client, or web client.
    
-   If the end user uses an AD account, you must enable printer redirection and set the security group policy of the AD account to permit printer redirection. This way, the end user can use local printers on a cloud computer.
    

Serial Device

No limit.

**Peripheral blacklist and whitelist**

Peripheral Blacklist/Whitelist

After you configure USB redirection policies for different types of peripherals, you can configure a peripheral whitelist or blacklist. The peripheral blacklist and whitelist take precedence over USB redirection policies configured for different types of peripherals.

-   After you add a USB device to the blacklist, even if you have disabled USB redirection for this type of peripheral, cloud computers are still allowed to access the USB device.
    
-   After you add a USB device to the whitelist, even if you have enabled USB redirection for this type of peripheral, cloud computers are not allowed to access the USB device.
    

-   You can add up to 100 blacklist or whitelist rules. The priorities of peripherals in the whitelist or blacklist are in descending order. You can adjust the order of the peripherals in the list.
    
-   Vendor Identifiers (VIDs) and Product Identifiers (PIDs) are 4-bit hexadecimal strings, such as a12c.
    
-   After you configure a whitelist or blacklist, the configuration takes effect the next time a client connects to the corresponding cloud computer.
    

**Peripheral management policies**

Custom Rules

You can configure custom redirection policies to manage peripherals based on VIDs and PIDs.

-   You can add up to 100 custom policies.
    
-   VIDs and PIDs are 4-bit hexadecimal strings, such as a12c.
    
-   Only EDS clients of V6.4.0 and later support custom policies.
    

Recommended Rule for Best Practice

Policies recommended by EDS for best practices.

-   You cannot modify the recommended policies. Custom policies take precedence over the recommended policies.
    
-   Only EDS clients of V6.4.0 and later support recommended policies.
    

## 02 Data availability

### 2.1 Use snapshots for data backup and restoration (administrators)

Snapshots provide a reliable method for backing up and restoring disk data. Before you perform high-risk operations that may compromise system stability, such as registry modifications or critical system file changes, we recommend that you create snapshots. These backups enable quick disk restoration in the event of system failures, ensuring minimal downtime and data loss. Snapshots can be manually or automatically created.

-   Manual snapshots: You can create a snapshot at any specific point in time to meet your business needs. During creation, you can define the disk scope. If the local administrator permissions are granted to end users, they can create, restore, and delete snapshots through their Alibaba Cloud Workspace terminals.
    
-   Automatic snapshots: By default, the system automatically generates snapshots for the system and data disks of each cloud computer. These snapshots are retained for three days and then automatically deleted. Additionally, you can set up an automatic snapshot policy tailored to your business requirements. The system automatically creates snapshots for cloud computers in the following scenarios:
    
    -   For cloud computers associated with an automatic snapshot policy, snapshots are created at the times specified in the policy.
        
    -   Snapshots are automatically generated before an administrator updates cloud computers or custom images. If the update fails, the system can roll back by using these snapshots. If the update succeeds, the system deletes the system disk snapshots but retains the data disk snapshots.
        
    -   When changing the image for a cloud computer, a snapshot is automatically created if the image is a deleted custom image. The snapshot is deleted after the image change is complete.
        
    -   Before an end user updates a cloud computer through an Alibaba Cloud Workspace client, the system creates a snapshot to enable automatic rollback in case of update failure. The system can create up to three snapshots for a cloud computer, each retained for a maximum of three days before being automatically deleted.
        
    
    Automatic snapshot creation times:
    
    -   No automatic snapshot policy applied:
        
        -   Cloud computers created on or after August 19, 2024, 12:00 (UTC+8) in all regions: 22:00 to 06:00 (UTC+8) the next day.
            
        -   Cloud computers created between June 7, 2024, 17:42 (UTC+8) and August 19, 2024, 12:00 (UTC+8) in the China (Hangzhou) region: 02:00 daily.
            
        -   All other cloud computers: 01:00 daily.
            
    -   To disable automatic snapshot creation, go to the **Snapshots** page, navigate to the **Snapshot Management** tab, and then turn off the **System Snapshot** switch.
        
        **Note**
        
        This feature is in invitational preview. If you want to use the feature, submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373).
        
    -   Cloud computers associated with an automatic snapshot policy: The snapshots will be created by the system at the times specified in the policy.
        
    

-   Default status: on for system snapshots and null for custom snapshots
    
-   Configuration responsibility: customers
    
-   Feature cost: free during public preview
    
-   Dependent services: none
    
-   Conditions: none
    
-   References: [Use snapshots (public preview)](/help/en/wuying-workspace/user-guide/use-snapshots-public-preview)
    

**Configuration or usage**

#### **Manually create a snapshot**

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Cloud Computers** page, find the cloud computer from which you want to manually create a snapshot and proceed with one of the following methods:
    
    -   Click the ⋮ icon in the **Actions** column and select **Create Snapshot**.
        
    -   Click the ID of the cloud computer from which you want to create a snapshot in the **Cloud Computer ID/Name** column. On the page that appears, click the **Snapshots** tab. On the **Snapshots** tab, click **Create Snapshot**.
        
5.  In the **Create Snapshot** panel, configure the following parameters as needed and click **Create Snapshot**.
    
    **Parameter**
    
    **Description**
    
    Disk
    
    The range of disks for which you want to back up data. Valid values: **System Disk and Data Disk**, **Only System Disk**, and **Only Data Disk**.
    
    Restore Point Name
    
    The name of the restore point. The name must be 2 to 128 characters in length, and can contain letters, digits, colons (.), underscores (\_), and hyphens (-). It must start with a letter but cannot start with `http://`, `https://`, or `auto`.
    
    System Disk Snapshot Name
    
    The name of the system disk snapshot. The name must be 2 to 256 characters in length and cannot start with `auto`.
    
    System Disk Description
    
    The description of the system disk from which the snapshot is created. The description must be 1 to 128 characters in length.
    
    Data Disk Snapshot Name
    
    The name of the data disk snapshot. The name must be 2 to 256 characters in length and cannot start with `auto`.
    
    Data Disk Description
    
    The description of the data disk from which the snapshot is created. The description must be 1 to 128 characters in length.
    
    On the **Snapshots** tab, you can view the snapshot creation progress. After the status of the snapshot changes from **In Progress** to **Succeeded**, the snapshot is created.
    

#### **Create an automatic snapshot policy and associate it with cloud computers**

Once you create an automatic snapshot policy, you can apply it to your cloud computers. The system will then automatically create snapshots for these cloud computers at the scheduled times.

1.  In the left-side navigation pane, choose **Operation & Maintenance** > **Policies**.
    
2.  In the upper-left corner of the top navigation bar, select a region.
    
3.  On the **Snapshots** page, click the **Automatic Snapshot Policy** tab. On the **Automatic Snapshot Policy** tab, click **Create Policy**.
    
4.  In the **Create Policy** panel, configure the following parameters as needed and click **OK**.
    
    **Parameter**
    
    **Description**
    
    Policy Name
    
    The name of the policy. Make sure that the name meets the on-screen instructions.
    
    Repeat On
    
    The days in a week on which the system automatically creates snapshots.
    
    Created At
    
    The points in time (UTC+8) at which the system automatically creates snapshots in a day.
    
    Retention Period
    
    The period of time for which snapshots are retained. Valid values: 1 to 180. Unit: days.
    
    If the system creates more than 30 snapshots for a cloud computer, it automatically deletes the oldest one to keep the latest snapshot.
    
5.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
6.  In the upper-left corner of the top navigation bar, select a region.
    
7.  On the **Cloud Computers** page, find the cloud computer to which you want to apply an automatic snapshot policy, click the ⋮ icon in the **Actions** column, and then select **Change Automatic Snapshot Policy**.
    
8.  In the **Change Automatic Snapshot Policy** panel, turn on the **Automatic Snapshot Policy** switch, select a policy, and then click **OK**.
    
9.  In the confirmation message that appears, click **OK**.
    
    After you apply the automatic snapshot policy to the cloud computer, click the ID of the cloud computer. In the **Other Information** section of the **Details** page, check the applied policy.
    

#### **Restore data**

If data is lost on a cloud computer due to system errors or incorrect operations, you can use snapshots to restore it to a specific point in time.

**Warning**

However, this process is irreversible, so proceed with caution. Restoring a disk from a snapshot reverts its data to the state when the snapshot was created, erasing any data generated between the snapshot creation and the restoration time. Before restoring, you must back up any important data to avoid permanent loss. You can create a snapshot for backup purposes or save data to another disk for future restoration.

1.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
2.  In the upper-left corner of the top navigation bar, select a region.
    
3.  On the **Cloud Computers** page, find the cloud computer whose data you want to restore and click its ID.
    
4.  On the **Snapshots** tab, find the snapshot that you want to use and click **Restore Cloud Computer** in the **Actions** column.
    
    If the cloud computer is not stopped, a message appears. Click **OK** in the message and wait for the cloud computer to stop. After the cloud computer is stopped, proceed as prompted.
    
5.  In the **Restore Cloud Computer** panel, confirm the snapshot information and click **Restore Cloud Computer**.
    
    **Important**
    
    You can restore data for one disk at a time. Avoid performing other operations on the disk during the restoration process. Once the restoration is complete, the data on the disk will revert to the state captured in the snapshot.
    
    After restoration, you will receive a notification to check the restoration result.
    

### 2.2 Use restore points **for data backup and restoration** (end users)

End users can utilize restore points to safeguard and recover data on cloud computers. These restore points serve as safety checkpoints, particularly useful before end users perform high-risk operations like modifying critical system files. If a system failure or operational error occurs, end users can revert to a previously created restore point to recover their data to the saved state.

-   Default status: on for system restore points and null for custom restore points
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
    
-   References: [Back up and restore cloud computer data](/help/en/wtc/user-guide/backup-and-restore-data)
    

**Configuration or usage**

#### **Create custom restore points**

1.  Log on to an Alibaba Cloud Workspace terminal.
    
2.  Move the pointer over the card of the cloud computer you want to manage and click **Manage**. Then, click the **Restore Points** tab.
    
3.  Click the **Custom Restore Points** tab and then click **Create Custom Restore Points**.
    
4.  In the **Create Custom Restore Points** dialog box, select the disk that you want to back up, specify a name for the restore point, and then click **OK**.
    
    You can view the creation progress and status of the restore point on the **Custom Restore Points** tab.
    

#### **Restore data**

##### **Use a restore point**

1.  Log on to an Alibaba Cloud Workspace terminal.
    
2.  Move the pointer over the card of the cloud computer you want to manage and click **Manage**. Then, click the **Restore Points** tab.
    
3.  On the **System Restore Points** or **Custom Restore Points** tab, find a restore point based on your business requirements and click **Restore**.
    
    **Warning**
    
    The restore operation is irreversible. After you restore data on a disk, the disk is restored to the state at the time point when the restore point is created. Data that is generated between the creation time of the restore point and the current time is lost. Make sure that you back up important data before you restore a disk.
    
4.  In the message that appears, click **Confirm Restore**.
    

## 03 Data confidentiality

### 3.1 Communications security

EDS Enterprise's cloud computers utilize Alibaba Cloud's Adaptive Streaming Protocol (ASP) with TLS encryption powered by Tongsuo (formerly BabaSSL). As Alibaba's open-source cryptography library, Tongsuo delivers modern cryptographic algorithms and secure communications protocols that ensure data privacy, integrity, and authentication throughout transmission, usage, and storage. The library supports critical security features across storage, networking, key management, and privacy computing scenarios. Tongsuo holds commercial password product certification from China's State Cryptographic Authority, helping organizations comply with national cryptographic standards during technology upgrades and security evaluations.

Tongsuo cryptographic toolkit has the following features:

-   Compliance: Meets the cryptographic security requirements of GM/T 0028 (Security Requirements for Cryptographic Modules).
    
-   Zero-knowledge proofs (ZKP): Bulletproofs
    
-   Cryptographic algorithms
    
    -   Commercial cryptographic algorithms in China: SM2, SM3, SM4, ZUC, and others
        
    -   Standard cryptographic algorithms: ECDSA, RSA, AES, SHA, and others
        
    -   Homomorphic encryption algorithms: EC-ElGamal, Paillier, and others
        
-   Secure communications protocols
    
    -   Supports GB/T 38636-2020 TLCP standard, featuring dual-certificate national cryptographic communication protocol.
        
    -   Supports TLS 1.3 with national cryptographic algorithms as specified in RFC 8998.
        
    -   Supports the QUIC API.
        
    -   Supports Delegated Credentials (RFC draft-ietf-tls-subcerts-10 implementation)
        
    -   Supports TLS certificate compression
        

-   Default state: on (cannot be modified)
    
-   Configuration responsibility: Alibaba Cloud
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
    
-   References: [Adaptive Streaming Protocol (ASP)](/help/en/wuying-workspace/product-overview/asp)
