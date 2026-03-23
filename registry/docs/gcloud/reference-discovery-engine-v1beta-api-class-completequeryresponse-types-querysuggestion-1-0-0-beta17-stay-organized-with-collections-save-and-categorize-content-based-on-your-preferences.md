-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Discovery Engine v1beta API - Class CompleteQueryResponse.Types.QuerySuggestion (1.0.0-beta17) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0-beta17keyboard\_arrow\_down

-   [1.0.0-beta21 (latest)](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/latest/Google.Cloud.DiscoveryEngine.V1Beta.CompleteQueryResponse.Types.QuerySuggestion)
-   [1.0.0-beta20](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta20/Google.Cloud.DiscoveryEngine.V1Beta.CompleteQueryResponse.Types.QuerySuggestion)

```
public sealed class CompleteQueryResponse.Types.QuerySuggestion : IMessage<CompleteQueryResponse.Types.QuerySuggestion>, IEquatable<CompleteQueryResponse.Types.QuerySuggestion>, IDeepCloneable<CompleteQueryResponse.Types.QuerySuggestion>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Discovery Engine v1beta API class CompleteQueryResponse.Types.QuerySuggestion.

Suggestions as search queries.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> CompleteQueryResponse.Types.QuerySuggestion

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[CompleteQueryResponse](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.CompleteQueryResponse)[Types](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.CompleteQueryResponse.Types)[QuerySuggestion](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.CompleteQueryResponse.Types.QuerySuggestion), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[CompleteQueryResponse](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.CompleteQueryResponse)[Types](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.CompleteQueryResponse.Types)[QuerySuggestion](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.CompleteQueryResponse.Types.QuerySuggestion), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[CompleteQueryResponse](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.CompleteQueryResponse)[Types](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.CompleteQueryResponse.Types)[QuerySuggestion](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.CompleteQueryResponse.Types.QuerySuggestion), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.DiscoveryEngine.V1Beta](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta)

## Assembly

Google.Cloud.DiscoveryEngine.V1Beta.dll

## Constructors

### QuerySuggestion()

```
public QuerySuggestion()
```

### QuerySuggestion(QuerySuggestion)

```
public QuerySuggestion(CompleteQueryResponse.Types.QuerySuggestion other)
```

**Parameter**

**Name**

**Description**

`other`

`[CompleteQueryResponse](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.CompleteQueryResponse)[Types](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.CompleteQueryResponse.Types)[QuerySuggestion](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1Beta/1.0.0-beta17/Google.Cloud.DiscoveryEngine.V1Beta.CompleteQueryResponse.Types.QuerySuggestion)`  

## Properties

### CompletableFieldPaths

```
public RepeatedField<string> CompletableFieldPaths { get; }
```

The unique document field paths that serve as the source of this suggestion if it was generated from completable fields.

This field is only populated for the document-completable model.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Suggestion

```
public string Suggestion { get; set; }
```

The suggestion for the query.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
