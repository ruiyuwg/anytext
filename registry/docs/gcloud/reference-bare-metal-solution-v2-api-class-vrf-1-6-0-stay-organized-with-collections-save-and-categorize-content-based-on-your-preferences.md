-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Bare Metal Solution v2 API - Class VRF (1.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.6.0keyboard\_arrow\_down

-   [1.8.0 (latest)](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/latest/Google.Cloud.BareMetalSolution.V2.VRF)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.7.0/Google.Cloud.BareMetalSolution.V2.VRF)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.VRF)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.5.0/Google.Cloud.BareMetalSolution.V2.VRF)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.4.0/Google.Cloud.BareMetalSolution.V2.VRF)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.3.0/Google.Cloud.BareMetalSolution.V2.VRF)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.2.0/Google.Cloud.BareMetalSolution.V2.VRF)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.1.0/Google.Cloud.BareMetalSolution.V2.VRF)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.0.0/Google.Cloud.BareMetalSolution.V2.VRF)

```
public sealed class VRF : IMessage<VRF>, IEquatable<VRF>, IDeepCloneable<VRF>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Bare Metal Solution v2 API class VRF.

A network VRF.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> VRF

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[VRF](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.VRF), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[VRF](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.VRF), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[VRF](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.VRF), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.BareMetalSolution.V2](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2)

## Assembly

Google.Cloud.BareMetalSolution.V2.dll

## Constructors

### VRF()

```
public VRF()
```

### VRF(VRF)

```
public VRF(VRF other)
```

**Parameter**

**Name**

**Description**

`other`

`[VRF](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.VRF)`  

## Properties

### Name

```
public string Name { get; set; }
```

The name of the VRF.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### QosPolicy

```
public VRF.Types.QosPolicy QosPolicy { get; set; }
```

The QOS policy applied to this VRF. The value is only meaningful when all the vlan attachments have the same QoS. This field should not be used for new integrations, use vlan attachment level qos instead. The field is left for backward-compatibility.

**Property Value**

**Type**

**Description**

`[VRF](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.VRF)[Types](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.VRF.Types)[QosPolicy](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.VRF.Types.QosPolicy)`

### State

```
public VRF.Types.State State { get; set; }
```

The possible state of VRF.

**Property Value**

**Type**

**Description**

`[VRF](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.VRF)[Types](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.VRF.Types)[State](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.VRF.Types.State)`

### VlanAttachments

```
public RepeatedField<VRF.Types.VlanAttachment> VlanAttachments { get; }
```

The list of VLAN attachments for the VRF.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[VRF](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.VRF)[Types](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.VRF.Types)[VlanAttachment](/dotnet/docs/reference/Google.Cloud.BareMetalSolution.V2/1.6.0/Google.Cloud.BareMetalSolution.V2.VRF.Types.VlanAttachment)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
