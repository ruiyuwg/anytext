Key Management Service (KMS) is an end-to-end service platform for key management, data encryption, and secret management. KMS provides simple, reliable, secure, and standard-compliant capabilities to encrypt and protect data and manage secrets. KMS helps reduce your costs of procurement, operations and maintenance (O&M), and research and development (R&D) on cryptographic infrastructure, data encryption products, and secrets management products. This way, you can focus on the development of your business.

## Business components

KMS provides two business components: Key Management and Secrets Manager.

**Business component**

**Description**

**References**

Key Management

The Key Management component allows you to manage keys in a secure manner and use keys to perform cryptographic operations. You can manage keys that are required for server-side data encryption in Alibaba Cloud services. You can also use keys to perform cryptographic operations such as signing and verification, data encryption, and data decryption in self-managed applications.

[Overview of Key Management](/help/en/kms/key-management-service/user-guide/overview-of-key-management#task-2292622)

Secrets Manager

The Secrets Manager component allows you to encrypt and store secrets, regularly rotate secrets, distribute secrets in a secure manner, and manage secrets in a centralized manner. This helps prevent risks that are caused by secrets in plaintext in your applications. Secret rotation can effectively mitigate the adverse impacts of secret leaks.

[Overview of Secrets Manager](/help/en/kms/key-management-service/user-guide/secret-management-overview#concept-2403154)

## Features

### Key Management

The following table describes the features that are provided by the Key Management component.

**Feature**

**Description**

**References**

Various types of keys

KMS provides free default keys for server-side encryption in Alibaba Cloud services. KMS also provides paid software-protected keys and hardware-protected keys for data encryption in your applications and server-side encryption in Alibaba Cloud services. This helps you meet the key management requirements in different business and security compliance scenarios.

[Overview of Key Management](/help/en/kms/key-management-service/user-guide/overview-of-key-management#task-2292622)

Leading security compliance capabilities

KMS supports the integration with certified hardware security modules (HSMs) to meet strict security and compliance requirements.

[Hardware-protected key](/help/en/kms/key-management-service/user-guide/overview-of-key-management#section-94o-2vp-13j)

Cloud-native encryption

KMS supports the integration with various Alibaba Cloud services. You can use keys and encryption technologies to protect sensitive data assets in the cloud in an efficient manner. KMS supports server-side encryption in Alibaba Cloud services and at-rest secret encryption in Container Service for Kubernetes (ACK) Pro clusters.

[Alibaba Cloud services that can be integrated with KMS](/help/en/kms/key-management-service/user-guide/alibaba-cloud-services-that-can-be-integrated-with-kms#concept-2318937)

Simplified application access

You can use Alibaba Cloud SDK to implement key management. You can use KMS Instance SDK to perform cryptographic operations. You can call API operations to manage the lifecycle of keys and use keys to perform operations such as data encryption, data decryption, and signing and verification.

-   [Alibaba Cloud SDK](/help/en/kms/key-management-service/overview-of-classic-kms-sdk)
    
-   [KMS Instance SDK](/help/en/kms/key-management-service/developer-reference/kms-instance-sdk-for-java/#task-311381)
    

Centralized and large-scale management

KMS allows you to use services such as Resource Orchestration Service (ROS) and Terraform to implement server-side encryption in resources such as Elastic Compute Service (ECS) instances that use cloud disks, Object Storage Service (OSS) buckets, ApsaraDB RDS instances, and MaxCompute projects.

[Terraform overview](/help/en/kms/key-management-service/developer-reference/kms-3-use-terraform-to-manage-kms-resources#task-2248887)

### Secrets Manager

The following table describes the features that are provided by the Secrets Manager component.

**Feature**

**Description**

**References**

Cloud-native integration

KMS allows you to manage Resource Access Management (RAM), ApsaraDB RDS, and ECS secrets and configure rotation cycles to use dynamic secrets. This helps mitigate the security threats that are caused when the AccessKey pairs of RAM users or the user credentials of ApsaraDB RDS and ECS resources are leaked.

[Overview of Secrets Manager](/help/en/kms/key-management-service/user-guide/secret-management-overview#concept-2403154)

Simplified application access

Your application can use Secrets Manager Client, the RAM secret plug-in, and Secrets Manager JDBC to access and use secrets in a simplified manner.

-   [Secrets Manager Client](/help/en/kms/key-management-service/developer-reference/secrets-manager-client#task-2280463)
    
-   [Secrets Manager JDBC](/help/en/kms/key-management-service/developer-reference/secrets-manager-jdbc#task-2280443)
    
-   [RAM secret plug-in](/help/en/kms/key-management-service/developer-reference/ram-secret-plug-in#task-2277694)
    

Centralized and large-scale management

KMS supports services such as ROS and Terraform. This helps you manage secrets in a secure manner and automatically manage operation orchestration.

[Terraform overview](/help/en/kms/key-management-service/developer-reference/kms-3-use-terraform-to-manage-kms-resources#task-2248887)
