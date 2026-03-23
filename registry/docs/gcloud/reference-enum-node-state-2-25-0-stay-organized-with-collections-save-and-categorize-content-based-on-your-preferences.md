-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum Node.State (2.25.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.2.6

```
public enum Node.State extends Enum<Node.State> implements ProtocolMessageEnum
```

Represents the different states of a TPU node during its lifecycle.

Protobuf enum `google.cloud.tpu.v1.Node.State`

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

`CREATING`

TPU node is being created.

`CREATING = 1;`

`CREATING_VALUE`

TPU node is being created.

`CREATING = 1;`

`DELETING`

TPU node is being deleted.

`DELETING = 5;`

`DELETING_VALUE`

TPU node is being deleted.

`DELETING = 5;`

`HIDDEN`

TPU node has been hidden.

`HIDDEN = 14;`

`HIDDEN_VALUE`

TPU node has been hidden.

`HIDDEN = 14;`

`HIDING`

TPU node is currently hiding.

`HIDING = 13;`

`HIDING_VALUE`

TPU node is currently hiding.

`HIDING = 13;`

`PREEMPTED`

TPU node has been preempted. Only applies to Preemptible TPU Nodes.

`PREEMPTED = 11;`

`PREEMPTED_VALUE`

TPU node has been preempted. Only applies to Preemptible TPU Nodes.

`PREEMPTED = 11;`

`READY`

TPU node has been created.

`READY = 2;`

`READY_VALUE`

TPU node has been created.

`READY = 2;`

`REIMAGING`

TPU node is undergoing reimaging.

`REIMAGING = 4;`

`REIMAGING_VALUE`

TPU node is undergoing reimaging.

`REIMAGING = 4;`

`REPAIRING`

TPU node is being repaired and may be unusable. Details can be found in the `help_description` field.

`REPAIRING = 6;`

`REPAIRING_VALUE`

TPU node is being repaired and may be unusable. Details can be found in the `help_description` field.

`REPAIRING = 6;`

`RESTARTING`

TPU node is restarting.

`RESTARTING = 3;`

`RESTARTING_VALUE`

TPU node is restarting.

`RESTARTING = 3;`

`STARTING`

TPU node is currently starting.

`STARTING = 10;`

`STARTING_VALUE`

TPU node is currently starting.

`STARTING = 10;`

`STATE_UNSPECIFIED`

TPU node state is not known/set.

`STATE_UNSPECIFIED = 0;`

`STATE_UNSPECIFIED_VALUE`

TPU node state is not known/set.

`STATE_UNSPECIFIED = 0;`

`STOPPED`

TPU node is stopped.

`STOPPED = 8;`

`STOPPED_VALUE`

TPU node is stopped.

`STOPPED = 8;`

`STOPPING`

TPU node is currently stopping.

`STOPPING = 9;`

`STOPPING_VALUE`

TPU node is currently stopping.

`STOPPING = 9;`

`TERMINATED`

TPU node has been terminated due to maintenance or has reached the end of its life cycle (for preemptible nodes).

`TERMINATED = 12;`

`TERMINATED_VALUE`

TPU node has been terminated due to maintenance or has reached the end of its life cycle (for preemptible nodes).

`TERMINATED = 12;`

`UNHIDING`

TPU node is currently unhiding.

`UNHIDING = 15;`

`UNHIDING_VALUE`

TPU node is currently unhiding.

`UNHIDING = 15;`

`UNRECOGNIZED`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-tpu/2.25.0/com.google.cloud.tpu.v1.Node.State#com_google_cloud_tpu_v1_Node_State_forNumber_int_) instead._

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
