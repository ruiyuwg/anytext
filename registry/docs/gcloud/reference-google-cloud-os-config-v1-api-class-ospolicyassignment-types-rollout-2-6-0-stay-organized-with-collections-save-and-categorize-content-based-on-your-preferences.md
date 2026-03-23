-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud OS Config v1 API - Class OSPolicyAssignment.Types.Rollout (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/latest/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types.Rollout)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/2.5.0/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types.Rollout)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/2.4.0/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types.Rollout)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/2.3.0/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types.Rollout)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/2.2.0/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types.Rollout)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/2.1.0/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types.Rollout)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/2.0.0/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types.Rollout)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.8.0/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types.Rollout)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.7.0/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types.Rollout)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.6.0/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types.Rollout)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.5.0/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types.Rollout)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.4.0/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types.Rollout)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.3.0/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types.Rollout)

```
public sealed class OSPolicyAssignment.Types.Rollout : IMessage<OSPolicyAssignment.Types.Rollout>, IEquatable<OSPolicyAssignment.Types.Rollout>, IDeepCloneable<OSPolicyAssignment.Types.Rollout>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud OS Config v1 API class OSPolicyAssignment.Types.Rollout.

Message to configure the rollout at the zonal level for the OS policy assignment.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> OSPolicyAssignment.Types.Rollout

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[OSPolicyAssignment](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/latest/Google.Cloud.OsConfig.V1.OSPolicyAssignment)[Types](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/latest/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types)[Rollout](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/latest/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types.Rollout), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[OSPolicyAssignment](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/latest/Google.Cloud.OsConfig.V1.OSPolicyAssignment)[Types](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/latest/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types)[Rollout](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/latest/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types.Rollout), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[OSPolicyAssignment](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/latest/Google.Cloud.OsConfig.V1.OSPolicyAssignment)[Types](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/latest/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types)[Rollout](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/latest/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types.Rollout), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.OsConfig.V1](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/latest/Google.Cloud.OsConfig.V1)

## Assembly

Google.Cloud.OsConfig.V1.dll

## Constructors

### Rollout()

```
public Rollout()
```

### Rollout(Rollout)

```
public Rollout(OSPolicyAssignment.Types.Rollout other)
```

**Parameter**

**Name**

**Description**

`other`

`[OSPolicyAssignment](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/latest/Google.Cloud.OsConfig.V1.OSPolicyAssignment)[Types](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/latest/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types)[Rollout](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/latest/Google.Cloud.OsConfig.V1.OSPolicyAssignment.Types.Rollout)`  

## Properties

### DisruptionBudget

```
public FixedOrPercent DisruptionBudget { get; set; }
```

Required. The maximum number (or percentage) of VMs per zone to disrupt at any given moment.

**Property Value**

**Type**

**Description**

`[FixedOrPercent](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/latest/Google.Cloud.OsConfig.V1.FixedOrPercent)`

### MinWaitDuration

```
public Duration MinWaitDuration { get; set; }
```

Required. This determines the minimum duration of time to wait after the configuration changes are applied through the current rollout. A VM continues to count towards the `disruption_budget` at least until this duration of time has passed after configuration changes are applied.

**Property Value**

**Type**

**Description**

`[Duration](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Duration.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
