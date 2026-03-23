-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Data Loss Prevention V2 Client - Class SecretManagerCredential (1.14.0) Stay organized with collections Save and categorize content based on your preferences.

2.9.2 (latest) 2.9.1 2.8.1 2.7.0 2.6.1 2.4.1 2.3.0 2.2.3 2.1.0 2.0.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.1 1.14.0 1.13.2 1.12.0 1.11.0 1.10.2 1.9.0 1.8.6

Reference documentation and code samples for the Data Loss Prevention V2 Client class SecretManagerCredential.

A credential consisting of a username and password, where the password is stored in a Secret Manager resource.

Note: Secret Manager [charges apply](https://cloud.google.com/secret-manager/pricing).

Generated from protobuf message `google.privacy.dlp.v2.SecretManagerCredential`

## Namespace

Google \\ Cloud \\ Dlp \\ V2

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ username`

`string`  

Required. The username.

`↳ password_secret_version_name`

`string`  

Required. The name of the Secret Manager resource that stores the password, in the form `projects/project-id/secrets/secret-name/versions/version`.

### getUsername

Required. The username.

**Returns**

**Type**

**Description**

`string`

### setUsername

Required. The username.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPasswordSecretVersionName

Required. The name of the Secret Manager resource that stores the password, in the form `projects/project-id/secrets/secret-name/versions/version`.

**Returns**

**Type**

**Description**

`string`

### setPasswordSecretVersionName

Required. The name of the Secret Manager resource that stores the password, in the form `projects/project-id/secrets/secret-name/versions/version`.

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
