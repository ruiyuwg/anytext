This topic describes how to connect to an ApsaraDB RDS instance over the Internet or an internal network. We recommend that you establish a connection over an internal network to ensure data security and transmission efficiency.

**Important**

-   RDS instances no longer support the classic network type. We recommend that you connect to an RDS instance over a virtual private cloud (VPC) . For more information, see [\[Product changes/Feature changes\] Alibaba Cloud plans to phase out ApsaraDB RDS instances of the classic network type](/help/en/rds/apsaradb-rds-for-mysql/eol-for-apsaradb-rds-instances-of-the-classic-network-type).
    
-   After you change the network type of an RDS instance from the classic network to VPC or enable the hybrid access mode for the instance, only the internal endpoint of the instance is changed. Access to the instance through the public endpoint is not affected. For more information, see [Change the network type](/help/en/rds/apsaradb-rds-for-mysql/change-the-network-type-of-an-apsaradb-rds-for-mysql-instance).
    
-   You can check the network type of the RDS instance and choose a connection method based on the network type of the RDS instance. For more information, see [Use a client or the CLI to connect to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-a-client-or-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance#concept-n1v-qpf-vdb).
    

## Connect to an RDS instance over the Internet

If you want to connect to an RDS instance over the Internet, you must use the public endpoint of the RDS instance. By default, an RDS instance is not provided with a public endpoint. You must apply for a public endpoint for an RDS instance. For more information, see [Apply for or release a public endpoint](/help/en/rds/apsaradb-rds-for-mysql/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mysql-instance#concept-nsl-hff-vdb).

**Note**

-   If you use a public endpoint to connect to an RDS instance, data security is compromised. Proceed with caution.
    
-   If you access an RDS instance from an Elastic Compute Service (ECS) instance over the Internet, the traffic from the RDS instance to the ECS instance is free of charge. However, you are charged fees for the traffic from the ECS instance to the RDS instance.
    
-   For faster transmission and higher security, we recommend that you migrate your application to an ECS instance that resides in the same region and has the same network type as the RDS instance. This way, you can connect to the RDS instance by using the internal endpoint of the RDS instance.
    

After you obtain a public endpoint, you can use the public endpoint to connect to the RDS instance. For more information, see the [References](#section-ofk-th4-tgb) section of this topic.

## Connect to an RDS instance over an internal network

If you want to connect to an RDS instance over an internal network, you must use the internal endpoint of the RDS instance. For more information about how to view the internal endpoint of an RDS instance, see [View and manage instance endpoints and ports](/help/en/rds/apsaradb-rds-for-mysql/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-mysql-instance#concept-fbd-ypv-ydb).

**Prerequisites**

In most cases, you can connect to an RDS instance over an internal network from Data Management (DMS) or an ECS instance. To connect to an RDS instance from an on-premises data center, you must use Cloud Enterprise Network (CEN) to enable communication between the data center and the RDS instance. For more information, see [Use CEN to enable intra-region network communication](/help/en/cen/user-guide/use-cen-to-enable-intra-region-network-communication).

If you want to connect an ECS instance to your RDS instance over an internal network, the following requirements must be met:

-   The ECS instance and the RDS instance reside in the same network type.
    
    We recommend that you access the RDS instance through a virtual private cloud (VPC). If your ECS instance uses the classic network, we recommend that you change the network type of your instance to VPC because the classic network is phased out. For more information, see [\[Product changes/Feature changes\] Alibaba Cloud plans to phase out ApsaraDB RDS instances of the classic network type](/help/en/rds/apsaradb-rds-for-mysql/eol-for-apsaradb-rds-instances-of-the-classic-network-type).
    
-   The private IP address of the ECS instance is added to the IP address whitelist of the RDS instance. For more information, see [Configure a whitelist](/help/en/rds/configure-a-whitelist#concept-rpj-hs4-ydb).
    
-   If the ECS instance and the RDS instance both reside in virtual private clouds (VPCs), these instances must reside in the same VPC and the same region within the same Alibaba Cloud account.
    
    **Note**
    
    If the ECS instance and the RDS instance reside in different regions or are within different Alibaba Cloud accounts, you can use one of the following methods to connect the instances:
    
    -   [VPC peering connections](/help/en/vpc/vpc-peer-to-peer-connection): You can use VPC peering connections to enable the communication between VPCs regardless of the Alibaba Cloud accounts and regions to which the VPCs belong. Peering connections between VPCs within the same region are provided free of charge.
        
    -   CEN: You can use CEN to enable communication between the ECS instance and the RDS instance over an internal network. For more information, see [Connect VPCs in the same region](/help/en/cen/getting-started/connect-vpcs-in-same-region-with-transit-router), [Connect VPCs in different regions](/help/en/cen/getting-started/inter-region-vpc-interworking), or [Connect VPCs in different accounts](/help/en/cen/getting-started/use-enterprise-edition-transit-routers-to-connect-vpcs-across-regions-and-accounts).
        
    

If all the preceding requirements are met, you can use the internal endpoint of the RDS instance to connect the ECS instance to the RDS instance. For more information, see the [References](#section-ofk-th4-tgb) section of this topic.

## FAQs

-   How do I prohibit access to my RDS instance over the Internet?
    
    Make sure that the IP address whitelists of your RDS instance contain only private IP addresses. You can also release the public endpoint of your RDS instance. For more information, see [Apply for or release a public endpoint](/help/en/rds/apsaradb-rds-for-mysql/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mysql-instance#concept-nsl-hff-vdb).
    
-   Why am I unable to change the network type of my RDS instance from VPC to classic network?
    
    Some RDS instances support only the VPC network type, and you cannot change the network type of the RDS instances from VPC to classic network. For more information, see [Change the network type](/help/en/rds/apsaradb-rds-for-mysql/change-the-network-type-of-an-apsaradb-rds-for-mysql-instance#concept-zqv-gxx-wdb).
    
-   Why is my RDS instance disconnected from a public IP address even though the public IP address is added to an IP address whitelist of my RDS instance?
    
    A possible cause is that the public IP address is changed. In this case, you must add the new public IP address of the ECS instance to an IP address whitelist of your RDS instance.
    
-   How do I view the public IP address of an RDS instance?
    
    You can obtain the public endpoint of the RDS instance and ping this public endpoint from your on-premises Windows or Linux computer. In the command output, you can obtain the public IP address of the RDS instance.
    
-   How do I obtain the public IP address ranges of an RDS instance?
    
    The public IP address ranges of an RDS instance dynamically change and cannot be predicted.
    
-   If the public endpoint is enabled for my RDS instance, is the internal endpoint of the RDS instance affected?
    
    No, the internal endpoint of the RDS instance is not affected.
    
-   Why am I unable to find my database after I log on to my RDS instance by using DMS?
    
    The database is not displayed in DMS because its metadata is not synchronized. After you log on to the RDS instance, move the pointer over the instance and click the refresh button on the right side of the instance name to refresh the database list.
    
-   Am I charged fees when I access an RDS instance from an ECS instance over a VPC?
    
    You are not charged traffic fees for the data transmission between an ECS instance and RDS instance within the same VPC.
    
-   How do I connect to the host on which the RDS instance resides?
    
    You cannot connect to the host on which the RDS instance resides over Secure Shell (SSH) or Remote Desktop Protocol (RDP). If you want to connect to the host on which the RDS instance resides, you must use the endpoint of the RDS instance.
    

## References

-   [Use a database client or the CLI to connect to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-a-client-or-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance#concept-n1v-qpf-vdb)
    
-   [Connect to an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/connection-instance)
    
-   [Connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance-1#concept-stt-3hg-wdb)
    
-   [Connect to an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/connect-to-an-apsaradb-rds-for-mariadb-instance#concept-n1v-qpf-vdb)
