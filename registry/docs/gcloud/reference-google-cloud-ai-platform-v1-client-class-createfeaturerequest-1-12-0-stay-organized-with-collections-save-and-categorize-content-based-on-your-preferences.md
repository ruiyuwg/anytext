-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class CreateFeatureRequest (1.12.0) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class CreateFeatureRequest.

Request message for [FeaturestoreService.CreateFeature](/php/docs/reference/cloud-ai-platform/1.12.0/V1.Client.FeaturestoreServiceClient#_Google_Cloud_AIPlatform_V1_Client_FeaturestoreServiceClient__createFeature__).

Request message for [FeatureRegistryService.CreateFeature](/php/docs/reference/cloud-ai-platform/1.12.0/V1.Client.FeatureRegistryServiceClient#_Google_Cloud_AIPlatform_V1_Client_FeatureRegistryServiceClient__createFeature__).

Generated from protobuf message `google.cloud.aiplatform.v1.CreateFeatureRequest`

## Namespace

Google \\ Cloud \\ AIPlatform \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ parent`

`string`  

Required. The resource name of the EntityType or FeatureGroup to create a Feature. Format for entity\_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature\_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}`

`↳ feature`

`[Feature](/php/docs/reference/cloud-ai-platform/1.12.0/V1.Feature)`  

Required. The Feature to create.

`↳ feature_id`

`string`  

Required. The ID to use for the Feature, which will become the final component of the Feature's resource name. This value may be up to 128 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within an EntityType/FeatureGroup.

### getParent

Required. The resource name of the EntityType or FeatureGroup to create a Feature. Format for entity\_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature\_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}`

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The resource name of the EntityType or FeatureGroup to create a Feature. Format for entity\_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature\_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getFeature

Required. The Feature to create.

**Returns**

**Type**

**Description**

`[Feature](/php/docs/reference/cloud-ai-platform/1.12.0/V1.Feature)|null`

### hasFeature

### clearFeature

### setFeature

Required. The Feature to create.

**Parameter**

**Name**

**Description**

`var`

`[Feature](/php/docs/reference/cloud-ai-platform/1.12.0/V1.Feature)`  

**Returns**

**Type**

**Description**

`$this`

### getFeatureId

Required. The ID to use for the Feature, which will become the final component of the Feature's resource name.

This value may be up to 128 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within an EntityType/FeatureGroup.

**Returns**

**Type**

**Description**

`string`

### setFeatureId

Required. The ID to use for the Feature, which will become the final component of the Feature's resource name.

This value may be up to 128 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number. The value must be unique within an EntityType/FeatureGroup.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameters**

**Name**

**Description**

`parent`

`string`  

Required. The resource name of the EntityType or FeatureGroup to create a Feature. Format for entity\_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature\_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}` Please see FeaturestoreServiceClient::entityTypeName() for help formatting this field.

`feature`

`[Feature](/php/docs/reference/cloud-ai-platform/1.12.0/V1.Feature)`  

Required. The Feature to create.

**Returns**

**Type**

**Description**

`[CreateFeatureRequest](/php/docs/reference/cloud-ai-platform/1.12.0/V1.CreateFeatureRequest)`

### static::buildFromParentFeatureFeatureId

**Parameters**

**Name**

**Description**

`parent`

`string`  

Required. The resource name of the EntityType or FeatureGroup to create a Feature. Format for entity\_type as parent: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}` Format for feature\_group as parent: `projects/{project}/locations/{location}/featureGroups/{feature_group}` Please see FeaturestoreServiceClient::entityTypeName() for help formatting this field.

`feature`

`[Feature](/php/docs/reference/cloud-ai-platform/1.12.0/V1.Feature)`  

Required. The Feature to create.

`featureId`

`string`  

Required. The ID to use for the Feature, which will become the final component of the Feature's resource name.

This value may be up to 128 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number.

The value must be unique within an EntityType/FeatureGroup.

**Returns**

**Type**

**Description**

`[CreateFeatureRequest](/php/docs/reference/cloud-ai-platform/1.12.0/V1.CreateFeatureRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
