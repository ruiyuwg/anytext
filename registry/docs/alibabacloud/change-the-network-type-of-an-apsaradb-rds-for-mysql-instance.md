This topic describes how to change the network type of an ApsaraDB RDS for MySQL instance from classic network to virtual private cloud (VPC) based on your business requirements.

## Classic network and VPC

-   **Classic network:** RDS instances of the classic network type cannot be isolated by using network settings. You can block unauthorized access to the RDS instances of the classic network type only by configuring IP address whitelists or security groups.
    
    **Important**
    
    -   **RDS instances of the classic network type can no longer be renewed, upgraded, downgraded, or cloned from 00: 00 on October 30, 2024**. For more information, see [\[Product changes/Feature changes\] Alibaba Cloud plans to phase out ApsaraDB RDS instances of the classic network type](/help/en/rds/apsaradb-rds-for-mysql/eol-for-apsaradb-rds-instances-of-the-classic-network-type).
        
    -   **You may fail to renew your RDS instance or change the specifications of the RDS instance due to the following reasons:**
        
        -   **The network type is changed to VPC but the classic network endpoint is not deleted.** In this case, you must go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page and click the ID of the required RDS instance. On the page that appears, click **Database Connection** to delete the classic network endpoint.
            
        -   **The network type is not changed to VPC before the expiration.** In this case, you must [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to apply for validity period extension. After the validity period is extended, change the network type to VPC, **delete the classic network endpoint**, and then renew the RDS instance.
            
    
-   **VPC:** Each VPC is an isolated virtual network. VPCs are more secure than the classic network. We recommend that you select the VPC network type. You can customize route tables, CIDR blocks, and gateways for a VPC. In addition, you can connect your data center to a VPC by using Express Connect circuits or VPNs. The data center and the VPC comprise a virtual data center. You can use the virtual data center to migrate your workloads to the cloud with no downtime.
    

## **Usage notes**

-   **Database proxies:** If the [database proxy](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#concept-2020985) feature is enabled for an RDS instance, a network type change may cause the following impacts. You can view the type of the proxy that is enabled for your RDS instance on the **Database Proxy** page in the ApsaraDB RDS console. For more information, see [What are database proxies?](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies)
    
    **Proxy type**
    
    **Impact**
    
    [Shared proxy](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#concept-2020985)
    
    After you change the network type of your RDS instance, the network type of the database proxy endpoint also changes. For more information, see [What are database proxies?](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies)
    
    **Note**
    
    Starting April 1, 2021, Alibaba Cloud has stopped the updates and maintenance for the shared proxy feature. We recommend that you upgrade the database proxy of your RDS instance from a shared proxy to a dedicated proxy at the earliest opportunity. For more information, see [\[EOS/Discontinuation\] End of updates and maintenance for the shared proxy feature from April 01, 2021](/help/en/rds/apsaradb-rds-for-mysql/end-of-updates-and-maintenance-for-the-shared-proxy-feature#concept-2022010) and [Upgrade the database proxy from a shared database proxy to a dedicated database proxy](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-database-proxy-of-an-apsaradb-rds-for-mysql-instance-from-a-shared-proxy-to-a-dedicated-proxy#task-2438932).
    
    [Dedicated proxy and general-purpose proxy](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#171b5a307fbvc)
    
    After you change the network type of your RDS instance, the database proxy endpoint remains unchanged. For more information, see [What are database proxies?](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies)
    
    You can create database proxy endpoints of different network types. For example, you can create a database proxy endpoint of the classic network type and a database proxy endpoint of the VPC network type on the same RDS instance. For more information, see [Configure the connection settings for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-access-policies-for-a-database-proxy-endpoint) and [Manage the dedicated proxy endpoints of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/manage-the-dedicated-proxy-endpoints-of-an-apsaradb-rds-for-mysql-instance).
    
-   **Read-only RDS instances:** If you want to change the network type of a read-only RDS instance from classic network to VPC, you must first change the network type of its primary RDS instance to VPC.
    
    -   If Premium Local SSDs are used, you can select any VPC. The selected VPC can be different from the VPC of the primary RDS instance.
        
    -   If cloud disks are used, you can select only the VPC of the primary RDS instance.
        
-   **Whitelist:**
    
    -   For an RDS instances that runs MySQL 5.6 or MySQL 5.7 on RDS High-availability Edition and uses Premium Local SSDs, if you want to change the network type of the instance, **you must change the IP address whitelist mode to the enhanced whitelist mode**. In this case, the server IP addresses in the original whitelist is automatically replicated to the classic network group of the enhanced whitelist. For more information, see [Change to the enhanced whitelist mode](/help/en/rds/apsaradb-rds-for-mysql/change-the-network-isolation-mode-of-an-apsaradb-rds-for-mysql-instance-to-the-enhanced-whitelist-mode).
        
    -   **If the enhanced whitelist mode is enabled for your RDS instance, you must complete the following operations after the network type is changed:**
        
        -   Modify the IP address whitelist settings to add server IP addresses to the **IP address whitelist of the VPC type**.
            
        -   Add the IP address of the device that you want to connect to the RDS instance over the Internet to the **IP address whitelist of the classic network type**. For more information, see [Change to the enhanced whitelist mode](/help/en/rds/apsaradb-rds-for-mysql/change-the-network-isolation-mode-of-an-apsaradb-rds-for-mysql-instance-to-the-enhanced-whitelist-mode).
            

## **Billing rules**

You can use the VPC or classic network type and change the network type of your RDS instance free of charge.

## View the network type

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Database Connection**.
    

## Change the network type from classic network to VPC

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane of the page that appears, click **Database Connection**.
    
3.  Click **Switch to VPC**.
    
    **Note**
    
    If the preceding button cannot be found, check whether your RDS instance resides in the classic network.
    
4.  In the dialog box that appears, select a VPC and a vSwitch and specify whether to retain the classic network endpoint.
    
    -   **Select a VPC.** We recommend that you select the VPC in which the Elastic Compute Service (ECS) instance that you want to connect resides. If the ECS instance and the RDS instance reside in different VPCs, these instances cannot communicate over an internal network unless you use Cloud Enterprise Network (CEN) or VPN Gateway to enable network communication between the VPCs of these instances. For more information, see [Overview of Alibaba Cloud CEN](/help/en/cen/user-guide/use-cen-to-enable-intra-region-network-communication) or [Establish IPsec-VPN connections between two VPCs (single-tunnel mode)](/help/en/vpn/sub-product-ipsec-vpn/use-cases/establish-ipsec-vpn-connections-between-two-vpcs#task-c4h-slz-wdb). If no VPCs are available in the region of the RDS instance, create a VPC. For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575).
        
    -   **Select a vSwitch.** If no vSwitches are available in the selected VPC, create a vSwitch in **the zone in which the RDS instance resides**. For more information, see [Create and manage vSwitches](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
        
    -   Clear or select **Reserve original classic endpoint**.
        
        -   **Clear Reserve original classic endpoint:** The classic network endpoint is not retained and changes to a VPC endpoint.
            
        -   **Select Reserve original classic endpoint:** The hybrid access mode is enabled for the RDS instance. As a result, the classic network endpoint is retained, and a VPC endpoint is generated. In this case, you must modify the configurations of your applications to change the original classic network endpoint to the new VPC endpoint. For more information, see [Configure the hybrid access mode](/help/en/rds/apsaradb-rds-for-mysql/configure-the-hybrid-access-solution-for-an-apsaradb-rds-for-mysql-instance). During the change, you can use the classic network endpoint or VPC endpoint to connect to the RDS instance. After the change, you **must release the original classic network endpoint**.
            
            **Affected item**
            
            **Classic network endpoint not retained**
            
            **(direct change)**
            
            **Classic network endpoint retained**
            
            **(**[hybrid access mode](/help/en/rds/apsaradb-rds-for-mysql/configure-the-hybrid-access-solution-for-an-apsaradb-rds-for-mysql-instance) **enabled for smooth change)**
            
            **Instance connection**
            
            When you change the network type of an instance from classic network to VPC, **the connection to the instance is momentarily disconnected** and the classic network-type ECS instances that are connected to your RDS instance over an internal network are **immediately disconnected**.
            
            When you change the network type of an instance from classic network to VPC, **the connection to the instance is not affected**. The connection between each classic network-type ECS instance and the RDS instance **remains available** until the classic network endpoint expires.
            
            **Internal endpoint**
            
            **Only one internal endpoint: After the change, the internal endpoint remains unchanged** but the type of the internal endpoint is changed from classic network to VPC.
            
            **Two internal endpoints:** The internal endpoint of the classic network type is retained and an internal endpoint of the VPC type is generated.
            
            **Internal network access**
            
            If a different cloud service instance, such as ECS instance, wants to access an RDS instance, the network type of the cloud service instance must be VPC.
            
            If a different cloud service instance, such as ECS instance, wants to access an RDS instance, the network type of the cloud service instance can be classic network or VPC.
            
            -   If the network type is classic network, the cloud service instance connects to the RDS instance by using the **internal endpoint of the classic network type**.
                
            -   If the network type is VPC, the cloud service instance connects to the RDS instance by using **the internal endpoint of the VPC type**.
                
            
            After the classic network endpoint expires, you can use only the VPC endpoint to connect to the RDS instance.
            
            **Public endpoint**
            
            The Internet access is not affected because the public endpoint remains unchanged regardless of the method used to change the network type. **Only the internal endpoint and internal network access are affected.**
            
            **Internet access**
            
    
5.  Add the private IP address of the VPC-type ECS instance to the IP address whitelist of the VPC type for the RDS instance. This way, the ECS instance can connect to the RDS instance over an internal network. For more information, see [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance). If no IP address whitelists of the VPC network type are available, create one.
    
    **Note**
    
    You can go to the **Instance Details** tab of an ECS instance in the [ECS console](https://ecs.console.alibabacloud.com/#/server/region/cn-hangzhou) to view the private IP address of the ECS instance.
    
6.  Modify the connection configuration of your application for the application to connect to the RDS instance by using the VPC endpoint of the RDS instance. For more information, see [View and manage instance endpoints and ports](/help/en/rds/apsaradb-rds-for-mysql/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-mysql-instance).
    
    -   If you select Reserve original classic endpoint, you must add the VPC endpoint to your application that runs on an ECS instance before the classic network endpoint expires.
        
    -   If you clear Reserve original classic endpoint, the connection between each ECS instance of the classic network type and the RDS instance over an internal network is immediately closed after the network type is changed. You must add the VPC endpoint of the RDS instance to your application that runs on the ECS instance.
        
    
    **Note**
    
    -   If you want to connect a VPC-type ECS instance to the VPC-type RDS instance over an internal network, **make sure that the instances reside in the same region and the same VPC. You can check whether the instances reside in the same VPC based on the VPC ID.**
        
    -   If you want to connect a classic network-type ECS instance to the VPC-type RDS instance over an internal network, you can use ClassicLink to establish a connection. Alternatively, you can migrate the ECS instance to the same VPC as the RDS instance. For more information, see [Overview](/help/en/vpc/overview-2#undefined) and [Migrate ECS instances from the classic network to a VPC](/help/en/vpc/migrate-ecs-instances-from-the-classic-network-to-a-vpc).
        
    

## **FAQ**

Are the public endpoint and Internet access affected after the network type of an RDS instance is changed from classic network to VPC?

No, the public endpoint and Internet access are not affected. The network type change from classic network to VPC indicates that the classic network endpoint is changed to the VPC endpoint. The VPC endpoint is a type of internal endpoint and does not affect the public endpoint and Internet access.

## Related operations

**Operation**

**Description**

[ModifyDBInstanceNetworkType](/help/en/rds/api-change-the-network-type-of-an-apsaradb-for-rds-instance#doc-api-Rds-ModifyDBInstanceNetworkType)

Changes the network type of an ApsaraDB RDS instance.
