-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface FirewallInfoOrBuilder (1.25.0) Stay organized with collections Save and categorize content based on your preferences.

1.88.0 (latest) 1.86.0 1.84.0 1.83.0 1.81.0 1.79.0 1.77.0 1.76.0 1.75.0 1.74.0 1.73.0 1.71.0 1.69.0 1.68.0 1.65.0 1.64.0 1.63.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.1.10

```
public interface FirewallInfoOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAction()

```
public abstract String getAction()
```

Possible values: ALLOW, DENY

`string action = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The action.

### getActionBytes()

```
public abstract ByteString getActionBytes()
```

Possible values: ALLOW, DENY

`string action = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for action.

### getDirection()

```
public abstract String getDirection()
```

Possible values: INGRESS, EGRESS

`string direction = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The direction.

### getDirectionBytes()

```
public abstract ByteString getDirectionBytes()
```

Possible values: INGRESS, EGRESS

`string direction = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for direction.

### getDisplayName()

```
public abstract String getDisplayName()
```

The display name of the VPC firewall rule. This field is not applicable to hierarchical firewall policy rules.

`string display_name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The displayName.

### getDisplayNameBytes()

```
public abstract ByteString getDisplayNameBytes()
```

The display name of the VPC firewall rule. This field is not applicable to hierarchical firewall policy rules.

`string display_name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for displayName.

### getFirewallRuleType()

```
public abstract FirewallInfo.FirewallRuleType getFirewallRuleType()
```

The firewall rule's type.

`.google.cloud.networkmanagement.v1.FirewallInfo.FirewallRuleType firewall_rule_type = 10;`

**Returns**

**Type**

**Description**

`[FirewallInfo.FirewallRuleType](/java/docs/reference/google-cloud-network-management/1.25.0/com.google.cloud.networkmanagement.v1.FirewallInfo.FirewallRuleType)`

The firewallRuleType.

### getFirewallRuleTypeValue()

```
public abstract int getFirewallRuleTypeValue()
```

The firewall rule's type.

`.google.cloud.networkmanagement.v1.FirewallInfo.FirewallRuleType firewall_rule_type = 10;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for firewallRuleType.

### getNetworkUri()

```
public abstract String getNetworkUri()
```

The URI of the VPC network that the firewall rule is associated with. This field is not applicable to hierarchical firewall policy rules.

`string network_uri = 6;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The networkUri.

### getNetworkUriBytes()

```
public abstract ByteString getNetworkUriBytes()
```

The URI of the VPC network that the firewall rule is associated with. This field is not applicable to hierarchical firewall policy rules.

`string network_uri = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for networkUri.

### getPolicy()

```
public abstract String getPolicy()
```

The hierarchical firewall policy that this rule is associated with. This field is not applicable to VPC firewall rules.

`string policy = 9;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The policy.

### getPolicyBytes()

```
public abstract ByteString getPolicyBytes()
```

The hierarchical firewall policy that this rule is associated with. This field is not applicable to VPC firewall rules.

`string policy = 9;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for policy.

### getPriority()

```
public abstract int getPriority()
```

The priority of the firewall rule.

`int32 priority = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The priority.

### getTargetServiceAccounts(int index)

```
public abstract String getTargetServiceAccounts(int index)
```

The target service accounts specified by the firewall rule.

`repeated string target_service_accounts = 8;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The targetServiceAccounts at the given index.

### getTargetServiceAccountsBytes(int index)

```
public abstract ByteString getTargetServiceAccountsBytes(int index)
```

The target service accounts specified by the firewall rule.

`repeated string target_service_accounts = 8;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the targetServiceAccounts at the given index.

### getTargetServiceAccountsCount()

```
public abstract int getTargetServiceAccountsCount()
```

The target service accounts specified by the firewall rule.

`repeated string target_service_accounts = 8;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of targetServiceAccounts.

### getTargetServiceAccountsList()

```
public abstract List<String> getTargetServiceAccountsList()
```

The target service accounts specified by the firewall rule.

`repeated string target_service_accounts = 8;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the targetServiceAccounts.

### getTargetTags(int index)

```
public abstract String getTargetTags(int index)
```

The target tags defined by the VPC firewall rule. This field is not applicable to hierarchical firewall policy rules.

`repeated string target_tags = 7;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The targetTags at the given index.

### getTargetTagsBytes(int index)

```
public abstract ByteString getTargetTagsBytes(int index)
```

The target tags defined by the VPC firewall rule. This field is not applicable to hierarchical firewall policy rules.

`repeated string target_tags = 7;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the targetTags at the given index.

### getTargetTagsCount()

```
public abstract int getTargetTagsCount()
```

The target tags defined by the VPC firewall rule. This field is not applicable to hierarchical firewall policy rules.

`repeated string target_tags = 7;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of targetTags.

### getTargetTagsList()

```
public abstract List<String> getTargetTagsList()
```

The target tags defined by the VPC firewall rule. This field is not applicable to hierarchical firewall policy rules.

`repeated string target_tags = 7;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the targetTags.

### getUri()

```
public abstract String getUri()
```

The URI of the VPC firewall rule. This field is not applicable to implied firewall rules or hierarchical firewall policy rules.

`string uri = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The uri.

### getUriBytes()

```
public abstract ByteString getUriBytes()
```

The URI of the VPC firewall rule. This field is not applicable to implied firewall rules or hierarchical firewall policy rules.

`string uri = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for uri.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
