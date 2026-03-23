This topic describes how to change the network type of an ApsaraDB RDS for PostgreSQL instance based on your business requirements.

## Network types

-   Classic network: RDS instances in the classic network are not isolated. To block unauthorized access to these instances, you must configure IP address whitelists or security groups.
    
-   Virtual private cloud (VPC): Each VPC is an isolated virtual network. We recommend that you select the VPC type because it is more secure than the classic network.
    
    You can configure route tables, CIDR blocks, and gateways in a VPC. In addition, you can connect your data center to a VPC by using Express Connect circuits or VPNs. The data center and the VPC comprise a virtual data center. You can use the virtual data center to migrate your workloads to the cloud with no downtime.
    

**Note**

-   You can select the classic or VPC network type and switch your RDS instance between these network types free of charge.
    
-   Before you change the network type, you must enable the enhanced whitelist mode for your RDS instance. For more information, see [Change the whitelist mode to the enhanced whitelist mode](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-to-the-enhanced-whitelist-mode#concept-vzw-gq2-x2b).
    

## Usage notes

If you want to migrate a read-only RDS instance from the classic network to a VPC, you must migrate the corresponding primary instance to a VPC first.

-   If the read-only RDS instance that you want to migrate uses Premium Local SSDs, you can choose the VPC to which you want to migrate.
    
-   If the read-only RDS instance that you want to migrate uses cloud disks, the VPC of the read-only instance must be the same as that of the primary instance.
    

## View the network type

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Connection**.
    

## Change the network type from classic network to VPC

**Note**

Your RDS instance resides in the classic network.

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Database Connection**.
    
3.  Click **Switch to VPC**.
    
4.  In the Switch to VPC dialog box, select a VPC and a vSwitch and specify whether to retain the classic network endpoint.
    
    -   Select a VPC. We recommend that you select the VPC where the Elastic Compute Service (ECS) instance that you want to connect resides. If the ECS instance and the RDS instance reside in different VPCs, these instances cannot communicate over an internal network unless you use Cloud Enterprise Network (CEN) or VPN Gateway to enable network communication between the VPCs of these instances. For more information, see [Overview of Alibaba Cloud CEN](/help/en/cen/user-guide/use-cen-to-enable-intra-region-network-communication) or [Establish IPsec-VPN connections between two VPCs (single-tunnel mode)](/help/en/vpn/sub-product-ipsec-vpn/use-cases/establish-ipsec-vpn-connections-between-two-vpcs#task-c4h-slz-wdb).
        
    -   Select a vSwitch. If no vSwitches are available in the selected VPC, create a vSwitch **in the zone where the RDS instance resides**. For more information, see [Create and manage vSwitches](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
        
    -   Clear or select the **Reserve original classic endpoint** check box. For more information, see the following table.
        
        **Operation**
        
        **Description**
        
        Clear the Reserve original classic endpoint check box
        
        The classic network endpoint is not retained and changes to a VPC endpoint.
        
        When you change the network type from classic network to VPC, a transient connection that lasts approximately 30 seconds occurs and ECS instances that reside in the classic network are immediately disconnected from your RDS instance.
        
        Select the Reserve original classic endpoint check box
        
        The classic network endpoint is retained, and a new VPC endpoint is generated. In this case, your RDS instance is in the hybrid access mode. Both classic network-type ECS instances and VPC-type ECS instances can access your RDS instance over an internal network. For more information, see [Configure the hybrid access solution for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/configure-the-hybrid-access-solution-for-an-apsaradb-rds-for-postgresql-instance#concept-ytc-d1y-wdb).
        
        When you change the network type from classic network to VPC, no transient connection occurs. The connection between each classic network-type ECS instance and the RDS instance remains available until the classic network endpoint expires.
        
        Before the classic network endpoint expires, add the VPC endpoint to your application that runs on a VPC-type ECS instance. This allows ApsaraDB RDS to migrate your workloads to the selected VPC with no downtime. ApsaraDB RDS sends a text message to the mobile number that is bound to your Alibaba Cloud account every day within seven days before the classic network endpoint expires.
        
        For more information, see [Configure the hybrid access solution](/help/en/rds/apsaradb-rds-for-postgresql/configure-the-hybrid-access-solution-for-an-apsaradb-rds-for-postgresql-instance#concept-ytc-d1y-wdb).
        
5.  Add the private IP address of the required VPC-type ECS instance to an IP address whitelist of the VPC network type on the RDS instance. This way, the ECS instance can access the RDS instance over an internal network. If no IP address whitelists of the VPC network type are available, create one.
    
6.  Add the VPC endpoint of the RDS instance to the required VPC-type ECS instance.
    
    -   If you selected Reserve original classic endpoint, you must add the VPC endpoint to your application that runs on the required VPC-type ECS instance before the classic network endpoint expires.
        
    -   If you cleared the Reserve original classic endpoint check box, the connection between each classic network-type ECS instance and the RDS instance over an internal network is immediately closed after the network type is changed. You must add the VPC endpoint of the RDS instance to your application that runs on the required VPC-type ECS instance.
        
    
    **Note**
    
    If the RDS instance resides in a VPC and you want to connect a classic network-type ECS instance to the RDS instance over an internal network, you can use ClassicLink to establish a connection. Alternatively, you can migrate the ECS instance to the same VPC as the RDS instance. For more information, see [Overview](/help/en/rds/apsaradb-rds-for-postgresql/connect-a-classic-network-type-ecs-instance-to-a-vpc-type-apsaradb-rds-for-postgresql-instance#task-2282059).
    

## **FAQ**

**Can I still access my RDS instance by using its public endpoint after I change the network type of the instance from the classic network to VPC?**

After you change the network of an RDS instance from the classic network to VPC, only the internal endpoint of the instance is switched to VPC. You can still access the instance through the Internet by using its public endpoint.

## Related operation

**Operation**

**Description**

[ModifyDBInstanceNetworkType](/help/en/rds/api-change-the-network-type-of-an-apsaradb-for-rds-instance#reference-p24-w13-12b)

Changes the network type of an instance.
