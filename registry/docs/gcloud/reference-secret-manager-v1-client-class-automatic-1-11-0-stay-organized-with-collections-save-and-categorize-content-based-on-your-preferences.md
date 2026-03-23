-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Secret Manager V1 Client - Class Automatic (1.11.0) Stay organized with collections Save and categorize content based on your preferences.

2.3.0 (latest) 2.2.2 2.1.1 2.0.2 1.15.4 1.13.0 1.12.3 1.11.0 1.10.4 1.9.7

Reference documentation and code samples for the Secret Manager V1 Client class Automatic.

A replication policy that replicates the [Secret](/php/docs/reference/cloud-secret-manager/1.11.0/V1.Secret) payload without any restrictions.

Generated from protobuf message `google.cloud.secretmanager.v1.Replication.Automatic`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ customer_managed_encryption`

`[Google\Cloud\SecretManager\V1\CustomerManagedEncryption](/php/docs/reference/cloud-secret-manager/1.11.0/V1.CustomerManagedEncryption)`  

Optional. The customer-managed encryption configuration of the [Secret](/php/docs/reference/cloud-secret-manager/1.11.0/V1.Secret). If no configuration is provided, Google-managed default encryption is used. Updates to the [Secret](/php/docs/reference/cloud-secret-manager/1.11.0/V1.Secret) encryption configuration only apply to [SecretVersions](/php/docs/reference/cloud-secret-manager/1.11.0/V1.SecretVersion) added afterwards. They do not apply retroactively to existing [SecretVersions](/php/docs/reference/cloud-secret-manager/1.11.0/V1.SecretVersion).

### getCustomerManagedEncryption

Optional. The customer-managed encryption configuration of the [Secret](/php/docs/reference/cloud-secret-manager/1.11.0/V1.Secret). If no configuration is provided, Google-managed default encryption is used.

Updates to the [Secret](/php/docs/reference/cloud-secret-manager/1.11.0/V1.Secret) encryption configuration only apply to [SecretVersions](/php/docs/reference/cloud-secret-manager/1.11.0/V1.SecretVersion) added afterwards. They do not apply retroactively to existing [SecretVersions](/php/docs/reference/cloud-secret-manager/1.11.0/V1.SecretVersion).

**Returns**

**Type**

**Description**

`[Google\Cloud\SecretManager\V1\CustomerManagedEncryption](/php/docs/reference/cloud-secret-manager/1.11.0/V1.CustomerManagedEncryption)|null`

### hasCustomerManagedEncryption

### clearCustomerManagedEncryption

### setCustomerManagedEncryption

Optional. The customer-managed encryption configuration of the [Secret](/php/docs/reference/cloud-secret-manager/1.11.0/V1.Secret). If no configuration is provided, Google-managed default encryption is used.

Updates to the [Secret](/php/docs/reference/cloud-secret-manager/1.11.0/V1.Secret) encryption configuration only apply to [SecretVersions](/php/docs/reference/cloud-secret-manager/1.11.0/V1.SecretVersion) added afterwards. They do not apply retroactively to existing [SecretVersions](/php/docs/reference/cloud-secret-manager/1.11.0/V1.SecretVersion).

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\SecretManager\V1\CustomerManagedEncryption](/php/docs/reference/cloud-secret-manager/1.11.0/V1.CustomerManagedEncryption)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
