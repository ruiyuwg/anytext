-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Developer Connect v1 API - Class BitbucketCloudConfig (1.0.0-beta04) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.0.0-beta04 (latest)](/dotnet/docs/reference/Google.Cloud.DeveloperConnect.V1/latest/Google.Cloud.DeveloperConnect.V1.BitbucketCloudConfig)
-   [1.0.0-beta03](/dotnet/docs/reference/Google.Cloud.DeveloperConnect.V1/1.0.0-beta03/Google.Cloud.DeveloperConnect.V1.BitbucketCloudConfig)

```
public sealed class BitbucketCloudConfig : IMessage<BitbucketCloudConfig>, IEquatable<BitbucketCloudConfig>, IDeepCloneable<BitbucketCloudConfig>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Developer Connect v1 API class BitbucketCloudConfig.

Configuration for connections to an instance of Bitbucket Cloud.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> BitbucketCloudConfig

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[BitbucketCloudConfig](/dotnet/docs/reference/Google.Cloud.DeveloperConnect.V1/latest/Google.Cloud.DeveloperConnect.V1.BitbucketCloudConfig), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[BitbucketCloudConfig](/dotnet/docs/reference/Google.Cloud.DeveloperConnect.V1/latest/Google.Cloud.DeveloperConnect.V1.BitbucketCloudConfig), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[BitbucketCloudConfig](/dotnet/docs/reference/Google.Cloud.DeveloperConnect.V1/latest/Google.Cloud.DeveloperConnect.V1.BitbucketCloudConfig), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.DeveloperConnect.V1](/dotnet/docs/reference/Google.Cloud.DeveloperConnect.V1/latest/Google.Cloud.DeveloperConnect.V1)

## Assembly

Google.Cloud.DeveloperConnect.V1.dll

## Constructors

### BitbucketCloudConfig()

```
public BitbucketCloudConfig()
```

### BitbucketCloudConfig(BitbucketCloudConfig)

```
public BitbucketCloudConfig(BitbucketCloudConfig other)
```

**Parameter**

**Name**

**Description**

`other`

`[BitbucketCloudConfig](/dotnet/docs/reference/Google.Cloud.DeveloperConnect.V1/latest/Google.Cloud.DeveloperConnect.V1.BitbucketCloudConfig)`  

## Properties

### AuthorizerCredential

```
public UserCredential AuthorizerCredential { get; set; }
```

Required. An access token with the minimum `repository`, `pullrequest` and `webhook` scope access. It can either be a workspace, project or repository access token. This is needed to create webhooks. It's recommended to use a system account to generate these credentials.

**Property Value**

**Type**

**Description**

`[UserCredential](/dotnet/docs/reference/Google.Cloud.DeveloperConnect.V1/latest/Google.Cloud.DeveloperConnect.V1.UserCredential)`

### ReadAuthorizerCredential

```
public UserCredential ReadAuthorizerCredential { get; set; }
```

Required. An access token with the minimum `repository` access. It can either be a workspace, project or repository access token. It's recommended to use a system account to generate the credentials.

**Property Value**

**Type**

**Description**

`[UserCredential](/dotnet/docs/reference/Google.Cloud.DeveloperConnect.V1/latest/Google.Cloud.DeveloperConnect.V1.UserCredential)`

### WebhookSecretSecretVersion

```
public string WebhookSecretSecretVersion { get; set; }
```

Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as `projects/*/secrets/*/versions/*` or `projects/*/locations/*/secrets/*/versions/*` (if regional secrets are supported in that location). This is used to validate and create webhooks.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### WebhookSecretSecretVersionAsSecretVersionName

```
public SecretVersionName WebhookSecretSecretVersionAsSecretVersionName { get; set; }
```

[SecretVersionName](/dotnet/docs/reference/Google.Cloud.DeveloperConnect.V1/latest/Google.Cloud.DeveloperConnect.V1.SecretVersionName)\-typed view over the [WebhookSecretSecretVersion](/dotnet/docs/reference/Google.Cloud.DeveloperConnect.V1/latest/Google.Cloud.DeveloperConnect.V1.BitbucketCloudConfig#Google_Cloud_DeveloperConnect_V1_BitbucketCloudConfig_WebhookSecretSecretVersion) resource name property.

**Property Value**

**Type**

**Description**

`[SecretVersionName](/dotnet/docs/reference/Google.Cloud.DeveloperConnect.V1/latest/Google.Cloud.DeveloperConnect.V1.SecretVersionName)`

### Workspace

```
public string Workspace { get; set; }
```

Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
