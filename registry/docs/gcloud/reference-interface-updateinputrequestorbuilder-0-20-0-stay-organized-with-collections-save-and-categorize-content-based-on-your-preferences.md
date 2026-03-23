-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface UpdateInputRequestOrBuilder (0.20.0) Stay organized with collections Save and categorize content based on your preferences.

0.89.0 (latest) 0.87.0 0.85.0 0.84.0 0.82.0 0.80.0 0.78.0 0.77.0 0.76.0 0.75.0 0.74.0 0.72.0 0.70.0 0.69.0 0.66.0 0.65.0 0.64.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.8 0.3.0

```
public interface UpdateInputRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getInput()

```
public abstract Input getInput()
```

Required. The input resource to be updated.

`.google.cloud.video.livestream.v1.Input input = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Input](/java/docs/reference/google-cloud-live-stream/0.20.0/com.google.cloud.video.livestream.v1.Input)`

The input.

### getInputOrBuilder()

```
public abstract InputOrBuilder getInputOrBuilder()
```

Required. The input resource to be updated.

`.google.cloud.video.livestream.v1.Input input = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[InputOrBuilder](/java/docs/reference/google-cloud-live-stream/0.20.0/com.google.cloud.video.livestream.v1.InputOrBuilder)`

### getRequestId()

```
public abstract String getRequestId()
```

A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported `(00000000-0000-0000-0000-000000000000)`.

`string request_id = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The requestId.

### getRequestIdBytes()

```
public abstract ByteString getRequestIdBytes()
```

A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported `(00000000-0000-0000-0000-000000000000)`.

`string request_id = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for requestId.

### getUpdateMask()

```
public abstract FieldMask getUpdateMask()
```

Field mask is used to specify the fields to be overwritten in the Input resource by the update. You can only update the following fields:

-   [`preprocessingConfig`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.inputs#PreprocessingConfig)
-   [`securityRules`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.inputs#SecurityRule) The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the mask is not present, then each field from the list above is updated if the field appears in the request payload. To unset a field, add the field to the update mask and remove it from the request payload.

`.google.protobuf.FieldMask update_mask = 1;`

**Returns**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`

The updateMask.

### getUpdateMaskOrBuilder()

```
public abstract FieldMaskOrBuilder getUpdateMaskOrBuilder()
```

Field mask is used to specify the fields to be overwritten in the Input resource by the update. You can only update the following fields:

-   [`preprocessingConfig`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.inputs#PreprocessingConfig)
-   [`securityRules`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.inputs#SecurityRule) The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the mask is not present, then each field from the list above is updated if the field appears in the request payload. To unset a field, add the field to the update mask and remove it from the request payload.

`.google.protobuf.FieldMask update_mask = 1;`

**Returns**

**Type**

**Description**

`[FieldMaskOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMaskOrBuilder.html)`

### hasInput()

```
public abstract boolean hasInput()
```

Required. The input resource to be updated.

`.google.cloud.video.livestream.v1.Input input = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the input field is set.

### hasUpdateMask()

```
public abstract boolean hasUpdateMask()
```

Field mask is used to specify the fields to be overwritten in the Input resource by the update. You can only update the following fields:

-   [`preprocessingConfig`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.inputs#PreprocessingConfig)
-   [`securityRules`](https://cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.inputs#SecurityRule) The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the mask is not present, then each field from the list above is updated if the field appears in the request payload. To unset a field, add the field to the update mask and remove it from the request payload.

`.google.protobuf.FieldMask update_mask = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateMask field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
