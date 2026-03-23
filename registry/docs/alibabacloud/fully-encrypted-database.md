The Always-confidential database feature is provided by ApsaraDB RDS to ensure data security. If you enable and use the Always-confidential database feature for an ApsaraDB RDS for PostgreSQL instance, you can encrypt sensitive data columns in database tables. This way, the sensitive data is transmitted, computed, and stored in ciphertext.

## **Background information**

As authorities enhance the supervision in data security and sensitive personal information, atomic data security capabilities can no longer meet the supervision requirements. To comply with national regulations and industry standards, you must ensure the security of data throughout its lifecycle. However, traditional third-party security hardening and client-side encryption have disadvantages in aspects such as cost reduction, restructuring, and performance optimization. In this case, Always-confidential databases are growing fast and recognized by the industry. You can use Always-confidential databases to resolve data security issues in various scenarios.

## **Feature introduction**

The Always-confidential database feature is jointly developed by the **Database and Storage Lab of Alibaba DAMO Academy** and the Alibaba Cloud database team. The feature leverages technologies to minimize the impact of potential data risks that are caused by unexpected events, such as human errors and platform management issues. The feature prevents ApsaraDB RDS and personnel who are not data owners, such as application service providers, from accessing your plaintext data and prevents leaks of data in the cloud. This way, you do not need to worry about developers and O&M personnel stealing your data or your database account information being leaked.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4706877961/p723494.png)

The feature uses confidential computing to encrypt data on the client side. After the encryption, **the data is stored as ciphertext** on the untrusted server side. In addition, common database operations, including transactions, queries, and analysis, can be performed as normal on the ciphertext data. This way, cloud platform providers and management personnel such as database administrators (DBAs) **can use the ciphertext data but cannot view the plaintext data**. The feature defends against external and internal threats, protects user data throughout its lifecycle, and helps users privatize their cloud data.

-   **How does the feature ensure that my data is not leaked on the cloud?**
    
    The data is encrypted on the client side by using your key and is sent to ApsaraDB RDS. ApsaraDB RDS has no access to the key. Therefore, the data cannot be decrypted and disclosed to untrusted environments.
    
-   **How does the feature ensure that common database operations can be performed on ciphertext data?**
    
    Before common database operations are performed on ciphertext data, the client uses remote attestation to check whether the server runs in a trusted execution environment (TEE) and the code that is running in the TEE is trusted. If yes, the client passes the key to the TEE in end-to-end mode. This way, the ciphertext data and key are processed in the TEE and cannot be accessed by external users.
    

## **Scenarios**

The long-term goal of the feature is to develop a database architecture or system that features native security capabilities **to protect the confidentiality and integrity of data**. The feature enables you to ensure the high stability, high performance, and cost-effectiveness of your database system and introduce security capabilities through design optimization and restructuring.

You can use the feature to address data security issues in the following scenarios:

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4706877961/p723487.png)

-   -   **Platform O&M:** This scenario mainly involves database service protection in untrusted environments, such as third-party platforms, to ensure data security during O&M. In most cases, data owners are application service providers. They want to prevent their application data from being accessed by unauthorized database service providers and O&M personnel and ensure that their databases are running as expected.
        
        Examples:
        
        -   If a database is migrated to the cloud, the feature prevents unauthorized cloud platform providers and O&M personnel from accessing the database data.
            
        -   If a database system is deployed on a server in a data center for application connection, the feature prevents unauthorized O&M personnel from accessing the database data.  
            
    
    -   **Sensitive data compliance:** This scenario mainly involves application service protection in untrusted environments, such as third-party platforms, to ensure the security of sensitive user data. In user-oriented scenarios, specific data, such as health data and financial data, is owned by users. They want application services to provide data management and analysis capabilities without accessing plaintext private data.
        
        Examples:
        
        -   If enterprises uses third-party services to manage commercial data, the feature prevents the trade secrets of the enterprises from being obtained by the third-party service providers.
            
        -   If third-party service providers manage confidential data, such as personally identifiable information (PII) and gene information, the feature helps meet compliance requirements on end-to-end encryption.  
            
    -   **Multi-source data integration:** This scenario mainly involves the joint analysis of multi-source data. During multi-source data integration and computing, the feature prevents unauthorized access to multi-source data. Only data owners have data encryption keys. Other parties cannot access the plaintext data of data owners. If specific data needs to be shared with a third party, the feature allows the data owner to share the data without disclosing the key to the third party while meet compliance requirements.
        
        Examples:
        
        -   In scenarios such as joint risk control and cross-border services, strict data compliance requirements are imposed. Organizations cannot obtain the plaintext data of each other.
            
        -   In scenarios such as co-marketing, partners are also competitors. This complicates their relationship and makes it difficult for them to share plaintext data.  
            
    

## **Security levels provided by the Always-confidential database feature**

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4706877961/p723453.png)

ApsaraDB RDS provides database services at the following security levels in ascending order:

-   Regular database on the cloud: The feature is used together with Alibaba Cloud security services to **block most external attacks**. However, a trust relationship must be built among the operating system, database software, Infrastructure as a service (IaaS) O&M personnel, and database users on an RDS instance.
    
-   Always-confidential database (basic edition): **This feature is recommend**. The feature is used together with the Always-confidential access control module to limit the ability of database users to manipulate data within a database. This prevents unauthorized access and **ensures that your data is available but invisible to all database users, including DBAs**. You need to trust only the operating system, database software, and IaaS O&M personnel in your RDS instance.
    
-   Always-confidential database (hardware-enhanced edition): Compared with the Always-confidential database (basic edition) feature, this feature uses TEE technologies to allow the RDS instances that use the Always-confidential database (basic edition) feature to run in TEE environments **with all external security threats isolated**. TEE technologies include Intel Software Guard Extensions (SGX), Intel Trust Domain Extensions (TDX), ARM TrustZone, AMD Secure Encrypted Virtualization (SEV), Hygon Commercial Security Version (CSV), and confidential containers. You need to trust only the operating system and database software in your RDS instance.
    

**Note**

All security levels of an Always-confidential database have consistent features and advanced cryptographic capabilities such as homomorphic encryption.

-   The Always-confidential database (basic edition) feature is available for RDS instances that use all instance types excluding the Intel SGX-based security-enhanced instance type.
    
-   The Always-confidential database (hardware-enhanced edition) feature is available for RDS instances that use the Intel SGX-based security-enhanced instance type.
    

For more information, see [Instance types for primary ApsaraDB RDS for PostgreSQL instances](/help/en/rds/apsaradb-rds-for-postgresql/primary-apsaradb-rds-for-postgresql-instance-types).
