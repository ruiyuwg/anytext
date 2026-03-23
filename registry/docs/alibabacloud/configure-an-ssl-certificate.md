Dynamic Content Delivery Network (DCDN) supports HTTPS secure acceleration. You can deploy an SSL certificate in the DCDN console and enable HTTPS secure acceleration to encrypt requests between clients and points of presence (POPs).

## **Prerequisites**

An SSL certificate is prepared for the accelerated domain name.

**Note**

-   If you want to purchase an SSL certificate, log on to the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas) to purchase one.
    
-   Certificates that are issued by third-party CAs must meet the certificate format requirements. For more information, see [Certificate formats](/help/en/edge-security-acceleration/dcdn/user-guide/certificate-formats).
    
-   If a client does not transfer the Server Name Indication (SNI) information when it initiates an SSL handshake with a DCDN POP, the DCDN POP cannot guarantee a successful handshake.
    

## Usage notes

-   Only certificates in the PEM format are supported. You can convert certificates in other formats to the PEM format. For more information, see [Convert certificate formats](/help/en/cdn/user-guide/certificate-formats#section-cn2-rql-xdb).
    
-   When you upload a certificate that is issued by a third-party CA, use a private key that does not have password protection.
    
-   You can deploy an SSL certificate that is purchased from [Certificate Management Service](https://yundun.console.alibabacloud.com/?p=cas#/certExtend/buy) for multiple domain names in the DCDN console. For more information, see [Configure an SSL certificate for multiple domain names](/help/en/cdn/user-guide/configure-an-ssl-certificate-for-multiple-domain-names).
    
-   You can view SSL certificates. You cannot view private keys because the keys are considered sensitive information. Keep certificate-related information confidential.
    
-   If you do not want to expose your private key to environments other than DCDN, you can use the Certificate Signing Request (CSR) tool that is provided by Alibaba Cloud Certificate Management Service to generate a CSR and a private key based on algorithms such as Rivest-Shamir-Adleman (RSA), ShangMi2 (SM2), and Elliptic-curve cryptography (ECC). You can also upload an existing CSR. For more information, see [Manage CSRs](/help/en/ssl-certificate/manage-csrs#task-2116387).
    
-   If you want to enable end-to-end data transfer over HTTPS, you need to configure origin fetch over HTTPS. Make sure that the origin servers support HTTPS.
    
-   If a client does not transfer the Server Name Indication (SNI) information when it initiates an SSL handshake with a DCDN POP, the DCDN POP cannot guarantee a successful handshake.
    

## Configure or renew the SSL certificate

HTTPS secure acceleration is a value-added service. After you enable HTTPS, you are charged based on the number of HTTPS requests. Such fees cannot be offset by DCDN data transfer plans. For more information, see [Billing of HTTPS and HTTP requests](/help/en/edge-security-acceleration/dcdn/product-overview/billing-of-https-and-http-requests#concept-2071526).

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Configure**.
    
4.  In the left-side navigation tree of the domain name, click **HTTPS Settings**.
    
5.  In the **SSL Certificate** section, click **Modify**.
    
6.  In the **HTTPS Settings** dialog box, turn on **SSL Acceleration** and configure the certificate parameters. ![HTTPS证书](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4047890761/p302049.png)
    
    -   If you have purchased a certificate from Alibaba Cloud Certificate Management Service, set the Certificate Source parameter to **SSL Certificates Service** and select the purchased certificate from the **Certificate Name** drop-down list.
        
        **Note**
        
        If the certificate that you purchased is unavailable, check whether the domain name that is associated with the purchased certificate is your website domain name.
        
    -   If you use a certificate that is issued by a third-party CA, set the Certificate Source parameter to **Custom Certificate (Certificate + Private Key)**. After you configure the **Certificate Name** parameter, configure the **Certificate (Public Key)** and **Private Key** parameters. Then the certificate is saved in Alibaba Cloud Certificate Management Service. You can view the certificate on the [SSL Certificate Management](https://yundun.console.aliyun.com/?spm=5176.2020520110.all.12.16df56a1u1IhI6&p=cas#/cas/home) page.
        
        **Parameter**
        
        **Description**
        
        **Certificate Name**
        
        Enter a name for the certificate that you want to upload.
        
        The name can contain letters, digits, periods (.), underscores (\_), and hyphens (-).
        
        **Note**
        
        -   A certificate name must be unique. You can view existing certificates on the [SSL Certificate Management](https://yundun.console.aliyun.com/?spm=5176.2020520110.all.12.16df56a1u1IhI6&p=cas#/cas/home) page.
            
        -   If the system prompts that the certificate already exists, change the certificate name and re-upload the certificate.
            
        
        **Certificate (Public Key)**
        
        Enter the content of the PEM-encoded certificate file.
        
        You can use a text editor to open the certificate file in the PEM format. Then, copy the content to the Certificate (Public Key) field.
        
        For more information, click **Pem Code Example** below the Certificate (Public Key) field.
        
        **Private Key**
        
        Enter the content of the PEM-encoded private key file of the certificate that you want to upload.
        
        You can use a text editor to open the private key file in the KEY format. Then, copy the content to the Private Key field.
        
        For more information, click **Pem Code Example** below the Private Key field.
        
        **Note**
        
        If you obtain a private key that starts with "----- BEGIN PRIVATE KEY -----" and ends with "----- END PRIVATE KEY -----", use an OpenSSL tool to run the following command to convert the private key. Then, copy the content of the `new_server_key.pem` file to the Private Key field.
        
        ```
        openssl rsa -in old_server_key.pem -out new_server_key.pem
        ```
        
7.  Click **OK**.
    

## Check whether HTTPS secure acceleration takes effect

After you upload an SSL certificate, the certificate takes effect within 1 minute. To check whether the SSL certificate takes effect, you can send HTTPS requests to access resources. If the URL is displayed with a lock icon in the address bar of the browser, HTTPS secure acceleration is working as expected.![验证结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3633816371/p3701.png)

After you configure an SSL certificate, take note of the expiration time of the certificate. You need to configure a new certificate before the certificate expires.

## Disable HTTPS secure acceleration

If you no longer require HTTPS secure acceleration, you can disable the feature in the DCDN console. Disabling HTTPS secure acceleration immediately takes effect. After you disable HTTPS secure acceleration, you can no longer access resources over HTTPS, and the SSL certificate and the private key are no longer retained.

If you want to re-enable HTTPS secure acceleration, select another SSL certificate.
