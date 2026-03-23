-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface OutputConfigOrBuilder (2.17.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.5 2.2.0 2.1.13

```
public interface OutputConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDestinationCase()

```
public abstract OutputConfig.DestinationCase getDestinationCase()
```

**Returns**

**Type**

**Description**

`[OutputConfig.DestinationCase](/java/docs/reference/google-cloud-translate/2.17.0/com.google.cloud.translate.v3beta1.OutputConfig.DestinationCase)`

### getGcsDestination()

```
public abstract GcsDestination getGcsDestination()
```

Google Cloud Storage destination for output content. For every single input file (for example, gs://a/b/c.\[extension\]), we generate at most 2 \* n output files. (n is the # of target\_language\_codes in the BatchTranslateTextRequest). Output files (tsv) generated are compliant with RFC 4180 except that record delimiters are '\\n' instead of '\\r\\n'. We don't provide any way to change record delimiters. While the input files are being processed, we write/update an index file 'index.csv' under 'output\_uri\_prefix' (for example, gs://translation-test/index.csv) The index file is generated/updated as new files are being translated. The format is: input\_file,target\_language\_code,translations\_file,errors\_file, glossary\_translations\_file,glossary\_errors\_file input\_file is one file we matched using gcs\_source.input\_uri. target\_language\_code is provided in the request. translations\_file contains the translations. (details provided below) errors\_file contains the errors during processing of the file. (details below). Both translations\_file and errors\_file could be empty strings if we have no content to output. glossary\_translations\_file and glossary\_errors\_file are always empty strings if the input\_file is tsv. They could also be empty if we have no content to output. Once a row is present in index.csv, the input/output matching never changes. Callers should also expect all the content in input\_file are processed and ready to be consumed (that is, no partial output file is written). Since index.csv will be keeping updated during the process, please make sure there is no custom retention policy applied on the output bucket that may avoid file updating. ([https://cloud.google.com/storage/docs/bucket-lock?hl=en#retention-policy](https://cloud.google.com/storage/docs/bucket-lock?hl=en#retention-policy)) The format of translations\_file (for target language code 'trg') is: `gs://translation_test/a_b_c_'trg'_translations.[extension]_` If the input file extension is tsv, the output has the following columns: Column 1: ID of the request provided in the input, if it's not provided in the input, then the input row number is used (0-based). Column 2: source sentence. Column 3: translation without applying a glossary. Empty string if there is an error. Column 4 (only present if a glossary is provided in the request): translation after applying the glossary. Empty string if there is an error applying the glossary. Could be same string as column 3 if there is no glossary applied. If input file extension is a txt or html, the translation is directly written to the output file. If glossary is requested, a separate glossary\_translations\_file has format of gs://translation\_test/a\_b\_c'trg'_glossary\_translations.\[extension\] The format of errors file (for target language code 'trg') is: gs://translation\_test/a\_b\_c_'trg'_errors.\[extension\] If the input file extension is tsv, errors\_file contains the following: Column 1: ID of the request provided in the input, if it's not provided in the input, then the input row number is used (0-based). Column 2: source sentence. Column 3: Error detail for the translation. Could be empty. Column 4 (only present if a glossary is provided in the request): Error when applying the glossary. If the input file extension is txt or html, glossary\_error\_file will be generated that contains error details. glossary\_error\_file has format of gs://translation\_test/a\_b\_c_'trg'\_glossary\_errors.\[extension\]

`.google.cloud.translation.v3beta1.GcsDestination gcs_destination = 1;`

**Returns**

**Type**

**Description**

`[GcsDestination](/java/docs/reference/google-cloud-translate/2.17.0/com.google.cloud.translate.v3beta1.GcsDestination)`

The gcsDestination.

### getGcsDestinationOrBuilder()

```
public abstract GcsDestinationOrBuilder getGcsDestinationOrBuilder()
```

Google Cloud Storage destination for output content. For every single input file (for example, gs://a/b/c.\[extension\]), we generate at most 2 \* n output files. (n is the # of target\_language\_codes in the BatchTranslateTextRequest). Output files (tsv) generated are compliant with RFC 4180 except that record delimiters are '\\n' instead of '\\r\\n'. We don't provide any way to change record delimiters. While the input files are being processed, we write/update an index file 'index.csv' under 'output\_uri\_prefix' (for example, gs://translation-test/index.csv) The index file is generated/updated as new files are being translated. The format is: input\_file,target\_language\_code,translations\_file,errors\_file, glossary\_translations\_file,glossary\_errors\_file input\_file is one file we matched using gcs\_source.input\_uri. target\_language\_code is provided in the request. translations\_file contains the translations. (details provided below) errors\_file contains the errors during processing of the file. (details below). Both translations\_file and errors\_file could be empty strings if we have no content to output. glossary\_translations\_file and glossary\_errors\_file are always empty strings if the input\_file is tsv. They could also be empty if we have no content to output. Once a row is present in index.csv, the input/output matching never changes. Callers should also expect all the content in input\_file are processed and ready to be consumed (that is, no partial output file is written). Since index.csv will be keeping updated during the process, please make sure there is no custom retention policy applied on the output bucket that may avoid file updating. ([https://cloud.google.com/storage/docs/bucket-lock?hl=en#retention-policy](https://cloud.google.com/storage/docs/bucket-lock?hl=en#retention-policy)) The format of translations\_file (for target language code 'trg') is: `gs://translation_test/a_b_c_'trg'_translations.[extension]_` If the input file extension is tsv, the output has the following columns: Column 1: ID of the request provided in the input, if it's not provided in the input, then the input row number is used (0-based). Column 2: source sentence. Column 3: translation without applying a glossary. Empty string if there is an error. Column 4 (only present if a glossary is provided in the request): translation after applying the glossary. Empty string if there is an error applying the glossary. Could be same string as column 3 if there is no glossary applied. If input file extension is a txt or html, the translation is directly written to the output file. If glossary is requested, a separate glossary\_translations\_file has format of gs://translation\_test/a\_b\_c'trg'_glossary\_translations.\[extension\] The format of errors file (for target language code 'trg') is: gs://translation\_test/a\_b\_c_'trg'_errors.\[extension\] If the input file extension is tsv, errors\_file contains the following: Column 1: ID of the request provided in the input, if it's not provided in the input, then the input row number is used (0-based). Column 2: source sentence. Column 3: Error detail for the translation. Could be empty. Column 4 (only present if a glossary is provided in the request): Error when applying the glossary. If the input file extension is txt or html, glossary\_error\_file will be generated that contains error details. glossary\_error\_file has format of gs://translation\_test/a\_b\_c_'trg'\_glossary\_errors.\[extension\]

`.google.cloud.translation.v3beta1.GcsDestination gcs_destination = 1;`

**Returns**

**Type**

**Description**

`[GcsDestinationOrBuilder](/java/docs/reference/google-cloud-translate/2.17.0/com.google.cloud.translate.v3beta1.GcsDestinationOrBuilder)`

### hasGcsDestination()

```
public abstract boolean hasGcsDestination()
```

Google Cloud Storage destination for output content. For every single input file (for example, gs://a/b/c.\[extension\]), we generate at most 2 \* n output files. (n is the # of target\_language\_codes in the BatchTranslateTextRequest). Output files (tsv) generated are compliant with RFC 4180 except that record delimiters are '\\n' instead of '\\r\\n'. We don't provide any way to change record delimiters. While the input files are being processed, we write/update an index file 'index.csv' under 'output\_uri\_prefix' (for example, gs://translation-test/index.csv) The index file is generated/updated as new files are being translated. The format is: input\_file,target\_language\_code,translations\_file,errors\_file, glossary\_translations\_file,glossary\_errors\_file input\_file is one file we matched using gcs\_source.input\_uri. target\_language\_code is provided in the request. translations\_file contains the translations. (details provided below) errors\_file contains the errors during processing of the file. (details below). Both translations\_file and errors\_file could be empty strings if we have no content to output. glossary\_translations\_file and glossary\_errors\_file are always empty strings if the input\_file is tsv. They could also be empty if we have no content to output. Once a row is present in index.csv, the input/output matching never changes. Callers should also expect all the content in input\_file are processed and ready to be consumed (that is, no partial output file is written). Since index.csv will be keeping updated during the process, please make sure there is no custom retention policy applied on the output bucket that may avoid file updating. ([https://cloud.google.com/storage/docs/bucket-lock?hl=en#retention-policy](https://cloud.google.com/storage/docs/bucket-lock?hl=en#retention-policy)) The format of translations\_file (for target language code 'trg') is: `gs://translation_test/a_b_c_'trg'_translations.[extension]_` If the input file extension is tsv, the output has the following columns: Column 1: ID of the request provided in the input, if it's not provided in the input, then the input row number is used (0-based). Column 2: source sentence. Column 3: translation without applying a glossary. Empty string if there is an error. Column 4 (only present if a glossary is provided in the request): translation after applying the glossary. Empty string if there is an error applying the glossary. Could be same string as column 3 if there is no glossary applied. If input file extension is a txt or html, the translation is directly written to the output file. If glossary is requested, a separate glossary\_translations\_file has format of gs://translation\_test/a\_b\_c'trg'_glossary\_translations.\[extension\] The format of errors file (for target language code 'trg') is: gs://translation\_test/a\_b\_c_'trg'_errors.\[extension\] If the input file extension is tsv, errors\_file contains the following: Column 1: ID of the request provided in the input, if it's not provided in the input, then the input row number is used (0-based). Column 2: source sentence. Column 3: Error detail for the translation. Could be empty. Column 4 (only present if a glossary is provided in the request): Error when applying the glossary. If the input file extension is txt or html, glossary\_error\_file will be generated that contains error details. glossary\_error\_file has format of gs://translation\_test/a\_b\_c_'trg'\_glossary\_errors.\[extension\]

`.google.cloud.translation.v3beta1.GcsDestination gcs_destination = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the gcsDestination field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
