-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface DistanceLimitOrBuilder (1.27.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.14 0.1.2

```
public interface DistanceLimitOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCostPerKilometerAboveSoftMax()

```
public abstract double getCostPerKilometerAboveSoftMax()
```

Cost per kilometer incurred if distance is above `soft_max_meters` limit. The additional cost is 0 if the distance is under the limit, otherwise the formula used to compute the cost is the following: `<code><code> (distance_meters - soft_max_meters) / 1000.0 * cost_per_kilometer_above_soft_max. </code></code>` The cost must be nonnegative.

`optional double cost_per_kilometer_above_soft_max = 3;`

**Returns**

**Type**

**Description**

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The costPerKilometerAboveSoftMax.

### getCostPerKilometerBelowSoftMax()

```
public abstract double getCostPerKilometerBelowSoftMax()
```

Cost per kilometer incurred, increasing up to `soft_max_meters`, with formula: `<code><code> min(distance_meters, soft_max_meters) / 1000.0 * cost_per_kilometer_below_soft_max. </code></code><code> This cost is not supported in </code>route_distance_limit`.

`optional double cost_per_kilometer_below_soft_max = 4;`

**Returns**

**Type**

**Description**

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The costPerKilometerBelowSoftMax.

### getMaxMeters()

```
public abstract long getMaxMeters()
```

A hard limit constraining the distance to be at most max\_meters. The limit must be nonnegative.

`optional int64 max_meters = 1;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The maxMeters.

### getSoftMaxMeters()

```
public abstract long getSoftMaxMeters()
```

A soft limit not enforcing a maximum distance limit, but when violated results in a cost which adds up to other costs defined in the model, with the same unit.

If defined soft\_max\_meters must be less than max\_meters and must be nonnegative.

`optional int64 soft_max_meters = 2;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The softMaxMeters.

### hasCostPerKilometerAboveSoftMax()

```
public abstract boolean hasCostPerKilometerAboveSoftMax()
```

Cost per kilometer incurred if distance is above `soft_max_meters` limit. The additional cost is 0 if the distance is under the limit, otherwise the formula used to compute the cost is the following: `<code><code> (distance_meters - soft_max_meters) / 1000.0 * cost_per_kilometer_above_soft_max. </code></code>` The cost must be nonnegative.

`optional double cost_per_kilometer_above_soft_max = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the costPerKilometerAboveSoftMax field is set.

### hasCostPerKilometerBelowSoftMax()

```
public abstract boolean hasCostPerKilometerBelowSoftMax()
```

Cost per kilometer incurred, increasing up to `soft_max_meters`, with formula: `<code><code> min(distance_meters, soft_max_meters) / 1000.0 * cost_per_kilometer_below_soft_max. </code></code><code> This cost is not supported in </code>route_distance_limit`.

`optional double cost_per_kilometer_below_soft_max = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the costPerKilometerBelowSoftMax field is set.

### hasMaxMeters()

```
public abstract boolean hasMaxMeters()
```

A hard limit constraining the distance to be at most max\_meters. The limit must be nonnegative.

`optional int64 max_meters = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the maxMeters field is set.

### hasSoftMaxMeters()

```
public abstract boolean hasSoftMaxMeters()
```

A soft limit not enforcing a maximum distance limit, but when violated results in a cost which adds up to other costs defined in the model, with the same unit.

If defined soft\_max\_meters must be less than max\_meters and must be nonnegative.

`optional int64 soft_max_meters = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the softMaxMeters field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
