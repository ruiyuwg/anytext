-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.storagetransfer.v1.proto (1.14.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.0.4

A client to Storage Transfer API

The interfaces provided are listed below, along with usage samples.

## StorageTransferServiceClient

Service Description: Storage Transfer Service and its protos. Transfers data between between Google Cloud Storage buckets or from a data source external to Google to a Cloud Storage bucket.

Sample for StorageTransferServiceClient:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageTransferServiceClient storageTransferServiceClient =
     StorageTransferServiceClient.create()) {
   TransferProto.GetGoogleServiceAccountRequest request =
       TransferProto.GetGoogleServiceAccountRequest.newBuilder()
           .setProjectId("projectId-894832108")
           .build();
   TransferTypes.GoogleServiceAccount response =
       storageTransferServiceClient.getGoogleServiceAccount(request);
 }
 
```
 

## Classes

### [StorageTransferServiceClient](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.StorageTransferServiceClient)

Service Description: Storage Transfer Service and its protos. Transfers data between between Google Cloud Storage buckets or from a data source external to Google to a Cloud Storage bucket.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (StorageTransferServiceClient storageTransferServiceClient =
     StorageTransferServiceClient.create()) {
   TransferProto.GetGoogleServiceAccountRequest request =
       TransferProto.GetGoogleServiceAccountRequest.newBuilder()
           .setProjectId("projectId-894832108")
           .build();
   TransferTypes.GoogleServiceAccount response =
       storageTransferServiceClient.getGoogleServiceAccount(request);
 }
 
```
 

Note: close() needs to be called on the StorageTransferServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of StorageTransferServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 StorageTransferServiceSettings storageTransferServiceSettings =
     StorageTransferServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 StorageTransferServiceClient storageTransferServiceClient =
     StorageTransferServiceClient.create(storageTransferServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 StorageTransferServiceSettings storageTransferServiceSettings =
     StorageTransferServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 StorageTransferServiceClient storageTransferServiceClient =
     StorageTransferServiceClient.create(storageTransferServiceSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 StorageTransferServiceSettings storageTransferServiceSettings =
     StorageTransferServiceSettings.newHttpJsonBuilder().build();
 StorageTransferServiceClient storageTransferServiceClient =
     StorageTransferServiceClient.create(storageTransferServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

### [StorageTransferServiceClient.ListAgentPoolsFixedSizeCollection](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.StorageTransferServiceClient.ListAgentPoolsFixedSizeCollection)

### [StorageTransferServiceClient.ListAgentPoolsPage](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.StorageTransferServiceClient.ListAgentPoolsPage)

### [StorageTransferServiceClient.ListAgentPoolsPagedResponse](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.StorageTransferServiceClient.ListAgentPoolsPagedResponse)

### [StorageTransferServiceClient.ListTransferJobsFixedSizeCollection](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.StorageTransferServiceClient.ListTransferJobsFixedSizeCollection)

### [StorageTransferServiceClient.ListTransferJobsPage](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.StorageTransferServiceClient.ListTransferJobsPage)

### [StorageTransferServiceClient.ListTransferJobsPagedResponse](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.StorageTransferServiceClient.ListTransferJobsPagedResponse)

### [StorageTransferServiceGrpc](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.StorageTransferServiceGrpc)

Storage Transfer Service and its protos. Transfers data between between Google Cloud Storage buckets or from a data source external to Google to a Cloud Storage bucket.

### [StorageTransferServiceGrpc.StorageTransferServiceBlockingStub](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.StorageTransferServiceGrpc.StorageTransferServiceBlockingStub)

A stub to allow clients to do synchronous rpc calls to service StorageTransferService.

Storage Transfer Service and its protos. Transfers data between between Google Cloud Storage buckets or from a data source external to Google to a Cloud Storage bucket.

### [StorageTransferServiceGrpc.StorageTransferServiceFutureStub](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.StorageTransferServiceGrpc.StorageTransferServiceFutureStub)

A stub to allow clients to do ListenableFuture-style rpc calls to service StorageTransferService.

Storage Transfer Service and its protos. Transfers data between between Google Cloud Storage buckets or from a data source external to Google to a Cloud Storage bucket.

### [StorageTransferServiceGrpc.StorageTransferServiceImplBase](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.StorageTransferServiceGrpc.StorageTransferServiceImplBase)

Base class for the server implementation of the service StorageTransferService.

Storage Transfer Service and its protos. Transfers data between between Google Cloud Storage buckets or from a data source external to Google to a Cloud Storage bucket.

### [StorageTransferServiceGrpc.StorageTransferServiceStub](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.StorageTransferServiceGrpc.StorageTransferServiceStub)

A stub to allow clients to do asynchronous rpc calls to service StorageTransferService.

Storage Transfer Service and its protos. Transfers data between between Google Cloud Storage buckets or from a data source external to Google to a Cloud Storage bucket.

### [StorageTransferServiceSettings](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.StorageTransferServiceSettings)

Settings class to configure an instance of [StorageTransferServiceClient](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.StorageTransferServiceClient).

The default instance has everything set to sensible defaults:

-   The default service address (storagetransfer.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getGoogleServiceAccount to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 StorageTransferServiceSettings.Builder storageTransferServiceSettingsBuilder =
     StorageTransferServiceSettings.newBuilder();
 storageTransferServiceSettingsBuilder
     .getGoogleServiceAccountSettings()
     .setRetrySettings(
         storageTransferServiceSettingsBuilder
             .getGoogleServiceAccountSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 StorageTransferServiceSettings storageTransferServiceSettings =
     storageTransferServiceSettingsBuilder.build();
 
```
 

### [StorageTransferServiceSettings.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.StorageTransferServiceSettings.Builder)

Builder for StorageTransferServiceSettings.

### [TransferProto](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto)

### [TransferProto.CreateAgentPoolRequest](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.CreateAgentPoolRequest)

Specifies the request passed to CreateAgentPool.

Protobuf type `google.storagetransfer.v1.CreateAgentPoolRequest`

### [TransferProto.CreateAgentPoolRequest.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.CreateAgentPoolRequest.Builder)

Specifies the request passed to CreateAgentPool.

Protobuf type `google.storagetransfer.v1.CreateAgentPoolRequest`

### [TransferProto.CreateTransferJobRequest](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.CreateTransferJobRequest)

Request passed to CreateTransferJob.

Protobuf type `google.storagetransfer.v1.CreateTransferJobRequest`

### [TransferProto.CreateTransferJobRequest.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.CreateTransferJobRequest.Builder)

Request passed to CreateTransferJob.

Protobuf type `google.storagetransfer.v1.CreateTransferJobRequest`

### [TransferProto.DeleteAgentPoolRequest](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.DeleteAgentPoolRequest)

Specifies the request passed to DeleteAgentPool.

Protobuf type `google.storagetransfer.v1.DeleteAgentPoolRequest`

### [TransferProto.DeleteAgentPoolRequest.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.DeleteAgentPoolRequest.Builder)

Specifies the request passed to DeleteAgentPool.

Protobuf type `google.storagetransfer.v1.DeleteAgentPoolRequest`

### [TransferProto.DeleteTransferJobRequest](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.DeleteTransferJobRequest)

Request passed to DeleteTransferJob.

Protobuf type `google.storagetransfer.v1.DeleteTransferJobRequest`

### [TransferProto.DeleteTransferJobRequest.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.DeleteTransferJobRequest.Builder)

Request passed to DeleteTransferJob.

Protobuf type `google.storagetransfer.v1.DeleteTransferJobRequest`

### [TransferProto.GetAgentPoolRequest](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.GetAgentPoolRequest)

Specifies the request passed to GetAgentPool.

Protobuf type `google.storagetransfer.v1.GetAgentPoolRequest`

### [TransferProto.GetAgentPoolRequest.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.GetAgentPoolRequest.Builder)

Specifies the request passed to GetAgentPool.

Protobuf type `google.storagetransfer.v1.GetAgentPoolRequest`

### [TransferProto.GetGoogleServiceAccountRequest](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.GetGoogleServiceAccountRequest)

Request passed to GetGoogleServiceAccount.

Protobuf type `google.storagetransfer.v1.GetGoogleServiceAccountRequest`

### [TransferProto.GetGoogleServiceAccountRequest.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.GetGoogleServiceAccountRequest.Builder)

Request passed to GetGoogleServiceAccount.

Protobuf type `google.storagetransfer.v1.GetGoogleServiceAccountRequest`

### [TransferProto.GetTransferJobRequest](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.GetTransferJobRequest)

Request passed to GetTransferJob.

Protobuf type `google.storagetransfer.v1.GetTransferJobRequest`

### [TransferProto.GetTransferJobRequest.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.GetTransferJobRequest.Builder)

Request passed to GetTransferJob.

Protobuf type `google.storagetransfer.v1.GetTransferJobRequest`

### [TransferProto.ListAgentPoolsRequest](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.ListAgentPoolsRequest)

The request passed to ListAgentPools.

Protobuf type `google.storagetransfer.v1.ListAgentPoolsRequest`

### [TransferProto.ListAgentPoolsRequest.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.ListAgentPoolsRequest.Builder)

The request passed to ListAgentPools.

Protobuf type `google.storagetransfer.v1.ListAgentPoolsRequest`

### [TransferProto.ListAgentPoolsResponse](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.ListAgentPoolsResponse)

Response from ListAgentPools.

Protobuf type `google.storagetransfer.v1.ListAgentPoolsResponse`

### [TransferProto.ListAgentPoolsResponse.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.ListAgentPoolsResponse.Builder)

Response from ListAgentPools.

Protobuf type `google.storagetransfer.v1.ListAgentPoolsResponse`

### [TransferProto.ListTransferJobsRequest](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.ListTransferJobsRequest)

`projectId`, `jobNames`, and `jobStatuses` are query parameters that can be specified when listing transfer jobs.

Protobuf type `google.storagetransfer.v1.ListTransferJobsRequest`

### [TransferProto.ListTransferJobsRequest.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.ListTransferJobsRequest.Builder)

`projectId`, `jobNames`, and `jobStatuses` are query parameters that can be specified when listing transfer jobs.

Protobuf type `google.storagetransfer.v1.ListTransferJobsRequest`

### [TransferProto.ListTransferJobsResponse](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.ListTransferJobsResponse)

Response from ListTransferJobs.

Protobuf type `google.storagetransfer.v1.ListTransferJobsResponse`

### [TransferProto.ListTransferJobsResponse.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.ListTransferJobsResponse.Builder)

Response from ListTransferJobs.

Protobuf type `google.storagetransfer.v1.ListTransferJobsResponse`

### [TransferProto.PauseTransferOperationRequest](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.PauseTransferOperationRequest)

Request passed to PauseTransferOperation.

Protobuf type `google.storagetransfer.v1.PauseTransferOperationRequest`

### [TransferProto.PauseTransferOperationRequest.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.PauseTransferOperationRequest.Builder)

Request passed to PauseTransferOperation.

Protobuf type `google.storagetransfer.v1.PauseTransferOperationRequest`

### [TransferProto.ResumeTransferOperationRequest](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.ResumeTransferOperationRequest)

Request passed to ResumeTransferOperation.

Protobuf type `google.storagetransfer.v1.ResumeTransferOperationRequest`

### [TransferProto.ResumeTransferOperationRequest.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.ResumeTransferOperationRequest.Builder)

Request passed to ResumeTransferOperation.

Protobuf type `google.storagetransfer.v1.ResumeTransferOperationRequest`

### [TransferProto.RunTransferJobRequest](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.RunTransferJobRequest)

Request passed to RunTransferJob.

Protobuf type `google.storagetransfer.v1.RunTransferJobRequest`

### [TransferProto.RunTransferJobRequest.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.RunTransferJobRequest.Builder)

Request passed to RunTransferJob.

Protobuf type `google.storagetransfer.v1.RunTransferJobRequest`

### [TransferProto.UpdateAgentPoolRequest](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.UpdateAgentPoolRequest)

Specifies the request passed to UpdateAgentPool.

Protobuf type `google.storagetransfer.v1.UpdateAgentPoolRequest`

### [TransferProto.UpdateAgentPoolRequest.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.UpdateAgentPoolRequest.Builder)

Specifies the request passed to UpdateAgentPool.

Protobuf type `google.storagetransfer.v1.UpdateAgentPoolRequest`

### [TransferProto.UpdateTransferJobRequest](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.UpdateTransferJobRequest)

Request passed to UpdateTransferJob.

Protobuf type `google.storagetransfer.v1.UpdateTransferJobRequest`

### [TransferProto.UpdateTransferJobRequest.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.UpdateTransferJobRequest.Builder)

Request passed to UpdateTransferJob.

Protobuf type `google.storagetransfer.v1.UpdateTransferJobRequest`

### [TransferTypes](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes)

### [TransferTypes.AgentPool](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AgentPool)

Represents an On-Premises Agent pool.

Protobuf type `google.storagetransfer.v1.AgentPool`

### [TransferTypes.AgentPool.BandwidthLimit](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AgentPool.BandwidthLimit)

Specifies a bandwidth limit for an agent pool.

Protobuf type `google.storagetransfer.v1.AgentPool.BandwidthLimit`

### [TransferTypes.AgentPool.BandwidthLimit.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AgentPool.BandwidthLimit.Builder)

Specifies a bandwidth limit for an agent pool.

Protobuf type `google.storagetransfer.v1.AgentPool.BandwidthLimit`

### [TransferTypes.AgentPool.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AgentPool.Builder)

Represents an On-Premises Agent pool.

Protobuf type `google.storagetransfer.v1.AgentPool`

### [TransferTypes.AwsAccessKey](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AwsAccessKey)

AWS access key (see [AWS Security Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)). For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).

Protobuf type `google.storagetransfer.v1.AwsAccessKey`

### [TransferTypes.AwsAccessKey.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AwsAccessKey.Builder)

AWS access key (see [AWS Security Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)). For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).

Protobuf type `google.storagetransfer.v1.AwsAccessKey`

### [TransferTypes.AwsS3CompatibleData](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AwsS3CompatibleData)

An AwsS3CompatibleData resource.

Protobuf type `google.storagetransfer.v1.AwsS3CompatibleData`

### [TransferTypes.AwsS3CompatibleData.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AwsS3CompatibleData.Builder)

An AwsS3CompatibleData resource.

Protobuf type `google.storagetransfer.v1.AwsS3CompatibleData`

### [TransferTypes.AwsS3Data](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AwsS3Data)

An AwsS3Data resource can be a data source, but not a data sink. In an AwsS3Data resource, an object's name is the S3 object's key name.

Protobuf type `google.storagetransfer.v1.AwsS3Data`

### [TransferTypes.AwsS3Data.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AwsS3Data.Builder)

An AwsS3Data resource can be a data source, but not a data sink. In an AwsS3Data resource, an object's name is the S3 object's key name.

Protobuf type `google.storagetransfer.v1.AwsS3Data`

### [TransferTypes.AzureBlobStorageData](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AzureBlobStorageData)

An AzureBlobStorageData resource can be a data source, but not a data sink. An AzureBlobStorageData resource represents one Azure container. The storage account determines the [Azure endpoint](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints). In an AzureBlobStorageData resource, a blobs's name is the [Azure Blob Storage blob's key name](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names).

Protobuf type `google.storagetransfer.v1.AzureBlobStorageData`

### [TransferTypes.AzureBlobStorageData.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AzureBlobStorageData.Builder)

An AzureBlobStorageData resource can be a data source, but not a data sink. An AzureBlobStorageData resource represents one Azure container. The storage account determines the [Azure endpoint](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints). In an AzureBlobStorageData resource, a blobs's name is the [Azure Blob Storage blob's key name](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names).

Protobuf type `google.storagetransfer.v1.AzureBlobStorageData`

### [TransferTypes.AzureCredentials](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AzureCredentials)

Azure credentials For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).

Protobuf type `google.storagetransfer.v1.AzureCredentials`

### [TransferTypes.AzureCredentials.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AzureCredentials.Builder)

Azure credentials For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).

Protobuf type `google.storagetransfer.v1.AzureCredentials`

### [TransferTypes.ErrorLogEntry](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.ErrorLogEntry)

An entry describing an error that has occurred.

Protobuf type `google.storagetransfer.v1.ErrorLogEntry`

### [TransferTypes.ErrorLogEntry.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.ErrorLogEntry.Builder)

An entry describing an error that has occurred.

Protobuf type `google.storagetransfer.v1.ErrorLogEntry`

### [TransferTypes.ErrorSummary](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.ErrorSummary)

A summary of errors by error code, plus a count and sample error log entries.

Protobuf type `google.storagetransfer.v1.ErrorSummary`

### [TransferTypes.ErrorSummary.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.ErrorSummary.Builder)

A summary of errors by error code, plus a count and sample error log entries.

Protobuf type `google.storagetransfer.v1.ErrorSummary`

### [TransferTypes.GcsData](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.GcsData)

In a GcsData resource, an object's name is the Cloud Storage object's name and its "last modification time" refers to the object's `updated` property of Cloud Storage objects, which changes when the content or the metadata of the object is updated.

Protobuf type `google.storagetransfer.v1.GcsData`

### [TransferTypes.GcsData.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.GcsData.Builder)

In a GcsData resource, an object's name is the Cloud Storage object's name and its "last modification time" refers to the object's `updated` property of Cloud Storage objects, which changes when the content or the metadata of the object is updated.

Protobuf type `google.storagetransfer.v1.GcsData`

### [TransferTypes.GoogleServiceAccount](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.GoogleServiceAccount)

Google service account

Protobuf type `google.storagetransfer.v1.GoogleServiceAccount`

### [TransferTypes.GoogleServiceAccount.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.GoogleServiceAccount.Builder)

Google service account

Protobuf type `google.storagetransfer.v1.GoogleServiceAccount`

### [TransferTypes.HttpData](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.HttpData)

An HttpData resource specifies a list of objects on the web to be transferred over HTTP. The information of the objects to be transferred is contained in a file referenced by a URL. The first line in the file must be `"TsvHttpData-1.0"`, which specifies the format of the file. Subsequent lines specify the information of the list of objects, one object per list entry. Each entry has the following tab-delimited fields:

-   **HTTP URL** — The location of the object.
-   **Length** — The size of the object in bytes.
-   **MD5** — The base64-encoded MD5 hash of the object. For an example of a valid TSV file, see [Transferring data from URLs](https://cloud.google.com/storage-transfer/docs/create-url-list). When transferring data based on a URL list, keep the following in mind:
-   When an object located at `http(s)://hostname:port/<URL-path>` is transferred to a data sink, the name of the object at the data sink is `<hostname>/<URL-path>`.
-   If the specified size of an object does not match the actual size of the object fetched, the object is not transferred.
-   If the specified MD5 does not match the MD5 computed from the transferred bytes, the object transfer fails.
-   Ensure that each URL you specify is publicly accessible. For example, in Cloud Storage you can [share an object publicly](/storage/docs/cloud-console#_sharingdata) and get a link to it.
-   Storage Transfer Service obeys `robots.txt` rules and requires the source HTTP server to support `Range` requests and to return a `Content-Length` header in each response.
-   ObjectConditions have no effect when filtering objects to transfer.

Protobuf type `google.storagetransfer.v1.HttpData`

### [TransferTypes.HttpData.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.HttpData.Builder)

An HttpData resource specifies a list of objects on the web to be transferred over HTTP. The information of the objects to be transferred is contained in a file referenced by a URL. The first line in the file must be `"TsvHttpData-1.0"`, which specifies the format of the file. Subsequent lines specify the information of the list of objects, one object per list entry. Each entry has the following tab-delimited fields:

-   **HTTP URL** — The location of the object.
-   **Length** — The size of the object in bytes.
-   **MD5** — The base64-encoded MD5 hash of the object. For an example of a valid TSV file, see [Transferring data from URLs](https://cloud.google.com/storage-transfer/docs/create-url-list). When transferring data based on a URL list, keep the following in mind:
-   When an object located at `http(s)://hostname:port/<URL-path>` is transferred to a data sink, the name of the object at the data sink is `<hostname>/<URL-path>`.
-   If the specified size of an object does not match the actual size of the object fetched, the object is not transferred.
-   If the specified MD5 does not match the MD5 computed from the transferred bytes, the object transfer fails.
-   Ensure that each URL you specify is publicly accessible. For example, in Cloud Storage you can [share an object publicly](/storage/docs/cloud-console#_sharingdata) and get a link to it.
-   Storage Transfer Service obeys `robots.txt` rules and requires the source HTTP server to support `Range` requests and to return a `Content-Length` header in each response.
-   ObjectConditions have no effect when filtering objects to transfer.

Protobuf type `google.storagetransfer.v1.HttpData`

### [TransferTypes.LoggingConfig](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.LoggingConfig)

Specifies the logging behavior for transfer operations. For cloud-to-cloud transfers, logs are sent to Cloud Logging. See [Read transfer logs](https://cloud.google.com/storage-transfer/docs/read-transfer-logs) for details. For transfers to or from a POSIX file system, logs are stored in the Cloud Storage bucket that is the source or sink of the transfer. See [Managing Transfer for on-premises jobs](https://cloud.google.com/storage-transfer/docs/managing-on-prem-jobs#viewing-logs) for details.

Protobuf type `google.storagetransfer.v1.LoggingConfig`

### [TransferTypes.LoggingConfig.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.LoggingConfig.Builder)

Specifies the logging behavior for transfer operations. For cloud-to-cloud transfers, logs are sent to Cloud Logging. See [Read transfer logs](https://cloud.google.com/storage-transfer/docs/read-transfer-logs) for details. For transfers to or from a POSIX file system, logs are stored in the Cloud Storage bucket that is the source or sink of the transfer. See [Managing Transfer for on-premises jobs](https://cloud.google.com/storage-transfer/docs/managing-on-prem-jobs#viewing-logs) for details.

Protobuf type `google.storagetransfer.v1.LoggingConfig`

### [TransferTypes.MetadataOptions](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.MetadataOptions)

Specifies the metadata options for running a transfer.

Protobuf type `google.storagetransfer.v1.MetadataOptions`

### [TransferTypes.MetadataOptions.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.MetadataOptions.Builder)

Specifies the metadata options for running a transfer.

Protobuf type `google.storagetransfer.v1.MetadataOptions`

### [TransferTypes.NotificationConfig](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.NotificationConfig)

Specification to configure notifications published to Pub/Sub. Notifications are published to the customer-provided topic using the following `PubsubMessage.attributes`:

-   `"eventType"`: one of the EventType values
-   `"payloadFormat"`: one of the PayloadFormat values
-   `"projectId"`: the project\_id of the `TransferOperation`
-   `"transferJobName"`: the transfer\_job\_name of the `TransferOperation`
-   `"transferOperationName"`: the name of the `TransferOperation` The `PubsubMessage.data` contains a TransferOperation resource formatted according to the specified `PayloadFormat`.

Protobuf type `google.storagetransfer.v1.NotificationConfig`

### [TransferTypes.NotificationConfig.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.NotificationConfig.Builder)

Specification to configure notifications published to Pub/Sub. Notifications are published to the customer-provided topic using the following `PubsubMessage.attributes`:

-   `"eventType"`: one of the EventType values
-   `"payloadFormat"`: one of the PayloadFormat values
-   `"projectId"`: the project\_id of the `TransferOperation`
-   `"transferJobName"`: the transfer\_job\_name of the `TransferOperation`
-   `"transferOperationName"`: the name of the `TransferOperation` The `PubsubMessage.data` contains a TransferOperation resource formatted according to the specified `PayloadFormat`.

Protobuf type `google.storagetransfer.v1.NotificationConfig`

### [TransferTypes.ObjectConditions](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.ObjectConditions)

Conditions that determine which objects are transferred. Applies only to Cloud Data Sources such as S3, Azure, and Cloud Storage. The "last modification time" refers to the time of the last change to the object's content or metadata — specifically, this is the `updated` property of Cloud Storage objects, the `LastModified` field of S3 objects, and the `Last-Modified` header of Azure blobs. Transfers with a PosixFilesystem source or destination don't support `ObjectConditions`.

Protobuf type `google.storagetransfer.v1.ObjectConditions`

### [TransferTypes.ObjectConditions.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.ObjectConditions.Builder)

Conditions that determine which objects are transferred. Applies only to Cloud Data Sources such as S3, Azure, and Cloud Storage. The "last modification time" refers to the time of the last change to the object's content or metadata — specifically, this is the `updated` property of Cloud Storage objects, the `LastModified` field of S3 objects, and the `Last-Modified` header of Azure blobs. Transfers with a PosixFilesystem source or destination don't support `ObjectConditions`.

Protobuf type `google.storagetransfer.v1.ObjectConditions`

### [TransferTypes.PosixFilesystem](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.PosixFilesystem)

A POSIX filesystem resource.

Protobuf type `google.storagetransfer.v1.PosixFilesystem`

### [TransferTypes.PosixFilesystem.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.PosixFilesystem.Builder)

A POSIX filesystem resource.

Protobuf type `google.storagetransfer.v1.PosixFilesystem`

### [TransferTypes.S3CompatibleMetadata](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.S3CompatibleMetadata)

S3CompatibleMetadata contains the metadata fields that apply to the basic types of S3-compatible data providers.

Protobuf type `google.storagetransfer.v1.S3CompatibleMetadata`

### [TransferTypes.S3CompatibleMetadata.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.S3CompatibleMetadata.Builder)

S3CompatibleMetadata contains the metadata fields that apply to the basic types of S3-compatible data providers.

Protobuf type `google.storagetransfer.v1.S3CompatibleMetadata`

### [TransferTypes.Schedule](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.Schedule)

Transfers can be scheduled to recur or to run just once.

Protobuf type `google.storagetransfer.v1.Schedule`

### [TransferTypes.Schedule.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.Schedule.Builder)

Transfers can be scheduled to recur or to run just once.

Protobuf type `google.storagetransfer.v1.Schedule`

### [TransferTypes.TransferCounters](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferCounters)

A collection of counters that report the progress of a transfer operation.

Protobuf type `google.storagetransfer.v1.TransferCounters`

### [TransferTypes.TransferCounters.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferCounters.Builder)

A collection of counters that report the progress of a transfer operation.

Protobuf type `google.storagetransfer.v1.TransferCounters`

### [TransferTypes.TransferJob](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferJob)

This resource represents the configuration of a transfer job that runs periodically.

Protobuf type `google.storagetransfer.v1.TransferJob`

### [TransferTypes.TransferJob.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferJob.Builder)

This resource represents the configuration of a transfer job that runs periodically.

Protobuf type `google.storagetransfer.v1.TransferJob`

### [TransferTypes.TransferManifest](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferManifest)

Specifies where the manifest is located.

Protobuf type `google.storagetransfer.v1.TransferManifest`

### [TransferTypes.TransferManifest.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferManifest.Builder)

Specifies where the manifest is located.

Protobuf type `google.storagetransfer.v1.TransferManifest`

### [TransferTypes.TransferOperation](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferOperation)

A description of the execution of a transfer.

Protobuf type `google.storagetransfer.v1.TransferOperation`

### [TransferTypes.TransferOperation.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferOperation.Builder)

A description of the execution of a transfer.

Protobuf type `google.storagetransfer.v1.TransferOperation`

### [TransferTypes.TransferOptions](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferOptions)

TransferOptions define the actions to be performed on objects in a transfer.

Protobuf type `google.storagetransfer.v1.TransferOptions`

### [TransferTypes.TransferOptions.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferOptions.Builder)

TransferOptions define the actions to be performed on objects in a transfer.

Protobuf type `google.storagetransfer.v1.TransferOptions`

### [TransferTypes.TransferSpec](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferSpec)

Configuration for running a transfer.

Protobuf type `google.storagetransfer.v1.TransferSpec`

### [TransferTypes.TransferSpec.Builder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferSpec.Builder)

Configuration for running a transfer.

Protobuf type `google.storagetransfer.v1.TransferSpec`

## Interfaces

### [StorageTransferServiceGrpc.AsyncService](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.StorageTransferServiceGrpc.AsyncService)

Storage Transfer Service and its protos. Transfers data between between Google Cloud Storage buckets or from a data source external to Google to a Cloud Storage bucket.

### [TransferProto.CreateAgentPoolRequestOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.CreateAgentPoolRequestOrBuilder)

### [TransferProto.CreateTransferJobRequestOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.CreateTransferJobRequestOrBuilder)

### [TransferProto.DeleteAgentPoolRequestOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.DeleteAgentPoolRequestOrBuilder)

### [TransferProto.DeleteTransferJobRequestOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.DeleteTransferJobRequestOrBuilder)

### [TransferProto.GetAgentPoolRequestOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.GetAgentPoolRequestOrBuilder)

### [TransferProto.GetGoogleServiceAccountRequestOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.GetGoogleServiceAccountRequestOrBuilder)

### [TransferProto.GetTransferJobRequestOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.GetTransferJobRequestOrBuilder)

### [TransferProto.ListAgentPoolsRequestOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.ListAgentPoolsRequestOrBuilder)

### [TransferProto.ListAgentPoolsResponseOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.ListAgentPoolsResponseOrBuilder)

### [TransferProto.ListTransferJobsRequestOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.ListTransferJobsRequestOrBuilder)

### [TransferProto.ListTransferJobsResponseOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.ListTransferJobsResponseOrBuilder)

### [TransferProto.PauseTransferOperationRequestOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.PauseTransferOperationRequestOrBuilder)

### [TransferProto.ResumeTransferOperationRequestOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.ResumeTransferOperationRequestOrBuilder)

### [TransferProto.RunTransferJobRequestOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.RunTransferJobRequestOrBuilder)

### [TransferProto.UpdateAgentPoolRequestOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.UpdateAgentPoolRequestOrBuilder)

### [TransferProto.UpdateTransferJobRequestOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferProto.UpdateTransferJobRequestOrBuilder)

### [TransferTypes.AgentPool.BandwidthLimitOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AgentPool.BandwidthLimitOrBuilder)

### [TransferTypes.AgentPoolOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AgentPoolOrBuilder)

### [TransferTypes.AwsAccessKeyOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AwsAccessKeyOrBuilder)

### [TransferTypes.AwsS3CompatibleDataOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AwsS3CompatibleDataOrBuilder)

### [TransferTypes.AwsS3DataOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AwsS3DataOrBuilder)

### [TransferTypes.AzureBlobStorageDataOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AzureBlobStorageDataOrBuilder)

### [TransferTypes.AzureCredentialsOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AzureCredentialsOrBuilder)

### [TransferTypes.ErrorLogEntryOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.ErrorLogEntryOrBuilder)

### [TransferTypes.ErrorSummaryOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.ErrorSummaryOrBuilder)

### [TransferTypes.GcsDataOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.GcsDataOrBuilder)

### [TransferTypes.GoogleServiceAccountOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.GoogleServiceAccountOrBuilder)

### [TransferTypes.HttpDataOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.HttpDataOrBuilder)

### [TransferTypes.LoggingConfigOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.LoggingConfigOrBuilder)

### [TransferTypes.MetadataOptionsOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.MetadataOptionsOrBuilder)

### [TransferTypes.NotificationConfigOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.NotificationConfigOrBuilder)

### [TransferTypes.ObjectConditionsOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.ObjectConditionsOrBuilder)

### [TransferTypes.PosixFilesystemOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.PosixFilesystemOrBuilder)

### [TransferTypes.S3CompatibleMetadataOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.S3CompatibleMetadataOrBuilder)

### [TransferTypes.ScheduleOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.ScheduleOrBuilder)

### [TransferTypes.TransferCountersOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferCountersOrBuilder)

### [TransferTypes.TransferJobOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferJobOrBuilder)

### [TransferTypes.TransferManifestOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferManifestOrBuilder)

### [TransferTypes.TransferOperationOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferOperationOrBuilder)

### [TransferTypes.TransferOptionsOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferOptionsOrBuilder)

### [TransferTypes.TransferSpecOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferSpecOrBuilder)

## Enums

### [TransferTypes.AgentPool.State](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AgentPool.State)

The state of an AgentPool.

Protobuf enum `google.storagetransfer.v1.AgentPool.State`

### [TransferTypes.AwsS3CompatibleData.DataProviderCase](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.AwsS3CompatibleData.DataProviderCase)

### [TransferTypes.LoggingConfig.LoggableAction](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.LoggingConfig.LoggableAction)

Loggable actions.

Protobuf enum `google.storagetransfer.v1.LoggingConfig.LoggableAction`

### [TransferTypes.LoggingConfig.LoggableActionState](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.LoggingConfig.LoggableActionState)

Loggable action states.

Protobuf enum `google.storagetransfer.v1.LoggingConfig.LoggableActionState`

### [TransferTypes.MetadataOptions.Acl](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.MetadataOptions.Acl)

Options for handling Cloud Storage object ACLs.

Protobuf enum `google.storagetransfer.v1.MetadataOptions.Acl`

### [TransferTypes.MetadataOptions.GID](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.MetadataOptions.GID)

Options for handling file GID attribute.

Protobuf enum `google.storagetransfer.v1.MetadataOptions.GID`

### [TransferTypes.MetadataOptions.KmsKey](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.MetadataOptions.KmsKey)

Options for handling the KmsKey setting for Google Cloud Storage objects.

Protobuf enum `google.storagetransfer.v1.MetadataOptions.KmsKey`

### [TransferTypes.MetadataOptions.Mode](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.MetadataOptions.Mode)

Options for handling file mode attribute.

Protobuf enum `google.storagetransfer.v1.MetadataOptions.Mode`

### [TransferTypes.MetadataOptions.StorageClass](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.MetadataOptions.StorageClass)

Options for handling Google Cloud Storage object storage class.

Protobuf enum `google.storagetransfer.v1.MetadataOptions.StorageClass`

### [TransferTypes.MetadataOptions.Symlink](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.MetadataOptions.Symlink)

Whether symlinks should be skipped or preserved during a transfer job.

Protobuf enum `google.storagetransfer.v1.MetadataOptions.Symlink`

### [TransferTypes.MetadataOptions.TemporaryHold](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.MetadataOptions.TemporaryHold)

Options for handling temporary holds for Google Cloud Storage objects.

Protobuf enum `google.storagetransfer.v1.MetadataOptions.TemporaryHold`

### [TransferTypes.MetadataOptions.TimeCreated](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.MetadataOptions.TimeCreated)

Options for handling `timeCreated` metadata for Google Cloud Storage objects.

Protobuf enum `google.storagetransfer.v1.MetadataOptions.TimeCreated`

### [TransferTypes.MetadataOptions.UID](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.MetadataOptions.UID)

Options for handling file UID attribute.

Protobuf enum `google.storagetransfer.v1.MetadataOptions.UID`

### [TransferTypes.NotificationConfig.EventType](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.NotificationConfig.EventType)

Enum for specifying event types for which notifications are to be published. Additional event types may be added in the future. Clients should either safely ignore unrecognized event types or explicitly specify which event types they are prepared to accept.

Protobuf enum `google.storagetransfer.v1.NotificationConfig.EventType`

### [TransferTypes.NotificationConfig.PayloadFormat](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.NotificationConfig.PayloadFormat)

Enum for specifying the format of a notification message's payload.

Protobuf enum `google.storagetransfer.v1.NotificationConfig.PayloadFormat`

### [TransferTypes.S3CompatibleMetadata.AuthMethod](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.S3CompatibleMetadata.AuthMethod)

The authentication and authorization method used by the storage service.

Protobuf enum `google.storagetransfer.v1.S3CompatibleMetadata.AuthMethod`

### [TransferTypes.S3CompatibleMetadata.ListApi](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.S3CompatibleMetadata.ListApi)

The Listing API to use for discovering objects.

Protobuf enum `google.storagetransfer.v1.S3CompatibleMetadata.ListApi`

### [TransferTypes.S3CompatibleMetadata.NetworkProtocol](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.S3CompatibleMetadata.NetworkProtocol)

The agent network protocol to access the storage service.

Protobuf enum `google.storagetransfer.v1.S3CompatibleMetadata.NetworkProtocol`

### [TransferTypes.S3CompatibleMetadata.RequestModel](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.S3CompatibleMetadata.RequestModel)

The request model of the API.

Protobuf enum `google.storagetransfer.v1.S3CompatibleMetadata.RequestModel`

### [TransferTypes.TransferJob.Status](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferJob.Status)

The status of the transfer job.

Protobuf enum `google.storagetransfer.v1.TransferJob.Status`

### [TransferTypes.TransferOperation.Status](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferOperation.Status)

The status of a TransferOperation.

Protobuf enum `google.storagetransfer.v1.TransferOperation.Status`

### [TransferTypes.TransferOptions.OverwriteWhen](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferOptions.OverwriteWhen)

Specifies when to overwrite an object in the sink when an object with matching name is found in the source.

Protobuf enum `google.storagetransfer.v1.TransferOptions.OverwriteWhen`

### [TransferTypes.TransferSpec.DataSinkCase](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferSpec.DataSinkCase)

### [TransferTypes.TransferSpec.DataSourceCase](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferSpec.DataSourceCase)

### [TransferTypes.TransferSpec.IntermediateDataLocationCase](/java/docs/reference/google-cloud-storage-transfer/1.14.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferSpec.IntermediateDataLocationCase)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
