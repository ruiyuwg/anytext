-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Security Command Center V2 Client - Class ResourcePathNode (1.32.0) Stay organized with collections Save and categorize content based on your preferences.

2.5.0 (latest) 2.4.2 2.3.0 2.2.1 2.1.1 2.0.4 1.32.0 1.31.0 1.30.0 1.29.0 1.28.2 1.21.0 1.20.2 1.19.1 1.18.0 1.17.0 1.16.0 1.15.1 1.14.2 1.13.1

Reference documentation and code samples for the Google Cloud Security Command Center V2 Client class ResourcePathNode.

A node within the resource path. Each node represents a resource within the resource hierarchy.

Generated from protobuf message `google.cloud.securitycenter.v2.ResourcePath.ResourcePathNode`

## Namespace

Google \\ Cloud \\ SecurityCenter \\ V2 \\ ResourcePath

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ node_type`

`int`  

The type of resource this node represents.

`↳ id`

`string`  

The ID of the resource this node represents.

`↳ display_name`

`string`  

The display name of the resource this node represents.

### getNodeType

The type of resource this node represents.

**Returns**

**Type**

**Description**

`int`

### setNodeType

The type of resource this node represents.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getId

The ID of the resource this node represents.

**Returns**

**Type**

**Description**

`string`

### setId

The ID of the resource this node represents.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDisplayName

The display name of the resource this node represents.

**Returns**

**Type**

**Description**

`string`

### setDisplayName

The display name of the resource this node represents.

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

Last updated 2026-03-18 UTC.
