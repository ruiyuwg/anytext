-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class LivestreamServiceClient (2.24.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

Using Live Stream API, you can generate live streams in the various renditions and streaming formats.

The streaming format include HTTP Live Streaming (HLS) and Dynamic Adaptive Streaming over HTTP (DASH). You can send a source stream in the various ways, including Real-Time Messaging Protocol (RTMP) and Secure Reliable Transport (SRT).

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### LivestreamServiceClient(LivestreamServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`LivestreamServiceClient const &`  

### LivestreamServiceClient(LivestreamServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`LivestreamServiceClient &&`  

### LivestreamServiceClient(std::shared\_ptr< LivestreamServiceConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< LivestreamServiceConnection >`  

`opts`

`Options`  

## Operators

### operator=(LivestreamServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`LivestreamServiceClient const &`  

**Returns**

**Type**

**Description**

`LivestreamServiceClient &`

### operator=(LivestreamServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`LivestreamServiceClient &&`  

**Returns**

**Type**

**Description**

`LivestreamServiceClient &`

## Functions

### CreateChannel(std::string const &, google::cloud::video::livestream::v1::Channel const &, std::string const &, Options)

Creates a channel with the provided unique ID in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The parent location for the resource, in the form of: `projects/{project}/locations/{location}`.

`channel`

`google::cloud::video::livestream::v1::Channel const &`  

Required. The channel resource to be created.

`channel_id`

`std::string const &`  

Required. The ID of the channel resource to be created. This value must be 1-63 characters, begin and end with `[a-z0-9]`, could contain dashes (-) in between.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::Channel > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.Channel](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L128) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### CreateChannel(google::cloud::video::livestream::v1::CreateChannelRequest const &, Options)

Creates a channel with the provided unique ID in the specified region.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::CreateChannelRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.CreateChannelRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L404). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::Channel > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.Channel](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L128) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListChannels(std::string const &, Options)

Returns a list of all channels in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The parent location for the resource, in the form of: `projects/{project}/locations/{location}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::video::livestream::v1::Channel >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.video.livestream.v1.Channel](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L128), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListChannels(google::cloud::video::livestream::v1::ListChannelsRequest, Options)

Returns a list of all channels in the specified region.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::ListChannelsRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.ListChannelsRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L439). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::video::livestream::v1::Channel >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.video.livestream.v1.Channel](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L128), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetChannel(std::string const &, Options)

Returns the specified channel.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the channel resource, in the form of: `projects/{project}/locations/{location}/channels/{channelId}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::video::livestream::v1::Channel >`

the result of the RPC. The response message type ([google.cloud.video.livestream.v1.Channel](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L128)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetChannel(google::cloud::video::livestream::v1::GetChannelRequest const &, Options)

Returns the specified channel.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::GetChannelRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.GetChannelRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L481). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::video::livestream::v1::Channel >`

the result of the RPC. The response message type ([google.cloud.video.livestream.v1.Channel](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L128)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### DeleteChannel(std::string const &, Options)

Deletes the specified channel.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the channel resource, in the form of: `projects/{project}/locations/{location}/channels/{channelId}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::OperationMetadata > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.OperationMetadata](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L893) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteChannel(google::cloud::video::livestream::v1::DeleteChannelRequest const &, Options)

Deletes the specified channel.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::DeleteChannelRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.DeleteChannelRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L493). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::OperationMetadata > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.OperationMetadata](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L893) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UpdateChannel(google::cloud::video::livestream::v1::Channel const &, google::protobuf::FieldMask const &, Options)

Updates the specified channel.

**Parameters**

**Name**

**Description**

`channel`

`google::cloud::video::livestream::v1::Channel const &`  

Required. The channel resource to be updated.

`update_mask`

`google::protobuf::FieldMask const &`  

Field mask is used to specify the fields to be overwritten in the Channel resource by the update. You can only update the following fields:  

-   [`inputAttachments`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#inputattachment)
-   [`inputConfig`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#inputconfig)
-   [`output`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#output)
-   [`elementaryStreams`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#elementarystream)
-   [`muxStreams`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#muxstream)
-   [`manifests`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#manifest)
-   [`spriteSheets`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#spritesheet)
-   [`logConfig`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#logconfig)
-   [`timecodeConfig`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#timecodeconfig)
-   [`encryptions`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels#encryption)  
    The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask.  
    If the mask is not present, then each field from the list above is updated if the field appears in the request payload. To unset a field, add the field to the update mask and remove it from the request payload.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::Channel > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.Channel](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L128) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UpdateChannel(google::cloud::video::livestream::v1::UpdateChannelRequest const &, Options)

Updates the specified channel.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::UpdateChannelRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.UpdateChannelRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L526). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::Channel > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.Channel](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L128) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### StartChannel(std::string const &, Options)

Starts the specified channel.

Part of the video pipeline will be created only when the StartChannel request is received by the server.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the channel resource, in the form of: `projects/{project}/locations/{location}/channels/{channelId}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::ChannelOperationResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.ChannelOperationResponse](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L890) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### StartChannel(google::cloud::video::livestream::v1::StartChannelRequest const &, Options)

Starts the specified channel.

Part of the video pipeline will be created only when the StartChannel request is received by the server.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::StartChannelRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.StartChannelRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L569). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::ChannelOperationResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.ChannelOperationResponse](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L890) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### StopChannel(std::string const &, Options)

Stops the specified channel.

Part of the video pipeline will be released when the StopChannel request is received by the server.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the channel resource, in the form of: `projects/{project}/locations/{location}/channels/{channelId}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::ChannelOperationResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.ChannelOperationResponse](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L890) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### StopChannel(google::cloud::video::livestream::v1::StopChannelRequest const &, Options)

Stops the specified channel.

Part of the video pipeline will be released when the StopChannel request is received by the server.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::StopChannelRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.StopChannelRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L596). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::ChannelOperationResponse > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.ChannelOperationResponse](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L890) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### CreateInput(std::string const &, google::cloud::video::livestream::v1::Input const &, std::string const &, Options)

Creates an input with the provided unique ID in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The parent location for the resource, in the form of: `projects/{project}/locations/{location}`.

`input`

`google::cloud::video::livestream::v1::Input const &`  

Required. The input resource to be created.

`input_id`

`std::string const &`  

Required. The ID of the input resource to be created. This value must be 1-63 characters, begin and end with `[a-z0-9]`, could contain dashes (-) in between.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::Input > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.Input](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L36) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### CreateInput(google::cloud::video::livestream::v1::CreateInputRequest const &, Options)

Creates an input with the provided unique ID in the specified region.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::CreateInputRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.CreateInputRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L623). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::Input > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.Input](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L36) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListInputs(std::string const &, Options)

Returns a list of all inputs in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The parent location for the resource, in the form of: `projects/{project}/locations/{location}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::video::livestream::v1::Input >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.video.livestream.v1.Input](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L36), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListInputs(google::cloud::video::livestream::v1::ListInputsRequest, Options)

Returns a list of all inputs in the specified region.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::ListInputsRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.ListInputsRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L658). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::video::livestream::v1::Input >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.video.livestream.v1.Input](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L36), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetInput(std::string const &, Options)

Returns the specified input.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the input resource, in the form of: `projects/{project}/locations/{location}/inputs/{inputId}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::video::livestream::v1::Input >`

the result of the RPC. The response message type ([google.cloud.video.livestream.v1.Input](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L36)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetInput(google::cloud::video::livestream::v1::GetInputRequest const &, Options)

Returns the specified input.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::GetInputRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.GetInputRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L700). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::video::livestream::v1::Input >`

the result of the RPC. The response message type ([google.cloud.video.livestream.v1.Input](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L36)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### DeleteInput(std::string const &, Options)

Deletes the specified input.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the input resource, in the form of: `projects/{project}/locations/{location}/inputs/{inputId}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::OperationMetadata > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.OperationMetadata](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L893) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteInput(google::cloud::video::livestream::v1::DeleteInputRequest const &, Options)

Deletes the specified input.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::DeleteInputRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.DeleteInputRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L712). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::OperationMetadata > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.OperationMetadata](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L893) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UpdateInput(google::cloud::video::livestream::v1::Input const &, google::protobuf::FieldMask const &, Options)

Updates the specified input.

**Parameters**

**Name**

**Description**

`input`

`google::cloud::video::livestream::v1::Input const &`  

Required. The input resource to be updated.

`update_mask`

`google::protobuf::FieldMask const &`  

Field mask is used to specify the fields to be overwritten in the Input resource by the update. You can only update the following fields:  

-   [`preprocessingConfig`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.inputs#PreprocessingConfig)
-   [`securityRules`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.inputs#SecurityRule)  
    The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask.  
    If the mask is not present, then each field from the list above is updated if the field appears in the request payload. To unset a field, add the field to the update mask and remove it from the request payload.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::Input > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.Input](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L36) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UpdateInput(google::cloud::video::livestream::v1::UpdateInputRequest const &, Options)

Updates the specified input.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::UpdateInputRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.UpdateInputRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L739). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::Input > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.Input](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L36) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### CreateEvent(std::string const &, google::cloud::video::livestream::v1::Event const &, std::string const &, Options)

Creates an event with the provided unique ID in the specified channel.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The parent channel for the resource, in the form of: `projects/{project}/locations/{location}/channels/{channelId}`.

`event`

`google::cloud::video::livestream::v1::Event const &`  

Required. The event resource to be created.

`event_id`

`std::string const &`  

Required. The ID of the event resource to be created. This value must be 1-63 characters, begin and end with `[a-z0-9]`, could contain dashes (-) in between.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::video::livestream::v1::Event >`

the result of the RPC. The response message type ([google.cloud.video.livestream.v1.Event](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L390)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateEvent(google::cloud::video::livestream::v1::CreateEventRequest const &, Options)

Creates an event with the provided unique ID in the specified channel.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::CreateEventRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.CreateEventRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L774). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::video::livestream::v1::Event >`

the result of the RPC. The response message type ([google.cloud.video.livestream.v1.Event](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L390)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListEvents(std::string const &, Options)

Returns a list of all events in the specified channel.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The parent channel for the resource, in the form of: `projects/{project}/locations/{location}/channels/{channelId}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::video::livestream::v1::Event >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.video.livestream.v1.Event](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L390), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListEvents(google::cloud::video::livestream::v1::ListEventsRequest, Options)

Returns a list of all events in the specified channel.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::ListEventsRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.ListEventsRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L809). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::video::livestream::v1::Event >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.video.livestream.v1.Event](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L390), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetEvent(std::string const &, Options)

Returns the specified event.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the event resource, in the form of: `projects/{project}/locations/{location}/channels/{channelId}/events/{eventId}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::video::livestream::v1::Event >`

the result of the RPC. The response message type ([google.cloud.video.livestream.v1.Event](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L390)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetEvent(google::cloud::video::livestream::v1::GetEventRequest const &, Options)

Returns the specified event.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::GetEventRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.GetEventRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L851). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::video::livestream::v1::Event >`

the result of the RPC. The response message type ([google.cloud.video.livestream.v1.Event](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L390)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### DeleteEvent(std::string const &, Options)

Deletes the specified event.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the event resource, in the form of: `projects/{project}/locations/{location}/channels/{channelId}/events/{eventId}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### DeleteEvent(google::cloud::video::livestream::v1::DeleteEventRequest const &, Options)

Deletes the specified event.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::DeleteEventRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.DeleteEventRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L863). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### CreateAsset(std::string const &, google::cloud::video::livestream::v1::Asset const &, std::string const &, Options)

Creates a Asset with the provided unique ID in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The parent location for the resource, in the form of: `projects/{project}/locations/{location}`.

`asset`

`google::cloud::video::livestream::v1::Asset const &`  

Required. The asset resource to be created.

`asset_id`

`std::string const &`  

Required. The ID of the asset resource to be created. This value must be 1-63 characters, begin and end with `[a-z0-9]`, could contain dashes (-) in between.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::Asset > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.Asset](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L525) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### CreateAsset(google::cloud::video::livestream::v1::CreateAssetRequest const &, Options)

Creates a Asset with the provided unique ID in the specified region.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::CreateAssetRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.CreateAssetRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L293). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::Asset > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.Asset](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L525) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteAsset(std::string const &, Options)

Deletes the specified asset if it is not used.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the asset resource, in the form of: `projects/{project}/locations/{location}/assets/{assetId}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::OperationMetadata > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.OperationMetadata](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L893) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteAsset(google::cloud::video::livestream::v1::DeleteAssetRequest const &, Options)

Deletes the specified asset if it is not used.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::DeleteAssetRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.DeleteAssetRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L328). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::OperationMetadata > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.OperationMetadata](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L893) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetAsset(std::string const &, Options)

Returns the specified asset.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. Name of the resource, in the following form: `projects/{project}/locations/{location}/assets/{asset}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::video::livestream::v1::Asset >`

the result of the RPC. The response message type ([google.cloud.video.livestream.v1.Asset](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L525)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetAsset(google::cloud::video::livestream::v1::GetAssetRequest const &, Options)

Returns the specified asset.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::GetAssetRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.GetAssetRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L392). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::video::livestream::v1::Asset >`

the result of the RPC. The response message type ([google.cloud.video.livestream.v1.Asset](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L525)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListAssets(std::string const &, Options)

Returns a list of all assets in the specified region.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The parent location for the resource, in the form of: `projects/{project}/locations/{location}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::video::livestream::v1::Asset >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.video.livestream.v1.Asset](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L525), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListAssets(google::cloud::video::livestream::v1::ListAssetsRequest, Options)

Returns a list of all assets in the specified region.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::ListAssetsRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.ListAssetsRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L355). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::video::livestream::v1::Asset >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.video.livestream.v1.Asset](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L525), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### GetPool(std::string const &, Options)

Returns the specified pool.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the pool resource, in the form of: `projects/{project}/locations/{location}/pools/{poolId}`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::video::livestream::v1::Pool >`

the result of the RPC. The response message type ([google.cloud.video.livestream.v1.Pool](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L692)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetPool(google::cloud::video::livestream::v1::GetPoolRequest const &, Options)

Returns the specified pool.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::GetPoolRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.GetPoolRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L920). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::video::livestream::v1::Pool >`

the result of the RPC. The response message type ([google.cloud.video.livestream.v1.Pool](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L692)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdatePool(google::cloud::video::livestream::v1::Pool const &, google::protobuf::FieldMask const &, Options)

Updates the specified pool.

**Parameters**

**Name**

**Description**

`pool`

`google::cloud::video::livestream::v1::Pool const &`  

Required. The pool resource to be updated.

`update_mask`

`google::protobuf::FieldMask const &`  

Field mask is used to specify the fields to be overwritten in the Pool resource by the update. You can only update the following fields:  

-   `networkConfig`  
    The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::Pool > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.Pool](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L692) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### UpdatePool(google::cloud::video::livestream::v1::UpdatePoolRequest const &, Options)

Updates the specified pool.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::video::livestream::v1::UpdatePoolRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.video.livestream.v1.UpdatePoolRequest](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/service.proto#L930). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::video::livestream::v1::Pool > >`

A [`future`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1future.html) that becomes satisfied when the LRO ([Long Running Operation](https://google.aip.dev/151)) completes or the polling policy in effect for this call is exhausted. The future is satisfied with an error if the LRO completes with an error or the polling policy is exhausted. In this case the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) returned by the future contains the error. If the LRO completes successfully the value of the future contains the LRO's result. For this RPC the result is a [google.cloud.video.livestream.v1.Pool](https://github.com/googleapis/googleapis/blob/5a0ae652df1ef39b7849bf2bd6ba417376ce3204/google/cloud/video/livestream/v1/resources.proto#L692) proto message. The C++ class representing this message is created by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
