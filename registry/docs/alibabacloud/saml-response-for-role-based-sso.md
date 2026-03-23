This topic describes the syntax of a Security Assertion Markup Language (SAML) response for role-based single sign-on (SSO). This topic also describes the elements of a SAML assertion in a SAML response.

## Background information

During SAML 2.0-based SSO, after the identity of a user is verified, the identity provider (IdP) generates an authentication response and sends this response to Alibaba Cloud by using a browser or a program. This response contains a SAML assertion that complies with the specifications of the HTTP POST binding in SAML 2.0. Alibaba Cloud uses the SAML assertion to determine the logon status and identity of the user. Therefore, the SAML assertion must contain the elements that are required by Alibaba Cloud. If the SAML assertion does not contain the required elements, SSO fails.

## SAML response

Make sure that each SAML response that is sent by your IdP to Alibaba Cloud contains the following elements. Otherwise, SSO fails.

```
<saml2p:Response>
    <saml2:Issuer>...</saml2:Issuer>
    <saml2p:Status>
        ...
    </saml2p:Status>
    <saml2:Assertion>
        <saml2:Issuer>...</saml2:Issuer>
        <ds:Signature>
            ...
        </ds:Signature>
        <saml2:Subject>
            <saml2:NameID>${NameID}</saml2:NameID>
            <saml2:SubjectConfirmation>
                ...
            </saml2:SubjectConfirmation>
        </saml2:Subject>
        <saml2:Conditions>
            <saml2:AudienceRestriction>
                <saml2:Audience>${Audience}</saml2:Audience>
            </saml2:AudienceRestriction>
        </saml2:Conditions>
        <saml2:AuthnStatement>
            ...
        </saml2:AuthnStatement>
        <saml2:AttributeStatement>
            <saml2:Attribute Name="https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName">
                ...
            </saml2:Attribute>
            <saml2:Attribute Name="https://www.aliyun.com/SAML-Role/Attributes/Role">
                ...
            </saml2:Attribute>
        </saml2:AttributeStatement>
    </saml2:Assertion>
</saml2p:Response>
```

## Elements in a SAML assertion

-   **Common elements in SAML 2.0**
    
    For more information about SAML 2.0, see [SAML 2.0](https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html).
    
    **Element**
    
    **Description**
    
    `Issuer`
    
    The value of the `Issuer` element must match `EntityID` in the metadata file that you upload for the **IdP** in the Alibaba Cloud Management Console.
    
    `Signature`
    
    The SAML assertion must be signed. The `Signature` element must contain information such as the signature value and signature algorithm. The signature is used to verify that the signed SAML assertion is not modified after the signature is generated.
    
    `Subject`
    
    The `Subject` element must contain the following sub-elements:
    
    -   Only one `NameID` sub-element. You must specify the value of `NameID` based on SAML 2.0. However, Alibaba Cloud does not determine a logon identity based on the value of NameID.
        
    -   Only one `SubjectConfirmation` sub-element that contains a `SubjectConfirmationData` sub-element. The `SubjectConfirmationData` sub-element must contain the following attributes:
        
        -   `NotOnOrAfter`: the validity period of a SAML assertion.
            
        -   `Recipient`: the recipient of the SAML assertion. Alibaba Cloud checks the recipient of the SAML assertion based on the value of this attribute. Therefore, you must set this attribute to `https://signin.alibabacloud.com/saml-role/sso`.
            
        
        The following script provides an example of the `Subject` element:
        
        ```
        <Subject>
          <NameID Format="urn:oasis:names:tc:SAML:2.0:nameid-format:persistent">administrator</NameID>        
          <SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">   
            <SubjectConfirmationData NotOnOrAfter="2019-01-01T00:01:00.000Z" Recipient="https://signin.alibabacloud.com/saml-role/sso"/>    
          </SubjectConfirmation>
        </Subject>
        ```
        
    
    `Conditions`
    
    The `Conditions` element must contain an `AudienceRestriction` sub-element. The AudienceRestriction sub-element can contain one or more `Audience` sub-elements. The value of an `Audience` sub-element must be `urn:alibaba:cloudcomputing:international`.
    
    The following script provides an example of the `Conditions` element:
    
    ```
    <Conditions>
      <AudienceRestriction>
        <Audience>urn:alibaba:cloudcomputing:international</Audience>
      </AudienceRestriction>
    </Conditions>           
    ```
    
-   **Custom elements required by Alibaba Cloud**
    
    Alibaba Cloud requires that the `AttributeStatement` element in a SAML assertion contains the following `Attribute` sub-elements:
    
    -   Role attribute: an `Attribute` element with the `Name` attribute set to `https://www.aliyun.com/SAML-Role/Attributes/Role`.
        
        This sub-element is required and contains one or more `AttributeValue` sub-elements. AttributeValue lists the roles that can be assumed by a user in your IdP. The value of the AttributeValue sub-element is a comma-delimited pair of the Alibaba Cloud Resource Name (ARN) of the role and the ARN of the IdP. You can view the ARN of the role and the ARN of the IdP in the RAM console.
        
        -   To view the ARN of the role, go to the **Roles** page and click the name of the RAM role. On the page that appears, you can view the ARN of the role in the **Basic Information** section.
            
        -   To view the ARN of the IdP, go to the **SSO** page. On the **Role-based SSO** tab, click the name of the IdP. You can view the ARN of the IdP in the **IdP Information** section.
            
        
        **Note**
        
        If a role attribute contains multiple AttributeValue sub-elements, the user must select which role to assume when the user logs on to the Alibaba Cloud Management Console.
        
        The following script provides an example of the Role `attribute`:
        
        ```
        <Attribute Name="https://www.aliyun.com/SAML-Role/Attributes/Role">      
          <AttributeValue>acs:ram::$account_id:role/role1,acs:ram::$account_id:saml-provider/provider1</AttributeValue>
          <AttributeValue>acs:ram::$account_id:role/role2,acs:ram::$account_id:saml-provider/provider1</AttributeValue>
        </Attribute>               
        ```
        
        **Note**
        
        The value of `$account_id` is the ID of the Alibaba Cloud account that defines the RAM role and IdP.
        
    -   Role attribute: an `Attribute` element with the `Name` attribute set to `https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName`.
        
        This sub-element is required and contains only one `AttributeValue` sub-element that specifies the user information to be displayed in the RAM console and ActionTrail logs. If you want multiple users to assume the same role, specify different values of the `RoleSessionName` attribute for the users. Each value uniquely identifies a user. For example, you can set the value to an employee ID or email address.
        
        The value in the `AttributeValue` sub-element must be 2 to 64 characters in length, and can contain only letters, digits, and the following special characters: `- _ . @ =`
        
        The following script provides an example of the RoleSessionName `attribute`:
        
        ```
        <Attribute Name="https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName">
          <AttributeValue>user_id</AttributeValue>
        </Attribute>                     
        ```
        
    -   SessionDuration attribute: an `Attribute` sub-element with the `Name` attribute set to `https://www.aliyun.com/SAML-Role/Attributes/SessionDuration`.
        
        This element is optional and contains only one `AttributeValue` sub-element that specifies the maximum duration of each session. The value of this sub-element is an integer, in seconds. The value cannot exceed the maximum session duration that is specified for the Role attribute. The minimum value is 900 seconds.
        
        The following script provides an example of the SessionDuration `attribute`:
        
        ```
        <Attribute Name="https://www.aliyun.com/SAML-Role/Attributes/SessionDuration">
          <AttributeValue>1800</AttributeValue>
        </Attribute>                  
        ```
        
-   **Maximum role session duration**
    
    If you use the console to assume a role, the maximum session duration for the role is the value of the `SessionDuration` attribute that is specified in a SAML assertion. If the `SessionNotOnOrAfter` attribute of the `AuthnStatement` element is also specified, the maximum session duration is the smaller value between `SessionDuration` and `SessionNotOnOrAfter`. If neither SessionDuration nor SessionNotOnOrAfter is specified, the maximum session duration is the smaller value between the **Maximum Session Duration** parameter of the role and the **Logon Session Valid For** parameter. For more information, see [Manage security settings of RAM users](/help/en/ram/user-guide/manage-security-settings-of-ram-users#task-188786) and [Specify the maximum session duration for a RAM role](/help/en/ram/user-guide/specify-the-maximum-session-duration-for-a-ram-role#task-2498608).
    
    If you have specified the `DurationSeconds` parameter when you call the AssumeRoleWithSAML operation and defined the `SessionNotOnOrAfter` attribute in the `AuthnStatement` element, the maximum session duration is the smaller value between `DurationSeconds` and `SessionNotOnOrAfter`. For more information, see [AssumeRoleWithSAML](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerolewithsaml). If neither SessionDuration nor SessionNotOnOrAfter is specified, the maximum session duration is 3,600 seconds by default.
    

## **References**

[How do I view a SAML response in Google Chrome?](/help/en/ram/support/faq-about-sso#section-yse-gi7-8gx)
