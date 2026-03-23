-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ComputeDeploymentStatusResponseOrBuilder (0.5.0) Stay organized with collections Save and categorize content based on your preferences.

0.57.0 (latest) 0.55.0 0.53.0 0.52.0 0.50.0 0.48.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.38.0 0.37.0 0.34.0 0.33.0 0.32.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface ComputeDeploymentStatusResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAggregatedStatus()

```
public abstract Status getAggregatedStatus()
```

Output only. Aggregated status of a deployment.

`.google.cloud.telcoautomation.v1.Status aggregated_status = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Status](/java/docs/reference/google-cloud-telcoautomation/0.5.0/com.google.cloud.telcoautomation.v1.Status)`

The aggregatedStatus.

### getAggregatedStatusValue()

```
public abstract int getAggregatedStatusValue()
```

Output only. Aggregated status of a deployment.

`.google.cloud.telcoautomation.v1.Status aggregated_status = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for aggregatedStatus.

### getName()

```
public abstract String getName()
```

The name of the deployment.

`string name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

The name of the deployment.

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getResourceStatuses(int index)

```
public abstract ResourceStatus getResourceStatuses(int index)
```

Output only. Resource level status details in deployments.

`repeated .google.cloud.telcoautomation.v1.ResourceStatus resource_statuses = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ResourceStatus](/java/docs/reference/google-cloud-telcoautomation/0.5.0/com.google.cloud.telcoautomation.v1.ResourceStatus)`

### getResourceStatusesCount()

```
public abstract int getResourceStatusesCount()
```

Output only. Resource level status details in deployments.

`repeated .google.cloud.telcoautomation.v1.ResourceStatus resource_statuses = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getResourceStatusesList()

```
public abstract List<ResourceStatus> getResourceStatusesList()
```

Output only. Resource level status details in deployments.

`repeated .google.cloud.telcoautomation.v1.ResourceStatus resource_statuses = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ResourceStatus](/java/docs/reference/google-cloud-telcoautomation/0.5.0/com.google.cloud.telcoautomation.v1.ResourceStatus)>`

### getResourceStatusesOrBuilder(int index)

```
public abstract ResourceStatusOrBuilder getResourceStatusesOrBuilder(int index)
```

Output only. Resource level status details in deployments.

`repeated .google.cloud.telcoautomation.v1.ResourceStatus resource_statuses = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ResourceStatusOrBuilder](/java/docs/reference/google-cloud-telcoautomation/0.5.0/com.google.cloud.telcoautomation.v1.ResourceStatusOrBuilder)`

### getResourceStatusesOrBuilderList()

```
public abstract List<? extends ResourceStatusOrBuilder> getResourceStatusesOrBuilderList()
```

Output only. Resource level status details in deployments.

`repeated .google.cloud.telcoautomation.v1.ResourceStatus resource_statuses = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.telcoautomation.v1.ResourceStatusOrBuilder>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
