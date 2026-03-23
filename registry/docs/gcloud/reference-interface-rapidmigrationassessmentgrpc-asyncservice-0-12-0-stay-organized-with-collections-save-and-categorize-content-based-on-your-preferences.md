-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface RapidMigrationAssessmentGrpc.AsyncService (0.12.0) Stay organized with collections Save and categorize content based on your preferences.

0.70.0 (latest) 0.68.0 0.66.0 0.65.0 0.63.0 0.61.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.53.0 0.51.0 0.50.0 0.47.0 0.46.0 0.45.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static interface RapidMigrationAssessmentGrpc.AsyncService
```

Service describing handlers for resources.

## Methods

### createAnnotation(CreateAnnotationRequest request, StreamObserver<Operation> responseObserver)

```
public default void createAnnotation(CreateAnnotationRequest request, StreamObserver<Operation> responseObserver)
```

Creates an Annotation

**Parameters**

**Name**

**Description**

`request`

`[CreateAnnotationRequest](/java/docs/reference/google-cloud-rapidmigrationassessment/0.12.0/com.google.cloud.rapidmigrationassessment.v1.CreateAnnotationRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### createCollector(CreateCollectorRequest request, StreamObserver<Operation> responseObserver)

```
public default void createCollector(CreateCollectorRequest request, StreamObserver<Operation> responseObserver)
```

Create a Collector to manage the on-prem appliance which collects information about Customer assets.

**Parameters**

**Name**

**Description**

`request`

`[CreateCollectorRequest](/java/docs/reference/google-cloud-rapidmigrationassessment/0.12.0/com.google.cloud.rapidmigrationassessment.v1.CreateCollectorRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteCollector(DeleteCollectorRequest request, StreamObserver<Operation> responseObserver)

```
public default void deleteCollector(DeleteCollectorRequest request, StreamObserver<Operation> responseObserver)
```

Deletes a single Collector - changes state of collector to "Deleting". Background jobs does final deletion thorugh producer api.

**Parameters**

**Name**

**Description**

`request`

`[DeleteCollectorRequest](/java/docs/reference/google-cloud-rapidmigrationassessment/0.12.0/com.google.cloud.rapidmigrationassessment.v1.DeleteCollectorRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### getAnnotation(GetAnnotationRequest request, StreamObserver<Annotation> responseObserver)

```
public default void getAnnotation(GetAnnotationRequest request, StreamObserver<Annotation> responseObserver)
```

Gets details of a single Annotation.

**Parameters**

**Name**

**Description**

`request`

`[GetAnnotationRequest](/java/docs/reference/google-cloud-rapidmigrationassessment/0.12.0/com.google.cloud.rapidmigrationassessment.v1.GetAnnotationRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Annotation](/java/docs/reference/google-cloud-rapidmigrationassessment/0.12.0/com.google.cloud.rapidmigrationassessment.v1.Annotation)>`  

### getCollector(GetCollectorRequest request, StreamObserver<Collector> responseObserver)

```
public default void getCollector(GetCollectorRequest request, StreamObserver<Collector> responseObserver)
```

Gets details of a single Collector.

**Parameters**

**Name**

**Description**

`request`

`[GetCollectorRequest](/java/docs/reference/google-cloud-rapidmigrationassessment/0.12.0/com.google.cloud.rapidmigrationassessment.v1.GetCollectorRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Collector](/java/docs/reference/google-cloud-rapidmigrationassessment/0.12.0/com.google.cloud.rapidmigrationassessment.v1.Collector)>`  

### listCollectors(ListCollectorsRequest request, StreamObserver<ListCollectorsResponse> responseObserver)

```
public default void listCollectors(ListCollectorsRequest request, StreamObserver<ListCollectorsResponse> responseObserver)
```

Lists Collectors in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[ListCollectorsRequest](/java/docs/reference/google-cloud-rapidmigrationassessment/0.12.0/com.google.cloud.rapidmigrationassessment.v1.ListCollectorsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListCollectorsResponse](/java/docs/reference/google-cloud-rapidmigrationassessment/0.12.0/com.google.cloud.rapidmigrationassessment.v1.ListCollectorsResponse)>`  

### pauseCollector(PauseCollectorRequest request, StreamObserver<Operation> responseObserver)

```
public default void pauseCollector(PauseCollectorRequest request, StreamObserver<Operation> responseObserver)
```

Pauses the given collector.

**Parameters**

**Name**

**Description**

`request`

`[PauseCollectorRequest](/java/docs/reference/google-cloud-rapidmigrationassessment/0.12.0/com.google.cloud.rapidmigrationassessment.v1.PauseCollectorRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### registerCollector(RegisterCollectorRequest request, StreamObserver<Operation> responseObserver)

```
public default void registerCollector(RegisterCollectorRequest request, StreamObserver<Operation> responseObserver)
```

Registers the given collector.

**Parameters**

**Name**

**Description**

`request`

`[RegisterCollectorRequest](/java/docs/reference/google-cloud-rapidmigrationassessment/0.12.0/com.google.cloud.rapidmigrationassessment.v1.RegisterCollectorRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### resumeCollector(ResumeCollectorRequest request, StreamObserver<Operation> responseObserver)

```
public default void resumeCollector(ResumeCollectorRequest request, StreamObserver<Operation> responseObserver)
```

Resumes the given collector.

**Parameters**

**Name**

**Description**

`request`

`[ResumeCollectorRequest](/java/docs/reference/google-cloud-rapidmigrationassessment/0.12.0/com.google.cloud.rapidmigrationassessment.v1.ResumeCollectorRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### updateCollector(UpdateCollectorRequest request, StreamObserver<Operation> responseObserver)

```
public default void updateCollector(UpdateCollectorRequest request, StreamObserver<Operation> responseObserver)
```

Updates the parameters of a single Collector.

**Parameters**

**Name**

**Description**

`request`

`[UpdateCollectorRequest](/java/docs/reference/google-cloud-rapidmigrationassessment/0.12.0/com.google.cloud.rapidmigrationassessment.v1.UpdateCollectorRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
