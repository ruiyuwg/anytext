-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum RuntimeAcceleratorConfig.AcceleratorType (1.54.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.3 1.0.6 0.6.2

```
public enum RuntimeAcceleratorConfig.AcceleratorType extends Enum<RuntimeAcceleratorConfig.AcceleratorType> implements ProtocolMessageEnum
```

Type of this accelerator.

Protobuf enum `google.cloud.notebooks.v1.RuntimeAcceleratorConfig.AcceleratorType`

## Implements

[ProtocolMessageEnum](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolMessageEnum.html)

## Inherited Members

[Enum.<T>valueOf(Class<T>,String)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#valueOf-java.lang.Class-java.lang.String-)

[Enum.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#clone--)

[Enum.compareTo(E)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#compareTo-E-)

[Enum.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#equals-java.lang.Object-)

[Enum.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#finalize--)

[Enum.getDeclaringClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#getDeclaringClass--)

[Enum.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#hashCode--)

[Enum.name()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#name--)

[Enum.ordinal()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#ordinal--)

[Enum.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#toString--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Fields

**Name**

**Description**

`ACCELERATOR_TYPE_UNSPECIFIED`

Accelerator type is not specified.

`ACCELERATOR_TYPE_UNSPECIFIED = 0;`

`ACCELERATOR_TYPE_UNSPECIFIED_VALUE`

Accelerator type is not specified.

`ACCELERATOR_TYPE_UNSPECIFIED = 0;`

`NVIDIA_TESLA_A100`

Accelerator type is Nvidia Tesla A100.

`NVIDIA_TESLA_A100 = 6;`

`NVIDIA_TESLA_A100_VALUE`

Accelerator type is Nvidia Tesla A100.

`NVIDIA_TESLA_A100 = 6;`

`NVIDIA_TESLA_K80`

Accelerator type is Nvidia Tesla K80.

`NVIDIA_TESLA_K80 = 1 [deprecated = true];`

`NVIDIA_TESLA_K80_VALUE`

Accelerator type is Nvidia Tesla K80.

`NVIDIA_TESLA_K80 = 1 [deprecated = true];`

`NVIDIA_TESLA_P100`

Accelerator type is Nvidia Tesla P100.

`NVIDIA_TESLA_P100 = 2;`

`NVIDIA_TESLA_P100_VALUE`

Accelerator type is Nvidia Tesla P100.

`NVIDIA_TESLA_P100 = 2;`

`NVIDIA_TESLA_P100_VWS`

Accelerator type is NVIDIA Tesla P100 Virtual Workstations.

`NVIDIA_TESLA_P100_VWS = 10;`

`NVIDIA_TESLA_P100_VWS_VALUE`

Accelerator type is NVIDIA Tesla P100 Virtual Workstations.

`NVIDIA_TESLA_P100_VWS = 10;`

`NVIDIA_TESLA_P4`

Accelerator type is Nvidia Tesla P4.

`NVIDIA_TESLA_P4 = 4;`

`NVIDIA_TESLA_P4_VALUE`

Accelerator type is Nvidia Tesla P4.

`NVIDIA_TESLA_P4 = 4;`

`NVIDIA_TESLA_P4_VWS`

Accelerator type is NVIDIA Tesla P4 Virtual Workstations.

`NVIDIA_TESLA_P4_VWS = 11;`

`NVIDIA_TESLA_P4_VWS_VALUE`

Accelerator type is NVIDIA Tesla P4 Virtual Workstations.

`NVIDIA_TESLA_P4_VWS = 11;`

`NVIDIA_TESLA_T4`

Accelerator type is Nvidia Tesla T4.

`NVIDIA_TESLA_T4 = 5;`

`NVIDIA_TESLA_T4_VALUE`

Accelerator type is Nvidia Tesla T4.

`NVIDIA_TESLA_T4 = 5;`

`NVIDIA_TESLA_T4_VWS`

Accelerator type is NVIDIA Tesla T4 Virtual Workstations.

`NVIDIA_TESLA_T4_VWS = 9;`

`NVIDIA_TESLA_T4_VWS_VALUE`

Accelerator type is NVIDIA Tesla T4 Virtual Workstations.

`NVIDIA_TESLA_T4_VWS = 9;`

`NVIDIA_TESLA_V100`

Accelerator type is Nvidia Tesla V100.

`NVIDIA_TESLA_V100 = 3;`

`NVIDIA_TESLA_V100_VALUE`

Accelerator type is Nvidia Tesla V100.

`NVIDIA_TESLA_V100 = 3;`

`TPU_V2`

(Coming soon) Accelerator type is TPU V2.

`TPU_V2 = 7;`

`TPU_V2_VALUE`

(Coming soon) Accelerator type is TPU V2.

`TPU_V2 = 7;`

`TPU_V3`

(Coming soon) Accelerator type is TPU V3.

`TPU_V3 = 8;`

`TPU_V3_VALUE`

(Coming soon) Accelerator type is TPU V3.

`TPU_V3 = 8;`

`UNRECOGNIZED`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-notebooks/1.54.0/com.google.cloud.notebooks.v1.RuntimeAcceleratorConfig.AcceleratorType#com_google_cloud_notebooks_v1_RuntimeAcceleratorConfig_AcceleratorType_forNumber_int_) instead._

`valueOf(String name)`

`values()`

## Methods

**Name**

**Description**

`getDescriptorForType()`

`getNumber()`

`getValueDescriptor()`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
