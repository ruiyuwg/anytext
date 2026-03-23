Learn how to select and purchase the right SSL certificate on Alibaba Cloud.

## Guide to choosing an SSL certificate

This guide helps you make the right selections during the [Step 1: Configure certificate](#939fd243b74jg) of your purchase.

### **Certificate type**

-   To protect a single domain name (such as `aliyun.com`): Select a **Single Domain** certificate.
    
-   To protect an apex domain and all its subdomains (such as `aliyun.com` and `*.aliyun.com`): Select a **Wildcard Domain** certificate.
    
-   To protect multiple, different domains with one certificate**:** (such as `aliyun.com` and `taobao.com`): Select a **Multi-Domain** certificate.
    

**Note**

When you purchase certain certificates, the system automatically includes a free associated domain. For details, see [Complimentary domains for SSL certificates](#76862b1bc0t89).

### **Certificate specifications**

-   For personal websites or development and testing environments: Select a **Domain Validated (DV)** certificate. This low-cost option requires only domain ownership verification and is typically issued automatically within 1 to 15 minutes.
    
-   For corporate websites or internal information systems**:** Select an **OV (Organization Validated)** certificate. It provides higher security by verifying your organization's identity, displays its name in the certificate details, and is typically issued in 5 calendar days.
    
-   For websites with high-security requirements, such as finance, e-commerce, or government: Select an **EV (Extended Validation)** certificate. It provides the highest level of trust through the strictest identity verification, displays the full legal organization name, and is typically issued in 5 calendar days.
    

### **Brand**

-   For a top-tier brand and global trust: Select **DigiCert**.
    
-   For a stable and reliable international brand: Select **GlobalSign**.
    
-   For a cost-effective option: Select **Alibaba Cloud**.
    

**Note**

For a more comprehensive selection guide, see [Selection guide](/help/en/ssl-certificate/functions-and-features).

## **Procedure**

The certificate acquisition process involves the following phases: purchasing a certificate on the [Certificate Service console](https://yundun.console.alibabacloud.com/?p=cas), and then submitting your application for certificate authority (CA) review and issuance.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3887793771/CAEQTBiBgMDi5I2EyxkiIDIyZGJiZjE3ZmMzMzQ2Yzg5NDFhNTlkZTVjNmFiNzA04902179_20250220110912.499.svg)

### **Step 1:** Configure certificate

Go to the [SSL Certificate Management](https://yundun.console.alibabacloud.com/?p=cas#/certExtend/buy/ap-southeast-1) page, click **Commercial Certificates** > **Purchase Certificate**, and then fill in the required certificate parameters by referring to the configuration details below.

-   **Domain Type**
    
    -   **Single Domain**: An SSL certificate is attached to a primary domain name, a subdomain, or a public IP address (IPv4). Examples: `aliyun.com`, `abc.example.com`, and `1.1.X.X`.
        
    -   **Wildcard Domain**: A wildcard certificate is used to protect a primary domain name and all its first-level subdomains.
        
        -   **Matching rules:** Matches only subdomains at the same level. It cannot match subdomains across multiple levels. For example, a certificate for `*.aliyun.com` can match `demo.aliyun.com`, but cannot match `guide.demo.aliyun.com`.
            
        -   **Limits:** By default, a certificate supports only one wildcard domain name. To include multiple wildcard domain names in a single certificate, see [Merge certificate requests](/help/en/ssl-certificate/combine-certificates#task-2001851).
            
    -   **Multiple Domains**: Used to attach multiple single domain names at the same time. You can attach up to five single domain names. Only single domain names are supported. Wildcard domain names are not supported.
        
-   **Brand**
    
    Supports DigiCert, GlobalSign, and Alibaba Cloud. For more information, see [Selection guide](/help/en/ssl-certificate/functions-and-features#concept-2022103).
    
    **Important**
    
    DigiCert does not issue certificates for domains with special suffixes such as `.edu`, `.gov`, `.org`, `.jp`, `.pay`, `.bank`, `.live`, `.nuclear`, or `.ru`.
    
-   **Certificate Specifications**
    
    The available certificate types vary based on the domain type.
    
    -   **OV SSL**: Verifies both domain ownership and the organization's identity. Best for government entities, small- to medium-sized enterprises, or educational institutions. **OV\_PRO SSL** offers a higher level of encryption and security than **OV SSL**.
        
    -   ****DV SSL****: Verifies domain ownership only. Best for personal websites, brochure sites, or test environments. Offers the fastest issuance and lowest cost.
        
    -   **EV SSL**: Involves the most rigorous corporate identity verification. Best for large enterprises, financial institutions, and e-commerce sites that handle transactions and sensitive user data. **EV\_PRO SSL** offers a higher level of encryption and security than **EV SSL**.
        
-   **Domain Names**
    
    The number of domains to secure with this certificate. Set this parameter only when you select the **Multi-Domain** type.
    
-   **Quantity**
    
    The number of SSL certificates. This is fixed at 1.
    
-   **Service Duration**
    
    -   **1 Year**: Includes one certificate with a 1-year validity period. Hosting services are not included.
        
    -   **2 Years**: Includes two certificates, each with a 1-year validity period, and one [hosting service](/help/en/ssl-certificate/overview-1#task-2516632). The CA issues one certificate initially. The system automatically requests a second certificate when the first one has less than 30 days of validity remaining.
        
    -   **3 Years**: Includes three certificates, each with a 1-year validity period, and two [hosting service](/help/en/ssl-certificate/overview-1#task-2516632). The CA issues one certificate initially. Subsequent certificates are automatically requested when the current one has less than 30 days of validity remaining.
        

**Important**

For purchase questions, contact an expert by filling out the form on the [product](https://www.alibabacloud.com/zh/product/certificates?_p_lc=1&spm=a3c0i.7911826.6791778070.186.6ef92129onMgGX) page.

### **Step 2:** Confirm and pay for your order

Click **Buy Now**. Read and agree to the **Terms of Service**, and then click **Pay** to complete the payment. After purchase, you can find the order for the SSL certificate on the [Order Refund Management](https://yundun.console.alibabacloud.com/?p=cas#/order/) page.

### **Step 3:** **View the purchased certificate**

After purchase, the certificate appears in the **Certificates** with the status **Pending Application**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7306028571/p1008567.png)

## **Next step**

[Submit an application to the CA (certification authority)](/help/en/ssl-certificate/apply-for-a-certificate) to issue a certificate. The CA reviews the application and issues the certificate after approval.

## Complimentary domain**s for SSL certificates**

When you purchase a certificate that meets certain conditions, a complimentary domain is automatically included to secure both the www and non-www versions of your site. The complimentary rules vary by certificate type and brand.

### **Conditions**

#### **GlobalSign**

-   **DV:** The domain validation must be DNS validation.
    
-   **OV:** No special restrictions.
    
-   **EV:** The domain must be an apex domain.
    

#### **DigiCert**

-   **DV:** The domain validation must be DNS validation.
    
-   **OV, EV:** The domain must be an apex domain.
    

#### **Alibaba Cloud**

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
    

## **Billing**

The final price for all billable items is subject to the price displayed on the purchase page. For details, see [SSL certificates billing](/help/en/ssl-certificate/product-overview/billing-overview).

## **FAQ**

### **What do I do if I chose the wrong certificate information (such type or brand) during purchase?**

Follow the instructions below based on your certificate's status and purchase date:

-   Within 7 days of purchase AND the certificate has not been issued:  
    Go to the **Refund Management** page to request a full refund. You can then purchase the correct certificate.
    
-   More than 7 days after purchase OR the certificate has already been issued:  
    A refund is not supported. For security reasons, [revoke and delete the SSL Certificate](/help/en/ssl-certificate/revoke-and-delete-a-certificate).
    

### **What if I entered the wrong domain when submitting the application to CA?**

If the certificate has not yet been issued by the CA, simply cancel the application.

This will make your purchased certificate available again, allowing you to start a new application with the correct domain name by clicking **Create Certificate**. The certificate will appear in the Unused section, ready to be configured.

However, if the certificate has already been issued, the domain cannot be changed.

* * *
