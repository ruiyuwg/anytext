-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Channel V1 Client - Class ContactInfo (1.5.0) Stay organized with collections Save and categorize content based on your preferences.

2.4.1 (latest) 2.4.0 2.3.1 2.2.1 2.1.4 2.0.0 1.9.5 1.8.2 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.1 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Channel V1 Client class ContactInfo.

Contact information for a customer account.

Generated from protobuf message `google.cloud.channel.v1.ContactInfo`

## Namespace

Google \\ Cloud \\ Channel \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ first_name`

`string`  

The customer account contact's first name. Optional for Team customers.

`↳ last_name`

`string`  

The customer account contact's last name. Optional for Team customers.

`↳ display_name`

`string`  

Output only. The customer account contact's display name, formatted as a combination of the customer's first and last name.

`↳ email`

`string`  

The customer account's contact email. Required for entitlements that create admin.google.com accounts, and serves as the customer's username for those accounts. Use this email to invite Team customers.

`↳ title`

`string`  

Optional. The customer account contact's job title.

`↳ phone`

`string`  

The customer account's contact phone number.

### getFirstName

The customer account contact's first name. Optional for Team customers.

**Returns**

**Type**

**Description**

`string`

### setFirstName

The customer account contact's first name. Optional for Team customers.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getLastName

The customer account contact's last name. Optional for Team customers.

**Returns**

**Type**

**Description**

`string`

### setLastName

The customer account contact's last name. Optional for Team customers.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDisplayName

Output only. The customer account contact's display name, formatted as a combination of the customer's first and last name.

**Returns**

**Type**

**Description**

`string`

### setDisplayName

Output only. The customer account contact's display name, formatted as a combination of the customer's first and last name.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getEmail

The customer account's contact email. Required for entitlements that create admin.google.com accounts, and serves as the customer's username for those accounts. Use this email to invite Team customers.

**Returns**

**Type**

**Description**

`string`

### setEmail

The customer account's contact email. Required for entitlements that create admin.google.com accounts, and serves as the customer's username for those accounts. Use this email to invite Team customers.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getTitle

Optional. The customer account contact's job title.

**Returns**

**Type**

**Description**

`string`

### setTitle

Optional. The customer account contact's job title.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPhone

The customer account's contact phone number.

**Returns**

**Type**

**Description**

`string`

### setPhone

The customer account's contact phone number.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
