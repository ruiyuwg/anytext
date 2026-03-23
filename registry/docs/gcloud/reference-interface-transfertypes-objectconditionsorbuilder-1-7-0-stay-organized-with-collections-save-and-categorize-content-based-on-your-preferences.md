-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface TransferTypes.ObjectConditionsOrBuilder (1.7.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.0.4

```
public static interface TransferTypes.ObjectConditionsOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getExcludePrefixes(int index)

```
public abstract String getExcludePrefixes(int index)
```

If you specify `exclude_prefixes`, Storage Transfer Service uses the items in the `exclude_prefixes` array to determine which objects to exclude from a transfer. Objects must not start with one of the matching `exclude_prefixes` for inclusion in a transfer. The following are requirements of `exclude_prefixes`:

-   Each exclude-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported.
-   Each exclude-prefix must omit the leading slash. For example, to exclude the object `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the exclude-prefix as `logs/y=2015/requests.gz`.
-   None of the exclude-prefix values can be empty, if specified.
-   Each exclude-prefix must exclude a distinct portion of the object namespace. No exclude-prefix may be a prefix of another exclude-prefix.
-   If include\_prefixes is specified, then each exclude-prefix must start with the value of a path explicitly included by `include_prefixes`. The max size of `exclude_prefixes` is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers).

`repeated string exclude_prefixes = 4;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The excludePrefixes at the given index.

### getExcludePrefixesBytes(int index)

```
public abstract ByteString getExcludePrefixesBytes(int index)
```

If you specify `exclude_prefixes`, Storage Transfer Service uses the items in the `exclude_prefixes` array to determine which objects to exclude from a transfer. Objects must not start with one of the matching `exclude_prefixes` for inclusion in a transfer. The following are requirements of `exclude_prefixes`:

-   Each exclude-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported.
-   Each exclude-prefix must omit the leading slash. For example, to exclude the object `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the exclude-prefix as `logs/y=2015/requests.gz`.
-   None of the exclude-prefix values can be empty, if specified.
-   Each exclude-prefix must exclude a distinct portion of the object namespace. No exclude-prefix may be a prefix of another exclude-prefix.
-   If include\_prefixes is specified, then each exclude-prefix must start with the value of a path explicitly included by `include_prefixes`. The max size of `exclude_prefixes` is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers).

`repeated string exclude_prefixes = 4;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes of the excludePrefixes at the given index.

### getExcludePrefixesCount()

```
public abstract int getExcludePrefixesCount()
```

If you specify `exclude_prefixes`, Storage Transfer Service uses the items in the `exclude_prefixes` array to determine which objects to exclude from a transfer. Objects must not start with one of the matching `exclude_prefixes` for inclusion in a transfer. The following are requirements of `exclude_prefixes`:

-   Each exclude-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported.
-   Each exclude-prefix must omit the leading slash. For example, to exclude the object `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the exclude-prefix as `logs/y=2015/requests.gz`.
-   None of the exclude-prefix values can be empty, if specified.
-   Each exclude-prefix must exclude a distinct portion of the object namespace. No exclude-prefix may be a prefix of another exclude-prefix.
-   If include\_prefixes is specified, then each exclude-prefix must start with the value of a path explicitly included by `include_prefixes`. The max size of `exclude_prefixes` is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers).

`repeated string exclude_prefixes = 4;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of excludePrefixes.

### getExcludePrefixesList()

```
public abstract List<String> getExcludePrefixesList()
```

If you specify `exclude_prefixes`, Storage Transfer Service uses the items in the `exclude_prefixes` array to determine which objects to exclude from a transfer. Objects must not start with one of the matching `exclude_prefixes` for inclusion in a transfer. The following are requirements of `exclude_prefixes`:

-   Each exclude-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported.
-   Each exclude-prefix must omit the leading slash. For example, to exclude the object `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the exclude-prefix as `logs/y=2015/requests.gz`.
-   None of the exclude-prefix values can be empty, if specified.
-   Each exclude-prefix must exclude a distinct portion of the object namespace. No exclude-prefix may be a prefix of another exclude-prefix.
-   If include\_prefixes is specified, then each exclude-prefix must start with the value of a path explicitly included by `include_prefixes`. The max size of `exclude_prefixes` is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers).

`repeated string exclude_prefixes = 4;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

A list containing the excludePrefixes.

### getIncludePrefixes(int index)

```
public abstract String getIncludePrefixes(int index)
```

If you specify `include_prefixes`, Storage Transfer Service uses the items in the `include_prefixes` array to determine which objects to include in a transfer. Objects must start with one of the matching `include_prefixes` for inclusion in the transfer. If exclude\_prefixes is specified, objects must not start with any of the `exclude_prefixes` specified for inclusion in the transfer. The following are requirements of `include_prefixes`:

-   Each include-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported.
-   Each include-prefix must omit the leading slash. For example, to include the object `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the include-prefix as `logs/y=2015/requests.gz`.
-   None of the include-prefix values can be empty, if specified.
-   Each include-prefix must include a distinct portion of the object namespace. No include-prefix may be a prefix of another include-prefix. The max size of `include_prefixes` is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers).

`repeated string include_prefixes = 3;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The includePrefixes at the given index.

### getIncludePrefixesBytes(int index)

```
public abstract ByteString getIncludePrefixesBytes(int index)
```

If you specify `include_prefixes`, Storage Transfer Service uses the items in the `include_prefixes` array to determine which objects to include in a transfer. Objects must start with one of the matching `include_prefixes` for inclusion in the transfer. If exclude\_prefixes is specified, objects must not start with any of the `exclude_prefixes` specified for inclusion in the transfer. The following are requirements of `include_prefixes`:

-   Each include-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported.
-   Each include-prefix must omit the leading slash. For example, to include the object `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the include-prefix as `logs/y=2015/requests.gz`.
-   None of the include-prefix values can be empty, if specified.
-   Each include-prefix must include a distinct portion of the object namespace. No include-prefix may be a prefix of another include-prefix. The max size of `include_prefixes` is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers).

`repeated string include_prefixes = 3;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes of the includePrefixes at the given index.

### getIncludePrefixesCount()

```
public abstract int getIncludePrefixesCount()
```

If you specify `include_prefixes`, Storage Transfer Service uses the items in the `include_prefixes` array to determine which objects to include in a transfer. Objects must start with one of the matching `include_prefixes` for inclusion in the transfer. If exclude\_prefixes is specified, objects must not start with any of the `exclude_prefixes` specified for inclusion in the transfer. The following are requirements of `include_prefixes`:

-   Each include-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported.
-   Each include-prefix must omit the leading slash. For example, to include the object `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the include-prefix as `logs/y=2015/requests.gz`.
-   None of the include-prefix values can be empty, if specified.
-   Each include-prefix must include a distinct portion of the object namespace. No include-prefix may be a prefix of another include-prefix. The max size of `include_prefixes` is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers).

`repeated string include_prefixes = 3;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of includePrefixes.

### getIncludePrefixesList()

```
public abstract List<String> getIncludePrefixesList()
```

If you specify `include_prefixes`, Storage Transfer Service uses the items in the `include_prefixes` array to determine which objects to include in a transfer. Objects must start with one of the matching `include_prefixes` for inclusion in the transfer. If exclude\_prefixes is specified, objects must not start with any of the `exclude_prefixes` specified for inclusion in the transfer. The following are requirements of `include_prefixes`:

-   Each include-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported.
-   Each include-prefix must omit the leading slash. For example, to include the object `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the include-prefix as `logs/y=2015/requests.gz`.
-   None of the include-prefix values can be empty, if specified.
-   Each include-prefix must include a distinct portion of the object namespace. No include-prefix may be a prefix of another include-prefix. The max size of `include_prefixes` is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers).

`repeated string include_prefixes = 3;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

A list containing the includePrefixes.

### getLastModifiedBefore()

```
public abstract Timestamp getLastModifiedBefore()
```

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

`.google.protobuf.Timestamp last_modified_before = 6;`

**Returns**

**Type**

**Description**

[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)

The lastModifiedBefore.

### getLastModifiedBeforeOrBuilder()

```
public abstract TimestampOrBuilder getLastModifiedBeforeOrBuilder()
```

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

`.google.protobuf.Timestamp last_modified_before = 6;`

**Returns**

**Type**

**Description**

[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)

### getLastModifiedSince()

```
public abstract Timestamp getLastModifiedSince()
```

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. The `last_modified_since` and `last_modified_before` fields can be used together for chunked data processing. For example, consider a script that processes each day's worth of data at a time. For that you'd set each of the fields as follows:

-   `last_modified_since` to the start of the day
-   `last_modified_before` to the end of the day

`.google.protobuf.Timestamp last_modified_since = 5;`

**Returns**

**Type**

**Description**

[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)

The lastModifiedSince.

### getLastModifiedSinceOrBuilder()

```
public abstract TimestampOrBuilder getLastModifiedSinceOrBuilder()
```

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. The `last_modified_since` and `last_modified_before` fields can be used together for chunked data processing. For example, consider a script that processes each day's worth of data at a time. For that you'd set each of the fields as follows:

-   `last_modified_since` to the start of the day
-   `last_modified_before` to the end of the day

`.google.protobuf.Timestamp last_modified_since = 5;`

**Returns**

**Type**

**Description**

[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)

### getMaxTimeElapsedSinceLastModification()

```
public abstract Duration getMaxTimeElapsedSinceLastModification()
```

Ensures that objects are not transferred if a specific maximum time has elapsed since the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start\_time of the `TransferOperation`and the "last modification time" of the object is less than the value of max\_time\_elapsed\_since\_last\_modification\`. Objects that do not have a "last modification time" are also transferred.

`.google.protobuf.Duration max_time_elapsed_since_last_modification = 2;`

**Returns**

**Type**

**Description**

[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)

The maxTimeElapsedSinceLastModification.

### getMaxTimeElapsedSinceLastModificationOrBuilder()

```
public abstract DurationOrBuilder getMaxTimeElapsedSinceLastModificationOrBuilder()
```

Ensures that objects are not transferred if a specific maximum time has elapsed since the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start\_time of the `TransferOperation`and the "last modification time" of the object is less than the value of max\_time\_elapsed\_since\_last\_modification\`. Objects that do not have a "last modification time" are also transferred.

`.google.protobuf.Duration max_time_elapsed_since_last_modification = 2;`

**Returns**

**Type**

**Description**

[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)

### getMinTimeElapsedSinceLastModification()

```
public abstract Duration getMinTimeElapsedSinceLastModification()
```

Ensures that objects are not transferred until a specific minimum time has elapsed after the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start\_time of the `TransferOperation` and the "last modification time" of the object is equal to or greater than the value of min\_time\_elapsed\_since\_last\_modification\`. Objects that do not have a "last modification time" are also transferred.

`.google.protobuf.Duration min_time_elapsed_since_last_modification = 1;`

**Returns**

**Type**

**Description**

[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)

The minTimeElapsedSinceLastModification.

### getMinTimeElapsedSinceLastModificationOrBuilder()

```
public abstract DurationOrBuilder getMinTimeElapsedSinceLastModificationOrBuilder()
```

Ensures that objects are not transferred until a specific minimum time has elapsed after the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start\_time of the `TransferOperation` and the "last modification time" of the object is equal to or greater than the value of min\_time\_elapsed\_since\_last\_modification\`. Objects that do not have a "last modification time" are also transferred.

`.google.protobuf.Duration min_time_elapsed_since_last_modification = 1;`

**Returns**

**Type**

**Description**

[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)

### hasLastModifiedBefore()

```
public abstract boolean hasLastModifiedBefore()
```

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

`.google.protobuf.Timestamp last_modified_before = 6;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the lastModifiedBefore field is set.

### hasLastModifiedSince()

```
public abstract boolean hasLastModifiedSince()
```

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. The `last_modified_since` and `last_modified_before` fields can be used together for chunked data processing. For example, consider a script that processes each day's worth of data at a time. For that you'd set each of the fields as follows:

-   `last_modified_since` to the start of the day
-   `last_modified_before` to the end of the day

`.google.protobuf.Timestamp last_modified_since = 5;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the lastModifiedSince field is set.

### hasMaxTimeElapsedSinceLastModification()

```
public abstract boolean hasMaxTimeElapsedSinceLastModification()
```

Ensures that objects are not transferred if a specific maximum time has elapsed since the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start\_time of the `TransferOperation`and the "last modification time" of the object is less than the value of max\_time\_elapsed\_since\_last\_modification\`. Objects that do not have a "last modification time" are also transferred.

`.google.protobuf.Duration max_time_elapsed_since_last_modification = 2;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the maxTimeElapsedSinceLastModification field is set.

### hasMinTimeElapsedSinceLastModification()

```
public abstract boolean hasMinTimeElapsedSinceLastModification()
```

Ensures that objects are not transferred until a specific minimum time has elapsed after the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start\_time of the `TransferOperation` and the "last modification time" of the object is equal to or greater than the value of min\_time\_elapsed\_since\_last\_modification\`. Objects that do not have a "last modification time" are also transferred.

`.google.protobuf.Duration min_time_elapsed_since_last_modification = 1;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the minTimeElapsedSinceLastModification field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
