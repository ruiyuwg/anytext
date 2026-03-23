Before you use the MySQL Change Data Capture (CDC) connector for source tables, make sure that the upstream MySQL storage meets the configuration requirements, such as version, network connection, and account permissions. You must also enable the binary logging feature. This topic describes the configuration requirements and related operations for ApsaraDB RDS for MySQL, PolarDB for MySQL, and self-managed MySQL databases.

## ApsaraDB RDS for MySQL database

### **Network connection configurations**

The network connection between ApsaraDB RDS for MySQL and fully managed Flink must be established.

-   If ApsaraDB RDS for MySQL and fully managed Flink are in the same virtual private cloud (VPC) of the same region, ApsaraDB RDS for MySQL and fully managed Flink are connected.
    
-   If ApsaraDB RDS for MySQL and fully managed Flink are deployed in different networks, you must establish a network connection between ApsaraDB RDS for MySQL and fully managed Flink. For example, you can establish a network connection by using VPN Gateway. For more information, see [How does a fully managed Flink service access the Internet?](/help/en/flink/realtime-flink/support/reference#section-zjs-qq7-k4j) and [How does fully managed Flink access a service across VPCs?](/help/en/flink/realtime-flink/support/reference#section-b0b-5qz-thz)
    

### **MySQL server configurations**

**Important**

The default value of the scan.incremental.snapshot.enabled parameter is true. This indicates that the incremental snapshot feature is enabled by default. This ensures that ApsaraDB RDS for MySQL 5.6.X runs as expected. You cannot disable the incremental snapshot feature for ApsaraDB RDS for MySQL 5.6.X. This limit is removed from ApsaraDB RDS for MySQL 6.0.8 and ApsaraDB RDS for MySQL 8.0.1. Therefore, you can disable the incremental snapshot feature for ApsaraDB RDS for MySQL 6.0.8 and ApsaraDB RDS for MySQL 8.0.1. We recommend that you do not disable the incremental snapshot feature. If you disable this feature, the MySQL database is locked and the online business processing performance may be affected.

-   Binary logging feature
    

The binary logging feature must be enabled. You can run the show variables like "log\_bin" command to check whether this feature is enabled.

-   If the return value is ON, this feature is enabled.
    
-   If the return value is OFF, this feature is disabled. For more information about how to enable the binary logging feature, see [View and delete the binary log files of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/view-and-delete-the-binary-log-files-of-an-apsaradb-rds-for-mysql-instance#concept-2101409).
    

-   Format of binary logs
    
    The binary logs must be in the ROW format. You can run the show variables like "binlog\_format" command to query the format of binary logs. The default format of the binary logs of ApsaraDB RDS for MySQL is ROW.
    
-   Setting of the binlog\_row\_image parameter
    
    The binlog\_row\_image parameter must be set to FULL. You can run the show global variables like "binlog\_row\_image" command to query the value of the binlog\_row\_image parameter. The default value of the binlog\_row\_image parameter for ApsaraDB RDS for MySQL is FULL.
    
-   Disable binary log transaction compression
    
    To successfully retrieve incremental data from a self-managed MySQL database using the MySQL CDC connector, you must disable binary log transaction compression.
    

### **Session parameter configurations**

When you use the MySQL CDC connector to read full snapshots from a large-sized database, the established connection may time out. To prevent this issue, you can configure the interactive\_timeout and wait\_timeout parameters in the MySQL configuration file. Parameter description:

-   interactive\_timeout: specifies the number of seconds the server waits for an activity before the server closes an interactive connection. For more information, see [Configure the interactive\_timeout parameter of MySQL](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_interactive_timeout).
    
-   wait\_timeout: specifies the number of seconds the server waits for an activity before the server closes a non-interactive connection. For more information, see [Configure the wait\_timeout parameter of MySQL](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_wait_timeout).
    

### **Account permission configurations**

Create an account and grant the SELECT, REPLICATION SLAVE, and REPLICATION CLIENT permissions to the account. These permissions are required to synchronize data from ApsaraDB RDS for MySQL by using the MySQL CDC connector. For more information, see [Create an account on an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-an-account-on-an-apsaradb-rds-for-mysql-instance#concept-kxw-k1p-ydb).

## PolarDB for MySQL database

### **Network connection configurations**

The network connection between PolarDB for MySQL and fully managed Flink must be established.

-   If PolarDB for MySQL and fully managed Flink are in the same VPC of the same region, PolarDB for MySQL and fully managed Flink are connected.
    
-   If PolarDB for MySQL and fully managed Flink are deployed in different networks, you must establish a network connection between PolarDB for MySQL and fully managed Flink. For example, you can establish a network connection by using VPN Gateway. For more information, see [How does a fully managed Flink service access the Internet?](/help/en/flink/realtime-flink/support/reference#section-zjs-qq7-k4j) and [How does fully managed Flink access a service across VPCs?](/help/en/flink/realtime-flink/support/reference#section-b0b-5qz-thz)
    

### **MySQL server configurations**

-   Binary logging feature
    

The binary logging feature must be enabled. You can run the show variables like "log\_bin" command to check whether this feature is enabled.

-   If the return value is ON, this feature is enabled.
    
-   If the return value is OFF, this feature is disabled. For more information about how to enable the binary logging feature, see [Enable binary logging](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging#task-1580301).
    

-   Format of binary logs
    
    The binary logs must be in the ROW format. You can run the show variables like "binlog\_format" command to query the format of binary logs. The default format of binary logs of PolarDB for MySQL is ROW.
    
-   Setting of the binlog\_row\_image parameter
    
    The binlog\_row\_image parameter must be set to FULL. You can run the show global variables like "binlog\_row\_image" command to query the value of the binlog\_row\_image parameter. The default value of the binlog\_row\_image parameter for PolarDB for MySQL is FULL.
    

### **Session parameter configurations**

When you use the MySQL CDC connector to read full snapshots from a large-sized database, the established connection may time out. To prevent this issue, you can configure the interactive\_timeout and wait\_timeout parameters in the MySQL configuration file. Parameter description:

-   interactive\_timeout: specifies the number of seconds the server waits for an activity before the server closes an interactive connection. For more information, see [Specify cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301).
    
-   wait\_timeout: specifies the number of seconds the server waits for an activity before the server closes a non-interactive connection. For more information, see [Specify cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301).
    

### **Account permission configurations**

Create an account and grant the SELECT, REPLICATION SLAVE, and REPLICATION CLIENT permissions to the account. These permissions are required to synchronize data from PolarDB for MySQL by using the MySQL CDC connector. For more information about how to create an account and grant permissions to the account, see [Create a database account](/help/en/polardb/polardb-for-mysql/user-guide/create-and-manage-database-accounts#task-1580301).

**Important**

By default, an account that is created in the PolarDB for MySQL console does not have the SELECT permission. You must manually grant the SELECT permission to the account. For more information about how to grant permissions to an account, see [Manage user permissions on MySQL databases](/help/en/dms/manage-user-permissions-on-mysql-databases#task-1940075).

## Self-managed MySQL database

### **Network connection configurations**

The network connection between the self-managed MySQL database and fully managed Flink must be established.

-   If your MySQL database is deployed on Alibaba Cloud and resides in the same VPC as fully managed Flink, the network between the MySQL database and fully managed Flink is connected.
    
-   If your MySQL database is not deployed on Alibaba Cloud, you must enable fully managed Flink to access the public IP address of the MySQL database. In this case, you need to connect the self-managed MySQL database and fully managed Flink by using VPN Gateway. For more information, see [How does a fully managed Flink service access the Internet?](/help/en/flink/realtime-flink/support/reference#section-zjs-qq7-k4j)
    

### **MySQL server configurations**

-   Supported versions
    
    The MySQL CDC connector that runs on Ververica Runtime (VVR) 4.0.8 or later can read data from MySQL databases of versions 5.7 and 8.0.X. The MySQL CDC connector that runs on VVR 4.0.11 or later can read data from MySQL databases of versions 5.6.X, 5.7.X, and 8.0.X. You can run the select version() command to query the MySQL version.
    
-   Binary logging feature
    

The binary logging feature must be enabled. You can run the show variables like "log\_bin" command to check whether this feature is enabled.

-   If the return value is ON, this feature is enabled.
    
-   If the return value is OFF, this feature is disabled. For more information about how to enable the binary logging feature, see [Enable binary logging](https://dev.mysql.com/doc/refman/5.7/en/binary-log.html).
    

-   Format of binary logs
    
    The binary logs must be in the ROW format. You can run the show variables like "binlog\_format" command to query the format of binary logs. If the binary logs are not in the ROW format, you must change the format to ROW. For more information, see [Configure the binary log format](https://dev.mysql.com/doc/refman/5.7/en/binary-log-setting.html).
    
-   Setting of the binlog\_row\_image parameter
    
    The binlog\_row\_image parameter must be set to FULL. You can run the show global variables like "binlog\_row\_image" command to query the value of the binlog\_row\_image parameter. If the value of the binlog\_row\_image parameter is not FULL, you must change the value to FULL. For more information, see [Setting of binlog\_row\_image](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_binlog_row_image).
    
-   Disable binary log transaction compression
    
    To successfully retrieve incremental data from a self-managed MySQL database using the MySQL CDC connector, you must disable binary log transaction compression.
    

### **Session parameter configurations**

When you use the MySQL CDC connector to read full data from a large-sized database, the established connection may time out. To prevent this issue, you can configure the interactive\_timeout and wait\_timeout parameters in the MySQL configuration file. Parameter description:

-   interactive\_timeout: specifies the number of seconds the server waits for an activity before the server closes an interactive connection. For more information, see [Configure the interactive\_timeout parameter of MySQL](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_interactive_timeout).
    
-   wait\_timeout: specifies the number of seconds the server waits for an activity before the server closes a non-interactive connection. For more information, see [Configure the wait\_timeout parameter of MySQL](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_wait_timeout).
    

### **Account permission configurations**

Create an account and grant the SELECT, REPLICATION SLAVE, and REPLICATION CLIENT permissions to the account. To configure account permissions, perform the following steps:

1.  Create an account and configure a password for the account.
    

```
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
```

3.  For more information, see [Create a user](https://dev.mysql.com/doc/refman/8.0/en/create-user.html).
    
4.  Grant the required permissions to the account.
    

```
 GRANT SELECT, REPLICATION SLAVE,REPLICATION CLIENT ON *.* TO 'user' IDENTIFIED BY 'password'; 
```

6.  \*.\* indicates that the account is granted the preceding permissions on all tables in all databases. You can also use mydb.\* to allow the specified account to grant the preceding permissions to a single database.
    
7.  Make sure that the permissions granted to the account are valid.
    

```
FLUSH PRIVILEGES; 
```
