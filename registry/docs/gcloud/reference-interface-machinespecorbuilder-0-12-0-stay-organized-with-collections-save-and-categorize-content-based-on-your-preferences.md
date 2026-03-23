-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface MachineSpecOrBuilder (0.12.0) Stay organized with collections Save and categorize content based on your preferences.

0.44.0 (latest) 0.42.0 0.40.0 0.39.0 0.37.0 0.35.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.27.0 0.25.0 0.24.0 0.21.0 0.20.0 0.19.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface MachineSpecOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAcceleratorCount()

```
public abstract int getAcceleratorCount()
```

The number of accelerators to attach to the machine.

`int32 accelerator_count = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The acceleratorCount.

### getAcceleratorType()

```
public abstract AcceleratorType getAcceleratorType()
```

Immutable. The type of accelerator(s) that may be attached to the machine as per accelerator\_count.

`.google.cloud.visionai.v1.AcceleratorType accelerator_type = 2 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[AcceleratorType](/java/docs/reference/google-cloud-visionai/0.12.0/com.google.cloud.visionai.v1.AcceleratorType)`

The acceleratorType.

### getAcceleratorTypeValue()

```
public abstract int getAcceleratorTypeValue()
```

Immutable. The type of accelerator(s) that may be attached to the machine as per accelerator\_count.

`.google.cloud.visionai.v1.AcceleratorType accelerator_type = 2 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for acceleratorType.

### getMachineType()

```
public abstract String getMachineType()
```

Immutable. The type of the machine.

See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)

See the [list of machine types supported for custom training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).

For \[DeployedModel\]\[\] this field is optional, and the default value is `n1-standard-2`. For \[BatchPredictionJob\]\[\] or as part of \[WorkerPoolSpec\]\[\] this field is required.

`string machine_type = 1 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The machineType.

### getMachineTypeBytes()

```
public abstract ByteString getMachineTypeBytes()
```

Immutable. The type of the machine.

See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)

See the [list of machine types supported for custom training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).

For \[DeployedModel\]\[\] this field is optional, and the default value is `n1-standard-2`. For \[BatchPredictionJob\]\[\] or as part of \[WorkerPoolSpec\]\[\] this field is required.

`string machine_type = 1 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for machineType.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
