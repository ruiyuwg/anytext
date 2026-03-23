-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataplex V1 Client - Class NotebookTaskConfig (0.9.0) Stay organized with collections Save and categorize content based on your preferences.

1.12.0 (latest) 1.11.0 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.4.0 1.3.0 1.2.1 1.1.1 1.0.1 0.16.1 0.15.1 0.14.0 0.13.0 0.12.0 0.11.1 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.1 0.4.0 0.3.0 0.2.3 0.1.6

Reference documentation and code samples for the Google Cloud Dataplex V1 Client class NotebookTaskConfig.

Config for running scheduled notebooks.

Generated from protobuf message `google.cloud.dataplex.v1.Task.NotebookTaskConfig`

## Namespace

Google \\ Cloud \\ Dataplex \\ V1 \\ Task

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ notebook`

`string`  

Required. Path to input notebook. This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (`TASK_key=value`).

`↳ infrastructure_spec`

`[Google\Cloud\Dataplex\V1\Task\InfrastructureSpec](/php/docs/reference/cloud-dataplex/0.9.0/V1.Task.InfrastructureSpec)`  

Optional. Infrastructure specification for the execution.

`↳ file_uris`

`array`  

Optional. Cloud Storage URIs of files to be placed in the working directory of each executor.

`↳ archive_uris`

`array`  

Optional. Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

### getNotebook

Required. Path to input notebook. This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (`TASK_key=value`).

**Returns**

**Type**

**Description**

`string`

### setNotebook

Required. Path to input notebook. This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (`TASK_key=value`).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getInfrastructureSpec

Optional. Infrastructure specification for the execution.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dataplex\V1\Task\InfrastructureSpec](/php/docs/reference/cloud-dataplex/0.9.0/V1.Task.InfrastructureSpec)|null`

### hasInfrastructureSpec

### clearInfrastructureSpec

### setInfrastructureSpec

Optional. Infrastructure specification for the execution.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dataplex\V1\Task\InfrastructureSpec](/php/docs/reference/cloud-dataplex/0.9.0/V1.Task.InfrastructureSpec)`  

**Returns**

**Type**

**Description**

`$this`

### getFileUris

Optional. Cloud Storage URIs of files to be placed in the working directory of each executor.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setFileUris

Optional. Cloud Storage URIs of files to be placed in the working directory of each executor.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getArchiveUris

Optional. Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setArchiveUris

Optional. Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

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

Last updated 2026-03-18 UTC.
