-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum State (1.30.0) Stay organized with collections Save and categorize content based on your preferences.

1.86.0 (latest) 1.84.0 1.82.0 1.81.0 1.79.0 1.77.0 1.75.0 1.74.0 1.73.0 1.72.0 1.71.0 1.69.0 1.67.0 1.66.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.9 1.1.1 1.0.0 0.5.0

```
public enum State extends Enum<State> implements ProtocolMessageEnum
```

The State enum represents the lifecycle stage of a Network Connectivity Center resource.

Protobuf enum `google.cloud.networkconnectivity.v1.State`

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

`ACCEPTING`

The resource's accept operation is in progress.

`ACCEPTING = 8;`

`ACCEPTING_VALUE`

The resource's accept operation is in progress.

`ACCEPTING = 8;`

`ACTIVE`

The resource is active

`ACTIVE = 2;`

`ACTIVE_VALUE`

The resource is active

`ACTIVE = 2;`

`CREATING`

The resource's create operation is in progress.

`CREATING = 1;`

`CREATING_VALUE`

The resource's create operation is in progress.

`CREATING = 1;`

`DELETING`

The resource's delete operation is in progress.

`DELETING = 3;`

`DELETING_VALUE`

The resource's delete operation is in progress.

`DELETING = 3;`

`INACTIVE`

The resource is inactive.

`INACTIVE = 7;`

`INACTIVE_VALUE`

The resource is inactive.

`INACTIVE = 7;`

`OBSOLETE`

The hub associated with this spoke resource has been deleted. This state applies to spoke resources only.

`OBSOLETE = 10;`

`OBSOLETE_VALUE`

The hub associated with this spoke resource has been deleted. This state applies to spoke resources only.

`OBSOLETE = 10;`

`REJECTING`

The resource's reject operation is in progress.

`REJECTING = 9;`

`REJECTING_VALUE`

The resource's reject operation is in progress.

`REJECTING = 9;`

`STATE_UNSPECIFIED`

No state information available

`STATE_UNSPECIFIED = 0;`

`STATE_UNSPECIFIED_VALUE`

No state information available

`STATE_UNSPECIFIED = 0;`

`UNRECOGNIZED`

`UPDATING`

The resource's update operation is in progress.

`UPDATING = 6;`

`UPDATING_VALUE`

The resource's update operation is in progress.

`UPDATING = 6;`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-networkconnectivity/1.30.0/com.google.cloud.networkconnectivity.v1.State#com_google_cloud_networkconnectivity_v1_State_forNumber_int_) instead._

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
