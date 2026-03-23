# Install and configure the Stripe Tax Extension

Use the Stripe Tax Extension for WooCommerce to automatically calculate sales tax, VAT, and GST.

Use the Stripe Tax Extension for WooCommerce to automatically calculate [sales tax, VAT, and GST](https://docs.stripe.com/tax/calculating.md) for all of your transactions. After you install the Stripe Tax Extension for WooCommerce, you can connect it to your Stripe account and configure your tax settings.

If you previously configured these tax settings in the [Stripe Dashboard](https://dashboard.stripe.com/test/settings/tax), the values populate automatically in the Stripe Tax extension.

If your menu varies from the following steps, refer to the [WordPress instructions](https://wordpress.com/support/plugins/use-your-plugins/).

## Connect your Stripe account

1. Install the [WooCommerce Tax Stripe App](https://marketplace.stripe.com/apps/woocommerce-tax) on your Stripe account and click **View API keys** and copy the restricted key. You can install and test the app on a sandbox before you deploy it.
2. On your WooCommerce back office, navigate to **WooCommerce** > **Settings** and select the **Stripe Tax** tab.
3. Choose the type of access:  **Live** mode or **Sandbox mode**.
4. Enter the **Restricted key** from the Stripe App into the **Secret key**.

Click **Test connection** to verify that your key is valid and entered correctly.

## Install the extension

1. On the [Stripe Tax for WooCommerce](https://woocommerce.com/products/stripe-tax/) product page, click **Add to store**.
2. Complete the checkout form, then click **Place free order**.
3. After completing your order, click **Add to store**.
4. On the **Add your store** page, enter the URL of the store you want to add the extension to, then click **Add to store**.
5. After you receive confirmation of installation, you can configure the extension.

## Configure your sales tax settings

The following configuration should be done in your WooCommerce back office:

1. In the **Stripe Tax** tab, under **Configure your sales tax settings**, you can choose:
   1. The default [product tax code](https://docs.stripe.com/tax/tax-codes.md) to use in the shop.
   2. The [product tax code](https://docs.stripe.com/tax/tax-codes.md) to apply to all taxable fees.
2. In the **Tax** tab, decide if the prices you set for your products are inclusive or exclusive of tax.

Set your business address in your Stripe Dashboard.

## Manage tax registrations

Tax isn’t applied [until you add registrations](https://docs.stripe.com/tax/zero-tax.md#situations-where-stripe-calculates-zero-tax) for jurisdictions where you need to collect tax. Our [monitoring tool](https://docs.stripe.com/tax/monitoring.md) can help you understand where you might be registered or need to register.

If you’re already registered in certain jurisdictions and want to start collecting tax immediately, you can add those registrations to your configuration. You can only add tax registrations for [supported countries and registration types](https://docs.stripe.com/tax/supported-countries.md#supported-countries). Some jurisdictions might require additional information.

### Add tax registration

On the **Stripe Tax** tab, under **Tax registrations**, click **Add new**. Choose the jurisdiction from the dropdown, then click **Save changes**.

### Delete tax registration

To delete a registration, hover over the registration, then click **End immediately**. To delete multiple registrations, select them from the list, then click **End immediately** from the **Bulk actions** dropdown.

## Optional: Configure product tax codes and customer tax settings

You can configure tax codes for your products or tax settings for your customers.

### Product tax codes

Stripe Tax can calculate the tax for each of your products based on the product tax code that you assign to it. If you don’t set a code per product, Stripe Tax uses the default [product tax code](https://docs.stripe.com/tax/tax-codes.md) that you selected during setup.

To set a tax code per product:

1. Go to **Products** and select a product from the list.
2. On the **Edit product** page, in the **Product data** section, select a **Stripe Tax - Product tax code** for the product.
3. Click **Update** to save your selection.

### Customer tax settings

Stripe Tax can calculate the tax for each of your customers based on their tax status.

To update a user’s taxability:

1. Go to **Users** and select a user from the list.
2. Under **Stripe Tax Exemptions**, select a **Tax Status** option for the user.
3. Click **Update user** to save your selection.

Learn more about how the customer’s [tax status](https://docs.stripe.com/tax/zero-tax.md#exempt-customers) impacts tax calculation.

## Collect taxes

To start collecting taxes:

- On the **WooCommerce** > **General** tab, select **Enable tax rates and calculations**, then click **Save changes**. This setting enables rate configuration and tax calculation during the checkout process.

- On the **WooCommerce** > **Stripe Tax** tab, select **Enable Stripe Tax**, then click **Save changes**. This setting enables automatic tax calculation and collection on all transactions.

After selecting a product from your WooCommerce store, you can enter an address on the Checkout page to automatically calculate tax based on the address. Test the tax behavior using the addresses where you registered, as well as the store address.

Certain product tax codes, such as [most services](https://docs.stripe.com/tax/tax-codes.md?type=services), are taxed at origin (your head office address). Scenarios also exist where [zero tax](https://docs.stripe.com/tax/zero-tax.md) is calculated.

## View tax reports

After you start collecting taxes, the Stripe Tax extension sends the transactions to Stripe Tax. You can then access tax reports and exports in the [Stripe Dashboard](https://dashboard.stripe.com/tax/registrations). Learn more about the types of [tax reports](https://docs.stripe.com/tax/reports.md) available in Stripe Tax.

## Optional: Set up custom tax rates

You can create [tax customizations](https://docs.stripe.com/tax/tax-customizations.md) to override the tax behavior that Stripe Tax applies to various products.

## Optional: Refund taxes

The extension supports refunds, which you can initiate by following the guide for [refunding orders in WooCommerce](https://woocommerce.com/document/woocommerce-refunds/).

Initiating a refund reduces the tax liability, and tools like the [tax obligations monitoring tool](https://docs.stripe.com/tax/monitoring.md#refunds-and-threshold-calculations) automatically update. Refunds don’t refund the Stripe Tax fees.

## See also

- [Test and troubleshoot the extension](https://docs.stripe.com/use-stripe-apps/woocommerce/troubleshooting.md)
