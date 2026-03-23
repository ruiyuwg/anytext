Private certificate authorities (CAs) are used to issue and manage digital certificates for internal organizational needs. They are essential for securing internal networks and enabling certificate-based authentication for private resources such as VPNs, and internal web applications. This topic describes how to purchase and enable the Private CA service.

With a private CA, you can configure a CA hierarchy and customize the issuer's identity and organizational information. This allows you to create multi-level intermediate CAs to match your enterprise's organizational structure.

### **Step 1: Purchase a private root CA**

To create a private CA for the first time, you must purchase a private root CA. Upon purchase, you receive one root CA and one subordinate CA. The root CA includes a quota of 10 private certificates by default. You can assign them to **enabled subordinate CAs** to issue private certificates.

1.  Log on to the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas).
    
2.  In the left navigation pane, choose **Certificate Management** > **PCA Certificate Management**. On the **PCA Certificate Management** page, select the region where the PCA service is located.
    
3.  On the **Private CAs** tab, click **Purchase Private Root CA**.
    
4.  On the buy page, select the certificate algorithm and duration, click **Buy Now**, and complete the payment.
    
    -   **Algorithm**: The encryption algorithm used to issue certificates. Options: **RSA**, **Chinese Cryptographic Algorithm (SM)**, **ECC**.
        
    -   **Subscription Duration**: Select the Private CA service usage duration. You can issue certificates within this period.
        
        **Important**
        
        -   After the service expires, you can no longer issue certificates, even if you have remaining certificate quota.
            
        -   The validity period of a certificate issued by the CA cannot exceed the purchase duration of the Private CA service. For example, if you purchase 1 month of Private CA service, the validity of issued certificates cannot exceed 30 days.
            
        
    

### **Step 2: Enable the private root CA and subordinate CA**

Once purchased, the private root CA must be enabled before the subordinate CA can be enabled.

#### **Enable the root CA**

1.  On the **Private CAs** tab, find the target root CA. In the **Actions** column, click **Enable**.
    
2.  In the **CA Information** panel, configure the root CA information and click **Confirm and Enable**.
    
    The Certificate Management Service supports multiple ways to enable a root CA. Select a method as needed:
    
    #### **Create CA Certificate**
    
    **Parameter**
    
    **Description**
    
    **Enable Mode**
    
    Select **Create CA Certificate**.
    
    **Common Name (CN)**
    
    The common name or abbreviation of the organization. Chinese and English are supported.
    
    Example: Alibaba Cloud.
    
    **Organizational Unit (OU)**
    
    The organizational unit name. Chinese and English are supported.
    
    Example: IT Dept.
    
    **Organization (O)**
    
    The organization's name. Chinese and English are supported.
    
    Example: Alibaba Cloud.
    
    **City (L)**
    
    The organization's city. Chinese and English are supported.
    
    Example: Hangzhou.
    
    **Province (S)**
    
    The organization's state or province. Chinese and English are supported.
    
    Example: Zhejiang.
    
    **Country/Region (C)**
    
    The organization's country or region. Chinese and English are supported.
    
    Example: China.
    
    **Private Key Algorithm**
    
    The private key encryption algorithm used by the CA.
    
    Available private key algorithms depend on the **Certificate Algorithm** selected during purchase:
    
    -   If the algorithm is **RSA**, options include: **RSA\_1024**, **RSA\_2048**, **RSA\_4096**.
        
    -   If the algorithm is Chinese Cryptographic Algorithm (SM), options include: **SM2\_256**.
        
    -   If the algorithm is **ECC**, options include: **ECC\_256**, **ECC\_384**, **ECC\_512**.
        
    
    **Validity Period**
    
    The validity period of the root CA.
    
    The validity period depends on the duration of the root CA service you purchased:
    
    -   If the duration is < 1 year, the supported validity range is 1 to 20 years.
        
    -   If the duration is ≥ 1 year, the supported validity range is 1 to 100 years.
        
    
    **Note**
    
    You can issue certificates only while the Private CA service is active. After the service expires, you cannot issue new certificates, and unused private certificate resources become unavailable.
    
    **Enable CRL Service**
    
    Specify whether to enable the Certificate Revocation List (CRL) service. If enabled, you can view revoked CA certificates through the CRL. For more information, see [CRL Service](/help/en/ssl-certificate/use-the-crl-feature#title-5au-233-v0b).
    
    #### **Upload CA Certificate and Private Key**
    
    **Parameter**
    
    **Description**
    
    **Enable Mode**
    
    Select **Upload CA Certificate and Private Key**.
    
    **Certificate File**
    
    Enter the PEM-encoded content of the certificate file.
    
    Use a text editor to open the PEM or CRT certificate file, copy the content, and paste it into this field. Alternatively, click **Upload and Parse File** below the field, select the certificate file from your local computer, and upload its content.
    
    **Certificate Key**
    
    Enter the PEM-encoded content of the certificate private key.
    
    Use a text editor to open the KEY certificate private key file, copy the content, and paste it into this field. Alternatively, click **Upload and Parse File** below the field, select the private key file from your local computer, and upload its content.
    
3.  In the **Tip** dialog box, review the information and click **OK**.
    
    After you successfully enable the root CA, its state changes to Enabled. If you need to modify incorrect CA information, reset the CA. For details, see [Reset a private CA](/help/en/ssl-certificate/reset-a-private-ca-or-a-compliant-ca).
    

#### **Enable the subordinate CA**

1.  On the **Private CAs** tab, find the target root CA and click the ![Fold icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0326254661/p476614.png) icon next to its name.
    
2.  Locate the target subordinate CA. In the **Actions** column, click **Enable**.
    
3.  In the **CA Information** panel, configure the subordinate CA information and click **Confirm and Enable**.
    
    The Certificate Management Service supports multiple ways to enable a subordinate CA. Select a method as needed:
    
    #### **Create CA Certificate**
    
    **Parameter**
    
    **Description**
    
    **Enable Mode**
    
    Select **Create CA Certificate**.
    
    **CA Usage**
    
    Select **Intermediate CA** or **User CA** based on the subordinate CA's purpose.
    
    -   Intermediate CA: Can be used to issue subordinate CAs.
        
    -   User CA: Can only be used to issue user certificates, such as server or client certificates.
        
    
    **Length Limit**
    
    When **CA Usage** is set to **Intermediate CA**, you must configure the path length constraint, which indicates the maximum depth of subordinate CAs that this intermediate CA can issue.
    
    Values range from 1 to 5.
    
    **Important**
    
    If **Length Limit** is 1, the subordinate CA must be a User CA.
    
    **Common Name (CN)**
    
    The common name or abbreviation of the organization. Chinese and English are supported.
    
    Example: Alibaba Cloud.
    
    **Organizational Unit (OU)**
    
    The organizational unit name. Chinese and English are supported.
    
    Example: IT Dept.
    
    **Organization (O)**
    
    The organization's name. Chinese and English are supported.
    
    Example: Alibaba Cloud.
    
    **City (L)**
    
    The organization's city. Chinese and English are supported.
    
    Example: Hangzhou.
    
    **Province (S)**
    
    The organization's state or province. Chinese and English are supported.
    
    Example: Zhejiang.
    
    **Country/Region (C)**
    
    The organization's country or region. Chinese and English are supported.
    
    Example: China.
    
    **Private Key Algorithm**
    
    The private key encryption algorithm used by the CA.
    
    Available private key algorithms depend on the **Certificate Algorithm** selected during purchase:
    
    -   If the algorithm is **RSA**, options include: **RSA\_1024**, **RSA\_2048**, **RSA\_4096**.
        
    -   If the algorithm is **Chinese Cryptographic Algorithm (SM)**, options include: **SM2\_256**.
        
    -   If the algorithm is **ECC**, options include: **ECC\_256**, **ECC\_384**, **ECC\_512**.
        
    
    **Validity Period**
    
    The validity period of the subordinate CA.
    
    The validity period depends on the duration of the private subordinate CA you purchased:
    
    -   If the purchase duration is < 1 year, the subordinate CA validity range is 1 to 20 years.
        
    -   If the purchase duration is ≥ 1 year, the subordinate CA validity range is 1 to 100 years.
        
    
    **Enable CRL Service**
    
    Specify whether to enable the CRL service. If enabled, you can view revoked CA certificates through the CRL. For more information, see [CRL service](/help/en/ssl-certificate/use-the-crl-feature#task-2260582).
    
    **Extended Key Usage**
    
    Select the Extended Key Usage (EKU) extension to identify the purpose of the certificate.
    
    #### **Upload CA Certificate and Private Key**
    
    **Parameter**
    
    **Description**
    
    **Enable Mode**
    
    Select **Upload CA Certificate and Private Key**.
    
    **Certificate File**
    
    Enter the PEM-encoded content of the certificate file.
    
    Use a text editor to open the PEM or CRT certificate file, copy the content, and paste it into this field. Alternatively, click **Upload and Parse File** below the field, select the certificate file from your local computer, and upload its content.
    
    **Certificate Key**
    
    Enter the PEM-encoded content of the certificate private key.
    
    Use a text editor to open the KEY certificate private key file, copy the content, and paste it into this field. Alternatively, click **Upload and Parse File** below the field, select the private key file from your local computer, and upload its content.
    
4.  In the **Tip** dialog box, review the information and click **OK**.
    
    After you successfully enable the subordinate CA, its state changes to Enabled. If you need to modify incorrect CA information, you can reset the CA. For details, see [Reset a private CA](/help/en/ssl-certificate/reset-a-private-ca-or-a-compliant-ca).
    

### **Step 3: (Optional) Purchase a private** subordinate **CA**

You can create multiple subordinate CAs under an existing root CA to match your organizational structure (for example, separate subordinate CAs for different departments). Purchased subordinate CAs do not include any certificate quota by default.

1.  On the **Private CAs** tab, find the target root CA. In the **Actions** column, click **Create Private Intermediate CA**.
    
2.  In the **Certificate manager service** panel, configure the purchase settings.
    
    **Important**
    
    The algorithm used by the subordinate CA must match the root CA and cannot be changed.
    
3.  click **Buy Now**, then read and confirm **Terms of Service**. Follow the on-screen instructions to complete the payment.
    

### **Step 4: Configure private certificates**

After purchasing and enabling the private CA, configure private certificates. For details, see [Manage private certificates](/help/en/ssl-certificate/manage-private-certificates#task-2060470).
