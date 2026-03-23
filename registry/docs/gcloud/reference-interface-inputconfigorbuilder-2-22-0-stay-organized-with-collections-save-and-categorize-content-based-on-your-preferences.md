-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface InputConfigOrBuilder (2.22.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.5 2.2.0 2.1.13

```
public interface InputConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getGcsSource()

```
public abstract GcsSource getGcsSource()
```

Required. Google Cloud Storage location for the source input. This can be a single file (for example, `gs://translation-test/input.tsv`) or a wildcard (for example, `gs://translation-test/*`). If a file extension is `.tsv`, it can contain either one or two columns. The first column (optional) is the id of the text request. If the first column is missing, we use the row number (0-based) from the input file as the ID in the output file. The second column is the actual text to be translated. We recommend each row be <= 10K Unicode codepoints, otherwise an error might be returned. Note that the input tsv must be RFC 4180 compliant.

You could use [https://github.com/Clever/csvlint](https://github.com/Clever/csvlint) to check potential formatting errors in your tsv file. csvlint --delimiter='\\t' your\_input\_file.tsv

The other supported file extensions are `.txt` or `.html`, which is treated as a single large chunk of text.

`.google.cloud.translation.v3.GcsSource gcs_source = 2;`

**Returns**

**Type**

**Description**

`[GcsSource](/java/docs/reference/google-cloud-translate/2.22.0/com.google.cloud.translate.v3.GcsSource)`

The gcsSource.

### getGcsSourceOrBuilder()

```
public abstract GcsSourceOrBuilder getGcsSourceOrBuilder()
```

Required. Google Cloud Storage location for the source input. This can be a single file (for example, `gs://translation-test/input.tsv`) or a wildcard (for example, `gs://translation-test/*`). If a file extension is `.tsv`, it can contain either one or two columns. The first column (optional) is the id of the text request. If the first column is missing, we use the row number (0-based) from the input file as the ID in the output file. The second column is the actual text to be translated. We recommend each row be <= 10K Unicode codepoints, otherwise an error might be returned. Note that the input tsv must be RFC 4180 compliant.

You could use [https://github.com/Clever/csvlint](https://github.com/Clever/csvlint) to check potential formatting errors in your tsv file. csvlint --delimiter='\\t' your\_input\_file.tsv

The other supported file extensions are `.txt` or `.html`, which is treated as a single large chunk of text.

`.google.cloud.translation.v3.GcsSource gcs_source = 2;`

**Returns**

**Type**

**Description**

`[GcsSourceOrBuilder](/java/docs/reference/google-cloud-translate/2.22.0/com.google.cloud.translate.v3.GcsSourceOrBuilder)`

### getMimeType()

```
public abstract String getMimeType()
```

Optional. Can be "text/plain" or "text/html". For `.tsv`, "text/html" is used if mime\_type is missing. For `.html`, this field must be "text/html" or empty. For `.txt`, this field must be "text/plain" or empty.

`string mime_type = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The mimeType.

### getMimeTypeBytes()

```
public abstract ByteString getMimeTypeBytes()
```

Optional. Can be "text/plain" or "text/html". For `.tsv`, "text/html" is used if mime\_type is missing. For `.html`, this field must be "text/html" or empty. For `.txt`, this field must be "text/plain" or empty.

`string mime_type = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for mimeType.

### getSourceCase()

```
public abstract InputConfig.SourceCase getSourceCase()
```

**Returns**

**Type**

**Description**

`[InputConfig.SourceCase](/java/docs/reference/google-cloud-translate/2.22.0/com.google.cloud.translate.v3.InputConfig.SourceCase)`

### hasGcsSource()

```
public abstract boolean hasGcsSource()
```

Required. Google Cloud Storage location for the source input. This can be a single file (for example, `gs://translation-test/input.tsv`) or a wildcard (for example, `gs://translation-test/*`). If a file extension is `.tsv`, it can contain either one or two columns. The first column (optional) is the id of the text request. If the first column is missing, we use the row number (0-based) from the input file as the ID in the output file. The second column is the actual text to be translated. We recommend each row be <= 10K Unicode codepoints, otherwise an error might be returned. Note that the input tsv must be RFC 4180 compliant.

You could use [https://github.com/Clever/csvlint](https://github.com/Clever/csvlint) to check potential formatting errors in your tsv file. csvlint --delimiter='\\t' your\_input\_file.tsv

The other supported file extensions are `.txt` or `.html`, which is treated as a single large chunk of text.

`.google.cloud.translation.v3.GcsSource gcs_source = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the gcsSource field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
