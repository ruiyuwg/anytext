-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface AttributesOrBuilder (0.14.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.26.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface AttributesOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBrandExclusion(int index)

```
public abstract String getBrandExclusion(int index)
```

Optional. Product filter by [brand exclusion](https://support.google.com/merchants/answer/13861679?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string brand_exclusion = 12 [(.google.api.field_behavior) = OPTIONAL];`

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

The brandExclusion at the given index.

### getBrandExclusionBytes(int index)

```
public abstract ByteString getBrandExclusionBytes(int index)
```

Optional. Product filter by [brand exclusion](https://support.google.com/merchants/answer/13861679?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string brand_exclusion = 12 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the brandExclusion at the given index.

### getBrandExclusionCount()

```
public abstract int getBrandExclusionCount()
```

Optional. Product filter by [brand exclusion](https://support.google.com/merchants/answer/13861679?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string brand_exclusion = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of brandExclusion.

### getBrandExclusionList()

```
public abstract List<String> getBrandExclusionList()
```

Optional. Product filter by [brand exclusion](https://support.google.com/merchants/answer/13861679?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string brand_exclusion = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the brandExclusion.

### getBrandInclusion(int index)

```
public abstract String getBrandInclusion(int index)
```

Optional. Product filter by brand for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string brand_inclusion = 8 [(.google.api.field_behavior) = OPTIONAL];`

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

The brandInclusion at the given index.

### getBrandInclusionBytes(int index)

```
public abstract ByteString getBrandInclusionBytes(int index)
```

Optional. Product filter by brand for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string brand_inclusion = 8 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the brandInclusion at the given index.

### getBrandInclusionCount()

```
public abstract int getBrandInclusionCount()
```

Optional. Product filter by brand for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string brand_inclusion = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of brandInclusion.

### getBrandInclusionList()

```
public abstract List<String> getBrandInclusionList()
```

Optional. Product filter by brand for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string brand_inclusion = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the brandInclusion.

### getCouponValueType()

```
public abstract CouponValueType getCouponValueType()
```

Required. The [coupon value type](https://support.google.com/merchants/answer/13861986?ref_topic=13773355&sjid=17642868584668136159-NC) attribute to signal the type of promotion that you are running. Depending on type of the selected coupon value [some attributes are required](https://support.google.com/merchants/answer/6393006?ref_topic=7322920).

`.google.shopping.merchant.promotions.v1beta.CouponValueType coupon_value_type = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[CouponValueType](/java/docs/reference/google-shopping-merchant-promotions/0.14.0/com.google.shopping.merchant.promotions.v1beta.CouponValueType)`

The couponValueType.

### getCouponValueTypeValue()

```
public abstract int getCouponValueTypeValue()
```

Required. The [coupon value type](https://support.google.com/merchants/answer/13861986?ref_topic=13773355&sjid=17642868584668136159-NC) attribute to signal the type of promotion that you are running. Depending on type of the selected coupon value [some attributes are required](https://support.google.com/merchants/answer/6393006?ref_topic=7322920).

`.google.shopping.merchant.promotions.v1beta.CouponValueType coupon_value_type = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for couponValueType.

### getFreeGiftDescription()

```
public abstract String getFreeGiftDescription()
```

Optional. [Free gift description](https://support.google.com/merchants/answer/13847245?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.

`string free_gift_description = 23 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The freeGiftDescription.

### getFreeGiftDescriptionBytes()

```
public abstract ByteString getFreeGiftDescriptionBytes()
```

Optional. [Free gift description](https://support.google.com/merchants/answer/13847245?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.

`string free_gift_description = 23 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for freeGiftDescription.

### getFreeGiftItemId()

```
public abstract String getFreeGiftItemId()
```

Optional. [Free gift item ID](https://support.google.com/merchants/answer/13857152?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.

`string free_gift_item_id = 24 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The freeGiftItemId.

### getFreeGiftItemIdBytes()

```
public abstract ByteString getFreeGiftItemIdBytes()
```

Optional. [Free gift item ID](https://support.google.com/merchants/answer/13857152?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.

`string free_gift_item_id = 24 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for freeGiftItemId.

### getFreeGiftValue()

```
public abstract Price getFreeGiftValue()
```

Optional. [Free gift value](https://support.google.com/merchants/answer/13844477?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.

`.google.shopping.type.Price free_gift_value = 22 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`com.google.shopping.type.Price`

The freeGiftValue.

### getFreeGiftValueOrBuilder()

```
public abstract PriceOrBuilder getFreeGiftValueOrBuilder()
```

Optional. [Free gift value](https://support.google.com/merchants/answer/13844477?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.

`.google.shopping.type.Price free_gift_value = 22 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`com.google.shopping.type.PriceOrBuilder`

### getGenericRedemptionCode()

```
public abstract String getGenericRedemptionCode()
```

Optional. Generic redemption code for the promotion. To be used with the `offerType` field and must meet the [minimum requirements](https://support.google.com/merchants/answer/13837405?ref_topic=13773355&sjid=17642868584668136159-NC).

`string generic_redemption_code = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The genericRedemptionCode.

### getGenericRedemptionCodeBytes()

```
public abstract ByteString getGenericRedemptionCodeBytes()
```

Optional. Generic redemption code for the promotion. To be used with the `offerType` field and must meet the [minimum requirements](https://support.google.com/merchants/answer/13837405?ref_topic=13773355&sjid=17642868584668136159-NC).

`string generic_redemption_code = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for genericRedemptionCode.

### getGetThisQuantityDiscounted()

```
public abstract long getGetThisQuantityDiscounted()
```

Optional. The number of items discounted in the promotion. The attribute is set when `couponValueType` is equal to `buy_m_get_n_money_off` or `buy_m_get_n_percent_off`.

`int64 get_this_quantity_discounted = 21 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The getThisQuantityDiscounted.

### getItemGroupIdExclusion(int index)

```
public abstract String getItemGroupIdExclusion(int index)
```

Optional. Product filter by [item group ID](https://support.google.com/merchants/answer/13837298?ref_topic=13773355&sjid=17642868584668136159-NC). The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC). exclusion for the promotion.

`repeated string item_group_id_exclusion = 13 [(.google.api.field_behavior) = OPTIONAL];`

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

The itemGroupIdExclusion at the given index.

### getItemGroupIdExclusionBytes(int index)

```
public abstract ByteString getItemGroupIdExclusionBytes(int index)
```

Optional. Product filter by [item group ID](https://support.google.com/merchants/answer/13837298?ref_topic=13773355&sjid=17642868584668136159-NC). The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC). exclusion for the promotion.

`repeated string item_group_id_exclusion = 13 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the itemGroupIdExclusion at the given index.

### getItemGroupIdExclusionCount()

```
public abstract int getItemGroupIdExclusionCount()
```

Optional. Product filter by [item group ID](https://support.google.com/merchants/answer/13837298?ref_topic=13773355&sjid=17642868584668136159-NC). The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC). exclusion for the promotion.

`repeated string item_group_id_exclusion = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of itemGroupIdExclusion.

### getItemGroupIdExclusionList()

```
public abstract List<String> getItemGroupIdExclusionList()
```

Optional. Product filter by [item group ID](https://support.google.com/merchants/answer/13837298?ref_topic=13773355&sjid=17642868584668136159-NC). The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC). exclusion for the promotion.

`repeated string item_group_id_exclusion = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the itemGroupIdExclusion.

### getItemGroupIdInclusion(int index)

```
public abstract String getItemGroupIdInclusion(int index)
```

Optional. Product filter by item group ID for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability \[product\_applicability\] attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string item_group_id_inclusion = 9 [(.google.api.field_behavior) = OPTIONAL];`

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

The itemGroupIdInclusion at the given index.

### getItemGroupIdInclusionBytes(int index)

```
public abstract ByteString getItemGroupIdInclusionBytes(int index)
```

Optional. Product filter by item group ID for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability \[product\_applicability\] attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string item_group_id_inclusion = 9 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the itemGroupIdInclusion at the given index.

### getItemGroupIdInclusionCount()

```
public abstract int getItemGroupIdInclusionCount()
```

Optional. Product filter by item group ID for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability \[product\_applicability\] attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string item_group_id_inclusion = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of itemGroupIdInclusion.

### getItemGroupIdInclusionList()

```
public abstract List<String> getItemGroupIdInclusionList()
```

Optional. Product filter by item group ID for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability \[product\_applicability\] attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string item_group_id_inclusion = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the itemGroupIdInclusion.

### getItemIdExclusion(int index)

```
public abstract String getItemIdExclusion(int index)
```

Optional. Product filter by [item ID exclusion](https://support.google.com/merchants/answer/13863524?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string item_id_exclusion = 11 [(.google.api.field_behavior) = OPTIONAL];`

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

The itemIdExclusion at the given index.

### getItemIdExclusionBytes(int index)

```
public abstract ByteString getItemIdExclusionBytes(int index)
```

Optional. Product filter by [item ID exclusion](https://support.google.com/merchants/answer/13863524?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string item_id_exclusion = 11 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the itemIdExclusion at the given index.

### getItemIdExclusionCount()

```
public abstract int getItemIdExclusionCount()
```

Optional. Product filter by [item ID exclusion](https://support.google.com/merchants/answer/13863524?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string item_id_exclusion = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of itemIdExclusion.

### getItemIdExclusionList()

```
public abstract List<String> getItemIdExclusionList()
```

Optional. Product filter by [item ID exclusion](https://support.google.com/merchants/answer/13863524?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string item_id_exclusion = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the itemIdExclusion.

### getItemIdInclusion(int index)

```
public abstract String getItemIdInclusion(int index)
```

Optional. Product filter by [item ID](https://support.google.com/merchants/answer/13861565?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string item_id_inclusion = 7 [(.google.api.field_behavior) = OPTIONAL];`

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

The itemIdInclusion at the given index.

### getItemIdInclusionBytes(int index)

```
public abstract ByteString getItemIdInclusionBytes(int index)
```

Optional. Product filter by [item ID](https://support.google.com/merchants/answer/13861565?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string item_id_inclusion = 7 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the itemIdInclusion at the given index.

### getItemIdInclusionCount()

```
public abstract int getItemIdInclusionCount()
```

Optional. Product filter by [item ID](https://support.google.com/merchants/answer/13861565?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string item_id_inclusion = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of itemIdInclusion.

### getItemIdInclusionList()

```
public abstract List<String> getItemIdInclusionList()
```

Optional. Product filter by [item ID](https://support.google.com/merchants/answer/13861565?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string item_id_inclusion = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the itemIdInclusion.

### getLimitQuantity()

```
public abstract long getLimitQuantity()
```

Optional. [Maximum purchase quantity](https://support.google.com/merchants/answer/13861564?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.

`int64 limit_quantity = 17 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The limitQuantity.

### getLimitValue()

```
public abstract Price getLimitValue()
```

Optional. [Maximum product price](https://support.google.com/merchants/answer/2906014) for promotion.

`.google.shopping.type.Price limit_value = 18 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`com.google.shopping.type.Price`

The limitValue.

### getLimitValueOrBuilder()

```
public abstract PriceOrBuilder getLimitValueOrBuilder()
```

Optional. [Maximum product price](https://support.google.com/merchants/answer/2906014) for promotion.

`.google.shopping.type.Price limit_value = 18 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`com.google.shopping.type.PriceOrBuilder`

### getLongTitle()

```
public abstract String getLongTitle()
```

Required. [Long title](https://support.google.com/merchants/answer/13838102?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.

`string long_title = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The longTitle.

### getLongTitleBytes()

```
public abstract ByteString getLongTitleBytes()
```

Required. [Long title](https://support.google.com/merchants/answer/13838102?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.

`string long_title = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for longTitle.

### getMinimumPurchaseAmount()

```
public abstract Price getMinimumPurchaseAmount()
```

Optional. [Minimum purchase amount](https://support.google.com/merchants/answer/13837705?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.

`.google.shopping.type.Price minimum_purchase_amount = 15 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`com.google.shopping.type.Price`

The minimumPurchaseAmount.

### getMinimumPurchaseAmountOrBuilder()

```
public abstract PriceOrBuilder getMinimumPurchaseAmountOrBuilder()
```

Optional. [Minimum purchase amount](https://support.google.com/merchants/answer/13837705?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.

`.google.shopping.type.Price minimum_purchase_amount = 15 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`com.google.shopping.type.PriceOrBuilder`

### getMinimumPurchaseQuantity()

```
public abstract long getMinimumPurchaseQuantity()
```

Optional. [Minimum purchase quantity](https://support.google.com/merchants/answer/13838182?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.

`int64 minimum_purchase_quantity = 16 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The minimumPurchaseQuantity.

### getMoneyOffAmount()

```
public abstract Price getMoneyOffAmount()
```

Optional. The [money off amount](https://support.google.com/merchants/answer/13838101?ref_topic=13773355&sjid=17642868584668136159-NC) offered in the promotion.

`.google.shopping.type.Price money_off_amount = 20 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`com.google.shopping.type.Price`

The moneyOffAmount.

### getMoneyOffAmountOrBuilder()

```
public abstract PriceOrBuilder getMoneyOffAmountOrBuilder()
```

Optional. The [money off amount](https://support.google.com/merchants/answer/13838101?ref_topic=13773355&sjid=17642868584668136159-NC) offered in the promotion.

`.google.shopping.type.Price money_off_amount = 20 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`com.google.shopping.type.PriceOrBuilder`

### getOfferType()

```
public abstract OfferType getOfferType()
```

Required. [Type](https://support.google.com/merchants/answer/13837405?ref_topic=13773355&sjid=17642868584668136159-NC) of the promotion. Use this attribute to indicate whether or not customers need a coupon code to redeem your promotion.

`.google.shopping.merchant.promotions.v1beta.OfferType offer_type = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[OfferType](/java/docs/reference/google-shopping-merchant-promotions/0.14.0/com.google.shopping.merchant.promotions.v1beta.OfferType)`

The offerType.

### getOfferTypeValue()

```
public abstract int getOfferTypeValue()
```

Required. [Type](https://support.google.com/merchants/answer/13837405?ref_topic=13773355&sjid=17642868584668136159-NC) of the promotion. Use this attribute to indicate whether or not customers need a coupon code to redeem your promotion.

`.google.shopping.merchant.promotions.v1beta.OfferType offer_type = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for offerType.

### getPercentOff()

```
public abstract long getPercentOff()
```

Optional. The [percentage discount](https://support.google.com/merchants/answer/13837404?sjid=17642868584668136159-NC) offered in the promotion.

`int64 percent_off = 19 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The percentOff.

### getProductApplicability()

```
public abstract ProductApplicability getProductApplicability()
```

Required. Applicability of the promotion to either all products or [only specific products](https://support.google.com/merchants/answer/6396257?ref_topic=6396150&sjid=17642868584668136159-NC).

`.google.shopping.merchant.promotions.v1beta.ProductApplicability product_applicability = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ProductApplicability](/java/docs/reference/google-shopping-merchant-promotions/0.14.0/com.google.shopping.merchant.promotions.v1beta.ProductApplicability)`

The productApplicability.

### getProductApplicabilityValue()

```
public abstract int getProductApplicabilityValue()
```

Required. Applicability of the promotion to either all products or [only specific products](https://support.google.com/merchants/answer/6396257?ref_topic=6396150&sjid=17642868584668136159-NC).

`.google.shopping.merchant.promotions.v1beta.ProductApplicability product_applicability = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for productApplicability.

### getProductTypeExclusion(int index)

```
public abstract String getProductTypeExclusion(int index)
```

Optional. Product filter by [product type exclusion](https://support.google.com/merchants/answer/13863746?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string product_type_exclusion = 14 [(.google.api.field_behavior) = OPTIONAL];`

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

The productTypeExclusion at the given index.

### getProductTypeExclusionBytes(int index)

```
public abstract ByteString getProductTypeExclusionBytes(int index)
```

Optional. Product filter by [product type exclusion](https://support.google.com/merchants/answer/13863746?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string product_type_exclusion = 14 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the productTypeExclusion at the given index.

### getProductTypeExclusionCount()

```
public abstract int getProductTypeExclusionCount()
```

Optional. Product filter by [product type exclusion](https://support.google.com/merchants/answer/13863746?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string product_type_exclusion = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of productTypeExclusion.

### getProductTypeExclusionList()

```
public abstract List<String> getProductTypeExclusionList()
```

Optional. Product filter by [product type exclusion](https://support.google.com/merchants/answer/13863746?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string product_type_exclusion = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the productTypeExclusion.

### getProductTypeInclusion(int index)

```
public abstract String getProductTypeInclusion(int index)
```

Optional. Product filter by product type for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string product_type_inclusion = 10 [(.google.api.field_behavior) = OPTIONAL];`

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

The productTypeInclusion at the given index.

### getProductTypeInclusionBytes(int index)

```
public abstract ByteString getProductTypeInclusionBytes(int index)
```

Optional. Product filter by product type for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string product_type_inclusion = 10 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the productTypeInclusion at the given index.

### getProductTypeInclusionCount()

```
public abstract int getProductTypeInclusionCount()
```

Optional. Product filter by product type for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string product_type_inclusion = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of productTypeInclusion.

### getProductTypeInclusionList()

```
public abstract List<String> getProductTypeInclusionList()
```

Optional. Product filter by product type for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific\_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string product_type_inclusion = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the productTypeInclusion.

### getPromotionDestinations(int index)

```
public abstract Destination.DestinationEnum getPromotionDestinations(int index)
```

Required. The list of destinations where the promotion applies to. If you don't specify a destination by including a supported value in your data source, your promotion will display in Shopping ads and free listings by default.

You may have previously submitted the following values as destinations for your products: Shopping Actions, Surfaces across Google, Local surfaces across Google. To represent these values use `FREE_LISTINGS`, `FREE_LOCAL_LISTINGS`, `LOCAL_INVENTORY_ADS`. For more details see [Promotion destination](https://support.google.com/merchants/answer/13837465?sjid=5155774230887277618-NC)

`repeated .google.shopping.type.Destination.DestinationEnum promotion_destinations = 6 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`com.google.shopping.type.Destination.DestinationEnum`

The promotionDestinations at the given index.

### getPromotionDestinationsCount()

```
public abstract int getPromotionDestinationsCount()
```

Required. The list of destinations where the promotion applies to. If you don't specify a destination by including a supported value in your data source, your promotion will display in Shopping ads and free listings by default.

You may have previously submitted the following values as destinations for your products: Shopping Actions, Surfaces across Google, Local surfaces across Google. To represent these values use `FREE_LISTINGS`, `FREE_LOCAL_LISTINGS`, `LOCAL_INVENTORY_ADS`. For more details see [Promotion destination](https://support.google.com/merchants/answer/13837465?sjid=5155774230887277618-NC)

`repeated .google.shopping.type.Destination.DestinationEnum promotion_destinations = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of promotionDestinations.

### getPromotionDestinationsList()

```
public abstract List<Destination.DestinationEnum> getPromotionDestinationsList()
```

Required. The list of destinations where the promotion applies to. If you don't specify a destination by including a supported value in your data source, your promotion will display in Shopping ads and free listings by default.

You may have previously submitted the following values as destinations for your products: Shopping Actions, Surfaces across Google, Local surfaces across Google. To represent these values use `FREE_LISTINGS`, `FREE_LOCAL_LISTINGS`, `LOCAL_INVENTORY_ADS`. For more details see [Promotion destination](https://support.google.com/merchants/answer/13837465?sjid=5155774230887277618-NC)

`repeated .google.shopping.type.Destination.DestinationEnum promotion_destinations = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<com.google.shopping.type.Destination.DestinationEnum>`

A list containing the promotionDestinations.

### getPromotionDestinationsValue(int index)

```
public abstract int getPromotionDestinationsValue(int index)
```

Required. The list of destinations where the promotion applies to. If you don't specify a destination by including a supported value in your data source, your promotion will display in Shopping ads and free listings by default.

You may have previously submitted the following values as destinations for your products: Shopping Actions, Surfaces across Google, Local surfaces across Google. To represent these values use `FREE_LISTINGS`, `FREE_LOCAL_LISTINGS`, `LOCAL_INVENTORY_ADS`. For more details see [Promotion destination](https://support.google.com/merchants/answer/13837465?sjid=5155774230887277618-NC)

`repeated .google.shopping.type.Destination.DestinationEnum promotion_destinations = 6 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire of promotionDestinations at the given index.

### getPromotionDestinationsValueList()

```
public abstract List<Integer> getPromotionDestinationsValueList()
```

Required. The list of destinations where the promotion applies to. If you don't specify a destination by including a supported value in your data source, your promotion will display in Shopping ads and free listings by default.

You may have previously submitted the following values as destinations for your products: Shopping Actions, Surfaces across Google, Local surfaces across Google. To represent these values use `FREE_LISTINGS`, `FREE_LOCAL_LISTINGS`, `LOCAL_INVENTORY_ADS`. For more details see [Promotion destination](https://support.google.com/merchants/answer/13837465?sjid=5155774230887277618-NC)

`repeated .google.shopping.type.Destination.DestinationEnum promotion_destinations = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)>`

A list containing the enum numeric values on the wire for promotionDestinations.

### getPromotionDisplayTimePeriod()

```
public abstract Interval getPromotionDisplayTimePeriod()
```

Optional. `TimePeriod` representation of the promotion's display dates. This attribute specifies the date and time frame when the promotion will be live on Google.com and Shopping ads. If the display time period for promotion `promotion_display_time_period` attribute is not specified, the promotion effective time period `promotion_effective_time_period` determines the date and time frame when the promotion will be live on Google.com and Shopping ads.

`.google.type.Interval promotion_display_time_period = 26 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`com.google.type.Interval`

The promotionDisplayTimePeriod.

### getPromotionDisplayTimePeriodOrBuilder()

```
public abstract IntervalOrBuilder getPromotionDisplayTimePeriodOrBuilder()
```

Optional. `TimePeriod` representation of the promotion's display dates. This attribute specifies the date and time frame when the promotion will be live on Google.com and Shopping ads. If the display time period for promotion `promotion_display_time_period` attribute is not specified, the promotion effective time period `promotion_effective_time_period` determines the date and time frame when the promotion will be live on Google.com and Shopping ads.

`.google.type.Interval promotion_display_time_period = 26 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`com.google.type.IntervalOrBuilder`

### getPromotionEffectiveTimePeriod()

```
public abstract Interval getPromotionEffectiveTimePeriod()
```

Required. `TimePeriod` representation of the promotion's effective dates. This attribute specifies that the promotion can be tested on your online store during this time period.

`.google.type.Interval promotion_effective_time_period = 25 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`com.google.type.Interval`

The promotionEffectiveTimePeriod.

### getPromotionEffectiveTimePeriodOrBuilder()

```
public abstract IntervalOrBuilder getPromotionEffectiveTimePeriodOrBuilder()
```

Required. `TimePeriod` representation of the promotion's effective dates. This attribute specifies that the promotion can be tested on your online store during this time period.

`.google.type.Interval promotion_effective_time_period = 25 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`com.google.type.IntervalOrBuilder`

### getPromotionUrl()

```
public abstract String getPromotionUrl()
```

Optional. URL to the page on the merchant's site where the promotion shows. Local Inventory ads promotions throw an error if no `promotion_url` is included. URL is used to confirm that the promotion is valid and can be redeemed.

`string promotion_url = 31 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The promotionUrl.

### getPromotionUrlBytes()

```
public abstract ByteString getPromotionUrlBytes()
```

Optional. URL to the page on the merchant's site where the promotion shows. Local Inventory ads promotions throw an error if no `promotion_url` is included. URL is used to confirm that the promotion is valid and can be redeemed.

`string promotion_url = 31 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for promotionUrl.

### getStoreApplicability()

```
public abstract StoreApplicability getStoreApplicability()
```

Optional. Whether the promotion applies to [all stores, or only specified stores](https://support.google.com/merchants/answer/13857563?sjid=17642868584668136159-NC). Local Inventory ads promotions throw an error if no store applicability is included. An `INVALID_ARGUMENT` error is thrown if `store_applicability` is set to `ALL_STORES` and `store_codes_inclusion` or `score_code_exclusion` is set to a value.

`.google.shopping.merchant.promotions.v1beta.StoreApplicability store_applicability = 28 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[StoreApplicability](/java/docs/reference/google-shopping-merchant-promotions/0.14.0/com.google.shopping.merchant.promotions.v1beta.StoreApplicability)`

The storeApplicability.

### getStoreApplicabilityValue()

```
public abstract int getStoreApplicabilityValue()
```

Optional. Whether the promotion applies to [all stores, or only specified stores](https://support.google.com/merchants/answer/13857563?sjid=17642868584668136159-NC). Local Inventory ads promotions throw an error if no store applicability is included. An `INVALID_ARGUMENT` error is thrown if `store_applicability` is set to `ALL_STORES` and `store_codes_inclusion` or `score_code_exclusion` is set to a value.

`.google.shopping.merchant.promotions.v1beta.StoreApplicability store_applicability = 28 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for storeApplicability.

### getStoreCodesExclusion(int index)

```
public abstract String getStoreCodesExclusion(int index)
```

Optional. [Store codes to exclude](https://support.google.com/merchants/answer/13859586?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The store filter attributes only applies when the `store_applicability` attribute is set to [specific\_stores](https://support.google.com/merchants/answer/13857563?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string store_codes_exclusion = 30 [(.google.api.field_behavior) = OPTIONAL];`

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

The storeCodesExclusion at the given index.

### getStoreCodesExclusionBytes(int index)

```
public abstract ByteString getStoreCodesExclusionBytes(int index)
```

Optional. [Store codes to exclude](https://support.google.com/merchants/answer/13859586?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The store filter attributes only applies when the `store_applicability` attribute is set to [specific\_stores](https://support.google.com/merchants/answer/13857563?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string store_codes_exclusion = 30 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the storeCodesExclusion at the given index.

### getStoreCodesExclusionCount()

```
public abstract int getStoreCodesExclusionCount()
```

Optional. [Store codes to exclude](https://support.google.com/merchants/answer/13859586?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The store filter attributes only applies when the `store_applicability` attribute is set to [specific\_stores](https://support.google.com/merchants/answer/13857563?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string store_codes_exclusion = 30 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of storeCodesExclusion.

### getStoreCodesExclusionList()

```
public abstract List<String> getStoreCodesExclusionList()
```

Optional. [Store codes to exclude](https://support.google.com/merchants/answer/13859586?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The store filter attributes only applies when the `store_applicability` attribute is set to [specific\_stores](https://support.google.com/merchants/answer/13857563?ref_topic=13773355&sjid=17642868584668136159-NC).

`repeated string store_codes_exclusion = 30 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the storeCodesExclusion.

### getStoreCodesInclusion(int index)

```
public abstract String getStoreCodesInclusion(int index)
```

Optional. [Store codes to include](https://support.google.com/merchants/answer/13857470?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The store filter attributes only applies when the `store_applicability` attribute is set to [specific\_stores](https://support.google.com/merchants/answer/13857563?ref_topic=13773355&sjid=17642868584668136159-NC).

Store code (the store ID from your Business Profile) of the physical store the product is sold in. See the [Local product inventory data specification](https://support.google.com/merchants/answer/3061342) for more information.

`repeated string store_codes_inclusion = 29 [(.google.api.field_behavior) = OPTIONAL];`

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

The storeCodesInclusion at the given index.

### getStoreCodesInclusionBytes(int index)

```
public abstract ByteString getStoreCodesInclusionBytes(int index)
```

Optional. [Store codes to include](https://support.google.com/merchants/answer/13857470?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The store filter attributes only applies when the `store_applicability` attribute is set to [specific\_stores](https://support.google.com/merchants/answer/13857563?ref_topic=13773355&sjid=17642868584668136159-NC).

Store code (the store ID from your Business Profile) of the physical store the product is sold in. See the [Local product inventory data specification](https://support.google.com/merchants/answer/3061342) for more information.

`repeated string store_codes_inclusion = 29 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the storeCodesInclusion at the given index.

### getStoreCodesInclusionCount()

```
public abstract int getStoreCodesInclusionCount()
```

Optional. [Store codes to include](https://support.google.com/merchants/answer/13857470?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The store filter attributes only applies when the `store_applicability` attribute is set to [specific\_stores](https://support.google.com/merchants/answer/13857563?ref_topic=13773355&sjid=17642868584668136159-NC).

Store code (the store ID from your Business Profile) of the physical store the product is sold in. See the [Local product inventory data specification](https://support.google.com/merchants/answer/3061342) for more information.

`repeated string store_codes_inclusion = 29 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of storeCodesInclusion.

### getStoreCodesInclusionList()

```
public abstract List<String> getStoreCodesInclusionList()
```

Optional. [Store codes to include](https://support.google.com/merchants/answer/13857470?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The store filter attributes only applies when the `store_applicability` attribute is set to [specific\_stores](https://support.google.com/merchants/answer/13857563?ref_topic=13773355&sjid=17642868584668136159-NC).

Store code (the store ID from your Business Profile) of the physical store the product is sold in. See the [Local product inventory data specification](https://support.google.com/merchants/answer/3061342) for more information.

`repeated string store_codes_inclusion = 29 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the storeCodesInclusion.

### hasFreeGiftValue()

```
public abstract boolean hasFreeGiftValue()
```

Optional. [Free gift value](https://support.google.com/merchants/answer/13844477?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.

`.google.shopping.type.Price free_gift_value = 22 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the freeGiftValue field is set.

### hasLimitValue()

```
public abstract boolean hasLimitValue()
```

Optional. [Maximum product price](https://support.google.com/merchants/answer/2906014) for promotion.

`.google.shopping.type.Price limit_value = 18 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the limitValue field is set.

### hasMinimumPurchaseAmount()

```
public abstract boolean hasMinimumPurchaseAmount()
```

Optional. [Minimum purchase amount](https://support.google.com/merchants/answer/13837705?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.

`.google.shopping.type.Price minimum_purchase_amount = 15 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the minimumPurchaseAmount field is set.

### hasMoneyOffAmount()

```
public abstract boolean hasMoneyOffAmount()
```

Optional. The [money off amount](https://support.google.com/merchants/answer/13838101?ref_topic=13773355&sjid=17642868584668136159-NC) offered in the promotion.

`.google.shopping.type.Price money_off_amount = 20 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the moneyOffAmount field is set.

### hasPromotionDisplayTimePeriod()

```
public abstract boolean hasPromotionDisplayTimePeriod()
```

Optional. `TimePeriod` representation of the promotion's display dates. This attribute specifies the date and time frame when the promotion will be live on Google.com and Shopping ads. If the display time period for promotion `promotion_display_time_period` attribute is not specified, the promotion effective time period `promotion_effective_time_period` determines the date and time frame when the promotion will be live on Google.com and Shopping ads.

`.google.type.Interval promotion_display_time_period = 26 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the promotionDisplayTimePeriod field is set.

### hasPromotionEffectiveTimePeriod()

```
public abstract boolean hasPromotionEffectiveTimePeriod()
```

Required. `TimePeriod` representation of the promotion's effective dates. This attribute specifies that the promotion can be tested on your online store during this time period.

`.google.type.Interval promotion_effective_time_period = 25 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the promotionEffectiveTimePeriod field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
