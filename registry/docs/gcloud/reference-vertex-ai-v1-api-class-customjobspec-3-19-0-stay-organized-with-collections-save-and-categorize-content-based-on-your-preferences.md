-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Vertex AI v1 API - Class CustomJobSpec (3.19.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class CustomJobSpec : IMessage<CustomJobSpec>, IEquatable<CustomJobSpec>, IDeepCloneable<CustomJobSpec>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Vertex AI v1 API class CustomJobSpec.

Represents the spec of a CustomJob.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> CustomJobSpec

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[CustomJobSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CustomJobSpec), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[CustomJobSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CustomJobSpec), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[CustomJobSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CustomJobSpec), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### CustomJobSpec()

```
public CustomJobSpec()
```

### CustomJobSpec(CustomJobSpec)

```
public CustomJobSpec(CustomJobSpec other)
```

**Parameter**

**Name**

**Description**

`other`

`[CustomJobSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CustomJobSpec)`  

## Properties

### BaseOutputDirectory

```
public GcsDestination BaseOutputDirectory { get; set; }
```

The Cloud Storage location to store the output of this CustomJob or HyperparameterTuningJob. For HyperparameterTuningJob, the baseOutputDirectory of each child CustomJob backing a Trial is set to a subdirectory of name \[id\]\[google.cloud.aiplatform.v1.Trial.id\] under its parent HyperparameterTuningJob's baseOutputDirectory.

The following Vertex AI environment variables will be passed to containers or python modules when this field is set:

For CustomJob:

-   AIP\_MODEL\_DIR = `<base_output_directory>/model/`
-   AIP\_CHECKPOINT\_DIR = `<base_output_directory>/checkpoints/`
-   AIP\_TENSORBOARD\_LOG\_DIR = `<base_output_directory>/logs/`
    
    For CustomJob backing a Trial of HyperparameterTuningJob:
    
-   AIP\_MODEL\_DIR = `<base_output_directory>/<trial_id>/model/`
    
-   AIP\_CHECKPOINT\_DIR = `<base_output_directory>/<trial_id>/checkpoints/`
-   AIP\_TENSORBOARD\_LOG\_DIR = `<base_output_directory>/<trial_id>/logs/`

**Property Value**

**Type**

**Description**

`[GcsDestination](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.GcsDestination)`

### EnableDashboardAccess

```
public bool EnableDashboardAccess { get; set; }
```

Optional. Whether you want Vertex AI to enable access to the customized dashboard in training chief container.

If set to `true`, you can access the dashboard at the URIs given by \[CustomJob.web\_access\_uris\]\[google.cloud.aiplatform.v1.CustomJob.web\_access\_uris\] or \[Trial.web\_access\_uris\]\[google.cloud.aiplatform.v1.Trial.web\_access\_uris\] (within \[HyperparameterTuningJob.trials\]\[google.cloud.aiplatform.v1.HyperparameterTuningJob.trials\]).

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### EnableWebAccess

```
public bool EnableWebAccess { get; set; }
```

Optional. Whether you want Vertex AI to enable [interactive shell access](https://cloud.google.com/vertex-ai/docs/training/monitor-debug-interactive-shell) to training containers.

If set to `true`, you can access interactive shells at the URIs given by \[CustomJob.web\_access\_uris\]\[google.cloud.aiplatform.v1.CustomJob.web\_access\_uris\] or \[Trial.web\_access\_uris\]\[google.cloud.aiplatform.v1.Trial.web\_access\_uris\] (within \[HyperparameterTuningJob.trials\]\[google.cloud.aiplatform.v1.HyperparameterTuningJob.trials\]).

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Experiment

```
public string Experiment { get; set; }
```

Optional. The Experiment associated with this job. Format: `projects/{project}/locations/{location}/metadataStores/{metadataStores}/contexts/{experiment-name}`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ExperimentAsContextName

```
public ContextName ExperimentAsContextName { get; set; }
```

[ContextName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ContextName)\-typed view over the [Experiment](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CustomJobSpec#Google_Cloud_AIPlatform_V1_CustomJobSpec_Experiment) resource name property.

**Property Value**

**Type**

**Description**

`[ContextName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ContextName)`

### ExperimentRun

```
public string ExperimentRun { get; set; }
```

Optional. The Experiment Run associated with this job. Format: `projects/{project}/locations/{location}/metadataStores/{metadataStores}/contexts/{experiment-name}-{experiment-run-name}`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ExperimentRunAsContextName

```
public ContextName ExperimentRunAsContextName { get; set; }
```

[ContextName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ContextName)\-typed view over the [ExperimentRun](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CustomJobSpec#Google_Cloud_AIPlatform_V1_CustomJobSpec_ExperimentRun) resource name property.

**Property Value**

**Type**

**Description**

`[ContextName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ContextName)`

### Models

```
public RepeatedField<string> Models { get; }
```

Optional. The name of the Model resources for which to generate a mapping to artifact URIs. Applicable only to some of the Google-provided custom jobs. Format: `projects/{project}/locations/{location}/models/{model}`

In order to retrieve a specific version of the model, also provide the version ID or version alias. Example: `projects/{project}/locations/{location}/models/{model}@2` or `projects/{project}/locations/{location}/models/{model}@golden` If no version ID or alias is specified, the "default" version will be returned. The "default" version alias is created for the first version of the model, and can be moved to other versions later on. There will be exactly one default version.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ModelsAsModelNames

```
public ResourceNameList<ModelName> ModelsAsModelNames { get; }
```

[ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ModelName)\-typed view over the [Models](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CustomJobSpec#Google_Cloud_AIPlatform_V1_CustomJobSpec_Models) resource name property.

**Property Value**

**Type**

**Description**

`[ResourceNameList](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNameList-1.html)[ModelName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ModelName)`

### Network

```
public string Network { get; set; }
```

Optional. The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to which the Job should be peered. For example, `projects/12345/global/networks/myVPC`. [Format](/compute/docs/reference/rest/v1/networks/insert) is of the form `projects/{project}/global/networks/{network}`. Where {project} is a project number, as in `12345`, and {network} is a network name.

To specify this field, you must have already [configured VPC Network Peering for Vertex AI](https://cloud.google.com/vertex-ai/docs/general/vpc-peering).

If this field is left unspecified, the job is not peered with any network.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### NetworkAsNetworkName

```
public NetworkName NetworkAsNetworkName { get; set; }
```

[NetworkName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.NetworkName)\-typed view over the [Network](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CustomJobSpec#Google_Cloud_AIPlatform_V1_CustomJobSpec_Network) resource name property.

**Property Value**

**Type**

**Description**

`[NetworkName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.NetworkName)`

### PersistentResourceId

```
public string PersistentResourceId { get; set; }
```

Optional. The ID of the PersistentResource in the same Project and Location which to run

If this is specified, the job will be run on existing machines held by the PersistentResource instead of on-demand short-live machines. The network and CMEK configs on the job should be consistent with those on the PersistentResource, otherwise, the job will be rejected.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### PersistentResourceIdAsPersistentResourceName

```
public PersistentResourceName PersistentResourceIdAsPersistentResourceName { get; set; }
```

[PersistentResourceName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PersistentResourceName)\-typed view over the [PersistentResourceId](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CustomJobSpec#Google_Cloud_AIPlatform_V1_CustomJobSpec_PersistentResourceId) resource name property.

**Property Value**

**Type**

**Description**

`[PersistentResourceName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PersistentResourceName)`

### ProtectedArtifactLocationId

```
public string ProtectedArtifactLocationId { get; set; }
```

The ID of the location to store protected artifacts. e.g. us-central1. Populate only when the location is different than CustomJob location. List of supported locations: [https://cloud.google.com/vertex-ai/docs/general/locations](https://cloud.google.com/vertex-ai/docs/general/locations)

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ReservedIpRanges

```
public RepeatedField<string> ReservedIpRanges { get; }
```

Optional. A list of names for the reserved ip ranges under the VPC network that can be used for this job.

If set, we will deploy the job within the provided ip ranges. Otherwise, the job will be deployed to any ip ranges under the provided VPC network.

Example: \['vertex-ai-ip-range'\].

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Scheduling

```
public Scheduling Scheduling { get; set; }
```

Scheduling options for a CustomJob.

**Property Value**

**Type**

**Description**

`[Scheduling](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.Scheduling)`

### ServiceAccount

```
public string ServiceAccount { get; set; }
```

Specifies the service account for workload run-as account. Users submitting jobs must have act-as permission on this run-as account. If unspecified, the [Vertex AI Custom Code Service Agent](https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents) for the CustomJob's project is used.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Tensorboard

```
public string Tensorboard { get; set; }
```

Optional. The name of a Vertex AI \[Tensorboard\]\[google.cloud.aiplatform.v1.Tensorboard\] resource to which this CustomJob will upload Tensorboard logs. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### TensorboardAsTensorboardName

```
public TensorboardName TensorboardAsTensorboardName { get; set; }
```

[TensorboardName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TensorboardName)\-typed view over the [Tensorboard](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CustomJobSpec#Google_Cloud_AIPlatform_V1_CustomJobSpec_Tensorboard) resource name property.

**Property Value**

**Type**

**Description**

`[TensorboardName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TensorboardName)`

### WorkerPoolSpecs

```
public RepeatedField<WorkerPoolSpec> WorkerPoolSpecs { get; }
```

Required. The spec of the worker pools including machine type and Docker image. All worker pools except the first one are optional and can be skipped by providing an empty value.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[WorkerPoolSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.WorkerPoolSpec)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
