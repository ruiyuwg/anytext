-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Deploy V1 Client - Class Config (0.7.0) Stay organized with collections Save and categorize content based on your preferences.

2.0.0 (latest) 1.6.3 1.5.7 1.4.0 1.3.0 1.2.0 1.1.1 1.0.0 0.19.1 0.18.1 0.17.0 0.16.0 0.15.0 0.14.0 0.13.1 0.12.1 0.11.1 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.4

Reference documentation and code samples for the Google Cloud Deploy V1 Client class Config.

Service-wide configuration.

Generated from protobuf message `google.cloud.deploy.v1.Config`

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

Name of the configuration.

`↳ supported_versions`

`array<[Google\Cloud\Deploy\V1\SkaffoldVersion](/php/docs/reference/cloud-deploy/0.7.0/V1.SkaffoldVersion)>`  

All supported versions of Skaffold.

`↳ default_skaffold_version`

`string`  

Default Skaffold version that is assigned when a Release is created without specifying a Skaffold version.

### getName

Name of the configuration.

**Returns**

**Type**

**Description**

`string`

### setName

Name of the configuration.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSupportedVersions

All supported versions of Skaffold.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setSupportedVersions

All supported versions of Skaffold.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Deploy\V1\SkaffoldVersion](/php/docs/reference/cloud-deploy/0.7.0/V1.SkaffoldVersion)>`  

**Returns**

**Type**

**Description**

`$this`

### getDefaultSkaffoldVersion

Default Skaffold version that is assigned when a Release is created without specifying a Skaffold version.

**Returns**

**Type**

**Description**

`string`

### setDefaultSkaffoldVersion

Default Skaffold version that is assigned when a Release is created without specifying a Skaffold version.

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
