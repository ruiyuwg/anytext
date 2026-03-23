-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface Task.InfrastructureSpec.VpcNetworkOrBuilder (1.85.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.79.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.2 1.0.1 0.2.2

```
public static interface Task.InfrastructureSpec.VpcNetworkOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getNetwork()

```
public abstract String getNetwork()
```

Optional. The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used.

`string network = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The network.

### getNetworkBytes()

```
public abstract ByteString getNetworkBytes()
```

Optional. The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used.

`string network = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for network.

### getNetworkNameCase()

```
public abstract Task.InfrastructureSpec.VpcNetwork.NetworkNameCase getNetworkNameCase()
```

**Returns**

**Type**

**Description**

`[Task.InfrastructureSpec.VpcNetwork.NetworkNameCase](/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1.Task.InfrastructureSpec.VpcNetwork.NetworkNameCase)`

### getNetworkTags(int index)

```
public abstract String getNetworkTags(int index)
```

Optional. List of network tags to apply to the job.

`repeated string network_tags = 3 [(.google.api.field_behavior) = OPTIONAL];`

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

The networkTags at the given index.

### getNetworkTagsBytes(int index)

```
public abstract ByteString getNetworkTagsBytes(int index)
```

Optional. List of network tags to apply to the job.

`repeated string network_tags = 3 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the networkTags at the given index.

### getNetworkTagsCount()

```
public abstract int getNetworkTagsCount()
```

Optional. List of network tags to apply to the job.

`repeated string network_tags = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of networkTags.

### getNetworkTagsList()

```
public abstract List<String> getNetworkTagsList()
```

Optional. List of network tags to apply to the job.

`repeated string network_tags = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the networkTags.

### getSubNetwork()

```
public abstract String getSubNetwork()
```

Optional. The Cloud VPC sub-network in which the job is run.

`string sub_network = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The subNetwork.

### getSubNetworkBytes()

```
public abstract ByteString getSubNetworkBytes()
```

Optional. The Cloud VPC sub-network in which the job is run.

`string sub_network = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for subNetwork.

### hasNetwork()

```
public abstract boolean hasNetwork()
```

Optional. The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used.

`string network = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the network field is set.

### hasSubNetwork()

```
public abstract boolean hasSubNetwork()
```

Optional. The Cloud VPC sub-network in which the job is run.

`string sub_network = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the subNetwork field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
