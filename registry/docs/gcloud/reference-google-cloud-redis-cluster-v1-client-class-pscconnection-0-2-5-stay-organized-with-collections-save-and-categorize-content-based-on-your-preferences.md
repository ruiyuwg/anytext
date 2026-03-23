-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Redis Cluster V1 Client - Class PscConnection (0.2.5) Stay organized with collections Save and categorize content based on your preferences.

0.6.4 (latest) 0.6.3 0.5.1 0.4.1 0.3.2 0.2.5 0.1.0

Reference documentation and code samples for the Google Cloud Redis Cluster V1 Client class PscConnection.

Details of consumer resources in a PSC connection.

Generated from protobuf message `google.cloud.redis.cluster.v1.PscConnection`

## Namespace

Google \\ Cloud \\ Redis \\ Cluster \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ psc_connection_id`

`string`  

Output only. The PSC connection id of the forwarding rule connected to the service attachment.

`↳ address`

`string`  

Output only. The IP allocated on the consumer network for the PSC forwarding rule.

`↳ forwarding_rule`

`string`  

Output only. The URI of the consumer side forwarding rule. Example: projects/{projectNumOrId}/regions/us-east1/forwardingRules/{resourceId}.

`↳ project_id`

`string`  

Output only. The consumer project\_id where the forwarding rule is created from.

`↳ network`

`string`  

The consumer network where the IP address resides, in the form of projects/{project\_id}/global/networks/{network\_id}.

### getPscConnectionId

Output only. The PSC connection id of the forwarding rule connected to the service attachment.

**Returns**

**Type**

**Description**

`string`

### setPscConnectionId

Output only. The PSC connection id of the forwarding rule connected to the service attachment.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAddress

Output only. The IP allocated on the consumer network for the PSC forwarding rule.

**Returns**

**Type**

**Description**

`string`

### setAddress

Output only. The IP allocated on the consumer network for the PSC forwarding rule.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getForwardingRule

Output only. The URI of the consumer side forwarding rule.

Example: projects/{projectNumOrId}/regions/us-east1/forwardingRules/{resourceId}.

**Returns**

**Type**

**Description**

`string`

### setForwardingRule

Output only. The URI of the consumer side forwarding rule.

Example: projects/{projectNumOrId}/regions/us-east1/forwardingRules/{resourceId}.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getProjectId

Output only. The consumer project\_id where the forwarding rule is created from.

**Returns**

**Type**

**Description**

`string`

### setProjectId

Output only. The consumer project\_id where the forwarding rule is created from.

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

The consumer network where the IP address resides, in the form of projects/{project\_id}/global/networks/{network\_id}.

**Returns**

**Type**

**Description**

`string`

### setNetwork

The consumer network where the IP address resides, in the form of projects/{project\_id}/global/networks/{network\_id}.

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
