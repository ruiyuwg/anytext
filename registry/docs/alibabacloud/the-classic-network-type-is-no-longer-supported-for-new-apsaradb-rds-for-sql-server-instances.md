To provide more secure cloud network environments and better user experience, the classic network type is no longer supported for new ApsaraDB RDS for SQL Server instances from April 10, 2023.

ApsaraDB RDS supports the following network types:

-   **Virtual private cloud (VPC)**: Each VPC is an isolated virtual network. VPCs provide higher security than the classic network. We recommend that you select the VPC network type. You can configure route tables, CIDR blocks, and gateways in a VPC. In addition, you can connect your data center to a VPC by using Express Connect circuits or virtual private networks (VPNs). The data center and the VPC comprise a virtual data center. You can use the virtual data center to migrate your workloads to the cloud with no downtime. For more information, see [What is a VPC?](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb)
-   **Classic network**: RDS instances of the classic network type cannot be isolated by using network settings. You can block unauthorized access to the RDS instances of the classic network type only by configuring IP address whitelists or security groups.

**Note** For more information about network types, see [FAQ about network types](/help/en/rds/support/faq-about-network-types#concept-2199447).

## **Content**

When you create an RDS instance, you cannot select the classic network type for the instance.

## **Effective date**

April 10, 2023

## **Impacts and recommendations**

### **Impacts**

-   **New RDS instances**: Starting April 10, 2023, you can no longer select the classic network type when you purchase an RDS instance.
    
-   **Existing RDS instances of the classic network type**: You can continue to use the existing RDS instances.
    

### **Recommended download method**

VPCs are better than the classic network because VPCs provide you with more secure cloud network environments and better user experience. If you are using the classic network, we recommend you change the network type from classic network to VPC. For more information about how to change the network type of an RDS instance, see [Change the network type](/help/en/rds/apsaradb-rds-for-sql-server/change-the-network-type-of-an-apsaradb-rds-for-sql-server-instance).
