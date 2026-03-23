-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum InterconnectRemoteLocationConstraints.PortPairVlan (1.93.0) Stay organized with collections Save and categorize content based on your preferences.

1.97.0 (latest) 1.95.0 1.93.0 1.92.0 1.91.0 1.90.0 1.88.0 1.86.0 1.85.0 1.84.0 1.83.0 1.82.0 1.80.0 1.78.0 1.77.0 1.74.0 1.73.0 1.72.0 1.70.0 1.69.0 1.68.0 1.67.0 1.66.0 1.65.0 1.64.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.1 1.11.0 1.9.1 1.8.1 1.7.2 1.6.0-beta

```
public enum InterconnectRemoteLocationConstraints.PortPairVlan extends Enum<InterconnectRemoteLocationConstraints.PortPairVlan> implements ProtocolMessageEnum
```

Output only. \[Output Only\] Port pair VLAN constraints, which can take one of the following values: PORT\_PAIR\_UNCONSTRAINED\_VLAN, PORT\_PAIR\_MATCHING\_VLAN

Protobuf enum `google.cloud.compute.v1.InterconnectRemoteLocationConstraints.PortPairVlan`

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

`PORT_PAIR_MATCHING_VLAN`

If PORT\_PAIR\_MATCHING\_VLAN, the Interconnect for this attachment is part of a pair of ports that should have matching VLAN allocations. This occurs with Cross-Cloud Interconnect to Azure remote locations. While GCP's API does not explicitly group pairs of ports, the UI uses this field to ensure matching VLAN ids when configuring a redundant VLAN pair.

`PORT_PAIR_MATCHING_VLAN = 250295358;`

`PORT_PAIR_MATCHING_VLAN_VALUE`

If PORT\_PAIR\_MATCHING\_VLAN, the Interconnect for this attachment is part of a pair of ports that should have matching VLAN allocations. This occurs with Cross-Cloud Interconnect to Azure remote locations. While GCP's API does not explicitly group pairs of ports, the UI uses this field to ensure matching VLAN ids when configuring a redundant VLAN pair.

`PORT_PAIR_MATCHING_VLAN = 250295358;`

`PORT_PAIR_UNCONSTRAINED_VLAN`

PORT\_PAIR\_UNCONSTRAINED\_VLAN means there is no constraint.

`PORT_PAIR_UNCONSTRAINED_VLAN = 175227948;`

`PORT_PAIR_UNCONSTRAINED_VLAN_VALUE`

PORT\_PAIR\_UNCONSTRAINED\_VLAN means there is no constraint.

`PORT_PAIR_UNCONSTRAINED_VLAN = 175227948;`

`UNDEFINED_PORT_PAIR_VLAN`

A value indicating that the enum field is not set.

`UNDEFINED_PORT_PAIR_VLAN = 0;`

`UNDEFINED_PORT_PAIR_VLAN_VALUE`

A value indicating that the enum field is not set.

`UNDEFINED_PORT_PAIR_VLAN = 0;`

`UNRECOGNIZED`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.InterconnectRemoteLocationConstraints.PortPairVlan#com_google_cloud_compute_v1_InterconnectRemoteLocationConstraints_PortPairVlan_forNumber_int_) instead._

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
