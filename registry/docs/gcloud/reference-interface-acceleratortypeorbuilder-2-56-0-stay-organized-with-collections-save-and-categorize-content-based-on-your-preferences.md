-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface AcceleratorTypeOrBuilder (2.56.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.2.6

```
public interface AcceleratorTypeOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAcceleratorConfigs(int index)

```
public abstract AcceleratorConfig getAcceleratorConfigs(int index)
```

The accelerator config.

`repeated .google.cloud.tpu.v2.AcceleratorConfig accelerator_configs = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[AcceleratorConfig](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v2.AcceleratorConfig)`

### getAcceleratorConfigsCount()

```
public abstract int getAcceleratorConfigsCount()
```

The accelerator config.

`repeated .google.cloud.tpu.v2.AcceleratorConfig accelerator_configs = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAcceleratorConfigsList()

```
public abstract List<AcceleratorConfig> getAcceleratorConfigsList()
```

The accelerator config.

`repeated .google.cloud.tpu.v2.AcceleratorConfig accelerator_configs = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[AcceleratorConfig](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v2.AcceleratorConfig)>`

### getAcceleratorConfigsOrBuilder(int index)

```
public abstract AcceleratorConfigOrBuilder getAcceleratorConfigsOrBuilder(int index)
```

The accelerator config.

`repeated .google.cloud.tpu.v2.AcceleratorConfig accelerator_configs = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[AcceleratorConfigOrBuilder](/java/docs/reference/google-cloud-tpu/2.56.0/com.google.cloud.tpu.v2.AcceleratorConfigOrBuilder)`

### getAcceleratorConfigsOrBuilderList()

```
public abstract List<? extends AcceleratorConfigOrBuilder> getAcceleratorConfigsOrBuilderList()
```

The accelerator config.

`repeated .google.cloud.tpu.v2.AcceleratorConfig accelerator_configs = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.tpu.v2.AcceleratorConfigOrBuilder>`

### getName()

```
public abstract String getName()
```

The resource name.

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

The resource name.

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getType()

```
public abstract String getType()
```

The accelerator type.

`string type = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The type.

### getTypeBytes()

```
public abstract ByteString getTypeBytes()
```

The accelerator type.

`string type = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for type.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
