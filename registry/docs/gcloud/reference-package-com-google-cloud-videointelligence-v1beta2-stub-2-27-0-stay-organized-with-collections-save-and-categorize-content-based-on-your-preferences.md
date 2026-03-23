-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.cloud.videointelligence.v1beta2.stub (2.27.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.13 2.1.0 2.0.27

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

## Classes

### [GrpcVideoIntelligenceServiceCallableFactory](/java/docs/reference/google-cloud-video-intelligence/2.27.0/com.google.cloud.videointelligence.v1beta2.stub.GrpcVideoIntelligenceServiceCallableFactory)

gRPC callable factory implementation for the VideoIntelligenceService service API.

This class is for advanced usage.

### [GrpcVideoIntelligenceServiceStub](/java/docs/reference/google-cloud-video-intelligence/2.27.0/com.google.cloud.videointelligence.v1beta2.stub.GrpcVideoIntelligenceServiceStub)

gRPC stub implementation for the VideoIntelligenceService service API.

This class is for advanced usage and reflects the underlying API directly.

### [HttpJsonVideoIntelligenceServiceCallableFactory](/java/docs/reference/google-cloud-video-intelligence/2.27.0/com.google.cloud.videointelligence.v1beta2.stub.HttpJsonVideoIntelligenceServiceCallableFactory)

REST callable factory implementation for the VideoIntelligenceService service API.

This class is for advanced usage.

### [HttpJsonVideoIntelligenceServiceStub](/java/docs/reference/google-cloud-video-intelligence/2.27.0/com.google.cloud.videointelligence.v1beta2.stub.HttpJsonVideoIntelligenceServiceStub)

REST stub implementation for the VideoIntelligenceService service API.

This class is for advanced usage and reflects the underlying API directly.

### [VideoIntelligenceServiceStub](/java/docs/reference/google-cloud-video-intelligence/2.27.0/com.google.cloud.videointelligence.v1beta2.stub.VideoIntelligenceServiceStub)

Base stub class for the VideoIntelligenceService service API.

This class is for advanced usage and reflects the underlying API directly.

### [VideoIntelligenceServiceStubSettings](/java/docs/reference/google-cloud-video-intelligence/2.27.0/com.google.cloud.videointelligence.v1beta2.stub.VideoIntelligenceServiceStubSettings)

Settings class to configure an instance of [VideoIntelligenceServiceStub](/java/docs/reference/google-cloud-video-intelligence/2.27.0/com.google.cloud.videointelligence.v1beta2.stub.VideoIntelligenceServiceStub).

The default instance has everything set to sensible defaults:

-   The default service address (videointelligence.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of annotateVideo to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 VideoIntelligenceServiceStubSettings.Builder videoIntelligenceServiceSettingsBuilder =
     VideoIntelligenceServiceStubSettings.newBuilder();
 videoIntelligenceServiceSettingsBuilder
     .annotateVideoSettings()
     .setRetrySettings(
         videoIntelligenceServiceSettingsBuilder
             .annotateVideoSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 VideoIntelligenceServiceStubSettings videoIntelligenceServiceSettings =
     videoIntelligenceServiceSettingsBuilder.build();
 
```
 

### [VideoIntelligenceServiceStubSettings.Builder](/java/docs/reference/google-cloud-video-intelligence/2.27.0/com.google.cloud.videointelligence.v1beta2.stub.VideoIntelligenceServiceStubSettings.Builder)

Builder for VideoIntelligenceServiceStubSettings.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
