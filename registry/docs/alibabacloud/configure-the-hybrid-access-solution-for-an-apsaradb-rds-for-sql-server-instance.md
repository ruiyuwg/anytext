This topic describes how to configure the hybrid access mode for an ApsaraDB RDS for SQL Server instance. This mode allows you to retain the endpoints of both the classic network type and virtual private cloud (VPC) type of your RDS instance. This way, you can migrate your RDS instance from the classic network to a VPC without service interruptions.

## Background information

When you migrate your RDS instance from the classic network to a VPC, the type of the internal endpoint changes from classic network to VPC. In this case, the endpoint string remains unchanged. This change causes a transient connection that lasts approximately 30 seconds, and classic network-type Elastic Compute Service (ECS) instances can no longer connect to your RDS instance over an internal network. To facilitate smooth migration, ApsaraDB RDS for SQL Server provides the hybrid access mode.

Hybrid access indicates that your RDS instance can be connected by both classic network-type and VPC-type ECS instances. In hybrid access mode, the system retains the original internal endpoint of the classic network type and generates an internal endpoint of the VPC type for your RDS instance. This prevents transient connections when you change the network type.

For security and performance purposes, we recommend that you use only the VPC type. You must specify a validity period for the hybrid access mode. When the hybrid access mode expires, the system releases the original internal endpoint of the classic network type and you cannot use the endpoint to connect your applications to your RDS instance. Before the hybrid access mode expires, you must add the internal endpoint of the VPC type to your applications. This ensures a smooth migration and prevents interruptions to your workloads.

For example, a company uses the hybrid access mode to change the network type of an RDS instance from classic network to VPC. During the validity period of the hybrid access mode, some applications use the internal endpoint of the VPC type to connect to the RDS instance, and other applications continue to use the internal endpoint of the classic network type to connect to the RDS instance. When all applications of the company can use the internal endpoint of the VPC type to connect to the RDS instance, you can release the internal endpoint of the classic network type.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2164472671/CAEQTxiBgID4.4ev0xkiIDBmMmVlNjQ2YzRkZjRmYTJiMGI3N2FlNGUwYzczYTdh3963382_20230830144006.372.svg)

## Prerequisites

-   The RDS instance resides in the classic network.
    
-   A VPC and a vSwitch are created in the zone in which the RDS instance resides. For more information about how to create VPCs and vSwitches, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#undefined).
    

## Limits

-   If the hybrid access mode is enabled, you cannot change the network type to classic network or change the zone of the RDS instance. For more information, see [Migrate an ApsaraDB RDS for SQL Server instance across zones](/help/en/rds/apsaradb-rds-for-sql-server/migrate-an-apsaradb-rds-for-sql-server-instance-across-zones).
    
-   If your RDS instance runs SQL Server 2008 R2, you cannot change the network type from classic network to VPC. However, there are three options:
    
    -   Option 1: [Upgrade a major version](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-an-apsaradb-rds-for-sql-server-instance-with-local-disks-from-sql-server-2008-r2-to-sql-server-2012-or-sql-server-2016) for the instance and change the instance's network type to VPC during the upgrade.
        
    -   Option 2: [Purchase a new RDS instance](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance-1) (select the required VPC during purchase), and [migrate data to the new instance](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-between-apsaradb-rds-for-sql-server-instances#concept-fxm-bhp-ydb).
        
    -   Option 3: If you no longer need to connect to the RDS instance over the classic network, you can go to the **Database Connection** page of the instance details page to manually release the classic network endpoint of the instance. After you release the classic network endpoint, **you can connect to the instance only by using its public endpoint**. For more information, see [Apply for or release a public endpoint](/help/en/rds/apsaradb-rds-for-sql-server/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-sql-server-instance).
        
        **Important**
        
        -   The classic network endpoint cannot be recovered after being released. Make sure you do not need it before you release it.
            
        -   We recommend that you test whether you can connect to the instance by using its public endpoint before you release the classic network endpoint.
            
        
-   If your RDS instance is a temporary RDS instance, you cannot change the network type from classic network to VPC. This is because temporary RDS instances support only the classic network type.
    

## Change the network type from classic network to VPC

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Database Connection**.
    
3.  Click **Switch to VPC**.
    
    **Note**
    
    If **Switch to VPC** is not displayed, you must check whether your RDS instance meets the requirements described in the **Prerequisites** and Limits sections.
    
4.  In the dialog box that appears, select a VPC and a vSwitch and specify whether to retain the classic network endpoint.
    
    -   Select a VPC. We recommend that you select the VPC in which the ECS instance that you want to connect resides. If the ECS instance and the RDS instance reside in different VPCs, these instances cannot communicate over an internal network unless you use Cloud Enterprise Network (CEN) or VPN Gateway to enable network communication between the VPCs of these instances. For more information, see [Overview of Alibaba Cloud CEN](/help/en/cen/getting-started/overview#concept-ppf-c3b-tdb) or [Establish IPsec-VPN connections between two VPCs (single-tunnel mode)](/help/en/vpn/sub-product-ipsec-vpn/use-cases/establish-ipsec-vpn-connections-between-two-vpcs#task-c4h-slz-wdb).
        
    -   Select a vSwitch. If no vSwitches are available in the selected VPC, create a vSwitch in the zone in which the RDS instance resides. For more information, see [Create and manage vSwitches](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
        
    -   Clear or select **Reserve original classic endpoint**. For more information, see the following table.
        
        **Operation**
        
        **Description**
        
        Clear Reserve original classic endpoint
        
        The classic network endpoint is not retained and changes to a VPC endpoint. When you change the network type from classic network to VPC, a transient connection that lasts approximately 30 seconds occurs and the connection between each classic network-type ECS instance and your RDS instance over an internal network is immediately closed.
        
        Select Reserve original classic endpoint
        
        The classic network endpoint is retained, and a new VPC endpoint is generated. In this case, your RDS instance runs in hybrid access mode. Both classic network-type and VPC-type ECS instances can access your RDS instance over an internal network.
        
        If you change the network type from classic network to VPC, no transient connections occur. The connection between each classic network-type ECS instance and the RDS instance over an internal network remains available until the classic network endpoint expires.
        
        Before the classic network endpoint expires, you must add the VPC endpoint to your application that runs on a VPC-type ECS instance. This allows the system to migrate your workloads to the selected VPC with no downtime.
        
5.  Add the private IP address of the required ECS instance to an IP address whitelist of the RDS instance. This way, the ECS instance can connect to the RDS instance over an internal network. ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3095793161/p21650.png)
    
6.  -   If you select Reserve original classic endpoint, you must add the VPC endpoint of your RDS instance to each VPC-type ECS instance before the classic network endpoint expires.
        
    -   If you clear Reserve original classic endpoint, the connection between each classic network-type ECS instance and the RDS instance over an internal network is immediately closed after the network type is changed. You must add the VPC endpoint of your RDS instance to your ECS instance.
        
    
    **Note**
    
    If you want to connect a classic network-type ECS instance to the VPC-type RDS instance over an internal network, you can use ClassicLink to establish a connection. Alternatively, you can migrate the ECS instance to the same VPC as the RDS instance. For more information, see [Overview](/help/en/vpc/overview-2#concept-q5z-kwb-sdb).
    

## Change the expiration date of the internal endpoint of the classic network type

During the validity period of the hybrid access mode, you can change the expiration date of the classic network endpoint based on your business requirements. The expiration date is immediately recalculated starting from the day when you make the change. For example, the classic network endpoint is configured to expire on August 18, 2017. On August 15, 2017, you extend the validity period of the classic network endpoint by 14 days. In this case, the classic network endpoint is released on August 29, 2017. To change the expiration date, perform the following operations:

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Database Connection**.
    
3.  On the **Instance Connection** tab, click **Change Expiration Time**.
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5350359951/p4748.png)
    
4.  In the **Change Expiration Time** dialog box, select an expiration date and click **OK**.
    

## **References**

-   For more information about the differences between VPCs and the classic network, see [FAQ about network types](/help/en/rds/support/faq-about-network-types).
    
-   To change the network type from classic network to VPC by calling an API operation, see [ModifyDBInstanceNetworkType](/help/en/rds/developer-reference/api-rds-2014-08-15-modifydbinstancenetworktype).
    
-   If an ECS instance cannot connect to an RDS instance over an internal network, an RDS instance cannot be accessed over the Internet, or other connection errors occur, see [Resolve the connection failure](/help/en/rds/support/what-do-i-do-if-i-fail-to-connect-to-an-apsaradb-rds-instance).
