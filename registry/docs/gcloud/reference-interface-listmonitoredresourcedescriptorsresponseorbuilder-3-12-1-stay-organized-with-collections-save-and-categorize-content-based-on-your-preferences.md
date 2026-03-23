-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ListMonitoredResourceDescriptorsResponseOrBuilder (3.12.1) Stay organized with collections Save and categorize content based on your preferences.

3.28.0 (latest) 3.26.0 3.24.0 3.23.10 3.22.6 3.21.4 3.20.7 3.19.0 3.18.0 3.17.2 3.16.2 3.15.17 3.14.9 3.13.7 3.12.1 3.11.10 3.10.7 3.9.0 3.8.0 3.7.6 3.6.4 3.5.3

```
public interface ListMonitoredResourceDescriptorsResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getNextPageToken()

```
public abstract String getNextPageToken()
```

If there might be more results than those appearing in this response, then `nextPageToken` is included. To get the next set of results, call this method again using the value of `nextPageToken` as `pageToken`.

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

If there might be more results than those appearing in this response, then `nextPageToken` is included. To get the next set of results, call this method again using the value of `nextPageToken` as `pageToken`.

`string next_page_token = 2;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for nextPageToken.

### getResourceDescriptors(int index)

```
public abstract MonitoredResourceDescriptor getResourceDescriptors(int index)
```

A list of resource descriptors.

`repeated .google.api.MonitoredResourceDescriptor resource_descriptors = 1;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

com.google.api.MonitoredResourceDescriptor

### getResourceDescriptorsCount()

```
public abstract int getResourceDescriptorsCount()
```

A list of resource descriptors.

`repeated .google.api.MonitoredResourceDescriptor resource_descriptors = 1;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getResourceDescriptorsList()

```
public abstract List<MonitoredResourceDescriptor> getResourceDescriptorsList()
```

A list of resource descriptors.

`repeated .google.api.MonitoredResourceDescriptor resource_descriptors = 1;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<com.google.api.MonitoredResourceDescriptor\>

### getResourceDescriptorsOrBuilder(int index)

```
public abstract MonitoredResourceDescriptorOrBuilder getResourceDescriptorsOrBuilder(int index)
```

A list of resource descriptors.

`repeated .google.api.MonitoredResourceDescriptor resource_descriptors = 1;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

com.google.api.MonitoredResourceDescriptorOrBuilder

### getResourceDescriptorsOrBuilderList()

```
public abstract List<? extends MonitoredResourceDescriptorOrBuilder> getResourceDescriptorsOrBuilderList()
```

A list of resource descriptors.

`repeated .google.api.MonitoredResourceDescriptor resource_descriptors = 1;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.api.MonitoredResourceDescriptorOrBuilder\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
