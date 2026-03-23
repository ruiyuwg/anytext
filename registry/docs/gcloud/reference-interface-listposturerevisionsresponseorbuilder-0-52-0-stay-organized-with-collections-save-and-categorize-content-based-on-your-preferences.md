-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ListPostureRevisionsResponseOrBuilder (0.52.0) Stay organized with collections Save and categorize content based on your preferences.

0.52.0 (latest) 0.50.0 0.48.0 0.47.0 0.45.0 0.43.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.35.0 0.33.0 0.32.0 0.29.0 0.28.0 0.27.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.2.0 0.1.0

```
public interface ListPostureRevisionsResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getNextPageToken()

```
public abstract String getNextPageToken()
```

A token identifying a page of results the server should return.

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

A token identifying a page of results the server should return.

`string next_page_token = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for nextPageToken.

### getRevisions(int index)

```
public abstract Posture getRevisions(int index)
```

The list of Posture revisions.

`repeated .google.cloud.securityposture.v1.Posture revisions = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Posture](/java/docs/reference/google-cloud-securityposture/latest/com.google.cloud.securityposture.v1.Posture)`

### getRevisionsCount()

```
public abstract int getRevisionsCount()
```

The list of Posture revisions.

`repeated .google.cloud.securityposture.v1.Posture revisions = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getRevisionsList()

```
public abstract List<Posture> getRevisionsList()
```

The list of Posture revisions.

`repeated .google.cloud.securityposture.v1.Posture revisions = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Posture](/java/docs/reference/google-cloud-securityposture/latest/com.google.cloud.securityposture.v1.Posture)>`

### getRevisionsOrBuilder(int index)

```
public abstract PostureOrBuilder getRevisionsOrBuilder(int index)
```

The list of Posture revisions.

`repeated .google.cloud.securityposture.v1.Posture revisions = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[PostureOrBuilder](/java/docs/reference/google-cloud-securityposture/latest/com.google.cloud.securityposture.v1.PostureOrBuilder)`

### getRevisionsOrBuilderList()

```
public abstract List<? extends PostureOrBuilder> getRevisionsOrBuilderList()
```

The list of Posture revisions.

`repeated .google.cloud.securityposture.v1.Posture revisions = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.securityposture.v1.PostureOrBuilder>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
