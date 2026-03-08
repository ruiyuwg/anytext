# Troubleshoot the connector

Learn how to troubleshoot errors with the Stripe Connector for NetSuite.

Use this guide to troubleshoot issues with the Stripe Connector for NetSuite, including identifying and resolving errors when syncing records or loading payment pages.

For further assistance, contact your implementation partner or [Stripe support](https://support.stripe.com/contact/email?topic=third_party_integrations\&subject=%5BStripe%20Connector%20for%20NetSuite%20\(SCN\)%5D).

## Sync records from Stripe to NetSuite

The following table describes data errors you might encounter when syncing records from Stripe to NetSuite. You can view all errors in the connector app’s sync records window.

| Error                                                                                                                                       | Source    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Resolution                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *NetSuite System Error: Unable to find a matching line for sub-list apply with key: \[doc,line] and value: \[12345,null].*                    | NetSuite  | The connector can’t create a record as a payment (sub-list) entry on an existing NetSuite record. For example, the connector can’t create and apply a payment to an existing invoice that’s already paid in full. This error can also occur if the credit memo amount is less than the refund amount, which might happen if tax or another amount modifies the automation setup in NetSuite.                                                                                                                                                                                                                                 | Inspect the NetSuite record in the error to see why the payment entry wasn’t successful. If the reason is still unclear, you can manually create the payment entry to help identify the root cause.                                                                                                                                                                                                              |
| *Please enter values for: \[Field Name].*                                                                                                    | NetSuite  | The connector can’t create or update a NetSuite record because of a missing required field on that record. For example, if the connector tries to create an invoice that requires the `Department` field, NetSuite won’t allow the connector to complete the action until there’s a value for `Department` in the create invoice request.                                                                                                                                                                                                                                                                                    | Add a default value for the field. To do so, go to the **App settings** > **Field mapping** > **Field defaults** page in the connector. The connector uses the default value when creating records of that type. Field defaults use the JSON format.

For example, to add a default value of 2 for `Department` on your invoices, you add the following:

````
invoice: {
   "department_id": 2
}
``` |
| *You have entered an Invalid Field Value [value] for the following field: [field].*                                                         | NetSuite  | The connector can’t create or update a NetSuite record because of one or more invalid field values. This might happen if a field default uses a deleted or unavailable value.

For example, you might have `Class` as a required field for deposits. During onboarding, you add a field default of Corporate with an internal ID of 5 to satisfy the requirement. After some time, the value for Corporate (ID: 5) is deleted. When the connector attempts to create another bank deposit, it fails with the following error message: `You have entered an Invalid Field Value 'Corporate' for the following field: Class` | Modify the default value to use a valid field ID. To do so, go to the **App settings** > **Field mappings** > **Field defaults** page in the connector.                                                                                                                                                                                                                                                          |
| *Invalid record referenced in metadata key `netsuite_metadata_id` (012345).*                                                                | Connector | The connector can’t sync the record because of a deleted NetSuite record that you previously synced or linked. For example, if you link a Stripe refund to a credit memo and then delete the credit memo, you must update the Stripe refund’s metadata key (`netsuite_credit_memo_id`) to point to the correct NetSuite credit memo internal ID.                                                                                                                                                                                                                                                                             | Update the refund metadata key `netsuite_credit_memo_id` to point to the new credit memo internal ID.                                                                                                                                                                                                                                                                                                            |
| *Charge amount 100.0 is different than the amount due on the corresponding invoice. Transaction ID:INV12345 (ID 1234567) amount due: 99.0.* | Connector | The invoice payment exceeds the amount due on the NetSuite invoice. This might happen if the connector incorrectly syncs the Stripe invoice to NetSuite and you haven’t yet set up tax handling. This can also occur if you modify the total on the NetSuite invoice during the period of time between when you sent the invoice and when the customer submitted payment.                                                                                                                                                                                                                                                    | If your connector account isn’t set up to handle taxes, contact your implementation partner for setup. If you manually modified a NetSuite invoice created by the connector, you must update the invoice to use the original amount.                                                                                                                                                                             |

## Sync payouts to NetSuite

The following errors can occur when syncing payouts from Stripe to NetSuite. You can view payout sync errors on the payout details page in the connector app.

### Bank deposit account missing 

The `bank_deposit_account_missing` error code indicates that the connector couldn’t fetch the NetSuite bank deposit account. This happens when the bank account is deleted in NetSuite, the internal ID in connector settings is incorrect, or the Stripe Limited Access role lacks permission to view the account.

To resolve this issue:

1. Log in to your NetSuite account.
1. Navigate to **Lists > Accounting > Accounts**.
1. Verify the bank deposit account exists and note its internal ID.
1. Check that the **Stripe Limited Access** role has permission to view the account.
1. In the Stripe Connector for NetSuite app, go to **App settings**.
1. Navigate to the **Account Mapping** tab and update the bank deposit account mapping with the correct internal ID.

### Unsynced transactions found 

The `inventorying_waiting_on_child_records` error code indicates that one or more transactions in the payout haven’t synced to NetSuite yet. The payout deposit can’t be created until all associated transactions sync successfully. This is a waiting state, not necessarily an error.

To resolve this issue:

1. In the connector app, navigate to the payout details page.
1. Review the list of transactions with sync issues.
1. For each unsynced transaction, check its sync status and error message.
1. Resolve any errors preventing the sync (such as missing customer or account mapping issues).
1. Retry the sync if needed. After all transactions sync, the payout deposit automatically proceeds.

### NetSuite account mapping not set 

The `missing_netsuite_account_mapping` error code indicates that a required NetSuite account mapping isn’t configured. The error message specifies which account type is missing (for example, income, fee, refund, or adjustment accounts).

To resolve this issue:

1. Review the specific error message to identify which account mapping is missing.
1. In the connector app, go to **App settings** > **Accounts mapping**.
1. Configure the required account mapping and save your changes.
1. Retry the payout sync.

### NetSuite bank deposit account not set 

The `payout_currency_account_missing` indicates that no bank deposit account is configured for this payout’s currency. Each currency you receive payouts in (USD, EUR, GBP, and so on) requires a corresponding bank deposit account.

To resolve this issue:

1. In the connector app, go to **App settings** > **Accounts mapping**.
1. Find the **Bank deposit accounts** section.
1. Add a bank deposit account mapping for the payout’s currency.
1. Save your changes and retry the payout sync.

### NetSuite subsidiary unavailable 

The `subsidary_not_found_likely_permission_issue` error code indicates that the connector can’t access the NetSuite subsidiary. This is most commonly caused by the Stripe Limited Access role lacking permission to view subsidiaries, the subsidiary record being deleted or inactivated, or no subsidiaries being configured on the bank deposit account.

To resolve this issue:

1. Log in to NetSuite as an administrator and navigate to **Setup** > **Users/Roles** > **Manage Roles**.
1. Edit the Stripe Limited Access role.
1. Under the **Subsidiaries** tab, make sure the role has access to all required subsidiaries.
1. Verify the **Lists** > **Subsidiaries** permission is set to at least View.
1. Save the role changes and retry the payout sync.

### NetSuite subsidiary search failed 

The `subsidary_search_failed` error code indicates that the connector encountered an error while searching for child subsidiaries in NetSuite. This typically indicates a network timeout, rate limiting, or that the Stripe Limited Access role lacks permission to perform subsidiary searches.

To resolve this issue:

1. Wait a few minutes and retry the payout sync.
1. If the error persists, log in to NetSuite as an administrator and navigate to **Setup** > **Users/Roles** > **Manage Roles**.
1. Verify the Stripe Limited Access role has **Lists** > **Subsidiaries** permission set to Full and **Reports** > **Search** permission enabled.
1. Check that subsidiaries are properly configured on the bank deposit account.
1. Contact [Stripe support](https://support.stripe.com/contact/email?topic=third_party_integrations&subject=%5BStripe%20Connector%20for%20NetSuite%20\(SCN\)%5D) if the issue continues.

### NetSuite undeposited funds account unavailable 

The `undep_funds_account_fetch_error` error code indicates that the connector couldn’t fetch the undeposited funds account from NetSuite. This can happen due to network issues, or permission issues accessing the account.

To resolve this issue:

1. Log in to NetSuite and navigate to **Lists** > **Accounting** > **Accounts**.
1. Search for your undeposited funds account and verify it exists and is active.
1. Check that the Stripe Limited Access role has permission to view the account.
1. In the connector app, go to **App settings** > **Accounts mapping** and update the undeposited funds account mapping if needed.
1. Retry the payout sync.

### NetSuite undeposited funds account not set 

The `undep_funds_account_not_found` error code indicates that no undeposited funds account is configured in your connector settings, or the configured account mapping is empty. This account is required for processing payout deposits.

To resolve this issue:

1. In the connector app, go to **App settings** > **Accounts mapping**.
1. Find the **Undeposited Funds Account** setting.
1. Select the appropriate undeposited funds account from your NetSuite chart of accounts.
1. Save your changes and retry the payout sync.

### Temporary NetSuite error 

The `transient_netsuite_error` error code indicates that a temporary error occurred while communicating with NetSuite, such as a network timeout, rate limiting, or temporary unavailability. The connector automatically retries these operations.

To resolve this issue:

No action required. The connector automatically retries with exponential backoff. If the error persists for more than 24 hours, contact [Stripe support](https://support.stripe.com/contact/email?topic=third_party_integrations&subject=%5BStripe%20Connector%20for%20NetSuite%20\(SCN\)%5D).

### Invalid transactions found 

The `validating_waiting_on_child_records` error code indicates that one or more transactions in the payout failed validation checks. The payout deposit can’t be created until you resolve all validation errors. This is a waiting state while you fix the underlying transaction issues.

To resolve this issue:

1. In the connector app, navigate to the payout details page.
1. Review the list of transactions with validation errors.
1. Each transaction shows its specific validation error (for example, amount mismatch, already deposited, deleted record, or invalid subsidiary).
1. Resolve each validation error following the guidance in the [Payout transaction validation](https://docs.stripe.com/use-stripe-apps/netsuite/error-resolution.md#payout-transaction-validation) section.
1. After you resolve all validation errors, the payout deposit automatically proceeds.

## Payout transaction validation

The following validation errors can occur for individual transactions within a payout. Each transaction in a payout is validated before the deposit can be created. You can view these errors on the payout details page in the connector app.

### Already deposited 

The `already_deposited` error code indicates that the NetSuite record (Cash Sale, Customer Payment, and so on) has a status of Deposited, meaning it’s already included in a manually created NetSuite bank deposit, or the payment record itself has been updated to a different GL account than `Undeposited Funds`. NetSuite doesn’t allow the same record to be deposited twice.

To resolve this issue:

1. Log in to your NetSuite account.
1. Navigate to one of the `already_deposited` customer payments.
1. Verify that the payment’s account is set to **Undeposited Funds**.
 - If yes, check the **Deposit ID** field to find the bank deposit that it has been manually included in.
   - Navigate to this bank deposit and remove this transaction from the bank deposit.
 - If no, update the account on the customer payment to **Undeposited Funds**.
1. Retry the payout sync.
1. If the record was correctly deposited in a previous payout:
 - The Stripe transaction might need to be excluded from payout syncing.
 - Contact [Stripe support](https://support.stripe.com/contact/email?topic=third_party_integrations&subject=%5BStripe%20Connector%20for%20NetSuite%20\(SCN\)%5D) for assistance reconciling.

### NetSuite record deleted 

The `deleted_netsuite_record` error code indicates that the NetSuite record linked to this Stripe transaction is deleted, inactivated, or can’t be found. This can happen if someone manually deleted the record, a script or workflow deleted it, the record is in a different subsidiary, or the record is voided.

To resolve this issue:

1. Log in to NetSuite and check if the record is intentionally deleted by reviewing System Notes or audit trails.
1. If the deletion is unintentional, manually recreate the record in NetSuite with the correct amount and details.
1. Contact [Stripe support](https://support.stripe.com/contact/email?topic=third_party_integrations&subject=%5BStripe%20Connector%20for%20NetSuite%20\(SCN\)%5D) to relink the Stripe transaction to the correct NetSuite record.
1. Retry the payout sync.

### NetSuite record already linked to another transaction 

The `duplicate_netsuite_record_in_payout` error code indicates that the same NetSuite record internal ID is linked to multiple Stripe transactions within this payout. Each Stripe transaction must be linked to a unique NetSuite record. This typically happens when a record is manually linked incorrectly or duplicate syncs create duplicate associations. The error message shows which Stripe resource ID conflicts and the shared NetSuite record ID.

To resolve this issue:

1. Review the error message to identify the conflicting Stripe transaction and shared NetSuite record ID.
1. Determine which Stripe transaction should remain linked to the existing NetSuite record.
1. For the other transactions:
 - Create new NetSuite records in NetSuite matching the Stripe transaction details.
1. Use the manual override tool in the SCN app drawer to link the transaction to the correct NetSuite record.
1. If this doesn’t work, contact [Stripe support](https://support.stripe.com/contact/email?topic=third_party_integrations&subject=%5BStripe%20Connector%20for%20NetSuite%20\(SCN\)%5D) to update the record linkages.
1. Retry the payout sync.

### Invalid subsidiary 

The `invalid_subsidiary` error code indicates that the subsidiary on the NetSuite record doesn’t match the valid subsidiaries for the bank deposit account. This can happen with multi-subsidiary NetSuite accounts when the record is created under a different subsidiary, the bank deposit account’s subsidiary configuration changes, or a workflow modifies the record’s subsidiary.

To resolve this issue:

1. Log in to NetSuite and find the NetSuite record linked to this transaction.
1. Check the **Subsidiary** field on the record.
1. Compare it to the subsidiaries configured on your bank deposit account.
1. Either edit the NetSuite record to use a valid subsidiary, or update the bank deposit account to include this subsidiary.
1. Changing subsidiaries on records might have accounting implications. Consult your accounting team.
1. Retry the payout sync.

### Undeposited funds account mismatch 

The `undep_funds_account_mismatch` error code indicates the undeposited funds account on the NetSuite record doesn’t match the account configured in your connector settings. All records in a payout deposit must post to the same undeposited funds account for the deposit to balance correctly.

To resolve this issue:

1. Log in to NetSuite and find the NetSuite record linked to this transaction.
1. Check the **Account** field on the record’s line item.
1. Compare it to the undeposited funds account in your connector settings.
1. Either edit the NetSuite record to use the correct undeposited funds account, or update your connector settings to match the account used on records.
1. Changing accounts on records might require journal entries to correct. Consult your accounting team.
1. Retry the payout sync.

### Transaction amount mismatch 

The `unequal_amounts` error code indicates that the transaction amount in Stripe doesn’t match the amount on the linked NetSuite record. The amounts must match exactly for the payout deposit to balance. Common causes include manual edits to the NetSuite record amount, workflows or scripts that modify amounts, currency conversion differences, and tax or fee adjustments applied in NetSuite.

To resolve this issue:

1. In the connector app, note the exact amount from the Stripe transaction.
1. Log in to NetSuite and find the NetSuite record linked to this transaction.
1. Compare the **Total** or **Amount** field with the Stripe amount.
1. Identify the source of the discrepancy by checking System Notes for manual edits, or reviewing workflow and script logs for automated changes.
1. Either correct the NetSuite record to match the Stripe amount, or if the NetSuite amount is intentionally different, contact [Stripe support](https://support.stripe.com/contact/email?topic=third_party_integrations&subject=%5BStripe%20Connector%20for%20NetSuite%20\(SCN\)%5D) for guidance.
1. Retry the payout sync.

### Deposit search failed 

The `deposit_search_failed` error code indicates that the connector couldn’t search for deposit records in NetSuite to verify if a record is already deposited. This can be caused by permission issues or connectivity problems.

To resolve this issue:

1. Log in to NetSuite as an administrator and navigate to **Setup** > **Users/Roles** > **Manage Roles**.
1. Edit the Stripe Limited Access role.
1. Verify the role has **Transactions** > **Make Deposits** permission set to at least View.
1. Check that **Reports** > **Search** permission is enabled.
1. Retry the payout sync. If the error persists, contact [Stripe support](https://support.stripe.com/contact/email?topic=third_party_integrations&subject=%5BStripe%20Connector%20for%20NetSuite%20\(SCN\)%5D).

### Other payout errors

If you encounter any of the following error codes, they indicate internal issues that the connector will either automatically retry or that require Stripe support to resolve:

- `unexpected_breakage_error`: An unexpected internal error occurred.
- `unexpected_subsidiary_initialization_error`: An error occurred while initializing subsidiary data.
- `multiple_successful_translations_found`: A data integrity issue where the same transaction was synced multiple times.

For these errors, contact [Stripe support](https://support.stripe.com/contact/email?topic=third_party_integrations&subject=%5BStripe%20Connector%20for%20NetSuite%20\(SCN\)%5D) with your payout ID (for example, `po_xxx`) and the error code.

## Load invoice or customer payment pages

The following table describes errors you might encounter when attempting to load an invoice payment page or a customer payment page. You can view all errors in the connector app’s sync records window.

| Error                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `scn_account_disabled`                                                     | Your Stripe Connector for NetSuite integration isn’t turned on. To turn it on, go to the app settings, and select **Turn on**.                                                                                                                                                                                                                                                                                                                                  |
| `scn_amount_due`                                                           | The `Amount Due` field is required on a NetSuite invoice form. You can verify that **Show** is selected for the `Amount Due` field by navigating from **Customization** > **Forms** > **Transaction Forms** to the NetSuite invoice record form. Edit the form under the **Screen Fields** sublist.                                                                                                                                                             |
| `scn_amount_too_large`                                                     | The amount due is greater than the maximum amount allowed. Use a lower amount and try again.                                                                                                                                                                                                                                                                                                                                                                    |
| `scn_amount_too_small`                                                     | The amount due is less than the minimum amount allowed. Use a higher amount and try again.                                                                                                                                                                                                                                                                                                                                                                      |
| `scn_currency_not_found`                                                   | The NetSuite invoice record or customer record doesn’t have a set currency.                                                                                                                                                                                                                                                                                                                                                                                     |
| `scn_duplicate_key`                                                        | Two processes attempted to create a [Checkout Session](https://docs.stripe.com/api/checkout/sessions.md) at the same time. Try again.                                                                                                                                                                                                                                                                                                                           |
| `scn_invalid_argument`                                                     | The NetSuite customer wasn’t found. Stripe blocked creating a [Checkout Session](https://docs.stripe.com/api/checkout/sessions.md).                                                                                                                                                                                                                                                                                                                             |
| `scn_invalid_customer_record`                                              | The customer record isn’t valid because the customer might be inactive, have an invalid obfuscation signature, or be missing the customer payment page custom field.                                                                                                                                                                                                                                                                                            |
| `scn_invalid_internal_id`                                                  | The internal ID value is incorrect. This error often means the formula is misconfigured and there’s a trailing character or symbol at the end of the URL. For example, a `)`. Check the URL for any trailing characters or symbols, and provide a positive numeric value.                                                                                                                                                                                       |
| `scn_invalid_livemode_value`                                               | The NetSuite bundle live mode value is incorrect.                                                                                                                                                                                                                                                                                                                                                                                                               |
| `scn_invalid_merchant_account`                                             | Stripe couldn’t find an account configuration for the business and live mode combination. This can occur if the business doesn’t exist or if the business isn’t finished with onboarding to the connector.                                                                                                                                                                                                                                                      |
| `scn_invalid_payment_link_resource`                                        | The resource for the payment link is invalid because the record is either a sales order or an invoice with a zero balance.                                                                                                                                                                                                                                                                                                                                      |
| `scn_line_amount_too_large`                                                | The line item amount exceeds the maximum allowed. Use a lower line item amount and try again.                                                                                                                                                                                                                                                                                                                                                                   |
| `scn_link_invalidated_by_merchant`                                         | This payment link is no longer valid. The business closed the corresponding invoice, for example by applying a credit memo.                                                                                                                                                                                                                                                                                                                                     |
| `scn_invalid_record_type`                                                  | You attempted to create a payment link from a NetSuite record that isn’t an invoice or sales order, which isn’t supported.                                                                                                                                                                                                                                                                                                                                      |
| `scn_minimum_balance_not_met`                                              | You attempted to create a customer payment page for a customer with a balance that’s less than the minimum payment amount (50 cents USD).                                                                                                                                                                                                                                                                                                                       |
| `scn_missing_amount`                                                       | The invoice is missing the “Amount Due” field. Enable this on all custom invoice forms:
- Go to **Customization > Forms > Transaction Forms**, and filter for **Invoice type**.
- Edit all custom invoice forms (those with **Edit** option).
- Look under the **Screen Fields** tab. Make sure you enable **Amount due** under **Show**.
- If no custom form exists, create one by clicking **Customize** on the preferred form.
- Save all changes. |
| `scn_no_customer_balance`                                                  | The NetSuite customer doesn’t have a balance.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `scn_no_payable_balance`                                                   | The NetSuite invoice has no payable balance. This payment link is no longer valid.                                                                                                                                                                                                                                                                                                                                                                              |
| `scn_no_guid`                                                              | The payment link structure is invalid. The payment link must have a GUID and follow this structure: `/payment/{{{merchant}}}/live/invoice/{{{guid}}}`.                                                                                                                                                                                                                                                                                                          |
| `scn_no_id`                                                                | The payment link structure is invalid. The GUID must have exactly two parts separated by an underscore. For example, `F1783B96F2111D47E053972C0C0AAEB5_1234567`.                                                                                                                                                                                                                                                                                                |
| `scn_no_payment_methods_available`                                         | There are no valid payment method types for the Checkout session.                                                                                                                                                                                                                                                                                                                                                                                               |
| `scn_no_resource_lock`                                                     | A resource lock could not be acquired, the resource is likely currently being modified by another process. Try again later.                                                                                                                                                                                                                                                                                                                                     |
| `scn_ns_concurrent_request_limit_exceeded`                                 | All NetSuite connections are being used and the request was limited. Try again later.                                                                                                                                                                                                                                                                                                                                                                           |
| `scn_ns_data_center_not_found`                                             | A NetSuite connection URL was not found. Check your account configuration and try again.                                                                                                                                                                                                                                                                                                                                                                        |
| `scn_ns_insufficient_permission`                                           | The connector doesn’t have the required permissions in NetSuite to perform this action. Grant the necessary permissions to the **Stripe Limited Access** role in NetSuite.                                                                                                                                                                                                                                                                                      |
| `scn_ns_invalid_login_attempt`                                             | Failed to connect to NetSuite. Check your account credentials and try again. This error can also occur intermittently with correct credentials.                                                                                                                                                                                                                                                                                                                 |
| `scn_ns_record_changed`                                                    | The record was modified concurrently by another process. Try again later.                                                                                                                                                                                                                                                                                                                                                                                       |
| `scn_ns_record_validation_error`                                           | A NetSuite record validation error occurred. This typically means a required field is missing or has an invalid value. Check the NetSuite record configuration and field defaults in the Connector app settings.                                                                                                                                                                                                                                                |
| `scn_ns_unexpected_error`                                                  | An unexpected error occurred within NetSuite. Try again later.                                                                                                                                                                                                                                                                                                                                                                                                  |
| `scn_payment_links_not_enabled` or `scn_customer_payment_page_not_enabled` | The corresponding customer payment page or invoice payment page feature isn’t enabled on this account. Stripe blocked creating a [Checkout Session](https://docs.stripe.com/api/checkout/sessions.md).                                                                                                                                                                                                                                                          |
| `scn_recent_payment_found`                                                 | The customer payment page was used to submit a successful payment within the past 24 hours. Only one payment is allowed per day.                                                                                                                                                                                                                                                                                                                                |
| `scn_record_not_found`                                                     | Stripe uses the internal ID provided in a URL to search NetSuite for the invoice associated with a payment link. This error can occur if:
- An invoice record with the provided internal ID doesn’t exist
- The invoice record is missing a GUID in the `custbody_stripe_payment_link_guid` custom field
- The GUID on the invoice record doesn’t match the GUID in the payment link URL                                                                  |
| `scn_too_many_parts`                                                       | The payment link structure is invalid. The GUID must have exactly two parts separated by an underscore. For example, `F1783B96F2111D47E053972C0C0AAEB5_1234567`.                                                                                                                                                                                                                                                                                                |
| `scn_unknown_error`                                                        | An unknown error occurred. Contact [Stripe support](https://support.stripe.com/contact/email?topic=third_party_integrations&subject=%5BStripe%20Connector%20for%20NetSuite%20\(SCN\)%5D).                                                                                                                                                                                                                                                                       |
| `scn_unsupported_record_type`                                              | You attempted to create a payment link from a NetSuite sales order, which isn’t supported.                                                                                                                                                                                                                                                                                                                                                                      |

## Duplicate payments

Stripe and NetSuite handle duplicate payments differently. While Stripe allows overpayment of an invoice, NetSuite returns an error if a customer attempts to make a payment on a fully paid invoice. By default, if a duplicate payment occurs in Stripe, the connector won’t sync the payment because NetSuite doesn’t allow a second payment.

If a duplicate payment causes an error when the connector attempts to reconcile the payout during [deposit automation](https://docs.stripe.com/use-stripe-apps/netsuite/deposit-automation.md), you can fix the issue by manually removing the first payment from the invoice to allow the second payment.

You can also allow the connector to handle duplicate payments for you. If you have a NetSuite invoice that’s fully paid, the connector brings over duplicate payments as unapplied payments in NetSuite. The unapplied payment includes the following memo: `Stripe Payment Error: could not apply to invoice XYZ.` You can then use these unapplied payments on another invoice, or refund the payments manually in Stripe. To search for duplicate payments in NetSuite, create a saved search using the memo as your criteria.

You can enable the connector to handle duplicate payments in the following ways:

- Allow all duplicate payments in the connector by default. To do so, go to your connector settings and enable **Allow duplicate invoice payments** in your Stripe app settings. Contact your implementation partner to understand all accounting and technical implementations before they enable this feature for you.

- Using the Stripe API, add the `netsuite_allow_duplicate: true` field in the metadata of a duplicate Stripe charge.

## Stripe payment link fields

Make sure to configure the following fields correctly.

| Field                         | Description                                                                                                                                                                 |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Currency                      | This field is mandatory and must appear on all invoice templates used with the Stripe payment link.                                                                         |
| Amount Due / Amount Remaining | Make sure this field appears on the invoice. The URL displays a message to your customer if either this field isn’t shown, the value is zero, or the invoice has been paid. |

## Hidden GUID field

The `Hidden GUID` field won’t automatically create randomized IDs for invoices created before you installed the payment links bundle. This includes invoices created from previous sales orders.

If you receive a large volume of errors as a result of this default functionality, contact your Stripe representative.

## Bundle updates

When you update the bundle, the `Default Value` configuration resets to the default settings. You must reconfigure the `Default Value` configuration for it to function properly again for your customers.

## Permissions

If you require specific permissions to access invoices, make sure to add those permissions to the `Stripe Limited Access` role (for example, by navigating to **Lists** > **Tax Details** > **Full**). This allows the connector to access invoice information to create an invoice payment page.

## Access roles

The GUID might disappear after you save it for specific access roles that have fewer permissions than an admin. For example, `View` access is insufficient. To grant the appropriate permissions, go to the **Stripe Payment Page Guid** custom field (`custbody_stripe_payment_link_guid`) and select **Access**. Add the role and grant `Edit` access in the custom field.

## Bulk syncing records

Use the Support Tool to add Stripe records for re-syncing and to track their progress.

### Sync status

1. In the Dashboard, go to **Settings** > **Installed apps** > **Stripe Connector for NetSuite** > **Support Tooling**.

1. Click **Sync records**.

1. Paste one or more Stripe resource IDs, separated by commas. The maximum number of IDs you can submit at once is shown in the UI.

1. Click **Submit**.

After you click submit, Accepted IDs are added to the queue immediately. **Rejected IDs** appear in an error list with one of the following reasons:

- Fix the issue (for example, correct an invalid ID).
- Resubmit any IDs that failed, if necessary.

### View sync status

To view the sync status, from the **Support Tooling** page, click **View Sync Status**, then paste the comma-separated IDs you want to check, and click **Submit**.

Review the following sections to understand queue statuses, sync statuses, error types.

#### Queue statuses

| Status           | Description                                             |
| ---------------- | ------------------------------------------------------- |
| **Queued**       | Waiting to be processed                                 |
| **Successful**   | Synced without errors                                   |
| **Unsuccessful** | The sync failed. Hover over the error type for details. |

#### Sync statuses

| Status              | Description                                             |
| ------------------- | ------------------------------------------------------- |
| **Before Backfill** | Record is before go-live date                           |
| **Successful**      | Synced without errors                                   |
| **Unsuccessful**    | The sync failed. Hover over the error type for details. |

#### Error types

| Error type                         | Description                                      |
| ---------------------------------- | ------------------------------------------------ |
| **Incorrect Stripe resource ID**   | Recheck the ID that you entered                  |
| **Non-translatable resource ID**   | ID is valid but isn’t eligible for syncing       |
| **Already successful resource ID** | ID already in successful state, no need to retry |
| **Resource data not found**        | Can’t fetch data for the ID                      |
| **Sync failed**                    | Hover over the error for details                 |

#### Prioritized

The Prioritized column indicates that the record sync is for the provided ID is prioritized over other record syncs.
````
