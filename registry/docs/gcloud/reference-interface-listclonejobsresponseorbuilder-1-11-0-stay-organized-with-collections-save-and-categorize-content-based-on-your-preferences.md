-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ListCloneJobsResponseOrBuilder (1.11.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.5 1.2.0 1.1.1 1.0.5

```
public interface ListCloneJobsResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCloneJobs(int index)

```
public abstract CloneJob getCloneJobs(int index)
```

Output only. The list of clone jobs response.

`repeated .google.cloud.vmmigration.v1.CloneJob clone_jobs = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CloneJob](/java/docs/reference/google-cloud-vmmigration/1.11.0/com.google.cloud.vmmigration.v1.CloneJob)`

### getCloneJobsCount()

```
public abstract int getCloneJobsCount()
```

Output only. The list of clone jobs response.

`repeated .google.cloud.vmmigration.v1.CloneJob clone_jobs = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getCloneJobsList()

```
public abstract List<CloneJob> getCloneJobsList()
```

Output only. The list of clone jobs response.

`repeated .google.cloud.vmmigration.v1.CloneJob clone_jobs = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[CloneJob](/java/docs/reference/google-cloud-vmmigration/1.11.0/com.google.cloud.vmmigration.v1.CloneJob)>`

### getCloneJobsOrBuilder(int index)

```
public abstract CloneJobOrBuilder getCloneJobsOrBuilder(int index)
```

Output only. The list of clone jobs response.

`repeated .google.cloud.vmmigration.v1.CloneJob clone_jobs = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CloneJobOrBuilder](/java/docs/reference/google-cloud-vmmigration/1.11.0/com.google.cloud.vmmigration.v1.CloneJobOrBuilder)`

### getCloneJobsOrBuilderList()

```
public abstract List<? extends CloneJobOrBuilder> getCloneJobsOrBuilderList()
```

Output only. The list of clone jobs response.

`repeated .google.cloud.vmmigration.v1.CloneJob clone_jobs = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vmmigration.v1.CloneJobOrBuilder>`

### getNextPageToken()

```
public abstract String getNextPageToken()
```

Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

`string next_page_token = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The nextPageToken.

### getNextPageTokenBytes()

```
public abstract ByteString getNextPageTokenBytes()
```

Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

`string next_page_token = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for nextPageToken.

### getUnreachable(int index)

```
public abstract String getUnreachable(int index)
```

Output only. Locations that could not be reached.

`repeated string unreachable = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

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

Output only. Locations that could not be reached.

`repeated string unreachable = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

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

Output only. Locations that could not be reached.

`repeated string unreachable = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of unreachable.

### getUnreachableList()

```
public abstract List<String> getUnreachableList()
```

Output only. Locations that could not be reached.

`repeated string unreachable = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the unreachable.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
