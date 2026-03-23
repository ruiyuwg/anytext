-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface TlsCertificateOrBuilder (0.16.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [0.16.0 (latest)](/java/docs/reference/google-cloudevent-types/latest/com.google.events.cloud.redis.v1.TlsCertificateOrBuilder)
-   [0.15.0](/java/docs/reference/google-cloudevent-types/0.15.0/com.google.events.cloud.redis.v1.TlsCertificateOrBuilder)
-   [0.14.1](/java/docs/reference/google-cloudevent-types/0.14.1/com.google.events.cloud.redis.v1.TlsCertificateOrBuilder)

```
public interface TlsCertificateOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Output only. The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`.

`.google.protobuf.Timestamp create_time = 3;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`.

`.google.protobuf.Timestamp create_time = 3;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getExpireTime()

```
public abstract Timestamp getExpireTime()
```

Output only. The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`.

`.google.protobuf.Timestamp expire_time = 4;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The expireTime.

### getExpireTimeOrBuilder()

```
public abstract TimestampOrBuilder getExpireTimeOrBuilder()
```

Output only. The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`.

`.google.protobuf.Timestamp expire_time = 4;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getSerialNumber()

```
public abstract String getSerialNumber()
```

Serial number, as extracted from the certificate.

`string serial_number = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The serialNumber.

### getSerialNumberBytes()

```
public abstract ByteString getSerialNumberBytes()
```

Serial number, as extracted from the certificate.

`string serial_number = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for serialNumber.

### getSha1Fingerprint()

```
public abstract String getSha1Fingerprint()
```

Sha1 Fingerprint of the certificate.

`string sha1_fingerprint = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The sha1Fingerprint.

### getSha1FingerprintBytes()

```
public abstract ByteString getSha1FingerprintBytes()
```

Sha1 Fingerprint of the certificate.

`string sha1_fingerprint = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for sha1Fingerprint.

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`.

`.google.protobuf.Timestamp create_time = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasExpireTime()

```
public abstract boolean hasExpireTime()
```

Output only. The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`.

`.google.protobuf.Timestamp expire_time = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the expireTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
