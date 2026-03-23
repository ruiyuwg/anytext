HTTPS protects sensitive user data, boosts SEO rankings, and builds visitor trust. This guide walks you through securing your website by deploying an SSL certificate to Alibaba Cloud CDN or install it directly on an NGINX server.

## Before you begin

Ensure you have a domain (such as `www.example.com`) and choose a deployment path for [Step 3](#0eb3d5c3f1ttc):

-   Alibaba Cloud CDN (Recommended): Fastest setup. Requires an [active accelerated domain](/help/en/cdn/getting-started/quick-access-to-alibaba-cloud-cdn#69d1b5900e5kb). Deploy to edge nodes via the console without origin server changes.
    
-   NGINX server: Full control. Requires SSH access with sudo privileges, and a domain that resolves to the server's public IP address.
    

For other deployment targets:

-   Web servers (Apache/Tomcat/IIS): see [Deploy standard SSL certificates](/help/en/ssl-certificate/ssl-certificates-that-use-international-accepted-algorithms/).
    
-   Cloud services (SLB/WAF/API Gateway): see [Deploy certificates to cloud services](/help/en/ssl-certificate/installation-overview/#task-2078352).
    

**Important**

Websites serving users in Chinese mainland require an ICP filing. For more information, see [What is an ICP filing?](/help/en/icp-filing/basic-icp-service/product-overview/what-is-an-icp-filing#concept-nx4-hql-zdb).

## Step 1: Purchase a certificate

1.  Go to the [Commercial Certificates](https://yundun.console.aliyun.com/?spm=5176.12818093.overview_recent.1.3be916d0n3lxNk&p=cas#/certExtend/buy/ap-southeast-1?currentPage=1&pageSize=10&keyword=&statusCode=) tab of the Certificate Management Service console, click **Buy Now**.
    
2.  On the buy page, configure the following parameters and click **Buy Now** to complete the payment.
    
    **Parameter**
    
    **Example**
    
    **Description**
    
    **Certificate Type**
    
    Single Domain
    
    Protects one domain (such as `www.example.com`). Choose Wildcard for multiple subdomains (such as \*.example.com).
    
    **Brand**
    
    Alibaba Cloud
    
    Cost-effective for most use cases. Choose DigiCert for higher trust requirements.
    
    **Certificate Specifications**
    
    DV SSL
    
    Domain Validation issues in minutes. Choose organization validated (OV) SSL or extended validation (EV) SSL if you need organization verification (takes 1–5 business days).
    
    **Quantity**
    
    1
    
    Defaults to 1.
    
    **Service Duration**
    
    1 Year
    
    Maximum validity per industry standards.
    

## Step 2: Apply for the certificate

1.  Return to the [Commercial Certificates](https://yundun.console.aliyun.com/?spm=5176.12818093.overview_recent.1.3be916d0n3lxNk&p=cas#/certExtend/buy/ap-southeast-1?currentPage=1&pageSize=10&keyword=&statusCode=) tab, find the target certificate and click **Apply for Certificate** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0251925471/p944020.png)
    
2.  In the **Apply for Certificate** panel, configure the parameters and click **Submit**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0251925471/p944132.png)
    
    **Parameter**
    
    **Description**
    
    **Domains to Bind**
    
    Enter your accelerated domain.
    
    **Domain Verification Method**
    
    Select a verification method:
    
    -   **Automatic DNS Verification** — Use when your domain uses [Alibaba Cloud DNS](https://dnsnext.console.alibabacloud.com/?spm=0.2020520163.console-base.ddns.711euNGAuNGA0c#/dns/domainList).
        
    -   **Manual DNS Verification** — Use when you manage DNS elsewhere.
        
    -   **File Verification** — Use when you cannot modify DNS settings
        
    
    **Note**
    
    If you select **Manual DNS Verification** or **File Verification**, you must manually add the TXT record or upload the verification file at your DNS provider. For details, see [Verify domain name ownership](/help/en/ssl-certificate/verify-the-ownership-of-a-domain-name#task-2086114).
    
    **Contact**
    
    Select an existing contact or click **Create Contact** to create one.
    
    **Location**
    
    Select your location.
    
    **Encryption Algorithm**
    
    Select **RSA** for broad compatibility.
    
    **CSR Generation**
    
    Select ****Automatic**** to let Alibaba Cloud generate the certificate signing request automatically.
    
    DV certificates are typically issued within minutes after the accelerated domain is verified.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0557836371/p893366.png)
    

## Step 3: Deploy the certificate

After the certificate is issued, deploy it to enable HTTPS. Choose the method that matches your infrastructure.

## Deploy to CDN

Deploy directly from the console without modifying your origin server.

1.  Return to the [Commercial Certificates](https://yundun.console.aliyun.com/?spm=5176.12818093.overview_recent.1.3be916d0n3lxNk&p=cas#/certExtend/buy/ap-southeast-1?currentPage=1&pageSize=10&keyword=&statusCode=) tab, find your issued certificate and click **Deploy** in the **Actions** column.
    
2.  In the **Select Resource** step: Click **CDN** to filter resources, select the domain you want to protect, and click **Preview and Submit**.
    
    **Note**
    
    Cloud resources are synced automatically. If your domain is missing, check the sync status. A grayed-out **Synchronize Cloud Resources** button indicates a sync is in progress.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0557836371/p893620.png)
    
3.  In the **Task Preview** panel, confirm the selected resources and click **Submit**.
    
    Wait for deployment to complete (typically 5 minutes for CDN edge node propagation).
    
4.  Verify the deployment.
    
    1.  Log on to the [CDN console](https://cdn.console.alibabacloud.com). In the left navigation pane, click **Domain Names**. Then find the target domain name and click **Manage** in the **Actions** column.
        
    2.  In the domain's navigation pane, click **HTTPS**. Confirm that **HTTPS Certificate** shows **Enabled**.
        
    
    CDN synchronization may take a few minutes to complete.
    

## **Install on NGINX**

This section provides a quick overview. For detailed step-by-step instructions with code examples, see [Install an SSL certificate on an Nginx server (Linux)](/help/en/ssl-certificate/install-ssl-certificates-on-nginx-servers-or-tengine-servers#section-7za-kzt-kaj).

1.  Download the certificate.
    
2.  Upload certificate files to your server's configuration directory.
    
3.  Configure your `nginx.conf`.
    
4.  Restart the Nginx service**.**
    
    ```
    # Recommended: Test the configuration for syntax errors.
    sudo nginx -t
    # If NGINX is not running, start the service.
    sudo nginx
    # If NGINX is already running, reload the configuration to apply changes.
    sudo nginx -s reload
    ```
    

5\. Visit `https://<yourdomain>` in your browser to verify the installation.

-   If the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3288255371/p885852.png) icon appears in the address bar of your browser, the certificate is installed.
    
-   Starting in Google Chrome 117, the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3288255371/p885852.png) icon is changed to the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3288255371/p885866.png) icon. If the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3288255371/p885871.png) icon appears after you click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3288255371/p885866.png) icon, the certificate is installed.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3288255371/p888363.png)
    

## **Renewal**

Certificates expire after 1 year. To ensure service continuity, we recommend setting a renewal reminder and completing the renewal at least 30 days before expiration. For instructions, see [Configure notifications for SSL certificates](/help/en/ssl-certificate/custom-message-alert) and [Handling of certificates that are about to expire](/help/en/ssl-certificate/product-overview/billing-overview#p-fzs-mbh-122).

## References

-   Purchase, apply for, and issue DV certificates in a single workflow: [CreateCertificateRequest](/help/en/ssl-certificate/developer-reference/api-cas-2020-04-07-createcertificaterequest)
    
-   Purchase options and pricing: [SSL certificate selection guide](/help/en/ssl-certificate/functions-and-features)
