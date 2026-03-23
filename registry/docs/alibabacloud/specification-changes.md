This topic describes the fees that are generated when you change the specifications of an ApsaraDB RDS instance.

## Pay-as-you-go

Pay-as-you-go RDS instances are billed on an hourly basis. After the specifications of a pay-as-you-go RDS instance are changed, the RDS instance is billed based on the new specifications.

## Subscription

If the specifications of a subscription RDS instance are changed, a price difference may occur. You need to pay for the price difference, or the system will refund you the price difference.

-   To upgrade the specifications, you must select **Upgrade** and pay for the price difference based on the new specifications.
    
-   To downgrade the specifications, you must select **Downgrade**, and the system will refund you the price difference based on the new specifications.
    

You can perform the following steps to upgrade or downgrade the specifications of a subscription RDS instance:

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page of the ApsaraDB RDS console.
    
2.  Select the region in which the instance resides in the top navigation bar, and click the ID of the instance in the instance list.
    
3.  In the **Configuration Information** section of the **Basic Information** page, click **Change Specifications**.
    
4.  Select **Upgrade** or **Downgrade**.
    

**Change method**

**Billing**

Upgrade

Payment = Total fee of the new specifications for the remaining subscription duration (Monthly price of the new specifications/30/24 × Remaining subscription duration) - Total fee of the original specifications for the remaining subscription duration (Monthly price of the original specifications/30/24 × Remaining subscription duration).

For example, if the monthly price of the new specifications is USD 14,400, the monthly price of the original specifications is USD 7,200, and the remaining subscription duration is 50 days, the price difference that you need to pay is USD 12,000. The price difference is calculated by using the following formula: (14,400/30/24 × 50 × 24) - (7,200/30/24 × 50 × 24) = 12,000.

Downgrade

Refund = Total fees of the original specifications for the remaining subscription duration (Monthly price of the original specifications/30/24 × Remaining subscription duration) - Total fees of the new specifications for the remaining subscription duration (Monthly price of the new specifications/30/24 × Remaining subscription duration).

Example: You subscribed to an RDS instance for three months, during which the original specifications are charged USD 3,500. You paid USD 3,000 after vouchers are used. Two months later, the total fees of the original specifications for the remaining subscription duration are USD 1,000. The total fees of the new specifications for a month are USD 800. The system will refund you the price difference. The price difference is calculated by using the following formula: 1000 - 800 = 200.

**Note**

If you upgrade the specifications of an RDS instance and then immediately downgrade the specifications, you may obtain fewer refunds in the following two scenarios:

-   Discounts used in the upgrade order: If you subscribed to the RDS instance for a year at a 15% discount, you need to pay only USD 850 to enjoy USD 1,000 worth of service. If you want to downgrade the specifications of the RDS instance, a refund is calculated based on USD 850.
    
-   Coupons used in the upgrade order: If you downgrade the specifications of the RDS instance, the refund of the original specifications is calculated based on the amount of money that you paid, excluding the amount deducted by coupons. However, when you upgrade the specifications of the RDS instance, the fees of the original specifications are calculated based on the unit price of the original specifications, including the amount deducted by coupons.
    

## Pricing

The price of an RDS instance varies based on the instance configuration, such as the region, instance type, and storage capacity. For more information, visit the [ApsaraDB RDS buy page](https://rdsbuy.console.alibabacloud.com/?spm=5176.2020520104.0.0.2b4b1450yLixqw#/create/rds/mysql).

## References

-   [Change the specifications of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb)
    
-   [Change the specifications of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/change-the-specifications-of-an-apsaradb-rds-for-sql-server-instance#concept-efl-pln-wdb)
    
-   [Change the specifications of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance#concept-efl-pln-wdb)
    
-   [Change the specifications of an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/change-the-specifications-of-an-apsaradb-rds-for-mariadb-instance#concept-efl-pln-wdb)
    

## **Related API operations**

Operation

Description

[ModifyDBInstanceSpec](/help/en/rds/developer-reference/api-rds-2014-08-15-modifydbinstancespec)

Changes the instance type and storage capacity of an instance.
