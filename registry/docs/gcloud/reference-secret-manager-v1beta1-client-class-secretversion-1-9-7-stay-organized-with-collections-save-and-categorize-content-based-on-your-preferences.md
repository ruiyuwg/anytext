-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Secret Manager V1beta1 Client - Class SecretVersion (1.9.7) Stay organized with collections Save and categorize content based on your preferences.

2.3.0 (latest) 2.2.2 2.1.1 2.0.2 1.15.4 1.13.0 1.12.3 1.11.0 1.10.4 1.9.7

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Secret Manager V1beta1 Client class SecretVersion.

A secret version resource in the Secret Manager API.

Generated from protobuf message `google.cloud.secrets.v1beta1.SecretVersion`

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

Output only. The resource name of the [SecretVersion](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion) in the format `projects/&#42;&#47;secrets/&#42;&#47;versions/&#42;`. [SecretVersion](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion) IDs in a [Secret](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.Secret) start at 1 and are incremented for each subsequent version of the secret.

`↳ create_time`

`Google\Protobuf\Timestamp`  

Output only. The time at which the [SecretVersion](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion) was created.

`↳ destroy_time`

`Google\Protobuf\Timestamp`  

Output only. The time this [SecretVersion](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion) was destroyed. Only present if [state](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion#_Google_Cloud_SecretManager_V1beta1_SecretVersion__getState__) is [DESTROYED](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion.State#_Google_Cloud_SecretManager_V1beta1_SecretVersion_State__DESTROYED).

`↳ state`

`int`  

Output only. The current state of the [SecretVersion](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion).

### getName

Output only. The resource name of the [SecretVersion](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion) in the format `projects/*/secrets/*/versions/*`.

[SecretVersion](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion) IDs in a [Secret](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.Secret) start at 1 and are incremented for each subsequent version of the secret.

Generated from protobuf field `string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`string`

### setName

Output only. The resource name of the [SecretVersion](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion) in the format `projects/*/secrets/*/versions/*`.

[SecretVersion](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion) IDs in a [Secret](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.Secret) start at 1 and are incremented for each subsequent version of the secret.

Generated from protobuf field `string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

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

Output only. The time at which the [SecretVersion](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion) was created.

Generated from protobuf field `.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`Google\Protobuf\Timestamp|null`

### hasCreateTime

### clearCreateTime

### setCreateTime

Output only. The time at which the [SecretVersion](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion) was created.

Generated from protobuf field `.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`var`

`Google\Protobuf\Timestamp`  

**Returns**

**Type**

**Description**

`$this`

### getDestroyTime

Output only. The time this [SecretVersion](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion) was destroyed.

Only present if [state](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion#_Google_Cloud_SecretManager_V1beta1_SecretVersion__getState__) is [DESTROYED](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion.State#_Google_Cloud_SecretManager_V1beta1_SecretVersion_State__DESTROYED).

Generated from protobuf field `.google.protobuf.Timestamp destroy_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`Google\Protobuf\Timestamp|null`

### hasDestroyTime

### clearDestroyTime

### setDestroyTime

Output only. The time this [SecretVersion](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion) was destroyed.

Only present if [state](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion#_Google_Cloud_SecretManager_V1beta1_SecretVersion__getState__) is [DESTROYED](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion.State#_Google_Cloud_SecretManager_V1beta1_SecretVersion_State__DESTROYED).

Generated from protobuf field `.google.protobuf.Timestamp destroy_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`var`

`Google\Protobuf\Timestamp`  

**Returns**

**Type**

**Description**

`$this`

### getState

Output only. The current state of the [SecretVersion](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion).

Generated from protobuf field `.google.cloud.secrets.v1beta1.SecretVersion.State state = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`int`

### setState

Output only. The current state of the [SecretVersion](/php/docs/reference/cloud-secret-manager/1.9.7/V1beta1.SecretVersion).

Generated from protobuf field `.google.cloud.secrets.v1beta1.SecretVersion.State state = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
