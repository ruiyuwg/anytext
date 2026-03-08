# Error handling for data import

Learn how to handle and recover from errors received when importing revenue recognition data.

You might encounter errors when importing revenue recognition data. The following list describes data import errors and how to resolve them. In most cases, you need to reimport the data to recover from the error.

## General imports

The following list contains errors you might encounter with general imports and how you can resolve them.

### CSV file errors

| Error           | Description                                                                                           | Recommendation                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Empty file      | The CSV file doesn’t contain any lines (rows) or a header. It’s a zero-length file.                   | [Download the CSV template](https://dashboard.stripe.com/revenue-recognition/data-import) from the Stripe Dashboard and add your transaction data. See [Importing data](https://docs.stripe.com/revenue-recognition/data-import.md#general-import) for data format details.                                                                                                                                                                                                |
| Invalid data    | A line in the CSV file contains invalid data.                                                         | Make sure each line includes:

- a `transaction_id`
- a date in the YYYY-MM-DD format
- a valid amount
- the currency’s three-letter ISO format

If you’re managing your data with Microsoft Excel, check that it didn’t automatically change the date format before you import the data. The date must be in the YYYY-MM-DD format.

See [Importing data](https://docs.stripe.com/revenue-recognition/data-import.md#general-import) for data format details. |
| Invalid file    | Couldn’t read the CSV file.                                                                           | [Download the CSV template](https://dashboard.stripe.com/revenue-recognition/data-import) from the Stripe Dashboard and add your transaction data. See [Importing data](https://docs.stripe.com/revenue-recognition/data-import.md#general-import) for data format details.                                                                                                                                                                                                |
| Unknown failure | The CSV file failed to import due to unknown reasons. Some transactions might not have been imported. | Please [contact Stripe support](https://support.stripe.com/contact) for help.                                                                                                                                                                                                                                                                                                                                                                                              |

### Transaction ID errors

| Error                                    | Description                                                           | Recommendation                                                                                                                                                                                                                                                             |
| ---------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Invalid transaction ID                   | The transaction ID doesn’t refer to any Stripe transaction.           | Make sure the ID is correct.

If you’re importing third-party transactions, you must change the source to a different identifier than `Stripe`. See [Importing data](https://docs.stripe.com/revenue-recognition/data-import.md#general-import) for data format details. |
| Overriding a charge linked to an invoice | A charge is linked to an invoice.                                     | A charge that’s linked to an invoice can’t be overridden. Instead, override the invoice.                                                                                                                                                                                   |
| Transaction doesn’t exist                | The transaction ID couldn’t be found in test or live mode.            | Make sure the ID is correct. If it does exist, switch to the appropriate mode ([test or live](https://docs.stripe.com/keys.md#test-live-modes)) and reimport the transaction.                                                                                              |
| Unsupported character                    | The tilde (`~`) character is reserved for Stripe internal usage only. | Use another character in the transaction ID.                                                                                                                                                                                                                               |

### Split transaction ID errors

| Error                           | Description                                                           | Recommendation                                                                                                                                                                                              |
| ------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Duplicate split transaction IDs | There are duplicate split transaction IDs.                            | If you’re overriding the service period for an invoice line item, make sure the invoice line item IDs are correct.

If you’re splitting a transaction, use unique identifiers for each split transaction. |
| Missing split transaction ID    | A split transaction ID is missing.                                    | If you’re overriding the service period for an invoice line item, use the invoice line item ID.

If you’re splitting a charge, use unique identifiers for each split transaction.                         |
| Split transaction doesn’t exist | The split transaction ID couldn’t be found in test or live mode.      | Make sure the ID is correct. If it does exist, switch to the appropriate mode ([test or live](https://docs.stripe.com/keys.md#test-live-modes)) and reimport the transaction.                               |
| Split transaction mismatch      | There’s a split transaction mismatch.                                 | Check the split transaction ID and see that it matches what was imported.

If you want to resplit the transaction, delete the existing transactions and reimport it.                                      |
| Unsupported character           | The tilde (`~`) character is reserved for Stripe internal usage only. | Use another character in the split transaction ID.                                                                                                                                                          |

### Booked date errors

| Error                | Description                                                        | Recommendation                                                                    |
| -------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Missing booked date  | A booked date is missing from a third-party transaction.           | Check and see if there’s a booked date for the transaction.                       |
| Nonempty booked date | There is a booked date for a Stripe invoice when none is expected. | The booked date of a Stripe invoice can’t be overridden. The field must be empty. |

### Recognition date errors

| Error                                           | Description                                                         | Recommendation                                                                                                                                                                   |
| ----------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Missing recognition end date                    | A recognition end date is missing from a third-party transaction.   | Check and see if there’s a recognition end date for the transaction. If you’re overriding a Stripe transaction, you must provide both the recognition start date and end date.   |
| Missing recognition start date                  | A recognition start date is missing from a third-party transaction. | Check and see if there’s a recognition start date for the transaction. If you’re overriding a Stripe transaction, you must provide both the recognition start date and end date. |
| Recognition end date is earlier than start date | The recognition end date can’t be earlier than the start date.      | Make sure the start and end dates are correct.                                                                                                                                   |

### Amount errors

| Error                 | Description                                                                                 | Recommendation                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Amount mismatch       | The amount doesn’t match the actual amount of the transaction.                              | The amount of a Stripe transaction can’t be overridden. The field must be empty. |
| Missing amount        | An amount is missing from a third-party transaction.                                        | Check and see if there’s an amount for the transaction.                          |
| Total amount mismatch | The amounts of all split transactions don’t sum up to the total amount of the split charge. | Check that all amounts match.                                                    |

### Currency errors

| Error                | Description                                                        | Recommendation                                                                                                                                       |
| -------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Currency mismatch    | The currency doesn’t match the actual currency of the transaction. | The currency of a Stripe transaction can’t be overridden. The field must be empty.                                                                   |
| Missing currency     | Currency is missing from a third-party transaction.                | Check and see if there’s currency for the transaction. Make sure to use the currency’s three-letter ISO format.                                      |
| Unsupported currency | The currency you provided is not supported for your account.       | Convert it to one of the currencies listed in the error message. See [Supported currencies](https://docs.stripe.com/currencies.md) for more details. |

## Exclusion imports

The following list contains errors you might encounter with exclusion imports and how you can resolve them.

### Transaction ID errors

| Error                                                       | Description                                                                                      | Recommendation                                                                                                                                       |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Invalid transaction ID                                      | The transaction ID doesn’t refer to a Stripe transaction.                                        | Make sure the ID is correct, according to the [data format requirements](https://docs.stripe.com/revenue-recognition/data-import.md#general-import). |
| Unsupported exclusion for charge or payment with an invoice | You can’t exclude a charge or payment that’s linked to an invoice. Instead, exclude the invoice. | Find the invoice ID for the charge or payment and exclude the invoice ID.                                                                            |

## Journal entry imports

The following tables explain how to resolve journal entry import errors.

### CSV file errors

| Error                          | Description                                                                                           | Recommendation                                                                                                                                                                                                                                                                    |
| ------------------------------ | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Empty file                     | The CSV file doesn’t contain any headers or data. It’s a zero-length file.                            | [Download the CSV template](https://dashboard.stripe.com/revenue-recognition/data-import) from the Stripe Dashboard and add your transaction data. See [Importing data](https://docs.stripe.com/revenue-recognition/data-import.md#journal-entry-import) for data format details. |
| Invalid data                   | A line in the CSV file contains invalid data.                                                         | Make sure each line includes:

- a date in the YYYY-MM-DD format
- a valid debit account
- a valid credit account
- a valid amount
- the currency’s three-letter ISO code
- a `transaction_id`                                                                        |
  | Invalid file                   | Couldn’t read the CSV file.                                                                           | [Download the CSV template](https://dashboard.stripe.com/revenue-recognition/data-import) from the Stripe Dashboard and add your transaction data. See [Importing data](https://docs.stripe.com/revenue-recognition/data-import.md#journal-entry-import) for data format details. |
  | Duplicate manual journal entry | The journal entry already exists.                                                                     | Remove any duplicate entries from the file.                                                                                                                                                                                                                                       |
  | Unknown failure                | The CSV file failed to import due to unknown reasons. Some transactions might not have been imported. | [Contact Stripe support](https://support.stripe.com/contact) for help.                                                                                                                                                                                                            |

### Accounting period date errors

| Error                                     | Description                                                             | Recommendation                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unsupported accounting period date format | The accounting period date in the uploaded CSV is in an invalid format. | Make sure that the accounting period date is specified in the YYYY-MM-DD format.

If you created the data with Microsoft Excel, it might have automatically changed the date format.

See [Importing data](https://docs.stripe.com/revenue-recognition/data-import.md#journal-entry-import) for data format details. |
| Closed accounting period                  | The specified accounting period is closed.                              | Select an open accounting period for transactions. Verify that the selected period is open in your Revenue Recognition settings.                                                                                                                                                                                         |

### Amount errors

| Error                                             | Description                                                                       | Recommendation                                                                              |
| ------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Missing amount                                    | An amount is missing.                                                             | Find the transaction that’s missing an amount and update or remove it.                      |
| The currency matches but the amount doesn’t match | The settlement currency matches the presentment currency, but the amounts differ. | Find the transaction with different settlement and presentment amounts, and reconcile them. |

### Currency errors

| Error                | Description                                                  | Recommendation                                                                                                                                       |
| -------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Missing currency     | Currency is missing.                                         | - Find the transaction that’s missing a currency and add its three-letter ISO code.                                                                  |
| Unsupported currency | The currency you provided is not supported for your account. | Convert it to one of the currencies listed in the error message. See [Supported currencies](https://docs.stripe.com/currencies.md) for more details. |

### Debit or credit account errors

| Error                  | Description                                     | Recommendation                                                                                                                                                                                                                                   |
| ---------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Invalid debit account  | The debit ledger account specified is invalid.  | Check that the provided ledger account name for the debit account is a default Stripe GL account name. Refer to our [Chart of Accounts](https://docs.stripe.com/revenue-recognition/methodology.md#chart-of-accounts) for a comprehensive list.  |
| Invalid credit account | The credit ledger account specified is invalid. | Check that the provided ledger account name for the credit account is a default Stripe GL account name. Refer to our [Chart of Accounts](https://docs.stripe.com/revenue-recognition/methodology.md#chart-of-accounts) for a comprehensive list. |

### Transaction ID errors

| Error                                   | Description                                                 | Recommendation                                                                                                                                                                                |
| --------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Invalid transaction ID                  | The transaction ID doesn’t refer to any Stripe transaction. | Make sure the ID is correct and exists in your Stripe account. See [Importing data](https://docs.stripe.com/revenue-recognition/data-import.md#journal-entry-import) for data format details. |
| Importing a charge linked to an invoice | A charge is linked to an invoice.                           | The transaction ID can’t be the ID of a charge that’s linked to an invoice. Instead, use the invoice ID.                                                                                      |

### GL errors

| Error                               | Description                                                                                   | Recommendation                                                                                                                                 |
| ----------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Invalid GL name                     | The GL name provided isn’t valid.                                                             | Make sure that the GL name is correct and matches a configured GL account name in your account mappings. If it doesn’t, leave the field empty. |
| Invalid GL code                     | The GL code specified isn’t valid.                                                            | Make sure that the GL code is correct and matches a configured GL account code in your account mappings. If it doesn’t, leave the field empty. |
| The GL name and code don’t match    | The GL name and GL code provided do not correspond with any mappings in the account mappings. | Make sure that the GL name and code match an existing account mapping, and adjust your entries accordingly.                                    |
| The GL code and account don’t match | The provided GL code doesn’t match the provided debit or credit account.                      | Make sure that the account type matches the type linked to that GL account mapping.                                                            |
