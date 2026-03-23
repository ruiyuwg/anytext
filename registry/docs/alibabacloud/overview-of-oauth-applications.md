Resource Access Management (RAM) uses the OAuth 2.0 and OAuth 2.1 protocols to enable applications to obtain authorized access to Alibaba Cloud resources on behalf of a user. This topic provides an overview of the core concepts, use cases, and OAuth scopes of the Alibaba Cloud OAuth service.

## Core concepts

**Concept**

**Description**

User (resource owner)

The entity that grants an application permission to access their resources. A resource owner can be an Alibaba Cloud account, a RAM user, or a RAM role.

**Note**

Support for RAM roles as resource owners is available for OAuth applications created after September 10, 2024. To enable this feature for older applications, submit a [ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl).

Alibaba Cloud OAuth service

The Alibaba Cloud OAuth service acts as an authorization server. It authenticates the resource owner, obtains their consent, and issues access tokens to the client application.

First-party application

An application created within your Alibaba Cloud account. Users within the same account can access the application without an explicit authorization step, while users from other Alibaba Cloud accounts must first install and authorize the application.

You can create the following types of first-party applications:

-   **Web application**: A browser-based application that runs on a web server.
    
-   **Native application**: A desktop or mobile application installed and run natively on a device.
    
-   **Server-to-server application**: An application that directly accesses Alibaba Cloud services without user interaction. This is typically used for machine-to-machine workflows, such as user provisioning via the System for Cross-domain Identity Management (SCIM) protocol.
    

Third-party application

An application developed by a different Alibaba Cloud account that you install and authorize to access your resources.

Official application

An application published by an Alibaba Cloud service that all Alibaba Cloud accounts can install. Because this type of application is not owned by your account, an official application is a type of third-party application.

OAuth scope

A mechanism to limit an application's access to a user's account. An application can request one or more scopes, and the access token issued to the application will be limited to the scopes granted. The following scopes are supported:

-   **openid**: Used to obtain the user's OpenID. This is the default scope and cannot be removed.
    
    **Note**
    
    The OpenID is a unique identifier for the user but does not contain personally identifiable information (PII) like a username or Alibaba Cloud UID. To retrieve that information, you must also request the aliuid or profile scopes.
    
-   **aliuid**: Used to obtain the unique user identifier (UID) issued by Alibaba Cloud. This includes the RAM user UID and the UID of the parent Alibaba Cloud account.
    
-   **profile**: Used to obtain the name of the authenticated user. For an Alibaba Cloud account, it obtains the logon name. For a RAM user, it obtains the User Principal Name (UPN) and display name.
    
-   **/acs/ccc**: Used to call Alibaba Cloud Call Center APIs.
    
-   **/acs/cloudesl**: Used to call Alibaba Cloud CloudESL APIs.
    
-   **/acs/alidns**: Used to call Alibaba Cloud DNS APIs.
    
-   **/acs/scim**: Used to access the Cross-domain Identity Management service.
    
-   **/acs/digitalstore**: Used to access Digital Store.
    
-   **/acs/scsp**: Used to access Smart Customer Service Platform.
    
-   **/acs/cloudgame**: Used to access Cloud Gaming Platform.
    
-   **/acs/aiccs**: Used to access Artificial Intelligence Cloud Call Service.
    
-   **/acs/alimt**: Used to access the Machine Translation service.
    
-   **/acs/easygene**: Used to call Genomics Computing Platform APIs.
    
-   **/acs/mcp-server**: Authorizes the Alibaba Cloud MCP Server to call Alibaba Cloud service APIs.
    
    **Note**
    
    The **/acs/mcp-server** scope is supported only by OAuth 2.1
    

Token

A security credential issued by the OAuth service that represents the authorization granted by the user.

-   ID token: Contains user identity information. It cannot be used to access Alibaba Cloud resources.
    
-   Access token: Contains user identity information and the application's OAuth scopes. It can be used to access Alibaba Cloud resources within the specified OAuth scopes.
    
-   Refresh token: Used to obtain a new access token without requiring the user to log on again.
    

Alibaba Cloud API

The API that an application can call to access Alibaba Cloud resources.

## Use cases

-   [Access Alibaba Cloud APIs from a web application](/help/en/ram/access-alibaba-cloud-apis-from-a-web-application)
    
-   [Access Alibaba Cloud APIs from a native application](/help/en/ram/access-alibaba-cloud-apis-from-a-native-application)
    
-   [Obtain user information by using OIDC](/help/en/ram/obtain-user-information-through-oidc)
    
-   [Synchronize accounts from the internal system of an enterprise to RAM based on SCIM](/help/en/ram/synchronize-accounts-from-an-enterprise-internal-system-to-ram-based-on-scim)
    
-   [Synchronize Okta users to RAM based on SCIM](/help/en/ram/synchronize-an-okta-user-to-alibaba-cloud-ram-through-the-scim-protocol)
    
-   [Use Alibaba Cloud IDaaS to synchronize account data from DingTalk, WeCom, Feishu, AD, and other IdPs to Alibaba Cloud RAM](/help/en/ram/use-idaas-to-synchronize-ldap-authenticated-and-dingtalk-accounts-to-ram)
    
-   [Synchronize accounts to RAM by using SCIM in Apsara Stack IDaaS](/help/en/ram/use-scim-to-synchronize-accounts-to-ram)
    

## **ID token claims**

When a user grants consent for the openid, aliuid, and profile scopes, the returned ID token can contain the following claims.

**Claim**

**Description**

**Example**

**Required scope**

**exp**

The token's expiration time, represented as a UNIX timestamp.

1517539523

openid

**sub**

The subject identifier for the authenticated user. This is a unique, non-recyclable identifier that does not contain any personally identifiable information (PII).

**Note**

For an assumed RAM role, the **sub** value is a concatenation of the role ID and role session name (`<RoleId:RoleSessionName>`) to ensure a unique value for each session.

123456789012\*\*\*\*

openid

**aud**

The audience of the token, which is the client ID of your OAuth application.

4567890123456\*\*\*\*

openid

**iss**

The issuer of the token. The value is `https://oauth.aliyun.com`.

https://oauth.aliyun.com

openid

**iat**

The time when the token was issued, represented as a UNIX timestamp.

1517533200

openid

**aid**

The ID of the Alibaba Cloud account to which the authenticated user belongs.

177242285274\*\*\*\*

aliuid

**uid**

The unique ID of the authenticated user. Valid values:

-   Alibaba Cloud account: The ID of the Alibaba Cloud account, which is the same as the value of **aid**.
    
-   RAM user: The ID of the RAM user.
    
-   RAM role: The ID of the RAM role.
    

20124982101502\*\*\*\*

aliuid

**type**

The type of the authenticated user. Valid values:

-   account: An Alibaba Cloud account.
    
-   user: A RAM user.
    
-   role: A RAM role.
    

user

profile

**login\_name**

The logon name of the Alibaba Cloud account.

**Note**

This claim is returned only for Alibaba Cloud accounts.

Alice

profile

**upn**

The logon name of the RAM user.

**Note**

This claim is returned only for RAM users.

Bob@examplecompany.onaliyun.com

profile

**name**

The name of the authenticated user. Valid values:

-   RAM user: The display name of the RAM user.
    
-   RAM role: `<RoleName:RoleSessionName>`.
    

**Note**

This claim is returned only for RAM users and roles.

Bob

profile
