-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class GetCryptoKeyVersionRequest (2.7.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.7.0keyboard\_arrow\_down

-   [3.23.0 (latest)](/dotnet/docs/reference/Google.Cloud.Kms.V1/latest/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.22.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.22.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.21.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.21.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.20.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.20.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.19.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.19.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.18.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.18.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.17.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.17.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.16.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.16.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.15.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.14.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.13.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.12.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.11.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.10.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.9.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.8.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.7.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.6.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.5.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.4.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.3.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.2.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.1.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/3.0.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.9.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.8.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.7.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.6.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.5.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.4.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.3.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.2.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)

```
public sealed class GetCryptoKeyVersionRequest : IMessage<GetCryptoKeyVersionRequest>, IEquatable<GetCryptoKeyVersionRequest>, IDeepCloneable<GetCryptoKeyVersionRequest>, IBufferMessage, IMessage
```

Request message for \[KeyManagementService.GetCryptoKeyVersion\]\[google.cloud.kms.v1.KeyManagementService.GetCryptoKeyVersion\].

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> GetCryptoKeyVersionRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[GetCryptoKeyVersionRequest](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.7.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[GetCryptoKeyVersionRequest](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.7.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[GetCryptoKeyVersionRequest](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.7.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Kms.V1](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.7.0/Google.Cloud.Kms.V1)

## Assembly

Google.Cloud.Kms.V1.dll

## Constructors

### GetCryptoKeyVersionRequest()

```
public GetCryptoKeyVersionRequest()
```

### GetCryptoKeyVersionRequest(GetCryptoKeyVersionRequest)

```
public GetCryptoKeyVersionRequest(GetCryptoKeyVersionRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[GetCryptoKeyVersionRequest](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.7.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest)`  

## Properties

### CryptoKeyVersionName

```
public CryptoKeyVersionName CryptoKeyVersionName { get; set; }
```

[CryptoKeyVersionName](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.7.0/Google.Cloud.Kms.V1.CryptoKeyVersionName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.7.0/Google.Cloud.Kms.V1.GetCryptoKeyVersionRequest#Google_Cloud_Kms_V1_GetCryptoKeyVersionRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[CryptoKeyVersionName](/dotnet/docs/reference/Google.Cloud.Kms.V1/2.7.0/Google.Cloud.Kms.V1.CryptoKeyVersionName)`

### Name

```
public string Name { get; set; }
```

Required. The \[name\]\[google.cloud.kms.v1.CryptoKeyVersion.name\] of the \[CryptoKeyVersion\]\[google.cloud.kms.v1.CryptoKeyVersion\] to get.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
