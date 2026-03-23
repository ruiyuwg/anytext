-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# google-cloud-vision overview (3.11.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

### [com.google.cloud.vision.v1](/java/docs/reference/google-cloud-vision/3.11.0/com.google.cloud.vision.v1)

A client to Cloud Vision API

The interfaces provided are listed below, along with usage samples.

## ImageAnnotatorClient

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
 

## ProductSearchClient

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
 

### [com.google.cloud.vision.v1.stub](/java/docs/reference/google-cloud-vision/3.11.0/com.google.cloud.vision.v1.stub)

### [com.google.cloud.vision.v1p1beta1](/java/docs/reference/google-cloud-vision/3.11.0/com.google.cloud.vision.v1p1beta1)

A client to Cloud Vision API

The interfaces provided are listed below, along with usage samples.

## ImageAnnotatorClient

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
 

### [com.google.cloud.vision.v1p1beta1.stub](/java/docs/reference/google-cloud-vision/3.11.0/com.google.cloud.vision.v1p1beta1.stub)

### [com.google.cloud.vision.v1p2beta1](/java/docs/reference/google-cloud-vision/3.11.0/com.google.cloud.vision.v1p2beta1)

A client to Cloud Vision API

The interfaces provided are listed below, along with usage samples.

## ImageAnnotatorClient

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
 

### [com.google.cloud.vision.v1p2beta1.stub](/java/docs/reference/google-cloud-vision/3.11.0/com.google.cloud.vision.v1p2beta1.stub)

### [com.google.cloud.vision.v1p3beta1](/java/docs/reference/google-cloud-vision/3.11.0/com.google.cloud.vision.v1p3beta1)

A client to Cloud Vision API

The interfaces provided are listed below, along with usage samples.

## ImageAnnotatorClient

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
 

## ProductSearchClient

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
 

### [com.google.cloud.vision.v1p3beta1.stub](/java/docs/reference/google-cloud-vision/3.11.0/com.google.cloud.vision.v1p3beta1.stub)

### [com.google.cloud.vision.v1p4beta1](/java/docs/reference/google-cloud-vision/3.11.0/com.google.cloud.vision.v1p4beta1)

A client to Cloud Vision API

The interfaces provided are listed below, along with usage samples.

## ImageAnnotatorClient

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
 

## ProductSearchClient

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
 

### [com.google.cloud.vision.v1p4beta1.stub](/java/docs/reference/google-cloud-vision/3.11.0/com.google.cloud.vision.v1p4beta1.stub)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
