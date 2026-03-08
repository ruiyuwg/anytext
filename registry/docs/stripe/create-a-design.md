# Create a design

Create and name your bundle design.

To create and name your design in the Issuing Dashboard or API before issuing cards to your cardholders, go directly to the [Designs](https://dashboard.stripe.com/test/issuing/personalization-designs) tab and click on **New design**. The standard option is always available, while the custom option becomes available after you order a custom bundle.

# Dashboard

> This is a Dashboard for when testing-method is without-code. View the full page at https://docs.stripe.com/issuing/cards/physical/create-design?testing-method=without-code.

## Use a standard bundle

1. Visit the [Designs tab](https://dashboard.stripe.com/test/issuing/personalization-designs) in the Issuing Dashboard.
   ![Personalization designs](https://b.stripecdn.com/docs-statics-srv/assets/card-issuing-designs-tab.8005cf6843cfad8a17067f2cb7eef4e3.png)

2. Click **New design** on the upper right and select the **Standard** physical bundle type.

3. Select a white or black card.
   ![Choose a physical bundle](https://b.stripecdn.com/docs-statics-srv/assets/choose-physical-bundle.b72ce7b9da304477e2c8ef84993a5599.png)

4. Upload your card logo. The logo must be in .PNG format, with a legible size of 1000px by 200px. It must be a binary image containing a black logo on a white background with no grayscale.

5. Set your carrier text.
   ![Custom carrier letter](https://b.stripecdn.com/docs-statics-srv/assets/customize-carrier-letter.de2468a680e90b169109fd1c95e1db8d.png)

6. Review the design summary and set a name used to specify the physical bundle when [issuing cards](https://docs.stripe.com/issuing/cards/physical/issue-cards.md) to your cardholders.

7. Click **Submit** to send your [design for review](https://docs.stripe.com/issuing/cards/physical/create-design.md#design-review).

## Use a custom bundle

1. Visit the [Designs tab](https://dashboard.stripe.com/test/issuing/personalization-designs) in the Issuing Dashboard.
   ![Personalization designs](https://b.stripecdn.com/docs-statics-srv/assets/card-issuing-designs-tab.8005cf6843cfad8a17067f2cb7eef4e3.png)

2. Click **New design** on the upper right and select the **Custom** physical bundle type.

3. Select the custom bundle from the drop-down list. Stripe enables visibility of the bundle in the Dashboard after the order has been manufactured and made live. See [Order a custom bundle](https://docs.stripe.com/issuing/cards/physical/order-custom-bundle.md) for more details.

   1. If you’ve chosen to add an additional logo during [personalization](https://docs.stripe.com/issuing/cards/choose-bundle.md#manufacturing-personalization), you’re prompted to upload your card logo next. Ensure the logo is in .PNG format, with a legible size of 1000px by 200px. It must be a binary image containing a black logo on a white background with no grayscale.

   2. If you’ve chosen the standard carrier, you’re prompted to upload your carrier text next.
      ![Custom physical bundle](https://b.stripecdn.com/docs-statics-srv/assets/custom-physical-bundle.a5d0bb3b3206c19d3aba48e3d18f859f.png)

4. Review design summary and set a personalization design name. The personalization design name is used to specify the physical bundle when [issuing cards](https://docs.stripe.com/issuing/cards/physical/issue-cards.md) to your cardholders.
   ![Custom design summary](https://b.stripecdn.com/docs-statics-srv/assets/custom-design-summary.feda6552ffa73fc575d217cf45b03008.png)

5. Click **Submit** to send your design for review. This is only applicable when an additional logo is added on the card or text is added on the standard carriers.

# API

> This is a API for when testing-method is with-code. View the full page at https://docs.stripe.com/issuing/cards/physical/create-design?testing-method=with-code.

## Use a bundle

While we recommend using the Dashboard for managing personalization designs, you can also handle them with the [Personalization Design API](https://docs.stripe.com/api/issuing/personalization_designs.md). Here’s how to create a personalization design using the API:

1. List the physical bundles available to you using the [Physical Bundles API](https://docs.stripe.com/api/issuing/physical_bundles/retrieve.md):

   ```curl
   curl https://api.stripe.com/v1/issuing/physical_bundles \
     -u "<<YOUR_SECRET_KEY>>:"
   ```

   ```json
   "data": [
     {
       id: "ics_Kc3MX9PPsUFFMp",
       object: "issuing.physical_bundle",
       livemode: true,
       name: "US Visa Credit White",
       type: "standard",
       status: "active"
     },
     ...
   ]
   ```

2. Choose a physical bundle from the response and note its `id`. The bundle determines the card’s color.

3. Upload a .PNG file of your card logo using the [Files API](https://docs.stripe.com/api/files/create.md), and specify the purpose as `issuing_logo`:

   ```bash
   curl https://files.stripe.com/v1/files \
     -u <<YOUR_SECRET_KEY>>: \
     -F "file"="@/path/to/a/file.jpg" \
     -F "purpose"="issuing_logo"
   ```

4. [Create a personalization design](https://docs.stripe.com/api/issuing/personalization_designs/create.md) with the physical bundle ID and the file ID from the previous steps. You can also supply carrier text here.

   ```curl
   curl https://api.stripe.com/v1/issuing/personalization_designs \
     -u "<<YOUR_SECRET_KEY>>:" \
     -d physical_bundle=ics_Kc3MX9PPsUFFMp \
     -d card_logo="{{FILE_ID}}" \
     -d "carrier_text[header_title]"=Hello
   ```

5. After creating your personalization design, it’s sent for review.

## Design review

Stripe reviews all logos and carrier text to make sure they comply with the guidelines set by our partner networks. We approve almost all designs, but we might reject yours if it contains:

- The name of another legal entity.
- A reference to a different network (for example, Mastercard if you’re issuing on Visa).
- The name of a geographic location.
- A reference to non-fiat currency (for example, cryptocurrency).
- Advertising or promotional language.
- Inappropriate text or imagery.

## Design rejection

If Stripe rejects your design, we notify you by email within 2 business days and ask you to resubmit an updated design. When Stripe approves your design, we submit any cards that you issued using the design to the vendor. To issue cards with your newly created personalization design, see [Issue cards](https://docs.stripe.com/issuing/cards/physical/issue-cards.md).
