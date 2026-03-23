-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Data Lineage v1 API - Class ListRunsResponse (1.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0keyboard\_arrow\_down

-   [1.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.DataCatalog.Lineage.V1/latest/Google.Cloud.DataCatalog.Lineage.V1.ListRunsResponse)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.Lineage.V1/1.4.0/Google.Cloud.DataCatalog.Lineage.V1.ListRunsResponse)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.Lineage.V1/1.3.0/Google.Cloud.DataCatalog.Lineage.V1.ListRunsResponse)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.Lineage.V1/1.2.0/Google.Cloud.DataCatalog.Lineage.V1.ListRunsResponse)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.Lineage.V1/1.1.0/Google.Cloud.DataCatalog.Lineage.V1.ListRunsResponse)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.Lineage.V1/1.0.0/Google.Cloud.DataCatalog.Lineage.V1.ListRunsResponse)

```
public sealed class ListRunsResponse : IMessage<ListRunsResponse>, IEquatable<ListRunsResponse>, IDeepCloneable<ListRunsResponse>, IBufferMessage, IMessage, IPageResponse<Run>, IEnumerable<Run>, IEnumerable
```

Reference documentation and code samples for the Data Lineage v1 API class ListRunsResponse.

Response message for \[ListRuns\]\[google.cloud.datacatalog.lineage.v1.ListRuns\].

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ListRunsResponse

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ListRunsResponse](/dotnet/docs/reference/Google.Cloud.DataCatalog.Lineage.V1/1.0.0/Google.Cloud.DataCatalog.Lineage.V1.ListRunsResponse), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ListRunsResponse](/dotnet/docs/reference/Google.Cloud.DataCatalog.Lineage.V1/1.0.0/Google.Cloud.DataCatalog.Lineage.V1.ListRunsResponse), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ListRunsResponse](/dotnet/docs/reference/Google.Cloud.DataCatalog.Lineage.V1/1.0.0/Google.Cloud.DataCatalog.Lineage.V1.ListRunsResponse), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageResponse](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageResponse-1.html)[Run](/dotnet/docs/reference/Google.Cloud.DataCatalog.Lineage.V1/1.0.0/Google.Cloud.DataCatalog.Lineage.V1.Run), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[Run](/dotnet/docs/reference/Google.Cloud.DataCatalog.Lineage.V1/1.0.0/Google.Cloud.DataCatalog.Lineage.V1.Run), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google](https://cloud.google.com/dotnet/docs/reference/Google.Apis/latest/Google.html)[Cloud](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.Cloud.html)Google.Cloud.DataCatalogGoogle.Cloud.DataCatalog.Lineage[V1](/dotnet/docs/reference/Google.Cloud.DataCatalog.Lineage.V1/1.0.0/Google.Cloud.DataCatalog.Lineage.V1)

## Assembly

Google.Cloud.DataCatalog.Lineage.V1.dll

## Constructors

### ListRunsResponse()

```
public ListRunsResponse()
```

### ListRunsResponse(ListRunsResponse)

```
public ListRunsResponse(ListRunsResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListRunsResponse](/dotnet/docs/reference/Google.Cloud.DataCatalog.Lineage.V1/1.0.0/Google.Cloud.DataCatalog.Lineage.V1.ListRunsResponse)`  

## Properties

### NextPageToken

```
public string NextPageToken { get; set; }
```

The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Runs

```
public RepeatedField<Run> Runs { get; }
```

The runs from the specified project and location.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[Run](/dotnet/docs/reference/Google.Cloud.DataCatalog.Lineage.V1/1.0.0/Google.Cloud.DataCatalog.Lineage.V1.Run)`

## Methods

### GetEnumerator()

```
public IEnumerator<Run> GetEnumerator()
```

Returns an enumerator that iterates through the resources in this response.

**Returns**

**Type**

**Description**

`[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)[Run](/dotnet/docs/reference/Google.Cloud.DataCatalog.Lineage.V1/1.0.0/Google.Cloud.DataCatalog.Lineage.V1.Run)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
