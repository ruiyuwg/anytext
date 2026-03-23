-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class TargetInstance (1.20.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

Reference documentation and code samples for the Compute V1 Client class TargetInstance.

Represents a Target Instance resource. You can use a target instance to handle traffic for one or more forwarding rules, which is ideal for forwarding protocol traffic that is managed by a single source. For example, ESP, AH, TCP, or UDP. For more information, read Target instances.

Generated from protobuf message `google.cloud.compute.v1.TargetInstance`

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

\[Output Only\] Creation timestamp in RFC3339 text format.

`↳ description`

`string`  

An optional description of this resource. Provide this property when you create the resource.

`↳ id`

`int|string`  

\[Output Only\] The unique identifier for the resource. This identifier is defined by the server.

`↳ instance`

`string`  

A URL to the virtual machine instance that handles traffic for this target instance. When creating a target instance, you can provide the fully-qualified URL or a valid partial URL to the desired virtual machine. For example, the following are all valid URLs: - [https://www.googleapis.com/compute/v1/projects/project/zones/zone](https://www.googleapis.com/compute/v1/projects/project/zones/zone) /instances/instance - projects/project/zones/zone/instances/instance - zones/zone/instances/instance

`↳ kind`

`string`  

\[Output Only\] The type of the resource. Always compute#targetInstance for target instances.

`↳ name`

`string`  

Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

`↳ nat_policy`

`string`  

Must have a value of NO\_NAT. Protocol forwarding delivers packets while preserving the destination IP address of the forwarding rule referencing the target instance. Check the NatPolicy enum for the list of possible values.

`↳ network`

`string`  

The URL of the network this target instance uses to forward traffic. If not specified, the traffic will be forwarded to the network that the default network interface belongs to.

`↳ security_policy`

`string`  

\[Output Only\] The resource URL for the security policy associated with this target instance.

`↳ self_link`

`string`  

\[Output Only\] Server-defined URL for the resource.

`↳ zone`

`string`  

\[Output Only\] URL of the zone where the target instance resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

### getCreationTimestamp

\[Output Only\] Creation timestamp in RFC3339 text format.

**Returns**

**Type**

**Description**

`string`

### hasCreationTimestamp

### clearCreationTimestamp

### setCreationTimestamp

\[Output Only\] Creation timestamp in RFC3339 text format.

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

\[Output Only\] The unique identifier for the resource. This identifier is defined by the server.

**Returns**

**Type**

**Description**

`int|string`

### hasId

### clearId

### setId

\[Output Only\] The unique identifier for the resource. This identifier is defined by the server.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getInstance

A URL to the virtual machine instance that handles traffic for this target instance. When creating a target instance, you can provide the fully-qualified URL or a valid partial URL to the desired virtual machine. For example, the following are all valid URLs: - [https://www.googleapis.com/compute/v1/projects/project/zones/zone](https://www.googleapis.com/compute/v1/projects/project/zones/zone) /instances/instance - projects/project/zones/zone/instances/instance - zones/zone/instances/instance

**Returns**

**Type**

**Description**

`string`

### hasInstance

### clearInstance

### setInstance

A URL to the virtual machine instance that handles traffic for this target instance. When creating a target instance, you can provide the fully-qualified URL or a valid partial URL to the desired virtual machine. For example, the following are all valid URLs: - [https://www.googleapis.com/compute/v1/projects/project/zones/zone](https://www.googleapis.com/compute/v1/projects/project/zones/zone) /instances/instance - projects/project/zones/zone/instances/instance - zones/zone/instances/instance

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

\[Output Only\] The type of the resource. Always compute#targetInstance for target instances.

**Returns**

**Type**

**Description**

`string`

### hasKind

### clearKind

### setKind

\[Output Only\] The type of the resource. Always compute#targetInstance for target instances.

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

Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

**Returns**

**Type**

**Description**

`string`

### hasName

### clearName

### setName

Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getNatPolicy

Must have a value of NO\_NAT. Protocol forwarding delivers packets while preserving the destination IP address of the forwarding rule referencing the target instance.

Check the NatPolicy enum for the list of possible values.

**Returns**

**Type**

**Description**

`string`

### hasNatPolicy

### clearNatPolicy

### setNatPolicy

Must have a value of NO\_NAT. Protocol forwarding delivers packets while preserving the destination IP address of the forwarding rule referencing the target instance.

Check the NatPolicy enum for the list of possible values.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getNetwork

The URL of the network this target instance uses to forward traffic. If not specified, the traffic will be forwarded to the network that the default network interface belongs to.

**Returns**

**Type**

**Description**

`string`

### hasNetwork

### clearNetwork

### setNetwork

The URL of the network this target instance uses to forward traffic. If not specified, the traffic will be forwarded to the network that the default network interface belongs to.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSecurityPolicy

\[Output Only\] The resource URL for the security policy associated with this target instance.

**Returns**

**Type**

**Description**

`string`

### hasSecurityPolicy

### clearSecurityPolicy

### setSecurityPolicy

\[Output Only\] The resource URL for the security policy associated with this target instance.

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

\[Output Only\] Server-defined URL for the resource.

**Returns**

**Type**

**Description**

`string`

### hasSelfLink

### clearSelfLink

### setSelfLink

\[Output Only\] Server-defined URL for the resource.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getZone

\[Output Only\] URL of the zone where the target instance resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

**Returns**

**Type**

**Description**

`string`

### hasZone

### clearZone

### setZone

\[Output Only\] URL of the zone where the target instance resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.

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
