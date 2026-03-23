-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Security](https://docs.cloud.google.com/docs/security)
-   [Security Command Center](https://docs.cloud.google.com/security-command-center/docs)
-   [Reference](https://docs.cloud.google.com/security-command-center/docs/reference/authentication)

Send feedback

# REST Resource: projects.locations.effectiveEventThreatDetectionCustomModules Stay organized with collections Save and categorize content based on your preferences.

 

## Resource: EffectiveEventThreatDetectionCustomModule

The representation of an `[EventThreatDetectionCustomModule](/security-command-center/docs/reference/security-center-management/rest/v1/folders.locations.eventThreatDetectionCustomModules#EventThreatDetectionCustomModule)` at a given level, taking hierarchy into account and resolving various fields accordingly. For example, if the module is enabled at the ancestor level, then effective modules at all descendant levels will have their enablement state set to `ENABLED`. Similarly, if `module.inherited` is set, then the effective module's configuration will reflect the ancestor's configuration.

JSON representation

{
  "name": string,
  "config": {
    object
  },
  "enablementState": enum (`[EnablementState](/security-command-center/docs/reference/security-center-management/rest/v1/folders.locations.effectiveEventThreatDetectionCustomModules#EffectiveEventThreatDetectionCustomModule.EnablementState)`),
  "type": string,
  "displayName": string,
  "description": string
}

 

Fields

`name`

`string`

Identifier. The resource name of the Event Threat Detection custom module, in one of the following formats:

-   `organizations/{organization}/locations/{location}/effectiveEventThreatDetectionCustomModules/{custom_module}`
-   `folders/{folder}/locations/{location}/effectiveEventThreatDetectionCustomModules/{custom_module}`
-   `projects/{project}/locations/{location}/effectiveEventThreatDetectionCustomModules/{custom_module}`

`config`

``object (`[Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct)` format)``

Output only. Configuration for the effective module.

`enablementState`

``enum (`[EnablementState](/security-command-center/docs/reference/security-center-management/rest/v1/folders.locations.effectiveEventThreatDetectionCustomModules#EffectiveEventThreatDetectionCustomModule.EnablementState)`)``

Output only. The effective state of enablement for the module at the given level of the hierarchy.

`type`

`string`

Output only. Type for the module (for example, `CONFIGURABLE_BAD_IP`).

`displayName`

`string`

Output only. The human-readable name of the module.

`description`

`string`

Output only. A description of the module.

 

## Methods

### `[get](/security-command-center/docs/reference/security-center-management/rest/v1/projects.locations.effectiveEventThreatDetectionCustomModules/get)`

Gets the effective Event Threat Detection custom module at the given level.

### `[list](/security-command-center/docs/reference/security-center-management/rest/v1/projects.locations.effectiveEventThreatDetectionCustomModules/list)`

Lists all effective Event Threat Detection custom modules for the given parent.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-07-01 UTC.
