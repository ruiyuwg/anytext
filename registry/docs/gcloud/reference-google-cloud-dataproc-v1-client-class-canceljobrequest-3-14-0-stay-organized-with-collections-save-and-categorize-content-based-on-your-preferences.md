-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataproc V1 Client - Class CancelJobRequest (3.14.0) Stay organized with collections Save and categorize content based on your preferences.

3.14.0 (latest) 3.13.4 3.12.0 3.11.0 3.10.1 3.9.0 3.8.1 3.7.1 3.6.1 3.5.1 3.4.0 3.3.0 3.2.2 2.9.1 2.8.2 2.7.0 2.6.1 2.5.0 2.3.0 2.2.3 2.1.0 2.0.0

Reference documentation and code samples for the Google Cloud Dataproc V1 Client class CancelJobRequest.

A request to cancel a job.

Generated from protobuf message `google.cloud.dataproc.v1.CancelJobRequest`

## Namespace

Google \\ Cloud \\ Dataproc \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ project_id`

`string`  

Required. The ID of the Google Cloud Platform project that the job belongs to.

`↳ region`

`string`  

Required. The Dataproc region in which to handle the request.

`↳ job_id`

`string`  

Required. The job ID.

### getProjectId

Required. The ID of the Google Cloud Platform project that the job belongs to.

**Returns**

**Type**

**Description**

`string`

### setProjectId

Required. The ID of the Google Cloud Platform project that the job belongs to.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getRegion

Required. The Dataproc region in which to handle the request.

**Returns**

**Type**

**Description**

`string`

### setRegion

Required. The Dataproc region in which to handle the request.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getJobId

Required. The job ID.

**Returns**

**Type**

**Description**

`string`

### setJobId

Required. The job ID.

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

`projectId`

`string`  

Required. The ID of the Google Cloud Platform project that the job belongs to.

`region`

`string`  

Required. The Dataproc region in which to handle the request.

`jobId`

`string`  

Required. The job ID.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dataproc\V1\CancelJobRequest](/php/docs/reference/cloud-dataproc/latest/V1.CancelJobRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
