-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface QueuedResourceOrBuilder (2.49.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.2.6

```
public interface QueuedResourceOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBestEffort()

```
public abstract QueuedResource.BestEffort getBestEffort()
```

The BestEffort tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.BestEffort best_effort = 3;`

**Returns**

**Type**

**Description**

`[QueuedResource.BestEffort](/java/docs/reference/google-cloud-tpu/2.49.0/com.google.cloud.tpu.v2alpha1.QueuedResource.BestEffort)`

The bestEffort.

### getBestEffortOrBuilder()

```
public abstract QueuedResource.BestEffortOrBuilder getBestEffortOrBuilder()
```

The BestEffort tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.BestEffort best_effort = 3;`

**Returns**

**Type**

**Description**

`[QueuedResource.BestEffortOrBuilder](/java/docs/reference/google-cloud-tpu/2.49.0/com.google.cloud.tpu.v2alpha1.QueuedResource.BestEffortOrBuilder)`

### getGuaranteed()

```
public abstract QueuedResource.Guaranteed getGuaranteed()
```

The Guaranteed tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed guaranteed = 4;`

**Returns**

**Type**

**Description**

`[QueuedResource.Guaranteed](/java/docs/reference/google-cloud-tpu/2.49.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed)`

The guaranteed.

### getGuaranteedOrBuilder()

```
public abstract QueuedResource.GuaranteedOrBuilder getGuaranteedOrBuilder()
```

The Guaranteed tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed guaranteed = 4;`

**Returns**

**Type**

**Description**

`[QueuedResource.GuaranteedOrBuilder](/java/docs/reference/google-cloud-tpu/2.49.0/com.google.cloud.tpu.v2alpha1.QueuedResource.GuaranteedOrBuilder)`

### getName()

```
public abstract String getName()
```

Output only. Immutable. The name of the QueuedResource.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Output only. Immutable. The name of the QueuedResource.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getQueueingPolicy()

```
public abstract QueuedResource.QueueingPolicy getQueueingPolicy()
```

The queueing policy of the QueuedRequest.

`.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy queueing_policy = 5;`

**Returns**

**Type**

**Description**

`[QueuedResource.QueueingPolicy](/java/docs/reference/google-cloud-tpu/2.49.0/com.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy)`

The queueingPolicy.

### getQueueingPolicyOrBuilder()

```
public abstract QueuedResource.QueueingPolicyOrBuilder getQueueingPolicyOrBuilder()
```

The queueing policy of the QueuedRequest.

`.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy queueing_policy = 5;`

**Returns**

**Type**

**Description**

`[QueuedResource.QueueingPolicyOrBuilder](/java/docs/reference/google-cloud-tpu/2.49.0/com.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicyOrBuilder)`

### getReservationName()

```
public abstract String getReservationName()
```

Name of the reservation in which the resource should be provisioned. Format: projects/{project}/locations/{zone}/reservations/{reservation}

`string reservation_name = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The reservationName.

### getReservationNameBytes()

```
public abstract ByteString getReservationNameBytes()
```

Name of the reservation in which the resource should be provisioned. Format: projects/{project}/locations/{zone}/reservations/{reservation}

`string reservation_name = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for reservationName.

### getResourceCase()

```
public abstract QueuedResource.ResourceCase getResourceCase()
```

**Returns**

**Type**

**Description**

`[QueuedResource.ResourceCase](/java/docs/reference/google-cloud-tpu/2.49.0/com.google.cloud.tpu.v2alpha1.QueuedResource.ResourceCase)`

### getSpot()

```
public abstract QueuedResource.Spot getSpot()
```

Optional. The Spot tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Spot spot = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[QueuedResource.Spot](/java/docs/reference/google-cloud-tpu/2.49.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Spot)`

The spot.

### getSpotOrBuilder()

```
public abstract QueuedResource.SpotOrBuilder getSpotOrBuilder()
```

Optional. The Spot tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Spot spot = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[QueuedResource.SpotOrBuilder](/java/docs/reference/google-cloud-tpu/2.49.0/com.google.cloud.tpu.v2alpha1.QueuedResource.SpotOrBuilder)`

### getState()

```
public abstract QueuedResourceState getState()
```

Output only. State of the QueuedResource request.

`.google.cloud.tpu.v2alpha1.QueuedResourceState state = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[QueuedResourceState](/java/docs/reference/google-cloud-tpu/2.49.0/com.google.cloud.tpu.v2alpha1.QueuedResourceState)`

The state.

### getStateOrBuilder()

```
public abstract QueuedResourceStateOrBuilder getStateOrBuilder()
```

Output only. State of the QueuedResource request.

`.google.cloud.tpu.v2alpha1.QueuedResourceState state = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[QueuedResourceStateOrBuilder](/java/docs/reference/google-cloud-tpu/2.49.0/com.google.cloud.tpu.v2alpha1.QueuedResourceStateOrBuilder)`

### getTierCase()

```
public abstract QueuedResource.TierCase getTierCase()
```

**Returns**

**Type**

**Description**

`[QueuedResource.TierCase](/java/docs/reference/google-cloud-tpu/2.49.0/com.google.cloud.tpu.v2alpha1.QueuedResource.TierCase)`

### getTpu()

```
public abstract QueuedResource.Tpu getTpu()
```

Defines a TPU resource.

`.google.cloud.tpu.v2alpha1.QueuedResource.Tpu tpu = 2;`

**Returns**

**Type**

**Description**

`[QueuedResource.Tpu](/java/docs/reference/google-cloud-tpu/2.49.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Tpu)`

The tpu.

### getTpuOrBuilder()

```
public abstract QueuedResource.TpuOrBuilder getTpuOrBuilder()
```

Defines a TPU resource.

`.google.cloud.tpu.v2alpha1.QueuedResource.Tpu tpu = 2;`

**Returns**

**Type**

**Description**

`[QueuedResource.TpuOrBuilder](/java/docs/reference/google-cloud-tpu/2.49.0/com.google.cloud.tpu.v2alpha1.QueuedResource.TpuOrBuilder)`

### hasBestEffort()

```
public abstract boolean hasBestEffort()
```

The BestEffort tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.BestEffort best_effort = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the bestEffort field is set.

### hasGuaranteed()

```
public abstract boolean hasGuaranteed()
```

The Guaranteed tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed guaranteed = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the guaranteed field is set.

### hasQueueingPolicy()

```
public abstract boolean hasQueueingPolicy()
```

The queueing policy of the QueuedRequest.

`.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy queueing_policy = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the queueingPolicy field is set.

### hasSpot()

```
public abstract boolean hasSpot()
```

Optional. The Spot tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Spot spot = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the spot field is set.

### hasState()

```
public abstract boolean hasState()
```

Output only. State of the QueuedResource request.

`.google.cloud.tpu.v2alpha1.QueuedResourceState state = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the state field is set.

### hasTpu()

```
public abstract boolean hasTpu()
```

Defines a TPU resource.

`.google.cloud.tpu.v2alpha1.QueuedResource.Tpu tpu = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the tpu field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
