-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface Rule.DoNotAssociateActionOrBuilder (2.34.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public static interface Rule.DoNotAssociateActionOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDoNotAssociateTerms(int index)

```
public abstract String getDoNotAssociateTerms(int index)
```

Cannot contain duplicates or the query term. Can specify up to 100 terms.

`repeated string do_not_associate_terms = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The doNotAssociateTerms at the given index.

### getDoNotAssociateTermsBytes(int index)

```
public abstract ByteString getDoNotAssociateTermsBytes(int index)
```

Cannot contain duplicates or the query term. Can specify up to 100 terms.

`repeated string do_not_associate_terms = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the doNotAssociateTerms at the given index.

### getDoNotAssociateTermsCount()

```
public abstract int getDoNotAssociateTermsCount()
```

Cannot contain duplicates or the query term. Can specify up to 100 terms.

`repeated string do_not_associate_terms = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of doNotAssociateTerms.

### getDoNotAssociateTermsList()

```
public abstract List<String> getDoNotAssociateTermsList()
```

Cannot contain duplicates or the query term. Can specify up to 100 terms.

`repeated string do_not_associate_terms = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the doNotAssociateTerms.

### getQueryTerms(int index)

```
public abstract String getQueryTerms(int index)
```

Terms from the search query. Will not consider do\_not\_associate\_terms for search if in search query. Can specify up to 100 terms.

`repeated string query_terms = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The queryTerms at the given index.

### getQueryTermsBytes(int index)

```
public abstract ByteString getQueryTermsBytes(int index)
```

Terms from the search query. Will not consider do\_not\_associate\_terms for search if in search query. Can specify up to 100 terms.

`repeated string query_terms = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the queryTerms at the given index.

### getQueryTermsCount()

```
public abstract int getQueryTermsCount()
```

Terms from the search query. Will not consider do\_not\_associate\_terms for search if in search query. Can specify up to 100 terms.

`repeated string query_terms = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of queryTerms.

### getQueryTermsList()

```
public abstract List<String> getQueryTermsList()
```

Terms from the search query. Will not consider do\_not\_associate\_terms for search if in search query. Can specify up to 100 terms.

`repeated string query_terms = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the queryTerms.

### getTerms(int index)

```
public abstract String getTerms(int index)
```

Will be \[deprecated = true\] post migration;

`repeated string terms = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The terms at the given index.

### getTermsBytes(int index)

```
public abstract ByteString getTermsBytes(int index)
```

Will be \[deprecated = true\] post migration;

`repeated string terms = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the terms at the given index.

### getTermsCount()

```
public abstract int getTermsCount()
```

Will be \[deprecated = true\] post migration;

`repeated string terms = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of terms.

### getTermsList()

```
public abstract List<String> getTermsList()
```

Will be \[deprecated = true\] post migration;

`repeated string terms = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the terms.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
