If your VPCs are connected through a VPC Peering Connection or an Express Connect circuit, you can use a VPC Firewall to protect traffic between them and enhance service security. This topic describes how to configure a VPC Firewall for Express Connect.

## **Features**

### **Protection topology**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6102587671/CAEQJBiBgIDZ.8az.RgiIGJlYmUwN2MwZTFhMzQwNGFiMWJhZTc0OTEzYWUxZGJl4084067_20231127115355.964.svg)

For more information about the protection scope, see [What is Cloud Firewall?](/help/en/cloud-firewall/cloudfirewall/product-overview/what-is-cloud-firewall)

### **Impact on services**

You can create a VPC Firewall without changing your network topology. The creation process takes about 5 minutes and does not affect your services. Enable the VPC Firewall during off-peak hours to minimize potential service interruptions.

Enabling or disabling a VPC Firewall takes 5 to 30 minutes, depending on the number of route entries. During this process, persistent connections may experience brief, seconds-long disconnections. Short-lived connections are not affected.

**Note**

Before enabling the VPC Firewall, verify that your applications support automatic TCP retransmission. Also, closely monitor the connection status of your applications to prevent interruptions that may be caused by a lack of a retransmission mechanism.

### **Limits**

**Limit**

**Description**

**Recommendation**

Traffic type

-   The VPC Firewall does not protect IPv6 traffic.
    
-   Traffic destined for the cloud service CIDR block (100.64.0.0/10) is not diverted to the VPC Firewall for protection.
    

None

Routing

The VPC Firewall cannot protect Express Connect routes that use a /32 subnet mask. Enabling the firewall for such a route will interrupt network access to its CIDR block.

Change the subnet mask to /30 or shorter before enabling the firewall to avoid interrupting network access. For questions, Submit a [ticket](https://smartservice.console.alibabacloud.com/console.htm#/ticket/createIndex) to consult a product technical expert.

## Create and enable a VPC Firewall

### **Prerequisites**

-   Cloud Firewall of **Enterprise Edition**, **Ultimate Edition**, or **Pay-As-You-Go Edition** is activated. For more information, see [Purchase Cloud Firewall](/help/en/cloud-firewall/cloudfirewall/getting-started/purchase-cloud-firewall#task-1796740).
    
    **Note**
    
    Only Cloud Firewall **Enterprise Edition**, **Ultimate Edition**, and **Pay-As-You-Go Edition** support VPC Firewalls for Enterprise Edition transit routers. **Premium Edition** does not support this feature.
    
-   You have authorized Cloud Firewall to access your cloud resources. For more information, see [Authorize Cloud Firewall to access other cloud resources](/help/en/cloud-firewall/cloudfirewall/getting-started/authorize-cloud-firewall-to-access-other-cloud-resources#task-1960318).
    
-   You have purchased an Express Connect instance and established network connectivity between VPCs using either Express Connect or a VPC Peering Connection. For more information, see [Establish private connections between VPCs by using VPC peering connections](/help/en/vpc/create-and-manage-vpc-peering-connection#task-2198119).
    
-   Make sure your network resources are located in regions supported by the VPC Firewall. For more information, see [Supported regions](/help/en/cloud-firewall/cloudfirewall/product-overview/supported-regions#concept-2012355).
    

**Warning**

-   After you create a VPC Firewall, modifying the vSwitches or route tables in the associated VPC may cause traffic interruptions.
    
-   You cannot roll back or pause the process of enabling a VPC firewall. If an exception occurs, the system automatically rolls back the process.
    

### **Procedure**

1.  Log on to the [Cloud Firewall console](https://yundun.console.aliyun.com/?p=cfwnext). In the navigation pane on the left, click ****Firewall Settings****.
    
2.  On the **VPC Firewall** tab, click **Express Connect**.
    
3.  On the **Express Connect** tab, click **Synchronize Assets**. The system synchronizes the asset information of your current account and its member accounts.
    
    The synchronization process takes approximately 1 to 2 minutes.
    
4.  Find the Express Connect instance for which you want to create a VPC Firewall, and in the **Actions** column, click **Create**.
    
    If you have many Express Connect instances, you can filter the list by region or VPC instance.
    
5.  In the **Create VPC Firewall** dialog box, configure the firewall. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Instance Name**
    
    Enter a descriptive and unique name to identify the VPC Firewall instance.
    
    **Connection Type**
    
    The connection method is fixed to **Express Connect** and cannot be changed.
    
    **VPC**
    
    Confirm the VPC region and instance, select the **Route Table** to protect, and enter the **Destination CIDR Block**.
    
    -   Route Table
        
        When you create a VPC, a default route table is automatically created to manage traffic by adding system routes. You can create multiple route tables as needed. For more information, see [Route table overview](/help/en/vpc/route-table-overview#concept-qbk-bvn-4gb).
        
        When you create a VPC Firewall in the Cloud Firewall console, the console automatically reads your VPC route table information. Since Express Connect supports multiple route tables, you can see and select the specific route tables you want to protect.
        
    -   Destination CIDR Block
        
        Selecting a route from the Route Table drop-down list automatically populates its default destination CIDR block. You can manually modify the destination CIDR block to protect other network segments. You can add multiple CIDR blocks, separated by commas (,).
        
    
    **Important**
    
    After the firewall is enabled, you must manually edit its configuration to add or remove protected CIDR blocks.
    
    **Peer VPC**
    
    Confirm the peer VPC's region and instance, select the **Route Table** to protect, and enter the **Destination CIDR Block**.
    
    **Important**
    
    After the firewall is enabled, you must manually edit its configuration to add or remove protected CIDR blocks.
    
    **IPS**
    
    Select an Intrusion Prevention policy. Options:
    
    -   **IPS Mode**
        
        -   **Monitor Mode**: Identifies and logs malicious traffic without blocking it.
            
        -   **Block Mode**: Blocks malicious traffic to prevent intrusions. Three strictness levels are available:
            
            -   **Block Mode - Loose**
                
            -   **Blocking Mode - Medium**
                
            -   **Block Mode - Strict**
                
    -   **IPS Capabilities**
        
        -   **Basic Rules**: Protects against common threats such as brute-force attacks, command execution vulnerabilities, and C&C server callbacks.
            
        -   **Virtual Patching**: Provides real-time defense against popular high-risk application vulnerabilities.
            
    
    **Enable VPC Firewall**
    
    Turn on this switch to automatically enable the VPC Firewall after you create it.
    
6.  Click **Submit** and confirm the action.
    
    **Note**
    
    After you enable the VPC Firewall, it may take 15 to 30 minutes for Cloud Firewall to learn the routes if you add or delete VPC route table information. Wait for the route learning process to complete and then verify that the route table is effective. If you have any questions, Submit a [ticket](https://smartservice.console.alibabacloud.com/console.htm#/ticket/createIndex) to consult a product technical expert.
    
    After you create the VPC Firewall, Cloud Firewall automatically creates the following resources in your Virtual Private Cloud (VPC):
    
    Custom route entries with the remark:Created by cloud firewall. Do not modify or delete it.
    
    When you enable the firewall, the system automatically creates a security group named Cloud\_Firewall\_Security\_Group. It also configures an allow rule (**Authorization Policy**) for this group to permit traffic to the firewall.
    
    **Important**
    
    Do not delete the Cloud\_Firewall\_Security\_Group or its allow rule. Otherwise, traffic cannot be directed to the VPC Firewall.
    
    To avoid service impact, perform batch operations or frequent firewall enabling/disabling during off-peak hours.
    
7.  On the **Express Connect** tab, turn on the switch for the newly created VPC Firewall.
    
    Cloud Firewall can protect your network resources only when the VPC Firewall is enabled. When the **Firewall Status** of the VPC Firewall changes to **Enabled**, the firewall is successfully enabled.
    

## More operations

### **Disable a VPC Firewall**

**Warning**

Disabling a VPC Firewall may cause transient traffic disconnections.

If you need to disable a VPC Firewall, go to the **Express Connect** tab, find the target firewall instance, and turn off its Firewall Switch.

When the **Firewall Status** of the VPC Firewall changes to **Disabled**, the firewall is successfully disabled.

### **Delete a VPC Firewall**

**Warning**

Deleting a VPC Firewall may cause transient traffic disconnections.

If you no longer need a VPC Firewall, go to the **Express Connect** tab, find the target firewall instance, and in the **Actions** column, click **Delete**.

### **Edit a VPC Firewall**

If you need to modify the configuration of a VPC Firewall, go to the **Express Connect** tab, find the target firewall instance, and in the **Actions** column, click **Edit**.

## **Modify the IPS configuration**

To modify the intrusion prevention system (IPS) protection mode or capabilities, add specific destination or source IP addresses to a whitelist, or modify IPS rules, you can click **Configure IPS** in the **Actions** column of an existing Cloud Firewall instance. Then, configure the settings on the **VPC Border** tab of the **IPS Configuration** page. For more information, see [IPS Configuration](/help/en/cloud-firewall/cloudfirewall/user-guide/prevention-configuration).

## Related documents

-   To manage access between VPCs, you can configure [access control policies for the](/help/en/cloud-firewall/cloudfirewall/user-guide/create-an-access-control-policy-for-a-vpc-firewall#concept-vgy-wgr-ggb) VPC Firewall after enabling it.
    
-   After enabling the VPC Firewall, you can use the [VPC access](/help/en/cloud-firewall/cloudfirewall/user-guide/view-vpc-access-data#task-1925821) feature to view traffic between VPCs.
    
-   The [VPC protection](/help/en/cloud-firewall/cloudfirewall/user-guide/intrusion-prevention#section-h8z-8ge-1fb) feature provides details about security events and blocked threats between your VPCs.
