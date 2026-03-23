-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface AssetOrBuilder (0.48.0) Stay organized with collections Save and categorize content based on your preferences.

0.89.0 (latest) 0.87.0 0.85.0 0.84.0 0.82.0 0.80.0 0.78.0 0.77.0 0.76.0 0.75.0 0.74.0 0.72.0 0.70.0 0.69.0 0.66.0 0.65.0 0.64.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.8 0.3.0

```
public interface AssetOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

User-defined key/value metadata.

`map<string, string> labels = 4;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getCrc32C()

```
public abstract String getCrc32C()
```

Based64-encoded CRC32c checksum of the asset file. For more information, see the crc32c checksum of the [Cloud Storage Objects resource](https://cloud.google.com/storage/docs/json_api/v1/objects). If crc32c is omitted or left empty when the asset is created, this field is filled by the crc32c checksum of the Cloud Storage object indicated by \[VideoAsset.uri\] or \[ImageAsset.uri\]. If crc32c is set, the asset can't be created if the crc32c value does not match with the crc32c checksum of the Cloud Storage object indicated by \[VideoAsset.uri\] or \[ImageAsset.uri\].

`string crc32c = 7;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The crc32c.

### getCrc32CBytes()

```
public abstract ByteString getCrc32CBytes()
```

Based64-encoded CRC32c checksum of the asset file. For more information, see the crc32c checksum of the [Cloud Storage Objects resource](https://cloud.google.com/storage/docs/json_api/v1/objects). If crc32c is omitted or left empty when the asset is created, this field is filled by the crc32c checksum of the Cloud Storage object indicated by \[VideoAsset.uri\] or \[ImageAsset.uri\]. If crc32c is set, the asset can't be created if the crc32c value does not match with the crc32c checksum of the Cloud Storage object indicated by \[VideoAsset.uri\] or \[ImageAsset.uri\].

`string crc32c = 7;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for crc32c.

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Output only. The creation time.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. The creation time.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getError()

```
public abstract Status getError()
```

Output only. Only present when `state` is `ERROR`. The reason for the error state of the asset.

`.google.rpc.Status error = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`com.google.rpc.Status`

The error.

### getErrorOrBuilder()

```
public abstract StatusOrBuilder getErrorOrBuilder()
```

Output only. Only present when `state` is `ERROR`. The reason for the error state of the asset.

`.google.rpc.Status error = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`com.google.rpc.StatusOrBuilder`

### getImage()

```
public abstract Asset.ImageAsset getImage()
```

ImageAsset represents an image.

`.google.cloud.video.livestream.v1.Asset.ImageAsset image = 6;`

**Returns**

**Type**

**Description**

`[Asset.ImageAsset](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Asset.ImageAsset)`

The image.

### getImageOrBuilder()

```
public abstract Asset.ImageAssetOrBuilder getImageOrBuilder()
```

ImageAsset represents an image.

`.google.cloud.video.livestream.v1.Asset.ImageAsset image = 6;`

**Returns**

**Type**

**Description**

`[Asset.ImageAssetOrBuilder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Asset.ImageAssetOrBuilder)`

### getLabels() (deprecated)

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.AssetOrBuilder#com_google_cloud_video_livestream_v1_AssetOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

User-defined key/value metadata.

`map<string, string> labels = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

User-defined key/value metadata.

`map<string, string> labels = 4;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

User-defined key/value metadata.

`map<string, string> labels = 4;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getLabelsOrThrow(String key)

```
public abstract String getLabelsOrThrow(String key)
```

User-defined key/value metadata.

`map<string, string> labels = 4;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getName()

```
public abstract String getName()
```

The resource name of the asset, in the form of: `projects/{project}/locations/{location}/assets/{assetId}`.

`string name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

The resource name of the asset, in the form of: `projects/{project}/locations/{location}/assets/{assetId}`.

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getResourceCase()

```
public abstract Asset.ResourceCase getResourceCase()
```

**Returns**

**Type**

**Description**

`[Asset.ResourceCase](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Asset.ResourceCase)`

### getState()

```
public abstract Asset.State getState()
```

Output only. The state of the asset resource.

`.google.cloud.video.livestream.v1.Asset.State state = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Asset.State](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Asset.State)`

The state.

### getStateValue()

```
public abstract int getStateValue()
```

Output only. The state of the asset resource.

`.google.cloud.video.livestream.v1.Asset.State state = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Output only. The update time.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. The update time.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getVideo()

```
public abstract Asset.VideoAsset getVideo()
```

VideoAsset represents a video.

`.google.cloud.video.livestream.v1.Asset.VideoAsset video = 5;`

**Returns**

**Type**

**Description**

`[Asset.VideoAsset](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Asset.VideoAsset)`

The video.

### getVideoOrBuilder()

```
public abstract Asset.VideoAssetOrBuilder getVideoOrBuilder()
```

VideoAsset represents a video.

`.google.cloud.video.livestream.v1.Asset.VideoAsset video = 5;`

**Returns**

**Type**

**Description**

`[Asset.VideoAssetOrBuilder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Asset.VideoAssetOrBuilder)`

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. The creation time.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasError()

```
public abstract boolean hasError()
```

Output only. Only present when `state` is `ERROR`. The reason for the error state of the asset.

`.google.rpc.Status error = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the error field is set.

### hasImage()

```
public abstract boolean hasImage()
```

ImageAsset represents an image.

`.google.cloud.video.livestream.v1.Asset.ImageAsset image = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the image field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

Output only. The update time.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

### hasVideo()

```
public abstract boolean hasVideo()
```

VideoAsset represents a video.

`.google.cloud.video.livestream.v1.Asset.VideoAsset video = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the video field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
