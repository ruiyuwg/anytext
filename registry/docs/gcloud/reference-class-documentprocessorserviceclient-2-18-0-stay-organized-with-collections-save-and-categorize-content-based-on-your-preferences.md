-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class DocumentProcessorServiceClient (2.18.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

Service to call Document AI to process documents according to the processor's definition.

Processors are built using state-of-the-art Google AI such as natural language, computer vision, and translation to extract structured information from unstructured or semi-structured documents.

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### DocumentProcessorServiceClient(DocumentProcessorServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`DocumentProcessorServiceClient const &`  

### DocumentProcessorServiceClient(DocumentProcessorServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`DocumentProcessorServiceClient &&`  

### DocumentProcessorServiceClient(std::shared\_ptr< DocumentProcessorServiceConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< DocumentProcessorServiceConnection >`  

`opts`

`Options`  

## Operators

### operator=(DocumentProcessorServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`DocumentProcessorServiceClient const &`  

**Returns**

**Type**

**Description**

`DocumentProcessorServiceClient &`

### operator=(DocumentProcessorServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`DocumentProcessorServiceClient &&`  

**Returns**

**Type**

**Description**

`DocumentProcessorServiceClient &`

## Functions

### ProcessDocument(std::string const &, Options)

Processes a single document.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The resource name of the \[Processor\]\[google.cloud.documentai.v1.Processor\] or \[ProcessorVersion\]\[google.cloud.documentai.v1.ProcessorVersion\] to use for processing. If a \[Processor\]\[google.cloud.documentai.v1.Processor\] is specified, the server will use its \[default version\]\[google.cloud.documentai.v1.Processor.default\_processor\_version\]. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::documentai::v1::ProcessResponse >`

the result of the RPC. The response message type ([google.cloud.documentai.v1.ProcessResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L448)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ProcessDocument(google::cloud::documentai::v1::ProcessRequest const &, Options)

Processes a single document.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::ProcessRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.ProcessRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L364). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::documentai::v1::ProcessResponse >`

the result of the RPC. The response message type ([google.cloud.documentai.v1.ProcessResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L448)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### BatchProcessDocuments(std::string const &, Options)

LRO endpoint to batch process many documents.

The output is written to Cloud Storage as JSON in the \[Document\] format.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The resource name of \[Processor\]\[google.cloud.documentai.v1.Processor\] or \[ProcessorVersion\]\[google.cloud.documentai.v1.ProcessorVersion\]. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::BatchProcessResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.BatchProcessResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L491) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### BatchProcessDocuments(google::cloud::documentai::v1::BatchProcessRequest const &, Options)

LRO endpoint to batch process many documents.

The output is written to Cloud Storage as JSON in the \[Document\] format.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::BatchProcessRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.BatchProcessRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L459). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::BatchProcessResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.BatchProcessResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L491) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### FetchProcessorTypes(std::string const &, Options)

Fetches processor types.

Note that we don't use [ListProcessorTypes](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L105) here, because it isn't paginated.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The location of processor types to list. Format: `projects/{project}/locations/{location}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::documentai::v1::FetchProcessorTypesResponse >`

the result of the RPC. The response message type ([google.cloud.documentai.v1.FetchProcessorTypesResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L574)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### FetchProcessorTypes(google::cloud::documentai::v1::FetchProcessorTypesRequest const &, Options)

Fetches processor types.

Note that we don't use [ListProcessorTypes](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L105) here, because it isn't paginated.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::FetchProcessorTypesRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.FetchProcessorTypesRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L560). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::documentai::v1::FetchProcessorTypesResponse >`

the result of the RPC. The response message type ([google.cloud.documentai.v1.FetchProcessorTypesResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L574)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListProcessorTypes(std::string const &, Options)

Lists the processor types that exist.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The location of processor types to list. Format: `projects/{project}/locations/{location}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::documentai::v1::ProcessorType >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.documentai.v1.ProcessorType](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/processor_type.proto#L32), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListProcessorTypes(google::cloud::documentai::v1::ListProcessorTypesRequest, Options)

Lists the processor types that exist.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::ListProcessorTypesRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.ListProcessorTypesRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L583). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::documentai::v1::ProcessorType >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.documentai.v1.ProcessorType](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/processor_type.proto#L32), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetProcessorType(std::string const &, Options)

Gets a processor type detail.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The processor type resource name.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::documentai::v1::ProcessorType >`

the result of the RPC. The response message type ([google.cloud.documentai.v1.ProcessorType](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/processor_type.proto#L32)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetProcessorType(google::cloud::documentai::v1::GetProcessorTypeRequest const &, Options)

Gets a processor type detail.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::GetProcessorTypeRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.GetProcessorTypeRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L648). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::documentai::v1::ProcessorType >`

the result of the RPC. The response message type ([google.cloud.documentai.v1.ProcessorType](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/processor_type.proto#L32)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListProcessors(std::string const &, Options)

Lists all processors which belong to this project.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The parent (project and location) which owns this collection of Processors. Format: `projects/{project}/locations/{location}`

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::documentai::v1::Processor >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.documentai.v1.Processor](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/processor.proto#L131), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListProcessors(google::cloud::documentai::v1::ListProcessorsRequest, Options)

Lists all processors which belong to this project.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::ListProcessorsRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.ListProcessorsRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L614). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::documentai::v1::Processor >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.documentai.v1.Processor](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/processor.proto#L131), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetProcessor(std::string const &, Options)

Gets a processor detail.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The processor resource name.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::documentai::v1::Processor >`

the result of the RPC. The response message type ([google.cloud.documentai.v1.Processor](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/processor.proto#L131)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetProcessor(google::cloud::documentai::v1::GetProcessorRequest const &, Options)

Gets a processor detail.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::GetProcessorRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.GetProcessorRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L661). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::documentai::v1::Processor >`

the result of the RPC. The response message type ([google.cloud.documentai.v1.Processor](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/processor.proto#L131)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### TrainProcessorVersion(std::string const &, google::cloud::documentai::v1::ProcessorVersion const &, Options)

Trains a new processor version.

Operation metadata is returned as [TrainProcessorVersionMetadata](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L996).

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The parent (project, location and processor) to create the new version for. Format: `projects/{project}/locations/{location}/processors/{processor}`.

`processor_version`

`google::cloud::documentai::v1::ProcessorVersion const &`  

Required. The processor version to be created.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::TrainProcessorVersionResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.TrainProcessorVersionResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L990) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### TrainProcessorVersion(google::cloud::documentai::v1::TrainProcessorVersionRequest const &, Options)

Trains a new processor version.

Operation metadata is returned as [TrainProcessorVersionMetadata](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L996).

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::TrainProcessorVersionRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.TrainProcessorVersionRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L928). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::TrainProcessorVersionResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.TrainProcessorVersionResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L990) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetProcessorVersion(std::string const &, Options)

Gets a processor version detail.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The processor resource name.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::documentai::v1::ProcessorVersion >`

the result of the RPC. The response message type ([google.cloud.documentai.v1.ProcessorVersion](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/processor.proto#L37)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetProcessorVersion(google::cloud::documentai::v1::GetProcessorVersionRequest const &, Options)

Gets a processor version detail.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::GetProcessorVersionRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.GetProcessorVersionRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L674). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::documentai::v1::ProcessorVersion >`

the result of the RPC. The response message type ([google.cloud.documentai.v1.ProcessorVersion](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/processor.proto#L37)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListProcessorVersions(std::string const &, Options)

Lists all versions of a processor.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The parent (project, location and processor) to list all versions. Format: `projects/{project}/locations/{location}/processors/{processor}`

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::documentai::v1::ProcessorVersion >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.documentai.v1.ProcessorVersion](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/processor.proto#L37), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListProcessorVersions(google::cloud::documentai::v1::ListProcessorVersionsRequest, Options)

Lists all versions of a processor.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::ListProcessorVersionsRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.ListProcessorVersionsRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L685). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::documentai::v1::ProcessorVersion >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.documentai.v1.ProcessorVersion](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/processor.proto#L37), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteProcessorVersion(std::string const &, Options)

Deletes the processor version, all artifacts under the processor version will be deleted.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The processor version resource name to be deleted.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::DeleteProcessorVersionMetadata > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.DeleteProcessorVersionMetadata](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L733) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteProcessorVersion(google::cloud::documentai::v1::DeleteProcessorVersionRequest const &, Options)

Deletes the processor version, all artifacts under the processor version will be deleted.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::DeleteProcessorVersionRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.DeleteProcessorVersionRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L720). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::DeleteProcessorVersionMetadata > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.DeleteProcessorVersionMetadata](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L733) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeployProcessorVersion(std::string const &, Options)

Deploys the processor version.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The processor version resource name to be deployed.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::DeployProcessorVersionResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.DeployProcessorVersionResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L754) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeployProcessorVersion(google::cloud::documentai::v1::DeployProcessorVersionRequest const &, Options)

Deploys the processor version.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::DeployProcessorVersionRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.DeployProcessorVersionRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L741). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::DeployProcessorVersionResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.DeployProcessorVersionResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L754) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UndeployProcessorVersion(std::string const &, Options)

Undeploys the processor version.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The processor version resource name to be undeployed.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::UndeployProcessorVersionResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.UndeployProcessorVersionResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L780) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UndeployProcessorVersion(google::cloud::documentai::v1::UndeployProcessorVersionRequest const &, Options)

Undeploys the processor version.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::UndeployProcessorVersionRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.UndeployProcessorVersionRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L767). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::UndeployProcessorVersionResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.UndeployProcessorVersionResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L780) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### CreateProcessor(std::string const &, google::cloud::documentai::v1::Processor const &, Options)

Creates a processor from the [ProcessorType](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/processor_type.proto#L32) provided.

The processor will be at `ENABLED` state by default after its creation.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The parent (project and location) under which to create the processor. Format: `projects/{project}/locations/{location}`

`processor`

`google::cloud::documentai::v1::Processor const &`  

Required. The processor to be created, requires \[Processor.type\]\[google.cloud.documentai.v1.Processor.type\] and \[Processor.display\_name\]\]\[\] to be set. Also, the \[Processor.kms\_key\_name\]\[google.cloud.documentai.v1.Processor.kms\_key\_name\] field must be set if the processor is under CMEK.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::documentai::v1::Processor >`

the result of the RPC. The response message type ([google.cloud.documentai.v1.Processor](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/processor.proto#L131)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateProcessor(google::cloud::documentai::v1::CreateProcessorRequest const &, Options)

Creates a processor from the [ProcessorType](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/processor_type.proto#L32) provided.

The processor will be at `ENABLED` state by default after its creation.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::CreateProcessorRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.CreateProcessorRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L795). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::documentai::v1::Processor >`

the result of the RPC. The response message type ([google.cloud.documentai.v1.Processor](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/processor.proto#L131)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### DeleteProcessor(std::string const &, Options)

Deletes the processor, unloads all deployed model artifacts if it was enabled and then deletes all artifacts associated with this processor.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The processor resource name to be deleted.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::DeleteProcessorMetadata > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.DeleteProcessorMetadata](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L829) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteProcessor(google::cloud::documentai::v1::DeleteProcessorRequest const &, Options)

Deletes the processor, unloads all deployed model artifacts if it was enabled and then deletes all artifacts associated with this processor.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::DeleteProcessorRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.DeleteProcessorRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L816). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::DeleteProcessorMetadata > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.DeleteProcessorMetadata](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L829) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### EnableProcessor(google::cloud::documentai::v1::EnableProcessorRequest const &, Options)

Enables a processor.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::EnableProcessorRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.EnableProcessorRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L837). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::EnableProcessorResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.EnableProcessorResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L850) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DisableProcessor(google::cloud::documentai::v1::DisableProcessorRequest const &, Options)

Disables a processor.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::DisableProcessorRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.DisableProcessorRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L863). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::DisableProcessorResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.DisableProcessorResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L876) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### SetDefaultProcessorVersion(google::cloud::documentai::v1::SetDefaultProcessorVersionRequest const &, Options)

Set the default (active) version of a [Processor](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/processor.proto#L131) that will be used in [ProcessDocument](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L62) and [BatchProcessDocuments](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L76).

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::SetDefaultProcessorVersionRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.SetDefaultProcessorVersionRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L889). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::SetDefaultProcessorVersionResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.SetDefaultProcessorVersionResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L915) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ReviewDocument(std::string const &, Options)

Send a document for Human Review.

The input document should be processed by the specified processor.

**Parameters**

**Name**

**Description**

`human_review_config`

`std::string const &`  

Required. The resource name of the \[HumanReviewConfig\]\[google.cloud.documentai.v1.HumanReviewConfig\] that the document will be reviewed with.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::ReviewDocumentResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.ReviewDocumentResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L1070) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ReviewDocument(google::cloud::documentai::v1::ReviewDocumentRequest const &, Options)

Send a document for Human Review.

The input document should be processed by the specified processor.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::ReviewDocumentRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.ReviewDocumentRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L1030). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::ReviewDocumentResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.ReviewDocumentResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L1070) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### EvaluateProcessorVersion(std::string const &, Options)

Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.

**Parameters**

**Name**

**Description**

`processor_version`

`std::string const &`  

Required. The resource name of the \[ProcessorVersion\]\[google.cloud.documentai.v1.ProcessorVersion\] to evaluate. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::EvaluateProcessorVersionResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.EvaluateProcessorVersionResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L1137) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### EvaluateProcessorVersion(google::cloud::documentai::v1::EvaluateProcessorVersionRequest const &, Options)

Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::EvaluateProcessorVersionRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.EvaluateProcessorVersionRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L1108). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::documentai::v1::EvaluateProcessorVersionResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.documentai.v1.EvaluateProcessorVersionResponse](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L1137) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetEvaluation(std::string const &, Options)

Retrieves a specific evaluation.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The resource name of the [Evaluation](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/evaluation.proto#L48) to get. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}/evaluations/{evaluation}`

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::documentai::v1::Evaluation >`

the result of the RPC. The response message type ([google.cloud.documentai.v1.Evaluation](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/evaluation.proto#L48)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetEvaluation(google::cloud::documentai::v1::GetEvaluationRequest const &, Options)

Retrieves a specific evaluation.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::GetEvaluationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.GetEvaluationRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L1143). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::documentai::v1::Evaluation >`

the result of the RPC. The response message type ([google.cloud.documentai.v1.Evaluation](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/evaluation.proto#L48)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListEvaluations(std::string const &, Options)

Retrieves a set of evaluations for a given processor version.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The resource name of the \[ProcessorVersion\]\[google.cloud.documentai.v1.ProcessorVersion\] to list evaluations for. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::documentai::v1::Evaluation >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.documentai.v1.Evaluation](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/evaluation.proto#L48), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListEvaluations(google::cloud::documentai::v1::ListEvaluationsRequest, Options)

Retrieves a set of evaluations for a given processor version.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::documentai::v1::ListEvaluationsRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.documentai.v1.ListEvaluationsRequest](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/document_processor_service.proto#L1157). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::documentai::v1::Evaluation >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.documentai.v1.Evaluation](https://github.com/googleapis/googleapis/blob/4a94b9e4403f958f65077f43863302c4ba4597da/google/cloud/documentai/v1/evaluation.proto#L48), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
