# Issuing merchant categories

Learn about the available categories that businesses are grouped in.

Every business that processes card payments is categorized using [Merchant Category Codes](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC). The category name is provided as a value for `merchant_data.category` on [Authorization](https://docs.stripe.com/api.md#issuing_authorization_object) objects. If a business doesn’t fit into a specific category, it’s categorized as `miscellaneous`.

You can use these categories when creating [spending controls](https://docs.stripe.com/issuing/controls/spending-controls.md) to restrict issued cards from being used with certain business types.

You can also use [enriched merchant data](https://docs.stripe.com/issuing/purchases/enriched-merchant-data.md) to set more granular controls.
