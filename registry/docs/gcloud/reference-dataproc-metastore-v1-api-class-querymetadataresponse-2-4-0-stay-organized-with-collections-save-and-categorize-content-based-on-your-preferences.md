-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Dataproc Metastore v1 API - Class QueryMetadataResponse (2.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.4.0keyboard\_arrow\_down

-   [2.10.0 (latest)](/dotnet/docs/reference/Google.Cloud.Metastore.V1/latest/Google.Cloud.Metastore.V1.QueryMetadataResponse)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Metastore.V1/2.9.0/Google.Cloud.Metastore.V1.QueryMetadataResponse)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Metastore.V1/2.8.0/Google.Cloud.Metastore.V1.QueryMetadataResponse)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Metastore.V1/2.7.0/Google.Cloud.Metastore.V1.QueryMetadataResponse)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Metastore.V1/2.6.0/Google.Cloud.Metastore.V1.QueryMetadataResponse)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Metastore.V1/2.5.0/Google.Cloud.Metastore.V1.QueryMetadataResponse)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Metastore.V1/2.4.0/Google.Cloud.Metastore.V1.QueryMetadataResponse)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Metastore.V1/2.3.0/Google.Cloud.Metastore.V1.QueryMetadataResponse)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Metastore.V1/2.2.0/Google.Cloud.Metastore.V1.QueryMetadataResponse)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Metastore.V1/2.1.0/Google.Cloud.Metastore.V1.QueryMetadataResponse)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Metastore.V1/2.0.0/Google.Cloud.Metastore.V1.QueryMetadataResponse)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Metastore.V1/1.1.0/Google.Cloud.Metastore.V1.QueryMetadataResponse)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Metastore.V1/1.0.0/Google.Cloud.Metastore.V1.QueryMetadataResponse)

```
public sealed class QueryMetadataResponse : IMessage<QueryMetadataResponse>, IEquatable<QueryMetadataResponse>, IDeepCloneable<QueryMetadataResponse>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Dataproc Metastore v1 API class QueryMetadataResponse.

Response message for \[DataprocMetastore.QueryMetadata\]\[google.cloud.metastore.v1.DataprocMetastore.QueryMetadata\].

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> QueryMetadataResponse

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[QueryMetadataResponse](/dotnet/docs/reference/Google.Cloud.Metastore.V1/2.4.0/Google.Cloud.Metastore.V1.QueryMetadataResponse), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[QueryMetadataResponse](/dotnet/docs/reference/Google.Cloud.Metastore.V1/2.4.0/Google.Cloud.Metastore.V1.QueryMetadataResponse), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[QueryMetadataResponse](/dotnet/docs/reference/Google.Cloud.Metastore.V1/2.4.0/Google.Cloud.Metastore.V1.QueryMetadataResponse), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Metastore.V1](/dotnet/docs/reference/Google.Cloud.Metastore.V1/2.4.0/Google.Cloud.Metastore.V1)

## Assembly

Google.Cloud.Metastore.V1.dll

## Constructors

### QueryMetadataResponse()

```
public QueryMetadataResponse()
```

### QueryMetadataResponse(QueryMetadataResponse)

```
public QueryMetadataResponse(QueryMetadataResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[QueryMetadataResponse](/dotnet/docs/reference/Google.Cloud.Metastore.V1/2.4.0/Google.Cloud.Metastore.V1.QueryMetadataResponse)`  

## Properties

### ResultManifestUri

```
public string ResultManifestUri { get; set; }
```

The manifest URI is link to a JSON instance in Cloud Storage. This instance manifests immediately along with QueryMetadataResponse. The content of the URI is not retriable until the long-running operation query against the metadata finishes.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
