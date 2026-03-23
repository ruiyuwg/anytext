-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface OperationMetadataOrBuilder (3.54.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.7 3.0.1 2.1.7

```
public interface OperationMetadataOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getProgressPercentage()

```
public abstract int getProgressPercentage()
```

Percentage of completion of this operation, ranging from 0 to 100.

`int32 progress_percentage = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The progressPercentage.

### getResourceNames(int index)

```
public abstract String getResourceNames(int index)
```

The full name of the resources that this operation is directly associated with.

`repeated string resource_names = 1;`

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

The resourceNames at the given index.

### getResourceNamesBytes(int index)

```
public abstract ByteString getResourceNamesBytes(int index)
```

The full name of the resources that this operation is directly associated with.

`repeated string resource_names = 1;`

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

The bytes of the resourceNames at the given index.

### getResourceNamesCount()

```
public abstract int getResourceNamesCount()
```

The full name of the resources that this operation is directly associated with.

`repeated string resource_names = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of resourceNames.

### getResourceNamesList()

```
public abstract List<String> getResourceNamesList()
```

The full name of the resources that this operation is directly associated with.

`repeated string resource_names = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the resourceNames.

### getStartTime()

```
public abstract Timestamp getStartTime()
```

The start time of the operation.

`.google.protobuf.Timestamp start_time = 4;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The startTime.

### getStartTimeOrBuilder()

```
public abstract TimestampOrBuilder getStartTimeOrBuilder()
```

The start time of the operation.

`.google.protobuf.Timestamp start_time = 4;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getSteps(int index)

```
public abstract OperationMetadata.Step getSteps(int index)
```

Detailed status information for each step. The order is undetermined.

`repeated .google.api.servicemanagement.v1.OperationMetadata.Step steps = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[OperationMetadata.Step](/java/docs/reference/google-cloud-service-management/3.54.0/com.google.api.servicemanagement.v1.OperationMetadata.Step)`

### getStepsCount()

```
public abstract int getStepsCount()
```

Detailed status information for each step. The order is undetermined.

`repeated .google.api.servicemanagement.v1.OperationMetadata.Step steps = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getStepsList()

```
public abstract List<OperationMetadata.Step> getStepsList()
```

Detailed status information for each step. The order is undetermined.

`repeated .google.api.servicemanagement.v1.OperationMetadata.Step steps = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Step](/java/docs/reference/google-cloud-service-management/3.54.0/com.google.api.servicemanagement.v1.OperationMetadata.Step)>`

### getStepsOrBuilder(int index)

```
public abstract OperationMetadata.StepOrBuilder getStepsOrBuilder(int index)
```

Detailed status information for each step. The order is undetermined.

`repeated .google.api.servicemanagement.v1.OperationMetadata.Step steps = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[OperationMetadata.StepOrBuilder](/java/docs/reference/google-cloud-service-management/3.54.0/com.google.api.servicemanagement.v1.OperationMetadata.StepOrBuilder)`

### getStepsOrBuilderList()

```
public abstract List<? extends OperationMetadata.StepOrBuilder> getStepsOrBuilderList()
```

Detailed status information for each step. The order is undetermined.

`repeated .google.api.servicemanagement.v1.OperationMetadata.Step steps = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.api.servicemanagement.v1.OperationMetadata.StepOrBuilder>`

### hasStartTime()

```
public abstract boolean hasStartTime()
```

The start time of the operation.

`.google.protobuf.Timestamp start_time = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the startTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
