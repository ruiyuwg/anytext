-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SearchFoldersResponseOrBuilder (1.5.6) Stay organized with collections Save and categorize content based on your preferences.

1.89.0 (latest) 1.87.0 1.85.0 1.84.0 1.82.0 1.80.0 1.78.0 1.77.0 1.76.0 1.75.0 1.74.0 1.72.0 1.70.0 1.69.0 1.66.0 1.65.0 1.64.0 1.62.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.6 1.4.0 1.3.2 1.2.12

```
public interface SearchFoldersResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getFolders(int index)

```
public abstract Folder getFolders(int index)
```

A possibly paginated folder search results. the specified parent resource.

`repeated .google.cloud.resourcemanager.v3.Folder folders = 1;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[Folder](/java/docs/reference/google-cloud-resourcemanager/1.5.6/com.google.cloud.resourcemanager.v3.Folder)

### getFoldersCount()

```
public abstract int getFoldersCount()
```

A possibly paginated folder search results. the specified parent resource.

`repeated .google.cloud.resourcemanager.v3.Folder folders = 1;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getFoldersList()

```
public abstract List<Folder> getFoldersList()
```

A possibly paginated folder search results. the specified parent resource.

`repeated .google.cloud.resourcemanager.v3.Folder folders = 1;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Folder](/java/docs/reference/google-cloud-resourcemanager/1.5.6/com.google.cloud.resourcemanager.v3.Folder)\>

### getFoldersOrBuilder(int index)

```
public abstract FolderOrBuilder getFoldersOrBuilder(int index)
```

A possibly paginated folder search results. the specified parent resource.

`repeated .google.cloud.resourcemanager.v3.Folder folders = 1;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[FolderOrBuilder](/java/docs/reference/google-cloud-resourcemanager/1.5.6/com.google.cloud.resourcemanager.v3.FolderOrBuilder)

### getFoldersOrBuilderList()

```
public abstract List<? extends FolderOrBuilder> getFoldersOrBuilderList()
```

A possibly paginated folder search results. the specified parent resource.

`repeated .google.cloud.resourcemanager.v3.Folder folders = 1;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.resourcemanager.v3.FolderOrBuilder\>

### getNextPageToken()

```
public abstract String getNextPageToken()
```

A pagination token returned from a previous call to `SearchFolders` that indicates from where searching should continue.

`string next_page_token = 2;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The nextPageToken.

### getNextPageTokenBytes()

```
public abstract ByteString getNextPageTokenBytes()
```

A pagination token returned from a previous call to `SearchFolders` that indicates from where searching should continue.

`string next_page_token = 2;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for nextPageToken.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
