-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud OsLogin V1beta Client - Class ImportSshPublicKeyResponse (1.4.6) Stay organized with collections Save and categorize content based on your preferences.

2.1.3 (latest) 2.1.2 2.0.5 1.9.6 1.8.0 1.7.0 1.6.0 1.5.2 1.4.6

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud OsLogin V1beta Client class ImportSshPublicKeyResponse.

A response message for importing an SSH public key.

Generated from protobuf message `google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ login_profile`

`[Google\Cloud\OsLogin\V1beta\LoginProfile](/php/docs/reference/cloud-oslogin/1.4.6/V1beta.LoginProfile)`  

The login profile information for the user.

`↳ details`

`string`  

Detailed information about import results.

### getLoginProfile

The login profile information for the user.

**Returns**

**Type**

**Description**

`[Google\Cloud\OsLogin\V1beta\LoginProfile](/php/docs/reference/cloud-oslogin/1.4.6/V1beta.LoginProfile)|null`

### hasLoginProfile

### clearLoginProfile

### setLoginProfile

The login profile information for the user.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\OsLogin\V1beta\LoginProfile](/php/docs/reference/cloud-oslogin/1.4.6/V1beta.LoginProfile)`  

**Returns**

**Type**

**Description**

`$this`

### getDetails

Detailed information about import results.

**Returns**

**Type**

**Description**

`string`

### setDetails

Detailed information about import results.

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

Last updated 2026-03-18 UTC.
