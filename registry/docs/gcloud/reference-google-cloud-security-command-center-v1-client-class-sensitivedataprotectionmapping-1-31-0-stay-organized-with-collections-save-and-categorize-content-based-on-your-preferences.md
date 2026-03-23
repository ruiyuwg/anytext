-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Security Command Center V1 Client - Class SensitiveDataProtectionMapping (1.31.0) Stay organized with collections Save and categorize content based on your preferences.

2.5.0 (latest) 2.4.2 2.3.0 2.2.1 2.1.1 2.0.4 1.32.0 1.31.0 1.30.0 1.29.0 1.28.2 1.21.0 1.20.2 1.19.1 1.18.0 1.17.0 1.16.0 1.15.1 1.14.2 1.13.1

Reference documentation and code samples for the Google Cloud Security Command Center V1 Client class SensitiveDataProtectionMapping.

Resource value mapping for Sensitive Data Protection findings.

If any of these mappings have a resource value that is not unspecified, the resource\_value field will be ignored when reading this configuration.

Generated from protobuf message `google.cloud.securitycenter.v1.ResourceValueConfig.SensitiveDataProtectionMapping`

## Namespace

Google \\ Cloud \\ SecurityCenter \\ V1 \\ ResourceValueConfig

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ high_sensitivity_mapping`

`int`  

Resource value mapping for high-sensitivity Sensitive Data Protection findings

`↳ medium_sensitivity_mapping`

`int`  

Resource value mapping for medium-sensitivity Sensitive Data Protection findings

### getHighSensitivityMapping

Resource value mapping for high-sensitivity Sensitive Data Protection findings

**Returns**

**Type**

**Description**

`int`

### setHighSensitivityMapping

Resource value mapping for high-sensitivity Sensitive Data Protection findings

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getMediumSensitivityMapping

Resource value mapping for medium-sensitivity Sensitive Data Protection findings

**Returns**

**Type**

**Description**

`int`

### setMediumSensitivityMapping

Resource value mapping for medium-sensitivity Sensitive Data Protection findings

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
