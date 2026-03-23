Private Certificate Authority (PCA) allows you to build a private certificate authority (CA) platform for your enterprise after simple operations. You can then issue and use private certificates to authenticate applications and encrypt and decrypt the data of your enterprise. This topic describes how to apply for a free trial of PCA.

## Intended users

-   You need to build a private CA platform within your enterprise for internal use.
    
-   Your Alibaba Cloud account has not been used to purchase a private CA.
    

## Precautions

-   Each Alibaba Cloud account can apply for a free trial of PCA only once. The free trial period is **30 days** and starts from the day when the free trial application is approved.
    
-   After you apply for a free trial of PCA, you can use private CAs instead of compliant CAs. Private CAs are only for internal use, and no regulatory requirements are imposed. Compliant CAs are used to ensure compliance, and regulatory requirements are imposed.
    

## Procedure

1.  Log on to the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas).
    
2.  In the left-side navigation pane, choose **Certificate Management** > **Private Certificate Management**. On the **Private Certificate Management** page, select the region where your PCA resides.
    
3.  On the **Private CAs** tab, click **Start Free Trial**.
    
4.  In the **Free Trial** panel, select the encryption algorithm that you want to use and click **OK**.
    
    **Algorithm**
    
    **Description**
    
    **RSA** (default)
    
    The RSA algorithm is an asymmetric algorithm that is widely used in the world and provides high compatibility.
    
    **ECC**
    
    The Elliptic Curve Cryptography (ECC) algorithm is an encryption algorithm based on elliptic curves. Compared with the RSA algorithm, the ECC algorithm is more advanced and secure. The ECC algorithm provides faster encryption and higher efficiency at lower server resource consumption. The ECC algorithm is promoted among mainstream browsers.
    
    **SM2**
    
    The SM2 algorithm is developed and approved by the State Cryptography Administration of China based on the ECC algorithm. The SM2 algorithm is used to replace the RSA algorithm in Chinese commercial cryptography systems.
    
5.  In the **Note** message, click **OK**.
    

After you apply for a free trial of PCA, Certificate Management Service automatically creates a private root CA and a private intermediate CA. The private root CA provides a quota of 10 private certificates.

You can use the private root CA and the private intermediate CA to build a private CA platform within your enterprise. For more information, see [Purchase and enable a private CA](/help/en/ssl-certificate/purchase-and-enable-a-private-ca#task-2060468).

## What do I do after the free trial period ends?

The private root CA and private intermediate CA that are created for the free trial are valid for 30 days. After 30 days:

-   You can no longer use the private root CA or the private intermediate CA.
    
-   All private certificates that are issued by the private intermediate CA become invalid.
    

If you want to continue using PCA, you must renew the private root CA. For more information, see [PCA billing](/help/en/ssl-certificate/product-overview/pca-biling).
