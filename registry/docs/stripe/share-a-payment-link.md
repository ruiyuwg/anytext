# Share a payment link

Share payment links across social media, emails, or your website.

After you create a [payment link](https://docs.stripe.com/payment-links.md), share it with your customers to accept payments without a digital storefront.

## Share your link

#### Dashboard

Use the Dashboard to copy your payment link, and share it online. Click the copy icon next to an existing link on the [Payment Links](https://dashboard.stripe.com/payment-links) page, or go to the payment link’s details page. You can share your payment link multiple times and anywhere online, including:

- Emails
- Text messages
- Social media platforms

#### API

Each payment link contains a [url](https://docs.stripe.com/api/payment_links/payment_links/object.md#payment_link_object-url) that you can share with your customers through email, on social media, with a website link, in an app, or through other channels.

## Generate a QR code

You can create a QR code for a payment link in the Dashboard. Choose an existing link from the **Payment Links** page, or [create a new link](https://dashboard.stripe.com/payment-links/create) and then click **QR code**. Copy or download a PNG image of the QR code.

The QR code doesn’t expire. If you deactivate the underlying payment link, the QR code redirects to an expiration page.

## Embed a button on your site

Turn your payment link into an embeddable buy button to sell a product or subscription from your website. Select an existing link from the **Payment Links** page or create a new link and then click **Buy button**. Copy the code and paste it into your website. To learn more on how to embed and customize a button, see [Create a buy button](https://docs.stripe.com/payment-links/buy-button.md).

## Deactivate a link

#### Dashboard

You can use the Dashboard to deactivate a payment link. For the selected payment link, click the overflow menu (⋯) > **Deactivate**. After you deactivate a link, customers can no longer use it to make a purchase. You can reactivate the payment link through the Payment Links API at any time.

#### API

After you create a payment link, you can’t delete it. You can deactivate a payment link by setting the [active](https://docs.stripe.com/api/payment_links/payment_links/update.md#update_payment_link-active) attribute to `false`. After you deactivate a link, customers can no longer use it to finalize purchases, and are redirected to an expiration page. To reuse a deactivated payment link, set [active](https://docs.stripe.com/api/payment_links/payment_links/update.md#update_payment_link-active) to `true`.
