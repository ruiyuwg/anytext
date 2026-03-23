-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class GrafeasClient (2.16.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

[Grafeas](https://grafeas.io) API.

Retrieves analysis results of Cloud components such as Docker container images.

Analysis results are stored as a series of occurrences. An `Occurrence` contains information about a specific analysis instance on a resource. An occurrence refers to a `Note`. A note contains details describing the analysis and is generally stored in a separate project, called a `Provider`. Multiple occurrences can refer to the same note.

For example, an SSL vulnerability could affect multiple images. In this case, there would be one note for the vulnerability and an occurrence for each image with the vulnerability referring to that note.

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### GrafeasClient(GrafeasClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`GrafeasClient const &`  

### GrafeasClient(GrafeasClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`GrafeasClient &&`  

### GrafeasClient(std::shared\_ptr< GrafeasConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< GrafeasConnection >`  

`opts`

`Options`  

## Operators

### operator=(GrafeasClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`GrafeasClient const &`  

**Returns**

**Type**

**Description**

`GrafeasClient &`

### operator=(GrafeasClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`GrafeasClient &&`  

**Returns**

**Type**

**Description**

`GrafeasClient &`

## Functions

### GetOccurrence(std::string const &, Options)

Gets the specified occurrence.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::Occurrence >`

the result of the RPC. The response message type ([grafeas.v1.Occurrence](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L195)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetOccurrence(grafeas::v1::GetOccurrenceRequest const &, Options)

Gets the specified occurrence.

**Parameters**

**Name**

**Description**

`request`

`grafeas::v1::GetOccurrenceRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [grafeas.v1.GetOccurrenceRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L324). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::Occurrence >`

the result of the RPC. The response message type ([grafeas.v1.Occurrence](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L195)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListOccurrences(std::string const &, std::string const &, Options)

Lists occurrences for the specified project.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`.

`filter`

`std::string const &`  

The filter expression.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< grafeas::v1::Occurrence >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [grafeas.v1.Occurrence](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L195), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListOccurrences(grafeas::v1::ListOccurrencesRequest, Options)

Lists occurrences for the specified project.

**Parameters**

**Name**

**Description**

`request`

`grafeas::v1::ListOccurrencesRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [grafeas.v1.ListOccurrencesRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L334). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< grafeas::v1::Occurrence >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [grafeas.v1.Occurrence](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L195), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteOccurrence(std::string const &, Options)

Deletes the specified occurrence.

For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### DeleteOccurrence(grafeas::v1::DeleteOccurrenceRequest const &, Options)

Deletes the specified occurrence.

For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.

**Parameters**

**Name**

**Description**

`request`

`grafeas::v1::DeleteOccurrenceRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [grafeas.v1.DeleteOccurrenceRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L364). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### CreateOccurrence(std::string const &, grafeas::v1::Occurrence const &, Options)

Creates a new occurrence.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created.

`occurrence`

`grafeas::v1::Occurrence const &`  

The occurrence to create.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::Occurrence >`

the result of the RPC. The response message type ([grafeas.v1.Occurrence](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L195)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateOccurrence(grafeas::v1::CreateOccurrenceRequest const &, Options)

Creates a new occurrence.

**Parameters**

**Name**

**Description**

`request`

`grafeas::v1::CreateOccurrenceRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [grafeas.v1.CreateOccurrenceRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L374). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::Occurrence >`

the result of the RPC. The response message type ([grafeas.v1.Occurrence](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L195)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### BatchCreateOccurrences(std::string const &, std::vector< grafeas::v1::Occurrence > const &, Options)

Creates new occurrences in batch.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created.

`occurrences`

`std::vector< grafeas::v1::Occurrence > const &`  

The occurrences to create. Max allowed length is 1000.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::BatchCreateOccurrencesResponse >`

the result of the RPC. The response message type ([grafeas.v1.BatchCreateOccurrencesResponse](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L544)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### BatchCreateOccurrences(grafeas::v1::BatchCreateOccurrencesRequest const &, Options)

Creates new occurrences in batch.

**Parameters**

**Name**

**Description**

`request`

`grafeas::v1::BatchCreateOccurrencesRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [grafeas.v1.BatchCreateOccurrencesRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L531). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::BatchCreateOccurrencesResponse >`

the result of the RPC. The response message type ([grafeas.v1.BatchCreateOccurrencesResponse](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L544)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateOccurrence(std::string const &, grafeas::v1::Occurrence const &, google::protobuf::FieldMask const &, Options)

Updates the specified occurrence.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.

`occurrence`

`grafeas::v1::Occurrence const &`  

The updated occurrence.

`update_mask`

`google::protobuf::FieldMask const &`  

The fields to update.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::Occurrence >`

the result of the RPC. The response message type ([grafeas.v1.Occurrence](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L195)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateOccurrence(grafeas::v1::UpdateOccurrenceRequest const &, Options)

Updates the specified occurrence.

**Parameters**

**Name**

**Description**

`request`

`grafeas::v1::UpdateOccurrenceRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [grafeas.v1.UpdateOccurrenceRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L386). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::Occurrence >`

the result of the RPC. The response message type ([grafeas.v1.Occurrence](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L195)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetOccurrenceNote(std::string const &, Options)

Gets the note attached to the specified occurrence.

Consumer projects can use this method to get a note that belongs to a provider project.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::Note >`

the result of the RPC. The response message type ([grafeas.v1.Note](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L259)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetOccurrenceNote(grafeas::v1::GetOccurrenceNoteRequest const &, Options)

Gets the note attached to the specified occurrence.

Consumer projects can use this method to get a note that belongs to a provider project.

**Parameters**

**Name**

**Description**

`request`

`grafeas::v1::GetOccurrenceNoteRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [grafeas.v1.GetOccurrenceNoteRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L410). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::Note >`

the result of the RPC. The response message type ([grafeas.v1.Note](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L259)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetNote(std::string const &, Options)

Gets the specified note.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::Note >`

the result of the RPC. The response message type ([grafeas.v1.Note](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L259)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetNote(grafeas::v1::GetNoteRequest const &, Options)

Gets the specified note.

**Parameters**

**Name**

**Description**

`request`

`grafeas::v1::GetNoteRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [grafeas.v1.GetNoteRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L400). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::Note >`

the result of the RPC. The response message type ([grafeas.v1.Note](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L259)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListNotes(std::string const &, std::string const &, Options)

Lists notes for the specified project.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

The name of the project to list notes for in the form of `projects/[PROJECT_ID]`.

`filter`

`std::string const &`  

The filter expression.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< grafeas::v1::Note >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [grafeas.v1.Note](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L259), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListNotes(grafeas::v1::ListNotesRequest, Options)

Lists notes for the specified project.

**Parameters**

**Name**

**Description**

`request`

`grafeas::v1::ListNotesRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [grafeas.v1.ListNotesRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L420). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< grafeas::v1::Note >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [grafeas.v1.Note](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L259), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteNote(std::string const &, Options)

Deletes the specified note.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### DeleteNote(grafeas::v1::DeleteNoteRequest const &, Options)

Deletes the specified note.

**Parameters**

**Name**

**Description**

`request`

`grafeas::v1::DeleteNoteRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [grafeas.v1.DeleteNoteRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L450). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### CreateNote(std::string const &, std::string const &, grafeas::v1::Note const &, Options)

Creates a new note.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created.

`note_id`

`std::string const &`  

The ID to use for this note.

`note`

`grafeas::v1::Note const &`  

The note to create.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::Note >`

the result of the RPC. The response message type ([grafeas.v1.Note](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L259)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateNote(grafeas::v1::CreateNoteRequest const &, Options)

Creates a new note.

**Parameters**

**Name**

**Description**

`request`

`grafeas::v1::CreateNoteRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [grafeas.v1.CreateNoteRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L460). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::Note >`

the result of the RPC. The response message type ([grafeas.v1.Note](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L259)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### BatchCreateNotes(std::string const &, std::map< std::string, grafeas::v1::Note > const &, Options)

Creates new notes in batch.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created.

`notes`

`std::map< std::string, grafeas::v1::Note > const &`  

The notes to create. Max allowed length is 1000.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::BatchCreateNotesResponse >`

the result of the RPC. The response message type ([grafeas.v1.BatchCreateNotesResponse](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L525)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### BatchCreateNotes(grafeas::v1::BatchCreateNotesRequest const &, Options)

Creates new notes in batch.

**Parameters**

**Name**

**Description**

`request`

`grafeas::v1::BatchCreateNotesRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [grafeas.v1.BatchCreateNotesRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L512). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::BatchCreateNotesResponse >`

the result of the RPC. The response message type ([grafeas.v1.BatchCreateNotesResponse](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L525)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateNote(std::string const &, grafeas::v1::Note const &, google::protobuf::FieldMask const &, Options)

Updates the specified note.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.

`note`

`grafeas::v1::Note const &`  

The updated note.

`update_mask`

`google::protobuf::FieldMask const &`  

The fields to update.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::Note >`

the result of the RPC. The response message type ([grafeas.v1.Note](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L259)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateNote(grafeas::v1::UpdateNoteRequest const &, Options)

Updates the specified note.

**Parameters**

**Name**

**Description**

`request`

`grafeas::v1::UpdateNoteRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [grafeas.v1.UpdateNoteRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L474). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< grafeas::v1::Note >`

the result of the RPC. The response message type ([grafeas.v1.Note](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L259)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListNoteOccurrences(std::string const &, std::string const &, Options)

Lists occurrences referencing the specified note.

Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.

`filter`

`std::string const &`  

The filter expression.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< grafeas::v1::Occurrence >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [grafeas.v1.Occurrence](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L195), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListNoteOccurrences(grafeas::v1::ListNoteOccurrencesRequest, Options)

Lists occurrences referencing the specified note.

Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.

**Parameters**

**Name**

**Description**

`request`

`grafeas::v1::ListNoteOccurrencesRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [grafeas.v1.ListNoteOccurrencesRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L488). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< grafeas::v1::Occurrence >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [grafeas.v1.Occurrence](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/grafeas/v1/grafeas.proto#L195), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
