-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ListConversionSourcesResponseOrBuilder (1.15.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.29.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface ListConversionSourcesResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getConversionSources(int index)

```
public abstract ConversionSource getConversionSources(int index)
```

List of conversion sources.

`repeated .google.shopping.merchant.conversions.v1beta.ConversionSource conversion_sources = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ConversionSource](/java/docs/reference/google-shopping-merchant-conversions/latest/com.google.shopping.merchant.conversions.v1beta.ConversionSource)`

### getConversionSourcesCount()

```
public abstract int getConversionSourcesCount()
```

List of conversion sources.

`repeated .google.shopping.merchant.conversions.v1beta.ConversionSource conversion_sources = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getConversionSourcesList()

```
public abstract List<ConversionSource> getConversionSourcesList()
```

List of conversion sources.

`repeated .google.shopping.merchant.conversions.v1beta.ConversionSource conversion_sources = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ConversionSource](/java/docs/reference/google-shopping-merchant-conversions/latest/com.google.shopping.merchant.conversions.v1beta.ConversionSource)>`

### getConversionSourcesOrBuilder(int index)

```
public abstract ConversionSourceOrBuilder getConversionSourcesOrBuilder(int index)
```

List of conversion sources.

`repeated .google.shopping.merchant.conversions.v1beta.ConversionSource conversion_sources = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ConversionSourceOrBuilder](/java/docs/reference/google-shopping-merchant-conversions/latest/com.google.shopping.merchant.conversions.v1beta.ConversionSourceOrBuilder)`

### getConversionSourcesOrBuilderList()

```
public abstract List<? extends ConversionSourceOrBuilder> getConversionSourcesOrBuilderList()
```

List of conversion sources.

`repeated .google.shopping.merchant.conversions.v1beta.ConversionSource conversion_sources = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.shopping.merchant.conversions.v1beta.ConversionSourceOrBuilder>`

### getNextPageToken()

```
public abstract String getNextPageToken()
```

Token to be used to fetch the next results page.

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

Token to be used to fetch the next results page.

`string next_page_token = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for nextPageToken.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
