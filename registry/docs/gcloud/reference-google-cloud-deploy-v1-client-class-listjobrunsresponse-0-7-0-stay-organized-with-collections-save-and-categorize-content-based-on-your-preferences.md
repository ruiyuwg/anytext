-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Deploy V1 Client - Class ListJobRunsResponse (0.7.0) Stay organized with collections Save and categorize content based on your preferences.

2.0.0 (latest) 1.6.3 1.5.7 1.4.0 1.3.0 1.2.0 1.1.1 1.0.0 0.19.1 0.18.1 0.17.0 0.16.0 0.15.0 0.14.0 0.13.1 0.12.1 0.11.1 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.4

Reference documentation and code samples for the Google Cloud Deploy V1 Client class ListJobRunsResponse.

ListJobRunsResponse is the response object returned by `ListJobRuns`.

Generated from protobuf message `google.cloud.deploy.v1.ListJobRunsResponse`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ job_runs`

`array<[Google\Cloud\Deploy\V1\JobRun](/php/docs/reference/cloud-deploy/0.7.0/V1.JobRun)>`  

The `JobRun` objects.

`↳ next_page_token`

`string`  

A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

`↳ unreachable`

`array`  

Locations that could not be reached

### getJobRuns

The `JobRun` objects.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setJobRuns

The `JobRun` objects.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Deploy\V1\JobRun](/php/docs/reference/cloud-deploy/0.7.0/V1.JobRun)>`  

**Returns**

**Type**

**Description**

`$this`

### getNextPageToken

A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

**Returns**

**Type**

**Description**

`string`

### setNextPageToken

A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getUnreachable

Locations that could not be reached

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setUnreachable

Locations that could not be reached

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
