-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SecurityMarksOrBuilder (2.59.0) Stay organized with collections Save and categorize content based on your preferences.

2.95.0 (latest) 2.93.0 2.91.0 2.90.0 2.88.0 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.72.0 2.71.0 2.70.0 2.68.0 2.67.0 2.66.0 2.65.0 2.64.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.10.0 2.9.0 2.8.0 2.7.1 2.6.0 2.5.6 2.3.2

```
public interface SecurityMarksOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsMarks(String key)

```
public abstract boolean containsMarks(String key)
```

Mutable user specified security marks belonging to the parent resource. Constraints are as follows:

-   Keys and values are treated as case insensitive
-   Keys must be between 1 - 256 characters (inclusive)
-   Keys must be letters, numbers, underscores, or dashes
-   Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)

`map<string, string> marks = 2;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getCanonicalName()

```
public abstract String getCanonicalName()
```

The canonical name of the marks. Examples: "organizations/{organization\_id}/assets/{asset\_id}/securityMarks" "folders/{folder\_id}/assets/{asset\_id}/securityMarks" "projects/{project\_number}/assets/{asset\_id}/securityMarks" "organizations/{organization\_id}/sources/{source\_id}/findings/{finding\_id}/securityMarks" "folders/{folder\_id}/sources/{source\_id}/findings/{finding\_id}/securityMarks" "projects/{project\_number}/sources/{source\_id}/findings/{finding\_id}/securityMarks"

`string canonical_name = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The canonicalName.

### getCanonicalNameBytes()

```
public abstract ByteString getCanonicalNameBytes()
```

The canonical name of the marks. Examples: "organizations/{organization\_id}/assets/{asset\_id}/securityMarks" "folders/{folder\_id}/assets/{asset\_id}/securityMarks" "projects/{project\_number}/assets/{asset\_id}/securityMarks" "organizations/{organization\_id}/sources/{source\_id}/findings/{finding\_id}/securityMarks" "folders/{folder\_id}/sources/{source\_id}/findings/{finding\_id}/securityMarks" "projects/{project\_number}/sources/{source\_id}/findings/{finding\_id}/securityMarks"

`string canonical_name = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for canonicalName.

### getMarks() (deprecated)

```
public abstract Map<String,String> getMarks()
```

Use [#getMarksMap()](/java/docs/reference/google-cloud-securitycenter/2.59.0/com.google.cloud.securitycenter.v1p1beta1.SecurityMarksOrBuilder#com_google_cloud_securitycenter_v1p1beta1_SecurityMarksOrBuilder_getMarksMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getMarksCount()

```
public abstract int getMarksCount()
```

Mutable user specified security marks belonging to the parent resource. Constraints are as follows:

-   Keys and values are treated as case insensitive
-   Keys must be between 1 - 256 characters (inclusive)
-   Keys must be letters, numbers, underscores, or dashes
-   Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)

`map<string, string> marks = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getMarksMap()

```
public abstract Map<String,String> getMarksMap()
```

Mutable user specified security marks belonging to the parent resource. Constraints are as follows:

-   Keys and values are treated as case insensitive
-   Keys must be between 1 - 256 characters (inclusive)
-   Keys must be letters, numbers, underscores, or dashes
-   Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)

`map<string, string> marks = 2;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getMarksOrDefault(String key, String defaultValue)

```
public abstract String getMarksOrDefault(String key, String defaultValue)
```

Mutable user specified security marks belonging to the parent resource. Constraints are as follows:

-   Keys and values are treated as case insensitive
-   Keys must be between 1 - 256 characters (inclusive)
-   Keys must be letters, numbers, underscores, or dashes
-   Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)

`map<string, string> marks = 2;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getMarksOrThrow(String key)

```
public abstract String getMarksOrThrow(String key)
```

Mutable user specified security marks belonging to the parent resource. Constraints are as follows:

-   Keys and values are treated as case insensitive
-   Keys must be between 1 - 256 characters (inclusive)
-   Keys must be letters, numbers, underscores, or dashes
-   Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)

`map<string, string> marks = 2;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getName()

```
public abstract String getName()
```

The relative resource name of the SecurityMarks. See: [https://cloud.google.com/apis/design/resource\_names#relative\_resource\_name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Examples: "organizations/{organization\_id}/assets/{asset\_id}/securityMarks" "organizations/{organization\_id}/sources/{source\_id}/findings/{finding\_id}/securityMarks".

`string name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

The relative resource name of the SecurityMarks. See: [https://cloud.google.com/apis/design/resource\_names#relative\_resource\_name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Examples: "organizations/{organization\_id}/assets/{asset\_id}/securityMarks" "organizations/{organization\_id}/sources/{source\_id}/findings/{finding\_id}/securityMarks".

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
