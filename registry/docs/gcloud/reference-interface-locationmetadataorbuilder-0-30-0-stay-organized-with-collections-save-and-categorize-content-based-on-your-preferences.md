-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface LocationMetadataOrBuilder (0.30.0) Stay organized with collections Save and categorize content based on your preferences.

0.66.0 (latest) 0.64.0 0.62.0 0.61.0 0.59.0 0.57.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.49.0 0.47.0 0.46.0 0.43.0 0.42.0 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.3.0 0.2.0 0.1.0

```
public interface LocationMetadataOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getSupportedServiceLevels(int index)

```
public abstract ServiceLevel getSupportedServiceLevels(int index)
```

Output only. Supported service levels in a location.

`repeated .google.cloud.netapp.v1.ServiceLevel supported_service_levels = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[ServiceLevel](/java/docs/reference/google-cloud-netapp/0.30.0/com.google.cloud.netapp.v1.ServiceLevel)`

The supportedServiceLevels at the given index.

### getSupportedServiceLevelsCount()

```
public abstract int getSupportedServiceLevelsCount()
```

Output only. Supported service levels in a location.

`repeated .google.cloud.netapp.v1.ServiceLevel supported_service_levels = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of supportedServiceLevels.

### getSupportedServiceLevelsList()

```
public abstract List<ServiceLevel> getSupportedServiceLevelsList()
```

Output only. Supported service levels in a location.

`repeated .google.cloud.netapp.v1.ServiceLevel supported_service_levels = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ServiceLevel](/java/docs/reference/google-cloud-netapp/0.30.0/com.google.cloud.netapp.v1.ServiceLevel)>`

A list containing the supportedServiceLevels.

### getSupportedServiceLevelsValue(int index)

```
public abstract int getSupportedServiceLevelsValue(int index)
```

Output only. Supported service levels in a location.

`repeated .google.cloud.netapp.v1.ServiceLevel supported_service_levels = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire of supportedServiceLevels at the given index.

### getSupportedServiceLevelsValueList()

```
public abstract List<Integer> getSupportedServiceLevelsValueList()
```

Output only. Supported service levels in a location.

`repeated .google.cloud.netapp.v1.ServiceLevel supported_service_levels = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)>`

A list containing the enum numeric values on the wire for supportedServiceLevels.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
