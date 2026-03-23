This topic describes potential issues when an application accesses Key Management Service (KMS) using a software development kit (SDK).

## Questions

-   [The "no such host" or "not known" error occurs when accessing a KMS instance](#2661deb059a8d)
    
-   [The "Forbidden.NoPermission" error occurs when accessing a KMS instance using an application access point](#fdceec4077pzi)
    
-   [The "This operation for key-xxxxxx is forbidden by permission system" error occurs when retrieving a secret value](#42a1029059wk4)
    
-   [The "Forbidden.KeyNotFound" error occurs when accessing or using a key](#section-xer-uhz-dmp)
    
-   [The "UnsupportedOperation" error occurs when calling a KMS API operation](#3a05f43058h2j)
    
-   [The "unable to find valid certification path to requested target" error occurs when accessing a KMS instance](#44b872e0585mr)
    
-   [The domain name of a KMS instance cannot be resolved](#d104bf8e99iq2)
    
-   [The "incorrect ClientKey password" message is returned when an application accesses a KMS instance](#a27c23879fb9z)
    
-   [An HTTP 413 status code is returned when an application accesses a KMS instance](#84e179ff0cxkx)
    
-   [Is the secret management feature of KMS supported on Android?](#section-aed-zlw-91b)
    
-   [The endpoint of KMS is inaccessible](#5c8e202059c3v)
    
-   [An on-premises data center cannot access a KMS instance by domain name](#1db7814255hmg)
    
-   [The "QPS Limit Exceeded" error occurs when synchronizing KMS secrets from ACK using ack-secret-manager](#c50b30e8eftzy)
    
-   [The "MissingParameter" error occurs when calling an OpenAPI operation for cryptographic operations through a dedicated gateway](#61705cc6e6iip)
    
-   [Certificate validation issues occur when a third-party ISV accesses KMS through a dedicated gateway](#f9bfd09ae3yfp)
    

## The "no such host" or "not known" error occurs when accessing a KMS instance

**Problem description**

-   When an application accesses a KMS instance using the KMS Instance SDK for Go, the following error is returned: `kst-xxx.cryptoservice.kms.aliyuncs.com: no such host`.
    
-   When an application accesses a KMS instance using the KMS Instance SDK for Java, the following error is returned: `kst-xxx.cryptoservice.kms.aliyuncs.com: nodename nor servname provided, or not known`.
    

**Cause**

After you purchase a KMS instance, it provides exclusive key and secret management services. It can be accessed only from a virtual private cloud (VPC) that you have configured and associated with the instance.

**Solution**

-   If the application's VPC and the KMS instance are in the same region, associate the VPC with the KMS instance. For more information, see [Access a KMS instance from multiple VPCs in the same region](/help/en/kms/key-management-service/user-guide/access-a-kms-instance-from-multiple-vpcs-in-the-same-region).
    
    To see which VPCs are associated with a KMS instance, see [View KMS instance details](/help/en/kms/key-management-service/user-guide/manage-kms-instances#section-tkz-mom-opl).
    
-   If the application's VPC and the KMS instance are in different regions, establish a network connection between the application's VPC and the KMS instance's VPC.
    

## The "Forbidden.NoPermission" error occurs when accessing a KMS instance using an application access point

**Problem description**

When you access a KMS instance, the returned error description or SDK exception message contains: `Forbidden.NoPermission : This operation is forbidden by permission system.`

**Solution**

The permission policy for the application access point (AAP) does not grant permissions for the required key or secret in **RBAC Permissions** and **Accessible Resources**. For more information, see [Create an application access point](/help/en/kms/key-management-service/user-guide/create-an-aap).

## The "This operation for key-xxxxxx is forbidden by permission system" error occurs when retrieving a secret value

**Problem description**

When you retrieve a secret value, the error description or SDK exception message returned by KMS contains: `This operation for key-xxxxxx is forbidden by permission system`.

The following is an example of an exception message from the Java SDK for a KMS instance:

![获取凭据值时报错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4711868071/p569590.png)

**Cause**

The application lacks the permission to use the key for decryption.

When you create a secret, you must select a key from the same KMS instance to encrypt the secret value. When an application requests a secret from KMS, it must use the corresponding key to decrypt the secret value. Therefore, the application must have permission to use the secret and permission to use the corresponding key for decryption.

**Solution**

-   **Scenario 1: Access KMS using a client key of an AAP**
    
    Edit the permission policy of the AAP to grant the application permission to use the key for decryption.
    
    1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Application Access** > **AAPs**.
        
    2.  Click the name of the target AAP to go to the **Details** page.
        
    3.  In the **Actions** column of the permission policy, click **Modify**. Configure the following items and click **Update**.
        
        -   **RBAC Permissions**: Select CryptoServiceKeyUser.
            
        -   **Accessible Resources**: In the **Available Resources** section, select one or more keys and click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6283372471/p711677.png) icon. You can also click the ![plus sign](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3021868071/p569711.png) icon next to **Selected Resources** to add a key in the key/key id format (for example, key/key-hzz6xxxxxx).
            
-   **Scenario 2: Access KMS using the AccessKey pair of a RAM user or a RAM role**
    
    Edit the RAM permission policy to grant the application permission to use the key for decryption.
    
    1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
        
    2.  In the navigation pane on the left, choose **Permission Management** \> **Policies**.
        
    3.  Find the permission policy that is attached to your RAM user or RAM role and click the policy name.
        
    4.  On the **Policy Document** tab, click **Modify Policy Document**. Add the following script to the `Statement` field, click **Continue to Edit Basic Information**, and then click **OK**.
        
        ```
                {
                    "Effect": "Allow",
                    "Action": "kms:Decrypt",
                    "Resource": "acs:kms:${region}:${account}:key/keyId-example"
                }
        ```
        
        For more information about permission policies, see [Custom permission policies for Key Management Service](/help/en/kms/key-management-service/security-and-compliance/use-ram-to-manage-access-to-kms-resources/).
        

## The "Forbidden.KeyNotFound" error occurs when accessing or using a key

Cause: This error usually occurs because the region, key ID, or alias specified in the request does not match the parameters used for encryption.

Solution: Make sure that the region, key ID, or alias used for the decryption operation is identical to the one used for encryption.

## The "UnsupportedOperation" error occurs when calling a KMS API operation

-   **Network access configuration error**
    
    -   Cause: The application uses an Alibaba Cloud SDK to perform cryptographic operations with a key created in a KMS instance.
        
    -   Solution:
        
        1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Instances**.
            
        2.  In the instance list page, click the target instance ID, and then enable Internet access on the **Share Resources** tab of the details page.
            
            When a KMS instance is shared with multiple Alibaba Cloud accounts, you can configure Internet access permissions for each account.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8734068471/p951899.png)
            
        3.  Switch to the **Instance** tab, and view the public endpoint.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8541395671/p951902.png)
            
-   **Incorrect key type usage**
    
    -   Cause: The application uses a service key when it calls cryptographic operation APIs, such as [Encrypt](/help/en/kms/key-management-service/support/encrypt#doc-api-Kms-Encrypt), [Decrypt](/help/en/kms/key-management-service/support/decrypt#doc-api-Kms-Decrypt), or [GenerateDataKey](/help/en/kms/key-management-service/support/generatedatakey#doc-api-Kms-GenerateDataKey), using an SDK.
        
    -   Solution: The application must use a customer master key (CMK) directly for cryptographic operations, not a service key managed by another cloud product.
        
-   **Mismatch between key algorithm and API**
    
    -   **Scenario 1: Encryption, decryption, and data key generation**
        
        -   When you call the [GenerateDataKey](/help/en/kms/key-management-service/support/generatedatakey#doc-api-Kms-GenerateDataKey) API, the key algorithm of the CMK is an asymmetric algorithm, such as RSA, ECC, .
            
        -   Solution: Make sure the key algorithm of the CMK is a symmetric algorithm, such as AES , and its key usage is set to **ENCRYPT/DECRYPT**.
            
    -   **Scenario 2: Signing and verification**
        
        -   When you call the [Sign](/help/en/kms/key-management-service/support/sign#doc-api-Kms-Sign) or [Verify](/help/en/kms/key-management-service/support/verify#doc-api-Kms-Verify) API, the key algorithm of the CMK is a symmetric cryptographic algorithm, such as AES .
            
        -   Solution: Make sure the key algorithm of the CMK is an asymmetric algorithm, such as RSA, ECC, , and its key usage is set to **SIGN/VERIFY**.
            

## The "unable to find valid certification path to requested target" error occurs when accessing a KMS instance

**Possible cause 1: An incorrect KMS instance was selected when downloading the CA certificate**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Instances**.
    
2.  On the **Instances** page, click **Download** under **Instance CA Certificate**.
    
3.  In the **Instance CA Certificate** dialog box, select an instance ID, click **Download**, and save the certificate securely.
    
    By default, the downloaded CA certificate file is named PrivateKmsCA\_kst-\*\*\*\*\*\*.pem. This certificate is later integrated into the SDK to verify the authenticity of the KMS instance's SSL certificate.
    

**Possible cause 2: The version of the SDK package is incorrect**

Install the latest version of the SDK. The following links are the open source repositories for the KMS Instance SDKs:

-   [KMS Instance SDK for Java](https://github.com/aliyun/alibabacloud-dkms-gcs-java-sdk/releases/latest)
    
    **Note**
    
    The version of tea must be 1.2.3 or later.
    
-   [KMS Instance SDK for PHP](https://github.com/aliyun/alibabacloud-dkms-gcs-php-sdk)
    
-   [KMS Instance SDK for Go](https://github.com/aliyun/alibabacloud-dkms-gcs-go-sdk)
    
-   [KMS Instance SDK for Python 3](https://github.com/aliyun/alibabacloud-dkms-gcs-python-sdk) and [KMS Instance SDK for Python 2](https://github.com/aliyun/alibabacloud-dkms-gcs-python2-sdk)
    
-   [KMS Instance SDK for C#](https://github.com/aliyun/alibabacloud-dkms-gcs-csharp-sdk)
    

## **The domain name of a KMS instance cannot be resolved**

**Problem description**

In the VPC where the KMS instance resides or in an associated VPC, an application cannot access the domain name of the KMS instance. For example, when you run the `ping kst-hzz62****.cryptoservice.kms.aliyuncs.com` command, the domain name cannot be resolved and a message containing "cannot resolve" is returned.

**Solution**

Check whether the DNS configuration of the server is set to the default 100.100.2.136/100.100.2.138. For more information, see [Do I need to modify the DNS configuration of the server to use PrivateZone?](/help/en/privatezone/latest/nameservers).

## **The "incorrect ClientKey password" message is returned when an application accesses a KMS instance**

**Problem description**

-   When you access a KMS instance using the KMS Instance SDK for Java, the following error is returned: `java.io.IOException: keystore password was incorrect`.
    
-   When you access a KMS instance using the KMS Instance SDK for PHP, the following error is returned: `Could not decrypt the privateKey of clientKey, the password is incorrect, or it is not a valid pkcs12`.
    
-   When you access a KMS instance using the KMS Instance SDK for Go, the following error is returned: `panic: pkcs12: decryption password incorrect`.
    
-   When you access a KMS instance using the KMS Instance SDK for Python, the following error is returned: `OpenSSL.crypto.Error: [('PKCS12 routines', '', 'mac verify failure')]`.
    

**Cause**

The ClientKey password is incorrect.

**Solution**

-   Check whether the ClientKey password meets the format requirements. If not, create a new ClientKey. For more information, see [Create a ClientKey](/help/en/kms/key-management-service/user-guide/manage-aaps-1#791d6c0267twd).
    
    The ClientKey password must be 8 to 64 characters in length and contain at least two of the following character types: digits, lowercase letters, uppercase letters, and special characters (~!@#$%^&\*?\_-).
    
-   If you read the ClientKey password from a file, the password file must be a text file that contains only one line of password content. The file content must not include special characters that do not meet the password format requirements, such as line feeds or tab characters.
    

## An HTTP 413 status code is returned when an application accesses a KMS instance

After all request parameters are encoded using Protocol Buffers (that is, the Request Body), the content length cannot exceed 3 MB. If it does, the server-side rejects the request and returns an HTTP 413 status code.

-   Encryption and decryption operations: We recommend that the data for a single encryption or decryption operation does not exceed 6 KB for symmetric keys and 1 KB for asymmetric keys. If the data exceeds these limits, use envelope encryption.
    
-   Signing and verification operations: If the message to be signed is large, we recommend that your application generates a digest of the message locally and then calls the Sign/Verify API to perform the signing or verification.
    

## **The "UnknownHostException" error is returned when an application accesses a KMS instance**

**Problem description**

When an application accesses a KMS instance using the KMS Instance SDK for Java, the following error is returned: `Caused by: java.net.UnknownHostException: kst-hzz664da459rvtjtd****.cryptoservice.kms.aliyuncs.com`.

**Solution**

1.  Confirm that your application environment is connected to the VPC network of the KMS instance.
    
    If the application's VPC and the KMS instance are in the same region, attach the VPC to the KMS instance. For more information, see [Access a KMS instance from multiple VPCs in the same region](/help/en/kms/key-management-service/user-guide/access-a-kms-instance-from-multiple-vpcs-in-the-same-region). For other scenarios, you can refer to the following solutions.
    
    -   **Solutions for cross-VPC interconnection**
        
        You can enable private network peering between VPCs using Cloud Enterprise Network (CEN), VPN Gateway, VPC peering connection, or PrivateLink. For more information about the features, descriptions, and configuration methods of these cross-VPC interconnection solutions, see [VPC interconnection](/help/en/vpc/cross-vpc-interconnection-overview/#concept-ns3-21l-wfb).
        
    -   **How a VPC connects to the public network**
        
        You can enable cloud resources in a VPC to access or be accessed by the public network using a static public IP address for an ECS instance, an Elastic IP Address, a NAT Gateway, or Server Load Balancer. For more information, see [Public network access](/help/en/vpc/public-network-access/#concept-zr3-rr4-4gb).
        
    -   **How a VPC connects to a data center**
        
        You can connect an on-premises data center to a VPC on the cloud using a VPN Gateway, an Express Connect circuit, or Smart Access Gateway to build a hybrid cloud. For more information, see [Connect a VPC to an on-premises data center/other clouds](/help/en/vpc/connect-vpc-to-local-idc-office-terminal-other-cloud#concept-lgm-hhl-wfb).
        
2.  Confirm that the DNS resolution for the KMS VPC is correctly configured. For information about DNS resolution settings, see [Introduction to internal DNS resolution](/help/en/dns/introduction-to-intranet-analysis).
    

## Is the secret management feature of KMS supported on Android?

The secret management feature is not currently supported on Android.

## The endpoint of KMS is inaccessible

This issue usually occurs because the HTTPS protocol is not enabled when you use an SDK to access KMS.

To ensure your data security, the endpoint of KMS supports only the HTTPS protocol. Therefore, when you use an SDK to access the endpoint of KMS, run the following code to make sure that HTTPS is enabled for KMS.

```
req.setProtocol(ProtocolType.HTTPS);
```

## **An on-premises data center cannot access a KMS instance by domain name**

**Problem description**

After a network connection is established between an on-premises data center and an Alibaba Cloud VPC, the on-premises data center cannot access the KMS instance using the domain name kms.aliyuncs.com configured in PrivateZone without any additional configuration.

**Solution**

1.  On the **Express Connect router**, allow the 100.100.2.136 and 100.100.2.138 route segments to ensure that the on-premises data center can ping 100.100.2.136 and 100.100.2.138. For Express Connect router configuration issues, consult your network PDSA or see the following documents: [Cloud-to-on-premises network interconnection](/help/en/cen/getting-started/connect-network-instances-in-the-same-region), [Connect an on-premises data center to a VPC over an Express Connect circuit](/help/en/express-connect/getting-started/connect-a-data-center-to-a-vpc-by-using-an-express-connect-circuit), [Add and manage route entries](/help/en/express-connect/user-guide/add-and-manage-routes), and [Process messages from an on-premises data center using Message Queue for Apache RocketMQ over an Express Connect circuit](/help/en/express-connect/use-cases/use-an-express-connect-circuit-to-connect-a-data-center-to-message-queue-for-apache-rocketmq).
    
    **Important**
    
    If your data center is not connected to an Alibaba Cloud enterprise network or Express Connect circuit, consult your provider for router configuration.
    
2.  Modify the local primary DNS configuration file named.conf to forward queries for the KMS domain name (kms.aliyuncs.com) to Alibaba Cloud DNS. You can refer to the following configuration:
    
    ```
    zone "kms.aliyuncs.com" { 
            type forward; 
            forwarders { 100.100.2.136;100.100.2.138;}; 
    };
    ```
    
    **Note**
    
    The configuration for route forwarding may vary slightly depending on the DNS software. Complete the configuration based on the software's user guide.
    

## The "QPS Limit Exceeded" error occurs when synchronizing KMS secrets from ACK using ack-secret-manager

**Cause**

When many KMS secrets are synchronized, the throttling policy of KMS is triggered, causing the synchronization to fail.

**Solution**

This issue is fixed in version 0.5.2 of `ack-secret-manager`. Upgrade to version 0.5.2 or later. We recommend that you upgrade to the latest version.

## **The "MissingParameter" error occurs when calling an OpenAPI operation for cryptographic operations through a dedicated gateway**

**Problem description**

When you use an Alibaba Cloud SDK to call an OpenAPI operation for cryptographic operations through a dedicated gateway, the `MissingParamter AParamter x-kms-acccesskeyid does not exist in http header or body "$430c76cd-******` error is returned.

**Cause**

The image version of the KMS instance is earlier than 3.0.0. To call OpenAPI operations for cryptographic operations through a dedicated gateway, the image version of the KMS instance must be 3.0.0 or later.

**Solution**

On the **Instances** page, view the image version in the instance details. Click **Upgrade** to upgrade the image version of the KMS instance. For more information, see [Upgrade the image version of a KMS instance](/help/en/kms/key-management-service/user-guide/upgrade-the-image-version-of-a-kms-instance).

## **Certificate validation issues occur when a third-party ISV accesses KMS through a dedicated gateway**

To resolve certificate validation issues caused by self-signed certificates, enable public network access for your KMS instance. This allows the third-party ISV to access KMS through the shared gateway, which obtains a signing certificate from a trusted certification authority.

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Instances**.
    
2.  In the instance list page, click the target instance ID, and then enable Internet access on the **Share Resources** tab of the details page.
    
    When a KMS instance is shared with multiple Alibaba Cloud accounts, you can configure Internet access permissions for each account.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8734068471/p951899.png)
    
3.  Switch to the **Instance** tab, and view the public endpoint.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8541395671/p951902.png)
