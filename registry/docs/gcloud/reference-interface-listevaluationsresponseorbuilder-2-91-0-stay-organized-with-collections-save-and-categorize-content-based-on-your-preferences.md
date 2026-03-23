-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ListEvaluationsResponseOrBuilder (2.91.0) Stay organized with collections Save and categorize content based on your preferences.

2.91.0 (latest) 2.89.0 2.87.0 2.86.0 2.85.0 2.84.0 2.82.0 2.80.0 2.79.0 2.78.0 2.77.0 2.76.0 2.74.0 2.72.0 2.71.0 2.68.0 2.67.0 2.66.0 2.64.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.53.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.5 2.6.2 2.5.1 2.4.3 2.3.1 2.2.1 2.1.9

```
public interface ListEvaluationsResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getEvaluations(int index)

```
public abstract Evaluation getEvaluations(int index)
```

The evaluations requested.

`repeated .google.cloud.documentai.v1beta3.Evaluation evaluations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Evaluation](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Evaluation)`

### getEvaluationsCount()

```
public abstract int getEvaluationsCount()
```

The evaluations requested.

`repeated .google.cloud.documentai.v1beta3.Evaluation evaluations = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getEvaluationsList()

```
public abstract List<Evaluation> getEvaluationsList()
```

The evaluations requested.

`repeated .google.cloud.documentai.v1beta3.Evaluation evaluations = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Evaluation](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Evaluation)>`

### getEvaluationsOrBuilder(int index)

```
public abstract EvaluationOrBuilder getEvaluationsOrBuilder(int index)
```

The evaluations requested.

`repeated .google.cloud.documentai.v1beta3.Evaluation evaluations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EvaluationOrBuilder](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.EvaluationOrBuilder)`

### getEvaluationsOrBuilderList()

```
public abstract List<? extends EvaluationOrBuilder> getEvaluationsOrBuilderList()
```

The evaluations requested.

`repeated .google.cloud.documentai.v1beta3.Evaluation evaluations = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.documentai.v1beta3.EvaluationOrBuilder>`

### getNextPageToken()

```
public abstract String getNextPageToken()
```

A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

`string next_page_token = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The nextPageToken.

### getNextPageTokenBytes()

```
public abstract ByteString getNextPageTokenBytes()
```

A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

`string next_page_token = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for nextPageToken.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
