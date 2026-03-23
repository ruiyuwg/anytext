-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.cloud.gkemulticloud.v1.stub (0.14.0) Stay organized with collections Save and categorize content based on your preferences.

0.86.0 (latest) 0.84.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.69.0 0.67.0 0.66.0 0.63.0 0.62.0 0.61.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.6 0.1.0

## Classes

### [AttachedClustersStub](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.AttachedClustersStub)

Base stub class for the AttachedClusters service API.

This class is for advanced usage and reflects the underlying API directly.

### [AttachedClustersStubSettings](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.AttachedClustersStubSettings)

Settings class to configure an instance of [AttachedClustersStub](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.AttachedClustersStub).

The default instance has everything set to sensible defaults:

-   The default service address (gkemulticloud.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getAttachedCluster to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 AttachedClustersStubSettings.Builder attachedClustersSettingsBuilder =
     AttachedClustersStubSettings.newBuilder();
 attachedClustersSettingsBuilder
     .getAttachedClusterSettings()
     .setRetrySettings(
         attachedClustersSettingsBuilder
             .getAttachedClusterSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 AttachedClustersStubSettings attachedClustersSettings = attachedClustersSettingsBuilder.build();
 
```
 

### [AttachedClustersStubSettings.Builder](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.AttachedClustersStubSettings.Builder)

Builder for AttachedClustersStubSettings.

### [AwsClustersStub](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.AwsClustersStub)

Base stub class for the AwsClusters service API.

This class is for advanced usage and reflects the underlying API directly.

### [AwsClustersStubSettings](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.AwsClustersStubSettings)

Settings class to configure an instance of [AwsClustersStub](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.AwsClustersStub).

The default instance has everything set to sensible defaults:

-   The default service address (gkemulticloud.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getAwsCluster to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 AwsClustersStubSettings.Builder awsClustersSettingsBuilder =
     AwsClustersStubSettings.newBuilder();
 awsClustersSettingsBuilder
     .getAwsClusterSettings()
     .setRetrySettings(
         awsClustersSettingsBuilder
             .getAwsClusterSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 AwsClustersStubSettings awsClustersSettings = awsClustersSettingsBuilder.build();
 
```
 

### [AwsClustersStubSettings.Builder](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.AwsClustersStubSettings.Builder)

Builder for AwsClustersStubSettings.

### [AzureClustersStub](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.AzureClustersStub)

Base stub class for the AzureClusters service API.

This class is for advanced usage and reflects the underlying API directly.

### [AzureClustersStubSettings](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.AzureClustersStubSettings)

Settings class to configure an instance of [AzureClustersStub](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.AzureClustersStub).

The default instance has everything set to sensible defaults:

-   The default service address (gkemulticloud.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getAzureClient to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 AzureClustersStubSettings.Builder azureClustersSettingsBuilder =
     AzureClustersStubSettings.newBuilder();
 azureClustersSettingsBuilder
     .getAzureClientSettings()
     .setRetrySettings(
         azureClustersSettingsBuilder
             .getAzureClientSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 AzureClustersStubSettings azureClustersSettings = azureClustersSettingsBuilder.build();
 
```
 

### [AzureClustersStubSettings.Builder](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.AzureClustersStubSettings.Builder)

Builder for AzureClustersStubSettings.

### [GrpcAttachedClustersCallableFactory](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.GrpcAttachedClustersCallableFactory)

gRPC callable factory implementation for the AttachedClusters service API.

This class is for advanced usage.

### [GrpcAttachedClustersStub](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.GrpcAttachedClustersStub)

gRPC stub implementation for the AttachedClusters service API.

This class is for advanced usage and reflects the underlying API directly.

### [GrpcAwsClustersCallableFactory](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.GrpcAwsClustersCallableFactory)

gRPC callable factory implementation for the AwsClusters service API.

This class is for advanced usage.

### [GrpcAwsClustersStub](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.GrpcAwsClustersStub)

gRPC stub implementation for the AwsClusters service API.

This class is for advanced usage and reflects the underlying API directly.

### [GrpcAzureClustersCallableFactory](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.GrpcAzureClustersCallableFactory)

gRPC callable factory implementation for the AzureClusters service API.

This class is for advanced usage.

### [GrpcAzureClustersStub](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.GrpcAzureClustersStub)

gRPC stub implementation for the AzureClusters service API.

This class is for advanced usage and reflects the underlying API directly.

### [HttpJsonAttachedClustersCallableFactory](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.HttpJsonAttachedClustersCallableFactory)

REST callable factory implementation for the AttachedClusters service API.

This class is for advanced usage.

### [HttpJsonAttachedClustersStub](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.HttpJsonAttachedClustersStub)

REST stub implementation for the AttachedClusters service API.

This class is for advanced usage and reflects the underlying API directly.

### [HttpJsonAwsClustersCallableFactory](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.HttpJsonAwsClustersCallableFactory)

REST callable factory implementation for the AwsClusters service API.

This class is for advanced usage.

### [HttpJsonAwsClustersStub](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.HttpJsonAwsClustersStub)

REST stub implementation for the AwsClusters service API.

This class is for advanced usage and reflects the underlying API directly.

### [HttpJsonAzureClustersCallableFactory](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.HttpJsonAzureClustersCallableFactory)

REST callable factory implementation for the AzureClusters service API.

This class is for advanced usage.

### [HttpJsonAzureClustersStub](/java/docs/reference/google-cloud-gke-multi-cloud/0.14.0/com.google.cloud.gkemulticloud.v1.stub.HttpJsonAzureClustersStub)

REST stub implementation for the AzureClusters service API.

This class is for advanced usage and reflects the underlying API directly.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
