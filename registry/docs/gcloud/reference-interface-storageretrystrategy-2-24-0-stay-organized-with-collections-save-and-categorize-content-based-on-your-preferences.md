-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface StorageRetryStrategy (2.24.0) Stay organized with collections Save and categorize content based on your preferences.

2.64.0 (latest) 2.63.0 2.62.1 2.60.0 2.59.0 2.58.1 2.57.0 2.56.0 2.55.0 2.54.0 2.53.3 2.52.3 2.50.0 2.49.0 2.48.2 2.47.0 2.46.0 2.45.0 2.44.1 2.43.2 2.42.0 2.41.0 2.40.1 2.39.0 2.38.0 2.37.0 2.36.1 2.34.0 2.33.0 2.32.1 2.30.1 2.29.1 2.28.0 2.27.1 2.24.0 2.23.0 2.22.6 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.0 2.15.1 2.14.0 2.13.1 2.12.0 2.11.3 2.10.0 2.9.3 2.8.1 2.7.1 2.6.1 2.5.1 2.4.5 2.3.0 2.2.3 2.1.10

```
public interface StorageRetryStrategy extends Serializable
```

A factory class which is used to provide access to [ResultRetryAlgorithm](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.retrying.ResultRetryAlgorithm.html) for idempotent and non-idempotent calls made via [Storage](/java/docs/reference/google-cloud-storage/2.24.0/com.google.cloud.storage.Storage). Before [Storage](/java/docs/reference/google-cloud-storage/2.24.0/com.google.cloud.storage.Storage) performs an operation it will determine if the operation is idempotent and select the appropriate [ResultRetryAlgorithm](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.retrying.ResultRetryAlgorithm.html) to use for that invocation. See Also: [#getDefaultStorageRetryStrategy()](/java/docs/reference/google-cloud-storage/2.24.0/com.google.cloud.storage.StorageRetryStrategy#com_google_cloud_storage_StorageRetryStrategy_getDefaultStorageRetryStrategy__), [#getUniformStorageRetryStrategy()](/java/docs/reference/google-cloud-storage/2.24.0/com.google.cloud.storage.StorageRetryStrategy#com_google_cloud_storage_StorageRetryStrategy_getUniformStorageRetryStrategy__)

## Implements

[Serializable](https://docs.oracle.com/javase/8/docs/api/java/io/Serializable.html)

## Static Methods

### getDefaultStorageRetryStrategy()

```
public static StorageRetryStrategy getDefaultStorageRetryStrategy()
```

Factory method to get an instance of the default implementation of [StorageRetryStrategy](/java/docs/reference/google-cloud-storage/2.24.0/com.google.cloud.storage.StorageRetryStrategy). The returned instance is provides handler which are appropriate for calls which are known to be idempotent vs non-idempotent.

All non-idempotent calls will not be retried

The set of retryable cases handled by this strategy is more comprehensive than that of the legacy strategy and should always be preferred.

Retried HTTP status codes for idempotent calls

Code

Name

408

Request Timeout

429

Too Many Requests

500

Internal Server Error

502

Bad Gateway

503

Service Unavailable

504

Gateway Timeout

See Also: [StorageOptions.Builder#setStorageRetryStrategy(StorageRetryStrategy)](/java/docs/reference/google-cloud-storage/2.24.0/com.google.cloud.storage.StorageOptions.Builder#com_google_cloud_storage_StorageOptions_Builder_setStorageRetryStrategy_com_google_cloud_storage_StorageRetryStrategy_), [#getUniformStorageRetryStrategy()](/java/docs/reference/google-cloud-storage/2.24.0/com.google.cloud.storage.StorageRetryStrategy#com_google_cloud_storage_StorageRetryStrategy_getUniformStorageRetryStrategy__)

**Returns**

**Type**

**Description**

`[StorageRetryStrategy](/java/docs/reference/google-cloud-storage/2.24.0/com.google.cloud.storage.StorageRetryStrategy)`

### getLegacyStorageRetryStrategy() (deprecated)

```
public static StorageRetryStrategy getLegacyStorageRetryStrategy()
```

**Deprecated.** _please migrate to using [#getDefaultStorageRetryStrategy()](/java/docs/reference/google-cloud-storage/2.24.0/com.google.cloud.storage.StorageRetryStrategy#com_google_cloud_storage_StorageRetryStrategy_getDefaultStorageRetryStrategy__) which is capable of providing handlers which are appropriate for idempotent and non-idempotent calls._

Factory method to get an instance of [StorageRetryStrategy](/java/docs/reference/google-cloud-storage/2.24.0/com.google.cloud.storage.StorageRetryStrategy) with the behavior which was used prior to version 2.1.8. **This strategy is unsafe and will result in retying some non-idempotent calls.** See Also: [StorageOptions.Builder#setStorageRetryStrategy(StorageRetryStrategy)](/java/docs/reference/google-cloud-storage/2.24.0/com.google.cloud.storage.StorageOptions.Builder#com_google_cloud_storage_StorageOptions_Builder_setStorageRetryStrategy_com_google_cloud_storage_StorageRetryStrategy_), [#getDefaultStorageRetryStrategy()](/java/docs/reference/google-cloud-storage/2.24.0/com.google.cloud.storage.StorageRetryStrategy#com_google_cloud_storage_StorageRetryStrategy_getDefaultStorageRetryStrategy__)

**Returns**

**Type**

**Description**

`[StorageRetryStrategy](/java/docs/reference/google-cloud-storage/2.24.0/com.google.cloud.storage.StorageRetryStrategy)`

### getUniformStorageRetryStrategy()

```
public static StorageRetryStrategy getUniformStorageRetryStrategy()
```

Factory method to get an instance of [StorageRetryStrategy](/java/docs/reference/google-cloud-storage/2.24.0/com.google.cloud.storage.StorageRetryStrategy) which will uniformly retry all calls as if they were idempotent.

**_NOTE:_**This strategy is unsafe and will result in retying some non-idempotent calls. Care should be taken to ensure calls which would not normally be considered idempotent are made idempotent by some other means in your program. See Also: [StorageOptions.Builder#setStorageRetryStrategy(StorageRetryStrategy)](/java/docs/reference/google-cloud-storage/2.24.0/com.google.cloud.storage.StorageOptions.Builder#com_google_cloud_storage_StorageOptions_Builder_setStorageRetryStrategy_com_google_cloud_storage_StorageRetryStrategy_), [#getDefaultStorageRetryStrategy()](/java/docs/reference/google-cloud-storage/2.24.0/com.google.cloud.storage.StorageRetryStrategy#com_google_cloud_storage_StorageRetryStrategy_getDefaultStorageRetryStrategy__)

**Returns**

**Type**

**Description**

`[StorageRetryStrategy](/java/docs/reference/google-cloud-storage/2.24.0/com.google.cloud.storage.StorageRetryStrategy)`

## Methods

### getIdempotentHandler()

```
public abstract ResultRetryAlgorithm<?> getIdempotentHandler()
```

Factory method to provide a [ResultRetryAlgorithm](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.retrying.ResultRetryAlgorithm.html) which will be used to evaluate whether a retry can happen for an operation which has been deemed idempotent.

**Returns**

**Type**

**Description**

`[ResultRetryAlgorithm](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.retrying.ResultRetryAlgorithm.html)<?>`

### getNonidempotentHandler()

```
public abstract ResultRetryAlgorithm<?> getNonidempotentHandler()
```

**Returns**

**Type**

**Description**

`[ResultRetryAlgorithm](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.retrying.ResultRetryAlgorithm.html)<?>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
