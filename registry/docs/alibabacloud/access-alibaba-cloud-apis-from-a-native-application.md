This topic describes how to use Open Authorization (OAuth) 2.0 to access Alibaba Cloud APIs from a native application, such as a desktop application or a mobile app.

## Prerequisites

A native application is created. The name, OAuth scopes, and callback URL are specified for the native application. For more information, see [Create an application](/help/en/ram/create-an-application#task-183262). Native applications do not use application secrets because native applications run in untrusted environments.

**Note**

After you create a native application, the application can access Alibaba Cloud resources within your Alibaba Cloud account.

## Process

![基本流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7367507761/p14376.png)

1.  A user logs on to a native application by using a browser.
    
2.  The native application redirects the user to the Alibaba Cloud OAuth 2.0 service and sends the URL of the application to the browser.
    
    **Note**
    
    If the user is not logged on to Alibaba Cloud, the native application redirects the user to the Alibaba Cloud logon page.
    
3.  The user logs on to the Alibaba Cloud OAuth 2.0 service by using the browser and requests an authorization code.
    
4.  The Alibaba Cloud OAuth 2.0 service redirects the user to the native application and returns an authorization code to the browser.
    
5.  The native application requests an access token that corresponds to the user from the Alibaba Cloud OAuth 2.0 service. The authorization code is required in the request.
    
    -   For more information about how to obtain an access token, see [Obtain an access token](/help/en/ram/access-alibaba-cloud-apis-from-a-native-application#section-03).
        
    -   For more information about how to obtain a new access token, see [Obtain a new access token](/help/en/ram/access-alibaba-cloud-apis-from-a-native-application#section-04).
        
    -   For more information about how to revoke a refresh token, see [Revoke a refresh token](/help/en/ram/access-alibaba-cloud-apis-from-a-native-application#section-05).
        
    
6.  The Alibaba Cloud OAuth 2.0 service sends the obtained access token to the native application.
    
7.  The native application uses the access token to access an API of Alibaba Cloud.
    
    **Note**
    
    The access token contains the identity information about the user and can be used by the native application to access the resources of the user.
    

## PKCE

Native applications can use the Proof Key for Code Exchange (PKCE) specification to obtain an authorization code and an access token. For more information, see [Proof Key for Code Exchange by OAuth Public Clients](https://tools.ietf.org/html/rfc7636).

**Note**

The PKCE specification can be used to mitigate interception attacks against authorization codes.

1.  A native application creates and records a random string named `code_verifier`.
    
    **Note**
    
    A `code_verifier` string is a high-entropy cryptographic string. The string must be 43 to 128 characters in length, and can contain `letters, digits, hyphens (-), periods (.), underscores (_), and tildes (~)`.
    
2.  The native application creates a `code_challenge` string based on the code\_verifier string and the selected `transformation` method. Then, the native application sends a request to obtain an authorization code. The `code_challenge` string and the transformation method to create the `code_challenge` string must be included in the request.
    
    ```
    code_challenge = transform(code_verifier, [Plain|S256])
    ```
    
    **Transformation method**
    
    **Value**
    
    `plain`
    
    If the `transformation` method is `plain`, the value of the `code_challenge` string is the same as the value of the `code_verifier` string.
    
    `S256`
    
    If the `transformation` method is `S256`, the value of the `code_challenge` string is the same as the SHA-256 hash value of the `code_verifier` string.
    
    ```
    code_challenge=BASE64URL-Encode(SHA256(ASCII(code_verifier)))
    ```
    
    **Note**
    
    The input of the hash algorithm is an ASCII-encoded string of `code_verifier`. The output of the hash algorithm must be encoded by using Base64URL.
    
    The following section provides an example on how to calculate a `code_challenge` string:
    
    If the S256 transformation method is used and the value of the `code_verifier` string is dBjftJeZ4CVP-mB92K27uhbUJU1p1r\_wW1gFWFOEjXk, the value of the `code_challenge` string is E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM.
    
3.  When the native application uses the obtained authorization code to request an access token, the server determines whether to issue an access token by calculating the code\_challenge string based on the code\_verifier string.
    
    The obtained authorization code contains the `code_verifier` string. The server calculates a `code_challenge` string based on the `code_verifier` string and the transformation method that is selected by the native application. Then, the server compares the code\_challenge string with the `code_challenge` string that is provided by the native application. If the values of the two code\_challenge strings are the same, the server issues the requested access token.
    

## Obtain an access token

1.  The native application redirects the user to the Alibaba Cloud OAuth 2.0 service to obtain an authorization code.
    
    The endpoint that is used to obtain an authorization code is `https://signin.alibabacloud.com/oauth2/v1/auth`.
    
    Table 1 Request parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    client\_id
    
    Yes
    
    The ID of the native application.
    
    redirect\_uri
    
    Yes
    
    The redirect Uniform Resource Identifier (URI) of the native application.
    
    response\_type
    
    Yes
    
    The type of the response. Set the value to code.
    
    scope
    
    No
    
    The space-separated list of OAuth scopes. If you leave this parameter empty, the native application requests access to all scopes.
    
    state
    
    No
    
    A value that is used in both the request and response. You can configure the state parameter as a nonce to prevent cross-site request forgery (CSRF) attacks or hold the state between the native application and the Alibaba Cloud OAuth 2.0 service. If you set this parameter to a random string, the Alibaba Cloud OAuth 2.0 service returns the value of state in the response for subsequent use.
    
    code\_challenge\_method
    
    No
    
    The transformation method. If you leave this parameter empty, the default method plain is used.
    
    code\_challenge
    
    No
    
    This parameter is used to secure authorization code grants based on the PKCE specification from the native application. This parameter is generated by transcoding and encoding the code\_verifier string based on the value of the code\_challenge\_method parameter.
    
    **Note**
    
    If you leave this parameter empty, the PKCE specification cannot be used, and you do not need to specify the code\_verifier string when a native application uses an authorization code to request an access token. If another application intercepts the authorization code, the application can use this code to request an access token.
    
    prompt
    
    No
    
    Specifies whether the server needs to prompt the user to grant the required permissions to the web application.
    
    If you specify this parameter, the user is required to grant the required permissions to the web application. The user must grant the required permissions to the web application even if the Alibaba Cloud account already granted the required permissions to the web application. If you leave this parameter empty, only the Alibaba Cloud account is required to grant the required permissions to the web application the first time the Alibaba Cloud account uses the web application.
    
    Set the value to `admin_consent`. This value specifies that the server displays the authorization page before the server returns the requested authorization code to the client.
    
    Sample request
    
    ```
    https://signin.alibabacloud.com/oauth2/v1/auth?
    client_id=98989****
    &redirect_uri=meeting%3A%2F%2Fauthorize%2F
    &response_type=code
    &scope=openid%20%2Fworksuite%2Fuseraccess
    &state=123456****
    &code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSst****
    &code_challenge_method=S256
    ```
    
    Sample response
    
    ```
    GET HTTP/1.1 302 Found
    Location: meeting://authorize/?code=ABAFDGDFXYZW888&state=123456****                     
    ```
    
2.  The native application uses the authorization code to request an access token that corresponds to the user from the Alibaba Cloud OAuth 2.0 service.
    
    The endpoint that is used to request an access token is `https://oauth.alibabacloud.com/v1/token`.
    
    Table 2 Request parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    code
    
    Yes
    
    The authorization code that is obtained by the native application.
    
    client\_id
    
    Yes
    
    The ID of the native application.
    
    redirect\_uri
    
    Yes
    
    The URI that is used to obtain the authorization code.
    
    grant\_type
    
    Yes
    
    Set the value to authorization\_code.
    
    code\_verifier
    
    No
    
    The code\_verifier string that you use to create the code\_challenge string in the request for an authorization code.
    
    Sample request
    
    ```
    POST /v1/token HTTP/1.1 
    Host: oauth.alibabacloud.com 
    Content-Type: application/x-www-form-urlencoded
    code=ABAFDGDFXYZW888&
    client_id=98989****
    redirect_uri=meeting://authorize/&
    grant_type=authorization_code&
    code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk                    
    ```
    
    Table 3 Response parameters
    
    **Parameter**
    
    **Description**
    
    access\_token
    
    The access token that is returned. The native application can use the access token to access Alibaba Cloud APIs.
    
    expires\_in
    
    The remaining validity period of the access token. Unit: seconds.
    
    token\_type
    
    The type of the access token. The value is Bearer.
    
    id\_token
    
    The ID token. The value is a JSON Web Token (JWT). If openid is included in the value of the scope parameter in the request that is initiated to obtain the authorization code, an ID token is returned.
    
    refresh\_token
    
    The refresh token. The native application can use the refresh token to obtain a new access token without the need to specify the original access token.
    
    Sample response
    
    ```
    {
      "access_token": "eyJraWQiOiJrMTIzNCIsImVuYyI6****",
      "token_type": "Bearer",
      "expires_in": 3600,
      "refresh_token": "Ccx63VVeTn2dxV7ovXXfLtAqLLERA****",
      "id_token": "eyJhbGciOiJIUzI1****"
    }                      
    ```
    

## Obtain a new access token

The endpoint that is used to request an access token is `https://oauth.alibabacloud.com/v1/token`.

Table 4 Request parameters

**Parameter**

**Required**

**Description**

refresh\_token

Yes

The refresh token that is obtained by using the authorization code.

client\_id

Yes

The ID of the native application.

grant\_type

Yes

Set the value to refresh\_token.

Sample request

```
POST /v1/token HTTP/1.1 
Host: oauth.alibabacloud.com 
Content-Type: application/x-www-form-urlencoded
refresh_token=Ccx63VVeTn2dxV7ovXXfLtAqLLERAH****
client_id=98989****
grant_type=refresh_token
```

Table 5 Response parameters

**Parameter**

**Description**

access\_token

The new access token. The native application can use the new access token to access Alibaba Cloud APIs.

expires\_in

The remaining validity period of the access token. Unit: seconds.

token\_type

The type of the access token. The value is Bearer.

Sample response

```
{
  "access_token": "eyJraWQiOiJrMTIzNCIsImVuYyI6****",
  "token_type": "Bearer",
  "expires_in": 3600,
}                      
```

**Note**

The values in this response are the same as the values in the preceding sample response. This response does not contain the refresh\_token and id\_token parameters.

## Revoke a refresh token

When a user logs out of a native application or removes an account from a native application, you must revoke the refresh token of the application.

The endpoint that is used to revoke a refresh token is `https://oauth.alibabacloud.com/v1/revoke`.

Table 6 Request parameters

**Parameter**

**Required**

**Description**

token

Yes

The refresh token that you want to revoke.

client\_id

Yes

The ID of the native application.
