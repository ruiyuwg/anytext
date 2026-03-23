If you want to encrypt a large amount of data in your applications or you do not want to upload data to Key Management Service (KMS), you can use envelope encryption. This topic describes how to use envelope encryption.

## **Applicable key types**

Software-protected keys and hardware-protected keys.

**Important**

You can use software-protected keys, hardware-protected keys, and service keys and customer master keys (CMKs) that are used as default keys for envelope encryption. Service keys and CMKs are used only for server-side encryption in Alibaba Cloud services and cannot be used for encryption in your own applications. You can use software-protected keys and hardware-protected keys for server-side encryption in Alibaba Cloud services and encryption in your own applications.

This topic describes how to use envelope encryption in your own applications. For more information about server-side encryption, see [Integration with KMS](/help/en/kms/key-management-service/user-guide/integration-with-kms).

## Introduction to envelope encryption

Envelope encryption is an encryption mechanism that is similar to the digital envelope technology. When you use envelope encryption, KMS generates a data key, encrypts the data key by using a KMS key, and then passes the data key plaintext and data key ciphertext to your application in a secure manner. Your application uses the data key plaintext to encrypt data and stores the data ciphertext and data key ciphertext. When your data needs to be decrypted, the application requests KMS to decrypt the data key ciphertext to obtain the data key plaintext and then uses the data key plaintext to decrypt the data ciphertext.

### **Envelope encryption process**

An application calls the [GenerateDataKey](/help/en/kms/key-management-service/developer-reference/generatedatakey-2) operation by using SDK to generate a data key. Then, the application uses the data key to encrypt data based on a third-party cryptographic library or a cryptographic module-embedded product. The data key ciphertext is used as an envelope and is stored together with the data ciphertext. The following figure shows the envelope encryption process.![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0433208861/p649879.png)

1.  The application calls the [GenerateDataKey](/help/en/kms/key-management-service/developer-reference/generatedatakey-2) operation to generate a data key. The following information must be passed in the operation.
    
    -   KeyId: the ID or alias of the KMS key that is created.
        
    -   NumberOfBytes: the length of the data key. For security purposes, we recommend that you set the length of the data key to at least 24 bytes.
        
        **Note**
        
        If you use an Advanced Encryption Standard (AES) algorithm to encrypt data, a 16-, 24-, or 32-byte data key is required. If you use a Triple Data Encryption Standard (3DES) algorithm to encrypt data, a 16- or 24-byte data key is required.
        
2.  The application receives the data key that is returned by KMS. The data key contains the data key plaintext, data key ciphertext, and encryption parameters. The encryption parameters include the encryption algorithm and the encrypted initial vector.
    
    The data key ciphertext is generated after you encrypt the data key plaintext in Galois/Counter Mode (GCM) mode by using the KMS key that is passed in the [GenerateDataKey](/help/en/kms/key-management-service/developer-reference/generatedatakey-2) operation.
    
    **Warning**
    
    Keep your data key ciphertext safe. If it is lost, decryption will be impossible, resulting in the irretrievable loss of your business data.
    
3.  The application uses the data key plaintext to locally encrypt data and obtain the data ciphertext.
    
    -   When you use data key plaintext to locally encrypt or decrypt data, you can select a third-party cryptographic library or a cryptographic module-embedded product based on the adaptation and security compliance requirements of the application language.
        
    -   We recommend that you destroy the data key plaintext at the earliest opportunity after the encryption is complete.
        
4.  The application stores the data ciphertext, data key ciphertext, KMS key, and encryption parameters. The KMS key is used to generate the data key. The encryption parameters include the encryption algorithm and the initial vector that are used to generate the data key.
    

### **Envelope decryption process**

An application calls the [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2) operation by using SDK to decrypt the data key ciphertext to obtain the data key plaintext. Then, the application uses the data key plaintext to decrypt the data ciphertext to obtain the data plaintext based on a third-party cryptographic library or a cryptographic module-embedded product. The following figure shows the envelope decryption process.

![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9180168861/p649942.png)

1.  The application reads the data ciphertext, data key ciphertext, KMS key, and encryption parameters. The KMS key is used to encrypt the data key. The encryption parameters include the encryption algorithm and the initial vector that are used to generate the data key.
    
2.  The application calls the [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2) operation. The information that is read is passed in the operation to decrypt the data key ciphertext.
    
3.  The application receives the data key plaintext that is returned by KMS.
    
4.  The application uses the data key plaintext to locally decrypt the data ciphertext to obtain the data plaintext.
    

## Scenarios

You can use envelope encryption in but not limited to the following scenarios:

-   Multiple data files in your applications need to be encrypted. Each data file requires a different data key.
    
    If you use a single key or a small number of keys to encrypt multiple data files and the data amount is large, the risk of key cracking increases. If you use envelope encryption, you can use a different data key to encrypt each data file, and you can use a KMS key to encrypt the data keys. This significantly improves the security of encrypted data.
    

-   A large amount of data in your applications needs to be encrypted at a time, such as full disk data.
    
    If you want to encrypt a large amount of data at a time, you may encounter high network transmission costs and latency when the application server sends the data to KMS over secure channels and KMS returns the encrypted data. You can use envelope encryption to resolve the preceding issues.
    

## Limits

During envelope encryption, you must use symmetric KMS keys in instances of the hardware key management type or software key management type. The symmetric keys must use the following specifications:

-   Software key management instances: Aliyun\_AES\_256.
    
-   Hardware key management instances: Aliyun\_AES\_256, Aliyun\_AES\_192, Aliyun\_AES\_128, or Aliyun\_DES3\_192.
    

## Prerequisites

-   A symmetric key is created. For more information, see [Software-protected keys](/help/en/kms/key-management-service/getting-started/getting-started-with-key-management#4af119c0f9mco) and [Hardware-protected keys](/help/en/kms/key-management-service/getting-started/getting-started-with-key-management#section-607-43z-t1t).
    
-   An application access point (AAP) is created. For more information, see [Access a KMS instance by using an AAP](/help/en/kms/key-management-service/user-guide/create-an-aap#task-2299284).
    
-   KMS Instance SDK is installed. For more information, see [KMS instance SDK (Java)](/help/en/kms/key-management-service/developer-reference/kms-instance-sdk-for-java/), [KMS instance SDK (PHP)](/help/en/kms/key-management-service/developer-reference/kms-instance-sdk-for-php/), [KMS instance SDK (Go)](/help/en/kms/key-management-service/developer-reference/kms-instance-sdk-for-go/), or [KMS instance SDK (Python)](/help/en/kms/key-management-service/developer-reference/kms-instance-sdk-for-python/).
    

## Examples

**Note**

In the following sample code, a 32-byte AES data key is used, and data is encrypted in GCM mode.

## Java

In this example, the Provider cryptographic library that is provided by SunJCE is used to encrypt and decrypt data.

-   [Sample code for envelope encryption](https://github.com/aliyun/alibabacloud-dkms-gcs-java-sdk/blob/master/example/src/main/java/com/aliyun/dkms/gcs/sdk/example/EnvelopeEncryptSample.java)
    
-   [Sample code for envelope decryption](https://github.com/aliyun/alibabacloud-dkms-gcs-java-sdk/blob/master/example/src/main/java/com/aliyun/dkms/gcs/sdk/example/EnvelopeDecryptSample.java)
    

## Python

In this example, the cryptography.hazmat cryptographic library is used to encrypt and decrypt data.

[Sample code for envelope encryption and envelope decryption](https://github.com/aliyun/alibabacloud-dkms-gcs-python-sdk/blob/master/example/envelope_encrypt_decrypt_sample.py)

## **Go**

In this example, the golang/crypto cryptographic library is used to encrypt and decrypt data.

[Sample code for envelope encryption and envelope decryption](https://github.com/aliyun/alibabacloud-dkms-gcs-go-sdk/blob/master/example/envelope_encrypt_decrypt.go)

## **PHP**

In this example, the OpenSSL cryptographic library is used to encrypt and decrypt data.

[Sample code for envelope encryption and envelope decryption](https://github.com/aliyun/alibabacloud-dkms-gcs-php-sdk/blob/master/example/EnvelopeEncryptDecrypt.php)

## **Reference**

[Integration with KMS](/help/en/kms/key-management-service/user-guide/integration-with-kms)
