If your network instances, such as VPCs, VBRs, and VPNs, are connected by an Enterprise Edition transit router of Cloud Enterprise Network (CEN), you can use a VPC firewall to protect traffic between the network instances and improve the security of your business assets. This topic describes how to create and manage a VPC firewall for an Enterprise Edition transit router.

## **Function introduction**

### **Protection principle**

After you create a VPC firewall, Cloud Firewall filters traffic between VPCs based on Deep Packet Inspection (DPI) traffic analysis, intrusion prevention system (IPS) rules, threat intelligence, Virtual Patches, and access control policies. Cloud Firewall then determines whether to forward the traffic and blocks unauthorized access to ensure the security of your private network assets.

The following figure shows a sample protection scenario for a VPC firewall that is used with an Enterprise Edition transit router.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6221484671/CAEQLhiBgMDd5emHkhkiIGY3MzQ1M2E5YWYyYzQzYzM4NmVlMGZlYzM2ZjVlNjIw4073480_20231108143355.139.svg)

For more information about the protection scope, see [What is Cloud Firewall?](/help/en/cloud-firewall/cloudfirewall/product-overview/what-is-cloud-firewall).

### **Impact on business**

When you create a VPC firewall, you do not need to change your current network topology. You can create a VPC firewall with a single click and set the traffic redirection mode to automatic or manual. This lets you protect your business assets without affecting your business. The creation process takes about 5 minutes. We recommend that you create the VPC firewall during off-peak hours.

In automatic traffic redirection mode, creating or deleting the VPC firewall takes approximately 5 to 30 minutes, depending on the number of routes, and does not affect your business.

In manual traffic redirection mode, the time required to create or delete the VPC firewall and the impact on your business depend on the traffic switching method.

### **Limits**

-   When you create a VPC firewall, a VPC-connected instance named Cloud\_Firewall\_VPC is created. Make sure that your Alibaba Cloud account has a sufficient quota for VPCs. For more information about VPC quotas, see [Limits and quotas](/help/en/vpc/understanding-vpc-quotas-in-alibaba-cloud#concept-dyx-jkx-5db).
    
-   The automatic traffic redirection mode does not support the following scenarios:
    
    -   The route table of the Enterprise Edition transit router contains static routes, except for static routes in the 100.64.0.0/10 CIDR block and its subnets.
        
    -   Traffic is redirected from VPC-connected instances, VBR-connected instances, and TR-connected instances at the same time.
        
    -   A Basic Edition transit router is used for traffic redirection.
        
    -   The transit router has a route conflict.
        
    -   The prefix list feature is used for a VPC.
        
-   VPC firewalls do not support protection for scenarios where a VPN Gateway, such as an IPsec-VPN or SSL VPN, is directly connected to a VPC. However, VPC firewalls support protection for scenarios where an IPsec-VPN is attached to a transit router. For more information, see [IPsec-VPN application scenarios (attached to a transit router)](/help/en/vpn/sub-product-ipsec-vpn/product-overview/associate-ipsec-vpn-connections-with-transit-routers).
    
-   VPC firewalls do not protect IPv6 traffic.
    
-   VPC firewalls do not redirect or protect traffic destined for the cloud service CIDR block (100.64.0.0/10) or routes with a 32-bit subnet mask.
    
-   You must manually maintain the following items:
    
    -   Routing policies in the CEN transit router route table. For example, you must manually configure and maintain the route priority policy for VBRs in the transit router route table of the VPC firewall.
        
    -   Static routes for the cloud service CIDR block (100.64.0.0/10).
        
    -   Route learning in the system route table.
        

## Create a VPC firewall and set the traffic redirection mode

### **Prerequisites**

-   You have purchased the Enterprise, Ultimate, or Pay-As-You-Go Edition of Cloud Firewall. For more information, see [Purchase Cloud Firewall](/help/en/cloud-firewall/cloudfirewall/getting-started/purchase-cloud-firewall#task-1796740).
    
    **Note**
    
    Only the Enterprise, Ultimate, and Pay-As-You-Go editions of Cloud Firewall support VPC firewalls for Enterprise Edition transit routers. The Premium Edition does not support this feature.
    
-   You have authorized Cloud Firewall to access your cloud resources. For more information, see [Authorize Cloud Firewall to access other cloud resources](/help/en/cloud-firewall/cloudfirewall/getting-started/authorize-cloud-firewall-to-access-other-cloud-resources#task-1960318).
    
-   You have purchased a CEN instance and are using an Enterprise Edition transit router to establish network connections between VPCs or between on-premises data centers and the cloud. For more information, see [Connect on-premises and cloud networks](/help/en/cen/getting-started/connect-network-instances-in-the-same-region#task-2047481) and [Connect VPCs across accounts](/help/en/cen/getting-started/use-enterprise-edition-transit-routers-to-connect-vpcs-across-regions-and-accounts#task-2293645).
    
    **Note**
    
    If a VPC in your CEN instance was created using a different Alibaba Cloud account and that account has not granted authorization to Cloud Firewall, you cannot create a VPC firewall. We recommend that you log on to the Cloud Firewall console using the corresponding account to grant the required authorization before you create the VPC firewall. For more information, see [Authorize Cloud Firewall to access other cloud resources](/help/en/cloud-firewall/cloudfirewall/getting-started/authorize-cloud-firewall-to-access-other-cloud-resources#task-1960318).
    
-   Your network resources must be in regions that support VPC firewalls. Otherwise, you cannot create a VPC firewall. For more information, see [Supported regions](/help/en/cloud-firewall/cloudfirewall/product-overview/supported-regions#concept-2012355).
    

### **Procedure**

**Important**

You cannot roll back or pause the process of enabling a VPC firewall. If an exception occurs, the system automatically rolls back the process.

1.  Log on to the [Cloud Firewall console](https://yundun.console.aliyun.com/?p=cfwnext). In the navigation pane on the left, click **Firewall Settings**.
    
2.  On the **Firewall Settings** page, click **VPC Firewall**.
    
3.  On the **VPC Firewall** tab, click ****CEN（Enterprise Edition）****.
    
4.  Find the transit router that is associated with the target CEN instance. In the **Actions** column, click **Create**.
    
    If the asset that you want to protect is not in the asset list, click **Synchronize Assets** to synchronize the asset information of your Alibaba Cloud account and its member accounts.
    
    **Important**
    
    -   **Automatic****:** If you use the Pay-As-You-Go Edition or a subscription edition with the pay-as-you-go feature enabled, Cloud Firewall covers the transit router traffic fees for traffic that the VPC firewall processes and sends back to the Enterprise Edition transit router. You do not need to pay these fees, and this traffic does not consume your VPC quota.
        
    -   **Manual****:** Traffic that is processed by the VPC firewall and sent back to the Enterprise Edition transit router incurs transit router traffic fees.
        
    
    #### **Automatic** (recommended)
    
    In automatic traffic redirection mode, you can create traffic redirection scenarios for each network instance as needed. The VPC firewall automatically configures routes on the Enterprise Edition transit router and creates elastic network interfaces (ENIs) for the VPC firewall to redirect traffic.
    
    1.  In the ****Create VPC Firewall**** panel, configure the VPC firewall based on the following table. Then, click **Check Now**. After the check is complete, click **Next**.
        
        **Parameter**
        
        **Description**
        
        ****Firewall Basic Information****
        
        ****Firewall Name****: The name of the VPC firewall. This name is used to identify the VPC firewall instance. We recommend that you enter a meaningful name based on your business needs and ensure that the name is unique.
        
        ****VPC Configurations of Firewall****
        
        -   **VPC CIDR Block of Firewall**: Assign a VPC CIDR block to Cloud Firewall. To ensure that Cloud Firewall works properly, assign a CIDR block with a subnet mask of at least 27 bits that does not conflict with your network planning.
            
        -   **Configure zones:**
            
            **Note**
            
            -   If you select **Default (Auto-assigned)** for both the primary and secondary zones, the active-active mode is enabled. This mode is easy to configure and ideal for scenarios with latency-insensitive service traffic.
                
            -   If you specify a **primary zone and a secondary zone**, the active-passive mode is used. This mode is suitable for scenarios where service traffic is sensitive to latency and can reduce traffic latency.
                
            -   For more information about the active-active and active-passive modes and the migration steps, see [Best practices for migrating VPC firewall zones](/help/en/cloud-firewall/cloudfirewall/use-cases/migrate-the-primary-and-secondary-zones-for-a-vpc-firewall-in-active-active-scenarios).
                
            
            -   **Primary Zone**: Set the primary zone. Cloud Firewall supports default assignment of vSwitch zones.
                
                **Important**
                
                If your business is sensitive to latency, we recommend that you specify the **Primary Zone** as the **area where service traffic occurs** to reduce latency.
                
            -   **Secondary Zone**: Set the secondary zone. The VPC firewall forwards traffic through the ENI in the primary zone by default for efficient transmission. When the primary zone becomes unavailable, the system automatically switches to the ENI in the secondary zone to forward traffic. This ensures business continuity in disaster recovery scenarios.
                
        
        **Intrusion Prevention**
        
        Select the operating mode and policy for the intrusion prevention system (IPS) module.
        
        -   **IPS Mode**
            
            -   ****Monitor Mode****: After you enable monitor mode, malicious traffic is monitored and alerts are generated.
                
            -   ****Block Mode****: After you enable block mode, malicious traffic is blocked to prevent intrusions.
                
        -   **IPS Capabilities**
            
            -   **Basic Rules**: After you enable basic policies, basic protection is provided for your assets. This includes blocking brute-force attacks and command execution vulnerabilities, and managing connections to command and control (C&C) servers after an infection.
                
            -   **Virtual Patching**: After you enable virtual patching, real-time protection against popular high-risk application vulnerabilities is provided.
                
        
        **Note**
        
        This setting applies to all network instances under the same CEN instance.
        
    2.  After the firewall is created, click **Next**. Then, configure the traffic redirection scenario based on the following table.
        
        You can also configure a traffic redirection scenario later. To do this, on the ****CEN（Enterprise Edition）**** tab, find the transit router that is associated with the target CEN instance and click ****Configure Now**** in the **Firewall Status** column. On the **Traffic Redirection Scenario** tab, click **Immediately Create Traffic Redirection Scenario** and then click **Create Traffic Redirection Scenario**.
        
        **Parameter**
        
        **Description**
        
        **Basic Information**
        
        Template Name: Set the name of the traffic redirection template.
        
        **Scenario Type**
        
        Select the type of scenario that you want to control and protect with the VPC firewall.
        
        -   **Instance-Instance**: Traffic between two network elements passes through Cloud Firewall for control. This type is suitable for simple network topologies.
            
        -   **Instance to Instances**: Traffic between one network element and multiple network elements is routed through Cloud Firewall for control. This is suitable for star network topologies. You can select **ALL** for sub-traffic redirection instances to redirect all traffic destined for the main traffic redirection instance through Cloud Firewall. (This is equivalent to the traffic redirection scenario of a VPC firewall for a Basic Edition TransitRouter).
            
            **Important**
            
            If the route table of the transit router contains custom deny routes, point-to-multipoint traffic redirection scenarios are not supported. We recommend that you use multi-point interconnection traffic redirection scenarios instead.
            
        -   **Interconnected Instances**: Traffic between multiple network elements passes through Cloud Firewall for control. This type is suitable for **Full-mesh** network topologies.
            
        
        **Note**
        
        Network elements are network instances connected through an Enterprise Edition transit router, including VPC-connected instances, VBR-connected instances, and TR-connected instances.
        
        **Traffic Redirection Object**
        
        Configure the **Instance Type** and **Instance ID**.
        
        **Important**
        
        In automatic traffic redirection mode, the number of protected VPCs is determined by the number of network elements, such as VPCs, transit routers, VBRs, and VPN gateways, that are configured in the traffic redirection scenario.
        
    3.  Click **OK**.
        
        The traffic redirection configuration takes a long time and is expected to be complete within 30 minutes. After the configuration is complete, traffic between network instances that are connected to the transit router is protected.
        
    
    After the VPC firewall is created, it is automatically enabled. Cloud Firewall automatically creates the following resources:
    
    -   A VPC resource named `Cloud_Firewall_VPC`.
        
        **Important**
        
        Do not add other business resources to \`Cloud\_Firewall\_VPC\`. If you do, the added resources cannot be deleted when you delete the VPC firewall. Do not manually modify or delete network resources in this VPC.
        
    -   A vSwitch resource named `Cloud_Firewall_VSWITCH`.
        
    -   Custom routes with the remark `Created by cloud firewall. Do not modify or delete it.`.
        
    
    **Note**
    
    If you add or delete routes in your VPC route table after you create a VPC firewall, you must wait 15 to 30 minutes for Cloud Firewall to learn the new routes. We recommend that you wait for Cloud Firewall to complete route learning before you check the route table. If you have any questions, you can submit a [ticket](https://smartservice.console.alibabacloud.com/console.htm#/ticket/createIndex) to consult a product technical expert.
    
    #### ****Manual****
    
    In manual traffic redirection mode, you must manually create ENIs for the VPC firewall on the Enterprise Edition transit router and configure routes to redirect traffic to the ENIs. For more information, see [Protect all traffic between VPCs connected to a CEN transit router (manual traffic redirection)](/help/en/cloud-firewall/cloudfirewall/use-cases/protect-traffic-between-vpcs-connected-by-using-a-cen-transit-router), [Protect part of the traffic between VPCs connected to a CEN transit router (manual traffic redirection)](/help/en/cloud-firewall/cloudfirewall/use-cases/protect-some-traffic-between-vpcs-connected-by-using-a-cen-transit-router), and [Protect traffic between VPCs connected to a CEN transit router in a cross-region scenario (manual traffic redirection)](/help/en/cloud-firewall/cloudfirewall/use-cases/protect-traffic-between-cross-region-vpcs-connected-by-using-cen-transit-routers).
    
    **Important**
    
    In manual traffic redirection mode, you must also select the VPC and vSwitch that are connected to the CEN instance. If you select this mode, you must renew your Cloud Firewall instance before it expires. Otherwise, the Cloud Firewall service becomes unavailable and traffic redirection for the VPC firewall fails, which causes a network interruption.
    
    1.  In the ****Create VPC Firewall**** panel, configure the VPC firewall.
        
        **Parameter**
        
        **Description**
        
        ****Firewall Basic Information****
        
        -   ****Firewall Name****: Define a name for the VPC firewall. This name is used to identify the VPC firewall instance. We recommend that you enter a meaningful name as needed and ensure that the name is unique.
            
        -   **VPC**: Configure a VPC for the firewall.
            
            **Important**
            
            The configured VPC must belong to the same account as the CEN-TR. Otherwise, the VPC firewall cannot be created.
            
        -   **vSwitch**: Configure a vSwitch for the firewall.
            
        
        **Intrusion Prevention**
        
        Select the operating mode and policy for the intrusion prevention system (IPS) module.
        
        -   **IPS Mode**
            
            -   ****Monitor Mode****: After you enable monitor mode, malicious traffic is monitored and alerts are generated.
                
            -   ****Block Mode****: After you enable block mode, malicious traffic is blocked to prevent intrusions.
                
        -   **IPS Capabilities**
            
            -   **Basic Rules**: After you enable basic policies, basic protection is provided for your assets. This includes blocking brute-force attacks and command execution vulnerabilities, and managing connections to command and control (C&C) servers after an infection.
                
            -   **Virtual Patching**: After you enable virtual patching, real-time protection against popular high-risk application vulnerabilities is provided.
                
        
        **Note**
        
        This setting applies to all network instances under the same CEN instance.
        
    2.  Click ****Start Creation****.
        
    
    After you create the VPC firewall, a security group named \`Cloud\_Firewall\_Security\_Group\` is automatically added. This security group is configured with an Authorization Policy to allow traffic to the VPC firewall.
    
    **Important**
    
    Do not delete the \`Cloud\_Firewall\_Security\_Group\` security group or its authorization policy. Otherwise, traffic will be interrupted.
    
    **Warning**
    
    -   After you create a VPC firewall, changing the vSwitch and route table in the \`Cloud\_Firewall\_VPC\` may cause a traffic interruption.
        
    -   Disabling or deleting a VPC firewall in manual traffic redirection mode for an Enterprise Edition transit router may cause a traffic interruption.
        
    
    To perform batch operations or frequently enable or disable VPC firewalls, we recommend that you perform these operations during off-peak hours to minimize the impact on your business.
    

## What to do next

-   After you create the VPC firewall, you can configure access control policies to control traffic between VPCs. For more information, see [Configure an access control policy for a VPC firewall](/help/en/cloud-firewall/cloudfirewall/user-guide/create-an-access-control-policy-for-a-vpc-firewall#concept-vgy-wgr-ggb).
    
-   After you create the VPC firewall, you can use the VPC Access feature to view traffic between VPCs. For more information, see [VPC Access](/help/en/cloud-firewall/cloudfirewall/user-guide/view-vpc-access-data#task-1925821).
    
-   After you create the VPC firewall, you can use the VPC protection feature to view anomalous activities between VPCs that are blocked by Cloud Firewall. For more information, see [View VPC traffic blocking events](/help/en/cloud-firewall/cloudfirewall/user-guide/intrusion-prevention#section-h8z-8ge-1fb).
    

## More operations

### **Change the configuration of the automatic traffic redirection mode**

If you want to modify the configuration of the automatic traffic redirection mode, or if your business no longer requires this mode, you can find the target transit router that is associated with the CEN instance, click **Details** in the **Actions** column, and then perform the following operations on the ****Traffic Redirection Scenario**** tab of the ****VPC Firewall Details**** panel.

#### **Disable a traffic redirection scenario**

1.  Click the enabled switch for the traffic diversion scenario.
    
2.  In the **Disable Traffic Redirection Scenario** dialog box, you can disable the traffic redirection scenario using **Route Rollback** or **Route Revocation**.
    
    -   **Route Rollback**: This option is suitable if you want to disable Cloud Firewall, have not modified the routes of the CEN transit router, and need to quickly restore the routing scenario that was used before traffic was redirected to Cloud Firewall. This rollback operation directly deletes the route table for Cloud Firewall traffic redirection, and the service is restored to the original route table. This process takes about 1 minute.
        
    -   **Route Revocation**: This option is suitable if you want to disable Cloud Firewall, have modified the routes of the CEN transit router, and need to revoke the routing scenario that was created by Cloud Firewall. This operation deletes only the Cloud Firewall route entries and does not delete the route table that was created by Cloud Firewall. The time required for this process depends on the number of route entries. The more route entries there are, the longer the process takes.
        
3.  Click **OK**.
    
    **Important**
    
    The disable operation cannot be undone. Carefully confirm your action before you proceed. After you disable the scenario, promptly check the traffic status of your services.
    

#### **Delete a traffic redirection scenario**

Hover the pointer over the card of the traffic redirection scenario that you want to delete and click **Delete**. Before you can delete an automatic traffic redirection scenario, you must disable it.

#### **Modify a traffic redirection scenario**

Hover the pointer over the card of the traffic redirection scenario that you want to modify and click **Edit**.

#### **View route details**

Hover the pointer over the card of the traffic redirection scenario that you want to view and click ****Route Details**** to view the route details for VPC firewall traffic redirection.

### **Edit or delete a VPC firewall**

If you want to modify the configuration of a VPC firewall or if your business no longer requires the VPC firewall, go to the ****VPC Firewall****'s ****CEN（Enterprise Edition）**** tab. Then, find the transit router that is associated with the target CEN instance and click **Edit** or ****Delete**** in the **Actions** column.

**Important**

-   Manual mode: If you want to delete the firewall instance, you must first manually delete the routes that point to the VPC firewall and then delete the VPC firewall. This prevents service interruptions.
    
-   Automatic mode: If the firewall is enabled, you must first delete all traffic redirection scenarios and then delete the VPC firewall.
    

### **Modify the IPS configuration**

To modify the intrusion prevention system (IPS) protection mode or capabilities, add specific destination or source IP addresses to a whitelist, or modify IPS rules, you can click **Configure IPS** in the **Actions** column of an existing Cloud Firewall instance. Then, configure the settings on the **VPC Border** tab of the **IPS Configuration** page. For more information, see [IPS Configuration](/help/en/cloud-firewall/cloudfirewall/user-guide/prevention-configuration).

## **References**

-   [Overview of VPC firewalls](/help/en/cloud-firewall/cloudfirewall/user-guide/overview-of-vpc-firewalls)
    
-   [Does creating a VPC firewall affect ECS security group rules?](/help/en/cloud-firewall/cloudfirewall/user-guide/faq-about-enabling-and-disabling-firewalls#title-nv5-nxq-14u)
    
-   [Why am I prompted that unauthorized network instances exist when I create a VPC firewall?](/help/en/cloud-firewall/cloudfirewall/user-guide/faq-about-enabling-and-disabling-firewalls#title-quo-qx3-w6y)
