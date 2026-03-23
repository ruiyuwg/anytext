-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CatalogAttribute.FacetConfig.IgnoredFacetValuesOrBuilder (2.58.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public static interface CatalogAttribute.FacetConfig.IgnoredFacetValuesOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getEndTime()

```
public abstract Timestamp getEndTime()
```

If start time is empty and end time is not empty, then ignore these facet values before end time.

`.google.protobuf.Timestamp end_time = 3;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The endTime.

### getEndTimeOrBuilder()

```
public abstract TimestampOrBuilder getEndTimeOrBuilder()
```

If start time is empty and end time is not empty, then ignore these facet values before end time.

`.google.protobuf.Timestamp end_time = 3;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getStartTime()

```
public abstract Timestamp getStartTime()
```

Time range for the current list of facet values to ignore. If multiple time ranges are specified for an facet value for the current attribute, consider all of them. If both are empty, ignore always. If start time and end time are set, then start time must be before end time. If start time is not empty and end time is empty, then will ignore these facet values after the start time.

`.google.protobuf.Timestamp start_time = 2;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The startTime.

### getStartTimeOrBuilder()

```
public abstract TimestampOrBuilder getStartTimeOrBuilder()
```

Time range for the current list of facet values to ignore. If multiple time ranges are specified for an facet value for the current attribute, consider all of them. If both are empty, ignore always. If start time and end time are set, then start time must be before end time. If start time is not empty and end time is empty, then will ignore these facet values after the start time.

`.google.protobuf.Timestamp start_time = 2;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getValues(int index)

```
public abstract String getValues(int index)
```

List of facet values to ignore for the following time range. The facet values are the same as the attribute values. There is a limit of 10 values per instance of IgnoredFacetValues. Each value can have at most 128 characters.

`repeated string values = 1;`

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

The values at the given index.

### getValuesBytes(int index)

```
public abstract ByteString getValuesBytes(int index)
```

List of facet values to ignore for the following time range. The facet values are the same as the attribute values. There is a limit of 10 values per instance of IgnoredFacetValues. Each value can have at most 128 characters.

`repeated string values = 1;`

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

The bytes of the values at the given index.

### getValuesCount()

```
public abstract int getValuesCount()
```

List of facet values to ignore for the following time range. The facet values are the same as the attribute values. There is a limit of 10 values per instance of IgnoredFacetValues. Each value can have at most 128 characters.

`repeated string values = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of values.

### getValuesList()

```
public abstract List<String> getValuesList()
```

List of facet values to ignore for the following time range. The facet values are the same as the attribute values. There is a limit of 10 values per instance of IgnoredFacetValues. Each value can have at most 128 characters.

`repeated string values = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the values.

### hasEndTime()

```
public abstract boolean hasEndTime()
```

If start time is empty and end time is not empty, then ignore these facet values before end time.

`.google.protobuf.Timestamp end_time = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the endTime field is set.

### hasStartTime()

```
public abstract boolean hasStartTime()
```

Time range for the current list of facet values to ignore. If multiple time ranges are specified for an facet value for the current attribute, consider all of them. If both are empty, ignore always. If start time and end time are set, then start time must be before end time. If start time is not empty and end time is empty, then will ignore these facet values after the start time.

`.google.protobuf.Timestamp start_time = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the startTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
