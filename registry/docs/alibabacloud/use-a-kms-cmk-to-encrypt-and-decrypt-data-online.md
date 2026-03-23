If you need to encrypt a small amount of sensitive data in assets that are assigned public IP addresses and deployed on Alibaba Cloud or other clouds, you can use a key in Key Management Service (KMS) to encrypt and decrypt the sensitive data. This topic describes how to use a key to encrypt and decrypt data.

## **Scenarios**

The process described in this topic is suitable for scenarios in which the data size for symmetric encryption or decryption does not exceed 6 KB per operation or the data size for asymmetric encryption or decryption does not exceed 1 KB per operation.

**Note**

A large data size for a single encryption operation increases the probability of network transmission failures and prolongs the transmission time. The time that is required for a KMS instance to perform encryption and decryption on the data also increases.

The following list describes the typical scenarios:

-   **Scenario 1: Applications deployed on Alibaba Cloud require encryption and decryption of data**
    
    Applications that are deployed on Alibaba Cloud generate or receive sensitive data in plaintext. The sensitive data must be encrypted and then stored in databases. In this scenario, we recommend that you use symmetric encryption.
    
-   **Scenario 2: Applications deployed on and outside Alibaba Cloud require encryption and decryption of data**
    
    We recommend that you use asymmetric encryption. Applications or client programs that are deployed outside Alibaba Cloud use a public key to encrypt data and send the encrypted data, which is the ciphertext, to applications that are deployed on Alibaba Cloud. Then, the latter applications call KMS Instance SDK to decrypt the ciphertext by using the private key that corresponds to the public key.
    

## **Scenario 1:** Applications deployed on Alibaba Cloud require encryption and decryption of data

### Related API operations

**API operation**

**Description**

[AdvanceEncrypt](/help/en/kms/key-management-service/developer-reference/advanceencrypt) (recommended)

Encrypts plaintext into ciphertext by using the primary version of a key.

**Note**

You can call this operation only if you use symmetric keys in KMS instances of the software key management type.

[AdvanceDecrypt](/help/en/kms/key-management-service/developer-reference/advancedecrypt) (recommended)

Decrypts ciphertext into plaintext.

**Note**

You can call this operation only if you use symmetric keys in KMS instances of the software key management type.

[Encrypt](/help/en/kms/key-management-service/developer-reference/encrypt-2)

Encrypts plaintext into ciphertext by using the initial version of a key.

[Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2)

Decrypts ciphertext into plaintext.

### **Procedure**

1.  Purchase and enable a KMS instance of the hardware key management type or the software key management type. For more information, see [Purchase and enable a KMS instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance).
    
2.  Create a **symmetric key** in the KMS instance to encrypt and decrypt data. For more information, see [Create a key](/help/en/kms/key-management-service/user-guide/manage-keys-2#443e78c034zi7).
    
3.  Create an application access point (AAP) and then create a client key for the AAP. For more information, see [Access a KMS instance by using an AAP](/help/en/kms/key-management-service/user-guide/create-an-aap#task-2299284).
    
    **Note**
    
    An application deployed on Alibaba Cloud uses an AAP to access a KMS instance. If you have multiple applications, create an AAP for each application.
    
4.  Use KMS Instance SDK to encrypt and decrypt data. For more information, see [KMS Instance SDK](/help/en/kms/key-management-service/developer-reference/kms-instance-sdk-for-java/).
    
    **Note**
    
    KMS provides various SDKs. Only KMS Instance SDK supports cryptographic operations. For more information, see [SDK user guide](/help/en/kms/key-management-service/developer-reference/sdk-user-guide/).
    

## Scenario 2: Applications deployed on and outside Alibaba Cloud require encryption and decryption of data

### Related API operations

**API operation**

**Description**

[Encrypt](/help/en/kms/key-management-service/developer-reference/encrypt-2)

Encrypts plaintext into ciphertext by using the initial version of a key.

[Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2)

Decrypts ciphertext into plaintext.

### Procedure

1.  Purchase and enable a KMS instance of the hardware key management type or the software key management type. For more information, see [Purchase and enable a KMS instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance).
    
2.  Create an **asymmetric key** in the KMS instance to encrypt and decrypt data. For more information, see [Create a key](/help/en/kms/key-management-service/user-guide/manage-keys-2#443e78c034zi7).
    
3.  Obtain and save the public key in the KMS console, and distribute the public key to an application that is deployed outside Alibaba Cloud. ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1636611071/p726259.png)
    
4.  Create an AAP and then create a client key for the AAP. For more information, see [Access a KMS instance by using an AAP](/help/en/kms/key-management-service/user-guide/create-an-aap#task-2299284).
    
    **Note**
    
    An application deployed on Alibaba Cloud uses an AAP to access a KMS instance. If you have multiple applications, create an AAP for each application.
    
5.  Applications or apps that are deployed outside Alibaba Cloud use the public key to encrypt sensitive data or a temporary symmetric key, and send sensitive data ciphertext or temporary symmetric key ciphertext to applications that are deployed on Alibaba Cloud. The applications on Alibaba Cloud use KMS Instance SDK to decrypt sensitive data or the temporary symmetric key. For more information, see [KMS Instance SDK](/help/en/kms/key-management-service/developer-reference/kms-instance-sdk-for-java/).
    
    **Note**
    
    KMS provides various SDKs. Only KMS Instance SDK supports cryptographic operations. For more information, see [SDK user guide](/help/en/kms/key-management-service/developer-reference/sdk-user-guide/).
