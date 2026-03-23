To send requests using the OSS SDK for iOS, configure access credentials. Alibaba Cloud uses access credentials to verify your identity and access permissions. Choose a credential method based on your authentication and authorization requirements.

## Prerequisites

Before you begin, ensure that you have:

-   Installed the OSS SDK for iOS. For more information, see [Installation](/help/en/oss/developer-reference/installation-1).
    

## Initialize the credential provider

### Choose a credential provider

OSS supports three methods for initializing a credential provider. The table below compares them by scenario, security posture, and rotation behavior.

**Method**

**Scenario**

**Credentials required upfront**

**Underlying credential**

**Validity**

**Rotation**

Method 1: Use an AccessKey pair

Secure server-side environment, long-term access, infrequent credential rotation

Yes

AccessKey pair

Long-term

Manual

Method 2: Use an STS token

Temporary access with fine-grained control; untrusted environment

Yes

STS token

Temporary

Custom

Method 3: Use CredentialsURI

Obtain credentials automatically from an external system without hardcoding keys

No

STS token

Temporary

Automatic

**For iOS mobile apps, use Method 3 (CredentialsURI).** Embedding long-lived keys in a mobile app binary is unsafe. CredentialsURI lets your app fetch temporary credentials from a server you control, with no keys in client code.

### Method 1: Use an AccessKey pair

If your application runs in a secure, stable server-side environment and requires long-term OSS access without frequent credential rotation, initialize the credential provider with an AccessKey pair from your Alibaba Cloud account or a Resource Access Management (RAM) user. An AccessKey pair consists of an AccessKey ID and an AccessKey secret.

**Warning**

Do not use this method in mobile apps or any client-side code distributed to end users. Embedding long-lived credentials in a distributed binary exposes your AccessKey pair and grants anyone who extracts it full access to your OSS resources. Use this method only in trusted server-side environments. For more information, see [CreateAccessKey](/help/en/ram/developer-reference/api-ims-2019-08-15-createaccesskey).

```
NSString *ak = @"<ALIBABA_CLOUD_ACCESS_KEY_ID>";
NSString *sk = @"<ALIBABA_CLOUD_ACCESS_KEY_SECRET>";

id<OSSCredentialProvider> credentialProvider =
    [[OSSPlainTextAKSKPairCredentialProvider alloc]
        initWithPlainTextAccessKey:ak
                         secretKey:sk];
```

Replace the placeholders with your actual values:

**Placeholder**

**Description**

`<ALIBABA_CLOUD_ACCESS_KEY_ID>`

Your AccessKey ID

`<ALIBABA_CLOUD_ACCESS_KEY_SECRET>`

Your AccessKey secret

### Method 2: Use an STS token

If your application requires temporary OSS access with fine-grained permission control, use credentials from Security Token Service (STS). These credentials include an AccessKey ID, an AccessKey secret, and an STS token.

Method 2 has two sub-approaches depending on how you manage token refresh. Use the manual approach for one-off or infrequent operations where you control the token lifecycle. Use the automatic approach for long-running sessions where the SDK fetches a fresh token before each operation.

**Warning**

Both sub-approaches require you to supply STS credentials in code, so you are responsible for keeping them current. Expired credentials cause request failures. For automatic token management with no credential hardcoding, use Method 3 instead. For more information, see [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole).

#### Manually update the STS token

Supply an AccessKey pair and STS token directly. Update the credential provider when the token expires.

```
NSString *ak    = @"<ALIBABA_CLOUD_ACCESS_KEY_ID>";
NSString *sk    = @"<ALIBABA_CLOUD_ACCESS_KEY_SECRET>";
NSString *token = @"<ALIBABA_CLOUD_SECURITY_TOKEN>";

id<OSSCredentialProvider> credentialProvider =
    [[OSSStsTokenCredentialProvider alloc]
        initWithAccessKeyId:ak
                  secretKeyId:sk
              securityToken:token];
```

#### Automatically update the STS token

Provide a block that the SDK calls to fetch a fresh `OSSFederationToken` before each request. The block must return a populated token synchronously.

The example below shows the full flow: fetching credentials from your application server and parsing the JSON response.

```
id<OSSCredentialProvider> credentialProvider =
    [[OSSFederationCredentialProvider alloc]
        initWithFederationTokenGetter:^OSSFederationToken * _Nullable {

        // Fetch credentials from your application server.
        NSURL *url = [NSURL URLWithString:@"http://localhost:8080/distribute-token.json"];
        NSURLRequest *request = [NSURLRequest requestWithURL:url];
        OSSTaskCompletionSource *tcs = [OSSTaskCompletionSource taskCompletionSource];
        NSURLSession *session = [NSURLSession sharedSession];

        NSURLSessionTask *sessionTask =
            [session dataTaskWithRequest:request
                       completionHandler:^(NSData *data,
                                          NSURLResponse *response,
                                          NSError *error) {
                if (error) {
                    [tcs setError:error];
                    return;
                }
                [tcs setResult:data];
            }];
        [sessionTask resume];

        // Block until the response arrives.
        [tcs.task waitUntilFinished];

        if (tcs.task.error) {
            NSLog(@"Failed to fetch token: %@", tcs.task.error);
            return nil;
        }

        // Parse the JSON response.
        NSDictionary *object =
            [NSJSONSerialization JSONObjectWithData:tcs.task.result
                                           options:kNilOptions
                                             error:nil];

        OSSFederationToken *federationToken = [OSSFederationToken new];
        federationToken.tAccessKey             = [object objectForKey:@"AccessKeyId"];
        federationToken.tSecretKey             = [object objectForKey:@"AccessKeySecret"];
        federationToken.tToken                 = [object objectForKey:@"SecurityToken"];
        federationToken.expirationTimeInGMTFormat = [object objectForKey:@"Expiration"];

        return federationToken;
    }];
```

Your application server must return HTTP 200 with the following JSON body:

```
{
  "AccessKeyId": "<AccessKeyId>",
  "AccessKeySecret": "<AccessKeySecret>",
  "SecurityToken": "<SecurityToken>",
  "Expiration": "2015-11-03T09:52:59Z"
}
```

### Method 3: Use CredentialsURI

If your application needs to obtain and automatically refresh credentials from an external system — with no AccessKey pair or STS token in client code — use CredentialsURI. The Credentials tool fetches an STS token from the URI you provide and handles automatic refresh.

#### Step 1: Set up the credential endpoint

Configure your server to expose a credential endpoint. The Credentials tool calls this endpoint to obtain a fresh STS token. The endpoint must return HTTP 200 with the following JSON body:

```
{
  "StatusCode": 200,
  "AccessKeyId": "<AccessKeyId>",
  "AccessKeySecret": "<AccessKeySecret>",
  "SecurityToken": "<SecurityToken>",
  "Expiration": "2015-11-03T09:52:59Z"
}
```

#### Step 2: Initialize the credential provider

Pass your endpoint URL to `OSSAuthCredentialProvider`:

```
NSString *authServerUrl = @"<authServerUrl>";

id<OSSCredentialProvider> credentialProvider =
    [[OSSAuthCredentialProvider alloc]
        initWithAuthServerUrl:authServerUrl];
```

Replace `<authServerUrl>` with the URL of your credential endpoint.

#### Step 3: (Optional) Decrypt the response

If your endpoint returns encrypted data, supply a `responseDecoder` block to decrypt the response before the Credentials tool parses it:

```
NSString *authServerUrl = @"<authServerUrl>";

id<OSSCredentialProvider> credentialProvider =
    [[OSSAuthCredentialProvider alloc]
        initWithAuthServerUrl:authServerUrl
              responseDecoder:^NSData * _Nullable(NSData * _Nonnull data) {
            NSData *result = nil;
            // Decrypt data here and assign the result.
            return result;
        }];
```

## What's next

After initializing the credential provider, use it to create an OSS client and start making requests.
