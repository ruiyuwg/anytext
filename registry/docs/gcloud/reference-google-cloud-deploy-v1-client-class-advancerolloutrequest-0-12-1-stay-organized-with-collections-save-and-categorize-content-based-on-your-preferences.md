-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Deploy V1 Client - Class AdvanceRolloutRequest (0.12.1) Stay organized with collections Save and categorize content based on your preferences.

2.0.0 (latest) 1.6.3 1.5.7 1.4.0 1.3.0 1.2.0 1.1.1 1.0.0 0.19.1 0.18.1 0.17.0 0.16.0 0.15.0 0.14.0 0.13.1 0.12.1 0.11.1 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.4

Reference documentation and code samples for the Google Cloud Deploy V1 Client class AdvanceRolloutRequest.

The request object used by `AdvanceRollout`.

Generated from protobuf message `google.cloud.deploy.v1.AdvanceRolloutRequest`

## Namespace

Google \\ Cloud \\ Deploy \\ V1

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

Required. Name of the Rollout. Format is projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/{rollout}.

`↳ phase_id`

`string`  

Required. The phase ID to advance the `Rollout` to.

### getName

Required. Name of the Rollout. Format is projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/{rollout}.

**Returns**

**Type**

**Description**

`string`

### setName

Required. Name of the Rollout. Format is projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/{rollout}.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPhaseId

Required. The phase ID to advance the `Rollout` to.

**Returns**

**Type**

**Description**

`string`

### setPhaseId

Required. The phase ID to advance the `Rollout` to.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameters**

**Name**

**Description**

`name`

`string`  

Required. Name of the Rollout. Format is projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/{rollout}. Please see [Google\\Cloud\\Deploy\\V1\\CloudDeployClient::rolloutName()](/php/docs/reference/cloud-deploy/0.12.1/V1.CloudDeployClient#_Google_Cloud_Deploy_V1_CloudDeployClient__rolloutName__) for help formatting this field.

`phaseId`

`string`  

Required. The phase ID to advance the `Rollout` to.

**Returns**

**Type**

**Description**

`[Google\Cloud\Deploy\V1\AdvanceRolloutRequest](/php/docs/reference/cloud-deploy/0.12.1/V1.AdvanceRolloutRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
