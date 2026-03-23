-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Secret Manager V1 Client - Class GetSecretVersionRequest (1.10.4) Stay organized with collections Save and categorize content based on your preferences.

2.3.0 (latest) 2.2.2 2.1.1 2.0.2 1.15.4 1.13.0 1.12.3 1.11.0 1.10.4 1.9.7

Reference documentation and code samples for the Secret Manager V1 Client class GetSecretVersionRequest.

Request message for [SecretManagerService.GetSecretVersion](/php/docs/reference/cloud-secret-manager/1.10.4/V1.SecretManagerServiceClient#_Google_Cloud_SecretManager_V1_SecretManagerServiceClient__getSecretVersion__).

Generated from protobuf message `google.cloud.secretmanager.v1.GetSecretVersionRequest`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ name`

`string`  

Required. The resource name of the [SecretVersion](/php/docs/reference/cloud-secret-manager/1.10.4/V1.SecretVersion) in the format `projects/*/secrets/*/versions/*`. `projects/*/secrets/*/versions/latest` is an alias to the most recently created [SecretVersion](/php/docs/reference/cloud-secret-manager/1.10.4/V1.SecretVersion).

### getName

Required. The resource name of the [SecretVersion](/php/docs/reference/cloud-secret-manager/1.10.4/V1.SecretVersion) in the format `projects/*/secrets/*/versions/*`.

`projects/*/secrets/*/versions/latest` is an alias to the most recently created [SecretVersion](/php/docs/reference/cloud-secret-manager/1.10.4/V1.SecretVersion).

**Returns**

**Type**

**Description**

`string`

### setName

Required. The resource name of the [SecretVersion](/php/docs/reference/cloud-secret-manager/1.10.4/V1.SecretVersion) in the format `projects/*/secrets/*/versions/*`.

`projects/*/secrets/*/versions/latest` is an alias to the most recently created [SecretVersion](/php/docs/reference/cloud-secret-manager/1.10.4/V1.SecretVersion).

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
