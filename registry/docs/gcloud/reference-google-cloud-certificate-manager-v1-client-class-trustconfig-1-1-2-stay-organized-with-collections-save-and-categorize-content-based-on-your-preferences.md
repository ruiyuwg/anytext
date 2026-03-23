-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Certificate Manager V1 Client - Class TrustConfig (1.1.2) Stay organized with collections Save and categorize content based on your preferences.

1.1.2 (latest) 1.1.1 1.0.4 0.7.3 0.6.0 0.5.2 0.4.2 0.3.7

Reference documentation and code samples for the Google Cloud Certificate Manager V1 Client class TrustConfig.

Defines a trust config.

Generated from protobuf message `google.cloud.certificatemanager.v1.TrustConfig`

## Namespace

Google \\ Cloud \\ CertificateManager \\ V1

## Methods

### \_\_construct

Constructor.

**Parameter**

**Name**

**Description**

`data`

`mixed`  

### getName

A user-defined name of the trust config. TrustConfig names must be unique globally and match pattern `projects/*/locations/*/trustConfigs/*`.

**Returns**

**Type**

**Description**

`string`

### setName

A user-defined name of the trust config. TrustConfig names must be unique globally and match pattern `projects/*/locations/*/trustConfigs/*`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCreateTime

Output only. The creation timestamp of a TrustConfig.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasCreateTime

### clearCreateTime

### setCreateTime

Output only. The creation timestamp of a TrustConfig.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getUpdateTime

Output only. The last update timestamp of a TrustConfig.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasUpdateTime

### clearUpdateTime

### setUpdateTime

Output only. The last update timestamp of a TrustConfig.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getLabels

Set of labels associated with a TrustConfig.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setLabels

Set of labels associated with a TrustConfig.

**Parameter**

**Name**

**Description**

`var`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

**Returns**

**Type**

**Description**

`$this`

### getDescription

One or more paragraphs of text description of a TrustConfig.

**Returns**

**Type**

**Description**

`string`

### setDescription

One or more paragraphs of text description of a TrustConfig.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getEtag

This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.

**Returns**

**Type**

**Description**

`string`

### setEtag

This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getTrustStores

Set of trust stores to perform validation against.

This field is supported when TrustConfig is configured with Load Balancers, currently not supported for SPIFFE certificate validation. Only one TrustStore specified is currently allowed.

**Returns**

**Type**

**Description**

`[Google\Protobuf\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/RepeatedField)<[TrustConfig\TrustStore](/php/docs/reference/cloud-certificate-manager/latest/V1.TrustConfig.TrustStore)>`

### setTrustStores

Set of trust stores to perform validation against.

This field is supported when TrustConfig is configured with Load Balancers, currently not supported for SPIFFE certificate validation. Only one TrustStore specified is currently allowed.

**Parameter**

**Name**

**Description**

`var`

`array<[TrustConfig\TrustStore](/php/docs/reference/cloud-certificate-manager/latest/V1.TrustConfig.TrustStore)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
