-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface RolloutOrBuilder (3.51.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.7 3.0.1 2.1.7

```
public interface RolloutOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Creation time of the rollout. Readonly.

`.google.protobuf.Timestamp create_time = 2;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Creation time of the rollout. Readonly.

`.google.protobuf.Timestamp create_time = 2;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getCreatedBy()

```
public abstract String getCreatedBy()
```

The user who created the Rollout. Readonly.

`string created_by = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The createdBy.

### getCreatedByBytes()

```
public abstract ByteString getCreatedByBytes()
```

The user who created the Rollout. Readonly.

`string created_by = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for createdBy.

### getDeleteServiceStrategy()

```
public abstract Rollout.DeleteServiceStrategy getDeleteServiceStrategy()
```

The strategy associated with a rollout to delete a `ManagedService`. Readonly.

`.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy delete_service_strategy = 200;`

**Returns**

**Type**

**Description**

`[Rollout.DeleteServiceStrategy](/java/docs/reference/google-cloud-service-management/3.51.0/com.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy)`

The deleteServiceStrategy.

### getDeleteServiceStrategyOrBuilder()

```
public abstract Rollout.DeleteServiceStrategyOrBuilder getDeleteServiceStrategyOrBuilder()
```

The strategy associated with a rollout to delete a `ManagedService`. Readonly.

`.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy delete_service_strategy = 200;`

**Returns**

**Type**

**Description**

`[Rollout.DeleteServiceStrategyOrBuilder](/java/docs/reference/google-cloud-service-management/3.51.0/com.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategyOrBuilder)`

### getRolloutId()

```
public abstract String getRolloutId()
```

Optional. Unique identifier of this Rollout. Must be no longer than 63 characters and only lower case letters, digits, '.', '\_' and '-' are allowed.

If not specified by client, the server will generate one. The generated id will have the form of <date><revision number>, where "date" is the create date in ISO 8601 format. "revision number" is a monotonically increasing positive number that is reset every day for each service. An example of the generated rollout\_id is '2016-02-16r1'

`string rollout_id = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The rolloutId.

### getRolloutIdBytes()

```
public abstract ByteString getRolloutIdBytes()
```

Optional. Unique identifier of this Rollout. Must be no longer than 63 characters and only lower case letters, digits, '.', '\_' and '-' are allowed.

If not specified by client, the server will generate one. The generated id will have the form of <date><revision number>, where "date" is the create date in ISO 8601 format. "revision number" is a monotonically increasing positive number that is reset every day for each service. An example of the generated rollout\_id is '2016-02-16r1'

`string rollout_id = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for rolloutId.

### getServiceName()

```
public abstract String getServiceName()
```

The name of the service associated with this Rollout.

`string service_name = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The serviceName.

### getServiceNameBytes()

```
public abstract ByteString getServiceNameBytes()
```

The name of the service associated with this Rollout.

`string service_name = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for serviceName.

### getStatus()

```
public abstract Rollout.RolloutStatus getStatus()
```

The status of this rollout. Readonly. In case of a failed rollout, the system will automatically rollback to the current Rollout version. Readonly.

`.google.api.servicemanagement.v1.Rollout.RolloutStatus status = 4;`

**Returns**

**Type**

**Description**

`[Rollout.RolloutStatus](/java/docs/reference/google-cloud-service-management/3.51.0/com.google.api.servicemanagement.v1.Rollout.RolloutStatus)`

The status.

### getStatusValue()

```
public abstract int getStatusValue()
```

The status of this rollout. Readonly. In case of a failed rollout, the system will automatically rollback to the current Rollout version. Readonly.

`.google.api.servicemanagement.v1.Rollout.RolloutStatus status = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for status.

### getStrategyCase()

```
public abstract Rollout.StrategyCase getStrategyCase()
```

**Returns**

**Type**

**Description**

`[Rollout.StrategyCase](/java/docs/reference/google-cloud-service-management/3.51.0/com.google.api.servicemanagement.v1.Rollout.StrategyCase)`

### getTrafficPercentStrategy()

```
public abstract Rollout.TrafficPercentStrategy getTrafficPercentStrategy()
```

Google Service Control selects service configurations based on traffic percentage.

`.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy traffic_percent_strategy = 5;`

**Returns**

**Type**

**Description**

`[Rollout.TrafficPercentStrategy](/java/docs/reference/google-cloud-service-management/3.51.0/com.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy)`

The trafficPercentStrategy.

### getTrafficPercentStrategyOrBuilder()

```
public abstract Rollout.TrafficPercentStrategyOrBuilder getTrafficPercentStrategyOrBuilder()
```

Google Service Control selects service configurations based on traffic percentage.

`.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy traffic_percent_strategy = 5;`

**Returns**

**Type**

**Description**

`[Rollout.TrafficPercentStrategyOrBuilder](/java/docs/reference/google-cloud-service-management/3.51.0/com.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategyOrBuilder)`

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Creation time of the rollout. Readonly.

`.google.protobuf.Timestamp create_time = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasDeleteServiceStrategy()

```
public abstract boolean hasDeleteServiceStrategy()
```

The strategy associated with a rollout to delete a `ManagedService`. Readonly.

`.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy delete_service_strategy = 200;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the deleteServiceStrategy field is set.

### hasTrafficPercentStrategy()

```
public abstract boolean hasTrafficPercentStrategy()
```

Google Service Control selects service configurations based on traffic percentage.

`.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy traffic_percent_strategy = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the trafficPercentStrategy field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
