-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class AcceleratorConfig (3.4.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class AcceleratorConfig : IMessage<AcceleratorConfig>, IEquatable<AcceleratorConfig>, IDeepCloneable<AcceleratorConfig>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Compute Engine v1 API class AcceleratorConfig.

A specification of the type and number of accelerator cards attached to the instance.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> AcceleratorConfig

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[AcceleratorConfig](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.4.0/Google.Cloud.Compute.V1.AcceleratorConfig), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[AcceleratorConfig](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.4.0/Google.Cloud.Compute.V1.AcceleratorConfig), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[AcceleratorConfig](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.4.0/Google.Cloud.Compute.V1.AcceleratorConfig), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.4.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### AcceleratorConfig()

```
public AcceleratorConfig()
```

### AcceleratorConfig(AcceleratorConfig)

```
public AcceleratorConfig(AcceleratorConfig other)
```

**Parameter**

**Name**

**Description**

`other`

`[AcceleratorConfig](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.4.0/Google.Cloud.Compute.V1.AcceleratorConfig)`  

## Properties

### AcceleratorCount

```
public int AcceleratorCount { get; set; }
```

The number of the guest accelerator cards exposed to this instance.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### AcceleratorType

```
public string AcceleratorType { get; set; }
```

Full or partial URL of the accelerator type resource to attach to this instance. For example: projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100 If you are creating an instance template, specify only the accelerator name. See GPUs on Compute Engine for a full list of accelerator types.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### HasAcceleratorCount

```
public bool HasAcceleratorCount { get; }
```

Gets whether the "accelerator\_count" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasAcceleratorType

```
public bool HasAcceleratorType { get; }
```

Gets whether the "accelerator\_type" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
