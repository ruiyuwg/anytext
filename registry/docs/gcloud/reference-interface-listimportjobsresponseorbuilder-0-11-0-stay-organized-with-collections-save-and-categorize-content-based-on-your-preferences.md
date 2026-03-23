-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ListImportJobsResponseOrBuilder (0.11.0) Stay organized with collections Save and categorize content based on your preferences.

0.69.0 (latest) 0.67.0 0.65.0 0.64.0 0.62.0 0.60.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.52.0 0.50.0 0.49.0 0.46.0 0.45.0 0.44.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface ListImportJobsResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getImportJobs(int index)

```
public abstract ImportJob getImportJobs(int index)
```

The list of import jobs.

`repeated .google.cloud.migrationcenter.v1.ImportJob import_jobs = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ImportJob](/java/docs/reference/google-cloud-migrationcenter/0.11.0/com.google.cloud.migrationcenter.v1.ImportJob)`

### getImportJobsCount()

```
public abstract int getImportJobsCount()
```

The list of import jobs.

`repeated .google.cloud.migrationcenter.v1.ImportJob import_jobs = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getImportJobsList()

```
public abstract List<ImportJob> getImportJobsList()
```

The list of import jobs.

`repeated .google.cloud.migrationcenter.v1.ImportJob import_jobs = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ImportJob](/java/docs/reference/google-cloud-migrationcenter/0.11.0/com.google.cloud.migrationcenter.v1.ImportJob)>`

### getImportJobsOrBuilder(int index)

```
public abstract ImportJobOrBuilder getImportJobsOrBuilder(int index)
```

The list of import jobs.

`repeated .google.cloud.migrationcenter.v1.ImportJob import_jobs = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ImportJobOrBuilder](/java/docs/reference/google-cloud-migrationcenter/0.11.0/com.google.cloud.migrationcenter.v1.ImportJobOrBuilder)`

### getImportJobsOrBuilderList()

```
public abstract List<? extends ImportJobOrBuilder> getImportJobsOrBuilderList()
```

The list of import jobs.

`repeated .google.cloud.migrationcenter.v1.ImportJob import_jobs = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.migrationcenter.v1.ImportJobOrBuilder>`

### getNextPageToken()

```
public abstract String getNextPageToken()
```

A token identifying a page of results the server should return.

`string next_page_token = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The nextPageToken.

### getNextPageTokenBytes()

```
public abstract ByteString getNextPageTokenBytes()
```

A token identifying a page of results the server should return.

`string next_page_token = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for nextPageToken.

### getUnreachable(int index)

```
public abstract String getUnreachable(int index)
```

Locations that could not be reached.

`repeated string unreachable = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The unreachable at the given index.

### getUnreachableBytes(int index)

```
public abstract ByteString getUnreachableBytes(int index)
```

Locations that could not be reached.

`repeated string unreachable = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the unreachable at the given index.

### getUnreachableCount()

```
public abstract int getUnreachableCount()
```

Locations that could not be reached.

`repeated string unreachable = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of unreachable.

### getUnreachableList()

```
public abstract List<String> getUnreachableList()
```

Locations that could not be reached.

`repeated string unreachable = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the unreachable.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
