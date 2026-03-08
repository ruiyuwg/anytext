# Update and create 1099 tax forms

Update and create 1099 tax forms for connected accounts.

> #### Getting your 1099 Forms
>
> If you work for a platform that pays you through Stripe and want to learn about your 1099 forms and how to get them, see [1099 tax forms](https://support.stripe.com/express/topics/1099-tax-forms) on the Stripe Support site.

Stripe automatically generates tax forms for all connected accounts that have transactions in a given tax year. Tax forms are available on the [Tax reporting](https://dashboard.stripe.com/connect/taxes/forms) page in the Dashboard. If you need to update or correct a 1099 form, you can do so in one of the following ways:

- **Use the Tax form editor**-Use the editor in the Dashboard to change the values used in a new 1099 form.
- **Export the form as a comma separated value (CSV) file**-Export a tax form to a CSV file, modify the values in the CSV file, then import the updated CSV file to generate a new 1099 form with the updated values.

You can also create new tax forms by importing CSV files. If your connected account doesn’t already have a tax form, performing Update or Delta imports automatically creates the form.

# Tax form editor

> This is a Tax form editor for when method is dashboard. View the full page at https://docs.stripe.com/connect/modify-tax-forms?method=dashboard.

You can update the values for payee details and payment amounts in a 1099 tax form using the Tax form editor in the Dashboard. After you update the values, you can generate a new or corrected form with updated values.

## Understanding the tax form editor UI

When you open a record from the **Tax reporting** page, it includes the following sections:

- **Payee details**-Includes details about the owner of the connected account that you pay out to.
- **Totals**-Includes the payment detail totals form.
- **Forms details**-Includes details about delivery and filing status.
- **Form timeline**-Includes a log of corrections to the tax form. It doesn’t log changes made to the form by exporting the form to a CSV file and then importing an updated CSV file with new values.

You can modify values in the **Payee details**, **Totals**, and **Forms details** sections.

When you update the values of a 1099 tax form it updates only the data on the form, not the data in the connected account. Editing the **Payee details** or **Totals** data on a form during the form’s tax year will disable automatic updates to those fields by Stripe. You can always undo your edits to resume automatic updates later.

### Update a 1099 tax form before filing

1. On the **Tax reporting** page, click the tax form to update.
2. Click **Edit**.
3. To update the user details on the 1099 form, such as **Name**, **TIN**, or **Address**, expand **Payee details** and then update the value for each field as appropriate.
4. To update details related to payments and withholdings on the 1099 form, expand **Totals**, and then update the values as appropriate.
5. Click **Save** to save your changes.

You can then download the updated form as a PDF document.

When you save the form, Stripe validates the format of the values you entered. For example, If you provide a TIN that doesn’t include the correct number of digits, Stripe displays an error message. Stripe doesn’t verify that the TIN is the correct TIN for the connected account, only that it includes the correct number of digits.

## Correcting a tax form after filing

In some cases, you need to correct the values in a 1099 tax form after you file it. If you try to update a tax form that you already filed, you see a **Correct** button instead of an **Edit** button in the form.

You can’t create a corrected 1099 form for a connected account if you already filed it and the status for the filed form is `Processing` or `Rejected`. If you need to update a form that is `Processing` or `Rejected`, contact [Stripe support](https://support.stripe.com/contact) for assistance.

### Correct both payee details and totals

The IRS allows you to submit a correction to either the **Payee details** or **Totals** data, but not both at the same time. If you need to correct both, submit them as separate corrections.

1. On the **Tax reporting** page, click the tax form to correct.
2. Click **Correct**.
3. To correct the user details on the 1099 form, such as **Name**, **TIN**, or **Address**, expand **Payee details** and then correct the value for each field as appropriate.
4. To correct details related to payments and withholdings on the 1099 form, expand **Totals** and then correct the values as appropriate.
5. Click **Save** to save your changes.

You can then [file](https://docs.stripe.com/connect/file-tax-forms.md) the corrected form and download a PDF copy for your records.

## Quick Correct: Payee Details

When the payee details for a connected account don’t match the values on a tax form for the connected account, a pencil icon appears next to **Payee details**. Hovering over the pencil shows a tool tip listing the information that doesn’t match. Click the pencil icon, then click **Correct** to automatically generate a corrected form in which the payee details match those of the connected account.

When you click **Correct**, Stripe generates a new form with the updated payee information from the connected account **Payee details**. If there is an existing corrected form that wasn’t yet filed, the corrected form is updated with the information from the connected account. A corrected form includes all payee details that don’t match, such as payee name, address, and TIN. If more than one value is updated, the corrected form updates all mismatched fields.

When you click **Correct** to update the values in the tax form, it updates all values that are different in the connected account than the tax form. You can’t choose which fields to update values for. You should verify all changes before filing the updated forms. If a connected account user made a typo to their address, the incorrect address is updated in the corrected form. You can choose to change a single value in an updated tax form by using CSV export to export the file to correct. To learn more, see [Correct tax forms](https://docs.stripe.com/connect/correct-tax-forms.md).

You can use **Quick Correct** to update details only in tax forms that you’ve already filed and contain a mismatch between the tax form data and the data in the connected account. When no mismatched data is detected, the pencil icon doesn’t display. If there is a pencil icon displayed to indicate a mismatch in the data because the connected account data is missing, the pencil icon is displayed but the **Correct** button is deactivated.

In the **Quick Correct** panel you can view all of the payee details except for the TIN, which is partially redacted.

You can add a **Payee details** filter with a value of `Payee has updated identity info` to see only the list of forms with identity values that differ between the connected account and the form, which are the only forms eligible for **Quick Correct**.
![Payee details filter](https://b.stripecdn.com/docs-statics-srv/assets/payee_details.cf41cd76412580985136ccbf38ba8d25.png)

## Revert: Payee Details and Totals

When the data for **Payee details** or **Totals** doesn’t match the values on a tax form for the connected account, an Edited badge appears next to the section. Hovering over the badge shows a tool tip listing the values that don’t match. Click the **Undo edits** button to automatically revert the tax form to match the data in the connected account.

The difference between **Revert** and **Quick Correct** is that you can Revert details on a form when it hasn’t been filed yet, and you can Quick Correct a form after it has been filed. When you click Revert, all mismatched data is updated. You can’t choose which fields to update and exclude others. If there is data missing from the connected account, the Revert button is deactivated.
![Revert details](https://b.stripecdn.com/docs-statics-srv/assets/revert_details.be237e4cac5598ce9708f7260e7988db.png)

## Updating or correcting a 1099 tax form after filing using connected account data

If data for a connected account changes after Stripe generates 1099 forms, you can use the editor in the Dashboard to quickly replace data in the 1099 with data from the connected account. Stripe displays a bell icon in the **Payee details** section when the data in the form is different from the data in the connected account.

**To update or correct a tax form after filing using connected account data**

1. On the **Tax reporting** page, click the tax form to correct.
2. Click the bell icon to display the data from the connected account.
3. Click **Correct** to update the data in a 1099 form with the data from the connected account.

# CSV files

> This is a CSV files for when method is csv. View the full page at https://docs.stripe.com/connect/modify-tax-forms?method=csv.

You can export tax forms to verify data at scale against your internal systems or to prepare for a subsequent import. Whatever your rationale, you can export tax forms by clicking the **Export** button, then **Export CSV**. Choose the type of tax form to export, which also defines the CSV file that you download. This choice overrides any tax form type filter, if set. If you have multiple types of 1099 forms (for example, 1099-K for some recipients and 1099-NEC for others), you must export them separately.

You can also choose whether or not to export the tax identification number (TIN). If you don’t include the TIN, the TIN column shows a masked value (for example, `*********`). If you include the TIN, the value appears masked to the last 4 digits (for example, `*****1234`).

The export considers any filters that you apply. You can see any applied filters by hovering over the information icon in the lower left corner of the export dialog.

After you initiate an export you can monitor it on the **Exports & imports** tab. An export expires 7 days after initiation.
![Export tax forms to CSV file format](https://b.stripecdn.com/docs-statics-srv/assets/export_tax_form_filters.bb0fa09e61e826c09e55ab528e900f3b.png)

## Import tax forms

Stripe provides values for payee data and form totals whenever possible. However, you can supply your own totals, for example if you provided reimbursements or otherwise altered the totals. You can also import data to correct a filed tax form. The maximum allowed file size is 75 MB.

When it comes to altering form totals specifically, you have 2 options:

- Overwrite the existing values with your own totals (CSV Import -> Update)
- Add to the existing values with your deltas (CSV Import -> Delta).

## Overwriting existing values with Update

Importing tax forms allows you to override most of the values supplied on the initial tax form by Stripe. When you import tax forms, Stripe uses the imported values and files the tax forms in accordance with the information you provide. If you make updates in the Dashboard after importing from CSV, the updates aren’t recorded in the filed tax forms. If you need to return to the Stripe-supplied values, contact [Stripe support](https://support.stripe.com/contact/email?topic=tax).

To import tax forms:

1. Click **Import**.
2. Choose the type of tax form to import.
3. Specify whether or not you’ve already filed it.

You’re not required to supply a payee’s TIN on import. If you provide a 9-digit number for the TIN, it overrides the Stripe-supplied value. Stripe ignores any other value and retains the Stripe-supplied value.

> #### Working with CSV files in external tools
>
> Applications like Google Sheets and Excel usually automatically delete leading zeros in a CSV file. For example, when you open an exported CSV file in Excel, ‘000001234’ becomes ‘1234’. If you export a form containing TINs that have leading zeros, then open it in an application that removes leading zeros, you can’t import it. If that happens, restore the leading zeros and try again.

After you initiate an import you can monitor it on the **Exports & imports** tab.
![Import tax forms page with Update selected.](https://b.stripecdn.com/docs-statics-srv/assets/tax-forms-import-update.6dbe2b7abeed23b49343cd83a9b2b629.png)

## Adding to existing values with Delta

Importing tax forms using **Delta** allows you to add to (or subtract from) the values on the initial tax form totals by Stripe. This lets platforms report just the totals of transactions that happened outside of Stripe. Without this functionality you would have to download the existing values from Stripe, then  sum the values from Stripe with the external values, and then import the final values. Instead, just provide the delta amounts and Stripe does the rest. This is particularly useful if you have multiple payout mechanisms or reimbursements on Stripe connected accounts for activity that happened outside of Stripe.

To import a form using **Delta**, click **Import**, then choose the type of tax form to import. Select **Delta**, and then choose the file that contains the delta totals data.
![Import tax forms page with Update selected.](https://b.stripecdn.com/docs-statics-srv/assets/tax-forms-import-upload-csv.ed08ff649cf6c50b7495047f14846774.png)

## Frequently asked questions about Deltas

This section provides answer to common questions about using Deltas for 1099 tax forms in Connect.

### Can there be negative values as deltas (for example, reimbursements made to reduce the total on 1099)?

Yes.

### If I send multiple delta amounts, do they get overwritten or are they additive?

They get overwritten, so if on stripe\_account\_id S1 there was a delta added for 10 USD, and then another delta was added for 20 USD, the final delta amount applied is 20 USD and not 30 USD.

### If my calculation method changes or the total changes after I have applied a delta, does the delta still persist?

Yes. To learn more about calculation methods, see [Choose a calculation method](https://docs.stripe.com/connect/calculation-methods.md).

### Will I be able to filter to just the forms that had deltas applied?

Yes

### Can I undo the delta values that I just imported?

Yes, you can use **Revert** to revert to the Stripe-calculated totals in the form. This restores the value in the form to the value calculated by Stripe after you import CSV files with different values using **Update** or **Delta**, or changes you made using the Dashboard.

### If I update a value for my Stripe account ID using a Delta, can I also overwrite the amount with a CSV update or the tax form editor?

Yes, Deltas are applied on top of the stripe calculated total / platform’s overwritten totals. The changes made on the Stripe dashboard UI (Tax form editor) overwrite any other changes. The examples in the following table demonstrate how Stripe determines the final values for a connected account after Deltas and Updates.

| Scenario                                                                                                                        | Final value | Value after Revert |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------ |
| Stripe calculated (100 USD)                                                                                                     | 100 USD     | 100 USD            |
| Stripe calculated (100 USD) -> CSV Import (update) (150 USD)                                                                    | 150 USD     | 100 USD            |
| Stripe calculated (100 USD) -> Tax form editor Edit (200 USD)                                                                   | 200 USD     | 100 USD            |
| Stripe calculated (100 USD) -> CSV Import (Delta) (+25 USD)                                                                     | 125 USD     | 100 USD            |
| Stripe calculated (100 USD) -> CSV Import (Update) (150 USD)->  Tax form editor Edit (200 USD)                                  | 200 USD     | 100 USD            |
| Stripe calculated (100 USD) -> CSV Import (Update) (150 USD)-> CSV Import (Delta) (+25 USD)                                     | 175 USD     | 100 USD            |
| Stripe calculated (100 USD) -> Tax form editor Edit (200 USD) ->  CSV Import (Delta) (+25 USD)                                  | 225 USD     | 100 USD            |
| Stripe calculated (100 USD) ->  CSV Import (Delta) (+25 USD) -> Tax form editor Edit (200 USD)                                  | 200 USD     | 100 USD            |
| Stripe calculated (100 USD) ->  CSV Import (Delta) (+25 USD) -> Tax form editor Edit (200 USD) -> CSV Import (update) (150 USD) | 175 USD     | 100 USD            |

## Improvements to CSV imports

CSV imports no longer require supplying all columns when updating values for your 1099 tax forms. Include only the columns in the CSV for the data that you want to change, along with either `form_id` or `stripe_account_id` values, which uniquely identify forms in Stripe. When you import a CSV for a correction, you must include a `form_id` field value. Columns that don’t exist in the CSV import schema default to the values that are on the corresponding tax form. We might perform validation on fields even if you don’t include them in the import. If we find validation errors, the import fails and the changes aren’t applied.

## Override the tax form status

Stripe calculates a status for each tax form based on the type of form, year-to-date amount, and information completeness. You can override a tax form’s status by setting a value for the `filing_requirement` field on import. This field can have one of the following values:

- `NOT_REQUIRED` – Don’t file the form, even if it meets the threshold and is complete.
- `REQUIRED` – File the form, even if it doesn’t meet the threshold or is incomplete. Conceptually this is the combination of `REQUIRED_EVEN_IF_INCOMPLETE` and `REQUIRED_EVEN_IF_BELOW_THRESHOLD`.
- `REQUIRED_EVEN_IF_INCOMPLETE` – File the form if it’s above the threshold, even if it isn’t complete. This is particularly useful for forms with non-US addresses that may be missing state information.
- `REQUIRED_EVEN_IF_BELOW_THRESHOLD` – File the form if it’s complete, even if it’s below the threshold.
- `DEFAULT` – Use federal and state thresholds to decide whether a form should be filed. This is what the initial filing requirement value is for all forms, which can be overridden to one of the other values by platform admins.

> #### Status term compatibility
>
> Different interfaces might refer to `REQUIRED_EVEN_IF_INCOMPLETE` or `FILE_EVEN_IF_INCOMPLETE`. Stripe supports CSV import files using either term for this override option.

## Override the delivery method

Stripe uses your platform’s tax settings to determine whether to use postal delivery for your forms by `DEFAULT`. You can override a tax form’s delivery method for an account by setting a value for the `postal_delivery` field on import. This field can have one of the following values:

`TRUE` - Postal deliver the form when filed, even if the platform’s tax settings don’t require it or the account holder provided consent to paperless delivery.

`FALSE` - Don’t postal deliver the form when filed, even if the platform’s tax settings require it or the account holder chose to decline paperless delivery.

`DEFAULT` - Use the platform’s tax settings to determine whether to postal deliver the form when filed.

## Change the type of 1099 form

You can change the type of 1099 form for an account by setting a value for the `form_type` field on import. This field can have one of the following values:

`k` - To swap to a 1099-K form

`misc` - To swap to a 1099-MISC form

`nec` - To swap to a 1099-NEC form

## Create new tax forms

To create standalone tax forms that aren’t associated with connected accounts:

1. Click **Import**.
2. Choose the type of tax form to import.
3. Select **Create** as the import type.
4. Select your **CSV file** to import.

You must include all columns except for `form_id` and `stripe_account_id`. E-delivery isn’t available for standalone forms (only postal mailing is allowed for delivery). If you’re creating a standalone form of a non-default form type, you must include the CSV headers of that form type. If you need assistance getting the correct CSV headers, contact support@stripe.com.

## 1099 CSV schema

The schemas for 1099-NEC, 1099-K, and 1099-MISC are similar overall. Most fields in the CSV file map directly to a box on the tax form and are named accordingly. To get the column names for your CSV import, the best approach is to do a CSV export, change the values, delete the columns you aren’t changing, and import that CSV file.

> Refer to the IRS website for instructions on 1099 tax forms (for example, [1099-NEC instructions](https://www.irs.gov/instructions/i1099mec)).

The following table describes the schema when you use Update or Correct to update values in a 1099 form.

| Field                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `form_id`                     | The ID of the tax form. You can’t change this value.                                                                                                                                                                                                                                                                                                                                                                            |
| `email_address`               | The payee’s email address. You can’t change this value. To change a connected account’s email address, visit Connect communication settings or the 1099 tax forms dashboard.                                                                                                                                                                                                                                                    |
| `status`                      | The federal filing status of the tax form. You can’t change this value. To force a tax form into a different status, use `filing_requirements`.                                                                                                                                                                                                                                                                                 |
| `postal_delivery`             | Whether to mail the form. You can use this field to override your postal delivery default in tax form settings.                                                                                                                                                                                                                                                                                                                 |
| `delivery_status`             | The postal delivery status of the tax form. You can’t change this value.                                                                                                                                                                                                                                                                                                                                                        |
| `stripe_account_id`           | The payee’s Stripe account ID. You can’t change this value.                                                                                                                                                                                                                                                                                                                                                                     |
| `filing_requirement`          | Use this field to override a tax form status.                                                                                                                                                                                                                                                                                                                                                                                   |
| `payee_name_line_1`           | The payee’s name.                                                                                                                                                                                                                                                                                                                                                                                                               |
| `payee_name_line_2`           | Overflow for the payee’s name, sometimes used for a *doing business as* (DBA) name.                                                                                                                                                                                                                                                                                                                                             |
| `payee_tin`                   | The payee’s TIN. On export this is masked by default. Masked values are ignored on import.                                                                                                                                                                                                                                                                                                                                      |
| `payee_tin_type`              | The type (business or individual) of a payee’s TIN. This field may be necessary for some state filings.                                                                                                                                                                                                                                                                                                                         |
| `payee_address_line 1`        | The first line of the payee’s address.                                                                                                                                                                                                                                                                                                                                                                                          |
| `payee_address_line 2`        | The second line of the payee’s address.                                                                                                                                                                                                                                                                                                                                                                                         |
| `payee_city`                  | The payee’s city.                                                                                                                                                                                                                                                                                                                                                                                                               |
| `payee_region`                | The payee’s state or region.                                                                                                                                                                                                                                                                                                                                                                                                    |
| `payee_postal_code`           | The payee’s postal code.                                                                                                                                                                                                                                                                                                                                                                                                        |
| `payee_country`               | The payee’s country.                                                                                                                                                                                                                                                                                                                                                                                                            |
| `payee_account_number`        | The account number on the tax form. This field defaults to the `stripe_account_id`, but you can override the value on import.                                                                                                                                                                                                                                                                                                   |
| `january_amount`              | The total amount paid in January. Other months follow the same format.                                                                                                                                                                                                                                                                                                                                                          |
| `nonemployee_compensation`    | The total compensation paid to the non-employee.                                                                                                                                                                                                                                                                                                                                                                                |
| `federal_income_tax_withheld` | The total amount withheld from federal income taxes, if any.                                                                                                                                                                                                                                                                                                                                                                    |
| `state_tax_withheld`          | The total amount withheld from state income taxes, if any.                                                                                                                                                                                                                                                                                                                                                                      |
| `other_state_tax_withheld`    | The total amount withheld from the other state income taxes, if any.                                                                                                                                                                                                                                                                                                                                                            |
| `state_filer_id`              | The payer’s ID for filing in the state.                                                                                                                                                                                                                                                                                                                                                                                         |
| `other_state_filer_id`        | The payer’s ID for filing in the other state.                                                                                                                                                                                                                                                                                                                                                                                   |
| `state_income`                | The payee’s state income.                                                                                                                                                                                                                                                                                                                                                                                                       |
| `other_state_income`          | The payee’s other state income.                                                                                                                                                                                                                                                                                                                                                                                                 |
| `fatca_filing`                | Whether to check the [Foreign Account Tax Compliance Act](https://www.irs.gov/businesses/corporations/foreign-account-tax-compliance-act-fatca) (FATCA) filing requirement.                                                                                                                                                                                                                                                     |
| `second_tin_notice`           | Use this field to specify whether the payer has received a TIN notice for the payee twice in 3 calendar years.                                                                                                                                                                                                                                                                                                                  |
| `paperless_delivery_consent`  | Use this field to specify whether you’ve collected paperless delivery consent. Possible values are `NOT_PROVIDED`, `PROVIDED`, and `REVOKED`. `NOT_PROVIDED` means you’ve not collected consent. `PROVIDED` means you’ve collected consent. `REVOKED` means that the connected account doesn’t want e-delivery and has explicitly declined to give consent. When importing, leaving the field empty defaults to `NOT_PROVIDED`. |

The following table describes the schema for CSV export when you update the values in a tax form by adding a Delta to the value calculated by Stripe. Many of the fields are the same as the schema when you use Update or Correct. For fields that are different when using a Delta, the field names includes *\_delta* at the end.

| Field                             | Description                                                                                                                                    |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| form\_id                           | The ID of the tax form. You can’t change this value and either form\_id or stripe\_account\_id are the required values for the import with Delta. |
| stripe\_account\_id                 | The payee’s Stripe account ID. You can’t change this value.                                                                                    |
| nonemployee\_compensation\_delta    | The delta to add on the compensation paid to the non-employee total already in Stripe.                                                         |
| federal\_income\_tax\_withheld\_delta | The delta to add on the total amount withheld from federal income taxes total already in Stripe.                                               |
| state\_tax\_withheld\_delta          | The delta to add on the amount withheld from state income taxes total already in Stripe.                                                       |
| state\_income\_delta                | The delta to add on the payee’s state income total already in Stripe.                                                                          |
| january\_amount\_delta              | The delta to add on the january totals already in Stripe.                                                                                      |
| february\_amount\_delta             | The delta to add on the february totals already in Stripe.                                                                                     |
| royalties\_delta                   | The delta to add on the royalties total already in Stripe.                                                                                     |
| rents\_delta                       | The delta to add on the *rents* total already in Stripe.                                                                                       |

## User self-serve updates for connected accounts

If you signed up for stripe hosted e-delivery, you can have your users update their tax information themselves before their tax form is filed. If users update their information after filing, the tax form page shows an option to correct the filed 1099 form with the updated information. For more information, see [Quick correct: Payee details](https://docs.stripe.com/connect/modify-tax-forms.md?method=dashboard#quick-correct:-payee-details).

Users can edit their Legal name, Taxpayer Identification Number (TIN), and address. Note that some information can’t be edited after a user’s legal entity is verified, including date of birth, and business type. To edit the information user must contact Stripe Support.
