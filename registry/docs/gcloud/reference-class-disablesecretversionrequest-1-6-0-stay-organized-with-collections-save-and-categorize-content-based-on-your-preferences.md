-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class DisableSecretVersionRequest (1.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.6.0keyboard\_arrow\_down

-   [2.7.0 (latest)](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/latest/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/2.6.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/2.5.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/2.4.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/2.3.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/2.2.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/2.1.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/2.0.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)
-   [1.9.0](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/1.9.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/1.8.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/1.7.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/1.6.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/1.5.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/1.4.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/1.3.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)

```
public sealed class DisableSecretVersionRequest : IMessage<DisableSecretVersionRequest>, IEquatable<DisableSecretVersionRequest>, IDeepCloneable<DisableSecretVersionRequest>, IBufferMessage, IMessage
```

Request message for \[SecretManagerService.DisableSecretVersion\]\[google.cloud.secretmanager.v1.SecretManagerService.DisableSecretVersion\].

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> DisableSecretVersionRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[DisableSecretVersionRequest](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/1.6.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[DisableSecretVersionRequest](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/1.6.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[DisableSecretVersionRequest](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/1.6.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.SecretManager.V1](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/1.6.0/Google.Cloud.SecretManager.V1)

## Assembly

Google.Cloud.SecretManager.V1.dll

## Constructors

### DisableSecretVersionRequest()

```
public DisableSecretVersionRequest()
```

### DisableSecretVersionRequest(DisableSecretVersionRequest)

```
public DisableSecretVersionRequest(DisableSecretVersionRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[DisableSecretVersionRequest](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/1.6.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest)`  

## Properties

### Etag

```
public string Etag { get; set; }
```

Optional. Etag of the \[SecretVersion\]\[google.cloud.secretmanager.v1.SecretVersion\]. The request succeeds if it matches the etag of the currently stored secret version object. If the etag is omitted, the request succeeds.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Name

```
public string Name { get; set; }
```

Required. The resource name of the \[SecretVersion\]\[google.cloud.secretmanager.v1.SecretVersion\] to disable in the format `projects/*/secrets/*/versions/*`.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### SecretVersionName

```
public SecretVersionName SecretVersionName { get; set; }
```

[SecretVersionName](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/1.6.0/Google.Cloud.SecretManager.V1.SecretVersionName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/1.6.0/Google.Cloud.SecretManager.V1.DisableSecretVersionRequest#Google_Cloud_SecretManager_V1_DisableSecretVersionRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[SecretVersionName](/dotnet/docs/reference/Google.Cloud.SecretManager.V1/1.6.0/Google.Cloud.SecretManager.V1.SecretVersionName)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
