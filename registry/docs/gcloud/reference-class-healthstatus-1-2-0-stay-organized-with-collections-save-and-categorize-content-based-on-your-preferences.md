-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class HealthStatus (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class HealthStatus : IMessage<HealthStatus>, IEquatable<HealthStatus>, IDeepCloneable<HealthStatus>, IBufferMessage, IMessage
```

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> HealthStatus

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[HealthStatus](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.HealthStatus)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[HealthStatus](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.HealthStatus)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[HealthStatus](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.HealthStatus)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### HealthStatus()

```
public HealthStatus()
```

### HealthStatus(HealthStatus)

```
public HealthStatus(HealthStatus other)
```

**Parameter**

**Name**

**Description**

`other`

`[HealthStatus](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.HealthStatus)`  

## Properties

### Annotations

```
public MapField<string, string> Annotations { get; }
```

Metadata defined as annotations for network endpoint.

**Property Value**

**Type**

**Description**

`[MapField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.MapField-2.html)<[String](https://learn.microsoft.com/dotnet/api/system.string), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

### ForwardingRule

```
public string ForwardingRule { get; set; }
```

URL of the forwarding rule associated with the health status of the instance.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ForwardingRuleIp

```
public string ForwardingRuleIp { get; set; }
```

A forwarding rule IP address assigned to this instance.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### HasForwardingRule

```
public bool HasForwardingRule { get; }
```

Gets whether the "forwarding\_rule" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasForwardingRuleIp

```
public bool HasForwardingRuleIp { get; }
```

Gets whether the "forwarding\_rule\_ip" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasHealthState

```
public bool HasHealthState { get; }
```

Gets whether the "health\_state" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasInstance

```
public bool HasInstance { get; }
```

Gets whether the "instance" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasIpAddress

```
public bool HasIpAddress { get; }
```

Gets whether the "ip\_address" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasPort

```
public bool HasPort { get; }
```

Gets whether the "port" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasWeight

```
public bool HasWeight { get; }
```

Gets whether the "weight" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasWeightError

```
public bool HasWeightError { get; }
```

Gets whether the "weight\_error" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HealthState

```
public string HealthState { get; set; }
```

Health state of the instance. Check the HealthState enum for the list of possible values.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Instance

```
public string Instance { get; set; }
```

URL of the instance resource.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### IpAddress

```
public string IpAddress { get; set; }
```

For target pool based Network Load Balancing, it indicates the forwarding rule's IP address assigned to this instance. For other types of load balancing, the field indicates VM internal ip.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Port

```
public int Port { get; set; }
```

The named port of the instance group, not necessarily the port that is health-checked.

**Property Value**

**Type**

**Description**

`[Int32](https://learn.microsoft.com/dotnet/api/system.int32)`

### Weight

```
public string Weight { get; set; }
```

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### WeightError

```
public string WeightError { get; set; }
```

Check the WeightError enum for the list of possible values.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
