-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class MaintenancePolicy (3.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.0.0keyboard\_arrow\_down

-   [3.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.MaintenancePolicy)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.5.0/Google.Cloud.Redis.V1.MaintenancePolicy)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.4.0/Google.Cloud.Redis.V1.MaintenancePolicy)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.3.0/Google.Cloud.Redis.V1.MaintenancePolicy)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.2.0/Google.Cloud.Redis.V1.MaintenancePolicy)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.1.0/Google.Cloud.Redis.V1.MaintenancePolicy)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.0.0/Google.Cloud.Redis.V1.MaintenancePolicy)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/2.5.0/Google.Cloud.Redis.V1.MaintenancePolicy)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/2.4.0/Google.Cloud.Redis.V1.MaintenancePolicy)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/2.3.0/Google.Cloud.Redis.V1.MaintenancePolicy)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/2.2.0/Google.Cloud.Redis.V1.MaintenancePolicy)

```
public sealed class MaintenancePolicy : IMessage<MaintenancePolicy>, IEquatable<MaintenancePolicy>, IDeepCloneable<MaintenancePolicy>, IBufferMessage, IMessage
```

Maintenance policy for an instance.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> MaintenancePolicy

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[MaintenancePolicy](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.0.0/Google.Cloud.Redis.V1.MaintenancePolicy)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[MaintenancePolicy](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.0.0/Google.Cloud.Redis.V1.MaintenancePolicy)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[MaintenancePolicy](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.0.0/Google.Cloud.Redis.V1.MaintenancePolicy)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Redis.V1](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.0.0/Google.Cloud.Redis.V1)

## Assembly

Google.Cloud.Redis.V1.dll

## Constructors

### MaintenancePolicy()

```
public MaintenancePolicy()
```

### MaintenancePolicy(MaintenancePolicy)

```
public MaintenancePolicy(MaintenancePolicy other)
```

**Parameter**

**Name**

**Description**

`other`

`[MaintenancePolicy](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.0.0/Google.Cloud.Redis.V1.MaintenancePolicy)`  

## Properties

### CreateTime

```
public Timestamp CreateTime { get; set; }
```

Output only. The time when the policy was created.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### Description

```
public string Description { get; set; }
```

Optional. Description of what this policy is for. Create/Update methods return INVALID\_ARGUMENT if the length is greater than 512.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### UpdateTime

```
public Timestamp UpdateTime { get; set; }
```

Output only. The time when the policy was last updated.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### WeeklyMaintenanceWindow

```
public RepeatedField<WeeklyMaintenanceWindow> WeeklyMaintenanceWindow { get; }
```

Optional. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly\_window is expected to be one.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[WeeklyMaintenanceWindow](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.0.0/Google.Cloud.Redis.V1.WeeklyMaintenanceWindow)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
