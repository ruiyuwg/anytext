-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface GroupFindingsRequestOrBuilder (2.10.0) Stay organized with collections Save and categorize content based on your preferences.

2.95.0 (latest) 2.93.0 2.91.0 2.90.0 2.88.0 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.72.0 2.71.0 2.70.0 2.68.0 2.67.0 2.66.0 2.65.0 2.64.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.10.0 2.9.0 2.8.0 2.7.1 2.6.0 2.5.6 2.3.2

```
public interface GroupFindingsRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCompareDuration()

```
public abstract Duration getCompareDuration()
```

When compare\_duration is set, the GroupResult's "state\_change" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added during the compare\_duration period of time that precedes the read\_time. This is the time between (read\_time - compare\_duration) and read\_time. The state\_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible "state\_change" values when compare\_duration is specified:

-   "CHANGED": indicates that the finding was present and matched the given filter at the start of compare\_duration, but changed its state at read\_time.
-   "UNCHANGED": indicates that the finding was present and matched the given filter at the start of compare\_duration and did not change state at read\_time.
-   "ADDED": indicates that the finding did not match the given filter or was not present at the start of compare\_duration, but was present at read\_time.
-   "REMOVED": indicates that the finding was present and matched the filter at the start of compare\_duration, but did not match the filter at read\_time. If compare\_duration is not specified, then the only possible state\_change is "UNUSED", which will be the state\_change set for all findings present at read\_time. If this field is set then `state_change` must be a specified field in `group_by`.

`.google.protobuf.Duration compare_duration = 5;`

**Returns**

**Type**

**Description**

[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)

The compareDuration.

### getCompareDurationOrBuilder()

```
public abstract DurationOrBuilder getCompareDurationOrBuilder()
```

When compare\_duration is set, the GroupResult's "state\_change" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added during the compare\_duration period of time that precedes the read\_time. This is the time between (read\_time - compare\_duration) and read\_time. The state\_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible "state\_change" values when compare\_duration is specified:

-   "CHANGED": indicates that the finding was present and matched the given filter at the start of compare\_duration, but changed its state at read\_time.
-   "UNCHANGED": indicates that the finding was present and matched the given filter at the start of compare\_duration and did not change state at read\_time.
-   "ADDED": indicates that the finding did not match the given filter or was not present at the start of compare\_duration, but was present at read\_time.
-   "REMOVED": indicates that the finding was present and matched the filter at the start of compare\_duration, but did not match the filter at read\_time. If compare\_duration is not specified, then the only possible state\_change is "UNUSED", which will be the state\_change set for all findings present at read\_time. If this field is set then `state_change` must be a specified field in `group_by`.

`.google.protobuf.Duration compare_duration = 5;`

**Returns**

**Type**

**Description**

[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)

### getFilter()

```
public abstract String getFilter()
```

Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form `<field> <operator> <value>` and may have a `-` character in front of them to indicate negation. Examples include:

-   name
-   source\_properties.a\_property
-   security\_marks.marks.marka The supported operators are:
    -   `=` for all value types.
    -   `>`, `<`, `>=`, `<=` for integer values.
    -   `:`, meaning substring matching, for strings. The supported value types are:
    -   string literals in quotes.
    -   integer literals without quotes.
    -   boolean literals `true` and `false` without quotes. The following field and operator combinations are supported:
    -   name: `=`
    -   parent: `=`, `:`
    -   resource\_name: `=`, `:`
    -   state: `=`, `:`
    -   category: `=`, `:`
    -   external\_uri: `=`, `:`
    -   event\_time: `=`, `>`, `<`, `>=`, `<=`
    -   severity: `=`, `:` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `event_time = "2019-06-10T16:07:18-07:00"` `event_time = 1560208038000`
    -   security\_marks.marks: `=`, `:`
    -   source\_properties: `=`, `:`, `>`, `<`, `>=`, `<=` For example, `source_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `source_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-source_properties.my_property : ""`

`string filter = 2;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The filter.

### getFilterBytes()

```
public abstract ByteString getFilterBytes()
```

Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form `<field> <operator> <value>` and may have a `-` character in front of them to indicate negation. Examples include:

-   name
-   source\_properties.a\_property
-   security\_marks.marks.marka The supported operators are:
    -   `=` for all value types.
    -   `>`, `<`, `>=`, `<=` for integer values.
    -   `:`, meaning substring matching, for strings. The supported value types are:
    -   string literals in quotes.
    -   integer literals without quotes.
    -   boolean literals `true` and `false` without quotes. The following field and operator combinations are supported:
    -   name: `=`
    -   parent: `=`, `:`
    -   resource\_name: `=`, `:`
    -   state: `=`, `:`
    -   category: `=`, `:`
    -   external\_uri: `=`, `:`
    -   event\_time: `=`, `>`, `<`, `>=`, `<=`
    -   severity: `=`, `:` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `event_time = "2019-06-10T16:07:18-07:00"` `event_time = 1560208038000`
    -   security\_marks.marks: `=`, `:`
    -   source\_properties: `=`, `:`, `>`, `<`, `>=`, `<=` For example, `source_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `source_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-source_properties.my_property : ""`

`string filter = 2;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for filter.

### getGroupBy()

```
public abstract String getGroupBy()
```

Required. Expression that defines what assets fields to use for grouping (including `state_change`). The string value should follow SQL syntax: comma separated list of fields. For example: "parent,resource\_name". The following fields are supported:

-   resource\_name
-   category
-   state
-   parent
-   severity The following fields are supported when compare\_duration is set:
-   state\_change

`string group_by = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The groupBy.

### getGroupByBytes()

```
public abstract ByteString getGroupByBytes()
```

Required. Expression that defines what assets fields to use for grouping (including `state_change`). The string value should follow SQL syntax: comma separated list of fields. For example: "parent,resource\_name". The following fields are supported:

-   resource\_name
-   category
-   state
-   parent
-   severity The following fields are supported when compare\_duration is set:
-   state\_change

`string group_by = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for groupBy.

### getPageSize()

```
public abstract int getPageSize()
```

The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.

`int32 page_size = 8;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The pageSize.

### getPageToken()

```
public abstract String getPageToken()
```

The value returned by the last `GroupFindingsResponse`; indicates that this is a continuation of a prior `GroupFindings` call, and that the system should return the next page of data.

`string page_token = 7;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The pageToken.

### getPageTokenBytes()

```
public abstract ByteString getPageTokenBytes()
```

The value returned by the last `GroupFindingsResponse`; indicates that this is a continuation of a prior `GroupFindings` call, and that the system should return the next page of data.

`string page_token = 7;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for pageToken.

### getParent()

```
public abstract String getParent()
```

Required. Name of the source to groupBy. Its format is "organizations/\[organization\_id\]/sources/\[source\_id\]", folders/\[folder\_id\]/sources/\[source\_id\], or projects/\[project\_id\]/sources/\[source\_id\]. To groupBy across all sources provide a source\_id of `-`. For example: organizations/{organization\_id}/sources/-, folders/{folder\_id}/sources/-, or projects/{project\_id}/sources/-

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The parent.

### getParentBytes()

```
public abstract ByteString getParentBytes()
```

Required. Name of the source to groupBy. Its format is "organizations/\[organization\_id\]/sources/\[source\_id\]", folders/\[folder\_id\]/sources/\[source\_id\], or projects/\[project\_id\]/sources/\[source\_id\]. To groupBy across all sources provide a source\_id of `-`. For example: organizations/{organization\_id}/sources/-, folders/{folder\_id}/sources/-, or projects/{project\_id}/sources/-

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for parent.

### getReadTime()

```
public abstract Timestamp getReadTime()
```

Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.

`.google.protobuf.Timestamp read_time = 4;`

**Returns**

**Type**

**Description**

[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)

The readTime.

### getReadTimeOrBuilder()

```
public abstract TimestampOrBuilder getReadTimeOrBuilder()
```

Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.

`.google.protobuf.Timestamp read_time = 4;`

**Returns**

**Type**

**Description**

[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)

### hasCompareDuration()

```
public abstract boolean hasCompareDuration()
```

When compare\_duration is set, the GroupResult's "state\_change" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added during the compare\_duration period of time that precedes the read\_time. This is the time between (read\_time - compare\_duration) and read\_time. The state\_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible "state\_change" values when compare\_duration is specified:

-   "CHANGED": indicates that the finding was present and matched the given filter at the start of compare\_duration, but changed its state at read\_time.
-   "UNCHANGED": indicates that the finding was present and matched the given filter at the start of compare\_duration and did not change state at read\_time.
-   "ADDED": indicates that the finding did not match the given filter or was not present at the start of compare\_duration, but was present at read\_time.
-   "REMOVED": indicates that the finding was present and matched the filter at the start of compare\_duration, but did not match the filter at read\_time. If compare\_duration is not specified, then the only possible state\_change is "UNUSED", which will be the state\_change set for all findings present at read\_time. If this field is set then `state_change` must be a specified field in `group_by`.

`.google.protobuf.Duration compare_duration = 5;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the compareDuration field is set.

### hasReadTime()

```
public abstract boolean hasReadTime()
```

Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.

`.google.protobuf.Timestamp read_time = 4;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the readTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
