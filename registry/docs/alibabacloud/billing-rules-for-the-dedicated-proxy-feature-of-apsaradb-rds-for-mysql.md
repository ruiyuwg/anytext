ApsaraDB RDS for MySQL provides general-purpose database proxies and dedicated database proxies. General-purpose database proxies are provided free of charge. This topic describes the billing rules for dedicated database proxies in ApsaraDB RDS for MySQL.

## Usage notes

-   Dedicated database proxies, read-only ApsaraDB RDS for MySQL instances, and primary RDS instances are separately billed.
    
-   If your primary RDS instance is released, the database proxies that are enabled for the primary RDS instance are automatically released. You are no longer charged for the database proxies.
    

**Note**

-   To view the details of a dedicated database proxy, perform the following operations: Log on to the [ActionTrail](/help/en/actiontrail/user-guide/query-events-in-the-actiontrail-console#task-2407146) console, go to the Advanced Event Query page, and then find the event whose **Resource Type** is **acs::rds::dbproxy**. The details include the time when the dedicated database proxy is enabled, the operator who enables the dedicated database proxy, and the IP address of the operator.
    
-   To disable database proxies, follow the instructions provided in [Disable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/disable-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance).
    

## Billing rules for general-purpose database proxies

General-purpose database proxies are provided free of charge.

## Billing rules for dedicated database proxies

You are charged for the usage of dedicated database proxies. When you enable dedicated database proxies in the ApsaraDB RDS console, the system prompts you to view the billing rules. If you enable the dedicated database proxies, Alibaba Cloud considers that you acknowledge and agree to the billing rules. For more information about how to enable dedicated database proxies, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance#task-2167178).

To view the fees that are generated for dedicated database proxies, go to the [Bill Details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance?month=2023-12&statisticItem=DEFAULT_CHARGE_ITEM&statisticCycle=MONTHLY_SUMMARY) page and check the billable item whose **Billing Item Code** is **MaxscaleChargedSliceNum**.

### **Billing method**

#### **Dedicated database proxies for primary RDS instances that run RDS Cluster Edition**

-   If you enable only one dedicated database proxy configured with 2 CPU cores for your primary RDS instance that runs RDS Cluster Edition, you are not charged for the usage of the dedicated database proxy with 2 CPU cores.
    
-   If you enable more than one dedicated database proxies and the specification of the dedicated database proxies exceeds 2 CPU cores, you are charged for the dedicated database proxies based on the pay-as-you-go billing method, and fees are deducted once per hour. The fees do not include the fees for the first dedicated database proxy with 2 CPU cores. For example, if you enable four dedicated database proxies, you are charged for three of them.
    

**Note**

-   Starting October 17, 2023, one dedicated database proxy is provided free of charge for each RDS instance that runs RDS Cluster Edition. For more information, see [\[Special offers/Price changes\] One dedicated proxy is provided free of charge for ApsaraDB RDS for MySQL instances on RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/cluster-edition-for-apsaradb-rds-for-mysql-provides-the-dedicated-proxy-feature-with-a-free-of-charge-proxy-instance).
    
-   If you enable dedicated database proxies for your RDS instance that runs RDS Cluster Edition, you can use one dedicated database proxy free of charge from October 17, 2023.
    
-   In this topic, a dedicated database proxy indicates that one dedicated database proxy is enabled for your RDS instance and the specification of the dedicated database proxy is 2 CPU cores.
    
-   The following calculation describes the relationship between the specification of database proxies and the number of database proxies: Specification of database proxies = Unit specification of a database proxy × Number of database proxies. In this calculation, the unit specification of a database proxy is fixed as 2 CPU cores. For example, if the number of database proxies is 3, the specifications of the database proxies are 6 CPU cores. The value is obtained based on the following calculation: 2 × 3 = 6.
    
-   Relationship between the specification of the database proxy and the specifications of proxy nodes: `Specification of a database proxy = Specifications of all proxy nodes`. For example, four dedicated database proxy nodes are deployed in Zone A and Zone B, the number of proxy nodes in each zone is 2, and the number of CPU cores for a single proxy node is 1 in Zone A and is 2 in Zone B. `The specification for the database proxy equals the specifications of the proxy zones`. In this example, the specification for the database proxy is 6 CPU cores. The value is obtained based on the following calculation: 1 × 2 + 2 × 2 = 6.
    
-   Relationship between the number of proxy nodes and the specification of the database proxy: `Number of proxy nodes = Specifications of the database proxy/Unit specification of a proxy node`. The unit specification of a proxy node is fixed as 2 CPU cores. For example, if the specification of the database proxy is 6 CPU cores, the number of proxy nodes is 3. The value is obtained based on the following calculation: `6/2 = 3`.
    

#### **Dedicated database proxies for primary RDS instances that run RDS High-availability Edition**

By default, dedicated database proxies are disabled, and no fees are generated. If you enable dedicated database proxies for your primary RDS instance that runs RDS High-availability Edition, you are charged for the usage of dedicated database proxies based on the pay-as-you-go billing method. Fees are deducted once per hour. The fees include the fees for all enabled dedicated database proxies. For example, if you enable four dedicated database proxies, you are charged for four dedicated database proxies.

**Note**

-   If you upgrade a database proxy of your primary RDS instance from a shared database proxy to a dedicated database proxy, you can use the dedicated database proxy free of charge for at least one year. For more information, see [Upgrade a shared database proxy to a dedicated database proxy](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-database-proxy-of-an-apsaradb-rds-for-mysql-instance-from-a-shared-proxy-to-a-dedicated-proxy#section-1ze-rgp-aq0).
    
-   You cannot directly upgrade a shared database proxy to a general-purpose database proxy. You can upgrade the shared database proxy to a dedicated database proxy and then change the database proxy type from dedicated to general-purpose. For more information, see [Modify database proxy configurations](/help/en/rds/apsaradb-rds-for-mysql/change-the-database-proxy-type-and-the-number-of-database-proxies-of-an-apsaradb-rds-for-mysql-instance) and [Database proxy types](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#171b5a307fbvc).
    

### **Prices**

**Region**

**Price**

**Name**

**Code**

**USD per proxy-hour**

China (Hangzhou)

cn-hangzhou

0.173

China (Shanghai)

cn-shanghai

0.173

China (Qingdao)

cn-qingdao

0.173

China (Beijing)

cn-beijing

0.173

China (Zhangjiakou)

cn-zhangjiakou

0.120

China (Hohhot)

cn-huhehaote

0.173

China (Shenzhen)

cn-shenzhen

0.173

China (Heyuan)

cn-heyuan

0.173

China (Chengdu)

cn-chengdu

0.173

China (Hong Kong)

cn-hongkong

0.297

Japan (Tokyo)

ap-northeast-1

0.288

Singapore

ap-southeast-1

0.271

Malaysia (Kuala Lumpur)

ap-southeast-3

0.253

Indonesia (Jakarta)

ap-southeast-5

0.271

Germany (Frankfurt)

eu-central-1

0.243

UK (London)

eu-west-1

0.280

UAE (Dubai)

me-east-1

0.377

US (Virginia)

us-east-1

0.237

US (Silicon Valley)

us-west-1

0.284

## **References**

-   [What are database proxies?](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#concept-2020985)
    
-   [What is read/write splitting?](/help/en/rds/apsaradb-rds-for-mysql/what-is-read-or-write-splitting#concept-2021010)
    
-   [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance#task-2167178)
    
-   [Configure access policies for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-access-policies-for-a-database-proxy-endpoint)
    
-   [Disable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/disable-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance#task-2021036)
    
-   [FAQ about database proxies](/help/en/rds/apsaradb-rds-for-mysql/faq-about-database-proxies#reference-2020988)
