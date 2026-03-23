Key Management Service (KMS) secrets are integrated in specific Alibaba Cloud services. After a secret name is configured in the Alibaba Cloud services, the Alibaba Cloud services can retrieve a secret value from KMS to implement specific operations. This ensures that sensitive secrets required in Alibaba Cloud services are always managed in a secure and systematic manner and prevents the risk of secret information leaks due to manual oversights.

## Background information

KMS provides the secret management feature to prevent the risk of sensitive information leaks caused by hardcoded secrets in code. You can store sensitive information as a secret in KMS and configure a secret name in an application. When you want to use the sensitive information, the application dynamically retrieves the value of the secret from KMS. The sensitive information includes database account passwords, server account passwords, SSH key pairs, and access keys. KMS allows you to manage secrets throughout their lifecycle and allows applications to use secrets in a secure and efficient manner. This ensures that only authorized users and services can access KMS.

## Integration of KMS secrets in Alibaba Cloud services

You can manage secrets in KMS in a centralized manner and configure secret names in Alibaba Cloud services. The Alibaba Cloud services can view the secret metadata and retrieve secret values from KMS after the services are granted relevant permissions. Operators can use secrets but cannot see the details of the secrets. This configuration meets the security principle of accessible but invisible, which greatly reduces the risk of secret leaks.

You can manage your secrets in KMS in a centralized manner. Alibaba Cloud services allow you to use your secrets in KMS. Then, the Alibaba Cloud services retrieve secrets from KMS and use the secrets in real time. You can query the usage of the secrets in ActionTrail.

## **Alibaba Cloud services into which KMS secrets are integrated**

**Service name**

**Description**

**References**

Container Service for Kubernetes (ACK)

After you install the ack-secret-manager secret Kubernetes plug-in in ACK, you can configure secret names in the plug-in. The plug-in periodically reads the latest secret values from KMS and caches the values in the Kubernetes cluster. Then, you can use secrets that are managed in KMS in the same manner that you use secrets in Kubernetes Secrets. This prevents the transmission and leak of sensitive data during application development and construction.

[Integrate KMS secrets in ACK](/help/en/kms/key-management-service/user-guide/integrate-kms-secrets-into-ack)

Bastionhost

After you store the account password or SSH key pair of an ECS instance as an ECS secret in KMS, you can import the ECS secret in Bastionhost. When Bastionhost establishes a remote connection to the ECS instance, Bastionhost retrieves the value of the ECS secret from KMS. You do not need to enter the account password or SSH key pair in Bastionhost. You can perform immediate rotation or configure automatic rotation for ECS secrets in KMS to meet security and compliance requirements.

[Integrate KMS secrets in Bastionhost](/help/en/kms/key-management-service/user-guide/integrate-ecs-secrets-into-bastionhost)

Data Management (DMS)

After you store the passwords for ApsaraDB RDS accounts as ApsaraDB RDS secrets in KMS, you can configure and import the secrets in DMS. When DMS remotely connects to an ApsaraDB RDS database, DMS automatically retrieves the associated secret from KMS. You do not need to enter the account password of the database in DMS. You can configure immediate rotation or automatic rotation for ApsaraDB RDS secrets in KMS to meet security and compliance requirements.

[Integrate ApsaraDB RDS secrets into DMS](/help/en/kms/key-management-service/user-guide/integrate-apsaradb-rds-secrets-into-dms)
