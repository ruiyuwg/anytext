-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Retail V2 Client - Class GetServingConfigRequest (1.7.0) Stay organized with collections Save and categorize content based on your preferences.

2.5.3 (latest) 2.5.2 2.4.0 2.3.1 2.2.1 2.1.3 2.0.0 1.7.0 1.6.4 1.5.0 1.4.2 1.3.1 1.2.1 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Retail V2 Client class GetServingConfigRequest.

Request for GetServingConfig method.

Generated from protobuf message `google.cloud.retail.v2.GetServingConfigRequest`

## Namespace

Google \\ Cloud \\ Retail \\ V2

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

Required. The resource name of the ServingConfig to get. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`

### getName

Required. The resource name of the ServingConfig to get. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`

**Returns**

**Type**

**Description**

`string`

### setName

Required. The resource name of the ServingConfig to get. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`

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

**Parameter**

**Name**

**Description**

`name`

`string`  

Required. The resource name of the ServingConfig to get. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}` Please see Google\\Cloud\\Retail\\V2\\ServingConfigServiceClient::servingConfigName() for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\Retail\V2\GetServingConfigRequest](/php/docs/reference/cloud-retail/1.7.0/V2.GetServingConfigRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
