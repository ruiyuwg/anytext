-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface UpdateHomepageRequestOrBuilder (1.15.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.26.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface UpdateHomepageRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getHomepage()

```
public abstract Homepage getHomepage()
```

Required. The new version of the homepage.

`.google.shopping.merchant.accounts.v1.Homepage homepage = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Homepage](/java/docs/reference/google-shopping-merchant-accounts/latest/com.google.shopping.merchant.accounts.v1.Homepage)`

The homepage.

### getHomepageOrBuilder()

```
public abstract HomepageOrBuilder getHomepageOrBuilder()
```

Required. The new version of the homepage.

`.google.shopping.merchant.accounts.v1.Homepage homepage = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[HomepageOrBuilder](/java/docs/reference/google-shopping-merchant-accounts/latest/com.google.shopping.merchant.accounts.v1.HomepageOrBuilder)`

### getUpdateMask()

```
public abstract FieldMask getUpdateMask()
```

Optional. List of fields being updated.

The following fields are supported (in both `snake_case` and `lowerCamelCase`):

-   `uri`

`.google.protobuf.FieldMask update_mask = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`

The updateMask.

### getUpdateMaskOrBuilder()

```
public abstract FieldMaskOrBuilder getUpdateMaskOrBuilder()
```

Optional. List of fields being updated.

The following fields are supported (in both `snake_case` and `lowerCamelCase`):

-   `uri`

`.google.protobuf.FieldMask update_mask = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[FieldMaskOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMaskOrBuilder.html)`

### hasHomepage()

```
public abstract boolean hasHomepage()
```

Required. The new version of the homepage.

`.google.shopping.merchant.accounts.v1.Homepage homepage = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the homepage field is set.

### hasUpdateMask()

```
public abstract boolean hasUpdateMask()
```

Optional. List of fields being updated.

The following fields are supported (in both `snake_case` and `lowerCamelCase`):

-   `uri`

`.google.protobuf.FieldMask update_mask = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateMask field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
