Edge Security Acceleration (ESA) supports HTTPS secure acceleration. You can deploy SSL/TLS certificates to the ESA platform and enable the SSL/TLS feature to encrypt traffic between clients and ESA points of presence (POPs).

## **Configure certificates**

### **Certificate types**

ESA provides flexible configuration options, supporting both free and custom certificates. Free certificates are automatically issued and renewed by the system from trusted certification authorities (CAs), such as Let's Encrypt. They are ideal for quickly enabling HTTPS encryption. Custom certificates allow you to upload your own enterprise certificates, such as those issued by GlobalSign, to meet brand-specific SSL display and compliance requirements. You must manually manage the updates for custom certificates.

-   If you have a small or medium-sized enterprise (SME) site or a personal blog that uses a single, exact-match domain name, we recommend that you [apply for a free certificate](#7bea03f169iye).
    
-   If you want to use a certificate from a more trusted certification authority or you already have a domain name certificate, we recommend that you [upload a custom certificate](#2df375052bqtp).
    

**Certificate Type**

**Let's Encrypt Free Certificate**

**Digicert Free Certificate**

**Custom Certificate**

Renewal method

Automatic

Automatic

Manual

Certificate type

DV

DV

DV, OV, EV

Certificate algorithm

RSA

RSA

RSA, ECC

Domain type

Exact-match domain name, wildcard domain name

Single exact-match domain name

Single exact-match domain name, wildcard domain name

**Note**

For the same site, you can configure both free and custom certificates simultaneously. All configured certificates form a certificate pool. When a POP receives a client request, it automatically selects the optimal certificate from the pool and returns it to the client.

### **Apply for a free certificate**

The free certificate feature provides a convenient way to issue and manage certificates. You can enter your domain name to automatically complete the certificate application, domain control validation, renewal, and deployment for HTTPS encryption.

**Note**

-   Free certificates cannot be downloaded.
    
-   During the certificate application process, ESA automatically performs domain control validation. You do not need to manually confirm it. For more information, see [Automatic Domain Control Validation for Free Certificates](#863c437171162).
    
-   ESA automatically renews the free certificate 30 days before it expires. If the renewal is unsuccessful, you will be notified by text message and email. In this case, you must [manually upload a custom certificate](#2df375052bqtp) to avoid service interruption.
    

1.  In the ESA console, select [Websites](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **SSL/TLS** > **Edge Certificates**.
    
3.  In the **Certificate Management** area, click **Apply for Free Certificate**. Select the **Certificate Authority** and enter the **Domain Name**.
    
    -   **Let's Encrypt (No SLA)**: Each free certificate can include up to 50 domain names. You can enter single domain names and wildcard domain names. Wildcard domain names must start with `*`. The domain names must match the site. A certificate for `example.com` **covers only this domain** and does not include subdomains, such as `www.example.com`. To cover subdomains, such as `www.example.com`, you must **apply separately** for a wildcard domain name certificate (`*.example.com`) or add the subdomain as a separate entry.
        
    -   **DigiCert**: For a Digicert single-domain certificate, select only one site domain name. After you apply for a certificate for `example.com`, the issued certificate will include both `example.com` and `www.example.com`.
        
4.  Click **OK** and wait for the free certificate to be issued. After the certificate is issued successfully, the **Status** column displays **Normal**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8060343271/p821859.png)
    

### **Upload a custom certificate**

After you obtain a certificate from Alibaba Cloud Certificate Management Service or a third-party service provider, you can deploy the certificate to ESA.

**Note**

-   To purchase a certificate, you can purchase an advanced certificate in the [SSL Certificate console](https://yundun.console.alibabacloud.com/?p=cas).
    
-   If your certificate is issued by a third-party service provider, it must meet the certificate format requirements. For more information, see [Certificate Format Requirements](/help/en/edge-security-acceleration/esa/user-guide/certificate-format-description).
    
-   You can view the certificate, but the private key is sensitive information and cannot be viewed. Keep your certificate information secure.
    

1.  In the ESA console, select [Websites](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **SSL/TLS** > **Edge Certificates**.
    
3.  In the **Certificate Management** area, click **Upload Custom Certificate**.
    
    -   If you purchased a certificate from Alibaba Cloud Certificate Management Service, set **Certificate Source** to **Certificate Purchased by Using Certificate Management Service** and select the certificate from the **Certificate Name** drop-down list.
        
        **Note**
        
        If you cannot select the certificate that you purchased, check whether the domain name bound to the certificate is the same as the accelerated domain name.
        
    -   If you use a certificate issued by a third-party service provider, set **Certificate Source** to **Custom Certificate**. Then, specify the **Certificate Name** and upload the **Certificate (Public Key)** and **Private Key**. This certificate will be saved in Alibaba Cloud Certificate Management Service. You can view it in [SSL Certificate Management](https://yundun.console.aliyun.com/?spm=5176.2020520110.all.12.16df56a1u1IhI6&p=cas#/cas/home).
        
        **Parameter**
        
        **Description**
        
        **Certificate Name**
        
        Set a name for the certificate to upload.
        
        Supports English letters, periods, numbers, underscores (`_`), and hyphens (`-`).
        
        **Note**
        
        -   The certificate name cannot be the same as an existing certificate name. View existing certificates in [SSL Certificate Management](https://yundun.console.aliyun.com/?spm=5176.2020520110.all.12.16df56a1u1IhI6&p=cas#/cas/home).
            
        -   If the system prompts that the certificate is duplicated, modify the certificate name and upload it again.
            
        
        **Certificate (Public Key)**
        
        Enter the PEM-encoded content of the certificate file.
        
        Use a text editor to open the PEM-formatted certificate file, then copy the content and paste it into the text box.
        
        **Private Key**
        
        Enter the PEM-encoded content of the certificate private key file.
        
        Use a text editor to open the PEM-formatted certificate private key file, then copy the content and paste it into the text box.
        
4.  Click **OK** to complete the certificate upload.
    

## Enable SSL/TLS

After you deploy the SSL/TLS certificate, you must enable the SSL/TLS feature. This allows clients to use the HTTPS protocol to establish encrypted communication with edge POPs. The system automatically blocks HTTP plaintext requests and redirects them to HTTPS. This ensures end-to-end encrypted and tamper-proof data transmission, which helps you meet security compliance requirements and enhances the credibility of your site.

1.  In the ESA console, select [Websites](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **SSL/TLS** > **Edge Certificates**.
    
3.  Turn on the **SSL/TLS** switch.
    
    **Note**
    
    This configuration applies to all domain names on the site. If you want to enable the SSL/TLS encryption feature for only a specific domain name, you can add a rule for that domain name. For more information, see [SSL/TLS Rules](/help/en/edge-security-acceleration/esa/user-guide/ssl-tls-rules).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1189082671/p973170.png)
    

## **Verify HTTPS configuration**

After you configure the certificate and enable SSL/TLS, you can use a browser to access your resources over HTTPS. If a lock icon appears next to the URL in the browser, it indicates that HTTPS secure acceleration is active.

![p3701](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5963564471/p867442.png)

## **Update custom certificates**

ESA does not automatically renew custom certificates. To prevent an HTTPS service interruption due to certificate expiration, you must log on to the console to update or reconfigure your certificates before they expire. You will receive a reminder by email 30 days before a certificate expires. Make sure that you allow sufficient time to complete the update to ensure business continuity.

### **Update existing certificates**

1.  In the ESA console, select [Websites](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **SSL/TLS** > **Edge Certificates**.
    
3.  In the **Certificate Management** area, select the certificate that you want to update and click **Modify** in the Actions column.
    
4.  Modify the certificate content as needed, and then click **OK**.
    

### **Configure new certificates**

1.  In the ESA console, select [Websites](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **SSL/TLS** > **Edge Certificates**.
    
3.  In the **Certificate Management** section, click **Upload Custom Certificate**. [Fill in the required information](#c9bf5bef82dk6) based on the **Certificate Source** and then click **OK**.
    
4.  After the new certificate is uploaded, click **Delete** in the Actions column of the expiring certificate and delete the certificate as prompted.
    

## **Mapping between site-level and rule-based features**

Configurations that are added as site global features apply to all requests for the site. If you want to enable a feature for only specific requests, you can use rule features. Rule conditions identify specific parameters in user requests. This allows for more precise control over which requests a rule configuration applies to.

**Site-level feature**

**Corresponding rule-based feature**

Enable SSL/TLS

[SSL/TLS encryption](/help/en/edge-security-acceleration/esa/user-guide/ssl-tls-rules)

Force HTTPS

[Enforce HTTPS](/help/en/edge-security-acceleration/esa/user-guide/https-application-configuration)

TLS Cipher Suites and Protocol Version Configuration

[TLS cipher suites and protocol versions configuration](/help/en/edge-security-acceleration/esa/user-guide/ssl-tls-rules)

OCSP Stapling

[OCSP Stapling](/help/en/edge-security-acceleration/esa/user-guide/ssl-tls-rules)

Opportunistic Encryption

[Opportunistic encryption](/help/en/edge-security-acceleration/esa/user-guide/https-application-configuration)

HSTS

[HSTS](/help/en/edge-security-acceleration/esa/user-guide/https-application-configuration)

## **References**

### **Free certificate automatic DCV**

To verify domain ownership, certification authorities (CAs) require applicants to complete validation using one of the following methods:

-   DNS validation (for sites connected using NS records): After you apply for a free certificate, ESA automatically adds a TXT record for domain control validation.
    
-   HTTP validation (for sites connected using CNAME records): After you apply for a free certificate, domain control is verified by placing a specific file on the web server of the specified domain name.
    

When you request a free certificate for a site that has been added and activated, ESA will [host the DCV](/help/en/edge-security-acceleration/esa/user-guide/managed-dcv) for your site.

### **Certificate selection priority**

A single site can support both free and custom certificates. All configured certificates form a certificate pool. When a POP receives a client request, it automatically selects the optimal certificate from the certificate pool and returns it to the client. The priority for certificate selection is as follows:

-   Certificates in an active state are prioritized. For example, certificates that are within their validity period and match the Server Name Indication (SNI).
    
-   Certificates that were configured more recently take precedence over certificates that were configured earlier.
    

## **Support for different plans**

**Certificate Type**

**Entrance**

**Entrance**

**Premium**

**Enterprise**

Let's Encrypt Free Certificate

10 items

50 sheets

70 pieces

100 sheets

Digicert Free Certificate

Not supported

10

20

50 images

Custom Certificate

5

10

20 items

50

## **FAQ**

### **What are the features of Digicert free certificates?**

-   **Domain name restrictions**: A single certificate can include only one domain name and does not support wildcard domain names.
    
-   **SAN configuration**: After the certificate is issued, it includes two Subject Alternative Names (SANs): the domain name for which you applied and its `www` subdomain. For example, if you apply for a certificate for `example.com`, the issued certificate will include both `example.com` and `www.example.com`.
    
-   **www domain name handling**: If you enter a certificate name that starts with `www.`, ESA automatically ignores the `www.` prefix.
    
-   **DCV validation**: The domain name used for TXT record validation is `_dnsauth.{{certificate name}}`. DCV hosting requires you to configure a CNAME record for this domain name.
    
-   **Validity period**: The certificate validity period is 3 months and supports automatic renewal.
    
-   **Certificate type**: Domain Validation (DV) certificate that uses the SHA256-RSA encryption algorithm.
