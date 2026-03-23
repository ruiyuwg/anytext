The certificate application repository lets you classify certificates from different sources, such as those from Alibaba Cloud and local certificates, for convenient and effective management. You can also use the certificate application repository API to sign, verify signatures, or encrypt and decrypt sensitive data, such as electronic contracts and electronic invoicing files. This ensures the authenticity, integrity, and security of your data files.

The following table describes the common features and scenarios of the certificate application repository to help you quickly understand its capabilities.

**Scenario**

**Description**

**Operation Guide**

Classify and manage Alibaba Cloud and local certificates

Alibaba Cloud supports classifying and managing certificates from these sources:

-   Uploaded certificates (local user certificates)
    
-   Uploaded Certificate Authority (CA) certificates (local root certificates and intermediate certificates)
    
-   Alibaba Cloud private CA certificates (private root certificates and intermediate certificates)
    
-   Alibaba Cloud private certificates (not supported on the Alibaba Cloud International Website (www.alibabacloud.com))
    
-   Alibaba Cloud compliance certificates (not supported on the Alibaba Cloud International Website (www.alibabacloud.com))
    

After you create a certificate application repository for a specific source, you can manage the certificates in the repository through the console or using API operations.

[Manage certificates in a certificate application repository](/help/en/ssl-certificate/manage-private-certificates-by-using-a-certificate-application-repository#task-2266358)

HTTPS mutual authentication for Alibaba Cloud services

For HTTPS mutual authentication on Alibaba Cloud services:

-   Uploaded CA certificates: Upload local CA certificates to the certificate repository, and then select them in the corresponding cloud product.
    
-   Alibaba Cloud private CA certificates: The system pulls private CA certificates from all Alibaba Cloud regions. You can then select these certificates in the corresponding cloud product.
    

[Manage certificates in a certificate application repository](/help/en/ssl-certificate/manage-private-certificates-by-using-a-certificate-application-repository#task-2266358)

Sign and verify signatures

You can call the certificate application repository API to use certificates in the repository to sign or verify signatures for items such as electronic contracts, electronic invoicing, and OA approvals.

-   [Certificate Repository Signing](/help/en/ssl-certificate/developer-reference/api-cas-2020-04-07-sign)
    
-   [Certificate Repository Signature Verification](/help/en/ssl-certificate/developer-reference/api-cas-2020-04-07-verify)
    

Encrypt and decrypt data

You can call the certificate application repository API to use certificates in the repository to encrypt or decrypt data.

**Note**

Supported encryption algorithms include RSA and SM2.

-   [Certificate encryption in the certificate repository](/help/en/ssl-certificate/developer-reference/api-cas-2020-04-07-encrypt)
    
-   [Certificate decryption in the repository](/help/en/ssl-certificate/developer-reference/api-cas-2020-04-07-decrypt)
    

**Note**

When you first create a certificate application repository, Alibaba Cloud provides 100 free API calls. These API calls are consumed when you use the API to sign, verify signatures, encrypt, or decrypt data. If you run out of API calls, you must purchase a certificate application repository API call package. For more information, see [Purchase a certificate application repository API call package](/help/en/ssl-certificate/api-calls-to-purchase-certificate-warehouse#task-2267561).
