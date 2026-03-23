-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.cloud.storage.testing (2.18.0) Stay organized with collections Save and categorize content based on your preferences.

2.64.0 (latest) 2.63.0 2.62.1 2.60.0 2.59.0 2.58.1 2.57.0 2.56.0 2.55.0 2.54.0 2.53.3 2.52.3 2.50.0 2.49.0 2.48.2 2.47.0 2.46.0 2.45.0 2.44.1 2.43.2 2.42.0 2.41.0 2.40.1 2.39.0 2.38.0 2.37.0 2.36.1 2.34.0 2.33.0 2.32.1 2.30.1 2.29.1 2.28.0 2.27.1 2.24.0 2.23.0 2.22.6 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.0 2.15.1 2.14.0 2.13.1 2.12.0 2.11.3 2.10.0 2.9.3 2.8.1 2.7.1 2.6.1 2.5.1 2.4.5 2.3.0 2.2.3 2.1.10

A testing helper for Google Cloud Storage.

A simple usage example:

Before the test:

 ```

 RemoteStorageHelper helper = RemoteStorageHelper.create();
 Storage storage = helper.getOptions().getService();
 String bucket = RemoteStorageHelper.generateBucketName();
 storage.create(BucketInfo.of(bucket));
 
```
 

After the test:

 ```

 RemoteStorageHelper.forceDelete(storage, bucket, 5, TimeUnit.SECONDS);
 
```
 

See Also: [Google Cloud Java tools for testing](https://github.com/googleapis/google-cloud-java/blob/master/TESTING.md#testing-code-that-uses-storage)

## Classes

### [RemoteStorageHelper](/java/docs/reference/google-cloud-storage/2.18.0/com.google.cloud.storage.testing.RemoteStorageHelper)

Utility to create a remote storage configuration for testing. Storage options can be obtained via the [#getOptions()](/java/docs/reference/google-cloud-storage/2.18.0/com.google.cloud.storage.testing.RemoteStorageHelper#com_google_cloud_storage_testing_RemoteStorageHelper_getOptions__) ()} method. Returned options have custom StorageOptions#getRetrySettings(): RetrySettings#getMaxAttempts() is `10`, RetrySettings#getMaxRetryDelay() is `30000`, RetrySettings#getTotalTimeout() is `120000` and RetrySettings#getInitialRetryDelay() is `250`. HttpTransportOptions#getConnectTimeout() and HttpTransportOptions#getReadTimeout() are both set to `60000`.

### [StorageRpcTestBase](/java/docs/reference/google-cloud-storage/2.18.0/com.google.cloud.storage.testing.StorageRpcTestBase)

A stub implementation of [StorageRpc](/java/docs/reference/google-cloud-storage/2.18.0/com.google.cloud.storage.spi.v1.StorageRpc) which can be used outside of the Storage module for testing purposes. All the methods throw an `UnsupportedOperationException`.

## Exceptions

### [RemoteStorageHelper.StorageHelperException](/java/docs/reference/google-cloud-storage/2.18.0/com.google.cloud.storage.testing.RemoteStorageHelper.StorageHelperException)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
