-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum TypeCode (6.82.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public enum TypeCode extends Enum<TypeCode> implements ProtocolMessageEnum
```

`TypeCode` is used as part of Type to indicate the type of a Cloud Spanner value.

Each legal value of a type can be encoded to or decoded from a JSON value, using the encodings described below. All Cloud Spanner values can be `null`, regardless of type; `null`s are always encoded as a JSON `null`.

Protobuf enum `google.spanner.v1.TypeCode`

## Implements

[ProtocolMessageEnum](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolMessageEnum.html)

## Inherited Members

[Enum.<T>valueOf(Class<T>,String)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#valueOf-java.lang.Class-java.lang.String-)

[Enum.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#clone--)

[Enum.compareTo(E)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#compareTo-E-)

[Enum.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#equals-java.lang.Object-)

[Enum.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#finalize--)

[Enum.getDeclaringClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#getDeclaringClass--)

[Enum.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#hashCode--)

[Enum.name()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#name--)

[Enum.ordinal()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#ordinal--)

[Enum.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#toString--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Fields

**Name**

**Description**

`ARRAY`

Encoded as `list`, where the list elements are represented according to array\_element\_type.

`ARRAY = 8;`

`ARRAY_VALUE`

Encoded as `list`, where the list elements are represented according to array\_element\_type.

`ARRAY = 8;`

`BOOL`

Encoded as JSON `true` or `false`.

`BOOL = 1;`

`BOOL_VALUE`

Encoded as JSON `true` or `false`.

`BOOL = 1;`

`BYTES`

Encoded as a base64-encoded `string`, as described in RFC 4648, section 4.

`BYTES = 7;`

`BYTES_VALUE`

Encoded as a base64-encoded `string`, as described in RFC 4648, section 4.

`BYTES = 7;`

`DATE`

Encoded as `string` in RFC 3339 date format.

`DATE = 5;`

`DATE_VALUE`

Encoded as `string` in RFC 3339 date format.

`DATE = 5;`

`ENUM`

Encoded as `string`, in decimal format.

`ENUM = 14;`

`ENUM_VALUE`

Encoded as `string`, in decimal format.

`ENUM = 14;`

`FLOAT32`

Encoded as `number`, or the strings `"NaN"`, `"Infinity"`, or `"-Infinity"`.

`FLOAT32 = 15;`

`FLOAT32_VALUE`

Encoded as `number`, or the strings `"NaN"`, `"Infinity"`, or `"-Infinity"`.

`FLOAT32 = 15;`

`FLOAT64`

Encoded as `number`, or the strings `"NaN"`, `"Infinity"`, or `"-Infinity"`.

`FLOAT64 = 3;`

`FLOAT64_VALUE`

Encoded as `number`, or the strings `"NaN"`, `"Infinity"`, or `"-Infinity"`.

`FLOAT64 = 3;`

`INT64`

Encoded as `string`, in decimal format.

`INT64 = 2;`

`INT64_VALUE`

Encoded as `string`, in decimal format.

`INT64 = 2;`

`INTERVAL`

Encoded as `string`, in `ISO8601` duration format - `P[n]Y[n]M[n]DT[n]H[n]M[n[.fraction]]S` where `n` is an integer. For example, `P1Y2M3DT4H5M6.5S` represents time duration of 1 year, 2 months, 3 days, 4 hours, 5 minutes, and 6.5 seconds.

`INTERVAL = 16;`

`INTERVAL_VALUE`

Encoded as `string`, in `ISO8601` duration format - `P[n]Y[n]M[n]DT[n]H[n]M[n[.fraction]]S` where `n` is an integer. For example, `P1Y2M3DT4H5M6.5S` represents time duration of 1 year, 2 months, 3 days, 4 hours, 5 minutes, and 6.5 seconds.

`INTERVAL = 16;`

`JSON`

Encoded as a JSON-formatted `string` as described in RFC 7159. The following rules are applied when parsing JSON input:

-   Whitespace characters are not preserved.
-   If a JSON object has duplicate keys, only the first key is preserved.
-   Members of a JSON object are not guaranteed to have their order preserved.
-   JSON array elements will have their order preserved.

`JSON = 11;`

`JSON_VALUE`

Encoded as a JSON-formatted `string` as described in RFC 7159. The following rules are applied when parsing JSON input:

-   Whitespace characters are not preserved.
-   If a JSON object has duplicate keys, only the first key is preserved.
-   Members of a JSON object are not guaranteed to have their order preserved.
-   JSON array elements will have their order preserved.

`JSON = 11;`

`NUMERIC`

Encoded as `string`, in decimal format or scientific notation format. Decimal format: `[+-]Digits[.[Digits]]` or `+-.Digits`

Scientific notation: `[+-]Digits[.[Digits]][ExponentIndicator[+-]Digits]` or `+-.Digits[ExponentIndicator[+-]Digits]` (ExponentIndicator is `"e"` or `"E"`)

`NUMERIC = 10;`

`NUMERIC_VALUE`

Encoded as `string`, in decimal format or scientific notation format. Decimal format: `[+-]Digits[.[Digits]]` or `+-.Digits`

Scientific notation: `[+-]Digits[.[Digits]][ExponentIndicator[+-]Digits]` or `+-.Digits[ExponentIndicator[+-]Digits]` (ExponentIndicator is `"e"` or `"E"`)

`NUMERIC = 10;`

`PROTO`

Encoded as a base64-encoded `string`, as described in RFC 4648, section 4.

`PROTO = 13;`

`PROTO_VALUE`

Encoded as a base64-encoded `string`, as described in RFC 4648, section 4.

`PROTO = 13;`

`STRING`

Encoded as `string`.

`STRING = 6;`

`STRING_VALUE`

Encoded as `string`.

`STRING = 6;`

`STRUCT`

Encoded as `list`, where list element `i` is represented according to \[struct\_type.fields\[i\]\]\[google.spanner.v1.StructType.fields\].

`STRUCT = 9;`

`STRUCT_VALUE`

Encoded as `list`, where list element `i` is represented according to \[struct\_type.fields\[i\]\]\[google.spanner.v1.StructType.fields\].

`STRUCT = 9;`

`TIMESTAMP`

Encoded as `string` in RFC 3339 timestamp format. The time zone must be present, and must be `"Z"`.

If the schema has the column option `allow_commit_timestamp=true`, the placeholder string `"spanner.commit_timestamp()"` can be used to instruct the system to insert the commit timestamp associated with the transaction commit.

`TIMESTAMP = 4;`

`TIMESTAMP_VALUE`

Encoded as `string` in RFC 3339 timestamp format. The time zone must be present, and must be `"Z"`.

If the schema has the column option `allow_commit_timestamp=true`, the placeholder string `"spanner.commit_timestamp()"` can be used to instruct the system to insert the commit timestamp associated with the transaction commit.

`TIMESTAMP = 4;`

`TYPE_CODE_UNSPECIFIED`

Not specified.

`TYPE_CODE_UNSPECIFIED = 0;`

`TYPE_CODE_UNSPECIFIED_VALUE`

Not specified.

`TYPE_CODE_UNSPECIFIED = 0;`

`UNRECOGNIZED`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.v1.TypeCode#com_google_spanner_v1_TypeCode_forNumber_int_) instead._

`valueOf(String name)`

`values()`

## Methods

**Name**

**Description**

`getDescriptorForType()`

`getNumber()`

`getValueDescriptor()`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
