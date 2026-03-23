-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Deploy V1 Client - Class Job (0.19.1) Stay organized with collections Save and categorize content based on your preferences.

2.0.0 (latest) 1.6.3 1.5.7 1.4.0 1.3.0 1.2.0 1.1.1 1.0.0 0.19.1 0.18.1 0.17.0 0.16.0 0.15.0 0.14.0 0.13.1 0.12.1 0.11.1 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.4

Reference documentation and code samples for the Google Cloud Deploy V1 Client class Job.

Job represents an operation for a `Rollout`.

Generated from protobuf message `google.cloud.deploy.v1.Job`

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

`↳ id`

`string`  

Output only. The ID of the Job.

`↳ state`

`int`  

Output only. The current state of the Job.

`↳ skip_message`

`string`  

Output only. Additional information on why the Job was skipped, if available.

`↳ job_run`

`string`  

Output only. The name of the `JobRun` responsible for the most recent invocation of this Job.

`↳ deploy_job`

`[Google\Cloud\Deploy\V1\DeployJob](/php/docs/reference/cloud-deploy/0.19.1/V1.DeployJob)`  

Output only. A deploy Job.

`↳ verify_job`

`[Google\Cloud\Deploy\V1\VerifyJob](/php/docs/reference/cloud-deploy/0.19.1/V1.VerifyJob)`  

Output only. A verify Job.

`↳ predeploy_job`

`[Google\Cloud\Deploy\V1\PredeployJob](/php/docs/reference/cloud-deploy/0.19.1/V1.PredeployJob)`  

Output only. A predeploy Job.

`↳ postdeploy_job`

`[Google\Cloud\Deploy\V1\PostdeployJob](/php/docs/reference/cloud-deploy/0.19.1/V1.PostdeployJob)`  

Output only. A postdeploy Job.

`↳ create_child_rollout_job`

`[Google\Cloud\Deploy\V1\CreateChildRolloutJob](/php/docs/reference/cloud-deploy/0.19.1/V1.CreateChildRolloutJob)`  

Output only. A createChildRollout Job.

`↳ advance_child_rollout_job`

`[Google\Cloud\Deploy\V1\AdvanceChildRolloutJob](/php/docs/reference/cloud-deploy/0.19.1/V1.AdvanceChildRolloutJob)`  

Output only. An advanceChildRollout Job.

### getId

Output only. The ID of the Job.

**Returns**

**Type**

**Description**

`string`

### setId

Output only. The ID of the Job.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getState

Output only. The current state of the Job.

**Returns**

**Type**

**Description**

`int`

### setState

Output only. The current state of the Job.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getSkipMessage

Output only. Additional information on why the Job was skipped, if available.

**Returns**

**Type**

**Description**

`string`

### setSkipMessage

Output only. Additional information on why the Job was skipped, if available.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getJobRun

Output only. The name of the `JobRun` responsible for the most recent invocation of this Job.

**Returns**

**Type**

**Description**

`string`

### setJobRun

Output only. The name of the `JobRun` responsible for the most recent invocation of this Job.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDeployJob

Output only. A deploy Job.

**Returns**

**Type**

**Description**

`[Google\Cloud\Deploy\V1\DeployJob](/php/docs/reference/cloud-deploy/0.19.1/V1.DeployJob)|null`

### hasDeployJob

### setDeployJob

Output only. A deploy Job.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Deploy\V1\DeployJob](/php/docs/reference/cloud-deploy/0.19.1/V1.DeployJob)`  

**Returns**

**Type**

**Description**

`$this`

### getVerifyJob

Output only. A verify Job.

**Returns**

**Type**

**Description**

`[Google\Cloud\Deploy\V1\VerifyJob](/php/docs/reference/cloud-deploy/0.19.1/V1.VerifyJob)|null`

### hasVerifyJob

### setVerifyJob

Output only. A verify Job.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Deploy\V1\VerifyJob](/php/docs/reference/cloud-deploy/0.19.1/V1.VerifyJob)`  

**Returns**

**Type**

**Description**

`$this`

### getPredeployJob

Output only. A predeploy Job.

**Returns**

**Type**

**Description**

`[Google\Cloud\Deploy\V1\PredeployJob](/php/docs/reference/cloud-deploy/0.19.1/V1.PredeployJob)|null`

### hasPredeployJob

### setPredeployJob

Output only. A predeploy Job.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Deploy\V1\PredeployJob](/php/docs/reference/cloud-deploy/0.19.1/V1.PredeployJob)`  

**Returns**

**Type**

**Description**

`$this`

### getPostdeployJob

Output only. A postdeploy Job.

**Returns**

**Type**

**Description**

`[Google\Cloud\Deploy\V1\PostdeployJob](/php/docs/reference/cloud-deploy/0.19.1/V1.PostdeployJob)|null`

### hasPostdeployJob

### setPostdeployJob

Output only. A postdeploy Job.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Deploy\V1\PostdeployJob](/php/docs/reference/cloud-deploy/0.19.1/V1.PostdeployJob)`  

**Returns**

**Type**

**Description**

`$this`

### getCreateChildRolloutJob

Output only. A createChildRollout Job.

**Returns**

**Type**

**Description**

`[Google\Cloud\Deploy\V1\CreateChildRolloutJob](/php/docs/reference/cloud-deploy/0.19.1/V1.CreateChildRolloutJob)|null`

### hasCreateChildRolloutJob

### setCreateChildRolloutJob

Output only. A createChildRollout Job.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Deploy\V1\CreateChildRolloutJob](/php/docs/reference/cloud-deploy/0.19.1/V1.CreateChildRolloutJob)`  

**Returns**

**Type**

**Description**

`$this`

### getAdvanceChildRolloutJob

Output only. An advanceChildRollout Job.

**Returns**

**Type**

**Description**

`[Google\Cloud\Deploy\V1\AdvanceChildRolloutJob](/php/docs/reference/cloud-deploy/0.19.1/V1.AdvanceChildRolloutJob)|null`

### hasAdvanceChildRolloutJob

### setAdvanceChildRolloutJob

Output only. An advanceChildRollout Job.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Deploy\V1\AdvanceChildRolloutJob](/php/docs/reference/cloud-deploy/0.19.1/V1.AdvanceChildRolloutJob)`  

**Returns**

**Type**

**Description**

`$this`

### getJobType

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
