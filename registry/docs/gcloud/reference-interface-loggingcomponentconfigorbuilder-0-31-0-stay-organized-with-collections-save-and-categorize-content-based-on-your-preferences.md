-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface LoggingComponentConfigOrBuilder (0.31.0) Stay organized with collections Save and categorize content based on your preferences.

0.86.0 (latest) 0.84.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.69.0 0.67.0 0.66.0 0.63.0 0.62.0 0.61.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.6 0.1.0

```
public interface LoggingComponentConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getEnableComponents(int index)

```
public abstract LoggingComponentConfig.Component getEnableComponents(int index)
```

The components to be enabled.

`repeated .google.cloud.gkemulticloud.v1.LoggingComponentConfig.Component enable_components = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[LoggingComponentConfig.Component](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.LoggingComponentConfig.Component)`

The enableComponents at the given index.

### getEnableComponentsCount()

```
public abstract int getEnableComponentsCount()
```

The components to be enabled.

`repeated .google.cloud.gkemulticloud.v1.LoggingComponentConfig.Component enable_components = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of enableComponents.

### getEnableComponentsList()

```
public abstract List<LoggingComponentConfig.Component> getEnableComponentsList()
```

The components to be enabled.

`repeated .google.cloud.gkemulticloud.v1.LoggingComponentConfig.Component enable_components = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Component](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.LoggingComponentConfig.Component)>`

A list containing the enableComponents.

### getEnableComponentsValue(int index)

```
public abstract int getEnableComponentsValue(int index)
```

The components to be enabled.

`repeated .google.cloud.gkemulticloud.v1.LoggingComponentConfig.Component enable_components = 1;`

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

The enum numeric value on the wire of enableComponents at the given index.

### getEnableComponentsValueList()

```
public abstract List<Integer> getEnableComponentsValueList()
```

The components to be enabled.

`repeated .google.cloud.gkemulticloud.v1.LoggingComponentConfig.Component enable_components = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)>`

A list containing the enum numeric values on the wire for enableComponents.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
