-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Build V1 Client - Class UploadedMavenArtifact (0.12.0) Stay organized with collections Save and categorize content based on your preferences.

1.1.2 (latest) 1.1.1 1.0.4 0.16.3 0.15.0 0.14.0 0.13.2 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.3 0.6.1 0.5.1 0.4.0 0.3.8

Reference documentation and code samples for the Google Cloud Build V1 Client class UploadedMavenArtifact.

A Maven artifact uploaded using the MavenArtifact directive.

Generated from protobuf message `google.devtools.cloudbuild.v1.UploadedMavenArtifact`

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

`↳ uri`

`string`  

URI of the uploaded artifact.

`↳ file_hashes`

`[Google\Cloud\Build\V1\FileHashes](/php/docs/reference/cloud-build/0.12.0/V1.FileHashes)`  

Hash types and values of the Maven Artifact.

`↳ push_timing`

`[Google\Cloud\Build\V1\TimeSpan](/php/docs/reference/cloud-build/0.12.0/V1.TimeSpan)`  

Output only. Stores timing information for pushing the specified artifact.

### getUri

URI of the uploaded artifact.

**Returns**

**Type**

**Description**

`string`

### setUri

URI of the uploaded artifact.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getFileHashes

Hash types and values of the Maven Artifact.

**Returns**

**Type**

**Description**

`[Google\Cloud\Build\V1\FileHashes](/php/docs/reference/cloud-build/0.12.0/V1.FileHashes)|null`

### hasFileHashes

### clearFileHashes

### setFileHashes

Hash types and values of the Maven Artifact.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Build\V1\FileHashes](/php/docs/reference/cloud-build/0.12.0/V1.FileHashes)`  

**Returns**

**Type**

**Description**

`$this`

### getPushTiming

Output only. Stores timing information for pushing the specified artifact.

**Returns**

**Type**

**Description**

`[Google\Cloud\Build\V1\TimeSpan](/php/docs/reference/cloud-build/0.12.0/V1.TimeSpan)|null`

### hasPushTiming

### clearPushTiming

### setPushTiming

Output only. Stores timing information for pushing the specified artifact.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Build\V1\TimeSpan](/php/docs/reference/cloud-build/0.12.0/V1.TimeSpan)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
