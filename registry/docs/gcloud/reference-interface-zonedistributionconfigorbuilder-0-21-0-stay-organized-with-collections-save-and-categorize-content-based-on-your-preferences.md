-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ZoneDistributionConfigOrBuilder (0.21.0) Stay organized with collections Save and categorize content based on your preferences.

0.59.0 (latest) 0.57.0 0.55.0 0.54.0 0.52.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.42.0 0.40.0 0.39.0 0.36.0 0.35.0 0.34.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface ZoneDistributionConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getMode()

```
public abstract ZoneDistributionConfig.ZoneDistributionMode getMode()
```

Optional. The mode of zone distribution. Defaults to MULTI\_ZONE, when not specified.

`.google.cloud.redis.cluster.v1beta1.ZoneDistributionConfig.ZoneDistributionMode mode = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ZoneDistributionConfig.ZoneDistributionMode](/java/docs/reference/google-cloud-redis-cluster/0.21.0/com.google.cloud.redis.cluster.v1beta1.ZoneDistributionConfig.ZoneDistributionMode)`

The mode.

### getModeValue()

```
public abstract int getModeValue()
```

Optional. The mode of zone distribution. Defaults to MULTI\_ZONE, when not specified.

`.google.cloud.redis.cluster.v1beta1.ZoneDistributionConfig.ZoneDistributionMode mode = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for mode.

### getZone()

```
public abstract String getZone()
```

Optional. When SINGLE ZONE distribution is selected, zone field would be used to allocate all resources in that zone. This is not applicable to MULTI\_ZONE, and would be ignored for MULTI\_ZONE clusters.

`string zone = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The zone.

### getZoneBytes()

```
public abstract ByteString getZoneBytes()
```

Optional. When SINGLE ZONE distribution is selected, zone field would be used to allocate all resources in that zone. This is not applicable to MULTI\_ZONE, and would be ignored for MULTI\_ZONE clusters.

`string zone = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for zone.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
