-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Certificate Manager v1 API - Class ListCertificateMapEntriesResponse (2.7.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.7.0keyboard\_arrow\_down

-   [2.9.0 (latest)](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/latest/Google.Cloud.CertificateManager.V1.ListCertificateMapEntriesResponse)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.8.0/Google.Cloud.CertificateManager.V1.ListCertificateMapEntriesResponse)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.ListCertificateMapEntriesResponse)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.6.0/Google.Cloud.CertificateManager.V1.ListCertificateMapEntriesResponse)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.5.0/Google.Cloud.CertificateManager.V1.ListCertificateMapEntriesResponse)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.4.0/Google.Cloud.CertificateManager.V1.ListCertificateMapEntriesResponse)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.3.0/Google.Cloud.CertificateManager.V1.ListCertificateMapEntriesResponse)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.2.0/Google.Cloud.CertificateManager.V1.ListCertificateMapEntriesResponse)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.1.0/Google.Cloud.CertificateManager.V1.ListCertificateMapEntriesResponse)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.0.0/Google.Cloud.CertificateManager.V1.ListCertificateMapEntriesResponse)
-   [1.0.0-beta02](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/1.0.0-beta02/Google.Cloud.CertificateManager.V1.ListCertificateMapEntriesResponse)

```
public sealed class ListCertificateMapEntriesResponse : IMessage<ListCertificateMapEntriesResponse>, IEquatable<ListCertificateMapEntriesResponse>, IDeepCloneable<ListCertificateMapEntriesResponse>, IBufferMessage, IMessage, IPageResponse<CertificateMapEntry>, IEnumerable<CertificateMapEntry>, IEnumerable
```

Reference documentation and code samples for the Certificate Manager v1 API class ListCertificateMapEntriesResponse.

Response for the `ListCertificateMapEntries` method.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ListCertificateMapEntriesResponse

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ListCertificateMapEntriesResponse](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.ListCertificateMapEntriesResponse), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ListCertificateMapEntriesResponse](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.ListCertificateMapEntriesResponse), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ListCertificateMapEntriesResponse](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.ListCertificateMapEntriesResponse), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageResponse](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/PagedEnumerableCommon.cs)[CertificateMapEntry](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.CertificateMapEntry), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[CertificateMapEntry](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.CertificateMapEntry), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.CertificateManager.V1](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1)

## Assembly

Google.Cloud.CertificateManager.V1.dll

## Constructors

### ListCertificateMapEntriesResponse()

```
public ListCertificateMapEntriesResponse()
```

### ListCertificateMapEntriesResponse(ListCertificateMapEntriesResponse)

```
public ListCertificateMapEntriesResponse(ListCertificateMapEntriesResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListCertificateMapEntriesResponse](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.ListCertificateMapEntriesResponse)`  

## Properties

### CertificateMapEntries

```
public RepeatedField<CertificateMapEntry> CertificateMapEntries { get; }
```

A list of certificate map entries for the parent resource.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[CertificateMapEntry](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.CertificateMapEntry)`

### NextPageToken

```
public string NextPageToken { get; set; }
```

If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Unreachable

```
public RepeatedField<string> Unreachable { get; }
```

Locations that could not be reached.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

## Methods

### GetEnumerator()

```
public IEnumerator<CertificateMapEntry> GetEnumerator()
```

Returns an enumerator that iterates through the resources in this response.

**Returns**

**Type**

**Description**

`[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)[CertificateMapEntry](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.CertificateMapEntry)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
