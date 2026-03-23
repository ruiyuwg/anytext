After a private certificate is issued from a private intermediate certificate authority (CA), you can download the private certificate and deliver the private certificate to a specified user for installation and use.

## **Prerequisites**

A private certificate is issued from a private intermediate CA. For more information, see [Apply for a private certificate](/help/en/ssl-certificate/apply-for-a-private-certificate).

## **Procedure**

1.  Log in to the [Certificate Management Service console](https://yundunnext.console.alibabacloud.com/?p=cas).
    
2.  In the navigation pane on the left, choose **Certificate Management** > **Private Certificate Management**. On the **Private Certificate Management** page, select the region where the PCA service is located.
    
3.  On the **Private CAs** tab, find the private intermediate CA from which the required private certificate is issued and click **Certificates** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9135738271/p843844.png)
    
4.  On the **Certificates** page, find the private certificate that you want to download and click **Download** in the **Actions** column.
    
5.  In the **Download Certificate** dialog box, configure the Certificate Format parameter and click **Confirm and Download**. If you turn on **Include Trust Chain**, the certificate that is downloaded includes the complete certificate chain. The following table describes certificate formats.
    
    **Certificate format**
    
    **Description**
    
    **PEM**
    
    PEM is a Base64-encoded format. In most cases, PEM certificates are used by applications or web servers such as Apache and NGINX servers.
    
    After you download a certificate package, you can extract the following files from the certificate package:
    
    -   A certificate file that is suffixed with `.pem`. The file contains a public key.
        
    -   A private key file that is suffixed with `.key`.
        
    
    **PFX**
    
    PFX is a binary format, which is also known as PKCS#12. A PFX certificate contains a public key and a private key. In most cases, PFX certificates are used by servers that run Windows operating systems, such as IIS and Exchange servers.
    
    After you download a certificate package, you can extract the following files from the certificate package:
    
    -   A certificate file that is suffixed with `.pfx`. The file contains a public key and a private key.
        
    -   A password file that is suffixed with `.txt`. The file is used to ensure the security of the private key.
        
    
    **JKS**
    
    JKS is a keystore format that is dedicated to Java. In most cases, JKS certificates are used by Java-based applications and services, such as Tomcat and Jetty servers.
    
    After you download a certificate package, you can extract the following files from the certificate package:
    
    -   A certificate file that is suffixed with `.jks`. The file contains a public key and a private key.
        
    -   A password file that is suffixed with `.txt`. The file is used to ensure the security of the private key.
        
    
    **PKCS8**
    
    PKCS#8 is a standard file format for storing private keys. In most cases, PKCS#8 certificates are used by Apache servers.
    
    After you download a certificate package, you can extract the following files from the certificate package:
    
    -   A certificate file that is suffixed with `.pem`. The file contains a public key.
        
    -   A private key file that is suffixed with `.key`.
        
    
    **CRT**
    
    CRT is a binary format. A CRT certificate contains a certificate file and the related metadata, including the issuer information, validity period, and subject. In most cases, CRT certificates are used to verify the identities of entities such as servers and clients. The certificate file does not contain a private key.
    
    After you download a certificate package, you can extract the following files from the certificate package:
    
    -   A certificate file that is suffixed with `.crt`. The file contains a public key. In most cases, a certificate file is named in the `xxx_public.crt` format.
        
    -   A certificate chain file that is suffixed with `.crt`. If you select **Include Trust Chain** when you download a certificate, you can obtain a certificate chain file. In most cases, a certificate chain file is named in the `xxx_chain.crt` format.
        
    -   A private key file that is suffixed with `.key`.
