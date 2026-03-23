-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Stackdriver Monitoring V3 Client - Class GetServiceLevelObjectiveRequest (1.2.2) Stay organized with collections Save and categorize content based on your preferences.

2.2.2 (latest) 2.2.1 2.1.2 2.0.1 1.12.1 1.11.1 1.10.3 1.9.0 1.8.0 1.7.1 1.6.0 1.5.1 1.4.0 1.3.2 1.2.2

Reference documentation and code samples for the Stackdriver Monitoring V3 Client class GetServiceLevelObjectiveRequest.

The `GetServiceLevelObjective` request.

Generated from protobuf message `google.monitoring.v3.GetServiceLevelObjectiveRequest`

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

Required. Resource name of the `ServiceLevelObjective` to get. The format is: projects/\[PROJECT\_ID\_OR\_NUMBER\]/services/\[SERVICE\_ID\]/serviceLevelObjectives/\[SLO\_NAME\]

`↳ view`

`int`  

View of the `ServiceLevelObjective` to return. If `DEFAULT`, return the `ServiceLevelObjective` as originally defined. If `EXPLICIT` and the `ServiceLevelObjective` is defined in terms of a `BasicSli`, replace the `BasicSli` with a `RequestBasedSli` spelling out how the SLI is computed.

### getName

Required. Resource name of the `ServiceLevelObjective` to get. The format is: projects/\[PROJECT\_ID\_OR\_NUMBER\]/services/\[SERVICE\_ID\]/serviceLevelObjectives/\[SLO\_NAME\]

Generated from protobuf field `string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {`

**Returns**

**Type**

**Description**

`string`

### setName

Required. Resource name of the `ServiceLevelObjective` to get. The format is: projects/\[PROJECT\_ID\_OR\_NUMBER\]/services/\[SERVICE\_ID\]/serviceLevelObjectives/\[SLO\_NAME\]

Generated from protobuf field `string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getView

View of the `ServiceLevelObjective` to return. If `DEFAULT`, return the `ServiceLevelObjective` as originally defined. If `EXPLICIT` and the `ServiceLevelObjective` is defined in terms of a `BasicSli`, replace the `BasicSli` with a `RequestBasedSli` spelling out how the SLI is computed.

Generated from protobuf field `.google.monitoring.v3.ServiceLevelObjective.View view = 2;`

**Returns**

**Type**

**Description**

`int`

### setView

View of the `ServiceLevelObjective` to return. If `DEFAULT`, return the `ServiceLevelObjective` as originally defined. If `EXPLICIT` and the `ServiceLevelObjective` is defined in terms of a `BasicSli`, replace the `BasicSli` with a `RequestBasedSli` spelling out how the SLI is computed.

Generated from protobuf field `.google.monitoring.v3.ServiceLevelObjective.View view = 2;`

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

Last updated 2026-03-18 UTC.
