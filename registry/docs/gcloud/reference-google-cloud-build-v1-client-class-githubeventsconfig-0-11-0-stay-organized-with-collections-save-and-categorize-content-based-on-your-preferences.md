-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Build V1 Client - Class GitHubEventsConfig (0.11.0) Stay organized with collections Save and categorize content based on your preferences.

1.1.2 (latest) 1.1.1 1.0.4 0.16.3 0.15.0 0.14.0 0.13.2 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.3 0.6.1 0.5.1 0.4.0 0.3.8

Reference documentation and code samples for the Google Cloud Build V1 Client class GitHubEventsConfig.

GitHubEventsConfig describes the configuration of a trigger that creates a build whenever a GitHub event is received.

Generated from protobuf message `google.devtools.cloudbuild.v1.GitHubEventsConfig`

## Namespace

Google \\ Cloud \\ Build \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ installation_id`

`int|string`  

The installationID that emits the GitHub event.

`↳ owner`

`string`  

Owner of the repository. For example: The owner for [https://github.com/googlecloudplatform/cloud-builders](https://github.com/googlecloudplatform/cloud-builders) is "googlecloudplatform".

`↳ name`

`string`  

Name of the repository. For example: The name for [https://github.com/googlecloudplatform/cloud-builders](https://github.com/googlecloudplatform/cloud-builders) is "cloud-builders".

`↳ pull_request`

`[Google\Cloud\Build\V1\PullRequestFilter](/php/docs/reference/cloud-build/0.11.0/V1.PullRequestFilter)`  

filter to match changes in pull requests.

`↳ push`

`[Google\Cloud\Build\V1\PushFilter](/php/docs/reference/cloud-build/0.11.0/V1.PushFilter)`  

filter to match changes in refs like branches, tags.

### getInstallationId

The installationID that emits the GitHub event.

**Returns**

**Type**

**Description**

`int|string`

### setInstallationId

The installationID that emits the GitHub event.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getOwner

Owner of the repository. For example: The owner for [https://github.com/googlecloudplatform/cloud-builders](https://github.com/googlecloudplatform/cloud-builders) is "googlecloudplatform".

**Returns**

**Type**

**Description**

`string`

### setOwner

Owner of the repository. For example: The owner for [https://github.com/googlecloudplatform/cloud-builders](https://github.com/googlecloudplatform/cloud-builders) is "googlecloudplatform".

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getName

Name of the repository. For example: The name for [https://github.com/googlecloudplatform/cloud-builders](https://github.com/googlecloudplatform/cloud-builders) is "cloud-builders".

**Returns**

**Type**

**Description**

`string`

### setName

Name of the repository. For example: The name for [https://github.com/googlecloudplatform/cloud-builders](https://github.com/googlecloudplatform/cloud-builders) is "cloud-builders".

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPullRequest

filter to match changes in pull requests.

**Returns**

**Type**

**Description**

`[Google\Cloud\Build\V1\PullRequestFilter](/php/docs/reference/cloud-build/0.11.0/V1.PullRequestFilter)|null`

### hasPullRequest

### setPullRequest

filter to match changes in pull requests.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Build\V1\PullRequestFilter](/php/docs/reference/cloud-build/0.11.0/V1.PullRequestFilter)`  

**Returns**

**Type**

**Description**

`$this`

### getPush

filter to match changes in refs like branches, tags.

**Returns**

**Type**

**Description**

`[Google\Cloud\Build\V1\PushFilter](/php/docs/reference/cloud-build/0.11.0/V1.PushFilter)|null`

### hasPush

### setPush

filter to match changes in refs like branches, tags.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Build\V1\PushFilter](/php/docs/reference/cloud-build/0.11.0/V1.PushFilter)`  

**Returns**

**Type**

**Description**

`$this`

### getEvent

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
