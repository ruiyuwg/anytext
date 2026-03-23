The always-confidential database feature for ApsaraDB RDS for MySQL uses confidential computing to encrypt sensitive data throughout its lifecycle while complying with data protection regulations. Cloud platform providers, unauthorized users, DBAs, developers, and O&M personnel cannot access plaintext data. For a comparison of encryption approaches, see [Comparison of database encryption technologies](/help/en/rds/apsaradb-rds-for-mysql/comparison-of-different-database-encryption-technologies).

## How it works

The always-confidential database supports all database operations on encrypted data, including transactions, queries, and analysis. Data is processed inside a secure enclave, such as an application and a database. Outside the enclave, data **remains in ciphertext**. Query results are encrypted before they are returned.

This approach defends against both external and internal threats. It protects data throughout its lifecycle and keeps cloud data private.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8089117071/p729977.png)

### Preventing data leaks on the cloud

The always-confidential database encrypts protected data in query results. Even if account credentials are leaked, the data stays confidential.

Combine the always-confidential database with one of the following disk encryption features for multi-layer encryption:

-   **Cloud disk encryption** (recommended). For details, see [Use the cloud disk encryption feature](/help/en/rds/apsaradb-rds-for-mysql/configure-the-disk-encryption-feature-for-an-apsaradb-rds-for-mysql-instance).
    
-   **Transparent data encryption (TDE)**. For details, see [Configure TDE](/help/en/rds/apsaradb-rds-for-mysql/configure-tde-for-an-apsaradb-rds-for-mysql-instance).
    

**Note**

Both cloud disk encryption and TDE deliver disk encryption capabilities. Combine them with the always-confidential database based on your business requirements.

## **Use cases**

The always-confidential database provides native security capabilities to protect data confidentiality at the architecture level. It ensures the high stability, high performance, and cost-effectiveness of your database system.

![Use cases](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3760047171/p800958.png)

### Platform O&M

Protects database services in trusted execution environments (TEEs) on third-party platforms. Data owners are typically application service providers who want to prevent unauthorized database service providers and O&M personnel from accessing application data.

Examples:

-   A database is migrated to the cloud. The always-confidential database prevents unauthorized cloud platform providers and O&M personnel from accessing the data.
    
-   A database system is deployed on a server in a data center for application connection. The always-confidential database prevents unauthorized O&M personnel from accessing the data.
    

### Protected data compliance

Protects user data in TEEs on third-party platforms. In user-facing applications, specific data such as health data and financial data is owned by users. Users want application services to provide data management and analysis capabilities without accessing plaintext private data.

Examples:

-   Enterprises use third-party services to manage commercial data. The always-confidential database prevents trade secrets from being exposed to third-party service providers.
    
-   Third-party service providers manage confidential data such as personally identifiable information (PII) and gene information. The always-confidential database helps meet compliance requirements for end-to-end encryption.
    

## **Security levels**

![Security levels](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0455117071/p729709.png)

ApsaraDB RDS prevents security threats at the following levels, listed in ascending order of protection:

**Security level**

**Protection**

**Trust requirements**

**Isolation method**

**Availability**

Regular database on the cloud

Blocks most external attacks when used with Alibaba Cloud security services

Operating system, database software, Infrastructure as a Service (IaaS) O&M personnel, and database users

Alibaba Cloud security services

Available

Always-confidential database (basic edition) **Recommended**

Data is available but invisible to all database users, including DBAs. Works with the always-confidential access control module to limit the ability of database users to manipulate data.

Operating system, database software, and IaaS O&M personnel

Always-confidential access control module

Available for all instance types

Always-confidential database (hardware-enhanced edition)

Uses TEE technologies to allow RDS instances that use the always-confidential database (basic edition) to run in TEE environments, with all external security threats isolated.

Operating system and database software

TEE technologies: Intel SGX, Intel TDX, ARM TrustZone, AMD SEV, Hygon CSV, and confidential containers

Not officially released. The TDX-based edition is preliminarily developed.

**Note**

All security levels share consistent features and advanced cryptographic capabilities, including fully homomorphic encryption (FHE) and homomorphic encryption. To try the TDX-based hardware-enhanced edition, [apply for a trial](https://survey.aliyun.com/apps/zhiliao/JT9q1JAfF).
