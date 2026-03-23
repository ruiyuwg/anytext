-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface UpdateCorpusRequestOrBuilder (0.9.0) Stay organized with collections Save and categorize content based on your preferences.

0.44.0 (latest) 0.42.0 0.40.0 0.39.0 0.37.0 0.35.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.27.0 0.25.0 0.24.0 0.21.0 0.20.0 0.19.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface UpdateCorpusRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCorpus()

```
public abstract Corpus getCorpus()
```

Required. The corpus which replaces the resource on the server.

`.google.cloud.visionai.v1.Corpus corpus = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Corpus](/java/docs/reference/google-cloud-visionai/0.9.0/com.google.cloud.visionai.v1.Corpus)`

The corpus.

### getCorpusOrBuilder()

```
public abstract CorpusOrBuilder getCorpusOrBuilder()
```

Required. The corpus which replaces the resource on the server.

`.google.cloud.visionai.v1.Corpus corpus = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[CorpusOrBuilder](/java/docs/reference/google-cloud-visionai/0.9.0/com.google.cloud.visionai.v1.CorpusOrBuilder)`

### getUpdateMask()

```
public abstract FieldMask getUpdateMask()
```

The list of fields to be updated.

`.google.protobuf.FieldMask update_mask = 2;`

**Returns**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`

The updateMask.

### getUpdateMaskOrBuilder()

```
public abstract FieldMaskOrBuilder getUpdateMaskOrBuilder()
```

The list of fields to be updated.

`.google.protobuf.FieldMask update_mask = 2;`

**Returns**

**Type**

**Description**

`[FieldMaskOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMaskOrBuilder.html)`

### hasCorpus()

```
public abstract boolean hasCorpus()
```

Required. The corpus which replaces the resource on the server.

`.google.cloud.visionai.v1.Corpus corpus = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the corpus field is set.

### hasUpdateMask()

```
public abstract boolean hasUpdateMask()
```

The list of fields to be updated.

`.google.protobuf.FieldMask update_mask = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateMask field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
