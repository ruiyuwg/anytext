To prevent service interruptions and security risks from an expired SSL certificate, you must monitor its validity period and renew it before it expires. This topic describes how to renew an **Commercial Certificates**, or an **Uploaded** to ensure service continuity and security.

## **Confirm the certificate type**

Go to the [SSL Certificate Management](https://yundun.console.alibabacloud.com/?p=cas#/certExtend/buy/ap-southeast-1) page. Select the tab for your certificate type (**Commercial Certificates**, or **Uploaded**), confirm the certificate type, and then select a renewal plan:

-   **Commercial Certificates**: For more information, see [Renewal of commercial certificates](#1a6d4395b4yvy). This procedure lets you renew commercial certificates with a status of **Pending Expiration**. If a certificate is **Expired**, you must [repurchase](/help/en/ssl-certificate/purchase-an-ssl-certificate) and apply for a new certificate.
    
-   **Uploaded**: See [Renewal for "Uploaded Certificate"](#d838fdb128gi3), which applies when the status is **Pending Expiration****About to Expire**, or **Expired** for an "**Uploaded**".
    

## **Renew a paid certificate**

### **Renewal process**

Renewing an SSL certificate means reissuing a new certificate, not extending the validity period of the original one. After the new certificate is issued, the original certificate remains valid until it expires. The renewal process is as follows:

1.  **Submit renewal information and complete payment**: Complete and submit the required renewal information, and then complete the payment.
    
2.  **Submit the certificate request**: Submit a new certificate request to a certification authority (CA). You must validate your domain ownership and cooperate with the CA to complete the review.
    
3.  **Deploy and verify the new certificate**: Deploy the newly issued certificate to your server or cloud service to replace the original one.
    

### **Prerequisites**

-   **Certificate Status**: **Pending Expiration**
    
-   **Certificate type**: Not a multi-domain certificate.
    
-   **Specification changes**: No changes to certificate specifications (such as brand or type) are needed.
    

**Note**

If your certificate is **Expired**, is a multi-domain certificate, or requires a specification change, you need to purchase a new certificate and complete the creation, request, and deployment. For more information, see [SSL Certificate Usage Flow](/help/en/ssl-certificate/ssl-certificate-usage-process-overview).

### **Validity period calculation for the new certificate**

To ensure a smooth transition, a renewed and reissued certificate carries over the remaining validity period of the original certificate, up to a maximum of 30 days.

-   **Calculation rule**
    
    -   **Formula**: `New certificate validity period = Standard validity period (12 months or 365 days) + Remaining validity period of the old certificate (up to 30 days)`.
        
    -   **Expiration date**: If you complete the renewal and issuance process within 30 days before the original certificate expires, the new certificate's expiration date is fixed (original certificate's expiration date + 365 days).
        
-   **Scenarios**
    
    For example, consider a certificate that is valid from 2024-10-01 to 2025-09-30. Assume the new certificate is issued on the same day the application process starts.
    
    -   **Operation time**: Submit renewal request on 2025-09-10.
        
    -   **Follow-up action**: Manually submit the certificate request.
        
    -   **New certificate validity period**: 12 months (365 days) + 20 days (remaining validity of old certificate) = 385 days.
        
    -   **New certificate validity range:** 2025-09-10 to 2026-09-30.
        
    
    **Note**
    
    For the system to automatically start the certificate application process through the Managed Service, the following conditions must be met. Otherwise, you must submit the request manually.
    
    -   For a DV certificate, the Alibaba Cloud account that uses [Alibaba Cloud DNS](https://dnsnext.console.alibabacloud.com/overview) for the domain name must be the same as the account that purchased the certificate, or the domain name must have [validation-free authorization](/help/en/ssl-certificate/domain-name-level-authorization-for-verification-free-issuance) completed.
        
    -   The certificate application information and materials are valid, as determined by the CA.
        
    

### **Step 1: Submit renewal information and complete payment**

1.  Go to the [SSL Certificate Management](https://yundun.console.alibabacloud.com/?p=cas#/certExtend/buy/ap-southeast-1) page. On the **Commercial Certificates** tab, find the certificate that you want to renew, and in the **Actions** column, click **Renewal purchase**.
    
2.  In the **Certificate renewal** panel, enter the following information.
    
    -   **CSR Generation**:
        
        A Certificate Signing Request (CSR) is a file used to request a certificate from a Certificate Authority (CA). It contains the domain name for the certificate, the public key, and entity information, and is signed with your private key. We recommend that you use **Automatic**.
        
        #### Automatic
        
        The system generates and securely hosts a new key pair with the same key algorithm as the original certificate and uses it to create a new CSR.
        
        **Note**
        
        This method follows the security best practice of key rotation.
        
        #### **Manual Entry**
        
        If you use a CSR file generated in your own environment, paste the file content into the **CSR File** field. Certificates issued using this method cannot be deployed to Alibaba Cloud products through the console. For more information about creating a CSR file and a private key file, see [Create a CSR file](/help/en/ssl-certificate/how-do-i-create-a-csr-file#0f0749505frnz).
        
        **Important**
        
        -   If the encryption algorithm of the manually entered CSR does not match the **Key Algorithm** of the old certificate, you cannot submit the certificate for review.
            
        -   Keep your private key file in a safe place. Alibaba Cloud is not responsible for storing your private key. If the private key is lost, you must purchase a new SSL certificate.
            
        
        #### **Update with Original Key**
        
        Use the key pair from the original certificate to generate a new CSR file and issue a new certificate.
        
        **Important**
        
        This method does not follow key rotation best practices and may not meet the compliance requirements of some industries.
        
    -   **Domain Verification Method**:
        
        By default, this is the same as the validation method of the original certificate.
        
        #### **DV certificates**
        
        The process differs depending on whether the account that purchased the certificate is the same one used for DNS resolution.
        
        **Note**
        
        -   **Certificate purchase account**: The [Alibaba Cloud account](https://yundun.console.alibabacloud.com/?p=cas) used to purchase the target SSL certificate in the Certificate Management Service console.
            
        -   **DNS resolution account**: The Alibaba Cloud account used to configure DNS resolution for the target domain name in [Alibaba Cloud DNS](https://dnsnext.console.alibabacloud.com/overview).
            
        
        ##### The purchase and DNS accounts are different
        
        -   **Manual DNS Verification** (recommended): Log on to your DNS service platform and add a TXT DNS record.
            
        -   **File Verification**: Log on to your web server, and create and upload the required validation file to the specified directory.
            
            **Important**
            
            Wildcard domain names do not support file validation.
            
        
        ##### The purchase and DNS account are the same
        
        The system uses the **Automatic DNS Verification** method. Alibaba Cloud automatically adds a DNS record for the domain name in [Alibaba Cloud DNS](https://dnsnext.console.alibabacloud.com/overview) to verify domain ownership. No manual operation is required.
        
        #### **OV certificates**
        
        After you submit an OV certificate request, the CA sends domain ownership validation instructions to the contact by email or phone. The contact must complete the validation as required to confirm domain ownership.
        
        #### **EV certificates**
        
        After you submit an EV certificate request, the CA sends domain ownership validation instructions to the contact by email or phone. The contact must complete the validation as required to confirm domain ownership.
        
    -   **Contact**:
        
        Depending on the domain validation method, the CA may send a certificate validation email to this contact or communicate with them about the review using their mobile phone number . Make sure the contact information is accurate and valid.
        
    -   **Renewal Period**:
        
        #### **1 Year**
        
        -   **Includes**: One SSL certificate of the same specifications with a 1-year validity period.
            
        -   **Application process**: After renewal, you must manually submit the certificate request from the certificate list.
            
        
        #### **2 Years**
        
        -   **Includes**: Two SSL certificates of the same specifications, each with a 1-year validity period, and one use of the Managed Service.
            
            **Note**
            
            The [Managed Service](/help/en/ssl-certificate/overview-1) includes automatic certificate requests before expiration , carrying over the remaining validity period (up to 30 days), and dedicated technical support.
            
        -   **Application process**:
            
            -   **First certificate**: After renewal, you must manually submit the certificate request from the certificate list.
                
            -   **Second certificate**: When the first certificate has 30 days or less of remaining validity, one use of the Managed Service is automatically consumed to start the application process for the second certificate.
                
            
            **Note**
            
            For the system to automatically start the certificate application process through the Managed Service, the following conditions must be met. Otherwise, you must submit the request manually.
            
            -   For a DV certificate, the Alibaba Cloud account that uses [Alibaba Cloud DNS](https://dnsnext.console.alibabacloud.com/overview) for the domain name must be the same as the account that purchased the certificate, or the domain name must have [validation-free authorization](/help/en/ssl-certificate/domain-name-level-authorization-for-verification-free-issuance) completed.
                
            -   The certificate application information and materials are valid, as determined by the CA.
                
            
        
        #### **3 Years**
        
        -   **Includes**: Three SSL certificates of the same specifications, each with a 1-year validity period, and two uses of the Managed Service.
            
            **Note**
            
            The [Managed Service](/help/en/ssl-certificate/overview-1) includes automatic certificate requests before expiration , carrying over the remaining validity period (up to 30 days), and dedicated technical support.
            
        -   **Application process**:
            
            -   **First certificate**: After renewal, you must manually submit the certificate request from the certificate list.
                
            -   **Subsequent certificates**: When the previous certificate has 30 days or less of remaining validity, one use of the Managed Service is automatically consumed to start the application process for the new certificate.
                
            
            **Note**
            
            For the system to automatically start the certificate application process through the Managed Service, the following conditions must be met. Otherwise, you must submit the request manually.
            
            -   For a DV certificate, the Alibaba Cloud account that uses [Alibaba Cloud DNS](https://dnsnext.console.alibabacloud.com/overview) for the domain name must be the same as the account that purchased the certificate, or the domain name must have [validation-free authorization](/help/en/ssl-certificate/domain-name-level-authorization-for-verification-free-issuance) completed.
                
            -   The certificate application information and materials are valid, as determined by the CA.
                
            
        
3.  Click **Renewal immediately** and follow the prompts to complete the payment.
    
    -   **Payment rule**: The system first uses your remaining certificate quota for the same specifications and your remaining Managed Service uses to offset the cost. You must pay for any shortfall.
        
    -   **View remaining certificate quota and managed service usage**: Go to the [SSL Certificate Management](https://yundun.console.alibabacloud.com/?p=cas#/certExtend/buy/ap-southeast-1) page, and on the **Commercial Certificates** tab, click **Create Certificate**.
        
        -   **Remaining Managed Service Count**: The number of remaining managed services. This value is displayed next to **Available Quota for Hosting Service:** in the **Validity Period (Years)** field.
            
        -   **Remaining Certificate Quota**: After you select a **Certificate Type**, you can click the **Certificate Specifications** drop-down list to view the remaining certificate quota for each specification. This quota is displayed as "Number of certificates that can be requested".
            
4.  After the renewal is complete, the certificate status for different renewal periods is as follows:
    
    #### **1 Year**
    
    A new certificate is generated below the original certificate. It is associated with the original certificate, is marked with an ![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4099409571/p1009350.png) icon on the left, and has a status of **Pending Application**. The validity period of the original certificate remains unchanged.
    
    #### **2 Years**
    
    Two new certificates associated with the original one are generated below it. The new certificates have an ![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4099409571/p1009350.png) icon on the left to indicate their association. The validity period of the original certificate is not affected.
    
    -   The status of the first certificate is **Pending Application**.
        
    -   The status of the second certificate is **Not Activated**.
        
        **Note**
        
        If you cancel a **Not Activated** certificate, your certificate and managed service quotas are restored. To reuse these quotas, follow the instructions in [Create an SSL Certificate](/help/en/ssl-certificate/create-a-certificate).
        
    
    #### **3 Years**
    
    Three new certificates associated with the original one are generated below it. The new certificates have an ![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4099409571/p1009350.png) icon on the left to indicate their association. The validity period of the original certificate is not affected.
    
    -   The status of the first certificate is **Pending Application**.
        
    -   The status of the 2nd and 3rd certificates is **Not Activated**.
        
        **Note**
        
        If you cancel a **Not Activated** certificate, your certificate and managed service quotas are restored. To reuse these quotas, follow the instructions in [Create an SSL Certificate](/help/en/ssl-certificate/create-a-certificate).
        
    

### **Step 2: Submit the certificate request**

The next step depends on the certificate's status:

-   **Not Activated**: When the current certificate expires in 30 days or less, the managed service automatically initiates the certificate application process.
    
-   **Pending Application**: [Submit a request to the certification authority (CA)](/help/en/ssl-certificate/apply-for-a-certificate) and [complete domain ownership verification](/help/en/ssl-certificate/verify-the-ownership-of-a-domain-name).
    
-   **Validating Application**: The application has been submitted to the certificate authority (CA). Follow the instructions in [Handle CA review results](/help/en/ssl-certificate/application-review-results-processing) to complete the certificate issuance.
    

### **Step 3: Deploy and verify the new certificate**

1.  Deploy the certificate.
    
    -   Confirm the status of the managed deployment task.
        
        If the previous certificate was deployed to an Alibaba Cloud service (such as ALB, WAF, CDN, or DDoS) and a managed deployment task was automatically created for the current certificate, follow these steps to view the task details and confirm the deployment result:
        
        -   Go to the [Hosted Deployment for Cloud Services](https://yundun.console.alibabacloud.com/?p=cas#/deployTrustee/ap-southeast-1) page.
            
        -   In the **Certificate Resource ID** column, find the deployment task that corresponds to the **Resource ID** of your certificate. You can find this ID in the **Certificate** column of the certificate list.
            
        -   To view the progress and other details of the task, click **Details** in the **Actions** column.
            
        
        **Note**
        
        After the current certificate is issued, the system deploys it through [Managed Deployment for Cloud Services](/help/en/ssl-certificate/manage-alibaba-cloud-services-to-which-hosted-certificates-are-deployed). If the deployment fails, the system sends a notification by email and internal message.
        
    -   Manually deploy to the destination server.
        
        For more information, see [Select a deployment solution for an SSL certificate](/help/en/ssl-certificate/ssl-certificate-deployment-scheme-selection). Deploy the new certificate to your web application server or cloud service to replace the original one.
        
2.  Verify the certificate.
    
    1.  In a browser such as Chrome, enter `https://domain_name` in the address bar and access the website.
        
    2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9453637371/p901991.png) icon, and then click **Connection is secure** > **Certificate is valid** in the pop-up panel.
        
    3.  In the panel that appears, check **General** > **Expires On**. The new certificate is deployed successfully if the date matches the expiration date of the new certificate.
        

## **Renew an uploaded certificate**

On the **Uploaded** tab of the [SSL Certificate Management](https://yundun.console.alibabacloud.com/?p=cas#/certExtend/buy/ap-southeast-1) page, you can locate the target certificate and perform operations based on its **Status**.

**Note**

If the **Status** is **PCA** (an SSL certificate created by the PCA product), reissue the PCA certificate and then [Sync to SSL Certificate](/help/en/ssl-certificate/upload-an-ssl-certificate#40c4c920b9vml).

### **Pending Expiration**

### Step 1: **Purchase a certificate**

**Important**

After you purchase and issue the certificate, you receive a new paid certificate with a 12-month validity period that starts from the date of issuance. The new certificate does not carry over the remaining validity period of the original certificate.

1.  In the **Actions** column, click **Update**. On the purchase page, enter the following information.
    
    -   **Certificate Type**
        
        -   **Single Domain**: Protects a primary domain name, a subdomain, or a public IP address (IPv4). For example: `aliyun.com`, `abc.aliyun.com`, or `1.1.X.X`.
            
        -   **Wildcard Domain**: Protects one primary domain name and all its immediate subdomains. For example, a certificate for `*.aliyun.com` can protect `a.aliyun.com`, but not `b.a.aliyun.com`.
            
        -   **Multi-domain**: Protects up to five single domain names. You cannot attach wildcard domain names.
            
    -   **Brand**
        
        Supported brands include **Alibaba Cloud**, **DigiCert**, and **GlobalSign**. For more information, see [SSL Certificate Selection Guide](/help/en/ssl-certificate/functions-and-features#27107d9412qy2).
        
    -   **Certificate Specifications**
        
        **Certificate Type**
        
        **Scenarios**
        
        **Average issuance time**
        
        **DV Certificate**
        
        Personal websites, enterprise test environments
        
        1 to 15 minutes.
        
        **OV Certificate**
        
        Government organizations, small and medium-sized enterprises, or educational institutions
        
        5 calendar days
        
        **EV Certificate**
        
        Large enterprises, financial institutions, and e-commerce sites that handle transactions and private data
        
        5 calendar days
        
    -   **Service Duration**
        
        #### **1 Year**
        
        -   **Includes**: One paid SSL certificate of the specified specifications with a 1-year validity period.
            
        -   **Application process**: After purchase, you must manually submit the certificate request from the certificate list.
            
        
        #### **2 Years**
        
        -   **Includes**: Two paid SSL certificates of the specified specifications, each with a 1-year validity period, and one use of the Managed Service.
            
            **Note**
            
            The [Managed Service](/help/en/ssl-certificate/overview-1) includes automatic certificate requests before expiration , carrying over the remaining validity period (up to 30 days), and dedicated technical support.
            
        -   **Application process**:
            
            -   **First certificate**: After purchase, you must manually submit the certificate request from the certificate list.
                
            -   **Second certificate**: When the first certificate has 15 days or less of remaining validity, one use of the Managed Service is automatically consumed to start the application process for the second certificate.
                
            
            **Note**
            
            For the system to automatically start the certificate application process through the Managed Service, the following conditions must be met. Otherwise, you must submit the request manually.
            
            -   For a DV certificate, the Alibaba Cloud account that uses [Alibaba Cloud DNS](https://dnsnext.console.alibabacloud.com/overview) for the domain name must be the same as the account that purchased the certificate, or the domain name must have [validation-free authorization](/help/en/ssl-certificate/domain-name-level-authorization-for-verification-free-issuance) completed.
                
            -   The certificate application information and materials are valid, as determined by the CA.
                
            
        
        #### **3 Years**
        
        -   **Includes**: Three paid SSL certificates of the specified specifications, each with a 1-year validity period, and two uses of the Managed Service.
            
            **Note**
            
            The [Managed Service](/help/en/ssl-certificate/overview-1) includes automatic certificate requests before expiration , carrying over the remaining validity period (up to 30 days), and dedicated technical support.
            
        -   **Application process**:
            
            -   **First certificate**: After purchase, you must manually submit the certificate request from the certificate list.
                
            -   **Subsequent certificates**: When the previous certificate has 15 days or less of remaining validity, one use of the Managed Service is automatically consumed to start the application process for the next certificate.
                
            
            **Note**
            
            For the system to automatically start the certificate application process through the Managed Service, the following conditions must be met. Otherwise, you must submit the request manually.
            
            -   For a DV certificate, the Alibaba Cloud account that uses [Alibaba Cloud DNS](https://dnsnext.console.alibabacloud.com/overview) for the domain name must be the same as the account that purchased the certificate, or the domain name must have [validation-free authorization](/help/en/ssl-certificate/domain-name-level-authorization-for-verification-free-issuance) completed.
                
            -   The certificate application information and materials are valid, as determined by the CA.
                
            
        
2.  Click **Buy Now** and follow the on-screen instructions to complete the payment.
    
    -   Payment rule: The system first uses your remaining certificate quota for the same specifications and your remaining Managed Service uses to offset the cost. You must pay for any shortfall.
        
    -   To view your remaining certificate quota and the number of available managed services, go to the **Commercial Certificates** tab on the [SSL Certificate Management](https://yundun.console.alibabacloud.com/?p=cas#/certExtend/buy/ap-southeast-1) page and click **Create Certificate**:
        
        -   Remaining managed service count: This is the value for **Available Quota for Hosting Service:** in the **Validity Period (Years)** field.
            
        -   Remaining certificate quota: After you select a **Certificate Type** and a **Certificate Specifications**, the remaining quota for that specification is displayed as 'Number of certificates that can be requested'.
            
3.  After the purchase is complete, the certificate status for different periods is as follows:
    
    #### **1 Year**
    
    A new certificate is generated below the original certificate. It is associated with the original certificate, is marked with an ![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4099409571/p1009350.png) icon on the left, and has a status of **Pending Application**. The validity period of the original certificate remains unchanged.
    
    #### **2 Years**
    
    Two new certificates associated with the original one are generated below it. The new certificates have an ![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4099409571/p1009350.png) icon on the left to indicate their association. The validity period of the original certificate is not affected.
    
    -   The status of the first certificate is **Pending Application**.
        
    -   The status of the second certificate is **Not Activated**.
        
        **Note**
        
        If you cancel a **Not Activated** certificate, your certificate and managed service quotas are restored. To reuse these quotas, follow the instructions in [Create an SSL Certificate](/help/en/ssl-certificate/create-a-certificate).
        
    
    #### **3 Years**
    
    Three new certificates associated with the original one are generated below it. The new certificates have an ![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4099409571/p1009350.png) icon on the left to indicate their association. The validity period of the original certificate is not affected.
    
    -   The status of the first certificate is **Pending Application**.
        
    -   The status of the 2nd and 3rd certificates is **Not Activated**.
        
        **Note**
        
        If you cancel a **Not Activated** certificate, your certificate and managed service quotas are restored. To reuse these quotas, follow the instructions in [Create an SSL Certificate](/help/en/ssl-certificate/create-a-certificate).
        
    

#### **Step 2: Submit the certificate request**

The next step depends on the certificate's status:

-   **Not Activated**: When the current certificate has 30 days or less left in its validity period, the managed service automatically starts the application process for a new certificate.
    
-   **Pending Application**: [Submit a request to the certification authority (CA)](/help/en/ssl-certificate/apply-for-a-certificate) and complete [domain ownership verification](/help/en/ssl-certificate/verify-the-ownership-of-a-domain-name).
    
-   **Validating Application**: See [Handling CA review results](/help/en/ssl-certificate/application-review-results-processing) and work with the CA to complete the certificate issuance.
    

#### **Step 3: Deploy and verify the new certificate**

1.  Deploy the certificate.
    
    -   Confirm the status of the managed deployment task.
        
        If the previous certificate was deployed to an Alibaba Cloud service (such as ALB, WAF, CDN, or DDoS) and a managed deployment task was automatically created for the current certificate, follow these steps to view the task details and confirm the deployment result:
        
        -   Go to the [Hosted Deployment for Cloud Services](https://yundun.console.alibabacloud.com/?p=cas#/deployTrustee/ap-southeast-1) page.
            
        -   In the **Certificate Resource ID** column, find the deployment task that corresponds to the **Resource ID** of your certificate. You can find this ID in the **Certificate** column of the certificate list.
            
        -   To view the progress and other details of the task, click **Details** in the **Actions** column.
            
        
        **Note**
        
        After the current certificate is issued, the system deploys it through [Managed Deployment for Cloud Services](/help/en/ssl-certificate/manage-alibaba-cloud-services-to-which-hosted-certificates-are-deployed). If the deployment fails, the system sends a notification by email and internal message.
        
    -   Manually deploy to the destination server.
        
        For more information, see [Select a deployment solution for an SSL certificate](/help/en/ssl-certificate/ssl-certificate-deployment-scheme-selection). Deploy the new certificate to your web application server or cloud service to replace the original one.
        
2.  Verify the certificate.
    
    1.  In a browser such as Chrome, enter `https://domain_name` in the address bar and access the website.
        
    2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9453637371/p901991.png) icon, and then click **Connection is secure** > **Certificate is valid** in the pop-up panel.
        
    3.  In the panel that appears, check **General** > **Expires On**. The new certificate is deployed successfully if the date matches the expiration date of the new certificate.
        

### **Expired**

Click **Actions** > **Purchase Certificate**, and follow the instructions in [SSL Certificate Usage Flow](/help/en/ssl-certificate/ssl-certificate-usage-process-overview) to purchase, create, request, and deploy a certificate.

**Important**

After you purchase and issue the certificate, you receive a new paid certificate with a 12-month validity period that starts from the date of issuance. The new certificate does not carry over the remaining validity period of the original certificate.

## FAQ

### **Renewal basics**

#### **What is the difference between renewing and purchasing a new certificate?**

-   **Commercial Certificates**
    
    The main difference is that a renewed certificate can carry over the remaining validity period of the original certificate, but a newly purchased one cannot.
    
    -   **Certificate renewal:** A new certificate issued through renewal carries over up to 30 days of the original certificate's remaining validity period, ensuring a smooth transition. For more information, see [Validity period calculation for the new certificate](#9ee3f377067ob).
        
    -   **Direct purchase**: The validity period of a directly purchased certificate starts from its issuance date and does not carry over the remaining validity of the original certificate. This may result in a waste of the original certificate's validity period.
        
-   **Uploaded**
    
    For these certificate types, the validity period starts from the new certificate's issuance date and does not carry over the remaining validity of the original certificate. The main difference is the operational process for obtaining the new certificate.
    
    -   **Certificate renewal:** When the original certificate has 30 days or less of remaining validity, the Managed Service automatically starts the application process for the new certificate. If the conditions for automatic submission are not met, you must submit it manually.
        
    -   **Direct purchase:** You need to monitor the certificate's expiration date and manually complete the entire process of purchasing and requesting a new certificate.
        

#### **Why is the validity period only one year for a multi-year (for example, 2-year or 3-year) certificate that I renewed or purchased?**

-   According to industry regulations from the CA/Browser Forum, the maximum validity period for a single issuance of any publicly trusted SSL certificate is 397 days (about 13 months). Therefore, a multi-year certificate that you renew or purchase is a combination of multiple 1-year certificates and the Managed Service.
    
-   Through the Managed Service, the system automatically requests the next 1-year certificate when the first one is about to expire. If the submission fails, you must submit it manually. You only need to cooperate with domain ownership validation (if required) and the CA review, and then **re-deploy the new certificate annually**.
    

### **Renewal operation issues**

#### **Why can't I find the renewal option in the certificate list?**

The visibility of the renewal option depends on the certificate type and status. Make sure the following conditions are met:

-   **Commercial Certificates**: The certificate status is **Pending Expiration**. It is not a multi-domain certificate.
    
-   **Uploaded**: The certificate has a status of **Uploaded** and is not a PCA certificate.
    

#### **Why is renewing more expensive than purchasing a new certificate?**

If you "renew a certificate in advance" when it has more than 30 days of remaining validity, the order automatically includes a fee for the "Managed Service". This service is used to automatically submit the certificate request when the remaining validity is 30 days or less. If the submission fails, you must submit it manually.

**Note**

If you do not need the Managed Service, you can wait to renew the certificate until it has 30 days or less of remaining validity. In this case, for a 1-year service period, you are not charged the Managed Service fee.

-   Allow enough time for the request and issuance process. OV or EV certificates, in particular, may require manual review and take longer to issue.
    
-   Always perform the operation in advance to avoid service interruptions on your website, which can happen if the request takes too long and the new and original certificates do not have overlapping validity periods.
    

#### **Why are there two identical certificate records in the list after I renewed?**

Depending on the certificate service period you selected during renewal, one or more new certificates appear below the original certificate. They have an ![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4099409571/p1009350.png) icon on the left to indicate their association with the original certificate.

### **Post-renewal deployment issues**

#### **After I successfully renewed and paid for my certificate, why does my website still show a "certificate expiring soon" warning?**

The renewal process issues a brand new certificate. For more information, see [Select a deployment solution for an SSL certificate](/help/en/ssl-certificate/ssl-certificate-deployment-scheme-selection). You must deploy the new certificate to your web application server or cloud service to replace the original one.

#### **After I renewed and deployed the new certificate, why does my website still show an "insecure" or "certificate expired" warning?**

Check the following items:

1.  **Confirm the correct certificate file is deployed**: Make sure you have deployed the newly issued certificate file on your server, not the original one.
    
2.  **Confirm the web service has been restarted**: After you replace the certificate file on web servers such as Nginx, Apache, Tomcat, or IIS, you must **restart or reload the service** for the new certificate to take effect.
    
3.  **Clear your browser cache**: Your browser may have cached the original certificate's status. Try **force-refreshing the page (Ctrl+F5)**, **clearing the browser cache**, or visiting the site in **incognito/private mode**.
    
4.  **Check intermediate services such as CDN or WAF**: If your website uses services such as Content Delivery Network (CDN), Web Application Firewall (WAF), Global Accelerator (GA), or Server Load Balancer (SLB), **you must also update the certificate to the new one in the consoles of these products**. Otherwise, users still access the old certificate on these intermediate products.
    
5.  **Confirm the certificate chain is complete**: The certificate file downloaded from Alibaba Cloud usually includes the complete certificate chain. If you are concatenating it yourself, make sure to include the server certificate and all intermediate certificates.
    

### **Emergency handling for expired certificates**

#### **My certificate has expired, causing a service interruption. What are the emergency steps to quickly restore service?**

If a service interruption is caused by an expired certificate, follow this emergency procedure to restore service quickly. You can replace it with a paid certificate later.

1.  **Purchase a certificate**: Immediately purchase a Domain Validated (DV) certificate as a temporary solution. DV certificates have a simple validation process and are issued quickly.
    
2.  **Request the certificate**: During the validation step, choose the DNS validation method. This usually completes domain ownership verification within 10 minutes.
    
    **Note**
    
    While waiting for the certificate to be issued, find the location of the original certificate on your server to prepare for replacement.
    
3.  **Deploy the certificate**: After the new certificate is issued, immediately deploy it to your web application server (such as Nginx or Apache) or cloud service to make the new certificate take effect.
    
4.  **Replace the temporary certificate**: The DV certificate is only a temporary solution. After service is restored, request a certificate with your original specifications (such as OV or EV) and replace the DV certificate as soon as possible.
    

**Important**

To prevent this from happening again, enable [SSL certificate message notifications](/help/en/ssl-certificate/custom-message-alert) and renew your certificate in advance. You can also purchase a the [Managed Service](/help/en/ssl-certificate/overview-1). The Managed Service automatically submits a certificate request when the certificate has less than 30 days of validity remaining.
