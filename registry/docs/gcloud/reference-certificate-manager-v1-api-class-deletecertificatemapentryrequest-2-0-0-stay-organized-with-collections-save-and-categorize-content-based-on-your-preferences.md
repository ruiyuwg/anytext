-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Certificate Manager v1 API - Class DeleteCertificateMapEntryRequest (2.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.0keyboard\_arrow\_down

-   [2.9.0 (latest)](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/latest/Google.Cloud.CertificateManager.V1.DeleteCertificateMapEntryRequest)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.8.0/Google.Cloud.CertificateManager.V1.DeleteCertificateMapEntryRequest)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.DeleteCertificateMapEntryRequest)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.6.0/Google.Cloud.CertificateManager.V1.DeleteCertificateMapEntryRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.5.0/Google.Cloud.CertificateManager.V1.DeleteCertificateMapEntryRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.4.0/Google.Cloud.CertificateManager.V1.DeleteCertificateMapEntryRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.3.0/Google.Cloud.CertificateManager.V1.DeleteCertificateMapEntryRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.2.0/Google.Cloud.CertificateManager.V1.DeleteCertificateMapEntryRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.1.0/Google.Cloud.CertificateManager.V1.DeleteCertificateMapEntryRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.0.0/Google.Cloud.CertificateManager.V1.DeleteCertificateMapEntryRequest)
-   [1.0.0-beta02](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/1.0.0-beta02/Google.Cloud.CertificateManager.V1.DeleteCertificateMapEntryRequest)

```
public sealed class DeleteCertificateMapEntryRequest : IMessage<DeleteCertificateMapEntryRequest>, IEquatable<DeleteCertificateMapEntryRequest>, IDeepCloneable<DeleteCertificateMapEntryRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Certificate Manager v1 API class DeleteCertificateMapEntryRequest.

Request for the `DeleteCertificateMapEntry` method.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> DeleteCertificateMapEntryRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[DeleteCertificateMapEntryRequest](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.0.0/Google.Cloud.CertificateManager.V1.DeleteCertificateMapEntryRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[DeleteCertificateMapEntryRequest](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.0.0/Google.Cloud.CertificateManager.V1.DeleteCertificateMapEntryRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[DeleteCertificateMapEntryRequest](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.0.0/Google.Cloud.CertificateManager.V1.DeleteCertificateMapEntryRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.CertificateManager.V1](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.0.0/Google.Cloud.CertificateManager.V1)

## Assembly

Google.Cloud.CertificateManager.V1.dll

## Constructors

### DeleteCertificateMapEntryRequest()

```
public DeleteCertificateMapEntryRequest()
```

### DeleteCertificateMapEntryRequest(DeleteCertificateMapEntryRequest)

```
public DeleteCertificateMapEntryRequest(DeleteCertificateMapEntryRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[DeleteCertificateMapEntryRequest](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.0.0/Google.Cloud.CertificateManager.V1.DeleteCertificateMapEntryRequest)`  

## Properties

### CertificateMapEntryName

```
public CertificateMapEntryName CertificateMapEntryName { get; set; }
```

[CertificateMapEntryName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.0.0/Google.Cloud.CertificateManager.V1.CertificateMapEntryName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.0.0/Google.Cloud.CertificateManager.V1.DeleteCertificateMapEntryRequest#Google_Cloud_CertificateManager_V1_DeleteCertificateMapEntryRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[CertificateMapEntryName](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.0.0/Google.Cloud.CertificateManager.V1.CertificateMapEntryName)`

### Name

```
public string Name { get; set; }
```

Required. A name of the certificate map entry to delete. Must be in the format `projects/*/locations/*/certificateMaps/*/certificateMapEntries/*`.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
