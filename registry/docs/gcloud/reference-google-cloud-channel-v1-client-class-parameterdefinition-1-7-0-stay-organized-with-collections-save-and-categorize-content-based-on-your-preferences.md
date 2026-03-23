-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Channel V1 Client - Class ParameterDefinition (1.7.0) Stay organized with collections Save and categorize content based on your preferences.

2.4.1 (latest) 2.4.0 2.3.1 2.2.1 2.1.4 2.0.0 1.9.5 1.8.2 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.1 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Channel V1 Client class ParameterDefinition.

Parameter's definition. Specifies what parameter is required to use the current Offer to purchase.

Generated from protobuf message `google.cloud.channel.v1.ParameterDefinition`

## Namespace

Google \\ Cloud \\ Channel \\ V1

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

Name of the parameter.

`↳ parameter_type`

`int`  

Data type of the parameter. Minimal value, Maximum value and allowed values will use specified data type here.

`↳ min_value`

`[Google\Cloud\Channel\V1\Value](/php/docs/reference/cloud-channel/1.7.0/V1.Value)`  

Minimal value of the parameter, if applicable. Inclusive. For example, minimal commitment when purchasing Anthos is 0.01. Applicable to INT64 and DOUBLE parameter types.

`↳ max_value`

`[Google\Cloud\Channel\V1\Value](/php/docs/reference/cloud-channel/1.7.0/V1.Value)`  

Maximum value of the parameter, if applicable. Inclusive. For example, maximum seats when purchasing Google Workspace Business Standard. Applicable to INT64 and DOUBLE parameter types.

`↳ allowed_values`

`array<[Google\Cloud\Channel\V1\Value](/php/docs/reference/cloud-channel/1.7.0/V1.Value)>`  

If not empty, parameter values must be drawn from this list. For example, \[us-west1, us-west2, ...\] Applicable to STRING parameter type.

`↳ optional`

`bool`  

If set to true, parameter is optional to purchase this Offer.

### getName

Name of the parameter.

**Returns**

**Type**

**Description**

`string`

### setName

Name of the parameter.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getParameterType

Data type of the parameter. Minimal value, Maximum value and allowed values will use specified data type here.

**Returns**

**Type**

**Description**

`int`

### setParameterType

Data type of the parameter. Minimal value, Maximum value and allowed values will use specified data type here.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getMinValue

Minimal value of the parameter, if applicable. Inclusive. For example, minimal commitment when purchasing Anthos is 0.01.

Applicable to INT64 and DOUBLE parameter types.

**Returns**

**Type**

**Description**

`[Google\Cloud\Channel\V1\Value](/php/docs/reference/cloud-channel/1.7.0/V1.Value)|null`

### hasMinValue

### clearMinValue

### setMinValue

Minimal value of the parameter, if applicable. Inclusive. For example, minimal commitment when purchasing Anthos is 0.01.

Applicable to INT64 and DOUBLE parameter types.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Channel\V1\Value](/php/docs/reference/cloud-channel/1.7.0/V1.Value)`  

**Returns**

**Type**

**Description**

`$this`

### getMaxValue

Maximum value of the parameter, if applicable. Inclusive. For example, maximum seats when purchasing Google Workspace Business Standard.

Applicable to INT64 and DOUBLE parameter types.

**Returns**

**Type**

**Description**

`[Google\Cloud\Channel\V1\Value](/php/docs/reference/cloud-channel/1.7.0/V1.Value)|null`

### hasMaxValue

### clearMaxValue

### setMaxValue

Maximum value of the parameter, if applicable. Inclusive. For example, maximum seats when purchasing Google Workspace Business Standard.

Applicable to INT64 and DOUBLE parameter types.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Channel\V1\Value](/php/docs/reference/cloud-channel/1.7.0/V1.Value)`  

**Returns**

**Type**

**Description**

`$this`

### getAllowedValues

If not empty, parameter values must be drawn from this list.

For example, \[us-west1, us-west2, ...\] Applicable to STRING parameter type.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setAllowedValues

If not empty, parameter values must be drawn from this list.

For example, \[us-west1, us-west2, ...\] Applicable to STRING parameter type.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Channel\V1\Value](/php/docs/reference/cloud-channel/1.7.0/V1.Value)>`  

**Returns**

**Type**

**Description**

`$this`

### getOptional

If set to true, parameter is optional to purchase this Offer.

**Returns**

**Type**

**Description**

`bool`

### setOptional

If set to true, parameter is optional to purchase this Offer.

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

Last updated 2026-03-19 UTC.
