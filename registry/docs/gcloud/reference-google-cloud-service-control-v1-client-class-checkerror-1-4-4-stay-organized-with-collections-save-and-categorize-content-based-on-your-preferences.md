-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Service Control V1 Client - Class CheckError (1.4.4) Stay organized with collections Save and categorize content based on your preferences.

2.2.0 (latest) 2.1.1 2.0.4 1.4.4 1.3.0 1.2.1 1.1.1 1.0.6

Reference documentation and code samples for the Google Cloud Service Control V1 Client class CheckError.

Defines the errors to be returned in [google.api.servicecontrol.v1.CheckResponse.check\_errors](/php/docs/reference/cloud-service-control/1.4.4/V1.CheckResponse#_Google_Cloud_ServiceControl_V1_CheckResponse__getCheckErrors__).

Generated from protobuf message `google.api.servicecontrol.v1.CheckError`

## Namespace

Google \\ Cloud \\ ServiceControl \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ code`

`int`  

The error code.

`↳ subject`

`string`  

Subject to whom this error applies. See the specific code enum for more details on this field. For example: - "project:

`↳ detail`

`string`  

Free-form text providing details on the error cause of the error.

`↳ status`

`[Google\Rpc\Status](https://googleapis.github.io/common-protos-php#Google/Rpc/Status)`  

Contains public information about the check error. If available, `status.code` will be non zero and client can propagate it out as public error.

### getCode

The error code.

**Returns**

**Type**

**Description**

`int`

### setCode

The error code.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getSubject

Subject to whom this error applies. See the specific code enum for more details on this field. For example:

-   "project:
-   "folder:
-   "organization:

**Returns**

**Type**

**Description**

`string`

### setSubject

Subject to whom this error applies. See the specific code enum for more details on this field. For example:

-   "project:
-   "folder:
-   "organization:

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDetail

Free-form text providing details on the error cause of the error.

**Returns**

**Type**

**Description**

`string`

### setDetail

Free-form text providing details on the error cause of the error.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getStatus

Contains public information about the check error. If available, `status.code` will be non zero and client can propagate it out as public error.

**Returns**

**Type**

**Description**

`[Google\Rpc\Status](https://googleapis.github.io/common-protos-php#Google/Rpc/Status)|null`

### hasStatus

### clearStatus

### setStatus

Contains public information about the check error. If available, `status.code` will be non zero and client can propagate it out as public error.

**Parameter**

**Name**

**Description**

`var`

`[Google\Rpc\Status](https://googleapis.github.io/common-protos-php#Google/Rpc/Status)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
