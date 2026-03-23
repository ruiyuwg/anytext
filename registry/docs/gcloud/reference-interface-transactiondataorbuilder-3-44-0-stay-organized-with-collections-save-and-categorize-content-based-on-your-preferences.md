-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface TransactionDataOrBuilder (3.44.0) Stay organized with collections Save and categorize content based on your preferences.

3.84.0 (latest) 3.82.0 3.80.0 3.79.0 3.77.0 3.75.0 3.73.0 3.72.0 3.71.0 3.70.0 3.69.0 3.67.0 3.65.0 3.64.0 3.61.0 3.60.0 3.59.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.12 2.6.1 2.5.0 2.4.10 2.3.1

```
public interface TransactionDataOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBillingAddress()

```
public abstract TransactionData.Address getBillingAddress()
```

Optional. Address associated with the payment method when applicable.

`.google.cloud.recaptchaenterprise.v1.TransactionData.Address billing_address = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[TransactionData.Address](/java/docs/reference/google-cloud-recaptchaenterprise/3.44.0/com.google.recaptchaenterprise.v1.TransactionData.Address)`

The billingAddress.

### getBillingAddressOrBuilder()

```
public abstract TransactionData.AddressOrBuilder getBillingAddressOrBuilder()
```

Optional. Address associated with the payment method when applicable.

`.google.cloud.recaptchaenterprise.v1.TransactionData.Address billing_address = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[TransactionData.AddressOrBuilder](/java/docs/reference/google-cloud-recaptchaenterprise/3.44.0/com.google.recaptchaenterprise.v1.TransactionData.AddressOrBuilder)`

### getCardBin()

```
public abstract String getCardBin()
```

Optional. The Bank Identification Number - generally the first 6 or 8 digits of the card.

`string card_bin = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The cardBin.

### getCardBinBytes()

```
public abstract ByteString getCardBinBytes()
```

Optional. The Bank Identification Number - generally the first 6 or 8 digits of the card.

`string card_bin = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for cardBin.

### getCardLastFour()

```
public abstract String getCardLastFour()
```

Optional. The last four digits of the card.

`string card_last_four = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The cardLastFour.

### getCardLastFourBytes()

```
public abstract ByteString getCardLastFourBytes()
```

Optional. The last four digits of the card.

`string card_last_four = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for cardLastFour.

### getCurrencyCode()

```
public abstract String getCurrencyCode()
```

Optional. The currency code in ISO-4217 format.

`string currency_code = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The currencyCode.

### getCurrencyCodeBytes()

```
public abstract ByteString getCurrencyCodeBytes()
```

Optional. The currency code in ISO-4217 format.

`string currency_code = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for currencyCode.

### getGatewayInfo()

```
public abstract TransactionData.GatewayInfo getGatewayInfo()
```

Optional. Information about the payment gateway's response to the transaction.

`.google.cloud.recaptchaenterprise.v1.TransactionData.GatewayInfo gateway_info = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[TransactionData.GatewayInfo](/java/docs/reference/google-cloud-recaptchaenterprise/3.44.0/com.google.recaptchaenterprise.v1.TransactionData.GatewayInfo)`

The gatewayInfo.

### getGatewayInfoOrBuilder()

```
public abstract TransactionData.GatewayInfoOrBuilder getGatewayInfoOrBuilder()
```

Optional. Information about the payment gateway's response to the transaction.

`.google.cloud.recaptchaenterprise.v1.TransactionData.GatewayInfo gateway_info = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[TransactionData.GatewayInfoOrBuilder](/java/docs/reference/google-cloud-recaptchaenterprise/3.44.0/com.google.recaptchaenterprise.v1.TransactionData.GatewayInfoOrBuilder)`

### getItems(int index)

```
public abstract TransactionData.Item getItems(int index)
```

Optional. Items purchased in this transaction.

`repeated .google.cloud.recaptchaenterprise.v1.TransactionData.Item items = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TransactionData.Item](/java/docs/reference/google-cloud-recaptchaenterprise/3.44.0/com.google.recaptchaenterprise.v1.TransactionData.Item)`

### getItemsCount()

```
public abstract int getItemsCount()
```

Optional. Items purchased in this transaction.

`repeated .google.cloud.recaptchaenterprise.v1.TransactionData.Item items = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getItemsList()

```
public abstract List<TransactionData.Item> getItemsList()
```

Optional. Items purchased in this transaction.

`repeated .google.cloud.recaptchaenterprise.v1.TransactionData.Item items = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Item](/java/docs/reference/google-cloud-recaptchaenterprise/3.44.0/com.google.recaptchaenterprise.v1.TransactionData.Item)>`

### getItemsOrBuilder(int index)

```
public abstract TransactionData.ItemOrBuilder getItemsOrBuilder(int index)
```

Optional. Items purchased in this transaction.

`repeated .google.cloud.recaptchaenterprise.v1.TransactionData.Item items = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TransactionData.ItemOrBuilder](/java/docs/reference/google-cloud-recaptchaenterprise/3.44.0/com.google.recaptchaenterprise.v1.TransactionData.ItemOrBuilder)`

### getItemsOrBuilderList()

```
public abstract List<? extends TransactionData.ItemOrBuilder> getItemsOrBuilderList()
```

Optional. Items purchased in this transaction.

`repeated .google.cloud.recaptchaenterprise.v1.TransactionData.Item items = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.recaptchaenterprise.v1.TransactionData.ItemOrBuilder>`

### getMerchants(int index)

```
public abstract TransactionData.User getMerchants(int index)
```

Optional. Information about the user or users fulfilling the transaction.

`repeated .google.cloud.recaptchaenterprise.v1.TransactionData.User merchants = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TransactionData.User](/java/docs/reference/google-cloud-recaptchaenterprise/3.44.0/com.google.recaptchaenterprise.v1.TransactionData.User)`

### getMerchantsCount()

```
public abstract int getMerchantsCount()
```

Optional. Information about the user or users fulfilling the transaction.

`repeated .google.cloud.recaptchaenterprise.v1.TransactionData.User merchants = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getMerchantsList()

```
public abstract List<TransactionData.User> getMerchantsList()
```

Optional. Information about the user or users fulfilling the transaction.

`repeated .google.cloud.recaptchaenterprise.v1.TransactionData.User merchants = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[User](/java/docs/reference/google-cloud-recaptchaenterprise/3.44.0/com.google.recaptchaenterprise.v1.TransactionData.User)>`

### getMerchantsOrBuilder(int index)

```
public abstract TransactionData.UserOrBuilder getMerchantsOrBuilder(int index)
```

Optional. Information about the user or users fulfilling the transaction.

`repeated .google.cloud.recaptchaenterprise.v1.TransactionData.User merchants = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TransactionData.UserOrBuilder](/java/docs/reference/google-cloud-recaptchaenterprise/3.44.0/com.google.recaptchaenterprise.v1.TransactionData.UserOrBuilder)`

### getMerchantsOrBuilderList()

```
public abstract List<? extends TransactionData.UserOrBuilder> getMerchantsOrBuilderList()
```

Optional. Information about the user or users fulfilling the transaction.

`repeated .google.cloud.recaptchaenterprise.v1.TransactionData.User merchants = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.recaptchaenterprise.v1.TransactionData.UserOrBuilder>`

### getPaymentMethod()

```
public abstract String getPaymentMethod()
```

Optional. The payment method for the transaction. The allowed values are:

-   credit-card
-   debit-card
-   gift-card
-   processor-{name} (If a third-party is used, for example, processor-paypal)
-   custom-{name} (If an alternative method is used, for example, custom-crypto)

`string payment_method = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The paymentMethod.

### getPaymentMethodBytes()

```
public abstract ByteString getPaymentMethodBytes()
```

Optional. The payment method for the transaction. The allowed values are:

-   credit-card
-   debit-card
-   gift-card
-   processor-{name} (If a third-party is used, for example, processor-paypal)
-   custom-{name} (If an alternative method is used, for example, custom-crypto)

`string payment_method = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for paymentMethod.

### getShippingAddress()

```
public abstract TransactionData.Address getShippingAddress()
```

Optional. Destination address if this transaction involves shipping a physical item.

`.google.cloud.recaptchaenterprise.v1.TransactionData.Address shipping_address = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[TransactionData.Address](/java/docs/reference/google-cloud-recaptchaenterprise/3.44.0/com.google.recaptchaenterprise.v1.TransactionData.Address)`

The shippingAddress.

### getShippingAddressOrBuilder()

```
public abstract TransactionData.AddressOrBuilder getShippingAddressOrBuilder()
```

Optional. Destination address if this transaction involves shipping a physical item.

`.google.cloud.recaptchaenterprise.v1.TransactionData.Address shipping_address = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[TransactionData.AddressOrBuilder](/java/docs/reference/google-cloud-recaptchaenterprise/3.44.0/com.google.recaptchaenterprise.v1.TransactionData.AddressOrBuilder)`

### getShippingValue()

```
public abstract double getShippingValue()
```

Optional. The value of shipping in the specified currency. 0 for free or no shipping.

`double shipping_value = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The shippingValue.

### getTransactionId()

```
public abstract String getTransactionId()
```

Unique identifier for the transaction. This custom identifier can be used to reference this transaction in the future, for example, labeling a refund or chargeback event. Two attempts at the same transaction should use the same transaction id.

`optional string transaction_id = 11;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The transactionId.

### getTransactionIdBytes()

```
public abstract ByteString getTransactionIdBytes()
```

Unique identifier for the transaction. This custom identifier can be used to reference this transaction in the future, for example, labeling a refund or chargeback event. Two attempts at the same transaction should use the same transaction id.

`optional string transaction_id = 11;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for transactionId.

### getUser()

```
public abstract TransactionData.User getUser()
```

Optional. Information about the user paying/initiating the transaction.

`.google.cloud.recaptchaenterprise.v1.TransactionData.User user = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[TransactionData.User](/java/docs/reference/google-cloud-recaptchaenterprise/3.44.0/com.google.recaptchaenterprise.v1.TransactionData.User)`

The user.

### getUserOrBuilder()

```
public abstract TransactionData.UserOrBuilder getUserOrBuilder()
```

Optional. Information about the user paying/initiating the transaction.

`.google.cloud.recaptchaenterprise.v1.TransactionData.User user = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[TransactionData.UserOrBuilder](/java/docs/reference/google-cloud-recaptchaenterprise/3.44.0/com.google.recaptchaenterprise.v1.TransactionData.UserOrBuilder)`

### getValue()

```
public abstract double getValue()
```

Optional. The decimal value of the transaction in the specified currency.

`double value = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The value.

### hasBillingAddress()

```
public abstract boolean hasBillingAddress()
```

Optional. Address associated with the payment method when applicable.

`.google.cloud.recaptchaenterprise.v1.TransactionData.Address billing_address = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the billingAddress field is set.

### hasGatewayInfo()

```
public abstract boolean hasGatewayInfo()
```

Optional. Information about the payment gateway's response to the transaction.

`.google.cloud.recaptchaenterprise.v1.TransactionData.GatewayInfo gateway_info = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the gatewayInfo field is set.

### hasShippingAddress()

```
public abstract boolean hasShippingAddress()
```

Optional. Destination address if this transaction involves shipping a physical item.

`.google.cloud.recaptchaenterprise.v1.TransactionData.Address shipping_address = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the shippingAddress field is set.

### hasTransactionId()

```
public abstract boolean hasTransactionId()
```

Unique identifier for the transaction. This custom identifier can be used to reference this transaction in the future, for example, labeling a refund or chargeback event. Two attempts at the same transaction should use the same transaction id.

`optional string transaction_id = 11;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the transactionId field is set.

### hasUser()

```
public abstract boolean hasUser()
```

Optional. Information about the user paying/initiating the transaction.

`.google.cloud.recaptchaenterprise.v1.TransactionData.User user = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the user field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
