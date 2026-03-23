-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Config V1 Client - Class GetTerraformVersionRequest (0.5.2) Stay organized with collections Save and categorize content based on your preferences.

1.7.2 (latest) 1.7.1 1.6.1 1.5.0 1.4.1 1.3.0 1.2.1 1.1.0 1.0.1 0.5.2 0.2.0 0.1.3

Reference documentation and code samples for the Google Cloud Config V1 Client class GetTerraformVersionRequest.

The request message for the GetTerraformVersion method.

Generated from protobuf message `google.cloud.config.v1.GetTerraformVersionRequest`

## Namespace

Google \\ Cloud \\ Config \\ V1

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

Required. The name of the TerraformVersion. Format: 'projects/{project\_id}/locations/{location}/terraformVersions/{terraform\_version}'

### getName

Required. The name of the TerraformVersion. Format: 'projects/{project\_id}/locations/{location}/terraformVersions/{terraform\_version}'

**Returns**

**Type**

**Description**

`string`

### setName

Required. The name of the TerraformVersion. Format: 'projects/{project\_id}/locations/{location}/terraformVersions/{terraform\_version}'

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

Required. The name of the TerraformVersion. Format: 'projects/{project\_id}/locations/{location}/terraformVersions/{terraform\_version}' Please see Google\\Cloud\\Config\\V1\\ConfigClient::terraformVersionName() for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\Config\V1\GetTerraformVersionRequest](/php/docs/reference/cloud-config/0.5.2/V1.GetTerraformVersionRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
