-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class AuditConfig (1.0.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class AuditConfig : IMessage<AuditConfig>, IEquatable<AuditConfig>, IDeepCloneable<AuditConfig>, IBufferMessage, IMessage
```

Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log\_types specified in each AuditConfig are enabled, and the exempted\_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit\_configs": \[ { "service": "allServices", "audit\_log\_configs": \[ { "log\_type": "DATA\_READ", "exempted\_members": \[ &quot;user:jose@example.com" \] }, { "log\_type": "DATA\_WRITE" }, { "log\_type": "ADMIN\_READ" } \] }, { "service": "sampleservice.googleapis.com", "audit\_log\_configs": \[ { "log\_type": "DATA\_READ" }, { "log\_type": "DATA\_WRITE", "exempted\_members": \[ &quot;user:aliya@example.com" \] } \] } \] } For sampleservice, this policy enables DATA\_READ, DATA\_WRITE and ADMIN\_READ logging. It also exempts jose@example.com from DATA\_READ logging, and aliya@example.com from DATA\_WRITE logging.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> AuditConfig

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[AuditConfig](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.0.0/Google.Cloud.Compute.V1.AuditConfig)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[AuditConfig](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.0.0/Google.Cloud.Compute.V1.AuditConfig)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[AuditConfig](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.0.0/Google.Cloud.Compute.V1.AuditConfig)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.0.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### AuditConfig()

```
public AuditConfig()
```

### AuditConfig(AuditConfig)

```
public AuditConfig(AuditConfig other)
```

**Parameter**

**Name**

**Description**

`other`

`[AuditConfig](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.0.0/Google.Cloud.Compute.V1.AuditConfig)`  

## Properties

### AuditLogConfigs

```
public RepeatedField<AuditLogConfig> AuditLogConfigs { get; }
```

The configuration for logging of each type of permission.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[AuditLogConfig](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.0.0/Google.Cloud.Compute.V1.AuditLogConfig)>`

### ExemptedMembers

```
public RepeatedField<string> ExemptedMembers { get; }
```

This is deprecated and has no effect. Do not use.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

### HasService

```
public bool HasService { get; }
```

Gets whether the "service" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Service

```
public string Service { get; set; }
```

Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
