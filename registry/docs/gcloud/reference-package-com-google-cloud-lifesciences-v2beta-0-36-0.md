-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

0.89.0 (latest) 0.87.0 0.85.0 0.84.0 0.83.0 0.82.0 0.80.0 0.78.0 0.77.0 0.76.0 0.75.0 0.74.0 0.72.0 0.70.0 0.69.0 0.66.0 0.65.0 0.64.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.3.8

# Package com.google.cloud.lifesciences.v2beta (0.36.0)

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-life-sciences/google-cloud-life-sciences/src/main/java/com/google/cloud/lifesciences/v2beta)

[RPC Documentation](https://cloud.google.com/life-sciences/docs/reference/rpc)

[REST Documentation](https://cloud.google.com/life-sciences/docs/reference/rest)

## This package is not the latest GA version!

For this library, we recommend using the [package](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta) associated with API version v2beta for new applications.

## Prerelease Implications

This package is a prerelease version! Use with caution. Prerelease versions are considered unstable as they may be shut down. You can read more about [Cloud API versioning strategy here](https://cloud.google.com/apis/design/versioning). Each Cloud Java client library may contain multiple packages. Each package containing a version number in its name corresponds to a published version of the service. We recommend using the latest stable version for new production applications, which can be identified by the largest numeric version that does not contain a suffix. For example, if a client library has two packages: `v1` and `v2alpha`, then the latest stable version is `v1`. If you use an unstable release, breaking changes may be introduced when upgrading.

## Client Classes

Client classes are the main entry point to using a package. They contain several variations of Java methods for each of the API's methods.

Client

Description

[com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaClient](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaClient)

Service Description: A service for running workflows, such as pipelines consisting of Docker containers.

This class provides the ability to make remote calls to the backing service through method

## Settings Classes

Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.

Settings

Description

[com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaSettings](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaSettings)

Settings class to configure an instance of WorkflowsServiceV2BetaClient.

The default instance has everything set to sensible defaults:

## Classes

Class

Description

[com.google.cloud.lifesciences.v2beta.Accelerator](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Accelerator)

Carries information about an accelerator that can be attached to a VM.

[com.google.cloud.lifesciences.v2beta.Accelerator.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Accelerator.Builder)

Carries information about an accelerator that can be attached to a VM.

[com.google.cloud.lifesciences.v2beta.Action](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Action)

Specifies a single action that runs a Docker container.

[com.google.cloud.lifesciences.v2beta.Action.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Action.Builder)

Specifies a single action that runs a Docker container.

[com.google.cloud.lifesciences.v2beta.ContainerKilledEvent](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.ContainerKilledEvent)

An event generated when a container is forcibly terminated by the worker. Currently, this only occurs when the container outlives the timeout specified by the user.

[com.google.cloud.lifesciences.v2beta.ContainerKilledEvent.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.ContainerKilledEvent.Builder)

An event generated when a container is forcibly terminated by the worker. Currently, this only occurs when the container outlives the timeout specified by the user.

[com.google.cloud.lifesciences.v2beta.ContainerStartedEvent](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.ContainerStartedEvent)

An event generated when a container starts.

[com.google.cloud.lifesciences.v2beta.ContainerStartedEvent.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.ContainerStartedEvent.Builder)

An event generated when a container starts.

[com.google.cloud.lifesciences.v2beta.ContainerStoppedEvent](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.ContainerStoppedEvent)

An event generated when a container exits.

[com.google.cloud.lifesciences.v2beta.ContainerStoppedEvent.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.ContainerStoppedEvent.Builder)

An event generated when a container exits.

[com.google.cloud.lifesciences.v2beta.DelayedEvent](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.DelayedEvent)

An event generated whenever a resource limitation or transient error delays execution of a pipeline that was otherwise ready to run.

[com.google.cloud.lifesciences.v2beta.DelayedEvent.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.DelayedEvent.Builder)

An event generated whenever a resource limitation or transient error delays execution of a pipeline that was otherwise ready to run.

[com.google.cloud.lifesciences.v2beta.Disk](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Disk)

Carries information about a disk that can be attached to a VM. See [https://cloud.google.com/compute/docs/disks/performance](https://cloud.google.com/compute/docs/disks/performance) for more

[com.google.cloud.lifesciences.v2beta.Disk.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Disk.Builder)

Carries information about a disk that can be attached to a VM. See [https://cloud.google.com/compute/docs/disks/performance](https://cloud.google.com/compute/docs/disks/performance) for more

[com.google.cloud.lifesciences.v2beta.Event](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Event)

Carries information about events that occur during pipeline execution.

[com.google.cloud.lifesciences.v2beta.Event.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Event.Builder)

Carries information about events that occur during pipeline execution.

[com.google.cloud.lifesciences.v2beta.ExistingDisk](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.ExistingDisk)

Configuration for an existing disk to be attached to the VM.

[com.google.cloud.lifesciences.v2beta.ExistingDisk.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.ExistingDisk.Builder)

Configuration for an existing disk to be attached to the VM.

[com.google.cloud.lifesciences.v2beta.FailedEvent](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.FailedEvent)

An event generated when the execution of a pipeline has failed. Note that other events can continue to occur after this event.

[com.google.cloud.lifesciences.v2beta.FailedEvent.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.FailedEvent.Builder)

An event generated when the execution of a pipeline has failed. Note that other events can continue to occur after this event.

[com.google.cloud.lifesciences.v2beta.Metadata](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Metadata)

Carries information about the pipeline execution that is returned in the long running operation's metadata field.

[com.google.cloud.lifesciences.v2beta.Metadata.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Metadata.Builder)

Carries information about the pipeline execution that is returned in the long running operation's metadata field.

[com.google.cloud.lifesciences.v2beta.Mount](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Mount)

Carries information about a particular disk mount inside a container.

[com.google.cloud.lifesciences.v2beta.Mount.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Mount.Builder)

Carries information about a particular disk mount inside a container.

[com.google.cloud.lifesciences.v2beta.NFSMount](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.NFSMount)

Configuration for an `NFSMount` to be attached to the VM.

[com.google.cloud.lifesciences.v2beta.NFSMount.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.NFSMount.Builder)

Configuration for an `NFSMount` to be attached to the VM.

[com.google.cloud.lifesciences.v2beta.Network](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Network)

VM networking options.

[com.google.cloud.lifesciences.v2beta.Network.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Network.Builder)

VM networking options.

[com.google.cloud.lifesciences.v2beta.PersistentDisk](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.PersistentDisk)

Configuration for a persistent disk to be attached to the VM. See [https://cloud.google.com/compute/docs/disks/performance](https://cloud.google.com/compute/docs/disks/performance) for more

[com.google.cloud.lifesciences.v2beta.PersistentDisk.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.PersistentDisk.Builder)

Configuration for a persistent disk to be attached to the VM. See [https://cloud.google.com/compute/docs/disks/performance](https://cloud.google.com/compute/docs/disks/performance) for more

[com.google.cloud.lifesciences.v2beta.Pipeline](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Pipeline)

Specifies a series of actions to execute, expressed as Docker containers.

[com.google.cloud.lifesciences.v2beta.Pipeline.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Pipeline.Builder)

Specifies a series of actions to execute, expressed as Docker containers.

[com.google.cloud.lifesciences.v2beta.PullStartedEvent](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.PullStartedEvent)

An event generated when the worker starts pulling an image.

[com.google.cloud.lifesciences.v2beta.PullStartedEvent.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.PullStartedEvent.Builder)

An event generated when the worker starts pulling an image.

[com.google.cloud.lifesciences.v2beta.PullStoppedEvent](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.PullStoppedEvent)

An event generated when the worker stops pulling an image.

[com.google.cloud.lifesciences.v2beta.PullStoppedEvent.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.PullStoppedEvent.Builder)

An event generated when the worker stops pulling an image.

[com.google.cloud.lifesciences.v2beta.Resources](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Resources)

The system resources for the pipeline run. At least one zone or region must be specified or the pipeline run will fail.

[com.google.cloud.lifesciences.v2beta.Resources.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Resources.Builder)

The system resources for the pipeline run. At least one zone or region must be specified or the pipeline run will fail.

[com.google.cloud.lifesciences.v2beta.RunPipelineRequest](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.RunPipelineRequest)

The arguments to the `RunPipeline` method. The requesting user must have the `iam.serviceAccounts.actAs` permission for the Cloud Life Sciences service account or the request will fail.

[com.google.cloud.lifesciences.v2beta.RunPipelineRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.RunPipelineRequest.Builder)

The arguments to the `RunPipeline` method. The requesting user must have the `iam.serviceAccounts.actAs` permission for the Cloud Life Sciences service account or the request will fail.

[com.google.cloud.lifesciences.v2beta.RunPipelineResponse](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.RunPipelineResponse)

The response to the RunPipeline method, returned in the operation's result field on success.

[com.google.cloud.lifesciences.v2beta.RunPipelineResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.RunPipelineResponse.Builder)

The response to the RunPipeline method, returned in the operation's result field on success.

[com.google.cloud.lifesciences.v2beta.Secret](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Secret)

Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline.

[com.google.cloud.lifesciences.v2beta.Secret.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Secret.Builder)

Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline.

[com.google.cloud.lifesciences.v2beta.ServiceAccount](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.ServiceAccount)

Carries information about a Google Cloud service account.

[com.google.cloud.lifesciences.v2beta.ServiceAccount.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.ServiceAccount.Builder)

Carries information about a Google Cloud service account.

[com.google.cloud.lifesciences.v2beta.UnexpectedExitStatusEvent](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.UnexpectedExitStatusEvent)

An event generated when the execution of a container results in a non-zero exit status that was not otherwise ignored. Execution will continue, but only actions that are flagged as `ALWAYS_RUN` will be

[com.google.cloud.lifesciences.v2beta.UnexpectedExitStatusEvent.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.UnexpectedExitStatusEvent.Builder)

An event generated when the execution of a container results in a non-zero exit status that was not otherwise ignored. Execution will continue, but only actions that are flagged as `ALWAYS_RUN` will be

[com.google.cloud.lifesciences.v2beta.VirtualMachine](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.VirtualMachine)

Carries information about a Compute Engine VM resource.

[com.google.cloud.lifesciences.v2beta.VirtualMachine.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.VirtualMachine.Builder)

Carries information about a Compute Engine VM resource.

[com.google.cloud.lifesciences.v2beta.Volume](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Volume)

Carries information about storage that can be attached to a VM. Specify either `Volume` or

[com.google.cloud.lifesciences.v2beta.Volume.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Volume.Builder)

Carries information about storage that can be attached to a VM. Specify either `Volume` or

[com.google.cloud.lifesciences.v2beta.WorkerAssignedEvent](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.WorkerAssignedEvent)

An event generated after a worker VM has been assigned to run the pipeline.

[com.google.cloud.lifesciences.v2beta.WorkerAssignedEvent.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.WorkerAssignedEvent.Builder)

An event generated after a worker VM has been assigned to run the pipeline.

[com.google.cloud.lifesciences.v2beta.WorkerReleasedEvent](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.WorkerReleasedEvent)

An event generated when the worker VM that was assigned to the pipeline has been released (deleted).

[com.google.cloud.lifesciences.v2beta.WorkerReleasedEvent.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.WorkerReleasedEvent.Builder)

An event generated when the worker VM that was assigned to the pipeline has been released (deleted).

[com.google.cloud.lifesciences.v2beta.WorkflowsProto](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.WorkflowsProto)

[com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaClient.ListLocationsFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaClient.ListLocationsFixedSizeCollection)

[com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaClient.ListLocationsPage](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaClient.ListLocationsPage)

[com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaClient.ListLocationsPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaClient.ListLocationsPagedResponse)

[com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaGrpc](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaGrpc)

A service for running workflows, such as pipelines consisting of Docker containers.

[com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaGrpc.WorkflowsServiceV2BetaImplBase](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaGrpc.WorkflowsServiceV2BetaImplBase)

Base class for the server implementation of the service WorkflowsServiceV2Beta. A service for running workflows, such as pipelines consisting of Docker

[com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaSettings.Builder)

Builder for WorkflowsServiceV2BetaSettings.

## Interfaces

Interface

Description

[com.google.cloud.lifesciences.v2beta.AcceleratorOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.AcceleratorOrBuilder)

[com.google.cloud.lifesciences.v2beta.ActionOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.ActionOrBuilder)

[com.google.cloud.lifesciences.v2beta.ContainerKilledEventOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.ContainerKilledEventOrBuilder)

[com.google.cloud.lifesciences.v2beta.ContainerStartedEventOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.ContainerStartedEventOrBuilder)

[com.google.cloud.lifesciences.v2beta.ContainerStoppedEventOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.ContainerStoppedEventOrBuilder)

[com.google.cloud.lifesciences.v2beta.DelayedEventOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.DelayedEventOrBuilder)

[com.google.cloud.lifesciences.v2beta.DiskOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.DiskOrBuilder)

[com.google.cloud.lifesciences.v2beta.EventOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.EventOrBuilder)

[com.google.cloud.lifesciences.v2beta.ExistingDiskOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.ExistingDiskOrBuilder)

[com.google.cloud.lifesciences.v2beta.FailedEventOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.FailedEventOrBuilder)

[com.google.cloud.lifesciences.v2beta.MetadataOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.MetadataOrBuilder)

[com.google.cloud.lifesciences.v2beta.MountOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.MountOrBuilder)

[com.google.cloud.lifesciences.v2beta.NFSMountOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.NFSMountOrBuilder)

[com.google.cloud.lifesciences.v2beta.NetworkOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.NetworkOrBuilder)

[com.google.cloud.lifesciences.v2beta.PersistentDiskOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.PersistentDiskOrBuilder)

[com.google.cloud.lifesciences.v2beta.PipelineOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.PipelineOrBuilder)

[com.google.cloud.lifesciences.v2beta.PullStartedEventOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.PullStartedEventOrBuilder)

[com.google.cloud.lifesciences.v2beta.PullStoppedEventOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.PullStoppedEventOrBuilder)

[com.google.cloud.lifesciences.v2beta.ResourcesOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.ResourcesOrBuilder)

[com.google.cloud.lifesciences.v2beta.RunPipelineRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.RunPipelineRequestOrBuilder)

[com.google.cloud.lifesciences.v2beta.RunPipelineResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.RunPipelineResponseOrBuilder)

[com.google.cloud.lifesciences.v2beta.SecretOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.SecretOrBuilder)

[com.google.cloud.lifesciences.v2beta.ServiceAccountOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.ServiceAccountOrBuilder)

[com.google.cloud.lifesciences.v2beta.UnexpectedExitStatusEventOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.UnexpectedExitStatusEventOrBuilder)

[com.google.cloud.lifesciences.v2beta.VirtualMachineOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.VirtualMachineOrBuilder)

[com.google.cloud.lifesciences.v2beta.VolumeOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.VolumeOrBuilder)

[com.google.cloud.lifesciences.v2beta.WorkerAssignedEventOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.WorkerAssignedEventOrBuilder)

[com.google.cloud.lifesciences.v2beta.WorkerReleasedEventOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.WorkerReleasedEventOrBuilder)

[com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaGrpc.AsyncService](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.WorkflowsServiceV2BetaGrpc.AsyncService)

A service for running workflows, such as pipelines consisting of Docker containers.

## Enums

Enum

Description

[com.google.cloud.lifesciences.v2beta.Event.DetailsCase](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Event.DetailsCase)

[com.google.cloud.lifesciences.v2beta.Volume.StorageCase](https://cloud.google.com/java/docs/reference/google-cloud-life-sciences/latest/com.google.cloud.lifesciences.v2beta.Volume.StorageCase)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
