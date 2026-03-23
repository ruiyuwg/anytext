-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface Indicator.ProcessSignature.MemoryHashSignatureOrBuilder (2.43.0) Stay organized with collections Save and categorize content based on your preferences.

2.95.0 (latest) 2.93.0 2.91.0 2.90.0 2.88.0 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.72.0 2.71.0 2.70.0 2.68.0 2.67.0 2.66.0 2.65.0 2.64.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.10.0 2.9.0 2.8.0 2.7.1 2.6.0 2.5.6 2.3.2

```
public static interface Indicator.ProcessSignature.MemoryHashSignatureOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBinaryFamily()

```
public abstract String getBinaryFamily()
```

The binary family.

`string binary_family = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The binaryFamily.

### getBinaryFamilyBytes()

```
public abstract ByteString getBinaryFamilyBytes()
```

The binary family.

`string binary_family = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for binaryFamily.

### getDetections(int index)

```
public abstract Indicator.ProcessSignature.MemoryHashSignature.Detection getDetections(int index)
```

The list of memory hash detections contributing to the binary family match.

`repeated .google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Detection detections = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Indicator.ProcessSignature.MemoryHashSignature.Detection](/java/docs/reference/google-cloud-securitycenter/2.43.0/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Detection)`

### getDetectionsCount()

```
public abstract int getDetectionsCount()
```

The list of memory hash detections contributing to the binary family match.

`repeated .google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Detection detections = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getDetectionsList()

```
public abstract List<Indicator.ProcessSignature.MemoryHashSignature.Detection> getDetectionsList()
```

The list of memory hash detections contributing to the binary family match.

`repeated .google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Detection detections = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Detection](/java/docs/reference/google-cloud-securitycenter/2.43.0/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Detection)>`

### getDetectionsOrBuilder(int index)

```
public abstract Indicator.ProcessSignature.MemoryHashSignature.DetectionOrBuilder getDetectionsOrBuilder(int index)
```

The list of memory hash detections contributing to the binary family match.

`repeated .google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Detection detections = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Indicator.ProcessSignature.MemoryHashSignature.DetectionOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.43.0/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.DetectionOrBuilder)`

### getDetectionsOrBuilderList()

```
public abstract List<? extends Indicator.ProcessSignature.MemoryHashSignature.DetectionOrBuilder> getDetectionsOrBuilderList()
```

The list of memory hash detections contributing to the binary family match.

`repeated .google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Detection detections = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.DetectionOrBuilder>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
