-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ListCloudDatabaseOperationsActionOrBuilder (6.72.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public interface ListCloudDatabaseOperationsActionOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getFilter()

```
public abstract String getFilter()
```

A filter expression that filters what operations are returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. Refer spanner\_database\_admin.proto.ListDatabaseOperationsRequest for detail.

`string filter = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The filter.

### getFilterBytes()

```
public abstract ByteString getFilterBytes()
```

A filter expression that filters what operations are returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. Refer spanner\_database\_admin.proto.ListDatabaseOperationsRequest for detail.

`string filter = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for filter.

### getInstanceId()

```
public abstract String getInstanceId()
```

Cloud instance ID (not path) to list database operations from, e.g. "test-instance".

`string instance_id = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The instanceId.

### getInstanceIdBytes()

```
public abstract ByteString getInstanceIdBytes()
```

Cloud instance ID (not path) to list database operations from, e.g. "test-instance".

`string instance_id = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for instanceId.

### getPageSize()

```
public abstract int getPageSize()
```

Number of databases to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.

`int32 page_size = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The pageSize.

### getPageToken()

```
public abstract String getPageToken()
```

If non-empty, "page\_token" should contain a next\_page\_token from a previous ListDatabaseOperationsResponse to the same "parent" and with the same "filter".

`string page_token = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The pageToken.

### getPageTokenBytes()

```
public abstract ByteString getPageTokenBytes()
```

If non-empty, "page\_token" should contain a next\_page\_token from a previous ListDatabaseOperationsResponse to the same "parent" and with the same "filter".

`string page_token = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for pageToken.

### getProjectId()

```
public abstract String getProjectId()
```

Cloud project ID, e.g. "spanner-cloud-systest".

`string project_id = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The projectId.

### getProjectIdBytes()

```
public abstract ByteString getProjectIdBytes()
```

Cloud project ID, e.g. "spanner-cloud-systest".

`string project_id = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for projectId.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
