This topic compares various encryption methods that are used in database systems. This topic also describes how to select an encryption method based on your business requirements.

## **Introduction**

Access control systems are used to limit access to specific areas. For example, in a residential community, a multi-tiered access control system restricts entry at the community entrance, building entrances, and individual apartment entrances to ensure only authorized individuals can access specific areas. An access control system can achieve different access control results based on locations and areas. Encryption methods serve the same as an access control system for a residential community. You can use encryption methods to encrypt sensitive data and achieve different effects based on the position and granularity of the data.

## Introduction to database encryption methods

-   **Disk encryption**: When you create system disks and data disks during Elastic Compute Service (ECS) instance creation or separately create data disks after an ECS instance is created, you can select Encryption to enable the disk encryption feature. After the feature is enabled, the system automatically encrypts the data of the ECS instance on the server that hosts the ECS instance. Disk encryption helps protect the privacy, autonomy, and security of your data without the need to deploy or maintain key management infrastructure. Disk encryption **ensures the security of data that is stored on disks at the Infrastructure as a Service (IaaS) layer**. For more information, see [Overview](/help/en/ecs/user-guide/encryption-overview).
    
-   **Transparent Data Encryption** (**TDE**): Before data is written from the database memory to a file system, the database engine encrypts data in memory and then writes encrypted data to the file system. TDE **ensures the security of data that is stored in file systems at the Platform as a Service (PaaS) layer**. For more information, see [Configure TDE](/help/en/rds/apsaradb-rds-for-mysql/configure-tde-for-an-apsaradb-rds-for-mysql-instance).
    
-   **Column encryption (basic edition of the always-confidential database feature)**: Before query results are sent from a databases to a client, the results are encrypted. The client uses the required key to decrypt the query results. This ensures that data transferred between database clients and databases is **in ciphertext**. Column encryption **ensures data security when data is transferred between clients and databases**. For more information, see [Overview](/help/en/doc-detail/2589898.html).
    

## **Potential database attacks**

A database is a system application, and data within the database is vulnerable to security risks. The following figure shows the security risks and attack paths. For more information, see [Oracle's Maximum Security Architecture for Database Security](https://blogs.oracle.com/cloudsecurity/post/oracles-maximum-security-architecture-for-database-security).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8456253271/p825590.png)

The following table describes different types of attacks.

**Type**

**Description**

**Method**

Attack Admins

Attacks system administrators, such as OS administrators. System administrators have the highest permissions on a database system. If an attacker obtains an administrator account, the attacker can manage and access all storage resources, systems, and peripherals. In a database system, system administrators are divided into the following types:

-   Database administrators (DBAs) can access database data and modify configurations.
    
-   PaaS administrators, such as OS administrators, can access data in OSs and file systems.
    
-   IaaS administrators, such as platform administrators, can access data on peripherals such as disks.
    

OS vulnerabilities

Administrator account leak

Improper system configurations

Attack Users

Attacks users, such as database users. End users can access database systems and specific data. An attacker can obtain a user account and use the account to access user data to launch attacks such as logical data breach attacks. This allows the attacker to exploit vulnerabilities, such as by using SQL injection, to escalate privileges and obtain administrator permissions.

User account leaks

Logical data breaches

Attack Apps

Attacks application services, such as website servers. Application services are accessible over the Internet, have a larger attack surface, and are more vulnerable to intrusion compared to databases that are strictly protected.

Application service vulnerabilities

OS vulnerabilities

Attack Network

Attacks network connections, such as listening to and intercepting network data. In most cases, network attacks use bypass methods and are difficult to detect.

Network listening and interception

Bypass Database

Bypasses database systems to obtain data and steals database data in bypass mode. For example, PaaS personnel can initiate a physical data breach by copying data files and backup files from database disks.

Physical data breaches

Bypass OS

Bypasses the file system in an OS to obtain data and steals disk data in bypass mode. For example, IaaS personnel can directly copy data from local disks or cloud disks.

Mounting attacks

Exploit Database

Exploits defects within a database system, such as code bugs, to access the database directly or indirectly.

Database OS vulnerabilities

Target Data Copies

Attacks development and test databases. In most cases, production data is directly synchronized to a development and test database. However, no effective methods are used to ensure the security of the development and test database. As a result, the development and test database is more vulnerable than the production database.

Any of the preceding attack methods

To address these potential database security risks in different application paths in a system, a comprehensive security solution is required to respond to the potential database security risks in different system applications. Different security technologies and management methods, such as SSL and certificate services, authentication and access control, whitelists and security groups, data encryption and masking, and security auditing, are required to develop a solution. The following sections provide detailed descriptions of encryption methods.

### Capability matrix of encryption methods

The encryption methods that are used in databases include disk encryption, TDE, and column encryption. The following table describes the encryption methods. You can select an appropriate encryption method based on business pain points, encryption granularity, transformation costs, and performance.

Database encryption method

Disk encryption

TDE

Column encryption

(Basic edition of the always-confidential database feature)

Issues that can be resolved

Bypass OS and Attack Admins (IaaS)

Bypass Database, Bypass OS, and Attack Admins (PaaS and IaaS)

Attack Users, Attack Apps, Attack Admins (DBA 1️⃣) Attack Network, and Target Data Copies

Data visibility to database O&M personnel, such as DBA

Visible

Visible

**Invisible**

Data visibility to PaaS O&M personnel, such as OS administrators

Visible

**Invisible**

Yes 1️⃣

Data visibility to IaaS O&M personnel, such as physical process engineers

**Invisible**

**Invisible**

Yes 1️⃣

Encryption granularity

Instance

Table and database

Column

Business transformation

N/A

N/A

You must replace the Java Database Connectivity (JDBC) driver with [EncJDBC](/help/en/rds/apsaradb-rds-for-mysql/encjdbc), and you do not need to modify code.

Performance

Slight performance loss, or even no loss

-   Influencing factors: the sizes of sensitive databases and tables, database configurations, and application loads
    
    -   For example, if the table size is smaller than the cache size, the performance loss is extremely low. If the table size is much larger than the cache size, the performance loss is high.
        
-   In most cases, the performance loss is less than 5%. If application loads are extremely heavy, the performance loss may reach 20%.
    

-   Influencing factors: the sizes of sensitive data in query results, independent of the sizes of databases and tables
    
    -   For example, when a query retrieves one piece of data, the performance loss is minimal. However, retrieving one million pieces of data can result in significant performance loss.
        
-   Conclusion: In most cases, the performance loss is less than 7%. If application loads are extremely heavy, the performance loss may reach 21%.
    

1️⃣ The basic edition of the always-confidential database feature cannot prevent O&M personnel at the PaaS and IaaS layers from accessing plaintext data. You can use the hardware-enhanced edition of the always-confidential database feature together with the trusted hardware technology to defend against attacks from the PaaS and IaaS layers. The hardware-enhanced edition provides enhanced security compared to the basic edition of the always-confidential database feature.

## Comparison of the principles of encryption methods

### **Differences between different database encryption methods**

**Storage security technology**

**Disk encryption**

**TDE**

**Column encryption**

Effective scope

Operating system

Database kernel

Database kernel

Encryption scope

Host and ECS instance

Database instance

Database instance

Encryption granularity

Instance

Database and table

Column

Application awareness

Transparent to applications

Transparent to applications

Replacement of JDBC with EncJDBC for applications

## **Summary**

This topic introduces the existing database encryption methods, describes the security risks faced by databases and the applicable encryption methods from the perspective of users, and explains the difference among database encryption methods. You can select an appropriate database encryption method based on security requirements, business transformation costs, and performance.
