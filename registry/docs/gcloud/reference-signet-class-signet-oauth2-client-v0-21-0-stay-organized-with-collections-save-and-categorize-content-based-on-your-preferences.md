-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# signet - Class Signet::OAuth2::Client (v0.21.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [0.21.0 (latest)](/ruby/docs/reference/signet/latest/Signet-OAuth2-Client)
-   [0.20.0](/ruby/docs/reference/signet/0.20.0/Signet-OAuth2-Client)

Reference documentation and code samples for the signet class Signet::OAuth2::Client.

## Inherits

-   Object

## Methods

### #access\_token

```
def access_token() -> String
```

Returns the access token associated with this client.

**Returns**

-   (String) — The access token.

### #access\_token=

```
def access_token=(new_access_token)
```

Sets the access token associated with this client.

**Parameter**

-   **new\_access\_token** (String) — The access token.

### #access\_type

```
def access_type() -> String, Symbol
```

Returns the current access type parameter for #authorization\_uri.

**Returns**

-   (String, Symbol) — The current access type.

### #access\_type=

```
def access_type=(new_access_type)
```

Sets the current access type parameter for #authorization\_uri.

**Parameter**

-   **new\_access\_type** (String, Symbol) — The current access type.

### #additional\_parameters

```
def additional_parameters() -> Hash
```

Returns the set of additional (non standard) parameters to be used by the client.

**Returns**

-   (Hash) — The pass through parameters.

### #additional\_parameters=

```
def additional_parameters=(new_additional_parameters)
```

Sets additional (non standard) parameters to be used by the client.

**Parameter**

-   **new\_additional\_parameters** (Hash) — The parameters.

### #audience

```
def audience() -> String
```

Returns the target audience ID when issuing assertions. Used only by the assertion grant type.

**Returns**

-   (String) — Target audience ID.

### #audience=

```
def audience=(new_audience)
```

Sets the target audience ID when issuing assertions. Used only by the assertion grant type.

**Parameter**

-   **new\_audience** (String) — Target audience ID

### #authorization\_uri

```
def authorization_uri(options = {}) -> Addressable::URI
```

Returns the authorization URI that the user should be redirected to.

**Returns**

-   (Addressable::URI) — The authorization URI.

**Raises**

-   (ArgumentError)

### #authorization\_uri=

```
def authorization_uri=(new_authorization_uri)
```

Sets the authorization URI for this client.

**Parameter**

-   **new\_authorization\_uri** (Addressable::URI, Hash, String, #to\_str) — The authorization URI.

### #clear\_credentials!

```
def clear_credentials!()
```

Removes all credentials from the client.

### #client\_id

```
def client_id() -> String
```

Returns the client identifier for this client.

**Returns**

-   (String) — The client identifier.

### #client\_id=

```
def client_id=(new_client_id)
```

Sets the client identifier for this client.

**Parameter**

-   **new\_client\_id** (String) — The client identifier.

### #client\_secret

```
def client_secret() -> String
```

Returns the client secret for this client.

**Returns**

-   (String) — The client secret.

### #client\_secret=

```
def client_secret=(new_client_secret)
```

Sets the client secret for this client.

**Parameter**

-   **new\_client\_secret** (String) — The client secret.

### #code

```
def code() -> String
```

Returns the authorization code issued to this client. Used only by the authorization code access grant type.

**Returns**

-   (String) — The authorization code.

### #code=

```
def code=(new_code)
```

Sets the authorization code issued to this client. Used only by the authorization code access grant type.

**Parameter**

-   **new\_code** (String) — The authorization code.

### #coerce\_uri

```
def coerce_uri(incoming_uri)
```

Addressable expects URIs formatted as hashes to come in with symbols as keys. Returns nil implicitly for the nil case.

### #decoded\_id\_token

```
def decoded_id_token(public_key = nil, options = {}) -> String
```

Returns the decoded ID token associated with this client.

**Parameter**

-   **public\_key** (OpenSSL::PKey::RSA, Object) — The public key to use to verify the ID token. Skips verification if omitted.

**Returns**

-   (String) — The decoded ID token.

**Raises**

-   ([Signet::UnsafeOperationError](https://docs.cloud.google.com/ruby/docs/reference/signet/latest/Signet-UnsafeOperationError))

### #expired?

```
def expired?() -> TrueClass, FalseClass
```

Returns true if the access token has expired. Returns false if the token has not expired or has an nil @expires\_at.

**Returns**

-   (TrueClass, FalseClass) — The expiration state of the access token.

### #expires\_at

```
def expires_at() -> Time, nil
```

Returns the timestamp the access token will expire at. Returns nil if the token does not expire.

**Returns**

-   (Time, nil) — The access token lifetime.

### #expires\_at=

```
def expires_at=(new_expires_at)
```

Limits the lifetime of the access token as number of seconds since the Epoch. Nil values will be treated as though the token does not expire.

**Parameter**

-   **new\_expires\_at** (String, Integer, Time, nil) — The access token expiration time.

### #expires\_in

```
def expires_in() -> Integer, nil
```

Returns the lifetime of the access token in seconds. Returns nil if the token does not expire.

**Returns**

-   (Integer, nil) — The access token lifetime.

### #expires\_in=

```
def expires_in=(new_expires_in)
```

Sets the lifetime of the access token in seconds. Resets the issued\_at timestamp. Nil values will be treated as though the token does not expire.

**Parameter**

-   **new\_expires\_in** (String, Integer, nil) — The access token lifetime.

### #expires\_within?

```
def expires_within?(sec) -> TrueClass, FalseClass
```

Returns true if the access token has expired or expires within the next n seconds. Returns false for tokens with a nil @expires\_at.

**Parameter**

-   **sec** (Integer) — Max number of seconds from now where a token is still considered expired.

**Returns**

-   (TrueClass, FalseClass) — The expiration state of the access token.

### #expiry

```
def expiry() -> Integer
```

Returns the number of seconds assertions are valid for Used only by the assertion grant type.

**Returns**

-   (Integer) — Assertion expiry, in seconds

### #expiry=

```
def expiry=(new_expiry)
```

Sets the number of seconds assertions are valid for Used only by the assertion grant type.

**Parameter**

-   **new\_expiry** (Integer, String) — Assertion expiry, in seconds

### #extension\_parameters

```
def extension_parameters() -> Hash
```

Returns the set of extension parameters used by the client. Used only by extension access grant types.

**Returns**

-   (Hash) — The extension parameters.

### #extension\_parameters=

```
def extension_parameters=(new_extension_parameters)
```

Sets extension parameters used by the client. Used only by extension access grant types.

**Parameter**

-   **new\_extension\_parameters** (Hash) — The parameters.

### #fetch\_access\_token

```
def fetch_access_token(options = {})
```

**Raises**

-   (ArgumentError)

### #fetch\_access\_token!

```
def fetch_access_token!(options = {})
```

### #fetch\_protected\_resource

```
def fetch_protected_resource(options = {}) -> Array
```

Transmits a request for a protected resource.

**Parameter**

-   **options** (Hash) —
    
    The configuration parameters for the request.
    
    -   `:request` - A pre-constructed request. An OAuth 2 Authorization header will be added to it, as well as an explicit Cache-Control `no-store` directive.
    -   `:method` - The HTTP method for the request. Defaults to 'GET'.
    -   `:uri` - The URI for the request.
    -   `:headers` - The HTTP headers for the request.
    -   `:body` - The HTTP body for the request.
    -   `:realm` - The Authorization realm. See RFC 2617.
    -   `:connection` - The HTTP connection to use. Must be of type `Faraday::Connection`.

**Returns**

-   (Array) — The response object.

**Raises**

-   ([::Signet::AuthorizationError](https://docs.cloud.google.com/ruby/docs/reference/signet/latest/Signet-AuthorizationError))

**Example**

\# Using Net::HTTP
response \= client.fetch\_protected\_resource(
  :uri \=\> 'http://www.example.com/protected/resource'
)

### #generate\_authenticated\_request

```
def generate_authenticated_request(options = {}) -> Faraday::Request
```

Generates an authenticated request for protected resources.

**Parameter**

-   **options** (Hash) —
    
    The configuration parameters for the request.
    
    -   `:request` - A pre-constructed request. An OAuth 2 Authorization header will be added to it, as well as an explicit Cache-Control `no-store` directive.
    -   `:method` - The HTTP method for the request. Defaults to 'GET'.
    -   `:uri` - The URI for the request.
    -   `:headers` - The HTTP headers for the request.
    -   `:body` - The HTTP body for the request.
    -   `:realm` - The Authorization realm. See RFC 2617.

**Returns**

-   (Faraday::Request) — The request object.

**Raises**

-   (ArgumentError)

### #grant\_type

```
def grant_type() -> String
```

Returns the inferred grant type, based on the current state of the client object. Returns `"none"` if the client has insufficient information to make an in-band authorization request.

**Returns**

-   (String) — The inferred grant type.

### #grant\_type=

```
def grant_type=(new_grant_type)
```

### #granted\_scopes

```
def granted_scopes() -> Array, nil
```

Returns the scopes granted by the authorization server.

**Returns**

-   (Array, nil) — The scope of access returned by the authorization server.

### #granted\_scopes=

```
def granted_scopes=(new_granted_scopes)
```

Sets the scopes returned by authorization server for this client.

**Parameter**

-   **new\_granted\_scopes** (String, Array, nil) — The scope of access returned by authorization server. This will ideally be expressed as space-delimited String.

### #id\_token

```
def id_token() -> String
```

Returns the ID token associated with this client.

**Returns**

-   (String) — The ID token.

### #id\_token=

```
def id_token=(new_id_token)
```

Sets the ID token associated with this client.

**Parameter**

-   **new\_id\_token** (String) — The ID token.

### #initialize

```
def initialize(options = {}) -> Client
```

Creates an OAuth 2.0 client.

**Parameter**

-   **options** (Hash) —
    
    The configuration parameters for the client.
    
    -   `:authorization_uri` - The authorization server's HTTP endpoint capable of authenticating the end-user and obtaining authorization.
    -   `:token_credential_uri` - The authorization server's HTTP endpoint capable of issuing tokens and refreshing expired tokens.
    -   `:client_id` - A unique identifier issued to the client to identify itself to the authorization server.
    -   `:client_secret` - A shared symmetric secret issued by the authorization server, which is used to authenticate the client.
    -   `:scope` - The scope of the access request, expressed either as an Array or as a space-delimited String.
    -   `:target_audience` - The final target audience for ID tokens fetched by this client, as a String.
    -   `:state` - An arbitrary string designed to allow the client to maintain state.
    -   `:code` - The authorization code received from the authorization server.
    -   `:redirect_uri` - The redirection URI used in the initial request.
    -   `:username` - The resource owner's username.
    -   `:password` - The resource owner's password.
    -   `:issuer` - Issuer ID when using assertion profile
    -   `:person` - Target user for assertions
    -   `:expiry` - Number of seconds assertions are valid for
    -   `:signing_key` - Signing key when using assertion profile
    -   `:refresh_token` - The refresh token associated with the access token to be refreshed.
    -   `:access_token` - The current access token for this client.
    -   `:id_token` - The current ID token for this client.
    -   `:extension_parameters` - When using an extension grant type, this the set of parameters used by that extension.
    -   `:granted_scopes` - All scopes granted by authorization server.

**Returns**

-   ([Client](https://docs.cloud.google.com/ruby/docs/reference/signet/latest/Signet-OAuth2-Client)) — a new instance of Client

**Example**

client \= Signet::OAuth2::Client.new(
  :authorization\_uri \=\>
    'https://example.server.com/authorization',
  :token\_credential\_uri \=\>
    'https://example.server.com/token',
  :client\_id \=\> 'anonymous',
  :client\_secret \=\> 'anonymous',
  :scope \=\> 'example',
  :redirect\_uri \=\> 'https://example.client.com/oauth'
)

### #issued\_at

```
def issued_at() -> Time, nil
```

Returns the timestamp the access token was issued at.

**Returns**

-   (Time, nil) — The access token issuance time.

### #issued\_at=

```
def issued_at=(new_issued_at)
```

Sets the timestamp the access token was issued at.

**Parameter**

-   **new\_issued\_at** (String, Integer, Time) — The access token issuance time.

### #issuer

```
def issuer() -> String
```

Returns the issuer ID associated with this client. Used only by the assertion grant type.

**Returns**

-   (String) — Issuer id.

### #issuer=

```
def issuer=(new_issuer)
```

Sets the issuer ID associated with this client. Used only by the assertion grant type.

**Parameter**

-   **new\_issuer** (String) — Issuer ID (typical in email adddress form).

### #password

```
def password() -> String
```

Returns the password associated with this client. Used only by the resource owner password credential access grant type.

**Returns**

-   (String) — The password.

### #password=

```
def password=(new_password)
```

Sets the password associated with this client. Used only by the resource owner password credential access grant type.

**Parameter**

-   **new\_password** (String) — The password.

### #person

```
def person() -> String
```

**Alias Of**: [#principal](https://docs.cloud.google.com/ruby/docs/reference/signet/latest/Signet-OAuth2-Client#Signet__OAuth2__Client_principal_instance_)

Returns the target resource owner for impersonation. Used only by the assertion grant type.

**Returns**

-   (String) — Target user for impersonation.

### #person=

```
def person=(new_person)
```

**Alias Of**: [#principal=](https://docs.cloud.google.com/ruby/docs/reference/signet/latest/Signet-OAuth2-Client#Signet__OAuth2__Client_principal=_instance_)

Sets the target resource owner for impersonation. Used only by the assertion grant type.

**Parameter**

-   **new\_person** (String) — Target user for impersonation

### #principal

```
def principal() -> String
```

**Aliases**

-   [#person](https://docs.cloud.google.com/ruby/docs/reference/signet/latest/Signet-OAuth2-Client#Signet__OAuth2__Client_person_instance_)

Returns the target resource owner for impersonation. Used only by the assertion grant type.

**Returns**

-   (String) — Target user for impersonation.

### #principal=

```
def principal=(new_person)
```

**Aliases**

-   [#person=](https://docs.cloud.google.com/ruby/docs/reference/signet/latest/Signet-OAuth2-Client#Signet__OAuth2__Client_person=_instance_)

Sets the target resource owner for impersonation. Used only by the assertion grant type.

**Parameter**

-   **new\_person** (String) — Target user for impersonation

### #redirect\_uri

```
def redirect_uri() -> String
```

Returns the redirect URI for this client.

**Returns**

-   (String) — The redirect URI.

### #redirect\_uri=

```
def redirect_uri=(new_redirect_uri)
```

Sets the redirect URI for this client.

**Parameter**

-   **new\_redirect\_uri** (String) — The redirect URI.

### #refresh!

```
def refresh!(options = {})
```

Refresh the access token, if possible

### #refresh\_token

```
def refresh_token() -> String
```

Returns the refresh token associated with this client.

**Returns**

-   (String) — The refresh token.

### #refresh\_token=

```
def refresh_token=(new_refresh_token)
```

Sets the refresh token associated with this client.

**Parameter**

-   **new\_refresh\_token** (String) — The refresh token.

### #scope

```
def scope() -> Array
```

Returns the scope for this client. Scope is a list of access ranges defined by the authorization server.

**Returns**

-   (Array) — The scope of access the client is requesting.

### #scope=

```
def scope=(new_scope)
```

Sets the scope for this client.

**Parameter**

-   **new\_scope** (Array, String) — The scope of access the client is requesting. This may be expressed as either an Array of String objects or as a space-delimited String.

### #signing\_algorithm

```
def signing_algorithm() -> String
```

Algorithm used for signing JWTs

**Returns**

-   (String) — Signing algorithm

### #signing\_key

```
def signing_key() -> String, OpenSSL::PKey
```

Returns the signing key associated with this client. Used only by the assertion grant type.

**Returns**

-   (String, OpenSSL::PKey) — Signing key

### #signing\_key=

```
def signing_key=(new_key)
```

Sets the signing key when issuing assertions. Used only by the assertion grant type.

**Parameter**

-   **new\_key** (String, OpenSSL::Pkey) — Signing key. Either private key for RSA or string for HMAC algorithm

### #state

```
def state() -> String
```

Returns the client's current state value.

**Returns**

-   (String) — The state value.

### #state=

```
def state=(new_state)
```

Sets the client's current state value.

**Parameter**

-   **new\_state** (String) — The state value.

### #sub

```
def sub()
```

The target "sub" when issuing assertions. Used in some Admin SDK APIs.

### #sub=

```
def sub=(value)
```

The target "sub" when issuing assertions. Used in some Admin SDK APIs.

### #target\_audience

```
def target_audience() -> String
```

Returns the final target audience for ID tokens fetched by this client.

**Returns**

-   (String) — The target audience.

### #target\_audience=

```
def target_audience=(new_target_audience)
```

Sets the final target audience for ID tokens fetched by this client.

**Parameter**

-   **new\_target\_audience** (String) — The new target audience.

### #to\_json

```
def to_json(*_args) -> String
```

Serialize the client object to JSON.

**Returns**

-   (String) — A serialized JSON representation of the client.

### #to\_jwt

```
def to_jwt(options = {})
```

### #token\_credential\_uri

```
def token_credential_uri() -> Addressable::URI
```

Returns the token credential URI for this client.

**Returns**

-   (Addressable::URI) — The token credential URI.

### #token\_credential\_uri=

```
def token_credential_uri=(new_token_credential_uri)
```

Sets the token credential URI for this client.

**Parameter**

-   **new\_token\_credential\_uri** (Addressable::URI, Hash, String, #to\_str) — The token credential URI.

### #update!

```
def update!(options = {})
```

Updates an OAuth 2.0 client.

**Parameter**

-   **options** (Hash) —
    
    The configuration parameters for the client.
    
    -   `:authorization_uri` - The authorization server's HTTP endpoint capable of authenticating the end-user and obtaining authorization.
    -   `:token_credential_uri` - The authorization server's HTTP endpoint capable of issuing tokens and refreshing expired tokens.
    -   `:client_id` - A unique identifier issued to the client to identify itself to the authorization server.
    -   `:client_secret` - A shared symmetric secret issued by the authorization server, which is used to authenticate the client.
    -   `:scope` - The scope of the access request, expressed either as an Array or as a space-delimited String.
    -   `:target_audience` - The final target audience for ID tokens fetched by this client, as a String.
    -   `:state` - An arbitrary string designed to allow the client to maintain state.
    -   `:code` - The authorization code received from the authorization server.
    -   `:redirect_uri` - The redirection URI used in the initial request.
    -   `:username` - The resource owner's username.
    -   `:password` - The resource owner's password.
    -   `:issuer` - Issuer ID when using assertion profile
    -   `:audience` - Target audience for assertions
    -   `:person` - Target user for assertions
    -   `:expiry` - Number of seconds assertions are valid for
    -   `:signing_key` - Signing key when using assertion profile
    -   `:refresh_token` - The refresh token associated with the access token to be refreshed.
    -   `:access_token` - The current access token for this client.
    -   `:access_type` - The current access type parameter for #authorization\_uri.
    -   `:id_token` - The current ID token for this client.
    -   `:extension_parameters` - When using an extension grant type, this is the set of parameters used by that extension.
    -   `:granted_scopes` - All scopes granted by authorization server.

**Example**

client.update!(
  :code \=\> 'i1WsRn1uB1',
  :access\_token \=\> 'FJQbwq9',
  :expires\_in \=\> 3600
)

### #update\_token!

```
def update_token!(options = {})
```

Updates an OAuth 2.0 client.

**Parameter**

-   **options** (Hash) —
    
    The configuration parameters related to the token.
    
    -   `:refresh_token` - The refresh token associated with the access token to be refreshed.
    -   `:access_token` - The current access token for this client.
    -   `:id_token` - The current ID token for this client.
    -   `:expires_in` - The time in seconds until access token expiration.
    -   `:expires_at` - The time as an integer number of seconds since the Epoch
    -   `:issued_at` - The timestamp that the token was issued at.

**Example**

client.update!(
  :refresh\_token \=\> 'n4E9O119d',
  :access\_token \=\> 'FJQbwq9',
  :expires\_in \=\> 3600
)

### #username

```
def username() -> String
```

Returns the username associated with this client. Used only by the resource owner password credential access grant type.

**Returns**

-   (String) — The username.

### #username=

```
def username=(new_username)
```

Sets the username associated with this client. Used only by the resource owner password credential access grant type.

**Parameter**

-   **new\_username** (String) — The username.

## Constants

### OOB\_MODES

**value:** \["urn:ietf:wg:oauth:2.0:oob:auto", "urn:ietf:wg:oauth:2.0:oob", "oob"\].freeze

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
