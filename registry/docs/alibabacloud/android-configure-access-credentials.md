To make requests to Object Storage Service (OSS) using the Android software development kit (SDK), you must configure access credentials. Alibaba Cloud services use access credentials to verify your identity and access permissions. You can provide credentials in different ways depending on your authentication and authorization requirements.

## Prerequisites

Before you configure access credentials, you must install the OSS Android SDK. For more information, see [Install the Android SDK](/help/en/oss/developer-reference/installation-1).

## **Initialize the credential provider**

### Choose a credential provider

OSS supports multiple methods to initialize a credential provider. You can choose a method that meets the authentication and authorization requirements for your scenario.

**Credential provider initialization method**

**Scenario**

**Requires a pre-configured AccessKey pair or STS token**

**Underlying credential type**

**Credential validity**

**Credential rotation or refresh method**

[Method 1: Use an AccessKey pair](#6f7d8331aap78)

Applications that run in a secure and stable environment, are not vulnerable to external attacks, and require long-term access to Alibaba Cloud services without frequent credential rotation.

Yes

AccessKey

Long-term

Manual rotation

[Method 2: Use an STS token](#107b7ddcebo93)

Applications that run in an untrusted environment where you need to control the validity period and permissions of access credentials.

Yes

STS token

Temporary

Custom

[Method 3: Use CredentialsURI](#a453a80d5d6gs)

Applications that need to obtain access credentials from an external system.

No

STS token

Temporary

Auto-refresh

### Method 1: Use an AccessKey pair

You can use the AccessKey pair (AccessKey ID and AccessKey secret) of an Alibaba Cloud account or a Resource Access Management (RAM) user to initialize the credential provider if your application runs in a secure and stable environment that is not vulnerable to external attacks, requires long-term access to OSS, and does not allow for frequent credential rotation. However, this method requires you to manually maintain an AccessKey pair, which poses security risks and increases maintenance complexity. For more information about how to obtain an AccessKey pair, see [CreateAccessKey - Create an AccessKey pair for an Alibaba Cloud account or a RAM user](/help/en/ram/developer-reference/api-ims-2019-08-15-createaccesskey).

**Warning**

This method has security risks and is not recommended for mobile clients. An Alibaba Cloud account has full permissions for all its resources. If the AccessKey pair of an Alibaba Cloud account is leaked, your system is exposed to high security risks. If you must use this method, use the AccessKey pair of a RAM user with the minimum required permissions.

Sample code

```
String ak = "<ALIBABA_CLOUD_ACCESS_KEY_ID>";
String sk = "<ALIBABA_CLOUD_ACCESS_KEY_SECRET>";

OSSCredentialProvider credentialProvider = new OSSPlainTextAKSKCredentialProvider(ak, sk);
```

### **Method 2:** Use an STS token

You can use temporary identity credentials obtained from Security Token Service (STS) to initialize the credential provider if your application requires temporary access to OSS, fine-grained access control, and real-time permission adjustments to improve security and flexibility. These credentials include an AccessKey ID, an AccessKey secret, and an STS token. However, this method requires you to manually maintain an STS token, which poses security risks and increases maintenance complexity. For more information about how to obtain an STS token, see [AssumeRole - Obtain temporary identity credentials for a RAM role](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole).

You can use an AccessKey pair and an STS token in your code to reference the credentials. The following examples show how to update the STS token.

#### Manually update the STS token

```
String ak = "<ALIBABA_CLOUD_ACCESS_KEY_ID>";
String sk = "<ALIBABA_CLOUD_ACCESS_KEY_SECRET>";
String token = "<ALIBABA_CLOUD_SECURITY_TOKEN>";

OSSCredentialProvider credentialProvider = new OSSStsTokenCredentialProvider(ak, sk, token);
```

#### Automatically update the STS token

```
OSSCredentialProvider credentialProvider = new OSSFederationCredentialProvider() {
    @Override
    public OSSFederationToken getFederationToken() {

        /* Obtain the AccessKey ID, AccessKey secret, STS token, and expiration time.
         * The following example shows how to obtain the credentials from an application server:
         * URL stsUrl = new URL("<server_url>");
         * HttpURLConnection conn = (HttpURLConnection) stsUrl.openConnection();
         * InputStream input = conn.getInputStream();
         * String jsonText = IOUtils.readStreamAsString(input, OSSConstants.DEFAULT_CHARSET_NAME);
         * JSONObject jsonObjs = new JSONObject(jsonText);
         * String ak = jsonObjs.getString("AccessKeyId");
         * String sk = jsonObjs.getString("AccessKeySecret");
         * String token = jsonObjs.getString("SecurityToken");
         * String expiration = jsonObjs.getString("Expiration");
         */
        String ak = "<ALIBABA_CLOUD_ACCESS_KEY_ID>";
        String sk = "<ALIBABA_CLOUD_ACCESS_KEY_SECRET>";
        String token = "<ALIBABA_CLOUD_SECURITY_TOKEN>";
        String expiration = "<ALIBABA_CLOUD_EXPIRATION>";

        // Construct an OSSFederationToken object from the AccessKey ID, AccessKey secret, STS token, and expiration time.
        OSSFederationToken federationToken = new OSSFederationToken(ak, sk, token, expiration);
        return federationToken;
    }
};
```

### **Method 3: Use** CredentialsURI

You can use CredentialsURI to initialize the credential provider if your application needs to obtain and automatically update Alibaba Cloud credentials through an external system or custom configuration to achieve flexible credential management and keyless access. The underlying implementation of this method uses an STS token. The Credentials tool uses the URI that you provide to retrieve an STS token and initialize the client. This method does not require you to provide an AccessKey pair or an STS token, which eliminates the risks of manual maintenance.

1.  To ensure that the Credentials tool can correctly parse and use the STS token, the URI must adhere to the following response protocol:
    
    -   Response status code: 200
        
    -   Response body structure:
        
        ```
        {
          "StatusCode":200,
          "AccessKeyId":"AccessKeyId",
          "AccessKeySecret":"AccessKeySecret",
          "Expiration":"2015-11-03T09:52:59Z",
          "SecurityToken":"SecurityToken"
        }                    
        ```
        
2.  Configure the URI credential as the access credential.
    
    ```
    String authServerUrl = "<remote_url>";
    OSSAuthCredentialsProvider credentialProvider = new OSSAuthCredentialsProvider(authServerUrl);
    /* If the data is encrypted, you can use the following code to decrypt it.
     * credentialProvider.setDecoder(new OSSAuthCredentialsProvider.AuthDecoder() {
     *     @Override
     *     public String decode(String data) {
     *         String result = null;
     *         // Decrypt the data.
     *         // result = ...
     *         return result;
     *     }
     * });
     */
    ```
