# Replacement cards

Learn how to replace cards that are expired, damaged, lost, or stolen.

You can replace cards that are expired, damaged, lost, or stolen. The process differs slightly for each kind of card replacement.

- **Card expired**: The card has reached its expiration date and is no longer valid.
- **Card damaged**: The cardholder requests a new card for a reason other than lost or stolen (for example, a physical card’s chip no longer reads properly).
- **Card lost/stolen**: The card is reported lost or stolen and a new card number, expiry, security code are issued.

Depending on the scenario, the replacement card might have a different card number, expiry, or security code from the original:

| Scenario             | New card number | New security code | New expiry |
| -------------------- | --------------- | ----------------- | ---------- |
| **Card expired**     | No              | Yes               | Yes        |
| **Card damaged**     | No              | Yes               | Yes        |
| **Card lost/stolen** | Yes             | Yes               | Yes        |

## Replacements for expired or damaged cards

Physical cards can get damaged, and both physical cards and virtual cards expire, but you can create replacement cards that have the same card number. The cardholder can continue to use the original card before the replacement card is activated, as long as the card isn’t too damaged or already expired. Activating the replacement card cancels the original card if it isn’t already canceled.

> Stripe doesn’t automatically replace expiring cards. You’re responsible for identifying cards that are approaching their expiration date, canceling them, and creating replacement cards.

You can use the [Dashboard](https://dashboard.stripe.com/issuing/cards) or the [Create a card](https://docs.stripe.com/api/issuing/cards.md) endpoint to replace an expired or damaged card.

# Dashboard

> This is a Dashboard for when testing-method is without-code. View the full page at https://docs.stripe.com/issuing/cards/replacements?testing-method=without-code.

1. Visit the [Cards tab](https://dashboard.stripe.com/issuing/cards) in the Issuing Dashboard.
   ![Issuing cards page](https://b.stripecdn.com/docs-statics-srv/assets/cards-page.e8e9728de4c5cbf6bf3b557dc634ed56.png)

2. Search for the card you want to replace and click it to view its details.
   ![Issuing card details sidebar](https://b.stripecdn.com/docs-statics-srv/assets/card-details.46b3256598769441da31758fd9dba482.png)

3. Click **Replace card** in the sidebar on the right.

4. Select **Your card is expiring or expired** or **Your card is damaged** and click **Continue** if you’re replacing a physical card, or **Replace card** if you’re replacing a virtual card.
   ![Issuing card replace modal](https://b.stripecdn.com/docs-statics-srv/assets/replace-card-modal.05577a2adead1b5c67e9e2edb9ac20b0.png)

5. If the card you’re replacing is a physical card, enter the shipping details for the replacement card and click **Replace card**.
   ![Issuing card replace modal shipping details form](https://b.stripecdn.com/docs-statics-srv/assets/replace-card-shipping-details.cf8cae31bb586a5f68020f9d6ec4412f.png)

# API

> This is a API for when testing-method is with-code. View the full page at https://docs.stripe.com/issuing/cards/replacements?testing-method=with-code.

To create a replacement card for an expired or damaged card, create a [Card](https://docs.stripe.com/api.md#issuing_card_object) with `replacement_for` using the expired or damaged `Card` ID and `replacement_reason` set to `expired` or `damaged`.

```curl
curl https://api.stripe.com/v1/issuing/cards \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d cardholder="{{ISSUINGCARDHOLDER_ID}}" \
  -d currency=usd \
  -d type=virtual \
  -d replacement_for="{{ISSUINGCARD_ID}}" \
  -d replacement_reason=expired
```

## Replacements for lost or stolen cards

Lost or stolen cards get new card numbers for security reasons. We need to cancel the original cards before we can create the replacement card.

# Dashboard

> This is a Dashboard for when testing-method is without-code. View the full page at https://docs.stripe.com/issuing/cards/replacements?testing-method=without-code.

1. Visit the [Cards tab](https://dashboard.stripe.com/issuing/cards) in the Issuing Dashboard.
   ![Issuing cards page](https://b.stripecdn.com/docs-statics-srv/assets/cards-page.e8e9728de4c5cbf6bf3b557dc634ed56.png)

2. Search for the card you want to replace and click it to view its details.
   ![Issuing card details sidebar](https://b.stripecdn.com/docs-statics-srv/assets/card-details.46b3256598769441da31758fd9dba482.png)

3. Click **Replace card** in the sidebar on the right.

4. Select **Your card is lost** or **Your card was stolen or used fraudulently** and click **Continue** if you’re replacing a physical card, or **Replace card** if you’re replacing a virtual card.
   ![Issuing card replace modal](https://b.stripecdn.com/docs-statics-srv/assets/replace-card-modal.05577a2adead1b5c67e9e2edb9ac20b0.png)

5. If the card you’re replacing is a physical card, enter the shipping details for the replacement card and click **Replace card**.
   ![Issuing card replace modal shipping details form](https://b.stripecdn.com/docs-statics-srv/assets/replace-card-shipping-details.cf8cae31bb586a5f68020f9d6ec4412f.png)

# API

> This is a API for when testing-method is with-code. View the full page at https://docs.stripe.com/issuing/cards/replacements?testing-method=with-code.

To create a replacement card for a lost or stolen card:

1. Cancel the lost or stolen card by using the [update card](https://docs.stripe.com/api.md#update_issuing_card) endpoint to set its `status` to `canceled` and its `cancellation_reason` to `lost` or `stolen`.

2. Create a [Card](https://docs.stripe.com/api.md#issuing_card_object) with `replacement_for` using the lost or stolen `Card` ID and `replacement_reason` set to `lost` or `stolen`.

```curl
curl https://api.stripe.com/v1/issuing/cards/{{ISSUINGCARD_ID}} \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d status=canceled \
  -d cancellation_reason=lost
```

```curl
curl https://api.stripe.com/v1/issuing/cards \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d cardholder="{{ISSUINGCARDHOLDER_ID}}" \
  -d currency=usd \
  -d type=virtual \
  -d replacement_for="{{ISSUINGCARD_ID}}" \
  -d replacement_reason=lost
```

## All replacements

All replacement cards have renewed expiration dates and new security codes. Authorizations made on the original cards are migrated to the replacements, but might still clear on the original cards. Like the originals, replacement cards must be activated before use.

## Card-on-file updating

For many of our card programs, Stripe automatically updates the card details on file with acquiring merchants, even when a card is completely reissued. This feature offers several benefits, including saving your cardholders the hassle of manually re-entering card details when their cards expire.

### Card expired or damaged

Updating the payment details for a card that has been replaced due to expiration or damage ensures that recurring payments and stored payment details continue to function. This enables cardholders to continue making payments when they replace a card.

### Card lost or stolen

Stripe doesn’t update businesses with the new card number, expiry, and security code of a replacement card if the old card is marked as being lost or stolen.
