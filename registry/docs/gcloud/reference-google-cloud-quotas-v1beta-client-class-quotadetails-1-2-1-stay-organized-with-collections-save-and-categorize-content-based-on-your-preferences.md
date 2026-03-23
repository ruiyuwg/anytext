-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Quotas V1beta Client - Class QuotaDetails (1.2.1) Stay organized with collections Save and categorize content based on your preferences.

1.5.5 (latest) 1.5.4 1.4.1 1.3.1 1.2.1 1.1.1 1.0.1 0.2.3 0.1.0

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Quotas V1beta Client class QuotaDetails.

The quota details for a map of dimensions.

Generated from protobuf message `google.api.cloudquotas.v1beta.QuotaDetails`

## Namespace

Google \\ Cloud \\ CloudQuotas \\ V1beta

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ value`

`int|string`  

The value currently in effect and being enforced.

`↳ rollout_info`

`[RolloutInfo](/php/docs/reference/cloud-quotas/1.2.1/V1beta.RolloutInfo)`  

Rollout information of this quota. This field is present only if the effective limit will change due to the ongoing rollout of the service config.

### getValue

The value currently in effect and being enforced.

**Returns**

**Type**

**Description**

`int|string`

### setValue

The value currently in effect and being enforced.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getRolloutInfo

Rollout information of this quota.

This field is present only if the effective limit will change due to the ongoing rollout of the service config.

**Returns**

**Type**

**Description**

`[RolloutInfo](/php/docs/reference/cloud-quotas/1.2.1/V1beta.RolloutInfo)|null`

### hasRolloutInfo

### clearRolloutInfo

### setRolloutInfo

Rollout information of this quota.

This field is present only if the effective limit will change due to the ongoing rollout of the service config.

**Parameter**

**Name**

**Description**

`var`

`[RolloutInfo](/php/docs/reference/cloud-quotas/1.2.1/V1beta.RolloutInfo)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
