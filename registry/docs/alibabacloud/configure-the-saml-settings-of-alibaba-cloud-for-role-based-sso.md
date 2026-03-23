This topic describes how to configure metadata for role-based single sign-on (SSO) to make sure that your identity provider (IdP) is trusted by Alibaba Cloud (service provider).

## Conventions for policy syntax

The metadata file of your IdP is obtained. The metadata file is in the XML format. The metadata file contains the logon URLs, the public key that is used to verify SAML assertions, and the assertion format.

## **Procedure**

1.  Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Integrations** > **SSO**.
    
3.  On the **Role-based SSO** tab, click the **SAML** tab and click **Create IdP**.
    
4.  On the **Create IdP** page, configure **IdP Name** and **Description**.
    
5.  In the **Metadata File** section, click **Upload Metadata File** to upload the metadata file that is obtained from your IdP.
    
6.  Click **Create IdP**.
    

## What to do next

Create a RAM role for role-based SSO. For more information, see [Create a RAM role for a SAML IdP](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-idp#section-cxh-ari-9ui).
