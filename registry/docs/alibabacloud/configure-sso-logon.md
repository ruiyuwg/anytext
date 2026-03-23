CloudSSO supports single sign-on (SSO) based on Security Assertion Markup Language (SAML) 2.0. Alibaba Cloud is a service provider (SP). The identity management system of an enterprise is an identity provider (IdP). SSO allows enterprise employees to access CloudSSO by using the user identities in the IdP. This topic describes how to configure SSO in the CloudSSO console.

## **Manage IdP information**

Before you can enable SSO, you must configure an IdP and turn on the switch for SSO Logon in the CloudSSO console. To configure an IdP, you can select Manual Configuration or Upload Metadata File. If you select Manual Configuration, you can configure only the following parameters that are required for SSO to take effect: Entity ID, Logon URL, and Certificate. If you need to configure more parameters, create the IdP metadata file by using the IdP client and select Upload Metadata File.

### **Configure IdP information**

Before you can enable SSO, you must configure an IdP.

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Settings**.
    
3.  In the **SSO Logon** section of the **User Setting** tab, click **Configure IdP**.
    
4.  In the **Configure IdP** dialog box, select **Upload Metadata File** or **Manual Configuration** to configure an IdP.
    
    You can obtain the required IdP metadata file or information from the IdP.
    
    -   Upload Metadata File
        
        Click **Upload Metadata File** to upload the IdP metadata file.
        
    -   Manual Configuration
        
        -   **Entity ID**: the entity ID of the IdP.
            
        -   **Logon URL**: the logon URL of the IdP.
            
        -   **Certificate**: the certificate that is used by the IdP to sign SAML responses. The certificate must be an X.509 certificate in the Privacy Enhanced Mail (PEM) format. You can click **Upload Certificate** to upload the certificate issued by the IdP.
            
    
5.  Click **OK**.
    

### **Update IdP information**

You can update the IdP information regardless of whether SSO is enabled. If you update the IdP information when SSO is enabled, and the modified IdP information does not match the original information, SSO may fail. Proceed with caution.

1.  In the **SSO Logon** section, click **Configure IdP**.
    
2.  In the **Configure IdP** dialog box, select a configuration method, modify the IdP information, upload a new certificate, or upload an IdP metadata file. Then, click **OK**.
    

### **Clear IdP information**

If SSO is disabled, you can clear the IdP information. If SSO is enabled, you cannot clear the IdP information.

**Warning**

If the IdP information is cleared, SSO fails.

1.  In the **SSO Logon** section, click **Clear IdP Information**.
    
2.  In the **Clear IdP Information** message, click **OK**.
    

### **Rotate SAML signing certificates**

We recommend that you periodically rotate the SAML signing certificates that are issued by the IdP. You can upload a new certificate before the certificate in use expires. When a user initiates SSO, CloudSSO uses both the new and old certificates to verify the SAML signature. If the SAML signature is verified by either certificate, the logon is trusted. After a period of time, if you confirm that the new certificate is effective and the old certificate is no longer in use, you can delete the old certificate.

**Warning**

If you delete a SAML signing certificate that is in use, SSO fails. Proceed with caution.

1.  In the **SSO Logon** section, click **Manage** to the right of **SAML Signature Certificate**.
    
2.  In the **Certificate** dialog box, rotate SAML signing certificates.
    
    1.  Click **Upload New Certificate** to upload a new certificate that is obtained from the IdP.
        
    2.  Verify that the IdP uses the newly uploaded certificate to sign SAML responses. Make sure that you can log on to the CloudSSO user portal by using the SSO method.
        
    3.  After a period of time, if you confirm that the new certificate is effective and the old certificate is no longer in use, you can click **Delete** in the **Actions** column of the old certificate to delete the old certificate.
        
    4.  Click **OK**. The rotation of SAML signing certificates is complete.
        

## **Manage SP information**

### **Obtain SP metadata**

The SP metadata file is required when you configure SSO in your IdP. To obtain the SP metadata file, click the Download icon next to **Download SP Metadata File** in the **SSO Logon** section. You can also view or copy the values of the **ACS URL** and **Entity ID** parameters. The values are required when you manually configure your IdP.

**Note**

If you enabled the accelerated URL feature, you can use the **accelerated ACS URL** when you configure SSO in your IdP. For more information, see [Accelerate access from outside the Chinese mainland](/help/en/cloudsso/user-guide/cloud-sso-overseas-visit-accelerated).

### Configure the signature algorithm for SAML requests

In the **SSO Logon** section, click **Edit** next to **Signature Algorithm for IdP Request**. This setting determines the algorithm used to sign SAML requests sent from Alibaba Cloud to your IdP. The default is [SHA1](http://www.w3.org/2000/09/xmldsig#sha1), with [SHA256](http://www.w3.org/2001/04/xmlenc#sha256) available as an option.

### Configure SAML assertion encryption

In the **SSO Logon** section, click **Edit** next to **SAML Assertion Encryption for IdP Response**. This setting determines whether SAML assertions within responses from the IdP are encrypted. If you enable this option, Alibaba Cloud will decrypt the assertions.

### **Manage CA certificates of the SP (**Under invitational preview**)**

CloudSSO provides self-signed certificates and certificates issued by a trusted certificate authority (CA). By default, CloudSSO self-signed certificates are used. You can apply for CA certificates if required.

**Important**

The CA certificate feature is in invitational preview. Contact the service manager of Alibaba Cloud to apply for a trial.

#### **Algorithms supported by CA certificates**

The SP metadata contains two certificates: a signing certificate and an assertion encryption certificate. The certificates respectively support the following algorithms:

-   Signing certificate: [SHA1](http://www.w3.org/2000/09/xmldsig#sha1) and [SHA256](http://www.w3.org/2001/04/xmlenc#sha256).
    
-   Assertion encryption certificate: [TRIPLEDES](http://www.w3.org/2001/04/xmlenc#tripledes-cbc), [AES-128](http://www.w3.org/2001/04/xmlenc#aes128-cbc), [AES-256](http://www.w3.org/2001/04/xmlenc#aes256-cbc), and [AES128-GCM](http://www.w3.org/2009/xmlenc11#aes128-gcm).
    

#### Validity period of CA certificates

A CA certificate is valid for one year. The certificate must be rotated once a year. The specific expiration time is displayed in the console.

#### **Enable CA certificates**

In the **SSO Logon** section, turn on **Use Certificate Signed by Trusted CA** to enable CA certificates.

After you enable CA certificates, CloudSSO self-signed certificates are automatically disabled.

#### **Rotate CA certificates**

The rotation period is the last 80 days before the certificate in use expires. During this period, you are prompted to upload a new certificate in the CloudSSO console until the old certificate expires. During the rotation period, both the old and new certificates are valid. We recommend that you upload a new certificate at the earliest opportunity during the rotation period.

1.  In the **SP Information** section of the **SSO Logon** section, download the SP metadata file that contains a new CA certificate.
    
2.  In the IdP, configure both the old and new certificates.
    
3.  In the IdP, use only the new certificate and check whether SSO between the IdP and CloudSSO works as expected.
    
    If SSO works as expected, you can delete the old certificate. You can also retain the old certificate, which does not affect SSO.
    

## **Enable or disable SSO**

### **Enable SSO**

After you configure the IdP, you can enable SSO.

**Note**

After you enable SSO, username-password logon is automatically disabled.

1.  On the **User Setting** tab, in the upper-right corner of the **SSO Logon** section, turn on the switch.
    
2.  In the **Enable SSO Logon** message, click **OK**.
    

### **Disable SSO**

**Note**

After you disable SSO, username-password logon is automatically enabled.

1.  On the **User Setting** tab, in the upper-right corner of the **SSO Logon** section, turn off the switch.
    
2.  In the **Disable SSO Logon** message, click **OK**.
