Key Management Service (KMS) is a comprehensive on-cloud data encryption solution that includes KMS and Cloud Hardware Security Module. This solution helps solve concerns such as data security, key security, key management, and secret management.

## **Overview**

**KMS** provides secure and compliant key management and secret management. KMS supports server-side encryption of cloud services. KMS also supports key management and encryption and decryption for applications. KMS allows you to save sensitive data as secrets. This helps prevent sensitive data leaks due to hardcoded credentials in your application. KMS helps reduce the costs of procurement, operations and maintenance (O&M), and research and development (R&D) of cryptographic infrastructure, data encryption and decryption products, and secret management products. This way, you can focus on your business development. KMS is a software as a service (SaaS)-based service.

**Cloud Hardware Security Module** provides on-cloud data encryption and decryption based on hardware security modules (HSMs) to comply with Federal Information Processing Standard (FIPS) 140-2 Level 3. Cloud Hardware Security Module is an infrastructure as a service (IaaS)-based service.

## Scenarios

### **KMS**

-   Sensitive data encryption and protection
    
    You can use data encryption to protect sensitive data that is generated or stored on the cloud. Alibaba Cloud provides multiple methods to encrypt and protect sensitive data.
    
-   Security compliance requirements for information systems
    
    Enterprises or organizations who evaluate the security compliance requirements for information systems may encounter the following scenarios:
    
    Security regulations require that enterprises or organizations must use cryptographic techniques to protect information systems, and the cryptographic techniques and key management facilities must comply with related technical standards and security regulations.
    
    Security regulations do not require the use of cryptographic techniques. However, cryptographic techniques facilitates security compliance. For example, cryptographic technologies can help you obtain higher scores in a score-based security compliance process.
    
-   Third-party secret management solution
    
    After you allow customers to manage keys in KMS and authorize independent software vendors (ISVs) to use the keys, KMS acts as a third-party security protection system between the ISVs and the customers. The customers and the ISVs can work together to ensure system security.
    

### **Cloud Hardware Security Module**

## Features

### KMS

-   **Manage and use keys**
    
    -   **Key lifecycle management**: ensures the security of keys throughout their lifecycle, including creation, storage, distribution, use, and destruction.
        
    -   **Key rotation**: provides automatic or manual key rotation to improve security.
        
    -   **Support for bring your own key (BYOK)**: allows you to import your own key material. This provides a flexible and secure option for enterprises that require a higher level of data security and control.
        
    -   **Support for key-based cryptographic operations**: allows you to use multiple types of symmetric and asymmetric keys for encryption, decryption, signing, and verification.
        
-   **Manage and use secrets**
    
    -   **Secret lifecycle management**: ensures the security of secrets throughout their lifecycle, including creation, storage, distribution, use, and destruction.
        
    -   **Secret value retrieval**: allows you to retrieve secret values from KMS to prevent users from hard-coding sensitive information in applications. This helps improve security.
        
-   **Multi-account resource sharing**: allows the account owner of a KMS instance, which is known as the resource owner, to share the KMS instance with other Alibaba Cloud accounts known as principals. The principals can create keys and secrets, use the keys for server-side encryption in Alibaba Cloud services and data encryption in self-managed applications, and use the secrets to prevent data leaks due to hard-coded sensitive data.
    
-   **Backup management**: allows you to purchase a backup quota and supports cross-region backup to other KMS instances.
    
-   **Access control**: provides access control and audit for keys to ensure that only authorized users and systems can access keys.
    
-   **Log**: records the usage and access of keys and secrets for audit and monitoring.
    

### **Cloud Hardware Security Module**

-   **Support for shared virtual security modules (VSMs) and dedicated HSMs**: provides HSMs that are validated by FIPS 140-2 Level 3. VSMs are suitable for small- and medium-sized enterprises or scenarios that require modest performance. Dedicated HSMs are suitable for large enterprises, financial institutions, or scenarios that require extremely high security and performance.
    
-   **Key management**: provides separate permissions for device management and key management. Alibaba Cloud can manage only HSMs. For example, Alibaba Cloud monitors device availability metrics. Keys can be managed only by users. Alibaba Cloud cannot obtain keys.
    
-   **Support for key-based encryption and decryption**: allows you to call the API operations supported by the HSM vendor to encrypt, decrypt, sign, and verify data.
    
-   **Data backup and restoration**: allows you to restore the data of the current HSM or restore the data to another HSM. This way, data can be replicated between HSMs.
    
-   **Security audit**: saves the running information about HSMs to Object Storage Service (OSS) and persistently stores the information in a specific audit log format to meet compliance and audit requirements.
