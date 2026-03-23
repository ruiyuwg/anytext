-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface WorkstationConfig.Host.GceInstanceOrBuilder (0.43.0) Stay organized with collections Save and categorize content based on your preferences.

0.75.0 (latest) 0.73.0 0.71.0 0.70.0 0.68.0 0.66.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.58.0 0.56.0 0.55.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static interface WorkstationConfig.Host.GceInstanceOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBootDiskSizeGb()

```
public abstract int getBootDiskSizeGb()
```

Optional. The size of the boot disk for the VM in gigabytes (GB). The minimum boot disk size is `30` GB. Defaults to `50` GB.

`int32 boot_disk_size_gb = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The bootDiskSizeGb.

### getConfidentialInstanceConfig()

```
public abstract WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig getConfidentialInstanceConfig()
```

Optional. A set of Compute Engine Confidential VM instance options.

`.google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig confidential_instance_config = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig](/java/docs/reference/google-cloud-workstations/0.43.0/com.google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig)`

The confidentialInstanceConfig.

### getConfidentialInstanceConfigOrBuilder()

```
public abstract WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfigOrBuilder getConfidentialInstanceConfigOrBuilder()
```

Optional. A set of Compute Engine Confidential VM instance options.

`.google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig confidential_instance_config = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfigOrBuilder](/java/docs/reference/google-cloud-workstations/0.43.0/com.google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfigOrBuilder)`

### getDisablePublicIpAddresses()

```
public abstract boolean getDisablePublicIpAddresses()
```

Optional. When set to true, disables public IP addresses for VMs. If you disable public IP addresses, you must set up Private Google Access or Cloud NAT on your network. If you use Private Google Access and you use `private.googleapis.com` or `restricted.googleapis.com` for Container Registry and Artifact Registry, make sure that you set up DNS records for domains `_.gcr.io_` and `.pkg.dev`. Defaults to false (VMs have public IP addresses).

`bool disable_public_ip_addresses = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The disablePublicIpAddresses.

### getEnableNestedVirtualization()

```
public abstract boolean getEnableNestedVirtualization()
```

Optional. Whether to enable nested virtualization on Cloud Workstations VMs created under this workstation configuration.

Nested virtualization lets you run virtual machine (VM) instances inside your workstation. Before enabling nested virtualization, consider the following important considerations. Cloud Workstations instances are subject to the [same restrictions as Compute Engine instances](https://cloud.google.com/compute/docs/instances/nested-virtualization/overview#restrictions):

-   **Organization policy**: projects, folders, or organizations may be restricted from creating nested VMs if the **Disable VM nested virtualization** constraint is enforced in the organization policy. For more information, see the Compute Engine section, [Checking whether nested virtualization is allowed](https://cloud.google.com/compute/docs/instances/nested-virtualization/managing-constraint#checking_whether_nested_virtualization_is_allowed).
-   **Performance**: nested VMs might experience a 10% or greater decrease in performance for workloads that are CPU-bound and possibly greater than a 10% decrease for workloads that are input/output bound.
-   **Machine Type**: nested virtualization can only be enabled on workstation configurations that specify a machine\_type in the N1 or N2 machine series.
-   **GPUs**: nested virtualization may not be enabled on workstation configurations with accelerators.
-   **Operating System**: Because [Container-Optimized OS](https://cloud.google.com/compute/docs/images/os-details#container-optimized_os_cos) does not support nested virtualization, when nested virtualization is enabled, the underlying Compute Engine VM instances boot from an [Ubuntu LTS](https://cloud.google.com/compute/docs/images/os-details#ubuntu_lts) image.

`bool enable_nested_virtualization = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enableNestedVirtualization.

### getMachineType()

```
public abstract String getMachineType()
```

Optional. The type of machine to use for VM instances—for example, `"e2-standard-4"`. For more information about machine types that Cloud Workstations supports, see the list of [available machine types](https://cloud.google.com/workstations/docs/available-machine-types).

`string machine_type = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The machineType.

### getMachineTypeBytes()

```
public abstract ByteString getMachineTypeBytes()
```

Optional. The type of machine to use for VM instances—for example, `"e2-standard-4"`. For more information about machine types that Cloud Workstations supports, see the list of [available machine types](https://cloud.google.com/workstations/docs/available-machine-types).

`string machine_type = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for machineType.

### getPoolSize()

```
public abstract int getPoolSize()
```

Optional. The number of VMs that the system should keep idle so that new workstations can be started quickly for new users. Defaults to `0` in the API.

`int32 pool_size = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The poolSize.

### getPooledInstances()

```
public abstract int getPooledInstances()
```

Output only. Number of instances currently available in the pool for faster workstation startup.

`int32 pooled_instances = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The pooledInstances.

### getServiceAccount()

```
public abstract String getServiceAccount()
```

Optional. The email address of the service account for Cloud Workstations VMs created with this configuration. When specified, be sure that the service account has `logginglogEntries.create` permission on the project so it can write logs out to Cloud Logging. If using a custom container image, the service account must have permissions to pull the specified image.

If you as the administrator want to be able to `ssh` into the underlying VM, you need to set this value to a service account for which you have the `iam.serviceAccounts.actAs` permission. Conversely, if you don't want anyone to be able to `ssh` into the underlying VM, use a service account where no one has that permission.

If not set, VMs run with a service account provided by the Cloud Workstations service, and the image must be publicly accessible.

`string service_account = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The serviceAccount.

### getServiceAccountBytes()

```
public abstract ByteString getServiceAccountBytes()
```

Optional. The email address of the service account for Cloud Workstations VMs created with this configuration. When specified, be sure that the service account has `logginglogEntries.create` permission on the project so it can write logs out to Cloud Logging. If using a custom container image, the service account must have permissions to pull the specified image.

If you as the administrator want to be able to `ssh` into the underlying VM, you need to set this value to a service account for which you have the `iam.serviceAccounts.actAs` permission. Conversely, if you don't want anyone to be able to `ssh` into the underlying VM, use a service account where no one has that permission.

If not set, VMs run with a service account provided by the Cloud Workstations service, and the image must be publicly accessible.

`string service_account = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for serviceAccount.

### getServiceAccountScopes(int index)

```
public abstract String getServiceAccountScopes(int index)
```

Optional. Scopes to grant to the service\_account. Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have `iam.serviceAccounts.actAs` on the service account.

`repeated string service_account_scopes = 3 [(.google.api.field_behavior) = OPTIONAL];`

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

The serviceAccountScopes at the given index.

### getServiceAccountScopesBytes(int index)

```
public abstract ByteString getServiceAccountScopesBytes(int index)
```

Optional. Scopes to grant to the service\_account. Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have `iam.serviceAccounts.actAs` on the service account.

`repeated string service_account_scopes = 3 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the serviceAccountScopes at the given index.

### getServiceAccountScopesCount()

```
public abstract int getServiceAccountScopesCount()
```

Optional. Scopes to grant to the service\_account. Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have `iam.serviceAccounts.actAs` on the service account.

`repeated string service_account_scopes = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of serviceAccountScopes.

### getServiceAccountScopesList()

```
public abstract List<String> getServiceAccountScopesList()
```

Optional. Scopes to grant to the service\_account. Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have `iam.serviceAccounts.actAs` on the service account.

`repeated string service_account_scopes = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the serviceAccountScopes.

### getShieldedInstanceConfig()

```
public abstract WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig getShieldedInstanceConfig()
```

Optional. A set of Compute Engine Shielded instance options.

`.google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig shielded_instance_config = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig](/java/docs/reference/google-cloud-workstations/0.43.0/com.google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig)`

The shieldedInstanceConfig.

### getShieldedInstanceConfigOrBuilder()

```
public abstract WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfigOrBuilder getShieldedInstanceConfigOrBuilder()
```

Optional. A set of Compute Engine Shielded instance options.

`.google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig shielded_instance_config = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfigOrBuilder](/java/docs/reference/google-cloud-workstations/0.43.0/com.google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfigOrBuilder)`

### getTags(int index)

```
public abstract String getTags(int index)
```

Optional. Network tags to add to the Compute Engine VMs backing the workstations. This option applies [network tags](https://cloud.google.com/vpc/docs/add-remove-network-tags) to VMs created with this configuration. These network tags enable the creation of [firewall rules](https://cloud.google.com/workstations/docs/configure-firewall-rules).

`repeated string tags = 4 [(.google.api.field_behavior) = OPTIONAL];`

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

The tags at the given index.

### getTagsBytes(int index)

```
public abstract ByteString getTagsBytes(int index)
```

Optional. Network tags to add to the Compute Engine VMs backing the workstations. This option applies [network tags](https://cloud.google.com/vpc/docs/add-remove-network-tags) to VMs created with this configuration. These network tags enable the creation of [firewall rules](https://cloud.google.com/workstations/docs/configure-firewall-rules).

`repeated string tags = 4 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the tags at the given index.

### getTagsCount()

```
public abstract int getTagsCount()
```

Optional. Network tags to add to the Compute Engine VMs backing the workstations. This option applies [network tags](https://cloud.google.com/vpc/docs/add-remove-network-tags) to VMs created with this configuration. These network tags enable the creation of [firewall rules](https://cloud.google.com/workstations/docs/configure-firewall-rules).

`repeated string tags = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of tags.

### getTagsList()

```
public abstract List<String> getTagsList()
```

Optional. Network tags to add to the Compute Engine VMs backing the workstations. This option applies [network tags](https://cloud.google.com/vpc/docs/add-remove-network-tags) to VMs created with this configuration. These network tags enable the creation of [firewall rules](https://cloud.google.com/workstations/docs/configure-firewall-rules).

`repeated string tags = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the tags.

### hasConfidentialInstanceConfig()

```
public abstract boolean hasConfidentialInstanceConfig()
```

Optional. A set of Compute Engine Confidential VM instance options.

`.google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig confidential_instance_config = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the confidentialInstanceConfig field is set.

### hasShieldedInstanceConfig()

```
public abstract boolean hasShieldedInstanceConfig()
```

Optional. A set of Compute Engine Shielded instance options.

`.google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig shielded_instance_config = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the shieldedInstanceConfig field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
