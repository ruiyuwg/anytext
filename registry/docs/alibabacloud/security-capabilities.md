This topic describes the following security capabilities provided by PolarDB for MySQL: access control, data transmission encryption, data encryption and decryption, data masking, and security audit.

## Access control

The cluster whitelist feature in PolarDB for MySQL implements cluster access security. The cluster whitelist feature allows you to create IP whitelists and security groups. After you create a PolarDB for MySQL cluster, you can [Configure an IP whitelist](/help/en/polardb/polardb-for-mysql/user-guide/configure-an-ip-whitelist#task-1580301) or [Configure a security group](/help/en/polardb/polardb-for-mysql/user-guide/configure-a-security-group#task-1580301) for the cluster. Only the IP addresses or ECS instances added to the whitelist or security group can access the cluster.

-   IP whitelists.
    
    An IP whitelist contains IP addresses or CIDR blocks that are allowed to access a PolarDB for MySQL cluster. You can configure an IP whitelist to reinforce the security of a PolarDB for MySQL cluster. We recommend that you update the IP whitelist on a regular basis. In most cases, you must configure an IP whitelist in the following scenarios:
    
    -   You want to connect your ECS instance to a PolarDB for MySQL cluster. You can find the IP addresses of the ECS instance in the Configuration Information section on the Instance Details page. Then, add one of the IP addresses to the IP whitelist of the cluster.
        
        **Note** If the ECS instance and the PolarDB for MySQL cluster are deployed in the same region, such as the China (Hangzhou) region, add the private IP address of the ECS instance to the IP whitelist. If the ECS instance and the PolarDB for MySQL cluster are deployed in different regions, add the public IP address of the ECS instance to the IP whitelist. You can also migrate the ECS instance to the region where the PolarDB for MySQL cluster is deployed and then add the private IP address of the ECS instance.
        
    -   If you want to connect on-premises servers, computers, or other cloud instances to the PolarDB for MySQL cluster, add the relevant IP addresses to the IP whitelist of the cluster.
-   Security groups.
    
    If you want to use Elastic Compute Service (ECS) instances to access a PolarDB for MySQL cluster, configure a security group with which the ECS instances are associated and add the security group to a whitelist of the PolarDB for MySQL cluster. This way, the ECS instances in the security group can access the PolarDB for MySQL cluster.
    

## Data transmission encryption

PolarDB for MySQL allows you to enable SSL encryption to improve the security of data transmission. SSL is used to encrypt network connections at the transport layer. This improves the security and integrity of the data that is transmitted.

You can enable SSL encryption and install SSL certificates that are issued by certificate authorities (CAs) on the applications that require data encryption. For more information, see [Configure SSL encryption](/help/en/polardb/polardb-for-mysql/user-guide/configure-ssl-encryption#task-2407132).

## Data encryption and decryption

PolarDB for MySQL provides the Transparent Data Encryption (TDE) feature to perform real-time I/O encryption and decryption on data files. Before data is written to a disk, the data is encrypted. Then, the data is decrypted when the data is read from the disk and written into the memory. This ensures data security.

For more information, see [Configure TDE for a PolarDB for MySQL cluster](/help/en/polardb/polardb-for-mysql/user-guide/configure-tde-for-a-polardb-for-mysql-cluster#task-2462076).

## Data masking

If you want to authorize third parties to generate reports, analyze data, perform development and test activities, or perform other database-related operations, you may need to obtain the latest customer data from databases in the production environment in real time. To avoid disclosing personal information, data must be masked before it is provided to third parties.

PolarDB for MySQL provides the dynamic data masking feature. You can use PolarProxy to mask sensitive data. When your application initiates a data query request, PolarDB masks the sensitive data that is queried before PolarDB returns the data to the application. To achieve this, you need to specify the database account, the database name, and the table or column that requires data masking before the data is queried. This way, you can obtain the real-time data that is masked by using the dynamic data masking feature. This ensures secure data access.

For more information, see [Dynamic data masking](/help/en/polardb/polardb-for-mysql/user-guide/overview-55#task-2069406).

## Security audit

PolarDB for MySQL provides the [SQL Explorer and Audit](/help/en/polardb/polardb-for-mysql/user-guide/sql-explorer-and-audit#task-1580371) feature. This helps you detect security risks and performance issues for your database by collecting and analyzing the raw SQL logs.
