-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface IngestionFailureEventOrBuilder (1.135.0) Stay organized with collections Save and categorize content based on your preferences.

1.149.0 (latest) 1.148.0 1.147.0 1.145.0 1.143.1 1.142.0 1.141.5 1.140.2 1.139.4 1.138.0 1.137.1 1.136.1 1.135.0 1.134.2 1.133.1 1.132.2 1.131.0 1.130.0 1.129.6 1.127.3 1.126.6 1.125.13 1.123.18 1.122.2 1.121.1 1.120.24 1.119.1 1.118.0 1.117.0 1.116.4 1.115.5

```
public interface IngestionFailureEventOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCloudStorageFailure()

```
public abstract IngestionFailureEvent.CloudStorageFailure getCloudStorageFailure()
```

Optional. Failure when ingesting from Cloud Storage.

`.google.pubsub.v1.IngestionFailureEvent.CloudStorageFailure cloud_storage_failure = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[IngestionFailureEvent.CloudStorageFailure](/java/docs/reference/google-cloud-pubsub/1.135.0/com.google.pubsub.v1.IngestionFailureEvent.CloudStorageFailure)`

The cloudStorageFailure.

### getCloudStorageFailureOrBuilder()

```
public abstract IngestionFailureEvent.CloudStorageFailureOrBuilder getCloudStorageFailureOrBuilder()
```

Optional. Failure when ingesting from Cloud Storage.

`.google.pubsub.v1.IngestionFailureEvent.CloudStorageFailure cloud_storage_failure = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[IngestionFailureEvent.CloudStorageFailureOrBuilder](/java/docs/reference/google-cloud-pubsub/1.135.0/com.google.pubsub.v1.IngestionFailureEvent.CloudStorageFailureOrBuilder)`

### getErrorMessage()

```
public abstract String getErrorMessage()
```

Required. Error details explaining why ingestion to Pub/Sub has failed.

`string error_message = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The errorMessage.

### getErrorMessageBytes()

```
public abstract ByteString getErrorMessageBytes()
```

Required. Error details explaining why ingestion to Pub/Sub has failed.

`string error_message = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for errorMessage.

### getFailureCase()

```
public abstract IngestionFailureEvent.FailureCase getFailureCase()
```

**Returns**

**Type**

**Description**

`[IngestionFailureEvent.FailureCase](/java/docs/reference/google-cloud-pubsub/1.135.0/com.google.pubsub.v1.IngestionFailureEvent.FailureCase)`

### getTopic()

```
public abstract String getTopic()
```

Required. Name of the import topic. Format is: projects/{project\_name}/topics/{topic\_name}.

`string topic = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The topic.

### getTopicBytes()

```
public abstract ByteString getTopicBytes()
```

Required. Name of the import topic. Format is: projects/{project\_name}/topics/{topic\_name}.

`string topic = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for topic.

### hasCloudStorageFailure()

```
public abstract boolean hasCloudStorageFailure()
```

Optional. Failure when ingesting from Cloud Storage.

`.google.pubsub.v1.IngestionFailureEvent.CloudStorageFailure cloud_storage_failure = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the cloudStorageFailure field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
