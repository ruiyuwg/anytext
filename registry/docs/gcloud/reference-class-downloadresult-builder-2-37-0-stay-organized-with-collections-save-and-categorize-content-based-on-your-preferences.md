-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class DownloadResult.Builder (2.37.0) Stay organized with collections Save and categorize content based on your preferences.

2.64.0 (latest) 2.63.0 2.62.1 2.60.0 2.59.0 2.58.1 2.57.0 2.56.0 2.55.0 2.54.0 2.53.3 2.52.3 2.50.0 2.49.0 2.48.2 2.47.0 2.46.0 2.45.0 2.44.1 2.43.2 2.42.0 2.41.0 2.40.1 2.39.0 2.38.0 2.37.0 2.36.1 2.34.0 2.33.0 2.32.1 2.30.1 2.29.1 2.28.0 2.27.1 2.24.0 2.23.0 2.22.6 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.0 2.15.1 2.14.0 2.13.1 2.12.0 2.11.3 2.10.0 2.9.3 2.8.1 2.7.1 2.6.1 2.5.1 2.4.5 2.3.0 2.2.3 2.1.10

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

```
public static final class DownloadResult.Builder
```

Builds an instance of DownloadResult See Also: [DownloadResult](/java/docs/reference/google-cloud-storage/2.37.0/com.google.cloud.storage.transfermanager.DownloadResult)

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> DownloadResult.Builder

## Inherited Members

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Methods

### build()

```
public DownloadResult build()
```

**Beta**

This feature is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.

Creates a DownloadResult object.

**Returns**

**Type**

**Description**

`[DownloadResult](/java/docs/reference/google-cloud-storage/2.37.0/com.google.cloud.storage.transfermanager.DownloadResult)`

[DownloadResult](/java/docs/reference/google-cloud-storage/2.37.0/com.google.cloud.storage.transfermanager.DownloadResult)

### setException(@NonNull Exception exception)

```
public DownloadResult.Builder setException(@NonNull Exception exception)
```

**Beta**

This feature is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.

Sets the Exception produced by a failed download operation. This field will only be populated if the Transfer was not [success](/java/docs/reference/google-cloud-storage/2.37.0/com.google.cloud.storage.transfermanager.TransferStatus#com_google_cloud_storage_transfermanager_TransferStatus_SUCCESS)ful or [skipped](/java/docs/reference/google-cloud-storage/2.37.0/com.google.cloud.storage.transfermanager.TransferStatus#com_google_cloud_storage_transfermanager_TransferStatus_SKIPPED) See Also: [DownloadResult#getException()](/java/docs/reference/google-cloud-storage/2.37.0/com.google.cloud.storage.transfermanager.DownloadResult#com_google_cloud_storage_transfermanager_DownloadResult_getException__)

**Parameter**

**Name**

**Description**

`exception`

`@org.checkerframework.checker.nullness.qual.NonNull java.lang.Exception`  

**Returns**

**Type**

**Description**

`[DownloadResult.Builder](/java/docs/reference/google-cloud-storage/2.37.0/com.google.cloud.storage.transfermanager.DownloadResult.Builder)`

the instance of the Builder with the value for exception modified.

### setInput(@NonNull BlobInfo input)

```
public DownloadResult.Builder setInput(@NonNull BlobInfo input)
```

**Beta**

This feature is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.

Sets the BlobInfo for the object request for download. This field is required. See Also: [DownloadResult#getInput()](/java/docs/reference/google-cloud-storage/2.37.0/com.google.cloud.storage.transfermanager.DownloadResult#com_google_cloud_storage_transfermanager_DownloadResult_getInput__)

**Parameter**

**Name**

**Description**

`input`

`@org.checkerframework.checker.nullness.qual.NonNull com.google.cloud.storage.BlobInfo`  

**Returns**

**Type**

**Description**

`[DownloadResult.Builder](/java/docs/reference/google-cloud-storage/2.37.0/com.google.cloud.storage.transfermanager.DownloadResult.Builder)`

the instance of the Builder with the value for input modified.

### setOutputDestination(@NonNull Path outputDestination)

```
public DownloadResult.Builder setOutputDestination(@NonNull Path outputDestination)
```

**Beta**

This feature is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.

Sets the location on the Filesystem the object has been written to. This field will only be populated if the Transfer was [success](/java/docs/reference/google-cloud-storage/2.37.0/com.google.cloud.storage.transfermanager.TransferStatus#com_google_cloud_storage_transfermanager_TransferStatus_SUCCESS)ful. See Also: [DownloadResult#getOutputDestination()](/java/docs/reference/google-cloud-storage/2.37.0/com.google.cloud.storage.transfermanager.DownloadResult#com_google_cloud_storage_transfermanager_DownloadResult_getOutputDestination__)

**Parameter**

**Name**

**Description**

`outputDestination`

`@org.checkerframework.checker.nullness.qual.NonNull java.nio.file.Path`  

**Returns**

**Type**

**Description**

`[DownloadResult.Builder](/java/docs/reference/google-cloud-storage/2.37.0/com.google.cloud.storage.transfermanager.DownloadResult.Builder)`

the instance of the Builder with the value for outputDestination modified.

### setStatus(@NonNull TransferStatus status)

```
public DownloadResult.Builder setStatus(@NonNull TransferStatus status)
```

**Beta**

This feature is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.

Sets the status of the download.This field is required. See Also: TransferStatus

**Parameter**

**Name**

**Description**

`status`

`@org.checkerframework.checker.nullness.qual.NonNull com.google.cloud.storage.transfermanager.TransferStatus`  

**Returns**

**Type**

**Description**

`[DownloadResult.Builder](/java/docs/reference/google-cloud-storage/2.37.0/com.google.cloud.storage.transfermanager.DownloadResult.Builder)`

the instance of the Builder with the value for status modified.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
