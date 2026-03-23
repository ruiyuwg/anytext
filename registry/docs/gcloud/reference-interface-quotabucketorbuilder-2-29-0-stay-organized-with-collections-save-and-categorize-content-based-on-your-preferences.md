-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface QuotaBucketOrBuilder (2.29.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.7 2.2.8

```
public interface QuotaBucketOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsDimensions(String key)

```
public abstract boolean containsDimensions(String key)
```

The dimensions of this quota bucket.

If this map is empty, this is the global bucket, which is the default quota value applied to all requests that do not have a more specific override.

If this map is nonempty, the default limit, effective limit, and quota overrides apply only to requests that have the dimensions given in the map.

For example, if the map has key `region` and value `us-east-1`, then the specified effective limit is only effective in that region, and the specified overrides apply only in that region.

`map<string, string> dimensions = 6;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAdminOverride()

```
public abstract QuotaOverride getAdminOverride()
```

Admin override on this quota bucket.

`.google.api.serviceusage.v1beta1.QuotaOverride admin_override = 5;`

**Returns**

**Type**

**Description**

`[QuotaOverride](/java/docs/reference/google-cloud-service-usage/2.29.0/com.google.api.serviceusage.v1beta1.QuotaOverride)`

The adminOverride.

### getAdminOverrideOrBuilder()

```
public abstract QuotaOverrideOrBuilder getAdminOverrideOrBuilder()
```

Admin override on this quota bucket.

`.google.api.serviceusage.v1beta1.QuotaOverride admin_override = 5;`

**Returns**

**Type**

**Description**

`[QuotaOverrideOrBuilder](/java/docs/reference/google-cloud-service-usage/2.29.0/com.google.api.serviceusage.v1beta1.QuotaOverrideOrBuilder)`

### getConsumerOverride()

```
public abstract QuotaOverride getConsumerOverride()
```

Consumer override on this quota bucket.

`.google.api.serviceusage.v1beta1.QuotaOverride consumer_override = 4;`

**Returns**

**Type**

**Description**

`[QuotaOverride](/java/docs/reference/google-cloud-service-usage/2.29.0/com.google.api.serviceusage.v1beta1.QuotaOverride)`

The consumerOverride.

### getConsumerOverrideOrBuilder()

```
public abstract QuotaOverrideOrBuilder getConsumerOverrideOrBuilder()
```

Consumer override on this quota bucket.

`.google.api.serviceusage.v1beta1.QuotaOverride consumer_override = 4;`

**Returns**

**Type**

**Description**

`[QuotaOverrideOrBuilder](/java/docs/reference/google-cloud-service-usage/2.29.0/com.google.api.serviceusage.v1beta1.QuotaOverrideOrBuilder)`

### getDefaultLimit()

```
public abstract long getDefaultLimit()
```

The default limit of this quota bucket, as specified by the service configuration.

`int64 default_limit = 2;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The defaultLimit.

### getDimensions()

```
public abstract Map<String,String> getDimensions()
```

Use [#getDimensionsMap()](/java/docs/reference/google-cloud-service-usage/2.29.0/com.google.api.serviceusage.v1beta1.QuotaBucketOrBuilder#com_google_api_serviceusage_v1beta1_QuotaBucketOrBuilder_getDimensionsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getDimensionsCount()

```
public abstract int getDimensionsCount()
```

The dimensions of this quota bucket.

If this map is empty, this is the global bucket, which is the default quota value applied to all requests that do not have a more specific override.

If this map is nonempty, the default limit, effective limit, and quota overrides apply only to requests that have the dimensions given in the map.

For example, if the map has key `region` and value `us-east-1`, then the specified effective limit is only effective in that region, and the specified overrides apply only in that region.

`map<string, string> dimensions = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getDimensionsMap()

```
public abstract Map<String,String> getDimensionsMap()
```

The dimensions of this quota bucket.

If this map is empty, this is the global bucket, which is the default quota value applied to all requests that do not have a more specific override.

If this map is nonempty, the default limit, effective limit, and quota overrides apply only to requests that have the dimensions given in the map.

For example, if the map has key `region` and value `us-east-1`, then the specified effective limit is only effective in that region, and the specified overrides apply only in that region.

`map<string, string> dimensions = 6;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getDimensionsOrDefault(String key, String defaultValue)

```
public abstract String getDimensionsOrDefault(String key, String defaultValue)
```

The dimensions of this quota bucket.

If this map is empty, this is the global bucket, which is the default quota value applied to all requests that do not have a more specific override.

If this map is nonempty, the default limit, effective limit, and quota overrides apply only to requests that have the dimensions given in the map.

For example, if the map has key `region` and value `us-east-1`, then the specified effective limit is only effective in that region, and the specified overrides apply only in that region.

`map<string, string> dimensions = 6;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getDimensionsOrThrow(String key)

```
public abstract String getDimensionsOrThrow(String key)
```

The dimensions of this quota bucket.

If this map is empty, this is the global bucket, which is the default quota value applied to all requests that do not have a more specific override.

If this map is nonempty, the default limit, effective limit, and quota overrides apply only to requests that have the dimensions given in the map.

For example, if the map has key `region` and value `us-east-1`, then the specified effective limit is only effective in that region, and the specified overrides apply only in that region.

`map<string, string> dimensions = 6;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getEffectiveLimit()

```
public abstract long getEffectiveLimit()
```

The effective limit of this quota bucket. Equal to default\_limit if there are no overrides.

`int64 effective_limit = 1;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The effectiveLimit.

### getProducerOverride()

```
public abstract QuotaOverride getProducerOverride()
```

Producer override on this quota bucket.

`.google.api.serviceusage.v1beta1.QuotaOverride producer_override = 3;`

**Returns**

**Type**

**Description**

`[QuotaOverride](/java/docs/reference/google-cloud-service-usage/2.29.0/com.google.api.serviceusage.v1beta1.QuotaOverride)`

The producerOverride.

### getProducerOverrideOrBuilder()

```
public abstract QuotaOverrideOrBuilder getProducerOverrideOrBuilder()
```

Producer override on this quota bucket.

`.google.api.serviceusage.v1beta1.QuotaOverride producer_override = 3;`

**Returns**

**Type**

**Description**

`[QuotaOverrideOrBuilder](/java/docs/reference/google-cloud-service-usage/2.29.0/com.google.api.serviceusage.v1beta1.QuotaOverrideOrBuilder)`

### getProducerQuotaPolicy()

```
public abstract ProducerQuotaPolicy getProducerQuotaPolicy()
```

Producer policy inherited from the closet ancestor of the current consumer.

`.google.api.serviceusage.v1beta1.ProducerQuotaPolicy producer_quota_policy = 7;`

**Returns**

**Type**

**Description**

`[ProducerQuotaPolicy](/java/docs/reference/google-cloud-service-usage/2.29.0/com.google.api.serviceusage.v1beta1.ProducerQuotaPolicy)`

The producerQuotaPolicy.

### getProducerQuotaPolicyOrBuilder()

```
public abstract ProducerQuotaPolicyOrBuilder getProducerQuotaPolicyOrBuilder()
```

Producer policy inherited from the closet ancestor of the current consumer.

`.google.api.serviceusage.v1beta1.ProducerQuotaPolicy producer_quota_policy = 7;`

**Returns**

**Type**

**Description**

`[ProducerQuotaPolicyOrBuilder](/java/docs/reference/google-cloud-service-usage/2.29.0/com.google.api.serviceusage.v1beta1.ProducerQuotaPolicyOrBuilder)`

### hasAdminOverride()

```
public abstract boolean hasAdminOverride()
```

Admin override on this quota bucket.

`.google.api.serviceusage.v1beta1.QuotaOverride admin_override = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the adminOverride field is set.

### hasConsumerOverride()

```
public abstract boolean hasConsumerOverride()
```

Consumer override on this quota bucket.

`.google.api.serviceusage.v1beta1.QuotaOverride consumer_override = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the consumerOverride field is set.

### hasProducerOverride()

```
public abstract boolean hasProducerOverride()
```

Producer override on this quota bucket.

`.google.api.serviceusage.v1beta1.QuotaOverride producer_override = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the producerOverride field is set.

### hasProducerQuotaPolicy()

```
public abstract boolean hasProducerQuotaPolicy()
```

Producer policy inherited from the closet ancestor of the current consumer.

`.google.api.serviceusage.v1beta1.ProducerQuotaPolicy producer_quota_policy = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the producerQuotaPolicy field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
