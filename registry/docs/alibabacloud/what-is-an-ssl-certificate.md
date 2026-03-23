An SSL certificate (the current industry standard is a TLS certificate) is a digital certificate. It verifies website identity and encrypts communication between browsers and servers. Trusted certification authorities (CAs) issue these certificates. They form the foundation for the HTTPS protocol, ensuring data transmission security and integrity. This topic describes the core value, how it works, and the usage flow of SSL certificates.

**Important**

SSL Certificate Service is gradually switching to V2.0. Update times may vary for different users. For differences between V1.0 and V2.0, see [SSL Certificate Service Version Change Description](/help/en/ssl-certificate/ssl-certificate-management-version-change-description).

## Core value

Deploying SSL/TLS certificates is a necessary security measure for modern websites. It addresses the following issues:

-   **Data encryption**: Encrypts data transmitted between clients (such as browsers) and web servers. This prevents sensitive data from being illegally intercepted or tampered with.
    
-   **Identity verification**: Verifies server legitimacy. This prevents users from accessing fake or phishing websites.
    
-   **Enhance browser trust**: Eliminates "Not Secure" warnings in browsers and displays a security lock icon in the address bar.
    
-   **Compliance assurance**: Meets the requirements of network security and data protection regulations, such as Equal Protection 2.0 and the Payment Card Industry Data Security Standard (PCI DSS).
    
-   **Search Engine Optimization (SEO)**: Mainstream search engines prioritize indexing HTTPS websites, which helps improve search rankings.
    

## How it works

The SSL/TLS protocol uses a hybrid encryption mechanism: **asymmetric encryption for identity verification** and **symmetric encryption for data transmission**.

### Certificate issuance and validation (trust chain construction)

1.  **Generate request**: The server generates a key pair (RSA 2048-bit or ECC 256-bit). It encapsulates the public key and organization information into a Certificate Signing Request (CSR).
    
2.  **CA Signing**: After the CA verifies domain ownership, it extracts the public key and applicant information from the CSR. It then combines issuer information, validity period, and extension fields to construct the certificate content. The CA uses its private key for digital signature, generating an X.509-compliant certificate.
    
3.  **Trust Chain Establishment**: Browsers use pre-installed root certificates to verify server certificate signatures step by step, establishing a trust chain.
    

### Encrypted session establishment (TLS handshake)

1.  **Handshake initiation**: The client sends a `ClientHello` message. This message includes supported protocol versions and a cipher suite list.
    
2.  **Certificate delivery**: The server responds with a `ServerHello` message and sends the certificate chain.
    
3.  **Identity verification**: The client verifies the certificate's validity period and domain name match. It confirms the certificate has not been revoked using a Certificate Revocation List (CRL) or the Online Certificate Status Protocol (OCSP). Some deployments use OCSP Stapling to optimize this process.
    
4.  **Key exchange**: Both parties generate a session key through a key exchange mechanism.
    
    -   **ECDHE mode** (recommended): Both parties generate temporary key pairs and exchange public keys. They independently calculate the same session key.
        
    -   **RSA mode** (traditional): The client generates a pre-master secret, encrypts it with the server's public key, and transmits it. After the server decrypts it, both parties derive the session key.
        
5.  **Symmetric communication**: After the handshake is complete, all data is symmetrically encrypted and transmitted using the session key.
    

**Note**

The public key in the certificate (based on RSA, ECC, or SM2 algorithms) verifies server identity and establishes a secure channel for key exchange. Actual data transmission uses a negotiated symmetric key (such as AES) for encryption to ensure performance. For more information, see [What are public and private keys](/help/en/ssl-certificate/what-are-a-public-key-and-a-private-key#concept-g2h-zcv-ydb).

## **Usage Flow**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6427793771/CAEQVBiBgIDy0NK_5RkiIDgyYzVkODdlM2IzZTRmMjU4YzUzM2NhYjE3YmJiNjUz4904875_20250121131738.838.svg)

## Purchase certificate

1.  Select the appropriate certificate type as needed. For details, see [SSL Certificate Selection Guide](/help/en/ssl-certificate/functions-and-features).
    
2.  Refer to [Purchase a commercial certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate) to fill in the certificate purchase information.
    

## Create certificate

**Important**

Applies only to **SSL Certificate Management (V1.0, new purchases discontinued)**. In **SSL Certificate Management V2.0**, you do not need to create certificates after purchase.

If you did not bind a domain name during purchase, create a certificate to associate the purchased quota with the domain name. During creation, the system provides the **Quick Issue** option:

-   Select **Quick Issue**: You need to provide the application information. After the certificate is created, the system will **automatically** submit the certificate request to the CA, and you only need to complete [domain ownership verification](/help/en/ssl-certificate/verify-the-ownership-of-a-domain-name).
    
-   If you do not select **Quick Issue**: After creation, you must log on to the certificate console to manually fill out and submit the request. For detailed steps, see [Submit a Request to a Certification Authority (CA)](/help/en/ssl-certificate/apply-for-a-certificate).
    

**Note**

The certificate list displays only certificates that are successfully attached to domain names. Certificates that are not attached to a domain name become visible after you complete the **Create Certificate** operation.

## Request certificate

1.  Submit a request to the Certification Authority (CA)
    
    Submit an application to a CA. Fill in the corresponding information based on the certificate type (such as the domain name or IP bound to the certificate, contact, company, and business license). Then submit the certificate request to the CA. For specific operations, see [Request certificate](/help/en/ssl-certificate/apply-for-a-certificate).
    
2.  Domain Name Ownership Verification
    
    Domain ownership validation. When submitting an application to the CA, verify your ownership of the domain name. For more information, see [Domain ownership validation](/help/en/ssl-certificate/verify-the-ownership-of-a-domain-name).
    
    -   Domain Validated (DV) certificates support three validation methods: **Automatic DNS Verification**, **Manual DNS Verification**, and **File Verification**.
        
    -   Extended Validation (EV) or Organization Validated (OV) certificates: Complete validation based on the domain validation email content sent by the CA.
        
3.  CA Review
    
    CA review. After submitting the application and completing domain ownership validation, wait for CA review. To view the review progress and results, refer to [CA Review Result Handling](/help/en/ssl-certificate/application-review-results-processing). The average issuance time for Domain Validated (DV) certificates is 1 to 15 minutes, and for Organization Validated (OV) and Extended Validation (EV) certificates, it is 5 calendar days.
    

## Deploy certificate

After the CA review passes and the certificate status is "Issued," deploy the certificate file to your web server (such as Nginx, Apache, or IIS) or cloud product. This enables HTTPS for your site. For specific operations, see [Deploy SSL certificate](/help/en/ssl-certificate/installation-overview/).

**Important**

If your server is located in the Chinese mainland, you must complete ICP filing. Otherwise, the website will be inaccessible.

-   If you use an Alibaba Cloud server, go to the [Alibaba Cloud ICP Filing system](https://beian.aliyun.com/order/index?spm=a2c4g.11186623.0.0.31773cd9txeAI4) to complete the ICP filing for your website. For more information, see [ICP filing process](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview#title-vff-7fj-ag2).
    
-   If you do not use an Alibaba Cloud server, go to your server provider's ICP filing system or the [MIIT ICP Filing website](https://beian.miit.gov.cn/) to complete the filing.
    

## What to do next

### Certificate renewal

**Important**

**SSL Certificate Management V2.0** does not currently support certificate renewal. This feature will be available in a future update.

After an SSL certificate expires, promptly renew or reapply for it. Install a new SSL certificate to maintain the website's encrypted connection and security. For specific operations, see [SSL Certificate Renewal and Expiration Handling](/help/en/ssl-certificate/ssl-official-certificate-renewal).

### Certificate revocation

If a certificate is no longer in use, revoke it. For specific operations, see [Revoke and delete SSL certificates](/help/en/ssl-certificate/revoke-and-delete-a-certificate).

**Warning**

**Certificate revocation is irreversible**. After revocation, the CA publishes the certificate's revocation status through a CRL or OCSP. Browsers and clients will deem it invalid during certificate validity checks and trigger a security warning.

## **FAQ**

### **What if I cannot find the certificate after purchase?**

If you do not enter domain name information during the purchase, you receive an entitlement to create a certificate. The certificate will not appear in the certificate list until you create an [SSL Certificate](/help/en/ssl-certificate/create-a-certificate) and bind a domain name to it.

### **Do SSL Certificates support Chinese domain names?**

Yes, they do. If you bind a Chinese domain name, you must convert it to Punycode as prompted by the console before you apply for a certificate. You can also use a transcoding tool for the conversion. For more information, see [Chinese Domain Name Conversion](/help/en/ssl-certificate/use-the-certificate-toolkit#03304f7025340).

### Can I apply for an Alibaba Cloud SSL certificate if my DNS provider is not Alibaba Cloud?

Yes. Domain ownership validation is independent of your DNS provider. You have two options:

**Option**

**Method**

**Advantage**

**Configure the record at your current provider**

Log on to your current domain name platform and add the SSL certificate validation record (TXT) from Alibaba Cloud.

**Note**

Contact your provider's support if you need assistance.

Fast and direct. No domain name transfer is required.

**Transfer your domain to Alibaba Cloud**

Follow the steps to [transfer a domain name to Alibaba Cloud](/help/en/dws/user-guide/transfer-a-domain-name-to-alibaba-cloud). Once complete, manage all DNS records in the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/).

**Important**

Transferring a domain requires paying a one-year renewal fee.

Convenient for future certificate renewals and unified domain name management.
