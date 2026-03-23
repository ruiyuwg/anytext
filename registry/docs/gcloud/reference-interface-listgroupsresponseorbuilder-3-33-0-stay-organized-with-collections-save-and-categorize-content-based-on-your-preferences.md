-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ListGroupsResponseOrBuilder (3.33.0) Stay organized with collections Save and categorize content based on your preferences.

3.88.0 (latest) 3.86.0 3.84.0 3.83.0 3.81.0 3.79.0 3.77.0 3.76.0 3.75.0 3.74.0 3.73.0 3.71.0 3.69.0 3.68.0 3.65.0 3.64.0 3.63.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.6 3.3.6 3.2.10

```
public interface ListGroupsResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getGroup(int index)

```
public abstract Group getGroup(int index)
```

The groups that match the specified filters.

`repeated .google.monitoring.v3.Group group = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Group](/java/docs/reference/google-cloud-monitoring/3.33.0/com.google.monitoring.v3.Group)`

### getGroupCount()

```
public abstract int getGroupCount()
```

The groups that match the specified filters.

`repeated .google.monitoring.v3.Group group = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getGroupList()

```
public abstract List<Group> getGroupList()
```

The groups that match the specified filters.

`repeated .google.monitoring.v3.Group group = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Group](/java/docs/reference/google-cloud-monitoring/3.33.0/com.google.monitoring.v3.Group)>`

### getGroupOrBuilder(int index)

```
public abstract GroupOrBuilder getGroupOrBuilder(int index)
```

The groups that match the specified filters.

`repeated .google.monitoring.v3.Group group = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GroupOrBuilder](/java/docs/reference/google-cloud-monitoring/3.33.0/com.google.monitoring.v3.GroupOrBuilder)`

### getGroupOrBuilderList()

```
public abstract List<? extends GroupOrBuilder> getGroupOrBuilderList()
```

The groups that match the specified filters.

`repeated .google.monitoring.v3.Group group = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.monitoring.v3.GroupOrBuilder>`

### getNextPageToken()

```
public abstract String getNextPageToken()
```

If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as `page_token` in the next call to this method.

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

If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as `page_token` in the next call to this method.

`string next_page_token = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for nextPageToken.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
