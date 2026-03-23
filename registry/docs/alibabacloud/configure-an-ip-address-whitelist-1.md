This article describes how to configure whitelists for different DataWorks modules. When a DataWorks module, such as Data Integration, Data Service, Metadata Collection, or Data Analysis, accesses your data source, the connection may be blocked if the source is protected by a whitelist. To ensure these modules can connect, add their outbound IP addresses or CIDR blocks to the data source's whitelist.

## **Background**

Different DataWorks modules use different network paths to access data sources. If your data source uses a whitelist, you must grant access differently depending on the module type:

-   **Resource group-dependent modules (such as Data Integration and Data Service)**: These modules use the resource group's network to access data sources. To run tasks, add the vSwitch CIDR block or public IP address of the resource group to the data source's whitelist.
    
-   **Platform service modules (such as Metadata Collection and Data Analysis)**: These modules use service nodes that are independently maintained by DataWorks to send access requests. These nodes operate outside the resource group network. Therefore, also add the platform's dedicated IP CIDR blocks to the data source's whitelist. This practice prevents connection failures caused by an incomplete whitelist.
    

## Prerequisites

Ensure that your data source and the resource group can connect over the network. For more information, see [Overview of network connection solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).

## **Obtain IP addresses for whitelists**

### **For Data Integration resource groups**

### **Serverless resource group**

### **Get the private IP CIDR block of the resource group**

Use this method if your data source and DataWorks are connected over an internal network.

1.  Go to the [DataWorks resource group list page](https://dataworks.console.aliyun.com/resource/list). In the top navigation bar, switch to the region where your resource group is located. Then, find your resource group in the list.
    
2.  Find the target resource group and click **Network Settings** in the **Actions** column. This opens the **VPC Binding** page.
    
3.  Under **Data Scheduling & Data Integration**, view the corresponding **vSwitch CIDR block**.
    
4.  [Add this vSwitch CIDR block to your data source's whitelist](#1489bba3df2tt).
    

#### **Get the public IP address of the resource group**

This method applies when your data source and DataWorks are connected over the internet. You need to add the EIP of the resource group to the data source's whitelist.

**Note**

By default, serverless resource groups cannot access the internet. To enable public access to data sources, configure an [Internet NAT gateway](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet) and an EIP for the VPC bound to the resource group.

1.  Go to the [DataWorks resource group list page](https://dataworks.console.aliyun.com/resource/list). In the top navigation bar, switch to the region where your resource group is located. Then, find your resource group in the list.
    
2.  Find the target resource group and click **Network Settings** in the **Actions** column.
    
3.  Under **Data Scheduling & Data Integration**, find the bound VPC and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0493186471/p950562.png) icon next to the VPC to go to the **VPC Details** page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0493186471/p946223.png)
    
4.  Click the **Resource Management** tab. In the **Access to Internet** section, click the number under **Internet NAT Gateway** to go to the list of Internet NAT gateways created for this VPC.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0493186471/p950567.png)
    
5.  On the Internet NAT gateway list page, view the bound EIPs.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0493186471/p950570.png)
    
6.  [Add the EIPs to your data source's whitelist](#1489bba3df2tt).
    

### **Legacy exclusive Data Integration resource groups**

### **Get the private IP CIDR block of the resource group**

Use this method if your data source and DataWorks are connected over an internal network.

1.  Go to the [DataWorks resource group list page](https://dataworks.console.aliyun.com/resource/list). In the top navigation bar, switch to the region where your resource group is located. Then, find your resource group in the list.
    
2.  Find the target resource group and click **Network Settings** in the **Actions** column.
    
3.  Find the VPC bound to the resource group and view its corresponding **vSwitch CIDR block**.
    
4.  [Add the vSwitch CIDR block to your data source's whitelist](#1489bba3df2tt).
    

#### **Get the public IP address of the resource group**

This method applies when your data source and DataWorks are connected over the internet. You need to add the EIP of the resource group to the data source's whitelist.

1.  Go to the [DataWorks resource group list page](https://dataworks.console.aliyun.com/resource/list). In the top navigation bar, switch to the Region where your resource group is located. Then, find your resource group in the list.
    
2.  Find the target resource group and click **Details** in the **Actions** column. This opens the resource group details page.
    
3.  Obtain the EIP address.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0493186471/p946262.png)
    
4.  [Add the EIP address to your data source's whitelist](#1489bba3df2tt).
    

### Shared resource group for Data Integration

If you use a shared resource group for Data Integration, add the IP addresses listed in the [whitelist for the shared resource group for Data Integration](/help/en/dataworks/user-guide/public-resource-group-whitelist-for-data-integration) to your data source's whitelist.

### **For Data Service whitelists**

### Serverless resource group

#### **Get the private IP CIDR block of the resource group**

Use this method if your data source and DataWorks are connected over an internal network.

1.  Go to the [DataWorks resource group list page](https://dataworks.console.aliyun.com/resource/list). In the top navigation bar, switch to the region where your resource group is located. Then, find your resource group in the list.
    
2.  Find the target resource group and click **Network Settings** in the **Actions** column. This opens the **VPC Binding** page.
    
3.  Under **DataService Studio**, view the corresponding **vSwitch CIDR block**.
    
    **Note**
    
    If no VPC and vSwitch are bound under **DataService Studio**, click **Add VPC Association** to manually bind them. Then, you can obtain the vSwitch CIDR block.
    
4.  [Add this vSwitch CIDR block to your data source's whitelist](#1489bba3df2tt).
    

#### **Get the public IP address of the resource group**

This method applies when your data source and DataWorks are connected over the internet. You need to add the EIP of the resource group to the data source's whitelist.

**Note**

By default, serverless resource groups cannot access the internet. To enable public access to data sources, configure an [Internet NAT gateway](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet) and an EIP for the VPC bound to the resource group.

1.  Go to the [DataWorks resource group list page](https://dataworks.console.aliyun.com/resource/list). In the top navigation bar, switch to the region where your resource group is located. Then, find your resource group in the list.
    
2.  Find the target resource group and click **Network Settings** in the **Actions** column.
    
3.  Under **DataService Studio**, find the bound VPC and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0493186471/p950562.png) icon next to the VPC to go to the **VPC Details** page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0493186471/p952937.png)
    
4.  Click the **Resource Management** tab. In the **Access to Internet** section, click the number under **Internet NAT Gateway** to go to the list of Internet NAT gateways created for this VPC.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0493186471/p950567.png)
    
5.  On the Internet NAT gateway list page, view the bound EIPs.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0493186471/p950570.png)
    
6.  [Add the EIPs to your data source's whitelist](#1489bba3df2tt).
    

### **Legacy exclusive Data Service resource groups**

#### **Get the private IP CIDR block of the resource group**

Use this method if your data source and DataWorks are connected over an internal network.

1.  Go to the [DataWorks resource group list page](https://dataworks.console.aliyun.com/resource/list). In the top navigation bar, switch to the region where your resource group is located. Then, find your resource group in the list.
    
2.  Find the target resource group and click **Network Settings** in the **Actions** column.
    
3.  Find the **vSwitch** bound to the resource group. Then, go to the [**VPC console**](https://vpc.console.alibabacloud.com/overview), search for the vSwitch, and find its **IPv4 CIDR**.
    
4.  [Add the vSwitch CIDR block to your data source's whitelist](#1489bba3df2tt).
    

### Shared resource group for Data Service

If you use a shared resource group for Data Service, add the IP addresses from the [whitelist for Data Service](/help/en/dataworks/user-guide/configure-network-connectivity) to your data source's whitelist.

### **For Metadata Collection whitelists**

If your data source for Metadata Collection uses a whitelist for access control, add the IP addresses from the [Metadata Collection whitelist](/help/en/dataworks/user-guide/configure-ip-address-whitelists-for-metadata-collection) to your data source's whitelist.

### **For Data Analysis whitelists**

If the target MaxCompute project for Data Analysis has whitelist-based access control enabled, add the IP addresses listed in the [Data Analytics whitelist](/help/en/dataworks/user-guide/ip-address-whitelist-for-dataanalysis) to the MaxCompute project's whitelist.

## **Add IP addresses to a whitelist**

If your data source is an Alibaba Cloud product, refer to the following documentation to add the obtained IP addresses to the data source's whitelist:

**Note**

-   The table below provides links to whitelist configuration guides for some common Alibaba Cloud products. For data sources not listed, consult their official documentation.
    
-   If your data source is not an Alibaba Cloud product, consult its official documentation for whitelist configuration instructions.
    

[Configure a whitelist for MaxCompute](/help/en/maxcompute/security-and-compliance/manage-ip-address-whitelists)

[Configure a whitelist for ApsaraDB RDS for MySQL](/help/en/rds/apsaradb-rds-for-mysql/set-the-whitelist/)

[Configure a whitelist for AnalyticDB for MySQL](/help/en/analyticdb/analyticdb-for-mysql/user-guide/configure-a-whitelist-1)

[Configure an IP address whitelist for AnalyticDB for PostgreSQL](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/configure-an-ip-address-whitelist-user-guide)

[Configure a whitelist for ApsaraDB for OceanBase](/help/en/apsaradb-for-oceanbase/latest/whitelist)

[Configure a whitelist for ClickHouse](/help/en/clickhouse/configure-the-whitelist)

[Configure a whitelist for PolarDB for MySQL](/help/en/polardb/polardb-for-mysql/user-guide/configure-a-whitelist-for-a-cluster/)

[Configure a whitelist for PolarDB-X](/help/en/polardb/polardb-for-xscale/configure-whitelists)

[Configure a whitelist for PolarDB for PostgreSQL](/help/en/polardb/polardb-for-postgresql/configure-a-whitelist-for-a-cluster/)

[Configure an IP address whitelist for Elasticsearch](/help/en/es/user-guide/configure-a-public-or-private-ip-address-whitelist-for-an-elasticsearch-cluster)

[Configure a whitelist for ApsaraDB for HBase](/help/en/hbase/getting-started/configure-a-whitelist-for-performance-enhanced-edition)

[Configure an IP address whitelist for Hologres](/help/en/hologres/security-and-compliance/configure-an-ip-address-whitelist)

[Configure a whitelist for ApsaraMQ for Kafka](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/user-guide/configure-a-whitelist)

[Configure a whitelist for Lindorm](/help/en/lindorm/getting-started/configure-a-whitelist)

[Configure a whitelist for ApsaraDB RDS for MariaDB](/help/en/rds/apsaradb-rds-for-mariadb/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mariadb-instance)

[Configure a whitelist for ApsaraDB RDS for PostgreSQL](/help/en/rds/apsaradb-rds-for-postgresql/set-the-whitelist-1/)

[Configure a whitelist for ApsaraDB RDS for SQL Server](/help/en/rds/apsaradb-rds-for-sql-server/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-sql-server-instance)

[Configure a whitelist for ApsaraDB for Memcache](/help/en/memcache/user-guide/configure-an-ip-address-whitelist)

[Configure a whitelist for ApsaraDB for MongoDB](/help/en/mongodb/user-guide/configure-an-ip-address-whitelist)

[Configure a whitelist for OpenSearch Vector Search Edition](/help/en/open-search/vector-search-edition/public-whitelist-configuration)

[Configure a whitelist for Tair (Redis® OSS-Compatible)](/help/en/redis/user-guide/configure-whitelists)

[Configure a whitelist for SelectDB](/help/en/selectdb/configure-ip-address-whitelist)

## References

-   For FAQs about network connectivity, see [Resource group operations and network connections](/help/en/dataworks/network-connectivity-and-operations-on-resource-groups).
    
-   For FAQs about adding a whitelist, see [FAQs about adding a whitelist](/help/en/dataworks/configure-an-ip-address-whitelist).
