-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Build V1 Client - Class Volume (0.10.0) Stay organized with collections Save and categorize content based on your preferences.

1.1.2 (latest) 1.1.1 1.0.4 0.16.3 0.15.0 0.14.0 0.13.2 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.3 0.6.1 0.5.1 0.4.0 0.3.8

Reference documentation and code samples for the Google Cloud Build V1 Client class Volume.

Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution.

Generated from protobuf message `google.devtools.cloudbuild.v1.Volume`

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

`↳ name`

`string`  

Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps.

`↳ path`

`string`  

Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths.

### getName

Name of the volume to mount.

Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps.

**Returns**

**Type**

**Description**

`string`

### setName

Name of the volume to mount.

Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPath

Path at which to mount the volume.

Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths.

**Returns**

**Type**

**Description**

`string`

### setPath

Path at which to mount the volume.

Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths.

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
