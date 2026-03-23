-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Capacity Planner v1beta API - Class ExportUsageHistoriesResponse (1.0.0-beta02) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.0.0-beta02 (latest)](/dotnet/docs/reference/Google.Cloud.CapacityPlanner.V1Beta/latest/Google.Cloud.CapacityPlanner.V1Beta.ExportUsageHistoriesResponse)
-   [1.0.0-beta01](/dotnet/docs/reference/Google.Cloud.CapacityPlanner.V1Beta/1.0.0-beta01/Google.Cloud.CapacityPlanner.V1Beta.ExportUsageHistoriesResponse)

```
public sealed class ExportUsageHistoriesResponse : IMessage<ExportUsageHistoriesResponse>, IEquatable<ExportUsageHistoriesResponse>, IDeepCloneable<ExportUsageHistoriesResponse>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Capacity Planner v1beta API class ExportUsageHistoriesResponse.

A response message for \[UsageService.ExportUsageHistories\].

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ExportUsageHistoriesResponse

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ExportUsageHistoriesResponse](/dotnet/docs/reference/Google.Cloud.CapacityPlanner.V1Beta/latest/Google.Cloud.CapacityPlanner.V1Beta.ExportUsageHistoriesResponse), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ExportUsageHistoriesResponse](/dotnet/docs/reference/Google.Cloud.CapacityPlanner.V1Beta/latest/Google.Cloud.CapacityPlanner.V1Beta.ExportUsageHistoriesResponse), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ExportUsageHistoriesResponse](/dotnet/docs/reference/Google.Cloud.CapacityPlanner.V1Beta/latest/Google.Cloud.CapacityPlanner.V1Beta.ExportUsageHistoriesResponse), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.CapacityPlanner.V1Beta](/dotnet/docs/reference/Google.Cloud.CapacityPlanner.V1Beta/latest/Google.Cloud.CapacityPlanner.V1Beta)

## Assembly

Google.Cloud.CapacityPlanner.V1Beta.dll

## Constructors

### ExportUsageHistoriesResponse()

```
public ExportUsageHistoriesResponse()
```

### ExportUsageHistoriesResponse(ExportUsageHistoriesResponse)

```
public ExportUsageHistoriesResponse(ExportUsageHistoriesResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[ExportUsageHistoriesResponse](/dotnet/docs/reference/Google.Cloud.CapacityPlanner.V1Beta/latest/Google.Cloud.CapacityPlanner.V1Beta.ExportUsageHistoriesResponse)`  

## Properties

### Response

```
public string Response { get; set; }
```

The response message for the usage history export. In case of bigquery, it will also contain job id.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
