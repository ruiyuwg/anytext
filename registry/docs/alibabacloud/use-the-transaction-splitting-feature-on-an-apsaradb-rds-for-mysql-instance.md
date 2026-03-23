The database proxy feature for a primary ApsaraDB RDS for MySQL instance supports transaction splitting to ensure read/write consistency and to forward the read requests prior to the first write operation in transactions to read-only RDS instances. This reduces the loads on the primary RDS instance. This topic describes how to enable and disable transaction splitting.

## Prerequisites

The database proxy feature is enabled. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance).

## Background information

The database proxy feature of ApsaraDB RDS for MySQL automatically sends all requests in a transaction to the primary RDS instance to ensure the accuracy of the transaction. In some cases, all requests are encapsulated in transactions that are not automatically committed. You can run the `set autocommit=0;` statement to disable the autocommit mode. As a result, the primary RDS instance is heavily loaded.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9218205071/p737691.png)

To resolve the preceding issue, you can use the transaction splitting capability of the database proxy feature. The transaction splitting capability is automatically enabled and offloads read requests in transactions from the primary RDS instance to its read-only RDS instance without the need to modify application code or configurations. This improves the stability of the primary RDS instance.

After transaction splitting is enabled, if the default isolation level READ COMMITTED is used and the autocommit mode of transactions is disabled, the system starts a transaction only for write operations. In addition, before the transaction is started, the system routes all read requests to the read-only RDS instances by using a load balancer.

**Note**

If your RDS instance is created on and after July 31, 2024, explicit transactions, including the transactions that are started by executing the BEGIN TRANSACTION or START TRANSACTION statement, can be split. If your RDS instance is created before July 31, 2024, only the transactions that are implicitly started can be split.

The following table describes the forwarding logic in the scenario in which the auto commit is disabled and transactions are implicitly started.

**SQL statement**

**Forwarded to**

**Remarks**

SELECT

Read-only RDS instance

Read requests prior to the first write request within a transaction

SELECT

Read-only RDS instance

Read requests prior to the first write request within a transaction

UPDATE, INSERT, and DELETE

Primary RDS instance

First write request in a transaction after the transaction is started

SELECT

Primary RDS instance

Read requests after the first write request within a transaction

UPDATE, INSERT, and DELETE

Primary RDS instance

Write requests

SELECT

Primary RDS instance

Read requests after the first write request within a transaction

COMMIT

Primary RDS instance

Tranaction commit phase

## Procedure

You can enable or disable the transaction splitting feature based on your business requirements.

**Important**

If transaction splitting is enabled, global consistency cannot be ensured. Before you enable the database proxy feature, make sure that transaction splitting is suitable for your workloads.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Connection Information** section, find the database proxy endpoint that you want to modify and click **Modify Configuration** in the **Actions** column.
    
4.  In the dialog box that appears, click **Enable** or **Disable** next to **Transaction Splitting**.
    
    **Note**
    
    After you enable or disable transaction splitting, the new setting is applied only to new connections.
    

## Related operations

**Operation**

**Description**

[DescribeDBProxy](/help/en/rds/api-query-dedicated-proxy-details#doc-api-Rds-DescribeDBProxy)

Queries the details of a database proxy.

[DescribeDBProxyEndpoint](/help/en/rds/api-query-proxy-endpoint#doc-api-Rds-DescribeDBProxyEndpoint)

Queries the information about a database proxy endpoint.

[ModifyDBProxyEndpoint](/help/en/rds/api-modify-proxy-terminal-settings#doc-api-Rds-ModifyDBProxyEndpoint)

Modifies the settings of a database proxy endpoint.
