-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface UpdateSpokeRequestOrBuilder (1.56.0) Stay organized with collections Save and categorize content based on your preferences.

1.86.0 (latest) 1.84.0 1.82.0 1.81.0 1.79.0 1.77.0 1.75.0 1.74.0 1.73.0 1.72.0 1.71.0 1.69.0 1.67.0 1.66.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.9 1.1.1 1.0.0 0.5.0

```
public interface UpdateSpokeRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getRequestId()

```
public abstract String getRequestId()
```

Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.

For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.

The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

`string request_id = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The requestId.

### getRequestIdBytes()

```
public abstract ByteString getRequestIdBytes()
```

Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.

For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.

The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

`string request_id = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for requestId.

### getSpoke()

```
public abstract Spoke getSpoke()
```

Required. The state that the Spoke should be in after the update.

`.google.cloud.networkconnectivity.v1alpha1.Spoke spoke = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Spoke](/java/docs/reference/google-cloud-networkconnectivity/1.56.0/com.google.cloud.networkconnectivity.v1alpha1.Spoke)`

The spoke.

### getSpokeOrBuilder()

```
public abstract SpokeOrBuilder getSpokeOrBuilder()
```

Required. The state that the Spoke should be in after the update.

`.google.cloud.networkconnectivity.v1alpha1.Spoke spoke = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[SpokeOrBuilder](/java/docs/reference/google-cloud-networkconnectivity/1.56.0/com.google.cloud.networkconnectivity.v1alpha1.SpokeOrBuilder)`

### getUpdateMask()

```
public abstract FieldMask getUpdateMask()
```

Optional. Field mask is used to specify the fields to be overwritten in the Spoke resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.

`.google.protobuf.FieldMask update_mask = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`

The updateMask.

### getUpdateMaskOrBuilder()

```
public abstract FieldMaskOrBuilder getUpdateMaskOrBuilder()
```

Optional. Field mask is used to specify the fields to be overwritten in the Spoke resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.

`.google.protobuf.FieldMask update_mask = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[FieldMaskOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMaskOrBuilder.html)`

### hasSpoke()

```
public abstract boolean hasSpoke()
```

Required. The state that the Spoke should be in after the update.

`.google.cloud.networkconnectivity.v1alpha1.Spoke spoke = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the spoke field is set.

### hasUpdateMask()

```
public abstract boolean hasUpdateMask()
```

Optional. Field mask is used to specify the fields to be overwritten in the Spoke resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.

`.google.protobuf.FieldMask update_mask = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateMask field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
