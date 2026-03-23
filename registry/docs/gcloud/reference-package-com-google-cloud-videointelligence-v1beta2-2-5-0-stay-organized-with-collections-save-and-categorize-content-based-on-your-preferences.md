-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.cloud.videointelligence.v1beta2 (2.5.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.13 2.1.0 2.0.27

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

The interfaces provided are listed below, along with usage samples.

## VideoIntelligenceServiceClient

Service Description: Service that implements Google Cloud Video Intelligence API.

Sample for VideoIntelligenceServiceClient:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VideoIntelligenceServiceClient videoIntelligenceServiceClient =
     VideoIntelligenceServiceClient.create()) {
   String inputUri = "inputUri470706498";
   List<Feature> features = new ArrayList<>();
   AnnotateVideoResponse response =
       videoIntelligenceServiceClient.annotateVideoAsync(inputUri, features).get();
 }
 
```
 

## Classes

### [AnnotateVideoProgress](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.AnnotateVideoProgress)

Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

Protobuf type `google.cloud.videointelligence.v1beta2.AnnotateVideoProgress`

### [AnnotateVideoProgress.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.AnnotateVideoProgress.Builder)

Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

Protobuf type `google.cloud.videointelligence.v1beta2.AnnotateVideoProgress`

### [AnnotateVideoRequest](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.AnnotateVideoRequest)

Video annotation request.

Protobuf type `google.cloud.videointelligence.v1beta2.AnnotateVideoRequest`

### [AnnotateVideoRequest.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.AnnotateVideoRequest.Builder)

Video annotation request.

Protobuf type `google.cloud.videointelligence.v1beta2.AnnotateVideoRequest`

### [AnnotateVideoResponse](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.AnnotateVideoResponse)

Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

Protobuf type `google.cloud.videointelligence.v1beta2.AnnotateVideoResponse`

### [AnnotateVideoResponse.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.AnnotateVideoResponse.Builder)

Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

Protobuf type `google.cloud.videointelligence.v1beta2.AnnotateVideoResponse`

### [Entity](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.Entity)

Detected entity from video analysis.

Protobuf type `google.cloud.videointelligence.v1beta2.Entity`

### [Entity.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.Entity.Builder)

Detected entity from video analysis.

Protobuf type `google.cloud.videointelligence.v1beta2.Entity`

### [ExplicitContentAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.ExplicitContentAnnotation)

Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.

Protobuf type `google.cloud.videointelligence.v1beta2.ExplicitContentAnnotation`

### [ExplicitContentAnnotation.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.ExplicitContentAnnotation.Builder)

Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.

Protobuf type `google.cloud.videointelligence.v1beta2.ExplicitContentAnnotation`

### [ExplicitContentDetectionConfig](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.ExplicitContentDetectionConfig)

Config for EXPLICIT\_CONTENT\_DETECTION.

Protobuf type `google.cloud.videointelligence.v1beta2.ExplicitContentDetectionConfig`

### [ExplicitContentDetectionConfig.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.ExplicitContentDetectionConfig.Builder)

Config for EXPLICIT\_CONTENT\_DETECTION.

Protobuf type `google.cloud.videointelligence.v1beta2.ExplicitContentDetectionConfig`

### [ExplicitContentFrame](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.ExplicitContentFrame)

Video frame level annotation results for explicit content.

Protobuf type `google.cloud.videointelligence.v1beta2.ExplicitContentFrame`

### [ExplicitContentFrame.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.ExplicitContentFrame.Builder)

Video frame level annotation results for explicit content.

Protobuf type `google.cloud.videointelligence.v1beta2.ExplicitContentFrame`

### [FaceAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.FaceAnnotation)

Face annotation.

Protobuf type `google.cloud.videointelligence.v1beta2.FaceAnnotation`

### [FaceAnnotation.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.FaceAnnotation.Builder)

Face annotation.

Protobuf type `google.cloud.videointelligence.v1beta2.FaceAnnotation`

### [FaceDetectionConfig](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.FaceDetectionConfig)

Config for FACE\_DETECTION.

Protobuf type `google.cloud.videointelligence.v1beta2.FaceDetectionConfig`

### [FaceDetectionConfig.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.FaceDetectionConfig.Builder)

Config for FACE\_DETECTION.

Protobuf type `google.cloud.videointelligence.v1beta2.FaceDetectionConfig`

### [FaceFrame](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.FaceFrame)

Video frame level annotation results for face detection.

Protobuf type `google.cloud.videointelligence.v1beta2.FaceFrame`

### [FaceFrame.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.FaceFrame.Builder)

Video frame level annotation results for face detection.

Protobuf type `google.cloud.videointelligence.v1beta2.FaceFrame`

### [FaceSegment](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.FaceSegment)

Video segment level annotation results for face detection.

Protobuf type `google.cloud.videointelligence.v1beta2.FaceSegment`

### [FaceSegment.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.FaceSegment.Builder)

Video segment level annotation results for face detection.

Protobuf type `google.cloud.videointelligence.v1beta2.FaceSegment`

### [LabelAnnotation](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.LabelAnnotation)

Label annotation.

Protobuf type `google.cloud.videointelligence.v1beta2.LabelAnnotation`

### [LabelAnnotation.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.LabelAnnotation.Builder)

Label annotation.

Protobuf type `google.cloud.videointelligence.v1beta2.LabelAnnotation`

### [LabelDetectionConfig](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.LabelDetectionConfig)

Config for LABEL\_DETECTION.

Protobuf type `google.cloud.videointelligence.v1beta2.LabelDetectionConfig`

### [LabelDetectionConfig.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.LabelDetectionConfig.Builder)

Config for LABEL\_DETECTION.

Protobuf type `google.cloud.videointelligence.v1beta2.LabelDetectionConfig`

### [LabelFrame](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.LabelFrame)

Video frame level annotation results for label detection.

Protobuf type `google.cloud.videointelligence.v1beta2.LabelFrame`

### [LabelFrame.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.LabelFrame.Builder)

Video frame level annotation results for label detection.

Protobuf type `google.cloud.videointelligence.v1beta2.LabelFrame`

### [LabelSegment](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.LabelSegment)

Video segment level annotation results for label detection.

Protobuf type `google.cloud.videointelligence.v1beta2.LabelSegment`

### [LabelSegment.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.LabelSegment.Builder)

Video segment level annotation results for label detection.

Protobuf type `google.cloud.videointelligence.v1beta2.LabelSegment`

### [NormalizedBoundingBox](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.NormalizedBoundingBox)

Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: \[0, 1\].

Protobuf type `google.cloud.videointelligence.v1beta2.NormalizedBoundingBox`

### [NormalizedBoundingBox.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.NormalizedBoundingBox.Builder)

Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: \[0, 1\].

Protobuf type `google.cloud.videointelligence.v1beta2.NormalizedBoundingBox`

### [ShotChangeDetectionConfig](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.ShotChangeDetectionConfig)

Config for SHOT\_CHANGE\_DETECTION.

Protobuf type `google.cloud.videointelligence.v1beta2.ShotChangeDetectionConfig`

### [ShotChangeDetectionConfig.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.ShotChangeDetectionConfig.Builder)

Config for SHOT\_CHANGE\_DETECTION.

Protobuf type `google.cloud.videointelligence.v1beta2.ShotChangeDetectionConfig`

### [VideoAnnotationProgress](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoAnnotationProgress)

Annotation progress for a single video.

Protobuf type `google.cloud.videointelligence.v1beta2.VideoAnnotationProgress`

### [VideoAnnotationProgress.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoAnnotationProgress.Builder)

Annotation progress for a single video.

Protobuf type `google.cloud.videointelligence.v1beta2.VideoAnnotationProgress`

### [VideoAnnotationResults](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoAnnotationResults)

Annotation results for a single video.

Protobuf type `google.cloud.videointelligence.v1beta2.VideoAnnotationResults`

### [VideoAnnotationResults.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoAnnotationResults.Builder)

Annotation results for a single video.

Protobuf type `google.cloud.videointelligence.v1beta2.VideoAnnotationResults`

### [VideoContext](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoContext)

Video context and/or feature-specific parameters.

Protobuf type `google.cloud.videointelligence.v1beta2.VideoContext`

### [VideoContext.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoContext.Builder)

Video context and/or feature-specific parameters.

Protobuf type `google.cloud.videointelligence.v1beta2.VideoContext`

### [VideoIntelligenceServiceClient](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoIntelligenceServiceClient)

Service Description: Service that implements Google Cloud Video Intelligence API.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (VideoIntelligenceServiceClient videoIntelligenceServiceClient =
     VideoIntelligenceServiceClient.create()) {
   String inputUri = "inputUri470706498";
   List<Feature> features = new ArrayList<>();
   AnnotateVideoResponse response =
       videoIntelligenceServiceClient.annotateVideoAsync(inputUri, features).get();
 }
 
```
 

Note: close() needs to be called on the VideoIntelligenceServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of VideoIntelligenceServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 VideoIntelligenceServiceSettings videoIntelligenceServiceSettings =
     VideoIntelligenceServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 VideoIntelligenceServiceClient videoIntelligenceServiceClient =
     VideoIntelligenceServiceClient.create(videoIntelligenceServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 VideoIntelligenceServiceSettings videoIntelligenceServiceSettings =
     VideoIntelligenceServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 VideoIntelligenceServiceClient videoIntelligenceServiceClient =
     VideoIntelligenceServiceClient.create(videoIntelligenceServiceSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 VideoIntelligenceServiceSettings videoIntelligenceServiceSettings =
     VideoIntelligenceServiceSettings.newHttpJsonBuilder().build();
 VideoIntelligenceServiceClient videoIntelligenceServiceClient =
     VideoIntelligenceServiceClient.create(videoIntelligenceServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

### [VideoIntelligenceServiceGrpc](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoIntelligenceServiceGrpc)

Service that implements Google Cloud Video Intelligence API.

### [VideoIntelligenceServiceGrpc.VideoIntelligenceServiceBlockingStub](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoIntelligenceServiceGrpc.VideoIntelligenceServiceBlockingStub)

Service that implements Google Cloud Video Intelligence API.

### [VideoIntelligenceServiceGrpc.VideoIntelligenceServiceFutureStub](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoIntelligenceServiceGrpc.VideoIntelligenceServiceFutureStub)

Service that implements Google Cloud Video Intelligence API.

### [VideoIntelligenceServiceGrpc.VideoIntelligenceServiceImplBase](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoIntelligenceServiceGrpc.VideoIntelligenceServiceImplBase)

Service that implements Google Cloud Video Intelligence API.

### [VideoIntelligenceServiceGrpc.VideoIntelligenceServiceStub](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoIntelligenceServiceGrpc.VideoIntelligenceServiceStub)

Service that implements Google Cloud Video Intelligence API.

### [VideoIntelligenceServiceProto](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoIntelligenceServiceProto)

### [VideoIntelligenceServiceSettings](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoIntelligenceServiceSettings)

Settings class to configure an instance of [VideoIntelligenceServiceClient](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1p3beta1.VideoIntelligenceServiceClient).

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
 VideoIntelligenceServiceSettings.Builder videoIntelligenceServiceSettingsBuilder =
     VideoIntelligenceServiceSettings.newBuilder();
 videoIntelligenceServiceSettingsBuilder
     .annotateVideoSettings()
     .setRetrySettings(
         videoIntelligenceServiceSettingsBuilder
             .annotateVideoSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 VideoIntelligenceServiceSettings videoIntelligenceServiceSettings =
     videoIntelligenceServiceSettingsBuilder.build();
 
```
 

### [VideoIntelligenceServiceSettings.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoIntelligenceServiceSettings.Builder)

Builder for VideoIntelligenceServiceSettings.

### [VideoSegment](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoSegment)

Video segment.

Protobuf type `google.cloud.videointelligence.v1beta2.VideoSegment`

### [VideoSegment.Builder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoSegment.Builder)

Video segment.

Protobuf type `google.cloud.videointelligence.v1beta2.VideoSegment`

## Interfaces

### [AnnotateVideoProgressOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.AnnotateVideoProgressOrBuilder)

### [AnnotateVideoRequestOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.AnnotateVideoRequestOrBuilder)

### [AnnotateVideoResponseOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.AnnotateVideoResponseOrBuilder)

### [EntityOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.EntityOrBuilder)

### [ExplicitContentAnnotationOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.ExplicitContentAnnotationOrBuilder)

### [ExplicitContentDetectionConfigOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.ExplicitContentDetectionConfigOrBuilder)

### [ExplicitContentFrameOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.ExplicitContentFrameOrBuilder)

### [FaceAnnotationOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.FaceAnnotationOrBuilder)

### [FaceDetectionConfigOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.FaceDetectionConfigOrBuilder)

### [FaceFrameOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.FaceFrameOrBuilder)

### [FaceSegmentOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.FaceSegmentOrBuilder)

### [LabelAnnotationOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.LabelAnnotationOrBuilder)

### [LabelDetectionConfigOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.LabelDetectionConfigOrBuilder)

### [LabelFrameOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.LabelFrameOrBuilder)

### [LabelSegmentOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.LabelSegmentOrBuilder)

### [NormalizedBoundingBoxOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.NormalizedBoundingBoxOrBuilder)

### [ShotChangeDetectionConfigOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.ShotChangeDetectionConfigOrBuilder)

### [VideoAnnotationProgressOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoAnnotationProgressOrBuilder)

### [VideoAnnotationResultsOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoAnnotationResultsOrBuilder)

### [VideoContextOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoContextOrBuilder)

### [VideoSegmentOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.VideoSegmentOrBuilder)

## Enums

### [Feature](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.Feature)

Video annotation feature.

Protobuf enum `google.cloud.videointelligence.v1beta2.Feature`

### [LabelDetectionMode](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.LabelDetectionMode)

Label detection mode.

Protobuf enum `google.cloud.videointelligence.v1beta2.LabelDetectionMode`

### [Likelihood](/java/docs/reference/google-cloud-video-intelligence/2.5.0/com.google.cloud.videointelligence.v1beta2.Likelihood)

Bucketized representation of likelihood.

Protobuf enum `google.cloud.videointelligence.v1beta2.Likelihood`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
