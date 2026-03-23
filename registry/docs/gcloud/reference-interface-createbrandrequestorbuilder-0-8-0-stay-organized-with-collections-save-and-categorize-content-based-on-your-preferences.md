-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CreateBrandRequestOrBuilder (0.8.0) Stay organized with collections Save and categorize content based on your preferences.

0.43.0 (latest) 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.34.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.26.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface CreateBrandRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBrand()

```
public abstract Brand getBrand()
```

Required. The brand to be created.

`.google.cloud.iap.v1.Brand brand = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Brand](/java/docs/reference/google-cloud-iap/0.8.0/com.google.cloud.iap.v1.Brand)`

The brand.

### getBrandOrBuilder()

```
public abstract BrandOrBuilder getBrandOrBuilder()
```

Required. The brand to be created.

`.google.cloud.iap.v1.Brand brand = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[BrandOrBuilder](/java/docs/reference/google-cloud-iap/0.8.0/com.google.cloud.iap.v1.BrandOrBuilder)`

### getParent()

```
public abstract String getParent()
```

Required. GCP Project number/id under which the brand is to be created. In the following format: projects/{project\_number/id}.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parent.

### getParentBytes()

```
public abstract ByteString getParentBytes()
```

Required. GCP Project number/id under which the brand is to be created. In the following format: projects/{project\_number/id}.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### hasBrand()

```
public abstract boolean hasBrand()
```

Required. The brand to be created.

`.google.cloud.iap.v1.Brand brand = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the brand field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
