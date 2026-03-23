-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class PredictionServiceClient (2.32.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

AutoML Prediction API.

On any input that is documented to expect a string parameter in snake\_case or dash-case, either of those cases is accepted.

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### PredictionServiceClient(PredictionServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`PredictionServiceClient const &`  

### PredictionServiceClient(PredictionServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`PredictionServiceClient &&`  

### PredictionServiceClient(std::shared\_ptr< PredictionServiceConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< PredictionServiceConnection >`  

`opts`

`Options`  

## Operators

### operator=(PredictionServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`PredictionServiceClient const &`  

**Returns**

**Type**

**Description**

`PredictionServiceClient &`

### operator=(PredictionServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`PredictionServiceClient &&`  

**Returns**

**Type**

**Description**

`PredictionServiceClient &`

## Functions

### Predict(std::string const &, google::cloud::automl::v1::ExamplePayload const &, std::map< std::string, std::string > const &, Options)

Perform an online prediction.

The prediction result is directly returned in the response. Available for following ML scenarios, and their expected request payloads:

AutoML Vision Classification

-   An image in .JPEG, .GIF or .PNG format, image\_bytes up to 30MB.

AutoML Vision Object Detection

-   An image in .JPEG, .GIF or .PNG format, image\_bytes up to 30MB.

AutoML Natural Language Classification

-   A TextSnippet up to 60,000 characters, UTF-8 encoded or a document in .PDF, .TIF or .TIFF format with size upto 2MB.

AutoML Natural Language Entity Extraction

-   A TextSnippet up to 10,000 characters, UTF-8 NFC encoded or a document in .PDF, .TIF or .TIFF format with size upto 20MB.

AutoML Natural Language Sentiment Analysis

-   A TextSnippet up to 60,000 characters, UTF-8 encoded or a document in .PDF, .TIF or .TIFF format with size upto 2MB.

AutoML Translation

-   A TextSnippet up to 25,000 characters, UTF-8 encoded.

AutoML Tables

-   A row with column values matching the columns of the model, up to 5MB. Not available for FORECASTING `prediction_type`.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. Name of the model requested to serve the prediction.

`payload`

`google::cloud::automl::v1::ExamplePayload const &`  

Required. Payload to perform a prediction on. The payload must match the problem type that the model was trained to solve.

`params`

`std::map< std::string, std::string > const &`  

Additional domain-specific parameters, any string must be up to 25000 characters long.  
For more information, see [PredictRequest](https://github.com/googleapis/googleapis/blob/d675ec222c431e3346ba8aaf0027392fe8b3d90c/google/cloud/automl/v1/prediction_service.proto#L117).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::automl::v1::PredictResponse >`

the result of the RPC. The response message type ([google.cloud.automl.v1.PredictResponse](https://github.com/googleapis/googleapis/blob/d675ec222c431e3346ba8aaf0027392fe8b3d90c/google/cloud/automl/v1/prediction_service.proto#L164)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### Predict(google::cloud::automl::v1::PredictRequest const &, Options)

Perform an online prediction.

The prediction result is directly returned in the response. Available for following ML scenarios, and their expected request payloads:

AutoML Vision Classification

-   An image in .JPEG, .GIF or .PNG format, image\_bytes up to 30MB.

AutoML Vision Object Detection

-   An image in .JPEG, .GIF or .PNG format, image\_bytes up to 30MB.

AutoML Natural Language Classification

-   A TextSnippet up to 60,000 characters, UTF-8 encoded or a document in .PDF, .TIF or .TIFF format with size upto 2MB.

AutoML Natural Language Entity Extraction

-   A TextSnippet up to 10,000 characters, UTF-8 NFC encoded or a document in .PDF, .TIF or .TIFF format with size upto 20MB.

AutoML Natural Language Sentiment Analysis

-   A TextSnippet up to 60,000 characters, UTF-8 encoded or a document in .PDF, .TIF or .TIFF format with size upto 2MB.

AutoML Translation

-   A TextSnippet up to 25,000 characters, UTF-8 encoded.

AutoML Tables

-   A row with column values matching the columns of the model, up to 5MB. Not available for FORECASTING `prediction_type`.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::automl::v1::PredictRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.automl.v1.PredictRequest](https://github.com/googleapis/googleapis/blob/d675ec222c431e3346ba8aaf0027392fe8b3d90c/google/cloud/automl/v1/prediction_service.proto#L117). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::automl::v1::PredictResponse >`

the result of the RPC. The response message type ([google.cloud.automl.v1.PredictResponse](https://github.com/googleapis/googleapis/blob/d675ec222c431e3346ba8aaf0027392fe8b3d90c/google/cloud/automl/v1/prediction_service.proto#L164)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### BatchPredict(std::string const &, google::cloud::automl::v1::BatchPredictInputConfig const &, google::cloud::automl::v1::BatchPredictOutputConfig const &, std::map< std::string, std::string > const &, Options)

Perform a batch prediction.

Unlike the online [Predict](https://github.com/googleapis/googleapis/blob/d675ec222c431e3346ba8aaf0027392fe8b3d90c/google/cloud/automl/v1/prediction_service.proto#L80), batch prediction result won't be immediately available in the response. Instead, a long running operation object is returned. User can poll the operation result via [GetOperation](https://github.com/googleapis/googleapis/blob/d675ec222c431e3346ba8aaf0027392fe8b3d90c/google/longrunning/operations.proto#L70) method. Once the operation is done, [BatchPredictResult](https://github.com/googleapis/googleapis/blob/d675ec222c431e3346ba8aaf0027392fe8b3d90c/google/cloud/automl/v1/prediction_service.proto#L308) is returned in the [response](https://github.com/googleapis/googleapis/blob/d675ec222c431e3346ba8aaf0027392fe8b3d90c/google/longrunning/operations.proto#L154) field. Available for following ML scenarios:

-   AutoML Vision Classification
-   AutoML Vision Object Detection
-   AutoML Video Intelligence Classification
-   AutoML Video Intelligence Object Tracking \* AutoML Natural Language Classification
-   AutoML Natural Language Entity Extraction
-   AutoML Natural Language Sentiment Analysis
-   AutoML Tables

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. Name of the model requested to serve the batch prediction.

`input_config`

`google::cloud::automl::v1::BatchPredictInputConfig const &`  

Required. The input configuration for batch prediction.

`output_config`

`google::cloud::automl::v1::BatchPredictOutputConfig const &`  

Required. The Configuration specifying where output predictions should be written.

`params`

`std::map< std::string, std::string > const &`  

Additional domain-specific parameters for the predictions, any string must be up to 25000 characters long.  
For more information, see [BatchPredictRequest](https://github.com/googleapis/googleapis/blob/d675ec222c431e3346ba8aaf0027392fe8b3d90c/google/cloud/automl/v1/prediction_service.proto#L202).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::automl::v1::BatchPredictResult > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.automl.v1.BatchPredictResult](https://github.com/googleapis/googleapis/blob/d675ec222c431e3346ba8aaf0027392fe8b3d90c/google/cloud/automl/v1/prediction_service.proto#L308) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### BatchPredict(NoAwaitTag, std::string const &, google::cloud::automl::v1::BatchPredictInputConfig const &, google::cloud::automl::v1::BatchPredictOutputConfig const &, std::map< std::string, std::string > const &, Options)

Perform a batch prediction.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`name`

`std::string const &`  

`input_config`

`google::cloud::automl::v1::BatchPredictInputConfig const &`  

`output_config`

`google::cloud::automl::v1::BatchPredictOutputConfig const &`  

`params`

`std::map< std::string, std::string > const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### BatchPredict(google::cloud::automl::v1::BatchPredictRequest const &, Options)

Perform a batch prediction.

Unlike the online [Predict](https://github.com/googleapis/googleapis/blob/d675ec222c431e3346ba8aaf0027392fe8b3d90c/google/cloud/automl/v1/prediction_service.proto#L80), batch prediction result won't be immediately available in the response. Instead, a long running operation object is returned. User can poll the operation result via [GetOperation](https://github.com/googleapis/googleapis/blob/d675ec222c431e3346ba8aaf0027392fe8b3d90c/google/longrunning/operations.proto#L70) method. Once the operation is done, [BatchPredictResult](https://github.com/googleapis/googleapis/blob/d675ec222c431e3346ba8aaf0027392fe8b3d90c/google/cloud/automl/v1/prediction_service.proto#L308) is returned in the [response](https://github.com/googleapis/googleapis/blob/d675ec222c431e3346ba8aaf0027392fe8b3d90c/google/longrunning/operations.proto#L154) field. Available for following ML scenarios:

-   AutoML Vision Classification
-   AutoML Vision Object Detection
-   AutoML Video Intelligence Classification
-   AutoML Video Intelligence Object Tracking \* AutoML Natural Language Classification
-   AutoML Natural Language Entity Extraction
-   AutoML Natural Language Sentiment Analysis
-   AutoML Tables

**Parameters**

**Name**

**Description**

`request`

`google::cloud::automl::v1::BatchPredictRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.automl.v1.BatchPredictRequest](https://github.com/googleapis/googleapis/blob/d675ec222c431e3346ba8aaf0027392fe8b3d90c/google/cloud/automl/v1/prediction_service.proto#L202). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::automl::v1::BatchPredictResult > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.automl.v1.BatchPredictResult](https://github.com/googleapis/googleapis/blob/d675ec222c431e3346ba8aaf0027392fe8b3d90c/google/cloud/automl/v1/prediction_service.proto#L308) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### BatchPredict(NoAwaitTag, google::cloud::automl::v1::BatchPredictRequest const &, Options)

Perform a batch prediction.

Specifying the [`NoAwaitTag`](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1NoAwaitTag.html) immediately returns the \[`google::longrunning::Operation`\] that corresponds to the Long Running Operation that has been started. No polling for operation status occurs.

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::automl::v1::BatchPredictRequest const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### BatchPredict(google::longrunning::Operation const &, Options)

Perform a batch prediction.

This method accepts a `google::longrunning::Operation` that corresponds to a previously started Long Running Operation (LRO) and polls the status of the LRO in the background.

**Parameters**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

`opts`

`Options`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::automl::v1::BatchPredictResult > >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
