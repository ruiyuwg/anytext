-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CompleteQueryRequestOrBuilder (2.32.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.6 2.2.9

```
public interface CompleteQueryRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCompany()

```
public abstract String getCompany()
```

If provided, restricts completion to specified company.

The format is "projects/{project\_id}/tenants/{tenant\_id}/companies/{company\_id}", for example, "projects/foo/tenants/bar/companies/baz".

If tenant id is unspecified, the default tenant is used, for example, "projects/foo".

`string company = 5 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The company.

### getCompanyBytes()

```
public abstract ByteString getCompanyBytes()
```

If provided, restricts completion to specified company.

The format is "projects/{project\_id}/tenants/{tenant\_id}/companies/{company\_id}", for example, "projects/foo/tenants/bar/companies/baz".

If tenant id is unspecified, the default tenant is used, for example, "projects/foo".

`string company = 5 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for company.

### getLanguageCodes(int index)

```
public abstract String getLanguageCodes(int index)
```

The list of languages of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).

The maximum number of allowed characters is 255.

`repeated string language_codes = 3;`

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

The languageCodes at the given index.

### getLanguageCodesBytes(int index)

```
public abstract ByteString getLanguageCodesBytes(int index)
```

The list of languages of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).

The maximum number of allowed characters is 255.

`repeated string language_codes = 3;`

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

The bytes of the languageCodes at the given index.

### getLanguageCodesCount()

```
public abstract int getLanguageCodesCount()
```

The list of languages of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).

The maximum number of allowed characters is 255.

`repeated string language_codes = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of languageCodes.

### getLanguageCodesList()

```
public abstract List<String> getLanguageCodesList()
```

The list of languages of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).

The maximum number of allowed characters is 255.

`repeated string language_codes = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the languageCodes.

### getPageSize()

```
public abstract int getPageSize()
```

Required. Completion result count.

The maximum allowed page size is 10.

`int32 page_size = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The pageSize.

### getParent()

```
public abstract String getParent()
```

Required. Resource name of tenant the completion is performed within.

The format is "projects/{project\_id}/tenants/{tenant\_id}", for example, "projects/foo/tenant/bar".

If tenant id is unspecified, the default tenant is used, for example, "projects/foo".

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parent.

### getParentBytes()

```
public abstract ByteString getParentBytes()
```

Required. Resource name of tenant the completion is performed within.

The format is "projects/{project\_id}/tenants/{tenant\_id}", for example, "projects/foo/tenant/bar".

If tenant id is unspecified, the default tenant is used, for example, "projects/foo".

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### getQuery()

```
public abstract String getQuery()
```

Required. The query used to generate suggestions.

The maximum number of allowed characters is 255.

`string query = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The query.

### getQueryBytes()

```
public abstract ByteString getQueryBytes()
```

Required. The query used to generate suggestions.

The maximum number of allowed characters is 255.

`string query = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for query.

### getScope()

```
public abstract CompleteQueryRequest.CompletionScope getScope()
```

The scope of the completion. The defaults is CompletionScope.PUBLIC.

`.google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionScope scope = 6;`

**Returns**

**Type**

**Description**

`[CompleteQueryRequest.CompletionScope](/java/docs/reference/google-cloud-talent/2.32.0/com.google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionScope)`

The scope.

### getScopeValue()

```
public abstract int getScopeValue()
```

The scope of the completion. The defaults is CompletionScope.PUBLIC.

`.google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionScope scope = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for scope.

### getType()

```
public abstract CompleteQueryRequest.CompletionType getType()
```

The completion topic. The default is CompletionType.COMBINED.

`.google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType type = 7;`

**Returns**

**Type**

**Description**

`[CompleteQueryRequest.CompletionType](/java/docs/reference/google-cloud-talent/2.32.0/com.google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType)`

The type.

### getTypeValue()

```
public abstract int getTypeValue()
```

The completion topic. The default is CompletionType.COMBINED.

`.google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType type = 7;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for type.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
