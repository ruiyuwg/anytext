-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface RemoveFulfillmentPlacesRequestOrBuilder (2.89.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public interface RemoveFulfillmentPlacesRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAllowMissing()

```
public abstract boolean getAllowMissing()
```

If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT\_FOUND error is returned if the Product is not found.

`bool allow_missing = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The allowMissing.

### getPlaceIds(int index)

```
public abstract String getPlaceIds(int index)
```

Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type.

At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated string place_ids = 3 [(.google.api.field_behavior) = REQUIRED];`

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

The placeIds at the given index.

### getPlaceIdsBytes(int index)

```
public abstract ByteString getPlaceIdsBytes(int index)
```

Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type.

At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated string place_ids = 3 [(.google.api.field_behavior) = REQUIRED];`

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

The bytes of the placeIds at the given index.

### getPlaceIdsCount()

```
public abstract int getPlaceIdsCount()
```

Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type.

At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated string place_ids = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of placeIds.

### getPlaceIdsList()

```
public abstract List<String> getPlaceIdsList()
```

Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type.

At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated string place_ids = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the placeIds.

### getProduct()

```
public abstract String getProduct()
```

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

`string product = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The product.

### getProductBytes()

```
public abstract ByteString getProductBytes()
```

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

`string product = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for product.

### getRemoveTime()

```
public abstract Timestamp getRemoveTime()
```

The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.

`.google.protobuf.Timestamp remove_time = 4;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The removeTime.

### getRemoveTimeOrBuilder()

```
public abstract TimestampOrBuilder getRemoveTimeOrBuilder()
```

The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.

`.google.protobuf.Timestamp remove_time = 4;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getType()

```
public abstract String getType()
```

Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types.

Supported values:

-   "pickup-in-store"
-   "ship-to-store"
-   "same-day-delivery"
-   "next-day-delivery"
-   "custom-type-1"
-   "custom-type-2"
-   "custom-type-3"
-   "custom-type-4"
-   "custom-type-5"
    
    If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.
    
    This field directly corresponds to Product.fulfillment\_info.type.
    

`string type = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The type.

### getTypeBytes()

```
public abstract ByteString getTypeBytes()
```

Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types.

Supported values:

-   "pickup-in-store"
-   "ship-to-store"
-   "same-day-delivery"
-   "next-day-delivery"
-   "custom-type-1"
-   "custom-type-2"
-   "custom-type-3"
-   "custom-type-4"
-   "custom-type-5"
    
    If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.
    
    This field directly corresponds to Product.fulfillment\_info.type.
    

`string type = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for type.

### hasRemoveTime()

```
public abstract boolean hasRemoveTime()
```

The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.

`.google.protobuf.Timestamp remove_time = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the removeTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
