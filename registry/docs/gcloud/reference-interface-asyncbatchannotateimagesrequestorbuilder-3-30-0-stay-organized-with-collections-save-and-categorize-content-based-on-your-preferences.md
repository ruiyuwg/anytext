-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface AsyncBatchAnnotateImagesRequestOrBuilder (3.30.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

```
public interface AsyncBatchAnnotateImagesRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getOutputConfig()

```
public abstract OutputConfig getOutputConfig()
```

Required. The desired output location and metadata (e.g. format).

`.google.cloud.vision.v1.OutputConfig output_config = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[OutputConfig](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1.OutputConfig)`

The outputConfig.

### getOutputConfigOrBuilder()

```
public abstract OutputConfigOrBuilder getOutputConfigOrBuilder()
```

Required. The desired output location and metadata (e.g. format).

`.google.cloud.vision.v1.OutputConfig output_config = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[OutputConfigOrBuilder](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1.OutputConfigOrBuilder)`

### getParent()

```
public abstract String getParent()
```

Optional. Target project and location to make a call.

Format: `projects/{project-id}/locations/{location-id}`.

If no parent is specified, a region will be chosen automatically.

Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union.

Example: `projects/project-A/locations/eu`.

`string parent = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parent.

### getParentBytes()

```
public abstract ByteString getParentBytes()
```

Optional. Target project and location to make a call.

Format: `projects/{project-id}/locations/{location-id}`.

If no parent is specified, a region will be chosen automatically.

Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union.

Example: `projects/project-A/locations/eu`.

`string parent = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### getRequests(int index)

```
public abstract AnnotateImageRequest getRequests(int index)
```

Required. Individual image annotation requests for this batch.

`repeated .google.cloud.vision.v1.AnnotateImageRequest requests = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[AnnotateImageRequest](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1.AnnotateImageRequest)`

### getRequestsCount()

```
public abstract int getRequestsCount()
```

Required. Individual image annotation requests for this batch.

`repeated .google.cloud.vision.v1.AnnotateImageRequest requests = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getRequestsList()

```
public abstract List<AnnotateImageRequest> getRequestsList()
```

Required. Individual image annotation requests for this batch.

`repeated .google.cloud.vision.v1.AnnotateImageRequest requests = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[AnnotateImageRequest](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1.AnnotateImageRequest)>`

### getRequestsOrBuilder(int index)

```
public abstract AnnotateImageRequestOrBuilder getRequestsOrBuilder(int index)
```

Required. Individual image annotation requests for this batch.

`repeated .google.cloud.vision.v1.AnnotateImageRequest requests = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[AnnotateImageRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1.AnnotateImageRequestOrBuilder)`

### getRequestsOrBuilderList()

```
public abstract List<? extends AnnotateImageRequestOrBuilder> getRequestsOrBuilderList()
```

Required. Individual image annotation requests for this batch.

`repeated .google.cloud.vision.v1.AnnotateImageRequest requests = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1.AnnotateImageRequestOrBuilder>`

### hasOutputConfig()

```
public abstract boolean hasOutputConfig()
```

Required. The desired output location and metadata (e.g. format).

`.google.cloud.vision.v1.OutputConfig output_config = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the outputConfig field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
