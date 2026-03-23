-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Artifact Registry V1 Client - Class ProjectSettings (0.4.4) Stay organized with collections Save and categorize content based on your preferences.

1.7.1 (latest) 1.7.0 1.6.0 1.5.0 1.4.0 1.3.1 1.2.1 1.1.3 1.0.0 0.6.5 0.5.1 0.4.4 0.3.13

Reference documentation and code samples for the Google Cloud Artifact Registry V1 Client class ProjectSettings.

The Artifact Registry settings that apply to a Project.

Generated from protobuf message `google.devtools.artifactregistry.v1.ProjectSettings`

## Namespace

Google \\ Cloud \\ ArtifactRegistry \\ V1

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

The name of the project's settings. Always of the form: projects/{project-id}/projectSettings In update request: never set In response: always set

`↳ legacy_redirection_state`

`int`  

The redirection state of the legacy repositories in this project.

### getName

The name of the project's settings.

Always of the form: projects/{project-id}/projectSettings In update request: never set In response: always set

**Returns**

**Type**

**Description**

`string`

### setName

The name of the project's settings.

Always of the form: projects/{project-id}/projectSettings In update request: never set In response: always set

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getLegacyRedirectionState

The redirection state of the legacy repositories in this project.

**Returns**

**Type**

**Description**

`int`

### setLegacyRedirectionState

The redirection state of the legacy repositories in this project.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
