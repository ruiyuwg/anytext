CloudSSO-related data is stored in the region that you select when you create the CloudSSO directory. You can use the accelerated URL feature to ensure access stability for CloudSSO users outside the Chinese mainland in the following scenarios: Your directory resides in a region in the Chinese mainland and your intended users access CloudSSO from outside the Chinese mainland, or your identity provider (IdP) is deployed outside the Chinese mainland and System for Cross-domain Identity Management (SCIM) synchronization is enabled to transmit data from the IdP to the region in which the directory resides. Currently, only the China (Shanghai) region is supported for the CloudSSO directory. The accelerated URL feature is provided free of charge.

**Important**

-   The accelerated URL feature is in invitational preview. Contact your account manager to apply for a trial.
    
-   After you enable the accelerated URL feature, CloudSSO-related data is first transmitted to the closest Alibaba Cloud acceleration endpoint to your intended users or IdP. Then, the data is transmitted to the China (Shanghai) region in which your directory resides. If you agree to enable the accelerated URL feature, you shall be solely responsible for ensuring that the cross-border transmission or disclosure of your business data complies with all applicable laws, including providing adequate data protection, providing adequate privacy statements, and obtaining necessary consent from the individuals concerned. In addition, you shall ensure that your business data does not contain any content that is restricted, or prohibited from transmission or disclosure by applicable laws. For more information about data transmission paths, see [Supported regions of the CloudSSO directory](/help/en/cloudsso/product-overview/sso-region-description).
    

## **Enable the accelerated URL feature**

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com) as the CloudSSO administrator.
    
2.  In the left-side navigation pane, click **Settings**.
    
3.  In the **Global Management** section, click **Enable Accelerated Endpoint**.
    
4.  In the **Confirm to Enable Accelerated Endpoint** dialog box, read and sign the consent form to enable the accelerated URL feature and confirm the legal liabilities for cross-border data transmission. Then click **OK**.
    

## **Use the accelerated URL**

The CloudSSO administrator can view the accelerated URL in the **User Logon URL** section of the [Overview](https://cloudsso.console.alibabacloud.com/overview) page.

![加速URL-zh.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7547603071/p739230.jpg)

Users outside the Chinese mainland who access the Alibaba Cloud Management Console by using CloudSSO can use the accelerated URL. Users in the Chinese mainland can access the Alibaba Cloud Management Console by using the logon URL.

## **Implement SSO by using the accelerated URL**

If your directory resides in the China (Shanghai) region and your IdP resides outside the Chinese mainland, you can use the accelerated ACS URL to implement single sign-on (SSO) from the IdP to Alibaba Cloud. For more information, see [Overview](/help/en/cloudsso/user-guide/overview). You can use one of the following methods:

-   In the **SSO Logon** section of the [Settings](https://cloudsso.console.alibabacloud.com/setting) page, click **Download SP Metadata File** to download the SP metadata file that contains the accelerated ACS URL. The file is used to update the SSO configurations of the IdP.
    
-   In the **SSO Logon** section of the [Settings](https://cloudsso.console.alibabacloud.com/setting) page, copy the value of **ACS URL (Accelerated Endpoint)** and paste the value to the SSO configurations of the IdP.
    

![加速ACS URL-zh.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7547603071/p739232.jpg)

## **Use the accelerated URL to implement SCIM synchronization**

If your directory resides in the China (Shanghai) region and your IdP resides outside the Chinese mainland, you can use the accelerated SCIM endpoint.

In the **SCIM-based User Synchronization Configuration** section of the [Settings](https://cloudsso.console.alibabacloud.com/setting) page, copy the value of **SCIM Endpoint (Accelerated)** and paste the value to the SCIM synchronization configurations of the IdP.

![SCIM加速-zh.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7547603071/p739233.jpg)

## **References**

-   [Supported regions of the CloudSSO directory](/help/en/cloudsso/product-overview/sso-region-description)
    
-   [Log on to the CloudSSO user portal and access Alibaba Cloud resources](/help/en/cloudsso/user-guide/log-on-to-the-cloudsso-user-portal-and-access-alibaba-cloud-resources)
    
-   [Enable or disable SCIM synchronization](/help/en/cloudsso/user-guide/enable-or-disable-scim-synchronization)
    
-   [SSO logon](/help/en/cloudsso/user-guide/configure-sso)
