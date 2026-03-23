-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SearchResponse.FacetOrBuilder (2.23.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public static interface SearchResponse.FacetOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDynamicFacet()

```
public abstract boolean getDynamicFacet()
```

Whether the facet is dynamically generated.

`bool dynamic_facet = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The dynamicFacet.

### getKey()

```
public abstract String getKey()
```

The key for this facet. E.g., "colorFamilies" or "price" or "attributes.attr1".

`string key = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The key.

### getKeyBytes()

```
public abstract ByteString getKeyBytes()
```

The key for this facet. E.g., "colorFamilies" or "price" or "attributes.attr1".

`string key = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for key.

### getValues(int index)

```
public abstract SearchResponse.Facet.FacetValue getValues(int index)
```

The facet values for this field.

`repeated .google.cloud.retail.v2beta.SearchResponse.Facet.FacetValue values = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SearchResponse.Facet.FacetValue](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2beta.SearchResponse.Facet.FacetValue)`

### getValuesCount()

```
public abstract int getValuesCount()
```

The facet values for this field.

`repeated .google.cloud.retail.v2beta.SearchResponse.Facet.FacetValue values = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getValuesList()

```
public abstract List<SearchResponse.Facet.FacetValue> getValuesList()
```

The facet values for this field.

`repeated .google.cloud.retail.v2beta.SearchResponse.Facet.FacetValue values = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[FacetValue](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2beta.SearchResponse.Facet.FacetValue)>`

### getValuesOrBuilder(int index)

```
public abstract SearchResponse.Facet.FacetValueOrBuilder getValuesOrBuilder(int index)
```

The facet values for this field.

`repeated .google.cloud.retail.v2beta.SearchResponse.Facet.FacetValue values = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SearchResponse.Facet.FacetValueOrBuilder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2beta.SearchResponse.Facet.FacetValueOrBuilder)`

### getValuesOrBuilderList()

```
public abstract List<? extends SearchResponse.Facet.FacetValueOrBuilder> getValuesOrBuilderList()
```

The facet values for this field.

`repeated .google.cloud.retail.v2beta.SearchResponse.Facet.FacetValue values = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.retail.v2beta.SearchResponse.Facet.FacetValueOrBuilder>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
