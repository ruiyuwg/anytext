-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface InsertRegionalInventoryRequestOrBuilder (1.15.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.46.0 0.44.0 0.43.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0

```
public interface InsertRegionalInventoryRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getParent()

```
public abstract String getParent()
```

Required. The account and product where this inventory will be inserted. Format: `accounts/{account}/products/{product}`

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

Required. The account and product where this inventory will be inserted. Format: `accounts/{account}/products/{product}`

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### getRegionalInventory()

```
public abstract RegionalInventory getRegionalInventory()
```

Required. Regional inventory information to add to the product. If the product already has a `RegionalInventory` resource for the same `region`, full replacement of the `RegionalInventory` resource is performed.

`.google.shopping.merchant.inventories.v1.RegionalInventory regional_inventory = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[RegionalInventory](/java/docs/reference/google-shopping-merchant-inventories/latest/com.google.shopping.merchant.inventories.v1.RegionalInventory)`

The regionalInventory.

### getRegionalInventoryOrBuilder()

```
public abstract RegionalInventoryOrBuilder getRegionalInventoryOrBuilder()
```

Required. Regional inventory information to add to the product. If the product already has a `RegionalInventory` resource for the same `region`, full replacement of the `RegionalInventory` resource is performed.

`.google.shopping.merchant.inventories.v1.RegionalInventory regional_inventory = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[RegionalInventoryOrBuilder](/java/docs/reference/google-shopping-merchant-inventories/latest/com.google.shopping.merchant.inventories.v1.RegionalInventoryOrBuilder)`

### hasRegionalInventory()

```
public abstract boolean hasRegionalInventory()
```

Required. Regional inventory information to add to the product. If the product already has a `RegionalInventory` resource for the same `region`, full replacement of the `RegionalInventory` resource is performed.

`.google.shopping.merchant.inventories.v1.RegionalInventory regional_inventory = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the regionalInventory field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
