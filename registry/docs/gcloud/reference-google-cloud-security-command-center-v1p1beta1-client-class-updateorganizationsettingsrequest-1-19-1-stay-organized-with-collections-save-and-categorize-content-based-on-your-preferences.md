-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Security Command Center V1p1beta1 Client - Class UpdateOrganizationSettingsRequest (1.19.1) Stay organized with collections Save and categorize content based on your preferences.

2.5.0 (latest) 2.4.2 2.3.0 2.2.1 2.1.1 2.0.4 1.32.0 1.31.0 1.30.0 1.29.0 1.28.2 1.21.0 1.20.2 1.19.1 1.18.0 1.17.0 1.16.0 1.15.1 1.14.2 1.13.1

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Security Command Center V1p1beta1 Client class UpdateOrganizationSettingsRequest.

Request message for updating an organization's settings.

Generated from protobuf message `google.cloud.securitycenter.v1p1beta1.UpdateOrganizationSettingsRequest`

## Namespace

Google \\ Cloud \\ SecurityCenter \\ V1p1beta1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ organization_settings`

`[Google\Cloud\SecurityCenter\V1p1beta1\OrganizationSettings](/php/docs/reference/cloud-security-center/1.19.1/V1p1beta1.OrganizationSettings)`  

Required. The organization settings resource to update.

`↳ update_mask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

The FieldMask to use when updating the settings resource. If empty all mutable fields will be updated.

### getOrganizationSettings

Required. The organization settings resource to update.

**Returns**

**Type**

**Description**

`[Google\Cloud\SecurityCenter\V1p1beta1\OrganizationSettings](/php/docs/reference/cloud-security-center/1.19.1/V1p1beta1.OrganizationSettings)|null`

### hasOrganizationSettings

### clearOrganizationSettings

### setOrganizationSettings

Required. The organization settings resource to update.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\SecurityCenter\V1p1beta1\OrganizationSettings](/php/docs/reference/cloud-security-center/1.19.1/V1p1beta1.OrganizationSettings)`  

**Returns**

**Type**

**Description**

`$this`

### getUpdateMask

The FieldMask to use when updating the settings resource.

If empty all mutable fields will be updated.

**Returns**

**Type**

**Description**

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)|null`

### hasUpdateMask

### clearUpdateMask

### setUpdateMask

The FieldMask to use when updating the settings resource.

If empty all mutable fields will be updated.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
