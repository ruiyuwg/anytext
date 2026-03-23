-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Telco Automation v1 API - Class HydrationStatus (1.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0keyboard\_arrow\_down

-   [1.3.0 (latest)](/dotnet/docs/reference/Google.Cloud.TelcoAutomation.V1/latest/Google.Cloud.TelcoAutomation.V1.HydrationStatus)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.TelcoAutomation.V1/1.2.0/Google.Cloud.TelcoAutomation.V1.HydrationStatus)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.TelcoAutomation.V1/1.1.0/Google.Cloud.TelcoAutomation.V1.HydrationStatus)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.TelcoAutomation.V1/1.0.0/Google.Cloud.TelcoAutomation.V1.HydrationStatus)

```
public sealed class HydrationStatus : IMessage<HydrationStatus>, IEquatable<HydrationStatus>, IDeepCloneable<HydrationStatus>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Telco Automation v1 API class HydrationStatus.

Hydration status.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> HydrationStatus

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[HydrationStatus](/dotnet/docs/reference/Google.Cloud.TelcoAutomation.V1/1.0.0/Google.Cloud.TelcoAutomation.V1.HydrationStatus), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[HydrationStatus](/dotnet/docs/reference/Google.Cloud.TelcoAutomation.V1/1.0.0/Google.Cloud.TelcoAutomation.V1.HydrationStatus), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[HydrationStatus](/dotnet/docs/reference/Google.Cloud.TelcoAutomation.V1/1.0.0/Google.Cloud.TelcoAutomation.V1.HydrationStatus), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.TelcoAutomation.V1](/dotnet/docs/reference/Google.Cloud.TelcoAutomation.V1/1.0.0/Google.Cloud.TelcoAutomation.V1)

## Assembly

Google.Cloud.TelcoAutomation.V1.dll

## Constructors

### HydrationStatus()

```
public HydrationStatus()
```

### HydrationStatus(HydrationStatus)

```
public HydrationStatus(HydrationStatus other)
```

**Parameter**

**Name**

**Description**

`other`

`[HydrationStatus](/dotnet/docs/reference/Google.Cloud.TelcoAutomation.V1/1.0.0/Google.Cloud.TelcoAutomation.V1.HydrationStatus)`  

## Properties

### SiteVersion

```
public SiteVersion SiteVersion { get; set; }
```

Output only. SiteVersion Hydration is targeting.

**Property Value**

**Type**

**Description**

`[SiteVersion](/dotnet/docs/reference/Google.Cloud.TelcoAutomation.V1/1.0.0/Google.Cloud.TelcoAutomation.V1.SiteVersion)`

### Status

```
public string Status { get; set; }
```

Output only. Status.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
