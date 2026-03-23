-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Key.Builder (6.65.1) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public static class Key.Builder
```

Builder for [Key](/java/docs/reference/google-cloud-spanner/6.65.1/com.google.cloud.spanner.Key) instances.

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> Key.Builder

## Inherited Members

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Methods

### append(ByteArray value)

```
public Key.Builder append(ByteArray value)
```

Appends a `BYTES` value to the key.

**Parameter**

**Name**

**Description**

`value`

`com.google.cloud.ByteArray`  

**Returns**

**Type**

**Description**

`[Key.Builder](/java/docs/reference/google-cloud-spanner/6.65.1/com.google.cloud.spanner.Key.Builder)`

### append(Date value)

```
public Key.Builder append(Date value)
```

Appends a `DATE` value to the key

**Parameter**

**Name**

**Description**

`value`

`com.google.cloud.Date`  

**Returns**

**Type**

**Description**

`[Key.Builder](/java/docs/reference/google-cloud-spanner/6.65.1/com.google.cloud.spanner.Key.Builder)`

### append(Timestamp value)

```
public Key.Builder append(Timestamp value)
```

Appends a `TIMESTAMP` value to the key

**Parameter**

**Name**

**Description**

`value`

`com.google.cloud.Timestamp`  

**Returns**

**Type**

**Description**

`[Key.Builder](/java/docs/reference/google-cloud-spanner/6.65.1/com.google.cloud.spanner.Key.Builder)`

### append(ProtocolMessageEnum value)

```
public Key.Builder append(ProtocolMessageEnum value)
```

Appends a `ENUM` value to the key.

**Parameter**

**Name**

**Description**

`value`

`[ProtocolMessageEnum](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolMessageEnum.html)`  

**Returns**

**Type**

**Description**

`[Key.Builder](/java/docs/reference/google-cloud-spanner/6.65.1/com.google.cloud.spanner.Key.Builder)`

### append(double value)

```
public Key.Builder append(double value)
```

Appends a `FLOAT64` value to the key.

**Parameter**

**Name**

**Description**

`value`

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Key.Builder](/java/docs/reference/google-cloud-spanner/6.65.1/com.google.cloud.spanner.Key.Builder)`

### append(Boolean value)

```
public Key.Builder append(Boolean value)
```

Appends a `BOOL` value to the key.

**Parameter**

**Name**

**Description**

`value`

`[Boolean](https://docs.oracle.com/javase/8/docs/api/java/lang/Boolean.html)`  

**Returns**

**Type**

**Description**

`[Key.Builder](/java/docs/reference/google-cloud-spanner/6.65.1/com.google.cloud.spanner.Key.Builder)`

### append(Double value)

```
public Key.Builder append(Double value)
```

Appends a `FLOAT64` value to the key.

**Parameter**

**Name**

**Description**

`value`

`[Double](https://docs.oracle.com/javase/8/docs/api/java/lang/Double.html)`  

**Returns**

**Type**

**Description**

`[Key.Builder](/java/docs/reference/google-cloud-spanner/6.65.1/com.google.cloud.spanner.Key.Builder)`

### append(Long value)

```
public Key.Builder append(Long value)
```

Appends an `INT64` value to the key.

**Parameter**

**Name**

**Description**

`value`

`[Long](https://docs.oracle.com/javase/8/docs/api/java/lang/Long.html)`  

**Returns**

**Type**

**Description**

`[Key.Builder](/java/docs/reference/google-cloud-spanner/6.65.1/com.google.cloud.spanner.Key.Builder)`

### append(String value)

```
public Key.Builder append(String value)
```

Appends a `STRING` value to the key.

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Key.Builder](/java/docs/reference/google-cloud-spanner/6.65.1/com.google.cloud.spanner.Key.Builder)`

### append(BigDecimal value)

```
public Key.Builder append(BigDecimal value)
```

Appends a `NUMERIC` value to the key.

**Parameter**

**Name**

**Description**

`value`

`[BigDecimal](https://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html)`  

**Returns**

**Type**

**Description**

`[Key.Builder](/java/docs/reference/google-cloud-spanner/6.65.1/com.google.cloud.spanner.Key.Builder)`

### append(long value)

```
public Key.Builder append(long value)
```

Appends an `INT64` value to the key.

**Parameter**

**Name**

**Description**

`value`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Key.Builder](/java/docs/reference/google-cloud-spanner/6.65.1/com.google.cloud.spanner.Key.Builder)`

### appendObject(Object value)

```
public Key.Builder appendObject(Object value)
```

Appends an object following the same conversion rules as [Key#of(Object...)](/java/docs/reference/google-cloud-spanner/6.65.1/com.google.cloud.spanner.Key#com_google_cloud_spanner_Key_of_). When using the `Builder`, most code should prefer using the strongly typed `append(...)` methods, for both performance and the benefit of compile-time checking.

**Parameter**

**Name**

**Description**

`value`

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

`[Key.Builder](/java/docs/reference/google-cloud-spanner/6.65.1/com.google.cloud.spanner.Key.Builder)`

### build()

```
public Key build()
```

**Returns**

**Type**

**Description**

`[Key](/java/docs/reference/google-cloud-spanner/6.65.1/com.google.cloud.spanner.Key)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
