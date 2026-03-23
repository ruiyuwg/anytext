This topic describes how to use Open Authorization (OAuth) 2.0 to access Alibaba Cloud APIs from a web application.

## Prerequisites

-   A web application is created. The name, OAuth scopes, and callback URL are specified for the web application. For more information, see [Create an application](/help/en/ram/create-an-application#task-183262). After the web application is created, you can view the application ID (client\_id) in the application list, as shown in the following figure. ![应用ID](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2504148761/p127276.png)
    
    **Note**
    
    The web application can access Alibaba Cloud resources within your Alibaba Cloud account. If you want the web application to access Alibaba Cloud resources that belong to other Alibaba Cloud accounts, make sure that the application is granted the required permissions.
    
-   An application secret is created for the web application. For more information, see [Create an application secret](/help/en/ram/create-an-application-secret#task-266316). The secret is displayed only when you create the web application and is unavailable for subsequent queries. We recommend that you save the secret for subsequent use.
    

## Process

![基本流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9512607761/p14349.png)

1.  A user logs on to a web application by using a browser.
    
2.  The web application redirects the user to the Alibaba Cloud OAuth 2.0 service and sends the URL of the application to the browser.
    
    **Note**
    
    If the user is not logged on to Alibaba Cloud, the web application redirects the user to the Alibaba Cloud logon page.
    
3.  The user logs on to the Alibaba Cloud OAuth 2.0 service by using the browser and requests an authorization code.
    
4.  The Alibaba Cloud OAuth 2.0 service redirects the user to the web application and returns an authorization code to the browser.
    
5.  The web application requests an access token that corresponds to the user from the Alibaba Cloud OAuth 2.0 service. The authorization code is required in the request.
    
    -   For more information about how to obtain an access token, see [Obtain an access token](#section-03).
        
    -   For more information about how to obtain a new access token, see [Obtain a new access token](#section-04).
        
    -   For more information about how to revoke a refresh token, see [Revoke a refresh token](#section-05).
        
    
6.  The Alibaba Cloud OAuth 2.0 service sends the obtained access token to the web application.
    
7.  The web application uses the access token to access an API of Alibaba Cloud.
    
    **Note**
    
    The access token contains the identity information about the user and can be used by the web application to access the resources of the user.
    

## Obtain an access token

### **Step 1:** The web application redirects the user to the Alibaba Cloud OAuth 2.0 service to obtain an authorization code

The endpoint that is used to obtain an authorization code is `https://signin.alibabacloud.com/oauth2/v1/auth`.

The following table describes the request parameters.

**Parameter**

**Required**

**Description**

client\_id

Yes

The ID of the web application.

redirect\_uri

Yes

The redirect Uniform Resource Identifier (URI) of the web application.

response\_type

Yes

The type of the response. Set the value to code.

scope

No

The space-separated list of OAuth scopes. If you leave this parameter empty, the web application requests access to all scopes.

access\_type

No

The access type of the web application. Valid values:

-   online: The web application requests only an access token.
    
-   offline: The web application requests an access token and a refresh token. The refresh token can be used to obtain new access tokens multiple times based on the business requirements.
    

Default value: online.

state

No

A value that is used in both the request and response. You can configure the state parameter as a nonce to prevent cross-site request forgery (CSRF) attacks or hold the state between the web application and the Alibaba Cloud OAuth 2.0 service. If you set this parameter to a random string, the Alibaba Cloud OAuth 2.0 service returns the value of state in the response for subsequent use.

prompt

No

Specifies whether the server needs to prompt the user to grant the required permissions to the web application.

If you specify this parameter, the user is required to grant the required permissions to the web application. The user must grant the required permissions to the web application even if the Alibaba Cloud account already granted the required permissions to the web application. If you leave this parameter empty, only the Alibaba Cloud account is required to grant the required permissions to the web application the first time the Alibaba Cloud account uses the web application.

Set the value to `admin_consent`. This value specifies that the server displays the authorization page before the server returns the requested authorization code to the client.

Sample request:

```
https://signin.alibabacloud.com/oauth2/v1/auth?
client_id=123****&
redirect_uri=https://example.com/authcallback/&
response_type=code&
scope=openid /acs/ccc&
access_type=offline&
state=123456****
```

The following table describes the response parameters.

**Parameter**

**Description**

code

The authorization code.

state

The value of the state parameter in the request.

Sample response:

```
GET HTTP/1.1 302 Found
Location: https://example.com/authcallback/?code=ABAFDGDFXYZW888&state=123456****
```

### **Step 2:** The web application uses the authorization code to request an access token that corresponds to the user from the Alibaba Cloud OAuth 2.0 service

The endpoint that is used to request an access token is `https://oauth.alibabacloud.com/v1/token`.

The following table describes the request parameters.

**Parameter**

**Required**

**Description**

code

Yes

The authorization code that is obtained from the response in [Step 1](#).

client\_id

Yes

The ID of the web application.

redirect\_uri

Yes

The URI that is used to obtain the authorization code. The redirect URI must be the same as that in the request of [Step 1](#p-kqw-07x-51x).

grant\_type

Yes

Set the value to authorization\_code.

client\_secret

Yes

The application secret that is used to authenticate the web application when the web application requests an access token.

Sample request:

```
POST /v1/token HTTP/1.1
Host: oauth.alibabacloud.com
Content-Type: application/x-www-form-urlencoded
code=ABAFDGDFXYZW888&
client_id=123****&
client_secret=`your_client_secret`&
redirect_uri=https://example.com/authcallback/&
grant_type=authorization_code
```

The following table describes the response parameters.

**Parameter**

**Description**

access\_token

The access token that is returned.

The web application can use this token to access Alibaba Cloud APIs.

expires\_in

The remaining validity period of the access token. Unit: seconds.

token\_type

The type of the access token. Valid value: Bearer.

id\_token

The ID token.

The value is a JSON Web Token (JWT). If openid is included in the value of the scope parameter in the request that is initiated to obtain the authorization code, an ID token is returned.

refresh\_token

The refresh token.

If the access\_type parameter is set to offline in the request that is initiated to obtain the authorization code, a refresh token is returned.

scope

The actual authorization scopes of the obtained authorization code.

If the authorization scopes that are required by the web application are not limited to the `openid` scope, check whether the required scopes are included in the value of the scope parameter.

If the web application cannot access the scopes that are specified by the scope parameter, re-grant the permissions. To re-grant the permissions, set the `prompt parameter to admin_consent` when you request an authorization code by using `https://signin.alibabacloud.com/oauth2/v1/auth` in [Step 1](#p-kqw-07x-51x).

Sample response:

```
{
  "access_token": "eyJraWQiOiJrMTIzNCIsImVu****",
  "token_type": "Bearer",
  "expires_in": "3600",
  "refresh_token": "Ccx63VVeTn2dxV7ovXXfLtAqLLERA****",
  "id_token": "eyJhbGciOiJIUzI1****",
  "scope": "openid /acs/ccc"
}
```

## Obtain a new access token

The endpoint that is used to request an access token is `https://oauth.alibabacloud.com/v1/token`.

The following table describes the request parameters.

**Parameter**

**Required**

**Description**

refresh\_token

Yes

The refresh token that is obtained by using the authorization code.

client\_id

Yes

The ID of the web application.

grant\_type

Yes

Set the value to refresh\_token.

client\_secret

No

The application secret that is used to authenticate the web application when the web application requests an access token.

Sample request:

```
POST /v1/token HTTP/1.1
Host: oauth.alibabacloud.com
Content-Type: application/x-www-form-urlencoded
refresh_token=Ccx63VVeTn2dxV7ovXXfLtAqLLERAH1Bc&
client_id=123****&
client_secret=`your_client_secret`&
grant_type=refresh_token
```

The following table describes the response parameters.

**Parameter**

**Description**

access\_token

The new access token. The web application can use the token to access Alibaba Cloud APIs.

expires\_in

The remaining validity period of the access token. Unit: seconds.

token\_type

The type of the access token. Valid value: Bearer.

Sample response:

```
{
  "access_token": "eyJraWQiOiJrMTIzNCIsImVu****",
  "token_type": "Bearer",
  "expires_in": "3600"
}
```

## Revoke a refresh token

When a user logs out of a web application or removes its account from the web application, you must revoke the refresh token of the application.

The endpoint that is used to revoke a refresh token is `https://oauth.alibabacloud.com/v1/revoke`.

The following table describes the request parameters.

**Parameter**

**Required**

**Description**

token

Yes

The refresh token that you want to revoke.

client\_id

Yes

The ID of the web application.

client\_secret

No

The secret of the web application.
