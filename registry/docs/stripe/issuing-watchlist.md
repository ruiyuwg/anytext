# Issuing watchlist

Learn about the Issuing watchlist process and best practices.

Stripe automatically screens Issuing users against US and international sanctions lists. For Issuing, we screen all relevant data. Screening can occur based on events such as:

- Onboarding
- Updates to sanction lists
- Creation or update of cardholders

If automated screening flags a user, Stripe opens a manual review for them. Our team reviews any flagged cardholders, and updates information about these cardholders within 24 hours. During the review, this process might impact your business, and all cards decline authorizations with the `cardholder_verification_required` reason.

## Integrating with watchlist events

Make sure your integration listens to the [issuing\_cardholder.updated](https://docs.stripe.com/api/events/types.md#event_types-issuing_cardholder.updated) [webhook](https://docs.stripe.com/webhooks.md) events. This is how we notify you when an interesting event occurs.

1. When a user creates or updates a cardholder, Stripe updates the [requirements.disabled\_reason](https://docs.stripe.com/api/.md#issuing_cardholder_object-requirements-disabled_reason) to `under_review`. This notifies the user that a screening is underway.

   ```json
   "requirements": {
     "disabled_reason": "under_review",
     "past_due": []
   }
   ```

2. In most cases, we clear the cardholder in a few seconds through our automated review system.

   ```json
   "requirements": {
     "disabled_reason": null,
     "past_due": []
   }
   ```

3. If a cardholder might be on a prohibited persons or companies list, we update the [requirements.disabled\_reason](https://docs.stripe.com/api/.md#issuing_cardholder_object-requirements-disabled_reason) to `listed`. The `past_due` field contains information you need to provide before the cardholder can approve authorizations.

   ```json
   "requirements": {
     "disabled_reason": "listed",
     "past_due": [
       "individual.dob.day",
       "individual.dob.month",
       "individual.dob.year"
     ]
   }
   ```

   In the Dashboard under [Issuing](https://dashboard.stripe.com/issuing/overview) > [Cardholders](https://dashboard.stripe.com/issuing/cardholders), a banner appears at the top of the page reflecting the information in the [requirements.disabled\_reason](https://docs.stripe.com/api/.md#issuing_cardholder_object-requirements-disabled_reason) attribute noted above.
   ![](https://b.stripecdn.com/docs-statics-srv/assets/issuing-watchlist-underreview-banner.b3b04556992422c6614d6227576772f0.png)

   Stripe also sends an email notification to you to provide more information to expedite the verification process. Its a good practice, to monitor the email that you have on file with Stripe.
   ![](https://b.stripecdn.com/docs-statics-srv/assets/issuing-watchlist-review-email.d1a2fe2b3d4dff67bbe2923941dbfe7f.png)

4. Stripe might reject the Cardholder if the user is on a third-party prohibited persons or companies list (such as a financial services provider or a government entity). We update the [requirements.disabled\_reason](https://docs.stripe.com/api/.md#issuing_cardholder_object-requirements-disabled_reason) to `rejected.listed`. Additionally, the [status](https://docs.stripe.com/api/issuing/cardholders/object.md#issuing_cardholder_object-status) will be `blocked`.

   ```json
   "requirements": {
     "disabled_reason": "rejected.listed",
     "past_due": []
   },
   "status": "blocked",
   "type": "individual"
   ```

## Best practices

- Provide the date of birth when creating cardholders. When our systems raise reviews on Issuing Cardholders without a date of birth, analysts must contact the Issuing platform or the cardholder to obtain this information.
- For Issuing cardholders, you can order an optional physical card. Be aware that we only ship a physical card after completing the watchlist screening process at onboarding and determining that it doesn’t hit the watchlist.

## Testing watchlist scenarios

In test mode, Stripe uses specific magic values to simulate different watchlist scenarios:

- **OFAC hit testing**: To test an OFAC watchlist hit, create a cardholder with a date of birth (DOB) of `1900-01-01`. This magic DOB value triggers a simulated OFAC hit, allowing you to test your integration’s handling of watchlist reviews.

This helps you test how your application handles the watchlist review process without needing to use real sanctioned individuals’ information. You can use this to verify:

- Your webhook handling for `issuing_cardholder.updated` events
- Your UI’s response to different `requirements.disabled_reason` values
- Your customer communication flows during the review process

## See also

- [Issuing: Watchlist reviews support](https://support.stripe.com/questions/issuing-watchlist-reviews)
