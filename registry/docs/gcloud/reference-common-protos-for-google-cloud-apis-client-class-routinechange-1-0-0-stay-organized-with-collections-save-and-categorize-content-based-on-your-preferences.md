-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Common Protos for Google Cloud APIs Client - Class RoutineChange (1.0.0) Stay organized with collections Save and categorize content based on your preferences.

1.0.0 (latest) 0.8.3 0.7.0 0.6.0 0.5.2 0.4.2 0.3.8

Reference documentation and code samples for the Common Protos for Google Cloud APIs Client class RoutineChange.

Routine change event.

Generated from protobuf message `google.cloud.audit.BigQueryAuditMetadata.RoutineChange`

## Namespace

Google \\ Cloud \\ Audit \\ BigQueryAuditMetadata

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ routine`

`[Routine](/php/docs/reference/cloud-common-protos/latest/Audit.BigQueryAuditMetadata.Routine)`  

Updated routine.

`↳ reason`

`int`  

Describes how the routine was updated.

`↳ job_name`

`string`  

The URI of the job that updated the routine. Format: `projects/<project_id>/jobs/<job_id>`.

### getRoutine

Updated routine.

**Returns**

**Type**

**Description**

`[Routine](/php/docs/reference/cloud-common-protos/latest/Audit.BigQueryAuditMetadata.Routine)|null`

### hasRoutine

### clearRoutine

### setRoutine

Updated routine.

**Parameter**

**Name**

**Description**

`var`

`[Routine](/php/docs/reference/cloud-common-protos/latest/Audit.BigQueryAuditMetadata.Routine)`  

**Returns**

**Type**

**Description**

`$this`

### getReason

Describes how the routine was updated.

**Returns**

**Type**

**Description**

`int`

Enum of type [Reason](/php/docs/reference/cloud-common-protos/latest/Audit.BigQueryAuditMetadata.RoutineChange.Reason).

### setReason

Describes how the routine was updated.

**Parameter**

**Name**

**Description**

`var`

`int`  

Enum of type [Reason](/php/docs/reference/cloud-common-protos/latest/Audit.BigQueryAuditMetadata.RoutineChange.Reason).

**Returns**

**Type**

**Description**

`$this`

### getJobName

The URI of the job that updated the routine.

Format: `projects/<project_id>/jobs/<job_id>`.

**Returns**

**Type**

**Description**

`string`

### setJobName

The URI of the job that updated the routine.

Format: `projects/<project_id>/jobs/<job_id>`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
