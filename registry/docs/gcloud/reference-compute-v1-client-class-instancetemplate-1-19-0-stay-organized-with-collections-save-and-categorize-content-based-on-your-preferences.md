-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class InstanceTemplate (1.19.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

Reference documentation and code samples for the Compute V1 Client class InstanceTemplate.

Represents an Instance Template resource. Google Compute Engine has two Instance Template resources: \* [Global](/compute/docs/reference/rest/v1/instanceTemplates) \* [Regional](https://cloud.google.com/compute/docs/reference/rest/v1/regionInstanceTemplates) You can reuse a global instance template in different regions whereas you can use a regional instance template in a specified region only. If you want to reduce cross-region dependency or achieve data residency, use a regional instance template. To create VMs, managed instance groups, and reservations, you can use either global or regional instance templates. For more information, read Instance Templates.

Generated from protobuf message `google.cloud.compute.v1.InstanceTemplate`

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

`↳ creation_timestamp`

`string`  

\[Output Only\] The creation timestamp for this instance template in RFC3339 text format.

`↳ description`

`string`  

An optional description of this resource. Provide this property when you create the resource.

`↳ id`

`int|string`  

\[Output Only\] A unique identifier for this instance template. The server defines this identifier.

`↳ kind`

`string`  

\[Output Only\] The resource type, which is always compute#instanceTemplate for instance templates.

`↳ name`

`string`  

Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

`↳ properties`

`[Google\Cloud\Compute\V1\InstanceProperties](/php/docs/reference/cloud-compute/1.19.0/V1.InstanceProperties)`  

The instance properties for this instance template.

`↳ region`

`string`  

\[Output Only\] URL of the region where the instance template resides. Only applicable for regional resources.

`↳ self_link`

`string`  

\[Output Only\] The URL for this instance template. The server defines this URL.

`↳ source_instance`

`string`  

The source instance used to create the template. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - [https://www.googleapis.com/compute/v1/projects/project/zones/zone](https://www.googleapis.com/compute/v1/projects/project/zones/zone) /instances/instance - projects/project/zones/zone/instances/instance

`↳ source_instance_params`

`[Google\Cloud\Compute\V1\SourceInstanceParams](/php/docs/reference/cloud-compute/1.19.0/V1.SourceInstanceParams)`  

The source instance params to use to create this instance template.

### getCreationTimestamp

\[Output Only\] The creation timestamp for this instance template in RFC3339 text format.

**Returns**

**Type**

**Description**

`string`

### hasCreationTimestamp

### clearCreationTimestamp

### setCreationTimestamp

\[Output Only\] The creation timestamp for this instance template in RFC3339 text format.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDescription

An optional description of this resource. Provide this property when you create the resource.

**Returns**

**Type**

**Description**

`string`

### hasDescription

### clearDescription

### setDescription

An optional description of this resource. Provide this property when you create the resource.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getId

\[Output Only\] A unique identifier for this instance template. The server defines this identifier.

**Returns**

**Type**

**Description**

`int|string`

### hasId

### clearId

### setId

\[Output Only\] A unique identifier for this instance template. The server defines this identifier.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getKind

\[Output Only\] The resource type, which is always compute#instanceTemplate for instance templates.

**Returns**

**Type**

**Description**

`string`

### hasKind

### clearKind

### setKind

\[Output Only\] The resource type, which is always compute#instanceTemplate for instance templates.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getName

Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

**Returns**

**Type**

**Description**

`string`

### hasName

### clearName

### setName

Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getProperties

The instance properties for this instance template.

**Returns**

**Type**

**Description**

`[Google\Cloud\Compute\V1\InstanceProperties](/php/docs/reference/cloud-compute/1.19.0/V1.InstanceProperties)|null`

### hasProperties

### clearProperties

### setProperties

The instance properties for this instance template.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Compute\V1\InstanceProperties](/php/docs/reference/cloud-compute/1.19.0/V1.InstanceProperties)`  

**Returns**

**Type**

**Description**

`$this`

### getRegion

\[Output Only\] URL of the region where the instance template resides. Only applicable for regional resources.

**Returns**

**Type**

**Description**

`string`

### hasRegion

### clearRegion

### setRegion

\[Output Only\] URL of the region where the instance template resides. Only applicable for regional resources.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSelfLink

\[Output Only\] The URL for this instance template. The server defines this URL.

**Returns**

**Type**

**Description**

`string`

### hasSelfLink

### clearSelfLink

### setSelfLink

\[Output Only\] The URL for this instance template. The server defines this URL.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSourceInstance

The source instance used to create the template. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - [https://www.googleapis.com/compute/v1/projects/project/zones/zone](https://www.googleapis.com/compute/v1/projects/project/zones/zone) /instances/instance - projects/project/zones/zone/instances/instance

**Returns**

**Type**

**Description**

`string`

### hasSourceInstance

### clearSourceInstance

### setSourceInstance

The source instance used to create the template. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - [https://www.googleapis.com/compute/v1/projects/project/zones/zone](https://www.googleapis.com/compute/v1/projects/project/zones/zone) /instances/instance - projects/project/zones/zone/instances/instance

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSourceInstanceParams

The source instance params to use to create this instance template.

**Returns**

**Type**

**Description**

`[Google\Cloud\Compute\V1\SourceInstanceParams](/php/docs/reference/cloud-compute/1.19.0/V1.SourceInstanceParams)|null`

### hasSourceInstanceParams

### clearSourceInstanceParams

### setSourceInstanceParams

The source instance params to use to create this instance template.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Compute\V1\SourceInstanceParams](/php/docs/reference/cloud-compute/1.19.0/V1.SourceInstanceParams)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
