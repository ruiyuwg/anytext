CloudSSO supports single sign-on (SSO) based on Security Assertion Markup Language (SAML) 2.0. Alibaba Cloud is the service provider (SP). The identity management system of an enterprise is the identity provider (IdP). SSO allows enterprise employees to access CloudSSO by using the user identities in the IdP. If you use CloudSSO, you need to only configure settings once to implement SSO from an IdP to Alibaba Cloud in an easy manner.

## Procedure

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2207659671/CAEQJxiBgIDd2ImVgBkiIDQxNTQ0OTk3NjNlMjRmMGNiZDMzMzMyZGE0YWMzYWRk4415100_20240513175054.770.svg)

1.  Obtain the SP metadata from CloudSSO.
    
    Download and view the SP metadata in the CloudSSO console. For more information, see the [Obtain SP metadata](/help/en/cloudsso/user-guide/configure-sso#6f77ae6207lly) section of the "Configure SSO" topic.
    
2.  Specify Alibaba Cloud as a trusted SAML SP in the IdP and configure SAML assertions.
    
    After you specify Alibaba Cloud as a trusted SAML SP in specific IdPs, you need to associate users with applications. The configuration methods vary based on the IdP. For more information, see documentations of your IdP.
    
3.  Obtain the IdP SAML metadata from the IdP.
    
    Download the SAML metadata file from the IdP. The method varies based on the IdP. For more information, see documentation of your IdP.
    
4.  Specify the IdP as a trusted SAML IdP in the Cloud SSO console.
    
    Manually configure the SAML information about the IdP or directly upload the SAML metadata file of the IdP. If you manually configure the SAML information, you can configure only the following parameters that are required to implement SSO: Entity ID, Logon URL, and Certificate. If you need to configure more parameters, create the IdP metadata file by using the IdP client and upload the SAML metadata file.
    
5.  Enable SSO in the CloudSSO console.
    
    For more information, see the [Enable SSO](/help/en/cloudsso/user-guide/configure-sso#section-ne6-8lq-n0a) section of the "Configure SSO" topic.
    
6.  Use SCIM to synchronize users, or create users that have the same usernames as the IdP users in the Cloud SSO console.
    
    -   If the IdP supports System for Cross-domain Identity Management (SCIM) and has a large number of users, you can directly synchronize the users in the IdP to Cloud SSO. For more information, see [Synchronize users or groups in Microsoft Entra ID by using SCIM](/help/en/cloudsso/user-guide/synchronize-users-or-groups-in-azure-ad-by-using-scim#task-2090820) and [Synchronize users or groups in Okta by using SCIM](/help/en/cloudsso/user-guide/synchronize-users-or-groups-in-okta-by-using-scim#task-2090820).
        
    -   If the IdP has a small number of users, you can create users that have the same usernames as the IdP users in the CloudSSO console. When you create a user, set the `NameID` attribute to name of the user in the SAML assertions. For more information, see the [Create a user](/help/en/cloudsso/user-guide/perform-basic-operations#section-rj3-44x-9bk) section of the "Perform basic operations" topic.
        
7.  Log on to CloudSSO as an IdP user by using SSO.
    

## References

-   [Configure SSO logon from Microsoft Entra ID to CloudSSO](/help/en/cloudsso/user-guide/configure-sso-from-azure-ad-to-cloudsso#task-2513116)
    
-   [Configure SSO logon from Okta to CloudSSO](/help/en/cloudsso/user-guide/configure-sso-logon-from-okta-to-cloudsso#task-2513116)
    
-   [Configure SSO from AD FS to CloudSSO](/help/en/cloudsso/user-guide/configure-sso-logon-from-ad-fs-to-cloudsso#task-bpk-3jc-mfb)
    
-   [Configure SSO from Shibboleth to CloudSSO](/help/en/cloudsso/user-guide/configure-sso-from-shibboleth-to-cloudsso)
    

## **FAQ**

For more information, see [FAQ about SSO](/help/en/cloudsso/support/faq-about-sso)
