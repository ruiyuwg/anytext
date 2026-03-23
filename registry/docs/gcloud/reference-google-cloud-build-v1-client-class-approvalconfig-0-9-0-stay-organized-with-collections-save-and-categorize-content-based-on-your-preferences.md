-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Build V1 Client - Class ApprovalConfig (0.9.0) Stay organized with collections Save and categorize content based on your preferences.

1.1.2 (latest) 1.1.1 1.0.4 0.16.3 0.15.0 0.14.0 0.13.2 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.3 0.6.1 0.5.1 0.4.0 0.3.8

Reference documentation and code samples for the Google Cloud Build V1 Client class ApprovalConfig.

ApprovalConfig describes configuration for manual approval of a build.

Generated from protobuf message `google.devtools.cloudbuild.v1.ApprovalConfig`

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

`↳ approval_required`

`bool`  

Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start.

### getApprovalRequired

Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start.

**Returns**

**Type**

**Description**

`bool`

### setApprovalRequired

Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
