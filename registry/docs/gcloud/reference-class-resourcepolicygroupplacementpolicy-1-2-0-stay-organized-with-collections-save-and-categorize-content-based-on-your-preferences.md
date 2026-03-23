-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ResourcePolicyGroupPlacementPolicy (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class ResourcePolicyGroupPlacementPolicy : IMessage<ResourcePolicyGroupPlacementPolicy>, IEquatable<ResourcePolicyGroupPlacementPolicy>, IDeepCloneable<ResourcePolicyGroupPlacementPolicy>, IBufferMessage, IMessage
```

A GroupPlacementPolicy specifies resource placement configuration. It specifies the failure bucket separation as well as network locality

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ResourcePolicyGroupPlacementPolicy

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[ResourcePolicyGroupPlacementPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.ResourcePolicyGroupPlacementPolicy)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[ResourcePolicyGroupPlacementPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.ResourcePolicyGroupPlacementPolicy)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[ResourcePolicyGroupPlacementPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.ResourcePolicyGroupPlacementPolicy)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

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

### ResourcePolicyGroupPlacementPolicy()

```
public ResourcePolicyGroupPlacementPolicy()
```

### ResourcePolicyGroupPlacementPolicy(ResourcePolicyGroupPlacementPolicy)

```
public ResourcePolicyGroupPlacementPolicy(ResourcePolicyGroupPlacementPolicy other)
```

**Parameter**

**Name**

**Description**

`other`

`[ResourcePolicyGroupPlacementPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.2.0/Google.Cloud.Compute.V1.ResourcePolicyGroupPlacementPolicy)`  

## Properties

### AvailabilityDomainCount

```
public int AvailabilityDomainCount { get; set; }
```

The number of availability domains instances will be spread across. If two instances are in different availability domain, they will not be put in the same low latency network

**Property Value**

**Type**

**Description**

`[Int32](https://learn.microsoft.com/dotnet/api/system.int32)`

### Collocation

```
public string Collocation { get; set; }
```

Specifies network collocation Check the Collocation enum for the list of possible values.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### HasAvailabilityDomainCount

```
public bool HasAvailabilityDomainCount { get; }
```

Gets whether the "availability\_domain\_count" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasCollocation

```
public bool HasCollocation { get; }
```

Gets whether the "collocation" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasVmCount

```
public bool HasVmCount { get; }
```

Gets whether the "vm\_count" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### VmCount

```
public int VmCount { get; set; }
```

Number of vms in this placement group

**Property Value**

**Type**

**Description**

`[Int32](https://learn.microsoft.com/dotnet/api/system.int32)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
