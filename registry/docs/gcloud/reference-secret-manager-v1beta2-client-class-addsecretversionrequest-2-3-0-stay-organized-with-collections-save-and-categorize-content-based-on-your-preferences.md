-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Secret Manager V1beta2 Client - Class AddSecretVersionRequest (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

2.3.0 (latest) 2.2.2 2.1.1 2.0.2 1.15.4 1.13.0 1.12.3 1.11.0 1.10.4 1.9.7

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Secret Manager V1beta2 Client class AddSecretVersionRequest.

Request message for [SecretManagerService.AddSecretVersion](/php/docs/reference/cloud-secret-manager/latest/V1beta2.Client.SecretManagerServiceClient#_Google_Cloud_SecretManager_V1beta2_Client_SecretManagerServiceClient__addSecretVersion__).

Generated from protobuf message `google.cloud.secretmanager.v1beta2.AddSecretVersionRequest`

## Namespace

Google \\ Cloud \\ SecretManager \\ V1beta2

## Methods

### \_\_construct

Constructor.

**Parameter**

**Name**

**Description**

`data`

`mixed`  

### getParent

Required. The resource name of the [Secret](/php/docs/reference/cloud-secret-manager/latest/V1beta2.Secret) to associate with the [SecretVersion](/php/docs/reference/cloud-secret-manager/latest/V1beta2.SecretVersion) in the format `projects/*/secrets/*` or `projects/*/locations/*/secrets/*`.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The resource name of the [Secret](/php/docs/reference/cloud-secret-manager/latest/V1beta2.Secret) to associate with the [SecretVersion](/php/docs/reference/cloud-secret-manager/latest/V1beta2.SecretVersion) in the format `projects/*/secrets/*` or `projects/*/locations/*/secrets/*`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPayload

Required. The secret payload of the [SecretVersion](/php/docs/reference/cloud-secret-manager/latest/V1beta2.SecretVersion).

**Returns**

**Type**

**Description**

`[SecretPayload](/php/docs/reference/cloud-secret-manager/latest/V1beta2.SecretPayload)|null`

### hasPayload

### clearPayload

### setPayload

Required. The secret payload of the [SecretVersion](/php/docs/reference/cloud-secret-manager/latest/V1beta2.SecretVersion).

**Parameter**

**Name**

**Description**

`var`

`[SecretPayload](/php/docs/reference/cloud-secret-manager/latest/V1beta2.SecretPayload)`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameters**

**Name**

**Description**

`parent`

`string`  

Required. The resource name of the [Secret](/php/docs/reference/cloud-secret-manager/latest/V1beta2.Secret) to associate with the [SecretVersion](/php/docs/reference/cloud-secret-manager/latest/V1beta2.SecretVersion) in the format `projects/*/secrets/*` or `projects/*/locations/*/secrets/*`. Please see SecretManagerServiceClient::secretName() for help formatting this field.

`payload`

`[SecretPayload](/php/docs/reference/cloud-secret-manager/latest/V1beta2.SecretPayload)`  

Required. The secret payload of the [SecretVersion](/php/docs/reference/cloud-secret-manager/latest/V1beta2.SecretVersion).

**Returns**

**Type**

**Description**

`[AddSecretVersionRequest](/php/docs/reference/cloud-secret-manager/latest/V1beta2.AddSecretVersionRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
