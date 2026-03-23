-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface Topic.RetentionConfigOrBuilder (1.7.1) Stay organized with collections Save and categorize content based on your preferences.

1.16.2 (latest) 1.16.1 1.15.21 1.14.8 1.13.8 1.12.22 1.11.2 1.10.0 1.9.4 1.8.0 1.7.1 1.6.3 1.5.5 1.4.12

```
public static interface Topic.RetentionConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getPerPartitionBytes()

```
public abstract long getPerPartitionBytes()
```

The provisioned storage, in bytes, per partition. If the number of bytes stored in any of the topic's partitions grows beyond this value, older messages will be dropped to make room for newer ones, regardless of the value of `period`.

`int64 per_partition_bytes = 1;`

**Returns**

**Type**

**Description**

[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The perPartitionBytes.

### getPeriod()

```
public abstract Duration getPeriod()
```

How long a published message is retained. If unset, messages will be retained as long as the bytes retained for each partition is below `per_partition_bytes`.

`.google.protobuf.Duration period = 2;`

**Returns**

**Type**

**Description**

[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)

The period.

### getPeriodOrBuilder()

```
public abstract DurationOrBuilder getPeriodOrBuilder()
```

How long a published message is retained. If unset, messages will be retained as long as the bytes retained for each partition is below `per_partition_bytes`.

`.google.protobuf.Duration period = 2;`

**Returns**

**Type**

**Description**

[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)

### hasPeriod()

```
public abstract boolean hasPeriod()
```

How long a published message is retained. If unset, messages will be retained as long as the bytes retained for each partition is below `per_partition_bytes`.

`.google.protobuf.Duration period = 2;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the period field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
