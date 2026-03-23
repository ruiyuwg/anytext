-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SourceOrBuilder (2.24.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.5 2.3.1 2.2.3 2.1.3

```
public interface SourceOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsFileHashes(String key)

```
public abstract boolean containsFileHashes(String key)
```

Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build.

The keys to this map are file paths used as build source and the values contain the hash values for those files.

If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file.

`map<string, .grafeas.v1.FileHashes> file_hashes = 2;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAdditionalContexts(int index)

```
public abstract SourceContext getAdditionalContexts(int index)
```

If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field.

`repeated .grafeas.v1.SourceContext additional_contexts = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SourceContext](/java/docs/reference/grafeas/2.24.0/io.grafeas.v1.SourceContext)`

### getAdditionalContextsCount()

```
public abstract int getAdditionalContextsCount()
```

If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field.

`repeated .grafeas.v1.SourceContext additional_contexts = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAdditionalContextsList()

```
public abstract List<SourceContext> getAdditionalContextsList()
```

If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field.

`repeated .grafeas.v1.SourceContext additional_contexts = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SourceContext](/java/docs/reference/grafeas/2.24.0/io.grafeas.v1.SourceContext)>`

### getAdditionalContextsOrBuilder(int index)

```
public abstract SourceContextOrBuilder getAdditionalContextsOrBuilder(int index)
```

If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field.

`repeated .grafeas.v1.SourceContext additional_contexts = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SourceContextOrBuilder](/java/docs/reference/grafeas/2.24.0/io.grafeas.v1.SourceContextOrBuilder)`

### getAdditionalContextsOrBuilderList()

```
public abstract List<? extends SourceContextOrBuilder> getAdditionalContextsOrBuilderList()
```

If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field.

`repeated .grafeas.v1.SourceContext additional_contexts = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends io.grafeas.v1.SourceContextOrBuilder>`

### getArtifactStorageSourceUri()

```
public abstract String getArtifactStorageSourceUri()
```

If provided, the input binary artifacts for the build came from this location.

`string artifact_storage_source_uri = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The artifactStorageSourceUri.

### getArtifactStorageSourceUriBytes()

```
public abstract ByteString getArtifactStorageSourceUriBytes()
```

If provided, the input binary artifacts for the build came from this location.

`string artifact_storage_source_uri = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for artifactStorageSourceUri.

### getContext()

```
public abstract SourceContext getContext()
```

If provided, the source code used for the build came from this location.

`.grafeas.v1.SourceContext context = 3;`

**Returns**

**Type**

**Description**

`[SourceContext](/java/docs/reference/grafeas/2.24.0/io.grafeas.v1.SourceContext)`

The context.

### getContextOrBuilder()

```
public abstract SourceContextOrBuilder getContextOrBuilder()
```

If provided, the source code used for the build came from this location.

`.grafeas.v1.SourceContext context = 3;`

**Returns**

**Type**

**Description**

`[SourceContextOrBuilder](/java/docs/reference/grafeas/2.24.0/io.grafeas.v1.SourceContextOrBuilder)`

### getFileHashes()

```
public abstract Map<String,FileHashes> getFileHashes()
```

Use [#getFileHashesMap()](/java/docs/reference/grafeas/2.24.0/io.grafeas.v1.SourceOrBuilder#io_grafeas_v1_SourceOrBuilder_getFileHashesMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[FileHashes](/java/docs/reference/grafeas/2.24.0/io.grafeas.v1.FileHashes)>`

### getFileHashesCount()

```
public abstract int getFileHashesCount()
```

Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build.

The keys to this map are file paths used as build source and the values contain the hash values for those files.

If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file.

`map<string, .grafeas.v1.FileHashes> file_hashes = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getFileHashesMap()

```
public abstract Map<String,FileHashes> getFileHashesMap()
```

Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build.

The keys to this map are file paths used as build source and the values contain the hash values for those files.

If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file.

`map<string, .grafeas.v1.FileHashes> file_hashes = 2;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[FileHashes](/java/docs/reference/grafeas/2.24.0/io.grafeas.v1.FileHashes)>`

### getFileHashesOrDefault(String key, FileHashes defaultValue)

```
public abstract FileHashes getFileHashesOrDefault(String key, FileHashes defaultValue)
```

Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build.

The keys to this map are file paths used as build source and the values contain the hash values for those files.

If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file.

`map<string, .grafeas.v1.FileHashes> file_hashes = 2;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[FileHashes](/java/docs/reference/grafeas/2.24.0/io.grafeas.v1.FileHashes)`  

**Returns**

**Type**

**Description**

`[FileHashes](/java/docs/reference/grafeas/2.24.0/io.grafeas.v1.FileHashes)`

### getFileHashesOrThrow(String key)

```
public abstract FileHashes getFileHashesOrThrow(String key)
```

Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build.

The keys to this map are file paths used as build source and the values contain the hash values for those files.

If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file.

`map<string, .grafeas.v1.FileHashes> file_hashes = 2;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[FileHashes](/java/docs/reference/grafeas/2.24.0/io.grafeas.v1.FileHashes)`

### hasContext()

```
public abstract boolean hasContext()
```

If provided, the source code used for the build came from this location.

`.grafeas.v1.SourceContext context = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the context field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
