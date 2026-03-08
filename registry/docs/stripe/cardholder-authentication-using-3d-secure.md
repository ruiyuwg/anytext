# Cardholder authentication using 3D Secure

Learn about 3D Secure, an additional layer of authentication used by businesses to combat fraud.

3D Secure (3DS) uses multi-factor authentication to reduce fraud for online transactions where a card isn’t physically present. 3DS is triggered by businesses in online checkout flows, and requires multi-factor authentication (usually through SMS or email-based one-time passcode that Stripe sends) to complete.

## Example of a 3D Secure flow

![A Stripe checkout page with the payment information filled out, including the Pay button](https://b.stripecdn.com/docs-statics-srv/assets/3ds-flow-1-checkout-page.039294e0dee3a6dede8ea8a32185aae5.png)

Step 1: The customer enters their card details.
![A dialog that displays a loading animation after clicking the Pay button, which now says Processing.](https://b.stripecdn.com/docs-statics-srv/assets/3ds-flow-3-challenge-flow.9052a220f336bbdb75a51799622c6477.png)

Step 2: The acquirer requests 3DS verification. If the Stripe issuing card is enrolled in 3DS, the cardholder sees a prompt to complete an additional verification step.

As shown above, the additional 3D Secure step at checkout typically involves showing the cardholder an authentication page from their Issuer, where the cardholder sees a prompt to enter a verification code sent to their phone or email.

## Why 3DS is important

In most cases, businesses are responsible for online fraud losses in card-not-present transactions. To protect themselves, businesses can trigger 3DS verification to reduce the chances of accepting a fraudulent transaction. Even if a business triggers 3DS verification, the cardholder only needs to complete the step if your Stripe cards are enrolled in 3DS. In the UK and EU, 3DS is the standard for implementing the regulatory requirements of [Strong Customer Authentication](https://docs.stripe.com/strong-customer-authentication.md) (SCA).

## Liability shift

When a business triggers 3DS verification, liability for fraud shifts from the business to the issuer in most cases. This applies whether or not your Issuing cards are enrolled in 3DS, meaning issuers can take on increased liability without any additional verification.

## 3DS enrollment

Depending on your location, 3DS enrollment is either optional and opt-in or required and enabled by default.

### US

3DS enrollment in the US is optional, and your cards aren’t enrolled in 3DS unless you contact support to request enrollment. While enrollment does increase friction for a subset of your cardholder transactions, it helps to significantly reduce the risk of potential losses because of transaction fraud with online, card-not-present transactions. As part of our [best practices](https://docs.stripe.com/issuing/manage-fraud.md) for managing transaction fraud, we recommend enrolling your cards in 3DS early in your Issuing program’s life cycle.

After you request enrollment, we enroll all active cards associated with your account and automatically enroll all cards created going forward.

Cardholders without a phone number or email on file aren’t enrolled in 3DS. After requesting enrollment, add contact information to [Cardholder objects](https://docs.stripe.com/api/issuing/cardholders/object.md) to enroll those cards. Conversely, removing the contact info for a cardholder results in the card being unenrolled from 3DS.

When you update a cardholder’s phone number or email address, we automatically re-enroll the card with the updated contact information. You don’t need to manually re-enroll the card.

### UK and EU

After creation, cards are enrolled in 3DS by default because of local regulations. To allow the implementation of SCA over 3DS and comply with local regulations, all cards issued within the EU and UK require a valid phone number on file for the relevant [cardholder](https://docs.stripe.com/api.md#create_issuing_cardholder).

When you update a cardholder’s phone number or email address, we automatically re-enroll the card with the updated contact information. You don’t need to manually re-enroll the card.

## 3DS authentication

When a 3DS authentication request comes through for your [cardholder](https://docs.stripe.com/api.md#create_issuing_cardholder), Stripe sends them either a text message or an email containing a one-time verification code.

The method of authentication depends on the contact information provided for the cardholder. In the UK and EU markets supported by Stripe Issuing, cardholders must have a phone number on file to authenticate with a one-time text message verification code. In the US, the phone number or email on file will be used to authenticate cardholders, but if both the phone number and email are present, then the phone number will be used for authentication. Otherwise, the authentication request uses whichever contact information is available. To enable us to best secure you and your cardholders, we recommend keeping phone numbers and email addresses up to date for cardholders. This enables us to contact them during authentication. You can update your cardholders’ information by changing the field to its new value through the API or Dashboard.

In the UK and EU, cardholders should see an additional security question. The cardholder sees a list of transactions on the card, and they can select the transactions they recognize. If the cardholder is using the card for the first time, they select the option indicating they don’t recognize any of the presented transactions.
![A dialog showing a sample security question with choices of payment history. The header has a Your Bank placeholder logo and Card Network placeholder logo. The security question says, From the following list please identify a recent payment you've made using this card. There are 5 options with payment information of whether or not the payment was online, the purchase amount, and the merchant name. The last option says None of the above. There is a blurple button at the bottom that says Verify.](https://b.stripecdn.com/docs-statics-srv/assets/3ds-issuing-knowledge-factor-netcetera.37258cc6c8e63cadf3dbb9b22f94d786.png)

The list of transactions the cardholder is presented with.

## Choose the 3D Secure language

The [preferred\_locales](https://docs.stripe.com/api/issuing/cardholders/object.md#issuing_cardholder_object-preferred_locales) field of the Cardholder object determines the display language of the 3DS flow. The default 3DS language is English.

To pick a 3DS language for a cardholder, use the API to set their `preferred_locales` to an array of preferred languages, in order of preference. If you want, you can provide one language only. The supported languages are English (`en`), French (`fr`), German (`de`), Italian (`it`), and Spanish (`es`).

```curl
curl https://api.stripe.com/v1/issuing/cardholders \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d type=individual \
  -d name="Jane D. Rocket" \
  --data-urlencode email="jane@example.com" \
  -d "preferred_locales[]"=fr \
  -d "preferred_locales[]"=en \
  -d "billing[address][line1]"="1234 Main Street" \
  -d "billing[address][city]"="San Francisco" \
  -d "billing[address][state]"=CA \
  -d "billing[address][country]"=US \
  -d "billing[address][postal_code]"=94111
```

In the US, Stripe also supports authentication through a native iOS and Android application. If you want to use this functionality, [please reach out to support](https://support.stripe.com/contact).

Regardless of the authentication method used, if a cardholder can’t complete three consecutive 3DS attempts in a short period of time, it disables 3DS on their cards for 60 minutes.

## Exemptions

Certain types of low-risk payments might be exempt from SCA. Exemptions limit friction for low-risk payments by reducing the frequency of customer authentication. By default, Stripe might claim the following exemptions for 3DS-eligible cards to limit the friction associated with transactions it deems low risk or low value:

| Type                                | Meaning                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| transaction\_risk\_analysis (US only) | An issuer (such as Stripe) can do a real-time risk analysis to determine whether or not to claim a low-risk exemption to a transaction.                                                                                                                                                                                                                                   |
| low\_value\_transaction               | Transactions below 30 GBP/EUR (or equivalent converted amount) are considered “low value” and might be exempt from SCA. If the exemption has been used five times since the cardholder’s last successful authentication or if the sum of previously exempted payments exceeds 100 GBP or EUR, then the exemption doesn’t apply, and the cardholder must be authenticated. |

Acquirers can also request exemptions, and Stripe might honor them. In these scenarios, loss liability stays with the acquirer and doesn’t shift to the issuer.

When an issuer-claimed exemption is applied, the [Authorization object](https://docs.stripe.com/api/issuing/authorizations.md) looks like this:

```json
{
  "object": "issuing.authorization",
  ..."verification_data" : {
    ...
    "authentication_exemption": {
      "type": "low_value_transaction",
      "claimed_by": "issuer"
    },
    ...
  },
  ...
}
```

Conversely, when an acquirer-claimed exemption is applied, the [Authorization object](https://docs.stripe.com/api/issuing/authorizations.md) looks like this:

```json
{
  "object": "issuing.authorization",
  ..."verification_data" : {
    ...
    "authentication_exemption": {
      "type": "low_value_transaction",
      "claimed_by": "acquirer"
    },
    ...
  },
  ...
}
```

If you’re based in the UK or EU and your use case only requires virtual cards, you can contact Stripe Support to discuss whether a Secure Corporate Payment (SCP) exemption is applicable to your program.

## Manage fraud through 3DS

Stripe includes details about a 3DS attempt through the API in the authorization endpoint. Use the `three_d_secure` hash in the [verification\_data](https://docs.stripe.com/api/issuing/authorizations/object.md#issuing_authorization_object-verification_data) hash to determine if an authorization was successfully authenticated. If you maintain your own authorization logic, we suggest using these values as key inputs that determine whether to approve or reject an authorization.

Additionally, if the business didn’t attempt 3DS, the `three_d_secure` field is null. If 3DS was exempted, then the `authentication_exemption` is present and the `three_d_secure` field is null. An authorization can’t contain both `three_d_secure` and `authentication_exemption`.

If the authentication fails, Stripe automatically denies the authorization to protect against fraudulent transactions. No action is required.

You can find guidelines on what the values represent and how you can use them to combat fraud in the table below.

| Result               | Meaning                                                                                                                                                                                                          | Suggested action                                                                       |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| attempt\_acknowledged | The business attempted to authenticate the authorization, but the card isn’t enrolled or couldn’t reach Stripe.                                                                                                  | There is insufficient evidence to determine if the authorization is fraudulent or not. |
| authenticated        | The shopper was successfully verified as the cardholder as they entered the correct verification code sent to their phone. The online purchase was legitimate and not fraudulent.                                | Approve the transaction.                                                               |
| required             | The authorization was declined because regulatory requirements mandated an authentication for this transaction but it wasn’t submitted correctly by the merchant, and they didn’t claim an applicable exemption. | Decline the transaction.                                                               |

## Test 3DS

To test 3D Secure functionality, use the Checkout Sessions API.

The response includes a URL to a Stripe-hosted payment page where you can enter your issued card details to attempt a payment.

3DS testing is only available in livemode. For the following example, replace the API key with your livemode API key.

### Create a Checkout Session

To trigger 3D Secure manually for a Checkout Session, set [payment\_method\_options\[card\]\[request\_three\_d\_secure\]](https://docs.stripe.com/api/checkout/sessions/create.md#create_checkout_session-payment_method_options-card-request_three_d_secure) to `challenge` or `any` in your request.

```curl
curl https://api.stripe.com/v1/checkout/sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d "line_items[0][price_data][currency]"=usd \
  -d "line_items[0][price_data][product_data][name]"="3DS test" \
  -d "line_items[0][price_data][unit_amount]"=1000 \
  -d "line_items[0][quantity]"=1 \
  -d "payment_method_options[card][request_three_d_secure]"=challenge \
  -d mode=payment \
  --data-urlencode success_url="https://example.com/success?session_id={CHECKOUT_SESSION_ID}"
```

This creates a Checkout Session and returns a response containing a URL to a Stripe-hosted payment page. You can access this URL in any browser. Enter your issued card information to attempt a payment and trigger a 3DS challenge.

```json
{
  "id": "cs_live_...",
  "object": "checkout.session",
  "payment_method_options": {
    "card": {
      "request_three_d_secure": "challenge"
    }
  },
  ..."url": "https://checkout.stripe.com/c/pay/cs_live_...",
  ...
}
```

A 3DS challenge still isn’t guaranteed even when you set `request_three_d_secure` to `challenge`. If a challenge doesn’t occur, attempt another purchase with a greater `unit_amount`.
