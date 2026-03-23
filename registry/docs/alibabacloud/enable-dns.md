This topic describes the security-related policies in WUYING Workspace.

## Background information

The security-related policies for cloud desktops include the following:

-   User logon control: Logon method control and cloud desktop access IP address whitelist.
    
-   Display security: Anti-screenshot and watermark.
    
-   Clipboard control: Control granularity and copy permissions.
    
-   Data security: File transfer, web client file transfer, and full-speed transfer control.
    
-   Network access: Security group control and domain name access control.
    
-   Screen recording audit.
    
-   Image management: Resetting cloud desktop images.
    
-   End user-defined snapshots.
    

## User logon control

### **Scenarios**

-   The **Logon Method Control** policy restricts the types of WUYING Terminals that end users can use to connect to cloud desktops.
    
    For example, to ensure enterprise information security, an administrator can configure the policy to allow connections to cloud desktops only from the Windows client, macOS client, and .
    
-   The **Cloud Desktop Access IP Whitelist** policy restricts the IP address ranges of WUYING Terminals that can be used to connect to cloud desktops.
    
    For example, to ensure enterprise information security, an administrator can add the CIDR block of the WUYING Terminals in the office to the whitelist. This ensures that employees can connect to cloud desktops only from WUYING Terminals in the office and not from other locations.
    

### **Configuration**

**Configuration item**

**Description**

Logon Method Control

Restricts the WUYING Terminal types that end users can use. The options include the following:

-   Windows client
    
-   macOS client
    
-   iOS client
    
-   Android client
    
-   Web client
    

By default, all options are selected. Clear the terminal types as needed.

Cloud Desktop Access IP Whitelist

Specifies the IP address ranges of WUYING Terminals that can connect to cloud desktops.

Click **Add IP Address Range**. In the **Add IP CIDR Block** dialog box, enter the allowed **Source CIDR Block**, and then click **OK**.

The IP address range must be in CIDR format. For example, `192.0.XX.XX/32` or `10.0.XX.XX/8`.

## Display security

### **Scenarios**

-   The **Anti-screenshot** feature prevents data breaches caused by screen captures or screen recordings.
    
    For example, to prevent the unauthorized use of design drawings, an architectural design company enables the anti-screenshot policy for its cloud desktops. This prevents users from using screenshot tools on on-premises devices to capture or record the cloud desktop screen.
    
-   The **Watermark** feature helps prevent data breaches and provides an audit trail.
    
    For example, an advertising company enables watermarks for its cloud desktops. If an employee takes a screenshot of an internal file on a cloud desktop, the screenshot contains the watermark specified by the administrator. This can effectively prevent internal files from being leaked. If a data breach occurs, the watermark can also provide an important audit trail.
    

### **Applicable scope**

**Configuration item**

**Minimum image version**

**Client and minimum version**

Anti-screenshot

No requirement

Windows client and macOS client V5.2

Invisible watermark strength

1.8.0

No requirement

Anti-photo for invisible watermark

1.8.0

Any client V6.7

### **Configuration**

**Configuration item**

**Description**

Anti-screenshot

The anti-screenshot feature is used for data breach prevention. After you enable this feature, end users cannot use screenshot tools on their on-premises devices to capture or record the cloud desktop screen.

**Note**

-   The anti-screenshot feature is supported only on the Windows client and macOS client of version 5.2.0 and later.
    
-   Support for the anti-screenshot feature varies by WUYING Terminal type. If you enable this feature, we recommend that you allow connections from the corresponding clients in the logon method control rule.
    

Watermark

The watermark feature is used for data breach prevention. It serves both a preventive and an auditing role.

#### **Visible watermark**

A visible watermark is visible to the naked eye. You can set the content and display style of the watermark.

-   Watermark content (select up to three of the following items)
    
    -   Username: for example, `testuser01`.
        
    -   Cloud Desktop ID: for example, `ecd-66twv7ri4nmgh****`.
        
    -   Cloud desktop IP address: for example, `192.0.2.0`.
        
    -   Client IP address: for example, `192.0.2.254`.
        
    -   Cloud desktop current time: for example, `20230101`.
        
    -   Custom text: the custom text that you enter, for example, `Internal data`.
        
        **Note**
        
        The custom content can be up to 20 English or Chinese characters in length. It supports uppercase and lowercase letters, digits, Chinese characters, and some special characters. The special characters include `~!@#$%^&*()-_=+|{};:',<.?`. Using line breaks or other special characters may cause the custom content to not take effect.
        
-   Display style
    
    -   Font size: The value ranges from 10 to 20 px. The default value is `12 px`.
        
    -   Font color: an RGB color value. The default value is `#FFFFFF` (white).
        
    -   Transparency: The value ranges from 10 to 100. A value of 0 indicates that the watermark is opaque. A value of 100 indicates that the watermark is fully transparent. The default value is `25`.
        
    -   Inclination: The value ranges from -30 to -10. The default value is `-25`.
        
    -   Watermark density: The value for both rows and columns ranges from 3 to 10. The default value for both is `3`.
        

During configuration, you can preview the display style of a visible watermark in the preview area below.

#### **Invisible watermark**

An invisible watermark is not visible to the naked eye. The default invisible watermark algorithm provided by WUYING Workspace encrypts watermark information based on different Alibaba Cloud account identities to prevent malicious tampering. The configuration items for invisible watermarks include the following:

-   Security first: Because the invisible watermark feature depends on clients and images of specific versions, we recommend that you enable this option.
    
    -   If you enable this option, an end user can connect to a cloud desktop only when the user uses a client of a required version to connect to a cloud desktop that uses an image of a required version.
        
    -   If you disable this option, an end user can connect to a cloud desktop even if the user uses a client that does not meet the version requirements or connects to a cloud desktop that does not meet the image requirements. However, the invisible watermark will not take effect.
        
-   Invisible watermark strength: The higher the strength, the stronger the granularity of the cloud desktop display and the higher the success rate of invisible watermark parsing. Adjust the invisible watermark strength as needed. This feature requires an image of version 1.8.0 or later.
    
-   Watermark content (select up to two of the following items):
    
    -   Cloud Desktop ID: for example, `ecd-66twv7ri4nmgh****`.
        
    -   Cloud desktop IP address: for example, `192.0.2.0`.
        
    -   Client IP address: for example, `192.0.2.254`.
        
    -   Cloud desktop current time: for example, `20230101`.
        
-   Anti-photo: This feature requires an image of version 1.8.0 or later and a WUYING client of version 6.7.0 or later.
    

### **Query transfer logs**

For more information about how to query detailed records of file transfers, see [View file transfer logs](/help/en/wuying-workspace/user-guide/view-operation-logs-2#sc-view-file-transfer-log).

## Data security

### **Applicable scope**

-   Local disk mapping
    
-   Clipboard control:
    
    -   Text and images can be transferred without any conditions.
        
    -   File transfers require the Windows client (V7.3 or later).
        
    -   Fine-grained control requires the cloud desktop image version to be 2.4 or later. Otherwise, all copy operations are denied.
        
-   Web client file transfer: Even if set to **Allow Upload and Download**, this setting does not take effect for Linux cloud desktops that use the HDX protocol. To use the file transfer feature on these cloud desktops, you must use the default system policy (All enabled policy).
    

### **Configuration**

**Configuration item**

**Description**

**Local disk mapping**

Local disk mapping

Maps the disks of local devices to the disks of cloud computers. This enables cloud computers to access the disks of local devices. Valid values:

-   Read-only: You can view and copy data stored in the disks of local devices from cloud computers. However, you do not have permissions to write data to the disks.
    
-   Close: You are not allowed to access data stored in the disks of local devices from cloud computers.
    
-   Read/Write: You can view, copy, and modify data stored in the disks of local devices from cloud computers.
    

**Clipboard control**

Control granularity

Select the scope for which the clipboard permission settings take effect. The options include the following:

-   Global control: Uniformly set clipboard permissions for text, rich text/images, and files/folders.
    
-   Fine-grained control: Separately set clipboard permissions for text, rich text/images, and files/folders.
    
    **Note**
    
    This option does not take effect for cloud desktops that use an image version earlier than 2.4. All copy operations are prohibited.
    

Text copy permission

Set clipboard permissions by data type. The options include the following:

-   Allow bidirectional copy: Allows cutting, copying, and pasting data between the cloud desktop and the on-premises device.
    
-   Deny bidirectional copy: Prohibits cutting, copying, and pasting data between the cloud desktop and the on-premises device.
    
-   Allow copy from on-premises device to cloud desktop only
    
-   Allow copy from cloud desktop to on-premises device only
    

Rich text/image copy permission

File/folder copy permission

Text copy limit

Set the upper limit for copied text. When an end user copies text, the part that exceeds the limit is cropped.

**Data security**

Web client file transfer

Set whether files can be transferred between the cloud desktop and the on-premises device using the web client.

## Network access

### **Domain name access control**

Domain name access control policies allow or deny access to specified domain names from within a cloud desktop. For example, if company regulations prohibit employees from visiting websites unrelated to work during work hours, an administrator can add the domain names of entertainment websites to a DNS deny rule.

#### **Scenarios**

By default, access to any domain name is allowed from within a cloud desktop. Domain name access control is used to allow or deny access to specified domain names and supports multi-level, fine-grained control over domain name access permissions.

For example, assume you have the domain names shown in the following table. You can configure DNS rules as shown in the table to implement fine-grained permission control.

**Domain name**

**Example**

**Access policy**

**Description**

Second-level domain name

`example.com`

Allow

When a cloud desktop accesses `example.com`, the webpage opens normally.

Third-level domain name

`writer.examplec.com`

Deny

When a cloud desktop accesses `writer.example.com`, the webpage displays a 404 error.

`developer.example.com`

Allow

When a cloud desktop accesses `developer.example.com`, the webpage opens normally.

Fourth-level domain name

`image.developer.example.com`

Deny

When a cloud desktop accesses `image.developer.example.com`, the webpage displays a 404 error.

`video.developer.example.com`

Allow

When a cloud desktop accesses `video.developer.example.com` and `guide.developer.example.com`, the webpages open normally.

`guide.developer.example.com`

Allow

#### **Limits**

-   Domain name limits
    
    To ensure that end users can use cloud desktops normally, the following reserved security domain names are not subject to DNS rules. This means that cloud desktops can always access these domain names. If you set the access policy for these domain names to Deny, the rule does not take effect.
    
    -   `*.gws.aliyun`
        
    -   `*.aliyun.com`
        
    -   `*.alicdn.com`
        
    -   `*.aliyunpds.com`
        
    -   `*.aliyuncds.com`
        
    -   `*.aliyuncs.com`
        
-   Operating system limits
    
    Domain name access control policies take effect only on cloud desktops that run the Windows operating system.
    
-   Rule quantity limit
    
    You can configure a maximum of 300 DNS rules.
    

#### **Configuration**

In the **Domain Name Access Control (formerly DNS Policy)** section, click **Add DNS Rule**. In the **Add DNS Rule** dialog box, complete the following configurations and click **OK**.

**Configuration item**

**Description**

Domain Name

Enter the domain name for which you want to set a DNS rule. You can add only one domain name at a time. The wildcard character `*` is supported.

Description

A custom description for the DNS rule.

Access Policy

You can select **Allow** or **Deny**.

**Note**

-   To set multiple DNS rules with the access policy set to Allow, you must add one DNS rule with the access policy set to Deny as a fallback rule.
    
-   If there are multiple DNS rules, the rules that are higher in the list have a higher priority. You can move the rules to adjust their priority.
    

#### **Related operations**

The domain name access control rules that you create are displayed in a list in the **Domain Name Access Control (formerly DNS Policy)** section. You can manage the rules in the list.

-   Adjust DNS rule priority
    
    If you have multiple DNS rules, the rules that are higher in the list have a higher priority. To adjust the priority, click **Move** in the **Actions** column for the target rule and drag the rule to the desired position.
    
-   Modify a DNS rule
    
    Find the target rule, click **Edit** in the **Actions** column, modify the configurations in the **Edit Access Rule** dialog box, and then click **OK**.
    
    **Note**
    
    After you modify a DNS rule, the changes take effect in real time.
    
-   Delete a DNS rule
    
    Find the target rule, click **Delete** in the **Actions** column, and click **OK** in the confirmation dialog box.
    
-   Import DNS rules in batches
    
    To add multiple DNS rules at once, you can use the batch import feature.
    
    1.  Click **Import Access Rules** and click **Download Template** in the dialog box.
        
    2.  Open and edit the template file using a workbook application.
        
        -   Domain column: Enter the domain name for which you want to configure a DNS rule. Add one domain name per row. The wildcard character `*` is supported.
            
        -   Policy column: Enter the access policy. `allow` indicates that access is allowed, and `block` indicates that access is denied.
            
        -   Description column: Enter a custom description for the DNS rule.
            
    3.  In the dialog box, click **Upload Local File** and select the edited template file.
        
    4.  Preview the import result in the dialog box and click **Start Import**.
        

### **Security group control**

A security group is a security mechanism that controls the inbound and outbound traffic of a cloud desktop to improve its security.

#### **Scenarios**

A security group rule is defined by properties such as rule direction, authorization policy, priority, protocol type, and port range. Before data communication is established with a cloud desktop, the system checks the security group rules in the policy that is associated with the cloud desktop to determine whether to allow the access request:

-   For rules with the authorization policy set to Allow, if an access request matches the rule, the access request is allowed.
    
-   For rules with the authorization policy set to Deny, if an access request matches the rule, the access request is intercepted and the data packet is discarded.
    

You can add inbound or outbound security group rules as needed to control the inbound and outbound traffic of your cloud desktops. The following sections provide example configurations for security group rules in different scenarios:

#### Example 1

By default, cloud desktops allow all outbound access. You can add the following outbound rules to allow cloud desktops to access only specific IP addresses:

-   Rule 1: Deny all outbound access. For example:
    
    **Rule direction**
    
    **Authorization**
    
    **Priority**
    
    **Protocol Type**
    
    **Port range**
    
    **Authorization object**
    
    Outbound
    
    Reject
    
    2
    
    All
    
    \-1/-1
    
    0.0.0.0/0
    
-   Rule 2: Allow access to a specific IP address. This rule is based on Rule 1 and must have a higher priority than Rule 1. For example:
    
    **Rule direction**
    
    **Authorization**
    
    **Priority**
    
    **Protocol Type**
    
    **Port range**
    
    **Authorization object**
    
    Outbound
    
    Allow
    
    1
    
    Select the applicable protocol type.
    
    Set an appropriate port range.
    
    The IP address that is allowed access, for example, 192.168.1.1/32.
    

#### Example 2

In an enterprise private network environment, you can add an inbound rule to allow access from a specific IP address. This enables the IP address to access the cloud desktop. For example:

**Rule direction**

**Authorization**

**Priority**

**Protocol Type**

**Port range**

**Authorization object**

Inbound

Allow

1

Select the applicable protocol type.

Set an appropriate port range.

The IP address that is allowed access, for example, 192.168.1.1/32.

#### Example 3

Assume that cloud desktop A is associated with policy A, and cloud desktop B is associated with policy B. In an enterprise private network environment, cloud desktops A and B cannot access each other because cloud desktops deny all inbound access by default. You can add the following inbound rules to policies A and B to enable network communication between cloud desktops A and B:

-   In policy A, add an inbound rule to allow access from cloud desktop B. For example:
    
    **Rule direction**
    
    **Authorization**
    
    **Priority**
    
    **Protocol Type**
    
    **Port range**
    
    **Authorization object**
    
    Inbound
    
    Allow
    
    1
    
    Select the applicable protocol type.
    
    Set an appropriate port range.
    
    The IP address of cloud desktop B.
    
-   In policy B, add an inbound rule to allow access from cloud desktop A. For example:
    
    **Rule direction**
    
    **Authorization**
    
    **Priority**
    
    **Protocol Type**
    
    **Port range**
    
    **Authorization object**
    
    Inbound
    
    Allow
    
    1
    
    Select the applicable protocol type.
    
    Set an appropriate port range.
    
    The IP address of cloud desktop A.
    

#### **Limits**

-   Rule quantity limit
    
    You can configure a maximum of 200 security group rules.
    
-   Limits on inbound rules
    
    By default, cloud desktops allow all outbound access. Inbound access is subject to the following principles:
    
    -   In an Internet environment, cloud desktops do not support inbound access. Even if you configure an inbound security group rule to allow access, the rule does not take effect.
        
    -   In an enterprise private network environment, cloud desktops deny all inbound access by default. However, you can configure an inbound security group rule to allow access requests that meet specific requirements.
        

#### **Configuration**

In the **Security Group Control** section, click **Add Security Group Rule**. In the **Add Security Group Rule** dialog box, complete the following configurations and click **OK**.

**Configuration item**

**Description**

Rule direction

-   Inbound: Controls whether to allow requests to access the cloud desktop.
    
-   Outbound: Controls whether to allow requests from the cloud desktop to access other applications.
    

Authorization

-   Allow: Allows access requests.
    
-   Reject: Intercepts access requests and directly discards data packets without returning any information.
    

Priority

The priority value ranges from 1 to 60. A smaller value indicates a higher priority. For rules of the same type, the rule with the highest priority takes effect.

Protocol Type

Supports TCP, UDP, ICMP (IPv4), and GRE protocols.

Port range

The port opened by the application or protocol. If you select **Custom TCP** or **Custom UDP** for Protocol Type, you can set a custom port. When setting a port, you can enter a specific port (such as `80`) or a port range (such as `1/80`). For more information, see [Common ports](/help/en/ecs/user-guide/common-ports#concept-gbt-s21-ydb).

Authorization object

An IPv4 address range in CIDR format.

Description

A custom description for the rule.

#### **Related operations**

The security group rules that you create are displayed in a list in the **Security Group Control** section. You can manage the rules in the list.

-   Copy a security group rule
    
    To quickly create a rule based on an existing security group rule, click **Copy** in the **Actions** column for the target rule and then edit the copied rule.
    
-   Modify a security group rule
    
    Find the target rule, click **Edit** in the **Actions** column, modify the configurations in the **Add Security Group Rule** dialog box, and then click **OK**.
    
-   Delete a security group rule
    
    Find the target rule, click **Delete** in the **Actions** column, and click **OK** in the confirmation dialog box.
    
-   Import a security group rule
    
    To quickly create rules based on multiple existing security group rules, especially when you operate across Alibaba Cloud accounts, you can export the existing rules and then import them.
    
    -   In the **Security Group Control** section, click the icon in the upper-right corner to export the existing rules to an .xlsx file.
        
    -   In the **Security Group Control** section, click **Import Security Group Rules**. In the **Import Security Group Rules** dialog box, select the exported .xlsx file, and then click **Start Import** to import the rules.
        
-   Import security group rules in batches
    
    To add multiple security group rules at once, you can use the batch import feature.
    
    1.  Click **Import Security Group Rules** and click **Download Template** in the dialog box.
        
    2.  Open and edit the template file using a workbook application.
        
        -   Type column: Enter the rule direction. `inflow` indicates inbound, and `outflow` indicates outbound.
            
        -   Policy column: Enter the authorization policy. `accept` indicates that access is allowed, and `drop` indicates that access is denied.
            
        -   Priority column: Enter the priority of the rule.
            
        -   IpProtocol column: Enter the protocol type.
            
        -   PortRange column: Enter the port that is opened by the application or protocol.
            
        -   CidrIp column: Enter an IPv4 address range in CIDR format.
            
        -   Description column: Enter a custom description for the rule.
            
    3.  In the dialog box, click **Upload Local File** and select the edited template file.
        
    4.  Preview the import result in the dialog box and click **Start Import**.
        

#### **What to do next**

By default, cloud desktops deny all inbound access and allow all outbound access. This means a default rule exists that allows all outbound access. In this case, the outbound rule that you add conflicts with the default rule. Depending on the office network to which the cloud desktop belongs, you may need to adjust the priority of the default rule so that your new rule can take effect.

-   If you are using a new version of an office network (ID format: region ID+dir+10 digits), the default rule has the lowest priority. The rule that you add takes effect immediately, and no extra action is required.
    
-   If you are using an office network that was upgraded from an older directory (ID format: region ID+dir+17 letters and digits), the default rule has the highest priority. You must manually adjust the priority of the default rule. The steps are as follows:
    
    1.  Find the office network to which the cloud desktop belongs and click its office network ID.
        
    2.  On the office network details page, click the security group ID.
        
    3.  On the **Security Groups** page, click the security group ID.
        
    4.  On the **Security Group Rules** page, click the **Outbound** tab and modify the priority of the corresponding rule.
        
        We recommend that you set the priority to 60. This ensures that any outbound rules that you manually add later take effect immediately.
        

## **End user-defined snapshots**

### **End user-defined snapshots**

The end user-defined snapshot policy controls whether end users can create custom restore points in the client.

#### **Scenarios**

End users can use restore points to back up and restore cloud desktop data. For example, before performing a risky operation, such as modifying critical system files, an end user can create a restore point.

To prevent resource waste from user errors or the creation of an excessive number of restore points, administrators can use this policy to control whether end users can create custom restore points.

#### **Limits**

This feature is available only when a cloud desktop is assigned to a single user.

#### **Configuration**

If the switch to the right of the **End user-defined snapshots** section is turned **On**, end users can set custom restore points on the **Management** page of the cloud desktop card.

If the switch to the right of the **End user-defined snapshots** section is **Disabled**, the entry for the custom restore point feature is hidden on the **Management** page and is invisible to end users.

## References

-   [Policy overview](/help/en/wuying-workspace/user-guide/cloud-computer-policy-overview)
    
-   [Create and manage cloud computer policies](/help/en/wuying-workspace/user-guide/create-and-manage-cloud-computer-policies)
    
-   [FAQ about policies](/help/en/wuying-workspace/user-guide/policy-faq)
