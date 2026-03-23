-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface DeleteObjectRequestOrBuilder (2.15.1) Stay organized with collections Save and categorize content based on your preferences.

2.64.0 (latest) 2.63.0 2.62.1 2.60.0 2.59.0 2.58.1 2.57.0 2.56.0 2.55.0 2.54.0 2.53.3 2.52.3 2.50.0 2.49.0 2.48.2 2.47.0 2.46.0 2.45.0 2.44.1 2.43.2 2.42.0 2.41.0 2.40.1 2.39.0 2.38.0 2.37.0 2.36.1 2.34.0 2.33.0 2.32.1 2.30.1 2.29.1 2.28.0 2.27.1 2.24.0 2.23.0 2.22.6 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.0 2.15.1 2.14.0 2.13.1 2.12.0 2.11.3 2.10.0 2.9.3 2.8.1 2.7.1 2.6.1 2.5.1 2.4.5 2.3.0 2.2.3 2.1.10

```
public interface DeleteObjectRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBucket()

```
public abstract String getBucket()
```

Required. Name of the bucket in which the object resides.

`string bucket = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The bucket.

### getBucketBytes()

```
public abstract ByteString getBucketBytes()
```

Required. Name of the bucket in which the object resides.

`string bucket = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for bucket.

### getCommonObjectRequestParams()

```
public abstract CommonObjectRequestParams getCommonObjectRequestParams()
```

A set of parameters common to Storage API requests concerning an object.

`.google.storage.v2.CommonObjectRequestParams common_object_request_params = 10;`

**Returns**

**Type**

**Description**

[CommonObjectRequestParams](/java/docs/reference/google-cloud-storage/2.15.1/com.google.storage.v2.CommonObjectRequestParams)

The commonObjectRequestParams.

### getCommonObjectRequestParamsOrBuilder()

```
public abstract CommonObjectRequestParamsOrBuilder getCommonObjectRequestParamsOrBuilder()
```

A set of parameters common to Storage API requests concerning an object.

`.google.storage.v2.CommonObjectRequestParams common_object_request_params = 10;`

**Returns**

**Type**

**Description**

[CommonObjectRequestParamsOrBuilder](/java/docs/reference/google-cloud-storage/2.15.1/com.google.storage.v2.CommonObjectRequestParamsOrBuilder)

### getGeneration()

```
public abstract long getGeneration()
```

If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).

`int64 generation = 4;`

**Returns**

**Type**

**Description**

[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The generation.

### getIfGenerationMatch()

```
public abstract long getIfGenerationMatch()
```

Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.

`optional int64 if_generation_match = 5;`

**Returns**

**Type**

**Description**

[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The ifGenerationMatch.

### getIfGenerationNotMatch()

```
public abstract long getIfGenerationNotMatch()
```

Makes the operation conditional on whether the object's live generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.

`optional int64 if_generation_not_match = 6;`

**Returns**

**Type**

**Description**

[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The ifGenerationNotMatch.

### getIfMetagenerationMatch()

```
public abstract long getIfMetagenerationMatch()
```

Makes the operation conditional on whether the object's current metageneration matches the given value.

`optional int64 if_metageneration_match = 7;`

**Returns**

**Type**

**Description**

[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The ifMetagenerationMatch.

### getIfMetagenerationNotMatch()

```
public abstract long getIfMetagenerationNotMatch()
```

Makes the operation conditional on whether the object's current metageneration does not match the given value.

`optional int64 if_metageneration_not_match = 8;`

**Returns**

**Type**

**Description**

[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The ifMetagenerationNotMatch.

### getObject()

```
public abstract String getObject()
```

Required. The name of the object to delete (when not using a resumable write).

`string object = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The object.

### getObjectBytes()

```
public abstract ByteString getObjectBytes()
```

Required. The name of the object to delete (when not using a resumable write).

`string object = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for object.

### hasCommonObjectRequestParams()

```
public abstract boolean hasCommonObjectRequestParams()
```

A set of parameters common to Storage API requests concerning an object.

`.google.storage.v2.CommonObjectRequestParams common_object_request_params = 10;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the commonObjectRequestParams field is set.

### hasIfGenerationMatch()

```
public abstract boolean hasIfGenerationMatch()
```

Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.

`optional int64 if_generation_match = 5;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the ifGenerationMatch field is set.

### hasIfGenerationNotMatch()

```
public abstract boolean hasIfGenerationNotMatch()
```

Makes the operation conditional on whether the object's live generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.

`optional int64 if_generation_not_match = 6;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the ifGenerationNotMatch field is set.

### hasIfMetagenerationMatch()

```
public abstract boolean hasIfMetagenerationMatch()
```

Makes the operation conditional on whether the object's current metageneration matches the given value.

`optional int64 if_metageneration_match = 7;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the ifMetagenerationMatch field is set.

### hasIfMetagenerationNotMatch()

```
public abstract boolean hasIfMetagenerationNotMatch()
```

Makes the operation conditional on whether the object's current metageneration does not match the given value.

`optional int64 if_metageneration_not_match = 8;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the ifMetagenerationNotMatch field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
