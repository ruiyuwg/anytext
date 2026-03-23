This topic describes how to configure Alibaba Cloud as a trusted Security Assertion Markup Language (SAML) service provider (SP) of your identity provider (IdP) for role-based single sign-on (SSO).

## Procedure

1.  Obtain the SAML SP metadata URL of Alibaba Cloud in the Resource Access Management (RAM) console.
    
    The SAML SP metadata URL is `https://signin.alibabacloud.com/saml-role/sp-metadata.xml`.
    
2.  Create a SAML SP in your IdP and configure Alibaba Cloud as the trusted party by using one of the following methods:
    
    -   Use the SAML SP metadata URL of Alibaba Cloud that you copied in the Step [1](#step-yqv-e6o-kox).
        
    -   If your IdP does not support the URL-based configuration of the trusted party, download the metadata file from the URL that you copied in Step [1](#step-yqv-e6o-kox) and upload the metadata file.
        
    -   If your IdP does not allow you to upload the metadata file, configure the following parameters:
        
        -   `Entity ID`: `urn:alibaba:cloudcomputing:international`
            
        -   `ACS URL`: `https://signin.alibabacloud.com/saml-role/sso`
            
        -   `RelayState`: This parameter is optional. If your IdP requires the `RelayState` parameter, set the value of the parameter to a URL. Users will be redirected to the URL after SSO succeeds. If you do not configure this parameter, users are redirected to the homepage of the Alibaba Cloud Management Console after SSO succeeds.
            
            **Note**
            
            For security purposes, you must enter a URL that points to an Alibaba website for the `RelayState` parameter. For example, the domain name in the URL can be \*.aliyun.com, \*.hichina.com, \*.yunos.com, \*.taobao.com, \*.tmall.com, \*.alibabacloud.com, or \*.alipay.com.
            

## What to do next

After you configure Alibaba Cloud as a trusted SAML SP, you must configure SAML assertions for your IdP. For more information, see [SAML response for role-based SSO](/help/en/ram/saml-response-for-role-based-sso#concept-snl-vkq-bhb).

## References

-   [Implement role-based SSO from AD FS](/help/en/ram/implement-role-based-sso-from-ad-fs#task-bpk-3jc-mfb)
    
-   [Implement user-based SSO by using Okta](/help/en/ram/implement-role-based-sso-from-okta#task-2511512)
    
-   [Implement role-based SSO from Azure AD](/help/en/ram/implement-role-based-sso-from-azure-ad#task-cnw-3lg-jhb)
    
-   [Implement role-based SSO from OneLogin to Alibaba Cloud](/help/en/ram/implement-role-based-sso-from-onelogin-to-alibaba-cloud#task-2511512)
    
-   [Implement role-based SSO from Shibboleth to Alibaba Cloud](/help/en/ram/implement-role-based-sso-from-shibboleth-to-alibaba-cloud)
