-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface UpdatePostureRequestOrBuilder (0.19.0) Stay organized with collections Save and categorize content based on your preferences.

0.52.0 (latest) 0.50.0 0.48.0 0.47.0 0.45.0 0.43.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.35.0 0.33.0 0.32.0 0.29.0 0.28.0 0.27.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.2.0 0.1.0

```
public interface UpdatePostureRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getPosture()

```
public abstract Posture getPosture()
```

Required. The resource being updated.

`.google.cloud.securityposture.v1.Posture posture = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Posture](/java/docs/reference/google-cloud-securityposture/0.19.0/com.google.cloud.securityposture.v1.Posture)`

The posture.

### getPostureOrBuilder()

```
public abstract PostureOrBuilder getPostureOrBuilder()
```

Required. The resource being updated.

`.google.cloud.securityposture.v1.Posture posture = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[PostureOrBuilder](/java/docs/reference/google-cloud-securityposture/0.19.0/com.google.cloud.securityposture.v1.PostureOrBuilder)`

### getRevisionId()

```
public abstract String getRevisionId()
```

Required. Posture revision which needs to be updated.

`string revision_id = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The revisionId.

### getRevisionIdBytes()

```
public abstract ByteString getRevisionIdBytes()
```

Required. Posture revision which needs to be updated.

`string revision_id = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for revisionId.

### getUpdateMask()

```
public abstract FieldMask getUpdateMask()
```

Required. Field mask is used to specify the fields to be overwritten in the Posture resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.

`.google.protobuf.FieldMask update_mask = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`

The updateMask.

### getUpdateMaskOrBuilder()

```
public abstract FieldMaskOrBuilder getUpdateMaskOrBuilder()
```

Required. Field mask is used to specify the fields to be overwritten in the Posture resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.

`.google.protobuf.FieldMask update_mask = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[FieldMaskOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMaskOrBuilder.html)`

### hasPosture()

```
public abstract boolean hasPosture()
```

Required. The resource being updated.

`.google.cloud.securityposture.v1.Posture posture = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the posture field is set.

### hasUpdateMask()

```
public abstract boolean hasUpdateMask()
```

Required. Field mask is used to specify the fields to be overwritten in the Posture resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.

`.google.protobuf.FieldMask update_mask = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateMask field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
