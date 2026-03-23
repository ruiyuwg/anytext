To implement Security Assertion Markup Language (SAML)-based single sign-on (SSO) between Elastic Desktop Service (EDS) and identity providers (IdPs), you must establish mutual trust between Elastic Desktop Service, which acts as a service provider (SP), and IdPs. In this case, you must configure SAML settings on both the Elastic Desktop Service side and the IdP side. After that, SSO can be implemented after end users log on to EDS terminals. This topic describes how to configure SAML 2.0-based SSO.

## **Background information**

Single sign-on (SSO) is a secure communication technology that allows you to efficiently access multiple trusted application systems with a single sign-on. SSO implements logon based on identity federation.

For more information, see [Configure logon methods](/help/en/wuying-workspace/user-guide/certification-overview#d1f4747047jgt).

## **Configure SSO in an office network**

### Step 1: Configure Elastic Desktop Service as a trusted SAML SP in an IdP

1.  Obtain the SAML SP metadata file in the Elastic Desktop Service console.
    
    1.  Log on to the [Elastic Desktop Service (EDS) console](https://eds.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, choose **Networks & Storage** > **Office Networks**.
        
    3.  In the upper-left corner of the top navigation bar, select a region.
        
    4.  On the **Office Networks** page, find the desired office network for which you have enabled SSO and click the office network ID.
        
    5.  On the office network details page, find the **Other Information** section, click **Show** to unfold the section, and click **Download Metadata File** to the right of **Application Metadata**.
        
2.  Create an SAML SP in an IdP and use the downloaded metadata file to configure Elastic Desktop Service as a trusted SAML SP.
    

### Step 2: Configure the IdP as a trusted SAML IdP in Elastic Desktop Service

1.  In the **Other Information** section, turn on **SSO**. Then, SSO for the office network is enabled.
    
    After you enable SSO, the logon page on EDS terminals is replaced with the logon page of the IdP.
    
2.  Click **Upload File** to the right of **IdP Metadata** and upload the IdP metadata file to the EDS console.
    
    **Note**
    
    The metadata file is in the XML format and includes the logon address of an IdP and the X.509 certificate. The certificate is used to verify the validity of SAML assertion issued by the IdP.
    

### **Step 3: Create a user that matches an IdP user**

Create a user that matches an IdP user in the Elastic Desktop Service console. For more information, see [Create a convenience account](/help/en/wuying-workspace/user-guide/create-a-convenience-user) or the [Create enterprise AD accounts](/help/en/wuying-workspace/user-guide/create-modify-and-delete-ad-users#section-lqi-3vw-wwt) section of the "Create and manage enterprise AD accounts" topic.

**Note**

When you create a user, you can specify a password for the user. The password of the user can be different from that of the IdP user with the same name.

## **Configure SSO in an organization**

### Step 1: Configure the IdP as a trusted SAML IdP in Elastic Desktop Service

1.  In the left-side navigation pane, choose **Users & Logons** > **Enterprise Identity Sources**.
    
2.  On the **Enterprise Identity Sources** page, perform the following operations based on your business requirements:
    
    -   If you have not added an enterprise identity source, click **SAML** to add an enterprise identity source.
        
    -   If you have added an enterprise identity source, click **Add Enterprise Identity Source** in the upper-left corner. In the **Add Enterprise Identity Source** panel, click **SAML**.
        
3.  In the **Add Enterprise Identity Source** panel, configure the following parameters and click **Confirm**.
    
    **Parameter**
    
    **Description**
    
    **Enterprise Identity Source Name**
    
    The name of the enterprise identity source, which is used to identify the IdP.
    
    **Enterprise Identity Source Type**
    
    The type of the enterprise identity source. Select **SAML**.
    
    **IdP Metadata**
    
    The IdP metadata. Click **Upload File** to upload the metadata file of the IdP.
    
    **User Account Type**
    
    The type of the account. Valid values: Convenience Account and Enterprise AD Account. If you select Enterprise AD Account, you must also select an AD domain name.
    

### Step 2: Configure Elastic Desktop Service as a trusted SAML SP in the IdP

1.  Obtain the SAML SP metadata file in the Elastic Desktop Service console.
    
    1.  In the left-side navigation pane, choose **Users & Logons** > **Enterprise Identity Sources**.
        
    2.  On the **Enterprise Identity Sources** page, find the enterprise identity source that you want to manage and click **Edit** in the **Actions** column.
        
    3.  In the **Edit Enterprise Identity Source** panel, click **Download File** below **Application Metadata**.
        
2.  Create an SAML SP in the IdP and use the downloaded metadata file to configure Elastic Desktop Service as a trusted SAML SP.
    

#### **Step 3: Create a user that matches an IdP user**

Create a user that matches an IdP user in the Elastic Desktop Service console. For more information, see [Create a convenience account](/help/en/wuying-workspace/user-guide/create-a-convenience-user) or the [Create enterprise AD accounts](/help/en/wuying-workspace/user-guide/create-modify-and-delete-ad-users#section-lqi-3vw-wwt) section of the "Create and manage enterprise AD accounts" topic.

**Note**

When you create a user, you can specify a password for the user. The password of the user can be different from that of the IdP user with the same name.

## **References**

For more information about the best practices for SSO between Elastic Desktop Service and IdPs, see the following topics:

-   [Examples of SSO between Azure AD and EDS (Pro Edition)](/help/en/wuying-workspace/use-cases/integrate-saml-protocol-based-azure-ad)
    
-   [Implement SSO for EDS convenience accounts by using AD FS](/help/en/wuying-workspace/use-cases/integrate-saml-protocol-based-ad-fs)
    
-   [Examples of SSO between IDaaS and EDS](/help/en/wuying-workspace/use-cases/examples-of-sso-between-idaas-and-wuying-workspace/)
