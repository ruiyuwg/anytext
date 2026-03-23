-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Batch v1 API - Class ComputeResource (2.11.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.11.0keyboard\_arrow\_down

-   [2.15.0 (latest)](/dotnet/docs/reference/Google.Cloud.Batch.V1/latest/Google.Cloud.Batch.V1.ComputeResource)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.14.0/Google.Cloud.Batch.V1.ComputeResource)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.13.0/Google.Cloud.Batch.V1.ComputeResource)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.12.0/Google.Cloud.Batch.V1.ComputeResource)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.11.0/Google.Cloud.Batch.V1.ComputeResource)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.10.0/Google.Cloud.Batch.V1.ComputeResource)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.9.0/Google.Cloud.Batch.V1.ComputeResource)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.8.0/Google.Cloud.Batch.V1.ComputeResource)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.7.0/Google.Cloud.Batch.V1.ComputeResource)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.6.0/Google.Cloud.Batch.V1.ComputeResource)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.5.0/Google.Cloud.Batch.V1.ComputeResource)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.4.0/Google.Cloud.Batch.V1.ComputeResource)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.3.0/Google.Cloud.Batch.V1.ComputeResource)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.2.0/Google.Cloud.Batch.V1.ComputeResource)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.1.0/Google.Cloud.Batch.V1.ComputeResource)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.0.0/Google.Cloud.Batch.V1.ComputeResource)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/1.3.0/Google.Cloud.Batch.V1.ComputeResource)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/1.2.0/Google.Cloud.Batch.V1.ComputeResource)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/1.1.0/Google.Cloud.Batch.V1.ComputeResource)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Batch.V1/1.0.0/Google.Cloud.Batch.V1.ComputeResource)

```
public sealed class ComputeResource : IMessage<ComputeResource>, IEquatable<ComputeResource>, IDeepCloneable<ComputeResource>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Batch v1 API class ComputeResource.

Compute resource requirements.

ComputeResource defines the amount of resources required for each task. Make sure your tasks have enough resources to successfully run. If you also define the types of resources for a job to use with the [InstancePolicyOrTemplate](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicyortemplate) field, make sure both fields are compatible with each other.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ComputeResource

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ComputeResource](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.11.0/Google.Cloud.Batch.V1.ComputeResource), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ComputeResource](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.11.0/Google.Cloud.Batch.V1.ComputeResource), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ComputeResource](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.11.0/Google.Cloud.Batch.V1.ComputeResource), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Batch.V1](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.11.0/Google.Cloud.Batch.V1)

## Assembly

Google.Cloud.Batch.V1.dll

## Constructors

### ComputeResource()

```
public ComputeResource()
```

### ComputeResource(ComputeResource)

```
public ComputeResource(ComputeResource other)
```

**Parameter**

**Name**

**Description**

`other`

`[ComputeResource](/dotnet/docs/reference/Google.Cloud.Batch.V1/2.11.0/Google.Cloud.Batch.V1.ComputeResource)`  

## Properties

### BootDiskMib

```
public long BootDiskMib { get; set; }
```

Extra boot disk size in MiB for each task.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### CpuMilli

```
public long CpuMilli { get; set; }
```

The milliCPU count.

`cpuMilli` defines the amount of CPU resources per task in milliCPU units. For example, `1000` corresponds to 1 vCPU per task. If undefined, the default value is `2000`.

If you also define the VM's machine type using the `machineType` in [InstancePolicy](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicy) field or inside the `instanceTemplate` in the [InstancePolicyOrTemplate](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicyortemplate) field, make sure the CPU resources for both fields are compatible with each other and with how many tasks you want to allow to run on the same VM at the same time.

For example, if you specify the `n2-standard-2` machine type, which has 2 vCPUs each, you are recommended to set `cpuMilli` no more than `2000`, or you are recommended to run two tasks on the same VM if you set `cpuMilli` to `1000` or less.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### MemoryMib

```
public long MemoryMib { get; set; }
```

Memory in MiB.

`memoryMib` defines the amount of memory per task in MiB units. If undefined, the default value is `2000`. If you also define the VM's machine type using the `machineType` in [InstancePolicy](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicy) field or inside the `instanceTemplate` in the [InstancePolicyOrTemplate](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicyortemplate) field, make sure the memory resources for both fields are compatible with each other and with how many tasks you want to allow to run on the same VM at the same time.

For example, if you specify the `n2-standard-2` machine type, which has 8 GiB each, you are recommended to set `memoryMib` to no more than `8192`, or you are recommended to run two tasks on the same VM if you set `memoryMib` to `4096` or less.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
