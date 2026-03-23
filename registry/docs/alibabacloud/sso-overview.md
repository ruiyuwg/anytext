Alibaba Cloud supports single sign-on (SSO) through identity federation, which allows users from an external identity provider (IdP) to access your Alibaba Cloud resources without needing separate RAM user credentials. This topic explains the key concepts, protocols, and implementation methods for federated SSO.

## Key terms

**Term**

**Description**

**Identity provider (IdP)**

An external system that manages user identities and authenticates users. Examples include on-premises IdPs like Microsoft Active Directory Federation Services (AD FS) and cloud-based IdPs like Microsoft Entra ID, Okta, Google Workspace, or [Alibaba Cloud IDaaS](/help/en/idaas/product-overview/product-overview-2).

**Service provider (SP)**

An application or service that trusts the IdP to authenticate users. In the context of SSO with Alibaba Cloud, Alibaba Cloud is the SP.

**SAML 2.0**

Security Assertion Markup Language (SAML) 2.0 is an open standard for exchanging authentication and authorization data between an IdP and an SP.

**SAML assertion**

A security token issued by the IdP that contains information about the authenticated user, such as their username and group memberships. The SP uses this assertion to grant access.

**Trust**

The configured relationship that allows the SP (Alibaba Cloud) to trust authentication assertions from the IdP. This is typically established by exchanging SAML metadata, which contains the IdP's public signing certificate. Alibaba Cloud uses this certificate to verify the integrity and authenticity of the assertions it receives.

**OIDC**

[OpenID Connect (OIDC)](https://openid.net/connect) is an identity layer built on top of the [OAuth 2.0](https://oauth.net/2) protocol. It allows clients to verify a user's identity based on the authentication performed by an authorization server and to obtain basic profile information about the user.

**OIDC token (ID token)**

A JSON Web Token (JWT) that contains claims about the authentication event, such as the user's ID, the issuer of the token, and the client for whom it was intended.

**Client ID**

A unique identifier for an application that is registered with an OIDC IdP. It is included as the audience (`aud`) claim in the OIDC token to ensure the token is intended for that specific application.

**Issuer URL**

The URL that identifies the OIDC IdP. It is included as the issuer (`iss`) claim in the OIDC token.

**Thumbprint (Fingerprint)**

A unique identifier for the root CA certificate of an OIDC IdP's server. It is used to verify the authenticity of the IdP's public keys. For more information, see [Obtain the thumbprint for an OIDC IdP](/help/en/ram/obtain-oidc-idp-fingerprints-through-openssl).

**STS token**

A temporary security credential provided by [Alibaba Cloud Security Token Service (STS)](/help/en/ram/user-guide/what-is-sts#concept-ong-5nv-xdb). In federated SSO, the user exchanges the SAML assertion or OIDC token for an STS token to make authenticated API calls to Alibaba Cloud services.

## SSO methods

Alibaba Cloud supports two primary methods for federated SSO:

-   **User-based SSO (SAML only)**
    
    In this method, the SAML assertion maps the federated user directly to a specific RAM user in your Alibaba Cloud account. The user logs on with the permanent permissions assigned to that RAM user. This method is less flexible and is not recommended for new implementations. For more information, see [Overview of user-based SSO](/help/en/ram/overview-of-user-based-sso#task-kwz-hrk-bhb).
    
-   **Role-based SSO**
    
    In this method, the federated user assumes a RAM role to gain temporary access to your Alibaba Cloud resources. This is the recommended and most flexible approach.
    
    -   **SAML 2.0**: The IdP sends a SAML assertion that specifies which RAM role the user is authorized to assume. The user is then logged on to the Alibaba Cloud Management Console with the permissions of that role. For more information, see [Overview of SAML 2.0 federation](/help/en/ram/overview#task-zrv-2ny-zgb).
        
    -   **OIDC**: The application uses an OIDC token from the IdP to call the `AssumeRoleWithOIDC` operation. This operation returns STS tokens that the application can use to access Alibaba Cloud resources. For more information, see [Overview of OIDC federation](/help/en/ram/overview-of-oidc-based-sso#concept-2118766).
        

## Comparison of SSO methods

**Feature**

**User-based SSO**

**Role-based SSO**

Initiation method

IdP-initiated and SP-initiated

IdP-initiated

Credential management

Requires a one-to-one mapping between IdP users and RAM users.

Does not require creating individual RAM users. Access is managed through RAM roles.

Multi-account federation

Not supported

Supported (A single IdP user can access multiple Alibaba Cloud accounts).

Support for multiple IdPs

Not supported (An account can only be configured for SSO with a single IdP).

Supported (An account can trust multiple IdPs).

## **Reference**

[SSO use cases](/help/en/ram/scenarios-of-sso#concept-ft2-fvy-bhb)

[SSO FAQ](/help/en/ram/support/faq-about-sso)
