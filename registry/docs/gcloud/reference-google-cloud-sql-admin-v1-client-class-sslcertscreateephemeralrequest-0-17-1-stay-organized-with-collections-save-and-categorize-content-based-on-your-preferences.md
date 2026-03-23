-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Sql Admin V1 Client - Class SslCertsCreateEphemeralRequest (0.17.1) Stay organized with collections Save and categorize content based on your preferences.

1.8.0 (latest) 1.7.0 1.6.0 1.5.0 1.4.0 1.3.1 1.2.6 1.1.0 1.0.0 0.19.0 0.18.0 0.17.1 0.16.1 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.1 0.2.12

Reference documentation and code samples for the Google Cloud Sql Admin V1 Client class SslCertsCreateEphemeralRequest.

SslCerts create ephemeral certificate request.

Generated from protobuf message `google.cloud.sql.v1.SslCertsCreateEphemeralRequest`

## Namespace

Google \\ Cloud \\ Sql \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ public_key`

`string`  

PEM encoded public key to include in the signed certificate.

`↳ access_token`

`string`  

Access token to include in the signed certificate.

### getPublicKey

PEM encoded public key to include in the signed certificate.

**Returns**

**Type**

**Description**

`string`

### setPublicKey

PEM encoded public key to include in the signed certificate.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAccessToken

Access token to include in the signed certificate.

**Returns**

**Type**

**Description**

`string`

### setAccessToken

Access token to include in the signed certificate.

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
