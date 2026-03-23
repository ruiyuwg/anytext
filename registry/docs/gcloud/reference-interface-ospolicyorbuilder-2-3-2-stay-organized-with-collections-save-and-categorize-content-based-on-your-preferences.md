-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface OSPolicyOrBuilder (2.3.2) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.6 2.4.3 2.3.2

```
public interface OSPolicyOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAllowNoResourceGroupMatch()

```
public abstract boolean getAllowNoResourceGroupMatch()
```

This flag determines the OS policy compliance status when none of the resource groups within the policy are applicable for a VM. Set this value to `true` if the policy needs to be reported as compliant even if the policy has nothing to validate or enforce.

`bool allow_no_resource_group_match = 5;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The allowNoResourceGroupMatch.

### getDescription()

```
public abstract String getDescription()
```

Policy description. Length of the description is limited to 1024 characters.

`string description = 2;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The description.

### getDescriptionBytes()

```
public abstract ByteString getDescriptionBytes()
```

Policy description. Length of the description is limited to 1024 characters.

`string description = 2;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for description.

### getId()

```
public abstract String getId()
```

Required. The id of the OS policy with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-63 characters.
-   Must end with a number or a letter.
-   Must be unique within the assignment.

`string id = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The id.

### getIdBytes()

```
public abstract ByteString getIdBytes()
```

Required. The id of the OS policy with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-63 characters.
-   Must end with a number or a letter.
-   Must be unique within the assignment.

`string id = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for id.

### getMode()

```
public abstract OSPolicy.Mode getMode()
```

Required. Policy mode

`.google.cloud.osconfig.v1alpha.OSPolicy.Mode mode = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[OSPolicy.Mode](/java/docs/reference/google-cloud-os-config/2.3.2/com.google.cloud.osconfig.v1alpha.OSPolicy.Mode)

The mode.

### getModeValue()

```
public abstract int getModeValue()
```

Required. Policy mode

`.google.cloud.osconfig.v1alpha.OSPolicy.Mode mode = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The enum numeric value on the wire for mode.

### getResourceGroups(int index)

```
public abstract OSPolicy.ResourceGroup getResourceGroups(int index)
```

Required. List of resource groups for the policy. For a particular VM, resource groups are evaluated in the order specified and the first resource group that is applicable is selected and the rest are ignored. If none of the resource groups are applicable for a VM, the VM is considered to be non-compliant w.r.t this policy. This behavior can be toggled by the flag `allow_no_resource_group_match`

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup resource_groups = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[OSPolicy.ResourceGroup](/java/docs/reference/google-cloud-os-config/2.3.2/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup)

### getResourceGroupsCount()

```
public abstract int getResourceGroupsCount()
```

Required. List of resource groups for the policy. For a particular VM, resource groups are evaluated in the order specified and the first resource group that is applicable is selected and the rest are ignored. If none of the resource groups are applicable for a VM, the VM is considered to be non-compliant w.r.t this policy. This behavior can be toggled by the flag `allow_no_resource_group_match`

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup resource_groups = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getResourceGroupsList()

```
public abstract List<OSPolicy.ResourceGroup> getResourceGroupsList()
```

Required. List of resource groups for the policy. For a particular VM, resource groups are evaluated in the order specified and the first resource group that is applicable is selected and the rest are ignored. If none of the resource groups are applicable for a VM, the VM is considered to be non-compliant w.r.t this policy. This behavior can be toggled by the flag `allow_no_resource_group_match`

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup resource_groups = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ResourceGroup](/java/docs/reference/google-cloud-os-config/2.3.2/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup)\>

### getResourceGroupsOrBuilder(int index)

```
public abstract OSPolicy.ResourceGroupOrBuilder getResourceGroupsOrBuilder(int index)
```

Required. List of resource groups for the policy. For a particular VM, resource groups are evaluated in the order specified and the first resource group that is applicable is selected and the rest are ignored. If none of the resource groups are applicable for a VM, the VM is considered to be non-compliant w.r.t this policy. This behavior can be toggled by the flag `allow_no_resource_group_match`

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup resource_groups = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[OSPolicy.ResourceGroupOrBuilder](/java/docs/reference/google-cloud-os-config/2.3.2/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroupOrBuilder)

### getResourceGroupsOrBuilderList()

```
public abstract List<? extends OSPolicy.ResourceGroupOrBuilder> getResourceGroupsOrBuilderList()
```

Required. List of resource groups for the policy. For a particular VM, resource groups are evaluated in the order specified and the first resource group that is applicable is selected and the rest are ignored. If none of the resource groups are applicable for a VM, the VM is considered to be non-compliant w.r.t this policy. This behavior can be toggled by the flag `allow_no_resource_group_match`

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup resource_groups = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroupOrBuilder\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
