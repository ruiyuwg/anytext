Canceling a certificate application in the **Pending Application** state returns the quota to your account. This topic describes how to use the returned certificate quota to manually create a new SSL certificate instance, bind a domain, and initiate the certificate request process.

**Important**

Newly purchased certificates are automatically created in the **Pending Application** state. Skip this topic and proceed directly to [submit a request to the CA](/help/en/ssl-certificate/apply-for-a-certificate).

## **Prerequisites**

You have available quota for an official (paid) certificate.

## **Workflow**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4797793771/CAEQTxiBgICLz7L71xkiIDFhMDkwOTMyNDQzZTQ2ZDZhYTQ5OTcxNDcxYjg4OWY35595470_20250814174311.489.svg)

## **Procedure**

Log on to the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas), choose **Certificate Management** > **SSL Certificate Management** > ****Commercial Certificates****, then click **Create Certificate**.

### **Step 1: Configure basic settings**

Configure the basic parameters as described below. The **Quick Issue** setting controls what happens next. **Quick Issue** selected: the system automatically submits the certificate request. **Quick Issue** cleared: clicking **OK** creates a certificate draft in **Pending Application** state, which you must [submit to the CA](/help/en/ssl-certificate/apply-for-a-certificate) later.

-   **Certificate Type**
    
    The system displays the types of certificates that you can create, such as single-domain, multi-domain, and wildcard. You can only select types for which you have available quota.
    
-   **Certificate Specifications**
    
    Select the certificate brand and validation level. The options shown are based on the certificate quota you currently hold. If the required specification is not available, [purchase additional certificates](/help/en/ssl-certificate/purchase-an-ssl-certificate).
    
-   **Domain Name**
    
    -   **Domain name requirements**
        
        -   **Type matching**: The domain type that you enter (single, multi-domain, or wildcard) must match your purchased certificate.
            
        -   **Length limits:** The total length must not exceed 253 characters. Each label (a segment separated by the `.` character) must not exceed 63 characters.
            
    -   **Special format requirements**
        
        -   **Wildcard**: Must start with `*`, such as `*.example.com`.
            
        -   **Chinese domain name**: If you use a Chinese domain name, you must convert it to Punycode as prompted in the console. You can also use a conversion tool. For more information, see [Chinese Domain Name Conversion](/help/en/ssl-certificate/use-the-certificate-toolkit#03304f7025340).
            
        -   **IP addresses**: Supported only by some OV single-domain certificates (Brands: GlobalSign and GeoTrust).
            
    -   **Suffix restrictions:** DigiCert-branded certificates cannot be issued for domain names with special suffixes, such as `.edu`, `.gov`, `.org`, `.jp`, `.pay`, `.bank`, `.live`, `.nuclear`, or `.ru`. This restriction does not apply to GlobalSign.
        
    -   **Complimentary domain name**: If the domain name you enter meets the eligibility requirements, a [complimentary domain name](#88c19606f6iqp) is automatically included.
        
-   **Validity Period (Years)**
    
    Select the subscription duration.
    
    -   The default validity period of a certificate is one year. The maximum validity period of a certificate issued by any CA is 397 days. The period that you select here is the subscription duration of the certificate service.
        
    -   To obtain a service period of more than one year, you must purchase the **Certificate Hosting Service** and more than one certificate of the same type and specifications. For each additional year of service, one additional certificate and one hosting service instance are used.
        
    
    **Note**
    
    For example, if you select a service period of two years:
    
    -   This uses two one-year certificates and one hosting service instance.
        
    -   When the first certificate is about to expire, you can obtain the second certificate without submitting another application. Certificate Service automatically renews and updates the certificate for you.
        
    
-   **Quick Issue**
    
    Select this option to [fill in the application details](#39c6b416c4128). The system will automatically submit the request to the CA upon creation. You will only need to complete the [domain ownership verification](/help/en/ssl-certificate/verify-the-ownership-of-a-domain-name).
    

### **Step 2 (Optional): Provide application details (Quick Issue)**

If you selected **Quick Issue**, you must provide the verification details required by the CA. After entering the information, click **Submit.** The certificate status changes to **Validating Application**. You must then complete the [domain name ownership verification](/help/en/ssl-certificate/verify-the-ownership-of-a-domain-name). The required fields vary by certificate validation level (DV, OV, or EV).

## DV certificates

Provide the following details:

-   **Domain Verification Method**
    
    **Note**
    
    -   **Certificate purchase account**: The [Alibaba Cloud account](https://yundun.console.alibabacloud.com/?p=cas) used to purchase the target SSL certificate in the Certificate Management Service console.
        
    -   **DNS resolution account**: The Alibaba Cloud account used to configure DNS resolution for the target domain name in [Alibaba Cloud DNS](https://dnsnext.console.alibabacloud.com/overview).
        
    
    ### The purchase and DNS accounts are different
    
    -   **Manual DNS Verification** (recommended): Log on to your DNS service platform and add a TXT DNS record.
        
    -   **File Verification**: Log on to your web server, and create and upload the required validation file to the specified directory.
        
        **Important**
        
        Wildcard domain names do not support file validation.
        
    
    ### The purchase and DNS account are the same
    
    The system uses the **Automatic DNS Verification** method. Alibaba Cloud automatically adds a DNS record for the domain name in [Alibaba Cloud DNS](https://dnsnext.console.alibabacloud.com/overview) to verify domain ownership. No manual operation is required.
    
-   **Contact**
    
    Select the contact for this certificate application. The contact information includes an email address and a mobile phone number. To create or modify a contact, click **Create Contact** or **Edit**, or go to [Contact Management](/help/en/ssl-certificate/manage-contacts#section-3ao-ncx-vkt).
    
    **Important**
    
    After the CA receives the certificate application, it sends a validation email to the contact's email address or communicates with the contact using their mobile phone number for the review. Make sure that the contact information is accurate and valid.
    
-   **Location**
    
    Select the city or region where the applicant is located.
    
-   **Encryption Algorithm**
    
    **Option**
    
    **Security**
    
    **Compatibility**
    
    **Performance**
    
    **Recommendation**
    
    **RSA\_2048**
    
    Medium
    
    Widest
    
    Middle
    
    Recommended for general use and suitable for most web applications.
    
    **RSA\_3072**
    
    High
    
    Good
    
    Lower
    
    Suitable for scenarios with high security requirements, such as finance and payments.
    
    **RSA\_4096**
    
    Very High
    
    Fair
    
    Low
    
    Recommended only for top-secret or extremely high-security scenarios.
    
    **ECC\_256**
    
    High
    
    Good
    
    Very High
    
    Suitable for mobile applications, high-concurrency systems, and IoT devices.
    
    -   **RSA**: An asymmetric key encryption algorithm based on the difficulty of factoring large integers. It is the most widely used and has excellent compatibility. Longer keys provide higher security but increase performance overhead.
        
    -   **ECC**: An asymmetric key encryption algorithm based on the difficulty of the elliptic curve discrete logarithm problem. It achieves the same level of security as RSA with shorter keys, offers higher computational efficiency, and is suitable for resource-constrained environments such as mobile devices and IoT.
        
    
    **Note**
    
    Currently, only some brands and types of certificates support the ECC. For more information, see [Selection guide](/help/en/ssl-certificate/functions-and-features#title-omt-8me-9qu).
    
-   **CSR Generation**
    
    A Certificate Signing Request (CSR) is an application file submitted to a CA when you apply for an SSL certificate. It contains your domain name, organization information, and public key. You must securely store the corresponding private key.
    
    ### **Automatic** (recommended)
    
    Alibaba Cloud automatically creates a CSR and a private key for you. After the certificate is issued, you can directly download the complete file that contains the private key.
    
    ### Manual Entry
    
    You can use tools such as OpenSSL or Keytool to manually generate a CSR and a private key file, which you must store securely. Then, copy the CSR content into the **CSR File** configuration item. For more information about how to create a CSR and a private key file, see [How to create a CSR file](/help/en/ssl-certificate/how-do-i-create-a-csr-file#0f0749505frnz).
    
    **Important**
    
    -   Securely store your private key. If you lose the private key, the certificate becomes unusable because the key is unrecoverable. You would need to generate a new key pair and request a certificate reissuance.
        
    -   The encryption algorithm of the CSR must match the Key Algorithm selected above.
        
    
    ### Select an Existing CSR
    
    From the CSRs created or uploaded in the Certificate Management Service console, select the CSR that matches the **Domains to Bind**. For more information about how to create and upload a CSR, see [Create a CSR](/help/en/ssl-certificate/manage-csrs#section-r2b-rdg-5ze).
    
-   **CSR File**
    
    This parameter is required only when **CSR Generation** is set to **Manual** or **Select Existing CSR**. Enter the content of your CSR file.
    

## OV certificates

Provide the following details:

-   **Contact**
    
    Select the contact for this certificate application. The contact information includes an email address and a mobile phone number. To create or modify a contact, click **Create Contact** or **Edit**, or go to [Contact Management](/help/en/ssl-certificate/manage-contacts#section-3ao-ncx-vkt).
    
    **Important**
    
    After the CA receives the certificate application, it sends a validation email to the contact's email address or communicates with the contact using their mobile phone number for the review. Make sure that the contact information is accurate and valid.
    
-   **Company**
    
    Select the company information for this certificate application, including the name, phone number, and address. To create or modify company information, click **Create Company Profile** or **Edit**, or go to [Company Information Management](/help/en/ssl-certificate/manage-company-profiles#section-3ao-ncx-vkt).
    
    **Important**
    
    When you apply for an OV certificate for a .gov domain name, the organization name in the domain's WHOIS information must exactly match the company name_._
    
-   **Business License**
    
    After you select a **Company**, the system automatically identifies the business license picture uploaded for the company. If you did not upload a business license picture when you created the company, the business license picture is empty. To ensure a quick review by the CA, we recommend that you upload the company's business license picture.
    
-   **Encryption Algorithm**
    
    **Option**
    
    **Security**
    
    **Compatibility**
    
    **Performance**
    
    **Recommendation**
    
    **RSA\_2048**
    
    Medium
    
    Widest
    
    Middle
    
    Recommended for general use and suitable for most web applications.
    
    **RSA\_3072**
    
    High
    
    Good
    
    Lower
    
    Suitable for scenarios with high security requirements, such as finance and payments.
    
    **RSA\_4096**
    
    Very High
    
    Fair
    
    Low
    
    Recommended only for top-secret or extremely high-security scenarios.
    
    **ECC\_256**
    
    High
    
    Good
    
    Very High
    
    Suitable for mobile applications, high-concurrency systems, and IoT devices.
    
    -   **RSA**: An asymmetric key encryption algorithm based on the difficulty of factoring large integers. It is the most widely used and has excellent compatibility. Longer keys provide higher security but increase performance overhead.
        
    -   **ECC**: An asymmetric key encryption algorithm based on the difficulty of the elliptic curve discrete logarithm problem. It achieves the same level of security as RSA with shorter keys, offers higher computational efficiency, and is suitable for resource-constrained environments such as mobile devices and IoT.
        
    
    **Note**
    
    Currently, only some brands and types of certificates support the ECC. For more information, see [Selection guide](/help/en/ssl-certificate/functions-and-features#title-omt-8me-9qu).
    
-   **CSR Generation**
    
    A Certificate Signing Request (CSR) is an application file submitted to a CA when you apply for an SSL certificate. It contains your domain name, organization information, and public key. You must securely store the corresponding private key.
    
    ### **Automatic** (recommended)
    
    Alibaba Cloud automatically creates a CSR and a private key for you. After the certificate is issued, you can directly download the complete file that contains the private key.
    
    ### Manual Entry
    
    You can use tools such as OpenSSL or Keytool to manually generate a CSR and a private key file, which you must store securely. Then, copy the CSR content into the **CSR File** configuration item. For more information about how to create a CSR and a private key file, see [How to create a CSR file](/help/en/ssl-certificate/how-do-i-create-a-csr-file#0f0749505frnz).
    
    **Important**
    
    -   Securely store your private key. If you lose the private key, the certificate becomes unusable because the key is unrecoverable. You would need to generate a new key pair and request a certificate reissuance.
        
    -   The encryption algorithm of the CSR must match the Key Algorithm selected above.
        
    
    ### Select an Existing CSR
    
    From the CSRs created or uploaded in the Certificate Management Service console, select the CSR that matches the **Domains to Bind**. For more information about how to create and upload a CSR, see [Create a CSR](/help/en/ssl-certificate/manage-csrs#section-r2b-rdg-5ze).
    
-   **CSR File**
    
    This parameter is required only when **CSR Generation** is set to **Manual** or **Select Existing CSR**. Enter the content of your CSR file.
    

## EV certificates

Provide the following details:

-   **Contact**
    
    Select the contact for this certificate application. The contact information includes an email address and a mobile phone number. To create or modify a contact, click **Create Contact** or **Edit**, or go to [Contact Management](/help/en/ssl-certificate/manage-contacts#section-3ao-ncx-vkt).
    
    **Important**
    
    After the CA receives the certificate application, it sends a validation email to the contact's email address or communicates with the contact using their mobile phone number for the review. Make sure that the contact information is accurate and valid.
    
-   **Company**
    
    Select the company information for this certificate application, including the name, phone number, and address. To create or modify company information, click **Create Company Profile** or **Edit**, or go to [Company Information Management](/help/en/ssl-certificate/manage-company-profiles#section-3ao-ncx-vkt).
    
    **Important**
    
    When you apply for an OV certificate for a .gov domain name, the organization name in the domain's WHOIS information must exactly match the company name_._
    
-   **Business License**
    
    After you select a **Company**, the system automatically identifies the business license picture uploaded for the company. If you did not upload a business license picture when you created the company, the business license picture is empty. To ensure a quick review by the CA, we recommend that you upload the company's business license picture.
    
-   **Encryption Algorithm**
    
    **Option**
    
    **Security**
    
    **Compatibility**
    
    **Performance**
    
    **Recommendation**
    
    **RSA\_2048**
    
    Medium
    
    Widest
    
    Middle
    
    Recommended for general use and suitable for most web applications.
    
    **RSA\_3072**
    
    High
    
    Good
    
    Lower
    
    Suitable for scenarios with high security requirements, such as finance and payments.
    
    **RSA\_4096**
    
    Very High
    
    Fair
    
    Low
    
    Recommended only for top-secret or extremely high-security scenarios.
    
    **ECC\_256**
    
    High
    
    Good
    
    Very High
    
    Suitable for mobile applications, high-concurrency systems, and IoT devices.
    
    -   **RSA**: An asymmetric key encryption algorithm based on the difficulty of factoring large integers. It is the most widely used and has excellent compatibility. Longer keys provide higher security but increase performance overhead.
        
    -   **ECC**: An asymmetric key encryption algorithm based on the difficulty of the elliptic curve discrete logarithm problem. It achieves the same level of security as RSA with shorter keys, offers higher computational efficiency, and is suitable for resource-constrained environments such as mobile devices and IoT.
        
    
    **Note**
    
    Currently, only some brands and types of certificates support the ECC. For more information, see [Selection guide](/help/en/ssl-certificate/functions-and-features#title-omt-8me-9qu).
    
-   **CSR Generation**
    
    A Certificate Signing Request (CSR) is an application file submitted to a CA when you apply for an SSL certificate. It contains your domain name, organization information, and public key. You must securely store the corresponding private key.
    
    ### **Automatic** (recommended)
    
    Alibaba Cloud automatically creates a CSR and a private key for you. After the certificate is issued, you can directly download the complete file that contains the private key.
    
    ### Manual Entry
    
    You can use tools such as OpenSSL or Keytool to manually generate a CSR and a private key file, which you must store securely. Then, copy the CSR content into the **CSR File** configuration item. For more information about how to create a CSR and a private key file, see [How to create a CSR file](/help/en/ssl-certificate/how-do-i-create-a-csr-file#0f0749505frnz).
    
    **Important**
    
    -   Securely store your private key. If you lose the private key, the certificate becomes unusable because the key is unrecoverable. You would need to generate a new key pair and request a certificate reissuance.
        
    -   The encryption algorithm of the CSR must match the Key Algorithm selected above.
        
    
    ### Select an Existing CSR
    
    From the CSRs created or uploaded in the Certificate Management Service console, select the CSR that matches the **Domains to Bind**. For more information about how to create and upload a CSR, see [Create a CSR](/help/en/ssl-certificate/manage-csrs#section-r2b-rdg-5ze).
    
-   **CSR File**
    
    This parameter is required only when **CSR Generation** is set to **Manual** or **Select Existing CSR**. Enter the content of your CSR file.
    

## **Next steps**

Scenario 1: You selected **Quick Issue**.

The system has submitted your application to the CA. You can hover over the![Status icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4335946371/p888405.png) icon in the **Status** column. In the tooltip that appears, click **View Progress** to track the review status. Then, complete the [domain name ownership verification](/help/en/ssl-certificate/verify-the-ownership-of-a-domain-name#DAS).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4335946371/p893318.png)

Scenario 2: You did not select **Quick Issue**.

The certificate is created but hasn't been sent to the CA. Locate the certificate in the list. The **Status** will be **Pending Application**. You must [submit a request to a CA](/help/en/ssl-certificate/apply-for-a-certificate). Only after this submission and verification process will the CA issue the certificate.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4335946371/p892979.png)

## Complimentary domain**s for SSL certificates**

When you purchase a certificate that meets certain conditions, a complimentary domain is automatically included to secure both the www and non-www versions of your site. The complimentary rules vary by certificate type and brand.

### **Conditions**

### **GlobalSign**

-   **DV:** The domain validation must be DNS validation.
    
-   **OV:** No special restrictions.
    
-   **EV:** The domain must be an apex domain.
    

### **DigiCert**

-   **DV:** The domain validation must be DNS validation.
    
-   **OV, EV:** The domain must be an apex domain.
    

### **Alibaba Cloud**

The domain must be a `www` subdomain such as `www.aliyun.com`.

**Note**

This offer is not reciprocal; securing an apex (such as `aliyun.com`) or wildcard domain (such as `*.aliyun.com`) will not include the `www` subdomain.

### Complimentary rules

-   **Single domain certificate:**
    
    The matching apex domain or `www` subdomain is automatically included.
    
    -   If your certificate is for `yourdomain.com`, `www.yourdomain.com` is added for free.
        
    -   If your certificate is for `www.yourdomain.com`, `yourdomain.com` is added for free.
        
-   **Wildcard certificate**:
    
    The corresponding apex domain is automatically included.
    
    -   If your certificate is for `*.yourdomain.com`, `yourdomain.com` is added for free.
        
-   **Multi-domain certificate**:
    
    The free domain offer applies only to the **first domain** listed in your certificate request.
    
    **Example**: If the first domain in your request is `www.domain-a.com`, system will automatically include domain-a.com for free. No complimentary domain will be added for the second domain, `domain-b.com`.
    

## **FAQ**

### **Unable to create a certificate due to insufficient quota.**

**Cause**

**Solution**

Quota is locked by pending applications.

In the console, filter the certificate list by the **Pending Application** status. For any draft certificates you do not plan to use, click **Cancel Apply**. This immediately releases the associated quota back to your account.

**Important**

Revoking or deleting an issued certificate does not refund or restore the original quota.

Quota is fully used.

If all existing quotas are being used by valid certificates and no drafts can be canceled, [purchase a commercial certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate) resources and then retry creating the certificate.

### **Can I bind Chinese (IDN) domain names?**

Yes. If you use a Chinese domain name, you must convert it to Punycode format as prompted in the console to request a certificate. Alternatively, you can use a transcoding tool to perform the conversion. For more information, see [Chinese Domain Name Conversion](/help/en/ssl-certificate/use-the-certificate-toolkit#03304f7025340).
