-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TransferManagerConfig.Builder (2.48.2) Stay organized with collections Save and categorize content based on your preferences.

2.64.0 (latest) 2.63.0 2.62.1 2.60.0 2.59.0 2.58.1 2.57.0 2.56.0 2.55.0 2.54.0 2.53.3 2.52.3 2.50.0 2.49.0 2.48.2 2.47.0 2.46.0 2.45.0 2.44.1 2.43.2 2.42.0 2.41.0 2.40.1 2.39.0 2.38.0 2.37.0 2.36.1 2.34.0 2.33.0 2.32.1 2.30.1 2.29.1 2.28.0 2.27.1 2.24.0 2.23.0 2.22.6 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.0 2.15.1 2.14.0 2.13.1 2.12.0 2.11.3 2.10.0 2.9.3 2.8.1 2.7.1 2.6.1 2.5.1 2.4.5 2.3.0 2.2.3 2.1.10

```
public static class TransferManagerConfig.Builder
```

Builds an instance of TransferManagerConfig See Also: [TransferManagerConfig](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.transfermanager.TransferManagerConfig)

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> TransferManagerConfig.Builder

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
public TransferManagerConfig build()
```

Creates a TransferManagerConfig object.

**Returns**

**Type**

**Description**

`[TransferManagerConfig](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.transfermanager.TransferManagerConfig)`

[TransferManagerConfig](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.transfermanager.TransferManagerConfig)

### setAllowDivideAndConquerDownload(boolean allowDivideAndConquerDownload)

```
public TransferManagerConfig.Builder setAllowDivideAndConquerDownload(boolean allowDivideAndConquerDownload)
```

Whether to allow Transfer Manager to perform chunked Uploads/Downloads if it determines chunking will be beneficial

_Default Value:_ false See Also: [TransferManagerConfig#isAllowDivideAndConquerDownload()](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.transfermanager.TransferManagerConfig#com_google_cloud_storage_transfermanager_TransferManagerConfig_isAllowDivideAndConquerDownload__)

**Parameter**

**Name**

**Description**

`allowDivideAndConquerDownload`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TransferManagerConfig.Builder](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.transfermanager.TransferManagerConfig.Builder)`

the instance of Builder with the value for allowDivideAndConquerDownload modified.

### setAllowParallelCompositeUpload(boolean allowParallelCompositeUpload)

```
public TransferManagerConfig.Builder setAllowParallelCompositeUpload(boolean allowParallelCompositeUpload)
```

Whether to allow Transfer Manager to perform Parallel Composite Uploads if it determines chunking will be beneficial

_Default Value:_ false See Also: [TransferManagerConfig#isAllowDivideAndConquerDownload()](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.transfermanager.TransferManagerConfig#com_google_cloud_storage_transfermanager_TransferManagerConfig_isAllowDivideAndConquerDownload__)

**Parameter**

**Name**

**Description**

`allowParallelCompositeUpload`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TransferManagerConfig.Builder](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.transfermanager.TransferManagerConfig.Builder)`

the instance of Builder with the value for allowDivideAndConquerDownload modified.

### setMaxWorkers(int maxWorkers)

```
public TransferManagerConfig.Builder setMaxWorkers(int maxWorkers)
```

Maximum amount of workers to be allocated to perform work in Transfer Manager

_Default Value:_ `2 *` Runtime#getRuntime()`.`availableProcessors() See Also: [TransferManagerConfig#getMaxWorkers()](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.transfermanager.TransferManagerConfig#com_google_cloud_storage_transfermanager_TransferManagerConfig_getMaxWorkers__)

**Parameter**

**Name**

**Description**

`maxWorkers`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TransferManagerConfig.Builder](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.transfermanager.TransferManagerConfig.Builder)`

the instance of Builder with the value for maxWorkers modified.

### setParallelCompositeUploadPartNamingStrategy(ParallelCompositeUploadBlobWriteSessionConfig.PartNamingStrategy partNamingStrategy)

```
public TransferManagerConfig.Builder setParallelCompositeUploadPartNamingStrategy(ParallelCompositeUploadBlobWriteSessionConfig.PartNamingStrategy partNamingStrategy)
```

Part Naming Strategy that Transfer Manager will use during Parallel Composite Upload

_Default Value:_ PartNamingStrategy#noPrefix() See Also: [TransferManagerConfig#getParallelCompositeUploadPartNamingStrategy()](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.transfermanager.TransferManagerConfig#com_google_cloud_storage_transfermanager_TransferManagerConfig_getParallelCompositeUploadPartNamingStrategy__)

**Parameter**

**Name**

**Description**

`partNamingStrategy`

`[ParallelCompositeUploadBlobWriteSessionConfig.PartNamingStrategy](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.ParallelCompositeUploadBlobWriteSessionConfig.PartNamingStrategy)`  

**Returns**

**Type**

**Description**

`[TransferManagerConfig.Builder](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.transfermanager.TransferManagerConfig.Builder)`

the instance of Builder with the value for PartNamingStrategy modified.

### setPerWorkerBufferSize(int perWorkerBufferSize)

```
public TransferManagerConfig.Builder setPerWorkerBufferSize(int perWorkerBufferSize)
```

Buffer size allowed to each worker

_Default Value:_ 16MiB See Also: [TransferManagerConfig#getPerWorkerBufferSize()](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.transfermanager.TransferManagerConfig#com_google_cloud_storage_transfermanager_TransferManagerConfig_getPerWorkerBufferSize__)

**Parameter**

**Name**

**Description**

`perWorkerBufferSize`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TransferManagerConfig.Builder](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.transfermanager.TransferManagerConfig.Builder)`

the instance of Builder with the value for maxWorkers modified.

### setStorageOptions(StorageOptions storageOptions)

```
public TransferManagerConfig.Builder setStorageOptions(StorageOptions storageOptions)
```

Storage options that Transfer Manager will use to interact with Google Cloud Storage

_Default Value:_ [StorageOptions#getDefaultInstance()](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.StorageOptions#com_google_cloud_storage_StorageOptions_getDefaultInstance__) See Also: [TransferManagerConfig#getStorageOptions()](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.transfermanager.TransferManagerConfig#com_google_cloud_storage_transfermanager_TransferManagerConfig_getStorageOptions__)

**Parameter**

**Name**

**Description**

`storageOptions`

`[StorageOptions](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.StorageOptions)`  

**Returns**

**Type**

**Description**

`[TransferManagerConfig.Builder](/java/docs/reference/google-cloud-storage/2.48.2/com.google.cloud.storage.transfermanager.TransferManagerConfig.Builder)`

the instance of Builder with the value for storageOptions modified.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
