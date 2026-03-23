-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Data Loss Prevention V2 Client - Class CustomInfoType (1.16.0) Stay organized with collections Save and categorize content based on your preferences.

2.9.2 (latest) 2.9.1 2.8.1 2.7.0 2.6.1 2.4.1 2.3.0 2.2.3 2.1.0 2.0.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.1 1.14.0 1.13.2 1.12.0 1.11.0 1.10.2 1.9.0 1.8.6

Reference documentation and code samples for the Data Loss Prevention V2 Client class CustomInfoType.

Custom information type provided by the user. Used to find domain-specific sensitive information configurable to the data in question.

Generated from protobuf message `google.privacy.dlp.v2.CustomInfoType`

## Namespace

Google \\ Cloud \\ Dlp \\ V2

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ info_type`

`[Google\Cloud\Dlp\V2\InfoType](/php/docs/reference/cloud-dlp/1.16.0/V2.InfoType)`  

CustomInfoType can either be a new infoType, or an extension of built-in infoType, when the name matches one of existing infoTypes and that infoType is specified in `InspectContent.info_types` field. Specifying the latter adds findings to the one detected by the system. If built-in info type is not specified in `InspectContent.info_types` list then the name is treated as a custom info type.

`↳ likelihood`

`int`  

Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria specified by the rule. Defaults to `VERY_LIKELY` if not specified.

`↳ dictionary`

`[Google\Cloud\Dlp\V2\CustomInfoType\Dictionary](/php/docs/reference/cloud-dlp/1.16.0/V2.CustomInfoType.Dictionary)`  

A list of phrases to detect as a CustomInfoType.

`↳ regex`

`[Google\Cloud\Dlp\V2\CustomInfoType\Regex](/php/docs/reference/cloud-dlp/1.16.0/V2.CustomInfoType.Regex)`  

Regular expression based CustomInfoType.

`↳ surrogate_type`

`[Google\Cloud\Dlp\V2\CustomInfoType\SurrogateType](/php/docs/reference/cloud-dlp/1.16.0/V2.CustomInfoType.SurrogateType)`  

Message for detecting output from deidentification transformations that support reversing.

`↳ stored_type`

`[Google\Cloud\Dlp\V2\StoredType](/php/docs/reference/cloud-dlp/1.16.0/V2.StoredType)`  

Load an existing `StoredInfoType` resource for use in `InspectDataSource`. Not currently supported in `InspectContent`.

`↳ detection_rules`

`array<[Google\Cloud\Dlp\V2\CustomInfoType\DetectionRule](/php/docs/reference/cloud-dlp/1.16.0/V2.CustomInfoType.DetectionRule)>`  

Set of detection rules to apply to all findings of this CustomInfoType. Rules are applied in order that they are specified. Not supported for the `surrogate_type` CustomInfoType.

`↳ exclusion_type`

`int`  

If set to EXCLUSION\_TYPE\_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching.

`↳ sensitivity_score`

`[Google\Cloud\Dlp\V2\SensitivityScore](/php/docs/reference/cloud-dlp/1.16.0/V2.SensitivityScore)`  

Sensitivity for this CustomInfoType. If this CustomInfoType extends an existing InfoType, the sensitivity here will take precedence over that of the original InfoType. If unset for a CustomInfoType, it will default to HIGH. This only applies to data profiling.

### getInfoType

CustomInfoType can either be a new infoType, or an extension of built-in infoType, when the name matches one of existing infoTypes and that infoType is specified in `InspectContent.info_types` field. Specifying the latter adds findings to the one detected by the system. If built-in info type is not specified in `InspectContent.info_types` list then the name is treated as a custom info type.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dlp\V2\InfoType](/php/docs/reference/cloud-dlp/1.16.0/V2.InfoType)|null`

### hasInfoType

### clearInfoType

### setInfoType

CustomInfoType can either be a new infoType, or an extension of built-in infoType, when the name matches one of existing infoTypes and that infoType is specified in `InspectContent.info_types` field. Specifying the latter adds findings to the one detected by the system. If built-in info type is not specified in `InspectContent.info_types` list then the name is treated as a custom info type.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dlp\V2\InfoType](/php/docs/reference/cloud-dlp/1.16.0/V2.InfoType)`  

**Returns**

**Type**

**Description**

`$this`

### getLikelihood

Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria specified by the rule. Defaults to `VERY_LIKELY` if not specified.

**Returns**

**Type**

**Description**

`int`

### setLikelihood

Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria specified by the rule. Defaults to `VERY_LIKELY` if not specified.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getDictionary

A list of phrases to detect as a CustomInfoType.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dlp\V2\CustomInfoType\Dictionary](/php/docs/reference/cloud-dlp/1.16.0/V2.CustomInfoType.Dictionary)|null`

### hasDictionary

### setDictionary

A list of phrases to detect as a CustomInfoType.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dlp\V2\CustomInfoType\Dictionary](/php/docs/reference/cloud-dlp/1.16.0/V2.CustomInfoType.Dictionary)`  

**Returns**

**Type**

**Description**

`$this`

### getRegex

Regular expression based CustomInfoType.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dlp\V2\CustomInfoType\Regex](/php/docs/reference/cloud-dlp/1.16.0/V2.CustomInfoType.Regex)|null`

### hasRegex

### setRegex

Regular expression based CustomInfoType.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dlp\V2\CustomInfoType\Regex](/php/docs/reference/cloud-dlp/1.16.0/V2.CustomInfoType.Regex)`  

**Returns**

**Type**

**Description**

`$this`

### getSurrogateType

Message for detecting output from deidentification transformations that support reversing.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dlp\V2\CustomInfoType\SurrogateType](/php/docs/reference/cloud-dlp/1.16.0/V2.CustomInfoType.SurrogateType)|null`

### hasSurrogateType

### setSurrogateType

Message for detecting output from deidentification transformations that support reversing.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dlp\V2\CustomInfoType\SurrogateType](/php/docs/reference/cloud-dlp/1.16.0/V2.CustomInfoType.SurrogateType)`  

**Returns**

**Type**

**Description**

`$this`

### getStoredType

Load an existing `StoredInfoType` resource for use in `InspectDataSource`. Not currently supported in `InspectContent`.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dlp\V2\StoredType](/php/docs/reference/cloud-dlp/1.16.0/V2.StoredType)|null`

### hasStoredType

### setStoredType

Load an existing `StoredInfoType` resource for use in `InspectDataSource`. Not currently supported in `InspectContent`.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dlp\V2\StoredType](/php/docs/reference/cloud-dlp/1.16.0/V2.StoredType)`  

**Returns**

**Type**

**Description**

`$this`

### getDetectionRules

Set of detection rules to apply to all findings of this CustomInfoType.

Rules are applied in order that they are specified. Not supported for the `surrogate_type` CustomInfoType.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setDetectionRules

Set of detection rules to apply to all findings of this CustomInfoType.

Rules are applied in order that they are specified. Not supported for the `surrogate_type` CustomInfoType.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Dlp\V2\CustomInfoType\DetectionRule](/php/docs/reference/cloud-dlp/1.16.0/V2.CustomInfoType.DetectionRule)>`  

**Returns**

**Type**

**Description**

`$this`

### getExclusionType

If set to EXCLUSION\_TYPE\_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching.

**Returns**

**Type**

**Description**

`int`

### setExclusionType

If set to EXCLUSION\_TYPE\_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getSensitivityScore

Sensitivity for this CustomInfoType. If this CustomInfoType extends an existing InfoType, the sensitivity here will take precedence over that of the original InfoType. If unset for a CustomInfoType, it will default to HIGH.

This only applies to data profiling.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dlp\V2\SensitivityScore](/php/docs/reference/cloud-dlp/1.16.0/V2.SensitivityScore)|null`

### hasSensitivityScore

### clearSensitivityScore

### setSensitivityScore

Sensitivity for this CustomInfoType. If this CustomInfoType extends an existing InfoType, the sensitivity here will take precedence over that of the original InfoType. If unset for a CustomInfoType, it will default to HIGH.

This only applies to data profiling.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dlp\V2\SensitivityScore](/php/docs/reference/cloud-dlp/1.16.0/V2.SensitivityScore)`  

**Returns**

**Type**

**Description**

`$this`

### getType

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
