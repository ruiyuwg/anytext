# Financial Accounts for platforms supportability for connected accounts

Learn how Stripe evaluates connected accounts for Financial Accounts for platforms supportability.

> #### Accounts v2 API compatibility
>
> The Accounts v2 API doesn’t support Financial Accounts workflows. If you have accounts created with Accounts v2, you can use Accounts v1 to manage the `treasury` and `card_issuing` capabilities. For details, see [Use Accounts as customers](https://docs.stripe.com/connect/use-accounts-as-customers.md).

To support Financial Accounts for platforms features, a connected account must be a supportable business and must [fulfill certain requirements](https://docs.stripe.com/financial-accounts/connect/requirements.md). Stripe reviews each connected account using its provided URL and product descriptions to determine whether it meets Fifth Third Bank’s policy standards. Most connected accounts that provide accurate information are supportable without requiring any action.

When a platform requests the `treasury` capability for a connected account, Stripe reviews the account for supportability.

Most supportability reviews complete instantaneously, but some are inconclusive due to insufficient information. To reduce the chance of inconclusive reviews, make sure that your connected account onboarding process collects [valid URLs and comprehensive product descriptions using many sentences](https://docs.stripe.com/financial-accounts/connect/fifth-third.md#request-fifth-third-bank-access-for-new-or-existing-connected-accounts).

## API Visibility

If a connected account has any outstanding Financial Accounts for platforms requirements, they’re visible in the requirements hash as [currently\_due requirements](https://docs.stripe.com/api/accounts/object.md#account_object-requirements-currently_due).

The following example [retrieves information](https://docs.stripe.com/api/capabilities/retrieve.md) about a connected account’s `treasury` capability, including any outstanding `currently_due` requirements.

```curl
curl https://api.stripe.com/v1/accounts/{{CONNECTEDACCOUNT_ID}}/capabilities/treasury \
  -u "<<YOUR_SECRET_KEY>>:"
```

### Supportability statuses in the API

- **Supportable**: If a connected account has no outstanding requirements, and our review determines that its business is supportable, its [capabilities.treasury](https://docs.stripe.com/api/accounts/object.md#account_object-capabilities-treasury) is set to `active`. The account can then access Financial Accounts for platforms features.
- **In Review**: If a connected account has no outstanding requirements for the `treasury` capability, but we’re still evaluating whether its business is supportable, its [capabilities.treasury](https://docs.stripe.com/api/accounts/object.md#account_object-capabilities-treasury) is set to `pending`. Also, the `business_profile.mcc` requirement appears in the capability’s [requirements.pending\_verification](https://docs.stripe.com/api/capabilities/object.md#capability_object-requirements-pending_verification) hash. The account can’t access Financial Accounts for platforms features until Stripe determines that its business is supportable.
- **Unsupportable**: If our review determines that a connected account’s business isn’t supportable, its [capabilities.treasury](https://docs.stripe.com/api/accounts/object.md#account_object-capabilities-treasury) is set to `inactive`. Also, the capability’s `requirements` hash has a [disabled\_reason](https://docs.stripe.com/api/capabilities/object.md#capability_object-requirements-disabled_reason) of `rejected.unsupported_business` and includes the `business_profile.mcc` requirement in its [currently\_due](https://docs.stripe.com/api/accounts/object.md#account_object-requirements-currently_due) hash. The account can’t access Financial Accounts for platforms features.

## Dashboard Visibility

The [Connected accounts](https://docs.stripe.com/connect/dashboard/review-actionable-accounts.md) page in your Dashboard helps you monitor the risk and onboarding status of all of your connected accounts. To identify accounts that require action related to their treasury capability, click **More filters**, then click **+ Treasury capability status**. Select the statuses you want to identify, then click **Apply** to filter the accounts list on that status.

To see what actions an account requires, open its details page by selecting it in the list. Use the **Actions required** list at the top of the Activity section to [address the outstanding requirements](https://docs.stripe.com/connect/dashboard/managing-individual-accounts.md#actions-required). If an account has any outstanding requirements for Financial Accounts for platforms, the treasury capability appears as **Inactive** in the Settings section.

### Supportability statuses in the Dashboard

- **Supportable**: If a connected account has no outstanding requirements, and our review determines that its business is supportable, the treasury capability appears as **Active** in the Settings section of the account details page. No actions for the treasury capability appear in the **Actions required** list. The account can access Financial Accounts for platforms features.
- **In Review**: If a connected account has no outstanding requirements for Financial Accounts for platforms, but we’re still evaluating whether their business is supportable, we display a banner at the top of the account details page. Also, the treasury capability appears as **pending** in the Settings section of the page. Your only action is to monitor the account for the evaluation’s outcome.
- **Unsupportable**: If our review determines that an account conducts a [prohibited or restricted businesses](https://stripe.com/legal/restricted-businesses), a task appears in the **Actions required** list in the Activity section of the account details page. This task outlines the business classification we assigned to the connected account and provides an option to appeal the decision. To appeal, either provide additional business details about the account or confirm that it no longer offers any products or services included in the prohibited and restricted businesses list. If, after your appeal, Stripe determines that the account still conducts a prohibited or restricted business, the treasury capability appears as `inactive` in the Settings section of the account details page. Hovering your cursor over the capability displays a tooltip explaining that the account has been rejected due to its classification as an unsupported business.
