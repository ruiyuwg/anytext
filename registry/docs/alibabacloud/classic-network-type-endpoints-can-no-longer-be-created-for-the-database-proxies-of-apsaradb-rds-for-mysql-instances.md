To provide more secure cloud network environments and better user experience, Alibaba Cloud no longer supports **new internal endpoints of the classic network for database proxies in ApsaraDB RDS for MySQL from December 07, 2023**.

Database proxy endpoints in ApsaraDB RDS for MySQL have the following three types: internal endpoints of the virtual private cloud (VPC) type, internal endpoints of the classic network type, and public endpoints.

**Note**

-   Starting May 24, 2022, ApsaraDB RDS for MySQL instances of the classic network type are no longer available for purchase. For more information, see [\[EOS/Discontinuation\] ApsaraDB RDS for MySQL instances of the classic network type are no longer available for purchase](/help/en/rds/apsaradb-rds-for-mysql/apsaradb-rds-for-mysql-instances-of-the-classic-network-type-are-no-longer-available-for-purchase).
    
-   For more information about network types, see [FAQ about network types](/help/en/rds/support/faq-about-network-types#concept-2199447).
    

## EOS content

Endpoints of the classic network type for database proxies in ApsaraDB RDS for MySQL

## Effective date and applicable regions

**Effective date**

**Applicable region**

December 07, 2023

China (Hohhot), China (Chengdu), Singapore, Indonesia (Jakarta), and Germany (Frankfurt)

December 21, 2023

All other regions

## Impacts and suggestions

### **Impacts**

-   Starting December 07, 2023, you can no longer apply for a database proxy endpoint of the classic network type when you enable the database proxy feature for an ApsaraDB RDS for MySQL instance, create a database proxy endpoint or proxy terminal for the RDS instance, and apply for an internal endpoint for the RDS instance.
    
-   If you have applied for an internal endpoint of the classic network type, you can continue to use the internal endpoint. However, if you release the internal endpoint of the classic network type, you can no longer apply for an internal endpoint of the classic network type.
    

### **Suggestions**

Compared with the classic network, VPCs provide more secure cloud environments and better user experience than the classic network. If you are using a database proxy endpoint of the classic network type, we recommend that you apply for a database proxy endpoint of the VPC type. For more information about how to apply for a database proxy endpoint of the VPC type, see [Manage database proxy endpoints](/help/en/rds/apsaradb-rds-for-mysql/manage-the-dedicated-proxy-endpoints-of-an-apsaradb-rds-for-mysql-instance).
