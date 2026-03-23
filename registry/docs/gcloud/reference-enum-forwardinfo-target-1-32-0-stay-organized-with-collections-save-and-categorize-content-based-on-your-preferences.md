-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum ForwardInfo.Target (1.32.0) Stay organized with collections Save and categorize content based on your preferences.

1.88.0 (latest) 1.86.0 1.84.0 1.83.0 1.81.0 1.79.0 1.77.0 1.76.0 1.75.0 1.74.0 1.73.0 1.71.0 1.69.0 1.68.0 1.65.0 1.64.0 1.63.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.1.10

```
public enum ForwardInfo.Target extends Enum<ForwardInfo.Target> implements ProtocolMessageEnum
```

Forward target types.

Protobuf enum `google.cloud.networkmanagement.v1beta1.ForwardInfo.Target`

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

`ANOTHER_PROJECT`

Forwarded to a VPC network in another project.

`ANOTHER_PROJECT = 7;`

`ANOTHER_PROJECT_VALUE`

Forwarded to a VPC network in another project.

`ANOTHER_PROJECT = 7;`

`CLOUD_SQL_INSTANCE`

Forwarded to a Cloud SQL instance.

`CLOUD_SQL_INSTANCE = 6;`

`CLOUD_SQL_INSTANCE_VALUE`

Forwarded to a Cloud SQL instance.

`CLOUD_SQL_INSTANCE = 6;`

`GKE_MASTER`

Forwarded to a Google Kubernetes Engine Container cluster master.

`GKE_MASTER = 4;`

`GKE_MASTER_VALUE`

Forwarded to a Google Kubernetes Engine Container cluster master.

`GKE_MASTER = 4;`

`IMPORTED_CUSTOM_ROUTE_NEXT_HOP`

Forwarded to the next hop of a custom route imported from a peering VPC.

`IMPORTED_CUSTOM_ROUTE_NEXT_HOP = 5;`

`IMPORTED_CUSTOM_ROUTE_NEXT_HOP_VALUE`

Forwarded to the next hop of a custom route imported from a peering VPC.

`IMPORTED_CUSTOM_ROUTE_NEXT_HOP = 5;`

`INTERCONNECT`

Forwarded to a Cloud Interconnect connection.

`INTERCONNECT = 3;`

`INTERCONNECT_VALUE`

Forwarded to a Cloud Interconnect connection.

`INTERCONNECT = 3;`

`NCC_HUB`

Forwarded to an NCC Hub.

`NCC_HUB = 8;`

`NCC_HUB_VALUE`

Forwarded to an NCC Hub.

`NCC_HUB = 8;`

`PEERING_VPC`

Forwarded to a VPC peering network.

`PEERING_VPC = 1;`

`PEERING_VPC_VALUE`

Forwarded to a VPC peering network.

`PEERING_VPC = 1;`

`TARGET_UNSPECIFIED`

Target not specified.

`TARGET_UNSPECIFIED = 0;`

`TARGET_UNSPECIFIED_VALUE`

Target not specified.

`TARGET_UNSPECIFIED = 0;`

`UNRECOGNIZED`

`VPN_GATEWAY`

Forwarded to a Cloud VPN gateway.

`VPN_GATEWAY = 2;`

`VPN_GATEWAY_VALUE`

Forwarded to a Cloud VPN gateway.

`VPN_GATEWAY = 2;`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-network-management/1.32.0/com.google.cloud.networkmanagement.v1beta1.ForwardInfo.Target#com_google_cloud_networkmanagement_v1beta1_ForwardInfo_Target_forNumber_int_) instead._

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
