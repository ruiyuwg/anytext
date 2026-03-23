-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SetInventoryRequestOrBuilder (2.9.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public interface SetInventoryRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAllowMissing()

```
public abstract boolean getAllowMissing()
```

If set to true, and the Product with name Product.name is not found, the inventory update will still be processed and retained for at most 1 day until the Product is created. If set to false, a NOT\_FOUND error is returned if the Product is not found.

`bool allow_missing = 4;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The allowMissing.

### getInventory()

```
public abstract Product getInventory()
```

Required. The inventory information to update. The allowable fields to update are:

-   Product.price\_info
-   Product.availability
-   Product.available\_quantity
-   Product.fulfillment\_info The updated inventory fields must be specified in SetInventoryRequest.set\_mask. If SetInventoryRequest.inventory.name is empty or invalid, an INVALID\_ARGUMENT error is returned. If the caller does not have permission to update the Product named in Product.name, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned. If the Product to update does not have existing inventory information, the provided inventory information will be inserted. If the Product to update has existing inventory information, the provided inventory information will be merged while respecting the last update time for each inventory field, using the provided or default value for SetInventoryRequest.set\_time. The caller can replace place IDs for a subset of fulfillment types in the following ways:
-   Adds "fulfillment\_info" in SetInventoryRequest.set\_mask
-   Specifies only the desired fulfillment types and corresponding place IDs to update in SetInventoryRequest.inventory.fulfillment\_info The caller can clear all place IDs from a subset of fulfillment types in the following ways:
-   Adds "fulfillment\_info" in SetInventoryRequest.set\_mask
-   Specifies only the desired fulfillment types to clear in SetInventoryRequest.inventory.fulfillment\_info
-   Checks that only the desired fulfillment info types have empty SetInventoryRequest.inventory.fulfillment\_info.place\_ids The last update time is recorded for the following inventory fields:
-   Product.price\_info
-   Product.availability
-   Product.available\_quantity
-   Product.fulfillment\_info If a full overwrite of inventory information while ignoring timestamps is needed, ProductService.UpdateProduct should be invoked instead.

`.google.cloud.retail.v2.Product inventory = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[Product](/java/docs/reference/google-cloud-retail/2.9.0/com.google.cloud.retail.v2.Product)

The inventory.

### getInventoryOrBuilder()

```
public abstract ProductOrBuilder getInventoryOrBuilder()
```

Required. The inventory information to update. The allowable fields to update are:

-   Product.price\_info
-   Product.availability
-   Product.available\_quantity
-   Product.fulfillment\_info The updated inventory fields must be specified in SetInventoryRequest.set\_mask. If SetInventoryRequest.inventory.name is empty or invalid, an INVALID\_ARGUMENT error is returned. If the caller does not have permission to update the Product named in Product.name, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned. If the Product to update does not have existing inventory information, the provided inventory information will be inserted. If the Product to update has existing inventory information, the provided inventory information will be merged while respecting the last update time for each inventory field, using the provided or default value for SetInventoryRequest.set\_time. The caller can replace place IDs for a subset of fulfillment types in the following ways:
-   Adds "fulfillment\_info" in SetInventoryRequest.set\_mask
-   Specifies only the desired fulfillment types and corresponding place IDs to update in SetInventoryRequest.inventory.fulfillment\_info The caller can clear all place IDs from a subset of fulfillment types in the following ways:
-   Adds "fulfillment\_info" in SetInventoryRequest.set\_mask
-   Specifies only the desired fulfillment types to clear in SetInventoryRequest.inventory.fulfillment\_info
-   Checks that only the desired fulfillment info types have empty SetInventoryRequest.inventory.fulfillment\_info.place\_ids The last update time is recorded for the following inventory fields:
-   Product.price\_info
-   Product.availability
-   Product.available\_quantity
-   Product.fulfillment\_info If a full overwrite of inventory information while ignoring timestamps is needed, ProductService.UpdateProduct should be invoked instead.

`.google.cloud.retail.v2.Product inventory = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[ProductOrBuilder](/java/docs/reference/google-cloud-retail/2.9.0/com.google.cloud.retail.v2.ProductOrBuilder)

### getSetMask()

```
public abstract FieldMask getSetMask()
```

Indicates which inventory fields in the provided Product to update. At least one field must be provided. If an unsupported or unknown field is provided, an INVALID\_ARGUMENT error is returned and the entire update will be ignored.

`.google.protobuf.FieldMask set_mask = 2;`

**Returns**

**Type**

**Description**

[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)

The setMask.

### getSetMaskOrBuilder()

```
public abstract FieldMaskOrBuilder getSetMaskOrBuilder()
```

Indicates which inventory fields in the provided Product to update. At least one field must be provided. If an unsupported or unknown field is provided, an INVALID\_ARGUMENT error is returned and the entire update will be ignored.

`.google.protobuf.FieldMask set_mask = 2;`

**Returns**

**Type**

**Description**

[FieldMaskOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMaskOrBuilder.html)

### getSetTime()

```
public abstract Timestamp getSetTime()
```

The time when the request is issued, used to prevent out-of-order updates on inventory fields with the last update time recorded. If not provided, the internal system time will be used.

`.google.protobuf.Timestamp set_time = 3;`

**Returns**

**Type**

**Description**

[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)

The setTime.

### getSetTimeOrBuilder()

```
public abstract TimestampOrBuilder getSetTimeOrBuilder()
```

The time when the request is issued, used to prevent out-of-order updates on inventory fields with the last update time recorded. If not provided, the internal system time will be used.

`.google.protobuf.Timestamp set_time = 3;`

**Returns**

**Type**

**Description**

[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)

### hasInventory()

```
public abstract boolean hasInventory()
```

Required. The inventory information to update. The allowable fields to update are:

-   Product.price\_info
-   Product.availability
-   Product.available\_quantity
-   Product.fulfillment\_info The updated inventory fields must be specified in SetInventoryRequest.set\_mask. If SetInventoryRequest.inventory.name is empty or invalid, an INVALID\_ARGUMENT error is returned. If the caller does not have permission to update the Product named in Product.name, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned. If the Product to update does not have existing inventory information, the provided inventory information will be inserted. If the Product to update has existing inventory information, the provided inventory information will be merged while respecting the last update time for each inventory field, using the provided or default value for SetInventoryRequest.set\_time. The caller can replace place IDs for a subset of fulfillment types in the following ways:
-   Adds "fulfillment\_info" in SetInventoryRequest.set\_mask
-   Specifies only the desired fulfillment types and corresponding place IDs to update in SetInventoryRequest.inventory.fulfillment\_info The caller can clear all place IDs from a subset of fulfillment types in the following ways:
-   Adds "fulfillment\_info" in SetInventoryRequest.set\_mask
-   Specifies only the desired fulfillment types to clear in SetInventoryRequest.inventory.fulfillment\_info
-   Checks that only the desired fulfillment info types have empty SetInventoryRequest.inventory.fulfillment\_info.place\_ids The last update time is recorded for the following inventory fields:
-   Product.price\_info
-   Product.availability
-   Product.available\_quantity
-   Product.fulfillment\_info If a full overwrite of inventory information while ignoring timestamps is needed, ProductService.UpdateProduct should be invoked instead.

`.google.cloud.retail.v2.Product inventory = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the inventory field is set.

### hasSetMask()

```
public abstract boolean hasSetMask()
```

Indicates which inventory fields in the provided Product to update. At least one field must be provided. If an unsupported or unknown field is provided, an INVALID\_ARGUMENT error is returned and the entire update will be ignored.

`.google.protobuf.FieldMask set_mask = 2;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the setMask field is set.

### hasSetTime()

```
public abstract boolean hasSetTime()
```

The time when the request is issued, used to prevent out-of-order updates on inventory fields with the last update time recorded. If not provided, the internal system time will be used.

`.google.protobuf.Timestamp set_time = 3;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the setTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
