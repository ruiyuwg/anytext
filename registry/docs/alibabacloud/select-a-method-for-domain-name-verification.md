When you submit a certificate application, you must select a domain verification method. This allows the certification authority (CA) to verify that you own or manage the domain name for the certificate.

Alibaba Cloud offers the domain verification methods described in the following table. You can choose a method that meets your needs.

**Domain verification method**

**Prerequisites (all of the following conditions must be met)**

**Description**

**Certificate issuance time**

Automatic DNS verification

-   The certificate is a domain validated (DV) certificate.
    
-   The domain name for the certificate was registered with Alibaba Cloud.
    
-   The domain name uses the Alibaba Cloud DNS service.
    
-   The Alibaba Cloud DNS service and the certificate applicant belong to the same Alibaba Cloud account.
    

Alibaba Cloud automatically detects eligible domain names and adds a DNS record in the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/) to verify your domain ownership. Then, you can wait for the certificate to be issued. For more information, see [Domain ownership verification](/help/en/ssl-certificate/verify-the-ownership-of-a-domain-name#section-ulk-hit-czi).

If the information is correct, the CA completes the review and issues the certificate within 1 to 2 business days.

Manual DNS verification

-   The certificate is a DV certificate for a single domain name or a wildcard domain name.
    
-   You have permission to modify the DNS settings for the domain name (domain management permissions).
    
-   The DNS service and the certificate are not managed under the same Alibaba Cloud account.
    

You must manually add a DNS record with your DNS provider to verify domain ownership. For more information, see [Domain ownership verification](/help/en/ssl-certificate/verify-the-ownership-of-a-domain-name#p-xyg-fi3-738).

If the information is correct, the CA completes the review and issues the certificate within 1 to 2 business days.

**Note**

If the issuance of your DV certificate is delayed, verify that the DNS record is configured correctly.

File verification

-   The certificate is a DV certificate for a single domain name.
    
-   You have permission to write content to the web root directory of the server (server management permissions).
    
-   The server must have port 80 and port 443 open.
    
-   If you apply for a certificate from an international brand such as DigiCert or GlobalSign, ensure that the server can be accessed from outside mainland China. You may need to temporarily add the CA's IP addresses to the whitelist on your server. This ensures that the CA can access your server to complete domain ownership verification. To obtain the CA's IP addresses, contact your account manager.
    
-   If your domain name is a root domain, such as `aliyundoc.com`, ensure that the corresponding second-level domain that starts with `www.` is also accessible, and vice versa.
    

You must download the dedicated verification file from the Certificate Management Service console and upload it to the specified verification directory on your server. For more information, see [Domain ownership verification](/help/en/ssl-certificate/verify-the-ownership-of-a-domain-name#p-xqm-fyd-67c).

If the information is correct, the CA completes the review and issues the certificate within 1 to 2 business days.

**Note**

If the issuance of your DV certificate is delayed, verify that the verification file is configured correctly.

Email verification

The certificate is an organization validated (OV) or extended validation (EV) certificate.

After you submit an application for an OV or EV certificate, the CA typically sends a preliminary review email to the address that you provided in the application or calls you for confirmation within one business day. The exact time depends on the CA's local time and may be extended due to public holidays. You must promptly answer the call or reply to the email from the CA.

If the information is correct and you cooperate with the CA's verification process, the CA completes the review and issues the certificate within 3 to 7 business days.

**Note**

The time required for certificate issuance depends on how quickly you complete the domain authorization verification. If your domain name contains certain sensitive words, such as bank, pay, or live, it may trigger a manual review. In this case, the review process takes longer.
