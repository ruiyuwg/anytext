If your network instances, such as VPCs, VBRs, and CCNs, are connected by a Cloud Enterprise Network (CEN) instance that uses a Basic Edition transit router, you can use a VPC firewall to protect traffic between the instances and enhance the security of your business assets. This topic describes how to configure a VPC firewall for a Basic Edition transit router.

## **Function Introduction**

### **How it works**

After you enable a VPC firewall, Cloud Firewall filters traffic between VPCs based on deep packet inspection (DPI) traffic analysis, intrusion prevention system (IPS) rules, threat intelligence, virtual patching, and access control policies. Cloud Firewall then determines whether to allow the traffic. This allows Cloud Firewall to block unauthorized access and secure traffic between your private network assets.

The following figure shows a sample scenario where a VPC firewall protects a Basic Edition transit router.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2262179671/CAEQJhiBgIDSpMGg_hgiIGM0YjM4Zjg0NTFkODQyNDZiMGRmMmJkOWFhYjgwYjI54084067_20231127102536.144.svg)

For more information about the protection scope, see [What is Cloud Firewall?](/help/en/cloud-firewall/cloudfirewall/product-overview/what-is-cloud-firewall).

### **Impact on business**

When you create a VPC firewall, you do not need to change your network topology. You can create a VPC firewall and enable the automatic traffic redirection mode with one click to protect your business assets. This operation does not interrupt your services. The creation process takes about 5 minutes. We recommend that you enable the VPC firewall during off-peak hours.

Enabling or disabling a VPC firewall takes about 5 to 30 minutes, depending on the number of route entries. During this process, persistent connections may experience transient disconnections that last for seconds. Short-lived connections are not affected.

**Note**

Before you enable a VPC firewall, ensure that your application supports an automatic TCP retransmission mechanism. You should also monitor the connection status of the application to prevent interruptions that may occur if a retransmission mechanism is not configured.

### **Limits**

**Limit**

**Description**

**Suggestion**

VPC limits

When you enable a VPC firewall, a VPC-connected instance named Cloud\_Firewall\_VPC is created. Ensure that your Alibaba Cloud account has a sufficient VPC quota. For more information about VPC quotas, see [Limits and quotas](/help/en/vpc/understanding-vpc-quotas-in-alibaba-cloud#concept-dyx-jkx-5db).

For example, the default quota for the number of VPCs that can be created in a region is 10. If you enable a VPC firewall, a VPC is automatically created. In this case, you can create a maximum of 9 more VPCs.

If you have reached the quota, you can request a quota increase. For more information, see [Manage VPC quotas](/help/en/vpc/manage-vpc-quotas#task-2273720).

Ensure that the number of network instances, such as VPCs, VBRs, and CCNs, that can be added to the Basic Edition transit router in each region does not exceed the quota. The quota for network instances connected to a Basic Edition transit router includes the VPC that is automatically created when you enable the VPC firewall. The instance name of this VPC is Cloud\_Firewall\_VPC. For more information about the number of network instances that a Basic Edition transit router supports, see [Limits](/help/en/cen/product-overview/limits#section-5e6-ao4-qsz).

For example, each Basic Edition transit router supports 10 network instances by default. Because enabling the VPC firewall automatically creates a VPC that uses one of these instances, you can create a maximum of 9 additional VPCs.

We recommend that you use an Enterprise Edition transit router. For more information, you can [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm#/ticket/createIndex) to contact a product technical expert.

A CEN instance can protect a maximum of 31 VPCs in the same region.

None

Route limit

The Cloud Enterprise Network (CEN) instance must not contain routing policies where the **policy behavior** is set to **Deny**. An exception is the default routing policy with a priority of 5000 that CEN automatically generates. Otherwise, service disruptions may occur.

Delete the relevant routing policies. You can [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm#/ticket/createIndex) to contact a product technical expert.

After you enable a VPC firewall, Cloud Firewall automatically adds custom route entries to the VPC. A VPC route table supports a maximum of 200 custom route entries. If the number of custom route entries in the route table reaches this limit, you cannot enable the VPC firewall.

You can increase the VPC quota.

You can change the quota for custom routes in a VPC route table. For more information, see [Manage quotas](/help/en/vpc/manage-quotas#task-iwt-yd3-wgb).

Ensure that the number of route entries in the CEN instance does not exceed the quota. The total number of route entries includes those automatically added when you enable the VPC firewall. For more information about the number of route entries that a CEN instance supports, see [Limits](/help/en/cen/product-overview/limits#section-5e6-ao4-qsz).

We recommend that you limit the number of published route entries to 100. To request a quota increase, you can [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm#/ticket/createIndex) to contact a product technical expert.

You cannot enable a VPC firewall if a custom route table is associated with a vSwitch in the VPC.

You can delete the custom route table or disassociate the custom route table from the vSwitch.

Traffic type limit

-   The VPC firewall does not protect IPv6 traffic.
    
-   Traffic destined for the Alibaba Cloud service CIDR block (100.64.0.0/10) is not redirected to the VPC firewall for protection.
    

None

Other limits

If you enabled the VPC firewall before May 1, 2021, and it uses a public CIDR block as a private CIDR block or redirects bidirectional traffic from a /32 CIDR block, your services may be affected in the following ways:

-   When you access assets across VPCs, traffic may pass through the VPC firewall in only one direction. This can cause the loss of traffic log data and exceptions in Layer 4 and Layer 7 application access control and IPS protection.
    
-   When you access SLB or ApsaraDB RDS assets across VPCs, packet loss may occur because the request and response traffic might use different paths. This can cause the SLB and ApsaraDB RDS services to become inaccessible.
    

**Note**

This limit does not apply to users who enable VPC firewalls on or after May 1, 2021.

We recommend that you plan your network based on standard practices to avoid using public CIDR blocks as private CIDR blocks and redirecting traffic from /32 CIDR blocks in the CEN instance.

If you have special business requirements, you can [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm#/ticket/createIndex) to contact a product technical expert.

When you enable or disable a VPC firewall, established persistent connections to some Alibaba Cloud services, such as SLB and ApsaraDB RDS, may fail.

-   When you enable or disable a VPC firewall, temporarily configure the health check of SLB to point to a backend server in the local VPC to prevent health check jitter. After the operation is complete, you can restore the original setting. For more information, see [Configure and manage CLB health checks](/help/en/slb/classic-load-balancer/user-guide/configure-and-manage-health-checks).
    
-   Implement a connection protection mechanism and a reconnection mechanism on the client.
    

## Create and enable a VPC firewall

### **Prerequisites**

-   You have purchased the Enterprise, Ultimate, or pay-as-you-go edition of Cloud Firewall. For more information, see [Purchase Cloud Firewall](/help/en/cloud-firewall/cloudfirewall/getting-started/purchase-cloud-firewall#task-1796740).
    
    **Note**
    
    You can configure VPC firewalls for Enterprise Edition transit routers only with the **Enterprise Edition**, **Ultimate Edition**, and **Pay-as-you-go Edition** of Cloud Firewall. This feature is not available in the **Premium Edition**.
    
-   You have granted Cloud Firewall the required permissions to access your cloud resources. For more information, see [Authorize Cloud Firewall to access cloud resources](/help/en/cloud-firewall/cloudfirewall/getting-started/authorize-cloud-firewall-to-access-other-cloud-resources#task-1960318).
    
-   You have purchased a CEN instance and are using it to establish network connections between VPCs. For more information, see [Use a CEN instance to connect VPCs in the same region (Basic Edition)](/help/en/cen/use-basic-edition-transit-routers-to-connect-vpcs-in-the-same-region#task-2512294) and [Use a CEN instance to connect VPCs across regions and accounts (Basic Edition)](/help/en/cen/use-basic-edition-transit-routers-to-connect-vpcs-across-regions#task-2293645).
    
    **Note**
    
    If a VPC in the CEN instance was created by a different Alibaba Cloud account, and that account has not granted permissions to Cloud Firewall, you cannot create a VPC firewall. We recommend that you log on to the Cloud Firewall console using the corresponding account to grant the required permissions before you enable the VPC firewall. For more information, see [Authorize Cloud Firewall to access cloud resources](/help/en/cloud-firewall/cloudfirewall/getting-started/authorize-cloud-firewall-to-access-other-cloud-resources#task-1960318).
    
-   Ensure that the regions where your network resources are located are supported by the VPC firewall. For more information, see [Supported regions](/help/en/cloud-firewall/cloudfirewall/product-overview/supported-regions#concept-2012355).
    

### **Procedure**

**Warning**

-   After you create a VPC firewall, do not modify the vSwitch and route table in the created Cloud Firewall VPC. Modifications may cause traffic interruptions.
    
-   If a single VBR exists in the CEN instance, creating a VPC firewall or performing a network cutover may cause traffic interruptions.
    
-   You cannot roll back or pause the process of enabling a VPC firewall. If an exception occurs, the system automatically rolls back the process.
    

1.  Log on to the [Cloud Firewall console](https://yundun.console.aliyun.com/?p=cfwnext). In the navigation pane on the left, click **Firewall Settings**.
    
2.  On the ****Firewall Settings**** page, click the ****VPC Firewall**** tab.
    
3.  On the ****VPC Firewall**** tab, click **Cloud Enterprise Network (Basic Edition)**.
    
4.  Find the CEN instance for which you want to create a VPC firewall and click **Create** in the **Actions** column.
    
    If the assets that you want to protect are not in the list, you can click **Synchronize Assets** to synchronize asset information from your Alibaba Cloud account and its member accounts.
    
5.  In the ****Create Firewall**** panel, follow the steps in the wizard to configure the VPC firewall.
    
    You can perform a one-click check to determine whether a Basic Edition transit router meets the conditions for creating a VPC firewall. After the check is complete, you can view the results in the **Enable Diagnosis** wizard. If you are familiar with the creation rules, you can skip this diagnostic check and create the firewall directly.
    
    The following table describes the VPC firewall configurations in CEN connection mode.
    
    **Configuration item**
    
    **Description**
    
    ****Basic Information****
    
    **Name**: Enter a name for the VPC firewall. The name is used to identify the VPC firewall instance. We recommend that you enter a unique and meaningful name as needed.
    
    ****VPC Configurations of Firewall****
    
    Assign CIDR blocks to the automatically created Cloud Firewall VPC and vSwitch. These are used to create a firewall security VPC (Cloud\_Firewall\_VPC) for traffic redirection. A subnet CIDR block is allocated from the assigned VPC CIDR block for the vSwitch of the Cloud Firewall VPC. The subnet mask of the subnet CIDR block must be 29 bits or less and **cannot conflict with the CIDR blocks in your network plan**.
    
    **Important**
    
    Configure the settings as needed. After a VPC firewall is created, you cannot change these settings. To change the settings, you must delete the firewall and create a new one.
    
    -   ****VPC of Firewall****: The default value is 10.0.0.0/8. You can customize the CIDR block of the firewall VPC. The following CIDR blocks and their subnet CIDR blocks are supported: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16.
        
    -   **vSwitch CIDR Block**: The default value is 10.219.219.216/29. If the default value conflicts with your network plan, you can specify a different value.
        
    -   **Configure Zone**:
        
        **Note**
        
        -   If you select **Default (Auto-assigned)** for both the primary and secondary zones, the active-active mode is enabled. This mode is easy to configure and ideal for scenarios with latency-insensitive service traffic.
            
        -   If you specify a **primary zone and a secondary zone**, the active-passive mode is used. This mode is suitable for scenarios where service traffic is sensitive to latency and can reduce traffic latency.
            
        -   For more information about the active-active and active-passive modes and the migration steps, see [Best practices for migrating VPC firewall zones](/help/en/cloud-firewall/cloudfirewall/use-cases/migrate-the-primary-and-secondary-zones-for-a-vpc-firewall-in-active-active-scenarios).
            
        
        -   **Primary Zone**: Sets the primary zone for the vSwitch. Cloud Firewall supports the automatic allocation of a vSwitch zone.
            
            **Important**
            
            If your services are sensitive to latency, we recommend that you set **Primary Zone** to the **region where service traffic occurs** and also set **Zone of the vSwitch required by the service VPC** to the same region to further reduce latency.
            
        -   **Secondary Zone**: Specifies the secondary zone for the vSwitch. By default, the VPC firewall prioritizes forwarding traffic through the primary zone (AZ) for efficient transmission. If the primary zone becomes unavailable, the system automatically switches over to the secondary zone to forward traffic, which ensures business continuity in disaster recovery scenarios.
            
    
    ****Assign vSwitch for Firewall****
    
    Configure the vSwitch of the service VPC for which you want to enable traffic redirection. The vSwitch is used by the elastic network interfaces (ENIs) that are required for Cloud Firewall traffic redirection. Cloud Firewall automatically assigns the vSwitch. If your services are sensitive to network latency, you can specify a zone for the service VPC to reduce network latency.
    
    **Important**
    
    This setting is determined by the service configuration and cannot be changed after creation. To change this setting, you must delete and recreate the resource.
    
    -   **Zone**: Select the zone for the vSwitch in the service VPC. To reduce latency, we recommend that you select the same zone as the primary zone of the firewall VPC's vSwitch.
        
    -   **vSwitch**: Select the vSwitch instance of the business VPC.
        
    
    ****Redirection Configuration****
    
    Enable or disable traffic redirection and view the protected CIDR blocks.
    
    **IPS**
    
    Select a mode and a policy for the intrusion prevention system (IPS).
    
    -   **IPS Mode**
        
        -   **Monitor Mode**: When enabled, it monitors malicious traffic and sends alerts.
            
        -   **Block Mode**: Blocks malicious traffic and prevents intrusions.
            
    -   **IPS Capabilities**
        
        -   **Basic Rules**: After you enable Basic Policies, they provide basic mitigation capabilities for your assets, including brute-force attack interception, command execution vulnerability interception, and control over post-infection connections to C&C (Command and Control) servers.
            
        -   **Virtual Patching**: Provides real-time protection against popular high-risk application vulnerabilities when enabled.
            
    
    **Note**
    
    This setting applies to all network instances under the same CEN instance.
    
6.  Click ****Start Creation****.
    
7.  On the **Cloud Enterprise Network (Basic Edition)** tab, turn on the switch for the VPC firewall that you created.
    
    Cloud Firewall can protect your network resources only after the VPC firewall is enabled. The VPC firewall is successfully enabled when its **Firewall Status** changes to **Enabled**.
    
    **Note**
    
    After you enable a VPC firewall, if you add or delete information in a VPC route table, Cloud Firewall requires 15 to 30 minutes to learn the new routes. We recommend that you wait for the route learning process to complete before you check whether the route table has taken effect. If you have any questions, you can [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm#/ticket/createIndex) to contact a product technical expert.
    
    After a VPC firewall is created, Cloud Firewall automatically creates the following resources:
    
    -   A VPC resource named `Cloud_Firewall_VPC`.
        
        **Important**
        
        Do not add other service resources to Cloud\_Firewall\_VPC. If you do, these resources cannot be deleted when you delete the VPC firewall. Do not manually modify or delete the network resources in this VPC.
        
    -   A vSwitch resource named `Cloud_Firewall_VSWITCH`.
        
    -   A custom route entry with the remark `Created by cloud firewall. Do not modify or delete it.`.
        
    
    After you enable a VPC firewall, a security group named Cloud\_Firewall\_Security\_Group is automatically added to Cloud\_Firewall\_VPC and the service VPC. An allow policy (**authorization policy**) is automatically configured for this security group to allow traffic to the VPC firewall.
    
    **Important**
    
    Do not delete the Cloud\_Firewall\_Security\_Group security group or its allow policy. Otherwise, service traffic will be interrupted.
    
    To perform batch operations or frequently enable and disable the VPC firewall, we recommend that you perform these operations during off-peak hours to avoid service interruptions.
    

## What to do next

-   After you enable a VPC firewall, you can configure access control policies for the VPC firewall to control access between VPCs. For more information, see [Access control policies for VPC firewalls](/help/en/cloud-firewall/cloudfirewall/user-guide/create-an-access-control-policy-for-a-vpc-firewall#concept-vgy-wgr-ggb).
    
-   After you enable a VPC firewall, you can use the VPC Access feature to view traffic between VPCs. For more information, see [VPC Access](/help/en/cloud-firewall/cloudfirewall/user-guide/view-vpc-access-data#task-1925821).
    
-   After you enable a VPC firewall, you can use the VPC Protection feature to view information about anomalous activity between VPCs that are blocked by Cloud Firewall. For more information, see [VPC Protection](/help/en/cloud-firewall/cloudfirewall/user-guide/intrusion-prevention#section-h8z-8ge-1fb).
    

## More operations

### **Edit a VPC firewall**

To modify the configuration of a VPC firewall, go to the **VPC Firewall** page and click the **Cloud Enterprise Network (Basic Edition)** tab. Find the network instance for the target VPC firewall and click **Edit** in the **Actions** column.

### **Disable a VPC firewall**

**Warning**

When you disable a VPC firewall, traffic may experience transient disconnections.

1.  On the **Firewall Settings** page, click the **VPC Firewall** tab.
    
2.  In **VPC Firewall**, on the **Cloud Enterprise Network (Basic Edition)** tab, locate the CEN instance for the target VPC firewall, and turn off the **Firewall Settings**.
    
    Wait for the VPC firewall to be disabled. The VPC firewall is successfully disabled when its **Firewall Status** changes to **Disabled**.
    

### **Delete a VPC firewall**

If you no longer need the VPC firewall, go to the **VPC Firewall** page and click the **Cloud Enterprise Network (Basic Edition)** tab. Find the network instance for the target VPC firewall and click **Delete** in the **Actions** column.

#### **Modify the IPS configuration**

To modify the intrusion prevention system (IPS) protection mode or capabilities, add specific destination or source IP addresses to a whitelist, or modify IPS rules, you can click **Configure IPS** in the **Actions** column of an existing Cloud Firewall instance. Then, configure the settings on the **VPC Border** tab of the **IPS Configuration** page. For more information, see [IPS Configuration](/help/en/cloud-firewall/cloudfirewall/user-guide/prevention-configuration).

## **References**

-   [VPC firewall overview](/help/en/cloud-firewall/cloudfirewall/user-guide/overview-of-vpc-firewalls)
    
-   [Does enabling a VPC firewall affect ECS security group rules?](/help/en/cloud-firewall/cloudfirewall/user-guide/faq-about-enabling-and-disabling-firewalls#title-nv5-nxq-14u)
    
-   [Why is a deny route policy added after I enable a VPC firewall in a scenario that involves a Basic Edition transit router?](/help/en/cloud-firewall/cloudfirewall/user-guide/faq-about-enabling-and-disabling-firewalls#title-ewo-yiq-3o2)
