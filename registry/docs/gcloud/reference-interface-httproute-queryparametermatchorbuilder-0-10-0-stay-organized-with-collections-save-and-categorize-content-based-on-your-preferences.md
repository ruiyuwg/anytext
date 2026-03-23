-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface HttpRoute.QueryParameterMatchOrBuilder (0.10.0) Stay organized with collections Save and categorize content based on your preferences.

0.43.0 (latest) 0.41.0 0.39.0 0.38.0 0.36.0 0.34.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.26.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static interface HttpRoute.QueryParameterMatchOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getExactMatch()

```
public abstract String getExactMatch()
```

The value of the query parameter must exactly match the contents of exact\_match.

Only one of exact\_match, regex\_match, or present\_match must be set.

`string exact_match = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The exactMatch.

### getExactMatchBytes()

```
public abstract ByteString getExactMatchBytes()
```

The value of the query parameter must exactly match the contents of exact\_match.

Only one of exact\_match, regex\_match, or present\_match must be set.

`string exact_match = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for exactMatch.

### getMatchTypeCase()

```
public abstract HttpRoute.QueryParameterMatch.MatchTypeCase getMatchTypeCase()
```

**Returns**

**Type**

**Description**

`[HttpRoute.QueryParameterMatch.MatchTypeCase](/java/docs/reference/google-cloud-networkservices/0.10.0/com.google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch.MatchTypeCase)`

### getPresentMatch()

```
public abstract boolean getPresentMatch()
```

Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not.

Only one of exact\_match, regex\_match, or present\_match must be set.

`bool present_match = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The presentMatch.

### getQueryParameter()

```
public abstract String getQueryParameter()
```

The name of the query parameter to match.

`string query_parameter = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The queryParameter.

### getQueryParameterBytes()

```
public abstract ByteString getQueryParameterBytes()
```

The name of the query parameter to match.

`string query_parameter = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for queryParameter.

### getRegexMatch()

```
public abstract String getRegexMatch()
```

The value of the query parameter must match the regular expression specified by regex\_match. For regular expression grammar, please see [https://github.com/google/re2/wiki/Syntax](https://github.com/google/re2/wiki/Syntax)

Only one of exact\_match, regex\_match, or present\_match must be set.

`string regex_match = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The regexMatch.

### getRegexMatchBytes()

```
public abstract ByteString getRegexMatchBytes()
```

The value of the query parameter must match the regular expression specified by regex\_match. For regular expression grammar, please see [https://github.com/google/re2/wiki/Syntax](https://github.com/google/re2/wiki/Syntax)

Only one of exact\_match, regex\_match, or present\_match must be set.

`string regex_match = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for regexMatch.

### hasExactMatch()

```
public abstract boolean hasExactMatch()
```

The value of the query parameter must exactly match the contents of exact\_match.

Only one of exact\_match, regex\_match, or present\_match must be set.

`string exact_match = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the exactMatch field is set.

### hasPresentMatch()

```
public abstract boolean hasPresentMatch()
```

Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not.

Only one of exact\_match, regex\_match, or present\_match must be set.

`bool present_match = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the presentMatch field is set.

### hasRegexMatch()

```
public abstract boolean hasRegexMatch()
```

The value of the query parameter must match the regular expression specified by regex\_match. For regular expression grammar, please see [https://github.com/google/re2/wiki/Syntax](https://github.com/google/re2/wiki/Syntax)

Only one of exact\_match, regex\_match, or present\_match must be set.

`string regex_match = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the regexMatch field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
