-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum FirewallInfo.FirewallRuleType (1.25.0) Stay organized with collections Save and categorize content based on your preferences.

1.88.0 (latest) 1.86.0 1.84.0 1.83.0 1.81.0 1.79.0 1.77.0 1.76.0 1.75.0 1.74.0 1.73.0 1.71.0 1.69.0 1.68.0 1.65.0 1.64.0 1.63.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.1.10

```
public enum FirewallInfo.FirewallRuleType extends Enum<FirewallInfo.FirewallRuleType> implements ProtocolMessageEnum
```

The firewall rule's type.

Protobuf enum `google.cloud.networkmanagement.v1.FirewallInfo.FirewallRuleType`

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

`FIREWALL_RULE_TYPE_UNSPECIFIED`

Unspecified type.

`FIREWALL_RULE_TYPE_UNSPECIFIED = 0;`

`FIREWALL_RULE_TYPE_UNSPECIFIED_VALUE`

Unspecified type.

`FIREWALL_RULE_TYPE_UNSPECIFIED = 0;`

`HIERARCHICAL_FIREWALL_POLICY_RULE`

Hierarchical firewall policy rule. For details, see [Hierarchical firewall policies overview](https://cloud.google.com/vpc/docs/firewall-policies).

`HIERARCHICAL_FIREWALL_POLICY_RULE = 1;`

`HIERARCHICAL_FIREWALL_POLICY_RULE_VALUE`

Hierarchical firewall policy rule. For details, see [Hierarchical firewall policies overview](https://cloud.google.com/vpc/docs/firewall-policies).

`HIERARCHICAL_FIREWALL_POLICY_RULE = 1;`

`IMPLIED_VPC_FIREWALL_RULE`

Implied VPC firewall rule. For details, see [Implied rules](https://cloud.google.com/vpc/docs/firewalls#default_firewall_rules).

`IMPLIED_VPC_FIREWALL_RULE = 3;`

`IMPLIED_VPC_FIREWALL_RULE_VALUE`

Implied VPC firewall rule. For details, see [Implied rules](https://cloud.google.com/vpc/docs/firewalls#default_firewall_rules).

`IMPLIED_VPC_FIREWALL_RULE = 3;`

`NETWORK_FIREWALL_POLICY_RULE`

Global network firewall policy rule. For details, see [Network firewall policies](https://cloud.google.com/vpc/docs/network-firewall-policies).

`NETWORK_FIREWALL_POLICY_RULE = 5;`

`NETWORK_FIREWALL_POLICY_RULE_VALUE`

Global network firewall policy rule. For details, see [Network firewall policies](https://cloud.google.com/vpc/docs/network-firewall-policies).

`NETWORK_FIREWALL_POLICY_RULE = 5;`

`NETWORK_REGIONAL_FIREWALL_POLICY_RULE`

Regional network firewall policy rule. For details, see [Regional network firewall policies](https://cloud.google.com/firewall/docs/regional-firewall-policies).

`NETWORK_REGIONAL_FIREWALL_POLICY_RULE = 6;`

`NETWORK_REGIONAL_FIREWALL_POLICY_RULE_VALUE`

Regional network firewall policy rule. For details, see [Regional network firewall policies](https://cloud.google.com/firewall/docs/regional-firewall-policies).

`NETWORK_REGIONAL_FIREWALL_POLICY_RULE = 6;`

`SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE`

Implicit firewall rules that are managed by serverless VPC access to allow ingress access. They are not visible in the Google Cloud console. For details, see [VPC connector's implicit rules](https://cloud.google.com/functions/docs/networking/connecting-vpc#restrict-access).

`SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE = 4;`

`SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE_VALUE`

Implicit firewall rules that are managed by serverless VPC access to allow ingress access. They are not visible in the Google Cloud console. For details, see [VPC connector's implicit rules](https://cloud.google.com/functions/docs/networking/connecting-vpc#restrict-access).

`SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE = 4;`

`UNRECOGNIZED`

`VPC_FIREWALL_RULE`

VPC firewall rule. For details, see [VPC firewall rules overview](https://cloud.google.com/vpc/docs/firewalls).

`VPC_FIREWALL_RULE = 2;`

`VPC_FIREWALL_RULE_VALUE`

VPC firewall rule. For details, see [VPC firewall rules overview](https://cloud.google.com/vpc/docs/firewalls).

`VPC_FIREWALL_RULE = 2;`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-network-management/1.25.0/com.google.cloud.networkmanagement.v1.FirewallInfo.FirewallRuleType#com_google_cloud_networkmanagement_v1_FirewallInfo_FirewallRuleType_forNumber_int_) instead._

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
