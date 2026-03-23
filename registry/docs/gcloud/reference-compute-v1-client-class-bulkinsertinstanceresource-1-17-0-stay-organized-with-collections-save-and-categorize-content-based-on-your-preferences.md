-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class BulkInsertInstanceResource (1.17.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

Reference documentation and code samples for the Compute V1 Client class BulkInsertInstanceResource.

A transient resource used in compute.instances.bulkInsert and compute.regionInstances.bulkInsert . This resource is not persisted anywhere, it is used only for processing the requests.

Generated from protobuf message `google.cloud.compute.v1.BulkInsertInstanceResource`

## Namespace

Google \\ Cloud \\ Compute \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ count`

`int|string`  

The maximum number of instances to create.

`↳ instance_properties`

`[Google\Cloud\Compute\V1\InstanceProperties](/php/docs/reference/cloud-compute/1.17.0/V1.InstanceProperties)`  

The instance properties defining the VM instances to be created. Required if sourceInstanceTemplate is not provided.

`↳ location_policy`

`[Google\Cloud\Compute\V1\LocationPolicy](/php/docs/reference/cloud-compute/1.17.0/V1.LocationPolicy)`  

Policy for chosing target zone. For more information, see Create VMs in bulk .

`↳ min_count`

`int|string`  

The minimum number of instances to create. If no min\_count is specified then count is used as the default value. If min\_count instances cannot be created, then no instances will be created and instances already created will be deleted.

`↳ name_pattern`

`string`  

The string pattern used for the names of the VMs. Either name\_pattern or per\_instance\_properties must be set. The pattern must contain one continuous sequence of placeholder hash characters (#) with each character corresponding to one digit of the generated instance name. Example: a name\_pattern of inst-#### generates instance names such as inst-0001 and inst-0002. If existing instances in the same project and zone have names that match the name pattern then the generated instance numbers start after the biggest existing number. For example, if there exists an instance with name inst-0050, then instance names generated using the pattern inst-#### begin with inst-0051. The name pattern placeholder #...# can contain up to 18 characters.

`↳ per_instance_properties`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

Per-instance properties to be set on individual instances. Keys of this map specify requested instance names. Can be empty if name\_pattern is used.

`↳ source_instance_template`

`string`  

Specifies the instance template from which to create instances. You may combine sourceInstanceTemplate with instanceProperties to override specific values from an existing instance template. Bulk API follows the semantics of JSON Merge Patch described by RFC 7396. It can be a full or partial URL. For example, the following are all valid URLs to an instance template: - [https://www.googleapis.com/compute/v1/projects/project](https://www.googleapis.com/compute/v1/projects/project) /global/instanceTemplates/instanceTemplate - projects/project/global/instanceTemplates/instanceTemplate - global/instanceTemplates/instanceTemplate This field is optional.

### getCount

The maximum number of instances to create.

**Returns**

**Type**

**Description**

`int|string`

### hasCount

### clearCount

### setCount

The maximum number of instances to create.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getInstanceProperties

The instance properties defining the VM instances to be created. Required if sourceInstanceTemplate is not provided.

**Returns**

**Type**

**Description**

`[Google\Cloud\Compute\V1\InstanceProperties](/php/docs/reference/cloud-compute/1.17.0/V1.InstanceProperties)|null`

### hasInstanceProperties

### clearInstanceProperties

### setInstanceProperties

The instance properties defining the VM instances to be created. Required if sourceInstanceTemplate is not provided.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Compute\V1\InstanceProperties](/php/docs/reference/cloud-compute/1.17.0/V1.InstanceProperties)`  

**Returns**

**Type**

**Description**

`$this`

### getLocationPolicy

Policy for chosing target zone. For more information, see Create VMs in bulk .

**Returns**

**Type**

**Description**

`[Google\Cloud\Compute\V1\LocationPolicy](/php/docs/reference/cloud-compute/1.17.0/V1.LocationPolicy)|null`

### hasLocationPolicy

### clearLocationPolicy

### setLocationPolicy

Policy for chosing target zone. For more information, see Create VMs in bulk .

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Compute\V1\LocationPolicy](/php/docs/reference/cloud-compute/1.17.0/V1.LocationPolicy)`  

**Returns**

**Type**

**Description**

`$this`

### getMinCount

The minimum number of instances to create. If no min\_count is specified then count is used as the default value. If min\_count instances cannot be created, then no instances will be created and instances already created will be deleted.

**Returns**

**Type**

**Description**

`int|string`

### hasMinCount

### clearMinCount

### setMinCount

The minimum number of instances to create. If no min\_count is specified then count is used as the default value. If min\_count instances cannot be created, then no instances will be created and instances already created will be deleted.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getNamePattern

The string pattern used for the names of the VMs. Either name\_pattern or per\_instance\_properties must be set. The pattern must contain one continuous sequence of placeholder hash characters (#) with each character corresponding to one digit of the generated instance name. Example: a name\_pattern of inst-#### generates instance names such as inst-0001 and inst-0002. If existing instances in the same project and zone have names that match the name pattern then the generated instance numbers start after the biggest existing number. For example, if there exists an instance with name inst-0050, then instance names generated using the pattern inst-#### begin with inst-0051. The name pattern placeholder #...# can contain up to 18 characters.

**Returns**

**Type**

**Description**

`string`

### hasNamePattern

### clearNamePattern

### setNamePattern

The string pattern used for the names of the VMs. Either name\_pattern or per\_instance\_properties must be set. The pattern must contain one continuous sequence of placeholder hash characters (#) with each character corresponding to one digit of the generated instance name. Example: a name\_pattern of inst-#### generates instance names such as inst-0001 and inst-0002. If existing instances in the same project and zone have names that match the name pattern then the generated instance numbers start after the biggest existing number. For example, if there exists an instance with name inst-0050, then instance names generated using the pattern inst-#### begin with inst-0051. The name pattern placeholder #...# can contain up to 18 characters.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPerInstanceProperties

Per-instance properties to be set on individual instances. Keys of this map specify requested instance names. Can be empty if name\_pattern is used.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setPerInstanceProperties

Per-instance properties to be set on individual instances. Keys of this map specify requested instance names. Can be empty if name\_pattern is used.

**Parameter**

**Name**

**Description**

`var`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

**Returns**

**Type**

**Description**

`$this`

### getSourceInstanceTemplate

Specifies the instance template from which to create instances. You may combine sourceInstanceTemplate with instanceProperties to override specific values from an existing instance template. Bulk API follows the semantics of JSON Merge Patch described by RFC 7396. It can be a full or partial URL. For example, the following are all valid URLs to an instance template: - [https://www.googleapis.com/compute/v1/projects/project](https://www.googleapis.com/compute/v1/projects/project) /global/instanceTemplates/instanceTemplate - projects/project/global/instanceTemplates/instanceTemplate - global/instanceTemplates/instanceTemplate This field is optional.

**Returns**

**Type**

**Description**

`string`

### hasSourceInstanceTemplate

### clearSourceInstanceTemplate

### setSourceInstanceTemplate

Specifies the instance template from which to create instances. You may combine sourceInstanceTemplate with instanceProperties to override specific values from an existing instance template. Bulk API follows the semantics of JSON Merge Patch described by RFC 7396. It can be a full or partial URL. For example, the following are all valid URLs to an instance template: - [https://www.googleapis.com/compute/v1/projects/project](https://www.googleapis.com/compute/v1/projects/project) /global/instanceTemplates/instanceTemplate - projects/project/global/instanceTemplates/instanceTemplate - global/instanceTemplates/instanceTemplate This field is optional.

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
