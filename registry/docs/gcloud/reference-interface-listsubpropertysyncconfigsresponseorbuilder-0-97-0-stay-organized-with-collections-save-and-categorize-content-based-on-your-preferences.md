-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ListSubpropertySyncConfigsResponseOrBuilder (0.97.0) Stay organized with collections Save and categorize content based on your preferences.

0.97.0 (latest) 0.95.0 0.93.0 0.92.0 0.91.0 0.90.0 0.88.0 0.86.0 0.85.0 0.84.0 0.83.0 0.82.0 0.80.0 0.78.0 0.77.0 0.74.0 0.73.0 0.72.0 0.70.0 0.69.0 0.68.0 0.67.0 0.66.0 0.65.0 0.64.0 0.63.0 0.62.0 0.61.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0

```
public interface ListSubpropertySyncConfigsResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getNextPageToken()

```
public abstract String getNextPageToken()
```

A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

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

A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

`string next_page_token = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for nextPageToken.

### getSubpropertySyncConfigs(int index)

```
public abstract SubpropertySyncConfig getSubpropertySyncConfigs(int index)
```

List of `SubpropertySyncConfig` resources.

`repeated .google.analytics.admin.v1alpha.SubpropertySyncConfig subproperty_sync_configs = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SubpropertySyncConfig](/java/docs/reference/google-analytics-admin/latest/com.google.analytics.admin.v1alpha.SubpropertySyncConfig)`

### getSubpropertySyncConfigsCount()

```
public abstract int getSubpropertySyncConfigsCount()
```

List of `SubpropertySyncConfig` resources.

`repeated .google.analytics.admin.v1alpha.SubpropertySyncConfig subproperty_sync_configs = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getSubpropertySyncConfigsList()

```
public abstract List<SubpropertySyncConfig> getSubpropertySyncConfigsList()
```

List of `SubpropertySyncConfig` resources.

`repeated .google.analytics.admin.v1alpha.SubpropertySyncConfig subproperty_sync_configs = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SubpropertySyncConfig](/java/docs/reference/google-analytics-admin/latest/com.google.analytics.admin.v1alpha.SubpropertySyncConfig)>`

### getSubpropertySyncConfigsOrBuilder(int index)

```
public abstract SubpropertySyncConfigOrBuilder getSubpropertySyncConfigsOrBuilder(int index)
```

List of `SubpropertySyncConfig` resources.

`repeated .google.analytics.admin.v1alpha.SubpropertySyncConfig subproperty_sync_configs = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SubpropertySyncConfigOrBuilder](/java/docs/reference/google-analytics-admin/latest/com.google.analytics.admin.v1alpha.SubpropertySyncConfigOrBuilder)`

### getSubpropertySyncConfigsOrBuilderList()

```
public abstract List<? extends SubpropertySyncConfigOrBuilder> getSubpropertySyncConfigsOrBuilderList()
```

List of `SubpropertySyncConfig` resources.

`repeated .google.analytics.admin.v1alpha.SubpropertySyncConfig subproperty_sync_configs = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.analytics.admin.v1alpha.SubpropertySyncConfigOrBuilder>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
