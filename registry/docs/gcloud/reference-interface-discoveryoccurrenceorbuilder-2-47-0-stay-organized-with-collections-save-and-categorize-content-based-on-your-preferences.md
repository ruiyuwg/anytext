-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface DiscoveryOccurrenceOrBuilder (2.47.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.5 2.3.1 2.2.3 2.1.3

```
public interface DiscoveryOccurrenceOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAnalysisCompleted()

```
public abstract DiscoveryOccurrence.AnalysisCompleted getAnalysisCompleted()
```

`.grafeas.v1.DiscoveryOccurrence.AnalysisCompleted analysis_completed = 7;`

**Returns**

**Type**

**Description**

`[DiscoveryOccurrence.AnalysisCompleted](/java/docs/reference/grafeas/2.47.0/io.grafeas.v1.DiscoveryOccurrence.AnalysisCompleted)`

The analysisCompleted.

### getAnalysisCompletedOrBuilder()

```
public abstract DiscoveryOccurrence.AnalysisCompletedOrBuilder getAnalysisCompletedOrBuilder()
```

`.grafeas.v1.DiscoveryOccurrence.AnalysisCompleted analysis_completed = 7;`

**Returns**

**Type**

**Description**

`[DiscoveryOccurrence.AnalysisCompletedOrBuilder](/java/docs/reference/grafeas/2.47.0/io.grafeas.v1.DiscoveryOccurrence.AnalysisCompletedOrBuilder)`

### getAnalysisError(int index)

```
public abstract Status getAnalysisError(int index)
```

Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors.

`repeated .google.rpc.Status analysis_error = 8;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`com.google.rpc.Status`

### getAnalysisErrorCount()

```
public abstract int getAnalysisErrorCount()
```

Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors.

`repeated .google.rpc.Status analysis_error = 8;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAnalysisErrorList()

```
public abstract List<Status> getAnalysisErrorList()
```

Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors.

`repeated .google.rpc.Status analysis_error = 8;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<com.google.rpc.Status>`

### getAnalysisErrorOrBuilder(int index)

```
public abstract StatusOrBuilder getAnalysisErrorOrBuilder(int index)
```

Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors.

`repeated .google.rpc.Status analysis_error = 8;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`com.google.rpc.StatusOrBuilder`

### getAnalysisErrorOrBuilderList()

```
public abstract List<? extends StatusOrBuilder> getAnalysisErrorOrBuilderList()
```

Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors.

`repeated .google.rpc.Status analysis_error = 8;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.rpc.StatusOrBuilder>`

### getAnalysisStatus()

```
public abstract DiscoveryOccurrence.AnalysisStatus getAnalysisStatus()
```

The status of discovery for the resource.

`.grafeas.v1.DiscoveryOccurrence.AnalysisStatus analysis_status = 2;`

**Returns**

**Type**

**Description**

`[DiscoveryOccurrence.AnalysisStatus](/java/docs/reference/grafeas/2.47.0/io.grafeas.v1.DiscoveryOccurrence.AnalysisStatus)`

The analysisStatus.

### getAnalysisStatusError()

```
public abstract Status getAnalysisStatusError()
```

When an error is encountered this will contain a LocalizedMessage under details to show to the user. The LocalizedMessage is output only and populated by the API.

`.google.rpc.Status analysis_status_error = 3;`

**Returns**

**Type**

**Description**

`com.google.rpc.Status`

The analysisStatusError.

### getAnalysisStatusErrorOrBuilder()

```
public abstract StatusOrBuilder getAnalysisStatusErrorOrBuilder()
```

When an error is encountered this will contain a LocalizedMessage under details to show to the user. The LocalizedMessage is output only and populated by the API.

`.google.rpc.Status analysis_status_error = 3;`

**Returns**

**Type**

**Description**

`com.google.rpc.StatusOrBuilder`

### getAnalysisStatusValue()

```
public abstract int getAnalysisStatusValue()
```

The status of discovery for the resource.

`.grafeas.v1.DiscoveryOccurrence.AnalysisStatus analysis_status = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for analysisStatus.

### getArchiveTime()

```
public abstract Timestamp getArchiveTime()
```

The time occurrences related to this discovery occurrence were archived.

`.google.protobuf.Timestamp archive_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The archiveTime.

### getArchiveTimeOrBuilder()

```
public abstract TimestampOrBuilder getArchiveTimeOrBuilder()
```

The time occurrences related to this discovery occurrence were archived.

`.google.protobuf.Timestamp archive_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getContinuousAnalysis()

```
public abstract DiscoveryOccurrence.ContinuousAnalysis getContinuousAnalysis()
```

Whether the resource is continuously analyzed.

`.grafeas.v1.DiscoveryOccurrence.ContinuousAnalysis continuous_analysis = 1;`

**Returns**

**Type**

**Description**

`[DiscoveryOccurrence.ContinuousAnalysis](/java/docs/reference/grafeas/2.47.0/io.grafeas.v1.DiscoveryOccurrence.ContinuousAnalysis)`

The continuousAnalysis.

### getContinuousAnalysisValue()

```
public abstract int getContinuousAnalysisValue()
```

Whether the resource is continuously analyzed.

`.grafeas.v1.DiscoveryOccurrence.ContinuousAnalysis continuous_analysis = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for continuousAnalysis.

### getCpe()

```
public abstract String getCpe()
```

The CPE of the resource being scanned.

`string cpe = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The cpe.

### getCpeBytes()

```
public abstract ByteString getCpeBytes()
```

The CPE of the resource being scanned.

`string cpe = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for cpe.

### getLastScanTime()

```
public abstract Timestamp getLastScanTime()
```

The last time this resource was scanned.

`.google.protobuf.Timestamp last_scan_time = 5;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The lastScanTime.

### getLastScanTimeOrBuilder()

```
public abstract TimestampOrBuilder getLastScanTimeOrBuilder()
```

The last time this resource was scanned.

`.google.protobuf.Timestamp last_scan_time = 5;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getSbomStatus()

```
public abstract DiscoveryOccurrence.SBOMStatus getSbomStatus()
```

The status of an SBOM generation.

`.grafeas.v1.DiscoveryOccurrence.SBOMStatus sbom_status = 9;`

**Returns**

**Type**

**Description**

`[DiscoveryOccurrence.SBOMStatus](/java/docs/reference/grafeas/2.47.0/io.grafeas.v1.DiscoveryOccurrence.SBOMStatus)`

The sbomStatus.

### getSbomStatusOrBuilder()

```
public abstract DiscoveryOccurrence.SBOMStatusOrBuilder getSbomStatusOrBuilder()
```

The status of an SBOM generation.

`.grafeas.v1.DiscoveryOccurrence.SBOMStatus sbom_status = 9;`

**Returns**

**Type**

**Description**

`[DiscoveryOccurrence.SBOMStatusOrBuilder](/java/docs/reference/grafeas/2.47.0/io.grafeas.v1.DiscoveryOccurrence.SBOMStatusOrBuilder)`

### hasAnalysisCompleted()

```
public abstract boolean hasAnalysisCompleted()
```

`.grafeas.v1.DiscoveryOccurrence.AnalysisCompleted analysis_completed = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the analysisCompleted field is set.

### hasAnalysisStatusError()

```
public abstract boolean hasAnalysisStatusError()
```

When an error is encountered this will contain a LocalizedMessage under details to show to the user. The LocalizedMessage is output only and populated by the API.

`.google.rpc.Status analysis_status_error = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the analysisStatusError field is set.

### hasArchiveTime()

```
public abstract boolean hasArchiveTime()
```

The time occurrences related to this discovery occurrence were archived.

`.google.protobuf.Timestamp archive_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the archiveTime field is set.

### hasLastScanTime()

```
public abstract boolean hasLastScanTime()
```

The last time this resource was scanned.

`.google.protobuf.Timestamp last_scan_time = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the lastScanTime field is set.

### hasSbomStatus()

```
public abstract boolean hasSbomStatus()
```

The status of an SBOM generation.

`.grafeas.v1.DiscoveryOccurrence.SBOMStatus sbom_status = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the sbomStatus field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
