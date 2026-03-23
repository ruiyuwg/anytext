Key Management Service (KMS) allows you to create keys and use the keys to encrypt and decrypt data in an efficient manner. This helps ensure the security of your data. This topic describes how to create and use a key.

## Overview

KMS provides software-protected keys, hardware-protected keys, and default keys to meet your business, security, and compliance requirements. For more information, see [Understanding KMS keys](/help/en/kms/key-management-service/user-guide/overview-of-key-management) and [Key specifications for symmetric and asymmetric encryption](/help/en/kms/key-management-service/user-guide/key-types-and-specifications).

-   KMS provides default keys free of charge. You can use default keys to perform server-side encryption in Alibaba Cloud services such as Elastic Compute Service (ECS). Default keys support only symmetric decryption. Default keys do not support client-side data encryption.
    
-   Software-protected keys support server-side encryption in Alibaba Cloud services, can be used to **build application-layer cryptographic solutions, and provide API operations for client-side data encryption and decryption, and** **signing and verification**. Software-protected keys support symmetric keys, asymmetric keys, and key rotation to reduce the risk of key leaks.
    
-   Hardware-protected keys support server-side encryption in Alibaba Cloud services, can be used to build application-layer cryptographic solutions, and provide API operations for client-side data encryption and decryption, and signing and verification. Hardware-protected keys support symmetric keys and asymmetric keys and provide more key specifications than software-protected keys. You can store hardware-protected keys in hardware security modules (HSMs) to meet the cryptographic requirements and comply with Federal Information Processing Standards (FIPS). Hardware-protected keys do not support key rotation.
    

## **Server-side encryption in Alibaba Cloud services**

Keys can be used for server-side encryption in Alibaba Cloud services such as ECS to solve the security risk of plaintext data transmission on the server side. Key types that support this feature are **software-protected keys, hardware-protected keys, and default keys**.

### **Example**

In this example, the default key of the customer master key (CMK) type is integrated into ECS. For more information about how to integrate Alibaba Cloud services with KMS, see [Integration with KMS](/help/en/kms/key-management-service/user-guide/integration-with-kms#concept-2318878) and [KMS-compatible Alibaba Cloud Services](/help/en/kms/key-management-service/user-guide/alibaba-cloud-services-that-can-be-integrated-with-kms#concept-2318937).

#### **Step 1: Enable the default key of the CMK type**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Keys**.
    
2.  On the Keys page, click **Default Keys**. Find the default key of the CMK type that you want to enable and click **Enable** in the Actions column. Set the key name to alias/main.
    

**Note**

You can use the default key of the CMK type only for server-side encryption in Alibaba Cloud services, but not for client-side data encryption. If you want to implement client-side data encryption, create an instance and then create a software-protected key or a hardware-protected key.

#### **Step 2: Integrate the default key of KMS into ECS**

When you purchase an ECS instance on the buy page, select the default key named alias/main to enable server-side encryption.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2215490371/p840012.png)

#### **Step 3: Use KMS to encrypt data in ECS for ciphertext transmission**

When data is transferred to ECS, ECS calls the API operations of KMS to encrypt and decrypt the data. You do not need to manually process the data. In most cases, Alibaba Cloud services use envelope encryption to encrypt data. For more information, see [Use envelope encryption](/help/en/kms/key-management-service/use-cases/use-envelope-encryption).

## **Application-layer cryptographic solutions**

Keys can be used to build application-layer cryptographic solutions and provide API operations for client-side data encryption and decryption, and signing and verification. Key types that support this feature are **software-protected keys and hardware-protected keys**.

### **Prerequisites**

A KMS instance of the hardware key management type or the software key management type is purchased and enabled. For more information, see [Purchase and enable a KMS instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance#task-2289651).

### **Example**

In this example, a key of a KMS instance of the software key management type is used to encrypt ([Encrypt](/help/en/kms/key-management-service/developer-reference/api-encrypt)) and decrypt ([Decrypt](/help/en/kms/key-management-service/developer-reference/api-decrypt)) application-layer data. For more information, see [Use a key to encrypt and decrypt data](/help/en/kms/key-management-service/use-cases/use-a-kms-cmk-to-encrypt-and-decrypt-data-online).

#### **Step 1: Create a software-protected key**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Keys**.
    
2.  On the ****Customer Master Keys**** tab, click ****Create Key**** and complete the configurations as prompted.
    

-   KMS Instance: Select the purchased **KMS instance**.
    
-   Key Type: Select Symmetric Key.
    
-   Key Specifications: Select Aliyun\_AES\_256.
    

#### **Step 2: Upgrade the image version of the instance**

This example describes cryptographic operations using the dedicated gateway to call the OpenAPI. The image version must be 3.0.0 or higher.

**Note**

If your instance is already running image version 3.0.0 or higher, skip this step.

To check the image version, go to the instance details page. If the image version is lower than 3.0.0, click **Upgrade** to [upgrade the image version of a KMS instance](/help/en/kms/key-management-service/user-guide/upgrade-the-image-version-of-a-kms-instance).

#### **Step 3: Install dependencies**

1.  Make preparations.
    
    **Environment requirements**
    
    Java Development Kit (JDK) 8 or later is downloaded and installed.
    
    **Java version**
    
    Run the `java -version` command on the terminal to check the JDK version.
    
2.  Install Alibaba Cloud SDK.
    
    Add the following Maven dependency to your project. Then, a Java package of Alibaba Cloud SDK is automatically downloaded from the Maven repository. Make sure that Alibaba Cloud SDK V2.0 is used.
    
    ```
    <dependency>
      <groupId>com.aliyun</groupId>
      <artifactId>kms20160120</artifactId>
      <version>1.2.3</version>
    </dependency>
    <dependency>
        <groupId>com.aliyun</groupId>
        <artifactId>tea</artifactId>
        <version>1.3.2</version>
    </dependency>
    <dependency>
        <groupId>com.aliyun</groupId>
        <artifactId>tea-openapi</artifactId>
        <version>0.3.6</version>
    </dependency>
    ```
    

#### **Step 4: Create a credential**

Alibaba Cloud SDK supports multiple Resource Access Management (RAM)-based authentication methods. In this example, AccessKey pairs of RAM users are used. For more information about authentication methods, see [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials).

1.  Create an AccessKey pair for a RAM user in the [RAM console](https://signin.alibabacloud.com/5312032800542991.onaliyun.com/login.htm?callback=https%3A%2F%2Fram.console.alibabacloud.com%2F&accounttraceid=240e0cb0c36f45b7b4a500decf4a252dyylg&cspNonce=WysQ036NYa&oauth_callback=https%3A%2F%2Fram.console.alibabacloud.com%2F&spma=a2c45&spmb=11132017#/main). For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
    
    If an AccessKey pair is already created for the RAM user, skip this step.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3183152371/p801246.png)
    
2.  Grant the required permissions to the RAM user.
    
    For example, if the RAM user requires the permissions to perform cryptographic operations, you can attach the system policy AliyunKMSCryptoUserAccess to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6555724171/p794639.png)
    
    **Note**
    
    KMS provides the following permission configuration methods:
    
    -   Identity-based policies: The policy in the preceding example is an identity-based policy. Identity-based policies associate identities with corresponding permissions to implement access control. For more information, see [Use RAM to implement access control](/help/en/kms/key-management-service/security-and-compliance/identity-management-and-access-control/).
        
    -   Resource-based policies: Resource-based policies include key and secret policies. Such policies are directly associated with resources and are used to define access rules for specific resources. For more information, see [Key policies](/help/en/kms/key-management-service/security-and-compliance/key-policies/) and [Secret policies](/help/en/kms/key-management-service/security-and-compliance/secret-policies/).
        
    

#### **Step 5:** Retrieve **the instance certificate authority (CA) certificate**

On the KMS instance details page, click **Download** next to **Instance CA Certificate** to retrieve the instance CA certificate.

#### Step 6: Retrieve the instance Virtual Private Cloud (VPC) endpoint

On the KMS instance details page, copy the value of the **Instance VPC Endpoint** parameter for use when initializing the client.

![KMS](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9771398471/p963318.png)

#### **Step 7: Call API operations**

1.  Initialize Alibaba Cloud SDK.
    
    **Important**
    
    Make sure that Alibaba Cloud SDK V2.0 is used. You must set the config.endpoint parameter to the VPC endpoint of the instance and configure the CA certificate of the instance.
    
    ```
        public static com.aliyun.kms20160120.Client createClient() throws Exception {
            // If the project code is leaked, the AccessKey pair may be leaked and the security of all resources within your account may be compromised. The following sample code is for reference only.
            // We recommend that you use Security Token Service (STS) tokens to enhance security. For more information about authentication methods, visit https://www.alibabacloud.com/help/en/sdk/developer-reference/v2-manage-access-credentials?spm=a2c63.p38356.help-menu-262060.d_1_4_1_2.1ad47c23arIlrq.
            com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                    // Required. Make sure that the environment variable ALIBABA_CLOUD_ACCESS_KEY_ID is configured.
                    .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                    // Required. Make sure that the environment variable ALIBABA_CLOUD_ACCESS_KEY_SECRET is configured.
                    .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
            // Enter the VPC endpoint of the instance. Example: kst-hzz65f176a0ogplgq****.cryptoservice.kms.aliyuncs.com.
            config.endpoint = "<INSTANCE_VPC_ENDPOINT>";
            // Enter the content of the CA certificate of the instance.
            config.ca = "<INSTANCE_CA_CERTIFICATE>";
            return new com.aliyun.kms20160120.Client(config);
        }
    ```
    
2.  Call the Encrypt operation to encrypt data.
    
    ```
    package com.aliyun.sample;
    
    import com.aliyun.tea.*;
    
    public class Sample {
      public static com.aliyun.kms20160120.Client createClient() throws Exception {
            // If the project code is leaked, the AccessKey pair may be leaked and the security of all resources within your account may be compromised. The following sample code is for reference only.
            // We recommend that you use STS tokens to enhance security. For more information about authentication methods, visit https://www.alibabacloud.com/help/en/sdk/developer-reference/v2-manage-access-credentials?spm=a2c63.p38356.help-menu-262060.d_1_4_1_2.1ad47c23arIlrq.
            com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                    // Required. Make sure that the environment variable ALIBABA_CLOUD_ACCESS_KEY_ID is configured.
                    .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                    // Required. Make sure that the environment variable ALIBABA_CLOUD_ACCESS_KEY_SECRET is configured.
                    .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
            // Enter the VPC endpoint of the instance. Example: kst-hzz65f176a0ogplgq****.cryptoservice.kms.aliyuncs.com.
            config.endpoint = "<INSTANCE_VPC_ENDPOINT>";
            // Enter the content of the CA certificate of the instance.
            config.ca = "<INSTANCE_CA_CERTIFICATE>";
            return new com.aliyun.kms20160120.Client(config);
        }
       
         public static void main(String[] args_) throws Exception {
            java.util.List<String> args = java.util.Arrays.asList(args_);
            com.aliyun.kms20160120.Client client = Sample.createClient();
            com.aliyun.kms20160120.models.EncryptRequest encryptRequest = new com.aliyun.kms20160120.models.EncryptRequest()
                    .setKeyId("<KEY_ID>")
                    .setPlaintext("<PLAINT_TEXT>");
            com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
            try {
                // Run the sample code to retrieve the return value of the API operation.
                client.encryptWithOptions(encryptRequest, runtime);
            } catch (TeaException error) {
                // Handle exceptions with caution in actual business scenarios and do not ignore the exceptions in your project. In this example, exceptions are provided for reference only.
                // The error message.
                System.out.println(error.getMessage());
                // The URL for troubleshooting.
                System.out.println(error.getData().get("Recommend"));
                com.aliyun.teautil.Common.assertAsString(error.message);
            } catch (Exception _error) {
                TeaException error = new TeaException(_error.getMessage(), _error);
                // Handle exceptions with caution in actual business scenarios and do not ignore the exceptions in your project. In this example, exceptions are provided for reference only.
                // The error message.
                System.out.println(error.getMessage());
                // The URL for troubleshooting.
                System.out.println(error.getData().get("Recommend"));
                com.aliyun.teautil.Common.assertAsString(error.message);
            }        
        }
    }
    ```
    
3.  Call the Decrypt operation to decrypt data.
    
    ```
    package com.aliyun.sample;
    
    import com.aliyun.tea.*;
    
    public class Sample {
    
        public static com.aliyun.kms20160120.Client createClient() throws Exception {
            // If the project code is leaked, the AccessKey pair may be leaked and the security of all resources within your account may be compromised. The following sample code is for reference only.
            // We recommend that you use STS tokens to enhance security. For more information about authentication methods, visit https://www.alibabacloud.com/help/en/sdk/developer-reference/v2-manage-access-credentials?spm=a2c63.p38356.help-menu-262060.d_1_4_1_2.1ad47c23arIlrq.
            com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                    // Required. Make sure that the environment variable ALIBABA_CLOUD_ACCESS_KEY_ID is configured.
                    .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                    // Required. Make sure that the environment variable ALIBABA_CLOUD_ACCESS_KEY_SECRET is configured.
                    .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
            // Enter the VPC endpoint of the instance. Example: kst-hzz65f176a0ogplgq****.cryptoservice.kms.aliyuncs.com.
            config.endpoint = "<VPC endpoint of the instance>";
            // Enter the content of the CA certificate of the instance.
            config.ca = "<CA certificate of the instance>";
            return new com.aliyun.kms20160120.Client(config);
        }
    
        public static void main(String[] args_) throws Exception {
            java.util.List<String> args = java.util.Arrays.asList(args_);
            com.aliyun.kms20160120.Client client = Sample.createClient();
            com.aliyun.kms20160120.models.DecryptRequest decryptRequest = new com.aliyun.kms20160120.models.DecryptRequest()
                    .setCiphertextBlob("<CiphertextBlob>");
            com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
            try {
                // Run the sample code to retrieve the return value of the API operation.
                client.decryptWithOptions(decryptRequest, runtime);
            } catch (TeaException error) {
                // Handle exceptions with caution in actual business scenarios and do not ignore the exceptions in your project. In this example, exceptions are provided for reference only.
                // The error message.
                System.out.println(error.getMessage());
                // The URL for troubleshooting.
                System.out.println(error.getData().get("Recommend"));
                com.aliyun.teautil.Common.assertAsString(error.message);
            } catch (Exception _error) {
                TeaException error = new TeaException(_error.getMessage(), _error);
                // Handle exceptions with caution in actual business scenarios and do not ignore the exceptions in your project. In this example, exceptions are provided for reference only.
                // The error message.
                System.out.println(error.getMessage());
                // The URL for troubleshooting.
                System.out.println(error.getData().get("Recommend"));
                com.aliyun.teautil.Common.assertAsString(error.message);
            }        
        }
    }
    ```
    

## References

-   For more information about scenarios, algorithms, and specifications of keys, see [Understanding KMS keys](/help/en/kms/key-management-service/user-guide/overview-of-key-management).
    
-   For more information about SDK integration, see [Alibaba Cloud SDK (Java)](/help/en/kms/key-management-service/developer-reference/classic-kms-sdk-for-java/).
    
-   If you want to encrypt and decrypt a small amount of data, you can use a key to encrypt and decrypt the data. For more information, see [Use a key to encrypt and decrypt data](/help/en/kms/key-management-service/use-cases/use-a-kms-cmk-to-encrypt-and-decrypt-data-online).
    
-   If you want to encrypt and decrypt a large amount of data, you can use envelope encryption. For more information, see [Use envelope encryption](/help/en/kms/key-management-service/use-cases/use-envelope-encryption).
