-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Video Live Stream V1 Client - Class SecretManagerSource (1.4.0) Stay organized with collections Save and categorize content based on your preferences.

1.4.0 (latest) 1.3.2 1.2.1 1.1.3 1.0.0 0.7.5 0.6.2 0.5.0 0.4.2 0.3.2 0.2.6

Reference documentation and code samples for the Google Cloud Video Live Stream V1 Client class SecretManagerSource.

Configuration for secrets stored in Google Secret Manager.

Generated from protobuf message `google.cloud.video.livestream.v1.Encryption.SecretManagerSource`

## Namespace

Google \\ Cloud \\ Video \\ LiveStream \\ V1 \\ Encryption

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ secret_version`

`string`  

Required. The name of the Secret Version containing the encryption key. `projects/{project}/secrets/{secret_id}/versions/{version_number}`

### getSecretVersion

Required. The name of the Secret Version containing the encryption key.

`projects/{project}/secrets/{secret_id}/versions/{version_number}`

**Returns**

**Type**

**Description**

`string`

### setSecretVersion

Required. The name of the Secret Version containing the encryption key.

`projects/{project}/secrets/{secret_id}/versions/{version_number}`

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
