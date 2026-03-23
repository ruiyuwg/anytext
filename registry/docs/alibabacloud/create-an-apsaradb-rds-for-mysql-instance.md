Think of an ApsaraDB RDS for MySQL (RDS for MySQL) instance as a dedicated database server in the cloud. On this instance, you can create multiple databases to manage your business data. This quickstart guide will walk you through creating an RDS for MySQL instance, a database, and an account all from the console.

## In this guide

You will learn how to:

1.  Create an RDS for MySQL instance.
    
2.  Create your first database in the instance.
    
3.  Create a privileged account for the instance.
    

For a quick start or trial, use your Alibaba Cloud account to complete these steps to avoid permission issues.

## **1\. Create an RDS for MySQL instance**

1.  **Navigate to the** [**RDS buy page**](https://rdsbuy.console.alibabacloud.com/newCreate/rds/mysql)**.**
    
2.  **Configure parameters for the instance.**
    
    Configure only parameters in the following table with the provided example values, and leave all other settings at their default values.
    
    **Billing Method** (Example value: **Pay-as-you-go**）
    
    -   **Pay-as-you-go**: For short-term use. Billed hourly and can be released at any time.
        
    -   **Subscription**: For long-term use. Pre-paid model with lower overall costs.
        
    -   **Serverless**: For unpredictable workloads. Automatically scales resources based on workloads.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6854728571/p1007624.png)
    
    **Region** (Example value: **Singapore**)
    
    -   **Connect from an Elastic Compute Service (ECS) instance**: Select the region in which the ECS instance is located for faster connections over the internal network.
        
    -   **Connect from other sources**: Select a region near the source to minimize network latency over the Internet.
        
    
    **Note**
    
    The region of the instance cannot be changed after creation.
    
    **Database Engine** (Example value: **MySQL 8.0**)
    
    -   **For compatibility**: Match your application's database version (MySQL 5.6, 5.7, and 8.0 are supported).
        
    -   **For new projects:** Select MySQL 8.0 for the latest features and performance improvements.
        
    
    **Edition** and **Storage Type** (Example values: **High-availability Edition**, **Premium ESSD**)
    
    For a trial with most of the key features at a cost-effective price, we recommend the following settings:
    
    -   **Edition**: Select **High-availability Edition**.
        
    -   **Storage Type**: Select **Premium Local SSD** or **Premium ESSD**.
        
    
    **Note**
    
    The values of the two parameters affect the availability of [instance features](/help/en/rds/apsaradb-rds-for-mysql/features). For details, see [Editions](/help/en/doc-detail/2787304.html) and [Storage types](/help/en/doc-detail/2545944.html).
    
    **VPC**
    
    -   **Connect from an ECS instance**: Select the same VPC as your ECS instance.
        
    -   **Other cases**: Keep the default value.
        
    
    **Instance Type** (Example value: **mysql.n2.medium.2c** )
    
    -   Select an instance type that is suitable for your business.
        
    -   You can easily [change the instance type](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb) after the creation as needed.
        
    
3.  **Confirm instance settings and pay for the instance.**
    
    1.  Review and confirm your instance settings on the right side of the page. Move your pointer over **View Details** to see a detailed cost breakdown.
        
        **Note**
        
        [The fees of an RDS instance](/help/en/rds/apsaradb-rds-for-mysql/billable-items-billing-methods-and-pricing) vary with its parameter settings, such as the billing method, edition, instance type, storage type, and storage capacity.
        
    2.  Once you have confirmed that all settings are correct, click **Confirm Order**.
        
4.  **View your instance.**
    
    1.  After the **Payment Complete** page appears, click **Console** to go back to the console and navigate to the [Instances page](https://rds.console.alibabacloud.com/rdsList/cn-hangzhou).
        
    2.  Select the region of your instance from the top menu and wait 1 to 10 minutes for the instance to be created. The instance status appears as **Creating**.
        
    3.  The instance is ready to use when its Status changes to **Running**.
        
        **Note**
        
        There might be a short delay before the new instance appears in the console. If you don't see it immediately, wait a moment and then refresh the page.
        

## 2\. Create your first database in the instance

1.  Navigate to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. Select the region of the created instance from the top navigation bar, and then click the instance ID in the instance list.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0854368271/p835170.png)

2.  In the left-side navigation pane, click **Databases**. On the page that appears, click **Create Database**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8858348571/p835173.png)

3.  In the **Create Database** panel, configure the following parameters and then click **Create**：
    
    -   **Database Name**: Enter the name of the database. Example value: `db_test1`.
        
    -   **Supported Character Set**: Select **utf8**.
        
        **Note**
        
        Select **uft8mb4** if you need to store 4-byte characters such as emojis.
        
    -   **Authorized By**: Keep the default value.
        

4.  Navigate to the **Databases** page to view the created database.
    

## 3\. Create a privileged account for the instance

1.  Navigate to the [Instances page](https://rds.console.alibabacloud.com/rdsList/cn-hangzhou) and click the ID of your instance. In the left-side navigation pane, click **Accounts** and then click **Create Account** on the page that appears.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9754368271/p835181.png)

2.  In the **Create Account** panel, configure the following parameters:
    
    -   **Database Account**: Enter the account name. Example value: `dbuser`.
        
    -   **Account Type**: Select **Privileged Account**.
        
    -   **New Password**: Enter the password of the account.
        
    -   **Confirm Password**: Confirm the password.
        

3.  Click **OK**.
    
    **Note**
    
    If you encounter an error while creating an account, it may be due to a duplicate account name, creating accounts too frequently, or an existing privileged account. Resolve the issue and then try again.
    

4.  Go back to the **Accounts** page to view the created privileged account.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9754368271/p835196.png)

**Note**

RDS for MySQL supports two types of accounts: **Privileged** and **Standard**. You can use the privileged account to create standard accounts for fine-grained access control in future use. For more information about account types and how to create standard accounts, see [Create an account](/help/en/rds/apsaradb-rds-for-mysql/create-an-account-on-an-apsaradb-rds-for-mysql-instance).

## **What to do next**

[Step 2: Connect to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/step-2-connect-to-an-apsaradb-rds-for-mysql-instance)

## **FAQ**

## Instances

-   **How can I see how many RDS instances I have in my Alibaba Cloud account and which ones are currently running?**
    
    Navigate to the [Overview](https://rds.console.alibabacloud.com/dashboard/cn-hangzhou) page of the RDS console. In the **Resource Distribution** section, view all and running RDS instances in your Alibaba Cloud account across different regions.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6913323171/p784057.png)
    
-   **I just created a new instance, but I can't see it in the instance list. Why?**
    
    **Possible cause**
    
    **Description**
    
    **Solution**
    
    Incorrect region
    
    The instance you create is not in the current region.
    
    Select the region of your instance from the top manu.
    
    Creation failure due to insufficient resources in the specified zone
    
    The instance creation failed due to insufficient resources in the specified zone.
    
    In this case, you can see a refund on the [My Order](https://billingnew.console.alibabacloud.com/?#/order/list/) page.
    
    Create the instance again in another zone.
    

## Accounts & Permissions

-   **How can I set up more fine-grained permissions for an account, such as limiting access to specific tables or restricting connections from certain IP addresses?**
    
    For more information, see [Authorize an account to access its authorized databases from specified IP addresses](/help/en/rds/apsaradb-rds-for-mysql/authorize-an-account-to-access-its-authorized-databases-from-specified-ip-addresses-in-an-apsaradb-rds-for-mysql-instance#task-cz5-gpl-sfb) or [Authorize accounts to manage tables, views, and fields](/help/en/rds/apsaradb-rds-for-mysql/authorize-accounts-to-manage-tables-views-and-fields#task-s31-gql-sfb).
    
-   **Does RDS for MySQL provide the** `**root**` **user or** `**SUPER**` **privilege, like a self-managed MySQL database?**
    
    No, RDS for MySQL does not provide a `root` user or accounts with the `SUPER` privilege. This is by design, as a security measure to ensure the stability and security of your instance. It prevents accidental operations or misconfigurations that could lead to irreversible damage, such as data loss or service disruption.
    

## References

-   Call an API to create an RDS instance: [CreateDBInstance](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-createdbinstance-mysql)
    
-   Create RDS instances running other engines:
    
    -   [Create an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance#concept-pv1-n5z-vdb)
        
    -   [Create an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-an-apsaradb-rds-for-postgresql-instance#concept-kzn-qcg-wdb)
        
    -   [Create an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/create-an-apsaradb-rds-for-mariadb-instance#concept-wzp-ncf-vdb)
        
-   Create databases and accounts for RDS instances running other engines:
    
    -   [Create database and accounts for an RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-a-database-and-account)
        
    -   [Create database and accounts for an RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-a-database-and-an-account-on-an-apsaradb-rds-for-postgresql-instance#concept-njz-1gg-wdb)
        
    -   [Create database and accounts for an RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/create-a-database-and-an-account-on-an-apsaradb-rds-for-mariadb-instance#concept-jyq-tc5-q2b)
