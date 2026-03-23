-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Recaptcha Enterprise V1 Client - Class UserId (1.16.1) Stay organized with collections Save and categorize content based on your preferences.

2.3.1 (latest) 2.3.0 2.2.1 2.1.3 2.0.1 1.17.2 1.16.1 1.15.0 1.14.0 1.13.0 1.12.2 1.8.0 1.7.0 1.6.0 1.5.2 1.4.2 1.3.2 1.2.6

Reference documentation and code samples for the Google Cloud Recaptcha Enterprise V1 Client class UserId.

An identifier associated with a user.

Generated from protobuf message `google.cloud.recaptchaenterprise.v1.UserId`

## Namespace

Google \\ Cloud \\ RecaptchaEnterprise \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ email`

`string`  

Optional. An email address.

`↳ phone_number`

`string`  

Optional. A phone number. Should use the E.164 format.

`↳ username`

`string`  

Optional. A unique username, if different from all the other identifiers and `account_id` that are provided. Can be a unique login handle or display name for a user.

### getEmail

Optional. An email address.

**Returns**

**Type**

**Description**

`string`

### hasEmail

### setEmail

Optional. An email address.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPhoneNumber

Optional. A phone number. Should use the E.164 format.

**Returns**

**Type**

**Description**

`string`

### hasPhoneNumber

### setPhoneNumber

Optional. A phone number. Should use the E.164 format.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getUsername

Optional. A unique username, if different from all the other identifiers and `account_id` that are provided. Can be a unique login handle or display name for a user.

**Returns**

**Type**

**Description**

`string`

### hasUsername

### setUsername

Optional. A unique username, if different from all the other identifiers and `account_id` that are provided. Can be a unique login handle or display name for a user.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getIdOneof

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
