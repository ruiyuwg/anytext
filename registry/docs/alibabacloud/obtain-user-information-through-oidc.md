OpenID Connect (OIDC) is an authentication protocol layer that is built based on the Open Authorization (OAuth) 2.0 protocol. This topic describes how to obtain user information by using OIDC.

## Prerequisites

A web application is created. The name, OAuth scopes, and callback URL are specified for the application. An application secret is created for the application. For more information, see [Create an application](/help/en/ram/create-an-application#task-183262), [Manage OAuth scopes](/help/en/ram/add-oauth-scopes#task-266315), and [Create an application secret](/help/en/ram/create-an-application-secret#task-266316).

## Terms

**Term**

**Description**

ID token

OIDC can issue the ID token of a user to an application. The ID token can be used to obtain the user information, such as the username and logon name. The ID token cannot be used to access Alibaba Cloud resources.

OIDC Discovery Endpoint

OIDC provides different endpoints for different purposes. Discovery Endpoint contains the necessary configuration information that is required by OIDC.

**Note**

Discovery Endpoint provides a set of keys in a JSON document. The keys contain information about the OIDC provider, such as the response type that is supported by OIDC, the value of the token issuer, the signing public key endpoint of the ID token, and the signing algorithm.

As an OIDC provider, Alibaba Cloud provides the following Discovery Endpoint to simplify configuration: `https://oauth.alibabacloud.com/.well-known/openid-configuration`.

The following example shows the content of Discovery Endpoint:

```
{
  "code_challenge_methods_supported": [
    "plain",
    "S256"
  ],
  "subject_types_supported": [
    "public"
  ],
  "response_types_supported": [
    "code"
  ],
  "issuer": "https://oauth.alibabacloud.com",
  "jwks_uri": "https://oauth.alibabacloud.com/v1/keys",
  "revocation_endpoint": "https://oauth.alibabacloud.com/v1/revoke",
  "token_endpoint": "https://oauth.alibabacloud.com/v1/token",
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "scopes_supported": [
    "openid",
    "aliuid",
    "profile"
  ],
  "authorization_endpoint": "https://signin.alibabacloud.com/oauth2/v1/auth"
}
```

## Process

![IODC基本流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9002607761/p47437.png)

1.  A user logs on to an application by using a browser.
    
2.  The application redirects the user to the Alibaba Cloud OIDC service and sends the URL of the application to the browser.
    
    **Note**
    
    If the user is not logged on to Alibaba Cloud, the application redirects the user to the Alibaba Cloud logon page.
    
3.  The user logs on to the Alibaba Cloud OIDC service by using the browser and requests an authorization code.
    
4.  The Alibaba Cloud OIDC service returns an authorization code to the browser.
    
5.  The application requests an ID token that corresponds to the user from the Alibaba Cloud OIDC service. The authorization code is required in the request.
    
6.  The Alibaba Cloud OIDC service returns the ID token and access token to the application. The application can use the ID token or access token to obtain user information.
    
    -   Parse the ID token to obtain user information.
        
        The application must validate the signature of the ID token. The application obtains the signing public key of the ID token, verifies the JSON Web Token (JWT) signature of the ID token, and then obtains the parsed user information. For more information, see [Example 1: Obtain the signing public key of an ID token](#section-z8t-wpq-siz), [Example 2: Verify the JWT signature of an ID token](#section-hbt-qff-8x3), and [Example 3: Parse an ID token to obtain user information](#section-at9-88y-ynv).
        
    -   Use the ID token to communicate with different modules of the application.
        
        The application must validate the signature of the ID token. The application obtains the signing public key of the ID token and verifies the JWT signature of the ID token. For more information, see and [Example 2: Verify the JWT signature of an ID token](#section-hbt-qff-8x3).
        
    -   Use the access token to query user information multiple times.
        
        After the application obtains the access token, the application calls the UserInfo operation to obtain user information. For more information, see [Example 4: Obtain user information by using an access token and the UserInfo operation](#section-l5o-ito-xf6).
        
    

## Example 1: Obtain the signing public key of an ID token

Sample request

```
private List getSignPublicKey() {
  HttpResponse response = HttpClientUtils.doGet("https://oauth.alibabacloud.com/v1/keys");
  List rsaKeyList = new ArrayList();
  if (response.getCode() == 200 && response.isSuccess()) {
    String keys = JSON.parseObject(response.getData()).getString("keys");
    try {
      JSONArray publicKeyList = JSON.parseArray(keys);
      for (Object object : publicKeyList) {
        RSAKey rsaKey = RSAKey.parse(JSONObject.toJSONString(object));
        rsaKeyList.add(rsaKey);
      }
      return rsaKeyList;
    } catch (Exception e) {
      LOG.info(e.getMessage());
    }
  }
  LOG.info("GetSignPublicKey failed:{}", response.getData());
  throw new AuthenticationException(response.getData());
}                    
```

## Example 2: Verify the JWT signature of an ID token

The ID token that is issued by Alibaba Cloud is a signed JSON JWT. The RS256 signing algorithm that complies with the JWS standard is used. When an application requests user information, the application must validate the following content of the ID token:

-   Token signature: The application checks whether the ID token is valid by using the OAuth-issued signing public key in [Example 1: Obtain the signing public key of an ID token](#section-z8t-wpq-siz).
    
    An OAuth public key is regularly rotated. Pay attention to the following points when you obtain such a public key:
    
    -   Do not cache or store a public key for subsequent use. Obtain a public key for each request.
        
    -   During public key rotation, multiple valid public keys exist. All the public keys must be used to verify signature in sequence until the signature verification is successful. Do not specify the number of public keys that can be used to verify signature.
        

Sample request

```
public boolean verifySign(SignedJWT signedJWT) {
  List publicKeyList = getSignPublicKey();
  RSAKey rsaKey = null;
  for (RSAKey key : publicKeyList) {
    if (signedJWT.getHeader().getKeyID().equals(key.getKeyID())) {
      rsaKey = key;
    }
  }
  if (rsaKey != null) {
    try {
      RSASSAVerifier verifier = new RSASSAVerifier(rsaKey.toRSAPublicKey());
      if (signedJWT.verify(verifier)) {
        return true;
      }
    } catch (Exception e) {
      LOG.info("Verify exception:{}", e.getMessage());
    }
  }
  throw new AuthenticationException("Can't verify signature for id token");
}
```

-   Token validity: Alibaba Cloud checks the time when the ID token was issued and the validity period of the ID token.
    
-   Token recipient: Alibaba Cloud prevents ID tokens that are issued to other applications from being issued to the application.
    

## Example 3: Parse an ID token to obtain user information

-   Response parameters
    
    -   Header parameters
        
        **Parameter**
        
        **Description**
        
        **Required OAuth scope**
        
        alg
        
        The signing algorithm.
        
        openid
        
        kid
        
        The public key that is used to validate the ID token. You must use this key to validate your signature and prevent your ID token from being tampered with.
        
        openid
        
    -   Body parameters
        
        **Parameter**
        
        **Description**
        
        **Required OAuth scope**
        
        exp
        
        The timestamp when the token expires.
        
        openid
        
        sub
        
        A unique string that indicates the user. The string does not contain the UID and username of the user.
        
        **Note**
        
        If the user assumes a Resource Access Management (RAM) role, the value of the **sub** parameter is generated based on `<RoleId:RoleSessionName>`. The value is unique and generated for each user.
        
        openid
        
        aud
        
        The receiver of the token, which is the ID of the OAuth application.
        
        openid
        
        iss
        
        The issuer of the token. The value is https://oauth.alibabacloud.com.
        
        openid
        
        iat
        
        The timestamp when the token was issued.
        
        openid
        
        type
        
        The type of the user. Valid values:
        
        -   account: an Alibaba Cloud account
            
        -   user: a RAM user.
            
        -   role: a RAM role.
            
        
        profile
        
        name
        
        The display name of the user. Valid values:
        
        -   If a RAM user is used, the value is the display name of the RAM user.
            
        -   If a RAM role is used, the value is in the `<RoleName:RoleSessionName>` format.
            
        
        **Note**
        
        This parameter is returned only if a RAM user or a RAM role initiates the request.
        
        profile
        
        upn
        
        The logon name of the RAM user.
        
        **Note**
        
        This parameter is returned only if a RAM user initiates the request.
        
        profile
        
        login\_name
        
        The logon name of the Alibaba Cloud account.
        
        **Note**
        
        This parameter is returned only if an Alibaba Cloud account initiates the request.
        
        profile
        
        aid
        
        The ID of the Alibaba Cloud account to which the user belongs.
        
        aliuid
        
        uid
        
        The ID of the user. Valid values:
        
        -   If an Alibaba Cloud account is used, the value is the same as the value of the **aid** parameter.
            
        -   If a RAM user is used, the value is the ID of the RAM user.
            
        -   If a RAM role is used, the value is the ID of the RAM role.
            
        
        aliuid
        
-   Sample responses
    
    -   Sample response header
        
        ```
        {
          "alg": "RS256",
          "kid": "JC9wxzrhqJ0gtaCEt2QLUfevEUIwltFhui4O1bh****"
        }
        ```
        
    -   Sample response body
        
        For demonstration purposes, the following sample responses show an ID token before encoding. In actual scenarios, an encoded ID token is returned. For more information, see [Example 2: Verify the JWT signature of an ID token](#section-hbt-qff-8x3).
        
        -   Sample response body of an Alibaba Cloud account-initiated request
            
            ```
            {
              "exp": 1517539523,
              "sub": "123456789012****",
              "aud": "4567890123456****",
              "iss": "https://oauth.alibabacloud.com",
              "iat": 1517535923,
              "type": "account",
              "login_name":"alice@example.com", //The logon name of the Alibaba Cloud account.
              "aid": "123456789012****", //The ID of the Alibaba Cloud account.
              "uid": "123456789012****" //The ID of the Alibaba Cloud account.
            }
            ```
            
        -   Sample response body of a RAM user-initiated request
            
            ```
            {
              "exp": 1517539523,
              "sub": "123456789012****",
              "aud": "4567890123456****",
              "iss": "https://oauth.alibabacloud.com",
              "iat": 1517535923,
              "type": "user",
              "name": "alice", //The display name of the RAM user.
              "upn": "alice@example.onaliyun.com", //The logon name of the RAM user.
              "aid": "123456789012****", //The ID of the Alibaba Cloud account to which the RAM user belongs.
              "uid": "234567890123****" //The ID of the RAM user.
            }
            ```
            
        -   Sample response body of a RAM role-initiated request
            
            ```
            {
              "exp": 1517539523,
              "sub": "123456789012****",
              "aud": "4567890123456****",
              "iss": "https://oauth.aliyun.com",
              "iat": 1517535923,
              "type": "role",
              "name": "NetworkAdministrator:alice", //The display name of the RAM role.
              "aid": "123456789012****", //The ID of the Alibaba Cloud account to which the RAM role belongs.
              "uid": "300800165472****" //The ID of the RAM role.
            }
            ```
            

## Example 4: Obtain user information by using an access token and the UserInfo operation

After you obtain an access token, you can call the UserInfo operation to obtain user information. The UserInfo operation can be called only by using an access token, and the response information is not encoded.

**Note**

In the actual usage scenarios of OIDC, an access token can be returned even if only the openid, aliuid, and profile scopes are specified. The returned access token can be used only to call the UserInfo operation.

The endpoint for the UserInfo operation is: `https://oauth.alibabacloud.com/v1/userinfo`.

Sample request

```
GET v1/userinfo HTTP/1.1
Host: oauth.alibabacloud.com
Authorization: Bearer SIAV32hkKG
```

Response parameters

**Parameter**

**Description**

**Required OAuth scope**

sub

A unique string that indicates the user. The string does not contain the UID and username of the user.

openid

type

The type of the user.

profile

name

The display name of the user.

**Note**

This parameter is returned only if a RAM user or a RAM role initiates the request.

profile

upn

The logon name of the RAM user.

**Note**

This parameter is returned only if a RAM user initiates the request.

profile

login\_name

The logon name of the Alibaba Cloud account.

**Note**

This parameter is returned only if an Alibaba Cloud account initiates the request.

profile

aid

The ID of the Alibaba Cloud account to which the user belongs.

aliuid

uid

The ID of the user.

aliuid

Sample response body

-   Sample response body of an Alibaba Cloud account-initiated request
    
    ```
    HTTP/1.1 200 OK
    Content-Type: application/json
    {
      "sub": "123456789012****", 
      "type": "account",
      "login_name":"alice@example.com", //The logon name of the Alibaba Cloud account.
      "aid": "123456789012****", //The ID of the Alibaba Cloud account.
      "uid": "123456789012****" //The ID of the Alibaba Cloud account.
    }
    ```
    
-   Sample response body of a RAM user-initiated request
    
    ```
    HTTP/1.1 200 OK
    Content-Type: application/json
    {
      "sub": "123456789012****", 
      "type": "user",  
      "name": "alice", //The display name of the RAM user.
      "upn": "alice@example.onaliyun.com", //The logon name of the RAM user.
      "aid": "123456789012****", //The ID of the Alibaba Cloud account to which the RAM user belongs.
      "uid": "234567890123****" //The ID of the RAM user.
    }
    ```
    
-   Sample response body of a RAM role-initiated request
    
    ```
    HTTP/1.1 200 OK
    Content-Type: application/json
    {
      "sub": "123456789012****", 
      "type": "role",
      "name": "NetworkAdministrator:alice", //The display name of the RAM role.
      "aid": "123456789012****", //The ID of the Alibaba Cloud account to which the RAM role belongs.
      "uid": "300800165472****" //The ID of the RAM role.
    }
    ```
