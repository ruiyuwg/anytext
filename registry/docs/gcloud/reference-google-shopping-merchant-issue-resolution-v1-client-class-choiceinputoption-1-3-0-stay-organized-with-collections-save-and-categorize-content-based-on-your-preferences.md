-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Shopping Merchant Issue Resolution V1 Client - Class ChoiceInputOption (1.3.0) Stay organized with collections Save and categorize content based on your preferences.

1.3.0 (latest) 1.2.1 1.1.1 1.0.0 0.1.0

Reference documentation and code samples for the Google Shopping Merchant Issue Resolution V1 Client class ChoiceInputOption.

A choice that the business can select.

Generated from protobuf message `google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput.ChoiceInputOption`

## Namespace

Google \\ Shopping \\ Merchant \\ IssueResolution \\ V1 \\ InputField \\ ChoiceInput

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ id`

`string`  

Not for display but need to be sent back for the selected choice option.

`↳ label`

`[Google\Shopping\Merchant\IssueResolution\V1\TextWithTooltip](/php/docs/reference/shopping-merchant-issueresolution/latest/V1.TextWithTooltip)`  

Short description of the choice option. There may be more information to be shown as a tooltip.

`↳ additional_input`

`[Google\Shopping\Merchant\IssueResolution\V1\InputField](/php/docs/reference/shopping-merchant-issueresolution/latest/V1.InputField)`  

Input that should be displayed when this option is selected. The additional input will not contain a `ChoiceInput`.

### getId

Not for display but need to be sent back for the selected choice option.

**Returns**

**Type**

**Description**

`string`

### setId

Not for display but need to be sent back for the selected choice option.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getLabel

Short description of the choice option. There may be more information to be shown as a tooltip.

**Returns**

**Type**

**Description**

`[Google\Shopping\Merchant\IssueResolution\V1\TextWithTooltip](/php/docs/reference/shopping-merchant-issueresolution/latest/V1.TextWithTooltip)|null`

### hasLabel

### clearLabel

### setLabel

Short description of the choice option. There may be more information to be shown as a tooltip.

**Parameter**

**Name**

**Description**

`var`

`[Google\Shopping\Merchant\IssueResolution\V1\TextWithTooltip](/php/docs/reference/shopping-merchant-issueresolution/latest/V1.TextWithTooltip)`  

**Returns**

**Type**

**Description**

`$this`

### getAdditionalInput

Input that should be displayed when this option is selected.

The additional input will not contain a `ChoiceInput`.

**Returns**

**Type**

**Description**

`[Google\Shopping\Merchant\IssueResolution\V1\InputField](/php/docs/reference/shopping-merchant-issueresolution/latest/V1.InputField)|null`

### hasAdditionalInput

### clearAdditionalInput

### setAdditionalInput

Input that should be displayed when this option is selected.

The additional input will not contain a `ChoiceInput`.

**Parameter**

**Name**

**Description**

`var`

`[Google\Shopping\Merchant\IssueResolution\V1\InputField](/php/docs/reference/shopping-merchant-issueresolution/latest/V1.InputField)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
