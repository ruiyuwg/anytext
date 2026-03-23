You can change the network type of an ApsaraDB RDS for SQL Server instance based on your business requirements.

**Note**

To provide more secure cloud network environments and better user experience, Alibaba Cloud no longer provides RDS for SQL Server instance of the classic network type from April 10, 2023. For more information, see [\[Announcement\] The classic network type is no longer supported for new ApsaraDB RDS for SQL Server instances from April 10, 2023](/help/en/rds/apsaradb-rds-for-sql-server/the-classic-network-type-is-no-longer-supported-for-new-apsaradb-rds-for-sql-server-instances).

## Network types

-   **Classic network**: RDS instances of the classic network type cannot be isolated by using network settings. You can block unauthorized access to the RDS instances of the classic network type only by configuring IP address whitelists or security groups. RDS instances of the classic network type are phased-out. For more information, see [\[Product changes/Feature changes\] Alibaba Cloud plans to phase out ApsaraDB RDS instances of the classic network type](/help/en/rds/apsaradb-rds-for-sql-server/eol-for-apsaradb-rds-instances-of-the-classic-network-type).
    
-   **Virtual private cloud (VPC)**: Each VPC is an isolated virtual network. VPCs are more secure than the classic network. We recommend that you choose the VPC network type.
    
    You can customize route tables, CIDR blocks, and gateways for a VPC. In addition, you can connect your data center to a VPC by using Express Connect circuits or VPNs. The data center and the VPC comprise a virtual data center. You can use the virtual data center to migrate your workloads to the cloud with no downtime.
    

**Important**

-   You can choose the classic or VPC network type and switch your RDS instance between these network types free of charge.
    
-   You can change the network type of an RDS instance from classic network to VPC. The change cannot be rolled back. However, you cannot change the network type of an RDS instance from VPC to classic network.
    

## Limits

-   If your RDS instance runs SQL Server 2008 R2, you cannot change the network type from classic network to VPC. However, there are three options:
    
    -   Option 1: [Upgrade a major version](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-an-apsaradb-rds-for-sql-server-instance-with-local-disks-from-sql-server-2008-r2-to-sql-server-2012-or-sql-server-2016) for the instance and change the instance's network type to VPC during the upgrade.
        
    -   Option 2: [Purchase a new RDS instance](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance-1) (select the required VPC during purchase), and [migrate data to the new instance](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-between-apsaradb-rds-for-sql-server-instances#concept-fxm-bhp-ydb).
        
    -   Option 3: If you no longer need to connect to the RDS instance over the classic network, you can go to the **Database Connection** page of the instance details page to manually release the classic network endpoint of the instance. After you release the classic network endpoint, **you can connect to the instance only by using its public endpoint**. For more information, see [Apply for or release a public endpoint](/help/en/rds/apsaradb-rds-for-sql-server/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-sql-server-instance).
        
        **Important**
        
        -   The classic network endpoint cannot be recovered after being released. Make sure you do not need it before you release it.
            
        -   We recommend that you test whether you can connect to the instance by using its public endpoint before you release the classic network endpoint.
            
        
-   If your RDS instance is a temporary RDS instance, you cannot change the network type from classic network to VPC. This is because temporary RDS instances support only the classic network type.
    

## View the network type

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Connection**. On the page that appears, view the network type of the RDS instance.
    

## Change the network type from classic network to VPC

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Connection**. On the Instance Connection tab, click **Switch to VPC**.
    
    **Important**
    
    If you cannot find the **Switch to VPC** button, the network type of your RDS instance may not be the classic network, or your instance runs SQL Server 2008 R2. In this case, refer to the options described in [Limits](#section-79k-022-23n).
    
3.  In the Switch to VPC dialog box, select a VPC and a vSwitch and specify whether to retain the classic network endpoint.
    
    -   Select a VPC. We recommend that you select the VPC where the Elastic Compute Service (ECS) instance that you want to connect resides. If the ECS and RDS instances reside in different VPCs, these instances can only communicate over public networks unless you create Cloud Enterprise Network (CEN) or VPN Gateway between the VPCs of these instances. For more information, see [Overview of Alibaba Cloud CEN](/help/en/cen/getting-started/overview#concept-ppf-c3b-tdb) or [Establish IPsec-VPN connections between two VPCs](/help/en/vpn/sub-product-ipsec-vpn/use-cases/establish-ipsec-vpn-connections-between-two-vpcs#undefined).
        
    -   Select a vSwitch. If no vSwitches are available in the selected VPC, create one in the same zone where the instance is deployed. For more information, see [Create a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#undefined).
        
    -   Clear or select **Reserve original classic endpoint**.
        
        **Operation**
        
        **Description**
        
        Clear Reserve original classic endpoint
        
        The classic network endpoint is removed and replaced with a VPC endpoint.
        
        When you change the network type from classic network to VPC, a transient connection that lasts approximately 30 seconds occurs and ECS instances that reside in the classic network are immediately disconnected from your RDS instance.
        
        Select Reserve original classic endpoint
        
        The classic network endpoint is retained, and a new VPC endpoint is generated. In this case, the RDS instance runs in hybrid access mode. For more information, see [Configure the hybrid access solution for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/configure-the-hybrid-access-solution-for-an-apsaradb-rds-for-sql-server-instance#concept-ytc-d1y-wdb). In hybrid access mode, classic network-type ECS instances and VPC-type ECS instances can connect to the RDS instance over an internal network.
        
        When you change the network type from classic network to VPC, no transient connection occurs. The connection between each classic network-hosted ECS instance and the RDS instance remains available until the classic network endpoint expires.
        
        **Note**
        
        -   Before the classic network endpoint expires, you must add the VPC endpoint to your application that runs on a VPC-type ECS instance. This allows ApsaraDB RDS to migrate your workloads to the selected VPC with no downtime. ApsaraDB RDS sends a text message to the mobile number that is bound to your Alibaba Cloud account every day within seven days before the classic network endpoint expires.
            
        -   For more information, see [Configure the hybrid access solution for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/configure-the-hybrid-access-solution-for-an-apsaradb-rds-for-sql-server-instance#concept-ytc-d1y-wdb).
            
        
    
4.  Add the internal IP address of the required VPC-type ECS instance to an IP address whitelist of the VPC network type on the RDS instance. This way, the ECS instance can access the RDS instance over an internal network. If no IP address whitelists of the VPC network type are available, create one.
    
    **Note**
    
    You can view the private IP address of the [ECS instance](https://ecs.console.alibabacloud.com/#/server/region/cn-hangzhou) on the **Instance Details** page.
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5350359951/p12638.png)
    
5.  Add the VPC endpoint of the RDS instance to the required VPC-type ECS instance.
    
    -   If you select Reserve original classic endpoint, add the VPC endpoint of your RDS instance to each required VPC-type ECS instance before the classic network endpoint expires.
        
    -   If you clear Reserve original classic endpoint, the connection between each classic network-hosted ECS instance and the RDS instance over an internal network is immediately closed after the network type is changed. You must add the VPC endpoint of the RDS instance to your application that runs on the required VPC-type ECS instance.
        
    
    **Note**
    
    If the RDS instance resides in a VPC and you want to connect a classic network-hosted ECS instance to the RDS instance over an internal network, you can use ClassicLink to establish a connection. Alternatively, you can migrate the ECS instance to the same VPC as the RDS instance. For more information, see [Use ClassicLink to connect a classic network and a VPC](/help/en/vpc/using-classiclink).
    

## Related operations

You can also use API to change the network type of an RDS instance from classic network to VPC. For more information, see [ModifyDBInstanceNetworkType](/help/en/rds/api-change-the-network-type-of-an-apsaradb-for-rds-instance#doc-api-Rds-ModifyDBInstanceNetworkType).
