-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface AwsNodeConfigOrBuilder (0.52.0) Stay organized with collections Save and categorize content based on your preferences.

0.86.0 (latest) 0.84.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.69.0 0.67.0 0.66.0 0.63.0 0.62.0 0.61.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.6 0.1.0

```
public interface AwsNodeConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

Optional. The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

`map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### containsTags(String key)

```
public abstract boolean containsTags(String key)
```

Optional. Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=\_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

`map<string, string> tags = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAutoscalingMetricsCollection()

```
public abstract AwsAutoscalingGroupMetricsCollection getAutoscalingMetricsCollection()
```

Optional. Configuration related to CloudWatch metrics collection on the Auto Scaling group of the node pool.

When unspecified, metrics collection is disabled.

`.google.cloud.gkemulticloud.v1.AwsAutoscalingGroupMetricsCollection autoscaling_metrics_collection = 15 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[AwsAutoscalingGroupMetricsCollection](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.AwsAutoscalingGroupMetricsCollection)`

The autoscalingMetricsCollection.

### getAutoscalingMetricsCollectionOrBuilder()

```
public abstract AwsAutoscalingGroupMetricsCollectionOrBuilder getAutoscalingMetricsCollectionOrBuilder()
```

Optional. Configuration related to CloudWatch metrics collection on the Auto Scaling group of the node pool.

When unspecified, metrics collection is disabled.

`.google.cloud.gkemulticloud.v1.AwsAutoscalingGroupMetricsCollection autoscaling_metrics_collection = 15 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[AwsAutoscalingGroupMetricsCollectionOrBuilder](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.AwsAutoscalingGroupMetricsCollectionOrBuilder)`

### getConfigEncryption()

```
public abstract AwsConfigEncryption getConfigEncryption()
```

Required. Config encryption for user data.

`.google.cloud.gkemulticloud.v1.AwsConfigEncryption config_encryption = 13 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[AwsConfigEncryption](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.AwsConfigEncryption)`

The configEncryption.

### getConfigEncryptionOrBuilder()

```
public abstract AwsConfigEncryptionOrBuilder getConfigEncryptionOrBuilder()
```

Required. Config encryption for user data.

`.google.cloud.gkemulticloud.v1.AwsConfigEncryption config_encryption = 13 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[AwsConfigEncryptionOrBuilder](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.AwsConfigEncryptionOrBuilder)`

### getIamInstanceProfile()

```
public abstract String getIamInstanceProfile()
```

Required. The name or ARN of the AWS IAM instance profile to assign to nodes in the pool.

`string iam_instance_profile = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The iamInstanceProfile.

### getIamInstanceProfileBytes()

```
public abstract ByteString getIamInstanceProfileBytes()
```

Required. The name or ARN of the AWS IAM instance profile to assign to nodes in the pool.

`string iam_instance_profile = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for iamInstanceProfile.

### getImageType()

```
public abstract String getImageType()
```

Optional. The OS image type to use on node pool instances. Can be unspecified, or have a value of `ubuntu`.

When unspecified, it defaults to `ubuntu`.

`string image_type = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The imageType.

### getImageTypeBytes()

```
public abstract ByteString getImageTypeBytes()
```

Optional. The OS image type to use on node pool instances. Can be unspecified, or have a value of `ubuntu`.

When unspecified, it defaults to `ubuntu`.

`string image_type = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for imageType.

### getInstancePlacement()

```
public abstract AwsInstancePlacement getInstancePlacement()
```

Optional. Placement related info for this node. When unspecified, the VPC's default tenancy will be used.

`.google.cloud.gkemulticloud.v1.AwsInstancePlacement instance_placement = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[AwsInstancePlacement](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.AwsInstancePlacement)`

The instancePlacement.

### getInstancePlacementOrBuilder()

```
public abstract AwsInstancePlacementOrBuilder getInstancePlacementOrBuilder()
```

Optional. Placement related info for this node. When unspecified, the VPC's default tenancy will be used.

`.google.cloud.gkemulticloud.v1.AwsInstancePlacement instance_placement = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[AwsInstancePlacementOrBuilder](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.AwsInstancePlacementOrBuilder)`

### getInstanceType()

```
public abstract String getInstanceType()
```

Optional. The EC2 instance type when creating on-Demand instances.

If unspecified during node pool creation, a default will be chosen based on the node pool version, and assigned to this field.

`string instance_type = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The instanceType.

### getInstanceTypeBytes()

```
public abstract ByteString getInstanceTypeBytes()
```

Optional. The EC2 instance type when creating on-Demand instances.

If unspecified during node pool creation, a default will be chosen based on the node pool version, and assigned to this field.

`string instance_type = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for instanceType.

### getLabels() (deprecated)

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.AwsNodeConfigOrBuilder#com_google_cloud_gkemulticloud_v1_AwsNodeConfigOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

Optional. The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

`map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

Optional. The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

`map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

Optional. The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

`map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getLabelsOrThrow(String key)

```
public abstract String getLabelsOrThrow(String key)
```

Optional. The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

`map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getProxyConfig()

```
public abstract AwsProxyConfig getProxyConfig()
```

Optional. Proxy configuration for outbound HTTP(S) traffic.

`.google.cloud.gkemulticloud.v1.AwsProxyConfig proxy_config = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[AwsProxyConfig](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.AwsProxyConfig)`

The proxyConfig.

### getProxyConfigOrBuilder()

```
public abstract AwsProxyConfigOrBuilder getProxyConfigOrBuilder()
```

Optional. Proxy configuration for outbound HTTP(S) traffic.

`.google.cloud.gkemulticloud.v1.AwsProxyConfig proxy_config = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[AwsProxyConfigOrBuilder](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.AwsProxyConfigOrBuilder)`

### getRootVolume()

```
public abstract AwsVolumeTemplate getRootVolume()
```

Optional. Template for the root volume provisioned for node pool nodes. Volumes will be provisioned in the availability zone assigned to the node pool subnet.

When unspecified, it defaults to 32 GiB with the GP2 volume type.

`.google.cloud.gkemulticloud.v1.AwsVolumeTemplate root_volume = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[AwsVolumeTemplate](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.AwsVolumeTemplate)`

The rootVolume.

### getRootVolumeOrBuilder()

```
public abstract AwsVolumeTemplateOrBuilder getRootVolumeOrBuilder()
```

Optional. Template for the root volume provisioned for node pool nodes. Volumes will be provisioned in the availability zone assigned to the node pool subnet.

When unspecified, it defaults to 32 GiB with the GP2 volume type.

`.google.cloud.gkemulticloud.v1.AwsVolumeTemplate root_volume = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[AwsVolumeTemplateOrBuilder](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.AwsVolumeTemplateOrBuilder)`

### getSecurityGroupIds(int index)

```
public abstract String getSecurityGroupIds(int index)
```

Optional. The IDs of additional security groups to add to nodes in this pool. The manager will automatically create security groups with minimum rules needed for a functioning cluster.

`repeated string security_group_ids = 10 [(.google.api.field_behavior) = OPTIONAL];`

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

The securityGroupIds at the given index.

### getSecurityGroupIdsBytes(int index)

```
public abstract ByteString getSecurityGroupIdsBytes(int index)
```

Optional. The IDs of additional security groups to add to nodes in this pool. The manager will automatically create security groups with minimum rules needed for a functioning cluster.

`repeated string security_group_ids = 10 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the securityGroupIds at the given index.

### getSecurityGroupIdsCount()

```
public abstract int getSecurityGroupIdsCount()
```

Optional. The IDs of additional security groups to add to nodes in this pool. The manager will automatically create security groups with minimum rules needed for a functioning cluster.

`repeated string security_group_ids = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of securityGroupIds.

### getSecurityGroupIdsList()

```
public abstract List<String> getSecurityGroupIdsList()
```

Optional. The IDs of additional security groups to add to nodes in this pool. The manager will automatically create security groups with minimum rules needed for a functioning cluster.

`repeated string security_group_ids = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the securityGroupIds.

### getSpotConfig()

```
public abstract SpotConfig getSpotConfig()
```

Optional. Configuration for provisioning EC2 Spot instances

When specified, the node pool will provision Spot instances from the set of spot\_config.instance\_types. This field is mutually exclusive with `instance_type`.

`.google.cloud.gkemulticloud.v1.SpotConfig spot_config = 16 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[SpotConfig](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.SpotConfig)`

The spotConfig.

### getSpotConfigOrBuilder()

```
public abstract SpotConfigOrBuilder getSpotConfigOrBuilder()
```

Optional. Configuration for provisioning EC2 Spot instances

When specified, the node pool will provision Spot instances from the set of spot\_config.instance\_types. This field is mutually exclusive with `instance_type`.

`.google.cloud.gkemulticloud.v1.SpotConfig spot_config = 16 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[SpotConfigOrBuilder](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.SpotConfigOrBuilder)`

### getSshConfig()

```
public abstract AwsSshConfig getSshConfig()
```

Optional. The SSH configuration.

`.google.cloud.gkemulticloud.v1.AwsSshConfig ssh_config = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[AwsSshConfig](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.AwsSshConfig)`

The sshConfig.

### getSshConfigOrBuilder()

```
public abstract AwsSshConfigOrBuilder getSshConfigOrBuilder()
```

Optional. The SSH configuration.

`.google.cloud.gkemulticloud.v1.AwsSshConfig ssh_config = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[AwsSshConfigOrBuilder](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.AwsSshConfigOrBuilder)`

### getTags() (deprecated)

```
public abstract Map<String,String> getTags()
```

Use [#getTagsMap()](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.AwsNodeConfigOrBuilder#com_google_cloud_gkemulticloud_v1_AwsNodeConfigOrBuilder_getTagsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getTagsCount()

```
public abstract int getTagsCount()
```

Optional. Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=\_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

`map<string, string> tags = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getTagsMap()

```
public abstract Map<String,String> getTagsMap()
```

Optional. Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=\_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

`map<string, string> tags = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getTagsOrDefault(String key, String defaultValue)

```
public abstract String getTagsOrDefault(String key, String defaultValue)
```

Optional. Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=\_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

`map<string, string> tags = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getTagsOrThrow(String key)

```
public abstract String getTagsOrThrow(String key)
```

Optional. Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=\_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

`map<string, string> tags = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getTaints(int index)

```
public abstract NodeTaint getTaints(int index)
```

Optional. The initial taints assigned to nodes of this node pool.

`repeated .google.cloud.gkemulticloud.v1.NodeTaint taints = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[NodeTaint](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.NodeTaint)`

### getTaintsCount()

```
public abstract int getTaintsCount()
```

Optional. The initial taints assigned to nodes of this node pool.

`repeated .google.cloud.gkemulticloud.v1.NodeTaint taints = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getTaintsList()

```
public abstract List<NodeTaint> getTaintsList()
```

Optional. The initial taints assigned to nodes of this node pool.

`repeated .google.cloud.gkemulticloud.v1.NodeTaint taints = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[NodeTaint](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.NodeTaint)>`

### getTaintsOrBuilder(int index)

```
public abstract NodeTaintOrBuilder getTaintsOrBuilder(int index)
```

Optional. The initial taints assigned to nodes of this node pool.

`repeated .google.cloud.gkemulticloud.v1.NodeTaint taints = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[NodeTaintOrBuilder](/java/docs/reference/google-cloud-gke-multi-cloud/0.52.0/com.google.cloud.gkemulticloud.v1.NodeTaintOrBuilder)`

### getTaintsOrBuilderList()

```
public abstract List<? extends NodeTaintOrBuilder> getTaintsOrBuilderList()
```

Optional. The initial taints assigned to nodes of this node pool.

`repeated .google.cloud.gkemulticloud.v1.NodeTaint taints = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.gkemulticloud.v1.NodeTaintOrBuilder>`

### hasAutoscalingMetricsCollection()

```
public abstract boolean hasAutoscalingMetricsCollection()
```

Optional. Configuration related to CloudWatch metrics collection on the Auto Scaling group of the node pool.

When unspecified, metrics collection is disabled.

`.google.cloud.gkemulticloud.v1.AwsAutoscalingGroupMetricsCollection autoscaling_metrics_collection = 15 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the autoscalingMetricsCollection field is set.

### hasConfigEncryption()

```
public abstract boolean hasConfigEncryption()
```

Required. Config encryption for user data.

`.google.cloud.gkemulticloud.v1.AwsConfigEncryption config_encryption = 13 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the configEncryption field is set.

### hasInstancePlacement()

```
public abstract boolean hasInstancePlacement()
```

Optional. Placement related info for this node. When unspecified, the VPC's default tenancy will be used.

`.google.cloud.gkemulticloud.v1.AwsInstancePlacement instance_placement = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the instancePlacement field is set.

### hasProxyConfig()

```
public abstract boolean hasProxyConfig()
```

Optional. Proxy configuration for outbound HTTP(S) traffic.

`.google.cloud.gkemulticloud.v1.AwsProxyConfig proxy_config = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the proxyConfig field is set.

### hasRootVolume()

```
public abstract boolean hasRootVolume()
```

Optional. Template for the root volume provisioned for node pool nodes. Volumes will be provisioned in the availability zone assigned to the node pool subnet.

When unspecified, it defaults to 32 GiB with the GP2 volume type.

`.google.cloud.gkemulticloud.v1.AwsVolumeTemplate root_volume = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the rootVolume field is set.

### hasSpotConfig()

```
public abstract boolean hasSpotConfig()
```

Optional. Configuration for provisioning EC2 Spot instances

When specified, the node pool will provision Spot instances from the set of spot\_config.instance\_types. This field is mutually exclusive with `instance_type`.

`.google.cloud.gkemulticloud.v1.SpotConfig spot_config = 16 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the spotConfig field is set.

### hasSshConfig()

```
public abstract boolean hasSshConfig()
```

Optional. The SSH configuration.

`.google.cloud.gkemulticloud.v1.AwsSshConfig ssh_config = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the sshConfig field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
