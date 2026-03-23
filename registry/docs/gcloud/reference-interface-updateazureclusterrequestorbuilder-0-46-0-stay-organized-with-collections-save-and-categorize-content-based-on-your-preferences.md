-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface UpdateAzureClusterRequestOrBuilder (0.46.0) Stay organized with collections Save and categorize content based on your preferences.

0.86.0 (latest) 0.84.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.69.0 0.67.0 0.66.0 0.63.0 0.62.0 0.61.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.6 0.1.0

```
public interface UpdateAzureClusterRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAzureCluster()

```
public abstract AzureCluster getAzureCluster()
```

Required. The AzureCluster resource to update.

`.google.cloud.gkemulticloud.v1.AzureCluster azure_cluster = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[AzureCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.46.0/com.google.cloud.gkemulticloud.v1.AzureCluster)`

The azureCluster.

### getAzureClusterOrBuilder()

```
public abstract AzureClusterOrBuilder getAzureClusterOrBuilder()
```

Required. The AzureCluster resource to update.

`.google.cloud.gkemulticloud.v1.AzureCluster azure_cluster = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[AzureClusterOrBuilder](/java/docs/reference/google-cloud-gke-multi-cloud/0.46.0/com.google.cloud.gkemulticloud.v1.AzureClusterOrBuilder)`

### getUpdateMask()

```
public abstract FieldMask getUpdateMask()
```

Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field can only include these fields from AzureCluster:

-   `description`.
-   `azureClient`.
-   `control_plane.version`.
-   `control_plane.vm_size`.
-   `annotations`.
-   `authorization.admin_users`.
-   `authorization.admin_groups`.
-   `control_plane.root_volume.size_gib`.
-   `azure_services_authentication`.
-   `azure_services_authentication.tenant_id`.
-   `azure_services_authentication.application_id`.
-   `control_plane.proxy_config`.
-   `control_plane.proxy_config.resource_group_id`.
-   `control_plane.proxy_config.secret_id`.
-   `control_plane.ssh_config.authorized_key`.
-   `logging_config.component_config.enable_components`
-   `monitoring_config.managed_prometheus_config.enabled`.

`.google.protobuf.FieldMask update_mask = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`

The updateMask.

### getUpdateMaskOrBuilder()

```
public abstract FieldMaskOrBuilder getUpdateMaskOrBuilder()
```

Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field can only include these fields from AzureCluster:

-   `description`.
-   `azureClient`.
-   `control_plane.version`.
-   `control_plane.vm_size`.
-   `annotations`.
-   `authorization.admin_users`.
-   `authorization.admin_groups`.
-   `control_plane.root_volume.size_gib`.
-   `azure_services_authentication`.
-   `azure_services_authentication.tenant_id`.
-   `azure_services_authentication.application_id`.
-   `control_plane.proxy_config`.
-   `control_plane.proxy_config.resource_group_id`.
-   `control_plane.proxy_config.secret_id`.
-   `control_plane.ssh_config.authorized_key`.
-   `logging_config.component_config.enable_components`
-   `monitoring_config.managed_prometheus_config.enabled`.

`.google.protobuf.FieldMask update_mask = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[FieldMaskOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMaskOrBuilder.html)`

### getValidateOnly()

```
public abstract boolean getValidateOnly()
```

If set, only validate the request, but do not actually update the cluster.

`bool validate_only = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The validateOnly.

### hasAzureCluster()

```
public abstract boolean hasAzureCluster()
```

Required. The AzureCluster resource to update.

`.google.cloud.gkemulticloud.v1.AzureCluster azure_cluster = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the azureCluster field is set.

### hasUpdateMask()

```
public abstract boolean hasUpdateMask()
```

Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field can only include these fields from AzureCluster:

-   `description`.
-   `azureClient`.
-   `control_plane.version`.
-   `control_plane.vm_size`.
-   `annotations`.
-   `authorization.admin_users`.
-   `authorization.admin_groups`.
-   `control_plane.root_volume.size_gib`.
-   `azure_services_authentication`.
-   `azure_services_authentication.tenant_id`.
-   `azure_services_authentication.application_id`.
-   `control_plane.proxy_config`.
-   `control_plane.proxy_config.resource_group_id`.
-   `control_plane.proxy_config.secret_id`.
-   `control_plane.ssh_config.authorized_key`.
-   `logging_config.component_config.enable_components`
-   `monitoring_config.managed_prometheus_config.enabled`.

`.google.protobuf.FieldMask update_mask = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateMask field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
