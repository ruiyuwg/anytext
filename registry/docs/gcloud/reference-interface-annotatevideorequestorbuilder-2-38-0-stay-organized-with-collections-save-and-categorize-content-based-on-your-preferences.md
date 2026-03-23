-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface AnnotateVideoRequestOrBuilder (2.38.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.13 2.1.0 2.0.27

```
public interface AnnotateVideoRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getFeatures(int index)

```
public abstract Feature getFeatures(int index)
```

Required. Requested video annotation features.

`repeated .google.cloud.videointelligence.v1p3beta1.Feature features = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[Feature](/java/docs/reference/google-cloud-video-intelligence/2.38.0/com.google.cloud.videointelligence.v1p3beta1.Feature)`

The features at the given index.

### getFeaturesCount()

```
public abstract int getFeaturesCount()
```

Required. Requested video annotation features.

`repeated .google.cloud.videointelligence.v1p3beta1.Feature features = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of features.

### getFeaturesList()

```
public abstract List<Feature> getFeaturesList()
```

Required. Requested video annotation features.

`repeated .google.cloud.videointelligence.v1p3beta1.Feature features = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Feature](/java/docs/reference/google-cloud-video-intelligence/2.38.0/com.google.cloud.videointelligence.v1p3beta1.Feature)>`

A list containing the features.

### getFeaturesValue(int index)

```
public abstract int getFeaturesValue(int index)
```

Required. Requested video annotation features.

`repeated .google.cloud.videointelligence.v1p3beta1.Feature features = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire of features at the given index.

### getFeaturesValueList()

```
public abstract List<Integer> getFeaturesValueList()
```

Required. Requested video annotation features.

`repeated .google.cloud.videointelligence.v1p3beta1.Feature features = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)>`

A list containing the enum numeric values on the wire for features.

### getInputContent()

```
public abstract ByteString getInputContent()
```

The video data bytes. If unset, the input video(s) should be specified via the `input_uri`. If set, `input_uri` must be unset.

`bytes input_content = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The inputContent.

### getInputUri()

```
public abstract String getInputUri()
```

Input video location. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. URIs must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID\_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints). To identify multiple videos, a video URI may include wildcards in the `object-id`. Supported wildcards: '\*' to match 0 or more characters; '?' to match 1 character. If unset, the input video should be embedded in the request as `input_content`. If set, `input_content` must be unset.

`string input_uri = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The inputUri.

### getInputUriBytes()

```
public abstract ByteString getInputUriBytes()
```

Input video location. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. URIs must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID\_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints). To identify multiple videos, a video URI may include wildcards in the `object-id`. Supported wildcards: '\*' to match 0 or more characters; '?' to match 1 character. If unset, the input video should be embedded in the request as `input_content`. If set, `input_content` must be unset.

`string input_uri = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for inputUri.

### getLocationId()

```
public abstract String getLocationId()
```

Optional. Cloud region where annotation should take place. Supported cloud regions are: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region is specified, the region will be determined based on video file location.

`string location_id = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The locationId.

### getLocationIdBytes()

```
public abstract ByteString getLocationIdBytes()
```

Optional. Cloud region where annotation should take place. Supported cloud regions are: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region is specified, the region will be determined based on video file location.

`string location_id = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for locationId.

### getOutputUri()

```
public abstract String getOutputUri()
```

Optional. Location where the output (in JSON format) should be stored. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. These must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID\_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints).

`string output_uri = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The outputUri.

### getOutputUriBytes()

```
public abstract ByteString getOutputUriBytes()
```

Optional. Location where the output (in JSON format) should be stored. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. These must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID\_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints).

`string output_uri = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for outputUri.

### getVideoContext()

```
public abstract VideoContext getVideoContext()
```

Additional video context and/or feature-specific parameters.

`.google.cloud.videointelligence.v1p3beta1.VideoContext video_context = 3;`

**Returns**

**Type**

**Description**

`[VideoContext](/java/docs/reference/google-cloud-video-intelligence/2.38.0/com.google.cloud.videointelligence.v1p3beta1.VideoContext)`

The videoContext.

### getVideoContextOrBuilder()

```
public abstract VideoContextOrBuilder getVideoContextOrBuilder()
```

Additional video context and/or feature-specific parameters.

`.google.cloud.videointelligence.v1p3beta1.VideoContext video_context = 3;`

**Returns**

**Type**

**Description**

`[VideoContextOrBuilder](/java/docs/reference/google-cloud-video-intelligence/2.38.0/com.google.cloud.videointelligence.v1p3beta1.VideoContextOrBuilder)`

### hasVideoContext()

```
public abstract boolean hasVideoContext()
```

Additional video context and/or feature-specific parameters.

`.google.cloud.videointelligence.v1p3beta1.VideoContext video_context = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the videoContext field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
