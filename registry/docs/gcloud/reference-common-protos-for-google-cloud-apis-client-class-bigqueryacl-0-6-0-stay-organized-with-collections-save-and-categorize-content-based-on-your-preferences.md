-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Common Protos for Google Cloud APIs Client - Class BigQueryAcl (0.6.0) Stay organized with collections Save and categorize content based on your preferences.

1.0.0 (latest) 0.8.3 0.7.0 0.6.0 0.5.2 0.4.2 0.3.8

Reference documentation and code samples for the Common Protos for Google Cloud APIs Client class BigQueryAcl.

An access control list.

Generated from protobuf message `google.cloud.audit.BigQueryAuditMetadata.BigQueryAcl`

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

`↳ policy`

`[Google\Cloud\Iam\V1\Policy](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.Policy.html)`  

IAM policy for the resource.

`↳ authorized_views`

`array`  

List of authorized views for a dataset. Format: `projects/<project_id>/datasets/<dataset_id>/tables/<view_id>`.

### getPolicy

IAM policy for the resource.

**Returns**

**Type**

**Description**

`[Google\Cloud\Iam\V1\Policy](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.Policy.html)|null`

### hasPolicy

### clearPolicy

### setPolicy

IAM policy for the resource.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Iam\V1\Policy](https://cloud.google.com/php/docs/reference/common-protos/latest/Cloud.Iam.V1.Policy.html)`  

**Returns**

**Type**

**Description**

`$this`

### getAuthorizedViews

List of authorized views for a dataset.

Format: `projects/<project_id>/datasets/<dataset_id>/tables/<view_id>`.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setAuthorizedViews

List of authorized views for a dataset.

Format: `projects/<project_id>/datasets/<dataset_id>/tables/<view_id>`.

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
