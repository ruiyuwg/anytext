# US tax reporting for Connect platforms

Learn how to report the annual payments for your US-based connected accounts.

Stripe [Connect](https://stripe.com/connect) allows platforms to provide a seamless, end-to-end payment service for their connected accounts. This service may come with certain responsibilities, including tax information reporting.

> #### Getting your 1099 Forms
>
> If you work for a platform that pays you through Stripe and want to learn about your 1099 forms and how to get them, see [1099 tax forms](https://support.stripe.com/express/topics/1099-tax-forms) on the Stripe Support site.

Stripe issues 1099-K forms for connected accounts where Stripe controls the pricing or for transactions where the connected account pays fees directly to Stripe. For all other transactions where the platform controls the pricing, the platform is responsible for filing any relevant 1099 forms.

In other words, Stripe issues 1099-K forms for your connected accounts that have transactions where [`controller.fees.payer`](https://docs.stripe.com/api/accounts/object.md#account_object-controller-fees-payer) equals `account` or where [`controller.fees.payer`](https://docs.stripe.com/api/accounts/object.md#account_object-controller-fees-payer) equals `application_unified_accounts_beta` and the connected account pays the processing fees.

Stripe doesn’t issue a 1099-K to your connected account in the following scenarios:

- Where [controller.fees.payer](https://docs.stripe.com/api/accounts/object.md#account_object-controller-fees-payer) equals `application` or `application_express` or `application_custom`

Consider issuing a Form 1099 to report income and payment transactions. There are several types of 1099 forms, and the applicable form depends on the type of payments you make to your connected account.

> Stripe recommends that you consult a tax advisor to determine your tax filing and reporting requirements.

## 1099-NEC

Use the [1099-NEC](https://support.stripe.com/questions/intro-to-1099-nec-tax-forms-for-platforms-and-marketplaces) form to report non-employee compensation.

The account must meet all of the following criteria in the previous calendar year:

- Based in the US or a US taxpayer
- $600 or more in payments

## 1099-MISC

Use the [1099-MISC](https://support.stripe.com/questions/intro-to-1099-misc-tax-forms-for-platforms-and-marketplaces) form to report other forms of payments made in the course of your business.

The account must meet all of the following criteria in the previous calendar year:

- Based in the US or a US taxpayer
- $600 or more in payments or $10 in royalties

## 1099-K

Use the [1099-K](https://support.stripe.com/questions/intro-to-1099-k-tax-forms-for-platforms-and-marketplaces) form to report payment transactions.

The account must meet all of the following criteria in the previous calendar year:

- Based in the US or a US taxpayer
- More than $20,000 in gross volume
- More than 200 transactions

## See also

- [Get started with the Stripe 1099 tax reporting product](https://docs.stripe.com/connect/get-started-tax-reporting.md)
- [Configure your tax form settings](https://docs.stripe.com/connect/tax-form-settings.md)

> Looking for help calculating sales tax, VAT, or GST? Check out [Stripe Tax](https://docs.stripe.com/tax.md).
