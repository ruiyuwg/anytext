-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Apps Meet V2 Client - Class SignedinUser (0.3.0) Stay organized with collections Save and categorize content based on your preferences.

0.5.4 (latest) 0.5.3 0.4.1 0.3.0 0.2.6 0.1.0

Reference documentation and code samples for the Google Apps Meet V2 Client class SignedinUser.

A signed-in user can be: a) An individual joining from a personal computer, mobile device, or through companion mode.

b) A robot account used by conference room devices.

Generated from protobuf message `google.apps.meet.v2.SignedinUser`

## Namespace

Google \\ Apps \\ Meet \\ V2

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ user`

`string`  

Output only. Unique ID for the user. Interoperable with Admin SDK API and People API. Format: `users/{user}`

`↳ display_name`

`string`  

Output only. For a personal device, it's the user's first name and last name. For a robot account, it's the administrator-specified device name. For example, "Altostrat Room".

### getUser

Output only. Unique ID for the user. Interoperable with Admin SDK API and People API. Format: `users/{user}`

**Returns**

**Type**

**Description**

`string`

### setUser

Output only. Unique ID for the user. Interoperable with Admin SDK API and People API. Format: `users/{user}`

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

Output only. For a personal device, it's the user's first name and last name. For a robot account, it's the administrator-specified device name.

For example, "Altostrat Room".

**Returns**

**Type**

**Description**

`string`

### setDisplayName

Output only. For a personal device, it's the user's first name and last name. For a robot account, it's the administrator-specified device name.

For example, "Altostrat Room".

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
