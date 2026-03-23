-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.cloud.vision.v1 (3.19.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

A client to Cloud Vision API

The interfaces provided are listed below, along with usage samples.

### ImageAnnotatorClient

Service Description: Service that performs Google Cloud Vision API detection tasks over client images, such as face, landmark, logo, label, and text detection. The ImageAnnotator service returns detected entities from the images.

Sample for ImageAnnotatorClient:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ImageAnnotatorClient imageAnnotatorClient = ImageAnnotatorClient.create()) {
   List<AnnotateImageRequest> requests = new ArrayList<>();
   BatchAnnotateImagesResponse response = imageAnnotatorClient.batchAnnotateImages(requests);
 }
 
```
 

### ProductSearchClient

Service Description: Manages Products and ProductSets of reference images for use in product search. It uses the following resource model:

\- The API has a collection of ProductSet resources, named `projects/*/locations/*/productSets/*`, which acts as a way to put different products into groups to limit identification.

In parallel,

\- The API has a collection of Product resources, named `projects/*/locations/*/products/*`

\- Each Product has a collection of ReferenceImage resources, named `projects/*/locations/*/products/*/referenceImages/*`

Sample for ProductSearchClient:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ProductSearchClient productSearchClient = ProductSearchClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   ProductSet productSet = ProductSet.newBuilder().build();
   String productSetId = "productSetId1003042158";
   ProductSet response = productSearchClient.createProductSet(parent, productSet, productSetId);
 }
 
```
 

## Classes

### [AddProductToProductSetRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AddProductToProductSetRequest)

Request message for the `AddProductToProductSet` method.

Protobuf type `google.cloud.vision.v1.AddProductToProductSetRequest`

### [AddProductToProductSetRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AddProductToProductSetRequest.Builder)

Request message for the `AddProductToProductSet` method.

Protobuf type `google.cloud.vision.v1.AddProductToProductSetRequest`

### [AnnotateFileRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AnnotateFileRequest)

A request to annotate one single file, e.g. a PDF, TIFF or GIF file.

Protobuf type `google.cloud.vision.v1.AnnotateFileRequest`

### [AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AnnotateFileRequest.Builder)

A request to annotate one single file, e.g. a PDF, TIFF or GIF file.

Protobuf type `google.cloud.vision.v1.AnnotateFileRequest`

### [AnnotateFileResponse](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AnnotateFileResponse)

Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.

Protobuf type `google.cloud.vision.v1.AnnotateFileResponse`

### [AnnotateFileResponse.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AnnotateFileResponse.Builder)

Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.

Protobuf type `google.cloud.vision.v1.AnnotateFileResponse`

### [AnnotateImageRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AnnotateImageRequest)

Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.

Protobuf type `google.cloud.vision.v1.AnnotateImageRequest`

### [AnnotateImageRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AnnotateImageRequest.Builder)

Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.

Protobuf type `google.cloud.vision.v1.AnnotateImageRequest`

### [AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AnnotateImageResponse)

Response to an image annotation request.

Protobuf type `google.cloud.vision.v1.AnnotateImageResponse`

### [AnnotateImageResponse.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AnnotateImageResponse.Builder)

Response to an image annotation request.

Protobuf type `google.cloud.vision.v1.AnnotateImageResponse`

### [AsyncAnnotateFileRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncAnnotateFileRequest)

An offline file annotation request.

Protobuf type `google.cloud.vision.v1.AsyncAnnotateFileRequest`

### [AsyncAnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncAnnotateFileRequest.Builder)

An offline file annotation request.

Protobuf type `google.cloud.vision.v1.AsyncAnnotateFileRequest`

### [AsyncAnnotateFileResponse](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncAnnotateFileResponse)

The response for a single offline file annotation request.

Protobuf type `google.cloud.vision.v1.AsyncAnnotateFileResponse`

### [AsyncAnnotateFileResponse.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncAnnotateFileResponse.Builder)

The response for a single offline file annotation request.

Protobuf type `google.cloud.vision.v1.AsyncAnnotateFileResponse`

### [AsyncBatchAnnotateFilesRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncBatchAnnotateFilesRequest)

Multiple async file annotation requests are batched into a single service call.

Protobuf type `google.cloud.vision.v1.AsyncBatchAnnotateFilesRequest`

### [AsyncBatchAnnotateFilesRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncBatchAnnotateFilesRequest.Builder)

Multiple async file annotation requests are batched into a single service call.

Protobuf type `google.cloud.vision.v1.AsyncBatchAnnotateFilesRequest`

### [AsyncBatchAnnotateFilesResponse](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncBatchAnnotateFilesResponse)

Response to an async batch file annotation request.

Protobuf type `google.cloud.vision.v1.AsyncBatchAnnotateFilesResponse`

### [AsyncBatchAnnotateFilesResponse.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncBatchAnnotateFilesResponse.Builder)

Response to an async batch file annotation request.

Protobuf type `google.cloud.vision.v1.AsyncBatchAnnotateFilesResponse`

### [AsyncBatchAnnotateImagesRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncBatchAnnotateImagesRequest)

Request for async image annotation for a list of images.

Protobuf type `google.cloud.vision.v1.AsyncBatchAnnotateImagesRequest`

### [AsyncBatchAnnotateImagesRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncBatchAnnotateImagesRequest.Builder)

Request for async image annotation for a list of images.

Protobuf type `google.cloud.vision.v1.AsyncBatchAnnotateImagesRequest`

### [AsyncBatchAnnotateImagesResponse](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncBatchAnnotateImagesResponse)

Response to an async batch image annotation request.

Protobuf type `google.cloud.vision.v1.AsyncBatchAnnotateImagesResponse`

### [AsyncBatchAnnotateImagesResponse.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncBatchAnnotateImagesResponse.Builder)

Response to an async batch image annotation request.

Protobuf type `google.cloud.vision.v1.AsyncBatchAnnotateImagesResponse`

### [BatchAnnotateFilesRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BatchAnnotateFilesRequest)

A list of requests to annotate files using the BatchAnnotateFiles API.

Protobuf type `google.cloud.vision.v1.BatchAnnotateFilesRequest`

### [BatchAnnotateFilesRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BatchAnnotateFilesRequest.Builder)

A list of requests to annotate files using the BatchAnnotateFiles API.

Protobuf type `google.cloud.vision.v1.BatchAnnotateFilesRequest`

### [BatchAnnotateFilesResponse](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BatchAnnotateFilesResponse)

A list of file annotation responses.

Protobuf type `google.cloud.vision.v1.BatchAnnotateFilesResponse`

### [BatchAnnotateFilesResponse.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BatchAnnotateFilesResponse.Builder)

A list of file annotation responses.

Protobuf type `google.cloud.vision.v1.BatchAnnotateFilesResponse`

### [BatchAnnotateImagesRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BatchAnnotateImagesRequest)

Multiple image annotation requests are batched into a single service call.

Protobuf type `google.cloud.vision.v1.BatchAnnotateImagesRequest`

### [BatchAnnotateImagesRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BatchAnnotateImagesRequest.Builder)

Multiple image annotation requests are batched into a single service call.

Protobuf type `google.cloud.vision.v1.BatchAnnotateImagesRequest`

### [BatchAnnotateImagesResponse](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BatchAnnotateImagesResponse)

Response to a batch image annotation request.

Protobuf type `google.cloud.vision.v1.BatchAnnotateImagesResponse`

### [BatchAnnotateImagesResponse.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BatchAnnotateImagesResponse.Builder)

Response to a batch image annotation request.

Protobuf type `google.cloud.vision.v1.BatchAnnotateImagesResponse`

### [BatchOperationMetadata](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BatchOperationMetadata)

Metadata for the batch operations such as the current state.

This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

Protobuf type `google.cloud.vision.v1.BatchOperationMetadata`

### [BatchOperationMetadata.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BatchOperationMetadata.Builder)

Metadata for the batch operations such as the current state.

This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

Protobuf type `google.cloud.vision.v1.BatchOperationMetadata`

### [Block](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Block)

Logical element on the page.

Protobuf type `google.cloud.vision.v1.Block`

### [Block.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Block.Builder)

Logical element on the page.

Protobuf type `google.cloud.vision.v1.Block`

### [BoundingPoly](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BoundingPoly)

A bounding polygon for the detected image annotation.

Protobuf type `google.cloud.vision.v1.BoundingPoly`

### [BoundingPoly.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BoundingPoly.Builder)

A bounding polygon for the detected image annotation.

Protobuf type `google.cloud.vision.v1.BoundingPoly`

### [ColorInfo](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ColorInfo)

Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.

Protobuf type `google.cloud.vision.v1.ColorInfo`

### [ColorInfo.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ColorInfo.Builder)

Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.

Protobuf type `google.cloud.vision.v1.ColorInfo`

### [CreateProductRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CreateProductRequest)

Request message for the `CreateProduct` method.

Protobuf type `google.cloud.vision.v1.CreateProductRequest`

### [CreateProductRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CreateProductRequest.Builder)

Request message for the `CreateProduct` method.

Protobuf type `google.cloud.vision.v1.CreateProductRequest`

### [CreateProductSetRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CreateProductSetRequest)

Request message for the `CreateProductSet` method.

Protobuf type `google.cloud.vision.v1.CreateProductSetRequest`

### [CreateProductSetRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CreateProductSetRequest.Builder)

Request message for the `CreateProductSet` method.

Protobuf type `google.cloud.vision.v1.CreateProductSetRequest`

### [CreateReferenceImageRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CreateReferenceImageRequest)

Request message for the `CreateReferenceImage` method.

Protobuf type `google.cloud.vision.v1.CreateReferenceImageRequest`

### [CreateReferenceImageRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CreateReferenceImageRequest.Builder)

Request message for the `CreateReferenceImage` method.

Protobuf type `google.cloud.vision.v1.CreateReferenceImageRequest`

### [CropHint](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CropHint)

Single crop hint that is used to generate a new crop when serving an image.

Protobuf type `google.cloud.vision.v1.CropHint`

### [CropHint.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CropHint.Builder)

Single crop hint that is used to generate a new crop when serving an image.

Protobuf type `google.cloud.vision.v1.CropHint`

### [CropHintsAnnotation](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CropHintsAnnotation)

Set of crop hints that are used to generate new crops when serving images.

Protobuf type `google.cloud.vision.v1.CropHintsAnnotation`

### [CropHintsAnnotation.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CropHintsAnnotation.Builder)

Set of crop hints that are used to generate new crops when serving images.

Protobuf type `google.cloud.vision.v1.CropHintsAnnotation`

### [CropHintsParams](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CropHintsParams)

Parameters for crop hints annotation request.

Protobuf type `google.cloud.vision.v1.CropHintsParams`

### [CropHintsParams.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CropHintsParams.Builder)

Parameters for crop hints annotation request.

Protobuf type `google.cloud.vision.v1.CropHintsParams`

### [DeleteProductRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.DeleteProductRequest)

Request message for the `DeleteProduct` method.

Protobuf type `google.cloud.vision.v1.DeleteProductRequest`

### [DeleteProductRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.DeleteProductRequest.Builder)

Request message for the `DeleteProduct` method.

Protobuf type `google.cloud.vision.v1.DeleteProductRequest`

### [DeleteProductSetRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.DeleteProductSetRequest)

Request message for the `DeleteProductSet` method.

Protobuf type `google.cloud.vision.v1.DeleteProductSetRequest`

### [DeleteProductSetRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.DeleteProductSetRequest.Builder)

Request message for the `DeleteProductSet` method.

Protobuf type `google.cloud.vision.v1.DeleteProductSetRequest`

### [DeleteReferenceImageRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.DeleteReferenceImageRequest)

Request message for the `DeleteReferenceImage` method.

Protobuf type `google.cloud.vision.v1.DeleteReferenceImageRequest`

### [DeleteReferenceImageRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.DeleteReferenceImageRequest.Builder)

Request message for the `DeleteReferenceImage` method.

Protobuf type `google.cloud.vision.v1.DeleteReferenceImageRequest`

### [DominantColorsAnnotation](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.DominantColorsAnnotation)

Set of dominant colors and their corresponding scores.

Protobuf type `google.cloud.vision.v1.DominantColorsAnnotation`

### [DominantColorsAnnotation.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.DominantColorsAnnotation.Builder)

Set of dominant colors and their corresponding scores.

Protobuf type `google.cloud.vision.v1.DominantColorsAnnotation`

### [EntityAnnotation](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.EntityAnnotation)

Set of detected entity features.

Protobuf type `google.cloud.vision.v1.EntityAnnotation`

### [EntityAnnotation.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.EntityAnnotation.Builder)

Set of detected entity features.

Protobuf type `google.cloud.vision.v1.EntityAnnotation`

### [FaceAnnotation](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.FaceAnnotation)

A face annotation object contains the results of face detection.

Protobuf type `google.cloud.vision.v1.FaceAnnotation`

### [FaceAnnotation.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.FaceAnnotation.Builder)

A face annotation object contains the results of face detection.

Protobuf type `google.cloud.vision.v1.FaceAnnotation`

### [FaceAnnotation.Landmark](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.FaceAnnotation.Landmark)

A face-specific landmark (for example, a face feature).

Protobuf type `google.cloud.vision.v1.FaceAnnotation.Landmark`

### [FaceAnnotation.Landmark.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.FaceAnnotation.Landmark.Builder)

A face-specific landmark (for example, a face feature).

Protobuf type `google.cloud.vision.v1.FaceAnnotation.Landmark`

### [Feature](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Feature)

The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.

Protobuf type `google.cloud.vision.v1.Feature`

### [Feature.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Feature.Builder)

The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.

Protobuf type `google.cloud.vision.v1.Feature`

### [GcsDestination](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.GcsDestination)

The Google Cloud Storage location where the output will be written to.

Protobuf type `google.cloud.vision.v1.GcsDestination`

### [GcsDestination.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.GcsDestination.Builder)

The Google Cloud Storage location where the output will be written to.

Protobuf type `google.cloud.vision.v1.GcsDestination`

### [GcsSource](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.GcsSource)

The Google Cloud Storage location where the input will be read from.

Protobuf type `google.cloud.vision.v1.GcsSource`

### [GcsSource.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.GcsSource.Builder)

The Google Cloud Storage location where the input will be read from.

Protobuf type `google.cloud.vision.v1.GcsSource`

### [GeometryProto](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.GeometryProto)

### [GetProductRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.GetProductRequest)

Request message for the `GetProduct` method.

Protobuf type `google.cloud.vision.v1.GetProductRequest`

### [GetProductRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.GetProductRequest.Builder)

Request message for the `GetProduct` method.

Protobuf type `google.cloud.vision.v1.GetProductRequest`

### [GetProductSetRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.GetProductSetRequest)

Request message for the `GetProductSet` method.

Protobuf type `google.cloud.vision.v1.GetProductSetRequest`

### [GetProductSetRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.GetProductSetRequest.Builder)

Request message for the `GetProductSet` method.

Protobuf type `google.cloud.vision.v1.GetProductSetRequest`

### [GetReferenceImageRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.GetReferenceImageRequest)

Request message for the `GetReferenceImage` method.

Protobuf type `google.cloud.vision.v1.GetReferenceImageRequest`

### [GetReferenceImageRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.GetReferenceImageRequest.Builder)

Request message for the `GetReferenceImage` method.

Protobuf type `google.cloud.vision.v1.GetReferenceImageRequest`

### [Image](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Image)

Client image to perform Google Cloud Vision API tasks over.

Protobuf type `google.cloud.vision.v1.Image`

### [Image.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Image.Builder)

Client image to perform Google Cloud Vision API tasks over.

Protobuf type `google.cloud.vision.v1.Image`

### [ImageAnnotationContext](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageAnnotationContext)

If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.

Protobuf type `google.cloud.vision.v1.ImageAnnotationContext`

### [ImageAnnotationContext.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageAnnotationContext.Builder)

If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.

Protobuf type `google.cloud.vision.v1.ImageAnnotationContext`

### [ImageAnnotatorClient](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageAnnotatorClient)

Service Description: Service that performs Google Cloud Vision API detection tasks over client images, such as face, landmark, logo, label, and text detection. The ImageAnnotator service returns detected entities from the images.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ImageAnnotatorClient imageAnnotatorClient = ImageAnnotatorClient.create()) {
   List<AnnotateImageRequest> requests = new ArrayList<>();
   BatchAnnotateImagesResponse response = imageAnnotatorClient.batchAnnotateImages(requests);
 }
 
```
 

Note: close() needs to be called on the ImageAnnotatorClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of ImageAnnotatorSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ImageAnnotatorSettings imageAnnotatorSettings =
     ImageAnnotatorSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 ImageAnnotatorClient imageAnnotatorClient = ImageAnnotatorClient.create(imageAnnotatorSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ImageAnnotatorSettings imageAnnotatorSettings =
     ImageAnnotatorSettings.newBuilder().setEndpoint(myEndpoint).build();
 ImageAnnotatorClient imageAnnotatorClient = ImageAnnotatorClient.create(imageAnnotatorSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ImageAnnotatorSettings imageAnnotatorSettings =
     ImageAnnotatorSettings.newHttpJsonBuilder().build();
 ImageAnnotatorClient imageAnnotatorClient = ImageAnnotatorClient.create(imageAnnotatorSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

### [ImageAnnotatorGrpc](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageAnnotatorGrpc)

Service that performs Google Cloud Vision API detection tasks over client images, such as face, landmark, logo, label, and text detection. The ImageAnnotator service returns detected entities from the images.

### [ImageAnnotatorGrpc.ImageAnnotatorBlockingStub](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageAnnotatorGrpc.ImageAnnotatorBlockingStub)

A stub to allow clients to do synchronous rpc calls to service ImageAnnotator.

Service that performs Google Cloud Vision API detection tasks over client images, such as face, landmark, logo, label, and text detection. The ImageAnnotator service returns detected entities from the images.

### [ImageAnnotatorGrpc.ImageAnnotatorFutureStub](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageAnnotatorGrpc.ImageAnnotatorFutureStub)

A stub to allow clients to do ListenableFuture-style rpc calls to service ImageAnnotator.

Service that performs Google Cloud Vision API detection tasks over client images, such as face, landmark, logo, label, and text detection. The ImageAnnotator service returns detected entities from the images.

### [ImageAnnotatorGrpc.ImageAnnotatorImplBase](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageAnnotatorGrpc.ImageAnnotatorImplBase)

Base class for the server implementation of the service ImageAnnotator.

Service that performs Google Cloud Vision API detection tasks over client images, such as face, landmark, logo, label, and text detection. The ImageAnnotator service returns detected entities from the images.

### [ImageAnnotatorGrpc.ImageAnnotatorStub](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageAnnotatorGrpc.ImageAnnotatorStub)

A stub to allow clients to do asynchronous rpc calls to service ImageAnnotator.

Service that performs Google Cloud Vision API detection tasks over client images, such as face, landmark, logo, label, and text detection. The ImageAnnotator service returns detected entities from the images.

### [ImageAnnotatorProto](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageAnnotatorProto)

### [ImageAnnotatorSettings](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageAnnotatorSettings)

Settings class to configure an instance of [ImageAnnotatorClient](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1p4beta1.ImageAnnotatorClient).

The default instance has everything set to sensible defaults:

-   The default service address (vision.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of batchAnnotateImages to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ImageAnnotatorSettings.Builder imageAnnotatorSettingsBuilder =
     ImageAnnotatorSettings.newBuilder();
 imageAnnotatorSettingsBuilder
     .batchAnnotateImagesSettings()
     .setRetrySettings(
         imageAnnotatorSettingsBuilder
             .batchAnnotateImagesSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 ImageAnnotatorSettings imageAnnotatorSettings = imageAnnotatorSettingsBuilder.build();
 
```
 

### [ImageAnnotatorSettings.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageAnnotatorSettings.Builder)

Builder for ImageAnnotatorSettings.

### [ImageContext](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageContext)

Image context and/or feature-specific parameters.

Protobuf type `google.cloud.vision.v1.ImageContext`

### [ImageContext.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageContext.Builder)

Image context and/or feature-specific parameters.

Protobuf type `google.cloud.vision.v1.ImageContext`

### [ImageName](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageName)

### [ImageName.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageName.Builder)

Builder for ImageName.

### [ImageProperties](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageProperties)

Stores image properties, such as dominant colors.

Protobuf type `google.cloud.vision.v1.ImageProperties`

### [ImageProperties.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageProperties.Builder)

Stores image properties, such as dominant colors.

Protobuf type `google.cloud.vision.v1.ImageProperties`

### [ImageSource](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageSource)

External image source (Google Cloud Storage or web URL image location).

Protobuf type `google.cloud.vision.v1.ImageSource`

### [ImageSource.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageSource.Builder)

External image source (Google Cloud Storage or web URL image location).

Protobuf type `google.cloud.vision.v1.ImageSource`

### [ImportProductSetsGcsSource](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImportProductSetsGcsSource)

The Google Cloud Storage location for a csv file which preserves a list of ImportProductSetRequests in each line.

Protobuf type `google.cloud.vision.v1.ImportProductSetsGcsSource`

### [ImportProductSetsGcsSource.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImportProductSetsGcsSource.Builder)

The Google Cloud Storage location for a csv file which preserves a list of ImportProductSetRequests in each line.

Protobuf type `google.cloud.vision.v1.ImportProductSetsGcsSource`

### [ImportProductSetsInputConfig](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImportProductSetsInputConfig)

The input content for the `ImportProductSets` method.

Protobuf type `google.cloud.vision.v1.ImportProductSetsInputConfig`

### [ImportProductSetsInputConfig.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImportProductSetsInputConfig.Builder)

The input content for the `ImportProductSets` method.

Protobuf type `google.cloud.vision.v1.ImportProductSetsInputConfig`

### [ImportProductSetsRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImportProductSetsRequest)

Request message for the `ImportProductSets` method.

Protobuf type `google.cloud.vision.v1.ImportProductSetsRequest`

### [ImportProductSetsRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImportProductSetsRequest.Builder)

Request message for the `ImportProductSets` method.

Protobuf type `google.cloud.vision.v1.ImportProductSetsRequest`

### [ImportProductSetsResponse](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImportProductSetsResponse)

Response message for the `ImportProductSets` method.

This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field.

Protobuf type `google.cloud.vision.v1.ImportProductSetsResponse`

### [ImportProductSetsResponse.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImportProductSetsResponse.Builder)

Response message for the `ImportProductSets` method.

This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field.

Protobuf type `google.cloud.vision.v1.ImportProductSetsResponse`

### [InputConfig](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.InputConfig)

The desired input location and metadata.

Protobuf type `google.cloud.vision.v1.InputConfig`

### [InputConfig.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.InputConfig.Builder)

The desired input location and metadata.

Protobuf type `google.cloud.vision.v1.InputConfig`

### [LatLongRect](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.LatLongRect)

Rectangle determined by min and max `LatLng` pairs.

Protobuf type `google.cloud.vision.v1.LatLongRect`

### [LatLongRect.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.LatLongRect.Builder)

Rectangle determined by min and max `LatLng` pairs.

Protobuf type `google.cloud.vision.v1.LatLongRect`

### [ListProductSetsRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductSetsRequest)

Request message for the `ListProductSets` method.

Protobuf type `google.cloud.vision.v1.ListProductSetsRequest`

### [ListProductSetsRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductSetsRequest.Builder)

Request message for the `ListProductSets` method.

Protobuf type `google.cloud.vision.v1.ListProductSetsRequest`

### [ListProductSetsResponse](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductSetsResponse)

Response message for the `ListProductSets` method.

Protobuf type `google.cloud.vision.v1.ListProductSetsResponse`

### [ListProductSetsResponse.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductSetsResponse.Builder)

Response message for the `ListProductSets` method.

Protobuf type `google.cloud.vision.v1.ListProductSetsResponse`

### [ListProductsInProductSetRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductsInProductSetRequest)

Request message for the `ListProductsInProductSet` method.

Protobuf type `google.cloud.vision.v1.ListProductsInProductSetRequest`

### [ListProductsInProductSetRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductsInProductSetRequest.Builder)

Request message for the `ListProductsInProductSet` method.

Protobuf type `google.cloud.vision.v1.ListProductsInProductSetRequest`

### [ListProductsInProductSetResponse](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductsInProductSetResponse)

Response message for the `ListProductsInProductSet` method.

Protobuf type `google.cloud.vision.v1.ListProductsInProductSetResponse`

### [ListProductsInProductSetResponse.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductsInProductSetResponse.Builder)

Response message for the `ListProductsInProductSet` method.

Protobuf type `google.cloud.vision.v1.ListProductsInProductSetResponse`

### [ListProductsRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductsRequest)

Request message for the `ListProducts` method.

Protobuf type `google.cloud.vision.v1.ListProductsRequest`

### [ListProductsRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductsRequest.Builder)

Request message for the `ListProducts` method.

Protobuf type `google.cloud.vision.v1.ListProductsRequest`

### [ListProductsResponse](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductsResponse)

Response message for the `ListProducts` method.

Protobuf type `google.cloud.vision.v1.ListProductsResponse`

### [ListProductsResponse.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductsResponse.Builder)

Response message for the `ListProducts` method.

Protobuf type `google.cloud.vision.v1.ListProductsResponse`

### [ListReferenceImagesRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListReferenceImagesRequest)

Request message for the `ListReferenceImages` method.

Protobuf type `google.cloud.vision.v1.ListReferenceImagesRequest`

### [ListReferenceImagesRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListReferenceImagesRequest.Builder)

Request message for the `ListReferenceImages` method.

Protobuf type `google.cloud.vision.v1.ListReferenceImagesRequest`

### [ListReferenceImagesResponse](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListReferenceImagesResponse)

Response message for the `ListReferenceImages` method.

Protobuf type `google.cloud.vision.v1.ListReferenceImagesResponse`

### [ListReferenceImagesResponse.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListReferenceImagesResponse.Builder)

Response message for the `ListReferenceImages` method.

Protobuf type `google.cloud.vision.v1.ListReferenceImagesResponse`

### [LocalizedObjectAnnotation](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.LocalizedObjectAnnotation)

Set of detected objects with bounding boxes.

Protobuf type `google.cloud.vision.v1.LocalizedObjectAnnotation`

### [LocalizedObjectAnnotation.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.LocalizedObjectAnnotation.Builder)

Set of detected objects with bounding boxes.

Protobuf type `google.cloud.vision.v1.LocalizedObjectAnnotation`

### [LocationInfo](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.LocationInfo)

Detected entity location information.

Protobuf type `google.cloud.vision.v1.LocationInfo`

### [LocationInfo.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.LocationInfo.Builder)

Detected entity location information.

Protobuf type `google.cloud.vision.v1.LocationInfo`

### [LocationName](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.LocationName)

### [LocationName.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.LocationName.Builder)

Builder for projects/{project}/locations/{location}.

### [NormalizedVertex](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.NormalizedVertex)

A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.

Protobuf type `google.cloud.vision.v1.NormalizedVertex`

### [NormalizedVertex.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.NormalizedVertex.Builder)

A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.

Protobuf type `google.cloud.vision.v1.NormalizedVertex`

### [OperationMetadata](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.OperationMetadata)

Contains metadata for the BatchAnnotateImages operation.

Protobuf type `google.cloud.vision.v1.OperationMetadata`

### [OperationMetadata.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.OperationMetadata.Builder)

Contains metadata for the BatchAnnotateImages operation.

Protobuf type `google.cloud.vision.v1.OperationMetadata`

### [OutputConfig](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.OutputConfig)

The desired output location and metadata.

Protobuf type `google.cloud.vision.v1.OutputConfig`

### [OutputConfig.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.OutputConfig.Builder)

The desired output location and metadata.

Protobuf type `google.cloud.vision.v1.OutputConfig`

### [Page](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Page)

Detected page from OCR.

Protobuf type `google.cloud.vision.v1.Page`

### [Page.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Page.Builder)

Detected page from OCR.

Protobuf type `google.cloud.vision.v1.Page`

### [Paragraph](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Paragraph)

Structural unit of text representing a number of words in certain order.

Protobuf type `google.cloud.vision.v1.Paragraph`

### [Paragraph.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Paragraph.Builder)

Structural unit of text representing a number of words in certain order.

Protobuf type `google.cloud.vision.v1.Paragraph`

### [Position](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Position)

A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.

Protobuf type `google.cloud.vision.v1.Position`

### [Position.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Position.Builder)

A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.

Protobuf type `google.cloud.vision.v1.Position`

### [Product](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Product)

A Product contains ReferenceImages.

Protobuf type `google.cloud.vision.v1.Product`

### [Product.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Product.Builder)

A Product contains ReferenceImages.

Protobuf type `google.cloud.vision.v1.Product`

### [Product.KeyValue](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Product.KeyValue)

A product label represented as a key-value pair.

Protobuf type `google.cloud.vision.v1.Product.KeyValue`

### [Product.KeyValue.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Product.KeyValue.Builder)

A product label represented as a key-value pair.

Protobuf type `google.cloud.vision.v1.Product.KeyValue`

### [ProductName](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductName)

### [ProductName.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductName.Builder)

Builder for projects/{project}/locations/{location}/products/{product}.

### [ProductSearchClient](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchClient)

Service Description: Manages Products and ProductSets of reference images for use in product search. It uses the following resource model:

\- The API has a collection of ProductSet resources, named `projects/*/locations/*/productSets/*`, which acts as a way to put different products into groups to limit identification.

In parallel,

\- The API has a collection of Product resources, named `projects/*/locations/*/products/*`

\- Each Product has a collection of ReferenceImage resources, named `projects/*/locations/*/products/*/referenceImages/*`

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ProductSearchClient productSearchClient = ProductSearchClient.create()) {
   LocationName parent = LocationName.of("[PROJECT]", "[LOCATION]");
   ProductSet productSet = ProductSet.newBuilder().build();
   String productSetId = "productSetId1003042158";
   ProductSet response = productSearchClient.createProductSet(parent, productSet, productSetId);
 }
 
```
 

Note: close() needs to be called on the ProductSearchClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of ProductSearchSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ProductSearchSettings productSearchSettings =
     ProductSearchSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 ProductSearchClient productSearchClient = ProductSearchClient.create(productSearchSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ProductSearchSettings productSearchSettings =
     ProductSearchSettings.newBuilder().setEndpoint(myEndpoint).build();
 ProductSearchClient productSearchClient = ProductSearchClient.create(productSearchSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ProductSearchSettings productSearchSettings =
     ProductSearchSettings.newHttpJsonBuilder().build();
 ProductSearchClient productSearchClient = ProductSearchClient.create(productSearchSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

### [ProductSearchClient.ListProductSetsFixedSizeCollection](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchClient.ListProductSetsFixedSizeCollection)

### [ProductSearchClient.ListProductSetsPage](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchClient.ListProductSetsPage)

### [ProductSearchClient.ListProductSetsPagedResponse](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchClient.ListProductSetsPagedResponse)

### [ProductSearchClient.ListProductsFixedSizeCollection](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchClient.ListProductsFixedSizeCollection)

### [ProductSearchClient.ListProductsInProductSetFixedSizeCollection](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchClient.ListProductsInProductSetFixedSizeCollection)

### [ProductSearchClient.ListProductsInProductSetPage](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchClient.ListProductsInProductSetPage)

### [ProductSearchClient.ListProductsInProductSetPagedResponse](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchClient.ListProductsInProductSetPagedResponse)

### [ProductSearchClient.ListProductsPage](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchClient.ListProductsPage)

### [ProductSearchClient.ListProductsPagedResponse](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchClient.ListProductsPagedResponse)

### [ProductSearchClient.ListReferenceImagesFixedSizeCollection](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchClient.ListReferenceImagesFixedSizeCollection)

### [ProductSearchClient.ListReferenceImagesPage](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchClient.ListReferenceImagesPage)

### [ProductSearchClient.ListReferenceImagesPagedResponse](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchClient.ListReferenceImagesPagedResponse)

### [ProductSearchGrpc](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchGrpc)

Manages Products and ProductSets of reference images for use in product search. It uses the following resource model:

-   The API has a collection of ProductSet resources, named `projects/*/locations/*/productSets/*`, which acts as a way to put different products into groups to limit identification. In parallel,
-   The API has a collection of Product resources, named `projects/*/locations/*/products/*`
-   Each Product has a collection of ReferenceImage resources, named `projects/*/locations/*/products/*/referenceImages/*`

### [ProductSearchGrpc.ProductSearchBlockingStub](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchGrpc.ProductSearchBlockingStub)

A stub to allow clients to do synchronous rpc calls to service ProductSearch.

Manages Products and ProductSets of reference images for use in product search. It uses the following resource model:

-   The API has a collection of ProductSet resources, named `projects/*/locations/*/productSets/*`, which acts as a way to put different products into groups to limit identification. In parallel,
-   The API has a collection of Product resources, named `projects/*/locations/*/products/*`
-   Each Product has a collection of ReferenceImage resources, named `projects/*/locations/*/products/*/referenceImages/*`

### [ProductSearchGrpc.ProductSearchFutureStub](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchGrpc.ProductSearchFutureStub)

A stub to allow clients to do ListenableFuture-style rpc calls to service ProductSearch.

Manages Products and ProductSets of reference images for use in product search. It uses the following resource model:

-   The API has a collection of ProductSet resources, named `projects/*/locations/*/productSets/*`, which acts as a way to put different products into groups to limit identification. In parallel,
-   The API has a collection of Product resources, named `projects/*/locations/*/products/*`
-   Each Product has a collection of ReferenceImage resources, named `projects/*/locations/*/products/*/referenceImages/*`

### [ProductSearchGrpc.ProductSearchImplBase](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchGrpc.ProductSearchImplBase)

Base class for the server implementation of the service ProductSearch.

Manages Products and ProductSets of reference images for use in product search. It uses the following resource model:

-   The API has a collection of ProductSet resources, named `projects/*/locations/*/productSets/*`, which acts as a way to put different products into groups to limit identification. In parallel,
-   The API has a collection of Product resources, named `projects/*/locations/*/products/*`
-   Each Product has a collection of ReferenceImage resources, named `projects/*/locations/*/products/*/referenceImages/*`

### [ProductSearchGrpc.ProductSearchStub](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchGrpc.ProductSearchStub)

A stub to allow clients to do asynchronous rpc calls to service ProductSearch.

Manages Products and ProductSets of reference images for use in product search. It uses the following resource model:

-   The API has a collection of ProductSet resources, named `projects/*/locations/*/productSets/*`, which acts as a way to put different products into groups to limit identification. In parallel,
-   The API has a collection of Product resources, named `projects/*/locations/*/products/*`
-   Each Product has a collection of ReferenceImage resources, named `projects/*/locations/*/products/*/referenceImages/*`

### [ProductSearchParams](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchParams)

Parameters for a product search request.

Protobuf type `google.cloud.vision.v1.ProductSearchParams`

### [ProductSearchParams.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchParams.Builder)

Parameters for a product search request.

Protobuf type `google.cloud.vision.v1.ProductSearchParams`

### [ProductSearchProto](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchProto)

### [ProductSearchResults](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchResults)

Results for a product search request.

Protobuf type `google.cloud.vision.v1.ProductSearchResults`

### [ProductSearchResults.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchResults.Builder)

Results for a product search request.

Protobuf type `google.cloud.vision.v1.ProductSearchResults`

### [ProductSearchResults.GroupedResult](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchResults.GroupedResult)

Information about the products similar to a single product in a query image.

Protobuf type `google.cloud.vision.v1.ProductSearchResults.GroupedResult`

### [ProductSearchResults.GroupedResult.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchResults.GroupedResult.Builder)

Information about the products similar to a single product in a query image.

Protobuf type `google.cloud.vision.v1.ProductSearchResults.GroupedResult`

### [ProductSearchResults.ObjectAnnotation](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation)

Prediction for what the object in the bounding box is.

Protobuf type `google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation`

### [ProductSearchResults.ObjectAnnotation.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation.Builder)

Prediction for what the object in the bounding box is.

Protobuf type `google.cloud.vision.v1.ProductSearchResults.ObjectAnnotation`

### [ProductSearchResults.Result](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchResults.Result)

Information about a product.

Protobuf type `google.cloud.vision.v1.ProductSearchResults.Result`

### [ProductSearchResults.Result.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchResults.Result.Builder)

Information about a product.

Protobuf type `google.cloud.vision.v1.ProductSearchResults.Result`

### [ProductSearchServiceProto](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchServiceProto)

### [ProductSearchSettings](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchSettings)

Settings class to configure an instance of [ProductSearchClient](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1p4beta1.ProductSearchClient).

The default instance has everything set to sensible defaults:

-   The default service address (vision.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of createProductSet to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ProductSearchSettings.Builder productSearchSettingsBuilder = ProductSearchSettings.newBuilder();
 productSearchSettingsBuilder
     .createProductSetSettings()
     .setRetrySettings(
         productSearchSettingsBuilder
             .createProductSetSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 ProductSearchSettings productSearchSettings = productSearchSettingsBuilder.build();
 
```
 

### [ProductSearchSettings.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchSettings.Builder)

Builder for ProductSearchSettings.

### [ProductSet](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSet)

A ProductSet contains Products. A ProductSet can contain a maximum of 1 million reference images. If the limit is exceeded, periodic indexing will fail.

Protobuf type `google.cloud.vision.v1.ProductSet`

### [ProductSet.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSet.Builder)

A ProductSet contains Products. A ProductSet can contain a maximum of 1 million reference images. If the limit is exceeded, periodic indexing will fail.

Protobuf type `google.cloud.vision.v1.ProductSet`

### [ProductSetName](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSetName)

### [ProductSetName.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSetName.Builder)

Builder for projects/{project}/locations/{location}/productSets/{product\_set}.

### [ProductSetPurgeConfig](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSetPurgeConfig)

Config to control which ProductSet contains the Products to be deleted.

Protobuf type `google.cloud.vision.v1.ProductSetPurgeConfig`

### [ProductSetPurgeConfig.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSetPurgeConfig.Builder)

Config to control which ProductSet contains the Products to be deleted.

Protobuf type `google.cloud.vision.v1.ProductSetPurgeConfig`

### [Property](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Property)

A `Property` consists of a user-supplied name/value pair.

Protobuf type `google.cloud.vision.v1.Property`

### [Property.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Property.Builder)

A `Property` consists of a user-supplied name/value pair.

Protobuf type `google.cloud.vision.v1.Property`

### [PurgeProductsRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.PurgeProductsRequest)

Request message for the `PurgeProducts` method.

Protobuf type `google.cloud.vision.v1.PurgeProductsRequest`

### [PurgeProductsRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.PurgeProductsRequest.Builder)

Request message for the `PurgeProducts` method.

Protobuf type `google.cloud.vision.v1.PurgeProductsRequest`

### [ReferenceImage](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ReferenceImage)

A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.

Protobuf type `google.cloud.vision.v1.ReferenceImage`

### [ReferenceImage.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ReferenceImage.Builder)

A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.

Protobuf type `google.cloud.vision.v1.ReferenceImage`

### [ReferenceImageName](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ReferenceImageName)

### [ReferenceImageName.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ReferenceImageName.Builder)

Builder for projects/{project}/locations/{location}/products/{product}/referenceImages/{reference\_image}.

### [RemoveProductFromProductSetRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.RemoveProductFromProductSetRequest)

Request message for the `RemoveProductFromProductSet` method.

Protobuf type `google.cloud.vision.v1.RemoveProductFromProductSetRequest`

### [RemoveProductFromProductSetRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.RemoveProductFromProductSetRequest.Builder)

Request message for the `RemoveProductFromProductSet` method.

Protobuf type `google.cloud.vision.v1.RemoveProductFromProductSetRequest`

### [SafeSearchAnnotation](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.SafeSearchAnnotation)

Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).

Protobuf type `google.cloud.vision.v1.SafeSearchAnnotation`

### [SafeSearchAnnotation.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.SafeSearchAnnotation.Builder)

Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).

Protobuf type `google.cloud.vision.v1.SafeSearchAnnotation`

### [Symbol](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Symbol)

A single symbol representation.

Protobuf type `google.cloud.vision.v1.Symbol`

### [Symbol.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Symbol.Builder)

A single symbol representation.

Protobuf type `google.cloud.vision.v1.Symbol`

### [TextAnnotation](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.TextAnnotation)

TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.

Protobuf type `google.cloud.vision.v1.TextAnnotation`

### [TextAnnotation.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.TextAnnotation.Builder)

TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.

Protobuf type `google.cloud.vision.v1.TextAnnotation`

### [TextAnnotation.DetectedBreak](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.TextAnnotation.DetectedBreak)

Detected start or end of a structural component.

Protobuf type `google.cloud.vision.v1.TextAnnotation.DetectedBreak`

### [TextAnnotation.DetectedBreak.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.TextAnnotation.DetectedBreak.Builder)

Detected start or end of a structural component.

Protobuf type `google.cloud.vision.v1.TextAnnotation.DetectedBreak`

### [TextAnnotation.DetectedLanguage](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.TextAnnotation.DetectedLanguage)

Detected language for a structural component.

Protobuf type `google.cloud.vision.v1.TextAnnotation.DetectedLanguage`

### [TextAnnotation.DetectedLanguage.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.TextAnnotation.DetectedLanguage.Builder)

Detected language for a structural component.

Protobuf type `google.cloud.vision.v1.TextAnnotation.DetectedLanguage`

### [TextAnnotation.TextProperty](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.TextAnnotation.TextProperty)

Additional information detected on the structural component.

Protobuf type `google.cloud.vision.v1.TextAnnotation.TextProperty`

### [TextAnnotation.TextProperty.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.TextAnnotation.TextProperty.Builder)

Additional information detected on the structural component.

Protobuf type `google.cloud.vision.v1.TextAnnotation.TextProperty`

### [TextAnnotationProto](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.TextAnnotationProto)

### [TextDetectionParams](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.TextDetectionParams)

Parameters for text detections. This is used to control TEXT\_DETECTION and DOCUMENT\_TEXT\_DETECTION features.

Protobuf type `google.cloud.vision.v1.TextDetectionParams`

### [TextDetectionParams.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.TextDetectionParams.Builder)

Parameters for text detections. This is used to control TEXT\_DETECTION and DOCUMENT\_TEXT\_DETECTION features.

Protobuf type `google.cloud.vision.v1.TextDetectionParams`

### [UpdateProductRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.UpdateProductRequest)

Request message for the `UpdateProduct` method.

Protobuf type `google.cloud.vision.v1.UpdateProductRequest`

### [UpdateProductRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.UpdateProductRequest.Builder)

Request message for the `UpdateProduct` method.

Protobuf type `google.cloud.vision.v1.UpdateProductRequest`

### [UpdateProductSetRequest](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.UpdateProductSetRequest)

Request message for the `UpdateProductSet` method.

Protobuf type `google.cloud.vision.v1.UpdateProductSetRequest`

### [UpdateProductSetRequest.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.UpdateProductSetRequest.Builder)

Request message for the `UpdateProductSet` method.

Protobuf type `google.cloud.vision.v1.UpdateProductSetRequest`

### [Vertex](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Vertex)

A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.

Protobuf type `google.cloud.vision.v1.Vertex`

### [Vertex.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Vertex.Builder)

A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.

Protobuf type `google.cloud.vision.v1.Vertex`

### [WebDetection](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetection)

Relevant information for the image from the Internet.

Protobuf type `google.cloud.vision.v1.WebDetection`

### [WebDetection.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetection.Builder)

Relevant information for the image from the Internet.

Protobuf type `google.cloud.vision.v1.WebDetection`

### [WebDetection.WebEntity](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetection.WebEntity)

Entity deduced from similar images on the Internet.

Protobuf type `google.cloud.vision.v1.WebDetection.WebEntity`

### [WebDetection.WebEntity.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetection.WebEntity.Builder)

Entity deduced from similar images on the Internet.

Protobuf type `google.cloud.vision.v1.WebDetection.WebEntity`

### [WebDetection.WebImage](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetection.WebImage)

Metadata for online images.

Protobuf type `google.cloud.vision.v1.WebDetection.WebImage`

### [WebDetection.WebImage.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetection.WebImage.Builder)

Metadata for online images.

Protobuf type `google.cloud.vision.v1.WebDetection.WebImage`

### [WebDetection.WebLabel](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetection.WebLabel)

Label to provide extra metadata for the web detection.

Protobuf type `google.cloud.vision.v1.WebDetection.WebLabel`

### [WebDetection.WebLabel.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetection.WebLabel.Builder)

Label to provide extra metadata for the web detection.

Protobuf type `google.cloud.vision.v1.WebDetection.WebLabel`

### [WebDetection.WebPage](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetection.WebPage)

Metadata for web pages.

Protobuf type `google.cloud.vision.v1.WebDetection.WebPage`

### [WebDetection.WebPage.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetection.WebPage.Builder)

Metadata for web pages.

Protobuf type `google.cloud.vision.v1.WebDetection.WebPage`

### [WebDetectionParams](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetectionParams)

Parameters for web detection request.

Protobuf type `google.cloud.vision.v1.WebDetectionParams`

### [WebDetectionParams.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetectionParams.Builder)

Parameters for web detection request.

Protobuf type `google.cloud.vision.v1.WebDetectionParams`

### [WebDetectionProto](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetectionProto)

### [Word](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Word)

A word representation.

Protobuf type `google.cloud.vision.v1.Word`

### [Word.Builder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Word.Builder)

A word representation.

Protobuf type `google.cloud.vision.v1.Word`

## Interfaces

### [AddProductToProductSetRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AddProductToProductSetRequestOrBuilder)

### [AnnotateFileRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AnnotateFileRequestOrBuilder)

### [AnnotateFileResponseOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AnnotateFileResponseOrBuilder)

### [AnnotateImageRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AnnotateImageRequestOrBuilder)

### [AnnotateImageResponseOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AnnotateImageResponseOrBuilder)

### [AsyncAnnotateFileRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncAnnotateFileRequestOrBuilder)

### [AsyncAnnotateFileResponseOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncAnnotateFileResponseOrBuilder)

### [AsyncBatchAnnotateFilesRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncBatchAnnotateFilesRequestOrBuilder)

### [AsyncBatchAnnotateFilesResponseOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncBatchAnnotateFilesResponseOrBuilder)

### [AsyncBatchAnnotateImagesRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncBatchAnnotateImagesRequestOrBuilder)

### [AsyncBatchAnnotateImagesResponseOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.AsyncBatchAnnotateImagesResponseOrBuilder)

### [BatchAnnotateFilesRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BatchAnnotateFilesRequestOrBuilder)

### [BatchAnnotateFilesResponseOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BatchAnnotateFilesResponseOrBuilder)

### [BatchAnnotateImagesRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BatchAnnotateImagesRequestOrBuilder)

### [BatchAnnotateImagesResponseOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BatchAnnotateImagesResponseOrBuilder)

### [BatchOperationMetadataOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BatchOperationMetadataOrBuilder)

### [BlockOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BlockOrBuilder)

### [BoundingPolyOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BoundingPolyOrBuilder)

### [ColorInfoOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ColorInfoOrBuilder)

### [CreateProductRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CreateProductRequestOrBuilder)

### [CreateProductSetRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CreateProductSetRequestOrBuilder)

### [CreateReferenceImageRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CreateReferenceImageRequestOrBuilder)

### [CropHintOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CropHintOrBuilder)

### [CropHintsAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CropHintsAnnotationOrBuilder)

### [CropHintsParamsOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.CropHintsParamsOrBuilder)

### [DeleteProductRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.DeleteProductRequestOrBuilder)

### [DeleteProductSetRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.DeleteProductSetRequestOrBuilder)

### [DeleteReferenceImageRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.DeleteReferenceImageRequestOrBuilder)

### [DominantColorsAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.DominantColorsAnnotationOrBuilder)

### [EntityAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.EntityAnnotationOrBuilder)

### [FaceAnnotation.LandmarkOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.FaceAnnotation.LandmarkOrBuilder)

### [FaceAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.FaceAnnotationOrBuilder)

### [FeatureOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.FeatureOrBuilder)

### [GcsDestinationOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.GcsDestinationOrBuilder)

### [GcsSourceOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.GcsSourceOrBuilder)

### [GetProductRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.GetProductRequestOrBuilder)

### [GetProductSetRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.GetProductSetRequestOrBuilder)

### [GetReferenceImageRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.GetReferenceImageRequestOrBuilder)

### [ImageAnnotationContextOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageAnnotationContextOrBuilder)

### [ImageAnnotatorGrpc.AsyncService](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageAnnotatorGrpc.AsyncService)

Service that performs Google Cloud Vision API detection tasks over client images, such as face, landmark, logo, label, and text detection. The ImageAnnotator service returns detected entities from the images.

### [ImageContextOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageContextOrBuilder)

### [ImageOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageOrBuilder)

### [ImagePropertiesOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImagePropertiesOrBuilder)

### [ImageSourceOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImageSourceOrBuilder)

### [ImportProductSetsGcsSourceOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImportProductSetsGcsSourceOrBuilder)

### [ImportProductSetsInputConfigOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImportProductSetsInputConfigOrBuilder)

### [ImportProductSetsRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImportProductSetsRequestOrBuilder)

### [ImportProductSetsResponseOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImportProductSetsResponseOrBuilder)

### [InputConfigOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.InputConfigOrBuilder)

### [LatLongRectOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.LatLongRectOrBuilder)

### [ListProductSetsRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductSetsRequestOrBuilder)

### [ListProductSetsResponseOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductSetsResponseOrBuilder)

### [ListProductsInProductSetRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductsInProductSetRequestOrBuilder)

### [ListProductsInProductSetResponseOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductsInProductSetResponseOrBuilder)

### [ListProductsRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductsRequestOrBuilder)

### [ListProductsResponseOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListProductsResponseOrBuilder)

### [ListReferenceImagesRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListReferenceImagesRequestOrBuilder)

### [ListReferenceImagesResponseOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ListReferenceImagesResponseOrBuilder)

### [LocalizedObjectAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.LocalizedObjectAnnotationOrBuilder)

### [LocationInfoOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.LocationInfoOrBuilder)

### [NormalizedVertexOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.NormalizedVertexOrBuilder)

### [OperationMetadataOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.OperationMetadataOrBuilder)

### [OutputConfigOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.OutputConfigOrBuilder)

### [PageOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.PageOrBuilder)

### [ParagraphOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ParagraphOrBuilder)

### [PositionOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.PositionOrBuilder)

### [Product.KeyValueOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Product.KeyValueOrBuilder)

### [ProductOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductOrBuilder)

### [ProductSearchGrpc.AsyncService](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchGrpc.AsyncService)

Manages Products and ProductSets of reference images for use in product search. It uses the following resource model:

-   The API has a collection of ProductSet resources, named `projects/*/locations/*/productSets/*`, which acts as a way to put different products into groups to limit identification. In parallel,
-   The API has a collection of Product resources, named `projects/*/locations/*/products/*`
-   Each Product has a collection of ReferenceImage resources, named `projects/*/locations/*/products/*/referenceImages/*`

### [ProductSearchParamsOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchParamsOrBuilder)

### [ProductSearchResults.GroupedResultOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchResults.GroupedResultOrBuilder)

### [ProductSearchResults.ObjectAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchResults.ObjectAnnotationOrBuilder)

### [ProductSearchResults.ResultOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchResults.ResultOrBuilder)

### [ProductSearchResultsOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSearchResultsOrBuilder)

### [ProductSetOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSetOrBuilder)

### [ProductSetPurgeConfigOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ProductSetPurgeConfigOrBuilder)

### [PropertyOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.PropertyOrBuilder)

### [PurgeProductsRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.PurgeProductsRequestOrBuilder)

### [ReferenceImageOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ReferenceImageOrBuilder)

### [RemoveProductFromProductSetRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.RemoveProductFromProductSetRequestOrBuilder)

### [SafeSearchAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.SafeSearchAnnotationOrBuilder)

### [SymbolOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.SymbolOrBuilder)

### [TextAnnotation.DetectedBreakOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.TextAnnotation.DetectedBreakOrBuilder)

### [TextAnnotation.DetectedLanguageOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.TextAnnotation.DetectedLanguageOrBuilder)

### [TextAnnotation.TextPropertyOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.TextAnnotation.TextPropertyOrBuilder)

### [TextAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.TextAnnotationOrBuilder)

### [TextDetectionParamsOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.TextDetectionParamsOrBuilder)

### [UpdateProductRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.UpdateProductRequestOrBuilder)

### [UpdateProductSetRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.UpdateProductSetRequestOrBuilder)

### [VertexOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.VertexOrBuilder)

### [WebDetection.WebEntityOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetection.WebEntityOrBuilder)

### [WebDetection.WebImageOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetection.WebImageOrBuilder)

### [WebDetection.WebLabelOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetection.WebLabelOrBuilder)

### [WebDetection.WebPageOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetection.WebPageOrBuilder)

### [WebDetectionOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetectionOrBuilder)

### [WebDetectionParamsOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WebDetectionParamsOrBuilder)

### [WordOrBuilder](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.WordOrBuilder)

## Enums

### [BatchOperationMetadata.State](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.BatchOperationMetadata.State)

Enumerates the possible states that the batch request can be in.

Protobuf enum `google.cloud.vision.v1.BatchOperationMetadata.State`

### [Block.BlockType](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Block.BlockType)

Type of a block (text, image etc) as identified by OCR.

Protobuf enum `google.cloud.vision.v1.Block.BlockType`

### [FaceAnnotation.Landmark.Type](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.FaceAnnotation.Landmark.Type)

Face landmark (feature) type. Left and right are defined from the vantage of the viewer of the image without considering mirror projections typical of photos. So, `LEFT_EYE`, typically, is the person's right eye.

Protobuf enum `google.cloud.vision.v1.FaceAnnotation.Landmark.Type`

### [Feature.Type](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Feature.Type)

Type of Google Cloud Vision API feature to be extracted.

Protobuf enum `google.cloud.vision.v1.Feature.Type`

### [ImportProductSetsInputConfig.SourceCase](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.ImportProductSetsInputConfig.SourceCase)

### [Likelihood](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.Likelihood)

A bucketized representation of likelihood, which is intended to give clients highly stable results across model upgrades.

Protobuf enum `google.cloud.vision.v1.Likelihood`

### [OperationMetadata.State](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.OperationMetadata.State)

Batch operation states.

Protobuf enum `google.cloud.vision.v1.OperationMetadata.State`

### [PurgeProductsRequest.TargetCase](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.PurgeProductsRequest.TargetCase)

### [TextAnnotation.DetectedBreak.BreakType](/java/docs/reference/google-cloud-vision/3.19.0/com.google.cloud.vision.v1.TextAnnotation.DetectedBreak.BreakType)

Enum to denote the type of break found. New line, space etc.

Protobuf enum `google.cloud.vision.v1.TextAnnotation.DetectedBreak.BreakType`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
