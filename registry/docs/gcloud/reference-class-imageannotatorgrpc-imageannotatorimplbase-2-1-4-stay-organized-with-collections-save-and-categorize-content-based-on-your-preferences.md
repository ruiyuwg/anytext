-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ImageAnnotatorGrpc.ImageAnnotatorImplBase (2.1.4) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

```
public abstract static class ImageAnnotatorGrpc.ImageAnnotatorImplBase implements BindableService
```

Service that performs Google Cloud Vision API detection tasks over client images, such as face, landmark, logo, label, and text detection. The ImageAnnotator service returns detected entities from the images.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> ImageAnnotatorGrpc.ImageAnnotatorImplBase

## Implements

io.grpc.BindableService

## Inherited Members

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Constructors

### ImageAnnotatorImplBase()

```
public ImageAnnotatorImplBase()
```

## Methods

### asyncBatchAnnotateFiles(AsyncBatchAnnotateFilesRequest request, StreamObserver<Operation> responseObserver)

```
public void asyncBatchAnnotateFiles(AsyncBatchAnnotateFilesRequest request, StreamObserver<Operation> responseObserver)
```

Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

**Parameters**

**Name**

**Description**

request

`[AsyncBatchAnnotateFilesRequest](/java/docs/reference/google-cloud-vision/2.1.4/com.google.cloud.vision.v1.AsyncBatchAnnotateFilesRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### asyncBatchAnnotateImages(AsyncBatchAnnotateImagesRequest request, StreamObserver<Operation> responseObserver)

```
public void asyncBatchAnnotateImages(AsyncBatchAnnotateImagesRequest request, StreamObserver<Operation> responseObserver)
```

Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

**Parameters**

**Name**

**Description**

request

`[AsyncBatchAnnotateImagesRequest](/java/docs/reference/google-cloud-vision/2.1.4/com.google.cloud.vision.v1.AsyncBatchAnnotateImagesRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### batchAnnotateFiles(BatchAnnotateFilesRequest request, StreamObserver<BatchAnnotateFilesResponse> responseObserver)

```
public void batchAnnotateFiles(BatchAnnotateFilesRequest request, StreamObserver<BatchAnnotateFilesResponse> responseObserver)
```

Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.

**Parameters**

**Name**

**Description**

request

`[BatchAnnotateFilesRequest](/java/docs/reference/google-cloud-vision/2.1.4/com.google.cloud.vision.v1.BatchAnnotateFilesRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[BatchAnnotateFilesResponse](/java/docs/reference/google-cloud-vision/2.1.4/com.google.cloud.vision.v1.BatchAnnotateFilesResponse)>`  

### batchAnnotateImages(BatchAnnotateImagesRequest request, StreamObserver<BatchAnnotateImagesResponse> responseObserver)

```
public void batchAnnotateImages(BatchAnnotateImagesRequest request, StreamObserver<BatchAnnotateImagesResponse> responseObserver)
```

Run image detection and annotation for a batch of images.

**Parameters**

**Name**

**Description**

request

`[BatchAnnotateImagesRequest](/java/docs/reference/google-cloud-vision/2.1.4/com.google.cloud.vision.v1.BatchAnnotateImagesRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[BatchAnnotateImagesResponse](/java/docs/reference/google-cloud-vision/2.1.4/com.google.cloud.vision.v1.BatchAnnotateImagesResponse)>`  

### bindService()

```
public final ServerServiceDefinition bindService()
```

**Returns**

**Type**

**Description**

io.grpc.ServerServiceDefinition

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
