This topic describes the system accounts that are provided in ApsaraDB RDS for MySQL. The system accounts are required to use ApsaraDB RDS for MySQL instances.

**Note**

System accounts are unavailable to users. ApsaraDB RDS for MySQL provides privileged accounts for users. For more information about how to create a privileged account, see [Create an account on an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-an-account-on-an-apsaradb-rds-for-mysql-instance#section-wkq-j35-q2b).

**Account**

**Description**

root (aliyun\_root in MySQL 5.7 and later versions)

The account that is used to locally manage the RDS instance. For example, you can use this account to reconfigure the parameters that are related to the minor engine version and query the status of the RDS instance.

-   aurora
    
-   rds\_service
    

The accounts that are used to remotely manage the RDS instance. If the RDS instance is faulty, you can provide these accounts to an Alibaba Cloud engineer. The engineer can use these accounts to log on to and manage the RDS instance. For example, the engineer can perform a primary/secondary switchover and monitor the RDS instance.

aurora\_proxy

The account that you can use to forward connections after you enable the database proxy feature.

replicator

The account that you can use to replicate data from the RDS instance to its secondary RDS instance. This account is available if your RDS instance works in high availability mode.

**Note**

All IP addresses of the preceding system accounts are internal IP addresses. You can execute the `SELECT user();` statement to view the current logon account and its IP address. Examples:

```
'aurora_proxy'@'%';
'replicator'@'11.195.XXX.XX';
'replicator'@'11.196.XXX.XXX';
'replicator'@'11.195.XXX.XX';
'replicator'@'11.199.XX.XXX';
'aliyun_root'@'127.0.0.1';
```

In the preceding return results, the CIDR block that starts with 11 of the replicator system account is a private CIDR block of Alibaba Cloud.
