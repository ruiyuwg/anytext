-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class PostPolicyV4.PostFieldsV4.Builder (2.2.3) Stay organized with collections Save and categorize content based on your preferences.

2.64.0 (latest) 2.63.0 2.62.1 2.60.0 2.59.0 2.58.1 2.57.0 2.56.0 2.55.0 2.54.0 2.53.3 2.52.3 2.50.0 2.49.0 2.48.2 2.47.0 2.46.0 2.45.0 2.44.1 2.43.2 2.42.0 2.41.0 2.40.1 2.39.0 2.38.0 2.37.0 2.36.1 2.34.0 2.33.0 2.32.1 2.30.1 2.29.1 2.28.0 2.27.1 2.24.0 2.23.0 2.22.6 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.0 2.15.1 2.14.0 2.13.1 2.12.0 2.11.3 2.10.0 2.9.3 2.8.1 2.7.1 2.6.1 2.5.1 2.4.5 2.3.0 2.2.3 2.1.10

```
public static class PostPolicyV4.PostFieldsV4.Builder
```

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> PostPolicyV4.PostFieldsV4.Builder

## Inherited Members

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Methods

### AddCustomMetadataField(String field, String value) (deprecated)

```
public PostPolicyV4.PostFieldsV4.Builder AddCustomMetadataField(String field, String value)
```

(deprecated) Use [#setCustomMetadataField(String, String)](/java/docs/reference/google-cloud-storage/2.2.3/com.google.cloud.storage.PostPolicyV4.PostFieldsV4.Builder#com_google_cloud_storage_PostPolicyV4_PostFieldsV4_Builder_setCustomMetadataField_java_lang_String_java_lang_String_).

**Parameters**

**Name**

**Description**

field

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[PostPolicyV4.PostFieldsV4.Builder](/java/docs/reference/google-cloud-storage/2.2.3/com.google.cloud.storage.PostPolicyV4.PostFieldsV4.Builder)

### Expires(String expires) (deprecated)

```
public PostPolicyV4.PostFieldsV4.Builder Expires(String expires)
```

(deprecated) Use [#setExpires(String)](/java/docs/reference/google-cloud-storage/2.2.3/com.google.cloud.storage.PostPolicyV4.PostFieldsV4.Builder#com_google_cloud_storage_PostPolicyV4_PostFieldsV4_Builder_setExpires_java_lang_String_).

**Parameter**

**Name**

**Description**

expires

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[PostPolicyV4.PostFieldsV4.Builder](/java/docs/reference/google-cloud-storage/2.2.3/com.google.cloud.storage.PostPolicyV4.PostFieldsV4.Builder)

### build()

```
public PostPolicyV4.PostFieldsV4 build()
```

**Returns**

**Type**

**Description**

[PostPolicyV4.PostFieldsV4](/java/docs/reference/google-cloud-storage/2.2.3/com.google.cloud.storage.PostPolicyV4.PostFieldsV4)

### setAcl(String acl)

```
public PostPolicyV4.PostFieldsV4.Builder setAcl(String acl)
```

**Parameter**

**Name**

**Description**

acl

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[PostPolicyV4.PostFieldsV4.Builder](/java/docs/reference/google-cloud-storage/2.2.3/com.google.cloud.storage.PostPolicyV4.PostFieldsV4.Builder)

### setCacheControl(String cacheControl)

```
public PostPolicyV4.PostFieldsV4.Builder setCacheControl(String cacheControl)
```

**Parameter**

**Name**

**Description**

cacheControl

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[PostPolicyV4.PostFieldsV4.Builder](/java/docs/reference/google-cloud-storage/2.2.3/com.google.cloud.storage.PostPolicyV4.PostFieldsV4.Builder)

### setContentDisposition(String contentDisposition)

```
public PostPolicyV4.PostFieldsV4.Builder setContentDisposition(String contentDisposition)
```

**Parameter**

**Name**

**Description**

contentDisposition

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[PostPolicyV4.PostFieldsV4.Builder](/java/docs/reference/google-cloud-storage/2.2.3/com.google.cloud.storage.PostPolicyV4.PostFieldsV4.Builder)

### setContentEncoding(String contentEncoding)

```
public PostPolicyV4.PostFieldsV4.Builder setContentEncoding(String contentEncoding)
```

**Parameter**

**Name**

**Description**

contentEncoding

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[PostPolicyV4.PostFieldsV4.Builder](/java/docs/reference/google-cloud-storage/2.2.3/com.google.cloud.storage.PostPolicyV4.PostFieldsV4.Builder)

### setContentLength(int contentLength) (deprecated)

```
public PostPolicyV4.PostFieldsV4.Builder setContentLength(int contentLength)
```

(deprecated) Invocation of this method has no effect, because all valid HTML form fields except Content-Length can use exact matching. Use [PostPolicyV4.PostConditionsV4.Builder#addContentLengthRangeCondition(int, int)](/java/docs/reference/google-cloud-storage/2.2.3/com.google.cloud.storage.PostPolicyV4.PostConditionsV4.Builder#com_google_cloud_storage_PostPolicyV4_PostConditionsV4_Builder_addContentLengthRangeCondition_int_int_) to specify a range for the content-length.

**Parameter**

**Name**

**Description**

contentLength

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[PostPolicyV4.PostFieldsV4.Builder](/java/docs/reference/google-cloud-storage/2.2.3/com.google.cloud.storage.PostPolicyV4.PostFieldsV4.Builder)

### setContentType(String contentType)

```
public PostPolicyV4.PostFieldsV4.Builder setContentType(String contentType)
```

**Parameter**

**Name**

**Description**

contentType

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[PostPolicyV4.PostFieldsV4.Builder](/java/docs/reference/google-cloud-storage/2.2.3/com.google.cloud.storage.PostPolicyV4.PostFieldsV4.Builder)

### setCustomMetadataField(String field, String value)

```
public PostPolicyV4.PostFieldsV4.Builder setCustomMetadataField(String field, String value)
```

**Parameters**

**Name**

**Description**

field

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[PostPolicyV4.PostFieldsV4.Builder](/java/docs/reference/google-cloud-storage/2.2.3/com.google.cloud.storage.PostPolicyV4.PostFieldsV4.Builder)

### setExpires(String expires)

```
public PostPolicyV4.PostFieldsV4.Builder setExpires(String expires)
```

**Parameter**

**Name**

**Description**

expires

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[PostPolicyV4.PostFieldsV4.Builder](/java/docs/reference/google-cloud-storage/2.2.3/com.google.cloud.storage.PostPolicyV4.PostFieldsV4.Builder)

### setSuccessActionRedirect(String successActionRedirect)

```
public PostPolicyV4.PostFieldsV4.Builder setSuccessActionRedirect(String successActionRedirect)
```

**Parameter**

**Name**

**Description**

successActionRedirect

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[PostPolicyV4.PostFieldsV4.Builder](/java/docs/reference/google-cloud-storage/2.2.3/com.google.cloud.storage.PostPolicyV4.PostFieldsV4.Builder)

### setSuccessActionStatus(int successActionStatus)

```
public PostPolicyV4.PostFieldsV4.Builder setSuccessActionStatus(int successActionStatus)
```

**Parameter**

**Name**

**Description**

successActionStatus

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[PostPolicyV4.PostFieldsV4.Builder](/java/docs/reference/google-cloud-storage/2.2.3/com.google.cloud.storage.PostPolicyV4.PostFieldsV4.Builder)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
