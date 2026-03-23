-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Analytics Hub v1 API - Class Publisher (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.2.0keyboard\_arrow\_down

-   [1.12.0 (latest)](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/latest/Google.Cloud.BigQuery.AnalyticsHub.V1.Publisher)
-   [1.11.0](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/1.11.0/Google.Cloud.BigQuery.AnalyticsHub.V1.Publisher)
-   [1.10.0](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/1.10.0/Google.Cloud.BigQuery.AnalyticsHub.V1.Publisher)
-   [1.9.0](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/1.9.0/Google.Cloud.BigQuery.AnalyticsHub.V1.Publisher)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/1.8.0/Google.Cloud.BigQuery.AnalyticsHub.V1.Publisher)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/1.7.0/Google.Cloud.BigQuery.AnalyticsHub.V1.Publisher)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/1.6.0/Google.Cloud.BigQuery.AnalyticsHub.V1.Publisher)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/1.5.0/Google.Cloud.BigQuery.AnalyticsHub.V1.Publisher)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/1.4.0/Google.Cloud.BigQuery.AnalyticsHub.V1.Publisher)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/1.3.0/Google.Cloud.BigQuery.AnalyticsHub.V1.Publisher)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/1.2.0/Google.Cloud.BigQuery.AnalyticsHub.V1.Publisher)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/1.1.0/Google.Cloud.BigQuery.AnalyticsHub.V1.Publisher)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/1.0.0/Google.Cloud.BigQuery.AnalyticsHub.V1.Publisher)

```
public sealed class Publisher : IMessage<Publisher>, IEquatable<Publisher>, IDeepCloneable<Publisher>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Analytics Hub v1 API class Publisher.

Contains details of the listing publisher.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Publisher

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[Publisher](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/1.2.0/Google.Cloud.BigQuery.AnalyticsHub.V1.Publisher), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[Publisher](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/1.2.0/Google.Cloud.BigQuery.AnalyticsHub.V1.Publisher), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[Publisher](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/1.2.0/Google.Cloud.BigQuery.AnalyticsHub.V1.Publisher), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.BigQuery.AnalyticsHub.V1](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/1.2.0/Google.Cloud.BigQuery.AnalyticsHub.V1)

## Assembly

Google.Cloud.BigQuery.AnalyticsHub.V1.dll

## Constructors

### Publisher()

```
public Publisher()
```

### Publisher(Publisher)

```
public Publisher(Publisher other)
```

**Parameter**

**Name**

**Description**

`other`

`[Publisher](/dotnet/docs/reference/Google.Cloud.BigQuery.AnalyticsHub.V1/1.2.0/Google.Cloud.BigQuery.AnalyticsHub.V1.Publisher)`  

## Properties

### Name

```
public string Name { get; set; }
```

Optional. Name of the listing publisher.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### PrimaryContact

```
public string PrimaryContact { get; set; }
```

Optional. Email or URL of the listing publisher. Max Length: 1000 bytes.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
