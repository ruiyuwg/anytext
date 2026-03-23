-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface OperatorDefinition.AttributeDefinitionOrBuilder (0.10.0) Stay organized with collections Save and categorize content based on your preferences.

0.44.0 (latest) 0.42.0 0.40.0 0.39.0 0.37.0 0.35.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.27.0 0.25.0 0.24.0 0.21.0 0.20.0 0.19.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static interface OperatorDefinition.AttributeDefinitionOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAttribute()

```
public abstract String getAttribute()
```

The name of the attribute.

Tentatively [a-z](/java/docs/reference/google-cloud-visionai/0.10.0/[_a-z0-9]*[a-z0-9])?, e.g., max\_frames\_per\_video, resize\_height.

`string attribute = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The attribute.

### getAttributeBytes()

```
public abstract ByteString getAttributeBytes()
```

The name of the attribute.

Tentatively [a-z](/java/docs/reference/google-cloud-visionai/0.10.0/[_a-z0-9]*[a-z0-9])?, e.g., max\_frames\_per\_video, resize\_height.

`string attribute = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for attribute.

### getDefaultValue()

```
public abstract AttributeValue getDefaultValue()
```

The default value for the attribute.

`.google.cloud.visionai.v1.AttributeValue default_value = 3;`

**Returns**

**Type**

**Description**

`[AttributeValue](/java/docs/reference/google-cloud-visionai/0.10.0/com.google.cloud.visionai.v1.AttributeValue)`

The defaultValue.

### getDefaultValueOrBuilder()

```
public abstract AttributeValueOrBuilder getDefaultValueOrBuilder()
```

The default value for the attribute.

`.google.cloud.visionai.v1.AttributeValue default_value = 3;`

**Returns**

**Type**

**Description**

`[AttributeValueOrBuilder](/java/docs/reference/google-cloud-visionai/0.10.0/com.google.cloud.visionai.v1.AttributeValueOrBuilder)`

### getType()

```
public abstract String getType()
```

The type of this attribute.

See attribute\_value.proto for possibilities.

`string type = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The type.

### getTypeBytes()

```
public abstract ByteString getTypeBytes()
```

The type of this attribute.

See attribute\_value.proto for possibilities.

`string type = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for type.

### hasDefaultValue()

```
public abstract boolean hasDefaultValue()
```

The default value for the attribute.

`.google.cloud.visionai.v1.AttributeValue default_value = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the defaultValue field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
