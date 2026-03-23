-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Vertex AI v1 API - Class DedicatedResources (3.24.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class DedicatedResources : IMessage<DedicatedResources>, IEquatable<DedicatedResources>, IDeepCloneable<DedicatedResources>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Vertex AI v1 API class DedicatedResources.

A description of resources that are dedicated to a DeployedModel, and that need a higher degree of manual configuration.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> DedicatedResources

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[DedicatedResources](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.DedicatedResources), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[DedicatedResources](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.DedicatedResources), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[DedicatedResources](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.DedicatedResources), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### DedicatedResources()

```
public DedicatedResources()
```

### DedicatedResources(DedicatedResources)

```
public DedicatedResources(DedicatedResources other)
```

**Parameter**

**Name**

**Description**

`other`

`[DedicatedResources](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.DedicatedResources)`  

## Properties

### AutoscalingMetricSpecs

```
public RepeatedField<AutoscalingMetricSpec> AutoscalingMetricSpecs { get; }
```

Immutable. The metric specifications that overrides a resource utilization metric (CPU utilization, accelerator's duty cycle, and so on) target value (default to 60 if not set). At most one entry is allowed per metric.

If \[machine\_spec.accelerator\_count\]\[google.cloud.aiplatform.v1.MachineSpec.accelerator\_count\] is above 0, the autoscaling will be based on both CPU utilization and accelerator's duty cycle metrics and scale up when either metrics exceeds its target value while scale down if both metrics are under their target value. The default target value is 60 for both metrics.

If \[machine\_spec.accelerator\_count\]\[google.cloud.aiplatform.v1.MachineSpec.accelerator\_count\] is 0, the autoscaling will be based on CPU utilization metric only with default target value 60 if not explicitly set.

For example, in the case of Online Prediction, if you want to override target CPU utilization to 80, you should set \[autoscaling\_metric\_specs.metric\_name\]\[google.cloud.aiplatform.v1.AutoscalingMetricSpec.metric\_name\] to `aiplatform.googleapis.com/prediction/online/cpu/utilization` and \[autoscaling\_metric\_specs.target\]\[google.cloud.aiplatform.v1.AutoscalingMetricSpec.target\] to `80`.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[AutoscalingMetricSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.AutoscalingMetricSpec)`

### MachineSpec

```
public MachineSpec MachineSpec { get; set; }
```

Required. Immutable. The specification of a single machine used by the prediction.

**Property Value**

**Type**

**Description**

`[MachineSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.MachineSpec)`

### MaxReplicaCount

```
public int MaxReplicaCount { get; set; }
```

Immutable. The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, will use \[min\_replica\_count\]\[google.cloud.aiplatform.v1.DedicatedResources.min\_replica\_count\] as the default value.

The value of this field impacts the charge against Vertex CPU and GPU quotas. Specifically, you will be charged for (max\_replica\_count \* number of cores in the selected machine type) and (max\_replica\_count \* number of GPUs per replica in the selected machine type).

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### MinReplicaCount

```
public int MinReplicaCount { get; set; }
```

Required. Immutable. The minimum number of machine replicas this DeployedModel will be always deployed on. This value must be greater than or equal to 1.

If traffic against the DeployedModel increases, it may dynamically be deployed onto more replicas, and as traffic decreases, some of these extra replicas may be freed.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### RequiredReplicaCount

```
public int RequiredReplicaCount { get; set; }
```

Optional. Number of required available replicas for the deployment to succeed. This field is only needed when partial model deployment/mutation is desired. If set, the model deploy/mutate operation will succeed once available\_replica\_count reaches required\_replica\_count, and the rest of the replicas will be retried. If not set, the default required\_replica\_count will be min\_replica\_count.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### Spot

```
public bool Spot { get; set; }
```

Optional. If true, schedule the deployment workload on [spot VMs](https://cloud.google.com/kubernetes-engine/docs/concepts/spot-vms).

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
