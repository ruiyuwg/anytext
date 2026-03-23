-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface FindingOrBuilder (2.49.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.4 2.1.1 2.0.15

```
public interface FindingOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBody()

```
public abstract String getBody()
```

The body of the request that triggered the vulnerability.

`string body = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The body.

### getBodyBytes()

```
public abstract ByteString getBodyBytes()
```

The body of the request that triggered the vulnerability.

`string body = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for body.

### getDescription()

```
public abstract String getDescription()
```

The description of the vulnerability.

`string description = 6;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public abstract ByteString getDescriptionBytes()
```

The description of the vulnerability.

`string description = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

### getFinalUrl()

```
public abstract String getFinalUrl()
```

The URL where the browser lands when the vulnerability is detected.

`string final_url = 9;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The finalUrl.

### getFinalUrlBytes()

```
public abstract ByteString getFinalUrlBytes()
```

The URL where the browser lands when the vulnerability is detected.

`string final_url = 9;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for finalUrl.

### getFindingType()

```
public abstract Finding.FindingType getFindingType()
```

The type of the Finding.

`.google.cloud.websecurityscanner.v1alpha.Finding.FindingType finding_type = 2;`

**Returns**

**Type**

**Description**

`[Finding.FindingType](/java/docs/reference/google-cloud-websecurityscanner/2.49.0/com.google.cloud.websecurityscanner.v1alpha.Finding.FindingType)`

The findingType.

### getFindingTypeValue()

```
public abstract int getFindingTypeValue()
```

The type of the Finding.

`.google.cloud.websecurityscanner.v1alpha.Finding.FindingType finding_type = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for findingType.

### getFrameUrl()

```
public abstract String getFrameUrl()
```

If the vulnerability was originated from nested IFrame, the immediate parent IFrame is reported.

`string frame_url = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The frameUrl.

### getFrameUrlBytes()

```
public abstract ByteString getFrameUrlBytes()
```

If the vulnerability was originated from nested IFrame, the immediate parent IFrame is reported.

`string frame_url = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for frameUrl.

### getFuzzedUrl()

```
public abstract String getFuzzedUrl()
```

The URL produced by the server-side fuzzer and used in the request that triggered the vulnerability.

`string fuzzed_url = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The fuzzedUrl.

### getFuzzedUrlBytes()

```
public abstract ByteString getFuzzedUrlBytes()
```

The URL produced by the server-side fuzzer and used in the request that triggered the vulnerability.

`string fuzzed_url = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for fuzzedUrl.

### getHttpMethod()

```
public abstract String getHttpMethod()
```

The http method of the request that triggered the vulnerability, in uppercase.

`string http_method = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The httpMethod.

### getHttpMethodBytes()

```
public abstract ByteString getHttpMethodBytes()
```

The http method of the request that triggered the vulnerability, in uppercase.

`string http_method = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for httpMethod.

### getName()

```
public abstract String getName()
```

The resource name of the Finding. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanruns/{scanRunId}/findings/{findingId}'. The finding IDs are generated by the system.

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

The resource name of the Finding. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanruns/{scanRunId}/findings/{findingId}'. The finding IDs are generated by the system.

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getOutdatedLibrary()

```
public abstract OutdatedLibrary getOutdatedLibrary()
```

An addon containing information about outdated libraries.

`.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary outdated_library = 11;`

**Returns**

**Type**

**Description**

`[OutdatedLibrary](/java/docs/reference/google-cloud-websecurityscanner/2.49.0/com.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary)`

The outdatedLibrary.

### getOutdatedLibraryOrBuilder()

```
public abstract OutdatedLibraryOrBuilder getOutdatedLibraryOrBuilder()
```

An addon containing information about outdated libraries.

`.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary outdated_library = 11;`

**Returns**

**Type**

**Description**

`[OutdatedLibraryOrBuilder](/java/docs/reference/google-cloud-websecurityscanner/2.49.0/com.google.cloud.websecurityscanner.v1alpha.OutdatedLibraryOrBuilder)`

### getReproductionUrl()

```
public abstract String getReproductionUrl()
```

The URL containing human-readable payload that user can leverage to reproduce the vulnerability.

`string reproduction_url = 7;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The reproductionUrl.

### getReproductionUrlBytes()

```
public abstract ByteString getReproductionUrlBytes()
```

The URL containing human-readable payload that user can leverage to reproduce the vulnerability.

`string reproduction_url = 7;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for reproductionUrl.

### getTrackingId()

```
public abstract String getTrackingId()
```

The tracking ID uniquely identifies a vulnerability instance across multiple ScanRuns.

`string tracking_id = 10;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The trackingId.

### getTrackingIdBytes()

```
public abstract ByteString getTrackingIdBytes()
```

The tracking ID uniquely identifies a vulnerability instance across multiple ScanRuns.

`string tracking_id = 10;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for trackingId.

### getViolatingResource()

```
public abstract ViolatingResource getViolatingResource()
```

An addon containing detailed information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.

`.google.cloud.websecurityscanner.v1alpha.ViolatingResource violating_resource = 12;`

**Returns**

**Type**

**Description**

`[ViolatingResource](/java/docs/reference/google-cloud-websecurityscanner/2.49.0/com.google.cloud.websecurityscanner.v1alpha.ViolatingResource)`

The violatingResource.

### getViolatingResourceOrBuilder()

```
public abstract ViolatingResourceOrBuilder getViolatingResourceOrBuilder()
```

An addon containing detailed information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.

`.google.cloud.websecurityscanner.v1alpha.ViolatingResource violating_resource = 12;`

**Returns**

**Type**

**Description**

`[ViolatingResourceOrBuilder](/java/docs/reference/google-cloud-websecurityscanner/2.49.0/com.google.cloud.websecurityscanner.v1alpha.ViolatingResourceOrBuilder)`

### getVulnerableHeaders()

```
public abstract VulnerableHeaders getVulnerableHeaders()
```

An addon containing information about vulnerable or missing HTTP headers.

`.google.cloud.websecurityscanner.v1alpha.VulnerableHeaders vulnerable_headers = 15;`

**Returns**

**Type**

**Description**

`[VulnerableHeaders](/java/docs/reference/google-cloud-websecurityscanner/2.49.0/com.google.cloud.websecurityscanner.v1alpha.VulnerableHeaders)`

The vulnerableHeaders.

### getVulnerableHeadersOrBuilder()

```
public abstract VulnerableHeadersOrBuilder getVulnerableHeadersOrBuilder()
```

An addon containing information about vulnerable or missing HTTP headers.

`.google.cloud.websecurityscanner.v1alpha.VulnerableHeaders vulnerable_headers = 15;`

**Returns**

**Type**

**Description**

`[VulnerableHeadersOrBuilder](/java/docs/reference/google-cloud-websecurityscanner/2.49.0/com.google.cloud.websecurityscanner.v1alpha.VulnerableHeadersOrBuilder)`

### getVulnerableParameters()

```
public abstract VulnerableParameters getVulnerableParameters()
```

An addon containing information about request parameters which were found to be vulnerable.

`.google.cloud.websecurityscanner.v1alpha.VulnerableParameters vulnerable_parameters = 13;`

**Returns**

**Type**

**Description**

`[VulnerableParameters](/java/docs/reference/google-cloud-websecurityscanner/2.49.0/com.google.cloud.websecurityscanner.v1alpha.VulnerableParameters)`

The vulnerableParameters.

### getVulnerableParametersOrBuilder()

```
public abstract VulnerableParametersOrBuilder getVulnerableParametersOrBuilder()
```

An addon containing information about request parameters which were found to be vulnerable.

`.google.cloud.websecurityscanner.v1alpha.VulnerableParameters vulnerable_parameters = 13;`

**Returns**

**Type**

**Description**

`[VulnerableParametersOrBuilder](/java/docs/reference/google-cloud-websecurityscanner/2.49.0/com.google.cloud.websecurityscanner.v1alpha.VulnerableParametersOrBuilder)`

### getXss()

```
public abstract Xss getXss()
```

An addon containing information reported for an XSS, if any.

`.google.cloud.websecurityscanner.v1alpha.Xss xss = 14;`

**Returns**

**Type**

**Description**

`[Xss](/java/docs/reference/google-cloud-websecurityscanner/2.49.0/com.google.cloud.websecurityscanner.v1alpha.Xss)`

The xss.

### getXssOrBuilder()

```
public abstract XssOrBuilder getXssOrBuilder()
```

An addon containing information reported for an XSS, if any.

`.google.cloud.websecurityscanner.v1alpha.Xss xss = 14;`

**Returns**

**Type**

**Description**

`[XssOrBuilder](/java/docs/reference/google-cloud-websecurityscanner/2.49.0/com.google.cloud.websecurityscanner.v1alpha.XssOrBuilder)`

### hasOutdatedLibrary()

```
public abstract boolean hasOutdatedLibrary()
```

An addon containing information about outdated libraries.

`.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary outdated_library = 11;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the outdatedLibrary field is set.

### hasViolatingResource()

```
public abstract boolean hasViolatingResource()
```

An addon containing detailed information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.

`.google.cloud.websecurityscanner.v1alpha.ViolatingResource violating_resource = 12;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the violatingResource field is set.

### hasVulnerableHeaders()

```
public abstract boolean hasVulnerableHeaders()
```

An addon containing information about vulnerable or missing HTTP headers.

`.google.cloud.websecurityscanner.v1alpha.VulnerableHeaders vulnerable_headers = 15;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the vulnerableHeaders field is set.

### hasVulnerableParameters()

```
public abstract boolean hasVulnerableParameters()
```

An addon containing information about request parameters which were found to be vulnerable.

`.google.cloud.websecurityscanner.v1alpha.VulnerableParameters vulnerable_parameters = 13;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the vulnerableParameters field is set.

### hasXss()

```
public abstract boolean hasXss()
```

An addon containing information reported for an XSS, if any.

`.google.cloud.websecurityscanner.v1alpha.Xss xss = 14;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the xss field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
