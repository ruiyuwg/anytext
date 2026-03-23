Managing SSL certificates from multiple sources is complex. Certificate Management Service centralizes your SSL certificates. Upload existing certificates, synchronize from an Alibaba Cloud private certificate authority (CA), and share between Alibaba Cloud accounts—all from a single console to streamline deployment and improve operational efficiency.

## **Centrally manage certificates from multiple sources**

-   **Certificate Sources**:
    
    -   **Uploaded certificates**: Upload certificates downloaded from Alibaba Cloud or obtained from any third-party provider.
        
    -   **Certificates from private CA**: Sync certificates issued by your own Alibaba Cloud private CA.
        
    -   **Shared certificates**: Access certificates shared from other Alibaba Cloud accounts that belongs to the same verified entity. These appear within the console for deployment, while the original owner retains lifecycle management.
        
-   **Core capabilities:**
    
    Managing your certificates in the console enables these key capabilities:
    
    -   **Unified monitoring**: Track the status, validity period, and deployments of all your certificates in the console.
        
    -   **Cloud products deployment**: Deploy managed certificates to various Alibaba Cloud products via the console, such as Server Load Balancer (SLB), Content Delivery Network (CDN), Web Application Firewall (WAF), Elastic Compute Service (ECS), and Simple Application Server.
        

## **Upload certificates**

### **Step 1: Prepare and verify the certificate files**

Before uploading, ensure your certificate files are in the PEM format (.pem or .crt), are complete, and match the private key.

1.  Ensure the certificate is in PEM format.
    
    To convert other formats, such as PFX, JKS, and PKCS8, use the provided SSL [Convert Certificate Format](https://www.google.com/url?sa=E&q=%2Fhelp%2Fen%2Fssl-certificate%2Fuser-guide%2Fuse-the-certificate-toolkit%23title-tnb-i8c-fc2) tool.
    
    1.  Log on to the [Certificate Management Service console](https://account.alibabacloud.com/login/login.htm?spm=5176.12901015-2.0.0.57a4525c5R9Yj3).
        
    2.  In the navigation pane on the left, choose **Common Certificate Tools** > **Convert Certificate Format**.
        
    3.  On the **Convert Certificate Format** page, configure the parameters as instructed and click **Submit**.
        
2.  (Optional) Ensure the certificate's public key and private key are a pair.
    
    ## **RSA certificates**
    
    ```
    # Compare the MD5 hashes of the modulus from the certificate and the private key. They must be identical.
    openssl x509 -noout -modulus -in certificate.pem | openssl md5
    openssl rsa -noout -modulus -in private.key | openssl md5
    ```
    
    ## **ECC certificates**
    
    ```
    # Compare the MD5 hashes of the public key extracted from the certificate and the private key. They must be identical.
    openssl x509 -in certificate.pem -pubkey -noout | openssl pkey -pubin -pubout -outform der | openssl md5
    openssl pkey -in private.key -pubout -outform der | openssl md5
    ```
    
    ## **SM2 certificates**
    
    SM certificates include two key pairs: one for signing and one for encryption. You must verify each pair separately.
    
    ```
    # Verify the signing certificate and the signing private key
    openssl x509 -in sign_cert.pem -pubkey -noout | openssl md5
    openssl pkey -in sign_private.key -pubout | openssl md5
    
    # Verify the encryption certificate and the encryption private key
    openssl x509 -in enc_cert.pem -pubkey -noout | openssl md5
    openssl pkey -in enc_private.key -pubout | openssl md5
    ```
    
    A mismatch is often caused by a password-protected private key. Use the `openssl rsa -in encrypted.key -out decrypted.key` command to remove the password and retry.
    

### **Step 2: Upload the certificate**

1.  Log on to the [Certificate Management Service console](https://account.alibabacloud.com/login/login.htm?spm=5176.12901015-2.0.0.57a4525c5R9Yj3).
    
2.  In the navigation pane on the left, choose **Certificate Management** > **SSL Certificate Management**.
    
3.  On the **Manage Uploaded Certificates** tab, click **Upload Certificate**.
    
4.  In the **Upload Certificate** panel, configure the parameters and click **OK**.
    
    ## **Internationally Accepted Algorithm**
    
    **Parameter**
    
    **Description**
    
    **Certificate Algorithm**
    
    Select **Internationally Accepted Algorithm** to support common algorithm such as RSA and ECC.
    
    **Certificate Name**
    
    Enter an easy-to-remember name, such as `example.com-2024-rsa`.
    
    **Certificate File**
    
    Enter the content of the certificate file (PEM encoded).
    
    ## Upload and parse file **(recommended)**
    
    Click **Upload and Parse File** and select the certificate file stored on your local computer. The system automatically parses the file content into the text box.
    
    ## **Manual entry**
    
    Open the PEM- or CRT-format certificate file with a text editor, copy its content, and paste it into this text box.
    
    -   If only the server certificate needs to be trusted, the certificate file must include the server certificate (①) and the intermediate certificate (②). If your server and intermediate certificates are in separate files, you can enter the intermediate certificate content in the **Certificate Chain** field.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7966602371/p854050.png)
        
    -   If both client- and server-side certificates are required to be trusted, the certificate file must include the server certificate (①), the intermediate certificate (②), and the root certificate (③). If your server, intermediate, and root certificates are in three separate files, you must concatenate the intermediate and root certificates in the order shown in the diagram and enter the combined content in the **Certificate Chain** field.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7966602371/p854067.png)
        
    
    **Certificate Key**
    
    Enter the content of the certificate private key (PEM encoded).
    
    ## Upload and parse file (recommended)
    
    Click **Upload and Parse File** and select the private key file stored on your local computer. The system automatically parses the file content into the text box.
    
    ## **Manual entry**
    
    Open the KEY-format private key file with a text editor. Copy its content and paste it into this text box. The format for the private key content is as follows:
    
    -   RSA
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7966602371/p854506.png)
        
    -   ECC
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7966602371/p854510.png)
        
    
    ## Select existing CSR
    
    You can select a CSR that was created or uploaded in the Certificate Management Service console. The system automatically matches the CSR with the corresponding certificate file. For more information about CSR operations, see [Manually create or upload a CSR](/help/en/ssl-certificate/manage-csrs).
    
    **Note**
    
    If you receive a "Certificate and private key do not match" error, the private key file may be malformed or password-protected. Use the `openssl rsa -in <OriginalPrivateKeyFileName> -out <CustomNewPrivateKeyFileName>` command to re-encode the key into a standard, unencrypted format before uploading it again.
    
    **Certificate Chain**
    
    **Optional**. Enter the intermediate certificate or root certificate (PEM encoded).
    
    **Note**
    
    If you entered the full certificate chain in the Certificate File field, skip this parameter.
    
    ## Upload and parse file **(recommended)**
    
    Click **Upload and Parse File** and select the certificate chain file stored on your local computer. The system automatically parses the file content into the text box.
    
    ## **Manual entry**
    
    Open the PEM- or CRT-format certificate chain file with a text editor. Copy its content and paste it into this text box. The format for the certificate chain content is as follows:
    
    -   Intermediate certificate or root certificate
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7966602371/p854068.png)
        
    -   Intermediate certificate (①) and root certificate (②)
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7966602371/p854513.png)
        
    
    **Resource Group**
    
    **Optional**. Configure this parameter based on your resource management policy.
    
    **Tag Key**, **Tag Value**
    
    **Optional**. Configure these parameters based on your resource management policy.
    
    ## **SM2 Algorithm**
    
    **Parameter**
    
    **Description**
    
    **Certificate Algorithm**
    
    Select **SM2 Algorithm**.
    
    **Certificate Name**
    
    Enter an easy-to-remember name, such as `example.com-2024-sm2`.
    
    **Certificate File**
    
    Enter the content of the **signing certificate file** (PEM encoded).
    
    Click **Upload and Parse File** below the text box and select the local **signing certificate file** to parse its content into the text box. You can also open the PEM- or CRT-format certificate file, copy its content, and paste it into the text box.
    
    **Certificate Key**
    
    Enter the content of the **signing certificate private key** (PEM encoded).
    
    Click **Upload and Parse File** below the text box and select the local **signing certificate private key** to parse its content into the text box. You can also open the KEY-format signing certificate private key file, copy its content, and paste it into the text box.
    
    **Encryption Certificate**
    
    Enter the content of the **encryption certificate file** (PEM encoded).
    
    Click **Upload and Parse File** below the text box and select the local **encryption certificate file** to parse its content into the text box. You can also open the PEM- or CRT-format certificate file, copy its content, and paste it into the text box.
    
    **Encryption Private Key**
    
    Enter the content of the **encryption certificate private key** (PEM encoded).
    
    Click **Upload and Parse File** below the text box and select the local **encryption certificate private key** to parse its content into the text box. You can also open the KEY-format signing certificate private key file, copy its content, and paste it into the text box.
    
    **Resource Group**
    
    **Optional**. Configure this parameter based on your resource management policy.
    
    **Tag Key**, **Tag Value**
    
    **Optional**. Configure these parameters based on your resource management policy.
    

### **Step 3: Verify the upload**

After a successful upload, the certificate appears in the uploaded certificates list.

**Important**

To remove removes the certificate from the list, click **Delete** in the **Actions** column. This deletion is irreversible and does not affect existing deployments that use the certificate.

## **Batch-sync** private **CA certificates**

Batch-sync certificates from Alibaba Cloud private **CA** to eliminate manual uploads. Synced certificates appear in the **Manage Uploaded Certificates** tab for centralized management.

### **Step 1: Sync certificates**

1.  Log on to the [Certificate Management Service console](https://account.alibabacloud.com/login/login.htm?spm=5176.12901015-2.0.0.57a4525c5R9Yj3).
    
2.  In the navigation pane on the left, choose **Certificate Management** > **PCA Certificate Management**. On the **PCA Certificate Management** page, select the region where your PCA resides.
    
3.  Click the **Private CAs** tab. In the list, expand the target root CA, and in the **Actions** column of the intermediate CA, click **Certificates**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2915967571/p983599.png)
    
4.  Select the certificates from the list and click **Batch Synchronize to SSL Certificates**. In the dialog box that appears, click **OK**.
    
    Wait for the sync to complete. The **Status** column will display **Uploaded**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2915967571/p983605.png)
    

### **Step 2: Verify the sync**

After the sync is successful, go to **Certificate Management** > **SSL Certificate Management** and click the **Manage Uploaded Certificates** tab to view the synced private CA certificates in the list.

## Share SSL certificates with another Alibaba Cloud account

You can share certificates purchased from Alibaba Cloud for free with other Alibaba Cloud accounts that belong to the same verified entity. This enables certificate reuse and centralized billing.

### **Step 1: Review the sharing requirements**

-   **Identity verification:** Both accounts must belong to the same verified legal entity. This applies to both individual and enterprise accounts.
    
-   **Certificate source**: Only certificates purchased and issued by Alibaba Cloud can be shared. Uploaded or synced certificates are not supported.
    
-   **Single-share limit:** A certificate can only be shared once. The recipient of a shared certificate cannot share it again.
    

### **Step 2: Share the certificate**

1.  Log on to the [Certificate Management Service console](https://account.alibabacloud.com/login/login.htm?spm=5176.12901015-2.0.0.57a4525c5R9Yj3).
    
2.  In the navigation pane on the left, choose **Certificate Management** > **SSL Certificate Management**.
    
3.  On the **Official Certificate** tab, find the issued certificate that you want to share. In the **Actions** column, click **More**.
    
4.  On the **Share Certificate** tab, enter the Alibaba Cloud account ID with which you want to share the certificate in the **Account ID** text box. Then click **Confirm and Share**.
    

### **Step 3: Verify the sharing**

Log on as the recipient and navigate to the **Manage Uploaded Certificates** tab on the **SSL Certificate Management** page. The shared certificate will appear in the list, identified by the ![Sharing icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8157392271/p327044.png) icon in the **Status** column.

**Important**

You cannot download or reshare shared certificates.

## **More operations**

### **Manage pending tasks**

#### **View pending tasks**

-   When you switch to the **Manage Uploaded Certificates** tab, if the system detects pending tasks for your uploaded certificates, such as **Expiration Notification Disabled**, **Remaining Amount/Required Amount**, **No Cloud Services Deployed**, and **Pending Renewal**, the **Action Items** dialog box appears, prompting you to handle them.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9593675571/p974297.png)
    
-   You can reopen the **Action Items** dialog box by clicking **Pending Items** on the **Manage Uploaded Certificates** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9593675571/p974365.png)
    
-   If you do not need to handle these tasks immediately, select **Do Not Remind Me Again for 7 Days** and then click **Close** to reduce the frequency of reminders.
    

#### **Manage pending tasks**

The dialog box lists the number of pending items for each task and the available actions:

-   **Notifications are disabled.**
    
    -   **Remaining Amount/Required Amount**: Displays information about your current notification resources. If the quota is insufficient, click **Purchase** to buy more notification resources.
        
    -   **One-click Notification**: Filter and select certificates with the status **Notifications are disabled.**. Click the **Notification** below the list to enable notifications.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6577251571/p981401.png)
        
        **Note**
        
        Enabling notifications consumes your notification resource quota. If your current quota is insufficient, [purchase notification resources](/help/en/ssl-certificate/purchase-message-alert-resources).
        
-   **No Cloud Services Deployed**
    
    -   **Deploy**: Create a cloud product deployment task to deploy the certificate to the cloud product. For more information, see [Deploy certificates to Alibaba Cloud products](/help/en/ssl-certificate/deploy-ssl-certificates-to-alibaba-cloud-services).
        
-   **To Be Renewed**
    
    -   **Renew**: Filter certificates with the status **To Be Renewed**. Click **Update** in the **Actions** column for the certificate to complete the renewal.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9593675571/p981430.png)
        

### **View certificate risk warnings**

If you upload a private CA certificate with a long validity period (more than 1 year), the system displays a leakage risk warning in the **Validity Period** column for that certificate. Hover over the **Leakage Risk** tag to view the details and recommended actions.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6577251571/p981440.png)

**Note**

Set the validity period of private CA certificates to no more than 1 year. This reduces the risk of key leakage.

## **Best practices**

-   **Naming conventions:** Use a consistent naming scheme that includes the domain, year, and algorithm, such as `example.com-2024-rsa2048`. This helps with identification and auditing.
    
-   **Tag management:** Tag certificates by project and environment (production/test) to enable resource categorization and cost allocation.
    
-   **Validity period management**: Set the validity period of certificates issued by a private CA to one year or less to reduce the risk of key compromise. Ensure expiration reminders are enabled and plan for renewals at least 30 days in advance.
    

## FAQ

### **What do I do if I get a "Certificate and private key do not match" error during upload?**

This error indicates that the provided certificate's public key and the private key file do not form a pair. Follow these steps to troubleshoot:

1.  **Check the files**: Make sure you have not selected the wrong files, such as uploading the certificate for Domain A with the private key for Domain B.
    
2.  **Run verification**: Use the `openssl` commands described in [Verify that the certificate and private key match](#5e281a18855n4) to verify that the modulus or public key fingerprint of the certificate and private key are identical.
    
3.  **Check for private key password**: If the private key file is password-protected, the platform cannot read it. Use the command `openssl rsa -in encrypted.key -out decrypted.key` to remove the password, and then try again.
    

### **Why did my certificate upload fail with a "Certificate format is incorrect" error?**

The service supports only PEM-encoded certificate files.

If your certificate is in another format, such as PFX or P12, see [Confirm the certificate format](#2cade9c8de8m8) to convert it to the PEM format before uploading. Ensure that the content you copy includes the full `-----BEGIN...-----` and `-----END...-----` markers.

### **Why did sharing my certificate fail?**

Check the following common reasons:

-   **Mismatched identity verification:** The sharing and receiving Alibaba Cloud accounts do not belong to the same verified individual or enterprise entity.
    
-   **Unsupported certificate source:** This feature only applies to certificates purchased from Alibaba Cloud. Certificates that you have uploaded or synced from a private CA are not supported.
    
-   **Cross-site sharing:** Sharing is not permitted between accounts on the Alibaba Cloud China site (aliyun.com) and the international site (alibabacloud.com).
