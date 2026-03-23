-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface BatchTranslateDocumentMetadataOrBuilder (2.12.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.5 2.2.0 2.1.13

```
public interface BatchTranslateDocumentMetadataOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getFailedCharacters()

```
public abstract long getFailedCharacters()
```

Number of characters that have failed to process (Unicode codepoints) in all documents so far.

`int64 failed_characters = 8;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The failedCharacters.

### getFailedPages()

```
public abstract long getFailedPages()
```

Number of pages that failed to process in all documents so far. Documents without clear page definition (such as XLSX) are not counted.

`int64 failed_pages = 4;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The failedPages.

### getState()

```
public abstract BatchTranslateDocumentMetadata.State getState()
```

The state of the operation.

`.google.cloud.translation.v3beta1.BatchTranslateDocumentMetadata.State state = 1;`

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentMetadata.State](/java/docs/reference/google-cloud-translate/2.12.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentMetadata.State)`

The state.

### getStateValue()

```
public abstract int getStateValue()
```

The state of the operation.

`.google.cloud.translation.v3beta1.BatchTranslateDocumentMetadata.State state = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

### getSubmitTime()

```
public abstract Timestamp getSubmitTime()
```

Time when the operation was submitted.

`.google.protobuf.Timestamp submit_time = 10;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The submitTime.

### getSubmitTimeOrBuilder()

```
public abstract TimestampOrBuilder getSubmitTimeOrBuilder()
```

Time when the operation was submitted.

`.google.protobuf.Timestamp submit_time = 10;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getTotalBillableCharacters()

```
public abstract long getTotalBillableCharacters()
```

Number of billable characters (Unicode codepoints) in documents without clear page definition (such as XLSX) so far.

`int64 total_billable_characters = 9;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The totalBillableCharacters.

### getTotalBillablePages()

```
public abstract long getTotalBillablePages()
```

Number of billable pages in documents with clear page definition (such as PDF, DOCX, PPTX) so far.

`int64 total_billable_pages = 5;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The totalBillablePages.

### getTotalCharacters()

```
public abstract long getTotalCharacters()
```

Total number of characters (Unicode codepoints) in all documents so far.

`int64 total_characters = 6;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The totalCharacters.

### getTotalPages()

```
public abstract long getTotalPages()
```

Total number of pages to translate in all documents so far. Documents without clear page definition (such as XLSX) are not counted.

`int64 total_pages = 2;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The totalPages.

### getTranslatedCharacters()

```
public abstract long getTranslatedCharacters()
```

Number of successfully translated characters (Unicode codepoints) in all documents so far.

`int64 translated_characters = 7;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The translatedCharacters.

### getTranslatedPages()

```
public abstract long getTranslatedPages()
```

Number of successfully translated pages in all documents so far. Documents without clear page definition (such as XLSX) are not counted.

`int64 translated_pages = 3;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The translatedPages.

### hasSubmitTime()

```
public abstract boolean hasSubmitTime()
```

Time when the operation was submitted.

`.google.protobuf.Timestamp submit_time = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the submitTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
