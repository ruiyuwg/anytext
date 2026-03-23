-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.cloud.notebooks.v1beta1 (1.6.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.3 1.0.6 0.6.2

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

A client to Notebooks API

The interfaces provided are listed below, along with usage samples.

## NotebookServiceClient

Service Description: API v1beta1 service for Cloud AI Platform Notebooks.

Sample for NotebookServiceClient:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (NotebookServiceClient notebookServiceClient = NotebookServiceClient.create()) {
   GetInstanceRequest request = GetInstanceRequest.newBuilder().setName("name3373707").build();
   Instance response = notebookServiceClient.getInstance(request);
 }
 
```
 

## Classes

### [ContainerImage](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ContainerImage)

Definition of a container image for starting a notebook instance with the environment installed in a container.

Protobuf type `google.cloud.notebooks.v1beta1.ContainerImage`

### [ContainerImage.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ContainerImage.Builder)

Definition of a container image for starting a notebook instance with the environment installed in a container.

Protobuf type `google.cloud.notebooks.v1beta1.ContainerImage`

### [CreateEnvironmentRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.CreateEnvironmentRequest)

Request for creating a notebook environment.

Protobuf type `google.cloud.notebooks.v1beta1.CreateEnvironmentRequest`

### [CreateEnvironmentRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.CreateEnvironmentRequest.Builder)

Request for creating a notebook environment.

Protobuf type `google.cloud.notebooks.v1beta1.CreateEnvironmentRequest`

### [CreateInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.CreateInstanceRequest)

Request for creating a notebook instance.

Protobuf type `google.cloud.notebooks.v1beta1.CreateInstanceRequest`

### [CreateInstanceRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.CreateInstanceRequest.Builder)

Request for creating a notebook instance.

Protobuf type `google.cloud.notebooks.v1beta1.CreateInstanceRequest`

### [DeleteEnvironmentRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.DeleteEnvironmentRequest)

Request for deleting a notebook environment.

Protobuf type `google.cloud.notebooks.v1beta1.DeleteEnvironmentRequest`

### [DeleteEnvironmentRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.DeleteEnvironmentRequest.Builder)

Request for deleting a notebook environment.

Protobuf type `google.cloud.notebooks.v1beta1.DeleteEnvironmentRequest`

### [DeleteInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.DeleteInstanceRequest)

Request for deleting a notebook instance.

Protobuf type `google.cloud.notebooks.v1beta1.DeleteInstanceRequest`

### [DeleteInstanceRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.DeleteInstanceRequest.Builder)

Request for deleting a notebook instance.

Protobuf type `google.cloud.notebooks.v1beta1.DeleteInstanceRequest`

### [Environment](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.Environment)

Definition of a software environment that is used to start a notebook instance.

Protobuf type `google.cloud.notebooks.v1beta1.Environment`

### [Environment.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.Environment.Builder)

Definition of a software environment that is used to start a notebook instance.

Protobuf type `google.cloud.notebooks.v1beta1.Environment`

### [EnvironmentProto](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.EnvironmentProto)

### [GetEnvironmentRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.GetEnvironmentRequest)

Request for getting a notebook environment.

Protobuf type `google.cloud.notebooks.v1beta1.GetEnvironmentRequest`

### [GetEnvironmentRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.GetEnvironmentRequest.Builder)

Request for getting a notebook environment.

Protobuf type `google.cloud.notebooks.v1beta1.GetEnvironmentRequest`

### [GetInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.GetInstanceRequest)

Request for getting a notebook instance.

Protobuf type `google.cloud.notebooks.v1beta1.GetInstanceRequest`

### [GetInstanceRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.GetInstanceRequest.Builder)

Request for getting a notebook instance.

Protobuf type `google.cloud.notebooks.v1beta1.GetInstanceRequest`

### [Instance](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.Instance)

The definition of a notebook instance.

Protobuf type `google.cloud.notebooks.v1beta1.Instance`

### [Instance.AcceleratorConfig](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.Instance.AcceleratorConfig)

Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. Check [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus/#gpus-list) to find a valid combination. TPUs are not supported.

Protobuf type `google.cloud.notebooks.v1beta1.Instance.AcceleratorConfig`

### [Instance.AcceleratorConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.Instance.AcceleratorConfig.Builder)

Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. Check [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus/#gpus-list) to find a valid combination. TPUs are not supported.

Protobuf type `google.cloud.notebooks.v1beta1.Instance.AcceleratorConfig`

### [Instance.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.Instance.Builder)

The definition of a notebook instance.

Protobuf type `google.cloud.notebooks.v1beta1.Instance`

### [InstanceProto](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.InstanceProto)

### [IsInstanceUpgradeableRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.IsInstanceUpgradeableRequest)

Request for checking if a notebook instance is upgradeable.

Protobuf type `google.cloud.notebooks.v1beta1.IsInstanceUpgradeableRequest`

### [IsInstanceUpgradeableRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.IsInstanceUpgradeableRequest.Builder)

Request for checking if a notebook instance is upgradeable.

Protobuf type `google.cloud.notebooks.v1beta1.IsInstanceUpgradeableRequest`

### [IsInstanceUpgradeableResponse](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.IsInstanceUpgradeableResponse)

Response for checking if a notebook instance is upgradeable.

Protobuf type `google.cloud.notebooks.v1beta1.IsInstanceUpgradeableResponse`

### [IsInstanceUpgradeableResponse.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.IsInstanceUpgradeableResponse.Builder)

Response for checking if a notebook instance is upgradeable.

Protobuf type `google.cloud.notebooks.v1beta1.IsInstanceUpgradeableResponse`

### [ListEnvironmentsRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ListEnvironmentsRequest)

Request for listing environments.

Protobuf type `google.cloud.notebooks.v1beta1.ListEnvironmentsRequest`

### [ListEnvironmentsRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ListEnvironmentsRequest.Builder)

Request for listing environments.

Protobuf type `google.cloud.notebooks.v1beta1.ListEnvironmentsRequest`

### [ListEnvironmentsResponse](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ListEnvironmentsResponse)

Response for listing environments.

Protobuf type `google.cloud.notebooks.v1beta1.ListEnvironmentsResponse`

### [ListEnvironmentsResponse.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ListEnvironmentsResponse.Builder)

Response for listing environments.

Protobuf type `google.cloud.notebooks.v1beta1.ListEnvironmentsResponse`

### [ListInstancesRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ListInstancesRequest)

Request for listing notebook instances.

Protobuf type `google.cloud.notebooks.v1beta1.ListInstancesRequest`

### [ListInstancesRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ListInstancesRequest.Builder)

Request for listing notebook instances.

Protobuf type `google.cloud.notebooks.v1beta1.ListInstancesRequest`

### [ListInstancesResponse](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ListInstancesResponse)

Response for listing notebook instances.

Protobuf type `google.cloud.notebooks.v1beta1.ListInstancesResponse`

### [ListInstancesResponse.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ListInstancesResponse.Builder)

Response for listing notebook instances.

Protobuf type `google.cloud.notebooks.v1beta1.ListInstancesResponse`

### [NotebookServiceClient](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceClient)

Service Description: API v1beta1 service for Cloud AI Platform Notebooks.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (NotebookServiceClient notebookServiceClient = NotebookServiceClient.create()) {
   GetInstanceRequest request = GetInstanceRequest.newBuilder().setName("name3373707").build();
   Instance response = notebookServiceClient.getInstance(request);
 }
 
```
 

Note: close() needs to be called on the NotebookServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of NotebookServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 NotebookServiceSettings notebookServiceSettings =
     NotebookServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 NotebookServiceClient notebookServiceClient =
     NotebookServiceClient.create(notebookServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 NotebookServiceSettings notebookServiceSettings =
     NotebookServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 NotebookServiceClient notebookServiceClient =
     NotebookServiceClient.create(notebookServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

### [NotebookServiceClient.ListEnvironmentsFixedSizeCollection](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceClient.ListEnvironmentsFixedSizeCollection)

### [NotebookServiceClient.ListEnvironmentsPage](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceClient.ListEnvironmentsPage)

### [NotebookServiceClient.ListEnvironmentsPagedResponse](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceClient.ListEnvironmentsPagedResponse)

### [NotebookServiceClient.ListInstancesFixedSizeCollection](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceClient.ListInstancesFixedSizeCollection)

### [NotebookServiceClient.ListInstancesPage](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceClient.ListInstancesPage)

### [NotebookServiceClient.ListInstancesPagedResponse](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceClient.ListInstancesPagedResponse)

### [NotebookServiceClient.ListLocationsFixedSizeCollection](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceClient.ListLocationsFixedSizeCollection)

### [NotebookServiceClient.ListLocationsPage](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceClient.ListLocationsPage)

### [NotebookServiceClient.ListLocationsPagedResponse](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceClient.ListLocationsPagedResponse)

### [NotebookServiceGrpc](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceGrpc)

API v1beta1 service for Cloud AI Platform Notebooks.

### [NotebookServiceGrpc.NotebookServiceBlockingStub](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceGrpc.NotebookServiceBlockingStub)

API v1beta1 service for Cloud AI Platform Notebooks.

### [NotebookServiceGrpc.NotebookServiceFutureStub](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceGrpc.NotebookServiceFutureStub)

API v1beta1 service for Cloud AI Platform Notebooks.

### [NotebookServiceGrpc.NotebookServiceImplBase](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceGrpc.NotebookServiceImplBase)

API v1beta1 service for Cloud AI Platform Notebooks.

### [NotebookServiceGrpc.NotebookServiceStub](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceGrpc.NotebookServiceStub)

API v1beta1 service for Cloud AI Platform Notebooks.

### [NotebookServiceSettings](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceSettings)

Settings class to configure an instance of [NotebookServiceClient](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceClient).

The default instance has everything set to sensible defaults:

-   The default service address (notebooks.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getInstance to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 NotebookServiceSettings.Builder notebookServiceSettingsBuilder =
     NotebookServiceSettings.newBuilder();
 notebookServiceSettingsBuilder
     .getInstanceSettings()
     .setRetrySettings(
         notebookServiceSettingsBuilder
             .getInstanceSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 NotebookServiceSettings notebookServiceSettings = notebookServiceSettingsBuilder.build();
 
```
 

### [NotebookServiceSettings.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebookServiceSettings.Builder)

Builder for NotebookServiceSettings.

### [NotebooksProto](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.NotebooksProto)

### [OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.OperationMetadata)

Represents the metadata of the long-running operation.

Protobuf type `google.cloud.notebooks.v1beta1.OperationMetadata`

### [OperationMetadata.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.OperationMetadata.Builder)

Represents the metadata of the long-running operation.

Protobuf type `google.cloud.notebooks.v1beta1.OperationMetadata`

### [RegisterInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.RegisterInstanceRequest)

Request for registering a notebook instance.

Protobuf type `google.cloud.notebooks.v1beta1.RegisterInstanceRequest`

### [RegisterInstanceRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.RegisterInstanceRequest.Builder)

Request for registering a notebook instance.

Protobuf type `google.cloud.notebooks.v1beta1.RegisterInstanceRequest`

### [ReportInstanceInfoRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ReportInstanceInfoRequest)

Request for notebook instances to report information to Notebooks API.

Protobuf type `google.cloud.notebooks.v1beta1.ReportInstanceInfoRequest`

### [ReportInstanceInfoRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ReportInstanceInfoRequest.Builder)

Request for notebook instances to report information to Notebooks API.

Protobuf type `google.cloud.notebooks.v1beta1.ReportInstanceInfoRequest`

### [ReservationAffinity](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ReservationAffinity)

Reservation Affinity for consuming Zonal reservation.

Protobuf type `google.cloud.notebooks.v1beta1.ReservationAffinity`

### [ReservationAffinity.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ReservationAffinity.Builder)

Reservation Affinity for consuming Zonal reservation.

Protobuf type `google.cloud.notebooks.v1beta1.ReservationAffinity`

### [ResetInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ResetInstanceRequest)

Request for reseting a notebook instance

Protobuf type `google.cloud.notebooks.v1beta1.ResetInstanceRequest`

### [ResetInstanceRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ResetInstanceRequest.Builder)

Request for reseting a notebook instance

Protobuf type `google.cloud.notebooks.v1beta1.ResetInstanceRequest`

### [SetInstanceAcceleratorRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.SetInstanceAcceleratorRequest)

Request for setting instance accelerator.

Protobuf type `google.cloud.notebooks.v1beta1.SetInstanceAcceleratorRequest`

### [SetInstanceAcceleratorRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.SetInstanceAcceleratorRequest.Builder)

Request for setting instance accelerator.

Protobuf type `google.cloud.notebooks.v1beta1.SetInstanceAcceleratorRequest`

### [SetInstanceLabelsRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.SetInstanceLabelsRequest)

Request for setting instance labels.

Protobuf type `google.cloud.notebooks.v1beta1.SetInstanceLabelsRequest`

### [SetInstanceLabelsRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.SetInstanceLabelsRequest.Builder)

Request for setting instance labels.

Protobuf type `google.cloud.notebooks.v1beta1.SetInstanceLabelsRequest`

### [SetInstanceMachineTypeRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.SetInstanceMachineTypeRequest)

Request for setting instance machine type.

Protobuf type `google.cloud.notebooks.v1beta1.SetInstanceMachineTypeRequest`

### [SetInstanceMachineTypeRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.SetInstanceMachineTypeRequest.Builder)

Request for setting instance machine type.

Protobuf type `google.cloud.notebooks.v1beta1.SetInstanceMachineTypeRequest`

### [StartInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.StartInstanceRequest)

Request for starting a notebook instance

Protobuf type `google.cloud.notebooks.v1beta1.StartInstanceRequest`

### [StartInstanceRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.StartInstanceRequest.Builder)

Request for starting a notebook instance

Protobuf type `google.cloud.notebooks.v1beta1.StartInstanceRequest`

### [StopInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.StopInstanceRequest)

Request for stopping a notebook instance

Protobuf type `google.cloud.notebooks.v1beta1.StopInstanceRequest`

### [StopInstanceRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.StopInstanceRequest.Builder)

Request for stopping a notebook instance

Protobuf type `google.cloud.notebooks.v1beta1.StopInstanceRequest`

### [UpgradeInstanceInternalRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.UpgradeInstanceInternalRequest)

Request for upgrading a notebook instance from within the VM

Protobuf type `google.cloud.notebooks.v1beta1.UpgradeInstanceInternalRequest`

### [UpgradeInstanceInternalRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.UpgradeInstanceInternalRequest.Builder)

Request for upgrading a notebook instance from within the VM

Protobuf type `google.cloud.notebooks.v1beta1.UpgradeInstanceInternalRequest`

### [UpgradeInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.UpgradeInstanceRequest)

Request for upgrading a notebook instance

Protobuf type `google.cloud.notebooks.v1beta1.UpgradeInstanceRequest`

### [UpgradeInstanceRequest.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.UpgradeInstanceRequest.Builder)

Request for upgrading a notebook instance

Protobuf type `google.cloud.notebooks.v1beta1.UpgradeInstanceRequest`

### [VmImage](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.VmImage)

Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM.

Protobuf type `google.cloud.notebooks.v1beta1.VmImage`

### [VmImage.Builder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.VmImage.Builder)

Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM.

Protobuf type `google.cloud.notebooks.v1beta1.VmImage`

## Interfaces

### [ContainerImageOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ContainerImageOrBuilder)

### [CreateEnvironmentRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.CreateEnvironmentRequestOrBuilder)

### [CreateInstanceRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.CreateInstanceRequestOrBuilder)

### [DeleteEnvironmentRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.DeleteEnvironmentRequestOrBuilder)

### [DeleteInstanceRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.DeleteInstanceRequestOrBuilder)

### [EnvironmentOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.EnvironmentOrBuilder)

### [GetEnvironmentRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.GetEnvironmentRequestOrBuilder)

### [GetInstanceRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.GetInstanceRequestOrBuilder)

### [Instance.AcceleratorConfigOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.Instance.AcceleratorConfigOrBuilder)

### [InstanceOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.InstanceOrBuilder)

### [IsInstanceUpgradeableRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.IsInstanceUpgradeableRequestOrBuilder)

### [IsInstanceUpgradeableResponseOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.IsInstanceUpgradeableResponseOrBuilder)

### [ListEnvironmentsRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ListEnvironmentsRequestOrBuilder)

### [ListEnvironmentsResponseOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ListEnvironmentsResponseOrBuilder)

### [ListInstancesRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ListInstancesRequestOrBuilder)

### [ListInstancesResponseOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ListInstancesResponseOrBuilder)

### [OperationMetadataOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.OperationMetadataOrBuilder)

### [RegisterInstanceRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.RegisterInstanceRequestOrBuilder)

### [ReportInstanceInfoRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ReportInstanceInfoRequestOrBuilder)

### [ReservationAffinityOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ReservationAffinityOrBuilder)

### [ResetInstanceRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ResetInstanceRequestOrBuilder)

### [SetInstanceAcceleratorRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.SetInstanceAcceleratorRequestOrBuilder)

### [SetInstanceLabelsRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.SetInstanceLabelsRequestOrBuilder)

### [SetInstanceMachineTypeRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.SetInstanceMachineTypeRequestOrBuilder)

### [StartInstanceRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.StartInstanceRequestOrBuilder)

### [StopInstanceRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.StopInstanceRequestOrBuilder)

### [UpgradeInstanceInternalRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.UpgradeInstanceInternalRequestOrBuilder)

### [UpgradeInstanceRequestOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.UpgradeInstanceRequestOrBuilder)

### [VmImageOrBuilder](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.VmImageOrBuilder)

## Enums

### [Environment.ImageTypeCase](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.Environment.ImageTypeCase)

### [Instance.AcceleratorType](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.Instance.AcceleratorType)

Definition of the types of hardware accelerators that can be used on this instance.

Protobuf enum `google.cloud.notebooks.v1beta1.Instance.AcceleratorType`

### [Instance.DiskEncryption](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.Instance.DiskEncryption)

Definition of the disk encryption options.

Protobuf enum `google.cloud.notebooks.v1beta1.Instance.DiskEncryption`

### [Instance.DiskType](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.Instance.DiskType)

Possible disk types for notebook instances.

Protobuf enum `google.cloud.notebooks.v1beta1.Instance.DiskType`

### [Instance.EnvironmentCase](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.Instance.EnvironmentCase)

### [Instance.NicType](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.Instance.NicType)

The type of vNIC driver.

Protobuf enum `google.cloud.notebooks.v1beta1.Instance.NicType`

### [Instance.State](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.Instance.State)

The definition of the states of this instance.

Protobuf enum `google.cloud.notebooks.v1beta1.Instance.State`

### [ReservationAffinity.Type](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.ReservationAffinity.Type)

Indicates whether to consume capacity from an reservation or not.

Protobuf enum `google.cloud.notebooks.v1beta1.ReservationAffinity.Type`

### [VmImage.ImageCase](/java/docs/reference/google-cloud-notebooks/1.6.0/com.google.cloud.notebooks.v1beta1.VmImage.ImageCase)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
