-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dialogflow V2 Client - Class EntityType (1.4.0) Stay organized with collections Save and categorize content based on your preferences.

2.3.1 (latest) 2.3.0 2.2.1 2.1.2 2.0.1 1.17.2 1.16.0 1.15.1 1.14.0 1.13.0 1.12.3 1.11.0 1.10.2 1.9.0 1.8.0 1.7.2 1.6.0 1.5.0 1.4.0 1.3.2 1.2.0 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Dialogflow V2 Client class EntityType.

Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted.

Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview).

Generated from protobuf message `google.cloud.dialogflow.v2.EntityType`

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

The unique identifier of the entity type. Required for [EntityTypes.UpdateEntityType](/php/docs/reference/cloud-dialogflow/1.4.0/V2.EntityTypesClient#_Google_Cloud_Dialogflow_V2_EntityTypesClient__updateEntityType__) and [EntityTypes.BatchUpdateEntityTypes](/php/docs/reference/cloud-dialogflow/1.4.0/V2.EntityTypesClient#_Google_Cloud_Dialogflow_V2_EntityTypesClient__batchUpdateEntityTypes__) methods. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.

`↳ display_name`

`string`  

Required. The name of the entity type.

`↳ kind`

`int`  

Required. Indicates the kind of entity type.

`↳ auto_expansion_mode`

`int`  

Optional. Indicates whether the entity type can be automatically expanded.

`↳ entities`

`array<[Google\Cloud\Dialogflow\V2\EntityType\Entity](/php/docs/reference/cloud-dialogflow/1.4.0/V2.EntityType.Entity)>`  

Optional. The collection of entity entries associated with the entity type.

`↳ enable_fuzzy_extraction`

`bool`  

Optional. Enables fuzzy entity extraction during classification.

### getName

The unique identifier of the entity type.

Required for [EntityTypes.UpdateEntityType](/php/docs/reference/cloud-dialogflow/1.4.0/V2.EntityTypesClient#_Google_Cloud_Dialogflow_V2_EntityTypesClient__updateEntityType__) and [EntityTypes.BatchUpdateEntityTypes](/php/docs/reference/cloud-dialogflow/1.4.0/V2.EntityTypesClient#_Google_Cloud_Dialogflow_V2_EntityTypesClient__batchUpdateEntityTypes__) methods. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.

**Returns**

**Type**

**Description**

`string`

### setName

The unique identifier of the entity type.

Required for [EntityTypes.UpdateEntityType](/php/docs/reference/cloud-dialogflow/1.4.0/V2.EntityTypesClient#_Google_Cloud_Dialogflow_V2_EntityTypesClient__updateEntityType__) and [EntityTypes.BatchUpdateEntityTypes](/php/docs/reference/cloud-dialogflow/1.4.0/V2.EntityTypesClient#_Google_Cloud_Dialogflow_V2_EntityTypesClient__batchUpdateEntityTypes__) methods. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDisplayName

Required. The name of the entity type.

**Returns**

**Type**

**Description**

`string`

### setDisplayName

Required. The name of the entity type.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getKind

Required. Indicates the kind of entity type.

**Returns**

**Type**

**Description**

`int`

### setKind

Required. Indicates the kind of entity type.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getAutoExpansionMode

Optional. Indicates whether the entity type can be automatically expanded.

**Returns**

**Type**

**Description**

`int`

### setAutoExpansionMode

Optional. Indicates whether the entity type can be automatically expanded.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getEntities

Optional. The collection of entity entries associated with the entity type.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setEntities

Optional. The collection of entity entries associated with the entity type.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Dialogflow\V2\EntityType\Entity](/php/docs/reference/cloud-dialogflow/1.4.0/V2.EntityType.Entity)>`  

**Returns**

**Type**

**Description**

`$this`

### getEnableFuzzyExtraction

Optional. Enables fuzzy entity extraction during classification.

**Returns**

**Type**

**Description**

`bool`

### setEnableFuzzyExtraction

Optional. Enables fuzzy entity extraction during classification.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
